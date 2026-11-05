import { useEffect, useRef, useState, type ReactNode } from 'react';
import { Boxes, Package, Store, TriangleAlert, Users } from 'lucide-react';
import { useTranslation } from '@/i18n/useTranslation';
import { DonutSvg, LineSvg } from './vizPrimitives';

// Telas reais do Dinn, reproduzidas a partir do briefing em
// dinn-manager-app/docs/site-reproducao (design-tokens.json e screens/*.json).
// Regras do briefing: textos de `real_strings`, dados fictícios (Rede Alfa, Farmácia
// Centro 014, Produto A 20 mg 30 cp, Laboratório Exemplo), dado de ontem (D-1) nunca
// chamado de tempo real, vendas só como "estimadas" e sem selos de Beta.
// Só telas em produção: Início, Localizar Produto e Mercado.

// Textos das telas em EN e ES. A chave é o texto em português. O dado é fictício.
const DICT: Record<string, { en: string; es: string }> = {
  'Crítico': { en: 'Critical', es: 'Crítico' }, 'Alto': { en: 'High', es: 'Alto' }, 'Moderado': { en: 'Moderate', es: 'Moderado' }, 'Leve': { en: 'Low', es: 'Leve' },
  'Médio': { en: 'Medium', es: 'Medio' }, 'Baixo': { en: 'Low', es: 'Bajo' },
  'Rede Alfa': { en: 'Chain Alpha', es: 'Cadena Alfa' }, 'Rede Beta': { en: 'Chain Beta', es: 'Cadena Beta' }, 'Rede Gama': { en: 'Chain Gamma', es: 'Cadena Gamma' },
  '1.200 PDVs': { en: '1,200 stores', es: '1.200 tiendas' }, '950 PDVs': { en: '950 stores', es: '950 tiendas' }, '700 PDVs': { en: '700 stores', es: '700 tiendas' },
  'Olá, Ana Exemplo.': { en: 'Hello, Ana Example.', es: 'Hola, Ana Ejemplo.' },
  'Atualizado em 02/11/2026 (D-1)': { en: 'Updated on 11/02/2026 (D-1)', es: 'Actualizado el 02/11/2026 (D-1)' },
  'Produtos': { en: 'Products', es: 'Productos' }, 'Produto A 20 mg 30 cp': { en: 'Product A 20 mg 30 tablets', es: 'Producto A 20 mg 30 comp.' },
  'Modelo': { en: 'Model', es: 'Modelo' }, 'Todos': { en: 'All', es: 'Todos' },
  'Total de PDV': { en: 'Total stores', es: 'Total de tiendas' }, 'Total de SKU': { en: 'Total SKUs', es: 'Total de SKU' },
  'Estoque aproximado': { en: 'Approximate stock', es: 'Stock aproximado' }, '% sem estoque': { en: '% out of stock', es: '% sin stock' },
  'Ruptura': { en: 'Stock-out', es: 'Quiebre de stock' }, 'Semanal': { en: 'Weekly', es: 'Semanal' }, 'Diário': { en: 'Daily', es: 'Diario' }, '30 dias': { en: '30 days', es: '30 días' },
  'Classificação de Ruptura': { en: 'Stock-out level', es: 'Nivel de quiebre' }, 'Nível': { en: 'Level', es: 'Nivel' }, 'Total PDVs': { en: 'Total stores', es: 'Total tiendas' },
  'Ranking de ruptura por rede': { en: 'Stock-out ranking by chain', es: 'Ranking de quiebre por cadena' },
  'Localizar Produto': { en: 'Find Product', es: 'Localizar Producto' }, 'Produto': { en: 'Product', es: 'Producto' },
  'Localização': { en: 'Location', es: 'Ubicación' }, 'Rua Exemplo, 100': { en: '100 Example Street', es: 'Calle Ejemplo, 100' },
  'Farmácias encontradas': { en: 'Pharmacies found', es: 'Farmacias encontradas' }, 'Mais próximas': { en: 'Nearest', es: 'Más cercanas' },
  'Farmácia Centro 014': { en: 'Downtown Pharmacy 014', es: 'Farmacia Centro 014' }, 'Farmácia Centro 021': { en: 'Downtown Pharmacy 021', es: 'Farmacia Centro 021' }, 'Farmácia Bairro 007': { en: 'Local Pharmacy 007', es: 'Farmacia Barrio 007' },
  'Aberto · Fecha às 22:00': { en: 'Open · Closes at 10:00 PM', es: 'Abierto · Cierra a las 22:00' }, 'Aberto · Fecha às 20:00': { en: 'Open · Closes at 8:00 PM', es: 'Abierto · Cierra a las 20:00' }, 'Fechado': { en: 'Closed', es: 'Cerrado' },
  '6–12 un': { en: '6–12 units', es: '6–12 un' }, '2–5 un': { en: '2–5 units', es: '2–5 un' }, '0–2 un': { en: '0–2 units', es: '0–2 un' },
  'Disponibilidade': { en: 'Availability', es: 'Disponibilidad' },
  'Estoque exato': { en: 'Exact stock', es: 'Stock exacto' }, 'Estoque do produto': { en: 'Product stock', es: 'Stock del producto' },
  'Estimativa de ontem, 02/11/2026': { en: 'Estimate from yesterday, 11/02/2026', es: 'Estimación de ayer, 02/11/2026' },
  'Preço': { en: 'Price', es: 'Precio' }, 'R$ 39,90': { en: 'R$ 39.90', es: 'R$ 39,90' }, 'por unidade': { en: 'per unit', es: 'por unidad' },
  'Confiabilidade do estoque': { en: 'Stock reliability', es: 'Confiabilidad del stock' }, 'A - Confiável': { en: 'A - Reliable', es: 'A - Confiable' },
  'Consultar agora': { en: 'Check now', es: 'Consultar ahora' },
  'Laboratório Exemplo': { en: 'Example Laboratory', es: 'Laboratorio Ejemplo' }, 'Laboratório B': { en: 'Laboratory B', es: 'Laboratorio B' }, 'Laboratório C': { en: 'Laboratory C', es: 'Laboratorio C' }, 'Laboratório D': { en: 'Laboratory D', es: 'Laboratorio D' }, 'Outros': { en: 'Others', es: 'Otros' },
  'Mercado': { en: 'Market', es: 'Mercado' }, 'Vendas estimadas a partir do giro de estoque': { en: 'Sales estimated from stock turnover', es: 'Ventas estimadas a partir de la rotación de stock' },
  'Mercado Exemplo X': { en: 'Example Market X', es: 'Mercado Ejemplo X' }, 'Período': { en: 'Period', es: 'Período' }, 'Últimos 30 dias': { en: 'Last 30 days', es: 'Últimos 30 días' },
  'Total de PDVs no mercado': { en: 'Total stores in the market', es: 'Total de tiendas en el mercado' }, 'PDVs só com concorrente': { en: 'Stores with competitors only', es: 'Tiendas solo con competidores' }, 'PDVs que concentram 80%': { en: 'Stores that hold 80%', es: 'Tiendas que concentran el 80%' },
  'Market share por laboratório': { en: 'Market share by laboratory', es: 'Market share por laboratorio' }, 'total': { en: 'total', es: 'total' },
  'Vendas estimadas: laboratório vs. concorrentes': { en: 'Estimated sales: laboratory vs. competitors', es: 'Ventas estimadas: laboratorio vs. competidores' },
  'Meu laboratório': { en: 'My laboratory', es: 'Mi laboratorio' }, 'Concorrentes': { en: 'Competitors', es: 'Competidores' }, ' mil': { en: 'k', es: ' mil' },
  'Tela Início do Dinn: ruptura por produto, nível dos PDVs e ranking por rede.': { en: 'Dinn Home screen: stock-out by product, store level and ranking by chain.', es: 'Pantalla Inicio de Dinn: quiebre por producto, nivel de las tiendas y ranking por cadena.' },
  'Tela Localizar Produto do Dinn: lista de farmácias e mapa com o nível de estoque.': { en: 'Dinn Find Product screen: list of pharmacies and a map with the stock level.', es: 'Pantalla Localizar Producto de Dinn: lista de farmacias y mapa con el nivel de stock.' },
  'Tela Mercado do Dinn: participação por laboratório e vendas estimadas.': { en: 'Dinn Market screen: share by laboratory and estimated sales.', es: 'Pantalla Mercado de Dinn: participación por laboratorio y ventas estimadas.' },
};
type L = 'pt' | 'en' | 'es';
const makeTr = (lang: L) => (s: string) => (lang === 'pt' ? s : DICT[s]?.[lang] ?? s);
// Números: PT e ES usam ponto no milhar e vírgula no decimal. EN troca os dois.
const makeNum = (lang: L) => (s: string) => (lang === 'en' ? s.replace(/[.,]/g, (c) => (c === '.' ? ',' : '.')) : s);
const LOC: Record<L, string> = { pt: 'pt-BR', en: 'en-US', es: 'es-ES' };

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
function Home({ lang }: { lang: L }) {
  const tr = makeTr(lang), nm = makeNum(lang);
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
      <div className="da-bar"><b>{tr('Olá, Ana Exemplo.')}</b><span>{tr('Atualizado em 02/11/2026 (D-1)')}</span></div>
      <div className="da-filters"><Chip label={tr('Produtos')} value={tr('Produto A 20 mg 30 cp')} /><Chip label="UF" value="SP" /><Chip label={tr('Modelo')} value={tr('Todos')} /></div>
      <div className="da-metrics four">
        <Metric icon={<Store size={20} />} label={tr('Total de PDV')} value={nm('8.240')} />
        <Metric icon={<Package size={20} />} label={tr('Total de SKU')} value="6" />
        <Metric icon={<Boxes size={20} />} label={tr('Estoque aproximado')} value={nm('1.250.000')} />
        <Metric icon={<TriangleAlert size={20} />} label={tr('% sem estoque')} value={nm('18,4%')} />
      </div>
      <div className="da-row">
        <Panel className="grow" title={tr('Ruptura')} aside={<span className="da-seg"><i className="on">{tr('Semanal')}</i><i>{tr('Diário')}</i><u>{tr('30 dias')}</u></span>}>
          <LineSvg labels={lang === 'en' ? ['10/04', '10/11', '10/18', '10/25'] : ['04/10', '11/10', '18/10', '25/10']} series={[{ name: tr('Produto A 20 mg 30 cp'), values: [31.2, 29.8, 27.5, 24.9], color: BRAND }]} unit="%" digits={1} height={190} area />
        </Panel>
        <Panel className="side" title={tr('Classificação de Ruptura')}>
          <table className="da-table">
            <thead><tr><th>{tr('Nível')}</th><th>{tr('Total PDVs')}</th><th>%</th></tr></thead>
            <tbody>
              {levels.map(([n, c, p, k]) => (
                <tr key={n}><td><span className={`da-badge ${k}`}>{tr(n)}</span></td><td>{nm(c)}</td><td>{nm(p)}</td></tr>
              ))}
            </tbody>
          </table>
        </Panel>
      </div>
      <Panel title={tr('Ranking de ruptura por rede')}>
        <ul className="da-rank">
          {nets.map(([n, p, v, lv]) => (
            <li key={n}>
              <span>{tr(n)}<small>{tr(p)}</small></span>
              <span className="da-track"><i style={{ width: `${v * 2}%` }} className={lv} /></span>
              <b>{v.toLocaleString(LOC[lang], { minimumFractionDigits: 1 })}%</b>
            </li>
          ))}
        </ul>
      </Panel>
    </>
  );
}

// ── Localizar Produto ─────────────────────────────────────────────────────
function Locator({ lang }: { lang: L }) {
  const tr = makeTr(lang);
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
        <h3>{tr('Localizar Produto')}</h3>
        <div className="da-field"><em>{tr('Produto')}</em><span>{tr('Produto A 20 mg 30 cp')}</span></div>
        <div className="da-field"><em>{tr('Localização')}</em><span>{tr('Rua Exemplo, 100')}</span></div>
        <div className="da-loc-count"><b>4</b> {tr('Farmácias encontradas')}<small>{tr('Mais próximas')}</small></div>
        {cards.map(([n, net, hours, lv, rng, km, k]) => (
          <div key={n} className="da-store">
            <div className="da-store-top"><b>{tr(n)}</b><i>{lang === 'en' ? km.replace(',', '.') : km}</i></div>
            <small>{tr(net)} · {tr(hours)}</small>
            <div className="da-store-lv">
              <span className={`da-badge ${k}`}>{tr('Disponibilidade')} ({tr(lv)}): {tr(rng)}</span>
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
          <div className="da-popup-head"><b>{tr('Farmácia Centro 014')}</b><span className="da-tag">{tr('Estoque exato')}</span></div>
          <small>{tr('Rede Alfa')} · {tr('Aberto · Fecha às 22:00')}</small>
          <div className="da-popup-stock"><em>{tr('Estoque do produto')}</em><b>{tr('6–12 un')}</b><small>{tr('Estimativa de ontem, 02/11/2026')}</small></div>
          <div className="da-popup-cols">
            <div><em>{tr('Preço')}</em><b>{tr('R$ 39,90')}</b><small>{tr('por unidade')}</small></div>
            <div><em>{tr('Confiabilidade do estoque')}</em><b>{tr('A - Confiável')}</b></div>
          </div>
          <span className="da-btn">{tr('Consultar agora')}</span>
        </div>
      </div>
    </div>
  );
}

// ── Mercado ───────────────────────────────────────────────────────────────
function Market({ lang }: { lang: L }) {
  const tr = makeTr(lang), nm = makeNum(lang);
  const labs = [
    { label: tr('Laboratório Exemplo'), value: 34.2 },
    { label: tr('Laboratório B'), value: 28.1 },
    { label: tr('Laboratório C'), value: 18.2 },
    { label: tr('Laboratório D'), value: 11.3 },
    { label: tr('Outros'), value: 8.2 },
  ];
  const colors = [BRAND, '#8b6cf6', '#b9a6fa', '#dcd3fc', '#e9e9ee'];
  return (
    <>
      <div className="da-bar"><b>{tr('Mercado')}</b><span>{tr('Vendas estimadas a partir do giro de estoque')}</span></div>
      <div className="da-filters"><Chip label={tr('Mercado')} value={tr('Mercado Exemplo X')} /><Chip label={tr('Período')} value={tr('Últimos 30 dias')} /></div>
      <div className="da-metrics three">
        <Metric icon={<Store size={20} />} label={tr('Total de PDVs no mercado')} value={nm('12.400')} />
        <Metric icon={<Users size={20} />} label={tr('PDVs só com concorrente')} value={nm('3.150')} />
        <Metric icon={<Boxes size={20} />} label={tr('PDVs que concentram 80%')} value={nm('2.860')} />
      </div>
      <div className="da-row">
        <Panel className="donut" title={tr('Market share por laboratório')}>
          <div className="da-donut-row">
            <DonutSvg items={labs} colors={colors} size={130} stroke={22} center={{ value: '100%', label: tr('total') }} />
            <ul className="da-legend">
              {labs.map((l, i) => (
                <li key={l.label}><i style={{ background: colors[i] }} />{l.label}<b>{l.value.toLocaleString(LOC[lang], { minimumFractionDigits: 1 })}%</b></li>
              ))}
            </ul>
          </div>
        </Panel>
        <Panel className="grow" title={tr('Vendas estimadas: laboratório vs. concorrentes')} aside={<span className="da-seg"><i className="on">{tr('Semanal')}</i><i>{tr('Diário')}</i></span>}>
          <LineSvg
            labels={lang === 'en' ? ['10/04', '10/11', '10/18', '10/25', '11/01'] : ['04/10', '11/10', '18/10', '25/10', '01/11']}
            series={[
              { name: tr('Meu laboratório'), values: [41.2, 43.9, 46.8, 49.5, 52.1], color: BRAND },
              { name: tr('Concorrentes'), values: [97.8, 96.1, 95.4, 94.7, 93.9], color: '#a3a3b2' },
            ]}
            unit={tr(' mil')}
            digits={1}
            height={170}
            area
          />
          <p className="da-legend-inline"><i style={{ background: BRAND }} />{tr('Meu laboratório')}<i style={{ background: '#a3a3b2' }} />{tr('Concorrentes')}</p>
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
  const { lang } = useTranslation();
  const l = (lang === 'en' || lang === 'es' ? lang : 'pt') as L;
  const { w, h, label } = SIZES[kind];
  return (
    <Stage w={w} h={h} label={makeTr(l)(label)}>
      {kind === 'home' && <Home lang={l} />}
      {kind === 'locator' && <Locator lang={l} />}
      {kind === 'market' && <Market lang={l} />}
    </Stage>
  );
}
