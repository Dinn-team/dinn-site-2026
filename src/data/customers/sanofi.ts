import type { Customer } from './types';

export const pt: Customer = {
  slug: 'forca-de-vendas-global',
  name: 'Farmacêutica global',
  sector: 'Farmacêutica e saúde',
  hq: 'Global',
  useCase: 'Recomendações da Jean para a força de vendas em campo',
  about: 'Uma das maiores empresas globais de saúde e farmacêutica.',
  title: 'Laboratório global leva inteligência de mercado ao campo',
  summary: 'Em 30 dias, consultores do laboratório aceitaram 92,7% das recomendações da Jean.',
  metaDescription: 'Em 30 dias, consultores de um laboratório global aceitaram 92,7% das recomendações da Jean, com 90,85% de satisfação e 70,77% de engajamento.',
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
    'O laboratório quer crescer com boa execução e diversificar o portfólio nos pontos de venda. Para isso, depende de consultores que visitam farmácias, distribuidores e profissionais de saúde todos os dias. Os dados nem sempre chegam a eles de forma clara.',
    'Em 2024, seis consultores de vendas do laboratório usaram o Dinn por 30 dias. Eles atuam em duas regionais. A pergunta era direta: os consultores seguem as recomendações da Jean quando elas aparecem no meio da rotina de campo?',
    'Seguiram. E gostaram.',
  ],
  problem: {
    title: 'Dados descentralizados, visitas sem direção',
    viz: [
      { kind: 'art', art: 'launch', g: 'web/lilas-azul', caption: 'Da informação espalhada à recomendação pronta' },
    ],
    paragraphs: [
      'O laboratório tinha informação, mas ela estava espalhada. Antes de entrar em cada ponto de venda, o consultor não sabia com clareza o que fazer ali.',
      'O resultado é conhecido: decisões mal informadas, visitas menos eficazes, desperdício de recurso e oportunidades perdidas.',
      'O laboratório precisava de inteligência de mercado aplicada às visitas de campo. Não queria mais um painel para consultar depois. Queria orientação pronta no momento da visita.',
    ],
  },
  solution: {
    title: 'Recomendações que dizem o que oferecer, quando e como',
    viz: [
      { kind: 'timeline', title: 'Os 30 dias de uso', steps: [{ date: 'jul/2024', label: 'Seis consultores começam a usar o Dinn' }, { date: 'ago/2024', label: 'Melhorias na página de recomendações, para todos' }, { date: 'ago/2024', label: 'Fim dos 30 dias e leitura dos resultados' }] },
    ],
    paragraphs: [
      'A Jean usa inteligência artificial. Ela responde a três perguntas para cada cliente: o que oferecer, quando oferecer e como oferecer. A resposta chega ao consultor em tempo real, em forma de recomendações.',
      'A hipótese: os consultores acatam as recomendações da Jean se forem precisas e relevantes, se forem fáceis de integrar à rotina e se agregarem valor.',
    ],
    bullets: [
      'Período: 30 dias, entre julho e agosto de 2024',
      'Participantes: seis consultores de vendas, três da regional A e três da regional B',
      'Fonte de dados: base de vendas do cliente',
      'Melhoria contínua: perto do fim do período, a Dinn liberou para todos novas melhorias na página de recomendações',
      'Medição: uso da aplicação, recomendações aceitas e rejeitadas e satisfação (CSAT)',
    ],
  },
  stories: [
    {
      title: 'A Jean diz ao consultor o que fazer',
      paragraphs: [
        'O consultor abre o Dinn e busca o cliente por nome ou número fiscal (ponto de venda ou profissional de saúde). Ele encontra as recomendações do cliente. Cada recomendação é objetiva. O consultor marca como feita ou descarta.',
        'Cinco tipos de recomendação acompanham a rotina de visita:',
      ],
      bullets: [
        'Sugestão de pedido: o que sugerir comprar, com base no histórico do cliente',
        'Sugestão de abordagem: o que destacar na visita, como lançamentos e campanhas ativas',
        'Oportunidades de vendas: combinações de produtos que costumam ser compradas juntas',
        'Tendências e previsões: o que deve crescer no próximo mês, com reforço de estoque quando faz sentido',
        'Preferências e retenção: ações para fidelizar o cliente com base no comportamento de compra',
      ],
      note: 'Segundo os consultores, as recomendações deram mais propriedade e confiança na relação com os clientes. Os seis consultores concluíram todas as recomendações em 78 pontos de venda. Um único consultor concluiu 28 pontos de venda.',
    },
    {
      title: 'Recomendações ajustadas ao que o campo aceita',
      viz: [
        { kind: 'compare', title: 'Aceitação das recomendações', from: { value: '92,7%', label: 'média de todo o período' }, to: { value: '100%', label: 'depois das melhorias' }, note: 'Foram poucos dias e seis usuários depois do ajuste. Leia como sinal, não como regra.' },
      ],
      paragraphs: [
        'O time do Dinn acompanhou, semana a semana, quais recomendações o campo aceitava e quais descartava. Usou esses dados para melhorar o produto.',
      ],
      bullets: [
        'Mais aceitas: as que ampliam e diversificam o mix e analisam o desempenho de vendas',
        'Menos aceitas: as que apontam problema de desempenho, como produtos com baixo desempenho e queda de vendas',
        'Depois das melhorias, o Dinn reduziu o número de recomendações exibidas. Surgiram temas de ação comercial: produtos com desconto, produtos em alta e pacotes promocionais',
        'Depois das melhorias, os consultores acataram 100% das recomendações. O engajamento continuou alto: 66 acessos no primeiro dia e 52 no segundo',
      ],
    },
    {
      title: 'Feedback do campo orienta o produto',
      paragraphs: ['Os 30 dias de uso também serviram para ouvir os consultores. Quatro pedidos se repetiram. O Dinn usa esse retorno para priorizar o produto.'],
      bullets: [
        'Busca de clientes mais precisa',
        'Roteiro de visitas para facilitar a execução',
        'Mais fontes de dados do cliente para direcionar melhor as recomendações',
        'Exportação dos dados em formatos compatíveis com outros sistemas',
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
        { kind: 'donut', title: 'Recomendações do período', sub: 'Acatadas e rejeitadas', items: [{ label: 'Acatadas (573)', value: 573 }, { label: 'Rejeitadas (45)', value: 45 }], center: { value: '92,7%', label: 'acatadas' } },
        { kind: 'bars', as: 'rings', title: 'Satisfação dos consultores', sub: 'CSAT, nota de 1 a 5, em 17 dias', max: 5, digits: 2, items: [{ label: 'Navegação intuitiva na busca por informações', value: 4.83 }, { label: 'Priorização de clientes', value: 4.67 }, { label: 'Probabilidade de uso contínuo', value: 4.67 }, { label: 'Adequação das informações nas recomendações', value: 4.0, hot: true }] },
      ],
      bullets: [
        '92,7% das recomendações acatadas em todo o período: 573 acatadas e 45 rejeitadas',
        '100% de aceitação depois das melhorias (poucos dias e seis usuários)',
        'Engajamento de 70,77%, com o critério de pelo menos duas visitas à página de lista de pontos de venda',
      ],
      note: 'A adequação das informações teve a menor nota. O Dinn usa esse resultado para melhorar os dados de cada recomendação.',
    },
    {
      title: 'O potencial para toda a equipe',
      paragraphs: ['O potencial abaixo é uma leitura qualitativa. Não é resultado medido nos 30 dias de uso.'],
      bullets: [
        'Mais vendas por visita, porque o consultor chega ao ponto de venda com a recomendação pronta',
        'Menos tempo de preparo em cada visita, porque o Dinn reúne os dados',
        'Espaço para mais visitas por dia na rotina de cada consultor',
      ],
      note: 'Potencial para toda a base de consultores. Não é resultado medido.',
    },
  ],
  next: {
    title: 'O que vem a seguir',
    paragraphs: ['O próximo passo é ampliar o uso da Jean para mais consultores e incluir mais fontes de dados do cliente.'],
  },
};

export const en: Customer = {
  slug: 'forca-de-vendas-global',
  name: 'Global pharma company',
  sector: 'Pharma and healthcare',
  hq: 'Global',
  useCase: 'Jean recommendations for the field sales force',
  about: 'One of the largest healthcare and pharmaceutical companies in the world.',
  title: 'A global pharma company brings market intelligence to the field',
  summary: 'In 30 days, the company\'s consultants accepted 92.7% of the recommendations from Jean.',
  metaDescription: 'In 30 days, consultants at a global pharma company accepted 92.7% of the recommendations from Jean, with 90.85% satisfaction and 70.77% engagement.',
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
    'The company wants to grow with strong execution and diversify its portfolio in stores. To do this, it relies on consultants who visit pharmacies, distributors and health professionals every day. The data does not always reach them in a clear form.',
    'In 2024, six sales consultants from the company used Dinn for 30 days. They work in two regions. The question was direct: do consultants follow the Jean recommendations when they appear in the middle of the field routine?',
    'They did. And they liked it.',
  ],
  problem: {
    title: 'Scattered data, visits without direction',
    viz: [
      { kind: 'art', art: 'launch', g: 'web/lilas-azul', caption: 'From scattered information to a ready recommendation' },
    ],
    paragraphs: [
      'The company had information, but it was scattered. Before entering each store, the consultant did not know clearly what to do there.',
      'The result is well known: poorly informed decisions, less effective visits, wasted resources and lost opportunities.',
      'The company needed market intelligence applied to field visits. It did not want one more dashboard to check later. It wanted guidance ready at the moment of the visit.',
    ],
  },
  solution: {
    title: 'Recommendations that say what to offer, when and how',
    viz: [
      { kind: 'timeline', title: 'The 30 days of use', steps: [{ date: 'Jul 2024', label: 'Six consultants start to use Dinn' }, { date: 'Aug 2024', label: 'Improvements to the recommendations page, for everyone' }, { date: 'Aug 2024', label: 'End of the 30 days and review of the results' }] },
    ],
    paragraphs: [
      'Jean uses artificial intelligence. It answers three questions for each customer: what to offer, when to offer it and how to offer it. The answer reaches the consultant in real time, as recommendations.',
      'The hypothesis: consultants accept the Jean recommendations if they are accurate and relevant, if they fit the routine and if they add value.',
    ],
    bullets: [
      'Period: 30 days, between July and August 2024',
      'Participants: six sales consultants, three from region A and three from region B',
      'Data source: the customer sales database',
      'Continuous improvement: near the end of the period, Dinn released new improvements to the recommendations page for everyone',
      'Measurement: app usage, accepted and rejected recommendations and satisfaction (CSAT)',
    ],
  },
  stories: [
    {
      title: 'Jean tells the consultant what to do',
      paragraphs: [
        'The consultant opens Dinn and searches for the customer by name or tax ID (store or health professional). The consultant finds the recommendations for that customer. Each recommendation is clear. The consultant marks it as done or dismisses it.',
        'Five types of recommendation follow the visit routine:',
      ],
      bullets: [
        'Order suggestion: what to suggest buying, based on the customer history',
        'Approach suggestion: what to highlight in the visit, such as launches and active campaigns',
        'Sales opportunities: product combinations that customers often buy together',
        'Trends and forecasts: what should grow next month, with stock reinforcement when it makes sense',
        'Preferences and retention: actions to keep the customer, based on buying behavior',
      ],
      note: 'According to the consultants, the recommendations gave them more authority and confidence with customers. The six consultants completed all recommendations in 78 stores. One consultant alone completed 28 stores.',
    },
    {
      title: 'Recommendations adjusted to what the field accepts',
      viz: [
        { kind: 'compare', title: 'Recommendation acceptance', from: { value: '92.7%', label: 'average for the whole period' }, to: { value: '100%', label: 'after the improvements' }, note: 'This covers only a few days and six users after the change. Read it as a signal, not as a rule.' },
      ],
      paragraphs: [
        'The Dinn team tracked, week by week, which recommendations the field accepted and which it dismissed. The team used this data to improve the product.',
      ],
      bullets: [
        'Most accepted: recommendations that expand and diversify the mix and analyze sales performance',
        'Least accepted: recommendations that point to a performance problem, such as low-performing products and sales drops',
        'After the improvements, Dinn reduced the number of recommendations shown. New commercial action themes appeared: discounted products, trending products and promotional bundles',
        'After the improvements, consultants accepted 100% of the recommendations. Engagement stayed high: 66 logins on the first day and 52 on the second',
      ],
    },
    {
      title: 'Field feedback guides the product',
      paragraphs: ['The 30 days of use also let us hear the consultants. Four requests came up again and again. Dinn uses this feedback to set product priorities.'],
      bullets: [
        'More accurate customer search',
        'Visit route to ease execution',
        'More customer data sources to guide the recommendations better',
        'Data export in formats compatible with other systems',
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
        { kind: 'donut', title: 'Recommendations in the period', sub: 'Accepted and rejected', items: [{ label: 'Accepted (573)', value: 573 }, { label: 'Rejected (45)', value: 45 }], center: { value: '92.7%', label: 'accepted' } },
        { kind: 'bars', as: 'rings', title: 'Consultant satisfaction', sub: 'CSAT, score from 1 to 5, over 17 days', max: 5, digits: 2, items: [{ label: 'Intuitive navigation to find information', value: 4.83 }, { label: 'Customer prioritization', value: 4.67 }, { label: 'Likelihood of continued use', value: 4.67 }, { label: 'Fit of the information in recommendations', value: 4.0, hot: true }] },
      ],
      bullets: [
        '92.7% of recommendations accepted over the whole period: 573 accepted and 45 rejected',
        '100% acceptance after the improvements (a few days and six users)',
        '70.77% engagement, defined as at least two visits to the store list page',
      ],
      note: 'Fit of the information had the lowest score. Dinn uses this result to improve the data in each recommendation.',
    },
    {
      title: 'The potential for the whole team',
      paragraphs: ['The potential below is a qualitative view. It is not a result measured in the 30 days of use.'],
      bullets: [
        'More sales per visit, because the consultant arrives at the store with a ready recommendation',
        'Less prep time for each visit, because Dinn gathers the data',
        'Room for more visits per day in each consultant routine',
      ],
      note: 'Potential for the whole consultant base. Not a measured result.',
    },
  ],
  next: {
    title: 'What comes next',
    paragraphs: ['The next step is to extend the use of Jean to more consultants and add more customer data sources.'],
  },
};

export const es: Customer = {
  slug: 'forca-de-vendas-global',
  name: 'Farmacéutica global',
  sector: 'Farmacéutica y salud',
  hq: 'Global',
  useCase: 'Recomendaciones de Jean para la fuerza de ventas en campo',
  about: 'Una de las mayores empresas globales de salud y farmacéutica.',
  title: 'Laboratorio global lleva inteligencia de mercado al campo',
  summary: 'En 30 días, los consultores del laboratorio aceptaron el 92,7% de las recomendaciones de Jean.',
  metaDescription: 'En 30 días, los consultores de un laboratorio global aceptaron el 92,7% de las recomendaciones de Jean, con 90,85% de satisfacción y 70,77% de engagement.',
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
    'El laboratorio quiere crecer con buena ejecución y diversificar el portafolio en los puntos de venta. Para eso, depende de consultores que visitan farmacias, distribuidores y profesionales de la salud todos los días. Los datos no siempre les llegan de forma clara.',
    'En 2024, seis consultores de ventas del laboratorio usaron Dinn por 30 días. Actúan en dos regionales. La pregunta era directa: ¿los consultores siguen las recomendaciones de Jean cuando aparecen en medio de la rutina de campo?',
    'Las siguieron. Y les gustó.',
  ],
  problem: {
    title: 'Datos dispersos, visitas sin dirección',
    viz: [
      { kind: 'art', art: 'launch', g: 'web/lilas-azul', caption: 'De la información dispersa a la recomendación lista' },
    ],
    paragraphs: [
      'El laboratorio tenía información, pero estaba dispersa. Antes de entrar en cada tienda, el consultor no sabía con claridad qué hacer allí.',
      'El resultado es conocido: decisiones mal informadas, visitas menos eficaces, desperdicio de recursos y oportunidades perdidas.',
      'El laboratorio necesitaba inteligencia de mercado aplicada a las visitas de campo. No quería otro panel para consultar después. Quería orientación lista en el momento de la visita.',
    ],
  },
  solution: {
    title: 'Recomendaciones que dicen qué ofrecer, cuándo y cómo',
    viz: [
      { kind: 'timeline', title: 'Los 30 días de uso', steps: [{ date: 'jul 2024', label: 'Seis consultores empiezan a usar Dinn' }, { date: 'ago 2024', label: 'Mejoras en la página de recomendaciones, para todos' }, { date: 'ago 2024', label: 'Fin de los 30 días y lectura de los resultados' }] },
    ],
    paragraphs: [
      'Jean usa inteligencia artificial. Responde tres preguntas para cada cliente: qué ofrecer, cuándo ofrecer y cómo ofrecer. La respuesta llega al consultor en tiempo real, en forma de recomendaciones.',
      'La hipótesis: los consultores aceptan las recomendaciones de Jean si son precisas y relevantes, si son fáciles de integrar a la rutina y si aportan valor.',
    ],
    bullets: [
      'Período: 30 días, entre julio y agosto de 2024',
      'Participantes: seis consultores de ventas, tres de la regional A y tres de la regional B',
      'Fuente de datos: base de ventas del cliente',
      'Mejora continua: cerca del fin del período, Dinn liberó para todos nuevas mejoras en la página de recomendaciones',
      'Medición: uso de la aplicación, recomendaciones aceptadas y rechazadas y satisfacción (CSAT)',
    ],
  },
  stories: [
    {
      title: 'Jean dice al consultor qué hacer',
      paragraphs: [
        'El consultor abre Dinn y busca al cliente por nombre o número fiscal (tienda o profesional de la salud). Encuentra las recomendaciones del cliente. Cada recomendación es objetiva. El consultor la marca como hecha o la descarta.',
        'Cinco tipos de recomendación acompañan la rutina de visita:',
      ],
      bullets: [
        'Sugerencia de pedido: qué sugerir comprar, según el historial del cliente',
        'Sugerencia de abordaje: qué destacar en la visita, como lanzamientos y campañas activas',
        'Oportunidades de ventas: combinaciones de productos que suelen comprarse juntas',
        'Tendencias y previsiones: qué debe crecer el próximo mes, con refuerzo de stock cuando tiene sentido',
        'Preferencias y retención: acciones para fidelizar al cliente según su comportamiento de compra',
      ],
      note: 'Según los consultores, las recomendaciones dieron más dominio y confianza en la relación con los clientes. Los seis consultores concluyeron todas las recomendaciones en 78 tiendas. Un solo consultor concluyó 28 tiendas.',
    },
    {
      title: 'Recomendaciones ajustadas a lo que el campo acepta',
      viz: [
        { kind: 'compare', title: 'Aceptación de las recomendaciones', from: { value: '92,7%', label: 'promedio de todo el período' }, to: { value: '100%', label: 'después de las mejoras' }, note: 'Fueron pocos días y seis usuarios después del ajuste. Léalo como una señal, no como una regla.' },
      ],
      paragraphs: [
        'El equipo de Dinn siguió, semana a semana, qué recomendaciones el campo aceptaba y cuáles descartaba. Usó esos datos para mejorar el producto.',
      ],
      bullets: [
        'Más aceptadas: las que amplían y diversifican el mix y analizan el desempeño de ventas',
        'Menos aceptadas: las que señalan un problema de desempeño, como productos con bajo desempeño y caída de ventas',
        'Después de las mejoras, Dinn redujo el número de recomendaciones mostradas. Surgieron temas de acción comercial: productos con descuento, productos en alza y paquetes promocionales',
        'Después de las mejoras, los consultores aceptaron el 100% de las recomendaciones. El engagement siguió alto: 66 accesos el primer día y 52 el segundo',
      ],
    },
    {
      title: 'El feedback del campo orienta el producto',
      paragraphs: ['Los 30 días de uso también sirvieron para escuchar a los consultores. Cuatro pedidos se repitieron. Dinn usa ese feedback para priorizar el producto.'],
      bullets: [
        'Búsqueda de clientes más precisa',
        'Ruta de visitas para facilitar la ejecución',
        'Más fuentes de datos del cliente para orientar mejor las recomendaciones',
        'Exportación de los datos en formatos compatibles con otros sistemas',
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
        { kind: 'donut', title: 'Recomendaciones del período', sub: 'Aceptadas y rechazadas', items: [{ label: 'Aceptadas (573)', value: 573 }, { label: 'Rechazadas (45)', value: 45 }], center: { value: '92,7%', label: 'aceptadas' } },
        { kind: 'bars', as: 'rings', title: 'Satisfacción de los consultores', sub: 'CSAT, nota de 1 a 5, en 17 días', max: 5, digits: 2, items: [{ label: 'Navegación intuitiva para buscar información', value: 4.83 }, { label: 'Priorización de clientes', value: 4.67 }, { label: 'Probabilidad de uso continuo', value: 4.67 }, { label: 'Adecuación de la información en las recomendaciones', value: 4.0, hot: true }] },
      ],
      bullets: [
        '92,7% de las recomendaciones aceptadas en todo el período: 573 aceptadas y 45 rechazadas',
        '100% de aceptación después de las mejoras (pocos días y seis usuarios)',
        'Engagement de 70,77%, con el criterio de al menos dos visitas a la página de listado de tiendas',
      ],
      note: 'La adecuación de la información tuvo la nota más baja. Dinn usa ese resultado para mejorar los datos de cada recomendación.',
    },
    {
      title: 'El potencial para todo el equipo',
      paragraphs: ['El potencial de abajo es una lectura cualitativa. No es un resultado medido en los 30 días de uso.'],
      bullets: [
        'Más ventas por visita, porque el consultor llega a la tienda con la recomendación lista',
        'Menos tiempo de preparación en cada visita, porque Dinn reúne los datos',
        'Espacio para más visitas por día en la rutina de cada consultor',
      ],
      note: 'Potencial para toda la base de consultores. No es un resultado medido.',
    },
  ],
  next: {
    title: 'Lo que viene a continuación',
    paragraphs: ['El próximo paso es ampliar el uso de Jean a más consultores y sumar más fuentes de datos del cliente.'],
  },
};
