import { ArrowRight } from 'lucide-react';
import { createContext, useContext, type ComponentType, type ReactNode } from 'react';
import { useTranslation } from '@/i18n/useTranslation';
import type { Viz } from '@/data/customers';
import { IlGovern, IlLaunch, IlPricing, IlSac, IlSupply, IlTrade } from '@/components/illustrations/areas';
import { IlLayers } from '@/components/illustrations/resources';
import { AppScreen } from './AppScreens';
import { DonutSvg, fmt, LineSvg, useInView } from './vizPrimitives';

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

const LOCALES: Record<string, string> = { pt: 'pt-BR', en: 'en-US', es: 'es-ES' };
const LocaleCtx = createContext('pt-BR');

const DONUT_COLORS = [
  'var(--primary)',
  'var(--brand-orange)',
  'var(--brand-lime)',
  'color-mix(in oklab, var(--primary) 38%, white)',
  'color-mix(in oklab, var(--foreground) 16%, white)',
];

function Card({ title, sub, note, children }: { title: string; sub?: string; note?: string; children: ReactNode }) {
  const [ref, on] = useInView<HTMLElement>();
  return (
    <figure ref={ref} className={`cv-card ${on ? 'is-in' : ''}`}>
      <figcaption className="cv-head"><strong>{title}</strong>{sub && <span>{sub}</span>}</figcaption>
      {children}
      {note && <p className="cv-note">{note}</p>}
    </figure>
  );
}

function Bars({ v }: { v: Extract<Viz, { kind: 'bars' }> }) {
  const locale = useContext(LocaleCtx);
  const max = v.max ?? Math.max(...v.items.map((i) => i.value));
  return (
    <Card title={v.title} sub={v.sub} note={v.note}>
      <ul className="cv-bars">
        {v.items.map((it, i) => (
          <li key={it.label} className={it.hot ? 'is-hot' : ''} style={{ ['--w' as string]: `${(it.value / max) * 100}%`, ['--d' as string]: `${i * 90}ms` }}>
            <span className="cv-bar-label">{it.label}</span>
            <span className="cv-bar-track"><span className="cv-bar-fill" /></span>
            <span className="cv-bar-val">{it.display ?? `${fmt(it.value, v.digits ?? (Number.isInteger(it.value) ? 0 : 1), locale)}${v.unit ?? ''}`}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}

function Donut({ v }: { v: Extract<Viz, { kind: 'donut' }> }) {
  const locale = useContext(LocaleCtx);
  const [ref, on] = useInView<HTMLDivElement>();
  const total = v.items.reduce((s, i) => s + i.value, 0) || 1;
  return (
    <Card title={v.title} sub={v.sub} note={v.note}>
      <div ref={ref} className="cv-donut-wrap">
        <DonutSvg items={v.items} colors={DONUT_COLORS} center={v.center} on={on} />
        <ul className="cv-legend">
          {v.items.map((it, i) => (
            <li key={it.label}>
              <i style={{ background: DONUT_COLORS[i % DONUT_COLORS.length] }} />
              <span>{it.label}</span>
              <b>{fmt((it.value / total) * 100, 1, locale)}%</b>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
}

function Line({ v }: { v: Extract<Viz, { kind: 'line' }> }) {
  const locale = useContext(LocaleCtx);
  const [ref, on] = useInView<HTMLDivElement>();
  const colors = ['var(--primary)', 'var(--brand-orange)'];
  return (
    <Card title={v.title} sub={v.sub} note={v.note}>
      <div ref={ref}>
        <LineSvg
          labels={v.labels}
          series={v.series.map((s, i) => ({ ...s, color: colors[i % colors.length] }))}
          on={on}
          unit={v.unit}
          digits={v.digits}
          locale={locale}
          area
        />
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
      <div className="cv-screen-frame"><AppScreen kind={v.screen} /></div>
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
