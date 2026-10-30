import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from '@/i18n/useTranslation';
import { PATHS } from '@/lib/site-map';

type Item = { id: string; name: string; text: string };

// "Como a Dinn funciona": a seção fica fixada na tela e a rolagem percorre as
// funcionalidades, uma a uma. O texto da ativa abre na lista, a imagem passa
// como um slide horizontal e uma linha fina mostra o avanço dentro de cada item.
// O visitante só sai da seção depois de ver todas.
// Imagens: ainda genéricas. Quando houver print ou loop do Dinn Manager
// (dados mock), coloque o arquivo em public/features/<id>.* e informe em SHOTS.
const SHOTS: Record<string, string> = {};
const GRADIENTS = ['g00', 'g03', 'g05', 'g07', 'g11', 'g09', 'g04'];

// Distância de rolagem por funcionalidade, em vh.
const STEP_VH = 70;

export function Features2() {
  const { t } = useTranslation();
  const items = (t('home2.features.items') as Item[]) ?? [];
  const n = items.length;
  const root = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const activeRef = useRef(0);

  // Progresso da rolagem dentro da seção: índice ativo e avanço (0 a 1) no item.
  useEffect(() => {
    const el = root.current;
    if (!el || n === 0) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = el.getBoundingClientRect();
      const dist = rect.height - window.innerHeight;
      const p = dist > 0 ? Math.min(1, Math.max(0, -rect.top / dist)) : 0;
      const scaled = Math.min(n - 0.0001, p * n);
      const idx = Math.floor(scaled);
      el.style.setProperty('--p', (scaled - idx).toFixed(3));
      if (idx !== activeRef.current) {
        activeRef.current = idx;
        setActive(idx);
      }
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [n]);

  // Clicar num nome leva a rolagem ao começo daquela funcionalidade.
  const goTo = (i: number) => {
    const el = root.current;
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY;
    const dist = el.offsetHeight - window.innerHeight;
    window.scrollTo({ top: top + (dist * (i + 0.02)) / n, behavior: 'smooth' });
  };

  const style = { ['--n' as string]: n || 7, ['--step' as string]: `${STEP_VH}svh`, ['--i' as string]: active } as CSSProperties;
  const pad = (v: number) => String(v).padStart(2, '0');

  return (
    <section id="como-funciona" ref={root} className="h2-features h2-pin" aria-labelledby="h2-features-title" style={style}>
      <div className="h2-feat-stage">
        <div className="h2-wrap">
          <div className="h2-head is-stack h2-feat-head">
            <div>
              <h2 id="h2-features-title" className="h2-title">{t('home2.features.title')}</h2>
              <p className="h2-sub">{t('home2.features.sub')}</p>
            </div>
            <p className="h2-feat-count" aria-hidden="true"><b>{pad(active + 1)}</b> / {pad(n)}</p>
          </div>
          <div className="h2-feat-grid">
            <ul className="h2-feat-list">
              {items.map((it, i) => (
                <li key={it.id} className={i === active ? 'is-active' : ''}>
                  <button type="button" className="h2-feat-name" aria-expanded={i === active} onClick={() => goTo(i)}>
                    <span>{it.name}</span>
                  </button>
                  <div className="h2-feat-body" aria-hidden={i !== active}>
                    <div>
                      <p>{it.text}</p>
                      <a className="h2-link" href={PATHS.features} tabIndex={i === active ? 0 : -1}>{t('home2.features.more')} <ArrowRight size={14} aria-hidden="true" /></a>
                    </div>
                  </div>
                  {i === active && <span className="h2-feat-prog" aria-hidden="true" />}
                </li>
              ))}
            </ul>
            <div className="h2-feat-shot">
              <div className="h2-feat-track">
                {items.map((it, i) => (
                  <div key={it.id} className={`h2-slide ${i === active ? 'is-active' : ''}`} data-placeholder={SHOTS[it.id] ? undefined : it.id} aria-hidden={i !== active}>
                    {SHOTS[it.id] ? (
                      <img src={SHOTS[it.id]} alt={it.name} loading="lazy" />
                    ) : (
                      <span className="h2-slide-bg" style={{ backgroundImage: `url(/gradients/${GRADIENTS[i % GRADIENTS.length]}.avif)` }} aria-hidden="true" />
                    )}
                    <span className="h2-slide-tag"><b>{pad(i + 1)}</b>{it.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
