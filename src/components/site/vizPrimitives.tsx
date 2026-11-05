import { useEffect, useRef, useState } from 'react';

// Utilitários dos gráficos do site (formatação e entrada na tela). Os gráficos em si
// ficam em ChartKit.tsx.

export const fmt = (n: number, digits = 0, locale = 'pt-BR') =>
  n.toLocaleString(locale, { minimumFractionDigits: digits, maximumFractionDigits: digits });

/** Vira `true` quando o elemento entra na tela. Sem movimento, já nasce `true`. */
export function useInView<T extends HTMLElement>(threshold = 0.25) {
  const ref = useRef<T>(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === 'undefined' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setOn(true);
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setOn(true);
          io.disconnect();
        }
      },
      { threshold },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return [ref, on] as const;
}
