import { MotionConfig, motion } from 'framer-motion';
import { Brain, Check, Lock } from 'lucide-react';
import { useTranslation } from '@/i18n/useTranslation';
import { Rich } from '@/lib/rich-text';
import { CtaScene } from './CtaScene';
import { contactUrl } from '@/lib/links';

// Onde o Dinn entrega: plataforma, conversa, IA do cliente e Conecta.
// Cada card tem um pequeno visual vivo em vez de um parágrafo a mais.

type Card = { tag: string; title: string; desc: string };
const CARD_LINKS = ['/plataforma', '/funcionalidades#insights', '/integracoes#mcp', '/produtos/conecta'];
const EASE = [0.22, 1, 0.36, 1] as const;

function ManagerMini() {
  const bars = [86, 64, 52, 38, 24];
  const shades = ['var(--primary)', 'rgba(86,37,242,0.75)', 'rgba(86,37,242,0.55)', 'rgba(86,37,242,0.38)', 'rgba(86,37,242,0.22)'];
  return (
    <div className="dl-mini dl-manager" aria-hidden="true">
      <div className="dl-kpis">
        {['PDV', 'SKU', '%'].map((k, i) => (
          <motion.span key={k} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 * i }}>
            <i />{k}
          </motion.span>
        ))}
      </div>
      <div className="dl-bars">
        {bars.map((b, i) => (
          <div key={i}><motion.i style={{ background: shades[i] }} initial={{ width: 0 }} whileInView={{ width: `${b}%` }} viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.1, duration: 0.9, ease: EASE }} /></div>
        ))}
      </div>
    </div>
  );
}

function InsightsMini() {
  return (
    <div className="dl-mini dl-chat" aria-hidden="true">
      <motion.span className="dl-q" initial={{ opacity: 0, x: 12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} />
      <motion.div className="dl-a" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.6 }}>
        <span className="dl-avatar"><Brain size={12} /></span>
        <div>
          <i style={{ width: '90%' }} /><i style={{ width: '70%' }} />
          <div className="dl-spark">
            <svg viewBox="0 0 120 30"><motion.path d="M0,24 L20,20 L40,22 L60,14 L80,12 L100,6 L120,4" fill="none" stroke="var(--primary)" strokeWidth="2" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ delay: 1, duration: 1.2 }} /></svg>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function AiMini() {
  const names = ['ChatGPT', 'Claude', 'Copilot'];
  return (
    <div className="dl-mini dl-ai" aria-hidden="true">
      <div className="dl-ai-names">
        {names.map((n, i) => (
          <motion.span key={n} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 * i }}>{n}</motion.span>
        ))}
      </div>
      <svg viewBox="0 0 80 90" className="dl-ai-lines">
        {[15, 45, 75].map((y, i) => (
          <g key={y}>
            <path d={`M0,${y} C40,${y} 40,45 80,45`} fill="none" stroke="rgba(86,37,242,0.3)" strokeWidth="1.5" />
            <circle r="2.5" fill="var(--primary)"><animateMotion dur="1.8s" begin={`${i * 0.4}s`} repeatCount="indefinite" path={`M80,45 C40,45 40,${y} 0,${y}`} /></circle>
          </g>
        ))}
      </svg>
      <span className="dl-ai-hub"><Brain size={18} /><Lock size={11} className="dl-lock" /></span>
    </div>
  );
}

function ConectaMini({ sources, destinations }: { sources: string[]; destinations: string[] }) {
  return (
    <div className="dl-mini dl-conecta" aria-hidden="true">
      <div className="dl-col">{sources.map((s) => <span key={s}>{s}</span>)}</div>
      <div className="dl-flow">
        <svg viewBox="0 0 100 60" preserveAspectRatio="none">
          {[10, 30, 50].map((y, i) => (
            <g key={y}>
              <path d={`M0,${y} L100,30`} stroke="rgba(86,37,242,0.25)" strokeWidth="1" fill="none" vectorEffect="non-scaling-stroke" />
              <circle r="2" fill="var(--primary)"><animateMotion dur="1.6s" begin={`${i * 0.5}s`} repeatCount="indefinite" path={`M0,${y} L100,30`} /></circle>
            </g>
          ))}
        </svg>
        <span className="dl-hub">Dinn</span>
        <svg viewBox="0 0 100 60" preserveAspectRatio="none">
          {[8, 23, 38, 53].map((y, i) => (
            <g key={y}>
              <path d={`M0,30 L100,${y}`} stroke="rgba(86,37,242,0.25)" strokeWidth="1" fill="none" vectorEffect="non-scaling-stroke" />
              <circle r="2" fill="var(--primary)"><animateMotion dur="1.6s" begin={`${0.3 + i * 0.35}s`} repeatCount="indefinite" path={`M0,30 L100,${y}`} /></circle>
            </g>
          ))}
        </svg>
      </div>
      <div className="dl-col is-dest">{destinations.map((s) => <span key={s}>{s}</span>)}</div>
    </div>
  );
}

export function DeliverySection() {
  const { t } = useTranslation();
  const cards = (t('delivery.cards') as Card[]) ?? [];
  const trust = (t('delivery.trust') as string[]) ?? [];
  const sources = (t('delivery.sources') as string[]) ?? [];
  const destinations = (t('delivery.destinations') as string[]) ?? [];
  const minis = [<ManagerMini key="m" />, <InsightsMini key="i" />, <AiMini key="a" />, <ConectaMini key="c" sources={sources} destinations={destinations} />];

  return (
    <MotionConfig reducedMotion="user">
    <section id="entrega" className="delivery">
      <div className="wrap">
        <motion.div className="delivery-head" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-15% 0px' }} transition={{ duration: 0.8, ease: EASE }}>
          <p className="teams-eyebrow">{t('delivery.eyebrow')}</p>
          <h2 className="teams-title"><Rich text={t('delivery.title') as string} /></h2>
        </motion.div>
        <div className="delivery-grid">
          {cards.map((c, i) => (
            <motion.article
              key={c.tag}
              className={`delivery-card ${i === 3 ? 'is-wide' : ''}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ delay: (i % 2) * 0.12, duration: 0.8, ease: EASE }}
            >
              <div>
                <span className="delivery-tag">{c.tag}</span>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
                <p className="delivery-more"><a href={CARD_LINKS[i]}>{t('delivery.more')} →</a></p>
              </div>
              {minis[i]}
            </motion.article>
          ))}
        </div>
        <ul className="delivery-trust">
          {trust.map((x) => <li key={x}><Check size={15} strokeWidth={2.4} />{x}</li>)}
        </ul>
        <p className="teams-note">{t('delivery.note')}</p>
        <p className="delivery-more delivery-links">
          <a href="/planos">{t('menu.plansOverview')} →</a>
          <a href="/cobertura">{t('menu.coverage')} →</a>
          <a href="/integracoes">{t('menu.integrations')} →</a>
        </p>
      </div>
    </section>
    </MotionConfig>
  );
}

export function FinalCta() {
  const { t } = useTranslation();
  const back = () => {
    document.getElementById('insights')?.scrollIntoView({ behavior: 'smooth' });
    window.setTimeout(() => document.querySelector<HTMLTextAreaElement>('.ins-box textarea')?.focus({ preventScroll: true }), 700);
  };
  return (
    <section className="final">
      <CtaScene />
      <motion.div className="wrap final-inner" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, ease: EASE }}>
        <h2><Rich text={t('ctaFinal.title') as string} /></h2>
        <p>{t('ctaFinal.description')}</p>
        <div className="final-actions">
          <a href={contactUrl('home-final')} className="btn btn-primary btn-lg">{t('ctaFinal.button')}</a>
          <button type="button" className="btn btn-on-dark btn-lg" onClick={back}>{t('ctaFinal.secondary')}</button>
        </div>
      </motion.div>
    </section>
  );
}
