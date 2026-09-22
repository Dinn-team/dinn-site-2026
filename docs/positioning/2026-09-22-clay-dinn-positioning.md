# Dinn — posicionamento, arquitetura do site e aprendizados da Clay

**Documento de trabalho — setembro/2026**

> ## **Turn pharmacy-market signals into commercial action**
>
> Hipótese central: a Dinn pode se apresentar menos como um conjunto de produtos e mais como a camada especializada que observa o canal farma, entende o que mudou, decide o que importa e transforma esses sinais em ação comercial.

---

## 1. A tese em uma frase

A melhor síntese encontrada para o caminho de posicionamento é:

## **Turn pharmacy-market signals into commercial action**

Ela funciona porque não prende a Dinn a uma feature, a um dashboard ou ao produto de estoque. O centro passa a ser o ciclo inteiro: detectar sinais do mercado farmacêutico e convertê-los em decisões e execução.

- **“Pharmacy-market signals”** ancora a proposta no domínio em que a Dinn tem profundidade e dados próprios.
- **“Commercial action”** desloca a conversa de observação para resultado e operação.
- A frase acomoda Stock, inteligência, agentes, Next Best Action, integrações e Dinn Conecta sem transformar cada frente em uma empresa diferente.
- Ela cria espaço para a Dinn crescer sem perder verticalidade: mais sinais, mais automação e mais canais de execução continuam cabendo na mesma tese.

---

## 2. O principal aprendizado da Clay

A [Clay](https://www.clay.com/) é um bom benchmark porque conseguiu deixar de parecer apenas uma ferramenta de enriquecimento de leads e passou a se apresentar como infraestrutura para operar uma função de negócio inteira.

Na homepage, a narrativa se organiza essencialmente nesta sequência:

| Camada | O que representa |
|---|---|
| **Data** | reunir e enriquecer dados |
| **Agents** | interpretar e pesquisar contexto |
| **Orchestration** | definir lógica e workflows |
| **Execution** | disparar ações |

A lógica é mais importante do que os nomes:

> **dados entram → inteligência interpreta → workflows decidem → alguma coisa acontece**

Esse é exatamente o tipo de narrativa que pode ajudar a Dinn a sair de uma apresentação centrada em módulos e caminhar para uma apresentação centrada em um sistema comercial vertical para pharma.

---

## 3. O que a Clay faz bem no site

### 3.1 Explica primeiro a categoria, depois as features

A Clay não começa por uma lista de features. Ela começa pelo que o sistema permite construir e só depois apresenta as capacidades técnicas como partes dessa infraestrutura.

Para a Dinn, isso sugere evitar uma home baseada principalmente em:

**Stock / Pulse / Locator / Manager / Conecta**

Esses nomes podem continuar existindo, mas precisam aparecer subordinados a uma tese maior.

### 3.2 Organiza o produto pelo fluxo de valor

No lugar de um catálogo de módulos, a Clay apresenta uma cadeia lógica. Isso permite que um produto novo entre na arquitetura sem exigir reposicionar a empresa inteira.

### 3.3 Separa “o que a plataforma é” de “o que eu consigo fazer com ela”

A Clay apresenta a infraestrutura e, separadamente, casos de uso. Isso evita obrigar o comprador a entender a tecnologia antes de entender o benefício.

Para a Dinn, o equivalente é:

- **Product** explica a infraestrutura.
- **Solutions** explica os problemas resolvidos.

### 3.4 Faz a execução fechar o loop

Um dos movimentos mais interessantes da Clay é aproximar sourcing, dados, inteligência, execução e analytics.

O aprendizado para a Dinn não é copiar outbound. É perceber que o valor cresce quando **insight e execução deixam de viver separados**.

Esse ponto é especialmente importante para o **Dinn Conecta**.

---

## 4. A equivalência Clay → Dinn

| Clay | Equivalente possível na Dinn | Leitura estratégica |
|---|---|---|
| **Data infrastructure** | Dados e inteligência do canal | A Dinn observa disponibilidade, estoque, preço, giro, distribuição, mercado e contexto por SKU/PDV/rede. |
| **Signals** | Commercial Signals | Mudanças relevantes viram sinais acionáveis: ruptura, distribuição perdida, oportunidade, preço, concorrência, reposição e anomalias. |
| **Agents** | Agentes especializados | Agentes comerciais, de trade, conta e campo interpretam o contexto com linguagem e regras pharma. |
| **Orchestration** | Audiences, regras, workflows e NBA | A Dinn transforma sinais em prioridade, segmentação, decisão e sequência de ações. |
| **Execution** | Dinn Conecta + campo + CRM + integrações | A ação chega ao canal em que o cliente já trabalha ou pode ser disparada pela própria Dinn quando fizer sentido. |

---

## 5. O que NÃO copiar da Clay

A Dinn não deve virar uma “Clay para pharma” horizontal.

A vantagem da Dinn é justamente **não exigir que o cliente descubra do zero quais sinais importam**.

### Guardrails

- A Clay é horizontal; a Dinn deve ser profundamente vertical.
- Evitar transformar a comunicação em uma coleção de termos de IA, agentes e workflows sem vínculo com decisão real.
- Não vender “build anything”.
- Vender problemas pharma já entendidos, com sinais e ações pré-estruturados.
- A configuração deve ser opcional; o valor principal vem de a Dinn já conhecer a semântica de produto, EAN, PDV, rede, região, cobertura, estoque, preço e execução.

Em vez de abrir com **“Build your own signal”**, a Dinn pode oferecer sinais semanticamente úteis desde o início:

- risco de ruptura;
- ruptura confirmada;
- perda ou ganho de distribuição;
- oportunidade de expansão;
- movimento relevante de preço;
- entrada ou avanço de concorrência;
- reposição relevante;
- PDVs prioritários;
- deterioração de disponibilidade;
- anomalia de giro.

---

## 6. O papel do Dinn Conecta

O **Dinn Conecta** ganha força quando deixa de ser apresentado como “mais um produto” e passa a ocupar a **camada de execução** da arquitetura.

Uma leitura simples:

### **Observe → Understand → Decide → Act**

**Dinn Data → Dinn Intelligence → Dinn Agents / NBA → Dinn Conecta**

Isso fecha um loop que normalmente termina no dashboard:

### **Market event → signal → interpretation → decision → action → feedback**

### Exemplo

1. Um SKU começa a perder disponibilidade em um cluster relevante.
2. A Dinn detecta o sinal e calcula prioridade/impacto.
3. Identifica redes, PDVs, território e contexto.
4. Sugere ou executa o Next Best Action.
5. O Dinn Conecta leva a ação ao canal correto.
6. A Dinn mede o que aconteceu depois e retroalimenta a inteligência.

Aqui a Dinn deixa de vender apenas **“dados de estoque”** e passa a se aproximar de um **sistema operacional comercial baseado em sinais reais do mercado**.

---

## 7. Arquitetura recomendada para o menu do site

Menu principal:

### **Product | Solutions | Customers | Resources | Pricing | Company**

### 7.1 Product

#### Data & Intelligence
- Market Intelligence
- Stock & Availability
- Pricing
- Competitive Intelligence

#### Signals & AI
- Commercial Signals
- Agents
- Next Best Action

#### Orchestration
- Audiences
- Segmentation
- Workflows
- Integrations

#### Execution
- Dinn Conecta
- Field Execution
- CRM activation

### 7.2 Solutions

#### By outcome
- Increase Availability
- Expand Distribution
- Optimize Field Force
- Grow Sell-out
- Competitive Intelligence
- Pharmacy Engagement

#### By team
- Sales
- Trade Marketing
- Commercial Excellence
- Market Intelligence
- Marketing

---

## 8. Arquitetura de narrativa para a homepage

A home deve explicar um **sistema**, não apresentar um catálogo.

### Hero

# **Turn pharmacy-market signals into commercial action**

A Dinn conecta sinais reais do canal farmacêutico à inteligência, decisão e execução comercial.

### 1. Observe the market

Mostrar disponibilidade, ruptura, preço, giro, distribuição e contexto competitivo.

**Mensagem:** a Dinn enxerga o que está acontecendo no canal.

### 2. Understand what matters

Signals + AI + contexto vertical.

**Mensagem:** a Dinn separa ruído de mudança relevante.

### 3. Decide what to do

Prioridade, segmentação, Next Best Action e workflows.

**Mensagem:** o dado já chega com uma implicação operacional.

### 4. Act

Dinn Conecta, força de campo, CRM, mensagens, API e integrações.

**Mensagem:** a decisão chega ao lugar onde o trabalho acontece.

### 5. Learn from the outcome

Feedback, medição e evolução.

**Mensagem:** a execução retroalimenta a inteligência.

---

## 9. Como falar dos benefícios

O site deve alternar sempre:

### **capacidade → caso de uso → resultado**

Exemplos:

- **Find where your brands are losing availability.**
- **Prioritize the pharmacies with the highest commercial opportunity.**
- **Turn market signals into actions for your sales force.**
- **Automatically engage the right pharmacy when an opportunity appears.**
- **Know what changed in the market — and what to do next.**

Essas frases são mais fortes do que uma lista de features porque começam pela pergunta real do cliente e só depois levam ao componente do produto.

---

## 10. Uma possível arquitetura de marca/produto

| Camada | Leitura |
|---|---|
| **Categoria da empresa** | Pharma Commercial Intelligence Platform |
| **Tese futura mais ambiciosa** | Commercial Operating System for Pharma |
| **Mensagem central** | Turn pharmacy-market signals into commercial action |
| **Produtos** | Stock, Pulse, Locator, Manager, Conecta e futuros módulos |
| **Arquitetura** | Data → Signals/AI → Orchestration → Execution |

**Commercial Operating System for Pharma** é uma ambição de categoria e não precisa ser adotada agora.

**Pharma Commercial Intelligence Platform** é mais autoexplicativa para o mercado atual.

A frase central pode existir independentemente dessa decisão.

---

## 11. O que muda na percepção da Dinn

| De | Para |
|---|---|
| Plataforma de dados/estoque | Camada de inteligência e execução comercial |
| Insight → dashboard | Signal → decision → action |
| Produtos apresentados isoladamente | Componentes de uma mesma infraestrutura |
| Feature-first | Problem/outcome-first |

Isso ajuda a resolver um problema de portfólio:

**Stock, Web/Manager, NBA, field, MCP, integrações e Conecta passam a ser manifestações de uma mesma infraestrutura, e não peças soltas.**

---

## 12. Guardrails para não exagerar a promessa

- Não dizer que a Dinn substitui ERP, CRM, data lake, BI, Copilot ou time de dados.
- Não transformar a Dinn em infraestrutura horizontal genérica.
- Não prometer autonomia total de agentes onde ainda existe revisão humana ou integração dependente do cliente.
- Não vender cada novo módulo como uma nova categoria.
- Manter o vocabulário sempre conectado a problema comercial concreto.

Uma formulação coerente com o Dinn Conecta:

> A Dinn entra como camada especializada entre fontes autorizadas, contexto pharma e os ambientes em que o cliente já opera.

---

## 13. Direção recomendada para o site

A principal decisão de design/narrativa deveria ser organizar a experiência ao redor do **fluxo de transformação do sinal em ação**.

O usuário precisa entender em poucos segundos:

1. o que a Dinn observa;
2. como ela entende o que importa;
3. como transforma isso em prioridade e decisão;
4. como a decisão vira execução;
5. como os produtos existentes se encaixam nesse sistema.

Se essa arquitetura estiver correta, menu, homepage, cases, produto e apresentações passam a contar **a mesma história**.

---

## 14. Referências Clay

- [Clay — Homepage](https://www.clay.com/)
- [Clay — Sequencer 2.0](https://www.clay.com/changelog/clay-sequencer-2-0)
- [Clay — Sales GTM Engineering](https://www.clay.com/blog/sales-gtm-engineering)

---

## 15. Síntese final

O aprendizado da Clay não é copiar o produto nem a estética.

É organizar a percepção da empresa como um sistema coerente.

Para a Dinn, a forma mais forte dessa ideia hoje é:

# **Turn pharmacy-market signals into commercial action**

A partir daí:

**a Dinn observa o mercado → entende o que mudou → decide o que importa → ajuda o cliente a agir.**

O **Dinn Conecta** é uma peça natural desse fechamento de loop.
