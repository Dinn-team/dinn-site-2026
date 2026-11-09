import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from '@/i18n/useTranslation';
import { contactUrl } from '@/lib/links';
import { featurePath, PATHS } from '@/lib/site-map';
import { ChatWidget2 } from '@/components/home2/ChatWidget2';
import { ClosingCard, H2Head } from './PageShell';
import { FEATURE_DEMO } from './FeatureDemos';
import { ProductScreen } from './ProductScreen';
import { AREA_DARK, gradUrl, plain } from './area-theme';

// Funcionalidades no Design System v2 (padrão de 03/11/2026). Cada
// funcionalidade com tela no Dinn tem página própria: a tela animada no topo,
// onde ela atua (tela, times, decisão), o palco com os quatro passos (Entrada,
// Ação, Saída, Decisão) na mesma tela, o limite e outras funcionalidades.

export type Feature = {
  id: string; name: string; kind: string; problem: string; input: string; action: string;
  output: string; decision: string; limit: string; href: string;
};

const EASE = [0.22, 1, 0.36, 1] as const;
const reveal = (i = 0) => ({
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-8% 0px' },
  transition: { delay: 0.08 * i, duration: 0.6, ease: EASE },
});

/** Áreas (soluções) em que cada funcionalidade atua. A primeira dá o degradê. */
// 'all' = todos os times usam: a página mostra "Todos os times" com link para /solucoes.
export const FEATURE_AREAS: Record<string, string[] | 'all'> = {
  ruptura: 'all',
  giro: 'all',
  preco: 'all',
  localizador: ['sac-customer-experience', 'trade-kam-campo'],
  mercado: ['inteligencia-pricing', 'marketing-lancamentos'],
  oportunidades: ['inteligencia-pricing', 'trade-kam-campo'],
  distribuicao: ['supply-distribuicao'],
  suporte: ['sac-customer-experience'],
  jean: ['trade-kam-campo', 'inteligencia-pricing', 'ti-dados-governanca'],
  conecta: ['ti-dados-governanca'],
};
// Primeira área da funcionalidade: dá o degradê. Quem todos usam fica no roxo da marca.
const firstArea = (id: string) => { const v = FEATURE_AREAS[id]; return Array.isArray(v) ? v[0] : ''; };
const darkOf = (id: string) => AREA_DARK[firstArea(id)] ?? 'web/roxo-noite';


function useFeatures() {
  const { t } = useTranslation();
  return (t('features.items') as Feature[]) ?? [];
}

/** Cartão de uma funcionalidade com tela: nome, tipo, pergunta e o link. */
export function FeatureTile({ f }: { f: Feature }) {
  const { t } = useTranslation();
  const kinds = (t('features.kinds') as unknown as Record<string, string>) ?? {};
  return (
    <a className="sl2-feat ft2-tile" href={featurePath(f.id)}>
      <span className="ft2-kind">{kinds[f.kind] ?? f.kind}</span>
      <span className="sl2-feat-name">{f.name}</span>
      <span className="sl2-feat-text">{f.problem}</span>
      <span className="h2-link">{t('features.hub.open')}<ArrowRight size={15} aria-hidden="true" /></span>
    </a>
  );
}

/** Abas com as nove funcionalidades e a tela do Dinn da escolhida (lista e Plataforma). */
export function FeaturePicker({ items }: { items: Feature[] }) {
  const { t } = useTranslation();
  const [pick, setPick] = useState(items[0]?.id ?? 'ruptura');
  const Demo = FEATURE_DEMO[pick];
  return (
    <>
      <div className="ft2-picker" role="tablist" aria-label={t('features.listLabel') as string}>
        {items.map((f) => (
          <button key={f.id} type="button" role="tab" aria-selected={pick === f.id} className={pick === f.id ? 'on' : ''} onClick={() => setPick(f.id)}>
            {f.name}
          </button>
        ))}
      </div>
      <div className="h2-media sl2-media" style={{ backgroundImage: gradUrl(darkOf(pick)) }} role="tabpanel">
        <div className="sl2-screen">{Demo && <ProductScreen key={pick} demo={Demo} />}</div>
      </div>
      <p className="ft2-caption">
        {t('features.page.caption')}{' '}
        <a className="h2-link" href={featurePath(pick)}>{t('features.hub.open')} <ArrowRight size={15} aria-hidden="true" /></a>
      </p>
    </>
  );
}

// ── Lista: /funcionalidades ────────────────────────────────────────────────
export function FeaturesHub() {
  const { t } = useTranslation();
  const items = useFeatures();

  // Links antigos (/funcionalidades#id) levam à página da funcionalidade.
  useEffect(() => {
    const id = window.location.hash.replace('#', '');
    const to = id ? featurePath(id) : PATHS.features;
    if (to !== PATHS.features) window.location.replace(to);
  }, []);

  return (
    <div className="h2 sl2 ft2">
      <header className="h2-hero">
        <div className="h2-wrap">
          <div className="h2-hero-grid">
            <h1 className="h2-hero-title">{plain(t('features.hero.title') as string)}</h1>
            <div className="h2-hero-side">
              <p className="h2-hero-sub">{t('features.hero.lead')}</p>
              <div className="h2-actions">
                <a className="btn btn-primary" href={contactUrl('funcionalidades')}>{t('pageCta.button')}</a>
                <a className="h2-link" href={PATHS.platform}>{t('nav.platform')} <ArrowRight size={15} aria-hidden="true" /></a>
              </div>
            </div>
          </div>
          <FeaturePicker items={items} />
        </div>
      </header>

      <section className="h2-section sl2-feats ft2-list" aria-labelledby="ft-screens">
        <div className="h2-wrap">
          <H2Head id="ft-screens" title={t('features.hub.screensTitle') as string} intro={t('features.hub.screensIntro') as string} />
          <ul className="sl2-feat-grid">
            {items.map((f, i) => (
              <motion.li key={f.id} {...reveal(i % 3)}><FeatureTile f={f} /></motion.li>
            ))}
          </ul>
        </div>
      </section>

      <ClosingCard
        title={t('features.cta.title') as string}
        desc={t('features.cta.desc') as string}
        button={t('features.cta.button') as string}
        origin="funcionalidades"
        gradient="g03"
        secondary={{ label: t('nav.platform') as string, href: PATHS.platform }}
      />
      <ChatWidget2 />
    </div>
  );
}
