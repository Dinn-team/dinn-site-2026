// Textos de las páginas internas del sitio (plataforma, soluciones por área,
// confianza, clientes, recursos) y de las secciones nuevas de la home (áreas y
// contenidos). Versión en español de pt.pages.ts: mismas claves, mismo orden.
// Regla editorial: toda afirmación dice qué observa Dinn, qué estima, qué
// ayuda a interpretar y qué depende de la validación del cliente.

export const pagesEs = {
  areas: {
    eyebrow: "Para tu área",
    title: "Empieza por el problema de *tu equipo*",
    intro: "Cada área llega con una pregunta distinta. Elige la tuya y mira las decisiones que se apoyan, un ejemplo y los límites de la lectura.",
    open: "Ver Dinn para esta área",
    questionPrefix: "La pregunta:"
  },

  contentTeaser: {
    eyebrow: "Recursos",
    title: "Para quien aún no está listo para una demostración",
    items: [
      {
        type: "Guía",
        title: "Ausencia, desabasto, surtido y rotación: ¿cuál es la diferencia?",
        desc: "Las cuatro lecturas que más se confunden en el canal, con qué verificar antes de actuar.",
        href: "/recursos/ausencia-ruptura-sortimento-giro"
      },
      {
        type: "Caso demostrativo",
        title: "Del desabasto en seis tiendas a la fila de verificación de la semana",
        desc: "El flujo completo, de la señal al aprendizaje, con valores de ejemplo.",
        href: "/clientes#caso"
      },
      {
        type: "Blog",
        title: "Análisis y artículos sobre el canal farmacéutico",
        desc: "Desabasto de inventario, ejecución comercial e inteligencia de datos en farma.",
        href: "/blog"
      }
    ]
  },

  pageCta: {
    title: "Mira cómo funciona esto con tus productos",
    desc: "En una demostración, Dinn muestra la lectura con tu portafolio, tu cartera y tus zonas.",
    button: "Solicitar demo",
    secondary: "Ver todas las soluciones"
  },

  solutions: {
    meta: {
      title: "Soluciones por área | Dinn",
      description: "Dinn para Inteligencia y Pricing, Trade y campo, Supply y distribución, Atención a clientes, Marketing y lanzamientos, y TI y gobernanza: decisiones apoyadas, ejemplos y límites."
    },
    index: {
      eyebrow: "Soluciones",
      title: "Una lectura del canal, *traducida para cada área*",
      lead: "La base de señales es la misma. Lo que cambia es la pregunta, la decisión y lo que cada área necesita ver antes de actuar."
    },
    page: {
      eyebrow: "Soluciones",
      back: "Todas las soluciones",
      questionLabel: "La pregunta que trae a tu área aquí",
      decisionsLabel: "Decisiones que Dinn apoya",
      exampleLabel: "Un ejemplo, paso a paso",
      exampleNote: "Ejemplo ilustrativo, con valores ficticios.",
      limitsLabel: "Límites de la lectura",
      useCasesLabel: "Situaciones concretas de esta área",
      useCaseOpen: "Ver en la home",
      trustCta: "Cómo tratamos origen, fecha y confianza",
      otherLabel: "Otras áreas"
    },
    items: [
      {
        slug: "inteligencia-pricing",
        name: "Inteligencia y Pricing",
        short: "Entiende los movimientos de disponibilidad, precio, rotación y competencia.",
        question: "¿Cuál es el origen y hasta dónde puedo confiar?",
        title: "Movimientos de precio, rotación y competencia, *con el origen a la vista*",
        lead: "Para quien necesita explicar una cifra antes de llevarla adelante: cada lectura trae fuente, fecha, cobertura y límite.",
        decisions: [
          "Separar un cambio puntual de un movimiento que persiste en el tiempo.",
          "Distinguir la caída de participación de la caída de venta, en las mismas tiendas.",
          "Complementar los datos consolidados de mercado cuando la decisión pide más granularidad y contexto operativo."
        ],
        example: {
          title: "Tu laboratorio creció 6% en las mismas tiendas; la categoría, 11%",
          steps: [
            "Señal: la participación cae en la región.",
            "Validación: solo entran tiendas comparables, presentes en las dos ventanas de tiempo.",
            "Lectura: la caída viene de que otros productos crecieron más, no de que la venta haya disminuido.",
            "Siguiente paso: mirar las tiendas donde solo aparece con inventario la competencia."
          ]
        },
        limits: [
          "La venta se estima por el movimiento de inventario, no por un sell-out auditado.",
          "Los datos de competidores aparecen agregados.",
          "Dinn complementa las auditorías de mercado; no las reemplaza."
        ],
        useCases: ["concorrencia", "demanda"]
      },
      {
        slug: "trade-kam-campo",
        name: "Trade, KAM y Campo",
        short: "Prioriza cuentas, territorios y conversaciones con el contexto más reciente.",
        question: "¿A quién priorizo y qué llevo a la conversación?",
        title: "Una fila de tiendas y cuentas, *con qué verificar en cada una*",
        lead: "En lugar de un tablero para interpretar, una lista priorizada con la señal, la fecha y la pregunta por responder.",
        decisions: [
          "Empezar la semana por las tiendas que más pesan en el desabasto del alcance.",
          "Llevar a la cadena evidencia por tienda, con fecha, en lugar de una impresión general.",
          "Revisar el mismo alcance después de la acción y registrar el retorno."
        ],
        example: {
          title: "6 de las 40 tiendas de la cartera concentran 70% de la señal",
          steps: [
            "Señal: desabasto persistente en tiendas de la cartera, en la última semana.",
            "Validación: nivel calculado como días sin inventario ÷ días observados en los últimos 30 días.",
            "Fila: las tiendas en orden, con qué verificar en cada una (¿pedido pendiente? ¿fuera del anaquel?).",
            "Retorno: lo que el equipo encontró vuelve y reordena la fila."
          ]
        },
        limits: [
          "Dinn prepara la lista; quien arma la agenda es tu equipo.",
          "Nada se escribe en el CRM por cuenta propia: la lectura sirve para preparar la visita.",
          "Las tiendas que nunca vendieron el producto quedan fuera, para no inflar el desabasto."
        ],
        useCases: ["campo", "medico"]
      },
      {
        slug: "supply-distribuicao",
        name: "Supply y Distribución",
        short: "Investiga la cobertura, la disponibilidad y las posibles restricciones de abasto.",
        question: "¿Dónde puede haber un problema de cobertura o de abasto?",
        title: "¿La falla está en el CEDIS, en la reposición o en la farmacia? *Mira los dos lados.*",
        lead: "La lectura cruza el inventario en el distribuidor con la disponibilidad en las farmacias de la zona, siempre con salvedades causales explícitas.",
        decisions: [
          "Separar la falta en el origen de la falla de reposición.",
          "Anticipar el pedido cuando cae la cobertura del CEDIS.",
          "Evaluar una reubicación donde hay inventario detenido cerca de tiendas en desabasto."
        ],
        example: {
          title: "CEDIS con saldo y farmacias sin el producto",
          steps: [
            "Señal: 38% de las farmacias de la zona están sin el producto.",
            "Validación: cobertura del CEDIS = inventario en el CEDIS ÷ venta diaria estimada de la zona.",
            "Lectura: el patrón apunta a una falla de distribución o de reposición, no a una falta en el origen.",
            "Antes de concluir: confirmar los pedidos pendientes en las cadenas afectadas."
          ]
        },
        limits: [
          "El inventario en el CEDIS no prueba inventario en la farmacia: la lectura cruza las dos puntas.",
          "El patrón es una hipótesis; la causa exige investigación.",
          "El movimiento observado no equivale a una venta confirmada."
        ],
        useCases: ["distribuicao", "parado"]
      },
      {
        slug: "sac-customer-experience",
        name: "Atención a clientes y Customer Experience",
        short: "Orienta a los consumidores con claridad sobre disponibilidad y cercanía.",
        question: "¿Cómo oriento a alguien sin inducirlo al error?",
        title: "Dónde el consumidor tiene buena probabilidad de encontrar el producto, *y con qué seguridad*",
        lead: "Disponibilidad, cercanía y actualización en la misma pantalla, con la fuente y la fecha de cada indicación.",
        decisions: [
          "Indicar la farmacia cercana con mayor probabilidad de tener el producto.",
          "Saber si la información es observada o estimada antes de orientar.",
          "Mostrar al trade dónde la búsqueda no encuentra producto."
        ],
        example: {
          title: "Las cinco farmacias más cercanas al consumidor",
          steps: [
            "Entrada: la dirección del consumidor.",
            "Lectura: inventario observado (D-1) o estimado por tiendas comparables, con la confianza.",
            "Orientación: disponibilidad y cercanía, no el menor precio.",
            "Patrón: dos tiendas sin el producto desde hace una semana pasan a la agenda de reposición."
          ]
        },
        limits: [
          "La actualización es D-1; en tiendas elegibles, hay consulta puntual de disponibilidad.",
          "Probabilidad de inventario no es garantía de inventario, y la orientación debe decirlo.",
          "La cobertura varía por cadena y por fuente."
        ],
        useCases: ["sac"]
      },
      {
        slug: "marketing-lancamentos",
        name: "Marketing y Lanzamientos",
        short: "Sigue la presencia, la evolución de la cobertura y las señales de ejecución del lanzamiento.",
        question: "¿La ejecución avanza donde debería?",
        title: "Semana a semana, *dónde ya llegó el lanzamiento* y dónde se trabó",
        lead: "Presencia por cadena y región a lo largo del tiempo, comparada con el plan que definió tu equipo.",
        decisions: [
          "Ver dónde se aceleró el lanzamiento y dónde sigue por debajo de lo esperado.",
          "Separar un problema de sell-in de un problema de reposición.",
          "Comparar la evolución por cohorte y por canal con la meta definida."
        ],
        example: {
          title: "Seis semanas después del lanzamiento",
          steps: [
            "Señal: el producto aparece en 54% de las farmacias monitoreadas.",
            "Validación: presencia = farmacias con inventario ÷ farmacias monitoreadas en el alcance.",
            "Lectura: se aceleró en las grandes cadenas y sigue por debajo de 20% en las independientes.",
            "Siguiente pregunta: ¿el CEDIS ya recibió el producto en las regiones adonde no llegó?"
          ]
        },
        limits: [
          "La semana 1 comienza en la fecha de lanzamiento definida por tu equipo.",
          "La separación por canal sigue lo que cada fuente permite identificar.",
          "La presencia en las farmacias no es sell-out."
        ],
        useCases: ["lancamento"]
      },
      {
        slug: "ti-dados-governanca",
        name: "TI, Datos y Gobernanza",
        short: "Integra señales con trazabilidad, control de acceso y límites explícitos.",
        question: "¿Cómo se integra, se protege y se gobierna?",
        title: "Señales que llegan a tu entorno, *con trazabilidad y control de acceso*",
        lead: "API, BI y la IA del cliente consultan la misma base, con el alcance autorizado y el origen de cada dato preservado.",
        decisions: [
          "Elegir por dónde consumir: plataforma, archivo, API, BI o la IA del cliente.",
          "Definir quién accede a qué, con verificación en dos pasos y SSO habilitable.",
          "Mantener los datos internos, la infraestructura y la gobernanza bajo el control del cliente."
        ],
        example: {
          title: "Una pregunta hecha en la IA del propio cliente",
          steps: [
            "Entrada: el equipo pregunta en ChatGPT, en Claude o en Copilot.",
            "Acceso: la IA autorizada consulta Dinn por MCP, solo lectura.",
            "Respuesta: alcance, periodo, fuente y límites acompañan la cifra.",
            "Gobernanza: el uso queda dentro del plan y de la configuración del entorno del cliente."
          ]
        },
        limits: [
          "El MCP es una interfaz de consulta; no reemplaza la infraestructura de datos.",
          "Cada fuente depende de la licencia, la autorización y el alcance acordados.",
          "Funciones como programación y generación de archivos dependen del plan y de la configuración de la IA del cliente."
        ],
        useCases: []
      }
    ]
  },

  platform: {
    meta: {
      title: "Plataforma | Dinn",
      description: "Cómo funciona Dinn: observa, valida, ayuda a entender y decidir, entrega a quien ejecuta y aprende del retorno. Papel de Stock, Manager, Insights, MCP y Conecta."
    },
    hero: {
      eyebrow: "Plataforma",
      title: "Un sistema para ir de la *señal a la acción comercial*",
      lead: "Dinn observa, valida, ayuda a entender y a decidir, lleva el resultado a quien ejecuta y aprende del retorno. Cada parte tiene un papel claro."
    },
    cycle: {
      title: "El ciclo, en seis pasos",
      intro: "De la señal suelta a la acción registrada. El ejemplo completo, con un único caso, está en la home."
    },
    parts: {
      title: "Cinco partes, cada una con su papel",
      intro: "Trabajan juntas, pero no son lo mismo. Cada una dice también lo que no hace.",
      notLabel: "Lo que no es",
      items: [
        {
          tag: "Dinn Stock",
          title: "La lectura de disponibilidad",
          desc: "Organiza la lectura de disponibilidad y de las señales relacionadas con el canal, con el origen y la confianza de cada punto.",
          not: "La ausencia de producto es una señal por validar, no un desabasto confirmado."
        },
        {
          tag: "Dinn Manager",
          title: "La gestión y la ejecución",
          desc: "Lleva prioridades y contexto a la gestión y a la ejecución comercial: desabasto, inventario detenido, distribución y mercado en el mismo alcance.",
          not: "La decisión sigue con el equipo; la plataforma prepara la lectura."
        },
        {
          tag: "Dinn Insights",
          title: "La conversación con las señales",
          desc: "Apoya la exploración y la interpretación asistida de las señales disponibles: pregunta en español y recibe el número, el alcance, la fecha y el método.",
          not: "Las hipótesis aparecen como hipótesis; Dinn no presume la causa."
        },
        {
          tag: "MCP",
          title: "La interfaz para tu IA",
          desc: "Permite que herramientas autorizadas, como ChatGPT, Claude y Copilot, consulten los datos y las capacidades de Dinn, con acceso de solo lectura.",
          not: "No es la infraestructura de datos: es una forma de consultar."
        },
        {
          tag: "Dinn Conecta",
          title: "Los flujos de datos",
          desc: "Prepara y opera flujos de datos especializados para el contexto del cliente, estandarizando producto, tienda y zona para el BI y los agentes.",
          not: "No cierra por sí solo el ciclo de ejecución: entrega datos a quien ejecuta."
        }
      ]
    },
    data: {
      title: "Datos e integraciones",
      intro: "La misma regla vale en toda la plataforma: decir de dónde vino, cuándo se observó y hasta dónde llega la cobertura.",
      items: [
        {
          title: "De dónde vienen las señales",
          text: "De fuentes digitales de las farmacias, consultadas por agentes. Cuando hay autorización, también de mercado (IQVIA / Close-Up) y de datos internos (ERP y CRM)."
        },
        {
          title: "Con qué actualización",
          text: "Base en D-1, con consulta puntual de disponibilidad en tiendas elegibles. La cobertura y la actualización varían por fuente, producto, cadena y consulta."
        },
        {
          title: "Adónde van",
          text: "Plataforma, archivo, API, BI, agentes y la IA del cliente, por MCP. Los datos y la gobernanza siguen con el cliente."
        },
        {
          title: "Por dónde empezar",
          text: "Un objetivo y un alcance. Dinn puede empezar solo con fuentes externas, y la implementación toma hasta 30 días tras los prerrequisitos y el alcance acordados."
        }
      ]
    }
  },

  trust: {
    meta: {
      title: "Confianza | Dinn",
      description: "Origen, fecha y límites de cada señal: dato observado, estimado e inferido, cobertura, acceso, integraciones e implementación."
    },
    hero: {
      eyebrow: "Confianza",
      title: "Origen, fecha y límites *en cada señal*",
      lead: "TI, datos, compliance y compras encuentran aquí cómo Dinn trata el origen del dato, el acceso y la implementación."
    },
    signals: {
      title: "Tres tipos de señal, siempre identificados",
      intro: "Dinn muestra, en el contexto de uso, cuál es la naturaleza de cada información antes de que se convierta en prioridad.",
      exampleLabel: "Ejemplo",
      items: [
        {
          name: "Observado",
          def: "Lo que la fuente informó directamente, con lugar y hora.",
          example: "La farmacia muestra 12 unidades en el canal digital, consultado hoy a las 06h."
        },
        {
          name: "Estimado",
          def: "Calculado a partir de tiendas comparables y del historial cuando la fuente no responde, siempre con nivel de confianza.",
          example: "Sin respuesta de la tienda, el inventario se estima por tiendas parecidas de la misma cadena."
        },
        {
          name: "Inferido",
          def: "La lectura que sale de la combinación de señales, presentada como hipótesis para que el equipo valide.",
          example: "Varias tiendas sin producto y el CEDIS con saldo sugieren una falla de reposición, no una falta en el origen."
        }
      ]
    },
    notProve: {
      title: "Lo que una señal no prueba",
      intro: "Nombrar el límite es parte del producto. Es lo que permite al equipo actuar sin ser inducido al error.",
      items: [
        "La ausencia de producto no es necesariamente desabasto.",
        "El producto en el centro de distribución no prueba el abasto de una tienda específica.",
        "Un saldo constante no prueba, por sí solo, que no hubo venta.",
        "Una recomendación no es una acción automatizada: la decisión y la ejecución siguen con el equipo."
      ]
    },
    coverage: {
      title: "Cobertura y actualización",
      items: [
        { title: "Frecuencia", text: "Base en D-1. En tiendas elegibles, hay consulta puntual de disponibilidad." },
        { title: "Cobertura", text: "Varía por fuente, producto, cadena y consulta, y cada lectura informa qué cubre." },
        { title: "Fuentes de mercado e internas", text: "Entran cuando hay licencia, autorización y alcance acordados." }
      ]
    },
    security: {
      title: "Acceso, seguridad y privacidad",
      items: [
        { title: "Acceso", text: "Verificación en dos pasos por correo y control de permisos. La integración con la identidad corporativa (SSO) puede habilitarse." },
        { title: "IA del cliente", text: "Las conexiones por MCP son autorizadas y de acceso de solo lectura." },
        { title: "Datos y gobernanza", text: "Los datos internos, la infraestructura y la gobernanza siguen con el cliente." },
        { title: "Privacidad", text: "El tratamiento de datos personales sigue la LGPD y está descrito en la Política de Privacidad." }
      ],
      privacyLink: "Leer la Política de Privacidad"
    },
    deploy: {
      title: "Implementación",
      text: "La implementación tiene alcance delimitado y se realiza en hasta 30 días después de que los prerrequisitos y el alcance estén acordados. Puede empezar solo con fuentes externas, sin depender de los sistemas internos del cliente."
    },
    questions: {
      title: "Preguntas que TI y compras suelen hacer",
      items: [
        {
          question: "¿Qué datos de mi empresa necesita Dinn?",
          answer: "Para empezar, ninguno: la lectura puede partir de fuentes externas. Los datos internos entran cuando tenga sentido y con acuerdo, para enriquecer el contexto."
        },
        {
          question: "¿Quién controla los datos y la gobernanza?",
          answer: "El cliente. Dinn prepara y entrega; los datos, la infraestructura y la gobernanza siguen contigo."
        },
        {
          question: "¿Cómo accede nuestra IA a Dinn?",
          answer: "Por MCP, con acceso autorizado y de solo lectura. Funciones como programación y generación de archivos dependen del plan y de la configuración de la IA."
        },
        {
          question: "¿Dónde encuentro soporte y el canal de incidentes?",
          answer: "En la página de Soporte, con orientaciones para registrar un problema y activar el canal contratado."
        }
      ],
      supportLink: "Abrir la página de Soporte"
    },
    cta: {
      title: "¿Necesitas homologar con TI, datos o compras?",
      desc: "Conversamos sobre los requisitos de tu entorno antes de cualquier implementación.",
      button: "Conversar sobre requisitos"
    }
  },

  customers: {
    meta: {
      title: "Clientes y casos | Dinn",
      description: "Empresas que trabajan con Dinn, testimonios y un caso demostrativo de la señal a la acción, con origen, validación y aprendizaje."
    },
    hero: {
      eyebrow: "Clientes y casos",
      title: "Quién trabaja con Dinn y *qué cambia en la práctica*",
      lead: "Empresas, testimonios y un caso completo: de la señal observada al aprendizaje del equipo."
    },
    caseBlock: {
      tag: "Caso demostrativo · valores de ejemplo",
      title: "Del desabasto en seis tiendas a la fila de verificación de la semana",
      intro: "Este caso no es de producción. Muestra el flujo que Dinn sigue con los datos del cliente: cada paso existe, y los números aquí son ilustrativos.",
      steps: [
        { label: "Situación", text: "Un equipo de trade con 40 tiendas en la cartera y tiempo para visitar ocho por semana." },
        { label: "Señal observada", text: "Seis tiendas concentran 70% de la señal de desabasto del producto en la última semana." },
        { label: "Cómo se validó", text: "El desabasto de cada tienda es la proporción de días sin inventario en los últimos 30 días. Las tiendas que nunca vendieron el producto quedaron fuera, y cada punto dice si es observado o estimado." },
        { label: "Decisión apoyada", text: "Empezar la semana por esas seis tiendas, con una pregunta por tienda: ¿hay pedido pendiente? ¿El producto está fuera del anaquel?" },
        { label: "Acción tomada", text: "El equipo visitó las tiendas de la fila y llevó a la cadena la evidencia por tienda, con fecha." },
        { label: "Aprendizaje", text: "El retorno de cada visita reordena la fila la semana siguiente. El caso no trae resultado financiero: muestra el flujo." }
      ]
    },
    rules: {
      title: "Cómo contamos los casos",
      items: [
        "Un caso real y un caso demostrativo siempre se identifican como tales.",
        "Cuando hay un resultado medible, informamos periodo, universo y método.",
        "Cuando no lo hay, reportamos la ganancia operativa comprobada, sin convertirla en impacto financiero."
      ]
    },
    cta: {
      title: "¿Quieres ver un caso con tu portafolio?",
      desc: "La demostración parte de tus productos, tu cartera y tus zonas.",
      button: "Solicitar demo"
    }
  },

  resources: {
    meta: {
      title: "Recursos | Dinn",
      description: "Guías, casos y artículos para entender el canal farmacéutico: desabasto, surtido, rotación y cómo convertir señales en acción comercial."
    },
    hero: {
      eyebrow: "Recursos",
      title: "Para entender el canal *antes de decidir*",
      lead: "Guías, casos y artículos escritos a partir de lo que Dinn observa en el canal farmacéutico."
    },
    items: [
      {
        type: "Guía",
        title: "Ausencia, desabasto, surtido y rotación: ¿cuál es la diferencia?",
        desc: "Las cuatro lecturas que más se confunden en el canal, con qué verificar antes de actuar.",
        href: "/recursos/ausencia-ruptura-sortimento-giro",
        updated: "Actualizado el 14 de octubre de 2026"
      },
      {
        type: "Caso demostrativo",
        title: "Del desabasto en seis tiendas a la fila de verificación de la semana",
        desc: "El flujo completo, de la señal al aprendizaje, con valores de ejemplo.",
        href: "/clientes#caso",
        updated: "Actualizado el 14 de octubre de 2026"
      },
      {
        type: "Blog",
        title: "Blog de Dinn",
        desc: "Análisis y artículos sobre desabasto de inventario, ejecución comercial e inteligencia de datos en farma.",
        href: "/blog",
        updated: ""
      }
    ],
    openItem: "Abrir",
    guide: {
      back: "Todos los recursos",
      author: "Equipo Dinn",
      updated: "Actualizado el 14 de octubre de 2026",
      relatedTitle: "Sigue por aquí",
      related: [
        { label: "Cómo trata Dinn el origen, la fecha y los límites", href: "/confianca" },
        { label: "Dinn para Trade, KAM y Campo", href: "/solucoes/trade-kam-campo" }
      ],
      slugs: {
        "ausencia-ruptura-sortimento-giro": {
          meta: {
            title: "Ausencia, desabasto, surtido y rotación: ¿cuál es la diferencia? | Dinn",
            description: "Cuatro lecturas que se confunden en el canal farmacéutico y qué verificar antes de actuar: ausencia, desabasto, surtido y rotación."
          },
          eyebrow: "Guía",
          title: "Ausencia, desabasto, surtido y rotación: ¿cuál es la diferencia?",
          lead: "Cuatro palabras que aparecen en el mismo reporte y piden acciones distintas. Separarlas evita mandar al equipo de campo a resolver el problema equivocado.",
          sections: [
            {
              heading: "Ausencia",
              body: "Es no encontrar el producto en una tienda, en una fecha, en una fuente. Es una señal, no una conclusión: puede ser desabasto, falta de surtido o simplemente una consulta sin respuesta."
            },
            {
              heading: "Desabasto",
              body: "Es la ausencia en una tienda que normalmente vende el producto. En Dinn, el desabasto de una tienda es la proporción de días sin inventario sobre los días observados en los últimos 30 días. Por eso un desabasto persistente pesa más que un día aislado de ausencia."
            },
            {
              heading: "Surtido",
              body: "Es que la tienda trabaje, o no, ese producto. Las tiendas que nunca vendieron el artículo quedan fuera del cálculo de desabasto, para no inflar la cifra. En ese caso la conversación con la cadena es sobre surtido, no sobre reposición."
            },
            {
              heading: "Rotación",
              body: "Es la velocidad con que sale el inventario, por ejemplo en unidades por día. Con inventario en la tienda, la rotación indica demanda; al dividir el inventario entre la rotación media diaria, se obtiene la cobertura en días."
            }
          ],
          tableTitle: "Qué verificar antes de actuar",
          table: {
            columns: ["Lo que aparece", "Lo que puede ser", "Qué verificar"],
            rows: [
              ["Producto ausente en un día", "Desabasto, surtido o consulta sin respuesta", "Si la ausencia se repite y si la tienda suele vender el producto"],
              ["Ausencia que persiste", "Desabasto recurrente", "Pedidos pendientes y reposición de la cadena"],
              ["Tienda que nunca vendió el artículo", "Tema de surtido", "La conversación de portafolio con la cadena"],
              ["Inventario alto y rotación baja", "Inventario detenido", "Días sin movimiento y tiendas en desabasto cercanas"]
            ]
          },
          limitsTitle: "Lo que el dato no prueba",
          limits: [
            "El producto en el centro de distribución no prueba el abasto de una tienda.",
            "Un saldo constante no prueba, por sí solo, que no hubo venta.",
            "El movimiento observado no equivale a una venta confirmada."
          ]
        }
      }
    }
  },

  scenes: {
    scrollHint: "Desplázate para ver cómo se forma la lectura",
    items: {
      "inteligencia-pricing": {
        title: "Tu laboratorio frente a la categoría, en las mismas tiendas",
        lab: "Tu laboratorio",
        market: "Categoría",
        sameStores: "Mismas tiendas",
        onlyCompetitor: "Tiendas solo con el competidor"
      },
      "trade-kam-campo": {
        title: "De las 40 tiendas de la cartera a la fila de verificación de la semana",
        portfolio: "40 tiendas en la cartera",
        concentrated: "6 tiendas · 70% de la señal",
        queue: "Fila de la semana",
        feedback: "El retorno del equipo reordena la fila"
      },
      "supply-distribuicao": {
        title: "Inventario en el CEDIS cruzado con la disponibilidad en las farmacias de la región",
        cd: "CEDIS",
        cdCoverage: "Cobertura del CEDIS · 24 días",
        pharmacies: "Farmacias de la región",
        out: "38% sin el producto",
        verdict: "Quiebre de distribución",
        verify: "Confirmar pedidos pendientes"
      },
      "sac-customer-experience": {
        title: "Farmacias alrededor de la dirección del consumidor, con disponibilidad",
        you: "Consumidor",
        nearest: "Más cercana · 0,8 km",
        insight: "Búsqueda repetida · 2 tiendas sin inventario hace 7 días"
      },
      "marketing-lancamentos": {
        title: "Presencia del lanzamiento semana a semana, por canal y región",
        largeChains: "Grandes cadenas",
        independents: "Independientes",
        reached: "54% de las farmacias",
        regions: "Presencia por región, semana a semana"
      },
      "ti-dados-governanca": {
        title: "Fuentes, Dinn y destinos, con acceso controlado",
        sources: "Fuentes",
        destinations: "Destinos",
        hub: "Dinn",
        readOnly: "Solo lectura",
        access: "Dos factores · SSO habilitable · permisos"
      }
    }
  },

  areaVisuals: {
    uiKicker: "Cómo se ve en Dinn",
    uiNote: "Pantalla recreada con valores de ejemplo.",
    answerKicker: "El ejemplo, como lo responde Dinn Insights",
    provenanceTitle: "Qué dice cada dato sobre sí mismo",
    connections: {
      app: "Conexiones y acceso",
      rows: [
        { name: "ChatGPT", channel: "Por MCP", status: "Solo lectura" },
        { name: "Claude", channel: "Por MCP", status: "Solo lectura" },
        { name: "Copilot", channel: "Por MCP", status: "Solo lectura" },
        { name: "BI", channel: "Por API o Dinn Conecta", status: "Autorizado" },
        { name: "Agentes", channel: "Por Dinn Conecta", status: "Autorizado" }
      ],
      accessTitle: "Acceso",
      access: ["Verificación en dos factores por correo", "SSO habilitable", "Control de permisos"]
    },
    aiAnswer: {
      tools: ["ChatGPT", "Claude", "Copilot"],
      question: "¿Qué tiendas de mi cartera en São Paulo verifico primero?",
      answer: "Seis tiendas concentran la mayor parte de la señal de desabasto de la última semana. La lista indica qué revisar en cada una.",
      meta: [
        { label: "Alcance", value: "Cartera, São Paulo" },
        { label: "Período", value: "Últimos 7 días" },
        { label: "Fuente", value: "Dinn, vía MCP" },
        { label: "Naturaleza", value: "Observado o estimado, siempre indicado" }
      ],
      mode: "Solo lectura"
    }
  }
};
