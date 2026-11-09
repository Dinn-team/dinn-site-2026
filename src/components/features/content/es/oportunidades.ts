import type { FeatureContent } from '../../types';

// Oportunidades (ES). Fuente: dinn-manager-app/docs/site-reproducao/funcionalidades/oportunidades.md (A1 a A10).
// Reglas: la venta se estima por el movimiento de inventario. La variación de participación tiene un margen de más o menos 1,3 p.p.
// Las acciones son sugerencias. No crean tareas. La proyección es una referencia en validación.
export const content: FeatureContent = {
  slug: 'oportunidades',
  meta: {
    title: 'Oportunidades | Dinn',
    description: 'Ve en qué territorio crece la categoría y tu laboratorio pierde espacio. Mapa por estado, ciudad y Brick, con venta estimada.',
  },
  hero: {
    title: '¿En qué territorio crece la categoría mientras pierdo participación?',
    sub: 'Elige la pregunta. Dinn colorea el mapa por estado y ordena los territorios según la señal. Luego abre el estado, la ciudad o el Brick.',
    note: 'La venta es estimada a partir del movimiento de inventario. La variación de participación tiene un margen de más o menos 1,3 p.p.',
  },
  steps: [
    { title: 'Elige la pregunta y el recorte', text: 'Define mercado, región, cadena y período de 7, 30, 60 o 90 días. Luego elige una de las tres preguntas.' },
    { title: 'Lee el mapa y los territorios', text: 'Cada estado recibe una señal. La tabla ordena los territorios y muestra la base de cada número.' },
    { title: 'Abre el detalle e investiga', text: 'Ve cadenas, tiendas, competencia, historial y proyección. Pide a Jean hasta 5 acciones cortas.' },
  ],
  doors: {
    title: '¿Hacia dónde quieres mirar?',
    intro: 'Las tres preguntas usan el mismo recorte y la misma base de tiendas. La tercera, ¿Dónde investigar la expansión?, muestra cadenas grandes de la categoría donde el laboratorio tiene poca presencia. Es una hipótesis. La cadena y el KAM deben validarla. Esta pregunta no tiene señal roja.',
    items: [
      {
        title: '¿Dónde avanza la categoría?',
        text: 'Mayor aumento de volumen estimado, en el mismo conjunto de tiendas. Muestra dónde el mercado crece o cae 5% o más.',
        shot: { screen: 'opps', phase: 0, to: 'qs' },
      },
      {
        title: '¿Dónde pierde espacio mi laboratorio?',
        text: 'Mayor caída de participación, en puntos porcentuales. Muestra dónde la participación varió 2 p.p. o más.',
        shot: { screen: 'opps', phase: 2, to: 'terr' },
      },
      {
        title: 'En el detalle del estado',
        text: 'Haz clic en un estado y ve mercado, laboratorio, participación y tiendas comparables, con la línea de lectura en texto.',
        shot: { screen: 'opps', phase: 3, to: 'dk' },
      },
    ],
  },
  jean: {
    lead: 'Jean ya conoce el recorte de la pantalla. Pregunta quién ganó espacio y pide acciones.',
    prompts: ['¿Qué marcas competidoras ganaron espacio en Santa Catarina?', '¿En qué cadenas de Santa Catarina ocurre esto?', '¿Qué acciones recomiendas para Santa Catarina?'],
    turns: [
      { q: '¿Quién ganó espacio en Santa Catarina?', a: 'Farmoquímica Aliança, en las últimas 4 semanas. La variación de Bionova Genéricos cabe en el margen de 1,3 p.p.',
        card: { title: 'Variación de participación', rows: [['Farmoquímica Aliança', '+3,1 p.p.'], ['Bionova Genéricos', '+0,9 p.p.'], ['Mi laboratorio', '−4,3 p.p.']] },
      },
      { q: '¿Qué acciones recomiendas?', a: 'Tres acciones cortas, por prioridad.',
        card: { title: 'Acciones sugeridas', rows: [['Investigar la caída en Rede Farmacore', 'Alta'], ['Analizar la pérdida en Drogaria Serrana', 'Alta'], ['Seguir a Farmácias Vitalis', 'Media']] },
      },
    ],
  },
  inside: {
    title: 'El territorio por dentro',
    sub: 'Desplázate para ver cada etapa.',
    stages: [
      {
        tab: 'Mapa',
        title: 'Un pin por estado',
        text: 'Cada estado tiene un pin con la señal de la pregunta. El brillo muestra las ciudades. Con zoom, muestra los Bricks.',
        shot: { screen: 'opps', phase: 2 },
      },
      {
        tab: 'Territorios',
        title: 'La misma lectura en lista',
        text: 'Ordena por cualquier columna. Si eliges una ciudad, la tabla pasa a listar ciudades.',
        shot: { screen: 'opps', phase: 2, to: 'terr' },
      },
      {
        tab: 'Detalle',
        title: 'Un estado, de cerca',
        text: 'Mercado, laboratorio, participación y tiendas comparables. Filtra por cadena, ciudad y Brick.',
        shot: { screen: 'opps', phase: 3, to: 'dk' },
      },
      {
        tab: 'Acciones',
        title: 'Hasta 5 acciones cortas',
        text: 'Jean lee el escenario y sugiere acciones. Son sugerencias. No se convierten en tareas.',
        shot: { screen: 'opps', phase: 5, to: 'acts' },
      },
    ],
  },
  read: {
    title: 'Cómo leer el resultado',
    intro: 'La señal cambia con la pregunta. Lee el color junto con la base de cada número.',
    rows: [
      { label: 'Verde', text: 'Mercado en alza: aumento de 5% o más. Laboratorio gana espacio: 2 p.p. o más. En la pregunta de expansión: cadenas grandes con poca presencia.', how: 'Pin del estado y etiqueta de la tabla.' },
      { label: 'Rojo', text: 'Mercado en caída de 5% o más, o laboratorio que pierde 2 p.p. o más. La pregunta de expansión no tiene señal roja.', how: 'Pin del estado y etiqueta de la tabla.' },
      { label: 'Ámbar', text: 'Dato frágil: pocas tiendas comparables o muchas tiendas que entran y salen. Confirma el dato antes de actuar.', how: 'Pin y etiqueta en ámbar.' },
      { label: 'Gris', text: 'Estable: variación menor que 5% o que 2 p.p. En la pregunta de expansión, significa sin candidata.', how: 'Pin en gris.' },
      { label: 'Venta estimada', text: 'Viene del movimiento de inventario. No es sell-out auditado.', how: 'Franja del método, encima del mapa.' },
      { label: 'Margen de 1,3 p.p.', text: 'La variación de participación tiene este margen. Una variación de hasta 1,3 p.p. cabe en el margen.', how: 'Triángulo ámbar en el título de la columna o de la tarjeta.' },
      { label: 'Panel comparable', text: 'Solo entran tiendas con dato válido en las dos ventanas. Las entradas y salidas aparecen aparte.', how: 'Tarjeta Tiendas comparables en el detalle.' },
      { label: 'En medición', text: 'Producto sin medición en las dos ventanas. Nunca se vuelve cero.', how: 'Texto En medición con un (i) que explica el motivo.' },
      { label: 'Panel pequeño', text: 'Pocas tiendas comparables. La señal es frágil y la pantalla no genera acciones.', how: 'Etiqueta ámbar en la tabla.' },
      { label: 'En validación', text: 'La proyección de 4 semanas es una referencia, no un modelo validado.', how: 'Línea discontinua con banda, rotulada En validación.' },
    ],
  },
  does: [
    'Compara la categoría y el laboratorio entre dos ventanas del mismo tamaño, solo en las mismas tiendas y los mismos productos.',
    'Muestra por estado, ciudad y Brick dónde avanza la categoría, dónde cae la participación y dónde hay cadenas por investigar.',
    'Muestra la competencia por laboratorio y por producto, el historial y una proyección de referencia de 4 semanas.',
    'Dice qué quedó fuera de la comparación y por qué. Cuando no hay dato, dice que no hay.',
    'Sugiere hasta 5 acciones cortas, con prioridad, a partir del escenario.',
  ],
  doesNot: [
    'No muestra venta real, fiscal ni sell-out. La venta es estimada.',
    'No afirma una precisión mayor que 1,3 p.p. en la variación de participación.',
    'No mide interés de búsqueda, etapa de tratamiento ni nuevos entrantes. No hay fuente para eso.',
    'No prueba que haya espacio para vender. La baja presencia en una cadena es una hipótesis.',
    'No presenta la proyección como modelo validado y no promete resultados.',
    'No crea tareas, responsables ni plazos. Las acciones son sugerencias.',
  ],
  use: {
    title: 'Cómo usarlo bien',
    consult: [
      'Elige el Mercado, la Región, la Cadena y el Período de 7, 30, 60 o 90 días. El Período se aplica al instante. Los otros filtros se aplican cerca de 0,5 segundos después del último cambio.',
      'La Ciudad solo se abre después de que eliges un estado. Con una ciudad, la tabla lista ciudades.',
      'En el detalle, elige también el Brick, una microrregión dentro de la ciudad.',
      'Usa Limpiar filtros para volver al mercado predeterminado.',
    ],
    analyze: [
      'Elige ¿Dónde avanza la categoría? y anota los estados con Mercado en alza.',
      'Cambia a ¿Dónde pierde espacio mi laboratorio? y ve cuáles estados tienen Laboratorio pierde espacio.',
      'Cruza las dos listas. El estado que aparece en las dos es donde el mercado crece y la participación cae.',
      'Abre el estado. La línea de lectura dice la causa en texto.',
      'En Cadenas, compara Presencia del laboratorio y Competidor persistente. En Competencia, ve quién ganó espacio.',
      'Baja a la ciudad y al Brick. Cuidado: hasta 1,3 p.p. cabe en el margen. Un porcentaje alto sobre una base pequeña engaña, así que mira también la variación en unidades.',
    ],
    extract: [
      'Descarga la tabla Territorios con el botón junto al título.',
      'En el detalle, descarga las tablas Cadenas, Mayores variaciones de la categoría y Competencia.',
      'El archivo sale como la tabla está en la pantalla, en el mismo orden y con los filtros del momento.',
      'El archivo CSV se abre en Excel.',
    ],
    formats: ['CSV', 'Excel (XLS)', 'PDF', 'JSON'],
    note: 'La lista de tiendas mide la variación de la categoría, no la pérdida de participación del laboratorio.',
  },
  related: {
    title: 'Junto con otras funcionalidades',
    intro: 'Oportunidades señala el territorio. Las otras funcionalidades ayudan a entender el motivo.',
    items: [
      { slug: 'mercado', name: 'Mercado', text: 'Para ver la participación por laboratorio y las tiendas donde solo vende la competencia.' },
      { slug: 'ruptura', name: 'Quiebre', text: 'Para ver si la pérdida de espacio viene de un producto faltante.' },
      { slug: 'distribuicao', name: 'Distribución', text: 'Para ver si el problema está en el CEDIS o en la reposición de esa región.' },
      { slug: 'jean', name: 'Jean', text: 'Pregunta quién ganó participación y pide hasta 5 acciones cortas.' },
    ],
  },
  faq: [
    { question: '¿La venta es la venta real de las tiendas?', answer: 'No. Es estimada a partir del movimiento de inventario en las tiendas monitoreadas. No es sell-out auditado.' },
    { question: '¿Qué tan precisa es la variación de participación?', answer: 'El margen es de más o menos 1,3 puntos porcentuales.' },
    { question: '¿Por qué un producto aparece como "En medición"?', answer: 'Su venta medida no cubre las dos ventanas. Queda fuera de la comparación y la pantalla explica el motivo.' },
    { question: '¿Por qué el laboratorio perdió participación si vendió más?', answer: 'Porque el mercado comparable creció más que el laboratorio.' },
    { question: '¿Qué es la proyección?', answer: 'Una referencia semanal de las próximas 4 semanas, con banda de incertidumbre. Está en validación. No es un modelo validado.' },
    { question: '¿La proyección existe para ciudad y Brick?', answer: 'No. Solo para el estado completo o para una cadena a la vez.' },
    { question: '¿Las acciones se convierten en tareas?', answer: 'No. Son hasta 5 sugerencias con prioridad, sin responsable ni plazo.' },
    { question: '¿Por qué aparece "Panel pequeño"?', answer: 'Hay pocas tiendas comparables. La señal es frágil y la pantalla no genera acciones.' },
    { question: '¿Puedo descargar los datos?', answer: 'Sí, en CSV, Excel, PDF o JSON.' },
    { question: '¿Quién ve Oportunidades?', answer: 'Quien tiene la funcionalidad habilitada. Los demás ven un candado.' },
  ],
  cta: {
    title: '¿Quieres ver Oportunidades con tu mercado?',
    text: 'Cuéntanos qué mercado y qué estados sigues. Una persona del equipo de Dinn responde.',
    button: 'Habla con Dinn',
  },
};
