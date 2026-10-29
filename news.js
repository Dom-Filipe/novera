/* ============================================================
   NOVERA: conteúdo do site. Edite este arquivo e rode `node build.js`.
   Regras completas em ATUALIZACAO.md.
   ============================================================ */

/* Topo do site: data da edição e destaques da faixa de cima */
const META = {
  /* Endereço público do site, sem barra no final. Usado nos links das redes sociais. */
  siteUrl: 'https://novera-sepia.vercel.app',
  dataExtenso: 'Quinta-feira, 29 de outubro de 2026',
  edicao: '29 out 2026',
  /* Faixa do topo: 1 a 3 itens [rótulo, texto curto]. Use só fatos que estão em notícias do site. */
  destaques: [
    ['App do dia', 'Instagram ganha app para a Apple TV, com Reels e lives'],
    ['Prazo', 'Corretoras de cripto têm até sexta (30) para pedir licença ao BC'],
    ['Em alta', 'Uber fixa em R$ 4,98 viagens de moto de até 3 km']
  ]
};

/* Home: destaque principal, dois laterais e três da faixa de baixo (IDs de notícias "own: true") */
const FEATURED = {
  lead: 'anatel-biometria-facial-linhas',
  side: ['alphabet-3tri-2026', 'whatsapp-nova-tela-backup'],
  also: ['uber-moto-preco-fixo-taxi-12-cidades', 'instagram-apple-tv', 'furtilo-delivery-mensalidade']
};

/* Home: "Escolhas da redação" (5 IDs) */
const PICKS = ['gemini-4-carbon', 'chatgpt-dots-imessage-rcs', 'onto-reembolso-preco-hotel', 'free-fire-india', 'cripto-prazo-licenca-banco-central'];

const U = {
  /* Atualização de 29 out 2026 */
  /* Lançamentos */
  mrIgTv: 'https://www.macrumors.com/2026/10/25/instagram-launches-apple-tv-app/',
  gzIgTv: 'https://www.gizmodo.com.br/instagram-chega-a-apple-tv-e-transforma-reels-em-entretenimento-para-a-tela-grande-72875',
  exIgTv: 'https://exame.com/tecnologia/instagram-chega-a-apple-tv-com-reels-e-videos-longos/',
  feFfi: 'https://www.fonearena.com/blog/495810/free-fire-india-launch-october-2026.html',
  pqFfi: 'https://www.pcquest.com/gaming/free-fire-india-launches-october-28-2026-with-free-download-links-for-android-and-ios-whats-new-12756712',
  egWaddle: 'https://www.engadget.com/2299227/meta-tamagotchi-like-ai-digital-pet-app-waddle-world/',
  g9PhoneAuto: 'https://9to5google.com/?p=734730',
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
  upJio: 'https://upstox.com/news/market-news/ipo/jio-platforms-ipo-listing-live-updates-share-price-nse-bse-reliance-industries-subsidiary-october-28-2026/liveblog-202492/',
  stGaio: 'https://startups.com.br/negocios/rodada-de-investimento/g4-lidera-seed-de-r-55m-da-gaio-de-social-selling/',
  /* Ideias para o Brasil */
  stkFurtilo: 'https://startuptalky.com/news/daily-indian-funding-roundup-key-news-21-october-2026/',
  uniFurtilo: 'https://www.uniindia.com/business-wire-india/furtilo-raises-seed-funding-to-deliver-from-local-shops-in-500-small-towns-102251/219631',
  ascOnto: 'https://ascendants.in/funding-feed/onto-1-million-pre-seed-funding-hotel-price-drop-refund/',
  openOnto: 'https://openthemagazine.com/business/a-new-kid-on-the-booking-block-can-onto-take-on-makemytrip-bookingcom',
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
  bnBleach: 'https://bleach-mh.bn-ent.net/en/news/69866',
  gsBleach: 'https://geekship.com.br/games/bleach-mirrors-high-lancamento-android-ios',
  gbBleach: 'https://gameblast.com.br/2026/10/bleach-mirrors-high-sera-lancado-android-ios-28-outubro.html',
  acBleach: 'https://animecorner.me/bleach-mirrors-high-surpasses-1-million-pre-registrations-worldwide-new-launch-rewards-unlocked/',
  ctPhantom: 'https://canaltech.com.br/games/que-horas-phantom-blade-zero-sera-lancado-no-brasil/',
  ghSaints: 'https://gaminghq.eu/2026/10/21/saints-row-the-third-remastered-mobile/',
  /* Atualizações */
  tcDiscord: 'https://techcrunch.com/2026/10/27/discord-is-making-its-public-communities-more-searchable-and-people-have-concerns/',
  egFbLinks: 'https://www.engadget.com/2295422/meta-is-charging-government-and-nonprofit-pages-to-post-links-on-facebook/',
  wbiOrgs: 'https://wabetainfo.com/whatsapp-is-testing-organizations-to-manage-large-communities/',
  /* IA */
  tcIos272: 'https://techcrunch.com/2026/10/27/apple-rolls-out-ios-27-2-with-new-siri-ai-languages-and-security-fixes/',
  m9Icloud: 'https://9to5mac.com/2026/10/27/icloud-mail-and-calendar-plugins-now-work-with-chatgpt/',
  apCreator: 'https://www.apple.com/newsroom/2026/10/apple-creator-studio-adds-powerful-new-ai-features-and-even-more-creative-tools/',
  tcGenie: 'https://techcrunch.com/2026/10/27/googles-genie-4-world-model-adds-audio-more-realistic-worlds-and-real-time-steering/',
  cpYoba: 'https://research.checkpoint.com/2026/tricks-from-the-past-deployed-via-signed-chatgpt-and-claude-binaries/',
  /* Startups */
  tcAntVcs: 'https://techcrunch.com/2026/10/27/vcs-will-make-billions-on-anthropics-ipo-but-amazon-is-set-to-make-much-much-more/',
  gnRobinhood: 'https://www.globenewswire.com/news-release/2026/10/27/3389611/0/en/robinhood-reports-third-quarter-2026-results.html',
  invRobinhood: 'https://uk.investing.com/news/stock-market-news/robinhood-q3-2026-slides-record-revenue-of-14b-stock-drops-7-93CH-4935824',
  secPaypal: 'https://www.sec.gov/Archives/edgar/data/0001633917/000163391726000086/pypl3q-26earningsrelease.htm',
  tcGuidewire: 'https://techcrunch.com/2026/10/27/guidewire-buys-hyperexponential-for-1-7b-in-cash/',
  /* Ideias para o Brasil */
  ysEven: 'https://yourstory.com/2026/10/even-healthcare-raises-50m-in-series-b-round-led-by-khosla-ventures',
  stMaasi: 'https://startuptalky.com/news/maasi-raises-6-cr-pre-seed-nanny-platform/',
  eiMaasi: 'https://india.entrepreneur.com/business-news/maasi-raises-rs-6-crore-in-pre-seed-round-led-by-better-capital-antler-india',
  /* No Brasil */
  ffCripto: 'https://financefeeds.com/binance-files-for-brazil-crypto-authorization-ahead-of-oct-30-deadline/',
  bnCripto26: 'https://bitnoticias.com.br/regulacao/binance-pede-licenca-banco-central-psav-brasil/',
  bnCripto10: 'https://bitnoticias.com.br/noticias/licenca-cripto-do-banco-central-qual-exchange-pediu-quem-vai-pedir-e-quem-esta-saindo-do-brasil',
  mtKeeta: 'https://www.mobiletime.com.br/noticias/27/10/2026/keeta-10-mi-downloads-br/',
  abSuperend: 'https://agenciabrasil.ebc.com.br/economia/noticia/2026-10/numero-de-superendividados-no-brasil-cresceu-75-em-cinco-anos-diz-bc',
  abResidual: 'https://agenciabrasil.ebc.com.br/economia/noticia/2026-10/receita-abre-consulta-lote-residual-do-imposto-de-renda',
  /* Atualização de 27 out 2026: estreia do formato de aplicativos */
  /* Lançamentos */
  ahNms: 'https://antihype.com.br/c/games/no-mans-sky-iphone-ipad-lancamento-preco/',
  jwMh: 'https://www.jwave.com.br/2026/10/monster-hunter-outlanders-chega-aos-celulares-em-29-de-outubro/',
  /* Atualizações */
  smtFeatures: 'https://www.socialmediatoday.com/news/instagram-rolls-out-limited-features-test-in-the-us/872825/',
  tnwFeatures: 'https://thenextweb.com/news/instagram-tests-90-minute-horizontal-videos-called-features',
  dcGoogleAds: 'https://decrypt.co/381775/google-quietly-updates-privacy-policy-gmail-photos-ads?amp=1',
  abcMetaAcc: 'https://www.abc.net.au/news/2026-10-27/what-is-meta-account-facebook-instagram-explained/107313814',
  /* IA */
  ctSiri: 'https://canaltech.com.br/apps/atualize-ja-apple-libera-ios-272-com-siri-ai-em-portugues/',
  ihSiri: 'https://ihelpbr.com/ios-27-2-e-lancado-com-siri-ai-em-portugues/',
  bcTerra: 'https://www.bleepingcomputer.com/news/artificial-intelligence/openai-launches-gpt-61-terra-with-3x-faster-ai-agents-50-percent-lower-pricing/',
  egElvis: 'https://www.engadget.com/2296535/elvis-presley-estate-suing-ai-company-for-copyright-infringement/',
  /* Startups */
  imAnt27: 'https://www.infomoney.com.br/mercados/anthropic-alerta-para-riscos-existenciais-em-aguardado-pedido-de-ipo/',
  fortuneAnt27: 'https://fortune.com/2026/10/26/anthropics-s-1/',
  mrAus: 'https://macrumors.com/2026/10/22/rival-app-stores-in-australia-ordered',
  mtItau: 'https://www.mobiletime.com.br/noticias/26/10/2026/itau-anuncia-acordo-para/',
  /* Ideias para o Brasil */
  tnmFarmer: 'https://thenewsmill.com/2026/10/india-creates-11-crore-farmer-ids-five-months-ahead-of-deadline/',
  tcMatiks: 'https://techcrunch.com/2026/10/26/matiks-raises-10m-to-expand-its-math-and-puzzle-gaming-platform/',
  elSathee: 'https://digitallearning.eletsonline.com/2026/10/free-ai-tutors-iits-sathee-ndli-fermi-jee-neet-cuet-gate-preparation',
  incCent: 'https://inc42.com/buzz/cent-raises-15-mn-to-scale-ai-led-preventive-healthcare-platform',
  /* No Brasil */
  abPixCredito: 'https://agenciabrasil.ebc.com.br/economia/noticia/2026-10/bc-reforca-regras-de-protecao-ao-consumidor-nas-ofertas-de-credito',
  ttVivo: 'https://teletime.com.br/26/10/2026/vivo-parceria-starlink-vivo-satelite/'
};

const NEWS = [
/* ===================== LANÇAMENTOS ===================== */
{ id: 'phoneauto-android-auto-celular', cat: 'lancamentos', own: false, t: '2026-10-27T14', d: '27 out 2026', img: 'celular', src: '9to5Google', url: U.g9PhoneAuto,
  title: 'App PhoneAuto, em teste, leva o Android Auto de volta à tela do celular',
  sum: 'O Google tirou o modo de celular do Android Auto em 2022. A versão beta do app é instalada por fora da loja e expira em janeiro.',
  body: [
    'O app usa um recurso de desenvolvedor do Android para rodar o Android Auto no próprio aparelho. A versão para o Google Play está em análise, segundo o 9to5Google. No teste do site, o modo horizontal funcionou bem, e o vertical ficou mais lento.'
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

{ id: 'instagram-apple-tv', cat: 'lancamentos', own: true, t: '2026-10-24T22', d: '24 out 2026', img: 'tecnologia', read: 2,
  title: 'Instagram ganha app para a Apple TV, com Reels, vídeos longos e transmissões ao vivo',
  sum: 'O app exige tvOS 26 ou mais novo. Na App Store brasileira, a Apple TV aparece como aparelho compatível, segundo a Exame.',
  body: [
    'O Instagram lançou um aplicativo para a Apple TV, que apareceu na App Store em 23 de outubro, segundo o MacRumors. Até 19 de outubro, a página do app na loja listava só o iPhone e o iPad.',
    '## O que dá para fazer',
    'Na TV, é possível assistir a Reels, vídeos mais longos e transmissões ao vivo de criadores, descobrir vídeos novos e continuar de onde parou em outro aparelho. Há também uma opção para assistir junto com amigos e família, segundo o MacRumors. O feed tradicional de publicações não aparece na TV, e a navegação foi pensada para o controle remoto, segundo o Gizmodo Brasil.',
    '## O que precisa',
    'O app exige tvOS 26 ou mais novo. Na App Store brasileira, a página do Instagram lista a Apple TV como compatível, mas a Exame lembra que isso não garante que todos os recursos funcionem para todas as contas no país.',
    '## Outras TVs',
    'A Meta começou a levar o Instagram para a TV com um teste no Fire TV, da Amazon, nos EUA, em dezembro de 2025. Depois vieram o Google TV, em fevereiro de 2026, e as TVs da Samsung, em junho, segundo o MacRumors e o Gizmodo Brasil.'
  ],
  box: { type: 'facts', title: 'Instagram na Apple TV', rows: [['Na loja', 'Desde 23 de outubro'], ['Sistema', 'tvOS 26 ou mais novo'], ['Conteúdo', 'Reels, vídeos longos e lives'], ['Loja brasileira', 'Lista a Apple TV como compatível']] },
  sources: [['MacRumors', U.mrIgTv], ['Gizmodo Brasil', U.gzIgTv], ['Exame', U.exIgTv]] },

{ id: 'no-mans-sky-iphone', cat: 'lancamentos', own: false, t: '2026-10-27T08', d: '27 out 2026', img: 'celular', src: 'Antihype', url: U.ahNms,
  title: 'No Man\'s Sky chega ao iPhone e ao iPad, com começo grátis e jogo completo por R$ 129,90',
  sum: 'O jogo de exploração espacial da Hello Games exige iPhone 11 ou mais novo. Na App Store brasileira, a data de lançamento aparece como 29 de outubro.',
  body: [
    'O começo pode ser jogado sem pagar, e uma compra única libera tudo. Na loja brasileira, o preço é R$ 129,90, segundo o Antihype. Os assentamentos em planetas exigem iPhone 15 Pro ou mais novo.'
  ] },

{ id: 'opera-webai-ia-local', cat: 'lancamentos', own: false, t: '2026-10-27T10', d: '27 out 2026', img: 'tecnologia', src: 'Olhar Digital', url: U.odOpera,
  title: 'Opera testa o WebAI, que roda inteligência artificial no próprio computador, sem nuvem nem assinatura',
  sum: 'O recurso chegou em prévia ao navegador Opera One para Windows e Mac. Nada é baixado até o usuário ligar, e é ele quem escolhe quais sites podem usar a IA local.',
  body: [
    'A prévia está no Opera One, em computadores com Windows de 64 bits e em Macs com chip da Apple. Os navegadores Opera GX e Opera Neon recebem o recurso depois. Como é uma fase de testes, o desempenho depende do computador, segundo o Olhar Digital.'
  ] },

{ id: 'bleach-mirrors-high', cat: 'lancamentos', own: true, t: '2026-10-28T06', d: '28 out 2026', img: 'celular', read: 2,
  title: 'Bleach Mirrors High, jogo gratuito da Bandai Namco, chega ao Android e ao iPhone',
  sum: 'O jogo baseado no anime passou de 1 milhão de pré-registros no mundo. É gratuito, com compras dentro do app, inclusive de itens aleatórios.',
  body: [
    'O jogo Bleach Mirrors High, da Bandai Namco, chegou ao Android e ao iOS na quarta-feira (28), depois de uma manutenção dos servidores, segundo o site oficial. O download antecipado já está aberto na App Store e no Google Play. A empresa não divulgou o horário de liberação.',
    '## Como é o jogo',
    'O jogador cria o próprio Shinigami e escolhe a aparência e a espada Zanpakuto. As batalhas usam equipes de três personagens e cartas de ataque, segundo o Geekship. A história se passa depois do arco da Guerra Sangrenta dos Mil Anos, e o criador da série, Tite Kubo, colaborou com o jogo, segundo o GameBlast.',
    '## Pré-registro',
    'Mais de 1 milhão de pessoas se pré-registraram no mundo em menos de dois meses de campanha, segundo o Anime Corner. Por isso, todos os jogadores recebem 9.000 Mirror Gems, a moeda do jogo, e cinco tickets de invocação.',
    'O jogo é gratuito, com compras dentro do app, entre elas de itens aleatórios. As fontes não informam se há versão em português.'
  ],
  box: { type: 'facts', title: 'Bleach Mirrors High', rows: [['Lançamento', '28 de outubro'], ['Onde', 'Android e iOS'], ['Preço', 'Grátis, com compras no app'], ['Pré-registros', 'Mais de 1 milhão no mundo']] },
  sources: [['Bandai Namco', U.bnBleach], ['Geekship', U.gsBleach], ['GameBlast', U.gbBleach], ['Anime Corner', U.acBleach]] },

{ id: 'monster-hunter-outlanders', cat: 'lancamentos', own: false, t: '2026-10-26T10', d: '26 out 2026', img: 'celular', src: 'JWave', url: U.jwMh,
  title: 'Monster Hunter Outlanders, jogo gratuito para celular, estreia nesta quinta no Android e no iOS',
  sum: 'O jogo da franquia da Capcom foi desenvolvido pelo TiMi Studio, da Tencent. No Brasil, é publicado pela Garena, com pré-registro aberto.',
  body: [
    'O lançamento é em 29 de outubro. O jogo é gratuito, com compras dentro do app. A versão para a China continental fica para 2027 ou depois.'
  ] },

{ id: 'phantom-blade-zero-pc-ps5', cat: 'lancamentos', own: false, t: '2026-10-27T17', d: '27 out 2026', img: 'tecnologia', src: 'Canaltech', url: U.ctPhantom,
  title: 'Phantom Blade Zero, do estúdio chinês S-Game, chega ao PC e ao PS5; no Brasil, foi liberado às 23h de quarta',
  sum: 'É o primeiro jogo de grande orçamento do estúdio. O lançamento mundial é em 29 de outubro, e não há versão para Xbox.',
  body: [
    'O jogo de ação sai para PC e PlayStation 5. Por causa do fuso horário, no Brasil ele é desbloqueado às 23h de 28 de outubro, segundo o Canaltech.'
  ] },

{ id: 'saints-row-the-third-celular', cat: 'lancamentos', own: false, t: '2026-10-21T12', d: '21 out 2026', img: 'celular', src: 'GamingHQ', url: U.ghSaints,
  title: 'Saints Row: The Third Remastered chega ao iPhone e ao Android nesta quinta, por US$ 19,99',
  sum: 'A versão para celular, feita pela Feral Interactive, inclui todos os conteúdos extras e tem modo cooperativo online.',
  body: [
    'O lançamento é em 29 de outubro. O jogo é baseado na versão remasterizada de 2020 do original de 2011 e inclui expansões como Gangstas in Space.'
  ] },

/* ===================== ATUALIZAÇÕES ===================== */
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

{ id: 'instagram-features-videos-90-minutos', cat: 'atualizacoes', own: true, t: '2026-10-26T16', d: '26 out 2026', img: 'plataforma', read: 2,
  title: 'Instagram testa "Features", vídeos horizontais de até 90 minutos, com criadores no Brasil e nos EUA',
  sum: 'O formato mira podcasts e programas de humor e vai aparecer no feed, no Explorar e no app do Instagram para TV. Por enquanto, não há divisão da receita de anúncios com os criadores.',
  body: [
    'O Instagram anunciou em 26 de outubro o teste dos "Features", vídeos na horizontal de até 90 minutos. O teste foi apresentado por Adam Mosseri, chefe do Instagram, e Tessa Lyons, chefe de produto.',
    '## O Brasil no teste',
    'Segundo a Social Media Today, os Features foram testados primeiro no Brasil, e a liberação para criadores selecionados dos EUA começou agora. O site TNW descreve um grupo pequeno de criadores nos EUA, com alguns no Brasil.',
    '## Onde aparecem',
    'Os vídeos vão aparecer no feed e no Explorar, e o app do Instagram para TV vai dar prioridade ao formato. Um recurso ligado, o "Clips as Reels", permite ligar até 8 Reels a um vídeo longo.',
    'Por enquanto, o Instagram não vai dividir com os criadores a receita de anúncios desses vídeos.'
  ],
  sources: [['Social Media Today', U.smtFeatures], ['TNW', U.tnwFeatures]] },

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

{ id: 'facebook-cobra-links-paginas-meta-one', cat: 'atualizacoes', own: false, t: '2026-10-23T16', d: '23 out 2026', img: 'plataforma', src: 'Engadget', url: U.egFbLinks,
  title: 'Meta testa cobrar de páginas do Facebook para publicar links, e ONGs e prefeituras dos EUA são atingidas',
  sum: 'No teste, as páginas têm direito a 2 links por mês antes de receber a oferta da assinatura Meta One, com planos de US$ 14,99 a US$ 499,99 por mês.',
  body: [
    'A Meta diz que páginas de ONGs e de governos não deveriam entrar no teste, mas algumas entraram, como a da prefeitura de Greenville, no Texas, segundo o Engadget. Os casos relatados são dos EUA, e a fonte não fala do Brasil.'
  ] },

{ id: 'google-anuncios-gmail-fotos-personal-intelligence', cat: 'atualizacoes', own: false, t: '2026-10-24T10', d: '24 out 2026', img: 'plataforma', src: 'Decrypt', url: U.dcGoogleAds,
  title: 'Google muda a política de privacidade: Gmail e Fotos podem influenciar anúncios se ligados ao Gemini',
  sum: 'Por padrão, o conteúdo continua fora dos anúncios. Isso muda se o usuário conectar Gmail, Drive ou Fotos a recursos de IA como o Gemini.',
  body: [
    'A nova política vale desde 16 de outubro. Para desligar, o usuário pode desconectar os apps em "Dados e privacidade" ou desativar os anúncios personalizados.'
  ] },

{ id: 'meta-account-substitui-central-de-contas', cat: 'atualizacoes', own: false, t: '2026-10-27T06', d: '27 out 2026', img: 'plataforma', src: 'ABC News', url: U.abcMetaAcc,
  title: 'Meta começa a trocar a Central de Contas pelo "Meta Account", sem opção de recusa',
  sum: 'A conta reúne Facebook, Messenger, Instagram, Threads e Meta AI. O WhatsApp só entra se o usuário quiser ou se já estava ligado.',
  body: [
    'O usuário escolhe quais perfis ficam em cada conta, e as configurações de cada app continuam separadas. Especialistas ouvidos pela emissora australiana apontam riscos de privacidade.'
  ] },

{ id: 'whatsapp-organizacoes-comunidades', cat: 'atualizacoes', own: false, t: '2026-10-26T12', d: '26 out 2026', img: 'celular', src: 'WABetaInfo', url: U.wbiOrgs,
  title: 'WhatsApp desenvolve "Organizações", painel para administrar comunidades grandes',
  sum: 'O recurso foi encontrado na versão beta 2.26.43.1 para Android e mostra aos administradores a lista de membros e os subgrupos de cada um.',
  body: [
    'Ainda está em fase inicial e não pode ser testado. Membros comuns não veem a tela. Não há data de lançamento, e o recurso pode ser abandonado.'
  ] },

/* ===================== IA ===================== */
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

{ id: 'siri-ai-portugues-ios-27-2', cat: 'ia', own: true, t: '2026-10-26T18', d: '26 out 2026', img: 'celular', read: 3,
  title: 'Apple libera o iOS 27.2, e a nova Siri com inteligência artificial passa a falar português, em versão beta',
  sum: 'A Siri AI agora entende o que está na tela e executa ações em vários passos dentro dos apps. Funciona do iPhone 15 Pro em diante e também chegou a iPads, Macs e ao Apple Watch.',
  body: [
    'A Apple liberou nesta segunda-feira (26) o iOS 27.2, e a nova Siri com inteligência artificial ganhou o português, além de espanhol, francês, japonês e coreano. Até então, a Siri AI só funcionava em inglês, em versão beta, segundo o Canaltech. Nos novos idiomas, ela também chega como beta, segundo o TechCrunch.',
    '## O que muda',
    'A nova Siri mantém conversas mais longas, entende o que aparece na tela e executa tarefas em vários passos dentro dos aplicativos. O Mensagens também passa a sugerir ações com IA, como criar eventos e lembretes a partir de uma conversa.',
    '## Quais aparelhos',
    'O recurso funciona em iPhones com Apple Intelligence: do iPhone 15 Pro e Pro Max em diante e na linha iPhone 16 ou mais nova, segundo o iHelp BR. Também chega a iPads e Macs com chip M1 ou superior, ao Apple Watch Series 9, Ultra 2 e SE 3 e ao Apple Vision Pro, com o iPadOS 27.2, o macOS 27.2 e o watchOS 27.2.',
    '## Outras novidades',
    'A atualização traz ainda um novo visual para o Apple Music e perfis individuais no app Apple TV.',
    '## Segurança',
    'O iOS 27.2 corrige mais de 160 falhas de segurança, segundo o TechCrunch. Uma delas é um erro do iOS 18 que, segundo a Apple, pode ter sido explorado num ataque sofisticado contra pessoas específicas.'
  ],
  box: { type: 'facts', title: 'iOS 27.2', rows: [['Novidade principal', 'Siri AI em português (beta)'], ['Outros idiomas novos', 'Espanhol, francês, japonês e coreano'], ['iPhones', 'iPhone 15 Pro em diante'], ['Também em', 'iPad, Mac, Apple Watch e Vision Pro']] },
  sources: [['Canaltech', U.ctSiri], ['iHelp BR', U.ihSiri], ['TechCrunch', U.tcIos272]] },

{ id: 'gpt-61-terra-openai', cat: 'ia', own: false, t: '2026-10-26T20', d: '26 out 2026', img: 'tecnologia', src: 'BleepingComputer', url: U.bcTerra,
  title: 'OpenAI lança o GPT-6.1 Terra, modelo mais barato que usa o computador pelo usuário',
  sum: 'O modelo lê a tela, clica, digita e troca de aplicativo. Está no ChatGPT para assinantes pagos e custa metade do anterior na API.',
  body: [
    'O modelo está no ChatGPT e no Codex para assinantes dos planos Plus, Pro, Enterprise e Edu. Na API, custa US$ 1 por milhão de tokens de entrada e US$ 5 por milhão de saída, metade do GPT-5.6 Terra, que ele substitui, segundo o BleepingComputer.'
  ] },

{ id: 'chatgpt-icloud-mail-calendario', cat: 'ia', own: false, t: '2026-10-27T14', d: '27 out 2026', img: 'celular', src: '9to5Mac', url: U.m9Icloud,
  title: 'ChatGPT passa a se conectar ao e-mail e à agenda do iCloud, inclusive no plano gratuito',
  sum: 'Com os plug-ins, o assistente busca e-mails, escreve rascunhos e cria ou altera eventos. Funciona na web, no computador e no iPhone.',
  body: [
    'Segundo a OpenAI, citada pelo 9to5Mac, o recurso está em todos os planos do ChatGPT. Só funcionam endereços @icloud.com, @me.com e @mac.com, e a fonte não confirma a disponibilidade no Brasil.'
  ] },

{ id: 'espolio-elvis-processa-anthropic', cat: 'ia', own: false, t: '2026-10-26T14', d: '26 out 2026', img: 'arte', src: 'Engadget', url: U.egElvis,
  title: 'Donos do catálogo de Elvis Presley processam a Anthropic por uso de músicas no treino de IA',
  sum: 'A ação pede US$ 41 milhões de indenização. A Anthropic diz que discorda das acusações e vai se defender.',
  body: [
    'Os autores, entre eles a Authentic Brands Group, acusam a empresa de usar músicas como "Can\'t Help Falling in Love" sem autorização. A Anthropic já defendeu antes que esse tipo de treino é uso justo.'
  ] },

{ id: 'apple-assistente-ia-pages-keynote-numbers', cat: 'ia', own: false, t: '2026-10-27T12', d: '27 out 2026', img: 'tecnologia', src: 'Apple', url: U.apCreator,
  title: 'Apple vai colocar assistente de IA, em teste, no Pages, no Keynote e no Numbers',
  sum: 'O assistente combina modelos da Apple e da OpenAI e chega em novembro, só em inglês dos EUA, para assinantes do Apple Creator Studio.',
  body: [
    'O Creator Studio custa US$ 12,99 por mês ou US$ 129 por ano. A atualização exige iOS, iPadOS ou macOS 27 em aparelhos compatíveis com a Apple Intelligence.'
  ] },

{ id: 'google-genie-4', cat: 'ia', own: false, t: '2026-10-27T13', d: '27 out 2026', img: 'tecnologia', src: 'TechCrunch', url: U.tcGenie,
  title: 'Google apresenta o Genie 4, IA que cria mundos interativos com som e mudanças em tempo real',
  sum: 'O usuário pode mudar o clima, a câmera ou objetos da cena por texto, e o cenário se mantém coerente por até 2 minutos, o dobro do Genie 3.',
  body: [
    'Por enquanto, é uma prévia de pesquisa para testadores escolhidos. Nas próximas semanas, chega aos assinantes do Google AI Ultra pelo Project Genie.'
  ] },

{ id: 'malware-falsos-apps-chatgpt-claude', cat: 'ia', own: false, t: '2026-10-27T10', d: '27 out 2026', img: 'tecnologia', src: 'Check Point Research', url: U.cpYoba,
  title: 'Falsos programas do ChatGPT e do Claude no GitHub instalam minerador de criptomoedas no Windows',
  sum: 'Os golpistas usam nomes como "GPT-6 Astra" e "Claude Opus" e aparecem bem posicionados nas buscas. O pacote inclui instaladores legítimos para enganar o sistema.',
  body: [
    'O programa malicioso instala o minerador XMRig, que usa o computador da vítima para gerar criptomoedas. A Check Point não informou o número de vítimas.'
  ] },

/* ===================== STARTUPS ===================== */
{ id: 'gaio-social-selling-g4', cat: 'startups', own: false, t: '2026-10-27T11', d: '27 out 2026', img: 'mercado', src: 'Startups', url: U.stGaio,
  title: 'Brasileira Gaio, de vendas por mensagem nas redes sociais, capta R$ 5,5 milhões em rodada liderada pelo G4',
  sum: 'A plataforma tem cerca de 5 mil clientes, entre marcas e criadores. O dinheiro vai para uma versão baseada em IA e para uma área de consultoria.',
  body: [
    'O produto tem um ranking dos seguidores mais engajados, uma caixa de entrada com IA e uma ferramenta para automatizar vendas por mensagem. O G4, que liderou a rodada seed, também é cliente: diz que as vendas pelas mensagens diretas do Instagram cresceram 10 vezes e rendem cerca de R$ 4 milhões por mês, segundo o Startups.'
  ] },

{ id: 'jio-platforms-estreia-bolsa', cat: 'startups', own: false, t: '2026-10-28T08', d: '28 out 2026', img: 'mercado', src: 'Upstox', url: U.upJio,
  title: 'Jio Platforms, do grupo Reliance, estreia na bolsa da Índia com alta de 21%',
  sum: 'A oferta levantou ₹30.213 crore e passou a valer cerca de ₹13,05 lakh crore. É a segunda empresa mais valiosa do país.',
  body: [
    'As ações foram vendidas a ₹1.119 e abriram a ₹1.358 nas bolsas indianas NSE e BSE. A empresa fica atrás só da própria Reliance em valor de mercado, segundo o Upstox. O resultado do trimestre sai em 30 de outubro.'
  ] },

{ id: 'microsoft-resultado-azure-48', cat: 'startups', own: false, t: '2026-10-28T18', d: '28 out 2026', img: 'mercado', src: 'Microsoft', url: U.msResultados,
  title: 'Microsoft fatura US$ 92,3 bilhões no trimestre, com alta de 48% no Azure',
  sum: 'A receita subiu 19%, e a nuvem da empresa somou US$ 63,9 bilhões. A empresa disse que os resultados superaram as expectativas.',
  body: [
    'O lucro líquido foi de US$ 36,6 bilhões, alta de 32%, no primeiro trimestre do ano fiscal de 2027, encerrado em setembro. A área de dispositivos e consumo encolheu 3%, para US$ 15,5 bilhões, segundo o comunicado da empresa.'
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

{ id: 'apple-australia-lojas-alternativas', cat: 'startups', own: false, t: '2026-10-23T09', d: '23 out 2026', img: 'plataforma', src: 'MacRumors', url: U.mrAus,
  title: 'Justiça da Austrália manda a Apple liberar lojas de apps rivais e pagamentos alternativos no iPhone',
  sum: 'A partir de março de 2027, australianos poderão baixar apps de outras lojas e de sites. A Apple vai recorrer. O Fortnite anunciou a volta à App Store do país.',
  body: [
    'A decisão do Tribunal Federal da Austrália, de 22 de outubro, vale a partir de 1º de março de 2027, e a Apple pode pedir prorrogação até 3 de maio. Os apps distribuídos por fora da App Store vão passar por uma verificação automática de segurança e privacidade, segundo o MacRumors.'
  ] },

{ id: 'robinhood-3tri-2026', cat: 'startups', own: true, t: '2026-10-27T20', d: '27 out 2026', img: 'mercado', read: 2,
  title: 'Robinhood bate recorde de receita, com US$ 1,42 bilhão no trimestre, e mercados de previsão crescem mais de seis vezes',
  sum: 'O lucro caiu 14%, para US$ 476 milhões, e a receita ficou um pouco abaixo do esperado por analistas. A ação recuou cerca de 7% depois do fechamento.',
  body: [
    'A Robinhood, app americano de investimentos, divulgou em 27 de outubro os resultados do terceiro trimestre de 2026. A receita foi de US$ 1,42 bilhão, alta de 12% em um ano e recorde para a empresa, segundo o comunicado oficial. O lucro líquido caiu 14%, para US$ 476 milhões.',
    '## De onde vem o dinheiro',
    'A receita com transações subiu 19%, para US$ 867 milhões. Os contratos de eventos, usados nos mercados de previsão, renderam US$ 173 milhões, mais de seis vezes o valor de um ano antes. Opções somaram US$ 399 milhões, e ações, US$ 121 milhões. A receita com criptomoedas caiu 55%, para US$ 120 milhões.',
    '## Clientes',
    'O app tem 28,7 milhões de clientes com dinheiro na conta, alta de 7%. Os assinantes do plano Gold chegaram a 5,2 milhões, alta de 34%. Os ativos na plataforma somam US$ 396 bilhões.',
    '## A reação',
    'Analistas esperavam receita de US$ 1,43 bilhão, segundo o Investing.com. A ação caiu 7,36% nas negociações depois do fechamento, para US$ 87,60.'
  ],
  box: { type: 'facts', title: 'Robinhood no 3º trimestre', rows: [['Receita', 'US$ 1,42 bilhão (+12%)'], ['Lucro líquido', 'US$ 476 milhões (-14%)'], ['Mercados de previsão', 'US$ 173 milhões (mais de 6 vezes)'], ['Criptomoedas', 'US$ 120 milhões (-55%)'], ['Assinantes Gold', '5,2 milhões (+34%)']] },
  sources: [['Robinhood (comunicado)', U.gnRobinhood], ['Investing.com', U.invRobinhood]] },

{ id: 'itau-compra-neospace', cat: 'startups', own: false, t: '2026-10-26T15', d: '26 out 2026', img: 'mercado', src: 'Mobile Time', url: U.mtItau,
  title: 'Itaú compra a startup brasileira de IA NeoSpace por R$ 2,9 bilhões',
  sum: 'A NeoSpace, fundada em 2023, desenvolve modelos de IA para crédito, gestão financeira e detecção de fraudes. O negócio depende do Cade e do Banco Central.',
  body: [
    'O fundador, Bruno Pierobon, segue como CEO, com gestão autônoma. Ele também fundou a Zup, comprada pelo Itaú em 2019.'
  ] },

{ id: 'paypal-3tri-2026', cat: 'startups', own: false, t: '2026-10-27T13', d: '27 out 2026', img: 'mercado', src: 'PayPal (comunicado à SEC)', url: U.secPaypal,
  title: 'PayPal eleva a previsão de lucro para 2026 depois de receita de US$ 8,6 bilhões no trimestre',
  sum: 'O volume de pagamentos cresceu 6%, para US$ 487,1 bilhões. A empresa tem 440 milhões de contas ativas.',
  body: [
    'A previsão de lucro ajustado por ação em 2026 passou de cerca de US$ 5,38 para cerca de US$ 5,60. No trimestre, a empresa recomprou US$ 1,5 bilhão em ações.'
  ] },

{ id: 'guidewire-compra-hyperexponential', cat: 'startups', own: false, t: '2026-10-27T12', d: '27 out 2026', img: 'mercado', src: 'TechCrunch', url: U.tcGuidewire,
  title: 'Guidewire compra a britânica Hyperexponential, de IA para seguradoras, por US$ 1,7 bilhão',
  sum: 'O valor pode chegar a cerca de US$ 2 bilhões com pagamentos extras ligados a metas de receita. A conclusão está prevista para 2027.',
  body: [
    'Fundada em 2017, a Hyperexponential tem software usado por cerca de 600 seguradoras em 40 países.'
  ] },

/* ===================== IDEIAS PARA O BRASIL ===================== */
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

{ id: 'onto-reembolso-preco-hotel', cat: 'ideias', own: true, t: '2026-10-21T12', d: '21 out 2026', img: 'mundo', read: 2,
  title: 'Indiana Onto devolve a diferença se o preço do hotel cair depois da reserva, e capta US$ 1 milhão',
  sum: 'O app acompanha as tarifas depois da compra e, se o mesmo quarto ficar mais barato, devolve a diferença. Também vale para reservas feitas em outros sites.',
  body: [
    'A Onto, startup de viagens de Bengaluru, na Índia, captou US$ 1 milhão numa rodada pré-seed liderada pelo Stargazer Fund, com participação da White Venture Capital, de Singapura, segundo o Ascendants. A empresa foi fundada em junho de 2026 por Jagdeep Singh e Shubham Goyal, que trabalharam no app de investimentos Groww, segundo a Open Magazine.',
    '## Como funciona',
    'O primeiro produto se chama Price Drop Refund. Depois da reserva, a Onto continua acompanhando o preço. Se o mesmo quarto, nas mesmas datas, ficar mais barato, a diferença volta para o meio de pagamento original. Segundo a Open Magazine, o sistema confere as tarifas duas ou três vezes por dia e, se achar um preço menor antes do fim do prazo de cancelamento, refaz a reserva sozinho.',
    'O serviço também vale para reservas feitas em outras plataformas: o viajante envia a confirmação que já tem. Os avisos chegam pelo WhatsApp e pelo app. A Onto ganha comissão dos hotéis.',
    '## Os limites',
    'A reserva precisa poder ser cancelada, e tarifas flexíveis podem sair mais caras, lembra a Open Magazine. A empresa não divulgou número de usuários nem de reservas. A ideia não é inédita: o Tingo, lançado em 2012 por uma empresa do grupo TripAdvisor, usava um mecanismo parecido.',
    '## Por que olhar para o Brasil',
    'Análise da redação: acompanhar o preço depois da compra e avisar o viajante por mensagem, inclusive em reservas feitas em outros sites, é uma ideia que agências e startups de turismo podem testar. O modelo depende de tarifas canceláveis e de acesso aos preços dos hotéis em tempo real.'
  ],
  box: { type: 'facts', title: 'Onto', rows: [['Captação', 'US$ 1 milhão (pré-seed)'], ['Fundação', 'Junho de 2026'], ['Produto', 'Reembolso se o preço cair'], ['Condição', 'Reserva cancelável']] },
  sources: [['Ascendants', U.ascOnto], ['Open Magazine', U.openOnto]] },

{ id: 'furtilo-delivery-mensalidade', cat: 'ideias', own: true, t: '2026-10-21T10', d: '21 out 2026', img: 'mundo', read: 3,
  title: 'Na Índia, o app de entregas Furtilo cobra mensalidade fixa das lojas, em vez de comissão, e mira cidades pequenas',
  sum: 'Os lojistas pagam a partir de ₹99 por mês e ficam com o valor inteiro dos pedidos. O app está em mais de 37 cidades pequenas e recebeu aporte de uma gestora americana.',
  body: [
    'A Furtilo, startup de entregas com sede em Bengaluru, na Índia, recebeu um aporte seed da gestora americana Trikona LLC, segundo o StartupTalky. O valor não foi divulgado. A empresa se chamava BelivMart e foi relançada com o novo nome em janeiro de 2026.',
    '## Como funciona',
    'Em vez de cobrar uma porcentagem de cada pedido, o app cobra das lojas e dos restaurantes uma mensalidade fixa, a partir de ₹99. O lojista fica com o valor total da venda, e o cliente paga só a taxa de entrega. Segundo comunicado da empresa, as plataformas que cobram comissão costumam ficar com 20% a 30% de cada pedido. O pagamento pode ser feito pelo UPI, o sistema de pagamentos instantâneos da Índia, ou em dinheiro na entrega.',
    '## Os números',
    'A Furtilo começou em Dalauda, uma cidade pequena do estado de Madhya Pradesh, e hoje está em mais de 37 cidades de três estados. Segundo a empresa, tem mais de 650 restaurantes e lojas, mais de 70 entregadores e mais de 6 mil pedidos por mês, ante 1.500 em junho. A meta é passar de 500 cidades até meados de 2028. Além de comida, o app quer oferecer entrega de encomendas e mototáxi onde for permitido.',
    '## Por que olhar para o Brasil',
    'Análise da redação: no Brasil, a comissão dos aplicativos de entrega é uma queixa conhecida de restaurantes, e as cidades pequenas costumam ter menos opções. Uma mensalidade fixa por loja, em lugares que os apps maiores não priorizam, é um modelo que empresas regionais de entrega podem estudar.'
  ],
  box: { type: 'facts', title: 'Furtilo', rows: [['Sede', 'Bengaluru, Índia'], ['Cobrança', 'A partir de ₹99 por mês, sem comissão'], ['Cidades', 'Mais de 37'], ['Pedidos', 'Mais de 6 mil por mês'], ['Meta', '500 cidades até meados de 2028']] },
  sources: [['StartupTalky', U.stkFurtilo], ['UNI India (comunicado da empresa)', U.uniFurtilo]] },

{ id: 'india-farmer-id-agristack', cat: 'ideias', own: false, t: '2026-10-26T09', d: '26 out 2026', img: 'mundo', src: 'The News Mill', url: U.tnmFarmer,
  title: 'Índia cria 110 milhões de identidades digitais de agricultores, cinco meses antes do prazo',
  sum: 'Cada agricultor recebe um número que dá acesso a programas do governo, crédito, seguro rural e auxílio em desastres, sem repetir a checagem de documentos.',
  body: [
    'A marca foi atingida até 23 de outubro, e a meta era 31 de março de 2027, segundo o The News Mill. O cadastro faz parte da Missão de Agricultura Digital do governo indiano.'
  ] },

{ id: 'even-saude-hospital-proprio', cat: 'ideias', own: false, t: '2026-10-19T12', d: '19 out 2026', img: 'mundo', src: 'YourStory', url: U.ysEven,
  title: 'Na Índia, a Even junta plano de saúde e hospital próprio e capta US$ 50 milhões',
  sum: 'A startup de Bengaluru tem mais de 250 mil membros em 10 cidades e dois hospitais próprios.',
  body: [
    'A rodada foi liderada pela Khosla Ventures, que já era sócia, com participação da Alpha Wave. Com ela, a empresa soma mais de US$ 120 milhões captados, segundo o YourStory.'
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

{ id: 'matiks-jogos-de-matematica', cat: 'ideias', own: false, t: '2026-10-26T12', d: '26 out 2026', img: 'mundo', src: 'TechCrunch', url: U.tcMatiks,
  title: 'App indiano de jogos de matemática Matiks capta US$ 10 milhões e chega a 2,2 milhões de usuários',
  sum: 'O usuário treina contra robôs e depois disputa partidas contra outras pessoas. Os usuários diários passaram de 22 mil para mais de 300 mil neste ano.',
  body: [
    'A rodada foi liderada pela General Catalyst. O app começou a testar assinaturas e já vende itens dentro do jogo. A maior parte dos jogadores está na Índia, e os EUA são a prioridade de expansão.'
  ] },

{ id: 'sathee-tutor-ia-gratuito-vestibular', cat: 'ideias', own: false, t: '2026-10-27T05', d: '27 out 2026', img: 'ciencia', src: 'Elets digitalLEARNING', url: U.elSathee,
  title: 'Plataforma pública indiana com tutor de IA para vestibulares e concursos passa de 2 milhões de alunos',
  sum: 'O SATHEE, criado pelo instituto IIT Kanpur com o Ministério da Educação, é gratuito e ajusta os exercícios conforme os erros do aluno.',
  body: [
    'Começou com provas de engenharia e medicina e hoje cobre também concursos de bancos, ferrovias, agricultura e direito. Tem aulas em vídeo e plantões de dúvidas ao vivo.'
  ] },

{ id: 'cent-checkup-preventivo-ia', cat: 'ideias', own: false, t: '2026-10-27T07', d: '27 out 2026', img: 'ciencia', src: 'Inc42', url: U.incCent,
  title: 'Indiana Cent capta US$ 15 milhões para check-up completo em 2 horas, com laudo organizado por IA',
  sum: 'O pacote reúne ressonância de corpo inteiro, tomografia, ECG e outros exames por ₹27.500 e rastreia mais de 300 condições.',
  body: [
    'A empresa atua em Bengaluru, Mumbai e na região de Délhi e já fez 10 mil exames de corpo inteiro. A IA reúne os resultados em riscos por órgão.'
  ] },

/* ===================== NO BRASIL ===================== */
{ id: 'black-friday-golpes-serasa', cat: 'brasil', own: false, t: '2026-10-28T11', d: '28 out 2026', img: 'celular', src: 'Mobile Time', url: U.mtSerasa,
  title: 'Na Black Friday de 2025, anúncios falsos cresceram 147% e apps fraudulentos, 62%, diz a Serasa',
  sum: 'Foram 36,2 mil tentativas de fraude e R$ 37,4 milhões em risco. 86% dos consumidores já deixaram de aproveitar uma oferta por medo de golpe.',
  body: [
    'Segundo a Serasa Experian, 74% das tentativas aconteceram antes do próprio dia da Black Friday. Sites falsos (53%) e golpes com Pix (42%) estão entre os maiores medos dos consumidores, segundo o Mobile Time.'
  ] },

{ id: 'anpd-guia-eca-digital', cat: 'brasil', own: false, t: '2026-10-28T14', d: '28 out 2026', img: 'plataforma', src: 'Mobile Time', url: U.mtAnpd,
  title: 'ANPD publica guia que diz quais apps e plataformas precisam seguir o ECA Digital',
  sum: 'Redes sociais, lojas de apps, jogos, sistemas operacionais e serviços de mensagem estão entre os serviços com provável acesso de crianças e adolescentes.',
  body: [
    'O guia é uma orientação, e não uma norma. Serviços fora da lista, como marketplaces, serão avaliados caso a caso. As regras sobre verificação de idade e sobre punições ainda vão sair, segundo o Mobile Time.'
  ] },

{ id: 'uber-moto-preco-fixo-taxi-12-cidades', cat: 'brasil', own: true, t: '2026-10-28T20', d: '28 out 2026', img: 'celular', read: 2,
  title: 'Uber fixa em R$ 4,98 as viagens de moto de até 3 km e leva o táxi a mais 12 cidades',
  sum: 'O preço único vale nas 38 cidades com Uber Moto, sem cupom. As opções Táxi e Táxi Promo chegam a cidades como Belém, Recife e Manaus.',
  body: [
    'A Uber passou a cobrar um preço único de R$ 4,98 nas viagens do Uber Moto de até 3 km, a partir desta quarta-feira (28), segundo o Mobile Time. A tarifa vale nas 38 cidades brasileiras onde a modalidade funciona.',
    '## Como funciona o preço fixo',
    'O valor aparece sozinho no app quando a viagem tem até 3 km, sem necessidade de cupom. Nas viagens mais longas, o preço continua variando conforme a procura.',
    '## Táxi em mais cidades',
    'A empresa também levou as opções Táxi e Táxi Promo a mais 12 cidades: Belém, Florianópolis, João Pessoa, Joinville, Maceió, Manaus, Natal, Recife, Santos, São Luís, Teresina e Vitória, segundo o Canaltech. No Táxi, vale a tabela da prefeitura, e o taxímetro é a referência do preço final. No Táxi Promo, o app mostra um desconto já calculado sobre o taxímetro, mas só com os motoristas que aceitam participar. A Uber não informou o tamanho do desconto, segundo o Mobile Bit.',
    'O pagamento é feito pelo app. Se as opções não aparecerem, o serviço pode ainda não ter chegado à região ou não haver taxista disponível.'
  ],
  box: { type: 'facts', title: 'O que muda na Uber', rows: [['Uber Moto', 'R$ 4,98 até 3 km'], ['Cidades com o preço fixo', '38'], ['Táxi e Táxi Promo', 'Mais 12 cidades'], ['Desconto do Táxi Promo', 'Não divulgado']] },
  sources: [['Mobile Time', U.mtUberMoto], ['Canaltech', U.ctUberTaxi], ['Mobile Bit', U.mbUberTaxi]] },

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

{ id: 'bc-regras-credito-no-pix', cat: 'brasil', own: false, t: '2026-10-23T18', d: '23 out 2026', img: 'celular', src: 'Agência Brasil', url: U.abPixCredito,
  title: 'Banco Central cria regras para o crédito oferecido na hora do Pix e para um painel de dívidas nos apps',
  sum: 'A oferta de crédito durante o Pix vai exigir autorização prévia do cliente e só vale a partir de julho de 2027. Os bancos também terão de deixar o cliente bloquear ofertas de empréstimo.',
  body: [
    'Os bancos terão de oferecer um painel com as dívidas do cliente e simulação do custo antes de cada contratação, também a partir de julho de 2027. O bloqueio de ofertas de crédito vale a partir de 31 de março de 2027, segundo a Agência Brasil.'
  ] },

{ id: 'vivo-satelite-starlink', cat: 'brasil', own: false, t: '2026-10-26T14', d: '26 out 2026', img: 'celular', src: 'Teletime', url: U.ttVivo,
  title: 'Vivo lança conexão do celular direto com satélites da Starlink para quem está sem sinal',
  sum: 'O serviço funciona com WhatsApp, SMS e mapas em áreas sem cobertura. Fica de graça por 12 meses no pós-pago e no controle, e chega a cerca de 50 milhões de clientes.',
  body: [
    'O celular se conecta sozinho aos satélites quando fica fora da rede da operadora. Videochamadas e chamadas de emergência não funcionam, e o uso não desconta da franquia de dados, segundo o Teletime.'
  ] },

{ id: 'cripto-prazo-licenca-banco-central', cat: 'brasil', own: true, t: '2026-10-28T07', d: '28 out 2026', img: 'celular', read: 3,
  title: 'Corretoras de criptomoedas têm até sexta (30) para pedir licença ao Banco Central; Binance limita produtos no Brasil',
  sum: 'Quem não fizer o pedido perde o direito de operar. Os bancos só ficam proibidos de trabalhar com prestadoras sem pedido em andamento a partir de 6 de novembro.',
  body: [
    'As empresas que já oferecem compra e venda de criptomoedas no Brasil precisam entregar até sexta-feira (30) a primeira fase do pedido de autorização ao Banco Central, segundo o FinanceFeeds. As regras estão nas Resoluções 519 e 520 e na Instrução Normativa 704. Quem não fizer o pedido perde o direito de operar e passa a ser tratado como irregular, segundo o BitNotícias.',
    '## Prazo para os bancos',
    'A Resolução BCB 589 adiou de 30 de outubro para 6 de novembro a data a partir da qual bancos e instituições de pagamento não podem trabalhar com prestadoras sem autorização nem pedido em andamento. O prazo do pedido continuou em 30 de outubro.',
    '## Binance',
    'A Binance fez o pedido em 23 de outubro, por meio da empresa local BBrasil. Pedir não é o mesmo que ter a autorização. Desde 27 de outubro, clientes brasileiros não podem abrir novas posições em oito produtos, entre eles empréstimos, mineração na nuvem e negociação com margem, e 22 tokens saíram da negociação no país, segundo o FinanceFeeds.',
    '## Quem pediu e quem saiu',
    'OKX, Bybit, Brasil Bitcoin e Transfero estão entre as empresas que já pediram, segundo o BitNotícias. Revolut, Lemon e Bitso deixaram de oferecer criptomoedas no Brasil neste ano. Clientes do Méliuz precisam vender seus bitcoins até 30 de outubro, e a NovaDAX encerra os saques de criptomoedas na mesma data.'
  ],
  box: { type: 'table', title: 'As datas', head: ['Data', 'O que acontece'], rows: [['27/10', 'Binance restringe 8 produtos e retira 22 tokens no Brasil'], ['30/10', 'Prazo para pedir autorização ao BC'], ['30/10', 'Méliuz: prazo para vender bitcoins'], ['6/11', 'Bancos não podem trabalhar com prestadoras sem pedido']], note: 'Fontes: FinanceFeeds e BitNotícias.' },
  sources: [['FinanceFeeds', U.ffCripto], ['BitNotícias', U.bnCripto26], ['BitNotícias', U.bnCripto10]] },

{ id: 'keeta-um-ano-brasil', cat: 'brasil', own: false, t: '2026-10-27T12', d: '27 out 2026', img: 'celular', src: 'Mobile Time', url: U.mtKeeta,
  title: 'Keeta completa um ano no Brasil com 10 milhões de downloads e 83 mil restaurantes',
  sum: 'O app de entregas da chinesa Meituan tem 430 mil entregadores e planeja chegar a mais 21 cidades em 2026. A estreia no Rio foi adiada.',
  body: [
    'O tempo médio de entrega é de 28 minutos em até 3 km. Segundo a empresa, o adiamento no Rio se deve a cláusulas de exclusividade de concorrentes.'
  ] },

{ id: 'superendividados-banco-central', cat: 'brasil', own: false, t: '2026-10-27T12', d: '27 out 2026', img: 'mercado', src: 'Agência Brasil', url: U.abSuperend,
  title: 'Banco Central diz que 20,3 milhões de brasileiros estão superendividados, alta de 75% em cinco anos',
  sum: 'O número, de junho de 2026, equivale a 17% de quem tem crédito. Quem ganha até 2 salários mínimos compromete 42% da renda com dívidas.',
  body: [
    'O presidente do BC, Gabriel Galípolo, disse que pretende anunciar novas medidas ainda neste ano. As regras para o crédito no Pix e o painel de dívidas nos apps valem a partir de julho de 2027.'
  ] },

{ id: 'receita-lote-residual-ir', cat: 'brasil', own: false, t: '2026-10-23T12', d: '23 out 2026', img: 'celular', src: 'Agência Brasil', url: U.abResidual,
  title: 'Receita paga nesta sexta (30) lote residual do Imposto de Renda a 184 mil contribuintes; consulta é pelo app',
  sum: 'São R$ 531,6 milhões. A consulta pode ser feita no app ou no site da Receita, em "Consultar Minha Restituição".',
  body: [
    'Mais da metade do valor, R$ 293,4 milhões, vai para grupos com prioridade, como idosos, pessoas com deficiência ou doença grave e professores.'
  ] }
];
