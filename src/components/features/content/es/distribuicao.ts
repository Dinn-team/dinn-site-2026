import type { FeatureContent } from '../../types';

// Distribución (ES). Fuente: dinn-manager-app/docs/site-reproducao/funcionalidades/distribuicao.md (A1 a A10).
// Reglas: la cercanía geográfica no es vínculo de abasto. La lectura es una hipótesis. El dato es D-1.
// La pantalla no crea pedidos, no reubica inventario y no escribe en el sistema del distribuidor.
export const content: FeatureContent = {
  slug: 'distribuicao',
  meta: {
    title: 'Distribución | Dinn',
    description: 'Compara el inventario del distribuidor con la disponibilidad en las farmacias de la región. Ve la cobertura en días y una lectura para investigar la causa.',
  },
  hero: {
    title: '¿La falla está en el CEDIS, en la reposición o en la farmacia?',
    sub: 'Compara el inventario del distribuidor con la disponibilidad en las farmacias de la región. Ve la cobertura en días y decide dónde revisar primero.',
    note: 'Dato del día anterior (D-1). La lectura es una hipótesis. Tú confirmas la causa.',
  },
  steps: [
    { title: 'Elige el distribuidor y el producto', text: 'Filtra por distribuidor, CEDIS y un producto. Cadena, Estado y Ciudad acotan las farmacias.' },
    { title: 'Ve el CEDIS y las farmacias lado a lado', text: 'El mapa muestra cada CEDIS con un radio. Las farmacias dentro de él tienen un color según el nivel de inventario del producto.' },
    { title: 'Lee la cobertura e investiga la causa', text: 'El CEDIS muestra inventario, cobertura en días, rotación y precio. La Lectura de Dinn sugiere una hipótesis. Tú confirmas la causa.' },
  ],
  doors: {
    title: 'Por dónde empiezas',
    intro: 'Cada pregunta lleva a un punto de la pantalla.',
    items: [
      {
        title: '¿El CEDIS tiene el producto?',
        text: 'Las tarjetas de arriba y el historial muestran cuántos CEDIS tienen inventario y cómo cambió el saldo.',
        shot: { screen: 'dist', phase: 1, to: 'hist' },
      },
      {
        title: '¿Las farmacias de la región lo tienen?',
        text: 'El mapa muestra el radio del CEDIS y el nivel de inventario de cada farmacia.',
        shot: { screen: 'dist', phase: 3, to: 'map' },
      },
      {
        title: '¿Cuántos días aguanta el CEDIS?',
        text: 'La ventana del CEDIS divide el inventario entre la venta diaria estimada de la región.',
        shot: { screen: 'dist', phase: 4, to: 'cdk' },
      },
      {
        title: '¿Qué farmacias no tienen el producto?',
        text: 'La lista del CEDIS trae nivel, inventario, rotación y días parados, con búsqueda y orden.',
        shot: { screen: 'dist', phase: 4, to: 'dlist' },
      },
    ],
  },
  jean: {
    lead: 'Jean sabe en qué pantalla estás y qué filtros están activos. Pide una lectura en lenguaje simple.',
    prompts: ['¿Qué farmacias de la región de Brasilia no tienen Cefalgin?', '¿Cuántas farmacias de Brasilia tienen Cefalgin en nivel bajo?', '¿Dónde tengo quiebre cerca del CEDIS?'],
    turns: [
      { q: '¿Qué farmacias de Brasilia no tienen Cefalgin?', a: '41 de las 336 farmacias en un radio de 30 km no tienen Cefalgin.',
        card: { title: 'Farmacias en un radio de 30 km', rows: [['Sin inventario', '41'], ['Con inventario', '295'], ['Total', '336']] },
        steps: ['Abrir en el Localizador'],
      },
      { q: '¿Entonces la falla está en el CEDIS?', a: 'Aún no se puede afirmar. Es una hipótesis. Revisa el pedido y la reposición.',
      },
    ],
  },
  inside: {
    title: 'La Distribución por dentro',
    sub: 'Desplázate para ver cada etapa.',
    stages: [
      {
        tab: 'Filtros y resumen',
        title: 'Un recorte, tres números',
        text: 'Elige distribuidor y producto. Ve cuántos CEDIS se monitorean, cuántos productos tienen registro y la proporción de CEDIS con inventario.',
        shot: { screen: 'dist', phase: 1, to: 'hist' },
      },
      {
        tab: 'Mapa',
        title: 'El CEDIS y el radio de la región',
        text: 'El radio es de 10, 30 o 50 km. Las farmacias dentro de él tienen un color según el nivel de inventario.',
        shot: { screen: 'dist', phase: 3, to: 'map' },
      },
      {
        tab: 'CEDIS',
        title: 'Inventario, cobertura y Lectura de Dinn',
        text: 'Haz clic en el CEDIS. La ventana muestra inventario, cobertura, rotación, inventario en las farmacias, precio y una lectura en texto.',
        shot: { screen: 'dist', phase: 4, to: 'cdk' },
      },
      {
        tab: 'Lista',
        title: 'Las farmacias del CEDIS',
        text: 'Busca por nombre, cadena o CNPJ. Cambia el modelo de inventario. Descarga la lista. La lista aparece donde hay historial de compra.',
        shot: { screen: 'dist', phase: 4, to: 'dlist' },
      },
    ],
  },
  read: {
    title: 'Cómo leer el resultado',
    intro: 'La pantalla muestra el CEDIS y las farmacias juntos. Lee los dos en conjunto.',
    rows: [
      { label: 'Nivel de la farmacia', text: 'Alto, Medio, Bajo o Sin. El nivel viene listo de la base, para el producto elegido.', how: 'Color del pin: verde, ámbar, rojo o gris.' },
      { label: 'Nivel del CEDIS', text: 'El nivel viene de la cobertura. Sin inventario, No disponible. Menos de 7 días, Bajo. De 7 a 30 días, Medio. Más de 30 días, Alto.', how: 'Indicador del CEDIS en la ventana.' },
      { label: 'Cobertura', text: 'Inventario del CEDIS dividido entre la venta diaria estimada de la región. Es una aproximación de la región, no la cobertura real de ese CEDIS.', how: 'Aparece en días, como 8,6 días.' },
      { label: 'Rotación', text: 'Unidades que salieron del inventario por día, sumadas en las farmacias del radio. No es el total del período.', how: 'Indicador Rotación (un./día).' },
      { label: 'CEDIS con inventario y farmacias con inventario', text: 'El flujo es normal.', how: 'Lectura de Dinn en texto.' },
      { label: 'CEDIS en cero y farmacias con inventario', text: 'Indica que la distribución se hizo. No es quiebre por sí solo.', how: 'Lectura de Dinn en texto.' },
      { label: 'CEDIS con inventario y farmacias sin inventario', text: 'Es la falla. Trátala como hipótesis y revisa el pedido y la reposición.', how: 'Lectura de Dinn en texto.' },
      { label: 'CEDIS y farmacias en cero', text: 'Un quiebre real en la región.', how: 'Lectura de Dinn en texto.' },
      { label: 'Cercanía o compra', text: 'Cercanía es que la tienda esté dentro del radio. Vínculo es que la tienda haya comprado de ese CEDIS, para el producto, en los últimos 90 días. Una cosa no prueba la otra.', how: 'Campo Qué tiendas mostrar y la marca Compra del CEDIS o Solo en la región.' },
    ],
  },
  does: [
    'Muestra el inventario del producto en los CEDIS del distribuidor y la disponibilidad en las farmacias de la región.',
    'Calcula la cobertura del CEDIS en días a partir de la venta diaria estimada de la región.',
    'Da una lectura en texto simple, con una hipótesis para investigar.',
    'Muestra el historial de inventario de los CEDIS, por día o por semana.',
    'Lista las farmacias del CEDIS, con búsqueda, orden y descarga.',
  ],
  doesNot: [
    'No prueba que la causa esté en el CEDIS, en la reposición o en la farmacia. La lectura es una hipótesis.',
    'No trata la cercanía como vínculo de abasto.',
    'No actualiza la base durante el día. El dato es D-1. El inventario de la farmacia ahora viene de Consultar ahora.',
    'No muestra el inventario exacto de una farmacia en el mapa. El popup muestra el nivel.',
    'No crea pedidos, no reubica inventario y no escribe en el sistema del distribuidor.',
    'No cubre todos los distribuidores. La recolección en los CEDIS es reciente y el historial es corto.',
  ],
  use: {
    title: 'Cómo usarla bien',
    consult: [
      'Elige el distribuidor, o solo algunos CEDIS, y un producto.',
      'Acota por Cadena, Estado y Ciudad. Estado y Ciudad solo muestran lo que el distribuidor alcanza.',
      'Ajusta el radio, el período y Qué tiendas mostrar en el panel del mapa.',
      'Guarda el recorte y usa el botón Vistas para volver a él. Las vistas quedan en este navegador, hasta 30.',
    ],
    analyze: [
      '¿El CEDIS tiene inventario? Si no, la cobertura queda sin valor y la lectura dice que el CEDIS está sin inventario.',
      'Si lo tiene, ¿lo tienen las farmacias del radio? La dona y el panel muestran la parte sin inventario.',
      'Si el CEDIS tiene y las farmacias no, revisa el pedido y la reposición. Después confirma el vínculo de compra, si hay historial.',
      'En la lista del CEDIS, ordena por Stock, Parados o Congelados y cambia el Modelo.',
    ],
    extract: [
      'En la lista del CEDIS, usa el botón de descarga.',
      'El archivo respeta la búsqueda, el modelo, el período y el orden. Trae todas las páginas, hasta 30 mil tiendas.',
      'El mapa, el gráfico y las tarjetas no tienen exportación propia.',
    ],
    formats: ['CSV', 'Excel (XLS)', 'PDF', 'JSON'],
    note: 'Jean sabe en qué pantalla estás y qué filtros están activos. Pide una lectura en lenguaje simple.',
  },
  related: {
    title: 'Junto con otras funcionalidades',
    intro: 'Distribución reúne lo que otras funcionalidades miden en el punto de venta.',
    items: [
      { slug: 'ruptura', name: 'Quiebre', text: 'Para ver el quiebre de las farmacias antes de mirar el CEDIS.' },
      { slug: 'giro', name: 'Rotación', text: 'La rotación sumada de la región se convierte en la cobertura en días del CEDIS.' },
      { slug: 'preco', name: 'Precio', text: 'La ventana del CEDIS compara el precio en el CEDIS y en las farmacias de la región.' },
      { slug: 'localizador', name: 'Localizador de Productos', text: 'Para ver una farmacia de la región y consultar el inventario ahora, en tiendas elegibles.' },
    ],
  },
  faq: [
    { question: '¿Es en tiempo real?', answer: 'La base es D-1. Para ver el inventario de una farmacia ahora, usa Consultar ahora en la lista del CEDIS, en el detalle de la tienda o en el Localizador. Vale para tiendas elegibles.' },
    { question: '¿CEDIS en cero significa quiebre?', answer: 'No necesariamente. Quiebre es el CEDIS y las farmacias en cero. Un CEDIS en cero con farmacias abastecidas indica distribución hecha.' },
    { question: '¿La farmacia dentro del radio compra de este CEDIS?', answer: 'No se puede afirmar. Cercanía no es vínculo de abasto. Donde hay historial de compra, usa los modos de compra.' },
    { question: '¿Cómo se calcula la cobertura?', answer: 'Inventario del CEDIS dividido entre la venta diaria estimada de las farmacias del radio. Es una aproximación de la región.' },
    { question: '¿Por qué el historial es corto?', answer: 'La recolección en los CEDIS es reciente. La pantalla avisa cuando el historial es corto.' },
    { question: '¿Puedo descargar la lista?', answer: 'Sí. Descarga la lista de farmacias del CEDIS en CSV, Excel, PDF o JSON.' },
    { question: '¿Por qué veo un candado?', answer: 'Tu empresa no contrató la funcionalidad. El enlace de Soporte aparece debajo del candado.' },
    { question: '¿Precio y rotación aparecen para todos?', answer: 'No. Dependen de las funcionalidades Precio y Rotación contratadas.' },
  ],
  cta: {
    title: '¿Quieres ver Distribución con tus CEDIS?',
    text: 'Cuéntanos qué distribuidor y qué producto sigues. Una persona del equipo de Dinn responde.',
    button: 'Hablar con Dinn',
  },
};
