import { useState } from 'react';
import { useTranslation } from '@/i18n/useTranslation';

type UseCase = { id: string; tab: string; kicker: string };
type Tab = { id: string; name: string; ids: string[] };
type Area = { slug: string; useCases?: string[] };

// Showcase no modelo da ElevenLabs: título central, abas em pílula (3 no máximo)
// e uma grade irregular com até 3 casos por aba. Imagens: genéricas por ora.
const GRADIENTS = ['g06', 'g10', 'g02', 'g08', 'g04', 'g11', 'g07'];

// Cinco posições fixas, como na ElevenLabs: o que não tem caso vira um bloco
// vazio e sutil. a/b = coluna esquerda (topo/base), c = centro, d/e = direita.
const SLOTS = ['a', 'b', 'c', 'd', 'e'] as const;
const FILLS: Record<number, string[]> = {
  3: ['b', 'c', 'd'],
  2: ['c', 'd'],
};

export function Showcase2() {
  const { t } = useTranslation();
  const tabs = (t('home2.showcase.tabs') as Tab[]) ?? [];
  const cases = (t('teams.items') as UseCase[]) ?? [];
  const areas = (t('solutions.items') as Area[]) ?? [];
  const [tab, setTab] = useState(0);
  const current = tabs[tab];
  const list = (current?.ids ?? []).map((id) => cases.find((c) => c.id === id)).filter(Boolean) as UseCase[];

  const fill = tab === 1 && list.length === 2 ? ['b', 'c'] : (FILLS[list.length] ?? ['c']);

  const hrefFor = (id: string) => {
    const area = areas.find((a) => a.useCases?.includes(id));
    return id === 'sac' ? '/produtos/localizador' : area ? `/solucoes/${area.slug}` : '/solucoes';
  };

  return (
    <section id="casos" className="h2-section h2-showcase" aria-labelledby="h2-showcase-title">
      <div className="h2-wrap">
        <h2 id="h2-showcase-title" className="h2-title is-center">{t('home2.showcase.title')}</h2>
        <div className="h2-tabs" role="tablist">
          {tabs.map((tb, i) => (
            <button key={tb.id} type="button" role="tab" aria-selected={i === tab} className={i === tab ? 'is-on' : ''} onClick={() => setTab(i)}>
              {tb.name}
            </button>
          ))}
        </div>
        <ul className="h2-show-grid" aria-label={current?.name}>
          {SLOTS.map((slot) => {
            const idx = fill.indexOf(slot);
            const c = idx >= 0 ? list[idx] : undefined;
            if (!c) return <li key={slot} className={`h2-show-item s-${slot} is-blank`} aria-hidden="true" />;
            return (
              <li key={slot} className={`h2-show-item s-${slot}`}>
                <a className="h2-show-card" href={hrefFor(c.id)} data-placeholder={c.id}>
                  <span className="h2-show-art" style={{ backgroundImage: `url(/gradients/${GRADIENTS[(tab * 3 + idx) % GRADIENTS.length]}.avif)` }} aria-hidden="true" />
                  <span className="h2-show-shade" aria-hidden="true" />
                  <span className="h2-show-txt">
                    <small>{c.kicker}</small>
                    <strong>{c.tab}</strong>
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
