import { useEffect, useRef, useState } from 'react';
import { Quote as QuoteIcon, UserRound } from 'lucide-react';
import type { Quote } from '@/data/customers';

// Depoimentos em faixa horizontal. A rolagem da página fixa a seção e move os cartões de lado,
// da esquerda para a direita. Ao terminar, a página segue. Ao subir, a faixa volta.
// Sem movimento (prefers-reduced-motion), a faixa vira uma fileira que rola com o dedo ou o mouse.
export function VoicesRail({ id, title, voices }: { id: string; title: string; voices: Quote[] }) {
  const sec = useRef<HTMLElement>(null);
  const view = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLUListElement>(null);
  const [pinned, setPinned] = useState(false);
  const [dist, setDist] = useState(0);
  const items = voices.filter((q) => q.approved);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    let raf = 0;
    const measure = () => {
      if (!view.current || !track.current) return;
      const on = !reduce.matches;
      setPinned(on);
      setDist(on ? Math.max(0, track.current.scrollWidth - view.current.clientWidth) : 0);
    };
    const tick = () => {
      raf = 0;
      if (!sec.current || !track.current || reduce.matches) return;
      const span = sec.current.offsetHeight - window.innerHeight;
      const p = span > 0 ? Math.min(1, Math.max(0, -sec.current.getBoundingClientRect().top / span)) : 0;
      track.current.style.transform = `translate3d(${-p * dist}px,0,0)`;
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(tick); };
    measure();
    tick();
    window.addEventListener('scroll', onScroll, { passive: true });
    const onResize = () => { measure(); onScroll(); };
    window.addEventListener('resize', onResize);
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onResize); if (raf) cancelAnimationFrame(raf); };
  }, [dist, items.length]);

  return (
    <section
      ref={sec}
      className={`h2-section cu3-agg is-alt cu3-rail ${pinned ? 'is-pinned' : ''}`}
      style={pinned ? { height: `calc(100svh + ${dist}px)` } : undefined}
      aria-labelledby={id}
    >
      <div className="cu3-rail-stage">
        <div className="h2-wrap">
          <div className="h2-head"><div><h2 id={id} className="h2-title">{title}</h2></div></div>
        </div>
        <div ref={view} className="cu3-rail-view">
          <ul ref={track} className="cu3-rail-track">
            {items.map((q, i) => (
              <li key={i} className="cu3-vcard">
                <figure>
                  <QuoteIcon size={22} aria-hidden="true" strokeWidth={1.6} />
                  <blockquote>{q.text}</blockquote>
                  <figcaption>
                    <span className="cu3-avatar" aria-hidden="true"><UserRound size={18} strokeWidth={1.8} /></span>
                    <strong>{q.role}</strong>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
