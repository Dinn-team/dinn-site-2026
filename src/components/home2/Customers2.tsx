import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useTranslation } from '@/i18n/useTranslation';
import { PATHS } from '@/lib/site-map';
import type { ClientLogo } from '@/lib/clients';
import { brandOf, CLIENT_ORDER } from '@/lib/client-brand';
import { customerBySlug, customerSlug, type Lang } from '@/data/customers';

// Cards de clientes: gradiente na cor da marca, camada preta de 40 % e logo branca.
// Três aparecem; os outros ficam no carrossel (setas no desktop). Cada card leva à
// página do cliente (/clientes/<slug>). Cliente sem página ainda leva a /clientes.
// Na página de um cliente, `exclude` tira o próprio cliente e `title` troca o título.
// Em /clientes: `describe` troca o nome (já está na logo) pelo resumo do case, `auto` passa
// os cards sozinho (pausa com o mouse, foco ou toque) e `hideCta` tira o link para a lista.
export function Customers2({ logos, exclude, title, describe, auto, hideCta }: { logos: ClientLogo[]; exclude?: string; title?: string; describe?: boolean; auto?: boolean; hideCta?: boolean }) {
  const { t, lang } = useTranslation();
  const track = useRef<HTMLUListElement>(null);
  const [edge, setEdge] = useState({ start: true, end: false });
  const [paused, setPaused] = useState(false);

  const sorted = [...logos]
    .filter((c) => c.name !== exclude)
    .sort((a, b) => CLIENT_ORDER.indexOf(a.name) - CLIENT_ORDER.indexOf(b.name));

  const sync = () => {
    const el = track.current;
    if (!el) return;
    setEdge({ start: el.scrollLeft <= 4, end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 4 });
  };
  useEffect(() => {
    sync();
    window.addEventListener('resize', sync);
    return () => window.removeEventListener('resize', sync);
  }, [logos.length]);

  useEffect(() => {
    if (!auto || paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = window.setInterval(() => {
      const el = track.current;
      if (!el) return;
      if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 4) {
        el.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        const card = el.querySelector('li')?.getBoundingClientRect().width ?? 0;
        el.scrollBy({ left: card + 32, behavior: 'smooth' });
      }
    }, 3500);
    return () => window.clearInterval(id);
  }, [auto, paused]);

  const go = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector('li')?.getBoundingClientRect().width ?? 0;
    el.scrollBy({ left: dir * (card + 32), behavior: 'smooth' });
  };

  return (
    <section id="clientes" className="h2-section h2-customers" aria-labelledby="h2-customers-title">
      <div className="h2-wrap">
        <div className="h2-head">
          <h2 id="h2-customers-title" className="h2-title">{title ?? t('home2.customers.title')}</h2>
          <div className="h2-head-actions">
            {!hideCta && <a className="h2-link" href={PATHS.customers}>{t('home2.customers.cta')} <ArrowRight size={15} aria-hidden="true" /></a>}
            <div className="h2-arrows">
              <button type="button" onClick={() => go(-1)} disabled={edge.start} aria-label="←"><ArrowLeft size={16} aria-hidden="true" /></button>
              <button type="button" onClick={() => go(1)} disabled={edge.end} aria-label="→"><ArrowRight size={16} aria-hidden="true" /></button>
            </div>
          </div>
        </div>
        <ul
          className="h2-cust-track"
          ref={track}
          onScroll={sync}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
          onTouchStart={() => setPaused(true)}
        >
          {sorted.map((c) => {
            const brand = brandOf(c.name);
            const slug = customerSlug(c.name);
            const summary = describe && slug ? customerBySlug(slug, lang as Lang)?.summary : undefined;
            return (
              <li key={c.name}>
                <a className="h2-cust" href={slug ? `${PATHS.customers}/${slug}` : PATHS.customers}>
                  <span
                    className="h2-cust-art"
                    style={{ ['--g' as string]: `url(/gradients/${brand.g}.avif)`, ['--f' as string]: brand.filter }}
                  >
                    <span className="h2-cust-shade" />
                    <img className="h2-cust-logo" src={c.src} alt={c.name} width={c.width} height={c.height} loading="lazy" />
                  </span>
                  {describe ? summary && <span className="h2-cust-desc">{summary}</span> : <span className="h2-cust-name">{c.name}</span>}
                  <span className="h2-cust-go">{t('home2.customers.story')} <ArrowRight size={14} aria-hidden="true" /></span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
