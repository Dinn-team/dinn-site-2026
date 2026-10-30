import { useEffect, useMemo, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, Check, X } from 'lucide-react';
import { useTranslation } from '@/i18n/useTranslation';
import { Rich } from '@/lib/rich-text';
import { contactUrl } from '@/lib/links';
import { ChatWidget2 } from '@/components/home2/ChatWidget2';
import { H2Head } from './PageShell';
import { IlConnect, IlMcp, IlSearch, IlSteps } from '@/components/illustrations';

type Info = { title: string; text: string };
type Beyond = Info & { href: string; cta: string };
type Code = 'i' | 'c' | 'a';
type AddonRow = { name: string; text: string; tiers: Code[] };

const BEYOND_ART = [IlMcp, IlConnect, IlSearch, IlSteps];

// Planos no padrão da home e na estrutura da página de preços da ElevenLabs:
// colunas separadas por fio fino, cartão no topo (o plano mais completo em
// degradê), botão, "Tudo no plano anterior, mais" e a lista do que muda.
// Em vez da calculadora de uso, o visitante monta o escopo e vê o plano indicado.
export function PlansPage() {
  const { t } = useTranslation();
  const track = useRef<HTMLUListElement>(null);
  const [edge, setEdge] = useState({ start: true, end: false });
  const tiers = (t('plans.tiers') as { name: string; text: string }[]) ?? [];
  const compare = t('plans.compare') as unknown as { title: string; intro: string; columns: string[]; rows: string[][]; note: string };
  const addons = t('plans.addons') as unknown as {
    title: string; intro: string; columns: string[]; labels: Record<Code, string>; legend: string; rows: AddonRow[];
  };
  const grid = t('plans.grid') as unknown as { label: string; fromPrev: string; first: string; price: string; priceNote: string; minimum: string };
  const build = t('plans.build') as unknown as { title: string; step: string; empty: string; recommended: string; none: string; cta: string };
  const beyond = (t('plans.beyond.items') as Beyond[]) ?? [];
  const start = (t('plans.start.items') as Info[]) ?? [];
  const faq = (t('plans.faq.items') as { question: string; answer: string }[]) ?? [];

  const sync = () => {
    const el = track.current;
    if (!el) return;
    setEdge({ start: el.scrollLeft <= 4, end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 4 });
  };
  useEffect(() => {
    sync();
    window.addEventListener('resize', sync);
    return () => window.removeEventListener('resize', sync);
  }, [beyond.length]);
  const go = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector('li')?.getBoundingClientRect().width ?? 0;
    el.scrollBy({ left: dir * (card + 32), behavior: 'smooth' });
  };

  const ask = addons.labels.a;
  const rows = compare.rows ?? [];
  const minimumRow = rows[rows.length - 1] ?? [];
  const body = rows.slice(0, -1);

  // O que cada coluna mostra: o primeiro plano lista o que tem; os seguintes,
  // só o que muda em relação ao plano anterior.
  const features = (tier: number) =>
    body
      .map((r) => ({ label: r[0], value: r[tier + 1], prev: tier > 0 ? r[tier] : undefined }))
      .filter((f) => f.value !== ask && (tier === 0 || f.value !== f.prev));

  const [picked, setPicked] = useState<number[]>([]);
  const toggle = (i: number) => setPicked((p) => (p.includes(i) ? p.filter((x) => x !== i) : [...p, i]));
  const suggestion = useMemo(() => {
    if (picked.length === 0) return { state: 'empty' as const };
    const idx = tiers.findIndex((_, j) => picked.every((i) => addons.rows[i].tiers[j] !== 'a'));
    return idx < 0 ? { state: 'none' as const } : { state: 'ok' as const, idx };
  }, [picked, tiers, addons.rows]);

  return (
    <div className="h2 pl">
      <header className="h2-hero pl-hero">
        <div className="h2-wrap">
          <div className="h2-hero-grid">
            <h1 className="h2-hero-title"><Rich text={t('plans.hero.title') as string} /></h1>
            <div className="h2-hero-side">
              <p className="h2-hero-sub">{t('plans.hero.lead')}</p>
            </div>
          </div>
        </div>
      </header>

      <section className="pl-plans" aria-labelledby="pl-compare">
        <div className="h2-wrap">
          <h2 id="pl-compare" className="sr-only">{compare.title}</h2>
          <div className="pl-grid">
            <div className="pl-lead">
              <p className="pl-lead-title">{grid.label}</p>
              <p className="pl-lead-text">{compare.intro}</p>
            </div>
            {tiers.map((p, i) => {
              const list = features(i);
              const top = i === tiers.length - 1;
              return (
                <article key={p.name} className="pl-col">
                  <div className={`pl-card ${top ? 'is-top' : ''}`}>
                    <h3>{p.name}</h3>
                    <p>{p.text}</p>
                    <div className="pl-price">
                      <strong>{grid.price}</strong>
                      <span>{grid.priceNote}</span>
                    </div>
                  </div>
                  <a className="btn btn-primary pl-cta" href={contactUrl(`plano-${p.name.toLowerCase()}`)}>{t('contactMore.tierCta')}</a>
                  <p className="pl-from">{i === 0 ? grid.first : grid.fromPrev.replace('{prev}', tiers[i - 1].name)}</p>
                  <ul className="pl-list">
                    {list.map((f) => (
                      <li key={f.label}>
                        <Check size={14} strokeWidth={2.2} aria-hidden="true" />
                        <span className="pl-k">{f.label}</span>
                        <span className="pl-v">{f.value}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="pl-min"><span>{minimumRow[0] ?? grid.minimum}</span><strong>{minimumRow[i + 1]}</strong></p>
                </article>
              );
            })}
          </div>
          <p className="pl-note">{compare.note}</p>
        </div>
      </section>

      <section className="h2-section is-muted pl-build" aria-labelledby="pl-build">
        <div className="h2-wrap pl-build-grid">
          <div>
            <h2 id="pl-build" className="h2-title">{build.title}</h2>
            <p className="pl-step"><span>1</span>{build.step}</p>
            <ul className="pl-chips">
              {addons.rows.map((r, i) => {
                const on = picked.includes(i);
                return (
                  <li key={r.name}>
                    <button type="button" className={on ? 'is-on' : ''} aria-pressed={on} onClick={() => toggle(i)} title={r.text}>
                      {on ? <X size={14} aria-hidden="true" /> : <span className="pl-plus" aria-hidden="true">+</span>}
                      {r.name}
                    </button>
                  </li>
                );
              })}
            </ul>
            <p className="pl-note">{addons.legend}</p>
          </div>

          <aside className="pl-result" aria-live="polite">
            {suggestion.state === 'empty' && <p className="pl-result-empty">{build.empty}</p>}
            {suggestion.state === 'none' && (
              <>
                <p className="pl-result-empty">{build.none}</p>
                <a className="btn pl-result-btn" href={contactUrl('plano-escopo')}>{build.cta}</a>
              </>
            )}
            {suggestion.state === 'ok' && (
              <>
                <p className="pl-result-kicker">{build.recommended}</p>
                <h3>{tiers[suggestion.idx].name}</h3>
                <ul>
                  {picked.map((i) => {
                    const code = addons.rows[i].tiers[suggestion.idx];
                    return (
                      <li key={i}><Check size={15} aria-hidden="true" /><span>{addons.rows[i].name}</span><em>{addons.labels[code]}</em></li>
                    );
                  })}
                </ul>
                <a className="btn pl-result-btn" href={contactUrl(`plano-${tiers[suggestion.idx].name.toLowerCase()}-escopo`)}>{build.cta}</a>
              </>
            )}
          </aside>
        </div>
      </section>

      <section className="h2-section" aria-labelledby="pl-beyond">
        <div className="h2-wrap">
          <div className="h2-head">
            <div>
              <h2 id="pl-beyond" className="h2-title">{t('plans.beyond.title')}</h2>
              <p className="h2-sub">{t('plans.beyond.intro')}</p>
            </div>
            <div className="h2-arrows pl-arrows">
              <button type="button" onClick={() => go(-1)} disabled={edge.start} aria-label="←"><ArrowLeft size={16} aria-hidden="true" /></button>
              <button type="button" onClick={() => go(1)} disabled={edge.end} aria-label="→"><ArrowRight size={16} aria-hidden="true" /></button>
            </div>
          </div>
          <ul className="h2-cust-track pl-bc" ref={track} onScroll={sync}>
            {beyond.map((b, i) => {
              const Art = BEYOND_ART[i] ?? IlSteps;
              return (
                <li key={b.title}>
                  <a className="pl-bc-card il-host" href={b.href}>
                    <span className="pl-bc-art"><Art /></span>
                    <span className="pl-bc-name">{b.title}</span>
                    <span className="pl-bc-text">{b.text}</span>
                    <span className="h2-link">{b.cta}<ArrowRight size={15} aria-hidden="true" /></span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="h2-section is-muted" aria-labelledby="pl-start">
        <div className="h2-wrap pl-start">
          <H2Head id="pl-start" title={t('plans.start.title') as string} />
          <ol>
            {start.map((s, i) => (
              <li key={s.title}>
                <span className="pl-n">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="pl-closing" aria-labelledby="pl-closing">
        <div className="h2-wrap">
          <div className="pl-closing-card">
            <h2 id="pl-closing">{t('plans.cta.title')}</h2>
            <p>{t('plans.cta.desc')}</p>
            <a className="btn btn-primary" href={contactUrl('planos')}>{t('plans.cta.button')}</a>
          </div>
        </div>
      </section>

      <ChatWidget2 questions={faq} />
    </div>
  );
}
