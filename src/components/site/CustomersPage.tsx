import { useTranslation } from '@/i18n/useTranslation';
import { TestimonialsSection } from '@/components/ui/TestimonialsSection';
import { PageCta, PageHero, SectionHead } from './PageShell';

type Step = { label: string; text: string };

// Logos autorizados para exibição. Antes de acrescentar um nome, a relação com
// a Dinn (cliente ativo, projeto, piloto, parceiro) precisa estar classificada
// e o uso da marca aprovado.
const LOGOS = [
  { src: '/clientes/2TT34cxYkS2JUU2rklS0yDIU5c.avif', alt: 'Eurofarma', width: 512, height: 92 },
  { src: '/clientes/YewE4auu86Zyxd9HTI5pPwyZujk.avif', alt: 'Libbs', width: 512, height: 189 },
  { src: '/clientes/marjanlogo-removebg-preview.png', alt: 'Marjan', width: 392, height: 129 },
  { src: '/clientes/q5GXskJxl7qrQpg4qttvwnhJI.avif', alt: 'Sanofi', width: 512, height: 132 },
];

export function CustomersPage() {
  const { t } = useTranslation();
  const steps = (t('customers.caseBlock.steps') as Step[]) ?? [];
  const rules = (t('customers.rules.items') as string[]) ?? [];

  return (
    <div className="sp">
      <PageHero eyebrow={t('customers.hero.eyebrow')} title={t('customers.hero.title')} lead={t('customers.hero.lead')} />

      <section className="sp-section" aria-label={t('logos.title')}>
        <div className="wrap">
          <p className="sp-logos-title">{t('logos.title')}</p>
          <div className="sp-logos">
            {LOGOS.map((l) => (
              <img key={l.alt} src={l.src} alt={l.alt} width={l.width} height={l.height} loading="lazy" decoding="async" />
            ))}
          </div>
        </div>
      </section>

      <section id="caso" className="sp-section is-alt" aria-labelledby="sp-case">
        <div className="wrap">
          <span className="sp-flag">{t('customers.caseBlock.tag')}</span>
          <SectionHead id="sp-case" title={t('customers.caseBlock.title')} intro={t('customers.caseBlock.intro')} />
          <ol className="sp-case">
            {steps.map((s, i) => (
              <li key={s.label}>
                <span className="sp-num">{i + 1}</span>
                <div>
                  <h3>{s.label}</h3>
                  <p>{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <TestimonialsSection />

      <section className="sp-section is-alt" aria-labelledby="sp-rules">
        <div className="wrap sp-split">
          <SectionHead id="sp-rules" title={t('customers.rules.title')} />
          <ul className="sp-checks">
            {rules.map((r) => <li key={r}>{r}</li>)}
          </ul>
        </div>
      </section>

      <PageCta title={t('customers.cta.title')} desc={t('customers.cta.desc')} button={t('customers.cta.button')} />
    </div>
  );
}
