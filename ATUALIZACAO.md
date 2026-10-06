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
| `redes/AAAA-MM-DD.md` | Textos do dia para WhatsApp, Instagram e X. |
| `n/<id>.html` | Página de compartilhamento de cada notícia, gerada pelo `build.js`. É o link usado nas redes. |
| `og/<id>.jpg` | Imagem de prévia de cada link, gerada por `scripts/og.py`. |

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
6. **Escrever os textos das redes** em `redes/AAAA-MM-DD.md`, com a data de hoje. Veja a seção "Redes sociais" abaixo.
7. **Gerar as imagens de prévia** com `python3 scripts/og.py` (instale o Pillow com `pip install pillow` se faltar).
8. **Rodar `node build.js`.** Ele precisa terminar sem erros. Se der erro, corrija `news.js` ou o arquivo das redes e rode de novo.
9. **Salvar no GitHub** com a mensagem `Atualização diária: <data>`, direto na branch `main`. A Vercel publica sozinha.

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

## Redes sociais

Todo dia, junto com o site, crie `redes/AAAA-MM-DD.md` seguindo o modelo do arquivo mais recente da pasta `redes/`.

**Coordenação com o site:**
- Os textos só falam de notícias que **estão no site nesta atualização**, com os mesmos números e as mesmas palavras-chave da matéria.
- Todo link é `<META.siteUrl>/n/<id>`, usando o id da notícia em `news.js`. O `build.js` recusa a publicação se algum link apontar para uma notícia que não está no site.
- Prefira as matérias da redação (`own: true`) e os destaques da home (`FEATURED`).

**O que o arquivo precisa ter:**
- **WhatsApp:** um boletim da manhã com 5 manchetes, uma linha cada, seguida do link; mais 2 mensagens avulsas para o meio-dia e o fim da tarde. Use `*negrito*` do WhatsApp com moderação.
- **Instagram:**
  - o **link da bio** do dia, que é o da matéria do carrossel principal;
  - **3 carrosséis** de 5 ou 6 telas, com capa, 3 ou 4 telas de fatos com números e uma tela final "Link na bio" ou "Link nos stories";
  - uma **legenda** para cada carrossel, com 2 parágrafos curtos e de 2 a 4 hashtags, sempre incluindo `#novera`;
  - a **imagem de capa** indicada (`og/<id>.jpg`, quando houver);
  - **3 ou 4 stories** com o texto da tela e o link do adesivo.
- **X:** um **fio** de 3 a 5 posts sobre a principal notícia do dia e de 6 a 8 **posts avulsos**, cada um com o fato principal e o link. Cada post tem no máximo **280 caracteres**, contando o link como 23.

**Tom:** informativo, sem caça-clique, sem opinião e sem emojis em excesso. Em política, apresente os números dos dois lados com o mesmo destaque.

## Relatório do dia

Ao terminar, informe:
- quantas notícias entraram e saíram em cada editoria;
- os novos destaques da home;
- a lista de notícias novas que estão **sem foto**, com o nome do arquivo esperado (`fotos/<id>.webp`);
- o nome do arquivo de redes do dia (`redes/AAAA-MM-DD.md`).
