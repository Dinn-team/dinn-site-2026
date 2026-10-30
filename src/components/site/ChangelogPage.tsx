import { useMemo, useState } from 'react';
import { useTranslation } from '@/i18n/useTranslation';
import { Rich } from '@/lib/rich-text';
import { PATHS } from '@/lib/site-map';
import raw from '@/data/changelog.json';
import { ChatWidget2 } from '@/components/home2/ChatWidget2';
import { ClosingCard } from './PageShell';

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
const AREA_DOT: Record<Entry['area'], string> = { platform: 'var(--primary)', site: '#10B981' };

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
    <div className="h2 cx">
      <header className="h2-hero cx-hero">
        <div className="h2-wrap">
          <div className="h2-hero-grid">
            <h1 className="h2-hero-title"><Rich text={t('changelog.hero.title') as string} /></h1>
            <div className="h2-hero-side">
              <p className="h2-hero-sub">{t('changelog.hero.lead')}</p>
              <div className="h2-actions">
                <a className="h2-link" href={PATHS.resources}>← {t('changelog.back')}</a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="h2-wrap cx-bar">
        <div className="cx-filters" role="group" aria-label={t('changelog.filters.label') as string}>
          {filters.map((f) => (
            <button key={f.id} type="button" className={filter === f.id ? 'is-on' : ''} aria-pressed={filter === f.id} onClick={() => setFilter(f.id)}>
              {f.label}
            </button>
          ))}
        </div>
        <p className="cx-meta">{visible.length} {t('changelog.count')} · {t('changelog.updated')} {updated}</p>
      </div>

      <section className="cx-list h2-wrap" aria-label={t('changelog.hero.eyebrow') as string}>
        {groups.length === 0 && <p className="cx-empty">{t('changelog.empty')}</p>}
        {groups.map((g) => (
          <section key={g.key} id={`m-${g.key}`} className="cx-month" aria-labelledby={`h-${g.key}`}>
            <h2 id={`h-${g.key}`}>{g.label}</h2>
            <ol className="cx-entries">
              {g.items.map((e) => {
                const bullets = e.highlights?.[l]?.length ? e.highlights[l] : e.highlights?.pt ?? [];
                return (
                  <li key={e.id} className="cx-entry">
                    <time dateTime={e.date}>{fmtDay.format(new Date(`${e.date}T00:00:00Z`))}</time>
                    <div>
                      <span className="cx-tag"><i style={{ background: AREA_DOT[e.area] }} aria-hidden="true" />{t(`changelog.filters.${e.area}`)}</span>
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
        <p className="cx-note">{t('changelog.note')}</p>
      </section>

      <ClosingCard
        title={t('pageCta.title') as string}
        desc={t('pageCta.desc') as string}
        button={t('pageCta.button') as string}
        origin="novidades"
        gradient="g05"
      />
      <ChatWidget2 />
    </div>
  );
}
