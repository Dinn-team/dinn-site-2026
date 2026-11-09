import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { gradUrl } from '@/components/site/area-theme';
import { featureGrad } from './gradients';
import { ShotView } from './shots';
import type { Stage } from './types';

/**
 * Seção fixada: a rolagem troca a etapa e a tela do Dinn.
 * Mesma mecânica da página /suporte (h2-pin, h2-feat-*), com uma tela do produto por etapa.
 */
export function PinStages({ id, title, sub, stages, slug }: { id: string; title: string; sub: string; stages: Stage[]; slug: string }) {
  const [idx, setIdx] = useState(0);
  const pin = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = pin.current;
    if (!el) return;
    const n = stages.length;
    let raf = 0;
    const update = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const dist = r.height - window.innerHeight;
      const p = dist > 0 ? Math.min(1, Math.max(0, -r.top / dist)) : 0;
      const scaled = Math.min(n - 0.0001, p * n);
      const i = Math.floor(scaled);
      el.style.setProperty('--p', (scaled - i).toFixed(3));
      setIdx(i);
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [stages.length]);

  const go = (i: number) => {
    const el = pin.current;
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY;
    const dist = el.offsetHeight - window.innerHeight;
    window.scrollTo({ top: top + (dist * (i + 0.02)) / stages.length, behavior: 'smooth' });
  };
  const style = { ['--n' as string]: stages.length, ['--step' as string]: '70svh' } as CSSProperties;
  const stage = stages[idx];

  return (
    <section ref={pin} id="por-dentro" className="h2-pin sp2-pin fx-sec" aria-labelledby={id} style={style}>
      <div className="h2-feat-stage">
        <div className="h2-wrap">
          <div className="h2-head is-stack h2-feat-head">
            <div>
              <h2 id={id} className="h2-title">{title}</h2>
              <p className="h2-sub">{sub}</p>
            </div>
            <p className="h2-feat-count" aria-hidden="true"><b>{String(idx + 1).padStart(2, '0')}</b> / {String(stages.length).padStart(2, '0')}</p>
          </div>
          <div className="h2-feat-grid">
            <ul className="h2-feat-list">
              {stages.map((s, i) => (
                <li key={s.tab} className={i === idx ? 'is-active' : ''}>
                  <button type="button" className="h2-feat-name" aria-expanded={i === idx} onClick={() => go(i)}>
                    <span>{s.tab}</span>
                  </button>
                  <div className="h2-feat-body" aria-hidden={i !== idx}>
                    <div><strong>{s.title}</strong><p>{s.text}</p></div>
                  </div>
                  {i === idx && <span className="h2-feat-prog" aria-hidden="true" />}
                </li>
              ))}
            </ul>
            <div className="sp2-pinshot fx-pinshot" style={{ backgroundImage: gradUrl(featureGrad(slug, 'stage', idx)) }}>
              <div key={`${idx}-${stage.shot.screen}`} className="sp2-slide">
                <ShotView shot={stage.shot} eager />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
