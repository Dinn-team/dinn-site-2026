# Home nova: roteiro de textos (PT), v2

**Documento de trabalho, 30/09/2026.** Atividade: Dinn-team/dinn-site-2026#4
(DINN-OS-064 no Dinn OS).

> Este é o texto que vai para a home, seção por seção, **antes** de virar código.
> Os itens marcados **[CONFIRMAR]** precisam de validação antes de publicar
> (regra DINN-OS-016: todo claim precisa de prova ou ressalva).

## Fontes desta versão

| Fonte | Data | O que trouxe |
|---|---|---|
| `dinn-os/brain/voice.md` v0.4.1 | 28/09 | mensagem principal, tom, linguagem para agentes, o que evitar |
| `dinn-os/brain/product.md` v0.6.1 | 29/09 | produtos, status e dores (Stock, Pulse, Locator, Conecta, candidatos) |
| `dinn-os/brain/commercial.md` v0.3.2 | 28/09 | portas de entrada, trial guiado, regras de proposta |
| `dinn-os/brain/customers.md` v0.3.1 | 28/09 | perfis, sponsors e casos de uso por time |
| `dinn-os/research/2026-09-17-dinn-data-offer-spec.md` v0.8 | 17/09 | definição e mensagens do Dinn Conecta |
| Deck **Biolab: Estoque na prática** (`dinn-share/decks/biolab`) | 15–16/09 | estrutura "produto na prática": consultar → comparar → priorizar, 3 níveis de decisão, MCP, rotinas |
| Deck **Lilly México** v03.3 (`dinn-share/decks/lilly-mexico`) | 24/09 | agentes no canal, dado observado × estimado, cadências, fontes → sistemas |
| Dossiê Clay (`2026-09-22-clay-dinn-positioning.md`) | 22/09 | tese, menu, ciclo Observar → Agir |

## O que mudou em relação à v1

1. **A Dinn não executa a ação: a equipe decide e age.** A Dinn entrega o sinal
   priorizado onde o trabalho acontece (plataforma, arquivo, API, a IA do
   cliente, contexto para o CRM). Nos decks: *"A IA prepara a análise. A equipe
   decide."*
2. **O Dinn Conecta deixou de ser "quem leva a ação ao campo".** Ele passa a ser
   o que o Dinn OS define: **prepara e entrega dados de farma no ambiente que o
   cliente já usa** (BI, Copilot, agentes, data lake).
3. **O Manager não é um produto.** Dinn Manager é o nome da plataforma. Os
   produtos são Stock, Pulse e Locator, mais o Conecta.
4. **A etapa "Aprender" virou "Acompanhar".** Não existe hoje um ciclo automático
   de retroalimentação. O que existe e aparece nos decks é **acompanhar o mesmo
   recorte ao longo do tempo**, nas rotinas diária, semanal e mensal.
5. **Saíram os claims sem lastro:** "até 40%", "Forecast IA", "valor em 48
   horas", "integrado ao CRM/BI/ERP", "compliance com AI Act", "decisão
   autônoma".

---

## 0. Mapa de produtos no ciclo

Este mapa responde ao entregável da atividade "mapear os produtos atuais na
nova arquitetura". Na coluna do dossiê Clay, *Signals & AI* está abreviado como
*Signals*.

| Etapa na home | Camada do dossiê Clay | Produto / capacidade | Status no Dinn OS | Como aparece no site |
|---|---|---|---|---|
| **1. Observar** | Data & Intelligence | **Dinn Stock** (disponibilidade, ruptura e estoque observado/estimado); agentes que consultam os canais; modelo preditivo como parte do Stock | ativo, porta de entrada | produto com nome |
| **2. Entender** | Signals | **Dinn Pulse** (mudanças de giro, demanda e movimento); sinais de ruptura, persistência e estoque parado | ativo, oferta padrão em validação | produto com nome |
| **3. Priorizar** | Orchestration | **Dinn Manager** (a plataforma): 3 níveis de decisão e fila de verificação por loja. **Dinn Locator** (onde encontrar o produto, para SAC e campo) | Manager ativo; Locator em desenvolvimento | Manager como "a plataforma"; Locator **[CONFIRMAR se pode aparecer]** |
| **4. Levar à rotina** | Execution | exportação, API, **sua IA via MCP** (ChatGPT, Claude, Copilot), contexto para o CRM; **Dinn Conecta** leva dados de farma ao BI, Copilot e agentes do cliente | MCP somente leitura; Conecta decidido por Renan (registrar a decisão da 062 no Dinn OS) | Conecta com seção própria |
| **5. Acompanhar** | (feedback) | rotinas diária, semanal e mensal no mesmo recorte | exemplos de configuração | sem produto |

**Fora da home por enquanto:** Forecast, Share, Trade e Sentinel, que são
candidatos. Pelo `voice.md`, só podem aparecer "como próximos caminhos, não como
capacidade madura".

---

## 1. Menu

**Como funciona** · **Soluções** · **Dinn Conecta** · **Clientes** · **Blog** ·
botão **[Solicitar demo]**

---

## 2. Hero (topo)

- **Selo:** A camada de inteligência para o canal farmacêutico
- **Manchete:** Transforme sinais do mercado farmacêutico em *ação comercial*
- **Subtítulo:** Quem vende em farmácias não precisa de mais um painel. Precisa
  saber onde agir, com qual confiança e com qual impacto.
- **Botões:** [Solicitar demo] · [Ver como funciona ↓]
- **Visual:** o mesmo fluxo dos decks, em um cartão animado:
  `Produto A · 32% dos PDVs sem estoque em SP` → `Rede A concentra o sinal` →
  `6 lojas para verificar primeiro`. Rodapé do visual: *"Dados ilustrativos."*

---

## 3. Logos de clientes

- **Título:** Indústrias farmacêuticas que já usam a Dinn
- **Logos:** mantidos como estão (Eurofarma, Libbs, Marjan, Sanofi), por decisão
  do Renan.

---

## 4. Como funciona (coração da home)

- **Selo:** Como funciona
- **Título:** Do sinal no canal à *próxima ação* do time
- **Intro:** A Dinn acompanha a disponibilidade dos seus produtos nas farmácias,
  separa o que mudou do que é ruído e organiza a leitura por produto, rede,
  região e ponto de venda. Tudo com fonte, data e confiança explícitas.

### Etapa 1: Observar o canal
- **Mensagem:** Onde há estoque e onde falta produto, farmácia por farmácia.
- **Texto:** Agentes consultam os canais digitais das farmácias e registram o
  que cada fonte informa, com local e horário. Onde não há resposta direta, a
  Dinn estima a partir de lojas comparáveis e do histórico. **Cada registro diz
  se é observado ou estimado.**
- **Detalhe:** base diária (D-1) para acompanhar; consulta pontual para
  verificar uma loja agora, onde a fonte permite.
- **Produto:** Dinn Stock
- **Visual:** "Dois caminhos, uma base identificada": Observado (fonte →
  registro) e Estimado (referências → estimativa). Feito em código, a partir do
  slide equivalente do deck Lilly.

### Etapa 2: Entender o que mudou
- **Mensagem:** Nem toda variação merece atenção.
- **Texto:** A Dinn transforma a leitura em sinais com nome: ruptura
  persistente, estoque sem movimento, mudança de giro, concentração em uma rede
  ou região. A evolução no tempo separa um sinal pontual de um problema
  recorrente.
- **Produtos:** Dinn Stock · Dinn Pulse
- **Visual:** feed de sinais (feito em código), por exemplo:
  - Ruptura persistente · Produto A · SP
  - Estoque sem movimento há 30 dias · Loja 04
  - Queda de giro · Rede B

### Etapa 3: Priorizar onde agir
- **Mensagem:** Uma base, três níveis de decisão.
- **Texto:**
  - **Estratégico:** onde a liderança deve concentrar atenção.
  - **Tático:** o que discutir com cada rede.
  - **Operacional:** quais lojas verificar primeiro.

  A saída é uma fila concreta: cada loja com o sinal, a pergunta a responder e o
  retorno esperado.
- **Produto:** Dinn Manager (a plataforma) · Dinn Locator **[CONFIRMAR]**
- **Visual:** a tabela "Fila de verificação por loja" do deck Biolab
  (Loja · sinal · verificação sugerida · retorno), com dados fictícios.

### Etapa 4: Levar para a rotina do time
- **Mensagem:** O sinal chega aonde o trabalho acontece.
- **Texto:** Use na plataforma, exporte para a reunião com a rede, leve ao BI
  por API **[CONFIRMAR]** ou pergunte direto na sua IA. **A Dinn prepara a
  análise; a equipe decide** o que fazer com cada ponto de venda.
- **Visual:** fontes → Dinn → saídas (Plataforma · Arquivo · API · Sua IA ·
  CRM), feito em código.

### Etapa 5: Acompanhar o resultado
- **Mensagem:** Veja se o sinal persistiu depois da ação.
- **Texto:** Mantenha o mesmo produto e recorte para comparar a evolução sem
  misturar bases. Comece o dia pelos desvios, chegue à reunião semanal com uma
  lista e acompanhe no mês o que mudou no canal.
- **Visual:** três cartões de rotina, com os textos do deck Biolab: Diária 08:00
  · Semanal segunda 09:00 · Mensal primeiro dia útil.

---

## 5. Na prática

- **Selo:** Na prática
- **Título:** Do sinal à *lista de investigação*
- **Linha do tempo** (o fluxo do deck Biolab, com dados fictícios):
  1. **Qual produto precisa de atenção?** O Produto A tem 32% dos PDVs sem
     estoque em SP.
  2. **Em quais redes investigar?** A Rede A concentra o sinal: 60% em 30 dias.
  3. **Quais lojas?** Seis lojas explicam o problema, da crítica à moderada.
  4. **O que verificar em cada uma?** Pedido pendente? Produto na loja? A ausência
     voltou?
  5. **Quem cuida?** A equipe define responsável, ação e data para rever o mesmo
     recorte.
  6. **Como acompanhar?** A rotina semanal traz a lista atualizada para a
     reunião.
- **Nota:** *Exemplo ilustrativo. A causa da ruptura exige investigação; a Dinn
  não a presume.*

---

## 6. Na sua IA (MCP)

- **Selo:** Dinn + IA
- **Título:** Use a Dinn direto *na sua IA*
- **Texto:** Conecte a Dinn ao ChatGPT, ao Claude ou ao Microsoft Copilot e peça
  análises, relatórios e materiais com os dados autorizados.
- **Visual:** conversa ilustrativa, feita em código, com o texto do deck Biolab:
  > *"Compare a ruptura dos Produtos A, B e C em SP. Qual merece atenção
  > primeiro?"*
  > → *"O Produto A tem o maior percentual sem estoque no recorte (96 de 300
  > PDVs). Sugestão: abrir as redes e os PDVs do Produto A."*
- **Nota:** *Acesso autorizado e somente leitura. Conexão, arquivos e
  agendamentos dependem do plano e da configuração da sua IA. Os logos
  identificam os ambientes, sem indicar parceria.*

---

## 7. Dinn Conecta

- **Selo:** Dinn Conecta
- **Título:** Dados de farma. *Trabalhando juntos.*
- **Texto:** Mercado, dados internos e farmácias com o contexto que seu BI,
  Copilot e projetos de IA precisam. A Dinn conecta as fontes autorizadas,
  padroniza produto, loja e região, cuida da qualidade e da atualização e
  entrega no ambiente que sua equipe já usa.
- **Diagrama:** `Suas fontes (IQVIA / Close-Up · ERP, CRM e lake · farmácias)`
  → `Dinn Conecta` → `Seu stack continua o mesmo (BI · Copilot · agentes · API)`
- **Divisão de responsabilidades**, em três blocos:
  - **Com você:** dados, infraestrutura e governança.
  - **Com a Dinn:** conexão, higienização, padronização e contexto de farma.
  - **Resultado:** informação pronta no seu BI, Copilot e agentes internos.
- **Faixa:** Leve contexto de farma para Copilot · ChatGPT · Claude · Gemini ·
  seus agentes.
- **Botão:** [Veja como se conecta] (leva à demo)
- **Nota:** *Cada fonte depende de licença, autorização e escopo acordados.*
- **[CONFIRMAR]**
  - Registrar no Dinn OS a decisão da DINN-OS-062. A tarefa do site exige
    coerência com ela.
  - O nome "Dinn Conecta" ainda consta como *nome de trabalho*, sem aprovação
    de marca.

---

## 8. Soluções

- **Selo:** Soluções
- **Título:** Problemas do canal farma, *já entendidos*
- **Intro:** Você não precisa descobrir do zero quais sinais importam. A Dinn
  chega com as dores do canal farmacêutico mapeadas.

### Aba "Por resultado"

| Solução | Texto |
|---|---|
| **Reduzir ruptura** | Saiba onde falta produto por SKU, rede, cidade e loja, e aja antes de perder a venda. |
| **Negociar com evidência** | Leve à reunião com a rede os dados de disponibilidade, persistência e lojas afetadas, com data de corte. |
| **Priorizar o campo** | Uma lista do que verificar primeiro, em vez de um painel para interpretar. |
| **Acompanhar lançamentos** | Veja a presença do produto novo por rede e região desde as primeiras semanas. |
| **Orientar o SAC** | Indique farmácias com maior chance de ter o produto, com a confiança explícita. **[CONFIRMAR Locator]** |
| **Entender o movimento** | Separe queda de demanda de ruptura, sortimento ou execução. *(Pulse)* |
| **Dados de farma no seu BI e IA** | Mercado, dados internos e farmácias prontos para o seu stack. *(Conecta)* |

### Aba "Por time"

| Time | O que recebe |
|---|---|
| **Liderança comercial** | Onde concentrar atenção e como evoluiu em 30, 60 e 90 dias. |
| **Trade marketing** | Redes, regiões, lojas e SKUs priorizados para agir no canal. |
| **Força de vendas / campo** | Uma lista simples e confiável por carteira ou território. |
| **Demanda e supply** | Sinais de ruptura e de giro, com exceções e confiança. |
| **Inteligência de mercado** | Leitura de disponibilidade cruzada com a base de mercado autorizada. |
| **SAC / CX** | Onde encontrar o produto e qual alternativa indicar. |
| **Tecnologia e dados** | Dados tratados com fonte, atualização e cobertura, via arquivo, API ou MCP. |

---

## 9. Não é mais um painel (antes → com a Dinn)

- **Selo:** O que muda
- **Título:** A Dinn não é mais *um painel*.
- **Texto:** É a camada de inteligência que liga o que acontece nas farmácias às
  decisões do seu time comercial.

| Antes | Com a Dinn |
|---|---|
| Discussão sobre ruptura sem evidência | Evidência por loja, rede, cidade e SKU, com data de corte |
| Painel para interpretar | Uma lista do que verificar primeiro |
| Dado sem origem clara | Observado ou estimado, com fonte e confiança |
| Bases e planilhas conciliadas à mão | Uma base identificada, na plataforma, no arquivo, na API ou na sua IA |

---

## 10. Depoimentos

Sem mudança de conteúdo. Os depoimentos ficam mantidos por decisão do Renan.

---

## 11. Perguntas frequentes

Revisão pergunta por pergunta. O texto final de cada resposta será escrito na
implementação seguindo estas diretrizes.

| # | Pergunta | O que fazer |
|---|---|---|
| 1 | "Já usamos IQVIA/CloseUp…" | Manter. Complementa a auditoria; opera D-1 por PDV. Tirar "tempo real". |
| 2 | "Exige esforço grande de TI?" | Reescrever. Pode começar com fontes externas; implantação com escopo delimitado, em até 30 dias depois dos pré-requisitos (decisão 0007). **Tirar "48 horas" e "plug-and-play".** |
| 3 | "É mais um dashboard?" | Reescrever com os 3 níveis de decisão e a fila de verificação. |
| 4 | "Compete com o CRM?" | Manter a ideia de camada acima do CRM. **Tirar "envia tarefas para a agenda"**: não há escrita automática no CRM. Dizer "leva contexto ao CRM quando a integração for acordada". |
| 5 | "E se a IQVIA virar diária?" | **Tirar "decisão autônoma / agentic".** Dizer: dado rápido sem prioridade é ruído; a Dinn transforma em prioridade e próximo passo, e a equipe decide. |
| 6 | "Em quanto tempo vejo retorno?" | Reescrever. Começar por um objetivo, com leitura em 30 dias. Tirar "revela gargalos no primeiro dia". |
| 7 | "Como mapeiam estoque sem nossos dados?" | Manter e alinhar: agentes nos canais digitais; observado × estimado; confiança. Tirar a lista de fontes específicas. |
| 8 | "Excesso de informação?" | Reescrever: filas priorizadas, não painel. **Tirar "lógica autônoma".** |
| 9 | "Só para a força de vendas?" | Manter. **Tirar "Forecast IA".** |
| 10 | "Dá para testar antes?" | Atualizar pela decisão 0016, com o texto aprovado da prospecção: *"liberamos 30 dias com um objetivo só, com termo simples e alguém nosso acompanhando"*. Tirar "trials de 14 a 21 dias". **[CONFIRMAR com Edu]** |
| 11 | "Compliance?" | Reescrever: rastreabilidade (fonte, data, observado × estimado), dois fatores, SSO habilitável conforme configuração **[CONFIRMAR]**. **Tirar "declarada em conformidade com o AI Act" e "dados sintéticos".** |
| 12 (nova) | "O que é o Dinn Conecta?" | Definição da seção 7. |
| 13 (nova) | "Posso usar a Dinn no ChatGPT, Claude ou Copilot?" | Sim, via MCP, somente leitura, conforme o plano e a configuração. |
| 14 (nova) | "O que é dado observado e dado estimado?" | Explicação da etapa 1. |

**Correção técnica:** os `**negritos**` das respostas passam a aparecer como
negrito, e não como asteriscos.

---

## 12. Chamada final

- **Título:** Pronto para transformar sinais em *ação*?
- **Texto:** Veja numa demonstração como a Dinn mostra onde agir, com qual
  confiança, para os seus produtos.
- **Botão:** [Solicitar demo]

---

## 13. Rodapé e dados para o Google

- **Descrição do rodapé:** A camada de inteligência para o canal farmacêutico.
  Uma iniciativa da DiWE Ventures Studio.
- **Título da aba / Google:** Dinn | Sinais do mercado farmacêutico em ação
  comercial
- **Descrição para o Google:** A Dinn mostra onde falta produto nas farmácias,
  o que mudou e onde agir primeiro, com fonte e confiança explícitas.
- **Copyright:** © 2026

---

## 14. Registro de claims (DINN-OS-016)

| Claim na home | Status | Base |
|---|---|---|
| Disponibilidade e ruptura D-1 por SKU, rede, cidade e PDV | apoiado | entitlement `stock_analysis`; decks |
| Dado observado × estimado, com confiança | apoiado com escopo | `product.md`; deck Lilly |
| Consulta pontual "agora" de uma loja | apoiado com escopo | `realtime_stock_check`: só lojas elegíveis |
| Uso na IA via MCP (ChatGPT, Claude, Copilot) | apoiado com escopo | decks; somente leitura, depende da configuração |
| Exportação de dados | apoiado | deck Biolab |
| API | **CONFIRMAR** | entitlement 04/09 diz "missing"; deck Lilly 24/09 mostra "API documentada" |
| Locator para SAC | **CONFIRMAR** | `product.md`: em desenvolvimento |
| Dinn Conecta | **CONFIRMAR** | decisão da 062 ainda não registrada; nome de trabalho |
| Implantação em até 30 dias após pré-requisitos | apoiado | decisão 0007 |
| Trial guiado de 30 dias | **CONFIRMAR** | decisão 0016 aprovada; redação pública precisa do Edu |
| SSO e dois fatores | **CONFIRMAR** | deck Lilly (informado pelo owner); entitlement diz "missing" |
| ~~até 40% mais tempo produtivo~~ | não usar | sem fonte |
| ~~Forecast IA~~ | não usar | `forecast_ai`: discovery_needed |
| ~~valor em 48 horas / plug-and-play~~ | não usar | sem fonte; contradiz a política de implantação |
| ~~integrado ao CRM, BI e ERP~~ | não usar | integração não se promete antes de validar |
| ~~conformidade com AI Act~~ | não usar | sem evidência |
| ~~decisão autônoma / agentic~~ | não usar | `voice.md`: "a IA decide sozinha" está na lista a evitar |

---

## 15. Guia de vocabulário

Base: `dinn-os/brain/voice.md`. Regra geral: **comece pela dor, depois a
decisão, depois a saída. Tecnologia só no fim.**

| Termo | Usar quando… | Evitar | Exemplo bom |
|---|---|---|---|
| **Sinal** | uma mudança com nome: ruptura persistente, estoque parado, queda de giro | "sinais" genéricos | "Ruptura persistente em 6 lojas da Rede A" |
| **Agente** | houver uma tarefa concreta (consultar o canal, registrar a fonte) | "agente autônomo", "a IA decide sozinha" | "Agentes consultam os canais digitais e registram fonte e horário" |
| **IA** | explicar como a análise é preparada | IA como adjetivo de tudo ("IA-Farma") | "A IA prepara a análise. A equipe decide." |
| **Prioridade / próxima ação** | lista concreta do que verificar primeiro | "resolve 80% do problema" sem fonte | "Quais lojas verificar primeiro" |
| **Execução** | o time age a partir do sinal | sugerir que a Dinn executa sozinha | "O sinal chega aonde o trabalho acontece" |
| **Tempo real** | só na consulta pontual de loja elegível | como padrão da base, que é D-1 | "Consulta pontual, onde a fonte permite" |
| **Estimado** | sempre que não for observado | apresentar estimativa como dado exato | "Estimado a partir de lojas comparáveis" |

**Nunca dizer** (`voice.md` e guardrails do dossiê):
- que a Dinn substitui ERP, CRM, BI, data lake ou o time de dados;
- "dados 100% corretos", "dashboard completo", "IA que resolve tudo";
- "varejo" ou "sua farmácia" como público: o cliente é quem vende **em**
  farmácias;
- exploração ou candidato (Forecast, Share, Trade, Sentinel) como produto pronto.

---

## 16. O que absorver, e o que não, do benchmark Clay

| Absorver | Não absorver |
|---|---|
| Contar um **sistema** (sinal → prioridade → ação), não um catálogo de módulos | "Build anything" e a configuração como promessa principal |
| Separar **Como funciona** (plataforma) de **Soluções** (problemas e resultados) | Vocabulário horizontal de agentes e workflows sem problema farma concreto |
| Fechar o ciclo **até a rotina do time** | Sugerir que a Dinn executa sozinha ou substitui o julgamento humano |
| Mostrar exemplos concretos da saída | Menu com 30 páginas antes de existir conteúdo para elas |
