import { rng } from '@/components/home/neural';
import { ACCENT, AMBER, Chip, LILAC, SKY, Svg, easeOut, seg, show, SCENES, type SceneProps } from './AreaScenes';

// Cenas dos casos de uso: uma animação por história, guiada pela rolagem em
// quatro tempos (o problema aparece, o Dinn lê, o padrão se revela, a solução
// fecha). Os PDVs, redes e cidades são genéricos: preservam a indústria e os
// dados; só os números dados pelo próprio usuário (ex.: 60% e 45%) aparecem.

const RED = '#EF4444';
const GREEN = '#10B981';
const GREY = 'rgba(255,255,255,0.14)';

// ── 1. Dias de estoque em Fortaleza ────────────────────────────────────────
function FrozenStockScene({ p, L }: SceneProps) {
  const totals = [250, 200, 280, 150, 230, 180];
  const frozen = [0.55, 0.4, 0.6, 0.7, 0.35, 0.5];
  const y0 = 92;
  const rowH = 44;
  const sum = easeOut(seg(p, 0.5, 0.72));
  const gauge = easeOut(seg(p, 0.76, 0.95));
  return (
    <Svg title={L.title}>
      <Chip x={24} y={20} text={L.city} tone="lilac" v={seg(p, 0, 0.08)} />
      <g style={{ opacity: seg(p, 0.04, 0.14) }} className="as-g">
        <rect x={140} y={34} width={10} height={10} rx={3} fill={LILAC} />
        <text x={156} y={43} fontSize={11.5} fill="rgba(255,255,255,0.7)">{L.total}</text>
        <rect x={226} y={34} width={10} height={10} rx={3} fill={AMBER} />
        <text x={242} y={43} fontSize={11.5} fill="rgba(255,255,255,0.7)">{L.frozen}</text>
      </g>
      {totals.map((w, i) => {
        const y = y0 + i * rowH;
        const v = easeOut(seg(p, i * 0.025, 0.12 + i * 0.025));
        const f = easeOut(seg(p, 0.26 + i * 0.02, 0.46 + i * 0.02));
        return (
          <g key={i} style={{ opacity: v }} className="as-g">
            <text x={24} y={y + 14} fontSize={12.5} fontWeight={600} fill="rgba(255,255,255,0.8)">{L.pdv} {String(i + 1).padStart(2, '0')}</text>
            <rect x={96} y={y} width={w} height={20} rx={10} fill={LILAC} opacity={0.45} />
            <rect x={96} y={y} width={w * frozen[i] * f} height={20} rx={10} fill={AMBER} />
          </g>
        );
      })}
      {/* soma da cidade */}
      <g style={{ opacity: seg(p, 0.48, 0.6) }} className="as-g">
        <rect x={452} y={92} width={64} height={264} rx={16} fill={GREY} />
        <rect x={452} y={92 + 264 * (1 - 0.62 * sum)} width={64} height={264 * 0.62 * sum} rx={16} fill={AMBER} />
        <text x={484} y={376} textAnchor="middle" fontSize={12} fontWeight={600} fill="#fff">{L.sum}</text>
      </g>
      {/* dias disponíveis × necessário */}
      <g style={{ opacity: seg(p, 0.74, 0.84) }} className="as-g">
        <text x={24} y={392} fontSize={12.5} fontWeight={600} fill="#fff">{L.days}</text>
        <rect x={150} y={378} width={290} height={18} rx={9} fill={GREY} />
        <rect x={150} y={378} width={290 * 0.78 * gauge} height={18} rx={9} fill={GREEN} />
        <line x1={150 + 290 * 0.55} x2={150 + 290 * 0.55} y1={370} y2={404} stroke="#fff" strokeWidth={2} strokeDasharray="3 3" />
        <text x={150 + 290 * 0.55} y={420} textAnchor="middle" fontSize={11} fill="rgba(255,255,255,0.75)">{L.need}</text>
      </g>
      <Chip x={400} y={20} text={L.covered} tone="green" v={seg(p, 0.86, 0.96)} />
    </Svg>
  );
}

// ── 2. O furo do reabastecimento: atraso, falta de pedido ou janela de compra
function DistributorGapScene({ p, L }: SceneProps) {
  const tests = [
    { label: L.demand, ok: true, tag: L.exists, at: 0.0 },
    { label: L.rotation, ok: true, tag: L.exists, at: 0.1 },
    { label: L.delay, ok: false, tag: L.ruled, at: 0.26 },
    { label: L.noBuy, ok: false, tag: L.ruled, at: 0.36 },
  ];
  const win = easeOut(seg(p, 0.5, 0.7));
  const date = easeOut(seg(p, 0.74, 0.88));
  return (
    <Svg title={L.title}>
      {tests.map((t, i) => {
        const v = easeOut(seg(p, t.at, t.at + 0.14));
        const y = 30 + i * 62;
        return (
          <g key={i} style={show(v)} className="as-g">
            <rect x={24} y={y} width={310} height={50} rx={14} fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.16)" />
            <circle cx={50} cy={y + 25} r={12} fill={t.ok ? GREEN : 'rgba(255,255,255,0.14)'} />
            {t.ok ? (
              <path d={`M${44},${y + 25} l4,4 l8,-9`} stroke="#fff" strokeWidth={2.4} fill="none" strokeLinecap="round" strokeLinejoin="round" />
            ) : (
              <path d={`M${45},${y + 20} l10,10 M${55},${y + 20} l-10,10`} stroke="rgba(255,255,255,0.7)" strokeWidth={2.2} strokeLinecap="round" />
            )}
            <text x={74} y={y + 30} fontSize={13.5} fontWeight={600} fill={t.ok ? '#fff' : 'rgba(255,255,255,0.55)'} textDecoration={t.ok ? undefined : 'line-through'}>{t.label}</text>
            <text x={322} y={y + 30} textAnchor="end" fontSize={11.5} fontWeight={700} fill={t.ok ? '#A7F3D0' : 'rgba(255,255,255,0.5)'}>{t.tag}</text>
          </g>
        );
      })}
      {/* PDVs aguardando reposição */}
      {Array.from({ length: 12 }, (_, i) => {
        const cx = 388 + (i % 3) * 52;
        const cy = 60 + Math.floor(i / 3) * 56;
        const on = seg(p, 0.8 + (i % 4) * 0.025, 0.92 + (i % 4) * 0.025) > 0.5;
        return (
          <g key={i} style={{ opacity: seg(p, 0, 0.1) }} className="as-g">
            <circle cx={cx} cy={cy} r={16} fill={on ? GREEN : 'rgba(239,68,68,0.18)'} stroke={on ? GREEN : RED} strokeWidth={1.6} style={{ transition: 'fill 0.4s, stroke 0.4s' }} />
            {on && <path d={`M${cx - 6},${cy} l4,4 l8,-9`} stroke="#fff" strokeWidth={2.4} fill="none" strokeLinecap="round" strokeLinejoin="round" />}
          </g>
        );
      })}
      {/* calendário de compra */}
      <line x1={24} x2={536} y1={344} y2={344} stroke="rgba(255,255,255,0.25)" strokeWidth={2} />
      {Array.from({ length: 9 }, (_, i) => <line key={i} x1={24 + i * 64} x2={24 + i * 64} y1={338} y2={350} stroke="rgba(255,255,255,0.25)" />)}
      <rect x={120} y={330} width={280 * win} height={28} rx={8} fill="rgba(251,191,36,0.28)" stroke={AMBER} strokeDasharray="4 4" />
      <text x={260} y={324} textAnchor="middle" fontSize={12} fontWeight={700} fill={AMBER} style={{ opacity: win }} className="as-g">{L.window}</text>
      <g style={{ opacity: date }} className="as-g">
        <path d="M470,326 l10,18 l-10,18 l-10,-18 z" fill={GREEN} />
        <text x={470} y={392} textAnchor="middle" fontSize={12} fontWeight={700} fill="#A7F3D0">{L.replenish}</text>
      </g>
    </Svg>
  );
}

// ── 3. SAC: do telefone tocando ao endereço confirmado ────────────────────
function SacLocatorScene({ p, L, shared }: SceneProps) {
  const rows = ((shared.locatorRows as { name: string; dist: string }[]) ?? []).slice(0, 3);
  const card = easeOut(seg(p, 0.18, 0.38));
  const before = easeOut(seg(p, 0.7, 0.84));
  const after = easeOut(seg(p, 0.8, 0.94));
  return (
    <Svg title={L.title}>
      <text x={24} y={34} fontSize={12.5} fontWeight={700} fill="rgba(255,255,255,0.75)" style={{ opacity: seg(p, 0, 0.1) }} className="as-g">{L.calls}</text>
      {[0, 1, 2, 3, 4].map((i) => {
        const v = easeOut(seg(p, i * 0.04, 0.12 + i * 0.04));
        const y = 48 + i * 52;
        return (
          <g key={i} style={show(v)} className="as-g">
            <rect x={24} y={y} width={118} height={40} rx={20} fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.18)" />
            <circle cx={46} cy={y + 20} r={9} fill={AMBER} />
            {i === 0 && p < 0.5 && <circle className="as-pulse" cx={46} cy={y + 20} r={9} fill="none" stroke={AMBER} />}
            <rect x={64} y={y + 15} width={58} height={10} rx={5} fill="rgba(255,255,255,0.22)" />
          </g>
        );
      })}
      <path d="M150,150 H184" stroke="rgba(183,158,255,0.7)" strokeWidth={2} strokeDasharray="3 5" style={{ opacity: card }} className="as-g" />
      <g style={show(card)} className="as-g">
        <rect x={192} y={40} width={344} height={240} rx={20} fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.18)" />
        <circle cx={214} cy={64} r={7} fill={ACCENT} />
        <text x={230} y={69} fontSize={13} fontWeight={700} fill="#fff">{L.locator}</text>
        <rect x={208} y={86} width={312} height={30} rx={15} fill="rgba(255,255,255,0.08)" />
        <text x={224} y={106} fontSize={12.5} fill="rgba(255,255,255,0.85)">{L.address}</text>
      </g>
      {rows.map((r, i) => {
        const v = easeOut(seg(p, 0.4 + i * 0.07, 0.56 + i * 0.07));
        const y = 130 + i * 46;
        return (
          <g key={r.name} style={show(v)} className="as-g">
            <rect x={208} y={y} width={312} height={38} rx={12} fill="rgba(22,25,29,0.8)" stroke="rgba(255,255,255,0.12)" />
            <circle cx={228} cy={y + 19} r={6} fill={GREEN} />
            <text x={244} y={y + 23} fontSize={12.5} fontWeight={600} fill="#fff">{r.name}</text>
            <text x={504} y={y + 23} textAnchor="end" fontSize={11.5} fontWeight={700} fill="#A7F3D0">{L.available}</text>
          </g>
        );
      })}
      <Chip x={208} y={290} text={L.confirmed} tone="green" v={seg(p, 0.64, 0.76)} />
      <g style={{ opacity: seg(p, 0.68, 0.78) }} className="as-g">
        <text x={24} y={336} fontSize={12.5} fontWeight={700} fill="rgba(255,255,255,0.8)">{L.time}</text>
        <text x={24} y={366} fontSize={12} fill="rgba(255,255,255,0.65)">{L.before}</text>
        <rect x={110} y={352} width={400 * before} height={18} rx={9} fill="rgba(255,255,255,0.28)" />
        <text x={24} y={402} fontSize={12} fill="rgba(255,255,255,0.65)">{L.after}</text>
        <rect x={110} y={388} width={400 * 0.28 * after} height={18} rx={9} fill={GREEN} />
      </g>
    </Svg>
  );
}

// ── 4. O concorrente está na rede, o produto não: o preço pesa ────────────
function PriceGapScene({ p, L }: SceneProps) {
  const chains = ['A', 'B', 'C', 'D'];
  const flip = easeOut(seg(p, 0.76, 0.92));
  return (
    <Svg title={L.title}>
      <text x={150} y={52} textAnchor="middle" fontSize={12} fontWeight={700} fill={SKY} style={{ opacity: seg(p, 0, 0.1) }} className="as-g">{L.competitor}</text>
      <text x={262} y={52} textAnchor="middle" fontSize={12} fontWeight={700} fill={LILAC} style={{ opacity: seg(p, 0.24, 0.34) }} className="as-g">{L.yours}</text>
      <text x={456} y={52} textAnchor="middle" fontSize={12} fontWeight={700} fill="rgba(255,255,255,0.7)" style={{ opacity: seg(p, 0.44, 0.54) }} className="as-g">{L.priceLabel}</text>
      {chains.map((c, i) => {
        const y = 92 + i * 62;
        const comp = easeOut(seg(p, i * 0.04, 0.14 + i * 0.04));
        const you = easeOut(seg(p, 0.26 + i * 0.03, 0.4 + i * 0.03));
        const bars = easeOut(seg(p, 0.46 + i * 0.03, 0.62 + i * 0.03));
        const aligned = flip > 0.5;
        return (
          <g key={c}>
            <text x={24} y={y + 5} fontSize={13} fontWeight={600} fill="rgba(255,255,255,0.8)">{L.chain} {c}</text>
            <g style={{ opacity: comp }} className="as-g">
              <circle cx={150} cy={y} r={15} fill="rgba(56,189,248,0.25)" stroke={SKY} strokeWidth={1.6} />
              <path d={`M${143},${y} l5,5 l9,-10`} stroke="#fff" strokeWidth={2.4} fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <g style={{ opacity: you }} className="as-g">
              <circle cx={262} cy={y} r={15} fill={aligned ? 'rgba(16,185,129,0.3)' : 'none'} stroke={aligned ? GREEN : 'rgba(255,255,255,0.4)'} strokeWidth={1.6} strokeDasharray={aligned ? undefined : '4 4'} style={{ transition: 'fill 0.4s, stroke 0.4s' }} />
              {aligned && <path d={`M${255},${y} l5,5 l9,-10`} stroke="#fff" strokeWidth={2.4} fill="none" strokeLinecap="round" strokeLinejoin="round" />}
            </g>
            <g style={{ opacity: bars }} className="as-g">
              <rect x={368} y={y - 16} width={74 * bars} height={9} rx={4.5} fill={SKY} />
              <rect x={368} y={y - 2} width={(110 - 36 * flip) * bars} height={9} rx={4.5} fill={aligned ? GREEN : AMBER} style={{ transition: 'fill 0.4s' }} />
            </g>
          </g>
        );
      })}
      <Chip x={24} y={350} text={L.weighing} tone="amber" v={seg(p, 0.56, 0.7)} w={290} />
      <Chip x={24} y={388} text={L.negotiated} tone="green" v={seg(p, 0.8, 0.94)} w={290} />
    </Svg>
  );
}

// ── 5. Share de 60% para 45%: oportunidades e ações por praça ─────────────
function ShareOppsScene({ p, L }: SceneProps) {
  const pts = [60, 58, 55, 52, 48, 45];
  const X = (i: number) => 52 + i * 52;
  const Y = (v: number) => 200 - ((v - 42) / 20) * 130;
  const d = pts.map((v, i) => `${i ? 'L' : 'M'}${X(i)},${Y(v)}`).join(' ');
  const r = rng(11);
  const tiles = Array.from({ length: 24 }, () => r());
  const chatQ = easeOut(seg(p, 0.7, 0.82));
  const chatA = easeOut(seg(p, 0.8, 0.94));
  return (
    <Svg title={L.title}>
      <text x={24} y={34} fontSize={12.5} fontWeight={700} fill="#fff" style={{ opacity: seg(p, 0, 0.08) }} className="as-g">{L.share}</text>
      {[60, 50].map((g) => <line key={g} x1={40} x2={320} y1={Y(g)} y2={Y(g)} stroke="rgba(255,255,255,0.1)" strokeDasharray="3 5" />)}
      <path d={d} pathLength={1} fill="none" stroke={LILAC} strokeWidth={3.5} strokeLinecap="round" strokeLinejoin="round" strokeDasharray={1} strokeDashoffset={1 - easeOut(seg(p, 0.02, 0.28))} />
      <g style={{ opacity: seg(p, 0.04, 0.14) }} className="as-g">
        <circle cx={X(0)} cy={Y(60)} r={5} fill="#fff" />
        <text x={X(0)} y={Y(60) - 12} textAnchor="middle" fontSize={14} fontWeight={700} fill="#fff">{L.from}</text>
      </g>
      <g style={{ opacity: seg(p, 0.22, 0.32) }} className="as-g">
        <circle cx={X(5)} cy={Y(45)} r={5.5} fill={RED} />
        <text x={X(5)} y={Y(45) + 24} textAnchor="middle" fontSize={14} fontWeight={700} fill="#FCA5A5">{L.to}</text>
      </g>
      <g style={{ opacity: seg(p, 0.26, 0.4) }} className="as-g">
        <text x={352} y={34} fontSize={12.5} fontWeight={700} fill="#fff">{L.states}</text>
        {tiles.map((v, i) => (
          <rect key={i} x={352 + (i % 6) * 30} y={46 + Math.floor(i / 6) * 30} width={24} height={24} rx={6} fill={v > 0.55 ? `rgba(239,68,68,${0.35 + v * 0.5})` : v > 0.3 ? 'rgba(251,191,36,0.45)' : 'rgba(255,255,255,0.1)'} />
        ))}
      </g>
      <text x={24} y={256} fontSize={12.5} fontWeight={700} fill="#fff" style={{ opacity: seg(p, 0.46, 0.56) }} className="as-g">{L.opps}</text>
      {[0, 1, 2].map((i) => {
        const v = easeOut(seg(p, 0.48 + i * 0.06, 0.62 + i * 0.06));
        const y = 266 + i * 34;
        return (
          <g key={i} style={show(v)} className="as-g">
            <rect x={24} y={y} width={512} height={28} rx={14} fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.14)" />
            <circle cx={44} cy={y + 14} r={5} fill={i === 0 ? RED : AMBER} />
            <text x={60} y={y + 18} fontSize={12.5} fontWeight={600} fill="#fff">{L.city} {String.fromCharCode(65 + i)} · {L.state} {String.fromCharCode(88 + i)}</text>
            <rect x={452} y={y + 5} width={72} height={18} rx={9} fill="rgba(86,37,242,0.55)" />
            <text x={488} y={y + 18} textAnchor="middle" fontSize={11} fontWeight={700} fill="#fff">{L.action}</text>
          </g>
        );
      })}
      <g style={show(chatQ)} className="as-g">
        <rect x={290} y={372} width={246} height={26} rx={13} fill="rgba(255,255,255,0.12)" />
        <text x={413} y={389} textAnchor="middle" fontSize={12} fill="#fff">{L.ask}</text>
      </g>
      <g style={show(chatA)} className="as-g">
        <circle cx={34} cy={414} r={9} fill={ACCENT} />
        <rect x={50} y={402} width={260} height={26} rx={13} fill="rgba(86,37,242,0.45)" stroke="rgba(183,158,255,0.6)" />
        <text x={180} y={419} textAnchor="middle" fontSize={12} fontWeight={600} fill="#fff">{L.answer}</text>
      </g>
    </Svg>
  );
}

export const CASE_SCENES: Record<string, (props: SceneProps) => JSX.Element> = {
  'frozen-stock': FrozenStockScene,
  'distributor-gap': DistributorGapScene,
  'sac-locator': SacLocatorScene,
  'price-gap': PriceGapScene,
  'share-opps': ShareOppsScene,
};

/** 'area:<slug>' reaproveita a cena de uma solução. */
export function getCaseScene(visual: string): ((props: SceneProps) => JSX.Element) | null {
  if (visual.startsWith('area:')) return SCENES[visual.slice(5)] ?? null;
  return CASE_SCENES[visual] ?? null;
}
