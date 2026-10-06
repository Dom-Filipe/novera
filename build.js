#!/usr/bin/env node
/*
 * Monta o index.html da Novera a partir de:
 *   src/template.html  (layout, estilos e lógica do site)
 *   news.js            (META, FEATURED, PICKS, U e NEWS)
 *   assets/*.svg       (ilustrações de reserva)
 *
 * Uso: node build.js
 * Antes de gravar, valida o conteúdo. Se houver erro, nada é gravado.
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = __dirname;
const CATS = ['nacional', 'internacional', 'esportes', 'cultura', 'economia', 'tecnologia'];
const POR_EDITORIA = 10;

const newsSrc = fs.readFileSync(path.join(ROOT, 'news.js'), 'utf8');
const tpl = fs.readFileSync(path.join(ROOT, 'src/template.html'), 'utf8');

/* ---------- Carrega os dados ---------- */
const ctx = {};
vm.createContext(ctx);
vm.runInContext(newsSrc + '\n;globalThis.__d = { META, FEATURED, PICKS, NEWS };', ctx, { filename: 'news.js' });
const { META, FEATURED, PICKS, NEWS } = ctx.__d;

/* ---------- Validação ---------- */
const erros = [];
const avisos = [];
const ids = new Set();
const assets = fs.readdirSync(path.join(ROOT, 'assets')).filter(f => f.endsWith('.svg')).map(f => f.slice(0, -4));

NEWS.forEach((n, i) => {
  const onde = `notícia #${i + 1} (${n.id || 'sem id'})`;
  if (!n.id || !/^[a-z0-9]+(-[a-z0-9]+)*$/.test(n.id)) erros.push(`${onde}: id inválido (use letras minúsculas, números e hífens)`);
  if (ids.has(n.id)) erros.push(`${onde}: id repetido`);
  ids.add(n.id);
  if (!CATS.includes(n.cat)) erros.push(`${onde}: editoria "${n.cat}" não existe`);
  if (!/^\d{4}-\d{2}-\d{2}T\d{2}$/.test(n.t || '')) erros.push(`${onde}: campo t deve ser AAAA-MM-DDTHH`);
  ['title', 'sum'].forEach(k => { if (!n[k] || typeof n[k] !== 'string') erros.push(`${onde}: falta ${k}`); });
  if (!Array.isArray(n.body) || n.body.length < 1) erros.push(`${onde}: body precisa de pelo menos 1 parágrafo`);
  if (!assets.includes(n.img)) erros.push(`${onde}: img "${n.img}" não existe em assets/ (opções: ${assets.join(', ')})`);
  if (n.own) {
    if (!Array.isArray(n.sources) || !n.sources.length) erros.push(`${onde}: matéria da redação precisa de sources`);
    else n.sources.forEach(s => { if (!Array.isArray(s) || !s[0] || !/^https?:\/\//.test(s[1] || '')) erros.push(`${onde}: fonte inválida ${JSON.stringify(s)}`); });
  } else {
    if (!n.src) erros.push(`${onde}: notícia de parceiro precisa de src`);
    if (!/^https?:\/\//.test(n.url || '')) erros.push(`${onde}: notícia de parceiro precisa de url`);
  }
  if (n.photo) {
    if (!fs.existsSync(path.join(ROOT, n.photo))) erros.push(`${onde}: foto ${n.photo} não existe`);
    if (!n.photoAlt || !n.credit) erros.push(`${onde}: foto precisa de photoAlt e credit`);
  }
});

CATS.forEach(c => {
  const qtd = NEWS.filter(n => n.cat === c).length;
  if (qtd !== POR_EDITORIA) erros.push(`editoria ${c}: tem ${qtd} notícias, precisa de ${POR_EDITORIA}`);
  if (!NEWS.some(n => n.cat === c && n.own)) erros.push(`editoria ${c}: precisa de ao menos uma matéria da redação (own: true)`);
});

[FEATURED.lead, ...(FEATURED.side || []), ...(FEATURED.also || []), ...(PICKS || [])].forEach(id => {
  if (!ids.has(id)) avisos.push(`destaque/escolha "${id}" não existe e será substituído automaticamente`);
});
['dataExtenso', 'edicao', 'fechamento'].forEach(k => { if (!META[k]) erros.push(`META.${k} vazio`); });

if (erros.length) {
  console.error('ERROS (nada foi gravado):\n- ' + erros.join('\n- '));
  process.exit(1);
}
avisos.forEach(a => console.warn('aviso: ' + a));

/* ---------- Monta ---------- */
const svgs = {};
assets.forEach(a => {
  const t = fs.readFileSync(path.join(ROOT, 'assets', a + '.svg'), 'utf8').trim().replace(/\s+/g, ' ');
  svgs[a] = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(t).replace(/%20/g, ' ').replace(/%3D/g, '=').replace(/%3A/g, ':').replace(/%2F/g, '/').replace(/'/g, '%27');
});

const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const seta = (sobe) => sobe ? '<span class="up">▲ ' : '<span class="down">▼ ';
const ticker = [
  `      <span><b>Ibovespa</b> ${esc(META.ibovespa.valor)} ${seta(META.ibovespa.sobe)}${esc(META.ibovespa.variacao)}</span></span>`,
  `      <span><b>Dólar</b> ${esc(META.dolar.valor)} ${seta(META.dolar.sobe)}${esc(META.dolar.variacao)}</span></span>`,
  `      <span>fechamento ${esc(META.fechamento)}</span>`
].join('\n');

let page = tpl
  .replace('<!--DATA_EXTENSO-->', esc(META.dataExtenso))
  .replace('<!--TICKER-->', ticker)
  .replace('<!--EDICAO-->', esc(META.edicao))
  .replace('/*NEWS*/', () => newsSrc)
  .replace('/*IMG*/{}', () => JSON.stringify(svgs));

const fim = page.indexOf('</style>') + '</style>'.length;
const html = '<!doctype html>\n<html lang="pt-BR">\n<head>\n<meta charset="utf-8">\n' +
  '<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n' +
  '<meta name="description" content="Novera: informação sem fronteiras. Notícias do Brasil e do mundo.">\n' +
  '<style>[hidden]{display:none!important} body{margin:0}</style>\n' +
  page.slice(0, fim) + '\n</head>\n<body>\n' + page.slice(fim) + '\n</body>\n</html>\n';

/* Confere se o script final é JavaScript válido */
const script = html.split('<script>')[1].split('</script>')[0];
try { new vm.Script(script, { filename: 'index.html' }); } catch (e) {
  console.error('ERRO de sintaxe no script gerado: ' + e.message);
  process.exit(1);
}

fs.writeFileSync(path.join(ROOT, 'index.html'), html);
const comFoto = NEWS.filter(n => n.photo || fs.existsSync(path.join(ROOT, 'fotos', n.id + '.webp'))).length;
console.log(`index.html gerado: ${NEWS.length} notícias, ${comFoto} com foto, ${NEWS.filter(n => n.own).length} da redação.`);
