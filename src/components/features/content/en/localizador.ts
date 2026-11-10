import type { FeatureContent } from '../../types';

// Product Locator (EN). Simplified Technical English. Source: dinn-manager-app/docs/site-reproducao/funcionalidades/localizador.md.
// Rules: the map and the list are from the previous day (D-1), as a range. The Locator checks the five closest stores in real time. At the other stores, "Check now" reads the store at that moment, one by one.
// No export. A chance of stock is not a guarantee.
export const content: FeatureContent = {
  slug: 'localizador',
  meta: {
    title: 'Product Locator | Dinn',
    description: 'Find the stores that have the product near any address. Dinn checks the five closest stores in real time. You check the others one by one.',
  },
  hero: {
    title: 'Find the stores that have the product, near any address.',
    sub: 'Enter the product and the address. Dinn shows nearby pharmacies on the map. You see the stock level, the reliability of the data and the date of the reading.',
    note: 'Yesterday’s base (D-1). The five closest stores in real time. The others, when you check.',
  },
  steps: [
    { title: 'Enter the product and the address', text: 'Search for the product by name or SKU. Type the reference address. Choose the radius, from 5 to 50 km. Dinn checks the five closest stores in real time.' },
    { title: 'Read the map and the list', text: 'Each pin is a pharmacy, colored by yesterday’s stock level. The list shows the range, reliability, distance and, if contracted, price.' },
    { title: 'Open the store and confirm', text: 'See sell-through, idle stock and the route. At a compatible store, check now and see the time of the response.' },
  ],
  doors: {
    title: 'Three questions the Locator answers',
    intro: 'Each one starts with the same search and ends at a different point on the screen.',
    items: [
      {
        title: 'The consumer’s call',
        text: 'A patient asks where to find a product. Search by the patient’s address. Dinn already checks the five closest stores in real time. Answer with what they reported and the time. Do not call store by store.',
        shot: { screen: 'locator', phase: 6, to: 'map' },
      },
      {
        title: 'This afternoon’s visit',
        text: 'Before you talk to the chain, check the store. At a compatible store, you see what it reports now. Take that data to the conversation.',
        shot: { screen: 'locator', phase: 9, to: 'p-box' },
      },
      {
        title: 'After a restock',
        text: 'Did the chain agree on a delivery? Check the same store again. See if the product shows in the response.',
        shot: { screen: 'locator', phase: 9, to: 'popup' },
      },
    ],
  },
  jean: {
    lead: 'Ask for the product and the city. Jean opens the Locator already filled in.',
    prompts: ['Where can I find Cefalgin cápsula 400mg in São Paulo?', 'Which pharmacies in Campinas have Cefalgin in stock?', 'Can I confirm if there is still stock now?'],
    turns: [
      { q: 'Where can I find Cefalgin in São Paulo?', a: 'There are 128 pharmacies within 5 km. These had stock in yesterday’s reading.',
        card: { title: 'Closest with stock', rows: [['Rede Farmacore Jardim América', '4–9 units'], ['Drogaria Serrana Ipiranga', '7–19 units']] },
        steps: ['Open in the Locator'],
      },
      { q: 'Can I confirm the stock now?', a: 'Yes, at a compatible store. Click Check now. The response shows the time.',
      },
    ],
  },
  inside: {
    title: 'From search to guidance, in five steps',
    sub: 'Scroll to see each stage.',
    stages: [
      {
        tab: 'Locate',
        title: 'Enter the address and the radius',
        text: 'Enter the address or area and the radius. Nearby pharmacies show on the map. Dinn checks the five closest in real time.',
        shot: { screen: 'locator', phase: 3, to: 'form' },
      },
      {
        tab: 'Pick the store',
        title: 'Open a store',
        text: 'The five closest stores come already checked in real time. For the others, the base reading is from yesterday. Only compatible stores have the check.',
        shot: { screen: 'locator', phase: 7, to: 'popup' },
      },
      {
        tab: 'Check now',
        title: 'Ask the store’s source',
        text: 'At any other compatible store, click Check now. Dinn asks the store’s source at that moment.',
        shot: { screen: 'locator', phase: 8, to: 'p-box' },
      },
      {
        tab: 'Answer',
        title: 'Answer and time',
        text: 'The answer shows the time of the check, apart from yesterday’s reading.',
        shot: { screen: 'locator', phase: 9, to: 'p-box' },
      },
      {
        tab: 'Guide',
        title: 'Share',
        text: 'Guide the consumer with what the store reported and when. Open the route and share the address.',
        shot: { screen: 'locator', phase: 9, to: 'popup' },
      },
    ],
  },
  read: {
    title: 'How to read the result',
    intro: 'The Locator shows three different readings. See which one is on the screen.',
    rows: [
      { label: 'Yesterday’s stock (D-1)', text: 'Stock range read on the previous day. It does not show the exact number.', how: 'Shown as 4–9 units, with the date of the estimate.' },
      { label: 'Estimated stock', text: 'Calculated from the history of the store. It always comes with the reliability level.', how: 'Estimated stock tag in the popup.' },
      { label: 'Live answer', text: 'What the store answered at that moment, with the time. Dinn does it on its own for the five closest stores. At the others, you click Check now. Only at a compatible store.', how: 'Shown as 6 units, with Checked now and the time.' },
      { label: 'Pin level', text: 'High in green, Medium in amber, Low in red, Unavailable in gray.', how: 'Color of the pin and of the range in the list.' },
      { label: 'Exact or estimated stock', text: 'Exact is the reading of the store’s e-commerce. Estimated is the projection of the model. Both show as a range.', how: 'Green or purple tag at the top of the popup.' },
      { label: 'Reliability', text: 'A, Reliable. B, Verification recommended. It shows how far to trust the store information.', how: 'Stock reliability line in the popup.' },
      { label: 'Estimated coverage', text: 'How long the stock should last, from recent history. It is an estimate, not a guarantee.', how: 'Tag May run out in 5 to 7 days.' },
      { label: 'Sell-through and Idle', text: 'Sell-through is the average number of units that left stock per day in the last 30 days. Idle shows for how many days the stock has not moved.', how: 'Two cards next to the stock.' },
    ],
  },
  does: [
    'Searches for pharmacies within 5 to 50 km of an address, for one product. The default is 5 km.',
    'Shows the level, yesterday’s stock range, reliability, estimated coverage, sell-through and idle days.',
    'Shows the price seen at the store, with the date of the reading, for customers who contracted price.',
    'Checks the stock of the five closest stores to the address in real time and shows the quantity with the time.',
    'At any other compatible store, checks the stock now, one store at a time, with the Check now button.',
    'Opens the route in Google Maps, copies the phone number, opens the store site and copies the address and link.',
    'Lets a person who checked the store report the real stock, to improve the model.',
  ],
  doesNot: [
    'Does not show the exact number from the previous day. Only range and level.',
    'Does not show all stores in real time. The base of the map and the list is from yesterday. The check at that moment covers the five closest stores and the stores you check.',
    'Does not guarantee that the product is on the shelf.',
    'Does not draw the radius on the map. The radius only limits the search.',
    'Does not check all stores live. It depends on chain, source and contracted scope.',
    'Does not export lists, maps or spreadsheets.',
  ],
  use: {
    title: 'How to use it well',
    consult: [
      'Start with a 5 km radius. Increase it if there are too few stores.',
      'Select In stock to see only the stores that have the product.',
      'Read the date of the information before you recommend a store.',
    ],
    analyze: [
      'Prefer Exact stock and reliability A.',
      'Before you recommend a store outside the five closest, use Check now.',
      'Compare price only between stores with a recent reading.',
      'If the stock you saw in the store is different, use Report.',
    ],
    extract: [
      'Use Open in Maps, Copy phone, Open site and Share.',
      'For the consumer, say: the store reported just now. Stock may change. Confirm before you go.',
      'The search returns up to 1,500 stores. There is no file export.',
    ],
    note: 'Reporting stock is not an export. Dinn uses the data to improve the model. It does not correct the number right away.',
  },
  related: {
    title: 'Together with other features',
    intro: 'The Locator puts on one card what other features measure at scale.',
    items: [
      { slug: 'giro', name: 'Sell-through', text: 'The Sell-through and Idle cards in the popup come from Sell-through.' },
      { slug: 'preco', name: 'Price', text: 'The price of each store shows on the card, with the date of the reading.' },
      { slug: 'ruptura', name: 'Stock-out', text: 'See the whole portfolio before you choose where to look.' },
      { slug: 'distribuicao', name: 'Distribution', text: 'If the store does not have the product, see the DC that supplies the region.' },
    ],
  },
  faq: [
    { question: 'Does the map show stock right now?', answer: 'In part. The base of the map and the list is from the previous day (D-1), as a range. Dinn checks the five closest stores to the address in real time. At the other stores, click Check now.' },
    { question: 'Which stores does Dinn check in real time?', answer: 'The five closest stores to the address. You can check the other stores one by one with the Check now button. It works at compatible stores.' },
    { question: 'Why does the exact number not show?', answer: 'The data from yesterday shows a range. The number comes only in the live check.' },
    { question: 'Does the answer guarantee the product is there?', answer: 'No. Stock can change after the answer. For this reason the screen shows the time.' },
    { question: 'Do all stores have Check now?', answer: 'No. Only stores with an e-commerce reading, according to chain, source and contracted scope.' },
    { question: 'What is the difference between Exact stock and Estimated stock?', answer: 'Exact is the reading of the store’s e-commerce. Estimated is a projection. Both show as a range.' },
    { question: 'What do A and B mean?', answer: 'It is the reliability of the information. A is the highest. B asks for verification.' },
    { question: 'What is the maximum radius?', answer: 'The maximum is 50 km. The radius goes from 5 to 50 km, with a default of 5 km. It limits the search. Dinn does not draw it on the map.' },
    { question: 'How many stores does the search return?', answer: 'Up to 1,500 stores per search.' },
    { question: 'Can I download the list?', answer: 'No. You can open the route, copy the phone number and share the address.' },
    { question: 'What happens when I report stock?', answer: 'Dinn saves the data to improve the model. The number does not change right away.' },
    { question: 'Why do some prices show as --?', answer: 'The store did not send the price, the product had no price reading in the last 7 days, or the store has estimated stock.' },
  ],
  cta: {
    title: 'Want to see the check with your chain and your product?',
    text: 'We validate products, chains, regions and the decision your team wants to improve.',
    button: 'Talk to Dinn',
  },
};
