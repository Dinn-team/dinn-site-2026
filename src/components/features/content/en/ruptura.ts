import type { FeatureContent } from '../../types';

// Stock-out (EN). Source: dinn-manager-app/docs/site-reproducao/funcionalidades/ruptura.md.
// Rule: the base is D-1 and shows patterns and trends. In the store detail, Check now reads stock in real time. It does not confirm the stock-out of a store on one day.
export const content: FeatureContent = {
  slug: 'ruptura',
  meta: {
    title: 'Stock-out | Dinn',
    description: 'See where a product is missing and which stores to check first. Stock-out by store, chain and region, with the previous-day base and real-time stock at the store.',
  },
  hero: {
    title: 'Where is the product missing? Check these stores first.',
    sub: 'Dinn measures stock-out in the pharmacies of your portfolio. It shows the trend over time and ranks the stores by severity.',
    note: 'Base from the previous day (D-1) for patterns and trends. In the store detail, check stock in real time.',
  },
  steps: [
    { title: 'Choose the scope', text: 'Filter by product, chain, state, city or Brick. The filters apply to all charts and tables on the screen.' },
    { title: 'Read the stock-out', text: 'See the trend in the chart. See how many stores are at each level. See which products and chains miss the most.' },
    { title: 'Open a store and act', text: 'Click a store to see what is missing there, product by product. Download the list in Excel or ask Jean.' },
  ],
  doors: {
    title: 'Where stock-out appears',
    intro: 'The same reading reaches you in three ways. Start with the one that fits your question.',
    items: [
      {
        title: 'From the Home screen',
        text: 'The first screen of the portal shows the stock-out of your portfolio in the summary. It includes the trend over time and the store levels.',
        shot: { screen: 'rupture', phase: 4, to: 'dash' },
      },
      {
        title: 'From a store',
        text: 'Click any row in the points-of-sale table. The panel shows the stock-out of that store, product by product.',
        shot: { screen: 'rupture', phase: 6, to: 'm-tbl' },
      },
      {
        title: 'From a store check',
        text: 'In the store detail, click Check now. Dinn reads the stock of that store in real time and shows the time of the response. It works at compatible stores.',
        shot: { screen: 'rupture', phase: 8, to: 'm-est-0' },
      },
    ],
  },
  jean: {
    lead: 'Ask Jean which stores are most critical. Then open the ready list on Home.',
    prompts: ['What are the 10 most critical stores for stock-out?', 'Is the Cefalgin stock-out getting better?', 'Which chains miss the most product?'],
    turns: [
      { q: 'Which stores are most critical for stock-out?', a: 'There are 32 stores at Critical level. These are the first three.',
        card: { title: 'Stock-out in 30 days', rows: [['Drogaria Serrana Ipiranga', '82%'], ['Rede Farmacore Jardim América', '76%'], ['Rede Saúde Mais Vila Mariana', '75%']] },
        steps: ['Open on Home'],
      },
      { q: 'Is the stock-out getting better?', a: 'Yes. It fell from 39.0% to 26.2% in 12 weeks.',
      },
    ],
  },
  inside: {
    title: 'Stock-out in detail',
    sub: 'Scroll to see each stage.',
    stages: [
      {
        tab: 'Trend',
        title: 'Stock-out over time',
        text: 'Follow the line for 7, 30 or 90 days, in daily or weekly view. With more than one item, each item gets its own line.',
        shot: { screen: 'rupture', phase: 4, to: 'chart' },
      },
      {
        tab: 'Severity',
        title: 'How many stores at each level',
        text: 'Critical, High, Moderate and Low. The level shows how the store behaved in the last 30 days.',
        shot: { screen: 'rupture', phase: 3, to: 'lv' },
      },
      {
        tab: 'Stores',
        title: 'Which store to visit',
        text: 'Sort the list by level, stock-out or idle days. Each row shows the store, the chain and where it is.',
        shot: { screen: 'rupture', phase: 5, to: 'tbl' },
      },
      {
        tab: 'Store',
        title: 'The product that is missing',
        text: 'Open a store and see the ranking by SKU, with the stock range and the date of the estimate. Click Check now to see stock in real time.',
        shot: { screen: 'rupture', phase: 8, to: 'm-est-0' },
      },
    ],
  },
  read: {
    title: 'How to read the result',
    intro: 'The name stock-out has different bases in different places. Read the rule before you compare.',
    rows: [
      { label: 'Stock-out', text: 'Product out of stock at the point of sale, as a percentage of sales opportunities. Availability is 100% minus stock-out.', how: 'Shown as 34.4%.' },
      { label: 'Level', text: 'Critical: 75% or more. High: 50% to 74%. Moderate: 25% to 49%. Low: below 25%. It always uses a fixed 30-day window, cut on Saturday.', how: 'Colored tag next to the store.' },
      { label: 'Stock-out in the chart', text: 'Average weighted by the observed volume, for the chosen period and scope.', how: 'Line for 7, 30 or 90 days, in daily or weekly view.' },
      { label: 'Ranking by SKU', text: 'Points of sale with stock-out divided by the monitored points of sale, for the previous day.', how: 'Table of products, from the most missing to the least missing.' },
      { label: 'Stock-out in the stores table', text: 'Percentage of days with zero stock, in 7, 30 or 90 days.', how: 'Ring with the percentage next to the store.' },
      { label: 'Exact or estimated stock', text: 'Exact is the real reading from the e-commerce of the store. Estimated is the model projection, with a larger margin of error. The Model filter chooses the source.', how: 'Label in the store panel.' },
      { label: 'Doubtful data', text: 'When the data is under investigation or the sample is small, the screen shows a warning. It does not show zero.', how: 'Tags Under review and Small sample.' },
    ],
  },
  does: [
    'Measures the stock-out of the portfolio by product, chain, state, city and Brick, and shows the trend over time.',
    'Classifies each store as Critical, High, Moderate or Low.',
    'Ranks products, chains and stores from most critical to least critical.',
    'Shows, in each store, which products are missing and whether the stock is exact or estimated.',
    'Checks the stock of the store in real time, in the store detail, and shows the time of the response.',
    'Exports the tables and keeps saved views.',
  ],
  doesNot: [
    'Does not refresh the base during the day. The base is D-1. To see stock now, use Check now in the store detail.',
    'Does not confirm the stock-out of a store on one day. Use it to see patterns and trends.',
    'Does not count stores that never sold the item.',
    'Does not promise less stock-out or more sales.',
    'Does not mix up stock-out and idle stock. Idle stock has its own indicators, in Sell-through.',
  ],
  use: {
    title: 'How to use it well',
    consult: [
      'Choose the product, the chain and the region at the top. The filters apply to the whole screen.',
      'Choose 7, 30 or 90 days in the chart, and the daily or weekly view.',
      'Open a store to see the missing product and the date of the estimate.',
    ],
    analyze: [
      'Is my launch missing? Filter the product. Use 30 days and the Weekly view. In the ranking by chain, see who has most of the gaps. In the stores table, sort by Level and take Critical and High stores to the field.',
      'Where do I send the field team? Choose the state, the city or the Brick. Sort the stores by Level. Open the first stores and see the missing products. Download in Excel.',
      'Is the situation getting better? Compare 30 and 90 days in the chart. See the level card and come back the next week. Or ask Jean.',
      'Is the product missing, or is it not moving? In Availability at POS by chain, compare Out of stock with No sales. In the Idle stock level card, see the idle days.',
    ],
    extract: [
      'Use the Download button in the points-of-sale table, in the ranking by SKU or in the store panel.',
      'Save the scope in Saved views to come back with one click.',
      'Ask Jean and open the list already filtered.',
    ],
    formats: ['CSV', 'Excel (XLS)', 'PDF', 'JSON'],
    note: 'The number can differ from what you see in the pharmacy. The base is from yesterday, and part of the stock is estimated. To confirm a store now, use Check now. The value of the base is in the trend.',
  },
  related: {
    title: 'With other features',
    intro: 'Stock-out shows where the product is missing. These features help you understand the rest.',
    items: [
      { slug: 'giro', name: 'Sell-through', text: 'Stores with stock that does not move belong to Sell-through. See the idle days.' },
      { slug: 'localizador', name: 'Product Locator', text: 'See the stores near an address. Dinn already checks the five closest in real time.' },
      { slug: 'distribuicao', name: 'Distribution', text: 'See if the gap can start at the distribution center (DC), in restocking or at the pharmacy.' },
      { slug: 'jean', name: 'Jean', text: 'Ask which stores are most critical and open the ready list.' },
    ],
  },
  faq: [
    { question: 'Is the data real-time?', answer: 'The base is from the previous day (D-1), with the date at the top of the screen. But you can see the stock of a store in real time. Open the store and click Check now. The response shows the time of the query. It works at compatible stores.' },
    { question: 'Why does the Level not change when I change the table period?', answer: 'Because the Level always uses a fixed 30-day window, cut on Saturday.' },
    { question: 'Are 0% stock-out and "no data" the same?', answer: 'No. 0% is a measured value. "No data" means there is no measurement yet.' },
    { question: 'Why does the number differ from what I saw in the pharmacy?', answer: 'The base is from yesterday, and part of the stock is estimated. To see the stock of the store now, use Check now. Use the base to see trends, not to audit a store.' },
    { question: 'Does a store that never sold the product appear?', answer: 'No. Stores that never sold the item are not in the calculation.' },
    { question: 'Why does the Availability chart not show my chain?', answer: 'This chart shows only chains with an exact stock reading.' },
    { question: 'Can I download the data?', answer: 'Yes. The stores table, the ranking by SKU and the product list of a store export as CSV, Excel, PDF or JSON.' },
  ],
  cta: {
    title: 'Which scope do you want to see first?',
    text: 'We validate products, chains and regions, and the decision your team wants to improve.',
    button: 'Talk to Dinn',
  },
};
