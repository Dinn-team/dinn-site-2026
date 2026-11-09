import type { FeatureContent } from '../types';

// Giro. Fonte: dinn-manager-app/docs/site-reproducao/funcionalidades/giro.md (A1 a A10).
// Regras: giro é saída de estoque, não venda confirmada. O dado é D-1. Sem promessa de resultado.
export const giro: FeatureContent = {
  slug: 'giro',
  meta: {
    title: 'Giro | Dinn',
    description: 'Veja se o produto gira em cada loja e quantos dias o estoque ficou sem movimento. Dado do dia anterior, em janelas de 7, 30 ou 90 dias.',
  },
  hero: {
    title: 'O produto gira? Veja onde o estoque para.',
    sub: 'A Dinn mostra o giro por loja, quantos dias o estoque ficou sem movimento e onde vale investigar uma queda.',
    note: 'Dado do dia anterior (D-1). O giro é uma estimativa e não confirma venda.',
  },
  steps: [
    { title: 'Escolha o produto e a janela', text: 'Filtre por produto, rede, UF, cidade ou Brick e escolha 7, 30 ou 90 dias. O giro por loja aparece quando há um produto escolhido.' },
    { title: 'Veja quem gira e quem está parado', text: 'Compare as redes pela disponibilidade. Veja quantas lojas estão paradas há 7, 30, 60 ou 90 dias. Ordene as lojas pelos dias parados.' },
    { title: 'Abra a loja e investigue', text: 'Clique em uma loja para ver o giro, os dias parados e o estoque congelado de cada produto. Baixe a lista ou pergunte à Jean.' },
  ],
  doors: {
    title: 'Onde o giro aparece',
    intro: 'O mesmo dado chega por quatro caminhos. Escolha o que combina com a sua pergunta.',
    items: [
      {
        title: 'Pela Início',
        text: 'A tabela Pontos de venda mostra o giro, o volume sugerido, os dias parados e o estoque congelado de cada loja. Ordene pelos dias parados.',
        shot: { screen: 'turn', phase: 5, to: 'tbl' },
      },
      {
        title: 'Pela loja',
        text: 'Abra qualquer loja e veja o giro, os dias parados e o estoque congelado produto a produto.',
        shot: { screen: 'rupture', phase: 9, to: 'm-tbl' },
      },
      {
        title: 'Pelo Localizador',
        text: 'No popup da loja, o cartão Giro mostra a média de unidades por dia. O cartão Parado mostra há quantos dias o estoque não se mexe.',
        shot: { screen: 'locator', phase: 7, to: 'popup' },
        link: { slug: 'localizador', label: 'Ver o Localizador' },
      },
      {
        title: 'Pela Distribuição',
        text: 'O giro somado da região vira a cobertura em dias do CD, no painel do CD.',
        shot: { screen: 'dist', phase: 4, to: 'cdk' },
        link: { slug: 'distribuicao', label: 'Ver a Distribuição' },
      },
    ],
  },
  jean: {
    lead: 'Pergunte à Jean onde o estoque está parado. Ela abre a lista direto na Início.',
    prompts: ['Onde estou com mais estoque congelado no recorte atual?', 'Quais PDVs concentram mais estoque congelado?', 'Quantos dias de estoque tenho de Cefalgin em São Paulo?'],
    turns: [
      { q: 'Onde estou com mais estoque congelado?', a: 'Estas três redes têm mais estoque congelado. Abra a lista na Início, já filtrada.',
        card: { title: 'Estoque congelado em 30 dias', rows: [['Rede Farmacore', '1.240 un.'], ['Drogaria Serrana', '980 un.'], ['Farmácias Vitalis', '760 un.']] },
        steps: ['Abrir na Início'],
      },
      { q: 'Quantos dias de estoque tenho de Cefalgin em São Paulo?', a: 'Cerca de 12 dias, pelo giro médio dos últimos 30 dias. É uma estimativa.',
      },
    ],
  },
  inside: {
    title: 'O giro por dentro',
    sub: 'Role para ver cada etapa.',
    stages: [
      {
        tab: 'Redes',
        title: 'Quem está girando',
        text: 'Para cada rede, três faixas: sem estoque, sem vendas e em estoque girando. Passe o mouse para ver os percentuais e o total de lojas.',
        shot: { screen: 'turn', phase: 2, to: 'top' },
      },
      {
        tab: 'Parado',
        title: 'Quantas lojas estão paradas',
        text: 'Veja as lojas com estoque parado há 7, 30, 60 e 90 dias. As faixas são acumulativas: uma loja parada há 45 dias conta em 7 e em 30.',
        shot: { screen: 'turn', phase: 3, to: 'st' },
      },
      {
        tab: 'Lojas',
        title: 'O giro de cada loja',
        text: 'Com um produto escolhido, a tabela mostra giro, volume sugerido, reposição, dias parados e estoque congelado. Ordene por dias parados.',
        shot: { screen: 'turn', phase: 5, to: 'tbl' },
      },
      {
        tab: 'Produto',
        title: 'Produto a produto, na loja',
        text: 'O painel da loja traz as mesmas medidas para cada produto e o alerta de estoque parado.',
        shot: { screen: 'rupture', phase: 9, to: 'm-tbl' },
      },
    ],
  },
  read: {
    title: 'Como ler o resultado',
    intro: 'Cada número tem uma regra. Leia a regra antes de comparar duas telas.',
    rows: [
      { label: 'Giro na Início', text: 'Unidades que saíram do produto escolhido, somadas no período de 7, 30 ou 90 dias. Inclui vendas e outras movimentações. Reabastecimento não entra.', how: 'Aparece como 13 un. Sem produto escolhido, aparece --.' },
      { label: 'Giro por dia no Localizador', text: 'Média de unidades que saíram por dia nos últimos 30 dias. É o total de saídas dividido por 30.', how: 'Aparece como 1,4 un./dia. Não compare direto com a soma da Início.' },
      { label: 'VB sugerido', text: 'Volume de venda sugerido pelo modelo Dinn para o produto, em unidades.', how: 'Aparece como 2 un.' },
      { label: 'Reposição', text: 'Reposição sugerida do produto para a loja, em unidades de SKU.', how: 'Aparece como 3 un. Sem dado, aparece --.' },
      { label: 'Parados', text: 'Dias, no período escolhido, em que o estoque do produto não teve movimentação.', how: 'Aparece como 33 dias de 90 dias, com uma barra fina.' },
      { label: 'Congelados', text: 'Unidades que mantiveram a mesma quantidade em estoque durante todo o período.', how: 'Aparece como 3 un.' },
      { label: 'Alerta de estoque parado', text: 'Há estoque na loja, mas o produto não se mexe. Atenção a partir de 30 dias parado. Crítico no limite da janela de 90 dias.', how: 'Triângulo âmbar (Atenção) ou vermelho (Crítico) ao lado de Parados.' },
      { label: 'Classificação de Estoque Parado', text: 'Quantas lojas estão paradas há 7, 30, 60 ou 90 dias ou mais. As faixas são acumulativas. O percentual é sobre o total de lojas, então as linhas não somam 100%.', how: 'Quatro linhas, cada uma com ponto, número e barra.' },
      { label: 'Disponibilidade por rede', text: 'Para cada rede, a divisão das lojas em Sem estoque, Sem vendas e Em estoque (girando) no período.', how: 'Colunas empilhadas em coral, âmbar e roxo.' },
      { label: 'Cobertura estimada', text: 'Quanto tempo o estoque deve durar, pelo histórico recente de giro. É uma estimativa, não uma garantia. Só aparece com estoque maior que zero.', how: 'Selo no popup do Localizador. Exemplos: Pode acabar em até 2 dias, 3 a 4 dias, 5 a 7 dias ou mais de 7 dias.' },
    ],
  },
  does: [
    'Mostra o giro estimado de um produto em cada loja da carteira, no período de 7, 30 ou 90 dias.',
    'Mostra quantas lojas estão com o estoque sem movimento há 7, 30, 60 e 90 dias, e quais são elas.',
    'Mostra o volume sugerido e a reposição sugerida pelo modelo Dinn, quando a sua empresa contrata essas colunas.',
    'Avisa quando há estoque na loja e o produto não se mexe, para a equipe investigar.',
  ],
  doesNot: [
    'Não confirma venda. Movimentação de estoque não é venda confirmada.',
    'Não diz o motivo do estoque parado. Pode ser baixa procura, excesso de estoque ou falha na leitura.',
    'Não mostra o giro de vários produtos juntos. Giro, volume sugerido e reposição só têm valor com um produto escolhido.',
    'Não mostra o giro ao longo do tempo em gráfico de linha. Hoje são totais por período e a média por dia no Localizador.',
    'Não é tempo real. O dado é do dia anterior.',
    'Não promete mais venda nem menos estoque parado.',
  ],
  use: {
    title: 'Como usar bem',
    consult: [
      'Escolha um produto no filtro Produtos. Com zero ou vários produtos, as colunas mostram --.',
      'Escolha o período da tabela: 7, 30 ou 90 dias. Ele muda Parados, Congelados e o Giro.',
      'Para ver uma loja no mapa, abra o Localizador, escolha produto e endereço e clique no pino.',
    ],
    analyze: [
      'Compare as redes no gráfico de disponibilidade. Muita faixa Sem vendas pode indicar estoque que não gira.',
      'No card de estoque parado, veja quantas lojas passam de 30 e de 60 dias.',
      'Ordene a tabela por Parados e olhe primeiro as lojas com triângulo vermelho.',
      'Abra a loja e compare o giro dos produtos. Giro zero com estoque e muitos dias parados pede uma conversa com a rede.',
    ],
    extract: [
      'Use o botão Baixar da tabela de pontos de venda. O arquivo leva todas as lojas do recorte.',
      'O painel da loja também tem Baixar, com a lista de produtos daquela loja.',
      'Salve o recorte em Visualizações salvas para voltar com um clique.',
      'Pergunte à Jean e peça os dados em tabela. O Localizador não tem botão de baixar.',
    ],
    formats: ['CSV', 'Excel (XLS)', 'PDF', 'JSON'],
    note: 'Giro e estoque parado são alerta para investigar. A diferença entre dois números pode vir do período, da loja ou da leitura do estoque.',
  },
  related: {
    title: 'Junto com outras funcionalidades',
    intro: 'O giro responde uma pergunta. As outras funcionalidades respondem perguntas próximas.',
    items: [
      { slug: 'ruptura', name: 'Ruptura', text: 'Loja sem estoque é assunto da Ruptura. O Giro olha o produto que está na loja, mas não se mexe.' },
      { slug: 'preco', name: 'Preço', text: 'O preço da loja fica na coluna ao lado do giro, na tabela da Início.' },
      { slug: 'localizador', name: 'Localizador de Produtos', text: 'Para achar o produto perto de um endereço e consultar o estoque agora.' },
      { slug: 'distribuicao', name: 'Distribuição', text: 'O giro somado por região vira cobertura em dias do CD.' },
    ],
  },
  faq: [
    { question: 'Giro é venda?', answer: 'Não. É a saída de unidades do estoque no período. Inclui vendas e outras movimentações e não inclui reabastecimento. É uma estimativa.' },
    { question: 'Por que a coluna Giro mostra --?', answer: 'Porque não há um produto escolhido, ou não há dado para a loja. Escolha exatamente um produto no filtro Produtos.' },
    { question: 'Por que aparece "Não contratado"?', answer: 'A sua empresa não contratou a funcionalidade. O Giro, o VB sugerido e a Reposição são contratados à parte.' },
    { question: 'O que é estoque parado?', answer: 'É o estoque informado igual por vários dias seguidos. Serve de alerta para investigar. Não significa necessariamente falta de venda.' },
    { question: 'O que é estoque congelado?', answer: 'São as unidades que ficaram na mesma quantidade durante o período inteiro.' },
    { question: 'Qual a diferença entre Atenção e Crítico?', answer: 'Atenção: há estoque e o produto não tem movimentação há 30 dias ou mais. Crítico: o produto ficou sem se mexer na janela inteira de 90 dias.' },
    { question: 'O giro do popup é igual ao da tabela?', answer: 'Não. A tabela soma as saídas do período. O popup mostra a média por dia dos últimos 30 dias. Não compare os dois números direto.' },
    { question: 'Os dados são em tempo real?', answer: 'Não. São do dia anterior (D-1). Só a consulta "Consultar agora" do Localizador é ao vivo, em lojas compatíveis.' },
    { question: 'Posso baixar o giro?', answer: 'Sim, na tabela de pontos de venda e no painel da loja, em CSV, Excel, PDF ou JSON.' },
  ],
  cta: {
    title: 'Quer ver o giro do seu produto nas lojas?',
    text: 'Conte qual produto e quais redes interessam. Uma pessoa do time da Dinn mostra o recorte.',
    button: 'Falar com a Dinn',
  },
};
