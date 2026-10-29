import { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, Lock, ShieldX } from 'lucide-react';
import { useTranslation } from '@/i18n/useTranslation';
import { AppFrame } from '@/components/home/team-visuals';
import { useDemoActive, useStepper } from './hooks';

// MCP: ChatGPT, Claude e Copilot consultam o Dinn. A pergunta vai, a resposta
// volta com fonte e data, e um pedido para gravar é barrado: acesso somente
// leitura. Cada assistente roda os três passos; um clique escolhe qual.

type Assistant = { name: string; q: string; a: string };

const ROW = 52;
const GAP = 10;
const H = ROW * 3 + GAP * 2;
const Y = [0, 1, 2].map((k) => ROW / 2 + k * (ROW + GAP));
const HUB_Y = 58; // centro do círculo do hub (a coluna do hub é centrada na altura da lista)
const W = 160;

export function McpDemo() {
  const { t } = useTranslation();
  const list = (t('platformViz.mcp.assistants') as Assistant[]) ?? [];
  const { ref, inView, reduce } = useDemoActive();
  const [auto, setAuto] = useState(true);
  const [i, setI] = useStepper(inView && auto && !reduce, 2400, Math.max(1, list.length) * 3);

  const a = Math.min(list.length - 1, Math.floor(i / 3));
  const phase = reduce ? 2 : i % 3;
  const cur = list[a];
  if (!cur) return null;

  const y = Y[a] ?? Y[0];
  const forward = `M0,${y} C70,${y} 90,${HUB_Y} ${W},${HUB_Y}`;
  const back = `M${W},${HUB_Y} C90,${HUB_Y} 70,${y} 0,${y}`;

  return (
    <div ref={ref} className="pf-demo">
      <AppFrame app={t('platformViz.mcp.app') as string}>
        <div className="pf-mcp">
          <ul className="pf-mcp-ai" aria-label={t('platformViz.mcp.authorized') as string}>
            {list.map((x, k) => (
              <li key={x.name}>
                <button
                  type="button"
                  className={k === a ? 'is-on' : ''}
                  aria-pressed={k === a}
                  onClick={() => {
                    setAuto(false);
                    setI(k * 3);
                  }}
                >
                  <span className="pf-mcp-dot" aria-hidden="true" />
                  {x.name}
                </button>
              </li>
            ))}
          </ul>

          <svg className="pf-mcp-lines" viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" aria-hidden="true">
            {list.map((x, k) => (
              <path
                key={x.name}
                d={`M0,${Y[k]} C70,${Y[k]} 90,${HUB_Y} ${W},${HUB_Y}`}
                fill="none"
                stroke={k === a ? 'var(--primary)' : 'rgba(86,37,242,0.22)'}
                strokeWidth={k === a ? 2 : 1.4}
                vectorEffect="non-scaling-stroke"
                strokeDasharray={k === a ? undefined : '3 5'}
              />
            ))}
            {!reduce && phase === 0 && (
              <circle key={`q-${i}`} r={5} fill="var(--primary)">
                <animateMotion dur="1.4s" fill="freeze" path={forward} />
              </circle>
            )}
            {!reduce && phase === 1 && (
              <circle key={`a-${i}`} r={5} fill="#10B981">
                <animateMotion dur="1.4s" fill="freeze" path={back} />
              </circle>
            )}
            {!reduce && phase === 2 && (
              <circle key={`w-${i}`} r={5} fill="#EF4444">
                <animateMotion dur="1.4s" fill="freeze" path={forward} keyPoints="0;0.8;0.66" keyTimes="0;0.7;1" calcMode="linear" />
              </circle>
            )}
          </svg>

          <div className="pf-mcp-hub">
            <span className="pf-mcp-core">
              <Brain size={22} aria-hidden="true" />
              <b className={phase === 2 ? 'is-hit' : ''}><Lock size={11} aria-hidden="true" /></b>
            </span>
            <strong>{t('platformViz.mcp.hub')}</strong>
            <span className="pf-chip is-solid"><Lock size={11} aria-hidden="true" />{t('platformViz.mcp.readOnly')}</span>
          </div>
        </div>

        <div className="pf-mcp-chat" aria-live="polite">
          <motion.p key={`q-${a}`} className="pf-mcp-q" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}>
            <span>{cur.name}</span>
            {cur.q}
          </motion.p>
          {phase >= 1 && (
            <motion.p key={`a-${a}`} className="pf-mcp-a" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}>
              <span><Brain size={12} aria-hidden="true" />{t('platformViz.mcp.answer')}</span>
              {cur.a}
            </motion.p>
          )}
          {phase >= 2 && (
            <motion.p key={`w-${a}`} className="pf-mcp-w" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}>
              <ShieldX size={14} aria-hidden="true" />
              <span><strong>{t('platformViz.mcp.writeAsk')}</strong> · {t('platformViz.mcp.blocked')}</span>
            </motion.p>
          )}
        </div>
      </AppFrame>
    </div>
  );
}
