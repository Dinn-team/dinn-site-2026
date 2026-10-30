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

Estado das páginas (atualize ao migrar): home ✅ · plataforma · funcionalidades · soluções (+6 áreas) · clientes · recursos (blog, casos, novidades, comparativos) · planos ✅ · confiança ✅ · sobre ✅ · contato ✅ · integrações · cobertura · pesquisas ✅.
Migradas depois: termos, privacidade e cookies, suporte (`LegalPage.astro`: índice lateral ou duas colunas), recursos, novidades, comparativos, casos (galeria) e blog. Suporte refeito do zero a partir de `dinn-manager-app/docs/suporte` (`src/components/support/*`: maquetes do portal em `.pt`, demonstrações animadas em `demos.tsx`, textos em `content.ts`; flag `ZOE_LIVE` a confirmar). Ainda no layout antigo: guias (`/recursos/[slug]`), detalhe de caso e artigo do blog.

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
