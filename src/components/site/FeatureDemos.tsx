import type { ReactElement } from 'react';
import { ArrowUp, Boxes, Check, Download, Factory, FileText, Lock, Package, Store, ThumbsUp, TriangleAlert, X } from 'lucide-react';
import {
  BRAND, Bar, Chip, ConnectionsDemo, Frame, LEVEL, Levels, Line, LocatorDemo, MarketDemo, Metric, Num, Panel, PRODUCTS, QueueDemo,
  Seg, Tip, fmt, useDemo, type Def, type DemoProps,
} from './AppDemos';
import { JeanChatDemo } from './JeanDemos';
import { JeanOrb } from './JeanOrb';
import { ConnectionMapDemo } from './offer/ConnectionMap';

// Telas do Dinn animadas, uma por funcionalidade (páginas /funcionalidades/<id>
// e /plataforma). Mesmo motor de AppDemos.tsx: laço com cursor no topo e um
// estado por passo no palco (Entrada, Ação, Saída, Decisão).
// Base: dinn-manager-app/docs/site-reproducao (features-catalog.json e
// screens/*.json). Textos da interface vêm de `real_strings`; dados fictícios.

const ROWS: [string, string, string, number, number][] = [
  ['Farmácia Centro 014', 'Rede Alfa', 'Crítico', 86.7, 26],
  ['Farmácia Bairro 007', 'Rede Beta', 'Crítico', 80.0, 24],
  ['Farmácia Centro 021', 'Rede Alfa', 'Alto', 63.3, 19],
  ['Farmácia Avenida 032', 'Rede Gama', 'Alto', 56.7, 17],
  ['Farmácia Praça 003', 'Rede Beta', 'Moderado', 40.0, 12],
];
const Hello = () => <Bar title="Olá, Ana Exemplo." sub="Atualizado em 02/11/2026 (D-1)" />;
const fade = (on: boolean, i: number) => ({ opacity: on ? 1 : 0, transition: `opacity .4s ease ${i * 0.08}s` });

// ── Estoque estimado: modelo da loja, confiança e detalhe do PDV ────────────
const EST_ROWS: [string, string, 'Exato' | 'Estimado', string, string][] = [
  ['Farmácia Centro 014', 'Rede Alfa', 'Exato', '9 un', ''],
  ['Farmácia Bairro 007', 'Rede Beta', 'Estimado', '1–3 un', 'B'],
  ['Farmácia Centro 021', 'Rede Alfa', 'Estimado', '4–8 un', 'A'],
  ['Farmácia Avenida 032', 'Rede Gama', 'Exato', '0 un', ''],
  ['Farmácia Praça 003', 'Rede Beta', 'Estimado', '2–5 un', 'B'],
];
const EST_DEF: Def = {
  beats: [
    { phase: 1, wait: 1500 },
    { to: 'model', click: true, phase: 2, wait: 500 },
    { to: 'model-2', click: true, phase: 3, wait: 700 },
    { phase: 4, wait: 1700 },
    { to: 'row-0', click: true, phase: 5, wait: 3600 },
  ],
  steps: [{ phase: 1, to: 'tbl' }, { phase: 4, to: 'conf' }, { phase: 5, to: 'd-tag' }, { phase: 5, to: 'd-conf' }],
  final: 5,
};

export function EstimateDemo({ step, def = EST_DEF }: DemoProps) {
  const { app, phase, cur, tg } = useDemo(def, step);
  const on = phase >= 1;
  const est = phase >= 4;
  const rows = est ? EST_ROWS.filter((r) => r[2] === 'Estimado') : EST_ROWS;
  return (
    <Frame app={app} h={560} nav="home" cur={cur} label="Tela Início do Dinn: o cursor filtra as lojas com estoque estimado e abre o detalhe de uma loja com a confiança da estimativa.">
      <Hello />
      <div className="da-filters">
        <Chip k="prod" tg={tg} label="Produtos" value={PRODUCTS[0]} />
        <Chip k="uf" tg={tg} label="UF" value="SP" />
        <Chip k="model" tg={tg} label="Modelo" value={est ? 'Estoque estimado' : 'Todos'} open={phase === 2} items={['Todos', 'Estoque exato', 'Estoque estimado']} picked={est || phase === 3 ? 2 : 0} />
      </div>
      <div className={`da-metrics four ${phase === 3 ? 'dd-loading' : ''}`}>
        <Metric icon={<Store size={20} />} label="Total de PDV"><Num v={est ? 3120 : 8240} on={on} /></Metric>
        <Metric icon={<Package size={20} />} label="Total de SKU"><Num v={1} on={on} /></Metric>
        <Metric icon={<Boxes size={20} />} label="Estoque aproximado"><Num v={est ? 14800 : 41200} on={on} /></Metric>
        <Metric icon={<TriangleAlert size={20} />} label="% sem estoque"><Num v={est ? 21.6 : 18.4} on={on} d={1} suffix="%" /></Metric>
      </div>
      <Panel title="Pontos de venda" t={tg('tbl')} aside={<small className="dd-muted">{est ? '3.120 PDVs com estoque estimado' : 'Total: 8.240 PDVs'}</small>}>
        <table className="da-table dd-pdv">
          <thead><tr><th>PDV</th><th>Modelo</th><th>Estoque</th><th {...tg('conf')}>Confiabilidade</th></tr></thead>
          <tbody>
            {rows.map(([n, net, m, s, c], i) => (
              <tr key={n} {...tg(`row-${i}`)} className={phase >= 5 && i === 0 ? 'dd-sel' : ''} style={fade(on, i)}>
                <td><b>{n}</b><small>{net}</small></td>
                <td><span className={`da-tag ${m === 'Estimado' ? 'fd-tag-est' : ''}`}>Estoque {m.toLowerCase()}</span></td>
                <td>{s}</td>
                <td>{c ? <span className="da-conf">{c}</span> : <span className="dd-muted">Leitura da loja</span>}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Panel>
      {phase >= 5 && (
        <aside className="dd-drawer" {...tg('drawer')}>
          <header><b>Detalhes do PDV</b><X size={16} /></header>
          <p className="dd-drawer-name">Farmácia Bairro 007<small>Rede Beta · Aberto - Fecha às 22:00</small></p>
          <span className="da-tag fd-tag-est" {...tg('d-tag')}>Estoque estimado</span>
          <p className="dd-muted">Atualizado em 02/11/2026</p>
          <div className="da-popup-stock"><em>Estoque do produto</em><b>1–3 un</b><small>Estimativa de ontem, 02/11/2026</small></div>
          <div className="fd-kv" {...tg('d-conf')}><em>Confiabilidade do estoque</em><b><span className="da-conf">B</span> Moderada</b></div>
          <h5>Ranking de ruptura por SKU</h5>
          <ul className="dd-mini">
            <li><span>Produto A 20 mg 30 cp</span><span className="da-badge crit">Crítico</span><b>80,0%</b></li>
          </ul>
        </aside>
      )}
    </Frame>
  );
}

// ── Preço: preço observado por loja, ordenado e filtrado por rede ──────────
const PRICES: [string, string, string, number][] = [
  ['Farmácia Centro 014', 'Rede Alfa', 'Alto', 39.9],
  ['Farmácia Centro 021', 'Rede Alfa', 'Médio', 41.9],
  ['Farmácia Bairro 007', 'Rede Beta', 'Baixo', 36.5],
  ['Farmácia Avenida 032', 'Rede Gama', 'Médio', 44.5],
  ['Farmácia Praça 003', 'Rede Beta', 'Alto', 39.9],
  ['Farmácia Bairro 042', 'Rede Beta', 'Alto', 47.9],
  ['Farmácia Praça 055', 'Rede Gama', 'Baixo', 38.9],
];
const AVAIL: Record<string, string> = { Alto: 'ok', Médio: 'warn', Baixo: 'crit' };
const PRICE_DEF: Def = {
  beats: [
    { phase: 1, wait: 1500 },
    { to: 'col-preco', click: true, phase: 2, wait: 1600 },
    { to: 'rede', click: true, phase: 3, wait: 500 },
    { to: 'rede-1', click: true, phase: 4, wait: 1700, cam: { at: 'tbl', z: 0.8 } },
    { to: 'col-preco', phase: 5, wait: 3200 },
  ],
  steps: [{ phase: 1, to: 'prod' }, { phase: 2, to: 'col-preco' }, { phase: 2, to: 'tbl' }, { phase: 4, to: 'row-last' }],
  final: 5,
};

export function PriceDemo({ step, def = PRICE_DEF }: DemoProps) {
  const { app, phase, cur, tg } = useDemo(def, step);
  const on = phase >= 1;
  const sorted = phase >= 2;
  const beta = phase >= 4;
  let rows = sorted ? [...PRICES].sort((a, b) => a[3] - b[3]) : PRICES;
  if (beta) rows = rows.filter((r) => r[1] === 'Rede Beta');
  return (
    <Frame app={app} h={540} nav="home" cur={cur} label="Tela Início do Dinn: o cursor ordena as lojas pelo preço observado e filtra uma rede para comparar o preço loja a loja.">
      <Hello />
      <div className="da-filters">
        <Chip k="prod" tg={tg} label="Produtos" value={PRODUCTS[0]} />
        <Chip k="uf" tg={tg} label="UF" value="SP" />
        <Chip k="rede" tg={tg} label="Rede" value={beta ? 'Rede Beta' : undefined} open={phase === 3} items={['Rede Alfa', 'Rede Beta', 'Rede Gama']} picked={beta ? 1 : undefined} />
      </div>
      <Panel title="Pontos de venda" t={tg('tbl')} aside={<small className="dd-muted">{beta ? '3 PDVs da Rede Beta' : 'Total: 7 PDVs com preço observado'}</small>}>
        <table className="da-table dd-pdv">
          <thead>
            <tr>
              <th>PDV</th><th>Disponibilidade</th>
              <th {...tg('col-preco')} className={`fd-th-tip ${sorted ? 'dd-sorted' : ''}`}>
                Preço {sorted ? '↑' : ''}
                {phase >= 5 && <Tip>Preço observado no canal digital da loja em 02/11/2026.</Tip>}
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map(([n, net, lv, p], i) => (
              <tr key={n} {...tg(i === rows.length - 1 ? 'row-last' : `row-${i}`)} className={beta && i === rows.length - 1 ? 'dd-sel' : ''} style={fade(on, i)}>
                <td><b>{n}</b><small>{net}</small></td>
                <td><span className={`da-badge ${AVAIL[lv]}`}>{lv}</span></td>
                <td><b>R$ {fmt(p, 2)}</b><small>por unidade</small></td>
              </tr>
            ))}
          </tbody>
        </table>
      </Panel>
    </Frame>
  );
}

// ── Giro e estoque sem movimento ───────────────────────────────────────────
const TURN: [string, string, number, number, string, string][] = [
  ['Farmácia Centro 021', 'Rede Alfa', 12.4, 61, '0,2', 'R$ 41,90'],
  ['Farmácia Praça 003', 'Rede Beta', 8.1, 44, '0,3', 'R$ 39,90'],
  ['Farmácia Avenida 032', 'Rede Gama', 22.6, 33, '0,4', 'R$ 44,50'],
  ['Farmácia Bairro 007', 'Rede Beta', 34.0, 9, '1,1', 'R$ 38,90'],
  ['Farmácia Centro 014', 'Rede Alfa', 41.2, 3, '1,6', 'R$ 39,90'],
];
const TURN_RAW = [3, 0, 4, 1, 2];
const TURN_DEF: Def = {
  beats: [
    { phase: 1, wait: 1500 },
    { to: 'col-par', click: true, phase: 2, wait: 1500 },
    { to: 'st-30', click: true, phase: 3, wait: 2300, cam: 'out' },
    { to: 'col-giro', phase: 4, wait: 3200 },
  ],
  steps: [{ phase: 1, to: 'prod' }, { phase: 2, to: 'col-par' }, { phase: 3, to: 'tbl' }, { phase: 3, to: 'st' }],
  final: 4,
};

export function TurnoverDemo({ step, def = TURN_DEF }: DemoProps) {
  const { app, phase, cur, tg } = useDemo(def, step);
  const on = phase >= 1;
  const sorted = phase >= 2;
  const only30 = phase >= 3;
  const rows = (sorted ? TURN : TURN_RAW.map((i) => TURN[i])).filter((r) => !only30 || r[3] >= 30);
  return (
    <Frame app={app} h={520} nav="home" cur={cur} label="Tela Início do Dinn: o cursor ordena as lojas pelos dias de estoque parado e filtra as que estão paradas há 30 dias ou mais, com o giro de cada uma.">
      <Hello />
      <div className="da-filters">
        <Chip k="prod" tg={tg} label="Produtos" value={PRODUCTS[0]} />
        <Chip k="uf" tg={tg} label="UF" value="SP" />
        <Chip k="city" tg={tg} label="Cidade" value="Cidade Exemplo" />
        {only30 && <span className="da-chip has fd-filter dd-in">Estoque parado há 30+ dias <X size={13} /></span>}
      </div>
      <div className="da-row">
        <Panel className="grow" title="Pontos de venda" t={tg('tbl')} aside={<Seg items={['7 dias', '30 dias', '90 dias']} on={1} />}>
          <table className="da-table dd-pdv">
            <thead>
              <tr>
                <th>PDV</th><th>% Ruptura</th>
                <th {...tg('col-par')} className={sorted ? 'dd-sorted' : ''}>Parados {sorted ? '↓' : ''}</th>
                <th {...tg('col-giro')} className="fd-th-tip">Giro{phase >= 4 && <Tip>Média de unidades que saem por dia no período. É uma estimativa pelo movimento do estoque.</Tip>}</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(([n, net, r, d, g], i) => (
                <tr key={n} style={fade(on, i)}>
                  <td><b>{n}</b><small>{net}</small></td>
                  <td>{fmt(r, 1)}%</td><td>{d} dias</td><td>{g} un./dia</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Panel>
        <Panel className="side" title="Classificação de Estoque Parado" t={tg('st')}>
          <table className="da-table">
            <thead><tr><th>Parado</th><th>PDVs</th><th>%</th></tr></thead>
            <tbody>
              {([[7, 96, 22.9], [30, 51, 12.1], [60, 22, 5.2], [90, 9, 2.1]] as const).map(([d, c, p], i) => (
                <tr key={d} {...tg(`st-${d}`)} className={only30 && d === 30 ? 'dd-sel' : ''} style={{ opacity: on ? 1 : 0.25, transition: `opacity .4s ease ${0.15 * i}s` }}>
                  <td>{d} dias</td><td><Num v={c} on={on} /></td><td><Num v={p} on={on} d={1} suffix="%" /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </Panel>
      </div>
    </Frame>
  );
}

// ── Distribuição: CDs, raio e lojas da região ──────────────────────────────
const CDS: [number, number, string][] = [[230, 200, 'CD Alfa Campinas'], [420, 120, 'CD Alfa Contagem'], [150, 330, 'CD Beta Curitiba']];
const DOTS: [number, number, string][] = [
  [200, 170, 'ok'], [260, 230, 'ok'], [250, 160, 'warn'], [195, 240, 'crit'], [280, 190, 'ok'], [215, 255, 'off'], [175, 205, 'warn'],
  [395, 95, 'crit'], [440, 150, 'off'], [455, 100, 'warn'], [400, 150, 'crit'], [385, 125, 'off'],
  [125, 305, 'off'], [175, 355, 'off'], [130, 355, 'crit'], [170, 300, 'warn'], [115, 335, 'off'],
  [300, 250, 'ok'], [165, 150, 'ok'], [110, 270, 'warn'], [480, 165, 'crit'], [205, 380, 'off'],
];
const DOT_COL: Record<string, string> = { ok: '#10b981', warn: '#f59e0b', crit: '#ef4444', off: '#9ca3af' };
const DIST_DEF: Def = {
  beats: [
    { phase: 1, wait: 1300 },
    { to: 'prod', click: true, phase: 2, wait: 500 },
    { to: 'prod-0', click: true, phase: 3, wait: 900 },
    { phase: 4, wait: 1500 },
    { to: 'r50', click: true, phase: 5, wait: 1900, cam: 'out' },
    { to: 'cd', click: true, phase: 6, wait: 3800, cam: { at: 'cdm' } },
  ],
  steps: [{ phase: 4, to: 'prod' }, { phase: 5, to: 'map' }, { phase: 6, to: 'cov' }, { phase: 6, to: 'read' }],
  final: 6,
};

export function DistributionDemo({ step, def = DIST_DEF }: DemoProps) {
  const { app, phase, cur, tg } = useDemo(def, step);
  const on = phase >= 1;
  const prod = phase >= 3;
  const dots = phase >= 4;
  const wide = phase >= 5;
  const r = wide ? 92 : 62;
  const near = (x: number, y: number) => CDS.some(([cx, cy]) => Math.hypot(x - cx, y - cy) <= r);
  const counts = wide ? [61, 40, 31, 29] : [46, 31, 22, 18];
  const total = counts.reduce((a, b) => a + b, 0);
  return (
    <Frame app={app} h={640} nav="dist" cur={cur} label="Tela Distribuição do Dinn: o cursor escolhe o produto, amplia o raio dos CDs para 50 km e abre um CD com estoque, cobertura e a leitura do Dinn.">
      <Bar title="Distribuição" sub="Última atualização: 02/11/2026" />
      <div className="da-filters">
        <Chip k="dist" tg={tg} label="Distribuidor" value="Distribuidor Alfa" />
        <Chip k="prod" tg={tg} label="Produto" empty="Selecione" value={prod ? PRODUCTS[0] : undefined} open={phase === 2} items={[PRODUCTS[0], 'Produto B 50 mg 14 cp']} picked={prod ? 0 : undefined} />
        <Chip k="uf" tg={tg} label="UF" value="Todas" />
      </div>
      <div className={`da-metrics three ${phase === 3 ? 'dd-loading' : ''}`}>
        <Metric icon={<Factory size={20} />} label="CDs monitorados"><Num v={18} on={on} /></Metric>
        <Metric icon={<Package size={20} />} label="Total de Produtos"><Num v={24} on={on} /></Metric>
        <Metric icon={<Store size={20} />} label="PDVs na região dos CDs"><Num v={dots ? total : 0} on={on && dots} /></Metric>
      </div>
      <div className="fd-dist">
        <section className="da-card fd-map" {...tg('map')}>
          <header><h4>Mapa de disponibilidade</h4></header>
          <div className="fd-svgbox">
          <svg viewBox="40 70 480 330" aria-hidden="true">
            <rect x="40" y="70" width="480" height="330" rx="14" fill="#eceef2" />
            {[[0, 140, 560, 140], [0, 290, 560, 290], [180, 0, 180, 420], [340, 0, 340, 420]].map(([a, b, c, d], i) => (
              <line key={i} x1={a} y1={b} x2={c} y2={d} stroke="#fff" strokeWidth="12" />
            ))}
            {dots && CDS.map(([x, y]) => (
              <circle key={`r${x}`} cx={x} cy={y} r={r} fill="rgba(86,37,242,.06)" stroke={BRAND} strokeWidth="1.5" strokeDasharray="5 5" style={{ transition: 'r .6s cubic-bezier(.22,1,.36,1)' }} />
            ))}
            {dots && DOTS.filter(([x, y]) => near(x, y)).map(([x, y, k], i) => (
              <circle key={`${x}-${y}`} cx={x} cy={y} r="6" fill={DOT_COL[k]} stroke="#fff" strokeWidth="2" className="dd-pin" style={{ animationDelay: `${i * 0.04}s` }} />
            ))}
            {on && CDS.map(([x, y], i) => (
              <g key={`c${x}`} transform={`translate(${x} ${y})`} className="dd-pin" style={{ animationDelay: `${i * 0.1}s` }}>
                <rect x="-13" y="-13" width="26" height="26" rx="7" fill={i === 2 && dots ? '#ef4444' : BRAND} stroke="#fff" strokeWidth="3" />
                <rect x="-5" y="-5" width="10" height="10" rx="2" fill="#fff" />
              </g>
            ))}
          </svg>
          {on && <span className="dd-pin-hit fd-hit" style={{ left: `${((150 - 40) / 480) * 100}%`, top: `${((330 - 70) / 330) * 100}%` }} {...tg('cd')} />}
          </div>
          {phase === 1 && <span className="dd-map-msg fd-static">Selecione um produto para ver os PDVs da região de cada distribuidor.</span>}
          {phase === 3 && <span className="dd-map-msg">Atualizando o mapa</span>}
        </section>
        <aside className="da-card fd-side">
          <header><h4>Raio dos CDs</h4></header>
          <span className="da-seg"><i>10 km</i><i className={!wide ? 'on' : ''}>30 km</i><i className={wide ? 'on' : ''} {...tg('r50')}>50 km</i></span>
          <ul className="fd-levels">
            {['Alto', 'Médio', 'Baixo', 'Não tem'].map((l, i) => (
              <li key={l}>
                <span><i style={{ background: Object.values(DOT_COL)[i] }} />{l}</span>
                <span className="da-track"><i style={{ width: dots ? `${(counts[i] / 70) * 100}%` : 0, background: Object.values(DOT_COL)[i], transition: 'width .8s cubic-bezier(.4,0,.2,1)' }} /></span>
                <b>{dots ? counts[i] : '–'}</b>
              </li>
            ))}
          </ul>
          <p className="dd-muted">{dots ? `${total} PDVs na região dos CDs` : 'Escolha um produto'}</p>
        </aside>
      </div>
      {phase >= 6 && (
        <div className="dd-dialog fd-cd dd-in" {...tg('cdm')}>
          <header className="fd-cd-head"><b>CD Beta Curitiba</b><X size={16} /></header>
          <small className="dd-muted">Distribuidor Beta · Curitiba, PR · Raio de 50 km</small>
          <div className="fd-cd-kpis">
            <div><em>Estoque CD</em><b>0 un</b></div>
            <div {...tg('cov')}><em>Cobertura</em><b>0 dias</b></div>
            <div><em>Giro</em><b>64 un./dia</b></div>
            <div><em>Estoque PDV</em><b>1.180 un</b></div>
          </div>
          <div className="fd-read" {...tg('read')}><JeanOrb size={14} /><span><em>Leitura do Dinn</em>O CD está sem estoque, mas a região continua vendendo.</span></div>
        </div>
      )}
    </Frame>
  );
}

// ── Oportunidades: pergunta, mapa por estado e detalhe ─────────────────────
const QUESTIONS = ['Onde a categoria avança?', 'Onde meu laboratório perde espaço?', 'Onde investigar expansão?'];
// UF, posição no mapa, var. da categoria (%), participação (%), var. (p.p.)
const UFS: [string, number, number, number, number, number][] = [
  ['SP', 268, 268, 9.8, 27.7, -0.6], ['MG', 300, 230, 6.1, 29.4, -1.6], ['PR', 236, 300, -1.4, 24.0, -1.8],
  ['RS', 214, 352, 3.2, 23.1, 0.6], ['BA', 340, 168, 4.7, 19.0, -0.2], ['GO', 250, 200, 2.4, 26.3, 0.4],
];
const BR = 'M150,60 L230,40 L300,70 L370,95 L420,140 L400,190 L350,240 L330,290 L280,320 L250,360 L215,395 L190,360 L205,320 L180,280 L150,250 L120,200 L80,170 L70,120 L110,90 Z';
const OPP_DEF: Def = {
  beats: [
    { phase: 1, wait: 1500 },
    { to: 'q-1', click: true, phase: 2, wait: 1900, cam: 'out' },
    { to: 'pin-0', phase: 3, wait: 1600 },
    { to: 'pin-0', click: true, phase: 4, wait: 3800, cam: { at: 'drawer', z: 0.9 } },
  ],
  steps: [{ phase: 1, to: 'filters' }, { phase: 2, to: 'q-1' }, { phase: 2, to: 'terr' }, { phase: 4, to: 'drawer' }],
  final: 4,
};

export function OpportunitiesDemo({ step, def = OPP_DEF }: DemoProps) {
  const { app, phase, cur, tg } = useDemo(def, step);
  const on = phase >= 1;
  const loss = phase >= 2;
  const color = (cat: number, pp: number) => (loss ? (pp <= -1 ? '#ef4444' : pp < 0 ? '#f59e0b' : '#10b981') : cat >= 5 ? '#10b981' : cat >= 0 ? '#86efac' : '#9ca3af');
  const rows = loss ? [...UFS].sort((a, b) => a[5] - b[5]) : [...UFS].sort((a, b) => b[3] - a[3]);
  const sp = UFS[0];
  return (
    <Frame app={app} h={580} nav="opps" cur={cur} label="Tela Oportunidades do Dinn: o cursor escolhe a pergunta 'Onde meu laboratório perde espaço?', o mapa e a tabela mudam e o detalhe de SP abre.">
      <Bar title="Oportunidades" sub="Dados até 31/10/2026" />
      <div className="da-filters" {...tg('filters')}>
        <Chip k="mkt" tg={tg} label="Mercado" value="Mercado Exemplo A" />
        <Chip k="period" tg={tg} label="Período" value="30 dias" />
        <Chip k="uf" tg={tg} label="UF" value="Todas" />
      </div>
      <p className="fd-ask">Para onde você quer olhar?</p>
      <div className="fd-qs">
        {QUESTIONS.map((q, i) => (
          <span key={q} className={`fd-q ${(loss ? 1 : 0) === i ? 'on' : ''}`} {...tg(`q-${i}`)}>{q}</span>
        ))}
      </div>
      <div className="da-row">
        <section className="da-card fd-omap">
          <header><h4>Mapa de oportunidades</h4></header>
          <div className="fd-svgbox">
          <svg viewBox="40 30 400 380" aria-hidden="true">
            <path d={BR} fill="#eef0f4" stroke="#dcdfe6" strokeWidth="2" strokeLinejoin="round" />
            {on && UFS.map(([uf, x, y, cat, , pp], i) => (
              <g key={uf} transform={`translate(${x} ${y})`} className="dd-pin" style={{ animationDelay: `${i * 0.06}s` }}>
                <circle r="14" fill={color(cat, pp)} stroke="#fff" strokeWidth="3" style={{ transition: 'fill .5s ease' }} />
                <text y="4" textAnchor="middle" fontSize="10" fontWeight="700" fill="#fff">{uf}</text>
              </g>
            ))}
          </svg>
          {on && <span className="dd-pin-hit fd-hit" style={{ left: `${((268 - 40) / 400) * 100}%`, top: `${((268 - 30) / 380) * 100}%` }} {...tg('pin-0')} />}
          </div>
          {phase === 3 && (
            <span className="fd-pin-card dd-in"><b>SP</b>Categoria +9,8% · Participação 27,7% (−0,6 p.p.)<small>Clique para ver redes e lojas</small></span>
          )}
        </section>
        <Panel className="grow" title="Territórios" t={tg('terr')}>
          <table className="da-table">
            <thead>
              <tr><th>UF</th><th>Categoria</th>{loss && <><th>Participação</th><th className="fd-pp">Var. <TriangleAlert size={11} /></th></>}</tr>
            </thead>
            <tbody>
              {rows.map(([uf, , , cat, share, pp], i) => (
                <tr key={uf} className={phase >= 3 && uf === 'SP' ? 'dd-sel' : ''} style={fade(on, i)}>
                  <td><b>{uf}</b></td>
                  <td>{cat > 0 ? '+' : ''}{fmt(cat, 1)}%</td>
                  {loss && <><td>{fmt(share, 1)}%</td><td className={pp < 0 ? 'fd-neg' : 'fd-pos'}>{pp > 0 ? '+' : ''}{fmt(pp, 1)} p.p.</td></>}
                </tr>
              ))}
            </tbody>
          </table>
        </Panel>
      </div>
      {phase >= 4 && (
        <aside className="dd-drawer fd-wide" {...tg('drawer')}>
          <header><b>Detalhe de SP</b><X size={16} /></header>
          <div className="fd-cd-kpis two">
            <div><em>Vendas do mercado</em><b><Num v={5050} on /> un./sem.</b></div>
            <div><em>Vendas do laboratório</em><b><Num v={1400} on /> un./sem.</b></div>
            <div><em>Participação</em><b>{fmt(sp[4], 1)}%</b><small className="fd-neg">−0,6 p.p.</small></div>
            <div><em>Lojas comparáveis</em><b><Num v={1320} on /></b></div>
          </div>
          <p className="dd-muted">A categoria cresce 9,8% em SP. O laboratório cresce menos e perde 0,6 p.p. de participação nas mesmas lojas.</p>
          <h5>Redes</h5>
          <ul className="dd-mini">
            <li><span>Rede Alfa</span><span className="da-badge crit">−1,9 p.p.</span><b>24,1%</b></li>
            <li><span>Rede Beta</span><span className="da-badge mod">−0,4 p.p.</span><b>29,8%</b></li>
          </ul>
        </aside>
      )}
    </Frame>
  );
}

// ── Dinn Insights: pergunta, esclarecimento e resposta com recorte ─────────
const ASK = 'Quais PDVs estão em ruptura do Produto A 20 mg 30 cp?';
const SUGGEST = [
  'Quantos dias de estoque tenho de Produto A 20 mg 30 cp em Campinas (SP)?',
  'Em quais cidades a ruptura de Produto A 20 mg 30 cp mais piorou nas últimas 4 semanas?',
  'Como o preço de Produto A 20 mg 30 cp varia entre as redes?',
];
const ANSWER: [string, string, string, number, number][] = [
  ['Farmácia Centro 014', 'Rede Alfa · Campinas', 'Crítico', 82.5, 31],
  ['Farmácia Centro 021', 'Rede Alfa · Santos', 'Crítico', 78.0, 24],
  ['Farmácia Bairro 037', 'Rede Beta · Sorocaba', 'Alto', 61.2, 15],
];
const CHAT_DEF: Def = {
  beats: [
    { wait: 1300 },
    { to: 'composer', click: true, type: ['q', ASK], phase: 1, wait: 300 },
    { to: 'send', click: true, phase: 2, wait: 1300 },
    { phase: 3, wait: 1200 },
    { to: 'opt-0', click: true, phase: 4, wait: 1300 },
    { phase: 5, wait: 4200 },
  ],
  steps: [{ phase: 1, to: 'composer' }, { phase: 3, to: 'clarify' }, { phase: 5, to: 'scope' }, { phase: 5, to: 'open' }],
  final: 5,
};

export function ChatDemo({ step, def = CHAT_DEF }: DemoProps) {
  const { app, phase, typed, cur, tg } = useDemo(def, step);
  const q = phase >= 2 ? '' : typed.q ?? (phase >= 1 ? ASK : '');
  return (
    <Frame app={app} h={600} nav="insights" cur={cur} label="Tela do Jean: o cursor faz uma pergunta, escolhe o estado sugerido e a resposta chega com a lista de PDVs, o recorte e a data.">
      <div className="fd-chat">
        {phase < 2 ? (
          <div className="fd-chat-hello">
            <span className="fd-chat-badge"><JeanOrb size={14} /> Jean</span>
            <h3>Olá, Ana, o que você quer saber?</h3>
            <p className="dd-muted">Perguntas para começar</p>
            <ul className="fd-suggest">
              {SUGGEST.map((s, i) => <li key={s} className="dd-in" style={{ animationDelay: `${i * 0.08}s` }}>{s}</li>)}
            </ul>
          </div>
        ) : (
          <div className="fd-chat-log">
            <p className="fd-msg-user dd-in">{ASK}</p>
            {phase === 2 && <p className="fd-thinking"><i /><i /><i /> Consultando os dados…</p>}
            {phase >= 3 && (
              <div className="fd-msg-bot dd-in" {...tg('clarify')}>
                <p>Preciso de um recorte para ser objetivo. Em qual estado você quer olhar?</p>
                <div className={`fd-opts ${phase >= 4 ? 'is-past' : ''}`}>
                  <span className="on" {...tg('opt-0')}>São Paulo (SP)</span><span>Minas Gerais (MG)</span><span>Brasil inteiro</span>
                </div>
              </div>
            )}
            {phase >= 4 && <p className="fd-msg-user dd-in">Quais PDVs de SP estão em ruptura do Produto A 20 mg 30 cp?</p>}
            {phase === 4 && <p className="fd-thinking"><i /><i /><i /> Consultando os dados…</p>}
            {phase >= 5 && (
              <div className="fd-msg-bot dd-in">
                <p>Em SP, o Produto A 20 mg 30 cp está sem estoque em 2 dos 5 PDVs mais críticos. A <b>Farmácia Centro 014</b> (Rede Alfa) tem 82,5% de ruptura e o estoque está parado há 31 dias.</p>
                <div className="fd-widget">
                  <div className="fd-scope" {...tg('scope')}><span>SP</span><span>Produto A 20 mg 30 cp</span><span>Últimos 30 dias</span><span>Dado observado · D-1, 02/11/2026</span></div>
                  <table className="da-table dd-pdv">
                    <thead><tr><th>PDV</th><th>Nível</th><th>% Ruptura</th><th>Parados</th></tr></thead>
                    <tbody>
                      {ANSWER.map(([n, s, lv, r, d], i) => (
                        <tr key={n} className="dd-in" style={{ animationDelay: `${i * 0.1}s` }}>
                          <td><b>{n}</b><small>{s}</small></td><td><span className={`da-badge ${LEVEL[lv]}`}>{lv}</span></td><td>{fmt(r, 1)}%</td><td>{d} dias</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <span className="dd-btn-out fd-open" {...tg('open')}>Abrir na Início</span>
                </div>
              </div>
            )}
          </div>
        )}
        <div className="fd-composer" {...tg('composer')}>
          <span className={q ? '' : 'dd-ph'}>{q || 'Pergunte sobre estoque, ruptura, cobertura…'}</span>
          <i {...tg('send')}><ArrowUp size={16} /></i>
        </div>
        <p className="fd-chat-note">A IA pode errar. Verifique os dados importantes.</p>
      </div>
    </Frame>
  );
}

// ── Priorização e feedback: lista ordenada e Reportar estoque ──────────────
const REP_DEF: Def = {
  beats: [
    { phase: 1, wait: 1500 },
    { to: 'row-1', click: true, phase: 2, wait: 1300 },
    { to: 'report', click: true, phase: 3, wait: 900 },
    { to: 'q-4', click: true, phase: 4, wait: 700 },
    { to: 'phone', click: true, phase: 5, wait: 600 },
    { to: 'send', click: true, phase: 6, wait: 1800 },
    { phase: 7, wait: 3200 },
  ],
  steps: [{ phase: 1, to: 'tbl' }, { phase: 4, to: 'qty' }, { phase: 7, to: 'rep' }, { phase: 7, to: 'row-0' }],
  final: 7,
};

export function ReportDemo({ step, def = REP_DEF }: DemoProps) {
  const { app, phase, cur, tg } = useDemo(def, step);
  const on = phase >= 1;
  return (
    <Frame app={app} h={560} nav="home" cur={cur} label="Tela Início do Dinn: o cursor abre uma loja da lista ordenada pela ruptura e reporta o estoque visto na loja física.">
      <Hello />
      <div className="da-filters">
        <Chip k="prod" tg={tg} label="Produtos" value={PRODUCTS[0]} />
        <Chip k="uf" tg={tg} label="UF" value="SP" />
        <Chip k="city" tg={tg} label="Cidade" value="Cidade Exemplo" />
      </div>
      <Panel title="Pontos de venda" t={tg('tbl')} aside={<small className="dd-muted">Total: 40 PDVs na sua carteira</small>}>
        <table className="da-table dd-pdv">
          <thead><tr><th>PDV</th><th>Nível</th><th className="dd-sorted">% Ruptura ↓</th><th>Dias</th><th>Retorno</th></tr></thead>
          <tbody>
            {ROWS.map(([n, net, lv, r, d], i) => (
              <tr key={n} {...tg(`row-${i}`)} className={phase >= 2 && phase < 7 && i === 1 ? 'dd-sel' : ''} style={fade(on, i)}>
                <td><b>{n}</b><small>{net}</small></td>
                <td><span className={`da-badge ${LEVEL[lv]}`}>{lv}</span></td>
                <td>{fmt(r, 1)}%</td><td>{d}</td>
                <td>{i === 1 && phase >= 7 ? <span className="da-badge ok dd-in" {...tg('rep')}><Check size={11} /> Reportado</span> : <span className="dd-muted">–</span>}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Panel>
      {phase === 2 && (
        <aside className="dd-drawer" {...tg('drawer')}>
          <header><b>Detalhes do PDV</b><X size={16} /></header>
          <p className="dd-drawer-name">Farmácia Bairro 007<small>Rede Beta · Aberto - Fecha às 22:00</small></p>
          <span className="da-tag fd-tag-est">Estoque estimado</span>
          <div className="da-popup-stock"><em>Estoque do produto</em><b>1–3 un</b><small>Estimativa de ontem, 02/11/2026</small></div>
          <div className="fd-diff"><span><b>Estoque diferente?</b><small>Conte o que você viu na loja.</small></span><span className="da-btn" {...tg('report')}>Reportar</span></div>
        </aside>
      )}
      {phase >= 3 && phase <= 6 && (
        <div className="fd-veil">
          <div className="dd-dialog fd-report dd-in" {...tg('qty')}>
            {phase < 6 ? (
              <>
                <header className="fd-cd-head"><b>Reportar estoque</b><X size={16} /></header>
                <small className="dd-muted">Farmácia Bairro 007 · Produto A 20 mg 30 cp · Estimado pelo Dinn: 1–3 un</small>
                <p>Qual o estoque você está vendo na loja física agora?</p>
                <div className="fd-qty">{[0, 1, 2, 3, 4, 5, 6, 7, 8].map((n) => <span key={n} className={phase >= 4 && n === 4 ? 'on' : ''} {...tg(`q-${n}`)}>{n}</span>)}</div>
                {phase >= 4 && (
                  <div className="dd-in">
                    <p>Como você verificou?</p>
                    <div className="fd-opts"><span className={phase >= 5 ? 'on' : ''} {...tg('phone')}>Liguei para a loja</span><span>Estou na loja</span></div>
                  </div>
                )}
                <div className="dd-actions"><span className="da-btn" {...tg('send')}>Enviar report</span></div>
              </>
            ) : (
              <div className="fd-thanks">
                <ThumbsUp size={28} />
                <b>Report enviado.</b>
                <p className="dd-muted">Seu feedback ajuda a melhorar o modelo preditivo do Dinn.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </Frame>
  );
}

// ── Exportações, API e MCP: baixar a tabela e ver as conexões ───────────────
const EXP_DEF: Def = {
  beats: [
    { phase: 1, wait: 1400 },
    { to: 'dl', click: true, phase: 2, wait: 600 },
    { to: 'fmt-0', click: true, phase: 3, wait: 1900, cam: { at: 'file' } },
    { phase: 4, wait: 3600 },
  ],
  steps: [{ phase: 1, to: 'filters' }, { phase: 2, to: 'menu' }, { phase: 3, to: 'file' }, { phase: 4, to: 'scope' }],
  final: 4,
};

export function ExportDemo({ step, def = EXP_DEF }: DemoProps) {
  const { app, phase, cur, tg } = useDemo(def, step);
  const on = phase >= 1;
  if (phase >= 4) {
    return (
      <Frame app={app} h={520} nav="none" cur={cur} label="Telas do Dinn: a tabela de PDVs é baixada em CSV e a tela Conexões mostra os aplicativos de IA autorizados, somente leitura.">
        <div className="dd-conns">
          <Bar title="Conexões" />
          <p className="dd-muted">Aplicativos autorizados a consultar seus dados de estoque no Dinn.</p>
          <div className="dd-conn dd-in" {...tg('conn')}>
            <span className="dd-app-ico">C</span>
            <div><b>Claude</b><small>Empresa: laboratorio-exemplo · Autorizado em 03/11/2026 · Último uso: hoje, 09:14</small></div>
            <span className="dd-btn-out">Revogar</span>
          </div>
          <div className="dd-conn dd-in" style={{ animationDelay: '.1s' }}>
            <span className="dd-app-ico fd-ico-b">G</span>
            <div><b>ChatGPT</b><small>Empresa: laboratorio-exemplo · Autorizado em 28/10/2026 · Último uso: ontem, 17:40</small></div>
            <span className="dd-btn-out">Revogar</span>
          </div>
          <p className="fd-scope-note dd-in" {...tg('scope')}><Lock size={13} /> Consultar produtos e disponibilidade de estoque. Somente leitura. O aplicativo não altera nada e vê apenas o que você já vê.</p>
        </div>
      </Frame>
    );
  }
  return (
    <Frame app={app} h={520} nav="home" cur={cur} label="Telas do Dinn: a tabela de PDVs é baixada em CSV e a tela Conexões mostra os aplicativos de IA autorizados, somente leitura.">
      <Hello />
      <div className="da-filters" {...tg('filters')}>
        <Chip k="prod" tg={tg} label="Produtos" value={PRODUCTS[0]} />
        <Chip k="uf" tg={tg} label="UF" value="SP" />
        <Chip k="rede" tg={tg} label="Rede" value="Rede Alfa" />
      </div>
      <Panel title="Pontos de venda"
        aside={(
          <span className="dd-chip-wrap">
            <span className="dd-btn-out fd-dl" {...tg('dl')}><Download size={14} /> Baixar</span>
            {phase === 2 && (
              <span className="dd-menu fd-menu-r" {...tg('menu')}>
                {['CSV', 'Excel (XLS)', 'PDF', 'JSON'].map((f, i) => <span key={f} {...tg(`fmt-${i}`)}><FileText size={13} />{f}</span>)}
              </span>
            )}
          </span>
        )}>
        <table className="da-table dd-pdv">
          <thead><tr><th>PDV</th><th>Nível</th><th>% Ruptura</th><th>Dias</th></tr></thead>
          <tbody>
            {ROWS.map(([n, net, lv, r, d], i) => (
              <tr key={n} style={fade(on, i)}>
                <td><b>{n}</b><small>{net}</small></td>
                <td><span className={`da-badge ${LEVEL[lv]}`}>{lv}</span></td>
                <td>{fmt(r, 1)}%</td><td>{d}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Panel>
      {phase === 3 && <span className="dd-toast dd-in" {...tg('file')}><FileText size={14} /> pontos-de-venda.csv · 40 PDVs</span>}
    </Frame>
  );
}

// ── Roteiros das telas de Soluções, com os passos de cada funcionalidade ───
const QUEUE_FEAT: Def = {
  beats: [
    { phase: 1, wait: 1400 },
    { to: 'col', click: true, phase: 2, wait: 1400 },
    { to: 'row-0', click: true, phase: 3, wait: 3600, cam: { at: 'drawer', z: 0.85 } },
  ],
  steps: [{ phase: 1, to: 'prod' }, { phase: 2, to: 'col' }, { phase: 2, to: 'lv' }, { phase: 3, to: 'drawer' }],
  final: 3,
};
// Localizador de Produtos, com a consulta agora no fim do laço.
const LOC_FEAT: Def = {
  beats: [
    { to: 'f-prod', click: true, type: ['prod', 'Produto A 20 mg 30 cp'], phase: 1, wait: 400 },
    { to: 'f-addr', click: true, type: ['addr', 'Rua Exemplo, 100'], phase: 2, wait: 400 },
    { to: 'go', click: true, phase: 3, wait: 1300 },
    { phase: 4, wait: 1300 },
    { to: 'pin', click: true, phase: 5, wait: 1500, cam: { at: 'popup' } },
    { to: 'now', click: true, phase: 6, wait: 1500 },
    { phase: 7, wait: 3600, cam: { at: 'popup' } },
  ],
  steps: [{ phase: 2, to: 'f-addr' }, { phase: 6, to: 'now' }, { phase: 7, to: 'stock' }, { phase: 4, to: 'store-0' }],
  final: 7,
};
const MARKET_FEAT: Def = {
  beats: [
    { to: 'mkt', click: true, phase: 1, wait: 500 },
    { to: 'mkt-0', click: true, phase: 2, wait: 700 },
    { phase: 3, wait: 1800 },
    { to: 'only', phase: 4, wait: 3600 },
  ],
  steps: [{ phase: 3, to: 'mkt' }, { phase: 3, to: 'share' }, { phase: 3, to: 'sales' }, { phase: 4, to: 'only' }],
  final: 4,
};

const bind = (Demo: (p: DemoProps) => ReactElement, def: Def) => (p: DemoProps) => <Demo def={def} {...p} />;

/** A tela de cada uma das nove funcionalidades. Dinn Conecta usa o mapa de conexões da página /produtos/conecta. */
export const FEATURE_DEMO: Record<string, (p: DemoProps) => ReactElement> = {
  ruptura: bind(QueueDemo, QUEUE_FEAT),
  giro: TurnoverDemo,
  preco: PriceDemo,
  localizador: bind(LocatorDemo, LOC_FEAT),
  mercado: bind(MarketDemo, MARKET_FEAT),
  oportunidades: OpportunitiesDemo,
  distribuicao: DistributionDemo,
  jean: JeanChatDemo,
  conecta: ConnectionMapDemo,
};

/** Seis passos do ciclo da plataforma, cada um numa tela (modo passo). */
export const CYCLE_SCREENS: { Demo: (p: DemoProps) => ReactElement; step: number }[] = [
  { Demo: FEATURE_DEMO.localizador, step: 3 },
  { Demo: EstimateDemo, step: 1 },
  { Demo: FEATURE_DEMO.mercado, step: 1 },
  { Demo: FEATURE_DEMO.ruptura, step: 3 },
  { Demo: ConnectionsDemo, step: 2 },
  { Demo: ReportDemo, step: 1 },
];
