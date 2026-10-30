import { Check } from 'lucide-react';
import { useTranslation } from '@/i18n/useTranslation';
import { blogPath } from '@/i18n/routes';
import { Rich } from '@/lib/rich-text';
import { PATHS } from '@/lib/site-map';
import { contactUrl } from '@/lib/links';
import { ChatWidget2 } from '@/components/home2/ChatWidget2';
import { IlBlog, IlCases, IlChangelog } from '@/components/illustrations/resources';
import { ClosingCard, PageCta, PageHero } from './PageShell';

// Hub de Recursos no padrão v2 e na estrutura dos Planos: três portas de
// entrada em colunas com fio fino (blog, casos e novidades), cada uma com uma
// ilustração animada no hover. O conteúdo mora em cada destino.

type Card = {
  id: 'blog' | 'cases' | 'changelog';
  type: string;
  title: string;
  desc: string;
  chips: string[];
  cta: string;
  href: string;
};

const ART = { blog: IlBlog, cases: IlCases, changelog: IlChangelog };

export function ResourcesHub() {
  const { t, lang } = useTranslation();
  const items = (t('resources.items') as Card[]) ?? [];

  return (
    <div className="h2 pl rs">
      <header className="h2-hero pl-hero">
        <div className="h2-wrap">
          <div className="h2-hero-grid">
            <h1 className="h2-hero-title"><Rich text={t('resources.hero.title') as string} /></h1>
            <div className="h2-hero-side">
              <p className="h2-hero-sub">{t('resources.hero.lead')}</p>
            </div>
          </div>
        </div>
      </header>

      <section className="pl-plans" aria-label={t('resources.hero.eyebrow') as string}>
        <div className="h2-wrap">
          <div className="pl-grid">
            <div className="pl-lead">
              <p className="pl-lead-title">{t('resources.hero.eyebrow')}</p>
            </div>
            {items.map((it) => {
              const Art = ART[it.id];
              return (
                <article key={it.id} className="pl-col">
                  <div className="pl-card rs-card il-host">
                    <span className="rs-art"><Art /></span>
                    <h3>{it.type}</h3>
                    <p>{it.title}</p>
                  </div>
                  <a className="btn btn-primary pl-cta" href={it.href === '/blog' ? blogPath(lang) : it.href}>{it.cta}</a>
                  <p className="pl-from">{it.desc}</p>
                  <ul className="pl-list">
                    {it.chips.map((c) => (
                      <li key={c}>
                        <Check size={14} strokeWidth={2.2} aria-hidden="true" />
                        <span className="pl-v">{c}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <ClosingCard
        title={t('pageCta.title') as string}
        desc={t('pageCta.desc') as string}
        button={t('pageCta.button') as string}
        origin="recursos"
        gradient="g03"
      />
      <ChatWidget2 />
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
