export const es419 = {
  nav: {
    home: "Inicio",
    howItWorks: "Cómo funciona",
    solutions: "Soluciones",
    conecta: "Dinn Conecta",
    customers: "Clientes",
    blog: "Blog",
    cta: "Solicitar demo",
    openMenu: "Abrir menú",
    languageLabel: "Idioma",
    language: "Español",
    langShort: "ES"
  },
  hero: {
    pill: "La capa de inteligencia para el canal farmacéutico",
    title: "Convierte señales del mercado farmacéutico en *acción comercial*",
    description: "Quien vende en farmacias no necesita otro dashboard. Necesita saber dónde actuar, con qué confianza y con qué impacto.",
    cta: "Solicitar demo",
    secondary: "Ver cómo funciona",
    card: {
      label: "Ejemplo ilustrativo",
      steps: [
        { tag: "Señal", title: "Producto A · 32% de los PDV sin inventario", meta: "SP · 96 de 300 PDV · D-1" },
        { tag: "Dónde", title: "La Cadena A concentra la señal", meta: "60% de faltante en 30 días" },
        { tag: "Acción", title: "6 tiendas para verificar primero", meta: "Con pregunta y retorno esperado" }
      ],
      stores: [
        { name: "Tienda 01 · São Paulo", level: "Crítico", value: "86,7%" },
        { name: "Tienda 02 · Campinas", level: "Alto", value: "60%" },
        { name: "Tienda 03 · Santos", level: "Moderado", value: "33,3%" }
      ],
      footnote: "Datos ficticios."
    }
  },
  logos: {
    title: "Farmacéuticas que ya usan Dinn"
  },
  antesDepois: {
    eyebrow: "Qué cambia",
    title: "Dinn no es solo *otro dashboard*.",
    description: "Es la capa de inteligencia que conecta lo que pasa en las farmacias con las decisiones de tu equipo comercial.",
    beforeLabel: "Antes",
    afterLabel: "Con Dinn",
    items: [
      { bad: "Discusiones sobre faltantes sin evidencia", good: "Evidencia por tienda, cadena, ciudad y SKU, con fecha de corte" },
      { bad: "Un dashboard para interpretar", good: "Una lista de qué verificar primero" },
      { bad: "Datos sin origen claro", good: "Observado o estimado, con fuente y confianza" },
      { bad: "Bases y planillas conciliadas a mano", good: "Una base identificada, en la plataforma, un archivo, la API o tu IA" }
    ]
  },
  comoFunciona: {
    eyebrow: "Cómo funciona",
    title: "De la señal en el canal a la *próxima acción* del equipo",
    intro: "Dinn sigue la disponibilidad de tus productos en las farmacias, separa lo que cambió del ruido y organiza la lectura por producto, cadena, región y punto de venta. Siempre con fuente, fecha y confianza explícitas.",
    stages: [
      {
        name: "Observar",
        title: "Dónde hay inventario y dónde falta producto",
        description: "Agentes consultan los canales digitales de las farmacias y registran lo que informa cada fuente, con ubicación y hora. Donde no hay respuesta directa, Dinn estima a partir de tiendas comparables y del historial. Base diaria (D-1) y consulta puntual donde la fuente lo permite.",
        products: "Dinn Stock"
      },
      {
        name: "Entender",
        title: "No toda variación merece atención",
        description: "Dinn convierte la lectura en señales con nombre: faltante persistente, inventario sin movimiento, cambio de rotación, concentración en una cadena. La evolución en el tiempo separa una señal puntual de un problema recurrente.",
        products: "Dinn Stock · Dinn Pulse"
      },
      {
        name: "Priorizar",
        title: "Una base, tres niveles de decisión",
        description: "Estratégico: dónde concentrar la atención. Táctico: qué discutir con cada cadena. Operativo: qué tiendas verificar primero. La salida es una fila concreta, con la señal, la pregunta y el retorno esperado.",
        products: "Dinn Manager · Dinn Locator"
      },
      {
        name: "Llevar a la rutina",
        title: "La señal llega a donde ocurre el trabajo",
        description: "Úsala en la plataforma, expórtala para la reunión con la cadena, llévala a tu BI por API o pregunta directamente en tu IA. Dinn prepara el análisis; el equipo decide qué hacer con cada punto de venta.",
        products: "Plataforma · Archivo · API · MCP"
      },
      {
        name: "Dar seguimiento",
        title: "Ve si la señal persistió después de la acción",
        description: "Mantén el mismo producto y alcance para comparar la evolución sin mezclar bases: empieza el día por las desviaciones, llega a la reunión semanal con una lista y sigue cada mes lo que cambió en el canal.",
        products: "Rutinas diaria, semanal y mensual"
      }
    ],
    visuals: {
      observe: {
        observedTag: "Observado",
        observedTitle: "Respuesta directa de la fuente",
        observedRows: [
          ["Producto", "Producto A · 2,5 mg"],
          ["PDV", "Tienda 01 · São Paulo"],
          ["Origen", "Canal digital"],
          ["Respuesta", "Disponible · 10:32"]
        ],
        estimatedTag: "Estimado",
        estimatedTitle: "Sin respuesta directa",
        estimatedRows: [
          ["Referencias", "Tiendas comparables + historial"],
          ["Disponibilidad", "8–12 un."],
          ["Confianza", "Nivel B"]
        ],
        note: "Cada registro indica cómo se obtuvo: observado o estimado."
      },
      signals: {
        title: "Señales del alcance · SP",
        items: [
          { type: "Faltante persistente", scope: "Producto A · 96 de 300 PDV", value: "32%" },
          { type: "Concentración en cadena", scope: "Producto A · Cadena A · 30 días", value: "60%" },
          { type: "Inventario sin movimiento", scope: "Tienda 04 · Sorocaba", value: "30 de 30 días" },
          { type: "Caída de rotación", scope: "Producto B · Cadena B", value: "−18%" }
        ],
        note: "Datos ficticios. Una señal abre una investigación, no una conclusión."
      },
      priority: {
        levels: [
          { name: "Estratégico", question: "¿Dónde concentrar la atención?" },
          { name: "Táctico", question: "¿Qué discutir con cada cadena?" },
          { name: "Operativo", question: "¿Qué tiendas verificar primero?" }
        ],
        tableTitle: "Fila de verificación · Producto A · Cadena A",
        columns: ["PDV · señal", "Verificación sugerida", "Retorno esperado"],
        rows: [
          ["Tienda 01 · 86,7%", "¿Hay pedido o entrega pendiente?", "Estado y previsión de la cadena"],
          ["Tienda 02 · 60%", "¿El producto está en la tienda?", "Revisión en el PDV"],
          ["Tienda 03 · 33,3%", "¿Volvió a ocurrir la ausencia?", "Nueva lectura del alcance"]
        ],
        note: "Ejemplo ficticio. El equipo define responsables y plazos."
      },
      deliver: {
        input: "Señal priorizada",
        hub: "Dinn",
        outputs: [
          { name: "Plataforma", desc: "Dinn Manager" },
          { name: "Archivo", desc: "Exportación para la reunión" },
          { name: "API", desc: "Tu BI y sistemas" },
          { name: "Tu IA", desc: "ChatGPT, Claude, Copilot" },
          { name: "CRM", desc: "Contexto para el campo" }
        ],
        note: "Dinn prepara el análisis. El equipo decide."
      },
      follow: {
        routines: [
          { when: "Días hábiles · 08:00", title: "Empieza el día por las desviaciones", desc: "Los mayores deterioros desde la última lectura." },
          { when: "Lunes · 09:00", title: "Llega a la reunión con una lista", desc: "Ranking de cadenas y los diez PDV con mayor faltante." },
          { when: "1er día hábil · 09:00", title: "Sigue lo que cambió en el canal", desc: "Tendencia de 90 días en el mismo alcance." }
        ],
        note: "Ejemplos de rutina."
      }
    }
  },
  naPratica: {
    eyebrow: "En la práctica",
    title: "De la señal a la *lista de investigación*",
    intro: "El camino completo en un ejemplo, con datos ficticios.",
    steps: [
      { question: "¿Qué producto necesita atención?", answer: "El Producto A tiene la mayor proporción de PDV sin inventario en SP.", data: "32% · 96 de 300 PDV" },
      { question: "¿En qué cadenas investigar?", answer: "La Cadena A concentra la señal en el mismo alcance y periodo.", data: "60% en 30 días" },
      { question: "¿Qué tiendas explican el problema?", answer: "Seis tiendas de la Cadena A, de la crítica a la moderada.", data: "86,7% → 23,3%" },
      { question: "¿Qué verificar en cada una?", answer: "¿Pedido pendiente? ¿Producto en tienda? ¿Volvió la ausencia?", data: "Fila de verificación" },
      { question: "¿Quién se encarga de cada punto?", answer: "El equipo define responsable, acción acordada y fecha para revisar el mismo alcance.", data: "Decisión del equipo" },
      { question: "¿Cómo dar seguimiento?", answer: "La rutina semanal trae la lista actualizada a la reunión comercial.", data: "Lunes · 09:00" }
    ],
    note: "Ejemplo ilustrativo. La causa del faltante requiere investigación; Dinn no la presupone."
  },
  naSuaIa: {
    eyebrow: "Dinn + IA",
    title: "Usa Dinn directamente *en tu IA*",
    description: "Conecta Dinn a ChatGPT, Claude o Microsoft Copilot y pide análisis, informes y materiales con los datos autorizados.",
    envs: ["ChatGPT", "Claude", "Microsoft Copilot"],
    bullets: [
      "Pregunta en lenguaje natural",
      "Profundiza sin empezar de nuevo",
      "Convierte preguntas recurrentes en rutina"
    ],
    chat: {
      header: "Dinn Stock · conversación ilustrativa",
      user: "Compara el faltante de los Productos A, B y C en SP. ¿Cuál merece atención primero?",
      aiLabel: "IA · consulta a Dinn",
      answer: "El Producto A tiene el mayor porcentaje sin inventario en el alcance.",
      rows: [
        ["Producto A", "32%", "96 de 300 PDV"],
        ["Producto B", "20%", "48 de 240 PDV"],
        ["Producto C", "10%", "20 de 200 PDV"]
      ],
      suggestion: "Sugerencia: abrir las cadenas y los PDV del Producto A para investigar la concentración."
    },
    note: "Acceso autorizado y de solo lectura. Conexión, archivos y programación dependen del plan y de la configuración de tu IA."
  },
  conecta: {
    eyebrow: "Dinn Conecta",
    title: "Datos de farma. *Trabajando juntos.*",
    description: "Mercado, datos internos y farmacias con el contexto que tu BI, Copilot y proyectos de IA necesitan. Dinn conecta las fuentes autorizadas, estandariza producto, tienda y región, cuida la calidad y la actualización, y entrega en el entorno que tu equipo ya usa.",
    sourcesLabel: "Tus fuentes",
    sources: ["IQVIA / Close-Up", "ERP, CRM y data lake", "Farmacias"],
    hub: "Dinn Conecta",
    hubDesc: "Conexión, estandarización y contexto de farma",
    destLabel: "Tu stack sigue igual",
    destinations: ["BI", "Copilot", "Agentes", "API"],
    responsibilities: [
      { title: "Contigo", desc: "Datos, infraestructura y gobernanza siguen bajo tu control." },
      { title: "Con Dinn", desc: "Conexión, limpieza, estandarización de producto, tienda y región, y contexto de farma." },
      { title: "Resultado", desc: "Información lista en tu BI, Copilot y agentes internos." }
    ],
    stripLabel: "Lleva contexto de farma a",
    stripItems: ["Copilot", "ChatGPT", "Claude", "Gemini", "tus agentes"],
    cta: "Ve cómo se conecta",
    note: "Cada fuente depende de la licencia, autorización y alcance acordados."
  },
  solucoes: {
    eyebrow: "Soluciones",
    title: "Problemas del canal farma, *ya entendidos*",
    intro: "No necesitas descubrir desde cero qué señales importan. Dinn llega con los dolores del canal farmacéutico ya mapeados.",
    tabs: { outcome: "Por resultado", team: "Por equipo" },
    outcomes: [
      { title: "Reducir faltantes", desc: "Sabe dónde falta producto por SKU, cadena, ciudad y tienda, y actúa antes de perder la venta.", tag: "Dinn Stock" },
      { title: "Negociar con evidencia", desc: "Lleva a la reunión con la cadena los datos de disponibilidad, persistencia y tiendas afectadas, con fecha de corte.", tag: "Dinn Stock" },
      { title: "Priorizar el campo", desc: "Una lista de qué verificar primero, en lugar de un dashboard para interpretar.", tag: "Dinn Manager" },
      { title: "Seguir lanzamientos", desc: "Ve la presencia del producto nuevo por cadena y región desde las primeras semanas.", tag: "Dinn Stock" },
      { title: "Orientar al servicio al cliente", desc: "Indica las farmacias con mayor probabilidad de tener el producto, con la confianza explícita.", tag: "Dinn Locator" },
      { title: "Entender el movimiento", desc: "Separa una caída de demanda de faltantes, surtido o ejecución.", tag: "Dinn Pulse" },
      { title: "Datos de farma en tu BI y tu IA", desc: "Mercado, datos internos y farmacias listos para tu stack.", tag: "Dinn Conecta" }
    ],
    teams: [
      { title: "Liderazgo comercial", desc: "Dónde concentrar la atención y cómo evolucionó en 30, 60 y 90 días." },
      { title: "Trade marketing", desc: "Cadenas, regiones, tiendas y SKU priorizados para actuar en el canal." },
      { title: "Fuerza de ventas y campo", desc: "Una lista simple y confiable por cartera o territorio." },
      { title: "Demanda y abastecimiento", desc: "Señales de faltante y de rotación, con excepciones y confianza." },
      { title: "Inteligencia de mercado", desc: "Disponibilidad cruzada con la base de mercado autorizada." },
      { title: "Servicio al cliente y CX", desc: "Dónde encontrar el producto y qué alternativa sugerir." },
      { title: "Tecnología y datos", desc: "Datos tratados con fuente, actualización y cobertura, vía archivo, API o MCP." }
    ]
  },
  faq: {
    title: "Preguntas frecuentes",
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
    title: "¿Listo para convertir señales en *acción*?",
    description: "Ve en una demostración cómo Dinn muestra dónde actuar, y con qué confianza, para tus productos.",
    button: "Solicitar demo"
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
    title: "Lo que dicen nuestros clientes",
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
    heroTitle: "Contenidos de Dinn",
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
