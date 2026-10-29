import { home2Es } from './es.home2';
import { pagesEs } from './es.pages';

export const es419 = {
  ...pagesEs,
  ...home2Es,
  nav: {
    home: "Inicio",
    platform: "Plataforma",
    solutions: "Soluciones",
    solutionsAll: "Ver todas las soluciones",
    cases: "Casos de uso",
    changelog: "Novedades",
    resourcesAll: "Ver todos los recursos",
    trust: "Confianza",
    resources: "Recursos",
    ask: "Dinn Insights",
    teams: "Casos de uso",
    inside: "Cómo funciona",
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
    pill: "Inteligencia comercial para el canal farmacéutico",
    title: "Convierte las señales del canal farma en *acción comercial*.",
    description: "Dinn organiza señales de disponibilidad, rotación, precio y cobertura y muestra a tu equipo dónde actuar primero, con origen, actualización y límites.",
    cta: "Ve la plataforma",
    secondary: "Ve Dinn para tu área"
  },
  insights: {
    eyebrow: "Dinn Insights",
    title: "¿Qué quieres saber sobre *desabasto y sell-out*?",
    intro: "Chatea con la IA de Dinn. Pregunta en español. Recibe la cifra, el alcance, la fecha y el método."
  },
  ask: {
    placeholder: "Pregunta sobre inventario, desabasto, rotación, precio…",
    followPlaceholder: "Haz una pregunta de seguimiento…",
    send: "Enviar",
    reset: "Nueva conversación",
    starters: [
      { team: "Atención a clientes", chip: "Dónde encontrar el producto", q: "¿Dónde encuentra el consumidor mi producto cerca de Guadalajara?" },
      { team: "Campo", chip: "Qué tiendas revisar", q: "¿Qué farmacias de mi cartera en Monterrey reviso primero?" },
      { team: "Distribución", chip: "¿La falla está en el CEDIS?", q: "¿La falla está en el distribuidor o en las farmacias de Ciudad de México?" },
      { team: "Lanzamientos", chip: "¿Llegó mi lanzamiento?", q: "¿Mi lanzamiento ya llegó a las farmacias de Guadalajara?" },
      { team: "Inventario", chip: "Inventario detenido", q: "¿Dónde tengo inventario detenido cerca de tiendas con desabasto?" },
      { team: "Competencia", chip: "Quién ganó espacio", q: "¿Quién ganó participación en Monterrey?" }
    ],
    contextLabel: "Alcance usado",
    defaultPlace: "Ciudad de México",
    defaultProduct: "tu producto",
    thinking: "Pensando…",
    methodTitle: "Cómo obtuvo Dinn esto",
    linksTitle: "Lee más",
    followTitle: "Pregunta también",
    demoCta: "Prueba tus productos",
    actionWhy: "¿Por qué?",
    actionHow: "Cómo:",
    scenarios: {
      sac: {
        keywords: ["dónde encuentr", "donde encuentr", "dónde hay", "donde hay", "dónde compr", "donde compr", "consumidor", "paciente", "atención a clientes", "atencion a clientes", "localiz", "ubicar", "cerca", "dirección", "direccion", "onde encontr", "onde tem", "onde acha", "onde compr", "sac", "atendimento", "perto", "próxima", "proxima", "encontrar", "endereço"],
        steps: ["Ubicando la dirección…", "Buscando el producto en las farmacias…", "Calculando la cobertura en días…"],
        answer: "Cerca de {lugar}, **3 de las 5 farmacias más cercanas** probablemente tienen {produto} en inventario. La farmacia más cercana con inventario confirmado está a 0.8 km.\n\nLa búsqueda también muestra un patrón. La demanda se repite en una colonia donde dos tiendas llevan una semana sin el producto. Úsalo para el resurtido de la ciudad y para la visita médica de la zona.",
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
          "Búsqueda desde la dirección indicada. Primero las tiendas más cercanas.",
          "El inventario se observa en la fuente (D-1) o se estima con tiendas comparables. Cada valor tiene un nivel de confianza.",
          "Cobertura en días = inventario ÷ rotación diaria promedio de la tienda.",
          "El orden usa disponibilidad y cercanía, no el precio más bajo."
        ],
        links: [
          { label: "Caso de atención a clientes", href: "#time-sac" },
          { label: "Cómo sabe Dinn el inventario", href: "#por-dentro" }
        ],
        followups: ["¿Y qué cambia esto para la visita médica?", "¿Qué tiendas de esta zona necesitan resurtido?"]
      },
      campo: {
        keywords: ["visitar", "campo", "ruta", "cartera", "promotor", "territorio", "trade", "kam", "reviso", "revisar", "primero", "priorizar", "prioridad", "agenda", "visita", "rota", "carteira", "consultor", "gdn", "territ", "verificar", "verifico", "prioridade"],
        steps: ["Leyendo tu cartera…", "Analizando la disponibilidad…", "Armando el ranking…", "Listando los PDV…"],
        answer: "En tu cartera de {lugar}, **6 tiendas dan el 70% de la señal de desabasto** de {produto} en la última semana. La lista dice qué revisar en cada tienda y qué esperar.\n\nDinn prepara la lista. Tu equipo arma la agenda.",
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
          "Las tiendas que nunca vendieron el producto se excluyen. Subirían la tasa de desabasto."
        ],
        links: [
          { label: "Caso de campo", href: "#time-campo" },
          { label: "De dónde viene cada señal", href: "#por-dentro" }
        ],
        followups: ["¿El desabasto sube o baja en 30 días?", "¿El problema es del distribuidor o de las tiendas?"]
      },
      medico: {
        keywords: ["médic", "medic", "visita médica", "visita medica", "prescri", "receta", "consultorio", "representante", "brick", "clínica", "clinica", "doctor", "propagand", "receita", "consultório"],
        steps: ["Ubicando el consultorio…", "Buscando el producto en las farmacias…", "Comparando el desabasto entre zonas…"],
        answer: "Alrededor del consultorio en {lugar}, **7 de 12 farmacias** tienen {produto} hoy. Las 5 sin inventario son de la misma cadena, del mismo lado de la avenida.\n\nEl paciente probablemente puede surtir la receta. Avisa a trade sobre esa cadena antes de que el paciente regrese sin el producto.",
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
          "Dinn no escribe en el CRM. Usa la lectura para preparar la visita."
        ],
        links: [
          { label: "El caso de la visita médica", href: "#time-medico" }
        ],
        followups: ["¿Dónde encuentra el consumidor el producto cerca de Guadalajara?", "¿Qué tiendas reviso primero?"]
      },
      distribuicao: {
        keywords: ["cedis", "distribuidor", "distribución", "distribucion", "abastec", "resurt", "reposición", "reposicion", "supply", "logística", "logistica", "retraso", "falla", "pedido", "cd", "cds", "distribuição", "distribuicao", "reposição", "reposicao", "repor", "atraso", "furo"],
        steps: ["Leyendo el inventario de los CEDIS…", "Calculando la cobertura en días…", "Cruzando con el desabasto en las farmacias de la zona…", "Comparando con la rotación local…"],
        answer: "En {lugar}, la falla probablemente no está en el CEDIS. **El distribuidor tiene inventario para unos 24 días**, pero el 38% de las farmacias que surte no tiene {produto}. La zona sigue vendiendo donde hay inventario.\n\nEsto apunta a una **falla de distribución o de resurtido**, no a un faltante de origen. Primero confirma los pedidos pendientes en las cadenas afectadas.",
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
          "El inventario en el CEDIS no prueba inventario en la farmacia. La lectura cruza ambos."
        ],
        links: [
          { label: "Caso de distribución", href: "#time-distribuicao" }
        ],
        followups: ["¿Dónde tengo inventario detenido cerca de tiendas con desabasto?", "¿El desabasto está empeorando en los últimos 30 días?"]
      },
      lancamento: {
        keywords: ["lanzamiento", "lanzar", "lanzó", "lanzo", "producto nuevo", "nuevo producto", "llegó", "llego", "llegada", "presencia", "lançamento", "lancamento", "lançar", "lancar", "lançou", "novo produto", "produto novo", "chegou", "chegada", "presença", "presenca"],
        steps: ["Ubicando el producto…", "Leyendo el histórico semanal…", "Comparando la presencia entre canales…"],
        answer: "Seis semanas después del lanzamiento, {produto} está en **el 54% de las farmacias monitoreadas** en {lugar}. La presencia creció en las grandes cadenas, pero sigue por debajo del 20% en las independientes.\n\nDonde no ha llegado, revisa si el CEDIS ya lo recibió. Esto separa un problema de sell-in de uno de resurtido.",
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
          "La semana 1 empieza en la fecha de lanzamiento que tu equipo define.",
          "La separación por canal sigue lo que cada fuente permite identificar."
        ],
        links: [
          { label: "Caso de lanzamientos", href: "#time-lancamento" }
        ],
        followups: ["¿La falla está en el distribuidor o en las farmacias?", "¿Quién ganó participación en la zona?"]
      },
      parado: {
        keywords: ["detenido", "detenida", "inventario detenido", "sin movimiento", "sin rotación", "sin rotacion", "congelado", "estancado", "exceso", "sobrante", "reubic", "parado", "parada", "sem movimento", "sem giro", "encalhado", "excesso", "sobra", "negativ", "remanej"],
        steps: ["Analizando la disponibilidad…", "Contando los días sin movimiento…", "Buscando tiendas con desabasto cerca…"],
        answer: "En {lugar}, **14 tiendas tienen {produto} sin movimiento desde hace más de 30 días**. 5 de ellas están a menos de 3 km de tiendas sin ese mismo producto.\n\nEste par importa: inventario detenido en una tienda, faltante en la otra. Empieza la conversación con la cadena por reubicar, antes de un nuevo pedido.",
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
          "Días detenido = días seguidos con el mismo saldo y sin salida de inventario.",
          "El movimiento observado no es una venta confirmada.",
          "Pares detenido × desabasto: misma presentación, hasta 3 km de distancia.",
          "El dato no prueba una pérdida. Muestra dónde mirar primero."
        ],
        links: [
          { label: "Caso de inventario detenido", href: "#time-parado" }
        ],
        followups: ["¿La falla está en el distribuidor o en las farmacias?", "¿Qué tiendas reviso primero?"]
      },
      concorrencia: {
        keywords: ["competen", "competi", "share", "participación", "participacion", "marca", "espacio", "ganó", "gano", "perdiendo", "pierde", "precio", "concorr", "participação", "participacao", "espaço", "espaco", "ganhou", "perdendo", "perde ", "preço", "preco"],
        steps: ["Leyendo el mercado por estado…", "Comparando con el periodo anterior…", "Armando el ranking…"],
        answer: "En {lugar}, tu laboratorio **creció 6% en las mismas tiendas**. El mercado comparable creció 11%. La participación bajó porque otros productos crecieron más, no porque tus ventas cayeran.\n\n23 tiendas muestran inventario solo del competidor. Empieza ahí las conversaciones con las cadenas.",
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
          "Las ventas se estiman con el movimiento de inventario. No son sell-out auditado.",
          "Solo entran tiendas comparables en ambos periodos.",
          "Participación = tu volumen ÷ volumen de la categoría en el mismo panel.",
          "Los datos de competidores están agregados."
        ],
        links: [
          { label: "Caso de competencia", href: "#time-concorrencia" }
        ],
        followups: ["¿Dónde crece más la categoría?", "¿Mi lanzamiento ya llegó a las farmacias?"]
      },
      demanda: {
        keywords: ["oportunidad", "crecer", "crece", "expans", "mercado", "demanda", "estrategia", "invertir", "potencial", "planea", "categor", "crescer", "cresce", "estratégia", "investir", "começar", "planej"],
        steps: ["Leyendo el mercado por estado…", "Abriendo el detalle del estado…", "Leyendo las recomendaciones…"],
        answer: "La categoría crece más en {lugar}: **+9% de volumen estimado** en las mismas tiendas, frente al periodo anterior. Dos grandes cadenas venden bien la categoría, pero tienen poco {produto}.\n\nAbajo hay tres frentes para empezar. Son hipótesis para que tu equipo las valide, no órdenes.",
        widget: {
          type: "actions",
          title: "Acciones para este alcance",
          items: [
            { priority: "Alta", title: "Abrir conversación de surtido con la Cadena A", why: "La cadena tiene el 18% de la categoría en la zona. Tiene el producto en el 6% de sus tiendas.", how: "Llevar a la reunión la lista de las tiendas que más venden la categoría." },
            { priority: "Media", title: "Acelerar el resurtido en las ciudades con desabasto persistente", why: "Tres ciudades tienen el 40% de las tiendas sin inventario desde hace más de 15 días.", how: "Revisar pedidos pendientes con el distribuidor de la zona." },
            { priority: "Baja", title: "Seguir al nuevo competidor", why: "Apareció en 31 tiendas en las últimas 4 semanas.", how: "Revisar el mismo alcance dentro de 30 días." }
          ]
        },
        method: [
          "Crecimiento = volumen estimado de la categoría en las mismas tiendas, periodo reciente × anterior.",
          "Expansión: grandes cadenas de la categoría con baja presencia de tu laboratorio.",
          "Cada acción tiene su número y su primer paso."
        ],
        links: [
          { label: "Caso de demanda", href: "#time-demanda" }
        ],
        followups: ["¿Quién ganó participación en la zona?", "¿Dónde tengo inventario detenido?"]
      },
      tendencia: {
        keywords: ["desabasto", "quiebre", "faltante", "falta", "sin inventario", "sin stock", "empeora", "mejora", "evolución", "evolucion", "tendencia", "últimos", "ultimos", "ruptura", "faltando", "sem estoque", "piorando", "melhorando", "piorou", "evolução", "evolucao", "tendência"],
        steps: ["Ubicando el producto…", "Calculando la evolución del desabasto…", "Comparando el desabasto entre cadenas…"],
        answer: "El desabasto de {produto} en {lugar} **subió de 24% a 32% en 30 días**. Una cadena impulsa el alza. Sin ella, el alcance es estable, cerca de 25%.\n\nEsta señal inicia una investigación. No es una conclusión. Después, ve qué tiendas de esa cadena explican el alza.",
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
          "Base diaria (D-1). Cada punto indica si es observado o estimado.",
          "Dinn no supone la causa del desabasto. Requiere investigación."
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
        answer: "Sí. Dinn funciona donde trabaja tu equipo: en la plataforma, en un archivo, en tu BI vía API o en ChatGPT, Claude y Copilot por MCP, con acceso de **solo lectura**.\n\nCon **Dinn Conecta**, los datos de mercado, internos y de farmacias llegan estandarizados a tu BI y a tus agentes. Tus datos internos y la gobernanza siguen contigo.",
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
        answer: "Dinn es inteligencia comercial para el canal farmacéutico. Organiza señales de inventario, rotación y precio de las farmacias. Cuando la fuente lo permite, vincula cada tienda con el CEDIS que la surte. Después nombra las señales: desabasto persistente, inventario detenido, caída de rotación.\n\nCada área usa la misma lectura a su manera. Elige tu área abajo, o pregunta sobre tus productos.",
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
        answer: "Empezamos con **un solo objetivo**: por ejemplo, menos desabasto de un producto en una zona. Tienes 30 días con un acuerdo sencillo y una persona del equipo de Dinn.\n\nLa implementación toma hasta 30 días después de que los prerrequisitos acordados estén listos. Puede empezar solo con fuentes externas.",
        method: [],
        links: [
          { label: "Solicitar demo", href: "demo" },
          { label: "Preguntas frecuentes", href: "#faq" }
        ],
        followups: ["¿Qué es Dinn?", "¿Funciona en ChatGPT o en Copilot?"]
      },
      fallback: {
        steps: ["Entendiendo la pregunta…"],
        answer: "Respondo mejor esto con tus datos. Cada equipo hace estas preguntas con más frecuencia sobre inventario, desabasto, rotación, precio, distribución y competencia. Prueba una:",
        method: [],
        links: [
          { label: "Un uso para cada equipo", href: "#times" }
        ],
        followups: ["¿Dónde encuentra el consumidor mi producto?", "¿Qué tiendas reviso primero?", "¿La falla está en el distribuidor o en las farmacias?", "¿Quién ganó participación en mi zona?"]
      }
    }
  },
  logos: {
    title: "Empresas que trabajan con Dinn"
  },
  teams: {
    eyebrow: "Casos de uso: elige una situación",
    title: "Situaciones concretas del canal, *una por una*",
    askCta: "Pregúntale esto a Dinn",
    deepLink: "Más información",
    seesLabel: "Dinn cruza",
    doesLabel: "El equipo hace",
    items: [
      {
        id: "sac",
        tab: "Atención a clientes",
        kicker: "Atención a clientes",
        title: "“¿Dónde encuentro esta medicina cerca de casa?”",
        story: "Quien atiende ve las farmacias más cercanas con el producto, sus piezas y la rotación estimada.",
        sees: ["Inventario por tienda", "Distancia", "Rotación", "Precio"],
        does: [
          "Indica la farmacia con más probabilidad de tenerlo",
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
        story: "Una fila, no un tablero: las tiendas con más señal y qué revisar en cada una.",
        sees: ["Desabasto por tienda", "Persistencia", "Rotación", "Cadena"],
        does: [
          "Empieza la semana con las tiendas principales",
          "Muestra a la cadena evidencia por tienda, con fecha",
          "Revisa el mismo alcance después de actuar"
        ],
        question: "¿Qué farmacias de mi cartera en Monterrey reviso primero?",
        visual: "queue"
      },
      {
        id: "distribuicao",
        tab: "Distribución",
        kicker: "Distribución y supply",
        title: "¿La falla está en el CEDIS, *en la farmacia o en el pedido?*",
        story: "Dinn vincula el inventario del distribuidor con las farmacias que surte. Ayuda a encontrar dónde puede estar la restricción.",
        sees: ["Inventario en CEDIS", "Cobertura en días", "Desabasto en farmacias", "Rotación de la zona"],
        does: [
          "Separa el faltante de origen de la falla de resurtido",
          "Adelanta el pedido cuando baja la cobertura",
          "Considera reubicar entre zonas"
        ],
        question: "¿La falla está en el distribuidor o en las farmacias de Ciudad de México?",
        visual: "distribution"
      },
      {
        id: "lancamento",
        tab: "Lanzamientos",
        kicker: "Lanzamientos",
        title: "Semana a semana, *a dónde ya llegó el producto.*",
        story: "El equipo sigue la presencia del producto nuevo por cadena y zona. Ve dónde creció o se frenó.",
        sees: ["Presencia por semana", "Cadena y zona", "Llegada al CEDIS"],
        does: [
          "Ve dónde el lanzamiento no ha llegado",
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
        story: "Dinn cuenta los días sin movimiento. Encuentra tiendas detenidas cerca de tiendas con desabasto. Ahí empieza la reubicación.",
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
        story: "Compara la venta estimada de tu laboratorio con la de la categoría en las mismas tiendas. Muestra dónde solo el competidor tiene inventario.",
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
        story: "Inventario, rotación, precio e histórico forman un mapa de oportunidades por categoría (como GLP-1) y estado.",
        sees: ["Categoría por estado", "Participación", "Cadenas candidatas"],
        does: [
          "Elige dónde concentrarse",
          "Elige cadenas para conversar",
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
          { name: "Falla de distribución", cd: 82, pdv: 38, demand: "Alta", read: "CEDIS con inventario, farmacias sin él. Revisa el resurtido." },
          { name: "Restricción de abasto", cd: 8, pdv: 41, demand: "Alta", read: "CEDIS vacío y la zona vendiendo. El problema está antes." },
          { name: "Riesgo de desabasto", cd: 30, pdv: 12, demand: "Alta", read: "La cobertura del CEDIS baja. Adelanta el pedido." },
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
        reading: "Creciste 6% en las mismas tiendas. El mercado creció 11%. La participación bajó porque otros crecieron más.",
        gap: "tiendas solo con competidor"
      },
      demand: {
        app: "Oportunidades",
        questions: ["¿Dónde avanza la categoría?", "¿Dónde pierdo espacio?", "¿Dónde podemos expandirnos?"],
        actions: [
          { priority: "Alta", title: "Abrir conversación de surtido con la Cadena A" },
          { priority: "Media", title: "Acelerar el resurtido en 3 ciudades" },
          { priority: "Baja", title: "Seguir al nuevo competidor" }
        ]
      }
    }
  },
  story: {
    lines: [
      "El canal farmacéutico deja señales sobre tu producto.",
      "Las señales muestran **si está disponible, si rota, a qué precio y si el CEDIS puede resurtirlo.**",
      "Las señales llegan **sueltas**, de fuentes distintas, con distintos niveles de confianza.",
      "Dinn las organiza, muestra su fuente y ayuda a tu equipo a decidir **dónde actuar primero.**"
    ]
  },
  inside: {
    eyebrow: "Cómo funciona Dinn, en un ejemplo",
    stages: [
      {
        name: "Observa",
        title: "Ve un cambio en el canal.",
        desc: "Encuentra un cambio de disponibilidad, precio, rotación o cobertura en las fuentes que sigue.",
        example: "La presencia del producto X cae en 31 de 120 tiendas monitoreadas de la Cadena A, en el Sur.",
        chips: ["Disponibilidad", "Precio", "Rotación", "Cobertura"]
      },
      {
        name: "Valida",
        title: "Muestra la fuente y la confianza.",
        desc: "Muestra fuente, fecha, alcance y nivel de confianza. Cruza señales cuando es posible.",
        example: "24 tiendas se observan en la fuente. 7 se estiman por tiendas comparables, con confianza media. La ausencia aún no es desabasto.",
        chips: ["Fuente y fecha", "Alcance", "Observado o estimado", "Confianza"]
      },
      {
        name: "Entiende",
        title: "Vincula el cambio con el contexto comercial.",
        desc: "Vincula el cambio con producto, cuenta y territorio. No supone la causa.",
        example: "Las tiendas están en 3 ciudades de la misma cadena. El CEDIS tiene saldo. Esto no prueba que cada tienda esté surtida.",
        chips: ["Producto", "Cuenta", "Territorio", "CEDIS que surte"]
      },
      {
        name: "Decide",
        title: "Ayuda a definir el siguiente paso.",
        desc: "Ordena el tema y sugiere el siguiente análisis o acción como hipótesis para que el equipo valide.",
        example: "Prioridad: investigar la Cadena A en el Sur. Empieza por pedidos pendientes antes de hablar de desabasto.",
        chips: ["Desabasto persistente", "Inventario sin movimiento", "Caída de rotación", "Concentración en cadena"]
      },
      {
        name: "Actúa",
        title: "Envía la lectura al equipo que actúa.",
        desc: "Entrega la lectura al equipo o a la herramienta responsable: plataforma, conversación, tu BI o tu IA.",
        example: "La lista va al KAM de la cuenta y al Copilot del equipo, con fuente y fecha.",
        chips: ["Dinn Manager", "Dinn Insights", "Tu IA", "BI y API"]
      },
      {
        name: "Aprende",
        title: "Registra lo que el equipo encontró.",
        desc: "El equipo registra sus hallazgos y sigue el mismo alcance para revisar prioridades.",
        example: "El equipo marca que 5 tiendas tenían pedido pendiente. La semana siguiente, sigue el mismo alcance para revisar la prioridad.",
        chips: ["Retorno del equipo", "Mismo alcance", "Priorización"]
      }
    ],
    outputs: ["Plataforma", "Conversación", "Tu IA", "BI y API", "Campo"],
    signals: ["Desabasto persistente", "Inventario sin movimiento", "Caída de rotación", "Concentración en cadena"]
  },
  delivery: {
    eyebrow: "Plataforma y capacidades",
    title: "IA para el mercado farma *donde trabaja tu equipo*",
    more: "Más información",
    cards: [
      {
        tag: "Dinn Manager",
        title: "La plataforma",
        desc: "Prioridades y contexto para la gestión y la ejecución comercial: desabasto, inventario detenido, distribución y mercado en el mismo alcance."
      },
      {
        tag: "Dinn Insights",
        title: "Una conversación",
        desc: "Explora e interpreta señales. Pregunta en español. Recibe el número, el alcance, la fecha y si es observado o estimado."
      },
      {
        tag: "MCP",
        title: "En tu IA",
        desc: "Interfaz para que ChatGPT, Claude y Copilot autorizados consulten los datos de Dinn, solo lectura."
      },
      {
        tag: "Dinn Conecta",
        title: "En tu BI y en tus agentes",
        desc: "Prepara flujos de datos del canal, estandarizados por producto, tienda y zona, y los entrega a tu BI y a tus agentes. Los datos y la gobernanza siguen contigo."
      }
    ],
    sources: ["IQVIA / Close-Up", "ERP y CRM", "Farmacias"],
    destinations: ["BI", "Copilot", "Agentes", "API"],
    trust: [
      "Observado o estimado, siempre se indica",
      "Base D-1 y consulta puntual en tiendas elegibles",
      "Doble factor por correo · SSO bajo consulta",
      "Implementación en hasta 30 días tras los prerrequisitos y el alcance acordados"
    ],
    note: "La cobertura y la actualización varían por fuente, producto y consulta. Cada fuente necesita licencia, autorización y alcance acordados. Las funciones en tu IA dependen del plan y la configuración."
  },
  faq: {
    title: "FAQ: IA, desabasto y sell-out",
    items: [
      {
        question: "Ya usamos auditorías como IQVIA y Close-Up. ¿Por qué necesitaríamos Dinn?",
        answer: "Dinn **no reemplaza** las auditorías de mercado. Las **complementa**. Las auditorías dan una referencia para la planeación y las lecturas consolidadas, según el producto. Dinn sigue la disponibilidad cada día (D-1), tienda por tienda. Muestra **dónde actuar ahora**, antes de que el faltante se convierta en venta perdida. Con autorización, puedes cruzar ambas lecturas en el mismo alcance."
      },
      {
        question: "¿La implementación exige un gran esfuerzo de TI?",
        answer: "No. Dinn puede empezar con fuentes externas y no necesita tus sistemas internos. La implementación tiene alcance delimitado y toma **hasta 30 días** después de que los prerrequisitos acordados estén listos. Después, tus datos internos pueden enriquecer la lectura."
      },
      {
        question: "¿Dinn es solo otro dashboard?",
        answer: "No. La misma base sirve a tres niveles de decisión: **estratégico** (dónde concentrarse), **táctico** (qué discutir con cada cadena) y **operativo** (qué tiendas verificar primero). La salida es una fila, no una gráfica para interpretar. Cada tienda tiene su señal, la pregunta a responder y el retorno esperado."
      },
      {
        question: "¿Dinn compite con el CRM (Salesforce, Veeva, SalesFarma) que ya usamos?",
        answer: "No. El CRM sigue como el sistema de registro de visitas, pedidos y cartera. Dinn es una capa de inteligencia sobre el canal. Cuando acuerdas la integración, lleva al CRM el **contexto de lo que pasa en las farmacias**. El equipo prioriza en la herramienta que ya usa."
      },
      {
        question: "¿Y si las auditorías empiezan a entregar datos diarios?",
        answer: "Un dato rápido sin prioridad es más ruido. Dinn convierte la lectura del canal en **una prioridad y un siguiente paso**: qué producto, qué cadenas, qué tiendas, con fuente y confianza. La IA prepara el análisis. **El equipo decide** qué hacer."
      },
      {
        question: "¿En cuánto tiempo vemos valor?",
        answer: "Empezamos por **un objetivo**, por ejemplo menos faltantes de un producto en una región, y seguimos el mismo alcance en el tiempo. La primera lectura muestra dónde se concentra el problema. En 30 días ves si la señal persistió o bajó después de las acciones del equipo."
      },
      {
        question: "¿Cómo sigue Dinn el inventario sin depender de nuestras bases?",
        answer: "Agentes consultan los canales digitales de las farmacias y registran lo que informa cada fuente, con ubicación y hora. Este es el **dato observado**. Cuando no hay respuesta directa, Dinn **estima** a partir de tiendas comparables y del historial, con nivel de confianza. Cada registro indica cómo lo obtuvo Dinn."
      },
      {
        question: "¿Los datos diarios no van a sobrecargar al equipo de campo?",
        answer: "No. Dinn reduce el exceso de información. No da un dashboard para que el representante interprete. Da **listas priorizadas**: qué tiendas verificar primero, qué revisar en cada tienda y qué retorno esperar."
      },
      {
        question: "¿Dinn es solo para la fuerza de ventas?",
        answer: "No. La misma lectura atiende a **Trade**, **Comercial y campo**, **Demanda y abastecimiento**, **Inteligencia de mercado**, **Servicio al cliente** y **Tecnología y datos**. Todas las áreas ven la misma fotografía de disponibilidad. Esto reduce conflictos entre áreas."
      },
      {
        question: "¿Se puede probar antes de firmar un contrato largo?",
        answer: "Sí. Abrimos **30 días con un solo objetivo**, con términos simples y una persona del equipo de Dinn. Al final, sabes si conviene seguir, ajustar o parar."
      },
      {
        question: "¿Cómo trata Dinn la seguridad y la confiabilidad de los datos?",
        answer: "El acceso usa **verificación en dos pasos por correo** y control de permisos. El SSO corporativo está disponible bajo consulta. Cada dato es rastreable: fuente, fecha y estado observado o estimado son explícitos. Las conexiones con la IA del cliente son de **solo lectura**."
      },
      {
        question: "¿Qué es Dinn Conecta?",
        answer: "Es la capa que entrega **datos de farma al entorno que tu equipo ya usa**. Dinn conecta fuentes autorizadas (mercado, datos internos y farmacias). Estandariza producto, tienda y región, gestiona la calidad y la actualización, y entrega a tu BI, Copilot, agentes o API. Datos, infraestructura y gobernanza siguen contigo."
      },
      {
        question: "¿Puedo usar Dinn en ChatGPT, Claude o Copilot?",
        answer: "Sí. Dinn se conecta a tu entorno de IA por **MCP**, con acceso autorizado y de **solo lectura**. Pregunta en lenguaje natural. Recibe el análisis con alcance, periodo y límites. Funciones como programación y generación de archivos dependen del plan y la configuración de tu IA."
      },
      {
        question: "¿Dinn cubre todas las farmacias y confirma la causa del desabasto?",
        answer: "No. **La cobertura y la actualización varían por fuente, producto, cadena y consulta**. Cada lectura informa qué cubre. Dinn no confirma causas. Muestra evidencias e hipótesis, y el equipo las valida. La ausencia de producto no siempre es desabasto. El inventario en el centro de distribución no prueba que una tienda esté surtida."
      },
      {
        question: "¿Cuál es la diferencia entre dato observado y estimado?",
        answer: "El dato **observado** es lo que la fuente informó directamente, con ubicación y hora. El dato **estimado** viene de tiendas comparables y del historial cuando no hay respuesta directa, siempre con nivel de confianza. El dato **inferido** es la lectura que Dinn obtiene al combinar señales. Es una hipótesis por validar. La base se actualiza en D-1. En tiendas elegibles, puedes pedir una consulta puntual de disponibilidad."
      }
    ]
  },
  ctaFinal: {
    title: "Convierte las señales del canal en *prioridades comerciales claras*",
    description: "En una demostración, Dinn muestra la lectura de tu portafolio, tu cartera y tus zonas.",
    button: "Solicitar demo",
    secondary: "Volver a preguntar"
  },
  footer: {
    description: "Inteligencia comercial para el canal farmacéutico. Presente en Joinville y Valencia.",
    sectionA: "Acerca de Dinn",
    sectionSolutions: "Soluciones",
    sectionLegal: "Legal",
    termos: "Términos",
    privacidade: "Privacidad",
    cookies: "Cookies",
    suporte: "Soporte",
    ctaTitle: "¿Listo para empezar?",
    ctaDesc: "Ve Dinn con tus propios productos.",
    ctaButton: "Solicitar demo",
    rights: "© 2026 Dinn Tecnologia Ltda. Todos los derechos reservados.",
    legalName: "Dinn Tecnologia Ltda.",
    cnpj: "57.639.944/0001-20",
    address: "Rua Dona Francisca, 8300, Bloco Ágora, sala 5, Distrito Industrial, Joinville, SC, CEP 89.219-600",
    cities: "Joinville · Valencia",
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
        footer: "Los usuarios pueden solicitar estos derechos enviando un correo electrónico a <a href=\"mailto:vinicius.silva@diwe.com.br\" style=\"color: var(--primary); text-decoration: underline;\">vinicius.silva@diwe.com.br</a>."
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
          "<strong>Oficial de Protección de Datos:</strong> DINN ha designado al Sr. Vinicius Fernandes Silva como el oficial de datos, a quien se puede contactar a través de <a href=\"mailto:vinicius.silva@diwe.com.br\" style=\"color: var(--primary); text-decoration: underline;\">vinicius.silva@diwe.com.br</a>."
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
    noResultsDesc: "Cambia los términos de búsqueda.",
    readArticle: "Leer artículo",
    viewContent: "Ver contenido",
    minRead: "min de lectura",
    backToBlog: "Volver al Blog",
    ctaTitle: "Convierte datos en decisiones",
    ctaText: "Dinn muestra dónde falta producto en las farmacias, qué cambió y dónde actuar primero, con fuente y confianza.",
    ctaBtn: "Solicitar demostración",
    recommended: "Recomendados para ti",
    writtenBy: "Por",
    allCategories: "Todos",
    defaultCategory: "Artículo",
    categories: {
      gestao: "Gestión",
      estoque: "Inventario",
      precos: "Precios",
      mercado: "Mercado",
      tendencias: "Tendencias",
      estrategia: "Estrategia",
      tecnologia: "Tecnología"
    }
  }
};
