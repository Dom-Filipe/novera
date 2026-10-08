/* ============================================================
   NOVERA: conteúdo do site. Edite este arquivo e rode `node build.js`.
   Regras completas em ATUALIZACAO.md.
   ============================================================ */

/* Topo do site: data da edição e mercado */
const META = {
  /* Endereço público do site, sem barra no final. Usado nos links das redes sociais. */
  siteUrl: 'https://novera-sepia.vercel.app',
  dataExtenso: 'Quinta-feira, 8 de outubro de 2026',
  edicao: '8 out 2026',
  ibovespa: { valor: '204.302', variacao: '0,74%', sobe: false },
  dolar: { valor: 'R$ 5,02', variacao: '0,83%', sobe: true },
  fechamento: '7/10'
};

/* Home: destaque principal, dois laterais e três da faixa de baixo (IDs de notícias "own: true") */
const FEATURED = {
  lead: 'republicanos-novo-apoio-flavio',
  side: ['tse-julga-garotinho-eleicao-rio', 'russia-ataque-kiev-mortos'],
  also: ['corinthians-demite-fernando-diniz', 'nobel-quimica-kagan-soai', 'leilao-pre-sal-sete-blocos']
};

/* Home: "Escolhas da redação" (5 IDs) */
const PICKS = ['segundo-turno-flavio-lula', 'ibovespa-cai-dolar-volta-5-reais', 'bets-saem-do-ar-devolucao-saldos', 'estreias-cinema-se-eu-fosse-voce-3', 'israel-tres-anos-7-de-outubro'];

const U = {
  /* Nacional */
  tse1t: 'https://www.tse.jus.br/comunicacao/noticias/2026/Outubro/flavio-bolsonaro-e-lula-vao-disputar-o-2o-turno-para-a-presidencia-da-republica',
  sen: 'https://www12.senado.leg.br/noticias/materias/2026/10/04/flavio-bolsonaro-e-lula-disputam-o-segundo-turno-das-eleicoes-para-presidente',
  cnnSen: 'https://www.cnnbrasil.com.br/eleicoes/divisao-bancada-senado/',
  gazetaApoio: 'https://www.gazetadopovo.com.br/eleicoes/2026/uniao-brasil-e-pp-anunciam-apoio-a-flavio-bolsonaro-no-segundo-turno/',
  cnnRep: 'https://www.cnnbrasil.com.br/eleicoes/republicanos-confirma-apoio-a-flavio-bolsonaro-no-2o-turno-das-eleicoes/',
  corRep: 'https://www.correiobraziliense.com.br/politica/2026/10/7516842-republicanos-oficializa-apoio-a-flavio-bolsonaro-no-2-turno.html',
  p360Rep: 'https://www.poder360.com.br/poder-eleicoes-2026/republicanos-define-apoio-a-flavio-no-2o-turno-contra-lula/',
  sbtNovo: 'https://sbtnews.sbt.com.br/noticia/eleicoes/apos-zema-novo-anuncia-apoio-a-flavio-bolsonaro-no-2-turno',
  sbtLula: 'https://sbtnews.sbt.com.br/noticia/eleicoes/lula-diz-que-campanha-foi-a-menos-organizada-desde-1989',
  tbFlavio: 'https://timesbrasil.com.br/brasil/decisao-2026-flavio-acusa-lula-de-usar-fim-da-escala-6x1-por-interesse-eleitoral-e-defende-mulheres-no-judiciario-veja-o-dia-do-candidato/',
  metReale: 'https://www.metropoles.com/brasil/autor-do-impeachment-de-dilma-diz-que-votar-em-flavio-e-legitimar-golpe',
  sen6x1: 'https://www12.senado.leg.br/noticias/materias/2026/10/07/pec-do-fim-da-escala-6x1-passa-por-2a-sessao-de-discussao-no-plenario',
  abStf: 'https://agenciabrasil.ebc.com.br/justica/noticia/2026-10/stf-deve-julgar-revisao-da-condenacao-de-bolsonaro-apos-eleicoes',
  dRio: 'https://diariodorio.com/politica/2026/10/06/tse-inclui-recurso-de-garotinho-na-pauta-de-quinta-feira-e-pode-definir-eleicao-para-governador-do-rio.html',
  dRioRuas: 'https://diariodorio.com/politica/2026/10/07/confio-na-justica-diz-douglas-ruas-sobre-votos-de-garotinho-e-possivel-fim-do-2-turno.html',
  abOab: 'https://agenciabrasil.ebc.com.br/politica/noticia/2026-10/oab-rj-defende-decisao-rapida-do-tse-para-eleicoes-no-estado',
  p360Mpe: 'https://www.poder360.com.br/poder-justica/mpe-e-favoravel-a-desistencia-de-recurso-de-garotinho-no-tse/',
  abHorario: 'https://agenciabrasil.ebc.com.br/politica/noticia/2026-10/campanha-eleitoral-para-o-segundo-turno-comeca-nesta-segunda-feira',
  /* Internacional */
  dn: 'https://www.democracynow.org/2026/10/5/headlines',
  toi: 'https://www.timesofisrael.com/liveblog_entry/israel-marks-3-years-since-october-7-attack-with-commemorations-starting-at-629-a-m/',
  ajGaza: 'https://www.aljazeera.com/news/2026/10/7/three-years-of-israels-genocide-in-gaza-in-numbers',
  cnn7out: 'https://kesq.com/news/national-world/cnn-world/2026/10/06/israel-marks-three-years-since-october-7-attack-with-memorials-and-protests/',
  ajFranca: 'https://www.aljazeera.com/news/2026/10/6/demonstrators-clash-with-riot-police-in-france-as-education-protests-mount',
  ajKiev: 'https://www.aljazeera.com/news/2026/10/7/at-least-two-killed-in-kyiv-as-russia-launches-massive-attack-on-ukraine',
  kiKiev: 'https://kyivindependent.com/russia-slams-kyiv-in-mass-missile-drone-attack-on-putins-74th-birthday/',
  ajEbola: 'https://www.aljazeera.com/news/2026/10/6/kenya-confirms-first-ebola-case-after-patient-from-dr-congo-dies-in-nairobi',
  ajCatar: 'https://www.aljazeera.com/news/2026/10/8/tanker-hit-by-multiple-projectiles-off-north-coast-of-qatar-ukmto-says',
  foxIsaias: 'https://www.foxweather.com/weather-news/isaias-first-atlantic-hurricane-threatening-gulf-coast',
  kiSancoes: 'https://kyivindependent.com/eu-ambassadors-wave-through-largest-ever-list-of-russia-sanctions-2/',
  forbesTrump: 'https://www.forbes.com/sites/siladityaray/2026/10/08/trump-clarifies-let-them-hit-los-angeles-iran-war-comment-says-he-wont-let-that-happen/',
  ajSudao: 'https://www.aljazeera.com/news/2026/10/7/sudans-al-burhan-rejects-talks-vows-to-retake-all-territory-from-rsf',
  /* Esportes */
  lanceDiniz: 'https://www.lance.com.br/corinthians/corinthians-demite-fernando-diniz-apos-sete-jogos-sem-vencer-no-brasileirao.html',
  gazInter: 'https://gazetaesportiva.com/campeonatos/brasileiro-serie-a/internacional-corinthians-brasileirao-07-10-2026',
  gazRamon: 'https://gazetaesportiva.com/times/corinthians/corinthians-ramon-diaz-substituto-diniz',
  lanceRodada: 'https://lance.com.br/futebol-nacional/brasileirao-de-volta-confira-o-retrospecto-dos-jogos-da-29a-rodada.html',
  gazSantos: 'https://www.gazetaesportiva.com/times/santos/escalacao-santos-flamengo-bontempo-neymar/',
  terraSanFla: 'https://www.terra.com.br/esportes/flamengo/santos-x-flamengo-onde-assistir-escalacoes-e-arbitragem,a6a3e04530d89289375bd92fe2115d6f6cowql75.html',
  terraPalBah: 'https://www.terra.com.br/esportes/palmeiras/palmeiras-x-bahia-onde-assistir-escalacoes-e-arbitragem,3aaf7554ad97a0d153be1f6fc7c22aaewsh6sbko.html',
  pp: 'https://portaldopalestra.com.br/palmeiras-flamengo-lideranca-brasileirao-29a-30a-rodada-criterio-vitorias-desempate-conta/',
  laNacion: 'https://www.lanacion.com.ar/deportes/futbol/asi-quedo-el-cuadro-de-semifinales-de-la-copa-libertadores-2026-nid17092026/',
  lance: 'https://www.lance.com.br/fluminense/semifinal-da-libertadores-quando-e-contra-quem-joga-o-fluminense.html',
  siMessi: 'https://www.si.com/es-us/futbol/lionel-messi-brilla-con-gol-y-dos-asistencias-en-su-despedida-de-la-seleccion-argentina',
  cnnCruzeiro: 'https://www.cnnbrasil.com.br/esportes/brasileirao/kaio-jorge-marca-cruzeiro-vence-o-sao-paulo-e-pode-terminar-a-rodada-no-g4/',
  cnnVasco: 'https://cnnbrasil.com.br/esportes/futebol/botafogo/jogadores-do-botafogo-sao-encaminhados-ao-hospital-apos-classico-com-vasco',
  gazVila: 'https://www.gazetaesportiva.com/campeonatos/brasileiro-serie-b/vila-nova-empata-com-cuiaba-e-perde-chance-de-assumir-lideranca-da-serie-b/',
  gpF1: 'https://grandepremio.com/br/f1/antonelli-pode-ser-campeao-em-singapura-veja-a-matematica-do-titulo-da-f1-2026/',
  lanceSel: 'https://www.lance.com.br/selecao-brasileira/cbf-confirma-datas-e-horarios-dos-amistosos-contra-japao-e-singapura.html',
  dgabcXangai: 'https://www.dgabc.com.br/Noticia/4351449/berrettini-vence-de-virada-e-rune-cai-na-estreia-do-masters-de-xangai',
  /* Cultura */
  otEstreias: 'https://otempo.com.br/entretenimento/2026/10/7/o-que-assistir-no-cinema-veja-5-filmes-que-estreiam-nesta-quinta-feira-8-de-outubro',
  adtEstreias: 'https://alemdatela.com/a-semana-tem-troca-de-corpo-mae-falsa-e-monstro-coreano-8-filmes-disputam-o-seu-ingresso/',
  cnnEva: 'https://www.cnnbrasil.com.br/pop/cinema/eva-marie-saint-atriz-vencedora-do-oscar-morre-aos-102-anos/',
  omeEva: 'https://www.omelete.com.br/filmes/eva-marie-saint-atriz-morre-102-anos',
  nscJuarez: 'https://www.nsctotal.com.br/cotidiano/morre-aos-85-anos-o-artista-plastico-joinvilense-juarez-machado',
  euroSky: 'https://www.euronews.com/2026/10/06/paramount-and-warner-bros-complete-merger-to-form-hollywood-giant-skydance',
  cnnMostra: 'https://www.cnnbrasil.com.br/pop/cinema/mostra-internacional-de-cinema-de-sao-paulo-revela-programacao-de-2026/',
  rsBts: 'https://rollingstone.com.br/guia-show/bts-no-brasil-novas-ingressos-serao-disponibilizados-hoje-as-19h/',
  rsPitty: 'https://rollingstone.com.br/musica/pitty-revela-capa-e-tracklist-de-primeiro-album-autoral-em-sete-anos/',
  otLolla: 'https://www.otempo.com.br/entretenimento/2026/10/7/lollapalooza-brasil-2027-line-up-sera-divulgado-nesta-quinta-feira-8-10',
  abTomZe: 'https://agenciabrasil.ebc.com.br/cultura/noticia/2026-10/exposicao-em-sao-paulo-celebra-os-90-anos-de-tom-ze',
  tbMarilia: 'https://timesbrasil.com.br/entretenimento/sao-paulo-reune-eventos-culturais-na-proxima-semana/',
  /* Economia */
  imMerc7: 'https://www.infomoney.com.br/mercados/ibovespa-hoje-bolsa-de-valores-ao-vivo-07102026/',
  abDolar7: 'https://agenciabrasil.ebc.com.br/economia/noticia/2026-10/dolar-volta-r-5-com-ambiente-externo-e-ajuste-pos-eleitoral',
  cnnMerc7: 'https://www.cnnbrasil.com.br/economia/money/mercado/mercado-financeiro-ibovespa-dolar-7-outubro-2026/',
  imFed: 'https://www.infomoney.com.br/economia/juros-nos-eua-nova-alta-ata-fed/',
  opovoPreSal: 'https://www.opovo.com.br/noticias/economia/2026/10/07/maior-leilao-do-pre-sal-termina-com-sete-dos-13-blocos-arrematados.html',
  mtPreSal: 'https://www.moneytimes.com.br/petrobras-petr4-e-prio-prio3-estao-entre-vencedoras-de-leilao-de-7-blocos-do-pre-sal-lils/',
  abAnp: 'https://agenciabrasil.ebc.com.br/economia/noticia/2026-10/leilao-da-anp-arrecada-r-3-bilhoes-com-venda-de-49-blocos',
  cnnMerc: 'https://www.cnnbrasil.com.br/economia/money/mercado/mercado-hoje-5-outubro-2026/',
  abBalanca: 'https://agenciabrasil.ebc.com.br/economia/noticia/2026-10/previsao-de-superavit-comercial-de-2026-cai-para-us-844-bilhoes',
  abBets: 'https://agenciabrasil.ebc.com.br/geral/noticia/2026-10/bets-comecam-sair-do-ar-nesta-terca-feira',
  abBets2: 'https://agenciabrasil.ebc.com.br/economia/noticia/2026-10/cerca-de-132-mil-sites-de-bets-ilegais-sao-bloqueados',
  abAnfavea: 'https://agenciabrasil.ebc.com.br/economia/noticia/2026-10/producao-de-veiculos-tem-melhor-setembro-desde-2014-diz-anfavea',
  imIgp: 'https://www.infomoney.com.br/economia/igp-di-acelera-alta-a-150-em-setembro-por-commodities-agricolas-e-energia-diz-fgv/',
  tbCampos: 'https://timesbrasil.com.br/brasil/pf-adia-depoimento-de-roberto-campos-neto-sobre-caso-banco-master/',
  imDurigan: 'https://www.infomoney.com.br/economia/tenho-dificuldade-em-entender-essa-euforia-diz-durigan-sobre-mercado-apos-1o-turno/',
  /* Tecnologia */
  ajQuimica: 'https://www.aljazeera.com/news/2026/10/7/henri-kagan-kenso-soai-win-chemistry-nobel-for-mirror-image-breakthrough',
  odQuimica: 'https://olhardigital.com.br/2026/10/07/ciencia-e-espaco/misterio-de-mais-de-100-anos-na-quimica-rende-nobel-a-cientistas/',
  opovoQuimica: 'https://mais.opovo.com.br/jornal/farol/2026/10/08/nobel-de-quimica-premia-processo-que-facilita-fabricacao-de-farmacos.html',
  genQuimica: 'https://www.genengnews.com/topics/drug-discovery/kagan-soai-win-2026-nobel-prize-in-chemistry-for-discoveries-related-to-asymmetric-organic-synthesis/',
  cnnNobel: 'https://cnnbrasil.com.br/internacional/nobel-de-medicina-vai-para-tres-cientistas-por-avanco-na-neurociencia',
  aipNobel: 'https://www.aip.org/aip/aip-congratulates-2026-nobel-prize-winner-in-physics',
  jbNobel: 'https://www.jb.com.br/ciencia-e-tecnologia/ciencia/2026/10/1061132-francis-halzen-ganha-nobel-de-fisica-2026-por-estudo-de-neutrinos-na-antartica.html',
  oaiGpt6: 'https://openai.com/index/gpt-6-for-everyone/',
  tcSurface: 'https://techcrunch.com/2026/10/07/microsoft-releases-new-nvidia-chip-ai-pcs-with-revamped-windows-11/',
  tcSynth: 'https://techcrunch.com/2026/10/07/googles-new-synthid-website-can-identify-ai-generated-media/',
  odFlorida: 'https://olhardigital.com.br/2026/10/07/internet-e-redes-sociais/facebook-e-instagram-podem-ganhar-limite-de-duas-horas-para-adolescentes-nos-eua/',
  nasaArtemis: 'https://nasa.gov/blogs/missions/2026/10/07/nasa-releases-artemis-ii-lunar-science-data-images',
  odFmi: 'https://olhardigital.com.br/2026/10/07/inteligencia-artificial/fmi-alerta-que-avanco-da-ia-pode-virar-risco-para-a-economia-global/',
  dgabcLupa: 'https://dgabc.com.br/Noticia/4351247/nas-eleicoes-2026-quase-um-conteudo-eleitoral-com-ia-circulou-por-hora'
};

const NEWS = [
/* ===================== NACIONAL ===================== */
{ id: 'republicanos-novo-apoio-flavio', cat: 'nacional', own: true, t: '2026-10-08T05', d: '8 out 2026', img: 'eleicao', read: 4,
  title: 'Republicanos e Novo oficializam apoio a Flávio; Lula admite falhas na campanha',
  sum: 'O partido de Tarcísio de Freitas deixou a neutralidade, mas liberou aliados na Paraíba e em Pernambuco. Lula disse que fez a campanha menos organizada de que participou desde 1989.',
  body: [
    'As duas campanhas presidenciais tiveram na quarta-feira (7) mais um dia de articulação para o segundo turno, marcado para 25 de outubro. Flávio Bolsonaro (PL) somou o apoio de dois partidos que não estavam com ele no primeiro turno. Lula (PT) reuniu aliados em Brasília para rever a estratégia nas redes sociais.',
    '## Republicanos',
    'O anúncio do Republicanos foi feito à noite, em Brasília, pelo presidente do partido, o deputado Marcos Pereira (SP). Ele disse que o apoio não é automático nem um "cheque em branco" e que Flávio precisa construir pontes. Estavam presentes o governador reeleito de São Paulo, Tarcísio de Freitas, que articulou a adesão, a senadora Damares Alves (DF) e o governador eleito de Minas Gerais, Cleitinho Azevedo.',
    'Pereira liberou os aliados que preferirem Lula em estados com situações locais próprias, como Paraíba e Pernambuco. O presidente da Câmara, Hugo Motta (Republicanos-PB), que já tinha declarado apoio à reeleição de Lula, não participou do anúncio. O partido elegeu 41 deputados federais, 28 deles em estados onde Flávio venceu o primeiro turno.',
    '## Novo',
    'Mais cedo, Flávio recebeu no comitê de campanha o presidente do Novo, Eduardo Ribeiro, e os senadores eleitos Marcel van Hattem (RS) e Deltan Dallagnol (PR). O candidato chamou o apoio de programático e disse que a disputa agora é entre quem quer mudança e quem não quer. Ele também afirmou que vai buscar quem não votou: a abstenção no primeiro turno foi de 21,08%, a maior desde 1998.',
    '## O balanço de Lula',
    'Depois de reunião com aliados e parlamentares eleitos, Lula disse que fez uma campanha aquém do que podia e a menos organizada de que participou desde 1989. O presidente admitiu ter resistido a usar as redes sociais e, no mesmo dia, publicou vídeos gravados com o celular, um deles em defesa do fim da escala 6x1. Aos apoiadores, pediu que digam aos eleitores que quem votar em Flávio vai perder o que tem.'
  ],
  box: { type: 'table', title: 'Os apoios no 2º turno', head: ['Partido ou político', 'Posição'], rows: [['Republicanos', 'Apoio a Flávio, com aliados liberados na PB e em PE'], ['Novo e Romeu Zema', 'Apoio a Flávio'], ['União Brasil e PP', 'Apoio a Flávio'], ['Ronaldo Caiado (PSD)', 'Apoio a Flávio'], ['Hugo Motta (Republicanos-PB)', 'Apoio a Lula'], ['PSD', 'Diretórios liberados'], ['Augusto Cury e Renan Santos', 'Neutros']], note: 'Fontes: CNN Brasil, Correio Braziliense, Poder360, SBT News, Gazeta do Povo e Agência Brasil.' },
  sources: [['CNN Brasil', U.cnnRep], ['Correio Braziliense', U.corRep], ['Poder360', U.p360Rep], ['SBT News', U.sbtNovo], ['SBT News', U.sbtLula]] },

{ id: 'tse-julga-garotinho-eleicao-rio', cat: 'nacional', own: true, t: '2026-10-08T04', d: '8 out 2026', img: 'congresso', read: 3,
  photo: 'fotos/tse-julga-garotinho-eleicao-rio.webp', photoAlt: 'Fachada do prédio do Tribunal Superior Eleitoral, em Brasília, com a placa do tribunal em primeiro plano', credit: 'Foto: reprodução',
  title: 'TSE julga nesta quinta caso que pode definir a eleição para governador do Rio',
  sum: 'Se os votos de Anthony Garotinho forem anulados, Douglas Ruas (PL) passa a ter 50,88% dos válidos e vence sem segundo turno.',
  body: [
    'O Tribunal Superior Eleitoral julga nesta quinta-feira (8), a partir das 10h, um pedido de Anthony Garotinho (Republicanos) que pode mudar o resultado da eleição no Rio de Janeiro. O relator é o ministro Floriano de Azevedo Marques.',
    'Garotinho foi declarado inelegível em 11 de setembro, mas o nome dele continuou na urna porque a decisão saiu depois do fechamento do sistema. Ele teve 274.411 votos, ou 3,17% dos válidos. Na segunda-feira (5), o candidato pediu para desistir do recurso contra a impugnação da candidatura.',
    '## O que está em jogo',
    'Pelo resultado divulgado, Douglas Ruas (PL) teve 49,27% e Eduardo Paes (PSD), 42,76%, e os dois disputariam o segundo turno. Se a desistência for aceita e os votos de Garotinho forem anulados, Ruas sobe para 50,88% dos votos válidos e é eleito já no primeiro turno.',
    '## Os dois lados',
    'O Ministério Público Eleitoral deu parecer favorável à desistência. O PSOL recorreu, argumentando que o destino dos votos deve ser decidido pela Justiça Eleitoral, e não pelo candidato. A coligação de Paes é contra a mudança na contagem e acusa Garotinho e Ruas de combinarem a manobra. Na quarta-feira (7), Ruas disse confiar na Justiça e afirmou que foi Paes quem pediu a anulação dos votos de Garotinho.',
    'A presidente da OAB-RJ, Ana Tereza Basilio, pediu uma decisão antes do prazo do segundo turno. O julgamento pode não terminar nesta quinta, por causa de pedidos processuais das partes.'
  ],
  box: { type: 'bars', title: 'Governo do RJ: 1º turno', unit: '% dos votos válidos', max: 55, rows: [['Douglas Ruas (PL)', 49.27], ['Eduardo Paes (PSD)', 42.76], ['Anthony Garotinho (Republicanos)', 3.17]], note: 'Sem os votos de Garotinho, Ruas teria 50,88%. Fonte: Diário do Rio.' },
  sources: [['Diário do Rio', U.dRio], ['Diário do Rio', U.dRioRuas], ['Agência Brasil', U.abOab], ['Poder360', U.p360Mpe]] },

{ id: 'segundo-turno-flavio-lula', cat: 'nacional', own: true, t: '2026-10-05T09', d: '5 out 2026', img: 'eleicao', read: 4,
  photo: 'fotos/segundo-turno-flavio-lula.webp', photoAlt: 'Flávio Bolsonaro sorri segurando um microfone, ao lado de Lula sorrindo de chapéu panamá', credit: 'Fotos: reprodução',
  title: 'Flávio Bolsonaro e Lula vão ao segundo turno em 25 de outubro',
  sum: 'Candidato do PL terminou o primeiro turno com 47,03% dos votos válidos, contra 45,16% do presidente, segundo o TSE. A diferença foi de cerca de 2,2 milhões de votos.',
  body: [
    'O segundo turno da eleição presidencial será disputado em 25 de outubro entre Flávio Bolsonaro (PL) e o presidente Luiz Inácio Lula da Silva (PT). Com 99,99% das urnas apuradas, Flávio terminou na frente, com 47,03% dos votos válidos, ou 56,1 milhões de votos. Lula somou 45,16%, ou 53,9 milhões, segundo o Tribunal Superior Eleitoral.',
    'Nenhum dos dois passou da metade dos votos válidos, condição para vencer já no primeiro turno. A distância entre eles ficou abaixo de dois pontos percentuais.',
    'Os demais candidatos ficaram bem atrás. Augusto Cury (Avante) teve 2,89%, Renan Santos (Missão) 2,24% e Ronaldo Caiado (PSD) 2,18%. Outros sete nomes tiveram, cada um, menos de 0,3% dos votos válidos.',
    '## As chapas',
    'Flávio tem como candidato a vice Alfredo Gaspar (PL), ex-promotor de Justiça. Lula repete a parceria com Geraldo Alckmin (PSB), ex-governador de São Paulo.',
    '## Participação',
    'O comparecimento foi de 78,92% do eleitorado, e a abstenção, de 21,08%. Os votos nulos representaram 2,93% do total, e os brancos, 1,84%.',
    '## O que vem agora',
    'Nas próximas semanas, as duas campanhas disputam os eleitores dos candidatos que ficaram pelo caminho, que somaram pouco mais de 7% dos votos válidos, e os mais de 20% que não foram às urnas.'
  ],
  box: { type: 'bars', title: 'Resultado do 1º turno', unit: '% dos votos válidos', max: 50, rows: [['Flávio Bolsonaro (PL)', 47.03], ['Lula (PT)', 45.16], ['Augusto Cury (Avante)', 2.89], ['Renan Santos (Missão)', 2.24], ['Ronaldo Caiado (PSD)', 2.18]], note: 'Fontes: TSE e Agência Senado.' },
  sources: [['TSE', U.tse1t], ['Agência Senado', U.sen]] },

{ id: 'campanhas-segundo-turno-primeiros-apoios', cat: 'nacional', own: false, t: '2026-10-07T06', d: '7 out 2026', img: 'eleicao', src: 'Gazeta do Povo', url: U.gazetaApoio,
  photo: 'fotos/campanhas-segundo-turno-primeiros-apoios.webp', photoAlt: 'Arte com o texto Eleições 2026, com o zero do ano em amarelo formando o mapa do Brasil', credit: 'Arte: reprodução',
  title: 'União Brasil, PP e Caiado apoiam Flávio; Lula defende o fim da escala 6x1',
  sum: 'A federação, neutra no primeiro turno, decidiu por unanimidade. Lula cobrou do rival uma posição sobre a PEC da jornada de trabalho.',
  body: [
    'A federação formada por União Brasil e PP anunciou apoio a Flávio Bolsonaro na terça-feira (6), em Brasília. Em Goiânia, o ex-governador Ronaldo Caiado (PSD), quinto colocado no primeiro turno, oficializou a adesão em evento com Tarcísio de Freitas.',
    'No mesmo dia, Lula defendeu a PEC que reduz a jornada máxima de 44 para 40 horas semanais e questionou se Flávio vai orientar o PL a votar contra a proposta no Senado.'
  ] },

{ id: 'flavio-reune-eleitos-pl-dividas', cat: 'nacional', own: false, t: '2026-10-07T16', d: '7 out 2026', img: 'eleicao', src: 'Times Brasil', url: U.tbFlavio,
  title: 'Flávio reúne eleitos do PL e propõe programa para renegociar dívidas pela Caixa',
  sum: 'O candidato disse que Lula usa a PEC da escala 6x1 pensando no poder e defendeu que o Senado vote o tema depois do segundo turno.',
  body: [
    'O encontro, em Brasília, foi convocado pelo presidente do PL, Valdemar Costa Neto, e reuniu deputados, senadores e governadores eleitos pelo partido, entre eles Michelle Bolsonaro. Flávio disse que vai usar os eleitos na reta final da campanha.',
    'Pela proposta, a Caixa compraria dívidas em atraso e as refinanciaria com prazos maiores e juros menores, com carência de seis meses para pessoas e de um ano para empresas. Flávio repetiu que, se eleito, não vai disputar a reeleição.'
  ] },

{ id: 'reale-junior-apoio-lula', cat: 'nacional', own: false, t: '2026-10-07T21', d: '7 out 2026', img: 'eleicao', src: 'Metrópoles', url: U.metReale,
  title: 'Miguel Reale Júnior, coautor do pedido de impeachment de Dilma, declara apoio a Lula',
  sum: 'Em carta nas redes, o ex-ministro da Justiça de Fernando Henrique disse que votar em Flávio é legitimar o golpe.',
  body: [
    'Na carta, chamada "Cuidado com o precipício", o jurista ligou o voto em Flávio à anistia aos atos de 8 de janeiro de 2023. Ele também criticou o apoio do candidato à classificação de organizações criminosas brasileiras como terroristas pelos Estados Unidos e o elogio ao modelo de segurança de El Salvador.'
  ] },

{ id: 'pec-6x1-segunda-sessao-senado', cat: 'nacional', own: false, t: '2026-10-07T19', d: '7 out 2026', img: 'congresso', src: 'Agência Senado', url: U.sen6x1,
  title: 'PEC do fim da escala 6x1 tem segunda sessão de discussão no Senado',
  sum: 'A terceira das cinco sessões do primeiro turno está marcada para esta quinta, às 14h. Ainda não há data para a votação.',
  body: [
    'A proposta reduz a jornada máxima de 44 para 40 horas semanais e precisa de 49 dos 81 votos em cada um dos dois turnos. A líder do governo, Teresa Leitão (PT-PE), recolhe assinaturas para um calendário especial de votação.',
    'Oriovisto Guimarães (PSDB-PR) disse não se opor ao mérito da proposta, mas criticou a forma como ela está sendo conduzida.'
  ] },

{ id: 'stf-revisao-bolsonaro-apos-eleicao', cat: 'nacional', own: false, t: '2026-10-07T15', d: '7 out 2026', img: 'congresso', src: 'Agência Brasil', url: U.abStf,
  title: 'STF só vai julgar revisão da condenação de Bolsonaro depois da eleição',
  sum: 'O relator, Kassio Nunes Marques, informou que o caso não será analisado antes do fim do pleito para não interferir na votação.',
  body: [
    'A defesa do ex-presidente tenta derrubar a condenação a 27 anos e 3 meses de prisão por tentativa de golpe, decidida pela Primeira Turma. O caso aguarda manifestação da Procuradoria-Geral da República e será julgado no plenário, em data a ser marcada pelo presidente do STF, Edson Fachin.'
  ] },

{ id: 'horario-eleitoral-segundo-turno', cat: 'nacional', own: false, t: '2026-10-06T10', d: '6 out 2026', img: 'eleicao', src: 'Agência Brasil', url: U.abHorario,
  title: 'Horário eleitoral do segundo turno começa na sexta',
  sum: 'A propaganda vai de 9 a 23 de outubro. A primeira pesquisa Datafolha após o primeiro turno sai na quinta.',
  body: [
    'Cada candidato a presidente terá 5 minutos em cada um dos dois blocos diários, no rádio às 7h e ao meio-dia e na TV às 13h e às 20h30, além de inserções ao longo da programação.',
    'Segundo o Brasil de Fato, o Datafolha divulga na quinta (8) a primeira pesquisa de segundo turno feita depois da votação de domingo, e a AtlasIntel, na sexta (9).'
  ] },

{ id: 'pl-maior-bancada-senado', cat: 'nacional', own: false, t: '2026-10-05T08', d: '5 out 2026', img: 'congresso', src: 'CNN Brasil', url: U.cnnSen,
  photo: 'fotos/pl-maior-bancada-senado.webp', photoAlt: 'PL elege maior bancada do Senado', credit: 'Imagem ilustrativa',
  title: 'PL elege 19 senadores e terá a maior bancada do Senado a partir de 2027',
  sum: 'Partido de Flávio Bolsonaro passa de 15 para 28 cadeiras. O PT terá 9 senadores e o MDB, 8.',
  body: [
    'O PL elegeu 19 dos 54 senadores escolhidos no domingo (4) e terá 28 das 81 cadeiras a partir de fevereiro de 2027. Depois vêm PT, com 9, MDB, com 8, e Republicanos e PP, com 6 cada.',
    'A eleição renovou dois terços do Senado. Os eleitos se juntam aos 27 senadores com mandato até 2031.'
  ] },

/* ===================== INTERNACIONAL ===================== */
{ id: 'russia-ataque-kiev-mortos', cat: 'internacional', own: true, t: '2026-10-07T20', d: '7 out 2026', img: 'mundo', read: 3,
  photo: 'fotos/russia-ataque-kiev-mortos.webp', photoAlt: 'Explosão ilumina o céu noturno de uma cidade, com uma grande nuvem de fogo e fumaça', credit: 'Foto: reprodução',
  title: 'Ataque russo no aniversário de Putin mata ao menos 28 pessoas na Ucrânia',
  sum: 'Um míssil atingiu um prédio residencial em Pryluky, onde morreram ao menos 20 pessoas, entre elas cinco crianças. A Rússia lançou 48 mísseis de cruzeiro e 130 drones.',
  body: [
    'A Rússia lançou na madrugada de quarta-feira (7) um ataque aéreo em larga escala contra a Ucrânia, no dia em que o presidente Vladimir Putin completou 74 anos. Segundo balanço do Kyiv Independent, ao menos 28 pessoas morreram e 118 ficaram feridas em várias regiões do país.',
    '## Onde houve mortes',
    'O caso mais grave foi em Pryluky, na região de Chernihiv, onde um míssil de cruzeiro atingiu um prédio residencial. Ao menos 20 pessoas morreram, cinco delas crianças, e 55 ficaram feridas. Em Kiev, foram 4 mortos e 13 feridos, e parte da cidade ficou sem luz e sem água. Kremenchuk e Oleksandriia tiveram duas mortes cada.',
    '## Mísseis e drones',
    'Segundo a Força Aérea ucraniana, foram lançados 48 mísseis de cruzeiro, dos quais 39 foram derrubados, e 130 drones, com 117 abatidos, além de mísseis balísticos. O presidente Volodymyr Zelensky disse que ainda pode haver pessoas sob os escombros em Pryluky.',
    'Segundo a Al Jazeera, a Rússia afirmou ter atingido instalações da Fire Point, empresa que fabrica o míssil ucraniano Flamingo. Portos da região de Odessa também foram alvo.'
  ],
  box: { type: 'facts', title: 'O ataque em números', rows: [['Mortos', 'ao menos 28'], ['Feridos', '118'], ['Mísseis de cruzeiro', '48 (39 derrubados)'], ['Drones', '130 (117 derrubados)']] },
  sources: [['Kyiv Independent', U.kiKiev], ['Al Jazeera', U.ajKiev]] },

{ id: 'israel-tres-anos-7-de-outubro', cat: 'internacional', own: true, t: '2026-10-07T06', d: '7 out 2026', img: 'mundo', read: 3,
  photo: 'fotos/israel-tres-anos-7-de-outubro.webp', photoAlt: 'Barracas de deslocados montadas entre os escombros de prédios destruídos em Gaza', credit: 'Foto: reprodução',
  title: 'Israel lembra três anos do ataque de 7 de outubro; mortos em Gaza passam de 73 mil',
  sum: 'Cerimônias começaram às 6h29, hora em que o ataque do Hamas teve início em 2023. Em Gaza, os bombardeios continuam mesmo com o cessar-fogo.',
  body: [
    'Israel marca nesta quarta-feira (7) três anos do ataque liderado pelo Hamas em 7 de outubro de 2023, quando cerca de 1.200 pessoas foram mortas e 251 levadas como reféns. Só no festival de música Nova morreram 378 pessoas.',
    'As homenagens começaram às 6h29, horário do início do ataque, e incluem um minuto de silêncio ao meio-dia e uma cerimônia à noite em Tel Aviv. Segundo a CNN, há mais de 400 locais de homenagem pelo país. Famílias de vítimas cobram responsabilização pelas falhas daquele dia.',
    '## Clima eleitoral',
    'A data chega a três semanas da eleição em Israel, marcada para 27 de outubro. O primeiro-ministro Benjamin Netanyahu afirmou que o país eliminou 4 mil dos 6 mil militantes envolvidos no ataque. O rival Gadi Eisenkot criticou a resistência do governo à comissão de inquérito.',
    '## A situação em Gaza',
    'Do lado palestino, a guerra deixou mais de 73 mil mortos, segundo a CNN; a Al Jazeera fala em mais de 74 mil. O cessar-fogo começou em 10 de outubro de 2025, mas, segundo a Al Jazeera, ao menos 1.460 pessoas foram mortas em ataques desde então, e cerca de 90% da população do território foi deslocada.'
  ],
  box: { type: 'facts', title: 'Três anos em números', rows: [['Mortos em Israel em 7/10/2023', 'cerca de 1.200'], ['Reféns levados', '251'], ['Mortos em Gaza', 'mais de 73 mil (CNN) a 74 mil (Al Jazeera)'], ['Mortos desde o cessar-fogo', 'ao menos 1.460 (Al Jazeera)']] },
  sources: [['Times of Israel', U.toi], ['CNN, via KESQ', U.cnn7out], ['Al Jazeera', U.ajGaza]] },

{ id: 'ira-estreito-de-ormuz-fechado', cat: 'internacional', own: true, t: '2026-10-05T12', d: '5 out 2026', img: 'mundo', read: 3,
  photo: 'fotos/ira-estreito-de-ormuz-fechado.webp', photoAlt: 'Mapa do Golfo Pérsico com o Estreito de Ormuz destacado entre o Irã e os Emirados Árabes Unidos', credit: 'Mapa: reprodução',
  title: 'Irã diz que o Estreito de Ormuz seguirá fechado',
  sum: 'Teerã condiciona a reabertura ao fim das guerras dos EUA na região, à suspensão de sanções e ao reconhecimento do direito de enriquecer urânio.',
  body: [
    'O governo do Irã afirmou nesta segunda-feira (5) que o Estreito de Ormuz continuará fechado à navegação. A passagem liga o Golfo Pérsico ao mar aberto e é uma das principais rotas do petróleo exportado pelo Oriente Médio.',
    'Para reabrir o estreito, Teerã lista três condições: o fim das guerras conduzidas pelos Estados Unidos na região, a retirada das sanções e o reconhecimento do direito iraniano de enriquecer urânio.',
    '## Tensão em várias frentes',
    'O anúncio veio no mesmo dia em que os EUA retiraram bombardeiros de uma base no Reino Unido por causa de alertas de um possível ataque ligado ao Irã. No Iêmen, forças apoiadas pela Arábia Saudita anunciaram uma ofensiva contra os houthis, grupo aliado de Teerã.'
  ],
  sources: [['Democracy Now!', U.dn]] },

{ id: 'trump-fala-los-angeles-san-diego-ira', cat: 'internacional', own: false, t: '2026-10-08T03', d: '8 out 2026', img: 'mundo', src: 'Forbes', url: U.forbesTrump,
  photo: 'fotos/trump-fala-los-angeles-san-diego-ira.webp', photoAlt: 'Donald Trump diante de um microfone, atrás de um púlpito com o selo presidencial', credit: 'Foto: reprodução',
  title: 'Trump repete fala sobre Irã atingir Los Angeles, mas diz que vai proteger as cidades',
  sum: 'Em comício no Texas, o presidente disse que não vai deixar o ataque acontecer. A frase original, dita em Nebraska, tinha sido criticada por políticos da Califórnia.',
  body: [
    'Na quarta-feira (7), em San Antonio, Trump voltou a citar a hipótese de um míssil iraniano atingir San Diego ou Los Angeles e acrescentou que os Estados Unidos protegem suas cidades. Ele também disse que o Irã nunca terá uma arma nuclear e que os preços do petróleo vão cair.',
    'Na segunda-feira (5), em Nebraska, ele tinha dito que seria um preço pequeno a pagar. O governador da Califórnia, Gavin Newsom, e republicanos do estado criticaram a declaração, segundo a Al Jazeera.'
  ] },

{ id: 'franca-suspende-aulas-protestos-estudantes', cat: 'internacional', own: false, t: '2026-10-06T13', d: '6 out 2026', img: 'protesto', src: 'Al Jazeera', url: U.ajFranca,
  photo: 'fotos/franca-suspende-aulas-protestos-estudantes.webp', photoAlt: 'Estudantes com cartazes protestam em frente à fachada de uma escola em Paris', credit: 'Foto: reprodução',
  title: 'França suspende aulas do ensino médio após protestos de estudantes',
  sum: 'As autoridades contaram cerca de 250 mil manifestantes. Quase 2 mil escolas foram bloqueadas ou fechadas.',
  body: [
    'O primeiro-ministro Sébastien Lecornu suspendeu as aulas do ensino médio até o fim da semana, depois de mais um dia de protestos contra as condições das escolas públicas. Os organizadores falam em 500 mil pessoas nas ruas.',
    'Pelo menos 215 adolescentes e 715 policiais ficaram feridos. Desde o início do movimento, 6.100 pessoas foram presas, a maioria menores de idade.'
  ] },

{ id: 'petroleiro-atingido-norte-catar', cat: 'internacional', own: false, t: '2026-10-08T02', d: '8 out 2026', img: 'mundo', src: 'Al Jazeera', url: U.ajCatar,
  title: 'Petroleiro é atingido por projéteis no Golfo, ao norte do Catar',
  sum: 'A agência marítima britânica UKMTO informou que há vítimas, sem dar números. Ninguém assumiu o ataque.',
  body: [
    'O navio foi atingido a cerca de 94 quilômetros ao norte de Madinat ash Shamal, na zona econômica exclusiva do Catar. O nome e a bandeira da embarcação não foram divulgados.',
    'Segundo a UKMTO, houve nove ataques a petroleiros em Ormuz neste mês. No caso do On Peace, atingido perto de Omã, 12 dos 19 tripulantes ficaram feridos.'
  ] },

{ id: 'furacao-isaias-golfo-eua', cat: 'internacional', own: false, t: '2026-10-08T01', d: '8 out 2026', img: 'mundo', src: 'Fox Weather', url: U.foxIsaias,
  title: 'Isaias vira o primeiro furacão da temporada e ameaça a costa do Golfo dos EUA',
  sum: 'A tempestade ganhou força na noite de quarta e deve chegar à costa entre sexta e sábado. Flórida e Alabama decretaram estado de emergência.',
  body: [
    'Isaias tinha ventos de 75 milhas por hora, cerca de 120 km/h, e pode tocar a costa como categoria 2 entre Gulfport, no Mississippi, e Panama City, na Flórida. Cerca de 30 milhões de pessoas estão na área de impacto.',
    'É o primeiro furacão de uma temporada no Atlântico a se formar tão tarde desde o início das observações por satélite, em 1966.'
  ] },

{ id: 'ue-maior-pacote-sancoes-russia', cat: 'internacional', own: false, t: '2026-10-07T14', d: '7 out 2026', img: 'mundo', src: 'Kyiv Independent', url: U.kiSancoes,
  title: 'União Europeia aprova a maior lista de sanções contra a Rússia',
  sum: 'Embaixadores aprovaram cerca de 1.600 novos alvos ligados à indústria militar russa. A adoção formal está marcada para 12 de outubro.',
  body: [
    'A decisão dos embaixadores dos países do bloco foi unânime. Com a nova lista, o total de pessoas e empresas sancionadas chega a cerca de 3.000.'
  ] },

{ id: 'quenia-primeiro-caso-ebola', cat: 'internacional', own: false, t: '2026-10-06T15', d: '6 out 2026', img: 'mundo', src: 'Al Jazeera', url: U.ajEbola,
  photo: 'fotos/quenia-primeiro-caso-ebola.webp', photoAlt: 'Profissionais de saúde com roupas de proteção amarelas atendem um paciente em centro de tratamento de ebola', credit: 'Imagem ilustrativa: reprodução',
  title: 'Quênia confirma primeiro caso de ebola; paciente morre em Nairóbi',
  sum: 'O homem vivia na República Democrática do Congo, onde um surto já matou mais de 4 mil pessoas.',
  body: [
    'O paciente viajou por terra até Uganda e de lá seguiu de avião para Nairóbi, onde morreu. Segundo o presidente William Ruto, ao menos 8 familiares e 21 profissionais de saúde estão em quarentena, e passageiros e tripulantes do voo estão sendo rastreados.',
    'O surto no Congo já soma mais de 8.300 casos confirmados em sete províncias.'
  ] },

{ id: 'sudao-burhan-rejeita-negociacoes', cat: 'internacional', own: false, t: '2026-10-07T10', d: '7 out 2026', img: 'mundo', src: 'Al Jazeera', url: U.ajSudao,
  title: 'Chefe do Exército do Sudão rejeita negociações e promete retomar território das RSF',
  sum: 'O general Abdel Fattah al-Burhan disse que a opção militar continua. A guerra já deslocou cerca de 13 milhões de pessoas.',
  body: [
    'O discurso foi feito na terça-feira (6), em Merowe, no norte do país. Segundo um grupo local, um ataque das Forças de Apoio Rápido matou 10 civis em Kordofan Ocidental.',
    'A Organização Internacional para as Migrações contou mais de 5.500 deslocados no Nilo Azul em três dias.'
  ] },

/* ===================== ESPORTES ===================== */
{ id: 'corinthians-demite-fernando-diniz', cat: 'esportes', own: true, t: '2026-10-07T23', d: '7 out 2026', img: 'esportes', read: 2,
  title: 'Corinthians demite Fernando Diniz após derrota para o Inter',
  sum: 'O time perdeu por 2 a 1 no Beira-Rio e chegou a sete jogos sem vencer no Brasileirão. Ramón Díaz aparece como prioridade para o cargo.',
  body: [
    'O Corinthians anunciou na noite de quarta-feira (7) a saída do técnico Fernando Diniz e de sua comissão técnica. A decisão veio depois da derrota por 2 a 1 para o Internacional, no Beira-Rio, pela 29ª rodada do Campeonato Brasileiro.',
    'Vitinho abriu o placar para o Inter logo no primeiro minuto, e Alan Patrick ampliou no segundo tempo. André descontou para o Corinthians. Segundo o Lance!, o time está há sete jogos sem vencer no Brasileirão e oito no total, contando a eliminação para o Estudiantes na Libertadores.',
    '## Os números de Diniz',
    'Em 33 jogos pelo clube, Diniz somou 13 vitórias, 8 empates e 12 derrotas, com aproveitamento de 47%. Segundo a Gazeta Esportiva, o Corinthians tem 32 pontos, está em 16º lugar e fica a um ponto da zona de rebaixamento.',
    '## Quem pode chegar',
    'O argentino Ramón Díaz, que já treinou o Corinthians e está sem clube, aparece como prioridade da diretoria. Sylvinho e Juan Pablo Vojvoda também são citados. O clube quer o novo técnico já no clássico contra o Palmeiras, no domingo (11).'
  ],
  box: { type: 'facts', title: 'Diniz no Corinthians', rows: [['Jogos', '33'], ['Vitórias', '13'], ['Empates', '8'], ['Derrotas', '12'], ['Aproveitamento', '47%']] },
  sources: [['Lance!', U.lanceDiniz], ['Gazeta Esportiva', U.gazInter], ['Gazeta Esportiva', U.gazRamon]] },

{ id: 'brasileirao-29-rodada-flamengo-palmeiras', cat: 'esportes', own: true, t: '2026-10-08T05', d: '8 out 2026', img: 'esportes', read: 3,
  title: 'Flamengo e Palmeiras jogam nesta quinta pela 29ª rodada do Brasileirão',
  sum: 'O líder visita o Santos às 19h30, sem Arrascaeta. O Palmeiras, três pontos atrás, recebe o Bahia às 21h30, sem Abel Ferreira no banco.',
  body: [
    'Os dois primeiros colocados do Campeonato Brasileiro entram em campo nesta quinta-feira (8), na segunda parte da 29ª rodada, que começou na quarta. O Flamengo lidera com 60 pontos, três a mais que o Palmeiras, e tem duas vitórias a mais, o primeiro critério de desempate. Por isso, a liderança não muda nesta rodada.',
    '## Santos x Flamengo',
    'O jogo é às 19h30, na Vila Belmiro. Neymar se recuperou da lesão na coxa direita e deve começar no banco. O Santos, oitavo colocado com 41 pontos, vem de cinco vitórias seguidas. O Flamengo de Leonardo Jardim não terá Arrascaeta, que fraturou o punho esquerdo e deve ficar fora de 6 a 8 semanas, o que inclui as semifinais da Libertadores.',
    '## Palmeiras x Bahia',
    'No Nubank Parque, às 21h30, o Palmeiras recebe o Bahia de Rogério Ceni, quinto colocado com 41 pontos. Abel Ferreira cumpre o último de três jogos de suspensão, e o auxiliar João Martins comanda o time.',
    '## Os outros jogos',
    'Também nesta quinta, Athletico-PR e Atlético-MG se enfrentam às 20h, na Arena da Baixada, e Fluminense e Coritiba, às 21h30, no Maracanã.'
  ],
  box: { type: 'table', title: 'Jogos desta quinta (8)', head: ['Jogo', 'Horário', 'Local'], rows: [['Santos x Flamengo', '19h30', 'Vila Belmiro'], ['Athletico-PR x Atlético-MG', '20h', 'Arena da Baixada'], ['Fluminense x Coritiba', '21h30', 'Maracanã'], ['Palmeiras x Bahia', '21h30', 'Nubank Parque']], note: 'Fonte: Lance!.' },
  sources: [['Lance!', U.lanceRodada], ['Gazeta Esportiva', U.gazSantos], ['Terra', U.terraSanFla], ['Terra', U.terraPalBah], ['Portal do Palestra', U.pp]] },

{ id: 'libertadores-semifinais-tres-brasileiros', cat: 'esportes', own: true, t: '2026-10-05T15', d: '5 out 2026', img: 'esportes', read: 2,
  photo: 'fotos/libertadores-semifinais-tres-brasileiros.webp', photoAlt: 'Montagem com jogadores de Fluminense, Palmeiras, Flamengo e Estudiantes comemorando', credit: 'Montagem: reprodução',
  title: 'Libertadores chega às semifinais com três brasileiros',
  sum: 'O Flamengo enfrenta o Estudiantes, e Fluminense e Palmeiras fazem o duelo brasileiro. Os jogos serão entre 13 e 21 de outubro.',
  body: [
    'Três dos quatro semifinalistas da Copa Libertadores são brasileiros. O Flamengo encara o Estudiantes de La Plata, da Argentina, e Fluminense e Palmeiras se enfrentam do outro lado da chave, o que garante um time do Brasil na decisão.',
    'Os jogos de ida estão marcados para 13 e 14 de outubro, e os de volta, para 20 e 21. A Conmebol ainda vai definir horários e mandos.',
    '## Final em Montevidéu',
    'A decisão será em jogo único no sábado, 28 de novembro, no Estádio Centenário, em Montevidéu.',
    'O Fluminense chegou à semifinal depois de eliminar o Platense, da Argentina, por 3 a 2 no placar agregado.'
  ],
  box: { type: 'table', title: 'Semifinais', head: ['Confronto', 'Ida', 'Volta'], rows: [['Estudiantes x Flamengo', '13 ou 14 out', '20 ou 21 out'], ['Fluminense x Palmeiras', '13 ou 14 out', '20 ou 21 out']], note: 'Fontes: La Nación e Lance!. Final em 28 de novembro, no Centenário.' },
  sources: [['La Nación', U.laNacion], ['Lance!', U.lance]] },

{ id: 'cruzeiro-vence-sao-paulo-g4', cat: 'esportes', own: false, t: '2026-10-07T23', d: '7 out 2026', img: 'esportes', src: 'CNN Brasil', url: U.cnnCruzeiro,
  title: 'Cruzeiro vence o São Paulo por 2 a 0 e entra no G4',
  sum: 'Kaio Jorge e Zé Lucas marcaram no Mineirão. O time de Artur Jorge chegou a 48 pontos.',
  body: [
    'O Cruzeiro aparece provisoriamente em quarto lugar, mas ainda pode ser ultrapassado por Fluminense ou Bahia, que jogam nesta quinta. O São Paulo, de Dorival Júnior, ficou com 36 pontos.'
  ] },

{ id: 'vasco-vence-botafogo-classico', cat: 'esportes', own: false, t: '2026-10-07T23', d: '7 out 2026', img: 'esportes', src: 'CNN Brasil', url: U.cnnVasco,
  title: 'Vasco vence o Botafogo no Nilton Santos e soma a terceira vitória seguida',
  sum: 'Lescano e David marcaram para o Vasco; Alex Telles descontou de falta. Dois zagueiros do Botafogo foram levados ao hospital.',
  body: [
    'Com o 2 a 1, o Vasco chegou a 34 pontos. Os zagueiros Arthur Chaves e Vitinho, do Botafogo, foram atendidos no hospital e estão estáveis.'
  ] },

{ id: 'serie-b-vila-nova-empata-cuiaba', cat: 'esportes', own: false, t: '2026-10-07T23', d: '7 out 2026', img: 'esportes', src: 'Gazeta Esportiva', url: U.gazVila,
  title: 'Vila Nova empata com o Cuiabá e Juventude segue líder da Série B',
  sum: 'O 0 a 0 deixou o time goiano em segundo, com 58 pontos, um a menos que o Juventude.',
  body: [
    'O Vila Nova está há seis jogos sem perder. Na terça (6), o Juventude tinha vencido por 2 a 0 a Ponte Preta, que já está rebaixada.',
    'Na próxima rodada, no domingo (11), o Vila Nova visita o Náutico e o Juventude recebe o São Bernardo.'
  ] },

{ id: 'messi-despedida-argentina-benin', cat: 'esportes', own: false, t: '2026-10-07T01', d: '7 out 2026', img: 'esportes', src: 'Sports Illustrated', url: U.siMessi,
  title: 'Messi se despede da Argentina com gol e duas assistências nos 3 a 0 sobre Benin',
  sum: 'O camisa 10 fez seu último jogo pela seleção no Monumental de Núñez e encerra a trajetória com 126 gols.',
  body: [
    'Messi deu o passe para Otamendi abrir o placar de cabeça e serviu Nico Paz no segundo gol. O terceiro foi dele, de pênalti. Ele jogou os 90 minutos diante de mais de 80 mil torcedores.',
    'Messi deixa a seleção com 208 jogos e 126 gols.'
  ] },

{ id: 'antonelli-titulo-f1-austin', cat: 'esportes', own: false, t: '2026-10-06T12', d: '6 out 2026', img: 'pista', src: 'Grande Prêmio', url: U.gpF1,
  title: 'Antonelli não pode ser campeão em Singapura; primeira chance é em Austin',
  sum: 'O líder soma 320 pontos, 84 à frente de George Russell. O GP dos EUA é em 25 de outubro.',
  body: [
    'Mesmo vencendo a corrida sprint e o GP de Singapura neste fim de semana, Kimi Antonelli, da Mercedes, ainda teria rivais com chance matemática, porque restariam cinco etapas.',
    'Lewis Hamilton é o terceiro, com 214 pontos.'
  ] },

{ id: 'xangai-rune-cai-estreia', cat: 'esportes', own: false, t: '2026-10-07T10', d: '7 out 2026', img: 'esportes', src: 'Estadão Conteúdo, via Diário do Grande ABC', url: U.dgabcXangai,
  title: 'Holger Rune é eliminado na estreia do Masters de Xangai',
  sum: 'O dinamarquês perdeu de virada para o alemão Daniel Altmaier por 1/6, 7/6 (7/5) e 6/4.',
  body: [
    'Na mesma rodada, o italiano Matteo Berrettini também venceu de virada, contra Aleksandar Kovacevic, com 23 aces. O próximo adversário dele é Brandon Nakashima.'
  ] },

{ id: 'selecao-japao-singapura-novembro', cat: 'esportes', own: false, t: '2026-10-05T12', d: '5 out 2026', img: 'esportes', src: 'Lance!', url: U.lanceSel,
  title: 'Seleção enfrenta Japão e Singapura na próxima Data Fifa',
  sum: 'Os dois amistosos serão no Estádio Nacional de Singapura, em 14 e 17 de novembro, de manhã no horário de Brasília.',
  body: [
    'A CBF confirmou os horários: Brasil x Japão em 14 de novembro, às 7h15, e Brasil x Singapura em 17 de novembro, às 7h.',
    'Os jogos dão sequência à renovação do grupo de Carlo Ancelotti depois da goleada de 4 a 0 sobre a Índia.'
  ] },

/* ===================== CULTURA ===================== */
{ id: 'estreias-cinema-se-eu-fosse-voce-3', cat: 'cultura', own: true, t: '2026-10-08T05', d: '8 out 2026', img: 'cultura', read: 2,
  title: '"Se Eu Fosse Você 3" e o sul-coreano "Hope" chegam aos cinemas nesta quinta',
  sum: 'A comédia fecha a trilogia com Tony Ramos e Glória Pires. O filme de Na Hong-jin, que passou em Cannes, tem Alicia Vikander e Michael Fassbender no elenco.',
  body: [
    'Os cinemas brasileiros recebem nesta quinta-feira (8) cinco estreias. O destaque nacional é "Se Eu Fosse Você 3", que encerra a trilogia de comédias sobre troca de corpos.',
    '## A volta de Tony Ramos e Glória Pires',
    'O longa tem direção de Anita Barbosa e supervisão artística de Daniel Filho, diretor dos dois primeiros filmes. A história se passa 20 anos depois, e agora quem troca de corpo é Bia, a filha do casal, com o marido, Aquiles. O elenco tem ainda Cleo Pires e Rafael Infante. A distribuição é da Disney.',
    '## Suspense coreano',
    '"Hope: O Primeiro Impacto", de Na Hong-jin, reúne os sul-coreanos Hwang Jung-min, Jung Ho-yeon e Zo In-sung com Alicia Vikander e Michael Fassbender. O filme passou pelo Festival de Cannes e não é recomendado para menores de 16 anos.',
    '## Outras estreias',
    'Também chegam às salas as comédias nacionais "Um Tio Quase Perfeito 3", com Marcus Majella, e "Picaretas Não Vão Pro Céu", com Maurício Manfrini e Tirullipa, além da animação "As Aventuras de Tadeo e a Lâmpada Mágica", de Enrique Gato.'
  ],
  box: { type: 'table', title: 'Estreias de 8 de outubro', head: ['Filme', 'Direção'], rows: [['Se Eu Fosse Você 3', 'Anita Barbosa'], ['Hope: O Primeiro Impacto', 'Na Hong-jin'], ['Um Tio Quase Perfeito 3', 'Pedro Antonio'], ['Picaretas Não Vão Pro Céu', 'Roberto Santucci'], ['As Aventuras de Tadeo e a Lâmpada Mágica', 'Enrique Gato']], note: 'Fontes: O Tempo e Além da Tela.' },
  sources: [['O Tempo', U.otEstreias], ['Além da Tela', U.adtEstreias]] },

{ id: 'eva-marie-saint-morre-102-anos', cat: 'cultura', own: true, t: '2026-10-06T20', d: '6 out 2026', img: 'cultura', read: 2,
  title: 'Morre Eva Marie Saint, vencedora do Oscar por "Sindicato de Ladrões", aos 102 anos',
  sum: 'A atriz de "Intriga Internacional", de Hitchcock, morreu em casa, em Los Angeles, de causas naturais.',
  body: [
    'A atriz americana Eva Marie Saint morreu na terça-feira (6), aos 102 anos, em sua casa em Los Angeles. Segundo comunicado de sua porta-voz, a causa foi natural.',
    'Nascida em Nova Jersey em 1924, ela ganhou o Oscar de atriz coadjuvante logo no primeiro filme, "Sindicato de Ladrões" (1954), em que contracenou com Marlon Brando no papel de Edie Doyle.',
    '## Carreira longa',
    'Cinco anos depois, estrelou "Intriga Internacional" (1959), de Alfred Hitchcock, ao lado de Cary Grant. Na TV, ganhou um Emmy em 1990. Um de seus últimos papéis no cinema foi em "Superman: O Retorno" (2006).',
    'Casou-se com Jeffrey Hayden em 1951 e teve dois filhos.'
  ],
  sources: [['CNN Brasil', U.cnnEva], ['Omelete', U.omeEva]] },

{ id: 'mostra-sao-paulo-50-edicao', cat: 'cultura', own: true, t: '2026-10-06T04', d: '6 out 2026', img: 'cultura', read: 3,
  photo: 'fotos/mostra-sao-paulo-50-edicao.webp', photoAlt: 'Arte oficial da 50ª Mostra Internacional de Cinema em São Paulo, com selo dourado e desenho de um casal se beijando', credit: 'Divulgação: Mostra Internacional de Cinema em São Paulo',
  title: 'Mostra de São Paulo chega à 50ª edição com 380 filmes de 93 países',
  sum: 'O evento vai de 15 a 29 de outubro em 57 espaços. A abertura será com "Tigre de Papel", de James Gray.',
  body: [
    'A Mostra Internacional de Cinema em São Paulo comemora 50 edições com uma programação de 380 títulos, entre longas, curtas e séries, vindos de 93 países. As sessões ocupam 57 espaços da cidade entre 15 e 29 de outubro.',
    'A noite de abertura, em 14 de outubro, na Sala São Paulo, terá "Tigre de Papel", de James Gray, que esteve na competição de Cannes. O diretor vai estar presente, e a sessão inclui um curta de Kleber Mendonça Filho.',
    '## Premiados do ano',
    'A seleção traz "Fjord", de Cristian Mungiu, vencedor da Palma de Ouro, e "Mulher Desconhecida", de May el-Toukhy, Leão de Ouro em Veneza. Também estão no programa filmes de Lee Chang-dong e Hirokazu Kore-eda, um documentário de Alex Gibney sobre Elon Musk e a animação adulta "Ray Gunn", de Brad Bird.',
    '## Homenagens',
    'O produtor português Paulo Branco recebe o Prêmio Leon Cakoff e ganha uma retrospectiva. O diretor indiano S.S. Rajamouli apresenta uma sessão especial de "RRR".'
  ],
  box: { type: 'facts', title: 'Serviço', rows: [['Quando', '15 a 29 de outubro'], ['Abertura', '14 de outubro, Sala São Paulo'], ['Ingressos', 'R$ 13 a R$ 32; pacotes a partir de R$ 160']] },
  sources: [['CNN Brasil', U.cnnMostra]] },

{ id: 'pitty-novo-album-sete-anos', cat: 'cultura', own: false, t: '2026-10-07T15', d: '7 out 2026', img: 'palco', src: 'Rolling Stone Brasil', url: U.rsPitty,
  title: 'Pitty revela capa e faixas do primeiro álbum de inéditas em sete anos',
  sum: 'O disco, chamado "Pitty", tem 13 faixas e sai em 16 de outubro. A turnê estreia no dia seguinte, em São Paulo.',
  body: [
    'O anúncio foi feito no aniversário de 49 anos da cantora. Entre as faixas estão "Sobremesa", lançada em setembro, "Armadura" e "Desobediente". A coprodução é de Rafael Ramos.',
    'O primeiro show, em 17 de outubro, no Espaço Unimed, está esgotado. Há mais nove cidades na agenda até dezembro.'
  ] },

{ id: 'lollapalooza-2027-line-up', cat: 'cultura', own: false, t: '2026-10-07T18', d: '7 out 2026', img: 'palco', src: 'O Tempo', url: U.otLolla,
  title: 'Lollapalooza Brasil divulga nesta quinta as atrações de 2027',
  sum: 'O line-up sai ao meio-dia. O festival será em 19, 20 e 21 de março, no Autódromo de Interlagos, e marca 15 anos do evento no país.',
  body: [
    'O anúncio da data foi feito pelos organizadores nas redes sociais. Os ingressos são vendidos pela Ticketmaster.'
  ] },

{ id: 'marilia-mendonca-exposicao-mis', cat: 'cultura', own: false, t: '2026-10-07T11', d: '7 out 2026', img: 'cultura', src: 'Times Brasil', url: U.tbMarilia,
  title: 'Exposição sobre Marília Mendonça abre nesta sexta no MIS, em São Paulo',
  sum: '"Sentimento Louco" reúne objetos pessoais, figurinos e registros inéditos da cantora até 29 de novembro.',
  body: [
    'A mostra tem instalações interativas em salas inspiradas nas músicas da cantora e percorre a trajetória dela desde a infância. Fica aberta de terça a domingo, das 10h às 19h, com ingressos de R$ 50 e meia-entrada de R$ 25.'
  ] },

{ id: 'tom-ze-90-anos-exposicao', cat: 'cultura', own: false, t: '2026-10-07T12', d: '7 out 2026', img: 'arte', src: 'Agência Brasil', url: U.abTomZe,
  title: 'Exposição em São Paulo celebra os 90 anos de Tom Zé',
  sum: 'A mostra na Caixa Cultural, na Praça da Sé, tem entrada gratuita e fica aberta até 13 de dezembro.',
  body: [
    '"Tom Zé – 90 Anos do Inquieto Jardineiro de Sons" tem curadoria de Neuseli Martins e inclui uma réplica do buzinório, instrumento criado pelo músico. Nascido em Irará, na Bahia, Tom Zé completa 90 anos no domingo (11).'
  ] },

{ id: 'bts-tres-shows-morumbis', cat: 'cultura', own: false, t: '2026-10-07T19', d: '7 out 2026', img: 'palco', src: 'Rolling Stone Brasil', url: U.rsBts,
  title: 'BTS libera nova leva de ingressos para os shows em São Paulo',
  sum: 'Uma cota foi vendida na quarta pela internet. Nesta quinta, há venda na bilheteria para quem fez pré-reserva.',
  body: [
    'A cota limitada foi colocada à venda na quarta-feira (7), às 19h, pela Ticketmaster. Nesta quinta (8), a partir das 10h, a bilheteria oficial atende só quem fez pré-reserva e apresentar a confirmação.',
    'O grupo sul-coreano faz três shows da turnê "Arirang" no MorumBIS, em 28, 30 e 31 de outubro.'
  ] },

{ id: 'juarez-machado-morre-85-anos', cat: 'cultura', own: false, t: '2026-10-06T21', d: '6 out 2026', img: 'arte', src: 'NSC Total', url: U.nscJuarez,
  title: 'Morre o artista plástico Juarez Machado, aos 85 anos',
  sum: 'Nascido em Joinville, ele foi pioneiro do humor animado na TV e criou capas de discos de Elis Regina e Raul Seixas.',
  body: [
    'O artista morreu na terça-feira (6), no interior do estado do Rio de Janeiro. Nos anos 1970, ganhou o público da TV com quadros de animação humorística na Globo e, no início dos anos 1980, mudou-se para Paris.',
    'A Prefeitura de Joinville decretou luto oficial de três dias.'
  ] },

{ id: 'paramount-warner-fusao-skydance', cat: 'cultura', own: false, t: '2026-10-06T15', d: '6 out 2026', img: 'palco', src: 'Euronews', url: U.euroSky,
  title: 'Paramount e Warner Bros. Discovery concluem fusão e criam a Skydance',
  sum: 'A nova empresa reúne HBO Max, Paramount+, CBS e CNN. David Ellison será o presidente-executivo.',
  body: [
    'Segundo a Euronews, o negócio avaliou a Warner Bros. Discovery em US$ 81 bilhões, cerca de US$ 111 bilhões com dívidas. A receita anual combinada é de quase US$ 70 bilhões.',
    'A companhia promete economizar mais de US$ 6 bilhões em três anos. Franquias como "Harry Potter", "Top Gun" e "O Poderoso Chefão" ficam sob o mesmo grupo.'
  ] },

/* ===================== ECONOMIA ===================== */
{ id: 'ibovespa-cai-dolar-volta-5-reais', cat: 'economia', own: true, t: '2026-10-07T18', d: '7 out 2026', img: 'mercado', read: 3,
  title: 'Ibovespa cai pelo segundo dia e dólar volta a R$ 5 com juros altos nos EUA',
  sum: 'O índice recuou 0,74%, a 204.302 pontos. O dólar subiu 0,83%, a R$ 5,016, no dia em que a ata do Fed indicou nova alta de juros.',
  body: [
    'A Bolsa brasileira teve na quarta-feira (7) a segunda queda seguida depois do salto que se seguiu ao primeiro turno da eleição. O Ibovespa fechou em 204.302,33 pontos, com baixa de 0,74%. No mês, o índice ainda acumula alta de 9,64%, segundo o InfoMoney.',
    '## Dólar acima de R$ 5',
    'O dólar comercial subiu 0,83% e terminou vendido a R$ 5,016, segundo a Agência Brasil. A moeda interrompeu uma sequência de dois pregões de queda e voltou a passar de R$ 5.',
    '## O peso de fora',
    'O movimento acompanhou a alta dos juros nos Estados Unidos. A taxa do título de 10 anos do Tesouro americano chegou a 5,36% durante o dia, a maior em 24 anos, e fechou perto de 5,28%. A ata da última reunião do Federal Reserve, divulgada à tarde, mostrou que a maioria dos dirigentes vê como apropriada ao menos mais uma alta de juros até o fim do ano.',
    '## Destaques',
    'A Vale caiu 2,30% e foi o principal peso do índice. Os bancos também recuaram, com o Itaú em baixa de 2,66%. Entre as altas, Magazine Luiza subiu 5,09%. A Petrobras PN avançou 0,95% no dia do leilão de áreas do pré-sal.'
  ],
  box: { type: 'facts', title: 'Fechamento de 7/10', rows: [['Ibovespa', '204.302 pontos (−0,74%)'], ['Dólar', 'R$ 5,016 (+0,83%)'], ['Juro de 10 anos nos EUA', 'até 5,36% no dia'], ['Vale', '−2,30%']] },
  sources: [['InfoMoney', U.imMerc7], ['Agência Brasil', U.abDolar7], ['CNN Brasil', U.cnnMerc7], ['InfoMoney', U.imFed]] },

{ id: 'leilao-pre-sal-sete-blocos', cat: 'economia', own: true, t: '2026-10-07T20', d: '7 out 2026', img: 'plataforma', read: 3,
  title: 'Leilão do pré-sal vende 7 de 13 blocos; Petrobras, Prio e Equinor levam áreas',
  sum: 'O bônus de assinatura somou R$ 530 milhões, menos da metade do potencial. Em outra sessão, a ANP vendeu 49 blocos de concessão e arrecadou cerca de R$ 3 bilhões.',
  body: [
    'A Agência Nacional do Petróleo (ANP) realizou na quarta-feira (7) o quarto ciclo da Oferta Permanente de Partilha, o maior leilão do pré-sal. Sete dos 13 blocos oferecidos foram arrematados, com bônus de assinatura de R$ 530 milhões. Se todos tivessem sido vendidos, o valor chegaria a R$ 1,24 bilhão.',
    '## Quem venceu',
    'A Petrobras ficou com Azurita e Cruzeiro do Sul, e a Prio, com Magnetita e Hematita. A Equinor levou Rubi e, em consórcio com a Galp, Rodocrosita, que teve o maior ágio, de 494,64%. O bloco Jade foi para as chinesas CNOOC e Sinopec. Cada área teve um único concorrente.',
    'Das 19 empresas habilitadas, só 6 fizeram ofertas. O investimento mínimo previsto é de R$ 778,4 milhões. Os seis blocos sem lance seguem disponíveis para as próximas rodadas.',
    '## Concessão',
    'Na sessão de concessão, 49 blocos em bacias como Potiguar, Parnaíba e Campos foram vendidos, com cerca de R$ 3 bilhões em bônus e R$ 4,5 bilhões em investimentos previstos na fase de exploração, segundo a Agência Brasil.'
  ],
  box: { type: 'table', title: 'Pré-sal: quem levou cada bloco', head: ['Bloco', 'Vencedor', 'Ágio'], rows: [['Magnetita', 'Prio', '132,79%'], ['Hematita', 'Prio', '315,03%'], ['Azurita', 'Petrobras', '139,81%'], ['Cruzeiro do Sul', 'Petrobras', '8,07%'], ['Rubi', 'Equinor', '91,72%'], ['Rodocrosita', 'Equinor e Galp', '494,64%'], ['Jade', 'CNOOC e Sinopec', '65,76%']], note: 'Fonte: Agência Brasil, via O Povo.' },
  sources: [['O Povo, com Agência Brasil', U.opovoPreSal], ['Money Times', U.mtPreSal], ['Agência Brasil', U.abAnp]] },

{ id: 'bets-saem-do-ar-devolucao-saldos', cat: 'economia', own: true, t: '2026-10-06T09', d: '6 out 2026', img: 'celular', read: 2,
  title: 'Sites de apostas saem do ar; devolução de saldos começa na sexta',
  sum: 'Segundo a Fazenda, 26,5 milhões de apostadores ainda têm R$ 1,325 bilhão nas plataformas. Os bancos fazem os pagamentos de 9 a 14 de outubro.',
  body: [
    'As plataformas de apostas on-line começaram a sair do ar na terça-feira (6), por causa da medida provisória 1.394/2026, assinada pelo presidente Lula em 25 de setembro. A MP ainda precisa ser aprovada pelo Congresso.',
    'O prazo para os apostadores sacarem o dinheiro por conta própria terminou na segunda-feira (5), às 23h59. Segundo balanço divulgado na terça, 26,5 milhões de apostadores ainda tinham algum valor nas plataformas, num total de R$ 1,325 bilhão. Cerca de 200 mil pessoas, 1% dos apostadores, concentram 80% desse saldo.',
    '## Como fica a devolução',
    'Até quarta (7), as empresas tinham de informar os saldos aos bancos, por CPF e conta. De 9 a 14 de outubro, os bancos devolvem o dinheiro. A partir de 14 de outubro, a Caixa também pode fazer os pagamentos.',
    'Desde 25 de setembro, o governo pediu o bloqueio de 13.241 sites ilegais de apostas. Dos 188 sites autorizados, só um ainda funcionava na terça, e o bloqueio dele também foi pedido.'
  ],
  box: { type: 'steps', title: 'Calendário da devolução', steps: [['Até 7 de outubro', 'As empresas informam os saldos dos clientes aos bancos.'], ['9 a 14 de outubro', 'Os bancos devolvem o dinheiro aos apostadores.'], ['A partir de 14 de outubro', 'A Caixa também pode fazer os pagamentos.']] },
  sources: [['Agência Brasil', U.abBets], ['Agência Brasil', U.abBets2]] },

{ id: 'ata-fed-nova-alta-juros', cat: 'economia', own: false, t: '2026-10-07T16', d: '7 out 2026', img: 'mercado', src: 'InfoMoney', url: U.imFed,
  title: 'Ata do Fed indica nova alta de juros nos EUA ainda em 2026',
  sum: 'A maioria dos dirigentes vê como apropriada ao menos mais uma alta até o fim do ano. A inflação americana estava em 3,4% em 12 meses até agosto.',
  body: [
    'Todos os participantes apoiaram a alta de 0,25 ponto decidida em setembro. A equipe técnica do Fed só espera a inflação de volta à meta de 2% em 2029.',
    'As próximas reuniões são em 27 e 28 de outubro e em 8 e 9 de dezembro.'
  ] },

{ id: 'anfavea-producao-veiculos-setembro', cat: 'economia', own: false, t: '2026-10-07T12', d: '7 out 2026', img: 'mercado', src: 'Agência Brasil', url: U.abAnfavea,
  title: 'Produção de veículos tem o melhor setembro desde 2014',
  sum: 'Foram 268,3 mil unidades, alta de 10,2% em um ano. A Anfavea passou a prever alta de 15,2% nos emplacamentos em 2026.',
  body: [
    'As exportações caíram 24,2% em setembro, para 39,8 mil veículos, por causa da Argentina e da concorrência de modelos chineses e mexicanos. Os emplacamentos somaram 281,4 mil unidades no mês.'
  ] },

{ id: 'igp-di-setembro-1-50', cat: 'economia', own: false, t: '2026-10-07T09', d: '7 out 2026', img: 'mercado', src: 'InfoMoney', url: U.imIgp,
  title: 'IGP-DI acelera para 1,50% em setembro',
  sum: 'O índice da FGV tinha subido 0,06% em agosto. Os preços ao produtor avançaram 1,95%, puxados por soja, milho e gasolina.',
  body: [
    'No consumidor, a alta foi de 0,67%, com peso da energia elétrica. Em 12 meses, o IGP-DI acumula 3,80%.'
  ] },

{ id: 'campos-neto-adia-depoimento-pf', cat: 'economia', own: false, t: '2026-10-07T17', d: '7 out 2026', img: 'mercado', src: 'Times Brasil', url: U.tbCampos,
  title: 'Depoimento de Campos Neto à PF no caso Master é adiado',
  sum: 'O ex-presidente do Banco Central seria ouvido como testemunha na quarta. A defesa pediu o adiamento, e ainda não há nova data.',
  body: [
    'A Polícia Federal quer saber se ele sabia da relação de dois servidores do BC com Daniel Vorcaro, dono do Master. Na terça (6), o atual presidente do BC, Gabriel Galípolo, prestou depoimento como testemunha.'
  ] },

{ id: 'durigan-euforia-mercado', cat: 'economia', own: false, t: '2026-10-07T13', d: '7 out 2026', img: 'mercado', src: 'InfoMoney', url: U.imDurigan,
  title: 'Durigan diz ter dificuldade em entender a euforia do mercado após o 1º turno',
  sum: 'O ministro da Fazenda afirmou que a promessa de superávit de 1,5% do PIB feita pela direita não é crível.',
  body: [
    'A declaração foi feita em evento do setor imobiliário em São Paulo. Durigan também defendeu rever a taxa de juros e manter uma política fiscal crível.'
  ] },

{ id: 'balanca-comercial-superavit-setembro', cat: 'economia', own: false, t: '2026-10-06T20', d: '6 out 2026', img: 'plataforma', src: 'Agência Brasil', url: U.abBalanca,
  title: 'Balança comercial tem superávit de US$ 7,7 bilhões em setembro',
  sum: 'O saldo é 146% maior que o de um ano antes. Mesmo assim, o governo cortou a previsão para 2026 por causa do petróleo.',
  body: [
    'O Brasil exportou US$ 34,4 bilhões e importou US$ 26,7 bilhões em setembro. As vendas de petróleo bruto somaram US$ 6,49 bilhões, alta de 77,3% em um ano.',
    'O governo reduziu a estimativa de saldo para 2026, de US$ 90 bilhões para US$ 84,4 bilhões, por causa da revisão nos preços do petróleo.'
  ] },

{ id: 'ibovespa-supera-200-mil-pontos', cat: 'economia', own: false, t: '2026-10-05T18', d: '5 out 2026', img: 'mercado', src: 'CNN Brasil', url: U.cnnMerc,
  photo: 'fotos/ibovespa-supera-200-mil-pontos.webp', photoAlt: 'Gráfico de alta em verde sobre a ponte Estaiada e prédios de São Paulo à noite', credit: 'Imagem ilustrativa',
  title: 'Ibovespa supera 200 mil pontos pela primeira vez após o 1º turno',
  sum: 'O índice subiu 7,70% na segunda-feira e fechou em 206.911 pontos. O dólar caiu 4,12% e terminou cotado a R$ 5,00.',
  body: [
    'Foi o primeiro fechamento da história do Ibovespa acima de 200 mil pontos. O mercado atribuiu o movimento ao resultado do primeiro turno da eleição presidencial.',
    'Nos contratos de juros futuros de prazo mais longo, as taxas caíram mais de 130 pontos-base.'
  ] },

/* ===================== TECNOLOGIA ===================== */
{ id: 'nobel-quimica-kagan-soai', cat: 'tecnologia', own: true, t: '2026-10-07T08', d: '7 out 2026', img: 'ciencia', read: 3,
  title: 'Nobel de Química premia descobertas sobre moléculas "espelhadas"',
  sum: 'O francês Henri Kagan, de 95 anos, e o japonês Kenso Soai, de 76, mostraram como reações químicas podem favorecer uma das duas formas de uma molécula, o que ajuda a fabricar remédios.',
  body: [
    'O Prêmio Nobel de Química de 2026 foi para o francês Henri B. Kagan e o japonês Kenso Soai. A Academia Real Sueca de Ciências anunciou o prêmio na quarta-feira (7), em Estocolmo, pela descoberta de efeitos não lineares e da autocatálise na síntese orgânica assimétrica.',
    '## Mão direita, mão esquerda',
    'Muitas moléculas importantes para a vida existem em duas versões que são o reflexo uma da outra, como as mãos direita e esquerda. Os seres vivos usam quase só uma delas, fenômeno chamado homoquiralidade. O presidente do comitê, Heiner Linke, disse que os premiados resolveram um mistério químico de mais de um século: como essa preferência pode surgir de forma espontânea.',
    'Em 1986, Kagan mostrou como manipular uma reação para produzir mais de uma das formas. Em 1995, Soai descreveu uma reação em que o próprio produto acelera a formação de mais moléculas iguais, a chamada autocatálise. Em 2003, ele conseguiu uma reação que gerou só uma das duas formas.',
    '## Para que serve',
    'A diferença importa na fabricação de remédios, porque as duas versões de um medicamento podem ter efeitos diferentes. O exemplo mais conhecido é a talidomida, eficaz em uma forma e tóxica na outra.',
    '## Os premiados',
    'Kagan é professor emérito da Universidade Paris-Saclay, e Soai é ligado à Universidade de Ciências de Tóquio. Os dois dividem 12 milhões de coroas suecas, pouco mais de US$ 1 milhão.'
  ],
  box: { type: 'facts', title: 'O prêmio', rows: [['Premiados', 'Henri B. Kagan (França) e Kenso Soai (Japão)'], ['Idades', '95 e 76 anos'], ['Tema', 'Síntese orgânica assimétrica'], ['Valor', '12 milhões de coroas suecas']] },
  sources: [['Al Jazeera', U.ajQuimica], ['Olhar Digital', U.odQuimica], ['O Povo', U.opovoQuimica], ['GEN', U.genQuimica]] },

{ id: 'nobel-fisica-halzen-icecube', cat: 'tecnologia', own: true, t: '2026-10-06T08', d: '6 out 2026', img: 'ciencia', read: 3,
  title: 'Nobel de Física premia criador de observatório de neutrinos no gelo da Antártida',
  sum: 'O belga Francis Halzen, da Universidade de Wisconsin-Madison, é o único premiado e recebe 12 milhões de coroas suecas.',
  body: [
    'O Prêmio Nobel de Física de 2026 foi para Francis Halzen, pesquisador da Universidade de Wisconsin-Madison, nos Estados Unidos. O anúncio foi feito na terça-feira (6). A Academia Real Sueca de Ciências reconheceu suas contribuições decisivas ao Observatório de Neutrinos IceCube e a descoberta de neutrinos de alta energia vindos do espaço.',
    '## Um detector dentro do gelo',
    'Neutrinos são partículas que quase não interagem com a matéria e atravessam planetas inteiros sem deixar rastro. Para flagrá-los, o IceCube usa 5.160 sensores de luz enterrados a cerca de 2 quilômetros de profundidade, em um quilômetro cúbico de gelo no Polo Sul.',
    'Halzen propôs o conceito em 1988 e lidera o projeto desde 2001. O detector ficou pronto em dezembro de 2010 e, em 2013, registrou 28 neutrinos de alta energia de origem astrofísica.',
    '## O premiado',
    'Nascido na Bélgica em 1944, Halzen está na Universidade de Wisconsin desde 1972. Como é o único laureado, recebe sozinho o prêmio de 12 milhões de coroas suecas, cerca de US$ 1,2 milhão.'
  ],
  box: { type: 'facts', title: 'IceCube em números', rows: [['Sensores', '5.160'], ['Profundidade', 'cerca de 2 km no gelo'], ['Volume monitorado', '1 km³'], ['Concluído em', 'dezembro de 2010']] },
  sources: [['AIP', U.aipNobel], ['Jornal do Brasil', U.jbNobel]] },

{ id: 'nobel-medicina-optogenetica', cat: 'tecnologia', own: true, t: '2026-10-05T13', d: '5 out 2026', img: 'ciencia', read: 4,
  photo: 'fotos/nobel-medicina-optogenetica.webp', photoAlt: 'Telão no anúncio do Nobel de Medicina com as fotos de Karl Deisseroth, Peter Hegemann e Georg Nagel', credit: 'Anúncio do prêmio em Estocolmo. Imagem: reprodução/Nobel Prize',
  title: 'Nobel de Medicina premia técnica que controla neurônios com luz',
  sum: 'Karl Deisseroth, Peter Hegemann e Georg Nagel foram reconhecidos pela descoberta de canais ativados por luz e pela optogenética.',
  body: [
    'O Prêmio Nobel de Fisiologia ou Medicina de 2026 foi para três cientistas que ajudaram a criar a optogenética, método que usa luz para ligar e desligar células nervosas. O anúncio foi feito na segunda-feira (5).',
    'Os premiados são Karl Deisseroth, da Universidade Stanford, nos Estados Unidos, Peter Hegemann, da Universidade Humboldt de Berlim, e Georg Nagel, da Universidade de Würzburg, ambas na Alemanha.',
    '## Da alga ao cérebro',
    'A história começa em uma alga de uma única célula, a Chlamydomonas. Hegemann e Nagel identificaram nela a canalrodopsina, uma proteína que se abre quando recebe luz azul. Aberta, ela deixa íons atravessarem a membrana e dispara um impulso elétrico.',
    'Deisseroth levou a descoberta para o sistema nervoso. Ele inseriu o gene da canalrodopsina em neurônios de ratos e, em 2007, mostrou que era possível controlar sinais neurais com luz no cérebro de camundongos vivos.',
    '## Para que serve',
    'Hoje a técnica é usada para mapear circuitos cerebrais ligados à memória, às emoções e ao comportamento, e está sendo estudada em tratamentos para restaurar a visão.',
    'O prêmio é de 12 milhões de coroas suecas, cerca de US$ 1,2 milhão, dividido entre os três.'
  ],
  box: { type: 'steps', title: 'Como funciona', steps: [['O gene entra', 'O gene da proteína da alga é inserido em neurônios escolhidos.'], ['A luz acende', 'Um pulso de luz azul abre os canais na membrana dessas células.'], ['O neurônio dispara', 'Os íons fluem, a célula gera um impulso e o circuito é ativado sob comando.']] },
  sources: [['CNN Brasil', U.cnnNobel]] },

{ id: 'gpt-6-chatgpt-todos', cat: 'tecnologia', own: false, t: '2026-10-07T15', d: '7 out 2026', img: 'tecnologia', src: 'OpenAI', url: U.oaiGpt6,
  title: 'OpenAI libera o GPT-6 no ChatGPT, com respostas interativas',
  sum: 'Assinantes recebem o novo modelo desde quarta; usuários gratuitos, a partir desta quinta. As respostas podem trazer gráficos, botões e calculadoras.',
  body: [
    'Segundo a empresa, o próprio modelo escolhe quando usar os elementos visuais e responde só com texto quando isso basta. A OpenAI diz que mais de 1,2 bilhão de pessoas usam o ChatGPT por semana.'
  ] },

{ id: 'surface-laptop-ultra-nvidia', cat: 'tecnologia', own: false, t: '2026-10-07T18', d: '7 out 2026', img: 'tecnologia', src: 'TechCrunch', url: U.tcSurface,
  title: 'Microsoft lança notebook com chip da Nvidia e Windows preparado para agentes de IA',
  sum: 'O Surface Laptop Ultra parte de US$ 2.599. A pré-venda começou na quarta, e as entregas estão previstas para 16 de outubro.',
  body: [
    'O aparelho usa a plataforma RTX Spark, da Nvidia, com tela mini-LED de 15 polegadas. No mesmo evento, em San Francisco, a Microsoft anunciou um recurso que isola agentes de inteligência artificial no Windows 11.'
  ] },

{ id: 'google-synthid-aberto-publico', cat: 'tecnologia', own: false, t: '2026-10-07T14', d: '7 out 2026', img: 'celular', src: 'TechCrunch', url: U.tcSynth,
  title: 'Google abre ao público site que identifica imagens, vídeos e áudios feitos com sua IA',
  sum: 'O SynthID detecta a marca d’água invisível usada em conteúdos gerados por ferramentas como Gemini e Veo, mas não reconhece material de qualquer IA.',
  body: [
    'Antes, a ferramenta era restrita a jornalistas e pesquisadores. Segundo o TechCrunch, são feitas cerca de 1 milhão de verificações por dia.'
  ] },

{ id: 'florida-meta-limite-adolescentes', cat: 'tecnologia', own: false, t: '2026-10-07T17', d: '7 out 2026', img: 'celular', src: 'Olhar Digital', url: U.odFlorida,
  title: 'Flórida pede à Justiça limite de duas horas por dia para adolescentes no Instagram e no Facebook',
  sum: 'O procurador-geral do estado também quer a remoção de usuários com menos de 14 anos. A Meta diz que o pedido não tem fundamento.',
  body: [
    'O pedido de liminar inclui desligar a rolagem infinita e a reprodução automática e proibir anúncios direcionados a adolescentes. A Flórida ficou fora do acordo fechado em agosto, em que a Meta aceitou pagar até US$ 18 bilhões.'
  ] },

{ id: 'artemis-ii-dados-lua', cat: 'tecnologia', own: false, t: '2026-10-07T16', d: '7 out 2026', img: 'ciencia', src: 'NASA', url: U.nasaArtemis,
  title: 'NASA divulga os dados científicos da missão Artemis II sobre a Lua',
  sum: 'São mais de 800 GB, com mais de 11 mil imagens e vídeos e 8,5 horas de áudio com observações da tripulação.',
  body: [
    'A agência chamou o material de o primeiro conjunto de dados de ciência planetária captado principalmente por humanos em mais de meio século. No sobrevoo de abril, os astronautas registraram possíveis clarões de impacto na Lua.'
  ] },

{ id: 'fmi-ia-risco-economia', cat: 'tecnologia', own: false, t: '2026-10-07T09', d: '7 out 2026', img: 'tecnologia', src: 'Olhar Digital', url: U.odFmi,
  title: 'FMI alerta que o boom da inteligência artificial pode virar risco para a economia',
  sum: 'Kristalina Georgieva disse que a IA pode elevar o crescimento mundial de 3% para 3,5% ao ano, mas que resultados fracos das big techs podem afetar outros investimentos.',
  body: [
    'Segundo a diretora-gerente do FMI, produtos ligados à IA já respondem por mais de 10% do comércio mundial de bens. O discurso foi feito em Singapura.'
  ] },

{ id: 'lupa-ia-conteudo-eleitoral', cat: 'tecnologia', own: false, t: '2026-10-06T10', d: '6 out 2026', img: 'celular', src: 'Diário do Grande ABC', url: U.dgabcLupa,
  title: 'Quase um conteúdo eleitoral feito com IA circulou por hora na campanha, diz Lupa',
  sum: 'Dos 972 conteúdos suspeitos analisados, 920 usaram inteligência artificial, e 60% não tinham aviso de IA.',
  body: [
    'O levantamento do Observatório Lupa cobriu o período de 16 de agosto a 28 de setembro e identificou 554 deepfakes.',
    'Quase metade das peças foi publicada por usuários comuns, e cerca de um quarto saiu de perfis oficiais de candidatos.'
  ] }
];
