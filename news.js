/* ============================================================
   NOVERA: conteúdo do site. Edite este arquivo e rode `node build.js`.
   Regras completas em ATUALIZACAO.md.
   ============================================================ */

/* Topo do site: data da edição e mercado */
const META = {
  /* Endereço público do site, sem barra no final. Usado nos links das redes sociais. */
  siteUrl: 'https://novera-sepia.vercel.app',
  dataExtenso: 'Sexta-feira, 9 de outubro de 2026',
  edicao: '9 out 2026',
  ibovespa: { valor: '206.220', variacao: '0,94%', sobe: true },
  dolar: { valor: 'R$ 5,02', variacao: '0,27%', sobe: true },
  fechamento: '8/10'
};

/* Home: destaque principal, dois laterais e três da faixa de baixo (IDs de notícias "own: true") */
const FEATURED = {
  lead: 'datafolha-segundo-turno-flavio-49-lula-45',
  side: ['tse-julga-garotinho-eleicao-rio', 'trump-nao-atacara-ira-antes-eleicoes'],
  also: ['nobel-literatura-anne-carson', 'santos-empata-flamengo-palmeiras-encosta', 'samsung-lucro-recorde-chips-ia']
};

/* Home: "Escolhas da redação" (5 IDs) */
const PICKS = ['ibovespa-sobe-petroleo-dolar-5-02', 'caso-master-stf-fachin-pf-13-outubro', 'bets-saem-do-ar-devolucao-saldos', 'russia-ataque-kiev-mortos', 'corinthians-demite-fernando-diniz'];

const U = {
  jgbMaster: 'https://jornalgrandebahia.com.br/2026/10/caso-banco-master-edson-fachin-marca-reuniao-com-pf-para-outubro-de-2026-e-cobra-apuracao-sem-excecao-de-mencoes-a-ministros-do-stf/',
  p360Moraes: 'https://poder360.com.br/poder-justica/moraes-recebe-andrei-e-outros-chefes-da-pf-no-supremo',
  conjurBarroso: 'https://conjur.com.br/2026-out-06/barroso-diz-que-caso-master-dividiu-e-desgastou-o-stf',
  obsPeste: 'https://observador.pt/2026/10/07/russia-nega-risco-epidemico-apos-morte-em-laboratorio-de-peste-na-siberia-e-alivia-medidas-de-quarentena/',
  euroPeste: 'https://www.euronews.com/2026/10/05/situation-under-control-russian-authorities-reassure-public-after-plague-reports-in-siberi',
  tnNepal: 'https://tribunadonorte.com.br/internacional/nepal-encerra-buscas-por-desaparecidos-apos-enchentes-que-deixaram-1-455-mortos/',
  /* Nacional */
  sen: 'https://www12.senado.leg.br/noticias/materias/2026/10/04/flavio-bolsonaro-e-lula-disputam-o-segundo-turno-das-eleicoes-para-presidente',
  cnnSen: 'https://www.cnnbrasil.com.br/eleicoes/divisao-bancada-senado/',
  gazetaApoio: 'https://www.gazetadopovo.com.br/eleicoes/2026/uniao-brasil-e-pp-anunciam-apoio-a-flavio-bolsonaro-no-segundo-turno/',
  sen6x1: 'https://www12.senado.leg.br/noticias/materias/2026/10/07/pec-do-fim-da-escala-6x1-passa-por-2a-sessao-de-discussao-no-plenario',
  abStf: 'https://agenciabrasil.ebc.com.br/justica/noticia/2026-10/stf-deve-julgar-revisao-da-condenacao-de-bolsonaro-apos-eleicoes',
  dRio: 'https://diariodorio.com/politica/2026/10/06/tse-inclui-recurso-de-garotinho-na-pauta-de-quinta-feira-e-pode-definir-eleicao-para-governador-do-rio.html',
  /* Internacional */
  dn: 'https://www.democracynow.org/2026/10/5/headlines',
  ajFranca: 'https://www.aljazeera.com/news/2026/10/6/demonstrators-clash-with-riot-police-in-france-as-education-protests-mount',
  ajKiev: 'https://www.aljazeera.com/news/2026/10/7/at-least-two-killed-in-kyiv-as-russia-launches-massive-attack-on-ukraine',
  kiKiev: 'https://kyivindependent.com/russia-slams-kyiv-in-mass-missile-drone-attack-on-putins-74th-birthday/',
  ajEbola: 'https://www.aljazeera.com/news/2026/10/6/kenya-confirms-first-ebola-case-after-patient-from-dr-congo-dies-in-nairobi',
  forbesTrump: 'https://www.forbes.com/sites/siladityaray/2026/10/08/trump-clarifies-let-them-hit-los-angeles-iran-war-comment-says-he-wont-let-that-happen/',
  /* Esportes */
  lanceDiniz: 'https://www.lance.com.br/corinthians/corinthians-demite-fernando-diniz-apos-sete-jogos-sem-vencer-no-brasileirao.html',
  gazInter: 'https://gazetaesportiva.com/campeonatos/brasileiro-serie-a/internacional-corinthians-brasileirao-07-10-2026',
  gazRamon: 'https://gazetaesportiva.com/times/corinthians/corinthians-ramon-diaz-substituto-diniz',
  laNacion: 'https://www.lanacion.com.ar/deportes/futbol/asi-quedo-el-cuadro-de-semifinales-de-la-copa-libertadores-2026-nid17092026/',
  lance: 'https://www.lance.com.br/fluminense/semifinal-da-libertadores-quando-e-contra-quem-joga-o-fluminense.html',
  siMessi: 'https://www.si.com/es-us/futbol/lionel-messi-brilla-con-gol-y-dos-asistencias-en-su-despedida-de-la-seleccion-argentina',
  cnnCruzeiro: 'https://www.cnnbrasil.com.br/esportes/brasileirao/kaio-jorge-marca-cruzeiro-vence-o-sao-paulo-e-pode-terminar-a-rodada-no-g4/',
  cnnVasco: 'https://cnnbrasil.com.br/esportes/futebol/botafogo/jogadores-do-botafogo-sao-encaminhados-ao-hospital-apos-classico-com-vasco',
  /* Cultura */
  otEstreias: 'https://otempo.com.br/entretenimento/2026/10/7/o-que-assistir-no-cinema-veja-5-filmes-que-estreiam-nesta-quinta-feira-8-de-outubro',
  adtEstreias: 'https://alemdatela.com/a-semana-tem-troca-de-corpo-mae-falsa-e-monstro-coreano-8-filmes-disputam-o-seu-ingresso/',
  cnnMostra: 'https://www.cnnbrasil.com.br/pop/cinema/mostra-internacional-de-cinema-de-sao-paulo-revela-programacao-de-2026/',
  rsBts: 'https://rollingstone.com.br/guia-show/bts-no-brasil-novas-ingressos-serao-disponibilizados-hoje-as-19h/',
  rsPitty: 'https://rollingstone.com.br/musica/pitty-revela-capa-e-tracklist-de-primeiro-album-autoral-em-sete-anos/',
  abTomZe: 'https://agenciabrasil.ebc.com.br/cultura/noticia/2026-10/exposicao-em-sao-paulo-celebra-os-90-anos-de-tom-ze',
  tbMarilia: 'https://timesbrasil.com.br/entretenimento/sao-paulo-reune-eventos-culturais-na-proxima-semana/',
  /* Economia */
  opovoPreSal: 'https://www.opovo.com.br/noticias/economia/2026/10/07/maior-leilao-do-pre-sal-termina-com-sete-dos-13-blocos-arrematados.html',
  mtPreSal: 'https://www.moneytimes.com.br/petrobras-petr4-e-prio-prio3-estao-entre-vencedoras-de-leilao-de-7-blocos-do-pre-sal-lils/',
  abAnp: 'https://agenciabrasil.ebc.com.br/economia/noticia/2026-10/leilao-da-anp-arrecada-r-3-bilhoes-com-venda-de-49-blocos',
  cnnMerc: 'https://www.cnnbrasil.com.br/economia/money/mercado/mercado-hoje-5-outubro-2026/',
  abBets: 'https://agenciabrasil.ebc.com.br/geral/noticia/2026-10/bets-comecam-sair-do-ar-nesta-terca-feira',
  abBets2: 'https://agenciabrasil.ebc.com.br/economia/noticia/2026-10/cerca-de-132-mil-sites-de-bets-ilegais-sao-bloqueados',
  abAnfavea: 'https://agenciabrasil.ebc.com.br/economia/noticia/2026-10/producao-de-veiculos-tem-melhor-setembro-desde-2014-diz-anfavea',
  tbCampos: 'https://timesbrasil.com.br/brasil/pf-adia-depoimento-de-roberto-campos-neto-sobre-caso-banco-master/',
  /* Tecnologia */
  ajQuimica: 'https://www.aljazeera.com/news/2026/10/7/henri-kagan-kenso-soai-win-chemistry-nobel-for-mirror-image-breakthrough',
  odQuimica: 'https://olhardigital.com.br/2026/10/07/ciencia-e-espaco/misterio-de-mais-de-100-anos-na-quimica-rende-nobel-a-cientistas/',
  opovoQuimica: 'https://mais.opovo.com.br/jornal/farol/2026/10/08/nobel-de-quimica-premia-processo-que-facilita-fabricacao-de-farmacos.html',
  genQuimica: 'https://www.genengnews.com/topics/drug-discovery/kagan-soai-win-2026-nobel-prize-in-chemistry-for-discoveries-related-to-asymmetric-organic-synthesis/',
  cnnNobel: 'https://cnnbrasil.com.br/internacional/nobel-de-medicina-vai-para-tres-cientistas-por-avanco-na-neurociencia',
  oaiGpt6: 'https://openai.com/index/gpt-6-for-everyone/',
  tcSynth: 'https://techcrunch.com/2026/10/07/googles-new-synthid-website-can-identify-ai-generated-media/',
  /* Atualização de 9 out 2026 */
  abTseRio: 'https://agenciabrasil.ebc.com.br/justica/noticia/2026-10/tse-anula-votos-de-garotinho-e-ruas-vence-governo-do-rio-no-1o-turno',
  opovoTse: 'https://mais.opovo.com.br/jornal/politica/2026/10/09/por-5-a-2-tse-anula-votos-de-garotinho-no-rj-decisao-beneficia-douglas-ruas.html',
  cnnDatafolha: 'https://www.cnnbrasil.com.br/eleicoes/datafolha-flavio-tem-52-dos-votos-validos-lula-48/',
  metDatafolha: 'https://www.metropoles.com/brasil/datafolha-2o-turno-flavio-tem-52-e-lula-48',
  bdfDatafolha: 'https://www.brasildefato.com.br/2026/10/08/datafolha-segundo-turno-flavio-bolsonaro-49-lula-45/',
  corPodemos: 'https://www.correiobraziliense.com.br/politica/2026/10/7517077-podemos-declara-apoio-a-flavio-bolsonaro-no-segundo-turno.html',
  otPsdb: 'https://www.otempo.com.br/eleicoes/2026/presidentes/2026/10/8/psdb-anuncia-neutralidade-e-libera-filiados-para-apoiar-lula-ou-flavio-bolsonaro-no-segundo-turno',
  imCampanhas: 'https://www.infomoney.com.br/politica/campanhas-mudam-o-tom-lula-aumenta-confronto-e-flavio-detalha-propostas/',
  sen6x1t: 'https://www12.senado.leg.br/noticias/materias/2026/10/08/fim-da-escala-6x1-passa-pela-3a-sessao-de-discussao-no-plenario',
  imTrumpIra: 'https://www.infomoney.com.br/mundo/trump-diz-que-eua-nao-atacarao-ira-antes-das-eleicoes-de-meio-de-mandato-em-novembro/',
  cbsIra: 'https://www.cbsnews.com/live-updates/iran-war-nuclear-donald-trump-vance-rubio-strait-of-hormuz/',
  axiosIra: 'https://www.axios.com/2026/10/08/trump-iran-strikes-midterm-elections',
  euroNavios: 'https://www.euronews.com/2026/10/08/iran-strikes-tankers-outside-hormuz-in-signs-of-expanding-campaign',
  ajOrmuz: 'https://www.aljazeera.com/news/liveblog/2026/10/9/iran-war-live-iranian-media-reports-massive-explosions-in-hormuz-strait',
  ajKramatorsk: 'https://www.aljazeera.com/news/2026/10/8/russia-attack-in-ukraines-kramatorsk-kills-12',
  apEritreia: 'https://www.click2houston.com/news/world/2026/10/08/eritrean-forces-seen-entering-towns-in-ethiopias-tigray-region-after-crossing-border/',
  abcIsaias: 'https://abcnews.com/US/tropical-storm-isaias-forecast-make-landfall-hurricane-friday/story?id=137059483',
  gzSantosFla: 'https://www.gazetaesportiva.com/campeonatos/brasileiro-serie-a/santos-x-flamengo-brasileirao-2026/',
  cnnSantosFla: 'https://www.cnnbrasil.com.br/esportes/brasileirao/com-dois-gols-de-neymar-santos-e-flamengo-empatam-em-jogo-polemico-na-vila/',
  gzPalBahia: 'https://www.gazetaesportiva.com/times/palmeiras/palmeiras-x-bahia-29-rodada-brasileirao-08-10-2026/',
  cnnPalBahia: 'https://www.cnnbrasil.com.br/esportes/brasileirao/palmeiras-domina-o-bahia-vence-e-fica-a-um-ponto-do-lider-flamengo/',
  piraTabela: 'https://piranot.com.br/esporte/tabela-brasileirao-29-rodada-classificacao-atualizada',
  gzFluCoxa: 'https://www.gazetaesportiva.com/campeonatos/brasileiro-serie-a/fluminense-goleia-coritiba-com-tres-de-savarino-e-assume-terceiro-lugar/',
  bandSingapura: 'https://www.band.com.br/esportes/velocidade/formula-1/gp-de-singapura-de-formula-1-2026-veja-horarios-programacao-completa',
  gzNovori: 'https://gazetaesportiva.com/times/gremio-novorizontino/novorizontino-vence-o-nautico-e-encosta-no-topo-da-serie-b',
  lanceFonseca: 'https://www.lance.com.br/tenis/joao-fonseca-joga-ultimo-torneio-do-ano-ao-lado-de-zverev-alcaraz-e-djokovic.html',
  ajCarson: 'https://www.aljazeera.com/news/2026/10/8/canadian-anne-carson-wins-2026-nobel-prize-in-literature',
  obsCarson: 'https://observador.pt/2026/10/08/escritora-canadiana-anne-carson-vence-o-nobel-da-literatura-de-2026/',
  dnCarson: 'https://diariodonordeste.verdesmares.com.br/verso/anne-carson-vence-o-premio-nobel-de-literatura-2026-conheca-livros-da-escritora-1.3797349',
  bbLolla: 'https://billboard.com.br/lollapalooza-brasil-2027-line-up/',
  cnnSwift: 'https://www.cnnbrasil.com.br/pop/musica/taylor-swift-sera-atracao-da-festa-de-gala-da-academia-do-oscar-saiba-mais/',
  cnnSuho: 'https://www.cnnbrasil.com.br/pop/musica/suho-do-grupo-de-k-pop-exo-anuncia-show-no-brasil-em-dezembro/',
  imIbov8: 'https://www.infomoney.com.br/mercados/ibovespa-hoje-bolsa-de-valores-ao-vivo-08102026/',
  dgabcFech8: 'https://www.dgabc.com.br/Noticia/4351739/fechamento-do-mercado-financeiro',
  cnnPetroleo: 'https://www.cnnbrasil.com.br/economia/money/mercado/precos-petroleo-8-outubro-2026/',
  abSeletivo: 'https://agenciabrasil.ebc.com.br/economia/noticia/2026-10/durigan-preve-envio-de-mp-do-imposto-seletivo-apos-eleicoes',
  mtIpca: 'https://www.moneytimes.com.br/ipca-pode-frear-os-cortes-da-selic-inflacao-deve-superar-teto-da-meta-nesta-sexta-9/',
  forbesPetro: 'https://forbes.com.br/forbes-money/2026/10/petrobras-faz-compra-de-r-32-bilhoes-mirando-o-futuro/',
  khSamsung: 'https://www.koreaherald.com/article/10896336',
  exSamsung: 'https://exame.com/tecnologia/ia-faz-lucro-da-samsung-disparar-e-expoe-dilema-do-negocio-de-smartphones/',
  cdEinstein: 'https://convergenciadigital.com.br/mercado/einstein-assume-incidente-cibernetico-e-dados-medicos-podem-ter-vazados/',
  spaceCrew12: 'https://www.space.com/news/live/spacex-nasa-crew-12-astronauts-launch-to-iss-oct-7-2026',
  tbStarlink: 'https://tecnoblog.net/noticias/starlink-tera-15-mil-novos-satelites-para-competir-com-operadoras/',
  cdPix: 'https://convergenciadigital.com.br/governo/pix-ultrapassa-1-bilhao-de-chaves-cadastradas/',
  cdGovbr: 'https://convergenciadigital.com.br/governo/assinatura-gov-br-sofre-instabilidade-e-deixa-usuarios-na-mao-ha-mais-de-10-dias/',
};

const NEWS = [
/* ---------- Edição extra: 8 out 2026, manhã ---------- */
{ id: 'caso-master-stf-fachin-pf-13-outubro', cat: 'nacional', own: true, t: '2026-10-08T06', d: '8 out 2026', img: 'congresso', read: 4,
  title: 'Caso Master: Fachin recebe a PF no dia 13 para saber quais ministros do STF são citados',
  sum: 'O presidente do Supremo cobrou apuração "sem exceção". Moraes, Mendonça, Nunes Marques, Toffoli e Fux aparecem no material do celular de Daniel Vorcaro, e os cinco contestam as suspeitas ou explicam os contatos.',
  body: [
    'O presidente do Supremo Tribunal Federal, Edson Fachin, vai receber o diretor-geral da Polícia Federal, Andrei Rodrigues, em 13 de outubro. Segundo o Jornal Grande Bahia, a PF deve apresentar a relação de ministros citados no material extraído do celular de Daniel Vorcaro, dono do Banco Master.',
    'Em ofício enviado em 2 de outubro, Fachin afirmou que a apuração deve alcançar fatos e pessoas "sem exceção", respeitando o devido processo legal e a autonomia da investigação. Ser citado no material não significa ter cometido crime, e o pedido não abre investigação automática contra ninguém.',
    '## Quem aparece e o que diz',
    'A PF associou a Alexandre de Moraes um contato com Vorcaro e referências ao escritório de sua mulher, Viviane Barci de Moraes. O ministro nega que os diálogos atribuídos a ele existam. André Mendonça confirmou ter recebido Vorcaro uma vez, em março de 2025, para tratar de um processo sobre precatórios, e diz ter decidido contra o interesse do empresário.',
    'Kassio Nunes Marques nega ter autorizado terceiros a agir em seu nome. Dias Toffoli, citado por transações ligadas a um fundo e a um empreendimento antes relacionado à sua família, nega amizade com Vorcaro. Luiz Fux, mencionado em mensagens de terceiros sobre uma viagem a Nova York em 2024, diz nunca ter trocado mensagens com o banqueiro.',
    '## Um julgamento parado',
    'Em 15 de setembro, o plenário do STF não chegou a julgar o mérito do pedido relacionado a Moraes. A votação sobre reunir dois processos terminou em 4 a 3 pela tramitação separada, e Flávio Dino pediu vista. Nunes Marques se declarou impedido e Toffoli, suspeito. Em 28 de setembro, Gilmar Mendes defendeu que o julgamento fique suspenso até que todos os magistrados citados sejam identificados.',
    'Na terça-feira (6), Moraes recebeu Andrei Rodrigues e o diretor de Inteligência da PF no Supremo, em encontro que não constava da agenda oficial. O assunto não foi divulgado. Na segunda (5), o ministro aposentado Luís Roberto Barroso disse que o caso "trouxe divisão" e desgaste ao tribunal.'
  ],
  box: { type: 'facts', title: 'Linha do tempo no STF', rows: [['15 set', 'Plenário não julga o mérito; Dino pede vista'], ['28 set', 'Gilmar defende suspender o julgamento'], ['2 out', 'Fachin cobra apuração "sem exceção"'], ['6 out', 'Moraes recebe chefes da PF fora da agenda'], ['13 out', 'Fachin recebe o diretor-geral da PF']] },
  sources: [['Jornal Grande Bahia', U.jgbMaster], ['Poder360', U.p360Moraes], ['ConJur', U.conjurBarroso]] },

{ id: 'russia-irkutsk-quarentena-laboratorio-peste', cat: 'internacional', own: true, t: '2026-10-08T06', d: '8 out 2026', img: 'ciencia', read: 3,
  title: 'Rússia suspende quarentena na Sibéria após morte de técnica de laboratório de peste',
  sum: 'Cerca de 200 pessoas foram isoladas em Irkutsk depois da morte de uma funcionária de 28 anos. As autoridades falam em pneumonia de causa desconhecida, e a OMS pediu mais informações.',
  body: [
    'As autoridades russas anunciaram na quarta-feira (7) o fim do isolamento e da quarentena em Irkutsk, na Sibéria. As medidas foram adotadas depois da morte de Daria Shipilova, de 28 anos, técnica do Instituto Antipeste de Irkutsk, em 2 de outubro.',
    'Segundo o jornal português Observador, cerca de 200 pessoas foram isoladas. A agência sanitária russa, a Rospotrebnadzor, afirma que concluiu o acompanhamento de mais de 90% dos contatos e que nenhuma doença infecciosa foi detectada. Para o órgão, não há risco de epidemia na região.',
    '## O que dizem as autoridades',
    'O governador da região, Igor Kobzev, disse que uma comissão concluiu que a técnica morreu de pneumonia de origem desconhecida. As autoridades afirmam que ela era vacinada contra as doenças com que trabalhava e que os testes não encontraram micro-organismos ligados ao laboratório.',
    'Veículos regionais, citando fontes não identificadas, chegaram a relatar suspeita de peste pneumônica depois da quebra de um tubo de ensaio. Essa versão não foi confirmada. O chefe da república vizinha da Buriátia primeiro falou em peste e depois acrescentou a palavra "possivelmente".',
    '## Perguntas sem resposta',
    'Mais de 60 funcionários chegaram a ficar isolados dentro do instituto, hospitais de Irkutsk tiveram restrições e o hospital de Shelekhov, cidade onde a técnica morava, foi fechado. Segundo a Euronews, a Rospotrebnadzor não explicou por que essas medidas foram tomadas se os testes deram negativo. A Organização Mundial da Saúde pediu à Rússia mais informações sobre o caso.'
  ],
  box: { type: 'facts', title: 'O caso em datas', rows: [['2 out', 'Morre a técnica Daria Shipilova, de 28 anos'], ['3 out', 'Cerca de 200 pessoas são isoladas'], ['7 out', 'Rússia suspende a quarentena; OMS pede transparência']] },
  sources: [['Observador', U.obsPeste], ['Euronews', U.euroPeste]] },

{ id: 'nepal-encerra-buscas-enchentes', cat: 'internacional', own: false, t: '2026-10-07T08', d: '7 out 2026', img: 'mundo', src: 'Tribuna do Norte', url: U.tnNepal,
  title: 'Nepal encerra buscas por desaparecidos nas enchentes que deixaram 1.455 mortos',
  sum: 'Ainda há 5.285 pessoas desaparecidas. O governo estuda como declarar a morte delas para que as famílias possam resolver seguros e contas bancárias.',
  body: [
    'As enchentes começaram em 26 de agosto, na região da fronteira com o Tibete, depois de dias de chuva forte. Além dos 1.455 mortos, as autoridades contabilizam 13.795 pessoas resgatadas.',
    'O centro nacional de operações de emergência informou que o trabalho passa da fase de busca e resgate para a de reabilitação. Restos mortais e objetos encontrados durante as obras continuarão sendo recolhidos.'
  ] },

/* ===================== NACIONAL ===================== */
{ id: 'datafolha-segundo-turno-flavio-49-lula-45', cat: 'nacional', own: true, t: '2026-10-08T20', d: '8 out 2026', img: 'eleicao', read: 3,
  title: 'Datafolha: Flávio tem 49% e Lula, 45%, na primeira pesquisa do segundo turno',
  sum: 'Nos votos válidos, o placar é de 52% a 48%. A margem de erro é de 2 pontos. Lula tem rejeição de 46%, e Flávio, de 43%.',
  body: [
    'A primeira pesquisa Datafolha do segundo turno, divulgada na quinta-feira (8), mostra Flávio Bolsonaro (PL) com 49% das intenções de voto e Lula (PT) com 45%. Brancos e nulos somam 5%, e 1% está indeciso. Como a margem de erro é de 2 pontos, para mais ou para menos, a diferença entre os dois fica no limite dela.',
    'Considerando só os votos válidos, sem brancos, nulos e indecisos, Flávio tem 52% e Lula, 48%. A votação é em 25 de outubro.',
    '## Rejeição e decisão do voto',
    'Dizem que não votariam de jeito nenhum em Lula 46% dos eleitores, e 43% dizem o mesmo de Flávio. A maioria já decidiu: 94% afirmam que o voto é definitivo. Entre os eleitores de Flávio, 25% dizem votar nele principalmente para derrotar Lula. O governo é avaliado de forma negativa por 40% e de forma positiva por 35%.',
    'Quem votou em Augusto Cury, Renan Santos, Ronaldo Caiado ou Romeu Zema no primeiro turno se divide assim: 46% vão de Flávio, 32% de Lula, e 15% pretendem votar em branco ou anular.',
    '## Onde cada um lidera',
    'Lula vence no Nordeste (61% a 35%), entre católicos (53% a 41%), entre quem estudou até o ensino fundamental (55% a 41%) e entre quem ganha até dois salários mínimos (52% a 41%). Flávio lidera entre evangélicos (69% a 25%) e no Sul (58% a 35%).',
    '## Como foi feita',
    'O Datafolha ouviu 2.520 eleitores de 16 anos ou mais em 6 e 7 de outubro. A pesquisa foi contratada pela Folha de S.Paulo e pela TV Globo e está registrada no TSE com o número BR-02949/2026. O nível de confiança é de 95%.'
  ],
  box: { type: 'bars', title: 'Datafolha: 2º turno', unit: '% das intenções de voto', max: 55, rows: [['Flávio Bolsonaro (PL)', 49], ['Lula (PT)', 45], ['Branco ou nulo', 5], ['Indecisos', 1]], note: 'Votos válidos: Flávio 52%, Lula 48%. Margem de erro de 2 pontos. Registro BR-02949/2026.' },
  sources: [['CNN Brasil', U.cnnDatafolha], ['Metrópoles', U.metDatafolha], ['Brasil de Fato', U.bdfDatafolha]] },

{ id: 'podemos-apoio-flavio-segundo-turno', cat: 'nacional', own: false, t: '2026-10-08T12', d: '8 out 2026', img: 'eleicao', src: 'Correio Braziliense', url: U.corPodemos,
  title: 'Podemos oficializa apoio a Flávio Bolsonaro no segundo turno',
  sum: 'O partido, que ficou neutro no primeiro turno, anunciou a adesão no comitê de campanha, em Brasília. Flávio disse que não há alinhamento automático.',
  body: [
    'O anúncio foi feito na quinta-feira (8) pela presidente nacional do Podemos, Renata Abreu, ao lado de parlamentares e do governador eleitos pelo partido. Ela disse que as urnas mostraram um desejo de mudança.',
    'Segundo o Correio Braziliense, o Podemos terá 27 deputados federais, 2 senadores e 1 governador. Flávio citou pautas do partido, como o combate à violência contra a mulher e o apoio a mães de crianças com deficiência ou autismo.'
  ] },

{ id: 'psdb-neutro-segundo-turno', cat: 'nacional', own: false, t: '2026-10-08T16', d: '8 out 2026', img: 'eleicao', src: 'O Tempo', url: U.otPsdb,
  title: 'PSDB decide ficar neutro e libera filiados no segundo turno',
  sum: 'Em nota assinada por Aécio Neves, o partido diz que cada filiado pode agir como achar mais adequado na disputa entre Lula e Flávio.',
  body: [
    'A decisão foi da Executiva Nacional do PSDB, na quinta-feira (8). Segundo O Tempo, os diretórios estaduais se dividiram entre a neutralidade e o apoio a Flávio Bolsonaro (PL), e um grupo menor defendia Lula (PT).',
    'Na nota, o partido diz esperar prosperidade, justiça e pacificação para o país.'
  ] },

{ id: 'campanhas-mudam-tom-lula-flavio', cat: 'nacional', own: false, t: '2026-10-08T05', d: '8 out 2026', img: 'eleicao', src: 'InfoMoney', url: U.imCampanhas,
  title: 'Campanhas mudam o tom: Lula aposta no confronto e Flávio detalha propostas',
  sum: 'Lula pede debates e destaca programas sociais. Flávio promete uma PEC para acabar com a reeleição e mudanças na reforma tributária.',
  body: [
    'Segundo o InfoMoney, a campanha de Lula (PT) passou a buscar o confronto direto, com pedidos de debate e ênfase no Bolsa Família e em outros programas sociais. O presidente também acusa o PL de tentar adiar a votação da PEC que acaba com a escala 6x1.',
    'Flávio Bolsonaro (PL) apresentou propostas como uma PEC para acabar com a reeleição consecutiva e mudanças na reforma tributária e no Judiciário. Ele chama de oportunista votar a PEC da 6x1 durante a campanha. As duas campanhas querem reduzir a abstenção: mais de 33 milhões de eleitores não votaram no primeiro turno.'
  ] },

{ id: 'pec-6x1-terceira-sessao-senado', cat: 'nacional', own: false, t: '2026-10-08T18', d: '8 out 2026', img: 'congresso', src: 'Agência Senado', url: U.sen6x1t,
  title: 'PEC do fim da escala 6x1 passa pela terceira sessão de discussão no Senado',
  sum: 'Faltam duas sessões antes do primeiro turno de votação. O senador Paulo Paim (PT-RS) prevê a votação na próxima semana.',
  body: [
    'A proposta reduz a jornada para 40 horas semanais e acaba com a escala de seis dias de trabalho para um de descanso. Ela já foi aprovada pela Câmara, por 461 votos a 19, e pela CCJ do Senado, com relatoria de Omar Aziz (PSD-AM).',
    'São exigidas cinco sessões de discussão antes do primeiro turno de votação e mais três antes do segundo. Em cada turno, a PEC precisa de pelo menos 49 votos. O presidente do Senado, Davi Alcolumbre, disse que acelerar o calendário depende dos senadores.'
  ] },

{ id: 'tse-julga-garotinho-eleicao-rio', cat: 'nacional', own: true, t: '2026-10-08T19', d: '8 out 2026', img: 'congresso', read: 3,
  photo: 'fotos/tse-julga-garotinho-eleicao-rio.webp', photoAlt: 'Fachada do prédio do Tribunal Superior Eleitoral, em Brasília, com a placa do tribunal em primeiro plano', credit: 'Foto: reprodução',
  title: 'TSE anula votos de Garotinho, e Douglas Ruas vence no Rio sem segundo turno',
  sum: 'Por 5 votos a 2, o tribunal decidiu que os 274.411 votos de Anthony Garotinho não contam. Ruas (PL) passa de 50% dos válidos, e Eduardo Paes (PSD) fica sem segundo turno.',
  body: [
    'O Tribunal Superior Eleitoral decidiu na quinta-feira (8), por 5 votos a 2, anular os votos dados a Anthony Garotinho (Republicanos) no primeiro turno da eleição para governador do Rio de Janeiro. Com a decisão, Douglas Ruas (PL) fica com mais da metade dos votos válidos e vence a eleição sem segundo turno.',
    '## Os números',
    'Pelo resultado divulgado em 4 de outubro, Ruas teve 4.271.199 votos, ou 49,27% dos válidos, e Eduardo Paes (PSD) teve 3.706.984, ou 42,76%. Garotinho recebeu 274.411 votos. Sem eles na conta, Ruas passa dos 50% por cerca de 74 mil votos, segundo a Agência Brasil.',
    '## Como votaram os ministros',
    'O relator, Floriano de Azevedo Marques, entendeu que Garotinho estava com os direitos políticos suspensos pela Lei da Ficha Limpa quando se filiou ao Republicanos, por causa de uma condenação de 2018 por improbidade administrativa. Por isso, a filiação foi considerada nula e a candidatura, impossível. Acompanharam o relator André Mendonça, Dias Toffoli, Estela Aranha e o presidente do TSE, Nunes Marques, para quem um mesmo voto não pode ser nulo para o candidato e válido para calcular o resultado.',
    'Ficaram vencidos Ricardo Villas Bôas Cueva e Sebastião Reis Júnior. Os dois também negaram a candidatura, mas queriam que os votos fossem contados, o que levaria a eleição ao segundo turno. Para Reis Júnior, a vontade expressa pelo eleitor deve ser preservada.',
    '## O que acontece agora',
    'Garotinho tinha pedido para desistir do recurso, mas o tribunal rejeitou o pedido e julgou o caso. O advogado da coligação de Paes, José Roberto de Castro Neves, chamou a desistência de contraditória e oportunista. O novo resultado oficial ainda depende de um ato do Tribunal Regional Eleitoral do Rio, que vai refazer a totalização dos votos.'
  ],
  box: { type: 'facts', title: 'Governo do RJ: a decisão', rows: [['Placar no TSE', '5 votos a 2'], ['Douglas Ruas (PL)', '4.271.199 votos'], ['Eduardo Paes (PSD)', '3.706.984 votos'], ['Votos anulados de Garotinho', '274.411'], ['Próximo passo', 'Nova totalização pelo TRE-RJ']] },
  sources: [['Agência Brasil', U.abTseRio], ['O POVO+', U.opovoTse], ['Diário do Rio', U.dRio]] },

{ id: 'campanhas-segundo-turno-primeiros-apoios', cat: 'nacional', own: false, t: '2026-10-07T06', d: '7 out 2026', img: 'eleicao', src: 'Gazeta do Povo', url: U.gazetaApoio,
  photo: 'fotos/campanhas-segundo-turno-primeiros-apoios.webp', photoAlt: 'Arte com o texto Eleições 2026, com o zero do ano em amarelo formando o mapa do Brasil', credit: 'Arte: reprodução',
  title: 'União Brasil, PP e Caiado apoiam Flávio; Lula defende o fim da escala 6x1',
  sum: 'A federação, neutra no primeiro turno, decidiu por unanimidade. Lula cobrou do rival uma posição sobre a PEC da jornada de trabalho.',
  body: [
    'A federação formada por União Brasil e PP anunciou apoio a Flávio Bolsonaro na terça-feira (6), em Brasília. Em Goiânia, o ex-governador Ronaldo Caiado (PSD), quinto colocado no primeiro turno, oficializou a adesão em evento com Tarcísio de Freitas.',
    'No mesmo dia, Lula defendeu a PEC que reduz a jornada máxima de 44 para 40 horas semanais e questionou se Flávio vai orientar o PL a votar contra a proposta no Senado.'
  ] },

{ id: 'stf-revisao-bolsonaro-apos-eleicao', cat: 'nacional', own: false, t: '2026-10-07T15', d: '7 out 2026', img: 'congresso', src: 'Agência Brasil', url: U.abStf,
  title: 'STF só vai julgar revisão da condenação de Bolsonaro depois da eleição',
  sum: 'O relator, Kassio Nunes Marques, informou que o caso não será analisado antes do fim do pleito para não interferir na votação.',
  body: [
    'A defesa do ex-presidente tenta derrubar a condenação a 27 anos e 3 meses de prisão por tentativa de golpe, decidida pela Primeira Turma. O caso aguarda manifestação da Procuradoria-Geral da República e será julgado no plenário, em data a ser marcada pelo presidente do STF, Edson Fachin.'
  ] },

{ id: 'pl-maior-bancada-senado', cat: 'nacional', own: false, t: '2026-10-05T08', d: '5 out 2026', img: 'congresso', src: 'CNN Brasil', url: U.cnnSen,
  photo: 'fotos/pl-maior-bancada-senado.webp', photoAlt: 'PL elege maior bancada do Senado', credit: 'Imagem ilustrativa',
  title: 'PL elege 19 senadores e terá a maior bancada do Senado a partir de 2027',
  sum: 'Partido de Flávio Bolsonaro passa de 15 para 28 cadeiras. O PT terá 9 senadores e o MDB, 8.',
  body: [
    'O PL elegeu 19 dos 54 senadores escolhidos no domingo (4) e terá 28 das 81 cadeiras a partir de fevereiro de 2027. Depois vêm PT, com 9, MDB, com 8, e Republicanos e PP, com 6 cada.',
    'A eleição renovou dois terços do Senado. Os eleitos se juntam aos 27 senadores com mandato até 2031.'
  ] },

/* ===================== INTERNACIONAL ===================== */
{ id: 'trump-nao-atacara-ira-antes-eleicoes', cat: 'internacional', own: true, t: '2026-10-08T18', d: '8 out 2026', img: 'mundo', read: 3,
  title: 'Trump diz que não vai atacar o Irã antes das eleições de 3 de novembro',
  sum: 'O presidente americano falou em "discussões produtivas" com Teerã, mas manteve o bloqueio aos portos iranianos. O Irã ampliou os ataques a navios fora do Estreito de Ormuz.',
  body: [
    'O presidente dos Estados Unidos, Donald Trump, afirmou na quinta-feira (8) que o país não vai atacar o Irã antes das eleições de meio de mandato, marcadas para 3 de novembro. Em publicação na rede Truth Social, ele disse que mantém "discussões produtivas" com o governo iraniano. Segundo a agência Reuters, o bloqueio americano aos portos do Irã continua.',
    'A declaração veio depois de reportagens sobre a retomada dos combates. Segundo o site Axios, o Pentágono tinha mandado o Comando Central concluir os preparativos para grandes operações. A CBS News informou que o Brent, referência do petróleo, estava perto de US$ 105 antes da publicação de Trump e caiu para cerca de US$ 103 depois dela.',
    '## Negociações travadas',
    'Trump rejeitou a proposta mais recente de Teerã para encerrar a guerra e reabrir Ormuz, segundo a Reuters. O chanceler iraniano, Araghchi, disse que o país analisa a resposta americana e vai se manifestar em poucos dias. O presidente do Irã, Pezeshkian, chamou as conversas de inúteis.',
    '## Ataques a navios',
    'Ao mesmo tempo, o Irã ampliou os ataques a navios. Segundo a Euronews, o petroleiro Acers, de bandeira de Antígua e Barbuda, foi atingido na quarta-feira (7) por vários projéteis a 51 milhas náuticas ao norte do Catar. Na quinta, um navio pegou fogo a cerca de 40 km de Fujairah, nos Emirados Árabes Unidos. Na madrugada desta sexta (9), a agência iraniana Fars relatou fortes explosões no sul do estreito, sem informar a causa.',
    'A guerra começou em 28 de fevereiro, com ataques dos EUA e de Israel ao Irã. Segundo a agência AP, citada pela CBS, 19 militares americanos morreram desde então. O Estreito de Ormuz está praticamente fechado desde o início do conflito.'
  ],
  box: { type: 'facts', title: 'A guerra em números', rows: [['Início', '28 de fevereiro'], ['Militares dos EUA mortos', '19, segundo a AP'], ['Custo para os EUA', 'Cerca de US$ 3 bilhões por mês'], ['Eleições nos EUA', '3 de novembro']] },
  sources: [['InfoMoney / Reuters', U.imTrumpIra], ['CBS News', U.cbsIra], ['Axios', U.axiosIra], ['Euronews', U.euroNavios], ['Al Jazeera', U.ajOrmuz]] },

{ id: 'kramatorsk-bomba-onibus-mortos', cat: 'internacional', own: false, t: '2026-10-08T14', d: '8 out 2026', img: 'mundo', src: 'Al Jazeera', url: U.ajKramatorsk,
  title: 'Bomba russa atinge dois ônibus em Kramatorsk e mata pelo menos 30 pessoas',
  sum: 'O ataque foi na manhã de quinta-feira (8), no leste da Ucrânia. Também deixou 18 feridos, segundo autoridades regionais.',
  body: [
    'Segundo o presidente Volodymyr Zelensky, a bomba planadora caiu numa parada de ônibus. Ele disse que o ataque não ficará sem resposta. Moscou não comentou de imediato.',
    'Em Pryluky, no norte do país, o número de mortos no ataque com mísseis da quarta-feira (7) chegou a 22, cinco deles crianças. Enviados dos EUA devem se reunir com negociadores ucranianos em Miami nesta sexta (9).'
  ] },

{ id: 'etiopia-eritreia-tropas-tigre', cat: 'internacional', own: false, t: '2026-10-08T10', d: '8 out 2026', img: 'mundo', src: 'AP', url: U.apEritreia,
  title: 'Tropas da Eritreia entram no Tigré, e cresce o risco de guerra com a Etiópia',
  sum: 'Soldados eritreus chegaram a duas cidades do norte da região etíope, segundo um comandante local. Um monitor de conflitos relata ataques de drones da Etiópia.',
  body: [
    'As tropas entraram em Adigrat na terça-feira (6) e em Idaga Hamus na quarta (7), segundo um comandante ouvido pela AP. A agência não conseguiu confirmar a informação de forma independente. O monitor de conflitos ACLED relatou ataques de drones atribuídos ao Exército etíope.',
    'A escalada vem depois que forças aliadas ao governo etíope entraram em Mekelle, capital do Tigré. Os dois países romperam relações depois que a Etiópia expulsou 10 diplomatas eritreus. O ministro da Informação da Eritreia disse que o país não vai rebater o que chamou de alegações sem fundamento.'
  ] },

{ id: 'russia-ataque-kiev-mortos', cat: 'internacional', own: true, t: '2026-10-07T20', d: '7 out 2026', img: 'mundo', read: 3,
  photo: 'fotos/russia-ataque-kiev-mortos.webp', photoAlt: 'Explosão ilumina o céu noturno de uma cidade, com uma grande nuvem de fogo e fumaça', credit: 'Foto: reprodução',
  title: 'Ataque russo no aniversário de Putin mata ao menos 28 pessoas na Ucrânia',
  sum: 'Um míssil atingiu um prédio residencial em Pryluky, onde morreram ao menos 20 pessoas, entre elas cinco crianças. A Rússia lançou 48 mísseis de cruzeiro e 130 drones.',
  body: [
    'A Rússia lançou na madrugada de quarta-feira (7) um ataque aéreo em larga escala contra a Ucrânia, no dia em que o presidente Vladimir Putin completou 74 anos. Segundo balanço do Kyiv Independent, ao menos 28 pessoas morreram e 118 ficaram feridas em várias regiões do país.',
    '## Onde houve mortes',
    'O caso mais grave foi em Pryluky, na região de Chernihiv, onde um míssil de cruzeiro atingiu um prédio residencial. Ao menos 20 pessoas morreram, cinco delas crianças, e 55 ficaram feridas. Em Kiev, foram 4 mortos e 13 feridos, e parte da cidade ficou sem luz e sem água. Kremenchuk e Oleksandriia tiveram duas mortes cada.',
    '## Mísseis e drones',
    'Segundo a Força Aérea ucraniana, foram lançados 48 mísseis de cruzeiro, dos quais 39 foram derrubados, e 130 drones, com 117 abatidos, além de mísseis balísticos. O presidente Volodymyr Zelensky disse que ainda pode haver pessoas sob os escombros em Pryluky.',
    'Segundo a Al Jazeera, a Rússia afirmou ter atingido instalações da Fire Point, empresa que fabrica o míssil ucraniano Flamingo. Portos da região de Odessa também foram alvo.'
  ],
  box: { type: 'facts', title: 'O ataque em números', rows: [['Mortos', 'ao menos 28'], ['Feridos', '118'], ['Mísseis de cruzeiro', '48 (39 derrubados)'], ['Drones', '130 (117 derrubados)']] },
  sources: [['Kyiv Independent', U.kiKiev], ['Al Jazeera', U.ajKiev]] },

{ id: 'trump-fala-los-angeles-san-diego-ira', cat: 'internacional', own: false, t: '2026-10-08T03', d: '8 out 2026', img: 'mundo', src: 'Forbes', url: U.forbesTrump,
  photo: 'fotos/trump-fala-los-angeles-san-diego-ira.webp', photoAlt: 'Donald Trump diante de um microfone, atrás de um púlpito com o selo presidencial', credit: 'Foto: reprodução',
  title: 'Trump repete fala sobre Irã atingir Los Angeles, mas diz que vai proteger as cidades',
  sum: 'Em comício no Texas, o presidente disse que não vai deixar o ataque acontecer. A frase original, dita em Nebraska, tinha sido criticada por políticos da Califórnia.',
  body: [
    'Na quarta-feira (7), em San Antonio, Trump voltou a citar a hipótese de um míssil iraniano atingir San Diego ou Los Angeles e acrescentou que os Estados Unidos protegem suas cidades. Ele também disse que o Irã nunca terá uma arma nuclear e que os preços do petróleo vão cair.',
    'Na segunda-feira (5), em Nebraska, ele tinha dito que seria um preço pequeno a pagar. O governador da Califórnia, Gavin Newsom, e republicanos do estado criticaram a declaração, segundo a Al Jazeera.'
  ] },

{ id: 'franca-suspende-aulas-protestos-estudantes', cat: 'internacional', own: false, t: '2026-10-06T13', d: '6 out 2026', img: 'protesto', src: 'Al Jazeera', url: U.ajFranca,
  photo: 'fotos/franca-suspende-aulas-protestos-estudantes.webp', photoAlt: 'Estudantes com cartazes protestam em frente à fachada de uma escola em Paris', credit: 'Foto: reprodução',
  title: 'França suspende aulas do ensino médio após protestos de estudantes',
  sum: 'As autoridades contaram cerca de 250 mil manifestantes. Quase 2 mil escolas foram bloqueadas ou fechadas.',
  body: [
    'O primeiro-ministro Sébastien Lecornu suspendeu as aulas do ensino médio até o fim da semana, depois de mais um dia de protestos contra as condições das escolas públicas. Os organizadores falam em 500 mil pessoas nas ruas.',
    'Pelo menos 215 adolescentes e 715 policiais ficaram feridos. Desde o início do movimento, 6.100 pessoas foram presas, a maioria menores de idade.'
  ] },

{ id: 'furacao-isaias-golfo-eua', cat: 'internacional', own: false, t: '2026-10-09T03', d: '9 out 2026', img: 'mundo', src: 'ABC News', url: U.abcIsaias,
  title: 'Furacão Isaias ganha força e deve chegar à costa do Golfo dos EUA nesta sexta',
  sum: 'A tempestade já é de categoria 2 e deve tocar terra entre a noite de sexta (9) e a madrugada de sábado (10), perto da divisa entre o Alabama e a Flórida.',
  body: [
    'O Isaias é o primeiro furacão da temporada no Atlântico e o que se formou mais tarde desde o início dos registros. Segundo a ABC News, a previsão de chegada à costa foi deslocada para o leste, mais perto de Pensacola, na Flórida.',
    'A maré de tempestade pode chegar a cerca de 2,1 metros em partes da costa do Mississippi e do Alabama. A Flórida decretou estado de emergência em 25 condados, e o Alabama, em 40.'
  ] },

{ id: 'quenia-primeiro-caso-ebola', cat: 'internacional', own: false, t: '2026-10-06T15', d: '6 out 2026', img: 'mundo', src: 'Al Jazeera', url: U.ajEbola,
  photo: 'fotos/quenia-primeiro-caso-ebola.webp', photoAlt: 'Profissionais de saúde com roupas de proteção amarelas atendem um paciente em centro de tratamento de ebola', credit: 'Imagem ilustrativa: reprodução',
  title: 'Quênia confirma primeiro caso de ebola; paciente morre em Nairóbi',
  sum: 'O homem vivia na República Democrática do Congo, onde um surto já matou mais de 4 mil pessoas.',
  body: [
    'O paciente viajou por terra até Uganda e de lá seguiu de avião para Nairóbi, onde morreu. Segundo o presidente William Ruto, ao menos 8 familiares e 21 profissionais de saúde estão em quarentena, e passageiros e tripulantes do voo estão sendo rastreados.',
    'O surto no Congo já soma mais de 8.300 casos confirmados em sete províncias.'
  ] },

/* ===================== ESPORTES ===================== */
{ id: 'santos-empata-flamengo-palmeiras-encosta', cat: 'esportes', own: true, t: '2026-10-09T00', d: '9 out 2026', img: 'esportes', read: 3,
  title: 'Neymar marca duas vezes, Santos empata com o Flamengo, e Palmeiras fica a um ponto do líder',
  sum: 'Na Vila Belmiro, o Santos buscou o 2 a 2 com dois pênaltis no fim. O Palmeiras venceu o Bahia por 1 a 0 e chegou a 60 pontos, contra 61 do Flamengo.',
  body: [
    'A briga pelo título do Brasileirão ficou mais apertada na quinta-feira (8), pela 29ª rodada. O líder Flamengo empatou por 2 a 2 com o Santos, na Vila Belmiro, e o Palmeiras venceu o Bahia por 1 a 0, em São Paulo. Agora, só um ponto separa os dois primeiros colocados.',
    '## Neymar decide na volta',
    'O Flamengo abriu 2 a 0 no fim do primeiro tempo, com gols de Danilo, aos 43 minutos, e Lucas Paquetá, nos acréscimos. Neymar, que não jogava desde 2 de setembro por causa de uma lesão na coxa, entrou no intervalo.',
    'Aos 33 minutos do segundo tempo, Jorginho, do Flamengo, foi expulso depois de revisão do VAR por toque de mão na área. Neymar cobrou o pênalti e diminuiu. Aos 42, ele marcou de novo, em outro pênalti, marcado após um empurrão de Luiz Araújo em Gabigol. O árbitro Anderson Daronco deu 14 minutos de acréscimo.',
    '## Palmeiras encosta',
    'No Nubank Parque, o Palmeiras marcou cedo: Flaco López fez o gol aos 6 minutos do primeiro tempo, depois de um escanteio. Vitor Roque acertou o travessão e Sosa, a trave. Com a derrota, o Bahia caiu para o 6º lugar. Também na quinta, o Fluminense goleou o Coritiba por 4 a 0 e subiu para o 3º lugar.',
    '## Próximos jogos',
    'No domingo (11), o Flamengo recebe o Fluminense, às 17h30, e o Palmeiras enfrenta o Corinthians no Nubank Parque, no mesmo horário. O Santos visita o Atlético-MG, às 16h, na Arena MRV.'
  ],
  box: { type: 'table', title: 'Brasileirão: o topo da tabela', head: ['Clube', 'Pontos'], rows: [['Flamengo', '61'], ['Palmeiras', '60'], ['Fluminense', '51'], ['Athletico-PR', '50'], ['Cruzeiro', '48'], ['Bahia', '46']], note: 'Depois dos jogos de quinta (8), pela 29ª rodada. Fontes: Gazeta Esportiva e Piranot.' },
  sources: [['Gazeta Esportiva', U.gzSantosFla], ['CNN Brasil', U.cnnSantosFla], ['Gazeta Esportiva', U.gzPalBahia], ['CNN Brasil', U.cnnPalBahia], ['Piranot', U.piraTabela]] },

{ id: 'fluminense-goleia-coritiba-savarino', cat: 'esportes', own: false, t: '2026-10-08T23', d: '8 out 2026', img: 'esportes', src: 'Gazeta Esportiva', url: U.gzFluCoxa,
  title: 'Savarino marca três vezes, e Fluminense goleia o Coritiba por 4 a 0',
  sum: 'Com a vitória no Maracanã, o time chegou a 51 pontos e assumiu o 3º lugar do Brasileirão.',
  body: [
    'Savarino marcou aos 29 minutos do primeiro tempo e aos 3 e aos 20 do segundo. Lucho Acosta fechou o placar nos acréscimos. O Coritiba, com 38 pontos, está em 9º.',
    'No domingo (11), o Fluminense enfrenta o líder Flamengo no Maracanã.'
  ] },

{ id: 'f1-gp-singapura-primeira-sprint', cat: 'esportes', own: false, t: '2026-10-09T04', d: '9 out 2026', img: 'pista', src: 'Band', url: U.bandSingapura,
  title: 'GP de Singapura tem a primeira corrida sprint da história do circuito',
  sum: 'O único treino livre é nesta sexta (9), às 5h30 de Brasília. A corrida principal é no domingo (11), às 9h. Antonelli lidera o campeonato com 320 pontos.',
  body: [
    'A classificação para a sprint é nesta sexta, às 9h30. No sábado (10), a sprint começa às 6h, e a classificação para o GP, às 10h. Todos os horários são de Brasília.',
    'Antonelli tem 84 pontos a mais que George Russell, segundo colocado, com 236, e não pode garantir o título em Singapura. Lewis Hamilton soma 214, e Charles Leclerc, 191.'
  ] },

{ id: 'novorizontino-vence-nautico-serie-b', cat: 'esportes', own: false, t: '2026-10-08T22', d: '8 out 2026', img: 'esportes', src: 'Gazeta Esportiva', url: U.gzNovori,
  title: 'Novorizontino vence o Náutico e encosta nos líderes da Série B',
  sum: 'Com o 2 a 0 nos Aflitos, o time chegou a 57 pontos, dois a menos que o líder Juventude.',
  body: [
    'Nicolas Careca abriu o placar aos 7 minutos, e Rômulo ampliou de pênalti aos 14, ainda no primeiro tempo. O jogo foi pela 32ª rodada.',
    'O Novorizontino é o 3º colocado. O Náutico, com 42 pontos, está em 13º.'
  ] },

{ id: 'joao-fonseca-paris-basileia', cat: 'esportes', own: false, t: '2026-10-08T19', d: '8 out 2026', img: 'esportes', src: 'Lance!', url: U.lanceFonseca,
  title: 'João Fonseca está confirmado no Masters de Paris e pode defender o título em Basileia',
  sum: 'Fora das quadras desde agosto por causa de uma lesão abdominal, o brasileiro, 29º do ranking, não disputa o Masters de Xangai.',
  body: [
    'O Masters 1000 de Paris vai de 2 a 8 de novembro, e Fonseca é o único brasileiro com vaga direta. Antes, ele deve jogar o ATP 500 de Basileia, de 26 de outubro a 1º de novembro, se estiver em condições físicas.',
    'O brasileiro não joga desde que desistiu do torneio de Cincinnati, em agosto. Ele também ficou fora de Tóquio e de Xangai.'
  ] },

{ id: 'corinthians-demite-fernando-diniz', cat: 'esportes', own: true, t: '2026-10-07T23', d: '7 out 2026', img: 'esportes', read: 2,
  title: 'Corinthians demite Fernando Diniz após derrota para o Inter',
  sum: 'O time perdeu por 2 a 1 no Beira-Rio e chegou a sete jogos sem vencer no Brasileirão. Ramón Díaz aparece como prioridade para o cargo.',
  body: [
    'O Corinthians anunciou na noite de quarta-feira (7) a saída do técnico Fernando Diniz e de sua comissão técnica. A decisão veio depois da derrota por 2 a 1 para o Internacional, no Beira-Rio, pela 29ª rodada do Campeonato Brasileiro.',
    'Vitinho abriu o placar para o Inter logo no primeiro minuto, e Alan Patrick ampliou no segundo tempo. André descontou para o Corinthians. Segundo o Lance!, o time está há sete jogos sem vencer no Brasileirão e oito no total, contando a eliminação para o Estudiantes na Libertadores.',
    '## Os números de Diniz',
    'Em 33 jogos pelo clube, Diniz somou 13 vitórias, 8 empates e 12 derrotas, com aproveitamento de 47%. Segundo a Gazeta Esportiva, o Corinthians tem 32 pontos, está em 16º lugar e fica a um ponto da zona de rebaixamento.',
    '## Quem pode chegar',
    'O argentino Ramón Díaz, que já treinou o Corinthians e está sem clube, aparece como prioridade da diretoria. Sylvinho e Juan Pablo Vojvoda também são citados. O clube quer o novo técnico já no clássico contra o Palmeiras, no domingo (11).'
  ],
  box: { type: 'facts', title: 'Diniz no Corinthians', rows: [['Jogos', '33'], ['Vitórias', '13'], ['Empates', '8'], ['Derrotas', '12'], ['Aproveitamento', '47%']] },
  sources: [['Lance!', U.lanceDiniz], ['Gazeta Esportiva', U.gazInter], ['Gazeta Esportiva', U.gazRamon]] },

{ id: 'libertadores-semifinais-tres-brasileiros', cat: 'esportes', own: true, t: '2026-10-05T15', d: '5 out 2026', img: 'esportes', read: 2,
  photo: 'fotos/libertadores-semifinais-tres-brasileiros.webp', photoAlt: 'Montagem com jogadores de Fluminense, Palmeiras, Flamengo e Estudiantes comemorando', credit: 'Montagem: reprodução',
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

{ id: 'cruzeiro-vence-sao-paulo-g4', cat: 'esportes', own: false, t: '2026-10-07T23', d: '7 out 2026', img: 'esportes', src: 'CNN Brasil', url: U.cnnCruzeiro,
  title: 'Cruzeiro vence o São Paulo por 2 a 0 e entra no G4',
  sum: 'Kaio Jorge e Zé Lucas marcaram no Mineirão. O time de Artur Jorge chegou a 48 pontos.',
  body: [
    'O Cruzeiro aparece provisoriamente em quarto lugar, mas ainda pode ser ultrapassado por Fluminense ou Bahia, que jogam nesta quinta. O São Paulo, de Dorival Júnior, ficou com 36 pontos.'
  ] },

{ id: 'vasco-vence-botafogo-classico', cat: 'esportes', own: false, t: '2026-10-07T23', d: '7 out 2026', img: 'esportes', src: 'CNN Brasil', url: U.cnnVasco,
  title: 'Vasco vence o Botafogo no Nilton Santos e soma a terceira vitória seguida',
  sum: 'Lescano e David marcaram para o Vasco; Alex Telles descontou de falta. Dois zagueiros do Botafogo foram levados ao hospital.',
  body: [
    'Com o 2 a 1, o Vasco chegou a 34 pontos. Os zagueiros Arthur Chaves e Vitinho, do Botafogo, foram atendidos no hospital e estão estáveis.'
  ] },

{ id: 'messi-despedida-argentina-benin', cat: 'esportes', own: false, t: '2026-10-07T01', d: '7 out 2026', img: 'esportes', src: 'Sports Illustrated', url: U.siMessi,
  title: 'Messi se despede da Argentina com gol e duas assistências nos 3 a 0 sobre Benin',
  sum: 'O camisa 10 fez seu último jogo pela seleção no Monumental de Núñez e encerra a trajetória com 126 gols.',
  body: [
    'Messi deu o passe para Otamendi abrir o placar de cabeça e serviu Nico Paz no segundo gol. O terceiro foi dele, de pênalti. Ele jogou os 90 minutos diante de mais de 80 mil torcedores.',
    'Messi deixa a seleção com 208 jogos e 126 gols.'
  ] },

/* ===================== CULTURA ===================== */
{ id: 'nobel-literatura-anne-carson', cat: 'cultura', own: true, t: '2026-10-08T09', d: '8 out 2026', img: 'arte', read: 3,
  title: 'Nobel de Literatura vai para a poeta canadense Anne Carson',
  sum: 'A Academia Sueca premiou uma obra que dialoga com a tradição clássica grega. Carson, de 76 anos, tem sete livros publicados no Brasil.',
  body: [
    'A Academia Sueca anunciou na quinta-feira (8), em Estocolmo, que a canadense Anne Carson, de 76 anos, é a vencedora do Nobel de Literatura de 2026. Poeta, ensaísta, tradutora e professora de letras clássicas, ela foi premiada por uma obra ousada que, segundo a Academia, cria novas formas para a literatura contemporânea num diálogo bem-humorado com a tradição clássica.',
    'Carson soube do prêmio na Islândia, país de que também tem cidadania. A secretária permanente da Academia, Ingrid Carlberg, contou que a escritora foi pega de surpresa. À TV islandesa RUV, Carson reagiu dizendo achar que estavam todos loucos.',
    '## Quem é',
    'Nascida em Toronto, Carson tem mais de 20 livros. A obra mistura poesia, ensaio e tradução e muitas vezes parte da origem das palavras. Entre os títulos citados pela Al Jazeera estão "The Beauty of the Husband", poema narrativo sobre um casamento que fracassa, e "The Trojan Women", releitura em quadrinhos de uma tragédia de Eurípides.',
    'Segundo o jornal português Observador, ela é a segunda pessoa do Canadá a ganhar o prêmio, depois de Alice Munro, em 2013. Carson sucede o húngaro László Krasznahorkai, premiado em 2025.',
    '## No Brasil',
    'Segundo o Diário do Nordeste, sete livros da autora saíram no país, entre eles "Autobiografia do Vermelho", que reconta uma epopeia do ponto de vista do monstro Gerião, e "Eros, o doce-amargo". O prêmio é de 12 milhões de coroas suecas, e a entrega será em 10 de dezembro.'
  ],
  box: { type: 'facts', title: 'Anne Carson', rows: [['Nacionalidade', 'Canadense'], ['Idade', '76 anos'], ['Obra', 'Mais de 20 livros de poesia, ensaio e tradução'], ['No Brasil', '7 livros publicados'], ['Prêmio', '12 milhões de coroas suecas']] },
  sources: [['Al Jazeera', U.ajCarson], ['Observador', U.obsCarson], ['Diário do Nordeste', U.dnCarson]] },

{ id: 'taylor-swift-gala-museu-academia', cat: 'cultura', own: false, t: '2026-10-08T16', d: '8 out 2026', img: 'palco', src: 'CNN Brasil', url: U.cnnSwift,
  title: 'Taylor Swift vai cantar na festa de gala do museu da Academia do Oscar',
  sum: 'A apresentação deve encerrar a 6ª gala do museu, em 17 de outubro, em Los Angeles.',
  body: [
    'A festa arrecada recursos para o Academy Museum of Motion Pictures. Os homenageados da noite são o cineasta e compositor John Carpenter, o ator Colman Domingo e a atriz Charlize Theron.'
  ] },

{ id: 'suho-exo-show-sao-paulo', cat: 'cultura', own: false, t: '2026-10-08T18', d: '8 out 2026', img: 'palco', src: 'CNN Brasil', url: U.cnnSuho,
  title: 'Suho, líder do grupo de k-pop EXO, fará show em São Paulo em dezembro',
  sum: 'O encontro com fãs será em 20 de dezembro, no Komplexo Tempo. A venda de ingressos começa nesta sexta (9), às 19h.',
  body: [
    'Os ingressos serão vendidos pela Sympla. Os preços vão de R$ 450 na pista, com meia-entrada a R$ 225, a R$ 1.600 no setor VVIP.'
  ] },

{ id: 'estreias-cinema-se-eu-fosse-voce-3', cat: 'cultura', own: true, t: '2026-10-08T05', d: '8 out 2026', img: 'cultura', read: 2,
  title: '"Se Eu Fosse Você 3" e o sul-coreano "Hope" chegam aos cinemas nesta quinta',
  sum: 'A comédia fecha a trilogia com Tony Ramos e Glória Pires. O filme de Na Hong-jin, que passou em Cannes, tem Alicia Vikander e Michael Fassbender no elenco.',
  body: [
    'Os cinemas brasileiros recebem nesta quinta-feira (8) cinco estreias. O destaque nacional é "Se Eu Fosse Você 3", que encerra a trilogia de comédias sobre troca de corpos.',
    '## A volta de Tony Ramos e Glória Pires',
    'O longa tem direção de Anita Barbosa e supervisão artística de Daniel Filho, diretor dos dois primeiros filmes. A história se passa 20 anos depois, e agora quem troca de corpo é Bia, a filha do casal, com o marido, Aquiles. O elenco tem ainda Cleo Pires e Rafael Infante. A distribuição é da Disney.',
    '## Suspense coreano',
    '"Hope: O Primeiro Impacto", de Na Hong-jin, reúne os sul-coreanos Hwang Jung-min, Jung Ho-yeon e Zo In-sung com Alicia Vikander e Michael Fassbender. O filme passou pelo Festival de Cannes e não é recomendado para menores de 16 anos.',
    '## Outras estreias',
    'Também chegam às salas as comédias nacionais "Um Tio Quase Perfeito 3", com Marcus Majella, e "Picaretas Não Vão Pro Céu", com Maurício Manfrini e Tirullipa, além da animação "As Aventuras de Tadeo e a Lâmpada Mágica", de Enrique Gato.'
  ],
  box: { type: 'table', title: 'Estreias de 8 de outubro', head: ['Filme', 'Direção'], rows: [['Se Eu Fosse Você 3', 'Anita Barbosa'], ['Hope: O Primeiro Impacto', 'Na Hong-jin'], ['Um Tio Quase Perfeito 3', 'Pedro Antonio'], ['Picaretas Não Vão Pro Céu', 'Roberto Santucci'], ['As Aventuras de Tadeo e a Lâmpada Mágica', 'Enrique Gato']], note: 'Fontes: O Tempo e Além da Tela.' },
  sources: [['O Tempo', U.otEstreias], ['Além da Tela', U.adtEstreias]] },

{ id: 'mostra-sao-paulo-50-edicao', cat: 'cultura', own: true, t: '2026-10-06T04', d: '6 out 2026', img: 'cultura', read: 3,
  photo: 'fotos/mostra-sao-paulo-50-edicao.webp', photoAlt: 'Arte oficial da 50ª Mostra Internacional de Cinema em São Paulo, com selo dourado e desenho de um casal se beijando', credit: 'Divulgação: Mostra Internacional de Cinema em São Paulo',
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

{ id: 'pitty-novo-album-sete-anos', cat: 'cultura', own: false, t: '2026-10-07T15', d: '7 out 2026', img: 'palco', src: 'Rolling Stone Brasil', url: U.rsPitty,
  title: 'Pitty revela capa e faixas do primeiro álbum de inéditas em sete anos',
  sum: 'O disco, chamado "Pitty", tem 13 faixas e sai em 16 de outubro. A turnê estreia no dia seguinte, em São Paulo.',
  body: [
    'O anúncio foi feito no aniversário de 49 anos da cantora. Entre as faixas estão "Sobremesa", lançada em setembro, "Armadura" e "Desobediente". A coprodução é de Rafael Ramos.',
    'O primeiro show, em 17 de outubro, no Espaço Unimed, está esgotado. Há mais nove cidades na agenda até dezembro.'
  ] },

{ id: 'lollapalooza-2027-line-up', cat: 'cultura', own: false, t: '2026-10-08T12', d: '8 out 2026', img: 'palco', src: 'Billboard Brasil', url: U.bbLolla,
  title: 'Lollapalooza Brasil 2027 terá Travis Scott, Charli XCX e The Killers',
  sum: 'O festival será em 19, 20 e 21 de março, no Autódromo de Interlagos, em São Paulo. A divisão das atrações por dia ainda não foi divulgada.',
  body: [
    'Segundo a Billboard Brasil, os destaques da edição que marca os 15 anos do festival no país incluem também David Guetta, Queens of the Stone Age, The Neighbourhood, Fontaines D.C., The Prodigy e o DJ brasileiro Mochakk.',
    'Entre os artistas nacionais estão Criolo, Nação Zumbi e Rodrigo Amarante. Os horários de cada show serão anunciados mais tarde.'
  ] },

{ id: 'marilia-mendonca-exposicao-mis', cat: 'cultura', own: false, t: '2026-10-07T11', d: '7 out 2026', img: 'cultura', src: 'Times Brasil', url: U.tbMarilia,
  title: 'Exposição sobre Marília Mendonça abre nesta sexta no MIS, em São Paulo',
  sum: '"Sentimento Louco" reúne objetos pessoais, figurinos e registros inéditos da cantora até 29 de novembro.',
  body: [
    'A mostra tem instalações interativas em salas inspiradas nas músicas da cantora e percorre a trajetória dela desde a infância. Fica aberta de terça a domingo, das 10h às 19h, com ingressos de R$ 50 e meia-entrada de R$ 25.'
  ] },

{ id: 'tom-ze-90-anos-exposicao', cat: 'cultura', own: false, t: '2026-10-07T12', d: '7 out 2026', img: 'arte', src: 'Agência Brasil', url: U.abTomZe,
  title: 'Exposição em São Paulo celebra os 90 anos de Tom Zé',
  sum: 'A mostra na Caixa Cultural, na Praça da Sé, tem entrada gratuita e fica aberta até 13 de dezembro.',
  body: [
    '"Tom Zé – 90 Anos do Inquieto Jardineiro de Sons" tem curadoria de Neuseli Martins e inclui uma réplica do buzinório, instrumento criado pelo músico. Nascido em Irará, na Bahia, Tom Zé completa 90 anos no domingo (11).'
  ] },

{ id: 'bts-tres-shows-morumbis', cat: 'cultura', own: false, t: '2026-10-07T19', d: '7 out 2026', img: 'palco', src: 'Rolling Stone Brasil', url: U.rsBts,
  title: 'BTS libera nova leva de ingressos para os shows em São Paulo',
  sum: 'Uma cota foi vendida na quarta pela internet. Nesta quinta, há venda na bilheteria para quem fez pré-reserva.',
  body: [
    'A cota limitada foi colocada à venda na quarta-feira (7), às 19h, pela Ticketmaster. Nesta quinta (8), a partir das 10h, a bilheteria oficial atende só quem fez pré-reserva e apresentar a confirmação.',
    'O grupo sul-coreano faz três shows da turnê "Arirang" no MorumBIS, em 28, 30 e 31 de outubro.'
  ] },

/* ===================== ECONOMIA ===================== */
{ id: 'ibovespa-sobe-petroleo-dolar-5-02', cat: 'economia', own: true, t: '2026-10-08T18', d: '8 out 2026', img: 'mercado', read: 3,
  title: 'Ibovespa sobe 0,94% com petróleo em alta e pesquisas eleitorais; dólar fecha a R$ 5,02',
  sum: 'O índice terminou a quinta-feira (8) aos 206.220 pontos, depois de duas quedas seguidas. O Brent subiu mais de 4% e passou de US$ 104.',
  body: [
    'A Bolsa brasileira voltou a subir na quinta-feira (8). O Ibovespa fechou em alta de 0,94%, aos 206.220 pontos, depois de dois pregões de queda. Segundo o InfoMoney, o índice chegou a 207.953 pontos na máxima do dia. O dólar comercial subiu 0,27% e fechou a R$ 5,024.',
    '## Petróleo e eleição',
    'O petróleo puxou as ações da Petrobras. O Brent, referência internacional, subiu 4,07% e fechou a US$ 104,28 o barril, segundo a CNN Brasil, com novos ataques a navios no Golfo Pérsico e o furacão Isaias, que paralisou plataformas no Golfo do México. A ação preferencial da Petrobras subiu 2,12%.',
    'Os investidores também acompanharam as pesquisas do segundo turno. Segundo o InfoMoney, uma pesquisa PoderData/Aya mostrou Flávio Bolsonaro (PL) com 53% dos votos válidos e Lula (PT) com 47%, e o mercado esperava o Datafolha, divulgado à noite. Os juros futuros caíram.',
    '## Vale em queda',
    'A Vale caiu 1,61%, no quarto pregão seguido de baixa, com o minério de ferro no menor preço em 18 meses na China. Nos Estados Unidos, as bolsas fecharam sem direção única.'
  ],
  box: { type: 'facts', title: 'Fechamento de quinta (8)', rows: [['Ibovespa', '206.220 pontos (+0,94%)'], ['Dólar comercial', 'R$ 5,024 (+0,27%)'], ['Brent', 'US$ 104,28 (+4,07%)'], ['Petrobras PN', '+2,12%'], ['Vale ON', '-1,61%']] },
  sources: [['InfoMoney', U.imIbov8], ['CNN Brasil', U.cnnPetroleo], ['DGABC / Estadão Conteúdo', U.dgabcFech8]] },

{ id: 'petroleo-brent-passa-104-dolares', cat: 'economia', own: false, t: '2026-10-08T17', d: '8 out 2026', img: 'mercado', src: 'CNN Brasil', url: U.cnnPetroleo,
  title: 'Petróleo sobe 4% e Brent passa de US$ 104 com ataques no Golfo e furacão nos EUA',
  sum: 'O WTI, referência americana, subiu 3,64%, a US$ 91,49. Os estoques de petróleo dos EUA caíram, quando o mercado esperava alta.',
  body: [
    'Segundo a CNN Brasil, o Brent fechou a US$ 104,28, alta de 4,07%. Os estoques americanos caíram 3,186 milhões de barris.',
    'Um assessor da Guarda Revolucionária do Irã disse que o Estreito de Ormuz continuará fechado até que as reivindicações do país sejam atendidas.'
  ] },

{ id: 'durigan-imposto-seletivo-apos-eleicao', cat: 'economia', own: false, t: '2026-10-08T20', d: '8 out 2026', img: 'mercado', src: 'Agência Brasil', url: U.abSeletivo,
  title: 'Durigan diz que MP do Imposto Seletivo só vai ao Congresso depois do 2º turno',
  sum: 'Segundo o ministro da Fazenda, a cobrança pode começar no fim de janeiro ou no início de fevereiro de 2027. Até lá, fica mantido o IPI atual sobre os setores atingidos.',
  body: [
    'O Imposto Seletivo vai incidir sobre veículos, embarcações e aeronaves, cigarros, bebidas alcoólicas e açucaradas, bens minerais e apostas. Segundo a Agência Brasil, o acordo com os setores foi fechado nesta semana.',
    'Dario Durigan também defendeu o split payment, sistema que separa o imposto no momento do pagamento, e disse que ele será opcional e gradual. O ministro respondeu a críticas da campanha de Flávio Bolsonaro (PL) ao modelo.'
  ] },

{ id: 'ipca-setembro-sai-nesta-sexta', cat: 'economia', own: false, t: '2026-10-09T05', d: '9 out 2026', img: 'mercado', src: 'Money Times', url: U.mtIpca,
  title: 'IPCA de setembro sai nesta sexta; mercado espera alta de 0,76%',
  sum: 'Se a previsão se confirmar, a inflação em 12 meses vai a 4,51% e passa do teto da meta, de 4,5%. Em agosto, houve deflação de 0,32%.',
  body: [
    'O IBGE divulga o índice às 9h. Segundo o Money Times, a mediana das projeções coletadas pelo Broadcast aponta alta de 0,76% no mês.',
    'A taxa Selic está em 13,75%. O resultado da inflação pode influenciar a decisão do Banco Central sobre novos cortes de juros.'
  ] },

{ id: 'petrobras-21-blocos-bonus-bilionario', cat: 'economia', own: false, t: '2026-10-08T15', d: '8 out 2026', img: 'mercado', src: 'Forbes Brasil', url: U.forbesPetro,
  title: 'Petrobras arremata 21 blocos e vai pagar R$ 3,2 bilhões em bônus',
  sum: 'O número soma os dois leilões de petróleo da ANP desta semana. Na oferta de concessão, foram vendidos 49 de 308 blocos.',
  body: [
    'As áreas ficam nas bacias de Campos, Santos e Ceará. Na Bacia do Ceará, a Petrobras será a operadora, com 70%, em parceria com a QatarEnergy. O bônus deve ser pago até 30 de dezembro.',
    'Na oferta de concessão, o bônus total foi de cerca de R$ 3 bilhões, o maior desde o início da Oferta Permanente. Também levaram áreas a Aguila, a Eneva e a Origem.'
  ] },

{ id: 'leilao-pre-sal-sete-blocos', cat: 'economia', own: true, t: '2026-10-07T20', d: '7 out 2026', img: 'plataforma', read: 3,
  title: 'Leilão do pré-sal vende 7 de 13 blocos; Petrobras, Prio e Equinor levam áreas',
  sum: 'O bônus de assinatura somou R$ 530 milhões, menos da metade do potencial. Em outra sessão, a ANP vendeu 49 blocos de concessão e arrecadou cerca de R$ 3 bilhões.',
  body: [
    'A Agência Nacional do Petróleo (ANP) realizou na quarta-feira (7) o quarto ciclo da Oferta Permanente de Partilha, o maior leilão do pré-sal. Sete dos 13 blocos oferecidos foram arrematados, com bônus de assinatura de R$ 530 milhões. Se todos tivessem sido vendidos, o valor chegaria a R$ 1,24 bilhão.',
    '## Quem venceu',
    'A Petrobras ficou com Azurita e Cruzeiro do Sul, e a Prio, com Magnetita e Hematita. A Equinor levou Rubi e, em consórcio com a Galp, Rodocrosita, que teve o maior ágio, de 494,64%. O bloco Jade foi para as chinesas CNOOC e Sinopec. Cada área teve um único concorrente.',
    'Das 19 empresas habilitadas, só 6 fizeram ofertas. O investimento mínimo previsto é de R$ 778,4 milhões. Os seis blocos sem lance seguem disponíveis para as próximas rodadas.',
    '## Concessão',
    'Na sessão de concessão, 49 blocos em bacias como Potiguar, Parnaíba e Campos foram vendidos, com cerca de R$ 3 bilhões em bônus e R$ 4,5 bilhões em investimentos previstos na fase de exploração, segundo a Agência Brasil.'
  ],
  box: { type: 'table', title: 'Pré-sal: quem levou cada bloco', head: ['Bloco', 'Vencedor', 'Ágio'], rows: [['Magnetita', 'Prio', '132,79%'], ['Hematita', 'Prio', '315,03%'], ['Azurita', 'Petrobras', '139,81%'], ['Cruzeiro do Sul', 'Petrobras', '8,07%'], ['Rubi', 'Equinor', '91,72%'], ['Rodocrosita', 'Equinor e Galp', '494,64%'], ['Jade', 'CNOOC e Sinopec', '65,76%']], note: 'Fonte: Agência Brasil, via O Povo.' },
  sources: [['O Povo, com Agência Brasil', U.opovoPreSal], ['Money Times', U.mtPreSal], ['Agência Brasil', U.abAnp]] },

{ id: 'bets-saem-do-ar-devolucao-saldos', cat: 'economia', own: true, t: '2026-10-06T09', d: '6 out 2026', img: 'celular', read: 2,
  title: 'Sites de apostas saem do ar; devolução de saldos começa na sexta',
  sum: 'Segundo a Fazenda, 26,5 milhões de apostadores ainda têm R$ 1,325 bilhão nas plataformas. Os bancos fazem os pagamentos de 9 a 14 de outubro.',
  body: [
    'As plataformas de apostas on-line começaram a sair do ar na terça-feira (6), por causa da medida provisória 1.394/2026, assinada pelo presidente Lula em 25 de setembro. A MP ainda precisa ser aprovada pelo Congresso.',
    'O prazo para os apostadores sacarem o dinheiro por conta própria terminou na segunda-feira (5), às 23h59. Segundo balanço divulgado na terça, 26,5 milhões de apostadores ainda tinham algum valor nas plataformas, num total de R$ 1,325 bilhão. Cerca de 200 mil pessoas, 1% dos apostadores, concentram 80% desse saldo.',
    '## Como fica a devolução',
    'Até quarta (7), as empresas tinham de informar os saldos aos bancos, por CPF e conta. De 9 a 14 de outubro, os bancos devolvem o dinheiro. A partir de 14 de outubro, a Caixa também pode fazer os pagamentos.',
    'Desde 25 de setembro, o governo pediu o bloqueio de 13.241 sites ilegais de apostas. Dos 188 sites autorizados, só um ainda funcionava na terça, e o bloqueio dele também foi pedido.'
  ],
  box: { type: 'steps', title: 'Calendário da devolução', steps: [['Até 7 de outubro', 'As empresas informam os saldos dos clientes aos bancos.'], ['9 a 14 de outubro', 'Os bancos devolvem o dinheiro aos apostadores.'], ['A partir de 14 de outubro', 'A Caixa também pode fazer os pagamentos.']] },
  sources: [['Agência Brasil', U.abBets], ['Agência Brasil', U.abBets2]] },

{ id: 'anfavea-producao-veiculos-setembro', cat: 'economia', own: false, t: '2026-10-07T12', d: '7 out 2026', img: 'mercado', src: 'Agência Brasil', url: U.abAnfavea,
  title: 'Produção de veículos tem o melhor setembro desde 2014',
  sum: 'Foram 268,3 mil unidades, alta de 10,2% em um ano. A Anfavea passou a prever alta de 15,2% nos emplacamentos em 2026.',
  body: [
    'As exportações caíram 24,2% em setembro, para 39,8 mil veículos, por causa da Argentina e da concorrência de modelos chineses e mexicanos. Os emplacamentos somaram 281,4 mil unidades no mês.'
  ] },

{ id: 'campos-neto-adia-depoimento-pf', cat: 'economia', own: false, t: '2026-10-07T17', d: '7 out 2026', img: 'mercado', src: 'Times Brasil', url: U.tbCampos,
  title: 'Depoimento de Campos Neto à PF no caso Master é adiado',
  sum: 'O ex-presidente do Banco Central seria ouvido como testemunha na quarta. A defesa pediu o adiamento, e ainda não há nova data.',
  body: [
    'A Polícia Federal quer saber se ele sabia da relação de dois servidores do BC com Daniel Vorcaro, dono do Master. Na terça (6), o atual presidente do BC, Gabriel Galípolo, prestou depoimento como testemunha.'
  ] },

{ id: 'ibovespa-supera-200-mil-pontos', cat: 'economia', own: false, t: '2026-10-05T18', d: '5 out 2026', img: 'mercado', src: 'CNN Brasil', url: U.cnnMerc,
  photo: 'fotos/ibovespa-supera-200-mil-pontos.webp', photoAlt: 'Gráfico de alta em verde sobre a ponte Estaiada e prédios de São Paulo à noite', credit: 'Imagem ilustrativa',
  title: 'Ibovespa supera 200 mil pontos pela primeira vez após o 1º turno',
  sum: 'O índice subiu 7,70% na segunda-feira e fechou em 206.911 pontos. O dólar caiu 4,12% e terminou cotado a R$ 5,00.',
  body: [
    'Foi o primeiro fechamento da história do Ibovespa acima de 200 mil pontos. O mercado atribuiu o movimento ao resultado do primeiro turno da eleição presidencial.',
    'Nos contratos de juros futuros de prazo mais longo, as taxas caíram mais de 130 pontos-base.'
  ] },

/* ===================== TECNOLOGIA ===================== */
{ id: 'samsung-lucro-recorde-chips-ia', cat: 'tecnologia', own: true, t: '2026-10-08T08', d: '8 out 2026', img: 'tecnologia', read: 3,
  title: 'Samsung prevê lucro recorde de US$ 80 bilhões no trimestre, puxado por chips para IA',
  sum: 'É a primeira empresa de tecnologia a passar de 100 trilhões de wons de lucro operacional em um trimestre. As divisões de celulares e de TVs devem ter dado prejuízo.',
  body: [
    'A Samsung Electronics divulgou na quinta-feira (8) uma prévia do resultado do terceiro trimestre. O lucro operacional estimado é de 107,4 trilhões de wons, cerca de US$ 80 bilhões, alta de 782,5% em um ano, segundo o jornal Korea Herald. A receita também bateu recorde, com 195 trilhões de wons.',
    'Segundo o jornal sul-coreano, a Samsung é a primeira empresa de tecnologia do mundo a passar de 100 trilhões de wons de lucro operacional em um só trimestre. O valor supera o lucro operacional da Nvidia no trimestre encerrado em julho, de US$ 63,7 bilhões.',
    '## Memória para inteligência artificial',
    'O motor do resultado é a venda de memórias, em especial as do tipo HBM, usadas em data centers de inteligência artificial. Segundo a Exame, a fatia da Samsung nesse mercado subiu de 21% no primeiro trimestre para 33% no segundo, de acordo com a consultoria Counterpoint. A líder é a também sul-coreana SK Hynix, com 50%.',
    'Analistas estimam que a divisão de memórias tenha lucrado cerca de 110 trilhões de wons no trimestre.',
    '## Celulares no vermelho',
    'Já a divisão de celulares deve ter tido prejuízo de cerca de 1,5 trilhão de wons, e a de TVs e eletrodomésticos, de 700 bilhões a 800 bilhões, segundo estimativas de analistas. Mesmo com o recorde, a ação da Samsung caiu 1,86% na Bolsa de Seul. O balanço completo será divulgado em 29 de outubro.'
  ],
  box: { type: 'facts', title: 'Samsung no 3º trimestre', rows: [['Lucro operacional', '107,4 trilhões de wons (cerca de US$ 80 bi)'], ['Alta em um ano', '782,5%'], ['Receita', '195 trilhões de wons'], ['Balanço completo', '29 de outubro']] },
  sources: [['Korea Herald', U.khSamsung], ['Exame', U.exSamsung]] },

{ id: 'einstein-ataque-hacker-dados-pacientes', cat: 'tecnologia', own: false, t: '2026-10-08T15', d: '8 out 2026', img: 'tecnologia', src: 'Convergência Digital', url: U.cdEinstein,
  title: 'Hospital Albert Einstein confirma ataque hacker com acesso a dados de pacientes',
  sum: 'Podem ter sido expostos nomes, CPFs, datas de nascimento, receitas e resultados de exames. O caso foi comunicado à ANPD e à Polícia Federal.',
  body: [
    'O hospital, de São Paulo, afirma que o prontuário eletrônico e as demais plataformas funcionam normalmente e que não encontrou sinais de divulgação ou uso indevido dos dados.',
    'Segundo a Convergência Digital, o Einstein diz tratar o caso como máxima prioridade.'
  ] },

{ id: 'crew-12-volta-terra', cat: 'tecnologia', own: false, t: '2026-10-08T13', d: '8 out 2026', img: 'ciencia', src: 'Space.com', url: U.spaceCrew12,
  title: 'Astronautas da missão Crew-12 voltam à Terra depois de cerca de oito meses no espaço',
  sum: 'A cápsula Dragon pousou no Oceano Pacífico, perto de Los Angeles, na quinta-feira (8). A francesa Sophie Adenot, da agência espacial europeia, estava a bordo.',
  body: [
    'O pouso foi às 12h34 de Brasília. A tripulação tinha Jessica Meir e Jack Hathaway, da NASA, Sophie Adenot, da ESA, e o russo Andrey Fedyaev, da Roscosmos. Eles foram lançados em 13 de fevereiro.',
    'A Crew-12 substituiu a Crew-11, que voltou antes do previsto em janeiro, na primeira evacuação médica da Estação Espacial Internacional.'
  ] },

{ id: 'starlink-15-mil-satelites-celular', cat: 'tecnologia', own: false, t: '2026-10-08T07', d: '8 out 2026', img: 'celular', src: 'Tecnoblog', url: U.tbStarlink,
  title: 'EUA autorizam 15 mil satélites da Starlink para internet direto no celular',
  sum: 'A licença da FCC permite que a SpaceX venda o serviço sem depender de uma operadora parceira. O primeiro lote deve ser lançado em 2027.',
  body: [
    'Com a autorização, a SpaceX poderá competir diretamente com operadoras de telefonia dos EUA. Pelo menos metade dos satélites precisa estar em órbita até 2032.',
    'No Brasil, segundo o Tecnoblog, a Starlink ultrapassou a TIM em banda larga fixa e somou 65 mil acessos só em agosto, de acordo com a Anatel.'
  ] },

{ id: 'pix-1-bilhao-chaves', cat: 'tecnologia', own: false, t: '2026-10-08T11', d: '8 out 2026', img: 'celular', src: 'Convergência Digital', url: U.cdPix,
  title: 'Pix passa de 1 bilhão de chaves cadastradas',
  sum: 'Eram 1,008 bilhão de chaves em 30 de setembro, segundo o Banco Central. As chaves aleatórias são mais da metade.',
  body: [
    'As chaves aleatórias somam 526,8 milhões, ou 52,3% do total. Depois vêm as de celular (166,3 milhões), as de CPF (153,9 milhões) e as de e-mail (144,6 milhões).'
  ] },

{ id: 'gov-br-assinatura-instavel', cat: 'tecnologia', own: false, t: '2026-10-08T10', d: '8 out 2026', img: 'plataforma', src: 'Convergência Digital', url: U.cdGovbr,
  title: 'Assinatura eletrônica do Gov.br tem falhas há mais de uma semana',
  sum: 'O governo descarta ataque hacker, mas admite uma inconsistência no sistema. O restante do portal funciona normalmente.',
  body: [
    'O serviço é gratuito, exige conta nível prata ou ouro e passou de 500 milhões de assinaturas em maio. O Ministério da Gestão e o ITI não explicaram a causa do problema.'
  ] },

{ id: 'nobel-quimica-kagan-soai', cat: 'tecnologia', own: true, t: '2026-10-07T08', d: '7 out 2026', img: 'ciencia', read: 3,
  title: 'Nobel de Química premia descobertas sobre moléculas "espelhadas"',
  sum: 'O francês Henri Kagan, de 95 anos, e o japonês Kenso Soai, de 76, mostraram como reações químicas podem favorecer uma das duas formas de uma molécula, o que ajuda a fabricar remédios.',
  body: [
    'O Prêmio Nobel de Química de 2026 foi para o francês Henri B. Kagan e o japonês Kenso Soai. A Academia Real Sueca de Ciências anunciou o prêmio na quarta-feira (7), em Estocolmo, pela descoberta de efeitos não lineares e da autocatálise na síntese orgânica assimétrica.',
    '## Mão direita, mão esquerda',
    'Muitas moléculas importantes para a vida existem em duas versões que são o reflexo uma da outra, como as mãos direita e esquerda. Os seres vivos usam quase só uma delas, fenômeno chamado homoquiralidade. O presidente do comitê, Heiner Linke, disse que os premiados resolveram um mistério químico de mais de um século: como essa preferência pode surgir de forma espontânea.',
    'Em 1986, Kagan mostrou como manipular uma reação para produzir mais de uma das formas. Em 1995, Soai descreveu uma reação em que o próprio produto acelera a formação de mais moléculas iguais, a chamada autocatálise. Em 2003, ele conseguiu uma reação que gerou só uma das duas formas.',
    '## Para que serve',
    'A diferença importa na fabricação de remédios, porque as duas versões de um medicamento podem ter efeitos diferentes. O exemplo mais conhecido é a talidomida, eficaz em uma forma e tóxica na outra.',
    '## Os premiados',
    'Kagan é professor emérito da Universidade Paris-Saclay, e Soai é ligado à Universidade de Ciências de Tóquio. Os dois dividem 12 milhões de coroas suecas, pouco mais de US$ 1 milhão.'
  ],
  box: { type: 'facts', title: 'O prêmio', rows: [['Premiados', 'Henri B. Kagan (França) e Kenso Soai (Japão)'], ['Idades', '95 e 76 anos'], ['Tema', 'Síntese orgânica assimétrica'], ['Valor', '12 milhões de coroas suecas']] },
  sources: [['Al Jazeera', U.ajQuimica], ['Olhar Digital', U.odQuimica], ['O Povo', U.opovoQuimica], ['GEN', U.genQuimica]] },

{ id: 'nobel-medicina-optogenetica', cat: 'tecnologia', own: true, t: '2026-10-05T13', d: '5 out 2026', img: 'ciencia', read: 4,
  photo: 'fotos/nobel-medicina-optogenetica.webp', photoAlt: 'Telão no anúncio do Nobel de Medicina com as fotos de Karl Deisseroth, Peter Hegemann e Georg Nagel', credit: 'Anúncio do prêmio em Estocolmo. Imagem: reprodução/Nobel Prize',
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

{ id: 'gpt-6-chatgpt-todos', cat: 'tecnologia', own: false, t: '2026-10-07T15', d: '7 out 2026', img: 'tecnologia', src: 'OpenAI', url: U.oaiGpt6,
  title: 'OpenAI libera o GPT-6 no ChatGPT, com respostas interativas',
  sum: 'Assinantes recebem o novo modelo desde quarta; usuários gratuitos, a partir desta quinta. As respostas podem trazer gráficos, botões e calculadoras.',
  body: [
    'Segundo a empresa, o próprio modelo escolhe quando usar os elementos visuais e responde só com texto quando isso basta. A OpenAI diz que mais de 1,2 bilhão de pessoas usam o ChatGPT por semana.'
  ] },

{ id: 'google-synthid-aberto-publico', cat: 'tecnologia', own: false, t: '2026-10-07T14', d: '7 out 2026', img: 'celular', src: 'TechCrunch', url: U.tcSynth,
  title: 'Google abre ao público site que identifica imagens, vídeos e áudios feitos com sua IA',
  sum: 'O SynthID detecta a marca d’água invisível usada em conteúdos gerados por ferramentas como Gemini e Veo, mas não reconhece material de qualquer IA.',
  body: [
    'Antes, a ferramenta era restrita a jornalistas e pesquisadores. Segundo o TechCrunch, são feitas cerca de 1 milhão de verificações por dia.'
  ] },

];
