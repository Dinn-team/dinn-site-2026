import { useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';

// Peças compartilhadas das demos da página Plataforma: cada demo só anda
// enquanto está na tela e fica parada (já no estado final) com "menos movimento".

export function useDemoActive<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);
  const inView = useInView(ref, { margin: '-8% 0px -8% 0px' });
  const reduce = !!useReducedMotion();
  return { ref, inView, reduce };
}

/** Passo que avança sozinho a cada `ms` enquanto `run` for verdadeiro. */
export function useStepper(run: boolean, ms: number, count: number) {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (!run || count < 2) return;
    const id = window.setInterval(() => setI((v) => (v + 1) % count), ms);
    return () => window.clearInterval(id);
  }, [run, ms, count]);
  return [i, setI] as const;
}

/** Substitui {n}, {total}... em um texto do dicionário. */
export function fill(text: string, vars: Record<string, string | number>) {
  return String(text ?? '').replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? ''));
}
