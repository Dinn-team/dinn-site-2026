import { ease, prefersReducedMotion } from './neural';

// Navegação por clique nas seções "presas" que contam uma história pela rolagem
// (Como funciona, soluções, casos, ciclo da plataforma). Clicar num passo faz a
// mesma animação da rolagem, só que sozinha e devagar.

/** Ponto de rolagem (0–1 da seção) no meio da faixa de cada passo. */
export const stageTarget = (i: number, n: number) => (i + 0.5) / Math.max(1, n);

let scrollAnim = 0;

/** Rola a janela devagar até `to`, com ease. Qualquer gesto do visitante interrompe.
 *  O `html { scroll-behavior: smooth }` do design system brigaria com rAF; por
 *  isso cada passo usa behavior "instant". */
export function animateScrollTo(to: number, ms: number) {
  cancelAnimationFrame(scrollAnim);
  const from = window.scrollY;
  if (ms <= 0 || Math.abs(to - from) < 2) {
    window.scrollTo({ top: to, behavior: 'instant' as ScrollBehavior });
    return;
  }
  const t0 = performance.now();
  const stop = () => {
    cancelAnimationFrame(scrollAnim);
    cleanup();
  };
  const cleanup = () => {
    window.removeEventListener('wheel', stop);
    window.removeEventListener('touchstart', stop);
    window.removeEventListener('keydown', stop);
  };
  window.addEventListener('wheel', stop, { passive: true });
  window.addEventListener('touchstart', stop, { passive: true });
  window.addEventListener('keydown', stop);
  const step = (now: number) => {
    const k = Math.min(1, (now - t0) / ms);
    window.scrollTo({ top: from + (to - from) * ease.inOutCubic(k), behavior: 'instant' as ScrollBehavior });
    if (k < 1) scrollAnim = requestAnimationFrame(step);
    else cleanup();
  };
  scrollAnim = requestAnimationFrame(step);
}

/** Leva a rolagem até o meio do passo `i` (de `n`) da seção alta `section`. */
export function scrollToStage(section: HTMLElement | null, i: number, n: number) {
  if (!section) return;
  const span = section.offsetHeight - window.innerHeight;
  const top = section.getBoundingClientRect().top + window.scrollY;
  const to = top + span * stageTarget(i, n);
  const dist = Math.abs(to - window.scrollY);
  const ms = prefersReducedMotion() ? 0 : Math.min(2800, Math.max(1200, 1100 + (dist / window.innerHeight) * 550));
  animateScrollTo(to, ms);
}
