import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from '@/i18n/useTranslation';
import { blogPath } from '@/i18n/routes';
import { Rich } from '@/lib/rich-text';
import { PATHS } from '@/lib/site-map';
import { ImageHero, PageCta, PageHero } from './PageShell';

// ── Hub de Recursos: capa humanizada e três portas de entrada ─────────────
// Blog (artigos, guias e temas), Casos de clientes (histórias documentadas) e
// Changelog (histórico do que entrou no ar). Só um menu: o conteúdo mora em
// cada destino.

type Card = {
  id: 'blog' | 'cases' | 'changelog';
  type: string;
  title: string;
  desc: string;
  chips: string[];
  cta: string;
  href: string;
};

const EASE = [0.22, 1, 0.36, 1] as const;

// Blog: pilha de artigos, com guia, artigo e tema na mesma estante
function BlogArt() {
  return (
    <svg viewBox="0 0 320 190" role="img" aria-hidden="true" className="rc-art-svg">
      <g transform="rotate(-7 90 100)">
        <rect x="34" y="40" width="112" height="132" rx="14" fill="#fff" stroke="#DADDE3" />
        <rect x="48" y="58" width="52" height="8" rx="4" fill="#B79EFF" />
        <rect x="48" y="78" width="84" height="6" rx="3" fill="#E5E7EB" />
        <rect x="48" y="92" width="72" height="6" rx="3" fill="#E5E7EB" />
        <rect x="48" y="106" width="80" height="6" rx="3" fill="#E5E7EB" />
      </g>
      <g transform="rotate(6 230 100)">
        <rect x="176" y="34" width="112" height="132" rx="14" fill="#fff" stroke="#DADDE3" />
        <circle cx="198" cy="62" r="11" fill="#EEE9FF" />
        <path d="M193,62 l4,4 l8,-9" stroke="#5625F2" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="216" y="56" width="56" height="8" rx="4" fill="#E5E7EB" />
        <rect x="190" y="84" width="84" height="6" rx="3" fill="#E5E7EB" />
        <rect x="190" y="98" width="70" height="6" rx="3" fill="#E5E7EB" />
        <rect x="190" y="112" width="78" height="6" rx="3" fill="#E5E7EB" />
      </g>
      <rect x="100" y="20" width="124" height="152" rx="16" fill="#fff" stroke="#5625F2" strokeWidth="1.5" />
      <rect x="116" y="38" width="64" height="10" rx="5" fill="#5625F2" />
      <rect x="116" y="60" width="92" height="7" rx="3.5" fill="#CFC4FB" />
      <rect x="116" y="76" width="80" height="7" rx="3.5" fill="#E5E7EB" />
      <rect x="116" y="92" width="88" height="7" rx="3.5" fill="#E5E7EB" />
      <rect x="116" y="108" width="60" height="7" rx="3.5" fill="#E5E7EB" />
      <path d="M200,20 v30 l9,-7 l9,7 v-30" fill="#10B981" />
    </svg>
  );
}

// Casos: uma pessoa entrevistada, a fala e o caminho documentado até o aprendizado
function CasesArt() {
  return (
    <svg viewBox="0 0 320 190" role="img" aria-hidden="true" className="rc-art-svg">
      <circle cx="74" cy="76" r="26" fill="#B79EFF" />
      <circle cx="74" cy="68" r="10" fill="#fff" />
      <path d="M52,104 a22,22 0 0 1 44,0" fill="#fff" />
      <rect x="40" y="132" width="68" height="28" rx="10" fill="#fff" stroke="#DADDE3" />
      <path d="M52,146 h44" stroke="#E5E7EB" strokeWidth="6" strokeLinecap="round" />
      <path d="M118,52 h92 a14,14 0 0 1 14,14 v36 a14,14 0 0 1 -14,14 h-52 l-18,16 v-16 h-22 a14,14 0 0 1 -14,-14 v-36 a14,14 0 0 1 14,-14 z" fill="#fff" stroke="#5625F2" strokeWidth="1.5" />
      <text x="140" y="96" fontSize="44" fontWeight="700" fill="#5625F2">“</text>
      <rect x="168" y="68" width="40" height="7" rx="3.5" fill="#CFC4FB" />
      <rect x="168" y="84" width="32" height="7" rx="3.5" fill="#E5E7EB" />
      <path d="M150,168 H282" stroke="#CBD0D8" strokeWidth="2" strokeDasharray="3 6" />
      {[150, 190, 230, 270].map((x, i) => (
        <circle key={x} cx={x} cy="168" r={i === 3 ? 9 : 6} fill={i === 3 ? '#10B981' : '#5625F2'} />
      ))}
      <path d="M265.500,168 l3.500,3.500 l6,-7" stroke="#fff" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="236" y="32" width="56" height="64" rx="10" fill="#fff" stroke="#DADDE3" />
      <rect x="246" y="44" width="30" height="6" rx="3" fill="#E5E7EB" />
      <rect x="246" y="58" width="36" height="6" rx="3" fill="#E5E7EB" />
      <rect x="246" y="72" width="24" height="6" rx="3" fill="#E5E7EB" />
    </svg>
  );
}

// Changelog: linha do tempo com datas e um deploy subindo
function ChangelogArt() {
  const rows = [38, 82, 126];
  return (
    <svg viewBox="0 0 320 190" role="img" aria-hidden="true" className="rc-art-svg">
      <path d="M78,20 V176" stroke="#CBD0D8" strokeWidth="2" strokeDasharray="3 6" />
      {rows.map((y, i) => (
        <g key={y}>
          <circle cx="78" cy={y + 18} r="9" fill={i === 0 ? '#10B981' : '#5625F2'} />
          <circle className="rc-ping" cx="78" cy={y + 18} r="9" fill="none" stroke={i === 0 ? '#10B981' : '#5625F2'} style={{ animationDelay: `${i * 0.6}s` }} />
          <rect x="18" y={y + 10} width="40" height="16" rx="8" fill="#EEE9FF" />
          <rect x="26" y={y + 16} width="24" height="4" rx="2" fill="#5625F2" />
          <rect x="104" y={y} width="190" height="36" rx="12" fill="#fff" stroke="#DADDE3" />
          <rect x="116" y={y + 9} width={i === 1 ? 104 : 128} height="7" rx="3.5" fill="#E5E7EB" />
          <rect x="116" y={y + 21} width={i === 2 ? 60 : 84} height="6" rx="3" fill="#F0F1F4" />
          <rect x="262" y={y + 8} width="24" height="12" rx="6" fill={i === 0 ? '#D1FAE5' : '#EEE9FF'} />
        </g>
      ))}
      <path d="M78,8 l-8,10 h5 v8 h6 v-8 h5 z" fill="#10B981" />
    </svg>
  );
}

const ARTS = { blog: <BlogArt />, cases: <CasesArt />, changelog: <ChangelogArt /> };

export function ResourcesHub() {
  const { t, lang } = useTranslation();
  const items = (t('resources.items') as Card[]) ?? [];

  return (
    <div className="sp">
      {/* Capa: a foto do laboratório e do centro de distribuição, com o texto
          à direita, na faixa de armazém, para não cobrir as pessoas à esquerda. */}
      <ImageHero
        src="/recursos/capa.webp"
        position="50% 40%"
        align="right"
        eyebrow={t('resources.hero.eyebrow') as string}
        title={t('resources.hero.title') as string}
        lead={t('resources.hero.lead') as string}
      />

      <section className="sp-section rc-menu" aria-label={t('resources.hero.eyebrow')}>
        <div className="wrap">
          <div className="rc-grid">
            {items.map((it, i) => (
              <motion.a
                key={it.id}
                className={`rc-card is-${it.id}`}
                href={it.href === '/blog' ? blogPath(lang) : it.href}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-8% 0px' }}
                transition={{ delay: 0.1 * i, duration: 0.7, ease: EASE }}
              >
                <div className="rc-art">{ARTS[it.id]}</div>
                <span className="sp-tag">{it.type}</span>
                <h2>{it.title}</h2>
                <p>{it.desc}</p>
                <ul className="rc-chips" aria-hidden="true">
                  {it.chips.map((c) => <li key={c}>{c}</li>)}
                </ul>
                <span className="sp-area-go">{it.cta}<ArrowRight size={15} aria-hidden="true" /></span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
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
