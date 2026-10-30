import { offerEs } from './es.offer';
import { platformVizEs } from './es.platform';

// Textos de las páginas internas del sitio (plataforma, soluciones por área,
// confianza, clientes, recursos) y de las secciones nuevas de la home (áreas y
// contenidos). Versión en español de pt.pages.ts: mismas claves, mismo orden.
// Regla editorial: toda afirmación dice qué observa Dinn, qué estima, qué
// ayuda a interpretar y qué depende de la validación del cliente.

export const pagesEs = {
  platformViz: platformVizEs,
  ...offerEs,
  areas: {
    eyebrow: "Para tu área",
    title: "Empieza por el problema de *tu equipo*",
    intro: "Cada área tiene una pregunta distinta. Elige la tuya. Mira las decisiones que Dinn apoya, un ejemplo y los límites.",
    open: "Ver Dinn para esta área",
    questionPrefix: "La pregunta:"
  },

  contentTeaser: {
    eyebrow: "Recursos",
    title: "¿Aún no estás listo para una demostración?",
    items: [
      {
        type: "Blog",
        title: "Artículos sobre el canal farmacéutico",
        desc: "Desabasto, ejecución comercial y datos en farma.",
        href: "/blog"
      },
      {
        type: "Caso de uso",
        title: "¿Cuántos días de producto quedan en Fortaleza?",
        desc: "La respuesta estaba en el inventario detenido de todas las tiendas de la ciudad.",
        href: "/recursos/casos/dias-de-estoque-fortaleza"
      },
      {
        type: "Novedades",
        title: "Lo que entró en producción en Dinn",
        desc: "Cada novedad de la plataforma, en lenguaje simple, por fecha.",
        href: "/recursos/changelog"
      }
    ]
  },

  contact: {
    meta: {
      title: "Contacto | Dinn",
      description: "Cuéntanos qué decisión del canal farmacéutico quieres mejorar. Una persona del equipo de Dinn responde."
    },
    navLabel: "Contacto",
    hero: {
      eyebrow: "Contacto",
      title: "Cuéntanos qué quieres *mejorar en el canal*",
      lead: "Llena unos pocos campos. Una persona del equipo lee tu solicitud y responde con el siguiente paso."
    },
    after: {
      title: "Qué pasa después",
      mail: "¿Prefiere correo? Escriba a Edu:",
      steps: [
        { title: "Recibimos tu solicitud", text: "Llega al equipo con tu rol y tu decisión." },
        { title: "Una persona responde", text: "Recibes una respuesta por correo en pocos días hábiles." },
        { title: "Tú decides el ritmo", text: "Si tiene sentido, agendamos una llamada corta. Si no, paramos." }
      ]
    },
    form: {
      title: "Habla con Dinn",
      lead: "Toma menos de un minuto.",
      email: "Correo corporativo",
      emailPlaceholder: "tu@tuempresa.com",
      emailHint: "Usamos el dominio para identificar la empresa.",
      company: "Empresa",
      role: "Tu rol",
      decision: "Decisión que quieres mejorar",
      choose: "Selecciona",
      name: "Tu nombre",
      optional: "(opcional)",
      roles: [
        { value: "comercial_trade", label: "Comercial o Trade" },
        { value: "inteligencia_dados", label: "Inteligencia o Datos" },
        { value: "marca_lancamento", label: "Marca o Lanzamiento" },
        { value: "operacao_campo", label: "Operación de campo" },
        { value: "ti_seguranca_compras", label: "TI, Seguridad o Compras" },
        { value: "direcao", label: "Dirección o Ejecutivo" },
        { value: "outro", label: "Otro" }
      ],
      decisions: [
        { value: "disponibilidade_execucao", label: "Disponibilidad y ejecución en el punto de venta" },
        { value: "confianca_dado", label: "Confianza en el dato" },
        { value: "lancamento", label: "Lanzamiento de producto" },
        { value: "preco", label: "Precio frente al mercado" },
        { value: "integracao", label: "Integración con BI, CRM o agentes" }
      ],
      consent: "Autorizo a Dinn a usar estos datos para responder a esta solicitud y enviar comunicaciones relacionadas.",
      privacy: "Política de privacidad",
      submit: "Enviar solicitud",
      sending: "Enviando…",
      fine: "Solo usamos lo que completas aquí. Sin listas de correo masivas."
    },
    errors: {
      required: "Completa este campo.",
      requiredChoice: "Selecciona una opción.",
      emailInvalid: "Ingresa un correo válido.",
      emailPersonal: "Usa el correo de tu empresa. No aceptamos direcciones personales, como Gmail u Outlook.",
      consent: "Debes autorizar para enviar la solicitud.",
      submit: "No pudimos enviarlo. Inténtalo de nuevo o",
      submitLink: "agenda directo"
    },
    done: {
      title: "Solicitud recibida",
      text: "Gracias. Una persona del equipo lee tu solicitud y responde por correo en pocos días hábiles.",
      schedule: "Agendar llamada",
      home: "Volver al inicio"
    }
  },

  pageCta: {
    title: "Mira cómo funciona esto con tus productos",
    desc: "En una demostración, Dinn muestra la lectura con tu portafolio, tu cartera y tus zonas.",
    button: "Solicitar demo",
    secondary: "Ver todas las soluciones"
  },

  solutions: {
    page: {
      eyebrow: "Soluciones",
      back: "Todas las soluciones",
      questionLabel: "La pregunta de tu área",
      decisionsLabel: "Decisiones que Dinn apoya",
      exampleLabel: "Un ejemplo, paso a paso",
      limitsLabel: "Límites de la lectura",
      useCasesLabel: "Situaciones de esta área",
      useCaseOpen: "Ver en la home",
      trustCta: "Cómo tratamos origen, fecha y confianza",
      otherLabel: "Otras áreas"
    },
    items: [
      {
        slug: "inteligencia-pricing",
        name: "Inteligencia y Pricing",
        short: "Sigue disponibilidad, precio, rotación y competencia.",
        question: "¿Cuál es el origen y hasta dónde puedo confiar?",
        title: "Cambios de precio, rotación y competencia, *con la fuente a la vista*",
        lead: "Explica una cifra antes de usarla. Cada lectura muestra fuente, fecha, cobertura y límite.",
        decisions: [
          "Distinguir un cambio puntual de una tendencia duradera.",
          "Distinguir una caída de participación de una caída de venta, en las mismas tiendas.",
          "Añadir granularidad y contexto operativo a los datos consolidados de mercado."
        ],
        example: {
          title: "Tu laboratorio creció 6% en las mismas tiendas; la categoría, 11%",
          steps: [
            "Señal: la participación cae en la región.",
            "Validación: solo tiendas comparables, presentes en las dos ventanas de tiempo.",
            "Lectura: otros productos crecieron más. Tu venta no disminuyó.",
            "Siguiente paso: mirar las tiendas donde solo la competencia tiene inventario."
          ]
        },
        limits: [
          "La venta se estima por el movimiento de inventario. No es un sell-out auditado.",
          "Los datos de competidores están agregados.",
          "Dinn complementa las auditorías de mercado. No las reemplaza."
        ],
        useCases: ["concorrencia", "demanda"]
      },
      {
        slug: "trade-kam-campo",
        name: "Trade, KAM y Campo",
        short: "Prioriza cuentas y territorios con el contexto más reciente.",
        question: "¿A quién priorizo y qué llevo a la conversación?",
        title: "Una fila de tiendas y cuentas, *con qué verificar en cada una*",
        lead: "Sin tablero que interpretar. Recibes una lista priorizada con la señal, la fecha y la pregunta por responder.",
        decisions: [
          "Empezar la semana por las tiendas que causan más desabasto en tu alcance.",
          "Dar a la cadena evidencia por tienda, con fecha.",
          "Revisar el mismo alcance después de la acción y registrar el retorno."
        ],
        example: {
          title: "6 de las 40 tiendas de la cartera concentran 70% de la señal",
          steps: [
            "Señal: desabasto persistente en tiendas de la cartera en la última semana.",
            "Validación: nivel = días sin inventario ÷ días observados en los últimos 30 días.",
            "Fila: las tiendas en orden, con qué verificar en cada una (¿pedido pendiente? ¿fuera del anaquel?).",
            "Retorno: el equipo registra lo que encontró. Dinn sigue el mismo alcance para revisar prioridades."
          ]
        },
        limits: [
          "Dinn prepara la lista. Tu equipo define la agenda.",
          "Dinn no escribe nada en el CRM. La lectura sirve para preparar la visita.",
          "Las tiendas que nunca vendieron el producto quedan fuera, para no inflar el desabasto."
        ],
        useCases: ["campo"]
      },
      {
        slug: "supply-distribuicao",
        name: "Supply y Distribución",
        short: "Investiga cobertura, disponibilidad y restricciones de abasto.",
        question: "¿Dónde puede haber un problema de cobertura o de abasto?",
        title: "¿La falla está en el CEDIS, en la reposición o en la farmacia? *Mira los dos lados.*",
        lead: "Dinn cruza el inventario del distribuidor con la disponibilidad en las farmacias de la zona. Indica las salvedades causales.",
        decisions: [
          "Distinguir la falta en el origen de la falla de reposición.",
          "Anticipar el pedido cuando cae la cobertura del CEDIS.",
          "Evaluar una reubicación donde hay inventario detenido cerca de tiendas en desabasto."
        ],
        example: {
          title: "CEDIS con saldo y farmacias sin el producto",
          steps: [
            "Señal: 38% de las farmacias de la zona están sin el producto.",
            "Validación: cobertura del CEDIS = inventario en el CEDIS ÷ venta diaria estimada de la zona.",
            "Lectura: el patrón apunta a una falla de distribución o de reposición, no a una falta en el origen.",
            "Antes de concluir: confirma los pedidos pendientes en las cadenas afectadas."
          ]
        },
        limits: [
          "El inventario en el CEDIS no prueba inventario en la farmacia. La lectura cruza las dos puntas.",
          "El patrón es una hipótesis. La causa requiere investigación.",
          "La cobertura del CEDIS usa la venta estimada de la región. Es una aproximación, no la cobertura real de ese CEDIS. Solo vale si la demanda coincide con la población que abastece.",
          "El movimiento observado no es una venta confirmada."
        ],
        useCases: ["distribuicao", "parado"]
      },
      {
        slug: "sac-customer-experience",
        name: "Atención a clientes y Customer Experience",
        short: "Orienta a los consumidores sobre disponibilidad y cercanía.",
        question: "¿Cómo oriento a alguien sin inducirlo al error?",
        title: "Dónde el consumidor probablemente encuentra el producto, *y qué tan confiable es*",
        lead: "Disponibilidad, cercanía y actualización en una pantalla, con la fuente y la fecha de cada indicación.",
        decisions: [
          "Indicar la farmacia cercana con mayor probabilidad de tener el producto.",
          "Verificar si la información es observada o estimada antes de orientar.",
          "Mostrar al trade dónde la demanda no encuentra producto."
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
          "La lectura base es D-1. En tiendas compatibles, una consulta bajo demanda corre en tiempo real y muestra la hora de la respuesta.",
          "Probabilidad de inventario no es garantía. Díselo al consumidor.",
          "La cobertura varía por cadena y por fuente."
        ],
        useCases: ["sac"]
      },
      {
        slug: "marketing-lancamentos",
        name: "Marketing y Lanzamientos",
        short: "Sigue la presencia, la evolución de la cobertura y las señales de ejecución del lanzamiento.",
        question: "¿La ejecución avanza donde debería?",
        title: "Semana a semana, *dónde llegó el lanzamiento* y dónde se trabó",
        lead: "Presencia por cadena y región en el tiempo, comparada con el plan de tu equipo.",
        decisions: [
          "Ver dónde se aceleró el lanzamiento y dónde está por debajo de lo esperado.",
          "Distinguir un problema de sell-in de un problema de reposición.",
          "Comparar el avance por cohorte y canal con la meta."
        ],
        example: {
          title: "Seis semanas después del lanzamiento",
          steps: [
            "Señal: el producto aparece en 54% de las farmacias monitoreadas.",
            "Validación: presencia = farmacias con inventario ÷ farmacias monitoreadas en el alcance. Compara con la meta y la cohorte de tu equipo.",
            "Lectura: se aceleró en las grandes cadenas. Sigue por debajo de 20% en las independientes.",
            "Siguiente pregunta: ¿el CEDIS recibió el producto en las regiones adonde no llegó?"
          ]
        },
        limits: [
          "La semana 1 comienza en la fecha de lanzamiento definida por tu equipo.",
          "La separación por canal sigue lo que cada fuente puede identificar.",
          "La presencia en las farmacias no es sell-out."
        ],
        useCases: ["lancamento"]
      },
      {
        slug: "ti-dados-governanca",
        name: "TI, Datos y Gobernanza",
        short: "Integra señales con trazabilidad, control de acceso y límites claros.",
        question: "¿Cómo se integra, se protege y se gobierna?",
        title: "Señales en tu entorno, *con trazabilidad y control de acceso*",
        lead: "API, BI y la IA del cliente consultan la misma base. El alcance autorizado y el origen de cada dato se mantienen.",
        decisions: [
          "Elegir por dónde consumir: plataforma, archivo, API, BI o la IA del cliente.",
          "Definir quién accede a qué, con verificación en dos pasos y SSO corporativo bajo consulta.",
          "Mantener los datos internos, la infraestructura y la gobernanza bajo el control del cliente."
        ],
        example: {
          title: "Una pregunta hecha en la IA del propio cliente",
          steps: [
            "Entrada: el equipo pregunta en ChatGPT, en Claude o en Copilot.",
            "Acceso: la IA autorizada consulta Dinn por MCP, solo lectura.",
            "Respuesta: la cifra viene con alcance, periodo, fuente y límites.",
            "Gobernanza: el uso queda dentro del plan y de la configuración del entorno del cliente."
          ]
        },
        limits: [
          "El MCP es una interfaz de consulta. No reemplaza la infraestructura de datos.",
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
      description: "Cómo funciona Dinn: observa, valida, ayuda a entender y decidir, entrega a quien ejecuta y aprende del retorno. El papel de Stock, Manager, Insights, MCP y Conecta."
    },
    hero: {
      eyebrow: "Plataforma",
      title: "Un sistema de la *señal a la acción comercial*",
      lead: "Dinn observa, valida, ayuda a entender y decidir, entrega a quien ejecuta y aprende del retorno. Cada parte tiene un papel claro."
    },
    cycle: {
      title: "El ciclo, en seis pasos",
      intro: "De una señal suelta a una acción registrada. El ejemplo completo está en la página de inicio."
    },
    parts: {
      title: "Cinco partes, con roles distintos",
      intro: "Trabajan juntas, pero no son cinco productos iguales. Hay un producto, una plataforma, interfaces y una capa de datos. Cada parte también dice lo que no hace.",
      notLabel: "Lo que no es",
      kinds: ["Producto", "Plataforma", "Interfaz", "Interfaz técnica", "Capa de datos"],
      items: [
        {
          tag: "Dinn Stock",
          title: "La lectura de disponibilidad",
          desc: "Organiza la disponibilidad y las señales relacionadas del canal, con la fuente y la confianza de cada punto.",
          not: "La ausencia de producto es una señal por validar, no un desabasto confirmado."
        },
        {
          tag: "Dinn Manager",
          title: "La gestión y la ejecución",
          desc: "Da prioridades y contexto a la gestión y la ejecución: desabasto, inventario detenido, distribución y mercado en un alcance.",
          not: "El equipo decide. La plataforma prepara la lectura."
        },
        {
          tag: "Dinn Insights",
          title: "La conversación con las señales",
          desc: "Explora e interpreta las señales. Pregunta en español y recibe el número, el alcance, la fecha y el método.",
          not: "Las hipótesis aparecen como hipótesis. Dinn no supone la causa."
        },
        {
          tag: "MCP",
          title: "La interfaz para tu IA",
          desc: "Permite que herramientas autorizadas, como ChatGPT, Claude y Copilot, consulten los datos de Dinn, con acceso de solo lectura.",
          not: "No es la infraestructura de datos. Es una forma de consultar."
        },
        {
          tag: "Dinn Conecta",
          title: "Los flujos de datos",
          desc: "Crea y opera flujos de datos para el contexto del cliente. Estandariza producto, tienda y zona para el BI y los agentes.",
          not: "No cierra el ciclo de ejecución. Entrega datos a quien ejecuta."
        }
      ]
    },
    data: {
      title: "Datos e integraciones",
      intro: "Una regla vale en toda la plataforma: decir de dónde vino el dato, cuándo se observó y hasta dónde llega la cobertura.",
      items: [
        {
          title: "De dónde vienen las señales",
          text: "De fuentes digitales de las farmacias, consultadas por agentes. Con autorización, también de datos de mercado (IQVIA / Close-Up) y datos internos (ERP y CRM)."
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
          text: "Un objetivo y un alcance. Dinn puede empezar solo con fuentes externas. La implementación toma hasta 30 días después de acordar los prerrequisitos y el alcance."
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
      lead: "TI, datos, compliance y compras: vean cómo Dinn trata el origen del dato, el acceso y la implementación."
    },
    signals: {
      title: "Tres tipos de señal, siempre identificados",
      intro: "Dinn muestra la naturaleza de cada información antes de que sea una prioridad.",
      exampleLabel: "Ejemplo",
      items: [
        {
          name: "Observado",
          def: "Lo que la fuente informó directamente, con lugar y hora.",
          example: "La farmacia muestra 12 unidades en el canal digital, consultado hoy a las 06h."
        },
        {
          name: "Estimado",
          def: "Se calcula con tiendas comparables y el historial cuando la fuente no responde. Siempre tiene nivel de confianza.",
          example: "La tienda no responde. Dinn estima su inventario con tiendas parecidas de la misma cadena."
        },
        {
          name: "Inferido",
          def: "Una lectura de señales combinadas. Se muestra como hipótesis para que el equipo valide.",
          example: "Varias tiendas sin producto y un CEDIS con saldo sugieren una falla de reposición, no una falta en el origen."
        }
      ]
    },
    notProve: {
      title: "Lo que una señal no prueba",
      intro: "Nombrar el límite es parte del producto. Permite al equipo actuar sin error.",
      items: [
        "La ausencia de un producto no siempre es desabasto.",
        "El producto en el centro de distribución no prueba el abasto de una tienda específica.",
        "Un saldo constante no prueba que no hubo venta.",
        "Una recomendación no es una acción automatizada. El equipo decide y ejecuta."
      ]
    },
    coverage: {
      title: "Cobertura y actualización",
      items: [
        { title: "Frecuencia", text: "Base en D-1. En tiendas elegibles, es posible una consulta puntual de disponibilidad." },
        { title: "Cobertura", text: "Varía por fuente, producto, cadena y consulta. Cada lectura indica qué cubre." },
        { title: "Fuentes de mercado e internas", text: "Entran cuando se acuerdan licencia, autorización y alcance." }
      ]
    },
    security: {
      title: "Acceso, seguridad y privacidad",
      items: [
        { title: "Acceso", text: "Verificación en dos pasos por correo y control de permisos. SSO corporativo bajo consulta: revisa con Dinn los requisitos de autenticación y el alcance de la implementación." },
        { title: "IA del cliente", text: "Las conexiones por MCP son autorizadas y de acceso de solo lectura." },
        { title: "Datos y gobernanza", text: "Los datos internos, la infraestructura y la gobernanza del entorno del cliente siguen con él. Dinn responde por los controles de su propia capa." },
        { title: "Privacidad", text: "Dinn trata los datos personales según la LGPD, como describe la Política de Privacidad." }
      ],
      privacyLink: "Leer la Política de Privacidad"
    },
    deploy: {
      title: "Implementación",
      text: "La implementación tiene un alcance definido. Toma hasta 30 días después de acordar los prerrequisitos y el alcance. Puede empezar solo con fuentes externas, sin depender de los sistemas internos del cliente."
    },
    questions: {
      title: "Preguntas que TI y compras suelen hacer",
      items: [
        {
          question: "¿Qué datos de mi empresa necesita Dinn?",
          answer: "Para empezar, ninguno. La lectura puede partir de fuentes externas. Los datos internos entran por acuerdo, para añadir contexto."
        },
        {
          question: "¿Quién controla los datos y la gobernanza?",
          answer: "Tú conservas los datos internos y la gobernanza de tu entorno. Dinn prepara y entrega los datos. Dinn responde por los controles de su propia capa: acceso, permisos y registro."
        },
        {
          question: "¿Cómo accede nuestra IA a Dinn?",
          answer: "Por MCP, con acceso autorizado y de solo lectura. Funciones como programación y generación de archivos dependen del plan y de la configuración de la IA."
        },
        {
          question: "¿Dónde encuentro soporte y el canal de incidentes?",
          answer: "En la página de Soporte. Explica cómo registrar un problema y llegar al canal contratado."
        }
      ],
      supportLink: "Abrir la página de Soporte"
    },
    cta: {
      title: "¿Necesitas aprobación de TI, datos o compras?",
      desc: "Hablamos de los requisitos de tu entorno antes de cualquier implementación.",
      button: "Conversar sobre requisitos"
    }
  },



  cases: {
    meta: {
      title: "Casos de uso | Dinn",
      description: "Casos de uso de Dinn: historias de la señal a la acción, paso a paso, con fuente, validación y aprendizaje."
    },
    hero: {
      eyebrow: "Casos de uso",
      title: "Historias de uso de Dinn, *una a una*",
      lead: "Cada caso cuenta el recorrido completo, de la situación al aprendizaje: qué observó Dinn, cómo se validó y qué decidió el equipo."
    },
    gallery: { open: "Leer el caso", customer: "Caso de cliente", empty: "Aquí agregamos nuevos casos, uno a uno." },
    detail: {
      back: "Todos los casos",
      problem: "El problema",
      how: "Cómo trabajó Dinn",
      howLead: "Tres pasos, del dato suelto a la decisión.",
      solution: "La solución",
      outcome: "Qué cambió",
      userLabel: "Relato del usuario",
      preserved: "Relato de usuario · nombres y datos preservados",
      stepsTitle: "De la señal al aprendizaje",
      byline: "Equipo Dinn",
      relatedTitle: "Sigue por aquí",
      areaLabel: "Área"
    },
    stepLabels: {
      situation: "Situación",
      signal: "Señal observada",
      validation: "Cómo se validó",
      decision: "Decisión apoyada",
      action: "Acción tomada",
      learning: "Aprendizaje"
    },
    rules: {
      title: "Cómo contamos los casos",
      items: [
        "Los casos son relatos de usuarios de Dinn. Se mantienen nombres, productos y datos.",
        "Si un resultado es medible, indicamos periodo, universo y método.",
        "Si no, reportamos la ganancia operativa comprobada. No la convertimos en impacto financiero.",
        "La participación y la venta son estimadas. Con un número, indicamos el mercado, la ventana y el método."
      ]
    }
  },

  caseScenes: {
    "frozen-stock": {
      title: "Inventario detenido de cada tienda de Fortaleza, sumado y convertido en días disponibles",
      city: "Fortaleza", pdv: "Tienda", total: "Inventario", frozen: "Inventario detenido", sum: "Suma de la ciudad",
      days: "Días disponibles", need: "Necesario", covered: "Ciudad cubierta"
    },
    "distributor-gap": {
      title: "Cuatro hipótesis para el hueco de reposición, y la ventana de compra del distribuidor",
      demand: "Demanda en la región", rotation: "Rotación en las tiendas", delay: "Retraso de entrega", noBuy: "Falta de pedido de la tienda",
      exists: "Existe", ruled: "Descartado", window: "Ventana de compra del distribuidor", replenish: "Reposición comunicada"
    },
    "sac-locator": {
      title: "Llamadas atendidas con el Localizador de Dinn, en menos tiempo",
      calls: "Llamadas del día", locator: "Localizador Dinn", address: "Dirección del paciente", available: "Disponible",
      confirmed: "Producto en la dirección", time: "Tiempo por atención", before: "Antes", after: "Con Dinn"
    },
    "price-gap": {
      title: "Competidor en las cadenas, producto ausente, precio alineado en la negociación",
      competitor: "Competidor", yours: "Tu producto", chain: "Cadena", priceLabel: "Precio",
      weighing: "El precio pesa en la decisión", negotiated: "Precio negociado con la cadena"
    },
    "share-opps": {
      title: "Share de 60% a 45%, pérdidas por estado y acciones por ciudad de Insights",
      share: "Share", from: "60%", to: "45%", states: "Pérdidas por estado", opps: "Oportunidades",
      city: "Ciudad", state: "Estado", action: "Acción", ask: "¿Dónde recupero espacio?", answer: "Acciones por ciudad y estado"
    }
  },
  resources: {
    meta: {
      title: "Recursos | Dinn",
      description: "Blog, casos de clientes y novedades de Dinn: contenido para entender el canal farmacéutico y seguir las novedades."
    },
    hero: {
      eyebrow: "Recursos",
      title: "Contenido, historias y novedades *de Dinn*",
      lead: "Elige por dónde empezar: leer artículos y guías, leer casos de clientes o seguir las novedades de la plataforma."
    },
    items: [
      {
        id: "blog",
        type: "Blog",
        title: "Artículos, guías y temas del canal",
        desc: "Análisis sobre desabasto, ejecución comercial y datos en farma, en un solo lugar.",
        chips: ["Artículos", "Guías", "Temas"],
        cta: "Leer el blog",
        href: "/blog"
      },
      {
        id: "cases",
        type: "Casos de uso",
        title: "Historias de quienes usan Dinn",
        desc: "Casos de clientes que conocemos y entrevistamos. Documentados y públicos, de la situación al aprendizaje.",
        chips: ["Entrevistas", "Contexto", "Aprendizajes"],
        cta: "Ver los casos",
        href: "/recursos/casos"
      },
      {
        id: "changelog",
        type: "Novedades",
        title: "Todo lo que salió al aire",
        desc: "Línea de tiempo de las novedades de Dinn, con fecha y una nota en lenguaje simple sobre lo que cambió.",
        chips: ["Novedades", "Mejoras", "Correcciones"],
        cta: "Ver el historial",
        href: "/recursos/changelog"
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
          lead: "Cuatro palabras que aparecen en el mismo reporte y piden acciones distintas. Sepáralas, para que el equipo de campo no corrija el problema equivocado.",
          sections: [
            {
              heading: "Ausencia",
              body: "El producto no está en una tienda, en una fecha, en una fuente. Es una señal, no una conclusión. Puede ser desabasto, falta de surtido o una consulta sin respuesta."
            },
            {
              heading: "Desabasto",
              body: "Ausencia en una tienda que normalmente vende el producto. En Dinn, el desabasto de una tienda es la proporción de días sin inventario sobre los días observados en los últimos 30 días. Un desabasto persistente pesa más que un día de ausencia."
            },
            {
              heading: "Surtido",
              body: "Si la tienda trabaja ese producto. Las tiendas que nunca vendieron el artículo quedan fuera del cálculo de desabasto, para no inflar la cifra. Con estas tiendas, habla con la cadena de surtido, no de reposición."
            },
            {
              heading: "Rotación",
              body: "La velocidad con que sale el inventario, por ejemplo en unidades por día. Con inventario en la tienda, la rotación muestra la demanda. Inventario dividido entre la rotación media diaria da la cobertura en días."
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
            "Un saldo constante no prueba que no hubo venta.",
            "El movimiento observado no es una venta confirmada."
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
        feedback: "El retorno del equipo revisa las prioridades"
      },
      "supply-distribuicao": {
        title: "Inventario del CEDIS cruzado con la disponibilidad en las farmacias de la región",
        cd: "CEDIS",
        cdCoverage: "Cobertura del CEDIS · 24 días",
        pharmacies: "Farmacias de la región",
        out: "38% sin el producto",
        verdict: "Falla de distribución",
        verify: "Confirmar pedidos pendientes"
      },
      "sac-customer-experience": {
        title: "Farmacias cerca del consumidor, con disponibilidad",
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
        access: "Dos factores · SSO bajo consulta · permisos"
      }
    }
  },

  areaVisuals: {
    uiKicker: "Cómo se ve en Dinn",
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
      access: ["Verificación en dos factores por correo", "SSO bajo consulta", "Control de permisos"]
    },
    aiAnswer: {
      tools: ["ChatGPT", "Claude", "Copilot"],
      question: "¿Qué tiendas de mi cartera en São Paulo verifico primero?",
      answer: "Seis tiendas concentran la mayor parte de la señal de desabasto de la última semana. La lista muestra qué revisar en cada una.",
      meta: [
        { label: "Alcance", value: "Cartera, São Paulo" },
        { label: "Período", value: "Últimos 7 días" },
        { label: "Fuente", value: "Dinn, vía MCP" },
        { label: "Naturaleza", value: "Observado o estimado, siempre indicado" }
      ],
      mode: "Solo lectura"
    }
  },


  trustLayout: {
    nav: { aria: "En esta página", signals: "Señales", confidence: "Confianza en los números", security: "Seguridad", deploy: "Implantación", docs: "Documentos" },
    kind: "Tipo de señal",
    example: "Ejemplo",
    why: "Por qué"
  },
  trustVisual: {
    anatomy: {
      title: "Una señal en pantalla, con todo lo que dice sobre sí misma",
      signal: "Desabasto persistente",
      store: "Tienda 01 · Cadena A",
      callouts: [
        { label: "Origen", value: "Observado en la fuente" },
        { label: "Fecha", value: "Base D-1" },
        { label: "Confianza", value: "Indicada en cada punto" },
        { label: "Límite", value: "La ausencia no es una causa" },
        { label: "Siguiente paso", value: "Revisar pedido pendiente" }
      ],
    },
    kinds: {
      proximity: "Cercanía con la fuente",
      items: [
        {
          meter: "Directa",
          rows: [
            { label: "Origen", value: "La propia fuente" },
            { label: "Cuándo", value: "Fecha y hora del registro" },
            { label: "Cómo leerlo", value: "Dato directo, con lugar y hora" }
          ]
        },
        {
          meter: "Por comparación",
          rows: [
            { label: "Origen", value: "Tiendas comparables e historial" },
            { label: "Cuándo", value: "En la actualización de la base" },
            { label: "Cómo leerlo", value: "Siempre con nivel de confianza" }
          ]
        },
        {
          meter: "Por combinación",
          rows: [
            { label: "Origen", value: "Combinación de señales" },
            { label: "Cuándo", value: "En el momento de la lectura" },
            { label: "Cómo leerlo", value: "Hipótesis que el equipo debe validar" }
          ]
        }
      ]
    },
    notProve: {
      sees: "Lo que aparece",
      doesNot: "No prueba",
      pairs: [
        { a: "Producto ausente", b: "Desabasto confirmado" },
        { a: "Producto en el CEDIS", b: "Tienda abastecida" },
        { a: "Saldo constante", b: "Ninguna venta" },
        { a: "Recomendación", b: "Acción automática" }
      ]
    },
    coverage: {
      timelineTitle: "Cómo llega la lectura hasta ti",
      steps: [
        { label: "Día anterior", text: "Dinn consulta las fuentes" },
        { label: "Base D-1", text: "Las señales se organizan, con origen y fecha" },
        { label: "Hoy", text: "Tu equipo lee, valida y actúa" }
      ],
      onDemand: "Consulta puntual de disponibilidad en tiendas elegibles",
      factorsTitle: "La cobertura varía por",
      factors: ["Fuente", "Producto", "Cadena", "Consulta"],
      factorsNote: "Cada lectura indica qué cubre."
    },
    security: {
      flowTitle: "Del acceso a la respuesta",
      flow: [
        { title: "Persona autorizada", sub: "Usuario de tu empresa" },
        { title: "Dos factores", sub: "Verificación por correo" },
        { title: "SSO", sub: "Bajo consulta" },
        { title: "Permisos", sub: "Control de acceso" },
        { title: "Dinn", sub: "Señales con origen y fecha" },
        { title: "Solo lectura", sub: "MCP, API y BI" }
      ],
      splitTitle: "Quién se encarga de qué",
      dinn: {
        title: "Dinn",
        items: ["Prepara y entrega las señales", "Muestra fuente, fecha y confianza", "Conecta por MCP, API y BI", "Responde por los controles de su capa"]
      },
      client: {
        title: "Tú conservas",
        items: ["Datos internos", "Infraestructura de tu entorno", "Gobernanza de tu entorno"]
      }
    },
    deploy: {
      title: "Implementación en hasta 30 días",
      steps: [
        { label: "Acuerdo", text: "Requisitos previos y alcance definidos" },
        { label: "Implementación", text: "Hasta 30 días. Puede empezar solo con fuentes externas" },
        { label: "En uso", text: "Lectura diaria y retorno del equipo" }
      ]
    }
  },

  changelog: {
    meta: {
      title: "Novedades | Dinn",
      description: "Línea de tiempo de lo que Dinn puso en producción: novedades y mejoras de la plataforma, en lenguaje simple, por fecha."
    },
    hero: {
      eyebrow: "Novedades",
      title: "Lo que salió al aire en *Dinn*",
      lead: "Cada publicación en producción, en lenguaje simple, por fecha."
    },
    back: "Todos los recursos",
    filters: { label: "Filtrar por área", all: "Todo", platform: "Plataforma", site: "Sitio y documentación" },
    count: "publicaciones",
    updated: "Actualizado el",
    months: "Meses",
    empty: "Aún no hay publicaciones en esta área.",
    note: "Actualizado todos los días. Los textos usan lenguaje simple. Los detalles técnicos internos no aparecen aquí."
  }
};
