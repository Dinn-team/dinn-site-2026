import { ArrowRight } from 'lucide-react';
import { useTranslation } from '@/i18n/useTranslation';
import { Rich } from '@/lib/rich-text';
import { DEMO_URL } from '@/lib/links';
import { NeuralField } from './NeuralField';

// Herói provisório: o título (H1 com "Dinn" e "IA para o mercado farma"), uma
// frase e dois botões, sobre a rede neural. A conversa com o Dinn mudou para a
// seção Dinn Insights; o herói definitivo ainda será desenhado.

export function HeroSection() {
  const { t } = useTranslation();

  return (
    <section id="inicio" className="dh">
      <NeuralField energy={0.2} className="dh-canvas" />
      <div className="dh-vignette" aria-hidden="true" />

      <div className="wrap dh-inner">
        <span className="dh-pill"><i />{t('hero.pill')}</span>
        <h1 className="dh-title"><Rich text={t('hero.title') as string} /></h1>
        <p className="dh-desc">{t('hero.description')}</p>
        <div className="dh-actions">
          <a href={DEMO_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
            {t('hero.cta')}
            <ArrowRight size={18} aria-hidden="true" />
          </a>
          <a href="#times" className="btn btn-on-dark btn-lg">{t('hero.secondary')}</a>
        </div>
      </div>

      <div className="dh-logos">
        <p>{t('logos.title')}</p>
        <div>
          <img src="/clientes/2TT34cxYkS2JUU2rklS0yDIU5c.avif" alt="Eurofarma" width={512} height={92} loading="lazy" decoding="async" />
          <img src="/clientes/YewE4auu86Zyxd9HTI5pPwyZujk.avif" alt="Libbs" width={512} height={189} loading="lazy" decoding="async" />
          <img src="/clientes/marjanlogo-removebg-preview.png" alt="Marjan" width={392} height={129} loading="lazy" decoding="async" />
          <img src="/clientes/q5GXskJxl7qrQpg4qttvwnhJI.avif" alt="Sanofi" width={512} height={132} loading="lazy" decoding="async" />
        </div>
      </div>
    </section>
  );
}
