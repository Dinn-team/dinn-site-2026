import { useTranslation } from '@/i18n/useTranslation';
import { Rich } from '@/lib/rich-text';
import { PATHS } from '@/lib/site-map';
import { RealtimeScene } from '@/components/site/offer/RealtimeScene';

// Estoque em tempo real, numa cena concreta: o Localizador consulta a loja
// agora, mostra a resposta com o horário e a separa da leitura D-1 e da
// estimada. A mesma cena está na página do Localizador.

export function RealtimeSection() {
  const { t } = useTranslation();

  return (
    <section id="tempo-real" className="areas is-content rt-section" aria-labelledby="rt-title">
      <div className="wrap">
        <div className="areas-head">
          <p className="teams-eyebrow">{t('realtime.eyebrow')}</p>
          <h2 id="rt-title" className="teams-title"><Rich text={t('realtime.title') as string} /></h2>
          <p className="areas-intro">{t('realtime.text')}</p>
        </div>
        <RealtimeScene />
        <p className="rt-condition">{t('realtime.condition')}</p>
        <p className="sp-more rt-more"><a href={PATHS.locator}>{t('realtime.link')} →</a></p>
      </div>
    </section>
  );
}
