import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { Lock } from 'lucide-react';
import { useTranslation } from '@/i18n/useTranslation';
import {
  AppFrame, CompetitionVisual, DistributionVisual, LaunchVisual, LocatorVisual, QueueVisual,
} from '@/components/home/team-visuals';
import { ChatWidget } from '@/components/home/chat/ChatWidgets';
import type { Widget } from '@/components/home/chat/engine';

// Visuais das páginas de solução. São as telas e respostas reais do produto,
// recriadas com dados de exemplo (as mesmas da home): o Dinn Manager (tela do
// recurso), o Dinn Insights (a resposta com número, recorte e método) e, para
// TI, as conexões e o acesso. Cada visual só monta quando entra na tela, para
// a animação contar a história diante do leitor.

type Dict = Record<string, any>;

function useOnce() {
  const ref = useRef<HTMLDivElement>(null);
  const seen = useInView(ref, { once: true, margin: '-12% 0px' });
  return { ref, seen };
}

/** Troca {lugar} e {produto} pelos valores de exemplo, como na conversa do topo. */
function fill<T>(obj: T, place: string, product: string): T {
  return JSON.parse(JSON.stringify(obj).replace(/\{lugar\}/g, place).replace(/\{produto\}/g, product));
}

// ── Tela do Dinn Manager que melhor representa a área ─────────────────────
export function ManagerScreen({ slug }: { slug: string }) {
  const { t } = useTranslation();
  const { ref, seen } = useOnce();
  const v = (t('teams.visuals') as Dict) ?? {};

  const map: Record<string, { key: string; node: JSX.Element | null }> = {
    'inteligencia-pricing': { key: 'competition', node: v.competition ? <CompetitionVisual v={v.competition} /> : null },
    'trade-kam-campo': { key: 'queue', node: v.queue ? <QueueVisual v={v.queue} /> : null },
    'supply-distribuicao': { key: 'distribution', node: v.distribution ? <DistributionVisual v={v.distribution} /> : null },
    'sac-customer-experience': { key: 'locator', node: v.locator ? <LocatorVisual v={v.locator} /> : null },
    'marketing-lancamentos': { key: 'launch', node: v.launch ? <LaunchVisual v={v.launch} /> : null },
  };

  if (slug === 'ti-dados-governanca') return <div ref={ref}>{seen && <ConnectionsScreen />}</div>;
  const entry = map[slug];
  if (!entry) return null;
  return (
    <div ref={ref} className="av-slot">
      {seen && <AppFrame app={v[entry.key]?.app ?? ''}>{entry.node}</AppFrame>}
    </div>
  );
}

// ── TI: conexões e acesso ─────────────────────────────────────────────────
function ConnectionsScreen() {
  const { t } = useTranslation();
  const c = (t('areaVisuals.connections') as Dict) ?? {};
  const rows = (c.rows as { name: string; channel: string; status: string }[]) ?? [];
  const access = (c.access as string[]) ?? [];
  return (
    <AppFrame app={c.app ?? ''}>
      <div className="av-conn">
        {rows.map((r) => (
          <div key={r.name} className="tv-row">
            <div>
              <strong>{r.name}</strong>
              <span>{r.channel}</span>
            </div>
            <span className="av-lock"><Lock size={12} aria-hidden="true" />{r.status}</span>
          </div>
        ))}
        <div className="av-access">
          <p className="teams-label">{c.accessTitle}</p>
          <ul>
            {access.map((a) => <li key={a}>{a}</li>)}
          </ul>
        </div>
      </div>
    </AppFrame>
  );
}

// ── Resposta do Dinn Insights que sustenta o exemplo ──────────────────────
const SCENARIO: Record<string, string> = {
  'inteligencia-pricing': 'concorrencia',
  'trade-kam-campo': 'tendencia',
  'supply-distribuicao': 'distribuicao',
  'sac-customer-experience': 'sac',
  'marketing-lancamentos': 'lancamento',
};

export function InsightsAnswer({ slug }: { slug: string }) {
  const { t } = useTranslation();
  const { ref, seen } = useOnce();
  const labels = { why: t('ask.actionWhy') as string, how: t('ask.actionHow') as string };
  const place = t('ask.defaultPlace') as string;
  const product = t('ask.defaultProduct') as string;

  if (slug === 'ti-dados-governanca') return <div ref={ref}>{seen && <AiAnswerMock />}</div>;

  const key = SCENARIO[slug];
  const raw = key ? (t(`ask.scenarios.${key}.widget`) as unknown as Widget | string) : null;
  if (!raw || typeof raw === 'string') return null;
  const widget = fill(raw, place, product) as Widget;
  return (
    <div ref={ref} className="av-slot">
      {seen && <ChatWidget widget={widget} labels={labels} />}
    </div>
  );
}

function AiAnswerMock() {
  const { t } = useTranslation();
  const m = (t('areaVisuals.aiAnswer') as Dict) ?? {};
  const meta = (m.meta as { label: string; value: string }[]) ?? [];
  const tools = (m.tools as string[]) ?? [];
  return (
    <div className="av-ai">
      <div className="av-ai-tools" aria-hidden="true">
        {tools.map((x, i) => <span key={x} className={i === 0 ? 'is-on' : ''}>{x}</span>)}
      </div>
      <p className="av-ai-q">{m.question}</p>
      <div className="av-ai-a">
        <p>{m.answer}</p>
        <dl>
          {meta.map((x) => (
            <div key={x.label}>
              <dt>{x.label}</dt>
              <dd>{x.value}</dd>
            </div>
          ))}
        </dl>
        <span className="av-lock"><Lock size={12} aria-hidden="true" />{m.mode}</span>
      </div>
    </div>
  );
}

// ── Origem de cada dado: observado, estimado, inferido ────────────────────
export function ProvenanceCard() {
  const { t } = useTranslation();
  const items = (t('trust.signals.items') as { name: string; def: string }[]) ?? [];
  const levels = [3, 2, 1];
  const tones = ['#10B981', 'var(--primary)', '#F59E0B'];
  return (
    <div className="av-prov">
      <p className="av-prov-title">{t('areaVisuals.provenanceTitle')}</p>
      {items.map((it, i) => (
        <div key={it.name} className="av-prov-row">
          <div className="av-prov-meter" aria-hidden="true">
            {[0, 1, 2].map((k) => <i key={k} style={{ background: k < levels[i] ? tones[i] : '#E5E7EB' }} />)}
          </div>
          <div>
            <strong>{it.name}</strong>
            <p>{it.def}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
