import type { FeatureContent } from '../../types';

// Price (EN). Source: dinn-manager-app/docs/site-reproducao/funcionalidades/preco.md.
// Simplified Technical English (ASD-STE100). Product labels follow demo-i18n/*.json.
export const content: FeatureContent = {
  slug: "preco",
  meta: {
    title: "Price | Dinn",
    description: "See the price of a product in each store. The price is observed in the digital channel. The Locator shows the date of the reading.",
  },
  hero: {
    title: "What is the product price in each store?",
    sub: "Dinn shows the price observed in each pharmacy. In the Locator, it also shows the date of the reading and sorts from lowest to highest price.",
    note: "This is the price observed in the store's digital channel, not the shelf price. In the Locator, a reading can be up to 7 days old. Check the date.",
  },
  steps: [
    { title: "Choose the product and the address", text: "In the Locator, search for the product and the area. In Home, choose a product in the filter." },
    { title: "See the price in each store", text: "In the Locator, the price shows on the store card, with the date of the reading. If no price was read, the screen shows -- and gives the reason." },
    { title: "Sort and compare", text: "In the Locator, sort the other stores from lowest to highest price. Compare the chains. Open a store to see the price per unit." },
  ],
  doors: {
    title: "Where the price appears",
    intro: "The price appears in six places. In the Locator, it comes with the date of the reading. In Home, it sits next to sell-through, the units that left stock, and restock.",
    items: [
      {
        title: "In the Locator list",
        text: "The price is in the corner of each pharmacy card. The (i) icon shows the date of the reading.",
        shot: { screen: 'locator', phase: 6, to: 'store-0' },
        link: { slug: 'localizador', label: "See the Locator" },
      },
      {
        title: "In the sort order",
        text: "Change Closest to Lowest price or Highest price. The order applies to the other stores. Stores with no price stay at the end.",
        shot: { screen: 'locator', phase: 12, to: 'rest' },
      },
      {
        title: "In the store popup",
        text: "In the product stock card, the price shows per unit, next to the stock range and the sell-through.",
        shot: { screen: 'locator', phase: 7, to: 'p-box' },
      },
      {
        title: "In the Home table",
        text: "With one product chosen, the Price column shows the value for each store, next to sell-through, suggested volume and restock.",
        shot: { screen: 'price', phase: 2, to: 'tbl' },
      },
      {
        title: "In the store panel",
        text: "Open a store in Home and see the price of each of its products, next to sell-through and restock.",
        shot: { screen: 'rupture', phase: 9, to: 'm-tbl' },
      },
      {
        title: "Through Distribution",
        text: "The DC panel shows the average price at the DC and at the pharmacies in the area.",
        shot: { screen: 'dist', phase: 4, to: 'cdk' },
        link: { slug: 'distribuicao', label: "See Distribution" },
      },
    ],
  },
  jean: {
    lead: "Ask how the price varies between chains. The answer can come as a table.",
    prompts: ["How does the price of Cefalgin vary between chains?", "Which stores have no price?", "What is the lowest price of Cefalgin in São Paulo?"],
    turns: [
      { q: "How does the price of Cefalgin vary between chains?", a: "From R$ 36.50 to R$ 44.50.",
        card: { title: "Observed price", rows: [["Farmácias Vitalis", "R$ 36.50"], ["Drogaria Serrana", "R$ 39.90"], ["Drogarias Aurora", "R$ 44.50"]] },
      },
      { q: "Which stores have no price?", a: "112 of 805 stores. If no price was read, the screen shows --.",
        steps: ["Open in Home"],
      },
    ],
  },
  inside: {
    title: "The price, step by step",
    sub: "Scroll to see each step.",
    stages: [
      {
        tab: "List",
        title: "The price in each store",
        text: "Each card shows the store name and, in the corner, the price read. The (i) icon shows the date of the reading.",
        shot: { screen: 'locator', phase: 6, to: 'store-0' },
      },
      {
        tab: "Sort",
        title: "From lowest to highest",
        text: "Sort the other stores by lowest or highest price. Stores with no price stay at the end.",
        shot: { screen: 'locator', phase: 12, to: 'rest' },
      },
      {
        tab: "Store",
        title: "The price per unit",
        text: "In the popup, the price shows with the product stock in the store.",
        shot: { screen: 'locator', phase: 7, to: 'p-box' },
      },
      {
        tab: "Home",
        title: "Price by store, in the table",
        text: "With one product chosen, the points-of-sale table shows the price next to sell-through and restock.",
        shot: { screen: 'price', phase: 2, to: 'tbl' },
      },
    ],
  },
  read: {
    title: "How to read the result",
    intro: "The price is a reading. Check where it comes from before you compare two stores.",
    rows: [
      { label: "Price", text: "Value in reais observed in the store. In the Locator popup, it shows per unit.", how: "Shows as R$ 39.90." },
      { label: "Date of the reading", text: "The day Dinn read this price. It exists only in the Locator.", how: "(i) icon next to the price: Price observed on Nov 2, 2026." },
      { label: "No price", text: "Dinn did not read a price for the store. R$ 0.00 never appears. The screen gives the reason.", how: "Shows as --, with the (i) icon. Reasons: no reading in 7 days, estimated stock, or an e-commerce site that does not report the price." },
      { label: "Sort order", text: "Closest, Lowest price or Highest price. It applies only to the other stores. Distance breaks a tie.", how: "Selector above the Locator list. Stores with no price stay at the end." },
      { label: "Price in Home", text: "It shows only when exactly one product is chosen. The column does not sort.", how: "With no product chosen, it shows --." },
      { label: "Contract", text: "Price is contracted separately. Without the contract, the screen shows a padlock.", how: "On the padlock, the tip says the laboratory must contract this feature." },
    ],
  },
  does: [
    "Shows the observed price of a product in each store, with the date of the reading in the Locator.",
    "In the Locator, sorts the stores from lowest to highest price, or the reverse.",
    "Gives the reason when a store has no price, instead of showing zero.",
    "In Home, shows the price of each store next to sell-through, restock and idle days.",
  ],
  doesNot: [
    "Does not show the shelf price. It is the price of the store's digital channel.",
    "In the Locator, does not copy the price from another store. Does not estimate a price for a store with estimated stock. With no reading, it shows --.",
    "Does not recommend a price, does not say the right price, and does not compare with a reference price.",
    "Does not show price history or a price chart over time.",
    "Is not a source for promotions or offers.",
    "Does not show the price of every store. It shows only stores that send the price and have exact stock.",
  ],
  use: {
    title: "How to use it well",
    consult: [
      "In the Locator, choose the product and the address, then click Check pharmacies. The price shows on each card.",
      "Hover over the (i) icon next to the price to see the date of the reading. Hover over the (i) next to -- to see the reason.",
      "In Home, choose exactly one product in the Products filter and look at the Price column.",
    ],
    analyze: [
      "Sort by Lowest price and by Highest price. See which chains are at the ends.",
      "Compare only what is comparable: the same product, readings from close dates, and stores with a price read. A store with estimated stock shows no price and stays out of the count.",
      "In Home, filter the chain and compare the price of your stores in the same table.",
      "When a price is out of range, open the store and check the stock and the date before you talk to the chain.",
    ],
    extract: [
      "In Home, use the Download button. The file has the Price (R$) column. A store with no price has an empty cell.",
      "The Locator does not export. The Share button copies the address and the link, not the price.",
      "Save the view in Saved views to come back with one click.",
      "Ask Jean and request the answer in a table.",
    ],
    formats: ['CSV', 'Excel (XLS)', 'PDF', 'JSON'],
    note: "Price is an observation. Dinn does not say what the price should be or whether the store is right.",
  },
  related: {
    title: "Together with other features",
    intro: "Read the price together with stock and sell-through.",
    items: [
      { slug: 'localizador', name: "Product Locator", text: "This is where the price shows with the date of the reading and the sort order." },
      { slug: 'giro', name: "Sell-through", text: "In the Home table, the price sits next to sell-through and restock." },
      { slug: 'ruptura', name: "Stock-out", text: "Check that the store has the product before you compare the price." },
      { slug: 'jean', name: "Jean", text: "Ask how the price varies between chains. The answer can come as a table." },
    ],
  },
  faq: [
    { question: "Where does the price come from?", answer: "Dinn reads the price together with the stock, in the store's digital channel." },
    { question: "Is it the price in the physical store?", answer: "No. It is the price observed in the store's digital channel. The shelf price can be different." },
    { question: "Why does a store show --?", answer: "Dinn did not read the price. The store may not have sent the price in the last 7 days. The stock may be estimated. The e-commerce site may not report the price. The (i) icon shows the reason." },
    { question: "Can the price be R$ 0.00?", answer: "No. If no price was read, the screen shows --." },
    { question: "Is the price of one store copied from a nearby store?", answer: "No. In the Locator, it is the last price read in that same store." },
    { question: "What is the date of the price?", answer: "In the Locator, the (i) icon shows the day of the reading. Home does not show the date of the price." },
    { question: "Can I sort by price?", answer: "Yes, in the Locator. The order applies to the other stores. Stores with no price stay at the end. The Price column in Home does not sort." },
    { question: "Can I download the prices?", answer: "Yes, from the Home table, in CSV, Excel, PDF or JSON. The Locator does not download." },
    { question: "Why does a padlock appear?", answer: "Your company did not contract Price. It is contracted separately." },
  ],
  cta: {
    title: "Want to see your product price in stores?",
    text: "Tell us which product and which chains you care about. Someone on the Dinn team shows you that view.",
    button: "Talk to Dinn",
  },
};
