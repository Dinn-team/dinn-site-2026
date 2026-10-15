import { offerPt } from './pt.offer';
import { platformVizPt } from './pt.platform';

// Textos das páginas internas do site (plataforma, soluções por área,
// confiança, clientes, recursos) e das seções novas da home (áreas e
// conteúdos). Fonte: síntese de decisão de 14/10/2026
// (dinn_avaliacao_conteudo_site_2026_sintese.md). Regra editorial do documento:
// toda afirmação diz o que a Dinn observa, o que estima, o que ajuda a
// interpretar e o que depende de validação do cliente.

export const pagesPt = {
  platformViz: platformVizPt,
  ...offerPt,
  areas: {
    eyebrow: "Para a sua área",
    title: "Comece pelo problema do *seu time*",
    intro: "Cada área chega com uma pergunta diferente. Escolha a sua e veja decisões apoiadas, um exemplo e os limites da leitura.",
    open: "Ver a Dinn para esta área",
    questionPrefix: "A pergunta:"
  },

  contentTeaser: {
    eyebrow: "Recursos",
    title: "Para quem ainda não está pronto para uma demonstração",
    items: [
      {
        type: "Blog",
        title: "Análises e artigos sobre o canal farmacêutico",
        desc: "Ruptura de estoque, execução comercial e inteligência de dados em farma.",
        href: "/blog"
      },
      {
        type: "Caso de uso",
        title: "Quantos dias de produto restam em Fortaleza?",
        desc: "A resposta estava no estoque parado de todos os PDVs da cidade.",
        href: "/recursos/casos/dias-de-estoque-fortaleza"
      },
      {
        type: "Novidades",
        title: "O que entrou no ar na Dinn",
        desc: "Cada novidade da plataforma em produção, explicada em linguagem simples e organizada por data.",
        href: "/recursos/changelog"
      }
    ]
  },

  contact: {
    meta: {
      title: "Contato | Dinn",
      description: "Conte qual decisão do canal farmacêutico você quer melhorar e receba o retorno de uma pessoa do time da Dinn."
    },
    navLabel: "Contato",
    hero: {
      eyebrow: "Contato",
      title: "Conte o que você quer *melhorar no canal*",
      lead: "Quatro campos e pronto. Uma pessoa do time lê o seu pedido e responde com o próximo passo."
    },
    after: {
      title: "O que acontece depois",
      steps: [
        { title: "Recebemos o seu pedido", text: "Ele chega direto ao time, com o papel e a decisão que você indicou." },
        { title: "Uma pessoa responde", text: "Retorno por e-mail em poucos dias úteis, referenciando o que você pediu." },
        { title: "Você decide o ritmo", text: "Se fizer sentido, marcamos uma conversa curta. Se não, ficamos por aqui." }
      ]
    },
    form: {
      title: "Fale com a Dinn",
      lead: "Leva menos de um minuto.",
      email: "E-mail corporativo",
      emailPlaceholder: "voce@suaempresa.com.br",
      emailHint: "Usamos o domínio para identificar a empresa.",
      company: "Empresa",
      role: "Seu papel",
      decision: "Decisão que quer melhorar",
      choose: "Selecione",
      name: "Nome",
      optional: "(opcional)",
      roles: [
        { value: "comercial_trade", label: "Comercial ou Trade" },
        { value: "inteligencia_dados", label: "Inteligência ou Dados" },
        { value: "marca_lancamento", label: "Marca ou Lançamento" },
        { value: "operacao_campo", label: "Operação de campo" },
        { value: "ti_seguranca_compras", label: "TI, Segurança ou Compras" },
        { value: "direcao", label: "Direção ou Executivo" },
        { value: "outro", label: "Outro" }
      ],
      decisions: [
        { value: "disponibilidade_execucao", label: "Disponibilidade e execução no ponto de venda" },
        { value: "confianca_dado", label: "Confiança no dado" },
        { value: "lancamento", label: "Lançamento de produto" },
        { value: "preco", label: "Preço frente ao mercado" },
        { value: "integracao", label: "Integração com BI, CRM ou agentes" }
      ],
      consent: "Autorizo a Dinn a usar estes dados para responder a este pedido e enviar comunicações relacionadas a ele.",
      privacy: "Política de privacidade",
      submit: "Enviar pedido",
      sending: "Enviando…",
      fine: "Só usamos o que você preencheu aqui. Sem lista de e-mails em massa."
    },
    errors: {
      required: "Preencha este campo.",
      requiredChoice: "Selecione uma opção.",
      emailInvalid: "Informe um e-mail válido.",
      emailPersonal: "Use o e-mail da sua empresa. Não aceitamos endereços pessoais, como Gmail ou Outlook.",
      consent: "É preciso autorizar para enviar o pedido.",
      submit: "Não conseguimos enviar agora. Tente de novo em instantes ou",
      submitLink: "agende direto"
    },
    done: {
      title: "Pedido recebido",
      text: "Obrigado. Uma pessoa do time vai ler o seu pedido e responder por e-mail em poucos dias úteis.",
      schedule: "Agendar uma conversa",
      home: "Voltar ao início"
    }
  },

  pageCta: {
    title: "Veja como isso funciona com os seus produtos",
    desc: "Numa demonstração, a Dinn mostra a leitura com o seu portfólio, a sua carteira e as suas regiões.",
    button: "Solicitar demo",
    secondary: "Ver todas as soluções"
  },

  solutions: {
    page: {
      eyebrow: "Soluções",
      back: "Todas as soluções",
      questionLabel: "A pergunta que traz a sua área aqui",
      decisionsLabel: "Decisões que a Dinn apoia",
      exampleLabel: "Um exemplo, passo a passo",
      limitsLabel: "Limites da leitura",
      useCasesLabel: "Situações concretas desta área",
      useCaseOpen: "Ver na home",
      trustCta: "Como tratamos origem, data e confiança",
      otherLabel: "Outras áreas"
    },
    items: [
      {
        slug: "inteligencia-pricing",
        name: "Inteligência & Pricing",
        short: "Entenda movimentos de disponibilidade, preço, giro e concorrência.",
        question: "Qual é a origem e até onde posso confiar?",
        title: "Movimentos de preço, giro e concorrência, *com a origem à vista*",
        lead: "Para quem precisa explicar um número antes de levá-lo adiante: cada leitura traz fonte, data, cobertura e limite.",
        decisions: [
          "Separar uma mudança pontual de um movimento que persiste no tempo.",
          "Distinguir queda de participação de queda de venda, nas mesmas lojas.",
          "Complementar os dados consolidados de mercado quando a decisão pede mais granularidade e contexto operacional."
        ],
        example: {
          title: "Seu laboratório cresceu 6% nas mesmas lojas; a categoria, 11%",
          steps: [
            "Sinal: a participação cai na região.",
            "Validação: só entram lojas comparáveis, presentes nas duas janelas de tempo.",
            "Leitura: a queda vem de outros produtos crescerem mais, não de a venda ter diminuído.",
            "Próximo passo: olhar as lojas onde só o concorrente aparece com estoque."
          ]
        },
        limits: [
          "A venda é estimada pela movimentação de estoque, não por sell-out auditado.",
          "Dados de concorrentes aparecem agregados.",
          "A Dinn complementa as auditorias de mercado; não as substitui."
        ],
        useCases: ["concorrencia", "demanda"]
      },
      {
        slug: "trade-kam-campo",
        name: "Trade, KAM & Campo",
        short: "Priorize contas, territórios e conversas com o contexto mais recente.",
        question: "Quem eu priorizo e o que levo para a conversa?",
        title: "Uma fila de lojas e contas, *com o que conferir em cada uma*",
        lead: "Em vez de um painel para interpretar, uma lista priorizada com o sinal, a data e a pergunta a responder.",
        decisions: [
          "Começar a semana pelas lojas que mais pesam na ruptura do recorte.",
          "Levar à rede evidência por loja, com data, em vez de uma impressão geral.",
          "Rever o mesmo recorte depois da ação e registrar o retorno."
        ],
        example: {
          title: "6 das 40 lojas da carteira concentram 70% do sinal",
          steps: [
            "Sinal: ruptura persistente em lojas da carteira, na última semana.",
            "Validação: nível calculado por dias sem estoque ÷ dias observados nos últimos 30 dias.",
            "Fila: as lojas em ordem, com o que conferir em cada uma (pedido pendente? fora da gôndola?).",
            "Retorno: o time registra o que encontrou e acompanha o mesmo recorte para revisar prioridades."
          ]
        },
        limits: [
          "A Dinn prepara a lista; quem monta a agenda é o seu time.",
          "Nada é escrito no CRM por conta própria: a leitura serve para preparar a visita.",
          "Lojas que nunca venderam o produto ficam de fora, para não inflar a ruptura."
        ],
        useCases: ["campo"]
      },
      {
        slug: "supply-distribuicao",
        name: "Supply & Distribuição",
        short: "Investigue cobertura, disponibilidade e possíveis restrições de abastecimento.",
        question: "Onde pode haver problema de cobertura ou abastecimento?",
        title: "O furo está no CD, na reposição ou na farmácia? *Veja os dois lados.*",
        lead: "A leitura cruza o estoque no distribuidor com a disponibilidade nas farmácias da região, sempre com ressalvas causais explícitas.",
        decisions: [
          "Separar falta na origem de falha de reposição.",
          "Antecipar o pedido quando a cobertura do CD cai.",
          "Avaliar remanejamento onde há estoque parado perto de lojas em ruptura."
        ],
        example: {
          title: "CD com saldo e farmácias sem o produto",
          steps: [
            "Sinal: 38% das farmácias da região estão sem o produto.",
            "Validação: cobertura do CD = estoque no CD ÷ venda diária estimada da região.",
            "Leitura: o padrão aponta para quebra de distribuição ou de reposição, não para falta na origem.",
            "Antes de concluir: confirmar pedidos pendentes nas redes afetadas."
          ]
        },
        limits: [
          "Estoque no CD não prova estoque na farmácia: a leitura cruza as duas pontas.",
          "O padrão é uma hipótese; a causa exige investigação.",
          "A cobertura do CD usa a venda estimada da região: é uma aproximação, não a cobertura real daquele CD, e só vale com demanda compatível com a população que ele abastece.",
          "Movimento observado não equivale a venda confirmada."
        ],
        useCases: ["distribuicao", "parado"]
      },
      {
        slug: "sac-customer-experience",
        name: "SAC & Customer Experience",
        short: "Oriente consumidores com clareza sobre disponibilidade e proximidade.",
        question: "Como oriento alguém sem induzir ao erro?",
        title: "Onde o consumidor tem boa chance de achar o produto, *e com que segurança*",
        lead: "Disponibilidade, proximidade e atualização na mesma tela, com a fonte e a data de cada indicação.",
        decisions: [
          "Indicar a farmácia próxima com maior chance de ter o produto.",
          "Saber se a informação é observada ou estimada antes de orientar.",
          "Mostrar ao trade onde a procura não encontra produto."
        ],
        example: {
          title: "As cinco farmácias mais próximas do consumidor",
          steps: [
            "Entrada: o endereço do consumidor.",
            "Leitura: estoque observado (D-1) ou estimado por lojas comparáveis, com a confiança.",
            "Orientação: disponibilidade e proximidade, não o menor preço.",
            "Padrão: duas lojas sem o produto há uma semana viram pauta de reposição."
          ]
        },
        limits: [
          "A leitura de base é D-1; em lojas compatíveis, há consulta em tempo real sob demanda, com o horário da resposta.",
          "Chance de estoque não é garantia de estoque, e a orientação deve dizer isso.",
          "A cobertura varia por rede e por fonte."
        ],
        useCases: ["sac"]
      },
      {
        slug: "marketing-lancamentos",
        name: "Marketing & Lançamentos",
        short: "Acompanhe presença, evolução de cobertura e sinais de execução do lançamento.",
        question: "A execução está evoluindo onde deveria?",
        title: "Semana a semana, *onde o lançamento já chegou* e onde travou",
        lead: "Presença por rede e região ao longo do tempo, comparada com o plano que o seu time definiu.",
        decisions: [
          "Ver onde o lançamento acelerou e onde segue abaixo do esperado.",
          "Separar problema de sell-in de problema de reposição.",
          "Comparar a evolução por coorte e por canal com a meta definida."
        ],
        example: {
          title: "Seis semanas depois do lançamento",
          steps: [
            "Sinal: o produto aparece em 54% das farmácias monitoradas.",
            "Validação: presença = farmácias com estoque ÷ farmácias monitoradas no recorte, comparada com a meta e a coorte planejadas pelo seu time.",
            "Leitura: acelerou nas grandes redes e segue abaixo de 20% nas independentes.",
            "Próxima pergunta: o CD já recebeu o produto nas regiões onde ele não chegou?"
          ]
        },
        limits: [
          "A semana 1 começa na data de lançamento definida pelo seu time.",
          "A separação por canal segue o que cada fonte permite identificar.",
          "Presença nas farmácias não é sell-out."
        ],
        useCases: ["lancamento"]
      },
      {
        slug: "ti-dados-governanca",
        name: "TI, Dados & Governança",
        short: "Integre sinais com rastreabilidade, controle de acesso e limites explícitos.",
        question: "Como integra, protege e governa?",
        title: "Sinais que chegam ao seu ambiente, *com rastreabilidade e controle de acesso*",
        lead: "API, BI e a IA do cliente consultam a mesma base, com o escopo autorizado e a origem de cada dado preservada.",
        decisions: [
          "Escolher por onde consumir: plataforma, arquivo, API, BI ou a IA do cliente.",
          "Definir quem acessa o quê, com verificação em dois fatores e SSO corporativo sob consulta.",
          "Manter dados internos, infraestrutura e governança sob o controle do cliente."
        ],
        example: {
          title: "Uma pergunta feita na IA do próprio cliente",
          steps: [
            "Entrada: a equipe pergunta no ChatGPT, no Claude ou no Copilot.",
            "Acesso: a IA autorizada consulta o Dinn por MCP, somente leitura.",
            "Resposta: recorte, período, fonte e limites acompanham o número.",
            "Governança: o uso fica dentro do plano e da configuração do ambiente do cliente."
          ]
        },
        limits: [
          "O MCP é uma interface de consulta; não substitui a infraestrutura de dados.",
          "Cada fonte depende de licença, autorização e escopo acordados.",
          "Recursos como agendamento e geração de arquivos dependem do plano e da configuração da IA do cliente."
        ],
        useCases: []
      }
    ]
  },

  platform: {
    meta: {
      title: "Plataforma | Dinn",
      description: "Como a Dinn funciona: observa, valida, ajuda a entender e decidir, entrega a quem executa e aprende com o retorno. Papel de Stock, Manager, Insights, MCP e Conecta."
    },
    hero: {
      eyebrow: "Plataforma",
      title: "Um sistema para ir do *sinal à ação comercial*",
      lead: "A Dinn observa, valida, ajuda a entender e a decidir, leva o resultado a quem executa e aprende com o retorno. Cada parte tem um papel claro."
    },
    cycle: {
      title: "O ciclo, em seis passos",
      intro: "Do sinal solto à ação registrada. O exemplo completo, com um único caso, está na home."
    },
    parts: {
      title: "Cinco partes, com papéis diferentes",
      intro: "Trabalham juntas, mas não são cinco produtos equivalentes: há produto, plataforma, interface e camada de dados. Cada uma diz também o que não faz.",
      notLabel: "O que não é",
      kinds: ["Produto", "Plataforma", "Interface", "Interface técnica", "Camada de dados"],
      items: [
        {
          tag: "Dinn Stock",
          title: "A leitura de disponibilidade",
          desc: "Organiza a leitura de disponibilidade e dos sinais relacionados ao canal, com a origem e a confiança de cada ponto.",
          not: "Ausência de produto é um sinal a validar, não uma ruptura confirmada."
        },
        {
          tag: "Dinn Manager",
          title: "A gestão e a execução",
          desc: "Leva prioridades e contexto para a gestão e para a execução comercial: ruptura, estoque parado, distribuição e mercado no mesmo recorte.",
          not: "A decisão continua com a equipe; a plataforma prepara a leitura."
        },
        {
          tag: "Dinn Insights",
          title: "A conversa com os sinais",
          desc: "Apoia a exploração e a interpretação assistida dos sinais disponíveis: pergunte em português e receba o número, o recorte, a data e o método.",
          not: "Hipóteses aparecem como hipóteses; o Dinn não presume a causa."
        },
        {
          tag: "MCP",
          title: "A interface para a sua IA",
          desc: "Permite que ferramentas autorizadas, como ChatGPT, Claude e Copilot, consultem os dados e as capacidades da Dinn, em acesso somente leitura.",
          not: "Não é a infraestrutura de dados: é uma forma de consultar."
        },
        {
          tag: "Dinn Conecta",
          title: "Os fluxos de dados",
          desc: "Prepara e opera fluxos de dados especializados para o contexto do cliente, padronizando produto, loja e região para o BI e os agentes.",
          not: "Não fecha sozinho o ciclo de execução: entrega dados a quem executa."
        }
      ]
    },
    data: {
      title: "Dados e integrações",
      intro: "A mesma regra vale em toda a plataforma: dizer de onde veio, quando foi observado e até onde vai a cobertura.",
      items: [
        {
          title: "De onde vêm os sinais",
          text: "De fontes digitais das farmácias, consultadas por agentes. Quando há autorização, também de mercado (IQVIA / Close-Up) e de dados internos (ERP e CRM)."
        },
        {
          title: "Com que atualização",
          text: "Base em D-1, com consulta pontual de disponibilidade em lojas elegíveis. Cobertura e atualização variam por fonte, produto, rede e consulta."
        },
        {
          title: "Para onde vão",
          text: "Plataforma, arquivo, API, BI, agentes e a IA do cliente, por MCP. Dados e governança continuam com o cliente."
        },
        {
          title: "Por onde começar",
          text: "Um objetivo e um recorte. A Dinn pode começar só com fontes externas, e a implantação leva até 30 dias após pré-requisitos e escopo acordados."
        }
      ]
    }
  },

  trust: {
    meta: {
      title: "Confiança | Dinn",
      description: "Origem, data e limites de cada sinal: dado observado, estimado e inferido, cobertura, acesso, integrações e implantação."
    },
    hero: {
      eyebrow: "Confiança",
      title: "Origem, data e limites *em cada sinal*",
      lead: "TI, dados, compliance e compras encontram aqui como a Dinn trata a origem do dado, o acesso e a implantação."
    },
    signals: {
      title: "Três tipos de sinal, sempre identificados",
      intro: "A Dinn mostra, no contexto de uso, qual é a natureza de cada informação antes de ela virar prioridade.",
      exampleLabel: "Exemplo",
      items: [
        {
          name: "Observado",
          def: "O que a fonte informou diretamente, com local e horário.",
          example: "A farmácia mostra 12 unidades no canal digital, consultado hoje às 06h."
        },
        {
          name: "Estimado",
          def: "Calculado a partir de lojas comparáveis e do histórico quando a fonte não responde, sempre com nível de confiança.",
          example: "Sem resposta da loja, o estoque é estimado por lojas parecidas da mesma rede."
        },
        {
          name: "Inferido",
          def: "A leitura que sai da combinação de sinais, apresentada como hipótese para o time validar.",
          example: "Várias lojas sem produto e o CD com saldo sugerem falha de reposição, não falta na origem."
        }
      ]
    },
    notProve: {
      title: "O que um sinal não prova",
      intro: "Nomear o limite é parte do produto. É o que permite ao time agir sem ser induzido ao erro.",
      items: [
        "Ausência de produto não é necessariamente ruptura.",
        "Produto no centro de distribuição não prova abastecimento de uma loja específica.",
        "Saldo constante não prova, sozinho, que não houve venda.",
        "Uma recomendação não é uma ação automatizada: a decisão e a execução continuam com a equipe."
      ]
    },
    coverage: {
      title: "Cobertura e atualização",
      items: [
        { title: "Frequência", text: "Base em D-1. Em lojas elegíveis, há consulta pontual de disponibilidade." },
        { title: "Cobertura", text: "Varia por fonte, produto, rede e consulta, e cada leitura informa o que cobre." },
        { title: "Fontes de mercado e internas", text: "Entram quando há licença, autorização e escopo acordados." }
      ]
    },
    security: {
      title: "Acesso, segurança e privacidade",
      items: [
        { title: "Acesso", text: "Verificação em dois fatores por e-mail e controle de permissões. SSO corporativo sob consulta: avalie com a Dinn os requisitos de autenticação da sua empresa e o escopo de implantação." },
        { title: "IA do cliente", text: "As conexões por MCP são autorizadas e de acesso somente leitura." },
        { title: "Dados e governança", text: "Dados internos, infraestrutura e governança do ambiente do cliente continuam com ele. A Dinn responde pelos controles da sua própria camada." },
        { title: "Privacidade", text: "O tratamento de dados pessoais segue a LGPD e está descrito na Política de Privacidade." }
      ],
      privacyLink: "Ler a Política de Privacidade"
    },
    deploy: {
      title: "Implantação",
      text: "A implantação tem escopo delimitado e acontece em até 30 dias depois que pré-requisitos e escopo estão acordados. Pode começar só com fontes externas, sem depender dos sistemas internos do cliente."
    },
    questions: {
      title: "Perguntas que TI e compras costumam fazer",
      items: [
        {
          question: "Que dados da minha empresa a Dinn precisa?",
          answer: "Para começar, nenhum: a leitura pode partir de fontes externas. Dados internos entram quando fizer sentido e com acordo, para enriquecer o contexto."
        },
        {
          question: "Quem controla os dados e a governança?",
          answer: "Os dados internos e a governança do seu ambiente continuam com você. A Dinn prepara e entrega e responde pelos controles da sua própria camada: acesso, permissões e registro."
        },
        {
          question: "Como a nossa IA acessa o Dinn?",
          answer: "Por MCP, com acesso autorizado e somente leitura. Recursos como agendamento e geração de arquivos dependem do plano e da configuração da IA."
        },
        {
          question: "Onde encontro suporte e canal de incidentes?",
          answer: "Na página de Suporte, com orientações para registrar um problema e acionar o canal contratado."
        }
      ],
      supportLink: "Abrir a página de Suporte"
    },
    cta: {
      title: "Precisa homologar com TI, dados ou compras?",
      desc: "Conversamos sobre os requisitos do seu ambiente antes de qualquer implantação.",
      button: "Conversar sobre requisitos"
    }
  },



  cases: {
    meta: {
      title: "Casos de uso | Dinn",
      description: "Galeria de casos de uso da Dinn: histórias do sinal à ação, contadas passo a passo, com origem, validação e aprendizado."
    },
    hero: {
      eyebrow: "Casos de uso",
      title: "Histórias de uso da Dinn, *uma a uma*",
      lead: "Cada caso conta o caminho completo: da situação ao aprendizado, com o que foi observado, como foi validado e o que o time decidiu."
    },
    gallery: { open: "Ler o caso", customer: "Caso de cliente", empty: "Novos casos entram aqui, um a um." },
    detail: {
      back: "Todos os casos",
      problem: "O problema",
      how: "Como o Dinn trabalhou",
      howLead: "Três passos, do dado solto à decisão.",
      solution: "A solução",
      outcome: "O que mudou",
      userLabel: "Relato do usuário",
      preserved: "Relato de usuário · nomes e dados preservados",
      stepsTitle: "Do sinal ao aprendizado",
      byline: "Equipe Dinn",
      relatedTitle: "Continue por aqui",
      areaLabel: "Área"
    },
    stepLabels: {
      situation: "Situação",
      signal: "Sinal observado",
      validation: "Como foi validado",
      decision: "Decisão apoiada",
      action: "Ação tomada",
      learning: "Aprendizado"
    },
    rules: {
      title: "Como contamos os casos",
      items: [
        "Os casos são relatos de usuários da Dinn; nomes, produtos e dados são preservados.",
        "Quando há resultado mensurável, informamos período, universo e método.",
        "Quando não há, relatamos o ganho operacional comprovado, sem convertê-lo em impacto financeiro.",
        "Participação e venda são estimadas: quando um número aparece, dizemos o mercado, a janela e o método."
      ]
    }
  },

  caseScenes: {
    "frozen-stock": {
      title: "Estoque parado de cada PDV de Fortaleza somado e convertido em dias disponíveis",
      city: "Fortaleza", pdv: "PDV", total: "Estoque", frozen: "Estoque parado", sum: "Soma da cidade",
      days: "Dias disponíveis", need: "Necessário", covered: "Cidade coberta"
    },
    "distributor-gap": {
      title: "Quatro hipóteses para o furo de reposição, e a janela de compra do distribuidor",
      demand: "Demanda na região", rotation: "Giro nas lojas", delay: "Atraso de entrega", noBuy: "Falta de pedido do PDV",
      exists: "Existe", ruled: "Descartado", window: "Janela de compra do distribuidor", replenish: "Reposição comunicada"
    },
    "sac-locator": {
      title: "Ligações respondidas com o Localizador do Dinn, em menos tempo",
      calls: "Ligações do dia", locator: "Localizador Dinn", address: "Endereço do paciente", available: "Disponível",
      confirmed: "Produto no endereço", time: "Tempo por atendimento", before: "Antes", after: "Com o Dinn"
    },
    "price-gap": {
      title: "Concorrente presente nas redes, produto ausente, e o preço alinhado na negociação",
      competitor: "Concorrente", yours: "Seu produto", chain: "Rede", priceLabel: "Preço",
      weighing: "Preço pesando na decisão", negotiated: "Preço negociado com a rede"
    },
    "share-opps": {
      title: "Share de 60% para 45%, perdas por estado e ações por cidade geradas pelo Insights",
      share: "Share", from: "60%", to: "45%", states: "Perdas por estado", opps: "Oportunidades",
      city: "Cidade", state: "Estado", action: "Ação", ask: "Onde recuperar espaço?", answer: "Ações por cidade e estado"
    }
  },
  resources: {
    meta: {
      title: "Recursos | Dinn",
      description: "Blog, casos de clientes e as novidades da Dinn: conteúdo para entender o canal farmacêutico e acompanhar o que entra no ar."
    },
    hero: {
      eyebrow: "Recursos",
      title: "Conteúdo, histórias e novidades *da Dinn*",
      lead: "Escolha por onde começar: aprender com artigos e guias, conhecer histórias de clientes ou acompanhar o que entrou no ar na plataforma."
    },
    items: [
      {
        id: "blog",
        type: "Blog",
        title: "Artigos, guias e temas do canal",
        desc: "Análises e explicações sobre ruptura, execução comercial e dados em farma, reunidas no mesmo ambiente.",
        chips: ["Artigos", "Guias", "Temas"],
        cta: "Ler o blog",
        href: "/blog"
      },
      {
        id: "cases",
        type: "Casos de uso",
        title: "Histórias de quem usa a Dinn",
        desc: "Casos de clientes que conhecemos e entrevistamos, contados de forma documentada e pública: da situação ao aprendizado.",
        chips: ["Entrevistas", "Contexto", "Aprendizados"],
        cta: "Ver os casos",
        href: "/recursos/casos"
      },
      {
        id: "changelog",
        type: "Novidades",
        title: "Tudo o que entrou no ar",
        desc: "A linha do tempo das publicações da Dinn, com data e uma explicação em linguagem simples do que mudou.",
        chips: ["Novidades", "Melhorias", "Correções"],
        cta: "Ver o histórico",
        href: "/recursos/changelog"
      }
    ],
    openItem: "Abrir",
    guide: {
      back: "Todos os recursos",
      author: "Equipe Dinn",
      updated: "Atualizado em 14 de outubro de 2026",
      relatedTitle: "Continue por aqui",
      related: [
        { label: "Como a Dinn trata origem, data e limites", href: "/confianca" },
        { label: "A Dinn para Trade, KAM & Campo", href: "/solucoes/trade-kam-campo" }
      ],
      slugs: {
        "ausencia-ruptura-sortimento-giro": {
          meta: {
            title: "Ausência, ruptura, sortimento e giro: qual é a diferença? | Dinn",
            description: "Quatro leituras que se confundem no canal farmacêutico e o que conferir antes de agir: ausência, ruptura, sortimento e giro."
          },
          eyebrow: "Guia",
          title: "Ausência, ruptura, sortimento e giro: qual é a diferença?",
          lead: "Quatro palavras que aparecem no mesmo relatório e pedem ações diferentes. Separá-las evita mandar o time de campo resolver o problema errado.",
          sections: [
            {
              heading: "Ausência",
              body: "É não encontrar o produto numa loja, em uma data, em uma fonte. É um sinal, não uma conclusão: pode ser ruptura, falta de sortimento ou apenas uma consulta sem resposta."
            },
            {
              heading: "Ruptura",
              body: "É a ausência numa loja que normalmente vende o produto. Na Dinn, a ruptura de uma loja é a proporção de dias sem estoque sobre os dias observados nos últimos 30 dias. Por isso uma ruptura persistente pesa mais do que um dia isolado de ausência."
            },
            {
              heading: "Sortimento",
              body: "É a loja trabalhar, ou não, aquele produto. Lojas que nunca venderam o item ficam fora do cálculo de ruptura, para não inflar o número. Nesse caso a conversa com a rede é sobre sortimento, não sobre reposição."
            },
            {
              heading: "Giro",
              body: "É a velocidade com que o estoque sai, por exemplo em unidades por dia. Com estoque na loja, o giro indica demanda; dividindo o estoque pelo giro médio diário, chega-se à cobertura em dias."
            }
          ],
          tableTitle: "O que conferir antes de agir",
          table: {
            columns: ["O que aparece", "O que pode ser", "O que conferir"],
            rows: [
              ["Produto ausente num dia", "Ruptura, sortimento ou consulta sem resposta", "Se a ausência se repete e se a loja costuma vender o produto"],
              ["Ausência que persiste", "Ruptura recorrente", "Pedidos pendentes e reposição da rede"],
              ["Loja que nunca vendeu o item", "Questão de sortimento", "A conversa de portfólio com a rede"],
              ["Estoque alto e giro baixo", "Estoque parado", "Dias sem movimento e lojas em ruptura por perto"]
            ]
          },
          limitsTitle: "O que o dado não prova",
          limits: [
            "Produto no centro de distribuição não prova abastecimento de uma loja.",
            "Saldo constante não prova, sozinho, que não houve venda.",
            "Movimento observado não equivale a venda confirmada."
          ]
        }
      }
    }
  },

  scenes: {
    scrollHint: "Role para ver a leitura se formar",
    items: {
      "inteligencia-pricing": {
        title: "Gráfico do seu laboratório contra a categoria, nas mesmas lojas",
        lab: "Seu laboratório",
        market: "Categoria",
        sameStores: "Mesmas lojas",
        onlyCompetitor: "Lojas só com o concorrente"
      },
      "trade-kam-campo": {
        title: "Das 40 lojas da carteira à fila de verificação da semana",
        portfolio: "40 lojas na carteira",
        concentrated: "6 lojas · 70% do sinal",
        queue: "Fila da semana",
        feedback: "Retorno do time revisa as prioridades"
      },
      "supply-distribuicao": {
        title: "Estoque no CD cruzado com a disponibilidade nas farmácias da região",
        cd: "CD",
        cdCoverage: "Cobertura do CD · 24 dias",
        pharmacies: "Farmácias da região",
        out: "38% sem o produto",
        verdict: "Quebra de distribuição",
        verify: "Confirmar pedidos pendentes"
      },
      "sac-customer-experience": {
        title: "Farmácias ao redor do endereço do consumidor, com disponibilidade",
        you: "Consumidor",
        nearest: "Mais próxima · 0,8 km",
        insight: "Procura repetida · 2 lojas sem estoque há 7 dias"
      },
      "marketing-lancamentos": {
        title: "Presença do lançamento semana a semana, por canal e região",
        largeChains: "Grandes redes",
        independents: "Independentes",
        reached: "54% das farmácias",
        regions: "Presença por região, semana a semana"
      },
      "ti-dados-governanca": {
        title: "Fontes, Dinn e destinos, com acesso controlado",
        sources: "Fontes",
        destinations: "Destinos",
        hub: "Dinn",
        readOnly: "Somente leitura",
        access: "Dois fatores · SSO sob consulta · permissões"
      }
    }
  },

  areaVisuals: {
    uiKicker: "Como aparece no Dinn",
    answerKicker: "O exemplo, como o Dinn Insights responde",
    provenanceTitle: "O que cada dado diz sobre si",
    connections: {
      app: "Conexões e acesso",
      rows: [
        { name: "ChatGPT", channel: "Por MCP", status: "Somente leitura" },
        { name: "Claude", channel: "Por MCP", status: "Somente leitura" },
        { name: "Copilot", channel: "Por MCP", status: "Somente leitura" },
        { name: "BI", channel: "Por API ou Dinn Conecta", status: "Autorizado" },
        { name: "Agentes", channel: "Por Dinn Conecta", status: "Autorizado" }
      ],
      accessTitle: "Acesso",
      access: ["Verificação em dois fatores por e-mail", "SSO sob consulta", "Controle de permissões"]
    },
    aiAnswer: {
      tools: ["ChatGPT", "Claude", "Copilot"],
      question: "Quais lojas da minha carteira em São Paulo eu verifico primeiro?",
      answer: "Seis lojas concentram a maior parte do sinal de ruptura na última semana. A lista traz o que conferir em cada uma.",
      meta: [
        { label: "Recorte", value: "Carteira, São Paulo" },
        { label: "Período", value: "Últimos 7 dias" },
        { label: "Fonte", value: "Dinn, via MCP" },
        { label: "Natureza", value: "Observado ou estimado, sempre dito" }
      ],
      mode: "Somente leitura"
    }
  },


  trustVisual: {
    anatomy: {
      title: "Um sinal na tela, com tudo o que ele diz sobre si",
      signal: "Ruptura persistente",
      store: "Loja 01 · Rede A",
      callouts: [
        { label: "Origem", value: "Observado na fonte" },
        { label: "Data", value: "Base D-1" },
        { label: "Confiança", value: "Informada em cada ponto" },
        { label: "Limite", value: "Ausência não é causa" },
        { label: "Próximo passo", value: "Conferir pedido pendente" }
      ],
    },
    kinds: {
      proximity: "Proximidade com a fonte",
      items: [
        {
          meter: "Direta",
          rows: [
            { label: "Origem", value: "A própria fonte" },
            { label: "Quando", value: "Data e hora do registro" },
            { label: "Como ler", value: "Dado direto, com local e horário" }
          ]
        },
        {
          meter: "Por comparação",
          rows: [
            { label: "Origem", value: "Lojas comparáveis e histórico" },
            { label: "Quando", value: "Na atualização da base" },
            { label: "Como ler", value: "Vem sempre com nível de confiança" }
          ]
        },
        {
          meter: "Por combinação",
          rows: [
            { label: "Origem", value: "Combinação de sinais" },
            { label: "Quando", value: "No momento da leitura" },
            { label: "Como ler", value: "Hipótese para o time validar" }
          ]
        }
      ]
    },
    notProve: {
      sees: "O que aparece",
      doesNot: "Não prova",
      pairs: [
        { a: "Produto ausente", b: "Ruptura confirmada" },
        { a: "Produto no CD", b: "Loja abastecida" },
        { a: "Saldo constante", b: "Nenhuma venda" },
        { a: "Recomendação", b: "Ação automática" }
      ]
    },
    coverage: {
      timelineTitle: "Como a leitura chega até você",
      steps: [
        { label: "Dia anterior", text: "A Dinn consulta as fontes" },
        { label: "Base D-1", text: "Os sinais são organizados, com origem e data" },
        { label: "Hoje", text: "Sua equipe lê, valida e age" }
      ],
      onDemand: "Consulta pontual de disponibilidade em lojas elegíveis",
      factorsTitle: "A cobertura varia por",
      factors: ["Fonte", "Produto", "Rede", "Consulta"],
      factorsNote: "Cada leitura informa o que cobre."
    },
    security: {
      flowTitle: "Do acesso à resposta",
      flow: [
        { title: "Pessoa autorizada", sub: "Usuário da sua empresa" },
        { title: "Dois fatores", sub: "Verificação por e-mail" },
        { title: "SSO", sub: "Sob consulta" },
        { title: "Permissões", sub: "Controle de acesso" },
        { title: "Dinn", sub: "Sinais com origem e data" },
        { title: "Somente leitura", sub: "MCP, API e BI" }
      ],
      splitTitle: "Quem cuida de quê",
      dinn: {
        title: "A Dinn",
        items: ["Prepara e entrega os sinais", "Mostra origem, data e confiança", "Conecta por MCP, API e BI", "Responde pelos controles da sua camada"]
      },
      client: {
        title: "Você mantém",
        items: ["Dados internos", "Infraestrutura do seu ambiente", "Governança do seu ambiente"]
      }
    },
    deploy: {
      title: "Implantação em até 30 dias",
      steps: [
        { label: "Acordo", text: "Pré-requisitos e escopo definidos" },
        { label: "Implantação", text: "Até 30 dias, podendo começar só com fontes externas" },
        { label: "Em uso", text: "Leitura diária e retorno do time" }
      ]
    }
  },

  changelog: {
    meta: {
      title: "Novidades | Dinn",
      description: "Linha do tempo do que a Dinn colocou no ar: novidades e melhorias da plataforma, explicadas em linguagem simples e organizadas por data."
    },
    hero: {
      eyebrow: "Novidades",
      title: "O que entrou no ar na *Dinn*",
      lead: "Cada publicação em produção, explicada em linguagem simples e organizada por data."
    },
    back: "Todos os recursos",
    filters: { label: "Filtrar por área", all: "Tudo", platform: "Plataforma", site: "Site e documentação" },
    count: "publicações",
    updated: "Atualizado em",
    months: "Meses",
    empty: "Nenhuma publicação nesta área ainda.",
    note: "Atualizado automaticamente todos os dias. Os textos são reescritos em linguagem simples e detalhes técnicos internos não aparecem aqui."
  }
};
