import { useTranslation } from '@/i18n/useTranslation';
import { PageHero } from '../PageShell';

// Troque o caminho aqui para trocar a imagem da capa.
export const PLATFORM_COVER = '/plataforma/capa.webp';
const COVER_SIZE = { width: 1671, height: 941 };

// Capa: a imagem em largura total, sem nenhum texto por cima. O título, o lead e
// o eyebrow ficam logo abaixo, na própria seção. O fundo claro do contêiner é
// de propósito: o menu fixo escolhe o logo escuro conforme o fundo sob ele.
export function PlatformHero() {
  const { t } = useTranslation();
  return (
    <div className="pf-top">
      <div className="pf-cover">
        <img
          src={PLATFORM_COVER}
          alt={t('platformViz.cover.alt') as string}
          width={COVER_SIZE.width}
          height={COVER_SIZE.height}
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
      </div>
      <PageHero eyebrow={t('platform.hero.eyebrow')} title={t('platform.hero.title')} lead={t('platform.hero.lead')} />
    </div>
  );
}
