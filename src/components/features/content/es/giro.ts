import type { FeatureContent } from '../../types';

// Rotación (giro), ES (es-419, tuteo). Fuente: dinn-manager-app/docs/site-reproducao/funcionalidades/giro.md.
// Reglas: la rotación es salida de inventario, no una venta confirmada. El dato es D-1. Sin promesa de resultados.
export const content: FeatureContent = {
  slug: 'giro',
  meta: {
    title: 'Rotación | Dinn',
    description: 'Mira si el producto se mueve en cada tienda y cuántos días el inventario estuvo sin movimiento. Dato del día anterior, para 7, 30 o 90 días.',
  },
  hero: {
    title: '¿El producto rota? Mira dónde se detiene el inventario.',
    sub: 'Dinn muestra la rotación por tienda, cuántos días el inventario estuvo sin movimiento y dónde vale la pena investigar una caída.',
    note: 'Dato del día anterior (D-1). La rotación es una estimación y no confirma una venta.',
  },
  steps: [
    { title: 'Elige el producto y la ventana', text: 'Filtra por producto, red, estado, ciudad o Brick. Elige 7, 30 o 90 días. La rotación por tienda aparece cuando hay un producto elegido.' },
    { title: 'Mira qué rota y qué está parado', text: 'Compara las cadenas por disponibilidad. Mira cuántas tiendas están paradas hace 7, 30, 60 o 90 días. Ordena las tiendas por días parado.' },
    { title: 'Abre la tienda e investiga', text: 'Haz clic en una tienda para ver la rotación, los días parado y el inventario congelado de cada producto. Descarga la lista o pregunta a Jean.' },
  ],
  doors: {
    title: 'Dónde aparece la rotación',
    intro: 'El mismo dato llega por cuatro caminos. Elige el que encaja con tu pregunta.',
    items: [
      {
        title: 'En Inicio',
        text: 'La tabla Puntos de venta muestra la rotación, el VB sugerido, los días parado y el inventario congelado de cada tienda. Ordena por días parado.',
        shot: { screen: 'turn', phase: 5, to: 'tbl' },
      },
      {
        title: 'En la tienda',
        text: 'Abre cualquier tienda. Mira la rotación, los días parado y el inventario congelado, producto por producto.',
        shot: { screen: 'rupture', phase: 9, to: 'm-tbl' },
      },
      {
        title: 'En el Localizador',
        text: 'En la ventana emergente de la tienda, la tarjeta Rotación muestra el promedio de unidades por día. La tarjeta Parado muestra hace cuántos días el inventario no se mueve.',
        shot: { screen: 'locator', phase: 7, to: 'popup' },
        link: { slug: 'localizador', label: 'Ver el Localizador' },
      },
      {
        title: 'En Distribución',
        text: 'La rotación sumada de la región se convierte en la cobertura en días del CEDIS, en el panel del CEDIS.',
        shot: { screen: 'dist', phase: 4, to: 'cdk' },
        link: { slug: 'distribuicao', label: 'Ver Distribución' },
      },
    ],
  },
  jean: {
    lead: 'Pregunta a Jean dónde está parado el inventario. Ella abre la lista directo en Inicio.',
    prompts: ['¿Dónde tengo más inventario congelado en el segmento actual?', '¿Qué tiendas concentran más inventario congelado?', '¿Cuántos días de inventario tengo de Cefalgin en São Paulo?'],
    turns: [
      { q: '¿Dónde tengo más inventario congelado?', a: 'Estas tres cadenas tienen más inventario congelado. Abre la lista en Inicio, ya filtrada.',
        card: { title: 'Inventario congelado en 30 días', rows: [['Rede Farmacore', '1.240 un.'], ['Drogaria Serrana', '980 un.'], ['Farmácias Vitalis', '760 un.']] },
        steps: ['Abrir en Inicio'],
      },
      { q: '¿Cuántos días de inventario tengo de Cefalgin en São Paulo?', a: 'Cerca de 12 días, según el promedio de unidades que salieron del inventario en los últimos 30 días. Es una estimación.',
      },
    ],
  },
  inside: {
    title: 'La rotación por dentro',
    sub: 'Desplázate para ver cada etapa.',
    stages: [
      {
        tab: 'Redes',
        title: 'Quién está rotando',
        text: 'Cada cadena tiene tres franjas: Sin stock, Sin ventas y En stock (rotando). Pon el cursor sobre una cadena para ver los porcentajes y el total de tiendas.',
        shot: { screen: 'turn', phase: 2, to: 'top' },
      },
      {
        tab: 'Parado',
        title: 'Cuántas tiendas están paradas',
        text: 'Mira las tiendas con inventario parado hace 7, 30, 60 y 90 días. Las franjas son acumulativas: una tienda parada hace 45 días cuenta en 7 y en 30.',
        shot: { screen: 'turn', phase: 3, to: 'st' },
      },
      {
        tab: 'Tiendas',
        title: 'La rotación de cada tienda',
        text: 'Con un producto elegido, la tabla muestra rotación, VB sugerido, reposición, días parado e inventario congelado. Ordena por días parado.',
        shot: { screen: 'turn', phase: 5, to: 'tbl' },
      },
      {
        tab: 'Producto',
        title: 'Producto por producto, en la tienda',
        text: 'El panel de la tienda muestra las mismas medidas para cada producto y la alerta de inventario parado.',
        shot: { screen: 'rupture', phase: 9, to: 'm-tbl' },
      },
    ],
  },
  read: {
    title: 'Cómo leer el resultado',
    intro: 'Cada número tiene una regla. Lee la regla antes de comparar dos pantallas.',
    rows: [
      { label: 'Rotación en Inicio', text: 'Unidades que salieron del producto elegido, sumadas en el período de 7, 30 o 90 días. Incluye ventas y otros movimientos. La reposición no cuenta.', how: 'Aparece como 13 un. Sin producto elegido, aparece --.' },
      { label: 'Rotación por día en el Localizador', text: 'Promedio de unidades que salieron por día en los últimos 30 días. Es el total de salidas dividido entre 30.', how: 'Aparece como 1,4 un./día. No lo compares directo con la suma de Inicio.' },
      { label: 'VB sugerido', text: 'Volumen de venta que el modelo de Dinn sugiere para el producto, en unidades.', how: 'Aparece como 2 un.' },
      { label: 'Reposición', text: 'Reposición que Dinn sugiere del producto para la tienda, en unidades de SKU.', how: 'Aparece como 3 un. Sin dato, aparece --.' },
      { label: 'Días parado', text: 'Días del período elegido en que el inventario del producto no tuvo movimiento.', how: 'Aparece como 33 días de 90 días, con una barra delgada.' },
      { label: 'Congelados', text: 'Unidades que mantuvieron la misma cantidad en inventario durante todo el período.', how: 'Aparece como 3 un.' },
      { label: 'Alerta de inventario parado', text: 'Hay inventario en la tienda, pero el producto no se mueve. Atención desde 30 días parado. Crítico en el límite de la ventana de 90 días.', how: 'Triángulo ámbar (Atención) o rojo (Crítico) junto a Días parado.' },
      { label: 'Nivel de stock parado', text: 'Cuántas tiendas están paradas hace 7, 30, 60 o 90 días o más. Las franjas son acumulativas. El porcentaje es sobre el total de tiendas, así que las filas no suman 100%.', how: 'Cuatro filas, cada una con punto, número y barra.' },
      { label: 'Disponibilidad por red', text: 'Para cada cadena, la división de las tiendas en Sin stock, Sin ventas y En stock (rotando) en el período.', how: 'Columnas apiladas en coral, ámbar y morado.' },
      { label: 'Cobertura estimada', text: 'Cuánto tiempo debería durar el inventario, según el historial reciente de rotación. Es una estimación, no una garantía. Solo aparece con inventario mayor que cero.', how: 'Etiqueta en la ventana de la tienda del Localizador. Ejemplos: Puede agotarse en hasta 2 días, 3 a 4 días, 5 a 7 días o más de 7 días.' },
    ],
  },
  does: [
    'Muestra la rotación estimada de un producto en cada tienda de la cartera, en el período de 7, 30 o 90 días.',
    'Muestra cuántas tiendas tienen el inventario sin movimiento hace 7, 30, 60 y 90 días, y cuáles son.',
    'Muestra el volumen sugerido y la reposición sugerida por el modelo de Dinn, cuando tu empresa contrata esas columnas.',
    'Avisa cuando hay inventario en la tienda y el producto no se mueve, para que el equipo investigue.',
  ],
  doesNot: [
    'No confirma una venta. Un movimiento de inventario no es una venta confirmada.',
    'No dice el motivo del inventario parado. Puede ser baja demanda, exceso de inventario o falla en la lectura.',
    'No muestra la rotación de varios productos juntos. Rotación, VB sugerido y reposición solo tienen valor con un producto elegido.',
    'No muestra la rotación a lo largo del tiempo en un gráfico de líneas. Hoy son totales por período y el promedio por día en el Localizador.',
    'No es tiempo real. El dato es del día anterior.',
    'No promete más ventas ni menos inventario parado.',
  ],
  use: {
    title: 'Cómo usarla bien',
    consult: [
      'Elige un producto en el filtro Productos. Con ninguno o con varios, las columnas muestran --.',
      'Elige el período de la tabla: 7, 30 o 90 días. Cambia Días parado, Congelados y Rotación.',
      'Para ver una tienda en el mapa, abre el Localizador. Elige el producto y la dirección. Haz clic en el pin.',
    ],
    analyze: [
      'Compara las cadenas en el gráfico de disponibilidad. Muchas franjas Sin ventas pueden indicar inventario que no rota.',
      'En la tarjeta de inventario parado, mira cuántas tiendas pasan de 30 y de 60 días.',
      'Ordena la tabla por Días parado. Mira primero las tiendas con triángulo rojo.',
      'Abre la tienda y compara la rotación de los productos. Rotación cero con inventario y muchos días parado pide una conversación con la cadena.',
    ],
    extract: [
      'Usa el botón Descargar de la tabla de puntos de venta. El archivo incluye todas las tiendas del segmento.',
      'El panel de la tienda también tiene Descargar, con la lista de productos de esa tienda.',
      'Guarda el segmento en Visualizaciones guardadas para volver con un clic.',
      'Pregunta a Jean y pide los datos en tabla. El Localizador no tiene botón de descarga.',
    ],
    formats: ['CSV', 'Excel (XLS)', 'PDF', 'JSON'],
    note: 'La rotación y el inventario parado son alertas para investigar. La diferencia entre dos números puede venir del período, de la tienda o de la lectura del inventario.',
  },
  related: {
    title: 'Junto con otras funcionalidades',
    intro: 'La rotación responde una pregunta. Las otras funcionalidades responden preguntas cercanas.',
    items: [
      { slug: 'ruptura', name: 'Quiebre', text: 'Una tienda sin inventario es tema de Quiebre. Rotación mira el producto que está en la tienda, pero no se mueve.' },
      { slug: 'preco', name: 'Precio', text: 'El precio de la tienda está en la columna junto a Rotación, en la tabla de Inicio.' },
      { slug: 'localizador', name: 'Localizador de Productos', text: 'Para encontrar el producto cerca de una dirección y consultar el inventario ahora.' },
      { slug: 'distribuicao', name: 'Distribución', text: 'La rotación sumada por región se convierte en cobertura en días del CEDIS.' },
    ],
  },
  faq: [
    { question: '¿La rotación es una venta?', answer: 'No. Es la salida de unidades del inventario en el período. Incluye ventas y otros movimientos, y no incluye la reposición. Es una estimación.' },
    { question: '¿Por qué la columna Rotación muestra --?', answer: 'No hay un producto elegido o no hay dato para la tienda. Elige exactamente un producto en el filtro Productos.' },
    { question: '¿Por qué aparece "No contratado"?', answer: 'Tu empresa no contrató la funcionalidad. Rotación, VB sugerido y Reposición se contratan por separado.' },
    { question: '¿Qué es el inventario parado?', answer: 'Es el inventario informado igual durante varios días seguidos. Sirve de alerta para investigar. No siempre significa falta de ventas.' },
    { question: '¿Qué es el inventario congelado?', answer: 'Son las unidades que quedaron en la misma cantidad durante todo el período.' },
    { question: '¿Cuál es la diferencia entre Atención y Crítico?', answer: 'Atención: hay inventario y el producto no tiene movimiento hace 30 días o más. Crítico: el producto no tuvo movimiento en toda la ventana de 90 días.' },
    { question: '¿La rotación de la ventana emergente es igual a la de la tabla?', answer: 'No. La tabla suma las salidas del período. La ventana muestra el promedio por día de los últimos 30 días. No compares los dos números directo.' },
    { question: '¿Los datos son en tiempo real?', answer: 'No. Son del día anterior (D-1). Solo la consulta "Consultar ahora" del Localizador es en vivo, en tiendas compatibles.' },
    { question: '¿Puedo descargar la rotación?', answer: 'Sí, en la tabla de puntos de venta y en el panel de la tienda, en CSV, Excel, PDF o JSON.' },
  ],
  cta: {
    title: '¿Quieres ver la rotación de tu producto en las tiendas?',
    text: 'Cuéntanos qué producto y qué cadenas te interesan. Una persona del equipo de Dinn te muestra el segmento.',
    button: 'Habla con Dinn',
  },
};
