import type { FeatureContent } from '../../types';

// Quiebre (ES-419). Fuente: dinn-manager-app/docs/site-reproducao/funcionalidades/ruptura.md.
// Regla: el dato es D-1 y muestra patrones y tendencias. No confirma el quiebre de una tienda en un día.
export const content: FeatureContent = {
  slug: 'ruptura',
  meta: {
    title: 'Quiebre | Dinn',
    description: 'Ve dónde falta el producto y qué tiendas verificar primero. Quiebre por tienda, cadena y región, con el dato del día anterior.',
  },
  hero: {
    title: '¿Dónde falta el producto? Revisa estas tiendas primero.',
    sub: 'Dinn mide el quiebre en las farmacias de tu cartera, muestra la evolución en el tiempo y ordena las tiendas por gravedad.',
    note: 'Dato del día anterior (D-1). Sirve para ver patrones y tendencias, no para auditar una farmacia.',
  },
  steps: [
    { title: 'Elige el segmento', text: 'Filtra por producto, cadena, estado, ciudad o Brick. Los filtros valen para todos los gráficos y tablas de la pantalla.' },
    { title: 'Lee el quiebre', text: 'Ve la evolución en el gráfico. Ve cuántas tiendas hay en cada nivel. Ve qué productos y cadenas fallan más.' },
    { title: 'Abre la tienda y actúa', text: 'Haz clic en una tienda para ver qué falta en ella, producto por producto. Descarga la lista en Excel o pregunta a Jean.' },
  ],
  doors: {
    title: 'Dónde aparece el quiebre',
    intro: 'La misma lectura llega por tres caminos. Empieza por el que se ajusta a tu pregunta.',
    items: [
      {
        title: 'Desde la pantalla Inicio',
        text: 'La primera pantalla del portal muestra el quiebre de tu cartera en el resumen. Incluye la evolución en el tiempo y los niveles de las tiendas.',
        shot: { screen: 'rupture', phase: 4, to: 'dash' },
      },
      {
        title: 'Desde la tienda',
        text: 'Haz clic en cualquier fila de la tabla de puntos de venta. El panel muestra el quiebre de esa tienda, producto por producto.',
        shot: { screen: 'rupture', phase: 6, to: 'm-tbl' },
      },
      {
        title: 'Desde la consulta en la tienda',
        text: 'En una tienda compatible, el botón Consultar ahora hace una consulta de inventario. Muestra la hora de la respuesta.',
        shot: { screen: 'rupture', phase: 8, to: 'm-est-0' },
      },
    ],
  },
  jean: {
    lead: 'Pregunta a Jean qué tiendas están más críticas. Después abre la lista preparada en Inicio.',
    prompts: ['¿Cuáles son las 10 tiendas más críticas en quiebre?', '¿Está mejorando el quiebre de Cefalgin?', '¿En qué cadenas falta más producto?'],
    turns: [
      { q: '¿Qué tiendas están más críticas en quiebre?', a: 'Hay 32 tiendas en el nivel Crítico. Estas son las tres primeras.',
        card: { title: 'Quiebre en 30 días', rows: [['Drogaria Serrana Ipiranga', '82%'], ['Rede Farmacore Jardim América', '76%'], ['Rede Saúde Mais Vila Mariana', '75%']] },
        steps: ['Abrir en Inicio'],
      },
      { q: '¿Está mejorando el quiebre?', a: 'Sí. Bajó de 39,0% a 26,2% en 12 semanas.',
      },
    ],
  },
  inside: {
    title: 'El quiebre por dentro',
    sub: 'Desplázate para ver cada etapa.',
    stages: [
      {
        tab: 'Evolución',
        title: 'El quiebre a lo largo del tiempo',
        text: 'Sigue la línea por 7, 30 o 90 días, en vista diaria o semanal. Con más de un ítem, cada uno tiene su línea.',
        shot: { screen: 'rupture', phase: 4, to: 'chart' },
      },
      {
        tab: 'Gravedad',
        title: 'Cuántas tiendas hay en cada nivel',
        text: 'Crítico, Alto, Moderado y Leve. El nivel muestra cómo se comportó la tienda en los últimos 30 días.',
        shot: { screen: 'rupture', phase: 3, to: 'lv' },
      },
      {
        tab: 'Tiendas',
        title: 'Qué tienda visitar',
        text: 'Ordena la lista por nivel, quiebre o días parado. Cada fila muestra la tienda, la cadena y dónde está.',
        shot: { screen: 'rupture', phase: 5, to: 'tbl' },
      },
      {
        tab: 'Tienda',
        title: 'El producto que falta',
        text: 'Abre la tienda y ve el ranking por SKU, con el rango de inventario y la fecha de la estimación. En una tienda compatible, usa Consultar ahora.',
        shot: { screen: 'rupture', phase: 8, to: 'm-est-0' },
      },
    ],
  },
  read: {
    title: 'Cómo leer el resultado',
    intro: 'El nombre quiebre tiene bases distintas en cada lugar. Lee la regla antes de comparar.',
    rows: [
      { label: 'Quiebre', text: 'Producto sin inventario en el punto de venta, como porcentaje de las oportunidades de venta. La disponibilidad es 100% menos el quiebre.', how: 'Aparece como 34,4%.' },
      { label: 'Nivel', text: 'Crítico: 75% o más. Alto: de 50% a 74%. Moderado: de 25% a 49%. Leve: menos de 25%. Siempre usa la ventana fija de 30 días, con corte el sábado.', how: 'Etiqueta de color junto a la tienda.' },
      { label: 'Quiebre en el gráfico', text: 'Promedio ponderado por el volumen observado, para el período y el segmento elegidos.', how: 'Línea por 7, 30 o 90 días, en vista diaria o semanal.' },
      { label: 'Ranking por SKU', text: 'Puntos de venta con quiebre divididos por los puntos de venta monitoreados, del día anterior.', how: 'Tabla de productos, del que más falta al que menos falta.' },
      { label: 'Quiebre en la tabla de tiendas', text: 'Porcentaje de días con inventario en cero, en 7, 30 o 90 días.', how: 'Anillo con el porcentaje junto a la tienda.' },
      { label: 'Inventario exacto o estimado', text: 'Exacto es la lectura real del e-commerce de la tienda. Estimado es la proyección del modelo, con un margen de error mayor. El filtro Modelo elige el origen.', how: 'Etiqueta en el panel de la tienda.' },
      { label: 'Dato en duda', text: 'Cuando el dato está en investigación o la muestra es pequeña, la pantalla muestra un aviso. No muestra cero.', how: 'Etiquetas En revisión y Muestra pequeña.' },
    ],
  },
  does: [
    'Mide el quiebre de la cartera por producto, cadena, estado, ciudad y Brick, y muestra la evolución en el tiempo.',
    'Clasifica cada tienda en Crítico, Alto, Moderado o Leve.',
    'Ordena productos, cadenas y tiendas de la más crítica a la menos crítica.',
    'Muestra, en cada tienda, qué productos faltan y si el inventario es exacto o estimado.',
    'Exporta las tablas y permite guardar vistas.',
  ],
  doesNot: [
    'No muestra inventario en tiempo real. El dato es de ayer (D-1).',
    'No confirma el quiebre de una tienda en un día. Sirve para ver patrones y tendencias.',
    'No cuenta las tiendas que nunca vendieron el ítem.',
    'No promete menos quiebre ni más ventas.',
    'No confunde quiebre con inventario parado. El inventario parado tiene indicadores propios, en Rotación.',
  ],
  use: {
    title: 'Cómo usarlo bien',
    consult: [
      'Elige el producto, la cadena y la región arriba. Los filtros valen para toda la pantalla.',
      'Elige 7, 30 o 90 días en el gráfico, y la vista diaria o semanal.',
      'Abre la tienda para ver el producto que falta y la fecha de la estimación.',
    ],
    analyze: [
      '¿Mi lanzamiento está faltando? Filtra el producto. Usa 30 días y la vista Semanal. En el ranking por cadena, ve quién concentra la falta. En la tabla de tiendas, ordena por Nivel y lleva las tiendas Crítico y Alto al campo.',
      '¿Adónde envío al equipo de campo? Elige el estado, la ciudad o el Brick. Ordena las tiendas por Nivel. Abre las primeras y ve los productos que faltan. Descarga en Excel.',
      '¿La situación está mejorando? Compara 30 y 90 días en el gráfico. Ve la tarjeta de niveles y vuelve la semana siguiente. O pregunta a Jean.',
      '¿Falta el producto o no se mueve? En Disponibilidad en PDV por red, compara Sin stock con Sin ventas. En la tarjeta Nivel de stock parado, ve los días parado.',
    ],
    extract: [
      'Usa el botón Descargar de la tabla de puntos de venta, del ranking por SKU o del panel de la tienda.',
      'Guarda el segmento en Vistas guardadas para volver con un clic.',
      'Pregunta a Jean y abre la lista ya filtrada.',
    ],
    formats: ['CSV', 'Excel (XLS)', 'PDF', 'JSON'],
    note: 'El número puede diferir de lo que ves en la farmacia. El dato es de ayer y parte del inventario es estimado. El valor está en la tendencia.',
  },
  related: {
    title: 'Junto con otras funcionalidades',
    intro: 'El quiebre muestra dónde falta el producto. Estas funcionalidades ayudan a entender el resto.',
    items: [
      { slug: 'giro', name: 'Rotación', text: 'El inventario que no se mueve es tema de Rotación. Ve los días parado.' },
      { slug: 'localizador', name: 'Localizador de Productos', text: 'Ve las tiendas cerca de una dirección y consulta el inventario ahora.' },
      { slug: 'distribuicao', name: 'Distribución', text: 'Ve si la falta puede empezar en el CEDIS, en la reposición o en la farmacia.' },
      { slug: 'jean', name: 'Jean', text: 'Pregunta qué tiendas están más críticas y abre la lista preparada.' },
    ],
  },
  faq: [
    { question: '¿El dato es en tiempo real?', answer: 'No. Es del día anterior (D-1), con la fecha arriba de la pantalla. Solo el botón Consultar ahora, en una tienda compatible, hace una consulta en el momento y muestra la hora de la respuesta.' },
    { question: '¿Por qué el Nivel no cambia cuando cambio el período de la tabla?', answer: 'Porque el Nivel siempre usa la ventana fija de 30 días, con corte el sábado.' },
    { question: '¿Quiebre de 0% y "sin dato" son lo mismo?', answer: 'No. 0% es un valor medido. "Sin dato" quiere decir que aún no hay medición.' },
    { question: '¿Por qué el número difiere de lo que vi en la farmacia?', answer: 'El dato es de ayer y parte del inventario es estimado. Usa el número para ver tendencias, no para auditar una tienda.' },
    { question: '¿Aparece una tienda que nunca vendió el producto?', answer: 'No. Las tiendas que nunca vendieron el ítem no entran en el cálculo.' },
    { question: '¿Por qué el gráfico de Disponibilidad no muestra mi cadena?', answer: 'Ese gráfico muestra solo las cadenas con lectura exacta de inventario.' },
    { question: '¿Puedo descargar los datos?', answer: 'Sí. La tabla de tiendas, el ranking por SKU y la lista de productos de la tienda salen en CSV, Excel, PDF o JSON.' },
  ],
  cta: {
    title: '¿Qué segmento quieres ver primero?',
    text: 'Validamos productos, cadenas y regiones, y la decisión que tu equipo quiere mejorar.',
    button: 'Hablar con Dinn',
  },
};
