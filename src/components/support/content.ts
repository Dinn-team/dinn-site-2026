// Textos da página /suporte (português). Os textos de interface das maquetes são
// os exatos do portal (docs/suporte/SUPORTE_DINN.md, seção 5). Dados fictícios:
// SAU-0042, Drogaria Exemplo. Sem prazo de resposta, SLA nem horário de atendimento.

// CONFIRMAR com o Renan: o atendimento da Zoe já está em produção? Enquanto não
// houver confirmação, estes textos afirmam que ela responde. Para suavizar, troque
// `ZOE_LIVE` por false: o título e o subtítulo passam a falar no futuro.
export const ZOE_LIVE = true;

export const hero = ZOE_LIVE
  ? {
      title: 'Dúvida? A Zoe responde aqui mesmo.',
      sub: 'O atendimento fica dentro da plataforma. Quando o caso pede uma pessoa, a equipe Dinn assume o mesmo pedido.',
    }
  : {
      title: 'Dúvida? Peça ajuda sem sair da plataforma.',
      sub: 'A Zoe, agente de IA da Dinn, vai atender você aqui. Quando o caso pede uma pessoa, a equipe Dinn assume o mesmo pedido.',
    };

export const zoe = { name: 'Zoe', role: 'Agente de IA da Dinn' };

export const steps = [
  { title: 'Peça ajuda em qualquer tela', text: 'Use o Suporte no menu. Em erros e em funcionalidades bloqueadas, o link já aparece na tela.' },
  { title: 'A Zoe investiga e responde', text: 'Ela consulta os dados da sua empresa, só para leitura, e responde no chat.' },
  { title: 'A equipe assume, se precisar', text: 'Quando o caso pede uma pessoa, a equipe Dinn continua o mesmo pedido. Você não repete nada.' },
];

export const doors = [
  { id: 'menu', title: 'Pelo menu', text: 'Em qualquer tela do portal, clique em Suporte no menu lateral. Ele fica abaixo das telas do produto.' },
  { id: 'erro', title: 'Pela tela de erro', text: 'Quando algo quebra, a tela mostra o código do erro e o botão Abrir pedido no Suporte. O pedido já vai com a tela e o código.' },
  { id: 'bloqueada', title: 'Pela funcionalidade bloqueada', text: 'Em uma funcionalidade que a sua empresa não contratou, o link Suporte aparece abaixo do cadeado. O pedido já vai com o nome da funcionalidade.' },
];

export const inside = [
  { id: 'novo', tab: 'Novo pedido', title: 'Um formulário curto', text: 'Assunto, o que está acontecendo, o tipo de pedido e até 3 prints. Você pode colar a imagem com Ctrl+V.' },
  { id: 'conversa', tab: 'Conversa', title: 'A Zoe responde no chat', text: 'Enquanto ela trabalha, a tela mostra o que ela está conferindo. Você pode sair da tela: a resposta fica aqui.' },
  { id: 'encerrar', tab: 'Encerrar', title: 'Você encerra quando resolver', text: 'Um pedido encerrado não pode ser reaberto. Um pedido resolvido reabre se você escrever nele.' },
];

export const statuses = [
  { label: 'Em atendimento', tone: 'blue', tab: 'Em andamento', note: 'A Zoe está atendendo.' },
  { label: 'Com a equipe Dinn', tone: 'brand', tab: 'Em andamento', note: 'O pedido foi encaminhado a uma pessoa.' },
  { label: 'Aguardando sua resposta', tone: 'amber', tab: 'Aguardando você', note: 'Falta uma resposta sua.' },
  { label: 'Resolvido', tone: 'green', tab: 'Encerrados', note: 'Ainda aceita mensagem.' },
  { label: 'Encerrado', tone: 'grey', tab: 'Encerrados', note: 'Não aceita mensagem.' },
];

export const presence = [
  { label: 'Enviada', text: 'A sua mensagem foi enviada.' },
  { label: 'Lida', text: 'A Zoe começou a ler, ou já respondeu.' },
  { label: 'Nova resposta', text: 'Marcador roxo na lista e título em negrito.' },
  { label: 'Conferindo o estoque', text: 'A linha de atividade muda conforme a etapa: Lendo sua mensagem, Analisando, Consultando o cadastro e outras.' },
];

export const does = [
  'Consulta, só para leitura, o cadastro da sua empresa, as funcionalidades e os limites contratados, os usuários, o PDV, o produto, o estoque dos últimos 7 dias e os pedidos anteriores.',
  'Responde no chat com acolhimento e diz o que apurou, o que não apurou e o próximo passo.',
  'Se apresenta como agente de IA quando perguntada.',
  'Encaminha o pedido para a equipe Dinn, com o contexto completo, quando a solução precisa de uma pessoa.',
];
export const doesNot = [
  'Não altera dado, cadastro, acesso, configuração, funcionalidade nem contrato.',
  'Não promete prazo, desconto, reembolso nem resultado.',
  'Não fala de outro cliente. A consulta fica presa à empresa do pedido.',
];
export const zoeKey = 'A Zoe consulta os dados da sua empresa, mas não altera nada. Quando a solução precisa de uma pessoa, ela encaminha o pedido para a equipe.';

export const goodRequest = {
  intro: 'Quanto mais detalhes você der, mais rápido a gente resolve. Deixe à mão:',
  items: [
    'Nome e CNPJ do PDV (a loja)',
    'Produto ou código de barras (EAN)',
    'Print da tela mostrando o problema',
    'Desde quando acontece',
    'O que você esperava ver',
  ],
  types: ['Acesso e login', 'Dado de estoque ou ruptura', 'Cadastro de PDV ou produto', 'Funcionalidade bloqueada', 'Erro no sistema', 'Contrato e financeiro', 'Dúvida de uso', 'Outro'],
  safety: 'Nunca envie senha, token, código OAuth ou dado de paciente. A equipe Dinn não precisa desses dados para atender.',
};

export const team = {
  title: 'Quando a equipe Dinn assume',
  text: 'A Zoe encaminha o pedido com o contexto completo. As mensagens da equipe aparecem na mesma conversa, com o nome Equipe Dinn, e as respostas chegam por aqui.',
  destinations: [
    { title: 'Produto e tecnologia', text: 'Acesso, funcionalidades, dados e erros do sistema.' },
    { title: 'Contrato e financeiro', text: 'Planos, contrato e cobrança.' },
  ],
};

export const faq = [
  { question: 'Posso reabrir um pedido encerrado?', answer: 'Não. Um pedido encerrado não pode ser reaberto. Abra um novo pedido. Um pedido resolvido reabre se você escrever nele.' },
  { question: 'Quantos prints posso enviar?', answer: 'Até 3 imagens por mensagem, em PNG, JPG, WEBP ou GIF. O portal reduz o tamanho sozinho.' },
  { question: 'Quem pode usar o Suporte?', answer: 'Usuários logados no portal. Quem não tem acesso vê: Sua conta não tem acesso ao Suporte. Fale com o administrador da sua empresa.' },
  { question: 'A Zoe é uma pessoa?', answer: 'Não. A Zoe é um agente de IA e se apresenta assim quando perguntada. Quando o caso pede uma pessoa, a equipe Dinn assume.' },
  { question: 'A Zoe altera os meus dados?', answer: 'Não. Ela só consulta os dados da sua empresa. Mudanças de dado, acesso, configuração ou contrato passam pela equipe Dinn.' },
  { question: 'Quantos pedidos posso abrir?', answer: 'Até 10 pedidos por pessoa por dia.' },
  { question: 'Como exerço meus direitos de titular ou aviso um incidente de segurança?', answer: 'Escreva para vini@dinn.ai, o Encarregado de Proteção de Dados. Em caso de suspeita de acesso indevido ou incidente, peça classificação como incidente de segurança.' },
];

export const cta = {
  title: 'Quer ver o Suporte na prática?',
  text: 'Conte o que você precisa. Uma pessoa do time da Dinn responde.',
  button: 'Falar com a Dinn',
};

// Cada grupo de situações, por aba do portal.
export const groups = [
  { tab: 'Em andamento', text: 'Pedidos que a Zoe ou a equipe Dinn estão atendendo.', statuses: [statuses[0], statuses[1]] },
  { tab: 'Aguardando você', text: 'Pedidos que esperam uma resposta sua.', statuses: [statuses[2]] },
  { tab: 'Encerrados', text: 'Pedidos resolvidos ou encerrados.', statuses: [statuses[3], statuses[4]] },
];
