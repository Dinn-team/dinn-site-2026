---
title: Revisão de movimento para demonstração de produto
status: draft
owner: Marketing (Renan Cavalheiro)
version: 0.1.0
last_updated: 2026-11-05
review_cycle: monthly
source_of_truth: this-file
---

# Revisão de movimento

O Davinci preenche esta lista em `06-revisao/REVIEW.md` **antes** de chamar o humano. Ela
complementa a skill `revisao-e-entrega-de-video`. Cada item recebe um de quatro
resultados: `ok` (com a prova), `falha` (com o horário e a correção), `não verificado`
(com o motivo) ou `não se aplica`.

Item sem prova é `não verificado`. Não escreva `ok` de memória.

## 1. Mensagem

| # | Item | Como provar |
|---|---|---|
| 1 | A promessa cabe em 12 palavras | escreva a frase |
| 2 | Toda cena prova a promessa | tabela cena a cena, com "prova" ou "sai" |
| 3 | O papel, a tarefa e o resultado cabem em uma frase | escreva a frase por cena |
| 4 | O papel de cada personagem bate com o brief | confira o brief |

## 2. Mecanismo

| # | Item | Como provar |
|---|---|---|
| 5 | Toda cena de produto tem ação, resposta e resultado | quadro antes, durante e depois |
| 6 | A tela inteira aparece só para situar (1 a 1,5 s) | liste as cenas com tela cheia e a duração |
| 7 | O texto da interface lê em 375 px de largura | `still` reduzido a 375 px de largura |
| 8 | Nenhuma função não lançada aparece como pronta | confira em `brain/product.md` |

## 3. Foco e ritmo

| # | Item | Como provar |
|---|---|---|
| 9 | Um elemento novo por batida | veja a lista de cues da cena |
| 10 | Cortes por minuto dentro do alvo (1 a cada 2,5 a 4 s) | comando de cortes abaixo |
| 11 | Virada de ato cai numa pausa da voz | compare o corte com `palavras.json` |
| 12 | Nenhum trecho parado por mais de 2 s sem intenção | comando de congelamento abaixo |
| 13 | A cena nova começa com movimento em curso | quadros em volta de cada corte |
| 14 | Há deriva ou zoom em toda cena | confira a SPEC |

## 4. Texto e número

| # | Item | Como provar |
|---|---|---|
| 15 | Título de 3 a 5 palavras (máximo 7) | liste os títulos e a contagem |
| 16 | Tempo na tela do título ≥ 0,6 s + 0,28 s por palavra | liste o tempo de cada título |
| 17 | Texto principal em 80% e elementos em 90% da área segura | `still` com grade da área segura |
| 18 | Contraste mínimo WCAG AA | razão de contraste medida, par a par |
| 19 | Todo número traz fonte, período e a marca observado ou estimado | tabela número a número |
| 20 | O contador termina no valor da fonte, sem arredondar para cima | compare o último quadro com a fonte |
| 21 | Nenhum "tempo real" onde o dado é D-1 | busca de texto no código das cenas |
| 22 | Zero termo da lista "Evitar" de `brain/voice.md` | busca de texto |

## 5. Som

| # | Item | Como provar |
|---|---|---|
| 23 | O mapa de emoção existe e o vídeo o segue | compare mapa e mix |
| 24 | Loudness no alvo da SPEC e pico real abaixo de −1 dBTP | comando de loudness abaixo |
| 25 | Música cerca de 10 dB abaixo da voz | painel de áudio, stems ou medição por trecho |
| 26 | Ataque de virada até 0,3 s depois do corte | `som_e_corte.py` ou earshot |
| 27 | Os 5 momentos foram ouvidos pelo humano | resposta dele. Sem resposta: `não verificado` |
| 28 | Toda fonte de som tem licença no ledger. Nenhuma `NC` | `04-audio/LEDGER.md` |

## 6. Marca e origem

| # | Item | Como provar |
|---|---|---|
| 29 | Fonte, cor e raio vêm do Design System e do `theme.ts` | busca de hex solto no código |
| 30 | Roxo abaixo de 10% da tela e base neutra acima de 90% | amostra de quadros, proporção por quadro-chave |
| 31 | Cada elemento tem origem: código, filmagem ou Alex | tabela de origem |
| 32 | Nenhuma tela de produto gerada por IA | tabela de origem |
| 33 | Nenhum 3D, malha de gradiente, mascote, robô ou circuito azul | olhar os quadros-chave |
| 34 | Nenhuma marca, logo ou nome de terceiro sem autorização registrada | olhar os quadros-chave |
| 35 | Nenhum cliente identificável nem embalagem de medicamento | olhar os quadros-chave |
| 36 | Pessoa em quadro tem autorização de imagem registrada | `01-brief/BRIEF.md` |

## 7. Técnica

| # | Item | Como provar |
|---|---|---|
| 37 | Formato, fps e duração iguais à SPEC | `ffprobe` |
| 38 | Nenhum quadro preto no meio do vídeo | comando de preto abaixo |
| 39 | Nenhuma piscada de brilho em troca de tela | `signalstats` |
| 40 | Nada pisca mais de 3 vezes por segundo | olhar a cena e o `signalstats` |
| 41 | Variáveis funcionam: troca de texto, idioma e formato recompõe o vídeo | rode uma troca e olhe um `still` |

## Comandos

Todos funcionam em PowerShell e Bash. O arquivo de entrada é `video.mp4`.

```bash
# formato, fps e duração
ffprobe -v error -show_entries stream=width,height,r_frame_rate,duration -of default=nw=1 video.mp4

# cortes de cena, com o horário de cada um (limite 0,3; ajuste de 0,2 a 0,4)
ffmpeg -i video.mp4 -vf "select='gt(scene,0.3)',showinfo" -an -f null - 2>&1 | grep pts_time

# quadros pretos
ffmpeg -i video.mp4 -vf "blackdetect=d=0.04:pic_th=0.98" -an -f null -

# trechos congelados (o que for intencional vai para a lista)
ffmpeg -i video.mp4 -vf "freezedetect=n=-60dB:d=0.5" -an -f null -

# brilho médio por quadro, para achar piscada
ffmpeg -i video.mp4 -vf "signalstats,metadata=print:key=lavfi.signalstats.YAVG" -an -f null -

# loudness integrado, faixa e pico real
ffmpeg -i video.mp4 -af ebur128=peak=true -f null -

# um quadro no segundo 12,5 (para olhar e para o `still` da revisão)
ffmpeg -ss 12.5 -i video.mp4 -frames:v 1 quadro-12-5.png
```

Em PowerShell, troque `grep pts_time` por `Select-String pts_time`. Os cortes também saem
do `cadencia.py` em `video/scripts/referencia/`, que lê uma pasta de quadros.

## Como fechar

1. Conte: `ok`, `falha`, `não verificado`, `não se aplica`.
2. Toda `falha` tem correção feita ou pendência com dono.
3. Todo `não verificado` vai para a linha `Não verificado:` do fechamento, sem esconder.
4. Peça ao humano a decisão no formato do padrão de comunicação direta: a pergunta, as
   opções, a recomendação e o motivo.

## Aprendizado

Depois da revisão do humano, escreva em `video/APRENDIZADOS.md` o que ele corrigiu e que
esta lista não pegou. Se o mesmo item faltar em 2 vídeos, ele entra aqui.
