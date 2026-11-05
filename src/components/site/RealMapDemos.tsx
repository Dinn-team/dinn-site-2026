import { useMemo, type ReactNode } from 'react';
import {
  ArrowUp, Building2, Calendar, ChartColumn, Check, ChevronDown, CircleHelp, Clock, Download, Factory, Gauge, Globe, Info, Lightbulb,
  LoaderCircle, MapPin, Navigation, Package, PanelLeft, Percent, Plus, RefreshCw, Search, Share2, ShieldCheck, SlidersHorizontal, SquarePen, Store,
  Telescope, TrendingDown, TrendingUp, TriangleAlert, Users, Warehouse, Wallet, X,
} from 'lucide-react';
import type { Language } from '@/i18n/store';
import { fmt, useDemo, type Def, type DemoProps } from './AppDemos';
import { JeanOrb } from './JeanOrb';
import { localizeDef, useDemoT } from './demoI18n';
import {
  AMBER, BRAND, Count, GREEN, GREY, RArea, RCard, RConsult, RDays, RDonut, RDrop, RFrame, RIconBtn, RKpi, RPage, RPin, RReport, RSave,
  RSeg, RSelect, RStock, RTh, RTop, RED, SKY, seeded,
} from './RealKit';
import { BR_PATH, GEO_H, GEO_LABELS, GEO_W, SA_PATH, UF_POS, inside, proj } from './RealGeo';

// Telas fiéis ao app do Dinn (prints de nov/2026): Localizar Produtos,
// Mercado, Oportunidades, Distribuição e Jean. Mapas desenhados por nós
// (scripts/gen-app-maps.mjs e RealGeo.ts). Dados fictícios.
// Idioma: texto-fonte em PT, traduzido por t() com o dicionário demo-i18n/map.json.

// ── Idioma: datas, preço e unidades ────────────────────────────────────────
const MON = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const p2 = (n: number) => String(n).padStart(2, '0');
/** Data completa: 03/11/2026 (PT), Nov 3, 2026 (EN), 3/11/2026 (ES). */
const dateFmt = (lang: Language, d: number, m: number, y = 2026) =>
  lang === 'en' ? `${MON[m - 1]} ${d}, ${y}` : lang === 'es' ? `${d}/${m}/${y}` : `${p2(d)}/${p2(m)}/${y}`;
/** Data curta: 04/10 (PT), Oct 4 (EN), 4/10 (ES). */
const shortFmt = (lang: Language, d: number, m: number) =>
  lang === 'en' ? `${MON[m - 1]} ${d}` : lang === 'es' ? `${d}/${m}` : `${p2(d)}/${p2(m)}`;
/** Troca o "un" final de um texto em PT ("4–9 un", "1 un.") pela unidade do idioma. */
const unit = (lang: Language, s: string) =>
  lang === 'en' ? s.replace(/ un\.?$/, /^(≥ )?1 /.test(s) ? ' unit' : ' units') : lang === 'es' ? s.replace(/ un\.?$/, ' un.') : s;
const brl = (n: number) => `R$ ${fmt(n, 2)}`;
/** Texto com **negrito**. */
const Rich = ({ text }: { text: string }) => <>{text.split('**').map((s, i) => (i % 2 ? <b key={i}>{s}</b> : s))}</>;

/** Roteiro por idioma. Cada componente é remontado (key) ao trocar o idioma, e o laço recomeça. */
function useLocalDef(base: Def) {
  const { t, lang } = useDemoT();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const def = useMemo(() => localizeDef(base, t), [base, lang]);
  return { def, lang };
}

// ── Localizar Produtos ─────────────────────────────────────────────────────
const MAP_W = 708;
const MAP_H = 744;
type PinT = [number, number, string];
const PINS: PinT[] = (() => {
  const r = seeded(21);
  const out: PinT[] = [];
  while (out.length < 64) {
    const x = 40 + r() * (MAP_W - 80);
    const y = 40 + r() * (MAP_H - 80);
    // Mais lojas no centro da cidade
    if (Math.hypot(x - 380, y - 400) > 330 && r() < 0.6) continue;
    if (Math.hypot(x - 330, y - 650) < 40) continue;
    const k = r();
    out.push([x, y, k < 0.42 ? 'ok' : k < 0.75 ? 'mid' : 'low']);
  }
  return out;
})();
const SEL: [number, number] = [330, 650];
// nome, preço, estoque agora, endereço, horário, nível, faixa
const STORES: [string, number, string, string, string, string, string][] = [
  ['Rede Farmacore Jardim América - Loja 023', 58.29, '≥ 1 un', 'Travessa das Acácias, 3575, São Paulo', 'Aberto · Fecha às 21:00', 'Médio', '2–5 un'],
  ['Farmácias Vitalis Moema', 56.9, 'Indisponível', 'Av. Ibirapuera, 2100, São Paulo', 'Aberto · Fecha às 22:00', 'Médio', '3–6 un'],
  ['Drogaria Serrana Ipiranga - Loja 001', 59.99, '≥ 6 un', 'Rua Bom Pastor, 2100, São Paulo', 'Fechado · Abre amanhã às 07:00', 'Alto', '7–19 un'],
];
const SUGS: [string, string][] = [['São Paulo', 'SP'], ['São Paulo de Olivença', 'AM'], ['Rua São Paulo', 'Curitiba - PR'], ['Avenida São Paulo', 'Maringá - PR']];
const PROD = 'Cefalgin cápsula 400mg';

const LOC_DEF: Def = {
  beats: [
    // Planos: tela inteira → formulário (produto, cidade, filtro) → mapa carrega → pinos → loja → consulta agora.
    { wait: 1300 },
    { shot: 'form', z: 1.25, to: 'f-prod', click: true, type: ['prod', PROD], phase: 1, wait: 300 },
    { to: 'f-addr', click: true, type: ['addr', 'São Paulo'], phase: 2, wait: 700 },
    { to: 'sug-0', click: true, phase: 3, wait: 400 },
    { to: 'chk', click: true, phase: 4, wait: 400 },
    { to: 'go', click: true, phase: 5, wait: 1600, cam: 'out' },
    { phase: 6, wait: 1500 },
    { shot: 'pin', z: 0.5, to: 'pin', click: true, phase: 7, wait: 1100, cam: { at: 'popup' } },
    { shot: 'p-box', z: 0.9, to: 'p-con', click: true, phase: 8, wait: 1300 },
    { phase: 9, wait: 1600 },
    { shot: 'popup', wait: 2000 },
  ],
  steps: [{ phase: 3, to: 'f-addr' }, { phase: 6, to: 'pin' }, { phase: 7, to: 'p-box' }, { phase: 9, to: 'p-box' }],
  final: 9,
};

const Caret = () => <span className="rl-caret" />;

export function LocatorDemo2({ step, def = LOC_DEF }: DemoProps) {
  const l = useLocalDef(def);
  return <LocatorView key={l.lang} step={step} def={l.def} />;
}

function LocatorView({ step, def }: DemoProps) {
  const { t, lang } = useDemoT();
  const { app, phase, typed, cur, tg } = useDemo(def!, step);
  const prod = typed.prod ?? (phase >= 1 ? PROD : '');
  const addr = phase >= 3 ? 'São Paulo, SP' : typed.addr ?? (phase >= 2 ? 'São Paulo' : '');
  const fProd = phase === 0 && typed.prod !== undefined;
  const fAddr = (phase === 1 && typed.addr !== undefined) || phase === 2;
  const ready = phase >= 3;
  const busy = phase === 5;
  const found = phase >= 6;
  const now = phase >= 9;
  const yesterday = dateFmt(lang, 2, 11);
  return (
    <RFrame app={app} cur={cur} nav="locator" label={t('Tela Localizar Produtos do Dinn: o cursor informa o produto e a cidade, as farmácias aparecem no mapa e o estoque de uma loja é consultado agora.')}>
      <div className="rl-page">
        <RTop crumb={t('Localizar Produtos')} actions={false} />
        <div className="rl-loc">
          <aside className="rl-loc-l">
            <div className="rl-loc-form" style={{ position: 'relative' }} {...tg('form')}>
              <h3>{t('Localizar Produto')}<small><CircleHelp size={15} />{t('Como funciona')}</small></h3>
              <span className="rl-lab">{t('Produto')}</span>
              <span className={`rl-input ${fProd ? 'focus' : ''}`} {...tg('f-prod')}>
                <Search size={17} />{prod ? <span>{prod}{fProd && <Caret />}</span> : <span className="ph">{t('Nome ou SKU do produto...')}</span>}
                {prod && !fProd && <X size={16} className="rl-x2" />}
              </span>
              <span className="rl-lab">{t('Localização')}</span>
              <span className={`rl-input ${fAddr ? 'focus' : ''}`} {...tg('f-addr')}>
                <MapPin size={17} />{addr ? <span>{addr}{fAddr && <Caret />}</span> : <span className="ph">{t('Digite seu endereço de entrega...')}</span>}
                {ready && <X size={16} className="rl-x2" />}
              </span>
              <div className="rl-avail">
                <div>
                  <em>{t('DISPONIBILIDADE')} <Info size={13} /></em>
                  <span className={`rl-check ${phase >= 4 ? 'on' : ''}`} {...tg('chk')}><i>{phase >= 4 && <Check size={12} strokeWidth={3} />}</i>{t('Com estoque')}</span>
                  <span className="rl-check"><i />{t('Sem estoque')}</span>
                </div>
                <span className="rl-filt">{t('Filtrar')}{phase >= 4 && <i>1</i>}<SlidersHorizontal size={16} /></span>
              </div>
              <span className={`rl-go ${ready && !busy ? 'ready' : ''}`} {...tg('go')}><Search size={17} />{t('Consultar farmácias')}</span>
              {ready && <span className="rl-ghost"><X size={16} />{t('Limpar filtros')}</span>}
              {phase === 2 && (
                <span className="rl-sug" style={{ top: 238 }}>
                  {SUGS.map(([a, b], i) => (
                    <span key={a} className={i === 0 ? 'on' : ''} {...tg(`sug-${i}`)}><MapPin size={17} /><span><b>{a}</b><small>{b}</small></span></span>
                  ))}
                </span>
              )}
            </div>
            <div className="rl-loc-res">
              {phase < 5 && (
                <div className="rl-loc-empty"><Search size={44} strokeWidth={1.6} /><span>{t('Selecione um produto e localização')}<br />{t('para ver as farmácias disponíveis')}</span></div>
              )}
              {busy && (
                <>
                  <span className="rl-busy-l"><LoaderCircle size={15} className="rl-spin" />{t('Buscando farmácias...')}</span>
                  <div className="rl-skel"><i style={{ width: '70%' }} /><i style={{ width: '90%' }} /><i style={{ width: '55%' }} /></div>
                  <div className="rl-skel"><i style={{ width: '60%' }} /><i style={{ width: '85%' }} /></div>
                </>
              )}
              {found && (
                <>
                  <div className="rl-loc-count rl-in"><h4>{t('{n} Farmácias encontradas', { n: 128 })}</h4><p>{t('Produto:')} {PROD}<br />{t('Localização:')} São Paulo, SP</p></div>
                  <span className="rl-near rl-in"><RefreshCw size={14} />{t('As mais próximas com estoque em tempo real')}</span>
                  {STORES.map(([n, p, q, a, h, lv, rng], i) => (
                    <div key={n} className={`rl-store rl-in ${phase >= 7 && i === 0 ? 'on' : ''}`} style={{ animationDelay: `${0.1 + i * 0.08}s` }}>
                      <div className="rl-store-h"><span>{n}</span><b>{brl(p)} <Info size={12} /></b></div>
                      <span className="rl-now"><em>{t('Estoque agora')}</em><u>{i === 0 && now ? unit(lang, '6 un') : q === 'Indisponível' ? t(q) : unit(lang, q)}</u></span>
                      <small><MapPin size={13} />{a}</small>
                      <small><Clock size={13} />{t(h)}</small>
                      <div className="rl-store-f"><span>{t('Disponibilidade')} ({t(lv)}):</span><RStock v={unit(lang, rng)} k="mid" /></div>
                    </div>
                  ))}
                </>
              )}
            </div>
          </aside>
          <div className={`rl-map ${busy ? 'is-busy' : ''}`} {...tg('map')}>
            <span className="rl-map-img" style={{ backgroundImage: 'url(/app-screens/mapa-cidade.svg)', transform: found ? 'scale(1)' : 'scale(1.08)' }} />
            {ready && <span className="rl-me" style={{ left: 382, top: 448 }} />}
            {found && PINS.map(([x, y, k], i) => <RPin key={i} x={x} y={y} k={k} i={i} />)}
            {found && <RPin x={SEL[0]} y={SEL[1]} k="ok" i={20} size={34} on={phase >= 7} t={tg('pin')} />}
            {busy && (
              <div className="rl-loadcard">
                <span><MapPin size={26} /></span><b>{t('Atualizando Mapa')}</b><small>{t('Carregando estoque dos PDVs da região...')}</small><i />
              </div>
            )}
            {phase >= 7 && (
              <div className="rl-popup" style={{ left: SEL[0] - 215, bottom: MAP_H - SEL[1] + 28 }} {...tg('popup')}>
                <div className="rl-popup-h"><span style={{ display: 'flex', alignItems: 'center', gap: 10 }}><b>Rede Farmacore Jardim América - Loja 023</b></span><span className="rl-x"><X size={15} /></span></div>
                <span className="rl-tagpill green" style={{ justifySelf: 'start' }}><Store size={13} />{t('Estoque exato')}<Info size={12} /></span>
                <small>Rede Farmacore</small>
                <div className="rl-pgrid">
                  <div className="rl-pbox" {...tg('p-box')}>
                    <em>{t('ESTOQUE DO PRODUTO')}</em>
                    <b>{unit(lang, now ? '6 un' : '4–9 un')}</b>
                    {now ? <span className="rl-soon" style={{ borderColor: '#c4b5fd' }}>● {t('Consulta feita agora')} · 15:12</span> : <RConsult busy={phase === 8} t={tg('p-con')} />}
                    <span className="rl-est"><Calendar size={12} />{now ? t('Leitura direta do sistema da loja') : t('Estimativa de ontem, {d}', { d: yesterday })}</span>
                    {!now && <span className="rl-soon">{t('Pode acabar em 5 a 7 dias')}</span>}
                    <span className="rl-price"><b>{brl(58.29)}</b> {t('por unidade')} <Info size={12} /></span>
                  </div>
                  <div className="rl-pside">
                    <div className="rl-mini green"><span><TrendingUp size={16} /></span><p>{t('Giro')} <b>{fmt(0.9, 1)}<small>{t('un./dia')}</small></b></p></div>
                    <div className="rl-mini lil"><span><Gauge size={16} /></span><p>{t('Parado')} <b>0<small>{t('un.')}</small></b><span><b style={{ fontSize: 13 }}>0 {t('dias')}</b> {t('de 30 dias')}</span></p></div>
                  </div>
                </div>
                <div className="rl-conf"><span><ShieldCheck size={14} />{t('Confiabilidade do estoque')}</span><b>{t('A - Confiável')}</b></div>
                <div className="rl-diff"><p><b><TriangleAlert size={14} />{t('Estoque diferente?')}</b>{t('O sistema mostra {v}, mas você encontrou algo diferente na loja?', { v: unit(lang, now ? '6 un' : '4–9 un') })}</p><RReport /></div>
                <div className="rl-pinfo">
                  <span><MapPin size={13} />Travessa das Acácias, 3575, …</span><span><Clock size={13} />{t('Aberto - Fecha às 21:00')}</span>
                  <span><Navigation size={13} />{t('{n} km de distância', { n: fmt(2.6, 1) })}</span><span className="lnk"><Globe size={13} />{t('Abrir site')}</span>
                </div>
                <div className="rl-pact"><span><Navigation size={15} />{t('Abrir no Maps')}</span><span><Share2 size={15} />{t('Compartilhar')}</span></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </RFrame>
  );
}

// ── Mercado ────────────────────────────────────────────────────────────────
const MARKETS = ['Analgésicos', 'Antialérgicos', 'Antigripais', 'Gastrointestinal'];
const LABS = [
  { label: 'Minha Empresa', value: 25.5, color: BRAND }, { label: 'Farmoquímica Aliança', value: 22.4, color: SKY },
  { label: 'Bionova Genéricos', value: 17.9, color: AMBER }, { label: 'Grupo Saluspharma', value: 13.4, color: GREEN },
  { label: 'Ativa Ciências Médicas', value: 10.4, color: '#ec4899' }, { label: 'Provitalis Indústria', value: 6.7, color: '#8b5cf6' },
  { label: 'Outros laboratórios', value: 3.7, color: '#f9a8d4' },
];
const SKUS = [
  { label: 'Concorrência', value: 74.5, color: BRAND }, { label: 'Gastrolev cápsula 20mg', value: 5.5, color: SKY },
  { label: 'Dorvalin comprimido 500mg', value: 4.9, color: AMBER }, { label: 'Broncolar xarope 120ml', value: 4.1, color: GREEN },
  { label: 'Alergimax comprimido 10mg', value: 3.8, color: '#ec4899' }, { label: 'Gastrolev 40 cápsula 40mg', value: 3.2, color: '#8b5cf6' },
  { label: 'Dorvalin Plus comprimido 750mg', value: 2.1, color: '#f9a8d4' }, { label: 'Outros', value: 1.9, color: '#d4d4d8' },
];
// dia, mês de cada semana
const MW: [number, number][] = [[2, 8], [9, 8], [16, 8], [23, 8], [30, 8], [6, 9], [13, 9], [20, 9], [27, 9], [4, 10], [11, 10], [18, 10], [25, 10]];
const LAB_S = [48, 50, 49, 51, 52, 50, 51, 53, 52, 54, 53, 52, 51];
const COMP_S = [140, 143, 146, 145, 148, 150, 149, 152, 151, 153, 155, 154, 156];
const MKT_PDV: [string, string, string, number, number][] = [
  ['Drogaria Serrana Paulista - Loja 031', 'Drogaria Serrana', 'Av. Paulista, 2073, São Paulo, SP', 212, 579],
  ['Rede Farmacore Centro - Loja 002', 'Rede Farmacore', 'Av. Independência, 2759, Piracicaba, SP', 188, 573],
  ['Farmácias Vitalis Aclimação', 'Farmácias Vitalis', 'Av. da Aclimação, 815, São Paulo, SP', 175, 517],
  ['Drogarias Aurora Jardim Camburi', 'Drogarias Aurora', 'Av. Dante Michelini, 141, Vitória, ES', 160, 483],
  ['Rede Saúde Mais Savassi', 'Rede Saúde Mais', 'Av. Getúlio Vargas, 222, Belo Horizonte, MG', 151, 462],
];
const MKT_DEF: Def = {
  beats: [
    // Planos: tela inteira → filtro de mercado → participação carrega → laboratório em destaque → vendas semana a semana.
    { wait: 1300 },
    { shot: 'mkt', z: 0.75, to: 'mkt', click: true, phase: 1, wait: 650 },
    { to: 'mkt-0', click: true, phase: 2, wait: 350, cam: { at: 'dash' } },
    { phase: 3, wait: 1900 },
    { shot: 'lab', z: 1.05, to: 'lab-0', phase: 4, wait: 2000 },
    { shot: 'wide', phase: 5, wait: 1300 },
    { shot: 'sales', to: 'pt', phase: 6, wait: 2400 },
    { shot: 'wide', wait: 1600 },
  ],
  steps: [{ phase: 3, to: 'mkt' }, { phase: 4, to: 'lab-0' }, { phase: 3, to: 'sku' }, { phase: 6, to: 'pt' }],
  final: 6,
};

function Share({ items, on, center, hi, t, tl }: { items: typeof LABS; on: boolean; center: string; hi?: number; t?: (i: number) => object; tl?: (i: number) => object }) {
  return (
    <div className={`rl-share ${hi !== undefined ? 'has-hi' : ''}`}>
      <ul>
        {items.map((l, i) => (
          <li key={l.label} className={hi === i ? 'hi' : ''} {...(tl ? tl(i) : {})}><i style={{ background: l.color }} />{l.label}<b>{on ? `${fmt(l.value, 1)}%` : <span className="rl-sk" style={{ width: 36 }} />}</b></li>
        ))}
      </ul>
      <RDonut items={items} on={on} center={center} hi={hi} t={t} />
    </div>
  );
}

export function MarketDemo2({ step, def = MKT_DEF }: DemoProps) {
  const l = useLocalDef(def);
  return <MarketView key={l.lang} step={step} def={l.def} />;
}

function MarketView({ step, def }: DemoProps) {
  const { t, lang } = useDemoT();
  const { app, phase, cur, tg } = useDemo(def!, step);
  const on = phase >= 3;
  const labs = LABS.map((x) => ({ ...x, label: t(x.label) }));
  const skus = SKUS.map((x) => ({ ...x, label: t(x.label) }));
  const labels = MW.map(([d, m]) => shortFmt(lang, d, m));
  return (
    <RFrame app={app} cur={cur} nav="market" label={t('Tela Mercado do Dinn: o cursor escolhe o mercado, a participação por laboratório e por SKU carrega e as vendas estimadas do laboratório e dos concorrentes aparecem semana a semana.')}>
      <RPage top={<RTop crumb={t('Mercado')} />} y={phase >= 5 ? 420 : 0} filters={(
        <>
          <RSelect k="mkt" tg={tg} label={t('Mercado')} count={phase >= 2 ? 1 : undefined} w={190} open={phase === 1} items={MARKETS.map((x) => t(x))} picked={phase >= 2 ? [0] : []} search="" />
          <RSelect k="brick" tg={tg} label="Brick" w={190} />
          <RSelect k="period" tg={tg} label={t('Últimos 90 dias')} w={190} />
          <RSave />
        </>
      )}>
        <div className="rl-stackv" {...tg('dash')}>
        <div className={`rl-kpis k3 ${phase === 2 ? 'rl-loading' : ''}`}>
          <RKpi icon={<Building2 size={20} />} label={t('Total de PDVs no mercado')}><Count v={1512} on={on} /></RKpi>
          <RKpi icon={<Users size={20} />} label={t('PDVs só com concorrente')}><Count v={7} on={on} /></RKpi>
          <RKpi icon={<Wallet size={20} />} label={t('PDVs que concentram 80%')}><Count v={1034} on={on} /></RKpi>
        </div>
        <div className="rl-row">
          <RCard className="half" title={t('Market share por laboratório')} t={tg('lab')}>
            <div style={{ position: 'relative' }}>
              <Share items={labs} on={on} center={t('{n} mi', { n: fmt(2.6, 1) })} hi={phase === 4 ? 0 : undefined} tl={(i) => tg(`lab-${i}`)} />
              {phase === 4 && <span className="rl-tip rl-pop" style={{ left: '78%', top: '18%' }}><b>{labs[0].label}</b><span><i style={{ background: BRAND }} />{fmt(25.5, 1)}% · {t('{n} mil un.', { n: 663 })}</span></span>}
            </div>
          </RCard>
          <RCard className="half" title={t('Market share por SKU')} t={tg('sku')}>
            <Share items={skus} on={on} center={t('{n} mi', { n: fmt(2.4, 1) })} />
          </RCard>
        </div>
        </div>
        <RCard title={t('Vendas estimadas: laboratório vs. concorrentes')} t={tg('sales')} aside={<span className="rl-aside"><RSeg items={[t('Diário'), t('Semanal')]} on={1} /><RDrop v={t('90 dias')} w={150} /></span>}>
          <p className="rl-legend"><span><i style={{ background: BRAND }} />{t('Meu laboratório')}</span><span><i style={{ background: SKY }} />{t('Concorrentes')}</span></p>
          <RArea labels={labels} ticks={[0, 45, 90, 135, 180]} unit="k" on={phase >= 5} w={980} h={250} mark={{ i: 9, t: tg('pt') }}
            series={[{ values: LAB_S, color: BRAND }, { values: COMP_S, color: SKY }]}
            tip={phase >= 6 ? { i: 9, text: <><b>{t('Semana de {d}', { d: shortFmt(lang, 4, 10) })}</b><span><i style={{ background: BRAND }} />{t('Meu laboratório: {n} mil', { n: 54 })}</span><br /><span><i style={{ background: SKY }} />{t('Concorrentes: {n} mil', { n: 153 })}</span></> } : undefined} />
        </RCard>
        <div className="rl-sect-h"><div><h3><Store size={24} /> {t('PDVs do mercado')}</h3><p>{t('{n} PDVs encontrados', { n: fmt(1512) })}</p></div></div>
        <div className="rl-aside"><RSeg items={[t('Por PDV'), t('Por rede')]} /><span className="rl-search" style={{ flex: 1 }}><Search size={16} />{t('Buscar por CNPJ, rede ou cidade...')}</span><RDrop v={t('Concentram 80% do volume')} w={240} /><RIconBtn><Download size={16} /></RIconBtn></div>
        <RCard>
          <table className="rl-table">
            <thead><tr><RTh>{t('PDV')}</RTh><RTh>{t('Localização')}</RTh><RTh sort active="down">{t('Volume no mercado')}</RTh><RTh sort>{t('Meu laboratório')}</RTh><RTh sort>{t('Concorrentes')}</RTh></tr></thead>
            <tbody>
              {MKT_PDV.map(([n, net, a, lb, c]) => (
                <tr key={n}><td className="rl-name"><b>{n}</b><small>{net}</small></td><td>{a}</td><td>{fmt(lb + c)}</td><td>{lb}</td><td>{c}</td></tr>
              ))}
            </tbody>
          </table>
        </RCard>
      </RPage>
    </RFrame>
  );
}

// ── Oportunidades ──────────────────────────────────────────────────────────
type Sig = 'up' | 'down' | 'flat';
const SIG_COL: Record<Sig, string> = { up: GREEN, down: RED, flat: GREY };
const Q0: Record<string, Sig> = {
  MG: 'up', PR: 'up', SC: 'up', BA: 'up', GO: 'up', PE: 'up', CE: 'up', ES: 'up', RR: 'up', AP: 'up', PA: 'up', AC: 'up', RO: 'up', DF: 'up', RN: 'up',
  SP: 'flat', MA: 'flat', PI: 'flat', TO: 'flat', AL: 'flat', PB: 'flat', RJ: 'flat', SE: 'flat', AM: 'down', MT: 'down', MS: 'down', RS: 'down',
};
const Q1: Record<string, Sig> = {
  SC: 'down', BA: 'down', PE: 'down', PR: 'down', GO: 'down', RR: 'down', PA: 'down', PI: 'down', TO: 'down', RO: 'down', CE: 'down', RN: 'down',
  PB: 'down', AL: 'down', SE: 'down', MS: 'down', MT: 'down', DF: 'down', MG: 'flat', SP: 'up', AC: 'up', AP: 'flat', AM: 'flat', MA: 'flat',
  ES: 'flat', RJ: 'flat', RS: 'flat',
};
// UF, sinal, categoria antes → depois, variação, %, laboratório (un. e %)  /  participação antes → depois
const T0: [string, Sig, number, number, number, number, [number, number]][] = [
  ['MG', 'up', 12480, 13940, 1460, 11.7, [6410, 46.0]], ['PR', 'up', 6020, 6890, 870, 14.5, [3050, 44.3]],
  ['SC', 'up', 4310, 4950, 640, 14.8, [2420, 48.9]], ['BA', 'up', 5210, 5760, 550, 10.6, [2090, 36.3]],
  ['SP', 'flat', 31400, 31830, 430, 1.4, [13120, 41.2]], ['GO', 'up', 3180, 3520, 340, 10.7, [1390, 39.5]],
  ['PE', 'up', 2940, 3230, 290, 9.9, [1180, 36.5]],
];
const T1: [string, Sig, number, number, number, number, [number, number]][] = [
  ['SC', 'down', 4310, 4950, 640, 14.8, [53.2, 48.9]], ['BA', 'down', 5210, 5760, 550, 10.6, [40.1, 36.3]],
  ['PE', 'down', 2940, 3230, 290, 9.9, [39.8, 36.5]], ['PR', 'down', 6020, 6890, 870, 14.5, [47.1, 44.3]],
  ['GO', 'down', 3180, 3520, 340, 10.7, [41.6, 39.5]], ['MG', 'flat', 12480, 13940, 1460, 11.7, [46.9, 46.0]],
  ['SP', 'up', 31400, 31830, 430, 1.4, [40.3, 41.2]],
];
const SIG_TXT: Record<Sig, [string, string]> = { up: ['Mercado em alta', 'Laboratório ganha espaço'], down: ['Mercado em queda', 'Laboratório perde espaço'], flat: ['Estável', 'Estável'] };
const BLOBS: [number, number, number, string][] = (() => {
  const r = seeded(9);
  const out: [number, number, number, string][] = [];
  let n = 0;
  while (out.length < 120 && n < 4000) {
    n++;
    const lon = -74 + r() * 40;
    const lat = 5 - r() * 39;
    if (!inside(lon, lat)) continue;
    let best = 'SP';
    let d = 1e9;
    for (const [uf, [ulo, ula]] of Object.entries(UF_POS)) {
      const dd = Math.hypot(ulo - lon, ula - lat);
      if (dd < d) { d = dd; best = uf; }
    }
    out.push([lon, lat, 9 + r() * 9, r() < 0.3 ? best : '']);
  }
  return out;
})();
const QS: [ReactNode, string, string][] = [
  [<ChartColumn size={18} />, 'Onde a categoria avança?', 'Maior aumento de volume estimado, no mesmo conjunto de lojas.'],
  [<TrendingDown size={18} />, 'Onde meu laboratório perde espaço?', 'Maior queda de participação, em pontos percentuais.'],
  [<Telescope size={18} />, 'Onde investigar expansão?', 'Redes grandes na categoria onde o laboratório aparece pouco.'],
];
const OPP_DEF: Def = {
  beats: [
    // Planos: tela inteira → pergunta → mapa e territórios mudam → detalhe do estado → ações recomendadas.
    { wait: 1300 },
    { shot: 'qs', to: 'q-1', click: true, phase: 1, wait: 800 },
    { shot: 'wide', phase: 2, wait: 1800 },
    { shot: 'terr', to: 'row-0', click: true, phase: 3, wait: 1500, cam: { at: 'dk' } },
    { shot: 'acts', to: 'gen', click: true, phase: 4, wait: 1400 },
    { phase: 5, wait: 2600 },
    { shot: 'wide', wait: 1600 },
  ],
  steps: [{ phase: 0, to: 'qs' }, { phase: 2, to: 'q-1' }, { phase: 2, to: 'terr' }, { phase: 5, to: 'acts' }],
  final: 5,
};

export function OpportunitiesDemo2({ step, def = OPP_DEF }: DemoProps) {
  const l = useLocalDef(def);
  return <OpportunitiesView key={l.lang} step={step} def={l.def} />;
}

function OpportunitiesView({ step, def }: DemoProps) {
  const { t, lang } = useDemoT();
  const { app, phase, cur, tg } = useDemo(def!, step);
  const q = phase >= 1 ? 1 : 0;
  const loading = phase === 1;
  const sig = q ? Q1 : Q0;
  const rows = q ? T1 : T0;
  const ti = q ? 1 : 0;
  const pct = (n: number) => `${fmt(n, 1)}%`;
  const until = t('Comparação semanal até {d}', { d: dateFmt(lang, 31, 10) });
  const span = `${shortFmt(lang, 6, 9)} – ${shortFmt(lang, 3, 10)} → ${shortFmt(lang, 4, 10)} – ${shortFmt(lang, 31, 10)}`;
  const pp = t('p.p.');
  return (
    <RFrame app={app} cur={cur} nav="opps" label={t('Tela Oportunidades do Dinn: o cursor escolhe a pergunta “Onde meu laboratório perde espaço?”, o mapa e os territórios mudam e o detalhe de Santa Catarina abre com as ações recomendadas.')}>
      <RPage top={<RTop crumb={t('Oportunidades')} actions={false} />} y={phase >= 2 ? 236 : 0}>
        <div className="rl-aside" style={{ alignItems: 'flex-end', gap: 12 }}>
          <span className="rl-fl"><em>{t('Mercado')} <Info size={12} /></em><RDrop v={t('Analgésicos')} w={230} /></span>
          <span className="rl-fl"><em>{t('Região')} <Info size={12} /></em><RDrop v={t('Todas as regiões')} w={180} /></span>
          <span className="rl-fl"><em>{t('Cidade')} <Info size={12} /></em><span className="rl-sel off" style={{ width: 160 }}>{t('Cidade')}<ChevronDown size={16} /></span></span>
          <span className="rl-fl"><em>{t('Rede')}</em><RDrop v={t('Rede')} w={160} /></span>
          <span className="rl-fl"><em>{t('Período')}</em><RDrop v={t('30 dias (4 semanas)')} w={200} /></span>
        </div>
        <p className="rl-ask">{t('Para onde você quer olhar?')}</p>
        <div className="rl-qs" {...tg('qs')}>
          {QS.map(([ic, qt, qs], i) => (
            <div key={qt} className={`rl-q ${i === q ? 'on' : ''}`} {...tg(`q-${i}`)}>{ic}<span><b>{t(qt)}</b><small>{t(qs)}</small></span></div>
          ))}
        </div>
        <div className="rl-cmp"><b><Info size={14} />{until}</b>{span}<span>{t('venda estimada')} <Info size={12} /></span><span>{t('Ver método')} <ChevronDown size={15} /></span></div>
        <div className="rl-opp">
          <div>
            <h4>{t('Mapa de oportunidades')}</h4>
            <p className="rl-opp-sub">{t('Cada estado é contornado pelo sinal da pergunta escolhida. Passe o mouse para ver os números e clique para abrir as redes e lojas.')}</p>
            <div className="rl-key">{t('Como ler as cores')} <Info size={12} />
              <span><i style={{ background: GREEN }} />{t(q ? 'Laboratório ganha espaço' : 'Mercado em alta')}</span>
              <span><i style={{ background: RED }} />{t(q ? 'Laboratório perde espaço' : 'Mercado em queda')}</span>
              <span><i style={{ background: AMBER }} />{t('Dado frágil')}</span><span><i style={{ background: GREY }} />{t('Estável')}</span>
            </div>
            <div className="rl-brmap" style={{ aspectRatio: `${GEO_W} / ${GEO_H}`, height: 'auto' }}>
              <svg viewBox={`0 0 ${GEO_W} ${GEO_H}`} preserveAspectRatio="none" aria-hidden="true">
                <defs><filter id="rl-blur" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="6" /></filter></defs>
                <rect width={GEO_W} height={GEO_H} fill="#d5d8e0" />
                <path d={SA_PATH} fill="#ececec" stroke="#c9c9cd" strokeWidth="1" />
                <path d={BR_PATH} fill="#f1f1f1" stroke="#c4c4c8" strokeWidth="1.2" />
                <g filter="url(#rl-blur)" opacity={loading ? 0.3 : 0.62} style={{ transition: 'opacity .4s' }}>
                  {BLOBS.map(([lo, la, r, uf], i) => {
                    const [x, y] = proj(lo, la);
                    return <circle key={i} cx={x} cy={y} r={r} fill={uf ? SIG_COL[sig[uf] ?? 'flat'] : AMBER} style={{ transition: 'fill .6s ease' }} />;
                  })}
                </g>
                {GEO_LABELS.map(([gt, lo, la, k]) => {
                  const [x, y] = proj(lo, la);
                  return <text key={gt} x={x} y={y} textAnchor="middle" fontSize={k === 'country' ? 8.5 : 9.5} letterSpacing={k === 'country' ? 1.6 : 0} fill={k === 'country' ? '#8a8a90' : '#4b4b50'} fontFamily="Inter, sans-serif">{gt}</text>;
                })}
              </svg>
              {Object.entries(UF_POS).map(([uf, [lo, la]], i) => {
                const [x, y] = proj(lo, la);
                return <span key={uf} className={`rl-uf ${phase >= 3 && uf === 'SC' ? 'on' : ''}`} style={{ left: `${(x / GEO_W) * 100}%`, top: `${(y / GEO_H) * 100}%`, background: loading ? GREY : SIG_COL[sig[uf]], animationDelay: `${i * 0.02}s` }}>{uf}</span>;
              })}
              <span className="rl-maptool"><span>+</span><span>−</span></span>
            </div>
          </div>
          <div>
            <h4>{t('Territórios')}</h4>
            <p className="rl-opp-sub">{t('Venda estimada em un./semana, só no painel comparável.')}<br />{t('Clique em uma linha para abrir as redes e lojas do estado.')}</p>
            <RCard t={tg('terr')}>
              <table className="rl-table">
                <thead><tr><RTh sort>{t('UF')}</RTh><RTh sort>{t('Sinal')}</RTh><RTh sort>{t('Categoria (un./sem.)')}</RTh><RTh sort>{t('Variação')}</RTh><RTh>{q ? t('Participação do lab.') : t('Laboratório')}</RTh></tr></thead>
                <tbody key={q} className={loading ? 'rl-loading' : ''}>
                  {rows.map(([uf, s, a, b, d, p, lab], i) => (
                    <tr key={uf} className={`rl-in ${phase >= 3 && i === 0 ? 'on' : ''}`} style={{ animationDelay: `${i * 0.04}s` }} {...tg(`row-${i}`)}>
                      <td><b style={{ fontWeight: 600 }}>{uf}</b></td>
                      <td><span className={`rl-sig ${s}`}>{s === 'up' ? <TrendingUp size={13} /> : s === 'down' ? <TrendingDown size={13} /> : '–'} {t(SIG_TXT[s][ti])}</span></td>
                      <td style={{ color: '#52525b' }}>{fmt(a)} → <b style={{ color: '#0a0a0a', fontWeight: 500 }}>{fmt(b)}</b></td>
                      <td className="rl-pos rl-var">↗ +{fmt(d)}<small>(↗ +{fmt(p, 1)}%)</small></td>
                      <td>{q ? `${pct(lab[0])} → ${pct(lab[1])}` : `${fmt(lab[0])} (${pct(lab[1])})`}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </RCard>
          </div>
        </div>
      </RPage>
      {phase >= 3 && (
        <aside className="rl-drawer">
          <div className="rl-modal-h" style={{ alignItems: 'center' }}>
            <h3 style={{ fontSize: 20 }}>{t('Detalhe de {uf}', { uf: 'SC' })}</h3>
            <p style={{ margin: 0, fontSize: 12.5 }}><Info size={13} /><b style={{ color: '#0a0a0a' }}>{until}</b> {span}</p>
            <span className="rl-x"><X size={18} /></span>
          </div>
          <div className="rl-modal-b" style={{ display: 'grid', alignContent: 'start', gap: 12, background: '#fff' }}>
            <div className="rl-aside" style={{ alignItems: 'flex-end' }}>
              <span className="rl-fl"><em>{t('Rede')} <Info size={12} /></em><RDrop v={t('Todas as redes')} w={170} /></span>
              <span className="rl-fl"><em>{t('Região')} <Info size={12} /></em><RDrop v="Santa Catarina" w={160} /></span>
              <RDrop v={t('Todas as cidades')} w={160} /><RDrop v={t('Todos os Bricks')} w={150} />
            </div>
            <div className="rl-dkpis" {...tg('dk')}>
              <div className="rl-dkpi">{t('Vendas do mercado (un./sem.)')}<b>{fmt(4950)}<small>({fmt(4310)})</small></b><span className="rl-pos">↗ +{pct(14.8)}</span></div>
              <div className="rl-dkpi">{t('Vendas do laboratório (un./sem.)')}<b>{fmt(2420)}<small>({fmt(2293)})</small></b><span className="rl-pos">↗ +{pct(5.5)}</span></div>
              <div className="rl-dkpi">{t('Participação do laboratório')}<b>{pct(48.9)}</b><span className="rl-neg">↘ −{fmt(4.3, 1)} {pp}</span></div>
              <div className="rl-dkpi">{t('Lojas comparáveis')}<b>612</b><span>{t('+{a} entradas · −{b} saídas', { a: 9, b: 14 })}</span></div>
            </div>
            <p className="rl-explain">{t('O laboratório cresceu +{a}% ({b} → {c} un./sem.), mas o mercado comparável cresceu +{d}% ({e} → {f}). A participação caiu porque outros produtos cresceram mais, não porque as vendas do laboratório diminuíram.', { a: fmt(5.5, 1), b: fmt(2293), c: fmt(2420), d: fmt(14.8, 1), e: fmt(4310), f: fmt(4950) })}</p>
            <div className="rl-acts" {...tg('acts')}>
              <header>
                <div><h5><JeanOrb size={16} />{t('Ações recomendadas')}</h5><p>{t('Até 5 ações curtas para o seu time, geradas pelo Dinn a partir deste cenário.')}</p></div>
                {phase >= 5
                  ? <span className="rl-gen line"><RefreshCw size={15} />{t('Gerar de novo')}</span>
                  : <span className="rl-gen" {...tg('gen')}>{phase === 4 ? <LoaderCircle size={15} className="rl-spin" /> : <JeanOrb size={15} />}{phase === 4 ? t('Gerando…') : t('Gerar recomendações')}</span>}
              </header>
              {phase === 4 && <div className="rl-skel"><i style={{ width: '40%' }} /><i style={{ width: '90%' }} /><i style={{ width: '75%' }} /></div>}
              {phase >= 5 && (
                <>
                  <div className="rl-act rl-in"><span>{t('Alta')}</span><b>{t('Investigar queda na Rede Farmacore')}</b><p style={{ margin: 0 }}><strong>{t('Por quê:')}</strong> {t('A Rede Farmacore registrou queda de {a}% nas vendas do laboratório (de 412 para 336 un./semana) e perda de 7 p.p. de participação.', { a: fmt(18.4, 1) })}</p><p style={{ margin: 0 }}><strong>{t('Como:')}</strong> {t('Verificar se houve ruptura de estoque ou mudança comercial na Rede Farmacore em Santa Catarina.')}</p></div>
                  <div className="rl-act rl-in" style={{ animationDelay: '.1s' }}><span>{t('Alta')}</span><b>{t('Analisar perda de share na Drogaria Serrana')}</b><p style={{ margin: 0 }}><strong>{t('Por quê:')}</strong> {t('O mercado cresceu {a}% na Drogaria Serrana, mas o laboratório cresceu {b}%. A participação caiu {c} p.p.', { a: fmt(19.9, 1), b: fmt(5.6, 1), c: fmt(6.1, 1) })}</p><p style={{ margin: 0 }}><strong>{t('Como:')}</strong> {t('Verificar se a perda vem de ações da concorrência ou de falta de mix.')}</p></div>
                  <div className="rl-act rl-in" style={{ animationDelay: '.2s' }}><span className="mid">{t('Média')}</span><b>{t('Acompanhar desempenho na Farmácias Vitalis')}</b><p style={{ margin: 0 }}><strong>{t('Por quê:')}</strong> {t('A Farmácias Vitalis cresceu {a}% nas vendas do laboratório (de 268 para 309 un./semana) e manteve a participação.', { a: fmt(15.2, 1) })}</p><p style={{ margin: 0 }}><strong>{t('Como:')}</strong> {t('Verificar quais produtos puxaram o crescimento na rede.')}</p></div>
                </>
              )}
            </div>
          </div>
        </aside>
      )}
    </RFrame>
  );
}

// ── Distribuição ───────────────────────────────────────────────────────────
const DAYS: [number, number][] = [[28, 10], [29, 10], [30, 10], [31, 10], [1, 11], [2, 11], [3, 11]];
const CD: [number, number] = [330, 290];
type Clu = [number, number, number, boolean];
const CLUS: Clu[] = [
  [-70, 42, 186, false], [72, 26, 40, false], [56, -72, 18, false], [-118, -44, 4, false], [-40, 116, 4, false],
  [150, 92, 23, true], [-162, 64, 12, true], [22, -165, 7, true],
];
const DIST_DEF: Def = {
  beats: [
    // Planos: tela inteira → histórico do CD → mapa da região → raio de 50 km → janela do CD → leitura do Dinn.
    { wait: 1100 },
    { shot: 'hist', phase: 1, wait: 1800 },
    { shot: 'wide', phase: 2, wait: 1300 },
    { shot: 'side', to: 'r50', click: true, phase: 3, wait: 300, cam: { at: 'map' } },
    { wait: 1700 },
    { to: 'cd', click: true, phase: 4, wait: 1600, cam: { at: 'cdk' } },
    { shot: 'read', wait: 2200 },
    { shot: 'wide', wait: 1500 },
  ],
  steps: [{ phase: 1, to: 'hist' }, { phase: 2, to: 'cd' }, { phase: 3, to: 'r50' }, { phase: 4, to: 'read' }],
  final: 4,
};

export function DistributionDemo2({ step, def = DIST_DEF }: DemoProps) {
  const l = useLocalDef(def);
  return <DistributionView key={l.lang} step={step} def={l.def} />;
}

function DistributionView({ step, def }: DemoProps) {
  const { t, lang } = useDemoT();
  const { app, phase, cur, tg } = useDemo(def!, step);
  const on = phase >= 1;
  const wide = phase >= 3;
  const d = wide ? 366 : 220;
  const yesterday = dateFmt(lang, 2, 11);
  return (
    <RFrame app={app} cur={cur} nav="dist" label={t('Tela Distribuição do Dinn: o histórico de estoque dos CDs carrega, o cursor amplia o raio do CD para 50 km e abre o CD com estoque, cobertura, preço e a leitura do Dinn.')}>
      <RPage top={<RTop crumb={t('Distribuição')} sub={t('Última atualização: {d} 10:53', { d: dateFmt(lang, 3, 11) })} />} y={phase >= 2 ? 446 : 0} filters={(
        <>
          <RSelect k="dist" tg={tg} label={t('Distribuidor')} w={160} /><RSelect k="prod" tg={tg} label={t('Produto')} value="Cefalgin cápsula 4..." w={190} />
          <RSelect k="rede" tg={tg} label={t('Rede')} w={140} /><RSelect k="uf" tg={tg} label={t('Estado')} w={140} /><RSelect k="city" tg={tg} label={t('Cidade')} w={140} />
          <RSave />
        </>
      )}>
        <div className="rl-kpis k3">
          <RKpi icon={<Factory size={20} />} label={t('CDs monitorados')}><Count v={3} on /></RKpi>
          <RKpi icon={<Package size={20} />} label={t('Total de Produtos')}><Count v={1} on /></RKpi>
          <RKpi icon={<Percent size={20} />} label={t('Cobertura de Distribuidores')}><Count v={66.7} on d={1} suffix="%" /></RKpi>
        </div>
        <RCard title={t('Histórico de estoque')} t={tg('hist')} sub={<><b>{t('Distribuidor:')}</b> {t('Todos os distribuidores')} · <b>{t('Produto:')}</b> {PROD}</>}
          aside={<span className="rl-aside"><RSeg items={[t('Diário'), t('Semanal')]} on={0} /><RDrop v={t('7 dias')} w={150} /></span>}>
          <p className="rl-legend"><span><i style={{ background: BRAND }} />DISTRIBUIDORA PLANALTO DF</span><span><i style={{ background: SKY }} />DISTRIBUIDORA PLANALTO TO</span><span><i style={{ background: AMBER }} />DISTRIBUIDORA PLANALTO GO</span></p>
          <RArea labels={DAYS.map(([dd, m]) => shortFmt(lang, dd, m))} ticks={[0, 20, 40, 60, 80]} on={on} w={980} h={250}
            series={[{ values: [42, 78, 74, 72, 72, 70, 65], color: BRAND }, { values: [18, 22, 25, 24, 21, 19, 20], color: SKY }, { values: [30, 31, 29, 33, 35, 34, 36], color: AMBER }]} />
        </RCard>
        <div className="rl-dist">
          <div className="rl-dist-map" {...tg('map')}>
            <span className="rl-map-img" style={{ backgroundImage: 'url(/app-screens/mapa-regiao.svg)' }} />
            <span className="rl-radius" style={{ left: CD[0], top: CD[1], width: d, height: d }} />
            {CLUS.filter((c) => !c[3] || wide).map(([dx, dy, n], i) => {
              const s = n > 100 ? 46 : n > 30 ? 38 : n > 10 ? 34 : 30;
              return <span key={`${dx}${dy}`} className="rl-clu" style={{ left: CD[0] + dx, top: CD[1] + dy, width: s, height: s, animationDelay: `${i * 0.05}s` }}>{n}</span>;
            })}
            <RPin x={CD[0] + 52} y={CD[1] + 84} k="low" size={28} />
            {[[-210, 250], [200, 236], [44, 262], [-260, 120]].map(([dx, dy]) => <RPin key={dx} x={CD[0] + dx} y={CD[1] + dy} k="off" size={26} />)}
            <span className={`rl-cd ${phase >= 4 ? 'on' : ''}`} style={{ left: CD[0], top: CD[1] }} {...tg('cd')}><Factory size={20} /></span>
            <span className="rl-mapnote">{t('Lojas no mapa: {a} de {b}', { a: wide ? 997 : 962, b: 997 })}</span>
          </div>
          <div className="rl-dist-side" {...tg('side')}>
            <h5>{t('Quais lojas mostrar')} <Info size={13} /></h5>
            <RDrop v={t('Proximidade + compra')} w={262} />
            <p>{t('Nem toda loja compradora aparece: parte dos CNPJs do histórico de compra não está no cadastro da Dinn.')}</p>
            <h5>{t('Raio da região')} <Info size={13} /></h5>
            <div className="rl-rad"><span>10 km</span><span className={!wide ? 'on' : ''}>30 km</span><span className={wide ? 'on' : ''} {...tg('r50')}>50 km</span></div>
            <h5>{t('Período')}</h5>
            <RDrop v={t('Últimos 7 dias')} w={262} />
            <h5>{t('Como ler o mapa')}</h5>
            <div className="rl-howto">
              <span><i style={{ background: AMBER }}><Factory size={12} /></i>{t('Distribuidor (CD)')}</span>
              <span><i style={{ background: GREEN }}><Store size={12} /></i>{t('Ponto de venda (PDV)')}</span>
              <span><i style={{ border: `2px dashed ${AMBER}` }} />{t('Região do CD (raio) · {n} km', { n: wide ? 50 : 30 })}</span>
            </div>
          </div>
        </div>
      </RPage>
      {phase >= 4 && (
        <>
          <div className="rl-veil" />
          <div className="rl-modal" style={{ left: 120, right: 120, top: 30, bottom: 30 }}>
            <div className="rl-modal-h" style={{ alignItems: 'center' }}>
              <div className="rl-cdh"><span><Factory size={24} /></span><div><b>DISTRIBUIDORA PLANALTO DF</b><small>Distribuidora Planalto · CD Brasília</small></div></div>
              <span className="rl-x"><X size={18} /></span>
            </div>
            <div className="rl-modal-b" style={{ display: 'grid', alignContent: 'start', gap: 14, background: '#fff' }}>
              <div className="rl-cdk" {...tg('cdk')}>
                <div><span style={{ color: BRAND }}><Warehouse size={18} /></span><p>{t('Estoque CD')} <b>65<small>{t('un.')}</small></b></p></div>
                <div><span style={{ color: RED }}><MapPin size={18} /></span><p>{t('Cobertura')} <b>{fmt(8.6, 1)}<small>{t('dias')}</small></b></p></div>
                <div><span style={{ color: GREEN }}><TrendingUp size={18} /></span><p>{t('Giro')} <b>{fmt(7.6, 1)}<small>{t('un./dia')}</small></b></p></div>
                <div><span style={{ color: SKY }}><Building2 size={18} /></span><p>{t('Estoque PDV')} <b>311<small>{t('un.')}</small></b></p></div>
              </div>
              <div className="rl-cd3">
                <div>
                  <h6>{t('Distribuição')} <Info size={13} /></h6>
                  <div className="rl-dpie"><span>{t('Com estoque: {n} lojas ({p}%)', { n: 177, p: 28 })}</span>
                    <RDonut on center="635" sub={t('lojas')} size={130} items={[{ label: t('Baixo'), value: 23, color: RED }, { label: t('Médio'), value: 3, color: AMBER }, { label: t('Alto'), value: 2, color: GREEN }, { label: t('Sem'), value: 72, color: GREY }]} />
                  </div>
                </div>
                <div>
                  <h6>{t('Preço')} <Info size={13} /></h6>
                  <div className="rl-pr"><span>{t('no CD')}<b>{brl(179.66)}</b></span><span>{t('nos PDVs da região')}<b>{brl(153.86)}</b></span></div>
                  <div className="rl-prbar"><i style={{ left: '28%' }} /></div>
                  <p style={{ margin: 0, fontSize: 12.5, color: '#52525b' }}>{t('Faixa de preço na região: {a} – {b}', { a: brl(139.9), b: brl(189.9) })}</p>
                </div>
                <div className="rl-read" {...tg('read')}>
                  <em><Lightbulb size={14} />{t('Leitura do Dinn')}</em>
                  <b>{t('O produto vende bem onde chega, mas ainda chega a poucas lojas.')}</b>
                  <p>{t('Apenas 28% das lojas da região têm o produto, mesmo com giro de {n} un./dia. Ampliar a distribuição pode capturar mais vendas.', { n: fmt(7.6, 1) })}</p>
                </div>
              </div>
              <div className="rl-sect-h" style={{ marginTop: 4 }}><h3 style={{ fontSize: 19 }}><Store size={20} /> {t('Lista de PDVs do interesse deste CD')}</h3><p style={{ fontSize: 13 }}><b style={{ color: '#0a0a0a', fontWeight: 500 }}>{t('CD:')}</b> DISTRIBUIDORA PLANALTO DF · {t('{n} lojas', { n: 336 })}</p></div>
              <table className="rl-table">
                <thead><tr><RTh sort active="up">{t('PDV')}</RTh><RTh sort>{t('Estoque')}</RTh><RTh>{t('Preço')}</RTh><RTh sort>{t('Giro')}</RTh><RTh sort>{t('Parados')}</RTh></tr></thead>
                <tbody>
                  {([['Drogaria Serrana Asa Sul - Loja 044', 'Drogaria Serrana', 'Indisponível', 0, '0 un.', 0], ['Rede Farmacore Taguatinga - Loja 012', 'Rede Farmacore', '2–5 un', 152.9, '1 un.', 3], ['Farmácias Vitalis Águas Claras', 'Farmácias Vitalis', '4–9 un', 154.9, '2 un.', 1]] as [string, string, string, number, string, number][]).map(([n, net, s, p, g, dd]) => (
                    <tr key={n}>
                      <td className="rl-name"><b>{n}</b><small>{net}</small></td>
                      <td><span className="rl-aside"><RStock v={s === 'Indisponível' ? t(s) : unit(lang, s)} k={s === 'Indisponível' ? 'off' : 'mid'} /><span className="rl-est"><Calendar size={12} />{t('Estimativa de ontem,')}<br />{yesterday}</span><RConsult /><RReport /></span></td>
                      <td>{p ? brl(p) : '--'}</td><td>{unit(lang, g)}</td><td><RDays d={dd} of={7} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </RFrame>
  );
}

// ── Jean (conversa) ────────────────────────────────────────────────────────
const JQ1 = 'Em quais cidades a ruptura de Cefalgin cápsula 400mg mais piorou nas últimas 4 semanas?';
const JQ2 = 'Acompanha isso toda segunda e me chama no WhatsApp se alguma cidade passar de 40%.';
// cidade, ruptura antes, depois, PDVs, variação em p.p.
const CITIES: [string, number, number, number, number][] = [
  ['Joinville (SC)', 31.2, 47.8, 18, 16.6], ['Londrina (PR)', 28.4, 41.0, 14, 12.6],
  ['Uberlândia (MG)', 22.9, 33.1, 12, 10.2], ['Campinas (SP)', 25.0, 32.7, 31, 7.7],
  ['Feira de Santana (BA)', 18.3, 25.4, 11, 7.1],
];
const CONVS: [string, string[]][] = [
  ['Hoje', ['Cidades com pior ruptura de Cefalgin']],
  ['Últimos 7 dias', ['Ganhadores de participação no Sul', 'Estoque de Alergimax em Campinas', 'Preço do Gastrolev por rede']],
  ['Mais antigas', ['Mudanças recentes no Brasil', 'Redes com maior ruptura em SP', 'Cobertura dos CDs do Centro-Oeste', 'Evolução da ruptura em 90 dias', 'Quem ganhou participação no PR']],
];
const JEAN_DEF: Def = {
  beats: [
    // Planos: tela inteira → caixa de pergunta → resposta com o ranking → pedido de acompanhamento → combinado ativo.
    { wait: 1300 },
    { shot: 'composer', to: 'composer', click: true, type: ['q', JQ1], phase: 1, wait: 200 },
    { to: 'send', click: true, phase: 2, wait: 900, cam: { at: 'log' } },
    { phase: 3, wait: 900 },
    { phase: 4, wait: 2300, cam: { at: 'rank' } },
    { phase: 5, wait: 1500, cam: { at: 'log' } },
    { shot: 'composer', to: 'composer', click: true, type: ['q2', JQ2], phase: 6, wait: 200 },
    { to: 'send', click: true, phase: 7, wait: 1000, cam: { at: 'log' } },
    { phase: 8, wait: 1500, cam: { at: 'deal' } },
    { to: 'activate', click: true, phase: 9, wait: 2200 },
    { shot: 'wide', wait: 1500 },
  ],
  steps: [{ phase: 1, to: 'composer' }, { phase: 4, to: 'rank' }, { phase: 8, to: 'deal' }, { phase: 9, to: 'status' }],
  final: 9,
};

export function JeanDemo2({ step, def = JEAN_DEF }: DemoProps) {
  const l = useLocalDef(def);
  return <JeanView key={l.lang} step={step} def={l.def} />;
}

function JeanView({ step, def }: DemoProps) {
  const { t, lang } = useDemoT();
  const { app, phase, typed, cur, tg } = useDemo(def!, step);
  const q = phase < 2 ? typed.q ?? (phase >= 1 ? t(JQ1) : '') : phase >= 5 && phase < 7 ? typed.q2 ?? (phase === 6 ? t(JQ2) : '') : '';
  const sd = (d: number, m: number) => shortFmt(lang, d, m);
  const pct = (n: number) => `${fmt(n, 1)}%`;
  const think = () => <p className="rl-think rl-in"><JeanOrb size={18} />{t('Consultando os dados')}<i /><i /><i /></p>;
  return (
    <RFrame app={app} cur={cur} nav="jean" label={t('Tela da Jean no Dinn: a pessoa pergunta onde a ruptura mais piorou, a Jean responde com as cidades, o recorte e a data, e depois aceita acompanhar o tema toda semana.')}>
      <div className="rl-page">
        <header className="rl-top"><PanelLeft size={18} className="rl-top-ico" /></header>
        <div className="rl-chat">
          <aside className="rl-convs">
            <span className="rl-newc"><SquarePen size={17} />{t('Nova conversa')}</span>
            <span className="rl-tabs2"><span className="on">{t('Todas')}</span><span>{t('Favoritas')}</span></span>
            {CONVS.map(([g, list]) => (
              <div key={g} style={{ display: 'grid', gap: 2 }}>
                <em>{t(g)}</em>
                {list.map((c, i) => <p key={c} className={g === 'Hoje' && i === 0 && phase >= 2 ? 'on' : ''}>{t(c)}</p>)}
              </div>
            ))}
          </aside>
          <div className="rl-thread">
            <div className="rl-log" {...tg('log')}>
              {phase < 2 && (
                <div style={{ margin: 'auto 0', display: 'grid', justifyItems: 'center', gap: 10, textAlign: 'center' }}>
                  <JeanOrb size={42} />
                  <b style={{ fontSize: 22, fontWeight: 500 }}>{t('Olá, Ana. O que você quer saber?')}</b>
                  <span style={{ fontSize: 14, color: '#737373' }}>{t('Pergunte sobre estoque, ruptura, preço, mercado e distribuição.')}</span>
                </div>
              )}
              {phase >= 2 && <p className="rl-u rl-in">{t(JQ1)}</p>}
              {phase === 2 && think()}
              {phase >= 3 && (
                <div className="rl-b rl-in">
                  <span><JeanOrb size={18} /></span>
                  <div>
                    <div className="rl-bcard">
                      <header>{t('Produtos encontrados')}</header>
                      <table><thead><tr><th>{t('Produto')}</th><th>SKU</th><th>EAN</th></tr></thead>
                        <tbody><tr><td>{PROD}</td><td>CFG-4001-30</td><td>7890000000017</td></tr></tbody></table>
                    </div>
                    {phase >= 4 && (
                      <div className="rl-bcard rl-in" {...tg('rank')}>
                        <header>{t('Onde a ruptura mais piorou · cidades · {a} × {b}', { a: `${sd(6, 10)}–${sd(2, 11)}`, b: `${sd(8, 9)}–${sd(5, 10)}` })}</header>
                        <div className="rl-rk">
                          <small>{t('No recorte todo:')} {pct(24.1)} → <b style={{ color: '#0a0a0a' }}>{pct(26.3)}</b> <span style={{ color: '#dc2626' }}>↗ +{fmt(2.2, 1)} {t('p.p.')}</span></small>
                          {CITIES.map(([c, a, b, n, dl], i) => (
                            <div key={c} className="rl-in" style={{ animationDelay: `${i * 0.08}s` }}><span>{i + 1}</span><p>{c}<small>{pct(a)} → {pct(b)} · {n} {t('PDVs')}</small></p><b>↗ +{fmt(dl, 1)} {t('p.p.')}</b></div>
                          ))}
                        </div>
                        <div className="rl-bfoot">{t('Dado de {d}', { d: dateFmt(lang, 2, 11) })} <u>{t('Estimado')}</u> {t('Só entram cidades com pelo menos 10 PDVs monitorados nos dois períodos.')}</div>
                      </div>
                    )}
                    {phase >= 5 && (
                      <p className="rl-in"><Rich text={t('A ruptura de **{p}** piorou mais em **Joinville (SC)**: subiu **{d} p.p.**, de {a} para {b}, com 18 PDVs monitorados. Critério: ruptura média por cidade nas últimas 4 semanas contra as 4 anteriores.', { p: PROD, d: fmt(16.6, 1), a: pct(31.2), b: pct(47.8) })} /></p>
                    )}
                  </div>
                </div>
              )}
              {phase >= 7 && <p className="rl-u rl-in">{t(JQ2)}</p>}
              {phase === 7 && think()}
              {phase >= 8 && (
                <div className="rl-b rl-in">
                  <span><JeanOrb size={18} /></span>
                  <div>
                    <p>{t('Combinado. Confira antes de eu começar.')}</p>
                    <div className="rl-bcard rl-deal" {...tg('deal')}>
                      <header><span>{t('Acompanhamento')}</span>{phase >= 9 ? <span className="rl-badge low rl-in" {...tg('status')}>✓ {t('Ativo')}</span> : <span className="rl-badge mod">{t('Rascunho')}</span>}</header>
                      <dl>
                        <div><dt>{t('Objetivo')}</dt><dd>{t('Avisar quando a ruptura de {p} passar de 40% em uma cidade', { p: PROD })}</dd></div>
                        <div><dt>{t('Recorte')}</dt><dd>{t('Joinville, Londrina, Uberlândia, Campinas e Feira de Santana')}</dd></div>
                        <div><dt>{t('Fonte')}</dt><dd>Dinn (D-1)</dd></div>
                        <div><dt>{t('Quando')}</dt><dd>{t('Toda segunda às 8h')}</dd></div>
                        <div><dt>{t('Canal')}</dt><dd>WhatsApp</dd></div>
                      </dl>
                      <footer><span className="rl-gen line">{t('Ajustar')}</span><span className="rl-gen" {...tg('activate')}>{phase >= 9 ? <><Check size={15} />{t('Acompanhamento ativo')}</> : t('Ativar acompanhamento')}</span></footer>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="rl-composer" {...tg('composer')}>
              <span className={q ? '' : 'ph'}>{q || t('Faça uma pergunta de acompanhamento...')}</span>
              <div><Plus size={18} /><i className={q ? 'ready' : ''} {...tg('send')}><ArrowUp size={17} /></i></div>
            </div>
            <p className="rl-disc">{t('A IA pode errar. Verifique os dados importantes.')}</p>
          </div>
        </div>
      </div>
    </RFrame>
  );
}
