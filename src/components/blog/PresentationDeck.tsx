import { useCallback, useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import type { DeckSlide, Inline, SlideBlock } from '@/lib/presentations';

// Navegação da apresentação (ilha React).
//
// O texto de TODOS os slides sai no HTML do build (renderização no servidor),
// para o Google e para quem não tem JavaScript. Sem JavaScript os slides ficam
// empilhados (ver o <noscript> em PresentationPage.astro). Com JavaScript, a
// ilha mostra um slide por vez: os outros ficam fora da área visível, ainda no
// DOM, marcados como inertes para leitor de tela e teclado.

export interface DeckLabels {
  deck: string;
  slideOf: string; // "Slide {n} de {total}"
  prev: string;
  next: string;
  goTo: string; // "Ir para o slide {n}"
}

interface Props {
  slides: DeckSlide[];
  labels: DeckLabels;
}

const GRADIENT: Partial<Record<DeckSlide['kind'], string>> = {
  capa: '/gradients/web/roxo-noite.avif',
  sumario: '/gradients/g03.avif',
  citacao: '/gradients/web/grafite.avif',
};

const fill = (template: string, values: Record<string, string | number>) =>
  template.replace(/\{(\w+)\}/g, (_, key: string) => String(values[key] ?? ''));

function Inlines({ parts }: { parts: Inline[] }) {
  return (
    <>
      {parts.map((part, i) => (part.strong ? <strong key={i}>{part.text}</strong> : <span key={i}>{part.text}</span>))}
    </>
  );
}

function Blocks({ blocks }: { blocks: SlideBlock[] }) {
  return (
    <>
      {blocks.map((block, i) =>
        block.type === 'p' ? (
          <p key={i}>
            <Inlines parts={block.inline} />
          </p>
        ) : (
          <ul key={i}>
            {block.items.map((item, j) => (
              <li key={j}>
                <Inlines parts={item} />
              </li>
            ))}
          </ul>
        ),
      )}
    </>
  );
}

function SlideView({
  slide,
  index,
  total,
  hidden,
  labels,
}: {
  slide: DeckSlide;
  index: number;
  total: number;
  hidden: boolean;
  labels: DeckLabels;
}) {
  const gradient = GRADIENT[slide.kind];
  const dark = slide.kind === 'capa' || slide.kind === 'citacao';
  // O título da capa repete o h1 da página; os demais são h2.
  const Title = slide.kind === 'capa' ? 'p' : 'h2';
  return (
    <section
      id={`slide-${index + 1}`}
      className={`pr-slide is-${slide.kind}`}
      style={gradient ? ({ '--pr-g': `url(${gradient})` } as React.CSSProperties) : undefined}
      aria-roledescription="slide"
      aria-label={fill(labels.slideOf, { n: index + 1, total })}
      aria-hidden={hidden ? true : undefined}
      inert={hidden ? true : undefined}
    >
      <div className="pr-slide-in">
        <Title className="pr-slide-title">{slide.title}</Title>
        {slide.blocks.length > 0 &&
          (slide.kind === 'citacao' ? (
            <blockquote className="pr-slide-body">
              <Blocks blocks={slide.blocks} />
            </blockquote>
          ) : (
            <div className="pr-slide-body">
              <Blocks blocks={slide.blocks} />
            </div>
          ))}
      </div>
      {dark && <img className="pr-slide-logo" src="/logo/Dinn_logo_v2_Light.png" alt="" width={394} height={152} />}
    </section>
  );
}

export default function PresentationDeck({ slides, labels }: Props) {
  const total = slides.length;
  const [current, setCurrent] = useState(0);
  const [ready, setReady] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [announce, setAnnounce] = useState('');
  const touch = useRef<{ x: number; y: number } | null>(null);

  const go = useCallback(
    (target: number) => {
      const next = Math.min(Math.max(target, 0), total - 1);
      setCurrent(next);
      setAnnounce(`${fill(labels.slideOf, { n: next + 1, total })}: ${slides[next].title}`);
      // replaceState: navegar entre slides não enche o histórico do navegador.
      const url = window.location.pathname + window.location.search + (next === 0 ? '' : `#slide-${next + 1}`);
      window.history.replaceState(null, '', url);
    },
    [total, slides, labels.slideOf],
  );

  // Abre no slide do endereço (#slide-N) e acompanha mudanças do hash.
  useEffect(() => {
    const fromHash = () => {
      const match = /^#slide-(\d+)$/.exec(window.location.hash);
      if (!match) return;
      const n = Number(match[1]);
      if (n >= 1 && n <= total) setCurrent(n - 1);
    };
    fromHash();
    setReady(true);
    // A primeira troca (vinda do hash) é instantânea; as seguintes animam.
    const frame = requestAnimationFrame(() => setAnimate(true));
    window.addEventListener('hashchange', fromHash);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('hashchange', fromHash);
    };
  }, [total]);

  const onKeyDown = (event: React.KeyboardEvent) => {
    if (event.altKey || event.ctrlKey || event.metaKey) return;
    switch (event.key) {
      case 'ArrowRight':
      case 'PageDown':
        event.preventDefault();
        go(current + 1);
        break;
      case 'ArrowLeft':
      case 'PageUp':
        event.preventDefault();
        go(current - 1);
        break;
      case 'Home':
        event.preventDefault();
        go(0);
        break;
      case 'End':
        event.preventDefault();
        go(total - 1);
        break;
    }
  };

  const onTouchStart = (event: React.TouchEvent) => {
    const t = event.touches[0];
    touch.current = { x: t.clientX, y: t.clientY };
  };
  const onTouchEnd = (event: React.TouchEvent) => {
    const start = touch.current;
    touch.current = null;
    if (!start) return;
    const t = event.changedTouches[0];
    const dx = t.clientX - start.x;
    const dy = t.clientY - start.y;
    // Só conta gesto claramente horizontal; rolagem vertical segue normal.
    if (Math.abs(dx) > 48 && Math.abs(dx) > Math.abs(dy) * 1.5) go(current + (dx < 0 ? 1 : -1));
  };

  const atStart = current === 0;
  const atEnd = current === total - 1;

  return (
    <div
      className="pr-deck"
      role="region"
      aria-roledescription="carousel"
      aria-label={labels.deck}
      tabIndex={0}
      onKeyDown={onKeyDown}
    >
      <div className="pr-viewport" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
        <div
          className={`pr-track${animate ? ' is-animated' : ''}`}
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide, i) => (
            <SlideView
              key={slide.key}
              slide={slide}
              index={i}
              total={total}
              hidden={ready && i !== current}
              labels={labels}
            />
          ))}
        </div>
      </div>

      <div className="pr-controls">
        <p className="pr-count" aria-hidden="true">
          {current + 1} / {total}
        </p>
        <div className="pr-segs">
          {slides.map((slide, i) => (
            <button
              key={slide.key}
              type="button"
              className={`pr-seg${i < current ? ' is-past' : ''}${i === current ? ' is-on' : ''}`}
              aria-label={fill(labels.goTo, { n: i + 1 })}
              aria-current={i === current ? 'true' : undefined}
              onClick={() => go(i)}
            />
          ))}
        </div>
        <div className="pr-arrows">
          <button type="button" aria-label={labels.prev} aria-disabled={atStart} onClick={() => !atStart && go(current - 1)}>
            <ArrowLeft size={18} aria-hidden="true" />
          </button>
          <button type="button" aria-label={labels.next} aria-disabled={atEnd} onClick={() => !atEnd && go(current + 1)}>
            <ArrowRight size={18} aria-hidden="true" />
          </button>
        </div>
      </div>

      <p className="sr-only" aria-live="polite" aria-atomic="true">
        {announce}
      </p>
    </div>
  );
}
