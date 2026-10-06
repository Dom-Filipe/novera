# Novera

**Informação sem fronteiras.** Portal de notícias do Brasil e do mundo, com seis editorias: Nacional, Internacional, Esportes, Cultura, Economia e Tecnologia.

## O que tem

- Página inicial com destaques, últimas notícias, escolhas da redação e um bloco por editoria
- Página para cada editoria, com 10 notícias cada (60 no total)
- Página individual para cada matéria
- Busca por palavra, com filtro por editoria
- Menu lateral para celular
- Rodapé com editorias, páginas institucionais e newsletter
- Modo escuro automático, conforme o tema do aparelho

## Como rodar

O site é um único arquivo estático. Abra `index.html` no navegador ou publique a pasta em qualquer hospedagem estática (GitHub Pages, Vercel, Netlify).

Para ativar o GitHub Pages: **Settings › Pages › Source: Deploy from a branch › main / (root)**.

## Estrutura

| Arquivo | Conteúdo |
|---|---|
| `index.html` | O site pronto, gerado pelo `build.js`. Não editar à mão |
| `news.js` | Todo o conteúdo: topo, destaques e as 60 notícias |
| `src/template.html` | Layout, estilos e lógica do site |
| `build.js` | Valida o `news.js` e gera o `index.html` (`node build.js`) |
| `ATUALIZACAO.md` | Roteiro da atualização diária das notícias |
| `redes/` | Textos prontos do dia para WhatsApp, Instagram e X |
| `n/` | Páginas de compartilhamento: o link `/n/<id>` de cada notícia, usado nas redes |
| `og/` | Imagens de prévia dos links (geradas por `scripts/og.py`) |
| `assets/` | Ilustrações originais da Novera em SVG |
| `fotos/` | Imagens das notícias em WebP, com o nome igual ao identificador da notícia |
| `PROMPTS-IMAGENS.md` | Prompts para gerar as imagens que faltam |

## Imagens das notícias

Cada notícia procura sozinha o arquivo `fotos/<identificador>.webp`. Se ele existir, a imagem aparece com a legenda "Imagem ilustrativa". Se não existir, aparece a ilustração da editoria. A lista de nomes e os prompts estão em `PROMPTS-IMAGENS.md`.

## Antes de ir ao ar

- Preencher os campos marcados como `[NOME]` e `[E-MAIL]` em Expediente, Contato, Privacidade e Anuncie
- Ligar a newsletter e o formulário de contato a um serviço de e-mail (hoje eles só exibem um aviso)
- Revisar os textos de Política de privacidade e Termos de uso com um profissional

## Conteúdo

Matérias marcadas como **Da redação** foram escritas pela Novera. As demais são resumos com crédito e link para a reportagem original.
