// Texts for the product, offer and trust pages of the 10/15/2026 round
// (dinn_site_correcoes_conteudo_2026-10-15.md): Locator and real time,
// features, Dinn Conecta, integrations and API, plans, coverage,
// research, comparisons, about Dinn, customers and entries by goal.
// English mirror of pt.offer.ts: same keys, same order, same structure.
//
// Editorial rules of the document: no number, country, chain or certification
// without a source; real time is an on-demand query; Conecta is the data layer
// and MCP is an interface; "on request" does not mean "unavailable".

export const offerEn = {
  menu: {
    platform: "Platform",
    platformOverview: "Overview",
    features: "Features",
    locator: "Stock locator",
    conecta: "Dinn Conecta",
    integrations: "Integrations",
    coverage: "Coverage",
    platformAll: "See all",
    solutionsAll: "See all",
    compare: "Comparisons",
    plans: "Plans",
    plansOverview: "Plans",
    plansAll: "Compare the plans",
    research: "Research",
    company: "Dinn",
    about: "About",
    trust: "Trust",
    contact: "Contact",
    companyAll: "Get to know Dinn"
  },

  // ── Entries by goal, area and feature ─────────────────────────────────────
  solutionsHub: {
    meta: {
      title: "Solutions | Dinn",
      description: "Start from your goal, area or feature. Each entry opens the page that answers your question."
    },
    hero: {
      eyebrow: "Solutions",
      title: "Start from *your team's question*",
      lead: "Choose by goal, area or feature. Different names can lead to the same answer."
    },
    goals: {
      title: "By goal",
      intro: "What your team wants to solve now.",
      open: "Open",
      items: [
        { label: "Reduce stock-outs and prioritize checks", text: "See where the product may be missing and which stores to check first.", href: "/solucoes/trade-kam-campo" },
        { label: "Check availability now", text: "Query a store when you need to guide someone. See the time of the response.", href: "/produtos/localizador" },
        { label: "Prioritize portfolio accounts and stores", text: "A queue with the signal, the date and the question for each store.", href: "/solucoes/trade-kam-campo" },
        { label: "Investigate supply and distribution", text: "Compare the DC and the region's pharmacies to find the constraint.", href: "/solucoes/supply-distribuicao" },
        { label: "Understand sell-through, price and competition", text: "Compare your product and the category in the same stores, with the source of each reading.", href: "/solucoes/inteligencia-pricing" },
        { label: "Track a launch", text: "Presence by chain and region, week by week, against your team's plan.", href: "/solucoes/marketing-lancamentos" },
        { label: "Guide consumers in customer service", text: "Availability and proximity on one screen, with the source and date of each indication.", href: "/solucoes/sac-customer-experience" },
        { label: "Take the data to my BI or my AI", text: "Prepared pharma data, kept current in the environment your team uses.", href: "/produtos/conecta" }
      ]
    },
    areas: {
      title: "By area",
      intro: "Each area asks a different question. Pick yours."
    },
    features: {
      title: "By feature",
      intro: "Use this when you know what you need.",
      items: [
        { label: "Real-time stock", text: "On-demand query, with the time of the response.", href: "/produtos/localizador" },
        { label: "Estimated stock", text: "What Dinn infers when there is no direct reading, and its confidence.", href: "/funcionalidades#estimado" },
        { label: "History and saved views", text: "The same scope, comparable over time.", href: "/funcionalidades#historico" },
        { label: "Insights", text: "Ask in plain English. Get the number with scope, source and method.", href: "/funcionalidades#insights" },
        { label: "API, files and MCP", text: "The same information outside the platform.", href: "/integracoes" },
        { label: "Alerts and routines", text: "A notice when the signal changes, on the channels enabled in the scope.", href: "/funcionalidades#alertas" }
      ]
    },
    more: "Can't find your case?",
    moreCta: "Tell us which decision to improve"
  },

  // ── Real-time stock scene (home and Locator page) ─────────────────────────
  realtime: {
    eyebrow: "Real-time stock",
    title: "Need to check now? *Check stock in real time.*",
    text: "In the Locator, check the availability that compatible stores report at that moment. See the time of the query. Real-time, D-1 and estimated stock are different readings.",
    condition: "Available depending on chain, source and contracted scope. The information may change after the query.",
    sim: "Simulation · sample values",
    mapAria: "Locator map with pharmacies near the consumer's address, colored by stock level.",
    stepsLabel: "From search to guidance",
    steps: [
      { title: "Locate", text: "Enter the address or area and the radius. Nearby pharmacies show on the map." },
      { title: "Pick the store", text: "Open a store. The base reading is from yesterday. Only compatible stores have the query." },
      { title: "Check now", text: "Dinn asks the store's source at that moment." },
      { title: "Answer and time", text: "The answer shows the time of the query, apart from yesterday's reading." },
      { title: "Guide", text: "Guide the consumer with what the store reported and when. Share the address." }
    ],
    stores: [
      { name: "Downtown Pharmacy", network: "Chain A" },
      { name: "Garden Pharmacy", network: "Chain B" },
      { name: "North Pharmacy", network: "Chain A" },
      { name: "Square Pharmacy", network: "Independent" },
      { name: "South Pharmacy", network: "Chain C" },
      { name: "East Pharmacy", network: "Chain B" }
    ],
    popup: {
      stockTitle: "Product stock",
      exact: "Exact stock",
      estimated: "Estimated stock",
      consult: "Check now",
      consulting: "Checking store...",
      liveNow: "Checked just now · {time}",
      available: "available",
      updated: "Updated yesterday · 23:10",
      price: "R$ 48.90",
      perUnit: "per unit",
      giro: "Sell-through",
      perDay: "units/day",
      stalled: "Stalled",
      stalledDays: "for 9 days",
      notEligible: "Real-time check not available at this store.",
      share: "Share",
      shared: "Address and link copied",
      units: "units"
    },
    legend: {
      d1: "D-1 reading: what the source reported yesterday.",
      est: "Estimated: calculated from comparable stores.",
      live: "Real time: the store's answer at the moment of the query."
    },
    orient: "Guidance to the consumer: “The store reported just now. Stock may change. Confirm before you go.”",
    link: "Understand the three readings",
    hint: "Click a store on the map, scroll the page or wait. The scene plays on its own."
  },

  // ── Locator page ──────────────────────────────────────────────────────────
  locator: {
    meta: {
      title: "Locator and real-time stock | Dinn",
      description: "Query the availability that compatible stores report at that moment. Real-time, D-1 and estimated stock are different readings."
    },
    hero: {
      eyebrow: "Dinn Locator",
      title: "Need to check now? *Query real-time stock.*",
      lead: "In the Locator, query the availability that compatible stores report at that moment. See the time of the query. Real-time, D-1 and estimated stock are different readings."
    },
    scene: { title: "From search to guidance, in five steps" },
    readings: {
      title: "Three readings, three uses",
      intro: "A store can show three readings. Dinn always says which one you see. Each one answers a different question.",
      columns: ["Reading", "What it is", "Refresh", "When to use"],
      rows: [
        ["D-1 stock (observed)", "What the source reported the previous day, by store, with the date.", "Daily base, with the date of each reading.", "Prioritize and track a scope."],
        ["Estimated", "Calculated from comparable stores and history when there is no direct response. Always shows a confidence level.", "At the base update.", "Fill a missing direct signal. Confirm before you act."],
        ["Real time (query)", "The response the store reports to the source at the moment of the query, with the time.", "At the moment you query, one store at a time.", "Confirm availability before you guide someone or visit."]
      ]
    },
    when: {
      title: "When to check now",
      items: [
        { title: "The consumer's call", text: "A patient asks where to find a medicine. Check the nearest store and answer with what it just reported. Do not call store by store." },
        { title: "This afternoon's visit", text: "Before you talk to the chain, see what the store reports now. Take today's data to the conversation, not yesterday's." },
        { title: "After restocking", text: "Did the chain agree to a delivery? Check the same store again. See if the product shows in the answer." }
      ]
    },
    conditions: {
      title: "What must be in place",
      items: [
        { title: "Compatible chain and source", text: "The store must be able to answer the question. The list of eligible chains and sources comes from validated coverage." },
        { title: "Contracted scope", text: "Real-time stock is a plan add-on. See Plans for conditions and limits." },
        { title: "One query, one answer", text: "The answer is valid for that time. It does not refresh the whole base." }
      ],
      coverageLink: "See coverage",
      plansLink: "See plans and add-ons"
    },
    faq: {
      title: "Questions about real-time stock",
      items: [
        { question: "Does real time show all stores, always updated?", answer: "No. It is an on-demand query. You choose a compatible store and Dinn asks the source at that moment. The base reading stays D-1." },
        { question: "Does the response guarantee the product is there?", answer: "No. It is what the source reported at that time. Stock may change later. Tell the consumer this." },
        { question: "Do all chains have real-time query?", answer: "No. It depends on chain, source and contracted scope. We validate the scope with you before we start." },
        { question: "What is the difference from estimated stock?", answer: "Estimated stock is calculated from comparable stores when there is no direct response. The real-time query is the store's own response, with the time." }
      ]
    },
    cta: {
      title: "Want to see the query with your chain and product?",
      desc: "We validate products, chains, regions and the decision your team wants to improve.",
      button: "Talk about your scope"
    }
  },

  // ── Features ──────────────────────────────────────────────────────────────
  features: {
    meta: {
      title: "Features | Dinn",
      description: "What Dinn does, from problem to decision. Each feature shows problem, input, action, output, supported decision, refresh, scope and limits."
    },
    hero: {
      eyebrow: "Features",
      title: "What Dinn does, *from problem to decision*",
      lead: "Each feature shows the problem, input, action in the interface, output and supported decision, with refresh, scope and limits."
    },
    listLabel: "Features",
    kinds: { produto: "Product", interface: "Interface", integracao: "Integration", servico: "Service" },
    kindsNote: "Product is what Dinn delivers. Interface is where you access it. Integration takes the data to your environment. Service is work under scope.",
    flow: {
      problem: "Problem",
      input: "Input",
      action: "Action in the interface",
      output: "Output",
      decision: "Supported decision",
      limit: "Limit of the reading",
      more: "Learn more"
    },
    sim: "Illustrative examples, with sample values. Feature availability follows the contracted plan.",
    items: [
      {
        id: "disponibilidade", name: "Availability and stock-out", kind: "produto",
        problem: "Which product is missing, and where do I start to check?",
        input: "SKU, chain and region.",
        action: "Select the scope. Dinn shows the period and denominator of the reading and opens the stores.",
        output: "Stores ordered by share of days without stock over days observed.",
        decision: "Which stores to check first.",
        limit: "Absence is not a confirmed stock-out. Stores that never sold the item are not in the calculation.",
        href: "/solucoes/trade-kam-campo"
      },
      {
        id: "localizador", name: "Locator", kind: "produto",
        problem: "Where can the consumer find the product nearby?",
        input: "Address or area, radius and chain.",
        action: "Search and compare stores by distance, with the source and refresh of each reading.",
        output: "Nearby stores with availability, distance and the date of the information.",
        decision: "Which store to recommend, and with what confidence.",
        limit: "A chance of stock is not a guarantee. Coverage varies by chain and source.",
        href: "/produtos/localizador"
      },
      {
        id: "tempo-real", name: "Real-time stock", kind: "produto",
        problem: "I must confirm now, before I guide someone.",
        input: "A compatible store, chosen in the Locator.",
        action: "Click “Check now”. Dinn asks the store's source at that moment.",
        output: "The source's response and the time of the query, apart from the D-1 reading.",
        decision: "Recommend the store, or check another.",
        limit: "Available depending on chain, source and contracted scope. The information may change after the query.",
        href: "/produtos/localizador"
      },
      {
        id: "estimado", name: "Estimated stock", kind: "produto",
        problem: "The source did not respond. What can I infer?",
        input: "Store history and comparable stores.",
        action: "Dinn estimates where there is no direct reading. It shows the reference used and the confidence.",
        output: "An estimate labeled as such, with a confidence level.",
        decision: "Where to confirm before you act.",
        limit: "It is an estimate, not a store reading. Confirm when the decision is sensitive.",
        href: "/cobertura"
      },
      {
        id: "historico", name: "History, filters and saved views", kind: "interface",
        problem: "How do I compare the same scope over time?",
        input: "Period, filters and the scope the team needs.",
        action: "Apply the filters, save the view and open it in the next routine.",
        output: "The same reading, comparable week to week.",
        decision: "Did the signal persist, decrease or move?",
        limit: "Available history and number of dashboards depend on the contracted plan.",
        href: "/planos"
      },
      {
        id: "giro-preco", name: "Sell-through, price and stalled stock", kind: "produto",
        problem: "Does the product sell? At what price? Where does the balance not move?",
        input: "Product, chain and time window.",
        action: "Choose the window. Dinn shows the calculation and compares only what is comparable.",
        output: "Sell-through estimate for the scope, observed price and days without movement.",
        decision: "Where to investigate a sell-through drop or reallocate balance.",
        limit: "Movement is not confirmed sales. Sell-through is an estimate.",
        href: "/solucoes/inteligencia-pricing"
      },
      {
        id: "distribuicao", name: "Distribution", kind: "produto",
        problem: "Is the gap at the DC, in replenishment or at the pharmacy?",
        input: "DC, the stores it supplies and product.",
        action: "Compare DC stock with store availability, through the confirmed supply link.",
        output: "The DC and the stores side by side, with coverage in days.",
        decision: "Where to check the order, replenishment or reallocation.",
        limit: "Geographic proximity is not a supply link. The pattern is a hypothesis. Investigate the cause.",
        href: "/solucoes/supply-distribuicao"
      },
      {
        id: "mercado", name: "Market and competition", kind: "produto",
        problem: "Did I lose share or lose sales?",
        input: "Product basket, store universe and window.",
        action: "Define the basket and the comparable stores. Compare your product with the category.",
        output: "Trend of your product and the category in the same stores, and where only the competitor has stock.",
        decision: "Where to win back space.",
        limit: "Sales are estimated. Competitor data is aggregated and respects usage rights.",
        href: "/solucoes/inteligencia-pricing"
      },
      {
        id: "insights", name: "Insights", kind: "interface",
        problem: "I want the answer without a dashboard.",
        input: "A question in plain English.",
        action: "Ask Dinn Insights. The answer shows the scope, source and method.",
        output: "A number with scope, date, method and type (observed or estimated).",
        decision: "Which analysis to open next.",
        limit: "It answers within the scope and capabilities of the plan. Hypotheses show as hypotheses.",
        href: "/plataforma"
      },
      {
        id: "priorizacao", name: "Prioritization and feedback", kind: "produto",
        problem: "With so many signals, where does the team start?",
        input: "Signals from the scope and the team's portfolio.",
        action: "Order the list by signal, assign the owner and record what the team found.",
        output: "A list with signal, date, owner and the record of the outcome.",
        decision: "Who checks what, and what to follow up.",
        limit: "Dinn prepares the list. The team owns the schedule and the decision.",
        href: "/solucoes/trade-kam-campo"
      },
      {
        id: "exportacoes", name: "Exports, API and MCP", kind: "integracao",
        problem: "I need the same information outside the platform.",
        input: "The scope and the authorized destination.",
        action: "Choose the mode: file, technical consumption or authorized AI.",
        output: "The same reading in a file, in the API or in the company's AI, with source and date.",
        decision: "Where your team starts to use the data.",
        limit: "Each mode depends on plan, authorization and scope. MCP is for queries, read-only.",
        href: "/integracoes"
      },
      {
        id: "alertas", name: "Alerts and routines", kind: "interface",
        problem: "I want a notice when something changes. I do not want to open the platform.",
        input: "The rule, the channel and the frequency.",
        action: "Define the tracking rule and the channel for the notice.",
        output: "A notice with the signal, scope and date.",
        decision: "When to act or review the scope.",
        limit: "They follow the triggers and channels enabled in the scope. You configure the automations in your AI.",
        href: "/plataforma"
      },
      {
        id: "conecta", name: "Dinn Conecta", kind: "integracao",
        problem: "Every analysis starts by putting everything together again.",
        input: "Authorized sources: market, internal data and pharmacies.",
        action: "Dinn gathers the data, standardizes product, store and region, and keeps the path current.",
        output: "Prepared pharma data in your BI, Copilot or project.",
        decision: "The question your team wants to answer, without a rebuilt base.",
        limit: "Sources and integrations depend on access, license and scope. It does not replace licenses or act on its own.",
        href: "/produtos/conecta"
      },
      {
        id: "projetos", name: "Research and special projects", kind: "servico",
        problem: "My question needs its own scope.",
        input: "The question, the universe and the available sources.",
        action: "We assess feasibility and scope with you.",
        output: "Report, processed database or flow to the BI, as agreed.",
        decision: "The decision that started the project.",
        limit: "Subject to feasibility and scope assessment. Source rights stay protected.",
        href: "/pesquisas"
      }
    ],
    cta: {
      title: "Which feature answers your question?",
      desc: "We validate products, chains, regions and the decision your team wants to improve.",
      button: "Talk about your scope"
    }
  },

  // ── Dinn Conecta (base: preview 08, dinn-data-preview) ────────────────────
  conecta: {
    meta: {
      title: "Dinn Conecta | Pharma data in your team's environment",
      description: "Dinn connects market, internal and pharmacy data. It prepares and refreshes the pharma context and delivers it to your BI, Copilot and projects."
    },
    hero: {
      eyebrow: "For the pharmaceutical industry",
      title1: "Pharma data.",
      title2: "Working together.",
      lead: "Market, internal and pharmacy data with the context\nyour BI, Copilot and projects need.",
      cta: "See how it connects"
    },
    map: {
      aria: "Market, company data and pharmacy signals go through Dinn Conecta and reach the BI, Copilot and internal projects.",
      sources: "Your sources",
      environment: "Your environment",
      market: { name: "Market", sub: "IQVIA · Close-Up" },
      company: { name: "Your company", sub: "Sales · ERP · lake" },
      pharmacy: { name: "Pharmacies", sub: "Dinn context" },
      core: { name: "Conecta", sub: "Gathers · organizes · refreshes" },
      bi: { name: "Your BI", sub: "Analyses and dashboards" },
      ai: { name: "Your Copilot", sub: "Team questions" },
      project: { name: "Your project", sub: "Your tools" },
      yours: "Your project stays yours.",
      dinn: "Dinn manages the connection.",
      caption: "Sources and integrations depend on access, license and scope."
    },
    problem: {
      label: "Less repeated work",
      title1: "Does every analysis start",
      title2: "by putting everything together again?",
      text: "The data exists. The work is to make one source match another.",
      items: [
        { n: "01 / Gather", title: "Scattered files.", text: "Market in one base. Sales in the ERP. Availability in another source." },
        { n: "02 / Check", title: "Different scopes.", text: "Product, chain and period names must match." },
        { n: "03 / Maintain", title: "Everything changes again.", text: "The next refresh arrives. Someone must maintain that path." }
      ],
      bottom: "Dinn prepares and maintains the data. Your team uses it."
    },
    context: {
      label: "Context for AI",
      title1: "In the age of AI,",
      title2: "context matters.",
      text: "Your team must connect internal databases and make the data available to the company's agents. That project stays yours. Dinn organizes, cleans and standardizes the path with pharma knowledge.",
      stackAria: "Infrastructure and data stay with the customer. Dinn adds a layer of organization and pharmaceutical context before the data reaches the BI and the agents.",
      owner: { label: "Stays with you", text: "Your data · Your infrastructure · Your governance" },
      layer: { label: "Dinn layer", text: "Cleaning · Standardization · Pharma context" },
      destination: { label: "Ready for your environment", text: "BI · Copilot · Internal agents" },
      cta: { title: "Bring pharma context to", text: "Copilot · ChatGPT · Claude · Gemini · your agents", button: "See it in practice" }
    },
    apps: {
      label: "In the pharma routine",
      title1: "From the connection",
      title2: "to your team's question.",
      legend: "Choose an application",
      caption: "Example with fictional data. It is not a customer result.",
      nextLabel: "Next conversation",
      askLabel: "A question in your Copilot",
      items: [
        {
          id: "disponibilidade", tab: "Availability", area: "Trade and commercial", kind: "table",
          title: "Where to investigate the missing product?",
          text: "Compare internal sales with availability in pharmacies. Prioritize chains and regions to discuss supply.",
          flow: ["Internal sales", "Priority by chain"],
          sheet: "Next meeting agenda",
          meta: ["Product A", "Last week"],
          columns: ["Region", "Internal sales", "In pharmacies"],
          rows: [["South", "Falling", "Check shortage ↗"], ["Southeast", "Stable", "No change"], ["Center-West", "Rising", "Follow up"]],
          next: "Investigate supply in the South region with the chain.",
          source: "Internal sales + Dinn availability."
        },
        {
          id: "lancamentos", tab: "Launches", area: "Brand management", kind: "launch",
          title: "Did the launch reach the planned stores?",
          text: "Compare the launch plan with the signals in pharmacies. Take a list of checks to the field.",
          flow: ["Launch plan", "Stores to check"],
          sheet: "Launch tracking",
          meta: ["Product A", "Stores planned"],
          rows: [["Chain A", "Signal found", "ok"], ["Chain B", "Check with the field", "mark"], ["Chain C", "Waiting for refresh", "wait"]],
          next: "Check Chain B stores before you revise the plan.",
          source: "Launch plan + Dinn availability. No signal does not prove a stock-out."
        },
        {
          id: "copilot", tab: "Copilot", area: "Data and AI", kind: "ask",
          title: "Can your Copilot use pharma data?",
          text: "Bring internal, market and pharmacy context to the company's AI, with clear source, refresh and limits.",
          flow: ["Business data", "Context for the AI"],
          question: "Where do we investigate the drop in Product A?",
          answer: "Start with the South region. Compare internal sales with the flagged stores. Check the order history.",
          source: "The answer helps the investigation. It does not assume the cause."
        }
      ]
    },
    team: {
      label: "Together with your team",
      title1: "The project is yours.",
      title2: "Dinn can run\nthe data operation.",
      text: "From implementation to follow-up.\nYour team and tools stay.",
      yours: { label: "Your team", title: "Priorities, tools and access.", text: "Decides what to answer and how to use the data." },
      dinn: { label: "Dinn Conecta", title: "Sources, quality and refresh.", text: "Prepares the data and manages the connections within the agreed scope." }
    },
    faq: {
      label: "Before you start",
      title: "A few answers.",
      items: [
        { question: "Can we use our IQVIA and Close-Up licenses?", answer: "Use depends on the supplier's permissions and the access your company authorizes. Dinn does not replace the license. We validate sources and rights before we define the integration." },
        { question: "Does it work with our BI, data lake or Copilot?", answer: "Dinn works with the environment you have. We define the delivery path with your technical team, according to security, tools and feasibility." },
        { question: "Does Dinn also implement the solution?", answer: "Yes. The offer can combine implementation and operation. We start with one flow, with clear scope and responsibilities." }
      ]
    },
    closing: {
      label: "One flow at a time",
      title1: "Which pharma routine",
      title2: "do you want to simplify?",
      button: "Explore the applications"
    }
  },

  // ── Integrations and API ──────────────────────────────────────────────────
  integrations: {
    meta: {
      title: "Integrations and API | Dinn",
      description: "API, files, BI, lake and customer AI: use Dinn data in your team's environment, with clear scope, responsibilities and limits."
    },
    hero: {
      eyebrow: "Integrations and API",
      title: "Dinn data in the environment *your team uses.*",
      lead: "Your team can use the intelligence on the platform or evaluate a data delivery to internal systems. With authorized sources and a defined scope, Dinn prepares product, store, chain, region and period data for your analyses and routines."
    },
    flow: {
      title: "From signal to dashboard in your BI",
      steps: [
        { title: "Dinn signal + authorized internal base", text: "Channel availability, sell-through and price, with the company data you authorize." },
        { title: "Identification and standardization", text: "Product, store, chain and region on the same key." },
        { title: "Agreed delivery", text: "API, file or table at the agreed destination, at the defined frequency." },
        { title: "Dashboard in the customer's BI", text: "Your team builds and maintains the view it needs." }
      ],
      dinn: { title: "Dinn delivers", items: ["Identified and standardized data", "Delivery in the agreed format, destination and frequency", "Documentation and follow-up within the scope"] },
      client: { title: "The customer configures", items: ["The destination and access in your environment", "The model and dashboard in the BI", "Governance of internal data"] },
      caution: "The example does not assume a native connector for your tool. We define the delivery path with your technical team."
    },
    modalities: {
      title: "Five ways to consume",
      intro: "Choose by the decision you want to support, not by technology name.",
      knowLabel: "What to know",
      items: [
        {
          id: "api", name: "API",
          text: "Consume data in internal systems, with defined authentication, scope and limits.",
          know: ["Which data and fields, with filters and granularity", "Refresh, authentication and permissions", "Usage limits, versioning and failure handling", "Sample response and documentation"]
        },
        {
          id: "arquivos", name: "Governed files",
          text: "Receive files in the agreed format, destination and frequency.",
          know: ["Formats, frequency and authorized destination", "Incremental or full refresh, and the history", "Security and responsibilities of each side", "The scope defines the delivery mechanism"]
        },
        {
          id: "bi", name: "BI, lake or warehouse",
          text: "Receive the data in your company's analytical environment.",
          know: ["How to receive and relate the data", "Product, store and chain keys", "Sample model", "Who builds and maintains the dashboard"]
        },
        {
          id: "mcp", name: "MCP",
          text: "Let an authorized AI query Dinn data, read-only.",
          know: ["Query by an authorized AI, with read-only access", "Permissions stay in place", "We state the environments and modes tested", "A protocol is not approval of each tool"]
        },
        {
          id: "conecta", name: "Dinn Conecta and data projects",
          text: "Give data preparation and operation to Dinn.",
          know: ["Contracted sources, standardization, quality and operation", "Scope and responsibilities of each side", "Starts with one bounded flow"],
          href: "/produtos/conecta", hrefLabel: "See Dinn Conecta"
        }
      ]
    },
    status: {
      title: "How each mode is contracted",
      text: "A technical interface, contracted access and the standard catalog are different. In each conversation we state which one applies to your need.",
      plansLink: "See plans and add-ons"
    },
    questions: {
      title: "Four questions to start",
      items: [
        { label: "Source", text: "Where does the data you want to combine come from?" },
        { label: "Destination", text: "Where will your team use it: BI, lake, internal system or AI?" },
        { label: "Frequency", text: "How often must the information arrive?" },
        { label: "Decision", text: "Which decision will this support?" }
      ]
    },
    faq: {
      title: "Questions about integration",
      items: [
        { question: "Does Dinn integrate with any system?", answer: "We do not promise “any system”. We define the possible delivery path with your technical team, according to security, tools and feasibility." },
        { question: "Do I need IT to start?", answer: "Reading on the platform needs no integration. For API, files or BI, your technical team defines the destination and access. Dinn supports within the scope." },
        { question: "Is integration immediate?", answer: "No. It depends on the scope and prerequisites. Implementation takes up to 30 days after you agree prerequisites and scope." }
      ]
    },
    cta: {
      title: "Tell us about your data flow",
      desc: "Give us the source, destination, frequency and supported decision. We assess the delivery path.",
      button: "Talk about my data flow"
    }
  },

  // ── Plans and contracting (no prices) ─────────────────────────────────────
  plans: {
    meta: {
      title: "Plans and contracting | Dinn",
      description: "Compare Starter, Essential and Professional, the add-ons and the implementation services. The proposal considers products, coverage, users and integration."
    },
    hero: {
      eyebrow: "Plans and contracting",
      title: "Choose the scope *for your operation.*",
      lead: "Compare the ways to contract Dinn and the features for your operation. The proposal considers products, coverage, users and integration needs."
    },
    tiers: [
      { name: "Starter", text: "Start with a focused scope." },
      { name: "Essential", text: "Track more products and chains." },
      { name: "Professional", text: "Serve a larger operation, with more history and data consumption." }
    ],
    compare: {
      title: "Compare the plans",
      intro: "The base is the same daily reading. The scope size, history and included items change.",
      columns: ["", "Starter", "Essential", "Professional"],
      rows: [
        ["Base refresh", "Daily, D-1", "Daily, D-1", "Daily, D-1"],
        ["Users included", "5", "15", "50"],
        ["Custom dashboards included", "1", "3", "5"],
        ["Maximum history", "7 days", "3 months", "6 months"],
        ["Own SKUs included", "5", "20", "100"],
        ["Granularity", "Store", "Store", "Store"],
        ["Large chains", "Included", "Included", "Included"],
        ["Mid-size chains", "On request", "Included", "Included"],
        ["Predicted stock for unbranded pharmacies", "On request", "On request", "Included, as per the agreed scope"],
        ["Manual download", "Included", "Included", "Included"],
        ["Additional users and SKUs", "On request", "Additional purchase", "Additional purchase"],
        ["Minimum commitment", "3 months", "12 months", "12 months"]
      ],
      note: "No public prices. The proposal considers products, coverage, users and integration needs."
    },
    grid: { label: "Plans", fromPrev: "Everything in {prev}, plus", first: "Includes", price: "By proposal", priceNote: "No public price", minimum: "Minimum term" },
    build: {
      title: "Build the scope of your plan",
      step: "Choose the features you need",
      empty: "Select a feature to see the plan we suggest.",
      recommended: "Suggested plan",
      none: "No plan includes all items without a review. Talk to Dinn.",
      cta: "Request a proposal"
    },
    addons: {
      title: "Add-ons and inclusions",
      intro: "What can be part of the plan, and which plan includes it.",
      columns: ["Feature", "Starter", "Essential", "Professional"],
      labels: { i: "Included", c: "Add-on", a: "On request" },
      legend: "An add-on is an additional purchase. On request means we assess the terms with you. It does not mean the feature is impossible.",
      rows: [
        { name: "Competitive intelligence", text: "Compare a basket of products and chains, with a defined universe and method.", tiers: ["a", "c", "c"] },
        { name: "AI forecast", text: "Explore projections and scenarios with explicit assumptions, horizon and uncertainty.", tiers: ["a", "c", "c"] },
        { name: "Additional or custom dashboards", text: "Adapt analyses to specific questions, beyond the included dashboards.", tiers: ["a", "c", "c"] },
        { name: "Real-time stock", text: "Query current availability at compatible stores. On-demand query and continuous refresh have different terms.", tiers: ["a", "c", "c"] },
        { name: "Locator for customer service", text: "Find stores by proximity and check availability to guide the service.", tiers: ["a", "c", "c"] },
        { name: "Alerts by rules and channels", text: "Track signals and exceptions through rules and channels defined in the scope.", tiers: ["a", "c", "c"] },
        { name: "Price monitoring", text: "Compare prices in the contracted scope, with the source and time of the reading.", tiers: ["c", "c", "c"] },
        { name: "Sell-through estimate", text: "Investigate estimated movement. It is not confirmed sales.", tiers: ["a", "c", "i"] },
        { name: "Web assistant", text: "Ask about the contracted scope. The answer shows source and limits.", tiers: ["a", "c", "c"] },
        { name: "File repository", text: "Receive files in the agreed format, destination and frequency.", tiers: ["a", "c", "i"] },
        { name: "API", text: "Consume data in internal systems, with defined authentication, scope and limits.", tiers: ["a", "c", "i"] },
        { name: "Corporate SSO", text: "Evaluate corporate authentication and implementation requirements.", tiers: ["a", "a", "a"] }
      ]
    },
    beyond: {
      title: "Beyond the subscription",
      intro: "These items are contracted under scope, in their own blocks.",
      items: [
        { title: "MCP", text: "Query by your company's authorized AI, with read-only access.", href: "/integracoes", cta: "See integrations" },
        { title: "Dinn Conecta", text: "Preparation and operation of data flows for your BI, Copilot and projects.", href: "/produtos/conecta", cta: "See Dinn Conecta" },
        { title: "Custom research and sources", text: "On-demand studies and evaluation of new sources, with defined scope and feasibility.", href: "/pesquisas", cta: "See research" },
        { title: "Implementation and services", text: "Implementation, training and follow-up, sized by the complexity of the scope.", href: "/contato", cta: "Talk about the scope" }
      ]
    },
    start: {
      title: "How to start",
      items: [
        { title: "30-day guided evaluation", text: "A written objective, validated coverage, one owner on each side and a criterion to continue, adjust or end." },
        { title: "Implementation in up to 30 days", text: "The count starts after you agree prerequisites and scope. The total timeline includes your company's procurement and approval steps." }
      ]
    },
    faq: {
      title: "Questions about contracting",
      items: [
        { question: "Are prices on the site?", answer: "No. We do not publish prices. We prepare the proposal after we validate your scope. It considers products, coverage, users and integration needs." },
        { question: "Can I start with a smaller plan and grow?", answer: "Yes. You can contract additional users, SKUs, chains and add-ons as the operation grows." },
        { question: "Are an add-on and a service the same thing?", answer: "No. An add-on is a feature added to the plan. A service, such as implementation, research or a data project, is work contracted under scope." },
        { question: "Is there a minimum commitment?", answer: "Yes. It varies by plan, as the comparison shows. The final terms are in the proposal." }
      ]
    },
    cta: {
      title: "Define the plan for your operation",
      desc: "Tell us the products, chains and the decision to improve. We build the proposal from the validated scope.",
      button: "Define the plan for my operation"
    }
  },

  // ── Coverage ──────────────────────────────────────────────────────────────
  coverage: {
    meta: {
      title: "Coverage | Dinn",
      description: "See where Dinn can support your operation: coverage by country, chain, product and reading type, with refresh and limits."
    },
    hero: {
      eyebrow: "Coverage",
      title: "See where Dinn can *support your operation.*",
      lead: "See coverage by country, chain, product and reading type. Before we start, we validate the scope your team needs."
    },
    dims: {
      title: "How we describe coverage",
      intro: "We report each dimension separately. This prevents overlapping bases and prevents a registry from looking like usable data.",
      items: [
        { title: "Country", text: "Countries with validated operation, available under project and under study. We do not mix them." },
        { title: "Chains and banners", text: "Monitored chains. We use name and logo only with authorization. Monitored does not mean partner." },
        { title: "Stores", text: "Unique stores and the eligible universe. A registry is not usable data. We count the stores that have a reading." },
        { title: "Product and category", text: "Coverage by SKU and category, with location and period. Includes digitized and independent pharmacies, when applicable." },
        { title: "Nature of the reading", text: "Direct observation, estimate and real time, on separate lines." },
        { title: "Refresh and gaps", text: "Frequency, eligible stores and sources, known gaps and the date of the last review." }
      ]
    },
    nature: {
      title: "Observed, estimated and real time",
      intro: "One store can have more than one reading. We count each one separately.",
      columns: ["Reading", "What it covers", "Refresh"],
      rows: [
        ["Observed (D-1)", "What the source reported the previous day, by store.", "Daily base, with the date of each reading."],
        ["Estimated", "Stores with no direct response. Uses comparable stores and history, with a confidence level.", "At the base update."],
        ["Real time", "Compatible stores, by on-demand query.", "At the moment of the query, one store at a time."]
      ]
    },
    status: {
      title: "Where Dinn operates",
      intro: "The three groups are separate. The list comes from the coverage registry, with the date of the last review.",
      reviewed: "Last review",
      empty: "We show the current list when we validate your scope.",
      groups: [
        { key: "validated", title: "Validated operation", text: "Countries and chains with a reading in use." },
        { key: "project", title: "Available under project", text: "Served under project and feasibility assessment." },
        { key: "study", title: "Under study", text: "Mapped, not yet a commercial offering." }
      ]
    },
    validate: {
      title: "Validate my coverage",
      text: "Tell us the country, products, and chains or regions. We return what we cover today for that scope, by reading type.",
      items: ["Country", "Products or categories", "Chains or regions"],
      button: "Validate my coverage"
    },
    links: { locator: "Real-time stock", plans: "Plans and add-ons", trust: "How we handle source and limits" }
  },

  // ── Research and special projects ─────────────────────────────────────────
  research: {
    meta: {
      title: "Research and special projects | Dinn",
      description: "On-demand studies, recurring reports, new sources, and data preparation and integration projects. We agree method and deliverable with you."
    },
    hero: {
      eyebrow: "Research and special projects",
      title: "A specific question may need *its own scope.*",
      lead: "We evaluate on-demand studies and projects with additional sources to answer a concrete decision in the pharmaceutical channel. The work can combine Dinn data, authorized sources and internal information. We agree method and deliverable with you."
    },
    cards: {
      title: "Four modes",
      deliverLabel: "Deliverable defined in the proposal",
      items: [
        { tag: "On-demand research", title: "A specific decision, a study with its own scope.", deliver: "Question, universe, method and report or analyzed database." },
        { tag: "Recurring reports", title: "Track the same question over time.", deliver: "Indicators, frequency, owners and comparability review." },
        { tag: "Custom sources", title: "Evaluate new sources for your project.", deliver: "Access and rights, feasibility, quality, cost and refresh limits." },
        { tag: "Preparation and integration", title: "Connect the scope to your team's environment.", deliver: "Sources, standardization, destination, operation and acceptance criterion, as in the Conecta proposal." }
      ]
    },
    build: {
      title: "Plan your project",
      step: "Choose the deliveries you want",
      empty: "Select a delivery to see the project summary.",
      summary: "Your project",
      agree: "We agree with you"
    },
    define: {
      title: "What we agree in each project",
      items: ["The question", "The universe", "The sources", "The method", "The deliverable", "The agreed timeline", "The acceptance criterion"]
    },
    deliveries: {
      title: "Possible deliverables",
      intro: "Subject to the feasibility of each project.",
      items: ["Report", "Processed database", "Territorial breakdown", "Category analysis", "Dashboard", "Flow to the BI"]
    },
    limits: {
      title: "What to know",
      items: [
        "Each project goes through a feasibility and scope assessment.",
        "We do not announce a fixed timeline or unlimited execution. We agree the timeline per project.",
        "We do not collect from any source. We validate access and rights first.",
        "Authorized access to audit, ERP, CRM or partner data does not give a right of redistribution."
      ]
    },
    cta: {
      title: "Describe your project",
      desc: "Tell us the objective, scope, available sources and desired format.",
      button: "Describe my project"
    }
  },

  // ── Comparisons ───────────────────────────────────────────────────────────
  compare: {
    meta: {
      title: "Comparisons | Dinn",
      description: "Which layer is missing between your data and the decision? See how Dinn relates to audits, CRM, BI and lake, collection and integration, and general-purpose AI."
    },
    hero: {
      eyebrow: "Comparisons",
      title: "Which layer is missing between your data *and the decision?*",
      lead: "Dinn does not replace what you use now. See the role of each approach and where specialized channel intelligence fits."
    },
    table: {
      columns: ["Approach", "Role", "How it relates to Dinn"],
      rows: [
        ["Market audits", "Planning and market readings, depending on the contracted product.", "They can complement granular signals. We confirm product and source before we state frequency or granularity."],
        ["CRM and execution", "Record of relationships, visits, orders and routines.", "Dinn can give context to the CRM. It does not write to the CRM on its own and does not replace it."],
        ["BI and lake", "Store, combine and visualize information.", "The customer can use Dinn data in its own environment."],
        ["Generic collection and integration", "Obtain and transport data from sources.", "Dinn differs in identity, pharmaceutical context, quality and recurring use."],
        ["General-purpose AI", "Interpret and produce outputs within the available context.", "Compatible interfaces, such as MCP, can query permissioned data and specialized context."]
      ]
    },
    value: {
      title: "The value does not end with the data",
      text: "Dinn organizes channel identities, qualifies signals and delivers context for recurring decisions. Connection, validation, history, interpretation and delivery are one path."
    },
    people: {
      title: "Adapted to your scope, with people",
      text: "Your team helps define the scope and the evaluation criteria. Implementation agrees owners, deliverables and follow-up.",
      items: [
        { title: "What we configure", text: "Scope of products, chains and regions, filters and views, and the form of delivery." },
        { title: "What needs a project", text: "New sources, custom integrations and specific studies, with scope defined in contract." }
      ]
    },
    cta: {
      title: "Want to see where Dinn fits in your operation?",
      desc: "We validate products, chains, regions and the decision your team wants to improve.",
      button: "Talk about your scope"
    }
  },

  // ── About Dinn ────────────────────────────────────────────────────────────
  about: {
    meta: {
      title: "About Dinn | Commercial intelligence for the pharmaceutical channel",
      description: "Dinn develops commercial intelligence for the pharmaceutical channel, in Joinville, Brazil, and Valencia, Spain."
    },
    hero: {
      eyebrow: "Dinn",
      title: "Commercial intelligence *for the pharmaceutical channel*",
      lead: "Dinn develops commercial intelligence for the pharmaceutical channel, in Joinville, Brazil, and Valencia, Spain."
    },
    what: {
      title: "What we do",
      text: "We organize signals of availability, sell-through, price and channel coverage. We show the source, refresh and limits of each piece of information. We help commercial teams decide where to act first."
    },
    where: {
      title: "Where we are",
      items: [
        { city: "Joinville", country: "Santa Catarina, Brazil", text: "Headquarters of Dinn Tecnologia Ltda." },
        { city: "Valencia", country: "Spain", text: "Team in Spain." }
      ]
    },
    company: {
      title: "Company details",
      rows: [
        ["Legal name", "Dinn Tecnologia Ltda."],
        ["Tax ID (CNPJ)", "57.639.944/0001-20"],
        ["Address", "Rua Dona Francisca, 8300, Bloco Ágora, sala 5, Distrito Industrial, Joinville, SC, CEP 89.219-600"]
      ]
    },
    contact: {
      title: "Talk to Dinn",
      items: [
        { title: "Sales contact", text: "Tell us the decision to improve. A person on the team replies.", href: "/contato", cta: "Talk to Dinn" },
        { title: "Support", text: "How to log a problem and reach the contracted channel.", href: "/suporte", cta: "Open support" },
        { title: "Privacy and terms", text: "How we handle personal data and the conditions of use.", href: "/politicas-de-privacidade", cta: "Read the policy" }
      ]
    },
    trust: {
      title: "How we handle source, date and limits",
      text: "Each signal says where it came from, when we observed it and how far it goes. You can act without being misled.",
      cta: "See trust and controls"
    }
  },

  // ── Customers ─────────────────────────────────────────────────────────────
  clients: {
    meta: {
      title: "Customers and cases | Dinn",
      description: "Companies that work with Dinn, and stories of use from signal to action, with context, validation and learning."
    },
    hero: {
      eyebrow: "Customers",
      title: "Who works with *Dinn*, and what they did",
      lead: "Pharmaceutical-sector companies and stories of use, from signal to learning."
    },
    logos: {
      title: "Companies that work with Dinn"
    },
    cases: {
      title: "Stories of use",
      intro: "Each case shows the situation, signal, validation, decision and learning.",
      all: "See all cases"
    },
    voices: { title: "What users say" }
  },

  // ── Contact: request profile (what the person wants to hire) ──────────────
  contactMore: {
    interest: {
      label: "What do you want to do?",
      options: [
        { value: "conhecer", label: "Get to know Dinn", hint: "See the platform with my portfolio" },
        { value: "plano", label: "Hire a plan", hint: "Starter, Essential or Professional" },
        { value: "funcionalidade", label: "Use features", hint: "Real time, history, alerts…" },
        { value: "integracao", label: "Data in my environment", hint: "API, files, BI or Dinn Conecta" },
        { value: "pesquisa", label: "Commission a study", hint: "Study or special project" }
      ]
    },
    plan: {
      label: "Which plan is closest?",
      options: [
        { value: "starter", label: "Starter" },
        { value: "essential", label: "Essential" },
        { value: "professional", label: "Professional" },
        { value: "nao_sei", label: "Not sure yet" }
      ]
    },
    features: {
      label: "Which features interest you?",
      hint: "Pick as many as you need.",
      options: [
        { value: "tempo_real", label: "Real-time stock" },
        { value: "estimado", label: "Estimated stock" },
        { value: "historico", label: "History and saved views" },
        { value: "giro_preco", label: "Sell-through, price and competition" },
        { value: "distribuicao", label: "Distribution" },
        { value: "insights", label: "Insights" },
        { value: "alertas", label: "Alerts and routines" },
        { value: "exportacoes", label: "Exports, API and MCP" }
      ]
    },
    context: {
      label: "Want to tell us more?",
      optional: "(optional)",
      placeholder: "Products, chains, countries or what you tried."
    },
    requiredInterest: "Choose an option.",
    doneBy: {
      conhecer: "We prepare a short conversation with your portfolio and regions.",
      plano: "We build the proposal from the validated scope, with the comparison of the plan you chose.",
      funcionalidade: "We show the features you picked, with your scope.",
      integracao: "We learn the source, destination and frequency of the data before we propose the delivery path.",
      pesquisa: "We assess the feasibility and scope of the study before we agree method, delivery and timeline."
    },
    tierCta: "Talk about this plan"
  },

  // ── About Dinn: graphic blocks ────────────────────────────────────────────
  aboutMore: {
    map: { aria: "Link between Joinville, in Brazil, and Valencia, in Spain.", brazil: "Brazil", spain: "Spain", label: "Two cities, one team" },
    how: {
      title: "How Dinn works",
      intro: "From the loose signal to the recorded action, always with source, date and limit."
    },
    stats: {
      title: "Dinn in a few facts",
      items: [
        { value: 2, suffix: "", label: "cities: Joinville and Valencia" },
        { value: 6, suffix: "", label: "areas served, from Trade to customer service" },
        { value: 3, suffix: "", label: "site languages: Portuguese, English and Spanish" },
        { value: 30, suffix: " days", label: "to deploy, after the scope is agreed" }
      ]
    },
    principles: {
      title: "How we work",
      intro: "Four commitments on every page and in every conversation.",
      items: [
        { title: "Source, date and limit", text: "Every number says where it came from, when we observed it and how far it holds." },
        { title: "The decision is the team's", text: "Dinn prepares the reading and suggests the next step. Your team decides and acts." },
        { title: "Usage rights respected", text: "Third-party sources come with agreed licensing, authorization and scope." },
        { title: "Start small, with a deadline", text: "One goal, one scope and deployment within 30 days after the scope is agreed." }
      ]
    },
    trustBand: { chips: ["Source", "Date", "Limit"] }
  },

  // ── Trust: new blocks ─────────────────────────────────────────────────────
  trustMore: {
    accuracy: {
      title: "Quality and accuracy",
      text: "We track quality by data type and scope. Before the evaluation, we present the methodology, coverage and validation results for your case.",
      kindsTitle: "We measure each item separately",
      kinds: ["Availability", "Quantity", "Price", "Sales estimate"],
      note: "We show a rate only with the definition of a hit, method, sample, window, universe and source of truth."
    },
    seals: {
      title: "Seals, approvals and certifications",
      text: "We show what we can prove: verifiable controls and availability for evaluation. Seals and certificates appear only with the document, entity, scope and validity.",
      rows: [
        { label: "Customer logos", text: "They show authorized relationships. They are not certifications." },
        { label: "Customer approval", text: "Result of your company's IT and compliance process, done together with Dinn." },
        { label: "Independent certification", text: "Shown only with the document, entity, scope and validity." }
      ]
    },
    docs: {
      title: "Technical documentation on request",
      text: "IT, security and procurement receive the technical material during the evaluation. We give sensitive documents on request.",
      items: ["Authentication and permissions", "Isolation between customers", "Hosting", "Data retention", "Applicable suppliers and subprocessors", "Incident management", "Integration conditions"],
      cta: "Request the documentation"
    }
  }
};
