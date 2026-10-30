import { useEffect, useRef, useState } from 'react';
import { ConversationScreen, EndDialog, ListScreen, Portal, TABS } from './mocks';
import { ArrowLeft, Check, CheckCheck, ChevronDown, CircleCheck, CircleX, ImagePlus, Send, X } from 'lucide-react';

// Demonstrações animadas do portal: o pedido sendo preenchido e a conversa com a
// Zoe. Os textos são os das réplicas de docs/suporte (dados fictícios). Com
// "reduzir movimento" ligado, mostram só o estado final.

const ZOE = '/suporte/zoe-256.webp';
const reduced = () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Executa `play` em laço, com atrasos cancelavéis. */
function useScript(play: (sleep: (ms: number) => Promise<void>, alive: () => boolean) => Promise<void>, final: () => void) {
  useEffect(() => {
    if (reduced()) {
      final();
      return;
    }
    let on = true;
    const alive = () => on;
    // Depois do cleanup a pausa nunca termina: um laço antigo não mexe mais na tela.
    const sleep = (ms: number) => new Promise<void>((r) => setTimeout(() => on && r(), ms));
    (async () => {
      while (on) {
        await play(sleep, alive);
      }
    })();
    return () => {
      on = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}

async function type(set: (s: string) => void, text: string, sleep: (ms: number) => Promise<void>, alive: () => boolean, ms = 28) {
  for (let i = 1; i <= text.length && alive(); i++) {
    set(text.slice(0, i));
    await sleep(ms);
  }
}

// ── Conversa ──────────────────────────────────────────────────────────────
type Msg = { id: number; from: 'me' | 'zoe'; text: string; shot?: boolean; receipt?: 'sent' | 'read' };
const U1 = 'O estoque da Drogaria Exemplo (CNPJ 00.000.000/0001-00) está parado desde segunda. Segue o print.';
const Z1 = 'Olá, obrigada por avisar. Conferi o cadastro da Drogaria Exemplo e vi que a última leitura de estoque foi na segunda-feira. Vou olhar o produto que você citou antes de te responder.';
const U2 = 'É o Produto A, EAN 7890000000000.';
const Z2 = 'Achei o Produto A. A última leitura de estoque dessa loja foi na segunda, às 08:12. Desde então, o arquivo de estoque não chegou. Peça ao responsável pelo PDV para reenviar o arquivo. Depois eu confiro de novo.';

export function ChatDemo() {
  const [msgs, setMsgs] = useState<Msg[]>([]);
  const [draft, setDraft] = useState('');
  const [activity, setActivity] = useState<string | null>(null);
  const [badge, setBadge] = useState('Em atendimento');
  const box = useRef<HTMLDivElement>(null);

  useScript(
    async (sleep, alive) => {
      setMsgs([]); setDraft(''); setActivity(null);
      await sleep(900);
      await type(setDraft, U1, sleep, alive);
      await sleep(500);
      setMsgs([{ id: 1, from: 'me', text: U1, shot: true, receipt: 'sent' }]); setDraft('');
      await sleep(900);
      setMsgs((m) => m.map((x) => (x.id === 1 ? { ...x, receipt: 'read' } : x)));
      setActivity('Lendo sua mensagem'); await sleep(1300);
      setActivity('Consultando o cadastro'); await sleep(1500);
      setActivity(null);
      setMsgs((m) => [...m, { id: 2, from: 'zoe', text: Z1 }]);
      await sleep(1800);
      await type(setDraft, U2, sleep, alive);
      await sleep(400);
      setMsgs((m) => [...m, { id: 3, from: 'me', text: U2, receipt: 'sent' }]); setDraft('');
      await sleep(800);
      setMsgs((m) => m.map((x) => (x.id === 3 ? { ...x, receipt: 'read' } : x)));
      setActivity('Procurando o produto'); await sleep(1400);
      setActivity('Conferindo o estoque'); await sleep(2200);
      setActivity('Escrevendo a resposta'); await sleep(1600);
      setActivity(null);
      setMsgs((m) => [...m, { id: 4, from: 'zoe', text: Z2 }]);
      await sleep(5000);
    },
    () => {
      setMsgs([
        { id: 1, from: 'me', text: U1, shot: true, receipt: 'read' },
        { id: 2, from: 'zoe', text: Z1 },
        { id: 3, from: 'me', text: U2, receipt: 'read' },
        { id: 4, from: 'zoe', text: Z2 },
      ]);
    },
  );

  useEffect(() => {
    if (box.current) box.current.scrollTop = box.current.scrollHeight;
  }, [msgs, activity]);

  return (
    <div className="page tight" role="img" aria-label="Demonstração: a pessoa envia o problema e a Zoe analisa e responde no chat">
      <div style={{ display: 'contents' }}>
        <span className="back"><ArrowLeft className="i" aria-hidden="true" />Voltar para Suporte</span>
        <div className="conv-head">
          <div style={{ minWidth: 0, display: 'flex', flexDirection: 'column', gap: 4 }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 8 }}>
              <span className="code" style={{ fontSize: 14 }}>SAU-0042</span>
              <span className="badge blue">{badge}</span>
            </div>
            <h1 className="conv-title">Estoque do PDV não atualiza</h1>
          </div>
          <span className="btn outline sm"><CircleX className="i" aria-hidden="true" />Encerrar pedido</span>
        </div>
        <div className="card flush">
          <div className="messages demo-msgs" ref={box}>
            <div className="day">30 de outubro de 2026</div>
            {msgs.map((m) =>
              m.from === 'me' ? (
                <div key={m.id} className="msg mine demo-in">
                  <div className="bubble mine">
                    <p className="who"><b>Você</b></p>
                    <p className="text">{m.text}</p>
                    {m.shot && <div className="attach-row"><div className="shot">print-da-tela.png</div></div>}
                    <p className={`receipt ${m.receipt === 'read' ? 'read' : ''}`}>
                      {m.receipt === 'read' ? <CheckCheck className="i" aria-hidden="true" /> : <Check className="i" aria-hidden="true" />}
                      <span>{m.receipt === 'read' ? 'Lida' : 'Enviada'}</span>
                    </p>
                  </div>
                </div>
              ) : (
                <div key={m.id} className="msg demo-in">
                  <img className="zoe-avatar" src={ZOE} alt="" width={32} height={32} />
                  <div className="bubble"><p className="who"><b>Zoe</b></p><p className="text">{m.text}</p></div>
                </div>
              ),
            )}
            {activity && (
              <div className="typing demo-in">
                <img className="zoe-avatar" src={ZOE} alt="" width={32} height={32} />
                <div><p className="word"><span>{activity}</span><span className="support-dots" aria-hidden="true"><span /><span /><span /></span></p></div>
              </div>
            )}
          </div>
        </div>
        <div className="composer">
          <div className={`textarea ${draft ? '' : 'placeholder'}`} style={{ height: 66 }}>
            {draft || 'Escreva sua resposta'}{draft && <span className="demo-caret" />}
          </div>
          <div className="composer-foot"><span>{draft.length}/4000</span><span className="btn"><Send className="i" aria-hidden="true" />Enviar</span></div>
        </div>
      </div>
    </div>
  );
}

// ── Novo pedido, preenchido com zoom ──────────────────────────────────────
const ZOOM: Record<string, { s: number; x: string; y: string }> = {
  all: { s: 1, x: '50%', y: '50%' },
  subject: { s: 1.35, x: '45%', y: '22%' },
  message: { s: 1.3, x: '45%', y: '40%' },
  kind: { s: 1.35, x: '40%', y: '62%' },
  attach: { s: 1.35, x: '25%', y: '78%' },
  send: { s: 1.4, x: '80%', y: '92%' },
};

export function NewRequestDemo() {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [kind, setKind] = useState('');
  const [attached, setAttached] = useState(false);
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);
  const [zoom, setZoom] = useState('all');

  useScript(
    async (sleep, alive) => {
      setSubject(''); setMessage(''); setKind(''); setAttached(false); setSending(false); setDone(false); setZoom('all');
      await sleep(1000);
      setZoom('subject'); await sleep(500);
      await type(setSubject, 'Estoque do PDV não atualiza', sleep, alive, 40);
      await sleep(400);
      setZoom('message'); await sleep(500);
      await type(setMessage, 'O estoque da Drogaria Exemplo (CNPJ 00.000.000/0001-00) está parado desde segunda.', sleep, alive, 22);
      await sleep(400);
      setZoom('kind'); await sleep(600);
      setKind('Dado de estoque ou ruptura'); await sleep(900);
      setZoom('attach'); await sleep(600);
      setAttached(true); await sleep(1000);
      setZoom('send'); await sleep(600);
      setSending(true); await sleep(500);
      setZoom('all'); setDone(true); await sleep(2800);
    },
    () => { setSubject('Estoque do PDV não atualiza'); setMessage('O estoque da Drogaria Exemplo (CNPJ 00.000.000/0001-00) está parado desde segunda.'); setKind('Dado de estoque ou ruptura'); setAttached(true); },
  );

  const z = ZOOM[zoom];
  return (
    <div className="overlay demo-overlay" role="img" aria-label="Demonstração: o pedido sendo preenchido e enviado">
      <div className="demo-stage" style={{ transform: `scale(${z.s})`, transformOrigin: `${z.x} ${z.y}` }}>
        <div className="dialog wide demo-dialog">
          <div className="dialog-header"><h2 className="dialog-title">Novo pedido</h2><p className="muted">Conte o que está acontecendo. A Zoe responde aqui mesmo.</p></div>
          <div className="field"><span className="label">Assunto</span><div className={`input ${subject ? '' : 'placeholder'}`}>{subject || 'Ex.: Estoque do PDV não atualiza'}</div></div>
          <div className="field">
            <span className="label">O que está acontecendo?</span>
            <div className={`textarea ${message ? '' : 'placeholder'}`} style={{ height: 96 }}>{message || 'Descreva o problema: o nome e o CNPJ do PDV, o produto, desde quando acontece e o que você esperava ver.'}</div>
            <p className="counter">{message.length}/4000</p>
          </div>
          <div className="field"><span className="label">Tipo de pedido (opcional)</span><div className="select"><span className={kind ? '' : 'placeholder'}>{kind || 'Não sei dizer'}</span><ChevronDown className="i" aria-hidden="true" /></div></div>
          <div className="field">
            <span className="label">Print da tela</span>
            <div className="attach-row">
              <span className="btn outline sm"><ImagePlus className="i" aria-hidden="true" />Anexar print</span>
              {attached ? <div className="thumb demo-in"><span className="rm"><X className="i" aria-hidden="true" /></span></div> : <span className="attach-hint">PNG, JPG, WEBP ou GIF. Até 3 imagens. Reduzimos o tamanho sozinhos.</span>}
            </div>
          </div>
          <div className="dialog-footer"><span className="btn outline">Cancelar</span><span className="btn" style={{ transform: sending ? 'scale(0.96)' : undefined }}>Enviar pedido</span></div>
          <span className="btn ghost icon-sm x"><X className="i" aria-hidden="true" /></span>
          {done && <div className="demo-toast demo-in"><CircleCheck className="i" aria-hidden="true" />Pedido SAU-0042 aberto. A Zoe já vai responder.</div>}
        </div>
      </div>
    </div>
  );
}


function useCursor(x: number, y: number) {
  const [cur, set] = useState({ x, y, n: 0, show: false });
  return {
    cur,
    move: (p: { x: number; y: number }) => set((c) => ({ ...c, ...p, show: true })),
    press: () => set((c) => ({ ...c, n: c.n + 1 })),
  };
}

// A ponta do cursor fica exatamente em (x, y). O clique é um anel que abre na ponta.
function Cursor({ cur, hidden }: { cur: { x: number; y: number; n: number; show: boolean }; hidden: boolean }) {
  return (
    <div className="demo-cursor" style={{ transform: `translate(${cur.x}px, ${cur.y}px)`, opacity: cur.show && !hidden ? 1 : 0 }} aria-hidden="true">
      {cur.n > 0 && <span key={cur.n} className="demo-ripple" />}
      <svg width="44" height="44" viewBox="0 0 24 24"><path d="M4 2 L4 19 L8.5 14.8 L11.8 22 L14.6 20.8 L11.4 13.8 L17.5 13.6 Z" fill="#111" stroke="#fff" strokeWidth="1.4" strokeLinejoin="round" /></svg>
    </div>
  );
}

// ── Lista de pedidos: o cursor troca as abas sozinho ───────────────────────
type TabId = (typeof TABS)[number]['id'];

export function TrackDemo({ onTab }: { onTab?: (t: TabId) => void }) {
  const [tab, setTab] = useState<TabId>('andamento');
  const { cur, move, press } = useCursor(760, 440);
  const wrap = useRef<HTMLDivElement>(null);

  const spot = (i: number) => {
    const w = wrap.current;
    const el = w?.querySelectorAll('.tabs-list > *')[i] as HTMLElement | undefined;
    if (!w || !el) return null;
    const scale = w.getBoundingClientRect().width / w.offsetWidth || 1;
    const a = w.getBoundingClientRect();
    const b = el.getBoundingClientRect();
    return { x: (b.left - a.left + b.width * 0.5) / scale, y: (b.top - a.top + b.height * 0.55) / scale };
  };
  const pick = (t: TabId) => { setTab(t); onTab?.(t); };

  useScript(
    async (sleep) => {
      const order = [0, 1, 2];
      pick('andamento');
      move({ x: 760, y: 440 });
      await sleep(1200);
      for (const i of order) {
        const p = spot(i);
        if (!p) continue;
        move(p);
        await sleep(1100);
        // Mede de novo antes do clique: se o layout mexeu, o cursor acompanha.
        const q = spot(i) ?? p;
        move(q);
        await sleep(60);
        press();
        await sleep(160);
        pick(TABS[i].id);
        await sleep(2400);
      }
      const p = spot(0);
      if (p) move({ x: 760, y: 440 });
      await sleep(600);
    },
    () => { pick('aguardando'); },
  );

  return (
    <div className="demo-track" ref={wrap} role="img" aria-label="Demonstração: o cursor troca as abas da lista de pedidos">
      <Portal supportActive><ListScreen tab={tab} guide={false} /></Portal>
      <Cursor cur={cur} hidden={false} />
    </div>
  );
}

// ── Encerrar o pedido: clique, confirmação e volta para a lista ────────────
export function EndDemo() {
  const [phase, setPhase] = useState<'chat' | 'dialog' | 'list'>('chat');
  const { cur, move, press } = useCursor(820, 560);
  const wrap = useRef<HTMLDivElement>(null);

  const spot = (sel: string, fx = 0.5, fy = 0.5) => {
    const w = wrap.current;
    const el = w?.querySelector(sel) as HTMLElement | null;
    if (!w || !el) return null;
    const a = w.getBoundingClientRect();
    const scale = a.width / w.offsetWidth || 1;
    const b = el.getBoundingClientRect();
    return { x: (b.left - a.left + b.width * fx) / scale, y: (b.top - a.top + b.height * fy) / scale };
  };
  const click = async (sleep: (ms: number) => Promise<void>, sel: string) => {
    const p = spot(sel);
    if (!p) return;
    move(p);
    await sleep(1100);
    const q = spot(sel) ?? p;
    move(q);
    await sleep(60);
    press();
    await sleep(180);
  };

  useScript(
    async (sleep) => {
      setPhase('chat');
      move({ x: 820, y: 560 });
      await sleep(1800);
      await click(sleep, '.conv-head .btn');
      setPhase('dialog');
      await sleep(1100);
      await click(sleep, '.dialog .btn.destructive');
      await sleep(250);
      setPhase('list');
      await sleep(3600);
    },
    () => setPhase('dialog'),
  );

  return (
    <div className="demo-track" ref={wrap} role="img" aria-label="Demonstração: o cursor clica em Encerrar pedido, confirma e a lista de pedidos volta">
      {phase === 'list'
        ? <Portal supportActive><ListScreen tab="encerrados" guide={false} closed /></Portal>
        : <Portal supportActive overlay={phase === 'dialog' ? <EndDialog /> : undefined}><ConversationScreen /></Portal>}
      <Cursor cur={cur} hidden={phase === 'list'} />
    </div>
  );
}
