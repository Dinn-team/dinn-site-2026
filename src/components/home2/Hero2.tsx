import { useState } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { useTranslation } from '@/i18n/useTranslation';
import { Rich } from '@/lib/rich-text';
import { contactUrl } from '@/lib/links';
import { PATHS } from '@/lib/site-map';

// Vídeo institucional da Dinn. Ainda não existe: quando estiver pronto, coloque
// o caminho do arquivo aqui (ex.: '/video/dinn-institucional.mp4').
export const HERO_VIDEO_SRC = '';

// Herói no modelo da Harvey: título à esquerda, subtítulo e ação à direita,
// e uma mídia larga com textura de fundo e o player do vídeo da Dinn.
export function Hero2() {
  const { t } = useTranslation();
  const [playing, setPlaying] = useState(false);
  const hasVideo = HERO_VIDEO_SRC !== '';

  return (
    <section className="h2-hero" aria-labelledby="h2-hero-title">
      <div className="h2-wrap">
        <div className="h2-hero-grid">
          <h1 id="h2-hero-title" className="h2-hero-title"><Rich text={t('home2.hero.title') as string} /></h1>
          <div className="h2-hero-side">
            <p className="h2-hero-sub">{t('home2.hero.sub')}</p>
            <div className="h2-actions">
              <a className="btn btn-primary" href={contactUrl('hero')}>{t('home2.hero.cta')}</a>
              <a className="h2-link" href={PATHS.platform}>{t('home2.hero.cta2')} <ArrowRight size={15} aria-hidden="true" /></a>
            </div>
          </div>
        </div>

        <div className="h2-media" data-texture>
          <div className="h2-player">
            {playing && hasVideo ? (
              <video src={HERO_VIDEO_SRC} autoPlay controls playsInline />
            ) : (
              <>
                <img className="h2-player-logo" src="/logo/Dinn_logo_v2_Dark.svg" alt="" width={120} height={46} />
                <button
                  type="button"
                  className="h2-play"
                  onClick={() => hasVideo && setPlaying(true)}
                  disabled={!hasVideo}
                  aria-label={t(hasVideo ? 'home2.hero.play' : 'home2.hero.soon') as string}
                >
                  <Play size={26} fill="currentColor" aria-hidden="true" />
                </button>
                {!hasVideo && <span className="h2-player-note">{t('home2.hero.soon')}</span>}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
