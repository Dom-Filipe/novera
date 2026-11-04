/* ============================================================
   NOVERA: conteúdo do site. Edite este arquivo e rode `node build.js`.
   Regras completas em ATUALIZACAO.md.
   ============================================================ */

/* Topo do site: data da edição e destaques da faixa de cima */
const META = {
  /* Endereço público do site, sem barra no final. Usado nos links das redes sociais. */
  siteUrl: 'https://novera-sepia.vercel.app',
  dataExtenso: 'Quarta-feira, 4 de novembro de 2026',
  edicao: '4 nov 2026',
  /* Faixa do topo: 1 a 3 itens [rótulo, texto curto]. Use só fatos que estão em notícias do site. */
  destaques: [
    ['Em teste', 'Apple libera o iOS 27.3 para desenvolvedores, com novo app Saúde; versão final é esperada para dezembro'],
    ['App do dia', 'Affinity para iPad é lançado pela Canva, grátis para pessoas físicas'],
    ['Domingo (8)', 'Enem: documento digital só vale aberto no app oficial; print e foto não são aceitos']
  ]
};

/* Home: destaque principal, dois laterais e três da faixa de baixo (IDs de notícias "own: true") */
const FEATURED = {
  lead: 'ios-27-3-beta-app-saude-apple-watch',
  side: ['netflix-ai-discover-teste', 'duolingo-3tri-2026'],
  also: ['chatgpt-junta-abas-chat-work', 'enem-2026-documentos-digitais-celular', 'zelda-ocarina-of-time-switch-2']
};

/* Home: "Escolhas da redação" (5 IDs) */
const PICKS = ['google-system-updates-novembro', 'uphold-oobit-deixam-brasil-cripto', 'strollme-assinatura-produtos-infantis', 'gta-6-lancamento-19-novembro', 'sac-comeca-a-valer-apps-transporte-senacon'];

const U = {
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

{ id: 'readwise-books-app-leitura-beta', cat: 'lancamentos', own: true, t: '2026-11-02T12', d: '2 nov 2026', img: 'celular', read: 2,
  title: 'Readwise lança em teste o Readwise Books, app grátis que vende e-books e acompanha a leitura',
  sum: 'O app está em beta, por convite, e a loja de e-books funciona inicialmente só nos EUA. Assinantes da empresa não precisam de convite.',
  body: [
    'A startup Readwise apresentou o Readwise Books, um app gratuito que junta loja de e-books, venda de livros impressos e alguns audiolivros, além de ferramentas para acompanhar a leitura. O anúncio foi noticiado pelo TechCrunch em 2 de novembro.',
    '## Ainda em teste',
    'O app está em beta e exige convite, com exceção de quem já assina os serviços da empresa. A loja, com "milhões" de e-books segundo a reportagem, começa nos EUA, e outros países estão previstos. A fonte não cita o Brasil.',
    '## O que ele faz',
    'O usuário vê estatísticas como palavras lidas e ritmo de leitura, pode abrir arquivos EPUB sem proteção DRM e ouvi-los em voz sintética, e marca o avanço em livros físicos com uma foto. Há também recursos para compartilhar o progresso com amigos.',
    '## IA depende das editoras',
    'Resumos, definições, traduções e perguntas sobre o trecho lido só funcionam com permissão das editoras. Até agora, só a HarperCollins aderiu. Parte desses recursos será paga no futuro, sem preço informado. Os outros dois apps da Readwise custam US$ 7,99 por mês cada, ou US$ 9,99 pelos dois.'
  ],
  box: { type: 'facts', title: 'Readwise Books', rows: [['Preço', 'Grátis; parte da IA será paga depois'], ['Situação', 'Beta, por convite'], ['Loja de e-books', 'Inicialmente nos EUA'], ['Editora na IA', 'Só a HarperCollins até agora']] },
  sources: [['TechCrunch', U.readwiseBooks]] },

{ id: 'free-fire-india-app-separado', cat: 'lancamentos', own: false, t: '2026-10-29T10', d: '29 out 2026', img: 'tecnologia', src: 'Esquire India', url: U.freeFireIndia,
  title: 'Garena lança o Free Fire India, app separado e só para contas do país, com limite diário de jogo',
  sum: 'O jogo saiu em 28 de outubro para Android e iOS, é grátis com compras internas e limita adultos a 6 horas por dia e menores de 18 a 3 horas.',
  body: [
    'O Free Fire original foi banido na Índia em fevereiro de 2022. A nova versão exige consentimento dos pais para menores de 18 anos, e a Garena diz que hospeda os dados no país. Contas de outras regiões são direcionadas às versões já existentes do jogo.'
  ] },

{ id: 'gravhounds-acesso-antecipado-xbox', cat: 'lancamentos', own: false, t: '2026-11-02T10', d: '2 nov 2026', img: 'tecnologia', src: 'Xbox Wire', url: U.gravhounds,
  title: 'Gravhounds, jogo cooperativo de cães no espaço, tem estreia marcada em acesso antecipado no Xbox e no PC',
  sum: 'O anúncio previa 2 de novembro como data, por US$ 19,99 e com Game Pass desde o primeiro dia.',
  body: [
    'É o primeiro jogo da Octopus Panic, estúdio de sete pessoas. De 1 a 4 jogadores controlam cães modificados em planetas alienígenas. O jogo sai como Game Preview, ou seja, ainda em desenvolvimento.'
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

{ id: 'naviu-guia-japao-ia-realidade-aumentada', cat: 'lancamentos', own: false, t: '2026-10-31T12', d: '31 out 2026', img: 'celular', src: 'PR Newswire', url: U.naviuGuiaJapaoIaRealidadeAumentada,
  title: 'Naviu, guia de viagem com IA e realidade aumentada para o Japão, é lançado para iPhone e Android',
  sum: 'Segundo a empresa, o app responde a perguntas sobre os lugares em 29 idiomas e desenha o caminho sobre a imagem das ruas.',
  body: [
    'As informações são de um comunicado da TANGLE, empresa de Tóquio dona do app, com lançamento em 1º de novembro. O usuário também pode apontar a câmera para um templo, uma placa ou uma loja e perguntar o que é. O comunicado não informa o preço nem cita outros países além do Japão.'
  ] },

/* ===================== ATUALIZAÇÕES ===================== */
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

{ id: 'google-system-updates-novembro', cat: 'atualizacoes', own: true, t: '2026-11-02T16', d: '2 nov 2026', img: 'celular', read: 2,
  title: 'Atualizações de sistema do Google de novembro citam backup de fotos do Android para o Windows e aviso do Play Protect',
  sum: 'A lista vale para o Google Play services v26.43 e a Play Store v53.9. Estar na lista não significa que o recurso já chegou a todos.',
  body: [
    'O Google publicou em 2 de novembro as novidades do mês para Android, reunidas pelo 9to5Google. Parte delas pode levar meses para chegar a todos os aparelhos, e a fonte não trata do Brasil.',
    '## Google Play services',
    'A versão v26.43 cita o acesso ao Android Family Hub, espaço de gestão familiar nas configurações, e o backup automático de fotos e vídeos para o Windows pelo Quick Share. No Gerenciador de Senhas, o usuário poderá escolher quais credenciais manter quando uma importação entrar em conflito. Os cartões de fidelidade da Wallet também mudam.',
    '## Play Store',
    'A versão v53.9 traz um lembrete quando o Play Protect fica desativado por um tempo. As páginas de jogos ganham um resumo com o estilo do jogo, as avaliações e a atividade da comunidade.'
  ],
  box: { type: 'facts', title: 'Novembro no Android', rows: [['Play services', 'v26.43'], ['Play Store', 'v53.9'], ['Chegada', 'Gradual; alguns recursos levam meses']] },
  sources: [['9to5Google', U.googleSystemNov]] },

{ id: 'google-derruba-backdoor-tv-box', cat: 'atualizacoes', own: false, t: '2026-11-02T15', d: '2 nov 2026', img: 'tecnologia', src: '9to5Google', url: U.tvBoxBackdoor,
  title: 'Google bane fabricante Videostrong após achar porta dos fundos em boxes de Android TV e Google TV',
  sum: 'Segundo o Google, a ação vai cortar o acesso a pelo menos mais 10 milhões de aparelhos comprometidos.',
  body: [
    'A Videostrong incluiu uma porta dos fundos em boxes certificados, informa o site. O Google rompeu com a empresa e suas subsidiárias, agiu na Justiça contra domínios e servidores e revisa a certificação. Não foi publicada lista de modelos, e a fonte não menciona o Brasil.'
  ] },

{ id: 'android-auto-falhas-one-ui-9', cat: 'atualizacoes', own: false, t: '2026-11-02T11', d: '2 nov 2026', img: 'celular', src: '9to5Google', url: U.androidAutoOneUi,
  title: 'Usuários relatam falhas no Android Auto em celulares Galaxy com One UI 9',
  sum: 'Os relatos falam de travamentos e de falha total na conexão. Samsung e Google não comentaram até a publicação.',
  body: [
    'Os casos citam modelos como S24 Ultra, S26 e A55 5G. O site avalia que o problema não parece disseminado e diz que ainda não há correção.'
  ] },

{ id: 'zoom-microsoft-iphone-duo', cat: 'atualizacoes', own: false, t: '2026-11-02T09', d: '2 nov 2026', img: 'celular', src: 'MacRumors', url: U.iphoneDuoApps,
  title: 'Zoom, Word, Excel, PowerPoint e OneNote ganham versões adaptadas ao iPhone Duo',
  sum: 'No Zoom, a tela interna mostra ao mesmo tempo o conteúdo compartilhado e os participantes.',
  body: [
    'As atualizações saíram entre o fim de semana e 2 de novembro. O Outlook já estava adaptado, e o Teams ainda não está. A App Store identifica esses apps com um selo próprio para o aparelho.'
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

{ id: 'reddit-login-para-ler-teste', cat: 'atualizacoes', own: false, t: '2026-10-30T15', d: '30 out 2026', img: 'plataforma', src: 'Canaltech', url: U.ctRedditLogin,
  title: 'Reddit vai testar exigir login até de quem só quer ler, em países fora dos EUA',
  sum: 'O teste começa ainda neste trimestre, em mercados que não foram informados. Hoje, cerca de 59% dos usuários diários do Reddit usam o serviço sem entrar na conta.',
  body: [
    'Contas sem nome real continuam permitidas, e o modo anônimo do app vai servir só para leitura. O presidente-executivo, Steve Huffman, quer deixar abertos a página inicial e os posts que chegam pelo Google, mas as exceções ainda não estão definidas. Não há confirmação de que o Brasil esteja no teste, segundo o Canaltech.'
  ] },

/* ===================== IA ===================== */
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

{ id: 'grok-bot-limites-custo', cat: 'ia', own: false, t: '2026-11-02T13', d: '2 nov 2026', img: 'tecnologia', src: 'TechCrunch', url: U.grokBot,
  title: 'Usuários do Grok Bot veem limite semanal se esgotar, e Musk diz que o custo do serviço estava alto demais',
  sum: 'Alguns relataram salto de cerca de 50% para 100% de uso no fim de semana. Musk disse que não foi erro.',
  body: [
    'Em post no X em 1º de novembro, Musk afirmou que o custo do serviço era insustentável em relação à receita. Ainda não se sabe como ficam os limites dos assinantes.'
  ] },

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

{ id: 'dreambeans-google-india', cat: 'ia', own: false, t: '2026-11-02T11', d: '2 nov 2026', img: 'celular', src: 'TechCrunch', url: U.dreambeans,
  title: 'Google leva à Índia o Dreambeans, app experimental que cria histórias ilustradas com dados do usuário',
  sum: 'É o primeiro mercado fora dos EUA, com 13 idiomas locais e inglês.',
  body: [
    'O app, para Android e iOS, gera histórias sem pedido escrito, a partir de Agenda, Gmail, Fotos, Pesquisa e YouTube. Segue como experimento, e a fonte não cita preço nem o Brasil.'
  ] },

{ id: 'copilot-fim-tvs-lg-samsung', cat: 'ia', own: true, t: '2026-10-31T23', d: '31 out 2026', img: 'tecnologia', read: 2,
  title: 'Microsoft tira o Copilot das TVs LG e Samsung em 1º de dezembro',
  sum: 'O assistente de IA deixa de funcionar nas TVs nessa data, segundo aviso de suporte da Microsoft. Ele continua na web, nos computadores e nos celulares.',
  body: [
    'A Microsoft vai encerrar o Copilot nas TVs da LG e da Samsung em 1º de dezembro de 2026. A data consta de um aviso de suporte da empresa, segundo o site Advanced Television. Depois disso, quem tem esses aparelhos não conseguirá mais conversar com o assistente pela TV.',
    '## Como a notícia veio a público',
    'Antes da data, donos de TVs LG já recebiam mensagens na tela sobre o fim do recurso. O Windows Central e o The Desk relataram esses avisos, que falavam em encerramento até o fim do ano e diziam que o serviço poderia parar a qualquer momento. O The Desk informou ter recebido a mensagem em uma TV LG B5 OLED.',
    '## O que continua funcionando',
    'O Copilot segue disponível na web, em computadores e em celulares. Segundo a Oficina da Net, a Microsoft não explicou o motivo da decisão; o Windows Central associa a saída a uma mudança de estratégia da empresa, com mais foco em produtividade e uso corporativo. A mesma reportagem lembra que a instalação do app nas TVs gerou reclamações de clientes. As fontes não trazem regra específica para o Brasil.'
  ],
  box: { type: 'facts', title: 'Copilot nas TVs', rows: [['Fim do serviço', '1º de dezembro de 2026'], ['Marcas', 'LG e Samsung'], ['Continua em', 'Web, computadores e celulares'], ['Motivo oficial', 'Não informado'], ['Brasil', 'Sem informação específica']] },
  sources: [['Advanced Television', U.copilotFimTvsLgSamsung], ['Oficina da Net', U.copilotFimTvsLgSamsung12], ['Windows Central', U.copilotFimTvsLgSamsung13], ['The Desk', U.copilotFimTvsLgSamsung14]] },

{ id: 'apple-intelligence-china-ios-27-3', cat: 'ia', own: false, t: '2026-10-30T19', d: '30 out 2026', img: 'celular', src: '9to5Mac', url: U.m9China,
  title: 'Apple confirma a Apple Intelligence na China com o modelo Qwen, da Alibaba, no iOS 27.3',
  sum: 'Os testes começam em 4 de novembro, na versão beta para desenvolvedores, e o lançamento para o público está previsto para dezembro. A nova Siri com IA fica de fora no país.',
  body: [
    'O Qwen vai atender pedidos como as Ferramentas de Escrita e a Inteligência Visual. No começo, o recurso vale só para iPhone, do 15 Pro em diante, com o idioma em inglês ou chinês simplificado, segundo o 9to5Mac, com base num comunicado da Apple.'
  ] },

/* ===================== STARTUPS ===================== */
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

{ id: 'hinge-plano-mais-barato-teste', cat: 'startups', own: false, t: '2026-11-02T21', d: '2 nov 2026', img: 'celular', src: 'TechCrunch', url: U.hingePlano,
  title: 'Hinge testa plano de assinatura mais barato, voltado sobretudo a mulheres e a quem é sensível a preço',
  sum: 'A opção traz mais filtros e limites de localização. O Match Group, dono do app, não informou preço nem onde ocorre o teste.',
  body: [
    'O teste foi citado pelo diretor financeiro Steve Bailey na conferência de resultados do grupo. O Hinge tem receita média de cerca de US$ 30 por pagante, quase o dobro da do Tinder, e 2,3 milhões de pagantes, alta de 23%, segundo o TechCrunch.'
  ] },

{ id: 'match-group-3tri-2026', cat: 'startups', own: true, t: '2026-11-03T07', d: '3 nov 2026', img: 'mercado', read: 2,
  title: 'Dona do Tinder fatura US$ 891 milhões no trimestre, com queda de 3% e menos pagantes; Hinge cresce 19%',
  sum: 'O Match Group teve 13,8 milhões de pagantes, 5% a menos em um ano. Os usuários diários do Tinder voltaram a subir em setembro.',
  body: [
    'O Match Group, dono de Tinder e Hinge, teve receita de US$ 891 milhões no terceiro trimestre de 2026, queda de 3% em um ano. O lucro líquido subiu 8%, para US$ 174 milhões, e o Ebitda ajustado avançou 14%, para US$ 344 milhões. A receita média por pagante foi de US$ 21,19, alta de 3%.',
    '## Tinder e Hinge',
    'A receita direta do Tinder caiu 2%, para US$ 480 milhões, mas os usuários ativos diários cresceram em setembro, pela primeira vez em três anos e meio. O Hinge faturou US$ 220,6 milhões, 19% a mais, com alta de 23% nos pagantes. O grupo das demais marcas caiu 20%, para US$ 176 milhões.',
    '## Próximos passos',
    'O Tinder promete novo sistema de recomendação até o fim de 2026. O Hinge testa um plano mais barato, chega ao Japão em 2027 e mira US$ 1 bilhão de receita anual naquele ano. A empresa espera taxas maiores das lojas em 2027, com cerca de US$ 20 milhões adicionais só com a Apple na União Europeia.'
  ],
  box: { type: 'table', title: 'Terceiro trimestre de 2026', head: ['Item', 'Valor', 'Em um ano'], rows: [['Receita total', 'US$ 891 mi', '-3%'], ['Tinder', 'US$ 480 mi', '-2%'], ['Hinge', 'US$ 220,6 mi', '+19%'], ['Pagantes', '13,8 mi', '-5%']] },
  sources: [['Global Dating Insights', U.matchGdi]] },

{ id: 'snap-acordo-adolescentes', cat: 'startups', own: false, t: '2026-11-02T15', d: '2 nov 2026', img: 'plataforma', src: 'TechCrunch', url: U.snapAcordo,
  title: 'Snap faz acordo em processo sobre saúde mental de adolescentes e evita seu primeiro julgamento nessa onda de ações',
  sum: 'Os termos e o valor não foram divulgados. Os autores já tinham feito acordo com Meta, TikTok e YouTube.',
  body: [
    'Dois adolescentes acusavam a plataforma de ser viciante e de contribuir para problemas de saúde mental. O acordo encerra este caso específico.'
  ] },

{ id: 'pinterest-3tri-2026', cat: 'startups', own: false, t: '2026-10-29T18', d: '29 out 2026', img: 'mercado', src: 'Pinterest, comunicado à SEC', url: U.pinterest,
  title: 'Pinterest chega a 661 milhões de usuários mensais, e receita sobe 12%, para US$ 1,174 bilhão',
  sum: 'O lucro foi de US$ 21,5 milhões, ante US$ 92,1 milhões um ano antes.',
  body: [
    'A empresa projeta receita de US$ 1,425 bilhão a US$ 1,475 bilhão no quarto trimestre. O Ebitda ajustado subiu 11%, para US$ 339,2 milhões.'
  ] },

{ id: 'trajectory-45-milhoes-ia', cat: 'startups', own: false, t: '2026-11-02T12', d: '2 nov 2026', img: 'tecnologia', src: 'TechCrunch', url: U.trajectory,
  title: 'Trajectory capta US$ 45 milhões para que especialistas sem formação técnica treinem modelos de IA',
  sum: 'A rodada, liderada pela Sequoia, avalia a startup em US$ 300 milhões.',
  body: [
    'A plataforma retreina modelos abertos de IA para empresas como Harvey e Decagon. Nvidia, Bessemer e Bain Capital Ventures também investiram.'
  ] },

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

/* ===================== IDEIAS PARA O BRASIL ===================== */
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

{ id: 'rently-aluguel-flexivel-singapura', cat: 'ideias', own: false, t: '2026-10-27T10', d: '27 out 2026', img: 'mercado', src: 'Bernama', url: U.bnRently,
  title: 'Em Singapura, a Rently deixa o inquilino escolher como e quando pagar o aluguel e recebe US$ 12 milhões em crédito',
  sum: 'O app dá recompensas a quem paga com cartão, permite adiar pagamentos e dividir o depósito de garantia ao longo do contrato. O proprietário recebe em dia.',
  body: [
    'A linha de crédito, da January Capital, acompanha o volume de transações. Nos nove primeiros meses de 2026, a Rently movimentou SG$ 36,3 milhões em aluguéis em Singapura, 2,5 vezes mais que um ano antes. A empresa também atua em Hong Kong e nos Emirados Árabes Unidos, segundo a Bernama.'
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

{ id: 'cent-checkup-preventivo-ia', cat: 'ideias', own: false, t: '2026-10-27T07', d: '27 out 2026', img: 'ciencia', src: 'Inc42', url: U.incCent,
  title: 'Indiana Cent capta US$ 15 milhões para check-up completo em 2 horas, com laudo organizado por IA',
  sum: 'O pacote reúne ressonância de corpo inteiro, tomografia, ECG e outros exames por ₹27.500 e rastreia mais de 300 condições.',
  body: [
    'A empresa atua em Bengaluru, Mumbai e na região de Délhi e já fez 10 mil exames de corpo inteiro. A IA reúne os resultados em riscos por órgão.'
  ] },

/* ===================== NO BRASIL ===================== */
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

{ id: 'keeta-um-ano-10-milhoes-downloads', cat: 'brasil', own: false, t: '2026-10-27T12', d: '27 out 2026', img: 'celular', src: 'Mobile Time', url: U.keetaUmAno,
  title: 'Keeta completa um ano no Brasil com 10 milhões de downloads e presença em 32 municípios',
  sum: 'O app de entregas da chinesa Meituan soma 83 mil restaurantes e 430 mil entregadores cadastrados e planeja chegar a mais 21 cidades neste ano.',
  body: [
    'A estreia no Rio de Janeiro, prevista para fevereiro, foi adiada por questões de concorrência e segue sem nova data, segundo o Mobile Time. O Tribunal de Justiça de São Paulo decidiu contra cláusulas que impediam restaurantes de trabalhar com a Keeta.'
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

{ id: 'black-friday-medo-fraude-serasa', cat: 'brasil', own: false, t: '2026-10-30T15', d: '30 out 2026', img: 'mercado', src: 'Finsiders', url: U.blackFridayFraude,
  title: '86% dos consumidores já desistiram de promoção por medo de fraude, aponta Serasa Experian antes da Black Friday',
  sum: 'Na mesma pesquisa, 38% preferem Pix à vista e 31%, cartão parcelado. A Black Friday é em 27 de novembro.',
  body: [
    'A pesquisa aponta que 53% temem ataques digitais. A reportagem também traz um dado da Adyen: 60% desistem da compra sem a forma de pagamento preferida.'
  ] },

{ id: 'sac-comeca-a-valer-apps-transporte-senacon', cat: 'brasil', own: true, t: '2026-11-02T07', d: '2 nov 2026', img: 'celular', read: 3,
  title: 'Novo SAC entra em vigor: atendente humano das 8h às 20h e espera de até 20 segundos em 80% das ligações',
  sum: 'O Decreto 13.135 vale desde esta segunda (2) para setores regulados pelo governo federal e serviços financeiros digitais. Apps de transporte, entrega e marketplaces têm regras diferentes: precisam informar dados de reclamações à Senacon.',
  body: [
    'As novas regras do Serviço de Atendimento ao Consumidor começaram a valer nesta segunda-feira (2), em todo o país. O Decreto 13.135 foi publicado em 13 de outubro e substitui a norma de 2022. As empresas tiveram 20 dias para se adaptar, segundo o Let\'s Money, contra 180 dias na regra anterior.',
    '## Quem precisa seguir',
    'A norma alcança setores regulados pelo governo federal, como bancos, telefonia, energia, planos de saúde e companhias aéreas, e também serviços digitais de pagamento e crédito supervisionados pelo Banco Central, de acordo com o Times Brasil.',
    'Aplicativos de transporte, de entregas e marketplaces têm obrigações diferentes. Eles devem informar à Senacon quantas reclamações receberam, quantas resolveram e o grau de satisfação dos usuários, segundo a mesma reportagem.',
    '## O que muda no atendimento',
    'O atendimento por uma pessoa tem de estar disponível das 8h às 20h, todos os dias, no telefone e nos canais eletrônicos. Ao menos um canal eletrônico funciona 24 horas. No telefone, pelo menos 80% das demandas devem ser atendidas em até 20 segundos, e as demais em até 5 minutos. Se a ligação cair, a empresa tem 5 minutos para retornar.',
    'Os menus automáticos ficam limitados a 5 etapas, e a opção de cancelar precisa aparecer já na primeira. Reclamações não urgentes têm resposta em até 7 dias corridos. Segundo o Let\'s Money, o histórico de atendimento deve ser entregue em até 5 dias úteis, e as gravações e mensagens ficam guardadas por pelo menos 90 dias.',
    'Segundo o Let\'s Money, a inteligência artificial pode fazer a triagem e resolver casos, desde que o acesso a uma pessoa seja mantido. Quem descumprir pode ser punido pela Senacon, com multas previstas no Código de Defesa do Consumidor. As reportagens consultadas não trazem valores.'
  ],
  box: { type: 'facts', title: 'Novo SAC', rows: [['Norma', 'Decreto 13.135'], ['Vigência', '2 de novembro'], ['Atendimento humano', '8h às 20h, todos os dias'], ['Espera no telefone', 'Até 20 segundos em 80% das demandas; até 5 minutos nas demais'], ['Menu', 'Até 5 etapas'], ['Apps de transporte e entrega', 'Informam dados de reclamações à Senacon']] },
  sources: [['Times Brasil', U.sacComecaAValerAppsTransporteSenacon], ['A Tarde', U.sacComecaAValerAppsTransporteSenacon29], ['Let\'s Money', U.sacComecaAValerAppsTransporteSenacon30]] },

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
