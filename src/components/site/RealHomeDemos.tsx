import { Boxes, Building2, Calendar, ChevronLeft, ChevronRight, Download, MapPin, Package, Percent, Search, Store, Warehouse, X } from 'lucide-react';
import { fmt, useDemo, type Def, type DemoProps } from './AppDemos';
import {
  BRAND, Count, RArea, RBadge, RCard, RConsult, RDays, RDrop, RFrame, RGauge, RIconBtn, RKpi, RLevels, RPage, RPager,
  RReport, RSave, RSeg, RSelect, RStock, RTh, RTop, RED,
} from './RealKit';

// Telas da Início do Dinn, fiéis ao app (prints de nov/2026): Ruptura, Giro
// e Preço. Dados fictícios, com nomes do modo demonstração do app.

const PRODS = ['Cefalgin cápsula 400mg', 'Alergimax comprimido 10mg', 'Neuroval comprimido 25mg', 'Gastrolev cápsula 20mg', 'Rinolev spray nasal 50mcg'];
const ORANGE = '#f97316';
const YELLOW = '#facc15';

const Filters = ({ tg, phase, openAt = -1, count }: { tg: (k: string) => object; phase: number; openAt?: number; count?: boolean }) => (
  <>
    <RSelect k="prod" tg={tg} label="Produtos" count={count ? 1 : undefined} open={phase === openAt} search="" items={PRODS} picked={phase > openAt && openAt >= 0 ? [0] : []} />
    <RSelect k="rede" tg={tg} label="Rede" />
    <RSelect k="uf" tg={tg} label="UF" />
    <RSelect k="city" tg={tg} label="Cidade" />
    <RSelect k="brick" tg={tg} label="Brick" w={124} />
    <RSelect k="all" tg={tg} label="Todos" w={124} />
    <RSave />
  </>
);

const PdvCell = ({ n, net }: { n: string; net: string }) => (
  <td className="rl-name"><b>{n}</b><small>{net}</small></td>
);
const LocCell = ({ c, s }: { c: string; s: string }) => (
  <td className="rl-where"><b><Building2 size={13} /> {c}</b><small><MapPin size={12} /> {s}</small></td>
);

// ── Ruptura: produto → números → gráfico → PDVs → ranking por SKU na loja ──
type PdvRow = [string, string, string, number, number, string, string, string, string, string];
const RUP_ROWS: PdvRow[] = [
  ['Drogaria Serrana Ipiranga - Loja 001', 'Drogaria Serrana', 'Crítico', 82, 61, '2 un.', '9 un.', '12 un.', 'São Paulo/SP', 'Rua Bom Pastor, 2100'],
  ['Rede Farmacore Jardim América - Loja 023', 'Rede Farmacore', 'Crítico', 76, 54, '1 un.', '7 un.', '10 un.', 'São Paulo/SP', 'Travessa das Acácias, 3575'],
  ['Farmácias Vitalis Moema', 'Farmácias Vitalis', 'Alto', 58, 33, '4 un.', '5 un.', '6 un.', 'São Paulo/SP', 'Av. Ibirapuera, 2100'],
  ['Drogarias Aurora Centro', 'Drogarias Aurora', 'Alto', 51, 20, '5 un.', '3 un.', '4 un.', 'Santo André/SP', 'Rua Cel. Oliveira Lima, 400'],
  ['Rede Saúde Mais Vila Mariana', 'Rede Saúde Mais', 'Moderado', 37, 12, '7 un.', '2 un.', '3 un.', 'São Paulo/SP', 'Rua Domingos de Morais, 1450'],
];
type SkuRow = [string, string, string, string, 'off' | 'mid' | 'ok', number, number, string, string];
const SKU_ROWS: SkuRow[] = [
  ['Crítico', 'Cefalgin cápsula 400mg', 'CFG-4001-30', 'Indisponível', 'off', 82, 25, '0 un.', '9 un.'],
  ['Moderado', 'Alergimax comprimido 10mg', 'BLR-3267-12', 'Indisponível', 'off', 44, 16, '0 un.', '51 un.'],
  ['Moderado', 'Insulen Pen caneta 100UI/ml', 'TRB-7458-01', 'Indisponível', 'off', 43, 9, '0 un.', '30 un.'],
  ['Moderado', 'Neuroval comprimido 25mg', 'KLD-6410-30', '2–5 un', 'mid', 43, 8, '0 un.', '35 un.'],
  ['Moderado', 'Rinolev spray nasal 50mcg', 'KLD-1648-01', '7–19 un', 'mid', 42, 12, '5 un.', '23 un.'],
  ['Moderado', 'Algirex comprimido 1g', 'MRD-4797-12', 'Indisponível', 'off', 42, 12, '0 un.', '27 un.'],
  ['Moderado', 'Broncolar xarope 120ml', 'KLD-6505-01', '1–3 un', 'mid', 41, 13, '0 un.', '54 un.'],
];
const WEEKS = ['15/08', '22/08', '29/08', '05/09', '12/09', '19/09', '26/09', '03/10', '10/10', '17/10', '24/10', '31/10'];
const RUP_ALL = [27.4, 26.8, 26.1, 26.5, 25.2, 25.9, 26.8, 25.6, 24.9, 24.6, 23.8, 24.6];
const RUP_ONE = [39.0, 35.4, 33.6, 33.1, 32.5, 29.0, 30.8, 34.4, 31.6, 29.4, 28.7, 26.2];

const RUP_DEF: Def = {
  beats: [
    // Planos: tela inteira (situa) → filtro → painel carrega → gráfico → lista de PDVs → loja → consulta agora.
    { wait: 1300 },
    { shot: 'prod', z: 0.75, to: 'prod', click: true, phase: 1, wait: 650 },
    { to: 'prod-0', click: true, phase: 2, wait: 350, cam: { at: 'dash' } },
    { phase: 3, wait: 2000 },
    { shot: 'chart', z: 1.05, to: 'pt', phase: 4, wait: 1900 },
    { shot: 'wide', phase: 5, wait: 1300 },
    { shot: 'tbl', z: 1.08, to: 'row-0', click: true, phase: 6, wait: 1000, cam: { at: 'm-tbl' } },
    { shot: 'm-est-0', z: 0.8, to: 'm-con-0', click: true, phase: 7, wait: 1300 },
    { phase: 8, wait: 1700 },
    { shot: 'm-tbl', wait: 2000 },
  ],
  steps: [{ phase: 3, to: 'prod' }, { phase: 3, to: 'lv' }, { phase: 5, to: 'row-0' }, { phase: 8, to: 'm-est-0' }],
  final: 8,
};

export function RuptureDemo({ step, def = RUP_DEF }: DemoProps) {
  const { app, phase, cur, tg } = useDemo(def, step);
  const one = phase >= 2;
  const on = phase !== 2;
  const lv = one
    ? [{ n: 'Crítico', c: 32, p: 4, col: RED }, { n: 'Alto', c: 129, p: 16, col: ORANGE }, { n: 'Moderado', c: 273, p: 33.9, col: YELLOW }, { n: 'Leve', c: 371, p: 46.1, col: '#22c55e' }]
    : [{ n: 'Crítico', c: 62, p: 5, col: RED }, { n: 'Alto', c: 211, p: 17, col: ORANGE }, { n: 'Moderado', c: 397, p: 32, col: YELLOW }, { n: 'Leve', c: 570, p: 46, col: '#22c55e' }];
  const modal = phase >= 6;
  return (
    <RFrame app={app} cur={cur} nav="home" label="Tela Início do Dinn: o cursor escolhe um produto, a ruptura e a classificação dos PDVs carregam, e o ranking de ruptura por SKU de uma loja abre com a consulta do estoque agora.">
      <RPage top={<RTop />} filters={<Filters tg={tg} phase={phase} openAt={1} count={one} />} y={phase >= 5 ? 520 : 0}>
        <div className="rl-stackv" {...tg('dash')}>
        <div className={`rl-kpis k4 ${phase === 2 ? 'rl-loading' : ''}`}>
          <RKpi icon={<Building2 size={20} />} label="Total de PDV"><Count v={one ? 805 : 1240} on={on} /></RKpi>
          <RKpi icon={<Package size={20} />} label="Total de SKU"><Count v={one ? 1 : 6} on={on} /></RKpi>
          <RKpi icon={<Warehouse size={20} />} label="Estoque aproximado"><Count v={one ? 9120 : 52400} on={on} /></RKpi>
          <RKpi icon={<Percent size={20} />} label="% sem estoque"><Count v={one ? 31.8 : 24.6} on={on} d={1} suffix="%" /></RKpi>
        </div>
        <div className="rl-row">
          <RCard className="grow" title="Ruptura" t={tg('chart')}
            aside={<span className="rl-aside"><RSeg items={['Diário', 'Semanal']} on={1} /><RDrop v="90 dias" w={150} /></span>}
            sub={one ? <><b>Filtrando por:</b> Produtos: Cefalgin cápsula 400mg</> : <><b>Filtrando por:</b> Todos os produtos</>}>
            <RArea labels={WEEKS} series={[{ values: one ? RUP_ONE : RUP_ALL, color: BRAND }]} ticks={[15, 23, 31, 39, 45]} unit="%" on={on} w={600} h={262}
              mark={{ i: 7, t: tg('pt') }}
              tip={phase === 4 ? { i: 7, text: <><b>Semana de 03/10</b><span><i style={{ background: BRAND }} />Ruptura: 34,4%</span></> } : undefined} />
          </RCard>
          <RCard className="side" title="Classificação de Ruptura" t={tg('lv')}>
            <RLevels head={['Nível', 'Total PDVs', '%']} rows={lv} on={on} />
          </RCard>
        </div>
        </div>
        <div className="rl-sect-h">
          <div><h3><Store size={24} /> Pontos de venda</h3><p>Total: {fmt(one ? 805 : 1240)} PDVs na sua carteira</p></div>
          <span className="rl-aside"><span className="rl-search"><Search size={16} />Buscar por rede, loja ou CNPJ.</span><RDrop v="90 dias" w={150} /><RIconBtn><Download size={16} /></RIconBtn></span>
        </div>
        <p className="rl-note">O período abaixo muda a coluna % Ruptura. A coluna Nível usa sempre a janela fixa de 30 dias, com corte no sábado.</p>
        <RCard t={tg('tbl')}>
          <table className="rl-table">
            <thead><tr>
              <RTh sort>PDV</RTh><RTh sort>Nível</RTh><RTh sort active="down">% Ruptura</RTh><RTh sort>Parados</RTh><RTh>Giro</RTh><RTh>Reposição</RTh><RTh sort>Localização</RTh><th />
            </tr></thead>
            <tbody key={phase >= 5 ? 'in' : 'out'}>
              {RUP_ROWS.map(([n, net, l, r, d, g, , rep, c, s], i) => (
                <tr key={n} className={`${phase >= 5 ? 'rl-in' : ''} ${modal && i === 0 ? 'on' : ''}`} style={{ animationDelay: `${0.25 + Math.min(i, 4) * 0.08}s` }} {...tg(`row-${i}`)}>
                  <PdvCell n={n} net={net} /><td><RBadge lv={l} /></td><td><RGauge v={r} on={phase >= 5} /></td>
                  <td><RDays d={d} of={90} warn={d > 30} on={phase >= 5} /></td><td>{g}</td><td>{rep}</td>
                  <LocCell c={c} s={s} /><td className="rl-chev"><ChevronRight size={16} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </RCard>
      </RPage>
      {modal && (
        <>
          <div className="rl-veil" />
          <div className="rl-modal">
            <div className="rl-modal-h">
              <div>
                <h3>Drogaria Serrana Ipiranga - Loja 001<small>Drogaria Serrana · Grupo Serrana Farma</small></h3>
                <p><MapPin size={14} /> Rua Bom Pastor, 2100 - Ipiranga, São Paulo/SP</p>
              </div>
              <div className="rl-modal-meta">
                <span>Atualizado em 03/11/2026 <span className="rl-tagpill"><Boxes size={13} />Estoque estimado</span><span className="rl-x"><X size={18} /></span></span>
                <span>Aberto - Fecha às 22:00</span>
              </div>
            </div>
            <div className="rl-modal-b">
              <RCard title="Ranking de ruptura por SKU" t={tg('m-tbl')} aside={<span className="rl-aside"><RDrop v="Todos" w={120} /><RDrop v="30 dias" w={110} /><RPager /></span>}>
                <table className="rl-table">
                  <thead><tr><RTh>Nível</RTh><RTh>SKU</RTh><RTh>Estoque</RTh><RTh>% Ruptura</RTh><RTh>Parados</RTh><RTh>Congelados</RTh><RTh>Giro</RTh></tr></thead>
                  <tbody>
                    {SKU_ROWS.map(([l, n, sku, sv, sk, r, d, cg, g], i) => {
                      const now = i === 0 && phase >= 8;
                      return (
                        <tr key={n} className="rl-in" style={{ animationDelay: `${i * 0.05}s` }}>
                          <td><RBadge lv={l} /></td>
                          <td className="rl-name"><b>{n}</b><small>{sku}</small></td>
                          <td {...tg(`m-est-${i}`)}>
                            <span className="rl-aside">
                              <RStock v={now ? '3 un' : sv} k={now ? 'ok' : sk} />
                              <span className={`rl-est ${now ? 'now' : ''}`}><Calendar size={12} />{now ? <>Consulta feita<br />agora, 15:12</> : <>Estimativa de ontem,<br />02/11/2026</>}</span>
                              <RConsult busy={i === 0 && phase === 7} t={tg(`m-con-${i}`)} />
                              <RReport />
                            </span>
                          </td>
                          <td><RGauge v={r} /></td>
                          <td><RDays d={d} of={30} warn={d > 8} /></td>
                          <td>{cg}</td><td>{g}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </RCard>
              <p className="rl-pages"><ChevronLeft size={16} /><b>1</b><span>2</span><ChevronRight size={16} /></p>
            </div>
          </div>
        </>
      )}
    </RFrame>
  );
}

// ── Giro: disponibilidade por rede, estoque parado e PDVs ordenados ─────────
const NETS: [string, number, number, number][] = [
  ['FCR', 22, 18, 60], ['SER', 25, 20, 55], ['VIT', 30, 17, 53], ['AUR', 24, 22, 54], ['SMA', 28, 30, 42], ['BEM', 20, 38, 42],
  ['NEA', 27, 18, 55], ['FPO', 33, 20, 47], ['CEN', 38, 22, 40], ['DRV', 41, 18, 41], ['PRA', 45, 15, 40], ['VIV', 46.3, 27.2, 26.5],
  ['BOA', 70, 10, 20], ['NOR', 80, 8, 12], ['LUZ', 35, 30, 35], ['ALM', 62, 20, 18], ['SUL', 72, 14, 14], ['RIO', 30, 25, 45],
];
const HI = 11;
type TurnRow = [string, string, string, number, number, string, string, string, string, string];
const TURN_ROWS: TurnRow[] = [
  ['Drogaria Serrana Batel', 'Drogaria Serrana', 'Leve', 0, 0, '0 un.', '0 un.', '0 un.', 'Curitiba/PR', 'Av. Batel, 1095'],
  ['Drogarias Aurora Estreito', 'Drogarias Aurora', 'Leve', 0, 5, '0 un.', '7 un.', '1 un.', 'Florianópolis/SC', 'Rua Gen. Liberato Bittencourt, 2445'],
  ['Farmácias Vitalis Centro', 'Farmácias Vitalis', 'Leve', 1, 33, '3 un.', '13 un.', '2 un.', 'Joinville/SC', 'Rua XV de Novembro, 400'],
  ['Rede Saúde Mais Água Verde', 'Rede Saúde Mais', 'Leve', 1, 4, '0 un.', '10 un.', '1 un.', 'Curitiba/PR', 'Av. República Argentina, 2050'],
  ['Rede Farmacore Trindade', 'Rede Farmacore', 'Leve', 0, 20, '1 un.', '7 un.', '1 un.', 'Florianópolis/SC', 'Rua Lauro Linhares, 203'],
];
const SEG = { out: ['#f9b4a1', '#ff6b3d'], idle: ['#fcd79b', '#f8b84e'], turn: ['#c4b2fa', BRAND] };

const TURN_DEF: Def = {
  beats: [
    // Planos: tela inteira → barras por rede crescem → detalhe de uma rede → estoque parado → PDVs ordenados.
    { wait: 1200 },
    { shot: 'stack', phase: 1, wait: 1600 },
    { to: `bar-${HI}`, phase: 2, wait: 2400 },
    { shot: 'st', z: 1.05, to: 'lv-1', click: true, phase: 3, wait: 1500 },
    { shot: 'wide', phase: 4, wait: 1300 },
    { shot: 'tbl', z: 1.05, to: 'col-par', click: true, phase: 5, wait: 2600 },
    { shot: 'wide', wait: 1600 },
  ],
  steps: [{ phase: 1, to: 'stack' }, { phase: 2, to: `bar-${HI}` }, { phase: 3, to: 'st' }, { phase: 5, to: 'col-par' }],
  final: 5,
};

export function TurnDemo({ step, def = TURN_DEF }: DemoProps) {
  const { app, phase, cur, tg } = useDemo(def, step);
  const on = phase >= 1;
  const sorted = phase >= 5;
  const rows = sorted ? [...TURN_ROWS].sort((a, b) => b[4] - a[4]) : TURN_ROWS;
  const H = 206;
  return (
    <RFrame app={app} cur={cur} nav="home" label="Tela Início do Dinn: a disponibilidade por rede mostra lojas sem estoque, sem vendas e girando; o cursor abre o detalhe de uma rede, escolhe o estoque parado há 30 dias e ordena os PDVs pelos dias parados.">
      <RPage top={<RTop />} filters={<Filters tg={tg} phase={phase} count />} y={phase >= 4 ? 448 : 0}>
        <div className="rl-row">
          <RCard className="grow" title="Disponibilidade nos PDVs por rede" t={tg('stack')} aside={<RDrop v="30 dias" w={120} />}
            sub="Somente redes digitalizadas (estoque exato), ordenadas por nº de PDVs.">
            <p className="rl-legend"><span><i style={{ background: '#ff6b3d' }} />Sem estoque</span><span><i style={{ background: '#f8b84e' }} />Sem vendas</span><span><i style={{ background: BRAND }} />Em estoque (girando)</span></p>
            <div className="rl-stack" style={{ marginBottom: 30 }}>
              {NETS.map(([code, a, b, c], i) => {
                const hi = phase === 2 || phase === 3 ? i === HI : false;
                const seg = (v: number, col: string[]) => <u style={{ height: on ? Math.max(8, (v / 100) * (H - 8)) : 8, background: col[hi ? 1 : 0], transitionDelay: `${i * 0.03}s` }} />;
                return (
                  <span key={code} className={hi ? 'on' : ''} {...tg(`bar-${i}`)}>
                    {seg(a, SEG.out)}{seg(b, SEG.idle)}{seg(c, SEG.turn)}<i>{code}</i>
                  </span>
                );
              })}
            </div>
            {(phase === 2 || phase === 3) && (
              <div className="rl-stack-tip rl-pop" style={{ left: '24%', top: 36 }}>
                <header><b>Viva Bem</b><span>Grupo: Farmácias Viva Bem</span></header>
                <ul>
                  <li><i style={{ background: '#ff6b3d' }} /><b>46,3%</b>Sem estoque</li>
                  <li><i style={{ background: '#f8b84e' }} /><b>27,2%</b>Sem vendas</li>
                  <li><i style={{ background: BRAND }} /><b>26,5%</b>Em estoque (girando)</li>
                </ul>
                <footer>134 PDVs</footer>
                <p>Sem estoque em nenhum dos 30 dias = "Sem estoque". Teve estoque em pelo menos 1 dia e vendeu = "Em estoque (girando)". Teve estoque e não vendeu = "Sem vendas".</p>
              </div>
            )}
          </RCard>
          <RCard className="side" title="Classificação de Estoque Parado" t={tg('st')}>
            <RLevels head={['Parado', 'Qtde. de PDVs', '% do Total']} on={on} tg={tg} sel={phase >= 3 ? 1 : undefined}
              rows={[{ n: '7 dias', c: 4338, p: 52.6, col: '#22c55e' }, { n: '30 dias', c: 3527, p: 42.8, col: YELLOW }, { n: '60 dias', c: 2423, p: 29.4, col: ORANGE }, { n: '90 dias', c: 1813, p: 22, col: RED }]} />
          </RCard>
        </div>
        <div className="rl-sect-h">
          <div><h3><Store size={24} /> Pontos de venda</h3><p>Total: 8.240 PDVs na sua carteira</p></div>
          <span className="rl-aside"><span className="rl-search"><Search size={16} />Buscar por rede, loja ou CNPJ.</span><RDrop v="90 dias" w={150} /><RIconBtn><Download size={16} /></RIconBtn></span>
        </div>
        <p className="rl-note">O período abaixo muda a coluna % Ruptura. A coluna Nível usa sempre a janela fixa de 30 dias, com corte no sábado.</p>
        <RCard t={tg('tbl')}>
          <table className="rl-table">
            <thead><tr>
              <RTh sort>PDV</RTh><RTh sort active="up">Nível</RTh><RTh sort>% Ruptura</RTh>
              <RTh sort active={sorted ? 'down' : undefined} t={tg('col-par')}>Parados</RTh><RTh sort>Congelados</RTh><RTh>Giro</RTh><RTh>VB sugerido</RTh><RTh sort>Localização</RTh><th />
            </tr></thead>
            <tbody key={sorted ? 'sorted' : phase >= 4 ? 'in' : 'out'}>
              {rows.map(([n, net, l, r, d, cg, g, vb, c, s], i) => (
                <tr key={n} className={phase >= 4 ? 'rl-in' : ''} style={{ animationDelay: `${(sorted ? 0.05 : 0.25) + Math.min(i, 4) * 0.08}s` }}>
                  <PdvCell n={n} net={net} /><td><RBadge lv={l} /></td><td><RGauge v={r} /></td>
                  <td><RDays d={d} of={90} warn={d > 30} on={phase >= 4} /></td><td>{cg}</td><td>{g}</td><td>{vb}</td>
                  <LocCell c={c} s={s} /><td className="rl-chev"><ChevronRight size={16} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </RCard>
      </RPage>
    </RFrame>
  );
}

// ── Preço: preço observado por PDV, ordenado e filtrado por rede ───────────
type PriceRow = [string, string, string, number, string, 'off' | 'mid' | 'ok', string, string, string];
const PRICE_ROWS: PriceRow[] = [
  ['Drogaria Serrana Ipiranga - Loja 001', 'Drogaria Serrana', 'Crítico', 39.9, 'Indisponível', 'off', '2 un.', 'São Paulo/SP', 'Rua Bom Pastor, 2100'],
  ['Rede Farmacore Jardim América - Loja 023', 'Rede Farmacore', 'Crítico', 41.9, 'Indisponível', 'off', '1 un.', 'São Paulo/SP', 'Travessa das Acácias, 3575'],
  ['Farmácias Vitalis Moema', 'Farmácias Vitalis', 'Alto', 36.5, '2–5 un', 'mid', '4 un.', 'São Paulo/SP', 'Av. Ibirapuera, 2100'],
  ['Drogarias Aurora Centro', 'Drogarias Aurora', 'Alto', 44.5, '1–3 un', 'mid', '5 un.', 'Santo André/SP', 'Rua Cel. Oliveira Lima, 400'],
  ['Drogaria Serrana Pinheiros - Loja 014', 'Drogaria Serrana', 'Moderado', 37.9, '4–9 un', 'mid', '6 un.', 'São Paulo/SP', 'Rua dos Pinheiros, 870'],
  ['Rede Saúde Mais Vila Mariana', 'Rede Saúde Mais', 'Moderado', 47.9, '7–19 un', 'ok', '7 un.', 'São Paulo/SP', 'Rua Domingos de Morais, 1450'],
  ['Drogaria Serrana Mooca - Loja 008', 'Drogaria Serrana', 'Leve', 42.9, '7–19 un', 'ok', '8 un.', 'São Paulo/SP', 'Rua da Mooca, 2360'],
  ['Drogaria Serrana Vila Madalena - Loja 021', 'Drogaria Serrana', 'Leve', 38.9, '7–19 un', 'ok', '9 un.', 'São Paulo/SP', 'Rua Harmonia, 412'],
  ['Farmácias Vitalis Perdizes', 'Farmácias Vitalis', 'Moderado', 43.9, '2–5 un', 'mid', '6 un.', 'São Paulo/SP', 'Rua Cardoso de Almeida, 990'],
  ['Drogaria Serrana Tatuapé - Loja 017', 'Drogaria Serrana', 'Moderado', 40.9, '2–5 un', 'mid', '5 un.', 'São Paulo/SP', 'Rua Tuiuti, 1890'],
  ['Drogaria Serrana Santana - Loja 011', 'Drogaria Serrana', 'Alto', 41.5, '1–3 un', 'mid', '3 un.', 'São Paulo/SP', 'Rua Voluntários da Pátria, 3120'],
  ['Drogaria Serrana Lapa - Loja 005', 'Drogaria Serrana', 'Leve', 39.5, '4–9 un', 'mid', '7 un.', 'São Paulo/SP', 'Rua Clélia, 1450'],
];
const CHAINS = ['Drogaria Serrana', 'Rede Farmacore', 'Farmácias Vitalis', 'Drogarias Aurora', 'Rede Saúde Mais'];
const PRICE_DEF: Def = {
  beats: [
    // Planos: tela inteira → coluna Preço ordena → filtro de rede → preço loja a loja da rede.
    { wait: 1200 },
    { shot: 'tbl', z: 1.15, to: 'col-preco', click: true, phase: 1, wait: 1900 },
    { shot: 'rede', z: 0.8, to: 'rede', click: true, phase: 2, wait: 600 },
    { to: 'rede-0', click: true, phase: 3, wait: 500 },
    { shot: 'tbl', z: 1.1, phase: 4, wait: 1600 },
    { to: 'row-0', phase: 5, wait: 1800 },
    { shot: 'wide', wait: 1600 },
  ],
  steps: [{ phase: 0, to: 'prod' }, { phase: 1, to: 'col-preco' }, { phase: 2, to: 'rede' }, { phase: 5, to: 'row-0' }],
  final: 5,
};

export function PriceDemo2({ step, def = PRICE_DEF }: DemoProps) {
  const { app, phase, cur, tg } = useDemo(def, step);
  const sorted = phase >= 1;
  const only = phase >= 4;
  let rows = sorted ? [...PRICE_ROWS].sort((a, b) => a[3] - b[3]) : PRICE_ROWS;
  if (only) rows = rows.filter((r) => r[1] === CHAINS[0]);
  return (
    <RFrame app={app} cur={cur} nav="home" label="Tela Início do Dinn: a tabela de pontos de venda mostra o preço observado em cada loja; o cursor ordena pelo preço e filtra uma rede.">
      <RPage top={<RTop />} filters={(
        <>
          <RSelect k="prod" tg={tg} label="Produtos" count={1} />
          <RSelect k="rede" tg={tg} label="Rede" count={phase >= 3 ? 1 : undefined} open={phase === 2 || phase === 3} items={CHAINS} picked={phase >= 3 ? [0] : []} search="" />
          <RSelect k="uf" tg={tg} label="UF" /><RSelect k="city" tg={tg} label="Cidade" /><RSelect k="brick" tg={tg} label="Brick" w={124} /><RSelect k="all" tg={tg} label="Todos" w={124} />
          <RSave />
        </>
      )}>
        <div className="rl-sect-h">
          <div><h3><Store size={24} /> Pontos de venda</h3><p>Total: {only ? '64 PDVs da Drogaria Serrana' : '805 PDVs na sua carteira'}</p></div>
          <span className="rl-aside"><span className="rl-search"><Search size={16} />Buscar por rede, loja ou CNPJ.</span><RDrop v="90 dias" w={150} /><RIconBtn><Download size={16} /></RIconBtn></span>
        </div>
        <p className="rl-note">Preço observado no canal digital de cada loja, na data de corte. O período abaixo muda a coluna % Ruptura.</p>
        <RCard t={tg('tbl')}>
          <table className="rl-table">
            <thead><tr>
              <RTh sort>PDV</RTh><RTh sort>Nível</RTh><RTh sort active={sorted ? 'up' : undefined} t={tg('col-preco')}>Preço</RTh><RTh>Estoque</RTh><RTh>Giro</RTh><RTh sort>Localização</RTh><RTh>Data de corte</RTh><th />
            </tr></thead>
            <tbody key={only ? 'rede' : sorted ? 'sorted' : 'all'}>
              {rows.map(([n, net, l, p, sv, sk, g, c, s], i) => (
                <tr key={n} className={`rl-in ${phase >= 5 && i === 0 ? 'on' : ''}`} style={{ animationDelay: `${Math.min(i, 4) * 0.08}s` }} {...tg(`row-${i}`)}>
                  <PdvCell n={n} net={net} /><td><RBadge lv={l} /></td>
                  <td className="rl-name"><b>R$ {fmt(p, 2)}</b><small>por unidade</small></td>
                  <td><RStock v={sv} k={sk} /></td><td>{g}</td>
                  <LocCell c={c} s={s} /><td><b style={{ fontWeight: 500 }}>31/10/2026</b></td><td className="rl-chev"><ChevronRight size={16} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </RCard>
      </RPage>
    </RFrame>
  );
}

/** Início parada, com o produto já escolhido: para o herói da home. */
export const START_STILL: Def = { beats: [], steps: [{ phase: 3 }], final: 3 };
