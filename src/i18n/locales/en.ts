import { home2En } from './en.home2';
import { pagesEn } from './en.pages';

export const enUS = {
  ...pagesEn,
  ...home2En,
  nav: {
    home: "Home",
    platform: "Platform",
    solutions: "Solutions",
    solutionsAll: "See all solutions",
    cases: "Use cases",
    changelog: "What's new",
    resourcesAll: "See all resources",
    trust: "Trust",
    resources: "Resources",
    ask: "Dinn Insights",
    teams: "Use cases",
    inside: "How it works",
    delivery: "Where it delivers",
    customers: "Customers",
    blog: "Blog",
    cta: "Request a demo",
    openMenu: "Open menu",
    languageLabel: "Language",
    language: "English",
    langShort: "EN"
  },
  hero: {
    pill: "Commercial intelligence for the pharmaceutical channel",
    title: "Turn pharma channel signals into *commercial action*.",
    description: "Dinn organizes availability, sell-through, price and coverage signals and shows your team where to act first, with source, refresh and limits.",
    cta: "See the platform",
    secondary: "See Dinn for your area"
  },
  insights: {
    eyebrow: "Dinn Insights",
    title: "What do you want to know about *stock-outs and sell-out*?",
    intro: "Chat with Dinn's AI. Ask in plain English. Get the number, scope, date and method."
  },
  ask: {
    placeholder: "Ask about stock, stock-outs, sell-through, price…",
    followPlaceholder: "Ask a follow-up question…",
    send: "Send",
    reset: "New conversation",
    starters: [
      { team: "Customer service", chip: "Where to find the product", q: "Where can consumers find my product near Campinas?" },
      { team: "Field", chip: "Which stores to check", q: "Which stores in my São Paulo territory need a visit first?" },
      { team: "Distribution", chip: "Is the gap at the DC?", q: "Is the gap at the distributor or in the pharmacies in Goiânia?" },
      { team: "Launches", chip: "Has my launch arrived?", q: "Has my launch reached pharmacies in Recife?" },
      { team: "Inventory", chip: "Stalled stock", q: "Where is stock stalled near stores that are out?" },
      { team: "Competition", chip: "Who gained share", q: "Who gained share in Minas Gerais?" }
    ],
    contextLabel: "Scope used",
    defaultPlace: "São Paulo",
    defaultProduct: "your product",
    thinking: "Thinking…",
    methodTitle: "How Dinn got this",
    linksTitle: "Read more",
    followTitle: "Ask next",
    demoCta: "Try your products",
    actionWhy: "Why:",
    actionHow: "How:",
    scenarios: {
      sac: {
        keywords: ["where can", "where to find", "find", "consumer", "patient", "customer service", "call center", "locat", "near", "closest", "nearest", "address", "buy", "onde encontr", "onde tem", "onde acha", "onde compr", "consumidor", "paciente", "sac", "atendimento", "localiz", "perto", "próxima", "proxima", "encontrar", "endereço"],
        steps: ["Locating the address…", "Searching pharmacies for the product…", "Calculating days of coverage…"],
        answer: "Near {lugar}, **3 of the 5 closest pharmacies** probably have {produto} in stock. The nearest pharmacy with confirmed stock is 0.8 km away.\n\nThe search also shows a pattern. Demand keeps coming from a neighborhood where two stores have been out of stock for a week. Use this for city replenishment and for medical reps in the area.",
        widget: {
          type: "table",
          title: "Closest pharmacies · {lugar}",
          columns: [
            { label: "Pharmacy" },
            { label: "Distance", kind: "num" },
            { label: "Availability", kind: "avail" },
            { label: "Stock", kind: "num" },
            { label: "Sell-through", kind: "num" },
            { label: "Price", kind: "num" }
          ],
          rows: [
            ["Pharmacy 1 · Chain A", "0.8 km", "High", "12–15 units", "1.4 units/day", "R$ 89.90"],
            ["Pharmacy 2 · Chain B", "1.2 km", "Medium", "4–6 units", "0.9 units/day", "R$ 92.50"],
            ["Pharmacy 3 · Chain A", "1.9 km", "High", "9–11 units", "1.1 units/day", "R$ 89.90"],
            ["Pharmacy 4 · Chain C", "2.3 km", "Out of stock", "0 units", "—", "—"],
            ["Pharmacy 5 · Chain C", "2.6 km", "Out of stock", "0 units", "—", "—"]
          ]
        },
        method: [
          "Search from the given address. Nearest stores first.",
          "Stock is observed at the source (D-1) or estimated from comparable stores. Each value has a confidence level.",
          "Days of coverage = stock ÷ the store's average daily sell-through.",
          "Ranking uses availability and distance, not lowest price."
        ],
        links: [
          { label: "Customer service case", href: "#time-sac" },
          { label: "How Dinn knows stock", href: "#por-dentro" }
        ],
        followups: ["What does this change for medical reps?", "Which stores in this region need restocking?"]
      },
      campo: {
        keywords: ["visit", "field", "route", "territory", "portfolio", "sales rep", "trade", "kam", "check first", "prioriti", "priority", "schedule", "visita", "visitar", "campo", "rota", "carteira", "promotor", "consultor", "gdn", "territ", "verificar", "verifico", "priorizar", "prioridade", "agenda"],
        steps: ["Reading your territory…", "Analyzing availability…", "Building the ranking…", "Listing the stores…"],
        answer: "In your {lugar} territory, **6 stores give 70% of the stock-out signal** for {produto} last week. The list shows what to check at each store and what to expect.\n\nDinn prepares the list. Your team sets the schedule.",
        widget: {
          type: "table",
          title: "Check queue · this week",
          columns: [
            { label: "Store" },
            { label: "Level", kind: "level" },
            { label: "Stock-out", kind: "num" },
            { label: "What to check" }
          ],
          rows: [
            ["Store 01 · Chain A", "Critical", "86.7%", "Any pending order or delivery?"],
            ["Store 02 · Chain A", "High", "60%", "In the store but off the shelf?"],
            ["Store 03 · Chain B", "High", "53%", "Has the store reordered since the last stock-out?"],
            ["Store 04 · Chain C", "Moderate", "33%", "Is the gap back?"]
          ]
        },
        method: [
          "Store stock-out = days without stock ÷ days observed in the last 30 days.",
          "Level: Critical ≥ 75% · High ≥ 50% · Moderate ≥ 25% · Low < 25%.",
          "Ranking weights the level by the store's sell-through when it has stock.",
          "Stores that never sold the product are excluded. They would raise the stock-out rate."
        ],
        links: [
          { label: "Field case", href: "#time-campo" },
          { label: "Where each signal comes from", href: "#por-dentro" }
        ],
        followups: ["Do stock-outs rise or fall over 30 days?", "Is the problem at the distributor or in the stores?"]
      },
      medico: {
        keywords: ["doctor", "physician", "medical rep", "prescri", "office", "clinic", "brick", "detailing", "médic", "medic", "propagand", "receita", "consultório", "consultorio", "representante", "clínica", "clinica"],
        steps: ["Locating the doctor's office…", "Searching pharmacies for the product…", "Comparing stock-outs across areas…"],
        answer: "Around the office in {lugar}, **7 of 12 pharmacies** have {produto} today. The 5 without stock are in the same chain, on the same side of the avenue.\n\nThe patient can probably fill the prescription. Alert trade about that chain before the patient returns without the product.",
        widget: {
          type: "kpis",
          title: "Around the office · 1 km radius",
          items: [
            { label: "Pharmacies in radius", value: "12" },
            { label: "In stock", value: "7", tone: "good" },
            { label: "Out of stock", value: "5", tone: "bad" },
            { label: "Gap concentrated in", value: "Chain C" }
          ]
        },
        method: [
          "Radius around the office address or the chosen brick.",
          "D-1 stock per pharmacy, observed or estimated.",
          "Concentration = out-of-stock stores in the same chain ÷ all out-of-stock stores.",
          "Dinn does not write to the CRM. Use the reading to prepare the visit."
        ],
        links: [
          { label: "The medical rep case", href: "#time-medico" }
        ],
        followups: ["Where can consumers find the product near Campinas?", "Which stores do we check first?"]
      },
      distribuicao: {
        keywords: ["dc", "dcs", "distribution center", "distributor", "distribution", "wholesal", "supply", "replenish", "restock", "logistic", "delay", "gap", "order", "cd", "cds", "distribuidor", "distribuição", "distribuicao", "abastec", "reposição", "reposicao", "repor", "logística", "logistica", "atraso", "furo", "pedido"],
        steps: ["Reading DC stock…", "Calculating days of coverage…", "Cross-checking stock-outs at the region's pharmacies…", "Comparing with local sell-through…"],
        answer: "In {lugar}, the gap is probably not at the DC. **The distributor has about 24 days of stock**, but 38% of the pharmacies it supplies are out of {produto}. The region keeps selling where stock exists.\n\nThis points to a **distribution or replenishment breakdown**, not a shortage at the source. Confirm pending orders at the affected chains first.",
        widget: {
          type: "table",
          title: "DC × pharmacies by region",
          columns: [
            { label: "Region" },
            { label: "DC stock", kind: "num" },
            { label: "Pharmacy stock-out", kind: "num" },
            { label: "Demand" },
            { label: "Reading", kind: "verdict" }
          ],
          rows: [
            ["{lugar}", "High · 24 days", "38%", "High", "Distribution breakdown"],
            ["Region B", "Low · 3 days", "41%", "High", "Supply constraint"],
            ["Region C", "Falling · 9 days", "12%", "High", "Stock-out risk"],
            ["Region D", "High · 60 days", "4%", "Low", "Possible excess"]
          ]
        },
        method: [
          "DC coverage = DC stock ÷ estimated daily sales in the region.",
          "Pharmacy stock-out = stores without stock ÷ stores that sell the product.",
          "Demand = sell-through at stores with stock over the same period.",
          "DC stock does not prove pharmacy stock. The reading cross-checks both."
        ],
        links: [
          { label: "Distribution case", href: "#time-distribuicao" }
        ],
        followups: ["Where is stock stalled near stores that are out?", "Are stock-outs getting worse over the last 30 days?"]
      },
      lancamento: {
        keywords: ["launch", "new product", "reached", "arrived", "arrival", "rollout", "roll-out", "presence", "lançamento", "lancamento", "lançar", "lancar", "lançou", "novo produto", "produto novo", "chegou", "chegada", "presença", "presenca"],
        steps: ["Locating the product…", "Reading weekly history…", "Comparing presence across channels…"],
        answer: "Six weeks after launch, {produto} is in **54% of monitored pharmacies** in {lugar}. Presence grew at large chains but stays below 20% at independents.\n\nWhere it has not arrived, check if the DC has received it. This separates a sell-in problem from a replenishment problem.",
        widget: {
          type: "trend",
          title: "Launch presence · % of pharmacies with the product",
          unit: "%",
          labels: ["W1", "W2", "W3", "W4", "W5", "W6"],
          series: [
            { name: "Large chains", points: [5, 14, 27, 41, 55, 68] },
            { name: "Total", points: [3, 10, 19, 30, 42, 54], dashed: true },
            { name: "Independents", points: [0, 2, 4, 8, 12, 17] }
          ]
        },
        method: [
          "Presence = pharmacies with the product in stock ÷ monitored pharmacies in scope.",
          "Week 1 starts on the launch date your team sets.",
          "The channel split follows what each source can identify."
        ],
        links: [
          { label: "Launch case", href: "#time-lancamento" }
        ],
        followups: ["Is the gap at the distributor or in the pharmacies?", "Who gained share in the region?"]
      },
      parado: {
        keywords: ["stalled", "stuck", "idle", "no movement", "not moving", "slow-moving", "slow moving", "dead stock", "excess", "overstock", "surplus", "realloc", "parado", "parada", "sem movimento", "sem giro", "congelado", "encalhado", "excesso", "sobra", "negativ", "remanej"],
        steps: ["Analyzing availability…", "Counting days without movement…", "Looking for nearby stores that are out…"],
        answer: "In {lugar}, **14 stores have had {produto} idle for over 30 days**. 5 of them are less than 3 km from stores that are out of the same product.\n\nThis pair matters: stalled stock at one store, a stock-out at the other. Start the chain talk with reallocation, before a new order.",
        widget: {
          type: "bars",
          title: "Stores by time without movement",
          unit: "stores",
          rows: [
            { label: "Up to 7 days", value: 38, tone: "leve" },
            { label: "8 to 30 days", value: 21, tone: "moderado" },
            { label: "31 to 60 days", value: 9, tone: "alto" },
            { label: "Over 60 days", value: 5, tone: "critico" }
          ]
        },
        method: [
          "Days stalled = consecutive days with the same balance and no stock decrease.",
          "Observed movement is not a confirmed sale.",
          "Stalled × stock-out pairs: same presentation, up to 3 km apart.",
          "The data does not prove a loss. It shows where to look first."
        ],
        links: [
          { label: "Stalled-stock case", href: "#time-parado" }
        ],
        followups: ["Is the gap at the distributor or in the pharmacies?", "Which stores do we check first?"]
      },
      concorrencia: {
        keywords: ["compet", "share", "rival", "brand", "gained", "losing", "lost ", "price", "pricing", "concorr", "participação", "participacao", "competi", "marca", "espaço", "espaco", "ganhou", "perdendo", "perde ", "preço", "preco"],
        steps: ["Reading the market by state…", "Comparing with the previous window…", "Building the ranking…"],
        answer: "In {lugar}, your company **grew 6% in the same stores**. The comparable market grew 11%. Share fell because other products grew faster, not because your sales dropped.\n\n23 stores show stock only for the competitor. Start the chain talks there.",
        widget: {
          type: "trend",
          title: "Estimated sales · your company × competitors",
          unit: "",
          labels: ["W1", "W2", "W3", "W4", "W5", "W6"],
          series: [
            { name: "Your company", points: [100, 101, 103, 104, 105, 106] },
            { name: "Competitors", points: [100, 103, 105, 107, 109, 111], tone: "sky" }
          ]
        },
        method: [
          "Sales are estimated from stock movement. They are not audited sell-out.",
          "Only comparable stores in both windows are included.",
          "Share = your volume ÷ category volume in the same panel.",
          "Competitor data is aggregated."
        ],
        links: [
          { label: "Competition case", href: "#time-concorrencia" }
        ],
        followups: ["Where is the category growing fastest?", "Has my launch reached pharmacies yet?"]
      },
      demanda: {
        keywords: ["opportunit", "grow", "growth", "expan", "market", "demand", "strateg", "invest", "potential", "plan", "category", "oportunidad", "crescer", "cresce", "expans", "mercado", "demanda", "estratégia", "estrategia", "investir", "começar", "potencial", "planej"],
        steps: ["Reading the market by state…", "Opening the state detail…", "Reading the recommendations…"],
        answer: "The category grows fastest in {lugar}: **+9% estimated volume** in the same stores vs. the previous window. Two large chains sell the category well but carry little {produto}.\n\nThree fronts to start with are below. They are hypotheses for your team to validate, not orders.",
        widget: {
          type: "actions",
          title: "Actions for this scope",
          items: [
            { priority: "High", title: "Open range talks with Chain A", why: "The chain has 18% of the category in the region. It carries the product in 6% of its stores.", how: "Bring the list of stores that sell the category best to the meeting." },
            { priority: "Medium", title: "Speed up replenishment in cities with persistent stock-outs", why: "Three cities have 40% of the stores out of stock for over 15 days.", how: "Check pending orders with the region's distributor." },
            { priority: "Low", title: "Track the new competitor", why: "It appeared in 31 stores in the last 4 weeks.", how: "Review the same scope in 30 days." }
          ]
        },
        method: [
          "Growth = estimated category volume in the same stores, recent vs. previous window.",
          "Expansion: large chains in the category where your company has low presence.",
          "Each action has its number and first step."
        ],
        links: [
          { label: "Demand case", href: "#time-demanda" }
        ],
        followups: ["Who gained share in the region?", "Where is stock stalled?"]
      },
      tendencia: {
        keywords: ["stock-out", "stockout", "out of stock", "out-of-stock", "missing", "shortage", "worse", "better", "worsening", "improving", "trend", "evolution", "last 30", "past 30", "ruptura", "falta", "faltando", "sem estoque", "piorando", "melhorando", "piorou", "evolução", "evolucao", "tendência", "tendencia", "últimos", "ultimos"],
        steps: ["Locating the product…", "Calculating the stock-out trend…", "Comparing stock-outs across chains…"],
        answer: "Stock-outs of {produto} in {lugar} **rose from 24% to 32% in 30 days**. One chain drives the rise. Without it, the scope is stable at about 25%.\n\nThis signal starts an investigation. It is not a conclusion. Next, see which stores in that chain explain the rise.",
        widget: {
          type: "trend",
          title: "Stock-out trend · last 30 days",
          unit: "%",
          labels: ["D-30", "D-25", "D-20", "D-15", "D-10", "D-5", "D-1"],
          series: [
            { name: "Chain A", points: [30, 34, 38, 45, 52, 57, 60], tone: "alert" },
            { name: "Total scope", points: [24, 25, 24, 27, 29, 31, 32], dashed: true },
            { name: "Other chains", points: [22, 23, 22, 24, 24, 25, 25] }
          ]
        },
        method: [
          "Stock-out = pharmacies without stock ÷ monitored pharmacies that sell the product.",
          "Daily base (D-1). Each point is marked observed or estimated.",
          "Dinn does not assume the cause of a stock-out. It needs investigation."
        ],
        links: [
          { label: "How the field team uses this signal", href: "#time-campo" },
          { label: "Inside Dinn", href: "#por-dentro" }
        ],
        followups: ["Which stores do we check first?", "Is the gap at the distributor or in the pharmacies?"]
      },
      ia: {
        keywords: ["chatgpt", "claude", "copilot", "gemini", "mcp", "api", "power bi", " bi", "integrat", "connect", "system", "internal data", "crm", "erp", "data lake", "llm", "integra", "conecta", "sistema", "dados internos"],
        steps: ["Understanding the question…"],
        answer: "Yes. Dinn works where your team works: in the platform, in a file, in your BI via API, or in ChatGPT, Claude and Copilot via MCP, with **read-only** access.\n\nWith **Dinn Conecta**, market, internal and pharmacy data arrive standardized in your BI and your agents. Your internal data and governance stay with you.",
        method: [],
        links: [
          { label: "Where Dinn delivers", href: "#entrega" },
          { label: "FAQ", href: "#faq" }
        ],
        followups: ["Which stores do we check first?", "How do we start a trial?"]
      },
      sobre: {
        keywords: ["what is", "who is", "who are", "how does it work", "how it works", "what do you", "what does", "o que é", "o que e", "quem é", "quem e", "como funciona", "o que voc", "o que faz", "dinn"],
        steps: ["Understanding the question…"],
        answer: "Dinn is commercial intelligence for the pharmaceutical channel. It organizes pharmacy stock, sell-through and price signals. When the source allows, it links each store to its supplying DC. It then names the signals: persistent stock-out, stalled stock, falling sell-through.\n\nEach area uses the same reading in its own way. Pick your area below, or ask about your own products.",
        method: [],
        links: [
          { label: "One use for each team", href: "#times" },
          { label: "Inside Dinn", href: "#por-dentro" }
        ],
        followups: ["Where can consumers find my product?", "Is the gap at the distributor or in the pharmacies?"]
      },
      demo: {
        keywords: ["how much", "pricing", "cost", "hire", "demo", "trial", "test", "get started", "start", "implement", "onboard", "timeline", "proposal", "quanto custa", "valor do dinn", "contratar", "demonstra", "testar", "teste", "começar a usar", "implanta", "prazo", "proposta"],
        steps: ["Understanding the question…"],
        answer: "We start with **a single goal**: for example fewer stock-outs of one product in one region. You get 30 days under a simple agreement, with a Dinn team member.\n\nImplementation takes up to 30 days after the agreed prerequisites are ready. It can start with external sources only.",
        method: [],
        links: [
          { label: "Request a demo", href: "demo" },
          { label: "FAQ", href: "#faq" }
        ],
        followups: ["What is Dinn?", "Does it work in ChatGPT or Copilot?"]
      },
      fallback: {
        steps: ["Understanding the question…"],
        answer: "I can answer this better with your data. Each team asks these questions most about stock, stock-outs, sell-through, price, distribution and competition. Try one:",
        method: [],
        links: [
          { label: "One use for each team", href: "#times" }
        ],
        followups: ["Where can consumers find my product?", "Which stores do we check first?", "Is the gap at the distributor or in the pharmacies?", "Who gained share in my region?"]
      }
    }
  },
  logos: {
    title: "Companies that work with Dinn"
  },
  teams: {
    eyebrow: "Use cases: pick a situation",
    title: "Concrete channel situations, *one by one*",
    askCta: "Ask Dinn this",
    deepLink: "Learn more",
    seesLabel: "Dinn cross-checks",
    doesLabel: "The team does",
    items: [
      {
        id: "sac",
        tab: "Customer service",
        kicker: "Customer service",
        title: "“Where can I find this medicine near home?”",
        story: "The agent sees the closest pharmacies with the product, their units and the estimated sell-through.",
        sees: ["Stock by store", "Distance", "Sell-through", "Price"],
        does: [
          "Points to the pharmacy most likely to have it",
          "Shows trade where demand finds no product"
        ],
        question: "Where can consumers find my product near Campinas?",
        visual: "locator"
      },
      {
        id: "campo",
        tab: "Field & trade",
        kicker: "Field force & trade",
        title: "Forty stores in the territory. *Time for eight.*",
        story: "A queue, not a dashboard: the stores with the most signal and what to check at each.",
        sees: ["Stock-out by store", "Persistence", "Sell-through", "Chain"],
        does: [
          "Starts the week with the top stores",
          "Shows the chain store-level evidence with a date",
          "Reviews the same scope after acting"
        ],
        question: "Which stores in my São Paulo territory need a visit first?",
        visual: "queue"
      },
      {
        id: "distribuicao",
        tab: "Distribution",
        kicker: "Distribution & supply",
        title: "Is the gap at the DC, *the pharmacy or the order?*",
        story: "Dinn links distributor stock to the pharmacies it supplies. It helps find where the constraint might be.",
        sees: ["DC stock", "Days of coverage", "Store stock-outs", "Regional sell-through"],
        does: [
          "Separates a shortage at the source from a replenishment failure",
          "Moves the order up when coverage drops",
          "Considers reallocation between regions"
        ],
        question: "Is the gap at the distributor or in the pharmacies in Goiânia?",
        visual: "distribution"
      },
      {
        id: "lancamento",
        tab: "Launches",
        kicker: "Launches",
        title: "Week by week, *where the product has landed.*",
        story: "The team tracks presence of the new product by chain and region. It sees where presence grew or stalled.",
        sees: ["Weekly presence", "Chain and region", "Arrival at the DC"],
        does: [
          "Sees where the launch has not arrived",
          "Separates a sell-in problem from a replenishment problem"
        ],
        question: "Has my launch reached pharmacies in Recife?",
        visual: "launch"
      },
      {
        id: "parado",
        tab: "Stalled stock",
        kicker: "Inventory & sell-through",
        title: "Stalled stock on one side. *Stock-out on the other.*",
        story: "Dinn counts days without movement. It finds idle stores near stores that are out. Reallocation starts there.",
        sees: ["Days without movement", "Frozen stock", "Nearby stock-outs"],
        does: [
          "Finds stock that isn't moving",
          "Proposes reallocating before a new order",
          "Tracks 30, 60 and 90 days"
        ],
        question: "Where is stock stalled near stores that are out?",
        visual: "stalled"
      },
      {
        id: "concorrencia",
        tab: "Competition",
        kicker: "Competition & share",
        title: "Where the competitor is *and you aren't.*",
        story: "Compares your estimated sales with the category in the same stores. Shows where only the competitor has stock.",
        sees: ["Estimated sales", "Comparable market", "Price by chain"],
        does: [
          "Separates a share loss from a sales loss",
          "Lists the stores with only the competitor"
        ],
        question: "Who gained share in Minas Gerais?",
        visual: "competition"
      },
      {
        id: "demanda",
        tab: "Demand & strategy",
        kicker: "Demand, sales & strategy",
        title: "Where to grow, *and where to start.*",
        story: "Stock, sell-through, price and history make an opportunity map by category (such as GLP-1) and state.",
        sees: ["Category by state", "Share", "Candidate chains"],
        does: [
          "Chooses where to focus",
          "Picks chains for talks",
          "Turns each signal into an action with an owner"
        ],
        question: "Where is my category growing fastest in Bahia?",
        visual: "demand"
      }
    ],
    visuals: {
      locator: {
        app: "Find product",
        you: "Consumer address",
        rows: [
          { name: "Pharmacy 1 · Chain A", dist: "0.8 km", level: "High", stock: "12–15 units" },
          { name: "Pharmacy 2 · Chain B", dist: "1.2 km", level: "Medium", stock: "4–6 units" },
          { name: "Pharmacy 3 · Chain A", dist: "1.9 km", level: "High", stock: "9–11 units" },
          { name: "Pharmacy 4 · Chain C", dist: "2.3 km", level: "Out of stock", stock: "0 units" }
        ],
        insight: "Repeated searches in the area · 2 stores out for 7 days"
      },
      queue: {
        app: "This week's queue",
        sub: "6 of 40 stores in the territory",
        rows: [
          { name: "Store 01 · Chain A", level: "Critical", value: "86.7%", check: "Pending order?" },
          { name: "Store 02 · Chain A", level: "High", value: "60%", check: "Off the shelf?" },
          { name: "Store 03 · Chain B", level: "High", value: "53%", check: "Reordered?" },
          { name: "Store 04 · Chain C", level: "Moderate", value: "33%", check: "Gap back?" },
          { name: "Store 05 · Chain B", level: "Low", value: "12%", check: "Monitor" }
        ]
      },
      prescriber: {
        app: "Around the office",
        center: "Office",
        withStock: "in stock",
        without: "out of stock",
        insight: "Gap concentrated in Chain C"
      },
      distribution: {
        app: "Distribution network",
        cd: "DC",
        cases: [
          { name: "Distribution breakdown", cd: 82, pdv: 38, demand: "High", read: "DC has stock, pharmacies do not. Check replenishment." },
          { name: "Supply constraint", cd: 8, pdv: 41, demand: "High", read: "Empty DC, region still selling. The problem is upstream." },
          { name: "Stock-out risk", cd: 30, pdv: 12, demand: "High", read: "DC coverage falls. Move the order up." },
          { name: "Possible excess", cd: 90, pdv: 4, demand: "Low", read: "High stock, low sell-through. Consider reallocating." }
        ],
        cdLabel: "DC stock",
        pdvLabel: "Pharmacies out of stock",
        demandLabel: "Demand",
        formula: "Coverage = DC stock ÷ regional daily sales"
      },
      launch: {
        app: "Launch presence",
        legend: ["Large chains", "Independents"],
        weeks: ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8"],
        regions: ["SP", "RJ", "MG", "PR", "RS", "BA", "PE", "GO", "CE", "SC", "DF", "PA"],
        insight: "Week 6 · 54% of pharmacies"
      },
      stalled: {
        app: "Stalled stock",
        bands: [
          { label: "Up to 7 days", value: 38 },
          { label: "8 to 30 days", value: 21 },
          { label: "31 to 60 days", value: 9 },
          { label: "Over 60 days", value: 5 }
        ],
        from: "Store 04 · idle for 42 days",
        to: "Store 09 · out of stock",
        distance: "2.7 km"
      },
      competition: {
        app: "Comparable market",
        you: "Your company",
        them: "Competitors",
        reading: "You grew 6% in the same stores. The market grew 11%. Share fell because others grew faster.",
        gap: "competitor-only stores"
      },
      demand: {
        app: "Opportunities",
        questions: ["Where is the category advancing?", "Where am I losing ground?", "Where can we expand?"],
        actions: [
          { priority: "High", title: "Open range talks with Chain A" },
          { priority: "Medium", title: "Speed up replenishment in 3 cities" },
          { priority: "Low", title: "Track the new competitor" }
        ]
      }
    }
  },
  story: {
    lines: [
      "The pharma channel leaves signals about your product.",
      "The signals show **if it is available, if it sells, at what price and if the DC can restock it.**",
      "The signals arrive **scattered**, from different sources, with different confidence levels.",
      "Dinn organizes them, shows their source and helps your team decide **where to act first.**"
    ]
  },
  inside: {
    eyebrow: "How Dinn works, in one example",
    stages: [
      {
        name: "Observes",
        title: "Sees a change in the channel.",
        desc: "Finds a change in availability, price, sell-through or coverage in tracked sources.",
        example: "Product X presence drops at 31 of 120 monitored Chain A stores in the South.",
        chips: ["Availability", "Price", "Sell-through", "Coverage"]
      },
      {
        name: "Validates",
        title: "Shows the source and the confidence.",
        desc: "Shows source, date, scope and confidence level. Cross-checks signals when possible.",
        example: "24 stores are observed at the source. 7 are estimated from comparable stores, with medium confidence. Absence is not yet a stock-out.",
        chips: ["Source and date", "Scope", "Observed or estimated", "Confidence"]
      },
      {
        name: "Understands",
        title: "Links the change to commercial context.",
        desc: "Links the change to product, account and territory. Does not assume the cause.",
        example: "The stores are in 3 cities of the same chain. The DC has stock. This does not prove each store is supplied.",
        chips: ["Product", "Account", "Territory", "Supplying DC"]
      },
      {
        name: "Decides",
        title: "Helps set the next step.",
        desc: "Ranks the issue and suggests the next analysis or action as a hypothesis for the team to validate.",
        example: "Priority: investigate Chain A in the South. Start with pending orders before you discuss stock-outs.",
        chips: ["Persistent stock-out", "Stock without movement", "Falling sell-through", "Chain concentration"]
      },
      {
        name: "Acts",
        title: "Sends the reading to the team that acts.",
        desc: "Delivers the reading to the responsible team or tool: platform, conversation, your BI or your AI.",
        example: "The list goes to the account KAM and the team Copilot, with source and date.",
        chips: ["Dinn Manager", "Dinn Insights", "Your AI", "BI & API"]
      },
      {
        name: "Learns",
        title: "Records what the team found.",
        desc: "The team records its findings and follows the same scope to review priorities.",
        example: "The team flags that 5 stores had a pending order. The next week, it follows the same scope to review the priority.",
        chips: ["Team feedback", "Same scope", "Prioritization"]
      }
    ],
    outputs: ["Platform", "Conversation", "Your AI", "BI & API", "Field"],
    signals: ["Persistent stock-out", "Stock without movement", "Falling sell-through", "Chain concentration"]
  },
  delivery: {
    eyebrow: "Platform and capabilities",
    title: "AI for the pharma market *where your team works*",
    more: "Learn more",
    cards: [
      {
        tag: "Dinn Manager",
        title: "The platform",
        desc: "Priorities and context for management and commercial execution: stock-outs, stalled stock, distribution and market in one scope."
      },
      {
        tag: "Dinn Insights",
        title: "A conversation",
        desc: "Explore and interpret signals. Ask in plain English. Get the number, scope, date and whether it is observed or estimated."
      },
      {
        tag: "MCP",
        title: "In your AI",
        desc: "An interface for authorized ChatGPT, Claude and Copilot to query Dinn data, read-only."
      },
      {
        tag: "Dinn Conecta",
        title: "In your BI and your agents",
        desc: "Prepares channel data flows, standardized by product, store and region, and delivers them to your BI and agents. Your data and governance stay with you."
      }
    ],
    sources: ["IQVIA / Close-Up", "ERP & CRM", "Pharmacies"],
    destinations: ["BI", "Copilot", "Agents", "API"],
    trust: [
      "Observed or estimated, always stated",
      "D-1 base plus on-demand checks at eligible stores",
      "Two-factor auth via email · SSO on request",
      "Implementation in up to 30 days after prerequisites and scope are agreed"
    ],
    note: "Coverage and refresh vary by source, product and query. Each source needs agreed licensing, authorization and scope. Features in your AI depend on your plan and setup."
  },
  faq: {
    title: "FAQ: AI, stock-outs and sell-out",
    items: [
      {
        question: "We already use audits like IQVIA and Close-Up. Why would we need Dinn?",
        answer: "Dinn **does not replace** market audits. It **complements** them. Audits give a reference for planning and consolidated readings, depending on the product. Dinn tracks availability daily (D-1), store by store. It shows **where to act now**, before a stock-out becomes a lost sale. When authorized, you can cross both readings in the same scope."
      },
      {
        question: "Does implementation require a big IT effort?",
        answer: "No. Dinn can start with external sources and does not need your internal systems. Implementation has a defined scope and takes **up to 30 days** after the agreed prerequisites are ready. Later, your internal data can enrich the reading."
      },
      {
        question: "Is Dinn just another dashboard?",
        answer: "No. The same base serves three decision levels: **strategic** (where to focus), **tactical** (what to discuss with each chain) and **operational** (which stores to check first). The output is a queue, not a chart to interpret. Each store has its signal, the question to answer and the expected follow-up."
      },
      {
        question: "Does Dinn compete with the CRM (Salesforce, Veeva, SalesFarma) we already use?",
        answer: "No. The CRM stays the system of record for visits, orders and portfolio. Dinn is an intelligence layer on the channel. When you agree the integration, it brings the **context of what happens in pharmacies** into the CRM. The team prioritizes in the tool it already uses."
      },
      {
        question: "What if audits start delivering daily data?",
        answer: "Fast data without priority is more noise. Dinn turns the channel reading into **a priority and a next step**: which product, which chains, which stores, with source and confidence. The AI prepares the analysis. **Your team decides** what to do."
      },
      {
        question: "How soon do we see value?",
        answer: "We start with **one objective**, for example fewer stock-outs of one product in one region, and track the same scope over time. The first reading shows where the problem concentrates. Within 30 days, you see if the signal stayed or fell after your team's actions."
      },
      {
        question: "How does Dinn track stock without depending on our databases?",
        answer: "Agents query pharmacy digital channels and record what each source reports, with location and time. This is **observed data**. When there is no direct answer, Dinn **estimates** from comparable stores and history, with a confidence level. Every record states how Dinn got it."
      },
      {
        question: "Won't daily data overload the field team?",
        answer: "No. Dinn reduces information overload. It does not give a dashboard for the rep to interpret. It gives **prioritized lists**: which stores to check first, what to verify at each store and what follow-up to expect."
      },
      {
        question: "Is Dinn only for the sales force?",
        answer: "No. The same reading serves **Trade**, **Commercial and field**, **Demand and supply**, **Market intelligence**, **Customer service** and **Technology and data**. All areas see the same availability picture. This reduces friction between areas."
      },
      {
        question: "Can we test it before signing a long contract?",
        answer: "Yes. We open **30 days with a single objective**, with simple terms and a Dinn team member. At the end, you know whether to continue, adjust or stop."
      },
      {
        question: "How does Dinn handle data security and reliability?",
        answer: "Access uses **two-factor verification by email** and permission controls. Corporate SSO is available on request. Every data point is traceable: source, date, and observed or estimated status are explicit. Connections to the customer's AI are **read-only**."
      },
      {
        question: "What is Dinn Conecta?",
        answer: "It is the layer that delivers **pharma data to the environment your team already uses**. Dinn connects authorized sources (market, internal data and pharmacies). It standardizes product, store and region, manages quality and freshness, and delivers to your BI, Copilot, agents or API. Data, infrastructure and governance stay with you."
      },
      {
        question: "Can I use Dinn in ChatGPT, Claude or Copilot?",
        answer: "Yes. Dinn connects to your AI environment via **MCP**, with authorized, **read-only** access. Ask in natural language. Get the analysis with scope, period and limits. Features such as scheduling and file generation depend on your AI plan and setup."
      },
      {
        question: "Does Dinn cover all pharmacies and confirm the cause of a stock-out?",
        answer: "No. **Coverage and refresh vary by source, product, chain and query**. Each reading states what it covers. Dinn does not confirm causes. It shows evidence and hypotheses, and the team validates them. Product absence is not always a stock-out. Stock at the distribution center does not prove a store is supplied."
      },
      {
        question: "What is the difference between observed and estimated data?",
        answer: "**Observed** data is what the source reported directly, with location and time. **Estimated** data comes from comparable stores and history when there is no direct answer, always with a confidence level. **Inferred** data is the reading Dinn draws by combining signals. It is a hypothesis to validate. The base refreshes as D-1. In eligible stores, you can run an on-demand availability check."
      }
    ]
  },
  ctaFinal: {
    title: "Turn channel signals into *clear commercial priorities*",
    description: "In a demo, Dinn shows the reading for your portfolio, territory and regions.",
    button: "Request a demo",
    secondary: "Ask again"
  },
  footer: {
    description: "Commercial intelligence for the pharmaceutical channel. Present in Joinville and Valencia.",
    sectionA: "About Dinn",
    sectionSolutions: "Solutions",
    sectionLegal: "Legal",
    termos: "Terms",
    privacidade: "Privacy",
    cookies: "Cookies",
    suporte: "Support",
    ctaTitle: "Ready to get started?",
    ctaDesc: "See Dinn with your own products.",
    ctaButton: "Request a demo",
    rights: "© 2026 Dinn Tecnologia Ltda. All rights reserved.",
    legalName: "Dinn Tecnologia Ltda.",
    cnpj: "57.639.944/0001-20",
    address: "Rua Dona Francisca, 8300, Bloco Ágora, sala 5, Distrito Industrial, Joinville, SC, CEP 89.219-600",
    cities: "Joinville · Valencia",
    launch: "Launch"
  },
  privacy: {
    title: "Privacy Policy",
    summaryTitle: "Summary",
    summary: [
      "General Information",
      "User Rights",
      "Duty not to provide third-party data",
      "Information collected",
      "Types of data collected",
      "Sensitive data",
      "Collection of data not expressly foreseen",
      "Legal basis for processing personal data",
      "Purposes of processing personal data",
      "Storage of personal data",
      "Retention period of personal data",
      "Recipients and transfer of personal data",
      "Roles and Responsibilities",
      "Of the data controller (Controller)",
      "Of the processing on behalf of the Controller (Processor)",
      "Of the Data Protection Officer (DPO)",
      "Security in the Processing of User's Personal Data",
      "Browsing Data (Cookies)",
      "Cookie Management and browser settings",
      "Essential Cookies",
      "Analytical Cookies",
      "Marketing Cookies",
      "Complaint to a supervisory authority",
      "Changes",
      "Applicable Law and Jurisdiction",
      "Validity and Control",
      "Document Management",
      "Document History"
    ],
    sections: [
      {
        title: "1. General Information",
        content: [
          "This Privacy Policy describes the processing of personal data carried out by DINN, whether automated or manual, in its online customer service and communication channels.",
          "This document was developed in compliance with the General Data Protection Law (LGPD), Federal Law No. 13.709/2018.",
          "The use of any service offered by DINN implies full acceptance of the terms of the Privacy Policy."
        ]
      },
      {
        title: "2. User Rights",
        content: [
          "DINN is committed to following the principles of the LGPD, guaranteeing users the following rights:"
        ],
        list: [
          "Right of confirmation and access",
          "Right of rectification",
          "Right to data deletion",
          "Right to restriction of processing",
          "Right to object",
          "Right to data portability",
          "Right not to be subject to automated decisions",
          "Right to anonymization and sharing"
        ],
        footer: "Users can request these rights by sending an email to <a href=\"mailto:vinicius.silva@diwe.com.br\" style=\"color: var(--primary); text-decoration: underline;\">vinicius.silva@diwe.com.br</a>."
      },
      {
        title: "3. Duty not to provide third-party data",
        content: [
          "When using DINN's services, users must only provide their own personal data."
        ]
      },
      {
        title: "4. Data and Information Collected",
        content: [
          "DINN collects personal data necessary to provide services and comply with legal obligations. The types of data collected include:"
        ],
        list: [
          "Name, email, phone, address",
          "Information about service preferences",
          "Browsing data and IP"
        ]
      },
      {
        title: "5. Legal basis for processing personal data",
        content: [
          "The processing of personal data by DINN is based on the user's consent and other legal grounds of the LGPD, such as the execution of contracts and legal obligations."
        ]
      },
      {
        title: "6. Purposes of processing personal data",
        content: [
          "DINN processes personal data for:"
        ],
        list: [
          "Offering products and services",
          "Recruitment of collaborators",
          "Technical and commercial support",
          "Compliance with legal obligations"
        ]
      },
      {
        title: "7. Storage of personal data",
        content: [
          "Personal data is stored for limited periods, according to the purposes and legal requirements, and may be kept on servers in Brazil or abroad."
        ]
      },
      {
        title: "8. Recipients and transfer of personal data",
        content: [
          "DINN may share data with business partners and legal authorities, always respecting LGPD requirements."
        ]
      },
      {
        title: "9. Roles and Responsibilities",
        customList: [
          "<strong>Controller:</strong> DINN is responsible for processing its users' personal data.",
          "<strong>Processor:</strong> DINN may act as a processor on behalf of clients and partners.",
          "<strong>Data Protection Officer:</strong> DINN has appointed Mr. Vinicius Fernandes Silva as the data protection officer, who can be contacted via <a href=\"mailto:vinicius.silva@diwe.com.br\" style=\"color: var(--primary); text-decoration: underline;\">vinicius.silva@diwe.com.br</a>."
        ]
      },
      {
        title: "10. Security in the Processing of Personal Data",
        content: [
          "DINN adopts technical measures to ensure the security of personal data, such as encryption and information security systems."
        ]
      },
      {
        title: "11. Browsing Data (Cookies)",
        content: [
          "DINN uses cookies to improve the user experience. These can be disabled by the user directly in the browser."
        ]
      },
      {
        title: "12. Complaint to a supervisory authority",
        content: [
          "Users have the right to lodge complaints about the use of their data with the National Data Protection Authority (ANPD)."
        ]
      },
      {
        title: "13. Changes",
        content: [
          "DINN may change this Privacy Policy at any time. The updated version will always be available on our website."
        ]
      },
      {
        title: "14. Applicable Law and Jurisdiction",
        content: [
          "The courts of the district where DINN is located will be responsible for resolving any disputes arising from this policy."
        ]
      },
      {
        title: "15. Validity and Control",
        content: [
          "This document was published on [Date] and will be reviewed annually."
        ]
      },
      {
        title: "16. Document History",
        content: [
          "<strong>Version 1.0:</strong> Created on 10/17/2024"
        ]
      }
    ]
  },
  feedback: {
    title: "Leave your Feedback"
  },
  testimonials: {
    title: "What the pharma industry says about Dinn",
    readMore: "Read more",
    readLess: "Read less",
    items: [
      {
        quote: "The Dinn team stood out for their ability to deeply understand our business, going beyond delivering a simple digital product. They offered valuable business insights and showed a constant willingness to welcome feedback and make adjustments, ensuring that the developed solution truly added value to our sales team. This collaborative and adaptive approach was crucial to the success of our partnership.",
        name: "Natali Pereira dos Santos",
        designation: "Innovation Analyst at Libbs",
        src: "/depoiment/Natali.avif"
      },
      {
        quote: "+ 1 visit per day. Dinn suggested routes impeccably, 10 out of 10. It guided me extremely well within a region.",
        name: "Roberto",
        designation: "Medical Promoter at Eurofarma - Chile",
        src: "/depoiment/Roberto.avif"
      },
      {
        quote: "Participating in the pilot project with Dinn was a transformative experience, with several learnings along the way. The innovative approach and technology used in the project not only optimized our internal processes but also significantly expanded our vision of the future with a perspective that we can deliver something of value and thus transform everything learned into something that makes a difference in people's lives.",
        name: "Wilson Jorge de Assis Junior",
        designation: "Regional Sales Manager",
        src: "/depoiment/Wilson.avif"
      },
      {
        quote: "Shorter pre-visit time. Dinn reduced the preparation time for visits by 10 minutes, allowing me to make one more visit daily.",
        name: "Camila",
        designation: "Medical Promoter at Eurofarma - Chile",
        src: "/depoiment/Camila.avif"
      }
    ]
  },
  blog: {
    heroTitle: "Dinn Blog: AI, stock-outs and pharma commercial execution",
    searchPlaceholder: "Search content here",
    noResultsTitle: "No content found",
    noResultsDesc: "Change your search terms.",
    readArticle: "Read article",
    viewContent: "View content",
    minRead: "min read",
    backToBlog: "Back to Blog",
    ctaTitle: "Turn data into decisions",
    ctaText: "Dinn shows where pharmacies lack the product, what changed and where to act first, with source and confidence.",
    ctaBtn: "Request a demo",
    recommended: "Recommended for you",
    writtenBy: "By",
    allCategories: "All",
    defaultCategory: "Article",
    categories: {
      gestao: "Management",
      estoque: "Inventory",
      precos: "Pricing",
      mercado: "Market",
      tendencias: "Trends",
      estrategia: "Strategy",
      tecnologia: "Technology"
    }
  }
};
