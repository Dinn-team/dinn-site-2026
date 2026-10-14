# Site multipágina: o que foi implementado e o que depende de decisão

Fonte: *Síntese de decisão — conteúdo e arquitetura do novo site da Dinn*
(14/10/2026). Branch `feat/reposicionar-narrativa-signals-to-action`.

## O que o documento pediu e onde está no site

| Pedido do documento | Onde está |
| --- | --- |
| Tese "sinais do canal farma em ação comercial" como eixo | Herói da home (`hero.*` em `pt.ts`), títulos das páginas |
| Categoria "Inteligência comercial para o canal farmacêutico"; IA como parte do *como*, não da definição | Pill do herói, `<title>` e descrição padrão (`Layout.astro`) |
| Prova social logo após a abertura, com título exato da relação | Faixa de logos do herói (`logos.title`) |
| Problema sem absolutos ("ninguém escuta") | `story.lines` |
| Ciclo observa → valida → entende → decide → age → aprende, em um exemplo | `inside.stages` (6 passos + exemplo), página `/plataforma` |
| Caminhos por cadeira, não abas | Seção `#areas` da home e `/solucoes/<área>` |
| Papéis de Stock, Manager, Insights, MCP, Conecta | `/plataforma` (com "o que não é") e cartões de `delivery` |
| Caso completo ou demonstrativo | `/clientes#caso` (identificado como demonstrativo) |
| Três conteúdos antes do CTA | `ContentTeaser` (guia, caso, blog) |
| CTA final sem prometer sell-out | `ctaFinal.title` |
| Confiança no centro | `/confianca` (observado, estimado, inferido; o que o sinal não prova) |
| Conteúdos e SEO | `/recursos`, guia `ausencia-ruptura-sortimento-giro`, JSON-LD de artigo |
| Lista de formulações a evitar | Revisadas nos textos; FAQ nova sobre cobertura e causa |

Páginas novas: `/plataforma`, `/solucoes`, `/solucoes/<6 áreas>`, `/confianca`,
`/clientes`, `/recursos`, `/recursos/<guia>`. Slugs em `src/lib/site-map.ts`;
textos em `src/i18n/locales/{pt,en,es}.pages.ts`.

## Como acrescentar uma área ou um guia

1. Área: adicionar o slug em `AREA_SLUGS` e um item em `solutions.items` nos três
   idiomas. A rota, o menu, a home e o rodapé acompanham sozinhos.
2. Guia: adicionar o slug em `GUIDE_SLUGS`, o texto em
   `resources.guide.slugs.<slug>` e um item em `resources.items`.

## Decisões que ficam com o Renan e o Edu

1. **Logos e relação com a Dinn.** O documento pede classificar cada nome (cliente
   ativo, projeto, piloto, parceiro) e aprovar o uso da marca. Hoje a faixa mostra
   Eurofarma, Libbs, Marjan e Sanofi sob o título neutro "Empresas que trabalham
   com a Dinn". Lilly não foi incluída: falta o arquivo do logo e a autorização.
2. **Depoimentos.** O documento pede nome, cargo, empresa, autorização e contexto
   da solução. O de Wilson Jorge de Assis Junior não traz a empresa; os dois da
   Eurofarma Chile falam de rotas de visita (produto anterior). Sugestão: revisar
   ou retirar antes de publicar.
3. **Selos de maturidade.** O documento recomenda diferenciar o que é operacional
   do que depende de implantação ou validação. A regra do Renan (13/10) é não ter
   selos de beta ou piloto. Foi mantida a regra; a diferença aparece em texto
   ("depende de plano e configuração", "escopo acordado"), não em selo.
4. **Abas por time na home.** O documento prefere entradas por área a uma
   sequência longa de abas. As abas foram mantidas, reposicionadas como "casos de
   uso" depois das áreas. Se preferir, podem sair da home e viver só nas páginas
   de área.
5. **Propaganda médica.** Não aparece na lista de áreas do documento. Segue como
   caso de uso na home e como situação da área Trade, KAM & Campo; confirmar.
6. **Conteúdos reais.** Só existem o guia desta entrega, o caso demonstrativo e o
   blog. Relatório periódico, playbooks e guias de integração dependem de
   produção editorial; nada foi anunciado como "em breve".
7. **Idiomas.** Os três idiomas continuam trocando no cliente, com o HTML estático
   em português. Para SEO em inglês e espanhol, o passo seguinte é ter URLs por
   idioma (`/en/`, `/es/`), como já existe nas páginas legais.
8. **Medição.** Eventos de GA4 por página, cadeira e CTA ainda não foram
   configurados.
