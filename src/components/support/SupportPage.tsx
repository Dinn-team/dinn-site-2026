import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { Check, X } from 'lucide-react';
import { ChatWidget2 } from '@/components/home2/ChatWidget2';
import { ClosingCard, H2Head } from '@/components/site/PageShell';
import { contactUrl } from '@/lib/links';
import {
  cta, does, doesNot, doors, faq, goodRequest, groups, hero, inside, presence, steps, team, zoe, zoeKey,
} from './content';
import { ChatDemo, EndDemo, NewRequestDemo, TrackDemo } from './demos';
import {
  ConversationScreen, ErrorScreen, Guide, ListScreen, LockedScreen, MenuHint, Portal, Scaled, TABS,
} from './mocks';

// Página /suporte: mostra, com maquetes fiéis do portal, como a pessoa pede
// ajuda e como as dúvidas são resolvidas. Fonte: docs/suporte/SUPORTE_DINN.md
// (dinn-manager-app). Só dados fictícios; nada aponta para a API real.

type TabId = (typeof TABS)[number]['id'];

export function SupportPage() {
  const [step, setStep] = useState<(typeof inside)[number]['id']>('novo');
  const [tab, setTab] = useState<TabId>('andamento');
  const pin = useRef<HTMLElement>(null);
  const stepIdx = inside.findIndex((x) => x.id === step);

  // Progresso da rolagem na seção fixada: define a etapa e a barra fina de avanço.
  useEffect(() => {
    const el = pin.current;
    if (!el) return;
    const n = inside.length;
    let raf = 0;
    const update = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const dist = r.height - window.innerHeight;
      const p = dist > 0 ? Math.min(1, Math.max(0, -r.top / dist)) : 0;
      const scaled = Math.min(n - 0.0001, p * n);
      const idx = Math.floor(scaled);
      el.style.setProperty('--p', (scaled - idx).toFixed(3));
      setStep(inside[idx].id);
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
  const goStep = (i: number) => {
    const el = pin.current;
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY;
    const dist = el.offsetHeight - window.innerHeight;
    window.scrollTo({ top: top + (dist * (i + 0.02)) / inside.length, behavior: 'smooth' });
  };
  const pinStyle = { ['--n' as string]: inside.length, ['--step' as string]: '70svh' } as CSSProperties;

  return (
    <div className="h2 sp2">
      {/* 1. Hero com a Zoe */}
      <header className="h2-hero sp2-hero">
        <div className="h2-wrap">
          <div className="h2-hero-grid">
            <h1 className="h2-hero-title">{hero.title}</h1>
            <div className="h2-hero-side">
              <p className="h2-hero-sub">{hero.sub}</p>
              <div className="sp2-zoe">
                <img src="/suporte/zoe.webp" alt="" width={56} height={56} />
                <span><strong>{zoe.name}</strong>{zoe.role}</span>
              </div>
              <div className="h2-actions">
                <a className="btn btn-primary" href={contactUrl('suporte-hero')}>{cta.button}</a>
                <a className="h2-link" href="#como-funciona">Ver como funciona →</a>
              </div>
            </div>
          </div>
          <div className="h2-media sp2-media" data-texture>
            <div className="sp2-hero-shot">
              <Scaled width={1040}>
                <Portal supportActive label="Conversa de um pedido no Suporte, com a Zoe respondendo"><ChatDemo /></Portal>
              </Scaled>
            </div>
          </div>
        </div>
      </header>

      {/* 2. Como funciona em 3 passos */}
      <section id="como-funciona" className="h2-section" aria-labelledby="sp2-how">
        <div className="h2-wrap">
          <H2Head id="sp2-how" title="Como funciona" />
          <div className="tr-cols" style={{ ['--cols' as string]: 3 }}>
            {steps.map((s, i) => (
              <article key={s.title} className="tr-col">
                <span className="sp2-n">{String(i + 1).padStart(2, '0')}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 3. As três portas de entrada */}
      <section className="h2-section is-muted" aria-labelledby="sp2-doors">
        <div className="h2-wrap">
          <H2Head id="sp2-doors" title="Três portas de entrada" intro="Você pede ajuda de onde estiver. O pedido já leva o contexto da tela." />
          <ul className="sp2-doors">
            {doors.map((d) => (
              <li key={d.id}>
                <div className="sp2-shot">
                  <Scaled width={640}>
                    {d.id === 'menu' && <Portal supportActive label="Menu lateral do portal com o item Suporte"><MenuHint /></Portal>}
                    {d.id === 'erro' && <Portal bare label="Tela de erro com o botão Abrir pedido no Suporte"><ErrorScreen /></Portal>}
                    {d.id === 'bloqueada' && <Portal bare label="Funcionalidade bloqueada com o link Suporte"><LockedScreen /></Portal>}
                  </Scaled>
                </div>
                <h3>{d.title}</h3>
                <p>{d.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4. O pedido por dentro: a seção fica fixada e a rolagem troca a etapa */}
      <section ref={pin} className="h2-pin sp2-pin" aria-labelledby="sp2-inside" style={pinStyle}>
        <div className="h2-feat-stage">
          <div className="h2-wrap">
            <div className="h2-head is-stack h2-feat-head">
              <div>
                <h2 id="sp2-inside" className="h2-title">O pedido por dentro</h2>
                <p className="h2-sub">Role para ver cada etapa.</p>
              </div>
              <p className="h2-feat-count" aria-hidden="true"><b>{String(stepIdx + 1).padStart(2, '0')}</b> / {String(inside.length).padStart(2, '0')}</p>
            </div>
            <div className="h2-feat-grid">
              <ul className="h2-feat-list">
                {inside.map((s, i) => (
                  <li key={s.id} className={i === stepIdx ? 'is-active' : ''}>
                    <button type="button" className="h2-feat-name" aria-expanded={i === stepIdx} onClick={() => goStep(i)}>
                      <span>{s.tab}</span>
                    </button>
                    <div className="h2-feat-body" aria-hidden={i !== stepIdx}>
                      <div><strong>{s.title}</strong><p>{s.text}</p></div>
                    </div>
                    {i === stepIdx && <span className="h2-feat-prog" aria-hidden="true" />}
                  </li>
                ))}
              </ul>
              <div className="sp2-pinshot" data-texture>
                <div key={step} className="sp2-slide">
                  <Scaled width={1000}>
                    {step === 'novo' && (
                      <Portal supportActive minHeight={720} overlay={<NewRequestDemo />} label="Janela Novo pedido"><ListScreen tab="andamento" guide={false} /></Portal>
                    )}
                    {step === 'conversa' && <Portal supportActive label="Conversa com a Zoe"><ChatDemo /></Portal>}
                    {step === 'encerrar' && <EndDemo />}
                  </Scaled>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Acompanhamento */}
      <section className="h2-section is-muted" aria-labelledby="sp2-track">
        <div className="h2-wrap">
          <h2 id="sp2-track" className="sr-only">Você acompanha tudo</h2>
          <div className="pl-grid sp2-grid">
            <div className="pl-lead">
              <p className="pl-lead-title">Você acompanha tudo</p>
              <p className="pl-lead-text">Três abas organizam os pedidos. A página abre na aba que pede a sua atenção.</p>
            </div>
            {groups.map((g, i) => (
              <article key={g.tab} className={`pl-col ${tab === TABS[i].id ? 'is-on' : ''}`}>
                <div className="pl-card sp2-group-head">
                  <h3>{g.tab}</h3>
                  <p>{g.text}</p>
                </div>
                <p className="pl-from">{g.statuses.length === 1 ? 'Situação' : 'Situações'}</p>
                <ul className="sp2-sits">
                  {g.statuses.map((st) => (
                    <li key={st.label}>
                      <span className="pt"><span className={`badge ${st.tone}`}>{st.label}</span></span>
                      <span>{st.note}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="sp2-panel sp2-wide" data-texture>
            <Scaled width={1000}>
              <TrackDemo onTab={setTab} />
            </Scaled>
          </div>
          <dl className="tr-cols sp2-presence" style={{ ['--cols' as string]: presence.length }}>
            {presence.map((p) => (
              <div key={p.label} className="tr-col"><dt>{p.label}</dt><dd>{p.text}</dd></div>
            ))}
          </dl>
        </div>
      </section>

      {/* 6. O que a Zoe faz e não faz */}
      <section className="h2-section" aria-labelledby="sp2-zoe">
        <div className="h2-wrap">
          <H2Head id="sp2-zoe" title="O que a Zoe faz e não faz" />
          <div className="sp2-key">
            <img src="/suporte/zoe.webp" alt="" width={72} height={72} />
            <p>{zoeKey}</p>
          </div>
          <div className="tr-cols" style={{ ['--cols' as string]: 2 }}>
            <article className="tr-col">
              <h3>Faz</h3>
              <ul className="sp2-list is-yes">
                {does.map((t) => <li key={t}><Check size={15} strokeWidth={2.2} aria-hidden="true" />{t}</li>)}
              </ul>
            </article>
            <article className="tr-col">
              <h3>Não faz</h3>
              <ul className="sp2-list is-no">
                {doesNot.map((t) => <li key={t}><X size={15} strokeWidth={2.2} aria-hidden="true" />{t}</li>)}
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* 7. Como abrir um bom pedido */}
      <section className="h2-section is-muted" aria-labelledby="sp2-good">
        <div className="h2-wrap sp2-split">
          <div>
            <H2Head id="sp2-good" title="Como abrir um bom pedido" intro={goodRequest.intro} />
            <ol className="sp2-checks">
              {goodRequest.items.map((t) => <li key={t}><Check size={15} strokeWidth={2.2} aria-hidden="true" />{t}</li>)}
            </ol>
            <p className="sp2-types-label">Tipos de pedido</p>
            <ul className="tr-chips">
              {goodRequest.types.map((t) => <li key={t}>{t}</li>)}
            </ul>
            <p className="sp2-safety">{goodRequest.safety}</p>
          </div>
          <div className="sp2-guide pt"><Guide /></div>
        </div>
      </section>

      {/* 8. Quando a equipe Dinn assume */}
      <section className="h2-section" aria-labelledby="sp2-team">
        <div className="h2-wrap sp2-split">
          <div>
            <H2Head id="sp2-team" title={team.title} intro={team.text} />
            <ul className="sp2-dest">
              {team.destinations.map((d) => (
                <li key={d.title}><h3>{d.title}</h3><p>{d.text}</p></li>
              ))}
            </ul>
          </div>
          <div className="sp2-panel" data-texture>
            <Scaled width={1000}>
              <Portal supportActive label="Conversa com a equipe Dinn"><ConversationScreen variant="team" /></Portal>
            </Scaled>
          </div>
        </div>
      </section>

      {/* 9. Dúvidas frequentes */}
      <section className="h2-section is-muted" aria-labelledby="sp2-faq">
        <div className="h2-wrap">
          <H2Head id="sp2-faq" title="Dúvidas frequentes" />
          <div className="sp2-faq">
            {faq.map((q) => (
              <details key={q.question}>
                <summary>{q.question}</summary>
                <p>{q.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 10. CTA */}
      <ClosingCard title={cta.title} desc={cta.text} button={cta.button} href={contactUrl('suporte')} gradient="g06" />
      <ChatWidget2 questions={faq} />
    </div>
  );
}
