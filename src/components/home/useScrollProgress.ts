import { useEffect, useRef, type RefObject } from 'react';

// Progresso de 0 a 1 de uma seção alta com conteúdo "preso" (sticky):
// 0 quando o topo da seção encosta no topo da tela, 1 quando o fim da seção
// encosta no fim da tela. Medido direto da rolagem, num único rAF por quadro.
//
// Usado no lugar do useScroll do framer-motion, que nesta página reportava um
// progresso atrasado (a seção chegava ao fim com o valor ainda perto de 0,25).

export function useScrollProgress(target: RefObject<HTMLElement | null>, onChange?: (p: number) => void) {
  const progress = useRef(0);
  const cb = useRef(onChange);
  cb.current = onChange;

  useEffect(() => {
    const el = target.current;
    if (!el) return;
    let raf = 0;
    const measure = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const span = r.height - window.innerHeight;
      const p = span > 0 ? Math.min(1, Math.max(0, -r.top / span)) : r.top <= 0 ? 1 : 0;
      if (p !== progress.current) {
        progress.current = p;
        cb.current?.(p);
      }
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(measure);
    };
    measure();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [target]);

  return progress;
}
