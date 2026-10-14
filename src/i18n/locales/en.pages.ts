// Texts for the site's inner pages (platform, solutions by area, trust,
// customers, resources) and for the new home sections (areas and content).
// English mirror of pt.pages.ts: same keys, same order, same structure.
// Editorial rule: every statement says what Dinn observes, what it estimates,
// what it helps interpret and what depends on customer validation.

export const pagesEn = {
  areas: {
    eyebrow: "For your area",
    title: "Start from *your team's* problem",
    intro: "Each area arrives with a different question. Pick yours and see supported decisions, an example and the limits of the reading.",
    open: "See Dinn for this area",
    questionPrefix: "The question:"
  },

  contentTeaser: {
    eyebrow: "Resources",
    title: "For those not yet ready for a demo",
    items: [
      {
        type: "Guide",
        title: "Absence, stock-out, assortment and sell-through: what's the difference?",
        desc: "The four readings most often confused in the channel, and what to check before acting.",
        href: "/recursos/ausencia-ruptura-sortimento-giro"
      },
      {
        type: "Demonstration case",
        title: "From a stock-out at six stores to the week's verification queue",
        desc: "The full flow, from signal to learning, with example values.",
        href: "/clientes#caso"
      },
      {
        type: "Blog",
        title: "Analysis and articles on the pharmaceutical channel",
        desc: "Stock-outs, commercial execution and data intelligence in pharma.",
        href: "/blog"
      }
    ]
  },

  pageCta: {
    title: "See how this works with your products",
    desc: "In a demo, Dinn shows the reading with your portfolio, your territory and your regions.",
    button: "Request a demo",
    secondary: "See all solutions"
  },

  solutions: {
    meta: {
      title: "Solutions by area | Dinn",
      description: "Dinn for Intelligence and Pricing, Trade and field, Supply and distribution, Customer service, Marketing and launches, and IT and governance: supported decisions, examples and limits."
    },
    index: {
      eyebrow: "Solutions",
      title: "One reading of the channel, *translated for each area*",
      lead: "The signal base is the same. What changes is the question, the decision and what each area needs to see before acting."
    },
    page: {
      eyebrow: "Solutions",
      back: "All solutions",
      questionLabel: "The question that brings your area here",
      decisionsLabel: "Decisions Dinn supports",
      exampleLabel: "An example, step by step",
      exampleNote: "Illustrative example, with fictional values.",
      limitsLabel: "Limits of the reading",
      useCasesLabel: "Concrete situations for this area",
      useCaseOpen: "See on the home page",
      trustCta: "How we handle source, date and confidence",
      otherLabel: "Other areas"
    },
    items: [
      {
        slug: "inteligencia-pricing",
        name: "Intelligence & Pricing",
        short: "Understand movements in availability, price, sell-through and competition.",
        question: "Where does it come from, and how far can I trust it?",
        title: "Price, sell-through and competitor movements, *with the source in view*",
        lead: "For those who need to explain a number before taking it further: each reading carries source, date, coverage and limit.",
        decisions: [
          "Tell a one-off change from a movement that persists over time.",
          "Distinguish a drop in share from a drop in sales, in the same stores.",
          "Complement consolidated market data when the decision calls for more granularity and operational context."
        ],
        example: {
          title: "Your company grew 6% in the same stores; the category, 11%",
          steps: [
            "Signal: share falls in the region.",
            "Validation: only comparable stores are included, present in both time windows.",
            "Reading: the drop comes from other products growing more, not from sales shrinking.",
            "Next step: look at the stores where only the competitor appears with stock."
          ]
        },
        limits: [
          "Sales are estimated from stock movement, not from audited sell-out.",
          "Competitor data appears aggregated.",
          "Dinn complements market audits; it does not replace them."
        ],
        useCases: ["concorrencia", "demanda"]
      },
      {
        slug: "trade-kam-campo",
        name: "Trade, KAM & Field",
        short: "Prioritize accounts, territories and conversations with the latest context.",
        question: "Who do I prioritize and what do I bring to the conversation?",
        title: "A queue of stores and accounts, *with what to check at each one*",
        lead: "Instead of a dashboard to interpret, a prioritized list with the signal, the date and the question to answer.",
        decisions: [
          "Start the week with the stores that weigh most in the scope's stock-outs.",
          "Bring the chain store-level evidence, with dates, instead of a general impression.",
          "Review the same scope after the action and record the feedback."
        ],
        example: {
          title: "6 of the portfolio's 40 stores concentrate 70% of the signal",
          steps: [
            "Signal: persistent stock-out at portfolio stores, over the last week.",
            "Validation: level calculated as days without stock ÷ days observed over the last 30 days.",
            "Queue: the stores in order, with what to check at each one (pending order? off the shelf?).",
            "Feedback: what the team finds comes back and reorders the queue."
          ]
        },
        limits: [
          "Dinn prepares the list; your team sets the schedule.",
          "Nothing is written to the CRM on its own: the reading is for preparing the visit.",
          "Stores that never sold the product are left out, so as not to inflate the stock-out."
        ],
        useCases: ["campo", "medico"]
      },
      {
        slug: "supply-distribuicao",
        name: "Supply & Distribution",
        short: "Investigate coverage, availability and possible supply constraints.",
        question: "Where might there be a coverage or supply problem?",
        title: "Is the gap at the DC, in replenishment or at the pharmacy? *See both sides.*",
        lead: "The reading crosses the distributor's stock with availability at the region's pharmacies, always with explicit causal caveats.",
        decisions: [
          "Separate a shortage at the source from a replenishment failure.",
          "Bring the order forward when DC coverage falls.",
          "Assess reallocation where there is stalled stock near stores that are out."
        ],
        example: {
          title: "A DC with stock and pharmacies without the product",
          steps: [
            "Signal: 38% of the region's pharmacies are out of the product.",
            "Validation: DC coverage = DC stock ÷ the region's estimated daily sales.",
            "Reading: the pattern points to a distribution or replenishment breakdown, not a shortage at the source.",
            "Before concluding: confirm pending orders at the affected chains."
          ]
        },
        limits: [
          "Stock at the DC does not prove stock at the pharmacy: the reading crosses both ends.",
          "The pattern is a hypothesis; the cause requires investigation.",
          "Observed movement is not the same as confirmed sales."
        ],
        useCases: ["distribuicao", "parado"]
      },
      {
        slug: "sac-customer-experience",
        name: "Customer Service & Customer Experience",
        short: "Guide consumers clearly on availability and proximity.",
        question: "How do I guide someone without misleading them?",
        title: "Where the consumer has a good chance of finding the product, *and how reliably*",
        lead: "Availability, proximity and freshness on the same screen, with the source and date of each indication.",
        decisions: [
          "Point to the nearby pharmacy most likely to have the product.",
          "Know whether the information is observed or estimated before guiding.",
          "Show trade where demand is not finding product."
        ],
        example: {
          title: "The five pharmacies closest to the consumer",
          steps: [
            "Input: the consumer's address.",
            "Reading: observed stock (D-1) or stock estimated from comparable stores, with the confidence.",
            "Guidance: availability and proximity, not the lowest price.",
            "Pattern: two stores without the product for a week become a replenishment topic."
          ]
        },
        limits: [
          "Refresh is D-1; at eligible stores, there is an on-demand availability check.",
          "A chance of stock is not a guarantee of stock, and the guidance should say so.",
          "Coverage varies by chain and by source."
        ],
        useCases: ["sac"]
      },
      {
        slug: "marketing-lancamentos",
        name: "Marketing & Launches",
        short: "Track presence, coverage growth and launch execution signals.",
        question: "Is execution progressing where it should?",
        title: "Week by week, *where the launch has already arrived* and where it stalled",
        lead: "Presence by chain and region over time, compared with the plan your team set.",
        decisions: [
          "See where the launch accelerated and where it remains below expectations.",
          "Separate a sell-in problem from a replenishment problem.",
          "Compare progress by cohort and by channel against the defined target."
        ],
        example: {
          title: "Six weeks after launch",
          steps: [
            "Signal: the product appears at 54% of the monitored pharmacies.",
            "Validation: presence = pharmacies with stock ÷ monitored pharmacies in the scope.",
            "Reading: it accelerated at large chains and remains below 20% at independents.",
            "Next question: has the DC already received the product in the regions where it hasn't arrived?"
          ]
        },
        limits: [
          "Week 1 starts on the launch date set by your team.",
          "The split by channel follows what each source allows to be identified.",
          "Presence at pharmacies is not sell-out."
        ],
        useCases: ["lancamento"]
      },
      {
        slug: "ti-dados-governanca",
        name: "IT, Data & Governance",
        short: "Integrate signals with traceability, access control and explicit limits.",
        question: "How does it integrate, protect and govern?",
        title: "Signals that reach your environment, *with traceability and access control*",
        lead: "API, BI and the customer's AI query the same base, with the authorized scope and the origin of each data point preserved.",
        decisions: [
          "Choose how to consume: platform, file, API, BI or the customer's AI.",
          "Define who accesses what, with two-factor verification and SSO available.",
          "Keep internal data, infrastructure and governance under the customer's control."
        ],
        example: {
          title: "A question asked in the customer's own AI",
          steps: [
            "Input: the team asks in ChatGPT, Claude or Copilot.",
            "Access: the authorized AI queries Dinn through MCP, read-only.",
            "Answer: scope, period, source and limits come with the number.",
            "Governance: usage stays within the plan and setup of the customer's environment."
          ]
        },
        limits: [
          "MCP is a query interface; it does not replace the data infrastructure.",
          "Each source depends on agreed licensing, authorization and scope.",
          "Features such as scheduling and file generation depend on the plan and the configuration of the customer's AI."
        ],
        useCases: []
      }
    ]
  },

  platform: {
    meta: {
      title: "Platform | Dinn",
      description: "How Dinn works: it observes, validates, helps understand and decide, delivers to whoever executes and learns from the feedback. The role of Stock, Manager, Insights, MCP and Conecta."
    },
    hero: {
      eyebrow: "Platform",
      title: "One system to go from *signal to commercial action*",
      lead: "Dinn observes, validates, helps understand and decide, takes the result to whoever executes and learns from the feedback. Each part has a clear role."
    },
    cycle: {
      title: "The cycle, in six steps",
      intro: "From a loose signal to a recorded action. The full example, with a single case, is on the home page."
    },
    parts: {
      title: "Five parts, each with its own role",
      intro: "They work together, but they are not the same thing. Each one also says what it does not do.",
      notLabel: "What it is not",
      items: [
        {
          tag: "Dinn Stock",
          title: "The availability reading",
          desc: "Organizes the reading of availability and related channel signals, with the source and confidence of each point.",
          not: "A product's absence is a signal to validate, not a confirmed stock-out."
        },
        {
          tag: "Dinn Manager",
          title: "Management and execution",
          desc: "Brings priorities and context to management and commercial execution: stock-outs, stalled stock, distribution and market in one scope.",
          not: "The decision stays with the team; the platform prepares the reading."
        },
        {
          tag: "Dinn Insights",
          title: "The conversation with the signals",
          desc: "Supports exploration and assisted interpretation of the available signals: ask in plain English and get the number, the scope, the date and the method.",
          not: "Hypotheses appear as hypotheses; Dinn does not presume the cause."
        },
        {
          tag: "MCP",
          title: "The interface for your AI",
          desc: "Lets authorized tools, such as ChatGPT, Claude and Copilot, query Dinn's data and capabilities, with read-only access.",
          not: "It is not the data infrastructure: it is a way to query."
        },
        {
          tag: "Dinn Conecta",
          title: "The data flows",
          desc: "Prepares and operates data flows specialized for the customer's context, standardizing product, store and region for BI and agents.",
          not: "It does not close the execution cycle on its own: it delivers data to whoever executes."
        }
      ]
    },
    data: {
      title: "Data and integrations",
      intro: "The same rule applies across the platform: say where it came from, when it was observed and how far coverage goes.",
      items: [
        {
          title: "Where the signals come from",
          text: "From pharmacies' digital sources, queried by agents. When authorized, also from market data (IQVIA / Close-Up) and internal data (ERP and CRM)."
        },
        {
          title: "How fresh they are",
          text: "D-1 base, with on-demand availability checks at eligible stores. Coverage and refresh vary by source, product, chain and query."
        },
        {
          title: "Where they go",
          text: "Platform, file, API, BI, agents and the customer's AI, through MCP. Data and governance stay with the customer."
        },
        {
          title: "Where to start",
          text: "One goal and one scope. Dinn can start with external sources only, and implementation takes up to 30 days after prerequisites and scope are agreed."
        }
      ]
    }
  },

  trust: {
    meta: {
      title: "Trust | Dinn",
      description: "Source, date and limits of each signal: observed, estimated and inferred data, coverage, access, integrations and implementation."
    },
    hero: {
      eyebrow: "Trust",
      title: "Source, date and limits *on every signal*",
      lead: "IT, data, compliance and procurement will find here how Dinn handles data origin, access and implementation."
    },
    signals: {
      title: "Three types of signal, always identified",
      intro: "Dinn shows, in the context of use, the nature of each piece of information before it becomes a priority.",
      exampleLabel: "Example",
      items: [
        {
          name: "Observed",
          def: "What the source reported directly, with place and time.",
          example: "The pharmacy shows 12 units on its digital channel, queried today at 6 a.m."
        },
        {
          name: "Estimated",
          def: "Calculated from comparable stores and history when the source doesn't respond, always with a confidence level.",
          example: "With no response from the store, stock is estimated from similar stores in the same chain."
        },
        {
          name: "Inferred",
          def: "The reading that comes from combining signals, presented as a hypothesis for the team to validate.",
          example: "Several stores without the product and the DC with stock suggest a replenishment failure, not a shortage at the source."
        }
      ]
    },
    notProve: {
      title: "What a signal does not prove",
      intro: "Naming the limit is part of the product. It is what lets the team act without being misled.",
      items: [
        "A product's absence is not necessarily a stock-out.",
        "Product at the distribution center does not prove supply to a specific store.",
        "A constant balance does not, on its own, prove there were no sales.",
        "A recommendation is not an automated action: the decision and the execution stay with the team."
      ]
    },
    coverage: {
      title: "Coverage and refresh",
      items: [
        { title: "Frequency", text: "D-1 base. At eligible stores, there is an on-demand availability check." },
        { title: "Coverage", text: "Varies by source, product, chain and query, and each reading states what it covers." },
        { title: "Market and internal sources", text: "They come in when licensing, authorization and scope are agreed." }
      ]
    },
    security: {
      title: "Access, security and privacy",
      items: [
        { title: "Access", text: "Two-factor verification by email and permission controls. Integration with corporate identity (SSO) can be enabled." },
        { title: "Customer's AI", text: "MCP connections are authorized and read-only." },
        { title: "Data and governance", text: "Internal data, infrastructure and governance stay with the customer." },
        { title: "Privacy", text: "Personal data is handled in accordance with the LGPD and is described in the Privacy Policy." }
      ],
      privacyLink: "Read the Privacy Policy"
    },
    deploy: {
      title: "Implementation",
      text: "Implementation has a defined scope and takes place within 30 days after prerequisites and scope are agreed. It can start with external sources only, without depending on the customer's internal systems."
    },
    questions: {
      title: "Questions IT and procurement usually ask",
      items: [
        {
          question: "What data from my company does Dinn need?",
          answer: "To start, none: the reading can begin from external sources. Internal data comes in when it makes sense and by agreement, to enrich the context."
        },
        {
          question: "Who controls the data and governance?",
          answer: "The customer. Dinn prepares and delivers; data, infrastructure and governance stay with you."
        },
        {
          question: "How does our AI access Dinn?",
          answer: "Through MCP, with authorized, read-only access. Features such as scheduling and file generation depend on the plan and the configuration of the AI."
        },
        {
          question: "Where do I find support and the incident channel?",
          answer: "On the Support page, with guidance on logging a problem and reaching the contracted channel."
        }
      ],
      supportLink: "Open the Support page"
    },
    cta: {
      title: "Need to get approval from IT, data or procurement?",
      desc: "We talk through your environment's requirements before any implementation.",
      button: "Talk about requirements"
    }
  },

  customers: {
    meta: {
      title: "Customers and cases | Dinn",
      description: "Companies that work with Dinn, testimonials and a demonstration case from signal to action, with source, validation and learning."
    },
    hero: {
      eyebrow: "Customers and cases",
      title: "Who works with Dinn and *what changes in practice*",
      lead: "Companies, testimonials and a complete case: from the observed signal to the team's learning."
    },
    caseBlock: {
      tag: "Demonstration case · example values",
      title: "From a stock-out at six stores to the week's verification queue",
      intro: "This case is not from production. It shows the flow Dinn follows with customer data: each step exists, and the numbers here are illustrative.",
      steps: [
        { label: "Situation", text: "A trade team with 40 stores in its portfolio and time to visit eight per week." },
        { label: "Observed signal", text: "Six stores concentrate 70% of the product's stock-out signal over the last week." },
        { label: "How it was validated", text: "Each store's stock-out is the share of days without stock over the last 30 days. Stores that never sold the product were left out, and each point says whether it is observed or estimated." },
        { label: "Decision supported", text: "Start the week with those six stores, with one question per store: is there a pending order? Is the product off the shelf?" },
        { label: "Action taken", text: "The team visited the stores in the queue and brought the chain store-level evidence, with dates." },
        { label: "Learning", text: "The feedback from each visit reorders the queue the following week. The case does not report a financial result: it shows the flow." }
      ]
    },
    rules: {
      title: "How we report cases",
      items: [
        "A real case and a demonstration case are always identified as such.",
        "When there is a measurable result, we state the period, universe and method.",
        "When there isn't, we report the proven operational gain, without converting it into financial impact."
      ]
    },
    cta: {
      title: "Want to see a case with your portfolio?",
      desc: "The demo starts from your products, your portfolio and your regions.",
      button: "Request a demo"
    }
  },

  resources: {
    meta: {
      title: "Resources | Dinn",
      description: "Guides, cases and articles to understand the pharmaceutical channel: stock-outs, assortment, sell-through and how to turn signals into commercial action."
    },
    hero: {
      eyebrow: "Resources",
      title: "To understand the channel *before deciding*",
      lead: "Guides, cases and articles written from what Dinn observes in the pharmaceutical channel."
    },
    items: [
      {
        type: "Guide",
        title: "Absence, stock-out, assortment and sell-through: what's the difference?",
        desc: "The four readings most often confused in the channel, and what to check before acting.",
        href: "/recursos/ausencia-ruptura-sortimento-giro",
        updated: "Updated on October 14, 2026"
      },
      {
        type: "Demonstration case",
        title: "From a stock-out at six stores to the week's verification queue",
        desc: "The full flow, from signal to learning, with example values.",
        href: "/clientes#caso",
        updated: "Updated on October 14, 2026"
      },
      {
        type: "Blog",
        title: "Dinn Blog",
        desc: "Analysis and articles on stock-outs, commercial execution and data intelligence in pharma.",
        href: "/blog",
        updated: ""
      }
    ],
    openItem: "Open",
    guide: {
      back: "All resources",
      author: "Dinn Team",
      updated: "Updated on October 14, 2026",
      relatedTitle: "Keep going from here",
      related: [
        { label: "How Dinn handles source, date and limits", href: "/confianca" },
        { label: "Dinn for Trade, KAM & Field", href: "/solucoes/trade-kam-campo" }
      ],
      slugs: {
        "ausencia-ruptura-sortimento-giro": {
          meta: {
            title: "Absence, stock-out, assortment and sell-through: what's the difference? | Dinn",
            description: "Four readings that get confused in the pharmaceutical channel and what to check before acting: absence, stock-out, assortment and sell-through."
          },
          eyebrow: "Guide",
          title: "Absence, stock-out, assortment and sell-through: what's the difference?",
          lead: "Four words that show up in the same report and call for different actions. Telling them apart avoids sending the field team to fix the wrong problem.",
          sections: [
            {
              heading: "Absence",
              body: "It means not finding the product at a store, on a date, in a source. It is a signal, not a conclusion: it may be a stock-out, a lack of assortment or simply a query with no response."
            },
            {
              heading: "Stock-out",
              body: "It is absence at a store that normally sells the product. At Dinn, a store's stock-out is the share of days without stock over the days observed in the last 30 days. That is why a persistent stock-out weighs more than a single day of absence."
            },
            {
              heading: "Assortment",
              body: "It is whether or not the store carries that product. Stores that never sold the item are left out of the stock-out calculation, so as not to inflate the number. In that case the conversation with the chain is about assortment, not replenishment."
            },
            {
              heading: "Sell-through",
              body: "It is the speed at which stock leaves, for example in units per day. With stock in the store, sell-through indicates demand; dividing stock by average daily sell-through gives coverage in days."
            }
          ],
          tableTitle: "What to check before acting",
          table: {
            columns: ["What shows up", "What it might be", "What to check"],
            rows: [
              ["Product absent on one day", "Stock-out, assortment or a query with no response", "Whether the absence repeats and whether the store usually sells the product"],
              ["Absence that persists", "Recurring stock-out", "Pending orders and the chain's replenishment"],
              ["Store that never sold the item", "An assortment issue", "The portfolio conversation with the chain"],
              ["High stock and low sell-through", "Stalled stock", "Days without movement and nearby stores that are out"]
            ]
          },
          limitsTitle: "What the data does not prove",
          limits: [
            "Product at the distribution center does not prove supply to a store.",
            "A constant balance does not, on its own, prove there were no sales.",
            "Observed movement is not the same as confirmed sales."
          ]
        }
      }
    }
  },

  scenes: {
    scrollHint: "Scroll to watch the reading take shape",
    items: {
      "inteligencia-pricing": {
        title: "Your lab against the category, in the same stores",
        lab: "Your lab",
        market: "Category",
        sameStores: "Same stores",
        onlyCompetitor: "Stores with only the competitor"
      },
      "trade-kam-campo": {
        title: "From 40 stores in the portfolio to the weekly check queue",
        portfolio: "40 stores in the portfolio",
        concentrated: "6 stores · 70% of the signal",
        queue: "Weekly queue",
        feedback: "Team feedback reorders the queue"
      },
      "supply-distribuicao": {
        title: "DC stock crossed with availability at the region pharmacies",
        cd: "DC",
        cdCoverage: "DC coverage · 24 days",
        pharmacies: "Pharmacies in the region",
        out: "38% without the product",
        verdict: "Distribution breakdown",
        verify: "Confirm pending orders"
      },
      "sac-customer-experience": {
        title: "Pharmacies around the consumer address, with availability",
        you: "Consumer",
        nearest: "Nearest · 0.8 km",
        insight: "Repeated demand · 2 stores out for 7 days"
      },
      "marketing-lancamentos": {
        title: "Launch presence week by week, by channel and region",
        largeChains: "Large chains",
        independents: "Independents",
        reached: "54% of pharmacies",
        regions: "Presence by region, week by week"
      },
      "ti-dados-governanca": {
        title: "Sources, Dinn and destinations, with controlled access",
        sources: "Sources",
        destinations: "Destinations",
        hub: "Dinn",
        readOnly: "Read-only",
        access: "Two-factor · SSO available · permissions"
      }
    }
  },

  areaVisuals: {
    uiKicker: "How it appears in Dinn",
    uiNote: "Screen recreated with example values.",
    answerKicker: "The example, as Dinn Insights answers it",
    provenanceTitle: "What each data point says about itself",
    connections: {
      app: "Connections and access",
      rows: [
        { name: "ChatGPT", channel: "Via MCP", status: "Read-only" },
        { name: "Claude", channel: "Via MCP", status: "Read-only" },
        { name: "Copilot", channel: "Via MCP", status: "Read-only" },
        { name: "BI", channel: "Via API or Dinn Conecta", status: "Authorized" },
        { name: "Agents", channel: "Via Dinn Conecta", status: "Authorized" }
      ],
      accessTitle: "Access",
      access: ["Two-factor verification by email", "SSO available", "Permission controls"]
    },
    aiAnswer: {
      tools: ["ChatGPT", "Claude", "Copilot"],
      question: "Which stores in my São Paulo portfolio should I check first?",
      answer: "Six stores concentrate most of last week stock-out signal. The list shows what to check in each one.",
      meta: [
        { label: "Scope", value: "Portfolio, São Paulo" },
        { label: "Period", value: "Last 7 days" },
        { label: "Source", value: "Dinn, via MCP" },
        { label: "Nature", value: "Observed or estimated, always stated" }
      ],
      mode: "Read-only"
    }
  }
};
