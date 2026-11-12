import type { Customer } from './types';

export const pt: Customer = {
  slug: 'oportunidades-de-mercado',
  name: 'Farmacêutica global de alta demanda',
  sector: 'Indústria farmacêutica',
  hq: 'Brasil',
  useCase: 'Análise de mercado: da ruptura no PDV à concorrência e às oportunidades',
  about: 'Farmacêutica global, com portfólio de alta demanda no Brasil.',
  title: 'Como um laboratório vê onde concorrentes ganham espaço',
  summary: 'Um laboratório começou a usar o Dinn para achar produto em falta. Depois, ajudou a criar um painel que mostra onde a participação cai, por estado e rede.',
  metaDescription: 'Um laboratório usou o Dinn contra a ruptura e depois ganhou um painel que mostra onde a participação cai e quem ganha espaço, por estado e rede.',
  metrics: [
    { value: '9 dias', label: 'entre o pedido estratégico e o Painel de Oportunidades em produção' },
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
    'Muitos laboratórios compram o Dinn para resolver ruptura. Este laboratório também começou assim, num período de escassez do produto.',
    'Em 2026 o cenário mudou. O produto voltou às farmácias. A pergunta do time comercial passou a ser outra: quem ganha espaço no PDV, onde, e o que fazer antes de a auditoria tradicional mostrar?',
    'O laboratório respondeu a essa pergunta junto com o Dinn. O time B2B fez o pedido. O Dinn construiu um protótipo no dia seguinte. O Painel de Oportunidades entrou em produção em nove dias.',
  ],
  problem: {
    title: 'A necessidade de ontem não é a de hoje',
    viz: [
      { kind: 'art', art: 'trade', g: 'web/rosa-fluxo', caption: 'Do estoque na loja ao espaço no mercado' },
    ],
    paragraphs: [
      'Em julho, no kickoff, o laboratório queria uma visão de disponibilidade por loja e por rede. A visão serviria à negociação comercial e à operação.',
      'Três meses depois, o time reavaliou o valor da ferramenta e redefiniu o pedido:',
    ],
    bullets: [
      'O contexto mudou. A ferramenta serviria para achar regiões e clientes prioritários com escassez de produto. Essa necessidade quase desapareceu.',
      'O Dinn precisa entregar o que as outras fontes não entregam: análises prospectivas e oportunidades futuras de mercado.',
      'O time questionou um dado, e o Dinn reconciliou a base.',
    ],
    note: 'O laboratório pediu uma só experiência, com o histórico e com a visão do que vem pela frente.',
  },
  solution: {
    title: 'Nova camada: o Painel de Oportunidades',
    viz: [
      { kind: 'screen', screen: 'market', caption: 'Mercado no Dinn: participação por laboratório e vendas estimadas do laboratório contra os concorrentes.' },
    ],
    paragraphs: [
      'O Dinn já tinha, para o laboratório, estoque diário por loja e por rede, ruptura, preço e um mercado de referência. Em outubro, o Dinn ganhou uma nova camada.',
      'Essa camada acompanha o mercado de alta demanda. O Dinn o observa em milhares de PDVs por semana.',
      'O Painel de Oportunidades responde a perguntas de negócio, por estado, rede e cidade:',
    ],
    bullets: [
      'Onde a categoria cresce?',
      'Onde a minha marca perde participação?',
      'Onde há espaço para expandir?',
    ],
    note: 'O painel sugere ações para o KAM com regras fixas. Nenhuma IA inventa número. Sinal fraco não vira tarefa. A Jean complementa o painel. O usuário pergunta em linguagem natural e recebe a resposta com os dados da empresa.',
  },
  stories: [
    {
      title: 'Ruptura: ver onde falta produto, loja a loja',
      paragraphs: [
        'O Dinn mostrou ao laboratório, pela primeira vez, a disponibilidade do produto por loja e por rede. No mercado de alta demanda, alguns produtos passam muito mais dias-loja sem estoque do que outros.',
      ],
      quote: {
        text: 'Primeira vez que a gente está tendo essa visão. A gente não tinha essa visibilidade de onde, teoricamente, está abastecido.',
        role: 'Time comercial',
        approved: false,
      },
      note: 'Um número único da marca esconde essa diferença entre produtos. A taxa mede dias-loja com estoque zero. Ela não mede venda perdida.',
    },
    {
      title: 'Confiança: o Dinn reconcilia a base',
      paragraphs: [
        'Em setembro, o time B2B questionou o dado. O Dinn reconciliou a base e abriu a análise:',
      ],
      bullets: [
        'Os dados de disponibilidade estavam corretos. Um indicador consolidado enganava, porque misturava produtos e lojas muito diferentes.',
        'Parte dos PDVs estava zerada em todo o catálogo, possivelmente inativa.',
        'O Dinn criou a classificação "PDVs em atenção": loja zerada em todo o catálogo por 30 dias ou mais. Ela não esconde nem apaga a loja.',
        'O Dinn também mostra os produtos lado a lado, com uma linha de total dos selecionados.',
      ],
      note: 'Em 15 de setembro, 13 dias depois do pedido, o time Dinn entregou o relatório de fechamento dos 10 itens. O relatório cobre: correção do dado de uma rede, reprocessamento do histórico e agrupamento de redes do mesmo grupo. Cobre também filtros por cidade e rede, nomes de apresentações e lista de PDVs cruzada com CNPJ.',
    },
    {
      title: 'Estratégia: pedido vira produto em nove dias',
      viz: [
        { kind: 'timeline', title: 'Do pedido ao painel em produção', steps: [{ date: '05/10', label: 'Pedido estratégico do laboratório' }, { date: '06/10', label: 'Protótipo da API' }, { date: '09/10', label: 'Módulo apresentado' }, { date: '14/10', label: 'Painel em produção' }, { date: '19/10', label: 'Apresentado ao time' }] },
      ],
      paragraphs: [
        'Na manhã de 5 de outubro, o laboratório fez uma reunião estratégica. À tarde, enviou ao Dinn os temas:',
      ],
      bullets: [
        'Expansão da categoria por região',
        'Identificar redes e clientes onde concorrentes ganham espaço',
        'Oportunidades nos estados prioritários',
        'Sugestões automáticas de ação para os KAMs',
      ],
      note: 'O Dinn respondeu com perguntas objetivas. O laboratório retornou em dois dias. O time B2B ajustou o escopo. Olhar todos os estados. Usar o último trimestre. Cruzar participação, vendas e presença nas lojas.',
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
        'A projeção mostra o que vem pela frente. Ela usa uma referência simples. O Dinn a compara com uma alternativa ingênua. A série tem cerca de 13 semanas de histórico. Por isso o Dinn mantém a leitura prudente.',
      ],
    },
  ],
  next: {
    title: 'O que já está entregue',
    paragraphs: ['O que o time pediu e já está no Dinn:'],
    tables: [
      {
        head: ['O que o time pediu', 'O que já está no Dinn'],
        rows: [
          ['Visão de mercado por estado, rede e cidade', 'Painel de Oportunidades'],
          ['Ações sugeridas para o KAM', 'Três regras fixas, sem número inventado por IA'],
          ['Pergunta em linguagem natural sobre os dados da empresa', 'A Jean responde com os dados da empresa'],
          ['Fechamentos mensais, em vez de só o dado diário', 'Primeira entrega do fechamento mensal feita em outubro'],
        ],
      },
    ],
    note: 'O valor do Dinn muda com o negócio. Primeiro resolve a ruptura. Depois mostra onde o concorrente ganha espaço, tudo no mesmo lugar, por estado e rede.',
  },
};

export const en: Customer = {
  slug: 'oportunidades-de-mercado',
  name: 'Global high-demand pharma company',
  sector: 'Pharmaceutical industry',
  hq: 'Brazil',
  useCase: 'Market analysis: from store stock-outs to competition and market opportunities',
  about: 'Global pharmaceutical company with a high-demand portfolio in Brazil.',
  title: 'How a laboratory sees where competitors gain ground',
  summary: 'A laboratory started to use Dinn to find missing product. Later, it helped build a panel that shows where share falls, by state and chain.',
  metaDescription: 'A laboratory used Dinn against stock-outs, then got a panel that shows where share falls and who gains ground, by state and chain.',
  metrics: [
    { value: '9 days', label: 'from the strategic request to the Opportunities Panel in production' },
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
    'Many laboratories buy Dinn to solve stock-outs. This laboratory also started this way, during a product shortage.',
    'In 2026 the situation changed. The product came back to pharmacies. The sales team now asks a different question: who gains ground in stores, where, and what to do before the traditional audit shows it?',
    'The laboratory answered this question together with Dinn. The B2B team made the request. Dinn built a prototype the next day. The Opportunities Panel went into production in nine days.',
  ],
  problem: {
    title: "Yesterday's need is not today's need",
    viz: [
      { kind: 'art', art: 'trade', g: 'web/rosa-fluxo', caption: 'From stock in the store to share in the market' },
    ],
    paragraphs: [
      'In July, at the kickoff, the laboratory wanted a view of availability by store and by chain. The view would support commercial negotiation and operations.',
      'Three months later, the team reviewed the value of the tool and redefined the request:',
    ],
    bullets: [
      'The context changed. The tool would help find priority regions and customers with a product shortage. That need almost disappeared.',
      'Dinn must deliver what other sources do not: forward-looking analysis and future market opportunities.',
      'The team questioned one data point, and Dinn reconciled the data.',
    ],
    note: 'The laboratory asked for one experience, with the history and with a view of what is ahead.',
  },
  solution: {
    title: 'New layer: the Opportunities Panel',
    viz: [
      { kind: 'screen', screen: 'market', caption: 'Market in Dinn: share by laboratory and estimated laboratory sales against competitors.' },
    ],
    paragraphs: [
      'Dinn already had daily stock by store and by chain for the laboratory, plus stock-outs, price and a reference market. In October, Dinn added a new layer.',
      'This layer tracks the high-demand market. Dinn observes it in thousands of stores per week.',
      'The Opportunities Panel answers business questions, by state, chain and city:',
    ],
    bullets: [
      'Where is the category growing?',
      'Where is my brand losing share?',
      'Where is there room to expand?',
    ],
    note: 'The panel suggests actions for the KAM with fixed rules. No AI invents a number. A weak signal does not become a task. Jean complements the panel. The user asks in natural language and gets the answer with company data.',
  },
  stories: [
    {
      title: 'Stock-outs: see missing product, store by store',
      paragraphs: [
        'For the first time, Dinn showed the laboratory product availability by store and by chain. In the high-demand market, some products spend many more store-days out of stock than others.',
      ],
      quote: {
        text: 'This is the first time we have this view. We did not have this visibility of where, in theory, stock is available.',
        role: 'Sales team',
        approved: false,
      },
      note: 'A single brand number hides this difference between products. The rate measures store-days with zero stock. It does not measure lost sales.',
    },
    {
      title: 'Trust: Dinn reconciles the data',
      paragraphs: [
        'In September, the B2B team questioned the data. Dinn reconciled the data and opened the analysis:',
      ],
      bullets: [
        'The availability data was correct. A consolidated indicator misled, because it mixed very different products and stores.',
        'Some stores were at zero across the whole catalog, possibly inactive.',
        'Dinn created the "stores to watch" class: a store at zero across the whole catalog for 30 days or more. It does not hide or delete the store.',
        'Dinn also shows products side by side, with a total line for the selected ones.',
      ],
      note: 'On Sep 15, 13 days after the request, the Dinn team delivered the closing report for the 10 items. The report covers: a data fix for one chain, history reprocessing and grouping of chains from the same group. It also covers filters by city and chain, product presentation names and a store list matched with CNPJ.',
    },
    {
      title: 'Strategy: request to product in nine days',
      viz: [
        { kind: 'timeline', title: 'From request to panel in production', steps: [{ date: 'Oct 5', label: 'Laboratory strategic request' }, { date: 'Oct 6', label: 'API prototype' }, { date: 'Oct 9', label: 'Module presented' }, { date: 'Oct 14', label: 'Panel in production' }, { date: 'Oct 19', label: 'Presented to the team' }] },
      ],
      paragraphs: [
        'On the morning of Oct 5, the laboratory held a strategy meeting. In the afternoon, it sent Dinn the topics:',
      ],
      bullets: [
        'Growth of the category by region',
        'Find chains and customers where competitors gain ground',
        'Opportunities in the priority states',
        'Automatic action suggestions for KAMs',
      ],
      note: 'Dinn replied with direct questions. The laboratory answered in two days. The B2B team adjusted the scope. Look at all states. Use the last quarter. Cross share, sales and store presence.',
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
        'The forecast shows what is ahead. It uses a simple reference. Dinn compares it with a naive alternative. The series has about 13 weeks of history. For this reason Dinn keeps the reading cautious.',
      ],
    },
  ],
  next: {
    title: 'What is already delivered',
    paragraphs: ['What the team asked for and is already in Dinn:'],
    tables: [
      {
        head: ['What the team asked for', 'What is already in Dinn'],
        rows: [
          ['A market view by state, chain and city', 'Opportunities Panel'],
          ['Suggested actions for the KAM', 'Three fixed rules, with no number invented by AI'],
          ['Questions in natural language about company data', 'Jean answers with company data'],
          ['Monthly closings, not only daily data', 'First monthly closing delivered in October'],
        ],
      },
    ],
    note: 'The value of Dinn changes with the business. First it solves the stock-out. Then it shows where the competitor gains ground, all in one place, by state and chain.',
  },
};

export const es: Customer = {
  slug: 'oportunidades-de-mercado',
  name: 'Farmacéutica global de alta demanda',
  sector: 'Industria farmacéutica',
  hq: 'Brasil',
  useCase: 'Análisis de mercado: del quiebre de stock en la tienda a la competencia y las oportunidades',
  about: 'Farmacéutica global, con portafolio de alta demanda en Brasil.',
  title: 'Cómo un laboratorio ve dónde los competidores ganan espacio',
  summary: 'Un laboratorio empezó a usar Dinn para encontrar producto faltante. Después, ayudó a crear un panel que muestra dónde cae la participación, por estado y cadena.',
  metaDescription: 'Un laboratorio usó Dinn contra el quiebre de stock y luego ganó un panel que muestra dónde cae la participación y quién gana espacio, por estado.',
  metrics: [
    { value: '9 días', label: 'entre el pedido estratégico y el Panel de Oportunidades en producción' },
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
    'Muchos laboratorios compran Dinn para resolver el quiebre de stock. Este laboratorio también empezó así, en un período de escasez del producto.',
    'En 2026 el escenario cambió. El producto volvió a las farmacias. La pregunta del equipo comercial pasó a ser otra: quién gana espacio en la tienda, dónde, y qué hacer antes de que la auditoría tradicional lo muestre.',
    'El laboratorio respondió a esta pregunta junto con Dinn. El equipo B2B hizo el pedido. Dinn construyó un prototipo al día siguiente. El Panel de Oportunidades entró en producción en nueve días.',
  ],
  problem: {
    title: 'La necesidad de ayer no es la de hoy',
    viz: [
      { kind: 'art', art: 'trade', g: 'web/rosa-fluxo', caption: 'Del stock en la tienda al espacio en el mercado' },
    ],
    paragraphs: [
      'En julio, en el kickoff, el laboratorio quería una vista de disponibilidad por tienda y por cadena. La vista serviría a la negociación comercial y a la operación.',
      'Tres meses después, el equipo reevaluó el valor de la herramienta y redefinió el pedido:',
    ],
    bullets: [
      'El contexto cambió. La herramienta serviría para encontrar regiones y clientes prioritarios con escasez de producto. Esa necesidad casi desapareció.',
      'Dinn debe entregar lo que las otras fuentes no entregan: análisis prospectivos y oportunidades futuras de mercado.',
      'El equipo cuestionó un dato, y Dinn reconcilió la base.',
    ],
    note: 'El laboratorio pidió una sola experiencia, con el historial y con la vista de lo que viene por delante.',
  },
  solution: {
    title: 'Nueva capa: el Panel de Oportunidades',
    viz: [
      { kind: 'screen', screen: 'market', caption: 'Mercado en Dinn: participación por laboratorio y ventas estimadas del laboratorio frente a los competidores.' },
    ],
    paragraphs: [
      'Dinn ya tenía para el laboratorio el stock diario por tienda y por cadena, el quiebre de stock, el precio y un mercado de referencia. En octubre, Dinn sumó una nueva capa.',
      'Esta capa sigue el mercado de alta demanda. Dinn lo observa en miles de tiendas por semana.',
      'El Panel de Oportunidades responde a preguntas de negocio, por estado, cadena y ciudad:',
    ],
    bullets: [
      '¿Dónde crece la categoría?',
      '¿Dónde pierde participación mi marca?',
      '¿Dónde hay espacio para expandir?',
    ],
    note: 'El panel sugiere acciones al KAM con reglas fijas. Ninguna IA inventa números. Una señal débil no se convierte en tarea. Jean complementa el panel. El usuario pregunta en lenguaje natural y recibe la respuesta con los datos de la empresa.',
  },
  stories: [
    {
      title: 'Quiebre de stock: dónde falta, tienda a tienda',
      paragraphs: [
        'Dinn mostró al laboratorio, por primera vez, la disponibilidad del producto por tienda y por cadena. En el mercado de alta demanda, algunos productos pasan muchos más días-tienda sin stock que otros.',
      ],
      quote: {
        text: 'Es la primera vez que tenemos esta visión. No teníamos esta visibilidad de dónde, en teoría, hay abastecimiento.',
        role: 'Equipo comercial',
        approved: false,
      },
      note: 'Un número único de la marca esconde esa diferencia entre productos. La tasa mide días-tienda con stock cero. No mide venta perdida.',
    },
    {
      title: 'Confianza: Dinn reconcilia la base',
      paragraphs: [
        'En septiembre, el equipo B2B cuestionó el dato. Dinn reconcilió la base y abrió el análisis:',
      ],
      bullets: [
        'Los datos de disponibilidad eran correctos. Un indicador consolidado engañaba, porque mezclaba productos y tiendas muy distintos.',
        'Parte de las tiendas estaba en cero en todo el catálogo, posiblemente inactiva.',
        'Dinn creó la clasificación "tiendas en atención": tienda en cero en todo el catálogo por 30 días o más. No esconde ni borra la tienda.',
        'Dinn también muestra los productos lado a lado, con una línea de total de los seleccionados.',
      ],
      note: 'El 15 de sep, 13 días después del pedido, el equipo Dinn entregó el informe de cierre de los 10 puntos. El informe cubre: corrección del dato de una cadena, reprocesamiento del historial y agrupación de cadenas del mismo grupo. También cubre filtros por ciudad y cadena, nombres de presentaciones y lista de tiendas cruzada con CNPJ.',
    },
    {
      title: 'Estrategia: del pedido al producto en nueve días',
      viz: [
        { kind: 'timeline', title: 'Del pedido al panel en producción', steps: [{ date: '5 oct', label: 'Pedido estratégico del laboratorio' }, { date: '6 oct', label: 'Prototipo de la API' }, { date: '9 oct', label: 'Módulo presentado' }, { date: '14 oct', label: 'Panel en producción' }, { date: '19 oct', label: 'Presentado al equipo' }] },
      ],
      paragraphs: [
        'En la mañana del 5 de oct, el laboratorio hizo una reunión estratégica. Por la tarde, envió a Dinn los temas:',
      ],
      bullets: [
        'Expansión de la categoría por región',
        'Identificar cadenas y clientes donde los competidores ganan espacio',
        'Oportunidades en los estados prioritarios',
        'Sugerencias automáticas de acción para los KAMs',
      ],
      note: 'Dinn respondió con preguntas objetivas. El laboratorio contestó en dos días. El equipo B2B ajustó el alcance. Mirar todos los estados. Usar el último trimestre. Cruzar participación, ventas y presencia en las tiendas.',
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
        'La proyección muestra lo que viene por delante. Usa una referencia simple. Dinn la compara con una alternativa ingenua. La serie tiene cerca de 13 semanas de historial. Por eso Dinn mantiene una lectura prudente.',
      ],
    },
  ],
  next: {
    title: 'Lo que ya está entregado',
    paragraphs: ['Lo que el equipo pidió y ya está en Dinn:'],
    tables: [
      {
        head: ['Lo que el equipo pidió', 'Lo que ya está en Dinn'],
        rows: [
          ['Vista de mercado por estado, cadena y ciudad', 'Panel de Oportunidades'],
          ['Acciones sugeridas para el KAM', 'Tres reglas fijas, sin número inventado por IA'],
          ['Preguntas en lenguaje natural sobre los datos de la empresa', 'Jean responde con los datos de la empresa'],
          ['Cierres mensuales, en vez de solo el dato diario', 'Primera entrega del cierre mensual hecha en octubre'],
        ],
      },
    ],
    note: 'El valor de Dinn cambia con el negocio. Primero resuelve el quiebre de stock. Después muestra dónde el competidor gana espacio, todo en un mismo lugar, por estado y cadena.',
  },
};
