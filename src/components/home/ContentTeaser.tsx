import { ArrowUpRight } from 'lucide-react';
import { useTranslation } from '@/i18n/useTranslation';

type Item = { type: string; title: string; desc: string; href: string };

// Antes da chamada final: três conteúdos para quem ainda não está pronto
// para uma demonstração (um guia, um caso e o blog).

export function ContentTeaser() {
  const { t } = useTranslation();
  const items = (t('contentTeaser.items') as Item[]) ?? [];

  return (
    <section id="recursos" className="areas is-content" aria-labelledby="content-title">
      <div className="wrap">
        <div className="areas-head">
          <p className="teams-eyebrow">{t('contentTeaser.eyebrow')}</p>
          <h2 id="content-title" className="teams-title">{t('contentTeaser.title')}</h2>
        </div>
        <div className="sp-grid is-three">
          {items.map((it) => (
            <a key={it.href} className="sp-card sp-resource" href={it.href}>
              <span className="sp-tag">{it.type}</span>
              <h3>{it.title}</h3>
              <p>{it.desc}</p>
              <span className="sp-area-go">{t('resources.openItem')}<ArrowUpRight size={15} aria-hidden="true" /></span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
