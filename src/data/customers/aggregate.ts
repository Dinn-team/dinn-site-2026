import type { Lang, Quote, Viz } from './types';

// Página /clientes: indicadores de uso do Dinn somados entre os cases, sem dizer qual
// laboratório tem cada número. Todo número vem dos cases em src/data/customers/*.ts e só
// mede o uso do próprio Dinn. Regras: sem nome de laboratório, de produto, de rede, de
// concorrente ou de pessoa nesta página. Os depoimentos são anônimos.
// Regra de 05/11/2026 (vocabulário): o site não usa mais "Next Best Action", "missão",
// "tarefa de NBA", visita médica nem revisão de carteira. As ações e recomendações vêm da
// Jean. O trabalho de mercado, de visita e de território fica em "Oportunidades", que
// mostra como o mercado e a ação do campo mudam o Share do laboratório.
//
// Contas (conferir antes de mudar):
//  - Ações recomendadas pela Jean: 618 (573 acatadas + 45 rejeitadas) + 3.121 = 3.739
//  - Acatadas ou concluídas: 573 + 2.008 = 2.581, ou 69,0% de 3.739
//  - Descartadas ou sem ação: 45 + 653 + 460 = 1.158
//  - Buscas de produto no localizador: 2.627, feitas por 49 usuários
//  - Usuários: 6 + 22 + 25 + 49 + 47 = 149, nos quatro cases com contagem de usuários
//  - Oportunidades: 14 dias do pedido ao painel em produção
//  - Localizador: de 50 para 1.500 farmácias por consulta

export type AggTeam = { team: string; what: string; stat: string };
export type AggAction = { title: string; text: string; stat?: string };
export type Aggregate = {
  eyebrow: string;
  stats: { value: string; label: string }[];
  statsNote: string;
  chartsTitle: string;
  chartsLead: string;
  viz: Viz[];
  teamsTitle: string;
  teamsLead: string;
  teams: AggTeam[];
  actionsTitle: string;
  actionsLead: string;
  actions: AggAction[];
  voicesTitle: string;
  voices: Quote[];
  opensTitle: string;
  opensLead: string;
};

const voicesPt: Quote[] = [
  { text: 'A equipe do Dinn se destacou por sua capacidade de entender profundamente nosso negócio, indo além da entrega de um simples produto digital. Eles ofereceram insights valiosos de negócios e mostraram uma disposição constante para acolher feedbacks e realizar ajustes, garantindo que a solução desenvolvida realmente agregasse valor à nossa equipe de vendas. Essa abordagem colaborativa e adaptativa foi crucial para o sucesso de nossa parceria.', role: 'Analista de inovação', approved: true },
  { text: 'Conseguimos ser assertivos em nossas ações, sem esquecer de pontos básicos, que acabamos por passar batido devido à nossa rotina. A ferramenta não nos deixa esquecer. Faz toda a diferença.', role: 'Consultor de vendas', approved: true },
  { text: 'Participar do projeto piloto com a Dinn foi uma experiência transformadora, e com vários aprendizados ao longo da caminhada. A abordagem inovadora e a tecnologia empregada no projeto não apenas otimizaram os nossos processos internos, mas também ampliaram significativamente a nossa visão de futuro com uma perspectiva de que possamos entregar algo de valor e assim transformar tudo que for aprendido em algo que faça a diferença na vida das pessoas.', role: 'Gerente regional de vendas', approved: true },
  { text: 'Parabéns a todos os envolvidos no projeto Dinn. Os resultados dos testes são promissores e mostram o potencial dessa inovação para transformar nossa empresa. A dedicação da equipe é inspiradora, e estamos confiantes no impacto positivo que isso trará.', role: 'Consultor de vendas', approved: true },
];

const voicesEn: Quote[] = [
  { text: 'The Dinn team stood out for how deeply it understood our business. It went beyond delivering a simple digital product. It gave us valuable business insights and always welcomed feedback and adjustments, so the solution truly added value for our sales team. This collaborative and adaptive approach was key to the success of our partnership.', role: 'Innovation analyst', approved: true },
  { text: 'We can be precise in our actions and not forget the basics, which our routine makes us miss. The tool does not let us forget. It makes all the difference.', role: 'Sales consultant', approved: true },
  { text: 'Taking part in the pilot project with Dinn was a transformative experience, with many lessons along the way. The innovative approach and the technology in the project improved our internal processes. They also widened our view of the future, so we can deliver something of value and turn what we learned into something that makes a difference in people\'s lives.', role: 'Regional sales manager', approved: true },
  { text: 'Congratulations to everyone involved in the Dinn project. The test results are promising and show the potential of this innovation to transform our company. The dedication of the team is inspiring, and we are confident in the positive impact it will bring.', role: 'Sales consultant', approved: true },
];

const voicesEs: Quote[] = [
  { text: 'El equipo de Dinn se destacó por su capacidad de entender a fondo nuestro negocio, más allá de entregar un simple producto digital. Ofreció insights valiosos de negocio y mostró una disposición constante para acoger feedback y hacer ajustes, así la solución realmente agregó valor a nuestro equipo de ventas. Este enfoque colaborativo y adaptativo fue clave para el éxito de nuestra alianza.', role: 'Analista de innovación', approved: true },
  { text: 'Logramos ser precisos en nuestras acciones, sin olvidar puntos básicos, que se nos escapan por la rutina. La herramienta no nos deja olvidar. Hace toda la diferencia.', role: 'Consultor de ventas', approved: true },
  { text: 'Participar en el proyecto piloto con Dinn fue una experiencia transformadora, con varios aprendizajes en el camino. El enfoque innovador y la tecnología del proyecto mejoraron nuestros procesos internos y ampliaron nuestra visión de futuro, para entregar algo de valor y convertir lo aprendido en algo que haga la diferencia en la vida de las personas.', role: 'Gerente regional de ventas', approved: true },
  { text: 'Felicitaciones a todos los involucrados en el proyecto Dinn. Los resultados de las pruebas son prometedores y muestran el potencial de esta innovación para transformar nuestra empresa. La dedicación del equipo es inspiradora, y confiamos en el impacto positivo que traerá.', role: 'Consultor de ventas', approved: true },
];

export const pt: Aggregate = {
  eyebrow: 'Resultados somados',
  stats: [
    { value: '3.739', label: 'ações recomendadas pela Jean para consultores e gestores' },
    { value: '69%', label: 'das ações acatadas ou concluídas pelos times (2.581)' },
    { value: '2.627', label: 'buscas de produto no Localizador, feitas por 49 usuários do atendimento e do campo' },
    { value: '140+', label: 'usuários de campo, atendimento e gestão nos casos com contagem de usuários' },
  ],
  statsNote: 'Soma dos casos de laboratórios que usam o Dinn. Medem o uso do Dinn. Os nomes dos laboratórios ficam preservados.',
  chartsTitle: 'Onde o Dinn muda o dia a dia',
  chartsLead: 'Os gráficos somam os casos. Mostram como os times usam as ações da Jean, o Localizador e as Oportunidades, e como avaliam o Dinn.',
  viz: [
    { kind: 'donut', title: 'O que os times fazem com as ações da Jean', sub: 'Ações recomendadas, soma dos casos', items: [
      { label: 'Acatadas ou concluídas', value: 2581 },
      { label: 'Descartadas ou sem ação', value: 1158 },
    ], center: { value: '69%', label: 'viram ação' }, note: 'O descarte também é dado. Ele mostra à Jean o que o campo considera irrelevante.' },
    { kind: 'bars', title: 'Satisfação por time', sub: 'Percentual, na medida de cada caso', unit: '%', digits: 1, max: 100, items: [
      { label: 'Consultores de campo: satisfação (CSAT)', value: 90.85 },
      { label: 'Time de campo: avaliações das ações com 5 estrelas', value: 86.8 },
      { label: 'Gestores: sentiriam o impacto se o Dinn saísse', value: 78 },
      { label: 'Atendimento e regionais: satisfação no 1º ciclo', value: 67.1, hot: true },
    ], note: 'O menor valor veio do 1º ciclo do atendimento. A dúvida era a confiança no estoque. O Dinn usou o retorno para entregar seis melhorias.' },
    { kind: 'compare', title: 'Oportunidades: do pedido ao painel no ar', from: { value: 'Dia 0', label: 'o time de um laboratório pede uma análise de Share por território' }, to: { value: '14 dias', label: 'painel de Oportunidades em produção, com ações sugeridas para o KAM' } },
    { kind: 'compare', title: 'Localizador: farmácias por consulta', from: { value: '50', label: 'limite antes dos novos filtros' }, to: { value: '1.500', label: 'com filtros de raio, estoque e confiabilidade' } },
  ],
  teamsTitle: 'O que cada time ganha',
  teamsLead: 'A Jean e as Oportunidades transformam o mesmo dado em uma ação diferente para cada atuação.',
  teams: [
    { team: 'Campo', what: 'Recebe da Jean ações e recomendações prontas: o que oferecer, a quem atender e em que ordem.', stat: '69% das ações viram trabalho feito' },
    { team: 'Atendimento ao cliente', what: 'Acha a farmácia com o produto antes de ligar, por distância e estoque.', stat: 'Até 1.500 farmácias por consulta' },
    { team: 'Gestão, trade e KAM', what: 'Vê a ruptura loja a loja e compara regiões e redes. Negocia e prioriza a rota com dado na mesa.', stat: '43% dos gestores ganham 30 min ou mais por semana' },
    { team: 'Estratégia e inteligência', what: 'Usa as Oportunidades para ver onde a categoria cresce e onde o Share do laboratório sobe ou cai, por território.', stat: '14 dias do pedido ao painel em produção' },
  ],
  actionsTitle: 'Do dado à ação pronta',
  actionsLead: 'O time não recebe um painel para interpretar. Recebe o próximo passo.',
  actions: [
    { title: 'Ação recomendada pela Jean', text: 'A Jean diz o que oferecer, quando e como, com base nos dados do Dinn. O consultor executa ou descarta.', stat: '92,7% das ações acatadas em um caso' },
    { title: 'Acompanhamento delegado', text: 'A Jean acompanha produtos e redes, prepara o próximo passo e chama o gestor quando ele precisa decidir.' },
    { title: 'Lista de lojas críticas', text: 'Lojas sem estoque nos últimos 30 dias, em planilha. A rota do time começa pelas mais críticas.' },
    { title: 'Localizador com nota de confiança', text: 'Farmácias por distância e faixa de estoque, com nota A, B ou C de confiabilidade.', stat: 'De 50 a 1.500 farmácias por consulta' },
    { title: 'Oportunidades que movem o Share', text: 'O Dinn mostra, por território, onde a categoria cresce e o Share do laboratório sobe ou cai. Os sinais de mercado e a ação do campo pesam nesse resultado.', stat: '14 dias do pedido ao painel' },
    { title: 'Avaliação de cada ação', text: 'O time dá uma nota a cada ação da Jean. O Dinn usa a nota para melhorar as próximas recomendações.', stat: '86,8% de notas máximas' },
  ],
  voicesTitle: 'O que dizem quem usa',
  voices: voicesPt,
  opensTitle: 'O caso de cada cliente',
  opensLead: 'Abra um laboratório para ler o problema, a solução e os números do caso.',
};

export const en: Aggregate = {
  eyebrow: 'Combined results',
  stats: [
    { value: '3,739', label: 'actions recommended by Jean to consultants and managers' },
    { value: '69%', label: 'of actions accepted or completed by the teams (2,581)' },
    { value: '2,627', label: 'product searches in the Locator, made by 49 customer service and field users' },
    { value: '140+', label: 'field, customer service and management users in the cases that count users' },
  ],
  statsNote: 'Sum of cases from laboratories that use Dinn. They measure Dinn usage. Laboratory names stay private.',
  chartsTitle: 'Where Dinn changes the daily routine',
  chartsLead: 'The charts add up the cases. They show how teams use Jean actions, the Locator and Opportunities, and how they rate Dinn.',
  viz: [
    { kind: 'donut', title: 'What teams do with Jean actions', sub: 'Recommended actions, sum of cases', items: [
      { label: 'Accepted or completed', value: 2581 },
      { label: 'Dismissed or no action', value: 1158 },
    ], center: { value: '69%', label: 'become action' }, note: 'Dismissals are data too. They show Jean what the field considers irrelevant.' },
    { kind: 'bars', title: 'Satisfaction by team', sub: 'Percent, with the measure of each case', unit: '%', digits: 1, max: 100, items: [
      { label: 'Field consultants: satisfaction (CSAT)', value: 90.85 },
      { label: 'Field team: action ratings with 5 stars', value: 86.8 },
      { label: 'Managers: would feel the impact if Dinn left', value: 78 },
      { label: 'Customer service and regions: first-cycle satisfaction', value: 67.1, hot: true },
    ], note: 'The lowest value came from the first cycle of customer service. The concern was trust in stock data. Dinn used the feedback to deliver six improvements.' },
    { kind: 'compare', title: 'Opportunities: from request to live dashboard', from: { value: 'Day 0', label: 'a laboratory team asks for a share analysis by territory' }, to: { value: '14 days', label: 'Opportunities dashboard live, with suggested actions for the KAM' } },
    { kind: 'compare', title: 'Locator: pharmacies per query', from: { value: '50', label: 'limit before the new filters' }, to: { value: '1,500', label: 'with radius, stock and reliability filters' } },
  ],
  teamsTitle: 'What each team gets',
  teamsLead: 'Jean and Opportunities turn the same data into a different action for each role.',
  teams: [
    { team: 'Field', what: 'Gets ready actions and recommendations from Jean: what to offer, whom to serve and in what order.', stat: '69% of actions become finished work' },
    { team: 'Customer service', what: 'Finds the pharmacy with the product before calling, by distance and stock.', stat: 'Up to 1,500 pharmacies per query' },
    { team: 'Management, trade and KAM', what: 'Sees stock-outs store by store and compares regions and chains. Negotiates and sets the route with data.', stat: '43% of managers save 30 min or more per week' },
    { team: 'Strategy and intelligence', what: 'Uses Opportunities to see where the category grows and where the laboratory share rises or falls, by territory.', stat: '14 days from request to live dashboard' },
  ],
  actionsTitle: 'From data to a ready action',
  actionsLead: 'The team does not get a dashboard to interpret. It gets the next step.',
  actions: [
    { title: 'Action recommended by Jean', text: 'Jean says what to offer, when and how, based on Dinn data. The consultant acts or dismisses it.', stat: '92.7% of actions accepted in one case' },
    { title: 'Delegated follow-up', text: 'Jean follows products and chains, prepares the next step and calls the manager when a decision is needed.' },
    { title: 'List of critical stores', text: 'Stores with no stock in the last 30 days, in a spreadsheet. The team route starts with the most critical.' },
    { title: 'Locator with a trust grade', text: 'Pharmacies by distance and stock range, with an A, B or C reliability grade.', stat: 'From 50 to 1,500 pharmacies per query' },
    { title: 'Opportunities that move share', text: 'Dinn shows, by territory, where the category grows and where the laboratory share rises or falls. Market signals and field action both shape that result.', stat: '14 days from request to dashboard' },
    { title: 'Rating of each action', text: 'The team rates each Jean action. Dinn uses the rating to improve the next recommendations.', stat: '86.8% top ratings' },
  ],
  voicesTitle: 'What users say',
  voices: voicesEn,
  opensTitle: 'The case of each customer',
  opensLead: 'Open a laboratory to read the problem, the solution and the numbers of the case.',
};

export const es: Aggregate = {
  eyebrow: 'Resultados sumados',
  stats: [
    { value: '3.739', label: 'acciones recomendadas por Jean a consultores y gestores' },
    { value: '69%', label: 'de las acciones aceptadas o completadas por los equipos (2.581)' },
    { value: '2.627', label: 'búsquedas de producto en el Localizador, hechas por 49 usuarios de atención y campo' },
    { value: '140+', label: 'usuarios de campo, atención y gestión en los casos que cuentan usuarios' },
  ],
  statsNote: 'Suma de los casos de laboratorios que usan Dinn. Miden el uso de Dinn. Los nombres de los laboratorios quedan reservados.',
  chartsTitle: 'Dónde Dinn cambia el día a día',
  chartsLead: 'Los gráficos suman los casos. Muestran cómo los equipos usan las acciones de Jean, el Localizador y las Oportunidades, y cómo evalúan Dinn.',
  viz: [
    { kind: 'donut', title: 'Qué hacen los equipos con las acciones de Jean', sub: 'Acciones recomendadas, suma de los casos', items: [
      { label: 'Aceptadas o completadas', value: 2581 },
      { label: 'Descartadas o sin acción', value: 1158 },
    ], center: { value: '69%', label: 'se vuelven acción' }, note: 'El descarte también es un dato. Muestra a Jean lo que el campo considera irrelevante.' },
    { kind: 'bars', title: 'Satisfacción por equipo', sub: 'Porcentaje, con la medida de cada caso', unit: '%', digits: 1, max: 100, items: [
      { label: 'Consultores de campo: satisfacción (CSAT)', value: 90.85 },
      { label: 'Equipo de campo: evaluaciones de las acciones con 5 estrellas', value: 86.8 },
      { label: 'Gestores: sentirían el impacto si Dinn saliera', value: 78 },
      { label: 'Atención y regionales: satisfacción del 1.er ciclo', value: 67.1, hot: true },
    ], note: 'El valor más bajo vino del 1.er ciclo de atención. La duda era la confianza en el stock. Dinn usó el retorno para entregar seis mejoras.' },
    { kind: 'compare', title: 'Oportunidades: del pedido al panel en producción', from: { value: 'Día 0', label: 'el equipo de un laboratorio pide un análisis de Share por territorio' }, to: { value: '14 días', label: 'panel de Oportunidades en producción, con acciones sugeridas para el KAM' } },
    { kind: 'compare', title: 'Localizador: farmacias por consulta', from: { value: '50', label: 'límite antes de los nuevos filtros' }, to: { value: '1.500', label: 'con filtros de radio, stock y confiabilidad' } },
  ],
  teamsTitle: 'Qué gana cada equipo',
  teamsLead: 'Jean y las Oportunidades convierten el mismo dato en una acción distinta para cada actuación.',
  teams: [
    { team: 'Campo', what: 'Recibe de Jean acciones y recomendaciones listas: qué ofrecer, a quién atender y en qué orden.', stat: '69% de las acciones se vuelven trabajo hecho' },
    { team: 'Atención al cliente', what: 'Encuentra la farmacia con el producto antes de llamar, por distancia y stock.', stat: 'Hasta 1.500 farmacias por consulta' },
    { team: 'Gestión, trade y KAM', what: 'Ve el quiebre de stock tienda a tienda y compara regiones y cadenas. Negocia y prioriza la ruta con datos.', stat: '43% de los gestores ahorran 30 min o más por semana' },
    { team: 'Estrategia e inteligencia', what: 'Usa las Oportunidades para ver dónde crece la categoría y dónde sube o baja el Share del laboratorio, por territorio.', stat: '14 días del pedido al panel en producción' },
  ],
  actionsTitle: 'Del dato a la acción lista',
  actionsLead: 'El equipo no recibe un panel para interpretar. Recibe el próximo paso.',
  actions: [
    { title: 'Acción recomendada por Jean', text: 'Jean dice qué ofrecer, cuándo y cómo, con base en los datos de Dinn. El consultor ejecuta o descarta.', stat: '92,7% de las acciones aceptadas en un caso' },
    { title: 'Seguimiento delegado', text: 'Jean sigue productos y cadenas, prepara el próximo paso y llama al gestor cuando necesita decidir.' },
    { title: 'Lista de tiendas críticas', text: 'Tiendas sin stock en los últimos 30 días, en una planilla. La ruta del equipo empieza por las más críticas.' },
    { title: 'Localizador con nota de confianza', text: 'Farmacias por distancia y rango de stock, con nota A, B o C de confiabilidad.', stat: 'De 50 a 1.500 farmacias por consulta' },
    { title: 'Oportunidades que mueven el Share', text: 'Dinn muestra, por territorio, dónde crece la categoría y dónde sube o baja el Share del laboratorio. Las señales de mercado y la acción del campo pesan en ese resultado.', stat: '14 días del pedido al panel' },
    { title: 'Evaluación de cada acción', text: 'El equipo da una nota a cada acción de Jean. Dinn usa la nota para mejorar las próximas recomendaciones.', stat: '86,8% de notas máximas' },
  ],
  voicesTitle: 'Lo que dicen quienes lo usan',
  voices: voicesEs,
  opensTitle: 'El caso de cada cliente',
  opensLead: 'Abra un laboratorio para leer el problema, la solución y los números del caso.',
};

const all: Record<Lang, Aggregate> = { pt, en, es };
export const aggregateFor = (lang: Lang = 'pt'): Aggregate => all[lang] ?? pt;
