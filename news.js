/* ============================================================
   NOVERA: conteúdo do site. Edite este arquivo e rode `node build.js`.
   Regras completas em ATUALIZACAO.md.
   ============================================================ */

/* Topo do site: data da edição e destaques da faixa de cima */
const META = {
  /* Endereço público do site, sem barra no final. Usado nos links das redes sociais. */
  siteUrl: 'https://novera-sepia.vercel.app',
  dataExtenso: 'Segunda-feira, 2 de novembro de 2026',
  edicao: '2 nov 2026',
  /* Faixa do topo: 1 a 3 itens [rótulo, texto curto]. Use só fatos que estão em notícias do site. */
  destaques: [
    ['Hoje', 'Novo SAC entra em vigor: atendimento humano das 8h às 20h, todos os dias'],
    ['Alerta', 'Falha no Android deixa travar o celular e derrubar ligações com um SMS invisível'],
    ['Quinta (5)', 'Nova versão de Zelda: Ocarina of Time chega ao Switch 2']
  ]
};

/* Home: destaque principal, dois laterais e três da faixa de baixo (IDs de notícias "own: true") */
const FEATURED = {
  lead: 'sac-comeca-a-valer-apps-transporte-senacon',
  side: ['android-sms-da-morte-falha', 'uphold-oobit-deixam-brasil-cripto'],
  also: ['zelda-ocarina-of-time-switch-2', 'gemini-chevrolet-brasil-portugues', 'copilot-fim-tvs-lg-samsung']
};

/* Home: "Escolhas da redação" (5 IDs) */
const PICKS = ['gta-6-lancamento-19-novembro', 'coreia-do-sul-multa-google-apple-lojas', 'maasi-babas-treinadas-bangalore', 'doordash-compra-instacart', 'whatsapp-grupos-quatro-recursos'];

const U = {
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
  geminiNotebookGravadorCelular: 'https://canaltech.com.br/apps/gemini-notebook-agora-grava-reunioes-e-aulas-direto-no-celular-sem-precisar-de-upload/',
  copilotFimTvsLgSamsung: 'https://www.advanced-television.com/?p=295002',
  copilotFimTvsLgSamsung12: 'https://oficinadanet.com.br/samsung/73798-microsoft-confirma-fim-do-copilot-nas-tvs-samsung-e-lg-veja-quando',
  copilotFimTvsLgSamsung13: 'https://windowscentral.com/artificial-intelligence/microsoft-copilot/microsoft-is-killing-copilot-on-all-smart-tvs-after-backlash-and-strategy-shift-lg-confirms-support-will-end-before-2027',
  copilotFimTvsLgSamsung14: 'https://thedesk.net/2026/10/microsoft-copilot-ending-lg-samsung-smart-tvs/',
  geminiChevroletBrasilPortugues: 'https://canaltech.com.br/carros/carros-da-gm-comecam-a-receber-ia-do-google/',
  geminiChevroletBrasilPortugues16: 'https://www.dgabc.com.br/Noticia/4365587/chevrolet-comeca-a-liberar-gemini-em-modelos-vendidos-no-brasil',
  geminiExploracoesImersivas: 'https://canaltech.com.br/inteligencia-artificial/gemini-comeca-a-ensinar-ciencias-em-camadas-interativas-veja-como-funciona/',
  chatgptDotsMensagensTesteEua: 'https://learn.chatgpt.com/docs/whats-new/dots-october-28-2026',
  coreiaDoSulMultaGoogleAppleLojas: 'https://www.wftv.com/news/technology/south-korea-fines/7EHUGYL2EMYKTOXX5HAYDKSGBQ/',
  coreiaDoSulMultaGoogleAppleLojas20: 'https://www.cp24.com/news/world/2026/10/28/south-korea-fines-google-and-apple-over-unfair-app-market-practices/',
  wabi55MilhoesAssistenteIaGrupo: 'https://techcrunch.com/?p=3183066',
  polymarketAtaqueFornecedorDebugbear: 'https://bleepingcomputer.com/news/security/polymarket-halts-trading-after-crypto-draining-script-breach-25m-traced',
  appleCompraAscendIo: 'https://www.macrumors.com/2026/10/30/apple-acquires-ascend-io/',
  maasiBabasTreinadasBangalore: 'https://startuptalky.com/news/maasi-raises-6-cr-pre-seed-nanny-platform/',
  maasiBabasTreinadasBangalore25: 'https://en.channeliam.com/2026/10/29/maasi-startup-funding/',
  dubdubFeedDePerguntasIndia: 'https://startuptalky.com/news/dubdub-raises-1-3m-seed-trivia-app',
  bucketlisttExperienciasViagemIndia: 'https://startuptalky.com/news/bucketlistt-com-raises-inr-7-6-crore-seed-round-funding/',
  sacComecaAValerAppsTransporteSenacon: 'https://timesbrasil.com.br/brasil/atendimento-humano-no-sac-sera-obrigatorio-a-partir-desta-segunda-2-veja-as-novas-regras/',
  sacComecaAValerAppsTransporteSenacon29: 'https://atarde.com.br/brasil/novas-regras-do-sac-entram-vigor-nesta-segunda-feira-saiba-o-que-muda-1407957',
  sacComecaAValerAppsTransporteSenacon30: 'https://www.letsmoney.com.br/noticias/novo-decreto-sac-bancos-fintechs/',
  cripto200Empresas50PedidosAbcripto: 'https://www.infomoney.com.br/negocios/regulacao-cripto-banco-central-mercado-nova-fase/',
  bancosCriptoSemAutorizacao6Novembro: 'https://economicnewsbrasil.com.br/2026/10/31/regulacao-de-cripto-no-brasil/',
  blackFridayPix42MercadoPago: 'https://finsidersbrasil.com.br/noticias-sobre-fintechs/black-friday-obriga-bancos-e-fintechs-a-equilibrar-vendas-e-seguranca-contra-fraudes/',
  caixaNovoAppTesteIphone: 'https://canaltech.com.br/apps/caixa-libera-novo-aplicativo-para-ios-com-visual-repaginado-e-seguranca-reforcada/',
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
  rtArmas: 'https://www.yahoo.com/news/us/articles/openai-limit-weapons-information-teens-173008704.html',
  dsArmas: 'https://www.datastudios.org/post/openai-chatgpt-teens-weapons-information-limits-violence-chat-ending',
  gdClaudeJogos: 'https://www.gamedeveloper.com/programming/anthropic-appears-to-have-ordered-ai-tool-claude-to-stop-remaking-video-games',
  /* Startups */
  kaKalshi: 'https://news.kalshi.com/p/kalshi-series-g-40-billion-valuation',
  ffKalshi: 'https://financefeeds.com/kalshi-valuation-doubles-to-40-billion-after-1-billion-series-g-raise/',
  szUnico: 'https://www.startupz.com.br/artigo/unico-lanca-human-token-com-preco-unico-global-e-corta-25-do-quadro-de-funcionarios',
  tcOllie: 'https://techcrunch.com/2026/10/30/ollie-a-privacy-focused-ai-assistant-is-shutting-down/',
  /* Ideias para o Brasil */
  incMatiks: 'https://inc42.com/buzz/matiks-bags-10-mn-to-take-its-puzzle-gaming-platform-global/',
  enMatiks: 'https://entrackr.com/news/social-gaming-startup-matiks-raises-10-mn-in-pre-series-a-led-by-general-catalyst-12754114',
  daTalent: 'https://disruptafrica.com/2026/10/30/aboyeji-backed-ai-engineering-talent-platform-talent-nation-raises-pre-seed-funding/',
  /* No Brasil */
  bnUphold: 'https://bitnoticias.com.br/noticias/gigante-global-de-criptomoedas-uphold-anuncia-saida-do-brasil',
  lcOobit: 'https://livecoins.com.br/cartao-de-criptomoedas-oobit-vai-encerrar-contas-de-brasileiros-e-da-uma-semana-de-prazo-para-saques-um-dia-apos-anunciar-expansao-internacional/',
  bnSaidas: 'https://bitnoticias.com.br/noticias/o-prazo-do-banco-central-acabou-e-agora-quem-pediu-licenca-cripto/',
  abAuxilio: 'https://agenciabrasil.ebc.com.br/geral/noticia/2026-10/governo-alerta-para-golpe-envolvendo-o-auxilio-reconstrucao',
  /* Atualização de 31 out 2026 */
  /* Lançamentos */
  mgbSaints: 'https://www.mobilegamer.com.br/en/2026/10/saints-row-the-third-remastered-android-ios-launch-prices.html',
  tcGranola: 'https://techcrunch.com/2026/10/29/granola-crunches-up-a-dictation-feature-to-compete-with-wispr',
  /* Atualizações */
  ctRedditLogin: 'https://canaltech.com.br/apps/fim-do-acesso-livre-reddit-vai-exigir-login-ate-de-quem-so-quer-ler/',
  ctWaPagamentos: 'https://canaltech.com.br/apps/whatsapp-prepara-central-de-cartoes-e-compras-no-app/',
  /* IA */
  m9China: 'https://9to5mac.com/2026/10/30/apple-confirms-ios-27-3-beta-is-coming-next-week-with-apple-intelligence-in-china/',
  tcMistral: 'https://techcrunch.com/2026/10/29/mistral-releases-weights-for-its-trillion-parameter-ai-model-targeting-cybersecurity/',
  /* Startups */
  gnRoblox: 'https://www.gaming.net/roblox-q3-revenue-rises-16-as-bookings-fall-12-to-1-7-billion/',
  nfBinance: 'https://neofeed.com.br/negocios/maior-ataque-hacker-da-historia-deixa-rombo-de-us-63-bilhoes-na-binance/',
  /* Ideias para o Brasil */
  bnRently: 'https://www.bernama.com/tv/news.php?id=2626473',
  tssGhanem: 'https://thestartupscene.me/INVESTMENTS/Saudi-Proptech-Ghanem-Raises-1-5-Million-Pre-Seed-Extension',
  /* No Brasil */
  exCripto63: 'https://exame.com/future-of-money/bitget-e-mais-empresas-pedem-licenca-cripto-ao-bc-na-data-final-veja-a-lista-completa/',
  bnCripto67: 'https://bitnoticias.com.br/mercado/bitget-e-mais-4-empresas-pedem-licenca-cripto-ao-banco-central-lista-chega-a-67-pedidos',
  lcCripto40: 'https://livecoins.com.br/mercado-esperava-ate-200-empresas-mas-cerca-de-40-pediram-autorizacao-para-operar-com-criptoativos-no-brasil/',
  abMove: 'https://agenciabrasil.ebc.com.br/economia/noticia/2026-10/governo-autoriza-contrato-de-r-30-bi-para-motoristas-de-aplicativos',
  /* Atualização de 30 out 2026 */
  /* Lançamentos */
  /* Atualizações */
  /* IA */
  bcProLimites: 'https://www.bleepingcomputer.com/news/artificial-intelligence/openai-doubles-chatgpt-pro-usage-limits-after-backlash-over-planned-50-percent-cut/',
  tcAlexa: 'https://techcrunch.com/2026/10/29/amazon-updates-alexa-to-help-you-manage-shopping-lists-and-subscriptions-and-update-delivery-instructions/',
  /* Startups */
  tcDoorDash: 'https://techcrunch.com/2026/10/29/doordash-to-acquire-instacart-for-17b/',
  nfDoorDash: 'https://neofeed.com.br/negocios/a-aposta-de-us-17-bilhoes-da-doordash-para-fazer-o-app-do-jantar-ser-o-app-das-compras-da-semana/',
  secDoorDash: 'https://www.sec.gov/Archives/edgar/data/0001792789/000179278926000062/proddashex991-pressrelease.htm',
  /* Ideias para o Brasil */
  tmMedikea: 'https://techmoran.com/2026/10/29/tanzanian-health-startup-medikea-raises-1-2-million-to-own-care-not-just-connect-it',
  cdMedikea: 'https://thecondia.com/medikea-raises-1-2m-pre-seed-funding/',
  /* No Brasil */
  abPixMei: 'https://www.dgabc.com.br/Noticia/4365781/governo-alerta-que-cadastramento-para-o-pix-mei-ainda-nao-comecou',
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

/* ===================== ATUALIZAÇÕES ===================== */
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

{ id: 'gemini-notebook-gravador-celular', cat: 'atualizacoes', own: false, t: '2026-10-29T10', d: '29 out 2026', img: 'celular', src: 'Canaltech', url: U.geminiNotebookGravadorCelular,
  title: 'Gemini Notebook passa a gravar aulas e reuniões no celular, com sessões de até uma hora e português no Brasil',
  sum: 'O app, antigo NotebookLM, transcreve a fala e adiciona o texto às fontes do caderno. O recurso está no Android e no iPhone.',
  body: [
    'A gravação continua em segundo plano e com a tela bloqueada, e dá para pausar, retomar ou descartar. Depois, o usuário pode pedir resumos ou fazer perguntas sobre o conteúdo. Segundo o Google, o áudio original não é guardado como fonte, só a transcrição. A empresa orienta pedir permissão antes de gravar outras pessoas e conferir as respostas da IA.'
  ] },

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

/* ===================== IA ===================== */
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

{ id: 'gemini-chevrolet-brasil-portugues', cat: 'ia', own: true, t: '2026-10-30T15', d: '30 out 2026', img: 'tecnologia', read: 2,
  title: 'Gemini começa a chegar em português a carros da Chevrolet no Brasil',
  sum: 'A liberação é gradual e vale para Blazer EV, Equinox EV, Equinox Turbo e Silverado fabricados a partir de 2024. Modelos 2026 ou anteriores precisam de plano pago da OnStar.',
  body: [
    'A General Motors começou a liberar aos poucos o assistente Gemini, do Google, em português, nos carros Chevrolet vendidos no Brasil com o sistema Google integrado. A atualização chega pela Google Play, segundo o Canaltech. Nos Estados Unidos, o assistente está disponível desde abril.',
    '## Quais carros recebem',
    'A lista inclui Blazer EV, Equinox EV, Equinox Turbo e a picape Silverado, em unidades produzidas a partir de 2024. O carro precisa ter Android 11 ou mais recente, conexão de dados ativa e uma conta Google configurada.',
    '## Quanto custa e o que faz',
    'Nos modelos 2027 em diante, o recurso vem no pacote OnStar Basics, sem cobrança extra. Nos modelos 2026 e anteriores, é preciso ter um plano pago ativo da OnStar. As reportagens não informam os preços.',
    'Por voz, o motorista pode buscar restaurantes e músicas, consultar informações do carro e ajustar o ar-condicionado. Nos elétricos, dá também para ver dados da bateria e procurar pontos de recarga, segundo o Diário do Grande ABC. O comando pode ser "Hey Google", o botão no volante ou o ícone na tela central.'
  ],
  box: { type: 'facts', title: 'Gemini nos Chevrolet', rows: [['Modelos', 'Blazer EV, Equinox EV, Equinox Turbo e Silverado'], ['Fabricados', 'A partir de 2024'], ['Sistema', 'Android 11 ou mais recente'], ['Modelos 2027 em diante', 'Incluído no OnStar Basics'], ['Modelos 2026 ou anteriores', 'Plano OnStar pago'], ['Liberação', 'Gradual']] },
  sources: [['Canaltech', U.geminiChevroletBrasilPortugues], ['Diário do Grande ABC', U.geminiChevroletBrasilPortugues16]] },

{ id: 'gemini-exploracoes-imersivas', cat: 'ia', own: false, t: '2026-10-29T18', d: '29 out 2026', img: 'ciencia', src: 'Canaltech', url: U.geminiExploracoesImersivas,
  title: 'Gemini ganha explorações imersivas, com cenas interativas de ciência e história, também em português',
  sum: 'O usuário toca em rótulos e aproxima a imagem para ver os detalhes, de temas como a Rota da Seda e o interior de um motor a jato.',
  body: [
    'O recurso funciona na web e nos apps para Android e iPhone, com conta pessoal do Google ou do Workspace. O português do Brasil está entre os idiomas com versão própria. O Google diz que pretende acrescentar narração em áudio e levar as explorações para dentro das conversas.'
  ] },

{ id: 'chatgpt-dots-mensagens-teste-eua', cat: 'ia', own: false, t: '2026-10-28T12', d: '28 out 2026', img: 'celular', src: 'OpenAI', url: U.chatgptDotsMensagensTesteEua,
  title: 'OpenAI testa conversa com os agentes do ChatGPT por iMessage e RCS, só para assinantes Pro nos EUA',
  sum: 'Em versão beta, o dot, agente do ChatGPT, recebe texto, foto e áudio em conversas individuais e avisa o usuário por mensagem.',
  body: [
    'Se precisar de aprovação para alguma tarefa, o agente envia um link para o usuário revisar o pedido dentro do ChatGPT. A página da OpenAI fala em liberação para usuários Pro nos EUA e não cita o Brasil.'
  ] },

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

/* ===================== STARTUPS ===================== */
{ id: 'coreia-do-sul-multa-google-apple-lojas', cat: 'startups', own: true, t: '2026-10-28T10', d: '28 out 2026', img: 'celular', read: 2,
  title: 'Coreia do Sul multa Google e Apple em US$ 47,6 milhões por regras de pagamento nas lojas de apps',
  sum: 'O Google deve pagar 42,9 bilhões de wons, e a Apple, 20,8 bilhões. O órgão regulador também manda as duas aceitarem links para pagamento fora dos apps.',
  body: [
    'A Comissão de Mídia e Comunicações da Coreia do Sul (KMCC) multou o Google e a Apple em cerca de 63,7 bilhões de wons, ou US$ 47,6 milhões, na quarta-feira (28). A parte do Google é de 42,9 bilhões de wons (US$ 32 milhões), e a da Apple, de 20,8 bilhões de wons (US$ 15,5 milhões).',
    '## O que o órgão aponta',
    'Segundo a KMCC, as empresas pressionaram desenvolvedores a usar os próprios sistemas de pagamento e bloquearam links para pagar fora do app. O órgão também cita a cobrança de comissão de 26% e a demora na análise de apps, sem explicar o motivo nem o prazo. No caso da Apple, diz que desenvolvedores sul-coreanos pagaram comissões maiores do que as de outros países entre 2015 e janeiro de 2023.',
    'A investigação se baseia numa lei de 2021 que proíbe as lojas de obrigar o uso de um sistema de pagamento específico. Além da multa, as empresas terão de permitir links de pagamento externos e melhorar a análise de apps.',
    '## O que dizem as empresas',
    'A Apple afirma que discorda da decisão, que segue a lei do país e que avalia as opções legais. Ela defende que seu sistema de pagamento protege os usuários contra fraudes. O Google não respondeu de imediato aos pedidos de comentário, segundo a reportagem.'
  ],
  box: { type: 'facts', title: 'A decisão', rows: [['Órgão', 'KMCC, da Coreia do Sul'], ['Google', '42,9 bilhões de wons (US$ 32 milhões)'], ['Apple', '20,8 bilhões de wons (US$ 15,5 milhões)'], ['Determinação', 'Permitir links de pagamento externos'], ['Apple', 'Avalia opções legais']] },
  sources: [['Associated Press, via WFTV', U.coreiaDoSulMultaGoogleAppleLojas], ['CP24', U.coreiaDoSulMultaGoogleAppleLojas20]] },

{ id: 'wabi-55-milhoes-assistente-ia-grupo', cat: 'startups', own: false, t: '2026-10-29T15', d: '29 out 2026', img: 'celular', src: 'TechCrunch', url: U.wabi55MilhoesAssistenteIaGrupo,
  title: 'Wabi, assistente de IA para conversas em grupo, capta US$ 55 milhões e passa a valer US$ 1,25 bilhão',
  sum: 'A rodada foi liderada pela IVP. A empresa é de Eugenia Kuyda, fundadora da Replika, e não divulgou o número de usuários.',
  body: [
    'No início, o Wabi servia para criar apps a partir de comandos de texto. Em setembro, mudou o foco para um serviço de mensagens com IA, em que o assistente participa de conversas em grupo, sugere restaurantes, monta orçamentos e avisa sobre e-mails importantes.',
    'A Andreessen Horowitz, a Forerunner e o Amazon Alexa Fund também participaram da rodada. A fonte não fala do Brasil.'
  ] },

{ id: 'polymarket-ataque-fornecedor-debugbear', cat: 'startups', own: false, t: '2026-10-29T18', d: '29 out 2026', img: 'tecnologia', src: 'BleepingComputer', url: U.polymarketAtaqueFornecedorDebugbear,
  title: 'Polymarket suspende negociações por cerca de uma hora após ataque a fornecedor e promete reembolsar afetados',
  sum: 'Criminosos usaram um fornecedor para espalhar um código que roubava criptomoedas. A empresa não disse quanto foi levado; analistas rastrearam cerca de US$ 2,5 milhões numa carteira suspeita.',
  body: [
    'Segundo o BleepingComputer, o código malicioso estava hospedado na DebugBear, serviço que mede o desempenho de sites, e podia assumir sessões de negociação e transferir ativos. A DebugBear confirmou um incidente de segurança e pediu aos clientes que retirassem o código de monitoramento dos sites.',
    'A Polymarket não informou o valor roubado nem o número de afetados. Diz que todos serão reembolsados e que acionou as autoridades. O valor de cerca de US$ 2,5 milhões vem de análises independentes, sem confirmação da empresa.'
  ] },

{ id: 'apple-compra-ascend-io', cat: 'startups', own: false, t: '2026-10-30T12', d: '30 out 2026', img: 'tecnologia', src: 'MacRumors', url: U.appleCompraAscendIo,
  title: 'Apple comprou a Ascend.io, startup de automação de dados, revela aviso da Comissão Europeia',
  sum: 'O valor não foi informado. A empresa da Califórnia diz no próprio site que está encerrando as operações.',
  body: [
    'A compra foi feita neste ano, sem data exata divulgada, e apareceu num aviso publicado pela Comissão Europeia, segundo o MacRumors. A Ascend.io automatiza a coleta e a análise de dados para empresas e lançou recentemente agentes de IA para ajudar engenheiros nessa tarefa. A reportagem não traz comentário da Apple.'
  ] },

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

/* ===================== IDEIAS PARA O BRASIL ===================== */
{ id: 'maasi-babas-treinadas-bangalore', cat: 'ideias', own: true, t: '2026-10-27T10', d: '27 out 2026', img: 'plataforma', read: 3,
  title: 'Na Índia, a Maasi treina, coloca e paga babás por assinatura e capta ₹ 6 crore uma semana depois de lançar',
  sum: 'A plataforma funciona em Bangalore. Segundo a empresa, já atendeu mais de 1.200 famílias com mais de 500 cuidadoras, e seis em cada dez candidatas não passam no treinamento.',
  body: [
    'A Maasi, startup de cuidado infantil de Bangalore, captou ₹ 6 crore (cerca de US$ 630 mil) numa rodada pré-seed liderada pela Better Capital, com a Antler India, segundo o StartupTalky. A rodada saiu cerca de uma semana depois do lançamento público, em 20 de outubro. Os fundadores são Aashu Manchali, Gargi Pandey e Reshov Roy.',
    '## Como funciona',
    'A família escolhe o serviço, vê os perfis das cuidadoras, faz uma videochamada com as pré-selecionadas e confirma. A Maasi recruta, treina e faz o pagamento da babá: ela recebe a mensalidade da cuidadora e repassa o valor. A família paga ainda uma taxa de cadastro, devolvida se não houver contratação, e uma assinatura.',
    'O treinamento é gratuito para as candidatas e é dado por diretoras de pré-escola, enfermeiras e ex-instrutoras de comissários de bordo. A checagem de antecedentes é feita por empresas especializadas depois que a família escolhe a cuidadora.',
    '## Preços e números',
    'Segundo o site da empresa, citado pelo StartupTalky, a assinatura começa em ₹ 5.999 por mês. A babá diurna custa ₹ 15.660 por mês, e a que mora na casa, ₹ 24.600. Os números de famílias, cuidadoras e da fila de espera, de mais de 4 mil pais em cinco dias, são informados pela própria empresa. O dinheiro vai para recrutamento e treinamento, tecnologia e equipe em Bangalore.',
    '## Por que olhar para o Brasil',
    'Análise da redação: no Brasil, a contratação de babás costuma passar por indicação de conhecidos e por agências locais. O modelo indiano junta treinamento, checagem e intermediação do pagamento num serviço só, ideia que pode interessar a quem atua com cuidado infantil. Aqui, o desafio inclui as regras do trabalho doméstico, que precisariam ser estudadas antes de qualquer adaptação.'
  ],
  box: { type: 'facts', title: 'Maasi', rows: [['País', 'Índia (Bangalore)'], ['Captação', '₹ 6 crore, cerca de US$ 630 mil (pré-seed)'], ['Modelo', 'Treina, coloca e paga babás; a família assina'], ['Assinatura', 'A partir de ₹ 5.999 por mês'], ['Números da empresa', 'Mais de 1.200 famílias e 500 cuidadoras']] },
  sources: [['StartupTalky', U.maasiBabasTreinadasBangalore], ['Channel IAM', U.maasiBabasTreinadasBangalore25]] },

{ id: 'dubdub-feed-de-perguntas-india', cat: 'ideias', own: false, t: '2026-10-27T09', d: '27 out 2026', img: 'celular', src: 'StartupTalky', url: U.dubdubFeedDePerguntasIndia,
  title: 'Na Índia, o dubdub troca o feed de vídeos por perguntas e minijogos e capta US$ 1,3 milhão',
  sum: 'Lançado em março, o app tem cerca de 20 mil downloads e mais de 20 categorias, como críquete e Bollywood.',
  body: [
    'A cada deslizada, o usuário responde, adivinha ou resolve algo em vez de só assistir. A rodada seed foi liderada por 3one4 Capital, Antler e Stellaris. O app surgiu depois de a Índia proibir jogos online a dinheiro, em outubro de 2025. A empresa não divulgou como ganha dinheiro nem a taxa de retenção, segundo o StartupTalky.'
  ] },

{ id: 'bucketlistt-experiencias-viagem-india', cat: 'ideias', own: false, t: '2026-10-26T10', d: '26 out 2026', img: 'mundo', src: 'StartupTalky', url: U.bucketlisttExperienciasViagemIndia,
  title: 'Indiana Bucketlistt vende passeios e dá aos operadores um sistema próprio de reservas, e capta ₹ 7,6 crore',
  sum: 'As duas plataformas somam mais de ₹ 22,5 crore em reservas em 10 meses. A empresa começou por Rishikesh e planeja ir para Manali e Bir.',
  body: [
    'O Bucketlistt.com é o site em que o viajante acha e reserva experiências, como salto de paraquedas. O OkGhumo é o sistema que os operadores usam para controlar reservas, vagas e pagamentos, no lugar de telefone, WhatsApp e planilhas. Isso permite confirmar a reserva na hora. A rodada foi liderada pela Kairon Capital, segundo o StartupTalky.'
  ] },

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

{ id: 'cent-checkup-preventivo-ia', cat: 'ideias', own: false, t: '2026-10-27T07', d: '27 out 2026', img: 'ciencia', src: 'Inc42', url: U.incCent,
  title: 'Indiana Cent capta US$ 15 milhões para check-up completo em 2 horas, com laudo organizado por IA',
  sum: 'O pacote reúne ressonância de corpo inteiro, tomografia, ECG e outros exames por ₹27.500 e rastreia mais de 300 condições.',
  body: [
    'A empresa atua em Bengaluru, Mumbai e na região de Délhi e já fez 10 mil exames de corpo inteiro. A IA reúne os resultados em riscos por órgão.'
  ] },

/* ===================== NO BRASIL ===================== */
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

{ id: 'cripto-200-empresas-50-pedidos-abcripto', cat: 'brasil', own: false, t: '2026-10-31T11', d: '31 out 2026', img: 'mercado', src: 'InfoMoney', url: U.cripto200Empresas50PedidosAbcripto,
  title: 'ABcripto conta cerca de 200 empresas no setor de cripto, e estimativas do mercado apontam perto de 50 pedidos de licença',
  sum: 'O número de cerca de 200 empresas é da ABcripto; os cerca de 50 pedidos são estimativa do mercado, não dado oficial do Banco Central. Outros levantamentos contam de 63 a 67 nomes.',
  body: [
    'Cerca de 200 empresas atuavam no setor antes das novas regras, segundo Diego Perez, da ABcripto. Estimativas citadas pelo InfoMoney apontam perto de 50 pedidos de autorização. Fontes ouvidas pela reportagem dizem que manter uma empresa dentro das exigências do BC pode custar cerca de R$ 2 milhões por mês.',
    'Quem fez o pedido no prazo pode continuar funcionando até a decisão do Banco Central. A reportagem não traz data para essas decisões.'
  ] },

{ id: 'bancos-cripto-sem-autorizacao-6-novembro', cat: 'brasil', own: false, t: '2026-10-31T12', d: '31 out 2026', img: 'mercado', src: 'Economic News Brasil', url: U.bancosCriptoSemAutorizacao6Novembro,
  title: 'A partir de 6 de novembro, bancos e instituições de pagamento não podem operar com prestadoras de cripto sem autorização',
  sum: 'A restrição vem da Resolução 589 do Banco Central. Empresas que fizeram o pedido no prazo podem seguir em operação durante a análise, nas condições do BC.',
  body: [
    'A regra vale para instituições supervisionadas pelo Banco Central, que precisam checar a situação das empresas com as quais trabalham. Há exceções previstas na norma. Ela não proíbe a negociação de criptomoedas em geral.',
    'Fazer o pedido não equivale a ter licença: o prazo para pedir terminou em 30 de outubro, e a análise ainda não foi concluída.'
  ] },

{ id: 'black-friday-pix-42-mercado-pago', cat: 'brasil', own: false, t: '2026-10-30T15', d: '30 out 2026', img: 'celular', src: 'Finsiders Brasil', url: U.blackFridayPix42MercadoPago,
  title: 'Pix é o principal meio de pagamento de 42% dos consumidores nas compras de fim de ano, diz pesquisa do Mercado Pago',
  sum: 'A alta é de 13 pontos percentuais sobre 2025. O cartão de crédito segue na frente, com 46%. Em outra pesquisa, da Serasa, 86% dizem já ter desistido de promoção por medo de fraude.',
  body: [
    'O levantamento do Mercado Pago ouviu 3.345 usuários, e os dados foram divulgados em 28 de outubro. A pesquisa é da própria empresa de pagamentos. O débito caiu de 9% para 4,1% das menções em um ano, e o boleto, de 2% para 1,5%.',
    'Na pesquisa da Serasa Experian, 53% dizem temer ataques digitais na Black Friday, que será em 27 de novembro.'
  ] },

{ id: 'caixa-novo-app-teste-iphone', cat: 'brasil', own: false, t: '2026-10-28T09', d: '28 out 2026', img: 'celular', src: 'Canaltech', url: U.caixaNovoAppTesteIphone,
  title: 'Caixa leva ao iPhone o teste do novo app, que deve reunir serviços e os recursos do Caixa Tem',
  sum: 'O "Novo App Caixa" chegou em caráter experimental à App Store, depois de sair no Android em julho. O app antigo e o Caixa Tem seguem funcionando durante os testes.',
  body: [
    'A versão tem tela inicial organizada por blocos, caminhos mais curtos para Pix e pagamento de contas e um assistente de inteligência artificial. O primeiro acesso é validado por biometria, análise de comportamento e reconhecimento do aparelho.',
    'A meta é alcançar mais de um milhão de clientes com iPhone, segundo o Canaltech. A Caixa prevê integrar os principais produtos e serviços até o fim de 2026.'
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

{ id: 'golpe-auxilio-reconstrucao-1680', cat: 'brasil', own: false, t: '2026-10-30T14', d: '30 out 2026', img: 'celular', src: 'Agência Brasil', url: U.abAuxilio,
  title: 'Governo alerta para golpe que promete "Auxílio Reconstrução 2026" de R$ 1.680 por link',
  sum: 'A mensagem circula em apps de mensagens e redes sociais. O Ministério da Integração diz que esse benefício não existe.',
  body: [
    'As informações oficiais sobre o Auxílio Reconstrução estão só no site auxilioreconstrucao.dataprev.gov.br. A orientação é não clicar em links nem informar dados pessoais em páginas que não sejam oficiais, segundo a Agência Brasil.'
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

{ id: 'bndes-move-aplicativos-carro-novo', cat: 'brasil', own: false, t: '2026-10-29T12', d: '29 out 2026', img: 'mercado', src: 'Agência Brasil', url: U.abMove,
  title: 'Governo autoriza contrato de R$ 30 bilhões com o BNDES para financiar carro novo de motoristas de app e taxistas',
  sum: 'Podem pedir motoristas com cadastro ativo há pelo menos 1 ano e no mínimo 100 corridas no período, além de taxistas regulares. A meta é vender pelo menos 200 mil carros.',
  body: [
    'O despacho do Ministério da Fazenda saiu no Diário Oficial de 29 de outubro e faz parte do programa Move Brasil. O crédito é para carros novos que cumpram critérios de sustentabilidade. A Agência Brasil não informa juros, prazos nem quando as contratações começam.'
  ] },

{ id: 'pix-mei-golpe-cadastro', cat: 'brasil', own: false, t: '2026-10-29T13', d: '29 out 2026', img: 'celular', src: 'Agência Brasil', url: U.abPixMei,
  title: 'Governo alerta: cadastro do Pix MEI não começou, e mensagens com link são golpe',
  sum: 'O programa, de até R$ 5 mil por beneficiário, só começa em 2027. É falsa a informação de parcelas de R$ 400.',
  body: [
    'Segundo o ministro do Empreendedorismo, Paulo Pereira, as regras saem até o fim de 2026, e a prioridade será para mulheres empreendedoras e MEIs de menor faturamento. Dados pessoais e bancários só devem ser informados na página oficial do programa Prospera MEI.'
  ] },

];
