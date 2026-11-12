import type { Customer } from './types';

export const pt: Customer = {
  slug: 'carteira-de-medicos',
  name: 'Farmacêutica brasileira com atuação na América Latina',
  sector: 'Indústria farmacêutica',
  hq: 'Brasil',
  useCase: 'Ações recomendadas pela Jean para representantes e validação de médicos da carteira',
  about: 'Uma farmacêutica brasileira com atuação em toda a América Latina.',
  title: 'Jean diz ao representante qual médico visitar',
  summary: 'A Jean gerou 3.121 ações recomendadas para os representantes. Eles concluíram 64,3% dessas ações.',
  metaDescription: 'A Jean gerou 3.121 ações recomendadas para representantes. Eles concluíram 64,3% e validaram 1.953 médicos da carteira de um laboratório.',
  metrics: [
    { value: '3.121', label: 'ações recomendadas pela Jean, com 64,3% concluídas (2.008)' },
    { value: '86,8%', label: 'das 529 avaliações das ações deram a nota máxima, 5 estrelas' },
    { value: '22', label: 'representantes ativos recebendo ações da Jean' },
    { value: '653', label: 'ações descartadas (20,9%). O descarte mostra à Jean o que o campo considera irrelevante' },
  ],
  quote: {
    text: 'As sugestões da Jean são muito assertivas. Ajuda muito a focar nas oportunidades certas.',
    role: 'Representante de vendas',
    approved: false,
  },
  intro: [
    'Todo dia, a força de vendas responde a três perguntas: quem visitar, o que dizer e quem tirar da carteira. Com milhares de médicos por carteira, a planilha não dá conta.',
    'Até 10 de novembro de 2025, o laboratório usou dois recursos da Dinn. A Jean envia ao representante ações recomendadas por IA. A validação de médicos organiza a decisão sobre cada médico: manter ou remover da carteira.',
    'Participaram 22 representantes nas ações recomendadas e na validação de médicos. Outros 25 usaram o agendamento de visitas.',
  ],
  problem: {
    title: 'Uma carteira grande demais para conferir à mão',
    viz: [
      { kind: 'art', art: 'govern', g: 'web/pessego', caption: 'Milhares de médicos, uma carteira por prioridade' },
    ],
    paragraphs: [
      'A carteira do laboratório reúne milhares de médicos. Parte deles ainda não passou por uma auditoria inicial. Fora da carteira, há médicos de alto potencial nas classes de maior prioridade.',
      'O representante precisa decidir quem visitar, qual produto abordar e quando tirar um médico da rota. A gestão precisa saber se a carteira reflete o potencial real de prescrição.',
    ],
  },
  solution: {
    title: 'Ações recomendadas e validação de médicos',
    paragraphs: [
      'A Jean envia ao representante ações recomendadas por IA sobre o que fazer com cada médico. O representante executa, descarta ou ignora a ação e a avalia depois.',
      'Em paralelo, a validação de médicos registra, médico a médico, a decisão de manter ou remover e o motivo.',
    ],
    bullets: [
      'Período: até 10 de novembro de 2025',
      'Recursos: ações recomendadas pela Jean, painéis de médicos, validação de médicos e agendamento de visitas',
      'Representantes ativos: 22 nas ações recomendadas e na validação, 25 no agendamento de visitas',
      'Medição: ações geradas e concluídas, avaliações, médicos validados e motivos de manter ou remover',
    ],
  },
  stories: [
    {
      title: 'Ações recomendadas: onde focar',
      viz: [
        { kind: 'donut', title: 'Ações recomendadas geradas', sub: '3.121 ações em um ciclo', items: [{ label: 'Concluídas', value: 2008 }, { label: 'Descartadas pelos representantes', value: 653 }, { label: 'Ignoradas', value: 460 }], center: { value: '64,3%', label: 'concluídas' }, note: 'O descarte mostra quais recomendações o campo considera irrelevantes.' },
      ],
      paragraphs: [
        'Cada ação recomenda um passo para um médico. Exemplos de ação:',
      ],
      bullets: [
        'Ampliar o uso de um produto da linha',
        'Introduzir um produto no perfil de prescrição do médico',
        'Conseguir a primeira prescrição de um lançamento',
        'Diagnosticar ou validar o potencial do médico para uma linha',
      ],
      tables: [
        {
          head: ['Ações recomendadas', 'Quantidade', '% do total'],
          rows: [
            ['Geradas', '3.121', '100%'],
            ['Concluídas', '2.008', '64,3%'],
            ['Descartadas pelos representantes', '653', '20,9%'],
            ['Ignoradas', '460', '14,7%'],
          ],
          note: 'Cerca de dois terços das ações foram concluídas. O descarte (20,9%) é um dado útil. Ele mostra ao time da Dinn quais recomendações o campo considera irrelevantes.',
        },
      ],
      note: 'Satisfação: os representantes fizeram 529 avaliações após executar as ações. 86,8% deram a nota máxima.',
    },
    {
      title: 'Validação de médicos: quem manter, quem remover',
      viz: [
        { kind: 'bars', as: 'columns', title: 'Carteira validada por grupo', sub: '% de médicos validados', unit: '%', digits: 1, items: [{ label: 'Grupo A', value: 18.2, hot: true }, { label: 'Grupo B', value: 17.4 }, { label: 'Grupo C', value: 5.6 }, { label: 'Grupo D', value: 1.1 }] },
        { kind: 'bars', as: 'kpis', title: 'Alto potencial fora da carteira', sub: '% validado, por classe de potencial', unit: '%', digits: 1, items: [{ label: 'Classe 1 (maior prioridade)', value: 32.1, hot: true }, { label: 'Classe 2', value: 21.8 }, { label: 'Classe 3', value: 15.2 }, { label: 'Classe 4', value: 8.0 }] },
        { kind: 'bars', as: 'lollipop', title: 'Por que remover um médico', sub: '% dos sinais de remoção', unit: '%', digits: 1, items: [{ label: 'Localização ou acesso ao médico', value: 40.3, hot: true }, { label: 'Visita recusada ou compliance', value: 12.3 }, { label: 'Erro de cadastro', value: 10.6 }] },
      ],
      paragraphs: [
        'Os representantes validam os médicos por prioridade. Não validam milhares de médicos de uma vez. Até 10 de novembro, eles validaram 1.953 médicos da carteira: 1.796 para manter e 157 para remover. O número é parcial.',
      ],
      tables: [
        {
          head: ['Grupo da carteira', '% validado'],
          rows: [
            ['Grupo A', '18,2%'],
            ['Grupo B', '17,4%'],
            ['Grupo C', '5,6%'],
            ['Grupo D', '1,1%'],
          ],
        },
        {
          title: 'Médicos de alto potencial fora da carteira',
          head: ['Classe de potencial', '% validado'],
          rows: [
            ['1 (maior prioridade)', '32,1%'],
            ['2', '21,8%'],
            ['3', '15,2%'],
            ['4', '8,0%'],
          ],
          note: 'No total, os representantes validaram 10,55% dos médicos de alto potencial fora da carteira.',
        },
      ],
      bullets: [
        'Motivos para manter: 83,6% dos registros apontam prescritores ainda não auditados. 14,1% apontam potencial de desenvolvimento. 9,0% apontam líderes de opinião. Um médico pode ter mais de um motivo',
        'Motivos para remover: 40,3% dos sinais envolvem localização ou acesso ao médico. 12,3% envolvem visita recusada ou compliance. 10,6% envolvem erro de cadastro, como aposentadoria ou mudança de local',
      ],
      note: 'A validação também limpa a carteira. O campo aponta o que o cadastro não sabe.',
    },
    {
      title: 'Agenda de visitas: do planejamento à execução',
      viz: [
        { kind: 'compare', title: 'Planejadas e realizadas', from: { value: '4.580', label: 'agendamentos no planejador de visitas' }, to: { value: '3.005', label: 'visitas realizadas, cerca de 66%' } },
      ],
      paragraphs: [
        'Com 25 representantes, o planejador de visitas registrou 4.580 agendamentos e 3.005 visitas realizadas. A conclusão é de cerca de 66%.',
        'O planejador dá ao representante uma agenda organizada. Dá ao gestor a visão do planejado e do executado.',
      ],
      quotes: [
        {
          text: '+ 1 visita ao dia. O Dinn sugeriu as rotas de forma impecável, nota 10 de 10. Me orientou super bem dentro de uma região.',
          role: 'Promotor médico, equipe de campo',
          approved: true,
        },
        {
          text: 'Menor tempo de pré-visita. O Dinn diminuiu em 10 minutos o tempo de preparação para as visitas, permitindo-me realizar uma visita a mais diariamente.',
          role: 'Promotora médica, equipe de campo',
          approved: true,
        },
      ],
    },
  ],
  results: [
    {
      title: 'O que o campo fez com a ferramenta',
      bullets: [
        '22 representantes ativos geraram sinais e feedbacks nas ações recomendadas e na validação de médicos',
        '2.008 ações concluídas em um ciclo, com 64,3% de conclusão',
        '86,8% de avaliações 5 estrelas em 529 feedbacks',
        '3.005 visitas realizadas pelo planejador, com 25 representantes ativos',
      ],
      note: 'A carteira é grande e a validação de médicos continua em andamento.',
    },
  ],
  next: {
    title: 'Outros recursos da Dinn',
    paragraphs: [
      'A Dinn tem também recursos de estoque e varejo. Os resultados desta página vêm só do uso por representantes.',
    ],
  },
};

export const en: Customer = {
  slug: 'carteira-de-medicos',
  name: 'Brazilian pharma company with Latin American reach',
  sector: 'Pharmaceutical industry',
  hq: 'Brazil',
  useCase: 'Jean recommended actions for reps and validation of doctors on the list',
  about: 'A Brazilian pharmaceutical company that operates across Latin America.',
  title: 'Jean tells reps which doctor to visit',
  summary: 'Jean generated 3,121 recommended actions for the reps. They completed 64.3% of them.',
  metaDescription: 'Jean generated 3,121 recommended actions for reps. They completed 64.3% and validated 1,953 doctors on the list of a pharma company.',
  metrics: [
    { value: '3,121', label: 'actions recommended by Jean, with 64.3% completed (2,008)' },
    { value: '86.8%', label: 'of 529 action ratings gave the top score, 5 stars' },
    { value: '22', label: 'active reps receiving Jean actions' },
    { value: '653', label: 'actions dismissed (20.9%). Dismissals show Jean what the field considers irrelevant' },
  ],
  quote: {
    text: 'Jean suggestions are very accurate. They help a lot to focus on the right opportunities.',
    role: 'Sales rep',
    approved: false,
  },
  intro: [
    'Every day, a sales force answers three questions: who to visit, what to say, and who to remove from the list. With thousands of doctors per list, a spreadsheet cannot keep up.',
    'Until November 10, 2025, the company used two Dinn features. Jean sends reps actions that the AI recommends. Doctor validation organizes the decision on each doctor: keep or remove from the list.',
    '22 reps took part in the recommended actions and doctor validation. Another 25 used visit scheduling.',
  ],
  problem: {
    title: 'A doctor list too large to check by hand',
    viz: [
      { kind: 'art', art: 'govern', g: 'web/pessego', caption: 'Thousands of doctors, one list sorted by priority' },
    ],
    paragraphs: [
      'The doctor list of the company has thousands of doctors. Some of them have not yet had an initial audit. Outside the list, there are high-potential doctors in the top-priority classes.',
      'The rep must decide who to visit, which product to cover, and when to take a doctor off the route. Management must know if the list reflects the real prescription potential.',
    ],
  },
  solution: {
    title: 'Recommended actions and doctor validation',
    paragraphs: [
      'Jean sends reps actions that the AI recommends for each doctor. The rep completes, discards, or ignores the action, and rates it later.',
      'In parallel, doctor validation records, doctor by doctor, the decision to keep or remove and the reason.',
    ],
    bullets: [
      'Period: until November 10, 2025',
      'Features: Jean recommended actions, doctor dashboards, doctor validation, and visit scheduling',
      'Active reps: 22 in recommended actions and validation, 25 in visit scheduling',
      'Measurement: actions generated and completed, ratings, doctors validated, and reasons to keep or remove',
    ],
  },
  stories: [
    {
      title: 'Recommended actions: where to focus',
      viz: [
        { kind: 'donut', title: 'Recommended actions generated', sub: '3,121 actions in one cycle', items: [{ label: 'Completed', value: 2008 }, { label: 'Discarded by reps', value: 653 }, { label: 'Ignored', value: 460 }], center: { value: '64.3%', label: 'completed' }, note: 'Discarded actions show which recommendations the field considers irrelevant.' },
      ],
      paragraphs: [
        'Each action recommends one step for one doctor. Examples of actions:',
      ],
      bullets: [
        'Increase the use of a product from the line',
        'Add a product to the prescription profile of the doctor',
        'Get the first prescription of a new launch',
        'Diagnose or validate the potential of the doctor for a product line',
      ],
      tables: [
        {
          head: ['Recommended actions', 'Quantity', '% of total'],
          rows: [
            ['Generated', '3,121', '100%'],
            ['Completed', '2,008', '64.3%'],
            ['Discarded by reps', '653', '20.9%'],
            ['Ignored', '460', '14.7%'],
          ],
          note: 'About two thirds of the actions were completed. Discarded actions (20.9%) are useful data. They show the Dinn team which recommendations the field considers irrelevant.',
        },
      ],
      note: 'Satisfaction: reps gave 529 ratings after they completed the actions. 86.8% gave the top score.',
    },
    {
      title: 'Doctor validation: who to keep or remove',
      viz: [
        { kind: 'bars', as: 'columns', title: 'List validated by group', sub: '% of doctors validated', unit: '%', digits: 1, items: [{ label: 'Group A', value: 18.2, hot: true }, { label: 'Group B', value: 17.4 }, { label: 'Group C', value: 5.6 }, { label: 'Group D', value: 1.1 }] },
        { kind: 'bars', as: 'kpis', title: 'High potential outside the list', sub: '% validated, by potential class', unit: '%', digits: 1, items: [{ label: 'Class 1 (top priority)', value: 32.1, hot: true }, { label: 'Class 2', value: 21.8 }, { label: 'Class 3', value: 15.2 }, { label: 'Class 4', value: 8.0 }] },
        { kind: 'bars', as: 'lollipop', title: 'Why remove a doctor', sub: '% of removal signals', unit: '%', digits: 1, items: [{ label: 'Location or access to the doctor', value: 40.3, hot: true }, { label: 'Visit refused or compliance', value: 12.3 }, { label: 'Registration error', value: 10.6 }] },
      ],
      paragraphs: [
        'Reps validate doctors by priority. They do not validate thousands of doctors at once. Until November 10, they validated 1,953 doctors on the list: 1,796 to keep and 157 to remove. The number is partial.',
      ],
      tables: [
        {
          head: ['List group', '% validated'],
          rows: [
            ['Group A', '18.2%'],
            ['Group B', '17.4%'],
            ['Group C', '5.6%'],
            ['Group D', '1.1%'],
          ],
        },
        {
          title: 'High-potential doctors outside the list',
          head: ['Potential class', '% validated'],
          rows: [
            ['1 (top priority)', '32.1%'],
            ['2', '21.8%'],
            ['3', '15.2%'],
            ['4', '8.0%'],
          ],
          note: 'In total, reps validated 10.55% of the high-potential doctors outside the list.',
        },
      ],
      bullets: [
        'Reasons to keep: 83.6% of records point to prescribers not yet audited. 14.1% point to development potential. 9.0% point to opinion leaders. One doctor can have more than one reason',
        'Reasons to remove: 40.3% of signals involve location or access to the doctor. 12.3% involve a refused visit or compliance. 10.6% involve a registration error, such as retirement or a change of location',
      ],
      note: 'Validation also cleans the list. The field shows what the registry does not know.',
    },
    {
      title: 'Visit schedule: from planning to execution',
      viz: [
        { kind: 'compare', title: 'Planned and made', from: { value: '4,580', label: 'bookings in the visit planner' }, to: { value: '3,005', label: 'visits made, about 66%' } },
      ],
      paragraphs: [
        'With 25 reps, the visit planner recorded 4,580 bookings and 3,005 visits made. The completion rate is about 66%.',
        'The planner gives reps an organized schedule. It gives managers a view of what they planned and what they did.',
      ],
      quotes: [
        {
          text: '+1 visit per day. Dinn suggested the routes perfectly, a 10 out of 10. It guided me very well within a region.',
          role: 'Medical promoter, field team',
          approved: true,
        },
        {
          text: 'Shorter pre-visit time. Dinn cut the time I need to prepare for visits by 10 minutes. This lets me make one more visit every day.',
          role: 'Medical promoter, field team',
          approved: true,
        },
      ],
    },
  ],
  results: [
    {
      title: 'What the field did with the tool',
      bullets: [
        '22 active reps generated signals and feedback in recommended actions and doctor validation',
        '2,008 actions completed in one cycle, a 64.3% completion rate',
        '86.8% of ratings gave 5 stars, from 529 feedback entries',
        '3,005 visits made through the planner, with 25 active reps',
      ],
      note: 'The list is large and doctor validation is still in progress.',
    },
  ],
  next: {
    title: 'Other Dinn features',
    paragraphs: [
      'Dinn also has stock and retail features. The results on this page come only from use by reps.',
    ],
  },
};

export const es: Customer = {
  slug: 'carteira-de-medicos',
  name: 'Farmacéutica brasileña con presencia en América Latina',
  sector: 'Industria farmacéutica',
  hq: 'Brasil',
  useCase: 'Acciones recomendadas por Jean para representantes y validación de médicos de la cartera',
  about: 'Una farmacéutica brasileña que opera en toda América Latina.',
  title: 'Jean dice al representante qué médico visitar',
  summary: 'Jean generó 3.121 acciones recomendadas para los representantes. Ellos completaron el 64,3% de esas acciones.',
  metaDescription: 'Jean generó 3.121 acciones recomendadas para representantes. Completaron el 64,3% y validaron 1.953 médicos de la cartera de un laboratorio.',
  metrics: [
    { value: '3.121', label: 'acciones recomendadas por Jean, con 64,3% completadas (2.008)' },
    { value: '86,8%', label: 'de las 529 evaluaciones de las acciones dieron la nota máxima, 5 estrellas' },
    { value: '22', label: 'representantes activos que reciben acciones de Jean' },
    { value: '653', label: 'acciones descartadas (20,9%). El descarte muestra a Jean lo que el campo considera irrelevante' },
  ],
  quote: {
    text: 'Las sugerencias de Jean son muy certeras. Ayudan mucho a enfocarse en las oportunidades correctas.',
    role: 'Representante de ventas',
    approved: false,
  },
  intro: [
    'Cada día, la fuerza de ventas responde a tres preguntas: a quién visitar, qué decir y a quién quitar de la cartera. Con miles de médicos por cartera, la planilla no alcanza.',
    'Hasta el 10 de noviembre de 2025, el laboratorio usó dos recursos de Dinn. Jean envía al representante acciones recomendadas por la IA. La validación de médicos organiza la decisión sobre cada médico: mantener o quitar de la cartera.',
    'Participaron 22 representantes en las acciones recomendadas y en la validación de médicos. Otros 25 usaron el agendamiento de visitas.',
  ],
  problem: {
    title: 'Una cartera demasiado grande para controlar a mano',
    viz: [
      { kind: 'art', art: 'govern', g: 'web/pessego', caption: 'Miles de médicos, una cartera ordenada por prioridad' },
    ],
    paragraphs: [
      'La cartera del laboratorio reúne miles de médicos. Una parte aún no pasó por una auditoría inicial. Fuera de la cartera, hay médicos de alto potencial en las clases de mayor prioridad.',
      'El representante debe decidir a quién visitar, qué producto abordar y cuándo sacar a un médico de la ruta. La gestión debe saber si la cartera refleja el potencial real de prescripción.',
    ],
  },
  solution: {
    title: 'Acciones recomendadas y validación de médicos',
    paragraphs: [
      'Jean envía al representante acciones recomendadas por la IA sobre qué hacer con cada médico. El representante ejecuta, descarta o ignora la acción, y la evalúa después.',
      'En paralelo, la validación de médicos registra, médico por médico, la decisión de mantener o quitar y el motivo.',
    ],
    bullets: [
      'Período: hasta el 10 de noviembre de 2025',
      'Recursos: acciones recomendadas por Jean, paneles de médicos, validación de médicos y agendamiento de visitas',
      'Representantes activos: 22 en las acciones recomendadas y en la validación, 25 en el agendamiento de visitas',
      'Medición: acciones generadas y completadas, evaluaciones, médicos validados y motivos para mantener o quitar',
    ],
  },
  stories: [
    {
      title: 'Acciones recomendadas: dónde enfocar',
      viz: [
        { kind: 'donut', title: 'Acciones recomendadas generadas', sub: '3.121 acciones en un ciclo', items: [{ label: 'Completadas', value: 2008 }, { label: 'Descartadas por los representantes', value: 653 }, { label: 'Ignoradas', value: 460 }], center: { value: '64,3%', label: 'completadas' }, note: 'El descarte muestra qué recomendaciones el campo considera irrelevantes.' },
      ],
      paragraphs: [
        'Cada acción recomienda un paso para un médico. Ejemplos de acción:',
      ],
      bullets: [
        'Ampliar el uso de un producto de la línea',
        'Introducir un producto en el perfil de prescripción del médico',
        'Conseguir la primera prescripción de un lanzamiento',
        'Diagnosticar o validar el potencial del médico para una línea',
      ],
      tables: [
        {
          head: ['Acciones recomendadas', 'Cantidad', '% del total'],
          rows: [
            ['Generadas', '3.121', '100%'],
            ['Completadas', '2.008', '64,3%'],
            ['Descartadas por los representantes', '653', '20,9%'],
            ['Ignoradas', '460', '14,7%'],
          ],
          note: 'Cerca de dos tercios de las acciones se completaron. El descarte (20,9%) es un dato útil. Muestra al equipo de Dinn qué recomendaciones el campo considera irrelevantes.',
        },
      ],
      note: 'Satisfacción: los representantes hicieron 529 evaluaciones tras ejecutar las acciones. El 86,8% dio la nota máxima.',
    },
    {
      title: 'Validación de médicos: a quién mantener o quitar',
      viz: [
        { kind: 'bars', as: 'columns', title: 'Cartera validada por grupo', sub: '% de médicos validados', unit: '%', digits: 1, items: [{ label: 'Grupo A', value: 18.2, hot: true }, { label: 'Grupo B', value: 17.4 }, { label: 'Grupo C', value: 5.6 }, { label: 'Grupo D', value: 1.1 }] },
        { kind: 'bars', as: 'kpis', title: 'Alto potencial fuera de la cartera', sub: '% validado, por clase de potencial', unit: '%', digits: 1, items: [{ label: 'Clase 1 (mayor prioridad)', value: 32.1, hot: true }, { label: 'Clase 2', value: 21.8 }, { label: 'Clase 3', value: 15.2 }, { label: 'Clase 4', value: 8.0 }] },
        { kind: 'bars', as: 'lollipop', title: 'Por qué quitar a un médico', sub: '% de las señales de baja', unit: '%', digits: 1, items: [{ label: 'Ubicación o acceso al médico', value: 40.3, hot: true }, { label: 'Visita rechazada o compliance', value: 12.3 }, { label: 'Error de registro', value: 10.6 }] },
      ],
      paragraphs: [
        'Los representantes validan a los médicos por prioridad. No validan miles de médicos de una vez. Hasta el 10 de noviembre, validaron 1.953 médicos de la cartera: 1.796 para mantener y 157 para quitar. El número es parcial.',
      ],
      tables: [
        {
          head: ['Grupo de la cartera', '% validado'],
          rows: [
            ['Grupo A', '18,2%'],
            ['Grupo B', '17,4%'],
            ['Grupo C', '5,6%'],
            ['Grupo D', '1,1%'],
          ],
        },
        {
          title: 'Médicos de alto potencial fuera de la cartera',
          head: ['Clase de potencial', '% validado'],
          rows: [
            ['1 (mayor prioridad)', '32,1%'],
            ['2', '21,8%'],
            ['3', '15,2%'],
            ['4', '8,0%'],
          ],
          note: 'En total, los representantes validaron el 10,55% de los médicos de alto potencial fuera de la cartera.',
        },
      ],
      bullets: [
        'Motivos para mantener: el 83,6% de los registros apunta a prescriptores aún no auditados. El 14,1% apunta a potencial de desarrollo. El 9,0% apunta a líderes de opinión. Un médico puede tener más de un motivo',
        'Motivos para quitar: el 40,3% de las señales implica ubicación o acceso al médico. El 12,3% implica visita rechazada o compliance. El 10,6% implica error de registro, como jubilación o cambio de ubicación',
      ],
      note: 'La validación también limpia la cartera. El campo muestra lo que el registro no sabe.',
    },
    {
      title: 'Agenda de visitas: del plan a la ejecución',
      viz: [
        { kind: 'compare', title: 'Planificadas y realizadas', from: { value: '4.580', label: 'agendamientos en el planificador de visitas' }, to: { value: '3.005', label: 'visitas realizadas, cerca del 66%' } },
      ],
      paragraphs: [
        'Con 25 representantes, el planificador de visitas registró 4.580 agendamientos y 3.005 visitas realizadas. La conclusión es de cerca del 66%.',
        'El planificador da al representante una agenda organizada. Da al gestor la visión de lo planificado y de lo ejecutado.',
      ],
      quotes: [
        {
          text: '+1 visita al día. Dinn sugirió las rutas de forma impecable, nota 10 de 10. Me orientó muy bien dentro de una región.',
          role: 'Promotor médico, equipo de campo',
          approved: true,
        },
        {
          text: 'Menor tiempo de previsita. Dinn redujo en 10 minutos el tiempo de preparación para las visitas. Esto me permite hacer una visita más cada día.',
          role: 'Promotora médica, equipo de campo',
          approved: true,
        },
      ],
    },
  ],
  results: [
    {
      title: 'Qué hizo el campo con la herramienta',
      bullets: [
        '22 representantes activos generaron señales y feedback en las acciones recomendadas y en la validación de médicos',
        '2.008 acciones completadas en un ciclo, con 64,3% de conclusión',
        '86,8% de evaluaciones de 5 estrellas en 529 feedbacks',
        '3.005 visitas realizadas con el planificador, con 25 representantes activos',
      ],
      note: 'La cartera es grande y la validación de médicos sigue en curso.',
    },
  ],
  next: {
    title: 'Otros recursos de Dinn',
    paragraphs: [
      'Dinn también tiene recursos de stock y retail. Los resultados de esta página vienen solo del uso por representantes.',
    ],
  },
};
