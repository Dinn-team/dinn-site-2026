import { MotionConfig } from 'framer-motion';
import { useTranslation } from '@/i18n/useTranslation';
import { PATHS } from '@/lib/site-map';
import { PageCta } from './PageShell';
import { PlatformHero } from './platform/PlatformHero';
import { CycleStage } from './platform/CycleStage';
import { PartsShowcase } from './platform/PartsShowcase';
import { DataSection } from './platform/DataSection';

// Página Plataforma: capa, ciclo que se revela com a rolagem, as cinco partes
// com uma demo de cada uma, dados e integrações e a chamada final.
// Os componentes ficam em ./platform; aqui só se monta a página.
export function PlatformPage() {
  const { t } = useTranslation();

  return (
    <MotionConfig reducedMotion="user">
      <div className="sp pf">
        <PlatformHero />
        <CycleStage />
        <PartsShowcase />
        <DataSection />
        <PageCta
          title={t('pageCta.title')}
          desc={t('pageCta.desc')}
          button={t('pageCta.button')}
          secondary={{ label: t('pageCta.secondary'), href: PATHS.solutions }}
        />
      </div>
    </MotionConfig>
  );
}
