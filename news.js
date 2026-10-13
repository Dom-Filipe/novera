/* ============================================================
   NOVERA: conteúdo do site. Edite este arquivo e rode `node build.js`.
   Regras completas em ATUALIZACAO.md.
   ============================================================ */

/* Topo do site: data da edição e mercado */
const META = {
  /* Endereço público do site, sem barra no final. Usado nos links das redes sociais. */
  siteUrl: 'https://novera-sepia.vercel.app',
  dataExtenso: 'Terça-feira, 13 de outubro de 2026',
  edicao: '13 out 2026',
  ibovespa: { valor: '209.067', variacao: '1,38%', sobe: true },
  dolar: { valor: 'R$ 4,98', variacao: '0,78%', sobe: false },
  fechamento: '9/10'
};

/* Home: destaque principal, dois laterais e três da faixa de baixo (IDs de notícias "own: true") */
const FEATURED = {
  lead: 'caso-master-stf-fachin-pf-13-outubro',
  side: ['lula-critica-tse-flavio-visita-bolsonaro', 'fmi-corta-pib-brasil-2026-eleva-mundo'],
  also: ['ataque-aeroporto-riade-hutis', 'libertadores-semifinais-tres-brasileiros', 'tse-meta-48-horas-perfis-lula']
};

/* Home: "Escolhas da redação" (5 IDs) */
const PICKS = ['tse-barra-anuncios-lula-libera-exercito-do-lula', 'corinthians-demite-fernando-diniz', 'bets-saem-do-ar-devolucao-saldos', 'mostra-sao-paulo-50-edicao', 'terremoto-panama-magnitude-7-7'];

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
  /* Atualização de 13 out 2026 */
  cnnMaster: 'https://www.cnnbrasil.com.br/blogs/elijonasmaia/politica/pf-vai-entregar-a-fachin-arquivos-do-caso-master-que-citam-ministros/',
  sbtMaster: 'https://sbtnews.sbt.com.br/colunas/coluna-do-tulio/pf-cita-6-ministros-do-stf-em-relatorio-sobre-vorcaro',
  metFachin: 'https://www.metropoles.com/colunas/manoela-alcantara/master-fachin-se-reune-com-andrei-a-espera-de-mencoes-a-ministros-do-stf',
  metLulaTse: 'https://www.metropoles.com/brasil/estao-extrapolando-em-decisoes-contra-minha-campanha-diz-lula-sobre-tse',
  otLulaTse: 'https://www.otempo.com.br/eleicoes/2026/presidentes/2026/10/12/nao-pode-o-presidente-da-suprema-corte-eleitoral-ter-lado-diz-lula-sobre-nunes-marques',
  p360Visitas: 'https://www.poder360.com.br/poder-eleicoes-2026/moraes-autoriza-retomada-das-visitas-de-flavio-a-jair-bolsonaro/',
  jcFlavioMissa: 'https://www.jornaldocomercio.com/politica/2026/10/1266579-flavio-participa-de-missa-de-nossa-senhora-e-diz-que-vai-visitar-bolsonaro-nesta-terca.html',
  metAgendas: 'https://www.metropoles.com/brasil/eleicoes-confira-as-agendas-de-flavio-e-lula-nesta-terca-feira-13-10',
  jcReuniaoTse: 'https://www.jornaldocomercio.com/politica/2026/10/1266572-nunes-marques-convoca-campanhas-de-flavio-e-lula-para-reuniao-nesta-terca.html',
  abAparecida: 'https://agenciabrasil.ebc.com.br/geral/noticia/2026-10/arcebispo-de-aparecida-pede-desarmamento-e-atencao-fome-e-pobreza',
  metVideoChile: 'https://www.metropoles.com/brasil/tse-manda-flavio-e-aliados-apagarem-video-falso-sobre-ato-de-lula-em-sp',
  cnnSemSom: 'https://www.cnnbrasil.com.br/eleicoes/tse-diz-que-falha-no-pool-de-midias-deixou-propaganda-de-flavio-sem-audio/',
  otPesquisas: 'https://www.otempo.com.br/eleicoes/2026/pesquisas/2026/10/12/quaest-e-datafolha-divulgam-novas-pesquisas-do-2-turno-das-eleicoes-2026-nesta-semana',
  ajHutis12: 'https://www.aljazeera.com/news/2026/10/12/why-are-the-houthis-striking-saudi-airports',
  foxHutis12: 'https://www.foxnews.com/live-news/iran-war-news-us-trump-houthis-saudi-arabia-october-12',
  otPetroleo: 'https://www.otempo.com.br/economia/2026/10/12/petroleo-fecha-em-alta-apos-ataques-dos-houthis-na-arabia-saudita',
  cruxPapa: 'https://cruxnow.com/vatican/2026/10/pope-leo-xiv-to-be-admitted-into-hospital-on-tuesday',
  osvPapa: 'https://catholicreview.org/pope-leo-to-be-hospitalized-oct-13-ahead-of-lung-surgery-public-appearances-canceled/',
  kiKharkiv: 'https://kyivindependent.com/russia-struck-kharkivs-power-plant-shortly-after-trump-announced-energy-ceasefire/',
  ktCoreia: 'https://www.koreatimes.co.kr/southkorea/defense/20261013/n-korea-reports-test-firing-of-tactical-ballistic-missile-to-improve-weapons-systems',
  k24Fairford: 'https://kurdistan24.net/en/story/945654/uk-says-irans-revolutionary-guards-almost-certainly-directed-scare-at-us-used-airbase',
  rfiGlucksmann: 'https://www.inkl.com/news/glucksmann-wins-french-left-primary-to-run-as-alternative-to-melenchon',
  lanceSeedorf: 'https://www.lance.com.br/corinthians/corinthians-detalha-chegada-de-seedorf-e-define-programacao-de-treinos.html',
  gzSeedorfChegada: 'https://www.gazetaesportiva.com/times/corinthians/corinthians-informa-chegada-seedorf-comissao-tecnica/',
  bandRecorde: 'https://www.band.com.br/esportes/futebol/times/corinthians/corinthians-fica-a-uma-derrota-de-recorde-hitorico-no-brasileirao-entenda',
  lanceEstudiantes: 'https://www.lance.com.br/flamengo/estudiantes-define-estadio-para-jogo-contra-o-flamengo-pela-semifinal-da-libertadores.html',
  palestraAbel: 'https://portaldopalestra.com.br/abel-ferreira-suspensao-conmebol-semifinal-libertadores-fluminense-maracana-multa-expulsao-ldu/',
  colunaFla: 'https://colunadofla.com/2026/10/libertadores-e-brasileirao-veja-a-programacao-do-flamengo-para-enfrentar-estudiantes-e-bahia/',
  cnnAthletico: 'https://www.cnnbrasil.com.br/esportes/brasileirao/athletico-amassa-a-chapecoense-e-retoma-a-terceira-posicao-do-brasileirao/',
  lanceBragantino: 'https://www.lance.com.br/cruzeiro/em-jogo-movimentado-red-bull-bragantino-vence-o-cruzeiro.html',
  lanceBocaVasco: 'https://www.lance.com.br/vasco/sem-colidio-vasco-busca-alternativa-para-montar-ataque-contra-o-boca-juniors-veja-provavel-escalacao.html',
  itaBocaVasco: 'https://www.itatiaia.com.br/esportes/futebol/futebol-internacional/copa-sul-americana/boca-juniors-nao-tera-campeao-mundial-para-encarar-o-vasco-veja-relacionados/',
  gzVilaNova: 'https://www.gazetaesportiva.com/times/vila-nova-go/vila-nova-vence-o-nautico-fora-de-casa-e-reassume-a-lideranca-da-serie-b/',
  cnnMitte: 'https://www.cnnbrasil.com.br/pop/celebridades/morre-ator-que-fez-walter-white-jr-em-breaking-bad-aos-34-anos-diz-site/',
  cnnAvenida: 'https://www.cnnbrasil.com.br/pop/tv/avenida-brasil-2-tv-globo-revela-novos-nomes-no-elenco/',
  cblJabuti: 'https://cbl.org.br/en/2026/09/premio-jabuti-anuncia-calendario-da-reta-final-e-confirma-cerimonia-na-sala-sao-paulo/',
  cnnRenato: 'https://www.cnnbrasil.com.br/pop/musica/30-anos-sem-renato-russo-por-onde-andam-os-integrantes-do-legiao-urbana/',
  cnnEdson: 'https://www.cnnbrasil.com.br/pop/celebridades/edson-silva-ator-de-lacos-de-familia-morre-aos-95-anos/',
  p360Fmi: 'https://www.poder360.com.br/poder-economia/fmi-reduz-previsao-de-crescimento-do-brasil-para-22-em-2026/',
  apFmi: 'https://abcnews.com/International/wireStory/imf-raises-forecast-world-growth-year-economies-slow-137214411',
  apNobelEco: 'https://abcnews.com/Business/wireStory/nobel-memorial-prize-economics-awarded-stockholm-137186234',
  imBolsasNy: 'https://www.infomoney.com.br/mercados/bolsas-de-ny-fecham-sem-direcao-em-dia-de-liquidez-reduzida-e-geopolitica-no-radar/',
  metMetaTse: 'https://www.metropoles.com/brasil/meta-nega-interferencia-e-diz-que-falha-tecnica-global-travou-views-de-lula',
  cnnMetaTse: 'https://www.cnnbrasil.com.br/eleicoes/meta-reconhece-erro-em-anuncios-de-lula-mas-nega-vies-no-algoritmo/',
  mrApple: 'https://www.macrumors.com/2026/10/12/apple-to-unveil-three-new-products-tomorrow/',
  odMuse: 'https://olhardigital.com.br/2026/10/12/inteligencia-artificial/meta-lanca-muse-wonder-nova-ia-para-competir-com-openai-e-anthropic/',
  odCelulares: 'https://olhardigital.com.br/2026/10/12/pro/vendas-de-celulares-caem-20-no-pior-resultado-desde-2012/',
  odPerseverance: 'https://olhardigital.com.br/2026/10/12/ciencia-e-espaco/rover-da-nasa-bate-recorde-de-distancia-percorrida-em-marte/',
  odCidades: 'https://olhardigital.com.br/2026/10/12/ciencia-e-espaco/cidades-do-mundo-estao-afundando-revela-estudo-com-satelites/',
  odDecart: 'https://olhardigital.com.br/2026/10/12/pro/amazon-negocia-compra-de-startup-de-ia-avaliada-em-us-7-bilhoes/',
};

const NEWS = [
/* ===================== NACIONAL ===================== */

{ id: 'caso-master-stf-fachin-pf-13-outubro', cat: 'nacional', own: true, t: '2026-10-13T04', d: '13 out 2026', img: 'congresso', read: 4,
  title: 'Caso Master: PF entrega hoje a Fachin material que cita ministros do STF',
  sum: 'Segundo o SBT News, ao menos 6 dos 10 ministros aparecem nos dados dos celulares de Daniel Vorcaro. Ser citado não significa ser investigado, e todos negam irregularidades.',
  body: [
    'O diretor-geral da Polícia Federal, Andrei Rodrigues, se reúne nesta terça-feira (13) com o presidente do Supremo Tribunal Federal, Edson Fachin. Segundo a CNN Brasil, a PF vai levar dados extraídos dos celulares de Daniel Vorcaro, dono do Banco Master, e do cunhado dele, Fabiano Zettel, que mencionam ministros da Corte.',
    'Fachin pediu à PF, em ofício, que a apuração siga "sem exceção de qualquer natureza" e que todo o material chegue à Presidência do STF, segundo o Metrópoles. Relatórios individuais sobre cada ministro só serão feitos se o tribunal decidir, informou a CNN.',
    '## Quem aparece',
    'Segundo a coluna de Túlio Amâncio, no SBT News, são citados Alexandre de Moraes, Dias Toffoli, Kassio Nunes Marques, Luiz Fux, Gilmar Mendes e André Mendonça. O Metrópoles fala em cinco ministros. A coluna ressalta que o levantamento não é uma acusação formal.',
    'No caso de Moraes, o material inclui mensagens no celular de Vorcaro e um contrato de R$ 131 milhões entre o banco e o escritório da mulher do ministro, Viviane Barci de Moraes. Ele nega os diálogos atribuídos a ele. Toffoli deixou a relatoria do caso depois de a PF apontar transações entre uma empresa da família e fundos ligados ao banco, e defende a legalidade dos negócios.',
    'Nunes Marques nega ter pedido vantagens ou manter contato com Vorcaro. Fux diz que nunca teve relação com o banqueiro. Gilmar Mendes aparece de forma indireta, por meio de um ex-cunhado e de uma advogada, e nega ter tratado de interesses de Vorcaro. Mendonça confirma um encontro com o empresário em março de 2025 e nega irregularidades.',
    '## Julgamento parado',
    'Em 15 de setembro, o plenário do STF não chegou a julgar o mérito do pedido relacionado a Moraes, e Flávio Dino pediu vista. Em 28 de setembro, Gilmar Mendes defendeu suspender o julgamento até que todos os ministros citados fossem identificados.'
  ],
  box: { type: 'facts', title: 'Linha do tempo no STF', rows: [['15 set', 'Plenário não julga o mérito; Dino pede vista'], ['28 set', 'Gilmar defende suspender o julgamento'], ['2 out', 'Fachin cobra apuração "sem exceção"'], ['12 out', 'SBT News: ao menos 6 ministros citados'], ['13 out', 'PF entrega o material a Fachin']] },
  sources: [['CNN Brasil', U.cnnMaster], ['SBT News', U.sbtMaster], ['Metrópoles', U.metFachin], ['Jornal Grande Bahia', U.jgbMaster]] },

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

{ id: 'lula-critica-tse-flavio-visita-bolsonaro', cat: 'nacional', own: true, t: '2026-10-12T20', d: '12 out 2026', img: 'eleicao', read: 3,
  title: 'Lula diz que TSE "extrapola" contra sua campanha; Flávio volta a visitar o pai após decisão de Moraes',
  sum: 'No Dia da Padroeira, os dois candidatos foram a missas em Brasília. Lula criticou o presidente do TSE, Nunes Marques; Flávio comemorou a liberação das visitas a Jair Bolsonaro, marcada para esta terça (13).',
  body: [
    'A 13 dias do segundo turno, Lula (PT) e Flávio Bolsonaro (PL) passaram o feriado de Nossa Senhora Aparecida, segunda-feira (12), em Brasília. Lula assistiu a uma missa na capela do Palácio da Alvorada, e Flávio, na Catedral.',
    '## Lula e o TSE',
    'Depois da missa, Lula disse a jornalistas que o Tribunal Superior Eleitoral está "extrapolando" em algumas decisões contra sua campanha e que o presidente da Corte eleitoral não pode "ter lado na política", segundo o Metrópoles. A crítica foi dirigida ao ministro Kassio Nunes Marques, que no domingo (11) suspendeu o canal de WhatsApp "Exército do Lula", a pedido da campanha de Flávio.',
    'O canal, coordenado por André Janones (Rede-MG), foi liberado horas depois pelo corregedor-geral eleitoral, Ricardo Villas Bôas Cueva, que levou o caso ao plenário e pediu julgamento urgente. Lula disse que vai criar no aplicativo também uma "marinha" e uma "aeronáutica" do Lula.',
    '## Flávio e o pai',
    'Também na segunda, o ministro Alexandre de Moraes, do STF, autorizou a volta das visitas de Flávio ao pai, o ex-presidente Jair Bolsonaro, que cumpre em prisão domiciliar, em Brasília, pena de 27 anos e 3 meses por tentativa de golpe de Estado. As visitas estavam suspensas havia 90 dias, depois que Flávio divulgou nas redes uma carta do pai, segundo o Poder360.',
    'Moraes manteve a proibição de uso político-eleitoral das visitas e de divulgação de manifestos, inclusive por terceiros. A Procuradoria-Geral da República concordou com a retomada. Na saída da missa, Flávio disse estar feliz por voltar a ser autorizado a visitar o pai, a quem chamou de vítima de uma injustiça. Ele não respondeu se vai votar a PEC do fim da escala 6x1 no Senado, segundo o Jornal do Comércio.',
    '## Agenda desta terça',
    'Segundo o Metrópoles, Flávio visita o pai pela manhã e à tarde se reúne com o MDB e participa de um encontro de associações em São Paulo. Lula anuncia às 10h, no Planalto, medidas de crédito e de renegociação de dívidas para microempreendedores individuais (MEIs) e empresas do Simples. Às 15h30, o presidente do TSE recebe coordenadores das duas campanhas, segundo o Jornal do Comércio.'
  ],
  box: { type: 'facts', title: 'O feriado dos candidatos', rows: [['Lula (PT)', 'Missa no Alvorada; critica decisões do TSE'], ['Flávio Bolsonaro (PL)', 'Missa na Catedral; visitas ao pai liberadas'], ['Terça (13)', 'Lula anuncia medidas para MEIs; Flávio vai a São Paulo'], ['Segundo turno', '25 de outubro']] },
  sources: [['Metrópoles', U.metLulaTse], ['O Tempo', U.otLulaTse], ['Poder360', U.p360Visitas], ['Jornal do Comércio', U.jcFlavioMissa], ['Metrópoles', U.metAgendas], ['Jornal do Comércio', U.jcReuniaoTse]] },

{ id: 'aparecida-arcebispo-desarmamento-fome', cat: 'nacional', own: false, t: '2026-10-12T15', d: '12 out 2026', img: 'cultura', src: 'Agência Brasil', url: U.abAparecida,
  title: 'Em Aparecida, arcebispo pede desarmamento e atenção à fome no dia da Padroeira',
  sum: 'Dom Mário Antônio da Silva celebrou a missa das 9h no Santuário Nacional, que lotou a basílica. A expectativa era de 150 mil fiéis na segunda-feira (12).',
  body: [
    'Na homilia, o arcebispo disse que o Evangelho não autoriza odiar quem pensa diferente e pediu atenção à fome, à pobreza, à violência e às guerras. Foi a primeira festa da Padroeira dele à frente da arquidiocese.',
    'Segundo a Agência Brasil, cerca de 500 mil pessoas passaram pelo santuário durante a novena. O vice-presidente Geraldo Alckmin e o ministro da Saúde, Alexandre Padilha, estiveram na celebração.'
  ] },

{ id: 'tse-manda-apagar-video-chile-ato-lula', cat: 'nacional', own: false, t: '2026-10-12T20', d: '12 out 2026', img: 'congresso', src: 'Metrópoles', url: U.metVideoChile,
  title: 'TSE manda Flávio e aliados apagarem vídeo gravado no Chile e atribuído ao ato de Lula na Paulista',
  sum: 'O ministro Marco Aurélio Bellizze viu "grave manipulação por descontextualização". O vídeo foi gravado no sábado (10), um dia antes do ato.',
  body: [
    'A ação foi movida pela coligação de Lula contra Flávio Bolsonaro e os aliados Nikolas Ferreira, Lucas Pavanato, Pablo Marçal e Rony Gabriel, segundo o Metrópoles. O vídeo mostra uma jovem que aparenta usar drogas.',
    'O ministro também mandou as plataformas identificarem outros perfis que compartilharam o conteúdo.'
  ] },

{ id: 'propaganda-flavio-sem-som-falha-tse', cat: 'nacional', own: false, t: '2026-10-12T17', d: '12 out 2026', img: 'eleicao', src: 'CNN Brasil', url: U.cnnSemSom,
  title: 'Propaganda de Flávio vai ao ar sem som, e TSE atribui o problema a falha técnica',
  sum: 'O erro ocorreu no bloco das 13h de segunda-feira (12). O programa de Lula, que também estava sem áudio na preparação, foi corrigido a tempo.',
  body: [
    'Segundo o TSE, os áudios dos dois programas do bloco não foram carregados no pool de mídias, responsável por distribuir a propaganda às emissoras. O arquivo de Flávio já foi corrigido, informou o tribunal à CNN Brasil.',
    'Em vídeo, Flávio disse que foi a primeira vez que um programa seu saiu sem som e que não vão calar sua voz.'
  ] },

{ id: 'quaest-datafolha-pesquisas-semana-debates', cat: 'nacional', own: false, t: '2026-10-12T12', d: '12 out 2026', img: 'eleicao', src: 'O Tempo', url: U.otPesquisas,
  title: 'Quaest e Datafolha divulgam pesquisas do 2º turno nesta semana; Band marca debate para domingo',
  sum: 'A Quaest sai na quarta (14), e o Datafolha, na quinta (15). Na DataTrends, Flávio tem 53,1% dos válidos, e Lula, 46,9%; na Vox Brasil, Lula tem 50,86%, e Flávio, 49,14%.',
  body: [
    'A Quaest ouviu 2.154 pessoas de 10 a 13 de outubro, com margem de erro de 2 pontos. O Datafolha fará 2.520 entrevistas de 13 a 15 de outubro, também com margem de 2 pontos, segundo O Tempo. As duas estão registradas no TSE.',
    'Segundo o Poder360, a DataTrends ouviu 2.000 pessoas de 7 a 9 de outubro. O debate da Band está marcado para domingo (18), às 20h, e o da Globo, para o dia 23. Flávio ainda não tinha confirmado presença no debate da Band, segundo O Tempo.'
  ] },

/* ===================== INTERNACIONAL ===================== */

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

{ id: 'ataque-aeroporto-riade-hutis', cat: 'internacional', own: true, t: '2026-10-12T20', d: '12 out 2026', img: 'mundo', read: 3,
  title: 'Hutis voltam a atacar a Arábia Saudita, e aeroporto de Riade fica fechado até sábado (17)',
  sum: 'O ataque de sábado (10) ao aeroporto matou 12 pessoas, segundo os sauditas. Na segunda (12), houve explosões sobre Riade, e o petróleo Brent subiu para US$ 106,65.',
  body: [
    'Os hutis, grupo armado do Iêmen, reivindicaram um novo ataque ao Aeroporto Internacional Rei Khalid, em Riade, na noite de segunda-feira (12), quando houve explosões sobre a capital saudita. Durante o dia, a coalizão liderada pela Arábia Saudita disse ter destruído dois mísseis balísticos lançados contra Khamis Mushait e outro contra Riade, segundo a Fox News.',
    'O primeiro ataque, no sábado (10), matou 12 pessoas, segundo as autoridades sauditas; a Al Jazeera cita 13 mortos. Os feridos passaram de 300. No domingo (11), um projétil atingiu de novo um terminal do aeroporto.',
    '## Voos suspensos',
    'A aviação civil saudita prorrogou o fechamento do aeroporto de Riade até 17 de outubro. Segundo o Flightradar24, a medida afeta cerca de 700 voos por dia. A Lufthansa cancelou voos até 16 de outubro, e a Air France-KLM suspendeu as operações até o fim do mês, segundo a Al Jazeera. As escolas de Riade passaram para o ensino remoto por uma semana.',
    '## Reações',
    'O presidente dos EUA, Donald Trump, conversou com o príncipe herdeiro saudita, Mohammed bin Salman, disse que os hutis estão se comportando muito mal e afirmou avaliar se os EUA vão se juntar aos ataques sauditas. O dirigente huti Mohammed Al Bukhaiti ameaçou uma resposta rápida se isso acontecer. O secretário-geral da ONU, António Guterres, condenou o ataque de sábado.',
    '## Efeito no petróleo',
    'O petróleo Brent fechou a segunda-feira a US$ 106,65 o barril, alta de 1,84% e o maior valor desde 15 de setembro, segundo a AFP. Os ataques ocorrem durante a guerra entre EUA e Israel, de um lado, e Irã, do outro, iniciada em 28 de fevereiro.'
  ],
  box: { type: 'facts', title: 'Os ataques', rows: [['Mortos no sábado (10)', '12, segundo os sauditas'], ['Feridos', 'Mais de 300'], ['Aeroporto de Riade', 'Fechado até 17 de outubro'], ['Voos afetados', 'Cerca de 700 por dia'], ['Brent', 'US$ 106,65 (+1,84%)']] },
  sources: [['Al Jazeera', U.ajHutis12], ['Fox News', U.foxHutis12], ['Al Jazeera', U.ajRiade3], ['O Tempo / AFP', U.otPetroleo]] },

{ id: 'cessar-fogo-energetico-trump-russia-ucrania', cat: 'internacional', own: false, t: '2026-10-12T20', d: '12 out 2026', img: 'mundo', src: 'Kyiv Independent', url: U.kiKharkiv,
  title: 'Trump diz que "cessar-fogo energético" está valendo, mas ataques continuam na Ucrânia',
  sum: 'O Kremlin não confirmou o acordo. Logo depois do anúncio, a Rússia atingiu uma usina em Kharkiv; na segunda (12), um drone matou uma mulher em Kiev, segundo a Euronews.',
  body: [
    'Trump disse a jornalistas na segunda que os dois lados concordaram com a trégua nos ataques à infraestrutura de energia, mas admitiu violações de ambos. O porta-voz do Kremlin, Dmitry Peskov, disse apenas que os contatos continuam.',
    'Segundo o Kyiv Independent, a usina CHP-5 de Kharkiv foi atingida no domingo (11), e um míssil num mercado perto da cidade matou 3 pessoas e feriu 22. Em Kiev, um drone atingiu um prédio de 25 andares na noite de segunda, com 1 morta e 5 feridos.'
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

{ id: 'papa-leao-cirurgia-pulmao', cat: 'internacional', own: false, t: '2026-10-13T06', d: '13 out 2026', img: 'mundo', src: 'Crux', url: U.cruxPapa,
  title: 'Papa Leão XIV é internado nesta terça em Roma para retirar nódulo no pulmão',
  sum: 'A internação no Hospital Gemelli deve durar cerca de uma semana. As aparições públicas foram canceladas, e a missa de quarta (14) será presidida pelo cardeal Luis Antonio Tagle.',
  body: [
    'O Vaticano anunciou a internação na segunda (12). Segundo o porta-voz Matteo Bruni, o papa, de 71 anos, dá entrada no fim da manhã. Não foi informado se a cirurgia será no dia 13 ou no 14.',
    'No domingo, o papa disse que o nódulo é pequeno, localizado e foi detectado no início. A viagem a Uruguai, Argentina e Peru segue sem mudança anunciada.'
  ] },

{ id: 'coreia-do-norte-misseis-mar-do-japao', cat: 'internacional', own: false, t: '2026-10-13T00', d: '13 out 2026', img: 'mundo', src: 'Korea Times / Yonhap', url: U.ktCoreia,
  title: 'Coreia do Norte confirma teste de míssil balístico "tático"',
  sum: 'Segundo o Japão, foram ao menos dois mísseis, um deles com mais de 910 km de voo. Foi o 16º lançamento norte-coreano do ano.',
  body: [
    'A agência estatal KCNA disse nesta terça (13) que o teste de segunda foi um grande sucesso. O Estado-Maior sul-coreano informou que um míssil voou mais de 900 km a partir da região de Pyongyang.',
    'O disparo veio depois de a Coreia do Sul testar seu primeiro míssil hipersônico, em 8 de outubro.'
  ] },

{ id: 'reino-unido-acusa-ira-base-fairford', cat: 'internacional', own: false, t: '2026-10-12T16', d: '12 out 2026', img: 'mundo', src: 'Kurdistan24', url: U.k24Fairford,
  title: 'Reino Unido diz que Guarda Revolucionária do Irã quase certamente dirigiu ação suspeita perto de base usada pelos EUA',
  sum: 'O primeiro-ministro Andy Burnham falou ao Parlamento sobre o caso da base RAF Fairford. O embaixador iraniano foi convocado, e dois iranianos foram sancionados.',
  body: [
    'Em 27 de setembro, um fazendeiro denunciou homens com vans agindo de forma suspeita perto da base, usada pelos EUA em operações contra o Irã. Sete pessoas foram presas e soltas sob fiança, sem acusação formal. Não foram encontrados explosivos nas vans, segundo a Kurdistan24.',
    'As autoridades britânicas não detalharam a natureza da ameaça.'
  ] },

{ id: 'glucksmann-vence-previas-esquerda-franca', cat: 'internacional', own: false, t: '2026-10-12T08', d: '12 out 2026', img: 'protesto', src: 'RFI', url: U.rfiGlucksmann,
  title: 'Glucksmann vence prévias da esquerda francesa para a eleição presidencial de 2027',
  sum: 'Raphaël Glucksmann teve 66% dos votos. O líder do Partido Socialista, Olivier Faure, ficou com 14%.',
  body: [
    'Foram 120.787 votos, segundo a RFI. A França Insubmissa, de Jean-Luc Mélenchon, não participou das prévias.',
    'Glucksmann se apresentou como candidato da ruptura com o macronismo.'
  ] },

/* ===================== ESPORTES ===================== */

{ id: 'corinthians-demite-fernando-diniz', cat: 'esportes', own: true, t: '2026-10-12T18', d: '12 out 2026', img: 'esportes', read: 3,
  title: 'Seedorf chega na quarta e estreia no dia 19, com o Corinthians a uma derrota do recorde negativo',
  sum: 'O holandês será apresentado no CT às 13h de quarta (14). O time perdeu oito jogos seguidos no Brasileirão; o recorde do clube é de nove, em 2000.',
  body: [
    'O Corinthians detalhou a chegada do novo técnico, Clarence Seedorf, anunciado no domingo (11) com contrato até dezembro de 2027. Ele desembarca no Brasil na manhã de quarta-feira (14), dá entrevista coletiva às 13h no CT Dr. Joaquim Grava e já comanda os treinos, segundo o Lance! e a Gazeta Esportiva.',
    'O auxiliar direto será o espanhol Pablo López Vidal. Léo Porto segue como auxiliar fixo, e Reverson Pimentel assume a preparação física.',
    '## O contrato',
    'Segundo a CNN Brasil, o contrato tem rescisão automática se o time for rebaixado para a Série B, com multa de três salários. Antes de Seedorf, Ramón Díaz, Luis Zubeldía, Sylvinho e Javier Mascherano recusaram o convite, segundo o Lance!. Fernando Diniz foi demitido em 7 de outubro.',
    '## Perto de um recorde',
    'A derrota por 4 a 1 para o Palmeiras, no domingo, foi a oitava seguida no Brasileirão. Segundo a Band, o recorde negativo é do próprio Corinthians, com nove derrotas em 2000. O time tem 32 pontos e é o 16º, o primeiro fora da zona de rebaixamento.',
    'A estreia de Seedorf deve ser na segunda-feira (19), às 20h, contra o Vitória, na Neo Química Arena. No clássico, o time foi dirigido pelo interino William Batista, porque não houve tempo de registrar o novo técnico.'
  ],
  box: { type: 'facts', title: 'Seedorf no Corinthians', rows: [['Apresentação', 'Quarta (14), às 13h'], ['Contrato', 'Até dezembro de 2027'], ['Estreia', 'Vitória, 19 de outubro, 20h'], ['Sequência', '8 derrotas seguidas'], ['Posição', '16º, com 32 pontos']] },
  sources: [['Lance!', U.lanceSeedorf], ['Gazeta Esportiva', U.gzSeedorfChegada], ['Band', U.bandRecorde], ['CNN Brasil', U.cnnDerbi], ['Lance!', U.lanceMascherano]] },

{ id: 'libertadores-semifinais-tres-brasileiros', cat: 'esportes', own: true, t: '2026-10-12T15', d: '12 out 2026', img: 'esportes', read: 2,
  photo: 'fotos/libertadores-semifinais-tres-brasileiros.webp', photoAlt: 'Montagem com jogadores de Fluminense, Palmeiras, Flamengo e Estudiantes comemorando', credit: 'Montagem: reprodução',
  title: 'Semifinais da Libertadores começam nesta quarta, com Palmeiras sem Abel no banco',
  sum: 'Fluminense e Palmeiras jogam no Maracanã na quarta (14). Na quinta (15), o Flamengo visita o Estudiantes em La Plata. Todos os jogos são às 21h30 de Brasília.',
  body: [
    'Três dos quatro semifinalistas da Copa Libertadores são brasileiros, o que garante um time do país na final. Fluminense e Palmeiras abrem a disputa na quarta-feira (14), às 21h30, no Maracanã. Na quinta (15), no mesmo horário, o Estudiantes recebe o Flamengo no estádio Jorge Luis Hirschi, em La Plata, segundo o Lance!.',
    'Os jogos de volta serão em 21 de outubro, no Nubank Parque, e em 22 de outubro, no Maracanã, segundo a Agência Brasil.',
    '## Desfalques',
    'O técnico Abel Ferreira, do Palmeiras, cumpre suspensão de um jogo por ter sido expulso contra a LDU, em 16 de setembro, e foi multado em US$ 2 mil. O auxiliar João Martins comanda o time à beira do campo, segundo o Portal do Palestra.',
    'O Flamengo, líder do Brasileirão, treina nesta terça (13) no Ninho do Urubu e viaja à tarde para a Argentina, segundo a Coluna do Fla.',
    '## Final em Montevidéu',
    'A decisão será em jogo único no sábado, 28 de novembro, no Estádio Centenário, em Montevidéu.'
  ],
  box: { type: 'table', title: 'Semifinais', head: ['Confronto', 'Ida', 'Volta'], rows: [['Fluminense x Palmeiras', '14 out, Maracanã', '21 out, Nubank Parque'], ['Estudiantes x Flamengo', '15 out, La Plata', '22 out, Maracanã']], note: 'Todos os jogos às 21h30 de Brasília. Fontes: Agência Brasil e Lance!. Final em 28 de novembro, no Centenário.' },
  sources: [['Agência Brasil', U.abLiberta], ['Lance!', U.lanceEstudiantes], ['Portal do Palestra', U.palestraAbel], ['Coluna do Fla', U.colunaFla], ['La Nación', U.laNacion]] },

{ id: 'rebeca-andrade-mundial-roterda', cat: 'esportes', own: false, t: '2026-10-07T12', d: '7 out 2026', img: 'esportes', src: 'Piranot', url: U.piraRebeca,
  title: 'Rebeca Andrade lidera a seleção brasileira no Mundial de ginástica de Roterdã',
  sum: 'A competição vai de 17 a 25 de outubro, na Holanda. Rebeca tem a maior nota do ano no salto, 14,800.',
  body: [
    'No feminino, estão Rebeca, Flávia Saraiva, Gabriela Bouças, Lorrane Oliveira, Sophia Weisberg e Thais Fidelis. No masculino, Arthur Nory, Bernardo Miranda, Diogo Soares, Johnny Oshiro, Patrick Corrêa e Vitaly Guimarães. Um atleta de cada equipe será reserva.',
    'Rebeca, dona de seis medalhas olímpicas, deve competir no salto e na trave. Ela foi campeã mundial do salto em 2021 e em 2023. O Mundial abre o ciclo rumo aos Jogos de Los Angeles 2028.'
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

{ id: 'athletico-goleia-chapecoense-terceiro', cat: 'esportes', own: false, t: '2026-10-12T21', d: '12 out 2026', img: 'esportes', src: 'CNN Brasil', url: U.cnnAthletico,
  title: 'Athletico-PR goleia a Chapecoense por 4 a 1 e volta ao 3º lugar',
  sum: 'Viveros marcou duas vezes na Arena Condá. O Athletico chegou a 53 pontos e passou o Fluminense, que tem 51.',
  body: [
    'Leozinho abriu o placar aos 5 minutos, e Luiz Gustavo e Viveros completaram. Garcez descontou para a Chapecoense, que segue na lanterna, com 18 pontos.',
    'No sábado (17), o Athletico recebe o Palmeiras na Arena da Baixada, às 19h30.'
  ] },

{ id: 'bragantino-vence-cruzeiro-4-a-2', cat: 'esportes', own: false, t: '2026-10-12T23', d: '12 out 2026', img: 'esportes', src: 'Lance!', url: U.lanceBragantino,
  title: 'Bragantino vence o Cruzeiro por 4 a 2 e encerra jejum de seis jogos',
  sum: 'O time paulista fez 3 a 0 no primeiro tempo. O Cruzeiro, 6º com 48 pontos, perdeu a chance de entrar no G-4.',
  body: [
    'Lucas Barbosa, Kaio Jorge, contra, e Eric Ramires marcaram para o Bragantino antes do intervalo. Zé Lucas e Matheus Henrique diminuíram, e Herrera fechou o placar aos 45 do segundo tempo.',
    'O Bragantino chegou a 40 pontos e está em 9º, segundo o Lance!.'
  ] },

{ id: 'boca-juniors-vasco-semifinal-sul-americana', cat: 'esportes', own: false, t: '2026-10-12T19', d: '12 out 2026', img: 'esportes', src: 'Lance!', url: U.lanceBocaVasco,
  title: 'Vasco enfrenta o Boca nesta terça, na Bombonera, pela semifinal da Sul-Americana',
  sum: 'O jogo de ida é às 21h30. A volta será em 20 de outubro, no Maracanã, e a final, em 21 de novembro, em Barranquilla.',
  body: [
    'O Vasco não poderá usar Colidio, que não está inscrito por uma regra da Conmebol, segundo o Lance!. No Boca, Leandro Paredes tem lesão na coxa e deve desfalcar o time, segundo a Itatiaia.',
    'Na quarta (14), o Atlético-MG recebe o Montevideo City Torque pela outra semifinal.'
  ] },

{ id: 'serie-b-vila-nova-lider-33-rodada', cat: 'esportes', own: false, t: '2026-10-12T22', d: '12 out 2026', img: 'esportes', src: 'Gazeta Esportiva', url: U.gzVilaNova,
  title: 'Vila Nova vence o Náutico e reassume a liderança da Série B',
  sum: 'O time goiano tem 61 pontos, um a mais que Novorizontino e Juventude. Vila Nova e Novorizontino se enfrentam no domingo (18), em Goiânia.',
  body: [
    'Everton Galdino e Janderson marcaram no primeiro tempo do 2 a 0 nos Aflitos, no domingo (11), pela 33ª rodada. Na segunda (12), Fortaleza e CRB empataram por 2 a 2.',
    'Segundo a Gazeta Esportiva, a Ponte Preta, com 13 pontos, já está rebaixada.'
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

{ id: 'morre-rj-mitte-breaking-bad', cat: 'cultura', own: false, t: '2026-10-12T18', d: '12 out 2026', img: 'cultura', src: 'CNN Brasil', url: U.cnnMitte,
  title: 'Morre RJ Mitte, o Walter White Jr. de "Breaking Bad", aos 34 anos',
  sum: 'A morte foi confirmada pelo gabinete de uma juíza de paz em Brownsville, no Texas. A causa não foi divulgada oficialmente.',
  body: [
    'O ator participou das cinco temporadas da série. Diagnosticado com paralisia cerebral aos 3 anos, era defensor das pessoas com deficiência, segundo nota de seus representantes.',
    'Também atuou nas séries "Switched at Birth" e "Vegas".'
  ] },

{ id: 'avenida-brasil-2-novos-nomes-elenco', cat: 'cultura', own: false, t: '2026-10-12T13', d: '12 out 2026', img: 'palco', src: 'CNN Brasil', url: U.cnnAvenida,
  title: '"Avenida Brasil 2": Globo anuncia mais 27 nomes no elenco',
  sum: 'Entre os novos nomes estão Nívea Maria, Evelyn Castro e Letícia Lima. A estreia está prevista para janeiro de 2027, às 21h.',
  body: [
    'A continuação é escrita por João Emanuel Carneiro, com direção artística de Ricardo Waddington. Heloísa Périssé volta como Monalisa, em participação temporária, segundo a CNN Brasil.',
    'Joaquim Lopes e Felipe Frazão também estão entre os anunciados.'
  ] },

{ id: 'premio-jabuti-finalistas-14-outubro', cat: 'cultura', own: false, t: '2026-10-12T10', d: '12 out 2026', img: 'arte', src: 'CBL', url: U.cblJabuti,
  title: 'Prêmio Jabuti anuncia os finalistas nesta quarta (14)',
  sum: 'Serão cinco finalistas por categoria. Os vencedores saem em 27 de outubro, na Sala São Paulo.',
  body: [
    'O anúncio da 68ª edição está marcado para as 12h, segundo a Câmara Brasileira do Livro, que organiza o prêmio. A cerimônia de entrega é só para convidados.'
  ] },

{ id: 'renato-russo-30-anos-morte', cat: 'cultura', own: false, t: '2026-10-11T10', d: '11 out 2026', img: 'palco', src: 'CNN Brasil', url: U.cnnRenato,
  title: 'Trinta anos sem Renato Russo: por onde andam os integrantes da Legião Urbana',
  sum: 'O cantor morreu em 11 de outubro de 1996, aos 36 anos. Dado Villa-Lobos e Marcelo Bonfá seguem em carreiras separadas.',
  body: [
    'Marcelo Bonfá lançou uma biografia em quadrinhos, "Minha Banda Preferida de Todos os Tempos", segundo a CNN Brasil. O baixista Renato Rocha, o Negrete, morreu em 2015.'
  ] },

{ id: 'morre-ator-edson-silva-95-anos', cat: 'cultura', own: false, t: '2026-10-12T08', d: '12 out 2026', img: 'palco', src: 'CNN Brasil', url: U.cnnEdson,
  title: 'Morre o ator Edson Silva, de "Laços de Família", aos 95 anos',
  sum: 'A morte foi divulgada no sábado (10) pela atriz Alcione Mazzeo. Ele também atuou em "Por Amor" e "Senhora do Destino".',
  body: [
    'Nascido em Juiz de Fora (MG), em 1930, Edson Silva estudou teatro com Paschoal Carlos Magno. Em "Laços de Família" (2000), viveu Heitor.',
    'A causa da morte não foi informada.'
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

{ id: 'ibovespa-recorde-209-mil-dolar-4-98', cat: 'economia', own: false, t: '2026-10-09T18', d: '9 out 2026', img: 'mercado', src: 'Agência Brasil', url: U.abDolar,
  title: 'Ibovespa bate recorde aos 209 mil pontos e sobe 8,82% na semana; dólar cai a R$ 4,98',
  sum: 'O índice subiu 1,38% na sexta-feira (9). Na semana, o dólar acumulou queda de 4,44%.',
  body: [
    'O Ibovespa fechou aos 209.066,90 pontos, novo recorde de fechamento, e chegou a 209.713 pontos durante o pregão. O dólar comercial terminou a R$ 4,985, queda de 0,78%. No ano, a moeda americana acumula baixa de 9,18%.',
    'Segundo a Agência Brasil, o movimento reflete a entrada de investimentos em ações brasileiras e as expectativas do mercado com o cenário eleitoral. O petróleo Brent subiu 0,42%, a US$ 104,72 o barril.'
  ] },

{ id: 'mercado-flavio-compromissos-fiscais', cat: 'economia', own: false, t: '2026-10-10T09', d: '10 out 2026', img: 'mercado', src: 'InfoMoney / Estadão Conteúdo', url: U.imFiscalFlavio,
  title: 'Otimismo do mercado com Flávio esbarra na falta de detalhes sobre o ajuste fiscal',
  sum: 'Economistas ouvidos pelo Estadão dizem que a campanha ainda não explicou quais gastos vai cortar. Assessores afirmam que Bolsa Família e BPC não serão afetados.',
  body: [
    'Segundo a reportagem, uma economista da FGV estima que o ajuste em discussão seria de R$ 200 bilhões a R$ 250 bilhões, sem definição de despesas, método ou prazo. Assessores de Flávio Bolsonaro (PL) dizem que não há intenção de mexer no Bolsa Família, no BPC nem na regra do salário mínimo.',
    'Analistas de mercado avaliam que a Bolsa pode devolver parte da alta se a sinalização continuar vaga.'
  ] },

{ id: 'gasolina-pode-cair-26-centavos-postos', cat: 'economia', own: false, t: '2026-10-09T19', d: '9 out 2026', img: 'plataforma', src: 'CNN Brasil', url: U.cnnGasolinaPostos,
  title: 'Gasolina pode ficar até R$ 0,26 mais barata nos postos, estima o governo',
  sum: 'O cálculo depende de as distribuidoras e os postos repassarem o corte de tributos. O preço médio estava em R$ 6,54 por litro, segundo a ANP.',
  body: [
    'A estimativa é do governo, que prorrogou e ampliou a isenção de tributos federais sobre a gasolina por 30 dias. O ministro do Planejamento, Bruno Moretti, disse que o objetivo é que haja repasse para a bomba.',
    'Segundo o Ministério da Fazenda, o decreto anterior vencia em 9 de outubro. A redução passou de R$ 0,63 para R$ 0,89 por litro.'
  ] },

{ id: 'propostas-economicas-lula-flavio', cat: 'economia', own: false, t: '2026-10-11T08', d: '11 out 2026', img: 'mercado', src: 'O Povo', url: U.opovoPropostas,
  title: 'Salário mínimo, gastos e 6x1: o que Lula e Flávio propõem para a economia',
  sum: 'Lula mantém o arcabouço fiscal e a regra de ganho real do mínimo. Flávio propõe corte de R$ 250 bilhões em despesas e correção do mínimo só pela inflação.',
  body: [
    'Segundo O Povo, Lula defende o fim da escala 6x1, com jornada de 40 horas, e o salário mínimo corrigido pelo INPC mais o crescimento do PIB, com ganho real limitado a 2,5%.',
    'Flávio Bolsonaro propõe cortar R$ 250 bilhões em despesas discricionárias, reduzir dez ministérios e investir R$ 900 bilhões em transportes por meio de concessões e parcerias. Os dois mantêm o Bolsa Família em R$ 691.'
  ] },

{ id: 'fmi-corta-pib-brasil-2026-eleva-mundo', cat: 'economia', own: true, t: '2026-10-13T05', d: '13 out 2026', img: 'mercado', read: 3,
  title: 'FMI reduz previsão de crescimento do Brasil para 2,2% em 2026 e eleva a do mundo para 3,1%',
  sum: 'Para 2027, o Fundo prevê alta de 1,9% no PIB brasileiro. O relatório supõe petróleo a US$ 96 o barril, em média, neste ano.',
  body: [
    'O Fundo Monetário Internacional divulgou na segunda-feira (12), durante as reuniões anuais em Bangkok, na Tailândia, a nova edição do relatório Perspectivas da Economia Mundial. A previsão para o PIB do Brasil em 2026 caiu de 2,4%, estimativa de julho, para 2,2%, segundo o Poder360. Para 2027, o Fundo espera 1,9%. Em 2025, o país cresceu 2,3%.',
    '## Inflação e emprego',
    'O FMI projeta inflação média de 4,4% no Brasil em 2026 e de 4,1% em 2027. O desemprego deve passar de 6,2% neste ano para 6,8% no próximo. Para a América Latina e o Caribe, a previsão é de crescimento de 2,3% em 2026 e de 2,5% em 2027.',
    '## O mundo',
    'A economia mundial deve crescer 3,1% em 2026, um pouco acima dos 3% previstos em julho, e 3,4% em 2027. Segundo a AP, o Fundo prevê 2,3% para os EUA, 4,5% para a China e 1,1% para a zona do euro neste ano. A diretora de pesquisa do FMI, Silvana Tenreyro, disse que as perspectivas são muito desiguais.',
    'O relatório supõe que o preço médio do petróleo fique em US$ 96 o barril e que o tráfego pelo Estreito de Ormuz se normalize até março. A inflação global prevista é de 4,7% em 2026.'
  ],
  box: { type: 'facts', title: 'As projeções do FMI', rows: [['Brasil em 2026', '2,2% (era 2,4%)'], ['Brasil em 2027', '1,9%'], ['Mundo em 2026', '3,1% (era 3%)'], ['Mundo em 2027', '3,4%'], ['Inflação no Brasil em 2026', '4,4%']] },
  sources: [['Poder360', U.p360Fmi], ['AP / ABC News', U.apFmi]] },

{ id: 'petroleo-brent-106-ataques-hutis', cat: 'economia', own: false, t: '2026-10-12T18', d: '12 out 2026', img: 'plataforma', src: 'O Tempo / AFP', url: U.otPetroleo,
  title: 'Petróleo sobe a US$ 106,65 após ataques dos hutis na Arábia Saudita',
  sum: 'O Brent subiu 1,84% e fechou no maior nível desde 15 de setembro. O WTI avançou 2,06%, a US$ 93,74.',
  body: [
    'Os ataques ao aeroporto de Riade pesaram mais que o anúncio de Trump de que a Rússia vai fornecer mais de 300 mil toneladas de diesel, segundo a AFP. Analistas duvidam de efeito imediato.',
    'O Goldman Sachs elevou de US$ 85 para US$ 90 a previsão para o Brent em dezembro.'
  ] },

{ id: 'nobel-economia-hall-woodford', cat: 'economia', own: false, t: '2026-10-12T07', d: '12 out 2026', img: 'mercado', src: 'AP / ABC News', url: U.apNobelEco,
  title: 'Nobel de Economia vai para os americanos Robert Hall e Michael Woodford',
  sum: 'Os dois foram premiados por modelos que ajudam governos e bancos centrais a reagir a choques, como crises de energia e de inflação.',
  body: [
    'Hall é professor da Universidade Stanford, e Woodford, da Universidade Columbia. Segundo a AP, o comitê disse que o trabalho mudou a teoria da política de estabilização.',
    'O prêmio é de 12 milhões de coroas suecas. Woodford disse por telefone que a notícia foi uma surpresa.'
  ] },

{ id: 'bolsas-nova-york-segunda-meta-sobe', cat: 'economia', own: false, t: '2026-10-12T18', d: '12 out 2026', img: 'mercado', src: 'InfoMoney / Estadão Conteúdo', url: U.imBolsasNy,
  title: 'Bolsas de Nova York fecham sem direção única; Meta sobe após lançar modelo de IA',
  sum: 'O Dow Jones subiu 0,38%, enquanto o S&P 500 caiu 0,06% e o Nasdaq, 0,44%. A B3 ficou fechada pelo feriado.',
  body: [
    'As ações da Meta subiram cerca de 3,4%. Fabricantes de chips caíram, com Micron e SK Hynix em queda de cerca de 4%, segundo o InfoMoney.',
    'O Ibovespa volta a operar nesta terça (13). O último fechamento foi de 209.066,90 pontos, recorde, na sexta (9).'
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

{ id: 'tse-meta-48-horas-perfis-lula', cat: 'tecnologia', own: true, t: '2026-10-13T00', d: '13 out 2026', img: 'celular', read: 3,
  title: 'Meta diz ao TSE que falha global, e não ação contra Lula, travou contagem de visualizações',
  sum: 'A empresa afirma que o problema atingiu criadores em mais de 100 países em 7 de outubro e pediu mais 48 horas para detalhar medidas sobre os perfis de Lula. A coligação e a Procuradoria-Geral Eleitoral têm 24 horas para se manifestar.',
  body: [
    'A Meta, dona do Facebook e do Instagram, entregou na segunda-feira (12) ao Tribunal Superior Eleitoral sua resposta às acusações da campanha de Lula (PT), que aponta queda no alcance de publicações do candidato. Segundo o Metrópoles, a empresa nega interferência e atribui o problema a uma falha técnica global.',
    '## A versão da empresa',
    'De acordo com a Meta, um incidente no Instagram deixou zeradas ou congeladas as contagens de visualizações de vídeos Reels entre 15h50 e 20h49 de 7 de outubro. A falha atingiu criadores em mais de 100 países e não afetou a entrega dos conteúdos. A empresa diz que, nesse dia, a distribuição da conta oficial de Lula ficou acima da média recente.',
    'Segundo a CNN Brasil, a Meta reconheceu falhas técnicas em anúncios, mas nega viés no algoritmo. A empresa se recusou a fornecer dados de contas de terceiros, alegando sigilo, e pediu mais 48 horas para informar as medidas aplicadas aos perfis de Lula desde 16 de agosto.',
    '## Próximos passos',
    'A coligação de Lula e a Procuradoria-Geral Eleitoral têm 24 horas cada para se manifestar. Depois, o ministro Marco Aurélio Bellizze analisa o pedido de liminar, segundo o Metrópoles.',
    'A campanha de Lula afirma, com base em levantamento do PT, que a página de Flávio Bolsonaro (PL) teve em média 2,96 vezes mais engajamento que a de Lula, com 17,2% menos seguidores.'
  ],
  box: { type: 'facts', title: 'O caso', rows: [['Resposta da Meta', 'Entregue na segunda (12)'], ['Versão da empresa', 'Falha global em 7 de outubro'], ['Países afetados', 'Mais de 100'], ['Pedido', 'Mais 48 horas para detalhar medidas'], ['Relator', 'Marco Aurélio Bellizze']] },
  sources: [['Metrópoles', U.metMetaTse], ['CNN Brasil', U.cnnMetaTse], ['Times Brasil', U.tbMeta], ['Poder360', U.p360Meta]] },

{ id: 'apple-evento-casa-inteligente-13-outubro', cat: 'tecnologia', own: false, t: '2026-10-12T20', d: '12 out 2026', img: 'celular', src: 'MacRumors', url: U.mrApple,
  title: 'Apple apresenta nesta terça (13) novos aparelhos para a casa; central HomeView é esperada',
  sum: 'Segundo sites especializados, devem ser mostrados a central HomeView, um novo HomePod mini e uma nova Apple TV 4K. A Apple não confirmou os produtos.',
  body: [
    'O evento "Welcome Home" acontece em Nova York, por volta das 10h de Brasília. Segundo o MacRumors, a Apple deve divulgar os anúncios em comunicados e receber imprensa e criadores num espaço fechado, sem a apresentação tradicional.',
    'A HomeView teria tela e versões de mesa e de parede, segundo os relatos. Preços e especificações oficiais ainda não foram divulgados.'
  ] },

{ id: 'meta-lanca-muse-wonder', cat: 'tecnologia', own: false, t: '2026-10-12T15', d: '12 out 2026', img: 'tecnologia', src: 'Olhar Digital', url: U.odMuse,
  title: 'Meta lança o modelo de IA Muse Wonder para disputar com OpenAI e Anthropic',
  sum: 'O modelo está em planos de US$ 20 ou US$ 100 por mês. Zuckerberg disse que não vai desacelerar os gastos com IA.',
  body: [
    'A versão mais potente, Muse Wonder Full, fica restrita a assinantes do Muse Code, de US$ 50 ou US$ 200 por mês. Segundo a Olhar Digital, o lançamento atrasou porque a Meta suspendeu parte do treinamento em julho.',
    'Em entrevista ao Financial Times, citada pela Olhar Digital, Mark Zuckerberg rejeitou pedidos para frear o desenvolvimento da IA.'
  ] },

{ id: 'vendas-celulares-caem-20-terceiro-trimestre', cat: 'tecnologia', own: false, t: '2026-10-12T12', d: '12 out 2026', img: 'celular', src: 'Olhar Digital', url: U.odCelulares,
  title: 'Vendas mundiais de celulares caem 20% no 3º trimestre, pior resultado desde 2012',
  sum: 'Segundo a Counterpoint Research, a falta de chips de memória, agravada pela demanda de IA, encareceu os aparelhos.',
  body: [
    'A Samsung lidera, com 23% do mercado, seguida pela Apple, com 22%. A Xiaomi teve queda de mais de 30% e ficou com 10%, segundo a estimativa preliminar.',
    'As vendas da Apple também caíram, em parte porque o iPhone 18 básico ficou para o ano que vem.'
  ] },

{ id: 'perseverance-recorde-distancia-marte', cat: 'tecnologia', own: false, t: '2026-10-12T14', d: '12 out 2026', img: 'ciencia', src: 'Olhar Digital', url: U.odPerseverance,
  title: 'Perseverance bate o recorde de distância percorrida em Marte',
  sum: 'O jipe-robô da Nasa passou de 45,2 km rodados desde o pouso, em 2021, e superou o Opportunity.',
  body: [
    'A marca foi atingida no domingo (11) e anunciada pelo laboratório JPL na segunda (12), segundo a Olhar Digital. O Opportunity rodou em Marte de 2004 a 2018.',
    'O recorde veio cerca de dois meses depois do previsto, porque o robô desviou para estudar rochas que podem estar entre as mais antigas já analisadas no planeta.'
  ] },

{ id: 'cidades-afundando-estudo-satelites', cat: 'tecnologia', own: false, t: '2026-10-12T11', d: '12 out 2026', img: 'ciencia', src: 'Olhar Digital', url: U.odCidades,
  title: 'Estudo com satélites mostra cidades afundando em várias partes do mundo',
  sum: 'A pesquisa analisou 465 cidades de 107 países. Em pontos da Cidade do México, o solo baixa cerca de 217 mm por ano.',
  body: [
    'O trabalho, publicado na revista Nature Cities, usou dados de 2014 a 2023. Medan, na Indonésia, tem afundamento mediano de cerca de 33 mm por ano, segundo a Olhar Digital.',
    'Nova York, Londres, Tóquio e Montevidéu estão entre as cidades estáveis. A reportagem não cita cidades brasileiras.'
  ] },

{ id: 'amazon-negocia-compra-decart', cat: 'tecnologia', own: false, t: '2026-10-12T16', d: '12 out 2026', img: 'tecnologia', src: 'Olhar Digital', url: U.odDecart,
  title: 'Amazon negocia compra da startup de IA Decart por cerca de US$ 7 bilhões, diz jornal',
  sum: 'A informação é do Wall Street Journal. O negócio ainda não foi fechado.',
  body: [
    'A Decart, de San Francisco, foi fundada em 2023 e valia quase US$ 4 bilhões em maio, segundo a Olhar Digital. A empresa já captou mais de US$ 400 milhões.'
  ] },

];
