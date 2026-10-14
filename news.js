/* ============================================================
   NOVERA: conteúdo do site. Edite este arquivo e rode `node build.js`.
   Regras completas em ATUALIZACAO.md.
   ============================================================ */

/* Topo do site: data da edição e mercado */
const META = {
  /* Endereço público do site, sem barra no final. Usado nos links das redes sociais. */
  siteUrl: 'https://novera-sepia.vercel.app',
  dataExtenso: 'Quarta-feira, 14 de outubro de 2026',
  edicao: '14 out 2026',
  ibovespa: { valor: '206.888', variacao: '1,04%', sobe: false },
  dolar: { valor: 'R$ 5,02', variacao: '0,74%', sobe: true },
  fechamento: '13/10'
};

/* Home: destaque principal, dois laterais e três da faixa de baixo (IDs de notícias "own: true") */
const FEATURED = {
  lead: 'papa-leao-cirurgia-pulmao',
  side: ['pacote-prospera-mei-lula-pix-perdao-dividas', 'flavio-visita-bolsonaro-mdb-17-diretorios'],
  also: ['caso-master-stf-fachin-pf-13-outubro', 'boca-juniors-vasco-semifinal-sul-americana', 'ibovespa-cai-dolar-volta-acima-r-5-focus']
};

/* Home: "Escolhas da redação" (5 IDs) */
const PICKS = ['ataque-aeroporto-riade-hutis', 'ataque-balistico-kiev-usina-chp4', 'mp-bloqueio-ligacoes-abusivas-anatel', 'morre-netinho-cantor-milla', 'libertadores-semifinais-tres-brasileiros'];

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
};

const NEWS = [
/* ===================== NACIONAL ===================== */
{ id: 'caso-master-stf-fachin-pf-13-outubro', cat: 'nacional', own: true, t: '2026-10-13T21', d: '13 out 2026', img: 'congresso', read: 4,
  title: 'Caso Master: Fachin manda a PF enviar ao STF todas as menções a ministros, "sem exceção"',
  sum: 'O presidente do Supremo se reuniu por cerca de uma hora e meia com o diretor-geral da PF. A PGR dará um parecer, e o plenário decide se abre investigação sobre os ministros citados.',
  body: [
    'O presidente do Supremo Tribunal Federal, Edson Fachin, recebeu na terça-feira (13) o diretor-geral da Polícia Federal, Andrei Rodrigues, para tratar das citações a ministros da Corte encontradas na investigação sobre o Banco Master. Segundo a Agência Brasil, o encontro durou cerca de uma hora e meia, e Fachin determinou que a PF envie ao tribunal todas as menções, sem exceção.',
    '## Próximos passos',
    'O material passa primeiro pela Procuradoria-Geral da República, que dá um parecer. Depois, o plenário do STF decide se abre investigações sobre os ministros mencionados. A reportagem não informa se a PF já entregou os dados durante a reunião.',
    '## Quem foi citado',
    'Segundo a Agência Brasil, Alexandre de Moraes aparece em mensagens enviadas por Daniel Vorcaro, dono do Master, a um número atribuído ao ministro. Kassio Nunes Marques, Dias Toffoli, Luiz Fux e André Mendonça foram citados por pessoas ligadas ao banqueiro. Gilmar Mendes pediu, em ofício, que todos os mencionados sejam identificados.',
    'A coluna de Túlio Amâncio, no SBT News, fala em ao menos seis dos dez ministros citados. Ser citado não significa ser investigado, e os ministros negam irregularidades.',
    '## Outras pendências',
    'Também aguardam a PGR medidas urgentes pedidas pela PF no caso Master e no caso dos descontos do INSS, além de pedidos de soltura de Fabiano Zettel, cunhado de Vorcaro, e de Felipe e Henrique Vorcaro, primo e pai do banqueiro. Na reunião, Fachin também pediu rapidez à PF no inquérito das fake news, que ele pretende arquivar.'
  ],
  box: { type: 'facts', title: 'Linha do tempo no STF', rows: [['15 set', 'Plenário não julga o mérito; Dino pede vista'], ['28 set', 'Gilmar defende suspender o julgamento'], ['2 out', 'Fachin cobra apuração "sem exceção"'], ['13 out', 'Fachin recebe a PF e pede todas as menções'], ['Próximo passo', 'Parecer da PGR e decisão do plenário']] },
  sources: [['Brasil de Fato / Agência Brasil', U.bdfMaster], ['Diário Carioca', U.dcMaster], ['SBT News', U.sbtMaster], ['CNN Brasil', U.cnnMaster]] },

{ id: 'pacote-prospera-mei-lula-pix-perdao-dividas', cat: 'nacional', own: true, t: '2026-10-13T20', d: '13 out 2026', img: 'mercado', read: 4,
  title: 'Lula anuncia Pix de até R$ 5 mil e perdão de dívidas para MEIs; Flávio critica medida a 12 dias da eleição',
  sum: 'O pacote Prospera MEI prevê perdoar cerca de R$ 12,6 bilhões em dívidas de 3,6 milhões de microempreendedores. As principais medidas dependem do Congresso e só valeriam em 2027.',
  body: [
    'O presidente Lula (PT) anunciou na terça-feira (13), no Palácio do Planalto, o Prospera MEI, um pacote para microempreendedores individuais. O lançamento ocorreu a 12 dias do segundo turno, em que ele disputa a Presidência com Flávio Bolsonaro (PL).',
    '## Pix MEI',
    'A principal novidade é um repasse de até R$ 5 mil por MEI, sem obrigação de devolver. Lula disse que o dinheiro não é empréstimo. Segundo o InfoMoney, o governo não detalhou critérios, custo nem número de beneficiários. O pagamento só começaria em 2027, segundo o Estadão, e a meta é chegar a cerca de 1 milhão de MEIs em até quatro anos, segundo a Exame.',
    '## Perdão de dívidas',
    'Um projeto de lei complementar enviado ao Congresso perdoa dívidas de MEIs com a União, sobretudo mensalidades não pagas. O governo fala em R$ 12,6 bilhões e 3,6 milhões de microempreendedores. Pelos dados detalhados da Fazenda, o estoque na Dívida Ativa é de R$ 12,86 bilhões, e a perda de receita estimada é de R$ 3,04 bilhões entre 2027 e 2029, segundo a Agência Brasil. Para ter o perdão, o MEI terá de pagar as mensalidades em dia por seis meses.',
    '## Outras medidas',
    'O pacote inclui o Desenrola MEI, em que o governo compra dívidas bancárias dos microempreendedores com desconto de 90% ou mais, e um decreto que dispensa a nota fiscal nas vendas a pessoas físicas. O governo também voltou a defender o projeto que eleva o teto de faturamento do MEI de R$ 81 mil para R$ 110 mil em 2027 e R$ 140 mil em 2028, parado na Câmara desde junho.',
    '## A reação de Flávio',
    'Em evento com associações empresariais em São Paulo, Flávio Bolsonaro criticou o anúncio. Segundo a Exame, ele perguntou se Lula acha que "o povo é otário" ao lançar o Pix MEI a 12 dias da eleição e disse que o presidente passou quatro anos prejudicando os empreendedores. O candidato prometeu cortar impostos e burocracia com um decreto no primeiro dia de governo.'
  ],
  box: { type: 'table', title: 'O pacote Prospera MEI', head: ['Medida', 'O que prevê', 'Situação'], rows: [['Pix MEI', 'Até R$ 5 mil, sem devolução', 'Proposta; pagamento em 2027'], ['Perdão de dívidas', 'Cerca de R$ 12,6 bilhões', 'Depende do Congresso'], ['Desenrola MEI', 'Compra de dívidas bancárias com 90% ou mais de desconto', 'Anunciado'], ['Teto de faturamento', 'R$ 110 mil em 2027 e R$ 140 mil em 2028', 'Parado na Câmara'], ['Nota fiscal', 'Dispensa nas vendas a pessoas físicas', 'Decreto assinado']], note: 'Fontes: Metrópoles, InfoMoney, Agência Brasil, Estadão e Exame.' },
  sources: [['Metrópoles', U.metMei], ['InfoMoney', U.imMei], ['Agência Brasil', U.abMeiImpacto], ['Terra / Estadão Conteúdo', U.terraMei], ['Exame', U.exMei], ['Exame', U.exFlavioMei]] },

{ id: 'flavio-visita-bolsonaro-mdb-17-diretorios', cat: 'nacional', own: true, t: '2026-10-13T20', d: '13 out 2026', img: 'eleicao', read: 3,
  title: 'Flávio visita o pai após 90 dias e recebe apoio de 17 diretórios do MDB; outros 10 ficam com Lula',
  sum: 'O MDB se dividiu no segundo turno. A ala que apoia Flávio se concentra no Sul, Sudeste e Centro-Oeste; a que apoia Lula, no Norte e no Nordeste.',
  body: [
    'O candidato Flávio Bolsonaro (PL) visitou na manhã de terça-feira (13) o pai, o ex-presidente Jair Bolsonaro, que cumpre prisão domiciliar em Brasília. Foi o primeiro encontro depois de 90 dias de proibição, revogada na véspera pelo ministro Alexandre de Moraes, do STF, com parecer favorável da PGR.',
    'Na saída, Flávio disse que estava com a energia renovada. Segundo a IstoÉ, ele contou que o pai comemorou o resultado do primeiro turno e deu orientações para a campanha, sem revelar quais. A decisão de Moraes proíbe encontros com finalidade político-eleitoral e manifestações de Jair Bolsonaro sobre a eleição, segundo o Metrópoles.',
    '## MDB dividido',
    'À tarde, em São Paulo, o presidente nacional do MDB, Baleia Rossi, anunciou que 17 diretórios estaduais do partido apoiam Flávio. O encontro foi no escritório político do governador Tarcísio de Freitas, com o prefeito Ricardo Nunes e representantes de mais de 80 municípios paulistas, segundo O Tempo e o SBT News.',
    'Outros 10 diretórios do MDB assinaram uma nota de apoio a Lula (PT) e ao vice Geraldo Alckmin: Amazonas, Alagoas, Bahia, Ceará, Maranhão, Pará, Pernambuco, Piauí, Paraíba e Rondônia. A nota cita programas como Bolsa Família, Pé-de-Meia e Farmácia Popular e afirma que interromper o ciclo atual deixaria obras pela metade, segundo O Tempo.',
    '## Outros apoios',
    'Republicanos e a federação entre União Brasil e PP já tinham declarado apoio a Flávio depois do primeiro turno, segundo o SBT News. À noite, o candidato tinha um jantar na sede da Fiesp, na Avenida Paulista.'
  ],
  box: { type: 'facts', title: 'O dia de Flávio', rows: [['Visita ao pai', 'Terça (13), após 90 dias'], ['MDB com Flávio', '17 diretórios estaduais'], ['MDB com Lula', '10 diretórios estaduais'], ['Segundo turno', '25 de outubro']] },
  sources: [['IstoÉ', U.istoeVisita], ['Metrópoles', U.metVisita], ['O Tempo', U.otMdb17], ['SBT News', U.sbtMdb], ['O Tempo', U.otMdb10], ['PB Nordeste / Agência Brasil', U.pbnVisita]] },

{ id: 'pec-6x1-votacao-primeiro-turno-14-outubro', cat: 'nacional', own: false, t: '2026-10-13T19', d: '13 out 2026', img: 'congresso', src: 'Agência Senado', url: U.senPec13,
  title: 'PEC do fim da escala 6x1 pode ser votada nesta quarta (14) no Senado',
  sum: 'A votação vem logo depois da quinta e última sessão de discussão. Com um calendário especial, os dois turnos podem ser concluídos no mesmo dia. São necessários 49 votos em cada um.',
  body: [
    'A quarta sessão de discussão foi na terça (13). O relator, Omar Aziz (PSD-AM), rejeitou as 36 emendas apresentadas, e a líder do governo, Teresa Leitão (PT-PE), vai pedir a quebra do prazo entre os turnos.',
    'A PEC reduz a jornada máxima de 44 para 40 horas semanais, com até 8 horas por dia e duas folgas remuneradas por semana, sem corte de salário. A transição prevê 42 horas dois meses depois da publicação e 40 horas um ano e dois meses depois disso.'
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

{ id: 'quaest-datafolha-pesquisas-semana-debates', cat: 'nacional', own: false, t: '2026-10-13T10', d: '13 out 2026', img: 'eleicao', src: 'Poder360', url: U.p360Pesquisas12,
  title: 'Pesquisas do 2º turno: Quaest sai nesta quarta (14), e Datafolha, na quinta (15)',
  sum: 'No PoderData/Aya, Flávio tem 51% dos votos válidos, e Lula, 49%. Na Vox Brasil, Lula tem 50,86%, e Flávio, 49,14%.',
  body: [
    'A Quaest ouviu 2.154 pessoas de 10 a 13 de outubro, com margem de erro de 2 pontos. O Datafolha faz 2.520 entrevistas de 13 a 15 de outubro, também com margem de 2 pontos. As duas estão registradas no TSE.',
    'O PoderData/Aya ouviu 3.000 pessoas de 10 a 12 de outubro, com margem de 1,8 ponto; na rodada anterior, Flávio tinha 53%, e Lula, 47%. Na BTG/Nexus, Flávio tem 52%, e Lula, 48%. Segundo o Poder360, Flávio aparece numericamente à frente em 7 de 8 pesquisas recentes, e Lula lidera na Vox Brasil.',
    'O debate da Band está marcado para domingo (18), às 20h, e o da Globo, para sexta (23).'
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
{ id: 'papa-leao-cirurgia-pulmao', cat: 'internacional', own: true, t: '2026-10-14T05', d: '14 out 2026', img: 'mundo', read: 3,
  title: 'Papa Leão XIV tem câncer de pulmão e passa por cirurgia bem-sucedida em Roma',
  sum: 'Os médicos retiraram o lobo inferior do pulmão direito. Segundo o Vaticano, o papa teve uma primeira noite tranquila, e a internação de cerca de uma semana está mantida.',
  body: [
    'O Vaticano informou que o papa Leão XIV, de 71 anos, tem um adenocarcinoma, um tipo de câncer de pulmão. A suspeita surgiu nos exames feitos antes da cirurgia e foi confirmada na análise feita durante a operação, na tarde de terça-feira (13), no Hospital Gemelli, em Roma.',
    'Segundo o Vatican News, a equipe retirou o lobo inferior do pulmão direito por videocirurgia. O papa ficou cerca de três horas no centro cirúrgico, e a operação em si durou cerca de 90 minutos. A Santa Sé disse que a cirurgia foi bem-sucedida, sem complicações e dentro do planejado.',
    '## Primeira noite',
    'No boletim desta quarta (14), o Vaticano informou que o papa passou uma noite tranquila e pediu o jantar. A internação prevista de uma semana está mantida, e o tecido retirado passará por novos exames nos próximos dias. Uma nova atualização foi prometida para esta quarta.',
    '## Diagnóstico precoce',
    'O nódulo foi encontrado em exames de rotina. No domingo (11), o próprio papa disse que o problema tinha sido detectado em estágio muito inicial e bem localizado. Segundo a PBS, oncologistas consideravam o prognóstico excelente.',
    'É o primeiro problema de saúde grave divulgado nos 17 meses de pontificado do primeiro papa americano. As audiências estão canceladas até 20 de outubro.'
  ],
  box: { type: 'facts', title: 'A cirurgia', rows: [['Diagnóstico', 'Adenocarcinoma de pulmão'], ['Quando', 'Terça (13), no Hospital Gemelli'], ['Procedimento', 'Retirada do lobo inferior do pulmão direito'], ['Internação', 'Cerca de uma semana'], ['Audiências', 'Canceladas até 20 de outubro']] },
  sources: [['Vatican News', U.vnPapa], ['PBS / AP', U.pbsPapa], ['Axios', U.axPapa], ['Crux', U.cruxPapa]] },

{ id: 'ataque-aeroporto-riade-hutis', cat: 'internacional', own: true, t: '2026-10-14T04', d: '14 out 2026', img: 'mundo', read: 3,
  title: 'Coalizão saudita bombardeia alvos dos hutis no Iêmen, e grupo atinge prédio da Aramco',
  sum: 'Os hutis mandaram evacuar a sede da Aramco e o aeroporto de Riade, que chamam de alvo legítimo. Trump diz que o grupo quer elevar o preço do petróleo antes das eleições nos EUA.',
  body: [
    'A coalizão liderada pela Arábia Saudita atacou na terça-feira (13) instalações de petróleo controladas pelos hutis no Iêmen. Antes das explosões, mandou evacuar a estação central de al-Sabah, da estatal Yemeni Oil Company, em Sanaa. Segundo o porta-voz da coalizão, Turki al-Maliki, o local e depósitos subterrâneos guardavam mísseis e drones. Também foram atingidos tanques no porto de Ras Isa e uma estação em Hodeidah; a estatal iemenita diz que os tanques estavam vazios.',
    '## Resposta dos hutis',
    'Horas depois, os hutis atingiram um prédio administrativo da petroleira Saudi Aramco em Dhahran. Houve um pequeno incêndio, sem feridos, segundo o Ministério da Energia saudita. O porta-voz do grupo, Yahya Saree, mandou evacuar a sede da Aramco, o aeroporto Rei Khalid, em Riade, e uma refinaria na capital.',
    'Destroços de dois mísseis interceptados sobre Riade feriram quatro pessoas e danificaram 15 casas, segundo a Defesa Civil saudita. Na quarta (14), um míssil de cruzeiro foi destruído sobre Al-Kharj, segundo a Al Jazeera.',
    '## Aeroporto fechado',
    'O aeroporto de Riade segue fechado até 17 de outubro. Segundo a Al Jazeera, o ataque de sábado (10) matou ao menos 13 pessoas e feriu mais de 300. Air France-KLM, Lufthansa, Delta, Qatar, Etihad, Gulf Air e Air India suspenderam voos.',
    '## Reações',
    'O presidente dos EUA, Donald Trump, escreveu que os hutis querem elevar o preço do petróleo antes das eleições de meio de mandato, provavelmente a mando do Irã, e disse que os EUA podem ampliar os ataques na região depois da votação. O gabinete saudita prometeu consequências. No Iêmen, a ONU contabiliza ao menos 46 civis mortos desde agosto e mais de 200 mil deslocados desde setembro.'
  ],
  box: { type: 'facts', title: 'A escalada', rows: [['Ataque à Aramco', 'Prédio em Dhahran, sem feridos'], ['Destroços em Riade', '4 feridos e 15 casas danificadas'], ['Mortos no aeroporto (10/10)', 'Ao menos 13'], ['Aeroporto de Riade', 'Fechado até 17 de outubro'], ['Civis mortos no Iêmen', 'Ao menos 46 desde agosto, segundo a ONU']] },
  sources: [['Al Jazeera', U.ajAramco], ['Al Jazeera', U.ajTrumpHutis], ['Al Jazeera', U.ajLive14], ['Al Jazeera', U.ajRiade3]] },

{ id: 'ataque-balistico-kiev-usina-chp4', cat: 'internacional', own: true, t: '2026-10-14T06', d: '14 out 2026', img: 'mundo', read: 3,
  title: 'Rússia ataca Kiev com mísseis balísticos e atinge usina; ao menos 3 pessoas morrem',
  sum: 'Segundo Zelensky, o alvo principal era a termelétrica CHP-4. O ataque ocorre dias depois de Trump anunciar um "cessar-fogo energético" que a Rússia não confirmou.',
  body: [
    'Mísseis balísticos russos atingiram Kiev a partir das 22h40 de terça-feira (13), no horário local, e os ataques seguiram pela madrugada desta quarta (14). Segundo o Serviço de Emergência da Ucrânia, ao menos 3 pessoas morreram e 21 ficaram feridas, entre elas uma criança de 8 anos.',
    'O presidente Volodymyr Zelensky disse que o alvo principal era a usina termelétrica CHP-4, uma das mais importantes da capital, e que ela foi atingida. O prefeito Vitali Klitschko informou que várias instalações de energia foram danificadas.',
    '## Prédio em chamas',
    'No distrito de Desnianskyi, um prédio de nove andares pegou fogo do 1º ao 8º andar, e 16 moradores foram resgatados. Uma pessoa morreu no distrito de Holosiivskyi. Na noite anterior, a Rússia já tinha lançado cinco mísseis balísticos contra a cidade.',
    '## Trégua não confirmada',
    'O presidente dos EUA, Donald Trump, anunciou no domingo (11) um cessar-fogo nos ataques à infraestrutura de energia. Na segunda (12), disse que as partes concordaram "porque eu disse que concordaram", segundo o Kyiv Independent. O porta-voz do Kremlin, Dmitry Peskov, afirmou que a Rússia não tinha nada a declarar. Zelensky disse aceitar a trégua e pediu que Trump informe quando ela começa.'
  ],
  box: { type: 'facts', title: 'O ataque', rows: [['Mortos', 'Ao menos 3'], ['Feridos', '21, incluindo uma criança de 8 anos'], ['Alvo principal', 'Termelétrica CHP-4'], ['Trégua de energia', 'Anunciada por Trump; sem confirmação russa']] },
  sources: [['Kyiv Post', U.kpKiev], ['UNN', U.unnKiev], ['Kyiv Independent', U.kiTrumpTregua]] },

{ id: 'bulgaria-drone-afunda-navio-mar-negro', cat: 'internacional', own: false, t: '2026-10-13T15', d: '13 out 2026', img: 'mundo', src: 'Al Jazeera', url: U.ajBulgaria,
  title: 'Ataque com drones afunda cargueiro na costa da Bulgária; 11 tripulantes estão desaparecidos',
  sum: 'Outro navio, de dono ucraniano, também foi atingido, e seus 15 tripulantes foram resgatados. O governo búlgaro convocou o embaixador da Rússia.',
  body: [
    'O cargueiro HS Dignity afundou perto de Krapets, junto à fronteira com a Romênia, na madrugada de terça (13). Cinco tripulantes foram resgatados, segundo a presidente Iliana Iotova. O primeiro-ministro Rumen Radev disse não haver prova de autoria, mas afirmou que o resultado beneficia a Rússia.',
    'É o segundo ataque do tipo na região em uma semana. A presidente da Comissão Europeia, Ursula von der Leyen, disse que o Mar Negro virou mais uma frente de escalada.'
  ] },

{ id: 'kabila-m23-coalizao-congo', cat: 'internacional', own: false, t: '2026-10-13T12', d: '13 out 2026', img: 'protesto', src: 'Al Jazeera', url: U.ajKabila,
  title: 'Ex-presidente do Congo Joseph Kabila se une aos rebeldes do M23 em nova frente',
  sum: 'A Frente para a Refundação da Nação foi lançada em Goma, cidade controlada pelo M23 desde janeiro de 2025. Um assessor falou em acabar com a "tirania" por todos os meios, inclusive a força.',
  body: [
    'Kabila governou a República Democrática do Congo de 2001 a 2019. No ano passado, foi condenado à morte à revelia por traição, em um tribunal militar, e neste ano foi sancionado pelos EUA. O M23 tem apoio de Ruanda.',
    'Governo e rebeldes tinham uma nova rodada de negociação prevista para novembro, no Catar.'
  ] },

{ id: 'ilhan-omar-casa-revistada', cat: 'internacional', own: false, t: '2026-10-12T20', d: '12 out 2026', img: 'congresso', src: 'Axios', url: U.axOmar,
  title: 'Agentes federais fazem busca na casa da deputada americana Ilhan Omar',
  sum: 'O mandado foi obtido pelo Departamento de Justiça em uma investigação criminal. Omar diz que não será silenciada; Trump a chamou de corrupta.',
  body: [
    'A busca foi feita por agentes do Departamento de Segurança Interna na casa da deputada democrata em Washington, antes do amanhecer de segunda (12). A Fox News diz que a investigação envolve documentos de imigração, informação que a Axios não confirmou.',
    'Omar acusou o governo de usar a polícia federal com fins políticos. A ação ocorre a menos de um mês das eleições de 3 de novembro nos EUA.'
  ] },

{ id: 'paquistao-emergencia-khyber-pakhtunkhwa', cat: 'internacional', own: false, t: '2026-10-13T12', d: '13 out 2026', img: 'protesto', src: 'Al Jazeera', url: U.ajPti,
  title: 'Paquistão confirma detenção do chefe de governo de Khyber Pakhtunkhwa, e partido de Imran Khan vai à Justiça',
  sum: 'Sohail Afridi e membros do gabinete provincial estão em "custódia preventiva", segundo o governo federal. O PTI contesta a intervenção decretada no domingo (11).',
  body: [
    'O ministro de Estado do Interior, Talal Chaudhry, confirmou as detenções na terça (13). O estado de emergência foi assinado pelo presidente Asif Ali Zardari, e um governador nomeado assumiu a província.',
    'O PTI diz que a marcha pela libertação de Khan, preso há mais de três anos, continua. Um relatório do governo aponta 122 policiais mortos na província no primeiro semestre de 2026, contra 63 no mesmo período de 2025.'
  ] },

{ id: 'coreia-do-norte-misseis-mar-do-japao', cat: 'internacional', own: false, t: '2026-10-13T08', d: '13 out 2026', img: 'mundo', src: 'Reuters', url: U.rtCoreia,
  title: 'Coreia do Norte confirma teste de míssil balístico "tático"',
  sum: 'Segundo o Japão, foram ao menos dois mísseis, um deles com mais de 910 km de voo. Segundo a Coreia do Sul, foi o quarto lançamento norte-coreano em um mês.',
  body: [
    'A agência estatal KCNA disse na terça (13) que o teste de segunda foi um grande sucesso. O Estado-Maior sul-coreano informou que um míssil voou mais de 900 km a partir da região de Pyongyang.',
    'Na segunda, o presidente dos EUA, Donald Trump, disse que pode se encontrar com Kim Jong Un em uma viagem à Ásia. Ele deve ir à cúpula da Apec, na China, em meados de novembro.'
  ] },

{ id: 'ira-terceiro-superpetroleiro-ormuz', cat: 'internacional', own: false, t: '2026-10-12T18', d: '12 out 2026', img: 'mundo', src: 'Tribune India / ANI', url: U.tribOrmuz,
  title: 'Guarda Revolucionária do Irã diz ter atingido o terceiro superpetroleiro em 48 horas em Ormuz',
  sum: 'Em um dos navios, os 11 tripulantes indianos foram salvos; em outro, dois indianos estão desaparecidos. Teerã diz ter "controle total" do estreito.',
  body: [
    'Os navios citados são o Valthera e o Petro Dolphin. O porta-voz da chancelaria iraniana, Esmail Baghaei, afirmou que o Irã controla o Estreito de Ormuz, rota de boa parte do petróleo exportado pelo Golfo.'
  ] },

{ id: 'colombia-embaixada-jerusalem', cat: 'internacional', own: false, t: '2026-10-13T20', d: '13 out 2026', img: 'mundo', src: 'Pulzo', url: U.pulzoColombia,
  title: 'Colômbia inaugura nesta quarta (14) sua embaixada em Jerusalém',
  sum: 'A representação funcionava em Tel Aviv. A mudança foi ordenada pelo presidente Abelardo de la Espriella.',
  body: [
    'O chanceler Omar Bula chegou a Jerusalém na terça (13) para a cerimônia. A embaixadora será Tania Gilinski, segundo o site colombiano Pulzo.'
  ] },

/* ===================== ESPORTES ===================== */
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

{ id: 'libertadores-semifinais-tres-brasileiros', cat: 'esportes', own: true, t: '2026-10-14T05', d: '14 out 2026', img: 'esportes', read: 3,
  photo: 'fotos/libertadores-semifinais-tres-brasileiros.webp', photoAlt: 'Montagem com jogadores de Fluminense, Palmeiras, Flamengo e Estudiantes comemorando', credit: 'Montagem: reprodução',
  title: 'Fluminense e Palmeiras abrem as semifinais da Libertadores nesta quarta, no Maracanã',
  sum: 'O jogo é às 21h30, com Abel Ferreira suspenso. Na quinta (15), o Flamengo visita o Estudiantes com cinco desfalques, entre eles De Arrascaeta.',
  body: [
    'Três dos quatro semifinalistas da Copa Libertadores são brasileiros, o que garante um time do país na final. Fluminense e Palmeiras jogam nesta quarta-feira (14), às 21h30, no Maracanã. O argentino Facundo Tello apita, com Silvio Trucco no VAR, segundo a Gazeta Esportiva.',
    '## Palmeiras sem Abel',
    'O técnico Abel Ferreira cumpre suspensão por ter sido expulso contra a LDU, e o auxiliar João Martins comanda o time. Vitor Roque, com entorse no tornozelo direito, e Jefté estão fora. Ramón Sosa está à disposição.',
    '## Fluminense forte em casa',
    'O time do técnico Marcão não perde no Maracanã desde 5 de agosto, com cinco vitórias e um empate no período, incluindo 3 a 2 sobre o Palmeiras pelo Brasileirão. Germán Cano, John Kennedy e Alisson estão entre os desfalques. No histórico do confronto, são 106 jogos, com 56 vitórias do Palmeiras, 35 do Fluminense e 15 empates.',
    '## Flamengo na Argentina',
    'Na quinta (15), às 21h30, o Flamengo enfrenta o Estudiantes no estádio Jorge Luis Hirschi, em La Plata. O clube relacionou 23 jogadores e terá cinco desfalques: De Arrascaeta, operado de fratura no punho, Danilo, operado de fraturas na mandíbula, Ayrton Lucas, Evertton Araújo e Jorginho, segundo a Placar.',
    'As voltas serão em 21 de outubro, no Nubank Parque, e em 22 de outubro, no Maracanã. A final será em jogo único em 28 de novembro, no Estádio Centenário, em Montevidéu.'
  ],
  box: { type: 'table', title: 'Semifinais', head: ['Confronto', 'Ida', 'Volta'], rows: [['Fluminense x Palmeiras', '14 out, Maracanã', '21 out, Nubank Parque'], ['Estudiantes x Flamengo', '15 out, La Plata', '22 out, Maracanã']], note: 'Todos os jogos às 21h30 de Brasília. Final em 28 de novembro, no Centenário. Fontes: Gazeta Esportiva, O Tempo e Agência Brasil.' },
  sources: [['Gazeta Esportiva', U.gzFluPal], ['CNN Brasil', U.cnnFlu], ['Placar', U.placarFla], ['O Tempo', U.otLiberta], ['Agência Brasil', U.abLiberta], ['Portal do Palestra', U.palestraAbel]] },

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

{ id: 'selecao-feminina-empata-argentina-pernambuco', cat: 'esportes', own: false, t: '2026-10-13T23', d: '13 out 2026', img: 'esportes', src: 'Lance!', url: U.lanceFeminina,
  title: 'Seleção feminina abre 2 a 0, mas cede o empate à Argentina em Pernambuco',
  sum: 'Bia Zaneratto e Gio Garbelini marcaram para o Brasil, que tinha uma jogadora a mais desde os 12 minutos do segundo tempo. No sábado, o time tinha vencido a Argentina por 3 a 1.',
  body: [
    'O amistoso foi na terça (13), na Arena de Pernambuco, em São Lourenço da Mata. A Argentina diminuiu com Falfán, aos 34 minutos do primeiro tempo, e empatou com Bonsegundo, de pênalti, no começo do segundo. Pouco depois, Sofía Domínguez foi expulsa.',
    'Foi o último jogo da seleção do técnico Arthur Elias no Brasil em 2026. Em novembro e dezembro, o time faz amistosos no Japão.'
  ] },

{ id: 'atletico-mg-city-torque-sul-americana', cat: 'esportes', own: false, t: '2026-10-13T16', d: '13 out 2026', img: 'esportes', src: 'O Tempo', url: U.otGalo,
  title: 'Atlético-MG recebe o City Torque nesta quarta pela semifinal da Sul-Americana',
  sum: 'O jogo é às 19h, na Arena MRV. O goleiro Everson, com fratura no pé, está entre os desfalques.',
  body: [
    'Além de Everson, o técnico Eduardo Domínguez não terá Ruan Tressoldi, Gustavo Scarpa e Cassierra, todos com lesão na coxa. Tomás Pérez e Cuello voltam de suspensão.',
    'A volta será em 21 de outubro, às 19h, no Estádio Centenário, em Montevidéu.'
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

{ id: 'bragantino-vence-cruzeiro-4-a-2', cat: 'esportes', own: false, t: '2026-10-12T23', d: '12 out 2026', img: 'esportes', src: 'Lance!', url: U.lanceBragantino,
  title: 'Bragantino vence o Cruzeiro por 4 a 2 e encerra jejum de seis jogos',
  sum: 'O time paulista fez 3 a 0 no primeiro tempo. O Cruzeiro, 6º com 48 pontos, perdeu a chance de entrar no G-4.',
  body: [
    'Lucas Barbosa, Kaio Jorge, contra, e Eric Ramires marcaram para o Bragantino antes do intervalo. Zé Lucas e Matheus Henrique diminuíram, e Herrera fechou o placar aos 45 do segundo tempo.',
    'O Bragantino chegou a 40 pontos e está em 9º, segundo o Lance!.'
  ] },

{ id: 'serie-b-vila-nova-lider-33-rodada', cat: 'esportes', own: false, t: '2026-10-12T22', d: '12 out 2026', img: 'esportes', src: 'Gazeta Esportiva', url: U.gzVilaNova,
  title: 'Vila Nova vence o Náutico e reassume a liderança da Série B',
  sum: 'O time goiano tem 61 pontos, um a mais que Novorizontino e Juventude. Vila Nova e Novorizontino se enfrentam no domingo (18), em Goiânia.',
  body: [
    'Everton Galdino e Janderson marcaram no primeiro tempo do 2 a 0 nos Aflitos, no domingo (11), pela 33ª rodada. Na segunda (12), Fortaleza e CRB empataram por 2 a 2.',
    'Segundo a Gazeta Esportiva, a Ponte Preta, com 13 pontos, já está rebaixada.'
  ] },

{ id: 'grenal-empate-dupla-no-z4', cat: 'esportes', own: false, t: '2026-10-11T20', d: '11 out 2026', img: 'esportes', src: 'Lance!', url: U.lanceGrenal,
  title: 'Grêmio e Internacional empatam por 1 a 1, e a dupla segue na zona de rebaixamento',
  sum: 'O Inter tem 32 pontos e está em 17º; o Grêmio, com 31, é o 18º. Na Fonte Nova, o Bahia venceu o Mirassol e voltou ao 5º lugar.',
  body: [
    'Vitinho abriu o placar para o Inter no primeiro tempo, e Wallace empatou aos 27 minutos do segundo, no rebote de uma falta cobrada por Marlon, na Arena do Grêmio.',
    'O Bahia venceu o Mirassol por 1 a 0, com gol de pênalti de Luciano Juba, e chegou a 49 pontos, segundo a Gazeta Esportiva.'
  ] },

/* ===================== CULTURA ===================== */
{ id: 'morre-netinho-cantor-milla', cat: 'cultura', own: true, t: '2026-10-13T20', d: '13 out 2026', img: 'palco', read: 3,
  title: 'Morre Netinho, cantor de "Milla" e um dos nomes do axé, aos 60 anos',
  sum: 'Ele tratava um linfoma desde o início de 2025 e morreu em Salvador. Velório e cremação serão reservados à família e aos amigos próximos, a pedido do cantor.',
  body: [
    'O cantor Netinho morreu na terça-feira (13), em Salvador, aos 60 anos. Segundo a CNN Brasil, ele tinha um linfoma não Hodgkin do tipo B, que evoluiu para insuficiência renal e falha de vários órgãos. Estava internado no Hospital Aliança Star.',
    'O diagnóstico de câncer no sistema linfático saiu em fevereiro de 2025. Em 2026, ele voltou a ser internado depois de uma recidiva e, no mês passado, anunciou que se afastaria das redes sociais. A nota da assessoria diz que ele partiu em paz, como desejava.',
    '## Da Banda Beijo a "Milla"',
    'Nascido Ernesto de Souza Andrade Júnior em 12 de julho de 1966, em Santo Antônio de Jesus (BA), Netinho se mudou para Salvador aos 10 anos. Estreou em 1988 como vocalista da Banda Beijo, no Carnaval da capital baiana, e ficou conhecido no país com "Beijo na Boca".',
    'Em carreira solo, lançou em 1996 "Milla", seu maior sucesso. Em 2013, sofreu três AVCs e passou por cirurgias no cérebro.',
    '## As mais tocadas',
    'Segundo o Ecad, há 495 gravações em nome do cantor. "Milla" foi a música dele mais tocada nos últimos cinco anos, seguida por "Menina" e "Bate Lata".'
  ],
  box: { type: 'facts', title: 'Netinho', rows: [['Nome', 'Ernesto de Souza Andrade Júnior'], ['Nascimento', '12/7/1966, Santo Antônio de Jesus (BA)'], ['Início', 'Banda Beijo, em 1988'], ['Maior sucesso', '"Milla", de 1996'], ['Gravações', '495, segundo o Ecad']] },
  sources: [['CNN Brasil', U.cnnNetinho], ['CNN Brasil', U.cnnNetinhoEcad], ['O Tempo', U.otNetinho]] },

{ id: 'mostra-sao-paulo-50-edicao', cat: 'cultura', own: true, t: '2026-10-14T05', d: '14 out 2026', img: 'cultura', read: 3,
  photo: 'fotos/mostra-sao-paulo-50-edicao.webp', photoAlt: 'Arte oficial da 50ª Mostra Internacional de Cinema em São Paulo, com selo dourado e desenho de um casal se beijando', credit: 'Divulgação: Mostra Internacional de Cinema em São Paulo',
  title: 'Mostra de São Paulo abre a 50ª edição nesta quarta com "Tigre de Papel", de James Gray',
  sum: 'A sessão de abertura é para convidados. Para o público, são 380 títulos de 93 países, de 15 a 29 de outubro, com sessões gratuitas em 26 CEUs.',
  body: [
    'A 50ª Mostra Internacional de Cinema em São Paulo abre nesta quarta-feira (14), às 19h, na Sala São Paulo, em sessão para convidados. O filme de abertura é "Tigre de Papel", de James Gray, que esteve na competição de Cannes. Antes, será exibido o curta "Sul de Teerã", de Kleber Mendonça Filho, sobre o cineasta iraniano Jafar Panahi.',
    'Gray apresenta o filme pessoalmente. Ele é o homenageado da edição, com retrospectiva e o Prêmio Leon Cakoff, e também assina a arte do cartaz.',
    '## Para o público',
    'As sessões abertas vão de 15 a 29 de outubro, com 380 títulos de 93 países em 57 espaços, entre cinemas, centros culturais e CEUs. "Tigre de Papel" volta em sessões públicas nos dias 15, 16 e 27.',
    '## Destaques',
    'A programação tem "Fjord", de Cristian Mungiu, vencedor da Palma de Ouro, e "Mulher Desconhecida", de May el-Toukhy, Leão de Ouro em Veneza. A Mostra Brasil reúne mais de 70 produções e coproduções, como "Feito Pipa", de Allan Deberton, candidato brasileiro a uma vaga no Oscar, e "A Margem do Rio", premiado no Festival do Rio.',
    'Também recebem o Prêmio Leon Cakoff o produtor português Paulo Branco e o diretor indiano S.S. Rajamouli.',
    '## Ingressos',
    'Os ingressos avulsos custam R$ 26 de segunda a quinta e R$ 32 de sexta a domingo, com meia-entrada, e são vendidos quatro dias antes de cada sessão. Há sessões gratuitas no Centro de Formação Cultural Cidade Tiradentes e em 26 CEUs, segundo a Prefeitura de São Paulo.'
  ],
  box: { type: 'facts', title: 'Serviço', rows: [['Abertura', '14 de outubro, 19h, Sala São Paulo (convidados)'], ['Sessões ao público', '15 a 29 de outubro'], ['Programação', '380 títulos de 93 países'], ['Espaços', '57'], ['Ingressos', 'R$ 26 a R$ 32 (inteira)']] },
  sources: [['Prefeitura de São Paulo', U.prefMostra], ['CNN Brasil', U.cnnMostra2], ['Omelete', U.omeleteMostra], ['CNN Brasil', U.cnnMostra]] },

{ id: 'lollapalooza-2027-lineup-por-dia', cat: 'cultura', own: false, t: '2026-10-13T15', d: '13 out 2026', img: 'palco', src: 'Rolling Stone Brasil', url: U.rsLolla,
  title: 'Lollapalooza Brasil 2027 divulga as atrações de cada dia nesta quarta, ao meio-dia',
  sum: 'No mesmo horário começa a venda do ingresso para um dia. O festival será de 19 a 21 de março, no Autódromo de Interlagos.',
  body: [
    'O evento marca 15 anos do Lollapalooza no Brasil e terá mais de 70 atrações, entre elas Travis Scott, The Killers, Charli XCX e Queens of the Stone Age. As vendas são pela Ticketmaster, on-line e na bilheteria do Shopping Ibirapuera.',
    'A organização alerta para sites falsos que vendem ingressos.'
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

{ id: 'premio-jabuti-finalistas-14-outubro', cat: 'cultura', own: false, t: '2026-10-12T10', d: '12 out 2026', img: 'arte', src: 'CBL', url: U.cblJabuti,
  title: 'Prêmio Jabuti anuncia os finalistas nesta quarta (14)',
  sum: 'Serão cinco finalistas por categoria. Os vencedores saem em 27 de outubro, na Sala São Paulo.',
  body: [
    'O anúncio da 68ª edição está marcado para as 12h, segundo a Câmara Brasileira do Livro, que organiza o prêmio. A cerimônia de entrega é só para convidados.'
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
{ id: 'ibovespa-cai-dolar-volta-acima-r-5-focus', cat: 'economia', own: true, t: '2026-10-13T19', d: '13 out 2026', img: 'mercado', read: 3,
  title: 'Ibovespa cai 1,04% depois do recorde, e dólar volta a fechar acima de R$ 5',
  sum: 'A bolsa fechou a terça (13) aos 206.888 pontos, e o dólar, a R$ 5,02. No Boletim Focus, o mercado elevou para 5,22% a previsão de inflação deste ano.',
  body: [
    'O Ibovespa, principal índice da bolsa brasileira, fechou a terça-feira (13) em queda de 1,04%, aos 206.888 pontos, depois do recorde de sexta-feira (9), quando passou dos 209 mil. Na segunda, feriado, não houve pregão. O dólar comercial subiu 0,74%, a R$ 5,02, e voltou a fechar acima de R$ 5, segundo a Agência Brasil. No ano, a moeda americana acumula queda de 8,50%.',
    '## O que pesou',
    'Segundo o Metrópoles e a Suno, os investidores realizaram lucros depois de a bolsa subir 8,82% na semana anterior. Também pesaram as pesquisas do segundo turno, a alta dos juros futuros e o cancelamento, por problema técnico, de um leilão de swap cambial do Banco Central.',
    'Entre as maiores quedas estiveram Lojas Renner (-8,03%), Magalu (-7,04%) e Localiza (-5,72%). Do lado das altas, PRIO subiu 3,58%, Embraer, 2,02%, e Petrobras PN, 1,52%.',
    '## Boletim Focus',
    'No Focus desta semana, divulgado na terça por causa do feriado, a projeção do mercado para o IPCA de 2026 subiu pela quarta vez seguida, de 5,01% para 5,22%, acima do teto da meta, de 4,5%. A previsão para a Selic no fim do ano caiu de 13,50% para 13,25%. A estimativa de crescimento do PIB ficou em 1,85%, e a do dólar no fim do ano recuou para R$ 5,15, segundo o BP Money.'
  ],
  box: { type: 'table', title: 'Projeções do Focus', head: ['Indicador', 'Agora', 'Antes'], rows: [['IPCA 2026', '5,22%', '5,01%'], ['IPCA 2027', '4,30%', '4,30%'], ['Selic no fim de 2026', '13,25%', '13,50%'], ['PIB 2026', '1,85%', '1,85%'], ['Dólar no fim de 2026', 'R$ 5,15', 'R$ 5,20']], note: 'Boletim Focus de 13 de outubro. Fontes: BP Money e Canal Rural.' },
  sources: [['Sou Brasília / Agência Brasil', U.sbMercado], ['Metrópoles', U.metMercado], ['Suno', U.sunoMercado], ['O Tempo', U.otDolar], ['BP Money', U.bpFocus], ['Canal Rural', U.crFocus]] },

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

{ id: 'bets-saem-do-ar-devolucao-saldos', cat: 'economia', own: false, t: '2026-10-13T12', d: '13 out 2026', img: 'celular', src: 'O Tempo / Agência Brasil', url: U.otBets13,
  title: 'Prazo para os bancos devolverem o dinheiro das bets termina nesta quarta (14)',
  sum: 'Mais de R$ 1 bilhão já voltou aos apostadores, e faltam R$ 159 milhões. O que não for devolvido vai para uma conta na Caixa.',
  body: [
    'O dinheiro é depositado automaticamente na conta usada para fazer os depósitos nas plataformas. São 22,5 milhões de apostadores e 70,5 milhões de contas; em 90% delas, há menos de R$ 1 a receber. A Advocacia-Geral da União vai à Justiça contra oito empresas que não enviaram os dados dos clientes aos bancos.',
    'Depois do prazo, a Fazenda vai publicar as instruções para quem ainda tiver valores a receber. A orientação é desconfiar de mensagens que peçam pagamento para liberar o dinheiro.'
  ] },

{ id: 'perdao-dividas-meis-impacto-3-bilhoes', cat: 'economia', own: false, t: '2026-10-13T22', d: '13 out 2026', img: 'mercado', src: 'Agência Brasil', url: U.abMeiImpacto,
  title: 'Perdão de dívidas de MEIs terá impacto de R$ 3 bilhões até 2029, diz a Fazenda',
  sum: 'O estoque de dívidas dos microempreendedores na Dívida Ativa é de R$ 12,86 bilhões, e R$ 11,05 bilhões são considerados de difícil recuperação.',
  body: [
    'A perda de receita estimada é de R$ 1,12 bilhão em 2027, R$ 1,01 bilhão em 2028 e R$ 909 milhões em 2029. Entram no perdão as dívidas inscritas até 13 de outubro de 2026, e o MEI terá de pagar as mensalidades em dia por seis meses e desistir de ações na Justiça.',
    'Segundo a Fazenda, manter a cobrança gera custos administrativos altos. O país tem 17,56 milhões de MEIs ativos. A medida depende de aprovação do Congresso.'
  ] },

{ id: 'china-exportacoes-sobem-36-setembro', cat: 'economia', own: false, t: '2026-10-14T01', d: '14 out 2026', img: 'mercado', src: 'AP', url: U.apChina,
  title: 'Exportações da China crescem 36,3% em setembro, acima do esperado',
  sum: 'O superávit comercial chegou a US$ 133,5 bilhões no mês. De janeiro a setembro, as vendas de chips mais que dobraram.',
  body: [
    'As importações chinesas subiram 31% em setembro na comparação com um ano antes, segundo a AP. No acumulado do ano, o superávit soma US$ 938 bilhões; as exportações de chips cresceram 108,1%, e as de carros, 54,3%.'
  ] },

{ id: 'petroleo-brent-cai-105-diesel-russo', cat: 'economia', own: false, t: '2026-10-13T17', d: '13 out 2026', img: 'plataforma', src: 'CNN Brasil', url: U.cnnPetroleo13,
  title: 'Petróleo Brent cai 0,9%, a US$ 105,69, com expectativa de mais diesel russo no mercado',
  sum: 'A queda interrompeu três altas seguidas. O WTI, referência nos EUA, subiu 0,43%, a US$ 94,14.',
  body: [
    'Pesaram a expectativa de mais oferta de diesel da Rússia, depois de um acordo entre EUA e Rússia, e a realização de lucros. Do outro lado, os ataques sauditas a áreas dos hutis no Iêmen e as ameaças do grupo a instalações de energia sauditas limitaram a queda, segundo a CNN Brasil.'
  ] },

{ id: 'propostas-economicas-lula-flavio', cat: 'economia', own: false, t: '2026-10-11T08', d: '11 out 2026', img: 'mercado', src: 'O Povo', url: U.opovoPropostas,
  title: 'Salário mínimo, gastos e 6x1: o que Lula e Flávio propõem para a economia',
  sum: 'Lula mantém o arcabouço fiscal e a regra de ganho real do mínimo. Flávio propõe corte de R$ 250 bilhões em despesas e correção do mínimo só pela inflação.',
  body: [
    'Segundo O Povo, Lula defende o fim da escala 6x1, com jornada de 40 horas, e o salário mínimo corrigido pelo INPC mais o crescimento do PIB, com ganho real limitado a 2,5%.',
    'Flávio Bolsonaro propõe cortar R$ 250 bilhões em despesas discricionárias, reduzir dez ministérios e investir R$ 900 bilhões em transportes por meio de concessões e parcerias. Os dois mantêm o Bolsa Família em R$ 691.'
  ] },

{ id: 'mercado-flavio-compromissos-fiscais', cat: 'economia', own: false, t: '2026-10-10T09', d: '10 out 2026', img: 'mercado', src: 'InfoMoney / Estadão Conteúdo', url: U.imFiscalFlavio,
  title: 'Otimismo do mercado com Flávio esbarra na falta de detalhes sobre o ajuste fiscal',
  sum: 'Economistas ouvidos pelo Estadão dizem que a campanha ainda não explicou quais gastos vai cortar. Assessores afirmam que Bolsa Família e BPC não serão afetados.',
  body: [
    'Segundo a reportagem, uma economista da FGV estima que o ajuste em discussão seria de R$ 200 bilhões a R$ 250 bilhões, sem definição de despesas, método ou prazo. Assessores de Flávio Bolsonaro (PL) dizem que não há intenção de mexer no Bolsa Família, no BPC nem na regra do salário mínimo.',
    'Analistas de mercado avaliam que a Bolsa pode devolver parte da alta se a sinalização continuar vaga.'
  ] },

{ id: 'nobel-economia-hall-woodford', cat: 'economia', own: false, t: '2026-10-12T07', d: '12 out 2026', img: 'mercado', src: 'AP / ABC News', url: U.apNobelEco,
  title: 'Nobel de Economia vai para os americanos Robert Hall e Michael Woodford',
  sum: 'Os dois foram premiados por modelos que ajudam governos e bancos centrais a reagir a choques, como crises de energia e de inflação.',
  body: [
    'Hall é professor da Universidade Stanford, e Woodford, da Universidade Columbia. Segundo a AP, o comitê disse que o trabalho mudou a teoria da política de estabilização.',
    'O prêmio é de 12 milhões de coroas suecas. Woodford disse por telefone que a notícia foi uma surpresa.'
  ] },

/* ===================== TECNOLOGIA ===================== */
{ id: 'apple-evento-casa-inteligente-13-outubro', cat: 'tecnologia', own: true, t: '2026-10-13T20', d: '13 out 2026', img: 'tecnologia', read: 3,
  title: 'Apple lança a tela HomeView, novo HomePod mini e Apple TV com Siri reforçada por IA',
  sum: 'A HomeView custa US$ 299 nos EUA e chega às lojas em 13 de novembro. A nova Apple TV terá preço de R$ 3.599 no Brasil, segundo o Tecnoblog.',
  body: [
    'A Apple apresentou na terça-feira (13) uma linha de produtos para a casa conectada. O destaque é a HomeView, uma tela de 7 polegadas que fica sobre a mesa ou presa na parede. Ela reconhece até seis moradores pelo rosto, faz chamadas de vídeo, toca música e controla aparelhos da casa com a Siri, agora com inteligência artificial.',
    'Nos EUA, a HomeView custa US$ 299, em quatro cores, com pré-venda aberta e entregas a partir de 13 de novembro. Os suportes de parede são vendidos à parte. Segundo o MacRumors, o aparelho não será vendido na União Europeia. A Apple não informou preço nem data para o Brasil.',
    '## Apple TV e HomePod mini',
    'A nova Apple TV 4K usa o chip A19 e, segundo a Apple, tem processador até 50% mais rápido que a geração anterior. A Siri passa a buscar filmes e séries por conversa. No Brasil, custará R$ 3.599, com lançamento em 13 de novembro, segundo o Tecnoblog.',
    'O HomePod mini ganhou a primeira atualização em seis anos, com o chip S10 e novas cores. Custa US$ 149 nos EUA e chega às lojas em 30 de outubro. Os recursos da Siri com IA virão depois, em atualização de software.',
    '## Acessórios',
    'A empresa também mostrou câmeras, campainha, fechadura e termostato feitos com a LG e a Schneider Electric. Os primeiros chegam em dezembro, nos EUA.'
  ],
  box: { type: 'facts', title: 'Os lançamentos', rows: [['HomeView', 'US$ 299; vendas em 13 de novembro'], ['Apple TV 4K', 'R$ 3.599 no Brasil; 13 de novembro'], ['HomePod mini', 'US$ 149; vendas em 30 de outubro'], ['HomeView no Brasil', 'Sem preço nem data']] },
  sources: [['Tecnoblog', U.tbHomeView], ['Tecnoblog', U.tbHomePod], ['MacRumors', U.mrHomeView], ["Tom's Guide", U.tgHomeView], ['MacMagazine', U.mmHomePod]] },

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

{ id: 'tse-meta-48-horas-perfis-lula', cat: 'tecnologia', own: true, t: '2026-10-13T18', d: '13 out 2026', img: 'celular', read: 3,
  title: 'Meta remove 7 perfis apontados pela campanha de Lula e atribui problemas a falhas técnicas',
  sum: 'A coligação indicou uma rede de 255 contas, e a empresa analisou 35 perfis identificáveis. A Meta nega favorecer ou prejudicar candidatos.',
  body: [
    'A Meta, dona do Facebook e do Instagram, informou ao ministro Marco Aurélio Bellizze, do Tribunal Superior Eleitoral, que desativou 7 perfis apontados pela campanha de Lula (PT). Seis foram removidos por violações repetidas, e um por identidade enganosa, segundo o Correio Braziliense.',
    'A coligação Brasil Pronto pra Mais tinha apontado uma rede de 255 contas. A empresa disse ter analisado os 35 perfis que conseguiu identificar.',
    '## Falhas admitidas',
    'A Meta atribuiu a falhas de sistema dois episódios citados pela campanha. Em 23 de setembro, a conta de anúncios de Lula ficou suspensa por pouco mais de uma hora. Em 7 de outubro, um erro global travou a contagem de visualizações de vídeos Reels em mais de 100 países, sem afetar a entrega dos conteúdos, segundo a empresa.',
    '## Os dois lados',
    'A Meta nega favorecer ou prejudicar qualquer candidato. Para Éden Valadares, do PT, a falta de transparência das plataformas é um desafio para a Justiça Eleitoral. A campanha de Lula afirma, com base em levantamento do partido, que a página de Flávio Bolsonaro (PL) teve em média 2,96 vezes mais engajamento.'
  ],
  box: { type: 'facts', title: 'O caso', rows: [['Rede apontada', '255 contas'], ['Perfis analisados', '35'], ['Perfis removidos', '7'], ['Falha nos Reels', '7 de outubro, mais de 100 países'], ['Relator', 'Marco Aurélio Bellizze']] },
  sources: [['Correio Braziliense', U.cbMeta], ['Metrópoles', U.metMetaTse], ['CNN Brasil', U.cnnMetaTse]] },

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

{ id: 'character-ai-falencia-disney', cat: 'tecnologia', own: false, t: '2026-10-13T14', d: '13 out 2026', img: 'tecnologia', src: 'Reuters / Global News', url: U.gnCharacter,
  title: 'Character.AI pede falência nos EUA, e Disney faz a primeira oferta por parte dos ativos',
  sum: 'A Disney ofereceu US$ 20 milhões. A venda deve ser concluída entre o fim de novembro e o início de dezembro, e outros interessados ainda podem cobrir a proposta.',
  body: [
    'A empresa de chatbots, fundada em 2021 por ex-funcionários do Google, declarou ativos e dívidas estimados entre US$ 50 milhões e US$ 100 milhões cada. O serviço continua no ar, mas será encerrado se não houver comprador, segundo a Reuters.'
  ] },

{ id: 'hackers-invadem-site-ancine', cat: 'tecnologia', own: false, t: '2026-10-13T15', d: '13 out 2026', img: 'tecnologia', src: 'Terra', url: U.terraAncine,
  title: 'Site da Ancine é invadido e sai do ar após publicação de ofensas a nordestinos',
  sum: 'Os invasores também publicaram ameaças a universidades públicas e mensagens políticas. O caso é investigado, e a autoria não foi identificada.',
  body: [
    'A invasão ocorreu na tarde de segunda (12), e o portal da Agência Nacional do Cinema continuava fora do ar na terça (13). Segundo o Terra, não há confirmação de vazamento de dados, e a agência não divulgou nota oficial.'
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

];
