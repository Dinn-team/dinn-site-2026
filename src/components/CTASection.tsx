import { useTranslation } from "@/i18n/useTranslation";

interface CTASectionProps {
  ctaHref?: string;
}

export default function CTASection({
  ctaHref = 'https://meetings.hubspot.com/eduardo-fonseca?uuid=eeff79af-d416-4635-a673-4c678359d1b4',
}: CTASectionProps) {
  const { t } = useTranslation();

  return (
    <section style={{ padding: '96px 0', background: '#fff' }}>
      <div className="wrap">
        <div style={{
          background: 'linear-gradient(135deg, #F8F9FA 0%, #fff 100%)',
          border: '1px solid #E5E7EB',
          borderRadius: '24px',
          padding: 'clamp(48px, 6vw, 80px) clamp(32px, 5vw, 80px)',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 8px 40px rgba(86,37,242,0.06)',
        }}>
          {/* Decorative blobs */}
          <div style={{
            position: 'absolute', top: '-80px', right: '-80px',
            width: '280px', height: '280px',
            background: 'rgba(86,37,242,0.05)', borderRadius: '50%',
            filter: 'blur(60px)', pointerEvents: 'none',
          }} />
          <div style={{
            position: 'absolute', bottom: '-80px', left: '-80px',
            width: '280px', height: '280px',
            background: 'rgba(86,37,242,0.05)', borderRadius: '50%',
            filter: 'blur(60px)', pointerEvents: 'none',
          }} />

          <h2 style={{
            fontSize: 'clamp(26px, 4vw, 48px)',
            fontWeight: 800,
            color: '#1F2328',
            letterSpacing: '-0.025em',
            lineHeight: 1.2,
            margin: '0 0 20px',
            position: 'relative',
          }}>
            {t('ctaFinal.title')}
          </h2>
          <p style={{
            fontSize: 'clamp(16px, 2vw, 20px)',
            color: '#6B7280',
            lineHeight: 1.65,
            maxWidth: '560px',
            margin: '0 auto 40px',
            position: 'relative',
          }}>
            {t('ctaFinal.description')}
          </p>
          <a
            href={ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            {t('ctaFinal.button')}
          </a>
        </div>
      </div>
    </section>
  );
}
