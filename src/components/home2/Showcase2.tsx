import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from '@/i18n/useTranslation';
import { PATHS } from '@/lib/site-map';

type UseCase = { id: string; tab: string; kicker: string };
type Tab = { id: string; name: string; ids: string[] };
type Area = { slug: string; useCases?: string[] };

// Showcase no modelo da ElevenLabs: título à esquerda, abas em pílula (3 no
// máximo) e uma grade irregular. Toda aba mostra 3 cards cheios: fotos reais
// (Pexels, ver public/showcase/CREDITS.md) e, quando a aba tem só 2 casos, um
// card em degradê que leva à lista de casos de uso.
const PHOTOS: Record<string, string> = {
  demanda: '/showcase/demanda.webp',
  concorrencia: '/showcase/concorrencia.webp',
  lancamento: '/showcase/lancamento.webp',
  distribuicao: '/showcase/distribuicao.webp',
  parado: '/showcase/parado.webp',
  campo: '/showcase/campo.webp',
  sac: '/showcase/sac.webp',
};
// Enquadramento de cada foto dentro do card (as de pessoa ficam em pé, mais altas que o card).
const FOCUS: Record<string, string> = { lancamento: '50% 50%', campo: '50% 30%', sac: '50% 22%', demanda: '50% 50%', parado: '50% 45%', concorrencia: '50% 40%' };
const FILLER_GRADIENT = 'web/roxo-noite';

// Cinco posições fixas, como na ElevenLabs: o que não tem caso vira um bloco
// vazio e sutil. a/b = coluna esquerda (topo/base), c = centro, d/e = direita.
const SLOTS = ['a', 'b', 'c', 'd', 'e'] as const;
const FILLED = ['b', 'c', 'd'];

export function Showcase2() {
  const { t } = useTranslation();
  const tabs = (t('home2.showcase.tabs') as Tab[]) ?? [];
  const cases = (t('teams.items') as UseCase[]) ?? [];
  const areas = (t('solutions.items') as Area[]) ?? [];
  const [tab, setTab] = useState(0);
  const current = tabs[tab];
  const list = (current?.ids ?? []).map((id) => cases.find((c) => c.id === id)).filter(Boolean) as UseCase[];

  // Abas com 2 casos ganham o card em degradê: no fim na segunda aba, no começo na terceira.
  type Item = { kind: 'case'; c: UseCase } | { kind: 'filler' };
  const items: Item[] = list.map((c) => ({ kind: 'case', c }));
  if (items.length < 3) items.splice(tab === 2 ? 0 : items.length, 0, { kind: 'filler' });

  const hrefFor = (id: string) => {
    const area = areas.find((a) => a.useCases?.includes(id));
    return id === 'sac' ? '/produtos/localizador' : area ? `/solucoes/${area.slug}` : '/solucoes';
  };

  return (
    <section id="casos" className="h2-section h2-showcase" aria-labelledby="h2-showcase-title">
      <div className="h2-wrap">
        <h2 id="h2-showcase-title" className="h2-title">{t('home2.showcase.title')}</h2>
        <div className="h2-tabs" role="tablist">
          {tabs.map((tb, i) => (
            <button key={tb.id} type="button" role="tab" aria-selected={i === tab} className={i === tab ? 'is-on' : ''} onClick={() => setTab(i)}>
              {tb.name}
            </button>
          ))}
        </div>
        <ul className="h2-show-grid" aria-label={current?.name}>
          {SLOTS.map((slot) => {
            const idx = FILLED.indexOf(slot);
            const it = idx >= 0 ? items[idx] : undefined;
            if (!it) return <li key={slot} className={`h2-show-item s-${slot} is-blank`} aria-hidden="true" />;
            if (it.kind === 'filler') {
              return (
                <li key={slot} className={`h2-show-item s-${slot}`}>
                  <a className="h2-show-card is-filler" href={PATHS.cases}>
                    <span className="h2-show-art" style={{ backgroundImage: `url(/gradients/${FILLER_GRADIENT}.avif)` }} aria-hidden="true" />
                    <span className="h2-show-txt">
                      <strong>{t('clients.cases.all')}</strong>
                      <ArrowRight size={18} aria-hidden="true" />
                    </span>
                  </a>
                </li>
              );
            }
            const c = it.c;
            return (
              <li key={slot} className={`h2-show-item s-${slot}`}>
                <a className="h2-show-card" href={hrefFor(c.id)} data-placeholder={c.id}>
                  <span
                    className="h2-show-art"
                    style={{ backgroundImage: `url(${PHOTOS[c.id]})`, backgroundPosition: FOCUS[c.id] ?? '50% 50%' }}
                    aria-hidden="true"
                  />
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
