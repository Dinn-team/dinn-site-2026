# Skill motion-de-produto (Davinci)

Instalada em 05/11/2026 por pedido do Renan, para as telas animadas do site.

- Origem: `wt-davinci-skill-motion/skills/motion-de-produto` (branch `feat/davinci-skill-motion-design`, commit `6fec2b2`).
- Pasta real: `.agents/skills/motion-de-produto/`. Ligação para o Claude Code: `.claude/skills/motion-de-produto`.
- Junto vieram `references/estudo-harvey-ii.md` (medição do Harvey II) e `references/aprendizados-davinci.md`.
- Para atualizar, copie de novo a pasta da skill do repositório do Davinci.

## Como o site usa a skill

A skill foi escrita para vídeo. No site valem as regras de movimento, sem voz e sem som:

| Regra | No site |
|---|---|
| 3. Recorte a interface | A câmera abre a tela inteira por 1 a 2 s e depois vai à região (`shot` no roteiro) |
| 6. Corte em movimento | Troca de funcionalidade: a janela fica, a tela velha sobe e desfoca, a nova sobe do desfoque |
| 7. A câmera nunca para | Deriva de escala de 1,00 a 1,035 em cada plano |
| 8. Número vira gesto | Contadores e gráficos em `outExpo`, terminam no valor exato |
| Cursor e Clique | Cursor em arco de 0,45 a 0,8 s, clique que aperta e solta, pulso no alvo |

Motor: `useDemo` e `Frame` em `src/components/site/AppDemos.tsx`. Roteiros: `RealHomeDemos.tsx` e `RealMapDemos.tsx`.
