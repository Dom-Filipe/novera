/* ============================================================
   NOVERA: conteúdo do site. Edite este arquivo e rode `node build.js`.
   Regras completas em ATUALIZACAO.md.
   ============================================================ */

/* Topo do site: data da edição e destaques da faixa de cima */
const META = {
  /* Endereço público do site, sem barra no final. Usado nos links das redes sociais. */
  siteUrl: 'https://novera-sepia.vercel.app',
  dataExtenso: 'Sábado, 31 de outubro de 2026',
  edicao: '31 out 2026',
  /* Faixa do topo: 1 a 3 itens [rótulo, texto curto]. Use só fatos que estão em notícias do site. */
  destaques: [
    ['Cripto', 'Terminou o prazo da licença do BC: levantamentos contam de 63 a 67 pedidos'],
    ['Segunda (2)', 'Novas regras do SAC: atendimento humano das 8h às 20h, todos os dias'],
    ['Em alta', 'Phantom Blade Zero passa de 700 mil jogadores simultâneos no Steam']
  ]
};

/* Home: destaque principal, dois laterais e três da faixa de baixo (IDs de notícias "own: true") */
const FEATURED = {
  lead: 'cripto-licenca-prazo-encerrado-pedidos',
  side: ['decreto-sac-apps-senacon', 'gemini-editar-arquivos-no-chat'],
  also: ['phantom-blade-zero-ps5-pc', 'lagos-life-jogo-patrocinado', 'doordash-compra-instacart']
};

/* Home: "Escolhas da redação" (5 IDs) */
const PICKS = ['anatel-biometria-facial-linhas', 'alphabet-3tri-2026', 'chatgpt-dots-imessage-rcs', 'meta-style-sketch-moda-ia', 'medikea-teleconsulta-clinicas-proprias'];

const U = {
  /* Atualização de 31 out 2026 */
  /* Lançamentos */
  ktPhantom: 'https://kotaku.com/phantom-blade-zero-just-rocketed-onto-steam-with-700000-concurrent-players-2000751005',
  cmtPhantom: 'https://cenariomt.com.br/jogos/games/phantom-blade-zero-libera-no-brasil-veja-precos/',
  mgbSaints: 'https://www.mobilegamer.com.br/en/2026/10/saints-row-the-third-remastered-android-ios-launch-prices.html',
  ttMinecraft: 'https://www.techtimes.com/articles/329549/20261027/minecrafts-biggest-visual-overhaul-now-default-switch-2-heres-everything-that-comes-it.htm',
  tcGranola: 'https://techcrunch.com/2026/10/29/granola-crunches-up-a-dictation-feature-to-compete-with-wispr',
  /* Atualizações */
  ctRedditLogin: 'https://canaltech.com.br/apps/fim-do-acesso-livre-reddit-vai-exigir-login-ate-de-quem-so-quer-ler/',
  ctWaPagamentos: 'https://canaltech.com.br/apps/whatsapp-prepara-central-de-cartoes-e-compras-no-app/',
  /* IA */
  odGeminiArq: 'https://olhardigital.com.br/2026/10/29/inteligencia-artificial/gemini-agora-permite-editar-pdfs-documentos-e-planilhas-dentro-do-chat',
  ahGeminiArq: 'https://www.androidheadlines.com/2026/10/gemini-edit-files-docs-pdf-directly-in-chat.html',
  m9China: 'https://9to5mac.com/2026/10/30/apple-confirms-ios-27-3-beta-is-coming-next-week-with-apple-intelligence-in-china/',
  tcMistral: 'https://techcrunch.com/2026/10/29/mistral-releases-weights-for-its-trillion-parameter-ai-model-targeting-cybersecurity/',
  /* Startups */
  gnRoblox: 'https://www.gaming.net/roblox-q3-revenue-rises-16-as-bookings-fall-12-to-1-7-billion/',
  secPinterest: 'https://www.sec.gov/Archives/edgar/data/0001506293/000150629326000151/q3-26xpressrelease.htm',
  m9Taiwan: 'https://9to5mac.com/2026/10/29/apple-cuts-app-store-commission-in-taiwan-following-regulatory-discussions',
  nfBinance: 'https://neofeed.com.br/negocios/maior-ataque-hacker-da-historia-deixa-rombo-de-us-63-bilhoes-na-binance/',
  /* Ideias para o Brasil */
  tlLagos: 'https://www.techloy.com/lagos-life-game-vatar-funding-business/',
  cdLagos: 'https://thecondia.com/vatar-lagos-life-raises-500000-pre-seed',
  bnRently: 'https://www.bernama.com/tv/news.php?id=2626473',
  tssGhanem: 'https://thestartupscene.me/INVESTMENTS/Saudi-Proptech-Ghanem-Raises-1-5-Million-Pre-Seed-Extension',
  incHunar: 'https://inc42.com/buzz/hunar-raises-₹40-cr-to-scale-agentic-ai-for-frontline-hiring/',
  /* No Brasil */
  exCripto63: 'https://exame.com/future-of-money/bitget-e-mais-empresas-pedem-licenca-cripto-ao-bc-na-data-final-veja-a-lista-completa/',
  bnCripto67: 'https://bitnoticias.com.br/mercado/bitget-e-mais-4-empresas-pedem-licenca-cripto-ao-banco-central-lista-chega-a-67-pedidos',
  lcCripto40: 'https://livecoins.com.br/mercado-esperava-ate-200-empresas-mas-cerca-de-40-pediram-autorizacao-para-operar-com-criptoativos-no-brasil/',
  mjSac: 'https://www.gov.br/mj/pt-br/assuntos/noticias/novo-decreto-do-sac-amplia-protecao-ao-consumidor-e-estabelece-regras-de-atendimento',
  thSac: 'https://tribunahoje.com/noticias/cidades/2026/10/30/197600-novo-decreto-amplia-protecao-ao-cliente',
  abMove: 'https://agenciabrasil.ebc.com.br/economia/noticia/2026-10/governo-autoriza-contrato-de-r-30-bi-para-motoristas-de-aplicativos',
  tiBiocatch: 'https://tiinside.com.br/30/10/2026/golpes-bancarios-de-personificacao-e-fraudes-com-aparelhos-roubados-crescem-140-e-340-no-brasil/',
  /* Atualização de 30 out 2026 */
  /* Lançamentos */
  tcStyle: 'https://techcrunch.com/2026/10/29/meta-quietly-launches-an-ai-fashion-app-called-style-sketch/',
  feStyle: 'https://www.fonearena.com/blog/496078/meta-style-sketch-ai-fashion-app.html',
  mvWolf: 'https://monstervine.com/2026/10/the-wolf-among-us-remastered-launch-choice-carryover/',
  ftTitanium: 'https://www.fellowtraveller.games/blog/titanium-court-raises-the-curtain-on-console-and-mobile',
  b2gOnePiece: 'https://www.back2gaming.com/games/one-piece-grand-gourmet-launches-on-nintendo-switch-2-switch-pc-and-mobile/',
  /* Atualizações */
  ctGloboplay: 'https://canaltech.com.br/apps/globoplay-lanca-novos-planos-com-sportv-incluso-por-r-1990-veja-o-que-muda/',
  mmGloboplay: 'https://www.meioemensagem.com.br/midia/globoplay-muda-assinaturas-e-amplia-foco-em-esporte',
  smtXFotos: 'https://www.socialmediatoday.com/news/x-lets-users-share-credit-on-reposted-images/873100/',
  ctGFotos: 'https://canaltech.com.br/apps/google-fotos-ganha-visual-redesenhado-e-agora-deixa-usuario-personalizar-aba-albuns/',
  wbiConfig: 'https://wabetainfo.com/whatsapp-is-testing-a-new-settings-design-on-android/',
  /* IA */
  bcProLimites: 'https://www.bleepingcomputer.com/news/artificial-intelligence/openai-doubles-chatgpt-pro-usage-limits-after-backlash-over-planned-50-percent-cut/',
  tcAlexa: 'https://techcrunch.com/2026/10/29/amazon-updates-alexa-to-help-you-manage-shopping-lists-and-subscriptions-and-update-delivery-instructions/',
  acXreal: 'https://www.androidcentral.com/gaming/virtual-reality/launch-day-xreal-aura-is-here',
  /* Startups */
  tcDoorDash: 'https://techcrunch.com/2026/10/29/doordash-to-acquire-instacart-for-17b/',
  nfDoorDash: 'https://neofeed.com.br/negocios/a-aposta-de-us-17-bilhoes-da-doordash-para-fazer-o-app-do-jantar-ser-o-app-das-compras-da-semana/',
  secDoorDash: 'https://www.sec.gov/Archives/edgar/data/0001792789/000179278926000062/proddashex991-pressrelease.htm',
  bwAmazon: 'https://www.businesswire.com/news/home/20261028373648/en/Amazon.com-Announces-Third-Quarter-Results',
  secReddit: 'https://www.sec.gov/Archives/edgar/data/0001713445/000171344526000114/earningspressreleaseq326.htm',
  mrCoreia: 'https://www.macrumors.com/2026/10/28/south-korea-rules-against-apple/',
  blTractian: 'https://www.bloomberglinea.com.br/startups/rodadas-da-semana-tractian-chega-a-valuation-de-us-14-bilhao-com-nova-captacao/',
  /* Ideias para o Brasil */
  tmMedikea: 'https://techmoran.com/2026/10/29/tanzanian-health-startup-medikea-raises-1-2-million-to-own-care-not-just-connect-it',
  cdMedikea: 'https://thecondia.com/medikea-raises-1-2m-pre-seed-funding/',
  wmAqar: 'https://www.wamda.com/ar/2026/10/egyptian-proptech-aqar-exit-attracts-investment-2-million-valuation',
  cxoTravclan: 'https://www.cxodigitalpulse.com/?p=63955',
  /* No Brasil */
  bnCripto39: 'https://bitnoticias.com.br/mercado/bradesco-b3-e-foxbit-avancam-na-corrida-pela-licenca-cripto-do-banco-central-lista-chega-a-39-empresas',
  bnCripto33: 'https://bitnoticias.com.br/noticias/coinbase-nubank-e-braza-bank-banco-central-33-empresas-cripto',
  abPixMei: 'https://www.dgabc.com.br/Noticia/4365781/governo-alerta-que-cadastramento-para-o-pix-mei-ainda-nao-comecou',
  sbtMwPay: 'https://sbtnews.sbt.com.br/noticia/economia/banco-central-liquida-mw-pay-por-graves-irregularidades',
  otNoveNove: 'https://otempo.com.br/minas-sa/2026/10/29/com-1-8-mil-restaurantes-99food-inicia-operacao-em-uberlandia-e-araguari',
  tiPicpay: 'https://tiinside.com.br/27/10/2026/picpay-lanca-vendedor-virtual-com-ia-no-whatsapp-e-ferramenta-gratuita-para-criar-lojas-online/',
  /* Atualização de 29 out 2026 */
  /* Lançamentos */
  mrIgTv: 'https://www.macrumors.com/2026/10/25/instagram-launches-apple-tv-app/',
  gzIgTv: 'https://www.gizmodo.com.br/instagram-chega-a-apple-tv-e-transforma-reels-em-entretenimento-para-a-tela-grande-72875',
  exIgTv: 'https://exame.com/tecnologia/instagram-chega-a-apple-tv-com-reels-e-videos-longos/',
  feFfi: 'https://www.fonearena.com/blog/495810/free-fire-india-launch-october-2026.html',
  pqFfi: 'https://www.pcquest.com/gaming/free-fire-india-launches-october-28-2026-with-free-download-links-for-android-and-ios-whats-new-12756712',
  egWaddle: 'https://www.engadget.com/2299227/meta-tamagotchi-like-ai-digital-pet-app-waddle-world/',
  /* Atualizações */
  wbiBackup: 'https://wabetainfo.com/whatsapp-is-rolling-out-a-redesigned-chat-backup-screen/',
  mbBackup: 'https://www.mobilebit.com.br/tecnologia/2026/10/28/whatsapp-nova-tela-backup/',
  wbiMidia: 'https://wabetainfo.com/whatsapp-is-testing-a-new-media-hub-for-the-ios-app/',
  g9Autofill: 'https://9to5google.com/2026/10/28/chrome-autofill-gemini/',
  ahMustEat: 'https://www.androidheadlines.com/2026/10/tiktok-turns-food-trends-into-local-restaurant-recommendations.html',
  tcReddit: 'https://techcrunch.com/2026/10/28/reddit-is-the-latest-platform-to-embrace-the-for-you-feed/',
  /* IA */
  gbCarbon: 'https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-carbon/',
  g9Carbon: 'https://9to5google.com/2026/10/28/gemini-4-carbon-announcement/',
  egDots: 'https://www.engadget.com/2300235/openai-now-lets-you-text-your-dot-agent/',
  m9Dots: 'https://9to5mac.com/2026/10/28/openai-expanding-chatgpt-dot-access-to-imessage-and-rcs/',
  dtDots: 'https://www.digitaltrends.com/computing/openai-now-lets-you-text-your-chatgpt-dot-agent-to-get-things-done/',
  g9Connected: 'https://9to5google.com/2026/10/28/gemini-google-connected-apps-platform/',
  /* Startups */
  abAlphabet: 'https://s206.q4cdn.com/479360582/files/doc_news/2026/Oct/28/attachments/2026q3-alphabet-earnings-release.pdf',
  crAlphabet: 'https://www.constellationr.com/insights/news/google-cloud-q3-revenue-103-alphabet-results-light',
  stAlphabet: 'https://www.stocktitan.net/articles/alphabet-q3-2026-earnings-google-cloud-doubles-search-slows',
  msResultados: 'https://news.microsoft.com/source/2026/10/28/microsoft-announces-first-quarter-results-2/',
  stGaio: 'https://startups.com.br/negocios/rodada-de-investimento/g4-lidera-seed-de-r-55m-da-gaio-de-social-selling/',
  /* Ideias para o Brasil */
  stkFurtilo: 'https://startuptalky.com/news/daily-indian-funding-roundup-key-news-21-october-2026/',
  uniFurtilo: 'https://www.uniindia.com/business-wire-india/furtilo-raises-seed-funding-to-deliver-from-local-shops-in-500-small-towns-102251/219631',
  enAstro: 'https://entrackr.com/fintrackr/astrotalks-profit-jumps-10x-to-rs-222-cr-in-fy26-overseas-biz-grows-26x-12761666',
  enZorit: 'https://entrackr.com/news/bijnis-rebrands-as-zorit-raises-rs-27-cr-led-by-sparrow-capital-12762019',
  /* No Brasil */
  anBio: 'https://www.gov.br/anatel/pt-br/assuntos/noticias/anatel-aprova-validacao-biometrica-obrigatoria-para-usuarios-de-telefonia-movel',
  ttBio: 'https://teletime.com.br/28/10/2026/anatel-torna-reconhecimento-facial-obrigatorio-na-validacao-de-linhas-moveis/',
  tsBio: 'https://telesintese.com.br/biometria-obrigatoria-alcanca-mvnos-credenciadas-e-meis/',
  ctBio: 'https://canaltech.com.br/seguranca/anatel-vai-exigir-biometria-para-manter-numero-de-telefone-no-brasil/',
  mtUberMoto: 'https://www.mobiletime.com.br/noticias/28/10/2026/uber-motos-3-km/',
  ctUberTaxi: 'https://canaltech.com.br/apps/uber-amplia-servico-de-taxi-para-12-cidades-confira-lista/',
  mbUberTaxi: 'https://www.mobilebit.com.br/tecnologia/2026/10/28/uber-taxi-12-novas-cidades/',
  mtAnpd: 'https://www.mobiletime.com.br/noticias/28/10/2026/anpd-guia-eca-digital/',
  mtSerasa: 'https://www.mobiletime.com.br/noticias/28/10/2026/serasa-black-friday/',
  /* Atualização de 28 out 2026 */
  /* Lançamentos */
  odOpera: 'https://olhardigital.com.br/2026/10/27/internet-e-redes-sociais/opera-lanca-recurso-que-roda-inteligencia-artificial-no-seu-pc',
  /* Atualizações */
  tcDiscord: 'https://techcrunch.com/2026/10/27/discord-is-making-its-public-communities-more-searchable-and-people-have-concerns/',
  wbiOrgs: 'https://wabetainfo.com/whatsapp-is-testing-organizations-to-manage-large-communities/',
  /* IA */
  tcIos272: 'https://techcrunch.com/2026/10/27/apple-rolls-out-ios-27-2-with-new-siri-ai-languages-and-security-fixes/',
  m9Icloud: 'https://9to5mac.com/2026/10/27/icloud-mail-and-calendar-plugins-now-work-with-chatgpt/',
  tcGenie: 'https://techcrunch.com/2026/10/27/googles-genie-4-world-model-adds-audio-more-realistic-worlds-and-real-time-steering/',
  /* Startups */
  tcAntVcs: 'https://techcrunch.com/2026/10/27/vcs-will-make-billions-on-anthropics-ipo-but-amazon-is-set-to-make-much-much-more/',
  /* Ideias para o Brasil */
  stMaasi: 'https://startuptalky.com/news/maasi-raises-6-cr-pre-seed-nanny-platform/',
  eiMaasi: 'https://india.entrepreneur.com/business-news/maasi-raises-rs-6-crore-in-pre-seed-round-led-by-better-capital-antler-india',
  /* No Brasil */
  ffCripto: 'https://financefeeds.com/binance-files-for-brazil-crypto-authorization-ahead-of-oct-30-deadline/',
  bnCripto26: 'https://bitnoticias.com.br/regulacao/binance-pede-licenca-banco-central-psav-brasil/',
  bnCripto10: 'https://bitnoticias.com.br/noticias/licenca-cripto-do-banco-central-qual-exchange-pediu-quem-vai-pedir-e-quem-esta-saindo-do-brasil',
  /* Atualização de 27 out 2026: estreia do formato de aplicativos */
  /* Lançamentos */
  ahNms: 'https://antihype.com.br/c/games/no-mans-sky-iphone-ipad-lancamento-preco/',
  jwMh: 'https://www.jwave.com.br/2026/10/monster-hunter-outlanders-chega-aos-celulares-em-29-de-outubro/',
  /* IA */
  ctSiri: 'https://canaltech.com.br/apps/atualize-ja-apple-libera-ios-272-com-siri-ai-em-portugues/',
  ihSiri: 'https://ihelpbr.com/ios-27-2-e-lancado-com-siri-ai-em-portugues/',
  bcTerra: 'https://www.bleepingcomputer.com/news/artificial-intelligence/openai-launches-gpt-61-terra-with-3x-faster-ai-agents-50-percent-lower-pricing/',
  /* Startups */
  imAnt27: 'https://www.infomoney.com.br/mercados/anthropic-alerta-para-riscos-existenciais-em-aguardado-pedido-de-ipo/',
  fortuneAnt27: 'https://fortune.com/2026/10/26/anthropics-s-1/',
  mtItau: 'https://www.mobiletime.com.br/noticias/26/10/2026/itau-anuncia-acordo-para/',
  /* Ideias para o Brasil */
  tcMatiks: 'https://techcrunch.com/2026/10/26/matiks-raises-10m-to-expand-its-math-and-puzzle-gaming-platform/',
  elSathee: 'https://digitallearning.eletsonline.com/2026/10/free-ai-tutors-iits-sathee-ndli-fermi-jee-neet-cuet-gate-preparation',
  incCent: 'https://inc42.com/buzz/cent-raises-15-mn-to-scale-ai-led-preventive-healthcare-platform',
  /* No Brasil */
  ttVivo: 'https://teletime.com.br/26/10/2026/vivo-parceria-starlink-vivo-satelite/'
};

const NEWS = [
/* ===================== LANÇAMENTOS ===================== */
{ id: 'phantom-blade-zero-ps5-pc', cat: 'lancamentos', own: true, t: '2026-10-29T12', d: '29 out 2026', img: 'tecnologia', read: 2,
  title: 'Phantom Blade Zero, jogo de ação do estúdio chinês S-Game, chega ao PS5 e ao PC e passa de 700 mil jogadores simultâneos no Steam',
  sum: 'Na PlayStation Store brasileira, a edição padrão custa R$ 229,90. O jogo tem menus e legendas em português, mas não tem dublagem.',
  body: [
    'O Phantom Blade Zero, jogo de ação do estúdio chinês S-Game, foi lançado em 29 de outubro para PlayStation 5 e PC, nas lojas Steam e Epic Games Store. No Brasil, o jogo foi liberado às 23h de 28 de outubro, no horário de Brasília, segundo o Cenário MT.',
    '## Os números da estreia',
    'Em menos de 24 horas, o jogo passou de 700 mil jogadores ao mesmo tempo no Steam, segundo o Kotaku. Pelo levantamento do site, é a 15ª maior estreia da história da loja nesse critério. Antes, o estúdio só tinha feito jogos para celular.',
    '## Preço e idioma',
    'Na PlayStation Store brasileira, a edição padrão custa R$ 229,90, e a Deluxe Digital, R$ 279,90. A Deluxe traz dois trajes, um livro de artes digital e a trilha sonora. A fonte não informa o preço no PC. O jogo tem menus e legendas em português do Brasil, sem dublagem, segundo o Cenário MT.',
    '## Onde não está',
    'Não há versão anunciada para Xbox nem para Nintendo Switch 2, e o jogo não faz parte do Game Pass.'
  ],
  box: { type: 'facts', title: 'Phantom Blade Zero', rows: [['Lançamento', '29 de outubro'], ['Plataformas', 'PS5 e PC'], ['Preço no Brasil (PS5)', 'R$ 229,90 (padrão)'], ['Pico no Steam', 'Mais de 700 mil jogadores'], ['Português', 'Menus e legendas, sem dublagem']] },
  sources: [['Kotaku', U.ktPhantom], ['Cenário MT', U.cmtPhantom]] },

{ id: 'saints-row-third-remastered-celular', cat: 'lancamentos', own: false, t: '2026-10-29T14', d: '29 out 2026', img: 'celular', src: 'Mobile Gamer Brasil', url: U.mgbSaints,
  title: 'Saints Row: The Third Remastered chega ao iPhone e ao Android, com preço em reais',
  sum: 'Na loja brasileira, o jogo custa R$ 109 na App Store e R$ 59,99 no Google Play. É vendido em compra única e traz todos os conteúdos extras.',
  body: [
    'A versão para celular é da Feral Interactive e tem campanha cooperativa online e suporte a controles. No Android, exige a versão 13 ou mais nova e 19,3 GB livres; no iPhone, iOS 18 e iPhone 11 ou mais novo. O português não aparece entre os idiomas do jogo, segundo o Mobile Gamer Brasil.'
  ] },

{ id: 'minecraft-switch-2-versao-nativa', cat: 'lancamentos', own: false, t: '2026-10-27T14', d: '27 out 2026', img: 'tecnologia', src: 'Tech Times', url: U.ttMinecraft,
  title: 'Minecraft ganha versão própria para o Nintendo Switch 2, com o visual Vibrant Visuals ligado de fábrica',
  sum: 'Quem tem a versão digital do Switch 1 pode atualizar de graça na maioria dos países até 31 de janeiro de 2027. Os mundos salvos são transferidos.',
  body: [
    'O Vibrant Visuals traz luz direcional, névoa e sombras em tempo real, e dá para voltar ao visual clássico. O modo não funciona em tela dividida. A fonte não informa o preço nem confirma as condições no Brasil, segundo o Tech Times.'
  ] },

{ id: 'granola-ditado-por-voz-mac', cat: 'lancamentos', own: false, t: '2026-10-29T16', d: '29 out 2026', img: 'tecnologia', src: 'TechCrunch', url: U.tcGranola,
  title: 'Granola, app de anotações de reuniões, lança ditado por voz grátis e sem limite no Mac',
  sum: 'O usuário aperta a tecla Fn, fala, e o texto entra já formatado em qualquer app. As versões para iPhone e Windows chegam depois.',
  body: [
    'O recurso vale para todos os planos, sem limite de palavras. A Granola é avaliada em US$ 1,5 bilhão e concorre com o Wispr, avaliado em US$ 2 bilhões, segundo o TechCrunch. A reportagem não fala em países.'
  ] },

{ id: 'meta-style-sketch-moda-ia', cat: 'lancamentos', own: true, t: '2026-10-29T15', d: '29 out 2026', img: 'celular', read: 2,
  title: 'Meta lança o Style Sketch, app de moda com IA que monta looks com fotos do Instagram, só em três países da Ásia',
  sum: 'O app para Android e iPhone cria um guarda-roupa virtual, sugere combinações e mostra as roupas num modelo parecido com o usuário. Está só na Indonésia, em Singapura e na Tailândia.',
  body: [
    'A Meta colocou nas lojas de apps o Style Sketch, um aplicativo de moda com inteligência artificial, sem anúncio oficial, segundo o TechCrunch. O app foi notado primeiro pelo consultor de redes sociais Matt Navarra, que publicou a descoberta no X.',
    '## Como funciona',
    'O app monta um guarda-roupa virtual a partir das fotos que o usuário publicou no Instagram. Também dá para incluir peças tirando uma foto, gravando um vídeo curto ou enviando imagens do celular. Com isso, ele sugere combinações de roupas de acordo com o estilo da pessoa.',
    'A prova virtual usa um modelo ajustado ao tipo de corpo e ao tom de pele do usuário, segundo a descrição do app citada pelo TechCrunch. Há ainda uma opção que monta looks em torno de uma peça escolhida e um planejador de viagem, que sugere roupas para cada dia conforme o destino, a duração, as atividades e a previsão do tempo.',
    '## Onde funciona',
    'O Style Sketch está disponível para Android e iOS, mas só na Indonésia, em Singapura e na Tailândia. A Meta não respondeu ao TechCrunch, e não se sabe se o app vai chegar a outros países. Não há informação sobre o Brasil.',
    'O app se junta a outros lançamentos recentes da Meta com IA, como o Waddle World, de bichinho virtual, também testado num só país.'
  ],
  box: { type: 'facts', title: 'Style Sketch', rows: [['Empresa', 'Meta'], ['Onde', 'Android e iOS'], ['Países', 'Indonésia, Singapura e Tailândia'], ['Brasil', 'Sem informação']] },
  sources: [['TechCrunch', U.tcStyle], ['FoneArena', U.feStyle]] },

{ id: 'wolf-among-us-remastered', cat: 'lancamentos', own: false, t: '2026-10-29T12', d: '29 out 2026', img: 'tecnologia', src: 'MonsterVine', url: U.mvWolf,
  title: 'The Wolf Among Us Remastered, da Telltale, chega ao PC, ao PS5 e ao Xbox por US$ 24,99',
  sum: 'A versão traz os 5 episódios, cenas que tinham sido cortadas e um modo em preto e branco. A versão para Switch sai depois.',
  body: [
    'Há desconto de 20% de lançamento até 12 de novembro, e quem tem o jogo original paga até 50% menos; os descontos não se somam. As escolhas feitas no jogo passam para The Wolf Among Us 2 para quem entrar com uma conta Telltale, segundo o MonsterVine.'
  ] },

{ id: 'titanium-court-celular-consoles', cat: 'lancamentos', own: false, t: '2026-10-29T10', d: '29 out 2026', img: 'celular', src: 'Fellow Traveller', url: U.ftTitanium,
  title: 'Titanium Court, jogo independente premiado, chega ao Android, ao iPhone, ao PS5 e ao Switch',
  sum: 'O jogo mistura quebra-cabeça de combinar peças, história em texto, RPG e defesa de base. Tinha saído no PC em abril.',
  body: [
    'O jogo é de AP Thomson e ganhou o principal prêmio do Independent Games Festival (IGF). A editora Fellow Traveller não informou preço nem idiomas nesta divulgação.'
  ] },

{ id: 'waddle-world-meta', cat: 'lancamentos', own: false, t: '2026-10-28T12', d: '28 out 2026', img: 'celular', src: 'Engadget', url: U.egWaddle,
  title: 'Meta testa Waddle World, app de bichinho virtual com IA, por enquanto só nas Filipinas',
  sum: 'O usuário choca um ovo, cuida do bichinho e escreve um diário. O bichinho responde com a ajuda da Meta AI e faz um desenho para o dia.',
  body: [
    'O app está na App Store e no Google Play, mas só nas Filipinas, segundo o Engadget. Tem minijogos que dão pontos para comprar comida e brinquedos para o bichinho. A Meta não confirmou o lançamento em outros países.'
  ] },

{ id: 'free-fire-india', cat: 'lancamentos', own: true, t: '2026-10-28T10', d: '28 out 2026', img: 'celular', read: 2,
  title: 'Garena lança o Free Fire India, versão do jogo feita só para a Índia, com limites para menores de idade',
  sum: 'O app separado é gratuito no Android e no iPhone. Menores de 18 anos precisam do consentimento dos pais, e os servidores ficam todos no país.',
  body: [
    'A Garena lançou em 28 de outubro o Free Fire India, versão do seu jogo feita para o mercado indiano, segundo o FoneArena e o PCQuest. É um app separado e gratuito, na App Store e no Google Play.',
    '## Regras para menores',
    'Jogadores com menos de 18 anos precisam do consentimento dos pais. O jogo também tem lembretes de pausa, limite de tempo de jogo e teto para gastos dentro do app. Segundo o FoneArena, a Garena diz que criou essas medidas depois de conversar com órgãos do governo indiano.',
    '## Servidores no país',
    'Os servidores ficam todos na Índia, e a empresa promete reforço na proteção de dados. O jogo foi ajustado para rodar em muitos modelos de celular. No lançamento, há um evento de Diwali, festa tradicional indiana, que vai até 15 de novembro.',
    'A Garena também planeja competições de esporte eletrônico na Índia, em nível amador, universitário e internacional, mas não divulgou parceiros nem torneios. A versão é exclusiva para o mercado indiano e não muda o Free Fire jogado no Brasil.'
  ],
  box: { type: 'facts', title: 'Free Fire India', rows: [['Lançamento', '28 de outubro'], ['Onde', 'Android e iOS, só na Índia'], ['Preço', 'Grátis'], ['Menores de 18', 'Precisam de consentimento dos pais'], ['Servidores', 'Todos na Índia']] },
  sources: [['FoneArena', U.feFfi], ['PCQuest', U.pqFfi]] },

{ id: 'monster-hunter-outlanders', cat: 'lancamentos', own: false, t: '2026-10-26T10', d: '26 out 2026', img: 'celular', src: 'JWave', url: U.jwMh,
  title: 'Monster Hunter Outlanders, jogo gratuito para celular, estreou na quinta (29) no Android e no iOS',
  sum: 'O jogo da franquia da Capcom foi desenvolvido pelo TiMi Studio, da Tencent. No Brasil, é publicado pela Garena, com pré-registro aberto.',
  body: [
    'O lançamento foi em 29 de outubro. O jogo é gratuito, com compras dentro do app. A versão para a China continental fica para 2027 ou depois.'
  ] },

/* ===================== ATUALIZAÇÕES ===================== */
{ id: 'reddit-login-para-ler-teste', cat: 'atualizacoes', own: false, t: '2026-10-30T15', d: '30 out 2026', img: 'plataforma', src: 'Canaltech', url: U.ctRedditLogin,
  title: 'Reddit vai testar exigir login até de quem só quer ler, em países fora dos EUA',
  sum: 'O teste começa ainda neste trimestre, em mercados que não foram informados. Hoje, cerca de 59% dos usuários diários do Reddit usam o serviço sem entrar na conta.',
  body: [
    'Contas sem nome real continuam permitidas, e o modo anônimo do app vai servir só para leitura. O presidente-executivo, Steve Huffman, quer deixar abertos a página inicial e os posts que chegam pelo Google, mas as exceções ainda não estão definidas. Não há confirmação de que o Brasil esteja no teste, segundo o Canaltech.'
  ] },

{ id: 'whatsapp-central-pagamentos-teste', cat: 'atualizacoes', own: false, t: '2026-10-29T16', d: '29 out 2026', img: 'celular', src: 'Canaltech', url: U.ctWaPagamentos,
  title: 'WhatsApp desenvolve área para guardar cartões e dados de entrega, ainda em teste inicial',
  sum: 'O recurso foi visto nas versões beta 2.26.43.7, no Android, e 26.33.10.70, no iPhone. Ainda não foi liberado nem para os testadores.',
  body: [
    'Os cartões ficariam na Central de Contas da Meta, com criptografia e separados do perfil, e os apps da Meta poderiam preencher endereço, e-mail e telefone nas compras. O pagamento pelo WhatsApp já funciona no Brasil, na Índia, em Singapura e no México, mas não há data nem confirmação de onde o novo recurso chega, segundo o Canaltech, com base no WABetaInfo.'
  ] },

{ id: 'globoplay-novos-planos-sportv', cat: 'atualizacoes', own: true, t: '2026-10-27T13', d: '27 out 2026', img: 'plataforma', read: 2,
  title: 'Globoplay muda os planos: sportv entra no plano mais barato, e o preço sobe',
  sum: 'O plano com anúncios passa a custar R$ 19,90 por mês na assinatura anual, ou R$ 29,90 no mensal. A mudança vale já para novos assinantes; os atuais migram aos poucos.',
  body: [
    'O Globoplay, serviço de streaming da Globo, reformulou os planos de assinatura e passou a incluir o canal sportv no plano de entrada, segundo o Canaltech. A mudança já vale para quem assina agora. Para quem já é assinante, a migração começa aos poucos em outubro.',
    '## Os novos preços',
    'O plano com anúncios custa R$ 29,90 por mês, ou R$ 238,80 no plano anual, o equivalente a 12 vezes de R$ 19,90. O Premium, sem anúncios, custa R$ 39,90 por mês, ou R$ 298,80 por ano (12 de R$ 24,90). O Premium + Premiere, que inclui os jogos do Premiere, sai por R$ 78,90 por mês, ou R$ 478,80 por ano (12 de R$ 39,90).',
    'No plano anual, o de entrada custava antes R$ 16,90 por mês, e o Premium, R$ 22,90, segundo o Meio & Mensagem.',
    '## O que cada plano tem',
    'O plano com anúncios tem imagem Full HD, até 2 telas ao mesmo tempo e não permite baixar vídeos. O Premium tem 4K, até 5 telas e até 25 downloads. Segundo o Canaltech, o catálogo é o mesmo nos dois; mudam os anúncios, o número de telas e o sportv em 4K.',
    'O plano de entrada passa a ter 20 canais por assinatura, entre eles sportv e Combate, segundo o Meio & Mensagem. O serviço também ganhou um novo formato de anúncio, que aparece na página inicial depois do login.'
  ],
  box: { type: 'table', title: 'Novos planos do Globoplay', head: ['Plano', 'Mensal', 'Anual'], rows: [['Com anúncios', 'R$ 29,90', 'R$ 238,80'], ['Premium', 'R$ 39,90', 'R$ 298,80'], ['Premium + Premiere', 'R$ 78,90', 'R$ 478,80']], note: 'Fonte: Canaltech.' },
  sources: [['Canaltech', U.ctGloboplay], ['Meio & Mensagem', U.mmGloboplay]] },

{ id: 'x-repostar-fotos-credito', cat: 'atualizacoes', own: false, t: '2026-10-28T14', d: '28 out 2026', img: 'plataforma', src: 'Social Media Today', url: U.smtXFotos,
  title: 'X deixa repostar fotos de outros usuários com crédito ao autor e divisão de ganhos',
  sum: 'Basta tocar e segurar a foto e escolher "Post photo". O novo post leva um selo com link para quem publicou primeiro.',
  body: [
    'As visualizações contam para as duas contas, e as duas podem ganhar dinheiro pelo programa de pagamento a criadores do X, que exige assinatura Premium e números mínimos de alcance. Antes, imagens repetidas não contavam para o programa, segundo o Social Media Today. A fonte não fala em países.'
  ] },

{ id: 'whatsapp-configuracoes-novo-visual-android', cat: 'atualizacoes', own: false, t: '2026-10-27T10', d: '27 out 2026', img: 'celular', src: 'WABetaInfo', url: U.wbiConfig,
  title: 'WhatsApp prepara novo visual para a tela de configurações no Android',
  sum: 'As opções passam a ficar em blocos separados, com cantos arredondados. O recurso foi encontrado na versão beta 2.26.43.3.',
  body: [
    'A mudança vale para todas as páginas de configurações, como Conta, Privacidade e Notificações. Ainda está em desenvolvimento e não foi liberada nem para os testadores. Não há data de lançamento, segundo o WABetaInfo.'
  ] },

{ id: 'reddit-feed-para-voce', cat: 'atualizacoes', own: false, t: '2026-10-28T11', d: '28 out 2026', img: 'plataforma', src: 'TechCrunch', url: U.tcReddit,
  title: 'Reddit adota feed "Para você" e separa as recomendações das comunidades seguidas',
  sum: 'A página inicial passa a ter duas abas. Depois de um teste, a mudança chega aos usuários do mundo todo nas próximas semanas.',
  body: [
    'A aba "Para você" mistura as comunidades do usuário com recomendações por interesse, e a "Seguindo" mostra só as comunidades das quais ele participa. O app abre no último feed visto. Alguns participantes do teste reclamaram nos fóruns de ajuda, segundo o TechCrunch.'
  ] },

{ id: 'tiktok-must-eat-restaurantes', cat: 'atualizacoes', own: false, t: '2026-10-28T13', d: '28 out 2026', img: 'celular', src: 'Android Headlines', url: U.ahMustEat,
  title: 'TikTok lança o Must Eat, guia de restaurantes dentro do app, em três regiões dos EUA',
  sum: 'O guia usa 40 milhões de posts, avaliações e comentários sobre comida. Começa em Nova York, Los Angeles e na região da Baía de São Francisco.',
  body: [
    'Há filtros por nota, distância, tipo de cozinha e horário, e dá para salvar lugares, avaliar, ligar e reservar mesa. Segundo o TikTok, restaurantes não podem pagar para aparecer. A empresa não falou em levar o guia a outros países.'
  ] },

{ id: 'chrome-preenchimento-gemini-gmail', cat: 'atualizacoes', own: false, t: '2026-10-28T15', d: '28 out 2026', img: 'tecnologia', src: '9to5Google', url: U.g9Autofill,
  title: 'Chrome passa a usar o Gemini para preencher formulários com dados do Gmail, por ora só nos EUA',
  sum: 'O recurso sugere números de pedidos, códigos de rastreio e reservas de voo. Funciona no Android, no iOS e no computador.',
  body: [
    'É preciso usar o Gemini no Chrome com a Inteligência Pessoal ligada. O usuário pode apagar sugestões ou desligar o recurso nas configurações. O Google diz que os dados sensíveis são criptografados, segundo o 9to5Google.'
  ] },

{ id: 'whatsapp-nova-tela-backup', cat: 'atualizacoes', own: true, t: '2026-10-28T17', d: '28 out 2026', img: 'celular', read: 2,
  title: 'WhatsApp redesenha a tela de backup e passa a mostrar quando será a próxima cópia das conversas',
  sum: 'A mudança chega aos poucos a parte dos usuários do Android e do iPhone. No iPhone, surge a opção de desligar o backup no iCloud. Não há data para o Brasil.',
  body: [
    'O WhatsApp começou a liberar uma nova tela de backup das conversas, segundo o WABetaInfo, em 28 de outubro. A mudança chega aos poucos para parte dos testadores da versão beta e para alguns usuários da versão normal, no Android e no iOS.',
    '## O que muda',
    'A tela principal mostra a situação do backup, confirma se a cópia automática está ligada, informa quando será a próxima e tem um botão para fazer o backup na hora. As opções de frequência, de incluir vídeos e de criptografia de ponta a ponta passam para uma segunda tela.',
    '## No Android e no iPhone',
    'No Android, aparecem a conta do Google ligada ao backup e um atalho para gerenciar o armazenamento. Uma seção "Backups anteriores" pode permitir apagar cópias antigas ou repetidas. O WABetaInfo diz ainda que o WhatsApp testa, em fase bem inicial, guardar os backups na sua própria nuvem. No iPhone, surge a opção de desligar o backup no iCloud.',
    '## Quando chega',
    'Quem ainda vê o visual antigo deve recebê-lo nas próximas semanas, mas não há data oficial. O site Mobile Bit diz que também não há confirmação de quando a novidade chega ao Brasil.',
    'Em outro teste, o WhatsApp prepara para o iPhone uma central que reúne fotos, vídeos e links recebidos, encontrada na versão beta 26.42.10.74. O recurso ainda não foi liberado nem para os testadores, segundo o WABetaInfo.'
  ],
  box: { type: 'facts', title: 'Nova tela de backup', rows: [['Onde', 'Android e iOS'], ['Situação', 'Liberação gradual'], ['Novidade no iPhone', 'Desligar o backup no iCloud'], ['Brasil', 'Sem data confirmada']] },
  sources: [['WABetaInfo', U.wbiBackup], ['Mobile Bit', U.mbBackup], ['WABetaInfo (central de mídias)', U.wbiMidia]] },

{ id: 'discord-servidores-publicos-buscadores', cat: 'atualizacoes', own: true, t: '2026-10-27T15', d: '27 out 2026', img: 'plataforma', read: 2,
  title: 'Discord vai mostrar conversas de servidores públicos em buscadores; no Brasil, recurso vem desligado',
  sum: 'A partir de 16 de novembro, mais de 63 mil servidores abertos ganham páginas na web. Em meados de dezembro, mensagens escolhidas podem aparecer no Google e em outros buscadores.',
  body: [
    'O Discord anunciou mudanças que vão deixar as comunidades públicas da plataforma mais fáceis de encontrar fora do app, segundo o TechCrunch. A regra vale para os chamados servidores descobríveis, que são mais de 63 mil.',
    '## O que muda',
    'A partir de 16 de novembro, cada um desses servidores ganha uma página na web, que pode trazer resumos automáticos das conversas. A partir de meados de dezembro, mensagens selecionadas de canais públicos poderão aparecer em buscadores. O nome de usuário e a foto de perfil de quem escreveu não aparecem.',
    '## Quem fica de fora',
    'Os administradores escolhem quais canais entram, e os membros podem sair pelas configurações. Servidores privados, mensagens diretas e contas de adolescentes ficam de fora. Na União Europeia, no Reino Unido, no Canadá, no Brasil, na Austrália e na Coreia do Sul, o recurso vem desligado por padrão, por causa das leis locais.',
    '## As críticas',
    'Usuários reclamaram da exposição das conversas e temem que o conteúdo seja usado para treinar inteligência artificial, segundo o TechCrunch.'
  ],
  box: { type: 'facts', title: 'O que muda no Discord', rows: [['Servidores atingidos', 'Mais de 63 mil públicos'], ['Páginas na web', 'A partir de 16/11'], ['Mensagens em buscadores', 'A partir de meados de dezembro'], ['No Brasil', 'Desligado por padrão']] },
  sources: [['TechCrunch', U.tcDiscord]] },

/* ===================== IA ===================== */
{ id: 'gemini-editar-arquivos-no-chat', cat: 'ia', own: true, t: '2026-10-29T20', d: '29 out 2026', img: 'tecnologia', read: 2,
  title: 'Gemini passa a deixar o usuário abrir e editar PDFs, documentos e planilhas dentro da conversa',
  sum: 'A edição de PDF funciona na web e no celular; os outros formatos, por enquanto, só no navegador. Segundo as reportagens, o recurso chega a todos os usuários, em todos os idiomas do app.',
  body: [
    'O Google anunciou em 29 de outubro que o app Gemini passa a mostrar e editar, dentro do próprio chat, os arquivos que cria, sem precisar baixar e enviar de novo, segundo o Olhar Digital e o Android Headlines.',
    '## O que dá para editar',
    'O recurso vale para PDFs, documentos e planilhas do Google, apresentações, arquivos de texto, Markdown e código. O arquivo abre numa tela ampliada, onde o usuário pode mudar o texto por conta própria ou selecionar um trecho e pedir que o Gemini o reescreva ou mude o layout. Também dá para fazer perguntas sobre a parte destacada e transformar uma tabela em gráfico.',
    'Depois, o arquivo pode ser aberto nas ferramentas do Google ou baixado.',
    '## Onde funciona',
    'A edição de PDFs funciona na web e nos apps para celular. Os demais formatos, por enquanto, só no navegador. Segundo as fontes, a liberação é para todos os usuários, em todos os idiomas e regiões em que o Gemini funciona. As reportagens não citam o Brasil nem planos pagos.',
    'Desde abril, o Gemini já criava arquivos para baixar, como documentos, planilhas e PDFs. A novidade é poder ver e mudar o arquivo dentro da conversa, segundo o Android Headlines.'
  ],
  box: { type: 'facts', title: 'Arquivos no Gemini', rows: [['Anúncio', '29 de outubro'], ['Formatos', 'PDF, documentos, planilhas, apresentações, texto e código'], ['No celular', 'Só PDFs, por enquanto'], ['Para quem', 'Todos os usuários, segundo as fontes'], ['Brasil', 'Não citado']] },
  sources: [['Olhar Digital', U.odGeminiArq], ['Android Headlines', U.ahGeminiArq]] },

{ id: 'apple-intelligence-china-ios-27-3', cat: 'ia', own: false, t: '2026-10-30T19', d: '30 out 2026', img: 'celular', src: '9to5Mac', url: U.m9China,
  title: 'Apple confirma a Apple Intelligence na China com o modelo Qwen, da Alibaba, no iOS 27.3',
  sum: 'Os testes começam em 4 de novembro, na versão beta para desenvolvedores, e o lançamento para o público está previsto para dezembro. A nova Siri com IA fica de fora no país.',
  body: [
    'O Qwen vai atender pedidos como as Ferramentas de Escrita e a Inteligência Visual. No começo, o recurso vale só para iPhone, do 15 Pro em diante, com o idioma em inglês ou chinês simplificado, segundo o 9to5Mac, com base num comunicado da Apple.'
  ] },

{ id: 'mistral-large-4-pesos-abertos', cat: 'ia', own: false, t: '2026-10-29T14', d: '29 out 2026', img: 'tecnologia', src: 'TechCrunch', url: U.tcMistral,
  title: 'Mistral libera para download o Mistral Large 4, modelo de IA com 1 trilhão de parâmetros',
  sum: 'Empresas podem usar o modelo comercialmente, mas quem quiser vendê-lo como serviço precisa de outra licença. Na API, custa US$ 0,70 por milhão de tokens de entrada e US$ 2,10 por milhão de saída.',
  body: [
    'A empresa francesa tinha apresentado o modelo em prévia no começo de outubro. Ele está no Hugging Face e em serviços como OpenRouter e Microsoft Foundry. Uma versão voltada a segurança digital está em prévia só para parceiros escolhidos, segundo o TechCrunch.'
  ] },

{ id: 'chatgpt-pro-limites-dobrados', cat: 'ia', own: false, t: '2026-10-29T20', d: '29 out 2026', img: 'tecnologia', src: 'BleepingComputer', url: U.bcProLimites,
  title: 'OpenAI desiste de reduzir uso do ChatGPT Pro e dobra os limites depois de reclamações',
  sum: 'Os limites dobram nos planos Pro de US$ 100, US$ 200 e US$ 500 por mês e no Business Premium. A empresa não divulga os números exatos.',
  body: [
    'A OpenAI pretendia reduzir o uso incluído no plano Pro de US$ 200 depois de 29 de outubro. Depois das críticas, voltou atrás. A mudança vale principalmente para o ChatGPT Work e o Codex, que dividem os limites. Os agentes dots continuam com limites próprios, segundo o BleepingComputer.'
  ] },

{ id: 'alexa-recursos-compras', cat: 'ia', own: false, t: '2026-10-29T10', d: '29 out 2026', img: 'tecnologia', src: 'TechCrunch', url: U.tcAlexa,
  title: 'Amazon dá à Alexa mais de 100 recursos de compras, como listas, assinaturas e endereço de entrega',
  sum: 'O usuário pode criar listas, mudar a frequência de uma assinatura e alterar instruções de entrega por voz. A fonte não cita países.',
  body: [
    'Segundo a Amazon, o uso dos recursos em que a Alexa age pelo usuário cresceu 8 vezes desde o começo do ano, e mais de 400 milhões de pessoas usaram a assistente para compras nos últimos 12 meses, segundo o TechCrunch.'
  ] },

{ id: 'xreal-aura-android-xr', cat: 'ia', own: false, t: '2026-10-28T12', d: '28 out 2026', img: 'tecnologia', src: 'Android Central', url: U.acXreal,
  title: 'Óculos Xreal Aura, com Android XR e Gemini, começam a ser vendidos a partir de US$ 1.099',
  sum: 'As entregas começam em meados de novembro. A venda é só nos EUA, no Canadá, no Japão e na Coreia do Sul.',
  body: [
    'São duas versões, de US$ 1.099 e US$ 1.299, preços válidos até dezembro. Depois, passam a US$ 1.279 e US$ 1.499, segundo o Android Central. Os óculos usam o sistema Android XR, do Google.'
  ] },

{ id: 'google-apps-conectados-gemini-busca', cat: 'ia', own: false, t: '2026-10-28T12', d: '28 out 2026', img: 'tecnologia', src: '9to5Google', url: U.g9Connected,
  title: 'Google abre o Gemini e a Busca a mais apps de outras empresas, em prévia para desenvolvedores',
  sum: 'O app Gemini já tem mais de 50 apps conectados, como Dropbox, OpenTable e Ticketmaster. Eles também vão passar a funcionar na Busca.',
  body: [
    'A nova plataforma reúne num só lugar o caminho para desenvolvedores levarem seus apps ao Gemini e à Busca. A abertura será feita em fases nos próximos meses, segundo o 9to5Google.'
  ] },

{ id: 'chatgpt-dots-imessage-rcs', cat: 'ia', own: true, t: '2026-10-28T16', d: '28 out 2026', img: 'celular', read: 2,
  title: 'Agentes "dots" do ChatGPT passam a receber tarefas por mensagem de texto, em teste nos EUA',
  sum: 'Assinantes do plano Pro nos EUA podem mandar texto, foto ou áudio pelo app de mensagens do iPhone ou do Android. O recurso não chega ao plano Plus.',
  body: [
    'A OpenAI começou a liberar em 28 de outubro uma prévia que permite conversar por mensagem de texto com os dots, agentes do ChatGPT que trabalham por conta própria, segundo o Engadget. A conversa usa o iMessage, no iPhone, ou o RCS, no Android.',
    '## Como funciona',
    'O usuário manda instruções por texto, foto ou mensagem de voz, e o dot responde e envia atualizações sobre as tarefas sem precisar ser chamado. A memória, o contexto e os plug-ins são os mesmos do ChatGPT, segundo o 9to5Mac. Para ligar, é preciso abrir o perfil do dot, escolher "Texting", confirmar o número de telefone e salvar o contato que o dot envia, segundo o Digital Trends.',
    '## Limites',
    'Só o dono pode mandar mensagens ao seu dot, e o dot só fala com ele. A OpenAI diz que não tem acesso às outras conversas do usuário. Não há grupos, ligações nem FaceTime. Quando uma tarefa precisa de aprovação, o dot manda um link para revisar no app. Para as mensagens, a OpenAI fez parceria com a empresa Linq.',
    '## Quem pode usar',
    'A prévia é só para assinantes do plano Pro nos EUA. Os dots foram lançados no fim de setembro.'
  ],
  box: { type: 'facts', title: 'Dots por mensagem', rows: [['Canais', 'iMessage e RCS'], ['Plano', 'Pro'], ['País', 'EUA'], ['Situação', 'Prévia']] },
  sources: [['Engadget', U.egDots], ['9to5Mac', U.m9Dots], ['Digital Trends', U.dtDots]] },

{ id: 'gemini-4-carbon', cat: 'ia', own: true, t: '2026-10-28T14', d: '28 out 2026', img: 'tecnologia', read: 3,
  title: 'Google apresenta o Gemini 4 Carbon, modelo voltado a segurança digital, programação e agentes, com acesso restrito',
  sum: 'O modelo lidera um índice independente de inteligência. Nesta semana, só um grupo de especialistas em defesa cibernética pode usar, e não há data para o público.',
  body: [
    'O Google anunciou em 28 de outubro o Gemini 4 Carbon, cerca de duas semanas depois do Gemini 4 Argon, segundo o 9to5Google. O anúncio foi feito no blog da empresa por Koray Kavukcuoglu, vice-presidente sênior do Google DeepMind.',
    '## Quem pode usar',
    'Nesta semana, o acesso fica com um grupo de profissionais de defesa cibernética. Depois, vai se abrir aos poucos para parceiros de confiança, por meio de um programa chamado Fairwind. O Google diz que levará o modelo a desenvolvedores, empresas e consumidores "o mais rápido possível", sem dar data. Por enquanto, ele não está no app Gemini.',
    '## Desempenho',
    'Segundo o Google, o Carbon está em 1º lugar no Índice de Inteligência da Artificial Analysis (versão 5.0), com 59 pontos. Num teste que mede a capacidade de achar falhas de segurança em programas, o SEC-bench Pro, ele acertou 88,2%. Em testes internos, gerou código seguro com mais que o dobro da taxa de sucesso do Argon.',
    '## Segurança e preço',
    'O Google diz que os alertas graves de comportamento desalinhado caíram quase 80% em testes de programação, e que as afirmações sem base caíram cerca de pela metade em relação ao Argon. Para desenvolvedores, o preço inicial é de US$ 2 por milhão de tokens de entrada e US$ 10 por milhão de saída. Depois da fase inicial, passa para US$ 4 e US$ 20.',
    'O Google também participa de testes voluntários que o governo dos EUA faz com modelos de IA antes do lançamento.'
  ],
  box: { type: 'facts', title: 'Gemini 4 Carbon', rows: [['Anúncio', '28 de outubro'], ['Acesso', 'Restrito a defensores cibernéticos'], ['Índice Artificial Analysis', '1º lugar, 59 pontos'], ['Preço inicial', 'US$ 2 e US$ 10 por milhão de tokens'], ['Público geral', 'Sem data']] },
  sources: [['Google', U.gbCarbon], ['9to5Google', U.g9Carbon]] },

{ id: 'chatgpt-icloud-mail-calendario', cat: 'ia', own: false, t: '2026-10-27T14', d: '27 out 2026', img: 'celular', src: '9to5Mac', url: U.m9Icloud,
  title: 'ChatGPT passa a se conectar ao e-mail e à agenda do iCloud, inclusive no plano gratuito',
  sum: 'Com os plug-ins, o assistente busca e-mails, escreve rascunhos e cria ou altera eventos. Funciona na web, no computador e no iPhone.',
  body: [
    'Segundo a OpenAI, citada pelo 9to5Mac, o recurso está em todos os planos do ChatGPT. Só funcionam endereços @icloud.com, @me.com e @mac.com, e a fonte não confirma a disponibilidade no Brasil.'
  ] },

/* ===================== STARTUPS ===================== */
{ id: 'roblox-3tri-2026', cat: 'startups', own: false, t: '2026-10-29T20', d: '29 out 2026', img: 'mercado', src: 'Gaming.net', url: U.gnRoblox,
  title: 'Roblox perde 9% dos usuários diários em um ano, e a ação cai mais de 17% antes da abertura do mercado',
  sum: 'A receita do trimestre subiu 16%, para US$ 1,57 bilhão, mas as reservas, que medem o que os jogadores gastaram, caíram 12%. São 138 milhões de usuários por dia.',
  body: [
    'O número de pagantes por mês caiu 16%, para 30 milhões, e as horas de uso caíram 15%. O prejuízo foi de US$ 230 milhões. Para o quarto trimestre, a empresa prevê reservas de US$ 1,89 bilhão a US$ 2 bilhões, queda de 10% a 15%, segundo o Gaming.net e o Investing.com.'
  ] },

{ id: 'pinterest-3tri-2026', cat: 'startups', own: false, t: '2026-10-29T18', d: '29 out 2026', img: 'mercado', src: 'Pinterest (comunicado)', url: U.secPinterest,
  title: 'Pinterest chega a 661 milhões de usuários por mês, recorde, e fatura US$ 1,17 bilhão no trimestre',
  sum: 'A receita cresceu 12%. O lucro líquido caiu 77%, para US$ 21,5 milhões.',
  body: [
    'Os usuários cresceram 10%, puxados pelas regiões fora dos EUA, do Canadá e da Europa, que somam 394 milhões. Para o quarto trimestre, a empresa prevê receita de US$ 1,425 bilhão a US$ 1,475 bilhão, segundo o comunicado.'
  ] },

{ id: 'apple-taiwan-comissao-26', cat: 'startups', own: false, t: '2026-10-29T12', d: '29 out 2026', img: 'plataforma', src: '9to5Mac', url: U.m9Taiwan,
  title: 'Apple reduz de 30% para 26% a comissão da App Store em Taiwan',
  sum: 'A nova taxa vale a partir deste sábado (31) para apps pagos e compras dentro dos apps no iPhone e no iPad. A mudança veio depois de conversas com o órgão de concorrência do país.',
  body: [
    'Os desenvolvedores não precisam assinar os novos termos para ter a taxa menor. Segundo o 9to5Mac, as mudanças em Taiwan são bem mais limitadas que em outras regiões, e a reportagem não fala em pagamentos fora da loja nem em lojas alternativas.'
  ] },

{ id: 'binance-ataque-hacker-6-bilhoes', cat: 'startups', own: false, t: '2026-10-30T10', d: '30 out 2026', img: 'mercado', src: 'NeoFeed', url: U.nfBinance,
  title: 'Binance sofre o maior ataque hacker já registrado no mercado de criptomoedas, com perda estimada em US$ 6,3 bilhões',
  sum: 'A corretora suspendeu as transações na quinta (29). Diz que vai cobrir todas as perdas e que o dinheiro dos usuários está seguro.',
  body: [
    'Cerca de US$ 3 bilhões foram congelados, segundo a revisão da Binance. Empresas de análise atribuem o ataque a um grupo ligado à Coreia do Norte, o que ainda é uma suspeita. O recorde anterior era o da Bybit, com cerca de US$ 1,5 bilhão em 2025, segundo o NeoFeed.'
  ] },

{ id: 'doordash-compra-instacart', cat: 'startups', own: true, t: '2026-10-29T10', d: '29 out 2026', img: 'mercado', read: 3,
  title: 'DoorDash compra o Instacart por US$ 17 bilhões e vai juntar entrega de refeições e de supermercado',
  sum: 'O preço é de US$ 65 por ação, com pelo menos 75% em dinheiro. A marca e o app do Instacart continuam, e a conclusão deve ficar para o fim de 2027 ou 2028.',
  body: [
    'A DoorDash, maior app de entrega de comida dos EUA, anunciou em 29 de outubro a compra do Instacart, de compras de supermercado, por cerca de US$ 17 bilhões, segundo o TechCrunch. Os acionistas do Instacart vão receber US$ 65 por ação, e pelo menos 75% do pagamento será em dinheiro, segundo o comunicado da DoorDash.',
    '## O que muda para o usuário',
    'Por enquanto, nada: as empresas seguem separadas até a conclusão. A DoorDash diz que vai manter a marca e o app do Instacart. Segundo o NeoFeed, o plano é reunir os benefícios das assinaturas DashPass e Instacart+ numa cobrança só, e os supermercados vão poder continuar trabalhando com outras plataformas.',
    '## Prazo',
    'Os conselhos das duas empresas aprovaram o negócio. A conclusão está prevista para o fim de 2027 ou o primeiro semestre de 2028 e depende dos órgãos reguladores e dos acionistas do Instacart. Antes, o Instacart chegou a conversar com a Uber, mas desistiu, segundo reportagem da Bloomberg citada pelo TechCrunch.',
    '## Os números da DoorDash',
    'No mesmo dia, a DoorDash divulgou o resultado do terceiro trimestre: receita de US$ 4,6 bilhões, alta de 34%, e 993 milhões de pedidos, alta de 28%. O lucro foi de US$ 466 milhões, alta de 91%. Segundo o NeoFeed, a compra mira concorrentes como Amazon e Walmart.'
  ],
  box: { type: 'facts', title: 'O negócio', rows: [['Valor', 'Cerca de US$ 17 bilhões'], ['Por ação', 'US$ 65'], ['Pagamento', 'Ao menos 75% em dinheiro'], ['Conclusão prevista', 'Fim de 2027 ou 1º semestre de 2028'], ['App do Instacart', 'Continua']] },
  sources: [['TechCrunch', U.tcDoorDash], ['NeoFeed', U.nfDoorDash], ['DoorDash (comunicado)', U.secDoorDash]] },

{ id: 'amazon-3tri-2026', cat: 'startups', own: false, t: '2026-10-29T18', d: '29 out 2026', img: 'mercado', src: 'Amazon (comunicado)', url: U.bwAmazon,
  title: 'Amazon vende US$ 201,9 bilhões no trimestre, e a nuvem AWS cresce 39%',
  sum: 'As vendas subiram 12%. A AWS faturou US$ 46 bilhões, e a publicidade, US$ 19,6 bilhões.',
  body: [
    'O lucro líquido foi de US$ 20,7 bilhões, um pouco abaixo dos US$ 21,2 bilhões de um ano antes, quando a empresa teve ganhos com o investimento na Anthropic. Para o quarto trimestre, a Amazon prevê vendas de US$ 240 bilhões a US$ 247 bilhões, segundo o comunicado.'
  ] },

{ id: 'reddit-3tri-2026', cat: 'startups', own: false, t: '2026-10-29T17', d: '29 out 2026', img: 'mercado', src: 'Reddit (comunicado)', url: U.secReddit,
  title: 'Receita do Reddit cresce 53% no trimestre, e usuários de fora dos EUA sobem 24%',
  sum: 'A empresa faturou US$ 895 milhões e lucrou US$ 283 milhões. Tem 130,3 milhões de usuários por dia, mas o número caiu 2% nos EUA.',
  body: [
    'Os usuários diários de fora dos EUA chegaram a 79,6 milhões, e os dos EUA ficaram em 50,7 milhões. Para o quarto trimestre, a empresa prevê receita de US$ 1 bilhão a US$ 1,03 bilhão, segundo o comunicado.'
  ] },

{ id: 'coreia-do-sul-multa-apple-google', cat: 'startups', own: false, t: '2026-10-28T09', d: '28 out 2026', img: 'plataforma', src: 'MacRumors', url: U.mrCoreia,
  title: 'Coreia do Sul multa Apple e Google e manda liberar links para pagamento fora das lojas de apps',
  sum: 'A Apple foi multada em 20,8 bilhões de wons, e o Google, em 42,9 bilhões. A Apple discorda e avalia recorrer.',
  body: [
    'O órgão regulador diz que as duas empresas cobravam comissão de 26% em pagamentos alternativos e limitavam recursos, o que fere uma lei de 2021. Elas também terão de melhorar a análise dos apps, segundo o MacRumors. A fonte não informa prazo.'
  ] },

{ id: 'alphabet-3tri-2026', cat: 'startups', own: true, t: '2026-10-28T19', d: '28 out 2026', img: 'mercado', read: 3,
  title: 'Google Cloud mais que dobra e app Gemini chega a 1 bilhão de usuários, mas lucro da Alphabet cai e ação recua 9%',
  sum: 'A dona do Google faturou US$ 127,6 bilhões no terceiro trimestre, alta de 25%. O lucro caiu para US$ 26,2 bilhões por causa de perdas com participações em outras empresas.',
  body: [
    'A Alphabet, dona do Google, divulgou em 28 de outubro o resultado do terceiro trimestre de 2026. A receita foi de US$ 127,6 bilhões, 25% a mais que um ano antes, segundo o comunicado da empresa.',
    '## Nuvem e busca',
    'O Google Cloud faturou US$ 30,7 bilhões, alta de 103%, e o lucro operacional da nuvem foi de US$ 11,1 bilhões, contra US$ 3,6 bilhões um ano antes. A busca e outros serviços somaram US$ 63,4 bilhões, alta de 12%. Os anúncios do YouTube renderam US$ 11,2 bilhões.',
    '## Gemini',
    'O presidente-executivo, Sundar Pichai, disse que o app Gemini chegou a 1 bilhão de usuários. Segundo ele, as interfaces dos modelos para desenvolvedores processam quase 32 bilhões de tokens por minuto, mais de quatro vezes o volume de um ano antes. O YouTube Music e o YouTube Premium passaram de 150 milhões de assinantes, contando os períodos de teste.',
    '## Lucro e ação',
    'O lucro líquido caiu para US$ 26,2 bilhões, ante US$ 35 bilhões um ano antes, por causa de uma perda de US$ 8,7 bilhões com participações em outras empresas. O lucro por ação foi de US$ 2,12, abaixo dos US$ 3,01 esperados por analistas, segundo a Constellation Research. Os investimentos no trimestre somaram US$ 51,4 bilhões.',
    'Depois do fechamento do mercado, a ação classe A caiu 9,4%, para US$ 294,20, segundo o Stock Titan.'
  ],
  box: { type: 'facts', title: 'Alphabet no 3º trimestre', rows: [['Receita', 'US$ 127,6 bilhões (+25%)'], ['Google Cloud', 'US$ 30,7 bilhões (+103%)'], ['Lucro líquido', 'US$ 26,2 bilhões'], ['App Gemini', '1 bilhão de usuários'], ['Ação após o fechamento', 'Queda de 9,4%']] },
  sources: [['Alphabet', U.abAlphabet], ['Constellation Research', U.crAlphabet], ['Stock Titan', U.stAlphabet]] },

{ id: 'anthropic-pede-ipo-nasdaq-receita-16-bilhoes', cat: 'startups', own: true, t: '2026-10-26T20', d: '26 out 2026', img: 'mercado', read: 3,
  title: 'Anthropic, dona do Claude, pede para abrir capital na Nasdaq e mostra receita de US$ 16,3 bilhões',
  sum: 'O prospecto mostra prejuízo de US$ 80,7 bilhões no primeiro semestre de 2026, a maior parte por um efeito contábil. As ações devem ser negociadas com o código ANT.',
  body: [
    'A Anthropic, empresa de inteligência artificial que criou o Claude, apresentou nesta segunda-feira (26) à SEC, a comissão de valores mobiliários dos EUA, o pedido público de abertura de capital. As ações devem ser listadas na Nasdaq com o código ANT. Goldman Sachs e Morgan Stanley coordenam a oferta, segundo o InfoMoney, com informações da Bloomberg.',
    '## Os números',
    'A receita do primeiro semestre de 2026 foi de US$ 16,3 bilhões, contra US$ 1,2 bilhão um ano antes. O prejuízo líquido foi de US$ 80,7 bilhões. Segundo a Fortune, cerca de US$ 72,4 bilhões desse valor vêm de um lançamento contábil ligado à valorização de títulos conversíveis emitidos pela empresa. O prejuízo operacional foi de US$ 693 milhões, menor que os US$ 2,1 bilhões do mesmo período de 2025.',
    'A empresa tem compromissos mínimos de cerca de US$ 417 bilhões em novos contratos de capacidade computacional, com prazos de até 20 anos, segundo o InfoMoney.',
    '## Valor e prazo',
    'O prospecto não traz preço nem número de ações. Reportagens citadas pela Fortune falam em avaliação de US$ 1,5 trilhão a US$ 2 trilhões. Segundo a Bloomberg, as apresentações a investidores podem começar na semana de 9 de novembro.',
    '## Riscos',
    'Entre os riscos listados, a empresa diz que sistemas avançados de IA podem representar "riscos catastróficos ou existenciais para a humanidade" se não houver salvaguardas adequadas. Os sete cofundadores mantêm 50,1% dos votos por meio de uma classe especial de ações, segundo a Fortune.',
    '## Os sócios',
    'A Amazon investiu cerca de US$ 18 bilhões na Anthropic, e as notas conversíveis que tem foram avaliadas por ela mesma em US$ 97,9 bilhões, segundo o TechCrunch. Nenhum fundo de capital de risco tem 5% ou mais da empresa. O Google tem cerca de 5,6%, segundo estimativa da PitchBook citada pelo site.'
  ],
  box: { type: 'facts', title: 'O prospecto', rows: [['Receita (1º sem. 2026)', 'US$ 16,3 bilhões'], ['Prejuízo líquido', 'US$ 80,7 bilhões'], ['Efeito contábil no prejuízo', 'Cerca de US$ 72,4 bilhões'], ['Bolsa e código', 'Nasdaq, ANT'], ['Funcionários', '5.300 em setembro']] },
  sources: [['InfoMoney (Bloomberg)', U.imAnt27], ['Fortune', U.fortuneAnt27], ['TechCrunch', U.tcAntVcs]] },

/* ===================== IDEIAS PARA O BRASIL ===================== */
{ id: 'lagos-life-jogo-patrocinado', cat: 'ideias', own: true, t: '2026-10-15T10', d: '15 out 2026', img: 'mundo', read: 3,
  title: 'Na Nigéria, o jogo de navegador Lagos Life simula a vida na cidade, vende outdoors virtuais a marcas e capta US$ 500 mil',
  sum: 'O jogo passou de 4,3 milhões de jogadores até 8 de outubro. A empresa por trás dele, a Vatar, foi avaliada em US$ 10 milhões.',
  body: [
    'A Vatar, empresa nigeriana que criou o jogo Lagos Life, captou US$ 500 mil com investidores-anjo, numa rodada que avaliou a empresa em US$ 10 milhões, segundo o Techloy. Entre os investidores está Olugbenga Agboola, presidente-executivo da fintech Flutterwave, por meio do fundo Resilience17. A rodada foi fechada em um dia.',
    '## Como funciona',
    'O Lagos Life roda no navegador e se passa numa versão virtual de Lagos, a maior cidade da Nigéria. O jogador arruma emprego, ganha nairas virtuais, paga aluguel e anda de transporte público. O jogo foi feito por Shalom Rayhamen com ferramentas de inteligência artificial.',
    '## Como ganha dinheiro',
    'Segundo o Techloy, citando o TechCabal, a empresa tem cinco fontes de receita: anúncios, divulgação de músicas, acordos com empresas, transmissão de futebol e a venda de dinheiro do jogo por dinheiro real. As marcas alugam outdoors dentro do jogo, com preço que varia conforme a procura. Um deles passou de ₦5.000 para ₦50.000 por semana em 5 de outubro, segundo o Techpoint Africa, citado pelo Techloy.',
    '## Os números',
    'O jogo teve 1 milhão de jogadores nos três primeiros dias e passou de 4,3 milhões até 8 de outubro, em 15 países, com mais de 200 mil pessoas jogando ao mesmo tempo. A receita obtida ou já contratada passou de US$ 170 mil.',
    '## Por que olhar para o Brasil',
    'Análise da redação: jogos que imitam o dia a dia de uma cidade conhecida criam identificação rápida, e o espaço de publicidade dentro do jogo pode ser vendido a marcas locais. Um simulador ambientado numa grande cidade brasileira poderia seguir a mesma lógica. O desafio é manter os jogadores depois que a novidade passa.'
  ],
  box: { type: 'facts', title: 'Lagos Life', rows: [['País', 'Nigéria'], ['Captação', 'US$ 500 mil'], ['Avaliação', 'US$ 10 milhões'], ['Jogadores', 'Mais de 4,3 milhões até 8/10'], ['Receita', 'Mais de US$ 170 mil, obtida ou contratada']] },
  sources: [['Techloy', U.tlLagos], ['The Condia', U.cdLagos]] },

{ id: 'rently-aluguel-flexivel-singapura', cat: 'ideias', own: false, t: '2026-10-27T10', d: '27 out 2026', img: 'mercado', src: 'Bernama', url: U.bnRently,
  title: 'Em Singapura, a Rently deixa o inquilino escolher como e quando pagar o aluguel e recebe US$ 12 milhões em crédito',
  sum: 'O app dá recompensas a quem paga com cartão, permite adiar pagamentos e dividir o depósito de garantia ao longo do contrato. O proprietário recebe em dia.',
  body: [
    'A linha de crédito, da January Capital, acompanha o volume de transações. Nos nove primeiros meses de 2026, a Rently movimentou SG$ 36,3 milhões em aluguéis em Singapura, 2,5 vezes mais que um ano antes. A empresa também atua em Hong Kong e nos Emirados Árabes Unidos, segundo a Bernama.'
  ] },

{ id: 'ghanem-imovel-fracionado-arabia', cat: 'ideias', own: false, t: '2026-10-25T10', d: '25 out 2026', img: 'mercado', src: 'The Startup Scene', url: U.tssGhanem,
  title: 'Na Arábia Saudita, o app Ghanem vende frações de imóveis a partir de SR 1.000, com escritura no nome de cada investidor',
  sum: 'O investidor recebe parte do aluguel. A startup captou US$ 1,5 milhão e soma US$ 8,6 milhões na fase pré-seed.',
  body: [
    'As frações são lançadas no registro oficial de imóveis do país, que emite as escrituras. No primeiro imóvel vendido pelo app, 580 investidores receberam escrituras digitais. A empresa funciona num ambiente de testes do órgão regulador do setor, segundo o The Startup Scene.'
  ] },

{ id: 'hunar-ia-contratacao-por-voz', cat: 'ideias', own: false, t: '2026-10-19T10', d: '19 out 2026', img: 'mundo', src: 'Inc42', url: U.incHunar,
  title: 'Na Índia, a Hunar.AI usa agentes de voz com IA para contratar e treinar trabalhadores de linha de frente e capta ₹40 crore',
  sum: 'Os agentes conversam em mais de 20 idiomas. Empresas como Swiggy e Zepto, de entregas, usam o serviço.',
  body: [
    'A rodada série A, de cerca de US$ 4,2 milhões, foi liderada pela Blume Ventures. Até setembro, a plataforma fez mais de 15 milhões de conversas, e o volume dobra a cada trimestre, segundo o Inc42. Os preços não foram divulgados.'
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

{ id: 'travclan-agencias-de-viagem', cat: 'ideias', own: false, t: '2026-10-23T10', d: '23 out 2026', img: 'mundo', src: 'CXO Digital Pulse', url: U.cxoTravclan,
  title: 'Indiana TravClan dá a pequenas agências de viagem preços negociados de hotéis e passeios e capta US$ 5 milhões',
  sum: 'A plataforma tem mais de 15 mil agentes na Índia, cerca de 40% em cidades menores, e mais de US$ 100 milhões em vendas por ano.',
  body: [
    'A empresa fecha contratos direto com hotéis e fornecedores de passeios e tem equipes locais na Índia, no Sudeste Asiático e no Oriente Médio. A rodada teve Flipkart, August One e Trifecta Capital, segundo o CXO Digital Pulse.'
  ] },

{ id: 'zorit-estoque-para-lojinhas', cat: 'ideias', own: false, t: '2026-10-28T12', d: '28 out 2026', img: 'mercado', src: 'Entrackr', url: U.enZorit,
  title: 'Indiana Zorit entrega estoque a pequenas lojas em até 60 minutos e capta quase ₹27 crore',
  sum: 'A empresa, que se chamava Bijnis, tem 12 armazéns em 12 cidades e vendas anualizadas de ₹120 crore.',
  body: [
    'Os varejistas compram mercadorias de armazéns locais pelo app. Quase 60% deles nunca tinham usado uma plataforma de compras entre empresas e fazem de 5 a 6 pedidos por mês, segundo o Entrackr. A rodada foi liderada pela Sparrow Capital.'
  ] },

{ id: 'astrotalk-lucro-consultas', cat: 'ideias', own: false, t: '2026-10-28T10', d: '28 out 2026', img: 'mundo', src: 'Entrackr', url: U.enAstro,
  title: 'Indiana Astrotalk, de consultas de astrologia por chat e vídeo, multiplica o lucro por 10',
  sum: 'A receita subiu cerca de 55%, para ₹1.823 crore, no ano fiscal encerrado em março de 2026. O lucro foi de ₹222 crore.',
  body: [
    'O app liga usuários a astrólogos em consultas pagas por chat, ligação ou vídeo, que geram cerca de 91% da receita. A empresa também tem uma loja de produtos. A receita de fora da Índia chegou a ₹621 crore, 34% do total, segundo o Entrackr.'
  ] },

{ id: 'maasi-baba-por-assinatura', cat: 'ideias', own: true, t: '2026-10-27T10', d: '27 out 2026', img: 'mundo', read: 3,
  title: 'Na Índia, a Maasi treina e verifica babás e oferece o serviço por hora ou por assinatura',
  sum: 'A startup de Bengaluru captou ₹6 crore, cerca de US$ 630 mil, e teve mais de 4.000 inscrições na lista de espera em 5 dias. O atendimento avulso começa em ₹199 por hora.',
  body: [
    'A Maasi, startup de Bengaluru que liga famílias a babás treinadas, captou ₹6 crore, cerca de US$ 630 mil, numa rodada liderada pela Better Capital, com a Antler India, segundo o StartupTalky. A empresa nasceu do Urban Parents Club, uma comunidade com mais de 8.000 pais e mães da cidade.',
    '## Seleção',
    'As candidatas passam por um treinamento gratuito em que 6 em cada 10 são reprovadas, por um teste psicológico de 16 pontos e por semanas de observação presencial. Também há checagem de antecedentes feita por empresas especializadas. Entre os instrutores há diretoras de pré-escola e enfermeiras, segundo o Entrepreneur India.',
    '## Preços',
    'O atendimento avulso começa em ₹199 por hora, e a assinatura, em ₹5.999 por mês. Uma babá diurna custa ₹15.660 por mês, e uma que dorme no emprego, ₹24.600. A família paga uma taxa de cadastro reembolsável, a assinatura e o salário mensal da babá, que a Maasi recebe e repassa.',
    'O lançamento público foi em 20 de outubro. Segundo a empresa, mais de 1.200 pais e mães já foram atendidos por mais de 500 cuidadoras.',
    '## Por que olhar para o Brasil',
    'Análise da redação: no Brasil, a contratação de babás ainda depende muito de indicação. Um serviço que treina, verifica antecedentes e cuida do pagamento pode dar mais segurança às famílias, mas teria de se ajustar às regras do trabalho doméstico, o que torna o modelo por assinatura mais complexo.'
  ],
  box: { type: 'table', title: 'Preços da Maasi', head: ['Serviço', 'Preço'], rows: [['Avulso', 'A partir de ₹199 por hora'], ['Assinatura', 'A partir de ₹5.999 por mês'], ['Babá diurna', '₹15.660 por mês'], ['Babá que dorme no emprego', '₹24.600 por mês']], note: 'Fonte: StartupTalky.' },
  sources: [['StartupTalky', U.stMaasi], ['Entrepreneur India', U.eiMaasi]] },

{ id: 'cent-checkup-preventivo-ia', cat: 'ideias', own: false, t: '2026-10-27T07', d: '27 out 2026', img: 'ciencia', src: 'Inc42', url: U.incCent,
  title: 'Indiana Cent capta US$ 15 milhões para check-up completo em 2 horas, com laudo organizado por IA',
  sum: 'O pacote reúne ressonância de corpo inteiro, tomografia, ECG e outros exames por ₹27.500 e rastreia mais de 300 condições.',
  body: [
    'A empresa atua em Bengaluru, Mumbai e na região de Délhi e já fez 10 mil exames de corpo inteiro. A IA reúne os resultados em riscos por órgão.'
  ] },

/* ===================== NO BRASIL ===================== */
{ id: 'cripto-licenca-prazo-encerrado-pedidos', cat: 'brasil', own: true, t: '2026-10-31T07', d: '31 out 2026', img: 'celular', read: 3,
  title: 'Termina o prazo da licença cripto: levantamentos contam de 63 a 67 empresas com pedido no Banco Central',
  sum: 'Bitget, B3, Kraken e BTG Pactual estão entre os nomes dos últimos dias. O BC ainda não divulgou números oficiais, e quem não pediu tem até 30 dias para encerrar as atividades.',
  body: [
    'Terminou na sexta-feira (30) o prazo para as empresas que já oferecem compra, venda ou guarda de criptomoedas no Brasil pedirem autorização ao Banco Central. Pelo monitor da Cainvest, citado pela Exame, foram 63 pedidos, contando o da Bitget, feito no último dia.',
    'O BitNotícias, que usa o levantamento da Cainvest e inclui registros e comunicados das empresas, chega a 67 nomes, entre eles um pedido já negado. Os números não são oficiais: segundo o BitNotícias, o Banco Central ainda não divulgou a lista.',
    '## Quem pediu nos últimos dias',
    'Entre quinta (29) e sexta (30), pediram Parfin, B3, Kraken, Coins.xyz, Webull, BTG Pactual, Banco Rendimento e Banco BS2, segundo a Exame. A Bitget e a NBS confirmaram o pedido, segundo o BitNotícias. Antes, já tinham pedido empresas como Mercado Bitcoin, Foxbit, Coinbase e Binance.',
    'Pelos dados da Cainvest, 3 processos estão na pauta de decisão do BC, 2 estão em análise e 2 aguardam documentos ou respostas das empresas.',
    '## Menos que o esperado',
    'O mercado esperava de 150 a 200 interessadas, segundo o Livecoins, que contava cerca de 40 empresas com algum passo no processo até a tarde de quinta (29). Para o advogado Tiago Severo Gomes, ouvido pelo site, o número baixo não se explica só pelo capital mínimo: desde o pedido, as empresas precisam enviar relatórios diários de custódia e provas mensais de reservas, entre outras exigências.',
    '## As próximas datas',
    'Quem não pediu tem até 30 dias para encerrar as atividades no Brasil, segundo o Livecoins. A partir de 6 de novembro, bancos e instituições de pagamento não podem trabalhar com prestadoras fora das regras, segundo a Resolução 589 do BC.'
  ],
  box: { type: 'table', title: 'As contagens', head: ['Fonte', 'Número'], rows: [['Cainvest, via Exame', '63 pedidos'], ['BitNotícias', '67 nomes'], ['Livecoins (até 29/10)', 'Cerca de 40'], ['Banco Central', 'Lista não divulgada']], note: 'Levantamentos independentes, não oficiais.' },
  sources: [['Exame', U.exCripto63], ['BitNotícias', U.bnCripto67], ['Livecoins', U.lcCripto40]] },

{ id: 'decreto-sac-apps-senacon', cat: 'brasil', own: true, t: '2026-10-30T12', d: '30 out 2026', img: 'plataforma', read: 3,
  title: 'Novas regras do SAC valem a partir de segunda (2): atendimento humano todo dia e cancelamento logo no primeiro menu',
  sum: 'Apps de transporte, de entrega e plataformas de venda terão de informar à Senacon o número de reclamações e a taxa de resolução. Robôs e IA não podem impedir o contato com uma pessoa.',
  body: [
    'Passam a valer na segunda-feira (2) as novas regras para o Serviço de Atendimento ao Consumidor (SAC), segundo o Tribuna Hoje. Elas estão no Decreto nº 13.135, de 9 de outubro, publicado no Diário Oficial em 13 de outubro, que substitui o decreto de 2022, segundo o Ministério da Justiça.',
    '## Atendimento humano',
    'O consumidor deve poder falar com uma pessoa das 8h às 20h, todos os dias, inclusive fins de semana e feriados, por telefone e por canais eletrônicos. Robôs e inteligência artificial podem fazer a triagem, mas não podem impedir o acesso a um atendente nesse horário. Pelo menos um canal eletrônico tem de funcionar 24 horas.',
    'Em pelo menos 80% dos casos, o contato com um atendente deve acontecer em até 20 segundos; nos demais, a espera máxima é de 5 minutos. O caminho até resolver o problema tem no máximo cinco níveis, e a empresa não pode exigir CPF ou número de contrato para começar o atendimento.',
    '## Cancelamento e prazos',
    'A opção de cancelar tem de estar em todos os níveis do atendimento, inclusive no primeiro, e também no mesmo canal em que o serviço foi contratado. O cancelamento vale na hora, salvo justificativa técnica. Pedidos que não são urgentes precisam de resposta em até 7 dias corridos.',
    '## O que muda para os apps',
    'Plataformas que vendem produtos ou serviços de terceiros, apps de transporte de passageiros e serviços de entrega terão de apresentar à Secretaria Nacional do Consumidor (Senacon) dados sobre o atendimento: número de reclamações, taxa de resolução, reclamações nos Procons e nas agências reguladoras e grau de satisfação dos clientes. A Senacon poderá exigir mudanças e aplicar sanções.',
    'As regras também valem para serviços financeiros, de pagamento e de crédito digitais supervisionados pelo Banco Central, segundo o Ministério da Justiça.'
  ],
  box: { type: 'facts', title: 'O novo SAC', rows: [['Decreto', 'nº 13.135/2026'], ['Vale a partir de', '2 de novembro'], ['Atendimento humano', 'Das 8h às 20h, todos os dias'], ['Espera', 'Até 20 segundos em 80% dos casos'], ['Resposta', 'Até 7 dias corridos']] },
  sources: [['Ministério da Justiça', U.mjSac], ['Tribuna Hoje', U.thSac]] },

{ id: 'bndes-move-aplicativos-carro-novo', cat: 'brasil', own: false, t: '2026-10-29T12', d: '29 out 2026', img: 'mercado', src: 'Agência Brasil', url: U.abMove,
  title: 'Governo autoriza contrato de R$ 30 bilhões com o BNDES para financiar carro novo de motoristas de app e taxistas',
  sum: 'Podem pedir motoristas com cadastro ativo há pelo menos 1 ano e no mínimo 100 corridas no período, além de taxistas regulares. A meta é vender pelo menos 200 mil carros.',
  body: [
    'O despacho do Ministério da Fazenda saiu no Diário Oficial de 29 de outubro e faz parte do programa Move Brasil. O crédito é para carros novos que cumpram critérios de sustentabilidade. A Agência Brasil não informa juros, prazos nem quando as contratações começam.'
  ] },

{ id: 'biocatch-golpes-celular-roubado', cat: 'brasil', own: false, t: '2026-10-30T11', d: '30 out 2026', img: 'celular', src: 'TI Inside', url: U.tiBiocatch,
  title: 'Golpes em que o criminoso se passa por outra pessoa ou empresa crescem cerca de 140% no Brasil, diz a BioCatch',
  sum: 'As fraudes com celulares roubados subiram cerca de 340%. Segundo a empresa, 78% das transações bancárias no país passam pelo celular.',
  body: [
    'Os números vêm de relatórios da BioCatch, empresa de prevenção a fraudes. O texto não informa o período exato das altas. Entre os líderes de bancos brasileiros ouvidos, 89% viram aumento nas tentativas de golpe e 63% já identificaram deepfakes, segundo o TI Inside.'
  ] },

{ id: 'pix-mei-golpe-cadastro', cat: 'brasil', own: false, t: '2026-10-29T13', d: '29 out 2026', img: 'celular', src: 'Agência Brasil', url: U.abPixMei,
  title: 'Governo alerta: cadastro do Pix MEI não começou, e mensagens com link são golpe',
  sum: 'O programa, de até R$ 5 mil por beneficiário, só começa em 2027. É falsa a informação de parcelas de R$ 400.',
  body: [
    'Segundo o ministro do Empreendedorismo, Paulo Pereira, as regras saem até o fim de 2026, e a prioridade será para mulheres empreendedoras e MEIs de menor faturamento. Dados pessoais e bancários só devem ser informados na página oficial do programa Prospera MEI.'
  ] },

{ id: 'bc-liquida-mw-pay', cat: 'brasil', own: false, t: '2026-10-29T12', d: '29 out 2026', img: 'mercado', src: 'SBT News', url: U.sbtMwPay,
  title: 'Banco Central liquida a MW Pay, empresa de pagamentos de Joinville que oferecia serviços ligados ao Pix',
  sum: 'O BC cita "graves violações" às regras do sistema de pagamentos, sem detalhar quais. Os bens dos donos ficaram bloqueados.',
  body: [
    'A empresa tinha autorização para emitir moeda eletrônica desde setembro de 2024 e menos de 0,0002% dos ativos do sistema financeiro. A reportagem não informa o efeito sobre os clientes, e a empresa não respondeu ao SBT News.'
  ] },

{ id: '99food-uberlandia-araguari', cat: 'brasil', own: false, t: '2026-10-29T12', d: '29 out 2026', img: 'celular', src: 'O Tempo', url: U.otNoveNove,
  title: '99Food começa a funcionar em Uberlândia e Araguari, em Minas, com 1,8 mil restaurantes',
  sum: 'São cerca de 1,7 mil entregadores parceiros, e o tempo médio de entrega é de 29 minutos em até 5 km.',
  body: [
    'Com as duas cidades, o app de entregas da 99 está em cerca de 120 municípios, segundo O Tempo. A reportagem não informa taxas nem promoções.'
  ] },

{ id: 'picpay-vendedor-ia-whatsapp', cat: 'brasil', own: false, t: '2026-10-27T15', d: '27 out 2026', img: 'celular', src: 'TI Inside', url: U.tiPicpay,
  title: 'PicPay lança vendedor com IA no WhatsApp e loja online grátis para pequenas empresas',
  sum: 'As ferramentas são para clientes do PicPay Empresas. O vendedor responde por texto e áudio e leva a conversa até o pagamento.',
  body: [
    'A loja online é criada com IA e aceita Pix, cartão e QR Code. O lançamento é gradual. O app tem mais de 70 milhões de usuários, segundo o TI Inside.'
  ] },

{ id: 'anpd-guia-eca-digital', cat: 'brasil', own: false, t: '2026-10-28T14', d: '28 out 2026', img: 'plataforma', src: 'Mobile Time', url: U.mtAnpd,
  title: 'ANPD publica guia que diz quais apps e plataformas precisam seguir o ECA Digital',
  sum: 'Redes sociais, lojas de apps, jogos, sistemas operacionais e serviços de mensagem estão entre os serviços com provável acesso de crianças e adolescentes.',
  body: [
    'O guia é uma orientação, e não uma norma. Serviços fora da lista, como marketplaces, serão avaliados caso a caso. As regras sobre verificação de idade e sobre punições ainda vão sair, segundo o Mobile Time.'
  ] },

{ id: 'anatel-biometria-facial-linhas', cat: 'brasil', own: true, t: '2026-10-28T18', d: '28 out 2026', img: 'celular', read: 3,
  title: 'Anatel vai exigir reconhecimento facial para ativar e manter linhas de celular; sem validação, linha pode ser cancelada a partir de 2029',
  sum: 'A regra vale para pessoas físicas e MEIs. As operadoras têm até setembro de 2027 para exigir a validação nas novas linhas pré-pagas, e quem já é cliente tem até o fim de 2028.',
  body: [
    'A Anatel aprovou em 28 de outubro uma norma técnica que torna obrigatória a validação por reconhecimento facial, com prova de vida, para ativar e manter linhas de celular, segundo a agência. A regra vale para pessoas físicas e microempreendedores individuais (MEIs).',
    '## Como vai funcionar',
    'A imagem do rosto será comparada com bases de biometria que já existem, públicas ou de empresas privadas. A validação pode ser feita nas lojas e nos sites e apps oficiais das operadoras e deve seguir a Lei Geral de Proteção de Dados (LGPD). A Anatel diz que haverá procedimentos alternativos para quem não conseguir fazer a validação biométrica. Quem tem várias linhas precisa validar só uma vez, segundo o Canaltech.',
    '## Os prazos',
    'As operadoras têm até 30 de setembro de 2027 para aplicar a regra nas novas linhas pré-pagas, e até 31 de dezembro de 2027 nas novas linhas pós-pagas, nas portabilidades, nas trocas de chip e nas mudanças de cadastro pedidas pelo cliente. Os clientes atuais que nunca foram validados precisam fazer o recadastramento até 31 de dezembro de 2028.',
    '## Quem não validar',
    'A partir de janeiro de 2029, as linhas não regularizadas podem ser suspensas e depois canceladas, segundo a Anatel. O site Telesíntese detalha que os clientes pendentes serão avisados em 1º de novembro de 2028 e que o cancelamento pode ocorrer a partir de 1º de maio de 2029. A regra vale para todas as operadoras, inclusive as virtuais. Linhas em nome de empresas ficam de fora.',
    'A norma foi preparada pelo subgrupo de combate a fraudes e golpes da Anatel e aprovada por consenso no grupo de trabalho de segurança, segundo o Teletime.'
  ],
  box: { type: 'facts', title: 'Os prazos da biometria', rows: [['Novas linhas pré-pagas', 'Até 30/9/2027'], ['Pós-pago, portabilidade e troca de chip', 'Até 31/12/2027'], ['Clientes atuais', 'Até 31/12/2028'], ['Linhas não validadas', 'Suspensão a partir de janeiro de 2029']] },
  sources: [['Anatel', U.anBio], ['Teletime', U.ttBio], ['Telesíntese', U.tsBio], ['Canaltech', U.ctBio]] },

];
