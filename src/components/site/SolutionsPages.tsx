import { ArrowRight, BarChart3, Headset, Rocket, ShieldCheck, Truck, Users } from 'lucide-react';
import type { ComponentType } from 'react';
import { useTranslation } from '@/i18n/useTranslation';
import { Rich } from '@/lib/rich-text';
import { areaPath, PATHS } from '@/lib/site-map';
import { PageCta, SectionHead } from './PageShell';
import { AreaStage } from './AreaStage';
import { InsightsAnswer, ManagerScreen, ProvenanceCard } from './AreaVisuals';

export type Area = {
  slug: string;
  name: string;
  short: string;
  question: string;
  title: string;
  lead: string;
  decisions: string[];
  example: { title: string; steps: string[] };
  limits: string[];
  useCases: string[];
};

type UseCase = { id: string; tab: string; kicker: string };

const ICONS: Record<string, ComponentType<{ size?: number; 'aria-hidden'?: boolean | 'true' }>> = {
  'inteligencia-pricing': BarChart3,
  'trade-kam-campo': Users,
  'supply-distribuicao': Truck,
  'sac-customer-experience': Headset,
  'marketing-lancamentos': Rocket,
  'ti-dados-governanca': ShieldCheck,
};

export function AreaCard({ area, cta, questionPrefix }: { area: Area; cta: string; questionPrefix: string }) {
  const Icon = ICONS[area.slug] ?? BarChart3;
  return (
    <a className="sp-area" href={areaPath(area.slug)}>
      <span className="sp-area-icon"><Icon size={20} aria-hidden="true" /></span>
      <h3>{area.name}</h3>
      <p className="sp-area-q">{questionPrefix} “{area.question}”</p>
      <p>{area.short}</p>
      <span className="sp-area-go">{cta}<ArrowRight size={15} aria-hidden="true" /></span>
    </a>
  );
}

export function SolutionPage({ slug }: { slug: string }) {
  const { t } = useTranslation();
  const areas = (t('solutions.items') as Area[]) ?? [];
  const useCaseItems = (t('teams.items') as UseCase[]) ?? [];
  const area = areas.find((a) => a.slug === slug);
  if (!area) return null;
  const others = areas.filter((a) => a.slug !== slug);
  const cases = area.useCases.map((id) => useCaseItems.find((u) => u.id === id)).filter(Boolean) as UseCase[];
  const isTech = area.useCases.length === 0;

  return (
    <div className="sp">
      <AreaStage area={area} />

      <section className="sp-section" aria-labelledby="sp-question">
        <div className="wrap sp-duo">
          <div>
            <h2 id="sp-question" className="sp-kicker">{t('solutions.page.questionLabel')}</h2>
            <p className="sp-quote">“{area.question}”</p>
            <h2 className="sp-kicker sp-kicker-gap">{t('solutions.page.decisionsLabel')}</h2>
            <ul className="sp-checks">
              {area.decisions.map((d) => <li key={d}>{d}</li>)}
            </ul>
          </div>
          <div>
            <p className="sp-kicker">{t('areaVisuals.uiKicker')}</p>
            <ManagerScreen slug={area.slug} />
          </div>
        </div>
      </section>

      <section className="sp-section is-alt" aria-labelledby="sp-example">
        <div className="wrap sp-duo is-flip">
          <div>
            <h2 id="sp-example" className="sp-kicker">{t('solutions.page.exampleLabel')}</h2>
            <p className="sp-example-title"><Rich text={area.example.title} /></p>
            <ol className="sp-steps">
              {area.example.steps.map((s, i) => {
                const [label, ...rest] = s.split(': ');
                return (
                  <li key={s}>
                    <span className="sp-num">{i + 1}</span>
                    <p><strong>{label}:</strong> {rest.join(': ')}</p>
                  </li>
                );
              })}
            </ol>
          </div>
          <div>
            <p className="sp-kicker">{t('areaVisuals.answerKicker')}</p>
            <InsightsAnswer slug={area.slug} />
          </div>
        </div>
      </section>

      <section className="sp-section" aria-labelledby="sp-limits">
        <div className="wrap sp-duo">
          <div>
            <h2 id="sp-limits" className="sp-kicker">{t('solutions.page.limitsLabel')}</h2>
            <ul className="sp-limits">
              {area.limits.map((l) => <li key={l}>{l}</li>)}
            </ul>
            <p className="sp-more"><a href={PATHS.trust}>{t('solutions.page.trustCta')} →</a></p>
          </div>
          <div>
            <ProvenanceCard />
            <h2 className="sp-kicker sp-kicker-gap">{t('solutions.page.useCasesLabel')}</h2>
            {isTech ? (
              <ul className="sp-links">
                <li><a href={PATHS.platform}>{t('nav.platform')}</a></li>
                <li><a href={PATHS.trust}>{t('nav.trust')}</a></li>
              </ul>
            ) : (
              <ul className="sp-links">
                {cases.map((c) => (
                  <li key={c.id}>
                    <a href={`/#time-${c.id}`}>{c.tab}</a>
                    <span>{c.kicker}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </section>

      <section className="sp-section is-alt" aria-labelledby="sp-others">
        <div className="wrap">
          <SectionHead id="sp-others" title={t('solutions.page.otherLabel')} />
          <ul className="sp-pills">
            {others.map((a) => <li key={a.slug}><a href={areaPath(a.slug)}>{a.name}</a></li>)}
          </ul>
        </div>
      </section>

      <PageCta
        title={t('pageCta.title')}
        desc={t('pageCta.desc')}
        button={t('pageCta.button')}
        secondary={{ label: t('pageCta.secondary'), href: PATHS.solutions }}
      />
    </div>
  );
}
