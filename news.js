/* ============================================================
   NOVERA: conteúdo do site. Edite este arquivo e rode `node build.js`.
   Regras completas em ATUALIZACAO.md.
   ============================================================ */

/* Topo do site: data da edição e mercado */
const META = {
  /* Endereço público do site, sem barra no final. Usado nos links das redes sociais. */
  siteUrl: 'https://novera-sepia.vercel.app',
  dataExtenso: 'Domingo, 11 de outubro de 2026',
  edicao: '11 out 2026',
  ibovespa: { valor: '209.067', variacao: '1,38%', sobe: true },
  dolar: { valor: 'R$ 4,98', variacao: '0,78%', sobe: false },
  fechamento: '9/10'
};

/* Home: destaque principal, dois laterais e três da faixa de baixo (IDs de notícias "own: true") */
const FEATURED = {
  lead: 'ataque-aeroporto-riade-hutis',
  side: ['tse-julga-garotinho-eleicao-rio', 'tse-meta-48-horas-perfis-lula'],
  also: ['bets-saem-do-ar-devolucao-saldos', 'terremoto-panama-magnitude-7-7', 'corinthians-demite-fernando-diniz']
};

/* Home: "Escolhas da redação" (5 IDs) */
const PICKS = ['datafolha-segundo-turno-flavio-49-lula-45', 'gasolina-impostos-zerados-subsidio-diesel', 'caso-master-stf-fachin-pf-13-outubro', 'libertadores-semifinais-tres-brasileiros', 'nobel-paz-navi-pillay'];

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

{ id: 'tse-julga-garotinho-eleicao-rio', cat: 'nacional', own: true, t: '2026-10-10T15', d: '10 out 2026', img: 'congresso', read: 3,
  photo: 'fotos/tse-julga-garotinho-eleicao-rio.webp', photoAlt: 'Fachada do prédio do Tribunal Superior Eleitoral, em Brasília, com a placa do tribunal em primeiro plano', credit: 'Foto: reprodução',
  title: 'TRE-RJ refaz a conta, e Douglas Ruas vence a eleição do Rio no primeiro turno',
  sum: 'Sem os votos anulados de Garotinho, Ruas (PL) ficou com 50,88% dos válidos, e Eduardo Paes (PSD), com 44,16%. A proclamação oficial está marcada para quinta (15).',
  body: [
    'O Tribunal Regional Eleitoral do Rio de Janeiro concluiu no sábado (10) a nova totalização dos votos para governador. Douglas Ruas (PL) passou de 49,27% para 50,88% dos votos válidos e venceu no primeiro turno. Eduardo Paes (PSD) foi de 42,76% para 44,16%.',
    'Segundo o tribunal, não houve voto novo: os registros das urnas são os mesmos, mas os 274.411 votos de Anthony Garotinho (Republicanos) saíram da conta. Os votos válidos passaram a somar 8.394.627. Ruas manteve os 4.271.199 votos e ficou cerca de 74 mil acima da maioria absoluta, segundo o Poder360.',
    '## Próximos passos',
    'Os partidos têm três dias para examinar os relatórios e mais dois para apresentar reclamações. O resultado definitivo será proclamado em sessão do plenário do TRE-RJ em 15 de outubro, às 15h. Até lá, ficam suspensos os preparativos e a propaganda do segundo turno para governador.',
    '## Como se chegou aqui',
    'Na quinta-feira (8), o TSE decidiu por 5 votos a 2 que Garotinho estava com os direitos políticos suspensos pela Lei da Ficha Limpa quando se filiou ao Republicanos, e anulou os votos dele. O ministro Cristiano Zanin, do STF, negou o pedido de Paes para suspender a decisão.',
    'Na sexta (9), Paes desistiu da candidatura. Em nota, disse que decisões judiciais devem ser cumpridas, mas que a maioria dos eleitores queria o segundo turno, e agradeceu os mais de 3,7 milhões de votos.'
  ],
  box: { type: 'facts', title: 'Governo do RJ: a nova conta', rows: [['Douglas Ruas (PL)', '50,88% (4.271.199 votos)'], ['Eduardo Paes (PSD)', '44,16%'], ['Votos válidos', '8.394.627'], ['Votos anulados de Garotinho', '274.411'], ['Proclamação', '15 de outubro, às 15h']] },
  sources: [['TRE-RJ', U.treRuas], ['Poder360', U.p360Ruas], ['Band', U.bandRuas], ['Agência Brasil', U.abPaes], ['Agência Brasil', U.abTseRio]] },

{ id: 'atlasintel-flavio-51-lula-45-segundo-turno', cat: 'nacional', own: false, t: '2026-10-09T15', d: '9 out 2026', img: 'eleicao', src: 'InfoMoney', url: U.imAtlas,
  title: 'AtlasIntel: Flávio tem 51,1% e Lula, 45,7%, no segundo turno',
  sum: 'Nos votos válidos, o placar é de 52,8% a 47,2%. A pesquisa, feita para a Bloomberg, tem margem de erro de 1 ponto.',
  body: [
    'O levantamento ouviu 5.026 pessoas entre 3 e 8 de outubro e está registrado no TSE com o número BR-03663/2026. Brancos, nulos e indecisos somam 3,2%. Na pesquisa anterior, encerrada em 2 de outubro, Lula tinha 47,6% e Flávio, 47,4%.',
    'Segundo o InfoMoney, 53,4% desaprovam o desempenho de Lula, e 44,7% aprovam. No tema da pobreza e da desigualdade, os dois candidatos empatam em confiança, com 48% cada.'
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

{ id: 'lula-natal-governadores-nordeste', cat: 'nacional', own: false, t: '2026-10-10T12', d: '10 out 2026', img: 'eleicao', src: 'Metrópoles', url: U.metLulaNatal,
  title: 'Lula faz caminhada em Natal com governadores do Nordeste',
  sum: 'Foi o primeiro ato do presidente na região no segundo turno. Neste domingo (11), ele tem ato na Avenida Paulista, em São Paulo.',
  body: [
    'A caminhada foi na manhã de sábado (10), no bairro do Alecrim, ao lado de Cadu Xavier (PT), candidato ao governo do Rio Grande do Norte. Participaram os governadores Fátima Bezerra (RN), Jerônimo Rodrigues (BA), Elmano de Freitas (CE) e Lucas Ribeiro (PB), além do senador eleito Rui Costa (PT-BA).',
    'Segundo o Metrópoles, Lula pediu votos contra a direita no Nordeste. A agenda deste domingo prevê ato ao meio-dia na Avenida Paulista, com Guilherme Boulos.'
  ] },

{ id: 'flavio-motociata-sao-goncalo-maracanazinho', cat: 'nacional', own: false, t: '2026-10-10T15', d: '10 out 2026', img: 'eleicao', src: 'Poder360', url: U.p360FlavioSG,
  title: 'Flávio faz motociata em São Gonçalo e promete endurecer o combate ao crime',
  sum: 'No Rio, o candidato esteve com o governador eleito Douglas Ruas e foi a um culto no Maracanãzinho. Neste domingo (11), ele se reúne com prefeitos em São Paulo.',
  body: [
    'A motociata foi na manhã de sábado (10), em São Gonçalo, com Douglas Ruas (PL) e o deputado Carlos Jordy. Segundo o Poder360, Flávio prometeu declarar guerra ao narcotráfico, reduzir a maioridade penal e endurecer a punição para o roubo de celulares. Ele também disse que receberá a faixa presidencial do pai, Jair Bolsonaro, que cumpre pena por tentativa de golpe.',
    'À tarde, foi à celebração dos 100 anos da Assembleia de Deus Ministério de Madureira, no Maracanãzinho. Neste domingo, a agenda prevê encontros com prefeitos e vereadores da Grande São Paulo.'
  ] },

{ id: 'ipespe-flavio-52-7-lula-47-3', cat: 'nacional', own: false, t: '2026-10-10T10', d: '10 out 2026', img: 'eleicao', src: 'CNN Brasil', url: U.cnnIpespe,
  title: 'Ipespe: Flávio tem 52,7% e Lula, 47,3%, dos votos válidos',
  sum: 'A pesquisa ouviu 1.500 pessoas de 6 a 8 de outubro. A margem de erro é de 2,6 pontos.',
  body: [
    'O levantamento foi feito para a Abrapel por recrutamento digital aleatório e está registrado no TSE com o número BR-00933/2026. Segundo a CNN Brasil, custou R$ 105 mil, pagos com recursos próprios.',
    'O resultado vai na mesma direção do Datafolha e da AtlasIntel divulgados nesta semana, que também mostram Flávio Bolsonaro (PL) à frente de Lula (PT).'
  ] },

{ id: 'caso-master-audio-vorcaro-advogado', cat: 'nacional', own: false, t: '2026-10-10T13', d: '10 out 2026', img: 'congresso', src: 'Poder360', url: U.p360Vorcaro,
  title: 'Caso Master: advogado diz que voz em áudio divulgado pela Veja é de Vorcaro',
  sum: 'A revista afirma que o banqueiro relatou pagamentos ligados a um documentário sobre Lula. A PF e a PGR negam ter recebido esse relato, e o Instituto Lula nega ter recebido dinheiro.',
  body: [
    'Segundo o Poder360, o advogado Daniel Bialski disse no sábado (10) que a voz é de Daniel Vorcaro em um dos áudios, mas que não sabe quando nem em que circunstâncias foi gravado. Outra parte da defesa tinha dito na sexta que não confirma o conteúdo do material.',
    'A Polícia Federal afirma que Vorcaro não prestou depoimento com esse teor e que suas propostas de delação foram recusadas. Paulo Okamotto nega que o Instituto Lula tenha recebido recursos, e a campanha de Lula chama a reportagem de farsa.'
  ] },

/* ===================== INTERNACIONAL ===================== */
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

{ id: 'furacao-isaias-golfo-eua', cat: 'internacional', own: false, t: '2026-10-10T23', d: '10 out 2026', img: 'mundo', src: 'CBS News', url: U.cbsIsaias,
  title: 'Isaias deixa pelo menos 4 mortos e chegou a cortar a luz de 884 mil clientes nos EUA',
  sum: 'Duas mortes foram na Flórida e duas no Alabama. A tempestade perdeu força e deve se dissipar neste domingo (11), mas ainda há risco de enchentes.',
  body: [
    'Segundo a CBS News, duas pessoas morreram com a queda de árvores sobre casas, uma em Escambia, na Flórida, e outra em Birmingham, no Alabama. Um homem foi achado morto numa garagem fechada com um gerador ligado, e o governo do Alabama confirmou outra morte, sem detalhar a causa.',
    'Na manhã de sábado (10), mais de 884 mil clientes estavam sem luz na Flórida, no Alabama e na Geórgia. O Isaias, que tocou terra perto de Destin como furacão de categoria 2, virou um ciclone pós-tropical. Há alertas de inundação em partes do sudeste.'
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

{ id: 'ataque-aeroporto-riade-hutis', cat: 'internacional', own: true, t: '2026-10-10T20', d: '10 out 2026', img: 'mundo', read: 3,
  title: 'Ataque ao aeroporto de Riade mata 12 pessoas; Arábia Saudita acusa os hutis',
  sum: 'Cerca de 300 pessoas ficaram feridas. Trump disse que os EUA avaliam entrar na guerra contra o grupo do Iêmen.',
  body: [
    'Um ataque ao Aeroporto Internacional Rei Khalid, em Riade, capital da Arábia Saudita, matou pelo menos 12 pessoas no sábado (10), segundo a autoridade de aviação civil do país. Cerca de 300 pessoas ficaram feridas. A Al Jazeera classificou o ataque como o mais letal no reino em mais de uma década.',
    'Entre os mortos estão quatro sauditas, dois cidadãos de Bangladesh e uma pessoa de cada um destes países: Estados Unidos, Jordânia, Palestina, Síria, Sudão e Egito. O secretário de Estado americano, Marco Rubio, confirmou a morte de um cidadão dos EUA.',
    '## Quem é acusado',
    'O governo saudita atribui o ataque aos hutis, grupo armado do Iêmen, e conduz uma campanha aérea contra eles. Segundo a CBS News, não houve reivindicação formal, mas um dirigente de mídia do grupo escreveu nas redes que os hutis tinham fechado o aeroporto. Foi o terceiro ataque ao aeroporto de Riade na semana.',
    '## Reações',
    'O presidente dos EUA, Donald Trump, chamou o ataque de terrível, disse que vai conversar com o príncipe herdeiro Mohammed bin Salman e afirmou que o país avalia entrar na guerra contra os hutis. O secretário-geral da ONU, António Guterres, disse estar profundamente chocado. Egito, Catar, Paquistão, Jordânia, Japão e Canadá também condenaram o ataque.',
    '## No Golfo',
    'O ataque ocorre durante a guerra entre EUA e Israel, de um lado, e Irã, do outro, iniciada em 28 de fevereiro. Na quinta (8), Trump disse que não atacaria o Irã antes das eleições americanas de 3 de novembro.'
  ],
  box: { type: 'facts', title: 'O ataque', rows: [['Local', 'Aeroporto Rei Khalid, Riade'], ['Mortos', 'Pelo menos 12'], ['Feridos', 'Cerca de 300'], ['Acusados', 'Hutis, do Iêmen'], ['Ataques ao aeroporto na semana', '3']] },
  sources: [['Al Jazeera', U.ajRiade2], ['Al Jazeera / Reuters', U.ajRiade], ['CBS News', U.cbsRiade], ['InfoMoney / Reuters', U.imTrumpIra]] },

{ id: 'trump-ucrania-novo-presidente-diesel-russo', cat: 'internacional', own: false, t: '2026-10-10T18', d: '10 out 2026', img: 'mundo', src: 'AP', url: U.apTrumpUcrania,
  title: 'Trump diz que a Ucrânia precisa de novo presidente após Zelensky criticar acordo de diesel com a Rússia',
  sum: 'Pelo acordo anunciado por Trump, a Rússia fornecerá diesel aos EUA. Zelensky disse que a Rússia respondeu à suspensão de sanções com bombardeios.',
  body: [
    'Segundo a AP, Trump culpou Zelensky pela alta do diesel e afirmou que é hora de a Ucrânia ter um novo presidente. Pelo acordo anunciado por ele na sexta (9), a Rússia fornece de imediato mais de 300 mil toneladas de diesel, mais 500 mil em novembro e depois 1 milhão de toneladas.',
    'Zelensky escreveu que a Rússia agradeceu a suspensão das sanções com cinco bombas em Zaporíjia e que a escolha russa é a guerra. Um integrante do governo ucraniano disse que Kiev não sabia do acordo e que ele não tem ligação com as conversas da semana em Miami, das quais a delegação ucraniana já voltou.'
  ] },

{ id: 'zaporijia-bombas-mortos-criancas', cat: 'internacional', own: false, t: '2026-10-10T14', d: '10 out 2026', img: 'mundo', src: 'Euronews', url: U.euroZapo,
  title: 'Bombas russas matam pelo menos 20 pessoas em Zaporíjia, entre elas três crianças',
  sum: 'Cinco bombas guiadas atingiram áreas residenciais na madrugada de sábado (10). Duas caíram sobre prédios de apartamentos.',
  body: [
    'Segundo o serviço de emergência da Ucrânia, citado pela Euronews, 16 pessoas ficaram feridas, e as buscas continuavam. Uma das bombas destruiu a entrada de um prédio de três andares.',
    'Na mesma noite, a Rússia lançou 160 drones contra o país, e 117 foram derrubados ou neutralizados, segundo a Força Aérea ucraniana.'
  ] },

{ id: 'abbas-adia-eleicoes-palestinas-2027', cat: 'internacional', own: false, t: '2026-10-10T16', d: '10 out 2026', img: 'mundo', src: 'Euronews', url: U.euroAbbas,
  title: 'Abbas adia eleições palestinas para setembro de 2027',
  sum: 'O pleito legislativo estava marcado para 28 de novembro. Por decreto, as eleições legislativas e presidenciais passam para 11 de setembro de 2027.',
  body: [
    'O presidente da Autoridade Palestina, Mahmoud Abbas, citou obstáculos de segurança e de logística. Segundo a Euronews, o comitê executivo da OLP aprovou o adiamento. As últimas eleições legislativas palestinas foram em 2006.',
    'O chanceler de Israel, Gideon Sa’ar, acusou Abbas de enganar a comunidade internacional.'
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

{ id: 'novorizontino-vence-nautico-serie-b', cat: 'esportes', own: false, t: '2026-10-08T22', d: '8 out 2026', img: 'esportes', src: 'Gazeta Esportiva', url: U.gzNovori,
  title: 'Novorizontino vence o Náutico e encosta nos líderes da Série B',
  sum: 'Com o 2 a 0 nos Aflitos, o time chegou a 57 pontos, dois a menos que o líder Juventude.',
  body: [
    'Nicolas Careca abriu o placar aos 7 minutos, e Rômulo ampliou de pênalti aos 14, ainda no primeiro tempo. O jogo foi pela 32ª rodada.',
    'O Novorizontino é o 3º colocado. O Náutico, com 42 pontos, está em 13º.'
  ] },

{ id: 'corinthians-demite-fernando-diniz', cat: 'esportes', own: true, t: '2026-10-10T17', d: '10 out 2026', img: 'esportes', read: 3,
  title: 'Mascherano recusa o Corinthians, e interino comanda o time no clássico contra o Palmeiras',
  sum: 'O argentino é mais um a dizer não ao contrato curto. William Batista, do sub-20, dirige a equipe neste domingo (11), às 17h30, no Nubank Parque.',
  body: [
    'O Corinthians vai ao clássico contra o Palmeiras sem técnico efetivo. Segundo o Lance!, o argentino Javier Mascherano foi procurado, mas recusou a proposta porque o contrato iria só até o fim de 2026. Ramón Díaz, que era a primeira opção, Luis Zubeldía e Sylvinho também recusaram o vínculo curto.',
    '## O interino',
    'William Batista, de 33 anos, técnico do time sub-20, comanda a equipe com a ajuda de Léo Porto, auxiliar fixo do clube. Segundo a CNN Brasil, ele foi interino do Vasco em 2023, em cinco jogos, com duas vitórias, um empate e duas derrotas.',
    '## A demissão',
    'Fernando Diniz foi demitido na quarta-feira (7), depois da derrota por 2 a 1 para o Internacional, no Beira-Rio. Em 33 jogos, somou 13 vitórias, 8 empates e 12 derrotas. O Corinthians tem 32 pontos, está em 16º e fica a um ponto da zona de rebaixamento.',
    '## O clássico',
    'O Palmeiras é o 2º colocado, com 60 pontos, um a menos que o líder Flamengo, e terá a volta do técnico Abel Ferreira depois de três jogos de suspensão. Segundo a Gazeta Esportiva, o Corinthians não terá Garro e Kaio César, suspensos. O árbitro é Anderson Daronco.'
  ],
  box: { type: 'facts', title: 'Corinthians sem técnico', rows: [['Interino', 'William Batista (sub-20)'], ['Recusaram', 'Ramón Díaz, Zubeldía, Sylvinho e Mascherano'], ['Diniz no clube', '33 jogos, 47% de aproveitamento'], ['Posição', '16º, com 32 pontos'], ['Clássico', 'Domingo (11), 17h30, Nubank Parque']] },
  sources: [['Lance!', U.lanceMascherano], ['CNN Brasil', U.cnnBatista], ['Gazeta Esportiva', U.gzDerbi], ['Placar', U.placarCorinthians], ['Lance!', U.lanceDiniz]] },

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

{ id: 'f1-verstappen-sprint-pole-singapura', cat: 'esportes', own: false, t: '2026-10-10T16', d: '10 out 2026', img: 'pista', src: 'Lance!', url: U.lanceSprint,
  title: 'Verstappen vence sprint com nove abandonos e larga na pole em Singapura',
  sum: 'Na chuva, Hamilton e Leclerc completaram o pódio da sprint. Russell e Bortoleto abandonaram. A corrida é neste domingo (11), às 9h de Brasília.',
  body: [
    'A sprint de sábado (10) foi reduzida a 20 voltas por causa da chuva. George Russell, da Mercedes, assumiu a ponta na largada, mas bateu no muro. O líder do campeonato, Kimi Antonelli, terminou em 4º. Gabriel Bortoleto, da Audi, abandonou depois de ser atingido por Alex Albon. Só 13 carros terminaram.',
    'Na classificação para o GP, Verstappen fez a pole com 1min31s373, a 50ª da carreira. Leclerc larga em 2º, Hamilton em 3º e Antonelli em 4º. Bortoleto sai em 14º, e Russell, punido pela troca de peças do motor, larga do fundo. Segundo a CNN Brasil, Antonelli tem 325 pontos, 89 a mais que Russell.'
  ] },

{ id: 'sao-paulo-vence-vitoria-calleri', cat: 'esportes', own: false, t: '2026-10-10T23', d: '10 out 2026', img: 'esportes', src: 'Band', url: U.bandSaoPaulo,
  title: 'Calleri marca duas vezes, e São Paulo vence o Vitória no MorumBIS',
  sum: 'Com o 2 a 1, pela 30ª rodada, o time chegou a 39 pontos e subiu para o 9º lugar do Brasileirão.',
  body: [
    'Calleri abriu o placar de cabeça no primeiro tempo, e Emmanuel Martínez empatou ainda antes do intervalo. No segundo tempo, o argentino fez o gol da vitória no rebote de uma defesa de Lucas Arcanjo.',
    'O Vitória, com 36 pontos, segue em 12º. No próximo sábado (17), o São Paulo recebe o Vasco.'
  ] },

{ id: 'vasco-empata-remo-sao-januario', cat: 'esportes', own: false, t: '2026-10-10T20', d: '10 out 2026', img: 'esportes', src: 'Gazeta Esportiva', url: U.gzVascoRemo,
  title: 'Vasco fica no 0 a 0 com o Remo e encerra sequência de quatro vitórias',
  sum: 'O goleiro Marcelo Rangel, do Remo, fez as principais defesas em São Januário. O Vasco tem 35 pontos e está em 14º.',
  body: [
    'O Remo, penúltimo colocado, chegou a 25 pontos. Pelo Vasco, David e Lucas Piton pararam em Rangel no primeiro tempo.',
    'Na terça (13), o Vasco visita o Boca Juniors, na Bombonera, no jogo de ida da semifinal da Copa Sul-Americana.'
  ] },

{ id: 'maringa-acesso-serie-b', cat: 'esportes', own: false, t: '2026-10-10T20', d: '10 out 2026', img: 'esportes', src: 'Gazeta Esportiva', url: U.gzMaringa,
  title: 'Maringá vence o Floresta e garante acesso inédito à Série B',
  sum: 'Na Série C, outros dois jogos do quadrangular foram suspensos por falta de segurança e serão retomados neste domingo (11), às 15h, com portões fechados.',
  body: [
    'O Maringá venceu por 2 a 0, com gols de Ronald Camarão e Paulinho, no segundo tempo. O Santa Cruz perdeu para o Botafogo-PB, mas também garantiu o acesso.',
    'Brusque x Paysandu foi interrompido no fim do primeiro tempo, com vitória parcial do Paysandu por 1 a 0, depois que torcedores danificaram a estrutura da transmissão. Ferroviária x Inter de Limeira, empatado sem gols, também parou. As duas vagas que faltam saem desses jogos.'
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

{ id: 'exposicao-margem-de-dentro-sesc-ipiranga', cat: 'cultura', own: false, t: '2026-10-08T12', d: '8 out 2026', img: 'arte', src: 'Agência Brasil', url: U.abMargem,
  title: 'Exposição gratuita no Sesc Ipiranga reúne 26 artistas e propõe outro olhar sobre a história do Brasil',
  sum: '"Margem de Dentro" tem mais de 50 obras, entre pinturas, esculturas, gravuras, fotos e peças têxteis, com curadoria de Claudinei Roberto Silva.',
  body: [
    'A mostra abriu na quarta-feira (7), em São Paulo, e destaca trabalhos feitos à mão, com cimento, cerâmica, madeira e tecido. Segundo a Agência Brasil, o curador liga essas técnicas a saberes de origem africana.',
    'Um mural de Soberana Ziza trata da migração de famílias do interior para São Paulo e homenageia Madrinha Eunice, primeira presidente de uma escola de samba paulistana.'
  ] },

{ id: 'festival-do-rio-ultimo-fim-de-semana', cat: 'cultura', own: false, t: '2026-10-10T10', d: '10 out 2026', img: 'cultura', src: 'Agência Brasil', url: U.abFestivalRio,
  title: 'Festival do Rio termina neste domingo com mais de 350 filmes',
  sum: 'A 28ª edição ocupa 28 salas no Rio e em Niterói. A organização espera passar do público de 140 mil pessoas do ano passado.',
  body: [
    'O festival começou em 1º de outubro. Segundo a Agência Brasil, um dos destaques foi a primeira visita ao Brasil do diretor iraniano Asghar Farhadi, duas vezes vencedor do Oscar, que apresentou "Contos Paralelos".',
    'Um estudo apresentado no RioMarket, braço de negócios do evento, estimou que o audiovisual movimentou R$ 81,1 bilhões no país em 2025, o equivalente a 0,64% do PIB.'
  ] },

{ id: 'morre-jerry-burgos-produtor-ana-carolina', cat: 'cultura', own: false, t: '2026-10-10T17', d: '10 out 2026', img: 'palco', src: 'CNN Brasil', url: U.cnnJerry,
  title: 'Morre Jerry Burgos, produtor cultural que trabalhou com Ana Carolina',
  sum: 'A morte foi confirmada pela empresa Global Music. Artistas como Ana Carolina e Maria Gadú lamentaram nas redes.',
  body: [
    'Jerry Burgos morreu na sexta-feira (9). Segundo a CNN Brasil, Ana Carolina o chamou de irmão e contou que ele a acompanhava nos shows da chegada até o palco. Ele foi casado com a atriz Cyria Coentro.',
    'A causa da morte e a idade não foram divulgadas.'
  ] },

{ id: 'simaria-volta-musica-fantastico', cat: 'cultura', own: false, t: '2026-10-10T18', d: '10 out 2026', img: 'palco', src: 'CNN Brasil', url: U.cnnSimaria,
  title: 'Simaria fala no Fantástico sobre a volta à música depois de quatro anos',
  sum: 'A entrevista vai ao ar neste domingo (11). A cantora voltou aos palcos em setembro, na gravação do primeiro DVD da carreira solo.',
  body: [
    'Simaria, de 44 anos, se afastou dos palcos em junho de 2022 por motivo de saúde e, em agosto daquele ano, anunciou com a irmã, Simone Mendes, o fim da dupla. A gravação do DVD foi em 12 de setembro, em São Paulo, com ingressos esgotados.',
    'Segundo a CNN Brasil, ela diz que hoje tem com a irmã uma relação melhor do que na época em que cantavam juntas.'
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

{ id: 'cni-juros-altos-credito-industria', cat: 'economia', own: false, t: '2026-10-09T08', d: '9 out 2026', img: 'mercado', src: 'Agência Brasil', url: U.abCni,
  title: 'Juros altos são a principal barreira ao crédito para a indústria, diz CNI',
  sum: 'Para 76% das empresas, os juros são o maior obstáculo nos empréstimos de curto e médio prazo. Das que pediram crédito de longo prazo, 37,2% não conseguiram.',
  body: [
    'A pesquisa da Confederação Nacional da Indústria ouviu 1.701 indústrias entre 3 e 12 de agosto. Nos empréstimos de longo prazo, 69% apontam os juros como principal barreira. A exigência de imóveis como garantia vem em segundo lugar, citada por cerca de um terço.',
    'Segundo a Agência Brasil, a recusa no crédito de longo prazo atinge cerca de 48% das pequenas e médias empresas que pediram, contra 29,9% das grandes.'
  ] },

{ id: 'isaias-paralisa-petroleo-golfo-mexico', cat: 'economia', own: false, t: '2026-10-10T15', d: '10 out 2026', img: 'plataforma', src: 'CNN Brasil / Reuters', url: U.cnnIsaiasPetroleo,
  title: 'Tempestade Isaias paralisa 69% da produção de petróleo no Golfo do México',
  sum: 'Também estão paradas 57% da produção de gás. Trabalhadores deixaram 113 das 371 plataformas com equipes na região.',
  body: [
    'Os dados são da agência americana que regula a exploração no mar, segundo a CNN Brasil. A paralisação atinge 68,76% da produção diária de petróleo e 57,44% da de gás.'
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

{ id: 'china-10-milhoes-empregos-urbanos', cat: 'economia', own: false, t: '2026-10-10T13', d: '10 out 2026', img: 'mercado', src: 'CNN Brasil / Reuters', url: U.cnnChina,
  title: 'China cria 10,52 milhões de empregos urbanos até setembro',
  sum: 'O número equivale a 87,7% da meta do ano, segundo o Ministério do Trabalho chinês.',
  body: [
    'O desemprego urbano médio foi de 5,2% de janeiro a agosto. Segundo a CNN Brasil, o país tem 1,079 bilhão de pessoas inscritas na previdência básica.'
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

{ id: 'pix-1-bilhao-chaves', cat: 'tecnologia', own: false, t: '2026-10-08T11', d: '8 out 2026', img: 'celular', src: 'Convergência Digital', url: U.cdPix,
  title: 'Pix passa de 1 bilhão de chaves cadastradas',
  sum: 'Eram 1,008 bilhão de chaves em 30 de setembro, segundo o Banco Central. As chaves aleatórias são mais da metade.',
  body: [
    'As chaves aleatórias somam 526,8 milhões, ou 52,3% do total. Depois vêm as de celular (166,3 milhões), as de CPF (153,9 milhões) e as de e-mail (144,6 milhões).'
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

{ id: 'tse-meta-48-horas-perfis-lula', cat: 'tecnologia', own: true, t: '2026-10-10T18', d: '10 out 2026', img: 'celular', read: 3,
  title: 'TSE dá 48 horas para a Meta explicar restrições a perfis de Lula',
  sum: 'A campanha do presidente acusa a empresa de reduzir o alcance dos posts dele. A Meta diz que as alegações são falsas e que cumpre as regras eleitorais.',
  body: [
    'O ministro Marco Aurélio Bellizze, do Tribunal Superior Eleitoral, deu no sábado (10) prazo de 48 horas para a Meta, dona do Facebook e do Instagram, responder a seis perguntas sobre os perfis de Lula (PT). O pedido foi feito pela coligação do presidente, que disputa o segundo turno com Flávio Bolsonaro (PL) em 25 de outubro.',
    '## O que o TSE quer saber',
    'A Meta terá de informar que medidas aplicou aos perfis de Lula desde 16 de agosto, explicar falhas na contagem de visualizações de vídeos de 7 de outubro e a desativação da conta de anúncios do candidato em 23 de setembro. Também deve dizer se identificou uma rede de 255 perfis automatizados com inteligência artificial e se tratou os dois candidatos da mesma forma ao tirá-los das recomendações.',
    'Segundo a campanha, o impulsionamento de posts de Lula no Instagram ficou bloqueado de sexta (9) até a manhã de sábado. O PT diz que o problema foi resolvido.',
    '## O que diz o ministro',
    'Bellizze escreveu que as provas são em grande parte indiretas, mas que os fatos ocorrem num ambiente que só a empresa controla. Ele decretou sigilo dos documentos e deu o mesmo prazo à Agência Lupa e ao Instituto Democracia em Xeque, citados no pedido.',
    '## O que diz a Meta',
    'Em nota, a Meta afirmou que as alegações são falsas e não têm respaldo nos fatos, e que cumpre as normas eleitorais com compromisso com a igualdade entre os candidatos.'
  ],
  box: { type: 'facts', title: 'O pedido', rows: [['Autor', 'Coligação de Lula'], ['Prazo', '48 horas'], ['Relator', 'Marco Aurélio Bellizze'], ['Perfis automatizados citados', '255'], ['Resposta da Meta', 'Alegações falsas']] },
  sources: [['Poder360', U.p360Meta], ['InfoMoney / O Globo', U.imMeta], ['Olhar Digital', U.odMeta]] },

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

{ id: 'apple-evento-casa-inteligente-13-outubro', cat: 'tecnologia', own: false, t: '2026-10-09T12', d: '9 out 2026', img: 'celular', src: 'Macworld', url: U.mwApple,
  title: 'Apple marca para terça (13) evento sobre casa inteligente',
  sum: 'O lançamento será pela internet, às 10h de Brasília, com uma apresentação para a imprensa em Nova York.',
  body: [
    'A empresa divulgou o evento com o mote "Welcome Home". Segundo a Macworld, a Apple não informou quais produtos serão apresentados.'
  ] },

];
