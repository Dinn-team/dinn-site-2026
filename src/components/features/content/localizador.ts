import type { FeatureContent } from '../types';

// Localizador de Produtos. Fonte: dinn-manager-app/docs/site-reproducao/funcionalidades/localizador.md (A1 a A10).
// Regras: o mapa e a lista são do dia anterior (D-1), em faixa. Só "Consultar agora" lê a loja na hora.
// Sem exportação. Chance de estoque não é garantia.
export const localizador: FeatureContent = {
  slug: 'localizador',
  meta: {
    title: 'Localizador de Produtos | Dinn',
    description: 'Encontre as lojas que têm o produto, perto de qualquer endereço. Nível de estoque do dia anterior e consulta na hora em loja compatível.',
  },
  hero: {
    title: 'Encontre as lojas que têm o produto, perto de qualquer endereço.',
    sub: 'Informe o produto e o endereço. A Dinn mostra no mapa as farmácias ao redor, o nível de estoque, a confiabilidade da informação e a data da leitura.',
    note: 'Dado de ontem (D-1). Estoque agora, só quando você consulta.',
  },
  steps: [
    { title: 'Informe o produto e o endereço', text: 'Busque o produto por nome ou SKU. Digite o endereço de referência. Escolha o raio, de 5 a 50 km.' },
    { title: 'Leia o mapa e a lista', text: 'Cada pino é uma farmácia, colorido pelo nível de estoque de ontem. A lista traz faixa, confiabilidade, distância e, se contratado, preço.' },
    { title: 'Abra a loja e confirme', text: 'Veja giro, estoque parado e a rota. Em loja compatível, consulte agora e veja o horário da resposta.' },
  ],
  doors: {
    title: 'Três perguntas que o Localizador responde',
    intro: 'Cada uma começa na mesma busca e termina num ponto diferente da tela.',
    items: [
      {
        title: 'A ligação do consumidor',
        text: 'Um paciente pergunta onde achar um produto. Busque pelo endereço dele e responda com a loja mais próxima e a data da informação. Não ligue loja por loja.',
        shot: { screen: 'locator', phase: 6, to: 'map' },
      },
      {
        title: 'A visita desta tarde',
        text: 'Antes de falar com a rede, consulte a loja. Em loja compatível, você vê o que ela informa agora e leva esse dado à conversa.',
        shot: { screen: 'locator', phase: 9, to: 'p-box' },
      },
      {
        title: 'Depois da reposição',
        text: 'A rede combinou uma entrega? Consulte a mesma loja de novo e veja se o produto aparece na resposta.',
        shot: { screen: 'locator', phase: 9, to: 'popup' },
      },
    ],
  },
  jean: {
    lead: 'Peça o produto e a cidade. A Jean abre o Localizador já preenchido.',
    prompts: ['Onde encontro Cefalgin cápsula 400mg em São Paulo?', 'Quais farmácias de Campinas têm Cefalgin em estoque?', 'Posso confirmar se ainda tem estoque agora?'],
    turns: [
      { q: 'Onde encontro Cefalgin em São Paulo?', a: 'Há 128 farmácias num raio de 5 km. Estas tinham estoque na leitura de ontem.',
        card: { title: 'Mais próximas com estoque', rows: [['Rede Farmacore Jardim América', '4–9 un'], ['Drogaria Serrana Ipiranga', '7–19 un']] },
        steps: ['Abrir no Localizador'],
      },
      { q: 'Posso confirmar o estoque agora?', a: 'Sim, em loja compatível. Clique em Consultar agora. A resposta mostra o horário.',
      },
    ],
  },
  inside: {
    title: 'Da busca à orientação, em cinco passos',
    sub: 'Role para ver cada etapa.',
    stages: [
      {
        tab: 'Localizar',
        title: 'Informe o endereço e o raio',
        text: 'Informe o endereço ou a área e o raio. As farmácias próximas aparecem no mapa.',
        shot: { screen: 'locator', phase: 3, to: 'form' },
      },
      {
        tab: 'Escolher a loja',
        title: 'Abra uma loja',
        text: 'A leitura de base é de ontem. Só as lojas compatíveis têm a consulta.',
        shot: { screen: 'locator', phase: 7, to: 'popup' },
      },
      {
        tab: 'Consultar agora',
        title: 'Pergunte à fonte da loja',
        text: 'A Dinn pergunta à fonte da loja naquele momento.',
        shot: { screen: 'locator', phase: 8, to: 'p-box' },
      },
      {
        tab: 'Resposta',
        title: 'Resposta e horário',
        text: 'A resposta mostra o horário da consulta, separada da leitura de ontem.',
        shot: { screen: 'locator', phase: 9, to: 'p-box' },
      },
      {
        tab: 'Orientar',
        title: 'Compartilhe',
        text: 'Oriente o consumidor com o que a loja informou e quando. Abra a rota e compartilhe o endereço.',
        shot: { screen: 'locator', phase: 9, to: 'popup' },
      },
    ],
  },
  read: {
    title: 'Como ler o resultado',
    intro: 'O Localizador mostra três leituras diferentes. Veja qual delas está na tela.',
    rows: [
      { label: 'Estoque de ontem (D-1)', text: 'Faixa de estoque lida no dia anterior. Não mostra o número exato.', how: 'Aparece como 4–9 un, com a data da estimativa.' },
      { label: 'Estoque estimado', text: 'Calculado do histórico da loja. Sempre vem com a confiabilidade.', how: 'Etiqueta Estoque estimado no popup.' },
      { label: 'Resposta ao vivo', text: 'O que a loja respondeu no clique, com o horário. Só em loja compatível.', how: 'Aparece como 6 un, com Consulta feita agora e a hora.' },
      { label: 'Nível do pino', text: 'Alto em verde, Médio em âmbar, Baixo em vermelho, Indisponível em cinza.', how: 'Cor do pino e da faixa na lista.' },
      { label: 'Estoque exato ou estimado', text: 'Exato é a leitura do e-commerce da loja. Estimado é a projeção do modelo. Os dois aparecem como faixa.', how: 'Etiqueta verde ou roxa no topo do popup.' },
      { label: 'Confiabilidade', text: 'A, Confiável. B, Verificação recomendada. Mede o quanto confiar na informação da loja.', how: 'Linha Confiabilidade do estoque no popup.' },
      { label: 'Cobertura estimada', text: 'Quanto tempo o estoque deve durar, pelo histórico recente. É estimativa, não garantia.', how: 'Selo Pode acabar em 5 a 7 dias.' },
      { label: 'Giro e Parado', text: 'Giro é a média de unidades que saíram do estoque por dia, nos últimos 30 dias. Parado mostra há quantos dias o estoque não se mexe.', how: 'Dois cartões ao lado do estoque.' },
    ],
  },
  does: [
    'Busca farmácias num raio de 5 a 50 km, com padrão de 5 km, ao redor de um endereço, para um produto.',
    'Mostra o nível, a faixa de estoque de ontem, a confiabilidade, a cobertura estimada, o giro e os dias parados.',
    'Mostra o preço observado na loja, com a data da leitura, para quem contratou o preço.',
    'Em loja compatível, consulta o estoque na hora e mostra a quantidade com o horário.',
    'Abre a rota no Google Maps, copia o telefone, abre o site da loja e copia endereço e link.',
    'Deixa quem conferiu a loja informar o estoque real, para melhorar o modelo.',
  ],
  doesNot: [
    'Não mostra o número exato do dia anterior. Só faixa e nível.',
    'Não é tempo real. O mapa e a lista são de ontem.',
    'Não garante que o produto está na prateleira.',
    'Não desenha o raio no mapa. O raio só limita a busca.',
    'Não consulta todas as lojas ao vivo. Depende de rede, fonte e escopo contratado.',
    'Não exporta lista, mapa ou planilha.',
  ],
  use: {
    title: 'Como usar bem',
    consult: [
      'Comece com o raio de 5 km e aumente se faltar loja.',
      'Marque Com estoque para ver só as lojas que têm o produto.',
      'Leia a data da informação antes de indicar uma loja.',
    ],
    analyze: [
      'Prefira Estoque exato e confiabilidade A.',
      'Use Consultar agora antes de indicar uma loja ao consumidor.',
      'Compare o preço só entre lojas com leitura recente.',
      'Se o estoque que você viu na loja for diferente, use Reportar.',
    ],
    extract: [
      'Use Abrir no Maps, Copiar telefone, Abrir site e Compartilhar.',
      'Para o consumidor, diga: a loja informou agora. O estoque pode mudar. Confirme antes de ir.',
      'A busca traz até 1.500 lojas. Não há exportação em arquivo.',
    ],
    note: 'Reportar estoque não é exportação. O dado vai para melhorar o modelo e não corrige o número na hora.',
  },
  related: {
    title: 'Junto com outras funcionalidades',
    intro: 'O Localizador junta num cartão o que outras funcionalidades medem em escala.',
    items: [
      { slug: 'giro', name: 'Giro', text: 'Os cartões Giro e Parado do popup vêm do Giro.' },
      { slug: 'preco', name: 'Preço', text: 'O preço de cada loja aparece no cartão, com a data da leitura.' },
      { slug: 'ruptura', name: 'Ruptura', text: 'Para ver a carteira inteira antes de escolher onde olhar.' },
      { slug: 'distribuicao', name: 'Distribuição', text: 'Se a loja não tem o produto, veja o CD que abastece a região.' },
    ],
  },
  faq: [
    { question: 'O mapa mostra o estoque de agora?', answer: 'Não. O mapa e a lista são do dia anterior (D-1), em faixa. Só o botão Consultar agora lê o estoque na hora.' },
    { question: 'Por que não aparece o número exato?', answer: 'No dado de ontem aparece uma faixa. O número só vem na consulta ao vivo.' },
    { question: 'A resposta garante que o produto está lá?', answer: 'Não. O estoque pode mudar depois da resposta. Por isso a tela mostra o horário.' },
    { question: 'Todas as lojas têm Consultar agora?', answer: 'Não. Só lojas com leitura do e-commerce, conforme rede, fonte e escopo contratado.' },
    { question: 'Qual a diferença entre Estoque exato e Estoque estimado?', answer: 'Exato é a leitura do e-commerce da loja. Estimado é uma projeção. Os dois aparecem como faixa.' },
    { question: 'O que significam A e B?', answer: 'É a confiabilidade da informação. A é a mais alta. B pede verificação.' },
    { question: 'Qual o raio máximo?', answer: 'O máximo é 50 km. O raio vai de 5 a 50 km, com padrão de 5 km. Ele limita a busca e não é desenhado no mapa.' },
    { question: 'Quantas lojas a busca traz?', answer: 'Até 1.500 lojas por consulta.' },
    { question: 'Posso baixar a lista?', answer: 'Não. Dá para abrir a rota, copiar o telefone e compartilhar o endereço.' },
    { question: 'O que acontece quando eu reporto um estoque?', answer: 'O dado é gravado para melhorar o modelo. O número não muda na hora.' },
    { question: 'Por que alguns preços aparecem como --?', answer: 'A loja não envia o preço, o produto não teve leitura de preço nos últimos 7 dias ou a loja é de estoque estimado.' },
  ],
  cta: {
    title: 'Quer ver a consulta com a sua rede e o seu produto?',
    text: 'Validamos produtos, redes, regiões e a decisão que sua equipe quer melhorar.',
    button: 'Falar com a Dinn',
  },
};
