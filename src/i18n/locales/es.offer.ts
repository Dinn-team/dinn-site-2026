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
    platformOverview: "Visión general",
    features: "Funcionalidades",
    locator: "Localizador de inventario",
    conecta: "Dinn Conecta",
    integrations: "Integraciones",
    coverage: "Cobertura",
    platformAll: "Ver todo",
    solutionsAll: "Ver todo",
    compare: "Comparativos",
    plans: "Planes",
    plansOverview: "Planes",
    plansAll: "Comparar los planes",
    research: "Investigaciones",
    company: "Dinn",
    about: "Sobre Dinn",
    trust: "Confianza",
    contact: "Contacto",
    companyAll: "Conocer Dinn"
  },

  // ── Entradas por objetivo, área y funcionalidad ───────────────────────────
  solutionsHub: {
    meta: {
      title: "Soluciones | Dinn",
      description: "Empieza por tu objetivo, área o funcionalidad. Cada entrada abre la página que responde a tu pregunta."
    },
    hero: {
      eyebrow: "Soluciones",
      title: "Empieza por la *pregunta de tu equipo*",
      lead: "Elige por objetivo, área o funcionalidad. Nombres distintos pueden llevar a la misma respuesta."
    },
    goals: {
      title: "Por objetivo",
      intro: "Lo que tu equipo quiere resolver ahora.",
      open: "Abrir",
      items: [
        { label: "Reducir el desabasto y priorizar verificaciones", text: "Mira dónde puede estar faltando el producto y qué tiendas verificar primero.", href: "/solucoes/trade-kam-campo" },
        { label: "Verificar la disponibilidad ahora", text: "Consulta una tienda cuando necesites orientar a alguien. Mira la hora de la respuesta.", href: "/produtos/localizador" },
        { label: "Priorizar cuentas y tiendas de la cartera", text: "Una fila con la señal, la fecha y la pregunta para cada tienda.", href: "/solucoes/trade-kam-campo" },
        { label: "Investigar el abasto y la distribución", text: "Compara el CEDIS y las farmacias de la región para encontrar la restricción.", href: "/solucoes/supply-distribuicao" },
        { label: "Entender rotación, precio y competencia", text: "Compara tu producto y la categoría en las mismas tiendas, con el origen de cada lectura.", href: "/solucoes/inteligencia-pricing" },
        { label: "Seguir un lanzamiento", text: "Presencia por cadena y región, semana a semana, frente al plan de tu equipo.", href: "/solucoes/marketing-lancamentos" },
        { label: "Orientar al consumidor en Atención a clientes", text: "Disponibilidad y cercanía en una pantalla, con la fuente y la fecha de cada indicación.", href: "/solucoes/sac-customer-experience" },
        { label: "Llevar los datos a mi BI o a mi IA", text: "Datos de farma preparados y al día en el entorno que usa tu equipo.", href: "/produtos/conecta" }
      ]
    },
    areas: {
      title: "Por área",
      intro: "Cada área hace una pregunta distinta. Elige la tuya."
    },
    features: {
      title: "Por funcionalidad",
      intro: "Úsalo cuando sabes lo que necesitas.",
      items: [
        { label: "Quiebre", text: "Ve dónde falta producto y qué tiendas verificar primero.", href: "/funcionalidades/ruptura" },
        { label: "Rotación", text: "Ve qué tan rápido se vende y dónde el inventario no se mueve.", href: "/funcionalidades/giro" },
        { label: "Precio", text: "Ve el precio observado en cada tienda y cadena.", href: "/funcionalidades/preco" },
        { label: "Localizador de Productos", text: "Encuentra las tiendas que tienen tu producto. Dato diario o en vivo.", href: "/funcionalidades/localizador" },
        { label: "Mercado", text: "Lee competencia y cobertura por región y cadena.", href: "/funcionalidades/mercado" },
        { label: "Oportunidades", text: "Ve dónde actuar primero. Cada una muestra fuente y límites.", href: "/funcionalidades/oportunidades" },
        { label: "Distribución", text: "Cruza el stock del distribuidor con la disponibilidad en las tiendas.", href: "/funcionalidades/distribuicao" },
        { label: "Jean", text: "Delega seguimientos. Jean prepara el trabajo y te llama cuando necesitas decidir.", href: "/funcionalidades/jean" },
        { label: "Dinn Conecta", text: "Lleva los datos de Dinn a tu BI, a tu IA y a tus integraciones.", href: "/produtos/conecta" }
      ]
    },
    more: "¿No encontraste tu caso?",
    moreCta: "Cuéntanos qué decisión mejorar"
  },

  // ── Escena de inventario en tiempo real (home y página del Localizador) ───
  realtime: {
    eyebrow: "Inventario en tiempo real",
    title: "¿Necesitas verificar ahora? *Consulta el inventario en tiempo real.*",
    text: "En el Localizador, consulta la disponibilidad que informan en ese momento las tiendas compatibles. Mira el horario de la consulta. Tiempo real, D-1 e inventario estimado son lecturas distintas.",
    condition: "Disponible según cadena, fuente y alcance contratado. La información puede cambiar después de la consulta.",
    sim: "Simulación · valores de ejemplo",
    mapAria: "Mapa del Localizador con farmacias cercanas a la dirección del consumidor, coloreadas por nivel de inventario.",
    stepsLabel: "De la búsqueda a la orientación",
    steps: [
      { title: "Localizar", text: "Indica la dirección o el área y el radio. Las farmacias cercanas se muestran en el mapa." },
      { title: "Elegir la tienda", text: "Abre una tienda. La lectura base es de ayer. Solo las tiendas compatibles tienen la consulta." },
      { title: "Consultar ahora", text: "Dinn le pregunta a la fuente de la tienda en ese momento." },
      { title: "Respuesta y horario", text: "La respuesta muestra el horario de la consulta, separada de la lectura de ayer." },
      { title: "Orientar", text: "Orienta al consumidor con lo que la tienda informó y cuándo. Comparte la dirección." }
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
    orient: "Orientación al consumidor: “La tienda informó ahora. El inventario puede cambiar. Confirma antes de ir.”",
    link: "Entender las tres lecturas",
    hint: "Haz clic en una tienda del mapa, desplázate por la página o espera. La escena sigue sola."
  },

  // ── Página del Localizador ────────────────────────────────────────────────
  locator: {
    meta: {
      title: "Localizador e inventario en tiempo real | Dinn",
      description: "Consulta la disponibilidad que informan en ese momento las tiendas compatibles. Tiempo real, D-1 e inventario estimado son lecturas distintas."
    },
    hero: {
      eyebrow: "Dinn Localizador",
      title: "¿Necesitas verificar ahora? *Consulta el inventario en tiempo real.*",
      lead: "En el Localizador, consulta la disponibilidad que informan en ese momento las tiendas compatibles. Mira la hora de la consulta. Tiempo real, D-1 e inventario estimado son lecturas distintas."
    },
    scene: { title: "De la búsqueda a la orientación, en cinco pasos" },
    readings: {
      title: "Tres lecturas, tres usos",
      intro: "Una tienda puede mostrar tres lecturas. Dinn siempre dice cuál ves. Cada una responde una pregunta distinta.",
      columns: ["Lectura", "Qué es", "Actualización", "Cuándo usarla"],
      rows: [
        ["Inventario D-1 (observado)", "Lo que la fuente informó el día anterior, por tienda, con la fecha.", "Base diaria, con la fecha de cada lectura.", "Priorizar y dar seguimiento a un segmento."],
        ["Estimado", "Calculado a partir de tiendas comparables y del historial cuando no hay respuesta directa. Siempre muestra un nivel de confianza.", "En la actualización de la base.", "Cubrir una señal directa faltante. Confirma antes de actuar."],
        ["Tiempo real (consulta)", "La respuesta que la tienda informa a la fuente en el momento de la consulta, con la hora.", "En el momento en que consultas, una tienda a la vez.", "Confirmar la disponibilidad antes de orientar a alguien o visitar."]
      ]
    },
    when: {
      title: "Cuándo consultar ahora",
      items: [
        { title: "La llamada del consumidor", text: "Un paciente pregunta dónde encontrar un medicamento. Consulta la tienda más cercana y responde con lo que acaba de informar. No llames tienda por tienda." },
        { title: "La visita de esta tarde", text: "Antes de hablar con la cadena, mira lo que la tienda informa ahora. Lleva a la conversación el dato de hoy, no el de ayer." },
        { title: "Después de la reposición", text: "¿La cadena acordó una entrega? Consulta la misma tienda otra vez. Mira si el producto aparece en la respuesta." }
      ]
    },
    conditions: {
      title: "Qué debe estar listo",
      items: [
        { title: "Cadena y fuente compatibles", text: "La tienda debe poder responder la pregunta. La lista de cadenas y fuentes elegibles viene de la cobertura validada." },
        { title: "Alcance contratado", text: "El inventario en tiempo real es un complemento del plan. Consulta Planes para ver condiciones y límites." },
        { title: "Una consulta, una respuesta", text: "La respuesta es válida para ese horario. No actualiza toda la base." }
      ],
      coverageLink: "Ver la cobertura",
      plansLink: "Ver planes y complementos"
    },
    faq: {
      title: "Preguntas sobre inventario en tiempo real",
      items: [
        { question: "¿Tiempo real muestra todas las tiendas, siempre actualizadas?", answer: "No. Es una consulta bajo demanda. Eliges una tienda compatible y Dinn le pregunta a la fuente en ese momento. La lectura de base sigue en D-1." },
        { question: "¿La respuesta garantiza que el producto está ahí?", answer: "No. Es lo que la fuente informó a esa hora. El inventario puede cambiar después. Díselo al consumidor." },
        { question: "¿Todas las cadenas tienen consulta en tiempo real?", answer: "No. Depende de la cadena, la fuente y el alcance contratado. Validamos el segmento contigo antes de comenzar." },
        { question: "¿Cuál es la diferencia con el inventario estimado?", answer: "El estimado se calcula por tiendas comparables cuando no hay respuesta directa. La consulta en tiempo real es la respuesta de la propia tienda, con la hora." }
      ]
    },
    cta: {
      title: "¿Quieres ver la consulta con tu cadena y producto?",
      desc: "Validamos productos, cadenas, regiones y la decisión que tu equipo quiere mejorar.",
      button: "Habla de tu segmento"
    }
  },

  // ── Funcionalidades ───────────────────────────────────────────────────────
  jean: {
    meta: {
      title: "Jean | Dinn",
      description: "Jean es la asistente de Dinn. Sigue tu trabajo, prepara el próximo paso y te llama cuando necesitas decidir."
    },
    hero: {
      title: "Jean, la asistente de tu trabajo",
      lead: "Dile a Jean lo que quieres seguir. Usa los datos de Dinn y las herramientas que autorices. Prepara el trabajo y te llama cuando necesitas decidir."
    },
    ask: {
      title: "Delega como le pedirías a alguien del equipo",
      quote: "Jean, sigue la disponibilidad de estos productos en las cadenas que gestiono. Antes de mis reuniones, prepara los puntos importantes y llámame por WhatsApp cuando necesite decidir algo.",
      note: "Jean confirma el objetivo, el segmento y los permisos antes de empezar. Solo pregunta lo que falta."
    },
    ways: {
      title: "Tres formas de delegar",
      items: [
        {
          name: "Un pedido puntual",
          example: "“Prepara mi reunión con esta cadena mañana.”"
        },
        {
          name: "Una rutina",
          example: "“Cada lunes, revisa la disponibilidad de estos productos y prepara un resumen.”"
        },
        {
          name: "Una responsabilidad continua",
          example: "“Sigue esta pendiente y búscame si llega una respuesta o si el plazo está cerca.”"
        }
      ]
    },
    how: {
      title: "Cómo trabaja Jean",
      lead: "Desplázate por la página. Cada paso muestra la pantalla en el punto correcto.",
      steps: [
        {
          label: "Conecta y explica",
          text: "Conecta correo, calendario y Dinn. Di lo que quieres seguir."
        },
        {
          label: "Confirma el acuerdo",
          text: "Jean confirma objetivo, productos, cadenas, fuentes, canal y acciones autorizadas."
        },
        {
          label: "Jean sigue",
          text: "Lee los datos, los mensajes y las reuniones que autorizaste."
        },
        {
          label: "Jean prepara el próximo paso",
          text: "Ve lo que cambió y prepara un resumen, un borrador o un análisis."
        },
        {
          label: "Jean te llama",
          text: "Cuando necesita una decisión, te llama en el portal o por WhatsApp, con el contexto."
        },
        {
          label: "Jean registra y sigue",
          text: "Registra el resultado y sigue el seguimiento. No repite lo que ya hizo."
        }
      ]
    },
    activities: {
      title: "Actividades: el trabajo de Jean en un lugar",
      lead: "Cada ítem muestra el objetivo, lo que hizo Jean, las fuentes, el resultado y el próximo paso.",
      items: [
        "¿Qué necesita de mí?",
        "¿Qué está siguiendo Jean?",
        "¿Qué ya se entregó?"
      ]
    },
    settings: {
      title: "Controlas a Jean en la configuración",
      lead: "Conecta las herramientas, elige los canales y define hasta dónde puede actuar Jean. Puedes revocar un acceso en cualquier momento.",
      items: [
        {
          title: "Conexiones",
          text: "Gmail, Outlook, Google Calendar, calendario Microsoft y Dinn. Ves la cuenta conectada y los accesos concedidos."
        },
        {
          title: "Canales",
          text: "Conversa en el portal o por WhatsApp, con el número de Jean. Jean no lee tus otras conversaciones."
        },
        {
          title: "Autonomía",
          text: "Para cada tipo de acción, define lo que Jean hace sola y lo que te pide aprobar."
        },
        {
          title: "Atención",
          text: "Elige horario, canal y frecuencia. Di “avísame solo si empeora” y Jean ajusta el seguimiento."
        }
      ]
    },
    whatsapp: {
      title: "Sigue por WhatsApp",
      lead: "Jean envía el trabajo listo y espera tu respuesta. La misma tarea sigue en el portal, con el mismo historial.",
      note: "Un “sí” por WhatsApp aprueba solo el pedido de ese mensaje."
    },
    autonomy: {
      title: "Hasta dónde puede ir Jean",
      cols: [
        "Acción",
        "Lo que hace Jean"
      ],
      rows: [
        [
          "Consultar fuentes autorizadas y analizar",
          "Trabaja dentro del objetivo acordado."
        ],
        [
          "Preparar resumen, informe, borrador o sugerencia",
          "Deja el trabajo listo para que lo revises."
        ],
        [
          "Enviar correo o crear y cambiar una reunión",
          "Pide aprobación, salvo con autorización previa para esa rutina y acción."
        ],
        [
          "Asumir un compromiso comercial o actuar fuera del acuerdo",
          "Te envía la decisión."
        ]
      ]
    },
    limits: {
      title: "Límites de Jean",
      items: [
        "Jean muestra la fecha de los datos. Una base D-1 no es monitoreo en tiempo real.",
        "Jean separa hecho de hipótesis y dice cuando falta información.",
        "Sin dato no significa que el problema se resolvió.",
        "Jean usa solo las métricas de tu plan. Si falta una funcionalidad, dice cuál.",
        "Conectar el correo no libera indicadores fuera del plan. Contratar Dinn no libera tu bandeja de entrada.",
        "Las instrucciones dentro de correos o documentos no cambian los permisos de Jean.",
        "El contenido personal conectado no es visible para otros usuarios del laboratorio."
      ]
    }
  },

  features: {
    meta: {
      title: "Funcionalidades | Dinn",
      description: "Lo que hace Dinn, del problema a la decisión. Cada funcionalidad muestra problema, entrada, acción, salida, decisión apoyada, actualización, alcance y límites."
    },
    hero: {
      eyebrow: "Funcionalidades",
      title: "Lo que hace Dinn, *del problema a la decisión*",
      lead: "Cada funcionalidad muestra el problema, la entrada, la acción en la interfaz, la salida y la decisión apoyada, con actualización, alcance y límites."
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
    sim: "Ejemplos ilustrativos, con valores de ejemplo. La disponibilidad de funcionalidades sigue el plan contratado.",
    hub: {
      screensTitle: "Cada funcionalidad, en la pantalla de Dinn",
      screensIntro: "Abre una funcionalidad. Ve la pantalla, los pasos y el límite de la lectura.",
      open: "Ver la funcionalidad"
    },
    page: {
      back: "Todas las funcionalidades",
      whereTitle: "Dónde actúa",
      screenLabel: "Pantalla en Dinn",
      teamsLabel: "Equipos que la usan",
      allTeams: "Todos los equipos",
      allTeamsLink: "Ver los equipos",
      howTitle: "Cómo funciona",
      howLead: "Desplázate por la página. Cada paso muestra la pantalla en el punto correcto.",
      otherTitle: "Otras funcionalidades",
      caption: "Datos y nombres ilustrativos.",
      screens: {
        ruptura: "Inicio",
        giro: "Inicio",
        preco: "Inicio",
        localizador: "Localizar Productos",
        mercado: "Mercado",
        oportunidades: "Oportunidades",
        distribuicao: "Distribución",
        jean: "Jean y Actividades",
        conecta: "Exportaciones y Conexiones"
      }
    },
    items: [
      {
        id: "ruptura", name: "Quiebre", kind: "produto",
        problem: "¿Qué producto falta, y por dónde empiezo a verificar?",
        input: "SKU, cadena y región.",
        action: "Selecciona el segmento. Dinn muestra el período y el denominador de la lectura y abre las tiendas.",
        output: "Tiendas ordenadas por la proporción de días sin inventario sobre días observados.",
        decision: "Qué tiendas verificar primero.",
        limit: "La ausencia no es un quiebre confirmado. Las tiendas que nunca vendieron el ítem no entran en el cálculo. El inventario estimado aparece con etiqueta y nivel de confianza.",
        href: "/solucoes/trade-kam-campo"
      },
      {
        id: "giro", name: "Rotación", kind: "produto",
        problem: "¿El producto se vende? ¿Dónde no se mueve el inventario?",
        input: "Producto, cadena y ventana de tiempo.",
        action: "Elige la ventana. Dinn muestra la rotación y las tiendas con inventario parado hace 7, 30, 60 o 90 días.",
        output: "Rotación estimada en el segmento y días sin movimiento por tienda.",
        decision: "Dónde investigar una caída de rotación o mover inventario.",
        limit: "El movimiento no es una venta confirmada. La rotación es una estimación. El inventario parado es una alerta para investigar.",
        href: "/solucoes/supply-distribuicao"
      },
      {
        id: "preco", name: "Precio", kind: "produto",
        problem: "¿A qué precio está mi producto en las tiendas?",
        input: "Producto, cadena y región.",
        action: "Elige el producto. Dinn muestra el precio observado en cada tienda y ordena la lista por precio.",
        output: "Precio por tienda y por cadena, con la fecha de la lectura.",
        decision: "En qué cadena o tienda el precio sale del rango.",
        limit: "Es el precio observado en el canal digital de la tienda. Compara solo lo que es comparable.",
        href: "/solucoes/inteligencia-pricing"
      },
      {
        id: "localizador", name: "Localizador de Productos", kind: "produto",
        problem: "¿Dónde encuentra el consumidor el producto cerca?",
        input: "Producto y dirección.",
        action: "Busca las tiendas por distancia. En una tienda compatible, haz clic en “Consultar ahora” para confirmar el inventario.",
        output: "Tiendas cercanas con disponibilidad, distancia y la fecha de la información. En la consulta, la hora de la respuesta.",
        decision: "Qué tienda indicar, y con qué confianza.",
        limit: "La probabilidad de inventario no es garantía. La consulta depende de la cadena, la fuente y el alcance contratado.",
        href: "/produtos/localizador"
      },
      {
        id: "mercado", name: "Mercado", kind: "produto",
        problem: "¿Perdí participación o perdí venta?",
        input: "Canasta de productos, universo de tiendas y ventana.",
        action: "Define la canasta y las tiendas comparables. Compara tu producto con la categoría.",
        output: "Tendencia de tu producto y de la categoría en las mismas tiendas, y dónde solo el competidor tiene inventario.",
        decision: "Dónde recuperar espacio.",
        limit: "La venta es estimada. Los datos de competidores están agregados y respetan los derechos de uso.",
        href: "/solucoes/inteligencia-pricing"
      },
      {
        id: "oportunidades", name: "Oportunidades", kind: "produto",
        problem: "¿En qué territorio crece la categoría mientras pierdo participación?",
        input: "Pregunta, mercado, estado, ciudad o Brick, y período.",
        action: "Elige la pregunta. Dinn colorea el mapa y ordena los territorios por la señal.",
        output: "Territorios con participación, variación de la categoría y tiendas comparables.",
        decision: "Dónde investigar primero, y con qué equipo.",
        limit: "La venta es estimada por el movimiento de inventario. La variación de participación tiene un margen de más o menos 1,3 p.p.",
        href: "/solucoes/inteligencia-pricing"
      },
      {
        id: "distribuicao", name: "Distribución", kind: "produto",
        problem: "¿La falla está en el CEDIS, en la reposición o en la farmacia?",
        input: "CEDIS, tiendas que abastece y producto.",
        action: "Compara el inventario del CEDIS con la disponibilidad en las tiendas, por el vínculo de abasto confirmado.",
        output: "El CEDIS y las tiendas lado a lado, con la cobertura en días.",
        decision: "Dónde revisar pedido, reposición o reubicación.",
        limit: "Cercanía geográfica no es vínculo de abasto. El patrón es una hipótesis. Investiga la causa.",
        href: "/solucoes/supply-distribuicao"
      },
      {
        id: "jean", name: "Jean", kind: "interface",
        problem: "Quiero delegar el seguimiento de mi trabajo.",
        input: "Un pedido en español y las herramientas que conectaste.",
        action: "Pide a Jean. Confirma el acuerdo, sigue los datos y prepara el próximo paso.",
        output: "Resúmenes, borradores y análisis listos para revisar, en el portal o por WhatsApp.",
        decision: "Qué aprobar, ajustar o seguir.",
        limit: "Jean actúa solo dentro del acuerdo y de los permisos. Las acciones externas piden aprobación, salvo con autorización previa.",
        href: "/plataforma"
      },
      {
        id: "conecta", name: "Dinn Conecta", kind: "integracao",
        problem: "Necesito los datos de Dinn en mi BI, en mi IA o en un archivo.",
        input: "Fuentes autorizadas y el destino: archivo, API, BI o la IA de la empresa por MCP.",
        action: "Dinn reúne los datos, estandariza producto, tienda y región y los entrega en el destino elegido.",
        output: "La misma lectura en archivo, API, BI o IA, con origen y fecha.",
        decision: "Dónde tu equipo empieza a usar el dato.",
        limit: "Las fuentes y las integraciones dependen de acceso, licencia y alcance. El MCP es de solo lectura.",
        href: "/produtos/conecta"
      },
      {
        id: "suporte", name: "Soporte", kind: "interface",
        problem: "Necesito ayuda o tengo una duda sobre los datos.",
        input: "Qué está pasando, la tienda o el producto y, si hay, una captura de pantalla.",
        action: "Abres un pedido en la plataforma. Zoe, la asistente de Dinn, consulta los datos de tu empresa y responde al instante.",
        output: "Una respuesta con lo que se revisó. Si hace falta una persona, Zoe envía el pedido al equipo de Dinn.",
        decision: "Cuándo reenviar un archivo, ajustar un registro o esperar la próxima actualización.",
        limit: "Zoe lee los datos, pero no cambia nada. El equipo de Dinn asume lo que exige una persona.",
        href: "/suporte"
      }
    ],
    cta: {
      title: "¿Qué funcionalidad responde a tu pregunta?",
      desc: "Validamos productos, cadenas, regiones y la decisión que tu equipo quiere mejorar.",
      button: "Habla de tu segmento"
    }
  },

  // ── Dinn Conecta (base: previa 08, dinn-data-preview) ─────────────────────
  conecta: {
    meta: {
      title: "Dinn Conecta | Datos de farma en el entorno de tu equipo",
      description: "Dinn conecta datos de mercado, internos y de farmacias. Prepara y actualiza el contexto de farma y lo entrega a tu BI, Copilot y proyectos."
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
      dinn: "Dinn gestiona la conexión.",
      caption: "Fuentes e integraciones según acceso, licencia y alcance."
    },
    problem: {
      label: "Menos trabajo repetido",
      title1: "¿Cada análisis empieza",
      title2: "juntando todo de nuevo?",
      text: "Los datos ya existen. El trabajo es hacer que una fuente coincida con otra.",
      items: [
        { n: "01 / Reunir", title: "Archivos dispersos.", text: "Mercado en una base. Ventas en el ERP. Disponibilidad en otra fuente." },
        { n: "02 / Revisar", title: "Alcances distintos.", text: "Los nombres de producto, cadena y período deben coincidir." },
        { n: "03 / Mantener", title: "Todo cambia otra vez.", text: "Llega la próxima actualización. Alguien debe mantener ese camino." }
      ],
      bottom: "Dinn prepara y mantiene los datos. Tu equipo los usa."
    },
    context: {
      label: "Contexto para IA",
      title1: "En la era de la IA,",
      title2: "el contexto importa.",
      text: "Tu equipo debe conectar las bases internas y dar esos datos a los agentes de la empresa. Ese proyecto sigue siendo tuyo. Dinn organiza, depura y estandariza el camino con conocimiento de farma.",
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
          text: "Compara la venta interna con la disponibilidad en las farmacias. Prioriza cadenas y regiones para hablar del abastecimiento.",
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
          text: "Compara el plan de lanzamiento con las señales en las farmacias. Lleva al campo una lista de verificaciones.",
          flow: ["Plan de lanzamiento", "Tiendas por verificar"],
          sheet: "Seguimiento del lanzamiento",
          meta: ["Producto A", "Tiendas previstas en el plan"],
          rows: [["Cadena A", "Señal encontrada", "ok"], ["Cadena B", "Verificar con el campo", "mark"], ["Cadena C", "Esperando actualización", "wait"]],
          next: "Verifica las tiendas de la Cadena B antes de revisar el plan.",
          source: "Plan de lanzamiento + disponibilidad Dinn. La ausencia de señal no prueba desabasto."
        },
        {
          id: "copilot", tab: "Copilot", area: "Datos e IA", kind: "ask",
          title: "¿Tu Copilot puede usar los datos de farma?",
          text: "Lleva el contexto interno, de mercado y de farmacias a la IA de la empresa, con fuente, actualización y límites claros.",
          flow: ["Datos del negocio", "Contexto para la IA"],
          question: "¿Dónde investigamos la caída del Producto A?",
          answer: "Empieza por la región Sur. Compara la venta interna con las tiendas señaladas. Revisa el historial de pedidos.",
          source: "La respuesta ayuda a investigar. No presupone la causa."
        }
      ]
    },
    team: {
      label: "Junto con tu equipo",
      title1: "El proyecto es tuyo.",
      title2: "La operación de los datos\npuede quedar con Dinn.",
      text: "De la implementación al seguimiento.\nTu equipo y tus herramientas se quedan.",
      yours: { label: "Tu equipo", title: "Prioridades, herramientas y accesos.", text: "Decide qué responder y cómo usar los datos." },
      dinn: { label: "Dinn Conecta", title: "Fuentes, calidad y actualización.", text: "Prepara los datos y gestiona las conexiones en el alcance acordado." }
    },
    faq: {
      label: "Antes de empezar",
      title: "Algunas respuestas.",
      items: [
        { question: "¿Podemos usar nuestras licencias de IQVIA y Close-Up?", answer: "El uso depende de los permisos del proveedor y del acceso que autoriza tu empresa. Dinn no reemplaza la licencia. Validamos fuentes y derechos antes de definir la integración." },
        { question: "¿Funciona con nuestro BI, data lake o Copilot?", answer: "Dinn trabaja con el entorno que tienen. Definimos el camino de entrega con tu equipo técnico, según seguridad, herramientas y viabilidad." },
        { question: "¿Dinn también implementa la solución?", answer: "Sí. La oferta puede combinar implementación y operación continua. Empezamos por un flujo, con alcance y responsabilidades claros." }
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
      description: "API, archivos, BI, lake e IA del cliente: usa los datos de Dinn en el entorno de tu equipo, con alcance, responsabilidades y límites claros."
    },
    hero: {
      eyebrow: "Integraciones y API",
      title: "Los datos de Dinn en el entorno que *usa tu equipo.*",
      lead: "Tu equipo puede usar la inteligencia en la plataforma o evaluar una entrega de datos a sus sistemas internos. Con fuentes autorizadas y alcance definido, Dinn prepara datos de producto, tienda, cadena, región y período para tus análisis y rutinas."
    },
    flow: {
      title: "De la señal al tablero en tu BI",
      steps: [
        { title: "Señal Dinn + base interna autorizada", text: "Disponibilidad, rotación y precio del canal, con los datos de la empresa que autorices." },
        { title: "Identificación y estandarización", text: "Producto, tienda, cadena y región con la misma clave." },
        { title: "Entrega acordada", text: "API, archivo o tabla en el destino acordado, con la frecuencia definida." },
        { title: "Tablero en el BI del cliente", text: "Tu equipo arma y mantiene la vista que necesita." }
      ],
      dinn: { title: "Dinn entrega", items: ["Los datos identificados y estandarizados", "La entrega en el formato, destino y frecuencia acordados", "La documentación y el seguimiento en el alcance"] },
      client: { title: "El cliente configura", items: ["El destino y los accesos en tu entorno", "El modelo y el tablero en el BI", "La gobernanza de los datos internos"] },
      caution: "El ejemplo no presupone un conector nativo para tu herramienta. Definimos el camino de entrega con tu equipo técnico."
    },
    modalities: {
      title: "Cinco formas de consumir",
      intro: "Elige según la decisión que quieres apoyar, no según el nombre de la tecnología.",
      knowLabel: "Qué saber",
      items: [
        {
          id: "api", name: "API",
          text: "Consume datos en sistemas internos, con autenticación, alcance y límites definidos.",
          know: ["Qué datos y campos, con filtros y granularidad", "Actualización, autenticación y permisos", "Límites de uso, versionado y manejo de fallas", "Ejemplo de respuesta y documentación"]
        },
        {
          id: "arquivos", name: "Archivos gobernados",
          text: "Recibe archivos en el formato, destino y frecuencia acordados.",
          know: ["Formatos, frecuencia y destino autorizado", "Actualización incremental o completa, y el historial", "Seguridad y responsabilidades de cada lado", "El alcance define el mecanismo de entrega"]
        },
        {
          id: "bi", name: "BI, lake o warehouse",
          text: "Recibe los datos en el entorno analítico de tu empresa.",
          know: ["Cómo recibir y relacionar los datos", "Claves de producto, PDV y cadena", "Modelo de ejemplo", "Quién construye y mantiene el tablero"]
        },
        {
          id: "mcp", name: "MCP",
          text: "Deja que una IA autorizada consulte los datos de Dinn, solo lectura.",
          know: ["Consulta por IA autorizada, con acceso de solo lectura", "Los permisos se mantienen", "Indicamos los entornos y modos probados", "Protocolo no equivale a homologación de cada herramienta"]
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
      title: "Cómo se contrata cada modo",
      text: "Una interfaz técnica, un acceso contratado y el catálogo estándar son distintos. En cada conversación indicamos cuál aplica a tu necesidad.",
      plansLink: "Ver planes y complementos"
    },
    questions: {
      title: "Cuatro preguntas para empezar",
      items: [
        { label: "Origen", text: "¿De dónde vienen los datos que quieres combinar?" },
        { label: "Destino", text: "¿Dónde los va a usar tu equipo: BI, lake, sistema interno o IA?" },
        { label: "Frecuencia", text: "¿Con qué frecuencia debe llegar la información?" },
        { label: "Decisión", text: "¿Qué decisión apoyará esto?" }
      ]
    },
    faq: {
      title: "Preguntas sobre integración",
      items: [
        { question: "¿Dinn se integra con cualquier sistema?", answer: "No prometemos “cualquier sistema”. Definimos con tu equipo técnico el camino de entrega posible, según seguridad, herramientas y viabilidad." },
        { question: "¿Necesito TI para empezar?", answer: "La lectura en la plataforma no exige integración. Para API, archivos o BI, tu equipo técnico define el destino y los accesos. Dinn apoya dentro del alcance." },
        { question: "¿La integración es inmediata?", answer: "No. Depende del alcance y de los prerrequisitos. La implementación toma hasta 30 días después de acordar prerrequisitos y alcance." }
      ]
    },
    cta: {
      title: "Cuéntanos tu flujo de datos",
      desc: "Danos la fuente, el destino, la frecuencia y la decisión que apoya. Evaluamos el camino de entrega.",
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
      title: "Elige el alcance *para tu operación.*",
      lead: "Compara las formas de contratar Dinn y los recursos para tu operación. La propuesta considera productos, cobertura, usuarios y necesidades de integración."
    },
    tiers: [
      { name: "Starter", text: "Empezar con un segmento concentrado." },
      { name: "Essential", text: "Amplía el seguimiento de productos y cadenas." },
      { name: "Professional", text: "Atender una operación mayor, con más historial y consumo de datos." }
    ],
    compare: {
      title: "Compara los planes",
      intro: "La base es la misma lectura diaria. Cambian el tamaño del segmento, el historial y lo incluido.",
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
      note: "Sin precios públicos. La propuesta considera productos, cobertura, usuarios y necesidades de integración."
    },
    grid: { label: "Planes", fromPrev: "Todo en {prev}, más", first: "Incluye", price: "Por propuesta", priceNote: "Sin precio público", minimum: "Compromiso mínimo" },
    build: {
      title: "Arme el alcance de su plan",
      step: "Elija los recursos que necesita",
      empty: "Seleccione un recurso para ver el plan sugerido.",
      recommended: "Plan sugerido",
      none: "Ningún plan incluye todos los elementos sin consulta. Hable con Dinn.",
      cta: "Pedir propuesta"
    },
    addons: {
      title: "Complementos e inclusiones",
      intro: "Lo que puede formar parte del plan, y qué plan lo incluye.",
      columns: ["Recurso", "Starter", "Essential", "Professional"],
      labels: { i: "Incluido", c: "Complemento", a: "Bajo consulta" },
      legend: "Complemento es una contratación adicional. Bajo consulta significa que evaluamos las condiciones contigo. No significa que el recurso sea imposible.",
      rows: [
        { name: "Inteligencia competitiva", text: "Compara una canasta de productos y cadenas, con universo y método definidos.", tiers: ["a", "c", "c"] },
        { name: "Forecast con IA", text: "Explora proyecciones y escenarios con supuestos, horizonte e incertidumbre explícitos.", tiers: ["a", "c", "c"] },
        { name: "Tableros adicionales o personalizados", text: "Adapta análisis a preguntas específicas, además de los tableros incluidos.", tiers: ["a", "c", "c"] },
        { name: "Inventario en tiempo real", text: "Consulta la disponibilidad actual en las tiendas compatibles. La consulta bajo demanda y la actualización continua tienen condiciones distintas.", tiers: ["a", "c", "c"] },
        { name: "Localizador para Atención a clientes", text: "Localiza tiendas por cercanía y verifica la disponibilidad para orientar al cliente.", tiers: ["a", "c", "c"] },
        { name: "Alertas por reglas y canales", text: "Da seguimiento a señales y excepciones por reglas y canales definidos en el alcance.", tiers: ["a", "c", "c"] },
        { name: "Monitoreo de precios", text: "Compara precios en el segmento contratado, con la fuente y el momento de la lectura.", tiers: ["c", "c", "c"] },
        { name: "Estimación de rotación", text: "Investiga el movimiento estimado. No es venta confirmada.", tiers: ["a", "c", "i"] },
        { name: "Asistente web", text: "Pregunta sobre el segmento contratado. La respuesta muestra la fuente y los límites.", tiers: ["a", "c", "c"] },
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
        { title: "Implementación en hasta 30 días", text: "El conteo empieza después de acordar prerrequisitos y alcance. El plazo total incluye las etapas de compras y homologación de tu empresa." }
      ]
    },
    faq: {
      title: "Preguntas sobre la contratación",
      items: [
        { question: "¿Los precios están en el sitio?", answer: "No. No publicamos precios. Preparamos la propuesta después de validar tu segmento. Considera productos, cobertura, usuarios y necesidades de integración." },
        { question: "¿Puedo empezar por un plan menor y crecer?", answer: "Sí. Puedes contratar usuarios, SKU, cadenas y complementos adicionales a medida que crece la operación." },
        { question: "¿Complemento y servicio son lo mismo?", answer: "No. Un complemento es un recurso que se suma al plan. Un servicio, como implementación, investigación o proyecto de datos, es trabajo contratado bajo alcance." },
        { question: "¿Existe un compromiso mínimo?", answer: "Sí. Varía según el plan, como muestra el comparativo. Los términos finales están en la propuesta." }
      ]
    },
    cta: {
      title: "Define el plan para tu operación",
      desc: "Cuéntanos los productos, las cadenas y la decisión por mejorar. Armamos la propuesta con el segmento validado.",
      button: "Definir el plan para mi operación"
    }
  },

  // ── Cobertura ─────────────────────────────────────────────────────────────
  coverage: {
    meta: {
      title: "Cobertura | Dinn",
      description: "Mira dónde Dinn puede apoyar tu operación: cobertura por país, cadena, producto y tipo de lectura, con actualización y límites."
    },
    hero: {
      eyebrow: "Cobertura",
      title: "Mira dónde Dinn puede *apoyar tu operación.*",
      lead: "Mira la cobertura por país, cadena, producto y tipo de lectura. Antes de empezar, validamos el segmento que necesita tu equipo."
    },
    dims: {
      title: "Cómo describimos la cobertura",
      intro: "Informamos cada dimensión por separado. Así se evita sumar bases superpuestas y confundir un registro con un dato utilizable.",
      items: [
        { title: "País", text: "Países con operación validada, disponibles bajo proyecto y en estudio. No los mezclamos." },
        { title: "Cadenas y marcas", text: "Cadenas monitoreadas. Usamos nombre y logo solo con autorización. Monitoreada no significa socia." },
        { title: "PDV", text: "PDV únicos y universo elegible. Un registro no es un dato utilizable. Contamos las tiendas con lectura." },
        { title: "Producto y categoría", text: "Cobertura por SKU y categoría, con ubicación y período. Incluye farmacias digitalizadas e independientes, cuando aplique." },
        { title: "Naturaleza de la lectura", text: "Observación directa, estimación y tiempo real, en líneas separadas." },
        { title: "Actualización y brechas", text: "Frecuencia, tiendas y fuentes elegibles, brechas conocidas y la fecha de la última revisión." }
      ]
    },
    nature: {
      title: "Observado, estimado y en tiempo real",
      intro: "Una tienda puede tener más de una lectura. Contamos cada una por separado.",
      columns: ["Lectura", "Qué cubre", "Actualización"],
      rows: [
        ["Observado (D-1)", "Lo que la fuente informó el día anterior, por tienda.", "Base diaria, con la fecha de cada lectura."],
        ["Estimado", "Tiendas sin respuesta directa. Usa tiendas comparables y el historial, con nivel de confianza.", "En la actualización de la base."],
        ["Tiempo real", "Tiendas compatibles, por consulta bajo demanda.", "En el momento de la consulta, una tienda a la vez."]
      ]
    },
    status: {
      title: "Dónde actúa Dinn",
      intro: "Los tres grupos son separados. La lista viene del registro de cobertura, con la fecha de la última revisión.",
      reviewed: "Última revisión",
      empty: "Mostramos la lista actual cuando validamos tu segmento.",
      groups: [
        { key: "validated", title: "Operación validada", text: "Países y cadenas con lectura en uso." },
        { key: "project", title: "Disponible bajo proyecto", text: "Atendidos bajo proyecto y evaluación de viabilidad." },
        { key: "study", title: "En estudio", text: "Mapeados, aún sin oferta comercial." }
      ]
    },
    validate: {
      title: "Validar mi cobertura",
      text: "Indica el país, los productos y las cadenas o regiones. Te decimos qué cubrimos hoy para ese segmento, por tipo de lectura.",
      items: ["País", "Productos o categorías", "Cadenas o regiones"],
      button: "Validar mi cobertura"
    },
    links: { locator: "Inventario en tiempo real", plans: "Planes y complementos", trust: "Cómo tratamos origen y límites" }
  },

  // ── Investigaciones y proyectos especiales ────────────────────────────────
  research: {
    meta: {
      title: "Investigaciones y proyectos especiales | Dinn",
      description: "Estudios bajo demanda, informes recurrentes, nuevas fuentes y proyectos de preparación e integración de datos, Acordamos método y entrega contigo."
    },
    hero: {
      eyebrow: "Investigaciones y proyectos especiales",
      title: "Una pregunta específica puede necesitar *su propio segmento.*",
      lead: "Evaluamos estudios bajo demanda y proyectos con fuentes adicionales para responder una decisión concreta del canal farmacéutico. El trabajo puede combinar datos de Dinn, fuentes autorizadas e información interna. Acordamos método y entrega contigo."
    },
    cards: {
      title: "Cuatro modos",
      deliverLabel: "Entrega definida en la propuesta",
      items: [
        { tag: "Investigación bajo demanda", title: "Una decisión específica, un estudio con segmento propio.", deliver: "Pregunta, universo, método e informe o base analizada." },
        { tag: "Informes recurrentes", title: "Da seguimiento a la misma pregunta a lo largo del tiempo.", deliver: "Indicadores, frecuencia, responsables y revisión de comparabilidad." },
        { tag: "Fuentes personalizadas", title: "Evalúa nuevas fuentes para tu proyecto.", deliver: "Acceso y derechos, viabilidad, calidad, costo y límites de actualización." },
        { tag: "Preparación e integración", title: "Conecta el segmento al entorno de tu equipo.", deliver: "Fuentes, estandarización, destino, operación y criterio de aceptación, según la propuesta Conecta." }
      ]
    },
    build: {
      title: "Arme su proyecto",
      step: "Elija las entregas que quiere",
      empty: "Seleccione una entrega para ver el resumen del proyecto.",
      summary: "Su proyecto",
      agree: "Acordamos con usted"
    },
    define: {
      title: "Qué acordamos en cada proyecto",
      items: ["La pregunta", "El universo", "Las fuentes", "El método", "La entrega", "El plazo acordado", "El criterio de aceptación"]
    },
    deliveries: {
      title: "Entregas posibles",
      intro: "Sujetas a la viabilidad de cada proyecto.",
      items: ["Informe", "Base tratada", "Segmento territorial", "Análisis por categoría", "Tablero", "Flujo hacia el BI"]
    },
    limits: {
      title: "Qué saber",
      items: [
        "Cada proyecto pasa por una evaluación de viabilidad y alcance.",
        "No anunciamos plazo fijo ni ejecución ilimitada. Acordamos el plazo por proyecto.",
        "No recolectamos de cualquier fuente. Primero validamos el acceso y los derechos.",
        "El acceso autorizado a datos de auditorías, ERP, CRM o socios no da derecho de redistribución."
      ]
    },
    cta: {
      title: "Describe tu proyecto",
      desc: "Cuéntanos el objetivo, el segmento, las fuentes disponibles y el formato que quieres.",
      button: "Describir mi proyecto"
    }
  },

  // ── Comparativos ──────────────────────────────────────────────────────────
  compare: {
    meta: {
      title: "Comparativos | Dinn",
      description: "¿Qué capa falta entre tus datos y la decisión? Mira cómo se relaciona Dinn con auditorías, CRM, BI y lake, recolección e integración, e IA generalista."
    },
    hero: {
      eyebrow: "Comparativos",
      title: "¿Qué capa falta entre tus datos *y la decisión?*",
      lead: "Dinn no sustituye lo que usas ahora. Mira el papel de cada enfoque y dónde encaja la inteligencia especializada del canal."
    },
    table: {
      columns: ["Enfoque", "Papel", "Cómo se relaciona con Dinn"],
      rows: [
        ["Auditorías de mercado", "Planeación y lecturas de mercado, según el producto contratado.", "Pueden complementar señales granulares. Confirmamos producto y fuente antes de indicar frecuencia o granularidad."],
        ["CRM y ejecución", "Registro de relación, visitas, pedidos y rutinas.", "Dinn puede dar contexto al CRM. No escribe en él por sí sola y no lo sustituye."],
        ["BI y lake", "Almacenar, combinar y visualizar información.", "El cliente puede usar los datos de Dinn en su propio entorno."],
        ["Recolección e integración genéricas", "Obtener y transportar datos de fuentes.", "Dinn se diferencia en identidad, contexto farmacéutico, calidad y uso recurrente."],
        ["IA generalista", "Interpretar y producir salidas dentro del contexto disponible.", "Interfaces compatibles, como el MCP, pueden consultar datos con permisos y contexto especializado."]
      ]
    },
    value: {
      title: "El valor no termina en los datos",
      text: "Dinn organiza identidades del canal, califica señales y entrega contexto para decisiones recurrentes. Conexión, validación, historial, interpretación y entrega son un solo camino."
    },
    people: {
      title: "Adaptación a tu segmento, con personas",
      text: "Tu equipo ayuda a definir el segmento y los criterios de evaluación. En la implementación se acuerdan responsables, entregas y seguimiento.",
      items: [
        { title: "Qué configuramos", text: "Segmento de productos, cadenas y regiones, filtros y vistas, y la forma de entrega." },
        { title: "Qué necesita un proyecto", text: "Nuevas fuentes, integraciones a la medida y estudios específicos, con alcance definido en contrato." }
      ]
    },
    cta: {
      title: "¿Quieres ver dónde entra Dinn en tu operación?",
      desc: "Validamos productos, cadenas, regiones y la decisión que tu equipo quiere mejorar.",
      button: "Habla de tu segmento"
    }
  },

  // ── Sobre Dinn ────────────────────────────────────────────────────────────
  about: {
    meta: {
      title: "Sobre Dinn | Inteligencia comercial para el canal farmacéutico",
      description: "Dinn desarrolla inteligencia comercial para el canal farmacéutico, en Joinville, Brasil, y Valencia, España."
    },
    hero: {
      eyebrow: "Dinn",
      title: "Inteligencia comercial *para el canal farmacéutico*",
      lead: "Dinn desarrolla inteligencia comercial para el canal farmacéutico, en Joinville, Brasil, y Valencia, España."
    },
    what: {
      title: "Lo que hacemos",
      text: "Organizamos señales de disponibilidad, rotación, precio y cobertura del canal. Mostramos la fuente, la actualización y los límites de cada dato. Ayudamos a los equipos comerciales a decidir dónde actuar primero."
    },
    where: {
      title: "Dónde estamos",
      items: [
        { city: "Joinville", country: "Santa Catarina, Brasil", text: "Sede de Dinn Tecnologia Ltda." },
        { city: "Valencia", country: "España", text: "Equipo en España." }
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
        { title: "Contacto comercial", text: "Cuéntanos la decisión por mejorar. Una persona del equipo responde.", href: "/contato", cta: "Hablar con Dinn" },
        { title: "Soporte", text: "Cómo registrar un problema y llegar al canal contratado.", href: "/suporte", cta: "Abrir el soporte" },
        { title: "Privacidad y términos", text: "Cómo tratamos los datos personales y las condiciones de uso.", href: "/politicas-de-privacidade", cta: "Leer la política" }
      ]
    },
    trust: {
      title: "Cómo tratamos origen, fecha y límites",
      text: "Cada señal dice de dónde viene, cuándo se observó y hasta dónde llega. Puedes actuar sin que te confunda.",
      cta: "Ver confianza y controles"
    }
  },

  // ── Clientes ──────────────────────────────────────────────────────────────
  clients: {
    meta: {
      title: "Clientes y casos | Dinn",
      description: "Empresas que trabajan con Dinn y historias de uso, de la señal a la acción, con contexto, validación y aprendizaje."
    },
    hero: {
      eyebrow: "Clientes",
      title: "Quién trabaja con *Dinn*, y qué hizo",
      lead: "Empresas del sector farmacéutico e historias de uso, de la señal al aprendizaje."
    },
    logos: {
      title: "Empresas que trabajan con Dinn"
    },
    cases: {
      title: "Historias de uso",
      intro: "Cada caso muestra la situación, la señal, la validación, la decisión y el aprendizaje.",
      all: "Ver todos los casos"
    },
    voices: { title: "Lo que dicen quienes lo usan" },
    page: {
      hero_title: "El impacto de *Dinn* en los equipos de farma",
      hero_lead: "Números sumados de laboratorios que usan Dinn cada día. Los nombres quedan reservados. Cada laboratorio tiene su caso abajo.",
      list_title: "Historias de clientes",
      list_intro: "Cada página muestra el problema, qué cambió y los números.",
      read: "Leer la historia",
      cases_title: "Historias de uso",
      cases_intro: "Casos cortos, de la señal a la acción. Los nombres se mantienen en reserva.",
      back: "Todos los clientes",
      glance: "En resumen",
      company: "Empresa",
      sector: "Sector",
      hq: "Sede",
      usecase: "Caso de uso",
      impact: "Resumen del impacto",
      problem: "El problema",
      solution: "La solución",
      story: "Cómo fue en la práctica",
      results: "Los números",
      more: "Mira otros clientes",
      voice: "Lo que dicen quienes lo usan",
      cta: "Hablar con el equipo Dinn",
      illustrative: "Datos y nombres ilustrativos."
    }
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
      label: "¿Qué plan es el más cercano?",
      options: [
        { value: "starter", label: "Starter" },
        { value: "essential", label: "Essential" },
        { value: "professional", label: "Professional" },
        { value: "nao_sei", label: "Todavía no sé" }
      ]
    },
    features: {
      label: "¿Qué funcionalidades te interesan?",
      hint: "Marca todas las que necesites.",
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
      conhecer: "Preparamos una conversación corta con tu portafolio y tus regiones.",
      plano: "Armamos la propuesta con el alcance validado, con el comparativo del plan que elegiste.",
      funcionalidade: "Mostramos las funcionalidades que marcaste, con tu alcance.",
      integracao: "Conocemos la fuente, el destino y la frecuencia de los datos antes de proponer el camino de entrega.",
      pesquisa: "Evaluamos la viabilidad y el alcance del estudio antes de acordar método, entrega y plazo."
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
    team: {
      title: "Quién hace Dinn",
      intro: "Tres personas lideran la estrategia, el producto y la tecnología de Dinn.",
      items: [
        { id: "edu", name: "Edu Fonseca", role: "CEO · Estrategia y comercial", text: "Define la visión y las prioridades de Dinn. Conduce la estrategia comercial, las ofertas y el crecimiento." },
        { id: "renan", name: "Renan Cavalheiro", role: "Producto y diseño", text: "Conduce el discovery y convierte problemas en decisiones de producto. Responde por la experiencia y el diseño de las interfaces." },
        { id: "vini", name: "Vini Silva", role: "Tecnología y datos", text: "Responde por ingeniería, arquitectura e integraciones. Cuida la calidad y la confiabilidad de los datos." }
      ]
    },
    principles: {
      title: "Cómo trabajamos",
      intro: "Cuatro compromisos en cada página y en cada conversación.",
      items: [
        { title: "Fuente, fecha y límite", text: "Cada número dice de dónde vino, cuándo se observó y hasta dónde vale." },
        { title: "La decisión es del equipo", text: "Dinn prepara la lectura y sugiere el siguiente paso. Tu equipo decide y actúa." },
        { title: "Derechos de uso respetados", text: "Las fuentes de terceros llegan con licencia, autorización y alcance acordados." },
        { title: "Empezar pequeño, con plazo", text: "Un objetivo, un alcance y la implementación en hasta 30 días después de acordar el alcance." }
      ]
    },
    trustBand: { chips: ["Origen", "Fecha", "Límite"] }
  },

  // ── Confianza: bloques nuevos ─────────────────────────────────────────────
  trustMore: {
    accuracy: {
      title: "Calidad y exactitud",
      text: "Damos seguimiento a la calidad por tipo de dato y segmento. Antes de la evaluación, presentamos metodología, cobertura y resultados de validación aplicables a tu caso.",
      kindsTitle: "Medimos cada elemento por separado",
      kinds: ["Disponibilidad", "Cantidad", "Precio", "Estimación de venta"],
      note: "Mostramos una tasa solo con la definición de acierto, método, muestra, ventana, universo y fuente de verdad."
    },
    seals: {
      title: "Sellos, homologaciones y certificaciones",
      text: "Mostramos lo que podemos comprobar: controles verificables y disponibilidad para evaluación. Los sellos y certificados aparecen solo con el documento, la entidad, el alcance y la vigencia.",
      rows: [
        { label: "Logos de clientes", text: "Muestran relaciones autorizadas. No son certificaciones." },
        { label: "Homologación del cliente", text: "Resultado del proceso de TI y compliance de tu empresa, hecho junto con Dinn." },
        { label: "Certificación independiente", text: "Se muestra solo con el documento, la entidad, el alcance y la vigencia." }
      ]
    },
    docs: {
      title: "Documentación técnica bajo solicitud",
      text: "TI, seguridad y compras reciben el material técnico durante la evaluación. Damos los documentos sensibles bajo solicitud.",
      items: ["Autenticación y permisos", "Aislamiento entre clientes", "Alojamiento", "Retención de datos", "Proveedores y subprocesadores aplicables", "Gestión de incidentes", "Condiciones de integración"],
      cta: "Solicitar la documentación"
    }
  }
};
