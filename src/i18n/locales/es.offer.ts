// Textos de las páginas de producto, oferta y confianza de la ronda del 15/10/2026
// (dinn_site_correcoes_conteudo_2026-10-15.md): Localizador y tiempo real,
// funcionalidades, Dinn Conecta, integraciones y API, planes, cobertura,
// investigaciones, comparativos, sobre Dinn, clientes y entradas por objetivo.
// Versión en español (es-419) de pt.offer.ts: mismas claves, mismo orden.
//
// Reglas editoriales del documento: nada de número, país, cadena o certificación
// sin fuente; tiempo real es consulta bajo demanda; Conecta es la capa de datos y
// MCP es una interfaz; "bajo consulta" no es "no disponible".

export const offerEs = {
  menu: {
    platform: "Plataforma",
    platformOverview: "Visión de la plataforma",
    features: "Funcionalidades",
    locator: "Localizador e inventario en tiempo real",
    conecta: "Dinn Conecta",
    integrations: "Integraciones y API",
    coverage: "Cobertura",
    platformAll: "Ver toda la plataforma",
    solutionsAll: "Elegir por objetivo, área o funcionalidad",
    compare: "Comparativos",
    plans: "Planes",
    plansOverview: "Planes y contratación",
    plansAll: "Comparar los planes",
    research: "Investigaciones y proyectos especiales",
    company: "Dinn",
    about: "Sobre Dinn",
    trust: "Confianza y controles",
    contact: "Contacto",
    companyAll: "Conocer Dinn"
  },

  // ── Entradas por objetivo, área y funcionalidad ───────────────────────────
  solutionsHub: {
    meta: {
      title: "Soluciones | Dinn",
      description: "Empieza por tu objetivo, por tu área o por la funcionalidad que buscas: cada entrada lleva a la página que responde a tu pregunta."
    },
    hero: {
      eyebrow: "Soluciones",
      title: "Empieza por la *pregunta que se hace tu equipo*",
      lead: "Por objetivo, por área o por funcionalidad. Nombres distintos pueden llevar a la misma respuesta: elige el camino más natural para ti."
    },
    goals: {
      title: "Por objetivo",
      intro: "Lo que tu equipo quiere resolver ahora.",
      open: "Abrir",
      items: [
        { label: "Reducir el desabasto y priorizar verificaciones", text: "Mira dónde puede estar faltando el producto y por qué tiendas empezar a verificar.", href: "/solucoes/trade-kam-campo" },
        { label: "Verificar la disponibilidad ahora", text: "Consulta la tienda en el momento en que necesitas orientar a alguien, y mira la hora de la respuesta.", href: "/produtos/localizador" },
        { label: "Priorizar cuentas y tiendas de la cartera", text: "Una fila con la señal, la fecha y la pregunta por responder en cada tienda.", href: "/solucoes/trade-kam-campo" },
        { label: "Investigar el abasto y la distribución", text: "Cruza el CEDIS y las farmacias de la región para investigar dónde puede estar la restricción.", href: "/solucoes/supply-distribuicao" },
        { label: "Entender rotación, precio y competencia", text: "Compara tu producto y la categoría en las mismas tiendas, con el origen de cada lectura.", href: "/solucoes/inteligencia-pricing" },
        { label: "Seguir un lanzamiento", text: "Presencia por cadena y región, semana a semana, frente al plan que definió tu equipo.", href: "/solucoes/marketing-lancamentos" },
        { label: "Orientar al consumidor en Atención a clientes", text: "Disponibilidad y cercanía en la misma pantalla, con la fuente y la fecha de cada indicación.", href: "/solucoes/sac-customer-experience" },
        { label: "Llevar los datos a mi BI o a mi IA", text: "Datos de farma preparados y actualizados en el entorno que tu equipo ya usa.", href: "/produtos/conecta" }
      ]
    },
    areas: {
      title: "Por área",
      intro: "Cada área llega con una pregunta distinta. Elige la tuya."
    },
    features: {
      title: "Por funcionalidad",
      intro: "Cuando ya sabes lo que buscas.",
      items: [
        { label: "Inventario en tiempo real", text: "Consulta bajo demanda, con la hora de la respuesta.", href: "/produtos/localizador" },
        { label: "Inventario estimado", text: "Lo que Dinn infiere cuando no hay lectura directa, y con qué confianza.", href: "/funcionalidades#estimado" },
        { label: "Historial y vistas guardadas", text: "El mismo segmento, comparable a lo largo del tiempo.", href: "/funcionalidades#historico" },
        { label: "Insights", text: "Pregunta en español y recibe el número con segmento, fuente y método.", href: "/funcionalidades#insights" },
        { label: "API, archivos y MCP", text: "La misma información fuera de la plataforma.", href: "/integracoes" },
        { label: "Alertas y rutinas", text: "Aviso cuando la señal cambia, en los canales habilitados en el alcance.", href: "/funcionalidades#alertas" }
      ]
    },
    more: "¿No encontraste tu caso?",
    moreCta: "Cuéntanos la decisión que quieres mejorar"
  },

  // ── Escena de inventario en tiempo real (home y página del Localizador) ───
  realtime: {
    eyebrow: "Inventario en tiempo real",
    title: "¿Necesitas verificar ahora? *Consulta el inventario en tiempo real.*",
    text: "En el Localizador, consulta la disponibilidad informada en ese momento por las tiendas compatibles. Mira el horario de la consulta y distingue esa respuesta del inventario D-1 o estimado.",
    condition: "Disponible según cadena, fuente y alcance contratado. La información puede cambiar después de la consulta.",
    sim: "Simulación · valores de ejemplo",
    mapAria: "Mapa del Localizador con farmacias cercanas a la dirección del consumidor, coloreadas por nivel de inventario.",
    stepsLabel: "De la búsqueda a la orientación",
    steps: [
      { title: "Localizar", text: "Indica la dirección o el área y el radio. Las farmacias cercanas aparecen en el mapa." },
      { title: "Elegir la tienda", text: "Abre una tienda. La lectura base es la de ayer; solo las tiendas compatibles tienen la consulta." },
      { title: "Consultar ahora", text: "Dinn le pregunta a la fuente de la tienda en ese momento." },
      { title: "Respuesta y horario", text: "La respuesta llega con el horario de la consulta, separada de la lectura de ayer." },
      { title: "Orientar", text: "Orienta sabiendo qué se informó y cuándo, y comparte la dirección." }
    ],
    stores: [
      { name: "Farmacia Centro", network: "Cadena A" },
      { name: "Farmacia Jardín", network: "Cadena B" },
      { name: "Farmacia Norte", network: "Cadena A" },
      { name: "Farmacia Plaza", network: "Independiente" },
      { name: "Farmacia Sur", network: "Cadena C" },
      { name: "Farmacia Este", network: "Cadena B" }
    ],
    popup: {
      stockTitle: "Inventario del producto",
      exact: "Inventario exacto",
      estimated: "Inventario estimado",
      consult: "Consultar ahora",
      consulting: "Consultando tienda...",
      liveNow: "Consulta hecha ahora · {time}",
      available: "disponible",
      updated: "Actualizado ayer · 23:10",
      price: "R$ 48,90",
      perUnit: "por unidad",
      giro: "Rotación",
      perDay: "pzas./día",
      stalled: "Detenido",
      stalledDays: "hace 9 días",
      notEligible: "Consulta en tiempo real no disponible en esta tienda.",
      share: "Compartir",
      shared: "Dirección y enlace copiados",
      units: "pzas."
    },
    legend: {
      d1: "Lectura D-1: lo que la fuente informó ayer.",
      est: "Estimado: calculado con tiendas comparables.",
      live: "Tiempo real: la respuesta de la tienda en el momento de la consulta."
    },
    orient: "Orientación al consumidor: “La tienda informó ahora y el inventario puede cambiar. Conviene confirmar antes de ir.”",
    link: "Entender las tres lecturas",
    hint: "Haz clic en una tienda del mapa, desplázate por la página o espera: la escena sigue sola."
  },

  // ── Página del Localizador ────────────────────────────────────────────────
  locator: {
    meta: {
      title: "Localizador e inventario en tiempo real | Dinn",
      description: "Consulta la disponibilidad informada por las tiendas compatibles en el momento en que la necesitas y diferencia la respuesta del inventario D-1 o estimado."
    },
    hero: {
      eyebrow: "Dinn Localizador",
      title: "¿Necesitas verificar ahora? *Consulta el inventario en tiempo real.*",
      lead: "En el Localizador, consulta la disponibilidad informada en ese momento por las tiendas compatibles. Mira la hora de la consulta y diferencia esa respuesta del inventario D-1 o estimado."
    },
    scene: { title: "De la búsqueda a la orientación, en cinco pasos" },
    readings: {
      title: "Tres lecturas, tres usos",
      intro: "Tres lecturas conviven en la misma tienda. Dinn siempre dice cuál estás viendo, y cada una responde a una pregunta distinta.",
      columns: ["Lectura", "Qué es", "Actualización", "Cuándo usarla"],
      rows: [
        ["Inventario D-1 (observado)", "Lo que la fuente informó el día anterior, por tienda y con la fecha.", "Base diaria, con la fecha de cada lectura.", "Priorizar y dar seguimiento a un segmento."],
        ["Estimado", "Calculado a partir de tiendas comparables y del historial cuando no hay respuesta directa, siempre con nivel de confianza.", "En la actualización de la base.", "Cubrir la ausencia de señal directa, confirmando antes de actuar."],
        ["Tiempo real (consulta)", "La respuesta que la tienda informa a la fuente en el momento de la consulta, con la hora.", "En el momento en que consultas, una tienda a la vez.", "Confirmar la disponibilidad antes de orientar a alguien o de una visita."]
      ]
    },
    when: {
      title: "Cuándo vale la pena consultar ahora",
      items: [
        { title: "La llamada del consumidor", text: "El paciente pregunta dónde encontrar el medicamento. En lugar de llamar tienda por tienda, consulta la más cercana y responde con lo que informó ahora." },
        { title: "La visita de esta tarde", text: "Antes de hablar con la cadena, mira lo que la tienda informa en este momento y lleva a la conversación el dato de hoy, no el de ayer." },
        { title: "Después de la reposición", text: "¿Acordaste la entrega con la cadena? Consulta la misma tienda otra vez y mira si el producto ya apareció en la respuesta." }
      ]
    },
    conditions: {
      title: "Qué tiene que estar en pie",
      items: [
        { title: "Cadena y fuente compatibles", text: "La tienda tiene que poder responder la pregunta. La lista de cadenas y fuentes elegibles viene de la cobertura validada." },
        { title: "Alcance contratado", text: "El inventario en tiempo real es un complemento del plan. Las condiciones y los límites están en Planes." },
        { title: "Una consulta, una respuesta", text: "La respuesta vale para ese horario. No es una actualización continua de toda la base." }
      ],
      coverageLink: "Ver la cobertura",
      plansLink: "Ver planes y complementos"
    },
    faq: {
      title: "Preguntas sobre inventario en tiempo real",
      items: [
        { question: "¿Tiempo real quiere decir que veo todas las tiendas actualizadas todo el tiempo?", answer: "No. Es una consulta bajo demanda: eliges una tienda compatible y Dinn le pregunta a la fuente en ese momento. La lectura de base sigue siendo D-1." },
        { question: "¿La respuesta garantiza que el producto estará ahí?", answer: "No. Es lo que la fuente informó a esa hora. El inventario puede cambiar después, y la orientación al consumidor debe decirlo." },
        { question: "¿Todas las cadenas tienen consulta en tiempo real?", answer: "No. Depende de la cadena, la fuente y el alcance contratado. Validamos el segmento contigo antes de empezar." },
        { question: "¿Cuál es la diferencia con el inventario estimado?", answer: "El estimado se calcula por tiendas comparables cuando no hay respuesta directa. La consulta en tiempo real es la respuesta de la propia tienda, con la hora." }
      ]
    },
    cta: {
      title: "¿Quieres ver la consulta con tu cadena y tu producto?",
      desc: "Validemos productos, cadenas, regiones y la decisión que tu equipo quiere mejorar.",
      button: "Conversa sobre el segmento de tu operación"
    }
  },

  // ── Funcionalidades ───────────────────────────────────────────────────────
  features: {
    meta: {
      title: "Funcionalidades | Dinn",
      description: "Lo que hace Dinn, del problema a la decisión: problema, entrada, acción en la interfaz, salida y decisión apoyada de cada funcionalidad, con actualización, alcance y límites."
    },
    hero: {
      eyebrow: "Funcionalidades",
      title: "Lo que hace Dinn, *del problema a la decisión*",
      lead: "Cada funcionalidad muestra el problema que resuelve, qué entra, qué haces en la interfaz, qué sale y la decisión que apoya, con actualización, alcance y límites."
    },
    listLabel: "Funcionalidades",
    kinds: { produto: "Producto", interface: "Interfaz", integracao: "Integración", servico: "Servicio" },
    kindsNote: "Producto es lo que Dinn entrega. Interfaz es por dónde accedes. Integración lleva los datos a tu entorno. Servicio es trabajo bajo alcance.",
    flow: {
      problem: "Problema",
      input: "Entrada",
      action: "Acción en la interfaz",
      output: "Salida",
      decision: "Decisión apoyada",
      limit: "Límite de la lectura",
      more: "Más información"
    },
    sim: "Ejemplos ilustrativos, con valores de ejemplo. La disponibilidad de cada funcionalidad sigue el plan contratado.",
    items: [
      {
        id: "disponibilidade", name: "Disponibilidad y desabasto", kind: "produto",
        problem: "¿Qué producto está faltando y por dónde empiezo a verificar?",
        input: "SKU, cadena y región.",
        action: "Seleccionas el segmento. Dinn muestra el período y el denominador de la lectura y abre las tiendas.",
        output: "Tiendas ordenadas por la proporción de días sin inventario sobre los días observados.",
        decision: "Qué tiendas verificar primero.",
        limit: "Ausencia no es desabasto confirmado. Las tiendas que nunca vendieron el artículo quedan fuera del cálculo.",
        href: "/solucoes/trade-kam-campo"
      },
      {
        id: "localizador", name: "Localizador", kind: "produto",
        problem: "¿Dónde encuentra el consumidor el producto cerca de él?",
        input: "Dirección o área, radio y cadena.",
        action: "Busca y compara las tiendas por distancia, con el origen y la actualización de cada lectura.",
        output: "Tiendas cercanas con disponibilidad, distancia y la fecha de la información.",
        decision: "Qué tienda indicar y con cuánta seguridad.",
        limit: "Probabilidad de inventario no es garantía de inventario. La cobertura varía por cadena y fuente.",
        href: "/produtos/localizador"
      },
      {
        id: "tempo-real", name: "Inventario en tiempo real", kind: "produto",
        problem: "Necesito confirmar ahora, antes de orientar a alguien.",
        input: "Una tienda compatible, elegida en el Localizador.",
        action: "Activas “Consultar ahora”. Dinn le pregunta a la fuente de la tienda en ese momento.",
        output: "La respuesta de la fuente y la hora de la consulta, separadas de la lectura D-1.",
        decision: "Si vale la pena indicar la tienda o revisar otra.",
        limit: "Disponible según cadena, fuente y alcance contratado. La información puede cambiar después de la consulta.",
        href: "/produtos/localizador"
      },
      {
        id: "estimado", name: "Inventario estimado", kind: "produto",
        problem: "La fuente no respondió. ¿Qué puedo inferir?",
        input: "Historial de la tienda y tiendas comparables.",
        action: "Dinn estima donde no hay lectura directa y muestra la referencia usada y la confianza.",
        output: "Una estimación rotulada como tal, con nivel de confianza.",
        decision: "Dónde confirmar antes de actuar.",
        limit: "Es estimación, no lectura de la tienda. Confirma cuando la decisión sea sensible.",
        href: "/cobertura"
      },
      {
        id: "historico", name: "Historial, filtros y vistas guardadas", kind: "interface",
        problem: "¿Cómo comparo el mismo segmento a lo largo del tiempo?",
        input: "Período, filtros y el segmento que importa para el equipo.",
        action: "Aplicas los filtros, guardas la vista y vuelves a ella en la próxima rutina.",
        output: "La misma lectura, comparable de una semana a otra.",
        decision: "Si la señal persistió, disminuyó o cambió de lugar.",
        limit: "El historial disponible y la cantidad de tableros dependen del plan contratado.",
        href: "/planos"
      },
      {
        id: "giro-preco", name: "Rotación, precio e inventario sin movimiento", kind: "produto",
        problem: "¿El producto sale? ¿A qué precio? ¿Dónde el saldo no se mueve?",
        input: "Producto, cadena y ventana de tiempo.",
        action: "Eliges la ventana. Dinn muestra el cálculo y compara solo lo que es comparable.",
        output: "Estimación de rotación en el segmento, precio observado y días sin movimiento.",
        decision: "Dónde investigar la caída de rotación o reubicar saldo.",
        limit: "Movimiento no es venta confirmada. La rotación es una estimación.",
        href: "/solucoes/inteligencia-pricing"
      },
      {
        id: "distribuicao", name: "Distribución", kind: "produto",
        problem: "¿La falla está en el CEDIS, en la reposición o en la farmacia?",
        input: "CEDIS, tiendas que abastece y producto.",
        action: "Cruza el inventario en el CEDIS con la disponibilidad en las tiendas, por el vínculo de abasto confirmado.",
        output: "El CEDIS y las tiendas lado a lado, con la cobertura en días.",
        decision: "Dónde revisar pedido, reposición o reubicación.",
        limit: "Cercanía geográfica no es vínculo de abasto. El patrón es una hipótesis; la causa exige investigación.",
        href: "/solucoes/supply-distribuicao"
      },
      {
        id: "mercado", name: "Mercado y competencia", kind: "produto",
        problem: "¿Perdí participación o perdí venta?",
        input: "Canasta de productos, universo de tiendas y ventana.",
        action: "Defines la canasta y las tiendas comparables y comparas tu producto con la categoría.",
        output: "Evolución de tu producto y de la categoría en las mismas tiendas, y dónde solo el competidor tiene inventario.",
        decision: "Dónde recuperar espacio.",
        limit: "La venta es estimada. Los datos de competidores aparecen agregados y respetan los derechos de uso.",
        href: "/solucoes/inteligencia-pricing"
      },
      {
        id: "insights", name: "Insights", kind: "interface",
        problem: "Quiero la respuesta sin armar un tablero.",
        input: "Una pregunta en español.",
        action: "Preguntas a Dinn Insights. La respuesta trae el segmento, la fuente y el método.",
        output: "Un número con segmento, fecha, método y naturaleza (observado o estimado).",
        decision: "Qué análisis abrir a continuación.",
        limit: "Responde dentro del segmento y de las capacidades del plan. Las hipótesis aparecen como hipótesis.",
        href: "/plataforma"
      },
      {
        id: "priorizacao", name: "Priorización y retorno", kind: "produto",
        problem: "Con tantas señales, ¿por dónde empieza el equipo?",
        input: "Señales del segmento y la cartera del equipo.",
        action: "Ordena la lista por la señal, asigna al responsable y registra lo que el equipo encontró.",
        output: "Una lista con señal, fecha, responsable y el registro del retorno.",
        decision: "Quién verifica qué, y qué seguir después.",
        limit: "Dinn prepara la lista. La agenda y la decisión son del equipo.",
        href: "/solucoes/trade-kam-campo"
      },
      {
        id: "exportacoes", name: "Exportaciones, API y MCP", kind: "integracao",
        problem: "Necesito la misma información fuera de la plataforma.",
        input: "El segmento y el destino autorizado.",
        action: "Eliges la modalidad: archivo, consumo técnico o IA autorizada.",
        output: "La misma lectura en archivo, en la API o en la IA de la empresa, con origen y fecha.",
        decision: "Dónde pasa tu equipo a usar el dato.",
        limit: "Cada modalidad depende del plan, la autorización y el alcance. El MCP es de consulta, solo lectura.",
        href: "/integracoes"
      },
      {
        id: "alertas", name: "Alertas y rutinas", kind: "interface",
        problem: "Quiero saber cuándo algo cambia, sin abrir la plataforma.",
        input: "La regla, el canal y la frecuencia.",
        action: "Defines la regla de seguimiento y el canal por el que llega el aviso.",
        output: "Un aviso con la señal, el segmento y la fecha.",
        decision: "Cuándo actuar o revisar el segmento.",
        limit: "Siguen los disparadores y canales habilitados en el alcance. Las automatizaciones de tu IA las configuras tú.",
        href: "/plataforma"
      },
      {
        id: "conecta", name: "Dinn Conecta", kind: "integracao",
        problem: "Cada análisis empieza juntando todo de nuevo.",
        input: "Fuentes autorizadas: mercado, datos internos y farmacias.",
        action: "Dinn reúne, estandariza producto, tienda y región y mantiene el camino actualizado.",
        output: "Datos de farma preparados en tu BI, Copilot o proyecto.",
        decision: "La pregunta que tu equipo quiere responder, sin rehacer la base.",
        limit: "Fuentes e integraciones según acceso, licencia y alcance. No sustituye licencias ni ejecuta acciones por sí solo.",
        href: "/produtos/conecta"
      },
      {
        id: "projetos", name: "Investigaciones y proyectos especiales", kind: "servico",
        problem: "Mi pregunta pide un segmento propio.",
        input: "La pregunta, el universo y las fuentes disponibles.",
        action: "Evaluamos contigo la viabilidad y el alcance.",
        output: "Informe, base tratada o flujo hacia el BI, según lo acordado.",
        decision: "La decisión que motivó el proyecto.",
        limit: "Sujeto a evaluación de viabilidad y alcance, con los derechos de las fuentes preservados.",
        href: "/pesquisas"
      }
    ],
    cta: {
      title: "¿Qué funcionalidad responde a tu pregunta?",
      desc: "Validemos productos, cadenas, regiones y la decisión que tu equipo quiere mejorar.",
      button: "Conversa sobre el segmento de tu operación"
    }
  },

  // ── Dinn Conecta (base: previa 08, dinn-data-preview) ─────────────────────
  conecta: {
    meta: {
      title: "Dinn Conecta | Datos de farma en el entorno de tu equipo",
      description: "Dinn conecta mercado, datos internos y farmacias, prepara y actualiza el contexto de farma y lo entrega en tu BI, en tu Copilot y en los proyectos de tu empresa."
    },
    hero: {
      eyebrow: "Para la industria farmacéutica",
      title1: "Datos de farma.",
      title2: "Trabajando juntos.",
      lead: "Mercado, datos internos y farmacias con el contexto\nque tu BI, Copilot y proyectos necesitan.",
      cta: "Mira cómo se conecta"
    },
    map: {
      aria: "Mercado, datos de la empresa y señales de las farmacias pasan por Dinn Conecta y llegan al BI, al Copilot y a los proyectos internos.",
      sources: "Tus fuentes",
      environment: "Tu entorno",
      market: { name: "Mercado", sub: "IQVIA · Close-Up" },
      company: { name: "Tu empresa", sub: "Ventas · ERP · lake" },
      pharmacy: { name: "Farmacias", sub: "Contexto Dinn" },
      core: { name: "Conecta", sub: "Reúne · organiza · actualiza" },
      bi: { name: "Tu BI", sub: "Análisis y tableros" },
      ai: { name: "Tu Copilot", sub: "Preguntas del equipo" },
      project: { name: "Tu proyecto", sub: "Tus herramientas" },
      yours: "Tu proyecto sigue siendo tuyo.",
      dinn: "Dinn se encarga de la conexión.",
      caption: "Fuentes e integraciones según acceso, licencia y alcance."
    },
    problem: {
      label: "Menos trabajo repetido",
      title1: "¿Cada análisis empieza",
      title2: "juntando todo de nuevo?",
      text: "Los datos ya existen. El trabajo está en hacer que una fuente hable con la otra.",
      items: [
        { n: "01 / Reunir", title: "Archivos dispersos.", text: "Mercado en una base. Ventas en el ERP. Disponibilidad en otra fuente." },
        { n: "02 / Revisar", title: "Alcances distintos.", text: "Nombres de productos, cadenas y períodos que hay que combinar." },
        { n: "03 / Mantener", title: "Todo cambia otra vez.", text: "Llega la próxima actualización. Y alguien tiene que cuidar ese camino." }
      ],
      bottom: "Dinn prepara y mantiene los datos. Tu equipo los usa."
    },
    context: {
      label: "Contexto para IA",
      title1: "En la era de la IA,",
      title2: "el contexto importa.",
      text: "Tu equipo ya tiene la tarea de conectar bases internas y poner esos datos a disposición de los agentes de la empresa. Ese proyecto sigue siendo tuyo. Dinn entra para organizar, depurar y estandarizar el camino con conocimiento de farma.",
      stackAria: "La infraestructura y los datos siguen con el cliente. Dinn agrega una capa de organización y contexto farmacéutico antes de que los datos lleguen al BI y a los agentes.",
      owner: { label: "Sigue contigo", text: "Tus datos · Tu infraestructura · Tu gobernanza" },
      layer: { label: "Capa Dinn", text: "Depuración · Estandarización · Contexto de farma" },
      destination: { label: "Listo para tu entorno", text: "BI · Copilot · Agentes internos" },
      cta: { title: "Lleva contexto de farma a", text: "Copilot · ChatGPT · Claude · Gemini · tus agentes", button: "Verlo en la práctica" }
    },
    apps: {
      label: "En la rutina de farma",
      title1: "De la conexión",
      title2: "a la pregunta de tu equipo.",
      legend: "Elige una aplicación",
      caption: "Ejemplo con datos ficticios. No representa un resultado de cliente.",
      nextLabel: "Próxima conversación",
      askLabel: "Una pregunta en tu Copilot",
      items: [
        {
          id: "disponibilidad", tab: "Disponibilidad", area: "Trade y comercial", kind: "table",
          title: "¿Dónde investigar la falta de producto?",
          text: "Cruza la venta interna con la disponibilidad en las farmacias. Prioriza cadenas y regiones para conversar sobre el abastecimiento.",
          flow: ["Venta interna", "Prioridad por cadena"],
          sheet: "Agenda de la próxima reunión",
          meta: ["Producto A", "Última semana"],
          columns: ["Región", "Venta interna", "En las farmacias"],
          rows: [["Sur", "A la baja", "Verificar faltante ↗"], ["Sudeste", "Estable", "Sin cambios"], ["Centro-Oeste", "Al alza", "Dar seguimiento"]],
          next: "Investigar el abastecimiento en la región Sur con la cadena.",
          source: "Venta interna + disponibilidad Dinn."
        },
        {
          id: "lancamentos", tab: "Lanzamientos", area: "Gestión de marcas", kind: "launch",
          title: "¿El lanzamiento llegó a las tiendas previstas?",
          text: "Compara el plan de lanzamiento con las señales en las farmacias. Lleva al campo una lista de lo que hay que verificar.",
          flow: ["Plan de lanzamiento", "Tiendas por verificar"],
          sheet: "Seguimiento del lanzamiento",
          meta: ["Producto A", "Tiendas previstas en el plan"],
          rows: [["Cadena A", "Señal encontrada", "ok"], ["Cadena B", "Verificar con el campo", "mark"], ["Cadena C", "Esperando actualización", "wait"]],
          next: "Verificar las tiendas de la Cadena B antes de revisar el plan.",
          source: "Plan de lanzamiento + disponibilidad Dinn. La ausencia de señal no prueba un faltante de inventario."
        },
        {
          id: "copilot", tab: "Copilot", area: "Datos e IA", kind: "ask",
          title: "¿Tu Copilot puede usar los datos de farma?",
          text: "Lleva datos internos, mercado y contexto de las farmacias a la IA de la empresa. Con origen, actualización y límites claros.",
          flow: ["Datos del negocio", "Contexto para la IA"],
          question: "¿Dónde vale la pena investigar la caída del Producto A?",
          answer: "Empieza por la región Sur. Cruza la venta interna con las tiendas señaladas y revisa el historial de pedidos.",
          source: "La respuesta ayuda a investigar. No presupone la causa."
        }
      ]
    },
    team: {
      label: "Junto con tu equipo",
      title1: "El proyecto es tuyo.",
      title2: "La operación de los datos\npuede quedar con Dinn.",
      text: "De la implementación al seguimiento.\nSin reemplazar a tu equipo ni tus herramientas.",
      yours: { label: "Tu equipo", title: "Prioridades, herramientas y accesos.", text: "Decide qué necesita responder y cómo usar los datos." },
      dinn: { label: "Dinn Conecta", title: "Fuentes, calidad y actualización.", text: "Prepara los datos y se encarga de las conexiones en el alcance acordado." }
    },
    faq: {
      label: "Antes de empezar",
      title: "Algunas respuestas.",
      items: [
        { question: "¿Podemos usar nuestras licencias de IQVIA y Close-Up?", answer: "El uso depende de los permisos del proveedor y del acceso autorizado por tu empresa. Dinn no reemplaza la licencia. Validamos fuentes y derechos antes de definir la integración." },
        { question: "¿Funciona con nuestro BI, data lake o Copilot?", answer: "La propuesta es trabajar con el entorno que ya tienen. El camino de entrega se define con tu equipo técnico, según seguridad, herramientas y viabilidad." },
        { question: "¿Dinn también implementa la solución?", answer: "Sí. La oferta puede combinar implementación y operación continua. Empezamos por un flujo definido con tu equipo, con alcance y responsabilidades claros." }
      ]
    },
    closing: {
      label: "Un flujo a la vez",
      title1: "¿Qué rutina de farma",
      title2: "quieres simplificar?",
      button: "Explorar las aplicaciones"
    }
  },

  // ── Integraciones y API ───────────────────────────────────────────────────
  integrations: {
    meta: {
      title: "Integraciones y API | Dinn",
      description: "API, archivos, BI, lake e IA del cliente: cómo consumir los datos de Dinn en el entorno que tu equipo ya usa, con alcance, responsabilidades y límites claros."
    },
    hero: {
      eyebrow: "Integraciones y API",
      title: "Los datos de Dinn en el entorno que *tu equipo ya usa.*",
      lead: "Tu equipo puede consumir la inteligencia en la plataforma o evaluar una entrega de datos para sus sistemas internos. Con fuentes autorizadas y alcance definido, Dinn prepara información de producto, tienda, cadena, región y período para apoyar tus análisis y rutinas."
    },
    flow: {
      title: "De la señal al tablero en tu BI",
      steps: [
        { title: "Señal Dinn + base interna autorizada", text: "Disponibilidad, rotación y precio del canal, con los datos de tu empresa que autorices." },
        { title: "Identificación y estandarización", text: "Producto, tienda, cadena y región con la misma clave." },
        { title: "Entrega acordada", text: "API, archivo o tabla en el destino acordado, con la frecuencia definida." },
        { title: "Tablero en el BI del cliente", text: "Tu equipo arma y mantiene la vista que necesita." }
      ],
      dinn: { title: "Dinn entrega", items: ["Los datos identificados y estandarizados", "La entrega en el formato, destino y frecuencia acordados", "La documentación y el seguimiento en el alcance"] },
      client: { title: "El cliente configura", items: ["El destino y los accesos en tu entorno", "El modelo y el tablero en el BI", "La gobernanza de los datos internos"] },
      caution: "El ejemplo no presupone un conector nativo para tu herramienta: el camino de entrega se define con tu equipo técnico."
    },
    modalities: {
      title: "Cinco formas de consumir",
      intro: "Elige por la decisión que quieres apoyar, no por el nombre de la tecnología.",
      knowLabel: "Lo que necesitas entender",
      items: [
        {
          id: "api", name: "API",
          text: "Consume datos en sistemas internos, con autenticación, alcance y límites definidos.",
          know: ["Qué datos y campos, con filtros y granularidad", "Actualización, autenticación y permisos", "Límites de uso, versionado y manejo de fallas", "Ejemplo de respuesta y documentación"]
        },
        {
          id: "arquivos", name: "Archivos gobernados",
          text: "Recibe archivos en el formato, destino y frecuencia acordados.",
          know: ["Formatos, frecuencia y destino autorizado", "Actualización incremental o completa, y el historial", "Seguridad y responsabilidades de cada lado", "El mecanismo de entrega se define en el alcance"]
        },
        {
          id: "bi", name: "BI, lake o warehouse",
          text: "Recibe los datos en el entorno analítico de tu empresa.",
          know: ["Cómo recibir y relacionar los datos", "Claves de producto, PDV y cadena", "Modelo de ejemplo", "Quién construye y mantiene el tablero"]
        },
        {
          id: "mcp", name: "MCP",
          text: "Deja que una IA autorizada consulte los datos de Dinn, solo lectura.",
          know: ["Consulta por IA autorizada, con acceso de solo lectura", "Los permisos se preservan", "Informamos los entornos y modalidades probados", "Protocolo no equivale a homologación de cada herramienta"]
        },
        {
          id: "conecta", name: "Dinn Conecta y proyectos de datos",
          text: "Entrega la preparación y la operación de los datos a Dinn.",
          know: ["Fuentes, estandarización, calidad y operación contratadas", "Alcance y responsabilidades de cada lado", "Empieza por un flujo delimitado"],
          href: "/produtos/conecta", hrefLabel: "Ver Dinn Conecta"
        }
      ]
    },
    status: {
      title: "Cómo se contrata cada modalidad",
      text: "Que exista una interfaz técnica, que tengas acceso contratado y que forme parte del catálogo estándar son situaciones distintas. En cada conversación dejamos claro en cuál de ellas está lo que necesitas.",
      plansLink: "Ver planes y complementos"
    },
    questions: {
      title: "Cuatro preguntas para empezar",
      items: [
        { label: "Origen", text: "¿De dónde vienen los datos que quieres combinar?" },
        { label: "Destino", text: "¿Dónde los va a usar tu equipo: BI, lake, sistema interno o IA?" },
        { label: "Frecuencia", text: "¿Con qué frecuencia necesita llegar la información?" },
        { label: "Decisión", text: "¿Qué decisión va a apoyar esto?" }
      ]
    },
    faq: {
      title: "Preguntas sobre integración",
      items: [
        { question: "¿Dinn se integra con cualquier sistema?", answer: "No prometemos “cualquier sistema”. Definimos con tu equipo técnico el camino de entrega posible, según seguridad, herramientas y viabilidad." },
        { question: "¿Necesito TI para empezar?", answer: "La lectura en la plataforma no exige integración. Para API, archivos o BI, tu equipo técnico define el destino y los accesos; Dinn acompaña en el alcance." },
        { question: "¿La integración es inmediata?", answer: "Depende del alcance y de los prerrequisitos. La implementación toma hasta 30 días después de que los prerrequisitos y el alcance estén acordados." }
      ]
    },
    cta: {
      title: "Cuéntanos tu flujo de datos",
      desc: "Origen, destino, frecuencia y la decisión que apoya: con eso, evaluamos el camino de entrega.",
      button: "Conversar sobre mi flujo de datos"
    }
  },

  // ── Planes y contratación (sin precios) ───────────────────────────────────
  plans: {
    meta: {
      title: "Planes y contratación | Dinn",
      description: "Compara Starter, Essential y Professional, los complementos y los servicios de implementación. La propuesta considera productos, cobertura, usuarios e integración."
    },
    hero: {
      eyebrow: "Planes y contratación",
      title: "Elige el alcance que tiene sentido *para tu operación.*",
      lead: "Compara las formas de contratar Dinn y los recursos que pueden componer tu operación. La propuesta considera productos, cobertura, usuarios y necesidades de integración."
    },
    tiers: [
      { name: "Starter", text: "Empezar con un segmento concentrado." },
      { name: "Essential", text: "Ampliar el seguimiento de productos y cadenas." },
      { name: "Professional", text: "Atender una operación mayor, con más historial y consumo de datos." }
    ],
    compare: {
      title: "Compara los planes",
      intro: "La base es la misma lectura diaria. Lo que cambia es el tamaño del segmento, el historial y lo que acompaña al plan.",
      columns: ["", "Starter", "Essential", "Professional"],
      rows: [
        ["Actualización base", "Diaria, D-1", "Diaria, D-1", "Diaria, D-1"],
        ["Usuarios incluidos", "5", "15", "50"],
        ["Tableros personalizados incluidos", "1", "3", "5"],
        ["Historial máximo", "7 días", "3 meses", "6 meses"],
        ["SKU propios incluidos", "5", "20", "100"],
        ["Granularidad", "PDV", "PDV", "PDV"],
        ["Grandes cadenas", "Incluido", "Incluido", "Incluido"],
        ["Cadenas medianas", "Bajo consulta", "Incluido", "Incluido"],
        ["Inventario predicho para farmacias sin cadena", "Bajo consulta", "Bajo consulta", "Incluido, según el alcance acordado"],
        ["Descarga manual", "Incluido", "Incluido", "Incluido"],
        ["Usuarios y SKU adicionales", "Bajo consulta", "Contratación adicional", "Contratación adicional"],
        ["Compromiso mínimo", "3 meses", "12 meses", "12 meses"]
      ],
      note: "Sin precios públicos: la propuesta considera productos, cobertura, usuarios y necesidades de integración."
    },
    addons: {
      title: "Complementos e inclusiones",
      intro: "Lo que puede componer el plan, y en cuál ya viene incluido.",
      columns: ["Recurso", "Starter", "Essential", "Professional"],
      labels: { i: "Incluido", c: "Complemento", a: "Bajo consulta" },
      legend: "Complemento es una contratación adicional. Bajo consulta quiere decir que evaluamos la condición contigo, no que el recurso sea imposible.",
      rows: [
        { name: "Inteligencia competitiva", text: "Compara una canasta de productos y cadenas, con universo y método definidos.", tiers: ["a", "c", "c"] },
        { name: "Forecast con IA", text: "Explora proyecciones y escenarios con supuestos, horizonte e incertidumbre explícitos.", tiers: ["a", "c", "c"] },
        { name: "Tableros adicionales o personalizados", text: "Adapta análisis a preguntas específicas, además de los tableros incluidos.", tiers: ["a", "c", "c"] },
        { name: "Inventario en tiempo real", text: "Consulta la disponibilidad actual en las tiendas compatibles. La consulta bajo demanda y la actualización continua tienen condiciones distintas.", tiers: ["a", "c", "c"] },
        { name: "Localizador para Atención a clientes", text: "Localiza tiendas por cercanía y verifica la disponibilidad para orientar la atención.", tiers: ["a", "c", "c"] },
        { name: "Alertas por reglas y canales", text: "Da seguimiento a señales y excepciones por reglas y canales definidos en el alcance.", tiers: ["a", "c", "c"] },
        { name: "Monitoreo de precios", text: "Compara precios en el segmento contratado, con la fuente y el momento de la lectura.", tiers: ["c", "c", "c"] },
        { name: "Estimación de rotación", text: "Investiga el movimiento estimado, sin confundirlo con venta confirmada.", tiers: ["a", "c", "i"] },
        { name: "Asistente web", text: "Haz preguntas sobre el segmento contratado, con origen y límites en la respuesta.", tiers: ["a", "c", "c"] },
        { name: "Repositorio de archivos", text: "Recibe archivos en el formato, destino y frecuencia acordados.", tiers: ["a", "c", "i"] },
        { name: "API", text: "Consume datos en sistemas internos, con autenticación, alcance y límites definidos.", tiers: ["a", "c", "i"] },
        { name: "SSO corporativo", text: "Evalúa la autenticación corporativa y los requisitos de implementación.", tiers: ["a", "a", "a"] }
      ]
    },
    beyond: {
      title: "Más allá de la suscripción",
      intro: "Estos ítems se contratan bajo alcance, en bloques propios.",
      items: [
        { title: "MCP", text: "Consulta por la IA autorizada de tu empresa, con acceso de solo lectura.", href: "/integracoes", cta: "Ver integraciones" },
        { title: "Dinn Conecta", text: "Preparación y operación de flujos de datos para tu BI, Copilot y proyectos.", href: "/produtos/conecta", cta: "Ver Dinn Conecta" },
        { title: "Investigaciones y fuentes personalizadas", text: "Estudios bajo demanda y evaluación de nuevas fuentes, con alcance y viabilidad definidos.", href: "/pesquisas", cta: "Ver investigaciones" },
        { title: "Implementación y servicios", text: "Implementación, capacitación y seguimiento, dimensionados según la complejidad del alcance.", href: "/contato", cta: "Hablar sobre el alcance" }
      ]
    },
    start: {
      title: "Cómo empezar",
      items: [
        { title: "Evaluación guiada de 30 días", text: "Un objetivo escrito, la cobertura validada, un responsable de cada lado y un criterio para seguir, ajustar o terminar." },
        { title: "Implementación en hasta 30 días", text: "Contados después de que los prerrequisitos y el alcance estén acordados. El plazo total considera también las etapas de compras y homologación de tu empresa." }
      ]
    },
    faq: {
      title: "Preguntas sobre la contratación",
      items: [
        { question: "¿Los precios están en el sitio?", answer: "No publicamos precios. La propuesta considera productos, cobertura, usuarios y necesidades de integración, y se arma después de validar tu segmento." },
        { question: "¿Puedo empezar por un plan menor y crecer?", answer: "Sí. Usuarios y SKU adicionales, cadenas y complementos pueden contratarse a medida que la operación crece." },
        { question: "¿Complemento y servicio son lo mismo?", answer: "No. Complemento es un recurso que se suma al plan. Servicio, como implementación, investigación o proyecto de datos, es trabajo contratado bajo alcance." },
        { question: "¿Existe un compromiso mínimo?", answer: "Sí, y varía según el plan, como muestra el comparativo. Los términos finales constan en la propuesta." }
      ]
    },
    cta: {
      title: "Define el plan para tu operación",
      desc: "Cuéntanos los productos, las cadenas y la decisión que quieres mejorar. Armamos la propuesta a partir del segmento validado.",
      button: "Definir el plan para mi operación"
    }
  },

  // ── Cobertura ─────────────────────────────────────────────────────────────
  coverage: {
    meta: {
      title: "Cobertura | Dinn",
      description: "Conoce dónde Dinn puede apoyar tu operación: cobertura por país, cadena, producto y tipo de lectura, con actualización y límites."
    },
    hero: {
      eyebrow: "Cobertura",
      title: "Conoce dónde Dinn puede *apoyar tu operación.*",
      lead: "Conoce la cobertura por país, cadena, producto y tipo de lectura. Antes de empezar, validamos el segmento relevante para tu equipo."
    },
    dims: {
      title: "Cómo describimos la cobertura",
      intro: "Cada dimensión se informa por separado, para que nadie sume bases superpuestas ni confunda registro con dato utilizable.",
      items: [
        { title: "País", text: "Países con operación validada, disponibles bajo proyecto y en estudio, sin mezclarlos." },
        { title: "Cadenas y marcas", text: "Cadenas monitoreadas, con nombre y logo usados solo cuando están autorizados. Monitoreada no quiere decir socia." },
        { title: "PDV", text: "PDV únicos y universo elegible. Registro no es dato utilizable: contamos lo que tiene lectura." },
        { title: "Producto y categoría", text: "Cobertura por SKU y categoría, con ubicación y período; farmacias digitalizadas e independientes, cuando aplique." },
        { title: "Naturaleza de la lectura", text: "Observación directa, estimación y tiempo real, en líneas separadas." },
        { title: "Actualización y brechas", text: "Frecuencia, tiendas y fuentes elegibles, brechas conocidas y la fecha de la última revisión." }
      ]
    },
    nature: {
      title: "Observado, estimado y en tiempo real",
      intro: "La misma tienda puede tener más de una lectura. Cada una se cuenta por separado.",
      columns: ["Lectura", "Qué cubre", "Actualización"],
      rows: [
        ["Observado (D-1)", "Lo que la fuente informó, por tienda, el día anterior.", "Base diaria, con la fecha de cada lectura."],
        ["Estimado", "Tiendas sin respuesta directa, a partir de tiendas comparables y del historial, con nivel de confianza.", "En la actualización de la base."],
        ["Tiempo real", "Tiendas compatibles, por consulta bajo demanda.", "En el momento de la consulta, una tienda a la vez."]
      ]
    },
    status: {
      title: "Dónde actúa Dinn",
      intro: "Los tres grupos se mantienen separados. La lista sale del registro de cobertura, con la fecha de la última revisión.",
      reviewed: "Última revisión",
      empty: "La lista actual se presenta en la validación de tu segmento.",
      groups: [
        { key: "validated", title: "Operación validada", text: "Países y cadenas con lectura en uso." },
        { key: "project", title: "Disponible bajo proyecto", text: "Atendidos bajo proyecto y evaluación de viabilidad." },
        { key: "study", title: "En estudio", text: "Mapeados, aún sin oferta comercial." }
      ]
    },
    validate: {
      title: "Validar mi cobertura",
      text: "Indica el país, los productos y las cadenas o regiones que importan. Te devolvemos lo que cubrimos hoy para ese segmento, por tipo de lectura.",
      items: ["País", "Productos o categorías", "Cadenas o regiones"],
      button: "Validar mi cobertura"
    },
    links: { locator: "Inventario en tiempo real", plans: "Planes y complementos", trust: "Cómo tratamos origen y límites" }
  },

  // ── Investigaciones y proyectos especiales ────────────────────────────────
  research: {
    meta: {
      title: "Investigaciones y proyectos especiales | Dinn",
      description: "Estudios bajo demanda, informes recurrentes, nuevas fuentes y proyectos de preparación e integración de datos, con método y entrega definidos en conjunto."
    },
    hero: {
      eyebrow: "Investigaciones y proyectos especiales",
      title: "Una pregunta específica puede necesitar *un segmento propio.*",
      lead: "Evaluamos estudios bajo demanda y proyectos con fuentes adicionales para responder a una decisión concreta del canal farmacéutico. El trabajo puede combinar datos de Dinn, fuentes autorizadas e información interna, con método y entrega definidos en conjunto."
    },
    cards: {
      title: "Cuatro modalidades",
      deliverLabel: "Entrega por definir en la propuesta",
      items: [
        { tag: "Investigación bajo demanda", title: "Una decisión específica, un estudio con segmento propio.", deliver: "Pregunta, universo, método e informe o base analizada." },
        { tag: "Informes recurrentes", title: "Da seguimiento a la misma pregunta a lo largo del tiempo.", deliver: "Indicadores, frecuencia, responsables y revisión de comparabilidad." },
        { tag: "Fuentes personalizadas", title: "Evalúa nuevas fuentes para tu proyecto.", deliver: "Acceso y derechos, viabilidad, calidad, costo y límites de actualización." },
        { tag: "Preparación e integración", title: "Conecta el segmento al entorno en el que trabaja tu equipo.", deliver: "Fuentes, estandarización, destino, operación y criterio de aceptación, según la propuesta Conecta." }
      ]
    },
    define: {
      title: "Lo que acordamos en cada proyecto",
      items: ["La pregunta", "El universo", "Las fuentes", "El método", "La entrega", "El plazo acordado", "El criterio de aceptación"]
    },
    deliveries: {
      title: "Entregas posibles",
      intro: "Sujetas a la viabilidad de cada proyecto.",
      items: ["Informe", "Base tratada", "Segmento territorial", "Análisis por categoría", "Tablero", "Flujo hacia el BI"]
    },
    limits: {
      title: "Lo que conviene saber",
      items: [
        "Cada proyecto pasa por una evaluación de viabilidad y alcance.",
        "No anunciamos plazo fijo ni ejecución ilimitada: el plazo se acuerda por proyecto.",
        "No recolectamos cualquier fuente. El acceso y los derechos se validan antes.",
        "El acceso autorizado a datos de auditorías, ERP, CRM o socios no implica derecho de redistribución."
      ]
    },
    cta: {
      title: "Describe tu proyecto",
      desc: "Cuéntanos el objetivo, el segmento, las fuentes disponibles y el formato deseado.",
      button: "Describir mi proyecto"
    }
  },

  // ── Comparativos ──────────────────────────────────────────────────────────
  compare: {
    meta: {
      title: "Comparativos | Dinn",
      description: "¿Qué capa falta entre tus datos y la decisión? Cómo se relaciona Dinn con auditorías, CRM, BI y lake, recolección e integración, e IA generalista."
    },
    hero: {
      eyebrow: "Comparativos",
      title: "¿Qué capa falta entre tus datos *y la decisión?*",
      lead: "Dinn no sustituye lo que ya usas. Mira el papel de cada enfoque y dónde entra la inteligencia especializada del canal."
    },
    table: {
      columns: ["Enfoque", "Papel", "Cómo se relaciona con Dinn"],
      rows: [
        ["Auditorías de mercado", "Planeación y lecturas de mercado, según el producto contratado.", "Pueden complementar señales granulares. Confirmamos producto y fuente antes de afirmar frecuencia o granularidad."],
        ["CRM y ejecución", "Registro de relación, visitas, pedidos y rutinas.", "Dinn puede aportar contexto al CRM. No escribe en él por sí sola ni lo sustituye."],
        ["BI y lake", "Almacenar, combinar y visualizar información.", "El cliente puede consumir los datos de Dinn en su propio entorno."],
        ["Recolección e integración genéricas", "Obtener y transportar datos de fuentes.", "El diferencial está en la identidad, el contexto farmacéutico, la calidad y el uso recurrente."],
        ["IA generalista", "Interpretar y producir salidas dentro del contexto disponible.", "Datos con permisos y contexto especializado pueden consultarse por interfaces compatibles, como el MCP."]
      ]
    },
    value: {
      title: "El valor no termina en la obtención de los datos",
      text: "Dinn organiza identidades del canal, califica señales y entrega contexto para decisiones recurrentes. Conexión, validación, historial, interpretación y entrega forman parte del mismo camino."
    },
    people: {
      title: "Adaptación a tu segmento, con personas",
      text: "Tu equipo participa en la definición del segmento y de los criterios de evaluación. La implementación acuerda responsables, entregas y seguimiento.",
      items: [
        { title: "Lo que se configura", text: "Segmento de productos, cadenas y regiones, filtros y vistas, y la forma de entrega." },
        { title: "Lo que exige proyecto", text: "Nuevas fuentes, integraciones a la medida y estudios específicos, con alcance definido en contrato." }
      ]
    },
    cta: {
      title: "¿Quieres ver dónde entra Dinn en tu operación?",
      desc: "Validemos productos, cadenas, regiones y la decisión que tu equipo quiere mejorar.",
      button: "Conversa sobre el segmento de tu operación"
    }
  },

  // ── Sobre Dinn ────────────────────────────────────────────────────────────
  about: {
    meta: {
      title: "Sobre Dinn | Inteligencia comercial para el canal farmacéutico",
      description: "Dinn desarrolla inteligencia comercial especializada en el canal farmacéutico, con presencia en Joinville, Brasil, y Valencia, España."
    },
    hero: {
      eyebrow: "Dinn",
      title: "Inteligencia comercial *especializada en el canal farmacéutico*",
      lead: "Dinn desarrolla inteligencia comercial especializada en el canal farmacéutico, con presencia en Joinville, Brasil, y Valencia, España."
    },
    what: {
      title: "Lo que hacemos",
      text: "Organizamos señales de disponibilidad, rotación, precio y cobertura del canal, mostramos el origen, la actualización y los límites de cada información y ayudamos a los equipos comerciales a decidir dónde actuar primero."
    },
    where: {
      title: "Dónde estamos",
      items: [
        { city: "Joinville", country: "Santa Catarina, Brasil", text: "Sede de Dinn Tecnologia Ltda." },
        { city: "Valencia", country: "España", text: "Presencia del equipo en España." }
      ]
    },
    company: {
      title: "Datos de la empresa",
      rows: [
        ["Razón social", "Dinn Tecnologia Ltda."],
        ["CNPJ", "57.639.944/0001-20"],
        ["Dirección", "Rua Dona Francisca, 8300, Bloco Ágora, sala 5, Distrito Industrial, Joinville, SC, CEP 89.219-600"]
      ]
    },
    contact: {
      title: "Habla con Dinn",
      items: [
        { title: "Contacto comercial", text: "Cuéntanos la decisión que quieres mejorar y recibe la respuesta de una persona del equipo.", href: "/contato", cta: "Hablar con Dinn" },
        { title: "Soporte", text: "Orientaciones para registrar un problema y activar el canal contratado.", href: "/suporte", cta: "Abrir el soporte" },
        { title: "Privacidad y términos", text: "Cómo tratamos los datos personales y las condiciones de uso.", href: "/politicas-de-privacidade", cta: "Leer la política" }
      ]
    },
    trust: {
      title: "Cómo tratamos origen, fecha y límites",
      text: "Cada señal dice de dónde vino, cuándo se observó y hasta dónde llega. Eso es lo que permite actuar sin ser inducido al error.",
      cta: "Ver confianza y controles"
    }
  },

  // ── Clientes ──────────────────────────────────────────────────────────────
  clients: {
    meta: {
      title: "Clientes y casos | Dinn",
      description: "Empresas que trabajan con Dinn e historias de uso de la señal a la acción, con contexto, validación y aprendizaje."
    },
    hero: {
      eyebrow: "Clientes",
      title: "Quién trabaja con *Dinn*, y qué hizo con ello",
      lead: "Empresas del sector farmacéutico e historias de uso, contadas de la señal al aprendizaje."
    },
    logos: {
      title: "Empresas que trabajan con Dinn"
    },
    cases: {
      title: "Historias de uso",
      intro: "Cada caso cuenta la situación, la señal, cómo se validó, la decisión y el aprendizaje.",
      all: "Ver todos los casos"
    },
    voices: { title: "Lo que dicen quienes lo usan" }
  },

  // ── Contacto: perfil del pedido (qué quiere contratar la persona) ─────────
  contactMore: {
    interest: {
      label: "¿Qué quieres hacer?",
      options: [
        { value: "conhecer", label: "Conocer Dinn", hint: "Ver la plataforma con mi portafolio" },
        { value: "plano", label: "Contratar un plan", hint: "Starter, Essential o Professional" },
        { value: "funcionalidade", label: "Usar funcionalidades", hint: "Tiempo real, historial, alertas…" },
        { value: "integracao", label: "Datos en mi entorno", hint: "API, archivos, BI o Dinn Conecta" },
        { value: "pesquisa", label: "Encargar investigación", hint: "Estudio o proyecto especial" }
      ]
    },
    plan: {
      label: "¿Qué plan se parece más?",
      options: [
        { value: "starter", label: "Starter" },
        { value: "essential", label: "Essential" },
        { value: "professional", label: "Professional" },
        { value: "nao_sei", label: "Todavía no sé" }
      ]
    },
    features: {
      label: "¿Qué funcionalidades te interesan?",
      hint: "Marca las que quieras.",
      options: [
        { value: "tempo_real", label: "Inventario en tiempo real" },
        { value: "estimado", label: "Inventario estimado" },
        { value: "historico", label: "Historial y vistas guardadas" },
        { value: "giro_preco", label: "Rotación, precio y competencia" },
        { value: "distribuicao", label: "Distribución" },
        { value: "insights", label: "Insights" },
        { value: "alertas", label: "Alertas y rutinas" },
        { value: "exportacoes", label: "Exportaciones, API y MCP" }
      ]
    },
    context: {
      label: "¿Quieres contar más?",
      optional: "(opcional)",
      placeholder: "Productos, cadenas, países o lo que ya intentaste."
    },
    requiredInterest: "Elige una opción.",
    doneBy: {
      conhecer: "Vamos a preparar una conversación corta con tu portafolio y tus regiones.",
      plano: "Vamos a armar la propuesta a partir del alcance validado, con el comparativo del plan que indicaste.",
      funcionalidade: "Vamos a mostrar las funcionalidades que marcaste, ya con tu alcance.",
      integracao: "Vamos a entender origen, destino y frecuencia de los datos antes de proponer el camino de entrega.",
      pesquisa: "Vamos a evaluar la viabilidad y el alcance del estudio antes de acordar método, entrega y plazo."
    },
    tierCta: "Hablar sobre este plan"
  },

  // ── Sobre Dinn: bloques gráficos ──────────────────────────────────────────
  aboutMore: {
    map: { aria: "Enlace entre Joinville, en Brasil, y Valencia, en España.", brazil: "Brasil", spain: "España", label: "Dos ciudades, un solo equipo" },
    how: {
      title: "Cómo trabaja Dinn",
      intro: "De la señal suelta a la acción registrada, siempre con origen, fecha y límite."
    },
    stats: {
      title: "Dinn en pocos datos",
      items: [
        { value: 2, suffix: "", label: "ciudades: Joinville y Valencia" },
        { value: 6, suffix: "", label: "áreas atendidas, de Trade a atención a clientes" },
        { value: 3, suffix: "", label: "idiomas del sitio: portugués, inglés y español" },
        { value: 30, suffix: " días", label: "para implementar, después de acordar el alcance" }
      ]
    },
    principles: {
      title: "Cómo trabajamos",
      intro: "Cuatro compromisos que aparecen en cada página y en cada conversación.",
      items: [
        { title: "Origen, fecha y límite", text: "Cada número dice de dónde vino, cuándo se observó y hasta dónde vale." },
        { title: "La decisión es del equipo", text: "Dinn prepara la lectura y sugiere el siguiente paso. Tu equipo decide y ejecuta." },
        { title: "Derechos de uso respetados", text: "Las fuentes de terceros entran con licencia, autorización y alcance acordados." },
        { title: "Empezar pequeño, con plazo", text: "Un objetivo, un alcance y la implementación en hasta 30 días después de acordar el alcance." }
      ]
    },
    trustBand: { chips: ["Origen", "Fecha", "Límite"] }
  },

  // ── Confianza: bloques nuevos ─────────────────────────────────────────────
  trustMore: {
    accuracy: {
      title: "Calidad y exactitud",
      text: "La calidad se da seguimiento por tipo de dato y segmento. Antes de la evaluación, presentamos metodología, cobertura y resultados de validación aplicables a tu caso.",
      kindsTitle: "Medimos cada cosa por separado",
      kinds: ["Disponibilidad", "Cantidad", "Precio", "Estimación de venta"],
      note: "Una tasa solo se presenta con la definición del acierto, el método, la muestra, la ventana, el universo y la fuente de verdad."
    },
    seals: {
      title: "Sellos, homologaciones y certificaciones",
      text: "Mostramos lo que se puede comprobar: controles verificables y disponibilidad para evaluación. Los sellos y certificados solo aparecen con el documento, la entidad, el alcance y la vigencia.",
      rows: [
        { label: "Logos de clientes", text: "Muestran relaciones autorizadas. No son certificaciones." },
        { label: "Homologación del cliente", text: "Resultado del proceso de TI y compliance de tu empresa, conducido junto con Dinn." },
        { label: "Certificación independiente", text: "Solo se presenta con el documento, la entidad, el alcance y la vigencia." }
      ]
    },
    docs: {
      title: "Documentación técnica bajo solicitud",
      text: "TI, seguridad y compras reciben el material técnico en el proceso de evaluación. Los documentos sensibles se entregan bajo solicitud.",
      items: ["Autenticación y permisos", "Aislamiento entre clientes", "Alojamiento", "Retención de datos", "Proveedores y subprocesadores aplicables", "Gestión de incidentes", "Condiciones de integración"],
      cta: "Solicitar la documentación"
    }
  }
};
