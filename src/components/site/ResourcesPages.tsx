import { ArrowUpRight } from 'lucide-react';
import { useTranslation } from '@/i18n/useTranslation';
import { PATHS } from '@/lib/site-map';
import { PageCta, PageHero } from './PageShell';

type Item = { type: string; title: string; desc: string; href: string; updated: string };

export function ResourcesHub() {
  const { t } = useTranslation();
  const items = (t('resources.items') as Item[]) ?? [];
  return (
    <div className="sp">
      <PageHero eyebrow={t('resources.hero.eyebrow')} title={t('resources.hero.title')} lead={t('resources.hero.lead')} />
      <section className="sp-section" aria-label={t('resources.hero.eyebrow')}>
        <div className="wrap">
          <div className="sp-grid is-three">
            {items.map((it) => (
              <a key={it.href} className="sp-card sp-resource" href={it.href}>
                <span className="sp-tag">{it.type}</span>
                <h2>{it.title}</h2>
                <p>{it.desc}</p>
                {it.updated && <span className="sp-meta">{it.updated}</span>}
                <span className="sp-area-go">{t('resources.openItem')}<ArrowUpRight size={15} aria-hidden="true" /></span>
              </a>
            ))}
          </div>
        </div>
      </section>
      <PageCta title={t('pageCta.title')} desc={t('pageCta.desc')} button={t('pageCta.button')} />
    </div>
  );
}

type Section = { heading: string; body: string };
type GuideData = {
  eyebrow: string;
  title: string;
  lead: string;
  sections: Section[];
  tableTitle: string;
  table: { columns: string[]; rows: string[][] };
  limitsTitle: string;
  limits: string[];
};
type Related = { label: string; href: string };

export function GuidePage({ slug }: { slug: string }) {
  const { t } = useTranslation();
  const guide = t(`resources.guide.slugs.${slug}`) as unknown as GuideData | string;
  const related = (t('resources.guide.related') as Related[]) ?? [];
  if (!guide || typeof guide === 'string') return null;

  return (
    <div className="sp">
      <PageHero
        eyebrow={guide.eyebrow}
        title={guide.title}
        lead={guide.lead}
        back={{ label: t('resources.guide.back'), href: PATHS.resources }}
      >
        <p className="sp-byline">{t('resources.guide.author')} · {t('resources.guide.updated')}</p>
      </PageHero>

      <article className="sp-section">
        <div className="wrap sp-article">
          {guide.sections.map((s) => (
            <section key={s.heading}>
              <h2>{s.heading}</h2>
              <p>{s.body}</p>
            </section>
          ))}

          <section>
            <h2>{guide.tableTitle}</h2>
            <div className="sp-table-wrap">
              <table className="sp-table">
                <thead>
                  <tr>{guide.table.columns.map((c) => <th key={c} scope="col">{c}</th>)}</tr>
                </thead>
                <tbody>
                  {guide.table.rows.map((r) => (
                    <tr key={r[0]}>{r.map((c, i) => (i === 0 ? <th key={i} scope="row">{c}</th> : <td key={i}>{c}</td>))}</tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2>{guide.limitsTitle}</h2>
            <ul className="sp-limits">
              {guide.limits.map((l) => <li key={l}>{l}</li>)}
            </ul>
          </section>

          <aside className="sp-related">
            <h2>{t('resources.guide.relatedTitle')}</h2>
            <ul className="sp-links">
              {related.map((r) => <li key={r.href}><a href={r.href}>{r.label}</a></li>)}
            </ul>
          </aside>
        </div>
      </article>

      <PageCta title={t('pageCta.title')} desc={t('pageCta.desc')} button={t('pageCta.button')} />
    </div>
  );
}
