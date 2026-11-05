# Design System v2 — base de toda tela do site

> **Fonte da verdade visual desde 29/10/2026.** Substitui `rules/DESIGN_SYSTEM.md` (v1, Britti Sans).
> A home nova é o modelo. Toda página, hero e seção nova segue este arquivo.
> Referências de origem: `rules/REFERENCES_UI_UX.md` (Harvey e ElevenLabs).
> Código de referência: `src/components/home2/*` e `src/styles/home2.css`.

## 1. Princípios

1. **Menos é mais.** Uma ideia por seção. Título curto, 1 frase de apoio, 1 ação.
2. **Imagem manda, texto apoia.** Mostre o produto. Texto fica curto e cinza.
3. **Uma cor de título.** Todo título usa `--foreground`. Sem destaque roxo, sem itálico, sem duas cores no mesmo título.
4. **Botão sempre com texto branco.** Nunca preto sobre roxo, nunca roxo e preto juntos no mesmo botão.
5. **Texto branco sobre cor.** Fundo com gradiente ou foto leva camada escura (35 a 70 %) e texto branco.
6. **Sem tag de status.** Nada de "Beta", "Novo" ou "Em breve" na interface do site.
7. **Cor só no conteúdo.** A interface é neutra. A cor vem dos gradientes da marca e do botão principal.
8. **Respiro.** Seções com muito espaço; nada encostado.
9. **Texto em STE** (ASD-STE100, ver `CLAUDE.md`).

## 2. Tokens (tema shadcn, preset `b1hriBA3cW`)

Os tokens vivem em `src/styles/global.css`. Use sempre o token, nunca o hex.

| Uso | Token |
|---|---|
| Fundo da página | `--background` |
| Superfície (cards, seções alternadas) | `--muted` |
| Texto e títulos | `--foreground` |
| Texto secundário | `--muted-foreground` |
| Borda | `--border` |
| Marca / botão principal | `--primary` (único roxo; derivados só por `color-mix` com transparência) |
| Texto sobre `--primary` e sobre imagem escura | `#fff` |
| Raio base | `--radius` (0,625 rem); card = 16 px; mídia grande = 12 a 24 px; botão = do tema |

Aliases do DS antigo ainda funcionam (`--bg-page`, `--text-primary`, `--brand`…), mas **não use em código novo**. `--brand` substitui o antigo `--accent` (que colide com o `--accent` do shadcn).

## 3. Tipografia

- **Títulos:** Roboto (`--font-display`), peso 400, tracking negativo.
- **Texto e UI:** Inter (`--font`).
- Não use Britti Sans.

| Elemento | Tamanho |
|---|---|
| H1 do hero | `clamp(36px, 5vw, 76px)`, entrelinha 1,04, **no máximo 3 linhas** |
| H2 de seção | `clamp(30px, 3.4vw, 48px)`, entrelinha 1,1 |
| Subtítulo de seção | 16 px, `--muted-foreground`, até 46 ch |
| Nome de card | 17 a 22 px, peso 500 |
| Texto de apoio / link | 14 a 15 px |

## 4. Layout

- Container `.h2-wrap`: `max-width: 1472px`, lateral `clamp(24px, 4vw, 56px)`.
- Seção `.h2-section`: padding vertical `clamp(72px, 9vw, 120px)`.
- Alterne fundo entre seções: `--background` e `--muted`.
- Toda seção nova começa com `.h2-head` (título + ação) ou `.h2-head.is-stack` (título + subtítulo).
- O design system antigo põe `margin-bottom: 80px` em `<section>`. Dentro de `.h2` a margem é zero. Páginas novas devem usar o wrapper `.h2`.
- Menu e rodapé são globais: **não mude** a estrutura. Só acrescente ou renomeie itens.

## 5. Padrões de seção (copie estes)

| Padrão | Componente | Regras |
|---|---|---|
| **Hero** | `Hero2.tsx` | Título à esquerda, subtítulo e botão à direita. Abaixo, mídia larga com textura e player/imagem. 1 botão primário + 1 link. |
| **Card de cliente / caso** | `Customers2.tsx` | Gradiente de `public/gradients`, camada preta 40 %, logo branca, nome, link "→". 3 visíveis, o resto em carrossel com setas (desktop). |
| **Lista + imagem (fixada)** | `Features2.tsx` | Seção fixada (sticky): a rolagem percorre os itens, 70 vh cada. Nomes curtos à esquerda; o ativo abre 1 frase e "Saiba mais" e mostra uma linha de avanço; a imagem passa como slide horizontal à direita. Clicar num nome rola até ele. Sem tags. |
| **Cards de área** | `Areas2.tsx` | Ilustração isométrica em linha fina (seção 7.1) animada no hover, nome, 1 frase de promessa. Fundo `--muted`. |
| **Showcase com abas** | `Showcase2.tsx` | Título central, até 3 abas em pílula, 5 posições fixas (cards + blocos vazios sutis), tudo visível em uma tela. |
| **Cards de recurso** | `Resources2.tsx` | 4 cards com gradiente e camada escura. Texto branco. |
| **Chat flutuante** | `ChatWidget2.tsx` | Botão à direita; abre no mesmo lugar, maior. Perguntas guiadas com `message-scroller`. Substitui qualquer seção de FAQ. |

Antes de criar um padrão novo, veja se algum acima serve. Se faltar, crie na mesma linguagem e acrescente aqui.

## 6. Componentes base

- **Botão:** `.btn .btn-primary` (fundo `--primary`, texto branco). Link secundário: `.h2-link` (texto `--foreground`, seta).
- **Abas:** pílula com borda `--border`; ativa com fundo `--background` e sombra leve.
- **Chip de mensagem do chat:** pílula/raio 16, borda `--border`.
- **Gradientes:** `public/gradients/g00…g11.avif`. Roxos e escuros: `g00`, `g08`, `g11`. Sempre com camada escura se houver texto.
- **Logo:** `public/logo/Dinn_logo_v2_Light.svg` sobre fundo claro; `Dinn_logo_v2_Dark.svg` sobre fundo escuro. Altura: 28 px no menu, 30 px no rodapé, 26 px sobre mídia.

## 6.1 Gradiente por página

O roxo `g00` é da home e da marca. Cada página interna usa **outro gradiente**, escolhido pela reação que a página deve provocar. Hero e fundo de formulário usam o do quadro. Texto sobre gradiente claro exige camada escura; cartões por cima não.

| Página | Gradiente | Reação |
|---|---|---|
| Home | `g00` roxo | Marca, ambição |
| Contato | `g07` laranja e amarelo | Calor, convite à ação |
| Confiança | `g06` verde-água e lilás | Calma, segurança |
| Plataforma | `g11` azul e violeta | Tecnologia |
| Soluções | `g08` violeta e rosa | Variedade |
| Sobre | `g11` azul e violeta | Seriedade, instituição |
| Clientes | `g09` rosa e laranja | Pessoas, prova |
| Planos | `g09` rosa e laranja | Decisão, valor |
| Recursos | `g03` creme e lilás | Leitura, calma |
| Pesquisas | `g10` amarelo e azul-claro | Curiosidade |

### Índice da página (páginas longas)

Traços fixos na borda direita (`.tr-index`, ver `TrustPage.tsx`): o da seção atual fica maior e em roxo, e o nome aparece ao passar o mouse. Só aparece dentro do corpo da página (IntersectionObserver). Nunca fica perto do menu principal. Use em páginas com 4 ou mais seções. Some abaixo de 1100 px.

### Colunas com fio fino

Itens paralelos (planos, tipos de sinal, modos de pesquisa) ficam em colunas separadas por fio de 1 px, com os rótulos numa coluna só e linhas alinhadas por subgrade (`.tr-sg`, `.pl-grid`). No celular viram cartões, com o rótulo em cada linha.

## 7. Imagens

- Sem imagem final: placeholder neutro ou gradiente da marca. Marque com `data-placeholder`.
- Animação de produto só com o front real do Dinn Manager (dados mock). Se não houver, use print.
- Nunca desenhe elemento que não existe no produto.

## 7.1 Ilustrações em linha (biblioteca própria)

Código: `src/components/illustrations/` (base isométrica em `iso.tsx`, peças em `index.tsx`) e `src/styles/illustrations.css`. Referências: Linear, ElevenLabs.

- Desenho isométrico, linha de **1 px** que não engrossa com a escala (`vector-effect: non-scaling-stroke`).
- Faces na cor do fundo (`--background`), traço em `--foreground`, guias pontilhadas, **um único detalhe** em `--primary`.
- Todas têm a mesma proporção (1,44:1). Cada uma define o seu `vb` (viewBox) com 20 % de folga.
- Movimento só no hover do cartão (`.il-host`): camadas que se abrem, lâminas que abrem em leque, fontes que se aproximam, fluxo que corre. Respeita `prefers-reduced-motion`.
- Peças atuais: Recursos (`resources.tsx`: `IlBlog`, `IlCases`, `IlChangelog`, `IlLayers`), Pesquisas (`IlStack`, `IlPlates`, `IlSources`, `IlFlow`) Planos, em "Além da assinatura" (`IlMcp`, `IlConnect`, `IlSearch`, `IlSteps`), Confiança, em "Três tipos de sinal" (`trust.tsx`: `IlObserved`, `IlEstimated`, `IlInferred`; linha cheia = dado direto, tracejada = estimado ou inferido), Sobre, em "Fale com a Dinn" (`about.tsx`: `IlContact`, `IlSupport`, `IlPrivacy`), e home, em "Para a sua área" (`areas.tsx`: `IlPricing`, `IlTrade`, `IlSupply`, `IlSac`, `IlLaunch`, `IlGovern`). Para criar outra, use `Box`, `Line3` e `Poly3`; desenhe do mais longe (x + y menor) para o mais perto.
- `.il-host.is-hover` força o estado de hover (testes e toque).

## 8. Responsivo

- ≤ 1024 px: hero em 1 coluna; grades em 2 colunas.
- ≤ 640 px: 1 coluna; setas do carrossel somem (rolagem por toque); blocos vazios do showcase somem.
- Chat: largura `min(400px, 100vw − 32px)`, altura `min(620px, 100dvh − 96px)`.
- Respeite `prefers-reduced-motion`.

## 9. Páginas internas (regra para as próximas telas)

Cada página interna passa a seguir este fluxo:

1. **Hero** no padrão da home (título à esquerda, apoio à direita, mídia opcional). Sem hero escuro com cena animada.
2. **Seções** só com os padrões da seção 5.
3. **Remova** ruído: bordas pesadas, sombras fortes, selos, textos longos ao lado de imagem, duas cores em título.
4. **Fechamento:** o chat flutuante já cobre dúvidas. Termine com o rodapé global.
5. Migrar uma página por vez, junto com o texto em STE.

Estado das páginas (atualize ao migrar): home ✅ · plataforma ✅ · funcionalidades ✅ (9 funcionalidades, 8 páginas, 03/11/2026) · soluções ✅ (+6 áreas ✅, 03/11/2026) · clientes ✅ · recursos (blog, casos, novidades, comparativos) · planos ✅ · confiança ✅ · sobre ✅ · contato ✅ · integrações · cobertura · pesquisas ✅.
Migradas depois: termos, privacidade e cookies, suporte (`LegalPage.astro`: índice lateral ou duas colunas), recursos, novidades, comparativos, casos (galeria) e blog. Suporte refeito do zero a partir de `dinn-manager-app/docs/suporte` (`src/components/support/*`: maquetes do portal em `.pt`, demonstrações animadas em `demos.tsx`, textos em `content.ts`; flag `ZOE_LIVE` a confirmar). Casos de uso (galeria e detalhe) ✅ em 03/11/2026, pelo padrão da seção 10. Ainda no layout antigo: guias (`/recursos/[slug]`) e artigo do blog.

### Maquetes animadas do produto (Suporte)

Para mostrar o produto, não corte um print estático. Use uma demonstração animada que mostra a tela inteira (`src/components/support/demos.tsx`).

- Cada demonstração roda em laço com um script de pausas (`useScript`). Depois do cleanup, a pausa nunca termina, para um laço antigo não mexer na tela.
- Com "reduzir movimento" ligado, mostre só o estado final.
- Cursor: seta clássica de 30 px (`Cursor`). A ponta fica no ponto clicado. O clique é um anel (`demo-ripple`), nunca um `scale` no cursor. Meça o alvo de novo antes de clicar.
- Todo `svg` fixo dentro de pai sem largura precisa de `max-width: none`: o estilo base limita o `svg` a 100% do pai.
- Maquetes do portal (`.pt`) usam a logo do site (`/logo/Dinn_logo_v2_Light.svg`, 20 px). Botão roxo sempre com texto branco, também dentro de regras copiadas de referência.
- Seção com várias etapas: use a seção fixada da home (`h2-pin`, `h2-feat-*`). A rolagem troca a etapa e a imagem.
- Cartões lado a lado usam o mesmo quadro (`aspect-ratio`) para ter a mesma altura.
- Todo botão de entrada leva a `/contato` (`contactUrl(origem)`). A Dinn é B2B enterprise: não linke `app.dinn.ai` nem login.

## 10. Checklist antes de entregar uma tela

- [ ] Título em 1 cor, até 3 linhas (hero).
- [ ] Botões com texto branco.
- [ ] Texto branco só sobre fundo escuro ou camada escura.
- [ ] Nenhuma tag de status.
- [ ] Tokens do tema, sem hex solto.
- [ ] Texto em STE nos 3 idiomas (EN, PT, ES).
- [ ] Desktop, tablet e mobile conferidos.
- [ ] `pnpm build` passa.


## 10. Padrão de atualização de páginas (definido em 03/11/2026)

A identidade visual da marca é a regra de design do site. Este padrão vale para toda página que ainda está na versão antiga ou que usa cor, fonte e grafia fora da identidade. Primeira página migrada por ele: **Casos de uso** (galeria e detalhe).

### 10.1 Paleta da identidade

| Cor | Hex | Token | Uso |
|---|---|---|---|
| Preto da marca | `#08090A` | `--brand-ink` | Fundo escuro de palcos, texto sobre cor clara |
| Roxo Dinn | `#5130E9` (referência da marca) | `--primary` | Cor principal. Botão, links ativos, destaque único |
| Verde-limão | `#E4F222` | `--brand-lime` | Apoio: marcas de confirmação, passo ativo, avatar. Texto sobre ele é `--brand-ink` |
| Laranja | `#FD673E` | `--brand-orange` | Apoio: calor, alerta, convite à ação |

- O roxo manda. Verde-limão e laranja entram como apoio, nunca no lugar do roxo no botão principal.
- Ponto em aberto: o token `--primary` hoje vale `#7008E7`, não `#5130E9`. Trocar o token muda o site todo. Decisão do Renan.
- Mantém valendo: título em uma cor só, botão com texto branco, sem tag de status.

### 10.2 Roteiro de uma atualização

1. **Varredura.** Rode `node .claude/skills/design-taste-frontend/scripts/inspect.mjs <url> --out .taste-skill/<pagina>-before` e leia as capturas. Registre as falhas.
2. **Layout v2.** Hero no padrão da home, seções nos padrões da seção 5, wrapper `.h2`, `.h2-head`, `.h2-section`. Troque classes antigas (`sp-*`, `wrap`, `as-*`) por `.h2-*` ou por classes novas do tema `<pagina>2`/`cs3`.
3. **Fonte e grafia.** Roboto nos títulos (peso 400), Inter no resto. Rótulos em caixa normal, sem eyebrow em caixa alta, sem numeração decorativa. Corpo a partir de 16 px.
4. **Cor.** Neutro por padrão. Dê cor com os degradês e com verde-limão ou laranja em pontos pequenos.
5. **Degradês.** Veja 10.3. Cada tipo de conteúdo recebe um degradê. Texto branco só sobre degradê escuro com camada de 30 a 45 %.
6. **Ilustração com movimento no hover.** Use as ilustrações de `src/components/illustrations/` dentro de um `.il-host`. O cartão inteiro dispara a animação. Respeite `prefers-reduced-motion`.
7. **Vínculo.** Toda página de história aponta para a página de clientes (`PATHS.customers`) e vice-versa.
8. **Fechamento.** Reinspecione em `.taste-skill/<pagina>-after`. Alvo: nenhuma falha, exceto "roxo" (é a marca) e "título de 3 linhas" (o DS permite 3).

### 10.3 Biblioteca de degradês

- Originais: `public/gradients/g00…g11.avif` (2400 px, leves).
- Novos da pasta `public/gradients/*-unsplash.avif` são pesados (até 4 MB). **Não use direto.** Use as cópias web de 1920 px em `public/gradients/web/`.

| Arquivo (`web/…`) | Cor | Uso indicado |
|---|---|---|
| `roxo-noite` | roxo e preto | Preço, inteligência. Palco escuro |
| `verde-noite` | verde-escuro e verde-claro | Supply, calma. Palco escuro |
| `laranja-noite` | laranja, vinho e preto | SAC, calor. Palco escuro |
| `azul-noite` | azul e preto | Trade, tecnologia |
| `vinho-noite` | vermelho e preto | Marketing, lançamento |
| `grafite` | cinza-claro e preto | TI, dados, governança |
| `lilas-azul` | lilás e azul | Fundo claro atrás de ilustração |
| `azul-claro` | creme e azul-claro | Fundo claro |
| `pessego`, `laranja-bolha` | laranja e pêssego | Fundo claro quente, fechamento |
| `rosa-fluxo`, `arco`, `rubro` | rosa, multicor, vinho | Reserva. Revise o contraste antes de usar |

Para texto escuro (fechamento, cartão claro) use `g10` (amarelo), `g03` ou `lilas-azul`. Para texto branco use os `*-noite` e `grafite`.

### 10.4 Casos de uso (modelo da migração)

- Galeria e detalhe: `src/components/site/CasesPages.tsx`, estilos em `src/styles/site-cases2.css`.
- O detalhe tem hero com gradiente escuro da área e a ilustração da área em um painel claro, problema com citação em gradiente, palco de rolagem (cena animada) sobre o gradiente, solução com resultados em verde-limão, casos relacionados e fechamento.
- Os casos de cliente ficam anônimos (decisão do Renan, 03/11/2026). Não há página por cliente nem campo de cliente em `src/data/cases.json`. O vínculo é com a página geral `/clientes`.

### 10.5 Clientes (/clientes e /clientes/<slug>)

- Modelo: as páginas de cliente do Clay (resumo, impacto, história, números, mais clientes). Código em `src/components/site/CustomersPages.tsx`, estilos em `src/styles/site-customers.css`, conteúdo em `src/data/customers/<slug>.ts`.
- Para criar a página de um cliente novo: acrescente uma entrada em `customers.ts` (a rota `/clientes/<slug>` nasce sozinha) e confirme o logo em `src/lib/clients.ts` e a cor em `src/lib/client-brand.ts`.
- O carrossel da home (`Customers2.tsx`) leva ao `/clientes/<slug>`. Cliente sem página leva a `/clientes`. Hoje todos os cinco têm página. Na página de um cliente, o mesmo carrossel mostra os demais.
- **Gráficos e telas nos cases (03/11/2026).** Cada bloco de `src/data/customers/<slug>.ts` aceita `viz`: barras, rosca, linha, antes e depois, linha do tempo, ilustração isométrica e tela do produto (`CaseViz.tsx`, `site-case-viz.css`). Use só número que já está no texto do bloco. Se o gráfico cobre a tabela inteira, tire a tabela. As telas (`AppScreens.tsx`) vêm do briefing `dinn-manager-app/docs/site-reproducao`: só Início, Localizar Produto e Mercado, com dados fictícios, dado de ontem (D-1) e a legenda "Dados e nomes ilustrativos". Sem telas Beta e sem as telas de rota, visita e NBA, que estão fora do menu atual.
- Citação só aparece com `approved: true`. Cada trecho que o documento do caso marca como "REVISAR" fica fora até a confirmação do cliente.
- O conteúdo está em português. EN e ES mostram o texto em português; os rótulos da interface já têm tradução (`clients.page.*`).

### 10.6 Soluções (/solucoes e /solucoes/<area>)

- Código: `src/components/site/SolutionsV2.tsx`, estilos em `src/styles/site-solutions2.css`, tema por área em `src/components/site/area-theme.ts` (ilustração, degradê claro, escuro e de fechamento).
- **Página principal:** hero com a tela Início do Dinn (`AppScreen`) sobre `g08`; "Por área" (cartões com ilustração e hover); "Por objetivo" (linhas com fio fino); "Por funcionalidade" (cartões); fechamento.
- **Página de área:** hero só com a tela do Dinn animada sobre o degradê escuro da área (a ilustração isométrica fica nos cartões, não na capa); pergunta e decisões; palco de rolagem com o exemplo passo a passo na mesma tela; limites; casos de uso da área (`CaseCard`); três outras áreas; fechamento em degradê claro da área.
- **Telas animadas (`AppDemos.tsx`, `site-app-demos.css`), revisão de 03/11/2026.** Reproduzem telas reais do briefing `dinn-manager-app/docs/site-reproducao`, só as em produção: Início (hub, Trade, Supply, Marketing), Mercado (Pricing), Localizar Produto (SAC) e Conexões (TI). No topo rodam em laço: o cursor escolhe produto, cidade ou mercado, os números contam e os gráficos se montam. No palco, cada passo do exemplo mostra um estado da tela e um anel no ponto certo. Sem ilustração abstrata, sem resposta do Insights (Beta) e sem ícone de relógio nos botões das telas. Para mudar o roteiro, edite `beats` (laço) e `steps` (palco) do `Def` da tela.
- Título do hero em uma cor só (`plain()` tira o `*destaque*`) e com até 8 palavras (STE). Os seis títulos foram encurtados em PT, EN e ES.
- Para uma área nova: acrescente em `AREA_SLUGS`, no dicionário `solutions.items` (3 idiomas) e em `area-theme.ts`.
- Cuidado: `home2.css` carrega depois das outras folhas. Para sobrescrever `.h2-media`, use `.h2 .classe` (2 classes).

### 10.7 Plataforma e Funcionalidades (/plataforma, /funcionalidades e /funcionalidades/<id>)

- **As nove funcionalidades (decisão do Renan, 03/11/2026):** Ruptura, Giro, Preço, Localizador de Produtos, Mercado, Oportunidades, Distribuição, Jean e Dinn Conecta. Não liste outras. Jean junta o antigo Dinn Insights e o Dinn Activities (a página aguarda a spec do Renan). Dinn Conecta junta as integrações (arquivo, API, BI, MCP) e leva a `/produtos/conecta`. A tela do Conecta (home, Plataforma e lista) não é uma tela do Dinn: é o mapa de conexões da página do Conecta, com os sinais em loop (`ConnectionMapDemo` em `offer/ConnectionMap.tsx`).
- Fonte única: `features.items` (página e lista) e `home2.features.items` (home, menu Plataforma e rodapé), nos 3 idiomas, na mesma ordem. `/solucoes` ("Por funcionalidade") usa a mesma lista.
- Código: `src/components/site/PlatformV2.tsx`, `src/components/site/FeaturesV2.tsx`, telas novas em `src/components/site/FeatureDemos.tsx`, estilos em `src/styles/site-features2.css` (prefixos `pf2-`, `ft2-` e `fd-` dentro das telas).
- **Uma tela real por funcionalidade.** `FEATURE_DEMO` liga cada id a uma tela do briefing `dinn-manager-app/docs/site-reproducao`. As telas de Soluções (`AppDemos.tsx`) aceitam outro roteiro pela prop `def`. A mesma tela aparece na home ("Como a Dinn funciona", só no slide ativo), na Plataforma, na lista e na página da funcionalidade.
- **Sem contorno roxo nas telas.** O passo ativo do palco não ganha anel nem borda: o cursor aponta o alvo. O contorno não existe no app.
- **Página de funcionalidade:** hero com a tela em laço sobre o degradê escuro da área principal; "Onde ela atua" (tela no Dinn, times que usam, decisão apoiada); palco com Entrada, Ação, Saída e Decisão; limite da leitura; três outras funcionalidades; fechamento.
- **Lista e Plataforma:** seletor com as nove abas e a tela da escolhida (`FeaturePicker`). A Plataforma tem ainda o ciclo de seis passos (uma tela por passo, `CYCLE_SCREENS`) e dados e integrações.
- Endereços antigos (`disponibilidade`, `estimado`, `historico`, `giro-preco`, `tempo-real`, `insights`, `priorizacao`, `exportacoes`) redirecionam em `astro.config.mjs`. `featurePath()` converte os nomes antigos.
- **Página da Jean (`/funcionalidades/jean`, `JeanPage.tsx`, telas em `JeanDemos.tsx`, estilos em `site-jean.css`).** Base: a spec de negócio "Dinn Atividades e Jean" (30/10/2026) e o plano de Atividades do Renan. Seções: hero com o pedido e o combinado; "Delegue como você pediria a alguém do time" (a frase de exemplo e as três formas de delegar); palco "Como a Jean trabalha" com seis passos e uma tela por passo; Atividades (o que precisa de você, em andamento, concluído); configurações (conexões, canais, autonomia, atenção); WhatsApp com o mesmo histórico no portal; tabela de autonomia; limites. Textos em `jean.*` nos 3 idiomas. Não cite fornecedor, infraestrutura nem prazo: a spec deixa essas decisões em aberto.
- Para mudar a lista: altere `FEATURE_SLUGS` (`site-map.ts`), os dois dicionários nos 3 idiomas, `features.page.screens`, `FEATURE_AREAS` e `FEATURE_DEMO`.
- A moldura das telas tem `data-ui`: a skill de front trata o conteúdo como interface real.

### 10.8 Menu, títulos, ícone da Jean e fotos (03/11/2026)

- **Menu simples, no estilo da ElevenLabs.** Barra de largura inteira (`.header` em `src/styles/global.css`): fundo branco quase opaco, desfoque leve e um fio fino embaixo. Sem pílula flutuante e sem sombra. Os submenus continuam. Botão de idioma em pílula com contorno e CTA roxo com texto branco. O menu tem uma versão de cor só (logo e texto escuros): não detecte a cor do fundo, porque a troca causava o pisca ao carregar. A receita do vidro, usada antes do menu simples, segue na skill `liquid-glass`.
- **Título em uma cor só e alinhado à esquerda.** O destaque `*assim*` dos dicionários não muda mais cor, peso nem estilo (`.em-light` herda tudo, em `global.css`). Não centralize título de seção nem de hero.
- **Ícone da Jean.** Sempre o `JeanOrb` (`src/components/site/JeanOrb.tsx`): a grade de pontos que pulsa, igual ao Orion e ao Dinn Manager. Não use Sparkles, Brain nem outro ícone da biblioteca para a Jean.
- **Fotos (casos de uso da home).** Fotos reais do Pexels em `public/showcase/`, com a lista e as fontes em `CREDITS.md`. Toda aba mostra 3 cards cheios: quando a aba tem 2 casos, o terceiro é um card em degradê que leva à lista de casos.
- **Hero da home com vídeo.** A capa é a tela Início do Dinn inteira e parada (`HomeDemo step={0}`) sobre o degradê `g08`, com um play redondo no centro. O clique troca a capa pelo vídeo "Um dia com o Dinn" (`public/video/dinn-institucional.mp4`, 1600 px, 12,6 MB, versão leve do render de 114 MB; o comando do ffmpeg está em `Hero2.tsx`). A capa vem do site, não de um quadro do vídeo: os quadros têm legenda e selos "Beta".
- **Telas da home ("Como a Dinn funciona"): movimento de apresentação (05/11/2026, skill `motion-de-produto`).** A câmera trabalha por planos, não persegue o cursor: abre a tela inteira para situar, vai à região do roteiro (`shot` no `Beat`) em 0,9 s com curva inOut e deriva devagar de 1,00 a 1,035 (`Frame` em `AppDemos.tsx`). O cursor anda em arco e o clique aperta e solta, com pulso no alvo (`data-press`). Números e gráficos usam `outExpo`. Menus, janelas e pinos entram com a mola do DS. A troca entre funcionalidades é um corte em movimento: a janela fica no lugar, a tela velha sobe e desfoca, a nova sobe do desfoque. O laço recomeça com um desfoque, sem salto. No roteiro: `shot` enquadra antes da ação; `cam` (`out` ou `{ at, z }`) enquadra depois. Em "reduzir movimento", tudo fica parado. Detalhes em `docs/motion-de-produto-skill.md`.
- **Padrão das telas animadas (05/11/2026).** Toda página que mostra uma tela do produto usa `ProductScreen` (`src/components/site/ProductScreen.tsx`) com uma tela de `FEATURE_DEMO` ou `AREA_DEMO` (`FeatureDemos.tsx`). Vale para home, Plataforma, funcionalidades, Soluções e Suporte. Regras, números e passo a passo para criar tela nova: `docs/padrao-telas-animadas.md`. São dez funcionalidades: as nove anteriores e o Suporte (`/suporte`).
- **Telas fiéis ao app (04/11/2026).** As nove telas da home, o herói, a Plataforma e Soluções usam `RealKit.tsx`, `RealHomeDemos.tsx`, `RealMapDemos.tsx` e `site-real-app.css`. Base: os prints da plataforma em `referencia-plataforma/` (uma pasta por funcionalidade). Regras: menu lateral aberto com rótulos, barra do topo com "Olá, Ana." e a data D-1, filtros em pílula, cards com borda fina, gráfico de área, selos de nível sem contorno, medidor de % de ruptura, "Consultar agora" e "Reportar". Tamanhos do app em px de CSS (tela de 1280 × 800). Mapas desenhados por nós: ruas e região em `public/app-screens/*.svg` (gere de novo com `node scripts/gen-app-maps.mjs`) e o Brasil em `RealGeo.ts`. Nunca use mapa, logo ou nome real de rede, distribuidor ou produto de cliente: os nomes vêm do modo demonstração do app (Cefalgin, Rede Farmacore, Drogaria Serrana…). Sem selo "Beta", sem cadeado e sem "recursos em teste grátis". As cores dentro da tela são as do app (`#5130E9`), presas em `site-real-app.css`.
- **Time em /sobre.** Seção "Quem faz a Dinn" com Edu, Renan e Vini (cargo e responsabilidades de `dinn-os/people/profiles`). Retrato vertical 4:5: salve em `public/sobre/time/<id>.webp` e preencha `TEAM_PHOTOS` em `AboutPage.tsx`. Sem foto, o cartão mostra as iniciais sobre o degradê.
- **Fotos do Pexels sem pessoa em destaque** nos casos de estoque parado, lançamentos e concorrência (trocadas em 03/11/2026).
- **Cabeçalho do Conecta** segue o padrão das demais páginas: título à esquerda, texto e botões à direita, ilustração `IlConnect` com movimento no hover.
- **Times que usam:** Ruptura, Giro e Preço servem todos os times. A página mostra "Todos os times" com link para `/solucoes`.
