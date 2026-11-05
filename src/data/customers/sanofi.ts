import type { Customer } from './types';

export const pt: Customer = {
  slug: 'sanofi',
  name: 'Sanofi',
  sector: 'Farmacêutica e saúde',
  hq: 'Paris, França',
  useCase: 'Next Best Action para a força de vendas em campo',
  about: 'A Sanofi é uma das maiores empresas globais de saúde e farmacêutica.',
  title: 'Sanofi leva inteligência de mercado ao campo',
  summary: 'Em 30 dias, consultores da Sanofi aceitaram 92,7% das recomendações da Jean.',
  metaDescription: 'Em 30 dias, consultores da Sanofi aceitaram 92,7% das missões geradas pela IA do Dinn, com 90,85% de satisfação e 70,77% de engajamento.',
  metrics: [
    { value: '92,7%', label: 'das recomendações da Jean foram acatadas: 573 acatadas e 45 rejeitadas' },
    { value: '90,85%', label: 'de satisfação dos consultores (CSAT médio de 4,54 em 5)' },
    { value: '~20', label: 'acessos por dia, por consultor, em média' },
    { value: '78', label: 'pontos de venda com todas as recomendações concluídas pelos seis consultores' },
  ],
  quote: {
    text: 'Conseguimos ser assertivos em nossas ações, sem esquecer de pontos básicos, que acabamos por passar batido devido à nossa rotina. A ferramenta não nos deixa esquecer. Faz toda a diferença.',
    role: 'Consultor de vendas',
    approved: true,
  },
  intro: [
    'A Sanofi quer crescer com boa execução e diversificar o portfólio nos pontos de venda. Para isso, depende de consultores que visitam farmácias, distribuidores e médicos todos os dias. Os dados nem sempre chegam a eles de forma clara.',
    'A partir de 30 de julho de 2024, seis consultores de vendas da Sanofi usaram o Dinn por 30 dias. Eles atuam em duas regionais. A pergunta era direta: os consultores seguem as recomendações da IA quando elas aparecem no meio da rotina de campo?',
    'Seguiram. E gostaram.',
  ],
  problem: {
    title: 'Dados descentralizados, visitas sem direção',
    viz: [
      { kind: 'art', art: 'launch', g: 'web/lilas-azul', caption: 'Da informação espalhada à missão pronta' },
    ],
    paragraphs: [
      'A Sanofi tinha informação, mas ela estava espalhada. Antes de entrar em cada ponto de venda, o consultor não sabia com clareza o que fazer ali.',
      'O resultado é conhecido: decisões mal informadas, visitas menos eficazes, desperdício de recurso e oportunidades perdidas.',
      'A Sanofi precisava de inteligência de mercado aplicada às visitas de campo. Não queria mais um painel para consultar depois. Queria orientação pronta no momento da visita.',
    ],
  },
  solution: {
    title: 'Missões que dizem o que oferecer, quando e como',
    viz: [
      { kind: 'timeline', title: 'Os 30 dias de uso', steps: [{ date: '30/07/2024', label: 'Seis consultores começam a usar o Dinn' }, { date: '26/08/2024', label: 'Melhorias na página de missões, para todos' }, { date: '30/08/2024', label: 'Fim dos 30 dias e leitura dos resultados' }] },
    ],
    paragraphs: [
      'O Dinn usa a metodologia Next Best Action (NBA), com inteligência artificial. Ele responde a três perguntas para cada cliente: o que oferecer, quando oferecer e como oferecer. A resposta chega ao consultor em tempo real, em forma de missões.',
      'A hipótese: os consultores acatam as recomendações da IA se elas forem precisas e relevantes, se forem fáceis de integrar à rotina e se agregarem valor.',
    ],
    bullets: [
      'Período: 30 de julho a 30 de agosto de 2024',
      'Participantes: seis consultores de vendas, três da regional A e três da regional B',
      'Fonte de dados: base de vendas do cliente',
      'Melhoria contínua: em 26 de agosto, a Dinn liberou para todos novas melhorias na página de missões',
      'Medição: uso da aplicação, missões aceitas e rejeitadas e satisfação (CSAT)',
    ],
  },
  stories: [
    {
      title: 'Missões dizem ao consultor o que fazer',
      paragraphs: [
        'O consultor abre o Dinn e busca o cliente por nome ou CNPJ (ponto de venda ou médico). Ele encontra as missões do cliente. Cada missão é uma recomendação objetiva. O consultor marca como feita ou descarta.',
        'Cinco tipos de missão acompanham a rotina de visita:',
      ],
      bullets: [
        'Sugestão de pedido: o que sugerir comprar, com base no histórico do cliente',
        'Sugestão de abordagem: o que destacar na visita, como lançamentos e campanhas ativas',
        'Oportunidades de vendas: combinações de produtos que costumam ser compradas juntas',
        'Tendências e previsões: o que deve crescer no próximo mês, com reforço de estoque quando faz sentido',
        'Preferências e retenção: ações para fidelizar o cliente com base no comportamento de compra',
      ],
      note: 'Segundo os consultores, as missões deram mais propriedade e confiança na relação com os clientes. Os seis consultores concluíram todas as missões em 78 pontos de venda. Um único consultor concluiu 28 PDVs.',
    },
    {
      title: 'Missões ajustadas ao que o campo aceita',
      viz: [
        { kind: 'compare', title: 'Aceitação das missões', from: { value: '92,7%', label: 'média de todo o período' }, to: { value: '100%', label: 'depois das melhorias de 26 de agosto' }, note: 'Foram poucos dias e seis usuários depois do ajuste. Leia como sinal, não como regra.' },
      ],
      paragraphs: [
        'O time do Dinn acompanhou, semana a semana, quais missões o campo aceitava e quais descartava. Usou esses dados para melhorar o produto.',
      ],
      bullets: [
        'Mais aceitas: as que ampliam e diversificam o mix e analisam o desempenho de vendas, como Ampliar Mix de Produtos, Análise de Vendas e Positivação de Produtos',
        'Menos aceitas: as que apontam problema de desempenho, como Produtos com Baixo Desempenho e Analisar Queda de Vendas',
        'Em 26 de agosto, o Dinn reduziu o número de missões exibidas. Surgiram temas de ação comercial: produtos com desconto, produtos em alta e pacotes promocionais',
        'Depois das melhorias, os consultores acataram 100% das missões. O engajamento continuou alto: 66 acessos em 27 de agosto e 52 em 28 de agosto',
      ],
    },
    {
      title: 'Feedback do campo que vira roadmap',
      paragraphs: ['Os 30 dias de uso também serviram para ouvir os consultores. Quatro pedidos se repetiram. Cada um tem um caminho no Dinn.'],
      tables: [
        {
          head: ['O que os consultores pediram', 'O que o Dinn faz'],
          rows: [
            ['Busca de CNPJs mais precisa', 'Filtros inteligentes, em desenvolvimento'],
            ['Roteiro de visitas para facilitar a execução', 'Planejamento de PDVs do dia, que entra no rollout'],
            ['Espelhamento de dados do sistema de pedidos do cliente', 'Novas fontes de dados, como o sistema de pedidos do cliente, para direcionar melhor as missões'],
            ['Exportação em Excel', 'Em investigação: exportação em formatos compatíveis com outros sistemas'],
          ],
        },
      ],
      quote: {
        text: 'Parabéns a todos os envolvidos no projeto Dinn. Os resultados dos testes são promissores e mostram o potencial dessa inovação para transformar nossa empresa. A dedicação da equipe é inspiradora, e estamos confiantes no impacto positivo que isso trará.',
        role: 'Consultor de vendas',
        approved: true,
      },
    },
  ],
  results: [
    {
      title: 'Adoção e satisfação',
      viz: [
        { kind: 'donut', title: 'Missões do período', sub: 'Acatadas e rejeitadas', items: [{ label: 'Acatadas (573)', value: 573 }, { label: 'Rejeitadas (45)', value: 45 }], center: { value: '92,7%', label: 'acatadas' } },
        { kind: 'bars', title: 'Satisfação dos consultores', sub: 'CSAT, nota de 1 a 5, em 17 dias', max: 5, digits: 2, items: [{ label: 'Navegação intuitiva na busca por informações', value: 4.83 }, { label: 'Priorização de clientes', value: 4.67 }, { label: 'Probabilidade de uso contínuo', value: 4.67 }, { label: 'Adequação das informações nas missões', value: 4.0, hot: true }] },
      ],
      bullets: [
        '92,7% das missões acatadas em todo o período: 573 acatadas e 45 rejeitadas',
        '100% de aceitação depois das melhorias de 26 de agosto (poucos dias e seis usuários)',
        'Engajamento de 70,77%, com o critério de pelo menos duas visitas à página de listagem de PDVs',
      ],
      note: 'A adequação das informações teve a menor nota. Na próxima fase, o Dinn inclui dados pedidos pelos usuários, vindos de outros sistemas do cliente.',
    },
    {
      title: 'O potencial do rollout',
      paragraphs: ['O potencial abaixo é uma leitura qualitativa. Não é resultado medido nos 30 dias de uso.'],
      bullets: [
        'Mais vendas por visita, porque o consultor chega ao ponto de venda com a missão pronta',
        'Menos tempo de preparo em cada visita, porque o Dinn reúne os dados',
        'Espaço para mais visitas por dia na rotina de cada consultor',
      ],
      note: 'Potencial para o rollout em toda a base de consultores. Não é resultado medido.',
    },
  ],
  next: {
    title: 'O que vem a seguir',
    paragraphs: ['A Sanofi caminha para o rollout do App Consultor. O roadmap inclui:'],
    bullets: [
      'Planejamento de rotas: rotas de visita geradas pelo Dinn, somadas às regras e prioridades de negócio da Sanofi',
      'Prevenção de ruptura: o Dinn analisa o histórico de estoque do cliente e prevê o que vai faltar',
      'Treinamento por documentos: planilhas e arquivos de texto enviados direto ao Dinn, sem integração por API',
      'Visão do gestor: engajamento e desempenho do time e de cada consultor, top 5 de missões mais realizadas e rejeitadas e visão por regional',
      'Copiloto Dinn para gestores: notificações acionáveis no WhatsApp, acompanhamento do campo e definição de regras de negócio',
    ],
  },
};

export const en: Customer = {
  slug: 'sanofi',
  name: 'Sanofi',
  sector: 'Pharma and healthcare',
  hq: 'Paris, France',
  useCase: 'Next Best Action for the field sales force',
  about: 'Sanofi is one of the largest healthcare and pharmaceutical companies in the world.',
  title: 'Sanofi brings market intelligence to the field',
  summary: 'In 30 days, Sanofi consultants accepted 92.7% of the recommendations from Jean.',
  metaDescription: 'In 30 days, Sanofi consultants accepted 92.7% of the missions that Dinn AI generated, with 90.85% satisfaction and 70.77% engagement.',
  metrics: [
    { value: '92.7%', label: 'of Jean recommendations were accepted: 573 accepted and 45 rejected' },
    { value: '90.85%', label: 'consultant satisfaction (average CSAT of 4.54 out of 5)' },
    { value: '~20', label: 'logins per day, per consultant, on average' },
    { value: '78', label: 'stores where the six consultants completed all recommendations' },
  ],
  quote: {
    text: 'We can be precise in our actions and not forget the basics, which our routine makes us miss. The tool does not let us forget. It makes all the difference.',
    role: 'Sales consultant',
    approved: true,
  },
  intro: [
    'Sanofi wants to grow with strong execution and diversify its portfolio in stores. To do this, it relies on consultants who visit pharmacies, distributors and doctors every day. The data does not always reach them in a clear form.',
    'From July 30, 2024, six Sanofi sales consultants used Dinn for 30 days. They work in two regions. The question was direct: do consultants follow the AI recommendations when they appear in the middle of the field routine?',
    'They did. And they liked it.',
  ],
  problem: {
    title: 'Scattered data, visits without direction',
    viz: [
      { kind: 'art', art: 'launch', g: 'web/lilas-azul', caption: 'From scattered information to a ready mission' },
    ],
    paragraphs: [
      'Sanofi had information, but it was scattered. Before entering each store, the consultant did not know clearly what to do there.',
      'The result is well known: poorly informed decisions, less effective visits, wasted resources and lost opportunities.',
      'Sanofi needed market intelligence applied to field visits. It did not want one more dashboard to check later. It wanted guidance ready at the moment of the visit.',
    ],
  },
  solution: {
    title: 'Missions that say what to offer, when and how',
    viz: [
      { kind: 'timeline', title: 'The 30 days of use', steps: [{ date: '30 Jul 2024', label: 'Six consultants start to use Dinn' }, { date: '26 Aug 2024', label: 'Improvements to the missions page, for everyone' }, { date: '30 Aug 2024', label: 'End of the 30 days and review of the results' }] },
    ],
    paragraphs: [
      'Dinn uses the Next Best Action (NBA) method, with artificial intelligence. It answers three questions for each customer: what to offer, when to offer it and how to offer it. The answer reaches the consultant in real time, as missions.',
      'The hypothesis: consultants accept the AI recommendations if they are accurate and relevant, if they fit the routine and if they add value.',
    ],
    bullets: [
      'Period: July 30 to August 30, 2024',
      'Participants: six sales consultants, three from region A and three from region B',
      'Data source: the customer sales database',
      'Continuous improvement: on August 26, Dinn released new improvements to the missions page for everyone',
      'Measurement: app usage, accepted and rejected missions and satisfaction (CSAT)',
    ],
  },
  stories: [
    {
      title: 'Missions tell the consultant what to do',
      paragraphs: [
        'The consultant opens Dinn and searches for the customer by name or CNPJ (store or doctor). The consultant finds the missions for that customer. Each mission is a clear recommendation. The consultant marks it as done or dismisses it.',
        'Five types of mission follow the visit routine:',
      ],
      bullets: [
        'Order suggestion: what to suggest buying, based on the customer history',
        'Approach suggestion: what to highlight in the visit, such as launches and active campaigns',
        'Sales opportunities: product combinations that customers often buy together',
        'Trends and forecasts: what should grow next month, with stock reinforcement when it makes sense',
        'Preferences and retention: actions to keep the customer, based on buying behavior',
      ],
      note: 'According to the consultants, the missions gave them more authority and confidence with customers. The six consultants completed all missions in 78 stores. One consultant alone completed 28 stores.',
    },
    {
      title: 'Missions adjusted to what the field accepts',
      viz: [
        { kind: 'compare', title: 'Mission acceptance', from: { value: '92.7%', label: 'average for the whole period' }, to: { value: '100%', label: 'after the August 26 improvements' }, note: 'This covers only a few days and six users after the change. Read it as a signal, not as a rule.' },
      ],
      paragraphs: [
        'The Dinn team tracked, week by week, which missions the field accepted and which it dismissed. The team used this data to improve the product.',
      ],
      bullets: [
        'Most accepted: missions that expand and diversify the mix and analyze sales performance, such as Expand Product Mix, Sales Analysis and Product Activation',
        'Least accepted: missions that point to a performance problem, such as Low-Performing Products and Analyze Sales Drop',
        'On August 26, Dinn reduced the number of missions shown. New commercial action themes appeared: discounted products, trending products and promotional bundles',
        'After the improvements, consultants accepted 100% of the missions. Engagement stayed high: 66 logins on August 27 and 52 on August 28',
      ],
    },
    {
      title: 'Field feedback that becomes roadmap',
      paragraphs: ['The 30 days of use also let us hear the consultants. Four requests came up again and again. Each one has a path in Dinn.'],
      tables: [
        {
          head: ['What consultants asked for', 'What Dinn does'],
          rows: [
            ['More accurate CNPJ search', 'Smart filters, in development'],
            ['Visit route to ease execution', 'Planning of the day\'s stores, part of the rollout'],
            ['Mirroring of data from the customer order system', 'New data sources, such as the customer order system, to guide the missions better'],
            ['Excel export', 'Under review: export in formats compatible with other systems'],
          ],
        },
      ],
      quote: {
        text: 'Congratulations to everyone involved in the Dinn project. The test results are promising and show the potential of this innovation to transform our company. The dedication of the team is inspiring, and we are confident in the positive impact it will bring.',
        role: 'Sales consultant',
        approved: true,
      },
    },
  ],
  results: [
    {
      title: 'Adoption and satisfaction',
      viz: [
        { kind: 'donut', title: 'Missions in the period', sub: 'Accepted and rejected', items: [{ label: 'Accepted (573)', value: 573 }, { label: 'Rejected (45)', value: 45 }], center: { value: '92.7%', label: 'accepted' } },
        { kind: 'bars', title: 'Consultant satisfaction', sub: 'CSAT, score from 1 to 5, over 17 days', max: 5, digits: 2, items: [{ label: 'Intuitive navigation to find information', value: 4.83 }, { label: 'Customer prioritization', value: 4.67 }, { label: 'Likelihood of continued use', value: 4.67 }, { label: 'Fit of the information in missions', value: 4.0, hot: true }] },
      ],
      bullets: [
        '92.7% of missions accepted over the whole period: 573 accepted and 45 rejected',
        '100% acceptance after the August 26 improvements (a few days and six users)',
        '70.77% engagement, defined as at least two visits to the store list page',
      ],
      note: 'Fit of the information had the lowest score. In the next phase, Dinn adds data that users asked for, from other customer systems.',
    },
    {
      title: 'The potential of the rollout',
      paragraphs: ['The potential below is a qualitative view. It is not a result measured in the 30 days of use.'],
      bullets: [
        'More sales per visit, because the consultant arrives at the store with a ready mission',
        'Less prep time for each visit, because Dinn gathers the data',
        'Room for more visits per day in each consultant routine',
      ],
      note: 'Potential for the rollout to the whole consultant base. Not a measured result.',
    },
  ],
  next: {
    title: 'What comes next',
    paragraphs: ['Sanofi is moving toward the rollout of App Consultor. The roadmap includes:'],
    bullets: [
      'Route planning: visit routes that Dinn generates, combined with the business rules and priorities of Sanofi',
      'Stock-out prevention: Dinn analyzes the customer stock history and predicts what will run out',
      'Training with documents: spreadsheets and text files sent straight to Dinn, with no API integration',
      'Manager view: engagement and performance of the team and of each consultant, top 5 most completed and rejected missions, and a view by region',
      'Dinn Copilot for managers: actionable notifications on WhatsApp, field follow-up and business rule setup',
    ],
  },
};

export const es: Customer = {
  slug: 'sanofi',
  name: 'Sanofi',
  sector: 'Farmacéutica y salud',
  hq: 'París, Francia',
  useCase: 'Next Best Action para la fuerza de ventas en campo',
  about: 'Sanofi es una de las mayores empresas globales de salud y farmacéutica.',
  title: 'Sanofi lleva inteligencia de mercado al campo',
  summary: 'En 30 días, los consultores de Sanofi aceptaron el 92,7% de las recomendaciones de Jean.',
  metaDescription: 'En 30 días, los consultores de Sanofi aceptaron el 92,7% de las misiones que generó la IA de Dinn, con 90,85% de satisfacción y 70,77% de engagement.',
  metrics: [
    { value: '92,7%', label: 'de las recomendaciones de Jean fueron aceptadas: 573 aceptadas y 45 rechazadas' },
    { value: '90,85%', label: 'de satisfacción de los consultores (CSAT medio de 4,54 sobre 5)' },
    { value: '~20', label: 'accesos por día, por consultor, en promedio' },
    { value: '78', label: 'tiendas con todas las recomendaciones concluidas por los seis consultores' },
  ],
  quote: {
    text: 'Logramos ser precisos en nuestras acciones, sin olvidar puntos básicos, que se nos escapan por la rutina. La herramienta no nos deja olvidar. Hace toda la diferencia.',
    role: 'Consultor de ventas',
    approved: true,
  },
  intro: [
    'Sanofi quiere crecer con buena ejecución y diversificar el portafolio en los puntos de venta. Para eso, depende de consultores que visitan farmacias, distribuidores y médicos todos los días. Los datos no siempre les llegan de forma clara.',
    'Desde el 30 de julio de 2024, seis consultores de ventas de Sanofi usaron Dinn por 30 días. Actúan en dos regionales. La pregunta era directa: ¿los consultores siguen las recomendaciones de la IA cuando aparecen en medio de la rutina de campo?',
    'Las siguieron. Y les gustó.',
  ],
  problem: {
    title: 'Datos dispersos, visitas sin dirección',
    viz: [
      { kind: 'art', art: 'launch', g: 'web/lilas-azul', caption: 'De la información dispersa a la misión lista' },
    ],
    paragraphs: [
      'Sanofi tenía información, pero estaba dispersa. Antes de entrar en cada tienda, el consultor no sabía con claridad qué hacer allí.',
      'El resultado es conocido: decisiones mal informadas, visitas menos eficaces, desperdicio de recursos y oportunidades perdidas.',
      'Sanofi necesitaba inteligencia de mercado aplicada a las visitas de campo. No quería otro panel para consultar después. Quería orientación lista en el momento de la visita.',
    ],
  },
  solution: {
    title: 'Misiones que dicen qué ofrecer, cuándo y cómo',
    viz: [
      { kind: 'timeline', title: 'Los 30 días de uso', steps: [{ date: '30 jul 2024', label: 'Seis consultores empiezan a usar Dinn' }, { date: '26 ago 2024', label: 'Mejoras en la página de misiones, para todos' }, { date: '30 ago 2024', label: 'Fin de los 30 días y lectura de los resultados' }] },
    ],
    paragraphs: [
      'Dinn usa la metodología Next Best Action (NBA), con inteligencia artificial. Responde tres preguntas para cada cliente: qué ofrecer, cuándo ofrecer y cómo ofrecer. La respuesta llega al consultor en tiempo real, en forma de misiones.',
      'La hipótesis: los consultores aceptan las recomendaciones de la IA si son precisas y relevantes, si son fáciles de integrar a la rutina y si aportan valor.',
    ],
    bullets: [
      'Período: del 30 de julio al 30 de agosto de 2024',
      'Participantes: seis consultores de ventas, tres de la regional A y tres de la regional B',
      'Fuente de datos: base de ventas del cliente',
      'Mejora continua: el 26 de agosto, Dinn liberó para todos nuevas mejoras en la página de misiones',
      'Medición: uso de la aplicación, misiones aceptadas y rechazadas y satisfacción (CSAT)',
    ],
  },
  stories: [
    {
      title: 'Las misiones dicen al consultor qué hacer',
      paragraphs: [
        'El consultor abre Dinn y busca al cliente por nombre o CNPJ (tienda o médico). Encuentra las misiones del cliente. Cada misión es una recomendación objetiva. El consultor la marca como hecha o la descarta.',
        'Cinco tipos de misión acompañan la rutina de visita:',
      ],
      bullets: [
        'Sugerencia de pedido: qué sugerir comprar, según el historial del cliente',
        'Sugerencia de abordaje: qué destacar en la visita, como lanzamientos y campañas activas',
        'Oportunidades de ventas: combinaciones de productos que suelen comprarse juntas',
        'Tendencias y previsiones: qué debe crecer el próximo mes, con refuerzo de stock cuando tiene sentido',
        'Preferencias y retención: acciones para fidelizar al cliente según su comportamiento de compra',
      ],
      note: 'Según los consultores, las misiones dieron más dominio y confianza en la relación con los clientes. Los seis consultores concluyeron todas las misiones en 78 tiendas. Un solo consultor concluyó 28 tiendas.',
    },
    {
      title: 'Misiones ajustadas a lo que el campo acepta',
      viz: [
        { kind: 'compare', title: 'Aceptación de las misiones', from: { value: '92,7%', label: 'promedio de todo el período' }, to: { value: '100%', label: 'después de las mejoras del 26 de agosto' }, note: 'Fueron pocos días y seis usuarios después del ajuste. Léalo como una señal, no como una regla.' },
      ],
      paragraphs: [
        'El equipo de Dinn siguió, semana a semana, qué misiones el campo aceptaba y cuáles descartaba. Usó esos datos para mejorar el producto.',
      ],
      bullets: [
        'Más aceptadas: las que amplían y diversifican el mix y analizan el desempeño de ventas, como Ampliar Mix de Productos, Análisis de Ventas y Positivación de Productos',
        'Menos aceptadas: las que señalan un problema de desempeño, como Productos con Bajo Desempeño y Analizar Caída de Ventas',
        'El 26 de agosto, Dinn redujo el número de misiones mostradas. Surgieron temas de acción comercial: productos con descuento, productos en alza y paquetes promocionales',
        'Después de las mejoras, los consultores aceptaron el 100% de las misiones. El engagement siguió alto: 66 accesos el 27 de agosto y 52 el 28 de agosto',
      ],
    },
    {
      title: 'Feedback del campo que se vuelve roadmap',
      paragraphs: ['Los 30 días de uso también sirvieron para escuchar a los consultores. Cuatro pedidos se repitieron. Cada uno tiene un camino en Dinn.'],
      tables: [
        {
          head: ['Lo que pidieron los consultores', 'Lo que hace Dinn'],
          rows: [
            ['Búsqueda de CNPJ más precisa', 'Filtros inteligentes, en desarrollo'],
            ['Ruta de visitas para facilitar la ejecución', 'Planificación de las tiendas del día, que entra en el rollout'],
            ['Espejo de datos del sistema de pedidos del cliente', 'Nuevas fuentes de datos, como el sistema de pedidos del cliente, para orientar mejor las misiones'],
            ['Exportación a Excel', 'En evaluación: exportación en formatos compatibles con otros sistemas'],
          ],
        },
      ],
      quote: {
        text: 'Felicitaciones a todos los involucrados en el proyecto Dinn. Los resultados de las pruebas son prometedores y muestran el potencial de esta innovación para transformar nuestra empresa. La dedicación del equipo es inspiradora, y confiamos en el impacto positivo que traerá.',
        role: 'Consultor de ventas',
        approved: true,
      },
    },
  ],
  results: [
    {
      title: 'Adopción y satisfacción',
      viz: [
        { kind: 'donut', title: 'Misiones del período', sub: 'Aceptadas y rechazadas', items: [{ label: 'Aceptadas (573)', value: 573 }, { label: 'Rechazadas (45)', value: 45 }], center: { value: '92,7%', label: 'aceptadas' } },
        { kind: 'bars', title: 'Satisfacción de los consultores', sub: 'CSAT, nota de 1 a 5, en 17 días', max: 5, digits: 2, items: [{ label: 'Navegación intuitiva para buscar información', value: 4.83 }, { label: 'Priorización de clientes', value: 4.67 }, { label: 'Probabilidad de uso continuo', value: 4.67 }, { label: 'Adecuación de la información en las misiones', value: 4.0, hot: true }] },
      ],
      bullets: [
        '92,7% de las misiones aceptadas en todo el período: 573 aceptadas y 45 rechazadas',
        '100% de aceptación después de las mejoras del 26 de agosto (pocos días y seis usuarios)',
        'Engagement de 70,77%, con el criterio de al menos dos visitas a la página de listado de tiendas',
      ],
      note: 'La adecuación de la información tuvo la nota más baja. En la próxima fase, Dinn incluye datos que pidieron los usuarios, de otros sistemas del cliente.',
    },
    {
      title: 'El potencial del rollout',
      paragraphs: ['El potencial de abajo es una lectura cualitativa. No es un resultado medido en los 30 días de uso.'],
      bullets: [
        'Más ventas por visita, porque el consultor llega a la tienda con la misión lista',
        'Menos tiempo de preparación en cada visita, porque Dinn reúne los datos',
        'Espacio para más visitas por día en la rutina de cada consultor',
      ],
      note: 'Potencial para el rollout en toda la base de consultores. No es un resultado medido.',
    },
  ],
  next: {
    title: 'Lo que viene a continuación',
    paragraphs: ['Sanofi avanza hacia el rollout de App Consultor. El roadmap incluye:'],
    bullets: [
      'Planificación de rutas: rutas de visita que genera Dinn, junto con las reglas y prioridades de negocio de Sanofi',
      'Prevención de quiebre de stock: Dinn analiza el historial de stock del cliente y prevé qué va a faltar',
      'Entrenamiento con documentos: hojas de cálculo y archivos de texto enviados directo a Dinn, sin integración por API',
      'Visión del gestor: engagement y desempeño del equipo y de cada consultor, top 5 de misiones más realizadas y rechazadas y vista por regional',
      'Copiloto Dinn para gestores: notificaciones accionables en WhatsApp, seguimiento del campo y definición de reglas de negocio',
    ],
  },
};
