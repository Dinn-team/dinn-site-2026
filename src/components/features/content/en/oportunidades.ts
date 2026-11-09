import type { FeatureContent } from '../../types';

// Opportunities (EN). Source: dinn-manager-app/docs/site-reproducao/funcionalidades/oportunidades.md (A1 to A10).
// Rules: sales are estimated from stock movement. Share change has a margin of plus or minus 1.3 pp.
// Actions are suggestions. They do not create tasks. The projection is a reference in validation.
export const content: FeatureContent = {
  slug: 'oportunidades',
  meta: {
    title: 'Opportunities | Dinn',
    description: 'See where the category grows and your lab loses share. Map by state, city and Brick, with estimated sales.',
  },
  hero: {
    title: 'In which territory does the category grow while I lose share?',
    sub: 'Select the question. Dinn colors the map by state and sorts the territories by signal. Then open the state, the city or the Brick.',
    note: 'Sales are estimated from stock movement. Share change has a margin of plus or minus 1.3 pp.',
  },
  steps: [
    { title: 'Select the question and the scope', text: 'Set the market, region, chain and period of 7, 30, 60 or 90 days. Then select one of three questions.' },
    { title: 'Read the map and the territories', text: 'Each state gets a signal. The table sorts the territories and shows the base of each number.' },
    { title: 'Open the detail and investigate', text: 'See chains, stores, competitors, history and projection. Ask Jean for up to 5 short actions.' },
  ],
  doors: {
    title: 'Where do you want to look?',
    intro: 'The three questions use the same scope and the same set of stores. The third, Where to look at expansion?, shows large chains in the category where the lab has little presence. It is a hypothesis. The chain and the KAM must confirm it. This question has no red signal.',
    items: [
      {
        title: 'Where does the category grow?',
        text: 'Largest rise in estimated volume, in the same set of stores. Shows where the market grows or shrinks by 5% or more.',
        shot: { screen: 'opps', phase: 0, to: 'qs' },
      },
      {
        title: 'Where does my lab lose share?',
        text: 'Largest drop in share, in percentage points. Shows where share changed by 2 pp or more.',
        shot: { screen: 'opps', phase: 2, to: 'terr' },
      },
      {
        title: 'In the state detail',
        text: 'Click a state to see market, lab, share and comparable stores, with a reading line in text.',
        shot: { screen: 'opps', phase: 3, to: 'dk' },
      },
    ],
  },
  jean: {
    lead: 'Jean already knows the scope of the screen. Ask who gained share and ask for actions.',
    prompts: ['Which competing brands gained share in Santa Catarina?', 'In which chains in Santa Catarina does this happen?', 'What actions do you recommend for Santa Catarina?'],
    turns: [
      { q: 'Who gained share in Santa Catarina?', a: 'Farmoquímica Aliança, in the last 4 weeks. The change for Bionova Genéricos is inside the 1.3 pp margin.',
        card: { title: 'Share change', rows: [['Farmoquímica Aliança', '+3.1 pp'], ['Bionova Genéricos', '+0.9 pp'], ['My lab', '−4.3 pp']] },
      },
      { q: 'What actions do you recommend?', a: 'Three short actions, by priority.',
        card: { title: 'Suggested actions', rows: [['Investigate the drop at Rede Farmacore', 'High'], ['Analyze the loss at Drogaria Serrana', 'High'], ['Track Farmácias Vitalis', 'Medium']] },
      },
    ],
  },
  inside: {
    title: 'The territory up close',
    sub: 'Scroll to see each stage.',
    stages: [
      {
        tab: 'Map',
        title: 'One pin for each state',
        text: 'Each state has a pin with the signal of the question. The glow shows the cities. Zoom in to see the Bricks.',
        shot: { screen: 'opps', phase: 2 },
      },
      {
        tab: 'Territories',
        title: 'The same reading as a list',
        text: 'Sort by any column. When you select a city, the table lists cities.',
        shot: { screen: 'opps', phase: 2, to: 'terr' },
      },
      {
        tab: 'Detail',
        title: 'One state, up close',
        text: 'Market, lab, share and comparable stores. Filter by chain, city and Brick.',
        shot: { screen: 'opps', phase: 3, to: 'dk' },
      },
      {
        tab: 'Actions',
        title: 'Up to 5 short actions',
        text: 'Jean reads the scenario and suggests actions. They are suggestions. They do not become tasks.',
        shot: { screen: 'opps', phase: 5, to: 'acts' },
      },
    ],
  },
  read: {
    title: 'How to read the result',
    intro: 'The signal changes with the question. Read the color together with the base of each number.',
    rows: [
      { label: 'Green', text: 'Market up: rise of 5% or more. Lab gains share: 2 pp or more. In the expansion question: large chains with little presence.', how: 'State pin and table badge.' },
      { label: 'Red', text: 'Market down by 5% or more, or lab loses 2 pp or more. The expansion question has no red signal.', how: 'State pin and table badge.' },
      { label: 'Amber', text: 'Weak data: few comparable stores or many stores that enter and leave. Confirm the data before you act.', how: 'Amber pin and badge.' },
      { label: 'Gray', text: 'Stable: change below 5% or 2 pp. In the expansion question, it means no candidate.', how: 'Gray pin.' },
      { label: 'Estimated sales', text: 'They come from stock movement. They are not audited sell-out.', how: 'Method bar, above the map.' },
      { label: '1.3 pp margin', text: 'Share change has this margin. A change of up to 1.3 pp is inside the margin.', how: 'Amber triangle in the column or card title.' },
      { label: 'Comparable panel', text: 'Only stores with valid data in both windows count. Entries and exits show separately.', how: 'Comparable stores card in the detail.' },
      { label: 'Being measured', text: 'A product with no measurement in both windows. It never becomes zero.', how: 'The text Being measured with an (i) that explains why.' },
      { label: 'Small panel', text: 'Few comparable stores. The signal is weak and the screen creates no actions.', how: 'Amber pill in the table.' },
      { label: 'In validation', text: 'The 4-week projection is a reference, not a validated model.', how: 'Dashed line with a band, labeled In validation.' },
    ],
  },
  does: [
    'Compares the category and the lab across two windows of the same length, in the same stores and the same products only.',
    'Shows by state, city and Brick where the category grows, where share falls and where there are chains to investigate.',
    'Shows competitors by lab and by product, the history and a 4-week reference projection.',
    'Shows what the comparison left out and why. When there is no data, it says so.',
    'Suggests up to 5 short actions, with priority, from the scenario.',
  ],
  doesNot: [
    'Does not show real sales, tax records or sell-out. Sales are estimated.',
    'Does not claim precision above 1.3 pp in share change.',
    'Does not measure search interest, treatment stage or new entrants. There is no source for them.',
    'Does not prove there is room to sell. Low presence in a chain is a hypothesis.',
    'Does not present the projection as a validated model and does not promise results.',
    'Does not create a task, an owner or a deadline. Actions are suggestions.',
  ],
  use: {
    title: 'How to use it well',
    consult: [
      'Select the Market, the Region, the Chain and the Period of 7, 30, 60 or 90 days. The Period applies at once. The other filters apply about 0.5 second after the last change.',
      'City opens only after you select a state. With a city, the table lists cities.',
      'In the detail, you can also select the Brick, a micro-region inside the city.',
      'Use Clear filters to go back to the default market.',
    ],
    analyze: [
      'Select Where does the category grow? and note the states with Market up.',
      'Switch to Where does my lab lose share? and see which states have Lab loses share.',
      'Compare the two lists. A state on both lists is where the market grows and share falls.',
      'Open the state. The reading line gives the cause in text.',
      'In Chains, compare Lab presence and Persistent competitor. In Competitors, see who gained share.',
      'Go down to the city and the Brick. Take care: up to 1.3 pp is inside the margin. A high percentage on a small base misleads, so also look at the change in units.',
    ],
    extract: [
      'Download the Territories table with the button next to the title.',
      'In the detail, download the Chains, Largest category changes and Competitors tables.',
      'The file has the table as it is on the screen, in the same order and with the current filters.',
      'The CSV file opens in Excel.',
    ],
    formats: ['CSV', 'Excel (XLS)', 'PDF', 'JSON'],
    note: 'The store list measures the change in the category. It does not measure the share lost by the lab.',
  },
  related: {
    title: 'Together with other features',
    intro: 'Opportunities points to the territory. The other features help you find the reason.',
    items: [
      { slug: 'mercado', name: 'Market', text: 'See share by lab and the stores where only the competitor sells.' },
      { slug: 'ruptura', name: 'Stock-out', text: 'See if the loss of share comes from a missing product.' },
      { slug: 'distribuicao', name: 'Distribution', text: 'See if the gap is in the DC or in restocking in that region.' },
      { slug: 'jean', name: 'Jean', text: 'Ask who gained share and ask for up to 5 short actions.' },
    ],
  },
  faq: [
    { question: 'Are the sales the real sales of the stores?', answer: 'No. They are estimated from stock movement in the monitored stores. They are not audited sell-out.' },
    { question: 'How precise is the share change?', answer: 'The margin is plus or minus 1.3 percentage points.' },
    { question: 'Why does a product show as "Being measured"?', answer: 'Its measured sales do not cover both windows. It stays out of the comparison and the screen explains why.' },
    { question: 'Why did the lab lose share if it sold more?', answer: 'Because the comparable market grew more than the lab.' },
    { question: 'What is the projection?', answer: 'A weekly reference for the next 4 weeks, with an uncertainty band. It is in validation. It is not a validated model.' },
    { question: 'Does the projection exist for a city or a Brick?', answer: 'No. Only for the whole state or for one chain at a time.' },
    { question: 'Do the actions become tasks?', answer: 'No. They are up to 5 suggestions with priority, with no owner and no deadline.' },
    { question: 'Why does "Small panel" show?', answer: 'There are few comparable stores. The signal is weak and the screen creates no actions.' },
    { question: 'Can I download the data?', answer: 'Yes, as CSV, Excel, PDF or JSON.' },
    { question: 'Who sees Opportunities?', answer: 'People who have the feature enabled. Other people see a lock.' },
  ],
  cta: {
    title: 'Want to see Opportunities with your market?',
    text: 'Tell us which market and which states you follow. A person on the Dinn team answers.',
    button: 'Talk to Dinn',
  },
};
