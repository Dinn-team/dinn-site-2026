import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { useTranslation } from '@/i18n/useTranslation';
import { Rich } from '@/lib/rich-text';
import { contactUrl } from '@/lib/links';
import { PATHS } from '@/lib/site-map';
import { gradUrl } from '@/components/site/area-theme';

// Vídeo institucional "Um dia com o Dinn" (v4.1, render de 06/11/2026, 2 min 55 s).
// O arquivo em public/video é uma versão leve (1600 px, H.264) do render em
// wt-davinci-skill-motion (05-build-v3/out/um-dia-com-o-dinn-v4.1.mp4). Para trocar o vídeo, gere de novo com ffmpeg:
//   ffmpeg -i render.mp4 -vf scale=1600:-2 -c:v libx264 -crf 28 -preset medium -pix_fmt yuv420p -movflags +faststart -c:a aac -b:a 96k public/video/dinn-institucional.mp4
export const HERO_VIDEO_SRC = '/video/dinn-institucional.mp4';

// Prévia sem som que roda em repetição antes do play, como a miniatura do YouTube.
// São três takes de tela do produto tirados do próprio vídeo: Localizador (82,5–91,5 s),
// filtro na tela Início (41,5–45,5 s) e mapa de Oportunidades (118–121,5 s), com fusão de 0,4 s.
// 1280 px, sem áudio, ~1,4 MB. O pôster é o quadro de 4 s da prévia.
export const HERO_PREVIEW_SRC = '/video/dinn-institucional-previa.mp4';
export const HERO_PREVIEW_POSTER = '/video/dinn-institucional-previa.jpg';

// Herói: título à esquerda, subtítulo e ação à direita, e a prévia do vídeo
// rodando sem som. O botão de play (ou um clique na prévia) abre o vídeo com som.
// Com "reduzir movimento" ligado, a prévia fica parada no pôster.
export function Hero2() {
  const { t } = useTranslation();
  const [playing, setPlaying] = useState(false);
  const preview = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = preview.current;
    if (!v) return;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const apply = () => { if (mq.matches) v.pause(); else v.play().catch(() => {}); };
    apply();
    mq.addEventListener('change', apply);
    return () => mq.removeEventListener('change', apply);
  }, [playing]);

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

        <div className={`h2-media sl2-media hv ${playing ? 'is-playing' : 'is-preview'}`} style={{ backgroundImage: gradUrl('g08') }}>
          {playing ? (
            <video className="hv-video" src={HERO_VIDEO_SRC} autoPlay controls playsInline preload="auto" aria-label={t('home2.hero.play') as string} />
          ) : (
            <>
              <video ref={preview} className="hv-video hv-preview" src={HERO_PREVIEW_SRC} poster={HERO_PREVIEW_POSTER} muted loop playsInline preload="auto" aria-hidden="true" tabIndex={-1} onClick={() => setPlaying(true)} />
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
