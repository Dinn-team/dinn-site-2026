// Lista de passos das cenas presas à tela (soluções e casos). Cada passo é um
// botão: clicar leva a rolagem até ele. No celular só o passo ativo aparece na
// lista, então os pontos numerados embaixo fazem a navegação.

export type StageStep = { label: string; text: string };

export function StageSteps({
  steps,
  active,
  onGo,
  label,
}: {
  steps: StageStep[];
  active: number;
  onGo: (i: number) => void;
  label?: string;
}) {
  const state = (i: number) => (i === active ? 'is-on' : i < active ? 'is-past' : '');
  return (
    <>
      <ol className="as-steps" aria-label={label}>
        {steps.map((s, i) => (
          <li key={i} className={state(i)}>
            <button type="button" className="as-step-btn" aria-current={i === active ? 'step' : undefined} onClick={() => onGo(i)}>
              <span className="as-step-n">{i + 1}</span>
              <span className="as-step-body">
                <strong>{s.label}</strong>
                <span className="as-step-text">{s.text}</span>
              </span>
            </button>
          </li>
        ))}
      </ol>
      <div className="as-dots" role="group" aria-label={label}>
        {steps.map((s, i) => (
          <button
            key={i}
            type="button"
            className={state(i)}
            aria-label={`${i + 1}: ${s.label}`}
            aria-current={i === active ? 'step' : undefined}
            onClick={() => onGo(i)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </>
  );
}
