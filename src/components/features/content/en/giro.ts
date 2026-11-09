import type { FeatureContent } from '../../types';

// Sell-through (giro), EN. Source: dinn-manager-app/docs/site-reproducao/funcionalidades/giro.md.
// Rules: sell-through is units that left stock, not a confirmed sale. Data is D-1. No promise of results.
export const content: FeatureContent = {
  slug: 'giro',
  meta: {
    title: 'Sell-through | Dinn',
    description: 'See if a product moves in each store and how many days its stock did not move. Data is from the day before, for 7, 30 or 90 days.',
  },
  hero: {
    title: 'Does the product move? See where stock stops.',
    sub: 'Dinn shows the units that left stock in each store, how many days stock did not move, and where to check a drop.',
    note: 'Data from the day before (D-1). Sell-through is an estimate. It does not confirm a sale.',
  },
  steps: [
    { title: 'Choose the product and the window', text: 'Filter by product, chain, state, city or Brick. Choose 7, 30 or 90 days. Sell-through by store shows when you choose one product.' },
    { title: 'See what moves and what is idle', text: 'Compare chains by availability. See how many stores are idle for 7, 30, 60 or 90 days. Sort the stores by idle days.' },
    { title: 'Open a store and investigate', text: 'Click a store to see sell-through, idle days and frozen stock for each product. Download the list or ask Jean.' },
  ],
  doors: {
    title: 'Where sell-through shows',
    intro: 'The same data reaches you in four ways. Choose the one that fits your question.',
    items: [
      {
        title: 'On Home',
        text: 'The Points of sale table shows sell-through, VB suggested, idle days and frozen stock for each store. Sort by idle days.',
        shot: { screen: 'turn', phase: 5, to: 'tbl' },
      },
      {
        title: 'In the store',
        text: 'Open any store. See sell-through, idle days and frozen stock for each product.',
        shot: { screen: 'rupture', phase: 9, to: 'm-tbl' },
      },
      {
        title: 'In the Locator',
        text: 'In the store pop-up, the Sell-through card shows the average units per day. The Idle card shows for how many days the stock did not move.',
        shot: { screen: 'locator', phase: 7, to: 'popup' },
        link: { slug: 'localizador', label: 'See the Locator' },
      },
      {
        title: 'In Distribution',
        text: 'The total sell-through of the region becomes the DC coverage in days, in the DC panel.',
        shot: { screen: 'dist', phase: 4, to: 'cdk' },
        link: { slug: 'distribuicao', label: 'See Distribution' },
      },
    ],
  },
  jean: {
    lead: 'Ask Jean where stock is idle. She opens the list on Home.',
    prompts: ['Where do I have the most frozen stock in the current scope?', 'Which stores hold the most frozen stock?', 'How many days of Cefalgin stock do I have in São Paulo?'],
    turns: [
      { q: 'Where do I have the most frozen stock?', a: 'These three chains have the most frozen stock. Open the list on Home, already filtered.',
        card: { title: 'Frozen stock in 30 days', rows: [['Rede Farmacore', '1,240 units'], ['Drogaria Serrana', '980 units'], ['Farmácias Vitalis', '760 units']] },
        steps: ['Open on Home'],
      },
      { q: 'How many days of Cefalgin stock do I have in São Paulo?', a: 'About 12 days, based on the average units that left stock in the last 30 days. This is an estimate.',
      },
    ],
  },
  inside: {
    title: 'Inside sell-through',
    sub: 'Scroll to see each step.',
    stages: [
      {
        tab: 'Chains',
        title: 'Which chains move',
        text: 'Each chain has three bands: Out of stock, No sales and In stock (selling). Hover over a chain to see the percentages and the total number of stores.',
        shot: { screen: 'turn', phase: 2, to: 'top' },
      },
      {
        tab: 'Idle',
        title: 'How many stores are idle',
        text: 'See the stores with idle stock for 7, 30, 60 and 90 days. The bands are cumulative: a store idle for 45 days counts in 7 and in 30.',
        shot: { screen: 'turn', phase: 3, to: 'st' },
      },
      {
        tab: 'Stores',
        title: 'Sell-through of each store',
        text: 'With one product chosen, the table shows sell-through, VB suggested, restock, idle days and frozen stock. Sort by idle days.',
        shot: { screen: 'turn', phase: 5, to: 'tbl' },
      },
      {
        tab: 'Product',
        title: 'Each product, in the store',
        text: 'The store panel shows the same measures for each product, with the idle stock alert.',
        shot: { screen: 'rupture', phase: 9, to: 'm-tbl' },
      },
    ],
  },
  read: {
    title: 'How to read the result',
    intro: 'Each number has a rule. Read the rule before you compare two screens.',
    rows: [
      { label: 'Sell-through on Home', text: 'Units that left the chosen product, added up for 7, 30 or 90 days. Includes sales and other stock movements. Restocking does not count.', how: 'Shows as 13 units. With no product chosen, it shows --.' },
      { label: 'Sell-through per day in the Locator', text: 'Average units that left stock per day in the last 30 days. It is total exits divided by 30.', how: 'Shows as 1.4 units/day. Do not compare it with the sum on Home.' },
      { label: 'VB suggested', text: 'Sales volume that the Dinn model suggests for the product, in units.', how: 'Shows as 2 units.' },
      { label: 'Restock', text: 'Restock that Dinn suggests for the product in the store, in SKU units.', how: 'Shows as 3 units. With no data, it shows --.' },
      { label: 'Idle days', text: 'Days in the chosen period when the stock of the product did not move.', how: 'Shows as 33 days of 90 days, with a thin bar.' },
      { label: 'Frozen', text: 'Units that stayed at the same quantity in stock for the whole period.', how: 'Shows as 3 units.' },
      { label: 'Idle stock alert', text: 'The store has stock, but the product does not move. Attention starts at 30 idle days. Critical applies at the limit of the 90-day window.', how: 'Amber triangle (Attention) or red triangle (Critical) next to Idle days.' },
      { label: 'Idle stock level', text: 'How many stores are idle for 7, 30, 60 or 90 days or more. The bands are cumulative. The percentage is of all stores, so the rows do not add up to 100%.', how: 'Four rows, each with a dot, a number and a bar.' },
      { label: 'Availability by chain', text: 'For each chain, the split of stores into Out of stock, No sales and In stock (selling) in the period.', how: 'Stacked columns in coral, amber and purple.' },
      { label: 'Estimated coverage', text: 'How long the stock should last, based on recent units that left stock. It is an estimate, not a guarantee. It shows only when stock is above zero.', how: 'A badge in the Locator pop-up. Examples: May run out in up to 2 days, 3 to 4 days, 5 to 7 days, or more than 7 days.' },
    ],
  },
  does: [
    'Shows estimated units that left stock for one product in each store of your portfolio, for 7, 30 or 90 days.',
    'Shows how many stores have stock that did not move for 7, 30, 60 and 90 days, and which stores they are.',
    'Shows the volume and the restock that the Dinn model suggests, when your company contracts these columns.',
    'Alerts you when a store has stock and the product does not move, so your team can check.',
  ],
  doesNot: [
    'It does not confirm a sale. A stock movement is not a confirmed sale.',
    'It does not give the reason for idle stock. The cause can be low demand, excess stock or a stock reading error.',
    'It does not show sell-through for several products together. Sell-through, VB suggested and restock have a value only with one product chosen.',
    'It does not show sell-through over time in a line chart. Today it shows totals by period and the average per day in the Locator.',
    'It is not real time. The data is from the day before.',
    'It does not promise more sales or less idle stock.',
  ],
  use: {
    title: 'How to use it well',
    consult: [
      'Choose one product in the Products filter. With no product or with several, the columns show --.',
      'Choose the table period: 7, 30 or 90 days. It changes Idle days, Frozen and Sell-through.',
      'To see a store on the map, open the Locator. Choose the product and the address. Click the pin.',
    ],
    analyze: [
      'Compare chains in the availability chart. Many No sales bands can show stock that does not move.',
      'In the idle stock card, see how many stores pass 30 and 60 days.',
      'Sort the table by Idle days. Look first at the stores with a red triangle.',
      'Open a store and compare the products. Stock with zero exits and many idle days calls for a talk with the chain.',
    ],
    extract: [
      'Use the Download button in the points of sale table. The file has all stores in the scope.',
      'The store panel also has Download, with the list of products of that store.',
      'Save the scope in Saved views to return to it with one click.',
      'Ask Jean and request the data in a table. The Locator has no download button.',
    ],
    formats: ['CSV', 'Excel (XLS)', 'PDF', 'JSON'],
    note: 'Sell-through and idle stock are alerts to check. The difference between two numbers can come from the period, the store or the stock reading.',
  },
  related: {
    title: 'Together with other features',
    intro: 'Sell-through answers one question. Other features answer related questions.',
    items: [
      { slug: 'ruptura', name: 'Stock-out', text: 'A store with no stock is a topic for Stock-out. Sell-through looks at a product that is in the store but does not move.' },
      { slug: 'preco', name: 'Price', text: 'The store price is in the column next to Sell-through, in the Home table.' },
      { slug: 'localizador', name: 'Product Locator', text: 'Find the product near an address and check the stock now.' },
      { slug: 'distribuicao', name: 'Distribution', text: 'The total sell-through of a region becomes the DC coverage in days.' },
    ],
  },
  faq: [
    { question: 'Is sell-through a sale?', answer: 'No. It is the units that left stock in the period. It includes sales and other movements. It does not include restocking. It is an estimate.' },
    { question: 'Why does the Sell-through column show --?', answer: 'There is no chosen product, or there is no data for the store. Choose exactly one product in the Products filter.' },
    { question: 'Why does it show "Not purchased"?', answer: 'Your company has not contracted the feature. Sell-through, VB suggested and Restock are contracted separately.' },
    { question: 'What is idle stock?', answer: 'It is stock reported at the same level for several days in a row. It is an alert to check. It does not always mean no sales.' },
    { question: 'What is frozen stock?', answer: 'It is the units that stayed at the same quantity for the whole period.' },
    { question: 'What is the difference between Attention and Critical?', answer: 'Attention: there is stock and the product has had no movement for 30 days or more. Critical: the product had no movement in the whole 90-day window.' },
    { question: 'Is the sell-through in the pop-up the same as in the table?', answer: 'No. The table adds up the exits of the period. The pop-up shows the average per day in the last 30 days. Do not compare the two numbers directly.' },
    { question: 'Is the data real time?', answer: 'No. It is from the day before (D-1). Only the "Check now" query in the Locator is live, at compatible stores.' },
    { question: 'Can I download sell-through?', answer: 'Yes, from the points of sale table and the store panel, in CSV, Excel, PDF or JSON.' },
  ],
  cta: {
    title: 'Want to see your product’s sell-through in stores?',
    text: 'Tell us which product and which chains matter. A person from the Dinn team shows you the scope.',
    button: 'Talk to Dinn',
  },
};
