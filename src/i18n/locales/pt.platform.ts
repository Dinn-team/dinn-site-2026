// Textos dos infográficos da página /plataforma (pt). Chaves em platformViz.*
// Textos dos infográficos da página /plataforma (pt). Chaves em platformViz.*
export const platformVizPt = {
  cover: {
    alt: "Ilustração do canal farmacêutico: laboratório, transporte, farmácia e consumidor ligados pela Dinn."
  },
  cycle: {
    hint: "Role para avançar o ciclo",
    stepLabel: "Passo {n} de {total}",
    example: "Exemplo",
    ringLabel: "Ciclo em seis passos: observa, valida, entende, decide, age e aprende; depois volta a observar.",
    loop: "Ciclo contínuo",
    goTo: "Ir ao passo"
  },
  demo: {
    tapHint: "Clique para explorar",
    reset: "Voltar ao automático"
  },
  stock: {
    observed: "Observado",
    estimated: "Estimado",
    toggleLabel: "Como a Dinn sabe",
    observedChip: "Observado · D-1",
    estimatedChip: "Estimado · lojas comparáveis",
    confidence: "Confiança média",
    fromSource: "Lido na fonte",
    notRead: "Sem leitura direta",
    summaryObserved: "2 lojas lidas direto na fonte, com a data de D-1",
    summaryEstimated: "2 lojas estimadas por lojas comparáveis, com confiança dita"
  },
  manager: {
    rank: "Fila da semana",
    done: "Conferida",
    check: "O que conferir",
    chartTitle: "Ruptura da loja · últimos 30 dias",
    chartFrom: "há 30 dias",
    chartTo: "hoje",
    hint: "Clique numa loja para marcá-la como conferida: a fila se reordena.",
    caption: "A fila sobe e desce com o retorno do time."
  },
  insights: {
    you: "Você",
    answerFrom: "Dinn Insights",
    scope: "Recorte",
    date: "Data",
    method: "Método",
    kind: "Tipo",
    hint: "Clique numa pergunta para ver a resposta.",
    scenarios: [
      {
        chip: "Fila de lojas",
        q: "Quais lojas da minha carteira eu verifico primeiro?",
        big: "6 de 40 lojas",
        text: "concentram 70% do sinal de ruptura do produto X na última semana.",
        scope: "Carteira em São Paulo · Redes A, B e C",
        date: "Base D-1 · últimos 30 dias",
        method: "Dias sem estoque ÷ dias observados; nível Crítico a partir de 75%",
        kind: "Observado"
      },
      {
        chip: "CD ou lojas",
        q: "O furo é no CD ou nas farmácias de Goiânia?",
        big: "82% no CD",
        text: "e 38% das farmácias da região sem estoque: vale conferir a reposição.",
        scope: "Goiânia · CD que abastece a região",
        date: "Base D-1",
        method: "Cobertura = estoque no CD ÷ venda diária da região",
        kind: "Observado e estimado"
      },
      {
        chip: "Lançamento",
        q: "Meu lançamento já chegou às farmácias de Recife?",
        big: "54% das farmácias",
        text: "monitoradas já têm o lançamento, na semana 6.",
        scope: "Recife · farmácias monitoradas",
        date: "Base D-1 · semana 6",
        method: "Presença observada; onde não há leitura direta, estimada por lojas comparáveis",
        kind: "Observado e estimado"
      }
    ]
  },
  mcp: {
    app: "Consulta por MCP",
    hub: "Dinn",
    readOnly: "Somente leitura",
    authorized: "Ferramenta autorizada",
    you: "Pergunta",
    answer: "Resposta com fonte e data",
    writeAsk: "Alterar o cadastro de produtos",
    blocked: "Não permitido: o acesso é somente leitura.",
    assistants: [
      {
        name: "ChatGPT",
        q: "Quais redes tiveram queda de presença do produto X no Sul?",
        a: "Rede A: 31 de 120 lojas com queda. 24 observadas e 7 estimadas. Base D-1."
      },
      {
        name: "Claude",
        q: "Resuma as lojas críticas da minha carteira em São Paulo.",
        a: "6 lojas concentram 70% do sinal de ruptura. Cada uma com o que conferir, a fonte e a data."
      },
      {
        name: "Copilot",
        q: "Monte a pauta da reunião com a Rede A.",
        a: "Três pontos: pedidos pendentes, produto fora da gôndola e ausência que voltou. Com a fonte de cada um."
      }
    ]
  },
  conecta: {
    app: "Fluxo de dados",
    sources: "Fontes",
    standard: "Padronizado por produto, loja e região",
    destinations: "Destinos",
    columns: { ean: "Produto (EAN)", cnpj: "Loja (CNPJ)", chain: "Rede", region: "Região" },
    done: "Padronizado",
    replay: "Repetir",
    rows: [
      { source: 0, ean: "789 000 000 012", cnpj: "00.000.000/0001-01", chain: "Rede A", region: "Sul" },
      { source: 2, ean: "789 000 000 029", cnpj: "00.000.000/0002-02", chain: "Rede B", region: "Sudeste" },
      { source: 1, ean: "789 000 000 036", cnpj: "00.000.000/0003-03", chain: "Rede A", region: "Nordeste" },
      { source: 2, ean: "789 000 000 043", cnpj: "00.000.000/0004-04", chain: "Rede C", region: "Centro-Oeste" }
    ]
  }
};
