# Padrão das telas animadas do Dinn (05/11/2026)

Use este padrão em toda página que mostra uma tela do produto: home, Plataforma, funcionalidades, Soluções, Suporte e páginas novas.
Base: prints reais em `referencia-plataforma/` (fora do git) e a skill `motion-de-produto` (ver `docs/motion-de-produto-skill.md`).

## Peças

| Peça | Arquivo | Para quê |
|---|---|---|
| Kit de interface | `src/components/site/RealKit.tsx` + `src/styles/site-real-app.css` | Menu aberto, barra do topo, filtros em pílula, cards, gráficos, selos, mapas |
| Motor | `src/components/site/AppDemos.tsx` (`useDemo`, `Frame`) | Roteiro, câmera por planos, cursor em arco, corte em movimento |
| Telas | `RealHomeDemos.tsx`, `RealMapDemos.tsx`, `RealSupportDemo.tsx` | Uma tela por funcionalidade |
| Registro | `src/components/site/FeatureDemos.tsx` | `FEATURE_DEMO`, `AREA_DEMO` e `CYCLE_SCREENS` ligam id, área e ciclo a uma tela |
| Embrulho | `src/components/site/ProductScreen.tsx` | **Toda página usa este componente** para ligar a câmera |

## Como usar numa página

```tsx
import { ProductScreen } from '@/components/site/ProductScreen';
import { FEATURE_DEMO } from '@/components/site/FeatureDemos';

// Hero ou aba (laço): o cursor faz o roteiro em loop.
<div className="h2-media sl2-media" style={{ backgroundImage: gradUrl('web/roxo-noite') }}>
  <div className="sl2-screen"><ProductScreen demo={FEATURE_DEMO.ruptura} /></div>
</div>

// Palco de rolagem (passo): cada passo enquadra o alvo da tela.
<ProductScreen demo={Demo} step={active} />
```

Troque a tela com `key={id}` para o laço recomeçar limpo.

## Como criar uma tela nova

1. Abra o print do app e copie o desenho: mesma ordem, mesmos rótulos, mesmos números de exemplo.
2. Monte a tela com `RFrame`, `RPage`, `RTop` e as peças do `RealKit`. Tamanho do app: 1280 × 800.
3. Use só nomes do modo demonstração (Cefalgin, Rede Farmacore, Drogaria Serrana). Nunca dado de cliente.
4. Escreva o `Def`: `beats` (laço) e `steps` (palco, 4 passos).
5. Registre em `FEATURE_DEMO` e, se for o caso, em `AREA_DEMO`.
6. Rode a verificação (abaixo).

## Roteiro (`Def`)

- `shot: 'alvo'`: antes da ação, a câmera vai à região (`'wide'` abre a tela inteira). `z` ajusta o zoom.
- `to: 'alvo'`: o cursor vai ao alvo. `click`: aperta e solta. `type: [chave, texto]`: digita com ritmo irregular.
- `phase`: muda o estado da tela depois da ação.
- `cam`: depois da ação, `'out'` abre ou `{ at, z }` enquadra outra região.
- `wait`: respiro em ms. Resultado principal segura pelo menos 1 s.
- Cada tela começa com a tela inteira (1 a 1,5 s) e termina abrindo de novo.
- Marque alvos com `{...tg('chave')}`.

## Movimento (números da skill)

| Item | Valor |
|---|---|
| Plano de câmera | 1,1 s, curva `inOut` (0,65 · 0 · 0,35 · 1) |
| Deriva em cada plano | escala 1,00 a 1,025 em 9 s |
| Cursor | arco de Bézier, 0,6 a 1 s; clique 0,3 s (1 → 0,9 → 1) |
| Número e gráfico | `outExpo` (0,16 · 1 · 0,3 · 1), 1 a 1,3 s; termina no valor exato |
| Menu, janela, pino, dica | mola do DS (0,175 · 0,885 · 0,32 · 1,275), 0,3 a 0,6 s |
| Lista e linhas de tabela | entram em escalonamento de 80 ms, no máximo 5 itens |
| Troca de funcionalidade | corte em movimento: a janela fica, a tela velha sobe e desfoca (0,55 s), a nova sobe do desfoque (1,1 s) |
| Fim do laço | a câmera abre, o cursor sai e a tela desfoca antes de recomeçar |
| "Reduzir movimento" | tudo para; a tela mostra o estado final |

## Regras

- Uma ideia por plano. A câmera não persegue o cursor.
- Sem selo "Beta", sem cadeado, sem "teste grátis" dentro da tela.
- Cores dentro da tela são as do app (`#5130E9`), presas em `site-real-app.css`.
- Função não lançada nunca aparece como pronta.
- Jean (Atividades, Configurações e WhatsApp) e Dinn Conecta ainda usam telas de spec, sem print.

## Verificação

1. `npx tsc --noEmit -p . --noUnusedLocals` sem erro nos arquivos tocados.
2. Veja o laço inteiro no Chrome (o painel interno do app congela quando está oculto).
3. Cheque 1440 px, 768 px e 375 px.
4. `node node_modules/astro/bin/astro.mjs build`.
