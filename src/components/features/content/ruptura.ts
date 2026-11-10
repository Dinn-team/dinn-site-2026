import type { FeatureContent } from '../types';

// Ruptura. Fonte: dinn-manager-app/docs/site-reproducao/funcionalidades/ruptura.md (A1 a A10).
// Regras: a base é D-1 e serve para ver padrão e tendência. No detalhe da loja, Consultar agora lê o estoque em tempo real. Não confirma a ruptura de uma loja em um dia.
export const ruptura: FeatureContent = {
  slug: 'ruptura',
  meta: {
    title: 'Ruptura | Dinn',
    description: 'Veja onde o produto está em falta e quais lojas verificar primeiro. Ruptura por loja, rede e região, com a base do dia anterior e o estoque em tempo real na loja.',
  },
  hero: {
    title: 'Onde falta produto? Veja quais lojas verificar primeiro.',
    sub: 'A Dinn mede a ruptura nas farmácias da sua carteira, mostra a evolução no tempo e ordena as lojas pela gravidade.',
    note: 'Base do dia anterior (D-1) para ver padrão e tendência. No detalhe da loja, consulte o estoque em tempo real.',
  },
  steps: [
    { title: 'Escolha o recorte', text: 'Filtre por produto, rede, UF, cidade ou Brick. Os filtros valem para todos os gráficos e tabelas da tela.' },
    { title: 'Leia a ruptura', text: 'Veja a evolução no gráfico, quantas lojas estão em cada nível e quais produtos e redes falham mais.' },
    { title: 'Abra a loja e aja', text: 'Clique em uma loja para ver, produto por produto, o que falta nela. Baixe a lista em Excel ou pergunte à Jean.' },
  ],
  doors: {
    title: 'Onde a ruptura aparece',
    intro: 'A mesma leitura chega por três caminhos. Comece pelo que combina com a sua pergunta.',
    items: [
      {
        title: 'Pela tela Início',
        text: 'A primeira tela do portal mostra a ruptura da sua carteira, já no resumo, com a evolução no tempo e a classificação das lojas.',
        shot: { screen: 'rupture', phase: 4, to: 'dash' },
      },
      {
        title: 'Pela loja',
        text: 'Em qualquer linha da tabela de pontos de venda, o painel mostra a ruptura produto a produto daquela loja.',
        shot: { screen: 'rupture', phase: 6, to: 'm-tbl' },
      },
      {
        title: 'Pela consulta na loja',
        text: 'No detalhe da loja, clique em Consultar agora. A Dinn lê o estoque dela em tempo real e mostra o horário da resposta. Vale para lojas compatíveis.',
        shot: { screen: 'rupture', phase: 8, to: 'm-est-0' },
      },
    ],
  },
  jean: {
    lead: 'Pergunte à Jean, em português, quais lojas estão mais críticas. Depois abra a lista pronta na Início.',
    prompts: ['Quais são os 10 PDVs mais críticos em ruptura?', 'A ruptura de Cefalgin está melhorando?', 'Em quais redes falta mais produto?'],
    turns: [
      { q: 'Quais PDVs estão mais críticos em ruptura?', a: 'Há 32 PDVs no nível Crítico. Estes são os três primeiros.',
        card: { title: 'Ruptura em 30 dias', rows: [['Drogaria Serrana Ipiranga', '82%'], ['Rede Farmacore Jardim América', '76%'], ['Rede Saúde Mais Vila Mariana', '75%']] },
        steps: ['Abrir na Início'],
      },
      { q: 'A ruptura está melhorando?', a: 'Sim. Ela caiu de 39,0% para 26,2% em 12 semanas.',
      },
    ],
  },
  inside: {
    title: 'A ruptura por dentro',
    sub: 'Role para ver cada etapa.',
    stages: [
      {
        tab: 'Evolução',
        title: 'A ruptura ao longo do tempo',
        text: 'Acompanhe a linha por 7, 30 ou 90 dias, em visão diária ou semanal. Com mais de um item, cada um ganha a sua linha.',
        shot: { screen: 'rupture', phase: 4, to: 'chart' },
      },
      {
        tab: 'Gravidade',
        title: 'Quantas lojas em cada nível',
        text: 'Crítico, Alto, Moderado e Leve. O nível mostra o comportamento da loja nos últimos 30 dias.',
        shot: { screen: 'rupture', phase: 3, to: 'lv' },
      },
      {
        tab: 'Lojas',
        title: 'Qual loja visitar',
        text: 'Ordene a lista por nível, ruptura ou dias parados. Cada linha mostra a loja, a rede e onde ela fica.',
        shot: { screen: 'rupture', phase: 5, to: 'tbl' },
      },
      {
        tab: 'Loja',
        title: 'O produto que falta',
        text: 'Abra a loja e veja o ranking por SKU, com a faixa de estoque e a data da estimativa. Clique em Consultar agora para ver o estoque em tempo real.',
        shot: { screen: 'rupture', phase: 8, to: 'm-est-0' },
      },
    ],
  },
  read: {
    title: 'Como ler o resultado',
    intro: 'O mesmo nome, ruptura, tem bases diferentes em cada lugar. Leia a regra antes de comparar.',
    rows: [
      { label: 'Ruptura', text: 'Produto sem estoque no ponto de venda, em percentual das oportunidades de venda. Disponibilidade é 100% menos a ruptura.', how: 'Aparece como 34,4%.' },
      { label: 'Nível', text: 'Crítico: 75% ou mais. Alto: de 50% a 74%. Moderado: de 25% a 49%. Leve: abaixo de 25%. Usa sempre a janela fixa de 30 dias, com corte no sábado.', how: 'Selo colorido ao lado da loja.' },
      { label: 'Ruptura no gráfico', text: 'Média ponderada pelo volume observado, para o período e o recorte escolhidos.', how: 'Linha por 7, 30 ou 90 dias, em visão diária ou semanal.' },
      { label: 'Ranking por SKU', text: 'Pontos de venda com ruptura divididos pelos pontos de venda monitorados, no dia anterior.', how: 'Tabela de produtos, do que mais falta ao que menos falta.' },
      { label: 'Ruptura na tabela de lojas', text: 'Percentual de dias com estoque zerado, em 7, 30 ou 90 dias.', how: 'Anel com o percentual ao lado da loja.' },
      { label: 'Estoque exato ou estimado', text: 'Exato é a leitura real do e-commerce da loja. Estimado é a projeção do modelo, com margem de erro maior. O filtro Modelo escolhe a origem.', how: 'Rótulo no painel da loja.' },
      { label: 'Dado em dúvida', text: 'Quando a base está sob investigação ou a amostra é pequena, a tela avisa em vez de mostrar zero.', how: 'Selos Em revisão e Amostra pequena.' },
    ],
  },
  does: [
    'Mede a ruptura da carteira, por produto, rede, UF, cidade e Brick, e mostra a evolução no tempo.',
    'Classifica cada loja em Crítico, Alto, Moderado ou Leve.',
    'Ordena produtos, redes e lojas do mais crítico para o menos crítico.',
    'Mostra, em cada loja, quais produtos faltam e se o estoque é exato ou estimado.',
    'Consulta o estoque da loja em tempo real, no detalhe da loja, e mostra o horário da resposta.',
    'Exporta as tabelas e guarda visualizações salvas.',
  ],
  doesNot: [
    'Não atualiza a base durante o dia. A base é D-1. Para ver o estoque agora, use Consultar agora no detalhe da loja.',
    'Não confirma a ruptura de uma loja em um dia. Serve para ver padrão e tendência.',
    'Não conta lojas que nunca venderam o item.',
    'Não promete menos ruptura nem mais venda.',
    'Não confunde ruptura com estoque parado. Estoque parado tem indicadores próprios, no Giro.',
  ],
  use: {
    title: 'Como usar bem',
    consult: [
      'Escolha o produto, a rede e a região no topo. Os filtros valem para a tela toda.',
      'Escolha 7, 30 ou 90 dias no gráfico e a visão diária ou semanal.',
      'Abra a loja para ver o produto que falta e a data da estimativa.',
    ],
    analyze: [
      'Meu lançamento está faltando? Filtre o produto, use 30 dias e a visão Semanal. No ranking por rede, veja quem concentra a falta. Na tabela de lojas, ordene por Nível e leve Crítico e Alto ao campo.',
      'Onde mando a equipe de campo? Escolha a UF, a cidade ou o Brick. Ordene as lojas por Nível, abra as primeiras e veja os produtos que faltam. Baixe em Excel.',
      'A situação está melhorando? Compare 30 e 90 dias no gráfico. Veja o card de níveis e volte na semana seguinte. Ou pergunte à Jean.',
      'Falta produto ou falta giro? Em Disponibilidade por rede, compare Sem estoque com Sem vendas. No card de Estoque Parado, veja os dias parados.',
    ],
    extract: [
      'Use o botão Baixar da tabela de pontos de venda, do ranking por SKU ou da loja.',
      'Salve o recorte em Visualizações salvas para voltar com um clique.',
      'Pergunte à Jean e abra a lista já filtrada.',
    ],
    formats: ['CSV', 'Excel (XLS)', 'PDF', 'JSON'],
    note: 'O número pode diferir do que você vê na farmácia. A base é de ontem e parte do estoque é estimada. Para confirmar uma loja agora, use Consultar agora. O valor da base está na tendência.',
  },
  related: {
    title: 'Junto com outras funcionalidades',
    intro: 'A ruptura mostra onde falta. Estas funcionalidades ajudam a entender o resto.',
    items: [
      { slug: 'giro', name: 'Giro', text: 'Loja com estoque que não se mexe é assunto do Giro. Veja os dias parados.' },
      { slug: 'localizador', name: 'Localizador de Produtos', text: 'Para ver as lojas perto de um endereço. A Dinn já consulta em tempo real as 5 mais próximas.' },
      { slug: 'distribuicao', name: 'Distribuição', text: 'Para ver se a falta pode começar no centro de distribuição, na reposição ou na farmácia.' },
      { slug: 'jean', name: 'Jean', text: 'Pergunte quais lojas estão mais críticas e abra a lista pronta.' },
    ],
  },
  faq: [
    { question: 'O dado é em tempo real?', answer: 'A base é do dia anterior (D-1), com a data no topo da tela. Mas você pode ver o estoque de uma loja em tempo real. Abra a loja e clique em Consultar agora. A resposta mostra o horário da consulta. Vale para lojas compatíveis.' },
    { question: 'Por que o Nível não muda quando troco o período da tabela?', answer: 'Porque o Nível usa sempre a janela fixa de 30 dias, com corte no sábado.' },
    { question: 'Ruptura de 0% e "sem dado" são a mesma coisa?', answer: 'Não. 0% é um valor medido. "Sem dado" quer dizer que ainda não há medição.' },
    { question: 'Por que o número difere do que vi na farmácia?', answer: 'A base é de ontem e parte do estoque é estimada. Para ver o estoque da loja agora, use Consultar agora. Use a base para ver tendência, não para auditar uma loja.' },
    { question: 'Uma loja que nunca vendeu o produto aparece?', answer: 'Não. Lojas que nunca venderam o item não entram no cálculo.' },
    { question: 'Por que o gráfico de Disponibilidade não mostra a minha rede?', answer: 'Esse gráfico mostra só redes com leitura exata de estoque.' },
    { question: 'Posso baixar os dados?', answer: 'Sim. A tabela de lojas, o ranking por SKU e a lista de produtos da loja saem em CSV, Excel, PDF ou JSON.' },
  ],
  cta: {
    title: 'Qual recorte você quer ver primeiro?',
    text: 'Validamos produtos, redes e regiões e a decisão que sua equipe quer melhorar.',
    button: 'Falar com a Dinn',
  },
};
