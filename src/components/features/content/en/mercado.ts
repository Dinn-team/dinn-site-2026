import type { FeatureContent } from '../../types';

// Market. English version. Source: dinn-manager-app/docs/site-reproducao/funcionalidades/mercado.md (A1 to A10).
// Rules: sales are estimated from stock movement. Competitors show as one sum, not one by one.
// The share change in pp is in Opportunities.
export const content: FeatureContent = {
  slug: 'mercado',
  meta: {
    title: 'Market | Dinn',
    description: 'Compare your lab with the competitors in the same stores and the same period. Sales are estimated from stock movement.',
  },
  hero: {
    title: 'Did I lose share or lose sales?',
    sub: 'Dinn compares your lab with the competitors in the same stores and the same period. It also shows where only the competitor sells.',
    note: 'Sales are estimated from stock movement. Illustrative data and names.',
  },
  steps: [
    { title: 'Choose the market and the window', text: 'Set the Market, the Brick and the period. The filters apply to the cards, the donuts and the table.' },
    { title: 'Compare yourself with the competitors', text: 'See the share by lab and by product. In the chart, compare the estimated sales of your lab with those of the competitors.' },
    { title: 'Open stores or chains and download the list', text: 'Filter the stores that hold 80% of the volume or that have only competitors. Download in CSV, Excel, PDF or JSON.' },
  ],
  doors: {
    title: 'Where to start',
    intro: 'Market opens on the default market of your lab. From there, you reach the same data in three ways.',
    items: [
      {
        title: 'From the menu',
        text: 'Click Market in the side menu. The screen opens on the default market of your lab, with 30 days.',
        shot: { screen: 'market', phase: 3, to: 'dash' },
      },
      {
        title: 'From the filter',
        text: 'Change the Market, the Brick or the period at the top. To return to the same view, save it and use the Views button.',
        shot: { screen: 'market', phase: 1, to: 'mkt' },
      },
      {
        title: 'From the store table',
        text: 'Sort by volume. Filter the stores that hold 80% of the volume or that have only competitors.',
        shot: { screen: 'market', phase: 6, to: 'net' },
      },
    ],
  },
  jean: {
    lead: 'Jean opens with your Market view. Ask who gained share.',
    prompts: ['Who gained share in Brazil?', 'What changed in the last quarter in Brazil?', 'Who are the largest labs in the market?'],
    turns: [
      { q: 'Who gained share in Brazil?', a: 'Today your lab has the largest share, with 25.5% of estimated sales.',
        card: { title: 'Share by lab', rows: [['My lab', '25.5%'], ['Farmoquímica Aliança', '22.4%'], ['Bionova Genéricos', '17.9%']] },
      },
      { q: 'What changed in the last quarter?', a: 'Little. The drop of 0.9 pp is inside the margin of 1.3 pp. It does not show a loss.',
      },
    ],
  },
  inside: {
    title: 'Market, step by step',
    sub: 'Scroll to see each step.',
    stages: [
      {
        tab: 'Indicators',
        title: 'How many stores, and where the volume is',
        text: 'Total stores in market, stores with competitors only and stores with 80% of volume.',
        shot: { screen: 'market', phase: 3, to: 'dash' },
      },
      {
        tab: 'Share',
        title: 'Who sells how much',
        text: 'Two donuts: by lab and by product. The total shows in the center.',
        shot: { screen: 'market', phase: 4, to: 'lab' },
      },
      {
        tab: 'Estimated sales',
        title: 'You against the competitors',
        text: 'Two curves: My lab and Competitors. See it by day or by week, for 7, 30 or 90 days.',
        shot: { screen: 'market', phase: 6, to: 'sales' },
      },
      {
        tab: 'Stores',
        title: 'Where the volume is',
        text: 'The table by store, with search, three segments and sorting.',
        shot: { screen: 'market', phase: 6, to: 'net' },
      },
      {
        tab: 'Chains',
        title: 'Who covers what',
        text: 'The table by chain shows the registered stores, the stores with a record and the coverage.',
        shot: { screen: 'market', phase: 8, to: 'net' },
      },
    ],
  },
  read: {
    title: 'How to read the result',
    intro: 'All sales on this screen are estimated. Read the indicators as a signal to investigate.',
    rows: [
      { label: 'Total stores in market', text: 'Stores with positive estimated sales in the market. This is the base of the reading.', how: 'Card at the top.' },
      { label: 'Stores with competitors only', text: 'Stores with competitor sales and no sales from your lab.', how: 'Card at the top.' },
      { label: 'Stores with 80% of volume', text: 'The smallest set of stores that adds up to 80% of the market volume.', how: 'Card at the top. In the table, the Top 80% tag.' },
      { label: 'No my lab', text: 'The competitor sold on 2 days or more and your lab did not sell.', how: 'Outlined tag in the table.' },
      { label: 'Sales curves', text: 'My lab against the sum of the competitors, in the same stores.', how: 'My lab in purple and Competitors in blue.' },
      { label: 'Others slice', text: 'What is left after the seven largest slices of the donut.', how: 'Last slice of each donut.' },
      { label: 'Coverage', text: 'Stores with a record over stores registered in the chain. It can go above 100% when the registry is out of date.', how: 'Bar in the table by chain. The screen shows the number from the source.' },
      { label: 'Under review', text: 'Data under investigation. The screen shows the notice instead of the number.', how: 'The text Under review and an amber triangle.' },
    ],
  },
  does: [
    'Compares your lab with the sum of the competitors in the same market, in the same stores and in the same period.',
    'Shows the estimated share by lab and by product.',
    'Lists the stores and the chains by volume, with the monitoring coverage.',
    'Shows the stores where only the competitor sells.',
    'Exports the table, with the current filter.',
    'Saves views, with market and Brick, so you can return to the same view.',
  ],
  doesNot: [
    'It does not show real sales, invoices or audited sell-out. Sales are estimated from stock movement.',
    'It does not show the competitor product by product. Competitor data is aggregated.',
    'It does not cover all retail. It covers the chains in your contract.',
    'It does not calculate the share change in percentage points. That reading is in Opportunities.',
    'It is not real time. The data goes up to the previous day.',
    'It does not promise a gain in share or in sales.',
  ],
  use: {
    title: 'How to use it well',
    consult: [
      'Choose the Market. It is required. If you empty the list, it returns to the default.',
      'Choose the Brick and the period of 30, 60 or 90 days. The sales chart has its own period.',
      'Save the view you use and return to it with the Views button.',
    ],
    analyze: [
      'Your lab flat and Competitors up? Share can drop with no drop in sales, because the market grew. See in which chains and stores the competitors sell most.',
      'Your lab down and Competitors flat or up? Sales may have dropped. Check the coverage and the stores tagged No my lab.',
      'Both down? The market shrank or the measurement changed. Compare the share and the chain coverage before you decide.',
      'Your lab up and Competitors flat? You may be gaining share. Confirm in Opportunities, with the margin of 1.3 pp.',
      'Before you act, check the chain coverage. A store with no stock record can look like it has none of your product.',
    ],
    extract: [
      'Use the download button next to the table filters, by store or by chain.',
      'The file has all rows of the current filter, with no pages. The names are mercado-pdvs and mercado-redes, with the date.',
      'The Excel file is an .xls. Excel can show a format warning when it opens.',
      'Ask Jean who gained share or what changed in the last quarter. She receives your view.',
    ],
    formats: ['CSV', 'Excel (XLS)', 'PDF', 'JSON'],
    note: 'This reading is a signal to investigate. It is not proof. The share change, with its margin, is in Opportunities.',
  },
  related: {
    title: 'Together with other features',
    intro: 'Market shows the big picture. These features show where to act.',
    items: [
      { slug: 'oportunidades', name: 'Opportunities', text: 'To see the share change by state, city and Brick.' },
      { slug: 'preco', name: 'Price', text: 'To compare the price of your product between stores.' },
      { slug: 'ruptura', name: 'Stock-out', text: 'To check if the drop comes from a missing product.' },
      { slug: 'jean', name: 'Jean', text: 'Ask what changed in your market and get the summary.' },
    ],
  },
  faq: [
    { question: 'Are the sales real?', answer: 'No. They are estimated from stock movement. They are not invoices or audited sell-out.' },
    { question: 'Is the data real time?', answer: 'No. The screen shows the period you choose, up to the previous day (D-1).' },
    { question: 'What is a "market"?', answer: 'It is the set of products that compete with yours. Dinn sets the default market of your lab.' },
    { question: 'Can I see the competitors one by one?', answer: 'No. The screen shows the share by lab and by product, and the sum of the competitors. The data is aggregated and respects usage rights.' },
    { question: 'Why does coverage go above 100%?', answer: 'The chain registry can be out of date. The screen shows the number from the source and does not correct it.' },
    { question: 'Why does the curve drop at the end?', answer: 'The last week can be incomplete. The tooltip shows "(partial)".' },
    { question: 'What is the margin of a share change?', answer: 'About plus or minus 1.3 percentage points. The data starts from the stock position and can differ from sales audits. That reading is in Opportunities.' },
    { question: 'Who can see the screen?', answer: 'People at labs that contracted Market. Other users see a padlock.' },
  ],
  cta: {
    title: 'Want to see Market with your view?',
    text: 'Tell us your market. A person on the Dinn team replies.',
    button: 'Talk to Dinn',
  },
};
