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
    intro: "Cada área tem uma pergunta diferente. Escolha a sua. Veja as decisões que a Dinn apoia, um exemplo e os limites.",
    open: "Ver a Dinn para esta área",
    questionPrefix: "A pergunta:"
  },

  contentTeaser: {
    eyebrow: "Recursos",
    title: "Não está pronto para uma demonstração?",
    items: [
      {
        type: "Blog",
        title: "Artigos sobre o canal farmacêutico",
        desc: "Ruptura de estoque, execução comercial e dados em farma.",
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
        desc: "Cada novidade da plataforma, em linguagem simples, por data.",
        href: "/recursos/changelog"
      }
    ]
  },

  contact: {
    meta: {
      title: "Contato | Dinn",
      description: "Conte qual decisão do canal farmacêutico você quer melhorar Uma pessoa do time da Dinn responde."
    },
    navLabel: "Contato",
    hero: {
      eyebrow: "Contato",
      title: "Conte o que você quer *melhorar no canal*",
      lead: "Preencha poucos campos. Uma pessoa do time lê o seu pedido e responde com o próximo passo."
    },
    after: {
      title: "O que acontece depois",
      steps: [
        { title: "Recebemos o seu pedido", text: "Ele chega ao time com o seu papel e a sua decisão." },
        { title: "Uma pessoa responde", text: "Você recebe a resposta por e-mail em poucos dias úteis." },
        { title: "Você decide o ritmo", text: "Se fizer sentido, marcamos uma conversa curta. Se não, paramos." }
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
      name: "Seu nome",
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
      consent: "Autorizo a Dinn a usar estes dados para responder a este pedido e enviar comunicações relacionadas.",
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
      consent: "Você deve autorizar para enviar o pedido.",
      submit: "Não conseguimos enviar. Tente de novo ou",
      submitLink: "agende direto"
    },
    done: {
      title: "Pedido recebido",
      text: "Obrigado. Uma pessoa do time lê o seu pedido e responde por e-mail em poucos dias úteis.",
      schedule: "Agendar conversa",
      home: "Voltar ao início"
    }
  },

  pageCta: {
    title: "Veja como isso funciona com os seus produtos",
    desc: "Numa demonstração, a Dinn mostra a leitura com o seu portfólio, carteira e regiões.",
    button: "Solicitar demo",
    secondary: "Ver todas as soluções"
  },

  solutions: {
    page: {
      eyebrow: "Soluções",
      back: "Todas as soluções",
      questionLabel: "A pergunta da sua área",
      decisionsLabel: "Decisões que a Dinn apoia",
      exampleLabel: "Um exemplo, passo a passo",
      limitsLabel: "Limites da leitura",
      useCasesLabel: "Situações desta área",
      useCaseOpen: "Ver na home",
      trustCta: "Como tratamos origem, data e confiança",
      otherLabel: "Outras áreas"
    },
    items: [
      {
        slug: "inteligencia-pricing",
        name: "Inteligência & Pricing",
        short: "Acompanhe disponibilidade, preço, giro e concorrência.",
        question: "Qual é a origem e até onde posso confiar?",
        title: "Mudanças de preço, giro e concorrência, *com a origem à vista*",
        lead: "Explique um número antes de usá-lo. Cada leitura mostra fonte, data, cobertura e limite.",
        decisions: [
          "Separar uma mudança pontual de uma tendência duradoura.",
          "Separar queda de participação de queda de venda, nas mesmas lojas.",
          "Dar granularidade e contexto operacional aos dados consolidados de mercado."
        ],
        example: {
          title: "Seu laboratório cresceu 6% nas mesmas lojas; a categoria, 11%",
          steps: [
            "Sinal: a participação cai na região.",
            "Validação: só lojas comparáveis, presentes nas duas janelas de tempo.",
            "Leitura: outros produtos cresceram mais. A sua venda não diminuiu.",
            "Próximo passo: olhar as lojas onde só o concorrente tem estoque."
          ]
        },
        limits: [
          "A venda é estimada pela movimentação de estoque. Não é sell-out auditado.",
          "Os dados de concorrentes são agregados.",
          "A Dinn complementa as auditorias de mercado. Não as substitui."
        ],
        useCases: ["concorrencia", "demanda"]
      },
      {
        slug: "trade-kam-campo",
        name: "Trade, KAM & Campo",
        short: "Priorize contas e territórios com o contexto mais recente.",
        question: "Quem eu priorizo e o que levo para a conversa?",
        title: "Uma fila de lojas e contas, *com o que conferir em cada uma*",
        lead: "Sem painel para interpretar. Você recebe uma lista priorizada com o sinal, a data e a pergunta a responder.",
        decisions: [
          "Começar a semana pelas lojas que mais causam ruptura no seu recorte.",
          "Dar à rede evidência por loja, com data.",
          "Rever o mesmo recorte depois da ação e registrar o retorno."
        ],
        example: {
          title: "6 das 40 lojas da carteira têm 70% do sinal",
          steps: [
            "Sinal: ruptura persistente em lojas da carteira na última semana.",
            "Validação: nível = dias sem estoque ÷ dias observados nos últimos 30 dias.",
            "Fila: as lojas em ordem, com o que conferir em cada uma (pedido pendente? fora da gôndola?).",
            "Retorno: o time registra o que encontrou A Dinn acompanha o mesmo recorte para revisar prioridades."
          ]
        },
        limits: [
          "A Dinn prepara a lista. O seu time monta a agenda.",
          "A Dinn não escreve nada no CRM. A leitura serve para preparar a visita.",
          "Lojas que nunca venderam o produto são excluídas, para a ruptura não ficar inflada."
        ],
        useCases: ["campo"]
      },
      {
        slug: "supply-distribuicao",
        name: "Supply & Distribuição",
        short: "Investigue cobertura, disponibilidade e restrições de abastecimento.",
        question: "Onde pode haver problema de cobertura ou abastecimento?",
        title: "O furo está no CD, na reposição ou na farmácia? *Veja os dois lados.*",
        lead: "A Dinn cruza o estoque no distribuidor com a disponibilidade nas farmácias da região. Ela informa as ressalvas causais.",
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
            "Leitura: o padrão aponta para falha de distribuição ou de reposição, não para falta na origem.",
            "Antes de concluir: confirmar pedidos pendentes nas redes afetadas."
          ]
        },
        limits: [
          "Estoque no CD não prova estoque na farmácia. A leitura cruza as duas pontas.",
          "O padrão é uma hipótese. A causa exige investigação.",
          "A cobertura do CD usa a venda estimada da região. É uma aproximação, não a cobertura real daquele CD. Só vale com demanda compatível com a população que o CD abastece.",
          "Movimento observado não é venda confirmada."
        ],
        useCases: ["distribuicao", "parado"]
      },
      {
        slug: "sac-customer-experience",
        name: "SAC & Customer Experience",
        short: "Oriente consumidores sobre disponibilidade e proximidade.",
        question: "Como oriento alguém sem induzir ao erro?",
        title: "Onde o consumidor tem chance de achar o produto, *e quão segura é essa chance*",
        lead: "Disponibilidade, proximidade e atualização em uma tela, com a fonte e a data de cada indicação.",
        decisions: [
          "Indicar a farmácia próxima com maior chance de ter o produto.",
          "Verificar se a informação é observada ou estimada antes de orientar.",
          "Mostrar ao trade onde a procura não acha produto."
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
          "A leitura de base é D-1. Em lojas compatíveis, uma consulta sob demanda roda em tempo real e mostra o horário da resposta.",
          "Chance de estoque não é garantia. Diga isso ao consumidor.",
          "A cobertura varia por rede e fonte."
        ],
        useCases: ["sac"]
      },
      {
        slug: "marketing-lancamentos",
        name: "Marketing & Lançamentos",
        short: "Acompanhe presença, evolução de cobertura e sinais de execução do lançamento.",
        question: "A execução está evoluindo onde deveria?",
        title: "Semana a semana, *onde o lançamento chegou* e onde travou",
        lead: "Presença por rede e região ao longo do tempo, comparada com o plano do seu time.",
        decisions: [
          "Ver onde o lançamento acelerou e onde está abaixo do esperado.",
          "Separar problema de sell-in de problema de reposição.",
          "Comparar a evolução por coorte e canal com a meta."
        ],
        example: {
          title: "Seis semanas depois do lançamento",
          steps: [
            "Sinal: o produto aparece em 54% das farmácias monitoradas.",
            "Validação: presença = farmácias com estoque ÷ farmácias monitoradas no recorte. Compare com a meta e a coorte do seu time.",
            "Leitura: acelerou nas grandes redes. Segue abaixo de 20% nas independentes.",
            "Próxima pergunta: o CD recebeu o produto nas regiões onde ele não chegou?"
          ]
        },
        limits: [
          "A semana 1 começa na data de lançamento definida pelo seu time.",
          "A separação por canal segue o que cada fonte consegue identificar.",
          "Presença nas farmácias não é sell-out."
        ],
        useCases: ["lancamento"]
      },
      {
        slug: "ti-dados-governanca",
        name: "TI, Dados & Governança",
        short: "Integre sinais com rastreabilidade, controle de acesso e limites claros.",
        question: "Como integra, protege e governa?",
        title: "Sinais no seu ambiente, *com rastreabilidade e controle de acesso*",
        lead: "API, BI e a IA do cliente consultam a mesma base. O escopo autorizado e a origem de cada dado ficam preservados.",
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
            "Resposta: o número vem com recorte, período, fonte e limites.",
            "Governança: o uso fica dentro do plano e da configuração do ambiente do cliente."
          ]
        },
        limits: [
          "O MCP é uma interface de consulta. Não substitui a infraestrutura de dados.",
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
      description: "Como a Dinn funciona: observa, valida, ajuda você a entender e decidir, entrega a quem executa e aprende com o retorno. Papel de Stock, Manager, Insights, MCP e Conecta."
    },
    hero: {
      eyebrow: "Plataforma",
      title: "Um sistema do *sinal à ação comercial*",
      lead: "A Dinn observa, valida, ajuda você a entender e decidir, entrega a quem executa e aprende com o retorno. Cada parte tem um papel claro."
    },
    cycle: {
      title: "O ciclo, em seis passos",
      intro: "Do sinal solto à ação registrada. O exemplo completo está na home."
    },
    parts: {
      title: "Cinco partes, com papéis diferentes",
      intro: "Trabalham juntas, mas não são cinco produtos iguais. Há produto, plataforma, interface e camada de dados. Cada uma diz também o que não faz.",
      notLabel: "O que não é",
      kinds: ["Produto", "Plataforma", "Interface", "Interface técnica", "Camada de dados"],
      items: [
        {
          tag: "Dinn Stock",
          title: "A leitura de disponibilidade",
          desc: "Organiza a disponibilidade e os sinais relacionados ao canal, com a origem e a confiança de cada ponto.",
          not: "Ausência de produto é um sinal a validar, não uma ruptura confirmada."
        },
        {
          tag: "Dinn Manager",
          title: "A gestão e a execução",
          desc: "Dá prioridades e contexto para a gestão e a execução: ruptura, estoque parado, distribuição e mercado no mesmo recorte.",
          not: "O time decide. A plataforma prepara a leitura."
        },
        {
          tag: "Dinn Insights",
          title: "A conversa com os sinais",
          desc: "Explore e interprete os sinais. Pergunte em português e receba o número, o recorte, a data e o método.",
          not: "Hipóteses aparecem como hipóteses. A Dinn não presume a causa."
        },
        {
          tag: "MCP",
          title: "A interface para a sua IA",
          desc: "Permite que ferramentas autorizadas, como ChatGPT, Claude e Copilot, consultem os dados da Dinn, em acesso somente leitura.",
          not: "Não é a infraestrutura de dados. É uma forma de consultar."
        },
        {
          tag: "Dinn Conecta",
          title: "Os fluxos de dados",
          desc: "Monta e opera fluxos de dados para o contexto do cliente. Padroniza produto, loja e região para o BI e os agentes.",
          not: "Não fecha o ciclo de execução. Entrega dados a quem executa."
        }
      ]
    },
    data: {
      title: "Dados e integrações",
      intro: "Uma regra vale em toda a plataforma: dizer de onde veio o dado, quando foi observado e até onde vai a cobertura.",
      items: [
        {
          title: "De onde vêm os sinais",
          text: "De fontes digitais das farmácias, consultadas por agentes. Com autorização, também de mercado (IQVIA / Close-Up) e de dados internos (ERP e CRM)."
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
          text: "Um objetivo e um recorte. A Dinn pode começar só com fontes externas. A implantação leva até 30 dias após pré-requisitos e escopo acordados."
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
      lead: "TI, dados, compliance e compras veja como a Dinn trata a origem do dado, o acesso e a implantação."
    },
    signals: {
      title: "Três tipos de sinal, sempre identificados",
      intro: "A Dinn mostra a natureza de cada informação antes de ela virar prioridade.",
      exampleLabel: "Exemplo",
      items: [
        {
          name: "Observado",
          def: "O que a fonte informou diretamente, com local e horário.",
          example: "A farmácia mostra 12 unidades no canal digital, consultado hoje às 06h."
        },
        {
          name: "Estimado",
          def: "Calculado a partir de lojas comparáveis e do histórico quando a fonte não responde. Sempre com nível de confiança.",
          example: "A loja não responde. A Dinn estima o estoque por lojas parecidas da mesma rede."
        },
        {
          name: "Inferido",
          def: "Uma leitura de sinais combinados. Mostrada como hipótese para o time validar.",
          example: "Várias lojas sem produto e um CD com saldo sugerem falha de reposição, não falta na origem."
        }
      ]
    },
    notProve: {
      title: "O que um sinal não prova",
      intro: "Nomear o limite é parte do produto. Ele permite ao time agir sem ser induzido ao erro.",
      items: [
        "Ausência de produto nem sempre é ruptura.",
        "Produto no centro de distribuição não prova abastecimento de uma loja específica.",
        "Saldo constante não prova que não houve venda.",
        "Uma recomendação não é uma ação automatizada. O time decide e executa."
      ]
    },
    coverage: {
      title: "Cobertura e atualização",
      items: [
        { title: "Frequência", text: "Base em D-1. Em lojas elegíveis, é possível uma consulta pontual de disponibilidade." },
        { title: "Cobertura", text: "Varia por fonte, produto, rede e consulta. Cada leitura informa o que cobre." },
        { title: "Fontes de mercado e internas", text: "Entram quando licença, autorização e escopo estão acordados." }
      ]
    },
    security: {
      title: "Acesso, segurança e privacidade",
      items: [
        { title: "Acesso", text: "Verificação em dois fatores por e-mail e controle de permissões. SSO corporativo sob consulta: verifique com a Dinn os requisitos de autenticação e o escopo de implantação." },
        { title: "IA do cliente", text: "As conexões por MCP são autorizadas e de acesso somente leitura." },
        { title: "Dados e governança", text: "Dados internos, infraestrutura e governança do ambiente do cliente continuam com ele. A Dinn responde pelos controles da sua própria camada." },
        { title: "Privacidade", text: "A Dinn trata dados pessoais conforme a LGPD, como descreve a Política de Privacidade." }
      ],
      privacyLink: "Ler a Política de Privacidade"
    },
    deploy: {
      title: "Implantação",
      text: "A implantação tem escopo delimitado. Leva até 30 dias depois que pré-requisitos e escopo estão acordados. Pode começar só com fontes externas, sem depender dos sistemas internos do cliente."
    },
    questions: {
      title: "Perguntas que TI e compras costumam fazer",
      items: [
        {
          question: "Que dados da minha empresa a Dinn precisa?",
          answer: "Para começar, nenhum. A leitura pode partir de fontes externas. Dados internos entram por acordo, para dar contexto."
        },
        {
          question: "Quem controla os dados e a governança?",
          answer: "Você mantém os dados internos e a governança do seu ambiente. A Dinn prepara e entrega os dados. A Dinn responde pelos controles da sua própria camada: acesso, permissões e registro."
        },
        {
          question: "Como a nossa IA acessa o Dinn?",
          answer: "Por MCP, com acesso autorizado e somente leitura. Recursos como agendamento e geração de arquivos dependem do plano e da configuração da IA."
        },
        {
          question: "Onde encontro suporte e canal de incidentes?",
          answer: "Na página de Suporte. Ela explica como registrar um problema e acionar o canal contratado."
        }
      ],
      supportLink: "Abrir a página de Suporte"
    },
    cta: {
      title: "Precisa de aprovação de TI, dados ou compras?",
      desc: "Discutimos os requisitos do seu ambiente antes de qualquer implantação.",
      button: "Conversar sobre requisitos"
    }
  },



  cases: {
    meta: {
      title: "Casos de uso | Dinn",
      description: "Casos de uso da Dinn: histórias do sinal à ação, passo a passo, com origem, validação e aprendizado."
    },
    hero: {
      eyebrow: "Casos de uso",
      title: "Histórias de uso da Dinn, *uma a uma*",
      lead: "Cada caso conta o caminho completo, da situação ao aprendizado: o que a Dinn observou, como foi validado e o que o time decidiu."
    },
    gallery: { open: "Ler o caso", customer: "Caso de cliente", empty: "Adicionamos novos casos aqui, um a um." },
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
        "Os casos são relatos de usuários da Dinn. Nomes, produtos e dados são preservados.",
        "Se o resultado é mensurável, informamos período, universo e método.",
        "Se não, relatamos o ganho operacional comprovado. Não o convertemos em impacto financeiro.",
        "Participação e venda são estimadas. Com um número, informamos mercado, janela e método."
      ]
    }
  },

  caseScenes: {
    "frozen-stock": {
      title: "Estoque parado de cada PDV de Fortaleza, somado e convertido em dias disponíveis",
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
      title: "Concorrente nas redes, produto ausente, preço alinhado na negociação",
      competitor: "Concorrente", yours: "Seu produto", chain: "Rede", priceLabel: "Preço",
      weighing: "Preço pesando na decisão", negotiated: "Preço negociado com a rede"
    },
    "share-opps": {
      title: "Share de 60% para 45%, perdas por estado e ações por cidade do Insights",
      share: "Share", from: "60%", to: "45%", states: "Perdas por estado", opps: "Oportunidades",
      city: "Cidade", state: "Estado", action: "Ação", ask: "Onde recuperar espaço?", answer: "Ações por cidade e estado"
    }
  },
  resources: {
    meta: {
      title: "Recursos | Dinn",
      description: "Blog, casos de clientes e as novidades da Dinn: conteúdo para entender o canal farmacêutico e acompanhar as publicações."
    },
    hero: {
      eyebrow: "Recursos",
      title: "Conteúdo, histórias e novidades *da Dinn*",
      lead: "Escolha por onde começar: leia artigos e guias, conheça histórias de clientes ou acompanhe as publicações da plataforma."
    },
    items: [
      {
        id: "blog",
        type: "Blog",
        title: "Artigos, guias e temas do canal",
        desc: "Análises sobre ruptura, execução comercial e dados em farma, em um só lugar.",
        chips: ["Artigos", "Guias", "Temas"],
        cta: "Ler o blog",
        href: "/blog"
      },
      {
        id: "cases",
        type: "Casos de uso",
        title: "Histórias de quem usa a Dinn",
        desc: "Casos de clientes que conhecemos e entrevistamos, documentados e públicos, da situação ao aprendizado.",
        chips: ["Entrevistas", "Contexto", "Aprendizados"],
        cta: "Ver os casos",
        href: "/recursos/casos"
      },
      {
        id: "changelog",
        type: "Novidades",
        title: "Tudo o que entrou no ar",
        desc: "Uma linha do tempo das publicações da Dinn, com data e uma nota em linguagem simples sobre o que mudou.",
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
            description: "Quatro leituras que as pessoas confundem no canal farmacêutico, e o que conferir antes de agir: ausência, ruptura, sortimento e giro."
          },
          eyebrow: "Guia",
          title: "Ausência, ruptura, sortimento e giro: qual é a diferença?",
          lead: "Quatro palavras que aparecem no mesmo relatório e pedem ações diferentes. Separe-as, para o time de campo não resolver o problema errado.",
          sections: [
            {
              heading: "Ausência",
              body: "O produto não está numa loja, em uma data, em uma fonte. É um sinal, não uma conclusão. Pode ser ruptura, falta de sortimento ou uma consulta sem resposta."
            },
            {
              heading: "Ruptura",
              body: "Ausência numa loja que normalmente vende o produto. Na Dinn, a ruptura de uma loja é a proporção de dias sem estoque sobre os dias observados nos últimos 30 dias. Uma ruptura persistente pesa mais do que um dia de ausência."
            },
            {
              heading: "Sortimento",
              body: "Se a loja trabalha aquele produto. Lojas que nunca venderam o item ficam fora do cálculo de ruptura, para o número não ficar inflado. Para essas lojas, a conversa com a rede é sobre sortimento, não sobre reposição."
            },
            {
              heading: "Giro",
              body: "A velocidade com que o estoque sai, por exemplo em unidades por dia. Com estoque na loja, o giro mostra a demanda. Estoque dividido pelo giro médio diário dá a cobertura em dias."
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
            "Saldo constante não prova que não houve venda.",
            "Movimento observado não é venda confirmada."
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
        verdict: "Falha de distribuição",
        verify: "Confirmar pedidos pendentes"
      },
      "sac-customer-experience": {
        title: "Farmácias perto do consumidor, com disponibilidade",
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
            { label: "Como ler", value: "Tem sempre nível de confiança" }
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
        items: ["Prepara e entrega os sinais", "Mostra origem, data e confiança", "Conecta por MCP, API e BI", "É responsável pelos controles da sua camada"]
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
        { label: "Implantação", text: "Até 30 dias. Pode começar só com fontes externas" },
        { label: "Em uso", text: "Leitura diária e retorno do time" }
      ]
    }
  },

  changelog: {
    meta: {
      title: "Novidades | Dinn",
      description: "Linha do tempo do que a Dinn colocou no ar: novidades e melhorias da plataforma, em linguagem simples, por data."
    },
    hero: {
      eyebrow: "Novidades",
      title: "O que entrou no ar na *Dinn*",
      lead: "Cada publicação em produção, em linguagem simples, por data."
    },
    back: "Todos os recursos",
    filters: { label: "Filtrar por área", all: "Tudo", platform: "Plataforma", site: "Site e documentação" },
    count: "publicações",
    updated: "Atualizado em",
    months: "Meses",
    empty: "Nenhuma publicação nesta área ainda.",
    note: "Atualizado todos os dias. Os textos usam linguagem simples. Detalhes técnicos internos não aparecem aqui."
  }
};
