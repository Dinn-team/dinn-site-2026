import { useRef, type CSSProperties } from 'react';
import { useTranslation } from '@/i18n/useTranslation';
import { useScrollProgress } from './useScrollProgress';

// Manifesto lido com a rolagem: as palavras acendem uma a uma, como se o
// leitor fosse "ligando" o canal. Todo o texto é regular; só os trechos
// marcados com **negrito** no dicionário ganham peso (os sinais e a virada
// "onde agir"). O progresso vira a variável CSS --p na seção; cada palavra
// calcula a própria opacidade no CSS (sem re-render do React a cada quadro).

type Token = { word: string; bold: boolean; line: number };

function tokenize(lines: string[]): Token[] {
  const out: Token[] = [];
  lines.forEach((line, li) => {
    // "texto **negrito** texto": as partes ímpares estão em negrito
    line.split('**').forEach((part, i) => {
      for (const word of part.split(/\s+/).filter(Boolean)) {
        out.push({ word, bold: i % 2 === 1, line: li });
      }
    });
  });
  return out;
}

export function StorySection() {
  const { t } = useTranslation();
  const lines = (t('story.lines') as string[]) ?? [];
  const ref = useRef<HTMLElement>(null);
  useScrollProgress(ref, (p) => ref.current?.style.setProperty('--p', p.toFixed(4)));
  const tokens = tokenize(lines);
  const n = Math.max(1, tokens.length);

  return (
    <section ref={ref} className="story">
      <div className="story-sticky">
        <div className="story-glow" aria-hidden="true" />
        <p className="story-text">
          {lines.map((_, li) => (
            <span key={li} className={`story-line ${li === lines.length - 1 ? 'is-last' : ''}`}>
              {tokens.map((tk, i) =>
                tk.line === li ? (
                  <span
                    key={i}
                    className={`story-word ${tk.bold ? 'is-bold' : ''}`}
                    style={{ '--s': (0.06 + (i / n) * 0.74).toFixed(4) } as CSSProperties}
                  >
                    {tk.word}{' '}
                  </span>
                ) : null,
              )}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
