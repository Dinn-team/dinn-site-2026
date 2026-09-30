export const enUS = {
  nav: {
    home: "Home",
    howItWorks: "How it works",
    solutions: "Solutions",
    conecta: "Dinn Conecta",
    customers: "Customers",
    blog: "Blog",
    cta: "Request a demo",
    openMenu: "Open menu",
    languageLabel: "Language",
    language: "English",
    langShort: "EN"
  },
  hero: {
    pill: "The intelligence layer for the pharmacy channel",
    title: "Turn pharmacy-market signals into *commercial action*",
    description: "If you sell through pharmacies, you don't need another dashboard. You need to know where to act, with what confidence and with what impact.",
    cta: "Request a demo",
    secondary: "See how it works",
    card: {
      label: "Illustrative example",
      steps: [
        { tag: "Signal", title: "Product A · 32% of stores out of stock", meta: "SP · 96 of 300 stores · D-1" },
        { tag: "Where", title: "Chain A concentrates the signal", meta: "60% stock-out over 30 days" },
        { tag: "Action", title: "6 stores to check first", meta: "With a question and expected follow-up" }
      ],
      stores: [
        { name: "Store 01 · São Paulo", level: "Critical", value: "86.7%" },
        { name: "Store 02 · Campinas", level: "High", value: "60%" },
        { name: "Store 03 · Santos", level: "Moderate", value: "33.3%" }
      ],
      footnote: "Fictitious data."
    }
  },
  logos: {
    title: "Pharmaceutical companies already using Dinn"
  },
  antesDepois: {
    eyebrow: "What changes",
    title: "Dinn is not just *another dashboard*.",
    description: "It is the intelligence layer that connects what happens in pharmacies to your commercial team's decisions.",
    beforeLabel: "Before",
    afterLabel: "With Dinn",
    items: [
      { bad: "Stock-out debates without evidence", good: "Evidence by store, chain, city and SKU, with a cut-off date" },
      { bad: "A dashboard to interpret", good: "A list of what to check first" },
      { bad: "Data with unclear origin", good: "Observed or estimated, with source and confidence" },
      { bad: "Databases and spreadsheets reconciled by hand", good: "One identified base, in the platform, a file, the API or your AI" }
    ]
  },
  comoFunciona: {
    eyebrow: "How it works",
    title: "From a channel signal to your team's *next action*",
    intro: "Dinn tracks your products' availability in pharmacies, separates what changed from noise and organizes the reading by product, chain, region and store. Always with explicit source, date and confidence.",
    stages: [
      {
        name: "Observe",
        title: "Where there is stock and where product is missing",
        description: "Agents query pharmacies' digital channels and record what each source reports, with location and time. Where there is no direct answer, Dinn estimates from comparable stores and history. Daily base (D-1) and on-demand checks where the source allows.",
        products: "Dinn Stock"
      },
      {
        name: "Understand",
        title: "Not every variation deserves attention",
        description: "Dinn turns the reading into named signals: persistent stock-out, stock without movement, change in sell-through, concentration in one chain. Evolution over time separates a one-off signal from a recurring problem.",
        products: "Dinn Stock · Dinn Pulse"
      },
      {
        name: "Prioritize",
        title: "One base, three levels of decision",
        description: "Strategic: where to focus attention. Tactical: what to discuss with each chain. Operational: which stores to check first. The output is a concrete queue, with the signal, the question and the expected follow-up.",
        products: "Dinn Manager · Dinn Locator"
      },
      {
        name: "Bring it into the routine",
        title: "The signal reaches where the work happens",
        description: "Use it in the platform, export it for the chain meeting, feed your BI through the API or ask directly in your AI. Dinn prepares the analysis; your team decides what to do with each store.",
        products: "Platform · File · API · MCP"
      },
      {
        name: "Follow up",
        title: "See whether the signal persisted after the action",
        description: "Keep the same product and scope to compare the evolution without mixing bases: start the day with the deviations, arrive at the weekly meeting with a list and track what changed in the channel each month.",
        products: "Daily, weekly and monthly routines"
      }
    ],
    visuals: {
      observe: {
        observedTag: "Observed",
        observedTitle: "Direct answer from the source",
        observedRows: [
          ["Product", "Product A · 2.5 mg"],
          ["Store", "Store 01 · São Paulo"],
          ["Origin", "Digital channel"],
          ["Answer", "Available · 10:32"]
        ],
        estimatedTag: "Estimated",
        estimatedTitle: "No direct answer",
        estimatedRows: [
          ["References", "Comparable stores + history"],
          ["Availability", "8–12 units"],
          ["Confidence", "Level B"]
        ],
        note: "Every record states how it was obtained: observed or estimated."
      },
      signals: {
        title: "Signals in scope · SP",
        items: [
          { type: "Persistent stock-out", scope: "Product A · 96 of 300 stores", value: "32%" },
          { type: "Chain concentration", scope: "Product A · Chain A · 30 days", value: "60%" },
          { type: "Stock without movement", scope: "Store 04 · Sorocaba", value: "30 of 30 days" },
          { type: "Sell-through drop", scope: "Product B · Chain B", value: "−18%" }
        ],
        note: "Fictitious data. A signal opens an investigation, not a conclusion."
      },
      priority: {
        levels: [
          { name: "Strategic", question: "Where to focus attention?" },
          { name: "Tactical", question: "What to discuss with each chain?" },
          { name: "Operational", question: "Which stores to check first?" }
        ],
        tableTitle: "Verification queue · Product A · Chain A",
        columns: ["Store · signal", "Suggested check", "Expected follow-up"],
        rows: [
          ["Store 01 · 86.7%", "Is there a pending order or delivery?", "Chain status and forecast"],
          ["Store 02 · 60%", "Is the product on the shelf?", "In-store check"],
          ["Store 03 · 33.3%", "Has the absence come back?", "New reading of the scope"]
        ],
        note: "Fictitious example. Your team assigns owners and deadlines."
      },
      deliver: {
        input: "Prioritized signal",
        hub: "Dinn",
        outputs: [
          { name: "Platform", desc: "Dinn Manager" },
          { name: "File", desc: "Export for the meeting" },
          { name: "API", desc: "Your BI and systems" },
          { name: "Your AI", desc: "ChatGPT, Claude, Copilot" },
          { name: "CRM", desc: "Context for the field" }
        ],
        note: "Dinn prepares the analysis. Your team decides."
      },
      follow: {
        routines: [
          { when: "Weekdays · 08:00", title: "Start the day with the deviations", desc: "The biggest drops since the last reading." },
          { when: "Mondays · 09:00", title: "Arrive at the meeting with a list", desc: "Chain ranking and the ten stores with the most stock-outs." },
          { when: "1st business day · 09:00", title: "Track what changed in the channel", desc: "90-day trend in the same scope." }
        ],
        note: "Routine examples."
      }
    }
  },
  naPratica: {
    eyebrow: "In practice",
    title: "From the signal to an *investigation list*",
    intro: "The full path in one example, with fictitious data.",
    steps: [
      { question: "Which product needs attention?", answer: "Product A has the highest share of stores out of stock in SP.", data: "32% · 96 of 300 stores" },
      { question: "Which chains should we investigate?", answer: "Chain A concentrates the signal in the same scope and period.", data: "60% over 30 days" },
      { question: "Which stores explain the problem?", answer: "Six Chain A stores, from critical to moderate.", data: "86.7% → 23.3%" },
      { question: "What should we check in each one?", answer: "Pending order? Product in store? Has the absence come back?", data: "Verification queue" },
      { question: "Who owns each point?", answer: "The team assigns an owner, the agreed action and a date to review the same scope.", data: "Team decision" },
      { question: "How do we follow up?", answer: "The weekly routine brings the updated list to the commercial meeting.", data: "Mondays · 09:00" }
    ],
    note: "Illustrative example. The cause of a stock-out requires investigation; Dinn does not presume it."
  },
  naSuaIa: {
    eyebrow: "Dinn + AI",
    title: "Use Dinn directly *in your AI*",
    description: "Connect Dinn to ChatGPT, Claude or Microsoft Copilot and ask for analyses, reports and materials using authorized data.",
    envs: ["ChatGPT", "Claude", "Microsoft Copilot"],
    bullets: [
      "Ask in natural language",
      "Drill down without restarting the analysis",
      "Turn recurring questions into routines"
    ],
    chat: {
      header: "Dinn Stock · illustrative conversation",
      user: "Compare stock-outs for Products A, B and C in SP. Which one needs attention first?",
      aiLabel: "AI · querying Dinn",
      answer: "Product A has the highest out-of-stock share in this scope.",
      rows: [
        ["Product A", "32%", "96 of 300 stores"],
        ["Product B", "20%", "48 of 240 stores"],
        ["Product C", "10%", "20 of 200 stores"]
      ],
      suggestion: "Suggestion: open Product A's chains and stores to investigate the concentration."
    },
    note: "Authorized, read-only access. Connection, files and scheduling depend on your AI's plan and configuration."
  },
  conecta: {
    eyebrow: "Dinn Conecta",
    title: "Pharma data. *Working together.*",
    description: "Market, internal and pharmacy data with the context your BI, Copilot and AI projects need. Dinn connects authorized sources, standardizes product, store and region, takes care of quality and freshness, and delivers into the environment your team already uses.",
    sourcesLabel: "Your sources",
    sources: ["IQVIA / Close-Up", "ERP, CRM and data lake", "Pharmacies"],
    hub: "Dinn Conecta",
    hubDesc: "Connection, standardization and pharma context",
    destLabel: "Your stack stays the same",
    destinations: ["BI", "Copilot", "Agents", "API"],
    responsibilities: [
      { title: "With you", desc: "Data, infrastructure and governance stay under your control." },
      { title: "With Dinn", desc: "Connection, cleansing, standardization of product, store and region, and pharma context." },
      { title: "Result", desc: "Information ready in your BI, Copilot and internal agents." }
    ],
    stripLabel: "Bring pharma context to",
    stripItems: ["Copilot", "ChatGPT", "Claude", "Gemini", "your agents"],
    cta: "See how it connects",
    note: "Each source depends on agreed licensing, authorization and scope."
  },
  solucoes: {
    eyebrow: "Solutions",
    title: "Pharmacy-channel problems, *already understood*",
    intro: "You don't have to figure out from scratch which signals matter. Dinn comes with the pharmacy channel's pains already mapped.",
    tabs: { outcome: "By outcome", team: "By team" },
    outcomes: [
      { title: "Reduce stock-outs", desc: "Know where product is missing by SKU, chain, city and store, and act before losing the sale.", tag: "Dinn Stock" },
      { title: "Negotiate with evidence", desc: "Bring availability, persistence and affected stores to the chain meeting, with a cut-off date.", tag: "Dinn Stock" },
      { title: "Prioritize the field", desc: "A list of what to check first, instead of a dashboard to interpret.", tag: "Dinn Manager" },
      { title: "Track launches", desc: "See the new product's presence by chain and region from the first weeks.", tag: "Dinn Stock" },
      { title: "Guide customer service", desc: "Point to the pharmacies most likely to have the product, with explicit confidence.", tag: "Dinn Locator" },
      { title: "Understand movement", desc: "Separate a demand drop from stock-outs, assortment or execution.", tag: "Dinn Pulse" },
      { title: "Pharma data in your BI and AI", desc: "Market, internal and pharmacy data ready for your stack.", tag: "Dinn Conecta" }
    ],
    teams: [
      { title: "Commercial leadership", desc: "Where to focus attention and how things evolved over 30, 60 and 90 days." },
      { title: "Trade marketing", desc: "Chains, regions, stores and SKUs prioritized for action in the channel." },
      { title: "Sales force and field", desc: "A simple, reliable list by portfolio or territory." },
      { title: "Demand and supply", desc: "Stock-out and sell-through signals, with exceptions and confidence." },
      { title: "Market intelligence", desc: "Availability crossed with the authorized market base." },
      { title: "Customer service and CX", desc: "Where to find the product and which alternative to suggest." },
      { title: "Technology and data", desc: "Processed data with source, freshness and coverage, via file, API or MCP." }
    ]
  },
  faq: {
    title: "Frequently asked questions",
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
        question: "What is the difference between observed and estimated data?",
        answer: "**Observed** is what the source reported directly, with location and time. **Estimated** is calculated from comparable stores and history when there is no direct answer, always with a confidence level. The base is updated daily (D-1) and, in eligible stores, you can check availability on demand."
      }
    ]
  },
  ctaFinal: {
    title: "Ready to turn signals into *action*?",
    description: "See in a demo how Dinn shows where to act, and with what confidence, for your products.",
    button: "Request a demo"
  },
  footer: {
    description: "The intelligence layer for the pharmacy channel. An initiative of DiWE Ventures Studio.",
    sectionA: "About Dinn",
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
    title: "What our clients say",
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
    heroTitle: "Dinn Insights",
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
    writtenBy: "By"
  }
};
