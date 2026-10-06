const U = {
  sen: 'https://www12.senado.leg.br/noticias/materias/2026/10/04/flavio-bolsonaro-e-lula-disputam-o-segundo-turno-das-eleicoes-para-presidente',
  cnnSen: 'https://www.cnnbrasil.com.br/eleicoes/divisao-bancada-senado/',
  abSen: 'https://agenciabrasil.ebc.com.br/politica/noticia/2026-10/veja-quem-sao-os-novos-senadores-e-como-fica-composicao-do-senado',
  abGov: 'https://agenciabrasil.ebc.com.br/politica/noticia/2026-10/veja-os-20-estados-onde-o-governador-foi-eleito-no-1o-turno',
  oTempoGov: 'https://www.otempo.com.br/eleicoes/2026/governadores/2026/10/4/veja-os-governadores-ja-eleitos-seis-estados-e-o-df-terao-segundo-turno',
  abUlt: 'https://agenciabrasil.ebc.com.br/ultimas',
  dn: 'https://www.democracynow.org/2026/10/5/headlines',
  fx: 'https://www.foreignexchanges.news/p/world-roundup-october-5-2026',
  pp: 'https://portaldopalestra.com.br/palmeiras-flamengo-lideranca-brasileirao-29a-30a-rodada-criterio-vitorias-desempate-conta/',
  band: 'https://www.band.com.br/esportes/futebol/campeonato-brasileiro-serie-a/flamengo-x-palmeiras-veja-os-jogos-restantes-dos-candidatos-ao-brasileirao',
  vavel: 'https://www.vavel.com/br/futebol-internacional/2026/10/03/1273819-brasil-goleia-a-india-por-4-a-0-em-calcuta-no-ultimo-amistoso-da-data-fifa.html',
  abSel: 'https://agenciabrasil.ebc.com.br/esportes/noticia/2026-09/ancelotti-anuncia-26-convocados-para-amistosos-da-selecao-brasileira',
  laNacion: 'https://www.lanacion.com.ar/deportes/futbol/asi-quedo-el-cuadro-de-semifinales-de-la-copa-libertadores-2026-nid17092026/',
  lance: 'https://www.lance.com.br/fluminense/semifinal-da-libertadores-quando-e-contra-quem-joga-o-fluminense.html',
  trib: 'https://tribunadejundiai.com.br/mais/esportes/copa-do-brasil-2026-veja-os-semifinalistas-datas-e-local-da-final/',
  tt: 'https://www.tomadadetempo.com.br/2026/10/04/formula-1-resultado-final-gp-do-bahrein-na-malasia-2026/',
  abFest: 'https://agenciabrasil.ebc.com.br/cultura/noticia/2026-10/com-110-filmes-ineditos-festival-do-rio-comeca-nesta-terca-feira',
  cnnMostra: 'https://www.cnnbrasil.com.br/pop/cinema/mostra-internacional-de-cinema-de-sao-paulo-revela-programacao-de-2026/',
  em: 'https://www.em.com.br/cultura/2026/10/7515223-bh-recebe-obras-da-bienal-inspiradas-em-conceicao-evaristo.html',
  exame: 'https://exame.com/pop/veja-o-calendario-de-shows-internacionais-no-brasil-ate-o-final-de-2026/',
  cnnMerc: 'https://www.cnnbrasil.com.br/economia/money/mercado/mercado-hoje-5-outubro-2026/',
  oTempoFocus: 'https://www.otempo.com.br/economia/2026/10/5/boletim-focus-aumenta-projecao-da-inflacao-de-2026-para-5-01',
  abPetro: 'https://agenciabrasil.ebc.com.br/economia/noticia/2026-10/petrobras-atinge-recorde-de-valor-de-mercado-apos-descoberta-no-amapa',
  trends: 'https://www.trendsce.com.br/2026/10/02/balanca-comercial-brasileira-superavit-setembro-2026/',
  correio: 'https://www.correiobraziliense.com.br/economia/2026/10/7513063-producao-industrial-recua-06-de-julho-para-agosto-aponta-ibge.html',
  abEco: 'https://agenciabrasil.ebc.com.br/economia',
  tele: 'https://telesintese.com.br/',
  cnnNobel: 'https://cnnbrasil.com.br/internacional/nobel-de-medicina-vai-para-tres-cientistas-por-avanco-na-neurociencia',
  openai: 'https://openai.com/index/devday-2026-recap/',
  je: 'https://jornaleconomico.sapo.pt/noticias/schneider-electric-compra-fabricante-de-software-ptc-por-22-mil-milhoes',
  portal6: 'https://portal6.com.br/2026/09/24/novas-regras-do-pix-comecam-a-valer-a-partir-de-1o-de-outubro-e-mudam-limite-de-transferencias/',
  jd1: 'https://www.jd1noticias.com/economia/2026/10/05/quem-recebe-salario-em-conta-salario-tera-nova-opcao-para-pagar-contas-pelo-pix.html'
};

const NEWS = [
/* ===================== NACIONAL ===================== */
{ id: 'segundo-turno-flavio-lula', cat: 'nacional', own: true, t: '2026-10-05T09', d: '5 out 2026', img: 'eleicao', read: 4,
  photo: 'fotos/segundo-turno-flavio-lula.webp', photoAlt: 'Flávio Bolsonaro e Lula lado a lado, em retratos de campanha', credit: 'Fotos: reprodução',
  title: 'Flávio Bolsonaro e Lula vão ao segundo turno em 25 de outubro',
  sum: 'Candidato do PL terminou o primeiro turno com 47,05% dos votos válidos, contra 45,14% do presidente. A diferença foi de cerca de 2,3 milhões de votos.',
  body: [
    'O segundo turno da eleição presidencial será disputado em 25 de outubro entre Flávio Bolsonaro (PL) e o presidente Luiz Inácio Lula da Silva (PT). Com a apuração concluída no domingo (4), Flávio terminou na frente, com 47,05% dos votos válidos, cerca de 56,1 milhões de votos. Lula somou 45,14%, ou 53,8 milhões.',
    'Nenhum dos dois passou da metade dos votos válidos, condição para vencer já no primeiro turno. A distância entre eles ficou abaixo de dois pontos percentuais.',
    'Os demais candidatos ficaram bem atrás. Augusto Cury (Avante) teve 2,89%, Renan Santos (Missão) 2,24% e Ronaldo Caiado (PSD) 2,18%. Outros sete nomes tiveram, cada um, menos de 0,3% dos votos válidos.',
    '## As chapas',
    'Flávio tem como candidato a vice Alfredo Gaspar (PL), ex-promotor de Justiça. Lula repete a parceria com Geraldo Alckmin (PSB), ex-governador de São Paulo.',
    '## Participação',
    'O comparecimento foi de 78,92% do eleitorado, e a abstenção, de 21,08%. Os votos nulos representaram 2,93% do total, e os brancos, 1,84%.',
    '## O que vem agora',
    'Nas próximas três semanas, as duas campanhas disputam os eleitores dos candidatos que ficaram pelo caminho, que somaram pouco mais de 7% dos votos válidos, e os mais de 20% que não foram às urnas.'
  ],
  box: { type: 'bars', title: 'Resultado do 1º turno', unit: '% dos votos válidos', max: 50, rows: [['Flávio Bolsonaro (PL)', 47.05], ['Lula (PT)', 45.14], ['Augusto Cury (Avante)', 2.89], ['Renan Santos (Missão)', 2.24], ['Ronaldo Caiado (PSD)', 2.18]], note: 'Fonte: TSE, via Agência Senado.' },
  sources: [['Agência Senado', U.sen]] },

{ id: 'comparecimento-primeiro-turno', cat: 'nacional', own: false, t: '2026-10-04T23', d: '4 out 2026', img: 'eleicao', src: 'Agência Senado', url: U.sen,
  photo: 'fotos/comparecimento-primeiro-turno.webp', photoAlt: 'Comparecimento de 78,92% no 1º turno', credit: 'Imagem ilustrativa',
  title: 'Comparecimento no primeiro turno foi de 78,92%',
  sum: 'A abstenção ficou em 21,08%. Votos nulos somaram 2,93% e brancos, 1,84%.',
  body: [
    'Pouco menos de oito em cada dez eleitores aptos foram às urnas no domingo (4), segundo os dados do TSE divulgados pela Agência Senado. A abstenção, de 21,08%, é um dos números que as campanhas presidenciais vão observar até o segundo turno.',
    'Entre quem votou, os nulos representaram 2,93% e os brancos, 1,84%. Esses votos não entram na conta dos votos válidos, que decidem a eleição.'
  ] },

{ id: 'pl-maior-bancada-senado', cat: 'nacional', own: true, t: '2026-10-05T08', d: '5 out 2026', img: 'congresso', read: 3,
  photo: 'fotos/pl-maior-bancada-senado.webp', photoAlt: 'PL elege maior bancada do Senado', credit: 'Imagem ilustrativa',
  title: 'PL elege 19 senadores e terá a maior bancada do Senado a partir de 2027',
  sum: 'Partido de Flávio Bolsonaro passa de 15 para 28 cadeiras. O PT terá 9 senadores e o MDB, 8.',
  body: [
    'O PL foi o grande vencedor da disputa pelo Senado neste domingo (4). O partido elegeu 19 dos 54 senadores escolhidos e, somando quem já tem mandato, terá 28 das 81 cadeiras a partir de fevereiro de 2027. Hoje a bancada tem 15 senadores.',
    'A eleição renovou dois terços da Casa, algo que acontece a cada oito anos. Os 54 eleitos se juntam aos 27 senadores com mandato até 2031.',
    '## Como fica a composição',
    'Depois do PL, as maiores bancadas serão as do PT, com 9 senadores, e do MDB, com 8. Republicanos e PP terão 6 cada. O novo desenho dá maioria folgada a partidos de direita e centro-direita.',
    'Entre os eleitos estão Rui Costa e Jaques Wagner (PT), pela Bahia, e Arthur Lira (PP), por Alagoas.'
  ],
  box: { type: 'bars', title: 'Bancadas no Senado a partir de 2027', unit: 'senadores', max: 30, rows: [['PL', 28], ['PT', 9], ['MDB', 8], ['Republicanos', 6], ['PP', 6], ['União', 5], ['PSD', 5], ['PSB', 4], ['Novo', 3], ['Podemos', 2], ['PSDB', 2], ['Rede', 1], ['PDT', 1], ['Sem partido', 1]], fmt: 'int', note: 'Fonte: CNN Brasil.' },
  sources: [['CNN Brasil', U.cnnSen], ['Agência Brasil', U.abSen]] },

{ id: 'tarcisio-reeleito-sao-paulo', cat: 'nacional', own: true, t: '2026-10-04T22', d: '4 out 2026', img: 'eleicao', read: 2,
  title: 'Tarcísio é reeleito em São Paulo com 62,8% dos votos válidos',
  sum: 'O governador do Republicanos venceu Fernando Haddad (PT) ainda no primeiro turno.',
  body: [
    'Tarcísio de Freitas (Republicanos) foi reeleito governador de São Paulo no domingo (4), sem precisar de segundo turno. Ele teve 62,8% dos votos válidos e derrotou o petista Fernando Haddad.',
    'Depois do resultado, Tarcísio prometeu mais entregas no próximo mandato, segundo a Agência Brasil.',
    'São Paulo foi um dos 20 estados que definiram o governador já na primeira votação. No Sudeste, Minas Gerais também resolveu a eleição no domingo, com a vitória de Cleitinho Azevedo, também do Republicanos.'
  ],
  sources: [['Agência Brasil', U.abGov]] },

{ id: 'vinte-estados-governador-primeiro-turno', cat: 'nacional', own: false, t: '2026-10-04T22', d: '4 out 2026', img: 'congresso', src: 'Agência Brasil', url: U.abGov,
  title: 'Vinte estados definem o governador já no primeiro turno',
  sum: 'Sete unidades da federação, entre elas o Rio de Janeiro e o Distrito Federal, terão nova votação em 25 de outubro.',
  body: [
    'O Nordeste concentrou o maior número de eleições resolvidas no domingo: oito estados. O PT reelegeu governadores na Bahia, no Ceará e no Piauí. Nos três estados do Sul, venceram candidatos do PL.',
    'Acre, Amazonas, Distrito Federal, Espírito Santo, Rio Grande do Norte, Rio de Janeiro e Tocantins voltam às urnas no segundo turno.'
  ] },

{ id: 'pl-vence-governos-do-sul', cat: 'nacional', own: false, t: '2026-10-04T21', d: '4 out 2026', img: 'eleicao', src: 'Agência Brasil', url: U.abGov,
  title: 'PL vence nos três estados do Sul: Moro, Zucco e Jorginho Mello',
  sum: 'Sergio Moro foi eleito no Paraná, Luciano Zucco no Rio Grande do Sul e Jorginho Mello em Santa Catarina.',
  body: [
    'O partido de Flávio Bolsonaro levou os governos de toda a região Sul ainda no primeiro turno. No Paraná, o senador Sergio Moro foi eleito governador. No Rio Grande do Sul, a vitória foi de Luciano Zucco, e em Santa Catarina, de Jorginho Mello.',
    'No país, o PL também elegeu governadores em Rondônia e Roraima.'
  ] },

{ id: 'cleitinho-eleito-minas', cat: 'nacional', own: false, t: '2026-10-04T21', d: '4 out 2026', img: 'eleicao', src: 'Agência Brasil', url: U.abGov,
  title: 'Cleitinho Azevedo é eleito governador de Minas Gerais',
  sum: 'O candidato do Republicanos derrotou Patrus Ananias (PT) no primeiro turno.',
  body: [
    'Minas Gerais, segundo maior colégio eleitoral do país, definiu o novo governador no domingo (4). Cleitinho Azevedo (Republicanos) venceu o petista Patrus Ananias sem necessidade de segundo turno.',
    'Com Tarcísio em São Paulo, o Republicanos passa a governar os dois maiores estados do Sudeste.'
  ] },

{ id: 'rio-segundo-turno-ruas-paes', cat: 'nacional', own: true, t: '2026-10-05T07', d: '5 out 2026', img: 'congresso', read: 3,
  title: 'Rio terá segundo turno entre Douglas Ruas e Eduardo Paes',
  sum: 'O candidato do PL teve 49,27% dos votos válidos; o ex-prefeito do PSD, 42,76%. Outros seis governos serão decididos em 25 de outubro.',
  body: [
    'A disputa pelo governo do Rio de Janeiro vai para o segundo turno. Douglas Ruas (PL) ficou a menos de um ponto de vencer no domingo (4), com 49,27% dos votos válidos. Eduardo Paes (PSD), ex-prefeito da capital, teve 42,76%.',
    'O Rio é um dos sete lugares onde a eleição para governador continua. Os confrontos mais apertados estão no Rio Grande do Norte, onde menos de um ponto separa os dois primeiros, e no Tocantins.',
    'No Distrito Federal, Celina Leão (PP) terminou com 49,93% e também ficou muito perto de vencer no primeiro turno.'
  ],
  box: { type: 'table', title: 'Onde haverá 2º turno para governador', head: ['Estado', '1º colocado', '2º colocado'], rows: [
    ['AC', 'Mailza Assis (PP) 49,76%', 'Alan Rick (Republicanos) 32,27%'],
    ['AM', 'Omar Aziz (PSD) 40,57%', 'Maria do Carmo (PL) 24,53%'],
    ['DF', 'Celina Leão (PP) 49,93%', 'Leandro Grass (PT) 34,47%'],
    ['ES', 'Lorenzo Pazolini (Republicanos) 49,65%', 'Ricardo Ferraço (MDB) 34,06%'],
    ['RJ', 'Douglas Ruas (PL) 49,27%', 'Eduardo Paes (PSD) 42,76%'],
    ['RN', 'Allyson (União) 36,94%', 'Cadu de Lula (PT) 36,16%'],
    ['TO', 'Professora Dorinha (União) 45,52%', 'Vicentinho Júnior (PSDB) 43,94%']
  ], note: 'Fonte: O Tempo. Percentuais dos votos válidos.' },
  sources: [['O Tempo', U.oTempoGov]] },

{ id: 'espirito-santo-pazolini-ferraco', cat: 'nacional', own: false, t: '2026-10-04T22', d: '4 out 2026', img: 'eleicao', src: 'O Tempo', url: U.oTempoGov,
  title: 'Espírito Santo terá segundo turno entre Pazolini e Ferraço',
  sum: 'Lorenzo Pazolini (Republicanos) teve 49,65% dos votos válidos, contra 34,06% de Ricardo Ferraço (MDB).',
  body: [
    'Pazolini terminou o primeiro turno muito perto da maioria absoluta, mas a decisão ficou para 25 de outubro. Ricardo Ferraço, do MDB, ficou em segundo lugar, cerca de 15 pontos atrás.',
    'O estado é um dos sete com segundo turno para governador nesta eleição.'
  ] },

{ id: 'tse-sem-alertas-interferencia', cat: 'nacional', own: false, t: '2026-10-04T23', d: '4 out 2026', img: 'congresso', src: 'Agência Brasil', url: U.abUlt,
  title: 'TSE diz que não houve alertas de interferência na eleição',
  sum: 'O tribunal relatou congestionamento no sistema de dados durante a apuração e quer reduzir a abstenção no segundo turno.',
  body: [
    'Na noite de domingo (4), a presidência do TSE afirmou que não recebeu alertas de interferência no processo eleitoral. O tribunal informou também que o sistema de dados enfrentou congestionamento durante a apuração.',
    'Para o segundo turno, a Justiça Eleitoral diz trabalhar em ações para diminuir a abstenção, que passou de 21% no primeiro turno.'
  ] },

/* ===================== INTERNACIONAL ===================== */
{ id: 'ira-estreito-de-ormuz-fechado', cat: 'internacional', own: true, t: '2026-10-05T12', d: '5 out 2026', img: 'mundo', read: 3,
  title: 'Irã diz que o Estreito de Ormuz seguirá fechado',
  sum: 'Teerã condiciona a reabertura ao fim das guerras dos EUA na região, à suspensão de sanções e ao reconhecimento do direito de enriquecer urânio.',
  body: [
    'O governo do Irã afirmou nesta segunda-feira (5) que o Estreito de Ormuz continuará fechado à navegação. A passagem liga o Golfo Pérsico ao mar aberto e é uma das principais rotas do petróleo exportado pelo Oriente Médio.',
    'Para reabrir o estreito, Teerã lista três condições: o fim das guerras conduzidas pelos Estados Unidos na região, a retirada das sanções e o reconhecimento do direito iraniano de enriquecer urânio.',
    '## Tensão em várias frentes',
    'O anúncio veio no mesmo dia em que os EUA retiraram bombardeiros de uma base no Reino Unido por causa de alertas de um possível ataque ligado ao Irã. No Iêmen, forças apoiadas pela Arábia Saudita anunciaram uma ofensiva contra os houthis, grupo aliado de Teerã.'
  ],
  sources: [['Democracy Now!', U.dn]] },

{ id: 'eua-retiram-bombardeiros-fairford', cat: 'internacional', own: false, t: '2026-10-05T11', d: '5 out 2026', img: 'mundo', src: 'Democracy Now!', url: U.dn,
  title: 'EUA retiram bombardeiros B-1 de base no Reino Unido',
  sum: 'Os 12 aviões deixaram a RAF Fairford depois de informações sobre um possível plano de ataque ligado ao Irã.',
  body: [
    'Todos os 12 bombardeiros B-1 americanos estacionados na base aérea britânica de Fairford foram levados para outro lugar. A decisão seguiu alertas de inteligência sobre um possível atentado contra a base, atribuído a grupos apoiados pelo Irã.',
    'A medida ocorre em um momento de forte tensão entre Washington e Teerã, que mantém fechado o Estreito de Ormuz.'
  ] },

{ id: 'iemen-ofensiva-contra-houthis', cat: 'internacional', own: false, t: '2026-10-05T10', d: '5 out 2026', img: 'mundo', src: 'Democracy Now!', url: U.dn,
  title: 'Forças apoiadas pela Arábia Saudita lançam ofensiva contra os houthis no Iêmen',
  sum: 'O objetivo declarado é retomar o território controlado pelo grupo, incluindo a capital, Sanaa.',
  body: [
    'As forças iemenitas alinhadas à Arábia Saudita anunciaram uma grande operação militar contra os houthis, movimento apoiado pelo Irã que controla parte do país.',
    'A meta é recuperar as áreas sob domínio do grupo, entre elas a capital, Sanaa.'
  ] },

{ id: 'ataque-aereo-cidade-de-gaza', cat: 'internacional', own: false, t: '2026-10-05T09', d: '5 out 2026', img: 'mundo', src: 'Democracy Now!', url: U.dn,
  title: 'Ataque aéreo na Cidade de Gaza mata ao menos cinco pessoas',
  sum: 'Um prédio residencial foi atingido. Quatro das vítimas eram mulheres.',
  body: [
    'Um bombardeio israelense contra um prédio de apartamentos na Cidade de Gaza matou pelo menos cinco palestinos, quatro deles mulheres.',
    'Segundo a reportagem, cerca de 1.400 palestinos morreram desde o cessar-fogo de outubro do ano passado.'
  ] },

{ id: 'israel-controla-60-por-cento-de-gaza', cat: 'internacional', own: false, t: '2026-10-05T08', d: '5 out 2026', img: 'mundo', src: 'Foreign Exchanges', url: U.fx,
  title: 'Análise de satélite indica que Israel controla cerca de 60% de Gaza',
  sum: 'A fatia supera o limite previsto no acordo de cessar-fogo, de pouco mais da metade do território.',
  body: [
    'Uma análise de imagens de satélite feita pelo New York Times e citada pelo boletim Foreign Exchanges aponta que o Exército israelense ocupa aproximadamente 60% da Faixa de Gaza.',
    'O acordo de cessar-fogo previa um controle de pouco mais da metade do território. As fortificações em construção, segundo a análise, não indicam retirada próxima.'
  ] },

{ id: 'espanha-protestos-moradia', cat: 'internacional', own: true, t: '2026-10-05T07', d: '5 out 2026', img: 'protesto', read: 2,
  title: 'Dezenas de milhares protestam na Espanha contra a crise de moradia',
  sum: 'A contagem oficial passou de 70 mil pessoas. Os organizadores falam em 500 mil em Madri e outras cidades.',
  body: [
    'Manifestantes tomaram as ruas de Madri e de outras cidades espanholas para cobrar medidas contra os despejos e a falta de imóveis acessíveis. As autoridades contaram mais de 70 mil pessoas; os organizadores calcularam 500 mil.',
    'Os atos vieram depois que propostas de reforma na área de habitação foram rejeitadas nas urnas, segundo o Democracy Now!.',
    'O preço da moradia se tornou um dos temas centrais da política espanhola, com protestos recorrentes nas grandes cidades.'
  ],
  sources: [['Democracy Now!', U.dn]] },

{ id: 'franca-estudantes-escolas-fechadas', cat: 'internacional', own: false, t: '2026-10-05T06', d: '5 out 2026', img: 'protesto', src: 'Democracy Now!', url: U.dn,
  title: 'Protestos de estudantes fecham cerca de 500 escolas na França',
  sum: 'Os alunos reclamam da falta de professores, de salas lotadas e de prédios precários.',
  body: [
    'Milhares de estudantes franceses saíram às ruas contra as condições das escolas públicas. Cerca de 500 unidades fecharam durante os protestos.',
    'Segundo a reportagem, mais de 5 mil pessoas foram detidas, a maioria menores de idade.'
  ] },

{ id: 'india-movimento-das-baratas', cat: 'internacional', own: false, t: '2026-10-05T05', d: '5 out 2026', img: 'protesto', src: 'Democracy Now!', url: U.dn,
  title: 'Jovens indianos voltam às ruas e pedem saída do chefe da comissão eleitoral',
  sum: 'O chamado Movimento das Baratas acusa expurgos nos cadastros de eleitores. Mais de 700 pessoas foram detidas em Délhi.',
  body: [
    'Um movimento liderado por jovens na Índia retomou os protestos contra o comissário-chefe eleitoral do país, Gyanesh Kumar. O grupo o acusa de retirar eleitores dos cadastros de forma a favorecer o BJP, partido do primeiro-ministro Narendra Modi.',
    'Mais de 700 manifestantes foram detidos em Délhi.'
  ] },

{ id: 'juiza-bloqueia-muro-big-bend', cat: 'internacional', own: false, t: '2026-10-05T04', d: '5 out 2026', img: 'mundo', src: 'Democracy Now!', url: U.dn,
  title: 'Juíza bloqueia muro na fronteira dentro de parque nacional no Texas',
  sum: 'A decisão provisória interrompe a expansão da barreira no Parque Nacional Big Bend.',
  body: [
    'A juíza federal Kathleen Cardone concedeu uma liminar que suspende novas obras do muro na fronteira entre EUA e México dentro do Parque Nacional Big Bend, no Texas.',
    'Na decisão, ela indicou que os argumentos constitucionais dos autores da ação têm boa chance de prevalecer.'
  ] },

{ id: 'partido-verde-britanico-sionismo', cat: 'internacional', own: false, t: '2026-10-05T03', d: '5 out 2026', img: 'mundo', src: 'Democracy Now!', url: U.dn,
  title: 'Partido Verde britânico aprova moção que classifica o sionismo como racismo',
  sum: 'O texto também pede embargo de armas a Israel e defende um único Estado democrático na Palestina histórica.',
  body: [
    'O Partido Verde do Reino Unido aprovou uma resolução que define o sionismo como um projeto político etnonacionalista e uma forma de racismo.',
    'A moção defende um embargo de armas a Israel e a criação de um Estado democrático único no território da Palestina histórica.'
  ] },

/* ===================== ESPORTES ===================== */
{ id: 'brasileirao-volta-flamengo-lider', cat: 'esportes', own: true, t: '2026-10-06T06', d: '6 out 2026', img: 'esportes', read: 3,
  title: 'Brasileirão volta na quinta com Flamengo três pontos à frente do Palmeiras',
  sum: 'O rubro-negro lidera com 60 pontos após 28 rodadas. A vantagem no número de vitórias protege a liderança na próxima rodada.',
  body: [
    'Depois de uma pausa no calendário, o Campeonato Brasileiro volta a ser disputado na quinta-feira (8). O Flamengo retoma a competição na liderança, com 60 pontos, três a mais que o Palmeiras, segundo colocado com 57.',
    'A vantagem do time carioca vai além dos pontos. O Flamengo soma 18 vitórias, contra 16 do rival. No Brasileirão, o número de vitórias é o primeiro critério de desempate, antes do saldo de gols.',
    '## Por que a liderança não muda na 29ª rodada',
    'Na volta do campeonato, o Palmeiras enfrenta o Bahia, e o Flamengo encara o Santos. Mesmo que o time paulista vença e o carioca perca, os dois ficariam com 60 pontos, e o Flamengo seguiria em primeiro pelas duas vitórias a mais.',
    '## A primeira chance do Palmeiras',
    'A troca na ponta só passa a ser possível na 30ª rodada. Para isso, o Palmeiras precisa vencer os próximos dois jogos, contra Bahia e Corinthians, e torcer para que o Flamengo não vença nenhuma de suas duas partidas.',
    'A disputa ainda reserva dois confrontos diretos na reta final: na 36ª rodada, com mando do Palmeiras, e na 37ª.'
  ],
  box: { type: 'table', title: 'Topo da tabela após 28 rodadas', head: ['#', 'Clube', 'Pontos', 'Vitórias'], rows: [['1', 'Flamengo', '60', '18'], ['2', 'Palmeiras', '57', '16']], note: 'Fonte: Portal do Palestra, 2 out 2026.' },
  sources: [['Portal do Palestra', U.pp], ['Band', U.band]] },

{ id: 'brasil-goleia-india-calcuta', cat: 'esportes', own: true, t: '2026-10-03T14', d: '3 out 2026', img: 'esportes', read: 2,
  title: 'Brasil goleia a Índia por 4 a 0 em Calcutá',
  sum: 'Estêvão e Pedro marcaram no primeiro tempo. Samuel Lino fez dois gols na etapa final.',
  body: [
    'A Seleção fechou a primeira Data Fifa depois da Copa do Mundo com uma goleada sobre a Índia, no Salt Lake Stadium, em Calcutá. Foi o primeiro jogo da história entre as duas seleções.',
    'Estêvão abriu o placar aos 28 minutos, e Pedro ampliou aos 42. No segundo tempo, Samuel Lino marcou aos 13 e nos acréscimos. O goleiro indiano Gurpreet Singh Sandhu, que falhou nos dois primeiros gols, foi substituído no intervalo.',
    '## Muitas mudanças',
    'Carlo Ancelotti fez dez substituições e só manteve em campo o goleiro Pedro Morisco, que estreou pela seleção principal. O zagueiro Arthur Dias também fez sua primeira partida. Endrick entrou, mas não marcou.',
    'Em novembro, o Brasil enfrenta Japão e Singapura em novos amistosos.'
  ],
  sources: [['Vavel Brasil', U.vavel]] },

{ id: 'ancelotti-renova-selecao', cat: 'esportes', own: false, t: '2026-09-15T12', d: 'set 2026', img: 'esportes', src: 'Agência Brasil', url: U.abSel,
  title: 'Ancelotti renova a Seleção com oito estreantes na primeira lista após a Copa',
  sum: 'A convocação veio depois da eliminação para a Noruega no Mundial. Os 26 jogadores enfrentaram Austrália e Índia.',
  body: [
    'Na primeira convocação depois da queda precoce na Copa do Mundo de 2026, eliminada pela Noruega, a Seleção ganhou cara nova. Entre os 26 chamados, oito nunca tinham sido convocados, como Samuel Lino, do Flamengo, e Vitor Reis, do Manchester City.',
    'Ancelotti disse que a lista mistura jogadores que estiveram no Mundial com nomes da próxima geração, pensando na Copa América de 2028 e na Copa de 2030.'
  ] },

{ id: 'selecao-japao-singapura-novembro', cat: 'esportes', own: false, t: '2026-10-03T13', d: '3 out 2026', img: 'esportes', src: 'Vavel Brasil', url: U.vavel,
  title: 'Seleção enfrenta Japão e Singapura na próxima Data Fifa',
  sum: 'Os amistosos de novembro dão sequência à renovação do grupo de Ancelotti.',
  body: [
    'Depois de duas partidas contra a Austrália e da goleada sobre a Índia, a Seleção volta a campo em novembro, contra Japão e Singapura.'
  ] },

{ id: 'libertadores-semifinais-tres-brasileiros', cat: 'esportes', own: true, t: '2026-10-05T15', d: '5 out 2026', img: 'esportes', read: 2,
  title: 'Libertadores chega às semifinais com três brasileiros',
  sum: 'O Flamengo enfrenta o Estudiantes, e Fluminense e Palmeiras fazem o duelo brasileiro. Os jogos serão entre 13 e 21 de outubro.',
  body: [
    'Três dos quatro semifinalistas da Copa Libertadores são brasileiros. O Flamengo encara o Estudiantes de La Plata, da Argentina, e Fluminense e Palmeiras se enfrentam do outro lado da chave, o que garante um time do Brasil na decisão.',
    'Os jogos de ida estão marcados para 13 e 14 de outubro, e os de volta, para 20 e 21. A Conmebol ainda vai definir horários e mandos.',
    '## Final em Montevidéu',
    'A decisão será em jogo único no sábado, 28 de novembro, no Estádio Centenário, em Montevidéu.',
    'O Fluminense chegou à semifinal depois de eliminar o Platense, da Argentina, por 3 a 2 no placar agregado.'
  ],
  box: { type: 'table', title: 'Semifinais', head: ['Confronto', 'Ida', 'Volta'], rows: [['Estudiantes x Flamengo', '13 ou 14 out', '20 ou 21 out'], ['Fluminense x Palmeiras', '13 ou 14 out', '20 ou 21 out']], note: 'Fontes: La Nación e Lance!. Final em 28 de novembro, no Centenário.' },
  sources: [['La Nación', U.laNacion], ['Lance!', U.lance]] },

{ id: 'fluminense-elimina-platense', cat: 'esportes', own: false, t: '2026-09-17T12', d: 'set 2026', img: 'esportes', src: 'Lance!', url: U.lance,
  title: 'Fluminense chega à semifinal depois de eliminar o Platense',
  sum: 'O Tricolor venceu por 2 a 0 em casa e perdeu por 2 a 1 fora, somando 3 a 2 no agregado.',
  body: [
    'O Fluminense garantiu vaga entre os quatro melhores da Libertadores com a vitória por 2 a 0 no Rio e a derrota por 2 a 1 na Argentina.',
    'Na semifinal, o adversário é o Palmeiras.'
  ] },

{ id: 'copa-do-brasil-final-jogo-unico', cat: 'esportes', own: false, t: '2026-09-20T12', d: 'set 2026', img: 'esportes', src: 'Tribuna de Jundiaí', url: U.trib,
  title: 'Copa do Brasil terá final em jogo único em 6 de dezembro',
  sum: 'As semifinais têm Palmeiras x Vasco e Atlético-MG x Grêmio. Brasília é a favorita para receber a decisão.',
  body: [
    'As semifinais da Copa do Brasil serão disputadas em 1º e 8 de novembro, com mandos definidos por sorteio da CBF. A final, em jogo único, está marcada para 6 de dezembro.',
    'O local ainda não foi confirmado, mas o Mané Garrincha, em Brasília, é o mais cotado. O campeão pode receber até R$ 96 milhões em premiação.'
  ] },

{ id: 'verstappen-vence-gp-bahrein-sepang', cat: 'esportes', own: false, t: '2026-10-04T12', d: '4 out 2026', img: 'pista', src: 'Tomada de Tempo', url: U.tt,
  title: 'Verstappen vence o GP do Bahrein, disputado em Sepang',
  sum: 'Antonelli e Hamilton completaram o pódio. Gabriel Bortoleto terminou em 18º depois de uma punição.',
  body: [
    'Max Verstappen largou na pole e venceu a etapa do Bahrein da Fórmula 1, transferida para o circuito de Sepang, na Malásia. Kimi Antonelli, da Mercedes, chegou 2,3 segundos atrás, e Lewis Hamilton, da Ferrari, fechou o pódio.',
    'O brasileiro Gabriel Bortoleto recebeu 10 segundos de punição por um toque em Carlos Sainz e terminou em 18º.'
  ] },

{ id: 'antonelli-lidera-formula-1', cat: 'esportes', own: false, t: '2026-10-04T11', d: '4 out 2026', img: 'pista', src: 'Tomada de Tempo', url: U.tt,
  title: 'Antonelli lidera a Fórmula 1 com 84 pontos de vantagem',
  sum: 'O piloto da Mercedes soma 320 pontos, contra 236 de George Russell e 214 de Lewis Hamilton.',
  body: [
    'Com o segundo lugar em Sepang, o italiano Kimi Antonelli manteve a liderança do campeonato com folga. O companheiro de equipe George Russell é o segundo, e Lewis Hamilton, o terceiro.',
    'A vantagem de 84 pontos deixa Antonelli em posição confortável na reta final da temporada.'
  ] },

{ id: 'palmeiras-nao-assume-lideranca-29-rodada', cat: 'esportes', own: false, t: '2026-10-02T12', d: '2 out 2026', img: 'esportes', src: 'Portal do Palestra', url: U.pp,
  title: 'Por que o Palmeiras não pode reassumir a liderança na 29ª rodada',
  sum: 'Mesmo empatando em pontos, o Flamengo levaria vantagem no número de vitórias, primeiro critério de desempate.',
  body: [
    'Se o Palmeiras vencer o Bahia e o Flamengo perder para o Santos, os dois somarão 60 pontos. Ainda assim, o rubro-negro continuaria líder, porque tem duas vitórias a mais.',
    'Pelo regulamento, o número de vitórias desempata antes do saldo de gols.'
  ] },

/* ===================== CULTURA ===================== */
{ id: 'festival-do-rio-110-filmes-ineditos', cat: 'cultura', own: true, t: '2026-10-06T05', d: '6 out 2026', img: 'cultura', read: 3,
  title: 'Festival do Rio segue até domingo com 110 filmes brasileiros inéditos',
  sum: 'A 28ª edição reúne 359 títulos entre longas, curtas e séries, com premiados de Cannes, Berlim e Veneza.',
  body: [
    'O Festival do Rio entra na reta final de sua 28ª edição. Desde 1º de outubro, a mostra exibe 359 títulos, entre longas, curtas e séries, e segue em cartaz até o domingo (11).',
    'O cinema nacional ocupa lugar central na programação. A Première Brasil, principal vitrine de produções brasileiras do evento, reúne 110 filmes inéditos. Entre os selecionados estão "Funk", de Aly Muritiba, "Alucinação", de Marcos Caetano, Renato Terra e Leo Caetano, e "Elza", de Eryk Rocha.',
    '## Abertura espanhola',
    'A sessão de abertura, no Cine Odeon, exibiu "La Bola Negra", dos espanhóis Javier Calvo e Javier Ambrossi, premiados pela direção em Cannes neste ano.',
    '## Premiados do circuito internacional',
    'A seleção estrangeira traz filmes que se destacaram nos grandes festivais do ano, como "Cartas Amarelas", vencedor do Urso de Ouro em Berlim, e "Um Pequeno Bom Soldado", premiado pelo roteiro em Veneza.',
    'Em paralelo às sessões, o RioMarket reúne profissionais do audiovisual no Armazém da Utopia, na região portuária.'
  ],
  box: { type: 'facts', title: 'Serviço', rows: [['Quando', '1º a 11 de outubro'], ['Onde', 'Salas de cinema do Rio de Janeiro'], ['Programação', 'festivaldorio.com.br']] },
  sources: [['Agência Brasil', U.abFest]] },

{ id: 'mostra-sao-paulo-50-edicao', cat: 'cultura', own: true, t: '2026-10-06T04', d: '6 out 2026', img: 'cultura', read: 3,
  title: 'Mostra de São Paulo chega à 50ª edição com 380 filmes de 93 países',
  sum: 'O evento vai de 15 a 29 de outubro em 57 espaços. A abertura será com "Tigre de Papel", de James Gray.',
  body: [
    'A Mostra Internacional de Cinema em São Paulo comemora 50 edições com uma programação de 380 títulos, entre longas, curtas e séries, vindos de 93 países. As sessões ocupam 57 espaços da cidade entre 15 e 29 de outubro.',
    'A noite de abertura, em 14 de outubro, na Sala São Paulo, terá "Tigre de Papel", de James Gray, que esteve na competição de Cannes. O diretor vai estar presente, e a sessão inclui um curta de Kleber Mendonça Filho.',
    '## Premiados do ano',
    'A seleção traz "Fjord", de Cristian Mungiu, vencedor da Palma de Ouro, e "Mulher Desconhecida", de May el-Toukhy, Leão de Ouro em Veneza. Também estão no programa filmes de Lee Chang-dong e Hirokazu Kore-eda, um documentário de Alex Gibney sobre Elon Musk e a animação adulta "Ray Gunn", de Brad Bird.',
    '## Homenagens',
    'O produtor português Paulo Branco recebe o Prêmio Leon Cakoff e ganha uma retrospectiva. O diretor indiano S.S. Rajamouli apresenta uma sessão especial de "RRR".'
  ],
  box: { type: 'facts', title: 'Serviço', rows: [['Quando', '15 a 29 de outubro'], ['Abertura', '14 de outubro, Sala São Paulo'], ['Ingressos', 'R$ 13 a R$ 32; pacotes a partir de R$ 160']] },
  sources: [['CNN Brasil', U.cnnMostra]] },

{ id: 'paulo-branco-premio-leon-cakoff', cat: 'cultura', own: false, t: '2026-10-01T10', d: '', img: 'cultura', src: 'CNN Brasil', url: U.cnnMostra,
  title: 'Paulo Branco recebe o Prêmio Leon Cakoff na Mostra',
  sum: 'O produtor português ganha retrospectiva. S.S. Rajamouli apresenta sessão especial de "RRR".',
  body: [
    'A 50ª Mostra de São Paulo vai homenagear o produtor português Paulo Branco com o prêmio que leva o nome do criador do evento e com uma retrospectiva de sua carreira.',
    'Outra presença confirmada é a do cineasta indiano S.S. Rajamouli, que apresenta "RRR: Revolta, Rebelião, Revolução", vencedor do Oscar de canção original.'
  ] },

{ id: 'la-bola-negra-abre-festival-do-rio', cat: 'cultura', own: false, t: '2026-10-01T09', d: '1 out 2026', img: 'cultura', src: 'Agência Brasil', url: U.abFest,
  title: '"La Bola Negra" abre o Festival do Rio no Cine Odeon',
  sum: 'Os diretores Javier Calvo e Javier Ambrossi venceram o prêmio de direção em Cannes neste ano.',
  body: [
    'O longa espanhol foi escolhido para a sessão de abertura da 28ª edição do festival, no tradicional Cine Odeon, na Cinelândia.',
    'A dupla de diretores chega ao Rio depois de ganhar o prêmio de melhor direção em Cannes.'
  ] },

{ id: 'premiere-brasil-destaques', cat: 'cultura', own: false, t: '2026-10-01T08', d: '1 out 2026', img: 'cultura', src: 'Agência Brasil', url: U.abFest,
  title: '"Funk", "Elza" e "Alucinação" estão entre os destaques da Première Brasil',
  sum: 'A mostra é a principal vitrine do cinema nacional dentro do Festival do Rio.',
  body: [
    'A Première Brasil reúne 110 produções brasileiras inéditas. Entre elas, "Funk", de Aly Muritiba, "Elza", de Eryk Rocha, e "Alucinação", de Marcos Caetano, Renato Terra e Leo Caetano.',
    'A seleção é considerada a mais importante janela de lançamento de filmes nacionais no festival.'
  ] },

{ id: 'karim-ainouz-rosebush-pruning', cat: 'cultura', own: false, t: '2026-10-03T10', d: '3 out 2026', img: 'cultura', src: 'Agência Brasil', url: U.abFest,
  title: 'Karim Aïnouz apresenta "Rosebush Pruning" no Rio',
  sum: 'O filme acompanha uma família rica e trata de intimidade, privilégio e violência.',
  body: [
    'O cineasta cearense Karim Aïnouz esteve no Festival do Rio para a sessão de seu novo longa, em 3 de outubro.',
    'A história se passa dentro de uma família abastada e explora as relações de poder entre seus integrantes.'
  ] },

{ id: 'riomarket-tv-3-microdramas', cat: 'cultura', own: false, t: '2026-10-01T07', d: '1 out 2026', img: 'palco', src: 'Agência Brasil', url: U.abFest,
  title: 'RioMarket debate TV 3.0 e microdramas',
  sum: 'O braço de negócios do Festival do Rio reúne profissionais do audiovisual no Armazém da Utopia.',
  body: [
    'Durante o festival, o RioMarket ocupa o Armazém da Utopia, na região portuária, com encontros entre produtores, distribuidores e plataformas.',
    'Entre os temas em discussão estão a TV 3.0, nova geração da TV aberta no Brasil, e os microdramas, séries de episódios curtos pensadas para o celular.'
  ] },

{ id: 'bienal-sao-paulo-belo-horizonte', cat: 'cultura', own: true, t: '2026-10-02T10', d: 'out 2026', img: 'arte', read: 2,
  title: 'Bienal de São Paulo chega a Belo Horizonte com 80 obras e entrada gratuita',
  sum: 'A mostra itinerante ocupa o Palácio das Artes até 6 de dezembro, com tema inspirado em um poema de Conceição Evaristo.',
  body: [
    'A itinerância da 36ª Bienal de São Paulo está em Belo Horizonte. O Palácio das Artes recebe cerca de 80 obras de 21 artistas, entre pintura, escultura, fotografia, instalação, vídeo e performance.',
    'Entre os participantes estão Iggor Cavalera, ex-baterista do Sepultura, a pintora Maria Auxiliadora e projetos feitos em parceria com comunidades xavante.',
    '## Poesia como ponto de partida',
    'O título da edição, "Nem todo viandante anda estradas", vem do poema "Da calma e do silêncio", de Conceição Evaristo. Os curadores Alya Sebti e Leonardo Matsuhei escolheram trabalhos sobre pertencimento, memória, cuidado e transformação.',
    'A passagem por BH faz parte da maior itinerância já feita pela Bienal, com 15 cidades brasileiras e destinos no exterior.'
  ],
  box: { type: 'facts', title: 'Serviço', rows: [['Onde', 'Palácio das Artes, Av. Afonso Pena, 1.537, Centro'], ['Quando', 'Até 6 de dezembro'], ['Horários', 'Terça a sábado, 9h30 às 21h; domingo, 17h às 21h'], ['Entrada', 'Gratuita']] },
  sources: [['Estado de Minas', U.em]] },

{ id: 'bts-tres-shows-morumbis', cat: 'cultura', own: false, t: '2026-09-30T10', d: '', img: 'palco', src: 'Exame', url: U.exame,
  title: 'BTS faz três shows no MorumBIS no fim de outubro',
  sum: 'O grupo sul-coreano traz a turnê "Arirang" a São Paulo nos dias 28, 30 e 31.',
  body: [
    'O BTS volta ao Brasil com três apresentações no estádio do São Paulo. A turnê mundial leva o nome "Arirang".',
    'Os shows estão entre os mais aguardados do calendário de grandes eventos do segundo semestre.'
  ] },

{ id: 'robbie-williams-volta-ao-brasil', cat: 'cultura', own: false, t: '2026-09-30T09', d: '', img: 'palco', src: 'Exame', url: U.exame,
  title: 'Robbie Williams volta ao Brasil depois de 20 anos',
  sum: 'O britânico se apresenta em 13 de outubro no Nubank Parque. Zayn toca no mesmo local no dia 10.',
  body: [
    'Robbie Williams traz a turnê "BRITPOP" a São Paulo em 13 de outubro. É a primeira passagem do cantor pelo país em duas décadas.',
    'Três dias antes, em 10 de outubro, o ex-One Direction Zayn se apresenta no mesmo espaço.'
  ] },

/* ===================== ECONOMIA ===================== */
{ id: 'ibovespa-supera-200-mil-pontos', cat: 'economia', own: true, t: '2026-10-05T18', d: '5 out 2026', img: 'mercado', read: 3,
  title: 'Ibovespa supera 200 mil pontos pela primeira vez após o 1º turno',
  sum: 'O índice subiu 7,70% na segunda-feira e fechou em 206.911 pontos. O dólar caiu 4,12% e terminou cotado a R$ 5,00.',
  body: [
    'A Bolsa brasileira teve na segunda-feira (5) um dos pregões mais fortes dos últimos anos. O Ibovespa avançou 7,70% e encerrou o dia aos 206.911,89 pontos, o primeiro fechamento da história acima de 200 mil. Durante a sessão, o índice chegou a 209.605,70 pontos.',
    'O mercado atribuiu o movimento ao resultado do primeiro turno da eleição presidencial, em que Flávio Bolsonaro (PL) terminou à frente do presidente Lula (PT).',
    '## Dólar a R$ 5,00',
    'No câmbio, o dólar recuou 4,12% e fechou vendido a R$ 5,00. Economistas ouvidos pela CNN Brasil apontaram a melhora na percepção de risco do país e a expectativa de entrada de capital estrangeiro.',
    '## Juros em queda',
    'Nos contratos de juros futuros de prazo mais longo, as taxas caíram mais de 130 pontos-base. O mercado passou a ver cerca de 15% de chance de um corte maior da Selic em novembro.'
  ],
  box: { type: 'bars', title: 'Destaques de alta em 5/10', unit: 'variação no dia', max: 25, rows: [['Magazine Luiza', 24.18], ['BTG Pactual', 22.52], ['C&A', 19.71], ['Bradesco', 13.57], ['Itaú', 10.37], ['Petrobras PN', 8.19]], fmt: 'pctplus', note: 'Fonte: CNN Brasil.' },
  sources: [['CNN Brasil', U.cnnMerc]] },

{ id: 'dolar-cai-fecha-cinco-reais', cat: 'economia', own: false, t: '2026-10-05T17', d: '5 out 2026', img: 'mercado', src: 'CNN Brasil', url: U.cnnMerc,
  title: 'Dólar cai 4,12% e fecha cotado a R$ 5,00',
  sum: 'Analistas citam a melhora na percepção de risco e a expectativa de entrada de capital estrangeiro.',
  body: [
    'A moeda americana teve forte queda no primeiro pregão depois do primeiro turno da eleição presidencial e terminou o dia a R$ 5,00 na venda.',
    'Na sexta-feira anterior, o dólar havia fechado acima de R$ 5,22.'
  ] },

{ id: 'bancos-varejo-lideram-alta', cat: 'economia', own: false, t: '2026-10-05T16', d: '5 out 2026', img: 'mercado', src: 'CNN Brasil', url: U.cnnMerc,
  title: 'Bancos e varejo lideram a alta; Magazine Luiza sobe 24%',
  sum: 'BTG Pactual avançou 22,5% e Bradesco, 13,6%. Itaú ganhou 10,4%.',
  body: [
    'As ações mais ligadas à economia doméstica puxaram a disparada da Bolsa. No varejo, além da Magazine Luiza, a C&A subiu quase 20%.',
    'Entre os bancos, o BTG Pactual teve a maior alta do setor.'
  ] },

{ id: 'juros-futuros-recuam', cat: 'economia', own: false, t: '2026-10-05T15', d: '5 out 2026', img: 'mercado', src: 'CNN Brasil', url: U.cnnMerc,
  title: 'Juros futuros longos recuam mais de 130 pontos-base',
  sum: 'O mercado passou a ver chance maior de um corte mais forte da Selic em novembro.',
  body: [
    'As taxas dos contratos de DI de prazo mais longo caíram com força na segunda-feira, refletindo menor percepção de risco.',
    'Pelas apostas do mercado, a probabilidade de um corte maior da Selic na reunião de novembro subiu para cerca de 15%.'
  ] },

{ id: 'focus-inflacao-5-01', cat: 'economia', own: true, t: '2026-10-05T10', d: '5 out 2026', img: 'mercado', read: 2,
  title: 'Mercado eleva projeção de inflação para 5,01% em 2026',
  sum: 'A estimativa do Boletim Focus sobe pela terceira semana seguida e segue acima do teto da meta, de 4,5%.',
  body: [
    'Os economistas consultados pelo Banco Central voltaram a aumentar a previsão para o IPCA deste ano. No Boletim Focus divulgado na segunda-feira (5), a projeção passou de 4,99% para 5,01%, a terceira alta consecutiva.',
    'A meta de inflação é de 3%, com tolerância de 1,5 ponto para cima ou para baixo. Se a previsão se confirmar, o índice vai estourar o teto de 4,5%.',
    '## Juros e crescimento',
    'A expectativa para a Selic no fim de 2026 ficou em 13,5% ao ano. Para 2027, o mercado prevê 12%, e para 2028, 10,5%.',
    'A projeção de crescimento do PIB deste ano caiu de 1,86% para 1,85%. Para 2027, a estimativa é de 1,40%. O dólar esperado para o fim do ano segue em R$ 5,20.'
  ],
  box: { type: 'bars', title: 'Projeção do IPCA no Focus', unit: '% ao ano', max: 6, rows: [['2026', 5.01], ['2027', 4.30], ['2028', 3.80]], note: 'Teto da meta: 4,5%. Fonte: O Tempo, com dados do Banco Central.' },
  sources: [['O Tempo', U.oTempoFocus]] },

{ id: 'petrobras-recorde-valor-de-mercado', cat: 'economia', own: true, t: '2026-10-03T09', d: '3 out 2026', img: 'plataforma', read: 3,
  title: 'Petrobras atinge recorde de R$ 700 bilhões em valor de mercado',
  sum: 'A alta veio depois da segunda descoberta de petróleo no poço Morpho, na Bacia da Foz do Amazonas.',
  body: [
    'A Petrobras fechou a sexta-feira (2) valendo R$ 700,08 bilhões na Bolsa, o maior valor de mercado de sua história. Em um único dia, a empresa ganhou R$ 20,9 bilhões. As ações preferenciais subiram 2,81%, e as ordinárias, 3,25%.',
    'O movimento seguiu o anúncio da segunda descoberta de petróleo no poço Morpho, na Bacia da Foz do Amazonas, parte da Margem Equatorial. A bacia tem reservas recuperáveis estimadas em 10 bilhões de barris de óleo equivalente.',
    '## Questionamento ambiental',
    'O Ministério Público Federal continua contestando o projeto. O órgão pede a suspensão das licenças ambientais, cita um vazamento de mais de 18 mil litros de fluido químico em janeiro e aponta falta de consulta a povos indígenas e pescadores artesanais.'
  ],
  sources: [['Agência Brasil', U.abPetro]] },

{ id: 'balanca-comercial-superavit-setembro', cat: 'economia', own: false, t: '2026-10-02T12', d: '2 out 2026', img: 'plataforma', src: 'TrendsCE', url: U.trends,
  title: 'Balança comercial tem superávit de US$ 6,45 bilhões em setembro',
  sum: 'Soja e café puxaram as exportações. O saldo é 151% maior que o do mesmo período de 2025.',
  body: [
    'Até a quarta semana de setembro, o Brasil exportou US$ 30,49 bilhões e importou US$ 24,04 bilhões. As vendas de soja subiram 21,1% e as de café, 20,6%. Já as exportações de carne bovina caíram 23,3%.',
    'No ano, o superávit acumulado chega a US$ 61,77 bilhões, alta de 36,3%.'
  ] },

{ id: 'producao-industrial-cai-agosto', cat: 'economia', own: false, t: '2026-10-02T11', d: '2 out 2026', img: 'mercado', src: 'Correio Braziliense', url: U.correio,
  title: 'Produção industrial cai 0,6% em agosto, diz IBGE',
  sum: 'Na comparação com agosto de 2025, a queda foi de 1,2%. As quatro grandes categorias recuaram.',
  body: [
    'A indústria brasileira voltou a encolher em agosto. O pior desempenho foi o de bens semi e não duráveis, com queda de 1,7% no mês.',
    'Apesar do resultado, o setor acumula alta de 0,8% no ano e de 0,6% em 12 meses.'
  ] },

{ id: 'embraer-alta-entregas-terceiro-trimestre', cat: 'economia', own: false, t: '2026-10-02T10', d: '2 out 2026', img: 'mercado', src: 'Agência Brasil', url: U.abEco,
  title: 'Embraer tem alta de 6% nas entregas no terceiro trimestre',
  sum: 'A fabricante de aviões aumentou o número de aeronaves entregues entre julho e setembro.',
  body: [
    'A Embraer informou crescimento de 6% nas entregas de aeronaves no terceiro trimestre de 2026.'
  ] },

{ id: 'claro-opa-desktop', cat: 'economia', own: false, t: '2026-10-05T09', d: '5 out 2026', img: 'tecnologia', src: 'TeleSíntese', url: U.tele,
  title: 'Claro pede registro de oferta para fechar o capital da Desktop',
  sum: 'A operadora quer comprar as ações restantes da provedora de internet e tirá-la do Novo Mercado.',
  body: [
    'A Claro solicitou o registro de uma oferta pública de aquisição de ações (OPA) da Desktop, provedora de internet paulista.',
    'Se a operação for adiante, a Desktop deixa o Novo Mercado, segmento de maior governança da B3.'
  ] },

/* ===================== TECNOLOGIA ===================== */
{ id: 'nobel-medicina-optogenetica', cat: 'tecnologia', own: true, t: '2026-10-05T13', d: '5 out 2026', img: 'ciencia', read: 4,
  title: 'Nobel de Medicina premia técnica que controla neurônios com luz',
  sum: 'Karl Deisseroth, Peter Hegemann e Georg Nagel foram reconhecidos pela descoberta de canais ativados por luz e pela optogenética.',
  body: [
    'O Prêmio Nobel de Fisiologia ou Medicina de 2026 foi para três cientistas que ajudaram a criar a optogenética, método que usa luz para ligar e desligar células nervosas. O anúncio foi feito na segunda-feira (5).',
    'Os premiados são Karl Deisseroth, da Universidade Stanford, nos Estados Unidos, Peter Hegemann, da Universidade Humboldt de Berlim, e Georg Nagel, da Universidade de Würzburg, ambas na Alemanha.',
    '## Da alga ao cérebro',
    'A história começa em uma alga de uma única célula, a Chlamydomonas. Hegemann e Nagel identificaram nela a canalrodopsina, uma proteína que se abre quando recebe luz azul. Aberta, ela deixa íons atravessarem a membrana e dispara um impulso elétrico.',
    'Deisseroth levou a descoberta para o sistema nervoso. Ele inseriu o gene da canalrodopsina em neurônios de ratos e, em 2007, mostrou que era possível controlar sinais neurais com luz no cérebro de camundongos vivos.',
    '## Para que serve',
    'Hoje a técnica é usada para mapear circuitos cerebrais ligados à memória, às emoções e ao comportamento, e está sendo estudada em tratamentos para restaurar a visão.',
    'O prêmio é de 12 milhões de coroas suecas, cerca de US$ 1,2 milhão, dividido entre os três.'
  ],
  box: { type: 'steps', title: 'Como funciona', steps: [['O gene entra', 'O gene da proteína da alga é inserido em neurônios escolhidos.'], ['A luz acende', 'Um pulso de luz azul abre os canais na membrana dessas células.'], ['O neurônio dispara', 'Os íons fluem, a célula gera um impulso e o circuito é ativado sob comando.']] },
  sources: [['CNN Brasil', U.cnnNobel]] },

{ id: 'alga-optogenetica-canalrodopsina', cat: 'tecnologia', own: false, t: '2026-10-05T12', d: '5 out 2026', img: 'ciencia', src: 'CNN Brasil', url: U.cnnNobel,
  title: 'Como uma proteína de alga abriu caminho para a optogenética',
  sum: 'Um canal sensível à luz azul permite ligar e desligar células nervosas em laboratório.',
  body: [
    'A canalrodopsina foi encontrada em algas do gênero Chlamydomonas. Quando a luz azul atinge a proteína, ela se abre e permite a passagem de íons.',
    'Inserida em neurônios, a proteína transforma luz em impulsos elétricos, o que deu aos cientistas um interruptor preciso para estudar o cérebro.'
  ] },

{ id: 'openai-devday-agentes-dots', cat: 'tecnologia', own: true, t: '2026-09-30T10', d: '30 set 2026', img: 'tecnologia', read: 3,
  title: 'OpenAI apresenta agentes que trabalham continuamente e um modelo mais barato',
  sum: 'No DevDay, a empresa lançou os agentes "Dots" e o GPT-6.1 Sol, que promete desempenho próximo ao topo de linha por um quinto do custo.',
  body: [
    'A OpenAI realizou em 29 de setembro seu evento anual para desenvolvedores, o DevDay. O principal anúncio foi o Dots, um conjunto de agentes que ficam ativos o tempo todo, aprendem as preferências do usuário e executam tarefas de forma autônoma.',
    'A empresa também abriu uma API de agentes com uso de computador, que permite a esses sistemas operar programas para concluir tarefas.',
    '## Novos modelos',
    'O GPT-6.1 Sol foi apresentado como uma opção com desempenho próximo ao do modelo mais avançado da empresa, a um quinto do custo por token. No Codex, ferramenta de programação, um modo ultrarrápido gera até 300 tokens por segundo.',
    '## Para empresas',
    'Entre as novidades corporativas estão o ChatGPT Space, espaço de colaboração para equipes, e a integração do ChatGPT a canais do Slack e do Microsoft Teams.'
  ],
  sources: [['OpenAI', U.openai]] },

{ id: 'schneider-compra-ptc', cat: 'tecnologia', own: false, t: '2026-10-06T06', d: '6 out 2026', img: 'tecnologia', src: 'Jornal Económico', url: U.je,
  title: 'Schneider Electric compra a PTC por US$ 22,6 bilhões',
  sum: 'O grupo francês quer unir software industrial e inteligência artificial. As ações recuaram quase 10% com o anúncio.',
  body: [
    'A Schneider Electric anunciou a compra da PTC, empresa de Boston especializada em software industrial e gestão do ciclo de vida de produtos. Segundo a companhia, a união vai ajudar clientes a projetar, fabricar, operar e manter produtos com mais eficiência.',
    'Para financiar o negócio, a Schneider prevê emitir até 17 bilhões de euros em dívida e 6 bilhões em novas ações.'
  ] },

{ id: 'trump-nomeia-czar-de-ia', cat: 'tecnologia', own: false, t: '2026-10-05T14', d: '5 out 2026', img: 'tecnologia', src: 'Democracy Now!', url: U.dn,
  title: 'Trump nomeia Jay Clayton para coordenar a política de IA do governo',
  sum: 'O diretor de Inteligência Nacional vai liderar uma nova força-tarefa sobre o tema.',
  body: [
    'O presidente dos EUA, Donald Trump, escolheu Jay Clayton, diretor de Inteligência Nacional, para comandar a coordenação das políticas federais de inteligência artificial.',
    'Clayton vai liderar um novo grupo chamado Super Intelligence Force.'
  ] },

{ id: 'pix-aproximacao-sem-limite-500', cat: 'tecnologia', own: true, t: '2026-10-01T10', d: '1 out 2026', img: 'celular', read: 2,
  title: 'Pix por aproximação deixa de ter limite fixo de R$ 500',
  sum: 'Desde 1º de outubro, os pagamentos sem contato seguem os mesmos limites das outras modalidades do Pix.',
  body: [
    'O Banco Central acabou com o teto de R$ 500 por transação que valia para o Pix por aproximação. A partir de 1º de outubro, esses pagamentos passam a respeitar apenas os limites gerais definidos por cada banco para a conta do cliente.',
    'A mudança faz parte de um esforço para padronizar as formas de iniciar um Pix. Com ela, a aproximação passa a funcionar com a mesma lógica do QR Code e das transferências por chave.',
    '## Open Finance',
    'A regra também vale para a chamada Jornada Sem Redirecionamento do Open Finance, que permite autorizar pagamentos sem abrir o aplicativo do banco.',
    'As instituições continuam podendo bloquear temporariamente operações suspeitas para proteger os clientes.'
  ],
  sources: [['Portal 6', U.portal6]] },

{ id: 'pix-automatico-conta-salario', cat: 'tecnologia', own: false, t: '2026-10-05T08', d: '5 out 2026', img: 'celular', src: 'JD1 Notícias', url: U.jd1,
  title: 'Conta-salário poderá usar o Pix Automático a partir de julho de 2027',
  sum: 'A mudança foi aprovada pelo Banco Central na Resolução BCB nº 587.',
  body: [
    'Quem recebe o salário em conta-salário vai poder autorizar pagamentos recorrentes pelo Pix Automático, como contas de consumo, a partir de 1º de julho de 2027.',
    'A resolução, publicada em 18 de setembro, também regulamentou cobranças híbridas, que combinam boleto e QR Code do Pix.'
  ] },

{ id: 'qualcomm-compra-patentes-huawei', cat: 'tecnologia', own: false, t: '2026-10-05T07', d: '5 out 2026', img: 'tecnologia', src: 'TeleSíntese', url: U.tele,
  title: 'Qualcomm compra patentes da Huawei e fecha acordo de licenciamento',
  sum: 'O pacote inclui tecnologias de 5G, computação, inteligência artificial e redes.',
  body: [
    'A fabricante americana de chips adquiriu um conjunto de patentes da chinesa Huawei e firmou um acordo de licenciamento entre as duas empresas.',
    'O negócio ainda depende de aprovações regulatórias.'
  ] },

{ id: 'fust-conecta-unidades-de-saude', cat: 'tecnologia', own: false, t: '2026-10-05T06', d: '5 out 2026', img: 'tecnologia', src: 'TeleSíntese', url: U.tele,
  title: 'Fust seleciona 11 empresas para conectar 1.307 unidades de saúde',
  sum: 'O resultado provisório prevê R$ 31,6 milhões em investimentos, com desconto médio de 11,2%.',
  body: [
    'O Fundo de Universalização dos Serviços de Telecomunicações escolheu, em caráter provisório, 11 empresas para levar internet a 1.307 unidades de saúde.',
    'As propostas vencedoras ficaram, em média, 11,2% abaixo do valor estimado pelo governo.'
  ] },

{ id: 'anatel-audiencias-leilao-6-ghz', cat: 'tecnologia', own: false, t: '2026-10-05T05', d: '5 out 2026', img: 'celular', src: 'TeleSíntese', url: U.tele,
  title: 'Anatel marca audiências públicas sobre o leilão da faixa de 6 GHz',
  sum: 'A agência vai ouvir o setor antes de definir as regras da disputa pelo espectro.',
  body: [
    'A Agência Nacional de Telecomunicações agendou audiências públicas para discutir o leilão da faixa de 6 GHz.'
  ] }
];
