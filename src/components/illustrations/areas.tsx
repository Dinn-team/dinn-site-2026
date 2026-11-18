import { Box, Frame, Line3, Poly3, pt, pts, vars, type V3 } from './iso';

// Seis ilustrações para "Para a sua área" (home). Mesma linguagem das demais:
// linha de 1 px, faces na cor do fundo, um único detalhe em roxo, movimento no
// hover do cartão (.il-host).

/** Inteligência & Pricing: barras de preço e giro; as barras sobem passando a linha do concorrente. */
export function IlPricing({ label }: { label?: string }) {
  const h = [18, 30, 24, 46, 36];
  return (
    <Frame label={label} vb="-117 -80 234 163">
      <g transform="translate(0 20)">
        <Box x={-72} y={-26} w={144} d={52} h={6} />
        {h.map((v, i) => (
          <g key={i} className="il-bar" style={vars({ '--i': i })}>
            <Box x={-62 + i * 27} y={-11} z={6} w={17} d={22} h={v} topClass={i === 3 ? 'il-accent-face' : ''} />
          </g>
        ))}
        <Line3 a={[-70, -11, 6 + 40]} b={[72, -11, 6 + 40]} className="il-guide il-flow" />
      </g>
    </Frame>
  );
}

/** Trade, KAM & Campo: o mapa de lojas e o pino na primeira que merece a visita. */
export function IlTrade({ label }: { label?: string }) {
  const stores: { x: number; y: number; hot?: boolean }[] = [
    { x: -58, y: -34 }, { x: -12, y: -42 }, { x: 36, y: -30 }, { x: -46, y: 8 }, { x: 8, y: 12, hot: true }, { x: 48, y: 22 },
  ];
  const sorted = [...stores].sort((a, b) => a.x + a.y - (b.x + b.y));
  const route: V3[] = [[-49, -25, 6], [-3, -33, 6], [-37, 17, 6], [17, 21, 6]];
  return (
    <Frame label={label} vb="-141 -79 283 196">
      <g transform="translate(0 22)">
        <Box x={-78} y={-58} w={156} d={116} h={6} />
        <Poly3 list={route} className="il-guide il-flow" />
        {sorted.map((s) => (
          <g key={`${s.x},${s.y}`}>
            <Box x={s.x} y={s.y} z={6} w={18} d={18} h={12} />
            {s.hot && (
              <g className="il-pin">
                <Line3 a={[s.x + 9, s.y + 9, 18]} b={[s.x + 9, s.y + 9, 46]} className="il-accent" />
                <polygon
                  className="il-accent il-accent-fill"
                  points={pts([[s.x + 9, s.y + 3, 46], [s.x + 15, s.y + 9, 46], [s.x + 9, s.y + 15, 46], [s.x + 3, s.y + 9, 46]])}
                />
              </g>
            )}
          </g>
        ))}
      </g>
    </Frame>
  );
}

/** Supply & Distribuição: a caixa anda do CD até a loja; a falta fica marcada no caminho. */
export function IlSupply({ label }: { label?: string }) {
  return (
    <Frame label={label} vb="-175 -125 325 226">
      <g transform="translate(0 16)">
        <Box x={-118} y={-42} w={72} d={84} h={42} />
        <Line3 a={[-118 + 72, -9, 0]} b={[54, -9, 0]} className="il-line" />
        <Line3 a={[-118 + 72, 9, 0]} b={[54, 9, 0]} className="il-line" />
        <Line3 a={[-6, -9, 0]} b={[6, -9, 0]} className="il-accent" />
        <Line3 a={[-6, 9, 0]} b={[6, 9, 0]} className="il-accent" />
        <g className="il-crate">
          <Box x={-40} y={-8} w={16} d={16} h={14} />
        </g>
        <Box x={54} y={-26} w={52} d={52} h={24} topClass="il-accent-face" />
        <Line3 a={[-44, 0, 0]} b={[50, 0, 0]} className="il-guide il-flow" />
      </g>
    </Frame>
  );
}

/** SAC & Customer Experience: a tela do atendimento e as mensagens que chegam. */
export function IlSac({ label }: { label?: string }) {
  const x0 = -4;
  const y0 = -40;
  const d = 80;
  const x1 = x0 + 4;
  const bubble = (ya: number, yb: number, za: number, zb: number): V3[] => [[x1, ya, za], [x1, yb, za], [x1, yb, zb], [x1, ya, zb]];
  return (
    <Frame label={label} vb="-128 -85 256 178">
      <g transform="translate(0 28)">
        <Box x={-54} y={-46} w={108} d={92} h={6} />
        <Box x={x0 - 4} y={-8} z={6} w={12} d={16} h={14} />
        <Box x={x0} y={y0} z={20} w={4} d={d} h={56} />
        <polygon className="il-line" points={pts(bubble(y0 + 10, y0 + 46, 56, 68))} />
        <g className="il-msg">
          <polygon className="il-accent il-accent-fill" points={pts(bubble(y0 + 30, y0 + 70, 38, 50))} />
        </g>
        <polygon className="il-line" points={pts(bubble(y0 + 10, y0 + 34, 24, 34))} />
      </g>
    </Frame>
  );
}

/** Marketing & Lançamentos: o foguete sobe da plataforma. */
export function IlLaunch({ label }: { label?: string }) {
  const b = 24;
  const top = 62;
  const apex: V3 = [0, 0, top + 26];
  const o = -b / 2;
  return (
    <Frame label={label} vb="-168 -125 335 233">
      <g transform="translate(0 40)">
        <Box x={-48} y={-48} w={96} d={96} h={6} />
        <Line3 a={[0, 0, apex[2] + 8]} b={[0, 0, apex[2] + 58]} className="il-guide il-flow" />
        <g className="il-rocket">
          <Box x={-b - 10} y={-4} z={6} w={12} d={8} h={20} />
          <Box x={o} y={o} z={6} w={b} d={b} h={top - 6} />
          <polygon className="il-face" points={pts([[o, -o, top], [-o, -o, top], apex])} />
          <polygon className="il-face" points={pts([[-o, o, top], [-o, -o, top], apex])} />
          <polygon className="il-accent il-accent-fill" points={pts([[-o, -5, 38], [-o, 5, 38], [-o, 5, 48], [-o, -5, 48]])} />
          <Box x={b / 2 - 2} y={-4} z={6} w={12} d={8} h={20} />
        </g>
      </g>
    </Frame>
  );
}

/** TI, Dados & Governança: o cofre de dados e o anel de controle que o varre. */
export function IlGovern({ label }: { label?: string }) {
  const r = 52;
  const rx = r * Math.SQRT2 * Math.cos(Math.PI / 6);
  const ry = r * Math.SQRT2 * 0.5;
  const z = 8;
  const cy = -z;
  const back = `M ${(-rx).toFixed(2)} ${cy} A ${rx.toFixed(2)} ${ry.toFixed(2)} 0 0 1 ${rx.toFixed(2)} ${cy}`;
  const front = `M ${(-rx).toFixed(2)} ${cy} A ${rx.toFixed(2)} ${ry.toFixed(2)} 0 0 0 ${rx.toFixed(2)} ${cy}`;
  const c = 34;
  return (
    <Frame label={label} vb="-130 -81 259 180">
      <g transform="translate(0 24)">
        <Box x={-60} y={-60} w={120} d={120} h={6} />
        <path className="il-accent il-scan" d={back} />
        <Box x={-c} y={-c} z={6} w={c * 2} d={c * 2} h={50} />
        <polygon className="il-accent" points={pts([[c, -4, 22], [c, 4, 22], [c, 4, 36], [c, -4, 36]])} />
        <Line3 a={[c, 0, 36]} b={[c, 0, 44]} className="il-accent" />
        <path className="il-accent il-scan" d={front} />
      </g>
    </Frame>
  );
}
