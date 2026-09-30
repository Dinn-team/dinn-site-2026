import { useTranslation } from "@/i18n/useTranslation";

// Visuais das cinco etapas do "Como funciona". Reproduzem, em código, as telas
// das apresentações comerciais (Biolab 15/09, Lilly México 24/09). Números e
// lojas são fictícios e sinalizados como tal.

type Signal = { type: string; scope: string; value: string };
type Level = { name: string; question: string };
type Output = { name: string; desc: string };
type Routine = { when: string; title: string; desc: string };

function Arrow() {
  return (
    <svg className="flow-arrow" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

function ObserveVisual() {
  const { t } = useTranslation();
  const k = "comoFunciona.visuals.observe";
  const observed = (t(`${k}.observedRows`) as string[][]) ?? [];
  const estimated = (t(`${k}.estimatedRows`) as string[][]) ?? [];
  return (
    <div className="vpanel">
      <div className="vgrid-2">
        <div className="vcard">
          <span className="tag">{t(`${k}.observedTag`)}</span>
          <p className="vcard-title">{t(`${k}.observedTitle`)}</p>
          <div className="kv">
            {observed.map(([label, value]) => (
              <div key={label} className="kv-row"><span>{label}</span><span>{value}</span></div>
            ))}
          </div>
        </div>
        <div className="vcard">
          <span className="tag tag--neutral">{t(`${k}.estimatedTag`)}</span>
          <p className="vcard-title">{t(`${k}.estimatedTitle`)}</p>
          <div className="kv">
            {estimated.map(([label, value]) => (
              <div key={label} className="kv-row"><span>{label}</span><span>{value}</span></div>
            ))}
          </div>
        </div>
      </div>
      <p className="note">{t(`${k}.note`)}</p>
    </div>
  );
}

function SignalsVisual() {
  const { t } = useTranslation();
  const k = "comoFunciona.visuals.signals";
  const items = (t(`${k}.items`) as Signal[]) ?? [];
  return (
    <div className="vpanel">
      <p className="vpanel-title">{t(`${k}.title`)}</p>
      <div className="signal-feed">
        {items.map((s) => (
          <div key={s.type} className="signal-item">
            <div>
              <p className="signal-type">{s.type}</p>
              <p className="signal-scope">{s.scope}</p>
            </div>
            <span className="signal-value">{s.value}</span>
          </div>
        ))}
      </div>
      <p className="note">{t(`${k}.note`)}</p>
    </div>
  );
}

function PriorityVisual() {
  const { t } = useTranslation();
  const k = "comoFunciona.visuals.priority";
  const levels = (t(`${k}.levels`) as Level[]) ?? [];
  const columns = (t(`${k}.columns`) as string[]) ?? [];
  const rows = (t(`${k}.rows`) as string[][]) ?? [];
  return (
    <div className="vpanel">
      <div className="levels">
        {levels.map((l) => (
          <div key={l.name} className="level-card">
            <p className="level-name">{l.name}</p>
            <p className="level-q">{l.question}</p>
          </div>
        ))}
      </div>
      <p className="vpanel-title">{t(`${k}.tableTitle`)}</p>
      <div className="vtable-wrap">
        <table className="vtable">
          <thead>
            <tr>{columns.map((c) => <th key={c}>{c}</th>)}</tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r[0]}>{r.map((cell, i) => <td key={i}>{cell}</td>)}</tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="note">{t(`${k}.note`)}</p>
    </div>
  );
}

function DeliverVisual() {
  const { t } = useTranslation();
  const k = "comoFunciona.visuals.deliver";
  const outputs = (t(`${k}.outputs`) as Output[]) ?? [];
  return (
    <div className="vpanel">
      <div className="flow">
        <div className="flow-node">{t(`${k}.input`)}</div>
        <div style={{ display: "flex", alignItems: "center", gap: "var(--sp-3)" }}>
          <Arrow />
          <div className="flow-hub">{t(`${k}.hub`)}</div>
          <Arrow />
        </div>
        <div className="flow-outputs">
          {outputs.map((o) => (
            <div key={o.name} className="flow-out">
              <strong>{o.name}</strong>
              <span>{o.desc}</span>
            </div>
          ))}
        </div>
      </div>
      <p className="note">{t(`${k}.note`)}</p>
    </div>
  );
}

function FollowVisual() {
  const { t } = useTranslation();
  const k = "comoFunciona.visuals.follow";
  const routines = (t(`${k}.routines`) as Routine[]) ?? [];
  return (
    <div className="vpanel">
      <div className="routines">
        {routines.map((r) => (
          <div key={r.when} className="routine">
            <span className="routine-when">{r.when}</span>
            <p className="routine-title">{r.title}</p>
            <p className="routine-desc">{r.desc}</p>
          </div>
        ))}
      </div>
      <p className="note">{t(`${k}.note`)}</p>
    </div>
  );
}

export const STAGE_VISUALS = [ObserveVisual, SignalsVisual, PriorityVisual, DeliverVisual, FollowVisual];
