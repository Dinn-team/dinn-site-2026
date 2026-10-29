import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from '@/i18n/useTranslation';
import { PATHS } from '@/lib/site-map';

type Item = { id: string; name: string; text: string; tag?: 'beta' | 'soon' };

// Lista de funcionalidades no modelo da Harvey: nomes curtos à esquerda, o item
// ativo abre o texto, e a imagem do produto troca à direita.
// Imagens: ainda genéricas. Quando houver print ou loop do Dinn Manager
// (dados mock), coloque o arquivo em public/features/<id>.* e informe em SHOTS.
const SHOTS: Record<string, string> = {};
const GRADIENTS = ['g00', 'g03', 'g05', 'g07', 'g11', 'g09', 'g04'];

export function Features2() {
  const { t } = useTranslation();
  const items = (t('home2.features.items') as Item[]) ?? [];
  const [active, setActive] = useState(0);
  const cur = items[active];

  return (
    <section id="como-funciona" className="h2-section h2-features" aria-labelledby="h2-features-title">
      <div className="h2-wrap">
        <div className="h2-head is-stack">
          <h2 id="h2-features-title" className="h2-title">{t('home2.features.title')}</h2>
          <p className="h2-sub">{t('home2.features.sub')}</p>
        </div>
        <div className="h2-feat-grid">
          <ul className="h2-feat-list">
            {items.map((it, i) => (
              <li key={it.id} className={i === active ? 'is-active' : ''}>
                <button type="button" className="h2-feat-name" aria-expanded={i === active} onClick={() => setActive(i)}>
                  <span>{it.name}</span>
                  {it.tag && <span className={`h2-tag is-${it.tag}`}>{t(`home2.features.${it.tag}`)}</span>}
                </button>
                {i === active && (
                  <div className="h2-feat-body">
                    <p>{it.text}</p>
                    <a className="h2-link" href={PATHS.features}>{t('home2.features.more')} <ArrowRight size={14} aria-hidden="true" /></a>
                  </div>
                )}
              </li>
            ))}
          </ul>
          <div className="h2-feat-shot" data-placeholder={cur?.id}>
            {cur && SHOTS[cur.id] ? (
              <img src={SHOTS[cur.id]} alt={cur.name} loading="lazy" />
            ) : (
              <span className="h2-shot-ph" style={{ backgroundImage: `url(/gradients/${GRADIENTS[active % GRADIENTS.length]}.avif)` }} aria-hidden="true" />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
