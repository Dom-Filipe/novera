/* ============================================================
   NOVERA: conteúdo do site. Edite este arquivo e rode `node build.js`.
   Regras completas em ATUALIZACAO.md.
   ============================================================ */

/* Topo do site: data da edição e mercado */
const META = {
  /* Endereço público do site, sem barra no final. Usado nos links das redes sociais. */
  siteUrl: 'https://novera-sepia.vercel.app',
  dataExtenso: 'Sábado, 10 de outubro de 2026',
  edicao: '10 out 2026',
  ibovespa: { valor: '209.067', variacao: '1,38%', sobe: true },
  dolar: { valor: 'R$ 4,98', variacao: '0,78%', sobe: false },
  fechamento: '9/10'
};

/* Home: destaque principal, dois laterais e três da faixa de baixo (IDs de notícias "own: true") */
const FEATURED = {
  lead: 'gasolina-impostos-zerados-subsidio-diesel',
  side: ['nobel-paz-navi-pillay', 'terremoto-panama-magnitude-7-7'],
  also: ['ipca-setembro-0-82-acima-do-teto', 'tse-julga-garotinho-eleicao-rio', 'libertadores-semifinais-tres-brasileiros']
};

/* Home: "Escolhas da redação" (5 IDs) */
const PICKS = ['datafolha-segundo-turno-flavio-49-lula-45', 'bets-saem-do-ar-devolucao-saldos', 'trump-nao-atacara-ira-antes-eleicoes', 'openai-demite-pesquisadores-seguranca', 'corinthians-demite-fernando-diniz'];

const U = {
  jgbMaster: 'https://jornalgrandebahia.com.br/2026/10/caso-banco-master-edson-fachin-marca-reuniao-com-pf-para-outubro-de-2026-e-cobra-apuracao-sem-excecao-de-mencoes-a-ministros-do-stf/',
  p360Moraes: 'https://poder360.com.br/poder-justica/moraes-recebe-andrei-e-outros-chefes-da-pf-no-supremo',
  conjurBarroso: 'https://conjur.com.br/2026-out-06/barroso-diz-que-caso-master-dividiu-e-desgastou-o-stf',
  /* Nacional */
  sen: 'https://www12.senado.leg.br/noticias/materias/2026/10/04/flavio-bolsonaro-e-lula-disputam-o-segundo-turno-das-eleicoes-para-presidente',
  gazetaApoio: 'https://www.gazetadopovo.com.br/eleicoes/2026/uniao-brasil-e-pp-anunciam-apoio-a-flavio-bolsonaro-no-segundo-turno/',
  sen6x1: 'https://www12.senado.leg.br/noticias/materias/2026/10/07/pec-do-fim-da-escala-6x1-passa-por-2a-sessao-de-discussao-no-plenario',
  /* Internacional */
  dn: 'https://www.democracynow.org/2026/10/5/headlines',
  ajFranca: 'https://www.aljazeera.com/news/2026/10/6/demonstrators-clash-with-riot-police-in-france-as-education-protests-mount',
  kiKiev: 'https://kyivindependent.com/russia-slams-kyiv-in-mass-missile-drone-attack-on-putins-74th-birthday/',
  ajEbola: 'https://www.aljazeera.com/news/2026/10/6/kenya-confirms-first-ebola-case-after-patient-from-dr-congo-dies-in-nairobi',
  /* Esportes */
  lanceDiniz: 'https://www.lance.com.br/corinthians/corinthians-demite-fernando-diniz-apos-sete-jogos-sem-vencer-no-brasileirao.html',
  gazInter: 'https://gazetaesportiva.com/campeonatos/brasileiro-serie-a/internacional-corinthians-brasileirao-07-10-2026',
  gazRamon: 'https://gazetaesportiva.com/times/corinthians/corinthians-ramon-diaz-substituto-diniz',
  laNacion: 'https://www.lanacion.com.ar/deportes/futbol/asi-quedo-el-cuadro-de-semifinales-de-la-copa-libertadores-2026-nid17092026/',
  lance: 'https://www.lance.com.br/fluminense/semifinal-da-libertadores-quando-e-contra-quem-joga-o-fluminense.html',
  cnnVasco: 'https://cnnbrasil.com.br/esportes/futebol/botafogo/jogadores-do-botafogo-sao-encaminhados-ao-hospital-apos-classico-com-vasco',
  /* Cultura */
  otEstreias: 'https://otempo.com.br/entretenimento/2026/10/7/o-que-assistir-no-cinema-veja-5-filmes-que-estreiam-nesta-quinta-feira-8-de-outubro',
  adtEstreias: 'https://alemdatela.com/a-semana-tem-troca-de-corpo-mae-falsa-e-monstro-coreano-8-filmes-disputam-o-seu-ingresso/',
  cnnMostra: 'https://www.cnnbrasil.com.br/pop/cinema/mostra-internacional-de-cinema-de-sao-paulo-revela-programacao-de-2026/',
  rsPitty: 'https://rollingstone.com.br/musica/pitty-revela-capa-e-tracklist-de-primeiro-album-autoral-em-sete-anos/',
  abTomZe: 'https://agenciabrasil.ebc.com.br/cultura/noticia/2026-10/exposicao-em-sao-paulo-celebra-os-90-anos-de-tom-ze',
  /* Economia */
  abBets: 'https://agenciabrasil.ebc.com.br/geral/noticia/2026-10/bets-comecam-sair-do-ar-nesta-terca-feira',
  abBets2: 'https://agenciabrasil.ebc.com.br/economia/noticia/2026-10/cerca-de-132-mil-sites-de-bets-ilegais-sao-bloqueados',
  abAnfavea: 'https://agenciabrasil.ebc.com.br/economia/noticia/2026-10/producao-de-veiculos-tem-melhor-setembro-desde-2014-diz-anfavea',
  tbCampos: 'https://timesbrasil.com.br/brasil/pf-adia-depoimento-de-roberto-campos-neto-sobre-caso-banco-master/',
  /* Tecnologia */
  ajQuimica: 'https://www.aljazeera.com/news/2026/10/7/henri-kagan-kenso-soai-win-chemistry-nobel-for-mirror-image-breakthrough',
  odQuimica: 'https://olhardigital.com.br/2026/10/07/ciencia-e-espaco/misterio-de-mais-de-100-anos-na-quimica-rende-nobel-a-cientistas/',
  opovoQuimica: 'https://mais.opovo.com.br/jornal/farol/2026/10/08/nobel-de-quimica-premia-processo-que-facilita-fabricacao-de-farmacos.html',
  genQuimica: 'https://www.genengnews.com/topics/drug-discovery/kagan-soai-win-2026-nobel-prize-in-chemistry-for-discoveries-related-to-asymmetric-organic-synthesis/',
  oaiGpt6: 'https://openai.com/index/gpt-6-for-everyone/',
  tcSynth: 'https://techcrunch.com/2026/10/07/googles-new-synthid-website-can-identify-ai-generated-media/',
  /* Atualização de 9 out 2026 */
  abTseRio: 'https://agenciabrasil.ebc.com.br/justica/noticia/2026-10/tse-anula-votos-de-garotinho-e-ruas-vence-governo-do-rio-no-1o-turno',
  opovoTse: 'https://mais.opovo.com.br/jornal/politica/2026/10/09/por-5-a-2-tse-anula-votos-de-garotinho-no-rj-decisao-beneficia-douglas-ruas.html',
  cnnDatafolha: 'https://www.cnnbrasil.com.br/eleicoes/datafolha-flavio-tem-52-dos-votos-validos-lula-48/',
  metDatafolha: 'https://www.metropoles.com/brasil/datafolha-2o-turno-flavio-tem-52-e-lula-48',
  bdfDatafolha: 'https://www.brasildefato.com.br/2026/10/08/datafolha-segundo-turno-flavio-bolsonaro-49-lula-45/',
  imTrumpIra: 'https://www.infomoney.com.br/mundo/trump-diz-que-eua-nao-atacarao-ira-antes-das-eleicoes-de-meio-de-mandato-em-novembro/',
  cbsIra: 'https://www.cbsnews.com/live-updates/iran-war-nuclear-donald-trump-vance-rubio-strait-of-hormuz/',
  axiosIra: 'https://www.axios.com/2026/10/08/trump-iran-strikes-midterm-elections',
  euroNavios: 'https://www.euronews.com/2026/10/08/iran-strikes-tankers-outside-hormuz-in-signs-of-expanding-campaign',
  ajOrmuz: 'https://www.aljazeera.com/news/liveblog/2026/10/9/iran-war-live-iranian-media-reports-massive-explosions-in-hormuz-strait',
  ajKramatorsk: 'https://www.aljazeera.com/news/2026/10/8/russia-attack-in-ukraines-kramatorsk-kills-12',
  apEritreia: 'https://www.click2houston.com/news/world/2026/10/08/eritrean-forces-seen-entering-towns-in-ethiopias-tigray-region-after-crossing-border/',
  gzSantosFla: 'https://www.gazetaesportiva.com/campeonatos/brasileiro-serie-a/santos-x-flamengo-brasileirao-2026/',
  cnnSantosFla: 'https://www.cnnbrasil.com.br/esportes/brasileirao/com-dois-gols-de-neymar-santos-e-flamengo-empatam-em-jogo-polemico-na-vila/',
  gzPalBahia: 'https://www.gazetaesportiva.com/times/palmeiras/palmeiras-x-bahia-29-rodada-brasileirao-08-10-2026/',
  cnnPalBahia: 'https://www.cnnbrasil.com.br/esportes/brasileirao/palmeiras-domina-o-bahia-vence-e-fica-a-um-ponto-do-lider-flamengo/',
  piraTabela: 'https://piranot.com.br/esporte/tabela-brasileirao-29-rodada-classificacao-atualizada',
  gzFluCoxa: 'https://www.gazetaesportiva.com/campeonatos/brasileiro-serie-a/fluminense-goleia-coritiba-com-tres-de-savarino-e-assume-terceiro-lugar/',
  gzNovori: 'https://gazetaesportiva.com/times/gremio-novorizontino/novorizontino-vence-o-nautico-e-encosta-no-topo-da-serie-b',
  lanceFonseca: 'https://www.lance.com.br/tenis/joao-fonseca-joga-ultimo-torneio-do-ano-ao-lado-de-zverev-alcaraz-e-djokovic.html',
  ajCarson: 'https://www.aljazeera.com/news/2026/10/8/canadian-anne-carson-wins-2026-nobel-prize-in-literature',
  obsCarson: 'https://observador.pt/2026/10/08/escritora-canadiana-anne-carson-vence-o-nobel-da-literatura-de-2026/',
  dnCarson: 'https://diariodonordeste.verdesmares.com.br/verso/anne-carson-vence-o-premio-nobel-de-literatura-2026-conheca-livros-da-escritora-1.3797349',
  bbLolla: 'https://billboard.com.br/lollapalooza-brasil-2027-line-up/',
  abSeletivo: 'https://agenciabrasil.ebc.com.br/economia/noticia/2026-10/durigan-preve-envio-de-mp-do-imposto-seletivo-apos-eleicoes',
  forbesPetro: 'https://forbes.com.br/forbes-money/2026/10/petrobras-faz-compra-de-r-32-bilhoes-mirando-o-futuro/',
  khSamsung: 'https://www.koreaherald.com/article/10896336',
  exSamsung: 'https://exame.com/tecnologia/ia-faz-lucro-da-samsung-disparar-e-expoe-dilema-do-negocio-de-smartphones/',
  cdEinstein: 'https://convergenciadigital.com.br/mercado/einstein-assume-incidente-cibernetico-e-dados-medicos-podem-ter-vazados/',
  spaceCrew12: 'https://www.space.com/news/live/spacex-nasa-crew-12-astronauts-launch-to-iss-oct-7-2026',
  tbStarlink: 'https://tecnoblog.net/noticias/starlink-tera-15-mil-novos-satelites-para-competir-com-operadoras/',
  cdPix: 'https://convergenciadigital.com.br/governo/pix-ultrapassa-1-bilhao-de-chaves-cadastradas/',
  /* Atualização de 10 out 2026 */
  imAtlas: 'https://www.infomoney.com.br/politica/atlasintel-flavio-abre-54-pontos-sobre-lula-no-2o-turno-e-vai-a-51-dos-votos/',
  abLula: 'https://agenciabrasil.ebc.com.br/politica/noticia/2026-10/brasil-nao-sera-governado-por-socios-do-banco-master-diz-lula-em-ato',
  abFlavio: 'https://agenciabrasil.ebc.com.br/politica/noticia/2026-10/flavio-bolsonaro-diz-que-vai-manter-bolsa-familia-e-farmacia-popular',
  p360Debate: 'https://poder360.com.br/poder-eleicoes-2026/record-cancela-debate-entre-lula-e-flavio-marcado-para-domingo',
  sen6x1v: 'https://www12.senado.leg.br/noticias/materias/2026/10/09/fim-da-6-x-1-senado-pode-concluir-1o-turno-da-votacao-em-mais-duas-sessoes',
  abInmet: 'https://agenciabrasil.ebc.com.br/meio-ambiente/noticia/2026-10/inmet-alerta-para-grande-perigo-de-tempestade-no-sul-do-pais',
  abPaes: 'https://agenciabrasil.ebc.com.br/politica/noticia/2026-10/paes-desiste-de-candidatura-no-rio-apos-zanin-negar-recurso-ao-stf',
  exTre: 'https://exame.com/brasil/tre-rj-marca-retotalizacao-de-votos-e-ruas-deve-ser-eleito-governador-do-rio/',
  ajPillay: 'https://www.aljazeera.com/news/2026/10/9/2026-nobel-peace-prize-awarded-to-navi-pillay',
  ajPillayQuem: 'https://www.aljazeera.com/news/2026/10/9/who-is-navi-pillay-winner-of-the-2026-nobel-peace-prize',
  abPillay: 'https://agenciabrasil.ebc.com.br/internacional/noticia/2026-10/nobel-da-paz-e-concedido-jurista-sul-africana-navi-pillay',
  bsPanama: 'https://www.business-standard.com/amp/world-news/panama-hit-by-strongest-quake-in-75-years-7-7-magnitude-tremor-strikes-126101000149_1.html',
  eePanama: 'https://www.elespectador.com/mundo/america/temblor-de-8-en-panama-este-viernes-se-sintio-en-colombia-y-costa-rica/',
  etPanama: 'https://www.eltiempo.com/mundo/latinoamerica/dan-primer-balance-de-heridos-y-edificios-colapsados-tras-terremoto-de-7-7-en-panama-y-fuertes-replicas-descartan-por-ahora-pedir-ayuda-internacional-3592633',
  aaMiami: 'https://english.alarabiya.net/News/world/2026/10/09/ukrainian-delegation-in-miami-for-talks-with-us-team-source-says',
  awIsaias: 'https://www.accuweather.com/en/hurricane/live-news/live-hurricane-isaias-makes-landfall-power-outages-surge-along-gulf-coast/1943589',
  metRodada: 'https://www.metropoles.com/esportes/30a-rodada-abre-reta-final-do-brasileirao-veja-jogos-deste-sabado-10-10',
  piraRebeca: 'https://www.piranot.com.br/2026/10/07/noticias/esporte/rebeca-andrade-mundial-ginastica-roterda/',
  gpSprint: 'https://grandepremio.com/br/f1/antonelli-larga-em-7o-na-sprint-de-singapura-e-ve-russell-ameacar-vantagem-na-f1/',
  placarCorinthians: 'https://placar.com.br/brasileirao/corinthians-define-tecnico-para-o-classico-contra-o-palmeiras/',
  abLiberta: 'https://agenciabrasil.ebc.com.br/esportes/noticia/2026-09/conmebol-anuncia-datas-e-horarios-das-semifinais-da-copa-libertadores',
  abMarilia: 'https://agenciabrasil.ebc.com.br/cultura/noticia/2026-10/cantora-marilia-mendonca-ganha-exposicao-sensorial-no-mis',
  abTeatro: 'https://agenciabrasil.ebc.com.br/radioagencia-nacional/cultura/audio/2026-10/festival-internacional-de-teatro-infantil-comeca-hoje-no-ceara',
  abMargem: 'https://agenciabrasil.ebc.com.br/cultura/noticia/2026-10/exposicao-em-sp-propoe-novo-olhar-sobre-historia-do-brasil',
  abMiro: 'https://agenciabrasil.ebc.com.br/cultura/noticia/2026-10/mab-prorroga-exposicao-de-miro-em-sao-paulo',
  abCombustiveis: 'https://agenciabrasil.ebc.com.br/economia/noticia/2026-10/tributos-da-gasolina-sao-zerados-e-subsidios-combustiveis-ampliados',
  tbCombustiveis: 'https://timesbrasil.com.br/empresas-e-negocios/combustiveis/ministro-dario-durigan-anuncia-isencao-de-tributos-federais-da-gasolina-e-ampliacao-de-subsidios-ao-etanol-e-diesel-por-30-dias/',
  dgabcCombustiveis: 'https://www.dgabc.com.br/Noticia/4351902/veja-as-medidas-anunciadas-pelo-governo-para-frear-preco-dos-combustiveis',
  abIpca: 'https://agenciabrasil.ebc.com.br/economia/noticia/2026-10/inflacao-oficial-de-setembro-fica-em-082-mostra-ibge',
  cnnIpca: 'https://www.cnnbrasil.com.br/economia/money/macroeconomia/inflacao-ipca-9-outubro-2026/',
  istoeBets: 'https://istoe.com.br/bancos-devolucao-dinheiro-bets-apostadores-2026',
  abDolar: 'https://agenciabrasil.ebc.com.br/economia/noticia/2026-10/dolar-cai-r-498-e-acumula-perda-de-444-na-semana',
  abCbs: 'https://agenciabrasil.ebc.com.br/economia/noticia/2026-10/reforma-tributaria-86-das-notas-fiscais-destacam-cbs',
  abCni: 'https://agenciabrasil.ebc.com.br/economia/noticia/2026-10/industria-aponta-juros-altos-como-principal-barreira-ao-credito',
  cbsOpenai: 'https://www.cbsnews.com/news/openai-defends-firing-safety-researchers/',
  apnorcIa: 'https://apnorc.org/projects/most-adults-think-ai-is-developing-too-fast',
  tbIphone: 'https://tecnoblog.net/noticias/apple-corta-pedidos-do-iphone-18-pro-devido-a-baixa-demanda',
};

const NEWS = [
/* ===================== NACIONAL ===================== */
{ id: 'caso-master-stf-fachin-pf-13-outubro', cat: 'nacional', own: true, t: '2026-10-08T06', d: '8 out 2026', img: 'congresso', read: 4,
  title: 'Caso Master: Fachin recebe a PF no dia 13 para saber quais ministros do STF são citados',
  sum: 'O presidente do Supremo cobrou apuração "sem exceção". Moraes, Mendonça, Nunes Marques, Toffoli e Fux aparecem no material do celular de Daniel Vorcaro, e os cinco contestam as suspeitas ou explicam os contatos.',
  body: [
    'O presidente do Supremo Tribunal Federal, Edson Fachin, vai receber o diretor-geral da Polícia Federal, Andrei Rodrigues, em 13 de outubro. Segundo o Jornal Grande Bahia, a PF deve apresentar a relação de ministros citados no material extraído do celular de Daniel Vorcaro, dono do Banco Master.',
    'Em ofício enviado em 2 de outubro, Fachin afirmou que a apuração deve alcançar fatos e pessoas "sem exceção", respeitando o devido processo legal e a autonomia da investigação. Ser citado no material não significa ter cometido crime, e o pedido não abre investigação automática contra ninguém.',
    '## Quem aparece e o que diz',
    'A PF associou a Alexandre de Moraes um contato com Vorcaro e referências ao escritório de sua mulher, Viviane Barci de Moraes. O ministro nega que os diálogos atribuídos a ele existam. André Mendonça confirmou ter recebido Vorcaro uma vez, em março de 2025, para tratar de um processo sobre precatórios, e diz ter decidido contra o interesse do empresário.',
    'Kassio Nunes Marques nega ter autorizado terceiros a agir em seu nome. Dias Toffoli, citado por transações ligadas a um fundo e a um empreendimento antes relacionado à sua família, nega amizade com Vorcaro. Luiz Fux, mencionado em mensagens de terceiros sobre uma viagem a Nova York em 2024, diz nunca ter trocado mensagens com o banqueiro.',
    '## Um julgamento parado',
    'Em 15 de setembro, o plenário do STF não chegou a julgar o mérito do pedido relacionado a Moraes. A votação sobre reunir dois processos terminou em 4 a 3 pela tramitação separada, e Flávio Dino pediu vista. Nunes Marques se declarou impedido e Toffoli, suspeito. Em 28 de setembro, Gilmar Mendes defendeu que o julgamento fique suspenso até que todos os magistrados citados sejam identificados.',
    'Na terça-feira (6), Moraes recebeu Andrei Rodrigues e o diretor de Inteligência da PF no Supremo, em encontro que não constava da agenda oficial. O assunto não foi divulgado. Na segunda (5), o ministro aposentado Luís Roberto Barroso disse que o caso "trouxe divisão" e desgaste ao tribunal.'
  ],
  box: { type: 'facts', title: 'Linha do tempo no STF', rows: [['15 set', 'Plenário não julga o mérito; Dino pede vista'], ['28 set', 'Gilmar defende suspender o julgamento'], ['2 out', 'Fachin cobra apuração "sem exceção"'], ['6 out', 'Moraes recebe chefes da PF fora da agenda'], ['13 out', 'Fachin recebe o diretor-geral da PF']] },
  sources: [['Jornal Grande Bahia', U.jgbMaster], ['Poder360', U.p360Moraes], ['ConJur', U.conjurBarroso]] },

{ id: 'datafolha-segundo-turno-flavio-49-lula-45', cat: 'nacional', own: true, t: '2026-10-08T20', d: '8 out 2026', img: 'eleicao', read: 3,
  title: 'Datafolha: Flávio tem 49% e Lula, 45%, na primeira pesquisa do segundo turno',
  sum: 'Nos votos válidos, o placar é de 52% a 48%. A margem de erro é de 2 pontos. Lula tem rejeição de 46%, e Flávio, de 43%.',
  body: [
    'A primeira pesquisa Datafolha do segundo turno, divulgada na quinta-feira (8), mostra Flávio Bolsonaro (PL) com 49% das intenções de voto e Lula (PT) com 45%. Brancos e nulos somam 5%, e 1% está indeciso. Como a margem de erro é de 2 pontos, para mais ou para menos, a diferença entre os dois fica no limite dela.',
    'Considerando só os votos válidos, sem brancos, nulos e indecisos, Flávio tem 52% e Lula, 48%. A votação é em 25 de outubro.',
    '## Rejeição e decisão do voto',
    'Dizem que não votariam de jeito nenhum em Lula 46% dos eleitores, e 43% dizem o mesmo de Flávio. A maioria já decidiu: 94% afirmam que o voto é definitivo. Entre os eleitores de Flávio, 25% dizem votar nele principalmente para derrotar Lula. O governo é avaliado de forma negativa por 40% e de forma positiva por 35%.',
    'Quem votou em Augusto Cury, Renan Santos, Ronaldo Caiado ou Romeu Zema no primeiro turno se divide assim: 46% vão de Flávio, 32% de Lula, e 15% pretendem votar em branco ou anular.',
    '## Onde cada um lidera',
    'Lula vence no Nordeste (61% a 35%), entre católicos (53% a 41%), entre quem estudou até o ensino fundamental (55% a 41%) e entre quem ganha até dois salários mínimos (52% a 41%). Flávio lidera entre evangélicos (69% a 25%) e no Sul (58% a 35%).',
    '## Como foi feita',
    'O Datafolha ouviu 2.520 eleitores de 16 anos ou mais em 6 e 7 de outubro. A pesquisa foi contratada pela Folha de S.Paulo e pela TV Globo e está registrada no TSE com o número BR-02949/2026. O nível de confiança é de 95%.'
  ],
  box: { type: 'bars', title: 'Datafolha: 2º turno', unit: '% das intenções de voto', max: 55, rows: [['Flávio Bolsonaro (PL)', 49], ['Lula (PT)', 45], ['Branco ou nulo', 5], ['Indecisos', 1]], note: 'Votos válidos: Flávio 52%, Lula 48%. Margem de erro de 2 pontos. Registro BR-02949/2026.' },
  sources: [['CNN Brasil', U.cnnDatafolha], ['Metrópoles', U.metDatafolha], ['Brasil de Fato', U.bdfDatafolha]] },

{ id: 'tse-julga-garotinho-eleicao-rio', cat: 'nacional', own: true, t: '2026-10-09T10', d: '9 out 2026', img: 'congresso', read: 3,
  photo: 'fotos/tse-julga-garotinho-eleicao-rio.webp', photoAlt: 'Fachada do prédio do Tribunal Superior Eleitoral, em Brasília, com a placa do tribunal em primeiro plano', credit: 'Foto: reprodução',
  title: 'Paes desiste após decisão do STF, e Douglas Ruas deve ser declarado governador do Rio',
  sum: 'O ministro Cristiano Zanin negou o pedido de Eduardo Paes (PSD) contra a anulação dos votos de Garotinho. O TRE-RJ refaz a totalização às 15h deste sábado (10).',
  body: [
    'O ex-prefeito Eduardo Paes (PSD) desistiu da candidatura ao governo do Rio de Janeiro na sexta-feira (9), depois que o ministro Cristiano Zanin, do Supremo Tribunal Federal, negou o pedido para suspender a decisão do TSE que anulou os votos de Anthony Garotinho (Republicanos). Com isso, Douglas Ruas (PL) deve vencer a eleição sem segundo turno.',
    'Em nota, Paes disse que a Justiça decidiu que não haverá segundo turno e que decisões judiciais devem ser respeitadas, mas que a maioria dos eleitores queria a disputa. Ele agradeceu os mais de 3,7 milhões de votos e disse que seu grupo vai fiscalizar o governo.',
    '## O que acontece agora',
    'O Tribunal Regional Eleitoral do Rio marcou a nova totalização para as 15h deste sábado (10). Segundo o tribunal, não é uma nova contagem: os registros das urnas são os mesmos, mas os 274.411 votos de Garotinho saem do cálculo. Depois disso, o TRE-RJ precisa declarar o novo resultado oficial.',
    '## Os números',
    'Pelo resultado divulgado em 4 de outubro, Ruas teve 4.271.199 votos, ou 49,27% dos válidos, e Paes teve 3.706.984, ou 42,76%. Sem os votos de Garotinho, Ruas passa dos 50% por cerca de 74 mil votos, segundo a Agência Brasil.',
    '## A decisão do TSE',
    'Na quinta-feira (8), o TSE decidiu por 5 votos a 2 que Garotinho estava com os direitos políticos suspensos pela Lei da Ficha Limpa quando se filiou ao Republicanos, por causa de uma condenação de 2018 por improbidade administrativa. Votaram assim o relator, Floriano de Azevedo Marques, André Mendonça, Dias Toffoli, Estela Aranha e o presidente do TSE, Nunes Marques.',
    'Ficaram vencidos Ricardo Villas Bôas Cueva e Sebastião Reis Júnior, que também negaram a candidatura, mas queriam manter os votos na conta, o que levaria a eleição ao segundo turno.'
  ],
  box: { type: 'facts', title: 'Governo do RJ: a decisão', rows: [['Placar no TSE', '5 votos a 2'], ['STF', 'Zanin nega pedido de Paes'], ['Douglas Ruas (PL)', '4.271.199 votos'], ['Eduardo Paes (PSD)', '3.706.984 votos'], ['Votos anulados de Garotinho', '274.411'], ['Nova totalização', 'Sábado (10), às 15h']] },
  sources: [['Agência Brasil', U.abPaes], ['Exame', U.exTre], ['Agência Brasil', U.abTseRio], ['O POVO+', U.opovoTse]] },

{ id: 'campanhas-segundo-turno-primeiros-apoios', cat: 'nacional', own: false, t: '2026-10-07T06', d: '7 out 2026', img: 'eleicao', src: 'Gazeta do Povo', url: U.gazetaApoio,
  photo: 'fotos/campanhas-segundo-turno-primeiros-apoios.webp', photoAlt: 'Arte com o texto Eleições 2026, com o zero do ano em amarelo formando o mapa do Brasil', credit: 'Arte: reprodução',
  title: 'União Brasil, PP e Caiado apoiam Flávio; Lula defende o fim da escala 6x1',
  sum: 'A federação, neutra no primeiro turno, decidiu por unanimidade. Lula cobrou do rival uma posição sobre a PEC da jornada de trabalho.',
  body: [
    'A federação formada por União Brasil e PP anunciou apoio a Flávio Bolsonaro na terça-feira (6), em Brasília. Em Goiânia, o ex-governador Ronaldo Caiado (PSD), quinto colocado no primeiro turno, oficializou a adesão em evento com Tarcísio de Freitas.',
    'No mesmo dia, Lula defendeu a PEC que reduz a jornada máxima de 44 para 40 horas semanais e questionou se Flávio vai orientar o PL a votar contra a proposta no Senado.'
  ] },

{ id: 'atlasintel-flavio-51-lula-45-segundo-turno', cat: 'nacional', own: false, t: '2026-10-09T15', d: '9 out 2026', img: 'eleicao', src: 'InfoMoney', url: U.imAtlas,
  title: 'AtlasIntel: Flávio tem 51,1% e Lula, 45,7%, no segundo turno',
  sum: 'Nos votos válidos, o placar é de 52,8% a 47,2%. A pesquisa, feita para a Bloomberg, tem margem de erro de 1 ponto.',
  body: [
    'O levantamento ouviu 5.026 pessoas entre 3 e 8 de outubro e está registrado no TSE com o número BR-03663/2026. Brancos, nulos e indecisos somam 3,2%. Na pesquisa anterior, encerrada em 2 de outubro, Lula tinha 47,6% e Flávio, 47,4%.',
    'Segundo o InfoMoney, 53,4% desaprovam o desempenho de Lula, e 44,7% aprovam. No tema da pobreza e da desigualdade, os dois candidatos empatam em confiança, com 48% cada.'
  ] },

{ id: 'lula-ceilandia-6x1-caso-master', cat: 'nacional', own: false, t: '2026-10-09T13', d: '9 out 2026', img: 'eleicao', src: 'Agência Brasil', url: U.abLula,
  title: 'Lula faz ato em Ceilândia, defende o fim da escala 6x1 e cita o caso Master',
  sum: 'No Distrito Federal, o presidente disse que o país não será governado por "sócios do Banco Master". Neste sábado (10), ele faz ato em Natal.',
  body: [
    'O ato foi na Feira da Ceilândia, na sexta-feira (9), com a primeira-dama Janja e Leandro Grass (PT), candidato ao governo do DF. Lula voltou a defender a PEC que reduz a jornada de trabalho, em discussão no Senado.',
    'Segundo a Agência Brasil, ele também falou em soberania e disse que as riquezas do país pertencem aos brasileiros. O horário eleitoral gratuito no rádio e na TV recomeçou no mesmo dia.'
  ] },

{ id: 'flavio-mantem-bolsa-familia-farmacia-popular', cat: 'nacional', own: false, t: '2026-10-09T16', d: '9 out 2026', img: 'eleicao', src: 'Agência Brasil', url: U.abFlavio,
  title: 'Flávio diz que vai manter o Bolsa Família e melhorar o Farmácia Popular',
  sum: 'Em evento no Rio com Douglas Ruas, o candidato chamou de falsa a informação de que acabaria com o programa e criticou os subsídios ao diesel.',
  body: [
    'O evento foi na Barra da Tijuca, na sexta-feira (9). Flávio disse que o Bolsa Família terá foco em quem mais precisa, com cursos de qualificação, e prometeu entrega de remédios em casa pelo Farmácia Popular. Ele também negou que pretenda privatizar a Petrobras.',
    'Segundo a Agência Brasil, o candidato prometeu menos impostos e crédito barato e disse que, com Ruas, vai combater o crime organizado. Ele agradeceu o apoio de Augusto Cury (Avante) e afirmou que conversa com outros partidos.'
  ] },

{ id: 'record-cancela-debate-lula-flavio', cat: 'nacional', own: false, t: '2026-10-09T18', d: '9 out 2026', img: 'eleicao', src: 'Poder360', url: U.p360Debate,
  title: 'Record cancela debate de domingo entre Lula e Flávio; três encontros seguem marcados',
  sum: 'A emissora citou incompatibilidade de agendas. Estão previstos debates no SBT (15), na Band, com o Estadão (18), e na Globo (23).',
  body: [
    'O debate estava marcado para domingo (11). Em nota, a Record atribuiu o cancelamento às agendas dos candidatos. Segundo o Poder360, os dois dizem que pretendem participar dos debates do segundo turno, e a campanha de Lula afirma que ele irá a todos.',
    'No dia 15, data do debate do SBT, Lula também tem entrevista marcada na TV Globo. A entrevista de Flávio na emissora é no dia 16.'
  ] },

{ id: 'pec-6x1-votacao-primeiro-turno-14-outubro', cat: 'nacional', own: false, t: '2026-10-09T17', d: '9 out 2026', img: 'congresso', src: 'Agência Senado', url: U.sen6x1v,
  title: 'Senado marca para quarta (14) a votação da PEC do fim da escala 6x1 em primeiro turno',
  sum: 'Faltam duas sessões de discussão, na terça (13) e na quarta. A proposta precisa de pelo menos 49 votos em cada um dos dois turnos.',
  body: [
    'A data foi anunciada pelo presidente do Senado, Davi Alcolumbre, na sexta-feira (9). A PEC reduz a jornada máxima de 44 para 40 horas semanais, sem corte de salário. O relator, Omar Aziz (PSD-AM), rejeitou as 36 emendas apresentadas.',
    'Depois do primeiro turno, o regimento exige mais três sessões antes da votação final. A líder do governo, Teresa Leitão (PT-PE), recolhe assinaturas para um calendário especial, que permitiria concluir a votação na penúltima semana de outubro.'
  ] },

{ id: 'inmet-alerta-vermelho-tempestades-sul', cat: 'nacional', own: false, t: '2026-10-09T08', d: '9 out 2026', img: 'mundo', src: 'Agência Brasil', url: U.abInmet,
  title: 'Inmet emite alerta vermelho para tempestades em partes do Sul no fim de semana',
  sum: 'O aviso de maior gravidade vale para o oeste do Paraná e de Santa Catarina e o norte do Rio Grande do Sul. Outras regiões têm alertas amarelos de chuva e de tempo seco.',
  body: [
    'Segundo a Agência Brasil, o alerta vermelho cobre o oeste e o sudoeste do Paraná, o centro e o oeste de Santa Catarina e o noroeste e o norte do Rio Grande do Sul. No restante do Sul, os avisos são laranja ou amarelo.',
    'Há alerta amarelo para tempestades em São Paulo, no sul de Minas Gerais e no sul do Rio de Janeiro, e para baixa umidade em partes do Centro-Oeste e do Nordeste. Uma frente fria derruba as temperaturas no Rio Grande do Sul.'
  ] },

/* ===================== INTERNACIONAL ===================== */
{ id: 'trump-nao-atacara-ira-antes-eleicoes', cat: 'internacional', own: true, t: '2026-10-08T18', d: '8 out 2026', img: 'mundo', read: 3,
  title: 'Trump diz que não vai atacar o Irã antes das eleições de 3 de novembro',
  sum: 'O presidente americano falou em "discussões produtivas" com Teerã, mas manteve o bloqueio aos portos iranianos. O Irã ampliou os ataques a navios fora do Estreito de Ormuz.',
  body: [
    'O presidente dos Estados Unidos, Donald Trump, afirmou na quinta-feira (8) que o país não vai atacar o Irã antes das eleições de meio de mandato, marcadas para 3 de novembro. Em publicação na rede Truth Social, ele disse que mantém "discussões produtivas" com o governo iraniano. Segundo a agência Reuters, o bloqueio americano aos portos do Irã continua.',
    'A declaração veio depois de reportagens sobre a retomada dos combates. Segundo o site Axios, o Pentágono tinha mandado o Comando Central concluir os preparativos para grandes operações. A CBS News informou que o Brent, referência do petróleo, estava perto de US$ 105 antes da publicação de Trump e caiu para cerca de US$ 103 depois dela.',
    '## Negociações travadas',
    'Trump rejeitou a proposta mais recente de Teerã para encerrar a guerra e reabrir Ormuz, segundo a Reuters. O chanceler iraniano, Araghchi, disse que o país analisa a resposta americana e vai se manifestar em poucos dias. O presidente do Irã, Pezeshkian, chamou as conversas de inúteis.',
    '## Ataques a navios',
    'Ao mesmo tempo, o Irã ampliou os ataques a navios. Segundo a Euronews, o petroleiro Acers, de bandeira de Antígua e Barbuda, foi atingido na quarta-feira (7) por vários projéteis a 51 milhas náuticas ao norte do Catar. Na quinta, um navio pegou fogo a cerca de 40 km de Fujairah, nos Emirados Árabes Unidos. Na madrugada desta sexta (9), a agência iraniana Fars relatou fortes explosões no sul do estreito, sem informar a causa.',
    'A guerra começou em 28 de fevereiro, com ataques dos EUA e de Israel ao Irã. Segundo a agência AP, citada pela CBS, 19 militares americanos morreram desde então. O Estreito de Ormuz está praticamente fechado desde o início do conflito.'
  ],
  box: { type: 'facts', title: 'A guerra em números', rows: [['Início', '28 de fevereiro'], ['Militares dos EUA mortos', '19, segundo a AP'], ['Custo para os EUA', 'Cerca de US$ 3 bilhões por mês'], ['Eleições nos EUA', '3 de novembro']] },
  sources: [['InfoMoney / Reuters', U.imTrumpIra], ['CBS News', U.cbsIra], ['Axios', U.axiosIra], ['Euronews', U.euroNavios], ['Al Jazeera', U.ajOrmuz]] },

{ id: 'kramatorsk-bomba-onibus-mortos', cat: 'internacional', own: false, t: '2026-10-08T14', d: '8 out 2026', img: 'mundo', src: 'Al Jazeera', url: U.ajKramatorsk,
  title: 'Bomba russa atinge dois ônibus em Kramatorsk e mata pelo menos 30 pessoas',
  sum: 'O ataque foi na manhã de quinta-feira (8), no leste da Ucrânia. Também deixou 18 feridos, segundo autoridades regionais.',
  body: [
    'Segundo o presidente Volodymyr Zelensky, a bomba planadora caiu numa parada de ônibus. Ele disse que o ataque não ficará sem resposta. Moscou não comentou de imediato.',
    'Em Pryluky, no norte do país, o número de mortos no ataque com mísseis da quarta-feira (7) chegou a 22, cinco deles crianças. Enviados dos EUA devem se reunir com negociadores ucranianos em Miami nesta sexta (9).'
  ] },

{ id: 'etiopia-eritreia-tropas-tigre', cat: 'internacional', own: false, t: '2026-10-08T10', d: '8 out 2026', img: 'mundo', src: 'AP', url: U.apEritreia,
  title: 'Tropas da Eritreia entram no Tigré, e cresce o risco de guerra com a Etiópia',
  sum: 'Soldados eritreus chegaram a duas cidades do norte da região etíope, segundo um comandante local. Um monitor de conflitos relata ataques de drones da Etiópia.',
  body: [
    'As tropas entraram em Adigrat na terça-feira (6) e em Idaga Hamus na quarta (7), segundo um comandante ouvido pela AP. A agência não conseguiu confirmar a informação de forma independente. O monitor de conflitos ACLED relatou ataques de drones atribuídos ao Exército etíope.',
    'A escalada vem depois que forças aliadas ao governo etíope entraram em Mekelle, capital do Tigré. Os dois países romperam relações depois que a Etiópia expulsou 10 diplomatas eritreus. O ministro da Informação da Eritreia disse que o país não vai rebater o que chamou de alegações sem fundamento.'
  ] },

{ id: 'russia-ataque-kiev-mortos', cat: 'internacional', own: false, t: '2026-10-07T20', d: '7 out 2026', img: 'mundo', src: 'Kyiv Independent', url: U.kiKiev,
  photo: 'fotos/russia-ataque-kiev-mortos.webp', photoAlt: 'Explosão ilumina o céu noturno de uma cidade, com uma grande nuvem de fogo e fumaça', credit: 'Foto: reprodução',
  title: 'Ataque russo no aniversário de Putin mata ao menos 28 pessoas na Ucrânia',
  sum: 'Um míssil atingiu um prédio residencial em Pryluky, onde morreram ao menos 20 pessoas, entre elas cinco crianças. A Rússia lançou 48 mísseis de cruzeiro e 130 drones.',
  body: [
    'O ataque foi na madrugada de quarta-feira (7), quando Vladimir Putin completou 74 anos. Segundo o Kyiv Independent, 118 pessoas ficaram feridas em várias regiões. Em Kiev, foram 4 mortos, e parte da cidade ficou sem luz e sem água.',
    'Segundo a Força Aérea ucraniana, 39 dos 48 mísseis de cruzeiro e 117 dos 130 drones foram derrubados. Zelensky disse que ainda podia haver pessoas sob os escombros em Pryluky.'
  ] },

{ id: 'franca-suspende-aulas-protestos-estudantes', cat: 'internacional', own: false, t: '2026-10-06T13', d: '6 out 2026', img: 'protesto', src: 'Al Jazeera', url: U.ajFranca,
  photo: 'fotos/franca-suspende-aulas-protestos-estudantes.webp', photoAlt: 'Estudantes com cartazes protestam em frente à fachada de uma escola em Paris', credit: 'Foto: reprodução',
  title: 'França suspende aulas do ensino médio após protestos de estudantes',
  sum: 'As autoridades contaram cerca de 250 mil manifestantes. Quase 2 mil escolas foram bloqueadas ou fechadas.',
  body: [
    'O primeiro-ministro Sébastien Lecornu suspendeu as aulas do ensino médio até o fim da semana, depois de mais um dia de protestos contra as condições das escolas públicas. Os organizadores falam em 500 mil pessoas nas ruas.',
    'Pelo menos 215 adolescentes e 715 policiais ficaram feridos. Desde o início do movimento, 6.100 pessoas foram presas, a maioria menores de idade.'
  ] },

{ id: 'furacao-isaias-golfo-eua', cat: 'internacional', own: false, t: '2026-10-10T02', d: '10 out 2026', img: 'mundo', src: 'AccuWeather', url: U.awIsaias,
  title: 'Furacão Isaias chega à costa da Flórida e deixa mais de 500 mil clientes sem luz',
  sum: 'A tempestade tocou terra como categoria 2, com ventos de 177 km/h, perto de Destin, na noite de sexta (9). Agora avança pelo interior do sudeste dos EUA.',
  body: [
    'O Isaias chegou à costa por volta das 20h30 de sexta, hora local (22h30 em Brasília), segundo a AccuWeather. Mais cedo, chegou a ser de categoria 3. Rajadas de 164 km/h foram registradas em Pensacola.',
    'Cerca de 370 mil clientes ficaram sem energia na Flórida e 210 mil no Alabama. A previsão era de maré de tempestade de 1,8 a 3 metros em partes da costa. Nos próximos dias, a tempestade deve cruzar os Apalaches e sair pelo litoral do Atlântico.'
  ] },

{ id: 'quenia-primeiro-caso-ebola', cat: 'internacional', own: false, t: '2026-10-06T15', d: '6 out 2026', img: 'mundo', src: 'Al Jazeera', url: U.ajEbola,
  photo: 'fotos/quenia-primeiro-caso-ebola.webp', photoAlt: 'Profissionais de saúde com roupas de proteção amarelas atendem um paciente em centro de tratamento de ebola', credit: 'Imagem ilustrativa: reprodução',
  title: 'Quênia confirma primeiro caso de ebola; paciente morre em Nairóbi',
  sum: 'O homem vivia na República Democrática do Congo, onde um surto já matou mais de 4 mil pessoas.',
  body: [
    'O paciente viajou por terra até Uganda e de lá seguiu de avião para Nairóbi, onde morreu. Segundo o presidente William Ruto, ao menos 8 familiares e 21 profissionais de saúde estão em quarentena, e passageiros e tripulantes do voo estão sendo rastreados.',
    'O surto no Congo já soma mais de 8.300 casos confirmados em sete províncias.'
  ] },

{ id: 'nobel-paz-navi-pillay', cat: 'internacional', own: true, t: '2026-10-09T07', d: '9 out 2026', img: 'mundo', read: 3,
  title: 'Nobel da Paz vai para a jurista sul-africana Navi Pillay',
  sum: 'Ex-alta-comissária da ONU para os Direitos Humanos, Pillay, de 85 anos, foi premiada pela defesa do direito internacional. Israel criticou a escolha, e Trump disse que o comitê rebaixou o prêmio.',
  body: [
    'O Comitê Nobel norueguês anunciou na sexta-feira (9), em Oslo, que o Nobel da Paz de 2026 vai para Navanethem "Navi" Pillay, de 85 anos. A jurista sul-africana foi reconhecida pelo trabalho para que crimes de guerra, crimes contra a humanidade e genocídio sejam levados a julgamento.',
    'Para o presidente do comitê, Jørgen Watne Frydnes, o sistema de direito internacional está sob forte pressão, num momento com mais guerras do que em muito tempo. Segundo a Agência Brasil, o comitê afirmou que punir criminosos de guerra e fazer justiça às vítimas é condição essencial para um mundo em paz.',
    '## Quem é',
    'Pillay cresceu sob o apartheid. Em 1967, foi a primeira mulher a abrir um escritório de advocacia na então província de Natal, e defendeu Nelson Mandela e outros ativistas. Depois, foi a primeira mulher não branca a integrar o Tribunal Superior da África do Sul.',
    'No Tribunal Penal Internacional para Ruanda, ajudou a firmar o entendimento de que o estupro e a violência sexual podem ser crimes contra a humanidade e genocídio. Foi alta-comissária da ONU para os Direitos Humanos de 2008 a 2014. Mais recentemente, presidiu a comissão da ONU que investigou Israel e os territórios palestinos; segundo a Al Jazeera, o relatório do grupo concluiu que Israel cometeu genocídio em Gaza.',
    '## Reações',
    'Pillay dedicou o prêmio aos sobreviventes de crimes internacionais. O secretário-geral da ONU, António Guterres, e o presidente da África do Sul, Cyril Ramaphosa, elogiaram a escolha. O Ministério das Relações Exteriores de Israel acusou o comitê de usar o prêmio para legitimar o ódio contra o país.',
    'O presidente dos EUA, Donald Trump, escreveu que o comitê rebaixou o Nobel, e a Casa Branca anunciou novas sanções ao Tribunal Penal Internacional, segundo a Al Jazeera. O prêmio é de 12 milhões de coroas suecas, e a entrega será em 10 de dezembro, em Oslo.'
  ],
  box: { type: 'facts', title: 'Navi Pillay', rows: [['Nacionalidade', 'Sul-africana'], ['Idade', '85 anos'], ['Na ONU', 'Alta-comissária para os Direitos Humanos (2008 a 2014)'], ['Candidatos ao prêmio', '287'], ['Entrega', '10 de dezembro, em Oslo']] },
  sources: [['Al Jazeera', U.ajPillay], ['Agência Brasil', U.abPillay], ['Al Jazeera', U.ajPillayQuem]] },

{ id: 'terremoto-panama-magnitude-7-7', cat: 'internacional', own: true, t: '2026-10-09T20', d: '9 out 2026', img: 'mundo', read: 3,
  title: 'Terremoto de magnitude 7,7 atinge o Panamá; presidente fala em "desastre grande"',
  sum: 'Foi o tremor mais forte no país em mais de sete décadas. Prédios e estradas desabaram e houve feridos; até a noite de sexta, não havia registro de mortes.',
  body: [
    'Um terremoto de magnitude 7,7 atingiu o Panamá às 12h56 de sexta-feira (9), hora local (14h56 em Brasília), segundo o Serviço Geológico dos EUA (USGS). O epicentro ficou na província de Herrera, no sul do país, a cerca de 12 km de profundidade. O instituto de geociências do Panamá calculou magnitude 7,2.',
    'Segundo o Business Standard, foi o tremor mais forte na região desde pelo menos 1951. Um abalo secundário de magnitude 6,6 ocorreu no fim da tarde, e dezenas de réplicas foram registradas ao longo do dia.',
    '## Estragos',
    'O presidente José Raúl Mulino disse que o desastre é grande e que algumas estradas desabaram totalmente. Em Penonomé, parte de um hotel caiu sobre a Rodovia Pan-Americana e uma das torres da catedral desabou, segundo o jornal colombiano El Espectador. Também houve prédios destruídos em Pedasí e casas derrubadas em Tonosí.',
    'A defesa civil informou feridos, a maioria com ferimentos leves, e disse que, até a noite de sexta, não havia mortes registradas. O aeroporto de Tocumen ficou fechado por mais de duas horas, e o metrô da capital suspendeu duas linhas. Uma estimativa inicial do USGS aponta prejuízos acima de US$ 1 bilhão.',
    '## Canal e alerta de tsunami',
    'O Canal do Panamá, a mais de 190 km do epicentro, continuou funcionando, com equipes inspecionando as estruturas. Os EUA chegaram a emitir alerta de tsunami para a costa do Pacífico de outros países da região, suspenso cerca de três horas depois. O tremor foi sentido na Colômbia e na Costa Rica.'
  ],
  box: { type: 'facts', title: 'O terremoto', rows: [['Magnitude', '7,7, segundo o USGS'], ['Profundidade', 'Cerca de 12 km'], ['Maior réplica', '6,6'], ['Mortes', 'Nenhuma registrada até a noite de sexta'], ['Canal do Panamá', 'Funcionando']] },
  sources: [['Business Standard', U.bsPanama], ['El Espectador', U.eePanama], ['El Tiempo', U.etPanama]] },

{ id: 'ucrania-eua-negociacao-miami', cat: 'internacional', own: false, t: '2026-10-09T14', d: '9 out 2026', img: 'mundo', src: 'Al Arabiya / Reuters', url: U.aaMiami,
  title: 'Delegação da Ucrânia chega a Miami para negociar com enviados dos EUA',
  sum: 'Representantes europeus também participam das conversas sobre o fim da guerra, segundo a agência Reuters.',
  body: [
    'A delegação ucraniana chegou à cidade americana na sexta-feira (9), segundo uma fonte ouvida pela Reuters. O presidente Volodymyr Zelensky tinha dito que europeus também estariam nas conversas. Não houve anúncio de resultados.',
    'O encontro acontece um dia depois do ataque russo com bomba planadora em Kramatorsk, no leste da Ucrânia.'
  ] },

/* ===================== ESPORTES ===================== */
{ id: 'santos-empata-flamengo-palmeiras-encosta', cat: 'esportes', own: true, t: '2026-10-09T00', d: '9 out 2026', img: 'esportes', read: 3,
  title: 'Neymar marca duas vezes, Santos empata com o Flamengo, e Palmeiras fica a um ponto do líder',
  sum: 'Na Vila Belmiro, o Santos buscou o 2 a 2 com dois pênaltis no fim. O Palmeiras venceu o Bahia por 1 a 0 e chegou a 60 pontos, contra 61 do Flamengo.',
  body: [
    'A briga pelo título do Brasileirão ficou mais apertada na quinta-feira (8), pela 29ª rodada. O líder Flamengo empatou por 2 a 2 com o Santos, na Vila Belmiro, e o Palmeiras venceu o Bahia por 1 a 0, em São Paulo. Agora, só um ponto separa os dois primeiros colocados.',
    '## Neymar decide na volta',
    'O Flamengo abriu 2 a 0 no fim do primeiro tempo, com gols de Danilo, aos 43 minutos, e Lucas Paquetá, nos acréscimos. Neymar, que não jogava desde 2 de setembro por causa de uma lesão na coxa, entrou no intervalo.',
    'Aos 33 minutos do segundo tempo, Jorginho, do Flamengo, foi expulso depois de revisão do VAR por toque de mão na área. Neymar cobrou o pênalti e diminuiu. Aos 42, ele marcou de novo, em outro pênalti, marcado após um empurrão de Luiz Araújo em Gabigol. O árbitro Anderson Daronco deu 14 minutos de acréscimo.',
    '## Palmeiras encosta',
    'No Nubank Parque, o Palmeiras marcou cedo: Flaco López fez o gol aos 6 minutos do primeiro tempo, depois de um escanteio. Vitor Roque acertou o travessão e Sosa, a trave. Com a derrota, o Bahia caiu para o 6º lugar. Também na quinta, o Fluminense goleou o Coritiba por 4 a 0 e subiu para o 3º lugar.',
    '## Próximos jogos',
    'No domingo (11), o Flamengo recebe o Fluminense, às 17h30, e o Palmeiras enfrenta o Corinthians no Nubank Parque, no mesmo horário. O Santos visita o Atlético-MG, às 16h, na Arena MRV.'
  ],
  box: { type: 'table', title: 'Brasileirão: o topo da tabela', head: ['Clube', 'Pontos'], rows: [['Flamengo', '61'], ['Palmeiras', '60'], ['Fluminense', '51'], ['Athletico-PR', '50'], ['Cruzeiro', '48'], ['Bahia', '46']], note: 'Depois dos jogos de quinta (8), pela 29ª rodada. Fontes: Gazeta Esportiva e Piranot.' },
  sources: [['Gazeta Esportiva', U.gzSantosFla], ['CNN Brasil', U.cnnSantosFla], ['Gazeta Esportiva', U.gzPalBahia], ['CNN Brasil', U.cnnPalBahia], ['Piranot', U.piraTabela]] },

{ id: 'fluminense-goleia-coritiba-savarino', cat: 'esportes', own: false, t: '2026-10-08T23', d: '8 out 2026', img: 'esportes', src: 'Gazeta Esportiva', url: U.gzFluCoxa,
  title: 'Savarino marca três vezes, e Fluminense goleia o Coritiba por 4 a 0',
  sum: 'Com a vitória no Maracanã, o time chegou a 51 pontos e assumiu o 3º lugar do Brasileirão.',
  body: [
    'Savarino marcou aos 29 minutos do primeiro tempo e aos 3 e aos 20 do segundo. Lucho Acosta fechou o placar nos acréscimos. O Coritiba, com 38 pontos, está em 9º.',
    'No domingo (11), o Fluminense enfrenta o líder Flamengo no Maracanã.'
  ] },

{ id: 'f1-gp-singapura-primeira-sprint', cat: 'esportes', own: false, t: '2026-10-09T12', d: '9 out 2026', img: 'pista', src: 'Grande Prêmio', url: U.gpSprint,
  title: 'Verstappen larga na pole da primeira sprint de Singapura; líder Antonelli sai em 7º',
  sum: 'George Russell, segundo no campeonato, larga em 2º. A sprint é neste sábado (10), às 6h de Brasília, e a corrida principal, no domingo (11), às 9h.',
  body: [
    'Max Verstappen fez o melhor tempo na classificação para a sprint, na sexta-feira (9), 0s120 à frente de Russell, da Mercedes. Ferrari e McLaren ficaram do 3º ao 6º lugar. Kimi Antonelli, também da Mercedes, ficou a 0s693 da pole. O brasileiro Gabriel Bortoleto larga em 14º.',
    'Segundo o Grande Prêmio, Russell vai largar do fundo do grid no domingo, por punição pela troca de peças do motor. A classificação para o GP é neste sábado, às 10h. Antonelli lidera com 320 pontos, 84 a mais que Russell.'
  ] },

{ id: 'novorizontino-vence-nautico-serie-b', cat: 'esportes', own: false, t: '2026-10-08T22', d: '8 out 2026', img: 'esportes', src: 'Gazeta Esportiva', url: U.gzNovori,
  title: 'Novorizontino vence o Náutico e encosta nos líderes da Série B',
  sum: 'Com o 2 a 0 nos Aflitos, o time chegou a 57 pontos, dois a menos que o líder Juventude.',
  body: [
    'Nicolas Careca abriu o placar aos 7 minutos, e Rômulo ampliou de pênalti aos 14, ainda no primeiro tempo. O jogo foi pela 32ª rodada.',
    'O Novorizontino é o 3º colocado. O Náutico, com 42 pontos, está em 13º.'
  ] },

{ id: 'joao-fonseca-paris-basileia', cat: 'esportes', own: false, t: '2026-10-08T19', d: '8 out 2026', img: 'esportes', src: 'Lance!', url: U.lanceFonseca,
  title: 'João Fonseca está confirmado no Masters de Paris e pode defender o título em Basileia',
  sum: 'Fora das quadras desde agosto por causa de uma lesão abdominal, o brasileiro, 29º do ranking, não disputa o Masters de Xangai.',
  body: [
    'O Masters 1000 de Paris vai de 2 a 8 de novembro, e Fonseca é o único brasileiro com vaga direta. Antes, ele deve jogar o ATP 500 de Basileia, de 26 de outubro a 1º de novembro, se estiver em condições físicas.',
    'O brasileiro não joga desde que desistiu do torneio de Cincinnati, em agosto. Ele também ficou fora de Tóquio e de Xangai.'
  ] },

{ id: 'corinthians-demite-fernando-diniz', cat: 'esportes', own: true, t: '2026-10-09T16', d: '9 out 2026', img: 'esportes', read: 3,
  title: 'Sem técnico definitivo, Corinthians terá interino no clássico contra o Palmeiras',
  sum: 'William Batista, do sub-20, comanda o time no domingo (11). Ramón Díaz segue como prioridade para substituir Fernando Diniz, mas ainda não há acordo.',
  body: [
    'O técnico do time sub-20 do Corinthians, William Batista, vai dirigir a equipe no clássico contra o Palmeiras, no domingo (11), às 17h30, no Nubank Parque, pela 30ª rodada do Brasileirão. Ele terá a ajuda de Léo Porto, auxiliar fixo do clube que fazia parte da comissão de Fernando Diniz. Batista já comandou o time principal do América-MG.',
    '## A demissão',
    'Diniz foi demitido na noite de quarta-feira (7), depois da derrota por 2 a 1 para o Internacional, no Beira-Rio. Segundo o Lance!, o time chegou a sete jogos sem vencer no Brasileirão e oito no total, contando a eliminação para o Estudiantes na Libertadores.',
    'Em 33 jogos, Diniz somou 13 vitórias, 8 empates e 12 derrotas, com aproveitamento de 47%. O Corinthians tem 32 pontos, está em 16º lugar e fica a um ponto da zona de rebaixamento.',
    '## Quem pode chegar',
    'Segundo a Placar, o argentino Ramón Díaz continua como primeira opção, mas não houve acordo. Fábio Carille, hoje no Al-Fayha, da Arábia Saudita, apareceu como alternativa; o contrato dele vai até meados de 2027, e o clube teria de negociar a saída. Juan Pablo Vojvoda, Luis Zubeldía e Sylvinho também foram avaliados.'
  ],
  box: { type: 'facts', title: 'Diniz no Corinthians', rows: [['Jogos', '33'], ['Vitórias', '13'], ['Empates', '8'], ['Derrotas', '12'], ['Aproveitamento', '47%']] },
  sources: [['Placar', U.placarCorinthians], ['Lance!', U.lanceDiniz], ['Gazeta Esportiva', U.gazInter], ['Gazeta Esportiva', U.gazRamon]] },

{ id: 'libertadores-semifinais-tres-brasileiros', cat: 'esportes', own: true, t: '2026-10-09T18', d: '9 out 2026', img: 'esportes', read: 2,
  photo: 'fotos/libertadores-semifinais-tres-brasileiros.webp', photoAlt: 'Montagem com jogadores de Fluminense, Palmeiras, Flamengo e Estudiantes comemorando', credit: 'Montagem: reprodução',
  title: 'Semifinais da Libertadores começam na quarta, com Fluminense x Palmeiras no Maracanã',
  sum: 'Na quinta (15), o Flamengo visita o Estudiantes. Os jogos de volta são em 21 e 22 de outubro, todos às 21h30 de Brasília.',
  body: [
    'Três dos quatro semifinalistas da Copa Libertadores são brasileiros, o que garante um time do país na final. O primeiro jogo é na quarta-feira (14), às 21h30, entre Fluminense e Palmeiras, no Maracanã. Na quinta (15), no mesmo horário, o Estudiantes, da Argentina, recebe o Flamengo, em estádio ainda a definir.',
    'As partidas de volta serão no Nubank Parque, em 21 de outubro, e no Maracanã, em 22 de outubro, segundo a Agência Brasil.',
    '## Semana cheia',
    'Antes, os três brasileiros jogam no domingo (11) pela 30ª rodada do Brasileirão: Flamengo e Fluminense fazem clássico, e o Palmeiras recebe o Corinthians.',
    '## Final em Montevidéu',
    'A decisão será em jogo único no sábado, 28 de novembro, no Estádio Centenário, em Montevidéu. O Fluminense chegou à semifinal depois de eliminar o Platense, da Argentina, por 3 a 2 no placar agregado.'
  ],
  box: { type: 'table', title: 'Semifinais', head: ['Confronto', 'Ida', 'Volta'], rows: [['Fluminense x Palmeiras', '14 out, Maracanã', '21 out, Nubank Parque'], ['Estudiantes x Flamengo', '15 out, a definir', '22 out, Maracanã']], note: 'Todos os jogos às 21h30 de Brasília. Fonte: Agência Brasil. Final em 28 de novembro, no Centenário.' },
  sources: [['Agência Brasil', U.abLiberta], ['La Nación', U.laNacion], ['Lance!', U.lance]] },

{ id: 'vasco-vence-botafogo-classico', cat: 'esportes', own: false, t: '2026-10-07T23', d: '7 out 2026', img: 'esportes', src: 'CNN Brasil', url: U.cnnVasco,
  title: 'Vasco vence o Botafogo no Nilton Santos e soma a terceira vitória seguida',
  sum: 'Lescano e David marcaram para o Vasco; Alex Telles descontou de falta. Dois zagueiros do Botafogo foram levados ao hospital.',
  body: [
    'Com o 2 a 1, o Vasco chegou a 34 pontos. Os zagueiros Arthur Chaves e Vitinho, do Botafogo, foram atendidos no hospital e estão estáveis.'
  ] },

{ id: 'rodada-30-brasileirao-classicos-domingo', cat: 'esportes', own: false, t: '2026-10-10T06', d: '10 out 2026', img: 'esportes', src: 'Metrópoles', url: U.metRodada,
  title: '30ª rodada do Brasileirão começa neste sábado e tem três clássicos no domingo',
  sum: 'Vasco x Remo e São Paulo x Vitória abrem a rodada. No domingo, tem Flamengo x Fluminense, Palmeiras x Corinthians e Grêmio x Internacional.',
  body: [
    'Neste sábado (10), o Vasco recebe o Remo às 18h, em São Januário, e o São Paulo enfrenta o Vitória às 21h, no MorumBIS. O Remo, penúltimo colocado, com 24 pontos, não vence há nove jogos.',
    'No domingo (11), às 17h30, jogam Flamengo x Fluminense, Palmeiras x Corinthians e Grêmio x Internacional. Antes, às 16h, o Atlético-MG recebe o Santos, e às 19h30 o Bahia enfrenta o Mirassol.'
  ] },

{ id: 'rebeca-andrade-mundial-roterda', cat: 'esportes', own: false, t: '2026-10-07T12', d: '7 out 2026', img: 'esportes', src: 'Piranot', url: U.piraRebeca,
  title: 'Rebeca Andrade lidera a seleção brasileira no Mundial de ginástica de Roterdã',
  sum: 'A competição vai de 17 a 25 de outubro, na Holanda. Rebeca tem a maior nota do ano no salto, 14,800.',
  body: [
    'No feminino, estão Rebeca, Flávia Saraiva, Gabriela Bouças, Lorrane Oliveira, Sophia Weisberg e Thais Fidelis. No masculino, Arthur Nory, Bernardo Miranda, Diogo Soares, Johnny Oshiro, Patrick Corrêa e Vitaly Guimarães. Um atleta de cada equipe será reserva.',
    'Rebeca, dona de seis medalhas olímpicas, deve competir no salto e na trave. Ela foi campeã mundial do salto em 2021 e em 2023. O Mundial abre o ciclo rumo aos Jogos de Los Angeles 2028.'
  ] },

/* ===================== CULTURA ===================== */
{ id: 'nobel-literatura-anne-carson', cat: 'cultura', own: true, t: '2026-10-08T09', d: '8 out 2026', img: 'arte', read: 3,
  title: 'Nobel de Literatura vai para a poeta canadense Anne Carson',
  sum: 'A Academia Sueca premiou uma obra que dialoga com a tradição clássica grega. Carson, de 76 anos, tem sete livros publicados no Brasil.',
  body: [
    'A Academia Sueca anunciou na quinta-feira (8), em Estocolmo, que a canadense Anne Carson, de 76 anos, é a vencedora do Nobel de Literatura de 2026. Poeta, ensaísta, tradutora e professora de letras clássicas, ela foi premiada por uma obra ousada que, segundo a Academia, cria novas formas para a literatura contemporânea num diálogo bem-humorado com a tradição clássica.',
    'Carson soube do prêmio na Islândia, país de que também tem cidadania. A secretária permanente da Academia, Ingrid Carlberg, contou que a escritora foi pega de surpresa. À TV islandesa RUV, Carson reagiu dizendo achar que estavam todos loucos.',
    '## Quem é',
    'Nascida em Toronto, Carson tem mais de 20 livros. A obra mistura poesia, ensaio e tradução e muitas vezes parte da origem das palavras. Entre os títulos citados pela Al Jazeera estão "The Beauty of the Husband", poema narrativo sobre um casamento que fracassa, e "The Trojan Women", releitura em quadrinhos de uma tragédia de Eurípides.',
    'Segundo o jornal português Observador, ela é a segunda pessoa do Canadá a ganhar o prêmio, depois de Alice Munro, em 2013. Carson sucede o húngaro László Krasznahorkai, premiado em 2025.',
    '## No Brasil',
    'Segundo o Diário do Nordeste, sete livros da autora saíram no país, entre eles "Autobiografia do Vermelho", que reconta uma epopeia do ponto de vista do monstro Gerião, e "Eros, o doce-amargo". O prêmio é de 12 milhões de coroas suecas, e a entrega será em 10 de dezembro.'
  ],
  box: { type: 'facts', title: 'Anne Carson', rows: [['Nacionalidade', 'Canadense'], ['Idade', '76 anos'], ['Obra', 'Mais de 20 livros de poesia, ensaio e tradução'], ['No Brasil', '7 livros publicados'], ['Prêmio', '12 milhões de coroas suecas']] },
  sources: [['Al Jazeera', U.ajCarson], ['Observador', U.obsCarson], ['Diário do Nordeste', U.dnCarson]] },

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

{ id: 'lollapalooza-2027-line-up', cat: 'cultura', own: false, t: '2026-10-08T12', d: '8 out 2026', img: 'palco', src: 'Billboard Brasil', url: U.bbLolla,
  title: 'Lollapalooza Brasil 2027 terá Travis Scott, Charli XCX e The Killers',
  sum: 'O festival será em 19, 20 e 21 de março, no Autódromo de Interlagos, em São Paulo. A divisão das atrações por dia ainda não foi divulgada.',
  body: [
    'Segundo a Billboard Brasil, os destaques da edição que marca os 15 anos do festival no país incluem também David Guetta, Queens of the Stone Age, The Neighbourhood, Fontaines D.C., The Prodigy e o DJ brasileiro Mochakk.',
    'Entre os artistas nacionais estão Criolo, Nação Zumbi e Rodrigo Amarante. Os horários de cada show serão anunciados mais tarde.'
  ] },

{ id: 'marilia-mendonca-exposicao-mis', cat: 'cultura', own: false, t: '2026-10-09T06', d: '9 out 2026', img: 'cultura', src: 'Agência Brasil', url: U.abMarilia,
  title: 'Exposição sobre Marília Mendonça abre no MIS, em São Paulo',
  sum: '"Sentimento Louco" reúne objetos pessoais, figurinos e registros inéditos da cantora até 29 de novembro. Às terças, a entrada é gratuita.',
  body: [
    'A mostra, com curadoria de Isa Pessoa, abriu na sexta-feira (9) e percorre a vida da cantora desde a infância. Cada sala leva o nome de um sucesso dela, e um quarto foi reconstruído com objetos originais.',
    'Segundo a Agência Brasil, um documentário sobre Marília deve estrear em streaming na próxima semana.'
  ] },

{ id: 'tom-ze-90-anos-exposicao', cat: 'cultura', own: false, t: '2026-10-07T12', d: '7 out 2026', img: 'arte', src: 'Agência Brasil', url: U.abTomZe,
  title: 'Exposição em São Paulo celebra os 90 anos de Tom Zé',
  sum: 'A mostra na Caixa Cultural, na Praça da Sé, tem entrada gratuita e fica aberta até 13 de dezembro.',
  body: [
    '"Tom Zé – 90 Anos do Inquieto Jardineiro de Sons" tem curadoria de Neuseli Martins e inclui uma réplica do buzinório, instrumento criado pelo músico. Nascido em Irará, na Bahia, Tom Zé completa 90 anos no domingo (11).'
  ] },

{ id: 'festival-teatro-infantil-ceara', cat: 'cultura', own: false, t: '2026-10-09T07', d: '9 out 2026', img: 'palco', src: 'Agência Brasil', url: U.abTeatro,
  title: 'Festival Internacional de Teatro Infantil do Ceará tem 40 apresentações gratuitas',
  sum: 'A 15ª edição vai até 20 de outubro em Fortaleza, Quixeramobim, Maracanaú e São Gonçalo do Amarante, com grupos de três estados e da França.',
  body: [
    'O festival começou na sexta-feira (9) e reúne oito atrações, segundo a Agência Brasil. Até domingo (11), a Caixa Cultural Fortaleza recebe também um encontro de criadores das artes cênicas.'
  ] },

{ id: 'exposicao-margem-de-dentro-sesc-ipiranga', cat: 'cultura', own: false, t: '2026-10-08T12', d: '8 out 2026', img: 'arte', src: 'Agência Brasil', url: U.abMargem,
  title: 'Exposição gratuita no Sesc Ipiranga reúne 26 artistas e propõe outro olhar sobre a história do Brasil',
  sum: '"Margem de Dentro" tem mais de 50 obras, entre pinturas, esculturas, gravuras, fotos e peças têxteis, com curadoria de Claudinei Roberto Silva.',
  body: [
    'A mostra abriu na quarta-feira (7), em São Paulo, e destaca trabalhos feitos à mão, com cimento, cerâmica, madeira e tecido. Segundo a Agência Brasil, o curador liga essas técnicas a saberes de origem africana.',
    'Um mural de Soberana Ziza trata da migração de famílias do interior para São Paulo e homenageia Madrinha Eunice, primeira presidente de uma escola de samba paulistana.'
  ] },

{ id: 'miro-mab-faap-prorrogada', cat: 'cultura', own: false, t: '2026-10-09T07', d: '9 out 2026', img: 'arte', src: 'Agência Brasil', url: U.abMiro,
  title: 'Exposição de Miró na Faap, em São Paulo, é prorrogada até 13 de dezembro',
  sum: '"Miró: Mestre das Formas" reúne mais de 100 obras do artista espanhol no Museu de Arte Brasileira, em Higienópolis.',
  body: [
    'A mostra fica no MAB Faap. Segundo a Agência Brasil, a exposição ganhou mais tempo em cartaz e agora vai até 13 de dezembro.'
  ] },

/* ===================== ECONOMIA ===================== */
{ id: 'durigan-imposto-seletivo-apos-eleicao', cat: 'economia', own: false, t: '2026-10-08T20', d: '8 out 2026', img: 'mercado', src: 'Agência Brasil', url: U.abSeletivo,
  title: 'Durigan diz que MP do Imposto Seletivo só vai ao Congresso depois do 2º turno',
  sum: 'Segundo o ministro da Fazenda, a cobrança pode começar no fim de janeiro ou no início de fevereiro de 2027. Até lá, fica mantido o IPI atual sobre os setores atingidos.',
  body: [
    'O Imposto Seletivo vai incidir sobre veículos, embarcações e aeronaves, cigarros, bebidas alcoólicas e açucaradas, bens minerais e apostas. Segundo a Agência Brasil, o acordo com os setores foi fechado nesta semana.',
    'Dario Durigan também defendeu o split payment, sistema que separa o imposto no momento do pagamento, e disse que ele será opcional e gradual. O ministro respondeu a críticas da campanha de Flávio Bolsonaro (PL) ao modelo.'
  ] },

{ id: 'petrobras-21-blocos-bonus-bilionario', cat: 'economia', own: false, t: '2026-10-08T15', d: '8 out 2026', img: 'mercado', src: 'Forbes Brasil', url: U.forbesPetro,
  title: 'Petrobras arremata 21 blocos e vai pagar R$ 3,2 bilhões em bônus',
  sum: 'O número soma os dois leilões de petróleo da ANP desta semana. Na oferta de concessão, foram vendidos 49 de 308 blocos.',
  body: [
    'As áreas ficam nas bacias de Campos, Santos e Ceará. Na Bacia do Ceará, a Petrobras será a operadora, com 70%, em parceria com a QatarEnergy. O bônus deve ser pago até 30 de dezembro.',
    'Na oferta de concessão, o bônus total foi de cerca de R$ 3 bilhões, o maior desde o início da Oferta Permanente. Também levaram áreas a Aguila, a Eneva e a Origem.'
  ] },

{ id: 'bets-saem-do-ar-devolucao-saldos', cat: 'economia', own: true, t: '2026-10-09T12', d: '9 out 2026', img: 'celular', read: 3,
  title: 'Bancos começam a devolver R$ 1,3 bilhão a apostadores de bets',
  sum: 'Os pagamentos vão até 14 de outubro, direto na conta usada nos depósitos. A partir daí, a Caixa assume os casos pendentes.',
  body: [
    'Os bancos começaram na sexta-feira (9) a devolver o dinheiro que ficou nas plataformas de apostas on-line, fora do ar desde terça (6) por causa da medida provisória 1.394/2026. São cerca de R$ 1,325 bilhão, de 26,5 milhões de apostadores.',
    '## Como funciona',
    'O pagamento é feito pelos bancos com os dados enviados pelas empresas de apostas: o CPF do cliente e a conta usada nos depósitos. O apostador deve acompanhar o extrato e os avisos do banco. Segundo a IstoÉ, não há previsão de taxa para liberar o dinheiro.',
    'Os bancos têm até 14 de outubro para pagar. Os casos que não forem resolvidos passam para a Caixa a partir dessa data, e o Ministério da Fazenda vai divulgar orientações nos canais oficiais.',
    '## Cuidado com golpes',
    'A recomendação é usar só os canais oficiais do governo e do banco e nunca informar senhas ou códigos. Mensagens que pedem pagamento antecipado para liberar o dinheiro devem ser vistas com desconfiança.',
    '## Saldos pequenos e grandes',
    'Cerca de 86,2 milhões de contas tinham entre R$ 0,01 e R$ 0,99, somando R$ 15,5 milhões. Uma mesma pessoa pode ter contas em várias plataformas. Segundo o ministro da Fazenda, Dario Durigan, cerca de 40 CPFs com saldos muito altos estão em análise, inclusive por suspeita de lavagem de dinheiro, o que não significa que os donos tenham cometido crime.',
    'Cerca de 200 mil pessoas, 1% dos apostadores, concentram 80% do saldo total, segundo a Agência Brasil.'
  ],
  box: { type: 'steps', title: 'Calendário da devolução', steps: [['Até 8 de outubro', 'As empresas informaram os saldos dos clientes aos bancos.'], ['9 a 14 de outubro', 'Os bancos devolvem o dinheiro na conta do apostador.'], ['A partir de 14 de outubro', 'A Caixa assume os casos pendentes.']] },
  sources: [['IstoÉ', U.istoeBets], ['Agência Brasil', U.abBets], ['Agência Brasil', U.abBets2]] },

{ id: 'anfavea-producao-veiculos-setembro', cat: 'economia', own: false, t: '2026-10-07T12', d: '7 out 2026', img: 'mercado', src: 'Agência Brasil', url: U.abAnfavea,
  title: 'Produção de veículos tem o melhor setembro desde 2014',
  sum: 'Foram 268,3 mil unidades, alta de 10,2% em um ano. A Anfavea passou a prever alta de 15,2% nos emplacamentos em 2026.',
  body: [
    'As exportações caíram 24,2% em setembro, para 39,8 mil veículos, por causa da Argentina e da concorrência de modelos chineses e mexicanos. Os emplacamentos somaram 281,4 mil unidades no mês.'
  ] },

{ id: 'campos-neto-adia-depoimento-pf', cat: 'economia', own: false, t: '2026-10-07T17', d: '7 out 2026', img: 'mercado', src: 'Times Brasil', url: U.tbCampos,
  title: 'Depoimento de Campos Neto à PF no caso Master é adiado',
  sum: 'O ex-presidente do Banco Central seria ouvido como testemunha na quarta. A defesa pediu o adiamento, e ainda não há nova data.',
  body: [
    'A Polícia Federal quer saber se ele sabia da relação de dois servidores do BC com Daniel Vorcaro, dono do Master. Na terça (6), o atual presidente do BC, Gabriel Galípolo, prestou depoimento como testemunha.'
  ] },

{ id: 'gasolina-impostos-zerados-subsidio-diesel', cat: 'economia', own: true, t: '2026-10-09T15', d: '9 out 2026', img: 'plataforma', read: 3,
  title: 'Governo zera impostos federais da gasolina por 30 dias e amplia subsídio ao diesel importado',
  sum: 'O pacote custa R$ 5,2 bilhões em um mês e será pago com receitas extras do petróleo, segundo o governo. O anúncio foi feito a 16 dias do segundo turno.',
  body: [
    'O governo federal anunciou na sexta-feira (9) que vai zerar, por 30 dias, os tributos federais sobre a gasolina: PIS/Cofins e Cide. O desconto passa de R$ 0,63 para R$ 0,89 por litro. A medida será feita por decreto e pode ser prorrogada ou revista.',
    '## Diesel e etanol',
    'O diesel importado ganha uma subvenção extra de R$ 1,40 por litro, somada aos R$ 2,12 por litro já pagos. Segundo o ministro do Planejamento, Bruno Moretti, as importações já passam de 30% do diesel usado no país. No etanol hidratado, o desconto de R$ 0,19 por litro continua, e a subvenção aos produtores sobe de R$ 0,25 para R$ 0,43 por litro.',
    '## Quanto custa',
    'O custo das novas ações é de R$ 5,2 bilhões em 30 dias. O governo também publicou a medida provisória 1.395, com crédito extraordinário de R$ 7,52 bilhões para o Ministério de Minas e Energia pagar os subsídios em vigor, a maior parte para o diesel rodoviário.',
    'O Ministério do Planejamento diz que a renúncia será compensada por receitas extraordinárias com o petróleo, sem mudar a meta fiscal. O governo não informou quanto o preço deve cair nos postos. Segundo o Times Brasil, a Secretaria Nacional do Consumidor vai acompanhar o repasse.',
    '## Por que agora',
    'O governo justifica as medidas com a alta do petróleo: o Brent passou de US$ 100 o barril, contra cerca de US$ 70 antes da guerra no Oriente Médio. O ministro da Fazenda, Dario Durigan, disse que a receita maior com o petróleo será usada para proteger a população. O candidato Flávio Bolsonaro (PL) criticou os subsídios ao diesel e disse que os preços vão subir logo depois da eleição.'
  ],
  box: { type: 'facts', title: 'As medidas', rows: [['Gasolina', 'Tributos federais zerados (R$ 0,89 por litro)'], ['Diesel importado', 'Mais R$ 1,40 por litro'], ['Etanol', 'Subvenção de R$ 0,43 por litro'], ['Custo', 'R$ 5,2 bilhões em 30 dias'], ['Validade', '30 dias']] },
  sources: [['Agência Brasil', U.abCombustiveis], ['Times Brasil', U.tbCombustiveis], ['DGABC / Estadão Conteúdo', U.dgabcCombustiveis], ['Agência Brasil', U.abFlavio]] },

{ id: 'ipca-setembro-0-82-acima-do-teto', cat: 'economia', own: true, t: '2026-10-09T09', d: '9 out 2026', img: 'mercado', read: 3,
  title: 'Inflação sobe 0,82% em setembro e passa do teto da meta em 12 meses',
  sum: 'O IPCA acumulado chegou a 4,58%, acima do limite de 4,5%. A conta de luz subiu 7,98% com o fim do bônus de Itaipu.',
  body: [
    'O IPCA, índice oficial de inflação, subiu 0,82% em setembro, informou o IBGE na sexta-feira (9). Foi a maior alta mensal desde março e ficou acima do esperado pelo mercado. Em agosto, os preços tinham caído 0,32%.',
    'Em 12 meses, a inflação chegou a 4,58% e passou do teto da meta. A meta é de 3%, com tolerância de 1,5 ponto para mais ou para menos, ou seja, até 4,5%. No ano, o acumulado é de 3,95%.',
    '## O que mais subiu',
    'A energia elétrica teve o maior impacto, com alta de 7,98%. Em agosto, as contas tinham recebido o desconto do Bônus de Itaipu, que não se repetiu. Todos os nove grupos de produtos e serviços pesquisados subiram.',
    'Nos transportes (0,89%), as passagens aéreas subiram 9,66% e os combustíveis, 1,41%. Na alimentação (0,83%), a comida em casa ficou 0,96% mais cara, com destaque para o tomate (37,76%) e a batata-inglesa (24,07%). O frango inteiro e as frutas ficaram mais baratos.',
    '## O que vem pela frente',
    'No Boletim Focus, do Banco Central, o mercado prevê inflação de 5,01% em 2026, acima do teto, e de 4,3% em 2027, segundo a CNN Brasil.'
  ],
  box: { type: 'facts', title: 'IPCA de setembro', rows: [['No mês', '0,82%'], ['Em 12 meses', '4,58%'], ['Teto da meta', '4,5%'], ['Energia elétrica', '+7,98%'], ['Passagens aéreas', '+9,66%']] },
  sources: [['Agência Brasil', U.abIpca], ['CNN Brasil', U.cnnIpca]] },

{ id: 'ibovespa-recorde-209-mil-dolar-4-98', cat: 'economia', own: false, t: '2026-10-09T18', d: '9 out 2026', img: 'mercado', src: 'Agência Brasil', url: U.abDolar,
  title: 'Ibovespa bate recorde aos 209 mil pontos e sobe 8,82% na semana; dólar cai a R$ 4,98',
  sum: 'O índice subiu 1,38% na sexta-feira (9). Na semana, o dólar acumulou queda de 4,44%.',
  body: [
    'O Ibovespa fechou aos 209.066,90 pontos, novo recorde de fechamento, e chegou a 209.713 pontos durante o pregão. O dólar comercial terminou a R$ 4,985, queda de 0,78%. No ano, a moeda americana acumula baixa de 9,18%.',
    'Segundo a Agência Brasil, o movimento reflete a entrada de investimentos em ações brasileiras e as expectativas do mercado com o cenário eleitoral. O petróleo Brent subiu 0,42%, a US$ 104,72 o barril.'
  ] },

{ id: 'reforma-tributaria-cbs-86-notas', cat: 'economia', own: false, t: '2026-10-09T18', d: '9 out 2026', img: 'mercado', src: 'Agência Brasil', url: U.abCbs,
  title: 'Reforma tributária: 86% das notas fiscais já destacam a nova CBS',
  sum: 'Segundo a Receita Federal, 3,7 bilhões de notas trouxeram o novo tributo em 30 dias. A cobrança plena começa em 2027.',
  body: [
    'A CBS é a contribuição federal criada pela reforma para substituir tributos sobre bens e serviços. Em 2026, as empresas estão em fase de teste e devem informar o valor separado nas notas. Das cerca de 1,27 milhão de empresas obrigadas, 67% destacaram a CBS em todas ou em parte das notas. As do Simples Nacional estão dispensadas neste ano.',
    'O IBS, imposto que vai substituir o ICMS e o ISS, começa a ser testado em 2027, e a transição vai até 2033, segundo a Agência Brasil.'
  ] },

{ id: 'cni-juros-altos-credito-industria', cat: 'economia', own: false, t: '2026-10-09T08', d: '9 out 2026', img: 'mercado', src: 'Agência Brasil', url: U.abCni,
  title: 'Juros altos são a principal barreira ao crédito para a indústria, diz CNI',
  sum: 'Para 76% das empresas, os juros são o maior obstáculo nos empréstimos de curto e médio prazo. Das que pediram crédito de longo prazo, 37,2% não conseguiram.',
  body: [
    'A pesquisa da Confederação Nacional da Indústria ouviu 1.701 indústrias entre 3 e 12 de agosto. Nos empréstimos de longo prazo, 69% apontam os juros como principal barreira. A exigência de imóveis como garantia vem em segundo lugar, citada por cerca de um terço.',
    'Segundo a Agência Brasil, a recusa no crédito de longo prazo atinge cerca de 48% das pequenas e médias empresas que pediram, contra 29,9% das grandes.'
  ] },

/* ===================== TECNOLOGIA ===================== */
{ id: 'samsung-lucro-recorde-chips-ia', cat: 'tecnologia', own: true, t: '2026-10-08T08', d: '8 out 2026', img: 'tecnologia', read: 3,
  title: 'Samsung prevê lucro recorde de US$ 80 bilhões no trimestre, puxado por chips para IA',
  sum: 'É a primeira empresa de tecnologia a passar de 100 trilhões de wons de lucro operacional em um trimestre. As divisões de celulares e de TVs devem ter dado prejuízo.',
  body: [
    'A Samsung Electronics divulgou na quinta-feira (8) uma prévia do resultado do terceiro trimestre. O lucro operacional estimado é de 107,4 trilhões de wons, cerca de US$ 80 bilhões, alta de 782,5% em um ano, segundo o jornal Korea Herald. A receita também bateu recorde, com 195 trilhões de wons.',
    'Segundo o jornal sul-coreano, a Samsung é a primeira empresa de tecnologia do mundo a passar de 100 trilhões de wons de lucro operacional em um só trimestre. O valor supera o lucro operacional da Nvidia no trimestre encerrado em julho, de US$ 63,7 bilhões.',
    '## Memória para inteligência artificial',
    'O motor do resultado é a venda de memórias, em especial as do tipo HBM, usadas em data centers de inteligência artificial. Segundo a Exame, a fatia da Samsung nesse mercado subiu de 21% no primeiro trimestre para 33% no segundo, de acordo com a consultoria Counterpoint. A líder é a também sul-coreana SK Hynix, com 50%.',
    'Analistas estimam que a divisão de memórias tenha lucrado cerca de 110 trilhões de wons no trimestre.',
    '## Celulares no vermelho',
    'Já a divisão de celulares deve ter tido prejuízo de cerca de 1,5 trilhão de wons, e a de TVs e eletrodomésticos, de 700 bilhões a 800 bilhões, segundo estimativas de analistas. Mesmo com o recorde, a ação da Samsung caiu 1,86% na Bolsa de Seul. O balanço completo será divulgado em 29 de outubro.'
  ],
  box: { type: 'facts', title: 'Samsung no 3º trimestre', rows: [['Lucro operacional', '107,4 trilhões de wons (cerca de US$ 80 bi)'], ['Alta em um ano', '782,5%'], ['Receita', '195 trilhões de wons'], ['Balanço completo', '29 de outubro']] },
  sources: [['Korea Herald', U.khSamsung], ['Exame', U.exSamsung]] },

{ id: 'einstein-ataque-hacker-dados-pacientes', cat: 'tecnologia', own: false, t: '2026-10-08T15', d: '8 out 2026', img: 'tecnologia', src: 'Convergência Digital', url: U.cdEinstein,
  title: 'Hospital Albert Einstein confirma ataque hacker com acesso a dados de pacientes',
  sum: 'Podem ter sido expostos nomes, CPFs, datas de nascimento, receitas e resultados de exames. O caso foi comunicado à ANPD e à Polícia Federal.',
  body: [
    'O hospital, de São Paulo, afirma que o prontuário eletrônico e as demais plataformas funcionam normalmente e que não encontrou sinais de divulgação ou uso indevido dos dados.',
    'Segundo a Convergência Digital, o Einstein diz tratar o caso como máxima prioridade.'
  ] },

{ id: 'crew-12-volta-terra', cat: 'tecnologia', own: false, t: '2026-10-08T13', d: '8 out 2026', img: 'ciencia', src: 'Space.com', url: U.spaceCrew12,
  title: 'Astronautas da missão Crew-12 voltam à Terra depois de cerca de oito meses no espaço',
  sum: 'A cápsula Dragon pousou no Oceano Pacífico, perto de Los Angeles, na quinta-feira (8). A francesa Sophie Adenot, da agência espacial europeia, estava a bordo.',
  body: [
    'O pouso foi às 12h34 de Brasília. A tripulação tinha Jessica Meir e Jack Hathaway, da NASA, Sophie Adenot, da ESA, e o russo Andrey Fedyaev, da Roscosmos. Eles foram lançados em 13 de fevereiro.',
    'A Crew-12 substituiu a Crew-11, que voltou antes do previsto em janeiro, na primeira evacuação médica da Estação Espacial Internacional.'
  ] },

{ id: 'starlink-15-mil-satelites-celular', cat: 'tecnologia', own: false, t: '2026-10-08T07', d: '8 out 2026', img: 'celular', src: 'Tecnoblog', url: U.tbStarlink,
  title: 'EUA autorizam 15 mil satélites da Starlink para internet direto no celular',
  sum: 'A licença da FCC permite que a SpaceX venda o serviço sem depender de uma operadora parceira. O primeiro lote deve ser lançado em 2027.',
  body: [
    'Com a autorização, a SpaceX poderá competir diretamente com operadoras de telefonia dos EUA. Pelo menos metade dos satélites precisa estar em órbita até 2032.',
    'No Brasil, segundo o Tecnoblog, a Starlink ultrapassou a TIM em banda larga fixa e somou 65 mil acessos só em agosto, de acordo com a Anatel.'
  ] },

{ id: 'pix-1-bilhao-chaves', cat: 'tecnologia', own: false, t: '2026-10-08T11', d: '8 out 2026', img: 'celular', src: 'Convergência Digital', url: U.cdPix,
  title: 'Pix passa de 1 bilhão de chaves cadastradas',
  sum: 'Eram 1,008 bilhão de chaves em 30 de setembro, segundo o Banco Central. As chaves aleatórias são mais da metade.',
  body: [
    'As chaves aleatórias somam 526,8 milhões, ou 52,3% do total. Depois vêm as de celular (166,3 milhões), as de CPF (153,9 milhões) e as de e-mail (144,6 milhões).'
  ] },

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

{ id: 'gpt-6-chatgpt-todos', cat: 'tecnologia', own: false, t: '2026-10-07T15', d: '7 out 2026', img: 'tecnologia', src: 'OpenAI', url: U.oaiGpt6,
  title: 'OpenAI libera o GPT-6 no ChatGPT, com respostas interativas',
  sum: 'Assinantes recebem o novo modelo desde quarta; usuários gratuitos, a partir desta quinta. As respostas podem trazer gráficos, botões e calculadoras.',
  body: [
    'Segundo a empresa, o próprio modelo escolhe quando usar os elementos visuais e responde só com texto quando isso basta. A OpenAI diz que mais de 1,2 bilhão de pessoas usam o ChatGPT por semana.'
  ] },

{ id: 'google-synthid-aberto-publico', cat: 'tecnologia', own: false, t: '2026-10-07T14', d: '7 out 2026', img: 'celular', src: 'TechCrunch', url: U.tcSynth,
  title: 'Google abre ao público site que identifica imagens, vídeos e áudios feitos com sua IA',
  sum: 'O SynthID detecta a marca d’água invisível usada em conteúdos gerados por ferramentas como Gemini e Veo, mas não reconhece material de qualquer IA.',
  body: [
    'Antes, a ferramenta era restrita a jornalistas e pesquisadores. Segundo o TechCrunch, são feitas cerca de 1 milhão de verificações por dia.'
  ] },

{ id: 'openai-demite-pesquisadores-seguranca', cat: 'tecnologia', own: true, t: '2026-10-09T14', d: '9 out 2026', img: 'tecnologia', read: 3,
  title: 'OpenAI demite três pesquisadores de segurança, que dizem ter sido punidos por priorizar riscos da IA',
  sum: 'A empresa afirma que eles violaram regras sobre informações sensíveis. O caso ocorre quando 64% dos americanos dizem que a IA avança rápido demais, segundo pesquisa AP-NORC.',
  body: [
    'A OpenAI, dona do ChatGPT, confirmou na sexta-feira (9) que demitiu os pesquisadores Mikita Balesni, Jasmine Wang e Tomek Korbak, que trabalhavam com segurança e alinhamento de modelos de inteligência artificial. Segundo a CBS News, os três tinham publicado na quinta (8) uma carta aberta sobre o caso.',
    '## As duas versões',
    'Balesni disse que eles foram demitidos por colocar a segurança acima do interesse imediato da empresa. Na carta, os pesquisadores afirmam que a forma como a demissão foi comunicada deixou ex-colegas com medo de se manifestar e defendem que a IA não é uma tecnologia comum.',
    'A OpenAI respondeu na rede X que uma investigação interna encontrou violações das regras sobre informações sensíveis e uma quebra de confiança maior do que a descrita na carta. A empresa diz que a decisão não teve relação com alertas de segurança e que vai contratar avaliadores externos para analisar seus riscos.',
    '## O que pensa o público',
    'Uma pesquisa AP-NORC feita de 24 a 28 de setembro com 2.140 adultos nos EUA mostra que 64% acham que a IA está se desenvolvendo rápido demais, e 8%, devagar demais. Cerca de 8 em cada 10 dizem que o governo deve priorizar a proteção dos trabalhadores e manter a IA sob controle humano. A margem de erro é de 2,9 pontos.'
  ],
  box: { type: 'facts', title: 'O caso', rows: [['Demitidos', '3 pesquisadores de segurança'], ['Versão da OpenAI', 'Violação de regras sobre informações sensíveis'], ['Versão dos pesquisadores', 'Punição por priorizar a segurança'], ['Pesquisa AP-NORC', '64% acham que a IA avança rápido demais']] },
  sources: [['CBS News', U.cbsOpenai], ['AP-NORC', U.apnorcIa]] },

{ id: 'iphone-18-pro-apple-corta-pedidos', cat: 'tecnologia', own: false, t: '2026-10-09T16', d: '9 out 2026', img: 'celular', src: 'Tecnoblog', url: U.tbIphone,
  title: 'Apple corta pedidos de peças do iPhone 18 Pro por demanda fraca, diz jornal',
  sum: 'Segundo o Nikkei Asia, os pedidos de componentes para outubro caíram de 15% a 20%. No Brasil, o 18 Pro custa a partir de R$ 11.999.',
  body: [
    'A redução atinge o iPhone 18 Pro e o 18 Pro Max, segundo fontes ouvidas pelo jornal japonês. Entre as possíveis causas estão a alta do preço das memórias, puxada pelos data centers de inteligência artificial, e a mudança no calendário: pela primeira vez, a Apple lançou só os modelos mais caros em setembro e deixou o iPhone 18 básico para o ano que vem.',
    'Segundo o Tecnoblog, o Pro Max custa R$ 12.999 no Brasil. Os preços são cerca de 4% maiores que os da geração anterior.'
  ] },

];
