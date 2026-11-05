/* ============================================================
   NOVERA: conteúdo do site. Edite este arquivo e rode `node build.js`.
   Regras completas em ATUALIZACAO.md.
   ============================================================ */

/* Topo do site: data da edição e destaques da faixa de cima */
const META = {
  /* Endereço público do site, sem barra no final. Usado nos links das redes sociais. */
  siteUrl: 'https://novera-sepia.vercel.app',
  dataExtenso: 'Quinta-feira, 5 de novembro de 2026',
  edicao: '5 nov 2026',
  /* Faixa do topo: 1 a 3 itens [rótulo, texto curto]. Use só fatos que estão em notícias do site. */
  destaques: [
    ['Em alta', 'Anatel manda operadoras bloquearem SMS de empresas sem cadastro; prazo é de 90 dias'],
    ['App do dia', 'Absolum tem estreia marcada no iPhone e no Android nesta quinta (5), por US$ 11,99'],
    ['Sexta (6)', 'Bancos e instituições de pagamento não podem mais operar com prestadoras de cripto sem autorização']
  ]
};

/* Home: destaque principal, dois laterais e três da faixa de baixo (IDs de notícias "own: true") */
const FEATURED = {
  lead: 'anatel-bloqueio-sms-sem-cadastro',
  side: ['app-store-18-anos-namoro-ia', 'uber-3tri-2026'],
  also: ['chatgpt-images-2-6-gifs', 'mercado-livre-3tri-2026', 'absolum-celular-ios-android']
};

/* Home: "Escolhas da redação" (5 IDs) */
const PICKS = ['ios-27-3-beta-app-saude-apple-watch', 'netflix-ai-discover-teste', 'duolingo-3tri-2026', 'uphold-oobit-deixam-brasil-cripto', 'strollme-assinatura-produtos-infantis'];

const U = {
  /* Atualização de 5 nov 2026 */
  absolumGematsu: 'https://www.gematsu.com/2026/09/absolum-coming-to-ios-android-on-november-5',
  absolumSemana: 'https://www.gematsu.com/2026/11/this-weeks-japanese-game-releases-the-legend-of-zelda-ocarina-of-time-crymelight-more',
  absolumPreco: 'https://playdigious.helpshift.com/hc/en/43-absolum/faq/858-how-much-is-absolum-on-mobile/?from=AppAgg.com&p=android',
  stellarBlade: 'https://www.nintendolife.com/news/2026/11/round-up-the-reviews-are-in-for-stellar-blades-switch-2-port',
  zeldaNotes: 'https://gameoverdrive.com.br/zelda-notes-ocarina-of-time-como-usar/',
  faraway: 'https://www.gematsu.com/2026/10/faraway-launches-november-5-for-ps5-xbox-series-switch-2-switch-and-pc',
  apple18Gizmodo: 'https://gizmodo.com/apple-to-place-stricter-age-restrictions-on-dating-apps-and-some-ai-chatbots-2000834362',
  apple18TechTimes: 'https://www.techtimes.com/articles/329924/20261103/apple-app-store-requires-18-age-rating-ai-romantic-companions-dating-apps-whats-changing.htm',
  apple18Dexerto: 'https://www.dexerto.com/entertainment/apple-introduces-new-18-age-restrictions-for-dating-apps-and-romantic-ai-companions-3424757/',
  whatsappSugestoes: 'https://wabetainfo.com/whatsapp-is-rolling-out-media-suggestions-on-android-and-ios/',
  whatsappFotoIa: 'https://wabetainfo.com/whatsapp-is-rolling-out-ai-photo-expansion-on-android/',
  mapsAeroportos: 'https://canaltech.com.br/apps/google-maps-prepara-recurso-para-viajantes-conhecerem-nova-cidade-assim-que-aterrissam',
  images26Digit: 'https://www.digit.in/news/general/openai-launches-chatgpt-images-26-with-gif-creation-and-faster-image-generation-features-availability-and-more-details.html',
  images26Weekly: 'https://aiweekly.co/alerts/openai-ships-chatgpt-images-26-with-gifs-and-faster-api-models',
  limitesCodex: 'https://canaltech.com.br/inteligencia-artificial/openai-vai-unificar-limites-do-chatgpt-e-codex-veja-o-que-muda/',
  geminiLimite: 'https://canaltech.com.br/inteligencia-artificial/google-prepara-limite-diario-para-criancas-usarem-o-gemini/',
  uberOficial: 'https://investor.uber.com/news-events/news/press-release-details/2026/Uber-Announces-Results-for-Third-Quarter-2026/default.aspx',
  uberSecurities: 'https://www.securities.io/uber-third-quarter-revenue-rises-10-as-bookings-grow-20/',
  mlExame: 'https://exame.com/invest/mercados/mercado-livre-lucra-us-448-milhoes-no-3o-tri-mas-margem-volta-a-cair/',
  mlMobileTime: 'https://www.mobiletime.com.br/noticias/04/11/2026/mercado-livre-3t26/',
  snapTc: 'https://techcrunch.com/2026/11/04/snapchat-surpasses-30m-paid-subscribers/',
  eloelo: 'https://finance.yahoo.com/media-advertising/articles/eloelo-group-raises-80-million-113000409.html',
  canvaCortes: 'https://www.fastcompany.com/91635782/canva-just-laid-off-1200-people-but-its-severance-package-is-earning-praise',
  matiks: 'https://techcrunch.com/2026/10/26/matiks-raises-10m-to-expand-its-math-and-puzzle-gaming-platform/',
  ghanem: 'https://www.wamda.com/en/2026/10/saudi-proptech-ghanem-raises-1-5-million-pre-seed-extension',
  viatik: 'https://www.forbesargentina.com/negocios/tras-superar-400000-usuarios-app-carpooling-viatik-levanta-us-600000-expandir-sus-rutas-argentina-n101243',
  anatelSmsGazeta: 'https://www.gazetadopovo.com.br/republica/anatel-determina-bloqueio-de-sms-sem-cadastro-para-combater-golpes/',
  anatelSmsMobile: 'https://www.mobiletime.com.br/noticias/04/11/2026/anatel-regras-sms/',
  anatelSmsConvergencia: 'https://convergenciadigital.com.br/seguranca/anatel-manda-operadoras-bloquearem-sms-usados-em-golpes/',
  govbrCertificado: 'https://www.contabeis.com.br/noticias/80587/login-do-gov-br-com-certificado-digital-apresenta-falhas-nesta-terca-3/',
  /* Atualização de 4 nov 2026 */
  affinityIpad: 'https://9to5mac.com/2026/11/02/affinity-for-ipad-all-in-one-design-app-now-available-free-for-individuals/',
  chromagraph: 'https://macrumors.com/2026/10/30/rian-johnson-iphone-camera-app/',
  dispatchMobile: 'https://www.gematsu.com/2026/10/dispatch-coming-to-ios-android-on-december-9-deluxe-edition-commentary-and-storyboard-modes-update-now-available',
  ios273Tudo: 'https://9to5mac.com/2026/11/03/everything-new-in-ios-27-3-beta-1-so-far/',
  ios273Saude: 'https://www.macrumors.com/2026/11/03/ios-27-3-health-app/',
  ios273China: 'https://9to5mac.com/2026/11/03/ios-27-3-brings-apple-intelligence-features-to-china/',
  gymStrength: 'https://9to5mac.com/2026/11/03/apple-announces-fitness-gym-strength-program-with-personalized-workout-plans/',
  netflixDiscover: 'https://techcrunch.com/2026/11/03/netflixs-new-ai-discover-tab-helps-you-find-something-to-watch-based-on-your-mood/',
  chatgptBuscas: 'https://olhardigital.com.br/2026/11/03/inteligencia-artificial/chatgpt-ja-alcanca-20-do-volume-de-buscas-do-google-diz-openai',
  audioIntelligence: 'https://techcrunch.com/2026/11/02/apple-watchs-ai-features-for-rewinding-and-recapping-conversations-begin-beta-testing/',
  duolingoTitan: 'https://www.stocktitan.net/articles/duolingo-q3-2026-earnings-daily-users-up-29-percent-max-plan-ends',
  duolingoSec: 'https://www.sec.gov/Archives/edgar/data/0001562088/000162828026069474/q3fy26duolingo9-30x26xpres.htm',
  falValuation: 'https://techcrunch.com/2026/11/03/ai-inference-startup-fal-doubles-its-valuation-to-16b-as-demand-surges/',
  hingePlano: 'https://techcrunch.com/2026/11/02/hinge-tests-a-cheaper-plan-as-users-become-more-fed-up-paying-for-dating-apps/',
  salaryHero: 'https://ffnews.com/news/1982-backed-salary-hero-raises-us-7-6-million-series-a-led-by-cento-ventures-exp-f4584f24',
  bbInstabilidade: 'https://exame.com/invest/minhas-financas/banco-do-brasil-apresenta-instabilidade-no-aplicativo-nesta-terca-feira/',
  vivoGoogle: 'https://www.mobiletime.com.br/noticias/03/11/2026/vivo-google-cloud-pre/',
  keetaUmAno: 'https://www.mobiletime.com.br/noticias/27/10/2026/keeta-10-mi-downloads-br/',
  /* Atualização de 3 nov 2026 */
  readwiseBooks: 'https://techcrunch.com/2026/11/02/readwise-takes-on-amazons-kindle-and-goodreads-with-its-new-app-for-book-lovers/',
  freeFireIndia: 'https://www.esquireindia.co.in/tech-and-auto/gaming/garena-free-fire-india-launch-how-to-download-diwali-campaign-free-fire-india-vs-max-parental-controls',
  gravhounds: 'https://news.xbox.com/en-us/2026/08/27/gravhounds-revealed-co-op-chaos-bio-engineered-dogs-in-space/',
  googleSystemNov: 'https://9to5google.com/2026/11/02/november-2026-google-system-updates/',
  tvBoxBackdoor: 'https://9to5google.com/2026/11/02/google-android-tv-box-backdoor-shut-down/',
  androidAutoOneUi: 'https://9to5google.com/2026/11/02/some-samsung-galaxy-phones-are-having-android-auto-issues-with-one-ui-9',
  iphoneDuoApps: 'https://www.macrumors.com/2026/11/02/zoom-microsoft-apps-iphone-duo-optimized/',
  chatgptAbas: 'https://techcrunch.com/2026/11/02/openai-is-finally-merging-chatgpts-chat-and-work-tabs/',
  chatgptAbasCanaltech: 'https://canaltech.com.br/inteligencia-artificial/chatgpt-vai-juntar-conversas-e-agentes-de-ia-no-mesmo-lugar-do-app',
  grokBot: 'https://techcrunch.com/2026/11/02/elon-musk-throttles-grok-bot-limits-due-to-unsustainably-high-costs/',
  anthropicBalanco: 'https://olhardigital.com.br/2026/11/02/pro/anthropic-fatura-r-918-bilhoes-em-trimestre-mas-prejuizo-chega-a-r-1242-bilhoes',
  anthropicRsi: 'https://techcrunch.com/2026/11/02/anthropic-warns-that-its-very-close-to-rsi-capability-aka-self-building-ai/',
  dreambeans: 'https://techcrunch.com/2026/11/02/google-takes-dreambeans-to-india-in-bid-to-bring-ai-generated-personal-stories-to-the-masses/',
  matchGdi: 'https://globaldatinginsights.com/featured/match-group-q3-2026-results-hinge-growth-and-new-plans-for-tinder',
  snapAcordo: 'https://techcrunch.com/2026/11/02/snap-settles-lawsuit-accusing-platform-of-fueling-teen-depression-and-eating-disorders/',
  pinterest: 'https://www.sec.gov/Archives/edgar/data/0001506293/000150629326000151/q3-26xpressrelease.htm',
  trajectory: 'https://techcrunch.com/2026/11/02/trajectory-raises-45m-to-make-ai-model-training-accessible-to-nontechnical-experts/',
  aqarWamda: 'https://www.wamda.com/2026/10/egyptian-proptech-aqar-exit-attracts-investment-2-million-valuation-arabic',
  aqarScene: 'https://thestartupscene.me/INVESTMENTS/Ayman-Abbas-Takes-10-Stake-in-Proptech-Aqar-Exit',
  strollme: 'https://www.startbase.de/news/strollme-erhaelt-22-millionen-euro-fuer-den-ausbau-seines-kinderprodukte-abos/',
  turuq: 'https://enterpriseam.com/egypt/2026/10/27/turuq-takes-its-first-outside-investment-from-den-vc/',
  enem: 'https://agenciabrasil.ebc.com.br/educacao/noticia/2026-11/falta-uma-semana-para-o-enem-2026-veja-horarios-e-o-que-levar',
  itauPay: 'https://www.mobiletime.com.br/noticias/30/10/2026/itau-checkout-eletronico/',
  anatelBiometria: 'https://www.mobiletime.com.br/noticias/29/10/2026/biometria-facial-norma-d/',
  blackFridayFraude: 'https://finsidersbrasil.com.br/noticias-sobre-fintechs/black-friday-obriga-bancos-e-fintechs-a-equilibrar-vendas-e-seguranca-contra-fraudes/',
  /* Atualização de 2 nov 2026 */
  zeldaOcarinaOfTimeSwitch2: 'https://exame.com/pop/de-gta-6-a-jogos-vorazes-os-lancamentos-de-filmes-series-games-e-albuns-de-novembro/',
  zeldaOcarinaOfTimeSwitch21: 'https://english.adnkronos.com/2026/09/09/nintendo-to-release-zelda-game-remake-for-switch-2-nov-5/',
  zeldaOcarinaOfTimeSwitch22: 'https://gameoverdrive.com.br/ocarina-of-time-midia-fisica-switch-2-comprar/',
  gta6Lancamento19Novembro: 'https://www.hardware.com.br/noticias/pre-venda-gta-6-brasil-preco/',
  gta6Lancamento19Novembro4: 'https://maketecheasier.com/gta-6-release-date-price-preload/',
  naviuGuiaJapaoIaRealidadeAumentada: 'https://www.prnewswire.com/news-releases/a-new-way-to-explore-japan-with-ai-naviu-ar-travel-companion-for-japan-launches-november-1-2026-302925556.html',
  androidSmsDaMorteFalha: 'https://canaltech.com.br/apps/sms-da-morte-derruba-ligacoes-e-trava-celulares-android-sem-voce-clicar-em-nada/',
  androidSmsDaMorteFalha7: 'https://www.esecurityplanet.com/threats/news-android-sms-of-death-cve-2026-58882/',
  metaAiAlertaPaisAdolescentesBrasil: 'https://about.fb.com/br/news/2026/07/ampliando-recursos-de-supervisao-parental-para-interacoes-de-adolescentes-com-a-meta-ai/',
  chromeExtensoesSequestramBuscas: 'https://canaltech.com.br/apps/mais-de-300-extensoes-do-chrome-sequestram-buscas-dos-usuarios-veja-se-voce-foi-afetado/',
  copilotFimTvsLgSamsung: 'https://www.advanced-television.com/?p=295002',
  copilotFimTvsLgSamsung12: 'https://oficinadanet.com.br/samsung/73798-microsoft-confirma-fim-do-copilot-nas-tvs-samsung-e-lg-veja-quando',
  copilotFimTvsLgSamsung13: 'https://windowscentral.com/artificial-intelligence/microsoft-copilot/microsoft-is-killing-copilot-on-all-smart-tvs-after-backlash-and-strategy-shift-lg-confirms-support-will-end-before-2027',
  copilotFimTvsLgSamsung14: 'https://thedesk.net/2026/10/microsoft-copilot-ending-lg-samsung-smart-tvs/',
  dubdubFeedDePerguntasIndia: 'https://startuptalky.com/news/dubdub-raises-1-3m-seed-trivia-app',
  sacComecaAValerAppsTransporteSenacon: 'https://timesbrasil.com.br/brasil/atendimento-humano-no-sac-sera-obrigatorio-a-partir-desta-segunda-2-veja-as-novas-regras/',
  sacComecaAValerAppsTransporteSenacon29: 'https://atarde.com.br/brasil/novas-regras-do-sac-entram-vigor-nesta-segunda-feira-saiba-o-que-muda-1407957',
  sacComecaAValerAppsTransporteSenacon30: 'https://www.letsmoney.com.br/noticias/novo-decreto-sac-bancos-fintechs/',
  bancosCriptoSemAutorizacao6Novembro: 'https://economicnewsbrasil.com.br/2026/10/31/regulacao-de-cripto-no-brasil/',
  /* Atualização de 1 nov 2026 */
  /* Lançamentos */
  /* Atualizações */
  /* IA */
  /* Startups */
  szUnico: 'https://www.startupz.com.br/artigo/unico-lanca-human-token-com-preco-unico-global-e-corta-25-do-quadro-de-funcionarios',
  tcOllie: 'https://techcrunch.com/2026/10/30/ollie-a-privacy-focused-ai-assistant-is-shutting-down/',
  /* Ideias para o Brasil */
  daTalent: 'https://disruptafrica.com/2026/10/30/aboyeji-backed-ai-engineering-talent-platform-talent-nation-raises-pre-seed-funding/',
  /* No Brasil */
  bnUphold: 'https://bitnoticias.com.br/noticias/gigante-global-de-criptomoedas-uphold-anuncia-saida-do-brasil',
  lcOobit: 'https://livecoins.com.br/cartao-de-criptomoedas-oobit-vai-encerrar-contas-de-brasileiros-e-da-uma-semana-de-prazo-para-saques-um-dia-apos-anunciar-expansao-internacional/',
  bnSaidas: 'https://bitnoticias.com.br/noticias/o-prazo-do-banco-central-acabou-e-agora-quem-pediu-licenca-cripto/',
  /* Atualização de 31 out 2026 */
  /* Lançamentos */
  /* Atualizações */
  ctRedditLogin: 'https://canaltech.com.br/apps/fim-do-acesso-livre-reddit-vai-exigir-login-ate-de-quem-so-quer-ler/',
  /* IA */
  m9China: 'https://9to5mac.com/2026/10/30/apple-confirms-ios-27-3-beta-is-coming-next-week-with-apple-intelligence-in-china/',
  /* Startups */
  /* Ideias para o Brasil */
  bnRently: 'https://www.bernama.com/tv/news.php?id=2626473',
  /* No Brasil */
  /* Atualização de 30 out 2026 */
  /* Lançamentos */
  /* Atualizações */
  /* IA */
  /* Startups */
  tcDoorDash: 'https://techcrunch.com/2026/10/29/doordash-to-acquire-instacart-for-17b/',
  nfDoorDash: 'https://neofeed.com.br/negocios/a-aposta-de-us-17-bilhoes-da-doordash-para-fazer-o-app-do-jantar-ser-o-app-das-compras-da-semana/',
  secDoorDash: 'https://www.sec.gov/Archives/edgar/data/0001792789/000179278926000062/proddashex991-pressrelease.htm',
  /* Ideias para o Brasil */
  tmMedikea: 'https://techmoran.com/2026/10/29/tanzanian-health-startup-medikea-raises-1-2-million-to-own-care-not-just-connect-it',
  cdMedikea: 'https://thecondia.com/medikea-raises-1-2m-pre-seed-funding/',
  /* No Brasil */
  /* Atualizações */
  /* IA */
  /* Ideias para o Brasil */
  enZorit: 'https://entrackr.com/news/bijnis-rebrands-as-zorit-raises-rs-27-cr-led-by-sparrow-capital-12762019',
  /* Atualização de 27 out 2026: estreia do formato de aplicativos */
  /* Ideias para o Brasil */
  incCent: 'https://inc42.com/buzz/cent-raises-15-mn-to-scale-ai-led-preventive-healthcare-platform',
};

const NEWS = [
/* ===================== LANÇAMENTOS ===================== */
{ id: 'absolum-celular-ios-android', cat: 'lancamentos', own: true, t: '2026-11-05T06', d: '5 nov 2026', img: 'celular', read: 2,
  title: 'Absolum, jogo de pancadaria com fases aleatórias, tem estreia marcada no iPhone e no Android nesta quinta (5)',
  sum: 'A versão para celular custa US$ 11,99 e traz controle por toque, com suporte a controle físico. As fontes não confirmam o preço em reais.',
  body: [
    'O Absolum tem lançamento marcado para esta quinta-feira (5) no iOS e no Android, em todo o mundo, segundo o Gematsu. A publicação é da Playdigious, em cooperação com a Dotemu, e o desenvolvimento é da Guard Crush Games e da Supamonks.',
    '## O que muda no celular',
    'A versão móvel tem interface própria e pode ser jogada só com toques na tela ou com controle físico. O progresso fica salvo na nuvem e passa do iOS para o Android. No Android, quem usa a mesma conta do Google Play Games também leva o avanço para o PC. Há conquistas no Game Center e no Google Play Games.',
    '## Preço',
    'A central de ajuda da Playdigious informa o preço de US$ 11,99 ou € 11,99, com 30% de desconto nas duas primeiras semanas. As fontes não trazem o valor em reais nem confirmam a disponibilidade no Brasil.'
  ],
  box: { type: 'facts', title: 'Absolum no celular', rows: [['Estreia', '5 de novembro'], ['Sistemas', 'iOS e Android'], ['Preço', 'US$ 11,99 ou € 11,99'], ['Controles', 'Toque ou controle físico'], ['Brasil', 'Sem confirmação']] },
  sources: [['Gematsu', U.absolumGematsu], ['Gematsu (lançamentos da semana)', U.absolumSemana], ['Playdigious (central de ajuda)', U.absolumPreco]] },

{ id: 'stellar-blade-switch-2', cat: 'lancamentos', own: false, t: '2026-11-03T14', d: '3 nov 2026', img: 'tecnologia', src: 'Nintendo Life', url: U.stellarBlade,
  title: 'Stellar Blade tem estreia no Switch 2 marcada para quinta (5), com notas de 7/10 a 4,5/5 nas primeiras análises',
  sum: 'A Complete Edition custa US$ 59,99. As análises reunidas pelo Nintendo Life elogiam a estabilidade em geral e criticam a geração de quadros.',
  body: [
    'As notas reunidas vão de 7/10, do próprio Nintendo Life, a 4,5/5, do The Outerhaven. A taxa de quadros é descrita como estável, na TV e no modo portátil, com perda visual em cenas e em animações distantes. A geração de quadros é o ponto mais criticado e pode ser desligada. A fonte não confirma o preço no Brasil.'
  ] },

{ id: 'zelda-notes-ocarina-of-time', cat: 'lancamentos', own: false, t: '2026-11-04T15', d: '4 nov 2026', img: 'celular', src: 'Game Overdrive', url: U.zeldaNotes,
  title: 'Zelda Notes ganha ocarina virtual e quiz com mais de 2.000 perguntas para o novo Ocarina of Time',
  sum: 'Os recursos ficam dentro do Nintendo Switch App e são gratuitos, sem exigir assinatura do Nintendo Switch Online.',
  body: [
    'É preciso ter o jogo no Switch 2, na versão 1.1.1 ou mais nova, além de conta Nintendo vinculada, dados salvos e internet. O app funciona em Android 9.0 ou mais novo e em iOS 16.0 ou mais novo.',
    'Na ocarina, o jogador toca pela tela e pode compartilhar partituras por QR code. O quiz dá uma tentativa grátis por dia, e rúpias do jogo compram outras. A fonte não confirma a disponibilidade do app no Brasil.'
  ] },

{ id: 'faraway-consoles-pc', cat: 'lancamentos', own: false, t: '2026-11-05T05', d: '5 nov 2026', img: 'tecnologia', src: 'Gematsu', url: U.faraway,
  title: 'Faraway, jogo de ligar estrelas feito por um único criador, tem estreia marcada para quinta (5) em consoles e PC',
  sum: 'O jogo de Steph Thirion, publicado pela Annapurna Interactive, sai para PS5, Xbox Series, Switch 2, Switch e PC.',
  body: [
    'O jogador controla uma estrela cadente e liga outras estrelas em constelações para colher energia. Há um modo infinito, gerado por computador, e 16 fases de quebra-cabeça feitas à mão. As páginas consultadas não informam o preço nem tratam do Brasil.'
  ] },

{ id: 'affinity-ipad-gratis', cat: 'lancamentos', own: false, t: '2026-11-02T14', d: '2 nov 2026', img: 'arte', src: '9to5Mac', url: U.affinityIpad,
  title: 'Canva lança o Affinity para iPad, app gratuito para pessoas físicas que junta foto, vetor, desenho e diagramação',
  sum: 'O app substitui os antigos Affinity Photo, Designer e Publisher no tablet e é download grátis na App Store.',
  body: [
    'O Affinity para iPad tem quatro módulos: Sketch, Vector, Photo e Layout, com edição de arquivos RAW, documentos de várias páginas e suporte aos recursos do Apple Pencil Pro. Há funções de IA, como expandir a imagem e separar uma imagem plana em camadas. Segundo o 9to5Mac, a versão para computador passou de 7 milhões de cadastros em um ano. A reportagem não trata de preços para empresas nem cita o Brasil.'
  ] },

{ id: 'chromagraph-camera-iphone', cat: 'lancamentos', own: false, t: '2026-10-30T15', d: '30 out 2026', img: 'celular', src: 'MacRumors', url: U.chromagraph,
  title: 'Diretor de Entre Facas e Segredos lança o Chromagraph Camera, app de fotos para iPhone que custa US$ 12,99',
  sum: 'O app de Rian Johnson chegou ao primeiro lugar em Foto e Vídeo na App Store dos EUA, em compra única.',
  body: [
    'Criado com o diretor de fotografia Steve Yedlin e o programador Eric Cameron, o Chromagraph Camera fotografa em RAW e aplica técnicas de imagem que Yedlin desenvolveu para filmes, com efeitos em cor, contraste e granulação. O arquivo original fica preservado, e o app exige iOS 17 ou mais recente, segundo o MacRumors. A fonte não trata da disponibilidade no Brasil.'
  ] },

{ id: 'dispatch-celular-9-dezembro', cat: 'lancamentos', own: false, t: '2026-10-22T14', d: '22 out 2026', img: 'celular', src: 'Gematsu', url: U.dispatchMobile,
  title: 'Dispatch chega ao iPhone e ao Android em 9 de dezembro, com os quatro primeiros episódios grátis',
  sum: 'O jogo completo do estúdio AdHoc custará US$ 19,99 no celular.',
  body: [
    'O jogo do AdHoc Studio será liberado por inteiro por US$ 19,99, segundo o Gematsu. A fonte não informa o preço em reais nem trata do Brasil.'
  ] },

{ id: 'zelda-ocarina-of-time-switch-2', cat: 'lancamentos', own: true, t: '2026-11-01T09', d: '1 nov 2026', img: 'tecnologia', read: 2,
  title: 'Nova versão de Zelda: Ocarina of Time chega ao Switch 2 na quinta (5)',
  sum: 'O jogo de 1998 volta com gráficos refeitos e botões para pular e correr. No Brasil, o site Game Over Drive informa R$ 329,90 pela versão digital.',
  body: [
    'A Nintendo lança em 5 de novembro uma nova versão de The Legend of Zelda: Ocarina of Time, exclusiva para o Nintendo Switch 2. O jogo saiu em 1998 para o Nintendo 64, e a data aparece na lista de lançamentos de novembro da Exame.',
    '## O que muda',
    'Segundo a agência Jiji Press, os gráficos foram refeitos, inclusive as texturas de roupas e equipamentos, e o jogo ganhou botões para pular e correr. A Nintendo também lançou em 29 de outubro um Switch 2 com visual de Zelda, pelos 40 anos da série.',
    '## Preço e idioma no Brasil',
    'O site Game Over Drive informa R$ 329,90 pela versão digital na eShop e cerca de R$ 439 como preço de referência da versão física. O mesmo site diz que o jogo terá textos em português do Brasil. No Japão, os preços são de 7.980 ienes (digital) e 8.980 ienes (físico), segundo a Jiji Press.'
  ],
  box: { type: 'facts', title: 'Zelda: Ocarina of Time', rows: [['Lançamento', '5 de novembro'], ['Onde', 'Nintendo Switch 2'], ['Digital no Brasil', 'R$ 329,90'], ['Físico no Brasil', 'Cerca de R$ 439 (referência)'], ['Idioma', 'Textos em português do Brasil']] },
  sources: [['Exame', U.zeldaOcarinaOfTimeSwitch2], ['Jiji Press, via Adnkronos', U.zeldaOcarinaOfTimeSwitch21], ['Game Over Drive', U.zeldaOcarinaOfTimeSwitch22]] },

{ id: 'gta-6-lancamento-19-novembro', cat: 'lancamentos', own: true, t: '2026-11-01T10', d: '1 nov 2026', img: 'tecnologia', read: 2,
  title: 'GTA VI chega em 19 de novembro ao PS5 e ao Xbox Series, com edição padrão a R$ 449,90 no Brasil',
  sum: 'A edição Ultimate custa R$ 549,90 no país. Quem comprou a versão digital pode baixar o jogo com antecedência a partir de 12 de novembro. Não há data para PC.',
  body: [
    'Grand Theft Auto VI está marcado para 19 de novembro no PlayStation 5 e no Xbox Series X|S, como lembra a Exame na lista de lançamentos do mês. A versão para PC ainda não tem data, segundo o site Hardware.com.br.',
    '## Preços',
    'Na pré-venda no Brasil, a edição padrão custa R$ 449,90 e a Ultimate, R$ 549,90, segundo o Hardware.com.br. Nos EUA, os preços são de US$ 79,99 e US$ 99,99, segundo o Make Tech Easier.',
    '## Download antecipado',
    'Quem fez a reserva da versão digital poderá baixar os arquivos a partir de 12 de novembro. A versão física também chega nessa data, mas é uma caixa com código de download, sem disco, segundo as mesmas fontes.'
  ],
  box: { type: 'facts', title: 'GTA VI', rows: [['Lançamento', '19 de novembro'], ['Onde', 'PS5 e Xbox Series X|S'], ['PC', 'Sem data'], ['Preço no Brasil', 'R$ 449,90 (padrão) e R$ 549,90 (Ultimate)'], ['Download antecipado', 'A partir de 12 de novembro']] },
  sources: [['Exame', U.zeldaOcarinaOfTimeSwitch2], ['Hardware.com.br', U.gta6Lancamento19Novembro], ['Make Tech Easier', U.gta6Lancamento19Novembro4]] },

{ id: 'football-manager-27-netflix-celular', cat: 'lancamentos', own: false, t: '2026-11-01T11', d: '1 nov 2026', img: 'tecnologia', src: 'Exame', url: U.zeldaOcarinaOfTimeSwitch2,
  title: 'Football Manager 27 sai em 10 de novembro, com versão para celular pela Netflix',
  sum: 'O jogo chega a PC, Mac, PS5 e Xbox Series X|S na mesma data, e a edição móvel será oferecida pela Netflix.',
  body: [
    'O jogo de gerenciamento de times de futebol aparece na lista de lançamentos de novembro da Exame, com data de 10 de novembro. A fonte não informa os preços.'
  ] },

/* ===================== ATUALIZAÇÕES ===================== */
{ id: 'app-store-18-anos-namoro-ia', cat: 'atualizacoes', own: true, t: '2026-11-03T16', d: '3 nov 2026', img: 'plataforma', read: 3,
  title: 'App Store passa a exigir classificação 18+ para apps de namoro e companheiros de IA, e o Brasil tem regra própria',
  sum: 'Desenvolvedores precisam declarar esses recursos a partir de 16 de novembro. No Brasil, apps de namoro ficam em A18 e os de localização compartilhada, em A16.',
  body: [
    'A Apple criou dois novos itens no questionário de idade da App Store: namoro e relacionamentos, e localização compartilhada. O primeiro leva o app à classificação mínima de 18 anos, mesmo que namoro não seja sua função principal, segundo o Dexerto e o Gizmodo. O anúncio é de 2 de novembro.',
    '## Quem é afetado',
    'A regra alcança apps que conectam pessoas reais e companheiros virtuais de IA com conteúdo sexual ou romântico. Character.AI e Replika são citados como apps que podem ser afetados. Segundo o Dexerto, a mudança não abrange todos os chatbots e assistentes de IA.',
    '## Os prazos',
    'A partir de 16 de novembro, a declaração vale para quem atualizar o app ou alterar a classificação. Até 12 de janeiro de 2027, todos os apps precisam responder. A localização compartilhada também deve ser declarada, mas na maioria das regiões não eleva a idade sozinha.',
    '## O caso do Brasil',
    'O Brasil é citado à parte. Segundo o Tech Times, apps de namoro e relacionamento ficam em A18, e os de localização compartilhada, em A16. Apps de localização voltados à família podem pedir classificação menor ao Ministério da Justiça e Segurança Pública.',
    '## O que a classificação não faz',
    'O 18+ não bloqueia menores automaticamente, segundo o Gizmodo. O controle depende de ferramentas para os pais, como Tempo de Uso e a aprovação de compras.'
  ],
  box: { type: 'facts', title: 'Novas regras', rows: [['Namoro e companheiros de IA', 'Mínimo de 18 anos'], ['Início', '16 de novembro de 2026'], ['Prazo para todos os apps', '12 de janeiro de 2027'], ['Brasil: namoro', 'A18'], ['Brasil: localização compartilhada', 'A16']] },
  sources: [['Gizmodo', U.apple18Gizmodo], ['Tech Times', U.apple18TechTimes], ['Dexerto', U.apple18Dexerto]] },

{ id: 'whatsapp-sugestoes-midia-recente', cat: 'atualizacoes', own: false, t: '2026-11-03T12', d: '3 nov 2026', img: 'celular', src: 'WABetaInfo', url: U.whatsappSugestoes,
  title: 'WhatsApp começa a sugerir a foto ou o vídeo mais recente ao abrir uma conversa',
  sum: 'A liberação é gradual, no Android e no iOS, para alguns usuários. Nada é enviado sozinho: o toque na sugestão abre o editor.',
  body: [
    'O recurso pode sugerir qualquer item recente da galeria, inclusive capturas de tela, e vem ativado por padrão. O WhatsApp testa dois formatos: um aviso acima da barra de texto ou uma miniatura no lugar do ícone da câmera.',
    'Segundo o Canaltech, dá para desligar em Configurações > Conversas > "Sugestões de mídias recentes". Não há confirmação de que o recurso já tenha chegado ao Brasil.'
  ] },

{ id: 'whatsapp-beta-expandir-fotos-ia', cat: 'atualizacoes', own: false, t: '2026-11-05T07', d: '5 nov 2026', img: 'celular', src: 'WABetaInfo', url: U.whatsappFotoIa,
  title: 'WhatsApp testa no Android a expansão de fotos com IA para o formato 9:16',
  sum: 'O teste está no beta 2.26.44.8, para alguns usuários. A Meta AI cria conteúdo novo nas bordas da imagem, em vez de esticá-la.',
  body: [
    'A opção fica no editor de fotos, e o usuário pode aceitar o resultado ou pedir outra versão. Parte dos testadores só a vê nas conversas, e outra parte, no status. Não há data para a versão estável nem confirmação para o Brasil.'
  ] },

{ id: 'google-maps-chegada-aeroportos-codigo', cat: 'atualizacoes', own: false, t: '2026-11-04T13', d: '4 nov 2026', img: 'celular', src: 'Canaltech', url: U.mapsAeroportos,
  title: 'Código do Google Maps indica recurso com IA para quem chega a uma cidade nova, ainda sem anúncio do Google',
  sum: 'O Android Authority achou o recurso no código do app. Ele usaria cercas virtuais em aeroportos e sugeriria perguntas prontas no Ask Maps.',
  body: [
    'O recurso não foi lançado, e o Google não deu data; ele pode mudar ou ser cancelado. As sugestões incluiriam como chegar ao centro, onde fazer a primeira refeição e o que há à noite. O código lista mais de 90 aeroportos, nenhum deles brasileiro, segundo o Canaltech.'
  ] },

{ id: 'ios-27-3-beta-app-saude-apple-watch', cat: 'atualizacoes', own: true, t: '2026-11-03T18', d: '3 nov 2026', img: 'celular', read: 3,
  title: 'Apple libera o teste do iOS 27.3, com novo app Saúde e recursos de IA no Apple Watch',
  sum: 'A primeira versão beta é para desenvolvedores. O app Saúde redesenhado volta aos testes, e a Apple indica o lançamento ainda neste ano.',
  body: [
    'A Apple liberou nesta terça (3) a primeira versão de teste do iOS 27.3, por enquanto só para desenvolvedores. O 9to5Mac espera uma versão de teste pública em poucos dias. A Apple indica lançar o novo app Saúde ainda neste ano, e o MacRumors aponta dezembro como a data esperada do iOS 27.3.',
    '## O novo app Saúde',
    'O app redesenhado já tinha aparecido em testes do iOS 27.2, mas saiu antes do lançamento. Ele exige iPhone compatível com a Apple Intelligence. A aba Insights reúne dados recentes de saúde e dá orientações por IA. A aba Longevity acompanha sete áreas, entre elas coração, sono e nutrição, e calcula uma idade de saúde. O MacRumors lista o português entre os idiomas, mas não diz se o app chega ao Brasil.',
    '## O que mais há no teste',
    'A Siri com IA passa a agir em apps como Calendário, Mensagens e Música e ganha novos idiomas. O Safari recebe abas verticais. Na China, quem está no teste passa a ter a Apple Intelligence, sem a Siri com IA. No Apple Watch Series 12 e no Ultra 4, a Audio Intelligence entra em teste, com resumos de conversas.'
  ],
  box: { type: 'facts', title: 'iOS 27.3', rows: [['Situação', 'Beta para desenvolvedores'], ['Beta público', 'Esperado em poucos dias, segundo o 9to5Mac'], ['Versão final', 'Dezembro é a data esperada, segundo o MacRumors'], ['App Saúde', 'Exige iPhone com Apple Intelligence']] },
  sources: [['9to5Mac', U.ios273Tudo], ['MacRumors', U.ios273Saude], ['9to5Mac', U.ios273China]] },

{ id: 'fitness-plus-gym-strength-beta', cat: 'atualizacoes', own: false, t: '2026-11-03T17', d: '3 nov 2026', img: 'celular', src: '9to5Mac', url: U.gymStrength,
  title: 'Apple Fitness+ testa o Gym Strength, com planos de musculação de quatro semanas que se ajustam ao treino',
  sum: 'O recurso está em beta e exige iOS 27.3 ou iPadOS 27.3. Faz parte da assinatura do Fitness+, sem custo adicional.',
  body: [
    'O Gym Strength monta planos conforme objetivo, experiência, agenda e equipamentos, com mais de 350 exercícios, e ajusta cada semana pelas repetições e cargas registradas. O Apple Watch é opcional. Nos EUA, o Fitness+ custa US$ 9,99 por mês ou US$ 79,99 por ano. A reportagem não lista os países nem cita o Brasil.'
  ] },

{ id: 'google-derruba-backdoor-tv-box', cat: 'atualizacoes', own: false, t: '2026-11-02T15', d: '2 nov 2026', img: 'tecnologia', src: '9to5Google', url: U.tvBoxBackdoor,
  title: 'Google bane fabricante Videostrong após achar porta dos fundos em boxes de Android TV e Google TV',
  sum: 'Segundo o Google, a ação vai cortar o acesso a pelo menos mais 10 milhões de aparelhos comprometidos.',
  body: [
    'A Videostrong incluiu uma porta dos fundos em boxes certificados, informa o site. O Google rompeu com a empresa e suas subsidiárias, agiu na Justiça contra domínios e servidores e revisa a certificação. Não foi publicada lista de modelos, e a fonte não menciona o Brasil.'
  ] },

{ id: 'android-sms-da-morte-falha', cat: 'atualizacoes', own: true, t: '2026-10-30T18', d: '30 out 2026', img: 'celular', read: 3,
  title: 'Falha no Android permite travar o celular e derrubar ligações com um SMS invisível, e a correção depende de cada fabricante',
  sum: 'O problema foi chamado de "SMS da Morte" e classificado como crítico. Cerca de 20 mensagens podem deixar o aparelho quase inutilizável. Segundo o pesquisador que achou a falha, a correção entrou nos pacotes de segurança de outubro para o Android 14 ao 17.',
  body: [
    'Uma falha no Android permite derrubar o serviço de ligações e travar o celular com um tipo especial de SMS. A mensagem não aparece na caixa de entrada, não gera notificação e não exige nenhum toque do dono do aparelho. Chamadas em andamento caem, inclusive as de emergência, segundo o Canaltech e o eSecurity Planet.',
    '## O que acontece com o celular',
    'Com cerca de 20 dessas mensagens, o aparelho pode ficar reiniciando sem parar. Segundo o Canaltech, o problema existe desde o Android 12 e foi reproduzido em celulares Pixel e Galaxy. Em alguns casos, é preciso ligar o celular a um computador para apagar o conteúdo; restaurar o aparelho de fábrica pode não resolver se a operadora reenviar as mensagens.',
    '## Correção',
    'O pesquisador Mark Blaszczyk avisou o Google em 5 de maio. O Canaltech relata que a empresa recusou o relato mais de uma vez, por não vê-lo como problema de segurança, mas uma correção foi criada em 15 de junho. Blaszczyk publicou a demonstração do ataque em 29 de outubro.',
    'Segundo Blaszczyk, a correção entrou nos pacotes de segurança de outubro para o Android 14 ao 17; o registro da falha deve aparecer no boletim de segurança de novembro. O prazo para cada aparelho depende do fabricante, e celulares que não recebem mais atualizações podem continuar expostos. A orientação é instalar a atualização de segurança mais recente disponível. As fontes não trazem dados sobre o Brasil.'
  ],
  box: { type: 'facts', title: '"SMS da Morte"', rows: [['Registro', 'CVE-2026-58882, classificada como crítica'], ['Existe desde', 'Android 12'], ['Testada em', 'Pixel e Galaxy'], ['Correção', 'Pacotes de outubro, Android 14 ao 17, segundo o pesquisador'], ['Chegada', 'Varia conforme o fabricante']] },
  sources: [['Canaltech', U.androidSmsDaMorteFalha], ['eSecurity Planet', U.androidSmsDaMorteFalha7]] },

{ id: 'meta-ai-alerta-pais-adolescentes-brasil', cat: 'atualizacoes', own: false, t: '2026-10-29T16', d: '29 out 2026', img: 'celular', src: 'Meta', url: U.metaAiAlertaPaisAdolescentesBrasil,
  title: 'Meta leva ao Brasil alerta aos pais sobre conversas de adolescentes com a Meta AI que indiquem risco de suicídio ou automutilação',
  sum: 'No Brasil, o aviso está sendo liberado no Instagram, para pais e responsáveis que usam a supervisão da conta do adolescente. Cada caso sinalizado passa por uma pessoa antes do envio.',
  body: [
    'A Meta informou em 29 de outubro que também começou a levar o recurso a todos os países no Facebook e no Messenger. Na primeira etapa, em julho, os avisos no Instagram funcionavam nos EUA, no Reino Unido, na Austrália e no Canadá.',
    'A empresa admite que o alerta pode chegar aos pais mesmo sem motivo real de preocupação, em especial quando a intenção do adolescente não está clara.'
  ] },

{ id: 'chrome-extensoes-sequestram-buscas', cat: 'atualizacoes', own: false, t: '2026-10-30T17', d: '30 out 2026', img: 'tecnologia', src: 'Canaltech', url: U.chromeExtensoesSequestramBuscas,
  title: 'Mais de 300 extensões do Chrome desviam as buscas dos usuários, com cerca de 13,4 milhões de instalações',
  sum: 'A empresa de segurança Socket encontrou extensões disfarçadas de conversores de PDF e assistentes de pesquisa. A maioria já saiu da loja do Chrome, mas surgem novas versões.',
  body: [
    'As buscas passam primeiro pelos servidores de quem controla a extensão e só depois seguem para o Bing ou o Yahoo, o que permite ganhar comissão por indicação. Esses operadores podem ver o histórico de pesquisas e também mandar o usuário a páginas falsas.',
    'Para conferir, vale abrir chrome://extensions e remover o que não foi instalado de propósito, além de checar em Configurações qual é o buscador padrão. As extensões circulam principalmente fora da loja, por janelas em sites menores.'
  ] },

/* ===================== IA ===================== */
{ id: 'chatgpt-images-2-6-gifs', cat: 'ia', own: true, t: '2026-11-05T08', d: '5 nov 2026', img: 'tecnologia', read: 2,
  title: 'OpenAI lança o ChatGPT Images 2.6, que transforma imagens em GIFs curtos',
  sum: 'A empresa diz que a geração ficou 50% mais rápida. O modelo chega a todos os planos, com disponibilidade global, segundo a OpenAI.',
  body: [
    'A OpenAI lançou o ChatGPT Images 2.6 no ChatGPT, no Codex e na API, para computador, celular e web, segundo o Digit. A empresa fala em disponibilidade global e em todos os planos. A reportagem não cita o Brasil de forma específica.',
    '## O que há de novo',
    'Imagens paradas podem virar GIFs curtos. O modelo também mantém personagens, produtos e marcas parecidos de uma edição para outra. Segundo o AI Weekly, os GIFs têm ajuste de velocidade e edição quadro a quadro, e o usuário pode salvar referências de pessoas, pets e personagens. A OpenAI afirma que a geração está 50% mais rápida que na versão anterior; o dado é da empresa.',
    '## Para desenvolvedores',
    'A API ganha dois modelos: o GPT-Image-2.6 Flare, voltado à velocidade, com imagens a partir de 6 segundos na qualidade baixa, e o Sunburst, voltado a detalhe e consistência. Há também exportação em SVG. O AI Weekly informa que os preços dos dois modelos não foram divulgados.'
  ],
  box: { type: 'facts', title: 'Images 2.6', rows: [['Onde', 'ChatGPT, Codex e API'], ['Planos', 'Todos, segundo a OpenAI'], ['Novidade', 'GIFs curtos a partir de imagens'], ['Velocidade', '50% maior, segundo a OpenAI'], ['Modelos na API', 'Flare e Sunburst']] },
  sources: [['Digit', U.images26Digit], ['AI Weekly', U.images26Weekly]] },

{ id: 'chatgpt-codex-limite-unico-dezembro', cat: 'ia', own: false, t: '2026-11-03T15', d: '3 nov 2026', img: 'tecnologia', src: 'Canaltech', url: U.limitesCodex,
  title: 'OpenAI vai unificar os limites do ChatGPT e do Codex a partir de dezembro',
  sum: 'A cota compartilhada vale para os planos Plus, Pro e Business e passa a ser medida em tokens. O dia exato não foi definido.',
  body: [
    'Uma sessão longa no Codex vai reduzir o que sobra no ChatGPT, e o contrário também vale. O chat Instant não consome a cota. Quando ela acabar, o usuário pode esperar a renovação, mudar de plano ou comprar créditos.',
    'A OpenAI não divulgou quantos tokens cada plano terá nem o efeito nos planos Free e Go.'
  ] },

{ id: 'gemini-limite-diario-criancas-codigo', cat: 'ia', own: false, t: '2026-11-03T13', d: '3 nov 2026', img: 'celular', src: 'Canaltech', url: U.geminiLimite,
  title: 'Código do Gemini indica limite diário de uso para crianças, ainda sem anúncio do Google',
  sum: 'Os pais definiriam o tempo em contas supervisionadas. Hoje, segundo a reportagem, o Family Link só permite liberar ou bloquear a IA.',
  body: [
    'O recurso está em desenvolvimento e foi achado pelo Android Authority no código do app. Ao atingir o limite, a criança veria um aviso e uma tela de bloqueio com o horário de retorno. O Google não anunciou data e pode mudar ou desistir da ideia. Não há confirmação para o Brasil.'
  ] },

{ id: 'netflix-ai-discover-teste', cat: 'ia', own: true, t: '2026-11-03T16', d: '3 nov 2026', img: 'plataforma', read: 2,
  title: 'Netflix começa a testar nos EUA a aba AI Discover, que sugere títulos conforme o humor do assinante',
  sum: 'O recurso aparece em TVs compatíveis, só em inglês por enquanto. A Netflix promete levá-lo a mais usuários nas próximas semanas.',
  body: [
    'A Netflix anunciou nesta terça (3) a aba AI Discover, que a empresa trata como um espaço de testes para novas formas de achar o que assistir. O primeiro recurso recomenda títulos a partir de temas escolhidos pelo usuário, com base em humor, preferências, tempo disponível e novidades.',
    '## Como funciona',
    'Os temas têm nomes como "algo leve", "me dê um susto" e "sessão de filme em família" e mostram trechos de séries e filmes. Dá para escolher temas mais específicos ou recomeçar. Cada título tem um botão para ajustar as recomendações, salvando a obra ou tirando-a das próximas sugestões.',
    '## Disponibilidade',
    'O teste começa nos EUA, em TVs compatíveis e para usuários em inglês. A Netflix diz que os comentários vão definir o que fica, o que melhora e o que vai para o app principal. Não há confirmação para o Brasil.'
  ],
  box: { type: 'facts', title: 'AI Discover', rows: [['Situação', 'Em teste'], ['Onde', 'TVs compatíveis, nos EUA'], ['Idioma', 'Inglês'], ['Expansão', 'Mais usuários nas próximas semanas'], ['Brasil', 'Sem confirmação']] },
  sources: [['TechCrunch', U.netflixDiscover]] },

{ id: 'chatgpt-20-por-cento-buscas-google', cat: 'ia', own: false, t: '2026-11-03T22', d: '3 nov 2026', img: 'tecnologia', src: 'Olhar Digital', url: U.chatgptBuscas,
  title: 'OpenAI diz que o ChatGPT já tem um volume de buscas igual a 20% do Google, sem revelar a origem do número',
  sum: 'A conta inclui só as perguntas que acionam uma busca na web. Perguntas simples ficam de fora.',
  body: [
    'O número foi apresentado por Adam Fry, chefe do produto do ChatGPT para consumidores, em evento da OpenAI na segunda (2). A empresa não informou de onde veio o dado, segundo o Olhar Digital. Na mesma ocasião, Fry disse que os anúncios no ChatGPT não causaram reação negativa duradoura entre os usuários.'
  ] },

{ id: 'apple-watch-audio-intelligence-beta', cat: 'ia', own: false, t: '2026-11-03T14', d: '3 nov 2026', img: 'celular', src: 'TechCrunch', url: U.audioIntelligence,
  title: 'Apple Watch entra em teste com IA que resume conversas e mostra em texto os últimos 15 segundos de fala',
  sum: 'A Audio Intelligence é opcional e exige Apple Watch Series 12 ou Ultra 4, com iPhone pareado. O teste começa pelos desenvolvedores.',
  body: [
    'O conjunto tem reconhecimento de sons, como sirenes e campainhas, reconhecimento de músicas, o Live Rewind, para rever a fala recente em texto, e o Siri Recaps, que resume conversas. Um teste público está previsto antes do lançamento geral, segundo o TechCrunch. A reportagem não lista idiomas nem cita o Brasil.'
  ] },

{ id: 'chatgpt-junta-abas-chat-work', cat: 'ia', own: true, t: '2026-11-02T14', d: '2 nov 2026', img: 'tecnologia', read: 2,
  title: 'OpenAI vai juntar as abas Chat e Work do ChatGPT, primeiro em teste com um grupo de usuários',
  sum: 'Uma só tela dará acesso à conversa e ao agente. ChatGPT e Codex passam a dividir a mesma cota de uso, e o lançamento amplo não tem data.',
  body: [
    'A OpenAI avisou por e-mail que vai unir as abas Chat e Work do ChatGPT. O usuário poderá começar por uma conversa e pedir que o sistema execute a tarefa no mesmo lugar, trazendo arquivos e plugins e pedindo, por exemplo, um site ou uma apresentação.',
    '## Ainda é teste',
    'A mudança começa com um grupo selecionado, que dará retorno antes da liberação geral. O TechCrunch não informa data para o lançamento amplo. As fontes não tratam da disponibilidade no Brasil.',
    '## Cota compartilhada',
    'O Codex continua como experiência separada no app para computador, mas passa a usar a mesma cota do ChatGPT. A OpenAI diz que a maioria dos usuários não será afetada. Conforme o uso e o modelo, alguns podem ter de esperar mais vezes pela renovação do limite.',
    '## Concorrência',
    'Em setembro, a Anthropic reuniu os recursos de chat e Cowork do Claude em uma única tela, lembra a reportagem.'
  ],
  box: { type: 'facts', title: 'O que muda no ChatGPT', rows: [['Abas', 'Chat e Work viram uma só'], ['Quem recebe primeiro', 'Grupo selecionado'], ['Lançamento amplo', 'Sem data'], ['Codex', 'Separado, com cota compartilhada']] },
  sources: [['TechCrunch', U.chatgptAbas], ['Canaltech', U.chatgptAbasCanaltech]] },

{ id: 'anthropic-balanco-prospecto-ipo', cat: 'ia', own: false, t: '2026-11-02T17', d: '2 nov 2026', img: 'mercado', src: 'Olhar Digital', url: U.anthropicBalanco,
  title: 'Anthropic, dona do Claude, divulga receita de US$ 17 bilhões e prejuízo de US$ 23 bilhões no terceiro trimestre',
  sum: 'Os números atualizam o prospecto da possível abertura de capital, que pode ocorrer neste mês.',
  body: [
    'Em nove meses, a receita foi de US$ 33 bilhões, e o prejuízo, de US$ 104 bilhões, dos quais US$ 94 bilhões são um lançamento contábil ligado a notas conversíveis. Valor de até US$ 2 trilhões e oferta de US$ 100 bilhões são estimativas, sem confirmação da empresa.'
  ] },

{ id: 'anthropic-alerta-rsi-prospecto', cat: 'ia', own: false, t: '2026-11-02T16', d: '2 nov 2026', img: 'ciencia', src: 'TechCrunch', url: U.anthropicRsi,
  title: 'Em documento à SEC, Anthropic diz que IA que acelera a própria evolução pode chegar em breve',
  sum: 'O alerta está nos fatores de risco do prospecto. A empresa diz que nenhum modelo atual passou desse limite.',
  body: [
    'Segundo estimativas internas citadas no documento, o limiar de progresso muito acelerado da política de segurança da empresa pode ser atingido logo. A Anthropic diz não prever desenvolvimento totalmente autônomo, sem supervisão humana. A reportagem lembra que esse tipo de documento também serve de marketing.'
  ] },

{ id: 'copilot-fim-tvs-lg-samsung', cat: 'ia', own: false, t: '2026-10-31T23', d: '31 out 2026', img: 'tecnologia', src: 'Advanced Television', url: U.copilotFimTvsLgSamsung,
  title: 'Microsoft tira o Copilot das TVs LG e Samsung em 1º de dezembro',
  sum: 'O assistente de IA deixa de funcionar nas TVs nessa data, segundo aviso de suporte da Microsoft. Ele continua na web, nos computadores e nos celulares.',
  body: [
    'A data consta de um aviso de suporte da Microsoft, segundo o site. O Copilot segue disponível na web, em computadores e em celulares. As fontes não trazem regra específica para o Brasil.'
  ] },

/* ===================== STARTUPS ===================== */
{ id: 'uber-3tri-2026', cat: 'startups', own: true, t: '2026-11-04T09', d: '4 nov 2026', img: 'mercado', read: 3,
  title: 'Uber tem US$ 59,8 bilhões em reservas no trimestre, alta de 20%, e prevê cerca de 700 carros sem motorista até o fim do ano',
  sum: 'A receita subiu 10%, para US$ 14,8 bilhões. O lucro líquido caiu 92%, para US$ 512 milhões, porque a base de 2025 incluía ganhos não recorrentes.',
  body: [
    'A Uber divulgou nesta quarta-feira (4) o resultado do terceiro trimestre. As reservas brutas somaram US$ 59,8 bilhões, alta de 20%. A receita foi de US$ 14,8 bilhões, alta de 10%; segundo a empresa, mudanças no modelo de negócios tiraram cerca de 8 pontos desse crescimento.',
    '## Usuários e viagens',
    'O app teve 215 milhões de consumidores ativos por mês, alta de 14%, e 4,1 bilhões de viagens, alta de 16%. Em mobilidade, as reservas foram de US$ 29,5 bilhões, alta de 18%. Em entregas, de US$ 28,5 bilhões, alta de 22%, segundo o Securities.io.',
    '## Por que o lucro caiu',
    'O lucro líquido de US$ 512 milhões compara com US$ 6,6 bilhões um ano antes. A base de 2025 tinha um ganho fiscal de US$ 4,9 bilhões e um ganho de US$ 1,5 bilhão com participações em outras empresas. Em 2026, houve perda de US$ 476 milhões nessa linha. O lucro operacional subiu 30%, para US$ 1,4 bilhão.',
    '## Próximos passos',
    'Para o quarto trimestre, a empresa projeta reservas de US$ 63,25 bilhões a US$ 65,25 bilhões. A Uber também prevê cerca de 700 veículos sem motorista até o fim do ano e mais de 2.000 em 2027. O comunicado consultado não traz dados específicos do Brasil.'
  ],
  box: { type: 'facts', title: 'Uber no 3º trimestre', rows: [['Reservas brutas', 'US$ 59,8 bilhões (+20%)'], ['Receita', 'US$ 14,8 bilhões (+10%)'], ['Lucro líquido', 'US$ 512 milhões (-92%)'], ['Usuários mensais', '215 milhões (+14%)'], ['Viagens', '4,1 bilhões (+16%)']] },
  sources: [['Uber (comunicado)', U.uberOficial], ['Securities.io', U.uberSecurities]] },

{ id: 'mercado-livre-3tri-2026', cat: 'startups', own: true, t: '2026-11-04T10', d: '4 nov 2026', img: 'mercado', read: 3,
  title: 'Mercado Livre fatura US$ 10,75 bilhões no trimestre, alta de 45%, mas margem cai de 9,8% para 6,3%',
  sum: 'No Brasil, a receita foi de US$ 6 bilhões, alta de 50% em dólar. O lucro subiu 6,4%, para US$ 448 milhões, e as ações caíram cerca de 7% em Nova York.',
  body: [
    'O Mercado Livre teve receita de US$ 10,75 bilhões no terceiro trimestre, alta de 45%, segundo a Exame. O lucro subiu 6,4%, para US$ 448 milhões. A margem operacional recuou de 9,8% para 6,3%, e as ações caíram cerca de 7% em Nova York depois do balanço.',
    '## Brasil',
    'O país gerou US$ 6 bilhões de receita, alta de 50% em dólar, e o volume de vendas subiu 36%. Segundo o Mobile Time, os itens vendidos no Brasil subiram 45%, e os usuários ativos do Mercado Pago no país cresceram mais de 35%.',
    '## Mercado Pago e crédito',
    'O Mercado Pago chegou a 93 milhões de usuários ativos por mês. A carteira de crédito subiu 62%, para US$ 17,9 bilhões. A inadimplência acima de 90 dias foi de 17,6% para 19,3%, segundo a Exame. O Mobile Time informa ainda que o assistente Mago teve 19 milhões de conversas em setembro.'
  ],
  box: { type: 'facts', title: 'Mercado Livre no 3º trimestre', rows: [['Receita', 'US$ 10,75 bilhões (+45%)'], ['Lucro', 'US$ 448 milhões (+6,4%)'], ['Margem operacional', '6,3% (era 9,8%)'], ['Receita no Brasil', 'US$ 6 bilhões (+50% em dólar)'], ['Usuários do Mercado Pago', '93 milhões por mês']] },
  sources: [['Exame', U.mlExame], ['Mobile Time', U.mlMobileTime]] },

{ id: 'snapchat-30-milhoes-assinantes', cat: 'startups', own: false, t: '2026-11-04T19', d: '4 nov 2026', img: 'celular', src: 'TechCrunch', url: U.snapTc,
  title: 'Snapchat passa de 30 milhões de assinantes pagos, mas ação cai 12% com usuários abaixo do esperado',
  sum: 'A receita subiu 14%, para US$ 1,7225 bilhão. O app teve 495 milhões de usuários diários, contra 499 milhões esperados.',
  body: [
    'Os assinantes somam Snapchat+, Memories Storage e Lens+, e eram 25 milhões em fevereiro. O lucro líquido foi de US$ 56,5 milhões, contra prejuízo de US$ 103,5 milhões um ano antes. A receita de anúncios ficou abaixo das estimativas.'
  ] },

{ id: 'eloelo-story-tv-80-milhoes', cat: 'startups', own: false, t: '2026-11-04T08', d: '4 nov 2026', img: 'mercado', src: 'Yahoo Finance (comunicado)', url: U.eloelo,
  title: 'Indiana EloElo, dona do app de microdramas Story TV, capta US$ 80 milhões com a NBCUniversal entre os líderes',
  sum: 'A rodada é liderada pela Hornbill Capital e pela NBCUniversal. O dinheiro vai para conteúdo em idiomas locais e para a expansão internacional, incluindo os EUA.',
  body: [
    'A empresa, de Bengaluru, diz somar mais de 40 milhões de usuários ativos mensais em seus apps. O Story TV tem mais de 5.000 dramas em seis idiomas. Os números são da própria empresa, e o valor de mercado não foi divulgado.'
  ] },

{ id: 'canva-reestruturacao-1200-funcionarios', cat: 'startups', own: false, t: '2026-11-04T14', d: '4 nov 2026', img: 'plataforma', src: 'Fast Company', url: U.canvaCortes,
  title: 'Canva faz reestruturação que atinge cerca de 1.200 pessoas, 22% da equipe',
  sum: 'A indenização é de seis meses de salário em qualquer país. Parte dos funcionários pode ser realocada.',
  body: [
    'A presidente-executiva, Melanie Perkins, chamou o momento de o mais difícil dos 13 anos da empresa. O pacote inclui manutenção do plano de saúde e US$ 10 mil para quem abrir uma empresa ou um projeto. O número não é só de demissões, porque inclui realocações.'
  ] },

{ id: 'duolingo-3tri-2026', cat: 'startups', own: true, t: '2026-11-03T19', d: '3 nov 2026', img: 'mercado', read: 2,
  title: 'Duolingo chega a 64,9 milhões de usuários diários, alta de 29%, e deixa de vender o plano Max',
  sum: 'A receita do terceiro trimestre subiu 14%, para US$ 309 milhões. A empresa elevou a previsão de 2026.',
  body: [
    'O Duolingo divulgou nesta terça (3) o resultado do terceiro trimestre de 2026. Os usuários ativos diários cresceram 29% em um ano, ritmo maior que os 23% do segundo trimestre, e os assinantes pagantes subiram 14%, para 13,1 milhões. O lucro líquido foi de US$ 27,2 milhões, ante US$ 292,2 milhões um ano antes, quando houve um benefício fiscal único de US$ 222,7 milhões.',
    '## Fim do Max',
    'A empresa deixa de vender novas assinaturas do plano Max em novembro. Os assinantes individuais passam para um plano Super familiar, com o mesmo preço e os mesmos recursos. Os planos Max familiares serão tratados em 2027.',
    '## A previsão',
    'Para 2026, o Duolingo agora prevê US$ 1,221 bilhão de receita, acima dos US$ 1,207 bilhão de agosto. A ação fechou a US$ 128 e era negociada a US$ 141 depois do fechamento do mercado, cerca de 10% acima.'
  ],
  box: { type: 'table', title: 'Terceiro trimestre de 2026', head: ['Item', 'Valor', 'Em um ano'], rows: [['Usuários diários', '64,9 mi', '+29%'], ['Usuários mensais', '153,1 mi', '+13%'], ['Assinantes pagantes', '13,1 mi', '+14%'], ['Receita', 'US$ 309 mi', '+14%']] },
  sources: [['Stock Titan', U.duolingoTitan], ['Duolingo (documento à SEC)', U.duolingoSec]] },

{ id: 'fal-16-bilhoes', cat: 'startups', own: false, t: '2026-11-03T15', d: '3 nov 2026', img: 'tecnologia', src: 'TechCrunch', url: U.falValuation,
  title: 'Fal, que roda modelos de IA para vídeo e imagem, capta US$ 1,3 bilhão e dobra de valor, para US$ 16 bilhões',
  sum: 'A rodada foi liderada pela Bessemer, com participação da Nvidia. Em abril, a empresa valia US$ 8 bilhões, segundo a Bloomberg.',
  body: [
    'Fundada em 2021 em San Francisco, a Fal hospeda e executa modelos de IA que geram vídeo, imagem e áudio. A série F foi anunciada junto com a série E, liderada pela Sequoia, e as duas somam US$ 1,65 bilhão, segundo o TechCrunch.'
  ] },

{ id: 'snap-acordo-adolescentes', cat: 'startups', own: false, t: '2026-11-02T15', d: '2 nov 2026', img: 'plataforma', src: 'TechCrunch', url: U.snapAcordo,
  title: 'Snap faz acordo em processo sobre saúde mental de adolescentes e evita seu primeiro julgamento nessa onda de ações',
  sum: 'Os termos e o valor não foram divulgados. Os autores já tinham feito acordo com Meta, TikTok e YouTube.',
  body: [
    'Dois adolescentes acusavam a plataforma de ser viciante e de contribuir para problemas de saúde mental. O acordo encerra este caso específico.'
  ] },

{ id: 'ollie-assistente-ia-encerra', cat: 'startups', own: false, t: '2026-10-30T14', d: '30 out 2026', img: 'tecnologia', src: 'TechCrunch', url: U.tcOllie,
  title: 'Ollie, assistente de IA focado em privacidade, vai fechar em 6 de novembro',
  sum: 'A startup tinha captado US$ 7,5 milhões em rodada liderada pela Khosla Ventures.',
  body: [
    'O presidente-executivo, Bill Lennon, disse que a empresa não conseguiu acompanhar o mercado. Com a chegada de concorrentes, ficou mais difícil se destacar e captar dinheiro, segundo o TechCrunch.'
  ] },

{ id: 'doordash-compra-instacart', cat: 'startups', own: false, t: '2026-10-29T10', d: '29 out 2026', img: 'mercado', src: 'TechCrunch', url: U.tcDoorDash,
  title: 'DoorDash compra o Instacart por US$ 17 bilhões e vai juntar entrega de refeições e de supermercado',
  sum: 'O preço é de US$ 65 por ação, com pelo menos 75% em dinheiro. A marca e o app do Instacart continuam, e a conclusão deve ficar para o fim de 2027 ou 2028.',
  body: [
    'Os acionistas do Instacart vão receber US$ 65 por ação. Por enquanto, as empresas seguem separadas. A conclusão depende dos órgãos reguladores e dos acionistas do Instacart.'
  ] },

/* ===================== IDEIAS PARA O BRASIL ===================== */
{ id: 'matiks-jogos-matematica-india', cat: 'ideias', own: false, t: '2026-10-26T10', d: '26 out 2026', img: 'celular', src: 'TechCrunch', url: U.matiks,
  title: 'Na Índia, o Matiks transforma matemática em disputa entre jogadores e capta US$ 10 milhões',
  sum: 'O app chegou a 2,2 milhões de usuários mensais em setembro. Os usuários diários passaram de cerca de 22 mil no início do ano para mais de 300 mil.',
  body: [
    'O jogador treina contra robôs e depois enfrenta outras pessoas em jogos de matemática, lógica e memória. A receita vem de compras no app, e uma assinatura com análise de jogo está em teste. A rodada foi liderada pela General Catalyst.'
  ] },

{ id: 'ghanem-fracao-imoveis-arabia-saudita', cat: 'ideias', own: false, t: '2026-10-24T10', d: '24 out 2026', img: 'mercado', src: 'Wamda', url: U.ghanem,
  title: 'Na Arábia Saudita, o Ghanem vende frações de imóveis que rendem aluguel e amplia sua rodada em US$ 1,5 milhão',
  sum: 'A entrada parte de SAR 1.000, conforme a oferta, e a fração fica registrada no nome do investidor. A rodada inicial chega a US$ 8,6 milhões.',
  body: [
    'O app opera em ambiente de testes da autoridade imobiliária saudita. Segundo a Wamda, a primeira oferta emitiu escrituras digitais para 580 pessoas, e o app já paga aluguel aos investidores. A venda das frações entre usuários ainda depende de aval, segundo a Enterprise.'
  ] },

{ id: 'viatik-carona-uruguai-argentina', cat: 'ideias', own: false, t: '2026-10-28T10', d: '28 out 2026', img: 'celular', src: 'Forbes Argentina', url: U.viatik,
  title: 'No Uruguai e na Argentina, o Viatik organiza caronas entre cidades, passa de 400 mil usuários e capta US$ 600 mil',
  sum: 'O passageiro paga cerca de metade da passagem de ônibus. Quase 90% das transações vêm da Argentina.',
  body: [
    'O app liga motoristas com lugar vago a passageiros na mesma rota, dividindo combustível e pedágio. Ele organiza caronas antes combinadas em grupos de redes sociais e de mensagens. Foram mais de 40 mil assentos vendidos em 2026, e a empresa prevê mais de 60 mil no ano.'
  ] },

{ id: 'salary-hero-salario-antecipado-tailandia', cat: 'ideias', own: false, t: '2026-10-16T09', d: '16 out 2026', img: 'mercado', src: 'FF News', url: U.salaryHero,
  title: 'Na Tailândia, a Salary Hero deixa o trabalhador sacar o salário já ganho antes do fim do mês e capta US$ 7,6 milhões',
  sum: 'A plataforma atende mais de 300 mil funcionários em mais de 100 empresas tailandesas e começou a operar na Malásia em 2026.',
  body: [
    'A Salary Hero se integra aos sistemas de folha de pagamento dos empregadores e oferece também ferramentas de orçamento e aulas de educação financeira. A rodada foi liderada pela Cento Ventures, e a empresa ampliou uma linha de crédito de US$ 10 milhões. A empresa estima ter evitado US$ 150 milhões em empréstimos informais caros na Tailândia. O dado é dela, e a reportagem não informa quem paga as taxas.'
  ] },

{ id: 'aqar-exit-contratos-imoveis-egito', cat: 'ideias', own: true, t: '2026-10-19T10', d: '19 out 2026', img: 'mercado', read: 3,
  title: 'No Egito, a Aqar Exit ajuda quem não consegue pagar imóvel na planta a repassar o contrato',
  sum: 'A plataforma, criada em julho, recebeu cerca de EGP 10 milhões (cerca de US$ 200 mil) por 10% da empresa e reúne mais de 11 mil vendedores.',
  body: [
    'A Aqar Exit atende quem comprou imóvel na planta e não consegue mais pagar as parcelas. A pessoa transfere o contrato e recupera o que já pagou, e o novo comprador entra pelo preço original, sem o ágio comum no mercado local. Segundo a empresa, o vendedor não paga taxa de cessão.',
    '## Os números',
    'A startup do Egito recebeu cerca de EGP 10 milhões de Ayman Abbas, por 10% do negócio, o que a avalia em cerca de EGP 100 milhões. A plataforma informa 11.833 vendedores e 32.870 compradores. A Wamda alerta que os 638 "fechamentos" divulgados incluem qualquer saída da plataforma e não significam necessariamente venda concluída. A empresa quer captar cerca de US$ 5 milhões em 2027.',
    '## Por que olhar para o Brasil',
    'Análise da redação: a compra de imóvel na planta também é parcelada e longa no Brasil, e desistir costuma envolver regras contratuais e negociação com a construtora. Um intermediário digital de cessão poderia ser testado, mas dependeria da concordância das incorporadoras e de checagem jurídica de cada contrato.'
  ],
  box: { type: 'facts', title: 'Aqar Exit', rows: [['País', 'Egito'], ['Fundação', 'Julho de 2026'], ['Aporte', 'Cerca de EGP 10 milhões por 10%'], ['Vendedores', '11.833'], ['Compradores', '32.870']] },
  sources: [['Wamda', U.aqarWamda], ['StartupScene', U.aqarScene]] },

{ id: 'strollme-assinatura-produtos-infantis', cat: 'ideias', own: true, t: '2026-10-29T12', d: '29 out 2026', img: 'mercado', read: 3,
  title: 'Na Alemanha, a StrollMe aluga carrinhos, bicicletas e cadeirinhas por assinatura e levanta € 22 milhões',
  sum: 'A empresa soma mais de 100 mil aluguéis desde 2020 e diz que a receita cresceu cerca de 70% em 2025.',
  body: [
    'A StrollMe oferece por assinatura produtos que as crianças usam por pouco tempo, como carrinhos, bicicletas e cadeirinhas para carro, de marcas como Woom, Bugaboo e Thule. Atua na Alemanha, na Áustria e nos Países Baixos.',
    '## Como funciona',
    'A empresa compra os produtos e recupera o investimento ao longo de vários aluguéis. Os itens devolvidos são recondicionados e alugados de novo, e a marca-irmã Kiddly vende os que saem de circulação. A rodada de € 22 milhões mistura capital de investidores e crédito, sem divisão divulgada. A Startbase ressalva que alugar nem sempre sai mais barato que comprar, e que o modelo exige muito capital.',
    '## Por que olhar para o Brasil',
    'Análise da redação: famílias brasileiras também trocam esses produtos conforme a criança cresce, e muitas recorrem a itens usados. Um serviço assim dependeria de frete, higienização e reposição com custo viável, além de regras de segurança para cadeirinhas usadas.'
  ],
  box: { type: 'facts', title: 'StrollMe', rows: [['Países', 'Alemanha, Áustria e Países Baixos'], ['Rodada', '€ 22 milhões, entre capital e crédito'], ['Aluguéis', 'Mais de 100 mil desde 2020'], ['Receita em 2025', 'Alta de cerca de 70%, segundo a empresa']] },
  sources: [['Startbase', U.strollme]] },

{ id: 'turuq-logistica-lojistas-egito', cat: 'ideias', own: false, t: '2026-10-27T09', d: '27 out 2026', img: 'mercado', src: 'Enterprise', url: U.turuq,
  title: 'No Egito, a Turuq cuida de estoque, embalagem e entrega de lojas online e recebe seu primeiro investimento externo',
  sum: 'A empresa processa de 50 mil a 100 mil pedidos por mês e já dá lucro, com margem líquida de 10% a 15%.',
  body: [
    'Mais de 300 lojistas já usaram o serviço, e de 90 a 100 estão ativos. O investimento veio da Den VC, em valor não revelado. A Turuq planeja licenciar seu software de armazém na Arábia Saudita.'
  ] },

{ id: 'dubdub-feed-de-perguntas-india', cat: 'ideias', own: false, t: '2026-10-27T09', d: '27 out 2026', img: 'celular', src: 'StartupTalky', url: U.dubdubFeedDePerguntasIndia,
  title: 'Na Índia, o dubdub troca o feed de vídeos por perguntas e minijogos e capta US$ 1,3 milhão',
  sum: 'Lançado em março, o app tem cerca de 20 mil downloads e mais de 20 categorias, como críquete e Bollywood.',
  body: [
    'A cada deslizada, o usuário responde, adivinha ou resolve algo em vez de só assistir. A rodada seed foi liderada por 3one4 Capital, Antler e Stellaris. O app surgiu depois de a Índia proibir jogos online a dinheiro, em outubro de 2025. A empresa não divulgou como ganha dinheiro nem a taxa de retenção, segundo o StartupTalky.'
  ] },

{ id: 'talent-nation-engenheiros-ia-nigeria', cat: 'ideias', own: false, t: '2026-10-30T10', d: '30 out 2026', img: 'mundo', src: 'Disrupt Africa', url: U.daTalent,
  title: 'Na Nigéria, a Talent Nation forma engenheiros de IA sem cobrar do aluno e recebe das empresas que os contratam',
  sum: 'A plataforma recebeu mais de 63 mil candidaturas em 18 meses e aceita menos de 3% delas. O valor da rodada não foi divulgado.',
  body: [
    'As empresas clientes pagam pelos engenheiros, e esse dinheiro financia a formação das novas turmas. São cerca de 1.400 alunos em 9 unidades, em 6 cidades. A rodada pré-seed foi liderada pela Enza Capital e pela LocalGlobe, segundo o Disrupt Africa.'
  ] },

{ id: 'medikea-teleconsulta-clinicas-proprias', cat: 'ideias', own: true, t: '2026-10-29T08', d: '29 out 2026', img: 'ciencia', read: 3,
  title: 'Na Tanzânia, a Medikea junta app de teleconsulta com clínicas, laboratórios e farmácias próprios e capta US$ 1,2 milhão',
  sum: 'Em vez de só ligar pacientes a médicos, a startup é dona dos lugares de atendimento e contrata a equipe. Quer passar de 4 para 10 clínicas até o fim de 2027.',
  body: [
    'A Medikea, startup de saúde da Tanzânia, captou US$ 1,2 milhão numa rodada pré-seed liderada por Baobab Network, Catalyst Fund e develoPPP Ventures, segundo o TechMoran. Também entraram Madica, Impacc, Hustle Fund, O\'Shaughnessy Ventures, Madiro e um investidor-anjo. O cofundador e presidente-executivo é o médico Elvis Silayo.',
    '## Como funciona',
    'O app oferece consultas virtuais 24 horas por dia. Ao mesmo tempo, a empresa tem clínicas, laboratórios de exames e farmácias próprios, com médicos assalariados, e desenvolve a própria tecnologia. O foco são consultas e tratamentos sem internação: clínica geral, pediatria, saúde da mulher, dermatologia, fertilidade e doenças crônicas. Casos de internação e cirurgia vão para hospitais parceiros.',
    'A Medikea atende quem paga do próprio bolso e quem tem plano, com convênios como o fundo nacional de seguro-saúde do país (NHIF), e seguradoras privadas. A empresa diz que cobra menos que serviços privados parecidos, mas não divulgou preços.',
    '## Os planos',
    'Com as novas unidades em Arusha e Morogoro, a rede chega a 4 clínicas. A meta é ter 10 clínicas na Tanzânia até o fim de 2027 e atender mais de 100 mil pacientes nos próximos 12 meses. Depois, a empresa quer ir para outros países da África.',
    '## Por que olhar para o Brasil',
    'Análise da redação: no Brasil, a telemedicina e as clínicas populares costumam ser negócios separados. Juntar o atendimento pelo app com unidades próprias, para quem paga do próprio bolso e para quem tem plano, é um modelo que redes regionais de saúde podem estudar. O desafio é o custo de abrir e manter unidades físicas, que cresce mais devagar que um app.'
  ],
  box: { type: 'facts', title: 'Medikea', rows: [['País', 'Tanzânia'], ['Captação', 'US$ 1,2 milhão (pré-seed)'], ['Modelo', 'App + clínicas, laboratórios e farmácias próprios'], ['Clínicas', '4, com meta de 10 até o fim de 2027'], ['Meta de pacientes', 'Mais de 100 mil em 12 meses']] },
  sources: [['TechMoran', U.tmMedikea], ['The Condia', U.cdMedikea]] },

/* ===================== NO BRASIL ===================== */
{ id: 'anatel-bloqueio-sms-sem-cadastro', cat: 'brasil', own: true, t: '2026-11-04T12', d: '4 nov 2026', img: 'celular', read: 3,
  title: 'Anatel manda operadoras bloquearem SMS de empresas sem cadastro para conter golpes',
  sum: 'As operadoras têm 90 dias para criar um diretório público e bloquear remetentes fora dele. Apps que usam SMS para confirmar acesso têm o mesmo prazo para adotar medidas antifraude.',
  body: [
    'O Conselho Diretor da Anatel aprovou por unanimidade, na terça-feira (3), novas regras para mensagens enviadas por empresas. A decisão saiu no Diário Oficial nesta quarta (4), segundo a Gazeta do Povo. O relator foi o conselheiro Octavio Penna Pieranti.',
    '## O que muda',
    'O SMS enviado por empresas fica restrito a pessoas jurídicas listadas em um diretório público de códigos curtos. Cada código identifica uma empresa, e o compartilhamento precisa de justificativa técnica. Segundo a Gazeta do Povo, a operadora não pode alegar que apenas transporta os dados.',
    '## Os prazos',
    'As operadoras têm 60 dias para implantar monitoramento e política de segurança, e 90 dias para o diretório e o bloqueio de remetentes não cadastrados. A área técnica presta contas ao conselho em 180 dias.',
    '## Efeito nos apps',
    'Apps e plataformas que usam SMS para autenticar usuários têm 90 dias para adotar mecanismos de identidade e antifraude. A medida atinge os códigos de login e de confirmação enviados por mensagem.'
  ],
  box: { type: 'facts', title: 'Prazos da Anatel', rows: [['60 dias', 'Monitoramento e política de segurança'], ['90 dias', 'Diretório público e bloqueio de quem não tem cadastro'], ['90 dias', 'Medidas antifraude nos apps que usam SMS'], ['180 dias', 'Relatório ao Conselho Diretor']] },
  sources: [['Gazeta do Povo', U.anatelSmsGazeta], ['Mobile Time', U.anatelSmsMobile], ['Convergência Digital', U.anatelSmsConvergencia]] },

{ id: 'govbr-certificado-digital-falhas', cat: 'brasil', own: false, t: '2026-11-04T09', d: '4 nov 2026', img: 'celular', src: 'Contábeis', url: U.govbrCertificado,
  title: 'Login do gov.br com certificado digital falha e afeta e-CAC e FGTS Digital',
  sum: 'Na terça (3), usuários relataram erro dizendo que o certificado não foi encontrado. Não houve causa oficial até a publicação.',
  body: [
    'As falhas atingiram também o Domicílio Eletrônico Trabalhista e a Redesim. O Ministério da Gestão disse que o app gov.br funcionava normalmente e encaminhou as dúvidas ao Serpro, que não respondeu até a publicação. O login com CPF e senha funcionou para alguns usuários.'
  ] },

{ id: 'bb-app-instabilidade-downdetector', cat: 'brasil', own: false, t: '2026-11-03T11', d: '3 nov 2026', img: 'celular', src: 'Exame', url: U.bbInstabilidade,
  title: 'App do Banco do Brasil fica instável nesta terça, com pico de mais de 6,2 mil relatos de falhas no Downdetector',
  sum: 'O banco reconheceu intermitência nos canais digitais e disse que as transações com cartão não foram afetadas.',
  body: [
    'O pico de relatos foi por volta das 9h34, e 83% das queixas citavam o app para celular, segundo a Exame. Usuários relataram dificuldade para entrar, inclusive com biometria e senha. Até a publicação da reportagem, às 11h31, o banco não havia dado prazo para normalizar o serviço.'
  ] },

{ id: 'vivo-pre-pago-google-one-lite', cat: 'brasil', own: false, t: '2026-11-03T18', d: '3 nov 2026', img: 'celular', src: 'Mobile Time', url: U.vivoGoogle,
  title: 'Vivo inclui 30 GB do Google One Lite no pré-pago para quem recarrega a partir de R$ 35 por mês',
  sum: 'A ativação é pelo app da Vivo. O espaço vale para Fotos, Drive e Gmail, sem os recursos de IA do Google.',
  body: [
    'Comprado direto do Google, o plano custa R$ 4,50 por mês ou R$ 45 por ano. Gemini, NotebookLM e Flow ficam de fora da oferta, porque fazem parte dos planos mais caros do Google, segundo o Mobile Time.'
  ] },

{ id: 'enem-2026-documentos-digitais-celular', cat: 'brasil', own: true, t: '2026-11-01T10', d: '1 nov 2026', img: 'celular', read: 2,
  title: 'Enem 2026: documento digital só vale aberto no app oficial, e print ou foto não são aceitos',
  sum: 'As provas são nos domingos 8 e 15 de novembro, para mais de 5 milhões de inscritos. Celular fora do envelope elimina o candidato.',
  body: [
    'O Enem 2026 acontece nos dias 8 e 15 de novembro, com mais de 5 milhões de inscritos, segundo a Agência Brasil. Quem for usar documento digital precisa mostrá-lo dentro do aplicativo oficial ou do app Gov.br.',
    '## Quais documentos digitais valem',
    'São aceitos e-Título, CNH Digital, RG Digital e Identidade Digital (CIN). Print e foto do documento não valem.',
    '## Regra do celular',
    'Celular, relógio e fones precisam estar desligados, com alarmes desativados, dentro do envelope porta-objetos lacrado e embaixo da carteira. Manter esses aparelhos fora do envelope leva à eliminação.',
    '## Horários',
    'Os portões abrem ao meio-dia e fecham às 13h, e a prova começa às 13h30, sempre no horário de Brasília. O fim é às 19h no dia 8 e às 18h30 no dia 15. O gabarito sai no portal do Inep até o 10º dia útil depois da segunda prova.'
  ],
  box: { type: 'facts', title: 'Enem 2026', rows: [['Provas', '8 e 15 de novembro'], ['Portões', 'Das 12h às 13h'], ['Início', '13h30'], ['Digitais aceitos', 'e-Título, CNH Digital, RG Digital e CIN'], ['Não vale', 'Print ou foto do documento']] },
  sources: [['Agência Brasil', U.enem]] },

{ id: 'itau-pay-checkout-app', cat: 'brasil', own: false, t: '2026-10-30T12', d: '30 out 2026', img: 'mercado', src: 'Mobile Time', url: U.itauPay,
  title: 'Itaú lança o Itaú Pay, pagamento em lojas online feito pelo app do banco, e começa pela Decolar',
  sum: 'O cliente paga em conta ou no crédito, inclusive parcelado. Raia Drogasil, Localiza e Zig devem entrar nos próximos meses.',
  body: [
    'O serviço usa a Rede, adquirente do banco. Segundo estimativas do Itaú, o pagamento fica até cinco vezes mais rápido. A matéria não traz prazos nem valores.'
  ] },

{ id: 'anatel-biometria-facial-ativar-linha', cat: 'brasil', own: false, t: '2026-10-29T11', d: '29 out 2026', img: 'celular', src: 'Mobile Time', url: U.anatelBiometria,
  title: 'Anatel exige biometria facial com prova de vida antes da ativação de linhas de celular',
  sum: 'A norma vale para pessoas físicas e MEIs, em canais físicos e digitais. A reportagem não informa prazo de implantação.',
  body: [
    'A Norma Técnica GT-SEG.2026.11 foi anunciada em 28 de outubro. As operadoras devem guardar os dados por cinco anos depois do fim do contrato e coletar só o mínimo necessário, conforme a LGPD.'
  ] },

{ id: 'sac-comeca-a-valer-apps-transporte-senacon', cat: 'brasil', own: false, t: '2026-11-02T07', d: '2 nov 2026', img: 'celular', src: 'Times Brasil', url: U.sacComecaAValerAppsTransporteSenacon,
  title: 'Novo SAC entra em vigor: atendente humano das 8h às 20h e espera de até 20 segundos em 80% das ligações',
  sum: 'O Decreto 13.135 vale desde esta segunda (2) para setores regulados pelo governo federal e serviços financeiros digitais. Apps de transporte, entrega e marketplaces têm regras diferentes: precisam informar dados de reclamações à Senacon.',
  body: [
    'A norma alcança setores regulados pelo governo federal, como bancos, telefonia e planos de saúde, e serviços digitais de pagamento e crédito supervisionados pelo Banco Central. Apps de transporte, de entregas e marketplaces devem informar à Senacon quantas reclamações receberam e quantas resolveram.'
  ] },

{ id: 'bancos-cripto-sem-autorizacao-6-novembro', cat: 'brasil', own: false, t: '2026-10-31T12', d: '31 out 2026', img: 'mercado', src: 'Economic News Brasil', url: U.bancosCriptoSemAutorizacao6Novembro,
  title: 'A partir de 6 de novembro, bancos e instituições de pagamento não podem operar com prestadoras de cripto sem autorização',
  sum: 'A restrição vem da Resolução 589 do Banco Central. Empresas que fizeram o pedido no prazo podem seguir em operação durante a análise, nas condições do BC.',
  body: [
    'A regra vale para instituições supervisionadas pelo Banco Central, que precisam checar a situação das empresas com as quais trabalham. Há exceções previstas na norma. Ela não proíbe a negociação de criptomoedas em geral.',
    'Fazer o pedido não equivale a ter licença: o prazo para pedir terminou em 30 de outubro, e a análise ainda não foi concluída.'
  ] },

{ id: 'uphold-oobit-deixam-brasil-cripto', cat: 'brasil', own: true, t: '2026-10-31T12', d: '31 out 2026', img: 'celular', read: 3,
  title: 'Com o fim do prazo da licença do BC, Uphold e Oobit anunciam saída do Brasil, e clientes têm até o fim de novembro para sacar',
  sum: 'Na Oobit, cartão e Pix funcionam só até 6 de novembro. Outras empresas de cripto também encerram ou reduzem serviços no país.',
  body: [
    'A Uphold, plataforma internacional de criptomoedas, anunciou na sexta (30) que vai deixar de atender clientes no Brasil, segundo o BitNotícias. O anúncio saiu no último dia do prazo para as empresas que já atuavam no país pedirem autorização ao Banco Central. Os clientes devem sacar o dinheiro até 30 de novembro. Os ativos que rendiam juros em staking serão devolvidos às contas até 6 de novembro.',
    '## Oobit',
    'A Oobit, que oferece cartão para gastar criptomoedas, anunciou a saída na quinta (29), pelo seu grupo no Telegram. Cartão e Pix funcionam até 6 de novembro. Depois disso, só ficam disponíveis saques de criptomoedas. As contas serão encerradas no fim de novembro, segundo o BitNotícias e o Livecoins. Na véspera, a empresa tinha anunciado a inclusão do real e do Pix na sua rede, segundo o Livecoins.',
    '## Outras empresas',
    'Segundo o BitNotícias, também deixam o país ou reduzem serviços NovaDAX, Bity, Bitnuvem, Lemon, Bitso, Crypto.com e Méliuz, que tirou a compra de bitcoin do app. A Revolut encerra a parte de cripto em 25 de novembro e mantém os outros serviços.',
    '## O que vem agora',
    'O Banco Central ainda não divulgou o número oficial de pedidos de licença. Empresas que não pediram autorização têm até 30 dias para encerrar os serviços. A partir de 6 de novembro, bancos e instituições de pagamento não podem trabalhar com prestadoras fora das regras, segundo o Livecoins.'
  ],
  box: { type: 'table', title: 'Prazos para clientes', head: ['Empresa', 'O que acontece'], rows: [['Uphold', 'Saques até 30 de novembro'], ['Oobit', 'Cartão e Pix até 6 de novembro; contas encerradas no fim do mês'], ['Revolut', 'Cripto encerrada em 25 de novembro']], note: 'Fontes: BitNotícias e Livecoins.' },
  sources: [['BitNotícias', U.bnUphold], ['Livecoins', U.lcOobit], ['BitNotícias', U.bnSaidas]] },

];
