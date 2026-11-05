import type { Customer } from './types';

export const pt: Customer = {
  slug: 'lilly',
  name: 'Lilly',
  sector: 'Indústria farmacêutica',
  hq: 'São Paulo, Brasil',
  useCase: 'Análise de mercado: da ruptura no PDV à concorrência e às oportunidades',
  about: 'A Lilly é uma farmacêutica global, com portfólio de alta demanda no Brasil.',
  title: 'Como a Lilly vê onde concorrentes ganham espaço',
  summary: 'A Lilly começou a usar o Dinn para achar produto em falta. Depois, ajudou a criar um painel que mostra onde a participação cai, por estado e rede.',
  metaDescription: 'A Lilly começou a usar o Dinn para achar produto em falta nas farmácias. Quando a escassez passou, ajudou a criar um painel. Ele mostra onde a participação cai e quem ganha espaço, por estado e rede.',
  metrics: [
    { value: '14 dias', label: 'entre o pedido estratégico da Lilly e a entrega do Painel de Oportunidades' },
    { value: '10 pedidos', label: 'do time B2B atendidos e reportados em 13 dias' },
    { value: 'Milhares', label: 'de PDVs observados por semana no mercado de alta demanda' },
    { value: '3 regras', label: 'de ação sugerida para o KAM, sem número inventado por IA' },
  ],
  quote: {
    text: 'Hoje a ruptura é o menor dos nossos problemas. Agora a gente precisa de uma análise mais estratégica de mercado.',
    role: 'Time B2B',
    approved: false,
  },
  intro: [
    'Muitos laboratórios compram o Dinn para resolver ruptura. A Lilly também começou assim, num período de escassez do produto.',
    'Em 2026 o cenário mudou. O produto voltou às farmácias. A pergunta do time comercial passou a ser outra: quem ganha espaço no PDV, onde, e o que fazer antes de a auditoria tradicional mostrar?',
    'A Lilly respondeu a essa pergunta junto com o Dinn. O time B2B fez o pedido. O Dinn construiu um protótipo no dia seguinte. O Painel de Oportunidades entrou no ar em duas semanas.',
  ],
  problem: {
    title: 'A necessidade de ontem não é a de hoje',
    viz: [
      { kind: 'art', art: 'trade', g: 'web/rosa-fluxo', caption: 'Do estoque na loja ao espaço no mercado' },
    ],
    paragraphs: [
      'Em julho, no kickoff, a Lilly queria uma visão de disponibilidade por loja e por rede. A visão serviria à negociação comercial e à operação.',
      'Três meses depois, o time reavaliou o valor da ferramenta. Em 5 de outubro, a Lilly escreveu ao Dinn:',
    ],
    bullets: [
      'O contexto mudou. A ferramenta serviria para achar regiões e clientes prioritários com escassez de produto. Essa necessidade quase desapareceu.',
      'O Dinn precisa entregar o que as outras fontes não entregam: análises prospectivas e oportunidades futuras de mercado.',
      'Dúvida de confiança. Um relatório apontou possível ruptura em clientes que tinham estoque.',
    ],
    note: 'A Lilly pediu uma só experiência com o "retrovisor" (o histórico) e o "para-brisa" (o que vem pela frente).',
  },
  solution: {
    title: 'Nova camada: o Painel de Oportunidades',
    viz: [
      { kind: 'screen', screen: 'market', caption: 'Mercado no Dinn: participação por laboratório e vendas estimadas do laboratório contra os concorrentes.' },
    ],
    paragraphs: [
      'O Dinn já tinha, para a Lilly, estoque diário por loja e por rede, ruptura, preço e um mercado de referência. Em outubro, o Dinn ganhou uma nova camada.',
      'Essa camada acompanha o mercado de alta demanda. O Dinn o observa em milhares de PDVs por semana.',
      'O Painel de Oportunidades responde a perguntas de negócio, por estado, rede e cidade:',
    ],
    bullets: [
      'Onde a categoria cresce?',
      'Onde a minha marca perde participação?',
      'Onde há espaço para expandir?',
    ],
    note: 'O painel sugere ações para o KAM com regras fixas. Nenhuma IA inventa número. Sinal fraco não vira tarefa. O Dinn Insights complementa o painel. O usuário pergunta em linguagem natural e recebe a resposta com os dados da empresa.',
  },
  stories: [
    {
      title: 'Ruptura: ver onde falta produto, loja a loja',
      viz: [
        { kind: 'bars', title: 'Dias-loja com estoque zero, por grupo de dose', sub: 'Out/2026, razão sobre as doses de menor concentração', digits: 1, items: [{ label: 'Doses de menor concentração', value: 1, display: '1,0x (base)' }, { label: 'Doses de maior concentração', value: 1.7, display: 'cerca de 1,7x', hot: true }], note: 'A taxa mede dias-loja com estoque zero. Ela não mede venda perdida.' },
      ],
      paragraphs: [
        'O Dinn mostrou à Lilly, pela primeira vez, a disponibilidade do produto por loja e por rede. No mercado de alta demanda, a ruptura não é uniforme entre as doses.',
      ],
      quote: {
        text: 'Primeira vez que a gente está tendo essa visão. A gente não tinha essa visibilidade de onde, teoricamente, está abastecido.',
        role: 'Time comercial',
        approved: false,
      },
      note: 'As doses de maior concentração ficam mais tempo sem estoque na gôndola. O número único da marca esconde essa diferença. A taxa mede dias-loja com estoque zero. Ela não mede venda perdida.',
    },
    {
      title: 'Confiança: o dado único que escondia a história',
      viz: [
        { kind: 'compare', title: 'Ruptura da marca numa rede regional', from: { value: 'Consolidado', label: 'indicador único, que contava PDVs zerados em todo o catálogo' }, to: { value: '≈ 8 p.p. a menos', label: 'depois de separar esses PDVs em "PDVs em atenção"' } },
        { kind: 'bars', title: 'Mesma rede, por grupo de dose', sub: 'Razão de dias-loja com estoque zero, sobre as doses de menor concentração', digits: 1, items: [{ label: 'Doses de menor concentração', value: 1, display: '1,0x (base)' }, { label: 'Doses de maior concentração', value: 5.3, display: 'mais de 5x', hot: true }], note: 'O número único da marca misturava doses muito diferentes.' },
      ],
      paragraphs: [
        'Em setembro, o time B2B questionou o dado. O painel mostrava ruptura alta numa rede regional. A base da própria rede indicava abundância do produto. O Dinn investigou e abriu a análise:',
      ],
      bullets: [
        'Os dados de disponibilidade estavam corretos. Um indicador consolidado enganava, porque misturava doses e lojas muito diferentes.',
        'Parte dos PDVs estava zerada em todo o catálogo, possivelmente inativa. Separados, a ruptura da marca na rede caiu cerca de 8 p.p.',
        'Por dose, as de menor concentração tinham ruptura baixa. As de maior concentração chegavam a mais de 5 vezes esse nível, o que bate com a base enviada pelo cliente.',
        'O Dinn criou a classificação "PDVs em atenção": loja zerada em todo o catálogo por 30 dias ou mais. Ela não esconde nem apaga a loja. O Dinn também mostra as doses lado a lado, com uma linha de total das selecionadas.',
      ],
      note: 'Em 15 de setembro, 13 dias depois do pedido, o time Dinn entregou o relatório de fechamento dos 10 itens. O relatório cobre: correção do dado de uma rede, reprocessamento do histórico e agrupamento de redes do mesmo grupo. Cobre também filtros por cidade e rede, nomes de apresentações e lista de PDVs cruzada com CNPJ.',
    },
    {
      title: 'Estratégia: pedido vira produto em duas semanas',
      viz: [
        { kind: 'timeline', title: 'Do pedido ao painel em produção', steps: [{ date: '05/10', label: 'Pedido estratégico da Lilly' }, { date: '06/10', label: 'Protótipo da API' }, { date: '09/10', label: 'Módulo apresentado' }, { date: '14/10', label: 'Painel em produção' }, { date: '19/10', label: 'Apresentado ao time' }] },
      ],
      paragraphs: [
        'Na manhã de 5 de outubro, a Lilly fez uma reunião estratégica. À tarde, enviou ao Dinn os temas:',
      ],
      bullets: [
        'Expansão da categoria por região',
        'Identificar redes e clientes onde concorrentes ganham espaço',
        'Oportunidades nos estados prioritários',
        'Sugestões automáticas de ação para os KAMs',
      ],
      note: 'O Dinn respondeu com perguntas objetivas. A Lilly retornou em dois dias. O time B2B ajustou o escopo. Olhar todos os estados. Usar o último trimestre. Cruzar participação, vendas e presença nas lojas. Gerar planos de ação por IA quando houver queda importante.',
      quote: {
        text: 'A combinação desses fatores na análise será rica, principalmente se trouxer insights sobre ações a tomar em caso de queda importante de vendas.',
        role: 'Time B2B',
        approved: false,
      },
    },
  ],
  results: [
    {
      title: 'O que o painel mostra',
      paragraphs: [
        'O Painel de Oportunidades mostra, por estado, rede e cidade, onde a categoria cresce e onde a marca perde participação. Ele sinaliza o movimento antes de a auditoria tradicional publicar.',
        'Três regras transformam o sinal em tarefa para o KAM:',
      ],
      bullets: [
        'Categoria cresce e a participação da marca cai',
        'Concorrente com presença persistente e marca com baixa presença',
        'Verificação de dado quando o painel é pequeno ou instável',
      ],
      note: 'Cada cartão traz urgência, escala e qualidade do dado, sem um score único inventado. As unidades são estimadas pela movimentação de estoque nos PDVs monitorados. Elas não substituem o sell-out oficial.',
    },
    {
      title: 'A projeção: o que vem pela frente',
      paragraphs: [
        'A projeção é o "para-brisa" que a Lilly pediu. Ela usa uma referência simples. O Dinn a testa contra a alternativa ingênua. A série tem cerca de 13 semanas de histórico. Por isso o Dinn mantém a leitura prudente.',
      ],
    },
  ],
  next: {
    title: 'O que vem a seguir',
    paragraphs: ['A Lilly continua moldando o produto.'],
    tables: [
      {
        head: ['O que a Lilly pediu', 'O que está no plano'],
        rows: [
          ['Visão por todos os estados, não só os prioritários', 'Filtros por UF no Painel de Oportunidades'],
          ['Cruzar com outras fontes de mercado e com outras linhas do portfólio da própria Lilly', 'Integração de dados e catálogo de concorrentes definido pelo time de BI da Lilly'],
          ['Planos de ação gerados por IA a partir da queda de vendas', 'Dinn Insights com ações sugeridas'],
          ['Fechamentos mensais, em vez de só o dado diário', 'Primeira entrega do fechamento mensal feita em outubro'],
          ['Dado dentro dos sistemas internos de B2B', 'Transferência de dados brutos para o banco interno'],
        ],
      },
    ],
    note: 'A Lilly mostrou que o valor do Dinn muda com o negócio. Primeiro resolve a ruptura. Depois mostra onde o concorrente ganha espaço, tudo no mesmo lugar, por estado e rede.',
  },
};

export const en: Customer = {
  slug: 'lilly',
  name: 'Lilly',
  sector: 'Pharmaceutical industry',
  hq: 'São Paulo, Brazil',
  useCase: 'Market analysis: from store stock-outs to competition and market opportunities',
  about: 'Lilly is a global pharmaceutical company. Its Brazil portfolio has high demand.',
  title: 'How Lilly sees where competitors gain ground',
  summary: 'Lilly started to use Dinn to find missing product. Later, it helped build a panel that shows where share falls, by state and chain.',
  metaDescription: 'Lilly started to use Dinn to find missing product in pharmacies. When the shortage ended, it helped build a panel. The panel shows where share falls and who gains ground, by state and chain.',
  metrics: [
    { value: '14 days', label: 'from the Lilly strategic request to the delivery of the Opportunities Panel' },
    { value: '10 requests', label: 'from the B2B team, closed and reported in 13 days' },
    { value: 'Thousands', label: 'of stores observed per week in the high-demand market' },
    { value: '3 rules', label: 'for suggested KAM actions, with no number invented by AI' },
  ],
  quote: {
    text: 'Today the stock-out is the smallest of our problems. Now we need a more strategic market analysis.',
    role: 'B2B team',
    approved: false,
  },
  intro: [
    'Many laboratories buy Dinn to solve stock-outs. Lilly also started this way, during a product shortage.',
    'In 2026 the situation changed. The product came back to pharmacies. The sales team now asks a different question: who gains ground in stores, where, and what to do before the traditional audit shows it?',
    'Lilly answered this question together with Dinn. The B2B team made the request. Dinn built a prototype the next day. The Opportunities Panel went live in two weeks.',
  ],
  problem: {
    title: "Yesterday's need is not today's need",
    viz: [
      { kind: 'art', art: 'trade', g: 'web/rosa-fluxo', caption: 'From stock in the store to share in the market' },
    ],
    paragraphs: [
      'In July, at the kickoff, Lilly wanted a view of availability by store and by chain. The view would support commercial negotiation and operations.',
      'Three months later, the team reviewed the value of the tool. On Oct 5, Lilly wrote to Dinn:',
    ],
    bullets: [
      'The context changed. The tool would help find priority regions and customers with a product shortage. That need almost disappeared.',
      'Dinn must deliver what other sources do not: forward-looking analysis and future market opportunities.',
      'A trust question. One report showed a possible stock-out at customers that had stock.',
    ],
    note: 'Lilly asked for one experience with the "rear-view mirror" (the history) and the "windshield" (what is ahead).',
  },
  solution: {
    title: 'New layer: the Opportunities Panel',
    viz: [
      { kind: 'screen', screen: 'market', caption: 'Market in Dinn: share by laboratory and estimated laboratory sales against competitors.' },
    ],
    paragraphs: [
      'Dinn already had daily stock by store and by chain for Lilly, plus stock-outs, price and a reference market. In October, Dinn added a new layer.',
      'This layer tracks the high-demand market. Dinn observes it in thousands of stores per week.',
      'The Opportunities Panel answers business questions, by state, chain and city:',
    ],
    bullets: [
      'Where is the category growing?',
      'Where is my brand losing share?',
      'Where is there room to expand?',
    ],
    note: 'The panel suggests actions for the KAM with fixed rules. No AI invents a number. A weak signal does not become a task. Dinn Insights complements the panel. The user asks in natural language and gets the answer with company data.',
  },
  stories: [
    {
      title: 'Stock-outs: see missing product, store by store',
      viz: [
        { kind: 'bars', title: 'Store-days with zero stock, by dose group', sub: 'Oct 2026, ratio to the lower-concentration doses', digits: 1, items: [{ label: 'Lower-concentration doses', value: 1, display: '1.0x (base)' }, { label: 'Higher-concentration doses', value: 1.7, display: 'about 1.7x', hot: true }], note: 'The rate measures store-days with zero stock. It does not measure lost sales.' },
      ],
      paragraphs: [
        'For the first time, Dinn showed Lilly product availability by store and by chain. In the high-demand market, the stock-out is not the same across doses.',
      ],
      quote: {
        text: 'This is the first time we have this view. We did not have this visibility of where, in theory, stock is available.',
        role: 'Sales team',
        approved: false,
      },
      note: 'The higher-concentration doses stay out of stock on the shelf for longer. A single brand number hides this difference. The rate measures store-days with zero stock. It does not measure lost sales.',
    },
    {
      title: 'Trust: one figure hid the story',
      viz: [
        { kind: 'compare', title: 'Brand stock-out in a regional chain', from: { value: 'Consolidated', label: 'single indicator, which counted stores at zero across the whole catalog' }, to: { value: '≈ 8 p.p. lower', label: 'after moving these stores to "stores to watch"' } },
        { kind: 'bars', title: 'Same chain, by dose group', sub: 'Ratio of store-days with zero stock, to the lower-concentration doses', digits: 1, items: [{ label: 'Lower-concentration doses', value: 1, display: '1.0x (base)' }, { label: 'Higher-concentration doses', value: 5.3, display: 'more than 5x', hot: true }], note: 'The single brand number mixed very different doses.' },
      ],
      paragraphs: [
        'In September, the B2B team questioned the data. The panel showed a high stock-out at a regional chain. The chain\'s own data showed plenty of product. Dinn investigated and opened the analysis:',
      ],
      bullets: [
        'The availability data was correct. A consolidated indicator misled, because it mixed very different doses and stores.',
        'Some stores were at zero across the whole catalog, possibly inactive. When separated, the brand stock-out in the chain fell by about 8 p.p.',
        'By dose, the lower-concentration doses had a low stock-out. The higher-concentration doses reached more than 5 times that level, which matches the data the customer sent.',
        'Dinn created the "stores to watch" class: a store at zero across the whole catalog for 30 days or more. It does not hide or delete the store. Dinn also shows doses side by side, with a total line for the selected ones.',
      ],
      note: 'On Sep 15, 13 days after the request, the Dinn team delivered the closing report for the 10 items. The report covers: a data fix for one chain, history reprocessing and grouping of chains from the same group. It also covers filters by city and chain, product presentation names and a store list matched with CNPJ.',
    },
    {
      title: 'Strategy: request to product in two weeks',
      viz: [
        { kind: 'timeline', title: 'From request to live panel', steps: [{ date: 'Oct 5', label: 'Lilly strategic request' }, { date: 'Oct 6', label: 'API prototype' }, { date: 'Oct 9', label: 'Module presented' }, { date: 'Oct 14', label: 'Panel live' }, { date: 'Oct 19', label: 'Presented to the team' }] },
      ],
      paragraphs: [
        'On the morning of Oct 5, Lilly held a strategy meeting. In the afternoon, it sent Dinn the topics:',
      ],
      bullets: [
        'Growth of the category by region',
        'Find chains and customers where competitors gain ground',
        'Opportunities in the priority states',
        'Automatic action suggestions for KAMs',
      ],
      note: 'Dinn replied with direct questions. Lilly answered in two days. The B2B team adjusted the scope. Look at all states. Use the last quarter. Cross share, sales and store presence. Generate AI action plans when there is a major drop.',
      quote: {
        text: 'Combining these factors in the analysis will be rich, mainly if it brings insights on actions to take when sales drop sharply.',
        role: 'B2B team',
        approved: false,
      },
    },
  ],
  results: [
    {
      title: 'What the panel shows',
      paragraphs: [
        'The Opportunities Panel shows, by state, chain and city, where the category grows and where the brand loses share. It flags the movement before the traditional audit publishes.',
        'Three rules turn the signal into a task for the KAM:',
      ],
      bullets: [
        'The category grows and the brand share falls',
        'A competitor with steady presence and a brand with low presence',
        'A data check when the panel is small or unstable',
      ],
      note: 'Each card shows urgency, scale and data quality, with no invented single score. Units are estimated from stock movement in the monitored stores. They do not replace official sell-out.',
    },
    {
      title: 'The forecast: what is ahead',
      paragraphs: [
        'The forecast is the "windshield" that Lilly asked for. It uses a simple reference. Dinn tests it against the naive alternative. The series has about 13 weeks of history. For this reason Dinn keeps the reading cautious.',
      ],
    },
  ],
  next: {
    title: 'What comes next',
    paragraphs: ['Lilly continues to shape the product.'],
    tables: [
      {
        head: ['What Lilly asked for', 'What is in the plan'],
        rows: [
          ['A view of all states, not only the priority ones', 'State filters in the Opportunities Panel'],
          ['Cross with other market sources and with other lines of the Lilly portfolio', 'Data integration and a competitor catalog defined by the Lilly BI team'],
          ['AI-generated action plans from sales drops', 'Dinn Insights with suggested actions'],
          ['Monthly closings, not only daily data', 'First monthly closing delivered in October'],
          ['Data inside the internal B2B systems', 'Transfer of raw data to the internal database'],
        ],
      },
    ],
    note: 'Lilly showed that the value of Dinn changes with the business. First it solves the stock-out. Then it shows where the competitor gains ground, all in one place, by state and chain.',
  },
};

export const es: Customer = {
  slug: 'lilly',
  name: 'Lilly',
  sector: 'Industria farmacéutica',
  hq: 'São Paulo, Brasil',
  useCase: 'Análisis de mercado: del quiebre de stock en la tienda a la competencia y las oportunidades',
  about: 'Lilly es una farmacéutica global. Su portafolio en Brasil tiene alta demanda.',
  title: 'Cómo Lilly ve dónde los competidores ganan espacio',
  summary: 'Lilly empezó a usar Dinn para encontrar producto faltante. Después, ayudó a crear un panel que muestra dónde cae la participación, por estado y cadena.',
  metaDescription: 'Lilly empezó a usar Dinn para encontrar producto faltante en las farmacias. Cuando terminó la escasez, ayudó a crear un panel. El panel muestra dónde cae la participación y quién gana espacio, por estado y cadena.',
  metrics: [
    { value: '14 días', label: 'entre el pedido estratégico de Lilly y la entrega del Panel de Oportunidades' },
    { value: '10 pedidos', label: 'del equipo B2B atendidos y reportados en 13 días' },
    { value: 'Miles', label: 'de tiendas observadas por semana en el mercado de alta demanda' },
    { value: '3 reglas', label: 'de acción sugerida para el KAM, sin número inventado por IA' },
  ],
  quote: {
    text: 'Hoy el quiebre de stock es el menor de nuestros problemas. Ahora necesitamos un análisis de mercado más estratégico.',
    role: 'Equipo B2B',
    approved: false,
  },
  intro: [
    'Muchos laboratorios compran Dinn para resolver el quiebre de stock. Lilly también empezó así, en un período de escasez del producto.',
    'En 2026 el escenario cambió. El producto volvió a las farmacias. La pregunta del equipo comercial pasó a ser otra: quién gana espacio en la tienda, dónde, y qué hacer antes de que la auditoría tradicional lo muestre.',
    'Lilly respondió a esta pregunta junto con Dinn. El equipo B2B hizo el pedido. Dinn construyó un prototipo al día siguiente. El Panel de Oportunidades salió al aire en dos semanas.',
  ],
  problem: {
    title: 'La necesidad de ayer no es la de hoy',
    viz: [
      { kind: 'art', art: 'trade', g: 'web/rosa-fluxo', caption: 'Del stock en la tienda al espacio en el mercado' },
    ],
    paragraphs: [
      'En julio, en el kickoff, Lilly quería una vista de disponibilidad por tienda y por cadena. La vista serviría a la negociación comercial y a la operación.',
      'Tres meses después, el equipo reevaluó el valor de la herramienta. El 5 de oct, Lilly escribió a Dinn:',
    ],
    bullets: [
      'El contexto cambió. La herramienta serviría para encontrar regiones y clientes prioritarios con escasez de producto. Esa necesidad casi desapareció.',
      'Dinn debe entregar lo que las otras fuentes no entregan: análisis prospectivos y oportunidades futuras de mercado.',
      'Duda de confianza. Un informe señaló un posible quiebre de stock en clientes que tenían stock.',
    ],
    note: 'Lilly pidió una sola experiencia con el "retrovisor" (el historial) y el "parabrisas" (lo que viene por delante).',
  },
  solution: {
    title: 'Nueva capa: el Panel de Oportunidades',
    viz: [
      { kind: 'screen', screen: 'market', caption: 'Mercado en Dinn: participación por laboratorio y ventas estimadas del laboratorio frente a los competidores.' },
    ],
    paragraphs: [
      'Dinn ya tenía para Lilly el stock diario por tienda y por cadena, el quiebre de stock, el precio y un mercado de referencia. En octubre, Dinn sumó una nueva capa.',
      'Esta capa sigue el mercado de alta demanda. Dinn lo observa en miles de tiendas por semana.',
      'El Panel de Oportunidades responde a preguntas de negocio, por estado, cadena y ciudad:',
    ],
    bullets: [
      '¿Dónde crece la categoría?',
      '¿Dónde pierde participación mi marca?',
      '¿Dónde hay espacio para expandir?',
    ],
    note: 'El panel sugiere acciones al KAM con reglas fijas. Ninguna IA inventa números. Una señal débil no se convierte en tarea. Dinn Insights complementa el panel. El usuario pregunta en lenguaje natural y recibe la respuesta con los datos de la empresa.',
  },
  stories: [
    {
      title: 'Quiebre de stock: dónde falta, tienda a tienda',
      viz: [
        { kind: 'bars', title: 'Días-tienda con stock cero, por grupo de dosis', sub: 'oct 2026, razón sobre las dosis de menor concentración', digits: 1, items: [{ label: 'Dosis de menor concentración', value: 1, display: '1,0x (base)' }, { label: 'Dosis de mayor concentración', value: 1.7, display: 'cerca de 1,7x', hot: true }], note: 'La tasa mide días-tienda con stock cero. No mide venta perdida.' },
      ],
      paragraphs: [
        'Dinn mostró a Lilly, por primera vez, la disponibilidad del producto por tienda y por cadena. En el mercado de alta demanda, el quiebre de stock no es uniforme entre las dosis.',
      ],
      quote: {
        text: 'Es la primera vez que tenemos esta visión. No teníamos esta visibilidad de dónde, en teoría, hay abastecimiento.',
        role: 'Equipo comercial',
        approved: false,
      },
      note: 'Las dosis de mayor concentración pasan más tiempo sin stock en la góndola. El número único de la marca esconde esa diferencia. La tasa mide días-tienda con stock cero. No mide venta perdida.',
    },
    {
      title: 'Confianza: un solo dato escondía la historia',
      viz: [
        { kind: 'compare', title: 'Quiebre de stock de la marca en una cadena regional', from: { value: 'Consolidado', label: 'indicador único, que contaba tiendas en cero en todo el catálogo' }, to: { value: '≈ 8 p.p. menos', label: 'después de separar esas tiendas en "tiendas en atención"' } },
        { kind: 'bars', title: 'Misma cadena, por grupo de dosis', sub: 'Razón de días-tienda con stock cero, sobre las dosis de menor concentración', digits: 1, items: [{ label: 'Dosis de menor concentración', value: 1, display: '1,0x (base)' }, { label: 'Dosis de mayor concentración', value: 5.3, display: 'más de 5x', hot: true }], note: 'El número único de la marca mezclaba dosis muy distintas.' },
      ],
      paragraphs: [
        'En septiembre, el equipo B2B cuestionó el dato. El panel mostraba un quiebre de stock alto en una cadena regional. La base de la propia cadena indicaba abundancia del producto. Dinn investigó y abrió el análisis:',
      ],
      bullets: [
        'Los datos de disponibilidad eran correctos. Un indicador consolidado engañaba, porque mezclaba dosis y tiendas muy distintas.',
        'Parte de las tiendas estaba en cero en todo el catálogo, posiblemente inactiva. Separadas, el quiebre de stock de la marca en la cadena bajó cerca de 8 p.p.',
        'Por dosis, las de menor concentración tenían un quiebre bajo. Las de mayor concentración llegaban a más de 5 veces ese nivel, lo que coincide con la base enviada por el cliente.',
        'Dinn creó la clasificación "tiendas en atención": tienda en cero en todo el catálogo por 30 días o más. No esconde ni borra la tienda. Dinn también muestra las dosis lado a lado, con una línea de total de las seleccionadas.',
      ],
      note: 'El 15 de sep, 13 días después del pedido, el equipo Dinn entregó el informe de cierre de los 10 puntos. El informe cubre: corrección del dato de una cadena, reprocesamiento del historial y agrupación de cadenas del mismo grupo. También cubre filtros por ciudad y cadena, nombres de presentaciones y lista de tiendas cruzada con CNPJ.',
    },
    {
      title: 'Estrategia: del pedido al producto en dos semanas',
      viz: [
        { kind: 'timeline', title: 'Del pedido al panel en producción', steps: [{ date: '5 oct', label: 'Pedido estratégico de Lilly' }, { date: '6 oct', label: 'Prototipo de la API' }, { date: '9 oct', label: 'Módulo presentado' }, { date: '14 oct', label: 'Panel en producción' }, { date: '19 oct', label: 'Presentado al equipo' }] },
      ],
      paragraphs: [
        'En la mañana del 5 de oct, Lilly hizo una reunión estratégica. Por la tarde, envió a Dinn los temas:',
      ],
      bullets: [
        'Expansión de la categoría por región',
        'Identificar cadenas y clientes donde los competidores ganan espacio',
        'Oportunidades en los estados prioritarios',
        'Sugerencias automáticas de acción para los KAMs',
      ],
      note: 'Dinn respondió con preguntas objetivas. Lilly contestó en dos días. El equipo B2B ajustó el alcance. Mirar todos los estados. Usar el último trimestre. Cruzar participación, ventas y presencia en las tiendas. Generar planes de acción por IA cuando haya una caída importante.',
      quote: {
        text: 'La combinación de estos factores en el análisis será rica, sobre todo si aporta insights sobre acciones a tomar ante una caída importante de ventas.',
        role: 'Equipo B2B',
        approved: false,
      },
    },
  ],
  results: [
    {
      title: 'Lo que muestra el panel',
      paragraphs: [
        'El Panel de Oportunidades muestra, por estado, cadena y ciudad, dónde crece la categoría y dónde la marca pierde participación. Señala el movimiento antes de que la auditoría tradicional publique.',
        'Tres reglas convierten la señal en tarea para el KAM:',
      ],
      bullets: [
        'La categoría crece y la participación de la marca cae',
        'Competidor con presencia persistente y marca con baja presencia',
        'Verificación de datos cuando el panel es pequeño o inestable',
      ],
      note: 'Cada tarjeta trae urgencia, escala y calidad del dato, sin un score único inventado. Las unidades son estimadas por el movimiento de stock en las tiendas monitoreadas. No sustituyen el sell-out oficial.',
    },
    {
      title: 'La proyección: lo que viene por delante',
      paragraphs: [
        'La proyección es el "parabrisas" que pidió Lilly. Usa una referencia simple. Dinn la prueba contra la alternativa ingenua. La serie tiene cerca de 13 semanas de historial. Por eso Dinn mantiene una lectura prudente.',
      ],
    },
  ],
  next: {
    title: 'Lo que viene a continuación',
    paragraphs: ['Lilly sigue dando forma al producto.'],
    tables: [
      {
        head: ['Lo que pidió Lilly', 'Lo que está en el plan'],
        rows: [
          ['Vista de todos los estados, no solo los prioritarios', 'Filtros por estado en el Panel de Oportunidades'],
          ['Cruzar con otras fuentes de mercado y con otras líneas del portafolio de la propia Lilly', 'Integración de datos y catálogo de competidores definido por el equipo de BI de Lilly'],
          ['Planes de acción generados por IA a partir de la caída de ventas', 'Dinn Insights con acciones sugeridas'],
          ['Cierres mensuales, en vez de solo el dato diario', 'Primera entrega del cierre mensual hecha en octubre'],
          ['Datos dentro de los sistemas internos de B2B', 'Transferencia de datos brutos a la base interna'],
        ],
      },
    ],
    note: 'Lilly mostró que el valor de Dinn cambia con el negocio. Primero resuelve el quiebre de stock. Después muestra dónde el competidor gana espacio, todo en un mismo lugar, por estado y cadena.',
  },
};
