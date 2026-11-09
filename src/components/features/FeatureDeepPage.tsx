import { useEffect, useRef, useState } from 'react';
import { ArrowRight, ArrowUpRight, Check, X } from 'lucide-react';
import { ChatWidget2 } from '@/components/home2/ChatWidget2';
import { ClosingCard, H2Head } from '@/components/site/PageShell';
import { JeanOrb } from '@/components/site/JeanOrb';
import { FEATURE_DEMO } from '@/components/site/FeatureDemos';
import { FEATURE_AREAS } from '@/components/site/FeaturesV2';
import { ProductScreen } from '@/components/site/ProductScreen';
import { AREA_CLOSING, gradUrl } from '@/components/site/area-theme';
import type { Area } from '@/components/site/SolutionsPages';
import { useTranslation } from '@/i18n/useTranslation';
import { contactUrl } from '@/lib/links';
import { areaPath, featurePath, PATHS } from '@/lib/site-map';
import { featureGrad } from './gradients';
import { JeanChat } from './JeanChat';
import { PinStages } from './PinStages';
import { UI } from './ui';
import { ShotView } from './shots';
import type { FeatureContent } from './types';

// Página de uma funcionalidade no molde do Suporte: hero com a tela em laço, três passos,
// as portas (onde a funcionalidade aparece no Dinn), a seção fixada "por dentro", como ler,
// o que faz e não faz, como usar, funcionalidades ligadas, dúvidas e fechamento.
// Conteúdo em src/components/features/content/<slug>.ts (PT) e content/{en,es}/<slug>.ts, carregados
// só quando o idioma muda (fonte: docs/site-reproducao/funcionalidades). Textos fixos em ui.ts.

const LOADERS = import.meta.glob<{ content: FeatureContent }>('./content/{en,es}/*.ts');

/** O conteúdo no idioma escolhido. Começa em português (é o que a página renderiza no servidor). */
function useLangContent(pt: FeatureContent, lang: string): FeatureContent {
  const [c, setC] = useState(pt);
  useEffect(() => {
    const load = lang === 'pt' ? undefined : LOADERS[`./content/${lang}/${pt.slug}.ts`];
    if (!load) { setC(pt); return; }
    let on = true;
    load().then((m) => { if (on) setC(m.content); });
    return () => { on = false; };
  }, [lang, pt]);
  return c;
}

const NAV_IDS = ['como-funciona', 'jean', 'onde-aparece', 'por-dentro', 'como-ler', 'faz-e-nao-faz', 'como-usar', 'junto-com', 'duvidas'] as const;
const NAV_KEYS = ['como', 'jean', 'onde', 'dentro', 'ler', 'faz', 'usar', 'junto', 'duvidas'] as const;

export function FeatureDeepPage({ c: pt }: { c: FeatureContent }) {
  const { t, lang } = useTranslation();
  const c = useLangContent(pt, lang);
  const ui = UI[lang] ?? UI.pt;
  const NAV = NAV_IDS.map((id, i) => ({ id, label: ui.nav[NAV_KEYS[i]] }));
  const areas = (t('solutions.items') as Area[]) ?? [];
  const teamsDef = FEATURE_AREAS[c.slug] ?? [];
  const allTeams = teamsDef === 'all';
  const teams = (Array.isArray(teamsDef) ? teamsDef : []).map((s) => areas.find((a) => a.slug === s)).filter(Boolean) as Area[];
  const first = Array.isArray(teamsDef) ? teamsDef[0] : '';
  const Demo = FEATURE_DEMO[c.slug];

  // Índice lateral: marca a seção no meio da tela e só aparece dentro do corpo da página.
  const body = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState<string>(NAV_IDS[0]);
  const [showIndex, setShowIndex] = useState(false);
  useEffect(() => {
    const el = body.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setShowIndex(e.isIntersecting), { rootMargin: '-35% 0px -35% 0px' });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  useEffect(() => {
    const els = NAV_IDS.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setCurrent(e.target.id); }),
      { rootMargin: '-45% 0px -50% 0px' },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="h2 sp2 fx">
      <header className="h2-hero fx-hero">
        <div className="h2-wrap">
          <div className="h2-hero-grid">
            <h1 className="h2-hero-title">{c.hero.title}</h1>
            <div className="h2-hero-side">
              <p className="h2-hero-sub">{c.hero.sub}</p>
              <p className="fx-note">{c.hero.note}</p>
              <div className="h2-actions">
                <a className="btn btn-primary" href={contactUrl(`funcionalidade-${c.slug}`)}>{c.cta.button}</a>
                <a className="h2-link" href="#como-funciona">{ui.seeHow}</a>
              </div>
            </div>
          </div>
          <div className="h2-media sl2-media" style={{ backgroundImage: gradUrl(featureGrad(c.slug, 'hero')) }}>
            <div className="sl2-screen">{Demo && <ProductScreen demo={Demo} />}</div>
          </div>
          <p className="ft2-caption">{ui.illustrative}</p>
        </div>
      </header>

      <div className="tr-body" ref={body}>
        <nav className={`tr-index ${showIndex ? 'is-on' : ''}`} aria-label={ui.pageNav}>
          <ul>
            {NAV.map((n) => (
              <li key={n.id}>
                <a href={`#${n.id}`} className={current === n.id ? 'is-on' : ''} aria-current={current === n.id ? 'true' : undefined}>
                  <span className="tr-index-label">{n.label}</span>
                  <i className="tr-index-tick" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* 1. Como funciona, em três passos, e quem usa */}
        <section id="como-funciona" className="h2-section tr-sec" aria-labelledby="fx-how">
          <div className="h2-wrap">
            <H2Head id="fx-how" title={ui.howTitle} />
            <div className="tr-cols" style={{ ['--cols' as string]: c.steps.length }}>
              {c.steps.map((s, i) => (
                <article key={s.title} className="tr-col">
                  <span className="sp2-n">{String(i + 1).padStart(2, '0')}</span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </article>
              ))}
            </div>
            <div className="fx-who">
              <span>{ui.whoUses}</span>
              {allTeams ? (
                <a className="h2-link" href={PATHS.solutions}>{t('features.page.allTeams')} <ArrowRight size={15} aria-hidden="true" /></a>
              ) : (
                <ul>
                  {teams.map((a) => <li key={a.slug}><a href={areaPath(a.slug)}>{a.name}<ArrowUpRight size={15} aria-hidden="true" /></a></li>)}
                </ul>
              )}
            </div>
          </div>
        </section>

        {/* 2. A Jean: a conversa em destaque */}
        <section id="jean" className="h2-section is-muted tr-sec fx-jean" aria-labelledby="fx-jean">
          <div className="h2-wrap fx-jean-grid">
            <div className="fx-jean-copy">
              <span className="fx-jean-label"><JeanOrb size={20} />{ui.jeanLabel}</span>
              <h2 id="fx-jean" className="h2-title">{ui.jeanTitle}</h2>
              <p className="h2-sub">{c.jean.lead}</p>
              <ul className="fx-prompts">
                {c.jean.prompts.map((q) => <li key={q}>{q}</li>)}
              </ul>
              <a className="h2-link" href={featurePath('jean')}>{ui.jeanLink} <ArrowRight size={15} aria-hidden="true" /></a>
            </div>
            <JeanChat turns={c.jean.turns} ui={ui} bg={gradUrl(featureGrad(c.slug, 'jean'))} />
          </div>
        </section>

        {/* 3. Onde a funcionalidade aparece */}
        <section id="onde-aparece" className="h2-section tr-sec" aria-labelledby="fx-doors">
          <div className="h2-wrap">
            <H2Head id="fx-doors" title={c.doors.title} intro={c.doors.intro} />
            <ul className={`fx-doors ${c.doors.items.length === 3 ? 'is-3' : ''}`}>
              {c.doors.items.map((d, i) => (
                <li key={d.title}>
                  <div className="fx-shot" style={{ backgroundImage: gradUrl(featureGrad(c.slug, 'door', i)) }}>
                    {d.shot && <ShotView shot={d.shot} />}
                  </div>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                  {d.link && <a className="h2-link" href={featurePath(d.link.slug)}>{d.link.label} <ArrowRight size={15} aria-hidden="true" /></a>}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 3. Por dentro: seção fixada, a rolagem troca a etapa e a tela */}
        <PinStages id="fx-inside" title={c.inside.title} sub={c.inside.sub} stages={c.inside.stages} slug={c.slug} />

        {/* 4. Como ler o resultado */}
        <section id="como-ler" className="h2-section tr-sec" aria-labelledby="fx-read">
          <div className="h2-wrap">
            <H2Head id="fx-read" title={c.read.title} intro={c.read.intro} />
            <dl className="fx-read">
              {c.read.rows.map((r) => (
                <div key={r.label} className="fx-read-row">
                  <dt>{r.label}</dt>
                  <dd>{r.text}</dd>
                  <dd className="fx-how">{r.how}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* 5. O que faz e o que não faz */}
        <section id="faz-e-nao-faz" className="h2-section is-muted tr-sec" aria-labelledby="fx-does">
          <div className="h2-wrap">
            <H2Head id="fx-does" title={ui.doesTitle} />
            <div className="tr-cols" style={{ ['--cols' as string]: 2 }}>
              <article className="tr-col">
                <h3>{ui.does}</h3>
                <ul className="sp2-list is-yes">
                  {c.does.map((x) => <li key={x}><Check size={15} strokeWidth={2.2} aria-hidden="true" />{x}</li>)}
                </ul>
              </article>
              <article className="tr-col">
                <h3>{ui.doesNot}</h3>
                <ul className="sp2-list is-no">
                  {c.doesNot.map((x) => <li key={x}><X size={15} strokeWidth={2.2} aria-hidden="true" />{x}</li>)}
                </ul>
              </article>
            </div>
            <p className="tr-more"><a className="h2-link" href={PATHS.trust}>{t('solutions.page.trustCta')} →</a></p>
          </div>
        </section>

        {/* 6. Como usar bem */}
        <section id="como-usar" className="h2-section tr-sec" aria-labelledby="fx-use">
          <div className="h2-wrap">
            <H2Head id="fx-use" title={c.use.title} />
            <div className="tr-cols" style={{ ['--cols' as string]: 3 }}>
              {([[ui.consult, c.use.consult], [ui.analyze, c.use.analyze], [ui.extract, c.use.extract]] as const).map(([h, list], k) => (
                <article key={k} className="tr-col">
                  <h3>{h}</h3>
                  <ol className="fx-steps">
                    {list.map((x) => <li key={x}>{x}</li>)}
                  </ol>
                  {k === 2 && c.use.formats && (
                    <ul className="tr-chips">{c.use.formats.map((f) => <li key={f}>{f}</li>)}</ul>
                  )}
                </article>
              ))}
            </div>
            {c.use.note && <p className="sp2-safety">{c.use.note}</p>}
          </div>
        </section>

        {/* 7. Junto com outras funcionalidades */}
        <section id="junto-com" className="h2-section is-muted tr-sec" aria-labelledby="fx-rel">
          <div className="h2-wrap">
            <H2Head id="fx-rel" title={c.related.title} intro={c.related.intro} />
            <ul className="fx-rel">
              {c.related.items.map((r) => (
                <li key={r.slug}>
                  <a href={featurePath(r.slug)}>
                    <strong>{r.name}</strong>
                    <span>{r.text}</span>
                    <em>{ui.seePage} <ArrowRight size={15} aria-hidden="true" /></em>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 8. Dúvidas frequentes */}
        <section id="duvidas" className="h2-section tr-sec" aria-labelledby="fx-faq">
          <div className="h2-wrap">
            <H2Head id="fx-faq" title={ui.faqTitle} />
            <div className="sp2-faq">
              {c.faq.map((q) => (
                <details key={q.question}>
                  <summary>{q.question}</summary>
                  <p>{q.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </div>

      <ClosingCard
        title={c.cta.title}
        desc={c.cta.text}
        button={c.cta.button}
        origin={`funcionalidade-${c.slug}`}
        gradient={AREA_CLOSING[first] ?? 'g03'}
        secondary={{ label: t('features.page.back') as string, href: PATHS.features }}
      />
      <ChatWidget2 questions={c.faq} />
    </div>
  );
}
