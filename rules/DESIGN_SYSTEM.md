# DESIGN SYSTEM — Referência para IA

> Leia este arquivo completo antes de criar qualquer tela, componente ou trecho de código.
> Nunca use valores, fontes ou padrões que não estejam definidos aqui.

---

## 1. TIPOGRAFIA

### Fonte exclusiva: Britti Sans
- Usar em TODOS os elementos: headings, body, labels, botões, inputs, tooltips
- Nunca substituir por Inter, Roboto, Arial, system-ui ou qualquer outra fonte
- Fallback aceitável apenas em e-mail: `'Helvetica Neue', sans-serif`

```css
font-family: 'Britti Sans', 'Helvetica Neue', sans-serif;
```

### Pesos disponíveis
| Token | Weight | Uso |
|-------|--------|-----|
| Light | 300 | Somente italic em títulos grandes (momento editorial) |
| Regular | 400 | Body text, descrições, parágrafos |
| Semibold | 600 | Headings H2–H4, labels, nav links |
| Bold | 700 | Display, H1, CTAs, números de destaque |

### Escala tipográfica
| Nome | Tamanho | Weight | Letter-spacing | Line-height | Uso |
|------|---------|--------|---------------|-------------|-----|
| Display XL | 88px | 700 | -0.03em | 1.05 | Hero principal |
| Heading 1 | 48px | 700 | -0.025em | 1.1 | Título de seção |
| Heading 2 | 32px | 600 | -0.02em | 1.2 | Subtítulo |
| Heading 3 | 24px | 600 | -0.01em | 1.3 | Card title, aside |
| Body Large | 18px | 400 | 0 | 1.7 | Lead paragraph |
| Body | 16px | 400 | 0 | 1.65 | Texto corrido |
| Label / UI | 13px | 600 | 0.08em UPPER | — | Badges, seção labels |
| Caption | 11px | 400 | 0 | 1.5 | Meta, timestamps |

### Regra do italic editorial
O italic Light (weight 300) é reservado para **uma ou duas palavras** dentro de um título grande — nunca em body text corrido.

```html
<!-- CORRETO -->
<h1>
  Conectando estratégia
  <em style="font-weight: 300; font-style: italic; color: var(--text-muted)">e execução</em>
</h1>

<!-- ERRADO: italic em parágrafo -->
<p><em>Texto corrido em italic não é permitido.</em></p>
```

### Heading hero responsivo
```css
font-size: clamp(40px, 6vw, 88px);
font-weight: 700;
letter-spacing: -0.03em;
line-height: 1.05;
```

---

## 2. CORES

### Paleta base
| Nome | Hex | Uso |
|------|-----|-----|
| Accent | `#5625F2` | CTAs, links ativos, foco, accent primário |
| Black | `#1F2328` | Texto primário, headings, bg dark |
| Dark | `#2E343B` | Texto corpo, bg card dark |
| Body | `#777D8B` | Texto muted, descrições |
| Border | `#D7DAE1` | Bordas de componentes, divisores |
| Muted | `#767676` | Placeholders, labels auxiliares |
| White | `#FFFFFF` | Background de página, cards |

### Accent — estados
| Estado | Valor |
|--------|-------|
| Default | `#5625F2` |
| Hover | `#4118D4` |
| Active | `#3310B6` |
| Subtle (bg) | `rgba(86, 37, 242, 0.08)` |
| Ghost (bg) | `rgba(86, 37, 242, 0.04)` |
| Border sutil | `rgba(86, 37, 242, 0.2)` |

### Backgrounds semânticos
| Token | Valor | Uso |
|-------|-------|-----|
| `--bg-page` | `#FFFFFF` | Fundo de página |
| `--bg-surface` | `#F8F8FA` | Fundo de cards, inputs, hover states |
| `--bg-dark` | `#1F2328` | Seções dark, hero escuro |

### Dark mode — regras de cor
| Elemento | Light | Dark |
|----------|-------|------|
| Texto primário | `#1F2328` | `#FFFFFF` |
| Texto muted | `#777D8B` | `rgba(255,255,255,0.55)` |
| Texto sutil | `#767676` | `rgba(255,255,255,0.35)` |
| Background | `#FFFFFF` | `#1F2328` |
| Card bg | `#FFFFFF` | `rgba(255,255,255,0.04)` |
| Card border | `#D7DAE1` | `rgba(255,255,255,0.08)` |
| Accent card bg | `rgba(86,37,242,0.08)` | `rgba(86,37,242,0.15)` |
| Accent text dark | — | `#B79EFF` |

---

## 3. TOKENS CSS

Cole este bloco no `:root` do projeto. São os tokens canônicos — nunca use valores hardcoded fora deste mapa.

```css
:root {
  /* Cores */
  --color-accent:      #5625F2;
  --color-accent-hov:  #4118D4;
  --color-black:       #1F2328;
  --color-dark:        #2E343B;
  --color-body:        #777D8B;
  --color-border:      #D7DAE1;
  --color-muted:       #767676;
  --color-white:       #FFFFFF;

  /* Texto semântico */
  --text-primary:  var(--color-black);
  --text-body:     var(--color-dark);
  --text-muted:    var(--color-body);
  --text-subtle:   var(--color-muted);

  /* Backgrounds */
  --bg-page:     #FFFFFF;
  --bg-surface:  #F8F8FA;
  --bg-dark:     var(--color-black);

  /* Tipografia */
  --font: 'Britti Sans', 'Helvetica Neue', sans-serif;
  --text-xs:   11px;
  --text-sm:   13px;
  --text-base: 16px;
  --text-md:   18px;
  --text-lg:   24px;
  --text-xl:   32px;
  --text-2xl:  48px;
  --text-3xl:  64px;
  --text-4xl:  88px;

  /* Espaçamento (base 4px) */
  --sp-1:  4px;
  --sp-2:  8px;
  --sp-3:  12px;
  --sp-4:  16px;
  --sp-5:  20px;
  --sp-6:  24px;
  --sp-8:  32px;
  --sp-10: 40px;
  --sp-12: 48px;
  --sp-16: 64px;
  --sp-20: 80px;

  /* Border Radius */
  --r-sm:   4px;
  --r-md:   8px;
  --r-lg:   12px;
  --r-xl:   20px;
  --r-full: 9999px;

  /* Sombras */
  --shadow-sm: 0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04);
  --shadow-md: 0 4px 16px rgba(0,0,0,0.07), 0 2px 6px rgba(0,0,0,0.04);

  /* Transições */
  --ease:        ease 0.2s;
  --ease-out:    ease-out 0.2s;
  --ease-spring: cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.3s;
}
```

---

## 4. SHADCN/UI — CONFIGURAÇÃO

### Init
```bash
pnpm dlx shadcn@latest init --preset b5xJamFXc --template astro --monorepo --rtl --pointer
```

### Mapeamento de tokens (globals.css)

```css
@layer base {
  :root {
    --background:            0 0% 100%;       /* #FFFFFF */
    --foreground:            214 15% 15%;     /* #1F2328 */
    --card:                  0 0% 100%;
    --card-foreground:       214 15% 15%;
    --popover:               0 0% 100%;
    --popover-foreground:    214 15% 15%;
    --primary:               257 88% 55%;     /* #5625F2 */
    --primary-foreground:    0 0% 100%;
    --secondary:             220 13% 95%;
    --secondary-foreground:  214 15% 20%;
    --muted:                 220 13% 95%;
    --muted-foreground:      216 9% 54%;      /* #777D8B */
    --accent:                257 88% 55%;
    --accent-foreground:     0 0% 100%;
    --destructive:           0 72% 51%;
    --destructive-foreground:0 0% 100%;
    --border:                216 14% 87%;     /* #D7DAE1 */
    --input:                 216 14% 87%;
    --ring:                  257 88% 55%;     /* accent */
    --radius:                0.5rem;          /* 8px base */
  }

  .dark {
    --background:            214 15% 15%;     /* #1F2328 */
    --foreground:            0 0% 95%;
    --card:                  214 13% 18%;     /* #2E343B */
    --card-foreground:       0 0% 95%;
    --popover:               214 13% 18%;
    --popover-foreground:    0 0% 95%;
    --primary:               257 88% 65%;
    --primary-foreground:    0 0% 100%;
    --secondary:             214 13% 22%;
    --secondary-foreground:  0 0% 85%;
    --muted:                 214 13% 22%;
    --muted-foreground:      216 9% 60%;
    --border:                214 13% 25%;
    --input:                 214 13% 25%;
    --ring:                  257 88% 65%;
  }
}
```

---

## 5. COMPONENTES

### Botão
- Border-radius: sempre `--r-full` (9999px) — nunca usar raio menor em botão
- Font-weight: 600
- Transição: `all 0.18s ease`

```css
/* Base */
.btn {
  font-family: var(--font);
  font-weight: 600;
  font-size: 13px;
  border-radius: var(--r-full);
  padding: 10px 20px;
  border: 1.5px solid transparent;
  cursor: pointer;
  transition: all 0.18s ease;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

/* Variantes */
.btn-primary  { background: #5625F2; color: #fff; border-color: #5625F2; }
.btn-primary:hover { background: #4118D4; }

.btn-outline  { background: transparent; color: var(--text-primary); border-color: var(--color-border); }
.btn-outline:hover { border-color: var(--text-primary); }

.btn-ghost    { background: transparent; color: var(--text-muted); border-color: transparent; }
.btn-ghost:hover { background: var(--bg-surface); color: var(--text-primary); }

/* Tamanhos */
.btn-sm { padding: 7px 16px; font-size: 11px; }
.btn-lg { padding: 14px 32px; font-size: 16px; }
```

### Card
```css
/* Default — para grids e listagens */
.card {
  background: var(--bg-page);
  border: 1px solid var(--color-border);
  border-radius: var(--r-lg);    /* 12px */
  padding: var(--sp-6);          /* 24px */
  box-shadow: var(--shadow-sm);
}

/* Elevated — para hero e features */
.card-elevated {
  background: var(--bg-page);
  border: 1px solid var(--color-border);
  border-radius: var(--r-xl);    /* 20px */
  padding: var(--sp-8);          /* 32px */
  box-shadow: var(--shadow-md);
}

/* Dark */
.card-dark {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: var(--r-lg);
  padding: var(--sp-6);
}
```

### Input
```css
.input {
  font-family: var(--font);
  font-size: 14px;
  color: var(--text-primary);
  background: var(--bg-page);
  border: 1.5px solid var(--color-border);
  border-radius: var(--r-md);   /* 8px — nunca full em input */
  padding: 10px 16px;
  width: 100%;
  outline: none;
  transition: border-color 0.15s;
}
.input:focus { border-color: var(--color-accent); }
.input::placeholder { color: var(--text-subtle); }
```

### Badge / Tag
```css
.badge {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  border-radius: var(--r-full);
  padding: 3px 10px;
}

.badge-accent  { background: rgba(86,37,242,0.08); color: #5625F2; border: 1px solid rgba(86,37,242,0.2); }
.badge-neutral { background: var(--bg-surface); color: var(--text-muted); border: 1px solid var(--color-border); }
.badge-dark    { background: #1F2328; color: #fff; }
```

### Header / Navegação
```css
.header {
  position: fixed;
  top: 0; left: 0; right: 0;
  display: flex;
  align-items: center;
  padding: 0 var(--sp-8);
  height: 64px;
  z-index: 100;
  transition: background 0.2s, border-color 0.2s;
}

/* Após scroll (adicionar via JS ao detectar scrollY > 40) */
.header.scrolled {
  background: rgba(255,255,255,0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--color-border);
}

/* Dark mode scrolled */
.dark .header.scrolled {
  background: rgba(31,35,40,0.85);
}
```

---

## 6. GRID E LAYOUT

```
Container: max-width 1280px, margin: 0 auto
Colunas: 12
Gutter: 24px

Padding lateral:
  mobile  (<640px):  24px
  tablet  (640px+):  40px
  desktop (1024px+): 64px

Breakpoints:
  --bp-sm:  640px
  --bp-md:  768px
  --bp-lg:  1024px
  --bp-xl:  1280px
```

```css
.container {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 var(--sp-6);
}

@media (min-width: 640px)  { .container { padding: 0 var(--sp-10); } }
@media (min-width: 1024px) { .container { padding: 0 var(--sp-16); } }
```

---

## 7. BORDER RADIUS — TABELA DE USO

| Token | Valor | Usar em |
|-------|-------|---------|
| `--r-sm` | 4px | Tags pequenas, micro elementos |
| `--r-md` | 8px | Inputs, selects, menus dropdown |
| `--r-lg` | 12px | Cards padrão, modais, popovers |
| `--r-xl` | 20px | Cards hero, drawers, containers |
| `--r-full` | 9999px | Botões, badges, pills, avatars |

**Regra:** nunca misturar raios dentro de um mesmo componente (ex: botão com r-md no container e r-full no hover).

---

## 8. ESPAÇAMENTO

Escala baseada em múltiplos de 4px. Nunca usar valores fora desta escala.

| Token | Valor | Uso típico |
|-------|-------|-----------|
| `--sp-1` | 4px | Gap entre ícone e label |
| `--sp-2` | 8px | Padding interno de badges |
| `--sp-3` | 12px | Gap entre cards pequenos |
| `--sp-4` | 16px | Padding interno de inputs |
| `--sp-5` | 20px | Padding de botão LG |
| `--sp-6` | 24px | Padding de card, gutter |
| `--sp-8` | 32px | Padding de card elevated |
| `--sp-10` | 40px | Espaço entre seções pequenas |
| `--sp-12` | 48px | Margin entre componentes |
| `--sp-16` | 64px | Padding de seção |
| `--sp-20` | 80px | Margin entre seções grandes |

---

## 9. MOTION

```css
/* Curvas */
--ease:        ease 0.2s;
--ease-out:    ease-out 0.2s;
--ease-spring: cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.3s;

/* Onde usar cada uma */
/* ease       → botões, cores, opacidade */
/* ease-out   → cards hover (translateY), navegação */
/* ease-spring → elementos hero, modais, drawers */
```

```css
/* Scroll reveal — padrão de entrada */
.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
```

---

## 10. REGRAS ABSOLUTAS

Estas regras nunca devem ser violadas, independente do contexto:

1. **Fonte** — Britti Sans em tudo. Sem exceção.
2. **Botões** — sempre `border-radius: 9999px`. Nunca quadrado ou com raio menor.
3. **Inputs** — sempre `border-radius: 8px`. Nunca full.
4. **Accent** — `#5625F2` é o único roxo do sistema. Não criar outras tonalidades de roxo.
5. **Espaçamento** — somente tokens `--sp-*`. Nunca valores como `margin: 15px` ou `padding: 7px`.
6. **Letter-spacing** — headings sempre negativos (-0.01em a -0.03em). Labels sempre positivos (0.06em a 0.12em). Body sempre 0.
7. **Italic** — somente Light 300, somente em palavras dentro de headings grandes. Nunca em body.
8. **Uppercase** — somente em labels de seção (section labels) e badges. Nunca em headings ou body.
9. **Sombras** — usar apenas `--shadow-sm` e `--shadow-md`. Nunca criar sombras customizadas.
10. **Cores hardcoded** — nunca usar hex diretamente no JSX/TSX. Sempre via CSS variable ou className Tailwind mapeada.

---

## 11. VOICE & COPYWRITING

### Tom
- Direto e técnico, mas acessível
- Orientado a resultado: o que o usuário *ganha*, não o que o produto *é*
- Números como âncora: "800+ clientes", "3x mais rápido", "98% satisfação"

### CTAs
```
✓ "Solicitar demo"
✓ "Começar agora"
✓ "Ver cases"
✓ "Explorar soluções"

✗ "Clique aqui"
✗ "Saiba mais" (sem contexto)
✗ "Submit"
✗ "Enviar"
```

### Heading pattern
```
Linha 1: verbo ou substantivo forte — peso bold
Linha 2: complemento em italic light (opcional, uma palavra ou frase curta)
Linha 3: conclusão — peso bold
```

---

*DESIGN_SYSTEM.md v1.0 — Maio 2026*
*Usar como contexto inicial em toda sessão de desenvolvimento de UI.*
