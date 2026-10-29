import { ArrowRight } from 'lucide-react';
import { useTranslation } from '@/i18n/useTranslation';
import { PATHS } from '@/lib/site-map';
import { blogPath } from '@/i18n/routes';

type Item = { id: string; name: string; text: string };
const GRADIENTS: Record<string, string> = { blog: 'g03', cases: 'g05', changelog: 'g09', compare: 'g07' };

// Recursos: quatro cards com fundo em gradiente da marca.
export function Resources2() {
  const { t, lang } = useTranslation();
  const items = (t('home2.resources.items') as Item[]) ?? [];
  const href = (id: string) =>
    id === 'blog' ? blogPath(lang) : id === 'cases' ? PATHS.cases : id === 'changelog' ? PATHS.changelog : PATHS.compare;
  return (
    <section id="recursos" className="h2-section h2-resources" aria-labelledby="h2-res-title">
      <div className="h2-wrap">
        <h2 id="h2-res-title" className="h2-title">{t('home2.resources.title')}</h2>
        <ul className="h2-res-grid">
          {items.map((r) => (
            <li key={r.id}>
              <a className="h2-res" href={href(r.id)} style={{ backgroundImage: `url(/gradients/${GRADIENTS[r.id] ?? 'g03'}.avif)` }}>
                <span className="h2-res-shade" aria-hidden="true" />
                <span className="h2-res-txt">
                  <strong>{r.name}</strong>
                  <span>{r.text}</span>
                </span>
                <ArrowRight className="h2-res-go" size={18} aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
