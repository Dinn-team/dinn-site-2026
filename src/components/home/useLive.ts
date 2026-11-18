import { useEffect, type RefObject } from 'react';

// Marca o elemento com data-live="true|false" conforme ele está (ou não) na
// tela. O CSS usa isso para pausar as animações fora da vista: bateria e CPU.
export function useLive(ref: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;
    const io = new IntersectionObserver(([e]) => {
      el.dataset.live = e.isIntersecting ? 'true' : 'false';
    });
    io.observe(el);
    return () => io.disconnect();
  }, [ref]);
}
