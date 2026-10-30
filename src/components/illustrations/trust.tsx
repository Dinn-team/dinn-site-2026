import { Box, Frame, Line3, vars } from './iso';

// Três ilustrações para "Três tipos de sinal" (Confiança): observado, estimado
// e inferido. O que é dado direto tem linha cheia; o que é estimado ou inferido
// tem linha tracejada. Mesma linguagem das demais (linha de 1 px, um detalhe em
// roxo, movimento no hover do cartão .il-host).

/** Observado: a fonte entrega o registro direto, com linha cheia. */
export function IlObserved({ label }: { label?: string }) {
  return (
    <Frame label={label} vb="-139 -93 279 193">
      <g transform="translate(0 16)">
        <Box x={-88} y={-46} w={176} d={92} h={6} />
        <Box x={-70} y={-18} z={6} w={34} d={34} h={42} topClass="il-accent-face" />
        <Line3 a={[-36, -1, 12]} b={[8, -1, 12]} className="il-accent" />
        <g className="il-rec">
          <Box x={10} y={-26} z={6} w={58} d={50} h={4} />
          <Line3 a={[18, -12, 10]} b={[50, -12, 10]} className="il-accent" />
          <Line3 a={[18, -2, 10]} b={[58, -2, 10]} />
          <Line3 a={[18, 8, 10]} b={[44, 8, 10]} />
        </g>
      </g>
    </Frame>
  );
}

/** Estimado: lojas comparáveis alimentam um bloco tracejado, que se consolida. */
export function IlEstimated({ label }: { label?: string }) {
  const ys = [-40, -10, 20];
  return (
    <Frame label={label} vb="-139 -87 279 193">
      <g transform="translate(0 16)">
        <Box x={-88} y={-46} w={176} d={92} h={6} />
        {ys.map((y, i) => (
          <g key={i} className="il-est-src">
            <Box x={-76} y={y} z={6} w={20} d={20} h={16} />
          </g>
        ))}
        {ys.map((y, i) => (
          <Line3 key={`l${i}`} a={[-56, y + 10, 14]} b={[14, 0, 14]} className="il-guide il-flow" />
        ))}
        <Box x={14} y={-26} z={6} w={54} d={52} h={34} cls="il-dashed" topClass="il-accent-face" />
      </g>
    </Frame>
  );
}

/** Inferido: sinais soltos se aproximam e sustentam uma hipótese tracejada. */
export function IlInferred({ label }: { label?: string }) {
  return (
    <Frame label={label} vb="-141 -100 281 195">
      <g transform="translate(0 30)">
        <Box x={-52} y={-46} w={104} d={92} h={6} />
        {[0, 1, 2].map((i) => (
          <g key={i} className="il-sig" style={vars({ '--i': i })}>
            <Box x={-32} y={-30} z={12 + i * 22} w={64} d={60} h={3} />
          </g>
        ))}
        <g className="il-hyp">
          <Box x={-18} y={-18} z={88} w={36} d={36} h={26} cls="il-dashed" topClass="il-accent-face" />
        </g>
      </g>
    </Frame>
  );
}
