import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "@/i18n/useTranslation";

function AnimatedHero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const { t } = useTranslation();
  
  const titles = t('hero.titlePart2') as string[];

  useEffect(() => {
    const id = setTimeout(() => {
      setTitleNumber((n) => (n === titles.length - 1 ? 0 : n + 1));
    }, 2000);
    return () => clearTimeout(id);
  }, [titleNumber, titles]);

  return (
    <div style={{
      width: '100%',
      background: '#1F2328',
      color: '#fff',
      position: 'relative',
      overflow: 'hidden',
      paddingTop: '160px',
      paddingBottom: '120px',
    }}>
      {/* Glow blob */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '800px',
        height: '400px',
        background: 'rgba(86,37,242,0.18)',
        filter: 'blur(120px)',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 0,
      }} />

      <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '32px' }}>

          {/* Pill badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(255,255,255,0.08)',
            border: '1px solid rgba(255,255,255,0.12)',
            borderRadius: '999px',
            padding: '6px 18px',
          }}>
            <span style={{
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.7)',
            }}>
              {t('hero.pill')}
            </span>
          </div>

          {/* Headline */}
          <div style={{ textAlign: 'center', width: '100%' }}>
            <h1 style={{
              fontSize: 'clamp(32px, 5vw, 68px)',
              lineHeight: 1.05,
              fontWeight: 800,
              letterSpacing: '-0.03em',
              margin: 0,
            }}>
              <span style={{ color: '#fff' }} dangerouslySetInnerHTML={{ __html: t('hero.titlePart1') as string }} />
              <span style={{
                position: 'relative',
                display: 'inline-flex',
                justifyContent: 'center',
                width: '100%',
                overflow: 'hidden',
                color: '#7C5CF6',
                fontStyle: 'italic',
                fontWeight: 300,
                height: '1.2em',
                verticalAlign: 'bottom',
              }}>
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    style={{ position: 'absolute' }}
                    initial={{ opacity: 0, y: -80 }}
                    transition={{ type: "spring", stiffness: 55, damping: 14 }}
                    animate={
                      titleNumber === index
                        ? { y: 0, opacity: 1 }
                        : { y: titleNumber > index ? -100 : 100, opacity: 0 }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>
          </div>

          {/* Subtext */}
          <p style={{
            fontSize: 'clamp(16px, 2vw, 20px)',
            color: 'rgba(255,255,255,0.5)',
            lineHeight: 1.7,
            maxWidth: '560px',
            textAlign: 'center',
            margin: 0,
            fontWeight: 300,
          }}>
            {t('hero.description')}
          </p>

          {/* CTA */}
          <div style={{ marginTop: '8px' }}>
            <a
              href="https://meetings.hubspot.com/eduardo-fonseca?uuid=eeff79af-d416-4635-a673-4c678359d1b4"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              {t('hero.cta')}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}

export { AnimatedHero };
