/* ============================================================
   NOVERA: conteúdo do site. Edite este arquivo e rode `node build.js`.
   Regras completas em ATUALIZACAO.md.
   ============================================================ */

/* Topo do site: data da edição e destaques da faixa de cima */
const META = {
  /* Endereço público do site, sem barra no final. Usado nos links das redes sociais. */
  siteUrl: 'https://novera-sepia.vercel.app',
  dataExtenso: 'Quarta-feira, 28 de outubro de 2026',
  edicao: '28 out 2026',
  /* Faixa do topo: 1 a 3 itens [rótulo, texto curto]. Use só fatos que estão em notícias do site. */
  destaques: [
    ['App do dia', 'Bleach Mirrors High chega grátis ao Android e ao iPhone'],
    ['Prazo', 'Corretoras de cripto têm até sexta (30) para pedir licença ao BC'],
    ['Em alta', 'ChatGPT passa a se conectar ao e-mail e à agenda do iCloud']
  ]
};

/* Home: destaque principal, dois laterais e três da faixa de baixo (IDs de notícias "own: true") */
const FEATURED = {
  lead: 'cripto-prazo-licenca-banco-central',
  side: ['chatgpt-icloud-mail-calendario', 'discord-servidores-publicos-buscadores'],
  also: ['robinhood-3tri-2026', 'opera-webai-ia-local', 'maasi-baba-por-assinatura']
};

/* Home: "Escolhas da redação" (5 IDs) */
const PICKS = ['facebook-cobra-links-paginas-meta-one', 'bleach-mirrors-high', 'even-saude-hospital-proprio', 'anthropic-pede-ipo-nasdaq-receita-16-bilhoes', 'siri-ai-portugues-ios-27-2'];

const U = {
  /* Atualização de 28 out 2026 */
  /* Lançamentos */
  opOpera: 'https://press.opera.com/2026/10/27/opera-doubles-down-on-local-ai-shipping-models-directly-in-its-browsers/',
  m9Opera: 'https://9to5mac.com/2026/10/27/opera-one-now-lets-mac-users-run-apples-foundation-model-directly-in-the-browser/',
  odOpera: 'https://olhardigital.com.br/2026/10/27/internet-e-redes-sociais/opera-lanca-recurso-que-roda-inteligencia-artificial-no-seu-pc',
  bnBleach: 'https://bleach-mh.bn-ent.net/en/news/69866',
  gsBleach: 'https://geekship.com.br/games/bleach-mirrors-high-lancamento-android-ios',
  gbBleach: 'https://gameblast.com.br/2026/10/bleach-mirrors-high-sera-lancado-android-ios-28-outubro.html',
  acBleach: 'https://animecorner.me/bleach-mirrors-high-surpasses-1-million-pre-registrations-worldwide-new-launch-rewards-unlocked/',
  ctPhantom: 'https://canaltech.com.br/games/que-horas-phantom-blade-zero-sera-lancado-no-brasil/',
  ghSaints: 'https://gaminghq.eu/2026/10/21/saints-row-the-third-remastered-mobile/',
  tnw1pass: 'https://thenextweb.com/news/1password-for-agents-ai-agent-logins',
  /* Atualizações */
  tcDiscord: 'https://techcrunch.com/2026/10/27/discord-is-making-its-public-communities-more-searchable-and-people-have-concerns/',
  egFbLinks: 'https://www.engadget.com/2295422/meta-is-charging-government-and-nonprofit-pages-to-post-links-on-facebook/',
  ctYtFeeds: 'https://canaltech.com.br/apps/grande-mudanca-no-app-do-youtube-libera-feeds-personalizados-por-comando/',
  wbiOrgs: 'https://wabetainfo.com/whatsapp-is-testing-organizations-to-manage-large-communities/',
  tbUberAcess: 'https://tecnoblog.net/noticias/uber-lanca-recurso-para-facilitar-embarque-de-idosos-e-pessoas-com-deficiencia/',
  /* IA */
  tcIos272: 'https://techcrunch.com/2026/10/27/apple-rolls-out-ios-27-2-with-new-siri-ai-languages-and-security-fixes/',
  m9Icloud: 'https://9to5mac.com/2026/10/27/icloud-mail-and-calendar-plugins-now-work-with-chatgpt/',
  igIcloud: 'https://www.igeeksblog.com/chatgpt-icloud-mail-calendar-plugins/',
  apCreator: 'https://www.apple.com/newsroom/2026/10/apple-creator-studio-adds-powerful-new-ai-features-and-even-more-creative-tools/',
  tcGenie: 'https://techcrunch.com/2026/10/27/googles-genie-4-world-model-adds-audio-more-realistic-worlds-and-real-time-steering/',
  cpYoba: 'https://research.checkpoint.com/2026/tricks-from-the-past-deployed-via-signed-chatgpt-and-claude-binaries/',
  /* Startups */
  tcAntVcs: 'https://techcrunch.com/2026/10/27/vcs-will-make-billions-on-anthropics-ipo-but-amazon-is-set-to-make-much-much-more/',
  gnRobinhood: 'https://www.globenewswire.com/news-release/2026/10/27/3389611/0/en/robinhood-reports-third-quarter-2026-results.html',
  invRobinhood: 'https://uk.investing.com/news/stock-market-news/robinhood-q3-2026-slides-record-revenue-of-14b-stock-drops-7-93CH-4935824',
  blTractian: 'https://www.bloomberglinea.com.br/startups/tractian-capta-us-130-milhoes-e-se-torna-o-mais-novo-unicornio-de-ia-brasileiro/',
  secPaypal: 'https://www.sec.gov/Archives/edgar/data/0001633917/000163391726000086/pypl3q-26earningsrelease.htm',
  tcGuidewire: 'https://techcrunch.com/2026/10/27/guidewire-buys-hyperexponential-for-1-7b-in-cash/',
  trMeta: 'https://www.tipranks.com/news/meta-launches-95-billion-stock-offering-plan-to-fund-ai-expansion-nvidia-amd-and-broadcom-weigh-5-billion-purchase',
  /* Ideias para o Brasil */
  ysEven: 'https://yourstory.com/2026/10/even-healthcare-raises-50m-in-series-b-round-led-by-khosla-ventures',
  incEven: 'https://inc42.com/buzz/even-healthcare-raises-50-mn-to-expand-hospital-network-across-bengaluru/',
  stMaasi: 'https://startuptalky.com/news/maasi-raises-6-cr-pre-seed-nanny-platform/',
  eiMaasi: 'https://india.entrepreneur.com/business-news/maasi-raises-rs-6-crore-in-pre-seed-round-led-by-better-capital-antler-india',
  cdLagos: 'https://thecondia.com/vatar-lagos-life-raises-500000-pre-seed',
  fortuneAlta: 'https://fortune.com/2026/10/22/alta-ai-fashion-app-series-a-20-million-forerunner-rent-the-runway/',
  incCircle: 'https://inc42.com/buzz/circle-raises-₹25-cr-to-expand-its-pre-owned-goods-marketplace-beyond-bengaluru/',
  /* No Brasil */
  ffCripto: 'https://financefeeds.com/binance-files-for-brazil-crypto-authorization-ahead-of-oct-30-deadline/',
  bnCripto26: 'https://bitnoticias.com.br/regulacao/binance-pede-licenca-banco-central-psav-brasil/',
  bnCripto10: 'https://bitnoticias.com.br/noticias/licenca-cripto-do-banco-central-qual-exchange-pediu-quem-vai-pedir-e-quem-esta-saindo-do-brasil',
  mtKeeta: 'https://www.mobiletime.com.br/noticias/27/10/2026/keeta-10-mi-downloads-br/',
  abSuperend: 'https://agenciabrasil.ebc.com.br/economia/noticia/2026-10/numero-de-superendividados-no-brasil-cresceu-75-em-cinco-anos-diz-bc',
  vrUberEl: 'https://www.vrum.com.br/aceleradas/2026/10/7525609-uber-electric-permite-viagens-em-carros-100-eletricos-em-mais-11-cidades.html',
  abResidual: 'https://agenciabrasil.ebc.com.br/economia/noticia/2026-10/receita-abre-consulta-lote-residual-do-imposto-de-renda',
  /* Atualização de 27 out 2026: estreia do formato de aplicativos */
  /* Lançamentos */
  egNms: 'https://www.engadget.com/2283704/no-mans-sky-is-coming-to-iphone-and-ipad-as-the-app-store-celebrates-indie-games-week/',
  ahNms: 'https://antihype.com.br/c/games/no-mans-sky-iphone-ipad-lancamento-preco/',
  jwMh: 'https://www.jwave.com.br/2026/10/monster-hunter-outlanders-chega-aos-celulares-em-29-de-outubro/',
  bnOnePiece: 'https://en.bandainamcoent.eu/one-piece/news/set-sail-now-delicious-adventure-one-piece-grand-gourmet',
  mtStraw: 'https://www.mobiletime.com.br/noticias/26/10/2026/strawberry-agentes-ia/',
  m9Flip: 'https://9to5mac.com/2026/10/24/indie-app-spotlight-flipcorder-lets-you-shoot-retro-footage-on-your-iphone-duo/',
  /* Atualizações */
  smtFeatures: 'https://www.socialmediatoday.com/news/instagram-rolls-out-limited-features-test-in-the-us/872825/',
  tnwFeatures: 'https://thenextweb.com/news/instagram-tests-90-minute-horizontal-videos-called-features',
  wbiMencoes: 'https://wabetainfo.com/whatsapp-is-rolling-out-a-chat-list-to-track-mentions-and-replies/',
  g9Carplay: 'https://9to5google.com/2026/10/21/google-maps-carplay-gemini/',
  dcGoogleAds: 'https://decrypt.co/381775/google-quietly-updates-privacy-policy-gmail-photos-ads?amp=1',
  abcMetaAcc: 'https://www.abc.net.au/news/2026-10-27/what-is-meta-account-facebook-instagram-explained/107313814',
  /* IA */
  ctSiri: 'https://canaltech.com.br/apps/atualize-ja-apple-libera-ios-272-com-siri-ai-em-portugues/',
  ihSiri: 'https://ihelpbr.com/ios-27-2-e-lancado-com-siri-ai-em-portugues/',
  bcTerra: 'https://www.bleepingcomputer.com/news/artificial-intelligence/openai-launches-gpt-61-terra-with-3x-faster-ai-agents-50-percent-lower-pricing/',
  itdTerra: 'https://www.ithinkdiff.com/gpt-6-1-terra-launch-half-price-computer-use/',
  tcLock: 'https://techcrunch.com/2026/10/20/chatgpt-now-lets-you-lock-your-chats/',
  tbTreino: 'https://tecnoblog.net/noticias/openai-desiste-de-treinar-modelos-de-ia-com-acesso-a-internet/',
  odOpenai27: 'https://olhardigital.com.br/2026/10/26/ciencia-e-espaco/openai-anuncia-tres-descobertas-cientificas-especialistas-verificarao-resultados',
  egElvis: 'https://www.engadget.com/2296535/elvis-presley-estate-suing-ai-company-for-copyright-infringement/',
  /* Startups */
  imAnt27: 'https://www.infomoney.com.br/mercados/anthropic-alerta-para-riscos-existenciais-em-aguardado-pedido-de-ipo/',
  fortuneAnt27: 'https://fortune.com/2026/10/26/anthropics-s-1/',
  mrAus: 'https://macrumors.com/2026/10/22/rival-app-stores-in-australia-ordered',
  iaAus: 'https://ia.acs.org.au/article/2026/apple-ordered-to-allow-third-party-app-stores-in-australia.html',
  sfBraze: 'https://salesforce.com/news/press-releases/2026/10/20/salesforce-signs-definitive-agreement-to-acquire-braze',
  invOpenai: 'https://www.investing.com/news/stock-market-news/openai-nears-30-billion-funding-round-at-125-trillion-valuation-4967451',
  mtItau: 'https://www.mobiletime.com.br/noticias/26/10/2026/itau-anuncia-acordo-para/',
  /* Ideias para o Brasil */
  buFarmer: 'https://www.biometricupdate.com/202610/indias-farmer-id-scheme-reaches-110m-ahead-of-schedule',
  tnmFarmer: 'https://thenewsmill.com/2026/10/india-creates-11-crore-farmer-ids-five-months-ahead-of-deadline/',
  tcMatiks: 'https://techcrunch.com/2026/10/26/matiks-raises-10m-to-expand-its-math-and-puzzle-gaming-platform/',
  elSathee: 'https://digitallearning.eletsonline.com/2026/10/free-ai-tutors-iits-sathee-ndli-fermi-jee-neet-cuet-gate-preparation',
  tcTolan: 'https://techcrunch.com/2026/10/19/tolan-snags-30m-for-its-ai-companion-that-helps-users-navigate-life/',
  incCent: 'https://inc42.com/buzz/cent-raises-15-mn-to-scale-ai-led-preventive-healthcare-platform',
  /* No Brasil */
  abPixCredito: 'https://agenciabrasil.ebc.com.br/economia/noticia/2026-10/bc-reforca-regras-de-protecao-ao-consumidor-nas-ofertas-de-credito',
  nfPixCredito: 'https://neofeed.com.br/insiders/o-credito-no-pix-ganhou-regra-agora-pode-ganhar-escala',
  ttVivo: 'https://teletime.com.br/26/10/2026/vivo-parceria-starlink-vivo-satelite/',
  mtVivo: 'https://www.mobiletime.com.br/noticias/26/10/2026/vivo-satelite-starlink/',
  mt99Unico: 'https://www.mobiletime.com.br/noticias/26/10/2026/99-unico-identidade/',
  otQrCode: 'https://www.otempo.com.br/economia/2026/10/21/golpe-do-qr-code-pode-desviar-pagamentos-por-boleto-e-pix',
  ctIfoodBf: 'https://canaltech.com.br/apps/ifood-inicia-campanha-de-black-friday-com-ofertas-ate-30-de-novembro/'
};

const NEWS = [
/* ===================== LANÇAMENTOS ===================== */
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

{ id: 'opera-webai-ia-local', cat: 'lancamentos', own: true, t: '2026-10-27T10', d: '27 out 2026', img: 'tecnologia', read: 2,
  title: 'Opera testa o WebAI, que roda inteligência artificial no próprio computador, sem nuvem nem assinatura',
  sum: 'O recurso chegou em prévia ao navegador Opera One para Windows e Mac. Nada é baixado até o usuário ligar, e é ele quem escolhe quais sites podem usar a IA local.',
  body: [
    'A Opera lançou em 27 de outubro uma prévia do WebAI, recurso que roda modelos de inteligência artificial no computador do próprio usuário. Sites e extensões podem usar essa IA instalada no navegador, segundo o comunicado da empresa.',
    '## Onde funciona',
    'A prévia está no Opera One, em computadores com Windows de 64 bits e processador Intel ou AMD e em Macs com chip da Apple. Os navegadores Opera GX e Opera Neon recebem o recurso depois. Como é uma fase de testes, o desempenho depende do computador, segundo o Olhar Digital.',
    '## Quais modelos',
    'O WebAI usa modelos abertos, como o Gemma, do Google. No Mac, também pode usar o modelo da própria Apple que roda no aparelho, segundo o 9to5Mac.',
    '## Como ligar',
    'O recurso vem desligado: nada é baixado até o usuário ativá-lo, e ele escolhe quais sites têm acesso. Não é preciso assinatura, e os desenvolvedores não pagam por pedido feito à IA. A Opera também liberou extensões de exemplo, como uma que organiza abas e outra que aponta títulos caça-clique.'
  ],
  box: { type: 'facts', title: 'Opera WebAI', rows: [['Navegador', 'Opera One (prévia)'], ['Sistemas', 'Windows 64 bits e Mac com chip Apple'], ['Modelos', 'Gemma e, no Mac, o modelo da Apple'], ['Assinatura', 'Não é preciso'], ['Padrão', 'Desligado até o usuário ativar']] },
  sources: [['Opera', U.opOpera], ['9to5Mac', U.m9Opera], ['Olhar Digital', U.odOpera]] },

{ id: 'bleach-mirrors-high', cat: 'lancamentos', own: true, t: '2026-10-28T06', d: '28 out 2026', img: 'celular', read: 2,
  title: 'Bleach Mirrors High, jogo gratuito da Bandai Namco, chega ao Android e ao iPhone nesta quarta',
  sum: 'O jogo baseado no anime passou de 1 milhão de pré-registros no mundo. É gratuito, com compras dentro do app, inclusive de itens aleatórios.',
  body: [
    'O jogo Bleach Mirrors High, da Bandai Namco, chega ao Android e ao iOS nesta quarta-feira (28), depois de uma manutenção dos servidores, segundo o site oficial. O download antecipado já está aberto na App Store e no Google Play. A empresa não divulgou o horário de liberação.',
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

{ id: 'phantom-blade-zero-pc-ps5', cat: 'lancamentos', own: false, t: '2026-10-27T17', d: '27 out 2026', img: 'tecnologia', src: 'Canaltech', url: U.ctPhantom,
  title: 'Phantom Blade Zero, do estúdio chinês S-Game, é liberado no Brasil às 23h desta quarta no PC e no PS5',
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

{ id: '1password-para-agentes-ia', cat: 'lancamentos', own: false, t: '2026-10-22T12', d: '22 out 2026', img: 'tecnologia', src: 'The Next Web', url: U.tnw1pass,
  title: '1Password lança recurso para agentes de IA entrarem em contas sem ver a senha do usuário',
  sum: 'O agente pede acesso, o usuário aprova ou recusa no próprio aparelho, e o 1Password preenche a senha sem revelá-la.',
  body: [
    'Entre os parceiros do lançamento estão o Muse, da Meta, o Claude Duet, da Anthropic, o Grok Bot e a Perplexity. Segundo o The Next Web, o suporte ao Claude Duet ainda vai chegar. A fonte não informa preço.'
  ] },

/* ===================== ATUALIZAÇÕES ===================== */
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

{ id: 'facebook-cobra-links-paginas-meta-one', cat: 'atualizacoes', own: true, t: '2026-10-23T16', d: '23 out 2026', img: 'plataforma', read: 2,
  title: 'Meta testa cobrar de páginas do Facebook para publicar links, e ONGs e prefeituras dos EUA são atingidas',
  sum: 'No teste, as páginas têm direito a 2 links por mês antes de receber a oferta da assinatura Meta One, com planos de US$ 14,99 a US$ 499,99 por mês.',
  body: [
    'A Meta está testando limitar a quantidade de links que páginas podem publicar no Facebook e ligar o excesso à assinatura Meta One, segundo o Engadget. Nas páginas que entraram no teste, o pedido de assinatura aparece depois de 2 links no mês.',
    '## Os planos',
    'O Meta One custa US$ 14,99 por mês no plano sem links extras, US$ 49,99 com 8 links, US$ 149,99 com 20 links e US$ 499,99 com links ilimitados.',
    '## Quem foi atingido',
    'A Meta diz que páginas de ONGs e de governos não deveriam entrar no teste, mas algumas entraram. O Engadget cita a prefeitura de Greenville, no Texas, e a ONG de animais East Side Pawject, de Indianápolis, que recebeu oferta de um plano de US$ 150 por mês. Em um dos casos citados, a restrição foi revertida. Para ser reconhecida como ONG, a página precisa ter "nonprofit" na categoria.',
    'A Meta testa a cobrança por links há quase um ano, começando pelo Meta Verified. Os casos relatados são dos EUA, e a fonte não fala do Brasil.'
  ],
  box: { type: 'facts', title: 'Planos do Meta One (teste)', rows: [['US$ 14,99 por mês', 'Sem links extras'], ['US$ 49,99 por mês', '8 links'], ['US$ 149,99 por mês', '20 links'], ['US$ 499,99 por mês', 'Links ilimitados']] },
  sources: [['Engadget', U.egFbLinks]] },

{ id: 'whatsapp-filtro-mencoes-respostas', cat: 'atualizacoes', own: false, t: '2026-10-24T10', d: '24 out 2026', img: 'celular', src: 'WABetaInfo', url: U.wbiMencoes,
  title: 'WhatsApp testa filtro que reúne só as conversas em que você foi mencionado ou respondido',
  sum: 'O filtro aparece no topo da aba Conversas, ao lado de Não lidas, Favoritas e Grupos, na versão beta para Android.',
  body: [
    'Um contador mostra quantas conversas estão pendentes. O filtro é opcional e pode ser desligado. Ainda não há data de lançamento para todos.'
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

{ id: 'meta-account-substitui-central-de-contas', cat: 'atualizacoes', own: false, t: '2026-10-27T06', d: '27 out 2026', img: 'plataforma', src: 'ABC News', url: U.abcMetaAcc,
  title: 'Meta começa a trocar a Central de Contas pelo "Meta Account", sem opção de recusa',
  sum: 'A conta reúne Facebook, Messenger, Instagram, Threads e Meta AI. O WhatsApp só entra se o usuário quiser ou se já estava ligado.',
  body: [
    'O usuário escolhe quais perfis ficam em cada conta, e as configurações de cada app continuam separadas. Especialistas ouvidos pela emissora australiana apontam riscos de privacidade.'
  ] },

{ id: 'youtube-feeds-personalizados-pedido', cat: 'atualizacoes', own: false, t: '2026-10-23T19', d: '23 out 2026', img: 'plataforma', src: 'Canaltech', url: U.ctYtFeeds,
  title: 'YouTube deixa criar feeds descrevendo o que a pessoa quer assistir, por ora só nos EUA',
  sum: 'Na nova tela inicial do app, o usuário toca no "+" e escreve um pedido, como podcasts para um trajeto de 30 minutos.',
  body: [
    'Os feeds podem ser fixados e são sincronizados entre aparelhos. O recurso exige mais de 13 anos, histórico ativado e app em inglês. Não há previsão para o Brasil, segundo o Canaltech.'
  ] },

{ id: 'whatsapp-organizacoes-comunidades', cat: 'atualizacoes', own: false, t: '2026-10-26T12', d: '26 out 2026', img: 'celular', src: 'WABetaInfo', url: U.wbiOrgs,
  title: 'WhatsApp desenvolve "Organizações", painel para administrar comunidades grandes',
  sum: 'O recurso foi encontrado na versão beta 2.26.43.1 para Android e mostra aos administradores a lista de membros e os subgrupos de cada um.',
  body: [
    'Ainda está em fase inicial e não pode ser testado. Membros comuns não veem a tela. Não há data de lançamento, e o recurso pode ser abandonado.'
  ] },

{ id: 'uber-preferencias-de-partida', cat: 'atualizacoes', own: false, t: '2026-10-21T10', d: '21 out 2026', img: 'celular', src: 'Tecnoblog', url: U.tbUberAcess,
  title: 'Uber cria "Preferências de partida" para facilitar o embarque de idosos e pessoas com deficiência',
  sum: 'O passageiro informa se usa bengala, muletas, andador ou cadeira de rodas e escolhe como o motorista avisa que chegou.',
  body: [
    'O motorista pode piscar o farol, chamar pelo nome, avisar pelo app ou buzinar. A opção fica em Conta, Configurações, Acessibilidade, e a liberação é gradual, segundo o Tecnoblog.'
  ] },

/* ===================== IA ===================== */
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

{ id: 'chatgpt-icloud-mail-calendario', cat: 'ia', own: true, t: '2026-10-27T14', d: '27 out 2026', img: 'celular', read: 2,
  title: 'ChatGPT passa a se conectar ao e-mail e à agenda do iCloud, inclusive no plano gratuito',
  sum: 'Com os plug-ins, o assistente busca e-mails, escreve rascunhos e cria ou altera eventos. Funciona na web, no computador e no iPhone.',
  body: [
    'A OpenAI liberou em 27 de outubro plug-ins que conectam o ChatGPT ao iCloud Mail e ao Calendário da Apple. Segundo a empresa, citada pelo 9to5Mac, o recurso está em todos os planos do ChatGPT, na web, no app para computador e no iOS.',
    '## O que dá para fazer',
    'No e-mail, o ChatGPT pode buscar e ler mensagens, preparar rascunhos, enviar e procurar contatos. Na agenda, lê, cria e altera eventos e encontra horários livres, segundo o iGeeksBlog. Até agora, o assistente só tinha integrações com serviços do Google e da Microsoft.',
    '## Como ligar',
    'É preciso criar uma senha específica para apps na conta Apple e ativar o recurso nas configurações do ChatGPT, na área de plug-ins. Só funcionam endereços @icloud.com, @me.com e @mac.com. Contas do Gmail ou do Outlook adicionadas ao app Mail da Apple ficam de fora.',
    'As fontes não citam o Android nem confirmam a disponibilidade no Brasil.'
  ],
  box: { type: 'steps', title: 'Como conectar', steps: [['Crie uma senha de app', 'Na conta Apple'], ['Abra as configurações do ChatGPT', 'Área de plug-ins'], ['Ligue iCloud Mail e Calendário', 'Só endereços @icloud.com, @me.com e @mac.com']] },
  sources: [['9to5Mac', U.m9Icloud], ['iGeeksBlog', U.igIcloud]] },

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

{ id: 'salesforce-compra-braze', cat: 'startups', own: false, t: '2026-10-20T14', d: '20 out 2026', img: 'mercado', src: 'Salesforce', url: U.sfBraze,
  title: 'Salesforce fecha acordo para comprar a Braze, plataforma de marketing para apps, por US$ 5,66 bilhões',
  sum: 'A Braze tem cerca de 2.770 clientes, entre eles Canva, Instacart e Venmo. O pagamento será em dinheiro.',
  body: [
    'A conclusão está prevista para o ano fiscal de 2028 da Salesforce e depende do aval dos acionistas da Braze e de reguladores.'
  ] },

{ id: 'openai-rodada-30-bi', cat: 'startups', own: false, t: '2026-10-22T16', d: '22 out 2026', img: 'mercado', src: 'Investing.com (CNBC)', url: U.invOpenai,
  title: 'OpenAI está perto de captar até US$ 30 bilhões com avaliação de US$ 1,25 trilhão',
  sum: 'A rodada é liderada por investidores dos Emirados Árabes Unidos e pela Coatue. O tamanho final ainda está em discussão.',
  body: [
    'Em março, a dona do ChatGPT captou US$ 122 bilhões, com avaliação de US$ 852 bilhões depois do investimento.'
  ] },

{ id: 'tractian-unicornio-130-milhoes', cat: 'startups', own: false, t: '2026-10-22T12', d: '22 out 2026', img: 'mercado', src: 'Bloomberg Línea', url: U.blTractian,
  title: 'Brasileira Tractian capta US$ 130 milhões e vira unicórnio, avaliada em US$ 1,4 bilhão',
  sum: 'A rodada foi liderada pela Sapphire Ventures. A receita anualizada da startup de inteligência artificial passou de US$ 100 milhões em setembro, contra US$ 40 milhões em 2024.',
  body: [
    'A avaliação subiu 94% em relação à rodada anterior, de US$ 720 milhões. A empresa tem mais de 700 funcionários, e entre os clientes estão Coca-Cola e Embraer.'
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

{ id: 'meta-oferta-acoes-95-bilhoes', cat: 'startups', own: false, t: '2026-10-26T12', d: '26 out 2026', img: 'mercado', src: 'TipRanks', url: U.trMeta,
  title: 'Meta planeja levantar até US$ 95 bilhões com venda de ações para bancar a IA',
  sum: 'São US$ 35 bilhões agora e um programa de até US$ 60 bilhões a partir do primeiro trimestre de 2027. É a primeira emissão de ações da Meta desde 2013.',
  body: [
    'Nvidia, AMD e Broadcom avaliam comprar até US$ 5 bilhões na oferta. A Meta elevou a previsão de investimentos de 2026 para US$ 135 bilhões a US$ 145 bilhões.'
  ] },

/* ===================== IDEIAS PARA O BRASIL ===================== */
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

{ id: 'even-saude-hospital-proprio', cat: 'ideias', own: true, t: '2026-10-19T12', d: '19 out 2026', img: 'mundo', read: 3,
  title: 'Na Índia, a Even junta plano de saúde e hospital próprio, paga salário fixo aos médicos e capta US$ 50 milhões',
  sum: 'A startup de Bengaluru tem mais de 250 mil membros em 10 cidades. Os médicos são avaliados pela recuperação dos pacientes, e não pelo número de procedimentos.',
  body: [
    'A Even Healthcare, de Bengaluru, na Índia, captou US$ 50 milhões numa rodada liderada pela Khosla Ventures, que já era sócia, com participação da Alpha Wave, segundo o YourStory. Com isso, a empresa soma mais de US$ 120 milhões captados.',
    '## Como funciona',
    'O membro tem uma equipe de saúde que o acompanha ao longo do tempo, exames de sangue em casa, teleconsultas e internação sem pagar na hora, por meio de seguradoras parceiras. Os médicos recebem salário fixo, sem ligação com procedimentos ou faturamento, e são avaliados por resultados como o tempo de recuperação e as novas internações. Um sistema de IA confere cada caso com protocolos clínicos, segundo o Inc42.',
    '## Os números',
    'A Even tem mais de 250 mil membros em 10 cidades, três vezes mais que um ano antes. Tem dois hospitais em Bengaluru, os dois com lucro operacional, segundo o YourStory, e planeja abrir mais. Segundo a empresa, as reinternações não planejadas ficam abaixo de 1%. Em agosto, a Even demitiu cerca de 350 pessoas ao trocar o foco no seguro pelo modelo com hospitais, segundo o Inc42.',
    '## Por que olhar para o Brasil',
    'Análise da redação: o modelo junta num só app o acompanhamento contínuo, o exame em casa e a internação, e paga os médicos por resultado, e não por procedimento. A ideia pode interessar a operadoras e startups de saúde brasileiras, mas depende de hospitais próprios ou parceiros, o que exige muito capital.'
  ],
  box: { type: 'facts', title: 'Even Healthcare', rows: [['País', 'Índia'], ['Rodada', 'US$ 50 milhões'], ['Total captado', 'Mais de US$ 120 milhões'], ['Membros', 'Mais de 250 mil em 10 cidades'], ['Hospitais', '2 em Bengaluru']] },
  sources: [['YourStory', U.ysEven], ['Inc42', U.incEven]] },

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

{ id: 'lagos-life-simulador-cidade', cat: 'ideias', own: false, t: '2026-10-09T10', d: '9 out 2026', img: 'mundo', src: 'TheCondia', url: U.cdLagos,
  title: 'Jogo nigeriano Lagos Life, que simula a vida em Lagos, passa de 4 milhões de jogadores',
  sum: 'No jogo, feito para o navegador, o jogador arruma emprego, ganha nairas virtuais, paga aluguel e anda de transporte público. A criadora, Vatar, captou US$ 500 mil.',
  body: [
    'A rodada avaliou a empresa em US$ 10 milhões. O jogo teve 1 milhão de jogadores nos 3 primeiros dias, e a receita já passa de US$ 170 mil, com a venda de outdoors virtuais para marcas.'
  ] },

{ id: 'alta-looks-com-ia', cat: 'ideias', own: false, t: '2026-10-22T12', d: '22 out 2026', img: 'mundo', src: 'Fortune', url: U.fortuneAlta,
  title: 'Alta, app americano que usa IA para montar looks e ajudar nas compras, capta US$ 20 milhões',
  sum: 'O app já gerou 700 milhões de looks e 20 milhões de avatares. Também vende o serviço para marcas, como a Rent the Runway.',
  body: [
    'Clientes da Rent the Runway que usaram o recurso colocaram itens na sacola 12% mais vezes. A empresa tem 10 funcionários, e a rodada foi liderada pela Forerunner.'
  ] },

{ id: 'circle-usados-verificados', cat: 'ideias', own: false, t: '2026-10-14T10', d: '14 out 2026', img: 'mundo', src: 'Inc42', url: U.incCircle,
  title: 'Indiana Circle verifica, busca e paga produtos usados, e capta ₹25 crore para crescer além de Bengaluru',
  sum: 'A plataforma confere os itens com IA e checagem humana e dá ao comprador garantia de 3 dias. Movimentou cerca de ₹25 crore em vendas no primeiro ano.',
  body: [
    'Fundada em 2025, a Circle vende celulares, consoles, câmeras, móveis, relógios, bolsas e tênis. Tem cerca de 100 mil anúncios.'
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

{ id: '99-unico-biometria', cat: 'brasil', own: false, t: '2026-10-26T12', d: '26 out 2026', img: 'celular', src: 'Mobile Time', url: U.mt99Unico,
  title: '99 passa a usar biometria facial para verificar motoristas e entregadores',
  sum: 'A checagem, feita com a Unico, acontece na entrada na plataforma e em revalidações frequentes.',
  body: [
    'A 99 prevê investir R$ 145 milhões em segurança em 2026. O app tem mais de 50 recursos de proteção, como gravação de áudio e botão de emergência.'
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
  ] },

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

{ id: 'uber-electric-11-cidades', cat: 'brasil', own: false, t: '2026-10-22T11', d: '22 out 2026', img: 'celular', src: 'Vrum', url: U.vrUberEl,
  title: 'Uber Electric, categoria só com carros elétricos, chega a 11 novas cidades e passa a 15',
  sum: 'Entre as novas estão Belo Horizonte, Porto Alegre, Recife, Salvador e Fortaleza. A opção aparece ao lado do UberX no app.',
  body: [
    'A categoria já funcionava em São Paulo, Rio, Brasília e Curitiba. A fonte não informa os preços.'
  ] },

{ id: 'receita-lote-residual-ir', cat: 'brasil', own: false, t: '2026-10-23T12', d: '23 out 2026', img: 'celular', src: 'Agência Brasil', url: U.abResidual,
  title: 'Receita paga nesta sexta (30) lote residual do Imposto de Renda a 184 mil contribuintes; consulta é pelo app',
  sum: 'São R$ 531,6 milhões. A consulta pode ser feita no app ou no site da Receita, em "Consultar Minha Restituição".',
  body: [
    'Mais da metade do valor, R$ 293,4 milhões, vai para grupos com prioridade, como idosos, pessoas com deficiência ou doença grave e professores.'
  ] }
];
