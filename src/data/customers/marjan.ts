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
  metaDescription: 'Com o Dinn, a Marjan vê estoque e ruptura loja a loja. A estimativa é de R$ 27,6 milhões de sellout em risco por trimestre. O campo ganha um mapa do que atacar primeiro.',
  metrics: [
    { value: '≈ R$ 27,6 mi', label: 'de sellout em risco por trimestre por causa da ruptura (estimativa técnica)' },
    { value: '≈ 14%', label: 'do giro dos três mercados analisados não foi capturado por ruptura' },
    { value: '78%', label: 'dos gestores sentiriam impacto no dia a dia se o Dinn saísse amanhã' },
    { value: '43%', label: 'dos gestores economizam 30 minutos ou mais por semana' },
  ],
  quote: {
    text: 'O Dinn virou meu mapa de calor de ruptura. Eu sei exatamente por onde começar o dia e onde colocar o time.',
    who: 'Gilberto da Rocha Santos',
    role: 'Marjan',
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
      'Análise de ruptura: os 10 SKUs de maior giro da Marjan em 14 redes da Abrafarma',
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
        'No painel de Análise de Preço do Dinn, ele viu o preço médio e o desconto médio da rede. Comparou com as outras redes. O desconto estava acima da média e, em alguns casos, abaixo do preço de fábrica. Na conversa com a rede, ele usou preço, giro e impacto em ruptura e margem.',
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
      title: 'Quanto a ruptura custa em sellout',
      viz: [
        { kind: 'donut', title: 'Perda sobre o giro do mercado', sub: 'Unidades dos 3 mercados, set a nov/2025', items: [{ label: 'Restante do giro dos 3 mercados', value: 1190923 }, { label: 'Perda estimada por ruptura (≈ 195 mil)', value: 195137 }], center: { value: '≈ 14%', label: 'do giro perdido' }, note: 'O giro total dos três mercados, Marjan e concorrência, é de cerca de 1,39 milhão de unidades.' },
        { kind: 'bars', title: 'Perda por mercado', sub: '% do giro, estimativa técnica', unit: '%', items: [{ label: 'CALDE-MAX', value: 27, hot: true, display: '≈ 27%' }, { label: 'BIOTTA-25-BI', value: 20, display: '≈ 20%' }, { label: 'DOZEMAST', value: 7, display: '≈ 7%' }] },
      ],
      paragraphs: ['Nos três principais mercados da Marjan, em 14 redes da Abrafarma, de setembro a novembro de 2025:'],
      tables: [
        {
          head: ['Indicador', 'Resultado'],
          rows: [
            ['Giro registrado da Marjan nos 3 mercados', '610.006 unidades'],
            ['Giro total dos 3 mercados (Marjan e concorrência)', '1.386.060 unidades'],
            ['Perda estimada da Marjan por ruptura', '≈ 195.137 unidades'],
            ['Perda sobre o giro do mercado', '≈ 14%'],
            ['Sellout não capturado no trimestre', '≈ R$ 27,6 milhões'],
          ],
        },
      ],
      bullets: [
        'São cerca de 32 unidades perdidas para cada 100 vendidas',
        'A perda varia por mercado: ≈ 27% do giro em CALDE-MAX, ≈ 20% em BIOTTA-25-BI e ≈ 7% em DOZEMAST',
        'Projeção anual: se nada mudar, a Marjan pode deixar de capturar ≈ R$ 110 milhões por ano (o trimestre vezes quatro, sem ajuste de sazonalidade)',
      ],
      note: 'Como ler os valores: eles são um potencial técnico estimado. O cálculo usa o giro diário nas lojas com estoque, a taxa de ruptura observada e o preço médio. Não são perda real de faturamento. A validação final usa os dados oficiais de venda das redes.',
    },
    {
      title: 'Os três SKUs críticos',
      viz: [
        { kind: 'bars', title: 'Ruptura média por SKU', sub: '% dos dias sem estoque', unit: '%', items: [{ label: 'Caldê MDK 2.000UI, 30 comprimidos', value: 39.2, hot: true }, { label: 'Caldê MDK 2000UI, 60 comprimidos', value: 23.4 }, { label: 'Dozemast 1.000mcg, 30 comprimidos', value: 12.5 }] },
        { kind: 'bars', title: 'Potencial em sellout', sub: 'R$ milhões no trimestre, estimativa', digits: 1, items: [{ label: 'Caldê MDK 2000UI, 60 comprimidos', value: 3.0, display: '≈ R$ 3,0 mi' }, { label: 'Dozemast 1.000mcg, 30 comprimidos', value: 2.0, display: '≈ R$ 2,0 mi' }, { label: 'Caldê MDK 2.000UI, 30 comprimidos', value: 1.6, display: '≈ R$ 1,6 mi' }] },
      ],
      paragraphs: ['Entre os 10 SKUs de maior giro, três concentram o maior potencial por indisponibilidade.'],
      tables: [
        {
          head: ['SKU', 'Ruptura média', 'Unidades não vendidas', 'Potencial em sellout'],
          rows: [
            ['Caldê MDK 2000UI, 60 comprimidos', '23,4%', '≈ 19.137', '≈ R$ 3,0 milhões'],
            ['Dozemast 1.000mcg, 30 comprimidos', '12,5%', '≈ 23.461', '≈ R$ 2,0 milhões'],
            ['Caldê MDK 2.000UI, 30 comprimidos', '39,2%', '≈ 15.666', '≈ R$ 1,6 milhão'],
            ['Total', '', '≈ 58.264', '≈ R$ 6,6 milhões'],
          ],
        },
      ],
      bullets: [
        'O terceiro SKU é o mais crítico: em quase 4 de cada 10 dias o produto está indisponível',
        'No Dozemast a ruptura é menor, mas o valor unitário alto aumenta o impacto',
        'Nos 10 SKUs, a ruptura média ponderada pelo giro foi de ≈ 21%',
      ],
    },
    {
      title: 'Onde focar: execução por rede e geografia',
      viz: [
        { kind: 'bars', title: 'Ruptura atual por praça', sub: '% dos dias sem estoque', unit: '%', items: [{ label: 'Brasília (DF)', value: 41.0, hot: true }, { label: 'Rio de Janeiro (RJ)', value: 29.4 }, { label: 'Porto Alegre (RS)', value: 27.9 }, { label: 'Curitiba (PR)', value: 23.1 }, { label: 'São Paulo (SP)', value: 18.8 }] },
        { kind: 'bars', title: 'Ganho técnico se a ruptura cair a 5%', sub: 'Mil unidades por trimestre', digits: 1, items: [{ label: 'São Paulo (SP)', value: 11.1, display: '+11,1 mil', hot: true }, { label: 'Rio de Janeiro (RJ)', value: 10.9, display: '+10,9 mil' }, { label: 'Porto Alegre (RS)', value: 4.0, display: '+4,0 mil' }, { label: 'Brasília (DF)', value: 3.8, display: '+3,8 mil' }, { label: 'Curitiba (PR)', value: 3.1, display: '+3,1 mil' }] },
      ],
      paragraphs: [
        'Execução. A rede de melhor execução gira 8,71 unidades por semana por loja. A média das 14 redes é 3,76. A diferença mostra o espaço para ganhar com sortimento, abastecimento e ativação comercial.',
        'Geografia. SP concentra 34,4% do volume dos 10 SKUs e tem ruptura abaixo da média (≈ 16,6%). Ali a prioridade é sortimento, preço e ativação. RS (≈ 36%), RJ (≈ 40%), PR (≈ 32%) e MG (≈ 29%) combinam volume relevante com ruptura acima da média. Nesses estados, ataque a disponibilidade primeiro.',
        'Se a ruptura caísse para 5% em cada cidade, as cinco praças de maior ganho técnico seriam:',
      ],
      tables: [
        {
          head: ['Cidade', 'Ruptura atual', 'Ganho técnico potencial'],
          rows: [
            ['São Paulo (SP)', '≈ 18,8%', '+11,1 mil unidades'],
            ['Rio de Janeiro (RJ)', '≈ 29,4%', '+10,9 mil unidades'],
            ['Porto Alegre (RS)', '≈ 27,9%', '+4,0 mil unidades'],
            ['Brasília (DF)', '≈ 41,0%', '+3,8 mil unidades'],
            ['Curitiba (PR)', '≈ 23,1%', '+3,1 mil unidades'],
          ],
        },
      ],
      bullets: [
        'Onde a disponibilidade é boa e o giro é fraco, a causa tende a ser preço, promoção, mix ou gôndola. A ação é comercial',
        'Onde a disponibilidade é boa, o giro é forte e a participação cresce, estão os casos para replicar: praças do Ceará, da Bahia e do Tocantins',
      ],
    },
    {
      title: 'Quanto vale reduzir a ruptura',
      viz: [
        { kind: 'bars', title: 'Sellout adicional por trimestre', sub: 'R$ milhões, por meta de redução da perda', digits: 1, items: [{ label: 'Meta realista: de 14% para 10%', value: 7.9, display: '≈ R$ 7,9 mi' }, { label: 'Meta ambiciosa: de 14% para 7%', value: 13.8, display: '≈ R$ 13,8 mi' }, { label: 'Excelência: de 14% para 5%', value: 17.8, display: '≈ R$ 17,8 mi', hot: true }] },
      ],
      paragraphs: ['O Dinn simulou três metas. A base é a perda de 14% sobre o giro do mercado e o preço médio de sellout de R$ 141,52.'],
      tables: [
        {
          head: ['Cenário', 'Unidades recuperadas', 'Sellout adicional por trimestre'],
          rows: [
            ['A perda cai de 14% para 10% (meta realista)', '≈ 55.753', '≈ R$ 7,9 milhões'],
            ['A perda cai de 14% para 7% (meta ambiciosa)', '≈ 97.568', '≈ R$ 13,8 milhões'],
            ['A perda cai de 14% para 5% (excelência)', '≈ 125.445', '≈ R$ 17,8 milhões'],
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
  metaDescription: 'With Dinn, Marjan sees stock and stock-outs store by store. It estimates R$ 27.6 million of sell-out at risk each quarter and gives the field a map of what to fix first.',
  metrics: [
    { value: '≈ R$ 27.6 M', label: 'of sell-out at risk each quarter because of stock-outs (technical estimate)' },
    { value: '≈ 14%', label: 'of sell-through in the three analyzed markets was not captured because of stock-outs' },
    { value: '78%', label: 'of managers would feel the impact in their daily work if Dinn left tomorrow' },
    { value: '43%', label: 'of managers save 30 minutes or more each week' },
  ],
  quote: {
    text: 'Dinn became my stock-out heat map. I know exactly where to start the day and where to send the team.',
    who: 'Gilberto da Rocha Santos',
    role: 'Marjan',
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
      'Stock-out analysis: the 10 highest sell-through SKUs of Marjan in 14 Abrafarma chains',
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
        'In the Dinn Price Analysis panel, he saw the average price and average discount of the chain. He compared them with other chains. The discount was above average and, in some cases, below the factory price. In the talk with the chain, he used price, sell-through and the impact on stock-outs and margin.',
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
      title: 'How much stock-outs cost in sell-out',
      viz: [
        { kind: 'donut', title: 'Loss over market sell-through', sub: 'Units in the 3 markets, Sep to Nov 2025', items: [{ label: 'Rest of the sell-through in the 3 markets', value: 1190923 }, { label: 'Estimated loss from stock-outs (≈ 195 thousand)', value: 195137 }], center: { value: '≈ 14%', label: 'of sell-through lost' }, note: 'Total sell-through in the three markets, Marjan and competitors, is about 1.39 million units.' },
        { kind: 'bars', title: 'Loss by market', sub: '% of sell-through, technical estimate', unit: '%', items: [{ label: 'CALDE-MAX', value: 27, hot: true, display: '≈ 27%' }, { label: 'BIOTTA-25-BI', value: 20, display: '≈ 20%' }, { label: 'DOZEMAST', value: 7, display: '≈ 7%' }] },
      ],
      paragraphs: ['In the three main Marjan markets, in 14 Abrafarma chains, from September to November 2025:'],
      tables: [
        {
          head: ['Indicator', 'Result'],
          rows: [
            ['Marjan recorded sell-through in the 3 markets', '610,006 units'],
            ['Total sell-through in the 3 markets (Marjan and competitors)', '1,386,060 units'],
            ['Estimated Marjan loss from stock-outs', '≈ 195,137 units'],
            ['Loss over market sell-through', '≈ 14%'],
            ['Sell-out not captured in the quarter', '≈ R$ 27.6 million'],
          ],
        },
      ],
      bullets: [
        'That is about 32 units lost for every 100 sold',
        'The loss changes by market: ≈ 27% of sell-through in CALDE-MAX, ≈ 20% in BIOTTA-25-BI and ≈ 7% in DOZEMAST',
        'Annual projection: if nothing changes, Marjan may fail to capture ≈ R$ 110 million a year (the quarter times four, with no seasonality adjustment)',
      ],
      note: 'How to read the values: they are an estimated technical potential. The calculation uses daily sell-through in stores with stock, the observed stock-out rate and the average price. They are not real revenue loss. Final validation uses the official chain sales data.',
    },
    {
      title: 'The three critical SKUs',
      viz: [
        { kind: 'bars', title: 'Average stock-out by SKU', sub: '% of days without stock', unit: '%', items: [{ label: 'Caldê MDK 2,000UI, 30 tablets', value: 39.2, hot: true }, { label: 'Caldê MDK 2000UI, 60 tablets', value: 23.4 }, { label: 'Dozemast 1,000mcg, 30 tablets', value: 12.5 }] },
        { kind: 'bars', title: 'Sell-out potential', sub: 'R$ million in the quarter, estimate', digits: 1, items: [{ label: 'Caldê MDK 2000UI, 60 tablets', value: 3.0, display: '≈ R$ 3.0 M' }, { label: 'Dozemast 1,000mcg, 30 tablets', value: 2.0, display: '≈ R$ 2.0 M' }, { label: 'Caldê MDK 2,000UI, 30 tablets', value: 1.6, display: '≈ R$ 1.6 M' }] },
      ],
      paragraphs: ['Among the 10 highest sell-through SKUs, three hold the largest potential from missing availability.'],
      tables: [
        {
          head: ['SKU', 'Average stock-out', 'Units not sold', 'Sell-out potential'],
          rows: [
            ['Caldê MDK 2000UI, 60 tablets', '23.4%', '≈ 19,137', '≈ R$ 3.0 million'],
            ['Dozemast 1,000mcg, 30 tablets', '12.5%', '≈ 23,461', '≈ R$ 2.0 million'],
            ['Caldê MDK 2,000UI, 30 tablets', '39.2%', '≈ 15,666', '≈ R$ 1.6 million'],
            ['Total', '', '≈ 58,264', '≈ R$ 6.6 million'],
          ],
        },
      ],
      bullets: [
        'The third SKU is the most critical: the product is unavailable on almost 4 of every 10 days',
        'Dozemast has a lower stock-out rate, but its high unit price increases the impact',
        'Across the 10 SKUs, the average stock-out weighted by sell-through was ≈ 21%',
      ],
    },
    {
      title: 'Where to focus: execution by chain and region',
      viz: [
        { kind: 'bars', title: 'Current stock-out by city', sub: '% of days without stock', unit: '%', items: [{ label: 'Brasília (DF)', value: 41.0, hot: true }, { label: 'Rio de Janeiro (RJ)', value: 29.4 }, { label: 'Porto Alegre (RS)', value: 27.9 }, { label: 'Curitiba (PR)', value: 23.1 }, { label: 'São Paulo (SP)', value: 18.8 }] },
        { kind: 'bars', title: 'Technical gain if stock-out falls to 5%', sub: 'Thousand units per quarter', digits: 1, items: [{ label: 'São Paulo (SP)', value: 11.1, display: '+11.1 K', hot: true }, { label: 'Rio de Janeiro (RJ)', value: 10.9, display: '+10.9 K' }, { label: 'Porto Alegre (RS)', value: 4.0, display: '+4.0 K' }, { label: 'Brasília (DF)', value: 3.8, display: '+3.8 K' }, { label: 'Curitiba (PR)', value: 3.1, display: '+3.1 K' }] },
      ],
      paragraphs: [
        'Execution. The best-executing chain sells 8.71 units per week per store. The average of the 14 chains is 3.76. The gap shows the room to gain with assortment, supply and commercial activation.',
        'Geography. SP holds 34.4% of the volume of the 10 SKUs and has a below-average stock-out rate (≈ 16.6%). There the priority is assortment, price and activation. RS (≈ 36%), RJ (≈ 40%), PR (≈ 32%) and MG (≈ 29%) combine relevant volume with above-average stock-outs. In these states, fix availability first.',
        'If stock-out fell to 5% in each city, the five cities with the largest technical gain would be:',
      ],
      tables: [
        {
          head: ['City', 'Current stock-out', 'Potential technical gain'],
          rows: [
            ['São Paulo (SP)', '≈ 18.8%', '+11.1 thousand units'],
            ['Rio de Janeiro (RJ)', '≈ 29.4%', '+10.9 thousand units'],
            ['Porto Alegre (RS)', '≈ 27.9%', '+4.0 thousand units'],
            ['Brasília (DF)', '≈ 41.0%', '+3.8 thousand units'],
            ['Curitiba (PR)', '≈ 23.1%', '+3.1 thousand units'],
          ],
        },
      ],
      bullets: [
        'Where availability is good and sell-through is weak, the cause tends to be price, promotion, mix or shelf. The action is commercial',
        'Where availability is good, sell-through is strong and share grows, there are cases to copy: cities in Ceará, Bahia and Tocantins',
      ],
    },
    {
      title: 'What reducing stock-outs is worth',
      viz: [
        { kind: 'bars', title: 'Extra sell-out per quarter', sub: 'R$ million, by loss reduction target', digits: 1, items: [{ label: 'Realistic target: from 14% to 10%', value: 7.9, display: '≈ R$ 7.9 M' }, { label: 'Ambitious target: from 14% to 7%', value: 13.8, display: '≈ R$ 13.8 M' }, { label: 'Excellence: from 14% to 5%', value: 17.8, display: '≈ R$ 17.8 M', hot: true }] },
      ],
      paragraphs: ['Dinn simulated three targets. The base is the 14% loss over market sell-through and the average sell-out price of R$ 141.52.'],
      tables: [
        {
          head: ['Scenario', 'Units recovered', 'Extra sell-out per quarter'],
          rows: [
            ['Loss falls from 14% to 10% (realistic target)', '≈ 55,753', '≈ R$ 7.9 million'],
            ['Loss falls from 14% to 7% (ambitious target)', '≈ 97,568', '≈ R$ 13.8 million'],
            ['Loss falls from 14% to 5% (excellence)', '≈ 125,445', '≈ R$ 17.8 million'],
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
  metaDescription: 'Con Dinn, Marjan ve el stock y los quiebres de stock tienda por tienda. Estima R$ 27,6 millones de sell-out en riesgo por trimestre y da al campo un mapa de qué atacar primero.',
  metrics: [
    { value: '≈ R$ 27,6 M', label: 'de sell-out en riesgo por trimestre por los quiebres de stock (estimación técnica)' },
    { value: '≈ 14%', label: 'de la rotación de los tres mercados analizados no se capturó por quiebres de stock' },
    { value: '78%', label: 'de los gestores sentirían el impacto en el día a día si Dinn saliera mañana' },
    { value: '43%', label: 'de los gestores ahorran 30 minutos o más por semana' },
  ],
  quote: {
    text: 'Dinn se volvió mi mapa de calor de quiebres de stock. Sé exactamente por dónde empezar el día y dónde poner al equipo.',
    who: 'Gilberto da Rocha Santos',
    role: 'Marjan',
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
      'Análisis de quiebre: los 10 SKU de mayor rotación de Marjan en 14 cadenas de Abrafarma',
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
        'En el panel de Análisis de Precios de Dinn, vio el precio medio y el descuento medio de la cadena. Los comparó con otras cadenas. El descuento estaba sobre el promedio y, en algunos casos, bajo el precio de fábrica. En la conversación con la cadena, usó precio, rotación e impacto en quiebres de stock y margen.',
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
      title: 'Cuánto cuestan los quiebres en sell-out',
      viz: [
        { kind: 'donut', title: 'Pérdida sobre la rotación del mercado', sub: 'Unidades de los 3 mercados, sep a nov 2025', items: [{ label: 'Resto de la rotación de los 3 mercados', value: 1190923 }, { label: 'Pérdida estimada por quiebres (≈ 195 mil)', value: 195137 }], center: { value: '≈ 14%', label: 'de la rotación perdida' }, note: 'La rotación total de los tres mercados, Marjan y competencia, es de cerca de 1,39 millones de unidades.' },
        { kind: 'bars', title: 'Pérdida por mercado', sub: '% de la rotación, estimación técnica', unit: '%', items: [{ label: 'CALDE-MAX', value: 27, hot: true, display: '≈ 27%' }, { label: 'BIOTTA-25-BI', value: 20, display: '≈ 20%' }, { label: 'DOZEMAST', value: 7, display: '≈ 7%' }] },
      ],
      paragraphs: ['En los tres mercados principales de Marjan, en 14 cadenas de Abrafarma, de septiembre a noviembre de 2025:'],
      tables: [
        {
          head: ['Indicador', 'Resultado'],
          rows: [
            ['Rotación registrada de Marjan en los 3 mercados', '610.006 unidades'],
            ['Rotación total de los 3 mercados (Marjan y competencia)', '1.386.060 unidades'],
            ['Pérdida estimada de Marjan por quiebres', '≈ 195.137 unidades'],
            ['Pérdida sobre la rotación del mercado', '≈ 14%'],
            ['Sell-out no capturado en el trimestre', '≈ R$ 27,6 millones'],
          ],
        },
      ],
      bullets: [
        'Son cerca de 32 unidades perdidas por cada 100 vendidas',
        'La pérdida cambia por mercado: ≈ 27% de la rotación en CALDE-MAX, ≈ 20% en BIOTTA-25-BI y ≈ 7% en DOZEMAST',
        'Proyección anual: si nada cambia, Marjan puede dejar de capturar ≈ R$ 110 millones al año (el trimestre por cuatro, sin ajuste de estacionalidad)',
      ],
      note: 'Cómo leer los valores: son un potencial técnico estimado. El cálculo usa la rotación diaria en tiendas con stock, la tasa de quiebre observada y el precio medio. No son pérdida real de facturación. La validación final usa los datos oficiales de venta de las cadenas.',
    },
    {
      title: 'Los tres SKU críticos',
      viz: [
        { kind: 'bars', title: 'Quiebre medio por SKU', sub: '% de los días sin stock', unit: '%', items: [{ label: 'Caldê MDK 2.000UI, 30 comprimidos', value: 39.2, hot: true }, { label: 'Caldê MDK 2000UI, 60 comprimidos', value: 23.4 }, { label: 'Dozemast 1.000mcg, 30 comprimidos', value: 12.5 }] },
        { kind: 'bars', title: 'Potencial en sell-out', sub: 'R$ millones en el trimestre, estimación', digits: 1, items: [{ label: 'Caldê MDK 2000UI, 60 comprimidos', value: 3.0, display: '≈ R$ 3,0 M' }, { label: 'Dozemast 1.000mcg, 30 comprimidos', value: 2.0, display: '≈ R$ 2,0 M' }, { label: 'Caldê MDK 2.000UI, 30 comprimidos', value: 1.6, display: '≈ R$ 1,6 M' }] },
      ],
      paragraphs: ['Entre los 10 SKU de mayor rotación, tres concentran el mayor potencial por falta de disponibilidad.'],
      tables: [
        {
          head: ['SKU', 'Quiebre medio', 'Unidades no vendidas', 'Potencial en sell-out'],
          rows: [
            ['Caldê MDK 2000UI, 60 comprimidos', '23,4%', '≈ 19.137', '≈ R$ 3,0 millones'],
            ['Dozemast 1.000mcg, 30 comprimidos', '12,5%', '≈ 23.461', '≈ R$ 2,0 millones'],
            ['Caldê MDK 2.000UI, 30 comprimidos', '39,2%', '≈ 15.666', '≈ R$ 1,6 millones'],
            ['Total', '', '≈ 58.264', '≈ R$ 6,6 millones'],
          ],
        },
      ],
      bullets: [
        'El tercer SKU es el más crítico: casi 4 de cada 10 días el producto no está disponible',
        'En Dozemast el quiebre es menor, pero el alto valor unitario aumenta el impacto',
        'En los 10 SKU, el quiebre medio ponderado por rotación fue de ≈ 21%',
      ],
    },
    {
      title: 'Dónde enfocar: ejecución por cadena y región',
      viz: [
        { kind: 'bars', title: 'Quiebre actual por ciudad', sub: '% de los días sin stock', unit: '%', items: [{ label: 'Brasília (DF)', value: 41.0, hot: true }, { label: 'Rio de Janeiro (RJ)', value: 29.4 }, { label: 'Porto Alegre (RS)', value: 27.9 }, { label: 'Curitiba (PR)', value: 23.1 }, { label: 'São Paulo (SP)', value: 18.8 }] },
        { kind: 'bars', title: 'Ganancia técnica si el quiebre baja a 5%', sub: 'Miles de unidades por trimestre', digits: 1, items: [{ label: 'São Paulo (SP)', value: 11.1, display: '+11,1 mil', hot: true }, { label: 'Rio de Janeiro (RJ)', value: 10.9, display: '+10,9 mil' }, { label: 'Porto Alegre (RS)', value: 4.0, display: '+4,0 mil' }, { label: 'Brasília (DF)', value: 3.8, display: '+3,8 mil' }, { label: 'Curitiba (PR)', value: 3.1, display: '+3,1 mil' }] },
      ],
      paragraphs: [
        'Ejecución. La cadena de mejor ejecución rota 8,71 unidades por semana por tienda. El promedio de las 14 cadenas es 3,76. La diferencia muestra el espacio para ganar con surtido, abastecimiento y activación comercial.',
        'Geografía. SP concentra el 34,4% del volumen de los 10 SKU y tiene un quiebre bajo el promedio (≈ 16,6%). Allí la prioridad es surtido, precio y activación. RS (≈ 36%), RJ (≈ 40%), PR (≈ 32%) y MG (≈ 29%) combinan volumen relevante con quiebre sobre el promedio. En esos estados, ataque la disponibilidad primero.',
        'Si el quiebre bajara a 5% en cada ciudad, las cinco ciudades con mayor ganancia técnica serían:',
      ],
      tables: [
        {
          head: ['Ciudad', 'Quiebre actual', 'Ganancia técnica potencial'],
          rows: [
            ['São Paulo (SP)', '≈ 18,8%', '+11,1 mil unidades'],
            ['Rio de Janeiro (RJ)', '≈ 29,4%', '+10,9 mil unidades'],
            ['Porto Alegre (RS)', '≈ 27,9%', '+4,0 mil unidades'],
            ['Brasília (DF)', '≈ 41,0%', '+3,8 mil unidades'],
            ['Curitiba (PR)', '≈ 23,1%', '+3,1 mil unidades'],
          ],
        },
      ],
      bullets: [
        'Donde la disponibilidad es buena y la rotación es débil, la causa suele ser precio, promoción, mix o góndola. La acción es comercial',
        'Donde la disponibilidad es buena, la rotación es fuerte y la participación crece, están los casos para replicar: ciudades de Ceará, Bahía y Tocantins',
      ],
    },
    {
      title: 'Cuánto vale reducir los quiebres de stock',
      viz: [
        { kind: 'bars', title: 'Sell-out adicional por trimestre', sub: 'R$ millones, por meta de reducción de la pérdida', digits: 1, items: [{ label: 'Meta realista: de 14% a 10%', value: 7.9, display: '≈ R$ 7,9 M' }, { label: 'Meta ambiciosa: de 14% a 7%', value: 13.8, display: '≈ R$ 13,8 M' }, { label: 'Excelencia: de 14% a 5%', value: 17.8, display: '≈ R$ 17,8 M', hot: true }] },
      ],
      paragraphs: ['Dinn simuló tres metas. La base es la pérdida de 14% sobre la rotación del mercado y el precio medio de sell-out de R$ 141,52.'],
      tables: [
        {
          head: ['Escenario', 'Unidades recuperadas', 'Sell-out adicional por trimestre'],
          rows: [
            ['La pérdida baja de 14% a 10% (meta realista)', '≈ 55.753', '≈ R$ 7,9 millones'],
            ['La pérdida baja de 14% a 7% (meta ambiciosa)', '≈ 97.568', '≈ R$ 13,8 millones'],
            ['La pérdida baja de 14% a 5% (excelencia)', '≈ 125.445', '≈ R$ 17,8 millones'],
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
