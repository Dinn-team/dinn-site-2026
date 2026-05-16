import { useState } from 'react';
import { useTranslation } from "@/i18n/useTranslation";

export default function FAQ() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const items = Array.from({ length: 11 }).map((_, i) => ({
    question: t(`faq.items.${i}.question`),
    answer: t(`faq.items.${i}.answer`),
  }));

  return (
    <section style={{ padding: '96px 0', background: '#ffffff' }}>
      <div className="wrap">
        <h2 style={{
          fontSize: 'clamp(28px, 4vw, 44px)',
          fontWeight: 800,
          color: '#1F2328',
          textAlign: 'center',
          marginBottom: '56px',
          letterSpacing: '-0.02em',
        }}>
          {t('faq.title')}
        </h2>

        <div style={{ maxWidth: '760px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                style={{
                  background: '#fff',
                  border: `1.5px solid ${isOpen ? '#5625F2' : '#E5E7EB'}`,
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: isOpen ? '0 4px 20px rgba(86,37,242,0.08)' : 'none',
                  transition: 'border-color 0.2s, box-shadow 0.2s',
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '20px 24px',
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                    gap: '16px',
                  }}
                >
                  <span style={{
                    fontSize: '16px',
                    fontWeight: 600,
                    color: isOpen ? '#5625F2' : '#1F2328',
                    lineHeight: 1.4,
                    transition: 'color 0.2s',
                  }}>
                    {item.question}
                  </span>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: isOpen ? 'rgba(86,37,242,0.08)' : '#F3F4F6',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    transition: 'background 0.2s',
                  }}>
                    <svg
                      width="16" height="16" viewBox="0 0 24 24" fill="none"
                      style={{ transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.25s ease' }}
                    >
                      <path d="M6 9l6 6 6-6" stroke={isOpen ? '#5625F2' : '#6B7280'} strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                </button>

                <div style={{
                  display: 'grid',
                  gridTemplateRows: isOpen ? '1fr' : '0fr',
                  transition: 'grid-template-rows 0.25s ease',
                }}>
                  <div style={{ overflow: 'hidden' }}>
                    <p style={{
                      padding: '0 24px 20px',
                      fontSize: '15px',
                      color: '#6B7280',
                      lineHeight: 1.7,
                      margin: 0,
                    }}>
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
