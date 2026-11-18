import { ArrowRight } from 'lucide-react';
import { createContext, useContext, type ComponentType, type ReactNode } from 'react';
import { useTranslation } from '@/i18n/useTranslation';
import type { Viz } from '@/data/customers';
import { IlGovern, IlLaunch, IlPricing, IlSac, IlSupply, IlTrade } from '@/components/illustrations/areas';
import { IlLayers } from '@/components/illustrations/resources';
import { ProductScreen } from './ProductScreen';
import { LocatorDemo2, MarketDemo2 } from './RealMapDemos';
import { RuptureDemo } from './RealHomeDemos';
import { useInView } from './vizPrimitives';
import { Columns, DonutChart, HexMap, KpiCards, LineChart, Lollipops, PillBars, Rings } from './ChartKit';

// Gráficos, telas do produto e ilustrações dos cases de cliente. Os dados vêm de
// `viz` em src/data/customers.ts. Tudo é SVG ou CSS, sem biblioteca, e anima ao
// entrar na tela (sem animação quando o usuário pede menos movimento).

const ART: Record<string, ComponentType<{ label?: string }>> = {
  supply: IlSupply,
  sac: IlSac,
  trade: IlTrade,
  launch: IlLaunch,
  govern: IlGovern,
  pricing: IlPricing,
  layers: IlLayers,
};

// Tela animada do Dinn de cada case (padrão em docs/padrao-telas-animadas.md).
const SCREENS = { home: RuptureDemo, locator: LocatorDemo2, market: MarketDemo2 };

const LOCALES: Record<string, string> = { pt: 'pt-BR', en: 'en-US', es: 'es-ES' };
const LocaleCtx = createContext('pt-BR');

function Card({ title, sub, note, wide, children }: { title: string; sub?: string; note?: string; wide?: boolean; children: ReactNode }) {
  const [ref, on] = useInView<HTMLElement>();
  return (
    <figure ref={ref} className={`cv-card ${on ? 'is-in' : ''} ${wide ? 'is-wide' : ''}`}>
      <figcaption className="cv-head"><strong>{title}</strong>{sub && <span>{sub}</span>}</figcaption>
      {children}
      {note && <p className="cv-note">{note}</p>}
    </figure>
  );
}

const BARS = { pills: PillBars, columns: Columns, rings: Rings, kpis: KpiCards, lollipop: Lollipops, hexmap: HexMap };

function Bars({ v }: { v: Extract<Viz, { kind: 'bars' }> }) {
  const locale = useContext(LocaleCtx);
  const [ref, on] = useInView<HTMLDivElement>();
  const Chart = BARS[v.as ?? 'pills'];
  return (
    <Card title={v.title} sub={v.sub} note={v.note}>
      <div ref={ref}><Chart items={v.items} max={v.max} unit={v.unit} digits={v.digits} locale={locale} on={on} /></div>
    </Card>
  );
}

function Donut({ v }: { v: Extract<Viz, { kind: 'donut' }> }) {
  const locale = useContext(LocaleCtx);
  const [ref, on] = useInView<HTMLDivElement>();
  return (
    <Card title={v.title} sub={v.sub} note={v.note}>
      <div ref={ref}><DonutChart items={v.items} center={v.center} locale={locale} on={on} /></div>
    </Card>
  );
}

function Line({ v }: { v: Extract<Viz, { kind: 'line' }> }) {
  const locale = useContext(LocaleCtx);
  const [ref, on] = useInView<HTMLDivElement>();
  return (
    <Card title={v.title} sub={v.sub} note={v.note}>
      <div ref={ref}>
        <LineChart title={v.title} labels={v.labels} series={v.series} unit={v.unit} digits={v.digits} locale={locale} on={on} />
      </div>
    </Card>
  );
}

function Compare({ v }: { v: Extract<Viz, { kind: 'compare' }> }) {
  return (
    <Card title={v.title} note={v.note}>
      <div className="cv-compare">
        <div><strong>{v.from.value}</strong><span>{v.from.label}</span></div>
        <ArrowRight size={28} aria-hidden="true" />
        <div className="is-to"><strong>{v.to.value}</strong><span>{v.to.label}</span></div>
      </div>
    </Card>
  );
}

function Timeline({ v }: { v: Extract<Viz, { kind: 'timeline' }> }) {
  return (
    <Card title={v.title}>
      <ol className="cv-timeline">
        {v.steps.map((s, i) => (
          <li key={s.date + s.label} style={{ ['--d' as string]: `${i * 110}ms` }}>
            <b>{s.date}</b>
            <span>{s.label}</span>
          </li>
        ))}
      </ol>
    </Card>
  );
}

function Screen({ v }: { v: Extract<Viz, { kind: 'screen' }> }) {
  const { t } = useTranslation();
  return (
    <figure className="cv-screen">
      <div className="cv-screen-frame"><ProductScreen demo={SCREENS[v.screen]} /></div>
      <figcaption>{v.caption} <em>{t('clients.page.illustrative')}</em></figcaption>
    </figure>
  );
}

function Art({ v }: { v: Extract<Viz, { kind: 'art' }> }) {
  const Il = ART[v.art] ?? IlLayers;
  return (
    <figure className="cv-art il-host" style={{ backgroundImage: `url(/gradients/${v.g ?? 'web/lilas-azul'}.avif)` }}>
      <Il />
      {v.caption && <figcaption>{v.caption}</figcaption>}
    </figure>
  );
}

export function VizGroup({ items }: { items: Viz[] }) {
  const { lang } = useTranslation();
  return (
    <LocaleCtx.Provider value={LOCALES[lang] ?? 'pt-BR'}>
    <div className="cv-group">
      {items.map((v, i) => {
        switch (v.kind) {
          case 'bars': return <Bars key={i} v={v} />;
          case 'donut': return <Donut key={i} v={v} />;
          case 'line': return <Line key={i} v={v} />;
          case 'compare': return <Compare key={i} v={v} />;
          case 'timeline': return <Timeline key={i} v={v} />;
          case 'screen': return <Screen key={i} v={v} />;
          case 'art': return <Art key={i} v={v} />;
        }
      })}
    </div>
    </LocaleCtx.Provider>
  );
}
