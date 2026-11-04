import { useState } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { useTranslation } from '@/i18n/useTranslation';
import { Rich } from '@/lib/rich-text';
import { contactUrl } from '@/lib/links';
import { PATHS } from '@/lib/site-map';
import { HomeDemo } from '@/components/site/AppDemos';
import { gradUrl } from '@/components/site/area-theme';

// Vídeo institucional "Um dia com o Dinn" (render de 03/11/2026, 2 min 54 s).
// O arquivo em public/video é uma versão leve (1600 px, H.264) do render em
// wt-davinci-video. Para trocar o vídeo, gere de novo com ffmpeg:
//   ffmpeg -i render.mp4 -vf scale=1600:-2 -c:v libx264 -crf 28 -preset medium -pix_fmt yuv420p -movflags +faststart -c:a aac -b:a 96k public/video/dinn-institucional.mp4
export const HERO_VIDEO_SRC = '/video/dinn-institucional.mp4';

// Herói: título à esquerda, subtítulo e ação à direita, e a tela Início do
// Dinn inteira e parada sobre o degradê. O botão de play troca a tela pelo vídeo.
export function Hero2() {
  const { t } = useTranslation();
  const [playing, setPlaying] = useState(false);

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

        <div className={`h2-media sl2-media hv${playing ? ' is-playing' : ''}`} style={{ backgroundImage: gradUrl('g08') }}>
          {playing ? (
            <video className="hv-video" src={HERO_VIDEO_SRC} autoPlay controls playsInline preload="auto" aria-label={t('home2.hero.play') as string} />
          ) : (
            <>
              <div className="sl2-screen hv-screen"><HomeDemo step={0} /></div>
              <button type="button" className="hv-play" onClick={() => setPlaying(true)} aria-label={t('home2.hero.play') as string}>
                <Play size={28} fill="currentColor" aria-hidden="true" />
              </button>
            </>
          )}
        </div>
        {!playing && <p className="ft2-caption">{t('features.page.caption')}</p>}
      </div>
    </section>
  );
}
