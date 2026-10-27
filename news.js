/* ============================================================
   NOVERA: conteúdo do site. Edite este arquivo e rode `node build.js`.
   Regras completas em ATUALIZACAO.md.
   ============================================================ */

/* Topo do site: data da edição e destaques da faixa de cima */
const META = {
  /* Endereço público do site, sem barra no final. Usado nos links das redes sociais. */
  siteUrl: 'https://novera-sepia.vercel.app',
  dataExtenso: 'Terça-feira, 27 de outubro de 2026',
  edicao: '27 out 2026',
  /* Faixa do topo: 1 a 3 itens [rótulo, texto curto]. Use só fatos que estão em notícias do site. */
  destaques: [
    ['App do dia', 'Siri com IA passa a falar português no iOS 27.2'],
    ['Em alta', 'Muse, da Meta: 10,2 milhões de downloads nos EUA em 40 dias']
  ]
};

/* Home: destaque principal, dois laterais e três da faixa de baixo (IDs de notícias "own: true") */
const FEATURED = {
  lead: 'siri-ai-portugues-ios-27-2',
  side: ['bc-regras-credito-no-pix', 'whatsapp-agendar-mensagens-iphone'],
  also: ['meta-muse-10-milhoes', 'anthropic-pede-ipo-nasdaq-receita-16-bilhoes', 'snabbit-diarista-10-minutos']
};

/* Home: "Escolhas da redação" (5 IDs) */
const PICKS = ['instagram-features-videos-90-minutos', 'apple-australia-lojas-alternativas', 'ifood-compra-caju', 'abby-care-familiar-cuidador-pago', 'innova-tv-streaming-gratis'];

const U = {
  /* Atualização de 27 out 2026: estreia do formato de aplicativos */
  /* Lançamentos */
  ctInnova: 'https://canaltech.com.br/telecom/novo-streaming-gratis-chega-ao-brasil-com-43-canais-e-1500-titulos/',
  tbInnova: 'https://tecnoblog.net/noticias/novo-streaming-gratuito-oferece-filmes-series-e-canais-de-tv-ao-vivo/',
  egNms: 'https://www.engadget.com/2283704/no-mans-sky-is-coming-to-iphone-and-ipad-as-the-app-store-celebrates-indie-games-week/',
  ahNms: 'https://antihype.com.br/c/games/no-mans-sky-iphone-ipad-lancamento-preco/',
  tcDuet: 'https://techcrunch.com/2026/10/22/claude-duet-app-is-anthropics-bet-on-agents/',
  mrDuet: 'https://www.macrumors.com/2026/10/21/anthropic-claude-duet/',
  mtDuet: 'https://www.mobiletime.com.br/noticias/22/10/2026/anthropic-claude-duet/',
  tcWabi: 'https://techcrunch.com/2026/10/19/replikas-founder-built-the-ai-assistant-she-pitched-at-disrupt-12-years-ago/',
  m9Eney: 'https://9to5mac.com/2026/10/15/macpaw-launches-eney-a-proactive-ai-assistant-for-mac-and-iphone/',
  jwMh: 'https://www.jwave.com.br/2026/10/monster-hunter-outlanders-chega-aos-celulares-em-29-de-outubro/',
  bnOnePiece: 'https://en.bandainamcoent.eu/one-piece/news/set-sail-now-delicious-adventure-one-piece-grand-gourmet',
  tcPlayPriv: 'https://techcrunch.com/2026/10/13/google-play-now-supports-private-vibe-coded-apps-built-just-for-you/',
  mtStraw: 'https://www.mobiletime.com.br/noticias/26/10/2026/strawberry-agentes-ia/',
  m9Flip: 'https://9to5mac.com/2026/10/24/indie-app-spotlight-flipcorder-lets-you-shoot-retro-footage-on-your-iphone-duo/',
  /* Atualizações */
  wbiAgenda: 'https://wabetainfo.com/whatsapp-is-rolling-out-scheduled-messages-on-ios-beta/',
  dtAgenda: 'https://www.digitaltrends.com/social-media/whatsapps-long-awaited-scheduling-feature-is-finally-being-tested-on-iphones/',
  smtFeatures: 'https://www.socialmediatoday.com/news/instagram-rolls-out-limited-features-test-in-the-us/872825/',
  tnwFeatures: 'https://thenextweb.com/news/instagram-tests-90-minute-horizontal-videos-called-features',
  tcSpotFam: 'https://techcrunch.com/2026/10/22/spotify-confirms-family-plan-crackdown-but-calls-it-a-routine-improvement/',
  g9SpotFam: 'https://9to5google.com/2026/10/19/spotify-qr-code-verification-family-sharing/',
  wbiMencoes: 'https://wabetainfo.com/whatsapp-is-rolling-out-a-chat-list-to-track-mentions-and-replies/',
  tcYtMusic: 'https://techcrunch.com/2026/10/14/youtube-music-launches-new-labels-as-ai-generated-music-floods-streaming-platforms/',
  g9Carplay: 'https://9to5google.com/2026/10/21/google-maps-carplay-gemini/',
  dcGoogleAds: 'https://decrypt.co/381775/google-quietly-updates-privacy-policy-gmail-photos-ads?amp=1',
  smtX: 'https://www.socialmediatoday.com/news/x-launches-unified-subscription-packages/832924/',
  tcFbAlgo: 'https://techcrunch.com/2026/10/13/facebook-is-giving-users-more-control-over-their-algorithm/',
  abcMetaAcc: 'https://www.abc.net.au/news/2026-10-27/what-is-meta-account-facebook-instagram-explained/107313814',
  /* IA */
  ctSiri: 'https://canaltech.com.br/apps/atualize-ja-apple-libera-ios-272-com-siri-ai-em-portugues/',
  ihSiri: 'https://ihelpbr.com/ios-27-2-e-lancado-com-siri-ai-em-portugues/',
  tcMuse: 'https://techcrunch.com/2026/10/20/metas-muse-hits-10m-u-s-downloads-in-40-days-a-milestone-reached-by-only-11-other-apps/',
  fortuneMuse: 'https://fortune.com/2026/10/22/mark-zuckerberg-meta-muse-stripe-credit-limit-shopping/',
  bcTerra: 'https://www.bleepingcomputer.com/news/artificial-intelligence/openai-launches-gpt-61-terra-with-3x-faster-ai-agents-50-percent-lower-pricing/',
  itdTerra: 'https://www.ithinkdiff.com/gpt-6-1-terra-launch-half-price-computer-use/',
  tcLock: 'https://techcrunch.com/2026/10/20/chatgpt-now-lets-you-lock-your-chats/',
  tbTreino: 'https://tecnoblog.net/noticias/openai-desiste-de-treinar-modelos-de-ia-com-acesso-a-internet/',
  tcNudify: 'https://techcrunch.com/2026/10/19/apple-updates-guidelines-to-ban-nudify-apps-masquerading-as-regular-apps-to-pass-review/',
  egAuto: 'https://www.engadget.com/2292027/google-brings-gemini-personal-intelligence-to-android-auto/',
  gzRanking: 'https://gizmodo.com.br/chatgpt-e-gemini-lideram-os-acessos-a-chatbots-de-ia-veja-o-top-7-72545',
  odOpenai27: 'https://olhardigital.com.br/2026/10/26/ciencia-e-espaco/openai-anuncia-tres-descobertas-cientificas-especialistas-verificarao-resultados',
  egElvis: 'https://www.engadget.com/2296535/elvis-presley-estate-suing-ai-company-for-copyright-infringement/',
  /* Startups */
  imAnt27: 'https://www.infomoney.com.br/mercados/anthropic-alerta-para-riscos-existenciais-em-aguardado-pedido-de-ipo/',
  fortuneAnt27: 'https://fortune.com/2026/10/26/anthropics-s-1/',
  mrAus: 'https://macrumors.com/2026/10/22/rival-app-stores-in-australia-ordered',
  iaAus: 'https://ia.acs.org.au/article/2026/apple-ordered-to-allow-third-party-app-stores-in-australia.html',
  secSpotify: 'https://www.sec.gov/Archives/edgar/data/0001639920/000114036126040435/ef20084028_ex99-1.htm',
  hbSpotify: 'https://www.hypebot.com/spotify-q3-2026-788m-users-and-306m-subscribers/',
  tcBumble: 'https://techcrunch.com/2026/10/13/bumble-agrees-to-a-1-3b-acquisition-deal-as-online-dating-faces-a-reset/',
  sfBraze: 'https://salesforce.com/news/press-releases/2026/10/20/salesforce-signs-definitive-agreement-to-acquire-braze',
  dtCoreia: 'https://www.digitaltoday.co.kr/en/view/114702/south-korea-google-play-payment-fee-rules-to-change-at-year-end-key-is-real-costs',
  invOpenai: 'https://www.investing.com/news/stock-market-news/openai-nears-30-billion-funding-round-at-125-trillion-valuation-4967451',
  tcOtter: 'https://techcrunch.com/2026/10/20/otter-ai-raises-320-million-from-general-catalysts-growth-fund-for-its-meeting-tool/',
  stMexico: 'https://startups.com.br/negocios/venture-capital/mexico-supera-brasil-em-aportes-para-startups-em-2026/',
  mtItau: 'https://www.mobiletime.com.br/noticias/26/10/2026/itau-anuncia-acordo-para/',
  /* Ideias para o Brasil */
  incSnabbit: 'https://inc42.com/buzz/snabbit-spent-%E2%82%B916-to-earn-every-rupee-in-operating-revenue-in-fy26/',
  starSnabbit: 'https://www.thestar.com.my/aseanplus/aseanplus-news/2026/10/20/domestic-work-gets-app-boost',
  fortuneAbby: 'https://fortune.com/2026/10/15/startup-abby-care-raises-82-million-to-turn-family-members-into-paid-caregivers/',
  hitAbby: 'https://hitconsultant.net/2026/10/19/abby-care-paid-family-caregiving/',
  buFarmer: 'https://www.biometricupdate.com/202610/indias-farmer-id-scheme-reaches-110m-ahead-of-schedule',
  tnmFarmer: 'https://thenewsmill.com/2026/10/india-creates-11-crore-farmer-ids-five-months-ahead-of-deadline/',
  tcMatiks: 'https://techcrunch.com/2026/10/26/matiks-raises-10m-to-expand-its-math-and-puzzle-gaming-platform/',
  rdTgtg: 'https://www.retaildetail.eu/news/general/too-good-to-go-also-wants-to-tackle-surplus-in-the-non-food-sector/',
  tcZenzap: 'https://techcrunch.com/2026/10/14/zenzap-raises-44m-for-its-ai-chat-app-that-aims-to-replace-whatsapp-in-the-workplace/',
  kaAq: 'https://kr-asia.com/ants-aq-expands-beyond-weight-loss-as-health-app-reaches-150-million-users',
  elSathee: 'https://digitallearning.eletsonline.com/2026/10/free-ai-tutors-iits-sathee-ndli-fermi-jee-neet-cuet-gate-preparation',
  tcTolan: 'https://techcrunch.com/2026/10/19/tolan-snags-30m-for-its-ai-companion-that-helps-users-navigate-life/',
  incCent: 'https://inc42.com/buzz/cent-raises-15-mn-to-scale-ai-led-preventive-healthcare-platform',
  /* No Brasil */
  abPixCredito: 'https://agenciabrasil.ebc.com.br/economia/noticia/2026-10/bc-reforca-regras-de-protecao-ao-consumidor-nas-ofertas-de-credito',
  nfPixCredito: 'https://neofeed.com.br/insiders/o-credito-no-pix-ganhou-regra-agora-pode-ganhar-escala',
  blCaju: 'https://www.bloomberglinea.com.br/negocios/ifood-beneficios-acerta-a-compra-da-caju-e-amplia-disputa-por-mercado-de-r-150-bi/',
  otCaju: 'https://www.otempo.com.br/economia/2026/10/20/ifood-anuncia-compra-da-caju-de-olho-no-bilionario-mercado-de-beneficios-a-trabalhadores',
  dgCaju: 'https://www.dgabc.com.br/Noticia/4353954/ifood-compra-caju-e-passa-a-ter-tres-milhoes-de-usuarios-na-area-de-beneficios',
  ttVivo: 'https://teletime.com.br/26/10/2026/vivo-parceria-starlink-vivo-satelite/',
  mtVivo: 'https://www.mobiletime.com.br/noticias/26/10/2026/vivo-satelite-starlink/',
  abBets: 'https://agenciabrasil.ebc.com.br/economia/noticia/2026-10/prazo-pra-bancos-devolverem-r-13-bilhao-de-bets-acaba-nesta-quarta',
  blNubank: 'https://www.bloomberglinea.com.br/tech/nubank-lanca-ferramenta-de-ia-que-promete-recomendacoes-neutras-de-investimento/',
  mt99Premier: 'https://www.mobiletime.com.br/noticias/14/10/2026/99-lanca-99premier/',
  mt99Unico: 'https://www.mobiletime.com.br/noticias/26/10/2026/99-unico-identidade/',
  abChamadas: 'https://agenciabrasil.ebc.com.br/economia/noticia/2026-10/medida-provisoria-quer-coibir-excesso-de-chamadas-e-golpes-telefonicos',
  otQrCode: 'https://www.otempo.com.br/economia/2026/10/21/golpe-do-qr-code-pode-desviar-pagamentos-por-boleto-e-pix',
  ctIfoodBf: 'https://canaltech.com.br/apps/ifood-inicia-campanha-de-black-friday-com-ofertas-ate-30-de-novembro/'
};

const NEWS = [
/* ===================== LANÇAMENTOS ===================== */
{ id: 'innova-tv-streaming-gratis', cat: 'lancamentos', own: true, t: '2026-10-16T10', d: '16 out 2026', img: 'celular', read: 3,
  title: 'Innova TV, streaming brasileiro gratuito com 43 canais ao vivo, estreia em apps para celular e TV',
  sum: 'O serviço é bancado por anúncios, pede cadastro com CPF e funciona no Android, no iOS, no Roku, no Fire TV e no Google TV. Os apps para TVs Samsung e LG aguardam aprovação.',
  body: [
    'O Brasil ganhou mais um serviço de streaming gratuito. A Innova TV, da Innova Comunicação, chegou ao público na semana de 12 de outubro, depois de testes iniciados em julho, segundo o Tecnoblog. O usuário não paga e assiste a anúncios.',
    '## O que tem',
    'São 43 canais lineares, que passam a programação ao vivo, entre eles o Times Brasil, licenciado da CNBC, além de 3 rádios. O catálogo sob demanda deve chegar a cerca de 1.500 filmes e séries, adicionados aos poucos, segundo o Canaltech. O Tecnoblog fala em cerca de 1.500 horas de conteúdo. A empresa planeja incluir de 4 a 5 canais por mês.',
    '## Onde funciona',
    'O serviço roda no navegador e em apps para Android, iOS, Android TV e Google TV, Roku e Fire TV Stick. Os apps para TVs Samsung e LG esperam aprovação das fabricantes, e o da Apple TV está em desenvolvimento, sem data. A imagem vai até 1080p, sem 4K.',
    'Para assistir, é preciso criar uma conta com e-mail, telefone e CPF.'
  ],
  box: { type: 'facts', title: 'Innova TV', rows: [['Preço', 'Grátis, com anúncios'], ['Canais ao vivo', '43, além de 3 rádios'], ['Sob demanda', 'Cerca de 1.500 títulos (em expansão)'], ['Qualidade máxima', '1080p'], ['Cadastro', 'E-mail, telefone e CPF']] },
  sources: [['Canaltech', U.ctInnova], ['Tecnoblog', U.tbInnova]] },

{ id: 'no-mans-sky-iphone', cat: 'lancamentos', own: true, t: '2026-10-27T08', d: '27 out 2026', img: 'celular', read: 2,
  title: 'No Man\'s Sky chega ao iPhone e ao iPad nesta quarta, com começo grátis e jogo completo por R$ 129,90',
  sum: 'O jogo de exploração espacial da Hello Games exige iPhone 11 ou mais novo. No lançamento, a versão para iOS não terá multiplayer.',
  body: [
    'O jogo No Man\'s Sky chega ao iPhone e ao iPad em 28 de outubro, com pré-venda aberta desde 12 de outubro, segundo o Engadget. Na App Store brasileira, a data aparece como 29 de outubro, diferença que o site Antihype atribui ao fuso horário.',
    '## Como funciona a compra',
    'O jogo usa o modelo de teste grátis: o começo pode ser jogado sem pagar, e uma compra única libera tudo. Na App Store brasileira, o preço é R$ 129,90, segundo o Antihype, que compara com R$ 162 no Steam.',
    '## O que precisa',
    'O jogo roda em iPhone 11 ou iPad Air de 3ª geração, ou modelos mais novos. Os assentamentos em planetas exigem iPhone 15 Pro ou mais novo, segundo o Antihype. Na estreia, a versão para iOS não terá multiplayer, segundo o Engadget.',
    'O lançamento faz parte da Semana dos Jogos Independentes da App Store, que também destaca títulos como 9 Kings e Little Kitty, Big City.'
  ],
  box: { type: 'facts', title: 'No Man\'s Sky no iPhone', rows: [['Lançamento', '28 de outubro (29 na loja brasileira)'], ['Preço no Brasil', 'R$ 129,90, com começo grátis'], ['Mínimo', 'iPhone 11 ou iPad Air (3ª geração)'], ['Multiplayer', 'Não no lançamento']] },
  sources: [['Engadget', U.egNms], ['Antihype', U.ahNms]] },

{ id: 'claude-duet-anthropic', cat: 'lancamentos', own: true, t: '2026-10-22T12', d: '22 out 2026', img: 'tecnologia', read: 2,
  title: 'Anthropic lança o Claude Duet, agente que trabalha em segundo plano, em teste com lista de espera',
  sum: 'O app manda um resumo pela manhã, acompanha os aplicativos conectados e pode fazer compras, mas pede aprovação antes de pagar ou enviar mensagens. Por ora, o acesso é nos EUA.',
  body: [
    'A Anthropic apresentou em 21 de outubro o Claude Duet, um agente de inteligência artificial que trabalha sozinho, numa máquina virtual própria com navegador. Ele envia um resumo pela manhã e confere os apps conectados a cada poucas horas, segundo o MacRumors.',
    '## O que ele faz',
    'O Duet usa o modelo Claude Opus 5.5 e se liga a mais de 6.000 conectores e plug-ins. Pode fazer compras pelo Link, da Stripe, e pelo Shop Pay, da Shopify, segundo o TechCrunch. Antes de pagar, mandar mensagens, assinar documentos ou apagar arquivos, pede aprovação. Não negocia ações nem transfere dinheiro entre contas.',
    '## Quem pode usar',
    'É uma prévia de pesquisa para assinantes dos planos Pro e Max, com lista de espera. MacRumors e Engadget dizem que o acesso é só nos EUA. A Mobile Time informa que não há confirmação de quando chega ao Brasil.',
    'O lançamento coloca a empresa na disputa com o Muse, da Meta, e o Dots, da OpenAI, outros agentes que executam tarefas para o usuário.'
  ],
  sources: [['TechCrunch', U.tcDuet], ['MacRumors', U.mrDuet], ['Mobile Time', U.mtDuet]] },

{ id: 'monster-hunter-outlanders', cat: 'lancamentos', own: false, t: '2026-10-26T10', d: '26 out 2026', img: 'celular', src: 'JWave', url: U.jwMh,
  title: 'Monster Hunter Outlanders, jogo gratuito para celular, estreia nesta quinta no Android e no iOS',
  sum: 'O jogo da franquia da Capcom foi desenvolvido pelo TiMi Studio, da Tencent. No Brasil, é publicado pela Garena, com pré-registro aberto.',
  body: [
    'O lançamento é em 29 de outubro. O jogo é gratuito, com compras dentro do app. A versão para a China continental fica para 2027 ou depois.'
  ] },

{ id: 'wabi-2-kuyda', cat: 'lancamentos', own: false, t: '2026-10-19T14', d: '19 out 2026', img: 'celular', src: 'TechCrunch', url: U.tcWabi,
  title: 'Fundadora do Replika abre a todos o Wabi 2.0, assistente de IA em que várias pessoas conversam juntas',
  sum: 'O app de Eugenia Kuyda funciona como um mensageiro e está no iOS, no Android e no Mac. Por enquanto, é gratuito.',
  body: [
    'A empresa ainda não definiu como vai ganhar dinheiro. O Wabi recebeu US$ 20 milhões numa rodada liderada pela Andreessen Horowitz.'
  ] },

{ id: 'macpaw-eney', cat: 'lancamentos', own: false, t: '2026-10-15T12', d: '15 out 2026', img: 'tecnologia', src: '9to5Mac', url: U.m9Eney,
  title: 'MacPaw, dona do CleanMyMac, lança o Eney, assistente de IA para Mac que já fala português',
  sum: 'O app transcreve reuniões, faz um resumo pela manhã e se conecta a Gmail, Slack e Notion. Os planos vão de US$ 14,99 a US$ 49,99 por mês.',
  body: [
    'Há teste grátis de 14 dias. O Eney está disponível em 8 idiomas, entre eles o português do Brasil, e usa modelos de IA no próprio computador e na nuvem.'
  ] },

{ id: 'google-play-apps-privados-ia', cat: 'lancamentos', own: false, t: '2026-10-13T15', d: '13 out 2026', img: 'plataforma', src: 'TechCrunch', url: U.tcPlayPriv,
  title: 'Google Play passa a aceitar apps pessoais criados com IA, visíveis só para quem os fez',
  sum: 'O usuário cria o app no Google AI Studio e o instala pelo Google Play. Por enquanto, o recurso vale só nos EUA, para maiores de 18 anos.',
  body: [
    'Esses apps não aparecem na busca da loja. Nos próximos meses, será possível compartilhá-los com amigos e família, e um app que fizer sucesso poderá ir para a loja pública depois de revisão.'
  ] },

{ id: 'strawberry-navegador-agentes', cat: 'lancamentos', own: false, t: '2026-10-26T11', d: '26 out 2026', img: 'tecnologia', src: 'Mobile Time', url: U.mtStraw,
  title: 'Sueca Strawberry lança navegador com agentes de IA e planeja chegar à América Latina',
  sum: 'O navegador é voltado a equipes de vendas, marketing e jurídico. Tem plano gratuito e planos de US$ 20 a US$ 250 por mês.',
  body: [
    'A versão 1.0 roda no macOS e no Windows, e a versão para celular está prevista para os próximos meses. A startup de Estocolmo captou US$ 6 milhões.'
  ] },

{ id: 'one-piece-grand-gourmet', cat: 'lancamentos', own: false, t: '2026-10-23T10', d: '23 out 2026', img: 'celular', src: 'Bandai Namco', url: U.bnOnePiece,
  title: 'One Piece: Grand Gourmet, simulador de gestão da Kairosoft, chega ao celular e aos consoles',
  sum: 'O jogo publicado pela Bandai Namco está no iOS, no Android, no PC e nos Switch e Switch 2.',
  body: [
    'É um simulador de gestão no estilo clássico da Kairosoft, conhecida por jogos de administrar negócios no celular.'
  ] },

{ id: 'flipcorder-iphone-duo', cat: 'lancamentos', own: false, t: '2026-10-24T12', d: '24 out 2026', img: 'celular', src: '9to5Mac', url: U.m9Flip,
  title: 'App Flipcorder transforma o iPhone em filmadora retrô e aproveita a tela do iPhone Duo',
  sum: 'O app custa US$ 4,99, sem anúncios nem compras internas, e grava em "fitas" virtuais de até 30 minutos com visual de VHS.',
  body: [
    'Funciona em iPhones com iOS 26 ou mais novo e foi otimizado para o iPhone Duo, o primeiro iPhone dobrável. As gravações são feitas em trechos de 20 segundos.'
  ] },

/* ===================== ATUALIZAÇÕES ===================== */
{ id: 'whatsapp-agendar-mensagens-iphone', cat: 'atualizacoes', own: true, t: '2026-10-23T09', d: '23 out 2026', img: 'celular', read: 2,
  title: 'WhatsApp começa a testar no iPhone o agendamento de mensagens, já em teste no Android',
  sum: 'Basta segurar o botão de enviar e escolher dia e hora. A mensagem sai mesmo com o app fechado, com até duas semanas de antecedência.',
  body: [
    'O WhatsApp começou a liberar o agendamento de mensagens para parte dos testadores da versão beta no iPhone, segundo o site WABetaInfo, que acompanha as novidades do app. No Android, o recurso já estava em teste, e chegou cerca de uma semana antes, segundo a Digital Trends.',
    '## Como funciona',
    'O usuário segura o botão de enviar e escolhe a data e a hora. O envio pode ser marcado com no mínimo 10 minutos e no máximo duas semanas de antecedência. Vale para textos, fotos, vídeos e links, um item por vez, e a mensagem sai mesmo com o app fechado.',
    'As mensagens agendadas ficam na tela de informações da conversa e podem ser apagadas antes do envio, sem aviso ao destinatário. A criptografia de ponta a ponta continua valendo. Em grupos, só recebe quem já era membro no momento do agendamento.',
    '## Quando chega a todos',
    'Ainda não há data de lançamento oficial. Segundo o WABetaInfo, a liberação deve ser ampliada nas próximas semanas.'
  ],
  box: { type: 'steps', title: 'Como agendar (versão em teste)', steps: [['Escreva a mensagem', 'Texto, foto, vídeo ou link'], ['Segure o botão de enviar', 'Abre a opção de agendamento'], ['Escolha dia e hora', 'De 10 minutos a 2 semanas à frente'], ['Pronto', 'A mensagem sai mesmo com o app fechado']] },
  sources: [['WABetaInfo', U.wbiAgenda], ['Digital Trends', U.dtAgenda]] },

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

{ id: 'spotify-plano-familia-qr-code', cat: 'atualizacoes', own: true, t: '2026-10-22T15', d: '22 out 2026', img: 'plataforma', read: 2,
  title: 'Spotify passa a exigir verificação por QR code no Plano Família; quem não fizer fica 12 meses fora',
  sum: 'O membro precisa escanear o código no celular do responsável pelo plano, no mesmo lugar, em até 7 dias. A empresa chama a mudança de "melhoria de rotina".',
  body: [
    'O Spotify confirmou na apresentação de resultados do terceiro trimestre uma nova verificação para o Plano Família, segundo o TechCrunch.',
    '## Como funciona',
    'O responsável pelo plano abre um QR code no app, em "Seu Premium", e o membro escaneia com o próprio celular, com os dois no mesmo lugar. O membro tem 7 dias, a partir da notificação, para fazer a verificação. Segundo relatos citados pelo 9to5Google, o código muda a cada poucos segundos, o que dificulta usar uma captura de tela.',
    '## Quem não verificar',
    'Quem perder o prazo fica 12 meses sem poder entrar em outro Plano Família ou Duo. Pode assinar um plano Individual ou passar para a versão gratuita.',
    'O co-CEO Alex Norström disse que a mudança é uma "melhoria de rotina", e não uma repressão. As fontes citam a página de suporte do Spotify nos EUA e não informam quando a regra chega a outros países.'
  ],
  sources: [['TechCrunch', U.tcSpotFam], ['9to5Google', U.g9SpotFam]] },

{ id: 'whatsapp-filtro-mencoes-respostas', cat: 'atualizacoes', own: false, t: '2026-10-24T10', d: '24 out 2026', img: 'celular', src: 'WABetaInfo', url: U.wbiMencoes,
  title: 'WhatsApp testa filtro que reúne só as conversas em que você foi mencionado ou respondido',
  sum: 'O filtro aparece no topo da aba Conversas, ao lado de Não lidas, Favoritas e Grupos, na versão beta para Android.',
  body: [
    'Um contador mostra quantas conversas estão pendentes. O filtro é opcional e pode ser desligado. Ainda não há data de lançamento para todos.'
  ] },

{ id: 'youtube-music-selos-musica-ia', cat: 'atualizacoes', own: false, t: '2026-10-14T15', d: '14 out 2026', img: 'plataforma', src: 'TechCrunch', url: U.tcYtMusic,
  title: 'YouTube Music passa a marcar músicas feitas total ou parcialmente com IA',
  sum: 'São três selos: feita totalmente com IA, feita em parte com IA e sem IA generativa. O selo aparece na tela do player.',
  body: [
    'Os parceiros fazem a declaração, e o YouTube completa com ferramentas próprias de detecção. Usar IA não tira a música da monetização.'
  ] },

{ id: 'google-maps-gemini-carplay', cat: 'atualizacoes', own: false, t: '2026-10-21T14', d: '21 out 2026', img: 'celular', src: '9to5Google', url: U.g9Carplay,
  title: 'Google Maps no CarPlay ganha o Gemini para tirar dúvidas durante a navegação',
  sum: 'O motorista pode pedir rotas sem pedágio, dicas de horário conforme o trânsito e relatar problemas na via por voz.',
  body: [
    'É a primeira vez que o Google Maps tem um assistente de voz no CarPlay. O recurso já está nos EUA e começou a ser liberado em outros países.'
  ] },

{ id: 'google-anuncios-gmail-fotos-personal-intelligence', cat: 'atualizacoes', own: false, t: '2026-10-24T10', d: '24 out 2026', img: 'plataforma', src: 'Decrypt', url: U.dcGoogleAds,
  title: 'Google muda a política de privacidade: Gmail e Fotos podem influenciar anúncios se ligados ao Gemini',
  sum: 'Por padrão, o conteúdo continua fora dos anúncios. Isso muda se o usuário conectar Gmail, Drive ou Fotos a recursos de IA como o Gemini.',
  body: [
    'A nova política vale desde 16 de outubro. Para desligar, o usuário pode desconectar os apps em "Dados e privacidade" ou desativar os anúncios personalizados.'
  ] },

{ id: 'x-assinatura-unificada-grok-cursor', cat: 'atualizacoes', own: false, t: '2026-10-13T12', d: '13 out 2026', img: 'plataforma', src: 'Social Media Today', url: U.smtX,
  title: 'X junta Premium, Grok e Cursor numa assinatura com cinco níveis, de graça a US$ 200 por mês',
  sum: 'O nível Premium, de US$ 30, reúne o SuperGrok, o Cursor Pro e o X Premium+. A liberação começa pelos EUA.',
  body: [
    'Quem já assina um dos serviços não é obrigado a migrar. Os níveis Super e Ultra, de US$ 100 e US$ 200, dão mais uso de IA.'
  ] },

{ id: 'facebook-your-algorithm', cat: 'atualizacoes', own: false, t: '2026-10-13T16', d: '13 out 2026', img: 'plataforma', src: 'TechCrunch', url: U.tcFbAlgo,
  title: 'Facebook deixa o usuário ajustar o feed e os Reels descrevendo os próprios gostos',
  sum: 'O recurso "Your algorithm" fica no menu de três pontos dos posts. O Instagram já tinha uma função parecida.',
  body: [
    'Depois de marcar um post como interessante ou não, o Facebook pode fazer perguntas para entender melhor o que a pessoa quer ver. Segundo a Meta, as recomendações podem mudar na mesma sessão.'
  ] },

{ id: 'meta-account-substitui-central-de-contas', cat: 'atualizacoes', own: false, t: '2026-10-27T06', d: '27 out 2026', img: 'plataforma', src: 'ABC News', url: U.abcMetaAcc,
  title: 'Meta começa a trocar a Central de Contas pelo "Meta Account", sem opção de recusa',
  sum: 'A conta reúne Facebook, Messenger, Instagram, Threads e Meta AI. O WhatsApp só entra se o usuário quiser ou se já estava ligado.',
  body: [
    'O usuário escolhe quais perfis ficam em cada conta, e as configurações de cada app continuam separadas. Especialistas ouvidos pela emissora australiana apontam riscos de privacidade.'
  ] },

/* ===================== IA ===================== */
{ id: 'siri-ai-portugues-ios-27-2', cat: 'ia', own: true, t: '2026-10-26T18', d: '26 out 2026', img: 'celular', read: 3,
  title: 'Apple libera o iOS 27.2, e a nova Siri com inteligência artificial passa a falar português',
  sum: 'A Siri AI agora entende o que está na tela e executa ações em vários passos dentro dos apps. Funciona do iPhone 15 Pro em diante e também chegou a iPads, Macs e ao Apple Watch.',
  body: [
    'A Apple liberou nesta segunda-feira (26) o iOS 27.2, e a nova Siri com inteligência artificial ganhou o português, além de espanhol, francês, japonês e coreano. Até então, a Siri AI só funcionava em inglês, em versão beta, segundo o Canaltech.',
    '## O que muda',
    'A nova Siri mantém conversas mais longas, entende o que aparece na tela e executa tarefas em vários passos dentro dos aplicativos. O Mensagens também passa a sugerir ações com IA, como criar eventos e lembretes a partir de uma conversa.',
    '## Quais aparelhos',
    'O recurso funciona em iPhones com Apple Intelligence: do iPhone 15 Pro e Pro Max em diante e na linha iPhone 16 ou mais nova, segundo o iHelp BR. Também chega a iPads e Macs com chip M1 ou superior, ao Apple Watch Series 9, Ultra 2 e SE 3 e ao Apple Vision Pro, com o iPadOS 27.2, o macOS 27.2 e o watchOS 27.2.',
    '## Outras novidades',
    'A atualização traz ainda um novo visual para o Apple Music e perfis individuais no app Apple TV.'
  ],
  box: { type: 'facts', title: 'iOS 27.2', rows: [['Novidade principal', 'Siri AI em português'], ['Outros idiomas novos', 'Espanhol, francês, japonês e coreano'], ['iPhones', 'iPhone 15 Pro em diante'], ['Também em', 'iPad, Mac, Apple Watch e Vision Pro']] },
  sources: [['Canaltech', U.ctSiri], ['iHelp BR', U.ihSiri]] },

{ id: 'meta-muse-10-milhoes', cat: 'ia', own: true, t: '2026-10-22T12', d: '22 out 2026', img: 'tecnologia', read: 3,
  title: 'Muse, agente de IA da Meta, passa de 10 milhões de downloads nos EUA em 40 dias, e compras viram o principal uso',
  sum: 'Só outros 11 apps chegaram a essa marca tão rápido nos EUA, segundo a Sensor Tower. O app está disponível apenas nos EUA e no Canadá.',
  body: [
    'O Muse, agente de inteligência artificial da Meta lançado em 8 de setembro, teve cerca de 10,2 milhões de downloads nos EUA nos primeiros 40 dias, segundo dados da Sensor Tower publicados pelo TechCrunch. No mundo, foram cerca de 10,9 milhões. Só outros 11 apps alcançaram essa marca no mesmo prazo nos EUA, entre eles o Threads, em 2023.',
    '## Comparação com rivais',
    'Nos primeiros 40 dias nos EUA, o ChatGPT teve 3,7 milhões de downloads, o Grok, 500 mil, e o Claude, 200 mil. O Muse chegou a 2,5 milhões de usuários ativos por dia em 16 de outubro, e 30% de quem baixou o app continuava usando depois de 7 dias.',
    '## Compras',
    'Na apresentação de resultados da Meta, em 21 de outubro, Mark Zuckerberg disse que comprar é o uso mais comum do Muse, com compra média acima de US$ 200, segundo a Fortune. A Meta pediu à Stripe que aumentasse os limites de crédito por causa da demanda.',
    '## Como a Meta vai ganhar dinheiro',
    'O uso é gratuito. A Meta vai cobrar das empresas uma taxa sobre as vendas feitas pelo agente e vender assinaturas para quem quiser mais uso ou modelos mais avançados. Zuckerberg atribuiu a restrição a EUA e Canadá ao alto custo de computação.'
  ],
  box: { type: 'bars', title: 'Downloads nos EUA nos primeiros 40 dias', unit: 'Em milhões. Fonte: Sensor Tower, via TechCrunch.', max: 10.2, rows: [['Muse (Meta)', 10.2], ['ChatGPT', 3.7], ['Grok', 0.5], ['Claude', 0.2]] },
  sources: [['TechCrunch', U.tcMuse], ['Fortune', U.fortuneMuse]] },

{ id: 'gpt-61-terra-openai', cat: 'ia', own: true, t: '2026-10-26T20', d: '26 out 2026', img: 'tecnologia', read: 2,
  title: 'OpenAI lança o GPT-6.1 Terra, modelo mais barato que usa o computador pelo usuário',
  sum: 'O modelo lê a tela, clica, digita e troca de aplicativo. Está no ChatGPT para assinantes pagos e custa metade do anterior na API.',
  body: [
    'A OpenAI lançou nesta segunda-feira (26) o GPT-6.1 Terra, modelo feito para operar o computador: ele lê a tela, clica, digita e alterna entre aplicativos. Ele substitui o GPT-5.6 Terra, segundo o BleepingComputer.',
    '## Quem pode usar',
    'O modelo está no ChatGPT e no Codex para assinantes dos planos Plus, Pro, Enterprise e Edu. As fontes não falam do plano gratuito.',
    '## Preço e desempenho',
    'Na API, para desenvolvedores, custa US$ 1 por milhão de tokens de entrada e US$ 5 por milhão de saída, metade do GPT-5.6 Terra, segundo o BleepingComputer e o iThinkDiff. Segundo a própria OpenAI, ele termina tarefas mais de três vezes mais rápido que os modelos GPT-6 Astra e GPT-6.1 Sol.',
    'Para programação mais exigente, a empresa ainda recomenda os modelos Sol e Astra.'
  ],
  sources: [['BleepingComputer', U.bcTerra], ['iThinkDiff', U.itdTerra]] },

{ id: 'chatgpt-conversas-bloqueadas', cat: 'ia', own: false, t: '2026-10-20T15', d: '20 out 2026', img: 'celular', src: 'TechCrunch', url: U.tcLock,
  title: 'ChatGPT passa a permitir trancar conversas com senha ou biometria',
  sum: 'As conversas trancadas saem do histórico e da busca e só abrem com PIN de 4 dígitos, Face ID ou Touch ID.',
  body: [
    'Não é criptografia de ponta a ponta. Se o PIN for redefinido, as conversas trancadas são apagadas de vez. A liberação é gradual, inclusive no plano gratuito.'
  ] },

{ id: 'openai-treino-sem-internet', cat: 'ia', own: false, t: '2026-10-26T10', d: '26 out 2026', img: 'ciencia', src: 'Tecnoblog', url: U.tbTreino,
  title: 'OpenAI deixa de treinar seus modelos mais avançados com acesso à internet ao vivo',
  sum: 'O treino passa a usar cópias armazenadas e versões simuladas da web. Em setembro, um modelo explorou uma falha de configuração e chegou à internet.',
  body: [
    'A empresa diz que os modelos são imprevisíveis demais para ter acesso livre à rede. A decisão veio duas semanas depois de a Anthropic restringir o acesso à internet dos seus modelos mais novos.'
  ] },

{ id: 'apple-proibe-apps-nudify', cat: 'ia', own: false, t: '2026-10-19T14', d: '19 out 2026', img: 'plataforma', src: 'TechCrunch', url: U.tcNudify,
  title: 'Apple endurece regras da App Store contra apps que usam IA para criar nudez falsa',
  sum: 'Quem esconder esse tipo de função num app aparentemente comum perde o app e é expulso do programa de desenvolvedores.',
  body: [
    'Apps com conteúdo de usuários também precisam filtrar imagens íntimas sem consentimento, inclusive as feitas por IA, e ter botão de denúncia.'
  ] },

{ id: 'gemini-android-auto', cat: 'ia', own: false, t: '2026-10-20T14', d: '20 out 2026', img: 'celular', src: 'Engadget', url: U.egAuto,
  title: 'Gemini no Android Auto passa a usar dados do Gmail para ajudar o motorista',
  sum: 'Com o Gmail ligado, o assistente informa portão e situação de voos e entende pedidos como "me leve à minha consulta".',
  body: [
    'O recurso é opcional. A liberação é global, com exceção de Suíça, Espaço Econômico Europeu, Reino Unido e Nigéria. A fonte não cita o Brasil nem os idiomas.'
  ] },

{ id: 'ranking-chatbots-similarweb', cat: 'ia', own: false, t: '2026-10-23T12', d: '23 out 2026', img: 'tecnologia', src: 'Gizmodo Brasil', url: U.gzRanking,
  title: 'ChatGPT perde espaço, mas segue líder entre os chatbots na web; Gemini fica com 25%',
  sum: 'Em setembro, o ChatGPT teve 56,4% das visitas, o Gemini, 25%, e o Claude, 9,6%, segundo a Similarweb. Um ano antes, o ChatGPT tinha 71,8%.',
  body: [
    'O ranking mede só as visitas aos sites e deixa de fora os apps de celular. Em setembro, o ChatGPT teve cerca de 5,9 bilhões de visitas.'
  ] },

{ id: 'openai-anuncia-tres-descobertas-cientificas', cat: 'ia', own: false, t: '2026-10-26T22', d: '26 out 2026', img: 'ciencia', src: 'Olhar Digital', url: U.odOpenai27,
  title: 'OpenAI diz que sua IA fez três descobertas em matemática, computação e física, que ainda serão verificadas',
  sum: 'Uma delas seria a refutação da Hipótese do Tempo Exponencial, da ciência da computação. Grupos de especialistas vão analisar os resultados.',
  body: [
    'Na física, a empresa afirma ter demonstrado a existência de certas teorias quânticas de campos em quatro dimensões. O grupo que vai analisar esse trabalho é liderado por David Gross, Nobel de Física de 2004.',
    'Os resultados ainda não foram validados de forma independente e não devem ser tratados como conclusões da comunidade científica.'
  ] },

{ id: 'espolio-elvis-processa-anthropic', cat: 'ia', own: false, t: '2026-10-26T14', d: '26 out 2026', img: 'arte', src: 'Engadget', url: U.egElvis,
  title: 'Donos do catálogo de Elvis Presley processam a Anthropic por uso de músicas no treino de IA',
  sum: 'A ação pede US$ 41 milhões de indenização. A Anthropic diz que discorda das acusações e vai se defender.',
  body: [
    'Os autores, entre eles a Authentic Brands Group, acusam a empresa de usar músicas como "Can\'t Help Falling in Love" sem autorização. A Anthropic já defendeu antes que esse tipo de treino é uso justo.'
  ] },

/* ===================== STARTUPS ===================== */
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
    'Entre os riscos listados, a empresa diz que sistemas avançados de IA podem representar "riscos catastróficos ou existenciais para a humanidade" se não houver salvaguardas adequadas. Os sete cofundadores mantêm 50,1% dos votos por meio de uma classe especial de ações, segundo a Fortune.'
  ],
  box: { type: 'facts', title: 'O prospecto', rows: [['Receita (1º sem. 2026)', 'US$ 16,3 bilhões'], ['Prejuízo líquido', 'US$ 80,7 bilhões'], ['Efeito contábil no prejuízo', 'Cerca de US$ 72,4 bilhões'], ['Bolsa e código', 'Nasdaq, ANT'], ['Funcionários', '5.300 em setembro']] },
  sources: [['InfoMoney (Bloomberg)', U.imAnt27], ['Fortune', U.fortuneAnt27]] },

{ id: 'apple-australia-lojas-alternativas', cat: 'startups', own: true, t: '2026-10-23T09', d: '23 out 2026', img: 'plataforma', read: 3,
  title: 'Justiça da Austrália manda a Apple liberar lojas de apps rivais e pagamentos alternativos no iPhone',
  sum: 'A partir de março de 2027, australianos poderão baixar apps de outras lojas e de sites. A Apple vai recorrer. O Fortnite anunciou a volta à App Store do país.',
  body: [
    'O Tribunal Federal da Austrália determinou em 22 de outubro que a Apple abra o iPhone a lojas de aplicativos concorrentes e a meios de pagamento alternativos, segundo o MacRumors. A decisão do juiz Jonathan Beach vem depois de o tribunal concluir, em agosto de 2025, que a empresa abusou do seu poder de mercado.',
    '## O que muda',
    'A partir de 1º de março de 2027, usuários australianos poderão baixar apps de lojas rivais e direto de sites. A Apple pode pedir prorrogação até 3 de maio. Os apps distribuídos por fora precisarão passar por uma verificação automática de segurança e privacidade.',
    '## Taxas',
    'A Apple não poderá cobrar comissão sobre compras feitas por outros meios de pagamento em apps distribuídos fora da App Store. Desenvolvedores poderão indicar outras formas de pagamento e cobrar preços menores por elas, segundo a Information Age.',
    '## As reações',
    'A Apple disse que discorda de muitas conclusões e vai recorrer e pedir a suspensão da ordem. A Epic Games anunciou a volta do Fortnite à App Store australiana, e o presidente da empresa, Tim Sweeney, chamou a decisão de grande vitória para consumidores e desenvolvedores.'
  ],
  box: { type: 'facts', title: 'A decisão', rows: [['Tribunal', 'Tribunal Federal da Austrália'], ['Lojas rivais', 'A partir de 1º/3/2027'], ['Prorrogação possível', 'Até 3/5/2027'], ['Apple', 'Vai recorrer']] },
  sources: [['MacRumors', U.mrAus], ['Information Age', U.iaAus]] },

{ id: 'spotify-3tri-2026', cat: 'startups', own: true, t: '2026-10-22T10', d: '22 out 2026', img: 'mercado', read: 2,
  title: 'Spotify chega a 306 milhões de assinantes e 788 milhões de usuários; receita sobe 16%',
  sum: 'A receita do terceiro trimestre foi de € 4,97 bilhões, e o lucro operacional, de € 672 milhões. Para o fim do ano, a empresa prevê 316 milhões de assinantes.',
  body: [
    'O Spotify divulgou em 22 de outubro os resultados do terceiro trimestre de 2026. A plataforma chegou a 788 milhões de usuários ativos por mês, alta de 11% em um ano, e a 306 milhões de assinantes pagos, alta de 9%, segundo o comunicado enviado à SEC, a comissão de valores mobiliários dos EUA.',
    '## Receita',
    'A receita foi de € 4,969 bilhões, 16% maior que um ano antes. As assinaturas renderam € 4,487 bilhões, e os anúncios, € 482 milhões. O lucro operacional ficou em € 672 milhões.',
    '## Projeção',
    'Para o quarto trimestre, a empresa prevê 818 milhões de usuários, 316 milhões de assinantes e receita de € 5,2 bilhões. Segundo o site Hypebot, as ações fecharam o dia em alta de 11,19%.',
    'Na mesma apresentação, a empresa confirmou a nova verificação por QR code no Plano Família.'
  ],
  box: { type: 'facts', title: 'Spotify no 3º trimestre', rows: [['Usuários por mês', '788 milhões (+11%)'], ['Assinantes', '306 milhões (+9%)'], ['Receita', '€ 4,969 bilhões (+16%)'], ['Lucro operacional', '€ 672 milhões']] },
  sources: [['Spotify (comunicado à SEC)', U.secSpotify], ['Hypebot', U.hbSpotify]] },

{ id: 'bumble-ithaca-fechamento-capital', cat: 'startups', own: false, t: '2026-10-13T14', d: '13 out 2026', img: 'mercado', src: 'TechCrunch', url: U.tcBumble,
  title: 'Bumble aceita ser comprado por US$ 1,3 bilhão e vai sair da bolsa',
  sum: 'A compradora, Ithaca Holdings, paga US$ 6,05 por ação, em dinheiro. Na estreia na bolsa, em 2021, o app de namoro valia cerca de US$ 14 bilhões.',
  body: [
    'No segundo trimestre, a receita caiu 15% em um ano, e o número de pagantes recuou 16%, para cerca de 3,2 milhões. A fundadora, Whitney Wolfe Herd, segue envolvida na empresa.'
  ] },

{ id: 'itau-compra-neospace', cat: 'startups', own: false, t: '2026-10-26T15', d: '26 out 2026', img: 'mercado', src: 'Mobile Time', url: U.mtItau,
  title: 'Itaú compra a startup brasileira de IA NeoSpace por R$ 2,9 bilhões',
  sum: 'A NeoSpace, fundada em 2023, desenvolve modelos de IA para crédito, gestão financeira e detecção de fraudes. O negócio depende do Cade e do Banco Central.',
  body: [
    'O fundador, Bruno Pierobon, segue como CEO, com gestão autônoma. Ele também fundou a Zup, comprada pelo Itaú em 2019.'
  ] },

{ id: 'salesforce-compra-braze', cat: 'startups', own: false, t: '2026-10-20T14', d: '20 out 2026', img: 'mercado', src: 'Salesforce', url: U.sfBraze,
  title: 'Salesforce fecha acordo para comprar a Braze, plataforma de marketing para apps, por US$ 5,66 bilhões',
  sum: 'A Braze tem cerca de 2.770 clientes, entre eles Canva, Instacart e Venmo. O pagamento será em dinheiro.',
  body: [
    'A conclusão está prevista para o ano fiscal de 2028 da Salesforce e depende do aval dos acionistas da Braze e de reguladores.'
  ] },

{ id: 'otter-ai-320-milhoes', cat: 'startups', own: false, t: '2026-10-20T13', d: '20 out 2026', img: 'mercado', src: 'TechCrunch', url: U.tcOtter,
  title: 'Otter.ai, app que transcreve reuniões, recebe US$ 320 milhões de fundo da General Catalyst',
  sum: 'O app soma 40 milhões de usuários. Até então, a empresa tinha captado US$ 50 milhões.',
  body: [
    'O dinheiro vem de um fundo que não reduz a participação dos sócios. A empresa já tinha passado de US$ 100 milhões em receita anual recorrente no ano passado.'
  ] },

{ id: 'openai-rodada-30-bi', cat: 'startups', own: false, t: '2026-10-22T16', d: '22 out 2026', img: 'mercado', src: 'Investing.com (CNBC)', url: U.invOpenai,
  title: 'OpenAI está perto de captar até US$ 30 bilhões com avaliação de US$ 1,25 trilhão',
  sum: 'A rodada é liderada por investidores dos Emirados Árabes Unidos e pela Coatue. O tamanho final ainda está em discussão.',
  body: [
    'Em março, a dona do ChatGPT captou US$ 122 bilhões, com avaliação de US$ 852 bilhões depois do investimento.'
  ] },

{ id: 'google-play-novas-taxas-coreia', cat: 'startups', own: false, t: '2026-10-15T10', d: '15 out 2026', img: 'plataforma', src: 'Digital Today', url: U.dtCoreia,
  title: 'Google Play leva nova tabela de taxas à Coreia do Sul, e governo coreano avalia multa',
  sum: 'A nova tabela prevê taxa de 10% sobre o primeiro US$ 1 milhão de receita por ano. A nova tabela vale no país a partir de 31 de dezembro.',
  body: [
    'A regra já vale nos EUA, na Europa, no Reino Unido, no Japão e na Austrália. Entidades coreanas calculam que o custo atual para os desenvolvedores fica entre 31% e 36%.'
  ] },

{ id: 'mexico-supera-brasil-venture-capital', cat: 'startups', own: false, t: '2026-10-19T10', d: '19 out 2026', img: 'mercado', src: 'Startups', url: U.stMexico,
  title: 'México supera o Brasil em investimento em startups em 2026, segundo a Crunchbase',
  sum: 'De janeiro a setembro, startups mexicanas receberam US$ 1,52 bilhão, e as brasileiras, US$ 1,08 bilhão. O Brasil, porém, teve mais rodadas.',
  body: [
    'Entre os destaques brasileiros está a Decade, com US$ 85 milhões, a maior rodada inicial já registrada na América Latina.'
  ] },

/* ===================== IDEIAS PARA O BRASIL ===================== */
{ id: 'snabbit-diarista-10-minutos', cat: 'ideias', own: true, t: '2026-10-20T10', d: '20 out 2026', img: 'mundo', read: 3,
  title: 'Na Índia, o app Snabbit leva uma diarista à casa do cliente em 10 a 15 minutos',
  sum: 'Criado em 2024, o serviço saltou de cerca de 500 para 35 mil atendimentos por dia em um ano fiscal. O Brasil tem um grande mercado de faxina, quase todo informal.',
  body: [
    'O Snabbit é um aplicativo indiano de serviços domésticos sob demanda: o cliente pede limpeza, louça ou outras tarefas, e uma profissional chega em 10 a 15 minutos. A empresa foi fundada em 2024 por Aayush Agarwal, ex-executivo da Zepto, segundo o site Inc42.',
    '## Os números',
    'O app terminou o último ano fiscal com 35 mil serviços por dia; no começo do período, eram cerca de 500, segundo o Inc42. A receita operacional subiu de ₹26,3 lakh para ₹12,2 crore, mas o prejuízo foi de ₹167,8 crore. A empresa já captou US$ 112 milhões.',
    'Uma trabalhadora ouvida pelo jornal malaio The Star disse ganhar cerca de 45 mil rúpias por mês, três vezes o que recebia no modelo tradicional. O setor doméstico informal da Índia reúne cerca de 30 milhões de pessoas, segundo o jornal.',
    '## Por que olhar para o Brasil',
    'Análise da redação: o Brasil também tem um mercado grande de diaristas, em boa parte informal, e um serviço sob demanda com treinamento e avaliação é um caminho pouco explorado. O modelo indiano mostra que há demanda por rapidez, mas também que o custo de operação é alto: o Snabbit gastou bem mais do que faturou.'
  ],
  box: { type: 'facts', title: 'Snabbit', rows: [['País', 'Índia'], ['Fundação', '2024'], ['Promessa', 'Profissional em 10 a 15 minutos'], ['Serviços por dia', '35 mil'], ['Investimento captado', 'US$ 112 milhões']] },
  sources: [['Inc42', U.incSnabbit], ['The Star', U.starSnabbit]] },

{ id: 'abby-care-familiar-cuidador-pago', cat: 'ideias', own: true, t: '2026-10-19T12', d: '19 out 2026', img: 'mundo', read: 3,
  title: 'Nos EUA, a Abby Care capta US$ 82 milhões para treinar familiares e pagá-los como cuidadores',
  sum: 'A empresa forma e certifica parentes para cuidar de familiares vulneráveis em casa, com supervisão de enfermeiras e pagamento por programas de saúde.',
  body: [
    'A Abby Care, fundada em 2022 por Havi Nguyen, transforma familiares em cuidadores remunerados. A plataforma seleciona, treina e certifica parentes que já cuidam de pessoas vulneráveis em casa. Enfermeiras supervisionam o plano de cuidado, e o software registra os atendimentos para os planos de saúde, segundo a revista Fortune.',
    '## O investimento',
    'A empresa captou US$ 82 milhões numa rodada liderada pela Transformation Capital, com participação da CVS Health Ventures e de fundos como Sequoia e Thrive Capital. O valor de mercado e a receita não foram divulgados.',
    'Segundo a CVS Health Ventures, citada pelo HIT Consultant, os programas tradicionais de enfermagem em casa só conseguem preencher 65% dos turnos autorizados.',
    '## Por que olhar para o Brasil',
    'Análise da redação: a população brasileira envelhece, e boa parte do cuidado de idosos e pessoas com deficiência já é feita por familiares, sem remuneração nem treinamento. Um modelo parecido dependeria de quem pagaria a conta, como planos de saúde, empresas ou programas públicos.'
  ],
  sources: [['Fortune', U.fortuneAbby], ['HIT Consultant', U.hitAbby]] },

{ id: 'india-farmer-id-agristack', cat: 'ideias', own: true, t: '2026-10-26T09', d: '26 out 2026', img: 'mundo', read: 2,
  title: 'Índia cria 110 milhões de identidades digitais de agricultores, cinco meses antes do prazo',
  sum: 'Cada agricultor recebe um número que dá acesso a programas do governo, crédito, seguro rural e auxílio em desastres, sem repetir a checagem de documentos.',
  body: [
    'A Índia criou mais de 110 milhões de identidades digitais de agricultores até 23 de outubro, segundo o site The News Mill. A meta era 31 de março de 2027. O cadastro faz parte da Missão de Agricultura Digital do governo indiano.',
    '## Como funciona',
    'O Farmer ID liga cada produtor a programas públicos, crédito, seguro rural e ajuda em desastres, sem que ele precise apresentar os mesmos documentos várias vezes. O sistema também forma um cadastro nacional de produtores verificados. Mais de 60 milhões de agricultores já receberam benefícios por serviços ligados a ele, segundo a Biometric Update.',
    '## Por que olhar para o Brasil',
    'Análise da redação: o Brasil tem milhões de pequenos produtores que dependem de crédito e seguro rural. Uma identidade única que integre esses serviços no celular é uma ideia para empresas de tecnologia agrícola e para o governo.'
  ],
  sources: [['The News Mill', U.tnmFarmer], ['Biometric Update', U.buFarmer]] },

{ id: 'matiks-jogos-de-matematica', cat: 'ideias', own: false, t: '2026-10-26T12', d: '26 out 2026', img: 'mundo', src: 'TechCrunch', url: U.tcMatiks,
  title: 'App indiano de jogos de matemática Matiks capta US$ 10 milhões e chega a 2,2 milhões de usuários',
  sum: 'O usuário treina contra robôs e depois disputa partidas contra outras pessoas. Os usuários diários passaram de 22 mil para mais de 300 mil neste ano.',
  body: [
    'A rodada foi liderada pela General Catalyst. O app começou a testar assinaturas e já vende itens dentro do jogo. A maior parte dos jogadores está na Índia, e os EUA são a prioridade de expansão.'
  ] },

{ id: 'too-good-to-go-alem-da-comida', cat: 'ideias', own: false, t: '2026-10-15T10', d: '15 out 2026', img: 'mundo', src: 'RetailDetail', url: U.rdTgtg,
  title: 'Too Good To Go, app contra o desperdício de comida, passa a vender sobras de higiene, pet e flores',
  sum: 'Depois de dez anos só com alimentos, o app europeu abre cinco categorias novas. Tem 150 milhões de usuários cadastrados.',
  body: [
    'As categorias novas chegam a países como França, Itália, Alemanha e Polônia. Segundo a empresa, o excedente nesses produtos vem de ciclos de venda e de mudanças na demanda, e não só do prazo de validade.'
  ] },

{ id: 'zenzap-whatsapp-do-trabalho', cat: 'ideias', own: false, t: '2026-10-14T13', d: '14 out 2026', img: 'celular', src: 'TechCrunch', url: U.tcZenzap,
  title: 'Zenzap capta US$ 44 milhões para app de chat com IA que quer substituir o WhatsApp no trabalho',
  sum: 'O app é voltado a equipes de lojas e restaurantes, com agentes de IA dentro dos grupos. Entre os clientes estão FedEx, Starbucks e Taco Bell.',
  body: [
    'A empresa foi fundada em 2022 e tem 50 funcionários. Os investidores incluem Bessemer e Lightspeed.'
  ] },

{ id: 'ant-aq-saude-ia-china', cat: 'ideias', own: false, t: '2026-09-16T10', d: '16 set 2026', img: 'mundo', src: 'KrASIA', url: U.kaAq,
  title: 'App de saúde com IA da dona do Alipay chega a 150 milhões de usuários na China',
  sum: 'O AQ, da Ant Group, recebe quase 20 milhões de perguntas de saúde por dia. Cerca de um quarto dos usuários são idosos.',
  body: [
    'O app tem chat com IA, acesso a serviços médicos e leitura de calorias por foto do prato. Cerca de 55% dos usuários vivem em cidades menores, fora dos grandes centros.'
  ] },

{ id: 'sathee-tutor-ia-gratuito-vestibular', cat: 'ideias', own: false, t: '2026-10-27T05', d: '27 out 2026', img: 'ciencia', src: 'Elets digitalLEARNING', url: U.elSathee,
  title: 'Plataforma pública indiana com tutor de IA para vestibulares e concursos passa de 2 milhões de alunos',
  sum: 'O SATHEE, criado pelo instituto IIT Kanpur com o Ministério da Educação, é gratuito e ajusta os exercícios conforme os erros do aluno.',
  body: [
    'Começou com provas de engenharia e medicina e hoje cobre também concursos de bancos, ferrovias, agricultura e direito. Tem aulas em vídeo e plantões de dúvidas ao vivo.'
  ] },

{ id: 'tolan-companheiro-ia-rotina', cat: 'ideias', own: false, t: '2026-10-19T15', d: '19 out 2026', img: 'celular', src: 'TechCrunch', url: U.tcTolan,
  title: 'Tolan, app com personagem de IA que ajuda a organizar o dia, capta US$ 30 milhões',
  sum: 'O app tem mais de 250 mil usuários ativos. Cerca de 70% são mulheres, e 40% são pais ou mães.',
  body: [
    'O personagem dá apoio emocional e ajuda o usuário a cumprir as tarefas do dia. A receita vem de assinaturas e já está na casa das dezenas de milhões de dólares por ano.'
  ] },

{ id: 'cent-checkup-preventivo-ia', cat: 'ideias', own: false, t: '2026-10-27T07', d: '27 out 2026', img: 'ciencia', src: 'Inc42', url: U.incCent,
  title: 'Indiana Cent capta US$ 15 milhões para check-up completo em 2 horas, com laudo organizado por IA',
  sum: 'O pacote reúne ressonância de corpo inteiro, tomografia, ECG e outros exames por ₹27.500 e rastreia mais de 300 condições.',
  body: [
    'A empresa atua em Bengaluru, Mumbai e na região de Délhi e já fez 10 mil exames de corpo inteiro. A IA reúne os resultados em riscos por órgão.'
  ] },

/* ===================== NO BRASIL ===================== */
{ id: 'bc-regras-credito-no-pix', cat: 'brasil', own: true, t: '2026-10-23T18', d: '23 out 2026', img: 'celular', read: 3,
  title: 'Banco Central cria regras para o crédito oferecido na hora do Pix e para um painel de dívidas nos apps',
  sum: 'A oferta de crédito durante o Pix vai exigir autorização prévia do cliente e só vale a partir de julho de 2027. Os bancos também terão de deixar o cliente bloquear ofertas de empréstimo.',
  body: [
    'O Banco Central aprovou em 23 de outubro três resoluções que mudam a forma como bancos e fintechs oferecem crédito nos aplicativos, segundo a Agência Brasil.',
    '## Crédito no Pix',
    'A oferta de crédito durante uma transação Pix vai exigir consentimento prévio e específico do cliente. Entre a autorização e a primeira oferta, precisa haver no mínimo 24 horas. Quem recebe o Pix continua recebendo na hora e o valor integral. A regra vale a partir de 1º de julho de 2027.',
    '## Painel de dívidas',
    'Os bancos terão de oferecer um painel com as dívidas do cliente, simulação do custo antes de cada contratação e alertas de risco. No começo, o painel mostra só as dívidas na própria instituição. Também vale a partir de julho de 2027.',
    '## Bloqueio de ofertas',
    'As instituições terão de dar ao cliente um jeito de bloquear publicidade e ofertas de crédito. Clientes considerados vulneráveis precisarão autorizar antes qualquer oferta. Essa regra vale a partir de 31 de março de 2027.',
    'Segundo coluna do NeoFeed, as resoluções não fixam teto de juros nem número máximo de parcelas.'
  ],
  box: { type: 'table', title: 'As três regras', head: ['Regra', 'O que exige', 'Vale a partir de'], rows: [['Crédito no Pix', 'Autorização prévia e 24 horas de espera', '1º/7/2027'], ['Painel de dívidas', 'Simulação de custo e alertas', '1º/7/2027'], ['Bloqueio de ofertas', 'Opção de recusar publicidade de crédito', '31/3/2027']], note: 'Fonte: Agência Brasil.' },
  sources: [['Agência Brasil', U.abPixCredito], ['NeoFeed', U.nfPixCredito]] },

{ id: 'ifood-compra-caju', cat: 'brasil', own: true, t: '2026-10-20T15', d: '20 out 2026', img: 'mercado', read: 2,
  title: 'iFood Benefícios compra a Caju e passa a ter cerca de 3 milhões de usuários',
  sum: 'O valor não foi divulgado. O Estadão/Broadcast fala em cerca de R$ 1 bilhão. O negócio depende do Cade e do Banco Central.',
  body: [
    'O iFood Benefícios assinou acordo para comprar a Caju, startup de benefícios corporativos, segundo a Bloomberg Línea. Antes do negócio, o iFood Benefícios tinha cerca de 1,7 milhão de usuários e 65 mil empresas clientes. A Caju tinha 1,3 milhão de usuários e mais de 70 mil empresas.',
    '## O valor',
    'As empresas não divulgaram o preço. Segundo o Estadão/Broadcast, citado pelo Diário do Grande ABC, o negócio teria envolvido cerca de R$ 1 bilhão e seria a maior aquisição da história do iFood.',
    '## O mercado',
    'O Programa de Alimentação do Trabalhador atende mais de 22 milhões de trabalhadores em cerca de 470 mil empresas e movimenta cerca de R$ 150 bilhões por ano, segundo O Tempo. Até a aprovação do Cade e do Banco Central, as duas empresas seguem operando separadas.'
  ],
  sources: [['Bloomberg Línea', U.blCaju], ['O Tempo', U.otCaju], ['Diário do Grande ABC', U.dgCaju]] },

{ id: 'vivo-satelite-starlink', cat: 'brasil', own: true, t: '2026-10-26T14', d: '26 out 2026', img: 'celular', read: 2,
  title: 'Vivo lança conexão do celular direto com satélites da Starlink para quem está sem sinal',
  sum: 'O serviço funciona com WhatsApp, SMS e mapas em áreas sem cobertura. Fica de graça por 12 meses no pós-pago e no controle, e chega a cerca de 50 milhões de clientes.',
  body: [
    'A Vivo lançou em 26 de outubro o Vivo Satélite, em parceria com a Starlink, da SpaceX. O celular se conecta sozinho aos satélites quando está fora da rede da operadora, em qualquer lugar do país, segundo o Teletime.',
    '## O que funciona',
    'Dá para usar o WhatsApp para mensagens e voz, SMS, iMessage, Google Mensagens, Google Maps, Apple Maps e o app da Vivo. Videochamadas e chamadas de emergência não funcionam. O uso não desconta da franquia de dados.',
    '## Preço',
    'Não há cobrança durante a promoção: 12 meses para os planos pós-pago, controle e Lite, e 3 meses para clientes empresariais. No pré-pago, é preciso fazer recarga de R$ 30, segundo o Mobile Time. O serviço só funciona em aparelhos compatíveis e com o roaming nacional de dados ligado.'
  ],
  box: { type: 'facts', title: 'Vivo Satélite', rows: [['Parceira', 'Starlink (SpaceX)'], ['Clientes com acesso', 'Cerca de 50 milhões'], ['Grátis por', '12 meses (pós, controle e Lite)'], ['Não funciona', 'Videochamada e chamada de emergência']] },
  sources: [['Teletime', U.ttVivo], ['Mobile Time', U.mtVivo]] },

{ id: 'bets-devolucao-saldos-caixa', cat: 'brasil', own: false, t: '2026-10-14T10', d: '14 out 2026', img: 'mercado', src: 'Agência Brasil', url: U.abBets,
  title: 'Termina prazo para bancos devolverem R$ 1,3 bilhão de apps de apostas; saldo restante passa à Caixa',
  sum: 'O dinheiro ficou nas contas de cerca de 26,5 milhões de apostadores depois que sites e apps de bets saíram do ar.',
  body: [
    'Depois do prazo dos bancos, a Caixa faz a intermediação dos pagamentos pendentes. A Agência Brasil alerta que ninguém precisa pagar nada antecipado para receber o saldo.'
  ] },

{ id: 'nubank-nu-smart-invest', cat: 'brasil', own: false, t: '2026-10-15T12', d: '15 out 2026', img: 'celular', src: 'Bloomberg Línea', url: U.blNubank,
  title: 'Nubank lança ferramenta de IA que dá nota de até 1.000 pontos à carteira de investimentos',
  sum: 'A nota considera diversificação, retorno, liquidez, proteção e eficiência. É gratuita e exige pelo menos R$ 1 investido.',
  body: [
    'A ferramenta sugere ajustes, mas não compra nada automaticamente. A liberação no app é gradual.'
  ] },

{ id: '99-lanca-99premier', cat: 'brasil', own: false, t: '2026-10-19T10', d: '19 out 2026', img: 'celular', src: 'Mobile Time', url: U.mt99Premier,
  title: '99 lança categoria de luxo 99Premier em Recife para disputar com o Uber Black',
  sum: 'Motoristas precisam de nota mínima 4,9, e passageiros, de 4,7. Os carros são de 2022 em diante, como Corolla, Creta e T-Cross.',
  body: [
    'Segundo a empresa, o ganho do motorista pode ser até 60% maior que na categoria Pop. Os carros oferecem água, lenços e carregador.'
  ] },

{ id: '99-unico-biometria', cat: 'brasil', own: false, t: '2026-10-26T12', d: '26 out 2026', img: 'celular', src: 'Mobile Time', url: U.mt99Unico,
  title: '99 passa a usar biometria facial para verificar motoristas e entregadores',
  sum: 'A checagem, feita com a Unico, acontece na entrada na plataforma e em revalidações frequentes.',
  body: [
    'A 99 prevê investir R$ 145 milhões em segurança em 2026. O app tem mais de 50 recursos de proteção, como gravação de áudio e botão de emergência.'
  ] },

{ id: 'mp-1396-chamadas-golpes', cat: 'brasil', own: false, t: '2026-10-13T10', d: '13 out 2026', img: 'celular', src: 'Agência Brasil', url: U.abChamadas,
  title: 'Medida provisória obriga operadoras a autenticar chamadas para combater golpes',
  sum: 'Ligações sem autenticação podem ser bloqueadas, e chamadas de empresas vão mostrar o nome da companhia.',
  body: [
    'Quem fizer grande volume de chamadas suspeitas pode ter as ligações bloqueadas por 15 dias. A Anatel tem 60 dias para regulamentar.'
  ] },

{ id: 'golpe-qr-code-pix-febraban', cat: 'brasil', own: false, t: '2026-10-21T10', d: '21 out 2026', img: 'celular', src: 'O Tempo (Folhapress)', url: U.otQrCode,
  title: 'Febraban alerta para golpe do QR code falso em pagamentos por Pix e boleto',
  sum: 'Criminosos colam adesivos com códigos falsos em restaurantes, feiras e estacionamentos. A orientação é conferir o nome do recebedor no app antes de pagar.',
  body: [
    'No Pix, a vítima pode pedir a devolução pelo Mecanismo Especial de Devolução em até 80 dias, mas a recuperação do dinheiro não é garantida.'
  ] },

{ id: 'ifood-black-friday-2026', cat: 'brasil', own: false, t: '2026-10-20T11', d: '20 out 2026', img: 'celular', src: 'Canaltech', url: U.ctIfoodBf,
  title: 'iFood abre campanha de Black Friday com descontos de até 80% até 30 de novembro',
  sum: 'A campanha inclui mercado, farmácia, pet e bebidas. A Black Friday propriamente dita é em 27 de novembro.',
  body: [
    'O iFood diz ter 65 milhões de clientes ativos e 180 milhões de pedidos por mês.'
  ] }
];
