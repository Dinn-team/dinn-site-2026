---
title: Estudo de referência — Introducing Harvey II
status: draft
owner: Marketing (Renan Cavalheiro)
version: 0.1.0
last_updated: 2026-11-03
review_cycle: on-change
source_of_truth: this-file
---

# Estudo de referência — Introducing Harvey II

Vídeo de lançamento da Harvey (IA jurídica), 60 s. O owner o escolheu como o
**nível de motion graphics que a Dinn quer alcançar**. Este estudo desmonta o vídeo
quadro a quadro e som a som. O Davinci o lê antes de todo moodboard de vídeo
institucional ou de lançamento.

- Página: [harvey.ai/resources/videos/introducing-harvey-ii](https://www.harvey.ai/resources/videos/introducing-harvey-ii)
- Referência nº 4 em [`REFERENCIAS.md`](../../REFERENCIAS.md)
- Regra de sempre: aprender o **princípio**. Não copiar cubo, cor, música, texto
  nem estética jurídica. O Design System da Dinn vence a referência.

## Resumo: por que o vídeo funciona

1. **Um mundo só.** Tudo vive no mesmo papel com grão, recorte e traço de lápis.
   Nada parece banco de imagem.
2. **Um símbolo só.** Um cubo com um ponto no centro atravessa o vídeo inteiro. Ele
   vira janela, túnel, olho, diagrama e, no fim, o logo.
3. **Duas velocidades de animação.** A colagem anda a 12 quadros por segundo, como
   stop-motion. A tela do produto anda a 24, lisa. O olho lê "feito à mão" contra
   "produto preciso".
4. **Corte seco em movimento.** Quase não há dissolução. Uma forma vira a próxima
   forma no corte.
5. **A imagem segue a frase.** Cada ideia da narração tem uma imagem própria, no
   tempo da palavra.
6. **O som é contido.** Voz em primeiro plano, música 10 dB abaixo, e um impacto
   curto em cada virada de cena.

## Fonte e método

Análise feita em 03/11/2026 sobre o arquivo público da página (stream Mux,
1920×1080, 24 quadros por segundo, áudio AAC 48 kHz estéreo, 60,01 s). A legenda
oficial em inglês veio do mesmo stream.

| Etapa | Ferramenta | Resultado |
|---|---|---|
| Quadros | ffmpeg | 1.440 quadros (todos), 240 amostras a 4 por segundo, 15 painéis de 4 s, 22 tiras quadro a quadro nas transições |
| Cortes e cadência | diferença entre quadros vizinhos (Python) | lista de cortes e proporção de quadros repetidos |
| Cor | k-means e histograma HSV sobre as 240 amostras | paleta e participação da cor |
| Loudness | ffmpeg `ebur128` | LUFS integrado, faixa e pico |
| Separação do som | Demucs `htdemucs` | voz, bateria, baixo e "resto" (música e efeitos) |
| Som × imagem | librosa | ataques sonoros perto de cada corte, pausas da voz, tom e altura da voz |

**Limites.** O Claude não ouve. Toda conclusão de som vem de medição. O Demucs
separa por estimativa, então efeito sonoro aparece misturado em "bateria" e "resto".
Ferramentas e estúdio que a Harvey usou **não são conhecidos**. O que está marcado
como **leitura** é hipótese nossa. Os quadros e o áudio são da Harvey e ficam fora
do Git (ver "Como refazer a análise").

## O vídeo em números

| Medida | Valor | Como foi medido |
|---|---|---|
| Duração | 60,0 s | ffprobe |
| Cortes | 22 cortes de cena, cerca de 1 a cada 2,7 s | diferença entre quadros > 25 |
| Planos mais longos | 7,0 s (22,1–29,2 s) e 6,6 s (29,2–35,8 s, com morfose interna) | decupagem |
| Quadros repetidos | 37% dos pares vizinhos são iguais | diferença < 0,6 |
| Cor | 7,3% dos pixels têm saturação acima de 15%. Só 1,5% passam de 30% | HSV nas 240 amostras |
| Brilho médio | 78% | HSV |
| Loudness | −15,1 LUFS integrado, faixa 2,3 LU, pico real −0,5 dBFS | ebur128 |
| Voz | −15,0 LUFS. Ocupa 45,8 s dos 60 s | stem de voz |
| Música e efeitos | "resto" −25,3, baixo −29,6, bateria −31,0 LUFS | stems |
| Texto falado | 123 palavras. 126 por minuto no total, 161 por minuto enquanto fala | legenda + pausas |

## Decupagem

Tempo em segundos. Narração em tradução livre, entre aspas o original.

### Ato 1 · O antes: a IA como ferramenta (0–10,7 s)

| Tempo | Narração | Imagem | Movimento | Som |
|---|---|---|---|---|
| 0,0–2,4 | "For years, legal AI has been a tool you operate." | Papel cinza-lilás, meias-luas marrons, bloco de giz, recortes | Um traço de pincel preto entra, faz um laço e sai. Câmera deriva devagar | Nota grave sustentada de 0 a ~8 s |
| 2,4–5,0 | (continua) | Papel branco, arco grande de pincel, trecho de contrato datilografado, linhas finas | Linhas se desenham sozinhas, um laço pequeno se escreve | Ataque no corte (+10 dB no grave) |
| 5,0–8,7 | "You brought the context, it did the task." | Diagonal de blocos de colagem: letra serifada, círculos, padrões. Rabiscos, pedras e manchas espalhados | A 12 quadros por segundo. Blocos trocam de conteúdo, detritos varrem para o canto, texto "Lorem ipsum" se monta | Pequenos ataques no ritmo das trocas |
| 8,7–10,7 | "We built a platform that now does both." | Detritos convergem. Um cubo de grafite gira no centro de um mosaico denso | O cubo para de girar e fica de frente. Vira um quadrado chapado | Impacto no corte de 8,7 s (+11 dB) |

### Ato 2 · O produto: plataforma conectada (10,7–22,1 s)

| Tempo | Narração | Imagem | Movimento | Som |
|---|---|---|---|---|
| 10,75–13,5 | "This is Harvey 2." | O quadrado preto vira a janela branca do produto, sobre fundo de colagem em volume | "Hi Maya, what can I work on?" se digita. A barra lateral escura entra com uma cortina curva e a tela vira "Good morning, Maya" | Corte cai na pausa da voz. Ataque agudo (+15 dB) |
| 13,5–16,0 | "Harvey 2 is a connected platform," | Diagrama: cartão "Project Titan" no centro, quatro cartões ligados por linhas finas. Cantos com cubos desenhados a lápis | Cartões e cubos respiram em leve deslocamento | Ataque agudo forte no corte (+20 dB) |
| 16,0–18,9 | "giving agents the right context with the right permissions." | Lâminas de pedra em perspectiva. Depois blocos brancos com sombra dura | Câmera desliza. Os blocos saltam a cada 2 quadros, com efeito de stop-motion | Ataque no corte de 17,5 s (+17 dB agudo) |
| 18,9–22,1 | (continua) | Janela do produto sobre papel: "Good morning, Maya", busca de casos | Um cursor clica em "Acme Acquisition". A tela vira "Let's get to work on Acme Acquisition" com um brilho verde-água atrás do campo. A janela encolhe antes do corte | Cliques discretos |

### Ato 3 · Memória (22,1–40,4 s)

| Tempo | Narração | Imagem | Movimento | Som |
|---|---|---|---|---|
| 22,1–25,4 | "To move your work forward, Harvey 2 has memory. It learns how you work," | Um círculo escuro texturizado enche a tela | O círculo encolhe, uma moldura se desenha, o círculo vira o ponto no fundo de um túnel. Linhas de perspectiva se desenham. Cartões "Highlight any potential issues…" e "Harvey drafted an edit · Memories" entram. A caixa vira cubo | Corte na pausa. Ataque agudo (+16 dB) |
| 25,4–29,2 | "your templates, your precedent, your standards." | Cubo isométrico sobre grade de linhas de construção | Pontos pretos correm sobre as linhas como trilhos. As etiquetas "Your Templates", "Your Precedents" e "Your Standards" surgem uma a uma, a cada 0,75 s, no ritmo das três palavras | Pontos com toque leve |
| 29,2–31,7 | "No two firms using Harvey are the same." | Tela dividida bege e verde-escuro. Dois cubos com "olho", cada um com textura própria | Os cubos giram em 3D a 12 quadros por segundo, se aproximam e encolhem juntos | Impacto grave (+18 dB) |
| 31,75–33,8 | "So, what's special about your firm?" | Cubo isométrico gigante em plano fechado | A câmera avança. A face de cima cresce e vira triângulo | Impacto grave (+22 dB) |
| 33,8–36,2 | "Stay special." | Triângulos em V, depois padrão simétrico com o cubo no centro | O cubo gira dentro de cada nova moldura | Ataques curtos |
| 36,2–38,6 | "But information is not intelligence." | "INFORMATION" montada em colagem: cada letra de uma fonte, tamanho e textura | A palavra se desmonta em blocos. Surge "In…ge…" ainda em colagem | Corte na pausa |
| 38,7–40,4 | "That's why…" | "Intelligence." em serifa limpa, com riscos de lápis | As letras que faltam entram por partes e a palavra se resolve | Respiro |

### Ato 4 · Inteligência: o modelo (40,4–55,5 s)

| Tempo | Narração | Imagem | Movimento | Som |
|---|---|---|---|---|
| 40,46–44,2 | "Harvey 2 keeps getting smarter. A model post-trained for law," | Elipse em forma de globo feita de fatias de colagem, com um ponto no centro | Chips da interface ("…review those documents", "Concise — lead with the answer", "98 resources") orbitam. A elipse encolhe até círculo. Cubos de giz entram ao redor | Impacto no corte (+15 dB grave e agudo) |
| 44,2–46,9 | "unlocking more powerful legal reasoning," | Anel segmentado em volta de um quadrado com moldura | O anel se abre. Cartões de raciocínio do agente entram e o texto se revela linha a linha ("I should start by looking at…", "Reviewing case law", "Reviewing files · 4 sources") | Impacto grave (+18 dB) |
| 46,9–50,5 | "one connected platform, agents with memory," | O diagrama de 13,5 s volta, agora com o quadrado-olho no centro | Em 48,4 s os cartões trocam de conteúdo e os cubos ganham cor (rosa, verde-água) | Maior impacto grave do vídeo (+24 dB) |
| 50,5–55,5 | "the frontier of legal intelligence. Welcome to the next chapter for Harvey" | Tela "Project Titan · Acme Co" sobre fundo de colagem | Entra em movimento lateral. A lista de agentes cresce item a item. Dois cursores com etiqueta ("Senior Partner", "General Counsel") se movem. O painel de atividade se enche | Cliques |

### Ato 5 · Assinatura (55,5–60,0 s)

| Tempo | Narração | Imagem | Movimento | Som |
|---|---|---|---|---|
| 55,5–57,0 | "and the next era for law." | Fundo escuro de concreto, cubo escuro | A câmera recua e o cubo diminui | Corte na pausa. Impacto (+12 dB) |
| 57,0–58,8 | (fim da voz em 58,6 s) | Linhas de luz finas saem das arestas do cubo | As linhas engrossam como feixes. O cubo se abre, as faces voam para fora, o "H" aparece e o fundo vira papel branco | Subida curta e ataque na abertura |
| 58,8–60,0 | — | "H" serifado sozinho no papel | Parado | Cauda da música até o silêncio |

## As técnicas, uma a uma

Cada técnica traz onde aparece e como o Davinci a reproduz com o que já tem
(Remotion, ffmpeg, Python). "Leitura" marca hipótese sobre como a Harvey fez.

### 1. Mundo de colagem em papel

- **O que é:** fundo de papel com grão, peças recortadas com borda irregular,
  hachura de lápis e giz, manchas de tinta, texto datilografado. Sombra suave
  embaixo de cada peça.
- **Onde:** o vídeo inteiro, inclusive em volta da tela do produto.
- **Como fazer:** uma biblioteca de texturas (papel, grafite, giz, tinta, recortes
  em PNG com transparência). Cada peça é uma camada com `mask-image` de borda
  rasgada. Por cima de tudo, uma camada de grão animado (ruído que muda a cada
  quadro, em modo `multiply` ou `overlay`, opacidade de 6% a 12%).
- **Leitura:** a Harvey usou textura pintada ou escaneada, não filtro.

### 2. Duas cadências: 12 e 24 quadros por segundo

- **O que é:** a colagem muda a cada 2 quadros ("em dois"). A tela do produto muda
  a cada quadro. Medido: entre 5 e 10 s, 49% dos pares de quadros são iguais, no
  padrão alternado. Entre 50 e 55 s (tela do produto), só 8%.
- **Por quê:** "em dois" dá cara de animação feita à mão. A tela lisa passa
  precisão.
- **Como fazer:** renderizar a 24 quadros por segundo (o vídeo 1 usou 30). No
  Remotion, um componente `EmDois` arredonda o quadro para baixo ao par:
  `const f = Math.floor(frame / 2) * 2`. Toda animação de colagem lê esse `f`. A
  interface lê o `frame` normal.

### 3. Contraste entre o nítido e o feito à mão

- **O que é:** a interface é limpa, branca, com sombra leve. O mundo em volta é
  textura. O produto sempre parece real e preciso.
- **Como fazer:** a interface vem da biblioteca de componentes reconstruídos, sem
  grão por cima. O grão fica só nas camadas de fundo.

### 4. Uma forma vira a próxima (corte por forma)

- **O que é:** o quadrado preto do cubo vira a janela do produto (10,7 s). A
  janela encolhe e vira um círculo escuro, que vira o ponto do túnel (22,1 s). O
  cubo vira hexágono, o hexágono vira triângulo (33,5 s). O olho do cubo vira o
  logo.
- **Como fazer:** planejar no storyboard a **forma de saída** de cada cena e a
  **forma de entrada** da seguinte. Elas têm a mesma posição, tamanho e cor no
  quadro do corte.

### 5. Corte seco em movimento

- **O que é:** 22 cortes e quase nenhuma dissolução. O corte acontece com tudo
  já se mexendo. A cena seguinte começa no meio de um movimento.
- **Como fazer:** cada cena começa com 4 a 8 quadros de movimento já em curso
  (o objeto entra em velocidade, não do zero). A curva de saída acelera até o
  corte.

### 6. Um símbolo atravessa o vídeo

- **O que é:** o cubo com um ponto no centro. Ele é o produto, a memória, o
  olho que vê o contexto, o logo.
- **Para a Dinn:** escolher **um** símbolo próprio por vídeo e fazer cada cena
  transformá-lo. Isso dá unidade sem repetir a mesma imagem.

### 7. Rima visual

- **O que é:** o diagrama de 13,5 s volta em 46,9 s, igual na forma, com novo
  conteúdo e com cor. O espectador reconhece e sente que a história avançou.
- **Como fazer:** no roteiro, marcar uma cena de "promessa" no início e a mesma
  cena "cumprida" no fim.

### 8. Tipografia como imagem

- **O que é:** "INFORMATION" é uma colagem de letras de fontes e texturas
  diferentes. Ela se desmonta e se resolve em "Intelligence." limpa. A forma da
  palavra conta a ideia: informação é bagunça, inteligência é ordem.
- **Como fazer:** cada letra é uma camada com fonte, tamanho e fundo próprios,
  entrando a 12 quadros por segundo. A palavra final usa a fonte da marca.
  Na Dinn, a palavra final é em Roboto ou Inter, conforme o Design System.

### 9. A interface é um personagem

- **O que é:** o texto se digita, o cursor anda e clica, o brilho verde-água
  responde ao clique, cartões de raciocínio se revelam linha a linha, dois cursores
  com nome de cargo trabalham juntos.
- **Como fazer:** componentes de interface da biblioteca com estados animáveis:
  `Digitando`, `Cursor` com caminho em curva, `CartaoRaciocinio` com revelação por
  linha, `CursorColega` com etiqueta. Nunca mostrar função não lançada como pronta.

### 10. Linhas de construção e pontos em trilho

- **O que é:** linhas finas de perspectiva se desenham. Pontos pretos correm por
  elas. Etiquetas nascem presas aos pontos, no tempo das palavras.
- **Como fazer:** SVG com `stroke-dashoffset` para desenhar a linha. O ponto segue
  a mesma linha com `getPointAtLength`. A etiqueta aparece no quadro em que a
  palavra começa na voz (tempo tirado do `timeline.json`).

### 11. A câmera nunca para

- **O que é:** sempre há deriva lenta, avanço ou recuo. Até o plano "parado" do
  "Intelligence." tem riscos que se mexem.
- **Como fazer:** um contêiner de câmera por cena, com escala de 1,00 a 1,04 e
  deslocamento de poucos pixels ao longo da cena.

### 12. Assinatura com luz pelas frestas

- **O que é:** o cubo escuro se abre por linhas de luz que saem das arestas. As
  faces voam para fora e revelam o "H".
- **Como fazer:** 3D simples com `@remotion/three` (cubo com textura de papel e
  faces separadas) ou cubo em CSS 3D. A luz é uma camada branca com máscara que
  cresce a partir das arestas.
- **Leitura:** a Harvey provavelmente usou um programa 3D com textura pintada à
  mão (Cinema 4D ou Blender). Não foi confirmado.

## Cor e tipografia

- **Base neutra:** 92,7% dos pixels são branco-papel, cinza e preto. As cores mais
  comuns: `#edeeeb`, `#f4f5f3`, `#fdfefc` (papel), `#d6d6d4`, `#c3c3c2`, `#6d6b6c`,
  `#37383a`, `#141613` (cinzas e quase preto).
- **Acento raro:** entre os pixels com cor, 39% são lilás-roxo (240–300°), 31% são
  verde-água e sálvia (150–210°) e 10% são rosa-terroso (0–30°).
- **Tipografia:** serifa editorial nos títulos e no logo. Sem serifa só dentro da
  interface. Texto na tela é raro: "Intelligence." é o único título em tela cheia.
- **Para a Dinn:** a regra útil é a **proporção**, não a cor. Base neutra com
  textura e o roxo `#5130E9` como acento em menos de 10% da tela. O limão e o
  laranja ficam para um ou dois momentos de pico.

## Som

### Narração

- Uma voz só, calma, em registro médio-grave. Altura mediana de 178 Hz (p10 155 Hz,
  p90 220 Hz). Variação de 6,1 semitons entre p10 e p90: entonação contida, sem
  tom de vendedor.
- Ritmo de 161 palavras por minuto enquanto fala. 20 pausas de 0,25 s ou mais. A
  maioria dura de 0,35 a 0,86 s. As pausas longas fecham cada ideia.
- Voz comprimida e próxima: fator de crista 7,1 (pico 17 dB acima da média), pico
  em −2,1 dBFS.
- Frases curtas, com uma ideia cada. Estrutura de três ("your templates, your
  precedent, your standards") e contraste ("information is not intelligence").

### Música

- Leito tonal e sustentado, sem bateria marcada. Notas longas aparecem como linhas
  horizontais no espectrograma. Centro tonal em **Sol** (croma dominante em G, com
  D e F#). **Leitura:** piano, cordas ou sintetizador suave.
- Pulso estimado em cerca de 120 BPM, mas fraco. Os cortes **não** seguem uma grade
  de batida.
- Fica 10 dB abaixo da voz. Ganha espaço só nas pausas e no fim.

### Efeitos sonoros

- Em 10 dos 22 cortes há um ataque grave pelo menos 11 dB acima da mediana local.
  Em pontos aleatórios do vídeo, a mediana é 6,4 dB e só 25% passam de 11,2 dB.
  Os maiores: 48,4 s (+24 dB), 31,75 s (+22 dB), 29,2 s (+18 dB), 44,2 s (+18 dB),
  40,5 s (+15 dB).
- Nos cortes com tela do produto, o ataque é agudo: 13,5 s (+20 dB), 17,5 s
  (+17 dB), 22,1 s (+16 dB), 10,75 s (+15 dB). **Leitura:** clique, "tick" ou
  papel rápido.
- O ataque cai até 0,3 s depois do corte, em geral. O som confirma o corte, não o
  antecipa.

### Sincronia entre voz e imagem

- **13 dos 22 cortes** caem numa pausa da voz ou a até 0,3 s dela. Quatro das cinco
  viradas de ato caem dentro de uma pausa (10,75 s, 22,1 s, 36,2 s, 55,5 s).
- Elementos nascem **na palavra**: as três etiquetas a cada 0,75 s em "templates,
  precedent, standards". "INFORMATION" surge com "information". "Intelligence."
  se resolve no fim da palavra "intelligence".
- O logo abre 0,6 s antes do fim da voz e fica 1,4 s sozinho, só com a música.

## O vídeo 1 do Davinci contra esta referência

Medição do vídeo 1 feita em 03/11/2026 sobre `render/um-dia-com-o-dinn-v1-final.mp4`
e sobre o código em `05-build/src`.

| Ponto | Harvey II | Vídeo 1 do Davinci ("Um dia com o Dinn") |
|---|---|---|
| Duração e ritmo | 60 s, 22 cortes de cena (1 a cada 2,7 s) | 173,7 s, 7 trocas fortes de cena detectadas (1 a cada ~25 s) |
| Mundo visual | Um mundo próprio de colagem | Degradês do site, janela do app e prints |
| Símbolo | Um cubo atravessa tudo | Sem símbolo recorrente |
| Cadência | 12 e 24 quadros por segundo misturados | 30 em tudo |
| Transições | Corte por forma, em movimento | Entradas e saídas com `fade`, `spring` e `interpolate` |
| Interface | Componentes animados, cursor, digitação | **Já tem** janela reconstruída, digitação e cursor. Ponto forte a manter |
| Loudness | −15,1 LUFS | −14,6 LUFS. Nível certo |
| Voz | Humana ou paga, contida | edge-tts gratuita, soa robô (aprendizado 1) |
| Efeitos | Impacto audível em cada virada | Discretos demais (aprendizado 5) |

**Leitura:** o Davinci já domina a interface viva e o nível de som. O salto está em
quatro pontos: mundo visual próprio, símbolo recorrente, corte por forma em ritmo
curto, e voz e efeitos de outro nível.

## O que o Davinci precisa para chegar lá

### Decisões do owner antes do próximo vídeo

1. **3D com textura à mão entra no cânone?** Hoje [`REFERENCIAS.md`](../../REFERENCIAS.md)
   diz que a Dinn não faz efeito 3D. O cubo da Harvey é 3D, mas com textura de papel
   e sem brilho. É uma exceção aceitável? Decisão do owner com parecer do Alex.
2. **Estilo de colagem é da Dinn?** A colagem em papel é a assinatura da Harvey.
   Copiar o estilo inteiro faz a Dinn parecer a Harvey. Recomendação: pegar as
   técnicas (cadência, corte por forma, símbolo, rima, som) e criar uma textura
   própria da Dinn com o Alex.
3. **Voz.** Este nível exige voz humana ou voz paga com licença comercial. Ver o
   aprendizado 1 em [`APRENDIZADOS.md`](../../APRENDIZADOS.md).
4. **Música.** Trilha licenciada com stems separados, para baixar a música sob a
   voz e subir nas pausas.

### Biblioteca de assets (`video/biblioteca/`)

- Texturas: papel claro e escuro, grafite, giz, tinta, recorte com borda rasgada.
  Fonte: escaneada pela equipe, gerada pelo Alex ou de acervo com licença
  registrada.
- Formas base: o símbolo da Dinn escolhido para o vídeo, em 2D e em 3D.
- Componentes de interface do Dinn reconstruídos e animáveis (ver técnica 9).
- Kit de efeitos sonoros: impacto grave, clique, papel rápido, risco de lápis,
  subida curta, toque leve para pontos. Cada som com fonte e licença no ledger.

### Componentes de código (Remotion)

| Componente | Faz | Técnica |
|---|---|---|
| `Grao` | ruído animado por cima da cena | 1 |
| `PecaRecortada` | imagem com borda rasgada e sombra suave | 1 |
| `EmDois` | segura cada pose por 2 quadros | 2 |
| `Camera` | deriva, avanço e recuo leves | 11 |
| `CortePorForma` | casa a forma de saída com a de entrada | 4 |
| `LinhaQueSeDesenha` e `PontoNoTrilho` | linha SVG e ponto que corre nela | 10 |
| `PalavraColagem` | letras de fontes e texturas diferentes que se resolvem | 8 |
| `Digitando`, `Cursor`, `CursorColega`, `CartaoRaciocinio` | interface viva | 9 |
| `Assinatura` | o símbolo se abre e revela o logo | 12 |

### Processo

1. Roteiro com uma ideia por frase. Cada frase vira uma linha da decupagem.
2. Gravar ou gerar a **voz final antes da animação**. O tempo de cada palavra
   entra no `timeline.json`.
3. Storyboard com a forma de saída e de entrada de cada corte. Corte de ato vai na
   pausa da voz.
4. Animático (rascunho de 60 s com formas simples e voz final) aprovado antes do
   acabamento.
5. Mapa de som: um ataque em cada virada, cliques nas ações da interface, música
   10 dB sob a voz.
6. Revisão com medição: loudness perto de −15 LUFS para web, pico real abaixo de
   −1 dBFS, e checagem de que cada ataque cai até 0,3 s depois do corte.

## Como refazer a análise

Os scripts ficam em [`video/scripts/referencia/`](../../scripts/referencia/). O vídeo,
os quadros e o áudio da Harvey **não sobem para o Git**.

1. Achar o stream na página. Neste caso, um `.m3u8` do Mux no HTML.
2. Baixar com ffmpeg: `ffmpeg -i <rendition-1080p.m3u8> -c copy video.mp4`.
3. Extrair quadros: `ffmpeg -i video.mp4 -vf scale=480:-1 quadros/f_%04d.jpg`.
4. Cortes e cadência: `python -I cadencia.py quadros/`.
5. Áudio: `ffmpeg -i video.mp4 -vn audio.wav`, depois
   `python -m demucs -n htdemucs -o stems audio.wav`.
6. Painel de som: `python -I painel_audio.py audio.wav saida/ mix`.
7. Som × corte: `python -I som_e_corte.py stems/htdemucs/audio <cortes...>`.

Os scripts usam `librosa`, `matplotlib`, `scipy`, `Pillow` e `demucs`, num ambiente
Python separado do `video/.vendor/py`.
