# Guia de referências — UI e UX da nova Dinn

Fontes: harvey.ai e elevenlabs.io/pt (medido no navegador em 29/10/2026, viewport 1440) e os prints enviados.
Regra de ouro do projeto: **seguimos a estrutura, o ritmo e a composição das referências. Mantemos a nossa fonte (Roboto/Inter do tema), os botões do tema e o violeta `--primary`.**

## 1. Princípios comuns

1. **Menos é mais.** Uma ideia por seção. Título curto, 1 frase de apoio, 1 ação.
2. **Muito respiro.** Seção com 112 a 140 px de padding vertical em desktop. Nada de bloco encostado em bloco.
3. **Imagem manda, texto apoia.** Cada recurso aparece com tela real do produto. Texto fica pequeno e cinza.
4. **Cor só no conteúdo.** A interface é neutra (branco ou quase preto). A cor vem das imagens, dos gradientes e do botão principal.
5. **Cantos suaves, sem borda pesada.** Cards com raio 8 a 24 px, fundo levemente diferente do da página, sem sombra forte.
6. **Alternância de fundo** entre seções (claro, escuro, claro) para marcar o ritmo da rolagem.
7. **Prova social cedo.** Logos e números logo abaixo do hero.
8. **Uma ação principal repetida.** "Solicitar demo" no menu, no hero e no fim.

## 2. Harvey (harvey.ai) — estrutura e medidas

Tipografia: títulos em serifa (HarveySerif), corpo em sans (HarveySans). Nós usamos Roboto (título) e Inter (texto), mantendo a mesma hierarquia.

| Item | Valor medido |
|---|---|
| Fundo claro | `#FAFAF9` (superfície alternada `#F2F1F0`) |
| Fundo escuro | `#0F0E0D` |
| Texto | `#0F0E0D`; secundário `#706D66` |
| Texto UI (nav, links, parágrafo curto) | 14 px, peso 500, entrelinha 18 px, tracking -0,14 px |
| Corpo | 16 px / 24 px |
| H1 hero | muito grande (≈104 px, entrelinha ≈1,0), 3 linhas, alinhado à esquerda |
| Botão | altura 40 a 48 px, raio **4 px**, fundo `#0F0E0D`, texto `#FAFAF9` |
| Raio de card | 8 px |
| Largura útil | ≈1376 px; margem lateral 32 a 56 px |
| Padding de seção | 56 / 112 / 140 px |

Ordem das seções da home:

1. **Barra de aviso** no topo (1 linha, fundo escuro).
2. **Menu**: logo à esquerda, links no centro com setas de submenu, "Login" (contorno) e "Request a Demo" (cheio) à direita.
3. **Hero**: título enorme à esquerda; à direita, subtítulo curto e o botão. Abaixo, **mídia larga** com textura de fundo (pintura granulada verde/azul) e um player de vídeo centralizado (círculo branco com play) sobre a captura do produto.
4. **Grade de logos de clientes** com número ("3,500+ organizações").
5. **Roteador de público** ("Para escritórios" / "Para jurídico interno"): 2 cards grandes lado a lado (680 × 688 px, raio 8), imagem de fundo escurecida, título serifado, 1 frase e botão contorno.
6. **Anúncio de lançamento** (selo "NEW", título, botão).
7. **Lista de produtos** em acordeão visual: coluna esquerda com nomes (Agents, Spaces, Vault…); o item ativo abre texto curto e "Learn More"; coluna direita troca a imagem do produto.
8. **Depoimentos** em carrossel (fundo `#F2F1F0`): citação grande, nome, cargo, empresa, "Customer Story →".
9. **Casos de clientes** em carrossel com vídeo (fundo escuro): card com foto, título de 1 linha e botão.
10. **Estatísticas** (fundo escuro): 5 números grandes com legenda de 1 linha.
11. **Segurança e certificações**: texto curto + lista de selos com "Details →".
12. **Rodapé** escuro.

## 3. ElevenLabs (elevenlabs.io/pt) — estrutura e medidas

Tipografia: títulos em Waldenburg peso **300 (light)**; corpo em Inter.

| Item | Valor medido |
|---|---|
| Fundo | `#FDFCFC`; texto `#000` |
| H1 | 48 px / 52 px, peso 300, tracking -0,96 px |
| H2 | 36 px / 42 px, peso 300 |
| Corpo | 16 px / 24 px, tracking 0,16 px; cinza médio |
| Menu | 18 px, links simples, "Entrar" e "Criar conta" |
| Botões | **pílula** (raio 9999 px), altura 32 a 40 px; primário preto, secundário branco |
| Chip pequeno | 13 px, pílula, padding 0 12 px |

Ordem das seções:

1. **Faixa de lançamento** no topo (1 linha + botão pílula).
2. **Hero** centrado ou à esquerda com 2 botões (principal e secundário) e chips de produto.
3. **Faixa de logos** em movimento ("Confiado por grandes empresas") + link "Ver todas as histórias".
4. **Bloco "Duas plataformas, mesma pesquisa"**: 2 colunas, cada uma com nome, 1 frase e imagem do produto num painel cinza claro com raio grande.
5. **Seções por produto**: título de 36 px, 1 parágrafo, link "Saiba mais"; abaixo, **cards de funcionalidade** em grade (1 grande + 4 pequenos). Cada card tem **demo viva** (animação com a interface real), nome curto e 1 frase.
6. **Cards de funcionalidade pequenos**: ícone no topo, título, 1 frase. Fundo `#F5F4F2`, raio ≈16 px, sem borda.
7. **Casos de uso com logo + frase** abaixo de cada seção de produto.
8. **Showcase**: título centralizado, **abas em pílula** (2 itens), grade irregular de cards com foto real, cantos 24 px, gradiente escuro embaixo e título branco sobre a foto. Alguns slots vazios (cinza) para dar ritmo.
9. **Bot de ajuda flutuante** ("Dúvidas?") no canto: bolha com orbe colorido; ao abrir, painel com orbe, texto curto e campo "Ou envie uma mensagem…".
10. **Rodapé** em colunas com títulos em caixa alta pequena.

## 4. Como isso vira regra para a Dinn

Tokens:

- Fundo claro: `--background`. Superfície: `--muted`. Escuro: `--foreground`.
- Texto secundário: `--muted-foreground`.
- Raios: card 16 px (`--r-lg` ou maior), mídia 24 px, botão do tema.
- Largura útil: `max-width: 1376px`; lateral `clamp(24px, 4vw, 56px)`.
- Padding de seção: 112 px (desktop), 72 px (mobile).
- Título de seção: 36 a 48 px, peso leve (300 a 400), tracking negativo curto. Hero: 72 a 104 px.
- Texto UI e corpo curto: 14 a 16 px.

Componentes:

- **Hero em duas colunas**: título à esquerda, subtítulo e botão à direita, mídia larga abaixo.
- **Card de cliente**: gradiente de `Dinn_gradients` + camada preta 40 % + logo branca PNG + título de 1 linha + "Ler história →".
- **Card de funcionalidade**: título de 2 a 4 palavras, 1 frase, imagem real do produto.
- **Abas em pílula** para showcase, no máximo 3.
- **FAQ como bot guiado**: bolha flutuante, menu de perguntas, resposta, botão "Voltar ao menu".
- **Rodapé** em colunas, títulos em caixa alta pequena.

Proibido: animação com elemento que não existe no produto; texto longo ao lado de imagem; mais de 3 abas; mais de 3 cards por aba; borda grossa; sombra forte; segundo tom de roxo.

## 5. Imagens

- Sem imagem final: usar placeholder genérico neutro (retângulo `--muted` com raio) e marcar `data-placeholder`.
- Animação de produto: só com o front real do Dinn Manager (dados mock). Se não der, usar print.
- Logo de cliente: PNG branco sobre gradiente escurecido.
