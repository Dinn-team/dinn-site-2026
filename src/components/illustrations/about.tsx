import { Box, Frame, Line3, Poly3, pts, vars, type V3 } from './iso';

// Três ilustrações para "Fale com a Dinn" (Sobre). Mesma linguagem das demais:
// linha de 1 px, faces na cor do fundo, um único detalhe em roxo, movimento
// no hover do cartão (.il-host).

/** Contato comercial: dois lados e a mensagem que viaja de um ao outro. */
export function IlContact({ label }: { label?: string }) {
  return (
    <Frame label={label} vb="-149 -99 299 208">
      <g transform="translate(0 20)">
        <Box x={-112} y={-30} w={60} d={60} h={8} />
        <Box x={-97} y={-15} z={8} w={30} d={30} h={38} />
        <Line3 a={[-50, 0, 8]} b={[52, 0, 8]} className="il-guide il-flow" />
        <Box x={52} y={-30} w={60} d={60} h={8} />
        <Box x={67} y={-15} z={8} w={30} d={30} h={24} />
        <g className="il-travel">
          <Box x={-46} y={-13} z={24} w={28} d={26} h={3} topClass="il-accent-face" />
          <Line3 a={[-40, -6, 27]} b={[-26, -6, 27]} className="il-accent" />
          <Line3 a={[-40, 2, 27]} b={[-30, 2, 27]} className="il-accent" />
        </g>
      </g>
    </Frame>
  );
}

/** Suporte: a fila de chamados; o de cima é resolvido e sai da fila. */
export function IlSupport({ label }: { label?: string }) {
  const w = 70;
  const d = 48;
  const y = -d / 2;
  const top = 2;
  const x2 = -44 + top * 10;
  const z2 = 6 + top * 4 + 4;
  const check: V3[] = [[x2 + 20, y + 26, z2], [x2 + 28, y + 34, z2], [x2 + 46, y + 14, z2]];
  return (
    <Frame label={label} vb="-112 -65 224 156">
      <g transform="translate(0 16)">
        <Box x={-64} y={-44} w={128} d={88} h={6} />
        {[0, 1].map((i) => (
          <Box key={i} x={-44 + i * 10} y={y} z={6 + i * 4} w={w} d={d} h={4} />
        ))}
        <g className="il-ticket" style={vars({ '--tx': '43px', '--ty': '14px' })}>
          <Box x={x2} y={y} z={6 + top * 4} w={w} d={d} h={4} topClass="il-accent-face" />
          <Poly3 list={check} className="il-accent" />
        </g>
      </g>
    </Frame>
  );
}

/** Privacidade e termos: documentos sob um cadeado; o cadeado fecha no hover. */
export function IlPrivacy({ label }: { label?: string }) {
  const keyhole: V3[] = [[16, -3, 22], [16, 3, 22], [16, 3, 32], [16, -3, 32]];
  return (
    <Frame label={label} vb="-98 -49 183 127">
      <g transform="translate(0 26)">
        {[0, 1, 2].map((i) => (
          <g key={i} className="il-layer" style={vars({ '--i': i })}>
            <Box x={-40 - i * 4} y={-48} z={i * 6} w={72} d={96} h={3} />
          </g>
        ))}
        <Box x={-16} y={-12} z={15} w={32} d={24} h={22} />
        <polygon className="il-accent" points={pts(keyhole)} />
        <g className="il-shackle">
          <Poly3 list={[[0, -8, 37], [0, -8, 47], [0, -3, 53], [0, 3, 53], [0, 8, 47], [0, 8, 37]]} className="il-accent" />
        </g>
      </g>
    </Frame>
  );
}
