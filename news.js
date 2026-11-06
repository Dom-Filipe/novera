/* ============================================================
   NOVERA: conteúdo do site. Edite este arquivo e rode `node build.js`.
   Regras completas em ATUALIZACAO.md.
   ============================================================ */

/* Topo do site: data da edição e destaques da faixa de cima */
const META = {
  /* Endereço público do site, sem barra no final. Usado nos links das redes sociais. */
  siteUrl: 'https://novera-sepia.vercel.app',
  dataExtenso: 'Sexta-feira, 6 de novembro de 2026',
  edicao: '6 nov 2026',
  /* Faixa do topo: 1 a 3 itens [rótulo, texto curto]. Use só fatos que estão em notícias do site. */
  destaques: [
    ['Em alta', 'YouTube muda o app no Android e no iOS e tira a aba Inscrições da barra de baixo'],
    ['Alerta', 'FGC confirma acesso indevido a dados de clientes e diz que não pede senha, código nem taxa'],
    ['Domingo (8)', 'Enem 2026: documento digital só vale aberto no app oficial; print ou foto não são aceitos']
  ]
};

/* Home: destaque principal, dois laterais e três da faixa de baixo (IDs de notícias "own: true") */
const FEATURED = {
  lead: 'youtube-redesign-sem-aba-inscricoes',
  side: ['fgc-acesso-indevido-dados', 'claude-financas-pessoais-beta'],
  also: ['airbnb-3tri-2026', 'edits-instagram-mac', 'maasi-babas-india']
};

/* Home: "Escolhas da redação" (5 IDs) */
const PICKS = ['anatel-bloqueio-sms-sem-cadastro', 'enem-2026-documentos-digitais-celular', 'gta-6-lancamento-19-novembro', 'netflix-ai-discover-teste', 'medikea-teleconsulta-clinicas-proprias'];

const U = {
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

{ id: 'escape-academy-2-void-breaker-xbox', cat: 'lancamentos', own: false, t: '2026-11-05T10', d: '5 nov 2026', img: 'tecnologia', src: 'Xbox Wire', url: U.xboxSemana,
  title: 'Escape Academy 2 e VOID/BREAKER chegam ao Xbox e ao PC nesta semana, entre mais de 30 lançamentos',
  sum: 'VOID/BREAKER saiu na quarta (4), por US$ 29,99, e Escape Academy 2: Back 2 School, na quinta (5), por US$ 19,99.',
  body: [
    'Escape Academy 2 é um jogo de salas de fuga, para jogar sozinho ou em dupla. VOID/BREAKER é um jogo de tiro em primeira pessoa em que o jogador tenta escapar de um ciclo criado por uma IA hostil. A semana tem mais de 30 lançamentos no Xbox, segundo o Xbox Wire. Os preços estão em dólar, e a fonte não trata do Brasil.'
  ] },

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

{ id: 'zelda-notes-ocarina-of-time', cat: 'lancamentos', own: false, t: '2026-11-04T15', d: '4 nov 2026', img: 'celular', src: 'Game Overdrive', url: U.zeldaNotes,
  title: 'Zelda Notes ganha ocarina virtual e quiz com mais de 2.000 perguntas para o novo Ocarina of Time',
  sum: 'Os recursos ficam dentro do Nintendo Switch App e são gratuitos, sem exigir assinatura do Nintendo Switch Online.',
  body: [
    'É preciso ter o jogo no Switch 2, na versão 1.1.1 ou mais nova, além de conta Nintendo vinculada, dados salvos e internet. O app funciona em Android 9.0 ou mais novo e em iOS 16.0 ou mais novo.',
    'Na ocarina, o jogador toca pela tela e pode compartilhar partituras por QR code. O quiz dá uma tentativa grátis por dia, e rúpias do jogo compram outras. A fonte não confirma a disponibilidade do app no Brasil.'
  ] },

{ id: 'affinity-ipad-gratis', cat: 'lancamentos', own: false, t: '2026-11-02T14', d: '2 nov 2026', img: 'arte', src: '9to5Mac', url: U.affinityIpad,
  title: 'Canva lança o Affinity para iPad, app gratuito para pessoas físicas que junta foto, vetor, desenho e diagramação',
  sum: 'O app substitui os antigos Affinity Photo, Designer e Publisher no tablet e é download grátis na App Store.',
  body: [
    'O Affinity para iPad tem quatro módulos: Sketch, Vector, Photo e Layout, com edição de arquivos RAW, documentos de várias páginas e suporte aos recursos do Apple Pencil Pro. Há funções de IA, como expandir a imagem e separar uma imagem plana em camadas. Segundo o 9to5Mac, a versão para computador passou de 7 milhões de cadastros em um ano. A reportagem não trata de preços para empresas nem cita o Brasil.'
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

{ id: 'apple-music-selfie-sing-beta', cat: 'atualizacoes', own: false, t: '2026-11-04T14', d: '4 nov 2026', img: 'celular', src: '9to5Mac', url: U.appleMusicSelfie,
  title: 'Teste do iOS 27.3 traz ao Apple Music o Selfie Sing, que grava vídeo de karaokê com a câmera frontal',
  sum: 'O recurso está na versão beta para desenvolvedores. A versão final do iOS 27.3 é esperada para o mês que vem.',
  body: [
    'O Selfie Sing amplia o modo karaokê do Apple Music e gera vídeos para compartilhar em outras redes. No modo paisagem, a capa animada da música passa a se estender pela tela da letra. Por ser teste, o recurso pode mudar até o lançamento, e a fonte não trata do Brasil.'
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

/* ===================== IA ===================== */
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

/* ===================== STARTUPS ===================== */
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

{ id: 'fal-16-bilhoes', cat: 'startups', own: false, t: '2026-11-03T15', d: '3 nov 2026', img: 'tecnologia', src: 'TechCrunch', url: U.falValuation,
  title: 'Fal, que roda modelos de IA para vídeo e imagem, capta US$ 1,3 bilhão e dobra de valor, para US$ 16 bilhões',
  sum: 'A rodada foi liderada pela Bessemer, com participação da Nvidia. Em abril, a empresa valia US$ 8 bilhões, segundo a Bloomberg.',
  body: [
    'Fundada em 2021 em San Francisco, a Fal hospeda e executa modelos de IA que geram vídeo, imagem e áudio. A série F foi anunciada junto com a série E, liderada pela Sequoia, e as duas somam US$ 1,65 bilhão, segundo o TechCrunch.'
  ] },

/* ===================== IDEIAS PARA O BRASIL ===================== */
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

{ id: 'curebay-clinicas-rurais-india', cat: 'ideias', own: false, t: '2026-10-22T10', d: '22 out 2026', img: 'ciencia', src: 'Inc42', url: U.curebay,
  title: 'Na Índia, a CureBay leva clínicas com triagem por IA e plano de assinatura ao interior e capta ₹ 100 crore',
  sum: 'A rede quer passar de 250 para 800 clínicas rurais em dois a três anos. A empresa diz ter atendido 1,2 milhão de pacientes.',
  body: [
    'As clínicas trabalham com agentes de saúde locais e ligam o paciente a médicos, hospitais, laboratórios e farmácias por uma plataforma digital. A assinatura Kavach cobre consultas e ajuda com remédios, exames e parte das internações, sem preço divulgado. A rodada foi liderada pela IvyCap Ventures e inclui dívida. A empresa ainda dá prejuízo, segundo o Inc42.'
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

];
