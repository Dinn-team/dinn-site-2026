export const es419 = {
  nav: {
    home: "Inicio",
    ask: "Dinn Insights",
    teams: "Para cada equipo",
    inside: "Por dentro",
    delivery: "Dónde entrega",
    customers: "Clientes",
    blog: "Blog",
    cta: "Solicitar demo",
    openMenu: "Abrir menú",
    languageLabel: "Idioma",
    language: "Español",
    langShort: "ES"
  },
  hero: {
    pill: "Inteligencia artificial para la industria farmacéutica",
    title: "Dinn, la *IA para el mercado farma*: de la señal a la ejecución comercial",
    description: "La IA que lee inventario, rotación y precio de las farmacias todos los días (D-1) y muestra dónde hay desabasto y dónde actuar primero.",
    cta: "Solicitar demo",
    secondary: "Ver casos de uso por equipo"
  },
  insights: {
    eyebrow: "En todas las capas",
    title: "Dinn Insights: ¿qué quieres saber sobre *desabasto y sell-out*?",
    intro: "La conversación con la IA de Dinn. Pregunta en español y recibe la cifra, el alcance, la fecha y cómo se calculó.",
    layers: [
      { title: "En la plataforma", desc: "Se abre junto a las pantallas de Dinn Manager, ya con el alcance que estás viendo." },
      { title: "En tu IA", desc: "ChatGPT, Claude y Copilot consultan Dinn por MCP, con acceso de solo lectura." },
      { title: "En tu BI y en tus agentes", desc: "Los mismos datos llegan estandarizados por Dinn Conecta." }
    ]
  },
  ask: {
    placeholder: "Pregunta sobre inventario, desabasto, rotación, precio…",
    followPlaceholder: "Haz una pregunta de seguimiento…",
    send: "Enviar pregunta",
    reset: "Nueva conversación",
    disclaimer: "Simulación: el razonamiento es de Dinn; los números son de ejemplo. No se muestra ningún dato real.",
    starters: [
      { team: "Atención a clientes", chip: "Dónde encontrar el producto", q: "¿Dónde encuentra el consumidor mi producto cerca de Guadalajara?" },
      { team: "Campo", chip: "Qué tiendas revisar", q: "¿Qué farmacias de mi cartera en Monterrey reviso primero?" },
      { team: "Distribución", chip: "¿La falla está en el CEDIS?", q: "¿La falla está en el distribuidor o en las farmacias de Ciudad de México?" },
      { team: "Lanzamientos", chip: "¿Llegó mi lanzamiento?", q: "¿Mi lanzamiento ya llegó a las farmacias de Guadalajara?" },
      { team: "Inventario", chip: "Inventario detenido", q: "¿Dónde tengo inventario detenido cerca de tiendas con desabasto?" },
      { team: "Competencia", chip: "Quién ganó espacio", q: "¿Quién ganó participación en Monterrey?" }
    ],
    contextLabel: "Alcance entendido",
    defaultPlace: "Ciudad de México",
    defaultProduct: "tu producto",
    thinking: "Pensando…",
    simulationTag: "Simulación · valores de ejemplo",
    methodTitle: "Cómo llegó Dinn a esto",
    linksTitle: "Sigue leyendo",
    followTitle: "Pregunta también",
    demoCta: "Verlo con tus productos",
    actionWhy: "¿Por qué?",
    actionHow: "Cómo:",
    scenarios: {
      sac: {
        keywords: ["dónde encuentr", "donde encuentr", "dónde hay", "donde hay", "dónde compr", "donde compr", "consumidor", "paciente", "atención a clientes", "atencion a clientes", "localiz", "ubicar", "cerca", "dirección", "direccion", "onde encontr", "onde tem", "onde acha", "onde compr", "sac", "atendimento", "perto", "próxima", "proxima", "encontrar", "endereço"],
        steps: ["Ubicando la dirección…", "Buscando el producto en las farmacias…", "Calculando la cobertura en días…"],
        answer: "Cerca de {lugar}, **3 de las 5 farmacias más cercanas** probablemente tienen {produto} en inventario. La más cercana con inventario confirmado está a 0.8 km.\n\nLa misma búsqueda muestra un patrón: la demanda se repite en una colonia donde dos tiendas llevan una semana sin el producto. Es tema para el resurtido de la ciudad y para la visita médica de la zona.",
        widget: {
          type: "table",
          title: "Farmacias más cercanas · {lugar}",
          columns: [
            { label: "PDV" },
            { label: "Distancia", kind: "num" },
            { label: "Disponibilidad", kind: "avail" },
            { label: "Inventario", kind: "num" },
            { label: "Rotación", kind: "num" },
            { label: "Precio", kind: "num" }
          ],
          rows: [
            ["Farmacia 1 · Cadena A", "0.8 km", "Alta", "12–15 pzas.", "1.4 pzas./día", "$89.90"],
            ["Farmacia 2 · Cadena B", "1.2 km", "Media", "4–6 pzas.", "0.9 pzas./día", "$92.50"],
            ["Farmacia 3 · Cadena A", "1.9 km", "Alta", "9–11 pzas.", "1.1 pzas./día", "$89.90"],
            ["Farmacia 4 · Cadena C", "2.3 km", "Sin stock", "0 pzas.", "—", "—"],
            ["Farmacia 5 · Cadena C", "2.6 km", "Sin stock", "0 pzas.", "—", "—"]
          ]
        },
        method: [
          "Radio de búsqueda desde la dirección indicada, de las tiendas más cercanas a las más lejanas.",
          "Inventario observado en la fuente (D-1) o estimado con tiendas comparables, siempre con su nivel de confianza.",
          "Cobertura en días = inventario ÷ rotación diaria promedio de la tienda.",
          "Para el consumidor, la recomendación sigue disponibilidad y cercanía, no el precio más bajo."
        ],
        links: [
          { label: "El caso completo de atención a clientes", href: "#time-sac" },
          { label: "Cómo sabe Dinn el inventario", href: "#por-dentro" }
        ],
        followups: ["¿Y qué cambia esto para la visita médica?", "¿Qué tiendas de esta zona necesitan resurtido?"]
      },
      campo: {
        keywords: ["visitar", "campo", "ruta", "cartera", "promotor", "territorio", "trade", "kam", "reviso", "revisar", "primero", "priorizar", "prioridad", "agenda", "visita", "rota", "carteira", "consultor", "gdn", "territ", "verificar", "verifico", "prioridade"],
        steps: ["Leyendo tu cartera…", "Analizando la disponibilidad…", "Armando el ranking…", "Listando los PDV…"],
        answer: "De las tiendas de tu cartera en {lugar}, **6 concentran el 70% de la señal de desabasto** de {produto} en la última semana. La lista dice qué revisar en cada una y qué resultado esperar.\n\nDinn prepara la lista; tu equipo arma la agenda.",
        widget: {
          type: "table",
          title: "Fila de revisión · esta semana",
          columns: [
            { label: "PDV" },
            { label: "Nivel", kind: "level" },
            { label: "Desabasto", kind: "num" },
            { label: "Qué revisar" }
          ],
          rows: [
            ["Tienda 01 · Cadena A", "Crítico", "86.7%", "¿Hay pedido o entrega pendiente?"],
            ["Tienda 02 · Cadena A", "Alto", "60%", "¿Está en la tienda, pero fuera del anaquel?"],
            ["Tienda 03 · Cadena B", "Alto", "53%", "¿La tienda volvió a pedir tras el último faltante?"],
            ["Tienda 04 · Cadena C", "Moderado", "33%", "¿Volvió a faltar?"]
          ]
        },
        method: [
          "Desabasto del PDV = días sin inventario ÷ días observados en los últimos 30 días.",
          "Nivel: Crítico ≥ 75% · Alto ≥ 50% · Moderado ≥ 25% · Leve < 25%.",
          "El orden pondera el nivel por la rotación de la tienda cuando tiene inventario.",
          "Las tiendas que nunca vendieron el producto quedan fuera, para no inflar el desabasto."
        ],
        links: [
          { label: "El caso completo de campo", href: "#time-campo" },
          { label: "De dónde viene cada señal", href: "#por-dentro" }
        ],
        followups: ["¿El desabasto está empeorando o mejorando en los últimos 30 días?", "¿El problema es del distribuidor o de las tiendas?"]
      },
      medico: {
        keywords: ["médic", "medic", "visita médica", "visita medica", "prescri", "receta", "consultorio", "representante", "brick", "clínica", "clinica", "doctor", "propagand", "receita", "consultório"],
        steps: ["Ubicando el consultorio…", "Buscando el producto en las farmacias…", "Comparando el desabasto entre zonas…"],
        answer: "Alrededor del consultorio en {lugar}, **7 de 12 farmacias** tienen {produto} hoy. Las 5 sin inventario son de la misma cadena y están del mismo lado de la avenida.\n\nEn la práctica: la receta tiene buena probabilidad de surtirse, pero conviene avisar a trade sobre esa cadena antes de que el paciente regrese sin el producto.",
        widget: {
          type: "kpis",
          title: "Alrededor del consultorio · radio de 1 km",
          items: [
            { label: "Farmacias en el radio", value: "12" },
            { label: "Con inventario", value: "7", tone: "good" },
            { label: "Sin inventario", value: "5", tone: "bad" },
            { label: "Faltante concentrado en", value: "Cadena C" }
          ]
        },
        method: [
          "Radio alrededor de la dirección del consultorio o del brick elegido.",
          "Inventario D-1 por farmacia, observado o estimado.",
          "Concentración = tiendas sin inventario de la misma cadena ÷ total de tiendas sin inventario.",
          "No se escribe nada en el CRM: la lectura sirve para preparar la visita."
        ],
        links: [
          { label: "El caso de la visita médica", href: "#time-medico" }
        ],
        followups: ["¿Dónde encuentra el consumidor el producto cerca de Guadalajara?", "¿Qué tiendas reviso primero?"]
      },
      distribuicao: {
        keywords: ["cedis", "distribuidor", "distribución", "distribucion", "abastec", "resurt", "reposición", "reposicion", "supply", "logística", "logistica", "retraso", "falla", "pedido", "cd", "cds", "distribuição", "distribuicao", "reposição", "reposicao", "repor", "atraso", "furo"],
        steps: ["Leyendo el inventario de los CEDIS…", "Calculando la cobertura en días…", "Cruzando con el desabasto en las farmacias de la zona…", "Comparando con la rotación local…"],
        answer: "En {lugar}, la falla no parece estar en el CEDIS: **el distribuidor tiene inventario para unos 24 días**, pero el 38% de las farmacias que surte no tiene {produto}, y la zona sigue vendiendo donde hay inventario.\n\nEl patrón apunta a una **falla de distribución o de resurtido**, no a un faltante de origen. Antes de concluir, conviene confirmar pedidos pendientes en las cadenas afectadas.",
        widget: {
          type: "table",
          title: "Lectura CEDIS × farmacias por zona",
          columns: [
            { label: "Zona" },
            { label: "Inventario en CEDIS", kind: "num" },
            { label: "Desabasto en farmacias", kind: "num" },
            { label: "Demanda" },
            { label: "Lectura", kind: "verdict" }
          ],
          rows: [
            ["{lugar}", "Alto · 24 días", "38%", "Alta", "Falla de distribución"],
            ["Zona B", "Bajo · 3 días", "41%", "Alta", "Restricción de abasto"],
            ["Zona C", "Bajando · 9 días", "12%", "Alta", "Riesgo de desabasto"],
            ["Zona D", "Alto · 60 días", "4%", "Baja", "Posible exceso"]
          ]
        },
        method: [
          "Cobertura del CEDIS = inventario en CEDIS ÷ venta diaria estimada de la zona.",
          "Desabasto en farmacias = tiendas sin inventario ÷ tiendas que venden el producto.",
          "Demanda = rotación de las tiendas con inventario en el mismo periodo.",
          "Inventario en el CEDIS no prueba inventario en la farmacia: la lectura cruza ambos extremos."
        ],
        links: [
          { label: "El caso completo de distribución", href: "#time-distribuicao" }
        ],
        followups: ["¿Dónde tengo inventario detenido cerca de tiendas con desabasto?", "¿El desabasto está empeorando en los últimos 30 días?"]
      },
      lancamento: {
        keywords: ["lanzamiento", "lanzar", "lanzó", "lanzo", "producto nuevo", "nuevo producto", "llegó", "llego", "llegada", "presencia", "lançamento", "lancamento", "lançar", "lancar", "lançou", "novo produto", "produto novo", "chegou", "chegada", "presença", "presenca"],
        steps: ["Ubicando el producto…", "Leyendo el histórico semanal…", "Comparando la presencia entre canales…"],
        answer: "Seis semanas después del lanzamiento, {produto} ya aparece en **el 54% de las farmacias monitoreadas** en {lugar}. La curva se aceleró en las grandes cadenas, pero sigue por debajo del 20% en las independientes.\n\nDonde aún no llega, la siguiente pregunta es si el CEDIS ya lo recibió: eso separa un problema de sell-in de uno de resurtido.",
        widget: {
          type: "trend",
          title: "Presencia del lanzamiento · % de farmacias con el producto",
          unit: "%",
          labels: ["S1", "S2", "S3", "S4", "S5", "S6"],
          series: [
            { name: "Grandes cadenas", points: [5, 14, 27, 41, 55, 68] },
            { name: "Total", points: [3, 10, 19, 30, 42, 54], dashed: true },
            { name: "Independientes", points: [0, 2, 4, 8, 12, 17] }
          ]
        },
        method: [
          "Presencia = farmacias con inventario del producto ÷ farmacias monitoreadas en el alcance.",
          "La semana 1 empieza en la fecha de lanzamiento que define tu equipo.",
          "La separación por canal sigue lo que cada fuente permite identificar."
        ],
        links: [
          { label: "El caso completo de lanzamientos", href: "#time-lancamento" }
        ],
        followups: ["¿La falla está en el distribuidor o en las farmacias?", "¿Quién ganó participación en la zona?"]
      },
      parado: {
        keywords: ["detenido", "detenida", "inventario detenido", "sin movimiento", "sin rotación", "sin rotacion", "congelado", "estancado", "exceso", "sobrante", "reubic", "parado", "parada", "sem movimento", "sem giro", "encalhado", "excesso", "sobra", "negativ", "remanej"],
        steps: ["Analizando la disponibilidad…", "Contando los días sin movimiento…", "Buscando tiendas con desabasto cerca…"],
        answer: "En {lugar}, **14 tiendas tienen {produto} sin movimiento desde hace más de 30 días**, y 5 de ellas están a menos de 3 km de tiendas sin ese mismo producto.\n\nEse es el par que importa: inventario detenido de un lado, faltante del otro. La conversación con la cadena puede empezar por reubicar, antes de un nuevo pedido.",
        widget: {
          type: "bars",
          title: "Tiendas por tiempo sin movimiento",
          unit: "tiendas",
          rows: [
            { label: "Hasta 7 días", value: 38, tone: "leve" },
            { label: "De 8 a 30 días", value: 21, tone: "moderado" },
            { label: "De 31 a 60 días", value: 9, tone: "alto" },
            { label: "Más de 60 días", value: 5, tone: "critico" }
          ]
        },
        method: [
          "Días detenido = días seguidos con el mismo saldo, sin salida de inventario.",
          "Movimiento observado no equivale a venta confirmada.",
          "Pares detenido × desabasto: misma presentación, hasta 3 km de distancia.",
          "El dato no prueba una pérdida; muestra dónde mirar primero."
        ],
        links: [
          { label: "El caso completo de inventario detenido", href: "#time-parado" }
        ],
        followups: ["¿La falla está en el distribuidor o en las farmacias?", "¿Qué tiendas reviso primero?"]
      },
      concorrencia: {
        keywords: ["competen", "competi", "share", "participación", "participacion", "marca", "espacio", "ganó", "gano", "perdiendo", "pierde", "precio", "concorr", "participação", "participacao", "espaço", "espaco", "ganhou", "perdendo", "perde ", "preço", "preco"],
        steps: ["Leyendo el mercado por estado…", "Comparando con el periodo anterior…", "Armando el ranking…"],
        answer: "En {lugar}, tu laboratorio **creció 6% en las mismas tiendas**, pero el mercado comparable creció 11%. La participación bajó porque otros productos crecieron más, no porque tus ventas cayeran.\n\nEl espacio está en 23 tiendas donde solo el competidor aparece con inventario. Por ahí puede empezar la conversación con las cadenas.",
        widget: {
          type: "trend",
          title: "Venta estimada · tu laboratorio × competidores",
          unit: "",
          labels: ["S1", "S2", "S3", "S4", "S5", "S6"],
          series: [
            { name: "Tu laboratorio", points: [100, 101, 103, 104, 105, 106] },
            { name: "Competidores", points: [100, 103, 105, 107, 109, 111], tone: "sky" }
          ]
        },
        method: [
          "Venta estimada a partir del movimiento de inventario, no de sell-out auditado.",
          "Solo entran tiendas comparables, presentes en ambos periodos.",
          "Participación = tu volumen ÷ volumen de la categoría en el mismo panel.",
          "Los datos de competidores se muestran agregados."
        ],
        links: [
          { label: "El caso completo de competencia", href: "#time-concorrencia" }
        ],
        followups: ["¿Dónde crece más la categoría?", "¿Mi lanzamiento ya llegó a las farmacias?"]
      },
      demanda: {
        keywords: ["oportunidad", "crecer", "crece", "expans", "mercado", "demanda", "estrategia", "invertir", "potencial", "planea", "categor", "crescer", "cresce", "estratégia", "investir", "começar", "planej"],
        steps: ["Leyendo el mercado por estado…", "Abriendo el detalle del estado…", "Leyendo las recomendaciones…"],
        answer: "La categoría avanza más en {lugar}: **+9% de volumen estimado** en las mismas tiendas, frente al periodo anterior. Dos grandes cadenas venden bien la categoría y casi no tienen {produto}.\n\nAbajo, tres frentes para empezar. Son hipótesis para que tu equipo las valide, no órdenes.",
        widget: {
          type: "actions",
          title: "Acciones para este alcance",
          items: [
            { priority: "Alta", title: "Abrir conversación con la Cadena A sobre surtido", why: "La cadena representa el 18% de la categoría en la zona y tiene el producto en el 6% de sus tiendas.", how: "Llevar a la reunión la lista de las tiendas que más venden la categoría." },
            { priority: "Media", title: "Reforzar el resurtido en las ciudades con desabasto persistente", why: "Tres ciudades suman el 40% de las tiendas sin inventario desde hace más de 15 días.", how: "Revisar pedidos pendientes con el distribuidor de la zona." },
            { priority: "Baja", title: "Seguir la entrada del nuevo competidor", why: "Apareció en 31 tiendas en las últimas 4 semanas.", how: "Revisar el mismo alcance dentro de 30 días." }
          ]
        },
        method: [
          "Crecimiento = volumen estimado de la categoría en las mismas tiendas, periodo reciente × anterior.",
          "Expansión: grandes cadenas de la categoría con baja presencia de tu laboratorio.",
          "Cada acción trae el número que la sostiene y el primer paso."
        ],
        links: [
          { label: "El caso completo de demanda", href: "#time-demanda" }
        ],
        followups: ["¿Quién ganó participación en la zona?", "¿Dónde tengo inventario detenido?"]
      },
      tendencia: {
        keywords: ["desabasto", "quiebre", "faltante", "falta", "sin inventario", "sin stock", "empeora", "mejora", "evolución", "evolucion", "tendencia", "últimos", "ultimos", "ruptura", "faltando", "sem estoque", "piorando", "melhorando", "piorou", "evolução", "evolucao", "tendência"],
        steps: ["Ubicando el producto…", "Calculando la evolución del desabasto…", "Comparando el desabasto entre cadenas…"],
        answer: "El desabasto de {produto} en {lugar} **subió de 24% a 32% en 30 días**, impulsado por una cadena. Sin ella, el alcance estaría estable, cerca de 25%.\n\nUna señal así abre una investigación, no una conclusión: el siguiente paso es ver qué tiendas de esa cadena explican el alza.",
        widget: {
          type: "trend",
          title: "Evolución del desabasto · últimos 30 días",
          unit: "%",
          labels: ["D-30", "D-25", "D-20", "D-15", "D-10", "D-5", "D-1"],
          series: [
            { name: "Cadena A", points: [30, 34, 38, 45, 52, 57, 60], tone: "alert" },
            { name: "Alcance total", points: [24, 25, 24, 27, 29, 31, 32], dashed: true },
            { name: "Demás cadenas", points: [22, 23, 22, 24, 24, 25, 25] }
          ]
        },
        method: [
          "Desabasto = farmacias sin inventario ÷ farmacias monitoreadas que venden el producto.",
          "Base diaria (D-1); cada punto indica si es observado o estimado.",
          "La causa del desabasto requiere investigación: Dinn no la supone."
        ],
        links: [
          { label: "Cómo usa campo esta señal", href: "#time-campo" },
          { label: "Dinn por dentro", href: "#por-dentro" }
        ],
        followups: ["¿Qué tiendas reviso primero?", "¿La falla está en el distribuidor o en las farmacias?"]
      },
      ia: {
        keywords: ["chatgpt", "claude", "copilot", "gemini", "mcp", "api", "power bi", " bi", "integra", "conecta", "sistema", "datos internos", "crm", "erp", "data lake", "dados internos"],
        steps: ["Entendiendo la pregunta…"],
        answer: "Sí. Dinn llega a donde tu equipo ya trabaja: en la plataforma, en un archivo, en tu BI vía API o directo en ChatGPT, Claude y Copilot por MCP, con acceso de **solo lectura**.\n\nCon **Dinn Conecta**, mercado, datos internos y farmacias llegan estandarizados a tu BI y a tus agentes. Los datos y la gobernanza siguen siendo tuyos.",
        method: [],
        links: [
          { label: "Dónde entrega Dinn", href: "#entrega" },
          { label: "Preguntas frecuentes", href: "#faq" }
        ],
        followups: ["¿Qué tiendas reviso primero?", "¿Cómo empiezo una prueba?"]
      },
      sobre: {
        keywords: ["qué es", "que es", "quién es", "quien es", "cómo funciona", "como funciona", "qué hace", "que hace", "o que é", "o que e", "quem é", "quem e", "o que voc", "o que faz", "dinn"],
        steps: ["Entendiendo la pregunta…"],
        answer: "Dinn es la capa de inteligencia del canal farmacéutico. Todos los días lee inventario, rotación y precio en las farmacias, conecta cada tienda con el CEDIS que la surte y convierte eso en señales con nombre: desabasto persistente, inventario detenido, caída de rotación.\n\nCada equipo usa este mismo cerebro a su manera. Busca el tuyo abajo, o pregunta como si fuera sobre tus productos.",
        method: [],
        links: [
          { label: "Un uso para cada equipo", href: "#times" },
          { label: "Dinn por dentro", href: "#por-dentro" }
        ],
        followups: ["¿Dónde encuentra el consumidor mi producto?", "¿La falla está en el distribuidor o en las farmacias?"]
      },
      demo: {
        keywords: ["cuánto cuesta", "cuanto cuesta", "precio de dinn", "contratar", "demo", "demostra", "trial", "probar", "prueba", "empezar a usar", "implementa", "plazo", "propuesta", "cotiza", "demonstra", "quanto custa", "valor do dinn", "testar", "teste", "começar a usar", "implanta", "prazo", "proposta"],
        steps: ["Entendiendo la pregunta…"],
        answer: "Empezamos con **un solo objetivo**: por ejemplo, reducir el desabasto de un producto en una zona. Liberamos 30 días con un acuerdo sencillo y alguien de nuestro equipo acompañando.\n\nLa implementación toma hasta 30 días una vez listos los prerrequisitos acordados, y puede empezar solo con fuentes externas.",
        method: [],
        links: [
          { label: "Solicitar demo", href: "demo" },
          { label: "Preguntas frecuentes", href: "#faq" }
        ],
        followups: ["¿Qué es Dinn?", "¿Funciona en ChatGPT o en Copilot?"]
      },
      fallback: {
        steps: ["Entendiendo la pregunta…"],
        answer: "Esa la respondo mejor con tus datos. Aquí en el sitio, Dinn simula las preguntas más comunes de cada equipo sobre inventario, desabasto, rotación, precio, distribución y competencia. Prueba una de estas:",
        method: [],
        links: [
          { label: "Un uso para cada equipo", href: "#times" }
        ],
        followups: ["¿Dónde encuentra el consumidor mi producto?", "¿Qué tiendas reviso primero?", "¿La falla está en el distribuidor o en las farmacias?", "¿Quién ganó participación en mi zona?"]
      }
    }
  },
  logos: {
    title: "Farmacéuticas que ya usan Dinn"
  },
  teams: {
    eyebrow: "Elige tu equipo y mira a Dinn trabajando",
    title: "Ejecución comercial farma para *cada equipo*",
    askCta: "Pregúntale esto a Dinn",
    seesLabel: "Dinn cruza",
    doesLabel: "El equipo hace",
    note: "Ejemplos ilustrativos. Dinn prepara el análisis; el equipo decide.",
    items: [
      {
        id: "sac",
        tab: "Atención a clientes",
        kicker: "Atención a clientes",
        title: "“¿Dónde encuentro esta medicina cerca de casa?”",
        story: "Quien atiende ve las farmacias más cercanas con el producto, cuántas piezas hay y cuánto vende la tienda.",
        sees: ["Inventario por tienda", "Distancia", "Rotación", "Precio"],
        does: [
          "Recomienda la farmacia con más probabilidad de tener el producto",
          "Muestra a trade dónde la demanda no encuentra producto"
        ],
        question: "¿Dónde encuentra el consumidor mi producto cerca de Guadalajara?",
        visual: "locator"
      },
      {
        id: "campo",
        tab: "Campo y trade",
        kicker: "Fuerza de campo y trade",
        title: "Cuarenta tiendas en la cartera. *Tiempo para ocho.*",
        story: "En vez de un tablero, una fila: las tiendas con más señal y qué revisar en cada una.",
        sees: ["Desabasto por tienda", "Persistencia", "Rotación", "Cadena"],
        does: [
          "Empieza la semana por las tiendas que más pesan",
          "Lleva a la cadena evidencia por tienda, con fecha",
          "Revisa el mismo alcance después de actuar"
        ],
        question: "¿Qué farmacias de mi cartera en Monterrey reviso primero?",
        visual: "queue"
      },
      {
        id: "medico",
        tab: "Visita médica",
        kicker: "Visita médica",
        title: "¿La receta va a encontrar el producto *en la farmacia de al lado?*",
        story: "Antes de la visita, el equipo ve si las farmacias alrededor del consultorio tienen el producto. Si no, avisa a trade.",
        sees: ["Farmacias del brick", "Inventario D-1", "Cadena con faltante"],
        does: [
          "Prepara la visita sabiendo qué va a encontrar el paciente",
          "Avisa a trade si el entorno tiene desabasto"
        ],
        question: "¿Las farmacias cerca del consultorio en Guadalajara tienen mi producto?",
        visual: "prescriber"
      },
      {
        id: "distribuicao",
        tab: "Distribución",
        kicker: "Distribución y supply",
        title: "¿La falla está en el CEDIS, *en la farmacia o en el pedido?*",
        story: "Dinn conecta el inventario del distribuidor con las farmacias que surte y muestra de qué lado está el problema.",
        sees: ["Inventario en CEDIS", "Cobertura en días", "Desabasto en farmacias", "Rotación de la zona"],
        does: [
          "Separa el faltante de origen de la falla de resurtido",
          "Adelanta el pedido cuando baja la cobertura",
          "Evalúa reubicar entre zonas"
        ],
        question: "¿La falla está en el distribuidor o en las farmacias de Ciudad de México?",
        visual: "distribution"
      },
      {
        id: "lancamento",
        tab: "Lanzamientos",
        kicker: "Lanzamientos",
        title: "Semana a semana, *a dónde ya llegó el producto.*",
        story: "El equipo sigue la presencia del producto nuevo por cadena y zona, y ve dónde aceleró o se frenó.",
        sees: ["Presencia por semana", "Cadena y zona", "Llegada al CEDIS"],
        does: [
          "Ve dónde el lanzamiento aún no llega",
          "Separa un problema de sell-in de uno de resurtido"
        ],
        question: "¿Mi lanzamiento ya llegó a las farmacias de Guadalajara?",
        visual: "launch"
      },
      {
        id: "parado",
        tab: "Inventario detenido",
        kicker: "Inventario y rotación",
        title: "Inventario detenido de un lado. *Faltante del otro.*",
        story: "Dinn cuenta los días sin movimiento y encuentra tiendas detenidas cerca de tiendas con desabasto: ahí empieza la reubicación.",
        sees: ["Días sin movimiento", "Inventario congelado", "Desabasto cercano"],
        does: [
          "Encuentra saldo que no rota",
          "Propone reubicar antes de un nuevo pedido",
          "Sigue 30, 60 y 90 días"
        ],
        question: "¿Dónde tengo inventario detenido cerca de tiendas con desabasto?",
        visual: "stalled"
      },
      {
        id: "concorrencia",
        tab: "Competencia",
        kicker: "Competencia y participación",
        title: "Donde está el competidor *y tú no.*",
        story: "Compara la venta estimada de tu laboratorio con la de la categoría, en las mismas tiendas, y muestra dónde solo el competidor tiene inventario.",
        sees: ["Venta estimada", "Mercado comparable", "Precio por cadena"],
        does: [
          "Separa la caída de participación de la caída de venta",
          "Lista las tiendas solo con competidor"
        ],
        question: "¿Quién ganó participación en Monterrey?",
        visual: "competition"
      },
      {
        id: "demanda",
        tab: "Demanda y estrategia",
        kicker: "Demanda, ventas y estrategia",
        title: "Dónde crecer, *y por dónde empezar.*",
        story: "Inventario, rotación, precio e histórico se vuelven un mapa de oportunidades por categoría (como GLP-1) y por estado.",
        sees: ["Categoría por estado", "Participación", "Cadenas candidatas"],
        does: [
          "Elige dónde concentrar esfuerzo",
          "Define las cadenas para abrir la conversación",
          "Convierte cada señal en una acción con responsable"
        ],
        question: "¿Dónde crece más mi categoría en Ciudad de México?",
        visual: "demand"
      }
    ],
    visuals: {
      locator: {
        app: "Localizar producto",
        you: "Dirección del consumidor",
        rows: [
          { name: "Farmacia 1 · Cadena A", dist: "0.8 km", level: "Alta", stock: "12–15 pzas." },
          { name: "Farmacia 2 · Cadena B", dist: "1.2 km", level: "Media", stock: "4–6 pzas." },
          { name: "Farmacia 3 · Cadena A", dist: "1.9 km", level: "Alta", stock: "9–11 pzas." },
          { name: "Farmacia 4 · Cadena C", dist: "2.3 km", level: "Sin stock", stock: "0 pzas." }
        ],
        insight: "Búsqueda repetida en la colonia · 2 tiendas sin inventario desde hace 7 días"
      },
      queue: {
        app: "Fila de la semana",
        sub: "6 de 40 tiendas de la cartera",
        rows: [
          { name: "Tienda 01 · Cadena A", level: "Crítico", value: "86.7%", check: "¿Pedido pendiente?" },
          { name: "Tienda 02 · Cadena A", level: "Alto", value: "60%", check: "¿Fuera del anaquel?" },
          { name: "Tienda 03 · Cadena B", level: "Alto", value: "53%", check: "¿Volvió a pedir?" },
          { name: "Tienda 04 · Cadena C", level: "Moderado", value: "33%", check: "¿Volvió a faltar?" },
          { name: "Tienda 05 · Cadena B", level: "Leve", value: "12%", check: "Dar seguimiento" }
        ]
      },
      prescriber: {
        app: "Entorno del consultorio",
        center: "Consultorio",
        withStock: "con inventario",
        without: "sin inventario",
        insight: "Faltante concentrado en la Cadena C"
      },
      distribution: {
        app: "Red de distribución",
        cd: "CEDIS",
        cases: [
          { name: "Falla de distribución", cd: 82, pdv: 38, demand: "Alta", read: "CEDIS con inventario, farmacias sin él. Conviene revisar el resurtido." },
          { name: "Restricción de abasto", cd: 8, pdv: 41, demand: "Alta", read: "CEDIS vacío y la zona vendiendo. El problema está antes del CEDIS." },
          { name: "Riesgo de desabasto", cd: 30, pdv: 12, demand: "Alta", read: "La cobertura del CEDIS va bajando. Se puede adelantar el pedido." },
          { name: "Posible exceso", cd: 90, pdv: 4, demand: "Baja", read: "Inventario alto y rotación baja. Evaluar reubicar." }
        ],
        cdLabel: "Inventario en CEDIS",
        pdvLabel: "Farmacias sin inventario",
        demandLabel: "Demanda",
        formula: "Cobertura = inventario en CEDIS ÷ venta diaria de la zona"
      },
      launch: {
        app: "Presencia del lanzamiento",
        legend: ["Grandes cadenas", "Independientes"],
        weeks: ["S1", "S2", "S3", "S4", "S5", "S6", "S7", "S8"],
        regions: ["CDMX", "JAL", "NL", "MEX", "PUE", "GTO", "VER", "YUC", "CHIH", "BC", "QRO", "SIN"],
        insight: "Semana 6 · 54% de las farmacias"
      },
      stalled: {
        app: "Inventario detenido",
        bands: [
          { label: "Hasta 7 días", value: 38 },
          { label: "De 8 a 30 días", value: 21 },
          { label: "De 31 a 60 días", value: 9 },
          { label: "Más de 60 días", value: 5 }
        ],
        from: "Tienda 04 · detenido hace 42 días",
        to: "Tienda 09 · sin inventario",
        distance: "2.7 km"
      },
      competition: {
        app: "Mercado comparable",
        you: "Tu laboratorio",
        them: "Competidores",
        reading: "Creciste 6% en las mismas tiendas; el mercado, 11%. La participación bajó porque otros crecieron más.",
        gap: "tiendas solo con competidor"
      },
      demand: {
        app: "Oportunidades",
        questions: ["¿Dónde avanza la categoría?", "¿Dónde pierdo espacio?", "¿Dónde explorar expansión?"],
        actions: [
          { priority: "Alta", title: "Abrir conversación de surtido con la Cadena A" },
          { priority: "Media", title: "Reforzar el resurtido en 3 ciudades" },
          { priority: "Baja", title: "Seguir al nuevo competidor" }
        ]
      }
    }
  },
  story: {
    lines: [
      "Todos los días, cada farmacia dice algo sobre tu producto.",
      "Si está en el **anaquel. Si rota. A qué precio. Si el CEDIS tiene para resurtir.**",
      "Casi nadie escucha.",
      "Dinn escucha, entiende y le dice a tu equipo **dónde actuar.**"
    ]
  },
  inside: {
    eyebrow: "Por dentro de la IA de Dinn",
    stages: [
      {
        name: "Observa",
        title: "Lee el desabasto del canal, todos los días.",
        desc: "Agentes consultan los canales digitales de las farmacias y registran inventario, precio y movimiento, con lugar y hora. Donde la fuente no responde, Dinn estima con tiendas comparables y lo dice.",
        chips: ["Inventario D-1", "Precio", "Movimiento", "Observado o estimado"]
      },
      {
        name: "Conecta",
        title: "Conecta cada farmacia con lo que la rodea.",
        desc: "Cada tienda se relaciona con el CEDIS que la surte, con su histórico de rotación, con la cadena y con el mercado de la categoría.",
        chips: ["CEDIS del distribuidor", "Histórico de rotación", "Cadena y zona", "Mercado de la categoría"]
      },
      {
        name: "Entiende",
        title: "Separa la señal del ruido.",
        desc: "La lectura se convierte en señales con nombre, y la evolución en el tiempo separa una señal aislada de un problema recurrente.",
        chips: ["Desabasto persistente", "Inventario sin movimiento", "Caída de rotación", "Concentración en cadena"]
      },
      {
        name: "Entrega",
        title: "Lleva la ejecución comercial a donde trabaja el equipo.",
        desc: "En la plataforma, en una conversación, en tu BI o en tu IA. Dinn prepara el análisis; el equipo decide.",
        chips: ["Dinn Manager", "Dinn Insights", "Tu IA", "BI y API", "Campo"]
      }
    ],
    outputs: ["Plataforma", "Conversación", "Tu IA", "BI y API", "Campo"],
    signals: ["Desabasto persistente", "Inventario sin movimiento", "Caída de rotación", "Concentración en cadena"]
  },
  delivery: {
    eyebrow: "Dónde entrega Dinn",
    title: "IA para el mercado farma *donde tu equipo ya trabaja*",
    cards: [
      {
        tag: "Dinn Manager",
        title: "La plataforma",
        desc: "Desabasto, inventario detenido, distribución y mercado en el mismo alcance, por SKU, cadena, ciudad y tienda."
      },
      {
        tag: "Dinn Insights",
        title: "Una conversación",
        desc: "Pregunta en español y recibe el número, el alcance, la fecha y qué es observado o estimado."
      },
      {
        tag: "MCP",
        title: "En tu IA",
        desc: "ChatGPT, Claude y Copilot consultan Dinn con acceso autorizado y de solo lectura."
      },
      {
        tag: "Dinn Conecta",
        title: "En tu BI y en tus agentes",
        desc: "Mercado, datos internos y farmacias estandarizados por producto, tienda y zona. Los datos y la gobernanza siguen siendo tuyos."
      }
    ],
    sources: ["IQVIA / Close-Up", "ERP y CRM", "Farmacias"],
    destinations: ["BI", "Copilot", "Agentes", "API"],
    trust: [
      "Observado o estimado, siempre se indica",
      "Base D-1 y consulta puntual en tiendas elegibles",
      "Doble factor por correo · SSO habilitable",
      "Implementación en hasta 30 días tras los prerrequisitos"
    ],
    note: "Cada fuente depende de la licencia, la autorización y el alcance acordados. Las funciones en tu IA dependen del plan y la configuración."
  },
  faq: {
    title: "Preguntas frecuentes sobre IA, desabasto y sell-out",
    items: [
      {
        question: "Ya usamos auditorías como IQVIA y Close-Up. ¿Por qué necesitaríamos Dinn?",
        answer: "Dinn **no reemplaza** las auditorías de mercado: las **complementa**. IQVIA y Close-Up son excelentes para planeación, participación y decisiones de largo plazo, con datos de periodo cerrado. Dinn sigue la disponibilidad en el día a día (D-1), tienda por tienda, y muestra **dónde actuar ahora**, antes de que el faltante se convierta en venta perdida. Con autorización, ambas lecturas pueden cruzarse en el mismo alcance."
      },
      {
        question: "¿La implementación exige un gran esfuerzo de TI?",
        answer: "No necesariamente. Dinn puede empezar con fuentes externas, sin depender de tus sistemas internos. La implementación tiene alcance delimitado y se realiza en **hasta 30 días** una vez listos los prerrequisitos acordados. Cuando tiene sentido, tus datos internos entran para enriquecer la lectura."
      },
      {
        question: "¿Dinn es solo otro dashboard?",
        answer: "No. La misma base responde a tres niveles de decisión: **estratégico** (dónde concentrar la atención), **táctico** (qué discutir con cada cadena) y **operativo** (qué tiendas verificar primero). La salida no es una gráfica para interpretar, sino una fila concreta: cada tienda con su señal, la pregunta a responder y el retorno esperado."
      },
      {
        question: "¿Dinn compite con el CRM (Salesforce, Veeva, SalesFarma) que ya usamos?",
        answer: "No. El CRM sigue siendo el sistema de registro de visitas, pedidos y cartera. Dinn es una capa de inteligencia sobre el canal: cuando la integración se acuerda, lleva al CRM el **contexto de lo que pasa en las farmacias**, para que el equipo priorice mejor dentro de la herramienta que ya usa."
      },
      {
        question: "¿Y si las auditorías empiezan a entregar datos diarios?",
        answer: "Un dato rápido sin prioridad es solo más ruido. El diferencial de Dinn es convertir la lectura del canal en **prioridad y siguiente paso**: qué producto, en qué cadenas, en qué tiendas, con fuente y confianza explícitas. La IA prepara el análisis; **el equipo decide** qué hacer."
      },
      {
        question: "¿En cuánto tiempo vemos valor?",
        answer: "Empezamos por **un objetivo**, por ejemplo reducir el faltante de un producto en una región, y seguimos el mismo alcance en el tiempo. La primera lectura ya muestra dónde se concentra el problema; en 30 días se puede ver si la señal persistió o disminuyó después de las acciones del equipo."
      },
      {
        question: "¿Cómo sigue Dinn el inventario sin depender de nuestras bases?",
        answer: "Agentes consultan los canales digitales de las farmacias y registran lo que informa cada fuente, con ubicación y hora: ese es el **dato observado**. Donde no hay respuesta directa, Dinn **estima** a partir de tiendas comparables y del historial, con nivel de confianza. Cada registro indica cómo se obtuvo."
      },
      {
        question: "¿Los datos diarios no van a sobrecargar al equipo de campo?",
        answer: "Al contrario: Dinn existe para reducir el exceso de información. En lugar de un dashboard para que el representante interprete, entrega **listas priorizadas**: qué tiendas verificar primero, qué revisar en cada una y qué retorno esperar."
      },
      {
        question: "¿Dinn es solo para la fuerza de ventas?",
        answer: "No. La misma lectura atiende a **Trade**, **Comercial y campo**, **Demanda y abastecimiento**, **Inteligencia de mercado**, **Servicio al cliente** y **Tecnología y datos**. Todos miran la misma fotografía de disponibilidad, lo que reduce conflictos entre áreas."
      },
      {
        question: "¿Se puede probar antes de firmar un contrato largo?",
        answer: "Sí. Habilitamos **30 días con un solo objetivo**, con términos simples y alguien de nuestro equipo acompañando. Al final, queda claro si conviene seguir, ajustar o parar."
      },
      {
        question: "¿Cómo trata Dinn la seguridad y la confiabilidad de los datos?",
        answer: "El acceso tiene **verificación en dos pasos por correo** y control de permisos, y la integración con la identidad corporativa (**SSO**) puede habilitarse. Cada dato es rastreable: fuente, fecha y la distinción entre observado y estimado quedan explícitas. Las conexiones con la IA del cliente son de **solo lectura**."
      },
      {
        question: "¿Qué es Dinn Conecta?",
        answer: "Es la capa que prepara y entrega **datos de farma en el entorno que tu equipo ya usa**. Dinn conecta fuentes autorizadas (mercado, datos internos y farmacias), estandariza producto, tienda y región, cuida la calidad y la actualización, y entrega en tu BI, Copilot, agentes o API. Datos, infraestructura y gobernanza siguen contigo."
      },
      {
        question: "¿Puedo usar Dinn en ChatGPT, Claude o Copilot?",
        answer: "Sí. Dinn se conecta a tu entorno de IA por **MCP**, con acceso autorizado y de **solo lectura**. Preguntas en lenguaje natural y recibes el análisis con alcance, periodo y límites. Funciones como programación y generación de archivos dependen del plan y de la configuración de tu IA."
      },
      {
        question: "¿Cuál es la diferencia entre dato observado y estimado?",
        answer: "**Observado** es lo que la fuente informó directamente, con ubicación y hora. **Estimado** se calcula a partir de tiendas comparables y del historial cuando no hay respuesta directa, siempre con nivel de confianza. La base se actualiza diariamente (D-1) y, en tiendas elegibles, se puede consultar la disponibilidad en el momento."
      }
    ]
  },
  ctaFinal: {
    title: "Mira el desabasto y el sell-out *de tus productos*",
    description: "En una demostración, Dinn responde con tu portafolio, tu cartera y tus zonas.",
    button: "Solicitar demo",
    secondary: "Volver a preguntar"
  },
  footer: {
    description: "La capa de inteligencia para el canal farmacéutico. Una iniciativa de DiWE Ventures Studio.",
    sectionA: "Acerca de Dinn",
    sectionLegal: "Legal",
    termos: "Términos",
    privacidade: "Privacidad",
    cookies: "Cookies",
    suporte: "Soporte",
    ctaTitle: "¿Listo para empezar?",
    ctaDesc: "Ve Dinn con tus propios productos.",
    ctaButton: "Solicitar demo",
    rights: "© 2026 DiWE Ventures Studio. Todos los derechos reservados.",
    launch: "Lanzamiento"
  },
  privacy: {
    title: "Políticas de Privacidad",
    summaryTitle: "Resumen",
    summary: [
      "Información General",
      "Derechos del Usuario",
      "Deber de no proporcionar datos de terceros",
      "Información recopilada",
      "Tipos de datos recopilados",
      "Datos sensibles",
      "Recopilación de datos no previstos expresamente",
      "Base legal para el tratamiento de datos personales",
      "Fines del tratamiento de datos personales",
      "Almacenamiento de datos personales",
      "Plazo de conservación de datos personales",
      "Destinatarios y transferencia de datos personales",
      "Roles y Responsabilidades",
      "Del responsable del tratamiento de datos (Controlador)",
      "Del tratamiento en nombre del Controlador (Operador)",
      "Del Oficial de Protección de Datos (DPO)",
      "Seguridad en el Tratamiento de Datos Personales del Usuario",
      "Datos de Navegación (Cookies)",
      "Gestión de Cookies y configuración del navegador",
      "Cookies Esenciales",
      "Cookies Analíticas",
      "Cookies de Marketing",
      "Queja ante una autoridad de control",
      "Cambios",
      "Ley Aplicable y Jurisdicción",
      "Validez y Control",
      "Gestión de Documentos",
      "Historial del Documento"
    ],
    sections: [
      {
        title: "1. Información General",
        content: [
          "Esta Política de Privacidad describe el tratamiento de datos personales llevado a cabo por DINN, ya sea de forma automatizada o manual, en sus canales de atención al cliente y comunicación en línea.",
          "Este documento fue desarrollado en cumplimiento de la Ley General de Protección de Datos (LGPD), Ley Federal No. 13.709/2018 de Brasil.",
          "El uso de cualquier servicio ofrecido por DINN implica la aceptación total de los términos de la Política de Privacidad."
        ]
      },
      {
        title: "2. Derechos del Usuario",
        content: [
          "DINN se compromete a seguir los principios de la LGPD, garantizando a los usuarios los siguientes derechos:"
        ],
        list: [
          "Derecho de confirmación y acceso",
          "Derecho de rectificación",
          "Derecho a la eliminación de datos",
          "Derecho a la limitación del tratamiento",
          "Derecho de oposición",
          "Derecho a la portabilidad de datos",
          "Derecho a no ser objeto de decisiones automatizadas",
          "Derecho a la anonimización y el intercambio"
        ],
        footer: "Los usuarios pueden solicitar estos derechos enviando un correo electrónico a <a href=\"mailto:vinicius.silva@diwe.com.br\" style=\"color: #5625F2; text-decoration: underline;\">vinicius.silva@diwe.com.br</a>."
      },
      {
        title: "3. Deber de no proporcionar datos de terceros",
        content: [
          "Al utilizar los servicios de DINN, los usuarios solo deben proporcionar sus propios datos personales."
        ]
      },
      {
        title: "4. Datos e Información recopilada",
        content: [
          "DINN recopila los datos personales necesarios para proporcionar servicios y cumplir con obligaciones legales. Los tipos de datos recopilados incluyen:"
        ],
        list: [
          "Nombre, correo electrónico, teléfono, dirección",
          "Información sobre preferencias de servicios",
          "Datos de navegación e IP"
        ]
      },
      {
        title: "5. Base legal para el tratamiento de datos personales",
        content: [
          "El tratamiento de datos personales por parte de DINN se basa en el consentimiento del usuario y otros fundamentos legales de la LGPD, como la ejecución de contratos y obligaciones legales."
        ]
      },
      {
        title: "6. Fines del tratamiento de datos personales",
        content: [
          "DINN procesa datos personales para:"
        ],
        list: [
          "Ofrecer productos y servicios",
          "Reclutamiento de colaboradores",
          "Soporte técnico y comercial",
          "Cumplimiento de obligaciones legales"
        ]
      },
      {
        title: "7. Almacenamiento de datos personales",
        content: [
          "Los datos personales se almacenan por períodos limitados, según los fines y requisitos legales, y pueden mantenerse en servidores en Brasil o en el extranjero."
        ]
      },
      {
        title: "8. Destinatarios y transferencia de datos personales",
        content: [
          "DINN puede compartir datos con socios comerciales y autoridades legales, siempre respetando los requisitos de la LGPD."
        ]
      },
      {
        title: "9. Roles y Responsabilidades",
        customList: [
          "<strong>Controlador:</strong> DINN es responsable del tratamiento de los datos personales de sus usuarios.",
          "<strong>Operador:</strong> DINN puede actuar como operador en nombre de clientes y socios.",
          "<strong>Oficial de Protección de Datos:</strong> DINN ha designado al Sr. Vinicius Fernandes Silva como el oficial de datos, a quien se puede contactar a través de <a href=\"mailto:vinicius.silva@diwe.com.br\" style=\"color: #5625F2; text-decoration: underline;\">vinicius.silva@diwe.com.br</a>."
        ]
      },
      {
        title: "10. Seguridad en el Tratamiento de Datos Personales",
        content: [
          "DINN adopta medidas técnicas para garantizar la seguridad de los datos personales, como la encriptación y sistemas de seguridad de la información."
        ]
      },
      {
        title: "11. Datos de Navegación (Cookies)",
        content: [
          "DINN utiliza cookies para mejorar la experiencia del usuario. Estas pueden ser desactivadas por el usuario directamente en el navegador."
        ]
      },
      {
        title: "12. Queja ante una autoridad de control",
        content: [
          "Los usuarios tienen derecho a presentar quejas sobre el uso de sus datos ante la Autoridad Nacional de Protección de Datos (ANPD)."
        ]
      },
      {
        title: "13. Cambios",
        content: [
          "DINN puede cambiar esta Política de Privacidad en cualquier momento. La versión actualizada siempre estará disponible en nuestro sitio web."
        ]
      },
      {
        title: "14. Ley Aplicable y Jurisdicción",
        content: [
          "Los tribunales del distrito donde se encuentra DINN serán responsables de resolver cualquier disputa que surja de esta política."
        ]
      },
      {
        title: "15. Validez y Control",
        content: [
          "Este documento se publicó el [Fecha] y se revisará anualmente."
        ]
      },
      {
        title: "16. Historial del Documento",
        content: [
          "<strong>Versión 1.0:</strong> Creado el 17/10/2024"
        ]
      }
    ]
  },
  feedback: {
    title: "Deja tu Comentario"
  },
  testimonials: {
    title: "Lo que dice la industria farma de Dinn",
    readMore: "Ver más",
    readLess: "Ver menos",
    items: [
      {
        quote: "El equipo de Dinn se destacó por su capacidad para entender profundamente nuestro negocio, yendo más allá de entregar un simple producto digital. Ofrecieron valiosos insights de negocios y mostraron una disposición constante para recibir comentarios y hacer ajustes, asegurando que la solución desarrollada realmente agregara valor a nuestro equipo de ventas. Este enfoque colaborativo y adaptativo fue crucial para el éxito de nuestra asociación.",
        name: "Natali Pereira dos Santos",
        designation: "Analista de Innovación en Libbs",
        src: "/depoiment/Natali.avif"
      },
      {
        quote: "+ 1 visita al día. Dinn sugirió rutas de manera impecable, 10 de 10. Me orientó súper bien dentro de una región.",
        name: "Roberto",
        designation: "Promotor Médico en Eurofarma - Chile",
        src: "/depoiment/Roberto.avif"
      },
      {
        quote: "Participar en el proyecto piloto con Dinn fue una experiencia transformadora, con varios aprendizajes en el camino. El enfoque innovador y la tecnología empleada en el proyecto no solo optimizaron nuestros procesos internos, sino que también ampliaron significativamente nuestra visión de futuro con una perspectiva de que podemos ofrecer algo de valor y así transformar todo lo aprendido en algo que marque la diferencia en la vida de las personas.",
        name: "Wilson Jorge de Assis Junior",
        designation: "Gerente Regional de Ventas",
        src: "/depoiment/Wilson.avif"
      },
      {
        quote: "Menor tiempo de pre-visita. Dinn redujo el tiempo de preparación de las visitas en 10 minutos, lo que me permitió hacer una visita más diaria.",
        name: "Camila",
        designation: "Promotora Médica en Eurofarma - Chile",
        src: "/depoiment/Camila.avif"
      }
    ]
  },
  blog: {
    heroTitle: "Blog de Dinn: IA, desabasto y ejecución comercial farma",
    searchPlaceholder: "Busca tu contenido aquí",
    noResultsTitle: "No se encontró contenido",
    noResultsDesc: "Intenta ajustar los términos de búsqueda.",
    readArticle: "Leer artículo",
    viewContent: "Ver contenido",
    minRead: "min de lectura",
    backToBlog: "Volver al Blog",
    ctaTitle: "Transforma datos en decisiones estratégicas",
    ctaText: "Dinn muestra dónde falta producto en las farmacias, qué cambió y dónde actuar primero, con fuente y confianza explícitas.",
    ctaBtn: "Solicitar demostración",
    recommended: "Recomendados para ti",
    writtenBy: "Por"
  }
};
