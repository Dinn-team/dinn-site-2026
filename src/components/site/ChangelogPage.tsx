import { useMemo, useState } from 'react';
import { useTranslation } from '@/i18n/useTranslation';
import { Rich } from '@/lib/rich-text';
import { PATHS } from '@/lib/site-map';
import raw from '@/data/changelog.json';
import { PageCta, PageHero } from './PageShell';

// Changelog: linha do tempo do que entrou no ar. Os textos vêm da camada de
// tratamento (src/data/changelog.json): cada publicação em produção é
// reescrita em linguagem simples e entra com status "published" depois de
// revisada. Detalhes técnicos internos (repositório, número de PR) nunca são
// exibidos.

type Lang = 'pt' | 'en' | 'es';
type Loc = Record<Lang, string>;
type Entry = {
  id: string;
  date: string;
  area: 'platform' | 'site';
  status: 'published' | 'draft';
  title: Loc;
  summary: Loc;
  highlights: Record<Lang, string[]>;
};

const LOCALE: Record<Lang, string> = { pt: 'pt-BR', en: 'en-US', es: 'es-419' };
const AREA_COLOR: Record<Entry['area'], { fg: string; bg: string }> = {
  platform: { fg: 'var(--primary)', bg: 'rgba(86,37,242,0.09)' },
  site: { fg: '#047857', bg: '#D1FAE5' },
};

const entries = (raw.entries as Entry[])
  .filter((e) => e.status === 'published')
  .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));

export function ChangelogPage() {
  const { t, lang } = useTranslation();
  const l = (lang as Lang) in LOCALE ? (lang as Lang) : 'pt';
  const [filter, setFilter] = useState<'all' | Entry['area']>('all');

  const fmtDay = useMemo(() => new Intl.DateTimeFormat(LOCALE[l], { day: '2-digit', month: 'long', year: 'numeric', timeZone: 'UTC' }), [l]);
  const fmtMonth = useMemo(() => new Intl.DateTimeFormat(LOCALE[l], { month: 'long', year: 'numeric', timeZone: 'UTC' }), [l]);

  const visible = entries.filter((e) => filter === 'all' || e.area === filter);
  const groups = useMemo(() => {
    const out: { key: string; label: string; items: Entry[] }[] = [];
    for (const e of visible) {
      const key = e.date.slice(0, 7);
      let g = out.find((x) => x.key === key);
      if (!g) {
        const m = fmtMonth.format(new Date(`${e.date}T00:00:00Z`));
        g = { key, label: m.charAt(0).toUpperCase() + m.slice(1), items: [] };
        out.push(g);
      }
      g.items.push(e);
    }
    return out;
  }, [visible, fmtMonth]);

  const filters: { id: 'all' | Entry['area']; label: string }[] = [
    { id: 'all', label: t('changelog.filters.all') as string },
    { id: 'platform', label: t('changelog.filters.platform') as string },
    { id: 'site', label: t('changelog.filters.site') as string },
  ];
  const updated = fmtDay.format(new Date(`${raw.updatedAt}T00:00:00Z`));

  return (
    <div className="sp">
      <PageHero
        eyebrow={t('changelog.hero.eyebrow')}
        title={t('changelog.hero.title')}
        lead={t('changelog.hero.lead')}
        back={{ label: t('changelog.back'), href: PATHS.resources }}
      >
        <div className="cl-filters" role="group" aria-label={t('changelog.filters.label')}>
          {filters.map((f) => (
            <button key={f.id} type="button" className={filter === f.id ? 'is-on' : ''} aria-pressed={filter === f.id} onClick={() => setFilter(f.id)}>
              {f.label}
            </button>
          ))}
        </div>
        <p className="cl-meta">{visible.length} {t('changelog.count')} · {t('changelog.updated')} {updated}</p>
      </PageHero>

      <section className="sp-section" aria-label={t('changelog.hero.eyebrow')}>
        <div className="wrap cl-layout">
          <nav className="cl-rail" aria-label={t('changelog.months')}>
            <ul>
              {groups.map((g) => <li key={g.key}><a href={`#m-${g.key}`}>{g.label}</a></li>)}
            </ul>
          </nav>

          <div className="cl-list">
            {groups.length === 0 && <p className="sp-body">{t('changelog.empty')}</p>}
            {groups.map((g) => (
              <section key={g.key} id={`m-${g.key}`} className="cl-month" aria-labelledby={`h-${g.key}`}>
                <h2 id={`h-${g.key}`}>{g.label}</h2>
                <ol className="cl-entries">
                  {g.items.map((e) => {
                    const c = AREA_COLOR[e.area];
                    const bullets = e.highlights?.[l]?.length ? e.highlights[l] : e.highlights?.pt ?? [];
                    return (
                      <li key={e.id} className="cl-entry">
                        <span className="cl-dot" style={{ background: c.fg }} aria-hidden="true" />
                        <div className="cl-card">
                          <div className="cl-card-head">
                            <time dateTime={e.date}>{fmtDay.format(new Date(`${e.date}T00:00:00Z`))}</time>
                            <span className="cl-tag" style={{ color: c.fg, background: c.bg }}>
                              {t(`changelog.filters.${e.area}`)}
                            </span>
                          </div>
                          <h3><Rich text={e.title[l] || e.title.pt} /></h3>
                          <p>{e.summary[l] || e.summary.pt}</p>
                          {bullets.length > 0 && (
                            <ul>
                              {bullets.map((b) => <li key={b}>{b}</li>)}
                            </ul>
                          )}
                        </div>
                      </li>
                    );
                  })}
                </ol>
              </section>
            ))}
            <p className="cl-note">{t('changelog.note')}</p>
          </div>
        </div>
      </section>

      <PageCta title={t('pageCta.title')} desc={t('pageCta.desc')} button={t('pageCta.button')} />
    </div>
  );
}
