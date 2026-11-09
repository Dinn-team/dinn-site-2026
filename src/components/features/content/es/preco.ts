import type { FeatureContent } from '../../types';

// Precio (ES, es-419). Fuente: dinn-manager-app/docs/site-reproducao/funcionalidades/preco.md.
// Etiquetas del producto según demo-i18n/*.json.
export const content: FeatureContent = {
  slug: "preco",
  meta: {
    title: "Precio | Dinn",
    description: "Mira a qué precio aparece el producto en cada tienda. Precio observado en el canal digital, con la fecha de la lectura en el Localizador.",
  },
  hero: {
    title: "¿A qué precio aparece el producto en cada tienda?",
    sub: "Dinn muestra el precio observado en cada farmacia. En el Localizador, muestra también la fecha de la lectura y ordena de menor a mayor precio.",
    note: "Es el precio observado en el canal digital de la tienda, no el del estante. En el Localizador, la lectura puede tener hasta 7 días. Revisa la fecha.",
  },
  steps: [
    { title: "Elige el producto y la dirección", text: "En el Localizador, busca el producto y la zona. En Inicio, elige un producto en el filtro." },
    { title: "Mira el precio de cada tienda", text: "En el Localizador, el precio aparece en la tarjeta de la tienda, con la fecha de la lectura. Si no se leyó precio, la pantalla muestra -- y explica el motivo." },
    { title: "Ordena y compara", text: "En el Localizador, ordena el resto de las tiendas de menor a mayor precio. Compara las cadenas y abre la tienda para ver el precio por unidad." },
  ],
  doors: {
    title: "Dónde aparece el precio",
    intro: "El precio aparece en seis lugares. En el Localizador, viene con la fecha de la lectura. En Inicio, está junto a la rotación, las unidades que salieron del inventario, y a la reposición.",
    items: [
      {
        title: "En la lista del Localizador",
        text: "El precio está en la esquina de cada tarjeta de farmacia. El ícono (i) muestra la fecha de la lectura.",
        shot: { screen: 'locator', phase: 6, to: 'store-0' },
        link: { slug: 'localizador', label: "Ver el Localizador" },
      },
      {
        title: "En el orden",
        text: "Cambia Más cercanas por Menor precio o Mayor precio. El orden vale para el resto de las tiendas. Las tiendas sin precio quedan al final.",
        shot: { screen: 'locator', phase: 12, to: 'rest' },
      },
      {
        title: "En el popup de la tienda",
        text: "En la tarjeta de inventario del producto, el precio aparece por unidad, junto con el rango de inventario y la rotación.",
        shot: { screen: 'locator', phase: 7, to: 'p-box' },
      },
      {
        title: "En la tabla de Inicio",
        text: "Con un producto elegido, la columna Precio muestra el valor de cada tienda, junto a la rotación, el volumen sugerido y la reposición.",
        shot: { screen: 'price', phase: 2, to: 'tbl' },
      },
      {
        title: "En el panel de la tienda",
        text: "Abre una tienda en Inicio y mira el precio de cada uno de sus productos, junto a la rotación y la reposición.",
        shot: { screen: 'rupture', phase: 9, to: 'm-tbl' },
      },
      {
        title: "Por Distribución",
        text: "El panel del CEDIS muestra el precio promedio en el CEDIS y en las farmacias de la zona.",
        shot: { screen: 'dist', phase: 4, to: 'cdk' },
        link: { slug: 'distribuicao', label: "Ver Distribución" },
      },
    ],
  },
  jean: {
    lead: "Pregunta cómo varía el precio entre las cadenas. La respuesta puede venir en tabla.",
    prompts: ["¿Cómo varía el precio de Cefalgin entre las cadenas?", "¿Qué tiendas están sin precio?", "¿Cuál es el menor precio de Cefalgin en São Paulo?"],
    turns: [
      { q: "¿Cómo varía el precio de Cefalgin entre las cadenas?", a: "De R$ 36,50 a R$ 44,50.",
        card: { title: "Precio observado", rows: [["Farmácias Vitalis", "R$ 36,50"], ["Drogaria Serrana", "R$ 39,90"], ["Drogarias Aurora", "R$ 44,50"]] },
      },
      { q: "¿Qué tiendas están sin precio?", a: "112 de 805 tiendas. Si no se leyó precio, la pantalla muestra --.",
        steps: ["Abrir en Inicio"],
      },
    ],
  },
  inside: {
    title: "El precio, paso a paso",
    sub: "Desplázate para ver cada etapa.",
    stages: [
      {
        tab: "Lista",
        title: "El precio en cada tienda",
        text: "Cada tarjeta muestra el nombre de la tienda y, en la esquina, el precio leído. El ícono (i) muestra la fecha de la lectura.",
        shot: { screen: 'locator', phase: 6, to: 'store-0' },
      },
      {
        tab: "Ordenar",
        title: "De menor a mayor",
        text: "Ordena el resto de las tiendas por menor o mayor precio. Las tiendas sin precio quedan al final.",
        shot: { screen: 'locator', phase: 12, to: 'rest' },
      },
      {
        tab: "Tienda",
        title: "El precio por unidad",
        text: "En el popup, el precio aparece con el inventario del producto en la tienda.",
        shot: { screen: 'locator', phase: 7, to: 'p-box' },
      },
      {
        tab: "Inicio",
        title: "Precio por tienda, en la tabla",
        text: "Con un producto elegido, la tabla de puntos de venta muestra el precio junto a la rotación y la reposición.",
        shot: { screen: 'price', phase: 2, to: 'tbl' },
      },
    ],
  },
  read: {
    title: "Cómo leer el resultado",
    intro: "El precio es una lectura. Revisa de dónde viene antes de comparar dos tiendas.",
    rows: [
      { label: "Precio", text: "Valor en reales observado en la tienda. En el popup del Localizador, aparece por unidad.", how: "Aparece como R$ 39,90." },
      { label: "Fecha de la lectura", text: "El día en que Dinn leyó este precio. Existe solo en el Localizador.", how: "Ícono (i) junto al precio: Precio observado el 2/11/2026." },
      { label: "Sin precio", text: "Dinn no leyó precio para la tienda. Nunca aparece R$ 0,00. La pantalla explica el motivo.", how: "Aparece como --, con el ícono (i). Motivos: sin lectura en 7 días, inventario estimado o un e-commerce que no informa el precio." },
      { label: "Orden", text: "Más cercanas, Menor precio o Mayor precio. Vale solo para el resto de las tiendas. La distancia desempata.", how: "Selector sobre la lista del Localizador. Las tiendas sin precio quedan al final." },
      { label: "Precio en Inicio", text: "Aparece solo con exactamente un producto elegido. La columna no ordena.", how: "Sin producto elegido, aparece --." },
      { label: "Contratación", text: "El Precio se contrata aparte. Sin contratación, la pantalla muestra un candado.", how: "En el candado, la ayuda explica que el laboratorio debe contratar este recurso." },
    ],
  },
  does: [
    "Muestra el precio observado de un producto en cada tienda, con la fecha de la lectura en el Localizador.",
    "En el Localizador, ordena las tiendas de menor a mayor precio, o al revés.",
    "Explica por qué una tienda no tiene precio, en vez de mostrar cero.",
    "En Inicio, muestra el precio de cada tienda junto a la rotación, la reposición y los días parados.",
  ],
  doesNot: [
    "No muestra el precio del estante. Es el precio del canal digital de la tienda.",
    "En el Localizador, no copia el precio de otra tienda. No estima precio para una tienda con inventario estimado. Sin lectura, aparece --.",
    "No recomienda precio, no dice cuál es el precio correcto y no compara con un precio de referencia.",
    "No muestra historial ni gráfico de precio a lo largo del tiempo.",
    "No es fuente de promociones ni de ofertas.",
    "No muestra el precio de todas las tiendas. Solo las que envían el precio y tienen inventario exacto.",
  ],
  use: {
    title: "Cómo usarlo bien",
    consult: [
      "En el Localizador, elige el producto y la dirección y haz clic en Consultar farmacias. El precio aparece en cada tarjeta.",
      "Pasa el cursor sobre el ícono (i) junto al precio para ver la fecha de la lectura. Pásalo sobre el (i) junto a -- para ver el motivo.",
      "En Inicio, elige exactamente un producto en el filtro Productos y mira la columna Precio.",
    ],
    analyze: [
      "Ordena por Menor precio y por Mayor precio. Mira qué cadenas quedan en los extremos.",
      "Compara solo lo que es comparable: el mismo producto, lecturas de fechas cercanas y tiendas con precio leído. Una tienda con inventario estimado no muestra precio y queda fuera de la cuenta.",
      "En Inicio, filtra la cadena y compara el precio de tus tiendas en la misma tabla.",
      "Cuando un precio salga del rango, abre la tienda y revisa el inventario y la fecha antes de hablar con la cadena.",
    ],
    extract: [
      "En Inicio, usa el botón Descargar. El archivo trae la columna Precio (R$). Una tienda sin precio sale con la celda vacía.",
      "El Localizador no exporta. El botón Compartir copia la dirección y el enlace, no el precio.",
      "Guarda el recorte en Vistas guardadas para volver con un clic.",
      "Pregunta a Jean y pide la respuesta en tabla.",
    ],
    formats: ['CSV', 'Excel (XLS)', 'PDF', 'JSON'],
    note: "El Precio es una observación. Dinn no dice cuál debería ser el precio ni si la tienda está en lo correcto.",
  },
  related: {
    title: "Junto con otras funcionalidades",
    intro: "Lee el precio junto con el inventario y la rotación.",
    items: [
      { slug: 'localizador', name: "Localizador de Productos", text: "Es donde el precio aparece con la fecha de la lectura y el orden." },
      { slug: 'giro', name: "Rotación", text: "En la tabla de Inicio, el precio está junto a la rotación y la reposición." },
      { slug: 'ruptura', name: "Quiebre", text: "Revisa que la tienda tenga el producto antes de comparar el precio." },
      { slug: 'jean', name: "Jean", text: "Pregunta cómo varía el precio entre cadenas. La respuesta puede venir en tabla." },
    ],
  },
  faq: [
    { question: "¿De dónde viene el precio?", answer: "Dinn lee el precio junto con el inventario, en el canal digital de la tienda." },
    { question: "¿Es el precio de la tienda física?", answer: "No. Es el precio observado en el canal digital de la tienda. El precio del estante puede ser otro." },
    { question: "¿Por qué una tienda aparece con --?", answer: "Dinn no leyó el precio. La tienda puede no haber enviado el precio en los últimos 7 días. El inventario puede ser estimado. El e-commerce puede no informarlo. El ícono (i) muestra el motivo." },
    { question: "¿El precio puede ser R$ 0,00?", answer: "No. Si no se leyó precio, la pantalla muestra --." },
    { question: "¿El precio de una tienda se copia de una vecina?", answer: "No. En el Localizador, es el último precio leído en esa misma tienda." },
    { question: "¿Cuál es la fecha del precio?", answer: "En el Localizador, el ícono (i) muestra el día de la lectura. Inicio no muestra la fecha del precio." },
    { question: "¿Puedo ordenar por precio?", answer: "Sí, en el Localizador. El orden vale para el resto de las tiendas. Las tiendas sin precio quedan al final. La columna Precio de Inicio no ordena." },
    { question: "¿Puedo descargar los precios?", answer: "Sí, en la tabla de Inicio, en CSV, Excel, PDF o JSON. El Localizador no descarga." },
    { question: "¿Por qué aparece un candado?", answer: "Tu empresa no contrató el Precio. Este recurso se contrata aparte." },
  ],
  cta: {
    title: "¿Quieres ver el precio de tu producto en las tiendas?",
    text: "Cuéntanos qué producto y qué cadenas te interesan. Una persona del equipo de Dinn te muestra el recorte.",
    button: "Hablar con Dinn",
  },
};
