import { useTranslation } from "@/i18n/useTranslation";
import { contactUrl } from "@/lib/links";
import { blogPath } from "@/i18n/routes";
import { newFeatureLinks } from "@/components/ui/nav-header";

// Rodapé com as mesmas colunas do menu do topo: Plataforma, Soluções,
// Recursos, A Dinn (com Planos e Clientes) e Legal.

type Col = { title: string; links: [string, string][] };

export default function Footer() {
  const { t, lang } = useTranslation();
  const areas = (t('solutions.items') as { slug: string; name: string }[]) ?? [];

  const columns: Col[] = [
    {
      title: t('menu.platform') as string,
      links: [
        [t('menu.platformOverview') as string, '/plataforma'],
        [t('menu.features') as string, '/funcionalidades'],
        ...newFeatureLinks(t).map((l): [string, string] => [l.label, l.href]),
        [t('menu.coverage') as string, '/cobertura'],
      ],
    },
    {
      title: t('footer.sectionSolutions') as string,
      links: [
        ...areas.map((a): [string, string] => [a.name, `/solucoes/${a.slug}`]),
        [t('menu.solutionsAll') as string, '/solucoes'],
      ],
    },
    {
      title: t('nav.resources') as string,
      links: [
        [t('nav.blog') as string, blogPath(lang)],
        [t('nav.cases') as string, '/recursos/casos'],
        [t('nav.changelog') as string, '/recursos/changelog'],
        [t('menu.compare') as string, '/comparativos'],
      ],
    },
    {
      title: t('footer.sectionA') as string,
      links: [
        [t('menu.about') as string, '/sobre'],
        [t('menu.plansOverview') as string, '/planos'],
        [t('nav.customers') as string, '/clientes'],
        [t('menu.research') as string, '/pesquisas'],
        [t('menu.trust') as string, '/confianca'],
        [t('contact.navLabel') as string, '/contato'],
      ],
    },
    {
      title: t('footer.sectionLegal') as string,
      links: [
        [t('footer.termos') as string, '/termos-de-uso'],
        [t('footer.privacidade') as string, '/politicas-de-privacidade'],
        [t('footer.cookies') as string, '/politicas-de-privacidade#cookies'],
        [t('footer.suporte') as string, '/suporte'],
      ],
    },
  ];

  return (
    <footer style={{ background: 'var(--muted)' }}>
      <div className="wrap ftr" style={{ paddingTop: '72px', paddingBottom: '64px' }}>

        {/* Marca + cinco colunas */}
        <div className="footer-grid">

          <div>
            <a href="/" className="ftr-logo">
              <img src="/logo/Dinn_logo_v2_Dark.png" alt="Dinn Logo" width={394} height={152} loading="lazy" decoding="async" style={{ height: '30px', width: 'auto' }} />
            </a>
            <p className="ftr-desc">
              {t('footer.description')}
            </p>
            <a href={contactUrl('rodape')} className="btn btn-primary">
              {t('footer.ctaButton')}
            </a>
            <address className="ftr-company">
              <strong>{t('footer.legalName')}</strong>
              <span>CNPJ {t('footer.cnpj')}</span>
              <span>{t('footer.address')}</span>
            </address>
          </div>

          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <p className="ftr-title">{col.title}</p>
              <ul className="ftr-links">
                {col.links.map(([label, href]) => (
                  <li key={`${href}-${label}`}><a href={href}>{label}</a></li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

      </div>

      <div className="ftr-bar">
        <div className="wrap ftr-bar-in">
          <p>{t('footer.rights')}</p>
          <p>{t('footer.cities')}</p>
        </div>
      </div>

      <style>{`
        .ftr .footer-grid { display: grid; grid-template-columns: 1.6fr repeat(5, 1fr); gap: 48px 40px; align-items: start; }
        .ftr-logo { display: inline-flex; margin-bottom: 20px; }
        .ftr-desc { font-size: 15px; line-height: 1.6; color: var(--muted-foreground); max-width: 30ch; margin: 0 0 24px; }
        .ftr-title { font-size: 16px; font-weight: 600; line-height: 1.3; color: var(--foreground); margin: 0 0 20px; }
        .ftr-links { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 12px; }
        .ftr-links a { font-size: 15px; font-weight: 400; line-height: 1.4; color: var(--muted-foreground); text-decoration: none; transition: color .2s; }
        .ftr-links a:hover { color: var(--primary); }
        .ftr-company { display: grid; gap: 4px; margin-top: 40px; font-style: normal; font-size: 14px; line-height: 1.5; color: var(--muted-foreground); max-width: 30ch; }
        .ftr-company strong { font-weight: 500; color: var(--foreground); }
        .ftr-bar { background: color-mix(in oklab, var(--muted) 94%, var(--foreground)); }
        .ftr-bar-in { display: flex; flex-wrap: wrap; justify-content: space-between; gap: 8px 24px; padding-top: 20px; padding-bottom: 20px; }
        .ftr-bar-in p { margin: 0; font-size: 14px; line-height: 1.5; color: var(--muted-foreground); }
        /* O botão "Dúvidas?" fica fixo no canto direito e cobria o texto da direita. Reserva o espaço dele. */
        @media (min-width: 761px) { .ftr-bar .ftr-bar-in { padding-right: 232px; } }
        @media (max-width: 760px) { .ftr-bar .ftr-bar-in { padding-bottom: 88px; } }
        @media (max-width: 1100px) {
          .ftr .footer-grid { grid-template-columns: repeat(3, 1fr); }
          .ftr .footer-grid > div:first-child { grid-column: 1 / -1; }
        }
        @media (max-width: 720px) {
          .ftr .footer-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 480px) {
          .ftr .footer-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </footer>
  );
}
