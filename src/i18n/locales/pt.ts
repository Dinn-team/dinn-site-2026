export const ptBR = {
  nav: {
    home: "Home",
    howItWorks: "Como funciona",
    solutions: "Soluções",
    conecta: "Dinn Conecta",
    customers: "Clientes",
    blog: "Blog",
    cta: "Solicitar demo",
    openMenu: "Abrir menu",
    languageLabel: "Idioma",
    language: "Português",
    langShort: "PT"
  },
  hero: {
    pill: "A camada de inteligência para o canal farmacêutico",
    title: "Transforme sinais do mercado farmacêutico em *ação comercial*",
    description: "Quem vende em farmácias não precisa de mais um painel. Precisa saber onde agir, com qual confiança e com qual impacto.",
    cta: "Solicitar demo",
    secondary: "Ver como funciona",
    card: {
      label: "Exemplo ilustrativo",
      steps: [
        { tag: "Sinal", title: "Produto A · 32% dos PDVs sem estoque", meta: "SP · 96 de 300 PDVs · D-1" },
        { tag: "Onde", title: "Rede A concentra o sinal", meta: "60% de ruptura em 30 dias" },
        { tag: "Ação", title: "6 lojas para verificar primeiro", meta: "Com pergunta e retorno esperado" }
      ],
      stores: [
        { name: "Loja 01 · São Paulo", level: "Crítico", value: "86,7%" },
        { name: "Loja 02 · Campinas", level: "Alto", value: "60%" },
        { name: "Loja 03 · Santos", level: "Moderado", value: "33,3%" }
      ],
      footnote: "Dados fictícios."
    }
  },
  logos: {
    title: "Indústrias farmacêuticas que já usam a Dinn"
  },
  antesDepois: {
    eyebrow: "O que muda",
    title: "A Dinn não é só *mais um painel*.",
    description: "É a camada de inteligência que liga o que acontece nas farmácias às decisões do seu time comercial.",
    beforeLabel: "Antes",
    afterLabel: "Com a Dinn",
    items: [
      { bad: "Discussão sobre ruptura sem evidência", good: "Evidência por loja, rede, cidade e SKU, com data de corte" },
      { bad: "Painel para interpretar", good: "Uma lista do que verificar primeiro" },
      { bad: "Dado sem origem clara", good: "Observado ou estimado, com fonte e confiança" },
      { bad: "Bases e planilhas conciliadas à mão", good: "Uma base identificada, na plataforma, no arquivo, na API ou na sua IA" }
    ]
  },
  comoFunciona: {
    eyebrow: "Como funciona",
    title: "Do sinal no canal à *próxima ação* do time",
    intro: "A Dinn acompanha a disponibilidade dos seus produtos nas farmácias, separa o que mudou do que é ruído e organiza a leitura por produto, rede, região e ponto de venda. Tudo com fonte, data e confiança explícitas.",
    stages: [
      {
        name: "Observar",
        title: "Onde há estoque e onde falta produto",
        description: "Agentes consultam os canais digitais das farmácias e registram o que cada fonte informa, com local e horário. Onde não há resposta direta, a Dinn estima a partir de lojas comparáveis e do histórico. Base diária (D-1) e consulta pontual onde a fonte permite.",
        products: "Dinn Stock"
      },
      {
        name: "Entender",
        title: "Nem toda variação merece atenção",
        description: "A Dinn transforma a leitura em sinais com nome: ruptura persistente, estoque sem movimento, mudança de giro, concentração em uma rede. A evolução no tempo separa um sinal pontual de um problema recorrente.",
        products: "Dinn Stock · Dinn Pulse"
      },
      {
        name: "Priorizar",
        title: "Uma base, três níveis de decisão",
        description: "Estratégico: onde concentrar a atenção. Tático: o que discutir com cada rede. Operacional: quais lojas verificar primeiro. A saída é uma fila concreta, com o sinal, a pergunta e o retorno esperado.",
        products: "Dinn Manager · Dinn Locator"
      },
      {
        name: "Levar para a rotina",
        title: "O sinal chega aonde o trabalho acontece",
        description: "Use na plataforma, exporte para a reunião com a rede, leve ao seu BI pela API ou pergunte direto na sua IA. A Dinn prepara a análise; a equipe decide o que fazer com cada ponto de venda.",
        products: "Plataforma · Arquivo · API · MCP"
      },
      {
        name: "Acompanhar",
        title: "Veja se o sinal persistiu depois da ação",
        description: "Mantenha o mesmo produto e recorte para comparar a evolução sem misturar bases: comece o dia pelos desvios, chegue à reunião semanal com uma lista e acompanhe no mês o que mudou no canal.",
        products: "Rotinas diária, semanal e mensal"
      }
    ],
    visuals: {
      observe: {
        observedTag: "Observado",
        observedTitle: "Resposta direta da fonte",
        observedRows: [
          ["Produto", "Produto A · 2,5 mg"],
          ["PDV", "Loja 01 · São Paulo"],
          ["Origem", "Canal digital"],
          ["Resposta", "Disponível · 10:32"]
        ],
        estimatedTag: "Estimado",
        estimatedTitle: "Sem resposta direta",
        estimatedRows: [
          ["Referências", "Lojas comparáveis + histórico"],
          ["Disponibilidade", "8–12 un."],
          ["Confiança", "Nível B"]
        ],
        note: "Cada registro diz como foi obtido: observado ou estimado."
      },
      signals: {
        title: "Sinais do recorte · SP",
        items: [
          { type: "Ruptura persistente", scope: "Produto A · 96 de 300 PDVs", value: "32%" },
          { type: "Concentração em rede", scope: "Produto A · Rede A · 30 dias", value: "60%" },
          { type: "Estoque sem movimento", scope: "Loja 04 · Sorocaba", value: "30 de 30 dias" },
          { type: "Queda de giro", scope: "Produto B · Rede B", value: "−18%" }
        ],
        note: "Dados fictícios. Um sinal abre uma investigação, não uma conclusão."
      },
      priority: {
        levels: [
          { name: "Estratégico", question: "Onde concentrar a atenção?" },
          { name: "Tático", question: "O que discutir com cada rede?" },
          { name: "Operacional", question: "Quais lojas verificar primeiro?" }
        ],
        tableTitle: "Fila de verificação · Produto A · Rede A",
        columns: ["PDV · sinal", "Verificação sugerida", "Retorno esperado"],
        rows: [
          ["Loja 01 · 86,7%", "Há pedido ou entrega pendente?", "Status e previsão da rede"],
          ["Loja 02 · 60%", "Produto disponível na loja?", "Conferência do PDV"],
          ["Loja 03 · 33,3%", "A ausência voltou a ocorrer?", "Nova leitura do recorte"]
        ],
        note: "Exemplo fictício. A equipe define responsáveis e prazos."
      },
      deliver: {
        input: "Sinal priorizado",
        hub: "Dinn",
        outputs: [
          { name: "Plataforma", desc: "Dinn Manager" },
          { name: "Arquivo", desc: "Exportação para a reunião" },
          { name: "API", desc: "Seu BI e sistemas" },
          { name: "Sua IA", desc: "ChatGPT, Claude, Copilot" },
          { name: "CRM", desc: "Contexto para o campo" }
        ],
        note: "A Dinn prepara a análise. A equipe decide."
      },
      follow: {
        routines: [
          { when: "Dias úteis · 08:00", title: "Comece o dia pelos desvios", desc: "As maiores pioras desde a última leitura." },
          { when: "Segundas · 09:00", title: "Chegue à reunião com uma lista", desc: "Ranking de redes e os dez PDVs com maior ruptura." },
          { when: "1º dia útil · 09:00", title: "Acompanhe o que mudou no canal", desc: "Tendência de 90 dias no mesmo recorte." }
        ],
        note: "Exemplos de rotina."
      }
    }
  },
  naPratica: {
    eyebrow: "Na prática",
    title: "Do sinal à *lista de investigação*",
    intro: "O caminho completo em um exemplo, com dados fictícios.",
    steps: [
      { question: "Qual produto precisa de atenção?", answer: "O Produto A tem a maior proporção de PDVs sem estoque em SP.", data: "32% · 96 de 300 PDVs" },
      { question: "Em quais redes investigar?", answer: "A Rede A concentra o sinal no mesmo recorte e período.", data: "60% em 30 dias" },
      { question: "Quais lojas explicam o problema?", answer: "Seis lojas da Rede A, da crítica à moderada.", data: "86,7% → 23,3%" },
      { question: "O que verificar em cada uma?", answer: "Pedido pendente? Produto na loja? A ausência voltou?", data: "Fila de verificação" },
      { question: "Quem cuida de cada ponto?", answer: "A equipe define responsável, ação combinada e data para rever o mesmo recorte.", data: "Decisão do time" },
      { question: "Como acompanhar?", answer: "A rotina semanal traz a lista atualizada para a reunião comercial.", data: "Segundas · 09:00" }
    ],
    note: "Exemplo ilustrativo. A causa da ruptura exige investigação; a Dinn não a presume."
  },
  naSuaIa: {
    eyebrow: "Dinn + IA",
    title: "Use a Dinn direto *na sua IA*",
    description: "Conecte a Dinn ao ChatGPT, ao Claude ou ao Microsoft Copilot e peça análises, relatórios e materiais com os dados autorizados.",
    envs: ["ChatGPT", "Claude", "Microsoft Copilot"],
    bullets: [
      "Pergunte em linguagem natural",
      "Aprofunde sem recomeçar a análise",
      "Transforme perguntas recorrentes em rotina"
    ],
    chat: {
      header: "Dinn Stock · conversa ilustrativa",
      user: "Compare a ruptura dos Produtos A, B e C em SP. Qual merece atenção primeiro?",
      aiLabel: "IA · consulta à Dinn",
      answer: "O Produto A tem o maior percentual sem estoque no recorte.",
      rows: [
        ["Produto A", "32%", "96 de 300 PDVs"],
        ["Produto B", "20%", "48 de 240 PDVs"],
        ["Produto C", "10%", "20 de 200 PDVs"]
      ],
      suggestion: "Sugestão: abrir as redes e os PDVs do Produto A para investigar a concentração."
    },
    note: "Acesso autorizado e somente leitura. Conexão, arquivos e agendamentos dependem do plano e da configuração da sua IA."
  },
  conecta: {
    eyebrow: "Dinn Conecta",
    title: "Dados de farma. *Trabalhando juntos.*",
    description: "Mercado, dados internos e farmácias com o contexto que seu BI, Copilot e projetos de IA precisam. A Dinn conecta as fontes autorizadas, padroniza produto, loja e região, cuida da qualidade e da atualização e entrega no ambiente que sua equipe já usa.",
    sourcesLabel: "Suas fontes",
    sources: ["IQVIA / Close-Up", "ERP, CRM e data lake", "Farmácias"],
    hub: "Dinn Conecta",
    hubDesc: "Conexão, padronização e contexto de farma",
    destLabel: "Seu stack continua o mesmo",
    destinations: ["BI", "Copilot", "Agentes", "API"],
    responsibilities: [
      { title: "Com você", desc: "Dados, infraestrutura e governança continuam sob o seu controle." },
      { title: "Com a Dinn", desc: "Conexão, higienização, padronização de produto, loja e região, e contexto de farma." },
      { title: "Resultado", desc: "Informação pronta no seu BI, Copilot e agentes internos." }
    ],
    stripLabel: "Leve contexto de farma para",
    stripItems: ["Copilot", "ChatGPT", "Claude", "Gemini", "seus agentes"],
    cta: "Veja como se conecta",
    note: "Cada fonte depende de licença, autorização e escopo acordados."
  },
  solucoes: {
    eyebrow: "Soluções",
    title: "Problemas do canal farma, *já entendidos*",
    intro: "Você não precisa descobrir do zero quais sinais importam. A Dinn chega com as dores do canal farmacêutico mapeadas.",
    tabs: { outcome: "Por resultado", team: "Por time" },
    outcomes: [
      { title: "Reduzir ruptura", desc: "Saiba onde falta produto por SKU, rede, cidade e loja, e aja antes de perder a venda.", tag: "Dinn Stock" },
      { title: "Negociar com evidência", desc: "Leve à reunião com a rede os dados de disponibilidade, persistência e lojas afetadas, com data de corte.", tag: "Dinn Stock" },
      { title: "Priorizar o campo", desc: "Uma lista do que verificar primeiro, em vez de um painel para interpretar.", tag: "Dinn Manager" },
      { title: "Acompanhar lançamentos", desc: "Veja a presença do produto novo por rede e região desde as primeiras semanas.", tag: "Dinn Stock" },
      { title: "Orientar o SAC", desc: "Indique as farmácias com maior chance de ter o produto, com a confiança explícita.", tag: "Dinn Locator" },
      { title: "Entender o movimento", desc: "Separe queda de demanda de ruptura, sortimento ou execução.", tag: "Dinn Pulse" },
      { title: "Dados de farma no seu BI e na sua IA", desc: "Mercado, dados internos e farmácias prontos para o seu stack.", tag: "Dinn Conecta" }
    ],
    teams: [
      { title: "Liderança comercial", desc: "Onde concentrar a atenção e como a situação evoluiu em 30, 60 e 90 dias." },
      { title: "Trade marketing", desc: "Redes, regiões, lojas e SKUs priorizados para agir no canal." },
      { title: "Força de vendas e campo", desc: "Uma lista simples e confiável por carteira ou território." },
      { title: "Demanda e supply", desc: "Sinais de ruptura e de giro, com exceções e confiança." },
      { title: "Inteligência de mercado", desc: "Disponibilidade cruzada com a base de mercado autorizada." },
      { title: "SAC e experiência do cliente", desc: "Onde encontrar o produto e qual alternativa indicar." },
      { title: "Tecnologia e dados", desc: "Dados tratados com fonte, atualização e cobertura, via arquivo, API ou MCP." }
    ]
  },
  faq: {
    title: "Perguntas frequentes",
    items: [
      {
        question: "Já usamos auditorias como IQVIA e Close-Up. Por que precisaríamos da Dinn?",
        answer: "A Dinn **não substitui** as auditorias de mercado: ela as **complementa**. IQVIA e Close-Up são ótimas para planejamento, share e decisões de longo prazo, com dados de período fechado. A Dinn acompanha a disponibilidade no dia a dia (D-1), loja a loja, e mostra **onde agir agora**, antes que a ruptura vire venda perdida. Quando houver autorização, as duas leituras podem ser cruzadas no mesmo recorte."
      },
      {
        question: "A implantação exige um esforço grande de TI?",
        answer: "Não precisa. A Dinn pode começar com fontes externas, sem depender dos seus sistemas internos. A implantação tem escopo delimitado e acontece em **até 30 dias** depois que os pré-requisitos combinados estão prontos. Quando fizer sentido, seus dados internos entram para enriquecer a leitura."
      },
      {
        question: "A Dinn é só mais um dashboard?",
        answer: "Não. A mesma base responde a três níveis de decisão: **estratégico** (onde concentrar a atenção), **tático** (o que discutir com cada rede) e **operacional** (quais lojas verificar primeiro). A saída não é um gráfico para interpretar, e sim uma fila concreta: cada loja com o sinal, a pergunta a responder e o retorno esperado."
      },
      {
        question: "A Dinn compete com o CRM (Salesforce, Veeva, SalesFarma) que já usamos?",
        answer: "Não. O CRM continua sendo o sistema de registro de visitas, pedidos e carteira. A Dinn é uma camada de inteligência sobre o canal: quando a integração é acordada, leva ao CRM o **contexto do que está acontecendo nas farmácias**, para o time priorizar melhor dentro da ferramenta que já usa."
      },
      {
        question: "E se as auditorias passarem a entregar dados diários?",
        answer: "Dado rápido sem prioridade é só mais ruído. O diferencial da Dinn é transformar a leitura do canal em **prioridade e próximo passo**: qual produto, em quais redes, em quais lojas, com fonte e confiança explícitas. A IA prepara a análise; **a equipe decide** o que fazer."
      },
      {
        question: "Em quanto tempo vemos valor?",
        answer: "Começamos por **um objetivo**, por exemplo reduzir a ruptura de um produto em uma região, e acompanhamos o mesmo recorte ao longo do tempo. A primeira leitura já mostra onde o problema se concentra; em 30 dias, dá para ver se o sinal persistiu ou diminuiu depois das ações do time."
      },
      {
        question: "Como a Dinn acompanha o estoque sem depender das nossas bases?",
        answer: "Agentes consultam os canais digitais das farmácias e registram o que cada fonte informa, com local e horário: esse é o **dado observado**. Onde não há resposta direta, a Dinn **estima** a partir de lojas comparáveis e do histórico, com nível de confiança. Cada registro diz como foi obtido."
      },
      {
        question: "Dados diários não vão sobrecarregar o time de campo?",
        answer: "É o contrário: a Dinn existe para reduzir o excesso de informação. Em vez de um painel para o representante interpretar, ela entrega **listas priorizadas**: quais lojas verificar primeiro, o que conferir em cada uma e qual retorno esperar."
      },
      {
        question: "A Dinn é só para a força de vendas?",
        answer: "Não. A mesma leitura atende **Trade**, **Comercial e campo**, **Demanda e supply**, **Inteligência de mercado**, **SAC** e **Tecnologia e dados**. Todos olham para a mesma fotografia de disponibilidade, o que reduz conflitos entre as áreas."
      },
      {
        question: "Dá para testar antes de fechar um contrato longo?",
        answer: "Sim. Liberamos **30 dias com um objetivo só**, com termo simples e alguém nosso acompanhando. No fim, fica claro se vale seguir, ajustar ou parar."
      },
      {
        question: "Como a Dinn trata segurança e confiabilidade dos dados?",
        answer: "O acesso tem **verificação em dois fatores por e-mail** e controle de permissões, e a integração com a identidade corporativa (**SSO**) pode ser habilitada. Cada dado é rastreável: fonte, data e a distinção entre observado e estimado ficam explícitas. As conexões com a IA do cliente são **somente leitura**."
      },
      {
        question: "O que é o Dinn Conecta?",
        answer: "É a camada que prepara e entrega **dados de farma no ambiente que sua equipe já usa**. A Dinn conecta fontes autorizadas (mercado, dados internos e farmácias), padroniza produto, loja e região, cuida da qualidade e da atualização e entrega no seu BI, Copilot, agentes ou API. Dados, infraestrutura e governança continuam com você."
      },
      {
        question: "Posso usar a Dinn no ChatGPT, no Claude ou no Copilot?",
        answer: "Sim. A Dinn se conecta ao seu ambiente de IA por **MCP**, com acesso autorizado e **somente leitura**. Você pergunta em linguagem natural e recebe a análise com recorte, período e limites. Recursos como agendamento e geração de arquivos dependem do plano e da configuração da sua IA."
      },
      {
        question: "Qual a diferença entre dado observado e estimado?",
        answer: "**Observado** é o que a fonte informou diretamente, com local e horário. **Estimado** é calculado a partir de lojas comparáveis e do histórico quando não há resposta direta, sempre com nível de confiança. A base é atualizada diariamente (D-1) e, em lojas elegíveis, dá para consultar a disponibilidade no momento."
      }
    ]
  },
  ctaFinal: {
    title: "Pronto para transformar sinais em *ação*?",
    description: "Veja numa demonstração como a Dinn mostra onde agir, e com qual confiança, para os seus produtos.",
    button: "Solicitar demo"
  },
  footer: {
    description: "A camada de inteligência para o canal farmacêutico. Uma iniciativa da DiWE Ventures Studio.",
    sectionA: "A Dinn",
    sectionLegal: "Legal",
    termos: "Termos",
    privacidade: "Privacidade",
    cookies: "Cookies",
    suporte: "Suporte",
    ctaTitle: "Pronto para começar?",
    ctaDesc: "Veja a Dinn com os seus produtos.",
    ctaButton: "Solicitar demo",
    rights: "© 2026 DiWE Ventures Studio. Todos os direitos reservados.",
    launch: "Lançamento"
  },
  privacy: {
    title: "Políticas de Privacidade",
    summaryTitle: "Sumário",
    summary: [
      "Informações Gerais",
      "Direitos do Usuário",
      "Dever de não fornecer dados de terceiros",
      "Informações coletadas",
      "Tipos de dados coletados",
      "Dados sensíveis",
      "Coleta de dados não previstos expressamente",
      "Fundamento jurídico para o tratamento dos dados pessoais",
      "Finalidades do tratamento dos dados pessoais",
      "Armazenamento dos dados pessoais",
      "Prazo de conservação dos dados pessoais",
      "Destinatários e transferência dos dados pessoais",
      "Papéis e Responsabilidades",
      "Do responsável pelo tratamento dos dados (Controlador)",
      "Do tratamento em nome do Controlador (Operador)",
      "Do Encarregado de Proteção de Dados (Data Protection Office)",
      "Segurança no Tratamento dos Dados Pessoais do usuário",
      "Dados de Navegação (Cookies)",
      "Gestão dos Cookies e configurações do navegador",
      "Cookies Essenciais",
      "Cookies Analíticos",
      "Cookies de Marketing",
      "Reclamação a uma autoridade de controle",
      "Das alterações",
      "Do Direito aplicável e do foro",
      "Validade e Controle",
      "Gestão do Documento",
      "Histórico do Documento"
    ],
    sections: [
      {
        title: "1. Informações Gerais",
        content: [
          "Esta Política de Privacidade descreve o tratamento dos dados pessoais realizados pela DINN, seja de forma automatizada ou manual, em seus serviços de atendimento online e canais de comunicação.",
          "Este documento foi desenvolvido em conformidade com a Lei Geral de Proteção de Dados (LGPD), Lei Federal nº 13.709/2018.",
          "O uso de qualquer serviço oferecido pela DINN implica aceitação integral dos termos da Política de Privacidade."
        ]
      },
      {
        title: "2. Direitos do Usuário",
        content: [
          "A DINN se compromete a seguir os princípios da LGPD, garantindo aos usuários os seguintes direitos:"
        ],
        list: [
          "Direito de confirmação e acesso",
          "Direito de retificação",
          "Direito à eliminação dos dados",
          "Direito à limitação do tratamento",
          "Direito de oposição",
          "Direito de portabilidade",
          "Direito de não ser submetido a decisões automatizadas",
          "Direito de anonimização e compartilhamento"
        ],
        footer: "Os usuários podem solicitar esses direitos enviando um e-mail para <a href=\"mailto:vinicius.silva@diwe.com.br\" style=\"color: #5625F2; text-decoration: underline;\">vinicius.silva@diwe.com.br</a>."
      },
      {
        title: "3. Dever de não fornecer dados de terceiros",
        content: [
          "Ao utilizar os serviços da DINN, os usuários devem fornecer apenas seus próprios dados pessoais."
        ]
      },
      {
        title: "4. Dados e Informações coletadas",
        content: [
          "A DINN coleta dados pessoais necessários para fornecer serviços e cumprir obrigações legais. Os tipos de dados coletados incluem:"
        ],
        list: [
          "Nome, e-mail, telefone, endereço",
          "Informações sobre preferências de serviços",
          "Dados de navegação e IP"
        ]
      },
      {
        title: "5. Fundamento jurídico para o tratamento dos dados pessoais",
        content: [
          "O tratamento dos dados pessoais pela DINN é baseado no consentimento do usuário e em outros fundamentos legais da LGPD, como a execução de contratos e obrigações legais."
        ]
      },
      {
        title: "6. Finalidades do tratamento dos dados pessoais",
        content: [
          "A DINN trata os dados pessoais para:"
        ],
        list: [
          "Oferecer produtos e serviços",
          "Recrutamento de colaboradores",
          "Suporte técnico e comercial",
          "Cumprimento de obrigações legais"
        ]
      },
      {
        title: "7. Armazenamento dos dados pessoais",
        content: [
          "Os dados pessoais são armazenados por períodos limitados, de acordo com as finalidades e exigências legais, e podem ser mantidos em servidores no Brasil ou no exterior."
        ]
      },
      {
        title: "8. Destinatários e transferência dos dados pessoais",
        content: [
          "A DINN pode compartilhar dados com parceiros de negócios e autoridades legais, sempre respeitando as exigências da LGPD."
        ]
      },
      {
        title: "9. Papéis e Responsabilidades",
        customList: [
          "<strong>Controlador:</strong> A DINN é responsável pelo tratamento dos dados pessoais de seus usuários.",
          "<strong>Operador:</strong> A DINN pode atuar como operadora em nome de clientes e parceiros.",
          "<strong>Encarregado de Proteção de Dados:</strong> A DINN nomeou o Sr. Vinicius Fernandes Silva como o encarregado de dados, que pode ser contatado via <a href=\"mailto:vinicius.silva@diwe.com.br\" style=\"color: #5625F2; text-decoration: underline;\">vinicius.silva@diwe.com.br</a>."
        ]
      },
      {
        title: "10. Segurança no Tratamento dos Dados Pessoais",
        content: [
          "A DINN adota medidas técnicas para garantir a segurança dos dados pessoais, como criptografia e sistemas de segurança da informação."
        ]
      },
      {
        title: "11. Dados de Navegação (Cookies)",
        content: [
          "A DINN utiliza cookies para melhorar a experiência do usuário. Estes podem ser desativados pelo usuário diretamente no navegador."
        ]
      },
      {
        title: "12. Reclamação a uma autoridade de controle",
        content: [
          "Os usuários têm o direito de registrar reclamações sobre o uso de seus dados junto à Autoridade Nacional de Proteção de Dados (ANPD)."
        ]
      },
      {
        title: "13. Das alterações",
        content: [
          "A DINN poderá alterar esta Política de Privacidade a qualquer momento. A versão atualizada estará sempre disponível em nosso site."
        ]
      },
      {
        title: "14. Do Direito aplicável e do foro",
        content: [
          "O foro da comarca onde a DINN está localizada será responsável por resolver quaisquer litígios decorrentes da presente política."
        ]
      },
      {
        title: "15. Validade e Controle",
        content: [
          "Este documento foi publicado em [Data] e será revisado anualmente."
        ]
      },
      {
        title: "16. Histórico do Documento",
        content: [
          "<strong>Versão 1.0:</strong> Criado em 17/10/2024"
        ]
      }
    ]
  },
  feedback: {
    title: "Deixe seu Feedback"
  },
  testimonials: {
    title: "O que nossos clientes dizem",
    readMore: "Ver mais",
    readLess: "Ver menos",
    items: [
      {
        quote: "A equipe do Dinn se destacou por sua capacidade de entender profundamente nosso negócio, indo além da entrega de um simples produto digital. Eles ofereceram insights valiosos de negócios e mostraram uma disposição constante para acolher feedbacks e realizar ajustes, garantindo que a solução desenvolvida realmente agregasse valor à nossa equipe de vendas. Essa abordagem colaborativa e adaptativa foi crucial para o sucesso de nossa parceria.",
        name: "Natali Pereira dos Santos",
        designation: "Analista de Inovação da Libbs",
        src: "/depoiment/Natali.avif"
      },
      {
        quote: "+ 1 visita ao dia. O Dinn sugeriu as rotas de forma impecável, nota 10 de 10. Me orientou super bem dentro de uma região.",
        name: "Roberto",
        designation: "Promotor Médico na Eurofarma - Chile",
        src: "/depoiment/Roberto.avif"
      },
      {
        quote: "Participar do projeto piloto com a Dinn foi uma experiência transformadora, e com vários aprendizados ao longo da caminhada. A abordagem inovadora e a tecnologia empregada no projeto não apenas otimizaram os nossos processos internos, mas também ampliaram significativamente a nossa visão de futuro com uma perspectiva de que possamos entregar algo de valor e assim transformar tudo que for aprendido em algo que faça a diferença na vida das pessoas.",
        name: "Wilson Jorge de Assis Junior",
        designation: "Gerente Regional de Vendas",
        src: "/depoiment/Wilson.avif"
      },
      {
        quote: "Menor tempo de pré-visita. O Dinn diminuiu em 10 minutos o tempo de preparação para as visitas, permitindo-me realizar uma visita a mais diariamente.",
        name: "Camila",
        designation: "Promotora Médico na Eurofarma - Chile",
        src: "/depoiment/Camila.avif"
      }
    ]
  },
  blog: {
    heroTitle: "Conteúdos do Dinn",
    searchPlaceholder: "Busque seu conteúdo aqui",
    noResultsTitle: "Nenhum conteúdo encontrado",
    noResultsDesc: "Tente ajustar sua busca por outros termos.",
    readArticle: "Ler artigo",
    viewContent: "Ver conteúdo",
    minRead: "min de leitura",
    backToBlog: "Voltar para o Blog",
    ctaTitle: "Transforme dados em decisões estratégicas",
    ctaText: "A Dinn mostra onde falta produto nas farmácias, o que mudou e onde agir primeiro, com fonte e confiança explícitas.",
    ctaBtn: "Solicitar demonstração",
    recommended: "Recomendados para você",
    writtenBy: "Por"
  }
};
