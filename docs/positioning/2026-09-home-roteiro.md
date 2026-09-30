# Home nova — roteiro de textos (PT)

**Documento de trabalho — 30/09/2026** · Atividade: Dinn-team/dinn-site-2026#4
Base: [`2026-09-22-clay-dinn-positioning.md`](2026-09-22-clay-dinn-positioning.md)

> Este é o texto que vai para a home, seção por seção, **antes** de virar código.
> Tudo aqui pode ser editado livremente. Itens marcados **[CONFIRMAR]** dependem
> de informação que ainda não temos.

---

## 0. Mapa de produtos no ciclo

A home deixa de apresentar um catálogo. Os produtos aparecem **dentro** das
etapas do ciclo, como partes do mesmo sistema.

| Etapa | O que acontece | Produto(s) | Descrição curta no site |
|---|---|---|---|
| **1. Observar** | disponibilidade, ruptura, preço, giro, distribuição, concorrência | **Dinn Stock**, **Locator** | Stock: disponibilidade e ruptura por SKU, PDV, rede e região, inclusive consultável no ChatGPT. Locator: **[CONFIRMAR]** localização de produto por farmácia/região |
| **2. Entender** | sinais comerciais + IA + contexto pharma | **Pulse** | **[CONFIRMAR]** sinais e alertas de mudanças relevantes no mercado |
| **3. Decidir** | prioridade, segmentação, próxima melhor ação | **Manager** | **[CONFIRMAR]** painel de gestão com prioridades, rotas e próxima melhor ação |
| **4. Agir** | a ação chega ao canal certo: campo, farmácia, CRM, API | **Dinn Conecta** | **[CONFIRMAR]** leva a ação decidida até o canal em que ela acontece |
| **5. Aprender** | medir o que aconteceu e retroalimentar | (o sistema todo) | — |

> **Para o Renan:** preciso de uma frase por produto dizendo o que ele faz de
> verdade hoje, e se algum deles ainda não pode ser anunciado. Se um produto
> estiver na etapa errada, basta mover a linha.

---

## 1. Menu

**Como funciona** · **Soluções** · **Clientes** · **Blog** · botão **[Solicitar demo]**

---

## 2. Hero (topo da página)

- **Selo:** Inteligência comercial para a indústria farmacêutica
- **Manchete:** Transforme sinais do mercado farmacêutico em *ação comercial*
- **Subtítulo:** A Dinn conecta o que acontece no canal farmacêutico à
  inteligência, à decisão e à execução comercial, do sinal ao resultado.
- **Botões:** [Solicitar demo] · [Ver como funciona ↓]
- **Visual:** mini-diagrama animado:
  `Sinal de mercado → Interpretação → Decisão → Ação`, com um exemplo real
  passando por ele, por exemplo *"Ruptura em 38 PDVs · Grande SP"* →
  *"Visita priorizada"*.

---

## 3. Logos de clientes

- **Título:** Indústrias farmacêuticas que já agem com a Dinn
- Logos atuais: Eurofarma, Libbs, Marjan, Sanofi.

---

## 4. Como funciona (coração da home)

- **Selo:** Como funciona
- **Título:** Do sinal de mercado à *ação* no campo
- **Intro:** A maioria das ferramentas para no dashboard. A Dinn percorre o
  caminho inteiro: observa o canal, entende o que mudou, decide o que importa e
  leva a ação até onde o trabalho acontece.

### Etapa 1 — Observar o mercado
- **Mensagem:** A Dinn enxerga o que está acontecendo no canal, farmácia por
  farmácia.
- **Texto:** Disponibilidade, ruptura, preço, giro, distribuição e presença da
  concorrência por SKU, PDV, rede e região. Dados D-1: a fotografia de ontem
  para você agir hoje.
- **Produtos:** Dinn Stock · Locator
- **Visual:** print `diagnostico-diario.avif`

### Etapa 2 — Entender o que importa
- **Mensagem:** A Dinn separa ruído de mudança relevante.
- **Texto:** Nem toda variação merece atenção. A Dinn já conhece a semântica do
  mercado farmacêutico (produto, EAN, PDV, rede, cobertura) e transforma
  mudanças em sinais comerciais prontos: risco de ruptura, perda de
  distribuição, avanço da concorrência, movimento de preço.
- **Produto:** Pulse
- **Visual:** feed de sinais (feito em código), por exemplo:
  - Risco de ruptura
  - Perda de distribuição
  - Oportunidade de expansão
  - Movimento de preço
  - Avanço da concorrência

### Etapa 3 — Decidir o que fazer
- **Mensagem:** O dado já chega com uma implicação prática.
- **Texto:** Cada sinal vira prioridade: quais farmácias, qual território, qual
  impacto financeiro. A Próxima Melhor Ação indica onde agir primeiro para
  resolver a maior parte do problema com foco.
- **Produto:** Manager
- **Visual:** print `forca-vendas.avif`

### Etapa 4 — Agir
- **Mensagem:** A decisão chega aonde o trabalho acontece.
- **Texto:** A ação vai para o canal certo: agenda do representante, farmácia,
  CRM que sua equipe já usa ou integrações via API. Sem planilha no meio do
  caminho.
- **Produto:** Dinn Conecta
- **Visual:** Conecta ao centro, distribuindo para os canais Campo · Farmácia ·
  CRM · API (feito em código).

### Etapa 5 — Aprender com o resultado
- **Mensagem:** Cada execução deixa a próxima decisão melhor.
- **Texto:** A Dinn mede o que aconteceu depois da ação (a ruptura foi
  corrigida? a distribuição voltou?) e usa esse resultado para refinar os
  próximos sinais e prioridades.
- **Visual:** ciclo com seta voltando para "Observar" (feito em código).

---

## 5. O ciclo na prática + Dinn Conecta

- **Selo:** Na prática
- **Título:** Um sinal, do começo ao *fim*
- **Linha do tempo em 6 passos:**
  1. **Um SKU começa a perder disponibilidade** em um cluster de farmácias
     relevante.
  2. **A Dinn detecta o sinal** e calcula prioridade e impacto.
  3. **Identifica redes, PDVs e território** afetados.
  4. **Sugere a Próxima Melhor Ação**, por exemplo priorizar visita às 12
     farmácias de maior impacto.
  5. **O Dinn Conecta leva a ação** ao canal certo: representante, farmácia ou
     CRM.
  6. **A Dinn mede o resultado** e retroalimenta a inteligência.
- **Fecho:** O Dinn Conecta fecha o ciclo que normalmente termina no dashboard.

---

## 6. Soluções

- **Selo:** Soluções
- **Título:** Problemas do canal farma, *já entendidos*
- **Intro:** Você não precisa descobrir do zero quais sinais importam. A Dinn
  chega com os problemas do mercado farmacêutico mapeados e as ações
  estruturadas.

### Aba "Por resultado"

| Solução | Texto |
|---|---|
| **Aumentar disponibilidade** | Encontre onde suas marcas estão perdendo disponibilidade e corrija antes de perder a venda. |
| **Expandir distribuição** | Veja onde a distribuição caiu ou nunca chegou, e as farmácias com mais potencial para ganhar. |
| **Otimizar a força de campo** | Visitas priorizadas por impacto: até 40% mais tempo produtivo para o representante. |
| **Crescer o sell-out** | Ligue sell-in, sell-out e ruptura para agir onde a venda está escapando. |
| **Inteligência competitiva** | Preço, presença e ruptura da concorrência loja a loja, no mesmo painel. |
| **Engajamento com farmácias** | Fale com a farmácia certa no momento em que a oportunidade aparece. |

### Aba "Por time"

| Time | Texto |
|---|---|
| **Vendas / Campo** | Rotas e Próxima Melhor Ação direto na agenda do representante. |
| **Trade Marketing** | Rumo à Ruptura Zero, com alertas de reposição por PDV. |
| **Excelência Comercial** | Evidências de giro, perda e ruptura para negociar com redes e distribuidores. |
| **Inteligência de Mercado** | Forecast com IA e leitura da concorrência por farmácia. |
| **Marketing** | Meça o efeito de campanhas no PDV, não só na mídia. |

---

## 7. De → Para

- **Selo:** O que muda
- **Título:** A Dinn não é mais um *fornecedor de dados*.
- **Texto:** É a camada que liga o que acontece no canal farmacêutico às
  decisões e à execução comercial.

| Antes | Com a Dinn |
|---|---|
| Dados atrasados, mês fechado | Sinais D-1 por farmácia, SKU e região |
| Insight que morre no dashboard | Sinal → decisão → ação |
| Visitas sem prioridade | Próxima Melhor Ação por impacto e potencial |
| Ferramentas soltas, retrabalho entre áreas | Um sistema só, integrado ao CRM, BI e ERP |

---

## 8. Depoimentos

- **Título:** O que nossos clientes dizem (sem mudança)
- **Nova ordem:** Roberto (Eurofarma) → Camila (Eurofarma) → Wilson → Natali.
  Os de execução no campo vêm primeiro.

---

## 9. Perguntas frequentes

Mantém as 11 perguntas, com estes ajustes:

- **P3** ("apenas mais um dashboard?"): reforçar o fluxo sinal → decisão → ação.
- **P5** (IQVIA diário): **trocar** "decisão autônoma (lógica agentic)" por
  "transforma o dado em prioridade e ação recomendada". Motivo: guardrail do
  dossiê §12, não prometer autonomia total.
- **P8:** trocar "lógica autônoma" por "prioriza automaticamente".
- **Nova pergunta:** "O que é o Dinn Conecta?"
  > **[CONFIRMAR]** O Dinn Conecta é a camada de execução da Dinn: leva a ação
  > decidida (visita, contato, tarefa) ao canal em que ela acontece, seja o
  > representante, a farmácia ou o CRM da sua equipe, e registra o resultado
  > para medir o impacto.
- **Correção técnica:** os `**negritos**` passam a aparecer como negrito, e não
  mais como asteriscos.

---

## 10. Chamada final

- **Título:** Pronto para transformar sinais em *ação*?
- **Texto:** Veja em uma demonstração como a Dinn conecta o que acontece nas
  farmácias às decisões do seu time comercial.
- **Botão:** [Solicitar demo]

---

## 11. Rodapé e dados para o Google

- **Descrição do rodapé:** Inteligência comercial para a indústria
  farmacêutica: do sinal de mercado à ação. Uma iniciativa da DiWE Ventures
  Studio.
- **Título da aba / Google:** Dinn — Sinais do mercado farmacêutico em ação
  comercial
- **Descrição para o Google:** A Dinn transforma sinais do canal farmacêutico
  (ruptura, distribuição, preço e concorrência) em prioridades e ações para o
  seu time comercial.
- **Copyright:** © 2026

---

## 12. Guia de vocabulário

Regra geral: **toda palavra técnica precisa vir colada a um problema comercial
concreto.** Estrutura de frase: *capacidade → caso de uso → resultado*.

| Termo | Usar quando… | Evitar | Exemplo bom |
|---|---|---|---|
| **Sinal (comercial)** | Uma mudança relevante no canal, com nome: ruptura, perda de distribuição, preço | "sinais" genéricos, sem dizer qual | "Sinal de risco de ruptura em 38 PDVs" |
| **IA** | Explicar *como* a Dinn separa ruído de mudança relevante | IA como adjetivo de tudo ("IA-Farma", "plataforma com IA") | "A IA prioriza as farmácias de maior impacto" |
| **Agente** | Houver uma tarefa concreta executada, com humano no controle | "agentes autônomos", "IA que decide sozinha" | "Um agente prepara a lista de visitas; o gestor aprova" |
| **Workflow / fluxo** | Descrever a sequência sinal → decisão → ação | "build anything", "crie seus próprios fluxos" como promessa principal | "Quando a ruptura é confirmada, a tarefa vai para a agenda do representante" |
| **Próxima Melhor Ação** | Recomendação priorizada de o que fazer, onde | usar a sigla NBA sozinha na home | "A Próxima Melhor Ação indica as 12 farmácias para visitar primeiro" |
| **Execução** | A ação chegou ao canal (campo, farmácia, CRM) | "execução" como sinônimo vago de "resultado" | "O Dinn Conecta leva a ação ao representante" |
| **Plataforma** | Referência ao conjunto | "plataforma completa", "all-in-one" | "Inteligência comercial para a indústria farmacêutica" |

**Nunca dizer** (guardrails do dossiê §12):
- que a Dinn substitui ERP, CRM, BI, data lake ou time de dados;
- que a Dinn decide ou age sozinha onde ainda há revisão humana;
- "varejo" ou "sua farmácia" como público: o cliente é a **indústria**;
- termos horizontais tipo "para qualquer empresa", "construa qualquer coisa".
