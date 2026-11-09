import type { FeatureContent } from '../../types';

// Localizador de Productos (ES-419). Fuente: dinn-manager-app/docs/site-reproducao/funcionalidades/localizador.md.
// Reglas: el mapa y la lista son del día anterior (D-1), en rango. Solo "Consultar ahora" lee la tienda en el momento.
// Sin exportación. La probabilidad de inventario no es garantía.
export const content: FeatureContent = {
  slug: 'localizador',
  meta: {
    title: 'Localizador de Productos | Dinn',
    description: 'Encuentra las tiendas que tienen el producto, cerca de cualquier dirección. Nivel de inventario del día anterior y consulta al momento en tienda compatible.',
  },
  hero: {
    title: 'Encuentra las tiendas que tienen el producto, cerca de cualquier dirección.',
    sub: 'Indica el producto y la dirección. Dinn muestra en el mapa las farmacias cercanas, el nivel de inventario, la fiabilidad de la información y la fecha de la lectura.',
    note: 'Dato de ayer (D-1). Inventario ahora, solo cuando consultas.',
  },
  steps: [
    { title: 'Indica el producto y la dirección', text: 'Busca el producto por nombre o SKU. Escribe la dirección de referencia. Elige el radio, de 5 a 50 km.' },
    { title: 'Lee el mapa y la lista', text: 'Cada marcador es una farmacia, coloreado por el nivel de inventario de ayer. La lista trae rango, fiabilidad, distancia y, si está contratado, precio.' },
    { title: 'Abre la tienda y confirma', text: 'Mira la rotación, el inventario parado y la ruta. En una tienda compatible, consulta ahora y ve la hora de la respuesta.' },
  ],
  doors: {
    title: 'Tres preguntas que responde el Localizador',
    intro: 'Cada una empieza en la misma búsqueda y termina en un punto distinto de la pantalla.',
    items: [
      {
        title: 'La llamada del consumidor',
        text: 'Un paciente pregunta dónde encontrar un producto. Busca por su dirección. Responde con la tienda más cercana y la fecha de la información. No llames tienda por tienda.',
        shot: { screen: 'locator', phase: 6, to: 'map' },
      },
      {
        title: 'La visita de esta tarde',
        text: 'Antes de hablar con la cadena, consulta la tienda. En una tienda compatible, ves lo que informa ahora. Lleva ese dato a la conversación.',
        shot: { screen: 'locator', phase: 9, to: 'p-box' },
      },
      {
        title: 'Después de la reposición',
        text: '¿La cadena acordó una entrega? Consulta la misma tienda de nuevo. Mira si el producto aparece en la respuesta.',
        shot: { screen: 'locator', phase: 9, to: 'popup' },
      },
    ],
  },
  jean: {
    lead: 'Pide el producto y la ciudad. Jean abre el Localizador ya completado.',
    prompts: ['¿Dónde encuentro Cefalgin cápsula 400mg en São Paulo?', '¿Qué farmacias de Campinas tienen Cefalgin en inventario?', '¿Puedo confirmar si todavía hay inventario ahora?'],
    turns: [
      { q: '¿Dónde encuentro Cefalgin en São Paulo?', a: 'Hay 128 farmacias en un radio de 5 km. Estas tenían inventario en la lectura de ayer.',
        card: { title: 'Más cercanas con inventario', rows: [['Rede Farmacore Jardim América', '4–9 un.'], ['Drogaria Serrana Ipiranga', '7–19 un.']] },
        steps: ['Abrir en el Localizador'],
      },
      { q: '¿Puedo confirmar el inventario ahora?', a: 'Sí, en una tienda compatible. Haz clic en Consultar ahora. La respuesta muestra la hora.',
      },
    ],
  },
  inside: {
    title: 'De la búsqueda a la orientación, en cinco pasos',
    sub: 'Desplázate para ver cada etapa.',
    stages: [
      {
        tab: 'Localizar',
        title: 'Indica la dirección y el radio',
        text: 'Indica la dirección o el área y el radio. Las farmacias cercanas se muestran en el mapa.',
        shot: { screen: 'locator', phase: 3, to: 'form' },
      },
      {
        tab: 'Elegir la tienda',
        title: 'Abre una tienda',
        text: 'La lectura base es de ayer. Solo las tiendas compatibles tienen la consulta.',
        shot: { screen: 'locator', phase: 7, to: 'popup' },
      },
      {
        tab: 'Consultar ahora',
        title: 'Pregunta a la fuente de la tienda',
        text: 'Dinn le pregunta a la fuente de la tienda en ese momento.',
        shot: { screen: 'locator', phase: 8, to: 'p-box' },
      },
      {
        tab: 'Respuesta',
        title: 'Respuesta y hora',
        text: 'La respuesta muestra la hora de la consulta, separada de la lectura de ayer.',
        shot: { screen: 'locator', phase: 9, to: 'p-box' },
      },
      {
        tab: 'Orientar',
        title: 'Comparte',
        text: 'Orienta al consumidor con lo que la tienda informó y cuándo. Abre la ruta y comparte la dirección.',
        shot: { screen: 'locator', phase: 9, to: 'popup' },
      },
    ],
  },
  read: {
    title: 'Cómo leer el resultado',
    intro: 'El Localizador muestra tres lecturas distintas. Mira cuál está en la pantalla.',
    rows: [
      { label: 'Inventario de ayer (D-1)', text: 'Rango de inventario leído el día anterior. No muestra el número exacto.', how: 'Aparece como 4–9 un., con la fecha de la estimación.' },
      { label: 'Inventario estimado', text: 'Calculado con el historial de la tienda. Siempre viene con la fiabilidad.', how: 'Etiqueta Stock estimado en la ficha de la tienda.' },
      { label: 'Respuesta en vivo', text: 'Lo que la tienda respondió al hacer clic, con la hora. Solo en tienda compatible.', how: 'Aparece como 6 un., con Consulta hecha ahora y la hora.' },
      { label: 'Nivel del marcador', text: 'Alto en verde, Medio en ámbar, Bajo en rojo, No disponible en gris.', how: 'Color del marcador y del rango en la lista.' },
      { label: 'Inventario exacto o estimado', text: 'Exacto es la lectura del e-commerce de la tienda. Estimado es la proyección del modelo. Los dos aparecen como rango.', how: 'Etiqueta verde o morada en la parte superior de la ficha.' },
      { label: 'Fiabilidad', text: 'A, Fiable. B, Verificación recomendada. Indica cuánto confiar en la información de la tienda.', how: 'Línea Fiabilidad del stock en la ficha.' },
      { label: 'Cobertura estimada', text: 'Cuánto tiempo debería durar el inventario, según el historial reciente. Es una estimación, no una garantía.', how: 'Sello Puede agotarse en 5 a 7 días.' },
      { label: 'Rotación y Parado', text: 'Rotación es el promedio de unidades que salieron del inventario por día en los últimos 30 días. Parado muestra hace cuántos días el inventario no se mueve.', how: 'Dos tarjetas junto al inventario.' },
    ],
  },
  does: [
    'Busca farmacias en un radio de 5 a 50 km, con 5 km por defecto, alrededor de una dirección, para un producto.',
    'Muestra el nivel, el rango de inventario de ayer, la fiabilidad, la cobertura estimada, la rotación y los días parado.',
    'Muestra el precio observado en la tienda, con la fecha de la lectura, para quien contrató el precio.',
    'En una tienda compatible, consulta el inventario al momento y muestra la cantidad con la hora.',
    'Abre la ruta en Google Maps, copia el teléfono, abre el sitio de la tienda y copia la dirección y el enlace.',
    'Deja que quien verificó la tienda informe el inventario real, para mejorar el modelo.',
  ],
  doesNot: [
    'No muestra el número exacto del día anterior. Solo rango y nivel.',
    'No es tiempo real. El mapa y la lista son de ayer.',
    'No garantiza que el producto esté en el estante.',
    'No dibuja el radio en el mapa. El radio solo limita la búsqueda.',
    'No consulta todas las tiendas en vivo. Depende de la cadena, la fuente y el alcance contratado.',
    'No exporta listas, mapas ni hojas de cálculo.',
  ],
  use: {
    title: 'Cómo usarlo bien',
    consult: [
      'Empieza con un radio de 5 km y auméntalo si faltan tiendas.',
      'Marca Con stock para ver solo las tiendas que tienen el producto.',
      'Lee la fecha de la información antes de indicar una tienda.',
    ],
    analyze: [
      'Prefiere Stock exacto y fiabilidad A.',
      'Usa Consultar ahora antes de indicar una tienda al consumidor.',
      'Compara el precio solo entre tiendas con lectura reciente.',
      'Si el inventario que viste en la tienda es distinto, usa Reportar.',
    ],
    extract: [
      'Usa Abrir en Maps, Copiar teléfono, Abrir sitio y Compartir.',
      'Para el consumidor, di: la tienda informó ahora. El inventario puede cambiar. Confirma antes de ir.',
      'La búsqueda trae hasta 1.500 tiendas. No hay exportación a archivo.',
    ],
    note: 'Reportar inventario no es exportar. Dinn usa el dato para mejorar el modelo. No corrige el número al momento.',
  },
  related: {
    title: 'Junto con otras funcionalidades',
    intro: 'El Localizador reúne en una tarjeta lo que otras funcionalidades miden a escala.',
    items: [
      { slug: 'giro', name: 'Rotación', text: 'Las tarjetas Rotación y Parado de la ficha vienen de Rotación.' },
      { slug: 'preco', name: 'Precio', text: 'El precio de cada tienda aparece en la tarjeta, con la fecha de la lectura.' },
      { slug: 'ruptura', name: 'Quiebre', text: 'Para ver toda la cartera antes de elegir dónde mirar.' },
      { slug: 'distribuicao', name: 'Distribución', text: 'Si la tienda no tiene el producto, mira el CEDIS que abastece la región.' },
    ],
  },
  faq: [
    { question: '¿El mapa muestra el inventario de ahora?', answer: 'No. El mapa y la lista son del día anterior (D-1), en rango. Solo el botón Consultar ahora lee el inventario en ese momento.' },
    { question: '¿Por qué no aparece el número exacto?', answer: 'En el dato de ayer aparece un rango. El número solo viene en la consulta en vivo.' },
    { question: '¿La respuesta garantiza que el producto está ahí?', answer: 'No. El inventario puede cambiar después de la respuesta. Por eso la pantalla muestra la hora.' },
    { question: '¿Todas las tiendas tienen Consultar ahora?', answer: 'No. Solo las tiendas con lectura del e-commerce, según la cadena, la fuente y el alcance contratado.' },
    { question: '¿Cuál es la diferencia entre Stock exacto y Stock estimado?', answer: 'Exacto es la lectura del e-commerce de la tienda. Estimado es una proyección. Los dos aparecen como rango.' },
    { question: '¿Qué significan A y B?', answer: 'Es la fiabilidad de la información. A es la más alta. B pide verificación.' },
    { question: '¿Cuál es el radio máximo?', answer: 'El máximo es 50 km. El radio va de 5 a 50 km, con 5 km por defecto. Limita la búsqueda. Dinn no lo dibuja en el mapa.' },
    { question: '¿Cuántas tiendas trae la búsqueda?', answer: 'Hasta 1.500 tiendas por consulta.' },
    { question: '¿Puedo descargar la lista?', answer: 'No. Puedes abrir la ruta, copiar el teléfono y compartir la dirección.' },
    { question: '¿Qué pasa cuando reporto un inventario?', answer: 'Dinn guarda el dato para mejorar el modelo. El número no cambia al momento.' },
    { question: '¿Por qué algunos precios aparecen como --?', answer: 'La tienda no envió el precio, el producto no tuvo lectura de precio en los últimos 7 días o la tienda es de inventario estimado.' },
  ],
  cta: {
    title: '¿Quieres ver la consulta con tu cadena y tu producto?',
    text: 'Validamos productos, cadenas, regiones y la decisión que tu equipo quiere mejorar.',
    button: 'Hablar con Dinn',
  },
};
