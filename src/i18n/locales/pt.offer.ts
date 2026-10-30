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
    platformOverview: "Visão geral",
    features: "Funcionalidades",
    locator: "Localizador de estoque",
    conecta: "Dinn Conecta",
    integrations: "Integrações",
    coverage: "Cobertura",
    platformAll: "Ver tudo",
    solutionsAll: "Ver tudo",
    compare: "Comparativos",
    plans: "Planos",
    plansOverview: "Planos",
    plansAll: "Comparar os planos",
    research: "Pesquisas",
    company: "A Dinn",
    about: "Sobre",
    trust: "Confiança",
    contact: "Contato",
    companyAll: "Conhecer a Dinn"
  },

  // ── Entradas por objetivo, área e funcionalidade ──────────────────────────
  solutionsHub: {
    meta: {
      title: "Soluções | Dinn",
      description: "Comece pelo seu objetivo, área ou funcionalidade. Cada entrada abre a página que responde à sua pergunta."
    },
    hero: {
      eyebrow: "Soluções",
      title: "Comece pela *pergunta do seu time*",
      lead: "Escolha por objetivo, área ou funcionalidade. Nomes diferentes podem levar à mesma resposta."
    },
    goals: {
      title: "Por objetivo",
      intro: "O que o seu time quer resolver agora.",
      open: "Abrir",
      items: [
        { label: "Reduzir ruptura e priorizar verificações", text: "Veja onde o produto pode estar faltando e quais lojas conferir primeiro.", href: "/solucoes/trade-kam-campo" },
        { label: "Verificar a disponibilidade agora", text: "Consulte uma loja quando precisar orientar alguém. Veja o horário da resposta.", href: "/produtos/localizador" },
        { label: "Priorizar contas e lojas da carteira", text: "Uma fila com o sinal, a data e a pergunta para cada loja.", href: "/solucoes/trade-kam-campo" },
        { label: "Investigar abastecimento e distribuição", text: "Compare o CD e as farmácias da região para achar a restrição.", href: "/solucoes/supply-distribuicao" },
        { label: "Entender giro, preço e concorrência", text: "Compare o seu produto e a categoria nas mesmas lojas, com a origem de cada leitura.", href: "/solucoes/inteligencia-pricing" },
        { label: "Acompanhar um lançamento", text: "Presença por rede e região, semana a semana, contra o plano do seu time.", href: "/solucoes/marketing-lancamentos" },
        { label: "Orientar o consumidor no SAC", text: "Disponibilidade e proximidade em uma tela, com a fonte e a data de cada indicação.", href: "/solucoes/sac-customer-experience" },
        { label: "Levar os dados ao meu BI ou à minha IA", text: "Dados de farma preparados e atualizados no ambiente que a sua equipe usa.", href: "/produtos/conecta" }
      ]
    },
    areas: {
      title: "Por área",
      intro: "Cada área faz uma pergunta diferente. Escolha a sua."
    },
    features: {
      title: "Por funcionalidade",
      intro: "Use quando você sabe o que precisa.",
      items: [
        { label: "Estoque em tempo real", text: "Consulta sob demanda, com o horário da resposta.", href: "/produtos/localizador" },
        { label: "Estoque estimado", text: "O que a Dinn infere quando não há leitura direta, e a sua confiança.", href: "/funcionalidades#estimado" },
        { label: "Histórico e visões salvas", text: "O mesmo recorte, comparável ao longo do tempo.", href: "/funcionalidades#historico" },
        { label: "Insights", text: "Pergunte em português. Receba o número com recorte, fonte e método.", href: "/funcionalidades#insights" },
        { label: "API, arquivos e MCP", text: "A mesma informação fora da plataforma.", href: "/integracoes" },
        { label: "Alertas e rotinas", text: "Aviso quando o sinal muda, nos canais habilitados no escopo.", href: "/funcionalidades#alertas" }
      ]
    },
    more: "Não achou o seu caso?",
    moreCta: "Diga qual decisão melhorar"
  },

  // ── Cena de estoque em tempo real (home e página do Localizador) ──────────
  realtime: {
    eyebrow: "Estoque em tempo real",
    title: "Precisa verificar agora? *Consulte o estoque em tempo real.*",
    text: "No Localizador, consulte a disponibilidade que as lojas compatíveis informam naquele momento. Veja o horário da consulta. Tempo real, D-1 e estoque estimado são leituras diferentes.",
    condition: "Disponível conforme rede, fonte e escopo contratado. A informação pode mudar após a consulta.",
    sim: "Simulação · valores de exemplo",
    mapAria: "Mapa do Localizador com farmácias próximas ao endereço do consumidor, coloridas pelo nível de estoque.",
    stepsLabel: "Da busca à orientação",
    steps: [
      { title: "Localizar", text: "Informe o endereço ou a área e o raio. As farmácias próximas aparecem no mapa." },
      { title: "Escolher a loja", text: "Abra uma loja. A leitura de base é de ontem. Só as lojas compatíveis têm a consulta." },
      { title: "Consultar agora", text: "A Dinn pergunta à fonte da loja naquele momento." },
      { title: "Resposta e horário", text: "A resposta mostra o horário da consulta, separada da leitura de ontem." },
      { title: "Orientar", text: "Oriente o consumidor com o que a loja informou e quando. Compartilhe o endereço." }
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
    orient: "Orientação ao consumidor: “A loja informou agora. O estoque pode mudar. Confirme antes de ir.”",
    link: "Entender as três leituras",
    hint: "Clique numa loja do mapa, role a página ou espere. A cena segue sozinha."
  },

  // ── Página do Localizador ─────────────────────────────────────────────────
  locator: {
    meta: {
      title: "Localizador e estoque em tempo real | Dinn",
      description: "Consulte a disponibilidade que as lojas compatíveis informam naquele momento. Tempo real, D-1 e estoque estimado são leituras diferentes."
    },
    hero: {
      eyebrow: "Dinn Localizador",
      title: "Precisa verificar agora? *Consulte o estoque em tempo real.*",
      lead: "No Localizador, consulte a disponibilidade que as lojas compatíveis informam naquele momento. Veja o horário da consulta. Tempo real, D-1 e estoque estimado são leituras diferentes."
    },
    scene: { title: "Da busca à orientação, em cinco passos" },
    readings: {
      title: "Três leituras, três usos",
      intro: "Uma loja pode ter três leituras. A Dinn diz sempre qual delas você vê. Cada uma serve a uma pergunta diferente.",
      columns: ["Leitura", "O que é", "Atualização", "Quando usar"],
      rows: [
        ["Estoque D-1 (observado)", "O que a fonte informou no dia anterior, por loja, com a data.", "Base diária, com a data de cada leitura.", "Priorizar e acompanhar um recorte."],
        ["Estimado", "Calculado a partir de lojas comparáveis e do histórico quando não há resposta direta. Sempre mostra o nível de confiança.", "Na atualização da base.", "Preencher a falta de sinal direto. Confirme antes de agir."],
        ["Tempo real (consulta)", "A resposta que a loja informa à fonte no momento da consulta, com o horário.", "No momento em que você consulta, uma loja por vez.", "Confirmar a disponibilidade antes de orientar alguém ou visitar."]
      ]
    },
    when: {
      title: "Quando consultar agora",
      items: [
        { title: "A ligação do consumidor", text: "Um paciente pergunta onde achar um remédio. Consulte a loja mais próxima e responda com o que ela acabou de informar. Não ligue loja por loja." },
        { title: "A visita desta tarde", text: "Antes de falar com a rede, veja o que a loja informa agora. Leve à conversa o dado de hoje, não o de ontem." },
        { title: "Depois da reposição", text: "A rede combinou uma entrega? Consulte a mesma loja de novo. Veja se o produto aparece na resposta." }
      ]
    },
    conditions: {
      title: "O que precisa existir",
      items: [
        { title: "Rede e fonte compatíveis", text: "A loja precisa poder responder à pergunta. A lista de redes e fontes elegíveis vem da cobertura validada." },
        { title: "Escopo contratado", text: "O estoque em tempo real é um complemento do plano. Veja Planos para condições e limites." },
        { title: "Uma consulta, uma resposta", text: "A resposta é válida para aquele horário. Ela não atualiza toda a base." }
      ],
      coverageLink: "Ver a cobertura",
      plansLink: "Ver planos e complementos"
    },
    faq: {
      title: "Perguntas sobre estoque em tempo real",
      items: [
        { question: "Tempo real mostra todas as lojas, sempre atualizadas?", answer: "Não. É uma consulta sob demanda. Você escolhe uma loja compatível e a Dinn pergunta à fonte naquele momento. A leitura de base continua D-1." },
        { question: "A resposta garante que o produto está lá?", answer: "Não. É o que a fonte informou naquele horário. O estoque pode mudar depois. Diga isso ao consumidor." },
        { question: "Todas as redes têm consulta em tempo real?", answer: "Não. Depende de rede, fonte e escopo contratado. Validamos o recorte com você antes de começar." },
        { question: "Qual a diferença para o estoque estimado?", answer: "O estimado é calculado por lojas comparáveis quando não há resposta direta. A consulta em tempo real é a resposta da própria loja, com o horário." }
      ]
    },
    cta: {
      title: "Quer ver a consulta com a sua rede e o seu produto?",
      desc: "Validamos produtos, redes, regiões e a decisão que sua equipe quer melhorar.",
      button: "Fale sobre o seu recorte"
    }
  },

  // ── Funcionalidades ───────────────────────────────────────────────────────
  features: {
    meta: {
      title: "Funcionalidades | Dinn",
      description: "O que a Dinn faz, do problema à decisão. Cada funcionalidade mostra problema, entrada, ação, saída, decisão apoiada, atualização, escopo e limites."
    },
    hero: {
      eyebrow: "Funcionalidades",
      title: "O que a Dinn faz, *do problema à decisão*",
      lead: "Cada funcionalidade mostra o problema, a entrada, a ação na interface, a saída e a decisão apoiada, com atualização, escopo e limites."
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
    sim: "Exemplos ilustrativos, com valores de exemplo. A disponibilidade das funcionalidades segue o plano contratado.",
    items: [
      {
        id: "disponibilidade", name: "Disponibilidade e ruptura", kind: "produto",
        problem: "Qual produto está faltando, e por onde começo a verificar?",
        input: "SKU, rede e região.",
        action: "Selecione o recorte. A Dinn mostra o período e o denominador da leitura e abre as lojas.",
        output: "Lojas ordenadas pela proporção de dias sem estoque sobre dias observados.",
        decision: "Quais lojas verificar primeiro.",
        limit: "Ausência não é ruptura confirmada. Lojas que nunca venderam o item não entram no cálculo.",
        href: "/solucoes/trade-kam-campo"
      },
      {
        id: "localizador", name: "Localizador", kind: "produto",
        problem: "Onde o consumidor encontra o produto por perto?",
        input: "Endereço ou área, raio e rede.",
        action: "Busque e compare as lojas por distância, com a origem e a atualização de cada leitura.",
        output: "Lojas próximas com disponibilidade, distância e a data da informação.",
        decision: "Qual loja indicar, e com que confiança.",
        limit: "Chance de estoque não é garantia. A cobertura varia por rede e fonte.",
        href: "/produtos/localizador"
      },
      {
        id: "tempo-real", name: "Estoque em tempo real", kind: "produto",
        problem: "Preciso confirmar agora, antes de orientar alguém.",
        input: "Uma loja compatível, escolhida no Localizador.",
        action: "Clique em “Consultar agora”. A Dinn pergunta à fonte da loja naquele momento.",
        output: "A resposta da fonte e o horário da consulta, à parte da leitura D-1.",
        decision: "Indicar a loja, ou conferir outra.",
        limit: "Disponível conforme rede, fonte e escopo contratado. A informação pode mudar após a consulta.",
        href: "/produtos/localizador"
      },
      {
        id: "estimado", name: "Estoque estimado", kind: "produto",
        problem: "A fonte não respondeu. O que posso inferir?",
        input: "Histórico da loja e lojas comparáveis.",
        action: "A Dinn estima onde não há leitura direta. Mostra a referência usada e a confiança.",
        output: "Uma estimativa rotulada como tal, com nível de confiança.",
        decision: "Onde confirmar antes de agir.",
        limit: "É estimativa, não leitura da loja. Confirme quando a decisão for sensível.",
        href: "/cobertura"
      },
      {
        id: "historico", name: "Histórico, filtros e visões salvas", kind: "interface",
        problem: "Como comparo o mesmo recorte ao longo do tempo?",
        input: "Período, filtros e o recorte de que a equipe precisa.",
        action: "Aplique os filtros, salve a visão e abra-a na próxima rotina.",
        output: "A mesma leitura, comparável de semana a semana.",
        decision: "O sinal persistiu, diminuiu ou mudou de lugar?",
        limit: "O histórico disponível e o número de painéis dependem do plano contratado.",
        href: "/planos"
      },
      {
        id: "giro-preco", name: "Giro, preço e estoque sem movimento", kind: "produto",
        problem: "O produto sai? A que preço? Onde o saldo não se mexe?",
        input: "Produto, rede e janela de tempo.",
        action: "Escolhe a janela. A Dinn mostra o cálculo e compara só o que é comparável.",
        output: "Estimativa de giro no recorte, preço observado e dias sem movimento.",
        decision: "Onde investigar uma queda de giro ou remanejar saldo.",
        limit: "Movimentação não é venda confirmada. O giro é uma estimativa.",
        href: "/solucoes/inteligencia-pricing"
      },
      {
        id: "distribuicao", name: "Distribuição", kind: "produto",
        problem: "O furo está no CD, na reposição ou na farmácia?",
        input: "CD, lojas que ele abastece e produto.",
        action: "Compare o estoque no CD com a disponibilidade nas lojas, pelo vínculo de abastecimento confirmado.",
        output: "O CD e as lojas lado a lado, com a cobertura em dias.",
        decision: "Onde conferir pedido, reposição ou remanejamento.",
        limit: "Proximidade geográfica não é vínculo de abastecimento. O padrão é hipótese. Investigue a causa.",
        href: "/solucoes/supply-distribuicao"
      },
      {
        id: "mercado", name: "Mercado e concorrência", kind: "produto",
        problem: "Perdi participação ou perdi venda?",
        input: "Cesta de produtos, universo de lojas e janela.",
        action: "Defina a cesta e as lojas comparáveis. Compare o seu produto com a categoria.",
        output: "Tendência do seu produto e da categoria nas mesmas lojas, e onde só o concorrente tem estoque.",
        decision: "Onde recuperar espaço.",
        limit: "A venda é estimada. Os dados de concorrentes são agregados e respeitam direitos de uso.",
        href: "/solucoes/inteligencia-pricing"
      },
      {
        id: "insights", name: "Insights", kind: "interface",
        problem: "Quero a resposta sem painel.",
        input: "Uma pergunta em português.",
        action: "Pergunte ao Dinn Insights. A resposta mostra o recorte, a fonte e o método.",
        output: "Um número com recorte, data, método e tipo (observado ou estimado).",
        decision: "Qual análise abrir em seguida.",
        limit: "Responde dentro do recorte e das capacidades do plano. Hipóteses aparecem como hipóteses.",
        href: "/plataforma"
      },
      {
        id: "priorizacao", name: "Priorização e feedback", kind: "produto",
        problem: "Com tantos sinais, por onde a equipe começa?",
        input: "Sinais do recorte e a carteira da equipe.",
        action: "Ordene a lista pelo sinal, atribua o responsável e registre o que a equipe encontrou.",
        output: "Uma lista com sinal, data, responsável e o registro do retorno.",
        decision: "Quem verifica o quê, e o que acompanhar.",
        limit: "A Dinn prepara a lista. A equipe é dona da agenda e da decisão.",
        href: "/solucoes/trade-kam-campo"
      },
      {
        id: "exportacoes", name: "Exportações, API e MCP", kind: "integracao",
        problem: "Preciso da mesma informação fora da plataforma.",
        input: "O recorte e o destino autorizado.",
        action: "Escolha o modo: arquivo, consumo técnico ou IA autorizada.",
        output: "A mesma leitura em arquivo, na API ou na IA da empresa, com origem e data.",
        decision: "Onde a sua equipe começa a usar o dado.",
        limit: "Cada modo depende de plano, autorização e escopo. O MCP é só para consulta, somente leitura.",
        href: "/integracoes"
      },
      {
        id: "alertas", name: "Alertas e rotinas", kind: "interface",
        problem: "Quero um aviso quando algo mudar. Não quero abrir a plataforma.",
        input: "A regra, o canal e a frequência.",
        action: "Defina a regra de acompanhamento e o canal do aviso.",
        output: "Um aviso com o sinal, o recorte e a data.",
        decision: "Quando agir ou rever o recorte.",
        limit: "Seguem os gatilhos e canais ativos no escopo. Você configura as automações na sua IA.",
        href: "/plataforma"
      },
      {
        id: "conecta", name: "Dinn Conecta", kind: "integracao",
        problem: "Cada análise começa juntando tudo de novo.",
        input: "Fontes autorizadas: mercado, dados internos e farmácias.",
        action: "A Dinn reúne os dados, padroniza produto, loja e região e mantém o caminho atualizado.",
        output: "Dados de farma preparados no seu BI, Copilot ou projeto.",
        decision: "A pergunta que o seu time quer responder, sem refazer a base.",
        limit: "Fontes e integrações dependem de acesso, licença e escopo. Não substitui licenças nem age sozinho.",
        href: "/produtos/conecta"
      },
      {
        id: "projetos", name: "Pesquisas e projetos especiais", kind: "servico",
        problem: "Minha pergunta pede um recorte próprio.",
        input: "A pergunta, o universo e as fontes disponíveis.",
        action: "Avaliamos viabilidade e escopo com você.",
        output: "Relatório, base tratada ou fluxo para o BI, conforme acordado.",
        decision: "A decisão que motivou o projeto.",
        limit: "Sujeito à avaliação de viabilidade e escopo. Os direitos das fontes ficam protegidos.",
        href: "/pesquisas"
      }
    ],
    cta: {
      title: "Qual funcionalidade responde à sua pergunta?",
      desc: "Validamos produtos, redes, regiões e a decisão que sua equipe quer melhorar.",
      button: "Fale sobre o seu recorte"
    }
  },

  // ── Dinn Conecta (base: prévia 08, dinn-data-preview) ─────────────────────
  conecta: {
    meta: {
      title: "Dinn Conecta | Dados de farma no ambiente da sua equipe",
      description: "A Dinn conecta dados de mercado, internos e de farmácias. Prepara e atualiza o contexto de farma e entrega no BI, no Copilot e nos projetos da sua empresa."
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
      dinn: "A Dinn gerencia a conexão.",
      caption: "Fontes e integrações conforme acesso, licença e escopo."
    },
    problem: {
      label: "Menos trabalho repetido",
      title1: "Cada análise começa",
      title2: "juntando tudo de novo?",
      text: "Os dados existem. O trabalho é fazer uma fonte bater com a outra.",
      items: [
        { n: "01 / Reunir", title: "Arquivos espalhados.", text: "Mercado em uma base. Vendas no ERP. Disponibilidade em outra fonte." },
        { n: "02 / Conferir", title: "Recortes diferentes.", text: "Os nomes de produto, rede e período precisam bater." },
        { n: "03 / Manter", title: "Tudo muda de novo.", text: "A próxima atualização chega. Alguém precisa manter esse caminho." }
      ],
      bottom: "A Dinn prepara e mantém os dados. Seu time usa."
    },
    context: {
      label: "Contexto para IA",
      title1: "Na era da IA,",
      title2: "contexto importa.",
      text: "Seu time precisa conectar bases internas e disponibilizar os dados nos agentes da empresa. Esse projeto continua sendo seu. A Dinn organiza, higieniza e padroniza o caminho com conhecimento de farma.",
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
      caption: "Exemplo com dados fictícios. Não é resultado de cliente.",
      nextLabel: "Próxima conversa",
      askLabel: "Uma pergunta no seu Copilot",
      items: [
        {
          id: "disponibilidade", tab: "Disponibilidade", area: "Trade e comercial", kind: "table",
          title: "Onde investigar a falta de produto?",
          text: "Compare a venda interna com a disponibilidade nas farmácias. Priorize redes e regiões para discutir abastecimento.",
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
          text: "Compare o plano de lançamento com os sinais nas farmácias. Leve ao campo uma lista de verificações.",
          flow: ["Plano de lançamento", "Lojas para verificar"],
          sheet: "Acompanhamento do lançamento",
          meta: ["Produto A", "Lojas previstas no plano"],
          rows: [["Rede A", "Sinal encontrado", "ok"], ["Rede B", "Verificar com o campo", "mark"], ["Rede C", "Aguardando atualização", "wait"]],
          next: "Conferir as lojas da Rede B antes de rever o plano.",
          source: "Plano de lançamento + disponibilidade Dinn. Ausência de sinal não prova ruptura."
        },
        {
          id: "copilot", tab: "Copilot", area: "Dados e IA", kind: "ask",
          title: "Seu Copilot consegue usar os dados de farma?",
          text: "Leve o contexto interno, de mercado e de farmácias à IA da empresa, com origem, atualização e limites claros.",
          flow: ["Dados do negócio", "Contexto para a IA"],
          question: "Onde investigamos a queda do Produto A?",
          answer: "Comece pela Região Sul. Compare a venda interna com as lojas sinalizadas. Confira o histórico de pedidos.",
          source: "A resposta ajuda a investigação. Ela não presume a causa."
        }
      ]
    },
    team: {
      label: "Junto com sua equipe",
      title1: "O projeto é seu.",
      title2: "A operação dos dados\npode ficar com a Dinn.",
      text: "Da implementação ao acompanhamento.\nSeu time e suas ferramentas ficam.",
      yours: { label: "Seu time", title: "Prioridades, ferramentas e acessos.", text: "Decide o que responder e como usar os dados." },
      dinn: { label: "Dinn Conecta", title: "Fontes, qualidade e atualização.", text: "Prepara os dados e gerencia as conexões no escopo combinado." }
    },
    faq: {
      label: "Antes de começar",
      title: "Algumas respostas.",
      items: [
        { question: "Podemos usar nossas licenças de IQVIA e Close-Up?", answer: "O uso depende das permissões do fornecedor e do acesso que a sua empresa autoriza. A Dinn não substitui a licença. Validamos fontes e direitos antes de definir a integração." },
        { question: "Funciona com nosso BI, data lake ou Copilot?", answer: "A Dinn funciona com o ambiente que vocês têm. Definimos o caminho de entrega com sua equipe técnica, conforme segurança, ferramentas e viabilidade." },
        { question: "A Dinn também implementa a solução?", answer: "Sim. A oferta pode combinar implementação e operação. Começamos por um fluxo, com escopo e responsabilidades claros." }
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
      description: "API, arquivos, BI, lake e IA do cliente: use os dados da Dinn no ambiente da sua equipe, com escopo, responsabilidades e limites claros."
    },
    hero: {
      eyebrow: "Integrações e API",
      title: "Os dados da Dinn no ambiente que *sua equipe usa.*",
      lead: "Sua equipe pode usar a inteligência na plataforma ou avaliar uma entrega de dados para sistemas internos. Com fontes autorizadas e escopo definido, a Dinn prepara dados de produto, loja, rede, região e período para suas análises e rotinas."
    },
    flow: {
      title: "Do sinal ao painel no seu BI",
      steps: [
        { title: "Sinal Dinn + base interna autorizada", text: "Disponibilidade, giro e preço do canal, com os dados da empresa que você autorizar." },
        { title: "Identificação e padronização", text: "Produto, loja, rede e região na mesma chave." },
        { title: "Entrega acordada", text: "API, arquivo ou tabela no destino combinado, na frequência definida." },
        { title: "Painel no BI do cliente", text: "A sua equipe monta e mantém a visão de que precisa." }
      ],
      dinn: { title: "A Dinn entrega", items: ["Dados identificados e padronizados", "Entrega no formato, destino e frequência acordados", "Documentação e acompanhamento no escopo"] },
      client: { title: "O cliente configura", items: ["O destino e o acesso no seu ambiente", "O modelo e o painel no BI", "A governança dos dados internos"] },
      caution: "O exemplo não pressupõe um conector nativo para a sua ferramenta. Definimos o caminho de entrega com sua equipe técnica."
    },
    modalities: {
      title: "Cinco formas de consumir",
      intro: "Escolha pela decisão que quer apoiar, não pelo nome da tecnologia.",
      knowLabel: "O que saber",
      items: [
        {
          id: "api", name: "API",
          text: "Consuma dados em sistemas internos, com autenticação, escopo e limites definidos.",
          know: ["Quais dados e campos, com filtros e granularidade", "Atualização, autenticação e permissões", "Limites de uso, versionamento e tratamento de falhas", "Exemplo de resposta e documentação"]
        },
        {
          id: "arquivos", name: "Arquivos governados",
          text: "Receba arquivos no formato, destino e frequência acordados.",
          know: ["Formatos, frequência e destino autorizado", "Atualização incremental ou completa, e o histórico", "Segurança e responsabilidades de cada lado", "O escopo define o mecanismo de entrega"]
        },
        {
          id: "bi", name: "BI, lake ou warehouse",
          text: "Receba os dados no ambiente analítico da sua empresa.",
          know: ["Como receber e relacionar os dados", "Chaves de produto, PDV e rede", "Modelo de exemplo", "Quem constrói e mantém o painel"]
        },
        {
          id: "mcp", name: "MCP",
          text: "Deixe uma IA autorizada consultar os dados da Dinn, somente leitura.",
          know: ["Consulta por IA autorizada, com acesso somente leitura", "As permissões continuam valendo", "Informamos os ambientes e modos testados", "Um protocolo não é aprovação de cada ferramenta"]
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
      title: "Como contratar cada modo",
      text: "Interface técnica, acesso contratado e catálogo padrão são coisas diferentes. Em cada conversa dizemos qual delas vale para a sua necessidade.",
      plansLink: "Ver planos e complementos"
    },
    questions: {
      title: "Quatro perguntas para começar",
      items: [
        { label: "Origem", text: "De onde vêm os dados que você quer combinar?" },
        { label: "Destino", text: "Onde a sua equipe vai usar: BI, lake, sistema interno ou IA?" },
        { label: "Frequência", text: "Com que frequência a informação deve chegar?" },
        { label: "Decisão", text: "Que decisão isso vai apoiar?" }
      ]
    },
    faq: {
      title: "Perguntas sobre integração",
      items: [
        { question: "A Dinn se integra a qualquer sistema?", answer: "Não prometemos “qualquer sistema”. Definimos com a sua equipe técnica o caminho de entrega possível, conforme segurança, ferramentas e viabilidade." },
        { question: "Preciso de TI para começar?", answer: "A leitura na plataforma não exige integração. Para API, arquivos ou BI, a sua equipe técnica define o destino e o acesso. A Dinn apoia no escopo." },
        { question: "A integração é imediata?", answer: "Não. Depende do escopo e dos pré-requisitos. A implantação leva até 30 dias depois que você acorda pré-requisitos e escopo." }
      ]
    },
    cta: {
      title: "Conte o seu fluxo de dados",
      desc: "Informe a origem, o destino, a frequência e a decisão apoiada. Avaliamos o caminho de entrega.",
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
      title: "Escolha o escopo *para a sua operação.*",
      lead: "Compare as formas de contratar a Dinn e os recursos para a sua operação. A proposta considera produtos, cobertura, usuários e necessidades de integração."
    },
    tiers: [
      { name: "Starter", text: "Começar com um recorte concentrado." },
      { name: "Essential", text: "Acompanhe mais produtos e redes." },
      { name: "Professional", text: "Atender uma operação maior, com mais histórico e consumo de dados." }
    ],
    compare: {
      title: "Compare os planos",
      intro: "A base é a mesma leitura diária. Mudam o tamanho do recorte, o histórico e os itens incluídos.",
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
      note: "Sem preços públicos. A proposta considera produtos, cobertura, usuários e necessidades de integração."
    },
    grid: { label: "Planos", fromPrev: "Tudo no {prev}, mais", first: "Inclui", price: "Sob proposta", priceNote: "Sem preço público", minimum: "Compromisso mínimo" },
    build: {
      title: "Monte o escopo do seu plano",
      step: "Escolha os recursos que você precisa",
      empty: "Selecione um recurso para ver o plano indicado.",
      recommended: "Plano indicado",
      none: "Nenhum plano inclui todos os itens sem consulta. Fale com a Dinn.",
      cta: "Pedir proposta"
    },
    addons: {
      title: "Complementos e inclusões",
      intro: "O que pode fazer parte do plano, e qual plano o inclui.",
      columns: ["Recurso", "Starter", "Essential", "Professional"],
      labels: { i: "Incluído", c: "Complemento", a: "Sob consulta" },
      legend: "Complemento é uma contratação adicional. Sob consulta quer dizer que avaliamos as condições com você. Não quer dizer que o recurso é impossível.",
      rows: [
        { name: "Inteligência competitiva", text: "Compare uma cesta de produtos e redes, com universo e método definidos.", tiers: ["a", "c", "c"] },
        { name: "Forecast com IA", text: "Explore projeções e cenários com premissas, horizonte e incerteza explícitos.", tiers: ["a", "c", "c"] },
        { name: "Painéis adicionais ou customizados", text: "Adapte análises a perguntas específicas, além dos painéis incluídos.", tiers: ["a", "c", "c"] },
        { name: "Estoque em tempo real", text: "Consulte a disponibilidade atual nas lojas compatíveis. Consulta sob demanda e atualização contínua têm condições distintas.", tiers: ["a", "c", "c"] },
        { name: "Localizador para SAC", text: "Encontre lojas por proximidade e verifique a disponibilidade para orientar o atendimento.", tiers: ["a", "c", "c"] },
        { name: "Alertas por regras e canais", text: "Acompanhe sinais e exceções por regras e canais definidos no escopo.", tiers: ["a", "c", "c"] },
        { name: "Monitoramento de preços", text: "Compare preços no recorte contratado, com a fonte e o horário da leitura.", tiers: ["c", "c", "c"] },
        { name: "Estimativa de giro", text: "Investigue a movimentação estimada. Não é venda confirmada.", tiers: ["a", "c", "i"] },
        { name: "Assistente web", text: "Pergunte sobre o recorte contratado. A resposta mostra fonte e limites.", tiers: ["a", "c", "c"] },
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
        { title: "Implantação em até 30 dias", text: "A contagem começa depois que você acorda pré-requisitos e escopo. O prazo total inclui as etapas de compras e aprovação da sua empresa." }
      ]
    },
    faq: {
      title: "Perguntas sobre contratação",
      items: [
        { question: "Os preços estão no site?", answer: "Não. Não publicamos preços. Preparamos a proposta depois de validar o seu recorte. Ela considera produtos, cobertura, usuários e necessidades de integração." },
        { question: "Posso começar por um plano menor e crescer?", answer: "Sim. Você pode contratar usuários, SKUs, redes e complementos adicionais conforme a operação cresce." },
        { question: "Complemento e serviço são a mesma coisa?", answer: "Não. Complemento é um recurso somado ao plano. Serviço, como implantação, pesquisa ou projeto de dados, é trabalho contratado sob escopo." },
        { question: "Existe um compromisso mínimo?", answer: "Sim. Ele varia por plano, como mostra o comparativo. Os termos finais estão na proposta." }
      ]
    },
    cta: {
      title: "Defina o plano para a sua operação",
      desc: "Conte os produtos, as redes e a decisão a melhorar. Montamos a proposta a partir do recorte validado.",
      button: "Definir o plano para minha operação"
    }
  },

  // ── Cobertura ─────────────────────────────────────────────────────────────
  coverage: {
    meta: {
      title: "Cobertura | Dinn",
      description: "Veja onde a Dinn pode apoiar a sua operação: cobertura por país, rede, produto e tipo de leitura, com atualização e limites."
    },
    hero: {
      eyebrow: "Cobertura",
      title: "Veja onde a Dinn pode *apoiar a sua operação.*",
      lead: "Veja a cobertura por país, rede, produto e tipo de leitura. Antes de começar, validamos o recorte de que sua equipe precisa."
    },
    dims: {
      title: "Como descrevemos a cobertura",
      intro: "Informamos cada dimensão à parte. Isso evita bases sobrepostas e evita que um cadastro pareça dado utilizável.",
      items: [
        { title: "País", text: "Países com operação validada, disponíveis sob projeto e em estudo. Não os misturamos." },
        { title: "Redes e bandeiras", text: "Redes monitoradas. Usamos nome e logo só com autorização. Monitorada não quer dizer parceira." },
        { title: "PDVs", text: "PDVs únicos e universo elegível. Cadastro não é dado utilizável. Contamos as lojas que têm leitura." },
        { title: "Produto e categoria", text: "Cobertura por SKU e categoria, com localização e período. Inclui farmácias digitalizadas e independentes, quando aplicável." },
        { title: "Natureza da leitura", text: "Observação direta, estimativa e tempo real, em linhas separadas." },
        { title: "Atualização e lacunas", text: "Frequência, lojas e fontes elegíveis, lacunas conhecidas e a data da última revisão." }
      ]
    },
    nature: {
      title: "Observado, estimado e em tempo real",
      intro: "Uma loja pode ter mais de uma leitura. Contamos cada uma à parte.",
      columns: ["Leitura", "O que cobre", "Atualização"],
      rows: [
        ["Observado (D-1)", "O que a fonte informou no dia anterior, por loja.", "Base diária, com a data de cada leitura."],
        ["Estimado", "Lojas sem resposta direta. Usa lojas comparáveis e o histórico, com nível de confiança.", "Na atualização da base."],
        ["Tempo real", "Lojas compatíveis, por consulta sob demanda.", "No momento da consulta, uma loja por vez."]
      ]
    },
    status: {
      title: "Onde a Dinn atua",
      intro: "Os três grupos são separados. A lista vem do registro de cobertura, com a data da última revisão.",
      reviewed: "Última revisão",
      empty: "Mostramos a lista atual quando validamos o seu recorte.",
      groups: [
        { key: "validated", title: "Operação validada", text: "Países e redes com leitura em uso." },
        { key: "project", title: "Disponível sob projeto", text: "Atendidos sob projeto e avaliação de viabilidade." },
        { key: "study", title: "Em estudo", text: "Mapeados, ainda sem oferta comercial." }
      ]
    },
    validate: {
      title: "Validar minha cobertura",
      text: "Diga o país, os produtos e as redes ou regiões. Devolvemos o que cobrimos hoje para esse recorte, por tipo de leitura.",
      items: ["País", "Produtos ou categorias", "Redes ou regiões"],
      button: "Validar minha cobertura"
    },
    links: { locator: "Estoque em tempo real", plans: "Planos e complementos", trust: "Como tratamos origem e limites" }
  },

  // ── Pesquisas e projetos especiais ────────────────────────────────────────
  research: {
    meta: {
      title: "Pesquisas e projetos especiais | Dinn",
      description: "Estudos sob demanda, relatórios recorrentes, novas fontes e projetos de preparação e integração de dados. Combinamos método e entrega com você."
    },
    hero: {
      eyebrow: "Pesquisas e projetos especiais",
      title: "Uma pergunta específica pode precisar de *um escopo próprio.*",
      lead: "Avaliamos estudos sob demanda e projetos com fontes adicionais para responder a uma decisão concreta do canal farmacêutico. O trabalho pode combinar dados Dinn, fontes autorizadas e informações internas. Combinamos método e entrega com você."
    },
    cards: {
      title: "Quatro modos",
      deliverLabel: "Entrega definida na proposta",
      items: [
        { tag: "Pesquisa sob demanda", title: "Uma decisão específica, um estudo com recorte próprio.", deliver: "Pergunta, universo, método e relatório ou base analisada." },
        { tag: "Relatórios recorrentes", title: "Acompanhe a mesma pergunta ao longo do tempo.", deliver: "Indicadores, frequência, responsáveis e revisão de comparabilidade." },
        { tag: "Fontes customizadas", title: "Avalie novas fontes para o seu projeto.", deliver: "Acesso e direitos, viabilidade, qualidade, custo e limites de atualização." },
        { tag: "Preparação e integração", title: "Conecte o recorte ao ambiente da sua equipe.", deliver: "Fontes, padronização, destino, operação e critério de aceite, como na proposta Conecta." }
      ]
    },
    build: {
      title: "Monte o seu projeto",
      step: "Escolha as entregas que você quer",
      empty: "Selecione uma entrega para ver o resumo do projeto.",
      summary: "Seu projeto",
      agree: "Combinamos com você"
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
      title: "O que saber",
      items: [
        "Cada projeto passa por avaliação de viabilidade e escopo.",
        "Não anunciamos prazo fixo nem execução ilimitada. Combinamos o prazo por projeto.",
        "Não coletamos de qualquer fonte. Validamos acesso e direitos antes.",
        "Acesso autorizado a dados de auditoria, ERP, CRM ou parceiros não dá direito de redistribuição."
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
      description: "Qual camada falta entre os seus dados e a decisão? Veja como a Dinn se relaciona com auditorias, CRM, BI e lake, coleta e integração, e IA generalista."
    },
    hero: {
      eyebrow: "Comparativos",
      title: "Qual camada falta entre os seus dados *e a decisão?*",
      lead: "A Dinn não substitui o que você usa hoje. Veja o papel de cada abordagem e onde a inteligência especializada do canal se encaixa."
    },
    table: {
      columns: ["Abordagem", "Papel", "Como se relaciona com a Dinn"],
      rows: [
        ["Auditorias de mercado", "Planejamento e leituras de mercado, conforme o produto contratado.", "Podem complementar sinais granulares. Confirmamos produto e fonte antes de dizer a frequência ou a granularidade."],
        ["CRM e execução", "Registro de relacionamento, visitas, pedidos e rotinas.", "A Dinn pode dar contexto ao CRM. Ela não escreve no CRM sozinha e não o substitui."],
        ["BI e lake", "Armazenar, combinar e visualizar informações.", "O cliente pode usar os dados da Dinn no próprio ambiente."],
        ["Coleta e integração genéricas", "Obter e transportar dados de fontes.", "A Dinn se diferencia em identidade, contexto farmacêutico, qualidade e uso recorrente."],
        ["IA generalista", "Interpretar e produzir saídas dentro do contexto disponível.", "Interfaces compatíveis, como o MCP, podem consultar dados permissionados e contexto especializado."]
      ]
    },
    value: {
      title: "O valor não termina nos dados",
      text: "A Dinn organiza identidades do canal, qualifica sinais e entrega contexto para decisões recorrentes. Conexão, validação, histórico, interpretação e entrega são um só caminho."
    },
    people: {
      title: "Adaptação ao seu recorte, com pessoas",
      text: "Sua equipe ajuda a definir o recorte e os critérios de avaliação. A implantação combina responsáveis, entregas e acompanhamento.",
      items: [
        { title: "O que se configura", text: "Recorte de produtos, redes e regiões, filtros e visões, e a forma de entrega." },
        { title: "O que exige projeto", text: "Novas fontes, integrações sob medida e estudos específicos, com escopo definido em contrato." }
      ]
    },
    cta: {
      title: "Quer ver onde a Dinn entra na sua operação?",
      desc: "Validamos produtos, redes, regiões e a decisão que sua equipe quer melhorar.",
      button: "Fale sobre o seu recorte"
    }
  },

  // ── Sobre a Dinn ──────────────────────────────────────────────────────────
  about: {
    meta: {
      title: "Sobre a Dinn | Inteligência comercial para o canal farmacêutico",
      description: "A Dinn desenvolve inteligência comercial para o canal farmacêutico, em Joinville, Brasil, e Valência, Espanha."
    },
    hero: {
      eyebrow: "A Dinn",
      title: "Inteligência comercial *para o canal farmacêutico*",
      lead: "A Dinn desenvolve inteligência comercial para o canal farmacêutico, em Joinville, Brasil, e Valência, Espanha."
    },
    what: {
      title: "O que fazemos",
      text: "Organizamos sinais de disponibilidade, giro, preço e cobertura do canal. Mostramos a origem, a atualização e os limites de cada informação. Ajudamos equipes comerciais a decidir onde agir primeiro."
    },
    where: {
      title: "Onde estamos",
      items: [
        { city: "Joinville", country: "Santa Catarina, Brasil", text: "Sede da Dinn Tecnologia Ltda." },
        { city: "Valência", country: "Espanha", text: "Time na Espanha." }
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
        { title: "Contato comercial", text: "Conte a decisão a melhorar. Uma pessoa do time responde.", href: "/contato", cta: "Falar com a Dinn" },
        { title: "Suporte", text: "Como registrar um problema e acionar o canal contratado.", href: "/suporte", cta: "Abrir o suporte" },
        { title: "Privacidade e termos", text: "Como tratamos dados pessoais e as condições de uso.", href: "/politicas-de-privacidade", cta: "Ler a política" }
      ]
    },
    trust: {
      title: "Como tratamos origem, data e limites",
      text: "Cada sinal diz de onde veio, quando o observamos e até onde vai. Você age sem ser induzido ao erro.",
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
      title: "Quem trabalha com a *Dinn*, e o que fez",
      lead: "Empresas do setor farmacêutico e histórias de uso, do sinal ao aprendizado."
    },
    logos: {
      title: "Empresas que trabalham com a Dinn"
    },
    cases: {
      title: "Histórias de uso",
      intro: "Cada caso mostra a situação, o sinal, a validação, a decisão e o aprendizado.",
      all: "Ver todos os casos"
    },
    voices: { title: "O que dizem quem usa" }
  },

  // ── Contato: perfil do pedido (o que a pessoa quer contratar) ─────────────
  contactMore: {
    interest: {
      label: "O que você quer fazer?",
      options: [
        { value: "conhecer", label: "Conhecer a Dinn", hint: "Ver a plataforma com o meu portfólio" },
        { value: "plano", label: "Contratar um plano", hint: "Starter, Essential ou Professional" },
        { value: "funcionalidade", label: "Usar funcionalidades", hint: "Tempo real, histórico, alertas…" },
        { value: "integracao", label: "Dados no meu ambiente", hint: "API, arquivos, BI ou Dinn Conecta" },
        { value: "pesquisa", label: "Encomendar pesquisa", hint: "Estudo ou projeto especial" }
      ]
    },
    plan: {
      label: "Qual plano é mais próximo?",
      options: [
        { value: "starter", label: "Starter" },
        { value: "essential", label: "Essential" },
        { value: "professional", label: "Professional" },
        { value: "nao_sei", label: "Ainda não sei" }
      ]
    },
    features: {
      label: "Quais funcionalidades interessam?",
      hint: "Marque quantas precisar.",
      options: [
        { value: "tempo_real", label: "Estoque em tempo real" },
        { value: "estimado", label: "Estoque estimado" },
        { value: "historico", label: "Histórico e visões salvas" },
        { value: "giro_preco", label: "Giro, preço e concorrência" },
        { value: "distribuicao", label: "Distribuição" },
        { value: "insights", label: "Insights" },
        { value: "alertas", label: "Alertas e rotinas" },
        { value: "exportacoes", label: "Exportações, API e MCP" }
      ]
    },
    context: {
      label: "Quer contar mais?",
      optional: "(opcional)",
      placeholder: "Produtos, redes, países ou o que você já tentou."
    },
    requiredInterest: "Escolha uma opção.",
    doneBy: {
      conhecer: "Preparamos uma conversa curta com o seu portfólio e as suas regiões.",
      plano: "Montamos a proposta a partir do recorte validado, com o comparativo do plano que você escolheu.",
      funcionalidade: "Mostramos as funcionalidades que você marcou, com o seu recorte.",
      integracao: "Entendemos a origem, o destino e a frequência dos dados antes de propor o caminho de entrega.",
      pesquisa: "Avaliamos a viabilidade e o escopo do estudo antes de combinar método, entrega e prazo."
    },
    tierCta: "Conversar sobre este plano"
  },

  // ── Sobre a Dinn: blocos gráficos ─────────────────────────────────────────
  aboutMore: {
    map: { aria: "Ligação entre Joinville, no Brasil, e Valência, na Espanha.", brazil: "Brasil", spain: "Espanha", label: "Duas cidades, um só time" },
    how: {
      title: "Como a Dinn trabalha",
      intro: "Do sinal solto à ação registrada, sempre com origem, data e limite."
    },
    stats: {
      title: "A Dinn em poucos fatos",
      items: [
        { value: 2, suffix: "", label: "cidades: Joinville e Valência" },
        { value: 6, suffix: "", label: "áreas atendidas, do Trade ao SAC" },
        { value: 3, suffix: "", label: "idiomas no site: português, inglês e espanhol" },
        { value: 30, suffix: " dias", label: "para implantar, depois do escopo acordado" }
      ]
    },
    principles: {
      title: "Como a gente trabalha",
      intro: "Quatro compromissos em cada página e em cada conversa.",
      items: [
        { title: "Origem, data e limite", text: "Cada número diz de onde veio, quando o observamos e até onde vale." },
        { title: "A decisão é da equipe", text: "A Dinn prepara a leitura e sugere o próximo passo. Sua equipe decide e age." },
        { title: "Direitos de uso respeitados", text: "Fontes de terceiros vêm com licença, autorização e escopo acordados." },
        { title: "Começar pequeno, com prazo", text: "Um objetivo, um recorte e implantação em até 30 dias depois do escopo acordado." }
      ]
    },
    trustBand: { chips: ["Origem", "Data", "Limite"] }
  },

  // ── Confiança: blocos novos ───────────────────────────────────────────────
  trustMore: {
    accuracy: {
      title: "Qualidade e acurácia",
      text: "Acompanhamos a qualidade por tipo de dado e recorte. Antes da avaliação, apresentamos a metodologia, a cobertura e os resultados de validação para o seu caso.",
      kindsTitle: "Medimos cada item à parte",
      kinds: ["Disponibilidade", "Quantidade", "Preço", "Estimativa de venda"],
      note: "Mostramos uma taxa só com a definição de acerto, método, amostra, janela, universo e fonte de verdade."
    },
    seals: {
      title: "Selos, homologações e certificações",
      text: "Mostramos o que podemos comprovar: controles verificáveis e disponibilidade para avaliação. Selos e certificados só aparecem com documento, entidade, escopo e validade.",
      rows: [
        { label: "Logos de clientes", text: "Mostram relações autorizadas. Não são certificações." },
        { label: "Homologação do cliente", text: "Resultado do processo de TI e compliance da sua empresa, feito junto com a Dinn." },
        { label: "Certificação independente", text: "Só mostrada com documento, entidade, escopo e validade." }
      ]
    },
    docs: {
      title: "Documentação técnica sob solicitação",
      text: "TI, segurança e compras recebem o material técnico durante a avaliação. Entregamos documentos sensíveis sob solicitação.",
      items: ["Autenticação e permissões", "Isolamento entre clientes", "Hospedagem", "Retenção de dados", "Fornecedores e subprocessadores aplicáveis", "Gestão de incidentes", "Condições de integração"],
      cta: "Solicitar a documentação"
    }
  }
};
