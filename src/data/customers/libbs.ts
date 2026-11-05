import type { Customer } from './types';

export const pt: Customer = {
  slug: 'libbs',
  name: 'Libbs',
  sector: 'Indústria farmacêutica',
  hq: 'São Paulo, Brasil',
  useCase: 'Localizador de produtos para o SAC, análise de ruptura e estoque parado para o campo e a gestão',
  about: 'A Libbs é uma farmacêutica brasileira. Ela vende seus medicamentos de marca em farmácias de todo o país.',
  title: 'Libbs localiza produto e age sobre a ruptura',
  summary: 'SAC, campo e gestão da Libbs passaram a localizar produto, ler estoque parado e priorizar pontos de venda com o Dinn.',
  metaDescription: 'Em 5 meses, SAC, campo e gestão da Libbs passaram a localizar produto, ler estoque parado e priorizar PDVs com o Dinn. A perda estimada por estoque zero nos produtos foco é de cerca de 15% das unidades vendidas.',
  metrics: [
    { value: '49', label: 'usuários buscaram produtos no Localizador, em 2.627 buscas (contagem por produto)' },
    { value: 'De 50 a 1.500', label: 'farmácias por consulta, depois dos novos filtros de raio, estoque e confiabilidade' },
    { value: '≈ 15%', label: 'de perda estimada por estoque zero, sobre as unidades vendidas nos produtos foco, em 2 meses' },
    { value: '6', label: 'melhorias feitas com base no feedback dos usuários no 1º ciclo' },
  ],
  quote: {
    text: 'Hoje eu uso bastante o Dinn para achar as farmácias próximas do endereço do cliente, antes de ligar.',
    role: 'Analista do SAC',
    approved: false,
  },
  intro: [
    'Todo laboratório conhece o problema. O paciente chama o SAC, o consultor visita a farmácia, e ninguém sabe se o produto está na prateleira agora.',
    'Na Libbs, a pergunta era direta. Onde o paciente encontra o produto perto dele? Em quais lojas o produto está parado ou zerado? O SAC ligava para farmácias uma a uma. O campo e a gestão olhavam vendas passadas, sem ver o estoque do ponto de venda.',
    'A partir de junho de 2026, a Libbs passou a usar o Dinn no SAC, nas regionais de campo e na gestão.',
  ],
  problem: {
    title: 'Venda passada não mostra a falta de hoje',
      viz: [
        { kind: 'art', art: 'sac', g: 'web/lilas-azul', caption: 'Do paciente ao telefone à farmácia certa' },
      ],
    paragraphs: ['Antes do Dinn, havia três dificuldades.'],
    bullets: [
      'SAC sem resposta pronta. Para indicar uma farmácia ao paciente, o atendente pesquisava na internet, ligava para a loja e tentava de novo. O tempo de atendimento e as pendências cresciam.',
      'Campo sem priorização. O consultor sabia que havia ruptura, mas não onde, em quantos dias e se a causa era falta na loja ou no centro de distribuição.',
      'Gestão sem visão por faixa. A liderança queria agrupar lojas por tempo de produto parado (30, 60 e 90 dias), separar ruptura de produto desativado e priorizar regionais.',
    ],
    note: 'A pergunta do dia a dia: onde está o produto agora e onde ele está parado?',
  },
  solution: {
    title: 'Estoque exato e estimado, com nota por loja',
      viz: [
        { kind: 'screen', screen: 'locator', caption: 'Localizar Produto no Dinn: farmácias por distância, faixa de estoque de ontem (D-1) e nota de confiabilidade.' },
      ],
    paragraphs: [
      'O Dinn junta o estoque exato das lojas digitalizadas e o estoque estimado por modelo preditivo. Nas lojas digitalizadas, ele também consulta o estoque em tempo real.',
      'A tela mostra, para cada loja, giro, dias sem movimentação, preço observado e um índice de confiabilidade com notas A, B e C.',
    ],
    bullets: [
      'Apresentação da plataforma: 8 de junho de 2026',
      'Treinamento geral e início do uso em campo: 19 de junho de 2026',
      'Fase 1: 50 acessos, 10 para o SAC e 40 para as regionais',
      'Fontes: estoque diário D-1, preços, base de PDVs e produtos enviados pela Libbs',
      'Medição: buscas e usuários no Localizador, reports de divergência, formulário de satisfação e reuniões semanais',
    ],
  },
  stories: [
    {
      title: 'O SAC indica a farmácia sem ligar antes',
      paragraphs: [
        'O atendente busca o produto e informa o endereço ou o CEP do paciente. Ele filtra por raio (a partir de 5 km), estoque e nota de confiabilidade. O Dinn devolve as farmácias ordenadas por distância, com o estoque de cada uma.',
        'Em 24 de julho, o time do SAC apontou o ganho com o filtro de raio. Ele indica com mais assertividade as farmácias mais próximas do cliente. Na Imersão do SAC, em 9 de outubro, uma analista contou que localiza as farmácias no Dinn antes de pegar o telefone.',
        'A meta para o SAC foi reduzir as pendências geradas por busca de produto.',
      ],
      quote: {
        text: 'Com o Dinn eu acho as farmácias próximas do endereço do cliente antes de ligar. Eu só confirmo o telefone depois.',
        role: 'Analista do SAC',
        approved: false,
      },
    },
    {
      title: 'O campo também adotou o Localizador',
      paragraphs: [
        'Ninguém previu esse uso. O Localizador foi pensado para o SAC, mas os consultores passaram a abrir o mapa para planejar a ida a campo. Eles veem as regiões onde atuam e já decidem em cima do mapa.',
        'O Localizador virou a porta de entrada da plataforma. Em 25 de junho, o time já relatava que consultores usavam o mapa, em vez da tela de análise, para ir a campo. Em 3 de agosto, o time confirmou que o recurso era útil também para o campo.',
      ],
      quote: {
        text: 'A gente não previa que o campo ia usar o localizador. Eles começaram a usar mais aqui do que a própria tela de análise.',
        role: 'Time do projeto',
        approved: false,
      },
    },
    {
      title: 'A gestão leva o dado para a diretoria',
      paragraphs: [
        'Um gestor usou a plataforma para comparar canais de venda de um grupo de produtos cuja situação o time tinha dificuldade de explicar. Ele apresentou o estudo à diretoria.',
        'Na mesma reunião, o gestor pediu uma visão por faixas de estoque parado (30, 60 e 90 dias), para priorizar regionais e lojas críticas. Pediu também uma visão de lançamentos. Ela deve acompanhar o produto do centro de distribuição até as lojas.',
      ],
    },
    {
      title: 'O feedback do usuário vira produto',
      viz: [
        { kind: 'compare', title: 'Farmácias por consulta', from: { value: '50', label: 'limite antes dos novos filtros' }, to: { value: '1.500', label: 'com filtros de raio, estoque e confiabilidade' } },
      ],
      paragraphs: [
        'O Dinn coletou reports dos usuários por formulário e por reuniões semanais. O time sinalizou desconfiança sobre divergências de estoque, telas em branco e limite de resultados. O 1º ciclo gerou seis respostas concretas.',
      ],
      tables: [
        {
          head: ['O que o cliente apontou', 'O que o Dinn fez'],
          rows: [
            ['Confiança no estoque', 'Status do PDV e índice de qualidade visíveis no cartão da farmácia, notas A, B e C e nova versão do modelo preditivo'],
            ['Poucas farmácias na lista (limite de 50)', 'Limite removido, com filtros por raio, estoque e confiabilidade. A lista passou a trazer até 1.500 farmácias'],
            ['Telas em branco na análise de mercado', 'Correção aplicada e nova versão do painel em desenvolvimento'],
            ['Base cadastral de lojas', 'Cobertura ampliada junto com a evolução do Localizador'],
            ['Exportação de dados', 'Causa achada: bloqueio de download em tablets e navegadores. Usuários receberam orientação'],
            ['Usabilidade', 'Sugestões incluídas no planejamento da nova versão do painel'],
          ],
        },
      ],
      quote: {
        text: 'A equipe do Dinn se destacou por sua capacidade de entender profundamente nosso negócio, indo além da entrega de um simples produto digital. Eles ofereceram insights valiosos de negócios e mostraram uma disposição constante para acolher feedbacks e realizar ajustes, garantindo que a solução desenvolvida realmente agregasse valor à nossa equipe de vendas. Essa abordagem colaborativa e adaptativa foi crucial para o sucesso de nossa parceria.',
        role: 'Analista de inovação',
        approved: true,
      },
    },
  ],
  results: [
    {
      title: 'Uso do Localizador',
      viz: [
        { kind: 'line', title: 'Usuários por semana', sub: 'Localizador, produtos Libbs', labels: ['29/06', '06/07', '27/07', '31/08', '07/09', '05/10', '19/10'], series: [{ name: 'Usuários', values: [29, 33, 15, 16, 11, 27, 15] }] },
        { kind: 'bars', as: 'columns', title: 'Buscas por semana', sub: 'Localizador, produtos Libbs', items: [{ label: '29/06', value: 223 }, { label: '06/07', value: 275, hot: true }, { label: '27/07', value: 93 }, { label: '31/08', value: 152 }, { label: '07/09', value: 78 }, { label: '05/10', value: 135 }, { label: '19/10', value: 197 }] },
      ],
      paragraphs: ['O uso foi forte no lançamento, caiu no segundo semestre e subiu de novo em outubro. A alta veio depois de agendas com o campo e o SAC e da Imersão de 9 de outubro.'],
      note: 'Contagem por produto, sem separar por empresa. A captura de buscas começa em 29 de junho. Em 15 de outubro, o time resumiu: o volume de usuários, de logins e de telas acessadas aumentou, e o time está usando.',
    },
    {
      title: 'Tamanho da ruptura nos produtos foco',
      viz: [
        { kind: 'bars', as: 'rings', title: 'Unidades vendidas e perdidas', sub: 'Set e out/2026, estimativa técnica, base 100%', max: 100, items: [{ label: 'Vendidas nos pares PDV e produto', value: 100, display: '100%' }, { label: 'Potencialmente não vendidas por estoque zero', value: 15, display: '≈ 15%', hot: true }], note: 'A perda estimada é de cerca de 15% sobre as unidades vendidas. É potencial técnico, não faturamento perdido.' },
      ],
      paragraphs: ['Esta análise cobre o grupo de produtos mais buscados e citados pelo time em setembro e outubro de 2026. Ela inclui só pares PDV e produto com venda regular (pelo menos 6 unidades em 60 dias).'],
      tables: [
        {
          head: ['Indicador (set e out/2026)', 'Resultado'],
          rows: [
            ['Unidades vendidas nesses pares', 'Base: 100%'],
            ['Unidades potencialmente não vendidas por estoque zero', '≈ 15% da base'],
          ],
        },
      ],
      bullets: [
        'Os grupos de produtos de alto giro têm menos dias zerados, mas movimentam volume alto. Por isso concentram boa parte do potencial',
        'Nos grupos com pior disponibilidade, mais de um terço dos dias-loja tem estoque zero',
      ],
      note: 'Leitura segura. Esse percentual é um potencial técnico estimado. As vendas vêm da movimentação de estoque nas lojas. Não é perda real de faturamento. A validação final usa o sell-out oficial do cliente.',
    },
    {
      title: 'Como os usuários avaliam o Dinn hoje',
      viz: [
        { kind: 'bars', as: 'rings', title: 'Satisfação no 1º ciclo', sub: 'CSAT, nota de 1 a 5, 17 respostas', max: 5, digits: 2, items: [{ label: 'Média dos usuários (jun a ago/2026)', value: 3.35, display: '3,35 de 5' }] },
      ],
      paragraphs: ['O ponto de partida é transparente. A confiança no dado é a principal barreira. Ela cresce com o uso.'],
      tables: [
        {
          head: ['Indicador', 'Resultado'],
          rows: [
            ['Satisfação no 1º ciclo (jun a ago/2026)', '3,35 de 5 (67,1%), com 17 respostas'],
            ['Tema mais frequente nos reports', 'Confiança no estoque exibido, com divergência entre a tela e a loja'],
            ['Depois das melhorias', 'Retorno positivo sobre usabilidade e filtros (13/08). Nenhum novo relato de confiabilidade desde 8 de julho'],
          ],
        },
      ],
      note: 'O padrão é típico de uma ferramenta que entra na rotina. O SAC e o campo percebem o valor. Em 8 de outubro, o time pediu que o Dinn explique melhor o que a plataforma reflete do estoque real da farmácia.',
    },
  ],
  next: {
    title: 'O que vem a seguir',
    paragraphs: ['A Libbs ajuda a definir o roadmap do Dinn.'],
    tables: [
      {
        head: ['O que a Libbs pediu', 'O que está no plano'],
        rows: [
          ['Saber se o estoque mostrado é confiável', 'Notas A, B e C, índice de qualidade e consulta em tempo real em lojas digitalizadas'],
          ['Separar ruptura na loja de falta no centro de distribuição', 'Funcionalidade de distribuidores'],
          ['Faixas de estoque parado (30, 60 e 90 dias) e alertas de preço', 'Visão gerencial de estoque e de preço praticado'],
          ['Acompanhar lançamentos', 'Visão de lançamentos, do centro de distribuição às lojas'],
          ['Perguntar ao sistema onde agir primeiro', 'Dinn Insights, assistente em linguagem natural'],
        ],
      },
    ],
    note: 'Pela Libbs, os próximos passos são tornar o uso semanal uma rotina, acompanhar a redução das pendências do SAC e apresentar os resultados à diretoria. A diretoria decide a expansão.',
  },
};

export const en: Customer = {
  slug: 'libbs',
  name: 'Libbs',
  sector: 'Pharmaceutical industry',
  hq: 'São Paulo, Brazil',
  useCase: 'Product Locator for customer service (SAC), stock-out and stalled stock analysis for the field team and management',
  about: 'Libbs is a Brazilian pharmaceutical company. It sells its branded medicines in pharmacies across the country.',
  title: 'Libbs finds products and acts on stock-outs',
  summary: 'Libbs SAC, field team and management now find products, read stalled stock and rank stores with Dinn.',
  metaDescription: 'In 5 months, Libbs SAC, field team and management started to find products, read stalled stock and rank stores with Dinn. The estimated loss from zero stock in focus products is about 15% of units sold.',
  metrics: [
    { value: '49', label: 'users searched for products in the Product Locator, in 2,627 searches (count per product)' },
    { value: 'From 50 to 1,500', label: 'pharmacies per query, after the new radius, stock and reliability filters' },
    { value: '≈ 15%', label: 'of estimated loss from zero stock, on units sold in focus products, in 2 months' },
    { value: '6', label: 'improvements made from user feedback in the first cycle' },
  ],
  quote: {
    text: 'Today I use Dinn a lot to find the pharmacies near the customer’s address, before I call.',
    role: 'SAC analyst',
    approved: false,
  },
  intro: [
    'Every laboratory knows the problem. The patient calls SAC, the consultant visits the pharmacy, and nobody knows if the product is on the shelf now.',
    'At Libbs, the question was direct. Where does the patient find the product near them? In which stores is the product stalled or at zero? SAC called pharmacies one by one. The field team and management looked at past sales, with no view of store stock.',
    'Since June 2026, Libbs uses Dinn in SAC, in the regional field teams and in management.',
  ],
  problem: {
    title: 'Past sales do not show today’s gaps',
      viz: [
        { kind: 'art', art: 'sac', g: 'web/lilas-azul', caption: 'From the patient on the phone to the right pharmacy' },
      ],
    paragraphs: ['Before Dinn, there were three difficulties.'],
    bullets: [
      'SAC had no ready answer. To name a pharmacy to the patient, the agent searched the internet, called the store and tried again. Handling time and open cases grew.',
      'The field team had no priority list. The consultant knew there was a stock-out, but not where, for how many days, or if the cause was a gap in the store or in the distribution center.',
      'Management had no view by range. Leaders wanted to group stores by days of stalled stock (30, 60 and 90), separate stock-outs from discontinued products and rank regional teams.',
    ],
    note: 'The daily question: where is the product now, and where is it stalled?',
  },
  solution: {
    title: 'Exact and estimated stock, graded per store',
      viz: [
        { kind: 'screen', screen: 'locator', caption: 'Locate Product in Dinn: pharmacies by distance, yesterday’s stock range (D-1) and reliability grade.' },
      ],
    paragraphs: [
      'Dinn joins the exact stock of digitized stores with stock estimated by a predictive model. In digitized stores, it also checks stock in real time.',
      'For each store, the screen shows sell-through, days without movement, observed price and a reliability index with grades A, B and C.',
    ],
    bullets: [
      'Platform presentation: June 8, 2026',
      'General training and start of field use: June 19, 2026',
      'Phase 1: 50 accesses, 10 for SAC and 40 for the regional teams',
      'Sources: daily D-1 stock, prices, and the store and product base sent by Libbs',
      'Measurement: searches and users in the Product Locator, discrepancy reports, satisfaction form and weekly meetings',
    ],
  },
  stories: [
    {
      title: 'SAC names the right pharmacy without calling',
      paragraphs: [
        'The agent searches for the product and enters the patient’s address or postal code (CEP). The agent filters by radius (from 5 km), stock and reliability grade. Dinn returns the pharmacies sorted by distance, with the stock of each one.',
        'On July 24, the SAC team named the gain from the radius filter. It names the pharmacies nearest to the customer with more accuracy. At the SAC Immersion on October 9, an analyst said she finds the pharmacies in Dinn before she picks up the phone.',
        'The goal for SAC was to reduce the open cases caused by product searches.',
      ],
      quote: {
        text: 'With Dinn I find the pharmacies near the customer’s address before I call. I only confirm the phone number after.',
        role: 'SAC analyst',
        approved: false,
      },
    },
    {
      title: 'The field team also adopted the Product Locator',
      paragraphs: [
        'Nobody expected this use. The Product Locator was made for SAC, but consultants started to open the map to plan field visits. They see the regions where they work and decide on the map.',
        'The Product Locator became the entry point to the platform. On June 25, the team already reported that consultants used the map, not the analysis screen, to go to the field. On August 3, the team confirmed that the feature was also useful for the field team.',
      ],
      quote: {
        text: 'We did not expect the field team to use the locator. They started to use it more than the analysis screen itself.',
        role: 'Project team',
        approved: false,
      },
    },
    {
      title: 'Management takes the data to the board',
      paragraphs: [
        'A manager used the platform to compare sales channels for a group of products whose situation the team found hard to explain. He presented the study to the board.',
        'In the same meeting, the manager asked for a view by ranges of stalled stock (30, 60 and 90 days), to rank regional teams and critical stores. He also asked for a launch view. It must follow the product from the distribution center to the stores.',
      ],
    },
    {
      title: 'User feedback becomes product',
      viz: [
        { kind: 'compare', title: 'Pharmacies per query', from: { value: '50', label: 'limit before the new filters' }, to: { value: '1,500', label: 'with radius, stock and reliability filters' } },
      ],
      paragraphs: [
        'Dinn collected user reports through a form and weekly meetings. The team flagged distrust about stock discrepancies, blank screens and the result limit. The first cycle produced six concrete answers.',
      ],
      tables: [
        {
          head: ['What the customer flagged', 'What Dinn did'],
          rows: [
            ['Trust in the stock', 'Store status and quality index visible on the pharmacy card, grades A, B and C, and a new version of the predictive model'],
            ['Few pharmacies in the list (limit of 50)', 'Limit removed, with radius, stock and reliability filters. The list now shows up to 1,500 pharmacies'],
            ['Blank screens in the market analysis', 'Fix applied and new version of the dashboard in development'],
            ['Store registry base', 'Coverage grew with the evolution of the Product Locator'],
            ['Data export', 'Cause found: download block on tablets and browsers. Users received guidance'],
            ['Usability', 'Suggestions added to the plan for the new dashboard version'],
          ],
        },
      ],
      quote: {
        text: 'The Dinn team stood out for its ability to understand our business in depth, going beyond the delivery of a simple digital product. They offered valuable business insights and showed a constant willingness to welcome feedback and make adjustments, making sure the solution they built really added value for our sales team. This collaborative and adaptive approach was crucial to the success of our partnership.',
        role: 'Innovation analyst',
        approved: true,
      },
    },
  ],
  results: [
    {
      title: 'Product Locator use',
      viz: [
        { kind: 'line', title: 'Users per week', sub: 'Product Locator, Libbs products', labels: ['29 Jun', '6 Jul', '27 Jul', '31 Aug', '7 Sep', '5 Oct', '19 Oct'], series: [{ name: 'Users', values: [29, 33, 15, 16, 11, 27, 15] }] },
        { kind: 'bars', as: 'columns', title: 'Searches per week', sub: 'Product Locator, Libbs products', items: [{ label: '29 Jun', value: 223 }, { label: '6 Jul', value: 275, hot: true }, { label: '27 Jul', value: 93 }, { label: '31 Aug', value: 152 }, { label: '7 Sep', value: 78 }, { label: '5 Oct', value: 135 }, { label: '19 Oct', value: 197 }] },
      ],
      paragraphs: ['Use was strong at launch, fell in the second half of the year and rose again in October. The rise came after sessions with the field team and SAC, and after the October 9 Immersion.'],
      note: 'Count per product, not split by company. Search capture starts on June 29. On October 15, the team summarized: the volume of users, logins and screens viewed grew, and the team is using it.',
    },
    {
      title: 'Size of stock-outs in focus products',
      viz: [
        { kind: 'bars', as: 'rings', title: 'Units sold and lost', sub: 'Sep and Oct 2026, technical estimate, base 100%', max: 100, items: [{ label: 'Sold in store and product pairs', value: 100, display: '100%' }, { label: 'Potentially not sold because of zero stock', value: 15, display: '≈ 15%', hot: true }], note: 'The estimated loss is about 15% of the units sold. It is technical potential, not lost revenue.' },
      ],
      paragraphs: ['This analysis covers the group of products most searched for and cited by the team in September and October 2026. It includes only store and product pairs with regular sales (at least 6 units in 60 days).'],
      tables: [
        {
          head: ['Indicator (Sep and Oct 2026)', 'Result'],
          rows: [
            ['Units sold in these pairs', 'Base: 100%'],
            ['Units potentially not sold because of zero stock', '≈ 15% of the base'],
          ],
        },
      ],
      bullets: [
        'High sell-through product groups have fewer days at zero, but they move high volume. So they hold a large part of the potential',
        'In the groups with the worst availability, more than one third of store-days have zero stock',
      ],
      note: 'Safe reading. This percentage is an estimated technical potential. Sales come from stock movement in the stores. It is not real revenue loss. Final validation uses the official sell-out of the customer.',
    },
    {
      title: 'How users rate Dinn today',
      viz: [
        { kind: 'bars', as: 'rings', title: 'Satisfaction in the first cycle', sub: 'CSAT, score from 1 to 5, 17 responses', max: 5, digits: 2, items: [{ label: 'User average (Jun to Aug 2026)', value: 3.35, display: '3.35 of 5' }] },
      ],
      paragraphs: ['The starting point is transparent. Trust in the data is the main barrier. It grows with use.'],
      tables: [
        {
          head: ['Indicator', 'Result'],
          rows: [
            ['Satisfaction in the first cycle (Jun to Aug 2026)', '3.35 of 5 (67.1%), with 17 responses'],
            ['Most frequent theme in reports', 'Trust in the stock shown, with a gap between the screen and the store'],
            ['After the improvements', 'Positive feedback on usability and filters (Aug 13). No new reliability reports since July 8'],
          ],
        },
      ],
      note: 'The pattern is typical of a tool that enters the routine. SAC and the field team see the value. On October 8, the team asked Dinn to explain better what the platform shows of the real pharmacy stock.',
    },
  ],
  next: {
    title: 'What comes next',
    paragraphs: ['Libbs helps to set the Dinn roadmap.'],
    tables: [
      {
        head: ['What Libbs asked for', 'What is in the plan'],
        rows: [
          ['Know if the stock shown is reliable', 'Grades A, B and C, quality index and real-time check in digitized stores'],
          ['Separate a stock-out in the store from a gap in the distribution center', 'Distributor feature'],
          ['Stalled stock ranges (30, 60 and 90 days) and price alerts', 'Management view of stock and of the price charged'],
          ['Follow launches', 'Launch view, from the distribution center to the stores'],
          ['Ask the system where to act first', 'Dinn Insights, an assistant that answers in natural language'],
        ],
      },
    ],
    note: 'For Libbs, the next steps are to make weekly use a routine, track the drop in SAC open cases and present the results to the board. The board decides on the expansion.',
  },
};

export const es: Customer = {
  slug: 'libbs',
  name: 'Libbs',
  sector: 'Industria farmacéutica',
  hq: 'São Paulo, Brasil',
  useCase: 'Localizador de productos para atención al cliente (SAC), análisis de quiebre y stock detenido para el campo y la gestión',
  about: 'Libbs es una farmacéutica brasileña. Vende sus medicamentos de marca en farmacias de todo el país.',
  title: 'Libbs localiza producto y actúa sobre el quiebre',
  summary: 'El SAC, el campo y la gestión de Libbs ahora localizan producto, leen el stock detenido y priorizan tiendas con Dinn.',
  metaDescription: 'En 5 meses, el SAC, el campo y la gestión de Libbs empezaron a localizar producto, leer el stock detenido y priorizar tiendas con Dinn. La pérdida estimada por stock cero en los productos foco es de cerca de 15% de las unidades vendidas.',
  metrics: [
    { value: '49', label: 'usuarios buscaron productos en el Localizador de productos, en 2.627 búsquedas (conteo por producto)' },
    { value: 'De 50 a 1.500', label: 'farmacias por consulta, después de los nuevos filtros de radio, stock y confiabilidad' },
    { value: '≈ 15%', label: 'de pérdida estimada por stock cero, sobre las unidades vendidas en los productos foco, en 2 meses' },
    { value: '6', label: 'mejoras hechas con base en el feedback de los usuarios en el 1.er ciclo' },
  ],
  quote: {
    text: 'Hoy uso mucho Dinn para encontrar las farmacias cercanas a la dirección del cliente, antes de llamar.',
    role: 'Analista del SAC',
    approved: false,
  },
  intro: [
    'Todo laboratorio conoce el problema. El paciente llama al SAC, el consultor visita la farmacia, y nadie sabe si el producto está en el estante ahora.',
    'En Libbs, la pregunta era directa. ¿Dónde encuentra el paciente el producto cerca de él? ¿En qué tiendas el producto está detenido o en cero? El SAC llamaba a las farmacias una por una. El campo y la gestión miraban ventas pasadas, sin ver el stock de la tienda.',
    'Desde junio de 2026, Libbs usa Dinn en el SAC, en las regionales de campo y en la gestión.',
  ],
  problem: {
    title: 'La venta pasada no muestra el quiebre actual',
      viz: [
        { kind: 'art', art: 'sac', g: 'web/lilas-azul', caption: 'Del paciente al teléfono a la farmacia correcta' },
      ],
    paragraphs: ['Antes de Dinn, había tres dificultades.'],
    bullets: [
      'El SAC no tenía respuesta lista. Para indicar una farmacia al paciente, el agente buscaba en internet, llamaba a la tienda y volvía a intentar. El tiempo de atención y los casos abiertos crecían.',
      'El campo no tenía prioridad. El consultor sabía que había quiebre, pero no dónde, por cuántos días ni si la causa era una falta en la tienda o en el centro de distribución.',
      'La gestión no tenía vista por rango. El liderazgo quería agrupar tiendas por días de stock detenido (30, 60 y 90), separar quiebre de producto desactivado y priorizar regionales.',
    ],
    note: 'La pregunta del día a día: ¿dónde está el producto ahora y dónde está detenido?',
  },
  solution: {
    title: 'Stock exacto y estimado, con nota por tienda',
      viz: [
        { kind: 'screen', screen: 'locator', caption: 'Localizar producto en Dinn: farmacias por distancia, rango de stock de ayer (D-1) y nota de confiabilidad.' },
      ],
    paragraphs: [
      'Dinn une el stock exacto de las tiendas digitalizadas y el stock estimado por un modelo predictivo. En las tiendas digitalizadas, también consulta el stock en tiempo real.',
      'Para cada tienda, la pantalla muestra rotación, días sin movimiento, precio observado y un índice de confiabilidad con notas A, B y C.',
    ],
    bullets: [
      'Presentación de la plataforma: 8 de junio de 2026',
      'Capacitación general e inicio del uso en campo: 19 de junio de 2026',
      'Fase 1: 50 accesos, 10 para el SAC y 40 para las regionales',
      'Fuentes: stock diario D-1, precios, y la base de tiendas y productos enviada por Libbs',
      'Medición: búsquedas y usuarios en el Localizador de productos, reportes de divergencia, formulario de satisfacción y reuniones semanales',
    ],
  },
  stories: [
    {
      title: 'El SAC indica la farmacia sin llamar antes',
      paragraphs: [
        'El agente busca el producto e informa la dirección o el código postal (CEP) del paciente. El agente filtra por radio (desde 5 km), stock y nota de confiabilidad. Dinn devuelve las farmacias ordenadas por distancia, con el stock de cada una.',
        'El 24 de julio, el equipo del SAC señaló la ventaja del filtro de radio. Indica con más precisión las farmacias más cercanas al cliente. En la Inmersión del SAC, el 9 de octubre, una analista contó que localiza las farmacias en Dinn antes de tomar el teléfono.',
        'La meta para el SAC fue reducir los casos abiertos causados por la búsqueda de producto.',
      ],
      quote: {
        text: 'Con Dinn encuentro las farmacias cercanas a la dirección del cliente antes de llamar. Solo confirmo el teléfono después.',
        role: 'Analista del SAC',
        approved: false,
      },
    },
    {
      title: 'El campo también adoptó el Localizador de productos',
      paragraphs: [
        'Nadie previó este uso. El Localizador de productos se hizo para el SAC, pero los consultores empezaron a abrir el mapa para planificar la visita a campo. Ven las regiones donde actúan y deciden sobre el mapa.',
        'El Localizador de productos pasó a ser la puerta de entrada de la plataforma. El 25 de junio, el equipo ya informaba que los consultores usaban el mapa, en lugar de la pantalla de análisis, para ir a campo. El 3 de agosto, el equipo confirmó que la función era útil también para el campo.',
      ],
      quote: {
        text: 'No esperábamos que el campo fuera a usar el localizador. Empezaron a usarlo más que la propia pantalla de análisis.',
        role: 'Equipo del proyecto',
        approved: false,
      },
    },
    {
      title: 'La gestión lleva el dato a la dirección',
      paragraphs: [
        'Un gestor usó la plataforma para comparar canales de venta de un grupo de productos cuya situación el equipo tenía dificultad para explicar. Presentó el estudio a la dirección.',
        'En la misma reunión, el gestor pidió una vista por rangos de stock detenido (30, 60 y 90 días), para priorizar regionales y tiendas críticas. También pidió una vista de lanzamientos. Debe seguir el producto desde el centro de distribución hasta las tiendas.',
      ],
    },
    {
      title: 'El feedback de los usuarios se vuelve producto',
      viz: [
        { kind: 'compare', title: 'Farmacias por consulta', from: { value: '50', label: 'límite antes de los nuevos filtros' }, to: { value: '1.500', label: 'con filtros de radio, stock y confiabilidad' } },
      ],
      paragraphs: [
        'Dinn recogió reportes de los usuarios por formulario y en reuniones semanales. El equipo señaló desconfianza sobre divergencias de stock, pantallas en blanco y el límite de resultados. El 1.er ciclo generó seis respuestas concretas.',
      ],
      tables: [
        {
          head: ['Lo que el cliente señaló', 'Lo que Dinn hizo'],
          rows: [
            ['Confianza en el stock', 'Estado de la tienda e índice de calidad visibles en la ficha de la farmacia, notas A, B y C, y una nueva versión del modelo predictivo'],
            ['Pocas farmacias en la lista (límite de 50)', 'Límite eliminado, con filtros de radio, stock y confiabilidad. La lista ahora trae hasta 1.500 farmacias'],
            ['Pantallas en blanco en el análisis de mercado', 'Corrección aplicada y nueva versión del panel en desarrollo'],
            ['Base de registro de tiendas', 'La cobertura creció con la evolución del Localizador de productos'],
            ['Exportación de datos', 'Causa encontrada: bloqueo de descarga en tablets y navegadores. Los usuarios recibieron orientación'],
            ['Usabilidad', 'Sugerencias incluidas en la planificación de la nueva versión del panel'],
          ],
        },
      ],
      quote: {
        text: 'El equipo de Dinn se destacó por su capacidad de entender a fondo nuestro negocio, yendo más allá de la entrega de un simple producto digital. Ofreció insights valiosos de negocio y mostró una disposición constante para acoger feedback y hacer ajustes, garantizando que la solución desarrollada realmente aportara valor a nuestro equipo de ventas. Este enfoque colaborativo y adaptativo fue crucial para el éxito de nuestra alianza.',
        role: 'Analista de innovación',
        approved: true,
      },
    },
  ],
  results: [
    {
      title: 'Uso del Localizador de productos',
      viz: [
        { kind: 'line', title: 'Usuarios por semana', sub: 'Localizador de productos, productos Libbs', labels: ['29 jun', '6 jul', '27 jul', '31 ago', '7 sep', '5 oct', '19 oct'], series: [{ name: 'Usuarios', values: [29, 33, 15, 16, 11, 27, 15] }] },
        { kind: 'bars', as: 'columns', title: 'Búsquedas por semana', sub: 'Localizador de productos, productos Libbs', items: [{ label: '29 jun', value: 223 }, { label: '6 jul', value: 275, hot: true }, { label: '27 jul', value: 93 }, { label: '31 ago', value: 152 }, { label: '7 sep', value: 78 }, { label: '5 oct', value: 135 }, { label: '19 oct', value: 197 }] },
      ],
      paragraphs: ['El uso fue fuerte en el lanzamiento, cayó en el segundo semestre y subió de nuevo en octubre. La subida vino después de sesiones con el campo y el SAC y de la Inmersión del 9 de octubre.'],
      note: 'Conteo por producto, sin separar por empresa. La captura de búsquedas empieza el 29 de junio. El 15 de octubre, el equipo resumió: el volumen de usuarios, de inicios de sesión y de pantallas vistas aumentó, y el equipo lo está usando.',
    },
    {
      title: 'Tamaño del quiebre en los productos foco',
      viz: [
        { kind: 'bars', as: 'rings', title: 'Unidades vendidas y perdidas', sub: 'Sep y oct de 2026, estimación técnica, base 100%', max: 100, items: [{ label: 'Vendidas en los pares tienda y producto', value: 100, display: '100%' }, { label: 'Potencialmente no vendidas por stock cero', value: 15, display: '≈ 15%', hot: true }], note: 'La pérdida estimada es de cerca de 15% sobre las unidades vendidas. Es potencial técnico, no facturación perdida.' },
      ],
      paragraphs: ['Este análisis cubre el grupo de productos más buscados y citados por el equipo en septiembre y octubre de 2026. Incluye solo pares tienda y producto con venta regular (al menos 6 unidades en 60 días).'],
      tables: [
        {
          head: ['Indicador (sep y oct de 2026)', 'Resultado'],
          rows: [
            ['Unidades vendidas en estos pares', 'Base: 100%'],
            ['Unidades potencialmente no vendidas por stock cero', '≈ 15% de la base'],
          ],
        },
      ],
      bullets: [
        'Los grupos de productos de alta rotación tienen menos días en cero, pero mueven un volumen alto. Por eso concentran buena parte del potencial',
        'En los grupos con peor disponibilidad, más de un tercio de los días-tienda tiene stock cero',
      ],
      note: 'Lectura segura. Este porcentaje es un potencial técnico estimado. Las ventas vienen del movimiento de stock en las tiendas. No es una pérdida real de facturación. La validación final usa el sell-out oficial del cliente.',
    },
    {
      title: 'Cómo evalúan hoy los usuarios a Dinn',
      viz: [
        { kind: 'bars', as: 'rings', title: 'Satisfacción en el 1.er ciclo', sub: 'CSAT, nota de 1 a 5, 17 respuestas', max: 5, digits: 2, items: [{ label: 'Promedio de los usuarios (jun a ago de 2026)', value: 3.35, display: '3,35 de 5' }] },
      ],
      paragraphs: ['El punto de partida es transparente. La confianza en el dato es la principal barrera. Crece con el uso.'],
      tables: [
        {
          head: ['Indicador', 'Resultado'],
          rows: [
            ['Satisfacción en el 1.er ciclo (jun a ago de 2026)', '3,35 de 5 (67,1%), con 17 respuestas'],
            ['Tema más frecuente en los reportes', 'Confianza en el stock mostrado, con divergencia entre la pantalla y la tienda'],
            ['Después de las mejoras', 'Comentario positivo sobre usabilidad y filtros (13 de agosto). Ningún nuevo reporte de confiabilidad desde el 8 de julio'],
          ],
        },
      ],
      note: 'El patrón es típico de una herramienta que entra en la rutina. El SAC y el campo ven el valor. El 8 de octubre, el equipo pidió que Dinn explique mejor qué refleja la plataforma del stock real de la farmacia.',
    },
  ],
  next: {
    title: 'Qué viene a continuación',
    paragraphs: ['Libbs ayuda a definir el roadmap de Dinn.'],
    tables: [
      {
        head: ['Lo que Libbs pidió', 'Lo que está en el plan'],
        rows: [
          ['Saber si el stock mostrado es confiable', 'Notas A, B y C, índice de calidad y consulta en tiempo real en tiendas digitalizadas'],
          ['Separar el quiebre en la tienda de la falta en el centro de distribución', 'Función de distribuidores'],
          ['Rangos de stock detenido (30, 60 y 90 días) y alertas de precio', 'Vista de gestión del stock y del precio practicado'],
          ['Seguir los lanzamientos', 'Vista de lanzamientos, del centro de distribución a las tiendas'],
          ['Preguntar al sistema dónde actuar primero', 'Dinn Insights, un asistente en lenguaje natural'],
        ],
      },
    ],
    note: 'Por parte de Libbs, los próximos pasos son hacer del uso semanal una rutina, seguir la baja de los casos abiertos del SAC y presentar los resultados a la dirección. La dirección decide la expansión.',
  },
};
