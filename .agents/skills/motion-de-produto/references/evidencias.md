---
title: Evidências da skill de motion de produto
status: draft
owner: Marketing (Renan Cavalheiro)
version: 0.1.0
last_updated: 2026-11-05
review_cycle: monthly
source_of_truth: this-file
---

# Evidências

De onde vem cada regra de [`SKILL.md`](../SKILL.md), com o que foi lido, o que foi visto e
o que **não** foi verificado. A revisão foi feita em 05/11/2026.

## Como cada fonte foi lida

| Marca | Significado |
|---|---|
| **medido** | quadro a quadro e som a som, com ferramenta (só o Harvey II) |
| **visto** | alguns quadros olhados no player do YouTube, a cerca de 445 px de largura |
| **transcrição** | texto falado, legenda automática em inglês |
| **descrição** | só título, capítulos e texto da página |

Quadro visto **não** é análise de movimento. Uma amostra de poucos quadros mostra o
**layout** e a **técnica de composição**. Ela não mostra tempo, curva nem som.

## As quatro fontes do owner

| Fonte | Leitura | O que ensinou |
|---|---|---|
| [Claude Opus 5.5 + Higgsfield Make Insane Motion Graphics](https://www.youtube.com/watch?v=5HYYXYYCrL4) (Higgsfield AI, 13/10/2026) | transcrição completa. 8 quadros vistos | método (abaixo), troca de texto, paleta, velocidade e produto sem refazer o estilo, correção por comentário, trecho de SaaS |
| [Harvey Platform Overview](https://www.youtube.com/watch?v=ydIT4EdLK54) (04/11/2025, 3 min 52 s) | transcrição completa. 8 quadros vistos | estrutura de tour por módulos, prova de escala no início, recortes de interface, cena de tarefa específica |
| [Memory Is Now In Harvey](https://www.youtube.com/watch?v=xDiG-MN7GzU) (27/08/2026, 1 min 8 s) | **descrição** e 4 quadros vistos. Sem transcrição: a legenda não veio | uma ideia só, controle visível, pergunta com opções, ponto central com chips em órbita |
| [Meet Harvey II](https://www.youtube.com/watch?v=31_moi-cVXg) (18/08/2026, 1 min) | transcrição completa. O vídeo foi **medido** no `ESTUDO` (versão do site) | contraste "ferramenta que você opera" contra "plataforma que faz", três beats, narração curta |

### O que cada quadro mostrou

Tempo é o do player do YouTube.

**Higgsfield.** O relógio do player e os capítulos da descrição não coincidem. Use o
relógio do player.

- 438 s: título em duas linhas ("ONE CANVAS. EVERY SCREEN.", 5 palavras, a segunda linha em
  cor de acento) sobre uma grade inclinada de telas de aplicativo, com alças de seleção e
  cursores de edição. Base da receita R8.
- 446 s: legenda "REFERENCES + CUSTOM SKILL" ao lado de uma janela de prompt, sobre a pessoa.
- 506 a 516 s: curta de desenho com passaporte de gato e mapa, com linhas de chamada
  rotuladas, selo "MATCH" e carimbo. Mostra anotação de ilustração feita em código.
- 531 s: a apresentadora ao lado de um painel flutuante com o rótulo "EDITABLE MOTION
  GRAPHICS".
- 539 s: o editor, com painel de propriedades de texto e paleta de cores. É a edição que o
  vídeo demonstra.

**Harvey Overview.**

- 6 s: mapa-múndi claro com países em tons de cinza destacados, sob a fala "58 países".
- 12 s: um numeral grande, em serifa, no centro de um fundo claro. Leitura: contador em
  andamento (a fala é "economize até 25 horas por mês").
- 56 s: recorte da caixa de pergunta, com um arquivo anexado, chips de fonte e o botão
  de envio. Base de R3.
- 108 s: três aplicativos empilhados, ícone e nome. Base de R7.
- 170 s: seletor de arquivos com caixas de marcação. Base de R4.
- 205 s: tela de fluxos com cartões em grade.
- 40 s e 75 s: um menu de fontes e um diagrama de fluxo ao lado de um texto. Vistos só em
  miniatura, sem uso nas receitas.

**Memory.**

- 8 s: um cartão com uma pergunta e 4 opções, o cursor sobre a segunda. Base de R11.
- 22 s: a interface inteira, com a conversa. Plano de situar.
- 40 s: um documento com o resumo em destaque e uma nota pequena de preferência.
- 57 s: um círculo escuro no centro com anéis tracejados e chips de memória em volta.

## Fontes adicionais (do mesmo tema, não pedidas)

Entraram porque apareciam como vídeos relacionados e tratam do mesmo método. Leitura por
transcrição completa.

| Fonte | O que ensinou |
|---|---|
| Claude Opus 5.5 Changed Motion Graphics Forever (Tao Prompts) | o Claude anima bem e rende mal imagem realista. Croqui quando a descrição falha. Prévia antes do render. Revisar a cena por quadro |
| Claude Makes a New Kind of Video (Futurepedia) | o Claude não assiste a vídeo, só vê quadros. Referência em código dá resultado mais consistente. Tempo por palavra encaixa melhor. Storyboard antes de gerar. Estilo bom vira skill |

## O que as fontes dizem, regra a regra

| Regra | Fonte principal | Força da evidência |
|---|---|---|
| 1. Uma promessa por vídeo | Memory (descrição e quadros), Harvey II | média: uma só ideia por vídeo curto |
| 2. Mostre o mecanismo | Harvey Overview (quadros em 56 s e 170 s) | média |
| 3. Recorte a interface | Harvey Overview (quadros em 40 s, 56 s e 170 s, contra 205 s inteiro) | baixa a média: amostra de 8 quadros |
| 4. O quadro segue a fala | `ESTUDO` (medido), Futurepedia, Tao Prompts | alta para o Harvey II. Média para o resto |
| 5. Um foco por vez | `ESTUDO` (etiquetas a cada 0,75 s) | média. A cifra de 60 a 100 ms é `ofício` |
| 6. Corte seco, em movimento, por forma | `ESTUDO` (medido) | alta |
| 7. A câmera nunca para | `ESTUDO` (técnica 11) | média: leitura do estudo |
| 8. Número vira gesto | Harvey Overview (quadro em 12 s) | baixa: um quadro, leitura nossa |
| 9. Prova com cena específica | Harvey Overview (transcrição) | média |
| 10. Controle e confiança | Memory | média |
| 11. Tipografia grande, poucas palavras | Higgsfield (quadro em 438 s), `ESTUDO` | média |
| 12. O som conduz a emoção | `ESTUDO` (medido), feedback do owner no vídeo 1 | alta para o Harvey II |
| 13. Tudo é variável | Higgsfield (transcrição) | média, mas é vídeo do fabricante |
| 14. Código anima, imagem real mostra | Tao Prompts, regras da Dinn | média |
| 15. Referência em números | Futurepedia, método do `ESTUDO` | média |

## O que **não** foi verificado

1. **Tempo, curva e som** dos vídeos da Harvey Overview, Memory e Higgsfield. Só o Harvey II
   foi medido. Toda cifra de tempo marcada `ofício` em `principios-de-movimento.md` é
   padrão de partida.
2. **A fala do vídeo Memory.** A legenda não veio. Só a descrição e 4 quadros.
3. **As alegações de ganho** do vídeo da Higgsfield (cerca de uma semana de um motion
   designer contra 3 horas no vídeo de lançamento, e cerca de 2 horas para o curta). O
   canal é do fabricante da ferramenta que promove. Trate como alegação de venda, não
   como medida.
4. **A existência do tipo "Motion" em Artifacts** na conta do owner. O vídeo diz que
   existe. Nenhuma checagem foi feita aqui.
5. **O método de código só em JavaScript** (sem Remotion nem HyperFrames) do vídeo da
   Futurepedia. Não foi testado. O runtime da Dinn segue a skill de produção.
6. **O efeito de qualquer regra sobre desempenho** (retenção, clique, lead). Nenhum vídeo
   da Dinn usou esta skill ainda.

## O que **não** adotamos, e por quê

| Prática dos vídeos | Motivo |
|---|---|
| 3D no Blender com cena gerada por modelos 3D | o cânone da Dinn não faz 3D. Exceção pendente de decisão do owner (ver `ESTUDO`) |
| Cartoon com personagem e voz geradas por IA | mascote e personagem de terceiros fora do cânone. Voz sintética só com regra de voz |
| Imagem de pessoa gerada por IA (avatar, rosto) | teste de autenticidade do Alex. Pessoa real em trabalho real |
| Efeito de capacete com HUD sobre vídeo de IA | futurismo é proibido na direção do Alex |
| Música gerada por serviço externo | gasto externo sem teto no BRIEF vale zero |
| Serviço de vídeo de IA conectado por MCP (Higgsfield e similares) | gasto externo e imagem gerada passam pelo Alex (decisão `0049`) |
| Exportar para After Effects ou Blender | não está no ambiente de vídeo. Pode virar pedido do owner |
| Estilo copiado de qualquer vídeo | aprender o princípio, nunca a superfície |

## Como atualizar

1. Veja um vídeo novo em quadros e, se houver, na transcrição.
2. Se a técnica for nova, escreva em `receitas-de-cena.md` ou `principios-de-movimento.md`
   e acrescente uma linha na tabela de regras acima, com a força da evidência.
3. Para medir de verdade, use os scripts de `video/scripts/referencia/` e o método do
   [`ESTUDO`](../../../video/referencias/harvey-ii/ESTUDO.md).
