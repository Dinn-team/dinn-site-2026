import { useTranslation } from "@/i18n/useTranslation";
import { contactUrl } from "@/lib/links";
import { blogPath } from "@/i18n/routes";

// Rodapé com as mesmas colunas do menu do topo: Plataforma, Soluções,
// Recursos, A Dinn (com Planos e Clientes) e Legal.

type Col = { title: string; links: [string, string][] };

const headingStyle = {
  fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: '#9CA3AF', margin: '0 0 16px',
};
const linkStyle = { fontSize: '15px', color: '#6B7280', textDecoration: 'none', fontWeight: 500 };

export default function Footer() {
  const { t, lang } = useTranslation();
  const areas = (t('solutions.items') as { slug: string; name: string }[]) ?? [];

  const columns: Col[] = [
    {
      title: t('menu.platform') as string,
      links: [
        [t('menu.platformOverview') as string, '/plataforma'],
        [t('menu.features') as string, '/funcionalidades'],
        [t('menu.locator') as string, '/produtos/localizador'],
        [t('menu.conecta') as string, '/produtos/conecta'],
        [t('menu.integrations') as string, '/integracoes'],
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
    <footer style={{ background: '#ffffff', borderTop: '1px solid #E5E7EB' }}>
      <div className="wrap" style={{ paddingTop: '64px', paddingBottom: '48px' }}>

        {/* Marca + cinco colunas */}
        <div className="footer-grid" style={{ display: 'grid', gap: '40px', marginBottom: '48px', alignItems: 'start' }}>

          <div>
            <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', marginBottom: '16px' }}>
              <img src="/Logo_Dinn_Cinza.svg" alt="Dinn Logo" width={1807} height={676} loading="lazy" decoding="async" style={{ height: '36px', width: 'auto' }} />
            </a>
            <p style={{ fontSize: '14px', color: '#6B7280', lineHeight: 1.7, margin: '0 0 20px' }}>
              {t('footer.description')}
            </p>
            <a href={contactUrl('rodape')} className="btn btn-primary">
              {t('footer.ctaButton')}
            </a>
          </div>

          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <p style={headingStyle}>{col.title}</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {col.links.map(([label, href]) => (
                  <a
                    key={`${href}-${label}`}
                    href={href}
                    style={linkStyle}
                    onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--primary)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = '#6B7280'; }}
                  >
                    {label}
                  </a>
                ))}
              </div>
            </nav>
          ))}
        </div>

        {/* Barra de baixo: dados da empresa */}
        <div style={{
          borderTop: '1px solid #F3F4F6',
          paddingTop: '24px',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '12px',
        }}>
          <div>
            <p style={{ fontSize: '13px', color: '#6B7280', margin: 0, fontWeight: 600 }}>
              {t('footer.legalName')} · CNPJ {t('footer.cnpj')}
            </p>
            <p style={{ fontSize: '13px', color: '#6B7280', margin: '2px 0 0' }}>
              {t('footer.address')} · {t('footer.cities')}
            </p>
            <p style={{ fontSize: '13px', color: '#6B7280', margin: '2px 0 0' }}>
              {t('footer.rights')}
            </p>
          </div>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            background: '#F3F4F6',
            border: '1px solid #E5E7EB',
            padding: '4px 12px',
            borderRadius: '999px',
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            color: '#6B7280',
          }}>
            {t('footer.launch')}
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--primary)', display: 'inline-block' }} />
          </div>
        </div>
      </div>

      <style>{`
        .footer-grid {
          grid-template-columns: 1.5fr repeat(5, 1fr);
        }
        @media (max-width: 1100px) {
          .footer-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 720px) {
          .footer-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </footer>
  );
}
