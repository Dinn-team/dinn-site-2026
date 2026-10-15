import { useEffect, useRef, type ReactNode } from 'react';
import { useTranslation } from '@/i18n/useTranslation';
import { SectionHead } from '../PageShell';
import { StockDemo } from './StockDemo';
import { ManagerDemo } from './ManagerDemo';
import { InsightsDemo } from './InsightsDemo';
import { McpDemo } from './McpDemo';
import { ConectaDemo } from './ConectaDemo';

// As cinco partes, cada uma com uma demo viva do que ela faz com os dados.
// Cartões grandes, texto de um lado e a demo do outro (alternando); em telas
// estreitas a demo vem logo abaixo do texto. O "o que não é" fica em cada um.

type Part = { tag: string; title: string; desc: string; not: string };

// Deixa os cinco cartões com a mesma altura (a do maior), para que, empilhados,
// um cubra o outro por inteiro e só as bordas das camadas de baixo apareçam.
function useEqualCardHeight(ref: React.RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const box = ref.current;
    if (!box) return;
    // O cartão empilhado precisa caber inteiro abaixo do menu (72px do menu + 32px
    // de respiro) com os degraus das camadas; se a janela for mais baixa que
    // isso, a lista segue normal em vez de esconder conteúdo atrás do menu.
    const STEPS = 4 * 8;
    const measure = () => {
      const cards = Array.from(box.querySelectorAll<HTMLElement>('.pf-part'));
      cards.forEach((c) => { c.style.minHeight = '0px'; });
      const h = Math.max(...cards.map((c) => c.getBoundingClientRect().height));
      box.style.setProperty('--pf-card-h', `${Math.ceil(h)}px`);
      cards.forEach((c) => { c.style.minHeight = ''; });
      const fits = window.innerWidth >= 1000 && window.innerHeight >= Math.ceil(h) + 104 + STEPS;
      box.dataset.stack = fits ? 'on' : 'off';
    };
    measure();
    const late = window.setTimeout(measure, 1200);
    document.fonts?.ready.then(measure);
    window.addEventListener('resize', measure);
    return () => {
      window.clearTimeout(late);
      window.removeEventListener('resize', measure);
    };
  }, [ref]);
}

export function PartsShowcase() {
  const { t } = useTranslation();
  const boxRef = useRef<HTMLDivElement>(null);
  useEqualCardHeight(boxRef);
  const parts = (t('platform.parts.items') as Part[]) ?? [];
  const demos: ReactNode[] = [<StockDemo key="s" />, <ManagerDemo key="m" />, <InsightsDemo key="i" />, <McpDemo key="p" />, <ConectaDemo key="c" />];

  return (
    <section className="sp-section is-alt pf-parts-section" aria-labelledby="sp-parts">
      <div className="wrap">
        <SectionHead id="sp-parts" title={t('platform.parts.title')} intro={t('platform.parts.intro')} />
        <div className="pf-parts" ref={boxRef}>
          {parts.map((p, i) => (
            <article key={p.tag} className="pf-part" style={{ ['--i' as string]: i }}>
              <div className="pf-part-copy">
                <span className="pf-part-n" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                <span className="sp-tag">{p.tag}</span>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <p className="pf-part-not"><strong>{t('platform.parts.notLabel')}:</strong> {p.not}</p>
              </div>
              <div className="pf-part-demo">{demos[i]}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
