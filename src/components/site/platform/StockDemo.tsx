import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Layers } from 'lucide-react';
import { useTranslation } from '@/i18n/useTranslation';
import { AVAIL, availKey } from '@/components/home/palette';
import { AppFrame } from '@/components/home/team-visuals';
import { useDemoActive, useStepper } from './hooks';

// Dinn Stock: as mesmas lojas, duas formas de saber. Observado (lido na fonte,
// com a data de D-1) e estimado (por lojas comparáveis, com a confiança dita).

type Row = { name: string; dist: string; level: string; stock: string };
type Mode = 'observed' | 'estimated';
const MODES: Mode[] = ['observed', 'estimated'];
// Quais lojas do exemplo são lidas na fonte e quais são estimadas.
const KIND: Mode[] = ['observed', 'estimated', 'observed'];

export function StockDemo() {
  const { t } = useTranslation();
  const rows = ((t('teams.visuals.locator.rows') as Row[]) ?? []).slice(0, 3);
  const { ref, inView, reduce } = useDemoActive();
  const [auto, setAuto] = useState(true);
  const [i, setI] = useStepper(inView && auto && !reduce, 3400, 2);
  const mode = MODES[i];

  const pick = (m: number) => {
    setAuto(false);
    setI(m);
  };

  return (
    <div ref={ref} className="pf-demo">
      <AppFrame app={t('teams.visuals.locator.app') as string}>
        <div className="pf-seg" role="tablist" aria-label={t('platformViz.stock.toggleLabel') as string}>
          <span className="pf-seg-label">{t('platformViz.stock.toggleLabel')}</span>
          {MODES.map((m, k) => (
            <button key={m} type="button" role="tab" aria-selected={mode === m} className={mode === m ? 'is-active' : ''} onClick={() => pick(k)}>
              {m === 'observed' ? <Check size={14} aria-hidden="true" /> : <Layers size={14} aria-hidden="true" />}
              {t(`platformViz.stock.${m}`)}
            </button>
          ))}
        </div>

        <ul className="pf-stock">
          {rows.map((r, k) => {
            const kind = KIND[k];
            const focus = kind === mode;
            const c = AVAIL[availKey(r.level)];
            return (
              <motion.li key={r.name} className={`${focus ? 'is-focus' : 'is-dim'} is-${kind}`} animate={{ opacity: focus ? 1 : 0.5 }} transition={{ duration: 0.35 }}>
                <div className="pf-stock-main">
                  <strong>{r.name}</strong>
                  <span>{r.dist}</span>
                </div>
                <div className="pf-stock-val">
                  <b style={{ color: focus ? c.fg : '#8B91A0' }}>{kind === 'estimated' ? `≈ ${r.stock}` : r.stock}</b>
                  <span className="tv-badge" style={{ color: focus ? c.fg : '#6B7280', background: focus ? c.bg : '#F3F4F6' }}>
                    <i style={{ background: focus ? c.dot : '#9CA3AF' }} />
                    {r.level}
                  </span>
                </div>
                <div className="pf-stock-src">
                  {kind === 'observed' ? (
                    <span className="pf-chip is-solid">
                      <Check size={12} aria-hidden="true" />
                      {focus ? t('platformViz.stock.observedChip') : t('platformViz.stock.fromSource')}
                    </span>
                  ) : (
                    <span className="pf-chip is-dashed">
                      {focus ? t('platformViz.stock.estimatedChip') : t('platformViz.stock.notRead')}
                    </span>
                  )}
                  {kind === 'estimated' && focus && <em>{t('platformViz.stock.confidence')}</em>}
                </div>
              </motion.li>
            );
          })}
        </ul>

        <p className="pf-demo-note">
          <span className="tv-insight-dot" />
          {mode === 'observed' ? t('platformViz.stock.summaryObserved') : t('platformViz.stock.summaryEstimated')}
        </p>
      </AppFrame>
    </div>
  );
}
