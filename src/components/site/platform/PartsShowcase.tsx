import type { ReactNode } from 'react';
import { useTranslation } from '@/i18n/useTranslation';
import { SectionHead } from '../PageShell';
import { StockDemo } from './StockDemo';
import { ManagerDemo } from './ManagerDemo';
import { InsightsDemo } from './InsightsDemo';
import { McpDemo } from './McpDemo';
import { ConectaDemo } from './ConectaDemo';

// As cinco partes, cada uma com uma demo viva do que ela faz com os dados.
// Cartões grandes, texto de um lado e a demo do outro (alternando); em telas
// estreitas a demo vem logo abaixo do texto. O "o que não é" fica em cada um.

type Part = { tag: string; title: string; desc: string; not: string };

export function PartsShowcase() {
  const { t } = useTranslation();
  const parts = (t('platform.parts.items') as Part[]) ?? [];
  const demos: ReactNode[] = [<StockDemo key="s" />, <ManagerDemo key="m" />, <InsightsDemo key="i" />, <McpDemo key="p" />, <ConectaDemo key="c" />];

  return (
    <section className="sp-section is-alt pf-parts-section" aria-labelledby="sp-parts">
      <div className="wrap">
        <SectionHead id="sp-parts" title={t('platform.parts.title')} intro={t('platform.parts.intro')} />
        <div className="pf-parts">
          {parts.map((p, i) => (
            <article key={p.tag} className="pf-part" style={{ ['--i' as string]: i }}>
              <div className="pf-part-copy">
                <span className="pf-part-n" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                <span className="sp-tag">{p.tag}</span>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <p className="pf-part-not"><strong>{t('platform.parts.notLabel')}:</strong> {p.not}</p>
              </div>
              <div className="pf-part-demo">{demos[i]}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
