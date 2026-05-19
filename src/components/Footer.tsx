import { useTranslation } from "@/i18n/useTranslation";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer style={{ background: '#ffffff', borderTop: '1px solid #E5E7EB' }}>
      <div className="wrap" style={{ paddingTop: '64px', paddingBottom: '48px' }}>

        {/* Main grid: brand + 4 columns */}
        <div className="footer-grid" style={{
          display: 'grid',
          gap: '40px',
          marginBottom: '48px',
          alignItems: 'start',
        }}>

          {/* Brand */}
          <div>
            <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', marginBottom: '16px' }}>
              <img src="/Logo_Dinn_Cinza.svg" alt="Dinn Logo" style={{ height: '36px', width: 'auto' }} />
            </a>
            <p style={{ fontSize: '14px', color: '#9CA3AF', lineHeight: 1.7, margin: 0 }}>
              {t('footer.description')}
            </p>
          </div>

          {/* A Dinn */}
          <div>
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9CA3AF', margin: '0 0 16px' }}>
              {t('footer.sectionA')}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[[t('nav.home'), '/'], [t('nav.blog'), '/blog']].map(([label, href]) => (
                <a key={href} href={href}
                  style={{ fontSize: '15px', color: '#6B7280', textDecoration: 'none', fontWeight: 500 }}
                  onmouseenter="this.style.color='#5625F2'"
                  onmouseleave="this.style.color='#6B7280'"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>



          {/* Legal */}
          <div>
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9CA3AF', margin: '0 0 16px' }}>
              {t('footer.sectionLegal')}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                [t('footer.termos'), '/politicas-de-privacidade'],
                [t('footer.privacidade'), '/politicas-de-privacidade'],
                [t('footer.cookies'), '/politicas-de-privacidade'],
              ].map(([label, href]) => (
                <a key={href} href={href}
                  style={{ fontSize: '15px', color: '#6B7280', textDecoration: 'none', fontWeight: 500 }}
                  onmouseenter="this.style.color='#5625F2'"
                  onmouseleave="this.style.color='#6B7280'"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Mini CTA */}
          <div style={{
            background: '#F8F9FA',
            border: '1px solid #E5E7EB',
            borderRadius: '14px',
            padding: '24px',
          }}>
            <p style={{ fontWeight: 700, fontSize: '15px', color: '#1F2328', margin: '0 0 6px' }}>
              {t('footer.ctaTitle')}
            </p>
            <p style={{ fontSize: '13px', color: '#9CA3AF', lineHeight: 1.6, margin: '0 0 18px' }}>
              {t('footer.ctaDesc')}
            </p>
            <a
              href="https://meetings.hubspot.com/eduardo-fonseca?uuid=eeff79af-d416-4635-a673-4c678359d1b4"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              {t('footer.ctaButton')}
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid #F3F4F6',
          paddingTop: '24px',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '12px',
        }}>
          <p style={{ fontSize: '13px', color: '#9CA3AF', margin: 0 }}>
            {t('footer.rights')}
          </p>
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
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#5625F2', display: 'inline-block' }} />
          </div>
        </div>
      </div>

      {/* Responsive mobile styles */}
      <style>{`
        .footer-grid {
          grid-template-columns: 2.5fr 1fr 1.5fr 2fr;
        }
        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
        @media (max-width: 640px) {
          .footer-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </footer>
  );
}
