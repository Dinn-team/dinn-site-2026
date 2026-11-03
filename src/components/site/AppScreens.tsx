import { useEffect, useRef, useState, type ReactNode } from 'react';
import { Boxes, Clock, Package, Store, TriangleAlert, Users } from 'lucide-react';
import { DonutSvg, LineSvg } from './vizPrimitives';

// Telas reais do Dinn, reproduzidas a partir do briefing em
// dinn-manager-app/docs/site-reproducao (design-tokens.json e screens/*.json).
// Regras do briefing: textos de `real_strings`, dados fictícios (Rede Alfa, Farmácia
// Centro 014, Produto A 20 mg 30 cp, Laboratório Exemplo), dado de ontem (D-1) nunca
// chamado de tempo real, vendas só como "estimadas" e sem selos de Beta.
// Só telas em produção: Início, Localizar Produto e Mercado.

export type ScreenKind = 'home' | 'locator' | 'market';

const BRAND = '#5625f2';

// A tela é desenhada em tamanho fixo e escalada para caber na largura do bloco.
function Stage({ w, h, children, label }: { w: number; h: number; children: ReactNode; label: string }) {
  const wrap = useRef<HTMLDivElement>(null);
  const [s, setS] = useState(0.8);
  useEffect(() => {
    const el = wrap.current;
    if (!el) return;
    const f = () => setS(Math.min(1, el.clientWidth / w));
    f();
    const ro = new ResizeObserver(f);
    ro.observe(el);
    return () => ro.disconnect();
  }, [w]);
  return (
    <div ref={wrap} className="da-stage" style={{ height: h * s }} role="img" aria-label={label}>
      <div className="dnn-app" style={{ width: w, height: h, transform: `scale(${s})` }}>{children}</div>
    </div>
  );
}

const Chip = ({ label, value }: { label: string; value: string }) => (
  <span className="da-chip"><em>{label}</em>{value}</span>
);

const Metric = ({ icon, label, value }: { icon: ReactNode; label: string; value: string }) => (
  <div className="da-metric">
    <span className="da-metric-icon">{icon}</span>
    <span><b>{value}</b><small>{label}</small></span>
  </div>
);

const Panel = ({ title, aside, children, className = '' }: { title: string; aside?: ReactNode; children: ReactNode; className?: string }) => (
  <section className={`da-card ${className}`}>
    <header><h4>{title}</h4>{aside}</header>
    {children}
  </section>
);

// ── Início ────────────────────────────────────────────────────────────────
function Home() {
  const levels: [string, string, string, string][] = [
    ['Crítico', '1.120', '13,6%', 'crit'],
    ['Alto', '1.870', '22,7%', 'high'],
    ['Moderado', '2.650', '32,2%', 'mod'],
    ['Leve', '2.600', '31,6%', 'low'],
  ];
  const nets: [string, string, number, string][] = [
    ['Rede Alfa', '1.200 PDVs', 41.2, 'Alto'],
    ['Rede Beta', '950 PDVs', 33.7, 'Moderado'],
    ['Rede Gama', '700 PDVs', 22.1, 'Leve'],
  ];
  return (
    <>
      <div className="da-bar"><b>Olá, Ana Exemplo.</b><span>Atualizado em 02/11/2026 (D-1)</span></div>
      <div className="da-filters"><Chip label="Produtos" value="Produto A 20 mg 30 cp" /><Chip label="UF" value="SP" /><Chip label="Modelo" value="Todos" /></div>
      <div className="da-metrics four">
        <Metric icon={<Store size={20} />} label="Total de PDV" value="8.240" />
        <Metric icon={<Package size={20} />} label="Total de SKU" value="6" />
        <Metric icon={<Boxes size={20} />} label="Estoque aproximado" value="1.250.000" />
        <Metric icon={<TriangleAlert size={20} />} label="% sem estoque" value="18,4%" />
      </div>
      <div className="da-row">
        <Panel className="grow" title="Ruptura" aside={<span className="da-seg"><i className="on">Semanal</i><i>Diário</i><u>30 dias</u></span>}>
          <LineSvg labels={['04/10', '11/10', '18/10', '25/10']} series={[{ name: 'Produto A 20 mg 30 cp', values: [31.2, 29.8, 27.5, 24.9], color: BRAND }]} unit="%" digits={1} height={190} area />
        </Panel>
        <Panel className="side" title="Classificação de Ruptura">
          <table className="da-table">
            <thead><tr><th>Nível</th><th>Total PDVs</th><th>%</th></tr></thead>
            <tbody>
              {levels.map(([n, c, p, k]) => (
                <tr key={n}><td><span className={`da-badge ${k}`}>{n}</span></td><td>{c}</td><td>{p}</td></tr>
              ))}
            </tbody>
          </table>
        </Panel>
      </div>
      <Panel title="Ranking de ruptura por rede">
        <ul className="da-rank">
          {nets.map(([n, p, v, lv]) => (
            <li key={n}>
              <span>{n}<small>{p}</small></span>
              <span className="da-track"><i style={{ width: `${v * 2}%` }} className={lv} /></span>
              <b>{v.toLocaleString('pt-BR', { minimumFractionDigits: 1 })}%</b>
            </li>
          ))}
        </ul>
      </Panel>
    </>
  );
}

// ── Localizar Produto ─────────────────────────────────────────────────────
function Locator() {
  const cards: [string, string, string, string, string, string, string][] = [
    ['Farmácia Centro 014', 'Rede Alfa', 'Aberto · Fecha às 22:00', 'Alto', '6–12 un', '0,6 km', 'ok'],
    ['Farmácia Centro 021', 'Rede Alfa', 'Aberto · Fecha às 20:00', 'Médio', '2–5 un', '1,1 km', 'warn'],
    ['Farmácia Bairro 007', 'Rede Beta', 'Fechado', 'Baixo', '0–2 un', '2,3 km', 'crit'],
  ];
  const pins: [number, number, string][] = [
    [215, 150, 'ok'], [330, 215, 'warn'], [150, 260, 'crit'], [420, 120, 'ok'], [470, 280, 'crit'],
    [260, 330, 'ok'], [390, 360, 'warn'], [110, 150, 'ok'], [510, 190, 'crit'], [320, 90, 'warn'], [200, 400, 'ok'],
  ];
  const col: Record<string, string> = { ok: '#10b981', warn: '#f59e0b', crit: '#ef4444' };
  return (
    <div className="da-loc">
      <aside className="da-loc-panel">
        <h3>Localizar Produto</h3>
        <div className="da-field"><em>Produto</em><span>Produto A 20 mg 30 cp</span></div>
        <div className="da-field"><em>Localização</em><span>Rua Exemplo, 100</span></div>
        <div className="da-loc-count"><b>4</b> Farmácias encontradas<small>Mais próximas</small></div>
        {cards.map(([n, net, hours, lv, rng, km, k]) => (
          <div key={n} className="da-store">
            <div className="da-store-top"><b>{n}</b><i>{km}</i></div>
            <small>{net} · {hours}</small>
            <div className="da-store-lv">
              <span className={`da-badge ${k}`}>Disponibilidade ({lv}): {rng}</span>
              <span className="da-conf">{k === 'ok' ? 'A' : k === 'warn' ? 'B' : 'C'}</span>
            </div>
          </div>
        ))}
      </aside>
      <div className="da-map">
        <svg viewBox="0 0 580 520" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
          <rect width="580" height="520" fill="#eceef2" />
          {[[40, 30, 110, 80], [190, 20, 90, 120], [330, 40, 120, 70], [480, 30, 80, 100], [30, 190, 100, 90], [180, 180, 100, 110], [320, 160, 110, 90], [470, 180, 90, 100], [60, 330, 120, 100], [220, 340, 100, 80], [360, 330, 100, 110], [500, 340, 60, 90]].map(([x, y, w, h], i) => (
            <rect key={i} x={x} y={y} width={w} height={h} rx="8" fill="#f7f8fa" />
          ))}
          {[[0, 150, 580, 150], [0, 300, 580, 300], [160, 0, 160, 520], [300, 0, 300, 520], [450, 0, 450, 520]].map(([a, b, c, d], i) => (
            <line key={i} x1={a} y1={b} x2={c} y2={d} stroke="#fff" strokeWidth="14" />
          ))}
          <path d="M0 420 C 160 380, 330 460, 580 400" stroke="#fff" strokeWidth="10" fill="none" />
          {pins.map(([x, y, k], i) => (
            <g key={i} transform={`translate(${x} ${y})`}>
              <circle r="13" fill={col[k]} stroke="#fff" strokeWidth="3" />
              <rect x="-4.5" y="-4.5" width="9" height="9" rx="2" fill="#fff" />
            </g>
          ))}
          <circle cx="290" cy="235" r="7" fill={BRAND} stroke="#fff" strokeWidth="3" />
        </svg>
        <div className="da-popup">
          <div className="da-popup-head"><b>Farmácia Centro 014</b><span className="da-tag">Estoque exato</span></div>
          <small>Rede Alfa · Aberto · Fecha às 22:00</small>
          <div className="da-popup-stock"><em>Estoque do produto</em><b>6–12 un</b><small>Estimativa de ontem, 02/11/2026</small></div>
          <div className="da-popup-cols">
            <div><em>Preço</em><b>R$ 39,90</b><small>por unidade</small></div>
            <div><em>Confiabilidade do estoque</em><b>A - Confiável</b></div>
          </div>
          <span className="da-btn"><Clock size={13} /> Consultar agora</span>
        </div>
      </div>
    </div>
  );
}

// ── Mercado ───────────────────────────────────────────────────────────────
function Market() {
  const labs = [
    { label: 'Laboratório Exemplo', value: 34.2 },
    { label: 'Laboratório B', value: 28.1 },
    { label: 'Laboratório C', value: 18.2 },
    { label: 'Laboratório D', value: 11.3 },
    { label: 'Outros', value: 8.2 },
  ];
  const colors = [BRAND, '#8b6cf6', '#b9a6fa', '#dcd3fc', '#e9e9ee'];
  return (
    <>
      <div className="da-bar"><b>Mercado</b><span>Vendas estimadas a partir do giro de estoque</span></div>
      <div className="da-filters"><Chip label="Mercado" value="Mercado Exemplo X" /><Chip label="Período" value="Últimos 30 dias" /></div>
      <div className="da-metrics three">
        <Metric icon={<Store size={20} />} label="Total de PDVs no mercado" value="12.400" />
        <Metric icon={<Users size={20} />} label="PDVs só com concorrente" value="3.150" />
        <Metric icon={<Boxes size={20} />} label="PDVs que concentram 80%" value="2.860" />
      </div>
      <div className="da-row">
        <Panel className="donut" title="Market share por laboratório">
          <div className="da-donut-row">
            <DonutSvg items={labs} colors={colors} size={130} stroke={22} center={{ value: '100%', label: 'total' }} />
            <ul className="da-legend">
              {labs.map((l, i) => (
                <li key={l.label}><i style={{ background: colors[i] }} />{l.label}<b>{l.value.toLocaleString('pt-BR', { minimumFractionDigits: 1 })}%</b></li>
              ))}
            </ul>
          </div>
        </Panel>
        <Panel className="grow" title="Vendas estimadas: laboratório vs. concorrentes" aside={<span className="da-seg"><i className="on">Semanal</i><i>Diário</i></span>}>
          <LineSvg
            labels={['04/10', '11/10', '18/10', '25/10', '01/11']}
            series={[
              { name: 'Meu laboratório', values: [41.2, 43.9, 46.8, 49.5, 52.1], color: BRAND },
              { name: 'Concorrentes', values: [97.8, 96.1, 95.4, 94.7, 93.9], color: '#a3a3b2' },
            ]}
            unit=" mil"
            digits={1}
            height={170}
            area
          />
          <p className="da-legend-inline"><i style={{ background: BRAND }} />Meu laboratório<i style={{ background: '#a3a3b2' }} />Concorrentes</p>
        </Panel>
      </div>
    </>
  );
}

const SIZES: Record<ScreenKind, { w: number; h: number; label: string }> = {
  home: { w: 880, h: 684, label: 'Tela Início do Dinn: ruptura por produto, nível dos PDVs e ranking por rede.' },
  locator: { w: 880, h: 580, label: 'Tela Localizar Produto do Dinn: lista de farmácias e mapa com o nível de estoque.' },
  market: { w: 880, h: 476, label: 'Tela Mercado do Dinn: participação por laboratório e vendas estimadas.' },
};

export function AppScreen({ kind }: { kind: ScreenKind }) {
  const { w, h, label } = SIZES[kind];
  return (
    <Stage w={w} h={h} label={label}>
      {kind === 'home' && <Home />}
      {kind === 'locator' && <Locator />}
      {kind === 'market' && <Market />}
    </Stage>
  );
}
