import type { Customer } from './types';

export const pt: Customer = {
  slug: 'marjan',
  name: 'Marjan',
  sector: 'Indústria farmacêutica',
  hq: 'Brasil',
  useCase: 'Análise de Mercado: ruptura, estoque e execução no PDV',
  about: 'A Marjan é um laboratório farmacêutico brasileiro. Seu portfólio de medicamentos e suplementos é vendido em farmácias de todo o país.',
  title: 'Marjan transforma ruptura em ação de campo',
  summary: 'O Dinn mostra à Marjan o estoque e a ruptura loja a loja. O campo sabe o que atacar primeiro.',
  metaDescription: 'Com o Dinn, a Marjan vê estoque e ruptura loja a loja. Cerca de 14% do giro potencial não é capturado por ruptura. O campo ganha um mapa do que atacar primeiro.',
  metrics: [
    { value: '≈ 14%', label: 'do giro potencial dos três mercados analisados não foi capturado por ruptura' },
    { value: '47', label: 'gestores cadastrados no Dinn' },
    { value: '78%', label: 'dos gestores sentiriam impacto no dia a dia se o Dinn saísse amanhã' },
    { value: '43%', label: 'dos gestores economizam 30 minutos ou mais por semana' },
  ],
  quote: {
    text: 'O Dinn virou meu mapa de calor de ruptura. Eu sei exatamente por onde começar o dia e onde colocar o time.',
    role: 'Gestor de campo',
    approved: false,
  },
  intro: [
    'Os números de venda explicam o passado. Eles não explicam por que o produto não vende hoje.',
    'Na Marjan, faltava a visão real do PDV. O time sabia que havia ruptura. Não sabia onde, por quantos dias e por qual causa. Sabia que perdia venda, mas não quanto.',
    'De setembro a novembro de 2025, 47 gestores usaram o Dinn. Ele monitora 79 EANs em mais de 45 mil PDVs e mais de 50 redes. Agora o campo responde com dado se o produto não vende por falta de estoque ou por falta de demanda.',
  ],
  problem: {
    title: 'Ver a ruptura não diz o que fazer',
    viz: [
      { kind: 'art', art: 'supply', g: 'web/azul-claro', caption: 'Do estoque da loja à rota do time' },
    ],
    paragraphs: ['Antes do Dinn, o gestor de campo tinha duas dificuldades que se reforçavam.'],
    bullets: [
      'Falta de granularidade. A visão era macro. Era difícil achar as lojas do próprio território e separar o problema de produto, de rede e de loja.',
      'Pouco poder de argumentação. O gestor precisava provar ao Key Account da rede que a baixa venda vinha da falta de produto. Tinha pouca autonomia sobre o estoque e poucos dados para comparar.',
    ],
    note: 'A pergunta do campo era simples: se eu não sei onde não tenho produto, como priorizo o que fazer primeiro?',
  },
  solution: {
    title: 'Estoque D-1, ruptura por loja, comparação de redes',
    viz: [
      { kind: 'screen', screen: 'home', caption: 'Início do Dinn: ruptura por produto, nível dos PDVs e ranking por rede, com o dado do dia anterior (D-1).' },
    ],
    paragraphs: [
      'Com o Dinn, a Marjan passou a ver o estoque D-1, a ruptura por dia e por loja e a comparação entre redes e lojas vizinhas.',
      'A análise cobre o trimestre de 1º de setembro a 30 de novembro de 2025.',
    ],
    bullets: [
      'Escopo monitorado: 79 EANs, mais de 45 mil PDVs e mais de 50 redes',
      'Mercados montados: 3, com 30 EANs no total',
      'Análise de ruptura: os 10 produtos de maior giro da Marjan em redes de grande porte',
      'Usuários: 47 gestores cadastrados',
    ],
  },
  stories: [
    {
      title: 'Provar que o problema é estoque, não demanda',
      paragraphs: [
        'Um gestor atendia uma farmácia pequena que dizia não ter demanda na região para um produto estratégico. No Dinn, ele comparou o giro e o estoque de uma grande rede digitalizada, vizinha da loja, com os da farmácia independente.',
        'No mesmo brick, a grande rede vendia o produto todos os dias. A loja pequena quase não comprava e vivia em ruptura. O argumento ficou claro: faltavam estoque e VB (Venda Base), não demanda. O gestor negociou um aumento de VB e o ajuste de estoque. O produto voltou à gôndola.',
        'A mesma lógica vale quando a loja não é digitalizada. O gestor usa o giro e o estoque de uma rede digitalizada próxima para mostrar que a demanda existe. O time aplica esta regra de leitura:',
      ],
      bullets: [
        'Alto giro e baixo estoque ou ruptura: reposição, aumento de VB e negociação com a rede',
        'Baixo giro e alto estoque: propaganda médica, ativação de demanda e foco em prescrição',
      ],
    },
    {
      title: 'Abrir a negociação com dado na mesa',
      paragraphs: [
        'Um gestor acompanhava uma grande rede com descontos muito altos. Os descontos pressionavam a margem e geravam pedidos de condições adicionais à indústria.',
        'No painel de Análise de Preço do Dinn, ele viu o preço médio e o desconto médio da rede. Comparou com as outras redes. O desconto estava acima da média das outras redes. Na conversa com a rede, ele usou preço, giro e impacto em ruptura e margem.',
      ],
    },
    {
      title: 'Corrigir o VB onde estava apertado demais',
      paragraphs: [
        'Um gestor tinha um produto de giro alto, mas com VB muito baixo em várias lojas. Isso gerava ruptura recorrente e perda constante de venda.',
        'No Dinn, ele analisou o giro diário, o VB sugerido e os dias de ruptura por loja. Achou os CNPJs em que o VB estava abaixo do ritmo de saída. Exportou os dados por CNPJ para o Excel e mostrou à rede, loja a loja, quanto deixou de vender. Com essa evidência, defendeu o aumento do VB nas lojas-chave.',
      ],
    },
    {
      title: 'Mapa de ruptura que guia a rota do time',
      paragraphs: [
        'Um gestor tinha muitos PDVs e pouco tempo. Precisava saber onde colocar os representantes primeiro. Ele usou a lista de PDVs sem estoque nos últimos 30 dias para montar um mapa de ruptura crítica.',
        'A lista vai em planilha para os representantes. Eles confirmam no sistema de força de vendas se o CNPJ é do seu setor e saem com a agenda priorizada. A rota do time agora segue o dado e começa pelas lojas mais críticas.',
        'Os gestores relatam outros ganhos:',
      ],
      bullets: [
        'Ver onde estão as maiores oportunidades, incluindo PDVs que vendem só concorrentes',
        'Ver as lojas que concentram a maior parte do volume (efeito 80/20) e focar onde o impacto é maior',
        'Trocar relatórios montados à mão por listas de PDVs prioritários, pontos de atenção e oportunidades',
        'Exportar em XLS e filtrar por CNPJ, cidade ou região',
      ],
    },
  ],
  results: [
    {
      title: 'Quanto giro a ruptura faz perder',
      viz: [
        { kind: 'donut', title: 'Perda sobre o giro do mercado', sub: '% do giro potencial dos 3 mercados, set a nov/2025', items: [{ label: 'Restante do giro dos 3 mercados', value: 86 }, { label: 'Perda estimada por ruptura', value: 14 }], center: { value: '≈ 14%', label: 'do giro perdido' }, note: 'Base: giro potencial dos três mercados, Marjan e concorrência.' },
        { kind: 'bars', as: 'rings', title: 'Perda por mercado', sub: '% do giro, estimativa técnica', unit: '%', items: [{ label: 'Mercado A', value: 27, hot: true, display: '≈ 27%' }, { label: 'Mercado B', value: 20, display: '≈ 20%' }, { label: 'Mercado C', value: 7, display: '≈ 7%' }] },
      ],
      paragraphs: ['Nos três principais mercados da Marjan, em redes de grande porte, de setembro a novembro de 2025:'],
      tables: [
        {
          head: ['Indicador', 'Resultado'],
          rows: [
            ['Perda sobre o giro dos 3 mercados', '≈ 14%'],
            ['Perda por mercado', 'de ≈ 7% a ≈ 27%'],
          ],
        },
      ],
      bullets: [
        'São cerca de 32 unidades perdidas para cada 100 vendidas',
        'A perda varia por mercado: ≈ 27% do giro no mercado A, ≈ 20% no B e ≈ 7% no C',
      ],
      note: 'Como ler os valores: eles são um potencial técnico estimado. O cálculo usa o giro diário nas lojas com estoque e a taxa de ruptura observada. Não são perda real de faturamento. A validação final usa os dados oficiais de venda das redes.',
    },
    {
      title: 'Os três produtos mais críticos',
      viz: [
        { kind: 'bars', as: 'columns', title: 'Ruptura média por produto', sub: '% dos dias sem estoque', unit: '%', items: [{ label: 'Produto A', value: 39.2, hot: true }, { label: 'Produto B', value: 23.4 }, { label: 'Produto C', value: 12.5 }] },
      ],
      paragraphs: ['Entre os 10 produtos de maior giro, três concentram o maior potencial por indisponibilidade.'],
      tables: [
        {
          head: ['Produto', 'Ruptura média'],
          rows: [
            ['Produto A', '39,2%'],
            ['Produto B', '23,4%'],
            ['Produto C', '12,5%'],
          ],
        },
      ],
      bullets: [
        'O produto A é o mais crítico: em quase 4 de cada 10 dias ele está indisponível',
        'Nos 10 produtos, a ruptura média ponderada pelo giro foi de ≈ 21%',
      ],
    },
    {
      title: 'Onde focar: execução por classe de praça',
      viz: [
        { kind: 'bars', as: 'kpis', title: 'Ruptura atual por classe de praça', sub: '% dos dias sem estoque', unit: '%', items: [{ label: 'Praça A', value: 41, hot: true, display: 'acima de 40%' }, { label: 'Praça B', value: 26, display: '23% a 29%' }, { label: 'Praça C', value: 19, display: 'até 19%' }] },
      ],
      paragraphs: [
        'Execução. A rede de melhor execução gira bem mais que a média das redes. A diferença mostra o espaço para ganhar com sortimento, abastecimento e ativação comercial.',
        'Classe de praça. A praça C concentra ≈ 34% do volume dos 10 produtos e tem ruptura abaixo da média (≈ 17%). Ali a prioridade é sortimento, preço e ativação. As praças A e B combinam volume relevante com ruptura acima da média. Nelas, ataque a disponibilidade primeiro.',
        'A tabela mostra a leitura por classe de praça:',
      ],
      tables: [
        {
          head: ['Classe de praça', 'Ruptura atual', 'Prioridade'],
          rows: [
            ['Praça A', 'acima de 40%', 'Disponibilidade primeiro'],
            ['Praça B', '23% a 29%', 'Disponibilidade primeiro'],
            ['Praça C', 'até 19%', 'Sortimento, preço e ativação'],
          ],
        },
      ],
      bullets: [
        'Onde a disponibilidade é boa e o giro é fraco, a causa tende a ser preço, promoção, mix ou gôndola. A ação é comercial',
        'Onde a disponibilidade é boa, o giro é forte e a participação cresce, estão os casos para replicar: praças de outras regiões',
      ],
    },
    {
      title: 'Quanto giro vale recuperar',
      viz: [
        { kind: 'bars', as: 'lollipop', title: 'Giro recuperado por meta', sub: 'pontos percentuais do giro do mercado', items: [{ label: 'Meta realista: de 14% para 10%', value: 4, display: '+4 p.p.' }, { label: 'Meta ambiciosa: de 14% para 7%', value: 7, display: '+7 p.p.' }, { label: 'Excelência: de 14% para 5%', value: 9, display: '+9 p.p.', hot: true }] },
      ],
      paragraphs: ['O Dinn simulou três metas. A base é a perda de 14% sobre o giro do mercado.'],
      tables: [
        {
          head: ['Cenário', 'Giro recuperado'],
          rows: [
            ['A perda cai de 14% para 10% (meta realista)', '+4 p.p. do giro do mercado'],
            ['A perda cai de 14% para 7% (meta ambiciosa)', '+7 p.p. do giro do mercado'],
            ['A perda cai de 14% para 5% (excelência)', '+9 p.p. do giro do mercado'],
          ],
        },
      ],
    },
    {
      title: 'Como os gestores avaliam o Dinn',
      viz: [
        { kind: 'donut', title: 'Frequência de uso', sub: 'Gestores de campo', items: [{ label: 'Uma vez por semana ou menos', value: 61 }, { label: 'Algumas vezes por semana', value: 22 }, { label: 'Todo dia', value: 17 }], center: { value: '78%', label: 'sentiriam o impacto' } },
      ],
      paragraphs: ['O uso ainda cresce na rotina do time. O valor já aparece, sobretudo ao ver ruptura e estoque D-1 e ao priorizar PDVs críticos.'],
      tables: [
        {
          head: ['Pergunta', 'Resultado'],
          rows: [
            ['Frequência de uso', '61% usam uma vez por semana ou menos, 22% algumas vezes por semana e 17% todo dia'],
            ['Se o Dinn saísse amanhã', '78% sentiriam impacto na rotina'],
            ['Se as evoluções pedidas existissem', '57% dizem que o valor aumentaria muito e 43%, um pouco'],
          ],
        },
      ],
      bullets: [
        'Dado que vira ação (69%): 39% querem que o Dinn interprete os dados e diga o que fazer. 30% pedem alertas direto ao campo',
        'Mais cobertura e granularidade (31%): mais redes e farmácias, mais produtos e mercados, filtros por cidade e bairro',
      ],
    },
  ],
  next: {
    title: 'O que vem a seguir',
    paragraphs: ['O pedido do campo virou o roadmap de 2026.'],
    tables: [
      {
        head: ['O que o campo pediu', 'O que está no plano'],
        rows: [
          ['Filtros micro (distrito, setor, brick, cidade)', 'Granularidade avançada com novos filtros de Distrito, Setor e Brick'],
          ['Levar a ação pronta até a farmácia', 'App de Campo, com sugestões em tempo real ao representante'],
          ['Um assistente que diga onde agir primeiro', 'IA com Next Best Action, que responde "onde devo agir primeiro?" e sugere ações'],
          ['Que o insight vire execução consistente', 'Governança com grupo patrocinador, KPIs claros e responsáveis definidos'],
        ],
      },
    ],
    note: 'Na Marjan, os próximos passos são tornar o uso semanal um hábito e criar ciclos mensais de plano de ação com acompanhamento de resultados.',
  },
};

export const en: Customer = {
  slug: 'marjan',
  name: 'Marjan',
  sector: 'Pharmaceutical industry',
  hq: 'Brazil',
  useCase: 'Market Analysis: stock-out, stock and in-store execution',
  about: 'Marjan is a Brazilian pharmaceutical laboratory. It sells its medicines and supplements in pharmacies across the country.',
  title: 'Marjan turns stock-outs into field action',
  summary: 'Dinn shows Marjan stock and stock-outs store by store. The field knows what to fix first.',
  metaDescription: 'With Dinn, Marjan sees stock and stock-outs store by store. About 14% of potential sell-through is lost to stock-outs. The field gets a map of what to fix first.',
  metrics: [
    { value: '≈ 14%', label: 'of potential sell-through in the three analyzed markets was not captured because of stock-outs' },
    { value: '47', label: 'managers registered in Dinn' },
    { value: '78%', label: 'of managers would feel the impact in their daily work if Dinn left tomorrow' },
    { value: '43%', label: 'of managers save 30 minutes or more each week' },
  ],
  quote: {
    text: 'Dinn became my stock-out heat map. I know exactly where to start the day and where to send the team.',
    role: 'Field manager',
    approved: false,
  },
  intro: [
    'Sales numbers explain the past. They do not explain why a product does not sell today.',
    'At Marjan, the real view of the store was missing. The team knew stock-outs existed. It did not know where, for how many days, or why. It knew it lost sales, but not how much.',
    'From September to November 2025, 47 managers used Dinn. It monitors 79 EANs in more than 45,000 stores and more than 50 chains. Now the field uses data to see if a product does not sell because of no stock or no demand.',
  ],
  problem: {
    title: 'Seeing stock-outs does not show what to do',
    viz: [
      { kind: 'art', art: 'supply', g: 'web/azul-claro', caption: 'From store stock to the team route' },
    ],
    paragraphs: ['Before Dinn, the field manager had two linked difficulties.'],
    bullets: [
      'No granularity. The view was broad. It was hard to find the stores in the own territory and to separate product, chain and store problems.',
      'Weak arguments. The manager had to prove to the chain Key Account that low sales came from missing product. The manager had little control over stock and little data to compare.',
    ],
    note: 'The field question was simple: if I do not know where I have no product, how do I choose what to do first?',
  },
  solution: {
    title: 'D-1 stock, stock-out by store, chain comparison',
    viz: [
      { kind: 'screen', screen: 'home', caption: 'Dinn home screen: stock-out by product, store level and ranking by chain, with data from the previous day (D-1).' },
    ],
    paragraphs: [
      'With Dinn, Marjan sees D-1 stock, stock-out by day and by store, and a comparison between chains and nearby stores.',
      'The analysis covers the quarter from September 1 to November 30, 2025.',
    ],
    bullets: [
      'Monitored scope: 79 EANs, more than 45,000 stores and more than 50 chains',
      'Markets built: 3, with 30 EANs in total',
      'Stock-out analysis: the 10 highest sell-through products of Marjan in large chains',
      'Users: 47 registered managers',
    ],
  },
  stories: [
    {
      title: 'Prove the problem is stock, not demand',
      paragraphs: [
        'A manager served a small pharmacy that said there was no demand in the area for a strategic product. In Dinn, he compared the sell-through and stock of a large digital chain near the store with those of the independent pharmacy.',
        'In the same brick, the large chain sold the product every day. The small store barely ordered it and was often out of stock. The argument was clear: stock and VB (Venda Base) were too low, not demand. The manager negotiated a VB increase and a stock adjustment. The product returned to the shelf.',
        'The same logic works when the store is not digital. The manager uses the sell-through and stock of a nearby digital chain to show that demand exists. The team applies this reading rule:',
      ],
      bullets: [
        'High sell-through and low stock or stock-out: restock, raise VB and negotiate with the chain',
        'Low sell-through and high stock: medical detailing, demand activation and focus on prescriptions',
      ],
    },
    {
      title: 'Start the negotiation with data on the table',
      paragraphs: [
        'A manager followed a large chain with very high discounts. The discounts hurt margin and led to requests for extra terms from the industry.',
        'In the Dinn Price Analysis panel, he saw the average price and average discount of the chain. He compared them with other chains. The discount was above the average of the other chains. In the talk with the chain, he used price, sell-through and the impact on stock-outs and margin.',
      ],
    },
    {
      title: 'Fix the VB where it was too tight',
      paragraphs: [
        'A manager had a high sell-through product with a very low VB in many stores. This caused repeated stock-outs and constant lost sales.',
        'In Dinn, he analyzed daily sell-through, suggested VB and stock-out days by store. He found the CNPJs where the VB was below the sales pace. He exported the data by CNPJ to Excel and showed the chain, store by store, how much it did not sell. With this evidence, he argued for a higher VB in key stores.',
      ],
    },
    {
      title: 'A stock-out map that guides the team route',
      paragraphs: [
        'A manager had many stores and little time. He needed to know where to send the sales reps first. He used the list of stores with no stock in the last 30 days to build a map of critical stock-outs.',
        'The list goes to the reps in a spreadsheet. They confirm in the sales force system that the CNPJ belongs to their sector and leave with a prioritized schedule. The team route now follows the data and starts with the most critical stores.',
        'Managers report other gains:',
      ],
      bullets: [
        'See where the biggest opportunities are, including stores that sell only competitors',
        'See the stores that hold most of the volume (80/20 effect) and focus where the impact is greatest',
        'Replace hand-made reports with lists of priority stores, attention points and opportunities',
        'Export to XLS and filter by CNPJ, city or region',
      ],
    },
  ],
  results: [
    {
      title: 'How much sell-through stock-outs cost',
      viz: [
        { kind: 'donut', title: 'Loss over market sell-through', sub: '% of potential sell-through in the 3 markets, Sep to Nov 2025', items: [{ label: 'Rest of the sell-through in the 3 markets', value: 86 }, { label: 'Estimated loss from stock-outs', value: 14 }], center: { value: '≈ 14%', label: 'of sell-through lost' }, note: 'Base: potential sell-through in the three markets, Marjan and competitors.' },
        { kind: 'bars', as: 'rings', title: 'Loss by market', sub: '% of sell-through, technical estimate', unit: '%', items: [{ label: 'Market A', value: 27, hot: true, display: '≈ 27%' }, { label: 'Market B', value: 20, display: '≈ 20%' }, { label: 'Market C', value: 7, display: '≈ 7%' }] },
      ],
      paragraphs: ['In the three main Marjan markets, in large chains, from September to November 2025:'],
      tables: [
        {
          head: ['Indicator', 'Result'],
          rows: [
            ['Loss over sell-through in the 3 markets', '≈ 14%'],
            ['Loss by market', 'from ≈ 7% to ≈ 27%'],
          ],
        },
      ],
      bullets: [
        'That is about 32 units lost for every 100 sold',
        'The loss changes by market: ≈ 27% of sell-through in market A, ≈ 20% in B and ≈ 7% in C',
      ],
      note: 'How to read the values: they are an estimated technical potential. The calculation uses daily sell-through in stores with stock and the observed stock-out rate. They are not real revenue loss. Final validation uses the official chain sales data.',
    },
    {
      title: 'The three most critical products',
      viz: [
        { kind: 'bars', as: 'columns', title: 'Average stock-out by product', sub: '% of days without stock', unit: '%', items: [{ label: 'Product A', value: 39.2, hot: true }, { label: 'Product B', value: 23.4 }, { label: 'Product C', value: 12.5 }] },
      ],
      paragraphs: ['Among the 10 highest sell-through products, three hold the largest potential from missing availability.'],
      tables: [
        {
          head: ['Product', 'Average stock-out'],
          rows: [
            ['Product A', '39.2%'],
            ['Product B', '23.4%'],
            ['Product C', '12.5%'],
          ],
        },
      ],
      bullets: [
        'Product A is the most critical: it is unavailable on almost 4 of every 10 days',
        'Across the 10 products, the average stock-out weighted by sell-through was ≈ 21%',
      ],
    },
    {
      title: 'Where to focus: execution by area class',
      viz: [
        { kind: 'bars', as: 'kpis', title: 'Current stock-out by area class', sub: '% of days without stock', unit: '%', items: [{ label: 'Area A', value: 41, hot: true, display: 'above 40%' }, { label: 'Area B', value: 26, display: '23% to 29%' }, { label: 'Area C', value: 19, display: 'up to 19%' }] },
      ],
      paragraphs: [
        'Execution. The best-executing chain sells much more than the chain average. The gap shows the room to gain with assortment, supply and commercial activation.',
        'Area class. Area C holds ≈ 34% of the volume of the 10 products and has a below-average stock-out rate (≈ 17%). There the priority is assortment, price and activation. Areas A and B combine relevant volume with above-average stock-outs. In these areas, fix availability first.',
        'The table shows the reading for each area class:',
      ],
      tables: [
        {
          head: ['Area class', 'Current stock-out', 'Priority'],
          rows: [
            ['Area A', 'above 40%', 'Availability first'],
            ['Area B', '23% to 29%', 'Availability first'],
            ['Area C', 'up to 19%', 'Assortment, price and activation'],
          ],
        },
      ],
      bullets: [
        'Where availability is good and sell-through is weak, the cause tends to be price, promotion, mix or shelf. The action is commercial',
        'Where availability is good, sell-through is strong and share grows, there are cases to copy: areas in other regions',
      ],
    },
    {
      title: 'How much sell-through is worth recovering',
      viz: [
        { kind: 'bars', as: 'lollipop', title: 'Sell-through recovered by target', sub: 'percentage points of market sell-through', items: [{ label: 'Realistic target: from 14% to 10%', value: 4, display: '+4 p.p.' }, { label: 'Ambitious target: from 14% to 7%', value: 7, display: '+7 p.p.' }, { label: 'Excellence: from 14% to 5%', value: 9, display: '+9 p.p.', hot: true }] },
      ],
      paragraphs: ['Dinn simulated three targets. The base is the 14% loss over market sell-through.'],
      tables: [
        {
          head: ['Scenario', 'Sell-through recovered'],
          rows: [
            ['Loss falls from 14% to 10% (realistic target)', '+4 p.p. of market sell-through'],
            ['Loss falls from 14% to 7% (ambitious target)', '+7 p.p. of market sell-through'],
            ['Loss falls from 14% to 5% (excellence)', '+9 p.p. of market sell-through'],
          ],
        },
      ],
    },
    {
      title: 'How managers rate Dinn',
      viz: [
        { kind: 'donut', title: 'Frequency of use', sub: 'Field managers', items: [{ label: 'Once a week or less', value: 61 }, { label: 'A few times a week', value: 22 }, { label: 'Every day', value: 17 }], center: { value: '78%', label: 'would feel the impact' } },
      ],
      paragraphs: ['Use is still growing in the team routine. The value already shows, mostly when managers see stock-outs and D-1 stock and prioritize critical stores.'],
      tables: [
        {
          head: ['Question', 'Result'],
          rows: [
            ['Frequency of use', '61% use it once a week or less, 22% a few times a week and 17% every day'],
            ['If Dinn left tomorrow', '78% would feel the impact on their routine'],
            ['If the requested improvements existed', '57% say the value would grow a lot and 43%, a little'],
          ],
        },
      ],
      bullets: [
        'Data that becomes action (69%): 39% want Dinn to read the data and say what to do. 30% ask for alerts sent straight to the field',
        'More coverage and granularity (31%): more chains and pharmacies, more products and markets, filters by city and neighborhood',
      ],
    },
  ],
  next: {
    title: 'What comes next',
    paragraphs: ['The field request became the 2026 roadmap.'],
    tables: [
      {
        head: ['What the field asked for', 'What is in the plan'],
        rows: [
          ['Micro filters (district, sector, brick, city)', 'Advanced granularity with new District, Sector and Brick filters'],
          ['Ready-made action in the pharmacy', 'Field App, with real-time suggestions to the sales rep'],
          ['An assistant that says where to act first', 'AI with Next Best Action, which answers "where should I act first?" and suggests actions'],
          ['Insight that becomes consistent execution', 'Governance with a sponsor group, clear KPIs and named owners'],
        ],
      },
    ],
    note: 'At Marjan, the next steps are to make weekly use a habit and to set monthly action plan cycles with result tracking.',
  },
};

export const es: Customer = {
  slug: 'marjan',
  name: 'Marjan',
  sector: 'Industria farmacéutica',
  hq: 'Brasil',
  useCase: 'Análisis de Mercado: quiebre de stock, stock y ejecución en la tienda',
  about: 'Marjan es un laboratorio farmacéutico brasileño. Vende sus medicamentos y suplementos en farmacias de todo el país.',
  title: 'Marjan convierte quiebres de stock en acción de campo',
  summary: 'Dinn muestra a Marjan el stock y los quiebres de stock tienda por tienda. El campo sabe qué atacar primero.',
  metaDescription: 'Con Dinn, Marjan ve el stock y los quiebres de stock tienda por tienda. Cerca de 14% de la rotación potencial se pierde por quiebres. El campo recibe un mapa de qué atacar primero.',
  metrics: [
    { value: '≈ 14%', label: 'de la rotación potencial de los tres mercados analizados no se capturó por quiebres de stock' },
    { value: '47', label: 'gestores registrados en Dinn' },
    { value: '78%', label: 'de los gestores sentirían el impacto en el día a día si Dinn saliera mañana' },
    { value: '43%', label: 'de los gestores ahorran 30 minutos o más por semana' },
  ],
  quote: {
    text: 'Dinn se volvió mi mapa de calor de quiebres de stock. Sé exactamente por dónde empezar el día y dónde poner al equipo.',
    role: 'Gestor de campo',
    approved: false,
  },
  intro: [
    'Los números de venta explican el pasado. No explican por qué el producto no se vende hoy.',
    'En Marjan faltaba la visión real de la tienda. El equipo sabía que había quiebres de stock. No sabía dónde, por cuántos días ni por qué causa. Sabía que perdía ventas, pero no cuánto.',
    'De septiembre a noviembre de 2025, 47 gestores usaron Dinn. Monitorea 79 EAN en más de 45.000 tiendas y más de 50 cadenas. Ahora el campo usa datos para ver si el producto no se vende por falta de stock o por falta de demanda.',
  ],
  problem: {
    title: 'Ver el quiebre de stock no dice qué hacer',
    viz: [
      { kind: 'art', art: 'supply', g: 'web/azul-claro', caption: 'Del stock de la tienda a la ruta del equipo' },
    ],
    paragraphs: ['Antes de Dinn, el gestor de campo tenía dos dificultades ligadas.'],
    bullets: [
      'Sin granularidad. La visión era general. Era difícil encontrar las tiendas del propio territorio y separar el problema de producto, de cadena y de tienda.',
      'Pocos argumentos. El gestor debía probar al Key Account de la cadena que la baja venta venía de la falta de producto. Tenía poco control sobre el stock y pocos datos para comparar.',
    ],
    note: 'La pregunta del campo era simple: si no sé dónde no tengo producto, ¿cómo elijo qué hacer primero?',
  },
  solution: {
    title: 'Stock D-1, quiebre por tienda, comparación de cadenas',
    viz: [
      { kind: 'screen', screen: 'home', caption: 'Inicio de Dinn: quiebre de stock por producto, nivel de las tiendas y ranking por cadena, con el dato del día anterior (D-1).' },
    ],
    paragraphs: [
      'Con Dinn, Marjan ve el stock D-1, el quiebre por día y por tienda, y la comparación entre cadenas y tiendas vecinas.',
      'El análisis cubre el trimestre del 1 de septiembre al 30 de noviembre de 2025.',
    ],
    bullets: [
      'Alcance monitoreado: 79 EAN, más de 45.000 tiendas y más de 50 cadenas',
      'Mercados armados: 3, con 30 EAN en total',
      'Análisis de quiebre: los 10 productos de mayor rotación de Marjan en cadenas de gran porte',
      'Usuarios: 47 gestores registrados',
    ],
  },
  stories: [
    {
      title: 'Probar que el problema es stock, no demanda',
      paragraphs: [
        'Un gestor atendía una farmacia pequeña que decía no tener demanda en la zona para un producto estratégico. En Dinn, comparó la rotación y el stock de una gran cadena digital, vecina de la tienda, con los de la farmacia independiente.',
        'En el mismo brick, la gran cadena vendía el producto todos los días. La tienda pequeña casi no lo compraba y estaba a menudo sin stock. El argumento quedó claro: faltaban stock y VB (Venda Base), no demanda. El gestor negoció un aumento de VB y un ajuste de stock. El producto volvió a la góndola.',
        'La misma lógica vale cuando la tienda no es digital. El gestor usa la rotación y el stock de una cadena digital cercana para mostrar que la demanda existe. El equipo aplica esta regla de lectura:',
      ],
      bullets: [
        'Alta rotación y bajo stock o quiebre: reposición, aumento de VB y negociación con la cadena',
        'Baja rotación y alto stock: visita médica, activación de demanda y foco en recetas',
      ],
    },
    {
      title: 'Abrir la negociación con datos sobre la mesa',
      paragraphs: [
        'Un gestor seguía una gran cadena con descuentos muy altos. Los descuentos presionaban el margen y generaban pedidos de condiciones adicionales a la industria.',
        'En el panel de Análisis de Precios de Dinn, vio el precio medio y el descuento medio de la cadena. Los comparó con otras cadenas. El descuento estaba sobre el promedio de las otras cadenas. En la conversación con la cadena, usó precio, rotación e impacto en quiebres de stock y margen.',
      ],
    },
    {
      title: 'Corregir el VB donde estaba demasiado ajustado',
      paragraphs: [
        'Un gestor tenía un producto de alta rotación, pero con VB muy bajo en varias tiendas. Esto generaba quiebres de stock recurrentes y pérdida constante de ventas.',
        'En Dinn, analizó la rotación diaria, el VB sugerido y los días de quiebre por tienda. Encontró los CNPJ donde el VB estaba bajo el ritmo de salida. Exportó los datos por CNPJ a Excel y mostró a la cadena, tienda por tienda, cuánto dejó de vender. Con esa evidencia, defendió un VB mayor en las tiendas clave.',
      ],
    },
    {
      title: 'Mapa de quiebres que guía la ruta del equipo',
      paragraphs: [
        'Un gestor tenía muchas tiendas y poco tiempo. Necesitaba saber dónde poner primero a los representantes. Usó la lista de tiendas sin stock en los últimos 30 días para armar un mapa de quiebres críticos.',
        'La lista va en una planilla a los representantes. Ellos confirman en el sistema de fuerza de ventas si el CNPJ es de su sector y salen con la agenda priorizada. La ruta del equipo ahora sigue el dato y empieza por las tiendas más críticas.',
        'Los gestores relatan otras ganancias:',
      ],
      bullets: [
        'Ver dónde están las mayores oportunidades, incluidas las tiendas que venden solo a la competencia',
        'Ver las tiendas que concentran la mayor parte del volumen (efecto 80/20) y enfocarse donde el impacto es mayor',
        'Cambiar informes hechos a mano por listas de tiendas prioritarias, puntos de atención y oportunidades',
        'Exportar en XLS y filtrar por CNPJ, ciudad o región',
      ],
    },
  ],
  results: [
    {
      title: 'Cuánta rotación hacen perder los quiebres',
      viz: [
        { kind: 'donut', title: 'Pérdida sobre la rotación del mercado', sub: '% de la rotación potencial de los 3 mercados, sep a nov 2025', items: [{ label: 'Resto de la rotación de los 3 mercados', value: 86 }, { label: 'Pérdida estimada por quiebres', value: 14 }], center: { value: '≈ 14%', label: 'de la rotación perdida' }, note: 'Base: rotación potencial de los tres mercados, Marjan y competencia.' },
        { kind: 'bars', as: 'rings', title: 'Pérdida por mercado', sub: '% de la rotación, estimación técnica', unit: '%', items: [{ label: 'Mercado A', value: 27, hot: true, display: '≈ 27%' }, { label: 'Mercado B', value: 20, display: '≈ 20%' }, { label: 'Mercado C', value: 7, display: '≈ 7%' }] },
      ],
      paragraphs: ['En los tres mercados principales de Marjan, en cadenas de gran porte, de septiembre a noviembre de 2025:'],
      tables: [
        {
          head: ['Indicador', 'Resultado'],
          rows: [
            ['Pérdida sobre la rotación de los 3 mercados', '≈ 14%'],
            ['Pérdida por mercado', 'de ≈ 7% a ≈ 27%'],
          ],
        },
      ],
      bullets: [
        'Son cerca de 32 unidades perdidas por cada 100 vendidas',
        'La pérdida cambia por mercado: ≈ 27% de la rotación en el mercado A, ≈ 20% en el B y ≈ 7% en el C',
      ],
      note: 'Cómo leer los valores: son un potencial técnico estimado. El cálculo usa la rotación diaria en tiendas con stock y la tasa de quiebre observada. No son pérdida real de facturación. La validación final usa los datos oficiales de venta de las cadenas.',
    },
    {
      title: 'Los tres productos más críticos',
      viz: [
        { kind: 'bars', as: 'columns', title: 'Quiebre medio por producto', sub: '% de los días sin stock', unit: '%', items: [{ label: 'Producto A', value: 39.2, hot: true }, { label: 'Producto B', value: 23.4 }, { label: 'Producto C', value: 12.5 }] },
      ],
      paragraphs: ['Entre los 10 productos de mayor rotación, tres concentran el mayor potencial por falta de disponibilidad.'],
      tables: [
        {
          head: ['Producto', 'Quiebre medio'],
          rows: [
            ['Producto A', '39,2%'],
            ['Producto B', '23,4%'],
            ['Producto C', '12,5%'],
          ],
        },
      ],
      bullets: [
        'El producto A es el más crítico: casi 4 de cada 10 días no está disponible',
        'En los 10 productos, el quiebre medio ponderado por rotación fue de ≈ 21%',
      ],
    },
    {
      title: 'Dónde enfocar: ejecución por clase de plaza',
      viz: [
        { kind: 'bars', as: 'kpis', title: 'Quiebre actual por clase de plaza', sub: '% de los días sin stock', unit: '%', items: [{ label: 'Plaza A', value: 41, hot: true, display: 'sobre 40%' }, { label: 'Plaza B', value: 26, display: '23% a 29%' }, { label: 'Plaza C', value: 19, display: 'hasta 19%' }] },
      ],
      paragraphs: [
        'Ejecución. La cadena de mejor ejecución rota mucho más que el promedio de las cadenas. La diferencia muestra el espacio para ganar con surtido, abastecimiento y activación comercial.',
        'Clase de plaza. La plaza C concentra ≈ 34% del volumen de los 10 productos y tiene un quiebre bajo el promedio (≈ 17%). Allí la prioridad es surtido, precio y activación. Las plazas A y B combinan volumen relevante con quiebre sobre el promedio. En ellas, ataque la disponibilidad primero.',
        'La tabla muestra la lectura por clase de plaza:',
      ],
      tables: [
        {
          head: ['Clase de plaza', 'Quiebre actual', 'Prioridad'],
          rows: [
            ['Plaza A', 'sobre 40%', 'Disponibilidad primero'],
            ['Plaza B', '23% a 29%', 'Disponibilidad primero'],
            ['Plaza C', 'hasta 19%', 'Surtido, precio y activación'],
          ],
        },
      ],
      bullets: [
        'Donde la disponibilidad es buena y la rotación es débil, la causa suele ser precio, promoción, mix o góndola. La acción es comercial',
        'Donde la disponibilidad es buena, la rotación es fuerte y la participación crece, están los casos para replicar: plazas de otras regiones',
      ],
    },
    {
      title: 'Cuánta rotación vale recuperar',
      viz: [
        { kind: 'bars', as: 'lollipop', title: 'Rotación recuperada por meta', sub: 'puntos porcentuales de la rotación del mercado', items: [{ label: 'Meta realista: de 14% a 10%', value: 4, display: '+4 p.p.' }, { label: 'Meta ambiciosa: de 14% a 7%', value: 7, display: '+7 p.p.' }, { label: 'Excelencia: de 14% a 5%', value: 9, display: '+9 p.p.', hot: true }] },
      ],
      paragraphs: ['Dinn simuló tres metas. La base es la pérdida de 14% sobre la rotación del mercado.'],
      tables: [
        {
          head: ['Escenario', 'Rotación recuperada'],
          rows: [
            ['La pérdida baja de 14% a 10% (meta realista)', '+4 p.p. de la rotación del mercado'],
            ['La pérdida baja de 14% a 7% (meta ambiciosa)', '+7 p.p. de la rotación del mercado'],
            ['La pérdida baja de 14% a 5% (excelencia)', '+9 p.p. de la rotación del mercado'],
          ],
        },
      ],
    },
    {
      title: 'Cómo evalúan los gestores a Dinn',
      viz: [
        { kind: 'donut', title: 'Frecuencia de uso', sub: 'Gestores de campo', items: [{ label: 'Una vez por semana o menos', value: 61 }, { label: 'Varias veces por semana', value: 22 }, { label: 'Todos los días', value: 17 }], center: { value: '78%', label: 'sentirían el impacto' } },
      ],
      paragraphs: ['El uso aún crece en la rutina del equipo. El valor ya aparece, sobre todo al ver quiebres y stock D-1 y al priorizar tiendas críticas.'],
      tables: [
        {
          head: ['Pregunta', 'Resultado'],
          rows: [
            ['Frecuencia de uso', '61% lo usa una vez por semana o menos, 22% varias veces por semana y 17% todos los días'],
            ['Si Dinn saliera mañana', '78% sentiría el impacto en su rutina'],
            ['Si existieran las mejoras pedidas', '57% dice que el valor aumentaría mucho y 43%, un poco'],
          ],
        },
      ],
      bullets: [
        'Dato que se vuelve acción (69%): 39% quiere que Dinn interprete los datos y diga qué hacer. 30% pide alertas directas al campo',
        'Más cobertura y granularidad (31%): más cadenas y farmacias, más productos y mercados, filtros por ciudad y barrio',
      ],
    },
  ],
  next: {
    title: 'Qué viene a continuación',
    paragraphs: ['El pedido del campo se volvió la hoja de ruta de 2026.'],
    tables: [
      {
        head: ['Lo que pidió el campo', 'Lo que está en el plan'],
        rows: [
          ['Filtros micro (distrito, sector, brick, ciudad)', 'Granularidad avanzada con nuevos filtros de Distrito, Sector y Brick'],
          ['Llevar la acción lista hasta la farmacia', 'App de Campo, con sugerencias en tiempo real al representante'],
          ['Un asistente que diga dónde actuar primero', 'IA con Next Best Action, que responde "¿dónde debo actuar primero?" y sugiere acciones'],
          ['Que el insight se vuelva ejecución consistente', 'Gobernanza con grupo patrocinador, KPIs claros y responsables definidos'],
        ],
      },
    ],
    note: 'En Marjan, los próximos pasos son hacer del uso semanal un hábito y crear ciclos mensuales de plan de acción con seguimiento de resultados.',
  },
};
