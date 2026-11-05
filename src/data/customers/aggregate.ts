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
//  - Buscas de produto no localizador: 2.202 (relatório de uso de 05/11), feitas por 49 pessoas
//  - Usuários: 6 + 22 + 25 + 49 + 47 = 149, nos quatro cases com contagem de usuários
//  - Oportunidades: 14 dias do pedido ao painel em produção
//  - Localizador: de 50 para 1.500 farmácias por consulta
//  - Uso do Dinn (seção `usage`): relatório de uso de 05/11/2026, período 01/07 a 05/11/2026,
//    só contas externas. Fonte: dinn-backoffice/docs/relatorios/2026-11-05-relatorio-de-uso-dinn.md
//    (e a etapa 8). Regras: sem nome de produto, laboratório ou rede. Não publicar a taxa de
//    estoque zero, a perda estimada nem a acurácia dos reports: são dados sensíveis do cliente.
//    Regra de 05/11/2026: nunca mostrar a quantidade de usuários. Use só percentual das pessoas que
//    usaram o Dinn. "Insights" no relatório vira "Jean" no site.
//    O uso prova adoção. Não prova venda. Não escreva que o Dinn "causou" ganho de venda.

export type AggTeam = { team: string; what: string; stat: string };
export type AggAction = { title: string; text: string; stat?: string };
export type AggUsage = { title: string; lead: string; stats: { value: string; label: string }[]; note: string; viz: Viz[] };
export type Aggregate = {
  eyebrow: string;
  stats: { value: string; label: string }[];
  statsNote: string;
  chartsTitle: string;
  chartsLead: string;
  viz: Viz[];
  usage: AggUsage;
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
    { value: '2.202', label: 'buscas de produto no Localizador, em 23 estados' },
    { value: '83%', label: 'das pessoas que usaram o Dinn buscaram produtos no Localizador' },
  ],
  statsNote: 'Soma dos casos de laboratórios que usam o Dinn. Medem o uso do Dinn, não a venda. Os nomes dos laboratórios ficam preservados.',
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
  usage: {
    title: 'O uso confirma: o Dinn entrou na rotina dos times',
    lead: 'Dados reais de uso do Dinn, de 1º de julho a 5 de novembro de 2026. Mostram quantas pessoas usam o Dinn, semana após semana.',
    stats: [
      { value: '40%', label: 'das pessoas que usaram o Dinn estão ativas em uma semana típica. No pico, 56%' },
      { value: '81%', label: 'das pessoas que usaram o Dinn estiveram ativas em outubro, o mês mais forte' },
      { value: '4,6 milhões', label: 'de leituras de estoque por dia, em cerca de 72,7 mil PDVs' },
      { value: '2.628', label: 'consultas de estoque em tempo real desde 1º de setembro. 89% com resposta válida' },
    ],
    note: 'Só contas de clientes. A equipe da Dinn fica fora. A semana de 2 de novembro é parcial. O uso mostra que o time adotou o Dinn. Ele não mede venda.',
    viz: [
    { kind: 'line', title: 'Pessoas ativas por semana', sub: 'Percentual das pessoas que usaram o Dinn, de 29/06 a 02/11', labels: ['29/06','','13/07','','27/07','','10/08','','24/08','','07/09','','21/09','','05/10','','19/10','','02/11*'], series: [{ name: '% das pessoas', values: [54,56,46,49,29,44,25,37,34,36,27,25,27,46,56,49,37,42,37] }], unit: '%', digits: 0, note: 'Fica entre 25% e 56% das pessoas por semana. A semana de 02/11 é parcial.' },
    { kind: 'bars', title: 'Pessoas por mês', sub: 'Percentual das pessoas que usaram o Dinn em cada mês', unit: '%', digits: 0, max: 100, items: [
      { label: 'Julho', value: 78 },
      { label: 'Agosto', value: 73 },
      { label: 'Setembro', value: 61 },
      { label: 'Outubro', value: 81, hot: true },
      { label: 'Novembro (1 a 5)', value: 37 },
    ], note: 'Outubro é o mês mais forte: 81% das pessoas usaram o Dinn.' },
    { kind: 'bars', title: 'O Dinn responde', sub: 'Taxa de resposta por função', unit: '%', digits: 1, max: 100, items: [
      { label: 'Buscas de produto concluídas', value: 99.5 },
      { label: 'Perguntas à Jean respondidas', value: 98 },
      { label: 'Consultas em tempo real com resposta válida', value: 89.1 },
      { label: 'Convites de correção de estoque respondidos', value: 86 },
    ], note: 'A Jean responde em 8 segundos, na mediana.' },
    { kind: 'line', title: 'Consultas de estoque em tempo real por semana', sub: 'Consultas manuais e automáticas, de 31/08 a 02/11', labels: ['31/08','07/09','14/09','21/09','28/09','05/10','12/10','19/10','26/10','02/11*'], series: [{ name: 'Consultas', values: [41,29,74,202,291,424,448,295,618,206] }], digits: 0, note: 'Passam de 29 a 41 por semana em setembro para 295 a 618 em outubro. Desde 16/09 o sistema também consulta sozinho: são 2.274 das 2.628. As outras 354 vêm de pedidos das pessoas.' },
    { kind: 'bars', title: 'Quantas pessoas usam cada função', sub: 'Percentual das pessoas que usaram o Dinn', unit: '%', digits: 0, max: 100, items: [
      { label: 'Buscar produto', value: 83 },
      { label: 'Abrir a farmácia do resultado', value: 76 },
      { label: 'Tour de apresentação concluído', value: 66 },
      { label: 'Destaques de tempo real', value: 64 },
      { label: 'Consulta automática em tempo real', value: 63 },
      { label: 'Filtros do painel', value: 53 },
      { label: 'Consulta manual em tempo real', value: 41 },
      { label: 'Rota no mapa até a farmácia', value: 34 },
      { label: 'Pergunta à Jean', value: 22 },
      { label: 'Correção de estoque enviada', value: 19 },
    ], note: 'Tempo real, filtros e Jean entraram entre setembro e outubro. As taxas dessas funções ainda são parciais.' },
    { kind: 'bars', title: 'Onde as pessoas buscam', sub: 'Percentual das buscas, por estado. 23 estados no total', unit: '%', digits: 1, max: 40, items: [
      { label: 'SP', value: 34.1 },
      { label: 'BA', value: 11.1 },
      { label: 'PR', value: 9.7 },
      { label: 'RJ', value: 8.5 },
      { label: 'MG', value: 6.1 },
      { label: 'RS', value: 5.7 },
      { label: 'GO', value: 4.2 },
      { label: 'SE', value: 3.1 },
      { label: 'Outros 15 estados', value: 17.5 },
    ], note: 'Os 5 maiores estados somam 70% das buscas. Foram 113 produtos buscados.' },
    ],
  },
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
    { value: '2,202', label: 'product searches in the Locator, in 23 states' },
    { value: '83%', label: 'of the people who used Dinn searched for products in the Locator' },
  ],
  statsNote: 'Sum of cases from laboratories that use Dinn. They measure Dinn usage, not sales. Laboratory names stay private.',
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
  usage: {
    title: 'Usage confirms it: Dinn is part of the teams\' routine',
    lead: 'Real Dinn usage data, from July 1 to November 5, 2026. It shows how many people use Dinn, week after week.',
    stats: [
      { value: '40%', label: 'of the people who used Dinn are active in a typical week. At the peak, 56%' },
      { value: '81%', label: 'of the people who used Dinn were active in October, the strongest month' },
      { value: '4.6 million', label: 'stock readings per day, in about 72.7 thousand POS' },
      { value: '2,628', label: 'real-time stock queries since September 1. 89% with a valid answer' },
    ],
    note: 'Customer accounts only. The Dinn team is not counted. The week of November 2 is partial. Usage shows the team adopted Dinn. It does not measure sales.',
    viz: [
    { kind: 'line', title: 'People active per week', sub: 'Percent of the people who used Dinn, June 29 to November 2', labels: ['29/06','','13/07','','27/07','','10/08','','24/08','','07/09','','21/09','','05/10','','19/10','','02/11*'], series: [{ name: '% of people', values: [54,56,46,49,29,44,25,37,34,36,27,25,27,46,56,49,37,42,37] }], unit: '%', digits: 0, note: 'It stays between 25% and 56% of people per week. The week of 11/02 is partial.' },
    { kind: 'bars', title: 'People per month', sub: 'Percent of the people who used Dinn in each month', unit: '%', digits: 0, max: 100, items: [
      { label: 'July', value: 78 },
      { label: 'August', value: 73 },
      { label: 'September', value: 61 },
      { label: 'October', value: 81, hot: true },
      { label: 'November (1 to 5)', value: 37 },
    ], note: 'October is the strongest month: 81% of people used Dinn.' },
    { kind: 'bars', title: 'Dinn responds', sub: 'Response rate by function', unit: '%', digits: 1, max: 100, items: [
      { label: 'Product searches completed', value: 99.5 },
      { label: 'Jean questions answered', value: 98 },
      { label: 'Real-time queries with a valid answer', value: 89.1 },
      { label: 'Stock correction invitations answered', value: 86 },
    ], note: 'Jean answers in 8 seconds, on median.' },
    { kind: 'line', title: 'Real-time stock queries per week', sub: 'Manual and automatic queries, August 31 to November 2', labels: ['31/08','07/09','14/09','21/09','28/09','05/10','12/10','19/10','26/10','02/11*'], series: [{ name: 'Queries', values: [41,29,74,202,291,424,448,295,618,206] }], digits: 0, note: 'They go from 29 to 41 per week in September to 295 to 618 in October. Since 09/16 the system also queries on its own: 2,274 of the 2,628. The other 354 come from people.' },
    { kind: 'bars', title: 'How many people use each function', sub: 'Percent of the people who used Dinn', unit: '%', digits: 0, max: 100, items: [
      { label: 'Search for a product', value: 83 },
      { label: 'Open the pharmacy from the result', value: 76 },
      { label: 'Product tour completed', value: 66 },
      { label: 'Real-time highlights', value: 64 },
      { label: 'Automatic real-time query', value: 63 },
      { label: 'Dashboard filters', value: 53 },
      { label: 'Manual real-time query', value: 41 },
      { label: 'Map route to the pharmacy', value: 34 },
      { label: 'Question to Jean', value: 22 },
      { label: 'Stock correction sent', value: 19 },
    ], note: 'Real time, filters and Jean launched between September and October. Their rates are still partial.' },
    { kind: 'bars', title: 'Where people search', sub: 'Percent of searches, by state. 23 states in total', unit: '%', digits: 1, max: 40, items: [
      { label: 'SP', value: 34.1 },
      { label: 'BA', value: 11.1 },
      { label: 'PR', value: 9.7 },
      { label: 'RJ', value: 8.5 },
      { label: 'MG', value: 6.1 },
      { label: 'RS', value: 5.7 },
      { label: 'GO', value: 4.2 },
      { label: 'SE', value: 3.1 },
      { label: 'Other 15 states', value: 17.5 },
    ], note: 'The top 5 states add up to 70% of searches. People searched 113 products.' },
    ],
  },
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
    { value: '2.202', label: 'búsquedas de producto en el Localizador, en 23 estados' },
    { value: '83%', label: 'de las personas que usaron Dinn buscaron productos en el Localizador' },
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
  usage: {
    title: 'El uso lo confirma: Dinn entró en la rutina de los equipos',
    lead: 'Datos reales de uso de Dinn, del 1 de julio al 5 de noviembre de 2026. Muestran cuántas personas usan Dinn, semana tras semana.',
    stats: [
      { value: '40%', label: 'de las personas que usaron Dinn están activas en una semana típica. En el pico, 56%' },
      { value: '81%', label: 'de las personas que usaron Dinn estuvieron activas en octubre, el mes más fuerte' },
      { value: '4,6 millones', label: 'de lecturas de stock por día, en cerca de 72,7 mil PDV' },
      { value: '2.628', label: 'consultas de stock en tiempo real desde el 1 de septiembre. 89% con respuesta válida' },
    ],
    note: 'Solo cuentas de clientes. El equipo de Dinn queda fuera. La semana del 2 de noviembre es parcial. El uso muestra que el equipo adoptó Dinn. No mide ventas.',
    viz: [
    { kind: 'line', title: 'Personas activas por semana', sub: 'Porcentaje de las personas que usaron Dinn, del 29/06 al 02/11', labels: ['29/06','','13/07','','27/07','','10/08','','24/08','','07/09','','21/09','','05/10','','19/10','','02/11*'], series: [{ name: '% de las personas', values: [54,56,46,49,29,44,25,37,34,36,27,25,27,46,56,49,37,42,37] }], unit: '%', digits: 0, note: 'Se mantiene entre 25% y 56% de las personas por semana. La semana del 02/11 es parcial.' },
    { kind: 'bars', title: 'Personas por mes', sub: 'Porcentaje de las personas que usaron Dinn cada mes', unit: '%', digits: 0, max: 100, items: [
      { label: 'Julio', value: 78 },
      { label: 'Agosto', value: 73 },
      { label: 'Septiembre', value: 61 },
      { label: 'Octubre', value: 81, hot: true },
      { label: 'Noviembre (1 a 5)', value: 37 },
    ], note: 'Octubre es el mes más fuerte: 81% de las personas usaron Dinn.' },
    { kind: 'bars', title: 'Dinn responde', sub: 'Tasa de respuesta por función', unit: '%', digits: 1, max: 100, items: [
      { label: 'Búsquedas de producto concluidas', value: 99.5 },
      { label: 'Preguntas a Jean respondidas', value: 98 },
      { label: 'Consultas en tiempo real con respuesta válida', value: 89.1 },
      { label: 'Invitaciones de corrección de stock respondidas', value: 86 },
    ], note: 'Jean responde en 8 segundos, en la mediana.' },
    { kind: 'line', title: 'Consultas de stock en tiempo real por semana', sub: 'Consultas manuales y automáticas, del 31/08 al 02/11', labels: ['31/08','07/09','14/09','21/09','28/09','05/10','12/10','19/10','26/10','02/11*'], series: [{ name: 'Consultas', values: [41,29,74,202,291,424,448,295,618,206] }], digits: 0, note: 'Pasan de 29 a 41 por semana en septiembre a 295 a 618 en octubre. Desde el 16/09 el sistema también consulta solo: son 2.274 de las 2.628. Las otras 354 vienen de pedidos de las personas.' },
    { kind: 'bars', title: 'Cuántas personas usan cada función', sub: 'Porcentaje de las personas que usaron Dinn', unit: '%', digits: 0, max: 100, items: [
      { label: 'Buscar producto', value: 83 },
      { label: 'Abrir la farmacia del resultado', value: 76 },
      { label: 'Tour de presentación concluido', value: 66 },
      { label: 'Destacados de tiempo real', value: 64 },
      { label: 'Consulta automática en tiempo real', value: 63 },
      { label: 'Filtros del panel', value: 53 },
      { label: 'Consulta manual en tiempo real', value: 41 },
      { label: 'Ruta en el mapa hasta la farmacia', value: 34 },
      { label: 'Pregunta a Jean', value: 22 },
      { label: 'Corrección de stock enviada', value: 19 },
    ], note: 'Tiempo real, filtros y Jean entraron entre septiembre y octubre. Las tasas de estas funciones aún son parciales.' },
    { kind: 'bars', title: 'Dónde buscan las personas', sub: 'Porcentaje de las búsquedas, por estado. 23 estados en total', unit: '%', digits: 1, max: 40, items: [
      { label: 'SP', value: 34.1 },
      { label: 'BA', value: 11.1 },
      { label: 'PR', value: 9.7 },
      { label: 'RJ', value: 8.5 },
      { label: 'MG', value: 6.1 },
      { label: 'RS', value: 5.7 },
      { label: 'GO', value: 4.2 },
      { label: 'SE', value: 3.1 },
      { label: 'Otros 15 estados', value: 17.5 },
    ], note: 'Los 5 mayores estados suman 70% de las búsquedas. Se buscaron 113 productos.' },
    ],
  },
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
