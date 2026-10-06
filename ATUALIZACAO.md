# Atualização diária da Novera

Este é o roteiro da atualização automática que roda todo dia de manhã. Também serve para quem for atualizar o site à mão.

## Arquivos

| Arquivo | Para que serve |
|---|---|
| `news.js` | **Único arquivo de conteúdo.** Topo do site (`META`), destaques (`FEATURED`), escolhas da redação (`PICKS`), links das fontes (`U`) e as 60 notícias (`NEWS`). |
| `src/template.html` | Layout, estilos e lógica do site. Não mexer na atualização diária. |
| `build.js` | Valida `news.js` e gera o `index.html`. Rodar com `node build.js`. |
| `fotos/<id>.webp` | Foto de cada notícia. Cada notícia acha a sua foto pelo id. |
| `PROMPTS-IMAGENS.md` | Prompts das imagens que ainda faltam. |

## Passo a passo

1. **Pesquisar** as notícias mais importantes das últimas 24 a 48 horas em cada editoria: Nacional, Internacional, Esportes, Cultura, Economia e Tecnologia. Use fontes confiáveis, como Agência Brasil, Agência Senado, CNN Brasil, Folha, Estadão, O Globo, Valor, BBC Brasil, DW, Reuters, AFP, ge e Lance!. Abra a reportagem e confira os números antes de usar.
2. **Atualizar o topo (`META`)** com a data de hoje por extenso, a edição e o último fechamento do Ibovespa (pontos e variação) e do dólar (valor e variação).
3. **Renovar as notícias** de cada editoria:
   - Cada editoria fica com **exatamente 10 notícias**.
   - Tire as mais antigas ou as que perderam a importância, e coloque as novas no lugar.
   - Mantenha as que continuam relevantes. O segundo turno, por exemplo, segue relevante até 25 de outubro.
   - Cada editoria tem **2 ou 3 matérias da redação** (`own: true`), com texto mais completo e fontes. As demais são resumos de parceiros (`own: false`), com `src` e `url`.
4. **Atualizar `FEATURED` e `PICKS`** com as notícias mais importantes do dia. Use ids de matérias da redação.
5. **Atualizar `PROMPTS-IMAGENS.md`:** acrescente um prompt para cada notícia nova e retire os prompts das notícias que saíram.
6. **Rodar `node build.js`.** Ele precisa terminar sem erros. Se der erro, corrija `news.js` e rode de novo.
7. **Salvar no GitHub** com a mensagem `Atualização diária: <data>`, direto na branch `main`. A Vercel publica sozinha.

## Formato de uma notícia

```js
{ id: 'slug-curto-da-noticia', cat: 'economia', own: true, t: '2026-10-07T08', d: '7 out 2026', img: 'mercado', read: 3,
  title: 'Título objetivo, com o fato principal',
  sum: 'Linha fina de uma ou duas frases com os números mais importantes.',
  body: [
    'Primeiro parágrafo com o fato principal, quem, quando e onde.',
    '## Intertítulo',
    'Parágrafo de contexto.'
  ],
  sources: [['Nome da fonte', 'https://link-da-reportagem']] },
```

- **`id`:** letras minúsculas, números e hífens, único. **Uma notícia que continua no site mantém o mesmo id**, porque é por ele que a foto é encontrada.
- **`cat`:** `nacional`, `internacional`, `esportes`, `cultura`, `economia` ou `tecnologia`.
- **`t`:** data e hora no formato `AAAA-MM-DDTHH`. É o que ordena as "Últimas notícias".
- **`d`:** a data como aparece para o leitor, por exemplo `7 out 2026`.
- **`img`:** a ilustração de reserva, usada enquanto não houver foto. As opções são `eleicao`, `congresso`, `mundo`, `protesto`, `esportes`, `pista`, `cultura`, `palco`, `arte`, `mercado`, `plataforma`, `tecnologia`, `ciencia` e `celular`.
- **Matéria da redação (`own: true`):** leva `read` (minutos de leitura) e `sources`. Pode levar um `box` opcional (`bars`, `table`, `facts` ou `steps`; veja os exemplos existentes em `news.js`).
- **Notícia de parceiro (`own: false`):** leva `src` (nome do veículo) e `url` (link da reportagem). O `body` tem de 1 a 3 parágrafos curtos.
- **Notícia nova não recebe `photo`.** Ela usa a ilustração até alguém subir `fotos/<id>.webp`. Não apague os campos `photo`, `photoAlt` e `credit` das notícias que continuam no site.

## Regras editoriais

- **Só fatos confirmados na fonte.** Números, nomes, datas e placares têm que estar na reportagem citada. Na dúvida, deixe de fora.
- **Texto com palavras próprias.** Nunca copie frases das reportagens. Resuma e reescreva.
- **Toda notícia tem crédito e link** para a fonte original.
- **Política com equilíbrio:** tom neutro, sem adjetivos de opinião, e espaço proporcional para os dois lados na disputa presidencial.
- **Linguagem simples e direta**, em português do Brasil, com frases curtas. Sem sensacionalismo.
- **Imagens:** nunca gere imagens de pessoas reais. Nos prompts, descreva cenas, lugares e objetos, sem escudos, logotipos ou marcas.

## Relatório do dia

Ao terminar, informe:
- quantas notícias entraram e saíram em cada editoria;
- os novos destaques da home;
- a lista de notícias novas que estão **sem foto**, com o nome do arquivo esperado (`fotos/<id>.webp`).
