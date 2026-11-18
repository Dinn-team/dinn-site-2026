---
title: Aprendizados do Davinci
status: draft
owner: Marketing (Renan Cavalheiro)
version: 0.1.0
last_updated: 2026-11-03
review_cycle: monthly
source_of_truth: this-file
---

# Aprendizados do Davinci

Feedback do owner depois de cada vídeo. **O Davinci lê este arquivo antes do brief de todo
vídeo novo** e aplica cada regra. Uma regra sai daqui quando entra numa skill ou no fluxo.

## Vídeo 1 · Institucional "Um dia com o Dinn" (03/11/2026)

Entregue em 4 prévias. Feedback do owner depois da aprovação da v4:

| # | O que faltou | Regra para os próximos vídeos | Onde a regra vive |
|---|---|---|---|
| 1 | A narração ainda soa como robô. A voz gratuita é limitada | Voz gratuita serve só de guia de tempo. Para peça pública, o brief já pede uma decisão de voz: gravação humana, ou voz paga com teto em dólar e licença comercial. Sem decisão, a prévia sai com voz guia e um aviso | `skills/direcao-de-video-dinn` (passo de voz), `video/audio/README.md` |
| 2 | Pouca cena real de gente trabalhando. Só motion tem cara de IA | Todo vídeo mistura filmagem de pessoas reais em trabalho real com o motion. Ordem de busca: biblioteca da Dinn, depois Pexels Videos (licença Pexels, conferir cada clipe), depois geração no Google Flow com os créditos da conta do owner (o owner gera ou autoriza cada uso). O moodboard já mostra quais takes entram | `skills/moodboard-de-video`, `video/biblioteca/README.md` |
| 3 | Dependência de print da tela do Dinn. Telas mudam, e há funções ainda não lançadas | Montar uma biblioteca de assets reutilizáveis: componentes de interface reconstruídos, ícones, ilustrações, filmagens e sons. A história se conta com os assets, não só com a tela do momento. Função não lançada nunca aparece como pronta | `video/biblioteca/README.md` |
| 4 | O roteiro chegou ao build ainda mudando (3 rodadas de história) | Fechar roteiro e storyboard antes do build: discurso alinhado com a Maia, storyboard quadro a quadro com os assets da biblioteca. Isso economiza token e permite variações para teste A/B (anúncio, post social) sem refazer o vídeo | `video/FLUXO.md` (etapa 3), `skills/direcao-de-video-dinn` |
| 5 | Os efeitos sonoros ficaram discretos demais | O som conduz a emoção. Cada vídeo tem um **mapa de emoção**: picos com impacto, subida e efeito presente; trechos calmos com respiro e quase silêncio. Efeito de movimento precisa ser ouvido, não só sentido | `skills/producao-de-video-hyperframes` (som), `video/audio/README.md` |

Outros aprendizados técnicos do vídeo 1:

- **Piscada preta:** filmagem acaba alguns quadros antes do previsto. Sempre pôr um quadro parado por baixo do vídeo. Entrada e saída de tela precisam se sobrepor. Rodar a detecção de brilho quadro a quadro (`signalstats`) antes de entregar.
- **Voz multilíngue soa estrangeira.** Para pt-BR, usar voz nativa pt-BR.
- **Papel de cada personagem:** confirmar no brief quem faz o quê (a Marina é gestora de trade; o SAC é do Gustavo). Persona errada custou uma rodada.
- **Um arquivo de tempo só** (`timeline.json`) para animação e som funcionou bem. Manter.
