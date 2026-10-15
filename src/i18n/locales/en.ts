import { pagesEn } from './en.pages';

export const enUS = {
  ...pagesEn,
  nav: {
    home: "Home",
    platform: "Platform",
    solutions: "Solutions",
    solutionsAll: "See all solutions",
    cases: "Use cases",
    changelog: "Changelog",
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
    description: "Dinn organizes availability, sell-through, price and coverage signals, shows the source, date and limits of each piece of information, and helps your team decide where to act first.",
    cta: "Explore the platform",
    secondary: "Explore Dinn for your area"
  },
  insights: {
    eyebrow: "Dinn Insights",
    title: "What do you want to know about *stock-outs and sell-out*?",
    intro: "The conversation with Dinn's AI. Ask in plain English and get the number, the scope, the date and how it was calculated."
  },
  ask: {
    placeholder: "Ask about stock, stock-outs, sell-through, price…",
    followPlaceholder: "Ask a follow-up question…",
    send: "Send question",
    reset: "New conversation",
    starters: [
      { team: "Customer service", chip: "Where to find the product", q: "Where can consumers find my product near Campinas?" },
      { team: "Field", chip: "Which stores to check", q: "Which stores in my São Paulo territory need a visit first?" },
      { team: "Distribution", chip: "Is the gap at the DC?", q: "Is the gap at the distributor or in the pharmacies in Goiânia?" },
      { team: "Launches", chip: "Has my launch arrived?", q: "Has my launch reached pharmacies in Recife?" },
      { team: "Inventory", chip: "Stalled stock", q: "Where is stock stalled near stores that are out?" },
      { team: "Competition", chip: "Who gained share", q: "Who gained share in Minas Gerais?" }
    ],
    contextLabel: "Scope understood",
    defaultPlace: "São Paulo",
    defaultProduct: "your product",
    thinking: "Thinking…",
    methodTitle: "How Dinn got here",
    linksTitle: "Keep reading",
    followTitle: "Ask next",
    demoCta: "See it with your products",
    actionWhy: "Why:",
    actionHow: "How:",
    scenarios: {
      sac: {
        keywords: ["where can", "where to find", "find", "consumer", "patient", "customer service", "call center", "locat", "near", "closest", "nearest", "address", "buy", "onde encontr", "onde tem", "onde acha", "onde compr", "consumidor", "paciente", "sac", "atendimento", "localiz", "perto", "próxima", "proxima", "encontrar", "endereço"],
        steps: ["Locating the address…", "Searching pharmacies for the product…", "Calculating days of coverage…"],
        answer: "Near {lugar}, **3 of the 5 closest pharmacies** likely have {produto} in stock. The nearest one with confirmed stock is 0.8 km away.\n\nThe same search reveals a pattern: demand keeps coming from a neighborhood where two stores have been out for a week. That's a cue for the city's replenishment and for medical reps in the area.",
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
          "Search radius from the given address, nearest stores first.",
          "Stock observed at the source (D-1) or estimated from comparable stores, always with a confidence level.",
          "Days of coverage = stock ÷ the store's average daily sell-through.",
          "For consumers, the pick follows availability and distance, not the lowest price."
        ],
        links: [
          { label: "The full customer service case", href: "#time-sac" },
          { label: "How Dinn knows the stock", href: "#por-dentro" }
        ],
        followups: ["What does this change for medical reps?", "Which stores in this region need restocking?"]
      },
      campo: {
        keywords: ["visit", "field", "route", "territory", "portfolio", "sales rep", "trade", "kam", "check first", "prioriti", "priority", "schedule", "visita", "visitar", "campo", "rota", "carteira", "promotor", "consultor", "gdn", "territ", "verificar", "verifico", "priorizar", "prioridade", "agenda"],
        steps: ["Reading your territory…", "Analyzing availability…", "Building the ranking…", "Listing the stores…"],
        answer: "Of the stores in your {lugar} territory, **6 account for 70% of the stock-out signal** for {produto} last week. The list below shows what to check at each one and what return to expect.\n\nDinn prepares the list; your team sets the schedule.",
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
          "The ranking weights the level by the store's sell-through when it has stock.",
          "Stores that never sold the product are left out, so they don't inflate the stock-out."
        ],
        links: [
          { label: "The full field case", href: "#time-campo" },
          { label: "Where each signal comes from", href: "#por-dentro" }
        ],
        followups: ["Are stock-outs getting worse or better over the last 30 days?", "Is the problem at the distributor or in the stores?"]
      },
      medico: {
        keywords: ["doctor", "physician", "medical rep", "prescri", "office", "clinic", "brick", "detailing", "médic", "medic", "propagand", "receita", "consultório", "consultorio", "representante", "clínica", "clinica"],
        steps: ["Locating the doctor's office…", "Searching pharmacies for the product…", "Comparing stock-outs across areas…"],
        answer: "Around the office in {lugar}, **7 of 12 pharmacies** have {produto} today. The 5 without stock belong to the same chain and sit on the same side of the avenue.\n\nIn practice: the prescription will likely be filled, but it's worth alerting trade about that chain before the patient comes back empty-handed.",
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
          "Nothing is written to the CRM: the reading is for preparing the visit."
        ],
        links: [
          { label: "The medical rep case", href: "#time-medico" }
        ],
        followups: ["Where can consumers find the product near Campinas?", "Which stores do we check first?"]
      },
      distribuicao: {
        keywords: ["dc", "dcs", "distribution center", "distributor", "distribution", "wholesal", "supply", "replenish", "restock", "logistic", "delay", "gap", "order", "cd", "cds", "distribuidor", "distribuição", "distribuicao", "abastec", "reposição", "reposicao", "repor", "logística", "logistica", "atraso", "furo", "pedido"],
        steps: ["Reading DC stock…", "Calculating days of coverage…", "Cross-checking stock-outs at the region's pharmacies…", "Comparing with local sell-through…"],
        answer: "In {lugar}, the gap doesn't look like it's at the DC: **the distributor has about 24 days of stock**, yet 38% of the pharmacies it supplies are out of {produto}, and the region keeps selling wherever there's stock.\n\nThe pattern points to a **distribution or replenishment breakdown**, not a shortage at the source. Before concluding, confirm pending orders at the affected chains.",
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
          "DC stock doesn't prove pharmacy stock: the reading cross-checks both ends."
        ],
        links: [
          { label: "The full distribution case", href: "#time-distribuicao" }
        ],
        followups: ["Where is stock stalled near stores that are out?", "Are stock-outs getting worse over the last 30 days?"]
      },
      lancamento: {
        keywords: ["launch", "new product", "reached", "arrived", "arrival", "rollout", "roll-out", "presence", "lançamento", "lancamento", "lançar", "lancar", "lançou", "novo produto", "produto novo", "chegou", "chegada", "presença", "presenca"],
        steps: ["Locating the product…", "Reading weekly history…", "Comparing presence across channels…"],
        answer: "Six weeks after launch, {produto} already shows up in **54% of monitored pharmacies** in {lugar}. The curve picked up at large chains but stays below 20% at independents.\n\nWhere it hasn't arrived yet, the next question is whether the DC has received it: that separates a sell-in problem from a replenishment problem.",
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
          "Week 1 starts on the launch date set by your team.",
          "The channel split follows what each source can identify."
        ],
        links: [
          { label: "The full launch case", href: "#time-lancamento" }
        ],
        followups: ["Is the gap at the distributor or in the pharmacies?", "Who gained share in the region?"]
      },
      parado: {
        keywords: ["stalled", "stuck", "idle", "no movement", "not moving", "slow-moving", "slow moving", "dead stock", "excess", "overstock", "surplus", "realloc", "parado", "parada", "sem movimento", "sem giro", "congelado", "encalhado", "excesso", "sobra", "negativ", "remanej"],
        steps: ["Analyzing availability…", "Counting days without movement…", "Looking for nearby stores that are out…"],
        answer: "In {lugar}, **14 stores have had {produto} sitting idle for over 30 days**, and 5 of them are less than 3 km from stores that are out of the same product.\n\nThat's the pair that matters: stalled stock on one side, a stock-out on the other. The conversation with the chain can start with reallocation, before a new order.",
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
          "Days stalled = consecutive days with the same balance, with no stock decrease.",
          "Observed movement is not the same as a confirmed sale.",
          "Stalled × stock-out pairs: same presentation, up to 3 km apart.",
          "The data doesn't prove a loss; it shows where to look first."
        ],
        links: [
          { label: "The full stalled-stock case", href: "#time-parado" }
        ],
        followups: ["Is the gap at the distributor or in the pharmacies?", "Which stores do we check first?"]
      },
      concorrencia: {
        keywords: ["compet", "share", "rival", "brand", "gained", "losing", "lost ", "price", "pricing", "concorr", "participação", "participacao", "competi", "marca", "espaço", "espaco", "ganhou", "perdendo", "perde ", "preço", "preco"],
        steps: ["Reading the market by state…", "Comparing with the previous window…", "Building the ranking…"],
        answer: "In {lugar}, your company **grew 6% in the same stores**, but the comparable market grew 11%. Share fell because other products grew faster, not because your sales dropped.\n\nThe opening is in 23 stores where only the competitor shows stock. That's where the conversation with the chains can start.",
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
          "Sales estimated from stock movement, not audited sell-out.",
          "Only comparable stores, present in both windows, are included.",
          "Share = your volume ÷ category volume in the same panel.",
          "Competitor data is shown aggregated."
        ],
        links: [
          { label: "The full competition case", href: "#time-concorrencia" }
        ],
        followups: ["Where is the category growing fastest?", "Has my launch reached pharmacies yet?"]
      },
      demanda: {
        keywords: ["opportunit", "grow", "growth", "expan", "market", "demand", "strateg", "invest", "potential", "plan", "category", "oportunidad", "crescer", "cresce", "expans", "mercado", "demanda", "estratégia", "estrategia", "investir", "começar", "potencial", "planej"],
        steps: ["Reading the market by state…", "Opening the state detail…", "Reading the recommendations…"],
        answer: "The category is growing fastest in {lugar}: **+9% estimated volume** in the same stores vs. the previous window. Two large chains sell the category well and barely carry {produto}.\n\nBelow are three fronts to start with. They're hypotheses for your team to validate, not orders.",
        widget: {
          type: "actions",
          title: "Actions for this scope",
          items: [
            { priority: "High", title: "Open a range conversation with Chain A", why: "The chain accounts for 18% of the category in the region and carries the product in 6% of its stores.", how: "Bring the list of stores that sell the category best to the meeting." },
            { priority: "Medium", title: "Step up replenishment in cities with persistent stock-outs", why: "Three cities make up 40% of the stores out of stock for more than 15 days.", how: "Check pending orders with the region's distributor." },
            { priority: "Low", title: "Track the new competitor's entry", why: "It showed up in 31 stores over the last 4 weeks.", how: "Review the same scope in 30 days." }
          ]
        },
        method: [
          "Growth = estimated category volume in the same stores, recent vs. previous window.",
          "Expansion: large chains in the category where your company has low presence.",
          "Each action comes with the number behind it and the first step."
        ],
        links: [
          { label: "The full demand case", href: "#time-demanda" }
        ],
        followups: ["Who gained share in the region?", "Where is stock stalled?"]
      },
      tendencia: {
        keywords: ["stock-out", "stockout", "out of stock", "out-of-stock", "missing", "shortage", "worse", "better", "worsening", "improving", "trend", "evolution", "last 30", "past 30", "ruptura", "falta", "faltando", "sem estoque", "piorando", "melhorando", "piorou", "evolução", "evolucao", "tendência", "tendencia", "últimos", "ultimos"],
        steps: ["Locating the product…", "Calculating the stock-out trend…", "Comparing stock-outs across chains…"],
        answer: "Stock-outs of {produto} in {lugar} **rose from 24% to 32% in 30 days**, driven by one chain. Without it, the scope would be stable, around 25%.\n\nA signal like this opens an investigation, not a conclusion: next, see which stores in that chain explain the rise.",
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
          "Daily base (D-1); each point says whether it's observed or estimated.",
          "The cause of a stock-out needs investigating: Dinn doesn't assume it."
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
        answer: "Yes. Dinn goes where your team already works: in the platform, in a file, in your BI via API, or straight into ChatGPT, Claude and Copilot via MCP, with **read-only** access.\n\nWith **Dinn Conecta**, market data, internal data and pharmacy data arrive standardized in your BI and your agents. Your data and governance stay with you.",
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
        answer: "Dinn is commercial intelligence for the pharmaceutical channel. It organizes pharmacy stock, sell-through and price signals, relates each store to the DC that supplies it when the source allows, and turns all that into named signals: persistent stock-out, stalled stock, falling sell-through.\n\nEach area uses the same reading in its own way. Pick yours below, or ask as if it were about your own products.",
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
        answer: "We start with **a single goal**: for example, cutting stock-outs of one product in one region. You get 30 days under a simple agreement, with someone from our team alongside.\n\nImplementation takes up to 30 days once the agreed prerequisites are in place, and it can start with external sources only.",
        method: [],
        links: [
          { label: "Request a demo", href: "demo" },
          { label: "FAQ", href: "#faq" }
        ],
        followups: ["What is Dinn?", "Does it work in ChatGPT or Copilot?"]
      },
      fallback: {
        steps: ["Understanding the question…"],
        answer: "I can answer that better with your data. These are the questions each team asks most about stock, stock-outs, sell-through, price, distribution and competition. Try one of these:",
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
    eyebrow: "Use cases: pick a situation and watch Dinn at work",
    title: "Concrete channel situations, *one by one*",
    askCta: "Ask Dinn this",
    seesLabel: "Dinn cross-checks",
    doesLabel: "The team does",
    items: [
      {
        id: "sac",
        tab: "Customer service",
        kicker: "Customer service",
        title: "“Where can I find this medicine near home?”",
        story: "The agent sees the closest pharmacies with the product, how many units they hold and how fast the store sells.",
        sees: ["Stock by store", "Distance", "Sell-through", "Price"],
        does: [
          "Points to the pharmacy most likely to have the product",
          "Shows trade where demand can't find product"
        ],
        question: "Where can consumers find my product near Campinas?",
        visual: "locator"
      },
      {
        id: "campo",
        tab: "Field & trade",
        kicker: "Field force & trade",
        title: "Forty stores in the territory. *Time for eight.*",
        story: "Instead of a dashboard, a queue: the stores with the most signal and what to check at each one.",
        sees: ["Stock-out by store", "Persistence", "Sell-through", "Chain"],
        does: [
          "Starts the week with the stores that weigh most",
          "Brings store-level evidence to the chain, with a date",
          "Reviews the same scope after acting"
        ],
        question: "Which stores in my São Paulo territory need a visit first?",
        visual: "queue"
      },
      {
        id: "medico",
        tab: "Medical reps",
        kicker: "Medical promotion",
        title: "Will the prescription find the product *at the pharmacy next door?*",
        story: "Before the visit, the team sees whether the pharmacies around the office carry the product. If they don't, trade gets a heads-up.",
        sees: ["Brick pharmacies", "D-1 stock", "Chain with the gap"],
        does: [
          "Preps the visit knowing what the patient will find",
          "Alerts trade when the area around the office is out of stock"
        ],
        question: "Do pharmacies near the doctor's office in Belo Horizonte have my product?",
        visual: "prescriber"
      },
      {
        id: "distribuicao",
        tab: "Distribution",
        kicker: "Distribution & supply",
        title: "Is the gap at the DC, *the pharmacy or the order?*",
        story: "Dinn links the distributor's stock to the pharmacies it supplies and shows which side the problem is on.",
        sees: ["DC stock", "Days of coverage", "Store stock-outs", "Regional sell-through"],
        does: [
          "Separates a shortage at the source from a replenishment failure",
          "Moves the order up when coverage drops",
          "Weighs reallocating between regions"
        ],
        question: "Is the gap at the distributor or in the pharmacies in Goiânia?",
        visual: "distribution"
      },
      {
        id: "lancamento",
        tab: "Launches",
        kicker: "Launches",
        title: "Week by week, *where the product has landed.*",
        story: "The team tracks the new product's presence by chain and region and sees where it picked up or stalled.",
        sees: ["Weekly presence", "Chain and region", "Arrival at the DC"],
        does: [
          "Sees where the launch hasn't arrived yet",
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
        story: "Dinn counts the days without movement and finds idle stores near stores that are out: that's where reallocation starts.",
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
        story: "Compares your estimated sales with the category's, in the same stores, and shows where only the competitor has stock.",
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
        story: "Stock, sell-through, price and history become an opportunity map by category (such as GLP-1) and by state.",
        sees: ["Category by state", "Share", "Candidate chains"],
        does: [
          "Chooses where to focus effort",
          "Defines the chains to open talks with",
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
          { name: "Distribution breakdown", cd: 82, pdv: 38, demand: "High", read: "DC has stock, pharmacies don't. Check replenishment." },
          { name: "Supply constraint", cd: 8, pdv: 41, demand: "High", read: "Empty DC, region still selling. The problem is upstream of the DC." },
          { name: "Stock-out risk", cd: 30, pdv: 12, demand: "High", read: "DC coverage falling. Time to move the order up." },
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
        reading: "You grew 6% in the same stores; the market grew 11%. Share fell because others grew faster.",
        gap: "competitor-only stores"
      },
      demand: {
        app: "Opportunities",
        questions: ["Where is the category advancing?", "Where am I losing ground?", "Where should we explore expansion?"],
        actions: [
          { priority: "High", title: "Open range talks with Chain A" },
          { priority: "Medium", title: "Step up replenishment in 3 cities" },
          { priority: "Low", title: "Track the new competitor" }
        ]
      }
    }
  },
  story: {
    lines: [
      "The pharma channel leaves signals about your product.",
      "Whether it's on the **shelf. Whether it sells. At what price. Whether the DC can restock it.**",
      "The signals arrive **scattered**, from different sources and with different levels of confidence.",
      "Dinn organizes them, shows where they come from and helps your team decide **where to act first.**"
    ]
  },
  inside: {
    eyebrow: "How Dinn works, in one example",
    stages: [
      {
        name: "Observes",
        title: "Notices a change in the channel.",
        desc: "Identifies a change in availability, price, sell-through or coverage in the sources it tracks.",
        example: "Product X's presence drops at 31 of the 120 monitored stores of Chain A, in the South.",
        chips: ["Availability", "Price", "Sell-through", "Coverage"]
      },
      {
        name: "Validates",
        title: "Shows where it came from and how much to trust it.",
        desc: "Shows source, date, scope and confidence level, and cross-checks signals where applicable.",
        example: "24 stores were observed at the source; 7 are estimated from comparable stores, with medium confidence. Absence is not yet a stock-out.",
        chips: ["Source and date", "Scope", "Observed or estimated", "Confidence"]
      },
      {
        name: "Understands",
        title: "Relates the change to the commercial context.",
        desc: "Links the change to product, account, territory and context, without presuming the cause.",
        example: "The stores are in 3 cities of the same chain. The DC has stock, which does not prove each store will be supplied.",
        chips: ["Product", "Account", "Territory", "Supplying DC"]
      },
      {
        name: "Decides",
        title: "Helps prioritize the next analysis or action.",
        desc: "Ranks the issue among others and suggests the next analysis or action, as a hypothesis for the team to validate.",
        example: "Priority: investigate Chain A in the South, starting with pending orders, before talking about stock-outs.",
        chips: ["Persistent stock-out", "Stock without movement", "Falling sell-through", "Chain concentration"]
      },
      {
        name: "Acts",
        title: "Takes the information to whoever executes.",
        desc: "Delivers the reading to the responsible team or tool: in the platform, in a conversation, in your BI or in your AI.",
        example: "The list reaches the account's KAM and the team's Copilot, with source and date.",
        chips: ["Dinn Manager", "Dinn Insights", "Your AI", "BI & API"]
      },
      {
        name: "Learns",
        title: "Records the feedback and improves the queue.",
        desc: "Records the team's feedback and improves prioritization over time.",
        example: "The team flags that 5 stores had a pending order; the following week they move down the queue.",
        chips: ["Team feedback", "Same scope", "Prioritization"]
      }
    ],
    outputs: ["Platform", "Conversation", "Your AI", "BI & API", "Field"],
    signals: ["Persistent stock-out", "Stock without movement", "Falling sell-through", "Chain concentration"]
  },
  delivery: {
    eyebrow: "Platform and capabilities",
    title: "AI for the pharma market *where your team already works*",
    cards: [
      {
        tag: "Dinn Manager",
        title: "The platform",
        desc: "Brings priorities and context to management and commercial execution: stock-outs, stalled stock, distribution and market in one scope."
      },
      {
        tag: "Dinn Insights",
        title: "A conversation",
        desc: "Supports exploring and interpreting the signals: ask in plain English and get the number, the scope, the date and what's observed or estimated."
      },
      {
        tag: "MCP",
        title: "In your AI",
        desc: "An interface that lets authorized ChatGPT, Claude and Copilot query Dinn's data, with read-only access."
      },
      {
        tag: "Dinn Conecta",
        title: "In your BI and your agents",
        desc: "Prepares and delivers channel data flows, standardized by product, store and region, to your BI and your agents. Your data and governance stay with you."
      }
    ],
    sources: ["IQVIA / Close-Up", "ERP & CRM", "Pharmacies"],
    destinations: ["BI", "Copilot", "Agents", "API"],
    trust: [
      "Observed or estimated, always stated",
      "D-1 base plus on-demand checks at eligible stores",
      "Two-factor auth via email · SSO available",
      "Implementation in up to 30 days after prerequisites and scope are agreed"
    ],
    note: "Coverage and refresh vary by source, product and query. Each source depends on agreed licensing, authorization and scope, and features in your AI depend on your plan and setup."
  },
  faq: {
    title: "Frequently asked questions about AI, stock-outs and sell-out",
    items: [
      {
        question: "We already use audits like IQVIA and Close-Up. Why would we need Dinn?",
        answer: "Dinn **does not replace** market audits: it **complements** them. IQVIA and Close-Up are great for planning, share and long-term decisions, with closed-period data. Dinn tracks availability day to day (D-1), store by store, and shows **where to act now**, before a stock-out becomes a lost sale. When authorized, both readings can be crossed in the same scope."
      },
      {
        question: "Does implementation require a big IT effort?",
        answer: "It doesn't have to. Dinn can start with external sources, without depending on your internal systems. Implementation has a defined scope and takes **up to 30 days** once the agreed prerequisites are ready. When it makes sense, your internal data comes in to enrich the reading."
      },
      {
        question: "Is Dinn just another dashboard?",
        answer: "No. The same base answers three levels of decision: **strategic** (where to focus attention), **tactical** (what to discuss with each chain) and **operational** (which stores to check first). The output is not a chart to interpret but a concrete queue: each store with its signal, the question to answer and the expected follow-up."
      },
      {
        question: "Does Dinn compete with the CRM (Salesforce, Veeva, SalesFarma) we already use?",
        answer: "No. The CRM remains the system of record for visits, orders and portfolio. Dinn is an intelligence layer on the channel: when the integration is agreed, it brings the **context of what is happening in pharmacies** into the CRM, so the team can prioritize better inside the tool it already uses."
      },
      {
        question: "What if audits start delivering daily data?",
        answer: "Fast data without priority is just more noise. Dinn's difference is turning the channel reading into **priority and a next step**: which product, in which chains, in which stores, with explicit source and confidence. The AI prepares the analysis; **your team decides** what to do."
      },
      {
        question: "How soon do we see value?",
        answer: "We start with **one objective**, for example reducing a product's stock-outs in a region, and track the same scope over time. The first reading already shows where the problem concentrates; within 30 days you can see whether the signal persisted or decreased after your team's actions."
      },
      {
        question: "How does Dinn track stock without depending on our databases?",
        answer: "Agents query pharmacies' digital channels and record what each source reports, with location and time: that is **observed data**. Where there is no direct answer, Dinn **estimates** from comparable stores and history, with a confidence level. Every record states how it was obtained."
      },
      {
        question: "Won't daily data overload the field team?",
        answer: "Quite the opposite: Dinn exists to reduce information overload. Instead of a dashboard for the rep to interpret, it delivers **prioritized lists**: which stores to check first, what to verify in each one and what follow-up to expect."
      },
      {
        question: "Is Dinn only for the sales force?",
        answer: "No. The same reading serves **Trade**, **Commercial and field**, **Demand and supply**, **Market intelligence**, **Customer service** and **Technology and data**. Everyone looks at the same availability picture, which reduces friction between areas."
      },
      {
        question: "Can we test it before signing a long contract?",
        answer: "Yes. We open **30 days with a single objective**, with simple terms and someone from our team alongside you. At the end, it is clear whether to continue, adjust or stop."
      },
      {
        question: "How does Dinn handle data security and reliability?",
        answer: "Access uses **two-factor verification by email** and permission controls, and corporate identity integration (**SSO**) can be enabled. Every data point is traceable: source, date and the distinction between observed and estimated are explicit. Connections to the customer's AI are **read-only**."
      },
      {
        question: "What is Dinn Conecta?",
        answer: "It is the layer that prepares and delivers **pharma data into the environment your team already uses**. Dinn connects authorized sources (market, internal data and pharmacies), standardizes product, store and region, takes care of quality and freshness, and delivers into your BI, Copilot, agents or API. Data, infrastructure and governance stay with you."
      },
      {
        question: "Can I use Dinn in ChatGPT, Claude or Copilot?",
        answer: "Yes. Dinn connects to your AI environment via **MCP**, with authorized, **read-only** access. You ask in natural language and get the analysis with scope, period and limits. Features like scheduling and file generation depend on your AI's plan and configuration."
      },
      {
        question: "Does Dinn cover all pharmacies and confirm the cause of a stock-out?",
        answer: "No. **Coverage and refresh vary by source, product, chain and query**, and each reading states what it covers. Dinn also does not confirm causes: it shows evidence and hypotheses, and the team validates. A product's absence is not necessarily a stock-out, and stock at the distribution center does not prove a store is being supplied."
      },
      {
        question: "What is the difference between observed and estimated data?",
        answer: "**Observed** is what the source reported directly, with location and time. **Estimated** is calculated from comparable stores and history when there is no direct answer, always with a confidence level. **Inferred** is the reading Dinn draws from combining signals, presented as a hypothesis to validate. The base is updated as D-1 and, in eligible stores, there is an on-demand availability check."
      }
    ]
  },
  ctaFinal: {
    title: "See how to turn your channel signals into *clearer commercial priorities*",
    description: "In a demo, Dinn shows the reading with your portfolio, your territory and your regions.",
    button: "Request a demo",
    secondary: "Ask again"
  },
  footer: {
    description: "Commercial intelligence for the pharmaceutical channel. An initiative of DiWE Ventures Studio.",
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
    rights: "© 2026 DiWE Ventures Studio. All rights reserved.",
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
        footer: "Users can request these rights by sending an email to <a href=\"mailto:vinicius.silva@diwe.com.br\" style=\"color: #5625F2; text-decoration: underline;\">vinicius.silva@diwe.com.br</a>."
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
          "<strong>Data Protection Officer:</strong> DINN has appointed Mr. Vinicius Fernandes Silva as the data protection officer, who can be contacted via <a href=\"mailto:vinicius.silva@diwe.com.br\" style=\"color: #5625F2; text-decoration: underline;\">vinicius.silva@diwe.com.br</a>."
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
    noResultsDesc: "Try adjusting your search terms.",
    readArticle: "Read article",
    viewContent: "View content",
    minRead: "min read",
    backToBlog: "Back to Blog",
    ctaTitle: "Transform data into strategic decisions",
    ctaText: "Dinn shows where product is missing in pharmacies, what changed and where to act first, with explicit source and confidence.",
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
