/* ============================================================
   NOVERA: conteúdo do site. Edite este arquivo e rode `node build.js`.
   Regras completas em ATUALIZACAO.md.
   ============================================================ */

/* Topo do site: data da edição e mercado */
const META = {
  /* Endereço público do site, sem barra no final. Usado nos links das redes sociais. */
  siteUrl: 'https://novera-sepia.vercel.app',
  dataExtenso: 'Segunda-feira, 12 de outubro de 2026',
  edicao: '12 out 2026',
  ibovespa: { valor: '209.067', variacao: '1,38%', sobe: true },
  dolar: { valor: 'R$ 4,98', variacao: '0,78%', sobe: false },
  fechamento: '9/10'
};

/* Home: destaque principal, dois laterais e três da faixa de baixo (IDs de notícias "own: true") */
const FEATURED = {
  lead: 'lula-paulista-flavio-prefeitos-sao-paulo',
  side: ['tse-barra-anuncios-lula-libera-exercito-do-lula', 'ataque-aeroporto-riade-hutis'],
  also: ['palmeiras-goleia-corinthians-derbi', 'caso-master-stf-fachin-pf-13-outubro', 'festival-do-rio-premiados-a-margem-do-rio']
};

/* Home: "Escolhas da redação" (5 IDs) */
const PICKS = ['tse-meta-48-horas-perfis-lula', 'corinthians-demite-fernando-diniz', 'gasolina-impostos-zerados-subsidio-diesel', 'terremoto-panama-magnitude-7-7', 'tom-ze-90-anos-exposicao'];

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
  /* Atualização de 11 out 2026 */
  treRuas: 'https://www.tre-rj.jus.br/comunicacao/noticias/2026/Outubro/retotalizacao-de-votos-aponta-douglas-ruas-como-vencedor-no-primeiro-turno-para-o-governo-do-rj',
  bandRuas: 'https://www.band.com.br/politica/eleicoes/apos-retotalizacao-dos-votos-douglas-ruas-pl-e-eleito-governador-do-rio',
  p360Ruas: 'https://www.poder360.com.br/poder-eleicoes-2026/votos-de-garotinho-sao-anulados-e-douglas-ruas-e-eleito-no-1o-turno-no-rj/',
  metLulaNatal: 'https://www.metropoles.com/brasil/lula-reune-governadores-no-rn-rumo-ao-2o-turno-nao-a-direita-no-nordeste',
  p360FlavioSG: 'https://www.poder360.com.br/poder-eleicoes-2026/flavio-diz-que-vai-receber-faixa-presidencial-de-jair-bolsonaro/',
  cnnIpespe: 'https://www.cnnbrasil.com.br/eleicoes/ipespe-flavio-tem-527-dos-votos-validos-no-2o-turno-lula-473/',
  p360Vorcaro: 'https://www.poder360.com.br/poder-justica/voz-em-audio-de-veja-e-de-vorcaro-diz-advogado-de-fundador-do-master/',
  ajRiade: 'https://www.aljazeera.com/news/2026/10/10/attack-on-airport-in-saudi-capital-riyadh-leaves-several-injured',
  ajRiade2: 'https://www.aljazeera.com/news/2026/10/11/world-condemns-deadly-houthi-attack-on-saudi-arabias-riyadh-airport',
  cbsRiade: 'https://www.cbsnews.com/live-updates/iran-war-trump-us-elections-saudi-arabia-yemen-houthis/',
  apTrumpUcrania: 'https://abcnews.com/US/wireStory/trump-time-ukraine-new-president-blames-zelenskyy-diesel-137162216',
  euroZapo: 'https://www.euronews.com/2026/10/10/russian-strikes-on-southeastern-ukraine-kill-eight-including-three-children-authorities-sa',
  euroAbbas: 'https://www.euronews.com/2026/10/10/palestinian-president-abbas-postpones-legislative-elections-until-september-2027',
  apPanama: 'https://www.wgauradio.com/news/world/unnerved-panamanians/ER4ULEJCQ44ZHBYONOUAHIQ44A/',
  etPanamaEmerg: 'https://www.eltiempo.com/mundo/latinoamerica/panama-declara-estado-de-emergencia-tras-terremoto-de-magnitud-7-7-que-dejo-cientos-de-edificaciones-afectadas-no-hay-personas-muertas-3592811',
  cbsIsaias: 'https://www.cbsnews.com/live-updates/isaias-southeastern-u-s-gulf-coast/',
  lanceSprint: 'https://www.lance.com.br/formula-1/com-nove-abandonos-verstappen-vence-sprint-do-gp-de-singapura-da-f1.html',
  bandSaoPaulo: 'https://www.band.com.br/esportes/futebol/brasileirao-serie-a/com-dois-gols-de-calleri-sao-paulo-vence-o-vitoria-e-sobe-na-tabela',
  gzVascoRemo: 'https://gazetaesportiva.com/times/vasco/vasco-x-remo-empate-sem-gols-brasileirao-30-rodada',
  gzMaringa: 'https://www.gazetaesportiva.com/campeonatos/brasileiro-serie-c/maringa-garante-acesso-na-serie-c-mas-rodada-e-suspensa-por-falta-de-seguranca/',
  lanceMascherano: 'https://www.lance.com.br/corinthians/mascherano-e-procurado-mas-descarta-assumir-o-corinthians.html',
  cnnBatista: 'https://www.cnnbrasil.com.br/esportes/futebol/corinthians/corinthians-define-ex-vasco-como-treinador-interino-para-derby-decisivo/',
  gzDerbi: 'https://www.gazetaesportiva.com/campeonatos/brasileiro-serie-a/tudo-sobre-palmeiras-corinthians-brasileirao-11-10-2026/',
  abFestivalRio: 'https://agenciabrasil.ebc.com.br/cultura/noticia/2026-10/festival-do-rio-chega-ao-ultimo-fim-de-semana',
  cnnJerry: 'https://www.cnnbrasil.com.br/pop/celebridades/morre-o-produtor-cultural-jerry-burgos-e-famosos-lamentam/',
  cnnSimaria: 'https://www.cnnbrasil.com.br/pop/celebridades/simaria-fala-sobre-saude-mental-e-retorno-a-musica-apos-4-anos/',
  abBetsDevolvidos: 'https://agenciabrasil.ebc.com.br/economia/noticia/2026-10/bets-mais-de-r-1-bilhao-foram-devolvidos-apostadores',
  cnnBetsSites: 'https://www.cnnbrasil.com.br/economia/money/macroeconomia/governo-encaminha-166-mil-sites-ilegais-de-bets-para-bloqueio/',
  cnnIsaiasPetroleo: 'https://www.cnnbrasil.com.br/economia/money/macroeconomia/furacao-isaias-paralisa-69-da-producao-de-petroleo-no-golfo-do-mexico/',
  imFiscalFlavio: 'https://www.infomoney.com.br/mercados/euforia-do-mercado-com-flavio-esbarra-na-falta-de-compromissos-concretos-com-fiscal/',
  b3Feriado: 'https://b3.com.br/pt_br/noticias/confira-o-funcionamento-da-b3-no-feriado-de-nossa-senhora-aparecida.htm',
  cnnChina: 'https://www.cnnbrasil.com.br/economia/money/macroeconomia/china-cria-1052-milhoes-de-empregos-urbanos-entre-janeiro-e-setembro/',
  p360Meta: 'https://www.poder360.com.br/poder-eleicoes-2026/tse-da-48-horas-para-meta-explicar-restricoes-ao-perfil-de-lula/',
  imMeta: 'https://www.infomoney.com.br/politica/tse-questiona-meta-apos-campanha-de-lula-acusar-empresa-de-favorecer-flavio-bolsonaro/',
  odMeta: 'https://olhardigital.com.br/2026/10/10/internet-e-redes-sociais/campanha-de-lula-acusa-meta-de-interferir-nas-eleicoes-no-brasil/',
  odAnthropic: 'https://olhardigital.com.br/2026/10/10/inteligencia-artificial/ia-da-anthropic-denuncia-falso-caso-de-homicidio-a-policia-dos-eua/',
  spaceSda: 'https://www.space.com/space-exploration/launches-spacecraft/spacex-falcon-9-rocket-launch-data-transport-satellites-military-proliferated-architecture',
  odMarte: 'https://olhardigital.com.br/2026/10/10/ciencia-e-espaco/ha-algo-de-muito-estranho-e-grande-pairando-sobre-marte/',
  mwApple: 'https://macworld.com/article/3256451/apple-sets-nyc-experience-next-week-to-showcase-new-smart-home-devices.html',
  /* Atualização de 12 out 2026 */
  abAtoLula: 'https://agenciabrasil.ebc.com.br/politica/noticia/2026-10/ato-pela-reeleicao-de-lula-leva-milhares-a-avenida-paulista',
  tmcAtoLula: 'https://tmc.com.br/politica/lula-paulista-contagem-publico-usp-drones-recusa/',
  otTumulto: 'https://www.otempo.com.br/eleicoes/2026/presidentes/2026/10/11/pm-relata-depredacao-tumulto-e-pichacoes-apos-ato-de-campanha-de-lula-na-avenida-paulista-em-sp',
  emFlavioPrefeitos: 'https://www.em.com.br/politica/2026/10/7518925-flavio-bolsonaro-se-encontra-com-prefeitos-e-vereadores-em-sao-paulo.html',
  abTse6x1: 'https://agenciabrasil.ebc.com.br/justica/noticia/2026-10/tse-barra-anuncios-de-lula-acusando-flavio-de-ser-contra-escala-6x1',
  abExercito: 'https://agenciabrasil.ebc.com.br/politica/noticia/2026-10/corregedor-derruba-decisao-que-suspendeu-canal-exercito-do-lula',
  imExercito: 'https://www.infomoney.com.br/politica/corregedor-do-tse-suspende-decisao-de-nunes-marques-e-libera-canal-exercito-do-lula/',
  bandInsercao: 'https://www.band.com.br/politica/eleicoes/tse-suspende-propaganda-de-lula-que-associa-flavio-e-gaspar-a-escandalos',
  p360Pesquisas: 'https://poder360.com.br/poder-eleicoes-2026/saiba-como-estao-lula-e-flavio-nas-pesquisas-a-14-dias-do-2o-turno',
  metMissa: 'https://www.metropoles.com/colunas/matheus-leitao/flavio-bolsonaro-leva-campanha-a-missa-da-padroeira-e-lula-fica-no-alvorada',
  dpCirio: 'https://diariodopara.com.br/cirio-de-nazare/cirio-de-nazare-chega-ao-fim-apos-seis-horas-de-fe-promessas-e-emocao-em-belem/',
  abCirio: 'https://agenciabrasil.ebc.com.br/cultura/noticia/2026-10/patrimonio-cultural-cirio-de-nazare-reune-fieis-e-turistas-em-belem',
  terraApoios: 'https://www.terra.com.br/noticias/eleicoes/flavio-ou-lula-veja-quem-cada-candidato-a-presidente-derrotado-esta-apoiando-no-2-turno,723e71cf60c7b7ab4db8a79265b240afcmj9rw44.html',
  ajRiade3: 'https://www.aljazeera.com/news/2026/10/11/yemen-fighting-expands-as-houthis-attack-saudi-airport-what-to-know',
  itvRiade: 'https://www.itv.com/news/2026-10-11/at-least-12-killed-in-attack-on-saudi-arabias-riyadh-airport',
  euroEnergia: 'https://www.euronews.com/2026/10/11/energy-ceasefire-agreed-between-russia-and-ukraine-trump-says',
  ajDjibuti: 'https://www.aljazeera.com/news/2026/10/11/at-least-109-dead-over-100-missing-as-migrant-boat-capsizes-off-djibouti',
  ajPaquistao: 'https://www.aljazeera.com/news/2026/10/11/pakistan-imposes-emergency-rule-in-khyber-pakhtunkhwa',
  apPapa: 'https://www.pbs.org/newshour/world/pope-leo-to-undergo-surgery-to-remove-nodule-on-his-lung',
  jijiCoreia: 'https://www.nippon.com/en/news/yjj2026101200185/n-korea-fires-multiple-ballistic-missiles-into-sea-of-japan.html',
  gzDerbi2: 'https://www.gazetaesportiva.com/campeonatos/brasileiro-serie-a/palmeiras-x-corinthians-30-rodada-brasileirao-11-10-2026/',
  cnnDerbi: 'https://www.cnnbrasil.com.br/esportes/brasileirao/palmeiras-da-show-humilha-corinthians-e-mergulha-rival-na-crise/',
  gzSeedorf: 'https://www.gazetaesportiva.com/times/corinthians/corinthians-anuncia-clarence-seedorf-como-novo-tecnico-ate-2027/',
  lanceFlaFlu: 'https://www.lance.com.br/futebol-nacional/flamengo-domina-vence-o-fluminense-e-segue-lider-do-brasileirao.html',
  gzGaloSantos: 'https://www.gazetaesportiva.com/times/santos/atletico-mg-x-santos-brasileirao-2026/',
  lanceGrenal: 'https://www.lance.com.br/futebol-nacional/gremio-e-internacional-empatam-e-dupla-gre-nal-segue-no-z-4.html',
  gzBahia: 'https://www.gazetaesportiva.com/times/bahia/bahia-x-mirassol-campeonato-brasileiro-11-10-26/',
  abF1: 'https://agenciabrasil.ebc.com.br/esportes/noticia/2026-10/f1-verstappen-vence-gp-de-singapura-e-antonelli-fica-perto-do-titulo',
  gzFerroviaria: 'https://www.gazetaesportiva.com/campeonatos/brasileiro-serie-c/ferroviaria-vence-inter-de-limeira-e-garante-acesso-a-serie-b-em-partida-de-dois-dias/',
  metFestivalRio: 'https://www.metropoles.com/entretenimento/a-margem-do-rio-e-mais-os-filmes-vencedores-do-28o-festival-do-rio',
  rtFestivalRio: 'https://www.riotimesonline.com/brazil-festival-do-rio-winners-2026/',
  bbTomZe: 'https://billboard.com.br/90-anos-tom-ze-biografia-sao-paulo/',
  fpTomZe: 'https://www.noticiasaominuto.com.br/fama/2419852/tom-ze-chega-aos-90-diz-ser-dodecafonista-sertanejo-e-que-ja-superou-ostracismo',
  osulSimaria: 'https://www.osul.com.br/simaria-fala-sobre-saude-mental-e-retorno-a-musica-apos-quatro-anos/',
  mnlaBilheteria: 'https://mynewsla.com/hollywood/2026/10/11/other-mommy-opens-with-27-5-million-to-lead-box-office/',
  ansaWilma: 'https://ansabrasil.com.br/brasil/noticias/cultura/2026/10/11/morre-a-atriz-cantora-e-apresentadora-italiana-wilma-de-angelis_f3ddae4d-30da-480e-9a04-078aca69827d.html',
  cnnGasolinaPostos: 'https://www.cnnbrasil.com.br/economia/seu-bolso/meu-dinheiro/veja-quanto-a-gasolina-deve-ficar-mais-barata-apos-intervencao-do-governo/',
  fazGasolina: 'https://www.gov.br/fazenda/pt-br/assuntos/noticias/2026/outubro/governo-federal-prorroga-desoneracao-da-gasolina-e-do-etanol',
  efeFmi: 'https://www.abc.com.py/internacionales/2026/10/11/arrancan-en-bangkok-las-reuniones-mundiales-del-fmi-y-el-bm-con-el-foco-en-la-ia-e-iran/',
  opovoPropostas: 'https://mais.opovo.com.br/jornal/reportagem/2026/10/11/o-que-flavio-e-lula-pensam-para-o-futuro-da-economia-brasileira.html',
  tbMeta: 'https://timesbrasil.com.br/eleicoes-2026/meta-atribui-queda-no-alcance-de-lula-a-falhas-tecnicas/',
  emMeta: 'https://www.em.com.br/politica/2026/10/7518795-meta-nega-interferencia-eleitoral-apos-acusacoes-da-campanha-de-lula.html',
  odChatbots: 'https://olhardigital.com.br/2026/10/10/inteligencia-artificial/china-restringe-chatbots-que-simulam-namoros-e-amizades-virtuais/',
  odMusk: 'https://olhardigital.com.br/2026/10/10/pro/elon-musk-diz-que-spacex-pode-valer-us-12-quatrilhoes-no-futuro/',
  aiHomeView: 'https://appleinsider.com/articles/26/10/11/apple-smart-home-control-center-is-called-homeview',
  tcHomeView: 'https://techcrunch.com/2026/10/11/will-the-homeview-be-apples-first-smart-home-success/',
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

{ id: 'tse-julga-garotinho-eleicao-rio', cat: 'nacional', own: false, t: '2026-10-10T15', d: '10 out 2026', img: 'congresso', src: 'TRE-RJ', url: U.treRuas,
  photo: 'fotos/tse-julga-garotinho-eleicao-rio.webp', photoAlt: 'Fachada do prédio do Tribunal Superior Eleitoral, em Brasília, com a placa do tribunal em primeiro plano', credit: 'Foto: reprodução',
  title: 'TRE-RJ refaz a conta, e Douglas Ruas vence a eleição do Rio no primeiro turno',
  sum: 'Sem os votos anulados de Garotinho, Ruas (PL) ficou com 50,88% dos válidos, e Eduardo Paes (PSD), com 44,16%. A proclamação oficial está marcada para quinta (15), às 15h.',
  body: [
    'A nova totalização retirou da conta os 274.411 votos de Anthony Garotinho (Republicanos), anulados pelo TSE. Os votos válidos passaram a somar 8.394.627, e Ruas manteve os 4.271.199 votos que tinha.',
    'Os partidos têm prazo para examinar os relatórios e apresentar reclamações antes da proclamação. Eduardo Paes desistiu da candidatura na sexta (9), depois que o STF negou o pedido para suspender a decisão do TSE.'
  ] },

{ id: 'pec-6x1-votacao-primeiro-turno-14-outubro', cat: 'nacional', own: false, t: '2026-10-09T17', d: '9 out 2026', img: 'congresso', src: 'Agência Senado', url: U.sen6x1v,
  title: 'Senado marca para quarta (14) a votação da PEC do fim da escala 6x1 em primeiro turno',
  sum: 'Faltam duas sessões de discussão, na terça (13) e na quarta. A proposta precisa de pelo menos 49 votos em cada um dos dois turnos.',
  body: [
    'A data foi anunciada pelo presidente do Senado, Davi Alcolumbre, na sexta-feira (9). A PEC reduz a jornada máxima de 44 para 40 horas semanais, sem corte de salário. O relator, Omar Aziz (PSD-AM), rejeitou as 36 emendas apresentadas.',
    'Depois do primeiro turno, o regimento exige mais três sessões antes da votação final. A líder do governo, Teresa Leitão (PT-PE), recolhe assinaturas para um calendário especial, que permitiria concluir a votação na penúltima semana de outubro.'
  ] },

{ id: 'caso-master-audio-vorcaro-advogado', cat: 'nacional', own: false, t: '2026-10-10T13', d: '10 out 2026', img: 'congresso', src: 'Poder360', url: U.p360Vorcaro,
  title: 'Caso Master: advogado diz que voz em áudio divulgado pela Veja é de Vorcaro',
  sum: 'A revista afirma que o banqueiro relatou pagamentos ligados a um documentário sobre Lula. A PF e a PGR negam ter recebido esse relato, e o Instituto Lula nega ter recebido dinheiro.',
  body: [
    'Segundo o Poder360, o advogado Daniel Bialski disse no sábado (10) que a voz é de Daniel Vorcaro em um dos áudios, mas que não sabe quando nem em que circunstâncias foi gravado. Outra parte da defesa tinha dito na sexta que não confirma o conteúdo do material.',
    'A Polícia Federal afirma que Vorcaro não prestou depoimento com esse teor e que suas propostas de delação foram recusadas. Paulo Okamotto nega que o Instituto Lula tenha recebido recursos, e a campanha de Lula chama a reportagem de farsa.'
  ] },

{ id: 'lula-paulista-flavio-prefeitos-sao-paulo', cat: 'nacional', own: true, t: '2026-10-11T19', d: '11 out 2026', img: 'eleicao', read: 3,
  title: 'Domingo de campanha em São Paulo: Lula faz ato na Paulista, e Flávio reúne prefeitos com Tarcísio e Nunes',
  sum: 'A duas semanas do segundo turno, os dois candidatos concentraram a agenda na capital paulista. Lula falou da votação da PEC do fim da 6x1; Flávio prometeu levar recursos federais aos municípios.',
  body: [
    'Lula (PT) e Flávio Bolsonaro (PL) passaram o domingo (11) em São Paulo, maior colégio eleitoral do país, a 14 dias do segundo turno, marcado para 25 de outubro.',
    '## Lula na Avenida Paulista',
    'O presidente discursou de um carro de som em frente ao Masp, no ato chamado de "Marcha pela Democracia". Segundo a Agência Brasil, a mobilização foi organizada por movimentos sociais e comunidades de fãs, com apoio de torcidas organizadas de Palmeiras e Corinthians, da Parada do Orgulho LGBT+ e de movimentos estudantis, e ocupou a maior parte da avenida.',
    'Lula disse que a semana será decisiva por causa da votação da PEC do fim da escala 6x1 no Senado, marcada para quarta (14), e que ficará claro como o PL vai votar. Ele criticou o corte de gastos proposto pelo adversário, que chamou de "tesouraço", citou a abstenção de 21,08% no primeiro turno e pediu que eleitores com mais de 70 anos votem.',
    'Não houve contagem independente de público. A campanha divulgou cerca de 1 milhão de pessoas; o Monitor do Debate Político, da USP, não fez a estimativa, segundo o portal TMC. Depois do ato, a Polícia Militar relatou tumulto, pichações e depredações durante a dispersão, segundo O Tempo.',
    '## Flávio com prefeitos e vereadores',
    'Flávio fez dois encontros no centro da capital, um com prefeitos e outro com vereadores da região. No primeiro, estiveram o governador Tarcísio de Freitas (Republicanos), o prefeito Ricardo Nunes (MDB) e os senadores eleitos André do Prado (PL) e Guilherme Derrite (PP), segundo o Estado de Minas.',
    'O candidato disse ser "municipalista por convicção" e prometeu que, se eleito, os recursos federais vão chegar aos municípios. Ele criticou o governo Lula, citando endividamento das famílias, impostos e violência contra mulheres, e pediu aos aliados que mobilizem de novo os eleitores que votaram nele no primeiro turno.'
  ],
  box: { type: 'facts', title: 'O domingo dos candidatos', rows: [['Lula (PT)', 'Ato na Avenida Paulista, em frente ao Masp'], ['Flávio Bolsonaro (PL)', 'Encontros com prefeitos e vereadores no centro de SP'], ['Público do ato', 'Sem contagem independente'], ['Segundo turno', '25 de outubro']] },
  sources: [['Agência Brasil', U.abAtoLula], ['Estado de Minas', U.emFlavioPrefeitos], ['TMC', U.tmcAtoLula], ['O Tempo', U.otTumulto]] },

{ id: 'tse-barra-anuncios-lula-libera-exercito-do-lula', cat: 'nacional', own: true, t: '2026-10-11T18', d: '11 out 2026', img: 'congresso', read: 3,
  title: 'TSE barra anúncios e inserção de Lula contra Flávio, mas corregedor libera canal "Exército do Lula"',
  sum: 'O ministro André Mendonça viu propaganda negativa em anúncios sobre a escala 6x1. A suspensão do canal de WhatsApp, decidida por Nunes Marques, foi derrubada horas depois por Villas Bôas Cueva.',
  body: [
    'O Tribunal Superior Eleitoral tomou três decisões sobre a propaganda do segundo turno entre sábado (10) e domingo (11). Todas partiram de pedidos da campanha de Flávio Bolsonaro (PL) contra a de Lula (PT).',
    '## Anúncios sobre a 6x1',
    'No domingo, o ministro André Mendonça mandou suspender anúncios pagos no Facebook em que a campanha de Lula afirma que Flávio é contra o fim da escala 6x1. Segundo a Agência Brasil, ele entendeu que os anúncios foram usados para propaganda negativa, que a lei proíbe: a peça chamava a posição do candidato de "desumana".',
    'A campanha de Lula não pode contratar novos anúncios com esse conteúdo, e a Meta deve desativá-los e informar quanto foi pago. Foram identificados pelo menos dois pagamentos, de R$ 10,4 mil e R$ 15,4 mil.',
    '## Inserção na TV',
    'No sábado, o presidente do TSE, Kassio Nunes Marques, suspendeu em caráter liminar uma inserção de TV de Lula que chamava Flávio e o candidato a vice, Alfredo Gaspar, de "dupla dos escândalos" e citava Daniel Vorcaro. Segundo a Band, o ministro apontou descontextualização, porque a peça omitia que o STF tinha arquivado a representação da PF contra Gaspar.',
    '## Canal no WhatsApp',
    'Também no domingo, Nunes Marques suspendeu o canal "Exército do Lula", com mais de 3,4 milhões de participantes, por replicar conteúdos que o tribunal já tinha considerado inverídicos. Horas depois, o corregedor-geral eleitoral, Ricardo Villas Bôas Cueva, relator do caso, suspendeu a decisão de forma provisória. O tema vai ao plenário. O deputado André Janones (Rede-MG), que coordena o canal, criticou a suspensão.'
  ],
  box: { type: 'facts', title: 'As decisões', rows: [['Anúncios sobre a 6x1', 'Suspensos por André Mendonça'], ['Inserção "dupla dos escândalos"', 'Suspensa por Nunes Marques'], ['Canal "Exército do Lula"', 'Suspenso e liberado no mesmo dia'], ['Próximo passo do canal', 'Plenário do TSE']] },
  sources: [['Agência Brasil', U.abTse6x1], ['Agência Brasil', U.abExercito], ['InfoMoney', U.imExercito], ['Band', U.bandInsercao]] },

{ id: 'pesquisas-segundo-turno-14-dias', cat: 'nacional', own: false, t: '2026-10-11T06', d: '11 out 2026', img: 'eleicao', src: 'Poder360', url: U.p360Pesquisas,
  title: 'A 14 dias do segundo turno, Flávio lidera quatro de cinco pesquisas; Vox Brasil mostra Lula à frente',
  sum: 'Nos votos válidos, Flávio vai de 52% a 53% em PoderData, AtlasIntel, Datafolha e Ipespe. Na Vox Brasil, Lula tem 50,86%, e Flávio, 49,14%.',
  body: [
    'O levantamento do Poder360 reúne as pesquisas divulgadas na semana. A PoderData, feita de 5 a 7 de outubro com 3.000 entrevistas, mostra Flávio Bolsonaro (PL) com 53% dos votos válidos, contra 47% de Lula (PT). AtlasIntel (52,8% a 47,2%), Datafolha (52% a 48%) e Ipespe (52,7% a 47,3%) vão na mesma direção.',
    'A Vox Brasil, presencial, com 2.100 entrevistas de 5 a 7 de outubro, é a exceção: Lula tem 50,86% dos válidos, e Flávio, 49,14%. Não houve pesquisa nacional nova divulgada no fim de semana.'
  ] },

{ id: 'flavio-missa-padroeira-lula-alvorada', cat: 'nacional', own: false, t: '2026-10-11T21', d: '11 out 2026', img: 'eleicao', src: 'Metrópoles', url: U.metMissa,
  title: 'Dia da Padroeira: Flávio vai à missa em Brasília, e Lula passa o feriado no Alvorada',
  sum: 'A missa na Catedral de Brasília é às 11h desta segunda (12). O vice-presidente Geraldo Alckmin deve ir a Aparecida.',
  body: [
    'Segundo a coluna de Matheus Leitão, no Metrópoles, a celebração será presidida pelo cardeal Paulo Cezar Costa e terá também a governadora Celina Leão (PP) e a senadora eleita Bia Kicis (PL-DF). Lula deve ficar no Palácio da Alvorada.',
    'O arcebispo de Aparecida, dom Mário Antônio da Silva, pediu que ninguém vá ao santuário para alimentar divisões.'
  ] },

{ id: 'cirio-de-nazare-belem-2026', cat: 'nacional', own: false, t: '2026-10-11T12', d: '11 out 2026', img: 'cultura', src: 'Diário do Pará', url: U.dpCirio,
  title: 'Círio de Nazaré leva milhões de devotos às ruas de Belém',
  sum: 'A procissão saiu às 6h da Catedral da Sé e chegou à Basílica de Nazaré depois de pouco mais de seis horas.',
  body: [
    'A berlinda com a imagem de Nossa Senhora de Nazaré chegou em frente à Basílica por volta das 12h14 de domingo (11). A corda foi cortada antes das 9h, segundo o Diário do Pará.',
    'O tema deste ano é "Maria, Mãe Missionária que nos dá Jesus". A festa, reconhecida pela Unesco como patrimônio cultural da humanidade, tem 14 procissões entre 7 e 26 de outubro, segundo a Agência Brasil. A organização esperava 2,3 milhões de pessoas; não houve balanço oficial de público.'
  ] },

{ id: 'apoios-segundo-turno-derrotados', cat: 'nacional', own: false, t: '2026-10-11T05', d: '11 out 2026', img: 'eleicao', src: 'Terra', url: U.terraApoios,
  title: 'Segundo turno: veja quem os candidatos derrotados apoiam',
  sum: 'Caiado, Zema, Augusto Cury e Clariana Barão estão com Flávio. Samara Martins, Hertz Dias e Edmilson Costa declararam voto em Lula.',
  body: [
    'Segundo o Terra, Augusto Cury (Avante) disse que o apoio a Flávio Bolsonaro não é um cheque em branco. Hertz Dias e Edmilson Costa (PCB) apoiam Lula com ressalvas.',
    'Renan Santos (Missão) liberou os eleitores em 4 de outubro. Wilson Grassi (Democrata) e Rui Costa Pimenta (PCO) não se posicionaram.'
  ] },

/* ===================== INTERNACIONAL ===================== */

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

{ id: 'terremoto-panama-magnitude-7-7', cat: 'internacional', own: true, t: '2026-10-10T19', d: '10 out 2026', img: 'mundo', read: 3,
  title: 'Panamá decreta estado de emergência após terremoto de magnitude 7,7',
  sum: 'Não há registro de mortes. Cerca de 420 casas e 420 escolas foram danificadas, e 27 pessoas ficaram feridas, segundo o governo.',
  body: [
    'O governo do Panamá decretou estado de emergência no sábado (10), um dia depois do terremoto de magnitude 7,7, o mais forte no país em mais de sete décadas. O anúncio foi feito pelo ministro da Presidência, Juan Carlos Orillac. Segundo a agência AP, as autoridades não atribuíram mortes ao tremor nem registraram desaparecidos.',
    'O tremor principal foi às 12h56 de sexta-feira (9), hora local (14h56 em Brasília), com epicentro na província de Herrera, no sul do país, segundo o Serviço Geológico dos EUA (USGS). Houve um segundo abalo, de magnitude 6,6, e mais de 100 réplicas.',
    '## Estragos',
    'Segundo a AP, 27 pessoas tiveram ferimentos leves ou moderados. Foram danificadas cerca de 420 casas e quase o mesmo número de escolas públicas, além de 7 hotéis, pelo menos 13 igrejas e 9 pontes. A igreja de San Atanasio, em La Villa de Los Santos, declarada patrimônio histórico nacional em 1938, desabou.',
    'Na Ilha Caña, cerca de 300 pessoas foram retiradas por causa do mar agitado. O presidente José Raúl Mulino disse que o desastre é grande. Os EUA prometeram US$ 5 milhões em ajuda humanitária.',
    '## Canal funcionando',
    'O Canal do Panamá, a mais de 190 km do epicentro, continua operando. Na sexta, os EUA chegaram a emitir alerta de tsunami para a costa do Pacífico de outros países da região, suspenso cerca de três horas depois. O tremor foi sentido na Colômbia e na Costa Rica.'
  ],
  box: { type: 'facts', title: 'O terremoto', rows: [['Magnitude', '7,7, segundo o USGS'], ['Réplicas', 'Mais de 100'], ['Mortes', 'Nenhuma registrada'], ['Feridos', '27'], ['Casas danificadas', 'Cerca de 420'], ['Ajuda dos EUA', 'US$ 5 milhões']] },
  sources: [['AP', U.apPanama], ['El Tiempo', U.etPanamaEmerg], ['Business Standard', U.bsPanama], ['El Espectador', U.eePanama]] },

{ id: 'ataque-aeroporto-riade-hutis', cat: 'internacional', own: true, t: '2026-10-11T16', d: '11 out 2026', img: 'mundo', read: 3,
  title: 'Hutis assumem ataque que matou 12 no aeroporto de Riade, e terminal é atingido de novo',
  sum: 'O número de feridos chegou a 309. Trump disse que os EUA podem se juntar à Arábia Saudita contra o grupo do Iêmen e que vai "analisar" a possibilidade.',
  body: [
    'Os hutis, grupo armado do Iêmen, assumiram no domingo (11) o ataque ao Aeroporto Internacional Rei Khalid, em Riade, capital da Arábia Saudita, que matou 12 pessoas no sábado (10). Segundo a Al Jazeera, o número de feridos chegou a 309. O porta-voz militar do grupo, Yahya Saree, disse que a Arábia Saudita é responsável por qualquer falha em interceptar os ataques.',
    'Entre os mortos estão quatro sauditas, dois cidadãos de Bangladesh e uma pessoa de cada um destes países: Estados Unidos, Jordânia, Palestina, Síria, Sudão e Egito. O secretário de Estado americano, Marco Rubio, confirmou a morte de um cidadão dos EUA.',
    '## Novo ataque',
    'No domingo, um projétil atingiu de novo um terminal de passageiros do aeroporto de Riade, deixando feridos e provocando um incêndio em um dos saguões, segundo a ITV News. A coalizão liderada pelos sauditas também relatou um projétil perto do aeroporto de Dammam, no leste do país. As escolas de Riade passaram para o ensino remoto por uma semana.',
    '## Reações',
    'A coalizão chamou o ataque de crime de guerra. O presidente dos EUA, Donald Trump, chamou o ataque de inaceitável e, perguntado se o país entraria na guerra contra os hutis, respondeu que talvez e que vai analisar. O secretário-geral da ONU, António Guterres, condenou o ataque, e Arábia Saudita, Egito, Paquistão e Turquia divulgaram uma condenação conjunta, segundo a CBS News. O Reino Unido, que fornece defesa aérea aos sauditas, falou em escalada perigosa.',
    '## A guerra no Iêmen e no Golfo',
    'Em terra, forças do governo iemenita apoiadas pela Arábia Saudita lançaram em 4 de outubro uma ofensiva contra os hutis. O ataque ocorre durante a guerra entre EUA e Israel, de um lado, e Irã, do outro, iniciada em 28 de fevereiro.'
  ],
  box: { type: 'facts', title: 'O ataque', rows: [['Local', 'Aeroporto Rei Khalid, Riade'], ['Mortos', '12'], ['Feridos', '309'], ['Autoria', 'Assumida pelos hutis, do Iêmen'], ['Escolas de Riade', 'Ensino remoto por uma semana']] },
  sources: [['Al Jazeera', U.ajRiade3], ['ITV News', U.itvRiade], ['Al Jazeera', U.ajRiade2], ['CBS News', U.cbsRiade]] },

{ id: 'abbas-adia-eleicoes-palestinas-2027', cat: 'internacional', own: false, t: '2026-10-10T16', d: '10 out 2026', img: 'mundo', src: 'Euronews', url: U.euroAbbas,
  title: 'Abbas adia eleições palestinas para setembro de 2027',
  sum: 'O pleito legislativo estava marcado para 28 de novembro. Por decreto, as eleições legislativas e presidenciais passam para 11 de setembro de 2027.',
  body: [
    'O presidente da Autoridade Palestina, Mahmoud Abbas, citou obstáculos de segurança e de logística. Segundo a Euronews, o comitê executivo da OLP aprovou o adiamento. As últimas eleições legislativas palestinas foram em 2006.',
    'O chanceler de Israel, Gideon Sa’ar, acusou Abbas de enganar a comunidade internacional.'
  ] },

{ id: 'cessar-fogo-energetico-trump-russia-ucrania', cat: 'internacional', own: false, t: '2026-10-11T18', d: '11 out 2026', img: 'mundo', src: 'Euronews', url: U.euroEnergia,
  title: 'Trump anuncia "cessar-fogo energético" entre Rússia e Ucrânia; usina em Kiev é atingida horas depois',
  sum: 'O Kremlin não confirmou o acordo. Zelensky disse que soube pela imprensa, mas que a Ucrânia aceita se a Rússia também aceitar.',
  body: [
    'Trump escreveu no domingo (11) que o cessar-fogo nos ataques à infraestrutura de energia valia de imediato, sem dar detalhes. Horas depois, segundo a Euronews, um drone atingiu uma usina em Kiev e provocou apagões, e a rede elétrica de Kharkiv também foi atacada.',
    'Zelensky disse que pode organizar eleições se a Rússia aceitar um cessar-fogo total de 60 dias e que a escolha do líder do país cabe aos ucranianos. O presidente francês, Emmanuel Macron, apoiou um cessar-fogo energético real.'
  ] },

{ id: 'ira-resposta-eua-insuficiente-ormuz', cat: 'internacional', own: false, t: '2026-10-11T15', d: '11 out 2026', img: 'mundo', src: 'CBS News', url: U.cbsRiade,
  title: 'Irã chama de insuficiente a resposta dos EUA para encerrar a guerra e ameaça cabos e data centers da região',
  sum: 'Segundo Teerã, Washington aceitou parte das sete condições iranianas. Desde julho, o bloqueio americano obrigou 135 navios a voltar.',
  body: [
    'Mohsen Rezaei, apresentado pela CBS News como chefe do Conselho Supremo de Segurança Nacional do Irã, disse que o país deixou de responder aos EUA nas negociações para encerrar a guerra e reabrir o Estreito de Ormuz. Ele ameaçou atacar cabos, data centers e instalações de inteligência artificial na região se os combates intensos forem retomados.',
    'No sábado (10), um caça americano inutilizou um navio de bandeira panamenha no Golfo de Omã. Segundo o Comando Central dos EUA, desde o início do bloqueio, em 14 de julho, 4 navios foram inutilizados e 10 petroleiros foram destruídos.'
  ] },

{ id: 'naufragio-djibuti-139-migrantes', cat: 'internacional', own: false, t: '2026-10-11T12', d: '11 out 2026', img: 'mundo', src: 'Al Jazeera', url: U.ajDjibuti,
  title: 'Naufrágio perto de Djibuti deixa ao menos 139 migrantes mortos e 84 desaparecidos',
  sum: 'O barco levava mais de 300 pessoas de Djibuti para o Iêmen. Entre os mortos há 15 crianças, segundo a OIM.',
  body: [
    'O barco afundou entre a noite de quinta (8) e a madrugada de sexta (9), perto de Guhere, no Golfo de Áden. Mais de 80 sobreviventes, todos etíopes, foram resgatados, segundo a Organização Internacional para as Migrações, agência da ONU.',
    'A OIM registrou mais de 20 mil chegadas de etíopes a Djibuti desde 10 de setembro.'
  ] },

{ id: 'paquistao-emergencia-khyber-pakhtunkhwa', cat: 'internacional', own: false, t: '2026-10-11T14', d: '11 out 2026', img: 'protesto', src: 'Al Jazeera', url: U.ajPaquistao,
  title: 'Paquistão decreta estado de emergência em província governada pelo partido de Imran Khan',
  sum: 'Segundo o partido PTI, o chefe do governo de Khyber Pakhtunkhwa, Sohail Afridi, foi preso. O governo federal alega falta de empenho no combate ao terrorismo.',
  body: [
    'O presidente Asif Ali Zardari aprovou a medida no domingo (11), por recomendação do gabinete do primeiro-ministro Shehbaz Sharif. Um governador nomeado assume a província com um conselho consultivo, inicialmente por seis meses, segundo o ministro da Justiça.',
    'O PTI chamou a decisão de golpe disfarçado. O partido planejava uma marcha até Islamabad pela libertação de Khan, preso há mais de três anos, e o governo bloqueou os acessos à capital com contêineres.'
  ] },

{ id: 'papa-leao-cirurgia-pulmao', cat: 'internacional', own: false, t: '2026-10-11T09', d: '11 out 2026', img: 'mundo', src: 'AP / PBS', url: U.apPapa,
  title: 'Papa Leão XIV vai passar por cirurgia para retirar nódulo no pulmão',
  sum: 'O nódulo foi detectado no início e está bem localizado, segundo o papa. A recuperação deve levar cerca de uma semana.',
  body: [
    'O papa, de 71 anos, fez o anúncio na oração do Angelus de domingo (11). Segundo a AP, o Vaticano prevê a cirurgia para o início desta semana, provavelmente no Hospital Gemelli, em Roma.',
    'A viagem a Uruguai, Argentina e Peru, de 6 a 17 de novembro, está mantida.'
  ] },

{ id: 'coreia-do-norte-misseis-mar-do-japao', cat: 'internacional', own: false, t: '2026-10-11T21', d: '11 out 2026', img: 'mundo', src: 'Jiji Press / Nippon.com', url: U.jijiCoreia,
  title: 'Coreia do Norte dispara mísseis balísticos em direção ao Mar do Japão',
  sum: 'Os mísseis voaram mais de 900 km e caíram fora da zona econômica exclusiva japonesa.',
  body: [
    'O lançamento foi por volta das 9h20 de segunda-feira (12) no horário local, 21h20 de domingo em Brasília, nas proximidades de Pyongyang, segundo os militares sul-coreanos.',
    'O Estado-Maior da Coreia do Sul vê o disparo como resposta ao primeiro teste de míssil hipersônico sul-coreano. A Coreia do Norte fez um lançamento parecido em 3 de outubro.'
  ] },

/* ===================== ESPORTES ===================== */

{ id: 'corinthians-demite-fernando-diniz', cat: 'esportes', own: true, t: '2026-10-11T11', d: '11 out 2026', img: 'esportes', read: 2,
  title: 'Corinthians anuncia Clarence Seedorf como técnico até dezembro de 2027',
  sum: 'O holandês substitui Fernando Diniz. O contrato prevê rescisão automática em caso de rebaixamento, segundo a CNN Brasil. Horas depois do anúncio, o time perdeu o dérbi por 4 a 1.',
  body: [
    'O Corinthians anunciou na manhã de domingo (11) a contratação do holandês Clarence Seedorf como técnico, com contrato até dezembro de 2027. A chegada e a apresentação devem acontecer nos próximos dias, segundo a Gazeta Esportiva.',
    'Segundo a CNN Brasil, o contrato tem cláusula de rescisão automática se o time for rebaixado para a Série B, com multa equivalente a três salários.',
    '## A busca',
    'Antes de Seedorf, Ramón Díaz, Luis Zubeldía, Sylvinho e Javier Mascherano recusaram a proposta, que previa contrato só até o fim de 2026, segundo o Lance!. Fernando Diniz foi demitido na quarta (7), depois de 33 jogos, com 13 vitórias, 8 empates e 12 derrotas.',
    '## Situação na tabela',
    'No domingo, ainda com o interino William Batista, o Corinthians perdeu para o Palmeiras por 4 a 1, a oitava derrota seguida no Brasileirão. O time tem 32 pontos e está em 16º, um ponto acima da zona de rebaixamento. O próximo jogo é contra o Vitória, em 19 de outubro, na Neo Química Arena.'
  ],
  box: { type: 'facts', title: 'Seedorf no Corinthians', rows: [['Contrato', 'Até dezembro de 2027'], ['Rescisão', 'Automática em caso de rebaixamento'], ['Antecessor', 'Fernando Diniz'], ['Posição do time', '16º, com 32 pontos'], ['Próximo jogo', 'Vitória, 19 de outubro']] },
  sources: [['Gazeta Esportiva', U.gzSeedorf], ['CNN Brasil', U.cnnDerbi], ['Lance!', U.lanceMascherano], ['Gazeta Esportiva', U.gzDerbi2]] },

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

{ id: 'rebeca-andrade-mundial-roterda', cat: 'esportes', own: false, t: '2026-10-07T12', d: '7 out 2026', img: 'esportes', src: 'Piranot', url: U.piraRebeca,
  title: 'Rebeca Andrade lidera a seleção brasileira no Mundial de ginástica de Roterdã',
  sum: 'A competição vai de 17 a 25 de outubro, na Holanda. Rebeca tem a maior nota do ano no salto, 14,800.',
  body: [
    'No feminino, estão Rebeca, Flávia Saraiva, Gabriela Bouças, Lorrane Oliveira, Sophia Weisberg e Thais Fidelis. No masculino, Arthur Nory, Bernardo Miranda, Diogo Soares, Johnny Oshiro, Patrick Corrêa e Vitaly Guimarães. Um atleta de cada equipe será reserva.',
    'Rebeca, dona de seis medalhas olímpicas, deve competir no salto e na trave. Ela foi campeã mundial do salto em 2021 e em 2023. O Mundial abre o ciclo rumo aos Jogos de Los Angeles 2028.'
  ] },

{ id: 'vasco-empata-remo-sao-januario', cat: 'esportes', own: false, t: '2026-10-10T20', d: '10 out 2026', img: 'esportes', src: 'Gazeta Esportiva', url: U.gzVascoRemo,
  title: 'Vasco fica no 0 a 0 com o Remo e encerra sequência de quatro vitórias',
  sum: 'O goleiro Marcelo Rangel, do Remo, fez as principais defesas em São Januário. O Vasco tem 35 pontos e está em 14º.',
  body: [
    'O Remo, penúltimo colocado, chegou a 25 pontos. Pelo Vasco, David e Lucas Piton pararam em Rangel no primeiro tempo.',
    'Na terça (13), o Vasco visita o Boca Juniors, na Bombonera, no jogo de ida da semifinal da Copa Sul-Americana.'
  ] },

{ id: 'palmeiras-goleia-corinthians-derbi', cat: 'esportes', own: true, t: '2026-10-11T20', d: '11 out 2026', img: 'esportes', read: 3,
  title: 'Palmeiras goleia o Corinthians por 4 a 1 e fica a um ponto do Flamengo',
  sum: 'Giay marcou duas vezes no dérbi. O Flamengo venceu o Fluminense e tem 64 pontos, contra 63 do Palmeiras. O Corinthians perdeu a oitava seguida e está um ponto acima da zona de rebaixamento.',
  body: [
    'O Palmeiras venceu o Corinthians por 4 a 1 no domingo (11), no Nubank Parque, pela 30ª rodada do Brasileirão, e segue na briga direta pelo título. No mesmo horário, o líder Flamengo bateu o Fluminense por 1 a 0 no Maracanã.',
    '## O jogo',
    'Barboza abriu o placar de cabeça aos 15 minutos do primeiro tempo, e Giay ampliou aos 45. No começo do segundo tempo, Matheus Bidu fez gol contra, e Giay marcou de novo aos 5 minutos. Gustavo Henrique descontou de cabeça no último lance. O Corinthians foi dirigido pelo interino William Batista, técnico do sub-20. Foram 30.112 pagantes.',
    '## Crise no Corinthians',
    'Foi a oitava derrota seguida do Corinthians no campeonato, segundo a CNN Brasil. O time segue com 32 pontos, fora da zona de rebaixamento por causa do empate entre Grêmio e Internacional. Na manhã do clássico, o clube anunciou o holandês Clarence Seedorf como novo técnico.',
    '## A briga pelo título',
    'O Flamengo chegou a 64 pontos com gol de Carrascal, aos 20 minutos do segundo tempo. O Palmeiras tem 63. Os dois jogam pela semifinal da Libertadores nesta semana: o Palmeiras visita o Fluminense na quarta (14), e o Flamengo enfrenta o Estudiantes na quinta (15).'
  ],
  box: { type: 'table', title: 'Brasileirão depois de domingo (11)', head: ['Clube', 'Pontos'], rows: [['Flamengo', '64'], ['Palmeiras', '63'], ['Fluminense', '51'], ['Bahia', '49'], ['Atlético-MG', '47'], ['Corinthians (16º)', '32'], ['Internacional (17º)', '32'], ['Grêmio (18º)', '31']], note: 'Pontuação segundo Gazeta Esportiva, CNN Brasil e Lance!. Alguns clubes ainda têm jogos da 30ª rodada.' },
  sources: [['Gazeta Esportiva', U.gzDerbi2], ['CNN Brasil', U.cnnDerbi], ['Lance!', U.lanceFlaFlu], ['Lance!', U.lanceGrenal], ['Gazeta Esportiva', U.gzBahia]] },

{ id: 'flamengo-vence-fluminense-carrascal', cat: 'esportes', own: false, t: '2026-10-11T20', d: '11 out 2026', img: 'esportes', src: 'Lance!', url: U.lanceFlaFlu,
  title: 'Carrascal decide, e Flamengo vence o Fluminense no Maracanã',
  sum: 'O 1 a 0, com gol aos 20 minutos do segundo tempo, levou o líder a 64 pontos. O Fluminense segue em 3º, com 51.',
  body: [
    'Jorge Carrascal marcou o gol do clássico de domingo (11), pela 30ª rodada do Brasileirão. Segundo o Lance!, o Flamengo controlou a partida.',
    'Os dois times jogam pela Libertadores nesta semana: o Fluminense recebe o Palmeiras na quarta (14), e o Flamengo visita o Estudiantes na quinta (15).'
  ] },

{ id: 'atletico-mg-vira-santos-acrescimos', cat: 'esportes', own: false, t: '2026-10-11T18', d: '11 out 2026', img: 'esportes', src: 'Gazeta Esportiva', url: U.gzGaloSantos,
  title: 'Atlético-MG vira sobre o Santos nos acréscimos na Arena MRV',
  sum: 'Gabigol abriu o placar aos 42 do segundo tempo, mas Vitor Hugo e Thiago Borbas viraram para 2 a 1.',
  body: [
    'Vitor Hugo empatou aos 46 minutos, e Thiago Borbas fez o gol da vitória aos 52. O Atlético-MG chegou a 47 pontos, e o Santos, que vinha de oito jogos sem perder, ficou com 42.',
    'Na quarta (14), o Atlético recebe o Montevideo City Torque pela semifinal da Sul-Americana.'
  ] },

{ id: 'grenal-empate-dupla-no-z4', cat: 'esportes', own: false, t: '2026-10-11T20', d: '11 out 2026', img: 'esportes', src: 'Lance!', url: U.lanceGrenal,
  title: 'Grêmio e Internacional empatam por 1 a 1, e a dupla segue na zona de rebaixamento',
  sum: 'O Inter tem 32 pontos e está em 17º; o Grêmio, com 31, é o 18º. Na Fonte Nova, o Bahia venceu o Mirassol e voltou ao 5º lugar.',
  body: [
    'Vitinho abriu o placar para o Inter no primeiro tempo, e Wallace empatou aos 27 minutos do segundo, no rebote de uma falta cobrada por Marlon, na Arena do Grêmio.',
    'O Bahia venceu o Mirassol por 1 a 0, com gol de pênalti de Luciano Juba, e chegou a 49 pontos, segundo a Gazeta Esportiva.'
  ] },

{ id: 'f1-verstappen-vence-gp-singapura', cat: 'esportes', own: false, t: '2026-10-11T11', d: '11 out 2026', img: 'pista', src: 'Agência Brasil', url: U.abF1,
  title: 'Verstappen vence o GP de Singapura; Antonelli é 3º e fica perto do título',
  sum: 'Leclerc foi o 2º. Antonelli abriu 102 pontos sobre Russell e pode ser campeão em Austin. Bortoleto abandonou com problema no câmbio.',
  body: [
    'Max Verstappen, da Red Bull, largou na pole e venceu a segunda corrida seguida. Kimi Antonelli, da Mercedes, conquistou o 14º pódio no ano. George Russell, que largou do fundo por punição, terminou em 9º.',
    'Gabriel Bortoleto, da Audi, abandonou por causa de problemas no câmbio, segundo a Agência Brasil. A próxima etapa é nos Estados Unidos.'
  ] },

{ id: 'ferroviaria-inter-de-limeira-acesso-serie-b', cat: 'esportes', own: false, t: '2026-10-11T17', d: '11 out 2026', img: 'esportes', src: 'Gazeta Esportiva', url: U.gzFerroviaria,
  title: 'Ferroviária e Inter de Limeira sobem para a Série B em rodada de dois dias',
  sum: 'Os jogos foram interrompidos no sábado e retomados no domingo (11), com portões fechados. Maringá e Santa Cruz já tinham garantido o acesso.',
  body: [
    'A Ferroviária venceu a Inter de Limeira por 2 a 0, com gols de Lucas Rodrigues e Thiago Montelo no segundo tempo. Brusque e Paysandu empataram por 1 a 1 e continuam na Série C.',
    'A final da Série C será entre Ferroviária e Maringá, em 18 e 25 de outubro.'
  ] },

/* ===================== CULTURA ===================== */

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

{ id: 'tom-ze-90-anos-exposicao', cat: 'cultura', own: true, t: '2026-10-11T09', d: '11 out 2026', img: 'arte', read: 2,
  title: 'Tom Zé chega aos 90 anos com biografia, exposição e disco de inéditas',
  sum: 'A biografia escrita pelo americano Christopher Dunn é lançada na quarta (14), em São Paulo. A exposição na Caixa Cultural, com entrada gratuita, vai até 13 de dezembro.',
  body: [
    'O cantor e compositor Tom Zé completou 90 anos no domingo (11). Nascido em Irará, na Bahia, em 1936, ele é um dos nomes da Tropicália e se define como um "dodecafonista sertanejo", segundo entrevista à Folhapress.',
    '## Livro',
    'A biografia "Tom Zé: Um Vira-Lata na Via Láctea", do pesquisador americano Christopher Dunn, da Universidade Tulane, sai pela editora Alameda. O lançamento é na quarta-feira (14), às 18h30, na Livraria das Perdizes, em São Paulo, segundo a Billboard Brasil.',
    '## Exposição e música',
    'A mostra "Tom Zé – 90 Anos do Inquieto Jardineiro de Sons", com curadoria de Neuseli Martins, fica na Caixa Cultural, na Praça da Sé, até 13 de dezembro, com entrada gratuita. Ela inclui uma réplica do buzinório, instrumento criado pelo músico.',
    'Segundo a Folhapress, estão previstos shows no Rio, em São Paulo e em Florianópolis, o registro de um show antigo na série "Relicário", do Sesc, e um álbum de inéditas, antecipado pela faixa "Futuro Fruto".'
  ],
  box: { type: 'facts', title: 'Tom Zé, 90 anos', rows: [['Nascimento', 'Irará (BA), 1936'], ['Biografia', 'Lançamento em 14 de outubro, em SP'], ['Exposição', 'Caixa Cultural SP, até 13 de dezembro'], ['Entrada', 'Gratuita']] },
  sources: [['Billboard Brasil', U.bbTomZe], ['Folhapress / Notícias ao Minuto', U.fpTomZe], ['Agência Brasil', U.abTomZe]] },

{ id: 'exposicao-margem-de-dentro-sesc-ipiranga', cat: 'cultura', own: false, t: '2026-10-08T12', d: '8 out 2026', img: 'arte', src: 'Agência Brasil', url: U.abMargem,
  title: 'Exposição gratuita no Sesc Ipiranga reúne 26 artistas e propõe outro olhar sobre a história do Brasil',
  sum: '"Margem de Dentro" tem mais de 50 obras, entre pinturas, esculturas, gravuras, fotos e peças têxteis, com curadoria de Claudinei Roberto Silva.',
  body: [
    'A mostra abriu na quarta-feira (7), em São Paulo, e destaca trabalhos feitos à mão, com cimento, cerâmica, madeira e tecido. Segundo a Agência Brasil, o curador liga essas técnicas a saberes de origem africana.',
    'Um mural de Soberana Ziza trata da migração de famílias do interior para São Paulo e homenageia Madrinha Eunice, primeira presidente de uma escola de samba paulistana.'
  ] },

{ id: 'simaria-volta-musica-fantastico', cat: 'cultura', own: false, t: '2026-10-11T22', d: '11 out 2026', img: 'palco', src: 'O Sul', url: U.osulSimaria,
  title: 'Simaria fala no Fantástico sobre saúde mental e a volta à música depois de quatro anos',
  sum: 'A cantora disse que precisava cuidar de si. Ela voltou aos palcos em setembro, na gravação do primeiro DVD da carreira solo.',
  body: [
    'Simaria se afastou dos palcos em junho de 2022 e, em agosto daquele ano, anunciou com a irmã, Simone Mendes, o fim da dupla. A gravação do DVD foi em 12 de setembro, em São Paulo, com ingressos esgotados.',
    'Na entrevista à TV Globo, prevista para domingo (11), ela disse que hoje tem com a irmã uma relação melhor do que na época em que cantavam juntas.'
  ] },

{ id: 'festival-do-rio-premiados-a-margem-do-rio', cat: 'cultura', own: true, t: '2026-10-11T23', d: '11 out 2026', img: 'cultura', read: 2,
  title: '"A Margem do Rio" é o grande vencedor do Festival do Rio',
  sum: 'O longa pernambucano de Enock Carvalho e Matheus Farias levou o Troféu Redentor de melhor ficção, além de fotografia, som e atriz coadjuvante. "Elza", de Eryk Rocha, foi o melhor documentário.',
  body: [
    'O 28º Festival do Rio anunciou os vencedores da mostra competitiva Première Brasil no domingo (11), último dia do evento. O destaque foi "A Margem do Rio", dirigido por Enock Carvalho e Matheus Farias, de Recife, que ganhou o Troféu Redentor de melhor longa de ficção.',
    'O filme também venceu em fotografia, com Luciana Baseggio, e som. O prêmio de atriz coadjuvante foi dividido entre Renna Costa, Artia e Ísis Broken, do elenco do longa.',
    '## Os outros premiados',
    'Gabriel Martins ganhou direção de ficção e roteiro por "Vicentina Pede Desculpas". "Elza", de Eryk Rocha, foi escolhido o melhor documentário, e Camila Valença levou a direção de documentário por "Cão Sem Plumas". O melhor curta foi "Santo", de Maria Luísa Alves.',
    'Victor di Marco foi eleito melhor ator por "London". O prêmio de atriz foi dividido entre Isabel Teixeira, por "Diário do Fogo", e Grace Passô, por "A Professora de Francês".',
    '## O festival',
    'O evento ocupou salas do Rio e de Niterói entre 1º e 11 de outubro, com mais de 350 filmes, segundo a Agência Brasil. A organização ainda não divulgou o público final.'
  ],
  box: { type: 'facts', title: 'Troféu Redentor 2026', rows: [['Longa de ficção', '"A Margem do Rio"'], ['Documentário', '"Elza", de Eryk Rocha'], ['Curta', '"Santo", de Maria Luísa Alves'], ['Direção de ficção', 'Gabriel Martins'], ['Ator', 'Victor di Marco'], ['Atriz', 'Isabel Teixeira e Grace Passô']] },
  sources: [['Metrópoles', U.metFestivalRio], ['Rio Times', U.rtFestivalRio], ['Agência Brasil', U.abFestivalRio]] },

{ id: 'other-mommy-lidera-bilheteria-eua', cat: 'cultura', own: false, t: '2026-10-11T20', d: '11 out 2026', img: 'cultura', src: 'MyNewsLA', url: U.mnlaBilheteria,
  title: 'Terror "Other Mommy", com Jessica Chastain, estreia em 1º nas bilheterias dos EUA',
  sum: 'O filme de Rob Savage arrecadou US$ 27,5 milhões no fim de semana. "Verity" caiu para o 2º lugar.',
  body: [
    '"Verity" fez US$ 11,4 milhões no segundo fim de semana. Completam a lista "Resident Evil" (US$ 8,3 milhões), "Heart of the Beast" (US$ 7,1 milhões) e a estreia "The Social Reckoning" (US$ 5,5 milhões), segundo estimativas divulgadas no domingo (11).'
  ] },

{ id: 'morre-wilma-de-angelis', cat: 'cultura', own: false, t: '2026-10-11T18', d: '11 out 2026', img: 'palco', src: 'ANSA Brasil', url: U.ansaWilma,
  title: 'Morre a cantora e apresentadora italiana Wilma De Angelis, aos 96 anos',
  sum: 'Ela participou nove vezes do Festival de Sanremo e foi apresentadora de programas de culinária na TV.',
  body: [
    'Wilma De Angelis morreu no domingo (11), em Milão. A morte foi confirmada pelo sobrinho; a causa não foi divulgada.',
    'Em 1960, ficou em 3º lugar em Sanremo com "Quando vien la sera", em dueto com Joe Sentieri. Segundo a ANSA, foi eleita "rainha do jazz italiano" em 1956.'
  ] },

/* ===================== ECONOMIA ===================== */

{ id: 'bets-saem-do-ar-devolucao-saldos', cat: 'economia', own: true, t: '2026-10-10T12', d: '10 out 2026', img: 'celular', read: 3,
  title: 'Bets: mais de R$ 1 bilhão já foi devolvido a apostadores; AGU vai à Justiça contra 8 empresas',
  sum: 'Faltam R$ 159 milhões. Os bancos têm até 14 de outubro para pagar, direto na conta usada nos depósitos. Depois, a Caixa assume os casos pendentes.',
  body: [
    'Mais de R$ 1 bilhão que estava nas plataformas de apostas on-line já voltou para os apostadores, informou o governo no sábado (10), segundo a Agência Brasil. O saldo que falta pagar caiu de R$ 1,2 bilhão para R$ 159 milhões. As bets estão fora do ar desde terça (6) por causa da medida provisória 1.394/2026.',
    'Pelos dados mais recentes, o dinheiro pertence a 22,5 milhões de apostadores, em 70,5 milhões de contas. Os números são menores que os divulgados na sexta (9), de R$ 1,325 bilhão e 26,5 milhões de pessoas. Em 90% das contas, há menos de R$ 1 a receber.',
    '## Empresas que não colaboraram',
    'Oito empresas de apostas, cujos nomes não foram divulgados, não enviaram aos bancos os dados dos clientes. A Advocacia-Geral da União vai à Justiça para obrigá-las a fazer isso.',
    '## Como funciona',
    'Os bancos usam o CPF do cliente e a conta usada nos depósitos, informados pelas empresas. O apostador deve acompanhar o extrato e os avisos do banco. Os casos não resolvidos até 14 de outubro passam para a Caixa.',
    '## Cuidado com golpes',
    'A recomendação é usar só os canais oficiais do governo e do banco e nunca informar senhas ou códigos. Mensagens que pedem pagamento antecipado para liberar o dinheiro devem ser vistas com desconfiança.',
    '## Sites ilegais',
    'Segundo a CNN Brasil, o governo encaminhou para bloqueio 16.627 sites ilegais de apostas entre 25 de setembro e 9 de outubro.'
  ],
  box: { type: 'steps', title: 'Calendário da devolução', steps: [['Até 8 de outubro', 'As empresas informaram os saldos dos clientes aos bancos.'], ['9 a 14 de outubro', 'Os bancos devolvem o dinheiro na conta do apostador.'], ['A partir de 14 de outubro', 'A Caixa assume os casos pendentes.']] },
  sources: [['Agência Brasil', U.abBetsDevolvidos], ['CNN Brasil', U.cnnBetsSites], ['IstoÉ', U.istoeBets], ['Agência Brasil', U.abBets]] },

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

{ id: 'mercado-flavio-compromissos-fiscais', cat: 'economia', own: false, t: '2026-10-10T09', d: '10 out 2026', img: 'mercado', src: 'InfoMoney / Estadão Conteúdo', url: U.imFiscalFlavio,
  title: 'Otimismo do mercado com Flávio esbarra na falta de detalhes sobre o ajuste fiscal',
  sum: 'Economistas ouvidos pelo Estadão dizem que a campanha ainda não explicou quais gastos vai cortar. Assessores afirmam que Bolsa Família e BPC não serão afetados.',
  body: [
    'Segundo a reportagem, uma economista da FGV estima que o ajuste em discussão seria de R$ 200 bilhões a R$ 250 bilhões, sem definição de despesas, método ou prazo. Assessores de Flávio Bolsonaro (PL) dizem que não há intenção de mexer no Bolsa Família, no BPC nem na regra do salário mínimo.',
    'Analistas de mercado avaliam que a Bolsa pode devolver parte da alta se a sinalização continuar vaga.'
  ] },

{ id: 'b3-feriado-12-outubro', cat: 'economia', own: false, t: '2026-10-10T08', d: '10 out 2026', img: 'mercado', src: 'B3', url: U.b3Feriado,
  title: 'B3 fecha na segunda (12) pelo feriado de Nossa Senhora Aparecida',
  sum: 'Não haverá pregão nem operações do Tesouro Direto. Os negócios voltam na terça-feira (13).',
  body: [
    'Com o feriado, o último fechamento do Ibovespa segue sendo o de sexta (9), quando o índice bateu recorde aos 209.066,90 pontos. O dólar terminou a R$ 4,985.'
  ] },

{ id: 'gasolina-pode-cair-26-centavos-postos', cat: 'economia', own: false, t: '2026-10-09T19', d: '9 out 2026', img: 'plataforma', src: 'CNN Brasil', url: U.cnnGasolinaPostos,
  title: 'Gasolina pode ficar até R$ 0,26 mais barata nos postos, estima o governo',
  sum: 'O cálculo depende de as distribuidoras e os postos repassarem o corte de tributos. O preço médio estava em R$ 6,54 por litro, segundo a ANP.',
  body: [
    'A estimativa é do governo, que prorrogou e ampliou a isenção de tributos federais sobre a gasolina por 30 dias. O ministro do Planejamento, Bruno Moretti, disse que o objetivo é que haja repasse para a bomba.',
    'Segundo o Ministério da Fazenda, o decreto anterior vencia em 9 de outubro. A redução passou de R$ 0,63 para R$ 0,89 por litro.'
  ] },

{ id: 'fmi-banco-mundial-reunioes-bangkok', cat: 'economia', own: false, t: '2026-10-12T00', d: '12 out 2026', img: 'mercado', src: 'EFE / ABC Color', url: U.efeFmi,
  title: 'FMI e Banco Mundial abrem reuniões anuais em Bangkok, com foco em IA e na guerra no Irã',
  sum: 'O encontro vai até 18 de outubro. O FMI divulga nesta semana as novas projeções de crescimento para cada país.',
  body: [
    'As reuniões reúnem delegações de 191 países. O primeiro evento aberto teve a diretora do FMI, Kristalina Georgieva, e o presidente do Banco Mundial, Ajay Banga, em debate sobre inteligência artificial e emprego.',
    'Segundo a EFE, as projeções do FMI e os relatórios de estabilidade financeira e de monitoramento fiscal saem entre 13 e 14 de outubro.'
  ] },

{ id: 'propostas-economicas-lula-flavio', cat: 'economia', own: false, t: '2026-10-11T08', d: '11 out 2026', img: 'mercado', src: 'O Povo', url: U.opovoPropostas,
  title: 'Salário mínimo, gastos e 6x1: o que Lula e Flávio propõem para a economia',
  sum: 'Lula mantém o arcabouço fiscal e a regra de ganho real do mínimo. Flávio propõe corte de R$ 250 bilhões em despesas e correção do mínimo só pela inflação.',
  body: [
    'Segundo O Povo, Lula defende o fim da escala 6x1, com jornada de 40 horas, e o salário mínimo corrigido pelo INPC mais o crescimento do PIB, com ganho real limitado a 2,5%.',
    'Flávio Bolsonaro propõe cortar R$ 250 bilhões em despesas discricionárias, reduzir dez ministérios e investir R$ 900 bilhões em transportes por meio de concessões e parcerias. Os dois mantêm o Bolsa Família em R$ 691.'
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

{ id: 'tse-meta-48-horas-perfis-lula', cat: 'tecnologia', own: true, t: '2026-10-11T18', d: '11 out 2026', img: 'celular', read: 3,
  title: 'Meta atribui a falhas técnicas a queda de alcance de Lula; prazo do TSE termina nesta segunda',
  sum: 'A empresa nega favorecer Flávio Bolsonaro e diz que os problemas não atingiram só o Brasil. O TSE deu 48 horas, a partir de sábado (10), para a Meta responder a seis perguntas.',
  body: [
    'A Meta, dona do Facebook e do Instagram, afirmou no domingo (11) que problemas técnicos explicam a queda no alcance de publicações de Lula (PT) apontada pela campanha do presidente. Segundo o Times Brasil e o Estado de Minas, a empresa disse que as falhas não afetaram só o Brasil nem contas específicas, e negou favorecer Flávio Bolsonaro (PL).',
    'Em nota, a Meta classificou as alegações como falsas e sem respaldo nos fatos, e disse cumprir as normas eleitorais com igualdade entre os candidatos.',
    '## O que o TSE quer saber',
    'No sábado (10), o ministro Marco Aurélio Bellizze deu 48 horas para a Meta explicar as medidas aplicadas aos perfis de Lula desde 16 de agosto, falhas na contagem de visualizações de vídeos de 7 de outubro e a desativação da conta de anúncios do candidato em 23 de setembro. A empresa também deve dizer se identificou uma rede de 255 perfis automatizados com inteligência artificial, que teriam somado 58 milhões de visualizações em um mês.',
    'Depois da resposta, a coligação de Lula e a Procuradoria-Geral Eleitoral têm 24 horas cada para se manifestar, segundo o Poder360. A Agência Lupa e o Instituto Democracia em Xeque, citados no pedido, também receberam prazo de 48 horas. Até a manhã desta segunda (12), não havia registro público de que a Meta tivesse entregado a resposta.',
    '## Os números da campanha',
    'Um levantamento da Secretaria de Comunicação do PT afirma que a página de Flávio teve, em média, 2,96 vezes mais engajamento que a de Lula, com 17,2% menos seguidores. A campanha também acionou a Autoridade Nacional de Proteção de Dados.'
  ],
  box: { type: 'facts', title: 'O caso', rows: [['Autor do pedido', 'Coligação de Lula'], ['Prazo da Meta', '48 horas, desde sábado (10)'], ['Relator', 'Marco Aurélio Bellizze'], ['Perfis automatizados citados', '255'], ['Versão da Meta', 'Falhas técnicas, sem favorecimento']] },
  sources: [['Times Brasil', U.tbMeta], ['Estado de Minas', U.emMeta], ['Poder360', U.p360Meta], ['Olhar Digital', U.odMeta]] },

{ id: 'anthropic-ia-pista-falsa-policia', cat: 'tecnologia', own: false, t: '2026-10-10T18', d: '10 out 2026', img: 'tecnologia', src: 'Olhar Digital', url: U.odAnthropic,
  title: 'IA da Anthropic enviou pista falsa sobre homicídio à polícia da Filadélfia',
  sum: 'A empresa diz que o envio partiu de um teste automatizado, já encerrado. A polícia afirma que a mensagem foi marcada como spam.',
  body: [
    'A mensagem foi mandada em julho por um site que recebe informações sobre homicídios não resolvidos. Segundo a Olhar Digital, a Anthropic detectou o caso em 28 de setembro e avisou a polícia em 7 de outubro.',
    'A polícia da Filadélfia disse que não há sinal de invasão dos seus sistemas e considerou inaceitável a demora de dois meses para comunicar o caso.'
  ] },

{ id: 'spacex-21-satelites-militares-eua', cat: 'tecnologia', own: false, t: '2026-10-10T06', d: '10 out 2026', img: 'ciencia', src: 'Space.com', url: U.spaceSda,
  title: 'SpaceX lança 21 satélites militares de comunicação dos EUA',
  sum: 'O foguete Falcon 9 decolou da Califórnia no sábado (10), cinco dias depois de uma tentativa abortada no último minuto.',
  body: [
    'Os satélites, feitos pela Northrop Grumman, são de uma rede de transmissão de dados da Força Espacial americana. O primeiro estágio do foguete pousou cerca de sete minutos depois da decolagem, no sexto voo.',
    'Segundo o Space.com, foi o 111º voo do Falcon 9 em 2026.'
  ] },

{ id: 'nuvem-marte-1800-km', cat: 'tecnologia', own: false, t: '2026-10-10T11', d: '10 out 2026', img: 'ciencia', src: 'Olhar Digital', url: U.odMarte,
  title: 'Estudo explica nuvem de 1.800 km que aparece perto de vulcão em Marte',
  sum: 'Segundo os cientistas, o vapor de água vira gelo sem precisar de poeira, processo nunca visto antes em atmosferas de planetas.',
  body: [
    'A nuvem se forma em algumas manhãs perto do vulcão Arsia Mons e dura poucas horas. Foi vista pela primeira vez em 2018 pela sonda Mars Express, da Agência Espacial Europeia.',
    'O estudo, publicado na revista Nature Geoscience, é liderado por Jorge Hernández-Bernal, de instituições de pesquisa francesas. Os autores dizem que o modelo não reproduz todos os detalhes.'
  ] },

{ id: 'apple-evento-casa-inteligente-13-outubro', cat: 'tecnologia', own: false, t: '2026-10-11T12', d: '11 out 2026', img: 'celular', src: 'AppleInsider', url: U.aiHomeView,
  title: 'Apple deve apresentar central de casa inteligente no evento desta terça (13), diz Bloomberg',
  sum: 'Segundo o jornalista Mark Gurman, o aparelho se chamará HomeView. A Apple não confirmou quais produtos vai mostrar.',
  body: [
    'O evento, com o mote "Welcome Home", será em Nova York, às 10h de Brasília. Segundo os relatos, o aparelho terá tela, será controlado principalmente por voz, com a Siri, e terá versões de mesa e de parede.',
    'Segundo o TechCrunch, também podem ser apresentados uma nova Apple TV e um HomePod mini atualizado. As informações não foram confirmadas pela empresa.'
  ] },

{ id: 'china-restringe-chatbots-companhia', cat: 'tecnologia', own: false, t: '2026-10-10T17', d: '10 out 2026', img: 'tecnologia', src: 'Olhar Digital', url: U.odChatbots,
  title: 'China restringe chatbots que simulam namoro e amizade',
  sum: 'Menores de 18 anos não poderão usar parceiros românticos virtuais. A multa para as empresas chega a 200 mil yuans.',
  body: [
    'Menores de 14 anos precisarão de autorização dos pais para usar esse tipo de inteligência artificial. Os sistemas devem avisar a cada duas horas há quanto tempo a pessoa está conectada.',
    'Segundo a Olhar Digital, Alibaba e ByteDance encerraram funções de companhia em seus assistentes.'
  ] },

{ id: 'musk-spacex-12-quatrilhoes', cat: 'tecnologia', own: false, t: '2026-10-10T13', d: '10 out 2026', img: 'ciencia', src: 'Olhar Digital', url: U.odMusk,
  title: 'Musk diz que a SpaceX pode um dia valer US$ 12 quatrilhões',
  sum: 'A empresa vale cerca de US$ 2,2 trilhões. Chegar à cifra exigiria uma valorização de cerca de 5.500 vezes.',
  body: [
    'Musk escreveu no X que a chance "não é zero". Segundo a Olhar Digital, a SpaceX teve receita de US$ 7,8 bilhões no segundo trimestre, alta de 92%, e prejuízo de US$ 541 milhões.'
  ] },

];
