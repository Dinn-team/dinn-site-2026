import type { FeatureContent } from '../types';

// Preço. Fonte: dinn-manager-app/docs/site-reproducao/funcionalidades/preco.md (A1 a A10).
// Regras: é o preço observado no canal digital da loja, não o da prateleira. Sem recomendação de preço.
// A data da leitura aparece só no Localizador. A coluna Preço da Início não ordena.
export const preco: FeatureContent = {
  slug: 'preco',
  meta: {
    title: 'Preço | Dinn',
    description: 'Veja a que preço o produto aparece em cada loja. Preço observado no canal digital, com a data da leitura no Localizador.',
  },
  hero: {
    title: 'A que preço o produto aparece em cada loja?',
    sub: 'A Dinn mostra o preço observado em cada farmácia. No Localizador, mostra também a data da leitura e ordena do menor para o maior preço.',
    note: 'É o preço observado no canal digital da loja, não o da prateleira. No Localizador, a leitura pode ter até 7 dias. Confira a data.',
  },
  steps: [
    { title: 'Escolha o produto e o endereço', text: 'No Localizador, busque o produto e a região. Na Início, escolha um produto no filtro.' },
    { title: 'Veja o preço de cada loja', text: 'No Localizador, o preço aparece no cartão da loja, com a data da leitura. Sem preço lido, a tela mostra -- e explica o motivo.' },
    { title: 'Ordene e compare', text: 'No Localizador, ordene o restante das lojas do menor para o maior preço. Compare as redes e abra a loja para ver o preço por unidade.' },
  ],
  doors: {
    title: 'Onde o preço aparece',
    intro: 'O preço aparece em seis lugares. No Localizador, vem com a data da leitura. Na Início, fica ao lado do giro e da reposição.',
    items: [
      {
        title: 'Na lista do Localizador',
        text: 'O preço fica no canto de cada cartão de farmácia. O ícone (i) mostra a data da leitura.',
        shot: { screen: 'locator', phase: 6, to: 'store-0' },
        link: { slug: 'localizador', label: 'Ver o Localizador' },
      },
      {
        title: 'Na ordenação',
        text: 'Troque Mais próximas por Menor preço ou Maior preço. A ordem vale para o restante das lojas. Lojas sem preço ficam no fim.',
        shot: { screen: 'locator', phase: 12, to: 'rest' },
      },
      {
        title: 'No popup da loja',
        text: 'No cartão de estoque do produto, o preço aparece por unidade, junto com a faixa de estoque e o giro.',
        shot: { screen: 'locator', phase: 7, to: 'p-box' },
      },
      {
        title: 'Na tabela da Início',
        text: 'Com um produto escolhido, a coluna Preço mostra o valor de cada loja ao lado do giro, do volume sugerido e da reposição.',
        shot: { screen: 'price', phase: 2, to: 'tbl' },
      },
      {
        title: 'No painel da loja',
        text: 'Abra uma loja na Início e veja o preço de cada produto dela, ao lado do giro e da reposição.',
        shot: { screen: 'rupture', phase: 9, to: 'm-tbl' },
      },
      {
        title: 'Pela Distribuição',
        text: 'O painel do CD mostra o preço médio no CD e nas farmácias da região.',
        shot: { screen: 'dist', phase: 4, to: 'cdk' },
        link: { slug: 'distribuicao', label: 'Ver a Distribuição' },
      },
    ],
  },
  jean: {
    lead: 'Pergunte como o preço varia entre as redes. A resposta pode vir em tabela.',
    prompts: ['Como o preço de Cefalgin varia entre as redes?', 'Quais lojas estão sem preço?', 'Qual é o menor preço de Cefalgin em São Paulo?'],
    turns: [
      { q: 'Como o preço de Cefalgin varia entre as redes?', a: 'De R$ 36,50 a R$ 44,50.',
        card: { title: 'Preço observado', rows: [['Farmácias Vitalis', 'R$ 36,50'], ['Drogaria Serrana', 'R$ 39,90'], ['Drogarias Aurora', 'R$ 44,50']] },
      },
      { q: 'Quais lojas estão sem preço?', a: '112 de 805 lojas. Sem preço lido, a tela mostra --.',
        steps: ['Abrir na Início'],
      },
    ],
  },
  inside: {
    title: 'O preço por dentro',
    sub: 'Role para ver cada etapa.',
    stages: [
      {
        tab: 'Lista',
        title: 'O preço em cada loja',
        text: 'Cada cartão mostra o nome da loja e, no canto, o preço lido. O ícone (i) mostra a data da leitura.',
        shot: { screen: 'locator', phase: 6, to: 'store-0' },
      },
      {
        tab: 'Ordenar',
        title: 'Do menor para o maior',
        text: 'Ordene o restante das lojas por menor ou maior preço. Lojas sem preço ficam no fim.',
        shot: { screen: 'locator', phase: 12, to: 'rest' },
      },
      {
        tab: 'Loja',
        title: 'O preço por unidade',
        text: 'No popup, o preço aparece com o estoque do produto na loja.',
        shot: { screen: 'locator', phase: 7, to: 'p-box' },
      },
      {
        tab: 'Início',
        title: 'Preço por loja, na tabela',
        text: 'Com um produto escolhido, a tabela de pontos de venda traz o preço ao lado do giro e da reposição.',
        shot: { screen: 'price', phase: 2, to: 'tbl' },
      },
    ],
  },
  read: {
    title: 'Como ler o resultado',
    intro: 'O preço é uma leitura. Veja de onde ela vem antes de comparar duas lojas.',
    rows: [
      { label: 'Preço', text: 'Valor em reais observado na loja. No popup do Localizador, aparece por unidade.', how: 'Aparece como R$ 39,90.' },
      { label: 'Data da leitura', text: 'Dia em que a Dinn leu esse preço. Existe só no Localizador.', how: 'Ícone (i) ao lado do preço: Preço observado em 02/11/2026.' },
      { label: 'Sem preço', text: 'A Dinn não leu preço para a loja. Nunca aparece R$ 0,00. A tela explica o motivo.', how: 'Aparece como --, com o ícone (i). Motivos: sem leitura em 7 dias, estoque estimado ou e-commerce que não informa o preço.' },
      { label: 'Ordenação', text: 'Mais próximas, Menor preço ou Maior preço. Vale só para o restante das lojas. O empate é decidido pela distância.', how: 'Seletor acima da lista do Localizador. Lojas sem preço ficam no fim.' },
      { label: 'Preço na Início', text: 'Só aparece com exatamente um produto escolhido. A coluna não ordena.', how: 'Sem produto escolhido, aparece --.' },
      { label: 'Contratação', text: 'O Preço é contratado à parte. Sem contratação, a tela mostra um cadeado.', how: 'No cadeado, a dica explica que o laboratório precisa contratar o recurso.' },
    ],
  },
  does: [
    'Mostra o preço observado de um produto em cada loja, com a data da leitura no Localizador.',
    'No Localizador, ordena as lojas do menor para o maior preço, ou o contrário.',
    'Explica por que uma loja está sem preço, em vez de mostrar zero.',
    'Mostra o preço de cada loja ao lado do giro, da reposição e dos dias parados na Início.',
  ],
  doesNot: [
    'Não mostra o preço da prateleira. É o preço do canal digital da loja.',
    'No Localizador, não copia o preço de outra loja. Não estima preço para loja com estoque estimado. Sem leitura, aparece --.',
    'Não recomenda preço, não diz o preço certo e não compara com um preço de referência.',
    'Não mostra histórico nem gráfico de preço ao longo do tempo.',
    'Não é fonte de promoção ou oferta.',
    'Não mostra preço de todas as lojas. Só as que enviam o preço e têm estoque exato.',
  ],
  use: {
    title: 'Como usar bem',
    consult: [
      'No Localizador, escolha o produto e o endereço e clique em Consultar farmácias. O preço aparece em cada cartão.',
      'Passe o mouse no ícone (i) ao lado do preço para ver a data da leitura. Passe no (i) ao lado do -- para ver o motivo.',
      'Na Início, escolha exatamente um produto no filtro Produtos e olhe a coluna Preço.',
    ],
    analyze: [
      'Ordene por Menor preço e por Maior preço e veja quais redes ficam nas pontas.',
      'Compare só o que é comparável: o mesmo produto, leituras de datas próximas e lojas com preço lido. Loja com estoque estimado não mostra preço e não entra na conta.',
      'Na Início, filtre a rede e compare o preço das suas lojas na mesma tabela.',
      'Quando o preço sair da faixa, abra a loja e confira o estoque e a data antes de falar com a rede.',
    ],
    extract: [
      'Na Início, use o botão Baixar. O arquivo traz a coluna Preço (R$). Loja sem preço sai com a célula vazia.',
      'O Localizador não exporta. O botão Compartilhar copia endereço e link, não o preço.',
      'Salve o recorte em Visualizações salvas para voltar com um clique.',
      'Pergunte à Jean e peça a resposta em tabela.',
    ],
    formats: ['CSV', 'Excel (XLS)', 'PDF', 'JSON'],
    note: 'O Preço é uma observação. A Dinn não diz qual deveria ser o preço nem se a loja está certa.',
  },
  related: {
    title: 'Junto com outras funcionalidades',
    intro: 'Leia o preço junto com o estoque e o giro.',
    items: [
      { slug: 'localizador', name: 'Localizador de Produtos', text: 'É onde o preço aparece com a data da leitura e a ordenação.' },
      { slug: 'giro', name: 'Giro', text: 'Na tabela da Início, o preço fica ao lado do giro e da reposição.' },
      { slug: 'ruptura', name: 'Ruptura', text: 'Veja se a loja tem o produto antes de comparar o preço.' },
      { slug: 'jean', name: 'Jean', text: 'Pergunte como o preço varia entre redes. A resposta pode vir em tabela.' },
    ],
  },
  faq: [
    { question: 'De onde vem o preço?', answer: 'A Dinn lê o preço junto com o estoque, no canal digital da loja.' },
    { question: 'É o preço da loja física?', answer: 'Não. É o preço observado no canal digital da loja. O preço da prateleira pode ser outro.' },
    { question: 'Por que uma loja aparece com --?', answer: 'A Dinn não leu o preço. Pode ser que a loja não enviou o preço nos últimos 7 dias, que o estoque é estimado ou que o e-commerce não informa. O ícone (i) mostra o motivo.' },
    { question: 'O preço pode ser R$ 0,00?', answer: 'Não. Sem preço lido, a tela mostra --.' },
    { question: 'O preço de uma loja é copiado da vizinha?', answer: 'Não. No Localizador, é o último preço lido na própria loja.' },
    { question: 'Qual é a data do preço?', answer: 'No Localizador, o ícone (i) mostra o dia da leitura. A Início não mostra a data do preço.' },
    { question: 'Posso ordenar por preço?', answer: 'Sim, no Localizador. A ordem vale para o restante das lojas. Lojas sem preço ficam no fim. A coluna Preço da Início não ordena.' },
    { question: 'Posso baixar os preços?', answer: 'Sim, na tabela da Início, em CSV, Excel, PDF ou JSON. O Localizador não baixa.' },
    { question: 'Por que aparece um cadeado?', answer: 'A sua empresa não contratou o Preço. O recurso é contratado à parte.' },
  ],
  cta: {
    title: 'Quer ver o preço do seu produto nas lojas?',
    text: 'Conte qual produto e quais redes interessam. Uma pessoa do time da Dinn mostra o recorte.',
    button: 'Falar com a Dinn',
  },
};
