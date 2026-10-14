import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ChevronDown } from 'lucide-react';
import { useTranslation } from '@/i18n/useTranslation';
import { Rich } from '@/lib/rich-text';
import { PATHS } from '@/lib/site-map';
import { useScrollProgress } from '@/components/home/useScrollProgress';
import { SCENES } from './AreaScenes';
import type { Area } from './SolutionsPages';

// Palco de abertura de cada solução: o título à esquerda e, à direita, uma
// ilustração presa à tela que acompanha a rolagem em quatro passos (os mesmos
// quatro do exemplo da página). Ao abrir, a cena já respira sozinha; ao rolar,
// ela conta o exemplo. Mesma lógica da seção "Como funciona" da home.

export function AreaStage({ area }: { area: Area }) {
  const { t } = useTranslation();
  const ref = useRef<HTMLElement>(null);
  const [scroll, setScroll] = useState(0);
  // Ao abrir, o primeiro passo se desenha sozinho (sem precisar rolar); depois
  // a rolagem assume e conta o resto. Com menos movimento, já abre no passo 1.
  const [intro, setIntro] = useState(0);
  useScrollProgress(ref, (v) => setScroll(Math.round(v * 200) / 200));
  useEffect(() => {
    const target = 0.24;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIntro(target);
      return;
    }
    let raf = 0;
    const t0 = performance.now();
    const step = (now: number) => {
      const k = Math.min(1, (now - t0 - 250) / 1800);
      setIntro(target * (k <= 0 ? 0 : 1 - Math.pow(1 - k, 3)));
      if (k < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);
  const p = Math.max(scroll, intro);

  const Scene = SCENES[area.slug];
  const steps = area.example.steps;
  const active = Math.min(steps.length - 1, Math.floor(p * steps.length * 0.999));
  const L = ((t('scenes.items') as Record<string, any>) ?? {})[area.slug] ?? {};
  const shared = {
    queueRows: t('teams.visuals.queue.rows'),
    locatorRows: t('teams.visuals.locator.rows'),
    regions: t('teams.visuals.launch.regions'),
    sources: t('delivery.sources'),
    destinations: t('delivery.destinations'),
    types: ((t('trust.signals.items') as { name: string }[]) ?? []).map((s) => s.name),
  };

  return (
    <section ref={ref} className="as" aria-label={area.name}>
      <div className="as-sticky">
        <div className="as-glow" aria-hidden="true" />
        <div className="wrap as-grid">
          <div className="as-copy">
            <a className="as-back" href={PATHS.solutions}>
              <ArrowLeft size={15} aria-hidden="true" />
              {t('solutions.page.back')}
            </a>
            <p className="as-eyebrow">{area.name}</p>
            <h1 className="as-title"><Rich text={area.title} /></h1>
            <p className="as-lead">{area.lead}</p>

            <ol className="as-steps" aria-label={t('solutions.page.exampleLabel')}>
              {steps.map((s, i) => {
                const [label, ...rest] = s.split(': ');
                return (
                  <li key={s} className={i === active ? 'is-on' : i < active ? 'is-past' : ''} aria-current={i === active ? 'step' : undefined}>
                    <span className="as-step-n">{i + 1}</span>
                    <p><strong>{label}</strong><span>{rest.join(': ')}</span></p>
                  </li>
                );
              })}
            </ol>
            <p className="as-hint" aria-hidden="true" style={{ opacity: p < 0.05 ? 1 : 0 }}>
              {t('scenes.scrollHint')}
              <ChevronDown size={15} />
            </p>
          </div>

          <div className="as-scene">
            <div className="as-scene-frame">
              {Scene && <Scene p={p} L={L} shared={shared} />}
              <div className="as-progress" aria-hidden="true"><i style={{ transform: `scaleX(${p})` }} /></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
