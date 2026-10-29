// Textos dos infográficos da página /plataforma (es). Chaves em platformViz.*
// Textos dos infográficos da página /plataforma (es). Chaves em platformViz.*
export const platformVizEs = {
  cover: {
    alt: "Canal farmacéutico: laboratorio, transporte, farmacia y consumidor conectados por Dinn."
  },
  cycle: {
    hint: "Desplázate para avanzar el ciclo",
    stepLabel: "Paso {n} de {total}",
    example: "Ejemplo",
    ringLabel: "Ciclo de seis pasos: observa, valida, entiende, decide, actúa, aprende. Luego observa de nuevo.",
    loop: "Ciclo continuo",
    goTo: "Ir al paso"
  },
  demo: {
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
    summaryEstimated: "1 tienda estimada por tiendas comparables, con nivel de confianza"
  },
  manager: {
    rank: "Fila de la semana",
    done: "Verificada",
    check: "Qué verificar",
    chartTitle: "Desabasto de la tienda · últimos 30 días",
    chartFrom: "hace 30 días",
    chartTo: "hoy",
    hint: "Haz clic en una tienda para marcarla como verificada.",
    caption: "El equipo registra sus hallazgos y mantiene el mismo alcance."
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
        text: "tienen 70% de la señal de desabasto del producto X en la última semana.",
        scope: "Cartera en Ciudad de México · Cadenas A, B y C",
        date: "Base D-1 · últimos 30 días",
        method: "Días sin inventario ÷ días observados. nivel Crítico: 75% o más",
        kind: "Observado"
      },
      {
        chip: "CEDIS o tiendas",
        q: "¿La falla está en el CEDIS o en las farmacias de Guadalajara?",
        big: "82% en el CEDIS",
        text: "y 38% de las farmacias de la región sin inventario. Revisa la reposición.",
        scope: "Guadalajara · CEDIS que abastece la región",
        date: "Base D-1",
        method: "Cobertura = inventario en el CEDIS ÷ venta diaria de la región",
        kind: "Observado y estimado"
      },
      {
        chip: "Lanzamiento",
        q: "¿Mi lanzamiento ya llegó a las farmacias de Monterrey?",
        big: "54% de las farmacias",
        text: "monitoreadas tienen el lanzamiento, en la semana 6.",
        scope: "Monterrey · farmacias monitoreadas",
        date: "Base D-1 · semana 6",
        method: "Presencia observada. Donde no hay lectura directa, estima por tiendas comparables",
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
        a: "Cadena A: 31 de 120 tiendas con caída. 24 observadas, 7 estimadas. Base D-1."
      },
      {
        name: "Claude",
        q: "Resume las tiendas críticas de mi cartera en Ciudad de México.",
        a: "6 tiendas tienen 70% de la señal de desabasto. Cada una muestra qué verificar, la fuente y la fecha."
      },
      {
        name: "Copilot",
        q: "Prepara la agenda de la reunión con la Cadena A.",
        a: "Tres puntos: pedidos pendientes, producto fuera del anaquel y una falta que volvió. Cada uno tiene su fuente."
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
