import type { FeatureContent } from '../../types';

// Distribution (EN). Source: dinn-manager-app/docs/site-reproducao/funcionalidades/distribuicao.md (A1 to A10).
// Rules: geographic proximity is not a supply link. The reading is a hypothesis. The data is D-1.
// The screen does not create orders, does not reallocate stock and does not write to the distributor system.
export const content: FeatureContent = {
  slug: 'distribuicao',
  meta: {
    title: 'Distribution | Dinn',
    description: 'Compare distributor stock with availability at pharmacies in the region. See coverage in days and a reading to help you find the cause.',
  },
  hero: {
    title: 'Is the gap at the DC, in replenishment or at the pharmacy?',
    sub: 'Compare distributor stock with availability at pharmacies in the region. See coverage in days and decide where to check first.',
    note: 'Data from the previous day (D-1). The reading is a hypothesis. You confirm the cause.',
  },
  steps: [
    { title: 'Choose the distributor and the product', text: 'Filter by distributor, DC and one product. Chain, State and City narrow down the pharmacies.' },
    { title: 'See the DC and the pharmacies side by side', text: 'The map shows each DC with a radius. Pharmacies inside it have a color that shows the stock level of the product.' },
    { title: 'Read the coverage and find the cause', text: 'The DC shows stock, coverage in days, sell-through and price. The Dinn reading suggests a hypothesis. You confirm the cause.' },
  ],
  doors: {
    title: 'Where you start',
    intro: 'Each question leads to one part of the screen.',
    items: [
      {
        title: 'Does the DC have the product?',
        text: 'The top cards and the history show how many DCs have stock and how the balance changed.',
        shot: { screen: 'dist', phase: 1, to: 'hist' },
      },
      {
        title: 'Do the pharmacies in the region have it?',
        text: 'The map shows the DC radius and the stock level of each pharmacy.',
        shot: { screen: 'dist', phase: 3, to: 'map' },
      },
      {
        title: 'How many days does the DC last?',
        text: 'The DC window divides stock by the estimated daily sales of the region.',
        shot: { screen: 'dist', phase: 4, to: 'cdk' },
      },
      {
        title: 'Which pharmacies are out of the product?',
        text: 'The DC list shows level, stock, sell-through and idle days, with search and sorting.',
        shot: { screen: 'dist', phase: 4, to: 'dlist' },
      },
    ],
  },
  jean: {
    lead: 'Jean knows which screen you are on and which filters are active. Ask for a reading in plain language.',
    prompts: ['Which pharmacies in the Brasília region are out of Cefalgin?', 'How many pharmacies in Brasília have low stock of Cefalgin?', 'Where do I have stock-outs near the DC?'],
    turns: [
      { q: 'Which pharmacies in Brasília are out of Cefalgin?', a: '41 of the 336 pharmacies within 30 km are out of Cefalgin.',
        card: { title: 'Pharmacies within 30 km', rows: [['Out of stock', '41'], ['In stock', '295'], ['Total', '336']] },
        steps: ['Open in Product Locator'],
      },
      { q: 'So is the gap at the DC?', a: 'We cannot say yet. It is a hypothesis. Check the order and the replenishment.',
      },
    ],
  },
  inside: {
    title: 'Distribution, step by step',
    sub: 'Scroll to see each step.',
    stages: [
      {
        tab: 'Filters and summary',
        title: 'One filter set, three numbers',
        text: 'Choose a distributor and a product. See how many DCs are monitored, how many products have records and the share of DCs with stock.',
        shot: { screen: 'dist', phase: 1, to: 'hist' },
      },
      {
        tab: 'Map',
        title: 'The DC and the region radius',
        text: 'The radius is 10, 30 or 50 km. The pharmacies inside it have a color that shows the stock level.',
        shot: { screen: 'dist', phase: 3, to: 'map' },
      },
      {
        tab: 'DC',
        title: 'Stock, coverage and Dinn reading',
        text: 'Click the DC. The window shows stock, coverage, sell-through, stock at pharmacies, price and a reading in text.',
        shot: { screen: 'dist', phase: 4, to: 'cdk' },
      },
      {
        tab: 'List',
        title: 'The pharmacies of the DC',
        text: 'Search by name, chain or CNPJ. Change the stock model. Download the list. The list shows where there is purchase history.',
        shot: { screen: 'dist', phase: 4, to: 'dlist' },
      },
    ],
  },
  read: {
    title: 'How to read the result',
    intro: 'The screen shows the DC and the pharmacies together. Read the two together.',
    rows: [
      { label: 'Pharmacy level', text: 'High, Medium, Low or None. The level comes ready from the database, for the chosen product.', how: 'Pin color: green, amber, red or gray.' },
      { label: 'DC level', text: 'The level comes from coverage. No stock is Unavailable. Under 7 days is Low. From 7 to 30 days is Medium. Over 30 days is High.', how: 'DC indicator in the window.' },
      { label: 'Coverage', text: 'DC stock divided by the estimated daily sales of the region. It is an approximation for the region. It is not the real coverage of that DC.', how: 'Shown in days, such as 8.6 days.' },
      { label: 'Sell-through', text: 'Units that left stock per day, added up across the pharmacies in the radius. It is not the total for the period.', how: 'Sell-through indicator (units/day).' },
      { label: 'DC with stock and pharmacies with stock', text: 'The flow is normal.', how: 'Dinn reading in text.' },
      { label: 'DC at zero and pharmacies with stock', text: 'This suggests the distribution is done. It is not a stock-out by itself.', how: 'Dinn reading in text.' },
      { label: 'DC with stock and pharmacies without stock', text: 'This is the gap. Treat it as a hypothesis. Check the order and the replenishment.', how: 'Dinn reading in text.' },
      { label: 'DC and pharmacies at zero', text: 'A real stock-out in the region.', how: 'Dinn reading in text.' },
      { label: 'Proximity or purchase', text: 'Proximity means the store is inside the radius. A supply link means the store bought the product from that DC in the last 90 days. One does not prove the other.', how: 'Which stores to show field and the DC purchase or Region only tag.' },
    ],
  },
  does: [
    'Shows the stock of the product at the distributor DCs and the availability at pharmacies in the region.',
    'Calculates the DC coverage in days from the estimated daily sales of the region.',
    'Gives a reading in plain text, with a hypothesis to check.',
    'Shows the stock history of the DCs, by day or by week.',
    'Lists the pharmacies of the DC, with search, sorting and download.',
  ],
  doesNot: [
    'Does not prove that the cause is at the DC, in replenishment or at the pharmacy. The reading is a hypothesis.',
    'Does not treat proximity as a supply link.',
    'Does not refresh the base during the day. The data is D-1. The stock of a pharmacy now comes from Check now.',
    'Does not show the exact stock of a pharmacy on the map. The popup shows the level.',
    'Does not create orders, does not reallocate stock and does not write to the distributor system.',
    'Does not cover all distributors. DC data collection is recent and the history is short.',
  ],
  use: {
    title: 'How to use it well',
    consult: [
      'Choose the distributor, or only some DCs, and one product.',
      'Narrow down by Chain, State and City. State and City show only what the distributor reaches.',
      'Set the radius, the period and Which stores to show in the map panel.',
      'Save the filter set and use the Views button to go back to it. Views stay in this browser, up to 30.',
    ],
    analyze: [
      'Does the DC have stock? If not, coverage has no value and the reading says the DC is out of stock.',
      'If it does, do the pharmacies in the radius have it? The donut and the panel show the share without stock.',
      'If the DC has stock and the pharmacies do not, check the order and the replenishment. Then confirm the purchase link, if there is history.',
      'In the DC list, sort by Stock, Idle or Frozen and change the Model.',
    ],
    extract: [
      'In the DC list, use the download button.',
      'The file follows the search, the model, the period and the order. It has all pages, up to 30,000 stores.',
      'The map, the chart and the cards have no export of their own.',
    ],
    formats: ['CSV', 'Excel (XLS)', 'PDF', 'JSON'],
    note: 'Jean knows which screen you are on and which filters are active. Ask for a reading in plain language.',
  },
  related: {
    title: 'Together with other features',
    intro: 'Distribution joins what other features measure at the point of sale.',
    items: [
      { slug: 'ruptura', name: 'Stock-out', text: 'To see the stock-outs at pharmacies before you look at the DC.' },
      { slug: 'giro', name: 'Sell-through', text: 'The sell-through of the region added up becomes the DC coverage in days.' },
      { slug: 'preco', name: 'Price', text: 'The DC window compares the price at the DC and at pharmacies in the region.' },
      { slug: 'localizador', name: 'Product Locator', text: 'To see a pharmacy in the region and check its stock now, at eligible stores.' },
    ],
  },
  faq: [
    { question: 'Is it real time?', answer: 'The base is D-1. To see the stock of a pharmacy now, use Check now in the DC list, in the store detail or in the Locator. It works for eligible stores.' },
    { question: 'Does a DC at zero mean a stock-out?', answer: 'Not always. A stock-out is the DC and the pharmacies at zero. A DC at zero with stocked pharmacies suggests the distribution is done.' },
    { question: 'Does a pharmacy inside the radius buy from this DC?', answer: 'We cannot say. Proximity is not a supply link. Where there is purchase history, use the purchase modes.' },
    { question: 'How is coverage calculated?', answer: 'DC stock divided by the estimated daily sales of the pharmacies in the radius. It is an approximation for the region.' },
    { question: 'Why is the history short?', answer: 'DC data collection is recent. The screen warns you when the history is short.' },
    { question: 'Can I download the list?', answer: 'Yes. Download the list of pharmacies of the DC as CSV, Excel, PDF or JSON.' },
    { question: 'Why do I see a padlock?', answer: 'Your company has not contracted the feature. The Support link shows below the padlock.' },
    { question: 'Do price and sell-through show for everyone?', answer: 'No. They depend on the Price and Sell-through features your company contracted.' },
  ],
  cta: {
    title: 'Want to see Distribution with your DCs?',
    text: 'Tell us which distributor and which product you follow. A person on the Dinn team replies.',
    button: 'Talk to Dinn',
  },
};
