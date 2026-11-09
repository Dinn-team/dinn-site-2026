import { useEffect, useRef, useState } from 'react';
import { Boxes, Building2, Calendar, ChevronLeft, ChevronRight, Download, MapPin, Package, Percent, Search, Store, Warehouse, X } from 'lucide-react';
import { fmt, useDemo, type Def, type DemoProps } from './AppDemos';
import {
  BRAND, Count, RArea, RBadge, RCard, RConsult, RDays, RDrop, RFrame, RGauge, RIconBtn, RKpi, RLevels, RPage, RPager,
  RReport, RSave, RSeg, RSelect, RStock, RTh, RTop, RED,
  fdate, fshort, qty,
} from './RealKit';
import { useDemoT } from './demoI18n';

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
// VB sugerido, preço e reposição do mesmo SKU, na ordem de SKU_ROWS (painel Detalhes do PDV).
const SKU_MORE: [string, number | null, string][] = [
  ['2 un.', 39.9, '3 un.'], ['7 un.', 41.5, '14 un.'], ['4 un.', 189.9, '6 un.'], ['5 un.', 28.9, '8 un.'], ['3 un.', 34.5, '4 un.'], ['4 un.', null, '5 un.'], ['8 un.', 22.9, '9 un.'],
];
const WEEKS: [number, number][] = [[15, 8], [22, 8], [29, 8], [5, 9], [12, 9], [19, 9], [26, 9], [3, 10], [10, 10], [17, 10], [24, 10], [31, 10]];
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
  const { t, lang } = useDemoT();
  const { app, phase, cur, tg } = useDemo(def, step);
  const one = phase >= 2;
  const on = phase !== 2;
  const lv = one
    ? [{ n: 'Crítico', c: 32, p: 4, col: RED }, { n: 'Alto', c: 129, p: 16, col: ORANGE }, { n: 'Moderado', c: 273, p: 33.9, col: YELLOW }, { n: 'Leve', c: 371, p: 46.1, col: '#22c55e' }]
    : [{ n: 'Crítico', c: 62, p: 5, col: RED }, { n: 'Alto', c: 211, p: 17, col: ORANGE }, { n: 'Moderado', c: 397, p: 32, col: YELLOW }, { n: 'Leve', c: 570, p: 46, col: '#22c55e' }];
  const modal = phase >= 6;
  // Fase 9: o painel da loja rola para a direita e mostra Giro, VB Sugerido, Preço e Reposição.
  const hs = useRef<HTMLDivElement>(null);
  const [shift, setShift] = useState(0);
  useEffect(() => {
    const el = hs.current;
    if (!el || phase < 9) { setShift(0); return; }
    const id = requestAnimationFrame(() => setShift(Math.max(0, el.scrollWidth - el.clientWidth)));
    return () => cancelAnimationFrame(id);
  }, [phase]);
  return (
    <RFrame app={app} cur={cur} nav="home" label={t('Tela Início do Dinn: o cursor escolhe um produto, a ruptura e a classificação dos PDVs carregam, e o ranking de ruptura por SKU de uma loja abre com a consulta do estoque agora.')}>
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
            sub={one ? <><b>{t('Filtrando por:')}</b> {t('Produtos')}: Cefalgin cápsula 400mg</> : <><b>{t('Filtrando por:')}</b> {t('Todos os produtos')}</>}>
            <RArea labels={WEEKS.map(([d, m]) => fshort(lang, d, m))} series={[{ values: one ? RUP_ONE : RUP_ALL, color: BRAND }]} ticks={[15, 23, 31, 39, 45]} unit="%" on={on} w={600} h={262}
              mark={{ i: 7, t: tg('pt') }}
              tip={phase === 4 ? { i: 7, text: <><b>{t('Semana de {d}', { d: fshort(lang, 3, 10) })}</b><span><i style={{ background: BRAND }} />{t('Ruptura: {v}', { v: `${fmt(34.4, 1)}%` })}</span></> } : undefined} />
          </RCard>
          <RCard className="side" title="Classificação de Ruptura" t={tg('lv')}>
            <RLevels head={['Nível', 'Total PDVs', '%']} rows={lv} on={on} />
          </RCard>
        </div>
        </div>
        <div className="rl-sect-h">
          <div><h3><Store size={24} /> {t('Pontos de venda')}</h3><p>{t('Total: {n} PDVs na sua carteira', { n: fmt(one ? 805 : 1240) })}</p></div>
          <span className="rl-aside"><span className="rl-search"><Search size={16} />{t('Buscar por rede, loja ou CNPJ.')}</span><RDrop v="90 dias" w={150} /><RIconBtn><Download size={16} /></RIconBtn></span>
        </div>
        <p className="rl-note">{t('O período abaixo muda a coluna % Ruptura. A coluna Nível usa sempre a janela fixa de 30 dias, com corte no sábado.')}</p>
        <RCard t={tg('tbl')}>
          <table className="rl-table">
            <thead><tr>
              <RTh sort>PDV</RTh><RTh sort>Nível</RTh><RTh sort active="down">% Ruptura</RTh><RTh sort>Parados</RTh><RTh>Giro</RTh><RTh>Reposição</RTh><RTh sort>Localização</RTh><th />
            </tr></thead>
            <tbody key={phase >= 5 ? 'in' : 'out'}>
              {RUP_ROWS.map(([n, net, l, r, d, g, , rep, c, s], i) => (
                <tr key={n} className={`${phase >= 5 ? 'rl-in' : ''} ${modal && i === 0 ? 'on' : ''}`} style={{ animationDelay: `${0.25 + Math.min(i, 4) * 0.08}s` }} {...tg(`row-${i}`)}>
                  <PdvCell n={n} net={net} /><td><RBadge lv={l} /></td><td><RGauge v={r} on={phase >= 5} /></td>
                  <td><RDays d={d} of={90} warn={d > 30} on={phase >= 5} /></td><td>{qty(t, g)}</td><td>{qty(t, rep)}</td>
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
                <span>{t('Atualizado em {d}', { d: fdate(lang, 3, 11) })} <span className="rl-tagpill"><Boxes size={13} />{t('Estoque estimado')}</span><span className="rl-x"><X size={18} /></span></span>
                <span>{t('Aberto - Fecha às 22:00')}</span>
              </div>
            </div>
            <div className="rl-modal-b">
              <RCard title={t('Ranking de ruptura por SKU')} t={tg('m-tbl')} aside={<span className="rl-aside"><RDrop v="Todos" w={120} /><RDrop v="30 dias" w={110} /><RPager /></span>}>
                <div ref={hs} className="rl-hs"><table className="rl-table" style={{ transform: shift ? `translateX(-${shift}px)` : undefined, transition: 'transform 0.9s cubic-bezier(0.65, 0, 0.35, 1)' }}>
                  <thead><tr><RTh>Nível</RTh><RTh>SKU</RTh><RTh>Estoque</RTh><RTh>% Ruptura</RTh><RTh>Parados</RTh><RTh>Congelados</RTh><RTh>Giro</RTh><RTh>VB Sugerido</RTh><RTh>Preço</RTh><RTh>Reposição</RTh><RTh>Data de corte</RTh></tr></thead>
                  <tbody>
                    {SKU_ROWS.map(([l, n, sku, sv, sk, r, d, cg, g], i) => {
                      const [vb, price, rep] = SKU_MORE[i];
                      const now = i === 0 && phase === 8;
                      return (
                        <tr key={n} className="rl-in" style={{ animationDelay: `${i * 0.05}s` }}>
                          <td><RBadge lv={l} /></td>
                          <td className="rl-name"><b>{n}</b><small>{sku}</small></td>
                          <td {...tg(`m-est-${i}`)}>
                            <span className="rl-aside">
                              <RStock v={now ? '3 un' : sv} k={now ? 'ok' : sk} />
                              <span className={`rl-est ${now ? 'now' : ''}`}><Calendar size={12} />{now ? <>{t('Consulta feita')}<br />{t('agora, 15:12')}</> : <>{t('Estimativa de ontem,')}<br />{fdate(lang, 2, 11)}</>}</span>
                              <RConsult busy={i === 0 && phase === 7} t={tg(`m-con-${i}`)} />
                              <RReport />
                            </span>
                          </td>
                          <td><RGauge v={r} /></td>
                          <td><RDays d={d} of={30} warn={d > 8} /></td>
                          <td>{qty(t, cg)}</td><td>{qty(t, g)}</td>
                          <td>{qty(t, vb)}</td><td style={{ whiteSpace: 'nowrap' }}>{price === null ? <span className="rl-dash">--</span> : `R$ ${fmt(price, 2)}`}</td><td>{qty(t, rep)}</td><td>{fdate(lang, 31, 10)}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table></div>
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
type TurnRow = [string, string, string, number, number, string, string, string, string, string, number | null, string];
const TURN_ROWS: TurnRow[] = [
  ['Drogaria Serrana Batel', 'Drogaria Serrana', 'Leve', 0, 0, '0 un.', '0 un.', '0 un.', 'Curitiba/PR', 'Av. Batel, 1095', null, '0 un.'],
  ['Drogarias Aurora Estreito', 'Drogarias Aurora', 'Leve', 0, 5, '0 un.', '7 un.', '1 un.', 'Florianópolis/SC', 'Rua Gen. Liberato Bittencourt, 2445', 41.5, '2 un.'],
  ['Farmácias Vitalis Centro', 'Farmácias Vitalis', 'Leve', 1, 33, '3 un.', '13 un.', '2 un.', 'Joinville/SC', 'Rua XV de Novembro, 400', 39.9, '2 un.'],
  ['Rede Saúde Mais Água Verde', 'Rede Saúde Mais', 'Leve', 1, 4, '0 un.', '10 un.', '1 un.', 'Curitiba/PR', 'Av. República Argentina, 2050', 44.9, '1 un.'],
  ['Rede Farmacore Trindade', 'Rede Farmacore', 'Leve', 0, 20, '1 un.', '7 un.', '1 un.', 'Florianópolis/SC', 'Rua Lauro Linhares, 203', 42.9, '2 un.'],
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
  steps: [{ phase: 1, to: 'stack' }, { phase: 2, to: `bar-${HI}` }, { phase: 3, to: 'st' }, { phase: 5, to: 'tbl' }],
  final: 5,
};

export function TurnDemo({ step, def = TURN_DEF }: DemoProps) {
  const { t, lang } = useDemoT();
  const { app, phase, cur, tg } = useDemo(def, step);
  const on = phase >= 1;
  const sorted = phase >= 5;
  const rows = sorted ? [...TURN_ROWS].sort((a, b) => b[4] - a[4]) : TURN_ROWS;
  const H = 206;
  return (
    <RFrame app={app} cur={cur} nav="home" label={t('Tela Início do Dinn: a disponibilidade por rede mostra lojas sem estoque, sem vendas e girando; o cursor abre o detalhe de uma rede, escolhe o estoque parado há 30 dias e ordena os PDVs pelos dias parados.')}>
      <RPage top={<RTop />} filters={<Filters tg={tg} phase={phase} count />} y={phase >= 4 ? 448 : 0}>
        <div className="rl-row" {...tg('top')}>
          <RCard className="grow" title="Disponibilidade nos PDVs por rede" t={tg('stack')} aside={<RDrop v="30 dias" w={120} />}
            sub={t('Somente redes digitalizadas (estoque exato), ordenadas por nº de PDVs.')}>
            <p className="rl-legend"><span><i style={{ background: '#ff6b3d' }} />{t('Sem estoque')}</span><span><i style={{ background: '#f8b84e' }} />{t('Sem vendas')}</span><span><i style={{ background: BRAND }} />{t('Em estoque (girando)')}</span></p>
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
                <header><b>Viva Bem</b><span>{t('Grupo')}: Farmácias Viva Bem</span></header>
                <ul>
                  <li><i style={{ background: '#ff6b3d' }} /><b>{fmt(46.3, 1)}%</b>{t('Sem estoque')}</li>
                  <li><i style={{ background: '#f8b84e' }} /><b>{fmt(27.2, 1)}%</b>{t('Sem vendas')}</li>
                  <li><i style={{ background: BRAND }} /><b>{fmt(26.5, 1)}%</b>{t('Em estoque (girando)')}</li>
                </ul>
                <footer>{t('{n} PDVs', { n: 134 })}</footer>
                <p>{t('Sem estoque em nenhum dos 30 dias = "Sem estoque". Teve estoque em pelo menos 1 dia e vendeu = "Em estoque (girando)". Teve estoque e não vendeu = "Sem vendas".')}</p>
              </div>
            )}
          </RCard>
          <RCard className="side" title="Classificação de Estoque Parado" t={tg('st')}>
            <RLevels head={['Parado', 'Qtde. de PDVs', '% do Total']} on={on} tg={tg} sel={phase >= 3 ? 1 : undefined}
              rows={[{ n: '7 dias', c: 4338, p: 52.6, col: '#22c55e' }, { n: '30 dias', c: 3527, p: 42.8, col: YELLOW }, { n: '60 dias', c: 2423, p: 29.4, col: ORANGE }, { n: '90 dias', c: 1813, p: 22, col: RED }]} />
          </RCard>
        </div>
        <div className="rl-sect-h">
          <div><h3><Store size={24} /> {t('Pontos de venda')}</h3><p>{t('Total: {n} PDVs na sua carteira', { n: fmt(8240) })}</p></div>
          <span className="rl-aside"><span className="rl-search"><Search size={16} />{t('Buscar por rede, loja ou CNPJ.')}</span><RDrop v="90 dias" w={150} /><RIconBtn><Download size={16} /></RIconBtn></span>
        </div>
        <p className="rl-note">{t('O período abaixo muda a coluna % Ruptura. A coluna Nível usa sempre a janela fixa de 30 dias, com corte no sábado.')}</p>
        <RCard t={tg('tbl')}>
          <table className="rl-table">
            <thead><tr>
              <RTh sort>PDV</RTh><RTh sort active="up">Nível</RTh><RTh sort>% Ruptura</RTh>
              <RTh sort active={sorted ? 'down' : undefined} t={tg('col-par')}>Parados</RTh><RTh sort>Congelados</RTh><RTh>Giro</RTh><RTh>VB sugerido</RTh><RTh>Preço</RTh><RTh>Reposição</RTh><RTh sort>Localização</RTh><RTh>Data de corte</RTh><th />
            </tr></thead>
            <tbody key={sorted ? 'sorted' : phase >= 4 ? 'in' : 'out'}>
              {rows.map(([n, net, l, r, d, cg, g, vb, c, s, price, rep], i) => (
                <tr key={n} className={phase >= 4 ? 'rl-in' : ''} style={{ animationDelay: `${(sorted ? 0.05 : 0.25) + Math.min(i, 4) * 0.08}s` }}>
                  <PdvCell n={n} net={net} /><td><RBadge lv={l} /></td><td><RGauge v={r} /></td>
                  <td><RDays d={d} of={90} warn={d > 30} on={phase >= 4} /></td><td>{qty(t, cg)}</td><td>{qty(t, g)}</td><td>{qty(t, vb)}</td>
                  <td style={{ whiteSpace: 'nowrap' }}>{price === null ? <span className="rl-dash">--</span> : `R$ ${fmt(price, 2)}`}</td><td>{qty(t, rep)}</td>
                  <LocCell c={c} s={s} /><td>{fdate(lang, 31, 10)}</td><td className="rl-chev"><ChevronRight size={16} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </RCard>
      </RPage>
    </RFrame>
  );
}

// ── Preço: com um produto escolhido, a coluna Preço da tabela de PDVs sai de -- para o valor ──
// Na Início o preço não ordena e não tem data própria (a data da leitura fica no Localizador).
type PriceRow = { n: string; net: string; lv: string; r: number; d: number; cg: string; g: string; vb: string; p: number | null; rep: string; c: string; s: string };
const PRICE_ROWS: PriceRow[] = [
  { n: 'Drogaria Serrana Ipiranga - Loja 001', net: 'Drogaria Serrana', lv: 'Crítico', r: 82, d: 61, cg: '2 un.', g: '9 un.', vb: '1 un.', p: 39.9, rep: '4 un.', c: 'São Paulo/SP', s: 'Rua Bom Pastor, 2100' },
  { n: 'Rede Farmacore Jardim América - Loja 023', net: 'Rede Farmacore', lv: 'Crítico', r: 76, d: 54, cg: '1 un.', g: '7 un.', vb: '1 un.', p: 41.9, rep: '3 un.', c: 'São Paulo/SP', s: 'Travessa das Acácias, 3575' },
  { n: 'Farmácias Vitalis Moema', net: 'Farmácias Vitalis', lv: 'Alto', r: 58, d: 33, cg: '4 un.', g: '13 un.', vb: '2 un.', p: 36.5, rep: '2 un.', c: 'São Paulo/SP', s: 'Av. Ibirapuera, 2100' },
  { n: 'Drogaria Serrana Pinheiros - Loja 014', net: 'Drogaria Serrana', lv: 'Moderado', r: 37, d: 12, cg: '0 un.', g: '21 un.', vb: '3 un.', p: 37.9, rep: '5 un.', c: 'São Paulo/SP', s: 'Rua dos Pinheiros, 870' },
  { n: 'Drogarias Aurora Centro', net: 'Drogarias Aurora', lv: 'Alto', r: 51, d: 20, cg: '5 un.', g: '6 un.', vb: '1 un.', p: 44.5, rep: '2 un.', c: 'Santo André/SP', s: 'Rua Cel. Oliveira Lima, 400' },
  { n: 'Drogaria Serrana Mooca - Loja 008', net: 'Drogaria Serrana', lv: 'Leve', r: 4, d: 5, cg: '0 un.', g: '18 un.', vb: '3 un.', p: 42.9, rep: '3 un.', c: 'São Paulo/SP', s: 'Rua da Mooca, 2360' },
  { n: 'Rede Saúde Mais Vila Mariana', net: 'Rede Saúde Mais', lv: 'Moderado', r: 31, d: 28, cg: '7 un.', g: '0 un.', vb: '0 un.', p: null, rep: '0 un.', c: 'São Paulo/SP', s: 'Rua Domingos de Morais, 1450' },
  { n: 'Drogaria Serrana Vila Madalena - Loja 021', net: 'Drogaria Serrana', lv: 'Leve', r: 2, d: 3, cg: '0 un.', g: '24 un.', vb: '4 un.', p: 38.9, rep: '4 un.', c: 'São Paulo/SP', s: 'Rua Harmonia, 412' },
];
const CHAINS = ['Drogaria Serrana', 'Rede Farmacore', 'Farmácias Vitalis', 'Drogarias Aurora', 'Rede Saúde Mais'];
const PRICE_DEF: Def = {
  beats: [
    // Planos: tela inteira (sem produto, tudo --) → escolhe o produto → o Preço aparece → filtra a rede → loja a loja.
    { wait: 1300 },
    { shot: 'prod', z: 0.8, to: 'prod', click: true, phase: 1, wait: 650 },
    { to: 'prod-0', click: true, phase: 2, wait: 500, cam: { at: 'tbl', z: 1.05 } },
    { wait: 2100 },
    { shot: 'rede', z: 0.8, to: 'rede', click: true, phase: 3, wait: 600 },
    { to: 'rede-0', click: true, phase: 4, wait: 500 },
    { shot: 'tbl', z: 1.05, wait: 1500 },
    { to: 'row-0', phase: 5, wait: 1800 },
    { shot: 'wide', wait: 1600 },
  ],
  steps: [{ phase: 0, to: 'prod' }, { phase: 2, to: 'tbl' }, { phase: 3, to: 'rede' }, { phase: 5, to: 'tbl' }],
  final: 5,
};

export function PriceDemo2({ step, def = PRICE_DEF }: DemoProps) {
  const { t, lang } = useDemoT();
  const { app, phase, cur, tg } = useDemo(def, step);
  const chosen = phase >= 2;
  const only = phase >= 4;
  const rows = only ? PRICE_ROWS.filter((r) => r.net === CHAINS[0]) : PRICE_ROWS;
  const num = (v: string) => (chosen ? qty(t, v) : <span className="rl-dash">--</span>);
  return (
    <RFrame app={app} cur={cur} nav="home" label={t('Tela Início do Dinn: com um produto escolhido, a coluna Preço da tabela de pontos de venda mostra o valor de cada loja; o cursor escolhe o produto e filtra uma rede.')}>
      <RPage top={<RTop />} filters={(
        <>
          <RSelect k="prod" tg={tg} label="Produtos" count={chosen ? 1 : undefined} open={phase === 1} items={PRODS} picked={chosen ? [0] : []} search="" />
          <RSelect k="rede" tg={tg} label="Rede" count={phase >= 4 ? 1 : undefined} open={phase === 3} items={CHAINS} picked={phase >= 4 ? [0] : []} search="" />
          <RSelect k="uf" tg={tg} label="UF" /><RSelect k="city" tg={tg} label="Cidade" /><RSelect k="brick" tg={tg} label="Brick" w={124} /><RSelect k="all" tg={tg} label="Todos" w={124} />
          <RSave />
        </>
      )}>
        <div className="rl-sect-h">
          <div><h3><Store size={24} /> {t('Pontos de venda')}</h3><p>{only ? t('Total: {n} PDVs da Drogaria Serrana', { n: 64 }) : t('Total: {n} PDVs na sua carteira', { n: 805 })}</p></div>
          <span className="rl-aside"><span className="rl-search"><Search size={16} />{t('Buscar por rede, loja ou CNPJ.')}</span><RDrop v="90 dias" w={150} /><RIconBtn><Download size={16} /></RIconBtn></span>
        </div>
        <p className="rl-note">{t('O período abaixo muda a coluna % Ruptura. A coluna Nível usa sempre a janela fixa de 30 dias, com corte no sábado.')}</p>
        <RCard t={tg('tbl')}>
          <table className="rl-table">
            <thead><tr>
              <RTh sort>PDV</RTh><RTh sort>Nível</RTh><RTh sort active="down">% Ruptura</RTh><RTh sort>Parados</RTh><RTh sort>Congelados</RTh><RTh>Giro</RTh><RTh>VB sugerido</RTh><RTh t={tg('col-preco')}>Preço</RTh><RTh>Reposição</RTh><RTh sort>Localização</RTh><RTh>Data de corte</RTh><th />
            </tr></thead>
            <tbody key={only ? 'rede' : 'all'}>
              {rows.map((r, i) => (
                <tr key={r.n} className={`rl-in ${phase >= 5 && i === 0 ? 'on' : ''}`} style={{ animationDelay: `${Math.min(i, 4) * 0.08}s` }} {...tg(`row-${i}`)}>
                  <PdvCell n={r.n} net={r.net} /><td><RBadge lv={r.lv} /></td><td><RGauge v={r.r} /></td>
                  <td><RDays d={r.d} of={90} warn={r.d > 30} /></td><td>{qty(t, r.cg)}</td>
                  <td>{num(r.g)}</td><td>{num(r.vb)}</td>
                  <td style={{ whiteSpace: 'nowrap' }}>{chosen ? (r.p === null ? <span className="rl-dash">--</span> : <b style={{ fontWeight: 500 }}>R$ {fmt(r.p, 2)}</b>) : <span className="rl-dash">--</span>}</td>
                  <td>{num(r.rep)}</td>
                  <LocCell c={r.c} s={r.s} /><td>{fdate(lang, 31, 10)}</td><td className="rl-chev"><ChevronRight size={16} /></td>
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
