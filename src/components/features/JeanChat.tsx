import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import type { FeatureUi } from './ui';
import type { ChatTurn } from './types';

// Conversa animada com a Jean, no estilo do chat da ElevenLabs: as mensagens fluem sobre um degradê,
// a pergunta é digitada, a Jean pensa, consulta os dados e escreve a resposta. Depois vêm o cartão com
// o resultado, a data do dado e o botão do próximo passo, como no chat do Dinn. Roda em laço.
// Dados fictícios. A Jean só lê dados e nunca altera nada.

type Item =
  | { k: 'q'; text: string }
  | { k: 'think'; text: string }
  | { k: 'a'; text: string; turn: ChatTurn; full: boolean }
  | { k: 'steps'; labels: string[] };

const reducedMotion = () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Estado final de toda a conversa, para "reduzir movimento" e para leitores de tela. */
const finalItems = (turns: ChatTurn[]): Item[] =>
  turns.flatMap((t): Item[] => [
    { k: 'q', text: t.q },
    { k: 'a', text: t.a, turn: t, full: true },
    ...(t.steps ? ([{ k: 'steps', labels: t.steps }] as Item[]) : []),
  ]);

export function JeanChat({ turns, bg, ui }: { turns: ChatTurn[]; bg: string; ui: FeatureUi }) {
  const box = useRef<HTMLDivElement>(null);
  const [items, setItems] = useState<Item[]>(() => finalItems(turns));
  const [fade, setFade] = useState(false);
  const [seen, setSeen] = useState(false);

  // Só começa quando a conversa chega perto da tela.
  useEffect(() => {
    const el = box.current;
    if (!el || typeof IntersectionObserver === 'undefined') { setSeen(true); return; }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setSeen(true); io.disconnect(); } }, { rootMargin: '0px 0px -10% 0px' });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!seen || reducedMotion()) return;
    let on = true;
    // Depois do cleanup a pausa nunca termina: um laço antigo não mexe mais na conversa.
    const sleep = (ms: number) => new Promise<void>((r) => setTimeout(() => on && r(), ms));
    const push = (it: Item) => setItems((p) => [...p, it]);
    const last = (it: Item) => setItems((p) => [...p.slice(0, -1), it]);
    (async () => {
      while (on) {
        setItems([]);
        setFade(false);
        await sleep(700);
        for (const t of turns) {
          // 1. A pessoa digita a pergunta.
          push({ k: 'q', text: '' });
          for (let i = 1; i <= t.q.length; i++) {
            last({ k: 'q', text: t.q.slice(0, i) });
            await sleep(24 + (i % 4) * 7);
          }
          await sleep(380);
          // 2. A Jean pensa e consulta os dados.
          push({ k: 'think', text: ui.thinking });
          await sleep(800);
          last({ k: 'think', text: ui.querying });
          await sleep(1100);
          // 3. A Jean escreve a resposta.
          last({ k: 'a', text: '', turn: t, full: false });
          for (let i = 2; i <= t.a.length + 1; i += 2) {
            last({ k: 'a', text: t.a.slice(0, i), turn: t, full: false });
            await sleep(20);
          }
          last({ k: 'a', text: t.a, turn: t, full: true });
          await sleep(1100);
          if (t.steps) {
            push({ k: 'steps', labels: t.steps });
            await sleep(900);
          }
          await sleep(1500);
        }
        await sleep(4200);
        setFade(true);
        await sleep(600);
      }
    })();
    return () => { on = false; };
  }, [seen, turns, ui]);

  return (
    <div ref={box} className="jc" style={{ backgroundImage: bg }} data-texture>
      <div className={`jc-feed ${fade ? 'is-out' : ''}`} aria-hidden="true">
        {items.map((it, i) => {
          if (it.k === 'q') return <p key={i} className="jc-q">{it.text}<span className="jc-caret" /></p>;
          if (it.k === 'think') return (
            <p key={i} className="jc-a jc-think"><span className="jc-dots"><i /><i /><i /></span>{it.text}…</p>
          );
          if (it.k === 'a') return (
            <div key={i} className="jc-a">
              <p>{it.text}{!it.full && <span className="jc-caret is-dark" />}</p>
              {it.full && it.turn.card && (
                <div className="jc-card">
                  <b>{it.turn.card.title}</b>
                  <ul>{it.turn.card.rows.map(([l, v]) => <li key={l}><span>{l}</span><strong>{v}</strong></li>)}</ul>
                </div>
              )}
            </div>
          );
          return (
            <div key={i} className="jc-steps">
              {it.labels.map((l) => <span key={l}>{l}<ArrowUpRight size={14} /></span>)}
            </div>
          );
        })}
      </div>
      {/* Transcrição completa para leitores de tela */}
      <div className="sr-only">
        {turns.map((t) => <p key={t.q}>{ui.srQuestion} {t.q} {ui.srAnswer} {t.a}</p>)}
      </div>
    </div>
  );
}
