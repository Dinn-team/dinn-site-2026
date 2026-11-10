import type { FeatureContent } from '../types';

// Distribuição. Fonte: dinn-manager-app/docs/site-reproducao/funcionalidades/distribuicao.md (A1 a A10).
// Regras: proximidade geográfica não é vínculo de abastecimento. A leitura é hipótese. O dado é D-1.
// A tela não cria pedido, não faz remanejamento e não escreve no sistema do distribuidor.
export const distribuicao: FeatureContent = {
  slug: 'distribuicao',
  meta: {
    title: 'Distribuição | Dinn',
    description: 'Compare o estoque do distribuidor com a disponibilidade nas farmácias da região. Veja a cobertura em dias e uma leitura para investigar a causa.',
  },
  hero: {
    title: 'O furo está no CD, na reposição ou na farmácia?',
    sub: 'Compare o estoque do distribuidor com a disponibilidade nas farmácias da região. Veja a cobertura em dias e decida onde conferir primeiro.',
    note: 'Dado do dia anterior (D-1). A leitura é uma hipótese. Você confirma a causa.',
  },
  steps: [
    { title: 'Escolha o distribuidor e o produto', text: 'Filtre por distribuidor, CD e um produto. Rede, Estado e Cidade recortam as farmácias.' },
    { title: 'Veja o CD e as farmácias lado a lado', text: 'O mapa mostra cada CD com um raio. As farmácias dentro dele aparecem coloridas pelo nível de estoque do produto.' },
    { title: 'Leia a cobertura e investigue a causa', text: 'O CD mostra estoque, cobertura em dias, giro e preço. A Leitura do Dinn sugere uma hipótese. Você confirma a causa.' },
  ],
  doors: {
    title: 'Por onde você começa',
    intro: 'Cada pergunta leva a um ponto da tela.',
    items: [
      {
        title: 'O CD tem o produto?',
        text: 'Os cartões do topo e o histórico mostram quantos CDs têm estoque e como o saldo mudou.',
        shot: { screen: 'dist', phase: 1, to: 'hist' },
      },
      {
        title: 'As farmácias da região têm?',
        text: 'O mapa mostra o raio do CD e o nível de estoque de cada farmácia.',
        shot: { screen: 'dist', phase: 3, to: 'map' },
      },
      {
        title: 'Quantos dias o CD aguenta?',
        text: 'A janela do CD divide o estoque pela venda diária estimada da região.',
        shot: { screen: 'dist', phase: 4, to: 'cdk' },
      },
      {
        title: 'Quais farmácias estão sem o produto?',
        text: 'A lista do CD traz nível, estoque, giro e dias parados, com busca e ordenação.',
        shot: { screen: 'dist', phase: 4, to: 'dlist' },
      },
    ],
  },
  jean: {
    lead: 'A Jean sabe em que tela você está e quais filtros estão ativos. Peça uma leitura em português.',
    prompts: ['Quais farmácias da região de Brasília estão sem Cefalgin?', 'Quantas farmácias de Brasília estão com Cefalgin em nível baixo?', 'Onde estou com ruptura perto do CD?'],
    turns: [
      { q: 'Quais farmácias de Brasília estão sem Cefalgin?', a: '41 das 336 farmácias no raio de 30 km estão sem Cefalgin.',
        card: { title: 'Farmácias no raio de 30 km', rows: [['Sem estoque', '41'], ['Com estoque', '295'], ['Total', '336']] },
        steps: ['Abrir no Localizador'],
      },
      { q: 'Então o furo está no CD?', a: 'Ainda não dá para afirmar. É uma hipótese: confira o pedido e a reposição.',
      },
    ],
  },
  inside: {
    title: 'A Distribuição por dentro',
    sub: 'Role para ver cada etapa.',
    stages: [
      {
        tab: 'Filtros e resumo',
        title: 'Um recorte, três números',
        text: 'Escolha distribuidor e produto. Veja quantos CDs são monitorados, quantos produtos têm registro e a parcela de CDs com estoque.',
        shot: { screen: 'dist', phase: 1, to: 'hist' },
      },
      {
        tab: 'Mapa',
        title: 'O CD e o raio da região',
        text: 'O raio vale 10, 30 ou 50 km. Dentro dele ficam as farmácias, coloridas pelo nível de estoque.',
        shot: { screen: 'dist', phase: 3, to: 'map' },
      },
      {
        tab: 'CD',
        title: 'Estoque, cobertura e Leitura do Dinn',
        text: 'Clique no CD. A janela mostra estoque, cobertura, giro, estoque nas farmácias, preço e uma leitura em texto.',
        shot: { screen: 'dist', phase: 4, to: 'cdk' },
      },
      {
        tab: 'Lista',
        title: 'As farmácias do CD',
        text: 'Busque por nome, rede ou CNPJ. Troque o modelo de estoque. Baixe a lista. A lista aparece onde há histórico de compra.',
        shot: { screen: 'dist', phase: 4, to: 'dlist' },
      },
    ],
  },
  read: {
    title: 'Como ler o resultado',
    intro: 'A tela mostra o CD e as farmácias juntos. Leia os dois em conjunto.',
    rows: [
      { label: 'Nível da farmácia', text: 'Alto, Médio, Baixo ou Não tem. O nível vem pronto da base, para o produto escolhido.', how: 'Cor do pino: verde, âmbar, vermelho ou cinza.' },
      { label: 'Nível do CD', text: 'O nível vem da cobertura. Sem estoque, Indisponível. Abaixo de 7 dias, Baixo. De 7 a 30 dias, Médio. Acima de 30 dias, Alto.', how: 'Indicador do CD na janela.' },
      { label: 'Cobertura', text: 'Estoque do CD dividido pela venda diária estimada da região. É uma aproximação da região, não a cobertura real daquele CD.', how: 'Aparece em dias, como 8,6 dias.' },
      { label: 'Giro', text: 'Unidades por dia, somadas nas farmácias do raio. Não é o total do período.', how: 'Indicador Giro (un./dia).' },
      { label: 'CD com estoque e farmácias com estoque', text: 'O fluxo está normal.', how: 'Leitura do Dinn em texto.' },
      { label: 'CD zerado e farmácias com estoque', text: 'Indica que a distribuição foi feita. Não é ruptura por si só.', how: 'Leitura do Dinn em texto.' },
      { label: 'CD com estoque e farmácias sem estoque', text: 'É o furo. Trate como hipótese e confira pedido e reposição.', how: 'Leitura do Dinn em texto.' },
      { label: 'CD e farmácias zerados', text: 'Ruptura de verdade na região.', how: 'Leitura do Dinn em texto.' },
      { label: 'Proximidade ou compra', text: 'Proximidade é a loja estar no raio. Vínculo é a loja comprar daquele CD, para o produto, nos últimos 90 dias. Uma coisa não prova a outra.', how: 'Campo Quais lojas mostrar e marca Compra do CD ou Só na região.' },
    ],
  },
  does: [
    'Mostra o estoque do produto nos CDs do distribuidor e a disponibilidade nas farmácias da região.',
    'Calcula a cobertura do CD em dias a partir da venda diária estimada da região.',
    'Dá uma leitura em texto, em linguagem simples, com uma hipótese para investigar.',
    'Mostra o histórico de estoque dos CDs, por dia ou por semana.',
    'Lista as farmácias do CD, com busca, ordenação e download.',
  ],
  doesNot: [
    'Não prova que a causa está no CD, na reposição ou na farmácia. A leitura é hipótese.',
    'Não trata proximidade como vínculo de abastecimento.',
    'Não atualiza a base durante o dia. O dado é de D-1. O estoque da farmácia agora vem de Consultar agora.',
    'Não mostra o estoque exato de uma farmácia no mapa. O popup mostra o nível.',
    'Não cria pedido, não faz remanejamento e não escreve no sistema do distribuidor.',
    'Não cobre todos os distribuidores. A coleta nos CDs é recente e o histórico é curto.',
  ],
  use: {
    title: 'Como usar bem',
    consult: [
      'Escolha o distribuidor, ou só alguns CDs, e um produto.',
      'Recorte por Rede, Estado e Cidade. Estado e Cidade só mostram o que o distribuidor alcança.',
      'Ajuste o raio, o período e Quais lojas mostrar no painel do mapa.',
      'Salve o recorte e use o botão Ver para voltar a ele. As visões ficam neste navegador, até 30.',
    ],
    analyze: [
      'O CD tem estoque? Se não, a cobertura fica sem valor e a leitura diz que o CD está sem estoque.',
      'Se tem, as farmácias do raio têm? O donut e o painel mostram a parte sem estoque.',
      'Se o CD tem e as farmácias não, confira pedido e reposição. Depois confirme o vínculo de compra, se houver histórico.',
      'Na lista do CD, ordene por Estoque, Parados ou Congelados e troque o Modelo.',
    ],
    extract: [
      'Na lista do CD, use o botão de download.',
      'O arquivo respeita a busca, o modelo, o período e a ordem. Traz todas as páginas, até 30 mil lojas.',
      'O mapa, o gráfico e os cartões não têm exportação própria.',
    ],
    formats: ['CSV', 'Excel (XLS)', 'PDF', 'JSON'],
    note: 'A Jean sabe em que tela você está e quais filtros estão ativos. Peça uma leitura em português.',
  },
  related: {
    title: 'Junto com outras funcionalidades',
    intro: 'A Distribuição junta o que outras funcionalidades medem no ponto de venda.',
    items: [
      { slug: 'ruptura', name: 'Ruptura', text: 'Para ver a ruptura das farmácias antes de olhar o CD.' },
      { slug: 'giro', name: 'Giro', text: 'O giro somado da região vira a cobertura em dias do CD.' },
      { slug: 'preco', name: 'Preço', text: 'A janela do CD compara o preço no CD e nas farmácias da região.' },
      { slug: 'localizador', name: 'Localizador de Produtos', text: 'Para ver uma farmácia da região e consultar o estoque agora, em lojas elegíveis.' },
    ],
  },
  faq: [
    { question: 'É tempo real?', answer: 'A base é de D-1. Para ver o estoque de uma farmácia agora, use Consultar agora na lista do CD, no detalhe da loja ou no Localizador. Vale para lojas elegíveis.' },
    { question: 'CD zerado quer dizer ruptura?', answer: 'Não necessariamente. Ruptura é o CD e as farmácias zerados. CD zerado com farmácias abastecidas indica distribuição feita.' },
    { question: 'A farmácia dentro do raio compra desse CD?', answer: 'Não dá para afirmar. Proximidade não é vínculo de abastecimento. Onde há histórico de compra, use os modos de compra.' },
    { question: 'Como a cobertura é calculada?', answer: 'Estoque do CD dividido pela venda diária estimada das farmácias do raio. É uma aproximação da região.' },
    { question: 'Por que o histórico é curto?', answer: 'A coleta nos CDs é recente. A tela avisa quando o histórico é curto.' },
    { question: 'Posso baixar a lista?', answer: 'Sim. Baixe a lista de farmácias do CD em CSV, Excel, PDF ou JSON.' },
    { question: 'Por que vejo um cadeado?', answer: 'A sua empresa não contratou a funcionalidade. O link do Suporte aparece abaixo do cadeado.' },
    { question: 'Preço e giro aparecem para todos?', answer: 'Não. Dependem das funcionalidades Preço e Giro contratadas.' },
  ],
  cta: {
    title: 'Quer ver a Distribuição com os seus CDs?',
    text: 'Conte qual distribuidor e qual produto você acompanha. Uma pessoa do time da Dinn responde.',
    button: 'Falar com a Dinn',
  },
};
