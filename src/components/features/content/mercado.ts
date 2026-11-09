import type { FeatureContent } from '../types';

// Mercado. Fonte: dinn-manager-app/docs/site-reproducao/funcionalidades/mercado.md (A1 a A10).
// Regras: a venda é estimada pelo movimento de estoque. Os concorrentes aparecem somados, não um a um.
// A variação de participação em p.p. fica em Oportunidades.
export const mercado: FeatureContent = {
  slug: 'mercado',
  meta: {
    title: 'Mercado | Dinn',
    description: 'Compare o seu laboratório com os concorrentes nas mesmas lojas e no mesmo período. Venda estimada pelo movimento de estoque.',
  },
  hero: {
    title: 'Perdi participação ou perdi venda?',
    sub: 'A Dinn compara o seu laboratório com os concorrentes nas mesmas lojas e no mesmo período. Mostra também onde só o concorrente vende.',
    note: 'A venda é estimada pelo movimento de estoque. Dados e nomes ilustrativos.',
  },
  steps: [
    { title: 'Escolha o mercado e a janela', text: 'Defina o Mercado, o Brick e o período. Os filtros valem para os cartões, as roscas e a tabela.' },
    { title: 'Compare você e os concorrentes', text: 'Veja a participação por laboratório e por produto. No gráfico, compare as vendas estimadas do seu laboratório com as dos concorrentes.' },
    { title: 'Abra lojas ou redes e baixe a lista', text: 'Filtre as lojas que concentram 80% do volume ou que só têm concorrente. Baixe em CSV, Excel, PDF ou JSON.' },
  ],
  doors: {
    title: 'Por onde começar',
    intro: 'O Mercado abre no mercado padrão do seu laboratório. De lá, você chega ao mesmo dado por três caminhos.',
    items: [
      {
        title: 'Pelo menu',
        text: 'Clique em Mercado no menu lateral. A tela abre no mercado padrão do seu laboratório, com 30 dias.',
        shot: { screen: 'market', phase: 3, to: 'dash' },
      },
      {
        title: 'Pelo filtro',
        text: 'Troque o Mercado, o Brick ou o período no topo. Para voltar ao mesmo recorte, salve a visualização e use o botão Ver.',
        shot: { screen: 'market', phase: 1, to: 'mkt' },
      },
      {
        title: 'Pela tabela de lojas',
        text: 'Ordene por volume e filtre as lojas que concentram 80% do volume ou que só têm concorrente.',
        shot: { screen: 'market', phase: 6, to: 'net' },
      },
    ],
  },
  jean: {
    lead: 'A Jean abre com o seu recorte de Mercado. Pergunte quem ganhou participação.',
    prompts: ['Quem ganhou participação no Brasil?', 'O que mudou no último trimestre no Brasil?', 'Quem são os maiores laboratórios do mercado?'],
    turns: [
      { q: 'Quem ganhou participação no Brasil?', a: 'Hoje o seu laboratório tem a maior fatia, com 25,5% das vendas estimadas.',
        card: { title: 'Participação por laboratório', rows: [['Meu laboratório', '25,5%'], ['Farmoquímica Aliança', '22,4%'], ['Bionova Genéricos', '17,9%']] },
      },
      { q: 'O que mudou no último trimestre?', a: 'Pouco. A queda de 0,9 p.p. ficou dentro da margem de 1,3 p.p. Isso não indica perda.',
      },
    ],
  },
  inside: {
    title: 'O Mercado por dentro',
    sub: 'Role para ver cada etapa.',
    stages: [
      {
        tab: 'Indicadores',
        title: 'Quantas lojas, e onde está o volume',
        text: 'Total de PDVs no mercado, PDVs só com concorrente e PDVs que concentram 80%.',
        shot: { screen: 'market', phase: 3, to: 'dash' },
      },
      {
        tab: 'Participação',
        title: 'Quem vende quanto',
        text: 'Duas roscas: por laboratório e por produto. O total aparece no centro.',
        shot: { screen: 'market', phase: 4, to: 'lab' },
      },
      {
        tab: 'Vendas estimadas',
        title: 'Você contra os concorrentes',
        text: 'Duas curvas: Meu laboratório e Concorrentes. Veja por dia ou por semana, em 7, 30 ou 90 dias.',
        shot: { screen: 'market', phase: 6, to: 'sales' },
      },
      {
        tab: 'Lojas',
        title: 'Onde está o volume',
        text: 'A tabela por PDV, com busca, três segmentos e ordenação.',
        shot: { screen: 'market', phase: 6, to: 'net' },
      },
      {
        tab: 'Redes',
        title: 'Quem cobre o quê',
        text: 'A tabela por rede mostra as lojas cadastradas, as lojas com registro e a cobertura.',
        shot: { screen: 'market', phase: 8, to: 'net' },
      },
    ],
  },
  read: {
    title: 'Como ler o resultado',
    intro: 'Toda venda desta tela é estimada. Leia os indicadores como sinal para investigar.',
    rows: [
      { label: 'Total de PDVs no mercado', text: 'PDVs com venda estimada positiva no mercado. É o universo da leitura.', how: 'Cartão no topo.' },
      { label: 'PDVs só com concorrente', text: 'Lojas com venda de concorrente e nenhuma venda do seu laboratório.', how: 'Cartão no topo.' },
      { label: 'PDVs que concentram 80%', text: 'O menor conjunto de lojas que soma 80% do volume do mercado.', how: 'Cartão no topo. Na tabela, selo Top 80%.' },
      { label: 'Sem meu lab', text: 'O concorrente vendeu em 2 dias ou mais e o seu laboratório não vendeu.', how: 'Selo com contorno na tabela.' },
      { label: 'Curvas de vendas', text: 'Meu laboratório contra a soma dos concorrentes, nas mesmas lojas.', how: 'Meu laboratório em roxo e Concorrentes em azul.' },
      { label: 'Fatia Outros', text: 'O que passa das sete maiores fatias da rosca.', how: 'Última fatia de cada rosca.' },
      { label: 'Cobertura', text: 'Lojas com registro sobre lojas cadastradas na rede. Pode passar de 100% quando o cadastro está desatualizado.', how: 'Barra na tabela por rede. A tela mostra o número da fonte.' },
      { label: 'Em revisão', text: 'Dado sob investigação. A tela mostra o aviso em vez do número.', how: 'Texto Em revisão e triângulo âmbar.' },
    ],
  },
  does: [
    'Compara o seu laboratório com a soma dos concorrentes no mesmo mercado, nas mesmas lojas e no mesmo período.',
    'Mostra a participação estimada por laboratório e por produto.',
    'Lista as lojas e as redes por volume, com a cobertura de monitoramento.',
    'Mostra as lojas onde só o concorrente vende.',
    'Exporta a tabela, com o filtro atual.',
    'Guarda visualizações, com mercado e Brick, para voltar ao recorte.',
  ],
  doesNot: [
    'Não mostra venda real, nota fiscal nem sell-out auditado. A venda é estimada pelo movimento de estoque.',
    'Não mostra o concorrente produto a produto. Os dados de concorrentes são agregados.',
    'Não cobre todo o varejo. Cobre as redes do contrato.',
    'Não calcula variação de participação em pontos percentuais. Essa leitura fica em Oportunidades.',
    'Não é tempo real. O dado vai até o dia anterior.',
    'Não promete ganho de participação nem de venda.',
  ],
  use: {
    title: 'Como usar bem',
    consult: [
      'Escolha o Mercado. Ele é obrigatório e volta ao padrão se você esvaziar a lista.',
      'Escolha o Brick e o período de 30, 60 ou 90 dias. O gráfico de vendas tem período próprio.',
      'Salve o recorte que você usa e volte a ele com o botão Ver.',
    ],
    analyze: [
      'Seu laboratório estável e Concorrentes subindo? A participação pode cair sem queda de venda, porque o mercado cresceu. Veja em quais redes e lojas os concorrentes mais vendem.',
      'Seu laboratório caindo e Concorrentes estáveis ou subindo? Pode haver perda de venda. Confira a cobertura e as lojas com Sem meu lab.',
      'Os dois caindo? O mercado encolheu ou a medição mudou. Compare a participação e a cobertura das redes antes de concluir.',
      'Seu laboratório subindo e Concorrentes estáveis? Você pode estar ganhando espaço. Confirme em Oportunidades, com a margem de 1,3 p.p.',
      'Antes de agir, confira a cobertura da rede. Loja sem registro de estoque pode parecer sem o seu produto.',
    ],
    extract: [
      'Use o botão de download ao lado dos filtros da tabela, por PDV ou por rede.',
      'O arquivo leva todas as linhas do filtro atual, sem paginar. Os nomes são mercado-pdvs e mercado-redes, com a data.',
      'O arquivo Excel é um .xls. O Excel pode avisar sobre o formato ao abrir.',
      'Pergunte à Jean quem ganhou participação ou o que mudou no último trimestre. Ela recebe o seu recorte.',
    ],
    formats: ['CSV', 'Excel (XLS)', 'PDF', 'JSON'],
    note: 'Esta leitura é um sinal para investigar. Não é prova. A variação de participação, com margem, fica em Oportunidades.',
  },
  related: {
    title: 'Junto com outras funcionalidades',
    intro: 'O Mercado mostra o quadro geral. Estas funcionalidades mostram onde agir.',
    items: [
      { slug: 'oportunidades', name: 'Oportunidades', text: 'Para ver a variação de participação por estado, cidade e Brick.' },
      { slug: 'preco', name: 'Preço', text: 'Para comparar o preço do seu produto entre as lojas.' },
      { slug: 'ruptura', name: 'Ruptura', text: 'Para ver se a queda vem de produto em falta.' },
      { slug: 'jean', name: 'Jean', text: 'Pergunte o que mudou no seu mercado e receba o resumo.' },
    ],
  },
  faq: [
    { question: 'As vendas são reais?', answer: 'Não. São estimadas pelo movimento de estoque. Não são notas fiscais nem sell-out auditado.' },
    { question: 'O dado é em tempo real?', answer: 'Não. A tela mostra o período escolhido, até o dia anterior (D-1).' },
    { question: 'O que é "mercado"?', answer: 'É o conjunto de produtos que competem com o seu. A Dinn configura o mercado padrão do seu laboratório.' },
    { question: 'Vejo os concorrentes um a um?', answer: 'Não. A tela mostra a participação por laboratório e por produto, e o total dos concorrentes somado. Os dados são agregados e respeitam direitos de uso.' },
    { question: 'Por que a cobertura passa de 100%?', answer: 'O cadastro da rede pode estar desatualizado. A tela mostra o número da fonte e não corrige.' },
    { question: 'Por que a curva cai no fim?', answer: 'A última semana pode estar incompleta. O balão mostra "(parcial)".' },
    { question: 'Qual a margem de uma variação de participação?', answer: 'Mais ou menos 1,3 ponto percentual. Os dados partem da posição de estoque e podem diferir de auditorias de venda. Essa leitura fica em Oportunidades.' },
    { question: 'Quem vê a tela?', answer: 'Quem contratou o Mercado. Os demais veem um cadeado.' },
  ],
  cta: {
    title: 'Quer ver o Mercado com o seu recorte?',
    text: 'Conte qual é o seu mercado. Uma pessoa do time da Dinn responde.',
    button: 'Falar com a Dinn',
  },
};
