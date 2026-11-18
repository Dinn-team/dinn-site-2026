---
title: Números de movimento para demonstração de produto
status: draft
owner: Marketing (Renan Cavalheiro)
version: 0.1.0
last_updated: 2026-11-05
review_cycle: monthly
source_of_truth: this-file
---

# Números de movimento

Tabela para a SPEC. Cada adjetivo vira número. Os tempos estão em segundos e em quadros
a 30 fps (o padrão de `direcao-de-video-dinn`).

**Como ler a coluna Origem**

- `DS`: token do Design System, em [`video/marca/README.md`](../../../video/marca/README.md).
- `ESTUDO`: medido no Harvey II, em
  [`ESTUDO.md`](../../../video/referencias/harvey-ii/ESTUDO.md).
- `ofício`: prática geral de motion design. É um **padrão de partida**. Ajuste no
  `still` e na prévia, e anote a mudança na SPEC.

## Curvas

| Uso | Curva | Origem |
|---|---|---|
| Entrada de elemento (desacelera ao chegar) | `ease-out`, 0,2 s. Para peça grande, `outExpo` (0,16, 1, 0,3, 1) | DS e vídeo 1 |
| Saída de elemento (acelera ao sair) | `ease-in`, 0,15 a 0,2 s | ofício |
| Câmera e deslocamento longo | `inOut` (0,65, 0, 0,35, 1) | vídeo 1 |
| Chip, badge, botão que "pousa" | mola (0,175, 0,885, 0,32, 1,275), 0,3 s | DS |
| Número, dado, gráfico | **nunca** mola. Use `outExpo` | ofício |
| Movimento linear | só em laço contínuo (rotação, grão) | ofício |

## Tempos

| Elemento | Duração | Quadros a 30 fps | Origem |
|---|---|---|---|
| Revelação padrão: sobe 24 px e aparece | 0,6 s | 18 | DS |
| Entrada de chip, cartão pequeno | 0,2 a 0,3 s | 6 a 9 | DS e ofício |
| Painel lateral entra | 0,3 a 0,45 s | 9 a 14 | ofício |
| Escalonamento entre itens de uma lista | 60 a 100 ms | 2 a 3 | ofício |
| Itens por lista animada | até 5. Acima, agrupe | | ofício |
| Zoom à região da interface | 0,6 a 0,9 s | 18 a 27 | ofício |
| Deriva de câmera numa cena | escala de 1,00 a 1,04 | | ESTUDO |
| Cursor de um ponto a outro | 0,5 a 0,8 s, em curva | 15 a 24 | ofício |
| Clique: aperta e solta | 0,12 s, escala 0,94 a 1,00 | 4 | ofício |
| Resposta da tela após o clique | 0,1 a 0,25 s depois | 3 a 8 | ofício |
| Digitação | 18 a 28 caracteres por segundo, com variação de ±30% | | ofício |
| Cursor de texto piscando | ciclo de 1,06 s (0,53 ligado, 0,53 apagado) | | ofício |
| Contador de número | 0,8 a 1,4 s, `outExpo`, termina no valor exato | 24 a 42 | ofício |
| Valor final do número segura | pelo menos 1,0 s | 30 | ofício |
| Barra ou linha de gráfico cresce | 0,6 a 0,9 s, `outExpo` | 18 a 27 | ofício |
| Linha SVG se desenha | 0,5 a 1,0 s | 15 a 30 | ofício |
| Cartão de raciocínio revela linha a linha | 0,25 a 0,4 s por linha | 8 a 12 | ofício |
| Entrada de etiqueta presa a ponto, uma por palavra | no quadro da palavra | | ESTUDO |
| Respiro depois do resultado principal | pelo menos 1,0 s | 30 | ofício |
| Logo final sozinho, só com a música | 1,4 s | 42 | ESTUDO |

## Ritmo de corte

| Medida | Valor | Origem |
|---|---|---|
| Cortes de cena no Harvey II | 22 em 60 s, 1 a cada 2,7 s | ESTUDO |
| Cortes que caem numa pausa da voz | 13 de 22 | ESTUDO |
| Cortes de virada de ato que caem na pausa | 4 de 5 | ESTUDO |
| Alvo para demo da Dinn | 1 corte a cada 2,5 a 4 s | ofício, a partir do ESTUDO |
| Cena com leitura densa (tabela, mapa) | até 7 s | ESTUDO (plano mais longo: 7,0 s) |
| Cena sem nenhum corte e sem nenhuma mudança | nunca mais que 2 s | ofício |

## Cadência

| Tipo de elemento | Quadros por segundo efetivos | Origem |
|---|---|---|
| Interface do produto | todos os quadros (30) | ESTUDO e ofício |
| Peça ilustrada que quer cara de feito à mão | "em dois": 15 fps efetivos a 30 fps, ou 12 a 24 fps | ESTUDO |

O "em dois" é uma assinatura do Harvey II. Use só se o Alex aprovar um mundo ilustrado
para a Dinn. Hoje a decisão está pendente (ver o `ESTUDO`, decisões do owner).

## Texto na tela

| Medida | Valor | Origem |
|---|---|---|
| Palavras por título de cena | 3 a 5. Máximo 7 | ofício |
| Tempo de leitura na tela | 0,6 s + 0,28 s por palavra | ofício |
| Exemplo: título de 5 palavras | 0,6 + 1,4 = 2,0 s | conta |
| Tamanho mínimo, vertical 1080 de largura | 40 px | `video/marca/README.md` |
| Tamanho mínimo, horizontal | 28 px | `video/marca/README.md` |
| Título de cena, vertical | 72 a 120 px | `video/marca/README.md` |
| Texto principal | dentro de 80% da área segura | `direcao-de-video-dinn` |
| Elementos | dentro de 90% da área segura | `direcao-de-video-dinn` |
| Contraste | mínimo WCAG AA (4,5 para 1) | `direcao-de-video-dinn` |
| Números em coluna ou contador | `font-variant-numeric: tabular-nums` | ofício |

## Cor e proporção

| Medida | Valor | Origem |
|---|---|---|
| Base neutra | acima de 90% dos pixels | ESTUDO (92,7% no Harvey II) |
| Acento da marca (roxo) | abaixo de 10% da tela | ESTUDO e `video/marca/README.md` |
| Limão e laranja | um ou dois momentos de pico | `ESTUDO` |
| Cor de status do produto (verde, amarelo, vermelho) | só dentro da tela real do produto | `video/marca/README.md` |

## Som

Os números de som estão em [`som-e-sincronia.md`](som-e-sincronia.md).

## Como aplicar na SPEC

1. Copie a linha da tabela com a origem.
2. Se mudar o valor, escreva o motivo em uma frase.
3. Valor `ofício` mudado na prévia vira nota em `video/APRENDIZADOS.md`. Valor que se
   repetir em 3 vídeos vira regra desta tabela.
