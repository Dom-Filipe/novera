/* ============================================================
   NOVERA: conteúdo do site. Edite este arquivo e rode `node build.js`.
   Regras completas em ATUALIZACAO.md.
   ============================================================ */

/* Topo do site: data da edição e mercado */
const META = {
  /* Endereço público do site, sem barra no final. Usado nos links das redes sociais. */
  siteUrl: 'https://novera-sepia.vercel.app',
  dataExtenso: 'Quinta-feira, 15 de outubro de 2026',
  edicao: '15 out 2026',
  ibovespa: { valor: '206.505', variacao: '0,18%', sobe: false },
  dolar: { valor: 'R$ 5,03', variacao: '0,17%', sobe: true },
  fechamento: '14/10'
};

/* Home: destaque principal, dois laterais e três da faixa de baixo (IDs de notícias "own: true") */
const FEATURED = {
  lead: 'senado-aprova-fim-escala-6x1',
  side: ['quaest-flavio-46-lula-44-segundo-turno', 'libertadores-semifinais-tres-brasileiros'],
  also: ['papa-leao-cirurgia-pulmao', 'ibovespa-cai-dolar-sobe-inflacao-eua-14-outubro', 'decreto-sac-atendimento-humano-20-segundos']
};

/* Home: "Escolhas da redação" (5 IDs) */
const PICKS = ['campanha-flavio-porto-alegre-lula-carta-evangelicos', 'ataque-aeroporto-riade-hutis', 'camara-aprova-teto-mei-perdao-dividas', 'premio-jabuti-finalistas-14-outubro', 'ataque-balistico-kiev-usina-chp4'];

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
  /* Atualização de 14 out 2026 */
  bdfMaster: 'https://www.brasildefato.com.br/2026/10/13/caso-master-fachin-se-reune-com-pf-para-tratar-de-citacoes-a-ministros/',
  dcMaster: 'https://diariocarioca.com/2026/10/13/politica/judiciario/master-fachin-se-reune-com-pf-para-tratar-de-citacoes-a-ministros',
  metMei: 'https://www.metropoles.com/brasil/pix-prospera-e-desenrola-governo-lanca-medidas-para-fortalecer-meis',
  imMei: 'https://www.infomoney.com.br/minhas-financas/pix-mei-perdao-de-divida-e-mais-o-que-muda-para-microempreendedor-com-prospera-mei/',
  abMeiImpacto: 'https://agenciabrasil.ebc.com.br/economia/noticia/2026-10/perdao-de-dividas-de-meis-tera-impacto-de-r-3-bilhoes',
  terraMei: 'https://www.terra.com.br/economia/lula-anuncia-projeto-de-pix-mei-de-r-5-mil-e-perdao-a-r-126-bi-de-dividas-a-12-dias-da-eleicao,2ad207d19fe31e127be279f13c21cc7etsk1tmuy.html',
  exMei: 'https://exame.com/brasil/governo-lula-perdoa-r-126-bi-em-dividas-de-meis-e-anuncia-pix-de-ate-r-5mil-por-empreendedor/',
  exFlavioMei: 'https://exame.com/brasil/flavio-bolsonaro-critica-pix-para-mei-anunciado-por-lula-ele-acha-que-o-povo-e-otario/',
  istoeVisita: 'https://istoe.com.br/flavio-visita-bolsonaro-apos-90-dias-segundo-turno',
  metVisita: 'https://www.metropoles.com/brasil/com-liberacao-de-moraes-flavio-visita-jair-bolsonaro-em-casa-apos-90-dias',
  pbnVisita: 'https://www.pbnordeste.com.br/flavio-faz-visita-ao-pai-em-prisao-domiciliar-e-recebe-apoios-em-sp/',
  otMdb17: 'https://www.otempo.com.br/eleicoes/2026/presidentes/2026/10/13/flavio-bolsonaro-recebe-apoio-de-17-diretorios-do-mdb-para-o-segundo-turno',
  sbtMdb: 'https://sbtnews.sbt.com.br/noticia/politica/mdb-declara-apoio-da-maioria-de-seus-diretorios-a-flavio',
  otMdb10: 'https://www.otempo.com.br/eleicoes/2026/presidentes/2026/10/13/mdb-se-divide-no-segundo-turno-da-disputa-presidencial-e-10-diretorios-anunciam-apoio-a-lula',
  senPec13: 'https://www12.senado.leg.br/noticias/materias/2026/10/13/pec-do-fim-da-6x1-pode-ser-votada-nesta-quarta-apos-quinta-sessao-de-discussao',
  cnnTseReuniao: 'https://www.cnnbrasil.com.br/blogs/jussara-soares/eleicoes/campanhas-de-flavio-e-lula-tentam-buscar-consenso-apos-reuniao-do-tse/',
  abExercito2: 'https://agenciabrasil.ebc.com.br/radioagencia-nacional/justica/audio/2026-10/nunes-marques-manda-derrubar-novamente-o-canal-exercito-do-lula',
  otPeDeMeia: 'https://www.otempo.com.br/politica/governo/2026/10/13/lula-anuncia-pe-de-meia-para-universitarios-com-pagamentos-de-r-700-por-mes',
  p360Pesquisas12: 'https://poder360.com.br/poder-eleicoes-2026/saiba-como-estao-lula-e-flavio-nas-pesquisas-a-12-dias-do-2o-turno',
  metAlertaSp: 'https://www.metropoles.com/sao-paulo/sp-alerta-tempestades-granizo-ventos',
  vnPapa: 'https://www.vaticannews.va/en/pope/news/2026-10/pope-leo-gemelli-hospital-holy-see-press-office-update-14-0ctobe.html',
  pbsPapa: 'https://www.pbs.org/newshour/health/pope-leo-undergoes-surgery-to-remove-lung-nodule-at-romes-gemelli-hospital',
  axPapa: 'https://www.axios.com/2026/10/13/pope-leo-lung-nodule-surgery-successful',
  ajAramco: 'https://www.aljazeera.com/news/2026/10/13/houthis-threaten-saudi-arabias-aramco-facilities-and-airports',
  ajTrumpHutis: 'https://www.aljazeera.com/news/2026/10/13/trump-says-houthis-trying-to-increase-oil-prices-before-us-elections',
  ajLive14: 'https://www.aljazeera.com/news/liveblog/2026/10/14/iran-war-live-saudi-coalition-hits-houthi-sites-aramco-office-hit-in-east',
  kpKiev: 'https://www.kyivpost.com/post/86971',
  unnKiev: 'https://unn.ua/en/news/the-death-toll-from-the-overnight-attack-on-kyiv-has-risen-to-three',
  kiTrumpTregua: 'https://kyivindependent.com/trump-says-ukraine-russia-agree-to-energy-strike-ceasefire-because-i-said-they-agreed/',
  ajBulgaria: 'https://www.aljazeera.com/news/2026/10/13/drone-attack-sinks-ship-off-bulgarias-black-sea-coast-pm-says',
  ajKabila: 'https://www.aljazeera.com/news/2026/10/13/former-dr-congo-president-kabila-joins-m23-rebels-in-a-new-coalition',
  axOmar: 'https://www.axios.com/2026/10/12/ilhan-omar-search-immigration',
  ajPti: 'https://www.aljazeera.com/news/2026/10/13/imran-khans-pti-braces-to-fight-federal-takeover-of-khyber-pakhtunkhwa',
  rtCoreia: 'https://www.internazionale.it/ultime-notizie-reuters/2026/10/13/north-korea-test-fires-tactical-ballistic-missile-kcna-says',
  tribOrmuz: 'https://www.tribuneindia.com/news/world/irgc-navy-says-it-hit-third-supertanker-in-strait-of-hormuz',
  pulzoColombia: 'https://www.pulzo.com/mundo/colombia-traslada-su-embajada-a-jerusalen-clave-en-la-relacion-bilateral-con-israel-PP5328809A',
  aeVasco: 'https://agenciaesporte.com.br/vasco/vasco-vence-o-boca-na-bombonera-com-um-a-menos-e-esta-a-um-empate-da-decisao-da-sul-americana/',
  lanceVasco: 'https://www.lance.com.br/vasco/veja-gols-em-boca-juniors-e-vasco-pela-sul-americana.html',
  ccVasco: 'https://www.cartacapital.com.br/esporte/vasco-vence-o-boca-juniors-em-la-bombonera-quebra-tabu-de-75-anos-e-faz-historia-na-sul-americana/',
  tjSul: 'https://tribunadejundiai.com.br/mais/esportes/sul-americana-veja-as-datas-horarios-e-transmissoes-das-semifinais/',
  lanceFeminina: 'https://www.lance.com.br/futebol-feminino/brasil-abre-2-a-0-mas-cede-empate-para-a-argentina-em-pernambuco.html',
  gzFluPal: 'https://www.gazetaesportiva.com/times/palmeiras/fluminense-x-palmeiras-saiba-onde-assistir-ao-jogo-de-ida-da-semifinal-da-libertadores/',
  cnnFlu: 'https://www.cnnbrasil.com.br/esportes/futebol/fluminense/libertadores-fluminense-tem-uma-duvida-para-encarar-palmeiras/',
  otLiberta: 'https://www.otempo.com.br/sports/onde-assistir/2026/10/13/veja-onde-assistir-fluminense-x-palmeiras-e-estudiantes-x-flamengo-pelas-semifinais-da-libertadores',
  placarFla: 'https://placar.com.br/copa-libertadores/flamengo-define-relacionados-contra-estudiantes-na-libertadores/',
  otGalo: 'https://www.otempo.com.br/sports/atletico/2026/10/13/as-duvidas-desfalques-e-pendurados-do-atletico-para-o-duelo-com-o-city-torque-pela-sul-americana',
  redennGinastica: 'https://www.redenn.com.br/noticia/selecoes-brasileiras-de-ginastica-artistica-encerram-periodo-de-aclimatacao-para-o-mundial-de-roterda',
  cnnNetinho: 'https://www.cnnbrasil.com.br/pop/celebridades/morre-cantor-netinho-do-hit-milla-aos-60-anos-apos-cancer/',
  cnnNetinhoEcad: 'https://www.cnnbrasil.com.br/pop/musica/morte-de-netinho-alem-de-mila-veja-quais-sao-suas-musicas-mais-tocadas/',
  otNetinho: 'https://www.otempo.com.br/canal-o-tempo/programas/o-tempo-news/2026/10/13/morre-netinho-cantor-de-milla-e-icone-do-axe-aos-60-anos-o-tempo-news',
  prefMostra: 'https://prefeitura.sp.gov.br/web/cultura/w/50%C2%AA-mostra-internacional-de-cinema-em-s%C3%A3o-paulo-exibe-380-t%C3%ADtulos-de-93-pa%C3%ADses-com-sess%C3%B5es-gratuitas-nos-espa%C3%A7os-municipais-de-cultura',
  cnnMostra2: 'https://www.cnnbrasil.com.br/pop/cinema/mostra-de-sp-veja-onde-e-como-assistir-aos-filmes-selecionados/',
  omeleteMostra: 'https://www.omelete.com.br/filmes/50-mostra-sp-revela-programacao-completa-fjord-rede-social-2-feito-pipa-mais',
  rsLolla: 'https://rollingstone.com.br/musica/lollapalooza-brasil-2027-anunciara-as-atracoes-por-dia-nesta-quarta-14',
  otRegininha: 'https://www.otempo.com.br/entretenimento/2026/10/13/morre-aos-81-anos-regininha-cantora-que-marcou-novela-da-globo-com-teletema',
  bandStreet: 'https://www.band.com.br/entretenimento/filmes-e-series/street-fighter-confira-tudo-sobre-o-novo-filme-antes-da-estreia',
  bbBts: 'https://billboard.com.br/bts-brasil-live-nation-setor-calcada/',
  sbMercado: 'https://soubrasilia.com/dolar-fecha-r-5-023-alta-074-ibovespa-cai-104-pesquisas-eleitorais-swap-cancelado-13-outubro/',
  metMercado: 'https://www.metropoles.com/brasil/dolar-supera-r-5-e-bolsa-cai-104-apos-recorde-historico',
  sunoMercado: 'https://www.suno.com.br/noticias/ibovespa-hoje-13-outubro-mglu3-lren3-dolar/',
  otDolar: 'https://www.otempo.com.br/economia/2026/10/13/dolar-sobe-em-meio-a-volatilidade-eleitoral',
  bpFocus: 'https://bpmoney.com.br/mercado/boletim-focus-mercado-eleva-ipca-para-522-e-reduz-selic-para-1325/',
  crFocus: 'https://www.canalrural.com.br/economia/projecao-do-mercado-para-o-ipca-de-2026-sobe-a-522-no-focus/',
  otBets13: 'https://www.otempo.com.br/economia/2026/10/13/bets-devolvem-mais-r-1-bilhao-a-apostadores-faltam-ainda-r-159-milhoes',
  cnnPetroleo13: 'https://www.cnnbrasil.com.br/economia/money/mercado/petroleo-fecha-sem-rumo-unico-com-diesel-russo-e-riscos-no-oriente-medio/',
  atlasDiesel: 'https://atlaspublico.com.br/noticias/portaria-da-fazenda-acrescenta-rs-1-40-por-litro-a-91992',
  clickComb: 'https://clickpetroleoegas.com.br/fiscalizacao-nos-combustiveis-dispara-no-brasil-governo-ja-soma-12-279-acoes-aperta-postos-por-preco-abusivo-e-encontra-bombas-irregulares-e-documentos-vencidos-fcmo87/',
  apChina: 'https://www.ksat.com/business/2026/10/14/chinas-exports-surge-363-in-september-as-pressure-ramps-up-to-rebalance-trade/',
  tbHomeView: 'https://tecnoblog.net/noticias/apple-lanca-homeview-tela-inteligente-para-controlar-a-casa/',
  tbHomePod: 'https://tecnoblog.net/noticias/apple-atualiza-linha-homepod-mini-apos-seis-anos/',
  mrHomeView: 'https://www.macrumors.com/2026/10/13/pre-order-homeview/',
  tgHomeView: 'https://www.tomsguide.com/news/live/apple-homeview-event-october-13-live-updates',
  mmHomePod: 'https://macmagazine.com.br/post/2026/10/13/apple-lanca-homepod-mini-2-com-chip-s10-suporte-a-siri-ai-novas-cores-e-recursos/',
  gmLigacoes: 'https://gazetamercantil.com/governo-novas-regras-bloqueio-ligacoes-abusivas-anatel',
  odLigacoes: 'https://olhardigital.com.br/2026/10/13/seguranca/chamadas-suspeitas-poderao-ser-bloqueadas-antes-de-tocar-no-celular/',
  rcnLigacoes: 'https://www.rcn67.com.br/campo-grande/para-frear-golpes-e-disparos-em-massa-governo-endurece-regras-e-exige-selo-de-autenticidade-em-ligacoes',
  cbMeta: 'https://www.correiobraziliense.com.br/politica/2026/10/7519660-apos-acao-de-lula-meta-remove-sete-perfis-irregulares-e-cita-falha-tecnica.html',
  exGemini: 'https://exame.com/inteligencia-artificial/google-libera-globalmente-o-gemini-4-argon-para-empresas-e-assinantes/',
  swOpenai: 'https://www.swissinfo.ch/por/funcion%C3%A1rio-saudita-%C3%A9-acusado-de-colocar-escuta-na-sede-da-openai/92211983',
  gnCharacter: 'https://globalnews.ca/news/12100373/character-ai-bankrupt-disney/',
  terraAncine: 'https://terra.com.br/noticias/hackers-invadem-site-da-ancine-e-publicam-ataques-contra-nordestinos,8b798ef47b437526fc66e03cb10d15fehu3fretn.html',
  /* Atualização de 15 out 2026 */
  ab6x1: 'https://agenciabrasil.ebc.com.br/politica/noticia/2026-10/senado-aprova-fim-da-escala-6x1-e-reducao-da-jornada-de-trabalho',
  cnn6x1: 'https://www.cnnbrasil.com.br/politica/senado-aprova-fim-da-escala-6x1/',
  cnnMourao: 'https://www.cnnbrasil.com.br/politica/hamilton-mourao-e-o-unico-senador-a-votar-contra-a-pec-do-fim-da-6x1/',
  cnnFlavio6x1: 'https://www.cnnbrasil.com.br/politica/flavio-diz-que-votara-por-fim-da-6x1-e-que-governo-devera-pagar-a-conta/',
  ot6x1: 'https://www.otempo.com.br/politica/congresso/2026/10/14/fim-da-escala-6x1-e-aprovado-em-segundo-turno-pelo-senado-e-pec-vai-a-promulgacao',
  cf6x1: 'https://www.congressoemfoco.com.br/noticia/123241/por-75-votos-a-um-senado-aprova-pec-do-fim-da-escala-6x1',
  p360Lula6x1: 'https://www.poder360.com.br/brasil/lula-comemora-fim-da-escala-6-x-1-sorte-do-povo-brasileiro/',
  metQuaest: 'https://www.metropoles.com/brasil/quaest-flavio-bolsonaro-tem-46-e-lula-marca-44-no-2o-turno',
  cnnQuaest: 'https://www.cnnbrasil.com.br/eleicoes/quaest-flavio-tem-46-no-2o-turno-lula-44/',
  ccQuaest: 'https://www.cartacapital.com.br/politica/quaest-mostra-empate-tecnico-entre-flavio-bolsonaro-e-lula-a-11-dias-do-2o-turno/',
  opovoDatafolha: 'https://opovo.com.br/noticias/politica/eleicoes/2026/10/14/datafolha-e-quaest-divulgam-novas-pesquisas-sobre-2-turno-entre-lula-e-flavio.html',
  abAgenda14: 'https://agenciabrasil.ebc.com.br/politica/noticia/2026-10/confira-agenda-dos-presidenciaveis-nesta-quarta-feira-14',
  gpFlavioPoa: 'https://www.gazetadopovo.com.br/eleicoes/2026/flavio-bolsonaro-promete-guerra-ao-trafico-e-prosperidade-por-40-anos/',
  cbCartaEvangelicos: 'https://www.correiobraziliense.com.br/politica/2026/10/7520186-em-carta-aos-evangelicos-lula-cita-familia-fim-das-bets-e-escala-6x1.html',
  metAgenda15: 'https://www.metropoles.com/brasil/eleicoes-2026-confira-as-agendas-de-flavio-e-lula-nesta-quinta-15-10',
  opovoDebates: 'https://www.opovo.com.br/noticias/politica/eleicoes/2026/10/14/hoje-tem-debate-entre-lula-e-flavio-veja-o-calendario.html',
  abTseVideo: 'https://agenciabrasil.ebc.com.br/justica/noticia/2026-10/tse-ordena-que-flavio-e-nikolas-removam-video-de-criancas-contra-lula',
  acMaster: 'https://acritica.net/justica/caso-banco-master-stf-busca-esclarecimentos-antes-de-2027-para-evitar-pressao/',
  amPapa: 'https://www.americamagazine.org/vatican-dispatch/2026/10/14/pope-leo-lung-cancer-recovery-walking/',
  apAramco: 'https://www.pbs.org/newshour/world/iran-backed-houthis-strike-saudi-oil-company-aramcos-headquarters-officials-say',
  cbsHutis14: 'https://www.cbsnews.com/live-updates/iran-war-us-houthi-saudi-arabia-trump/',
  ajOrmuz15: 'https://www.aljazeera.com/news/liveblog/2026/10/15/iran-war-live-tehran-vows-to-fight-until-us-yields-as-ships-sink-in-hormuz',
  kiAtaque14: 'https://kyivindependent.com/russian-attacks-kill-at-least-10-injure-91-across-ukraine-over-past-day-as-ballistic-missiles-strike-kyiv-for-second-straight-night/',
  kiKropyvnytskyi: 'https://kyivindependent.com/intense-russian-assault-on-kropyvnytskyi-kills-3-injures-6/',
  kiTregua14: 'https://kyivindependent.com/moscow-says-scope-of-trumps-energy-truce-unclear-after-launching-new-attack-on-ukraine-2/',
  kiTraido: 'https://kyivindependent.com/zelensky-says-he-feels-betrayed-over-trump-russia-deal/',
  btaBulgaria: 'https://www.bta.bg/en/news/world/1224856-bulgaria-abandons-search-for-crew-of-hs-dignity',
  i24Colombia: 'https://www.i24news.tv/en/news/israel/diplomacy/artc-colombia-opens-embassy-in-jerusalem-tenth-in-israel-s-capital-free-trade-agreement-reinstated',
  ajKabila14: 'https://www.aljazeera.com/news/2026/10/14/ex-drc-president-joseph-kabila-joins-hands-with-m23-rebels-why-it-matters',
  ajMilei: 'https://www.aljazeera.com/news/2026/10/15/argentinas-milei-backs-trump-for-us-midterms-calls-vote-crucial-for-west',
  ajGaza14: 'https://www.aljazeera.com/news/2026/10/14/israeli-attacks-kill-one-in-gaza-wound-journalists-in-occupied-west-bank',
  opovoPalFlu: 'https://www.opovo.com.br/esportes/futebol/2026/10/14/palmeiras-bate-fluminense-por-2-a-1-no-maracana-e-larga-em-vantagem-nas-semis-da-libertadores.html',
  abcPalFlu: 'https://abcagora.com.br/2026/10/14/palmeiras-vence-fluminense-libertadores/',
  npColetiva: 'https://nossopalestra.com.br/noticias/coletiva/auxiliar-do-palmeiras-valoriza-resultado-diante-do-fluminense-e-destaca-faltam-noventa-minutos',
  lanceFla15: 'https://www.lance.com.br/flamengo/na-argentina-flamengo-encerra-preparacao-para-pegar-o-estudiantes-veja-provavel-escalacao.html',
  imiranteFla: 'https://m.imirante.com/esporte/maranhao/2026/10/13/flamengo-cinco-desfalques-duelo-estudiantes',
  galoCity: 'https://atletico.com.br/atletico-vence-city-torque-na-ida-da-semifinal-da-sula-americana/',
  lanceGaloCity: 'https://www.lance.com.br/atletico-mineiro/atletico-vence-o-city-torque-com-autoridade-e-da-passo-importante-rumo-a-final-da-sul-americana.html',
  cnnSeedorf: 'https://www.cnnbrasil.com.br/esportes/futebol/corinthians/seedorf-chega-ao-corinthians-e-exalta-ex-tecnico-brasileiro-dos-melhores/',
  jpSeedorf: 'https://jovempan.com.br/esportes/futebol/corinthians/seedorf-e-apresentado-como-tecnico-do-corinthians-um-dos-maiores-clubes-do-mundo/',
  metSeedorf: 'https://www.metropoles.com/esportes/seedorf-promete-reviravolta-no-corinthians-leao-ferido-e-sempre-perigoso',
  gpxAntonelli: 'https://www.grandprix.com/news/how-antonelli-can-clinch-the-2026-title-in-austin.html',
  otLibFem: 'https://www.otempo.com.br/sports/cruzeiro/2026/10/14/cruzeiro-corinthians-e-palmeiras-iniciam-caca-pelo-titulo-da-libertadores-feminina-2026-veja-jogos',
  aloNetinho: 'https://aloalobahia.com/noticias/2026/10/14/velorio-de-netinho-e-realizado-em-cerimonia-reservada-a-familiares-e-amigos-em-salvador/',
  ninjaMostra: 'https://midianinja.org/50a-mostra-sp-abre-nesta-quarta-14-com-filmes-de-james-gray-e-kleber-mendonca-filho/',
  rsMostra: 'https://rollingstone.com.br/cinema/50a-mostra-internacional-de-cinema-de-sao-paulo-comeca-nesta-quinta-15/',
  cnnJabuti: 'https://www.cnnbrasil.com.br/pop/premio-jabuti-2026-divulga-lista-de-finalistas-deste-ano-veja/',
  qcuJabuti: 'https://quatrocincoum.com.br/noticias/premios-literarios/os-115-finalistas-do-premio-jabuti-2026/',
  jbrLolla: 'https://jornaldebrasilia.com.br/entretenimento/katia-flavia/lollapalooza-2027-anuncia-line-up-e-abre-venda-de-ingressos-avulsos-veja-quem-toca-em-cada-dia/',
  bandLolla: 'https://www.band.com.br/entretenimento/musica/lollapalooza-2027-divulga-shows-por-dia-veja-programacao-e-precos',
  aloLolla: 'https://aloalobahia.com/noticias/2026/10/14/lollapalooza-2027-divulga-lineup-por-dia-ingressos-custam-ate-r-2-320/',
  bpBilheteria: 'https://bpmoney.com.br/noticias/minha-melhor-amiga-passa-100-milhoes-bilheteria/',
  exMercado14: 'https://exame.com/invest/mercados/ibovespa-fecha-estavel-com-inflacao-nos-eua-e-corrida-eleitoral-dolar-vai-a-r-502/',
  bpMercado14: 'https://bpmoney.com.br/mercado/ibovespa-cai-018-inflacao-eua-pesquisas-eleitorais/',
  p360Mercado14: 'https://www.poder360.com.br/poder-economia/dolar-sobe-a-r-503-e-ibovespa-cai-018-com-inflacao-dos-eua/',
  imMercado14: 'https://www.infomoney.com.br/mercados/ibovespa-hoje-bolsa-de-valores-ao-vivo-14102026/',
  forbesMercado14: 'https://forbes.com.br/forbes-money/2026/10/ibovespa-fecha-em-queda-com-exterior-e-de-olho-em-pesquisas-eleitorais/',
  abMeiCamara: 'https://agenciabrasil.ebc.com.br/politica/noticia/2026-10/camara-aprova-aumento-no-limite-de-receita-bruta-do-mei',
  abServicos: 'https://agenciabrasil.ebc.com.br/economia/noticia/2026-10/setor-de-servicos-cai-01-de-julho-para-agosto-mostra-ibge',
  imServicos: 'https://www.infomoney.com.br/economia/queda-de-servicos-em-agosto-reforca-leituras-de-pib-estagnado-no-3o-trimestre/',
  opovoPetroleo14: 'https://www.opovo.com.br/noticias/economia/2026/10/14/petroleo-fecha-em-alta-com-ataque-a-saudi-aramco-e-riscos-de-navegacao-no-estreito-de-ormuz.html',
  abIcei: 'https://agenciabrasil.ebc.com.br/economia/noticia/2026-10/confianca-da-industria-sobe-em-outubro-mas-setor-segue-pessimista',
  tribBets: 'https://tribunapr.com.br/noticias/economia/bancos-devolvem-hoje-ultimo-saldo-de-apostadores-em-plataformas-de-bets',
  tbSac: 'https://tecnoblog.net/noticias/sac-tera-de-atender-80-das-chamadas-em-ate-20-segundos/',
  gartnerIa: 'https://www.gartner.com/en/newsroom/press-releases/2026-10-14-gartner-says-over-us-dollars-three-and-a-half-trillion-of-artificial-intelligence-infrastructure-spending-could-be-exposed-to-impairment-by-the-end-of-2030',
  tbFmiIa: 'https://tecnoblog.net/noticias/bolha-da-ia-pode-derrubar-a-economia-global-alerta-fmi/',
  asmlQ3: 'https://www.sec.gov/Archives/edgar/data/0000937966/000162828026065813/pressreleasefinancialresul.htm',
  tbPresidios: 'https://tecnoblog.net/noticias/governo-autoriza-bloqueio-de-celulares-em-presidios-sem-ordem-judicial/',
  jcNetflix: 'https://www.jornaldocomercio.com/esportes/2026/10/1266678-netflix-entra-na-copa-de-2030-e-compra-direitos-dos-104-jogos-na-espanha-e-em-andorra.html',
  ctIphone13: 'https://canaltech.com.br/smartphone/iphone-13-lidera-ranking-de-celulares-mais-consertados-no-brasil-em-2026/',
  odOpenaiPreso: 'https://olhardigital.com.br/2026/10/13/pro/openai-encontra-gravador-escondido-em-escritorio-e-funcionario-e-preso/',
};

const NEWS = [
/* ===================== NACIONAL ===================== */

{ id: 'senado-aprova-fim-escala-6x1', cat: 'nacional', own: true, t: '2026-10-14T22', d: '14 out 2026', img: 'congresso', read: 4,
  title: 'Senado aprova por 75 a 1 o fim da escala 6x1, e PEC vai à promulgação',
  sum: 'A jornada máxima cai de 44 para 40 horas semanais, sem corte de salário, com dois dias de folga remunerada. Como o texto não mudou, ele não volta à Câmara.',
  body: [
    'O Senado aprovou na noite de quarta-feira (14), em dois turnos, a proposta de emenda à Constituição que acaba com a escala 6x1. Foram 75 votos a favor e 1 contra em cada turno, segundo a Agência Brasil, a CNN Brasil e o Poder360. Eram necessários pelo menos 49 votos. Um calendário especial, aprovado por unanimidade, permitiu votar os dois turnos no mesmo dia.',
    'O único voto contrário foi do senador Hamilton Mourão (Republicanos-RS). O candidato Flávio Bolsonaro (PL-RJ), que é senador, votou a favor, de forma remota, segundo O Tempo.',
    '## O que muda',
    'A jornada máxima passa de 44 para 40 horas por semana, sem redução de salário. O trabalhador terá dois dias de descanso remunerado por semana, de preferência aos domingos.',
    'A mudança será gradual. Sessenta dias depois da promulgação, o limite cai para 42 horas e começam as duas folgas semanais. Doze meses depois disso, o limite passa a 40 horas. A oposição propunha uma transição de dez anos, o que não foi aceito. Medidas para os setores mais afetados ficam para um projeto de lei posterior, segundo O Tempo.',
    '## Próximo passo',
    'Como os senadores não alteraram o texto aprovado pela Câmara em maio, a PEC segue direto para promulgação em sessão do Congresso. A data ainda não foi marcada.',
    '## Reações',
    'O presidente Lula (PT), que acompanhou a votação no Palácio da Alvorada, chamou a aprovação de conquista histórica nas redes sociais, segundo o Poder360. Na terça (13), Flávio Bolsonaro tinha dito que votaria a favor porque a maioria dos trabalhadores quer o fim da 6x1, mas afirmou que a conta ficará com o governo e alertou para o risco de mais informalidade, segundo a CNN Brasil.',
    'O presidente do Senado, Davi Alcolumbre (União-AP), falou em dia histórico e disse ter cumprido a promessa de votar o tema depois do primeiro turno das eleições. O presidente da Câmara, Hugo Motta (Republicanos-PB), disse que a aprovação coroa um esforço longo.'
  ],
  box: { type: 'facts', title: 'A PEC da 6x1', rows: [['Placar no Senado', '75 a 1, nos dois turnos'], ['Jornada', 'De 44 para 40 horas semanais'], ['Folgas', 'Dois dias por semana, sem corte de salário'], ['Transição', '42 horas em 60 dias; 40 horas 12 meses depois'], ['Próximo passo', 'Promulgação, ainda sem data']] },
  sources: [['Agência Brasil', U.ab6x1], ['CNN Brasil', U.cnn6x1], ['CNN Brasil', U.cnnMourao], ['CNN Brasil', U.cnnFlavio6x1], ['O Tempo', U.ot6x1], ['Congresso em Foco', U.cf6x1], ['Poder360', U.p360Lula6x1]] },

{ id: 'quaest-flavio-46-lula-44-segundo-turno', cat: 'nacional', own: true, t: '2026-10-14T18', d: '14 out 2026', img: 'eleicao', read: 3,
  title: 'Quaest: Flávio tem 46% e Lula, 44%, no segundo turno; resultado é de empate técnico',
  sum: 'A diferença está dentro da margem de erro, de 2 pontos. Brancos e nulos somam 9%. O Datafolha divulga nova pesquisa nesta quinta (15).',
  body: [
    'A pesquisa Quaest divulgada na quarta-feira (14) mostra Flávio Bolsonaro (PL) com 46% das intenções de voto e Lula (PT) com 44% no segundo turno da eleição presidencial. Brancos e nulos somam 9%, e indecisos, 1%. Como a margem de erro é de 2 pontos para mais ou para menos, os dois estão em empate técnico.',
    '## Comparação',
    'Foi a primeira pesquisa Quaest depois do primeiro turno. No levantamento de 3 de outubro, Flávio tinha 44%, e Lula, 42%. No primeiro turno, em 4 de outubro, Flávio teve 47,03% dos votos válidos, e Lula, 45,16%.',
    'Segundo a CartaCapital e o Metrópoles, a rejeição é de 54% para Flávio e de 53% para Lula.',
    '## Como foi feita',
    'A Quaest entrevistou 2.154 eleitores com 16 anos ou mais, em casa, de 10 a 13 de outubro. A pesquisa foi contratada pela Globo e está registrada no TSE com o número BR-08729/2026. O nível de confiança é de 95%.',
    '## Datafolha',
    'O Datafolha divulga nesta quinta (15) uma nova pesquisa, com 2.520 entrevistas feitas de 13 a 15 de outubro, margem de erro de 2 pontos e registro BR-00466/2026, segundo O Povo. O segundo turno é em 25 de outubro.'
  ],
  box: { type: 'bars', title: 'Quaest: 2º turno', unit: '% das intenções de voto', max: 55, rows: [['Flávio Bolsonaro (PL)', 46], ['Lula (PT)', 44], ['Brancos e nulos', 9], ['Indecisos', 1]], note: 'Margem de erro de 2 pontos. Registro BR-08729/2026.' },
  sources: [['Metrópoles', U.metQuaest], ['CNN Brasil', U.cnnQuaest], ['CartaCapital', U.ccQuaest], ['O Povo', U.opovoDatafolha]] },

{ id: 'campanha-flavio-porto-alegre-lula-carta-evangelicos', cat: 'nacional', own: true, t: '2026-10-14T20', d: '14 out 2026', img: 'eleicao', read: 3,
  title: 'Flávio faz ato em Porto Alegre e Lula divulga carta a evangélicos; nesta quinta, presidente vai ao Jornal Nacional',
  sum: 'Flávio prometeu "guerra ao tráfico" e confirmou presença no debate da Band, no domingo (18). Na carta, Lula fala em família, combate às bets e fim da 6x1.',
  body: [
    'A 11 dias do segundo turno, os dois candidatos à Presidência tiveram agendas diferentes na quarta-feira (14). Flávio Bolsonaro (PL) fez campanha de rua em Porto Alegre, e Lula (PT) ficou em Brasília, onde acompanhou a votação do fim da escala 6x1 no Senado.',
    '## Flávio no Rio Grande do Sul',
    'Flávio visitou moradores da Vila Brasília, no bairro Sarandi, e fez um ato no Largo Glênio Peres, ao lado do Mercado Público, segundo a Agência Brasil. No discurso, prometeu uma "guerra ao tráfico" a partir de janeiro de 2027 e defendeu reduzir a maioridade penal para 16 anos, e para 14 anos em crimes graves. Também prometeu retomar obras contra cheias e o crédito a produtores atingidos pela enchente de 2024 e disse que vai governar para todos, segundo a Gazeta do Povo.',
    '## Carta de Lula',
    'Lula divulgou uma carta às famílias evangélicas. No texto, diz que não é evangélico, mas respeita a fé, e afirma que o compromisso de cuidar das famílias é algo em comum. Ele defende o combate às bets e liga o fim da escala 6x1 a mais tempo para a família e para a igreja, segundo o Correio Braziliense. A carta circula por canais de apoiadores evangélicos do presidente.',
    '## Agenda de quinta (15)',
    'Lula dá entrevista ao vivo ao Jornal Nacional, às 21h15. Flávio tem gravações e reuniões em Brasília e, à noite, evento em Capelinha (MG), segundo o Metrópoles. A entrevista de Flávio ao Jornal Nacional está marcada para sexta (16). O debate da Band será no domingo (18), às 20h, e o da Globo, na sexta (23), segundo O Povo.'
  ],
  box: { type: 'facts', title: 'Próximos encontros', rows: [['15 out', 'Lula no Jornal Nacional'], ['16 out', 'Flávio no Jornal Nacional'], ['18 out', 'Debate da Band, 20h'], ['23 out', 'Debate da Globo'], ['25 out', 'Segundo turno']] },
  sources: [['Agência Brasil', U.abAgenda14], ['Gazeta do Povo', U.gpFlavioPoa], ['Correio Braziliense', U.cbCartaEvangelicos], ['Metrópoles', U.metAgenda15], ['O Povo', U.opovoDebates]] },

{ id: 'tse-flavio-nikolas-video-criancas', cat: 'nacional', own: false, t: '2026-10-14T12', d: '14 out 2026', img: 'celular', src: 'Agência Brasil', url: U.abTseVideo,
  title: 'TSE manda Flávio e Nikolas Ferreira tirarem do ar vídeo em que crianças criticam Lula',
  sum: 'O ministro Marco Aurélio Bellizze deu 24 horas para a remoção. A decisão ainda precisa ser confirmada pelo plenário do tribunal.',
  body: [
    'No vídeo, publicado no Dia das Crianças, crianças leem um texto que atribui a Lula a inflação e a insegurança. Ele saiu primeiro nas redes do deputado Nikolas Ferreira (PL-MG) e foi repassado em um canal de apoiadores de Flávio Bolsonaro (PL). O pedido foi da coligação de Lula.',
    'Para o ministro, o conteúdo passou do razoável ao explorar a inocência das crianças, embora a presença delas em propaganda não seja proibida por si só. Até a publicação da reportagem, Flávio e Nikolas não tinham se manifestado.'
  ] },

{ id: 'caso-master-stf-fachin-pf-13-outubro', cat: 'nacional', own: false, t: '2026-10-14T15', d: '14 out 2026', img: 'congresso', src: 'A Crítica / Estadão', url: U.acMaster,
  title: 'Caso Master: relatório da PF sobre menções a ministros do STF deve chegar depois do segundo turno',
  sum: 'Na terça (13), Fachin pediu à PF todas as menções a ministros, "sem exceção". Segundo o Estadão, parte da Corte quer resolver o caso ainda em 2026.',
  body: [
    'A PF deve enviar o material a partir de 26 de outubro. O presidente do STF, Edson Fachin, pediu um relatório sem juízo de valor. Depois, a PGR dá um parecer, e o plenário decide se abre investigação. Ser citado não significa ter cometido crime, e os ministros negam irregularidades.',
    'Segundo o Estadão, ministros querem concluir o assunto antes da posse do novo Senado, em 2027. O recesso do tribunal começa em 20 de dezembro.'
  ] },

{ id: 'tse-reuniao-campanhas-acordo-representacoes', cat: 'nacional', own: false, t: '2026-10-13T19', d: '13 out 2026', img: 'congresso', src: 'CNN Brasil', url: U.cnnTseReuniao,
  title: 'Após reunião no TSE, campanhas de Lula e Flávio tentam acordo para reduzir ações na Justiça Eleitoral',
  sum: 'Foram 162 representações e pedidos de resposta nos nove dias depois do primeiro turno, contra 51 no mesmo período de 2022. As equipes jurídicas voltam a se reunir nesta quarta (14).',
  body: [
    'O presidente do TSE, Kassio Nunes Marques, recebeu representantes das duas campanhas na terça (13), com os ministros André Mendonça, Marco Aurélio Bellizze e Estela Aranha. Entre as propostas estão retirar pedidos antigos e seguir parâmetros já definidos pela Corte. Um eventual consenso será levado aos ministros.',
    'O tribunal pediu que as campanhas evitem confrontos entre apoiadores no dia da votação e convidou as duas a acompanhar a totalização dos votos no TSE.'
  ] },

{ id: 'exercito-do-lula-nunes-marques-suspende-de-novo', cat: 'nacional', own: false, t: '2026-10-13T18', d: '13 out 2026', img: 'celular', src: 'Agência Brasil', url: U.abExercito2,
  title: 'Nunes Marques volta a suspender o canal "Exército do Lula" e derruba decisão do corregedor',
  sum: 'Para voltar ao ar, o canal precisa ter o endereço comunicado à Justiça Eleitoral e comprovado em 48 horas. O corregedor Villas Bôas Cueva cobra julgamento no plenário.',
  body: [
    'Para o presidente do TSE, o corregedor ultrapassou os limites de sua competência ao liberar o canal no domingo (11). Uma análise técnica do tribunal não encontrou repetição das afirmações investigadas, mas apontou mensagens apagadas ou editadas e atuação coordenada. O canal tem mais de 4 milhões de seguidores e é coordenado pelo deputado André Janones, que chamou a decisão de censura.',
    'Villas Bôas Cueva afirmou que a proximidade do segundo turno torna urgente levar o caso ao plenário, que ainda não tem data para julgar, segundo a CNN Brasil.'
  ] },

{ id: 'lula-pe-de-meia-universitario-700', cat: 'nacional', own: false, t: '2026-10-13T18', d: '13 out 2026', img: 'eleicao', src: 'O Tempo', url: U.otPeDeMeia,
  title: 'Lula promete Pé-de-Meia para universitários, com R$ 700 por mês, se for reeleito',
  sum: 'O valor seria pago durante dez meses por ano, a partir de 2027. Critérios, custo e fonte dos recursos não foram informados.',
  body: [
    'O anúncio foi feito em vídeo nas redes sociais na terça (13). Segundo Lula, o dinheiro ajudaria o jovem a começar a vida profissional depois da formatura.',
    'O presidente não detalhou quem teria direito ao benefício nem o calendário de implantação, segundo O Tempo.'
  ] },

{ id: 'tse-julga-garotinho-eleicao-rio', cat: 'nacional', own: false, t: '2026-10-10T15', d: '10 out 2026', img: 'congresso', src: 'TRE-RJ', url: U.treRuas,
  photo: 'fotos/tse-julga-garotinho-eleicao-rio.webp', photoAlt: 'Fachada do prédio do Tribunal Superior Eleitoral, em Brasília, com a placa do tribunal em primeiro plano', credit: 'Foto: reprodução',
  title: 'TRE-RJ refaz a conta, e Douglas Ruas vence a eleição do Rio no primeiro turno',
  sum: 'Sem os votos anulados de Garotinho, Ruas (PL) ficou com 50,88% dos válidos, e Eduardo Paes (PSD), com 44,16%. A proclamação oficial está marcada para quinta (15), às 15h.',
  body: [
    'A nova totalização retirou da conta os 274.411 votos de Anthony Garotinho (Republicanos), anulados pelo TSE. Os votos válidos passaram a somar 8.394.627, e Ruas manteve os 4.271.199 votos que tinha.',
    'Os partidos têm prazo para examinar os relatórios e apresentar reclamações antes da proclamação. Eduardo Paes desistiu da candidatura na sexta (9), depois que o STF negou o pedido para suspender a decisão do TSE.'
  ] },

{ id: 'sp-alerta-tempestades-granizo-ventos', cat: 'nacional', own: false, t: '2026-10-13T08', d: '13 out 2026', img: 'mundo', src: 'Metrópoles', url: U.metAlertaSp,
  title: 'Defesa Civil de SP alerta para tempestades, granizo e ventos fortes até quinta (15)',
  sum: 'As rajadas de vento podem ficar entre 60 e 100 km/h, e a chuva pode chegar a 100 mm por dia.',
  body: [
    'Nesta quarta (14), a chuva deve atingir quase todo o estado de São Paulo, com exceção do norte, segundo o Metrópoles.'
  ] },

/* ===================== INTERNACIONAL ===================== */

{ id: 'ormuz-navios-afundados-ataques-recorde', cat: 'internacional', own: false, t: '2026-10-15T03', d: '15 out 2026', img: 'mundo', src: 'Al Jazeera', url: U.ajOrmuz15,
  title: 'Dois navios afundam no Estreito de Ormuz, e ataques à navegação batem recorde',
  sum: 'Um foi atingido por um projétil, e outro, por uma mina, segundo a Al Jazeera. Pelo menos dez embarcações foram atacadas desde domingo (11).',
  body: [
    'A Guarda Revolucionária do Irã disse que um cargueiro afundou ao bater em uma mina naval, o primeiro caso do tipo relatado na guerra. Segundo a Al Jazeera, são 23 ataques a navios desde o início de outubro, e dois marinheiros estão desaparecidos. Mesmo assim, o tráfego pelo estreito está em cerca de 80% do nível de antes da guerra.',
    'O presidente do Parlamento iraniano, Mohammad Bagher Ghalibaf, disse que o país não quer guerra nem negociação sem fim e que vai lutar até os EUA aceitarem suas exigências.'
  ] },

{ id: 'tregua-energia-kremlin-zelensky-traido', cat: 'internacional', own: false, t: '2026-10-14T17', d: '14 out 2026', img: 'mundo', src: 'Kyiv Independent', url: U.kiTregua14,
  title: 'Kremlin diz que trégua de energia anunciada por Trump não está clara; Zelensky diz se sentir traído',
  sum: 'Em entrevista, Zelensky disse que é doloroso ver Trump escolher um lado que não é o da Ucrânia. Kiev também confirmou restrições ao seu acesso à rede Starlink.',
  body: [
    'O porta-voz do Kremlin, Dmitry Peskov, perguntou se o alcance da trégua tinha sido especificado e disse apenas que o trabalho nessa direção continua. Segundo a Axios, citada pelo Kyiv Independent, um funcionário da Casa Branca afirmou que o acordo cobre só refinarias.',
    'Em entrevista ao jornalista Piers Morgan, Zelensky respondeu que sim, se sente traído, mas que a situação é um pouco mais complicada. A Ucrânia confirmou que o acesso das suas forças à Starlink foi muito restringido, sem aviso, e Zelensky chamou isso de grande erro.'
  ] },

{ id: 'milei-washington-apoio-trump-eleicoes', cat: 'internacional', own: false, t: '2026-10-15T02', d: '15 out 2026', img: 'mundo', src: 'Al Jazeera', url: U.ajMilei,
  title: 'Em Washington, Milei pede vitória dos aliados de Trump nas eleições de 3 de novembro',
  sum: 'O presidente argentino recebeu um prêmio em evento da comunidade hispânica e disse que a votação é crucial para o Ocidente.',
  body: [
    'Segundo a AFP, citada pela Al Jazeera, Milei afirmou que os conservadores não podem ceder espaço na região. Ele chegou na quarta (14) para encontros com investidores e deve falar na Câmara de Comércio dos EUA nesta quinta (15). Não há registro de reunião com Trump nesta visita.'
  ] },

{ id: 'gaza-ataque-cisjordania-jornalistas-feridos', cat: 'internacional', own: false, t: '2026-10-14T12', d: '14 out 2026', img: 'protesto', src: 'Al Jazeera', url: U.ajGaza14,
  title: 'Ataque israelense mata uma pessoa em Gaza; dois jornalistas ficam feridos na Cisjordânia',
  sum: 'Segundo a Al Jazeera, mais de 1.400 palestinos morreram em Gaza desde o cessar-fogo de outubro de 2025.',
  body: [
    'O ataque aéreo atingiu um veículo no bairro de Tuffah, na Cidade de Gaza, e deixou também feridos. Na Cisjordânia, em Ramallah e El-Bireh, uma criança foi baleada, e dois jornalistas, das emissoras Palestine TV e Sky News Arabia, ficaram feridos, segundo a agência palestina Wafa.',
    'O primeiro-ministro israelense, Benjamin Netanyahu, disse que Israel vai ampliar seu controle sobre a Cisjordânia.'
  ] },

{ id: 'papa-leao-cirurgia-pulmao', cat: 'internacional', own: true, t: '2026-10-14T18', d: '14 out 2026', img: 'mundo', read: 3,
  title: 'Papa Leão XIV já caminha e volta a se alimentar normalmente após cirurgia de câncer no pulmão',
  sum: 'Os exames depois da operação estão dentro do esperado, segundo o Vaticano. A internação de cerca de uma semana está mantida, e a viagem à América do Sul em novembro continua de pé por enquanto.',
  body: [
    'O papa Leão XIV, de 71 anos, teve uma noite tranquila e começou a caminhar pelo quarto na quarta-feira (14), um dia depois da cirurgia para retirar um câncer de pulmão, informou a Sala de Imprensa da Santa Sé. Ele fez fisioterapia respiratória e voltou à alimentação normal, com café da manhã e almoço.',
    'Segundo o diretor da Sala de Imprensa, Matteo Bruni, os exames de sangue e o raio-X do tórax feitos depois da operação estão dentro do esperado, e o papa está de bom ânimo.',
    '## A cirurgia',
    'A operação foi na terça-feira (13), no Hospital Gemelli, em Roma. A equipe retirou por videocirurgia o lobo inferior do pulmão direito, e a análise feita durante o procedimento confirmou um adenocarcinoma, um tipo de câncer de pulmão. O papa passou cerca de três horas no centro cirúrgico, e a operação em si durou cerca de 90 minutos, sem complicações. O cirurgião Stefano Margaritora comandou a equipe.',
    '## Próximos passos',
    'O resultado completo da análise do tecido deve sair em alguns dias, e dele dependerá o tratamento. A internação prevista de uma semana não mudou, e as audiências estão canceladas até 20 de outubro.',
    'Segundo a America Magazine, Bruni disse que a viagem ao Uruguai, à Argentina e ao Peru, de 6 a 17 de novembro, continua de pé por enquanto. O nódulo foi encontrado em exames de rotina, em estágio inicial. É o primeiro problema de saúde grave divulgado nos 17 meses de pontificado do primeiro papa americano.'
  ],
  box: { type: 'facts', title: 'A recuperação', rows: [['Diagnóstico', 'Adenocarcinoma de pulmão'], ['Cirurgia', 'Terça (13), no Hospital Gemelli'], ['Quarta (14)', 'Caminhou pelo quarto e voltou à dieta normal'], ['Internação', 'Cerca de uma semana'], ['Viagem de novembro', 'Mantida por enquanto']] },
  sources: [['Vatican News', U.vnPapa], ['America Magazine', U.amPapa], ['PBS / AP', U.pbsPapa], ['Axios', U.axPapa]] },

{ id: 'ataque-aeroporto-riade-hutis', cat: 'internacional', own: true, t: '2026-10-14T20', d: '14 out 2026', img: 'mundo', read: 3,
  title: 'Hutis atingem sede da Aramco e prometem novos ataques a aeroportos e ao petróleo da Arábia Saudita',
  sum: 'O ataque danificou os andares da cúpula da petroleira em Dhahran, sem vítimas, segundo a AP. A coalizão saudita bombardeou alvos ligados ao petróleo no Iêmen.',
  body: [
    'Os hutis, grupo do Iêmen apoiado pelo Irã, atingiram na noite de terça-feira (13) a sede da petroleira estatal Saudi Aramco, em Dhahran, no leste da Arábia Saudita. Segundo dois funcionários da região ouvidos pela AP, o ataque danificou os três andares mais altos, onde ficam os escritórios do presidente da empresa e da alta direção. Não houve vítimas. O Ministério da Energia saudita falou em um incêndio limitado.',
    '## Interceptações',
    'Segundo a AP, a coalizão liderada pela Arábia Saudita interceptou dois drones, quatro mísseis de cruzeiro e um míssil balístico lançados contra Riade, além de mísseis contra Dhahran e Al-Kharj. Destroços feriram uma pessoa na capital. Funcionários da região dizem que o país está com estoques baixos de mísseis de defesa.',
    '## Resposta saudita',
    'A coalizão atacou alvos ligados ao petróleo perto do porto de Ras Isa e em Sanaa, no Iêmen. O Ministério da Saúde controlado pelos hutis fala em dois mortos em Ras Isa. O grupo prometeu continuar atacando aeroportos e instalações de petróleo sauditas e pediu que civis e empresas deixem essas áreas.',
    '## Voos e ajuda',
    'O aeroporto de Riade foi atingido várias vezes na semana, e os ataques deixaram mais de 300 feridos, segundo a AP. A empresa de dados de aviação Cirium contou mais de 3.000 voos cancelados nos aeroportos sauditas em uma semana. No Iêmen, o Programa Mundial de Alimentos diz que os combates cortam a ajuda a cerca de 800 mil pessoas.',
    '## Estados Unidos',
    'O presidente Donald Trump disse que avalia se os EUA devem se juntar aos ataques contra os hutis. Um dirigente do grupo afirmou que Omã, Rússia e China tentam retomar as negociações.'
  ],
  box: { type: 'facts', title: 'A escalada', rows: [['Sede da Aramco', 'Andares da cúpula danificados, sem vítimas'], ['Ataque saudita', 'Ras Isa e Sanaa; 2 mortos, segundo os hutis'], ['Voos cancelados', 'Mais de 3.000 em uma semana'], ['Ajuda cortada', 'Cerca de 800 mil pessoas no Iêmen']] },
  sources: [['AP / PBS', U.apAramco], ['CBS News', U.cbsHutis14], ['Al Jazeera', U.ajAramco], ['Al Jazeera', U.ajLive14]] },

{ id: 'ataque-balistico-kiev-usina-chp4', cat: 'internacional', own: true, t: '2026-10-14T15', d: '14 out 2026', img: 'mundo', read: 3,
  title: 'Ataque russo com 39 mísseis e 128 drones mata ao menos 10 pessoas na Ucrânia; Kiev tem 4 mortos',
  sum: 'Segundo Zelensky, 600 mil pessoas ficaram sem luz. Em Kiev, um dos alvos foi a termelétrica CHP-4. A Rússia não confirma a "trégua de energia" anunciada por Trump.',
  body: [
    'A Rússia lançou 39 mísseis e 128 drones contra a Ucrânia na noite de terça (13) para quarta-feira (14), segundo o Kyiv Independent. A Força Aérea ucraniana diz ter derrubado 4 mísseis balísticos e 115 drones. Em um dia, ao menos 10 pessoas morreram e 91 ficaram feridas no país.',
    '## Kiev',
    'Na capital, atingida por mísseis balísticos pela segunda noite seguida, foram ao menos 4 mortos e 25 feridos. No distrito de Desnianskyi, um prédio residencial de nove andares foi atingido, com três mulheres mortas e 24 feridos, entre eles uma menina de 7 anos. O presidente Volodymyr Zelensky disse que o alvo principal era a usina termelétrica CHP-4, uma das mais importantes da cidade, e que 600 mil pessoas ficaram sem energia no país.',
    '## Outras regiões',
    'Houve mortes também em Donetsk, Dnipropetrovsk e Zaporíjia. Na noite seguinte, um ataque a Kropyvnytskyi, no centro do país, matou ao menos 3 pessoas e feriu 6, segundo o governador da região.',
    '## Trégua em dúvida',
    'O presidente dos EUA, Donald Trump, anunciou no domingo (11) um cessar-fogo nos ataques à infraestrutura de energia. Na quarta, o porta-voz do Kremlin, Dmitry Peskov, disse que o alcance da trégua não foi especificado. Zelensky afirmou que a Ucrânia cumpre o acordo se a Rússia cumprir e chamou o novo ataque de desrespeito.'
  ],
  box: { type: 'facts', title: 'O ataque', rows: [['Armas', '39 mísseis e 128 drones'], ['Mortos no país', 'Ao menos 10 em um dia'], ['Feridos no país', '91'], ['Kiev', '4 mortos e 25 feridos'], ['Sem luz', '600 mil pessoas, segundo Zelensky']] },
  sources: [['Kyiv Independent', U.kiAtaque14], ['Kyiv Independent', U.kiKropyvnytskyi], ['Kyiv Independent', U.kiTregua14], ['Kyiv Post', U.kpKiev]] },

{ id: 'bulgaria-drone-afunda-navio-mar-negro', cat: 'internacional', own: false, t: '2026-10-14T19', d: '14 out 2026', img: 'mundo', src: 'BTA', url: U.btaBulgaria,
  title: 'Bulgária encerra as buscas pelos tripulantes do cargueiro afundado por drones no Mar Negro',
  sum: 'Segundo a agência búlgara BTA, 6 tripulantes do HS Dignity foram resgatados e 10 seguem desaparecidos. Relatos anteriores falavam em 5 resgatados e 11 desaparecidos.',
  body: [
    'As buscas foram retomadas na manhã de quarta (14) com um navio da Marinha, suspensas por causa do mau tempo e encerradas às 15h, segundo o Ministério dos Transportes. O navio afundou na terça (13) perto de Krapets, junto à fronteira com a Romênia. Outro cargueiro, o Chelsea 3, também foi atingido, e os 15 tripulantes foram salvos.',
    'O primeiro-ministro Rumen Radev convocou a embaixadora russa, que disse não ter informações. Radev afirmou que o resultado beneficia a Rússia, chamou o ataque de inaceitável e pediu apoio da União Europeia e da Otan.'
  ] },

{ id: 'kabila-m23-coalizao-congo', cat: 'internacional', own: false, t: '2026-10-13T12', d: '13 out 2026', img: 'protesto', src: 'Al Jazeera', url: U.ajKabila,
  title: 'Ex-presidente do Congo Joseph Kabila se une aos rebeldes do M23 em nova frente',
  sum: 'A Frente para a Refundação da Nação foi lançada em Goma, cidade controlada pelo M23 desde janeiro de 2025. Um assessor falou em acabar com a "tirania" por todos os meios, inclusive a força.',
  body: [
    'Kabila governou a República Democrática do Congo de 2001 a 2019. No ano passado, foi condenado à morte à revelia por traição, em um tribunal militar, e neste ano foi sancionado pelos EUA. O M23 tem apoio de Ruanda.',
    'Governo e rebeldes tinham uma nova rodada de negociação prevista para novembro, no Catar.'
  ] },

{ id: 'colombia-embaixada-jerusalem', cat: 'internacional', own: false, t: '2026-10-14T14', d: '14 out 2026', img: 'mundo', src: 'i24NEWS', url: U.i24Colombia,
  title: 'Colômbia inaugura embaixada em Jerusalém e retoma acordo de livre comércio com Israel',
  sum: 'É a décima embaixada estrangeira na cidade, segundo o chanceler israelense, Gideon Sa\'ar. A representação colombiana funcionava em Tel Aviv.',
  body: [
    'A cerimônia teve a presença de Sa\'ar e do chanceler colombiano, Omar Bula Escobar. O presidente Abelardo de la Espriella, que ordenou a mudança, não foi. Na terça (13), os dois países trocaram notas para restabelecer o tratado de livre comércio, cancelado no governo de Gustavo Petro.',
    'Bula Escobar disse que as relações nunca deveriam ter sido rompidas e chamou Israel de parceiro estratégico.'
  ] },

/* ===================== ESPORTES ===================== */

{ id: 'f1-antonelli-pode-ser-campeao-austin', cat: 'esportes', own: false, t: '2026-10-14T10', d: '14 out 2026', img: 'pista', src: 'GrandPrix.com', url: U.gpxAntonelli,
  title: 'Antonelli pode ser campeão da Fórmula 1 já no GP dos EUA, em 25 de outubro',
  sum: 'O italiano tem 340 pontos, 102 a mais que George Russell. Para levar o título em Austin, precisa vencer e depender de Russell e Hamilton.',
  body: [
    'Antonelli será campeão se vencer a corrida e Russell terminar em 9º ou pior, e Hamilton, em 5º ou pior. Hamilton é o 3º, com 229 pontos, seguido por Verstappen, com 221.',
    'Restam seis etapas: Austin, México, São Paulo (8 de novembro), Las Vegas, Catar e Abu Dhabi, em 6 de dezembro.'
  ] },

{ id: 'libertadores-feminina-comeca-equador', cat: 'esportes', own: false, t: '2026-10-14T14', d: '14 out 2026', img: 'esportes', src: 'O Tempo', url: U.otLibFem,
  title: 'Libertadores Feminina começa nesta quinta no Equador, com Corinthians, Palmeiras e Cruzeiro',
  sum: 'O Corinthians estreia contra o Colo-Colo, às 17h, e o Palmeiras pega o Universitario, às 21h. O Cruzeiro joga na sexta (16), contra a LDU.',
  body: [
    'O torneio vai de 15 a 31 de outubro, com quatro grupos. Os dois primeiros de cada grupo avançam, o mata-mata começa em 24 de outubro, e a final é no dia 31.'
  ] },

{ id: 'boca-juniors-vasco-semifinal-sul-americana', cat: 'esportes', own: true, t: '2026-10-13T23', d: '13 out 2026', img: 'esportes', read: 3,
  title: 'Com um a menos, Vasco vence o Boca na Bombonera e joga pelo empate na volta da Sul-Americana',
  sum: 'Adson marcou de cabeça aos 24 minutos do primeiro tempo. A volta da semifinal é na terça (20), no Maracanã.',
  body: [
    'O Vasco venceu o Boca Juniors por 1 a 0 na noite de terça-feira (13), na Bombonera, em Buenos Aires, no jogo de ida da semifinal da Copa Sul-Americana. O gol foi de Adson, de cabeça, aos 24 minutos do primeiro tempo, depois de cruzamento de Andrés Gómez pela esquerda, segundo a Agência Esporte e o Lance!.',
    'Gómez acabou expulso no segundo tempo. Ele levou o amarelo aos 18 minutos, do árbitro chileno Piero Maza, por atrapalhar uma cobrança de falta, e depois recebeu o vermelho por reclamação. O Vasco segurou o resultado com um jogador a menos.',
    '## Fim de um tabu',
    'Segundo a CartaCapital, o Vasco não vencia o Boca desde 1951, quando fez 3 a 0 em um amistoso no Maracanã. Contando o jogo de terça, são 15 confrontos na história, com 6 vitórias do Boca, 7 empates e 2 vitórias do Vasco.',
    '## A volta',
    'O jogo de volta será na terça-feira (20), às 21h30, no Maracanã. O time do técnico Pedro Emanuel avança com um empate. Se o Boca vencer por um gol de diferença, a vaga será decidida nos pênaltis. A final será em 21 de novembro, em Barranquilla, na Colômbia.',
    'Na outra semifinal, o Atlético-MG recebe o City Torque nesta quarta (14), às 19h, na Arena MRV.'
  ],
  box: { type: 'facts', title: 'Boca 0 x 1 Vasco', rows: [['Gol', 'Adson, aos 24 do 1º tempo'], ['Expulso', 'Andrés Gómez (Vasco)'], ['Tabu', 'Primeira vitória sobre o Boca desde 1951'], ['Volta', '20 de outubro, 21h30, Maracanã'], ['Final', '21 de novembro, Barranquilla']] },
  sources: [['Agência Esporte', U.aeVasco], ['Lance!', U.lanceVasco], ['CartaCapital', U.ccVasco], ['Tribuna de Jundiaí', U.tjSul]] },

{ id: 'libertadores-semifinais-tres-brasileiros', cat: 'esportes', own: true, t: '2026-10-15T00', d: '14 out 2026', img: 'esportes', read: 3,
  photo: 'fotos/libertadores-semifinais-tres-brasileiros.webp', photoAlt: 'Montagem com jogadores de Fluminense, Palmeiras, Flamengo e Estudiantes comemorando', credit: 'Montagem: reprodução',
  title: 'Palmeiras vence o Fluminense por 2 a 1 no Maracanã; Flamengo visita o Estudiantes nesta quinta',
  sum: 'Flaco López e Marlon Freitas marcaram para o Palmeiras, e Wesley Natã descontou nos acréscimos. A volta é na quarta (21), em São Paulo.',
  body: [
    'O Palmeiras venceu o Fluminense por 2 a 1 na noite de quarta-feira (14), no Maracanã, no jogo de ida da semifinal da Copa Libertadores. O placar foi confirmado pelo O Povo e pelo ABC Agora.',
    '## Os gols',
    'Flaco López abriu o placar aos 44 minutos do primeiro tempo, com um chute forte que o goleiro Fábio não conseguiu segurar. No segundo tempo, Marlon Freitas ampliou em um contra-ataque, aos 38 minutos, segundo a ficha do O Povo. Já nos acréscimos, Wesley Natã diminuiu para o Fluminense, depois de uma falha do goleiro Carlos Miguel. Não houve expulsões. O argentino Facundo Tello apitou.',
    '## Sem Abel',
    'O técnico Abel Ferreira cumpriu suspensão. Na entrevista coletiva, o auxiliar Vitor Castanheira disse que um 2 a 0 seria melhor, mas que o resultado foi bom e que ainda faltam 90 minutos. Ele atribuiu o gol sofrido ao desgaste físico.',
    '## A volta',
    'O jogo de volta será na quarta-feira (21), às 21h30, no Nubank Parque. O Palmeiras avança com um empate. O Fluminense, do técnico Marcão, precisa vencer por um gol para levar a decisão aos pênaltis, ou por dois gols para passar direto.',
    '## Flamengo na Argentina',
    'Nesta quinta (15), às 21h30, o Flamengo enfrenta o Estudiantes no estádio Jorge Luis Hirschi, em La Plata. O time de Leonardo Jardim não terá De Arrascaeta e Danilo, que se recuperam de cirurgias, Ayrton Lucas e Evertton Araújo, ainda sem liberação, e Jorginho, suspenso. Léo Ortiz volta ao time, segundo o Lance!. A volta será em 22 de outubro, no Maracanã. A final é em jogo único, em 28 de novembro, no Estádio Centenário, em Montevidéu.'
  ],
  box: { type: 'table', title: 'Semifinais', head: ['Confronto', 'Ida', 'Volta'], rows: [['Fluminense x Palmeiras', '1 x 2, no Maracanã', '21 out, Nubank Parque'], ['Estudiantes x Flamengo', '15 out, La Plata', '22 out, Maracanã']], note: 'Todos os jogos às 21h30 de Brasília. Final em 28 de novembro, no Centenário. Fontes: O Povo, ABC Agora, Lance! e Agência Brasil.' },
  sources: [['O Povo', U.opovoPalFlu], ['ABC Agora', U.abcPalFlu], ['Nosso Palestra', U.npColetiva], ['Lance!', U.lanceFla15], ['Imirante', U.imiranteFla], ['Agência Brasil', U.abLiberta]] },

{ id: 'corinthians-demite-fernando-diniz', cat: 'esportes', own: true, t: '2026-10-14T16', d: '14 out 2026', img: 'esportes', read: 3,
  title: 'Seedorf é apresentado no Corinthians e diz que "leão ferido é sempre perigoso"',
  sum: 'O holandês assume um time com oito derrotas seguidas no Brasileirão e a oito rodadas do fim. A estreia é na segunda (19), contra o Vitória.',
  body: [
    'Clarence Seedorf foi apresentado como técnico do Corinthians na quarta-feira (14), em entrevista coletiva no CT Joaquim Grava. O holandês, de 50 anos, tem contrato até o fim de 2027 e substitui Fernando Diniz, demitido em 7 de outubro.',
    '## O que ele disse',
    'Seedorf chamou o Corinthians de um dos maiores clubes do mundo e disse que muitos treinadores preferiram não aceitar o convite, mas que o momento pede coragem. Segundo o Metrópoles, ele afirmou que um leão ferido é sempre perigoso e que um momento ruim pode virar rapidamente. Disse acreditar no elenco e elogiou a estrutura do clube, mas não quis detalhar as mudanças que pretende fazer.',
    'Ele também elogiou Oswaldo de Oliveira, seu técnico no Botafogo, como um dos melhores com quem trabalhou, segundo a CNN Brasil.',
    '## A situação',
    'O Corinthians perdeu os últimos oito jogos no Brasileirão. O recorde negativo do clube é de nove derrotas seguidas, em 2000, segundo a Band. O time é o 16º, com 32 pontos, a mesma pontuação do Internacional, o primeiro da zona de rebaixamento, segundo a Jovem Pan.',
    'Seedorf não treinava um time desde 2019, quando dirigiu a seleção de Camarões. Antes, passou por Milan, Deportivo La Coruña e Shenzhen. A estreia será contra o Vitória, na segunda-feira (19), às 20h, na Neo Química Arena.'
  ],
  box: { type: 'facts', title: 'Seedorf no Corinthians', rows: [['Apresentação', 'Quarta (14)'], ['Contrato', 'Até o fim de 2027'], ['Estreia', 'Vitória, 19 de outubro, 20h'], ['Sequência', '8 derrotas seguidas'], ['Posição', '16º, com 32 pontos']] },
  sources: [['CNN Brasil', U.cnnSeedorf], ['Jovem Pan', U.jpSeedorf], ['Metrópoles', U.metSeedorf], ['Band', U.bandRecorde], ['Lance!', U.lanceSeedorf]] },

{ id: 'selecao-feminina-empata-argentina-pernambuco', cat: 'esportes', own: false, t: '2026-10-13T23', d: '13 out 2026', img: 'esportes', src: 'Lance!', url: U.lanceFeminina,
  title: 'Seleção feminina abre 2 a 0, mas cede o empate à Argentina em Pernambuco',
  sum: 'Bia Zaneratto e Gio Garbelini marcaram para o Brasil, que tinha uma jogadora a mais desde os 12 minutos do segundo tempo. No sábado, o time tinha vencido a Argentina por 3 a 1.',
  body: [
    'O amistoso foi na terça (13), na Arena de Pernambuco, em São Lourenço da Mata. A Argentina diminuiu com Falfán, aos 34 minutos do primeiro tempo, e empatou com Bonsegundo, de pênalti, no começo do segundo. Pouco depois, Sofía Domínguez foi expulsa.',
    'Foi o último jogo da seleção do técnico Arthur Elias no Brasil em 2026. Em novembro e dezembro, o time faz amistosos no Japão.'
  ] },

{ id: 'atletico-mg-city-torque-sul-americana', cat: 'esportes', own: false, t: '2026-10-14T21', d: '14 out 2026', img: 'esportes', src: 'Lance!', url: U.lanceGaloCity,
  title: 'Atlético-MG vence o City Torque por 3 a 0 e fica perto da final da Sul-Americana',
  sum: 'Reinier, Bernard e Thiago Borbas marcaram na Arena MRV, e o Galo ainda teve dois gols anulados. Na volta, pode perder por até dois gols.',
  body: [
    'Reinier abriu o placar aos 36 minutos e Bernard ampliou aos 41 do primeiro tempo, segundo o site do Atlético. Borbas fechou aos 34 do segundo tempo. Dois gols do time mineiro foram anulados por impedimento no começo do jogo. O público foi de 38.020 torcedores.',
    'A volta será na quarta (21), às 19h, no Estádio Centenário, em Montevidéu. No sábado (17), o Atlético recebe o Coritiba pelo Brasileirão.'
  ] },

{ id: 'rebeca-andrade-mundial-roterda', cat: 'esportes', own: false, t: '2026-10-13T12', d: '13 out 2026', img: 'esportes', src: 'Rede NN', url: U.redennGinastica,
  title: 'Seleções de ginástica chegam a Roterdã para o Mundial; Rebeca Andrade lidera o time feminino',
  sum: 'O Mundial vai de 17 a 25 de outubro. A classificatória masculina é no sábado (17), e a feminina, na segunda (19).',
  body: [
    'As equipes encerraram a aclimatação no domingo (11): a feminina treinou em Amsterdã, e a masculina, em Sangalhos, Portugal. O treino de pódio masculino é nesta quarta (14), e o feminino, na sexta (16).',
    'O time feminino tem Rebeca Andrade, Flávia Saraiva, Lorrane Oliveira, Thaís Fidelis, Gabriela Bouças e Sophia Weisberg. Thaís volta a disputar um Mundial depois de sete anos. Rebeca, dona de seis medalhas olímpicas, foi campeã mundial do salto em 2021 e em 2023.'
  ] },

{ id: 'athletico-goleia-chapecoense-terceiro', cat: 'esportes', own: false, t: '2026-10-12T21', d: '12 out 2026', img: 'esportes', src: 'CNN Brasil', url: U.cnnAthletico,
  title: 'Athletico-PR goleia a Chapecoense por 4 a 1 e volta ao 3º lugar',
  sum: 'Viveros marcou duas vezes na Arena Condá. O Athletico chegou a 53 pontos e passou o Fluminense, que tem 51.',
  body: [
    'Leozinho abriu o placar aos 5 minutos, e Luiz Gustavo e Viveros completaram. Garcez descontou para a Chapecoense, que segue na lanterna, com 18 pontos.',
    'No sábado (17), o Athletico recebe o Palmeiras na Arena da Baixada, às 19h30.'
  ] },

{ id: 'serie-b-vila-nova-lider-33-rodada', cat: 'esportes', own: false, t: '2026-10-12T22', d: '12 out 2026', img: 'esportes', src: 'Gazeta Esportiva', url: U.gzVilaNova,
  title: 'Vila Nova vence o Náutico e reassume a liderança da Série B',
  sum: 'O time goiano tem 61 pontos, um a mais que Novorizontino e Juventude. Vila Nova e Novorizontino se enfrentam no domingo (18), em Goiânia.',
  body: [
    'Everton Galdino e Janderson marcaram no primeiro tempo do 2 a 0 nos Aflitos, no domingo (11), pela 33ª rodada. Na segunda (12), Fortaleza e CRB empataram por 2 a 2.',
    'Segundo a Gazeta Esportiva, a Ponte Preta, com 13 pontos, já está rebaixada.'
  ] },

/* ===================== CULTURA ===================== */

{ id: 'bilheteria-minha-melhor-amiga-100-milhoes', cat: 'cultura', own: false, t: '2026-10-13T16', d: '13 out 2026', img: 'cultura', src: 'BP Money', url: U.bpBilheteria,
  title: '"Minha Melhor Amiga" passa de R$ 100 milhões nas bilheterias; "Verity" lidera no feriado',
  sum: 'A comédia com Ingrid Guimarães e Mônica Martelli soma 5,62 milhões de espectadores em seis semanas, segundo dados da Rentrak.',
  body: [
    'No feriado prolongado, de quinta a segunda, "Verity" liderou, com R$ 13,2 milhões e 519 mil espectadores. "Minha Melhor Amiga" ficou em 2º, com R$ 5,66 milhões. "Se Eu Fosse Você 3" estreou com 149 mil espectadores, a terceira maior estreia nacional do ano.'
  ] },

{ id: 'morre-netinho-cantor-milla', cat: 'cultura', own: true, t: '2026-10-14T19', d: '14 out 2026', img: 'palco', read: 3,
  title: 'Netinho, cantor de "Milla" e um dos nomes do axé, é velado em Salvador',
  sum: 'O cantor morreu na terça (13), aos 60 anos, depois de tratar um linfoma. O velório, na quarta, foi reservado à família e aos amigos próximos, como ele havia pedido.',
  body: [
    'O cantor Netinho foi velado na quarta-feira (14) no Cemitério Jardim da Saudade, no bairro de Brotas, em Salvador, em cerimônia fechada a familiares e amigos próximos, segundo o Alô Alô Bahia. Ele morreu na terça-feira (13), aos 60 anos, no Hospital Aliança Star.',
    'Segundo a equipe do cantor, um linfoma não Hodgkin do tipo B evoluiu para insuficiência renal e falha de vários órgãos. O câncer foi diagnosticado em 2025. Ele chegou a anunciar a remissão, mas a doença voltou em 2026. A filha, Bruna Trindade Andrade, publicou uma foto antiga no colo do pai com a frase "Te amo para sempre".',
    '## Da Banda Beijo a "Milla"',
    'Nascido Ernesto de Souza Andrade Júnior em 12 de julho de 1966, em Santo Antônio de Jesus (BA), Netinho se mudou para Salvador aos 10 anos. Estreou em 1988 como vocalista da Banda Beijo, no Carnaval da capital baiana, e ficou conhecido no país com "Beijo na Boca".',
    'Em carreira solo, lançou em 1996 "Milla", seu maior sucesso. Em 2013, sofreu três AVCs e passou por cirurgias no cérebro.',
    '## As mais tocadas',
    'Segundo o Ecad, há 495 gravações em nome do cantor. "Milla" foi a música dele mais tocada nos últimos cinco anos, seguida por "Menina" e "Bate Lata".'
  ],
  box: { type: 'facts', title: 'Netinho', rows: [['Nome', 'Ernesto de Souza Andrade Júnior'], ['Nascimento', '12/7/1966, Santo Antônio de Jesus (BA)'], ['Início', 'Banda Beijo, em 1988'], ['Maior sucesso', '"Milla", de 1996'], ['Gravações', '495, segundo o Ecad']] },
  sources: [['Alô Alô Bahia', U.aloNetinho], ['CNN Brasil', U.cnnNetinho], ['CNN Brasil', U.cnnNetinhoEcad], ['O Tempo', U.otNetinho]] },

{ id: 'mostra-sao-paulo-50-edicao', cat: 'cultura', own: true, t: '2026-10-15T05', d: '15 out 2026', img: 'cultura', read: 3,
  photo: 'fotos/mostra-sao-paulo-50-edicao.webp', photoAlt: 'Arte oficial da 50ª Mostra Internacional de Cinema em São Paulo, com selo dourado e desenho de um casal se beijando', credit: 'Divulgação: Mostra Internacional de Cinema em São Paulo',
  title: 'Mostra de São Paulo abre as sessões ao público nesta quinta, com 380 títulos de 93 países',
  sum: 'A 50ª edição foi aberta na quarta (14) com "Tigre de Papel", de James Gray. Até 29 de outubro, há sessões em 57 espaços, incluindo 26 CEUs com entrada gratuita.',
  body: [
    'A 50ª Mostra Internacional de Cinema em São Paulo começa nesta quinta-feira (15) as sessões abertas ao público, que vão até 29 de outubro. A noite de abertura, para convidados, foi na quarta (14), na Sala São Paulo, com "Tigre de Papel", de James Gray, que esteve na competição de Cannes. Antes, foi exibido o curta "Sul de Teerã", de Kleber Mendonça Filho, sobre o cineasta iraniano Jafar Panahi.',
    '## James Gray',
    'Gray é o homenageado da edição e assina o cartaz. Nesta quinta, ele conversa com o cineasta Walter Salles e recebe o Prêmio Leon Cakoff, segundo a Rolling Stone Brasil. O produtor português Paulo Branco recebeu o mesmo prêmio na abertura. "Tigre de Papel" volta em sessões públicas nos dias 15, 16 e 27.',
    '## Destaques',
    'A programação tem "Fjord", de Cristian Mungiu, vencedor da Palma de Ouro, e "Mulher Desconhecida", de May el-Toukhy, Leão de Ouro em Veneza. Entre os brasileiros estão "Feito Pipa", de Allan Deberton, candidato do país a uma vaga no Oscar, "Elza", de Eryk Rocha, e "A Margem do Rio", premiado no Festival do Rio. O diretor indiano S.S. Rajamouli apresenta "RRR".',
    '## Ingressos',
    'Os ingressos avulsos custam R$ 26 de segunda a quinta e R$ 32 de sexta a domingo, com meia-entrada, e são vendidos quatro dias antes de cada sessão. Há sessões gratuitas no Centro de Formação Cultural Cidade Tiradentes e em 26 CEUs, segundo a Prefeitura de São Paulo.'
  ],
  box: { type: 'facts', title: 'Serviço', rows: [['Sessões ao público', '15 a 29 de outubro'], ['Programação', '380 títulos de 93 países'], ['Espaços', '57'], ['Ingressos', 'R$ 26 a R$ 32 (inteira)'], ['Gratuito', '26 CEUs e Cidade Tiradentes']] },
  sources: [['Prefeitura de São Paulo', U.prefMostra], ['Rolling Stone Brasil', U.rsMostra], ['Mídia NINJA', U.ninjaMostra], ['CNN Brasil', U.cnnMostra2], ['Omelete', U.omeleteMostra]] },

{ id: 'lollapalooza-2027-lineup-por-dia', cat: 'cultura', own: false, t: '2026-10-14T13', d: '14 out 2026', img: 'palco', src: 'Jornal de Brasília', url: U.jbrLolla,
  title: 'Lollapalooza 2027 divulga atrações por dia: Travis Scott na sexta, The Killers no sábado e Charli XCX no domingo',
  sum: 'O festival será de 19 a 21 de março, em Interlagos. O ingresso de um dia na pista custa R$ 920 a inteira e R$ 460 a meia.',
  body: [
    'Na sexta (19 de março), tocam também David Guetta e Nação Zumbi. No sábado (20), Queens of the Stone Age e Rodrigo Amarante. No domingo (21), The Prodigy, Fontaines D.C. e Criolo, segundo o Jornal de Brasília e a Band.',
    'A venda do ingresso de um dia começou na quarta (14), pela Ticketmaster e na bilheteria do Shopping Ibirapuera. Os preços da pista são do Alô Alô Bahia.'
  ] },

{ id: 'morre-regininha-teletema', cat: 'cultura', own: false, t: '2026-10-13T19', d: '13 out 2026', img: 'palco', src: 'O Tempo', url: U.otRegininha,
  title: 'Morre Regininha, cantora de "Teletema", aos 81 anos',
  sum: 'A música foi tema do casal principal da novela "Véu de Noiva", exibida pela Globo em 1969.',
  body: [
    'Regina Amália Serra de Souza nasceu no Rio de Janeiro, em 1945, e morreu na tarde de terça (13). A causa não foi divulgada. Ela integrou a Turma da Pilantragem e o trio Umas e Outras e trabalhou com Alceu Valença, Elba Ramalho, Gilberto Gil e Roberto Carlos.'
  ] },

{ id: 'street-fighter-estreia-cinemas', cat: 'cultura', own: false, t: '2026-10-13T10', d: '13 out 2026', img: 'cultura', src: 'Band', url: U.bandStreet,
  title: 'Novo filme de "Street Fighter" estreia nos cinemas nesta quinta (15)',
  sum: 'O longa com atores, dirigido por Kitao Sakurai, tem Jason Momoa no papel de Blanka, o lutador brasileiro do jogo.',
  body: [
    'A história se passa em 1993: Chun-Li recruta Ryu e Ken para o torneio World Warrior, que esconde uma conspiração. Andrew Koji, Noah Centineo e Callina Liang interpretam Ryu, Ken e Chun-Li.',
    'É a terceira adaptação do jogo para o cinema com atores, depois dos filmes de 1994 e de 2009.'
  ] },

{ id: 'bts-morumbis-operacao-bloqueio', cat: 'cultura', own: false, t: '2026-10-13T14', d: '13 out 2026', img: 'palco', src: 'Billboard Brasil', url: U.bbBts,
  title: 'Shows do BTS no MorumBIS terão ruas bloqueadas e acesso só para quem tem ingresso',
  sum: 'O grupo faz três apresentações em São Paulo, em 28, 30 e 31 de outubro. A triagem começa às 8h de cada dia de show.',
  body: [
    'A operação foi anunciada pela Live Nation com a PM, a Prefeitura, a CET e a associação de moradores AME Morumbi. Só poderão passar moradores cadastrados e quem tiver ingresso para o dia. O objetivo é evitar a aglomeração de fãs sem ingresso do lado de fora do estádio.'
  ] },

{ id: 'premio-jabuti-finalistas-14-outubro', cat: 'cultura', own: true, t: '2026-10-14T12', d: '14 out 2026', img: 'arte', read: 3,
  title: 'Jabuti 2026 tem Itamar Vieira Junior, Milton Hatoum e Adélia Prado entre os finalistas',
  sum: 'São 115 finalistas em 23 categorias. Os vencedores saem em 27 de outubro, na Sala São Paulo, e o Livro do Ano leva R$ 70 mil.',
  body: [
    'A Câmara Brasileira do Livro divulgou na quarta-feira (14) os finalistas da 68ª edição do Prêmio Jabuti. São cinco finalistas em cada uma das 23 categorias, divididas em quatro eixos: Literatura, Não Ficção, Produção Editorial e Inovação.',
    '## Romance e poesia',
    'Em Romance Literário, concorrem "Coração sem medo", de Itamar Vieira Junior, "Dança de enganos", de Milton Hatoum, "Meridiana", de Eliana Alves Cruz, "Uma delicada coleção de ausências", de Aline Bei, e "Vez em quando, Billie Holiday", de Evandro Affonso Ferreira. Em Poesia, um dos finalistas é "O jardim das oliveiras", de Adélia Prado.',
    '## Outras categorias',
    'Em Biografia e Reportagem, estão "Trincheira tropical", de Ruy Castro, e "João Gilberto e a insurreição bossa nova", de Tárik de Souza, entre outros. Em Crônica, há um livro póstumo de Contardo Calligaris, segundo a Quatro Cinco Um.',
    'A edição estreia a categoria Incentivo à Leitura – Cultura Digital, com vencedor escolhido por voto popular. As categorias de Escritor Estreante passaram para o eixo Literatura e agora podem concorrer a Livro do Ano.',
    '## Prêmios',
    'A cerimônia será em 27 de outubro, na Sala São Paulo, com transmissão pelo YouTube. Cada vencedor de categoria recebe a estatueta e até R$ 5 mil. O Livro do Ano ganha R$ 70 mil e uma viagem a uma grande feira internacional do livro, segundo a CNN Brasil.'
  ],
  box: { type: 'facts', title: 'Jabuti 2026', rows: [['Edição', '68ª'], ['Finalistas', '115, em 23 categorias'], ['Cerimônia', '27 de outubro, Sala São Paulo'], ['Livro do Ano', 'R$ 70 mil'], ['Categoria nova', 'Incentivo à Leitura – Cultura Digital']] },
  sources: [['CNN Brasil', U.cnnJabuti], ['Quatro Cinco Um', U.qcuJabuti], ['CBL', U.cblJabuti]] },

{ id: 'pitty-novo-album-sete-anos', cat: 'cultura', own: false, t: '2026-10-07T15', d: '7 out 2026', img: 'palco', src: 'Rolling Stone Brasil', url: U.rsPitty,
  title: 'Pitty revela capa e faixas do primeiro álbum de inéditas em sete anos',
  sum: 'O disco, chamado "Pitty", tem 13 faixas e sai em 16 de outubro. A turnê estreia no dia seguinte, em São Paulo.',
  body: [
    'O anúncio foi feito no aniversário de 49 anos da cantora. Entre as faixas estão "Sobremesa", lançada em setembro, "Armadura" e "Desobediente". A coprodução é de Rafael Ramos.',
    'O primeiro show, em 17 de outubro, no Espaço Unimed, está esgotado. Há mais nove cidades na agenda até dezembro.'
  ] },

{ id: 'morre-rj-mitte-breaking-bad', cat: 'cultura', own: false, t: '2026-10-12T18', d: '12 out 2026', img: 'cultura', src: 'CNN Brasil', url: U.cnnMitte,
  title: 'Morre RJ Mitte, o Walter White Jr. de "Breaking Bad", aos 34 anos',
  sum: 'A morte foi confirmada pelo gabinete de uma juíza de paz em Brownsville, no Texas. A causa não foi divulgada oficialmente.',
  body: [
    'O ator participou das cinco temporadas da série. Diagnosticado com paralisia cerebral aos 3 anos, era defensor das pessoas com deficiência, segundo nota de seus representantes.',
    'Também atuou nas séries "Switched at Birth" e "Vegas".'
  ] },

/* ===================== ECONOMIA ===================== */

{ id: 'ibovespa-cai-dolar-sobe-inflacao-eua-14-outubro', cat: 'economia', own: true, t: '2026-10-14T19', d: '14 out 2026', img: 'mercado', read: 3,
  title: 'Ibovespa cai 0,18% e dólar sobe a R$ 5,03 com inflação americana acima do esperado',
  sum: 'A bolsa fechou a quarta (14) aos 206.505 pontos. A inflação dos EUA chegou a 3,7% em 12 meses, e os investidores também esperavam as pesquisas do segundo turno.',
  body: [
    'O Ibovespa, principal índice da bolsa brasileira, fechou a quarta-feira (14) em queda de 0,18%, aos 206.505 pontos, segundo a Exame, o Poder360 e o InfoMoney. Durante o dia, o índice chegou a cair para 203.463 pontos. O dólar comercial subiu 0,17% e fechou a R$ 5,03, na segunda alta seguida. No ano, a moeda americana acumula queda de 8,37%, segundo a Reuters.',
    '## O que pesou',
    'A inflação dos EUA de setembro subiu 0,6% no mês e chegou a 3,7% em 12 meses, acima dos 3,6% esperados. O dado aumentou as apostas de que o banco central americano, o Fed, pode subir os juros. A decisão do Fed sai em 28 de outubro. Em Nova York, o índice S&P 500 caiu 1,11%, e a Nasdaq, 1,88%, segundo a Exame.',
    'No Brasil, os investidores realizaram lucros depois da forte alta da semana passada e aguardavam as pesquisas Quaest, divulgada depois do fechamento, e Datafolha, prevista para esta quinta (15). O volume de serviços de agosto, abaixo do esperado, também pesou.',
    '## Altas e quedas',
    'A alta do petróleo segurou o índice, com ganhos de PRIO e Petrobras. Entre as maiores quedas estiveram Magazine Luiza, Usiminas, Tenda e Cyrela, segundo o BP Money.',
    '## No mês e no ano',
    'Segundo o InfoMoney, o Ibovespa acumula queda de 1,22% na semana, mas sobe 10,82% em outubro e 28,16% em 2026.'
  ],
  box: { type: 'facts', title: 'Fechamento de 14/10', rows: [['Ibovespa', '206.505 pontos (-0,18%)'], ['Dólar', 'R$ 5,03 (+0,17%)'], ['Ibovespa em 2026', '+28,16%'], ['Dólar em 2026', '-8,37%'], ['Inflação dos EUA', '3,7% em 12 meses']] },
  sources: [['Exame', U.exMercado14], ['Poder360', U.p360Mercado14], ['InfoMoney', U.imMercado14], ['BP Money', U.bpMercado14], ['Forbes / Reuters', U.forbesMercado14]] },

{ id: 'camara-aprova-teto-mei-perdao-dividas', cat: 'economia', own: true, t: '2026-10-14T20', d: '14 out 2026', img: 'mercado', read: 3,
  title: 'Câmara aprova por 461 a 4 teto maior para o MEI e perdão de dívidas; texto vai ao Senado',
  sum: 'O limite de faturamento sobe de R$ 81 mil para R$ 110 mil em 2027 e R$ 140 mil em 2028. O MEI também poderá ter dois empregados.',
  body: [
    'A Câmara dos Deputados aprovou na quarta-feira (14), por 461 votos a 4, o projeto de lei complementar do governo que muda as regras do microempreendedor individual. O relator foi o deputado Rubens Pereira Júnior (PT-MA). O texto segue para o Senado, segundo a Agência Brasil.',
    '## O que muda',
    'O teto de faturamento anual do MEI passa de R$ 81 mil para R$ 110 mil em 2027 e para R$ 140 mil em 2028. É o primeiro reajuste desde 2018. O MEI poderá contratar até dois empregados, em vez de um, pagando o salário mínimo ou o piso da categoria. O limite das licitações exclusivas para micro e pequenas empresas sobe de R$ 80 mil para R$ 100 mil.',
    '## Perdão de dívidas',
    'O projeto perdoa as dívidas de MEIs inscritas na Dívida Ativa da União até 13 de outubro de 2026. Para manter o benefício, o microempreendedor terá de ficar em dia com os tributos por seis meses depois que a lei entrar em vigor e desistir de ações na Justiça. O relator estima mais de 3 milhões de beneficiados.',
    'Segundo o governo, o custo será de R$ 1,57 bilhão em 2027, R$ 3,15 bilhões em 2028 e R$ 3,38 bilhões em 2029.',
    '## O pacote',
    'As medidas fazem parte do Prospera MEI, lançado por Lula na terça (13), que também prevê um Pix de até R$ 5 mil por microempreendedor, ainda sem detalhes. O candidato Flávio Bolsonaro (PL) criticou o anúncio a 12 dias do segundo turno, segundo a Exame. O presidente da Câmara, Hugo Motta, se comprometeu a discutir o reajuste do Simples Nacional até o fim do ano.'
  ],
  box: { type: 'facts', title: 'O projeto do MEI', rows: [['Votação na Câmara', '461 a 4'], ['Teto em 2027', 'R$ 110 mil'], ['Teto em 2028', 'R$ 140 mil'], ['Empregados', 'Até 2'], ['Perdão de dívidas', 'Inscritas até 13/10/2026']] },
  sources: [['Agência Brasil', U.abMeiCamara], ['Metrópoles', U.metMei], ['InfoMoney', U.imMei], ['Exame', U.exFlavioMei]] },

{ id: 'servicos-recuam-agosto-ibge', cat: 'economia', own: false, t: '2026-10-14T09', d: '14 out 2026', img: 'mercado', src: 'Agência Brasil', url: U.abServicos,
  title: 'Volume de serviços cai 0,1% em agosto, abaixo do esperado pelo mercado',
  sum: 'Na comparação com agosto de 2025, houve alta de 0,6%. O turismo cresceu 2,5% no mês, segundo o IBGE.',
  body: [
    'Os serviços prestados às famílias subiram 2,1%, enquanto outros serviços caíram 1% e transportes, 0,2%. O setor está 19,9% acima do nível de fevereiro de 2020.',
    'Segundo o InfoMoney, analistas esperavam alta de cerca de 0,4%. Para economistas ouvidos pelo site, o dado reforça a leitura de que o PIB ficou perto da estagnação no terceiro trimestre.'
  ] },

{ id: 'petroleo-sobe-mina-ormuz-aramco', cat: 'economia', own: false, t: '2026-10-14T17', d: '14 out 2026', img: 'plataforma', src: 'O Povo', url: U.opovoPetroleo14,
  title: 'Petróleo Brent sobe a US$ 106,06 com navio afundado em Ormuz e ataque à Aramco',
  sum: 'O WTI, referência nos EUA, subiu 1,01%, a US$ 95,09. O Brent avançou 0,35%.',
  body: [
    'A Guarda Revolucionária do Irã disse que um cargueiro afundou depois de bater em uma mina no Estreito de Ormuz. A Arábia Saudita informou um incêndio em um prédio da Saudi Aramco, em Dhahran.',
    'A Agência Internacional de Energia passou a prever queda média de 2,6 milhões de barris por dia na demanda mundial de petróleo em 2026, segundo o O Povo.'
  ] },

{ id: 'confianca-industria-outubro-cni', cat: 'economia', own: false, t: '2026-10-14T16', d: '14 out 2026', img: 'mercado', src: 'Agência Brasil', url: U.abIcei,
  title: 'Confiança da indústria sobe em outubro, mas setor segue pessimista há 22 meses',
  sum: 'O índice da CNI subiu 1,3 ponto, para 46,2. Abaixo de 50 pontos, ele indica falta de confiança.',
  body: [
    'O índice que mede a avaliação das condições atuais ficou em 40 pontos, o menor desde julho de 2020. Já as expectativas subiram para 49,3 pontos. A CNI atribui o resultado à demanda menor, aos custos e à incerteza externa. Foram ouvidas 1.103 empresas de 1º a 7 de outubro.'
  ] },

{ id: 'gasolina-impostos-zerados-subsidio-diesel', cat: 'economia', own: true, t: '2026-10-13T21', d: '13 out 2026', img: 'plataforma', read: 3,
  title: 'Portaria garante mais R$ 1,40 por litro ao diesel importado; gasolina segue com tributos federais zerados',
  sum: 'O subsídio extra ao diesel vale por 30 dias e custa R$ 1,6 bilhão, segundo a Fazenda. O corte de tributos na gasolina e no etanol custa R$ 3,6 bilhões.',
  body: [
    'O Ministério da Fazenda publicou na noite de terça-feira (13), em edição extra do Diário Oficial, a portaria que acrescenta R$ 1,40 por litro à subvenção ao diesel rodoviário importado. O valor se soma aos R$ 2,12 por litro já pagos e vale por 30 dias, com possibilidade de prorrogação. O custo estimado é de R$ 1,6 bilhão.',
    '## Gasolina e etanol',
    'Desde o decreto de sexta (9), os tributos federais sobre a gasolina estão zerados: o desconto passou de R$ 0,63 para R$ 0,89 por litro, sendo R$ 0,79 de PIS/Cofins e R$ 0,10 de Cide. No etanol, segue zerado o PIS/Cofins de R$ 0,19 por litro. O custo em 2026 é de R$ 3,6 bilhões, segundo a Fazenda.',
    'Somadas, as novas medidas custam R$ 5,2 bilhões. O governo diz que a renúncia será compensada por receitas extras com o petróleo, sem mudar a meta fiscal. Na semana passada, estimou que a gasolina pode ficar até R$ 0,26 mais barata nos postos, segundo a CNN Brasil.',
    '## Fiscalização',
    'O governo soma 12.279 ações de fiscalização no mercado de combustíveis em 2026. A medida provisória 1.393 elevou para até R$ 500 milhões as multas por aumento abusivo de preços.',
    '## Por que agora',
    'O governo justifica as medidas com a alta do petróleo, que passou de US$ 100 o barril com a guerra no Oriente Médio. O candidato Flávio Bolsonaro (PL) criticou os subsídios ao diesel e disse que os preços vão subir logo depois da eleição.'
  ],
  box: { type: 'facts', title: 'As medidas', rows: [['Diesel importado', 'Mais R$ 1,40 por litro (total de R$ 3,52)'], ['Gasolina', 'Desconto de R$ 0,89 por litro'], ['Etanol', 'R$ 0,19 por litro'], ['Custo total', 'R$ 5,2 bilhões'], ['Validade do diesel', '30 dias, prorrogáveis']] },
  sources: [['Atlas Público', U.atlasDiesel], ['Ministério da Fazenda', U.fazGasolina], ['Click Petróleo e Gás', U.clickComb], ['CNN Brasil', U.cnnGasolinaPostos], ['Agência Brasil', U.abCombustiveis], ['Agência Brasil', U.abFlavio]] },

{ id: 'bets-saem-do-ar-devolucao-saldos', cat: 'economia', own: false, t: '2026-10-14T12', d: '14 out 2026', img: 'celular', src: 'Gazeta do Povo / Tribuna PR', url: U.tribBets,
  title: 'Termina o prazo para os bancos devolverem o dinheiro das bets; quem não recebeu deve procurar a Caixa',
  sum: 'Mais de R$ 1 bilhão já voltou aos apostadores, e faltavam cerca de R$ 159 milhões. Não receber no prazo não significa perder o direito ao dinheiro.',
  body: [
    'O prazo terminou na quarta (14). Os valores que os bancos não conseguirem devolver vão para uma conta da Caixa, que fará o repasse. Segundo o portal Brasil sem Bets, quem não recebeu deve procurar a Caixa.',
    'A orientação é desconfiar de mensagens que peçam pagamento para liberar o dinheiro.'
  ] },

{ id: 'china-exportacoes-sobem-36-setembro', cat: 'economia', own: false, t: '2026-10-14T01', d: '14 out 2026', img: 'mercado', src: 'AP', url: U.apChina,
  title: 'Exportações da China crescem 36,3% em setembro, acima do esperado',
  sum: 'O superávit comercial chegou a US$ 133,5 bilhões no mês. De janeiro a setembro, as vendas de chips mais que dobraram.',
  body: [
    'As importações chinesas subiram 31% em setembro na comparação com um ano antes, segundo a AP. No acumulado do ano, o superávit soma US$ 938 bilhões; as exportações de chips cresceram 108,1%, e as de carros, 54,3%.'
  ] },

{ id: 'propostas-economicas-lula-flavio', cat: 'economia', own: false, t: '2026-10-11T08', d: '11 out 2026', img: 'mercado', src: 'O Povo', url: U.opovoPropostas,
  title: 'Salário mínimo, gastos e 6x1: o que Lula e Flávio propõem para a economia',
  sum: 'Lula mantém o arcabouço fiscal e a regra de ganho real do mínimo. Flávio propõe corte de R$ 250 bilhões em despesas e correção do mínimo só pela inflação.',
  body: [
    'Segundo O Povo, Lula defende o fim da escala 6x1, com jornada de 40 horas, e o salário mínimo corrigido pelo INPC mais o crescimento do PIB, com ganho real limitado a 2,5%.',
    'Flávio Bolsonaro propõe cortar R$ 250 bilhões em despesas discricionárias, reduzir dez ministérios e investir R$ 900 bilhões em transportes por meio de concessões e parcerias. Os dois mantêm o Bolsa Família em R$ 691.'
  ] },

{ id: 'nobel-economia-hall-woodford', cat: 'economia', own: false, t: '2026-10-12T07', d: '12 out 2026', img: 'mercado', src: 'AP / ABC News', url: U.apNobelEco,
  title: 'Nobel de Economia vai para os americanos Robert Hall e Michael Woodford',
  sum: 'Os dois foram premiados por modelos que ajudam governos e bancos centrais a reagir a choques, como crises de energia e de inflação.',
  body: [
    'Hall é professor da Universidade Stanford, e Woodford, da Universidade Columbia. Segundo a AP, o comitê disse que o trabalho mudou a teoria da política de estabilização.',
    'O prêmio é de 12 milhões de coroas suecas. Woodford disse por telefone que a notícia foi uma surpresa.'
  ] },

/* ===================== TECNOLOGIA ===================== */

{ id: 'decreto-sac-atendimento-humano-20-segundos', cat: 'tecnologia', own: true, t: '2026-10-14T08', d: '14 out 2026', img: 'celular', read: 3,
  title: 'Novo decreto do SAC obriga empresas a atender 80% das ligações em até 20 segundos',
  sum: 'A opção de falar com uma pessoa terá de aparecer em todos os níveis do menu. Robôs e IA continuam permitidos na triagem. As regras valem a partir de novembro.',
  body: [
    'O governo publicou na terça-feira (13) o Decreto 13.135, com novas regras para o Serviço de Atendimento ao Consumidor (SAC). Ele substitui o decreto de 2022, começa a valer em novembro e será fiscalizado pela Secretaria Nacional do Consumidor (Senacon), segundo o Tecnoblog.',
    '## Atendimento humano',
    'Pelo menos 80% das ligações em que o cliente pedir para falar com uma pessoa terão de ser atendidas em até 20 segundos. Nas demais, a espera máxima é de 5 minutos. Se a ligação cair, a empresa terá de retornar em até 5 minutos. A opção de atendimento humano deve aparecer em todos os níveis do menu, inclusive no primeiro.',
    'Chatbots e ferramentas de inteligência artificial continuam permitidos para a triagem, desde que o cliente possa pedir um atendente.',
    '## Menu e cancelamento',
    'O menu poderá ter no máximo cinco níveis, e a empresa terá de informar o tempo estimado de espera. Fica proibida a publicidade durante o atendimento. O cliente não poderá ser obrigado a repetir um problema já registrado. O pedido de cancelamento terá de ser atendido na hora, com comprovante, sem exigir o pagamento antecipado de pendências.',
    '## Prazos',
    'Reclamações terão de ser respondidas em até 7 dias corridos. Em caso de cobrança indevida, a cobrança deve ser suspensa na hora e o problema resolvido em até 48 horas. As gravações terão de ser guardadas por pelo menos 90 dias.'
  ],
  box: { type: 'facts', title: 'As novas regras', rows: [['Decreto', '13.135/2026'], ['Atendimento humano', '80% das ligações em até 20 segundos'], ['Espera máxima', '5 minutos'], ['Menu', 'Até 5 níveis'], ['Reclamações', 'Resposta em até 7 dias']] },
  sources: [['Tecnoblog', U.tbSac]] },

{ id: 'bolha-ia-gartner-fmi-alerta', cat: 'tecnologia', own: true, t: '2026-10-14T14', d: '14 out 2026', img: 'tecnologia', read: 3,
  title: 'Gartner diz que US$ 3,5 trilhões investidos em IA podem perder valor até 2030; FMI também alerta para bolha',
  sum: 'Segundo a consultoria, os donos de data centers de IA precisariam faturar US$ 8,5 trilhões até 2030 para ter o retorno esperado, mas a receita prevista é de no máximo US$ 3,6 trilhões.',
  body: [
    'A consultoria americana Gartner divulgou na quarta-feira (14) uma estimativa de que mais de US$ 3,5 trilhões investidos em infraestrutura de inteligência artificial podem sofrer baixa contábil, ou seja, perder valor nos balanços, até o fim de 2030, se o ritmo de gastos continuar.',
    '## A conta',
    'Segundo o Gartner, as empresas devem gastar quase US$ 1 trilhão em infraestrutura de IA em 2026 e mais US$ 6 trilhões de 2027 a 2030. Para cobrir esses gastos, o custo do financiamento e um retorno de 12% sobre o capital, precisariam de US$ 8,5 trilhões em receitas acumuladas até 2030. A previsão é de no máximo US$ 3,6 trilhões.',
    'A consultoria também prevê que mais de 80% das empresas de nuvem especializadas em IA deixem de operar de forma independente até 2030.',
    '## O alerta do FMI',
    'Na terça (13), o Fundo Monetário Internacional disse, no Relatório de Estabilidade Financeira Global, que uma correção no setor de IA pode afetar a economia mundial. Segundo o Tecnoblog, o FMI critica o financiamento "circular", em que empresas de IA são ao mesmo tempo investidoras, credoras e clientes umas das outras, e cita fabricantes de chips como Nvidia, Samsung, Micron e SK Hynix entre as que podem perder valor se os investimentos desacelerarem.'
  ],
  box: { type: 'facts', title: 'Os números do Gartner', rows: [['Investimento em 2026', 'Quase US$ 1 trilhão'], ['De 2027 a 2030', 'Mais US$ 6 trilhões'], ['Receita necessária', 'US$ 8,5 trilhões até 2030'], ['Receita prevista', 'Até US$ 3,6 trilhões'], ['Valor em risco', 'Mais de US$ 3,5 trilhões']] },
  sources: [['Gartner', U.gartnerIa], ['Tecnoblog', U.tbFmiIa]] },

{ id: 'asml-receita-recorde-terceiro-trimestre', cat: 'tecnologia', own: false, t: '2026-10-14T05', d: '14 out 2026', img: 'tecnologia', src: 'ASML', url: U.asmlQ3,
  title: 'ASML, fabricante de máquinas para chips, tem receita recorde de € 11,7 bilhões no trimestre',
  sum: 'O lucro foi de € 4,96 bilhões. A empresa diz que sua produção prevista para 2027 e 2028 não vai dar conta da demanda.',
  body: [
    'A holandesa ASML vendeu 113 sistemas de litografia novos no terceiro trimestre. Para o quarto trimestre, prevê receita de € 14,2 bilhões a € 15,2 bilhões, e para 2026, de € 44 bilhões a € 45 bilhões.',
    'O presidente da empresa, Christophe Fouquet, disse que a ASML estuda ampliar a capacidade de 2028 além dos 30% já anunciados.'
  ] },

{ id: 'decreto-bloqueio-celulares-presidios', cat: 'tecnologia', own: false, t: '2026-10-13T14', d: '13 out 2026', img: 'celular', src: 'Tecnoblog', url: U.tbPresidios,
  title: 'Decreto autoriza bloquear celulares em presídios sem ordem judicial',
  sum: 'Os aparelhos podem ser bloqueados pelo IMEI, e o sinal pode ser cortado nos perímetros das prisões, conforme regras da Anatel.',
  body: [
    'O Decreto 13.136, assinado por Lula em 9 de outubro, já está em vigor. A administração prisional faz um laudo técnico, e os pedidos passarão por uma plataforma do Ministério da Justiça, que deve ficar pronta em até 180 dias. Até lá, vão direto à Anatel.',
    'Um cadastro nacional vai registrar os perímetros dos presídios, para evitar que o bloqueio atinja casas e serviços vizinhos.'
  ] },

{ id: 'netflix-copa-2030-espanha', cat: 'tecnologia', own: false, t: '2026-10-13T12', d: '13 out 2026', img: 'plataforma', src: 'Jornal do Comércio', url: U.jcNetflix,
  title: 'Netflix compra direitos dos 104 jogos da Copa de 2030 na Espanha e em Andorra',
  sum: 'O acordo não inclui o Brasil. Na Espanha, um jogo por dia será gratuito, e uma TV aberta exibirá os jogos da seleção espanhola, as semifinais e a final.',
  body: [
    'O valor não foi divulgado. A Netflix já tinha os direitos, nos EUA e no Canadá, das Copas femininas de 2027, que será no Brasil, e de 2031.'
  ] },

{ id: 'iphone-13-celular-mais-consertado-brasil', cat: 'tecnologia', own: false, t: '2026-10-14T09', d: '14 out 2026', img: 'celular', src: 'Canaltech', url: U.ctIphone13,
  title: 'iPhone 13 é o celular mais levado para conserto no Brasil em 2026, aponta levantamento',
  sum: 'O modelo responde por 5% dos atendimentos do Grupo PLL, empresa de reparos, de janeiro a agosto. O Galaxy S23 Ultra vem em seguida, com 4%.',
  body: [
    'O iPhone 15 ficou em 3º, com 3%. Os números mostram a participação de cada modelo nos atendimentos da empresa, e não a taxa de defeito, e podem refletir o perfil dos clientes.'
  ] },

{ id: 'apple-evento-casa-inteligente-13-outubro', cat: 'tecnologia', own: false, t: '2026-10-13T20', d: '13 out 2026', img: 'tecnologia', src: 'Tecnoblog', url: U.tbHomeView,
  title: 'Apple lança a tela HomeView, novo HomePod mini e Apple TV com Siri reforçada por IA',
  sum: 'A HomeView custa US$ 299 nos EUA e chega às lojas em 13 de novembro. A nova Apple TV terá preço de R$ 3.599 no Brasil, segundo o Tecnoblog.',
  body: [
    'A HomeView é uma tela de 7 polegadas que reconhece até seis moradores pelo rosto, faz chamadas de vídeo e controla aparelhos da casa com a Siri. A Apple não informou preço nem data para o Brasil.',
    'A nova Apple TV 4K usa o chip A19 e chega em 13 de novembro. O HomePod mini ganhou a primeira atualização em seis anos, com o chip S10, e custa US$ 149 nos EUA, com vendas a partir de 30 de outubro.'
  ] },

{ id: 'mp-bloqueio-ligacoes-abusivas-anatel', cat: 'tecnologia', own: true, t: '2026-10-13T16', d: '13 out 2026', img: 'celular', read: 3,
  title: 'Medida provisória permite bloquear por 15 dias linhas que fazem ligações em massa',
  sum: 'A regra vale para quem passa de mil chamadas por dia, com ao menos 85% delas curtas ou não completadas. Empresas terão de aparecer na tela com nome e logotipo.',
  body: [
    'O governo publicou no Diário Oficial de terça-feira (13) a medida provisória 1.396, assinada pelo presidente Lula em 9 de outubro, com novas regras contra ligações abusivas e golpes por telefone. A MP já tem força de lei, mas precisa ser aprovada pelo Congresso para não perder a validade.',
    '## Quando a linha é bloqueada',
    'Uma linha será considerada abusiva quando fizer mais de 1.000 chamadas por dia, ou 10.000 somando as linhas do mesmo titular, e ao menos 85% delas forem curtas: não completadas, encaminhadas à caixa postal ou atendidas por até 6 segundos. Nesse caso, o titular fica 15 dias sem poder fazer ligações. Órgãos públicos e serviços de saúde, segurança pública e defesa civil ficam de fora.',
    '## Quem está ligando',
    'As operadoras terão de barrar chamadas sem autenticação e bloquear ligações e mensagens com números irregulares. Empresas passarão a aparecer na tela com nome e logotipo, quando houver. A MP também cria uma base nacional de numeração, supervisionada pela Anatel e paga pelas operadoras.',
    '## Prazos',
    'O limite de chamadas passa a valer em 30 dias, e a Anatel tem 60 dias para regulamentar as regras. Institutos de pesquisa eleitoral temem efeitos sobre as entrevistas por telefone.'
  ],
  box: { type: 'facts', title: 'A nova regra', rows: [['Medida', 'MP 1.396/2026'], ['Limite', 'Mais de 1.000 chamadas por dia por linha'], ['Chamadas curtas', '85% ou mais'], ['Punição', '15 dias sem fazer ligações'], ['Vigência do limite', 'Em 30 dias']] },
  sources: [['Gazeta Mercantil', U.gmLigacoes], ['Olhar Digital', U.odLigacoes], ['RCN67', U.rcnLigacoes]] },

{ id: 'google-lanca-gemini-4-argon', cat: 'tecnologia', own: false, t: '2026-10-13T17', d: '13 out 2026', img: 'tecnologia', src: 'Exame', url: U.exGemini,
  title: 'Google libera o Gemini 4 Argon para assinantes e desenvolvedores',
  sum: 'O modelo chega ao app Gemini e à Busca para assinantes Pro e Ultra. Na API, o preço dobra a partir de 1º de dezembro.',
  body: [
    'O anúncio foi feito por Sundar Pichai na terça (13). O modelo aceita contexto de cerca de 1 milhão de tokens. Até 30 de novembro, custa US$ 2 por milhão de tokens de entrada e US$ 10 por milhão de saída; depois, US$ 4 e US$ 20.',
    'Segundo a Exame, o Gemini 4 Argon lidera o ranking Vals Index, com 68,90%, mas fica atrás de um concorrente em um dos testes de programação.'
  ] },

{ id: 'openai-funcionario-preso-escuta', cat: 'tecnologia', own: false, t: '2026-10-14T03', d: '14 out 2026', img: 'tecnologia', src: 'Swissinfo / AFP', url: U.swOpenai,
  title: 'Funcionário da OpenAI é preso pelo FBI, suspeito de instalar escuta na sede da empresa',
  sum: 'Ele é acusado de interceptar comunicações e pode pegar até 5 anos de prisão. A OpenAI diz não ter indício de acesso a código ou a dados de clientes.',
  body: [
    'O engenheiro, contratado em 2025, foi preso no dia 9 e demitido. Segundo a acusação, um dispositivo USB escondido foi ligado a uma TV em uma sala de reuniões em San Francisco. A OpenAI disse que seus próprios modelos de IA ajudaram a identificar o responsável.',
    'Ele deve voltar ao tribunal federal em 19 de outubro.'
  ] },

];
