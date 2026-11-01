/* ============================================================
   NOVERA: conteúdo do site. Edite este arquivo e rode `node build.js`.
   Regras completas em ATUALIZACAO.md.
   ============================================================ */

/* Topo do site: data da edição e destaques da faixa de cima */
const META = {
  /* Endereço público do site, sem barra no final. Usado nos links das redes sociais. */
  siteUrl: 'https://novera-sepia.vercel.app',
  dataExtenso: 'Domingo, 1º de novembro de 2026',
  edicao: '1 nov 2026',
  /* Faixa do topo: 1 a 3 itens [rótulo, texto curto]. Use só fatos que estão em notícias do site. */
  destaques: [
    ['Cripto', 'Uphold e Oobit deixam o Brasil; clientes têm até o fim de novembro para sacar'],
    ['Segunda (2)', 'Novas regras do SAC: atendimento humano das 8h às 20h, todos os dias'],
    ['Em alta', 'WhatsApp libera mensagem fixada para sempre e status só para o grupo']
  ]
};

/* Home: destaque principal, dois laterais e três da faixa de baixo (IDs de notícias "own: true") */
const FEATURED = {
  lead: 'uphold-oobit-deixam-brasil-cripto',
  side: ['whatsapp-grupos-quatro-recursos', 'kalshi-serie-g-40-bilhoes'],
  also: ['threads-curtida-personalizada-teste-brasil', 'chatgpt-armas-adolescentes-violencia', 'chromagraph-camera-iphone']
};

/* Home: "Escolhas da redação" (5 IDs) */
const PICKS = ['decreto-sac-apps-senacon', 'claude-planos-max-ultra-limite-5-horas', 'coinbase-3tri-2026', 'matiks-jogos-de-matematica-india', 'zenzap-chat-com-ia-para-equipes'];

const U = {
  /* Atualização de 1 nov 2026 */
  /* Lançamentos */
  m9Chroma: 'https://9to5mac.com/2026/10/30/knives-out-director-launches-iphone-camera-app-that-shoots-like-his-movies/',
  gzChroma: 'https://gizmodo.com/the-last-jedi-director-launches-a-new-camera-app-for-iphone-because-hes-a-good-guy-2000832061',
  psResonance: 'https://www.pushsquare.com/news/2026/10/quirky-rpg-resonance-of-fate-is-back-with-an-enhanced-remaster-for-ps5',
  psQueens: 'https://www.pushsquare.com/news/2026/10/inspired-by-classic-fromsoftware-queens-domain-looks-a-fascinating-ps5-adventure',
  giSword: 'https://gameinformer.com/opinion/2026/10/30/the-video-games-and-more-you-should-play-this-weekend-october-30-2026',
  /* Atualizações */
  ctWaGrupos: 'https://canaltech.com.br/apps/whatsapp-ganha-4-recursos-para-domar-grupos-caoticos-veja-novidades/',
  wbiGrupos: 'https://wabetainfo.com/whatsapp-launches-four-updates-to-help-users-catch-up-in-groups/',
  smtThreads: 'https://www.socialmediatoday.com/news/threads-launches-custom-like-buttons/873267/',
  omThreads: 'https://onlinemarketing.de/social-media-marketing/threads-meme-feature-personalisierte-like-buttons',
  agAppleMusic: 'https://androidgeek.pt/apple-music-7-0-android-liquid-glass',
  ctChromeBusca: 'https://canaltech.com.br/software/chrome-vai-ganhar-novos-recursos-de-busca-extremamente-uteis-conheca/',
  /* IA */
  tnsUltra: 'https://thenewstack.io/claude-ultra-session-limit/',
  nbcUltra: 'https://www.notebookcheck.net/Claude-Ultra-drops-the-five-hour-limit-for-verified-accounts.1438692.0.html',
  rtArmas: 'https://www.yahoo.com/news/us/articles/openai-limit-weapons-information-teens-173008704.html',
  dsArmas: 'https://www.datastudios.org/post/openai-chatgpt-teens-weapons-information-limits-violence-chat-ending',
  gdClaudeJogos: 'https://www.gamedeveloper.com/programming/anthropic-appears-to-have-ordered-ai-tool-claude-to-stop-remaking-video-games',
  /* Startups */
  kaKalshi: 'https://news.kalshi.com/p/kalshi-series-g-40-billion-valuation',
  ffKalshi: 'https://financefeeds.com/kalshi-valuation-doubles-to-40-billion-after-1-billion-series-g-raise/',
  cbCoinbase: 'https://investor.coinbase.com/news/news-details/2026/Coinbase-Q3-2026-Earnings-Show-All-time-high-Coinbase-One-Subscribers-and-Prediction-Markets-Surpassing-200-Million-in-Annualized-Revenue/default.aspx',
  invCoinbase: 'https://www.investing.com/news/transcripts/earnings-call-transcript-coinbase-posts-q3-2026-eps-beat-as-stock-falls-after-hours-93CH-4985391',
  szUnico: 'https://www.startupz.com.br/artigo/unico-lanca-human-token-com-preco-unico-global-e-corta-25-do-quadro-de-funcionarios',
  tcOllie: 'https://techcrunch.com/2026/10/30/ollie-a-privacy-focused-ai-assistant-is-shutting-down/',
  /* Ideias para o Brasil */
  incMatiks: 'https://inc42.com/buzz/matiks-bags-10-mn-to-take-its-puzzle-gaming-platform-global/',
  enMatiks: 'https://entrackr.com/news/social-gaming-startup-matiks-raises-10-mn-in-pre-series-a-led-by-general-catalyst-12754114',
  tcZenzap: 'https://techcrunch.com/2026/10/14/zenzap-raises-44m-for-its-ai-chat-app-that-aims-to-replace-whatsapp-in-the-workplace/',
  rwZenzap: 'https://www.reworked.co/collaboration-productivity/zenzap-brings-ai-agents-to-frontline-work-chat/',
  daTalent: 'https://disruptafrica.com/2026/10/30/aboyeji-backed-ai-engineering-talent-platform-talent-nation-raises-pre-seed-funding/',
  pmSalary: 'https://sea.peoplemattersglobal.com/news/funding-and-investment/salary-hero-raises-usdollar76-million-to-expand-earned-wage-access-business-in-malaysia-52736',
  /* No Brasil */
  bnUphold: 'https://bitnoticias.com.br/noticias/gigante-global-de-criptomoedas-uphold-anuncia-saida-do-brasil',
  lcOobit: 'https://livecoins.com.br/cartao-de-criptomoedas-oobit-vai-encerrar-contas-de-brasileiros-e-da-uma-semana-de-prazo-para-saques-um-dia-apos-anunciar-expansao-internacional/',
  bnSaidas: 'https://bitnoticias.com.br/noticias/o-prazo-do-banco-central-acabou-e-agora-quem-pediu-licenca-cripto/',
  abAuxilio: 'https://agenciabrasil.ebc.com.br/geral/noticia/2026-10/governo-alerta-para-golpe-envolvendo-o-auxilio-reconstrucao',
  abMetaPosts: 'https://agenciabrasil.ebc.com.br/justica/noticia/2026-10/justica-manda-meta-excluir-posts-sobre-demissao-por-voto-politico',
  /* Atualização de 31 out 2026 */
  /* Lançamentos */
  ktPhantom: 'https://kotaku.com/phantom-blade-zero-just-rocketed-onto-steam-with-700000-concurrent-players-2000751005',
  cmtPhantom: 'https://cenariomt.com.br/jogos/games/phantom-blade-zero-libera-no-brasil-veja-precos/',
  mgbSaints: 'https://www.mobilegamer.com.br/en/2026/10/saints-row-the-third-remastered-android-ios-launch-prices.html',
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
  bnRently: 'https://www.bernama.com/tv/news.php?id=2626473',
  tssGhanem: 'https://thestartupscene.me/INVESTMENTS/Saudi-Proptech-Ghanem-Raises-1-5-Million-Pre-Seed-Extension',
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
  /* Atualizações */
  smtXFotos: 'https://www.socialmediatoday.com/news/x-lets-users-share-credit-on-reposted-images/873100/',
  /* IA */
  bcProLimites: 'https://www.bleepingcomputer.com/news/artificial-intelligence/openai-doubles-chatgpt-pro-usage-limits-after-backlash-over-planned-50-percent-cut/',
  tcAlexa: 'https://techcrunch.com/2026/10/29/amazon-updates-alexa-to-help-you-manage-shopping-lists-and-subscriptions-and-update-delivery-instructions/',
  acXreal: 'https://www.androidcentral.com/gaming/virtual-reality/launch-day-xreal-aura-is-here',
  /* Startups */
  tcDoorDash: 'https://techcrunch.com/2026/10/29/doordash-to-acquire-instacart-for-17b/',
  nfDoorDash: 'https://neofeed.com.br/negocios/a-aposta-de-us-17-bilhoes-da-doordash-para-fazer-o-app-do-jantar-ser-o-app-das-compras-da-semana/',
  secDoorDash: 'https://www.sec.gov/Archives/edgar/data/0001792789/000179278926000062/proddashex991-pressrelease.htm',
  secReddit: 'https://www.sec.gov/Archives/edgar/data/0001713445/000171344526000114/earningspressreleaseq326.htm',
  /* Ideias para o Brasil */
  tmMedikea: 'https://techmoran.com/2026/10/29/tanzanian-health-startup-medikea-raises-1-2-million-to-own-care-not-just-connect-it',
  cdMedikea: 'https://thecondia.com/medikea-raises-1-2m-pre-seed-funding/',
  /* No Brasil */
  abPixMei: 'https://www.dgabc.com.br/Noticia/4365781/governo-alerta-que-cadastramento-para-o-pix-mei-ainda-nao-comecou',
  sbtMwPay: 'https://sbtnews.sbt.com.br/noticia/economia/banco-central-liquida-mw-pay-por-graves-irregularidades',
  otNoveNove: 'https://otempo.com.br/minas-sa/2026/10/29/com-1-8-mil-restaurantes-99food-inicia-operacao-em-uberlandia-e-araguari',
  /* Atualizações */
  wbiBackup: 'https://wabetainfo.com/whatsapp-is-rolling-out-a-redesigned-chat-backup-screen/',
  mbBackup: 'https://www.mobilebit.com.br/tecnologia/2026/10/28/whatsapp-nova-tela-backup/',
  wbiMidia: 'https://wabetainfo.com/whatsapp-is-testing-a-new-media-hub-for-the-ios-app/',
  g9Autofill: 'https://9to5google.com/2026/10/28/chrome-autofill-gemini/',
  tcReddit: 'https://techcrunch.com/2026/10/28/reddit-is-the-latest-platform-to-embrace-the-for-you-feed/',
  /* IA */
  g9Connected: 'https://9to5google.com/2026/10/28/gemini-google-connected-apps-platform/',
  /* Ideias para o Brasil */
  enAstro: 'https://entrackr.com/fintrackr/astrotalks-profit-jumps-10x-to-rs-222-cr-in-fy26-overseas-biz-grows-26x-12761666',
  enZorit: 'https://entrackr.com/news/bijnis-rebrands-as-zorit-raises-rs-27-cr-led-by-sparrow-capital-12762019',
  /* Atualização de 27 out 2026: estreia do formato de aplicativos */
  /* Ideias para o Brasil */
  incCent: 'https://inc42.com/buzz/cent-raises-15-mn-to-scale-ai-led-preventive-healthcare-platform',
};

const NEWS = [
/* ===================== LANÇAMENTOS ===================== */
{ id: 'chromagraph-camera-iphone', cat: 'lancamentos', own: true, t: '2026-10-30T12', d: '30 out 2026', img: 'celular', read: 2,
  title: 'Diretor Rian Johnson lança o Chromagraph Camera, app de câmera para iPhone que dá às fotos o visual de seus filmes',
  sum: 'O app custa US$ 12,99, sem compras internas, e foi feito pelo diretor de fotografia Steve Yedlin. Só tira fotos por enquanto e não tem versão para Android.',
  body: [
    'O diretor de cinema Rian Johnson, de "Entre Facas e Segredos", lançou o Chromagraph Camera, um app de câmera para iPhone. Ele encomendou o app ao diretor de fotografia Steve Yedlin, com quem trabalha nos filmes, e ao especialista em ciência de cor Eric Cameron, segundo o 9to5Mac. A ideia inicial era usar o app só para ele; depois, decidiu lançá-lo ao público.',
    '## Como funciona',
    'O app parte do arquivo bruto da câmera (RAW) e faz o próprio processamento da imagem, em vez de aplicar um filtro sobre o tratamento padrão do iPhone. O usuário enquadra e fotografa, e vê o resultado final depois, na galeria. Há ajustes de cor, tom, textura, exposição, granulação e halo de luz.',
    'O arquivo RAW fica guardado em qualidade total, e dá para exportar em JPEG ou HEIC com o visual aplicado, inclusive de forma automática para a galeria de fotos.',
    '## Preço e limites',
    'O app custa US$ 12,99, em compra única. Por enquanto, só tira fotos; o vídeo pode vir depois, provavelmente só para iPhones mais novos, segundo o Gizmodo. Os desenvolvedores disseram que uma versão para Android é improvável, porque a equipe é pequena para a variedade de aparelhos. Quando o Gizmodo publicou a reportagem, o app estava em 2º lugar na categoria Foto e Vídeo da App Store dos EUA. As fontes não falam do Brasil.'
  ],
  box: { type: 'facts', title: 'Chromagraph Camera', rows: [['Criadores', 'Rian Johnson e Steve Yedlin'], ['Onde', 'iPhone'], ['Preço', 'US$ 12,99, sem compras no app'], ['Vídeo', 'Ainda não'], ['Android', 'Improvável, segundo os criadores']] },
  sources: [['9to5Mac', U.m9Chroma], ['Gizmodo', U.gzChroma]] },

{ id: 'resonance-of-fate-remaster-ps5-pc', cat: 'lancamentos', own: false, t: '2026-10-30T10', d: '30 out 2026', img: 'tecnologia', src: 'Push Square', url: U.psResonance,
  title: 'RPG Resonance of Fate volta em versão remasterizada para PS5 e PC por US$ 34,99',
  sum: 'A nova edição, da tri-Ace, tem 4K nativo, HDR e opção de jogar em velocidade dobrada. Quem tem a versão de PS4 paga US$ 10 pela atualização.',
  body: [
    'O jogo saiu originalmente no PS3 e já tinha ganhado uma remasterização no PS4. A nova versão traz texturas refeitas e um filtro que pode ser ligado no menu de pausa. No Reino Unido, custa £ 28,99, segundo o Push Square. A fonte não informa o preço no Brasil.'
  ] },

{ id: 'queens-domain-ps5', cat: 'lancamentos', own: false, t: '2026-10-30T09', d: '30 out 2026', img: 'tecnologia', src: 'Push Square', url: U.psQueens,
  title: 'Queen\'s Domain, jogo de ação inspirado nos clássicos da FromSoftware, chega ao PS5 por US$ 19,99',
  sum: 'O jogo se passa numa ilha interligada, com combate que gasta energia, mais de 50 armas corpo a corpo e mais de 100 inimigos e chefes.',
  body: [
    'O jogo é do estúdio Freshly Baked, com publicação da Future Friends Games. Dá para voar com uma espada sagrada e usar mais de 20 tipos de armas de arremesso. No Reino Unido, custa £ 15,99, segundo o Push Square. A fonte não fala do Brasil.'
  ] },

{ id: 'sword-of-the-sea-xbox-switch-2', cat: 'lancamentos', own: false, t: '2026-10-29T12', d: '29 out 2026', img: 'tecnologia', src: 'Game Informer', url: U.giSword,
  title: 'Sword of the Sea, dos criadores de Abzû, chega ao Xbox Series X|S e ao Nintendo Switch 2',
  sum: 'O jogo de aventura do estúdio Giant Squid já estava no PS5 e no PC desde agosto de 2025.',
  body: [
    'A estreia nos novos consoles foi em 29 de outubro, segundo o Game Informer, que incluiu o jogo na lista de sugestões para o fim de semana. A fonte não informa preço.'
  ] },

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

/* ===================== ATUALIZAÇÕES ===================== */
{ id: 'whatsapp-grupos-quatro-recursos', cat: 'atualizacoes', own: true, t: '2026-10-30T10', d: '30 out 2026', img: 'celular', read: 2,
  title: 'WhatsApp lança quatro recursos para grupos, como mensagem fixada para sempre e status visto só pelos membros',
  sum: 'Também chegam um filtro de menções e respostas e o envio do histórico recente a quem já entrou no grupo. A liberação é gradual, no Android e no iPhone.',
  body: [
    'O WhatsApp anunciou quatro novidades para grupos, segundo o Canaltech e o WABetaInfo. A liberação começou para alguns usuários, no Android e no iPhone, e deve chegar a mais contas nas próximas semanas, segundo o WABetaInfo. As fontes não falam especificamente do Brasil.',
    '## Os quatro recursos',
    'Mensagem fixada sem prazo: além das opções de 24 horas, 7 dias e 30 dias, agora dá para deixar uma mensagem no topo do grupo para sempre, o que serve para endereços, horários e regras.',
    'Histórico para quem já entrou: dá para enviar as mensagens recentes a um participante tocando no nome dele, e não só na hora de adicioná-lo. Segundo o WhatsApp, as mensagens compartilhadas continuam com criptografia de ponta a ponta.',
    'Status do grupo: a atualização de status pode ser mostrada só aos membros de um grupo, que podem ver, reagir e publicar o próprio status. A publicação some em 24 horas.',
    'Filtro de menções: um novo filtro na lista de conversas reúne os grupos e comunidades em que o usuário foi mencionado, recebeu uma resposta direta ou foi chamado com o "@todos".',
    '## Testes anteriores',
    'O status de grupo e o filtro de menções já tinham aparecido em versões de teste (beta) do app, segundo o WABetaInfo.'
  ],
  box: { type: 'facts', title: 'Novidades nos grupos', rows: [['Fixar mensagem', 'Nova opção "para sempre"'], ['Histórico', 'Envio a quem já entrou'], ['Status do grupo', 'Só para membros, some em 24 horas'], ['Filtro', 'Menções, respostas e @todos'], ['Liberação', 'Gradual, Android e iPhone']] },
  sources: [['Canaltech', U.ctWaGrupos], ['WABetaInfo', U.wbiGrupos]] },

{ id: 'threads-curtida-personalizada-teste-brasil', cat: 'atualizacoes', own: true, t: '2026-10-29T18', d: '29 out 2026', img: 'plataforma', read: 2,
  title: 'Threads testa curtida personalizada com emoji, figurinha ou GIF, e o Brasil está entre os três países do teste',
  sum: 'O teste é com usuários selecionados no Brasil, na Coreia do Sul e na Indonésia. A escolha vale para o perfil inteiro.',
  body: [
    'O Threads, rede social de textos da Meta, começou a testar um botão de curtida personalizado, segundo o Social Media Today. O usuário escolhe um emoji, uma figurinha ou um GIF, que aparece quando outras pessoas curtem os posts dele. A escolha vale para todo o perfil, não para cada post.',
    '## Onde é o teste',
    'O chefe do Threads, Connor Hayes, disse que o recurso está em teste com usuários selecionados na Coreia do Sul, no Brasil e na Indonésia. Não há previsão de quando, ou se, a função chega a todos.',
    '## Outras novidades',
    'O Threads também desenvolve uma função chamada Meme, para remixar posts com GIFs, imagens e música a partir do menu de repostagem, ainda sem data de lançamento, segundo o OnlineMarketing.de. Pelos dados da Meta citados pelo site, o Threads passou de 500 milhões de usuários ativos por mês em junho de 2026.'
  ],
  box: { type: 'facts', title: 'Curtida personalizada', rows: [['App', 'Threads'], ['O que muda', 'Emoji, figurinha ou GIF no lugar do coração'], ['Vale para', 'O perfil inteiro'], ['Países do teste', 'Brasil, Coreia do Sul e Indonésia'], ['Situação', 'Teste com usuários selecionados']] },
  sources: [['Social Media Today', U.smtThreads], ['OnlineMarketing.de', U.omThreads]] },

{ id: 'apple-music-7-android-novo-visual', cat: 'atualizacoes', own: false, t: '2026-10-31T10', d: '31 out 2026', img: 'celular', src: 'Android Geek', url: U.agAppleMusic,
  title: 'Apple Music 7.0 para Android sai do teste e traz visual translúcido, como o do iPhone',
  sum: 'A versão começou a ser distribuída na Play Store depois de cerca de um mês em teste. O ícone e a cor de destaque mudaram.',
  body: [
    'A barra inferior fica flutuante e translúcida, e o miniplayer se separa dela. As páginas de artista e os ajustes também foram redesenhados, mas a tela da música que está tocando não mudou, segundo o Android Geek.'
  ] },

{ id: 'chrome-localizar-maiusculas-canary', cat: 'atualizacoes', own: false, t: '2026-10-30T18', d: '30 out 2026', img: 'tecnologia', src: 'Canaltech', url: U.ctChromeBusca,
  title: 'Chrome testa busca na página que diferencia maiúsculas e minúsculas',
  sum: 'A ferramenta Localizar (Ctrl+F) também ganha atalhos para ir a resultados fora da tela. Os recursos estão só na versão de teste Canary.',
  body: [
    'Não há previsão para a versão normal do navegador. O Edge já diferencia maiúsculas e minúsculas na busca, segundo o Canaltech.'
  ] },

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

{ id: 'x-repostar-fotos-credito', cat: 'atualizacoes', own: false, t: '2026-10-28T14', d: '28 out 2026', img: 'plataforma', src: 'Social Media Today', url: U.smtXFotos,
  title: 'X deixa repostar fotos de outros usuários com crédito ao autor e divisão de ganhos',
  sum: 'Basta tocar e segurar a foto e escolher "Post photo". O novo post leva um selo com link para quem publicou primeiro.',
  body: [
    'As visualizações contam para as duas contas, e as duas podem ganhar dinheiro pelo programa de pagamento a criadores do X, que exige assinatura Premium e números mínimos de alcance. Antes, imagens repetidas não contavam para o programa, segundo o Social Media Today. A fonte não fala em países.'
  ] },

{ id: 'reddit-feed-para-voce', cat: 'atualizacoes', own: false, t: '2026-10-28T11', d: '28 out 2026', img: 'plataforma', src: 'TechCrunch', url: U.tcReddit,
  title: 'Reddit adota feed "Para você" e separa as recomendações das comunidades seguidas',
  sum: 'A página inicial passa a ter duas abas. Depois de um teste, a mudança chega aos usuários do mundo todo nas próximas semanas.',
  body: [
    'A aba "Para você" mistura as comunidades do usuário com recomendações por interesse, e a "Seguindo" mostra só as comunidades das quais ele participa. O app abre no último feed visto. Alguns participantes do teste reclamaram nos fóruns de ajuda, segundo o TechCrunch.'
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

/* ===================== IA ===================== */
{ id: 'claude-planos-max-ultra-limite-5-horas', cat: 'ia', own: true, t: '2026-10-30T18', d: '30 out 2026', img: 'tecnologia', read: 2,
  title: 'Anthropic muda os nomes dos planos do Claude, e o de US$ 200 vira Ultra, sem o limite de 5 horas no Claude Code',
  sum: 'O Max 5x passa a se chamar Max e o Max 20x vira Ultra. Os preços não mudam. O fim do limite de sessão vale só para contas verificadas.',
  body: [
    'A Anthropic, dona do assistente Claude, mudou os nomes dos planos pagos mais caros na sexta (30), segundo o The New Stack. O Max 5x, de US$ 100 por mês, passa a se chamar Max. O Max 20x, de US$ 200 por mês, vira Ultra. Os preços continuam os mesmos, e quem já assina não precisa fazer nada.',
    '## O fim do limite de 5 horas',
    'No Ultra, o limite de uso que se renova a cada 5 horas deixa de valer no Claude Code, ferramenta de programação, para contas verificadas que ainda tenham cota semanal. A verificação é automática, com base no histórico da conta e dos pagamentos, e não dá para pedir nem acelerar. A Anthropic avisa por e-mail quando o limite é retirado.',
    '## O que continua',
    'O limite semanal continua. O Ultra tem 10 vezes o uso semanal do plano Pro, e o Max, 5 vezes. Conversas e Claude Code dividem a mesma cota. Quando ela acaba, dá para continuar pagando créditos com preço de API. Os planos também dão créditos mensais na plataforma de desenvolvedores: US$ 100 no Max e US$ 200 no Ultra.',
    'Segundo o Notebookcheck, o Ultra só tem assinatura mensal, e o preço de US$ 200 vale para a compra pela web; nos apps de celular, pode ser diferente. As fontes não falam do Brasil.'
  ],
  box: { type: 'table', title: 'Os planos', head: ['Plano', 'Preço', 'Uso semanal'], rows: [['Pro', 'US$ 20/mês', 'Base'], ['Max (antigo Max 5x)', 'US$ 100/mês', '5 vezes o Pro'], ['Ultra (antigo Max 20x)', 'US$ 200/mês', '10 vezes o Pro']], note: 'Fontes: The New Stack e Notebookcheck.' },
  sources: [['The New Stack', U.tnsUltra], ['Notebookcheck', U.nbcUltra]] },

{ id: 'chatgpt-armas-adolescentes-violencia', cat: 'ia', own: true, t: '2026-10-30T17', d: '30 out 2026', img: 'tecnologia', read: 2,
  title: 'ChatGPT vai limitar informações sobre armas para adolescentes e poderá encerrar conversas sobre violência',
  sum: 'As mudanças começam a ser liberadas nas próximas semanas. Contas podem ser suspensas por um tempo, e os pais de adolescentes serão avisados.',
  body: [
    'A OpenAI anunciou novas regras de segurança no ChatGPT, segundo a Reuters. Para usuários com menos de 18 anos, o assistente vai restringir informações práticas sobre armas e sistemas de segurança, mesmo quando não houver sinal de intenção violenta.',
    '## Para todos os usuários',
    'O ChatGPT poderá encerrar sozinho conversas em que a pessoa pareça fixada em violência. Depois de várias conversas assim, a conta pode ser suspensa por um tempo. O assistente também vai dar menos detalhes sobre ataques em massa do passado, como as armas usadas e como foram obtidas.',
    '## Idade e pais',
    'A OpenAI reforçou o sistema que estima a idade do usuário: quem parece ter menos de 18 anos vai para a versão para adolescentes. Adultos classificados por engano podem confirmar a idade, segundo o Data Studios. Os pais serão avisados se a conta do filho for suspensa por falar repetidamente de violência.',
    'As mudanças começam a ser liberadas nas próximas semanas, e a empresa diz que vai continuar ajustando as regras. As fontes não citam países.'
  ],
  box: { type: 'facts', title: 'O que muda', rows: [['Menores de 18', 'Menos informação prática sobre armas'], ['Todos', 'Conversas sobre violência podem ser encerradas'], ['Contas', 'Suspensão temporária após várias conversas'], ['Pais', 'Avisados se a conta do filho for suspensa'], ['Quando', 'Nas próximas semanas']] },
  sources: [['Reuters (via Yahoo News)', U.rtArmas], ['Data Studios', U.dsArmas]] },

{ id: 'claude-code-recusa-recriar-jogos', cat: 'ia', own: false, t: '2026-10-30T15', d: '30 out 2026', img: 'tecnologia', src: 'Game Developer', url: U.gdClaudeJogos,
  title: 'Claude Code passa a recusar a criação de cópias de jogos que já existem',
  sum: 'A Anthropic confirmou que acrescentou instruções à ferramenta de programação. Jogos originais e de um gênero continuam permitidos.',
  body: [
    'A mudança foi notada por usuários, que disseram não haver como desligá-la. Um funcionário da Anthropic afirmou que foram acrescentadas duas frases às instruções do Claude Code, segundo o Game Developer. A reportagem lembra que estúdios independentes adiaram ou cancelaram testes abertos de seus jogos por medo de cópias.'
  ] },

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

/* ===================== STARTUPS ===================== */
{ id: 'kalshi-serie-g-40-bilhoes', cat: 'startups', own: true, t: '2026-10-29T15', d: '29 out 2026', img: 'mercado', read: 3,
  title: 'Kalshi, plataforma de mercados de previsão, capta US$ 1 bilhão e passa a valer US$ 40 bilhões',
  sum: 'A empresa diz ter mais de 30 milhões de contas e mais de US$ 1 bilhão em receita anualizada fora dos esportes. A avaliação quase dobrou desde maio.',
  body: [
    'A Kalshi, plataforma em que os usuários negociam contratos sobre o resultado de eventos, anunciou em 29 de outubro uma rodada série G de US$ 1 bilhão, com avaliação de US$ 40 bilhões. A rodada foi liderada por Wellington e Sequoia e teve, entre outros, Baillie Gifford, a16z, Coatue, Morgan Stanley Investment Management e CapitalG, segundo o comunicado da empresa.',
    '## Os números da empresa',
    'A Kalshi diz que mais de 30 milhões de contas já foram criadas na plataforma e que o volume negociado, em ritmo anual, passa de US$ 1 trilhão. A receita anualizada só com mercados que não são de esportes passa de US$ 1 bilhão. A operação para o público internacional está em mais de 140 países.',
    'Segundo o FinanceFeeds, a avaliação subiu cerca de 82% em relação aos US$ 22 bilhões da rodada anterior, de maio de 2026. O site lembra que os números são da própria empresa e não foram auditados.',
    '## Disputas nos EUA',
    'A empresa enfrenta processos nos Estados Unidos. O estado de Nova York a processou em julho, e Utah apresentou acusações criminais em 28 de outubro contra a empresa e os cofundadores Tarek Mansour e Luana Lopes Lara, segundo o FinanceFeeds. São acusações, sem julgamento. A Kalshi diz que vai expandir com foco na América Latina e na Europa, sem citar países.'
  ],
  box: { type: 'facts', title: 'Kalshi', rows: [['Rodada', 'US$ 1 bilhão (série G)'], ['Avaliação', 'US$ 40 bilhões'], ['Líderes', 'Wellington e Sequoia'], ['Contas', 'Mais de 30 milhões'], ['Receita anualizada fora dos esportes', 'Mais de US$ 1 bilhão']] },
  sources: [['Kalshi (comunicado)', U.kaKalshi], ['FinanceFeeds', U.ffKalshi]] },

{ id: 'coinbase-3tri-2026', cat: 'startups', own: true, t: '2026-10-29T20', d: '29 out 2026', img: 'mercado', read: 2,
  title: 'Coinbase lucra US$ 718,7 milhões no trimestre, e mercados de previsão passam de US$ 200 milhões em receita anualizada',
  sum: 'A receita foi de US$ 1,2 bilhão, estável em relação ao trimestre anterior. Assinaturas e serviços já são 49% da receita líquida.',
  body: [
    'A Coinbase, corretora de criptomoedas americana, teve lucro líquido de US$ 718,7 milhões no terceiro trimestre de 2026, segundo o comunicado da empresa. Sem efeitos contábeis, o lucro ajustado foi de US$ 77,7 milhões. O Ebitda ajustado, que mede o resultado da operação, foi de US$ 332,9 milhões, 60% a mais que no trimestre anterior.',
    '## Além da negociação de cripto',
    'Assinaturas e serviços somaram 49% da receita líquida. O número de assinantes pagos do Coinbase One, plano mensal da corretora, chegou ao recorde, com alta de 24% em um ano, mas a empresa não divulgou o total. Os mercados de previsão passaram de US$ 200 milhões em receita anualizada, e os negociadores diários desse produto subiram mais de 60% sobre o trimestre anterior.',
    '## A reação',
    'A receita total foi de US$ 1,2 bilhão, estável em relação ao trimestre anterior, e o volume de compra e venda direta de cripto caiu 10%, segundo o Investing.com. A ação fechou o dia a US$ 160,68 e caiu para US$ 157,10 nas negociações depois do fechamento.'
  ],
  box: { type: 'facts', title: 'Coinbase no 3º trimestre', rows: [['Lucro líquido', 'US$ 718,7 milhões'], ['Lucro ajustado', 'US$ 77,7 milhões'], ['Receita', 'US$ 1,2 bilhão'], ['Assinaturas e serviços', '49% da receita líquida'], ['Mercados de previsão', 'Mais de US$ 200 milhões anualizados']] },
  sources: [['Coinbase (comunicado)', U.cbCoinbase], ['Investing.com', U.invCoinbase]] },

{ id: 'unico-human-token-corte', cat: 'startups', own: false, t: '2026-10-30T10', d: '30 out 2026', img: 'mercado', src: 'Startupz', url: U.szUnico,
  title: 'Brasileira Unico lança identificação por selfie com preço único no mundo e corta 25% dos funcionários',
  sum: 'O Human Token transforma uma selfie num número único para cada pessoa, sem pedir nome nem documento. A empresa tem cerca de 700 funcionários.',
  body: [
    'A tecnologia já funciona no Brasil, no México, na China, na Nigéria, nas Filipinas e na Indonésia. A receita global da Unico subiu 41% no primeiro semestre de 2026, e a de fora do Brasil, 56%. Há três anos, a empresa tinha cerca de 1.400 funcionários, segundo o Startupz.'
  ] },

{ id: 'ollie-assistente-ia-encerra', cat: 'startups', own: false, t: '2026-10-30T14', d: '30 out 2026', img: 'tecnologia', src: 'TechCrunch', url: U.tcOllie,
  title: 'Ollie, assistente de IA focado em privacidade, vai fechar em 6 de novembro',
  sum: 'A startup tinha captado US$ 7,5 milhões em rodada liderada pela Khosla Ventures.',
  body: [
    'O presidente-executivo, Bill Lennon, disse que a empresa não conseguiu acompanhar o mercado. Com a chegada de concorrentes, ficou mais difícil se destacar e captar dinheiro, segundo o TechCrunch.'
  ] },

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

{ id: 'reddit-3tri-2026', cat: 'startups', own: false, t: '2026-10-29T17', d: '29 out 2026', img: 'mercado', src: 'Reddit (comunicado)', url: U.secReddit,
  title: 'Receita do Reddit cresce 53% no trimestre, e usuários de fora dos EUA sobem 24%',
  sum: 'A empresa faturou US$ 895 milhões e lucrou US$ 283 milhões. Tem 130,3 milhões de usuários por dia, mas o número caiu 2% nos EUA.',
  body: [
    'Os usuários diários de fora dos EUA chegaram a 79,6 milhões, e os dos EUA ficaram em 50,7 milhões. Para o quarto trimestre, a empresa prevê receita de US$ 1 bilhão a US$ 1,03 bilhão, segundo o comunicado.'
  ] },

/* ===================== IDEIAS PARA O BRASIL ===================== */
{ id: 'matiks-jogos-de-matematica-india', cat: 'ideias', own: true, t: '2026-10-26T12', d: '26 out 2026', img: 'celular', read: 3,
  title: 'Na Índia, o Matiks transforma matemática e lógica em jogos de disputa entre usuários e capta US$ 10 milhões',
  sum: 'O app tem cerca de 300 mil usuários por dia e mais de 2,2 milhões de jogadores. O dinheiro vai para a expansão, começando pelos EUA.',
  body: [
    'O Matiks, startup de Bengaluru fundada em 2024, captou US$ 10 milhões, cerca de ₹95 crore, numa rodada pré-série A liderada pela General Catalyst, segundo o Inc42. Também entraram Ronnie Screwvala, fundador da upGrad, e os investidores que já estavam na empresa: Info Edge Ventures, Tanglin Venture Partners e Untitled Ventures.',
    '## Como funciona',
    'O app reúne jogos rápidos de matemática, memória, lógica e quebra-cabeça, em que os usuários disputam partidas uns contra os outros. Começou como um jogo de cálculo mental e depois lançou o SNAC, uma sequência sem fim de quebra-cabeças para jogar sozinho, segundo o Entrackr.',
    'Até setembro, mais de 2,2 milhões de pessoas tinham jogado, com 48 milhões de partidas. O número de usuários diários mais que dobrou desde junho e passou de 300 mil. A empresa diz que já há público no Japão, nos EUA e na Coreia do Sul. As fontes não informam como o app ganha dinheiro.',
    '## Os planos',
    'O dinheiro vai para a expansão internacional, começando pelos EUA, para novos jogos e para uma ferramenta com IA que deixará os usuários criarem e publicarem jogos sem programar.',
    '## Por que olhar para o Brasil',
    'Análise da redação: no Brasil, os apps de educação e os jogos de celular costumam andar separados. Um modelo que transforma raciocínio rápido em disputa entre amigos, no formato de jogo social, pode atrair estudantes e adultos. O desafio é encontrar uma forma de ganhar dinheiro sem afastar o público, ponto que a própria empresa indiana ainda não detalhou.'
  ],
  box: { type: 'facts', title: 'Matiks', rows: [['País', 'Índia'], ['Captação', 'US$ 10 milhões (pré-série A)'], ['Líder da rodada', 'General Catalyst'], ['Jogadores', 'Mais de 2,2 milhões'], ['Usuários por dia', 'Mais de 300 mil']] },
  sources: [['Inc42', U.incMatiks], ['Entrackr', U.enMatiks]] },

{ id: 'zenzap-chat-com-ia-para-equipes', cat: 'ideias', own: true, t: '2026-10-14T10', d: '14 out 2026', img: 'celular', read: 3,
  title: 'Zenzap, app de mensagens com IA para funcionários de lojas, obras e restaurantes, chega a US$ 44 milhões captados',
  sum: 'Redes como FedEx, Dollar General, Taco Bell e Starbucks usam o app para combinar turnos e tarefas. O plano pago começa em US$ 51 por mês para até 20 usuários.',
  body: [
    'A Zenzap, empresa com equipes nos EUA, em Tel Aviv e na Europa, faz um app de mensagens com inteligência artificial para empresas se comunicarem com funcionários que não ficam no escritório, como os de hotéis, obras, saúde e lanchonetes. Captou US$ 44 milhões com Bessemer, Lightspeed e The Garage, segundo o TechCrunch. Segundo o Reworked, o valor é o total já captado, não uma única rodada.',
    '## Como funciona',
    'O app junta conversas em grupo e individuais, lista de tarefas, agenda de turnos, busca com IA e transcrição de áudios e ligações, seguindo as regras de segurança da empresa. O cofundador Guy Weiss diz que apps de mensagens pessoais não atendem às exigências de TI das empresas.',
    'Em outubro, a Zenzap lançou agentes de IA dentro dos grupos, que qualquer pessoa pode criar sem programar e que se conectam a mais de 400 ferramentas, segundo o Reworked.',
    '## Como ganha dinheiro',
    'O plano grátis tem chat e tarefas. O pago começa em US$ 51 por mês para até 20 usuários, com chamadas, busca com IA e mais espaço. Os agentes de IA e a transcrição são cobrados por créditos. A empresa foi fundada em 2022 e tem 50 funcionários.',
    '## Por que olhar para o Brasil',
    'Análise da redação: no Brasil, muitas equipes de varejo, restaurantes e obras se organizam em grupos de apps de mensagens pessoais, misturando trabalho e vida pessoal. Um app próprio para esse público, com turnos e tarefas no mesmo lugar, pode interessar a redes de lojas e franquias. O desafio é convencer funcionários a instalar mais um app e cumprir as regras de proteção de dados.'
  ],
  box: { type: 'facts', title: 'Zenzap', rows: [['Público', 'Funcionários fora do escritório'], ['Captado', 'US$ 44 milhões no total'], ['Investidores', 'Bessemer, Lightspeed e The Garage'], ['Plano pago', 'A partir de US$ 51/mês (até 20 usuários)'], ['Fundação', '2022']] },
  sources: [['TechCrunch', U.tcZenzap], ['Reworked', U.rwZenzap]] },

{ id: 'talent-nation-engenheiros-ia-nigeria', cat: 'ideias', own: false, t: '2026-10-30T10', d: '30 out 2026', img: 'mundo', src: 'Disrupt Africa', url: U.daTalent,
  title: 'Na Nigéria, a Talent Nation forma engenheiros de IA sem cobrar do aluno e recebe das empresas que os contratam',
  sum: 'A plataforma recebeu mais de 63 mil candidaturas em 18 meses e aceita menos de 3% delas. O valor da rodada não foi divulgado.',
  body: [
    'As empresas clientes pagam pelos engenheiros, e esse dinheiro financia a formação das novas turmas. São cerca de 1.400 alunos em 9 unidades, em 6 cidades. A rodada pré-seed foi liderada pela Enza Capital e pela LocalGlobe, segundo o Disrupt Africa.'
  ] },

{ id: 'salary-hero-salario-antecipado-malasia', cat: 'ideias', own: false, t: '2026-10-14T12', d: '14 out 2026', img: 'mercado', src: 'People Matters', url: U.pmSalary,
  title: 'Tailandesa Salary Hero, que deixa o funcionário sacar parte do salário já trabalhado, capta US$ 7,6 milhões para crescer na Malásia',
  sum: 'O serviço é ligado ao empregador e atende mais de 300 mil funcionários de mais de 100 empresas na Tailândia.',
  body: [
    'A rodada série A foi liderada pela Cento Ventures, e a linha de crédito da empresa foi ampliada para US$ 10 milhões. A Salary Hero começou a operar na Malásia no segundo trimestre de 2026 e quer chegar a 50 empresas parceiras no país até o fim de 2027, segundo o People Matters.'
  ] },


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

{ id: 'cent-checkup-preventivo-ia', cat: 'ideias', own: false, t: '2026-10-27T07', d: '27 out 2026', img: 'ciencia', src: 'Inc42', url: U.incCent,
  title: 'Indiana Cent capta US$ 15 milhões para check-up completo em 2 horas, com laudo organizado por IA',
  sum: 'O pacote reúne ressonância de corpo inteiro, tomografia, ECG e outros exames por ₹27.500 e rastreia mais de 300 condições.',
  body: [
    'A empresa atua em Bengaluru, Mumbai e na região de Délhi e já fez 10 mil exames de corpo inteiro. A IA reúne os resultados em riscos por órgão.'
  ] },

/* ===================== NO BRASIL ===================== */
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

{ id: 'golpe-auxilio-reconstrucao-1680', cat: 'brasil', own: false, t: '2026-10-30T14', d: '30 out 2026', img: 'celular', src: 'Agência Brasil', url: U.abAuxilio,
  title: 'Governo alerta para golpe que promete "Auxílio Reconstrução 2026" de R$ 1.680 por link',
  sum: 'A mensagem circula em apps de mensagens e redes sociais. O Ministério da Integração diz que esse benefício não existe.',
  body: [
    'As informações oficiais sobre o Auxílio Reconstrução estão só no site auxilioreconstrucao.dataprev.gov.br. A orientação é não clicar em links nem informar dados pessoais em páginas que não sejam oficiais, segundo a Agência Brasil.'
  ] },

{ id: 'justica-meta-apagar-posts-voto', cat: 'brasil', own: false, t: '2026-10-30T17', d: '30 out 2026', img: 'plataforma', src: 'Agência Brasil', url: U.abMetaPosts,
  title: 'Justiça do Trabalho manda Meta apagar 14 posts que incentivam demitir funcionários por causa do voto',
  sum: 'Meta tem 24 horas, depois de notificada, para tirar os posts do Instagram, do Facebook e do Threads, sob multa de R$ 50 mil por dia para cada post.',
  body: [
    'A decisão provisória, da 77ª Vara do Trabalho de São Paulo, atende a um pedido do Ministério Público do Trabalho. A Meta também terá de parar de recomendar os posts e publicar um alerta sobre assédio eleitoral nas três redes. A empresa pode recorrer, segundo a Agência Brasil.'
  ] },

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

];
