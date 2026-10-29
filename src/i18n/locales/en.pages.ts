import { offerEn } from './en.offer';
import { platformVizEn } from './en.platform';

// Texts for the site's inner pages (platform, solutions by area, trust,
// customers, resources) and for the new home sections (areas and content).
// English mirror of pt.pages.ts: same keys, same order, same structure.
// Editorial rule: every statement says what Dinn observes, what it estimates,
// what it helps interpret and what depends on customer validation.

export const pagesEn = {
  platformViz: platformVizEn,
  ...offerEn,
  areas: {
    eyebrow: "For your area",
    title: "Start from *your team's* problem",
    intro: "Each area has a different question. Pick yours. See the decisions Dinn supports, an example and the limits.",
    open: "See Dinn for this area",
    questionPrefix: "The question:"
  },

  contentTeaser: {
    eyebrow: "Resources",
    title: "Not ready for a demo?",
    items: [
      {
        type: "Blog",
        title: "Articles on the pharmaceutical channel",
        desc: "Stock-outs, commercial execution and data in pharma.",
        href: "/blog"
      },
      {
        type: "Use case",
        title: "How many days of product are left in Fortaleza?",
        desc: "The answer was in the stalled stock of every store in the city.",
        href: "/recursos/casos/dias-de-estoque-fortaleza"
      },
      {
        type: "What's new",
        title: "What went live at Dinn",
        desc: "Every platform release, in plain language, by date.",
        href: "/recursos/changelog"
      }
    ]
  },

  contact: {
    meta: {
      title: "Contact | Dinn",
      description: "Tell us which pharmaceutical-channel decision you want to improve. Someone on the Dinn team replies."
    },
    navLabel: "Contact",
    hero: {
      eyebrow: "Contact",
      title: "Tell us what you want to *improve in the channel*",
      lead: "Fill in a few fields. A person on the team reads your request and replies with the next step."
    },
    after: {
      title: "What happens next",
      steps: [
        { title: "We receive your request", text: "It goes to the team with your role and decision." },
        { title: "A person replies", text: "You get an email reply within a few business days." },
        { title: "You set the pace", text: "If it makes sense, we book a short call. If not, we stop." }
      ]
    },
    form: {
      title: "Talk to Dinn",
      lead: "It takes less than a minute.",
      email: "Work email",
      emailPlaceholder: "you@yourcompany.com",
      emailHint: "We use the domain to identify the company.",
      company: "Company",
      role: "Your role",
      decision: "Decision you want to improve",
      choose: "Select",
      name: "Your name",
      optional: "(optional)",
      roles: [
        { value: "comercial_trade", label: "Sales or Trade" },
        { value: "inteligencia_dados", label: "Intelligence or Data" },
        { value: "marca_lancamento", label: "Brand or Launch" },
        { value: "operacao_campo", label: "Field operations" },
        { value: "ti_seguranca_compras", label: "IT, Security or Procurement" },
        { value: "direcao", label: "Leadership or Executive" },
        { value: "outro", label: "Other" }
      ],
      decisions: [
        { value: "disponibilidade_execucao", label: "Availability and execution at the point of sale" },
        { value: "confianca_dado", label: "Trust in the data" },
        { value: "lancamento", label: "Product launch" },
        { value: "preco", label: "Price against the market" },
        { value: "integracao", label: "Integration with BI, CRM or agents" }
      ],
      consent: "I authorize Dinn to use this data to reply to this request and send related communications.",
      privacy: "Privacy policy",
      submit: "Send request",
      sending: "Sending…",
      fine: "We only use what you fill in here. No bulk email lists."
    },
    errors: {
      required: "Fill in this field.",
      requiredChoice: "Select an option.",
      emailInvalid: "Enter a valid email.",
      emailPersonal: "Use your company email. We do not accept personal addresses such as Gmail or Outlook.",
      consent: "You must authorize to send the request.",
      submit: "We could not send it. Try again or",
      submitLink: "book directly"
    },
    done: {
      title: "Request received",
      text: "Thank you. A person on the team reads your request and replies by email within a few business days.",
      schedule: "Book a call",
      home: "Back to home"
    }
  },

  pageCta: {
    title: "See how this works with your products",
    desc: "In a demo, Dinn shows the reading with your portfolio, territory and regions.",
    button: "Request a demo",
    secondary: "See all solutions"
  },

  solutions: {
    page: {
      eyebrow: "Solutions",
      back: "All solutions",
      questionLabel: "The question your area asks",
      decisionsLabel: "Decisions Dinn supports",
      exampleLabel: "An example, step by step",
      limitsLabel: "Limits of the reading",
      useCasesLabel: "Situations for this area",
      useCaseOpen: "See on the home page",
      trustCta: "How we handle source, date and confidence",
      otherLabel: "Other areas"
    },
    items: [
      {
        slug: "inteligencia-pricing",
        name: "Intelligence & Pricing",
        short: "Track availability, price, sell-through and competition.",
        question: "Where does it come from, and how far can I trust it?",
        title: "Price, sell-through and competitor changes, *with the source in view*",
        lead: "Explain a number before you use it. Each reading shows source, date, coverage and limit.",
        decisions: [
          "Tell a one-off change from a lasting trend.",
          "Tell a drop in share from a drop in sales, in the same stores.",
          "Add granularity and operational context to consolidated market data."
        ],
        example: {
          title: "Your company grew 6% in the same stores; the category, 11%",
          steps: [
            "Signal: share falls in the region.",
            "Validation: only comparable stores, present in both time windows.",
            "Reading: other products grew more. Your sales did not shrink.",
            "Next step: look at the stores where only the competitor has stock."
          ]
        },
        limits: [
          "Sales are estimated from stock movement. They are not audited sell-out.",
          "Competitor data is aggregated.",
          "Dinn complements market audits. It does not replace them."
        ],
        useCases: ["concorrencia", "demanda"]
      },
      {
        slug: "trade-kam-campo",
        name: "Trade, KAM & Field",
        short: "Prioritize accounts and territories with the latest context.",
        question: "Who do I prioritize and what do I bring to the conversation?",
        title: "A queue of stores and accounts, *with what to check at each one*",
        lead: "No dashboard to interpret. You get a prioritized list with the signal, the date and the question to answer.",
        decisions: [
          "Start the week with the stores that cause most stock-outs in your scope.",
          "Give the chain store-level evidence, with dates.",
          "Review the same scope after the action and record the feedback."
        ],
        example: {
          title: "6 of the portfolio's 40 stores hold 70% of the signal",
          steps: [
            "Signal: persistent stock-out at portfolio stores in the last week.",
            "Validation: level = days without stock ÷ days observed in the last 30 days.",
            "Queue: the stores in order, with what to check at each one (pending order? off the shelf?).",
            "Feedback: the team records what it found. Dinn follows the same scope to review priorities."
          ]
        },
        limits: [
          "Dinn prepares the list. Your team sets the schedule.",
          "Dinn writes nothing to the CRM. The reading is for visit preparation.",
          "Stores that never sold the product are excluded, so the stock-out is not inflated."
        ],
        useCases: ["campo"]
      },
      {
        slug: "supply-distribuicao",
        name: "Supply & Distribution",
        short: "Investigate coverage, availability and supply constraints.",
        question: "Where might there be a coverage or supply problem?",
        title: "Is the gap at the DC, in replenishment or at the pharmacy? *See both sides.*",
        lead: "Dinn crosses the distributor's stock with availability at the region's pharmacies. It states causal caveats.",
        decisions: [
          "Tell a shortage at the source from a replenishment failure.",
          "Bring the order forward when DC coverage falls.",
          "Assess reallocation where stalled stock is near stores that are out."
        ],
        example: {
          title: "A DC with stock and pharmacies without the product",
          steps: [
            "Signal: 38% of the region's pharmacies are out of the product.",
            "Validation: DC coverage = DC stock ÷ the region's estimated daily sales.",
            "Reading: the pattern points to a distribution or replenishment failure, not a shortage at the source.",
            "Before you conclude: confirm pending orders at the affected chains."
          ]
        },
        limits: [
          "Stock at the DC does not prove stock at the pharmacy. The reading crosses both ends.",
          "The pattern is a hypothesis. The cause needs investigation.",
          "DC coverage uses the region's estimated sales. It is an approximation, not the real coverage of that DC. It holds only when demand matches the population the DC supplies.",
          "Observed movement is not confirmed sales."
        ],
        useCases: ["distribuicao", "parado"]
      },
      {
        slug: "sac-customer-experience",
        name: "Customer Service & Customer Experience",
        short: "Guide consumers on availability and proximity.",
        question: "How do I guide someone without misleading them?",
        title: "Where the consumer is likely to find the product, *and how reliable that is*",
        lead: "Availability, proximity and freshness on one screen, with the source and date of each indication.",
        decisions: [
          "Point to the nearby pharmacy most likely to have the product.",
          "Check if the information is observed or estimated before you guide.",
          "Show trade where demand finds no product."
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
          "The base reading is D-1. At compatible stores, an on-demand check runs in real time and shows the time of the response.",
          "A chance of stock is not a guarantee. Tell the consumer.",
          "Coverage varies by chain and source."
        ],
        useCases: ["sac"]
      },
      {
        slug: "marketing-lancamentos",
        name: "Marketing & Launches",
        short: "Track presence, coverage growth and launch execution signals.",
        question: "Is execution progressing where it should?",
        title: "Week by week, *where the launch has arrived* and where it stalled",
        lead: "Presence by chain and region over time, compared with your team's plan.",
        decisions: [
          "See where the launch accelerated and where it is below expectations.",
          "Tell a sell-in problem from a replenishment problem.",
          "Compare progress by cohort and channel against the target."
        ],
        example: {
          title: "Six weeks after launch",
          steps: [
            "Signal: the product appears at 54% of the monitored pharmacies.",
            "Validation: presence = pharmacies with stock ÷ monitored pharmacies in the scope. Compare with your team's goal and cohort.",
            "Reading: it accelerated at large chains. It stays below 20% at independents.",
            "Next question: did the DC receive the product in the regions where it has not arrived?"
          ]
        },
        limits: [
          "Week 1 starts on the launch date set by your team.",
          "The split by channel follows what each source can identify.",
          "Presence at pharmacies is not sell-out."
        ],
        useCases: ["lancamento"]
      },
      {
        slug: "ti-dados-governanca",
        name: "IT, Data & Governance",
        short: "Integrate signals with traceability, access control and clear limits.",
        question: "How does it integrate, protect and govern?",
        title: "Signals in your environment, *with traceability and access control*",
        lead: "API, BI and the customer's AI query the same base. The authorized scope and the origin of each data point stay intact.",
        decisions: [
          "Choose how to consume: platform, file, API, BI or the customer's AI.",
          "Define who accesses what, with two-factor verification and corporate SSO on request.",
          "Keep internal data, infrastructure and governance under the customer's control."
        ],
        example: {
          title: "A question asked in the customer's own AI",
          steps: [
            "Input: the team asks in ChatGPT, Claude or Copilot.",
            "Access: the authorized AI queries Dinn through MCP, read-only.",
            "Answer: the number comes with scope, period, source and limits.",
            "Governance: usage stays within the plan and setup of the customer's environment."
          ]
        },
        limits: [
          "MCP is a query interface. It does not replace the data infrastructure.",
          "Each source depends on agreed licensing, authorization and scope.",
          "Features such as scheduling and file generation depend on the plan and the customer's AI setup."
        ],
        useCases: []
      }
    ]
  },

  platform: {
    meta: {
      title: "Platform | Dinn",
      description: "How Dinn works: it observes, validates, helps you understand and decide, delivers to the executor and learns from feedback. The role of Stock, Manager, Insights, MCP and Conecta."
    },
    hero: {
      eyebrow: "Platform",
      title: "One system from *signal to commercial action*",
      lead: "Dinn observes, validates, helps you understand and decide, delivers to the executor and learns from feedback. Each part has a clear role."
    },
    cycle: {
      title: "The cycle, in six steps",
      intro: "From a loose signal to a recorded action. The full example is on the home page."
    },
    parts: {
      title: "Five parts, with different roles",
      intro: "They work together, but they are not five equal products. There is a product, a platform, interfaces and a data layer. Each part also says what it does not do.",
      notLabel: "What it is not",
      kinds: ["Product", "Platform", "Interface", "Technical interface", "Data layer"],
      items: [
        {
          tag: "Dinn Stock",
          title: "The availability reading",
          desc: "Organizes availability and related channel signals, with the source and confidence of each point.",
          not: "A product's absence is a signal to validate, not a confirmed stock-out."
        },
        {
          tag: "Dinn Manager",
          title: "Management and execution",
          desc: "Gives priorities and context for management and execution: stock-outs, stalled stock, distribution and market in one scope.",
          not: "The team decides. The platform prepares the reading."
        },
        {
          tag: "Dinn Insights",
          title: "The conversation with the signals",
          desc: "Explore and interpret the signals. Ask in plain English and get the number, scope, date and method.",
          not: "Hypotheses appear as hypotheses. Dinn does not assume the cause."
        },
        {
          tag: "MCP",
          title: "The interface for your AI",
          desc: "Lets authorized tools, such as ChatGPT, Claude and Copilot, query Dinn's data, with read-only access.",
          not: "It is not the data infrastructure. It is a way to query."
        },
        {
          tag: "Dinn Conecta",
          title: "The data flows",
          desc: "Builds and runs data flows for the customer's context. It standardizes product, store and region for BI and agents.",
          not: "It does not close the execution cycle. It delivers data to the executor."
        }
      ]
    },
    data: {
      title: "Data and integrations",
      intro: "One rule applies across the platform: say where the data came from, when it was observed and how far coverage goes.",
      items: [
        {
          title: "Where the signals come from",
          text: "From pharmacies' digital sources, queried by agents. With authorization, also from market data (IQVIA / Close-Up) and internal data (ERP and CRM)."
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
          text: "One goal and one scope. Dinn can start with external sources only. Implementation takes up to 30 days after prerequisites and scope are agreed."
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
      lead: "IT, data, compliance and procurement: see how Dinn handles data origin, access and implementation."
    },
    signals: {
      title: "Three types of signal, always identified",
      intro: "Dinn shows the nature of each piece of information before it becomes a priority.",
      exampleLabel: "Example",
      items: [
        {
          name: "Observed",
          def: "What the source reported directly, with place and time.",
          example: "The pharmacy shows 12 units on its digital channel, queried today at 6 a.m."
        },
        {
          name: "Estimated",
          def: "Calculated from comparable stores and history when the source does not respond. Always has a confidence level.",
          example: "The store does not respond. Dinn estimates its stock from similar stores in the same chain."
        },
        {
          name: "Inferred",
          def: "A reading from combined signals. Shown as a hypothesis for the team to validate.",
          example: "Several stores without the product and a DC with stock suggest a replenishment failure, not a shortage at the source."
        }
      ]
    },
    notProve: {
      title: "What a signal does not prove",
      intro: "Naming the limit is part of the product. It lets the team act without being misled.",
      items: [
        "A product's absence is not always a stock-out.",
        "Product at the distribution center does not prove supply to a specific store.",
        "A constant balance does not prove there were no sales.",
        "A recommendation is not an automated action. The team decides and executes."
      ]
    },
    coverage: {
      title: "Coverage and refresh",
      items: [
        { title: "Frequency", text: "D-1 base. At eligible stores, an on-demand availability check is possible." },
        { title: "Coverage", text: "Varies by source, product, chain and query. Each reading states what it covers." },
        { title: "Market and internal sources", text: "They join when licensing, authorization and scope are agreed." }
      ]
    },
    security: {
      title: "Access, security and privacy",
      items: [
        { title: "Access", text: "Two-factor verification by email and permission controls. Corporate SSO on request: check your authentication requirements and deployment scope with Dinn." },
        { title: "Customer's AI", text: "MCP connections are authorized and read-only." },
        { title: "Data and governance", text: "Internal data, infrastructure and governance of the customer's environment stay with the customer. Dinn is responsible for the controls of its own layer." },
        { title: "Privacy", text: "Dinn handles personal data in accordance with the LGPD, as the Privacy Policy describes." }
      ],
      privacyLink: "Read the Privacy Policy"
    },
    deploy: {
      title: "Implementation",
      text: "Implementation has a defined scope. It takes up to 30 days after prerequisites and scope are agreed. It can start with external sources only, with no dependency on the customer's internal systems."
    },
    questions: {
      title: "Questions IT and procurement usually ask",
      items: [
        {
          question: "What data from my company does Dinn need?",
          answer: "To start, none. The reading can begin from external sources. Internal data joins by agreement, to add context."
        },
        {
          question: "Who controls the data and governance?",
          answer: "You keep internal data and your environment's governance. Dinn prepares and delivers the data. Dinn is responsible for the controls of its own layer: access, permissions and logging."
        },
        {
          question: "How does our AI access Dinn?",
          answer: "Through MCP, with authorized, read-only access. Features such as scheduling and file generation depend on the plan and the AI setup."
        },
        {
          question: "Where do I find support and the incident channel?",
          answer: "On the Support page. It explains how to log a problem and reach the contracted channel."
        }
      ],
      supportLink: "Open the Support page"
    },
    cta: {
      title: "Need approval from IT, data or procurement?",
      desc: "We discuss your environment's requirements before any implementation.",
      button: "Talk about requirements"
    }
  },



  cases: {
    meta: {
      title: "Use cases | Dinn",
      description: "Dinn use cases: stories from signal to action, step by step, with source, validation and learning."
    },
    hero: {
      eyebrow: "Use cases",
      title: "Dinn use stories, *one by one*",
      lead: "Each case tells the full path, from situation to learning: what Dinn observed, how it was validated and what the team decided."
    },
    gallery: { open: "Read the case", customer: "Customer case", empty: "We add new cases here, one by one." },
    detail: {
      back: "All cases",
      problem: "The problem",
      how: "How Dinn worked",
      howLead: "Three steps, from loose data to a decision.",
      solution: "The solution",
      outcome: "What changed",
      userLabel: "User account",
      preserved: "User account · names and data preserved",
      stepsTitle: "From signal to learning",
      byline: "Dinn team",
      relatedTitle: "Keep exploring",
      areaLabel: "Area"
    },
    stepLabels: {
      situation: "Situation",
      signal: "Observed signal",
      validation: "How it was validated",
      decision: "Decision supported",
      action: "Action taken",
      learning: "Learning"
    },
    rules: {
      title: "How we tell cases",
      items: [
        "Cases are accounts from Dinn users. Names, products and data are preserved.",
        "If a result is measurable, we state the period, universe and method.",
        "If not, we report the proven operational gain. We do not convert it to financial impact.",
        "Share and sales are estimates. With a number, we state the market, window and method."
      ]
    }
  },

  caseScenes: {
    "frozen-stock": {
      title: "Stalled stock of each Fortaleza store, added up and converted to days available",
      city: "Fortaleza", pdv: "Store", total: "Stock", frozen: "Stalled stock", sum: "City total",
      days: "Days available", need: "Needed", covered: "City covered"
    },
    "distributor-gap": {
      title: "Four hypotheses for the replenishment gap, and the distributor's purchase window",
      demand: "Demand in the region", rotation: "Store sell-through", delay: "Delivery delay", noBuy: "No order from the store",
      exists: "Exists", ruled: "Ruled out", window: "Distributor purchase window", replenish: "Replenishment announced"
    },
    "sac-locator": {
      title: "Calls answered with Dinn's Locator, in less time",
      calls: "Today's calls", locator: "Dinn Locator", address: "Patient's address", available: "Available",
      confirmed: "Product at the address", time: "Time per call", before: "Before", after: "With Dinn"
    },
    "price-gap": {
      title: "Competitor in the chains, product absent, price aligned in the negotiation",
      competitor: "Competitor", yours: "Your product", chain: "Chain", priceLabel: "Price",
      weighing: "Price weighing on the decision", negotiated: "Price negotiated with the chain"
    },
    "share-opps": {
      title: "Share from 60% to 45%, losses by state and city actions from Insights",
      share: "Share", from: "60%", to: "45%", states: "Losses by state", opps: "Opportunities",
      city: "City", state: "State", action: "Action", ask: "Where can I win space back?", answer: "Actions by city and state"
    }
  },
  resources: {
    meta: {
      title: "Resources | Dinn",
      description: "Blog, customer stories and what's new at Dinn: content to understand the pharmaceutical channel and follow releases."
    },
    hero: {
      eyebrow: "Resources",
      title: "Content, stories and news *from Dinn*",
      lead: "Choose where to start: read articles and guides, read customer stories or follow platform releases."
    },
    items: [
      {
        id: "blog",
        type: "Blog",
        title: "Articles, guides and topics on the channel",
        desc: "Analysis on stock-outs, commercial execution and data in pharma, in one place.",
        chips: ["Articles", "Guides", "Topics"],
        cta: "Read the blog",
        href: "/blog"
      },
      {
        id: "cases",
        type: "Use cases",
        title: "Stories from those who use Dinn",
        desc: "Stories from customers we know and interviewed. Documented and public, from situation to learning.",
        chips: ["Interviews", "Context", "Learnings"],
        cta: "See the stories",
        href: "/recursos/casos"
      },
      {
        id: "changelog",
        type: "What's new",
        title: "Everything that went live",
        desc: "A timeline of Dinn releases, with dates and a plain-language note on what changed.",
        chips: ["New", "Improvements", "Fixes"],
        cta: "See the history",
        href: "/recursos/changelog"
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
            description: "Four readings that people confuse in the pharmaceutical channel, and what to check before you act: absence, stock-out, assortment and sell-through."
          },
          eyebrow: "Guide",
          title: "Absence, stock-out, assortment and sell-through: what's the difference?",
          lead: "Four words that appear in the same report and need different actions. Tell them apart, so the field team does not fix the wrong problem.",
          sections: [
            {
              heading: "Absence",
              body: "The product is not at a store, on a date, in a source. It is a signal, not a conclusion. It can be a stock-out, a lack of assortment or a query with no response."
            },
            {
              heading: "Stock-out",
              body: "Absence at a store that normally sells the product. At Dinn, a store's stock-out is the share of days without stock over the days observed in the last 30 days. A persistent stock-out weighs more than one day of absence."
            },
            {
              heading: "Assortment",
              body: "Whether the store carries that product. Stores that never sold the item are excluded from the stock-out calculation, so the number is not inflated. For these stores, talk to the chain about assortment, not replenishment."
            },
            {
              heading: "Sell-through",
              body: "The speed at which stock leaves, for example in units per day. With stock in the store, sell-through shows demand. Stock divided by average daily sell-through gives coverage in days."
            }
          ],
          tableTitle: "What to check before acting",
          table: {
            columns: ["What shows up", "What it might be", "What to check"],
            rows: [
              ["Product absent on one day", "Stock-out, assortment or a query with no response", "If the absence repeats and if the store usually sells the product"],
              ["Absence that persists", "Recurring stock-out", "Pending orders and the chain's replenishment"],
              ["Store that never sold the item", "An assortment issue", "The portfolio conversation with the chain"],
              ["High stock and low sell-through", "Stalled stock", "Days without movement and nearby stores that are out"]
            ]
          },
          limitsTitle: "What the data does not prove",
          limits: [
            "Product at the distribution center does not prove supply to a store.",
            "A constant balance does not prove there were no sales.",
            "Observed movement is not confirmed sales."
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
        feedback: "Team feedback revises priorities"
      },
      "supply-distribuicao": {
        title: "DC stock crossed with availability at the region's pharmacies",
        cd: "DC",
        cdCoverage: "DC coverage · 24 days",
        pharmacies: "Pharmacies in the region",
        out: "38% without the product",
        verdict: "Distribution failure",
        verify: "Confirm pending orders"
      },
      "sac-customer-experience": {
        title: "Pharmacies near the consumer, with availability",
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
        access: "Two-factor · SSO on request · permissions"
      }
    }
  },

  areaVisuals: {
    uiKicker: "How it appears in Dinn",
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
      access: ["Two-factor verification by email", "SSO on request", "Permission controls"]
    },
    aiAnswer: {
      tools: ["ChatGPT", "Claude", "Copilot"],
      question: "Which stores in my São Paulo portfolio should I check first?",
      answer: "Six stores hold most of last week's stock-out signal. The list shows what to check at each one.",
      meta: [
        { label: "Scope", value: "Portfolio, São Paulo" },
        { label: "Period", value: "Last 7 days" },
        { label: "Source", value: "Dinn, via MCP" },
        { label: "Nature", value: "Observed or estimated, always stated" }
      ],
      mode: "Read-only"
    }
  },


  trustVisual: {
    anatomy: {
      title: "A signal on screen, with everything it says about itself",
      signal: "Persistent stock-out",
      store: "Store 01 · Chain A",
      callouts: [
        { label: "Source", value: "Observed at the source" },
        { label: "Date", value: "D-1 base" },
        { label: "Confidence", value: "Shown on every point" },
        { label: "Limit", value: "Absence is not a cause" },
        { label: "Next step", value: "Check pending order" }
      ],
    },
    kinds: {
      proximity: "Closeness to the source",
      items: [
        {
          meter: "Direct",
          rows: [
            { label: "Source", value: "The source itself" },
            { label: "When", value: "Date and time of the record" },
            { label: "How to read", value: "Direct data, with place and time" }
          ]
        },
        {
          meter: "By comparison",
          rows: [
            { label: "Source", value: "Comparable stores and history" },
            { label: "When", value: "At the base update" },
            { label: "How to read", value: "Always has a confidence level" }
          ]
        },
        {
          meter: "By combination",
          rows: [
            { label: "Source", value: "A combination of signals" },
            { label: "When", value: "At the moment of reading" },
            { label: "How to read", value: "A hypothesis for the team to validate" }
          ]
        }
      ]
    },
    notProve: {
      sees: "What shows up",
      doesNot: "Does not prove",
      pairs: [
        { a: "Product absent", b: "Confirmed stock-out" },
        { a: "Product at the DC", b: "Store supplied" },
        { a: "Flat balance", b: "No sales" },
        { a: "Recommendation", b: "Automated action" }
      ]
    },
    coverage: {
      timelineTitle: "How the reading reaches you",
      steps: [
        { label: "Previous day", text: "Dinn queries the sources" },
        { label: "D-1 base", text: "Signals are organized, with source and date" },
        { label: "Today", text: "Your team reads, validates and acts" }
      ],
      onDemand: "On-demand availability check in eligible stores",
      factorsTitle: "Coverage varies by",
      factors: ["Source", "Product", "Chain", "Query"],
      factorsNote: "Each reading states what it covers."
    },
    security: {
      flowTitle: "From access to answer",
      flow: [
        { title: "Authorized person", sub: "A user at your company" },
        { title: "Two factors", sub: "Verification by email" },
        { title: "SSO", sub: "On request" },
        { title: "Permissions", sub: "Access control" },
        { title: "Dinn", sub: "Signals with source and date" },
        { title: "Read-only", sub: "MCP, API and BI" }
      ],
      splitTitle: "Who takes care of what",
      dinn: {
        title: "Dinn",
        items: ["Prepares and delivers the signals", "Shows source, date and confidence", "Connects via MCP, API and BI", "Is responsible for the controls of its layer"]
      },
      client: {
        title: "You keep",
        items: ["Internal data", "Your environment's infrastructure", "Your environment's governance"]
      }
    },
    deploy: {
      title: "Deployment in up to 30 days",
      steps: [
        { label: "Agreement", text: "Prerequisites and scope defined" },
        { label: "Deployment", text: "Up to 30 days. It can start with external sources only" },
        { label: "In use", text: "Daily reading and team feedback" }
      ]
    }
  },

  changelog: {
    meta: {
      title: "What's new | Dinn",
      description: "Timeline of what Dinn put live: platform news and improvements, in plain language, by date."
    },
    hero: {
      eyebrow: "What's new",
      title: "What went live at *Dinn*",
      lead: "Every release in production, in plain language, by date."
    },
    back: "All resources",
    filters: { label: "Filter by area", all: "All", platform: "Platform", site: "Site and documentation" },
    count: "releases",
    updated: "Updated on",
    months: "Months",
    empty: "No releases in this area yet.",
    note: "Updated every day. Texts use plain language. Internal technical details do not appear here."
  }
};
