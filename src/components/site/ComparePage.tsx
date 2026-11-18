import { useTranslation } from '@/i18n/useTranslation';
import { Rich } from '@/lib/rich-text';
import { ChatWidget2 } from '@/components/home2/ChatWidget2';
import { IlLayers } from '@/components/illustrations/resources';
import { ClosingCard, H2Head } from './PageShell';

type Info = { title: string; text: string };

// Comparativos no padrão v2: a tabela vira linhas com rótulo (abordagem, papel,
// relação com a Dinn), o valor ganha uma ilustração da camada que falta, e as
// duas respostas sobre "pessoas" ficam em colunas com fio fino.
export function ComparePage() {
  const { t } = useTranslation();
  const table = t('compare.table') as unknown as { columns: string[]; rows: string[][] };
  const people = (t('compare.people.items') as Info[]) ?? [];

  return (
    <div className="h2 cmp">
      <header className="h2-hero">
        <div className="h2-wrap">
          <div className="h2-hero-grid">
            <h1 className="h2-hero-title"><Rich text={t('compare.hero.title') as string} /></h1>
            <div className="h2-hero-side">
              <p className="h2-hero-sub">{t('compare.hero.lead')}</p>
            </div>
          </div>
        </div>
      </header>

      <section className="cmp-sec" aria-label={t('compare.hero.eyebrow') as string}>
        <div className="h2-wrap">
          <div className="cmp-ledger">
            <div className="cmp-head" aria-hidden="true">
              {table.columns.map((c) => <span key={c}>{c}</span>)}
            </div>
            <ul>
              {table.rows.map((r) => (
                <li key={r[0]}>
                  <h3 data-label={table.columns[0]}>{r[0]}</h3>
                  <p data-label={table.columns[1]}>{r[1]}</p>
                  <p data-label={table.columns[2]} className="is-dinn">{r[2]}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="h2-section is-muted" aria-labelledby="cmp-value">
        <div className="h2-wrap cmp-duo">
          <div>
            <H2Head id="cmp-value" title={t('compare.value.title') as string} intro={t('compare.value.text') as string} />
          </div>
          <div className="cmp-art il-host"><IlLayers /></div>
        </div>
      </section>

      <section className="h2-section" aria-labelledby="cmp-people">
        <div className="h2-wrap">
          <H2Head id="cmp-people" title={t('compare.people.title') as string} intro={t('compare.people.text') as string} />
          <div className="tr-cols" style={{ ['--cols' as string]: people.length }}>
            {people.map((p) => (
              <article key={p.title} className="tr-col">
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ClosingCard
        title={t('compare.cta.title') as string}
        desc={t('compare.cta.desc') as string}
        button={t('compare.cta.button') as string}
        origin="comparativos"
        gradient="g07"
      />
      <ChatWidget2 />
    </div>
  );
}
