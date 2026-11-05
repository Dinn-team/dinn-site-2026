// Textos da home nova (referências: Harvey e ElevenLabs). Regras STE no CLAUDE.md.
export const home2Es = {
  home2: {
    hero: {
      title: "Convierte señales en *acción comercial*.",
      sub: "Dinn muestra dónde actuar primero en el canal farma. Cada señal tiene fuente, fecha y límites claros.",
      cta: "Solicitar demo",
      cta2: "Conoce la plataforma",
      play: "Ver el video de Dinn",
      soon: "Video próximamente"
    },
    customers: {
      title: "Clientes",
      story: "Historia de cliente",
      cta: "Ver clientes"
    },
    features: {
      title: "Cómo funciona Dinn",
      sub: "Diez funcionalidades. Una vista del canal.",
      more: "Más información",
      items: [
        { id: "ruptura", name: "Quiebre", text: "Ve dónde falta producto y qué tiendas verificar primero." },
        { id: "giro", name: "Rotación", text: "Ve qué tan rápido se vende y dónde el inventario no se mueve." },
        { id: "preco", name: "Precio", text: "Ve el precio observado en cada tienda y cadena." },
        { id: "localizador", name: "Localizador de Productos", text: "Encuentra las tiendas que tienen tu producto. Dato diario o en vivo." },
        { id: "mercado", name: "Mercado", text: "Lee competencia y cobertura por región y cadena." },
        { id: "oportunidades", name: "Oportunidades", text: "Ve dónde actuar primero. Cada una muestra fuente y límites." },
        { id: "distribuicao", name: "Distribución", text: "Cruza el stock del distribuidor con la disponibilidad en las tiendas." },
        { id: "jean", name: "Jean", text: "Delega seguimientos. Jean prepara el trabajo y te llama cuando necesitas decidir." },
        { id: "conecta", name: "Dinn Conecta", text: "Lleva los datos de Dinn a tu BI, a tu IA y a tus integraciones." },
        { id: "suporte", name: "Soporte", text: "Pide ayuda dentro de la plataforma. Zoe responde y el equipo de Dinn interviene cuando hace falta." }
      ]
    },
    areas: {
      title: "Para tu área",
      sub: "Ve los problemas que Dinn resuelve.",
      open: "Abrir",
      promises: {
        "inteligencia-pricing": "Ve precio y rotación antes que la competencia.",
        "trade-kam-campo": "Sabe a qué tienda ir primero.",
        "supply-distribuicao": "Encuentra la brecha entre el CD y la tienda.",
        "sac-customer-experience": "Indica dónde encontrar el medicamento.",
        "marketing-lancamentos": "Sigue el lanzamiento tienda por tienda.",
        "ti-dados-governanca": "Datos con fuente, fecha y límites claros."
      }
    },
    showcase: {
      title: "Casos de uso para cada equipo",
      open: "Ver el caso",
      tabs: [
        { id: "demanda", name: "Demanda", ids: ["demanda", "concorrencia", "lancamento"] },
        { id: "distribuicao", name: "Distribución", ids: ["distribuicao", "parado"] },
        { id: "vendas", name: "Ventas", ids: ["campo", "sac"] }
      ]
    },
    labs: {
      "title": "A quién puede atender Dinn",
      "lead": "Cualquier laboratorio que vende en farmacias. Aprendemos de nuestros clientes.",
      "all": "Ver todos",
      "client": "Ver el caso",
      "page": {
        "metaTitle": "Laboratorios que Dinn puede atender | Dinn",
        "metaDescription": "Ranking de los mayores laboratorios farmacéuticos del mundo, por ingresos, y de los laboratorios con medicamento activo en Brasil. Dinn puede atender a todos.",
        "title": "Dinn puede atender a todos los laboratorios de la lista.",
        "lead": "Los mayores del mundo y todos los que tienen medicamento activo en Brasil. Para cualquiera de ellos, Dinn puede mostrar dónde falta el producto, dónde rota y dónde cuesta más en las farmacias.",
        "cta": "Hablar con Dinn",
        "statGlobal": "laboratorios en el ranking global",
        "statBrasil": "laboratorios con medicamento activo en Brasil",
        "statClients": "clientes de Dinn",
        "tabGlobal": "Global, por ingresos",
        "tabBrasil": "Brasil, por registros",
        "tabClients": "Clientes actuales",
        "clientsSub": "Los laboratorios que usan Dinn, con el caso de cada uno.",
        "search": "Buscar laboratorio",
        "colLab": "Laboratorio",
        "colRevenue": "Ingresos, 2016 a 2025",
        "colRegs": "Medicamentos activos",
        "colRevenueVal": "Ingresos",
        "colRegsVal": "Registros",
        "clientTag": "Cliente de Dinn",
        "globalSub": "Ingresos totales del año fiscal, en US$ miles de millones. El gráfico muestra los ingresos de 2016 a 2025. Los valores vienen convertidos a US$ por la fuente.",
        "brasilSub": "Todos los laboratorios con al menos un medicamento con registro activo en Anvisa, ordenados por número de registros. Cada empresa cuenta una vez, por el CNPJ base.",
        "revenue": "US$ {v} mil M",
        "regs": "{v} registros",
        "more": "Ver más",
        "noResult": "Ningún laboratorio encontrado.",
        "act": "Conocer Dinn para mi equipo",
        "disclaimer": "Las marcas y los logos pertenecen a sus titulares. La lista muestra laboratorios que Dinn puede atender. No indica alianza, salvo donde hay un caso de cliente. Sin logo libre, el laboratorio aparece con sus siglas.",
        "sources": "Ingresos: Wikipedia (lista de mayores empresas biomédicas) y ChemAnalyst (Top 100 Pharma 2026), con el año fiscal en cada fila. Brasil: datos abiertos de Anvisa (medicamentos, archivo del 13/10/2026), registros activos, agrupados por el CNPJ base.",
        "credits": "Créditos de los logos",
        "legalShort": "Las marcas y los logos pertenecen a sus titulares.",
        "legalLink": "Ver aviso legal y créditos",
        "legalTitle": "Aviso legal y créditos",
        "close": "Cerrar",
        "finalTitle": "¿Tu laboratorio está en la lista?",
        "finalSub": "Habla con Dinn y ve quiebre, rotación, precio y mercado de tu portafolio.",
        "finalButton": "Hablar con Dinn"
      }
    },
    resources: {
      title: "Recursos",
      items: [
        { id: "blog", name: "Blog", text: "Artículos sobre quiebre y sell-out." },
        { id: "cases", name: "Casos", text: "Situaciones reales, una por una." },
        { id: "changelog", name: "Novedades", text: "Actualizaciones del producto, cada día." },
        { id: "compare", name: "Comparativos", text: "Dinn junto a otras opciones." }
      ]
    },
    faq: {
      title: "¿Dudas?",
      hello: "¡Hola! Elige una pregunta y respondo.",
      menu: "Elige una pregunta",
      back: "Volver al menú",
      ask: "Hablar con el equipo",
      label: "FAQ Dinn",
      open: "Abrir chat",
      close: "Cerrar chat"
    }
  }
};
