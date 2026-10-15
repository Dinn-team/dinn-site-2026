import { useTranslation } from '@/i18n/useTranslation';
import { ImageHero } from '../PageShell';

// Troque o caminho aqui para trocar a imagem da capa.
export const PLATFORM_COVER = '/plataforma/capa.webp';

// Capa: a ilustração em largura total com o texto em branco sobre a faixa de rio
// e árvores, embaixo, onde a foto tem menos informação (as seis estações da
// ponte ficam livres na parte de cima).
export function PlatformHero() {
  const { t } = useTranslation();
  return (
    <ImageHero
      src={PLATFORM_COVER}
      alt={t('platformViz.cover.alt') as string}
      position="50% 22%"
      align="center"
      eyebrow={t('platform.hero.eyebrow') as string}
      title={t('platform.hero.title') as string}
      lead={t('platform.hero.lead') as string}
    />
  );
}
