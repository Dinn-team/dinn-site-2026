import { useEffect, useState } from 'react';
import { ArrowDown, ArrowRight, Check, RotateCcw } from 'lucide-react';
import { useTranslation } from '@/i18n/useTranslation';
import { AppFrame } from '@/components/home/team-visuals';
import { useDemoActive } from './hooks';

// Dinn Conecta: as fontes entram, a tabela é preenchida célula a célula com
// produto (EAN), loja (CNPJ), rede e região, e os destinos acendem no fim.

type CRow = { source: number; ean: string; cnpj: string; chain: string; region: string };
const COLS = ['ean', 'cnpj', 'chain', 'region'] as const;
const HOLD = 5; // quadros de pausa com tudo preenchido, antes de recomeçar

export function ConectaDemo() {
  const { t } = useTranslation();
  const rows = (t('platformViz.conecta.rows') as CRow[]) ?? [];
  const cols = t('platformViz.conecta.columns') as Record<(typeof COLS)[number], string>;
  const sources = (t('delivery.sources') as string[]) ?? [];
  const destinations = (t('delivery.destinations') as string[]) ?? [];
  const { ref, inView, reduce } = useDemoActive();

  const total = rows.length * COLS.length;
  const [tick, setTick] = useState(0);
  useEffect(() => {
    if (!inView || reduce) return;
    const id = window.setInterval(() => setTick((v) => (v + 1) % (total + HOLD)), 480);
    return () => window.clearInterval(id);
  }, [inView, reduce, total]);

  const n = reduce ? total : Math.min(tick, total);
  const finished = n >= total;

  return (
    <div ref={ref} className="pf-demo">
      <AppFrame app={t('platformViz.conecta.app') as string} tag={t('platformViz.demo.tag') as string}>
        <div className="pf-cn">
          <div className="pf-cn-col">
            <p className="pf-cn-label">{t('platformViz.conecta.sources')}</p>
            <ul>
              {sources.map((s, k) => {
                const on = rows.some((r, ri) => r.source === k && ri * COLS.length < n);
                return <li key={s} className={on ? 'is-on' : ''}>{s}</li>;
              })}
            </ul>
          </div>

          <span className="pf-cn-arrow" aria-hidden="true"><ArrowRight size={18} className="is-h" /><ArrowDown size={18} className="is-v" /></span>

          <div className="pf-cn-mid">
            <p className="pf-cn-label">{t('platformViz.conecta.standard')}</p>
            <div className="pf-cn-table-wrap">
              <table className="pf-cn-table">
                <colgroup>
                  <col className="c-ean" />
                  <col className="c-cnpj" />
                  <col className="c-chain" />
                  <col className="c-region" />
                  <col className="c-ok" />
                </colgroup>
                <thead>
                  <tr>
                    {COLS.map((c) => <th key={c}>{cols[c]}</th>)}
                    <th aria-label={t('platformViz.conecta.done') as string} />
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r, ri) => {
                    const rowDone = n >= (ri + 1) * COLS.length;
                    return (
                      <tr key={r.cnpj} className={rowDone ? 'is-done' : ''}>
                        {COLS.map((c, ci) => {
                          const filled = ri * COLS.length + ci < n;
                          return (
                            <td key={c} className={filled ? 'is-filled' : 'is-empty'}>
                              {filled ? r[c] : <span aria-hidden="true" />}
                            </td>
                          );
                        })}
                        <td className="pf-cn-ok">{rowDone && <Check size={13} strokeWidth={3} aria-label={t('platformViz.conecta.done') as string} />}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          <span className="pf-cn-arrow" aria-hidden="true"><ArrowRight size={18} className="is-h" /><ArrowDown size={18} className="is-v" /></span>

          <div className="pf-cn-col">
            <p className="pf-cn-label">{t('platformViz.conecta.destinations')}</p>
            <ul>
              {destinations.map((d, k) => (
                <li key={d} className={finished ? 'is-on' : ''} style={{ transitionDelay: finished ? `${k * 90}ms` : '0ms' }}>{d}</li>
              ))}
            </ul>
          </div>
        </div>

        <p className="pf-demo-note">
          <span className="tv-insight-dot" />
          {t('platformViz.demo.illustrative')}
          <button type="button" className="pf-link" onClick={() => setTick(0)}>
            <RotateCcw size={12} aria-hidden="true" />
            {t('platformViz.conecta.replay')}
          </button>
        </p>
      </AppFrame>
    </div>
  );
}
