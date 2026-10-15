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
    platformOverview: "Platform overview",
    features: "Features",
    locator: "Locator and real-time stock",
    conecta: "Dinn Conecta",
    integrations: "Integrations and API",
    coverage: "Coverage",
    platformAll: "See the whole platform",
    solutionsAll: "Choose by goal, area or feature",
    compare: "Comparisons",
    plans: "Plans",
    plansOverview: "Plans and contracting",
    plansAll: "Compare the plans",
    research: "Research and special projects",
    company: "Dinn",
    about: "About Dinn",
    trust: "Trust and controls",
    contact: "Contact",
    companyAll: "Get to know Dinn"
  },

  // ── Entries by goal, area and feature ─────────────────────────────────────
  solutionsHub: {
    meta: {
      title: "Solutions | Dinn",
      description: "Start from your goal, your area or the feature you are looking for: each entry leads to the page that answers your question."
    },
    hero: {
      eyebrow: "Solutions",
      title: "Start from *the question your team asks*",
      lead: "By goal, by area or by feature. Different names can lead to the same answer: choose the path that feels most natural to you."
    },
    goals: {
      title: "By goal",
      intro: "What your team wants to solve right now.",
      open: "Open",
      items: [
        { label: "Reduce stock-outs and prioritize checks", text: "See where the product may be missing and which stores to start checking.", href: "/solucoes/trade-kam-campo" },
        { label: "Check availability now", text: "Query the store at the moment you need to guide someone, and see the time of the response.", href: "/produtos/localizador" },
        { label: "Prioritize portfolio accounts and stores", text: "A queue with the signal, the date and the question to answer at each store.", href: "/solucoes/trade-kam-campo" },
        { label: "Investigate supply and distribution", text: "Cross the DC and the region's pharmacies to investigate where the constraint may be.", href: "/solucoes/supply-distribuicao" },
        { label: "Understand sell-through, price and competition", text: "Compare your product and the category in the same stores, with the source of each reading.", href: "/solucoes/inteligencia-pricing" },
        { label: "Track a launch", text: "Presence by chain and region, week by week, against the plan your team set.", href: "/solucoes/marketing-lancamentos" },
        { label: "Guide consumers in customer service", text: "Availability and proximity on the same screen, with the source and date of each indication.", href: "/solucoes/sac-customer-experience" },
        { label: "Take the data to my BI or my AI", text: "Prepared pharma data, kept up to date in the environment your team already uses.", href: "/produtos/conecta" }
      ]
    },
    areas: {
      title: "By area",
      intro: "Each area arrives with a different question. Pick yours."
    },
    features: {
      title: "By feature",
      intro: "When you already know what you are looking for.",
      items: [
        { label: "Real-time stock", text: "On-demand query, with the time of the response.", href: "/produtos/localizador" },
        { label: "Estimated stock", text: "What Dinn infers when there is no direct reading, and with what confidence.", href: "/funcionalidades#estimado" },
        { label: "History and saved views", text: "The same scope, comparable over time.", href: "/funcionalidades#historico" },
        { label: "Insights", text: "Ask in plain English and get the number with scope, source and method.", href: "/funcionalidades#insights" },
        { label: "API, files and MCP", text: "The same information outside the platform.", href: "/integracoes" },
        { label: "Alerts and routines", text: "A notice when the signal changes, on the channels enabled in the scope.", href: "/funcionalidades#alertas" }
      ]
    },
    more: "Can't find your case?",
    moreCta: "Tell us the decision you want to improve"
  },

  // ── Real-time stock scene (home and Locator page) ─────────────────────────
  realtime: {
    eyebrow: "Real-time stock",
    title: "Need to check now? *Query real-time stock.*",
    text: "In the Locator, query the availability reported at that moment by compatible stores. See the time of the query and tell this response apart from D-1 or estimated stock.",
    condition: "Available depending on chain, source and contracted scope. The information may change after the query.",
    sim: "Simulation · sample values",
    app: "Locate product",
    address: "Consumer's address",
    stepsLabel: "From search to guidance",
    steps: [
      { title: "Locate", text: "Enter the address or the area and the radius." },
      { title: "Choose the store", text: "Among the nearest, only compatible stores have the query." },
      { title: "Check now", text: "Dinn asks the store's source at that moment." },
      { title: "Response and time", text: "The response comes with the time of the query." },
      { title: "Guide", text: "Guide knowing what was reported and when." }
    ],
    stores: [
      { name: "Pharmacy 1 · Chain A", dist: "0.8 km", base: "Observed · D-1", baseValue: "12–15 units", eligible: true, live: "11 units reported" },
      { name: "Pharmacy 2 · Chain B", dist: "1.2 km", base: "Estimated · comparable stores", baseValue: "4–6 units", eligible: true, live: "No stock reported" },
      { name: "Pharmacy 3 · Chain C", dist: "1.9 km", base: "Observed · D-1", baseValue: "9–11 units", eligible: false, live: "" }
    ],
    ask: "Check now",
    asking: "Querying the store…",
    answered: "Store response",
    at: "at",
    notEligible: "No real-time query on this chain; the D-1 reading applies.",
    reset: "Redo the query",
    legend: {
      d1: "D-1 reading: what the source reported yesterday.",
      est: "Estimated: calculated from comparable stores.",
      live: "Real time: the store's response at the moment of the query."
    },
    orient: "Guidance to the consumer: “The store reported just now, and stock may change. It is worth confirming before going.”",
    link: "Understand the three readings",
    hint: "Choose a compatible store and click Check now."
  },

  // ── Locator page ──────────────────────────────────────────────────────────
  locator: {
    meta: {
      title: "Locator and real-time stock | Dinn",
      description: "Query the availability reported by compatible stores at the moment you need it and tell the response apart from D-1 or estimated stock."
    },
    hero: {
      eyebrow: "Dinn Locator",
      title: "Need to check now? *Query real-time stock.*",
      lead: "In the Locator, query the availability reported at that moment by compatible stores. See the time of the query and tell this response apart from D-1 or estimated stock."
    },
    scene: { title: "From search to guidance, in five steps" },
    readings: {
      title: "Three readings, three uses",
      intro: "Dinn always tells you which one you are looking at. Each answers a different question.",
      columns: ["Reading", "What it is", "Refresh", "When to use"],
      rows: [
        ["D-1 stock (observed)", "What the source reported on the previous day, by store and with the date.", "Daily base, with the date of each reading.", "Prioritize and track a scope."],
        ["Estimated", "Calculated from comparable stores and history when there is no direct response, always with a confidence level.", "At the base update.", "Fill the absence of a direct signal, confirming before acting."],
        ["Real time (query)", "The response the store reports to the source at the moment of the query, with the time.", "At the moment you query, one store at a time.", "Confirm availability before guiding someone or before a visit."]
      ]
    },
    when: {
      title: "When to query in real time",
      items: [
        { title: "Before guiding a consumer", text: "In customer service, confirm what the store reports now before recommending the trip." },
        { title: "Before a visit", text: "In the field, see what the store reports today and take the day's data into the conversation." },
        { title: "After an action", text: "In trade, query the same store again to see whether replenishment showed up." }
      ]
    },
    conditions: {
      title: "What needs to be in place",
      items: [
        { title: "Compatible chain and source", text: "The query depends on the store's chain and source allowing the question. The list comes from validated coverage." },
        { title: "Contracted scope", text: "Real-time stock is an add-on to the plan. Terms and limits are in Plans." },
        { title: "One query, one response", text: "The information may change afterward. It is not a continuous refresh of the whole base." }
      ],
      coverageLink: "See coverage",
      plansLink: "See plans and add-ons"
    },
    faq: {
      title: "Questions about real-time stock",
      items: [
        { question: "Does real time mean I see all stores updated all the time?", answer: "No. It is an on-demand query: you choose a compatible store and Dinn asks the source at that moment. The base reading remains D-1." },
        { question: "Does the response guarantee the product will be there?", answer: "No. It is what the source reported at that time. Stock may change afterward, and the guidance to the consumer should say so." },
        { question: "Do all chains have real-time query?", answer: "No. It depends on chain, source and contracted scope. We validate the scope with you before starting." },
        { question: "What is the difference from estimated stock?", answer: "Estimated stock is calculated from comparable stores when there is no direct response. The real-time query is the store's own response, with the time." }
      ]
    },
    cta: {
      title: "Want to see the query with your chain and your product?",
      desc: "We will validate products, chains, regions and the decision your team wants to improve.",
      button: "Talk about your operation's scope"
    }
  },

  // ── Features ──────────────────────────────────────────────────────────────
  features: {
    meta: {
      title: "Features | Dinn",
      description: "What Dinn does, from problem to decision: problem, input, action in the interface, output and supported decision of each feature, with refresh, scope and limits."
    },
    hero: {
      eyebrow: "Features",
      title: "What Dinn does, *from problem to decision*",
      lead: "Each feature shows the problem it solves, what goes in, what you do in the interface, what comes out and the decision it supports, with refresh, scope and limits."
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
      more: "See in detail"
    },
    sim: "Illustrative examples, with sample values. The availability of each feature follows the contracted plan.",
    items: [
      {
        id: "disponibilidade", name: "Availability and stock-out", kind: "produto",
        problem: "Which product is missing, and where do I start checking?",
        input: "SKU, chain and region.",
        action: "Select the scope. Dinn shows the period and the denominator of the reading and opens the stores.",
        output: "Stores ordered by the share of days without stock over the days observed.",
        decision: "Which stores to check first.",
        limit: "Absence is not a confirmed stock-out. Stores that never sold the item are left out of the calculation.",
        href: "/solucoes/trade-kam-campo"
      },
      {
        id: "localizador", name: "Locator", kind: "produto",
        problem: "Where can the consumer find the product near them?",
        input: "Address or area, radius and chain.",
        action: "Searches and compares stores by distance, with the source and refresh of each reading.",
        output: "Nearby stores with availability, distance and the date of the information.",
        decision: "Which store to recommend and with how much confidence.",
        limit: "A chance of stock is not a guarantee of stock. Coverage varies by chain and source.",
        href: "/produtos/localizador"
      },
      {
        id: "tempo-real", name: "Real-time stock", kind: "produto",
        problem: "I need to confirm now, before guiding someone.",
        input: "A compatible store, chosen in the Locator.",
        action: "Triggers “Check now”. Dinn asks the store's source at that moment.",
        output: "The source's response and the time of the query, separate from the D-1 reading.",
        decision: "Whether it is worth recommending the store or checking another.",
        limit: "Available depending on chain, source and contracted scope. The information may change after the query.",
        href: "/produtos/localizador"
      },
      {
        id: "estimado", name: "Estimated stock", kind: "produto",
        problem: "The source did not respond. What can I infer?",
        input: "Store history and comparable stores.",
        action: "Dinn estimates where there is no direct reading and shows the reference used and the confidence.",
        output: "An estimate labeled as such, with a confidence level.",
        decision: "Where to confirm before acting.",
        limit: "It is an estimate, not a store reading. Confirm when the decision is sensitive.",
        href: "/cobertura"
      },
      {
        id: "historico", name: "History, filters and saved views", kind: "interface",
        problem: "How do I compare the same scope over time?",
        input: "Period, filters and the scope that matters to the team.",
        action: "Apply the filters, save the view and return to it in the next routine.",
        output: "The same reading, comparable from one week to the next.",
        decision: "Whether the signal persisted, decreased or moved elsewhere.",
        limit: "The available history and the number of dashboards depend on the contracted plan.",
        href: "/planos"
      },
      {
        id: "giro-preco", name: "Sell-through, price and stalled stock", kind: "produto",
        problem: "Does the product sell? At what price? Where does the balance not move?",
        input: "Product, chain and time window.",
        action: "Choose the window. Dinn shows the calculation and compares only what is comparable.",
        output: "Sell-through estimate for the scope, observed price and days without movement.",
        decision: "Where to investigate a drop in sell-through or reallocate balance.",
        limit: "Movement is not confirmed sales. Sell-through is an estimate.",
        href: "/solucoes/inteligencia-pricing"
      },
      {
        id: "distribuicao", name: "Distribution", kind: "produto",
        problem: "Is the gap at the DC, in replenishment or at the pharmacy?",
        input: "DC, the stores it supplies and product.",
        action: "Crosses stock at the DC with availability at the stores, through the confirmed supply link.",
        output: "The DC and the stores side by side, with coverage in days.",
        decision: "Where to check the order, replenishment or reallocation.",
        limit: "Geographic proximity is not a supply link. The pattern is a hypothesis; the cause requires investigation.",
        href: "/solucoes/supply-distribuicao"
      },
      {
        id: "mercado", name: "Market and competition", kind: "produto",
        problem: "Did I lose share or lose sales?",
        input: "Basket of products, universe of stores and window.",
        action: "Defines the basket and the comparable stores and compares your product with the category.",
        output: "Evolution of your product and of the category in the same stores, and where only the competitor has stock.",
        decision: "Where to win back space.",
        limit: "Sales are estimated. Competitor data appears aggregated and respects usage rights.",
        href: "/solucoes/inteligencia-pricing"
      },
      {
        id: "insights", name: "Insights", kind: "interface",
        problem: "I want the answer without building a dashboard.",
        input: "A question in plain English.",
        action: "Ask Dinn Insights. The answer brings the scope, the source and the method.",
        output: "A number with scope, date, method and nature (observed or estimated).",
        decision: "Which analysis to open next.",
        limit: "It answers within the scope and the capabilities of the plan. Hypotheses appear as hypotheses.",
        href: "/plataforma"
      },
      {
        id: "priorizacao", name: "Prioritization and feedback", kind: "produto",
        problem: "With so many signals, where does the team start?",
        input: "Signals from the scope and the team's portfolio.",
        action: "Orders the list by signal, assigns the owner and records what the team found.",
        output: "A list with signal, date, owner and the record of the outcome.",
        decision: "Who checks what, and what to follow up afterward.",
        limit: "Dinn prepares the list. The schedule and the decision are the team's.",
        href: "/solucoes/trade-kam-campo"
      },
      {
        id: "exportacoes", name: "Exports, API and MCP", kind: "integracao",
        problem: "I need the same information outside the platform.",
        input: "The scope and the authorized destination.",
        action: "Choose the modality: file, technical consumption or authorized AI.",
        output: "The same reading in a file, in the API or in the company's AI, with source and date.",
        decision: "Where your team starts using the data.",
        limit: "Each modality depends on plan, authorization and scope. MCP is for querying, read-only.",
        href: "/integracoes"
      },
      {
        id: "alertas", name: "Alerts and routines", kind: "interface",
        problem: "I want to know when something changes, without opening the platform.",
        input: "The rule, the channel and the frequency.",
        action: "Defines the tracking rule and the channel where the notice arrives.",
        output: "A notice with the signal, the scope and the date.",
        decision: "When to act or revisit the scope.",
        limit: "They follow the triggers and channels enabled in the scope. Your AI's automations are configured by you.",
        href: "/plataforma"
      },
      {
        id: "conecta", name: "Dinn Conecta", kind: "integracao",
        problem: "Every analysis starts by putting everything together again.",
        input: "Authorized sources: market, internal data and pharmacies.",
        action: "Dinn gathers, standardizes product, store and region and keeps the path up to date.",
        output: "Prepared pharma data in your BI, Copilot or project.",
        decision: "The question your team wants to answer, without rebuilding the base.",
        limit: "Sources and integrations depend on access, license and scope. It does not replace licenses or execute actions on its own.",
        href: "/produtos/conecta"
      },
      {
        id: "projetos", name: "Research and special projects", kind: "servico",
        problem: "My question calls for a scope of its own.",
        input: "The question, the universe and the available sources.",
        action: "We assess feasibility and scope with you.",
        output: "Report, processed database or flow to the BI, as agreed.",
        decision: "The decision that motivated the project.",
        limit: "Subject to feasibility and scope assessment, with source rights preserved.",
        href: "/pesquisas"
      }
    ],
    cta: {
      title: "Which feature answers your question?",
      desc: "We will validate products, chains, regions and the decision your team wants to improve.",
      button: "Talk about your operation's scope"
    }
  },

  // ── Dinn Conecta (base: preview 08, dinn-data-preview) ────────────────────
  conecta: {
    meta: {
      title: "Dinn Conecta | Pharma data in your team's environment",
      description: "Dinn connects market, internal data and pharmacies, prepares and updates the pharma context and delivers it to your company's BI, Copilot and projects."
    },
    hero: {
      eyebrow: "For the pharmaceutical industry",
      title: "Pharma data. *Working together.*",
      lead: "Market, internal data and pharmacies with the context your BI, Copilot and projects need.",
      cta: "See how it connects",
      cta2: "Talk about my data flow"
    },
    nav: { how: "How it works", apps: "Applications", roles: "Responsibilities", faq: "Questions" },
    flow: {
      sourcesLabel: "Your sources",
      sources: [
        { name: "Market", sub: "IQVIA · Close-Up" },
        { name: "Your company", sub: "Sales · ERP · lake" },
        { name: "Pharmacies", sub: "Dinn context" }
      ],
      hubLabel: "Dinn context",
      hub: "Conecta.",
      hubSub: "Gathers · organizes · updates",
      destinations: [
        { name: "Your BI", sub: "Analyses and dashboards" },
        { name: "Your Copilot", sub: "Team questions" },
        { name: "Your project", sub: "Your tools" }
      ],
      note: "Your project stays yours. Dinn takes care of the connection. Sources and integrations depend on access, license and scope."
    },
    pain: {
      eyebrow: "Less repeated work",
      title: "Does every analysis start by *putting everything together again?*",
      intro: "The data already exists. The work is in getting one source to talk to another.",
      items: [
        { n: "01 · Gather", title: "Scattered files.", text: "Market in one database. Sales in the ERP. Availability in another source." },
        { n: "02 · Check", title: "Different scopes.", text: "Names of products, chains and periods that need to be matched." },
        { n: "03 · Maintain", title: "Everything changes again.", text: "The next update arrives. And someone has to look after that path." }
      ],
      closing: "Dinn prepares and maintains the data. Your team uses it."
    },
    how: {
      eyebrow: "How it works",
      title: "From the source to your environment, *in three moves*",
      steps: [
        { title: "Gathers", text: "Connects market, internal data and pharmacies, depending on access, license and scope." },
        { title: "Organizes", text: "Standardizes product (EAN), store (CNPJ), chain, territory and period, with pharma knowledge." },
        { title: "Updates", text: "Maintains the quality and refresh of the path and delivers where your team works." }
      ],
      identities: ["Product · EAN", "Store · chain", "Territory", "Period"]
    },
    ai: {
      eyebrow: "Context for AI",
      title: "In the age of AI, *context matters.*",
      text: "Your team is already being asked to connect internal databases and make that data available to the company's agents. That project stays yours. Dinn steps in to organize, clean and standardize the path with pharma knowledge.",
      layers: [
        { label: "Stays with you", text: "Your data · Your infrastructure · Your governance" },
        { label: "Dinn layer", text: "Cleaning · Standardization · Pharma context" },
        { label: "Ready for your environment", text: "BI · Copilot · Internal agents" }
      ],
      destinationsTitle: "Take pharma context to",
      destinations: ["Copilot", "ChatGPT", "Claude", "Gemini", "Your agents"],
      destinationsNote: "The names show where the context can be used. Access, security and delivery path depend on your environment and the agreed scope; they are not ready-made connectors for each tool."
    },
    apps: {
      eyebrow: "In the pharma routine",
      title: "From the connection *to your team's question.*",
      intro: "Choose an application.",
      fictional: "Example with fictional data. It does not represent a customer result.",
      nextLabel: "Next conversation",
      basisLabel: "Basis",
      askLabel: "A question in your Copilot",
      items: [
        {
          id: "disponibilidade", tab: "Availability", area: "Trade and sales", kind: "table",
          title: "Where to investigate the product shortage?",
          text: "Cross internal sales with availability at pharmacies. Prioritize chains and regions to talk about supply.",
          tableTitle: "Product A · last week",
          columns: ["Region", "Internal sales", "At pharmacies"],
          rows: [["South", "Declining", "Check shortage"], ["Southeast", "Stable", "No change"], ["Central-West", "Rising", "Monitor"]],
          next: "Investigate supply in the South region with the chain.",
          basis: "Internal sales + Dinn availability.",
          caveat: ""
        },
        {
          id: "lancamentos", tab: "Launches", area: "Brand management", kind: "table",
          title: "Did the launch reach the planned stores?",
          text: "Compare the launch plan with the signals at pharmacies. Take a list of what needs to be checked to the field.",
          tableTitle: "Launch tracking · Product A",
          columns: ["Chain", "Launch plan", "Dinn availability"],
          rows: [["Chain A", "Planned stores", "Signal found"], ["Chain B", "Planned stores", "Check with the field"], ["Chain C", "Planned stores", "Awaiting update"]],
          next: "Check the Chain B stores before revisiting the plan.",
          basis: "Launch plan + Dinn availability.",
          caveat: "Absence of a signal does not prove lack of stock."
        },
        {
          id: "copilot", tab: "Copilot", area: "Data and AI", kind: "ask",
          title: "Can your Copilot use pharma data?",
          text: "Take internal data, market and pharmacy context to the company's AI. With clear source, refresh and limits.",
          inputs: ["Business data", "Context for the AI"],
          question: "Where is it worth investigating the drop in Product A?",
          answer: "Start with the South region. Cross internal sales with the flagged stores and check the order history.",
          next: "",
          basis: "",
          caveat: "The answer helps investigate. It does not presume the cause."
        }
      ]
    },
    roles: {
      eyebrow: "Together with your team",
      title: "The project is yours. *Data operations can stay with Dinn.*",
      text: "From implementation to follow-up. Without replacing your team or your tools.",
      yours: {
        label: "Your team",
        title: "Priorities, tools and access.",
        text: "Decides what needs to be answered and how to use the data.",
        items: ["Sets the priorities and the question to answer", "Chooses the tools and who has access", "Keeps internal data, infrastructure and governance of your environment"]
      },
      dinn: {
        label: "Dinn Conecta",
        title: "Sources, quality and refresh.",
        text: "Prepares the data and looks after the connections within the agreed scope.",
        items: ["Prepares the sources and standardizes product, store and region", "Looks after quality and refresh", "Operates the connections within the contracted scope"]
      },
      note: "Dinn is responsible for the controls of its layer: access, permissions and a record of what it delivers. Internal data, infrastructure and governance of your environment stay with you."
    },
    start: {
      eyebrow: "How to start",
      title: "One flow at a time",
      steps: [
        { title: "Define a decision", text: "The question your team wants to answer." },
        { title: "Choose sources and destination", text: "Two or three sources and one destination: BI, Copilot or a project." },
        { title: "Deploy a first flow", text: "A bounded flow, with clear scope and responsibilities." },
        { title: "Evaluate usage and expand", text: "With the flow in use, expand sources and destinations." }
      ],
      note: "Implementation, recurring operation, usage capacity and additional services are contracted separately.",
      plansLink: "See plans and services"
    },
    mcp: {
      title: "Conecta and MCP: what is the difference?",
      text: "One is for querying; the other, for preparing and operating the data.",
      rows: [
        { label: "MCP", text: "Interface: lets an authorized AI query Dinn data, with read-only access." },
        { label: "Dinn Conecta", text: "Layer for connecting, preparing and operating the data that reaches your environment." }
      ],
      not: "Conecta is not a CRM or a task manager, and it does not trigger actions on its own: it brings context to whoever executes.",
      link: "See integrations and API"
    },
    faq: {
      title: "Before you start: a few answers",
      items: [
        { question: "Can we use our IQVIA and Close-Up licenses?", answer: "Use depends on the supplier's permissions and on access authorized by your company. Dinn does not replace the license. We validate sources and rights before defining the integration." },
        { question: "Does it work with our BI, data lake or Copilot?", answer: "The idea is to work with the environment you already have. The delivery path is defined with your technical team, according to security, tools and feasibility." },
        { question: "Does Dinn also implement the solution?", answer: "Yes. The offering can combine implementation and ongoing operation. We start with a flow defined with your team, with clear scope and responsibilities." },
        { question: "Is Conecta the same thing as MCP?", answer: "No. MCP is an interface for an authorized AI to query the data. Conecta is the layer that gathers, organizes and updates that data. The two can work together." }
      ]
    },
    cta: {
      title: "Which pharma routine do you want to simplify?",
      desc: "Tell us the source, the destination, the frequency and the decision. We start with one flow.",
      button: "Talk about my data flow",
      secondary: "See the applications"
    }
  },

  // ── Integrations and API ──────────────────────────────────────────────────
  integrations: {
    meta: {
      title: "Integrations and API | Dinn",
      description: "API, files, BI, lake and customer AI: how to consume Dinn data in the environment your team already uses, with clear scope, responsibilities and limits."
    },
    hero: {
      eyebrow: "Integrations and API",
      title: "Dinn data in the environment *your team already uses.*",
      lead: "Your team can consume the intelligence on the platform or evaluate a data delivery to your internal systems. With authorized sources and a defined scope, Dinn prepares product, store, chain, region and period information to support your analyses and routines."
    },
    flow: {
      title: "From signal to dashboard in your BI",
      steps: [
        { title: "Dinn signal + authorized internal base", text: "Channel availability, sell-through and price, with the data from your company that you authorize." },
        { title: "Identification and standardization", text: "Product, store, chain and region on the same key." },
        { title: "Agreed delivery", text: "API, file or table at the agreed destination, at the defined frequency." },
        { title: "Dashboard in the customer's BI", text: "Your team builds and maintains the view it needs." }
      ],
      dinn: { title: "Dinn delivers", items: ["The data identified and standardized", "Delivery in the agreed format, destination and frequency", "Documentation and follow-up within the scope"] },
      client: { title: "The customer configures", items: ["The destination and access in your environment", "The model and the dashboard in the BI", "Governance of internal data"] },
      caution: "The example does not assume a native connector for your tool: the delivery path is defined with your technical team."
    },
    modalities: {
      title: "Five ways to consume",
      intro: "Choose by the decision you want to support, not by the name of the technology.",
      knowLabel: "What you need to understand",
      items: [
        {
          id: "api", name: "API",
          text: "Consume data in internal systems, with defined authentication, scope and limits.",
          know: ["Which data and fields, with filters and granularity", "Refresh, authentication and permissions", "Usage limits, versioning and failure handling", "Sample response and documentation"]
        },
        {
          id: "arquivos", name: "Governed files",
          text: "Receive files in the agreed format, destination and frequency.",
          know: ["Formats, frequency and authorized destination", "Incremental or full refresh, and the history", "Security and responsibilities of each side", "The delivery mechanism is defined in the scope"]
        },
        {
          id: "bi", name: "BI, lake or warehouse",
          text: "Receive the data in your company's analytical environment.",
          know: ["How to receive and relate the data", "Product, store and chain keys", "Sample model", "Who builds and maintains the dashboard"]
        },
        {
          id: "mcp", name: "MCP",
          text: "Let an authorized AI query Dinn data, read-only.",
          know: ["Query by an authorized AI, with read-only access", "Permissions are preserved", "We state the environments and modalities tested", "A protocol is not the same as approval of each tool"]
        },
        {
          id: "conecta", name: "Dinn Conecta and data projects",
          text: "Hand data preparation and operation over to Dinn.",
          know: ["Sources, standardization, quality and operation contracted", "Scope and responsibilities of each side", "Starts with a bounded flow"],
          href: "/produtos/conecta", hrefLabel: "See Dinn Conecta"
        }
      ]
    },
    status: {
      title: "How each modality is contracted",
      text: "Having a technical interface, having contracted access and being part of the standard catalog are different situations. In each conversation we make clear which one applies to what you need.",
      plansLink: "See plans and add-ons"
    },
    questions: {
      title: "Four questions to get started",
      items: [
        { label: "Source", text: "Where does the data you want to combine come from?" },
        { label: "Destination", text: "Where will your team use it: BI, lake, internal system or AI?" },
        { label: "Frequency", text: "How often does the information need to arrive?" },
        { label: "Decision", text: "What decision will this support?" }
      ]
    },
    faq: {
      title: "Questions about integration",
      items: [
        { question: "Does Dinn integrate with any system?", answer: "We do not promise “any system”. We define with your technical team the delivery path that is possible, according to security, tools and feasibility." },
        { question: "Do I need IT to get started?", answer: "Reading on the platform does not require integration. For API, files or BI, your technical team defines the destination and access; Dinn supports within the scope." },
        { question: "Is integration immediate?", answer: "It depends on the scope and the prerequisites. Implementation takes up to 30 days after prerequisites and scope are agreed." }
      ]
    },
    cta: {
      title: "Tell us about your data flow",
      desc: "Source, destination, frequency and the decision it supports: with that, we assess the delivery path.",
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
      title: "Choose the scope that makes sense *for your operation.*",
      lead: "Compare the ways to contract Dinn and the features that can make up your operation. The proposal considers products, coverage, users and integration needs."
    },
    tiers: [
      { name: "Starter", text: "Start with a focused scope." },
      { name: "Essential", text: "Expand the tracking of products and chains." },
      { name: "Professional", text: "Serve a larger operation, with more history and data consumption." }
    ],
    compare: {
      title: "Compare the plans",
      intro: "The base is the same daily reading. What changes is the size of the scope, the history and what comes with the plan.",
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
      note: "No public prices: the proposal considers products, coverage, users and integration needs."
    },
    addons: {
      title: "Add-ons and inclusions",
      intro: "What can make up the plan, and in which one it already comes included.",
      columns: ["Feature", "Starter", "Essential", "Professional"],
      labels: { i: "Included", c: "Add-on", a: "On request" },
      legend: "An add-on is an additional purchase. On request means we assess the terms with you, not that the feature is impossible.",
      rows: [
        { name: "Competitive intelligence", text: "Compare a basket of products and chains, with a defined universe and method.", tiers: ["a", "c", "c"] },
        { name: "AI forecast", text: "Explore projections and scenarios with explicit assumptions, horizon and uncertainty.", tiers: ["a", "c", "c"] },
        { name: "Additional or custom dashboards", text: "Adapt analyses to specific questions, beyond the included dashboards.", tiers: ["a", "c", "c"] },
        { name: "Real-time stock", text: "Query current availability at compatible stores. On-demand query and continuous refresh have different terms.", tiers: ["a", "c", "c"] },
        { name: "Locator for customer service", text: "Locate stores by proximity and check availability to guide the service.", tiers: ["a", "c", "c"] },
        { name: "Alerts by rules and channels", text: "Track signals and exceptions through rules and channels defined in the scope.", tiers: ["a", "c", "c"] },
        { name: "Price monitoring", text: "Compare prices in the contracted scope, with the source and the time of the reading.", tiers: ["c", "c", "c"] },
        { name: "Sell-through estimate", text: "Investigate estimated movement, without confusing it with confirmed sales.", tiers: ["a", "c", "i"] },
        { name: "Web assistant", text: "Ask questions about the contracted scope, with source and limits in the answer.", tiers: ["a", "c", "c"] },
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
        { title: "Implementation in up to 30 days", text: "Counted after prerequisites and scope are agreed. The total timeline also takes into account your company's procurement and approval steps." }
      ]
    },
    faq: {
      title: "Questions about contracting",
      items: [
        { question: "Are prices on the site?", answer: "We do not publish prices. The proposal considers products, coverage, users and integration needs, and is put together after we validate your scope." },
        { question: "Can I start with a smaller plan and grow?", answer: "Yes. Additional users and SKUs, chains and add-ons can be contracted as the operation grows." },
        { question: "Are an add-on and a service the same thing?", answer: "No. An add-on is a feature that is added to the plan. A service, such as implementation, research or a data project, is work contracted under scope." },
        { question: "Is there a minimum commitment?", answer: "Yes, and it varies by plan, as the comparison shows. The final terms are in the proposal." }
      ]
    },
    cta: {
      title: "Define the plan for your operation",
      desc: "Tell us the products, the chains and the decision you want to improve. We build the proposal from the validated scope.",
      button: "Define the plan for my operation"
    }
  },

  // ── Coverage ──────────────────────────────────────────────────────────────
  coverage: {
    meta: {
      title: "Coverage | Dinn",
      description: "Learn where Dinn can support your operation: coverage by country, chain, product and reading type, with refresh and limits."
    },
    hero: {
      eyebrow: "Coverage",
      title: "Learn where Dinn can *support your operation.*",
      lead: "See coverage by country, chain, product and reading type. Before starting, we validate the scope that matters to your team."
    },
    dims: {
      title: "How we describe coverage",
      intro: "Each dimension is reported separately, so that no one adds up overlapping bases or mistakes a registry for usable data.",
      items: [
        { title: "Country", text: "Countries with validated operation, available under project and under study, without mixing them." },
        { title: "Chains and banners", text: "Monitored chains, with name and logo used only when authorized. Monitored does not mean partner." },
        { title: "Stores", text: "Unique stores and the eligible universe. A registry is not usable data: we count what has a reading." },
        { title: "Product and category", text: "Coverage by SKU and category, with location and period; digitized and independent pharmacies, when applicable." },
        { title: "Nature of the reading", text: "Direct observation, estimate and real time, on separate lines." },
        { title: "Refresh and gaps", text: "Frequency, eligible stores and sources, known gaps and the date of the last review." }
      ]
    },
    nature: {
      title: "Observed, estimated and real time",
      intro: "The same store can have more than one reading. Each one is counted separately.",
      columns: ["Reading", "What it covers", "Refresh"],
      rows: [
        ["Observed (D-1)", "What the source reported, by store, on the previous day.", "Daily base, with the date of each reading."],
        ["Estimated", "Stores with no direct response, from comparable stores and history, with a confidence level.", "At the base update."],
        ["Real time", "Compatible stores, by on-demand query.", "At the moment of the query, one store at a time."]
      ]
    },
    status: {
      title: "Where Dinn operates",
      intro: "The three groups are kept separate. The list comes from the coverage registry, with the date of the last review.",
      reviewed: "Last review",
      empty: "The current list is presented when your scope is validated.",
      groups: [
        { key: "validated", title: "Validated operation", text: "Countries and chains with a reading in use." },
        { key: "project", title: "Available under project", text: "Served under project and feasibility assessment." },
        { key: "study", title: "Under study", text: "Mapped, not yet a commercial offering." }
      ]
    },
    validate: {
      title: "Validate my coverage",
      text: "Tell us the country, the products and the chains or regions that matter. We return what we cover today for that scope, by reading type.",
      items: ["Country", "Products or categories", "Chains or regions"],
      button: "Validate my coverage"
    },
    links: { locator: "Real-time stock", plans: "Plans and add-ons", trust: "How we handle source and limits" }
  },

  // ── Research and special projects ─────────────────────────────────────────
  research: {
    meta: {
      title: "Research and special projects | Dinn",
      description: "On-demand studies, recurring reports, new sources and data preparation and integration projects, with method and deliverable defined together."
    },
    hero: {
      eyebrow: "Research and special projects",
      title: "A specific question may need *a scope of its own.*",
      lead: "We evaluate on-demand studies and projects with additional sources to answer a concrete decision in the pharmaceutical channel. The work can combine Dinn data, authorized sources and internal information, with method and deliverable defined together."
    },
    cards: {
      title: "Four modalities",
      deliverLabel: "Deliverable to be defined in the proposal",
      items: [
        { tag: "On-demand research", title: "A specific decision, a study with its own scope.", deliver: "Question, universe, method and report or analyzed database." },
        { tag: "Recurring reports", title: "Track the same question over time.", deliver: "Indicators, frequency, owners and comparability review." },
        { tag: "Custom sources", title: "Evaluate new sources for your project.", deliver: "Access and rights, feasibility, quality, cost and refresh limits." },
        { tag: "Preparation and integration", title: "Connect the scope to the environment where your team works.", deliver: "Sources, standardization, destination, operation and acceptance criterion, as per the Conecta proposal." }
      ]
    },
    define: {
      title: "What we agree on in each project",
      items: ["The question", "The universe", "The sources", "The method", "The deliverable", "The agreed timeline", "The acceptance criterion"]
    },
    deliveries: {
      title: "Possible deliverables",
      intro: "Subject to the feasibility of each project.",
      items: ["Report", "Processed database", "Territorial breakdown", "Category analysis", "Dashboard", "Flow to the BI"]
    },
    limits: {
      title: "Worth knowing",
      items: [
        "Each project goes through a feasibility and scope assessment.",
        "We do not announce a fixed timeline or unlimited execution: the timeline is agreed per project.",
        "We do not collect from just any source. Access and rights are validated first.",
        "Authorized access to audit, ERP, CRM or partner data does not imply a right of redistribution."
      ]
    },
    cta: {
      title: "Describe your project",
      desc: "Tell us the objective, the scope, the available sources and the desired format.",
      button: "Describe my project"
    }
  },

  // ── Comparisons ───────────────────────────────────────────────────────────
  compare: {
    meta: {
      title: "Comparisons | Dinn",
      description: "Which layer is missing between your data and the decision? How Dinn relates to audits, CRM, BI and lake, collection and integration, and general-purpose AI."
    },
    hero: {
      eyebrow: "Comparisons",
      title: "Which layer is missing between your data *and the decision?*",
      lead: "Dinn does not replace what you already use. See the role of each approach and where the channel's specialized intelligence comes in."
    },
    table: {
      columns: ["Approach", "Role", "How it relates to Dinn"],
      rows: [
        ["Market audits", "Planning and market readings, depending on the contracted product.", "They can complement granular signals. We confirm product and source before stating frequency or granularity."],
        ["CRM and execution", "Record of relationships, visits, orders and routines.", "Dinn can provide context to the CRM. It does not write to it on its own or replace it."],
        ["BI and lake", "Store, combine and visualize information.", "The customer can consume Dinn data in its own environment."],
        ["Generic collection and integration", "Obtain and transport data from sources.", "The differentiator is identity, pharmaceutical context, quality and recurring use."],
        ["General-purpose AI", "Interpret and produce outputs within the available context.", "Permissioned data and specialized context can be queried through compatible interfaces, such as MCP."]
      ]
    },
    value: {
      title: "The value does not end with obtaining the data",
      text: "Dinn organizes channel identities, qualifies signals and delivers context for recurring decisions. Connection, validation, history, interpretation and delivery are part of the same path."
    },
    people: {
      title: "Adapted to your scope, with people",
      text: "Your team takes part in defining the scope and the evaluation criteria. Implementation agrees on owners, deliverables and follow-up.",
      items: [
        { title: "What is configured", text: "Scope of products, chains and regions, filters and views, and the form of delivery." },
        { title: "What requires a project", text: "New sources, custom integrations and specific studies, with scope defined in contract." }
      ]
    },
    cta: {
      title: "Want to see where Dinn fits in your operation?",
      desc: "We will validate products, chains, regions and the decision your team wants to improve.",
      button: "Talk about your operation's scope"
    }
  },

  // ── About Dinn ────────────────────────────────────────────────────────────
  about: {
    meta: {
      title: "About Dinn | Commercial intelligence for the pharmaceutical channel",
      description: "Dinn develops commercial intelligence specialized in the pharmaceutical channel, with a presence in Joinville, Brazil, and Valencia, Spain."
    },
    hero: {
      eyebrow: "Dinn",
      title: "Commercial intelligence *specialized in the pharmaceutical channel*",
      lead: "Dinn develops commercial intelligence specialized in the pharmaceutical channel, with a presence in Joinville, Brazil, and Valencia, Spain."
    },
    what: {
      title: "What we do",
      text: "We organize signals of availability, sell-through, price and channel coverage, show the source, refresh and limits of each piece of information, and help commercial teams decide where to act first."
    },
    where: {
      title: "Where we are",
      items: [
        { city: "Joinville", country: "Santa Catarina, Brazil", text: "Headquarters of Dinn Tecnologia Ltda." },
        { city: "Valencia", country: "Spain", text: "Team presence in Spain." }
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
        { title: "Sales contact", text: "Tell us the decision you want to improve and get a reply from a person on the team.", href: "/contato", cta: "Talk to Dinn" },
        { title: "Support", text: "Guidance on logging a problem and reaching the contracted channel.", href: "/suporte", cta: "Open support" },
        { title: "Privacy and terms", text: "How we handle personal data and the conditions of use.", href: "/politicas-de-privacidade", cta: "Read the policy" }
      ]
    },
    trust: {
      title: "How we handle source, date and limits",
      text: "Each signal says where it came from, when it was observed and how far it goes. That is what lets you act without being misled.",
      cta: "See trust and controls"
    }
  },

  // ── Customers ─────────────────────────────────────────────────────────────
  clients: {
    meta: {
      title: "Customers and cases | Dinn",
      description: "Companies that work with Dinn and stories of use from signal to action, with context, validation and learning."
    },
    hero: {
      eyebrow: "Customers",
      title: "Who works with *Dinn*, and what they did with it",
      lead: "Pharmaceutical-sector companies and stories of use, told from signal to learning."
    },
    logos: {
      title: "Companies that work with Dinn",
      note: "Logos shown with authorization. Each relationship (customer, project or partnership) is handled case by case."
    },
    cases: {
      title: "Stories of use",
      intro: "Each case tells the situation, the signal, how it was validated, the decision and the learning.",
      all: "See all cases"
    },
    voices: { title: "What users say" }
  },

  // ── Trust: new blocks ─────────────────────────────────────────────────────
  trustMore: {
    accuracy: {
      title: "Quality and accuracy",
      text: "Quality is tracked by data type and scope. Before the evaluation, we present the methodology, coverage and validation results applicable to your case.",
      kindsTitle: "We measure each thing separately",
      kinds: ["Availability", "Quantity", "Price", "Sales estimate"],
      note: "A rate is only presented with the definition of a hit, the method, the sample, the window, the universe and the source of truth."
    },
    seals: {
      title: "Seals, approvals and certifications",
      text: "We show what can be proven: verifiable controls and availability for evaluation. Seals and certificates only appear with the document, the entity, the scope and the validity.",
      rows: [
        { label: "Customer logos", text: "They show authorized relationships. They are not certifications." },
        { label: "Customer approval", text: "Outcome of your company's IT and compliance process, conducted together with Dinn." },
        { label: "Independent certification", text: "Only presented with the document, the entity, the scope and the validity." }
      ]
    },
    docs: {
      title: "Technical documentation on request",
      text: "IT, security and procurement receive the technical material during the evaluation process. Sensitive documents are provided on request.",
      items: ["Authentication and permissions", "Isolation between customers", "Hosting", "Data retention", "Applicable suppliers and subprocessors", "Incident management", "Integration conditions"],
      cta: "Request the documentation"
    }
  }
};
