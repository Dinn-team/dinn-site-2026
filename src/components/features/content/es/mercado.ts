import type { FeatureContent } from '../../types';

// Mercado. Versión en español (es-419). Fuente: dinn-manager-app/docs/site-reproducao/funcionalidades/mercado.md (A1 a A10).
// Reglas: la venta se estima por el movimiento de inventario. Los competidores aparecen sumados, no uno a uno.
// La variación de participación en p.p. queda en Oportunidades.
export const content: FeatureContent = {
  slug: 'mercado',
  meta: {
    title: 'Mercado | Dinn',
    description: 'Compara tu laboratorio con los competidores en las mismas tiendas y en el mismo período. La venta se estima por el movimiento de inventario.',
  },
  hero: {
    title: '¿Perdí participación o perdí venta?',
    sub: 'Dinn compara tu laboratorio con los competidores en las mismas tiendas y en el mismo período. También muestra dónde solo vende el competidor.',
    note: 'La venta se estima por el movimiento de inventario. Datos y nombres ilustrativos.',
  },
  steps: [
    { title: 'Elige el mercado y la ventana', text: 'Define el Mercado, el Brick y el período. Los filtros valen para las tarjetas, las roscas y la tabla.' },
    { title: 'Compárate con los competidores', text: 'Mira la participación por laboratorio y por producto. En el gráfico, compara las ventas estimadas de tu laboratorio con las de los competidores.' },
    { title: 'Abre tiendas o cadenas y descarga la lista', text: 'Filtra las tiendas que concentran el 80% del volumen o que solo tienen competidores. Descarga en CSV, Excel, PDF o JSON.' },
  ],
  doors: {
    title: 'Por dónde empezar',
    intro: 'Mercado abre en el mercado predeterminado de tu laboratorio. Desde ahí, llegas al mismo dato por tres caminos.',
    items: [
      {
        title: 'Desde el menú',
        text: 'Haz clic en Mercado en el menú lateral. La pantalla abre en el mercado predeterminado de tu laboratorio, con 30 días.',
        shot: { screen: 'market', phase: 3, to: 'dash' },
      },
      {
        title: 'Desde el filtro',
        text: 'Cambia el Mercado, el Brick o el período en la parte superior. Para volver al mismo recorte, guarda la vista y usa el botón Vistas.',
        shot: { screen: 'market', phase: 1, to: 'mkt' },
      },
      {
        title: 'Desde la tabla de tiendas',
        text: 'Ordena por volumen. Filtra las tiendas que concentran el 80% del volumen o que solo tienen competidores.',
        shot: { screen: 'market', phase: 6, to: 'net' },
      },
    ],
  },
  jean: {
    lead: 'Jean abre con tu recorte de Mercado. Pregunta quién ganó participación.',
    prompts: ['¿Quién ganó participación en Brasil?', '¿Qué cambió en el último trimestre en Brasil?', '¿Cuáles son los mayores laboratorios del mercado?'],
    turns: [
      { q: '¿Quién ganó participación en Brasil?', a: 'Hoy tu laboratorio tiene la mayor porción, con el 25,5% de las ventas estimadas.',
        card: { title: 'Participación por laboratorio', rows: [['Mi laboratorio', '25,5%'], ['Farmoquímica Aliança', '22,4%'], ['Bionova Genéricos', '17,9%']] },
      },
      { q: '¿Qué cambió en el último trimestre?', a: 'Poco. La caída de 0,9 p.p. está dentro del margen de 1,3 p.p. Eso no indica pérdida.',
      },
    ],
  },
  inside: {
    title: 'Mercado, paso a paso',
    sub: 'Desplázate para ver cada etapa.',
    stages: [
      {
        tab: 'Indicadores',
        title: 'Cuántas tiendas y dónde está el volumen',
        text: 'Total de tiendas en el mercado, tiendas solo con competencia y tiendas con el 80% del volumen.',
        shot: { screen: 'market', phase: 3, to: 'dash' },
      },
      {
        tab: 'Participación',
        title: 'Quién vende cuánto',
        text: 'Dos roscas: por laboratorio y por producto. El total aparece en el centro.',
        shot: { screen: 'market', phase: 4, to: 'lab' },
      },
      {
        tab: 'Ventas estimadas',
        title: 'Tú contra los competidores',
        text: 'Dos curvas: Mi laboratorio y Competencia. Mira por día o por semana, en 7, 30 o 90 días.',
        shot: { screen: 'market', phase: 6, to: 'sales' },
      },
      {
        tab: 'Tiendas',
        title: 'Dónde está el volumen',
        text: 'La tabla por tienda, con búsqueda, tres segmentos y orden.',
        shot: { screen: 'market', phase: 6, to: 'net' },
      },
      {
        tab: 'Cadenas',
        title: 'Quién cubre qué',
        text: 'La tabla por cadena muestra las tiendas registradas, las tiendas con registro y la cobertura.',
        shot: { screen: 'market', phase: 8, to: 'net' },
      },
    ],
  },
  read: {
    title: 'Cómo leer el resultado',
    intro: 'Toda venta de esta pantalla es estimada. Lee los indicadores como una señal para investigar.',
    rows: [
      { label: 'Total de tiendas en el mercado', text: 'Tiendas con venta estimada positiva en el mercado. Es la base de la lectura.', how: 'Tarjeta en la parte superior.' },
      { label: 'Tiendas solo con competencia', text: 'Tiendas con venta del competidor y ninguna venta de tu laboratorio.', how: 'Tarjeta en la parte superior.' },
      { label: 'Tiendas con el 80% del volumen', text: 'El conjunto más pequeño de tiendas que suma el 80% del volumen del mercado.', how: 'Tarjeta en la parte superior. En la tabla, la etiqueta Top 80%.' },
      { label: 'Sin mi lab', text: 'El competidor vendió en 2 días o más y tu laboratorio no vendió.', how: 'Etiqueta con contorno en la tabla.' },
      { label: 'Curvas de ventas', text: 'Mi laboratorio contra la suma de los competidores, en las mismas tiendas.', how: 'Mi laboratorio en morado y Competencia en azul.' },
      { label: 'Porción Otros', text: 'Lo que queda después de las siete porciones mayores de la rosca.', how: 'Última porción de cada rosca.' },
      { label: 'Cobertura', text: 'Tiendas con registro sobre tiendas registradas en la cadena. Puede pasar del 100% cuando el registro está desactualizado.', how: 'Barra en la tabla por cadena. La pantalla muestra el número de la fuente.' },
      { label: 'En revisión', text: 'Dato bajo investigación. La pantalla muestra el aviso en lugar del número.', how: 'El texto En revisión y un triángulo ámbar.' },
    ],
  },
  does: [
    'Compara tu laboratorio con la suma de los competidores en el mismo mercado, en las mismas tiendas y en el mismo período.',
    'Muestra la participación estimada por laboratorio y por producto.',
    'Lista las tiendas y las cadenas por volumen, con la cobertura de monitoreo.',
    'Muestra las tiendas donde solo vende el competidor.',
    'Exporta la tabla, con el filtro actual.',
    'Guarda vistas, con mercado y Brick, para volver al recorte.',
  ],
  doesNot: [
    'No muestra venta real, factura ni sell-out auditado. La venta se estima por el movimiento de inventario.',
    'No muestra al competidor producto por producto. Los datos de competidores están agregados.',
    'No cubre todo el retail. Cubre las cadenas de tu contrato.',
    'No calcula la variación de participación en puntos porcentuales. Esa lectura está en Oportunidades.',
    'No es en tiempo real. El dato llega hasta el día anterior.',
    'No promete ganancia de participación ni de venta.',
  ],
  use: {
    title: 'Cómo usarlo bien',
    consult: [
      'Elige el Mercado. Es obligatorio. Si vacías la lista, vuelve al predeterminado.',
      'Elige el Brick y el período de 30, 60 o 90 días. El gráfico de ventas tiene su propio período.',
      'Guarda el recorte que usas y vuelve a él con el botón Vistas.',
    ],
    analyze: [
      '¿Tu laboratorio estable y Competencia subiendo? La participación puede caer sin caída de venta, porque el mercado creció. Mira en qué cadenas y tiendas los competidores venden más.',
      '¿Tu laboratorio bajando y Competencia estable o subiendo? Puede haber pérdida de venta. Revisa la cobertura y las tiendas con Sin mi lab.',
      '¿Los dos bajando? El mercado se redujo o cambió la medición. Compara la participación y la cobertura de las cadenas antes de decidir.',
      '¿Tu laboratorio subiendo y Competencia estable? Puedes estar ganando espacio. Confirma en Oportunidades, con el margen de 1,3 p.p.',
      'Antes de actuar, revisa la cobertura de la cadena. Una tienda sin registro de inventario puede parecer que no tiene tu producto.',
    ],
    extract: [
      'Usa el botón de descarga junto a los filtros de la tabla, por tienda o por cadena.',
      'El archivo lleva todas las filas del filtro actual, sin paginar. Los nombres son mercado-pdvs y mercado-redes, con la fecha.',
      'El archivo Excel es un .xls. Excel puede mostrar un aviso de formato al abrir.',
      'Pregunta a Jean quién ganó participación o qué cambió en el último trimestre. Ella recibe tu recorte.',
    ],
    formats: ['CSV', 'Excel (XLS)', 'PDF', 'JSON'],
    note: 'Esta lectura es una señal para investigar. No es una prueba. La variación de participación, con su margen, está en Oportunidades.',
  },
  related: {
    title: 'Junto con otras funcionalidades',
    intro: 'Mercado muestra el panorama general. Estas funcionalidades muestran dónde actuar.',
    items: [
      { slug: 'oportunidades', name: 'Oportunidades', text: 'Para ver la variación de participación por estado, ciudad y Brick.' },
      { slug: 'preco', name: 'Precio', text: 'Para comparar el precio de tu producto entre tiendas.' },
      { slug: 'ruptura', name: 'Quiebre', text: 'Para ver si la caída viene de un producto faltante.' },
      { slug: 'jean', name: 'Jean', text: 'Pregunta qué cambió en tu mercado y recibe el resumen.' },
    ],
  },
  faq: [
    { question: '¿Las ventas son reales?', answer: 'No. Se estiman por el movimiento de inventario. No son facturas ni sell-out auditado.' },
    { question: '¿El dato es en tiempo real?', answer: 'No. La pantalla muestra el período que eliges, hasta el día anterior (D-1).' },
    { question: '¿Qué es el "mercado"?', answer: 'Es el conjunto de productos que compiten con el tuyo. Dinn configura el mercado predeterminado de tu laboratorio.' },
    { question: '¿Veo a los competidores uno por uno?', answer: 'No. La pantalla muestra la participación por laboratorio y por producto, y la suma de los competidores. Los datos están agregados y respetan los derechos de uso.' },
    { question: '¿Por qué la cobertura pasa del 100%?', answer: 'El registro de la cadena puede estar desactualizado. La pantalla muestra el número de la fuente y no lo corrige.' },
    { question: '¿Por qué la curva cae al final?', answer: 'La última semana puede estar incompleta. El globo muestra "(parcial)".' },
    { question: '¿Cuál es el margen de una variación de participación?', answer: 'Más o menos 1,3 puntos porcentuales. Los datos parten de la posición de inventario y pueden diferir de auditorías de venta. Esa lectura está en Oportunidades.' },
    { question: '¿Quién ve la pantalla?', answer: 'Quienes trabajan en laboratorios que contrataron Mercado. Los demás ven un candado.' },
  ],
  cta: {
    title: '¿Quieres ver Mercado con tu recorte?',
    text: 'Cuéntanos cuál es tu mercado. Una persona del equipo de Dinn responde.',
    button: 'Hablar con Dinn',
  },
};
