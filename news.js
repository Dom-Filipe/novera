/* ============================================================
   NOVERA: conteúdo do site. Edite este arquivo e rode `node build.js`.
   Regras completas em ATUALIZACAO.md.
   ============================================================ */

/* Topo do site: data da edição e mercado */
const META = {
  /* Endereço público do site, sem barra no final. Usado nos links das redes sociais. */
  siteUrl: 'https://novera-sepia.vercel.app',
  dataExtenso: 'Quarta-feira, 7 de outubro de 2026',
  edicao: '7 out 2026',
  ibovespa: { valor: '205.835', variacao: '0,52%', sobe: false },
  dolar: { valor: 'R$ 4,97', variacao: '0,55%', sobe: false },
  fechamento: '6/10'
};

/* Home: destaque principal, dois laterais e três da faixa de baixo (IDs de notícias "own: true") */
const FEATURED = {
  lead: 'campanhas-segundo-turno-primeiros-apoios',
  side: ['tse-julga-garotinho-eleicao-rio', 'israel-tres-anos-7-de-outubro'],
  also: ['messi-despedida-argentina-benin', 'balanca-comercial-superavit-setembro', 'nobel-fisica-halzen-icecube']
};

/* Home: "Escolhas da redação" (5 IDs) */
const PICKS = ['segundo-turno-flavio-lula', 'bets-saem-do-ar-devolucao-saldos', 'franca-suspende-aulas-protestos-estudantes', 'eva-marie-saint-morre-102-anos', 'juarez-machado-morre-85-anos'];

const U = {
  sen: 'https://www12.senado.leg.br/noticias/materias/2026/10/04/flavio-bolsonaro-e-lula-disputam-o-segundo-turno-das-eleicoes-para-presidente',
  cnnSen: 'https://www.cnnbrasil.com.br/eleicoes/divisao-bancada-senado/',
  abSen: 'https://agenciabrasil.ebc.com.br/politica/noticia/2026-10/veja-quem-sao-os-novos-senadores-e-como-fica-composicao-do-senado',
  abGov: 'https://agenciabrasil.ebc.com.br/politica/noticia/2026-10/veja-os-20-estados-onde-o-governador-foi-eleito-no-1o-turno',
  gazetaApoio: 'https://www.gazetadopovo.com.br/eleicoes/2026/uniao-brasil-e-pp-anunciam-apoio-a-flavio-bolsonaro-no-segundo-turno/',
  p360Rep: 'https://www.poder360.com.br/poder-flash/republicanos-decide-na-4a-feira-se-apoia-flavio-no-2o-turno/',
  cnnCaiado: 'https://www.cnnbrasil.com.br/eleicoes/caiado-oficializa-apoio-a-flavio-no-segundo-turno-em-evento-em-goiania/',
  cnnConst: 'https://www.cnnbrasil.com.br/eleicoes/flavio-diz-que-usara-maioria-no-congresso-para-mudar-constituicao/',
  abCampanhas: 'https://agenciabrasil.ebc.com.br/politica/noticia/2026-10/flavio-busca-apoio-de-caiado-e-lula-defende-fim-da-6x1',
  abRenan: 'https://agenciabrasil.ebc.com.br/politica/noticia/2026-10/renan-descarta-apoio-no-2o-turno-psd-de-caiado-libera-bases-estaduais',
  dRio: 'https://diariodorio.com/politica/2026/10/06/tse-inclui-recurso-de-garotinho-na-pauta-de-quinta-feira-e-pode-definir-eleicao-para-governador-do-rio.html',
  abOab: 'https://agenciabrasil.ebc.com.br/politica/noticia/2026-10/oab-rj-defende-decisao-rapida-do-tse-para-eleicoes-no-estado',
  p360Mpe: 'https://www.poder360.com.br/poder-justica/mpe-e-favoravel-a-desistencia-de-recurso-de-garotinho-no-tse/',
  bandOea: 'https://www.band.com.br/politica/eleicoes/oea-aponta-ativismo-internacional-e-protagonismo-judicial-nas-eleicoes',
  bandPosts: 'https://www.band.com.br/politica/eleicoes/mendonca-manda-remover-posts-que-dizem-que-lula-jogou-bandeira-no-chao',
  abHorario: 'https://agenciabrasil.ebc.com.br/politica/noticia/2026-10/campanha-eleitoral-para-o-segundo-turno-comeca-nesta-segunda-feira',
  bdfPesq: 'https://www.brasildefato.com.br/2026/10/06/datafolha-quaest-atlasintel-quando-saem-as-pesquisas-de-2o-turno-entre-lula-e-flavio/',
  dn: 'https://www.democracynow.org/2026/10/5/headlines',
  toi: 'https://www.timesofisrael.com/liveblog_entry/israel-marks-3-years-since-october-7-attack-with-commemorations-starting-at-629-a-m/',
  ajGaza: 'https://www.aljazeera.com/news/2026/10/7/three-years-of-israels-genocide-in-gaza-in-numbers',
  cnn7out: 'https://kesq.com/news/national-world/cnn-world/2026/10/06/israel-marks-three-years-since-october-7-attack-with-memorials-and-protests/',
  ajFranca: 'https://www.aljazeera.com/news/2026/10/6/demonstrators-clash-with-riot-police-in-france-as-education-protests-mount',
  ajTanker: 'https://www.aljazeera.com/news/2026/10/7/oman-evacuates-injured-crew-from-attacked-tanker-in-strait-of-hormuz',
  ajAden: 'https://www.aljazeera.com/news/2026/10/7/yemens-houthis-attack-aden-airport-saudi-forces-down-missile-near-riyadh',
  ajKiev: 'https://www.aljazeera.com/news/2026/10/7/at-least-two-killed-in-kyiv-as-russia-launches-massive-attack-on-ukraine',
  ajBulgaria: 'https://www.aljazeera.com/news/2026/10/6/bulgaria-says-two-commercial-vessels-were-hit-in-drone-attack-in-its-waters',
  ajEbola: 'https://www.aljazeera.com/news/2026/10/6/kenya-confirms-first-ebola-case-after-patient-from-dr-congo-dies-in-nairobi',
  abcEspanha: 'https://www.abc.net.au/news/2026-10-06/barcelona-protests-spain-election-pedro-sanchez/107232696',
  ajTrump: 'https://www.aljazeera.com/news/2026/10/7/politicians-slam-trumps-suggestion-that-iran-take-san-diego-los-angeles',
  pp: 'https://portaldopalestra.com.br/palmeiras-flamengo-lideranca-brasileirao-29a-30a-rodada-criterio-vitorias-desempate-conta/',
  band: 'https://www.band.com.br/esportes/futebol/campeonato-brasileiro-serie-a/flamengo-x-palmeiras-veja-os-jogos-restantes-dos-candidatos-ao-brasileirao',
  laNacion: 'https://www.lanacion.com.ar/deportes/futbol/asi-quedo-el-cuadro-de-semifinales-de-la-copa-libertadores-2026-nid17092026/',
  lance: 'https://www.lance.com.br/fluminense/semifinal-da-libertadores-quando-e-contra-quem-joga-o-fluminense.html',
  trib: 'https://tribunadejundiai.com.br/mais/esportes/copa-do-brasil-2026-veja-os-semifinalistas-datas-e-local-da-final/',
  siMessi: 'https://www.si.com/es-us/futbol/lionel-messi-brilla-con-gol-y-dos-asistencias-en-su-despedida-de-la-seleccion-argentina',
  excMessi: 'https://www.excelsior.com.mx/deportes/messi-retira-seleccion-argentina-lagrimas-y-victoria-3-0-sobre-benin-monumental',
  cnnGiay: 'https://www.cnnbrasil.com.br/esportes/futebol/futebol-internacional/jogador-do-palmeiras-e-titular-em-despedida-de-messi-na-argentina/',
  gazJuv: 'https://gazetaesportiva.com/times/juventude/com-golaco-juventude-vence-a-ponte-preta-e-dorme-lider-da-serie-b',
  gpF1: 'https://grandepremio.com/br/f1/antonelli-pode-ser-campeao-em-singapura-veja-a-matematica-do-titulo-da-f1-2026/',
  imiRaphinha: 'https://imirante.com/esporte/brasil/2026/10/06/raphinha-renova-com-o-barcelona-e-fica-no-clube-ate-2030',
  gazNeymar: 'https://www.gazetaesportiva.com/times/santos/neymar-treina-santos-reforca-time-contra-flamengo/',
  cnnDjoko: 'https://www.cnnbrasil.com.br/esportes/tenis/de-minaur-abandona-final-por-lesao-e-djokovic-e-campeao-em-pequim/',
  lanceSel: 'https://www.lance.com.br/selecao-brasileira/cbf-confirma-datas-e-horarios-dos-amistosos-contra-japao-e-singapura.html',
  cnnEva: 'https://www.cnnbrasil.com.br/pop/cinema/eva-marie-saint-atriz-vencedora-do-oscar-morre-aos-102-anos/',
  omeEva: 'https://www.omelete.com.br/filmes/eva-marie-saint-atriz-morre-102-anos',
  nscJuarez: 'https://www.nsctotal.com.br/cotidiano/morre-aos-85-anos-o-artista-plastico-joinvilense-juarez-machado',
  diaJuarez: 'https://diarinho.net/materia/675916/Juarez-Machado-morre-aos-85-anos-no-Rio-de-Janeiro',
  euroSky: 'https://www.euronews.com/2026/10/06/paramount-and-warner-bros-complete-merger-to-form-hollywood-giant-skydance',
  jwave: 'https://www.jwave.com.br/2026/10/festival-do-rio-tem-marilia-mendonca-feito-pipa-e-a-grande-estreia-nesta-terca/',
  cinepop: 'https://cinepop.com.br/the-batman-2-producao-da-sequencia-e-pausada-por-motivo-pessoal-de-matt-reeves-769285',
  rsFreddie: 'https://rollingstone.com.br/musica/morre-freddie-jackson-voz-de-grandes-sucessos-do-rb-aos-70-anos/',
  ohojeVik: 'https://ohoje.com/2026/10/06/obras-de-vik-muniz-chegam-a-goiania-com-a-exposicao-dinheiro-vivo/',
  cnnMostra: 'https://www.cnnbrasil.com.br/pop/cinema/mostra-internacional-de-cinema-de-sao-paulo-revela-programacao-de-2026/',
  exame: 'https://exame.com/pop/veja-o-calendario-de-shows-internacionais-no-brasil-ate-o-final-de-2026/',
  cnnMerc: 'https://www.cnnbrasil.com.br/economia/money/mercado/mercado-hoje-5-outubro-2026/',
  cnnMerc6: 'https://www.cnnbrasil.com.br/economia/money/mercado/mercado-financeiro-ibovespa-dolar-6-outubro-2026/',
  imMerc6: 'https://www.infomoney.com.br/mercados/ibovespa-hoje-bolsa-de-valores-ao-vivo-06102026/',
  abBalanca: 'https://agenciabrasil.ebc.com.br/economia/noticia/2026-10/previsao-de-superavit-comercial-de-2026-cai-para-us-844-bilhoes',
  dcBalanca: 'https://diariodocomercio.com.br/economia/balanca-comercial-superavit-setembro-2/',
  abBets: 'https://agenciabrasil.ebc.com.br/geral/noticia/2026-10/bets-comecam-sair-do-ar-nesta-terca-feira',
  jcBM: 'https://www.jornaldocomercio.com/economia/2026/10/1265941-banco-mundial-eleva-previsao-de-crescimento-do-brasil-em-2026-de-19-para-21.html',
  terraGali: 'https://terra.com.br/economia/galipolo-depos-a-policia-federal-nesta-terca-feira-como-testemunha-no-caso-master,15c7278fd55700fcd1d47e645e8faa7a6ib3zd0f.html',
  ab6x1: 'https://agenciabrasil.ebc.com.br/politica/noticia/2026-10/alcolumbre-anuncia-sessoes-para-discutir-e-votar-fim-da-escala-6x1',
  p3606x1: 'https://www.poder360.com.br/poder-economia/setor-produtivo-diz-que-fim-da-6-x-1-aumentara-inflacao-e-desemprego/',
  tsWall: 'https://www.thestreet.com/stock-market-today/stock-market-today-dow-jones-sp-500-nasdaq-updates-oct-06-2026',
  correio: 'https://www.correiobraziliense.com.br/economia/2026/10/7513063-producao-industrial-recua-06-de-julho-para-agosto-aponta-ibge.html',
  abEco: 'https://agenciabrasil.ebc.com.br/economia',
  cnnNobel: 'https://cnnbrasil.com.br/internacional/nobel-de-medicina-vai-para-tres-cientistas-por-avanco-na-neurociencia',
  aipNobel: 'https://www.aip.org/aip/aip-congratulates-2026-nobel-prize-winner-in-physics',
  jbNobel: 'https://www.jb.com.br/ciencia-e-tecnologia/ciencia/2026/10/1061132-francis-halzen-ganha-nobel-de-fisica-2026-por-estudo-de-neutrinos-na-antartica.html',
  bnnGoogle: 'https://www.bnnbloomberg.ca/business/technology/2026/10/06/google-enters-massive-36-gw-power-deal-with-constellation-energy/',
  tsDeepseek: 'https://techstartups.com/2026/10/06/deepseek-to-raise-12-billion-in-tencent-and-catl-backed-funding-ahead-of-ipo/',
  recWiki: 'https://therecord.media/wikimedia-foundation-openai-agents-report',
  dgabcLupa: 'https://dgabc.com.br/Noticia/4351247/nas-eleicoes-2026-quase-um-conteudo-eleitoral-com-ia-circulou-por-hora',
  cnnOfcom: 'https://www.cnnbrasil.com.br/economia/money/tecnologia/reino-unido-abre-investigacao-de-seguranca-contra-recurso-do-instagram/',
  je: 'https://jornaleconomico.sapo.pt/noticias/schneider-electric-compra-fabricante-de-software-ptc-por-22-mil-milhoes',
  portal6: 'https://portal6.com.br/2026/09/24/novas-regras-do-pix-comecam-a-valer-a-partir-de-1o-de-outubro-e-mudam-limite-de-transferencias/',
  jd1: 'https://www.jd1noticias.com/economia/2026/10/05/quem-recebe-salario-em-conta-salario-tera-nova-opcao-para-pagar-contas-pelo-pix.html'
};

const NEWS = [
/* ===================== NACIONAL ===================== */
{ id: 'campanhas-segundo-turno-primeiros-apoios', cat: 'nacional', own: true, t: '2026-10-07T06', d: '7 out 2026', img: 'eleicao', read: 4,
  photo: 'fotos/campanhas-segundo-turno-primeiros-apoios.webp', photoAlt: 'Arte com o texto Eleições 2026, com o zero do ano em amarelo formando o mapa do Brasil', credit: 'Arte: reprodução',
  title: 'Segundo turno começa com novos apoios a Flávio e Lula em defesa do fim da escala 6x1',
  sum: 'União Brasil, PP e Ronaldo Caiado fecharam com o candidato do PL. O presidente passou o dia com a coordenação da campanha e cobrou posição do rival sobre a PEC da jornada de trabalho.',
  body: [
    'As duas campanhas presidenciais usaram a terça-feira (6) para reorganizar forças para o segundo turno, marcado para 25 de outubro. Flávio Bolsonaro (PL) reuniu novos apoios, enquanto Lula (PT) escolheu a redução da jornada de trabalho como tema para marcar diferença em relação ao adversário.',
    '## Apoios a Flávio',
    'A federação formada por União Brasil e PP, que ficou neutra no primeiro turno, anunciou apoio a Flávio por unanimidade, em reunião em Brasília. Em Goiânia, o ex-governador Ronaldo Caiado (PSD), quinto colocado com 2,18% dos votos válidos, oficializou a adesão em evento com Tarcísio de Freitas e o governador eleito de Goiás, Daniel Vilela (MDB).',
    'No mesmo evento, Flávio disse que pretende usar a maioria que a direita terá no Congresso para mudar a Constituição. Ele não detalhou quais mudanças propõe. O Republicanos, que também foi neutro no primeiro turno, marcou para esta quarta-feira (7), às 18h, o anúncio de sua posição.',
    '## A estratégia de Lula',
    'Lula passou o dia em Brasília com a coordenação da campanha e defendeu a PEC que reduz a jornada máxima de 44 para 40 horas semanais, em discussão no Senado. O presidente disse que o texto atende a um desejo da sociedade e questionou se Flávio vai orientar o PL a votar contra a proposta.',
    '## Quem ficou neutro',
    'Entre os derrotados no primeiro turno, Augusto Cury (Avante) e Renan Santos (Missão) disseram que não vão apoiar nenhum dos finalistas. O PSD liberou seus diretórios estaduais. Romeu Zema (Novo) declarou apoio a Flávio.'
  ],
  box: { type: 'table', title: 'Quem apoia quem no 2º turno', head: ['Partido ou candidato', 'Posição'], rows: [['União Brasil e PP', 'Apoio a Flávio'], ['Ronaldo Caiado (PSD)', 'Apoio a Flávio'], ['Romeu Zema (Novo)', 'Apoio a Flávio'], ['PSD', 'Diretórios liberados'], ['Augusto Cury (Avante)', 'Neutro'], ['Renan Santos (Missão)', 'Neutro'], ['Republicanos', 'Decide em 7/10']], note: 'Fontes: Gazeta do Povo, CNN Brasil, Agência Brasil e Poder360.' },
  sources: [['Gazeta do Povo', U.gazetaApoio], ['CNN Brasil', U.cnnCaiado], ['Agência Brasil', U.abCampanhas], ['Agência Brasil', U.abRenan], ['Poder360', U.p360Rep]] },

{ id: 'tse-julga-garotinho-eleicao-rio', cat: 'nacional', own: true, t: '2026-10-07T05', d: '7 out 2026', img: 'congresso', read: 3,
  photo: 'fotos/tse-julga-garotinho-eleicao-rio.webp', photoAlt: 'Fachada do prédio do Tribunal Superior Eleitoral, em Brasília, com a placa do tribunal em primeiro plano', credit: 'Foto: reprodução',
  title: 'TSE julga na quinta caso que pode definir a eleição para governador do Rio',
  sum: 'Se os votos de Anthony Garotinho forem anulados, Douglas Ruas (PL) passa a ter 50,88% dos válidos e vence sem segundo turno.',
  body: [
    'O Tribunal Superior Eleitoral marcou para quinta-feira (8), às 10h, o julgamento de um pedido de Anthony Garotinho (Republicanos) que pode mudar o resultado da eleição no Rio de Janeiro. O relator é o ministro Floriano de Azevedo Marques.',
    'Garotinho foi declarado inelegível em 11 de setembro, mas o nome dele continuou na urna porque a decisão saiu depois do fechamento do sistema. Ele teve 274.411 votos, ou 3,17% dos válidos. Na segunda-feira (5), o candidato pediu para desistir do recurso contra a impugnação da candidatura.',
    '## O que está em jogo',
    'Pelo resultado divulgado, Douglas Ruas (PL) teve 49,27% e Eduardo Paes (PSD), 42,76%, e os dois disputariam o segundo turno. Se a desistência for aceita e os votos de Garotinho forem anulados, Ruas sobe para 50,88% dos votos válidos e é eleito já no primeiro turno.',
    '## Os dois lados',
    'O Ministério Público Eleitoral deu parecer favorável à desistência. O PSOL recorreu, argumentando que o destino dos votos deve ser decidido pela Justiça Eleitoral, e não pelo candidato. A coligação de Paes é contra a mudança na contagem e acusa Garotinho e Ruas de combinarem a manobra. A presidente da OAB-RJ, Ana Tereza Basilio, pediu uma decisão antes do prazo do segundo turno.',
    'O julgamento pode não terminar na quinta, por causa de pedidos processuais das partes.'
  ],
  box: { type: 'bars', title: 'Governo do RJ: 1º turno', unit: '% dos votos válidos', max: 55, rows: [['Douglas Ruas (PL)', 49.27], ['Eduardo Paes (PSD)', 42.76], ['Anthony Garotinho (Republicanos)', 3.17]], note: 'Sem os votos de Garotinho, Ruas teria 50,88%. Fonte: Diário do Rio.' },
  sources: [['Diário do Rio', U.dRio], ['Agência Brasil', U.abOab], ['Poder360', U.p360Mpe]] },

{ id: 'segundo-turno-flavio-lula', cat: 'nacional', own: true, t: '2026-10-05T09', d: '5 out 2026', img: 'eleicao', read: 4,
  photo: 'fotos/segundo-turno-flavio-lula.webp', photoAlt: 'Flávio Bolsonaro sorri segurando um microfone, ao lado de Lula sorrindo de chapéu panamá', credit: 'Fotos: reprodução',
  title: 'Flávio Bolsonaro e Lula vão ao segundo turno em 25 de outubro',
  sum: 'Candidato do PL terminou o primeiro turno com 47,05% dos votos válidos, contra 45,14% do presidente. A diferença foi de cerca de 2,3 milhões de votos.',
  body: [
    'O segundo turno da eleição presidencial será disputado em 25 de outubro entre Flávio Bolsonaro (PL) e o presidente Luiz Inácio Lula da Silva (PT). Com a apuração concluída no domingo (4), Flávio terminou na frente, com 47,05% dos votos válidos, cerca de 56,1 milhões de votos. Lula somou 45,14%, ou 53,8 milhões.',
    'Nenhum dos dois passou da metade dos votos válidos, condição para vencer já no primeiro turno. A distância entre eles ficou abaixo de dois pontos percentuais.',
    'Os demais candidatos ficaram bem atrás. Augusto Cury (Avante) teve 2,89%, Renan Santos (Missão) 2,24% e Ronaldo Caiado (PSD) 2,18%. Outros sete nomes tiveram, cada um, menos de 0,3% dos votos válidos.',
    '## As chapas',
    'Flávio tem como candidato a vice Alfredo Gaspar (PL), ex-promotor de Justiça. Lula repete a parceria com Geraldo Alckmin (PSB), ex-governador de São Paulo.',
    '## Participação',
    'O comparecimento foi de 78,92% do eleitorado, e a abstenção, de 21,08%. Os votos nulos representaram 2,93% do total, e os brancos, 1,84%.',
    '## O que vem agora',
    'Nas próximas três semanas, as duas campanhas disputam os eleitores dos candidatos que ficaram pelo caminho, que somaram pouco mais de 7% dos votos válidos, e os mais de 20% que não foram às urnas.'
  ],
  box: { type: 'bars', title: 'Resultado do 1º turno', unit: '% dos votos válidos', max: 50, rows: [['Flávio Bolsonaro (PL)', 47.05], ['Lula (PT)', 45.14], ['Augusto Cury (Avante)', 2.89], ['Renan Santos (Missão)', 2.24], ['Ronaldo Caiado (PSD)', 2.18]], note: 'Fonte: TSE, via Agência Senado.' },
  sources: [['Agência Senado', U.sen]] },

{ id: 'lula-cobra-flavio-escala-6x1', cat: 'nacional', own: false, t: '2026-10-06T20', d: '6 out 2026', img: 'congresso', src: 'Agência Brasil', url: U.abCampanhas,
  photo: 'fotos/lula-cobra-flavio-escala-6x1.webp', photoAlt: 'Lula fala ao microfone ao lado de aliados, diante de painel da campanha', credit: 'Foto: reprodução',
  title: 'Lula defende fim da escala 6x1 e cobra posição de Flávio',
  sum: 'O presidente questionou se o adversário vai orientar o PL a votar contra a PEC, que está em discussão no Senado.',
  body: [
    'Em Brasília, Lula disse que a redução da jornada máxima de 44 para 40 horas semanais é um desejo da sociedade e afirmou que a votação no Senado vai mostrar a posição de cada lado.',
    'A PEC já foi aprovada pela Câmara e precisa de 49 votos em dois turnos no Senado.'
  ] },

{ id: 'flavio-maioria-congresso-constituicao', cat: 'nacional', own: false, t: '2026-10-06T18', d: '6 out 2026', img: 'congresso', src: 'CNN Brasil', url: U.cnnConst,
  photo: 'fotos/flavio-maioria-congresso-constituicao.webp', photoAlt: 'Flávio Bolsonaro sorri no palco de um ginásio lotado durante evento de campanha', credit: 'Foto: reprodução',
  title: 'Flávio diz que vai usar maioria no Congresso para mudar a Constituição',
  sum: 'A declaração foi feita em Goiânia, no primeiro evento público do candidato do PL no segundo turno.',
  body: [
    'Ao receber o apoio de Ronaldo Caiado, Flávio Bolsonaro afirmou que a eleição deu ao país um Congresso mais à direita e que pretende usar essa base para alterar a Constituição. Ele não detalhou as mudanças.',
    'Segundo a CNN Brasil, o PL terá 121 deputados e 28 senadores. Uma emenda constitucional exige 308 votos na Câmara e 49 no Senado.'
  ] },

{ id: 'oea-relatorio-eleicoes-brasil', cat: 'nacional', own: false, t: '2026-10-06T22', d: '6 out 2026', img: 'eleicao', src: 'Band', url: U.bandOea,
  photo: 'fotos/oea-relatorio-eleicoes-brasil.webp', photoAlt: 'Integrantes da missão de observação reunidos em sofás de um gabinete', credit: 'Foto: reprodução',
  title: 'Missão da OEA aprova urnas e critica decisões individuais no STF e no TSE',
  sum: 'Os observadores também apontaram ativismo político de líderes estrangeiros. O TSE diz que não houve interferência estrangeira direta.',
  body: [
    'A missão da Organização dos Estados Americanos, chefiada por José Miguel Insulza, teve 91 observadores de 23 países. O relatório avaliou bem o funcionamento das urnas: todas as 517.179 seções abriram e não houve votação manual.',
    'O documento critica o número de decisões monocráticas de ministros do STF e do TSE, que, segundo a missão, causaram confusão e instabilidade. Os observadores recomendam segurança jurídica e debates na TV no segundo turno.'
  ] },

{ id: 'tse-remove-posts-bandeira-lula', cat: 'nacional', own: false, t: '2026-10-06T12', d: '6 out 2026', img: 'congresso', src: 'Band', url: U.bandPosts,
  photo: 'fotos/tse-remove-posts-bandeira-lula.webp', photoAlt: 'Lula segura uma bandeira verde ao lado de Geraldo Alckmin, perto da cabine de votação', credit: 'Foto: reprodução',
  title: 'TSE manda remover posts que dizem que Lula jogou a bandeira no chão',
  sum: 'O ministro André Mendonça determinou a retirada de 16 links em até 24 horas. A decisão é provisória e vai ao plenário.',
  body: [
    'A decisão atendeu a um pedido da coligação de Lula. Imagens da GloboNews mostram que a bandeira foi entregue a outra pessoa e não caiu no chão.',
    'O ministro ressalvou que críticas ao gesto continuam permitidas. Entre os alvos estão publicações do deputado Maurício do Vôlei (PL) e de Pablo Marçal (PRTB).'
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

{ id: 'vinte-estados-governador-primeiro-turno', cat: 'nacional', own: false, t: '2026-10-04T22', d: '4 out 2026', img: 'congresso', src: 'Agência Brasil', url: U.abGov,
  photo: 'fotos/vinte-estados-governador-primeiro-turno.webp', photoAlt: 'Urna eletrônica com a palavra FIM na tela, em seção eleitoral de São Paulo', credit: 'Foto: reprodução',
  title: 'Vinte estados definem o governador já no primeiro turno',
  sum: 'Sete unidades da federação, entre elas o Rio de Janeiro e o Distrito Federal, terão nova votação em 25 de outubro.',
  body: [
    'O Nordeste concentrou o maior número de eleições resolvidas no domingo: oito estados. O PT reelegeu governadores na Bahia, no Ceará e no Piauí. Nos três estados do Sul, venceram candidatos do PL.',
    'Acre, Amazonas, Distrito Federal, Espírito Santo, Rio Grande do Norte, Rio de Janeiro e Tocantins voltam às urnas no segundo turno.'
  ] },

/* ===================== INTERNACIONAL ===================== */
{ id: 'israel-tres-anos-7-de-outubro', cat: 'internacional', own: true, t: '2026-10-07T06', d: '7 out 2026', img: 'mundo', read: 3,
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

{ id: 'franca-suspende-aulas-protestos-estudantes', cat: 'internacional', own: true, t: '2026-10-06T13', d: '6 out 2026', img: 'protesto', read: 2,
  title: 'França suspende aulas do ensino médio após protestos de estudantes',
  sum: 'As autoridades contaram cerca de 250 mil manifestantes. Quase 2 mil escolas foram bloqueadas ou fechadas.',
  body: [
    'O primeiro-ministro francês, Sébastien Lecornu, suspendeu as aulas do ensino médio até o fim da semana, depois de mais um dia de protestos de estudantes contra as condições das escolas públicas. A polícia contou cerca de 250 mil pessoas nas ruas; os organizadores falam em 500 mil.',
    'Quase 2 mil liceus foram bloqueados ou fechados. Os ministros têm até o fim de outubro para responder às reivindicações dos estudantes.',
    '## Feridos e presos',
    'Pelo menos 215 adolescentes e 715 policiais ficaram feridos. Desde o início do movimento, 6.100 pessoas foram presas, a maioria menores de idade. Em Lens, um jovem de 15 anos perdeu a mão e parte do braço ao pegar uma granada da polícia.'
  ],
  sources: [['Al Jazeera', U.ajFranca]] },

{ id: 'ormuz-petroleiro-atacado-feridos', cat: 'internacional', own: false, t: '2026-10-07T03', d: '7 out 2026', img: 'mundo', src: 'Al Jazeera', url: U.ajTanker,
  photo: 'fotos/ormuz-petroleiro-atacado-feridos.webp', photoAlt: 'Mapa do Golfo Pérsico com o Estreito de Ormuz destacado entre o Irã e os Emirados Árabes Unidos', credit: 'Mapa: reprodução',
  title: 'Petroleiro é atacado perto do Estreito de Ormuz e 12 tripulantes ficam feridos',
  sum: 'Omã retirou os feridos do navio On Peace. Ninguém assumiu o ataque, o mais recente de uma série na região.',
  body: [
    'O petroleiro de bandeira panamenha foi atingido a cerca de 9 milhas náuticas da costa de Omã. Dos 19 tripulantes, 12 ficaram feridos; a maioria da tripulação era indiana.',
    'Segundo a Al Jazeera, houve pelo menos sete incidentes com navios na região na última semana, enquanto o Irã mantém o estreito fechado.'
  ] },

{ id: 'russia-ataque-kiev-mortos', cat: 'internacional', own: false, t: '2026-10-07T03', d: '7 out 2026', img: 'mundo', src: 'Al Jazeera', url: U.ajKiev,
  photo: 'fotos/russia-ataque-kiev-mortos.webp', photoAlt: 'Explosão ilumina o céu noturno de uma cidade, com uma grande nuvem de fogo e fumaça', credit: 'Foto: reprodução',
  title: 'Ataque russo em Kiev deixa ao menos dois mortos',
  sum: 'O Ministério da Defesa da Rússia confirmou um ataque em larga escala, que também atingiu portos na região de Odessa.',
  body: [
    'As mortes foram registradas no bairro de Darnytskyi, na capital ucraniana, durante a madrugada desta quarta-feira (7). O prefeito Vitali Klitschko relatou um incêndio em área densamente povoada.',
    'Portos da região de Odessa também foram atingidos.'
  ] },

{ id: 'bulgaria-navios-atingidos-drones', cat: 'internacional', own: false, t: '2026-10-06T12', d: '6 out 2026', img: 'mundo', src: 'Al Jazeera', url: U.ajBulgaria,
  title: 'Drones atingem dois navios em águas da Bulgária; um deles afunda',
  sum: 'O Alfa Watan afundou e o Able pegou fogo, a cerca de 70 milhas náuticas da costa búlgara, no Mar Negro.',
  body: [
    'Os 18 tripulantes do Able foram resgatados, e dois estão em estado grave em Varna. Não há informação sobre a tripulação do Alfa Watan.',
    'A origem dos drones não foi identificada. O primeiro-ministro búlgaro, Rumen Radev, chamou o ataque de inaceitável.'
  ] },

{ id: 'quenia-primeiro-caso-ebola', cat: 'internacional', own: false, t: '2026-10-06T15', d: '6 out 2026', img: 'mundo', src: 'Al Jazeera', url: U.ajEbola,
  title: 'Quênia confirma primeiro caso de ebola; paciente morre em Nairóbi',
  sum: 'O homem vivia na República Democrática do Congo, onde um surto já matou mais de 4 mil pessoas.',
  body: [
    'O paciente viajou por terra até Uganda e de lá seguiu de avião para Nairóbi, onde morreu. Segundo o presidente William Ruto, ao menos 8 familiares e 21 profissionais de saúde estão em quarentena, e passageiros e tripulantes do voo estão sendo rastreados.',
    'O surto no Congo já soma mais de 8.300 casos confirmados em sete províncias.'
  ] },

{ id: 'iemen-houthis-atacam-aeroporto-aden', cat: 'internacional', own: false, t: '2026-10-07T02', d: '7 out 2026', img: 'mundo', src: 'Al Jazeera', url: U.ajAden,
  photo: 'fotos/iemen-houthis-atacam-aeroporto-aden.webp', photoAlt: 'Fumaça preta sobe de destroços em chamas numa área de terra aberta', credit: 'Foto: reprodução',
  title: 'Houthis atacam aeroporto de Áden; Arábia Saudita derruba míssil perto de Riade',
  sum: 'Mísseis e drones atingiram a pista e o terminal. Um voo foi desviado e o terminal, evacuado.',
  body: [
    'O ataque ao aeroporto ocorre em meio à ofensiva das forças do governo, apoiadas pela Arábia Saudita, contra os houthis. A coalizão saudita informou ter interceptado um míssil ao norte de Riade.',
    'As forças do governo dizem ter tomado um ponto estratégico na província de Taiz.'
  ] },

{ id: 'espanha-eleicao-antecipada-29-novembro', cat: 'internacional', own: false, t: '2026-10-06T08', d: '6 out 2026', img: 'protesto', src: 'ABC News (Austrália)', url: U.abcEspanha,
  title: 'Espanha terá eleição antecipada em 29 de novembro',
  sum: 'Pedro Sánchez convocou a votação depois que o Parlamento rejeitou, na sexta-feira anterior, suas medidas emergenciais de moradia.',
  body: [
    'O anúncio foi feito na segunda-feira (5). Na mesma semana, dezenas de milhares de pessoas foram às ruas em Barcelona.'
  ] },

{ id: 'trump-fala-los-angeles-san-diego-ira', cat: 'internacional', own: false, t: '2026-10-07T01', d: '7 out 2026', img: 'mundo', src: 'Al Jazeera', url: U.ajTrump,
  title: 'Fala de Trump sobre Irã atingir Los Angeles e San Diego gera reação',
  sum: 'Em comício, o presidente disse que seria um preço pequeno a pagar. A Casa Branca minimizou a repercussão.',
  body: [
    'A frase foi dita em um comício em Nebraska, na segunda-feira (5). O governador da Califórnia, Gavin Newsom, criticou a declaração, e políticos republicanos do estado também se manifestaram contra.',
    'Um porta-voz da Casa Branca, Steven Cheung, atribuiu a polêmica a um exagero da imprensa.'
  ] },

/* ===================== ESPORTES ===================== */
{ id: 'messi-despedida-argentina-benin', cat: 'esportes', own: true, t: '2026-10-07T01', d: '7 out 2026', img: 'esportes', read: 2,
  title: 'Messi se despede da Argentina com gol e duas assistências nos 3 a 0 sobre Benin',
  sum: 'O camisa 10 fez seu último jogo pela seleção no Monumental de Núñez e encerra a trajetória com 126 gols.',
  body: [
    'Lionel Messi fez na terça-feira (6) a última partida pela seleção argentina. No estádio Monumental de Núñez, em Buenos Aires, a Argentina venceu Benin por 3 a 0, com participação direta dele nos três gols.',
    'Messi deu o passe para Otamendi abrir o placar de cabeça, depois de escanteio, e serviu Nico Paz no segundo gol. O terceiro foi dele, de pênalti. Segundo a Sports Illustrated, ele jogou os 90 minutos diante de mais de 80 mil torcedores.',
    '## Os números',
    'Segundo o jornal mexicano Excelsior, Messi deixa a seleção com 208 jogos, 126 gols e 68 assistências.',
    '## Representante do Brasileirão',
    'O lateral-direito Agustín Giay, de 22 anos, do Palmeiras, foi titular na despedida, segundo a CNN Brasil.'
  ],
  box: { type: 'facts', title: 'Messi pela Argentina', rows: [['Jogos', '208'], ['Gols', '126'], ['Assistências', '68']] },
  sources: [['Sports Illustrated', U.siMessi], ['Excelsior', U.excMessi], ['CNN Brasil', U.cnnGiay]] },

{ id: 'brasileirao-volta-flamengo-lider', cat: 'esportes', own: true, t: '2026-10-06T06', d: '6 out 2026', img: 'esportes', read: 3,
  title: 'Brasileirão volta na quinta com Flamengo três pontos à frente do Palmeiras',
  sum: 'O rubro-negro lidera com 60 pontos após 28 rodadas. A vantagem no número de vitórias protege a liderança na próxima rodada.',
  body: [
    'Depois de uma pausa no calendário, o Campeonato Brasileiro volta a ser disputado na quinta-feira (8). O Flamengo retoma a competição na liderança, com 60 pontos, três a mais que o Palmeiras, segundo colocado com 57.',
    'A vantagem do time carioca vai além dos pontos. O Flamengo soma 18 vitórias, contra 16 do rival. No Brasileirão, o número de vitórias é o primeiro critério de desempate, antes do saldo de gols.',
    '## Por que a liderança não muda na 29ª rodada',
    'Na volta do campeonato, o Palmeiras enfrenta o Bahia, e o Flamengo encara o Santos. Mesmo que o time paulista vença e o carioca perca, os dois ficariam com 60 pontos, e o Flamengo seguiria em primeiro pelas duas vitórias a mais.',
    '## A primeira chance do Palmeiras',
    'A troca na ponta só passa a ser possível na 30ª rodada. Para isso, o Palmeiras precisa vencer os próximos dois jogos, contra Bahia e Corinthians, e torcer para que o Flamengo não vença nenhuma de suas duas partidas.',
    'A disputa ainda reserva dois confrontos diretos na reta final: na 36ª rodada, com mando do Palmeiras, e na 37ª.'
  ],
  box: { type: 'table', title: 'Topo da tabela após 28 rodadas', head: ['#', 'Clube', 'Pontos', 'Vitórias'], rows: [['1', 'Flamengo', '60', '18'], ['2', 'Palmeiras', '57', '16']], note: 'Fonte: Portal do Palestra, 2 out 2026.' },
  sources: [['Portal do Palestra', U.pp], ['Band', U.band]] },

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

{ id: 'neymar-treina-santos-flamengo', cat: 'esportes', own: false, t: '2026-10-05T19', d: '5 out 2026', img: 'esportes', src: 'Gazeta Esportiva', url: U.gazNeymar,
  title: 'Neymar treina sem restrições e deve reforçar o Santos contra o Flamengo',
  sum: 'O jogo é na quinta (8), às 19h30, na Vila Belmiro. O atacante estava fora desde 2 de setembro por lesão na coxa.',
  body: [
    'O Santos, oitavo colocado com 41 pontos, vem de cinco vitórias seguidas. Arthur, lesionado, e Everton Cebolinha, por cláusula contratual, não jogam.'
  ] },

{ id: 'juventude-lider-serie-b', cat: 'esportes', own: false, t: '2026-10-06T22', d: '6 out 2026', img: 'esportes', src: 'Gazeta Esportiva', url: U.gazJuv,
  title: 'Juventude vence a Ponte Preta e assume a liderança da Série B',
  sum: 'O time gaúcho fez 2 a 0 e chegou a 59 pontos. A Ponte, lanterna, já está rebaixada.',
  body: [
    'Raí Silva, no primeiro tempo, e Marcos Paulo, no segundo, marcaram os gols da vitória em Indaiatuba, pela 32ª rodada. O Juventude abriu dois pontos sobre o Vila Nova, que joga nesta quarta-feira (7).',
    'A Ponte Preta tem 13 pontos e sofreu a 25ª derrota na competição.'
  ] },

{ id: 'antonelli-titulo-f1-austin', cat: 'esportes', own: false, t: '2026-10-06T12', d: '6 out 2026', img: 'pista', src: 'Grande Prêmio', url: U.gpF1,
  title: 'Antonelli não pode ser campeão em Singapura; primeira chance é em Austin',
  sum: 'O líder soma 320 pontos, 84 à frente de George Russell. O GP dos EUA é em 25 de outubro.',
  body: [
    'Mesmo vencendo a corrida sprint e o GP de Singapura neste fim de semana, Kimi Antonelli, da Mercedes, ainda teria rivais com chance matemática, porque restariam cinco etapas.',
    'Lewis Hamilton é o terceiro, com 214 pontos.'
  ] },

{ id: 'raphinha-renova-barcelona-2030', cat: 'esportes', own: false, t: '2026-10-06T13', d: '6 out 2026', img: 'esportes', src: 'Imirante', url: U.imiRaphinha,
  title: 'Raphinha renova com o Barcelona até 2030',
  sum: 'O atacante da Seleção tem 14 gols e 3 assistências em 8 jogos na temporada.',
  body: [
    'O novo contrato inclui aumento salarial. Capitão do Barcelona, Raphinha ficou fora do amistoso contra a Índia por um edema na coxa direita, e exames descartaram lesão.'
  ] },

{ id: 'djokovic-campeao-pequim', cat: 'esportes', own: false, t: '2026-10-06T10', d: '6 out 2026', img: 'esportes', src: 'CNN Brasil', url: U.cnnDjoko,
  title: 'Djokovic é campeão em Pequim após abandono de De Minaur',
  sum: 'O sérvio venceu o primeiro set no tie-break e conquistou o sétimo título do torneio.',
  body: [
    'O australiano Alex de Minaur deixou a final no início do segundo set, com lesão na virilha.'
  ] },

{ id: 'selecao-japao-singapura-novembro', cat: 'esportes', own: false, t: '2026-10-05T12', d: '5 out 2026', img: 'esportes', src: 'Lance!', url: U.lanceSel,
  title: 'Seleção enfrenta Japão e Singapura na próxima Data Fifa',
  sum: 'Os dois amistosos serão no Estádio Nacional de Singapura, em 14 e 17 de novembro, de manhã no horário de Brasília.',
  body: [
    'A CBF confirmou os horários: Brasil x Japão em 14 de novembro, às 7h15, e Brasil x Singapura em 17 de novembro, às 7h.',
    'Os jogos dão sequência à renovação do grupo de Carlo Ancelotti depois da goleada de 4 a 0 sobre a Índia.'
  ] },

{ id: 'copa-do-brasil-final-jogo-unico', cat: 'esportes', own: false, t: '2026-09-20T12', d: 'set 2026', img: 'esportes', src: 'Tribuna de Jundiaí', url: U.trib,
  title: 'Copa do Brasil terá final em jogo único em 6 de dezembro',
  sum: 'As semifinais têm Palmeiras x Vasco e Atlético-MG x Grêmio. Brasília é a favorita para receber a decisão.',
  body: [
    'As semifinais da Copa do Brasil serão disputadas em 1º e 8 de novembro, com mandos definidos por sorteio da CBF. A final, em jogo único, está marcada para 6 de dezembro.',
    'O local ainda não foi confirmado, mas o Mané Garrincha, em Brasília, é o mais cotado. O campeão pode receber até R$ 96 milhões em premiação.'
  ] },

/* ===================== CULTURA ===================== */
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

{ id: 'juarez-machado-morre-85-anos', cat: 'cultura', own: true, t: '2026-10-06T21', d: '6 out 2026', img: 'arte', read: 2,
  title: 'Morre o artista plástico Juarez Machado, aos 85 anos',
  sum: 'Nascido em Joinville, ele foi pioneiro do humor animado na TV e criou capas de discos de Elis Regina e Raul Seixas.',
  body: [
    'O artista plástico Juarez Machado morreu na terça-feira (6), aos 85 anos, no interior do estado do Rio de Janeiro. A morte foi confirmada pelo Instituto Internacional Juarez Machado.',
    'Nascido em Joinville (SC) em 1941, ele fez a primeira exposição individual em 1964. Nos anos 1970, ganhou o público da TV com quadros de animação humorística na Globo.',
    '## Discos e Paris',
    'Juarez criou capas de discos de Elis Regina, Roberto Carlos, Raul Seixas e Emílio Santiago. No início dos anos 1980, mudou-se para Paris e passou a viver em Montmartre.',
    'A Prefeitura de Joinville decretou luto oficial de três dias.'
  ],
  sources: [['NSC Total', U.nscJuarez], ['Diarinho', U.diaJuarez]] },

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

{ id: 'paramount-warner-fusao-skydance', cat: 'cultura', own: false, t: '2026-10-06T15', d: '6 out 2026', img: 'palco', src: 'Euronews', url: U.euroSky,
  title: 'Paramount e Warner Bros. Discovery concluem fusão e criam a Skydance',
  sum: 'A nova empresa reúne HBO Max, Paramount+, CBS e CNN. David Ellison será o presidente-executivo.',
  body: [
    'Segundo a Euronews, o negócio avaliou a Warner Bros. Discovery em US$ 81 bilhões, cerca de US$ 111 bilhões com dívidas. A receita anual combinada é de quase US$ 70 bilhões.',
    'A companhia promete economizar mais de US$ 6 bilhões em três anos. Franquias como "Harry Potter", "Top Gun" e "O Poderoso Chefão" ficam sob o mesmo grupo.'
  ] },

{ id: 'festival-do-rio-feito-pipa-marilia', cat: 'cultura', own: false, t: '2026-10-06T12', d: '6 out 2026', img: 'cultura', src: 'J Wave', url: U.jwave,
  title: 'Festival do Rio exibe "Feito Pipa" e estreia série sobre Marília Mendonça',
  sum: 'O longa de Allan Deberton é o escolhido do Brasil para tentar uma vaga no Oscar de filme internacional.',
  body: [
    'Na terça (6), o Cine Odeon recebeu o primeiro episódio de "Marília Mendonça: Sentimento Louco", de Susanna Lira. "Feito Pipa" foi exibido no Centro Cultural FGV.',
    'A programação também teve "A Grande Estreia", de Jesse Eisenberg, com Julianne Moore e Paul Giamatti, que chega aos cinemas em janeiro de 2027.'
  ] },

{ id: 'the-batman-parte-2-filmagens-pausadas', cat: 'cultura', own: false, t: '2026-10-05T15', d: '5 out 2026', img: 'cultura', src: 'CinePOP', url: U.cinepop,
  title: 'Filmagens de "The Batman: Parte II" são pausadas',
  sum: 'O diretor Matt Reeves se afastou temporariamente por uma questão familiar. A estreia segue marcada para fevereiro de 2028.',
  body: [
    'A DC Studios informou que a produção em Londres, iniciada em julho, foi interrompida temporariamente. O elenco inclui Robert Pattinson, Colin Farrell e Jeffrey Wright.'
  ] },

{ id: 'freddie-jackson-morre-70-anos', cat: 'cultura', own: false, t: '2026-10-06T14', d: '6 out 2026', img: 'palco', src: 'Rolling Stone Brasil', url: U.rsFreddie,
  title: 'Morre Freddie Jackson, cantor de "Rock Me Tonight", aos 70 anos',
  sum: 'O primeiro álbum do cantor de R&B ficou 16 semanas no topo da parada da Billboard.',
  body: [
    'A morte foi comunicada pela família, sem divulgação da causa. Nascido no Harlem, em Nova York, Jackson também fez sucesso com "You Are My Lady" e recebeu duas indicações ao Grammy pelo disco de estreia, de 1985.'
  ] },

{ id: 'vik-muniz-dinheiro-vivo-goiania', cat: 'cultura', own: false, t: '2026-10-06T10', d: '6 out 2026', img: 'arte', src: 'O Hoje', url: U.ohojeVik,
  title: 'Vik Muniz abre em Goiânia exposição feita com cédulas descartadas',
  sum: '"Dinheiro Vivo" reúne 13 obras na Galeria Léo Romano até 31 de janeiro, com entrada gratuita.',
  body: [
    'As cédulas usadas nas obras foram cedidas pela Casa da Moeda. A curadoria é de Daniel Rangel.'
  ] },

{ id: 'bts-tres-shows-morumbis', cat: 'cultura', own: false, t: '2026-09-30T10', d: '', img: 'palco', src: 'Exame', url: U.exame,
  title: 'BTS faz três shows no MorumBIS no fim de outubro',
  sum: 'O grupo sul-coreano traz a turnê "Arirang" a São Paulo nos dias 28, 30 e 31.',
  body: [
    'O BTS volta ao Brasil com três apresentações no estádio do São Paulo. A turnê mundial leva o nome "Arirang".',
    'Os shows estão entre os mais aguardados do calendário de grandes eventos do segundo semestre.'
  ] },

{ id: 'robbie-williams-volta-ao-brasil', cat: 'cultura', own: false, t: '2026-09-30T09', d: '', img: 'palco', src: 'Exame', url: U.exame,
  title: 'Robbie Williams volta ao Brasil depois de 20 anos',
  sum: 'O britânico se apresenta em 13 de outubro no Nubank Parque. Zayn toca no mesmo local no dia 10.',
  body: [
    'Robbie Williams traz a turnê "BRITPOP" a São Paulo em 13 de outubro. É a primeira passagem do cantor pelo país em duas décadas.',
    'Três dias antes, em 10 de outubro, o ex-One Direction Zayn se apresenta no mesmo espaço.'
  ] },

/* ===================== ECONOMIA ===================== */
{ id: 'balanca-comercial-superavit-setembro', cat: 'economia', own: true, t: '2026-10-06T20', d: '6 out 2026', img: 'plataforma', read: 3,
  title: 'Balança comercial tem superávit de US$ 7,7 bilhões em setembro',
  sum: 'O saldo é 146% maior que o de um ano antes. Mesmo assim, o governo cortou a previsão para 2026 por causa do petróleo.',
  body: [
    'O Brasil vendeu ao exterior US$ 34,4 bilhões em setembro e comprou US$ 26,7 bilhões, com saldo positivo de US$ 7,74 bilhões. Em setembro de 2025, o superávit tinha sido de US$ 3,14 bilhões. Os dados do mês fechado foram divulgados na terça-feira (6).',
    'As exportações subiram 12,9%, puxadas pela indústria extrativa. As vendas de petróleo bruto somaram US$ 6,49 bilhões, alta de 77,3% em um ano. As importações caíram 2,4%.',
    '## No ano',
    'De janeiro a setembro, o superávit acumulado chega a US$ 62,4 bilhões, 34,8% a mais que no mesmo período do ano passado.',
    '## Previsão menor',
    'O Ministério do Desenvolvimento, Indústria, Comércio e Serviços reduziu a estimativa de saldo para 2026, de US$ 90 bilhões para US$ 84,4 bilhões, por causa da revisão nos preços do petróleo. O valor ainda ficaria 24% acima do registrado em 2025.',
    'Uma prévia publicada na semana passada, com dados até a quarta semana do mês, indicava superávit de US$ 6,45 bilhões.'
  ],
  box: { type: 'facts', title: 'Setembro de 2026', rows: [['Exportações', 'US$ 34,4 bilhões (+12,9%)'], ['Importações', 'US$ 26,7 bilhões (−2,4%)'], ['Saldo', 'US$ 7,74 bilhões'], ['Previsão para 2026', 'US$ 84,4 bilhões']] },
  sources: [['Agência Brasil', U.abBalanca], ['Diário do Comércio', U.dcBalanca]] },

{ id: 'bets-saem-do-ar-devolucao-saldos', cat: 'economia', own: true, t: '2026-10-06T09', d: '6 out 2026', img: 'celular', read: 2,
  title: 'Sites de apostas começam a sair do ar; devolução de saldos começa na sexta',
  sum: 'O governo estima cerca de 23 milhões de usuários e R$ 1,7 bilhão a devolver. Os bancos fazem os pagamentos de 9 a 14 de outubro.',
  body: [
    'As plataformas de apostas on-line começaram a sair do ar na terça-feira (6), por causa da medida provisória 1.394/2026, assinada pelo presidente Lula em 25 de setembro. A MP ainda precisa ser aprovada pelo Congresso.',
    'O prazo para os apostadores sacarem o dinheiro por conta própria terminou na segunda-feira (5), às 23h59. Segundo a Agência Brasil, o governo calcula que cerca de 23 milhões de pessoas tinham conta nas plataformas, com aproximadamente R$ 1,7 bilhão a ser devolvido.',
    '## Como fica a devolução',
    'Nesta quarta (7) e na quinta (8), as empresas informam os saldos aos bancos. De 9 a 14 de outubro, os bancos devolvem o dinheiro. A partir de 14 de outubro, a Caixa também pode fazer os pagamentos.',
    'Os ministérios envolvidos pediram o bloqueio de 5.209 endereços de sites ilegais.'
  ],
  box: { type: 'steps', title: 'Calendário da devolução', steps: [['7 e 8 de outubro', 'As empresas informam os saldos dos clientes aos bancos.'], ['9 a 14 de outubro', 'Os bancos devolvem o dinheiro aos apostadores.'], ['A partir de 14 de outubro', 'A Caixa também pode fazer os pagamentos.']] },
  sources: [['Agência Brasil', U.abBets]] },

{ id: 'ibovespa-supera-200-mil-pontos', cat: 'economia', own: true, t: '2026-10-05T18', d: '5 out 2026', img: 'mercado', read: 3,
  photo: 'fotos/ibovespa-supera-200-mil-pontos.webp', photoAlt: 'Gráfico de alta em verde sobre a ponte Estaiada e prédios de São Paulo à noite', credit: 'Imagem ilustrativa',
  title: 'Ibovespa supera 200 mil pontos pela primeira vez após o 1º turno',
  sum: 'O índice subiu 7,70% na segunda-feira e fechou em 206.911 pontos. O dólar caiu 4,12% e terminou cotado a R$ 5,00.',
  body: [
    'A Bolsa brasileira teve na segunda-feira (5) um dos pregões mais fortes dos últimos anos. O Ibovespa avançou 7,70% e encerrou o dia aos 206.911,89 pontos, o primeiro fechamento da história acima de 200 mil. Durante a sessão, o índice chegou a 209.605,70 pontos.',
    'O mercado atribuiu o movimento ao resultado do primeiro turno da eleição presidencial, em que Flávio Bolsonaro (PL) terminou à frente do presidente Lula (PT).',
    '## Dólar a R$ 5,00',
    'No câmbio, o dólar recuou 4,12% e fechou vendido a R$ 5,00. Economistas ouvidos pela CNN Brasil apontaram a melhora na percepção de risco do país e a expectativa de entrada de capital estrangeiro.',
    '## Juros em queda',
    'Nos contratos de juros futuros de prazo mais longo, as taxas caíram mais de 130 pontos-base. O mercado passou a ver cerca de 15% de chance de um corte maior da Selic em novembro.'
  ],
  box: { type: 'bars', title: 'Destaques de alta em 5/10', unit: 'variação no dia', max: 25, rows: [['Magazine Luiza', 24.18], ['BTG Pactual', 22.52], ['C&A', 19.71], ['Bradesco', 13.57], ['Itaú', 10.37], ['Petrobras PN', 8.19]], fmt: 'pctplus', note: 'Fonte: CNN Brasil.' },
  sources: [['CNN Brasil', U.cnnMerc]] },

{ id: 'ibovespa-recua-dolar-abaixo-5-reais', cat: 'economia', own: false, t: '2026-10-06T18', d: '6 out 2026', img: 'mercado', src: 'CNN Brasil', url: U.cnnMerc6,
  title: 'Ibovespa recua 0,52% e dólar fecha abaixo de R$ 5',
  sum: 'A Bolsa terminou em 205.835 pontos, com realização de lucros após a alta recorde. O dólar caiu 0,55%, a R$ 4,97.',
  body: [
    'Depois de subir 7,70% na segunda-feira, o Ibovespa devolveu parte dos ganhos. Banco do Brasil caiu 6,42% e Petrobras PN, 2,78%, segundo o InfoMoney. Bradesco PN subiu 4,40%.',
    'O dólar fechou cotado a R$ 4,9745 na venda.'
  ] },

{ id: 'banco-mundial-pib-brasil-2-1', cat: 'economia', own: false, t: '2026-10-06T11', d: '6 out 2026', img: 'mercado', src: 'Jornal do Comércio', url: U.jcBM,
  title: 'Banco Mundial eleva previsão de crescimento do Brasil em 2026 para 2,1%',
  sum: 'A estimativa anterior, de junho, era de 1,9%. Para 2027, a projeção caiu de 2% para 1,7%.',
  body: [
    'O banco cita os juros altos como freio para o consumo e o investimento, com o mercado de trabalho ainda resistente.',
    'A nova projeção fica acima da mediana do Boletim Focus, de 1,85% para este ano.'
  ] },

{ id: 'galipolo-depoe-pf-caso-master', cat: 'economia', own: false, t: '2026-10-06T19', d: '6 out 2026', img: 'mercado', src: 'Terra', url: U.terraGali,
  title: 'Galípolo depõe à Polícia Federal como testemunha no caso Banco Master',
  sum: 'O ex-presidente do BC Roberto Campos Neto tem depoimento marcado para esta quarta-feira.',
  body: [
    'O presidente do Banco Central foi ouvido no inquérito que apura fraudes ligadas ao Master, liquidado em novembro do ano passado. A PF confirmou o depoimento, sem detalhar o conteúdo.',
    'André Esteves, do BTG Pactual, também foi ouvido como testemunha.'
  ] },

{ id: 'pec-6x1-senado-setor-produtivo', cat: 'economia', own: false, t: '2026-10-06T16', d: '6 out 2026', img: 'congresso', src: 'Agência Brasil', url: U.ab6x1,
  title: 'Senado começa a discutir fim da escala 6x1; indústria e comércio preveem alta de custos',
  sum: 'A PEC reduz a jornada máxima de 44 para 40 horas por semana. A votação do primeiro turno pode ocorrer em 15 de outubro.',
  body: [
    'O presidente do Senado, Davi Alcolumbre, marcou sessões de discussão para esta semana e a próxima. A proposta precisa de 49 votos em cada um dos dois turnos.',
    'Em nota conjunta citada pelo Poder360, a CNI estima que os custos de produção podem subir até R$ 267,2 bilhões, e a CNC prevê impacto na inflação.'
  ] },

{ id: 'wall-street-recordes-petroleo-cai', cat: 'economia', own: false, t: '2026-10-06T18', d: '6 out 2026', img: 'mercado', src: 'TheStreet', url: U.tsWall,
  title: 'Bolsas de Nova York renovam recordes com queda do petróleo',
  sum: 'O S&P 500 subiu 0,58%, a 7.818 pontos. O Brent caiu 1,64%, a US$ 98,67.',
  body: [
    'O G7 anunciou a liberação de 100 milhões de barris de petróleo das reservas ao longo de quatro meses, o que pressionou os preços. O WTI recuou 1,86%, a US$ 87,77.',
    'O Nasdaq avançou 0,45% e o Dow Jones, 0,49%.'
  ] },

{ id: 'producao-industrial-cai-agosto', cat: 'economia', own: false, t: '2026-10-02T11', d: '2 out 2026', img: 'mercado', src: 'Correio Braziliense', url: U.correio,
  title: 'Produção industrial cai 0,6% em agosto, diz IBGE',
  sum: 'Na comparação com agosto de 2025, a queda foi de 1,2%. As quatro grandes categorias recuaram.',
  body: [
    'A indústria brasileira voltou a encolher em agosto. O pior desempenho foi o de bens semi e não duráveis, com queda de 1,7% no mês.',
    'Apesar do resultado, o setor acumula alta de 0,8% no ano e de 0,6% em 12 meses.'
  ] },

{ id: 'embraer-alta-entregas-terceiro-trimestre', cat: 'economia', own: false, t: '2026-10-02T10', d: '2 out 2026', img: 'mercado', src: 'Agência Brasil', url: U.abEco,
  title: 'Embraer tem alta de 6% nas entregas no terceiro trimestre',
  sum: 'A fabricante de aviões aumentou o número de aeronaves entregues entre julho e setembro.',
  body: [
    'A Embraer informou crescimento de 6% nas entregas de aeronaves no terceiro trimestre de 2026.'
  ] },

/* ===================== TECNOLOGIA ===================== */
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

{ id: 'pix-aproximacao-sem-limite-500', cat: 'tecnologia', own: true, t: '2026-10-01T10', d: '1 out 2026', img: 'celular', read: 2,
  title: 'Pix por aproximação deixa de ter limite fixo de R$ 500',
  sum: 'Desde 1º de outubro, os pagamentos sem contato seguem os mesmos limites das outras modalidades do Pix.',
  body: [
    'O Banco Central acabou com o teto de R$ 500 por transação que valia para o Pix por aproximação. A partir de 1º de outubro, esses pagamentos passam a respeitar apenas os limites gerais definidos por cada banco para a conta do cliente.',
    'A mudança faz parte de um esforço para padronizar as formas de iniciar um Pix. Com ela, a aproximação passa a funcionar com a mesma lógica do QR Code e das transferências por chave.',
    '## Open Finance',
    'A regra também vale para a chamada Jornada Sem Redirecionamento do Open Finance, que permite autorizar pagamentos sem abrir o aplicativo do banco.',
    'As instituições continuam podendo bloquear temporariamente operações suspeitas para proteger os clientes.'
  ],
  sources: [['Portal 6', U.portal6]] },

{ id: 'lupa-ia-conteudo-eleitoral', cat: 'tecnologia', own: false, t: '2026-10-06T10', d: '6 out 2026', img: 'celular', src: 'Diário do Grande ABC', url: U.dgabcLupa,
  title: 'Quase um conteúdo eleitoral feito com IA circulou por hora na campanha, diz Lupa',
  sum: 'Dos 972 conteúdos suspeitos analisados, 920 usaram inteligência artificial, e 60% não tinham aviso de IA.',
  body: [
    'O levantamento do Observatório Lupa cobriu o período de 16 de agosto a 28 de setembro e identificou 554 deepfakes.',
    'Quase metade das peças foi publicada por usuários comuns, e cerca de um quarto saiu de perfis oficiais de candidatos.'
  ] },

{ id: 'google-constellation-energia-nuclear-ia', cat: 'tecnologia', own: false, t: '2026-10-06T09', d: '6 out 2026', img: 'tecnologia', src: 'BNN Bloomberg', url: U.bnnGoogle,
  title: 'Google fecha acordo de 3,6 GW de energia com a Constellation para data centers',
  sum: 'Cerca de 890 MW virão de usinas nucleares, em contrato de 20 anos. A Constellation vai investir US$ 4,3 bilhões.',
  body: [
    'O restante da energia, cerca de 2.700 MW, vem de fontes não nucleares, em contrato de 15 anos. As primeiras entregas estão previstas para 2028.',
    'O acordo amplia a potência de 11 reatores em Illinois, na Pensilvânia e em Nova Jersey.'
  ] },

{ id: 'deepseek-rodada-12-bilhoes', cat: 'tecnologia', own: false, t: '2026-10-06T08', d: '6 out 2026', img: 'tecnologia', src: 'Tech Startups', url: U.tsDeepseek,
  title: 'Chinesa DeepSeek prepara captação de ao menos US$ 12 bilhões',
  sum: 'Tencent e CATL estão entre os investidores. A abertura de capital está prevista para o início de 2027.',
  body: [
    'A rodada deve somar no mínimo 80 bilhões de iuanes, acima da meta original de 50 bilhões. A receita anualizada da empresa de IA chegou a US$ 1 bilhão no fim de setembro.'
  ] },

{ id: 'wikimedia-agentes-ia-openai', cat: 'tecnologia', own: false, t: '2026-10-05T16', d: '5 out 2026', img: 'tecnologia', src: 'The Record', url: U.recWiki,
  title: 'Wikimedia diz que agentes de IA da OpenAI fizeram edições não autorizadas',
  sum: 'A atividade gerou milhões de requisições e pode ter contribuído para uma pane no Wikidata em maio.',
  body: [
    'Segundo a fundação que mantém a Wikipédia, as edições foram feitas em sua maioria em áreas de teste. A OpenAI não respondeu aos pedidos de comentário.'
  ] },

{ id: 'ofcom-investiga-instagram-instants', cat: 'tecnologia', own: false, t: '2026-10-06T11', d: '6 out 2026', img: 'celular', src: 'CNN Brasil', url: U.cnnOfcom,
  title: 'Reino Unido abre investigação contra recurso do Instagram',
  sum: 'O Ofcom apura se o "Instants" cumpre a lei de segurança on-line. A multa pode chegar a 10% da receita global da Meta.',
  body: [
    'É a primeira investigação formal do órgão regulador britânico contra a Meta. A empresa diz que fez análise de risco e avisou o Ofcom antes do lançamento.'
  ] },

{ id: 'schneider-compra-ptc', cat: 'tecnologia', own: false, t: '2026-10-06T06', d: '6 out 2026', img: 'tecnologia', src: 'Jornal Económico', url: U.je,
  title: 'Schneider Electric compra a PTC por US$ 22,6 bilhões',
  sum: 'O grupo francês quer unir software industrial e inteligência artificial. As ações recuaram quase 10% com o anúncio.',
  body: [
    'A Schneider Electric anunciou a compra da PTC, empresa de Boston especializada em software industrial e gestão do ciclo de vida de produtos. Segundo a companhia, a união vai ajudar clientes a projetar, fabricar, operar e manter produtos com mais eficiência.',
    'Para financiar o negócio, a Schneider prevê emitir até 17 bilhões de euros em dívida e 6 bilhões em novas ações.'
  ] },

{ id: 'pix-automatico-conta-salario', cat: 'tecnologia', own: false, t: '2026-10-05T08', d: '5 out 2026', img: 'celular', src: 'JD1 Notícias', url: U.jd1,
  title: 'Conta-salário poderá usar o Pix Automático a partir de julho de 2027',
  sum: 'A mudança foi aprovada pelo Banco Central na Resolução BCB nº 587.',
  body: [
    'Quem recebe o salário em conta-salário vai poder autorizar pagamentos recorrentes pelo Pix Automático, como contas de consumo, a partir de 1º de julho de 2027.',
    'A resolução, publicada em 18 de setembro, também regulamentou cobranças híbridas, que combinam boleto e QR Code do Pix.'
  ] }
];
