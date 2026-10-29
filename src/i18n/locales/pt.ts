import { pagesPt } from './pt.pages';

export const ptBR = {
  ...pagesPt,
  nav: {
    home: "Início",
    platform: "Plataforma",
    solutions: "Soluções",
    solutionsAll: "Ver todas as soluções",
    cases: "Casos de uso",
    changelog: "Novidades",
    resourcesAll: "Ver todos os recursos",
    trust: "Confiança",
    resources: "Recursos",
    ask: "Dinn Insights",
    teams: "Casos de uso",
    inside: "Como funciona",
    delivery: "Onde entrega",
    customers: "Clientes",
    blog: "Blog",
    cta: "Solicitar demo",
    openMenu: "Abrir menu",
    languageLabel: "Idioma",
    language: "Português",
    langShort: "PT"
  },
  hero: {
    pill: "Inteligência comercial para o canal farmacêutico",
    title: "Transforme sinais do canal farma em *ação comercial*.",
    description: "A Dinn organiza sinais de disponibilidade, giro, preço e cobertura e mostra à sua equipe onde agir primeiro, com origem, atualização e limites.",
    cta: "Veja a plataforma",
    secondary: "Veja a Dinn para a sua área"
  },
  insights: {
    eyebrow: "Dinn Insights",
    title: "O que você quer saber sobre *ruptura de estoque e sell-out*?",
    intro: "Converse com a IA do Dinn. Pergunte em português. Receba o número, o recorte, a data e o método."
  },
  ask: {
    placeholder: "Pergunte sobre estoque, ruptura, giro, preço…",
    followPlaceholder: "Faça uma pergunta de acompanhamento…",
    send: "Enviar",
    reset: "Nova conversa",
    starters: [
      { team: "SAC", chip: "Onde encontrar o produto", q: "Onde o consumidor encontra o meu produto perto de Campinas?" },
      { team: "Campo", chip: "Quais lojas verificar", q: "Quais lojas da minha carteira em São Paulo eu verifico primeiro?" },
      { team: "Distribuição", chip: "O furo é no CD?", q: "O furo é no CD ou nas farmácias de Goiânia?" },
      { team: "Lançamentos", chip: "Meu lançamento chegou?", q: "Meu lançamento já chegou às farmácias de Recife?" },
      { team: "Estoque", chip: "Estoque parado", q: "Onde tenho estoque parado perto de lojas em ruptura?" },
      { team: "Concorrência", chip: "Quem ganhou espaço", q: "Quem ganhou participação em Minas Gerais?" }
    ],
    contextLabel: "Recorte usado",
    defaultPlace: "São Paulo",
    defaultProduct: "seu produto",
    thinking: "Pensando…",
    methodTitle: "Como o Dinn chegou a isso",
    linksTitle: "Leia mais",
    followTitle: "Pergunte também",
    demoCta: "Teste com seus produtos",
    actionWhy: "Por quê:",
    actionHow: "Como:",
    scenarios: {
      sac: {
        keywords: ["onde encontr", "onde tem", "onde acha", "onde compr", "consumidor", "paciente", "sac", "atendimento", "localiz", "perto", "próxima", "proxima", "encontrar", "endereço"],
        steps: ["Localizando o endereço…", "Procurando o produto nas farmácias…", "Calculando a cobertura em dias…"],
        answer: "Perto de {lugar}, **3 das 5 farmácias mais próximas** provavelmente têm {produto} em estoque. A mais próxima com estoque confirmado fica a 0,8 km.\n\nA busca também mostra um padrão. A procura se repete num bairro onde duas lojas estão sem o produto há uma semana. Use isso na reposição da cidade e na propaganda médica da região.",
        widget: {
          type: "table",
          title: "Farmácias mais próximas · {lugar}",
          columns: [
            { label: "PDV" },
            { label: "Distância", kind: "num" },
            { label: "Disponibilidade", kind: "avail" },
            { label: "Estoque", kind: "num" },
            { label: "Giro", kind: "num" },
            { label: "Preço", kind: "num" }
          ],
          rows: [
            ["Farmácia 1 · Rede A", "0,8 km", "Alta", "12–15 un.", "1,4 un./dia", "R$ 89,90"],
            ["Farmácia 2 · Rede B", "1,2 km", "Média", "4–6 un.", "0,9 un./dia", "R$ 92,50"],
            ["Farmácia 3 · Rede A", "1,9 km", "Alta", "9–11 un.", "1,1 un./dia", "R$ 89,90"],
            ["Farmácia 4 · Rede C", "2,3 km", "Sem estoque", "0 un.", "—", "—"],
            ["Farmácia 5 · Rede C", "2,6 km", "Sem estoque", "0 un.", "—", "—"]
          ]
        },
        method: [
          "Busca a partir do endereço informado. Lojas mais próximas primeiro.",
          "O estoque é observado na fonte (D-1) ou estimado por lojas comparáveis. Cada valor tem um nível de confiança.",
          "Cobertura em dias = estoque ÷ giro médio diário da loja.",
          "A ordem usa disponibilidade e proximidade, não o menor preço."
        ],
        links: [
          { label: "Caso do SAC", href: "#time-sac" },
          { label: "Como o Dinn sabe o estoque", href: "#por-dentro" }
        ],
        followups: ["E o que isso muda para a propaganda médica?", "Quais lojas dessa região precisam de reposição?"]
      },
      campo: {
        keywords: ["visita", "visitar", "campo", "rota", "carteira", "promotor", "consultor", "trade", "gdn", "kam", "territ", "verificar", "verifico", "priorizar", "prioridade", "agenda"],
        steps: ["Lendo a sua carteira…", "Analisando a disponibilidade…", "Montando o ranking…", "Listando os PDVs…"],
        answer: "Na sua carteira em {lugar}, **6 lojas dão 70% do sinal de ruptura** de {produto} na última semana. A lista mostra o que conferir em cada loja e o que esperar.\n\nO Dinn prepara a lista. O seu time monta a agenda.",
        widget: {
          type: "table",
          title: "Fila de verificação · esta semana",
          columns: [
            { label: "PDV" },
            { label: "Nível", kind: "level" },
            { label: "Ruptura", kind: "num" },
            { label: "O que conferir" }
          ],
          rows: [
            ["Loja 01 · Rede A", "Crítico", "86,7%", "Há pedido ou entrega pendente?"],
            ["Loja 02 · Rede A", "Alto", "60%", "O produto está na loja, fora da gôndola?"],
            ["Loja 03 · Rede B", "Alto", "53%", "A loja voltou a pedir depois da última falta?"],
            ["Loja 04 · Rede C", "Moderado", "33%", "A ausência voltou a ocorrer?"]
          ]
        },
        method: [
          "Ruptura do PDV = dias sem estoque ÷ dias observados nos últimos 30 dias.",
          "Nível: Crítico ≥ 75% · Alto ≥ 50% · Moderado ≥ 25% · Leve < 25%.",
          "A ordem pondera o nível pelo giro da loja quando ela tem estoque.",
          "Lojas que nunca venderam o produto ficam de fora. Elas aumentariam a taxa de ruptura."
        ],
        links: [
          { label: "Caso do campo", href: "#time-campo" },
          { label: "De onde vem cada sinal", href: "#por-dentro" }
        ],
        followups: ["A ruptura sobe ou cai em 30 dias?", "O problema é do CD ou das lojas?"]
      },
      medico: {
        keywords: ["médic", "medic", "propagand", "prescri", "receita", "consultório", "consultorio", "representante", "brick", "clínica", "clinica"],
        steps: ["Localizando o consultório…", "Procurando o produto nas farmácias…", "Comparando a ruptura entre regiões…"],
        answer: "No entorno do consultório em {lugar}, **7 de 12 farmácias** têm {produto} hoje. As 5 sem estoque são da mesma rede, do mesmo lado da avenida.\n\nO paciente provavelmente consegue atender a receita. Avise o trade sobre essa rede antes que o paciente volte sem o produto.",
        widget: {
          type: "kpis",
          title: "Entorno do consultório · raio de 1 km",
          items: [
            { label: "Farmácias no raio", value: "12" },
            { label: "Com estoque", value: "7", tone: "good" },
            { label: "Sem estoque", value: "5", tone: "bad" },
            { label: "Falta concentrada em", value: "Rede C" }
          ]
        },
        method: [
          "Raio ao redor do endereço do consultório ou do brick escolhido.",
          "Estoque D-1 por farmácia, observado ou estimado.",
          "Concentração = lojas sem estoque da mesma rede ÷ total de lojas sem estoque.",
          "O Dinn não escreve no CRM. Use a leitura para preparar a visita."
        ],
        links: [
          { label: "O caso da propaganda médica", href: "#time-medico" }
        ],
        followups: ["Onde o consumidor encontra o produto perto de Campinas?", "Quais lojas verifico primeiro?"]
      },
      distribuicao: {
        keywords: ["cd", "cds", "distribuidor", "distribuição", "distribuicao", "abastec", "reposição", "reposicao", "repor", "supply", "logística", "logistica", "atraso", "furo", "pedido"],
        steps: ["Lendo o estoque dos CDs…", "Calculando a cobertura em dias…", "Cruzando com a ruptura nas farmácias da região…", "Comparando com o giro local…"],
        answer: "Em {lugar}, o furo provavelmente não está no CD. **O distribuidor tem estoque para cerca de 24 dias**, mas 38% das farmácias que compram dele estão sem {produto}. A região segue vendendo onde há estoque.\n\nIsso aponta para **quebra de distribuição ou de reposição**, não para falta na origem. Confirme antes os pedidos pendentes nas redes afetadas.",
        widget: {
          type: "table",
          title: "Leitura CD × farmácias por região",
          columns: [
            { label: "Região" },
            { label: "Estoque no CD", kind: "num" },
            { label: "Ruptura nas farmácias", kind: "num" },
            { label: "Demanda" },
            { label: "Leitura", kind: "verdict" }
          ],
          rows: [
            ["{lugar}", "Alto · 24 dias", "38%", "Alta", "Quebra de distribuição"],
            ["Região B", "Baixo · 3 dias", "41%", "Alta", "Restrição de abastecimento"],
            ["Região C", "Caindo · 9 dias", "12%", "Alta", "Risco de ruptura"],
            ["Região D", "Alto · 60 dias", "4%", "Baixa", "Possível excesso"]
          ]
        },
        method: [
          "Cobertura do CD = estoque no CD ÷ venda diária estimada da região.",
          "Ruptura nas farmácias = lojas sem estoque ÷ lojas que vendem o produto.",
          "Demanda = giro das lojas com estoque no mesmo período.",
          "Estoque no CD não prova estoque na farmácia. A leitura cruza os dois."
        ],
        links: [
          { label: "Caso de distribuição", href: "#time-distribuicao" }
        ],
        followups: ["Onde tenho estoque parado perto de lojas em ruptura?", "A ruptura está piorando nos últimos 30 dias?"]
      },
      lancamento: {
        keywords: ["lançamento", "lancamento", "lançar", "lancar", "lançou", "novo produto", "produto novo", "chegou", "chegada", "presença", "presenca"],
        steps: ["Localizando o produto…", "Lendo o histórico semanal…", "Comparando a presença entre canais…"],
        answer: "Seis semanas depois do lançamento, {produto} está em **54% das farmácias monitoradas** em {lugar}. A presença cresceu nas grandes redes, mas segue abaixo de 20% nas independentes.\n\nOnde ainda não chegou, veja se o CD já recebeu. Isso separa um problema de sell-in de um problema de reposição.",
        widget: {
          type: "trend",
          title: "Presença do lançamento · % das farmácias com o produto",
          unit: "%",
          labels: ["S1", "S2", "S3", "S4", "S5", "S6"],
          series: [
            { name: "Grandes redes", points: [5, 14, 27, 41, 55, 68] },
            { name: "Total", points: [3, 10, 19, 30, 42, 54], dashed: true },
            { name: "Independentes", points: [0, 2, 4, 8, 12, 17] }
          ]
        },
        method: [
          "Presença = farmácias com estoque do produto ÷ farmácias monitoradas no recorte.",
          "A semana 1 começa na data de lançamento que o seu time define.",
          "A separação por canal segue o que cada fonte permite identificar."
        ],
        links: [
          { label: "Caso de lançamentos", href: "#time-lancamento" }
        ],
        followups: ["O furo é no CD ou nas farmácias?", "Quem ganhou participação na região?"]
      },
      parado: {
        keywords: ["parado", "parada", "sem movimento", "sem giro", "congelado", "encalhado", "excesso", "sobra", "negativ", "remanej"],
        steps: ["Analisando a disponibilidade…", "Contando os dias sem movimento…", "Procurando lojas em ruptura por perto…"],
        answer: "Em {lugar}, **14 lojas têm {produto} parado há mais de 30 dias**. 5 delas ficam a menos de 3 km de lojas em ruptura do mesmo produto.\n\nEsse par importa: estoque parado numa loja, falta na outra. Comece a conversa com a rede pelo remanejamento, antes de um novo pedido.",
        widget: {
          type: "bars",
          title: "Lojas por tempo sem movimento",
          unit: "lojas",
          rows: [
            { label: "Até 7 dias", value: 38, tone: "leve" },
            { label: "8 a 30 dias", value: 21, tone: "moderado" },
            { label: "31 a 60 dias", value: 9, tone: "alto" },
            { label: "Mais de 60 dias", value: 5, tone: "critico" }
          ]
        },
        method: [
          "Dias parados = dias seguidos com o mesmo saldo e sem baixa de estoque.",
          "Movimento observado não é venda confirmada.",
          "Pares parado × ruptura: mesma apresentação, até 3 km de distância.",
          "O dado não prova perda. Ele mostra onde olhar primeiro."
        ],
        links: [
          { label: "Caso de estoque parado", href: "#time-parado" }
        ],
        followups: ["O furo é no CD ou nas farmácias?", "Quais lojas verifico primeiro?"]
      },
      concorrencia: {
        keywords: ["concorr", "share", "participação", "participacao", "competi", "marca", "espaço", "espaco", "ganhou", "perdendo", "perde ", "preço", "preco"],
        steps: ["Lendo o mercado por estado…", "Comparando com a janela anterior…", "Montando o ranking…"],
        answer: "Em {lugar}, seu laboratório **cresceu 6% nas mesmas lojas**. O mercado comparável cresceu 11%. A participação caiu porque outros produtos cresceram mais, não porque as suas vendas diminuíram.\n\n23 lojas mostram estoque só do concorrente. Comece a conversa com as redes por elas.",
        widget: {
          type: "trend",
          title: "Venda estimada · seu laboratório × concorrentes",
          unit: "",
          labels: ["S1", "S2", "S3", "S4", "S5", "S6"],
          series: [
            { name: "Seu laboratório", points: [100, 101, 103, 104, 105, 106] },
            { name: "Concorrentes", points: [100, 103, 105, 107, 109, 111], tone: "sky" }
          ]
        },
        method: [
          "A venda é estimada pela movimentação de estoque. Não é sell-out auditado.",
          "Só entram lojas comparáveis nas duas janelas.",
          "Participação = seu volume ÷ volume da categoria no mesmo painel.",
          "Dados de concorrentes são agregados."
        ],
        links: [
          { label: "Caso de concorrência", href: "#time-concorrencia" }
        ],
        followups: ["Onde a categoria mais cresce?", "Meu lançamento já chegou às farmácias?"]
      },
      demanda: {
        keywords: ["oportunidad", "crescer", "cresce", "expans", "mercado", "demanda", "estratégia", "estrategia", "investir", "por onde começar", "potencial", "planej"],
        steps: ["Lendo o mercado por estado…", "Abrindo o detalhe do estado…", "Lendo as recomendações…"],
        answer: "A categoria cresce mais em {lugar}: **+9% de volume estimado** nas mesmas lojas, contra a janela anterior. Duas grandes redes vendem bem a categoria, mas têm pouco {produto}.\n\nAbaixo estão três frentes para começar. São hipóteses para o seu time validar, não ordens.",
        widget: {
          type: "actions",
          title: "Ações para o recorte",
          items: [
            { priority: "Alta", title: "Abrir conversa de sortimento com a Rede A", why: "A rede tem 18% da categoria na região. Ela tem o produto em 6% das lojas.", how: "Levar à reunião a lista das lojas que mais vendem a categoria." },
            { priority: "Média", title: "Acelerar a reposição nas cidades com ruptura persistente", why: "Três cidades têm 40% das lojas sem estoque há mais de 15 dias.", how: "Conferir pedidos pendentes com o distribuidor da região." },
            { priority: "Baixa", title: "Acompanhar o novo concorrente", why: "Ele apareceu em 31 lojas nas últimas 4 semanas.", how: "Rever o mesmo recorte daqui a 30 dias." }
          ]
        },
        method: [
          "Crescimento = volume estimado da categoria nas mesmas lojas, janela recente × anterior.",
          "Expansão: grandes redes na categoria com baixa presença do seu laboratório.",
          "Cada ação tem o seu número e o primeiro passo."
        ],
        links: [
          { label: "Caso de demanda", href: "#time-demanda" }
        ],
        followups: ["Quem ganhou participação na região?", "Onde tenho estoque parado?"]
      },
      tendencia: {
        keywords: ["ruptura", "falta", "faltando", "sem estoque", "piorando", "melhorando", "piorou", "evolução", "evolucao", "tendência", "tendencia", "últimos", "ultimos"],
        steps: ["Localizando o produto…", "Calculando a evolução da ruptura…", "Comparando a ruptura entre redes…"],
        answer: "A ruptura de {produto} em {lugar} **subiu de 24% para 32% em 30 dias**. Uma rede puxa a alta. Sem ela, o recorte fica estável, perto de 25%.\n\nEsse sinal inicia uma investigação. Não é uma conclusão. O próximo passo é ver quais lojas dessa rede explicam a alta.",
        widget: {
          type: "trend",
          title: "Evolução da ruptura · últimos 30 dias",
          unit: "%",
          labels: ["D-30", "D-25", "D-20", "D-15", "D-10", "D-5", "D-1"],
          series: [
            { name: "Rede A", points: [30, 34, 38, 45, 52, 57, 60], tone: "alert" },
            { name: "Recorte total", points: [24, 25, 24, 27, 29, 31, 32], dashed: true },
            { name: "Demais redes", points: [22, 23, 22, 24, 24, 25, 25] }
          ]
        },
        method: [
          "Ruptura = farmácias sem estoque ÷ farmácias monitoradas que vendem o produto.",
          "Base diária (D-1). Cada ponto é marcado como observado ou estimado.",
          "O Dinn não presume a causa da ruptura. Ela exige investigação."
        ],
        links: [
          { label: "Como o campo usa esse sinal", href: "#time-campo" },
          { label: "Por dentro do Dinn", href: "#por-dentro" }
        ],
        followups: ["Quais lojas verifico primeiro?", "O furo é no CD ou nas farmácias?"]
      },
      ia: {
        keywords: ["chatgpt", "claude", "copilot", "gemini", "mcp", "api", "power bi", " bi", "integra", "conecta", "sistema", "dados internos", "crm", "erp", "data lake"],
        steps: ["Entendendo a pergunta…"],
        answer: "Sim. O Dinn funciona onde o seu time trabalha: na plataforma, em arquivo, no seu BI pela API ou no ChatGPT, no Claude e no Copilot por MCP, com acesso **somente leitura**.\n\nCom o **Dinn Conecta**, dados de mercado, internos e de farmácias chegam padronizados ao seu BI e aos seus agentes. Seus dados internos e a governança continuam com você.",
        method: [],
        links: [
          { label: "Onde o Dinn entrega", href: "#entrega" },
          { label: "Perguntas frequentes", href: "#faq" }
        ],
        followups: ["Quais lojas verifico primeiro?", "Como começar um teste?"]
      },
      sobre: {
        keywords: ["o que é", "o que e", "quem é", "quem e", "como funciona", "o que voc", "o que faz", "dinn"],
        steps: ["Entendendo a pergunta…"],
        answer: "O Dinn é inteligência comercial para o canal farmacêutico. Ele organiza sinais de estoque, giro e preço das farmácias. Quando a fonte permite, liga cada loja ao CD que a abastece. Depois dá nome aos sinais: ruptura persistente, estoque parado, queda de giro.\n\nCada área usa a mesma leitura de um jeito. Escolha a sua área abaixo, ou pergunte sobre os seus produtos.",
        method: [],
        links: [
          { label: "Um uso para cada time", href: "#times" },
          { label: "Por dentro do Dinn", href: "#por-dentro" }
        ],
        followups: ["Onde o consumidor encontra o meu produto?", "O furo é no CD ou nas farmácias?"]
      },
      demo: {
        keywords: ["quanto custa", "valor do dinn", "contratar", "demo", "demonstra", "trial", "testar", "teste", "começar a usar", "começar um teste", "implanta", "prazo", "proposta"],
        steps: ["Entendendo a pergunta…"],
        answer: "Começamos por **um objetivo só**: por exemplo, menos ruptura de um produto em uma região. Você recebe 30 dias com termo simples, com uma pessoa do time da Dinn.\n\nA implantação leva até 30 dias depois que os pré-requisitos combinados estão prontos. Ela pode começar só com fontes externas.",
        method: [],
        links: [
          { label: "Solicitar demo", href: "demo" },
          { label: "Perguntas frequentes", href: "#faq" }
        ],
        followups: ["O que é o Dinn?", "Funciona no ChatGPT ou no Copilot?"]
      },
      fallback: {
        steps: ["Entendendo a pergunta…"],
        answer: "Essa eu respondo melhor com os seus dados. Cada time faz estas perguntas com mais frequência sobre estoque, ruptura, giro, preço, distribuição e concorrência. Experimente uma:",
        method: [],
        links: [
          { label: "Um uso para cada time", href: "#times" }
        ],
        followups: ["Onde o consumidor encontra o meu produto?", "Quais lojas verifico primeiro?", "O furo é no CD ou nas farmácias?", "Quem ganhou participação na minha região?"]
      }
    }
  },
  logos: {
    title: "Empresas que trabalham com a Dinn"
  },
  teams: {
    eyebrow: "Casos de uso: escolha a situação",
    title: "Situações concretas do canal, *uma a uma*",
    askCta: "Pergunte isso ao Dinn",
    deepLink: "Saiba mais",
    seesLabel: "O Dinn cruza",
    doesLabel: "O time faz",
    items: [
      {
        id: "sac",
        tab: "SAC",
        kicker: "SAC e atendimento",
        title: "“Onde acho esse remédio perto de casa?”",
        story: "O atendente vê as farmácias mais próximas com o produto, as unidades e a estimativa de giro.",
        sees: ["Estoque por loja", "Distância", "Giro", "Preço"],
        does: [
          "Indica a farmácia com maior chance de ter o produto",
          "Mostra ao trade onde a procura não acha produto"
        ],
        question: "Onde o consumidor encontra o meu produto perto de Campinas?",
        visual: "locator"
      },
      {
        id: "campo",
        tab: "Campo e trade",
        kicker: "Força de campo e trade",
        title: "Quarenta lojas na carteira. *Tempo para oito.*",
        story: "Uma fila, não um painel: as lojas com mais sinal e o que conferir em cada uma.",
        sees: ["Ruptura por loja", "Persistência", "Giro", "Rede"],
        does: [
          "Começa a semana pelas lojas principais",
          "Mostra à rede evidência por loja, com data",
          "Revê o mesmo recorte depois da ação"
        ],
        question: "Quais lojas da minha carteira em São Paulo eu verifico primeiro?",
        visual: "queue"
      },
      {
        id: "distribuicao",
        tab: "Distribuição",
        kicker: "Distribuição e supply",
        title: "O furo é no CD, *na farmácia ou no pedido?*",
        story: "O Dinn liga o estoque do distribuidor às farmácias que ele abastece. Ele ajuda a achar onde pode estar a restrição.",
        sees: ["Estoque no CD", "Cobertura em dias", "Ruptura nas lojas", "Giro da região"],
        does: [
          "Separa falta na origem de falha de reposição",
          "Antecipa o pedido quando a cobertura cai",
          "Considera remanejar entre regiões"
        ],
        question: "O furo é no CD ou nas farmácias de Goiânia?",
        visual: "distribution"
      },
      {
        id: "lancamento",
        tab: "Lançamentos",
        kicker: "Lançamentos",
        title: "Semana a semana, *onde o produto já chegou.*",
        story: "O time acompanha a presença do produto novo por rede e região. Ele vê onde a presença cresceu ou travou.",
        sees: ["Presença por semana", "Rede e região", "Chegada ao CD"],
        does: [
          "Vê onde o lançamento ainda não chegou",
          "Separa problema de sell-in de reposição"
        ],
        question: "Meu lançamento já chegou às farmácias de Recife?",
        visual: "launch"
      },
      {
        id: "parado",
        tab: "Estoque parado",
        kicker: "Estoque e giro",
        title: "Estoque parado de um lado. *Falta do outro.*",
        story: "O Dinn conta os dias sem movimento. Ele encontra lojas paradas perto de lojas em ruptura. O remanejamento começa ali.",
        sees: ["Dias sem movimento", "Estoque congelado", "Ruptura por perto"],
        does: [
          "Encontra saldo que não gira",
          "Propõe remanejar antes de novo pedido",
          "Acompanha 30, 60 e 90 dias"
        ],
        question: "Onde tenho estoque parado perto de lojas em ruptura?",
        visual: "stalled"
      },
      {
        id: "concorrencia",
        tab: "Concorrência",
        kicker: "Concorrência e participação",
        title: "Onde o concorrente está *e você não.*",
        story: "Compara a venda estimada do seu laboratório com a da categoria nas mesmas lojas. Mostra onde só o concorrente tem estoque.",
        sees: ["Venda estimada", "Mercado comparável", "Preço por rede"],
        does: [
          "Separa queda de participação de queda de venda",
          "Lista as lojas só com concorrente"
        ],
        question: "Quem ganhou participação em Minas Gerais?",
        visual: "competition"
      },
      {
        id: "demanda",
        tab: "Demanda e estratégia",
        kicker: "Demanda, vendas e estratégia",
        title: "Onde crescer, *e por onde começar.*",
        story: "Estoque, giro, preço e histórico formam um mapa de oportunidades por categoria (como GLP-1) e estado.",
        sees: ["Categoria por estado", "Participação", "Redes candidatas"],
        does: [
          "Escolhe onde concentrar o foco",
          "Escolhe as redes para abrir conversa",
          "Transforma cada sinal em ação com responsável"
        ],
        question: "Onde a minha categoria mais cresce no Nordeste?",
        visual: "demand"
      }
    ],
    visuals: {
      locator: {
        app: "Localizar produto",
        you: "Endereço do consumidor",
        rows: [
          { name: "Farmácia 1 · Rede A", dist: "0,8 km", level: "Alta", stock: "12–15 un." },
          { name: "Farmácia 2 · Rede B", dist: "1,2 km", level: "Média", stock: "4–6 un." },
          { name: "Farmácia 3 · Rede A", dist: "1,9 km", level: "Alta", stock: "9–11 un." },
          { name: "Farmácia 4 · Rede C", dist: "2,3 km", level: "Sem estoque", stock: "0 un." }
        ],
        insight: "Procura repetida no bairro · 2 lojas sem estoque há 7 dias"
      },
      queue: {
        app: "Fila da semana",
        sub: "6 de 40 lojas da carteira",
        rows: [
          { name: "Loja 01 · Rede A", level: "Crítico", value: "86,7%", check: "Pedido pendente?" },
          { name: "Loja 02 · Rede A", level: "Alto", value: "60%", check: "Fora da gôndola?" },
          { name: "Loja 03 · Rede B", level: "Alto", value: "53%", check: "Voltou a pedir?" },
          { name: "Loja 04 · Rede C", level: "Moderado", value: "33%", check: "Ausência voltou?" },
          { name: "Loja 05 · Rede B", level: "Leve", value: "12%", check: "Acompanhar" }
        ]
      },
      prescriber: {
        app: "Entorno do consultório",
        center: "Consultório",
        withStock: "com estoque",
        without: "sem estoque",
        insight: "Falta concentrada na Rede C"
      },
      distribution: {
        app: "Rede de distribuição",
        cd: "CD",
        cases: [
          { name: "Quebra de distribuição", cd: 82, pdv: 38, demand: "Alta", read: "CD com estoque, farmácias sem. Confira a reposição." },
          { name: "Restrição de abastecimento", cd: 8, pdv: 41, demand: "Alta", read: "CD vazio e a região vendendo. O problema está antes do CD." },
          { name: "Risco de ruptura", cd: 30, pdv: 12, demand: "Alta", read: "Cobertura do CD cai. Antecipe o pedido." },
          { name: "Possível excesso", cd: 90, pdv: 4, demand: "Baixa", read: "Estoque alto e giro baixo. Avaliar remanejar." }
        ],
        cdLabel: "Estoque no CD",
        pdvLabel: "Farmácias sem estoque",
        demandLabel: "Demanda",
        formula: "Cobertura = estoque no CD ÷ venda diária da região"
      },
      launch: {
        app: "Presença do lançamento",
        legend: ["Grandes redes", "Independentes"],
        weeks: ["S1", "S2", "S3", "S4", "S5", "S6", "S7", "S8"],
        regions: ["SP", "RJ", "MG", "PR", "RS", "BA", "PE", "GO", "CE", "SC", "DF", "PA"],
        insight: "Semana 6 · 54% das farmácias"
      },
      stalled: {
        app: "Estoque parado",
        bands: [
          { label: "Até 7 dias", value: 38 },
          { label: "8 a 30 dias", value: 21 },
          { label: "31 a 60 dias", value: 9 },
          { label: "Mais de 60 dias", value: 5 }
        ],
        from: "Loja 04 · parado há 42 dias",
        to: "Loja 09 · sem estoque",
        distance: "2,7 km"
      },
      competition: {
        app: "Mercado comparável",
        you: "Seu laboratório",
        them: "Concorrentes",
        reading: "Você cresceu 6% nas mesmas lojas. O mercado cresceu 11%. A participação caiu porque outros cresceram mais.",
        gap: "lojas só com concorrente"
      },
      demand: {
        app: "Oportunidades",
        questions: ["Onde a categoria avança?", "Onde perco espaço?", "Onde podemos expandir?"],
        actions: [
          { priority: "Alta", title: "Abrir conversa de sortimento com a Rede A" },
          { priority: "Média", title: "Acelerar a reposição em 3 cidades" },
          { priority: "Baixa", title: "Acompanhar o novo concorrente" }
        ]
      }
    }
  },
  story: {
    lines: [
      "O canal farmacêutico deixa sinais sobre o seu produto.",
      "Os sinais mostram **se ele está disponível, se gira, a que preço e se o CD tem para repor.**",
      "Os sinais chegam **soltos**, de fontes diferentes, com níveis de confiança diferentes.",
      "O Dinn organiza os sinais, mostra a origem deles e ajuda o seu time a decidir **onde agir primeiro.**"
    ]
  },
  inside: {
    eyebrow: "Como a Dinn funciona, em um exemplo",
    stages: [
      {
        name: "Observa",
        title: "Vê uma mudança no canal.",
        desc: "Encontra uma mudança de disponibilidade, preço, giro ou cobertura nas fontes acompanhadas.",
        example: "A presença do produto X cai em 31 de 120 lojas monitoradas da Rede A, no Sul.",
        chips: ["Disponibilidade", "Preço", "Giro", "Cobertura"]
      },
      {
        name: "Valida",
        title: "Mostra a fonte e a confiança.",
        desc: "Mostra fonte, data, escopo e nível de confiança. Cruza sinais quando possível.",
        example: "24 lojas são observadas na fonte. 7 são estimadas por lojas comparáveis, com confiança média. Ausência ainda não é ruptura.",
        chips: ["Fonte e data", "Escopo", "Observado ou estimado", "Confiança"]
      },
      {
        name: "Entende",
        title: "Liga a mudança ao contexto comercial.",
        desc: "Liga a mudança a produto, conta e território. Não presume a causa.",
        example: "As lojas ficam em 3 cidades da mesma rede. O CD tem saldo. Isso não prova que cada loja é abastecida.",
        chips: ["Produto", "Conta", "Território", "CD que abastece"]
      },
      {
        name: "Decide",
        title: "Ajuda a definir o próximo passo.",
        desc: "Ordena a questão e sugere a próxima análise ou ação como hipótese para o time validar.",
        example: "Prioridade: investigar a Rede A no Sul. Comece pelos pedidos pendentes antes de falar em ruptura.",
        chips: ["Ruptura persistente", "Estoque sem movimento", "Queda de giro", "Concentração em rede"]
      },
      {
        name: "Age",
        title: "Envia a leitura ao time que age.",
        desc: "Entrega a leitura à equipe ou à ferramenta responsável: plataforma, conversa, seu BI ou sua IA.",
        example: "A lista vai ao KAM da conta e ao Copilot do time, com fonte e data.",
        chips: ["Dinn Manager", "Dinn Insights", "Sua IA", "BI e API"]
      },
      {
        name: "Aprende",
        title: "Registra o que a equipe encontrou.",
        desc: "O time registra o que encontrou e acompanha o mesmo recorte para revisar prioridades.",
        example: "O time marca que 5 lojas tinham pedido pendente. Na semana seguinte, acompanha o mesmo recorte para rever a prioridade.",
        chips: ["Retorno do time", "Mesmo recorte", "Priorização"]
      }
    ],
    outputs: ["Plataforma", "Conversa", "Sua IA", "BI e API", "Campo"],
    signals: ["Ruptura persistente", "Estoque sem movimento", "Queda de giro", "Concentração em rede"]
  },
  delivery: {
    eyebrow: "Plataforma e capacidades",
    title: "IA para o mercado farma *onde o seu time trabalha*",
    more: "Saiba mais",
    cards: [
      {
        tag: "Dinn Manager",
        title: "A plataforma",
        desc: "Prioridades e contexto para a gestão e a execução comercial: ruptura, estoque parado, distribuição e mercado no mesmo recorte."
      },
      {
        tag: "Dinn Insights",
        title: "Uma conversa",
        desc: "Explore e interprete os sinais. Pergunte em português. Receba o número, o recorte, a data e se é observado ou estimado."
      },
      {
        tag: "MCP",
        title: "Na sua IA",
        desc: "Interface para ChatGPT, Claude e Copilot autorizados consultarem os dados do Dinn, somente leitura."
      },
      {
        tag: "Dinn Conecta",
        title: "No seu BI e nos seus agentes",
        desc: "Prepara fluxos de dados do canal, padronizados por produto, loja e região, e os entrega ao seu BI e aos seus agentes. Dados e governança continuam com você."
      }
    ],
    sources: ["IQVIA / Close-Up", "ERP e CRM", "Farmácias"],
    destinations: ["BI", "Copilot", "Agentes", "API"],
    trust: [
      "Observado ou estimado, sempre dito",
      "Base D-1 e consulta pontual em lojas elegíveis",
      "Dois fatores por e-mail · SSO sob consulta",
      "Implantação em até 30 dias após pré-requisitos e escopo acordados"
    ],
    note: "Cobertura e atualização variam por fonte, produto e consulta. Cada fonte exige licença, autorização e escopo acordados. Recursos na sua IA dependem do plano e da configuração."
  },
  faq: {
    title: "FAQ: IA, ruptura de estoque e sell-out",
    items: [
      {
        question: "Já usamos auditorias como IQVIA e Close-Up. Por que precisaríamos da Dinn?",
        answer: "A Dinn **não substitui** as auditorias de mercado. Ela as **complementa**. As auditorias dão referência para planejamento e leituras consolidadas, conforme o produto contratado. A Dinn acompanha a disponibilidade todo dia (D-1), loja a loja. Ela mostra **onde agir agora**, antes que a ruptura vire venda perdida. Quando houver autorização, você pode cruzar as duas leituras no mesmo recorte."
      },
      {
        question: "A implantação exige um esforço grande de TI?",
        answer: "Não. A Dinn pode começar com fontes externas e não precisa dos seus sistemas internos. A implantação tem escopo delimitado e leva **até 30 dias** depois que os pré-requisitos combinados estão prontos. Depois, seus dados internos podem enriquecer a leitura."
      },
      {
        question: "A Dinn é só mais um dashboard?",
        answer: "Não. A mesma base serve a três níveis de decisão: **estratégico** (onde concentrar), **tático** (o que discutir com cada rede) e **operacional** (quais lojas verificar primeiro). A saída é uma fila, não um gráfico para interpretar. Cada loja tem o sinal, a pergunta a responder e o retorno esperado."
      },
      {
        question: "A Dinn compete com o CRM (Salesforce, Veeva, SalesFarma) que já usamos?",
        answer: "Não. O CRM continua como sistema de registro de visitas, pedidos e carteira. A Dinn é uma camada de inteligência sobre o canal. Quando você acorda a integração, ela leva ao CRM o **contexto do que acontece nas farmácias**. O time prioriza na ferramenta que já usa."
      },
      {
        question: "E se as auditorias passarem a entregar dados diários?",
        answer: "Dado rápido sem prioridade é mais ruído. A Dinn transforma a leitura do canal em **prioridade e próximo passo**: qual produto, quais redes, quais lojas, com fonte e confiança. A IA prepara a análise. **A equipe decide** o que fazer."
      },
      {
        question: "Em quanto tempo vemos valor?",
        answer: "Começamos por **um objetivo**, por exemplo menos ruptura de um produto em uma região, e acompanhamos o mesmo recorte ao longo do tempo. A primeira leitura mostra onde o problema se concentra. Em 30 dias, você vê se o sinal ficou ou caiu depois das ações do time."
      },
      {
        question: "Como a Dinn acompanha o estoque sem depender das nossas bases?",
        answer: "Agentes consultam os canais digitais das farmácias e registram o que cada fonte informa, com local e horário. Esse é o **dado observado**. Quando não há resposta direta, a Dinn **estima** a partir de lojas comparáveis e do histórico, com nível de confiança. Cada registro diz como a Dinn o obteve."
      },
      {
        question: "Dados diários não vão sobrecarregar o time de campo?",
        answer: "Não. A Dinn reduz o excesso de informação. Ela não entrega um painel para o representante interpretar. Ela entrega **listas priorizadas**: quais lojas verificar primeiro, o que conferir em cada loja e qual retorno esperar."
      },
      {
        question: "A Dinn é só para a força de vendas?",
        answer: "Não. A mesma leitura atende **Trade**, **Comercial e campo**, **Demanda e supply**, **Inteligência de mercado**, **SAC** e **Tecnologia e dados**. Todas as áreas veem a mesma fotografia de disponibilidade. Isso reduz conflitos entre as áreas."
      },
      {
        question: "Dá para testar antes de fechar um contrato longo?",
        answer: "Sim. Liberamos **30 dias com um objetivo só**, com termo simples e uma pessoa do time da Dinn. No fim, você sabe se vale seguir, ajustar ou parar."
      },
      {
        question: "Como a Dinn trata segurança e confiabilidade dos dados?",
        answer: "O acesso tem **verificação em dois fatores por e-mail** e controle de permissões. O SSO corporativo está disponível sob consulta. Cada dado é rastreável: fonte, data e status de observado ou estimado ficam explícitos. As conexões com a IA do cliente são **somente leitura**."
      },
      {
        question: "O que é o Dinn Conecta?",
        answer: "É a camada que entrega **dados de farma no ambiente que sua equipe já usa**. A Dinn conecta fontes autorizadas (mercado, dados internos e farmácias). Ela padroniza produto, loja e região, cuida da qualidade e da atualização e entrega no seu BI, Copilot, agentes ou API. Dados, infraestrutura e governança continuam com você."
      },
      {
        question: "Posso usar a Dinn no ChatGPT, no Claude ou no Copilot?",
        answer: "Sim. A Dinn se conecta ao seu ambiente de IA por **MCP**, com acesso autorizado e **somente leitura**. Pergunte em linguagem natural. Receba a análise com recorte, período e limites. Recursos como agendamento e geração de arquivos dependem do plano e da configuração da sua IA."
      },
      {
        question: "A Dinn cobre todas as farmácias e confirma a causa da ruptura?",
        answer: "Não. **Cobertura e atualização variam por fonte, produto, rede e consulta**. Cada leitura informa o que cobre. A Dinn não confirma causas. Ela mostra evidências e hipóteses, e o time as valida. Ausência de produto nem sempre é ruptura. Estoque no centro de distribuição não prova que uma loja é abastecida."
      },
      {
        question: "Qual a diferença entre dado observado e estimado?",
        answer: "Dado **observado** é o que a fonte informou diretamente, com local e horário. Dado **estimado** vem de lojas comparáveis e do histórico quando não há resposta direta, sempre com nível de confiança. Dado **inferido** é a leitura que o Dinn tira da combinação de sinais. É uma hipótese a validar. A base atualiza em D-1. Em lojas elegíveis, você pode fazer uma consulta pontual de disponibilidade."
      }
    ]
  },
  ctaFinal: {
    title: "Transforme sinais do canal em *prioridades comerciais claras*",
    description: "Numa demonstração, o Dinn mostra a leitura do seu portfólio, da sua carteira e das suas regiões.",
    button: "Solicitar demo",
    secondary: "Voltar a perguntar"
  },
  footer: {
    description: "Inteligência comercial para o canal farmacêutico. Presente em Joinville e Valência.",
    sectionA: "A Dinn",
    sectionSolutions: "Soluções",
    sectionLegal: "Legal",
    termos: "Termos",
    privacidade: "Privacidade",
    cookies: "Cookies",
    suporte: "Suporte",
    ctaTitle: "Pronto para começar?",
    ctaDesc: "Veja a Dinn com os seus produtos.",
    ctaButton: "Solicitar demo",
    rights: "© 2026 Dinn Tecnologia Ltda. Todos os direitos reservados.",
    legalName: "Dinn Tecnologia Ltda.",
    cnpj: "57.639.944/0001-20",
    address: "Rua Dona Francisca, 8300, Bloco Ágora, sala 5, Distrito Industrial, Joinville, SC, CEP 89.219-600",
    cities: "Joinville · Valência",
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
        footer: "Os usuários podem solicitar esses direitos enviando um e-mail para <a href=\"mailto:vinicius.silva@diwe.com.br\" style=\"color: var(--primary); text-decoration: underline;\">vinicius.silva@diwe.com.br</a>."
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
          "<strong>Encarregado de Proteção de Dados:</strong> A DINN nomeou o Sr. Vinicius Fernandes Silva como o encarregado de dados, que pode ser contatado via <a href=\"mailto:vinicius.silva@diwe.com.br\" style=\"color: var(--primary); text-decoration: underline;\">vinicius.silva@diwe.com.br</a>."
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
    title: "O que a indústria farma diz do Dinn",
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
    heroTitle: "Blog do Dinn: IA, ruptura de estoque e execução comercial farma",
    searchPlaceholder: "Busque seu conteúdo aqui",
    noResultsTitle: "Nenhum conteúdo encontrado",
    noResultsDesc: "Mude os termos da busca.",
    readArticle: "Ler artigo",
    viewContent: "Ver conteúdo",
    minRead: "min de leitura",
    backToBlog: "Voltar para o Blog",
    ctaTitle: "Transforme dados em decisões",
    ctaText: "A Dinn mostra onde falta produto nas farmácias, o que mudou e onde agir primeiro, com fonte e confiança.",
    ctaBtn: "Solicitar demonstração",
    recommended: "Recomendados para você",
    writtenBy: "Por",
    allCategories: "Todos",
    defaultCategory: "Artigo",
    categories: {
      gestao: "Gestão",
      estoque: "Estoque",
      precos: "Preços",
      mercado: "Mercado",
      tendencias: "Tendências",
      estrategia: "Estratégia",
      tecnologia: "Tecnologia"
    }
  }
};
