import type { FeatureContent } from '../types';

// Oportunidades. Fonte: dinn-manager-app/docs/site-reproducao/funcionalidades/oportunidades.md (A1 a A10).
// Regras: a venda é estimada pelo movimento de estoque. A variação de participação tem margem de ±1,3 p.p.
// As ações são sugestões. Não criam tarefa. A projeção é uma referência em validação.
export const oportunidades: FeatureContent = {
  slug: 'oportunidades',
  meta: {
    title: 'Oportunidades | Dinn',
    description: 'Veja em que território a categoria cresce e o seu laboratório perde espaço. Mapa por estado, cidade e Brick, com venda estimada.',
  },
  hero: {
    title: 'Em que território a categoria cresce e eu perco espaço?',
    sub: 'Escolha a pergunta. A Dinn colore o mapa por estado e ordena os territórios pelo sinal. Depois abra o estado, a cidade ou o Brick.',
    note: 'A venda é estimada pelo movimento de estoque. A variação de participação tem margem de mais ou menos 1,3 p.p.',
  },
  steps: [
    { title: 'Escolha a pergunta e o recorte', text: 'Defina mercado, região, rede e período de 7, 30, 60 ou 90 dias. Depois escolha uma entre três perguntas.' },
    { title: 'Leia o mapa e os territórios', text: 'Cada estado ganha um sinal. A tabela ordena os territórios e mostra a base de cada número.' },
    { title: 'Abra o detalhe e investigue', text: 'Veja redes, lojas, concorrência, histórico e projeção. Peça até 5 ações curtas à Jean.' },
  ],
  doors: {
    title: 'Para onde você quer olhar?',
    intro: 'As três perguntas usam o mesmo recorte e a mesma base de lojas. A terceira, Onde investigar expansão?, mostra redes grandes na categoria onde o laboratório aparece pouco. É uma hipótese. A rede e o KAM precisam validar. Essa pergunta não tem sinal vermelho.',
    items: [
      {
        title: 'Onde a categoria avança?',
        text: 'Maior aumento de volume estimado, no mesmo conjunto de lojas. Mostra onde o mercado cresce ou encolhe 5% ou mais.',
        shot: { screen: 'opps', phase: 0, to: 'qs' },
      },
      {
        title: 'Onde meu laboratório perde espaço?',
        text: 'Maior queda de participação, em pontos percentuais. Mostra onde a participação variou 2 p.p. ou mais.',
        shot: { screen: 'opps', phase: 2, to: 'terr' },
      },
      {
        title: 'No detalhe do estado',
        text: 'Clique em um estado e veja mercado, laboratório, participação e lojas comparáveis, com a linha de leitura em texto.',
        shot: { screen: 'opps', phase: 3, to: 'dk' },
      },
    ],
  },
  jean: {
    lead: 'A Jean já sabe o recorte da tela. Pergunte quem ganhou espaço e peça ações.',
    prompts: ['Quais marcas concorrentes ganharam espaço em Santa Catarina?', 'Isso acontece em quais redes de Santa Catarina?', 'Que ações você recomenda para Santa Catarina?'],
    turns: [
      { q: 'Quem ganhou espaço em Santa Catarina?', a: 'A Farmoquímica Aliança, nas últimas 4 semanas. A variação da Bionova Genéricos cabe na margem de 1,3 p.p.',
        card: { title: 'Variação de participação', rows: [['Farmoquímica Aliança', '+3,1 p.p.'], ['Bionova Genéricos', '+0,9 p.p.'], ['Meu laboratório', '−4,3 p.p.']] },
      },
      { q: 'Que ações você recomenda?', a: 'Três ações curtas, por prioridade.',
        card: { title: 'Ações sugeridas', rows: [['Investigar a queda na Rede Farmacore', 'Alta'], ['Analisar a perda na Drogaria Serrana', 'Alta'], ['Acompanhar as Farmácias Vitalis', 'Média']] },
      },
    ],
  },
  inside: {
    title: 'O território por dentro',
    sub: 'Role para ver cada etapa.',
    stages: [
      {
        tab: 'Mapa',
        title: 'Um pino por estado',
        text: 'Cada estado tem um pino com o sinal da pergunta. O brilho mostra as cidades e, com zoom, os Bricks.',
        shot: { screen: 'opps', phase: 2 },
      },
      {
        tab: 'Territórios',
        title: 'A mesma leitura em lista',
        text: 'Ordene por qualquer coluna. Com uma cidade escolhida, a tabela passa a listar cidades.',
        shot: { screen: 'opps', phase: 2, to: 'terr' },
      },
      {
        tab: 'Detalhe',
        title: 'Um estado, de perto',
        text: 'Mercado, laboratório, participação e lojas comparáveis. Refine por rede, cidade e Brick.',
        shot: { screen: 'opps', phase: 3, to: 'dk' },
      },
      {
        tab: 'Ações',
        title: 'Até 5 ações curtas',
        text: 'A Jean lê o cenário e sugere ações. São sugestões, não viram tarefa.',
        shot: { screen: 'opps', phase: 5, to: 'acts' },
      },
    ],
  },
  read: {
    title: 'Como ler o resultado',
    intro: 'O sinal muda com a pergunta. Leia a cor junto com a base de cada número.',
    rows: [
      { label: 'Verde', text: 'Mercado em alta: aumento de 5% ou mais. Laboratório ganha espaço: 2 p.p. ou mais. Na pergunta de expansão: redes grandes com pouca presença.', how: 'Pino do estado e selo da tabela.' },
      { label: 'Vermelho', text: 'Mercado em queda de 5% ou mais, ou laboratório que perde 2 p.p. ou mais. A pergunta de expansão não tem sinal vermelho.', how: 'Pino do estado e selo da tabela.' },
      { label: 'Âmbar', text: 'Dado frágil: poucas lojas comparáveis ou muita entrada e saída de lojas. Confirme o dado antes de agir.', how: 'Pino e selo em âmbar.' },
      { label: 'Cinza', text: 'Estável: variação abaixo de 5% ou de 2 p.p. Na pergunta de expansão, significa sem candidata.', how: 'Pino em cinza.' },
      { label: 'Venda estimada', text: 'Vem do movimento de estoque. Não é sell-out auditado.', how: 'Faixa do método, acima do mapa.' },
      { label: 'Margem de 1,3 p.p.', text: 'A variação de participação tem essa margem. Uma variação de até 1,3 p.p. cabe na margem.', how: 'Triângulo âmbar no título da coluna ou do cartão.' },
      { label: 'Painel comparável', text: 'Só entram lojas com dado válido nas duas janelas. Entradas e saídas aparecem à parte.', how: 'Cartão Lojas comparáveis no detalhe.' },
      { label: 'Em medição', text: 'Produto sem medição nas duas janelas. Nunca vira zero.', how: 'Texto Em medição com um (i) que explica o motivo.' },
      { label: 'Painel pequeno', text: 'Poucas lojas comparáveis. O sinal é frágil e a tela não gera ações.', how: 'Pílula âmbar na tabela.' },
      { label: 'Em validação', text: 'A projeção de 4 semanas é uma referência, não um modelo validado.', how: 'Linha tracejada com faixa, rotulada Em validação.' },
    ],
  },
  does: [
    'Compara a categoria e o laboratório entre duas janelas de mesmo tamanho, só nas mesmas lojas e nos mesmos produtos.',
    'Mostra por estado, cidade e Brick onde a categoria avança, onde a participação cai e onde há redes para investigar.',
    'Mostra a concorrência por laboratório e por produto, o histórico e uma projeção de referência de 4 semanas.',
    'Diz o que ficou fora da comparação e por quê. Quando não há dado, diz que não há.',
    'Sugere até 5 ações curtas, com prioridade, a partir do cenário.',
  ],
  doesNot: [
    'Não mostra venda real, fiscal ou sell-out. A venda é estimada.',
    'Não afirma precisão acima de 1,3 p.p. na variação de participação.',
    'Não mede interesse de busca, etapa de tratamento nem entrantes. Não há fonte para isso.',
    'Não prova que há espaço para vender. A baixa presença em uma rede é uma hipótese.',
    'Não vende a projeção como modelo validado e não promete resultado.',
    'Não cria tarefa, responsável nem prazo. As ações são sugestões.',
  ],
  use: {
    title: 'Como usar bem',
    consult: [
      'Escolha o Mercado, a Região, a Rede e o Período de 7, 30, 60 ou 90 dias. O Período vale na hora. Os outros filtros valem cerca de 0,5 segundo depois da última mudança.',
      'A Cidade só abre depois que você escolhe um estado. Com cidade, a tabela lista cidades.',
      'No detalhe, escolha também o Brick, uma micro-região dentro da cidade.',
      'Use Limpar filtros para voltar ao mercado padrão.',
    ],
    analyze: [
      'Escolha Onde a categoria avança? e anote os estados com Mercado em alta.',
      'Troque para Onde meu laboratório perde espaço? e veja quem tem Laboratório perde espaço.',
      'Cruze as duas listas. O estado nas duas é onde o mercado cresce e a participação cai.',
      'Abra o estado. A linha de leitura diz a causa em texto.',
      'Em Redes, compare Presença do laboratório e Concorrente persistente. Em Concorrência, veja quem ganhou espaço.',
      'Desça para a cidade e o Brick. Cuidado: até 1,3 p.p. cabe na margem. Percentual alto em base pequena engana, então olhe também a variação em unidades.',
    ],
    extract: [
      'Baixe a tabela Territórios pelo botão ao lado do título.',
      'No detalhe, baixe as tabelas Redes, Maiores variações da categoria e Concorrência.',
      'O arquivo sai como a tabela está na tela, na mesma ordem e com os filtros do momento.',
      'O arquivo CSV abre no Excel.',
    ],
    formats: ['CSV', 'Excel (XLS)', 'PDF', 'JSON'],
    note: 'A lista de lojas mede a variação da categoria, não a perda de participação do laboratório.',
  },
  related: {
    title: 'Junto com outras funcionalidades',
    intro: 'Oportunidades aponta o território. As outras funcionalidades ajudam a entender o motivo.',
    items: [
      { slug: 'mercado', name: 'Mercado', text: 'Para ver a participação por laboratório e as lojas onde só o concorrente vende.' },
      { slug: 'ruptura', name: 'Ruptura', text: 'Para ver se a perda de espaço vem de produto em falta.' },
      { slug: 'distribuicao', name: 'Distribuição', text: 'Para ver se o problema está no CD ou na reposição daquela região.' },
      { slug: 'jean', name: 'Jean', text: 'Pergunte quem ganhou participação e peça até 5 ações curtas.' },
    ],
  },
  faq: [
    { question: 'A venda é a venda real das lojas?', answer: 'Não. É estimada pelo movimento de estoque nas lojas monitoradas. Não é sell-out auditado.' },
    { question: 'Qual é a precisão da variação de participação?', answer: 'A margem é de mais ou menos 1,3 ponto percentual.' },
    { question: 'Por que um produto aparece como "Em medição"?', answer: 'A venda medida dele não cobre as duas janelas. Ele fica fora da comparação e a tela explica o motivo.' },
    { question: 'Por que o laboratório perdeu participação se vendeu mais?', answer: 'Porque o mercado comparável cresceu mais do que o laboratório.' },
    { question: 'O que é a projeção?', answer: 'Uma referência semanal das próximas 4 semanas, com faixa de incerteza. Está em validação e não é um modelo validado.' },
    { question: 'A projeção existe para cidade e Brick?', answer: 'Não. Só para o estado inteiro ou para uma rede por vez.' },
    { question: 'As ações viram tarefa?', answer: 'Não. São até 5 sugestões com prioridade, sem responsável nem prazo.' },
    { question: 'Por que aparece "Painel pequeno"?', answer: 'Há poucas lojas comparáveis. O sinal é frágil e a tela não gera ações.' },
    { question: 'Posso baixar os dados?', answer: 'Sim, em CSV, Excel, PDF ou JSON.' },
    { question: 'Quem vê Oportunidades?', answer: 'Quem tem a funcionalidade liberada. Os demais veem um cadeado.' },
  ],
  cta: {
    title: 'Quer ver Oportunidades com o seu mercado?',
    text: 'Conte qual mercado e quais estados você acompanha. Uma pessoa do time da Dinn responde.',
    button: 'Falar com a Dinn',
  },
};
