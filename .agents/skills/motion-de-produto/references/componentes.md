---
title: Componentes de movimento para demonstração de produto
status: draft
owner: Marketing (Renan Cavalheiro)
version: 0.1.0
last_updated: 2026-11-05
review_cycle: monthly
source_of_truth: this-file
---

# Componentes de movimento

O que o Davinci constrói uma vez e reaproveita em todo vídeo. O código mora em
`video/biblioteca/` quando for promovido. Até lá, vive no projeto do vídeo.

## O que o vídeo 1 já tem

Em `video/projetos/2026-11-03-institucional-um-dia-com-o-dinn/05-build/src/`:

| Peça | Onde | Faz |
|---|---|---|
| `useT`, `p`, `lerp`, `keys` | `lib/anim.ts` | tempo local da cena, progresso de 0 a 1, interpolação por quadros-chave |
| `outExpo`, `inOut`, `spring` | `lib/anim.ts` | as três curvas (a mola é a do Design System) |
| `reveal`, `pop` | `lib/anim.ts` | revelação de 24 px em 0,6 s e entrada com mola |
| `typed`, `fmt` | `lib/anim.ts` | texto digitado e número em pt-BR |
| `timeline.json`, `palavras.json` | `data/` | tempo único de cenas, efeitos e palavras |
| `AppWindow`, `Stage`, `ui.tsx`, `Icons` | `components/` | janela do app reconstruída, palco, cartão, chip, seletor, ícones |

Isso é o ponto forte a manter (ver a comparação no `ESTUDO`).

## O que falta

| Componente | Regra | Para que serve |
|---|---|---|
| `ZoomRegiao` | 3 | a câmera vai a uma região da interface |
| `Cursor` e `Clique` | 2 | cursor em curva, aperta e solta |
| `Digitando` v2 | 2 | digitação com variação por caractere |
| `Contador` | 8 | número que anima e termina no valor exato |
| `BarraQueCresce` | 8 | barra ou linha de gráfico |
| `LinhaQueSeDesenha`, `PontoNoTrilho` | 5 e 6 | fluxo entre partes |
| `Escalonar` | 5 | entrada de lista com 60 a 100 ms |
| `NaPalavra` | 4 | acha o quadro em que uma palavra começa |
| `CartaoRaciocinio` | 2 | linhas reveladas uma a uma |
| `ChipsDeFonte` | 10 | fonte e data do dado |
| `CartaoCapitulo` | R13 | capítulo de tour longo |
| `CortePorForma` | 6 | a forma que sai é a que entra |
| `Camera` | 7 | deriva lenta por cena |
| `Grao` | mundo | ruído sobre fundo escuro, 4 a 8% |
| `Assinatura` | R12 | o símbolo vira o logo |

Os componentes `EmDois`, `PecaRecortada`, `PalavraColagem` e `Assinatura` em 3D do
`ESTUDO` ficam bloqueados até o owner decidir o mundo visual da Dinn.

## Esboços

Todos usam as funções de `lib/anim.ts` (tempo `t` em segundos, local da cena). A
**matemática** de cada esboço foi testada em 05/11/2026 num script avulso: o contador
termina no valor exato, o zoom coloca o centro da região no centro da tela, o cursor
sai e chega nos pontos certos. A **integração com o Remotion não foi executada**. Rode
`npx remotion still` antes de confiar.

### Contador

```ts
import { lerp, p, outExpo, fmt } from "./lib/anim";

/** Valor do contador no tempo t. Em t >= inicio+dur, devolve `ate` exato. */
export const contar = (t: number, inicio: number, dur: number, de: number, ate: number) =>
  lerp(de, ate, p(t, inicio, dur, outExpo));

// uso: <span style={{ fontVariantNumeric: "tabular-nums" }}>{fmt(contar(t, 1, 1.1, 0, 25), 0)}</span>
```

### Zoom à região

```ts
import { lerp, p, inOut } from "./lib/anim";

type Regiao = { x: number; y: number; w: number; h: number };

/** Estilo para o contêiner da tela. `regiao` está nas coordenadas da tela cheia. */
export const zoomRegiao = (
  t: number, inicio: number, dur: number,
  regiao: Regiao, tela: { w: number; h: number }, margem = 0.1,
) => {
  const k = p(t, inicio, dur, inOut);
  const alvo = Math.min(tela.w / (regiao.w * (1 + 2 * margem)), tela.h / (regiao.h * (1 + 2 * margem)));
  const cx = regiao.x + regiao.w / 2;
  const cy = regiao.y + regiao.h / 2;
  const s = lerp(1, alvo, k);
  const tx = lerp(0, tela.w / 2 - alvo * cx, k);
  const ty = lerp(0, tela.h / 2 - alvo * cy, k);
  return { transformOrigin: "0 0", transform: `translate(${tx}px, ${ty}px) scale(${s})` };
};
```

Para a escala não passar de 3 em uma região muito pequena, limite `alvo` com `Math.min(alvo, 3)`.

### Cursor em curva

```ts
import { p, inOut } from "./lib/anim";

/** Posição do cursor entre a e b, em curva. `curva` de 0,1 a 0,25 dá um arco natural. */
export const cursor = (
  t: number, inicio: number, dur: number,
  a: [number, number], b: [number, number], curva = 0.18,
): [number, number] => {
  const k = p(t, inicio, dur, inOut);
  const mx = (a[0] + b[0]) / 2, my = (a[1] + b[1]) / 2;
  const dx = b[0] - a[0], dy = b[1] - a[1];
  const c: [number, number] = [mx - dy * curva, my + dx * curva]; // ponto de controle
  return [
    (1 - k) ** 2 * a[0] + 2 * (1 - k) * k * c[0] + k * k * b[0],
    (1 - k) ** 2 * a[1] + 2 * (1 - k) * k * c[1] + k * k * b[1],
  ];
};

/** Escala do cursor no clique: 1 -> 0,94 -> 1 em 0,12 s. */
export const clique = (t: number, quando: number) =>
  1 - 0.06 * Math.sin(Math.PI * Math.min(1, Math.max(0, (t - quando) / 0.12)));
```

### Digitação com variação

```ts
import { random } from "remotion";

/** Texto digitado, com ritmo irregular e igual a cada render. */
export const digitado = (texto: string, t: number, inicio: number, cps = 22): string => {
  let acc = 0;
  let n = 0;
  for (let i = 0; i < texto.length; i++) {
    acc += (1 / cps) * (0.7 + 0.6 * random(`d-${texto}-${i}`));
    if (inicio + acc <= t) n = i + 1;
    else break;
  }
  return texto.slice(0, n);
};
```

`random` do Remotion é determinístico: o mesmo texto gera o mesmo ritmo em todo render.

### Linha que se desenha

```tsx
import { p, outExpo } from "./lib/anim";

export const LinhaQueSeDesenha: React.FC<{ d: string; t: number; inicio: number; dur?: number }> = ({ d, t, inicio, dur = 0.7 }) => (
  <path d={d} pathLength={1} fill="none" stroke="currentColor" strokeWidth={2}
        strokeDasharray={1} strokeDashoffset={1 - p(t, inicio, dur, outExpo)} />
);
```

### Escalonar e NaPalavra

```ts
/** Atraso de cada item de uma lista: 0,08 s por item, no máximo 5 itens. */
export const escalonar = (i: number, passo = 0.08) => Math.min(i, 4) * passo;

import palavras from "../data/palavras.json";
/** Tempo (s) em que a n-ésima ocorrência de uma palavra começa na cena. */
export const naPalavra = (cena: string, palavra: string, n = 0): number | undefined =>
  (palavras.cenas as Record<string, { t: number; w: string }[]>)[cena]
    ?.filter((x) => x.w.toLowerCase() === palavra.toLowerCase())[n]?.t;
```

Use `naPalavra("s03", "estoque")` como `inicio` do elemento que representa a palavra.
Se a palavra falta, falhe alto: `undefined` num `inicio` deve quebrar o `check`, não
passar em silêncio.

### Deriva de câmera

```ts
import { lerp } from "./lib/anim";
/** Escala de 1,00 a 1,04 ao longo da cena. */
export const deriva = (t: number, dur: number) => lerp(1, 1.04, Math.min(1, Math.max(0, t / dur)));
```

## Regras de código

1. **Tempo vem de `timeline.json`.** Nenhum número de tempo solto dentro de uma cena,
   exceto durações de animação (o "como") que vêm das tabelas de
   [`principios-de-movimento.md`](principios-de-movimento.md).
2. **Nada aleatório sem semente.** Use `random(seed)` do Remotion.
3. **Cor e fonte de `theme.ts`.** Nada de hex solto numa cena.
4. **Texto e número como propriedade.** O componente recebe o valor. Não o escreve.
5. **Um `still` por cena** ao terminar. Guarde em `06-revisao/`.
6. **Dado de cliente fora do código.** O Remotion envia telemetria de uso de render.

## Como promover um componente

1. Ele foi usado em 2 vídeos.
2. Tem um `still` de exemplo e uma linha de uso.
3. Vai para `video/biblioteca/componentes/` por PR, com a regra de ofício a que serve.
