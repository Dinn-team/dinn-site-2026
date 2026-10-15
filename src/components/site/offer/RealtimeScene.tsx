import { useCallback, useEffect, useRef, useState } from 'react';
import { Calendar, Package, RefreshCw, Share2, Store, Tag, TrendingUp } from 'lucide-react';
import { useTranslation } from '@/i18n/useTranslation';
import { DATE_LOCALE, type Lang } from '@/i18n/routes';
import { Rich } from '@/lib/rich-text';
import { PATHS } from '@/lib/site-map';

// Cena de estoque em tempo real, no desenho do Localizador do Dinn em produção
// (manager-app): mapa com pinos redondos coloridos pelo nível de estoque, e o
// cartão da loja com "Estoque do produto", o botão "Consultar agora", a resposta
// com o horário e giro/parado. Valores de exemplo, rotulados como simulação.
//
// Três formas de andar na cena:
//   1. rolagem  — a seção fica presa na tela e a rolagem passa os 5 passos;
//   2. clique   — nos passos, nos pinos e no botão "Consultar agora";
//   3. automática — 1 s sem interação e a cena corre sozinha, em ciclo.
// A cena toda cabe na tela enquanto está presa (100% visível).

type Level = 'Alto' | 'Médio' | 'Baixo' | 'Indisponível';
const COLORS: Record<Level, string> = { Alto: '#10B981', Médio: '#F59E0B', Baixo: '#EF4444', Indisponível: '#9CA3AF' };

// Dados numéricos da cena (os textos vêm do dicionário: realtime.stores).
const PINS: { x: number; y: number; level: Level; exact: boolean; qty: number; live: number | null; giro: string; stalled: number }[] = [
  { x: 33, y: 36, level: 'Alto', exact: true, qty: 12, live: 11, giro: '0,8', stalled: 2 },
  { x: 62, y: 27, level: 'Médio', exact: false, qty: 5, live: null, giro: '0,4', stalled: 1 },
  { x: 74, y: 57, level: 'Baixo', exact: true, qty: 1, live: 0, giro: '0,2', stalled: 1 },
  { x: 21, y: 63, level: 'Alto', exact: false, qty: 9, live: null, giro: '0,6', stalled: 3 },
  { x: 51, y: 76, level: 'Indisponível', exact: true, qty: 0, live: 0, giro: '0,0', stalled: 0 },
  { x: 87, y: 31, level: 'Alto', exact: true, qty: 14, live: 13, giro: '1,1', stalled: 0 },
];

const STEPS = 5;
const AUTO_DELAY = 1000; // espera por alguma interação antes de correr sozinha
const AUTO_STEP = 2400;
const AUTO_HOLD = 4200;

type Mode = 'idle' | 'auto' | 'scroll' | 'manual';
type Step = { title: string; text: string };
type Store = { name: string; network: string };

function Pin({ i, active, level, onClick, label }: { i: number; active: boolean; level: Level; onClick: () => void; label: string }) {
  const p = PINS[i];
  return (
    <button
      type="button"
      className={`lc-pin ${active ? 'is-active' : ''}`}
      style={{ left: `${p.x}%`, top: `${p.y}%`, background: COLORS[level] }}
      onClick={onClick}
      aria-label={label}
      aria-pressed={active}
    >
      <Store size={18} aria-hidden="true" />
    </button>
  );
}

export function RealtimeStage({ heading = false }: { heading?: boolean }) {
  const { t, lang } = useTranslation();
  const stageRef = useRef<HTMLElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);
  const stores = (t('realtime.stores') as Store[]) ?? [];
  const steps = (t('realtime.steps') as Step[]) ?? [];
  const legend = (t('realtime.legend') as { d1: string; est: string; live: string }) ?? { d1: '', est: '', live: '' };
  const popup = (t('realtime.popup') as unknown as Record<string, string>) ?? {};

  const [step, setStep] = useState(0);
  const [pin, setPin] = useState(0);
  const [mode, setMode] = useState<Mode>('idle');
  const [at, setAt] = useState('');
  const modeRef = useRef<Mode>('idle');
  modeRef.current = mode;
  const reduce = useRef(false);

  const timeNow = useCallback(
    () => new Date().toLocaleTimeString(DATE_LOCALE[lang as Lang] ?? 'pt-BR', { hour: '2-digit', minute: '2-digit' }),
    [lang],
  );

  // Quem pediu menos movimento vê a cena já no resultado, sem cena automática.
  useEffect(() => {
    reduce.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce.current) {
      setStep(3);
      setAt(timeNow());
      setMode('manual');
    }
  }, [timeNow]);

  // O horário da resposta é o do momento em que o passo 3 é alcançado.
  useEffect(() => {
    if (step >= 3 && !at) setAt(timeNow());
    if (step < 3 && at) setAt('');
  }, [step, at, timeNow]);

  // ── 1. Rolagem ──────────────────────────────────────────────────────────
  // Em tela larga a seção é alta e a cena fica presa; o progresso da rolagem
  // dentro dela escolhe o passo. Em tela estreita (empilhada) não há rolagem
  // guiada: a página rola normal.
  const lastP = useRef(0);
  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const wide = () => window.matchMedia('(min-width: 981px)').matches;
    let raf = 0;
    const measure = () => {
      raf = 0;
      if (!wide()) return;
      const r = el.getBoundingClientRect();
      const span = r.height - window.innerHeight;
      if (span <= 0) return;
      const p = Math.min(1, Math.max(0, -r.top / span));
      if (Math.abs(p - lastP.current) < 0.002) return;
      const moved = p !== lastP.current;
      lastP.current = p;
      if (moved && p > 0 && p < 1) {
        setMode('scroll');
        const s = Math.min(STEPS - 1, Math.floor(p * STEPS));
        setStep(s);
        // da consulta em diante, a rolagem usa uma loja que aceita consulta
        if (s >= 2) setPin((cur) => (PINS[cur].exact ? cur : 0));
      }
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(measure);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  // ── 3. Automática ───────────────────────────────────────────────────────
  // Com a cena 100% visível e 1 s sem interação, ela corre sozinha, em ciclo.
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = sceneRef.current;
    if (!el) return;
    const check = () => {
      const r = el.getBoundingClientRect();
      const top = 76; // abaixo do menu fixo
      setVisible(r.top >= top - 4 && r.bottom <= window.innerHeight + 4);
    };
    // Reavalia também quando a rolagem para: a seção presa (sticky) só assenta
    // na posição final depois do último evento de rolagem.
    let settle = 0;
    const onChange = () => {
      check();
      window.clearTimeout(settle);
      settle = window.setTimeout(check, 160);
    };
    check();
    const first = window.setTimeout(check, 400);
    window.addEventListener('scroll', onChange, { passive: true });
    window.addEventListener('resize', onChange);
    return () => {
      window.clearTimeout(settle);
      window.clearTimeout(first);
      window.removeEventListener('scroll', onChange);
      window.removeEventListener('resize', onChange);
    };
  }, []);

  useEffect(() => {
    if (reduce.current || !visible || (mode !== 'idle' && mode !== 'auto')) return;
    let timers: number[] = [];
    let cancelled = false;
    const clear = () => {
      cancelled = true;
      timers.forEach((id) => window.clearTimeout(id));
      timers = [];
    };
    const play = () => {
      if (cancelled) return;
      setMode('auto');
      setPin(0);
      setStep(0);
      for (let s = 1; s < STEPS; s++) {
        timers.push(window.setTimeout(() => !cancelled && setStep(s), s * AUTO_STEP));
      }
      timers.push(window.setTimeout(play, (STEPS - 1) * AUTO_STEP + AUTO_HOLD));
    };
    timers.push(window.setTimeout(play, mode === 'idle' ? AUTO_DELAY : 0));
    return clear;
    // reinicia só quando o modo ou a visibilidade mudam
  }, [visible, mode]);

  // ── 2. Clique ───────────────────────────────────────────────────────────
  const goStep = (i: number) => {
    setMode('manual');
    setStep(i);
    if (i >= 1) setPin(0);
  };
  const choosePin = (i: number) => {
    setMode('manual');
    setPin(i);
    setStep(1);
  };
  const consult = () => {
    setMode('manual');
    setStep(2);
  };
  // Clique em "Consultar agora": a resposta chega pouco depois.
  useEffect(() => {
    if (mode !== 'manual' || step !== 2) return;
    const id = window.setTimeout(() => setStep(3), 1100);
    return () => window.clearTimeout(id);
  }, [mode, step]);
  // Depois da resposta, o último passo mostra a orientação.
  const shared = step >= 4;

  const p = PINS[pin];
  const consulting = step === 2 && p.exact;
  const live = step >= 3 && p.exact;
  const bigQty = live ? (p.live ?? p.qty) : p.qty;
  const eligible = p.exact;

  return (
    <section ref={stageRef} className="lc-stage" id={heading ? 'tempo-real' : undefined} aria-labelledby={heading ? 'lc-title' : undefined}>
      <div className="lc-sticky">
        <div className="wrap lc-grid">
          <div className="lc-copy">
            {heading && (
              <>
                <p className="teams-eyebrow">{t('realtime.eyebrow')}</p>
                <h2 id="lc-title" className="lc-title"><Rich text={t('realtime.title') as string} /></h2>
                <p className="lc-text">{t('realtime.text')}</p>
              </>
            )}
            <ol className="lc-steps" aria-label={t('realtime.stepsLabel') as string}>
              {steps.map((s, i) => (
                <li key={s.title}>
                  <button
                    type="button"
                    className={i === step ? 'is-active' : i < step ? 'is-done' : ''}
                    aria-current={i === step ? 'step' : undefined}
                    onClick={() => goStep(i)}
                  >
                    <span className="lc-n" aria-hidden="true">{i + 1}</span>
                    <span>
                      <strong>{s.title}</strong>
                      <em>{s.text}</em>
                    </span>
                  </button>
                </li>
              ))}
            </ol>
            <p className="lc-condition">{t('realtime.condition')}</p>
            {heading && <p className="sp-more lc-more"><a href={PATHS.locator}>{t('realtime.link')} →</a></p>}
          </div>

          <div className="lc-scene" ref={sceneRef}>
            <div className="lc-appbar">
              <span className="lc-brand" aria-hidden="true" />
              <span>{t('menu.locator')}</span>
              <span className="lc-tag">{t('realtime.sim')}</span>
            </div>

            <div className="lc-mapwrap">
            <div className="lc-map" role="img" aria-label={t('realtime.mapAria') as string}>
              <svg viewBox="0 0 640 440" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
                <rect width="640" height="440" fill="#EEF0EB" />
                <path d="M-20 318 C110 262 200 350 330 306 S560 246 660 292 V460 H-20Z" fill="#D3E4EE" />
                <rect x="56" y="34" width="132" height="88" rx="12" fill="#DDEBD3" />
                <rect x="452" y="214" width="116" height="74" rx="12" fill="#DDEBD3" />
                <rect x="268" y="150" width="86" height="52" rx="10" fill="#E6E8E1" />
                {[
                  'M-10 130 C150 150 260 110 430 150 S590 120 650 140',
                  'M118 -10 C140 120 120 250 170 460',
                  'M390 -10 C380 100 420 250 400 460',
                  'M-10 230 C200 210 400 260 650 220',
                  'M560 -10 C540 120 590 260 570 460',
                ].map((d) => (
                  <g key={d}>
                    <path d={d} stroke="#D9DCDF" strokeWidth="13" fill="none" strokeLinecap="round" />
                    <path d={d} stroke="#fff" strokeWidth="10" fill="none" strokeLinecap="round" />
                  </g>
                ))}
                {['M-10 70 L650 90', 'M250 -10 L270 460', 'M480 -10 L470 460', 'M-10 380 L650 360', 'M40 -10 L60 460'].map((d) => (
                  <path key={d} d={d} stroke="#fff" strokeWidth="5" opacity="0.9" />
                ))}
              </svg>

              <span className="lc-address" style={{ left: '47%', top: '53%' }} aria-hidden="true" />
              {PINS.map((_, i) => (
                <Pin
                  key={i}
                  i={i}
                  level={PINS[i].level}
                  active={i === pin && step >= 1}
                  onClick={() => choosePin(i)}
                  label={`${stores[i]?.name ?? ''} · ${stores[i]?.network ?? ''}`}
                />
              ))}
            </div>

              {step >= 1 && (
                <div className="lc-popup" key={`${pin}-${eligible}`} role="dialog" aria-label={stores[pin]?.name}>
                  <div className="lc-popup-head">
                    <h3>{stores[pin]?.name}</h3>
                    <span className={`lc-model ${p.exact ? 'is-exact' : 'is-est'}`}>
                      {p.exact ? <Store size={13} aria-hidden="true" /> : <Package size={13} aria-hidden="true" />}
                      {p.exact ? popup.exact : popup.estimated}
                    </span>
                  </div>
                  <p className="lc-network">{stores[pin]?.network}</p>

                  <div className="lc-popup-grid">
                    <div className="lc-stock">
                      <p className="lc-stock-title">{popup.stockTitle}</p>
                      <div className="lc-stock-row">
                        <p className="lc-big">
                          <span>{bigQty}</span> {popup.units}
                          {live && bigQty > 0 && <small>{popup.available}</small>}
                        </p>
                        {eligible && !live && (
                          <button type="button" className="lc-consult" onClick={consult} disabled={consulting}>
                            <RefreshCw size={12} className={consulting ? 'is-spin' : ''} aria-hidden="true" />
                            {consulting ? popup.consulting : popup.consult}
                          </button>
                        )}
                      </div>
                      {live ? (
                        <p className="lc-status is-live" role="status">
                          <i aria-hidden="true" />
                          {String(popup.liveNow).replace('{time}', at || timeNow())}
                        </p>
                      ) : (
                        <p className="lc-status">
                          <Calendar size={12} aria-hidden="true" />
                          {popup.updated}
                        </p>
                      )}
                      {!eligible && <p className="lc-na">{popup.notEligible}</p>}
                      <p className="lc-price">
                        <Tag size={13} aria-hidden="true" />
                        <strong>{popup.price}</strong> {popup.perUnit}
                      </p>
                    </div>

                    <div className="lc-side">
                      <div className="lc-mini is-giro">
                        <span className="lc-mini-icon"><TrendingUp size={15} aria-hidden="true" /></span>
                        <div>
                          <small>{popup.giro}</small>
                          <strong>{p.giro} <em>{popup.perDay}</em></strong>
                        </div>
                      </div>
                      <div className="lc-mini is-stalled">
                        <span className="lc-mini-icon"><Package size={15} aria-hidden="true" /></span>
                        <div>
                          <small>{popup.stalled}</small>
                          <strong>{p.stalled} {popup.units} <em>{popup.stalledDays}</em></strong>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="lc-share">
                    <span className={`lc-share-btn ${shared ? 'is-done' : ''}`}>
                      <Share2 size={13} aria-hidden="true" />
                      {shared ? popup.shared : popup.share}
                    </span>
                  </div>
                </div>
              )}
            </div>

            <ul className="lc-legend">
              <li><i className="is-d1" />{legend.d1}</li>
              <li><i className="is-est" />{legend.est}</li>
              <li><i className="is-live" />{legend.live}</li>
            </ul>
            {shared && <p className="lc-orient">{t('realtime.orient')}</p>}
          </div>
        </div>
      </div>
    </section>
  );
}
