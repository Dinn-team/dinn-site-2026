import { Fragment } from 'react';

// Marcação mínima usada nos textos traduzidos: **negrito** e *destaque*.
// Em títulos, o destaque vira o itálico light do design system; no corpo,
// só o negrito é esperado.
const TOKEN = /(\*\*[^*]+\*\*|\*[^*]+\*)/g;

export function Rich({ text }: { text: string }) {
  const parts = String(text ?? '').split(TOKEN);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={i}>{part.slice(2, -2)}</strong>;
        }
        if (part.startsWith('*') && part.endsWith('*') && part.length > 2) {
          return <em key={i} className="em-light">{part.slice(1, -1)}</em>;
        }
        return <Fragment key={i}>{part}</Fragment>;
      })}
    </>
  );
}
