// Textos dos infográficos da página /plataforma (en). Chaves em platformViz.*
// All numbers are examples and are labeled as illustrative.
export const platformVizEn = {
  cover: {
    alt: "Illustration of the pharma channel: lab, transport, pharmacy and consumer connected by Dinn."
  },
  cycle: {
    hint: "Scroll to move the cycle forward",
    stepLabel: "Step {n} of {total}",
    example: "Example",
    ringLabel: "Six-step cycle: observe, validate, understand, decide, act and learn; then back to observing.",
    loop: "Continuous cycle",
    goTo: "Go to step"
  },
  demo: {
    tag: "Illustrative example",
    illustrative: "Example values, not real data.",
    tapHint: "Click to explore",
    reset: "Back to automatic"
  },
  stock: {
    observed: "Observed",
    estimated: "Estimated",
    toggleLabel: "How Dinn knows",
    observedChip: "Observed · D-1",
    estimatedChip: "Estimated · comparable stores",
    confidence: "Medium confidence",
    fromSource: "Read at the source",
    notRead: "No direct reading",
    summaryObserved: "2 stores read directly at the source, with the D-1 date",
    summaryEstimated: "2 stores estimated from comparable stores, with confidence stated"
  },
  manager: {
    rank: "This week's queue",
    done: "Checked",
    check: "What to check",
    chartTitle: "Store stock-out rate · last 30 days",
    chartFrom: "30 days ago",
    chartTo: "today",
    hint: "Click a store to mark it as checked: the queue reorders.",
    caption: "The queue moves up and down with the team's feedback."
  },
  insights: {
    you: "You",
    answerFrom: "Dinn Insights",
    scope: "Scope",
    date: "Date",
    method: "Method",
    kind: "Type",
    hint: "Click a question to see the answer.",
    scenarios: [
      {
        chip: "Store queue",
        q: "Which stores in my territory should I check first?",
        big: "6 of 40 stores",
        text: "concentrate 70% of the stock-out signal for product X in the last week.",
        scope: "São Paulo territory · Chains A, B and C",
        date: "D-1 base · last 30 days",
        method: "Days out of stock ÷ days observed; Critical level from 75%",
        kind: "Observed"
      },
      {
        chip: "DC or stores",
        q: "Is the gap at the distributor or in the pharmacies in Goiânia?",
        big: "82% at the DC",
        text: "and 38% of the pharmacies in the region out of stock: worth checking replenishment.",
        scope: "Goiânia · DC that supplies the region",
        date: "D-1 base",
        method: "Coverage = DC stock ÷ regional daily sales",
        kind: "Observed and estimated"
      },
      {
        chip: "Launch",
        q: "Has my launch reached pharmacies in Recife?",
        big: "54% of pharmacies",
        text: "monitored already carry the launch, in week 6.",
        scope: "Recife · monitored pharmacies",
        date: "D-1 base · week 6",
        method: "Observed presence; where there is no direct reading, estimated from comparable stores",
        kind: "Observed and estimated"
      }
    ]
  },
  mcp: {
    app: "MCP query",
    hub: "Dinn",
    readOnly: "Read-only",
    authorized: "Authorized tool",
    you: "Question",
    answer: "Answer with source and date",
    writeAsk: "Change the product catalog",
    blocked: "Not allowed: access is read-only.",
    assistants: [
      {
        name: "ChatGPT",
        q: "Which chains lost presence of product X in the South?",
        a: "Chain A: 31 of 120 stores with a drop. 24 observed and 7 estimated. D-1 base."
      },
      {
        name: "Claude",
        q: "Summarize the critical stores in my São Paulo territory.",
        a: "6 stores concentrate 70% of the stock-out signal. Each one with what to check, the source and the date."
      },
      {
        name: "Copilot",
        q: "Build the agenda for the meeting with Chain A.",
        a: "Three points: pending orders, product off the shelf and a gap that came back. With the source of each."
      }
    ]
  },
  conecta: {
    app: "Data flow",
    sources: "Sources",
    standard: "Standardized by product, store and region",
    destinations: "Destinations",
    columns: { ean: "Product (EAN)", cnpj: "Store (tax ID)", chain: "Chain", region: "Region" },
    done: "Standardized",
    replay: "Replay",
    rows: [
      { source: 0, ean: "789 000 000 012", cnpj: "00.000.000/0001-01", chain: "Chain A", region: "South" },
      { source: 2, ean: "789 000 000 029", cnpj: "00.000.000/0002-02", chain: "Chain B", region: "Southeast" },
      { source: 1, ean: "789 000 000 036", cnpj: "00.000.000/0003-03", chain: "Chain A", region: "Northeast" },
      { source: 2, ean: "789 000 000 043", cnpj: "00.000.000/0004-04", chain: "Chain C", region: "Midwest" }
    ]
  }
};
