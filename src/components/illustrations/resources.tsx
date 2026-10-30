import { Box, Frame, Line3, vars } from './iso';

// Três ilustrações para Recursos: blog, casos e novidades. Mesma linguagem das
// demais (linha de 1 px, um detalhe em roxo, movimento no hover do cartão).

/** Blog: um feed de artigos; no hover os cartões se abrem, um para cada lado. */
export function IlBlog({ label }: { label?: string }) {
  return (
    <Frame label={label} vb="-97 -58 194 134">
      <g transform="translate(0 28)">
        {[0, 1, 2].map((i) => {
          const z = i * 17;
          const top = i === 2;
          return (
            <g key={i} className="il-feed" style={vars({ '--d': i % 2 ? 1 : -1 })}>
              <Box x={-44} y={-30} z={z} w={88} d={60} h={4} topClass={top ? 'il-accent-face' : ''} />
              <Line3 a={[-32, -18, z + 4]} b={[0, -18, z + 4]} className={top ? 'il-accent' : 'il-line'} />
              <Line3 a={[-32, -6, z + 4]} b={[30, -6, z + 4]} className="il-line" />
              <Line3 a={[-32, 6, z + 4]} b={[18, 6, z + 4]} className="il-line" />
            </g>
          );
        })}
        <Line3 a={[44, 30, 0]} b={[44, 30, 60]} className="il-guide" />
        <Line3 a={[-44, 30, 0]} b={[-44, 30, 60]} className="il-guide" />
      </g>
    </Frame>
  );
}

/** Casos: uma pessoa, a fala e o caminho até o aprendizado, que cresce no hover. */
export function IlCases({ label }: { label?: string }) {
  const hs = [8, 14, 20, 28];
  return (
    <Frame label={label} vb="-141 -88 283 196">
      <g transform="translate(0 22)">
        <Box x={-92} y={-44} w={184} d={88} h={6} />
        <Box x={-72} y={-12} z={6} w={24} d={24} h={34} />
        <Box x={-68} y={-8} z={40} w={16} d={16} h={14} />
        <g className="il-drop">
          <Box x={-30} y={-24} z={54} w={52} d={42} h={3} topClass="il-accent-face" />
          <Line3 a={[-22, -14, 57]} b={[4, -14, 57]} className="il-accent" />
          <Line3 a={[-22, -4, 57]} b={[12, -4, 57]} />
        </g>
        {hs.map((h, i) => (
          <g key={i} className="il-bar" style={vars({ '--i': i })}>
            <Box x={36} y={-38 + i * 22} z={6} w={14} d={14} h={h} topClass={i === 3 ? 'il-accent-face' : ''} />
          </g>
        ))}
      </g>
    </Frame>
  );
}

/** Novidades: a linha do tempo recebe a publicação mais nova, que pousa no topo. */
export function IlChangelog({ label }: { label?: string }) {
  const xs = [-58, 0, 58];
  return (
    <Frame label={label} vb="-139 -84 279 193">
      <g transform="translate(0 26)">
        <Box x={-92} y={-42} w={184} d={84} h={6} />
        <Line3 a={[-86, 0, 6]} b={[86, 0, 6]} className="il-guide il-flow" />
        {xs.map((x, i) => (
          <g key={i}>
            <Box x={x - 5} y={-5} z={6} w={10} d={10} h={6} />
            <Box x={x - 18} y={i % 2 ? -36 : 10} z={6} w={36} d={22} h={4} />
            <Line3 a={[x - 12, (i % 2 ? -36 : 10) + 7, 10]} b={[x + 6, (i % 2 ? -36 : 10) + 7, 10]} className="il-line" />
            <Line3 a={[x - 12, (i % 2 ? -36 : 10) + 14, 10]} b={[x + 12, (i % 2 ? -36 : 10) + 14, 10]} className="il-line" />
          </g>
        ))}
        <g className="il-drop">
          <Box x={-78} y={-14} z={44} w={40} d={28} h={4} topClass="il-accent-face" />
          <Line3 a={[-70, -6, 48]} b={[-52, -6, 48]} className="il-accent" />
        </g>
      </g>
    </Frame>
  );
}

/** Comparativos: as camadas do canal e a que falta entre os dados e a decisão (tracejada). */
export function IlLayers({ label }: { label?: string }) {
  return (
    <Frame label={label} vb="-156 -108 311 216">
      <g transform="translate(0 30)">
        <g className="il-layer" style={vars({ '--i': 0 })}>
          <Box x={-60} y={-60} w={120} d={120} h={8} />
        </g>
        <g className="il-layer" style={vars({ '--i': 1 })}>
          <Box x={-60} y={-60} z={26} w={120} d={120} h={8} cls="il-dashed" topClass="il-accent-face" />
        </g>
        <g className="il-layer" style={vars({ '--i': 2 })}>
          <Box x={-60} y={-60} z={52} w={120} d={120} h={8} />
        </g>
        <Line3 a={[60, 60, 0]} b={[60, 60, 60]} className="il-guide" />
        <Line3 a={[-60, 60, 0]} b={[-60, 60, 60]} className="il-guide" />
      </g>
    </Frame>
  );
}
