---
title: Som e sincronia em demonstração de produto
status: draft
owner: Marketing (Renan Cavalheiro)
version: 0.1.0
last_updated: 2026-11-05
review_cycle: monthly
source_of_truth: this-file
---

# Som e sincronia

O feedback nº 5 do owner no vídeo 1 foi: o efeito ficou discreto demais. O som conduz a
emoção. Este arquivo dá o método e os números.

**O Claude não ouve.** Toda conclusão de som vem de medição ou de um humano que escutou.
Fontes e licenças vão para `04-audio/LEDGER.md` (ver
[`video/audio/README.md`](../../../video/audio/README.md)).

## 1. Mapa de emoção

Todo vídeo tem um mapa antes do build. Ele vai no moodboard e na SPEC.

| Tempo | Cena | Emoção alvo | Intensidade (0 a 5) | Voz | Música | Efeito |
|---|---|---|---|---|---|---|
| 0 a 2 s | Gancho | curiosidade | 3 | entra no primeiro segundo | leito baixo | uma subida curta até o corte |
| 2 a 6 s | Problema | peso, ruído | 2 | contida | grave sustentado | cliques leves, sobrepostos |
| 6 a 15 s | Mecanismo | clareza | 3 | firme | abre 3 dB | clique de interface em cada ação |
| 15 a 18 s | Prova | alívio, confiança | 4 | pausa antes do número | abre | impacto grave no número |
| 18 a 20 s | Fecho | calma | 1 | termina antes do logo | cauda | silêncio de 0,3 a 0,5 s antes do logo |

Regras do mapa:

1. Dois ou três picos por vídeo, não mais. Pico demais não é pico.
2. Todo pico é precedido de um respiro de 0,3 a 0,5 s com menos som.
3. O pico principal cai na prova, não no gancho.
4. O fim tem calma. O logo fica sozinho com a cauda da música (1,4 s no Harvey II).

## 2. Números medidos no Harvey II

Do [`ESTUDO`](../../../video/referencias/harvey-ii/ESTUDO.md), com Demucs e librosa.

| Medida | Valor |
|---|---|
| Loudness integrado | −15,1 LUFS. Faixa de 2,3 LU. Pico real −0,5 dBFS |
| Voz | −15,0 LUFS, ocupa 45,8 s dos 60 s |
| Música | cerca de 10 dB abaixo da voz |
| Ataques graves nos cortes | 10 dos 22 cortes, 11 dB ou mais acima da mediana local |
| Maiores ataques | +24, +22, +18, +18, +15 dB |
| Cortes com tela do produto | ataque **agudo** (clique ou "tick"), +15 a +20 dB |
| Atraso do ataque | até 0,3 s depois do corte. Confirma o corte, não o antecipa |
| Cortes que caem numa pausa da voz | 13 de 22 |
| Pulso da música | fraco. Cortes **não** seguem grade de batida |
| Ritmo de fala | 161 palavras por minuto enquanto fala. 20 pausas de 0,25 s ou mais |

**Alvo para a Dinn** (partindo desses números): −14 a −15 LUFS integrado, pico real abaixo
de −1 dBTP, música cerca de 10 dB abaixo da voz, ataque nos cortes de virada até 0,3 s
depois do corte. A skill `revisao-e-entrega-de-video` usa −14 LUFS para social. Os dois
valem. Declare o alvo na SPEC.

## 3. Vocabulário de som de interface

Cada som tem uma função. Som sem função sai.

| Som | Quando | Observação |
|---|---|---|
| Clique | cursor aperta um botão | agudo e curto. Um por clique |
| Digitação | texto sendo digitado | uma textura suave, não uma batida por tecla |
| Whoosh curto | câmera faz zoom ou a janela entra | acompanha o movimento, não o antecipa |
| Tick | contador passa de uma casa | no máximo 6 ticks por contador |
| Ding de resposta | o resultado aparece | só no resultado principal da cena |
| Subida (riser) | 1 a 1,6 s antes de um pico | termina no impacto |
| Impacto grave | virada de ato ou prova principal | o pico do mapa |
| Respiro | 0,3 a 0,5 s antes do pico | menos som, nunca silêncio total no meio do vídeo |

O vídeo 1 gerou os efeitos em código (`04-audio/audio.py`) e os leu do mesmo `timeline.json`
da animação. Mantenha: efeito e animação nascem do mesmo tempo.

## 4. Sincronia pela palavra

1. **A voz vem primeiro.** Grave ou gere a voz final antes de animar (ver aprendizado 1
   em `video/APRENDIZADOS.md`). Voz gratuita (edge-tts) serve só de guia de tempo.
2. **Tempo por palavra.** Gere um arquivo com o início de cada palavra. O vídeo 1 tem
   `data/palavras.json`. Para uma voz gravada por pessoa, transcreva **localmente**
   (Whisper em máquina local). Assim o áudio não sai da máquina.
3. **Palavra a palavra, não linha a linha.** Dois criadores que testaram o fluxo relatam
   que o tempo por palavra dá o melhor encaixe. Para vídeo longo, o arquivo por linha
   basta e é bem menor.
4. **Elemento nasce na palavra.** Use `naPalavra()` (ver `componentes.md`). Tolerância de
   3 quadros.
5. **Corte na pausa.** Virada de ato cai numa pausa da voz (4 das 5 no Harvey II).
6. **Folga de corte de áudio.** Se cortar filmagem ou voz, deixe 30 a 200 ms de folga e
   aplique um fade de 30 ms (regra do video-use, em `video/GUIA-CLAUDE-VIDEO.md`, dica 10).
   Um criador relata áudio "apressado ou cortado cedo" na primeira versão automática.

## 5. Voz

| Decisão | Regra |
|---|---|
| Peça pública | gravação humana, ou voz paga com teto em dólar e licença comercial |
| Voz gratuita | só guia de tempo. A prévia leva aviso |
| Idioma | voz nativa pt-BR. Voz multilíngue soa estrangeira (aprendizado do vídeo 1) |
| Ritmo | 140 a 160 palavras por minuto em pt-BR é um ponto de partida (`ofício`). Meça no vídeo 1 e ajuste |
| Voz de pessoa real | só com autorização escrita. Sem clonagem |
| Aviso | voz sintética leva aviso no arquivo de entrega |

## 6. Medição

```bash
# loudness integrado, faixa e pico real
ffmpeg -i video.mp4 -af ebur128=peak=true -f null -
```

Ataques e pausas: use os scripts de `video/scripts/referencia/` (`painel_audio.py`,
`som_e_corte.py`). Com earshot instalado, cite o número que ele devolver.

## 7. Lista dos 5 momentos para o humano ouvir

O Claude entrega esta lista com o horário de cada um. O humano ouve e responde.

1. o primeiro efeito do gancho;
2. o pico principal (prova);
3. um clique de interface no meio do vídeo;
4. a virada de ato mais forte;
5. o último segundo antes do logo.

Cada item volta com `ok`, `alto`, `baixo` ou `fora do tempo`. Sem a resposta, o item
fica `não verificado` na revisão.

## 8. Música

- leito tonal sem bateria marcada ganha da música de batida em demo de produto (`ESTUDO`,
  leitura);
- música sintetizada em código, como no vídeo 1, evita licença de terceiros. A licença
  de música de acervo é conferida arquivo a arquivo, e `NC` reprova;
- trilha com **stems** separados permite baixar a música sob a voz e subir nas pausas.
  É decisão do owner pendente (ver `ESTUDO`, decisão 4).
