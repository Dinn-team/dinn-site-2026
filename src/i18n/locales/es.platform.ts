// Textos dos infográficos da página /plataforma (es). Chaves em platformViz.*
// Todas las cifras son de ejemplo y aparecen marcadas como ilustrativas.
export const platformVizEs = {
  cover: {
    alt: "Ilustración del canal farmacéutico: laboratorio, transporte, farmacia y consumidor conectados por Dinn."
  },
  cycle: {
    hint: "Desplázate para avanzar el ciclo",
    stepLabel: "Paso {n} de {total}",
    example: "Ejemplo",
    ringLabel: "Ciclo de seis pasos: observa, valida, entiende, decide, actúa y aprende; luego vuelve a observar.",
    loop: "Ciclo continuo",
    goTo: "Ir al paso"
  },
  demo: {
    tag: "Ejemplo ilustrativo",
    illustrative: "Valores de ejemplo, no son datos reales.",
    tapHint: "Haz clic para explorar",
    reset: "Volver al modo automático"
  },
  stock: {
    observed: "Observado",
    estimated: "Estimado",
    toggleLabel: "Cómo lo sabe Dinn",
    observedChip: "Observado · D-1",
    estimatedChip: "Estimado · tiendas comparables",
    confidence: "Confianza media",
    fromSource: "Leído en la fuente",
    notRead: "Sin lectura directa",
    summaryObserved: "2 tiendas leídas directo en la fuente, con la fecha de D-1",
    summaryEstimated: "2 tiendas estimadas por tiendas comparables, con la confianza indicada"
  },
  manager: {
    rank: "Fila de la semana",
    done: "Verificada",
    check: "Qué verificar",
    chartTitle: "Desabasto de la tienda · últimos 30 días",
    chartFrom: "hace 30 días",
    chartTo: "hoy",
    hint: "Haz clic en una tienda para marcarla como verificada: la fila se reordena.",
    caption: "La fila sube y baja con el retorno del equipo."
  },
  insights: {
    you: "Tú",
    answerFrom: "Dinn Insights",
    scope: "Alcance",
    date: "Fecha",
    method: "Método",
    kind: "Tipo",
    hint: "Haz clic en una pregunta para ver la respuesta.",
    scenarios: [
      {
        chip: "Fila de tiendas",
        q: "¿Qué tiendas de mi cartera verifico primero?",
        big: "6 de 40 tiendas",
        text: "concentran 70% de la señal de desabasto del producto X en la última semana.",
        scope: "Cartera en Ciudad de México · Cadenas A, B y C",
        date: "Base D-1 · últimos 30 días",
        method: "Días sin inventario ÷ días observados; nivel Crítico desde 75%",
        kind: "Observado"
      },
      {
        chip: "CEDIS o tiendas",
        q: "¿La falla está en el CEDIS o en las farmacias de Guadalajara?",
        big: "82% en el CEDIS",
        text: "y 38% de las farmacias de la región sin inventario: conviene revisar la reposición.",
        scope: "Guadalajara · CEDIS que abastece la región",
        date: "Base D-1",
        method: "Cobertura = inventario en el CEDIS ÷ venta diaria de la región",
        kind: "Observado y estimado"
      },
      {
        chip: "Lanzamiento",
        q: "¿Mi lanzamiento ya llegó a las farmacias de Monterrey?",
        big: "54% de las farmacias",
        text: "monitoreadas ya tienen el lanzamiento, en la semana 6.",
        scope: "Monterrey · farmacias monitoreadas",
        date: "Base D-1 · semana 6",
        method: "Presencia observada; donde no hay lectura directa, estimada por tiendas comparables",
        kind: "Observado y estimado"
      }
    ]
  },
  mcp: {
    app: "Consulta por MCP",
    hub: "Dinn",
    readOnly: "Solo lectura",
    authorized: "Herramienta autorizada",
    you: "Pregunta",
    answer: "Respuesta con fuente y fecha",
    writeAsk: "Modificar el catálogo de productos",
    blocked: "No permitido: el acceso es de solo lectura.",
    assistants: [
      {
        name: "ChatGPT",
        q: "¿Qué cadenas perdieron presencia del producto X en el Sur?",
        a: "Cadena A: 31 de 120 tiendas con caída. 24 observadas y 7 estimadas. Base D-1."
      },
      {
        name: "Claude",
        q: "Resume las tiendas críticas de mi cartera en Ciudad de México.",
        a: "6 tiendas concentran 70% de la señal de desabasto. Cada una con qué verificar, la fuente y la fecha."
      },
      {
        name: "Copilot",
        q: "Arma la agenda de la reunión con la Cadena A.",
        a: "Tres puntos: pedidos pendientes, producto fuera del anaquel y una falta que volvió. Con la fuente de cada uno."
      }
    ]
  },
  conecta: {
    app: "Flujo de datos",
    sources: "Fuentes",
    standard: "Estandarizado por producto, tienda y región",
    destinations: "Destinos",
    columns: { ean: "Producto (EAN)", cnpj: "Tienda (RFC)", chain: "Cadena", region: "Región" },
    done: "Estandarizado",
    replay: "Repetir",
    rows: [
      { source: 0, ean: "789 000 000 012", cnpj: "AAA000101-AA1", chain: "Cadena A", region: "Sur" },
      { source: 2, ean: "789 000 000 029", cnpj: "AAA000102-AA2", chain: "Cadena B", region: "Sureste" },
      { source: 1, ean: "789 000 000 036", cnpj: "AAA000103-AA3", chain: "Cadena A", region: "Noreste" },
      { source: 2, ean: "789 000 000 043", cnpj: "AAA000104-AA4", chain: "Cadena C", region: "Centro" }
    ]
  }
};
