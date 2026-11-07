/* ============================================================
   NOVERA: conteúdo do site. Edite este arquivo e rode `node build.js`.
   Regras completas em ATUALIZACAO.md.
   ============================================================ */

/* Topo do site: data da edição e destaques da faixa de cima */
const META = {
  /* Endereço público do site, sem barra no final. Usado nos links das redes sociais. */
  siteUrl: 'https://novera-sepia.vercel.app',
  dataExtenso: 'Sábado, 7 de novembro de 2026',
  edicao: '7 nov 2026',
  /* Faixa do topo: 1 a 3 itens [rótulo, texto curto]. Use só fatos que estão em notícias do site. */
  destaques: [
    ['Em alta', 'iPhone Duo já tem mais de 100 mil apps adaptados, segundo a Apple'],
    ['Alerta', 'Pix fica instável na noite de sexta (6), com cerca de 11 mil relatos de falha'],
    ['Domingo (8)', 'Enem 2026: documento digital só vale aberto no app oficial; print ou foto não são aceitos']
  ]
};

/* Home: destaque principal, dois laterais e três da faixa de baixo (IDs de notícias "own: true") */
const FEATURED = {
  lead: 'icloud-links-publicos-analise-ios-27-3',
  side: ['iphone-duo-100-mil-apps', 'meta-muse-spaces'],
  also: ['vereda-agtech-30-milhoes', 'onto-reembolso-queda-preco-hotel-india', 'fgc-acesso-indevido-dados']
};

/* Home: "Escolhas da redação" (5 IDs) */
const PICKS = ['enem-2026-documentos-digitais-celular', 'youtube-redesign-sem-aba-inscricoes', 'claude-financas-pessoais-beta', 'anatel-bloqueio-sms-sem-cadastro', 'airbnb-3tri-2026'];

const U = {
  /* Atualização de 7 nov 2026 */
  duoApps: 'https://techcrunch.com/2026/11/06/the-duo-apps-are-coming-says-apple/',
  wowForever: 'https://mein-mmo.de/en/wow-forever-release-in-the-live-ticker-time-status-queues-and-more,1594825/',
  paydayVr: 'https://www.roadtovr.com/payday-vr-release-date-quest-steamvr-frame/',
  pocketGamerSemana: 'https://www.pocketgamer.com/new-weekly-mobile-games/november-5th-2026/',
  icloudLinks: 'https://www.macrumors.com/2026/11/04/ios-27-3-icloud-link-check/',
  whatsappPrevia: 'https://wabetainfo.com/whatsapp-is-testing-a-contextual-chat-preview-for-android/',
  findHubAlerta: 'https://9to5google.com/2026/11/05/google-find-hub-tracker-alerts/',
  ios272: 'https://9to5mac.com/2026/11/06/ios-27-2-adds-three-new-ways-to-customize-your-iphone/',
  discordAndroid: 'https://9to5google.com/2026/11/06/discord-is-about-to-get-way-way-faster-on-your-android-phone/',
  museSpaces: 'https://techcrunch.com/2026/11/06/meta-introduces-spaces-a-new-way-to-collaborate-with-your-muse-agent/',
  alexaTexto: 'https://techmymoney.com/2026/11/06/text-alexa-shop-amazon/',
  geminiOffline: 'https://www.androidheadlines.com/2026/11/gemini-live-could-soon-work-offline-but-theres-a-catch.html',
  antigravity: 'https://9to5google.com/2026/11/06/google-antigravity-remote-agents-voice-mode/',
  vereda: 'https://startups.com.br/negocios/agtech/vereda-capta-r-30m-para-conectar-industria-de-insumos-direto-ao-produtor/',
  techloyLatam: 'https://www.techloy.com/week-45-2026-latin-america-startup-funding/',
  grindr: 'https://www.sec.gov/Archives/edgar/data/0001820144/000182014426000039/exhibit991-q32026pressrele.htm',
  nextdoor: 'https://about.nextdoor.com/press-releases/nextdoor-reports-third-quarter-2026-results',
  expedia: 'https://www.sec.gov/Archives/edgar/data/0001324424/000132442426000059/earningsrelease-q32026.htm',
  onto: 'https://ascendants.in/funding-feed/onto-1-million-pre-seed-funding-hotel-price-drop-refund/',
  ontoOutlook: 'https://www.outlookbusiness.com/spotlight/pr-wire/former-groww-team-launch-onto-a-customer-first-travel-platform-with-usd-1-million-in-pre-seed-funding',
  dispatchNetwork: 'https://www.indianweb2.com/2026/11/dispatch-network-raises-5-crore-pre.html',
  evenHealthcare: 'https://inc42.com/buzz/even-healthcare-raises-50-mn-to-expand-hospital-network-across-bengaluru/',
  payserve: 'https://disruptafrica.com/2026/11/04/how-kenyas-payserve-is-building-the-operating-layer-for-managed-real-estate/',
  pixOTempo: 'https://www.otempo.com.br/economia/2026/11/6/pix-fora-do-ar-usuarios-relatam-instabilidade-em-bancos-e-plataformas-de-pagamento',
  criptoCnn: 'https://www.cnnbrasil.com.br/economia/money/mercado/nubank-e-mercado-pago-suspendem-operacoes-de-criptomoedas-entenda/',
  govbrEmail: 'https://cryptoid.com.br/governo-digital-government/gov-br-amplia-opcoes-para-recuperar-acesso-a-conta/',
  blackFridaySerasa: 'https://olhardigital.com.br/2026/11/05/seguranca/black-friday-2025-teve-29-mil-tentativas-de-fraude-em-apenas-quatro-dias',
  anpdMiola: 'https://www.mobiletime.com.br/noticias/06/11/2026/iage-miola-preside-anpd/',
  /* Atualização de 6 nov 2026 */
  editsMacTc: 'https://techcrunch.com/2026/11/05/instagram-brings-edits-to-desktop-to-take-on-capcut/',
  editsMacRumors: 'https://www.macrumors.com/2026/11/05/instagram-edits-mac/',
  tiktokShopApp: 'https://techcrunch.com/2026/11/05/tiktok-quietly-launches-a-standalone-tiktok-shop-app/',
  arcadeNov: 'https://www.macrumors.com/2026/11/05/apple-arcade-crossy-road-rush/',
  xboxSemana: 'https://news.xbox.com/en-us/2026/10/30/next-week-on-xbox-new-games-for-november-2-to-6/',
  youtubeRedesign: 'https://9to5google.com/2026/11/05/youtube-app-redesign-subscriptions-tab/',
  youtubeTesteMaio: 'https://canaltech.com.br/apps/youtube-perde-aba-importante-no-app-para-android-e-ios/',
  whatsappMetaAiChats: 'https://wabetainfo.com/whatsapp-is-rolling-out-chats-powered-by-meta-ai-on-android/',
  primeUberEats: 'https://www.kiplinger.com/personal-finance/deals/amazon-prime-uber-eats-new-delivery-perk',
  appleMusicSelfie: 'https://9to5mac.com/2026/11/04/ios-27-3-upgrades-apple-music-in-two-ways-heres-whats-new/',
  claudeFinancasTc: 'https://techcrunch.com/2026/11/05/claude-can-now-analyze-your-spending-with-its-new-personal-finance-tool/',
  claudeFinancas9to5: 'https://9to5mac.com/2026/11/05/anthropic-upgrades-claude-with-new-personal-finance-feature/',
  geminiOmni: 'https://blog.google/innovation-and-ai/technology/developers-tools/introducing-gemini-omni-1-2-flash/',
  perplexityTeammates: 'https://www.digitaltrends.com/cool-tech/perplexitys-new-ai-coworkers-can-take-over-your-workload-but-they-dont-come-cheap/',
  metaMuse: 'https://www.unite.ai/meta-brings-real-time-voice-and-expressive-avatars-to-muse/',
  airbnbSec: 'https://www.sec.gov/Archives/edgar/data/0001559720/000119312526449727/d437988dex991.htm',
  applovin: 'https://www.marketscreener.com/news/applovin-announces-third-quarter-2026-financial-results-ce785fdfde80f326',
  bumble: 'https://www.globaldatinginsights.com/featured/bumble-q3-2026-results/',
  lyft: 'https://www.sec.gov/Archives/edgar/data/0001759509/000162828026071043/lyft-20260930xpressrelease.htm',
  maasi: 'https://www.indianweb2.com/2026/10/maasi-raises-6-crore-preseed-to-build.html',
  noornation: 'https://thestartupscene.me/INVESTMENTS/NoorNation-Raises-1-05-Million-to-Expand-Solar-Irrigation',
  curebay: 'https://inc42.com/buzz/curebay-bags-₹100-cr-to-scale-rural-clinics-network-enhance-ai-screening-offerings/',
  vitara: 'https://weetracker.com/2026/11/04/vitara-agritech-raises-1-8m-ghana-sheanut-supply-chain/',
  fgcOlhar: 'https://olhardigital.com.br/2026/11/05/seguranca/fgc-sofre-acesso-nao-autorizado-e-expoe-dados-pessoais-de-clientes/',
  fgcInfoMoney: 'https://www.infomoney.com.br/onde-investir/fgc-comunica-vazamento-de-dados-de-investidores-e-alerta-para-risco-de-golpes/',
  anatelRoaming: 'https://www.mobiletime.com.br/noticias/05/11/2026/anatel-estabelece-roaming-obrigatorio-em-rodovias-e-pequenos-municipios/',
  primova: 'https://www.mobiletime.com.br/noticias/05/11/2026/primova-pay-recargas-26/',
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
{ id: 'iphone-duo-100-mil-apps', cat: 'lancamentos', own: true, t: '2026-11-06T15', d: '6 nov 2026', img: 'celular', read: 2,
  title: 'iPhone Duo, o dobrável da Apple, já tem mais de 100 mil apps adaptados, com Word, Outlook e Zoom entre os novos',
  sum: 'Segundo a Apple, milhares de apps adaptados entram na App Store por dia. O aparelho custa a partir de US$ 1.999 nos EUA e esgotou em poucas horas.',
  body: [
    'A Apple informou que mais de 100 mil apps feitos para o iPhone Duo, seu celular dobrável, já estão na App Store, segundo o TechCrunch. A empresa diz que milhares de novos apps adaptados chegam à loja todos os dias.',
    '## Quem chegou agora',
    'Entre os apps que acabam de ganhar versão para a tela dobrável estão Microsoft Word e Outlook, Zoom, os apps da NBA e da NHL, Etsy, LTK, Goodnotes, Extra e Halide Mark III. Netflix, YouTube, Instagram e WhatsApp já estavam adaptados. Spotify, ChatGPT, Grok, Copilot, Excel, PowerPoint, Canva, Tinder, Strava, Google Tradutor e Messenger aparecem numa lista de apps atualizados para o iOS 27 e o Duo.',
    '## Nem tudo pronto',
    'No teste do TechCrunch, o Spotify ainda aparecia sem adaptação, com uma faixa preta na lateral, e não havia atualização na loja. Segundo a Apple, mais de 2.000 desenvolvedores participaram de mais de 50 oficinas presenciais em 19 cidades para preparar os apps.',
    '## Preço e entrega',
    'O iPhone Duo custa a partir de US$ 1.999, com 256 GB. Ele esgotou em poucas horas, e os prazos de entrega já passam para o ano que vem, segundo o TechCrunch. A reportagem não trata do Brasil.'
  ],
  box: { type: 'facts', title: 'Apps no iPhone Duo', rows: [['Apps adaptados', 'Mais de 100 mil, segundo a Apple'], ['Novos', 'Word, Outlook, Zoom, Etsy, Goodnotes e outros'], ['Preço do aparelho', 'A partir de US$ 1.999 (256 GB)'], ['Entrega', 'Prazos já no ano que vem'], ['Brasil', 'Sem confirmação']] },
  sources: [['TechCrunch', U.duoApps]] },

{ id: 'wow-forever-lancamento', cat: 'lancamentos', own: false, t: '2026-11-05T09', d: '5 nov 2026', img: 'tecnologia', src: 'Mein-MMO', url: U.wowForever,
  title: 'World of Warcraft: Forever, nova versão permanente do jogo, entra no ar com raça e região inéditas',
  sum: 'O lançamento global foi na noite de 4 de novembro, no horário do Pacífico. O acesso faz parte da assinatura do jogo.',
  body: [
    'A nova versão funciona ao lado do WoW atual e do Classic e recria a Azeroth original, com nível máximo 60, a raça jogável Skyborne e a região inicial Zephras Isle. No dia da estreia, as filas foram de no máximo cerca de 5 minutos, com alguns erros no começo, segundo o Mein-MMO. Há pacotes opcionais vendidos à parte, sem preço nas fontes. A fonte não trata do Brasil.'
  ] },

{ id: 'payday-aces-high-realidade-virtual', cat: 'lancamentos', own: false, t: '2026-11-05T12', d: '5 nov 2026', img: 'tecnologia', src: 'Road to VR', url: U.paydayVr,
  title: 'Payday: Aces High, jogo de assalto cooperativo em realidade virtual, tem estreia marcada para quinta (5)',
  sum: 'O jogo da Fast Travel Games sai para Meta Quest, PC VR e Steam Frame, por US$ 25, para até quatro jogadores.',
  body: [
    'Os assaltos incluem um banco, um museu e uma cobertura de luxo, com armas, equipamentos e habilidades que o jogador escolhe. Quem compra na Steam leva as versões para PC VR e para o Steam Frame. O preço está em dólar, e a fonte não trata do Brasil.'
  ] },

{ id: 'heir-of-the-dog-iphone', cat: 'lancamentos', own: false, t: '2026-11-05T15', d: '5 nov 2026', img: 'celular', src: 'Pocket Gamer', url: U.pocketGamerSemana,
  title: 'Heir of the Dog, mistério em pixel art na Londres vitoriana, chega ao iPhone por US$ 14,99',
  sum: 'O jogo de apontar e clicar está entre os lançamentos da semana para celular, ao lado de Mika: Dungeon Backpacker e Copy Cats.',
  body: [
    'Heir of the Dog sai só para iOS. Mika: Dungeon Backpacker, jogo de organizar a mochila do herói, e Copy Cats, de quebra-cabeças de plataforma, chegam ao iOS e ao Android, segundo o Pocket Gamer. A fonte não informa preços em reais nem trata do Brasil.'
  ] },

{ id: 'edits-instagram-mac', cat: 'lancamentos', own: true, t: '2026-11-05T13', d: '5 nov 2026', img: 'arte', read: 2,
  title: 'Edits, o editor de vídeo do Instagram, ganha versão para Mac, com exportação em 4K sem marca d\'água',
  sum: 'O app para computador traz timeline com várias faixas, legendas automáticas e publicação direta no Instagram. Mais de 50 milhões de criadores usam o Edits no celular.',
  body: [
    'O Instagram lançou nesta quinta-feira (5) uma versão do Edits, seu app de edição de vídeos, para computadores Mac, segundo o TechCrunch. A reportagem não menciona versão para Windows. Segundo o MacRumors, o download é feito pelo site do Edits.',
    '## O que o app faz',
    'A versão para computador tem timeline com várias faixas, keyframes para transições, visualização da onda do áudio e importação de fontes. Há músicas e efeitos licenciados, livres de royalties, e legendas automáticas em vários idiomas. O vídeo sai na horizontal ou na vertical, em 4K e sem marca d\'água, e pode ser publicado direto no Instagram, com marcação de pessoas e localização.',
    '## Celular e computador',
    'Estilos de áudio e de texto salvos no celular aparecem no computador. Os atalhos de teclado podem ser personalizados ou importados de outros editores. O Instagram promete atualizações semanais e diz trabalhar para que um mesmo projeto possa ser editado nos dois aparelhos.',
    '## Concorrência e disponibilidade',
    'Segundo o TechCrunch, o app disputa espaço com o CapCut, que tem versão para Windows e Mac desde 2021. As fontes não informam preço nem confirmam a disponibilidade no Brasil.'
  ],
  box: { type: 'facts', title: 'Edits no Mac', rows: [['Lançamento', '5 de novembro'], ['Sistema', 'macOS'], ['Exportação', '4K, sem marca d\'água'], ['Usuários no celular', 'Mais de 50 milhões de criadores'], ['Brasil', 'Sem confirmação']] },
  sources: [['TechCrunch', U.editsMacTc], ['MacRumors', U.editsMacRumors]] },

{ id: 'tiktok-shop-app-separado', cat: 'lancamentos', own: false, t: '2026-11-05T14', d: '5 nov 2026', img: 'mercado', src: 'TechCrunch', url: U.tiktokShopApp,
  title: 'TikTok lança app separado para o TikTok Shop, por enquanto em quatro países da Ásia',
  sum: 'O app de compras está no iOS e no Android em Singapura, na Malásia, na Tailândia e nas Filipinas. O Brasil não está entre os mercados citados.',
  body: [
    'O app reúne recomendações, compras por vídeos e transmissões ao vivo, ofertas exclusivas, pagamento, rastreio de pedidos e atendimento. Há frete grátis e vantagens na primeira compra. O lançamento foi notado primeiro pelo consultor Matt Navarra, e o TikTok não comentou, segundo o TechCrunch.'
  ] },

{ id: 'apple-arcade-crossy-road-rush-nba-2k27', cat: 'lancamentos', own: false, t: '2026-11-05T12', d: '5 nov 2026', img: 'celular', src: 'MacRumors', url: U.arcadeNov,
  title: 'Apple Arcade recebe Crossy Road Rush e NBA 2K27 Arcade Edition, que pela primeira vez traz a WNBA',
  sum: 'Também entram Kami 2+ e Food Stylist – Design Game+. O serviço custa US$ 6,99 por mês nos EUA, para até seis pessoas da família.',
  body: [
    'O Crossy Road Rush é uma corrida de obstáculos numa ilha, para até quatro jogadores. O NBA 2K27 Arcade Edition tem 15 times e 180 jogadoras da WNBA nos modos Quick Match e Blacktop. Segundo o 9to5Mac, o catálogo passa de 200 jogos. As fontes não tratam do preço no Brasil.'
  ] },

{ id: 'dispatch-celular-9-dezembro', cat: 'lancamentos', own: false, t: '2026-10-22T14', d: '22 out 2026', img: 'celular', src: 'Gematsu', url: U.dispatchMobile,
  title: 'Dispatch chega ao iPhone e ao Android em 9 de dezembro, com os quatro primeiros episódios grátis',
  sum: 'O jogo completo do estúdio AdHoc custará US$ 19,99 no celular.',
  body: [
    'O jogo do AdHoc Studio será liberado por inteiro por US$ 19,99, segundo o Gematsu. A fonte não informa o preço em reais nem trata do Brasil.'
  ] },

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
{ id: 'icloud-links-publicos-analise-ios-27-3', cat: 'atualizacoes', own: true, t: '2026-11-04T16', d: '4 nov 2026', img: 'plataforma', read: 3,
  title: 'Apple vai poder analisar fotos e arquivos do iCloud compartilhados por link aberto a partir do iOS 27.3',
  sum: 'A regra vale para links do tipo "qualquer pessoa com o link". Esse conteúdo deixa de ter criptografia de ponta a ponta, mesmo com a Proteção Avançada de Dados ligada.',
  body: [
    'A partir do iOS 27.3, itens do Fotos do iCloud e do iCloud Drive compartilhados com a opção "qualquer pessoa com o link" ficarão acessíveis para revisão da Apple, segundo o MacRumors. A empresa diz que vai procurar conteúdo nocivo, mas não define o que entra nessa categoria.',
    '## O que fica de fora',
    'Links enviados só para pessoas escolhidas e a opção de mandar uma cópia do arquivo não passam pela verificação. A mudança vale também para o iPadOS, o macOS e o visionOS 27.3.',
    '## Criptografia',
    'O conteúdo publicado por link aberto deixa de ter criptografia de ponta a ponta, inclusive para quem ativou a Proteção Avançada de Dados.',
    '## O que pode acontecer',
    'Se encontrar conteúdo nocivo, a Apple pode remover o material, restringir ou desativar a conta, impedir um novo cadastro com o mesmo e-mail ou telefone e acionar as autoridades. A empresa não disse se links criados antes da versão 27.3 também serão analisados.',
    '## Quando',
    'O iOS 27.3 está em teste para desenvolvedores, e a versão final é esperada para dezembro. A fonte não trata do Brasil.'
  ],
  box: { type: 'facts', title: 'iCloud no iOS 27.3', rows: [['O que muda', 'Links abertos podem ser analisados pela Apple'], ['Fica de fora', 'Links para pessoas escolhidas e envio de cópia'], ['Criptografia', 'Link aberto sai da ponta a ponta'], ['Situação', 'Em teste; versão final esperada em dezembro'], ['Brasil', 'Sem menção na fonte']] },
  sources: [['MacRumors', U.icloudLinks]] },

{ id: 'whatsapp-previa-conversas-android', cat: 'atualizacoes', own: false, t: '2026-11-05T18', d: '5 nov 2026', img: 'celular', src: 'WABetaInfo', url: U.whatsappPrevia,
  title: 'WhatsApp desenvolve no Android uma prévia de conversas que deixa ler mensagens sem marcá-las como lidas',
  sum: 'Ao tocar e segurar uma conversa na lista, as mensagens recentes aparecem no topo de um novo menu. O recurso ainda não foi liberado nem para quem testa o beta.',
  body: [
    'O recurso foi encontrado na versão beta 2.26.44.11 para Android. Diferente da versão do iOS, a prévia no Android pode ser rolada. O menu reúne opções como selecionar, fixar, arquivar, apagar e marcar como lida. Não há data de lançamento, e a fonte não trata do Brasil.'
  ] },

{ id: 'find-hub-alerta-rastreador-esquecido', cat: 'atualizacoes', own: false, t: '2026-11-05T17', d: '5 nov 2026', img: 'celular', src: '9to5Google', url: U.findHubAlerta,
  title: 'Find Hub, app do Google para localizar aparelhos, passa a avisar quando um rastreador fica para trás',
  sum: 'O alerta é ligado rastreador por rastreador e, por enquanto, funciona só com os modelos da Chipolo e com o Moto Tag, para usuários nos EUA e na Europa.',
  body: [
    'A opção aparece na versão 3.1.787-06 do app para Android, nas configurações de cada rastreador. O endereço de casa salvo na conta Google fica fora dos avisos por padrão. Segundo o 9to5Google, o Google prepara ainda um novo cadastro de rastreadores, a troca de nomes e a leitura por NFC. O Brasil não está entre as regiões citadas.'
  ] },

{ id: 'ios-27-2-perfis-apple-tv-iphone', cat: 'atualizacoes', own: false, t: '2026-11-06T12', d: '6 nov 2026', img: 'celular', src: '9to5Mac', url: U.ios272,
  title: 'iOS 27.2 leva os perfis do app Apple TV ao iPhone e permite tirar apps da Siri e da busca',
  sum: 'A atualização, já liberada, também traz ações sugeridas no Mensagens, como criar um lembrete a partir de uma conversa.',
  body: [
    'Os perfis, que antes só existiam na Apple TV, têm recomendações e lista de "Continuar assistindo" próprias, e os perfis infantis podem ter restrição de conteúdo. Nos ajustes da Siri, uma nova opção impede que apps escolhidos apareçam na Siri, na busca e nas sugestões. Cada tipo de ação sugerida no Mensagens pode ser desligado. A fonte não trata do Brasil.'
  ] },

{ id: 'discord-android-mais-rapido', cat: 'atualizacoes', own: false, t: '2026-11-06T14', d: '6 nov 2026', img: 'celular', src: '9to5Google', url: U.discordAndroid,
  title: 'Discord refaz o app para Android e promete abertura em menos de 1 segundo',
  sum: 'Hoje o app leva cerca de 3 segundos para abrir, segundo a reportagem. Ainda não há data para a nova versão.',
  body: [
    'O novo app foi reescrito na linguagem de programação Rust, segundo o 9to5Google. O Discord não divulgou quando a versão chega aos usuários, e a fonte não trata do Brasil.'
  ] },

{ id: 'youtube-redesign-sem-aba-inscricoes', cat: 'atualizacoes', own: true, t: '2026-11-05T16', d: '5 nov 2026', img: 'celular', read: 3,
  title: 'YouTube muda o app no Android e no iOS e tira a aba Inscrições da barra de baixo',
  sum: 'Os canais inscritos passam a ficar dentro de uma nova aba Início. O 9to5Google chama a mudança de a maior do app em cerca de uma década.',
  body: [
    'O novo visual do app do YouTube começou a aparecer nesta quinta-feira (5) para usuários de Android e de iOS, segundo o 9to5Google. A barra inferior, com cinco botões, dá lugar a um desenho mais voltado aos Shorts e à criação de vídeos.',
    '## O que muda',
    'A aba Inscrições deixa de existir como botão próprio. Os vídeos dos canais inscritos ficam numa nova aba Início, acessados com um deslize de dedo, ao lado das recomendações. Também é possível montar um feed personalizado nessa aba.',
    '## Como está chegando',
    'Segundo o 9to5Google, a mudança parece ser feita pelos servidores do YouTube, sem depender de atualizar o app. O YouTube havia anunciado o novo desenho no mês passado. Em maio, a empresa confirmou ao Canaltech que testava o layout com um grupo pequeno de usuários, numa liberação gradual e global.',
    '## Reação',
    'A recepção nas redes foi em grande parte negativa, segundo o site, com críticas de usuários no Reddit. A reportagem não traz posicionamento do YouTube sobre as reclamações.',
    '## Disponibilidade',
    'Não está claro se a mudança já chegou a todos os usuários. As fontes não citam países, e não há confirmação de que o novo visual tenha chegado ao Brasil.'
  ],
  box: { type: 'facts', title: 'Novo app do YouTube', rows: [['Onde', 'Android e iOS'], ['Inscrições', 'Saem da barra e vão para a aba Início'], ['Foco', 'Shorts e criação de vídeos'], ['Como chega', 'Pelos servidores, sem atualizar o app'], ['Brasil', 'Sem confirmação']] },
  sources: [['9to5Google', U.youtubeRedesign], ['Canaltech (teste de maio)', U.youtubeTesteMaio]] },

{ id: 'whatsapp-beta-conversas-meta-ai', cat: 'atualizacoes', own: false, t: '2026-11-04T15', d: '4 nov 2026', img: 'celular', src: 'WABetaInfo', url: U.whatsappMetaAiChats,
  title: 'WhatsApp testa no Android conversas separadas com a Meta AI, cada uma com nome e foto',
  sum: 'O teste está no beta 2.26.44.6, para alguns usuários. As conversas com a IA passam a aparecer na lista de chats, sob o filtro de IA.',
  body: [
    'A opção fica no menu da conversa com a Meta AI: o usuário dá um nome e, se quiser, uma foto. Um símbolo indica que a conversa é com IA, e ela pode ser apagada a qualquer momento. Segundo o WABetaInfo, mais contas devem receber o teste nas próximas semanas. Não há data para a versão estável nem confirmação para o Brasil.'
  ] },

{ id: 'amazon-prime-uber-eats-eua', cat: 'atualizacoes', own: false, t: '2026-11-05T15', d: '5 nov 2026', img: 'mercado', src: 'Kiplinger', url: U.primeUberEats,
  title: 'Nos EUA, Amazon Prime troca o Grubhub pelo Uber Eats e dá entrega grátis em pedidos a partir de US$ 25',
  sum: 'O benefício começou na quinta (5), só para assinantes nos EUA. Taxas de serviço, impostos e gorjeta podem ser cobrados.',
  body: [
    'O acordo da Amazon com o Grubhub terminou no mesmo dia. O pedido é feito pelo site ou pelo app de compras da Amazon, sem conta separada no Uber Eats. Nos EUA, o Prime custa US$ 14,99 por mês ou US$ 139 por ano, segundo o Kiplinger. A oferta vale só nos EUA.'
  ] },

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

{ id: 'whatsapp-beta-expandir-fotos-ia', cat: 'atualizacoes', own: false, t: '2026-11-05T07', d: '5 nov 2026', img: 'celular', src: 'WABetaInfo', url: U.whatsappFotoIa,
  title: 'WhatsApp testa no Android a expansão de fotos com IA para o formato 9:16',
  sum: 'O teste está no beta 2.26.44.8, para alguns usuários. A Meta AI cria conteúdo novo nas bordas da imagem, em vez de esticá-la.',
  body: [
    'A opção fica no editor de fotos, e o usuário pode aceitar o resultado ou pedir outra versão. Parte dos testadores só a vê nas conversas, e outra parte, no status. Não há data para a versão estável nem confirmação para o Brasil.'
  ] },

/* ===================== IA ===================== */
{ id: 'meta-muse-spaces', cat: 'ia', own: true, t: '2026-11-06T16', d: '6 nov 2026', img: 'tecnologia', read: 2,
  title: 'Meta lança o Spaces, área do agente Muse que cria planejadores e painéis a partir de um pedido',
  sum: 'O usuário descreve a ideia e o Muse monta um controle, um planejador ou um quadro de projeto, que se atualiza sozinho. A Meta não informou países nem preço.',
  body: [
    'A Meta apresentou nesta sexta-feira (6) o Spaces, nova função do Muse, seu agente de inteligência artificial, segundo o TechCrunch. Cada Space é uma conversa sobre um tema, que fica na barra lateral do Muse.',
    '## Como funciona',
    'O usuário descreve o que precisa, e o Muse cria uma ferramenta sob medida, como um planejador de viagem, uma lista de receitas para uma festa de família, um controle de presentes ou um organizador de casamento. É possível conectar apps de terceiros, e os Spaces se atualizam em segundo plano com dados como datas de shows, mudanças de preço e o andamento de uma meta de economia.',
    '## Contexto',
    'Segundo o TechCrunch, Mark Zuckerberg disse ter criado com a função um jogo de churrasco, um controle de eventos e um painel para comandar a casa. Na divulgação de resultados de outubro, ele afirmou que os agentes do Muse tinham 10 milhões de usuários nos EUA e no Canadá, menos de dois meses após o lançamento.',
    '## Disponibilidade',
    'A reportagem não informa preço, países nem se a função está em teste. Não há confirmação para o Brasil.'
  ],
  box: { type: 'facts', title: 'Spaces no Muse', rows: [['Anúncio', '6 de novembro'], ['O que faz', 'Cria planejadores, controles e painéis'], ['Atualização', 'Em segundo plano, com apps conectados'], ['Usuários do Muse', '10 milhões nos EUA e no Canadá, segundo a Meta'], ['Brasil', 'Sem confirmação']] },
  sources: [['TechCrunch', U.museSpaces]] },

{ id: 'alexa-compras-por-mensagem-eua', cat: 'ia', own: false, t: '2026-11-06T13', d: '6 nov 2026', img: 'mercado', src: 'TechMyMoney', url: U.alexaTexto,
  title: 'Amazon deixa clientes convidados nos EUA fazerem compras com a Alexa por mensagem de texto',
  sum: 'O contato "Alexa Shopping" busca produtos, acompanha preços e pedidos e pode comprar sozinho quando o preço chega ao valor definido pelo cliente.',
  body: [
    'A função começou com um grupo pequeno de clientes convidados nos EUA, e a Amazon promete ampliar para milhões de pessoas nas próximas semanas. Segundo a empresa, mais de 400 milhões de clientes usaram a Alexa para compras nos últimos 12 meses. A fonte diz que o recurso vale só nos EUA.'
  ] },

{ id: 'gemini-live-modo-offline-codigo', cat: 'ia', own: false, t: '2026-11-06T11', d: '6 nov 2026', img: 'celular', src: 'Android Headlines', url: U.geminiOffline,
  title: 'Código do app do Google indica modo sem internet para o Gemini Live, ainda sem anúncio',
  sum: 'Textos achados na versão 17.72.13 do app falam em funcionar offline, com recursos limitados.',
  body: [
    'Para ativar o modo, seria preciso estar conectado na primeira vez. Não está claro se o Google vai baixar um novo modelo para rodar no próprio aparelho nem quais celulares seriam compatíveis. O Google não comentou nem deu data, segundo o Android Headlines, que cita reportagem do Android Authority.'
  ] },

{ id: 'google-antigravity-voz-agentes-remotos', cat: 'ia', own: false, t: '2026-11-06T17', d: '6 nov 2026', img: 'tecnologia', src: '9to5Google', url: U.antigravity,
  title: 'Antigravity, ferramenta de programação com IA do Google, ganha comando de voz e agentes que trabalham na nuvem',
  sum: 'Os agentes remotos seguem trabalhando com o notebook fechado e podem ser acompanhados pelo celular. Eles chegam aos assinantes dos planos Google AI Pro e Ultra.',
  body: [
    'A versão 2.29, para Mac, Windows e Linux, traz um modo de voz baseado no Gemini Live e um visual novo. Os projetos dos agentes remotos podem partir de um repositório do GitHub ou de uma pasta do Google Drive. A fonte não informa preços nem regiões.'
  ] },

{ id: 'claude-financas-pessoais-beta', cat: 'ia', own: true, t: '2026-11-05T15', d: '5 nov 2026', img: 'mercado', read: 3,
  title: 'Claude ganha em teste nos EUA uma área de finanças pessoais que lê contas bancárias e cartões',
  sum: 'O recurso usa a Plaid para conectar as contas, só com acesso para leitura. Está em beta para os planos Pro, Max e Ultra, apenas nos EUA.',
  body: [
    'A Anthropic anunciou nesta quinta-feira (5) o Personal Finance, uma área do Claude para analisar gastos, segundo o TechCrunch. O recurso está em beta, começa pelos assinantes dos planos Pro, Max e Ultra e funciona só nos EUA.',
    '## Como funciona',
    'As contas bancárias e os cartões de crédito são conectados pela Plaid. O acesso é só de leitura: o Claude não movimenta, não administra e não investe dinheiro. Ele vê o nome do banco e da conta, os quatro últimos dígitos, saldos, limites e até dois anos de transações. Segundo o 9to5Mac, o Claude não tem acesso à senha do banco.',
    '## O que ele faz',
    'O assistente agrupa os gastos por categoria, aponta cobranças duplicadas, tarifas inesperadas e contas que subiram, e responde se a pessoa gasta mais do que ganha. Também explica termos como juros anuais. O 9to5Mac informa que os dados podem aparecer em painéis e calendários e que a Anthropic recomenda conferir os números com o banco, porque o Claude pode errar. O recurso não foi feito para dar conselho de investimento.',
    '## Privacidade',
    'A Anthropic afirma que não há anúncios nem recomendações patrocinadas e que as conversas nessa área não são usadas para treinar modelos. As afirmações são da empresa. Segundo o TechCrunch, a OpenAI lançou ferramentas parecidas para o ChatGPT em maio. Não há confirmação para o Brasil.'
  ],
  box: { type: 'facts', title: 'Personal Finance no Claude', rows: [['Situação', 'Beta'], ['Onde', 'Só nos EUA'], ['Planos', 'Pro, Max e Ultra'], ['Conexão', 'Plaid, só leitura'], ['Histórico', 'Até 2 anos de transações']] },
  sources: [['TechCrunch', U.claudeFinancasTc], ['9to5Mac', U.claudeFinancas9to5]] },

{ id: 'gemini-omni-1-2-flash-videos', cat: 'ia', own: false, t: '2026-11-05T14', d: '5 nov 2026', img: 'tecnologia', src: 'Google', url: U.geminiOmni,
  title: 'Google lança o Gemini Omni 1.2 Flash, que gera vídeos de até 15 segundos e custa 30% menos',
  sum: 'Para desenvolvedores, o preço é de US$ 0,07 por segundo de vídeo em 720p. No app Gemini, os vídeos de 15 segundos estão sendo liberados para o plano Google AI Ultra.',
  body: [
    'A versão anterior, Omni 1.1, fazia vídeos de até 10 segundos. O novo modelo aceita imagens de referência, trechos de movimento e áudio, permite editar o vídeo em conversa e marca os resultados com a marca d\'água SynthID. O Google admite limites em cenas de esporte rápidas e de física complexa. A página não confirma a disponibilidade no Brasil.'
  ] },

{ id: 'perplexity-teammates-agentes', cat: 'ia', own: false, t: '2026-11-05T17', d: '5 nov 2026', img: 'tecnologia', src: 'Digital Trends', url: U.perplexityTeammates,
  title: 'Perplexity lança o Teammates, agentes de IA que assumem tarefas contínuas, para o plano de US$ 200 por mês',
  sum: 'A liberação começa pelos assinantes do Max na web. Os apps para celular e computador estão prometidos para breve.',
  body: [
    'Diferente do Computer, agente da empresa que trabalha em ambientes temporários, os Teammates ficam ativos de forma permanente. Eles podem entrar num canal do Slack para receber tarefas, e o usuário pode revisar o trabalho e assumir o controle. Segundo o Digital Trends, quem está nos planos Free e Pro precisa migrar para o Max. A fonte não trata do Brasil.'
  ] },

{ id: 'meta-muse-voz-avatares-eua', cat: 'ia', own: false, t: '2026-11-05T13', d: '5 nov 2026', img: 'celular', src: 'Unite.AI', url: U.metaMuse,
  title: 'Meta leva conversas por voz em tempo real e avatares animados ao Muse, seu agente de IA, nos EUA',
  sum: 'O recurso chega ao app Muse no celular, na web e no Mac. O agente continua executando tarefas enquanto conversa.',
  body: [
    'O usuário pode interromper o agente e escolher entre só voz, avatar ao lado do chat ou tela cheia. O Muse foi lançado em 8 de setembro e é só para maiores de 18 anos. Os vídeos do avatar levam marca d\'água. A liberação é apenas nos EUA, segundo a fonte.'
  ] },

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

/* ===================== STARTUPS ===================== */
{ id: 'vereda-agtech-30-milhoes', cat: 'startups', own: true, t: '2026-11-03T16', d: '3 nov 2026', img: 'mercado', read: 2,
  title: 'Goiana Vereda capta R$ 30 milhões para vender insumos agrícolas pelo WhatsApp com agentes de IA',
  sum: 'A rodada seed foi liderada pela Canary e pela Valor Capital Group, com participação do fundo Speedrun, da a16z. A startup liga fabricantes direto ao produtor e ganha comissão.',
  body: [
    'A Vereda, startup do agronegócio criada em 2025 em Goiás, captou R$ 30 milhões numa rodada seed, segundo o Startups. A rodada foi liderada pela Canary e pela Valor Capital Group, com participação do Speedrun, fundo da a16z.',
    '## Como funciona',
    'A plataforma conecta fabricantes de insumos diretamente aos produtores rurais pelo WhatsApp, e agentes de inteligência artificial cuidam da venda. A empresa ganha comissão e não mantém estoque. Segundo a Vereda, o produtor paga mais de 30% menos pelos insumos; o número é da própria empresa.',
    '## Quem está por trás',
    'Os fundadores são João Pedro Aguiar de Souza e Pedro Galindo. A empresa não divulgou valor de mercado, número de clientes nem faturamento. O levantamento semanal do Techloy sobre a América Latina calcula a rodada em cerca de US$ 5,5 milhões.'
  ],
  box: { type: 'facts', title: 'Vereda', rows: [['Sede', 'Goiás'], ['Rodada', 'R$ 30 milhões (seed)'], ['Líderes', 'Canary e Valor Capital Group'], ['Canal de venda', 'WhatsApp, com agentes de IA'], ['Receita', 'Comissão, sem estoque']] },
  sources: [['Startups', U.vereda], ['Techloy', U.techloyLatam]] },

{ id: 'grindr-3tri-2026', cat: 'startups', own: false, t: '2026-11-05T21', d: '5 nov 2026', img: 'celular', src: 'Grindr (comunicado, SEC)', url: U.grindr,
  title: 'Receita do Grindr cresce 22% no trimestre, mas despesa com processos leva a prejuízo de US$ 6,6 milhões',
  sum: 'A receita foi de US$ 141,4 milhões. A empresa elevou a previsão de receita para 2026, para cerca de US$ 560 milhões.',
  body: [
    'O resultado inclui uma despesa de US$ 33 milhões com processos judiciais; um ano antes, o lucro havia sido de US$ 30,8 milhões. O Ebitda ajustado foi de US$ 61,7 milhões, com margem de 43,7%. Para 2027, a primeira projeção da empresa é de ao menos US$ 705 milhões de receita.'
  ] },

{ id: 'nextdoor-3tri-2026', cat: 'startups', own: false, t: '2026-11-05T22', d: '5 nov 2026', img: 'celular', src: 'Nextdoor (comunicado)', url: U.nextdoor,
  title: 'Nextdoor chega a 24,5 milhões de usuários semanais e quase zera o prejuízo no trimestre',
  sum: 'A receita do app de vizinhança subiu 14%, para US$ 78,8 milhões, e o prejuízo caiu de US$ 12,9 milhões para US$ 0,66 milhão.',
  body: [
    'Os usuários ativos semanais cresceram 14% sobre um ano antes, no terceiro trimestre seguido de alta. O Ebitda ajustado foi de US$ 10,3 milhões. Para 2026, a empresa prevê receita de US$ 293 milhões a US$ 295 milhões.'
  ] },

{ id: 'expedia-3tri-2026', cat: 'startups', own: false, t: '2026-11-04T21', d: '4 nov 2026', img: 'mercado', src: 'Expedia (comunicado, SEC)', url: U.expedia,
  title: 'Expedia fatura US$ 4,94 bilhões no trimestre, alta de 12%, e eleva a previsão para o ano',
  sum: 'As reservas somaram US$ 34 bilhões, com alta de 19% na área que atende empresas parceiras. O lucro líquido foi de US$ 1,03 bilhão.',
  body: [
    'As reservas feitas por consumidores cresceram 7%, para US$ 22,9 bilhões, e as da área de empresas, 19%, para US$ 11,1 bilhões. Foram 115,7 milhões de diárias, alta de 7%. A previsão de receita para 2026 subiu para US$ 16,37 bilhões a US$ 16,43 bilhões.'
  ] },

{ id: 'airbnb-3tri-2026', cat: 'startups', own: true, t: '2026-11-05T19', d: '5 nov 2026', img: 'mercado', read: 3,
  title: 'Airbnb fatura US$ 4,87 bilhões no trimestre, alta de 19%, e cita o Brasil como destaque',
  sum: 'Noites e assentos reservados somaram 155 milhões, alta de 16%. No Brasil, segundo a empresa, as noites reservadas por brasileiros cresceram mais de 30%.',
  body: [
    'O Airbnb divulgou nesta quinta-feira (5) o resultado do terceiro trimestre de 2026, em carta aos acionistas enviada à SEC, a comissão de valores dos EUA. A receita foi de US$ 4,869 bilhões, alta de 19%, ou 16% sem o efeito do câmbio. O lucro líquido foi de US$ 1,89 bilhão, ante US$ 1,374 bilhão um ano antes.',
    '## Reservas',
    'Noites e assentos reservados somaram 155 milhões, alta de 16%. O valor bruto das reservas foi de US$ 27,7 bilhões, alta de 21%. O Ebitda ajustado chegou a US$ 2,509 bilhões, com margem de 52%.',
    '## Brasil e América Latina',
    'A empresa diz que o Brasil seguiu como destaque no trimestre. As noites reservadas por viajantes do país cresceram mais de 30%, assim como o número de pessoas que reservaram pela primeira vez. Na América Latina, noites e assentos reservados subiram mais de 20%.',
    '## Recompra e previsão',
    'O Airbnb recomprou US$ 0,7 bilhão em ações no trimestre e aprovou um novo programa de até US$ 12 bilhões. Para o quarto trimestre, prevê receita de US$ 3,22 bilhões a US$ 3,28 bilhões, alta de 16% a 18%.'
  ],
  box: { type: 'facts', title: 'Airbnb no 3º trimestre', rows: [['Receita', 'US$ 4,87 bilhões (+19%)'], ['Lucro líquido', 'US$ 1,89 bilhão'], ['Noites e assentos', '155 milhões (+16%)'], ['Valor das reservas', 'US$ 27,7 bilhões (+21%)'], ['Brasil', 'Noites de viajantes do país: mais de 30%']] },
  sources: [['Airbnb (carta aos acionistas, SEC)', U.airbnbSec]] },

{ id: 'applovin-3tri-2026', cat: 'startups', own: false, t: '2026-11-04T19', d: '4 nov 2026', img: 'mercado', src: 'MarketScreener (comunicado)', url: U.applovin,
  title: 'AppLovin, de anúncios em apps, fatura US$ 2,19 bilhões no trimestre, alta de 55%',
  sum: 'O lucro líquido subiu 72%, para US$ 1,44 bilhão. A empresa ampliou em US$ 3,2 bilhões o programa de recompra de ações.',
  body: [
    'O Ebitda ajustado foi de US$ 1,84 bilhão, com margem de 84%. Para o quarto trimestre, a AppLovin prevê receita de US$ 2,365 bilhões a US$ 2,395 bilhões. O comunicado não traz dados do Brasil.'
  ] },

{ id: 'bumble-3tri-2026-venda', cat: 'startups', own: false, t: '2026-11-05T12', d: '5 nov 2026', img: 'celular', src: 'Global Dating Insights', url: U.bumble,
  title: 'Receita do Bumble cai 16% no trimestre, enquanto a venda da empresa por US$ 1,3 bilhão aguarda aprovação',
  sum: 'A receita foi de US$ 207,1 milhões. Os usuários pagantes somaram 3,08 milhões, e o app Bumble perdeu 15,1% deles.',
  body: [
    'A compradora é a Ithaca Holdings, que paga US$ 6,05 por ação, em dinheiro. Os acionistas já aprovaram o negócio, que ainda depende de órgãos reguladores. Por isso, o Bumble não fez o comunicado e a teleconferência habituais. O lucro líquido foi de US$ 31,6 milhões, ante US$ 51,6 milhões um ano antes.'
  ] },

{ id: 'lyft-3tri-2026', cat: 'startups', own: false, t: '2026-11-05T18', d: '5 nov 2026', img: 'mercado', src: 'Lyft (comunicado, SEC)', url: U.lyft,
  title: 'Lyft tem US$ 5,6 bilhões em reservas no trimestre, alta de 17%, e prejuízo de US$ 9,7 milhões',
  sum: 'Foram 273,5 milhões de corridas e 31,6 milhões de passageiros ativos, os dois com alta de 10%.',
  body: [
    'A receita subiu 8%, para US$ 1,82 bilhão. O prejuízo inclui impacto de US$ 117,9 milhões com questões jurídicas, fiscais e regulatórias. A empresa lançou a assinatura Lyft Go e passou a oferecer robotáxis da Waymo no app em Nashville. O comunicado não traz dados do Brasil.'
  ] },

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

/* ===================== IDEIAS PARA O BRASIL ===================== */
{ id: 'onto-reembolso-queda-preco-hotel-india', cat: 'ideias', own: true, t: '2026-10-21T10', d: '21 out 2026', img: 'mercado', read: 3,
  title: 'Na Índia, a Onto devolve a diferença quando o preço do hotel cai depois da reserva e capta US$ 1 milhão',
  sum: 'O app acompanha o preço do quarto e reembolsa a diferença na forma de pagamento original, para reservas elegíveis. A rodada pré-seed foi liderada pelo Stargazer Fund.',
  body: [
    'A Onto, startup de Bengaluru, na Índia, captou US$ 1 milhão numa rodada pré-seed liderada pelo Stargazer Fund, com participação da White Venture Capital, de Singapura, segundo o Ascendants. A empresa foi criada em junho de 2026 por Jagdeep Singh e Shubham Goyal, que trabalharam na Groww, app indiano de investimentos.',
    '## Como funciona',
    'O app busca e reserva hotéis no país e no exterior. O primeiro recurso é o reembolso por queda de preço: se o mesmo quarto, nas mesmas datas, ficar mais barato depois da reserva, a Onto devolve a diferença na forma de pagamento usada, desde que a reserva seja elegível. O app também acompanha reservas elegíveis feitas em outras plataformas e manda alertas pelo WhatsApp e por notificações.',
    '## Os números',
    'Segundo a empresa, o app teve mais de 2.000 downloads antes do lançamento, e uma em cada duas reservas recebeu reembolso automático. Os números são da própria Onto, que não informou como ganha dinheiro nem se há limite para os reembolsos. Os planos incluem ir além dos hotéis e usar IA nas recomendações.',
    '## Por que olhar para o Brasil',
    'Análise da redação: devolver a diferença quando o preço cai ainda é uma oferta pouco comum nas reservas de hotel feitas no Brasil. Um serviço que vigie o preço depois da compra poderia atrair quem planeja viagens com antecedência. O desafio seria fechar acordos com hotéis e agências e definir quem paga o reembolso.'
  ],
  box: { type: 'facts', title: 'Onto', rows: [['País', 'Índia'], ['Rodada', 'US$ 1 milhão (pré-seed)'], ['Líder', 'Stargazer Fund'], ['Recurso principal', 'Reembolso quando o preço do hotel cai'], ['Alertas', 'WhatsApp e notificações']] },
  sources: [['Ascendants', U.onto], ['Outlook Business (comunicado)', U.ontoOutlook]] },

{ id: 'dispatch-network-entregadores-india', cat: 'ideias', own: false, t: '2026-11-02T10', d: '2 nov 2026', img: 'mercado', src: 'IndianWeb2', url: U.dispatchNetwork,
  title: 'Na Índia, a Dispatch monta uma rede de entregadores que atende vários apps ao mesmo tempo e capta ₹ 5 crore',
  sum: 'Uma IA decide o próximo pedido de cada entregador entre plataformas como Zomato, Swiggy e Zepto, para reduzir viagens sem carga. A empresa diz fazer cerca de 3.500 entregas por dia.',
  body: [
    'A startup de Pune começou a operar em junho de 2026 e diz ter feito 55 mil entregas em outubro. A rodada pré-seed foi liderada pela Antler India. Segundo a empresa, os entregadores ganham cerca de 55% a mais por mês que a média do setor; os números são da própria Dispatch.'
  ] },

{ id: 'even-healthcare-assinatura-hospitais-india', cat: 'ideias', own: false, t: '2026-10-19T10', d: '19 out 2026', img: 'ciencia', src: 'Inc42', url: U.evenHealthcare,
  title: 'Na Índia, a Even Healthcare junta assinatura de saúde e hospitais próprios e capta US$ 50 milhões',
  sum: 'O pacote reúne consultas, telemedicina, exames em casa e internação. Os médicos recebem salário fixo, sem ganho por procedimento.',
  body: [
    'A rodada série B foi liderada pela Khosla Ventures, com a Alpha Wave. A empresa diz ter mais de 250 mil membros em 10 cidades e dois hospitais em Bengaluru, com planos de abrir outros. Em agosto, cortou cerca de 350 vagas ao trocar o foco de seguro por hospitais, segundo o Inc42. Os preços não foram divulgados.'
  ] },

{ id: 'payserve-cobranca-condominios-quenia', cat: 'ideias', own: false, t: '2026-11-04T11', d: '4 nov 2026', img: 'mundo', src: 'Disrupt Africa', url: U.payserve,
  title: 'No Quênia, a PayServe automatiza a cobrança de aluguel, condomínio, água e luz em conjuntos residenciais',
  sum: 'A plataforma lê medidores inteligentes e recebe pelo M-Pesa e por cinco bancos. A empresa diz ter mais de 10 mil unidades em mais de 50 imóveis.',
  body: [
    'A PayServe cobra uma mensalidade por unidade e vende ou aluga os medidores; há também uma opção sem custo inicial, paga com participação na receita. Segundo a empresa, KES 1 bilhão já passou pela plataforma. Financiada até agora pelos fundadores, ela busca US$ 1 milhão numa rodada série A.'
  ] },

{ id: 'maasi-babas-india', cat: 'ideias', own: true, t: '2026-10-27T10', d: '27 out 2026', img: 'celular', read: 3,
  title: 'Na Índia, a Maasi oferece babás treinadas por hora ou por assinatura e capta ₹ 6 crore',
  sum: 'As famílias reservam pelo app a partir de ₹ 199 por hora ou ₹ 5.999 por mês. A empresa diz ter atendido mais de 1.200 famílias com mais de 500 cuidadoras.',
  body: [
    'A Maasi, startup de Bengaluru, na Índia, captou ₹ 6 crore (60 milhões de rúpias) numa rodada pré-seed liderada pela Better Capital e pela Antler India, segundo o IndianWeb2. Entre os investidores-anjo estão Rishikesh SR, do Rapido, e Vaibhav Khandelwal, da Shadowfax.',
    '## Como funciona',
    'As famílias reservam babás verificadas sob demanda, a partir de ₹ 199 por hora, ou por assinatura, a partir de ₹ 5.999 por mês. Antes de atender uma família, as cuidadoras passam por um treinamento gratuito dado por diretoras de pré-escola, enfermeiras e ex-instrutoras de comissários de bordo. A Maasi treina, paga e acompanha essas profissionais. A categoria mais nova é a de babás que falam inglês e cuidam das crianças sem telas.',
    '## Os números',
    'A empresa nasceu de uma comunidade de mais de 8 mil pais de Bengaluru. Segundo a própria Maasi, a lista de espera passou de 4 mil famílias em cinco dias depois do lançamento público, em 20 de outubro, e o crescimento é de 20% por semana. Os números são da empresa. O dinheiro vai para recrutar e treinar cuidadoras, para a tecnologia e para a equipe.',
    '## Por que olhar para o Brasil',
    'Análise da redação: no Brasil, a contratação de babás ainda passa muito por indicação e acerto informal. Um app que treine, verifique e pague as cuidadoras, com cobrança por hora ou por mês, poderia atender famílias que trabalham fora. O modelo teria de lidar com as regras do trabalho doméstico e com o custo de treinar e reter as profissionais.'
  ],
  box: { type: 'facts', title: 'Maasi', rows: [['País', 'Índia'], ['Rodada', '₹ 6 crore (pré-seed)'], ['Preço', 'A partir de ₹ 199 por hora ou ₹ 5.999 por mês'], ['Cuidadoras', 'Mais de 500, segundo a empresa'], ['Famílias atendidas', 'Mais de 1.200, segundo a empresa']] },
  sources: [['IndianWeb2', U.maasi]] },

{ id: 'noornation-irrigacao-solar-egito', cat: 'ideias', own: false, t: '2026-10-29T10', d: '29 out 2026', img: 'ciencia', src: 'The Startup Scene', url: U.noornation,
  title: 'No Egito, a NoorNation cobra por hora de irrigação com energia solar e capta US$ 1,05 milhão',
  sum: 'O agricultor paga pelo uso, sem comprar os painéis. A empresa soma cerca de 1,71 MWp entregues ou em obras.',
  body: [
    'Fundada em 2021, a NoorNation fechou mais cinco projetos com a Linah Farms, que é cliente e também investidora. A economia de diesel citada pela empresa, de mais de US$ 58 mil nessa fazenda, não foi verificada de forma independente, segundo a reportagem. Receita e número de agricultores não foram divulgados.'
  ] },

{ id: 'vitara-karite-coletoras-gana', cat: 'ideias', own: false, t: '2026-11-04T10', d: '4 nov 2026', img: 'mundo', src: 'WeeTracker', url: U.vitara,
  title: 'Em Gana, a Vitara digitaliza a compra de karité de 47 mil coletoras e capta € 1,8 milhão',
  sum: 'A plataforma registra a produção, organiza as redes de produtoras e faz os pagamentos de forma digital. Mulheres são 91% das coletoras, segundo a empresa.',
  body: [
    'A rodada foi liderada pela AgriFI, fundo financiado pela União Europeia, com a Acumen e investidores-anjo. A empresa, antes chamada Sommalife, diz ter mais de 150 mil produtoras cadastradas e um aumento de 20% na renda das famílias. Os números são da empresa, e a receita não foi divulgada.'
  ] },

{ id: 'viatik-carona-uruguai-argentina', cat: 'ideias', own: false, t: '2026-10-28T10', d: '28 out 2026', img: 'celular', src: 'Forbes Argentina', url: U.viatik,
  title: 'No Uruguai e na Argentina, o Viatik organiza caronas entre cidades, passa de 400 mil usuários e capta US$ 600 mil',
  sum: 'O passageiro paga cerca de metade da passagem de ônibus. Quase 90% das transações vêm da Argentina.',
  body: [
    'O app liga motoristas com lugar vago a passageiros na mesma rota, dividindo combustível e pedágio. Ele organiza caronas antes combinadas em grupos de redes sociais e de mensagens. Foram mais de 40 mil assentos vendidos em 2026, e a empresa prevê mais de 60 mil no ano.'
  ] },

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

{ id: 'talent-nation-engenheiros-ia-nigeria', cat: 'ideias', own: false, t: '2026-10-30T10', d: '30 out 2026', img: 'mundo', src: 'Disrupt Africa', url: U.daTalent,
  title: 'Na Nigéria, a Talent Nation forma engenheiros de IA sem cobrar do aluno e recebe das empresas que os contratam',
  sum: 'A plataforma recebeu mais de 63 mil candidaturas em 18 meses e aceita menos de 3% delas. O valor da rodada não foi divulgado.',
  body: [
    'As empresas clientes pagam pelos engenheiros, e esse dinheiro financia a formação das novas turmas. São cerca de 1.400 alunos em 9 unidades, em 6 cidades. A rodada pré-seed foi liderada pela Enza Capital e pela LocalGlobe, segundo o Disrupt Africa.'
  ] },

/* ===================== NO BRASIL ===================== */
{ id: 'pix-instabilidade-sexta-6-novembro', cat: 'brasil', own: false, t: '2026-11-06T20', d: '6 nov 2026', img: 'celular', src: 'O Tempo', url: U.pixOTempo,
  title: 'Pix fica instável na noite de sexta (6), com cerca de 11 mil relatos de falha no Downdetector',
  sum: 'Clientes de vários bancos e carteiras digitais relataram erro de rede e transações não concluídas. A causa não havia sido informada até a publicação da reportagem.',
  body: [
    'As queixas cresceram a partir das 18h40 e chegaram ao pico por volta das 19h10, segundo O Tempo. Entre as instituições citadas estão Banco do Brasil, Caixa, Bradesco, Itaú, Nubank, Inter e Mercado Pago. Até a publicação, o Banco Central não havia se manifestado, segundo o jornal.'
  ] },

{ id: 'nubank-mercado-pago-suspendem-cripto', cat: 'brasil', own: false, t: '2026-11-06T14', d: '6 nov 2026', img: 'mercado', src: 'CNN Brasil', url: U.criptoCnn,
  title: 'Nubank e Mercado Pago suspendem temporariamente depósitos e saques de criptomoedas',
  sum: 'O Nubank atribuiu a pausa a uma instabilidade num fornecedor externo de dados; o Mercado Pago citou instabilidades no sistema.',
  body: [
    'Segundo o Nubank, os ativos dos clientes estão protegidos e os demais produtos de cripto funcionam normalmente; no app, os recursos aparecem como temporariamente indisponíveis. O Mercado Pago disse que os depósitos serão creditados com atraso, segundo a CNN Brasil.'
  ] },

{ id: 'govbr-email-recuperacao-56-milhoes', cat: 'brasil', own: false, t: '2026-11-06T18', d: '6 nov 2026', img: 'celular', src: 'CryptoID', url: U.govbrEmail,
  title: 'Gov.br avisa 56 milhões de usuários para cadastrar e-mail de recuperação e não perder o acesso à conta',
  sum: 'O alerta vai para quem usa verificação em duas etapas sem e-mail de recuperação. As mensagens chegam pela caixa postal do gov.br e pelo WhatsApp.',
  body: [
    'Com o e-mail cadastrado, quem perde o celular pode recuperar a conta pelo app, com reconhecimento facial e um código enviado para esse endereço. Outra opção é usar a Carteira de Identidade Nacional, lendo o QR code do documento. O gov.br tem mais de 179 milhões de usuários, segundo a reportagem.'
  ] },

{ id: 'black-friday-fraudes-serasa', cat: 'brasil', own: false, t: '2026-11-05T13', d: '5 nov 2026', img: 'mercado', src: 'Olhar Digital', url: U.blackFridaySerasa,
  title: 'Black Friday de 2025 teve 29,7 mil tentativas de fraude em quatro dias, aponta a Serasa Experian',
  sum: 'O valor em jogo foi de R$ 30,7 milhões. Em pesquisa de setembro, 42% dos consumidores disseram temer golpes com Pix.',
  body: [
    'Cada tentativa envolveu em média R$ 1.034,77, cerca de 45% acima de um pedido comum. As tentativas se concentram entre meia-noite e 5h. Na pesquisa, feita com 1.480 pessoas, 53% disseram temer sites falsos, e 86% já desistiram de uma compra por medo de fraude.'
  ] },

{ id: 'anpd-presidente-interino', cat: 'brasil', own: false, t: '2026-11-06T12', d: '6 nov 2026', img: 'plataforma', src: 'Mobile Time', url: U.anpdMiola,
  title: 'Iagê Miola assume interinamente a presidência da ANPD, órgão que fiscaliza a proteção de dados',
  sum: 'O mandato de Waldemar Gonçalves terminou, e Miola, diretor desde janeiro de 2025, fica no cargo até que um novo nome seja aprovado pelo Senado.',
  body: [
    'O novo presidente da autoridade é indicado pelo presidente da República e precisa passar pelo Senado. A reportagem do Mobile Time não cita um nome para o cargo.'
  ] },

{ id: 'fgc-acesso-indevido-dados', cat: 'brasil', own: true, t: '2026-11-05T17', d: '5 nov 2026', img: 'celular', read: 2,
  title: 'FGC confirma acesso indevido a dados de clientes e alerta para golpes de quem se passa pelo fundo',
  sum: 'Foram expostos nome, CPF, e-mail e data de nascimento, entre outros dados. O FGC diz não pedir senha, código nem taxa para liberar a garantia.',
  body: [
    'O Fundo Garantidor de Créditos (FGC) informou nesta quinta-feira (5) que houve acesso não autorizado a dados pessoais de clientes, segundo o Olhar Digital e o InfoMoney. A suspeita de invasão foi identificada em 26 de outubro. O número de pessoas afetadas não foi divulgado.',
    '## Quais dados',
    'Foram expostos nome, CPF, e-mail e data de nascimento. Também os impostos retidos no pagamento da garantia e o canal pelo qual o cliente investiu na instituição liquidada. O FGC não informou de quais instituições liquidadas vêm os registros.',
    '## O que o fundo fez',
    'O FGC restringiu o acesso aos ambientes afetados, desativou contas indevidas, reforçou o monitoramento, contratou empresas especializadas, avisou os clientes afetados e comunicou o caso à ANPD. Segundo o fundo, até agora não há indício de divulgação ou uso indevido dos dados nem de prejuízo financeiro.',
    '## Como se proteger',
    'O alerta é para ligações, mensagens e e-mails de pessoas que dizem falar em nome do FGC. Segundo o InfoMoney, o app do FGC é um canal oficial, e o fundo não pede senhas, códigos, taxas para liberar a garantia nem instalação de apps. O FGC também não procura clientes por WhatsApp ou SMS e não usa intermediários.'
  ],
  box: { type: 'facts', title: 'O caso do FGC', rows: [['Identificação', '26 de outubro'], ['Dados expostos', 'Nome, CPF, e-mail e data de nascimento'], ['Afetados', 'Número não divulgado'], ['Comunicado à', 'ANPD'], ['O FGC não pede', 'Senha, código ou taxa']] },
  sources: [['Olhar Digital', U.fgcOlhar], ['InfoMoney', U.fgcInfoMoney]] },

{ id: 'anatel-roaming-rodovias-pequenas-cidades', cat: 'brasil', own: false, t: '2026-11-05T11', d: '5 nov 2026', img: 'celular', src: 'Mobile Time', url: U.anatelRoaming,
  title: 'Anatel torna obrigatório o roaming em rodovias e em cidades com menos de 30 mil habitantes',
  sum: 'Quem estiver fora da área da sua operadora poderá usar a rede de outra, com a cobrança do próprio plano. Os prazos vão de 90 a 210 dias.',
  body: [
    'A decisão foi aprovada por unanimidade na quarta (4). Os prazos contam a partir da entrada em vigor, 30 dias depois da publicação no Diário Oficial: 90 dias para os municípios pequenos, 150 para localidades fora da sede e 210 para rodovias federais e estaduais. Motivo econômico não serve para pedir dispensa.'
  ] },

{ id: 'primova-pay-25-milhoes-recargas', cat: 'brasil', own: false, t: '2026-11-05T10', d: '5 nov 2026', img: 'mercado', src: 'Mobile Time', url: U.primova,
  title: 'Primova Pay passa de 25 milhões de recargas de transporte público em um ano',
  sum: 'Foram 25,8 milhões de recargas entre outubro de 2025 e outubro de 2026, alta de 28,3%. O serviço está em 14 cidades.',
  body: [
    'A empresa liga operadoras de transporte a apps de bancos e carteiras digitais, e a recarga também pode ser feita pelo WhatsApp, com Pix. A média é de 2,1 milhões por mês. O grupo também é dono do app Cittamobi.'
  ] },

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

];
