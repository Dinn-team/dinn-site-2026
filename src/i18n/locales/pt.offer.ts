// Textos das páginas de produto, oferta e confiança da rodada de 15/10/2026
// (dinn_site_correcoes_conteudo_2026-10-15.md): Localizador e tempo real,
// funcionalidades, Dinn Conecta, integrações e API, planos, cobertura,
// pesquisas, comparativos, sobre a Dinn, clientes e entradas por objetivo.
//
// Regras editoriais do documento: nada de número, país, rede ou certificação
// sem fonte; tempo real é consulta sob demanda; Conecta é a camada de dados e
// MCP é uma interface; "sob consulta" não é "indisponível".

export const offerPt = {
  menu: {
    platform: "Plataforma",
    platformOverview: "Visão da plataforma",
    features: "Funcionalidades",
    locator: "Localizador e estoque em tempo real",
    conecta: "Dinn Conecta",
    integrations: "Integrações e API",
    coverage: "Cobertura",
    platformAll: "Ver toda a plataforma",
    solutionsAll: "Escolher por objetivo, área ou funcionalidade",
    compare: "Comparativos",
    plans: "Planos",
    plansOverview: "Planos e contratação",
    plansAll: "Comparar os planos",
    research: "Pesquisas e projetos especiais",
    company: "A Dinn",
    about: "Sobre a Dinn",
    trust: "Confiança e controles",
    contact: "Contato",
    companyAll: "Conhecer a Dinn"
  },

  // ── Entradas por objetivo, área e funcionalidade ──────────────────────────
  solutionsHub: {
    meta: {
      title: "Soluções | Dinn",
      description: "Comece pelo seu objetivo, pela sua área ou pela funcionalidade que procura: cada entrada leva à página que responde à sua pergunta."
    },
    hero: {
      eyebrow: "Soluções",
      title: "Comece pela *pergunta que o seu time faz*",
      lead: "Por objetivo, por área ou por funcionalidade. Nomes diferentes podem levar à mesma resposta: escolha o caminho mais natural para você."
    },
    goals: {
      title: "Por objetivo",
      intro: "O que o seu time quer resolver agora.",
      open: "Abrir",
      items: [
        { label: "Reduzir ruptura e priorizar verificações", text: "Veja onde o produto pode estar faltando e por quais lojas começar a conferir.", href: "/solucoes/trade-kam-campo" },
        { label: "Verificar a disponibilidade agora", text: "Consulte a loja no momento em que precisa orientar alguém, e veja o horário da resposta.", href: "/produtos/localizador" },
        { label: "Priorizar contas e lojas da carteira", text: "Uma fila com o sinal, a data e a pergunta a responder em cada loja.", href: "/solucoes/trade-kam-campo" },
        { label: "Investigar abastecimento e distribuição", text: "Cruze o CD e as farmácias da região para investigar onde pode estar a restrição.", href: "/solucoes/supply-distribuicao" },
        { label: "Entender giro, preço e concorrência", text: "Compare o seu produto e a categoria nas mesmas lojas, com a origem de cada leitura.", href: "/solucoes/inteligencia-pricing" },
        { label: "Acompanhar um lançamento", text: "Presença por rede e região, semana a semana, contra o plano que o seu time definiu.", href: "/solucoes/marketing-lancamentos" },
        { label: "Orientar o consumidor no SAC", text: "Disponibilidade e proximidade na mesma tela, com a fonte e a data de cada indicação.", href: "/solucoes/sac-customer-experience" },
        { label: "Levar os dados ao meu BI ou à minha IA", text: "Dados de farma preparados e atualizados no ambiente que a sua equipe já usa.", href: "/produtos/conecta" }
      ]
    },
    areas: {
      title: "Por área",
      intro: "Cada área chega com uma pergunta diferente. Escolha a sua."
    },
    features: {
      title: "Por funcionalidade",
      intro: "Quando você já sabe o que procura.",
      items: [
        { label: "Estoque em tempo real", text: "Consulta sob demanda, com o horário da resposta.", href: "/produtos/localizador" },
        { label: "Estoque estimado", text: "O que a Dinn infere quando não há leitura direta, e com que confiança.", href: "/funcionalidades#estimado" },
        { label: "Histórico e visões salvas", text: "O mesmo recorte, comparável ao longo do tempo.", href: "/funcionalidades#historico" },
        { label: "Insights", text: "Pergunte em português e receba o número com recorte, fonte e método.", href: "/funcionalidades#insights" },
        { label: "API, arquivos e MCP", text: "A mesma informação fora da plataforma.", href: "/integracoes" },
        { label: "Alertas e rotinas", text: "Aviso quando o sinal muda, nos canais habilitados no escopo.", href: "/funcionalidades#alertas" }
      ]
    },
    more: "Não achou o seu caso?",
    moreCta: "Conte a decisão que quer melhorar"
  },

  // ── Cena de estoque em tempo real (home e página do Localizador) ──────────
  realtime: {
    eyebrow: "Estoque em tempo real",
    title: "Precisa verificar agora? *Consulte o estoque em tempo real.*",
    text: "No Localizador, consulte a disponibilidade informada naquele momento pelas lojas compatíveis. Veja o horário da consulta e diferencie essa resposta do estoque D-1 ou estimado.",
    condition: "Disponível conforme rede, fonte e escopo contratado. A informação pode mudar após a consulta.",
    sim: "Simulação · valores de exemplo",
    mapAria: "Mapa do Localizador com farmácias próximas ao endereço do consumidor, coloridas pelo nível de estoque.",
    stepsLabel: "Da busca à orientação",
    steps: [
      { title: "Localizar", text: "Informe o endereço ou a área e o raio. As farmácias próximas aparecem no mapa." },
      { title: "Escolher a loja", text: "Abra uma loja. A leitura de base é a de ontem; só as lojas compatíveis têm a consulta." },
      { title: "Consultar agora", text: "A Dinn pergunta à fonte da loja naquele momento." },
      { title: "Resposta e horário", text: "A resposta vem com o horário da consulta, separada da leitura de ontem." },
      { title: "Orientar", text: "Oriente sabendo o que foi informado e quando, e compartilhe o endereço." }
    ],
    stores: [
      { name: "Farmácia Centro", network: "Rede A" },
      { name: "Farmácia Jardim", network: "Rede B" },
      { name: "Farmácia Norte", network: "Rede A" },
      { name: "Farmácia Praça", network: "Independente" },
      { name: "Farmácia Sul", network: "Rede C" },
      { name: "Farmácia Leste", network: "Rede B" }
    ],
    popup: {
      stockTitle: "Estoque do produto",
      exact: "Estoque exato",
      estimated: "Estoque estimado",
      consult: "Consultar agora",
      consulting: "Consultando PDV...",
      liveNow: "Consulta feita agora · {time}",
      available: "disponível",
      updated: "Atualizado ontem · 23:10",
      price: "R$ 48,90",
      perUnit: "por unidade",
      giro: "Giro",
      perDay: "un./dia",
      stalled: "Parado",
      stalledDays: "há 9 dias",
      notEligible: "Consulta em tempo real não disponível nesta loja.",
      share: "Compartilhar",
      shared: "Endereço e link copiados",
      units: "un."
    },
    legend: {
      d1: "Leitura D-1: o que a fonte informou ontem.",
      est: "Estimado: calculado por lojas comparáveis.",
      live: "Tempo real: a resposta da loja no momento da consulta."
    },
    orient: "Orientação ao consumidor: “A loja informou agora, e o estoque pode mudar. Vale confirmar antes de ir.”",
    link: "Entender as três leituras",
    hint: "Clique numa loja do mapa, role a página ou espere: a cena segue sozinha."
  },

  // ── Página do Localizador ─────────────────────────────────────────────────
  locator: {
    meta: {
      title: "Localizador e estoque em tempo real | Dinn",
      description: "Consulte a disponibilidade informada pelas lojas compatíveis no momento em que precisa e diferencie a resposta do estoque D-1 ou estimado."
    },
    hero: {
      eyebrow: "Dinn Localizador",
      title: "Precisa verificar agora? *Consulte o estoque em tempo real.*",
      lead: "No Localizador, consulte a disponibilidade informada naquele momento pelas lojas compatíveis. Veja o horário da consulta e diferencie essa resposta do estoque D-1 ou estimado."
    },
    scene: { title: "Da busca à orientação, em cinco passos" },
    readings: {
      title: "Três leituras, três usos",
      intro: "Três leituras convivem na mesma loja. A Dinn diz sempre qual delas você está vendo, e cada uma serve a uma pergunta diferente.",
      columns: ["Leitura", "O que é", "Atualização", "Quando usar"],
      rows: [
        ["Estoque D-1 (observado)", "O que a fonte informou no dia anterior, por loja e com a data.", "Base diária, com a data de cada leitura.", "Priorizar e acompanhar um recorte."],
        ["Estimado", "Calculado a partir de lojas comparáveis e do histórico quando não há resposta direta, sempre com nível de confiança.", "Na atualização da base.", "Preencher a ausência de sinal direto, confirmando antes de agir."],
        ["Tempo real (consulta)", "A resposta que a loja informa à fonte no momento da consulta, com o horário.", "No momento em que você consulta, uma loja por vez.", "Confirmar a disponibilidade antes de orientar alguém ou de uma visita."]
      ]
    },
    when: {
      title: "Quando vale consultar agora",
      items: [
        { title: "A ligação do consumidor", text: "O paciente pergunta onde achar o remédio. Em vez de ligar loja por loja, consulte a mais próxima e responda com o que ela informou agora." },
        { title: "A visita desta tarde", text: "Antes de falar com a rede, veja o que a loja informa neste momento e leve a conversa com o dado do dia, não com o de ontem." },
        { title: "Depois da reposição", text: "Combinou a entrega com a rede? Consulte a mesma loja de novo e veja se o produto já apareceu na resposta." }
      ]
    },
    conditions: {
      title: "O que precisa estar de pé",
      items: [
        { title: "Rede e fonte compatíveis", text: "A loja precisa responder à pergunta. A lista de redes e fontes elegíveis vem da cobertura validada." },
        { title: "Escopo contratado", text: "O estoque em tempo real é um complemento do plano. Condições e limites estão em Planos." },
        { title: "Uma consulta, uma resposta", text: "A resposta vale para aquele horário. Não é uma atualização contínua de toda a base." }
      ],
      coverageLink: "Ver a cobertura",
      plansLink: "Ver planos e complementos"
    },
    faq: {
      title: "Perguntas sobre estoque em tempo real",
      items: [
        { question: "Tempo real quer dizer que vejo todas as lojas atualizadas o tempo todo?", answer: "Não. É uma consulta sob demanda: você escolhe uma loja compatível e a Dinn pergunta à fonte naquele momento. A leitura de base continua sendo D-1." },
        { question: "A resposta garante que o produto estará lá?", answer: "Não. É o que a fonte informou naquele horário. O estoque pode mudar depois, e a orientação ao consumidor deve dizer isso." },
        { question: "Todas as redes têm consulta em tempo real?", answer: "Não. Depende de rede, fonte e escopo contratado. Validamos o recorte com você antes de começar." },
        { question: "Qual a diferença para o estoque estimado?", answer: "O estimado é calculado por lojas comparáveis quando não há resposta direta. A consulta em tempo real é a resposta da própria loja, com o horário." }
      ]
    },
    cta: {
      title: "Quer ver a consulta com a sua rede e o seu produto?",
      desc: "Vamos validar produtos, redes, regiões e a decisão que sua equipe quer melhorar.",
      button: "Converse sobre o recorte da sua operação"
    }
  },

  // ── Funcionalidades ───────────────────────────────────────────────────────
  features: {
    meta: {
      title: "Funcionalidades | Dinn",
      description: "O que a Dinn faz, do problema à decisão: problema, entrada, ação na interface, saída e decisão apoiada de cada funcionalidade, com atualização, escopo e limites."
    },
    hero: {
      eyebrow: "Funcionalidades",
      title: "O que a Dinn faz, *do problema à decisão*",
      lead: "Cada funcionalidade mostra o problema que resolve, o que entra, o que você faz na interface, o que sai e a decisão que apoia, com atualização, escopo e limites."
    },
    listLabel: "Funcionalidades",
    kinds: { produto: "Produto", interface: "Interface", integracao: "Integração", servico: "Serviço" },
    kindsNote: "Produto é o que a Dinn entrega. Interface é por onde você acessa. Integração leva os dados ao seu ambiente. Serviço é trabalho sob escopo.",
    flow: {
      problem: "Problema",
      input: "Entrada",
      action: "Ação na interface",
      output: "Saída",
      decision: "Decisão apoiada",
      limit: "Limite da leitura",
      more: "Saiba mais"
    },
    sim: "Exemplos ilustrativos, com valores de exemplo. A disponibilidade de cada funcionalidade segue o plano contratado.",
    items: [
      {
        id: "disponibilidade", name: "Disponibilidade e ruptura", kind: "produto",
        problem: "Qual produto está faltando, e por onde começo a verificar?",
        input: "SKU, rede e região.",
        action: "Seleciona o recorte. A Dinn mostra o período e o denominador da leitura e abre as lojas.",
        output: "Lojas ordenadas pela proporção de dias sem estoque sobre os dias observados.",
        decision: "Quais lojas verificar primeiro.",
        limit: "Ausência não é ruptura confirmada. Lojas que nunca venderam o item ficam fora do cálculo.",
        href: "/solucoes/trade-kam-campo"
      },
      {
        id: "localizador", name: "Localizador", kind: "produto",
        problem: "Onde o consumidor encontra o produto perto dele?",
        input: "Endereço ou área, raio e rede.",
        action: "Busca e compara as lojas por distância, com a origem e a atualização de cada leitura.",
        output: "Lojas próximas com disponibilidade, distância e a data da informação.",
        decision: "Qual loja indicar e com que segurança.",
        limit: "Chance de estoque não é garantia de estoque. A cobertura varia por rede e fonte.",
        href: "/produtos/localizador"
      },
      {
        id: "tempo-real", name: "Estoque em tempo real", kind: "produto",
        problem: "Preciso confirmar agora, antes de orientar alguém.",
        input: "Uma loja compatível, escolhida no Localizador.",
        action: "Aciona “Consultar agora”. A Dinn pergunta à fonte da loja naquele momento.",
        output: "A resposta da fonte e o horário da consulta, separados da leitura D-1.",
        decision: "Se vale indicar a loja ou conferir outra.",
        limit: "Disponível conforme rede, fonte e escopo contratado. A informação pode mudar após a consulta.",
        href: "/produtos/localizador"
      },
      {
        id: "estimado", name: "Estoque estimado", kind: "produto",
        problem: "A fonte não respondeu. O que posso inferir?",
        input: "Histórico da loja e lojas comparáveis.",
        action: "A Dinn estima onde não há leitura direta e mostra a referência usada e a confiança.",
        output: "Uma estimativa rotulada como tal, com nível de confiança.",
        decision: "Onde confirmar antes de agir.",
        limit: "É estimativa, não leitura da loja. Confirme quando a decisão for sensível.",
        href: "/cobertura"
      },
      {
        id: "historico", name: "Histórico, filtros e visões salvas", kind: "interface",
        problem: "Como comparo o mesmo recorte ao longo do tempo?",
        input: "Período, filtros e o recorte que importa para a equipe.",
        action: "Aplica os filtros, salva a visão e volta a ela na próxima rotina.",
        output: "A mesma leitura, comparável de uma semana para outra.",
        decision: "Se o sinal persistiu, diminuiu ou mudou de lugar.",
        limit: "O histórico disponível e a quantidade de painéis dependem do plano contratado.",
        href: "/planos"
      },
      {
        id: "giro-preco", name: "Giro, preço e estoque sem movimento", kind: "produto",
        problem: "O produto sai? A que preço? Onde o saldo não se mexe?",
        input: "Produto, rede e janela de tempo.",
        action: "Escolhe a janela. A Dinn mostra o cálculo e compara só o que é comparável.",
        output: "Estimativa de giro no recorte, preço observado e dias sem movimento.",
        decision: "Onde investigar queda de giro ou remanejar saldo.",
        limit: "Movimentação não é venda confirmada. O giro é uma estimativa.",
        href: "/solucoes/inteligencia-pricing"
      },
      {
        id: "distribuicao", name: "Distribuição", kind: "produto",
        problem: "O furo está no CD, na reposição ou na farmácia?",
        input: "CD, lojas que ele abastece e produto.",
        action: "Cruza o estoque no CD com a disponibilidade nas lojas, pelo vínculo de abastecimento confirmado.",
        output: "O CD e as lojas lado a lado, com a cobertura em dias.",
        decision: "Onde conferir pedido, reposição ou remanejamento.",
        limit: "Proximidade geográfica não é vínculo de abastecimento. O padrão é hipótese; a causa exige investigação.",
        href: "/solucoes/supply-distribuicao"
      },
      {
        id: "mercado", name: "Mercado e concorrência", kind: "produto",
        problem: "Perdi participação ou perdi venda?",
        input: "Cesta de produtos, universo de lojas e janela.",
        action: "Define a cesta e as lojas comparáveis e compara o seu produto com a categoria.",
        output: "Evolução do seu produto e da categoria nas mesmas lojas, e onde só o concorrente tem estoque.",
        decision: "Onde recuperar espaço.",
        limit: "A venda é estimada. Dados de concorrentes aparecem agregados e respeitam direitos de uso.",
        href: "/solucoes/inteligencia-pricing"
      },
      {
        id: "insights", name: "Insights", kind: "interface",
        problem: "Quero a resposta sem montar um painel.",
        input: "Uma pergunta em português.",
        action: "Pergunta ao Dinn Insights. A resposta traz o recorte, a fonte e o método.",
        output: "Um número com recorte, data, método e natureza (observado ou estimado).",
        decision: "Qual análise abrir em seguida.",
        limit: "Responde dentro do recorte e das capacidades do plano. Hipóteses aparecem como hipóteses.",
        href: "/plataforma"
      },
      {
        id: "priorizacao", name: "Priorização e feedback", kind: "produto",
        problem: "Com tantos sinais, por onde a equipe começa?",
        input: "Sinais do recorte e a carteira da equipe.",
        action: "Ordena a lista pelo sinal, atribui o responsável e registra o que a equipe encontrou.",
        output: "Uma lista com sinal, data, responsável e o registro do retorno.",
        decision: "Quem verifica o quê, e o que acompanhar depois.",
        limit: "A Dinn prepara a lista. A agenda e a decisão são da equipe.",
        href: "/solucoes/trade-kam-campo"
      },
      {
        id: "exportacoes", name: "Exportações, API e MCP", kind: "integracao",
        problem: "Preciso da mesma informação fora da plataforma.",
        input: "O recorte e o destino autorizado.",
        action: "Escolhe a modalidade: arquivo, consumo técnico ou IA autorizada.",
        output: "A mesma leitura em arquivo, na API ou na IA da empresa, com origem e data.",
        decision: "Onde a sua equipe passa a usar o dado.",
        limit: "Cada modalidade depende de plano, autorização e escopo. O MCP é de consulta, somente leitura.",
        href: "/integracoes"
      },
      {
        id: "alertas", name: "Alertas e rotinas", kind: "interface",
        problem: "Quero saber quando algo muda, sem abrir a plataforma.",
        input: "A regra, o canal e a frequência.",
        action: "Define a regra de acompanhamento e o canal em que o aviso chega.",
        output: "Um aviso com o sinal, o recorte e a data.",
        decision: "Quando agir ou rever o recorte.",
        limit: "Seguem os gatilhos e canais habilitados no escopo. Automações da sua IA são configuradas por você.",
        href: "/plataforma"
      },
      {
        id: "conecta", name: "Dinn Conecta", kind: "integracao",
        problem: "Cada análise começa juntando tudo de novo.",
        input: "Fontes autorizadas: mercado, dados internos e farmácias.",
        action: "A Dinn reúne, padroniza produto, loja e região e mantém o caminho atualizado.",
        output: "Dados de farma preparados no seu BI, Copilot ou projeto.",
        decision: "A pergunta que o seu time quer responder, sem refazer a base.",
        limit: "Fontes e integrações conforme acesso, licença e escopo. Não substitui licenças nem executa ações sozinho.",
        href: "/produtos/conecta"
      },
      {
        id: "projetos", name: "Pesquisas e projetos especiais", kind: "servico",
        problem: "Minha pergunta pede um recorte próprio.",
        input: "A pergunta, o universo e as fontes disponíveis.",
        action: "Avaliamos viabilidade e escopo com você.",
        output: "Relatório, base tratada ou fluxo para o BI, conforme acordado.",
        decision: "A decisão que motivou o projeto.",
        limit: "Sob avaliação de viabilidade e escopo, com os direitos das fontes preservados.",
        href: "/pesquisas"
      }
    ],
    cta: {
      title: "Qual funcionalidade responde à sua pergunta?",
      desc: "Vamos validar produtos, redes, regiões e a decisão que sua equipe quer melhorar.",
      button: "Converse sobre o recorte da sua operação"
    }
  },

  // ── Dinn Conecta (base: prévia 08, dinn-data-preview) ─────────────────────
  conecta: {
    meta: {
      title: "Dinn Conecta | Dados de farma no ambiente da sua equipe",
      description: "A Dinn conecta mercado, dados internos e farmácias, prepara e atualiza o contexto de farma e entrega no BI, no Copilot e nos projetos da sua empresa."
    },
    hero: {
      eyebrow: "Para a indústria farmacêutica",
      title1: "Dados de farma.",
      title2: "Trabalhando juntos.",
      lead: "Mercado, dados internos e farmácias com o contexto\nque seu BI, Copilot e projetos precisam.",
      cta: "Veja como se conecta"
    },
    map: {
      aria: "Mercado, dados da empresa e sinais das farmácias passam pela Dinn Conecta e chegam ao BI, Copilot e projetos internos.",
      sources: "Suas fontes",
      environment: "Seu ambiente",
      market: { name: "Mercado", sub: "IQVIA · Close-Up" },
      company: { name: "Sua empresa", sub: "Vendas · ERP · lake" },
      pharmacy: { name: "Farmácias", sub: "Contexto Dinn" },
      core: { name: "Conecta", sub: "Reúne · organiza · atualiza" },
      bi: { name: "Seu BI", sub: "Análises e painéis" },
      ai: { name: "Seu Copilot", sub: "Perguntas do time" },
      project: { name: "Seu projeto", sub: "Suas ferramentas" },
      yours: "Seu projeto continua sendo seu.",
      dinn: "A Dinn cuida da conexão.",
      caption: "Fontes e integrações conforme acesso, licença e escopo."
    },
    problem: {
      label: "Menos trabalho repetido",
      title1: "Cada análise começa",
      title2: "juntando tudo de novo?",
      text: "Os dados já existem. O trabalho está em fazer uma fonte conversar com a outra.",
      items: [
        { n: "01 / Reunir", title: "Arquivos espalhados.", text: "Mercado em uma base. Vendas no ERP. Disponibilidade em outra fonte." },
        { n: "02 / Conferir", title: "Recortes diferentes.", text: "Nomes de produtos, redes e períodos que precisam ser combinados." },
        { n: "03 / Manter", title: "Tudo muda de novo.", text: "A próxima atualização chega. E alguém precisa cuidar desse caminho." }
      ],
      bottom: "A Dinn prepara e mantém os dados. Seu time usa."
    },
    context: {
      label: "Contexto para IA",
      title1: "Na era da IA,",
      title2: "contexto importa.",
      text: "Seu time já está sendo cobrado para conectar bases internas e disponibilizar esses dados nos agentes da empresa. Esse projeto continua sendo seu. A Dinn entra para organizar, higienizar e padronizar o caminho com conhecimento de farma.",
      stackAria: "A infraestrutura e os dados continuam com o cliente. A Dinn adiciona uma camada de organização e contexto farmacêutico antes dos dados chegarem ao BI e aos agentes.",
      owner: { label: "Continua com você", text: "Seus dados · Sua infraestrutura · Sua governança" },
      layer: { label: "Camada Dinn", text: "Higienização · Padronização · Contexto de farma" },
      destination: { label: "Pronto para o seu ambiente", text: "BI · Copilot · Agentes internos" },
      cta: { title: "Leve contexto de farma para", text: "Copilot · ChatGPT · Claude · Gemini · seus agentes", button: "Ver na prática" }
    },
    apps: {
      label: "Na rotina de farma",
      title1: "Da conexão",
      title2: "à pergunta do seu time.",
      legend: "Escolha uma aplicação",
      caption: "Exemplo com dados fictícios. Não representa um resultado de cliente.",
      nextLabel: "Próxima conversa",
      askLabel: "Uma pergunta no seu Copilot",
      items: [
        {
          id: "disponibilidade", tab: "Disponibilidade", area: "Trade e comercial", kind: "table",
          title: "Onde investigar a falta de produto?",
          text: "Cruze a venda interna com a disponibilidade nas farmácias. Priorize redes e regiões para conversar sobre abastecimento.",
          flow: ["Venda interna", "Prioridade por rede"],
          sheet: "Pauta da próxima reunião",
          meta: ["Produto A", "Última semana"],
          columns: ["Região", "Venda interna", "Nas farmácias"],
          rows: [["Sul", "Em queda", "Verificar falta ↗"], ["Sudeste", "Estável", "Sem mudança"], ["Centro-Oeste", "Em alta", "Acompanhar"]],
          next: "Investigar o abastecimento na Região Sul com a rede.",
          source: "Venda interna + disponibilidade Dinn."
        },
        {
          id: "lancamentos", tab: "Lançamentos", area: "Gestão de marcas", kind: "launch",
          title: "O lançamento chegou às lojas previstas?",
          text: "Compare o plano de lançamento com os sinais nas farmácias. Leve ao campo uma lista do que precisa ser conferido.",
          flow: ["Plano de lançamento", "Lojas para verificar"],
          sheet: "Acompanhamento do lançamento",
          meta: ["Produto A", "Lojas previstas no plano"],
          rows: [["Rede A", "Sinal encontrado", "ok"], ["Rede B", "Verificar com o campo", "mark"], ["Rede C", "Aguardando atualização", "wait"]],
          next: "Conferir as lojas da Rede B antes de rever o plano.",
          source: "Plano de lançamento + disponibilidade Dinn. Ausência de sinal não comprova falta de estoque."
        },
        {
          id: "copilot", tab: "Copilot", area: "Dados e IA", kind: "ask",
          title: "Seu Copilot consegue usar os dados de farma?",
          text: "Leve dados internos, mercado e contexto das farmácias à IA da empresa. Com origem, atualização e limites claros.",
          flow: ["Dados do negócio", "Contexto para a IA"],
          question: "Onde vale investigar a queda do Produto A?",
          answer: "Comece pela Região Sul. Cruze a venda interna com as lojas sinalizadas e confira o histórico de pedidos.",
          source: "A resposta ajuda a investigar. Não presume a causa."
        }
      ]
    },
    team: {
      label: "Junto com sua equipe",
      title1: "O projeto é seu.",
      title2: "A operação dos dados\npode ficar com a Dinn.",
      text: "Da implementação ao acompanhamento.\nSem substituir seu time ou suas ferramentas.",
      yours: { label: "Seu time", title: "Prioridades, ferramentas e acessos.", text: "Decide o que precisa responder e como usar os dados." },
      dinn: { label: "Dinn Conecta", title: "Fontes, qualidade e atualização.", text: "Prepara os dados e cuida das conexões no escopo combinado." }
    },
    faq: {
      label: "Antes de começar",
      title: "Algumas respostas.",
      items: [
        { question: "Podemos usar nossas licenças de IQVIA e Close-Up?", answer: "O uso depende das permissões do fornecedor e do acesso autorizado pela sua empresa. A Dinn não substitui a licença. Validamos fontes e direitos antes de definir a integração." },
        { question: "Funciona com nosso BI, data lake ou Copilot?", answer: "A proposta é trabalhar com o ambiente que vocês já têm. O caminho de entrega é definido com sua equipe técnica, conforme segurança, ferramentas e viabilidade." },
        { question: "A Dinn também implementa a solução?", answer: "Sim. A oferta pode combinar implementação e operação contínua. Começamos por um fluxo definido com sua equipe, com escopo e responsabilidades claros." }
      ]
    },
    closing: {
      label: "Um fluxo de cada vez",
      title1: "Qual rotina de farma",
      title2: "você quer simplificar?",
      button: "Explorar as aplicações"
    }
  },

  // ── Integrações e API ─────────────────────────────────────────────────────
  integrations: {
    meta: {
      title: "Integrações e API | Dinn",
      description: "API, arquivos, BI, lake e IA do cliente: como consumir os dados da Dinn no ambiente que a sua equipe já usa, com escopo, responsabilidades e limites claros."
    },
    hero: {
      eyebrow: "Integrações e API",
      title: "Os dados da Dinn no ambiente que *sua equipe já usa.*",
      lead: "Sua equipe pode consumir a inteligência na plataforma ou avaliar uma entrega de dados para seus sistemas internos. Com fontes autorizadas e escopo definido, a Dinn prepara informações de produto, loja, rede, região e período para apoiar suas análises e rotinas."
    },
    flow: {
      title: "Do sinal ao painel no seu BI",
      steps: [
        { title: "Sinal Dinn + base interna autorizada", text: "Disponibilidade, giro e preço do canal, com os dados da sua empresa que você autorizar." },
        { title: "Identificação e padronização", text: "Produto, loja, rede e região na mesma chave." },
        { title: "Entrega acordada", text: "API, arquivo ou tabela no destino combinado, na frequência definida." },
        { title: "Painel no BI do cliente", text: "A sua equipe monta e mantém a visão de que precisa." }
      ],
      dinn: { title: "A Dinn entrega", items: ["Os dados identificados e padronizados", "A entrega no formato, destino e frequência acordados", "A documentação e o acompanhamento no escopo"] },
      client: { title: "O cliente configura", items: ["O destino e os acessos no seu ambiente", "O modelo e o painel no BI", "A governança dos dados internos"] },
      caution: "O exemplo não pressupõe um conector nativo para a sua ferramenta: o caminho de entrega é definido com a sua equipe técnica."
    },
    modalities: {
      title: "Cinco formas de consumir",
      intro: "Escolha pela decisão que quer apoiar, não pelo nome da tecnologia.",
      knowLabel: "O que você precisa entender",
      items: [
        {
          id: "api", name: "API",
          text: "Consuma dados em sistemas internos, com autenticação, escopo e limites definidos.",
          know: ["Quais dados e campos, com filtros e granularidade", "Atualização, autenticação e permissões", "Limites de uso, versionamento e tratamento de falhas", "Exemplo de resposta e documentação"]
        },
        {
          id: "arquivos", name: "Arquivos governados",
          text: "Receba arquivos no formato, destino e frequência acordados.",
          know: ["Formatos, frequência e destino autorizado", "Atualização incremental ou completa, e o histórico", "Segurança e responsabilidades de cada lado", "O mecanismo de entrega é definido no escopo"]
        },
        {
          id: "bi", name: "BI, lake ou warehouse",
          text: "Receba os dados no ambiente analítico da sua empresa.",
          know: ["Como receber e relacionar os dados", "Chaves de produto, PDV e rede", "Modelo de exemplo", "Quem constrói e mantém o painel"]
        },
        {
          id: "mcp", name: "MCP",
          text: "Deixe uma IA autorizada consultar os dados da Dinn, somente leitura.",
          know: ["Consulta por IA autorizada, em acesso somente leitura", "As permissões são preservadas", "Informamos os ambientes e modalidades testados", "Protocolo não equivale à homologação de cada ferramenta"]
        },
        {
          id: "conecta", name: "Dinn Conecta e projetos de dados",
          text: "Entregue a preparação e a operação dos dados à Dinn.",
          know: ["Fontes, padronização, qualidade e operação contratadas", "Escopo e responsabilidades de cada lado", "Começa por um fluxo delimitado"],
          href: "/produtos/conecta", hrefLabel: "Ver o Dinn Conecta"
        }
      ]
    },
    status: {
      title: "Como cada modalidade é contratada",
      text: "Existir uma interface técnica, ter acesso contratado e fazer parte do catálogo padrão são situações diferentes. Em cada conversa deixamos claro em qual delas está o que você precisa.",
      plansLink: "Ver planos e complementos"
    },
    questions: {
      title: "Quatro perguntas para começar",
      items: [
        { label: "Origem", text: "De onde vêm os dados que você quer combinar?" },
        { label: "Destino", text: "Onde a sua equipe vai usar: BI, lake, sistema interno ou IA?" },
        { label: "Frequência", text: "Com que frequência a informação precisa chegar?" },
        { label: "Decisão", text: "Que decisão isso vai apoiar?" }
      ]
    },
    faq: {
      title: "Perguntas sobre integração",
      items: [
        { question: "A Dinn se integra a qualquer sistema?", answer: "Não prometemos “qualquer sistema”. Definimos com a sua equipe técnica o caminho de entrega possível, conforme segurança, ferramentas e viabilidade." },
        { question: "Preciso de TI para começar?", answer: "A leitura na plataforma não exige integração. Para API, arquivos ou BI, a sua equipe técnica define o destino e os acessos; a Dinn acompanha no escopo." },
        { question: "A integração é imediata?", answer: "Depende do escopo e dos pré-requisitos. A implantação leva até 30 dias depois que pré-requisitos e escopo estão acordados." }
      ]
    },
    cta: {
      title: "Conte o seu fluxo de dados",
      desc: "Origem, destino, frequência e a decisão que ele apoia: com isso, avaliamos o caminho de entrega.",
      button: "Conversar sobre meu fluxo de dados"
    }
  },

  // ── Planos e contratação (sem preços) ─────────────────────────────────────
  plans: {
    meta: {
      title: "Planos e contratação | Dinn",
      description: "Compare Starter, Essential e Professional, os complementos e os serviços de implantação. A proposta considera produtos, cobertura, usuários e integração."
    },
    hero: {
      eyebrow: "Planos e contratação",
      title: "Escolha o escopo que faz sentido *para a sua operação.*",
      lead: "Compare as formas de contratar a Dinn e os recursos que podem compor sua operação. A proposta considera produtos, cobertura, usuários e necessidades de integração."
    },
    tiers: [
      { name: "Starter", text: "Começar com um recorte concentrado." },
      { name: "Essential", text: "Ampliar o acompanhamento de produtos e redes." },
      { name: "Professional", text: "Atender uma operação maior, com mais histórico e consumo de dados." }
    ],
    compare: {
      title: "Compare os planos",
      intro: "A base é a mesma leitura diária. O que muda é o tamanho do recorte, o histórico e o que acompanha o plano.",
      columns: ["", "Starter", "Essential", "Professional"],
      rows: [
        ["Atualização-base", "Diária, D-1", "Diária, D-1", "Diária, D-1"],
        ["Usuários incluídos", "5", "15", "50"],
        ["Painéis personalizados incluídos", "1", "3", "5"],
        ["Histórico máximo", "7 dias", "3 meses", "6 meses"],
        ["SKUs próprios incluídos", "5", "20", "100"],
        ["Granularidade", "PDV", "PDV", "PDV"],
        ["Grandes redes", "Incluído", "Incluído", "Incluído"],
        ["Médias redes", "Sob consulta", "Incluído", "Incluído"],
        ["Estoque predito para farmácias sem bandeira", "Sob consulta", "Sob consulta", "Incluído, conforme o escopo acordado"],
        ["Download manual", "Incluído", "Incluído", "Incluído"],
        ["Usuários e SKUs adicionais", "Sob consulta", "Contratação adicional", "Contratação adicional"],
        ["Compromisso mínimo", "3 meses", "12 meses", "12 meses"]
      ],
      note: "Sem preços públicos: a proposta considera produtos, cobertura, usuários e necessidades de integração."
    },
    addons: {
      title: "Complementos e inclusões",
      intro: "O que pode compor o plano, e em qual deles já vem incluído.",
      columns: ["Recurso", "Starter", "Essential", "Professional"],
      labels: { i: "Incluído", c: "Complemento", a: "Sob consulta" },
      legend: "Complemento é uma contratação adicional. Sob consulta quer dizer que avaliamos a condição com você, não que o recurso seja impossível.",
      rows: [
        { name: "Inteligência competitiva", text: "Compare uma cesta de produtos e redes, com universo e método definidos.", tiers: ["a", "c", "c"] },
        { name: "Forecast com IA", text: "Explore projeções e cenários com premissas, horizonte e incerteza explícitos.", tiers: ["a", "c", "c"] },
        { name: "Painéis adicionais ou customizados", text: "Adapte análises a perguntas específicas, além dos painéis incluídos.", tiers: ["a", "c", "c"] },
        { name: "Estoque em tempo real", text: "Consulte a disponibilidade atual nas lojas compatíveis. Consulta sob demanda e atualização contínua têm condições distintas.", tiers: ["a", "c", "c"] },
        { name: "Localizador para SAC", text: "Localize lojas por proximidade e verifique a disponibilidade para orientar o atendimento.", tiers: ["a", "c", "c"] },
        { name: "Alertas por regras e canais", text: "Acompanhe sinais e exceções por regras e canais definidos no escopo.", tiers: ["a", "c", "c"] },
        { name: "Monitoramento de preços", text: "Compare preços no recorte contratado, com a fonte e o momento da leitura.", tiers: ["c", "c", "c"] },
        { name: "Estimativa de giro", text: "Investigue a movimentação estimada, sem confundi-la com venda confirmada.", tiers: ["a", "c", "i"] },
        { name: "Assistente web", text: "Faça perguntas sobre o recorte contratado, com origem e limites na resposta.", tiers: ["a", "c", "c"] },
        { name: "Repositório de arquivos", text: "Receba arquivos no formato, destino e frequência acordados.", tiers: ["a", "c", "i"] },
        { name: "API", text: "Consuma dados em sistemas internos, com autenticação, escopo e limites definidos.", tiers: ["a", "c", "i"] },
        { name: "SSO corporativo", text: "Avalie autenticação corporativa e requisitos de implantação.", tiers: ["a", "a", "a"] }
      ]
    },
    beyond: {
      title: "Além da assinatura",
      intro: "Estes itens são contratados sob escopo, em blocos próprios.",
      items: [
        { title: "MCP", text: "Consulta pela IA autorizada da sua empresa, em acesso somente leitura.", href: "/integracoes", cta: "Ver integrações" },
        { title: "Dinn Conecta", text: "Preparação e operação de fluxos de dados para o seu BI, Copilot e projetos.", href: "/produtos/conecta", cta: "Ver o Dinn Conecta" },
        { title: "Pesquisas e fontes customizadas", text: "Estudos sob demanda e avaliação de novas fontes, com escopo e viabilidade definidos.", href: "/pesquisas", cta: "Ver pesquisas" },
        { title: "Implantação e serviços", text: "Implantação, treinamento e acompanhamento, dimensionados pela complexidade do escopo.", href: "/contato", cta: "Falar sobre o escopo" }
      ]
    },
    start: {
      title: "Como começar",
      items: [
        { title: "Avaliação guiada de 30 dias", text: "Um objetivo escrito, a cobertura validada, um responsável de cada lado e um critério para seguir, ajustar ou encerrar." },
        { title: "Implantação em até 30 dias", text: "Contados depois que pré-requisitos e escopo estão acordados. O prazo total considera também as etapas de compras e homologação da sua empresa." }
      ]
    },
    faq: {
      title: "Perguntas sobre contratação",
      items: [
        { question: "Os preços estão no site?", answer: "Não publicamos preços. A proposta considera produtos, cobertura, usuários e necessidades de integração, e é montada depois de validarmos o seu recorte." },
        { question: "Posso começar por um plano menor e crescer?", answer: "Sim. Usuários e SKUs adicionais, redes e complementos podem ser contratados conforme a operação cresce." },
        { question: "Complemento e serviço são a mesma coisa?", answer: "Não. Complemento é um recurso que se soma ao plano. Serviço, como implantação, pesquisa ou projeto de dados, é trabalho contratado sob escopo." },
        { question: "Existe um compromisso mínimo?", answer: "Sim, e ele varia por plano, como mostra o comparativo. Os termos finais constam da proposta." }
      ]
    },
    cta: {
      title: "Defina o plano para a sua operação",
      desc: "Conte os produtos, as redes e a decisão que quer melhorar. Montamos a proposta a partir do recorte validado.",
      button: "Definir o plano para minha operação"
    }
  },

  // ── Cobertura ─────────────────────────────────────────────────────────────
  coverage: {
    meta: {
      title: "Cobertura | Dinn",
      description: "Saiba onde a Dinn consegue apoiar a sua operação: cobertura por país, rede, produto e tipo de leitura, com atualização e limites."
    },
    hero: {
      eyebrow: "Cobertura",
      title: "Saiba onde a Dinn consegue *apoiar a sua operação.*",
      lead: "Conheça a cobertura por país, rede, produto e tipo de leitura. Antes de começar, validamos o recorte relevante para a sua equipe."
    },
    dims: {
      title: "Como descrevemos a cobertura",
      intro: "Cada dimensão é informada à parte, para que ninguém some bases sobrepostas nem confunda cadastro com dado utilizável.",
      items: [
        { title: "País", text: "Países com operação validada, disponíveis sob projeto e em estudo, sem misturá-los." },
        { title: "Redes e bandeiras", text: "Redes monitoradas, com nome e logo usados só quando autorizados. Monitorada não quer dizer parceira." },
        { title: "PDVs", text: "PDVs únicos e universo elegível. Cadastro não é dado utilizável: contamos o que tem leitura." },
        { title: "Produto e categoria", text: "Cobertura por SKU e categoria, com localização e período; farmácias digitalizadas e independentes, quando aplicável." },
        { title: "Natureza da leitura", text: "Observação direta, estimativa e tempo real, em linhas separadas." },
        { title: "Atualização e lacunas", text: "Frequência, lojas e fontes elegíveis, lacunas conhecidas e a data da última revisão." }
      ]
    },
    nature: {
      title: "Observado, estimado e em tempo real",
      intro: "A mesma loja pode ter mais de uma leitura. Cada uma é contada à parte.",
      columns: ["Leitura", "O que cobre", "Atualização"],
      rows: [
        ["Observado (D-1)", "O que a fonte informou, por loja, no dia anterior.", "Base diária, com a data de cada leitura."],
        ["Estimado", "Lojas sem resposta direta, a partir de lojas comparáveis e do histórico, com nível de confiança.", "Na atualização da base."],
        ["Tempo real", "Lojas compatíveis, por consulta sob demanda.", "No momento da consulta, uma loja por vez."]
      ]
    },
    status: {
      title: "Onde a Dinn atua",
      intro: "Os três grupos são mantidos separados. A lista vem do registro de cobertura, com a data da última revisão.",
      reviewed: "Última revisão",
      empty: "A lista atual é apresentada na validação do seu recorte.",
      groups: [
        { key: "validated", title: "Operação validada", text: "Países e redes com leitura em uso." },
        { key: "project", title: "Disponível sob projeto", text: "Atendidos sob projeto e avaliação de viabilidade." },
        { key: "study", title: "Em estudo", text: "Mapeados, ainda sem oferta comercial." }
      ]
    },
    validate: {
      title: "Validar minha cobertura",
      text: "Diga o país, os produtos e as redes ou regiões que importam. Devolvemos o que cobrimos hoje para esse recorte, por tipo de leitura.",
      items: ["País", "Produtos ou categorias", "Redes ou regiões"],
      button: "Validar minha cobertura"
    },
    links: { locator: "Estoque em tempo real", plans: "Planos e complementos", trust: "Como tratamos origem e limites" }
  },

  // ── Pesquisas e projetos especiais ────────────────────────────────────────
  research: {
    meta: {
      title: "Pesquisas e projetos especiais | Dinn",
      description: "Estudos sob demanda, relatórios recorrentes, novas fontes e projetos de preparação e integração de dados, com método e entrega definidos em conjunto."
    },
    hero: {
      eyebrow: "Pesquisas e projetos especiais",
      title: "Uma pergunta específica pode precisar de *um recorte próprio.*",
      lead: "Avaliamos estudos sob demanda e projetos com fontes adicionais para responder a uma decisão concreta do canal farmacêutico. O trabalho pode combinar dados Dinn, fontes autorizadas e informações internas, com método e entrega definidos em conjunto."
    },
    cards: {
      title: "Quatro modalidades",
      deliverLabel: "Entrega a definir na proposta",
      items: [
        { tag: "Pesquisa sob demanda", title: "Uma decisão específica, um estudo com recorte próprio.", deliver: "Pergunta, universo, método e relatório ou base analisada." },
        { tag: "Relatórios recorrentes", title: "Acompanhe a mesma pergunta ao longo do tempo.", deliver: "Indicadores, frequência, responsáveis e revisão de comparabilidade." },
        { tag: "Fontes customizadas", title: "Avalie novas fontes para o seu projeto.", deliver: "Acesso e direitos, viabilidade, qualidade, custo e limites de atualização." },
        { tag: "Preparação e integração", title: "Conecte o recorte ao ambiente em que sua equipe trabalha.", deliver: "Fontes, padronização, destino, operação e critério de aceite, conforme a proposta Conecta." }
      ]
    },
    define: {
      title: "O que combinamos em cada projeto",
      items: ["A pergunta", "O universo", "As fontes", "O método", "A entrega", "O prazo acordado", "O critério de aceite"]
    },
    deliveries: {
      title: "Entregas possíveis",
      intro: "Condicionadas à viabilidade de cada projeto.",
      items: ["Relatório", "Base tratada", "Recorte territorial", "Análise por categoria", "Painel", "Fluxo para o BI"]
    },
    limits: {
      title: "O que vale saber",
      items: [
        "Cada projeto passa por avaliação de viabilidade e escopo.",
        "Não anunciamos prazo fixo nem execução ilimitada: o prazo é acordado por projeto.",
        "Não coletamos qualquer fonte. Acesso e direitos são validados antes.",
        "Acesso autorizado a dados de auditorias, ERP, CRM ou parceiros não implica direito de redistribuição."
      ]
    },
    cta: {
      title: "Descreva o seu projeto",
      desc: "Conte o objetivo, o recorte, as fontes disponíveis e o formato desejado.",
      button: "Descrever meu projeto"
    }
  },

  // ── Comparativos ──────────────────────────────────────────────────────────
  compare: {
    meta: {
      title: "Comparativos | Dinn",
      description: "Qual camada falta entre os seus dados e a decisão? Como a Dinn se relaciona com auditorias, CRM, BI e lake, coleta e integração, e IA generalista."
    },
    hero: {
      eyebrow: "Comparativos",
      title: "Qual camada falta entre os seus dados *e a decisão?*",
      lead: "A Dinn não substitui o que você já usa. Veja o papel de cada abordagem e onde a inteligência especializada do canal entra."
    },
    table: {
      columns: ["Abordagem", "Papel", "Como se relaciona com a Dinn"],
      rows: [
        ["Auditorias de mercado", "Planejamento e leituras de mercado, conforme o produto contratado.", "Podem complementar sinais granulares. Confirmamos produto e fonte antes de afirmar frequência ou granularidade."],
        ["CRM e execução", "Registro de relacionamento, visitas, pedidos e rotinas.", "A Dinn pode fornecer contexto ao CRM. Não escreve sozinha nele nem o substitui."],
        ["BI e lake", "Armazenar, combinar e visualizar informações.", "O cliente pode consumir os dados da Dinn no próprio ambiente."],
        ["Coleta e integração genéricas", "Obter e transportar dados de fontes.", "O diferencial está em identidade, contexto farmacêutico, qualidade e uso recorrente."],
        ["IA generalista", "Interpretar e produzir saídas dentro do contexto disponível.", "Dados permissionados e contexto especializado podem ser consultados por interfaces compatíveis, como o MCP."]
      ]
    },
    value: {
      title: "O valor não termina na obtenção dos dados",
      text: "A Dinn organiza identidades do canal, qualifica sinais e entrega contexto para decisões recorrentes. Conexão, validação, histórico, interpretação e entrega fazem parte do mesmo caminho."
    },
    people: {
      title: "Adaptação ao seu recorte, com pessoas",
      text: "Sua equipe participa da definição do recorte e dos critérios de avaliação. A implantação combina responsáveis, entregas e acompanhamento.",
      items: [
        { title: "O que se configura", text: "Recorte de produtos, redes e regiões, filtros e visões, e a forma de entrega." },
        { title: "O que exige projeto", text: "Novas fontes, integrações sob medida e estudos específicos, com escopo definido em contrato." }
      ]
    },
    cta: {
      title: "Quer ver onde a Dinn entra na sua operação?",
      desc: "Vamos validar produtos, redes, regiões e a decisão que sua equipe quer melhorar.",
      button: "Converse sobre o recorte da sua operação"
    }
  },

  // ── Sobre a Dinn ──────────────────────────────────────────────────────────
  about: {
    meta: {
      title: "Sobre a Dinn | Inteligência comercial para o canal farmacêutico",
      description: "A Dinn desenvolve inteligência comercial especializada no canal farmacêutico, com presença em Joinville, Brasil, e Valência, Espanha."
    },
    hero: {
      eyebrow: "A Dinn",
      title: "Inteligência comercial *especializada no canal farmacêutico*",
      lead: "A Dinn desenvolve inteligência comercial especializada no canal farmacêutico, com presença em Joinville, Brasil, e Valência, Espanha."
    },
    what: {
      title: "O que fazemos",
      text: "Organizamos sinais de disponibilidade, giro, preço e cobertura do canal, mostramos a origem, a atualização e os limites de cada informação e ajudamos equipes comerciais a decidir onde agir primeiro."
    },
    where: {
      title: "Onde estamos",
      items: [
        { city: "Joinville", country: "Santa Catarina, Brasil", text: "Sede da Dinn Tecnologia Ltda." },
        { city: "Valência", country: "Espanha", text: "Presença do time na Espanha." }
      ]
    },
    company: {
      title: "Dados da empresa",
      rows: [
        ["Razão social", "Dinn Tecnologia Ltda."],
        ["CNPJ", "57.639.944/0001-20"],
        ["Endereço", "Rua Dona Francisca, 8300, Bloco Ágora, sala 5, Distrito Industrial, Joinville, SC, CEP 89.219-600"]
      ]
    },
    contact: {
      title: "Fale com a Dinn",
      items: [
        { title: "Contato comercial", text: "Conte a decisão que quer melhorar e receba o retorno de uma pessoa do time.", href: "/contato", cta: "Falar com a Dinn" },
        { title: "Suporte", text: "Orientações para registrar um problema e acionar o canal contratado.", href: "/suporte", cta: "Abrir o suporte" },
        { title: "Privacidade e termos", text: "Como tratamos dados pessoais e as condições de uso.", href: "/politicas-de-privacidade", cta: "Ler a política" }
      ]
    },
    trust: {
      title: "Como tratamos origem, data e limites",
      text: "Cada sinal diz de onde veio, quando foi observado e até onde vai. É o que permite agir sem ser induzido ao erro.",
      cta: "Ver confiança e controles"
    }
  },

  // ── Clientes ──────────────────────────────────────────────────────────────
  clients: {
    meta: {
      title: "Clientes e casos | Dinn",
      description: "Empresas que trabalham com a Dinn e histórias de uso do sinal à ação, com contexto, validação e aprendizado."
    },
    hero: {
      eyebrow: "Clientes",
      title: "Quem trabalha com a *Dinn*, e o que fez com isso",
      lead: "Empresas do setor farmacêutico e histórias de uso, contadas do sinal ao aprendizado."
    },
    logos: {
      title: "Empresas que trabalham com a Dinn",
      note: "Logos exibidos com autorização. Cada relação (cliente, projeto ou parceria) é tratada caso a caso."
    },
    cases: {
      title: "Histórias de uso",
      intro: "Cada caso conta a situação, o sinal, como foi validado, a decisão e o aprendizado.",
      all: "Ver todos os casos"
    },
    voices: { title: "O que dizem quem usa" }
  },

  // ── Confiança: blocos novos ───────────────────────────────────────────────
  trustMore: {
    accuracy: {
      title: "Qualidade e acurácia",
      text: "A qualidade é acompanhada por tipo de dado e recorte. Antes da avaliação, apresentamos metodologia, cobertura e resultados de validação aplicáveis ao seu caso.",
      kindsTitle: "Medimos cada coisa à parte",
      kinds: ["Disponibilidade", "Quantidade", "Preço", "Estimativa de venda"],
      note: "Uma taxa só é apresentada com a definição do acerto, o método, a amostra, a janela, o universo e a fonte de verdade."
    },
    seals: {
      title: "Selos, homologações e certificações",
      text: "Mostramos o que pode ser comprovado: controles verificáveis e disponibilidade para avaliação. Selos e certificados só aparecem com o documento, a entidade, o escopo e a validade.",
      rows: [
        { label: "Logos de clientes", text: "Mostram relações autorizadas. Não são certificações." },
        { label: "Homologação do cliente", text: "Resultado do processo de TI e compliance da sua empresa, conduzido junto com a Dinn." },
        { label: "Certificação independente", text: "Só apresentada com o documento, a entidade, o escopo e a validade." }
      ]
    },
    docs: {
      title: "Documentação técnica sob solicitação",
      text: "TI, segurança e compras recebem o material técnico no processo de avaliação. Documentos sensíveis são fornecidos sob solicitação.",
      items: ["Autenticação e permissões", "Isolamento entre clientes", "Hospedagem", "Retenção de dados", "Fornecedores e subprocessadores aplicáveis", "Gestão de incidentes", "Condições de integração"],
      cta: "Solicitar a documentação"
    }
  }
};
