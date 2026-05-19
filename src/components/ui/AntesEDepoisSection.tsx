import React from 'react';
import { useTranslation } from "@/i18n/useTranslation";

export function AntesEDepoisSection() {
  const { t } = useTranslation();

  const COMPARISON_DATA = [
    {
      bad: t('antesDepois.items.0.bad'),
      good: t('antesDepois.items.0.good'),
    },
    {
      bad: t('antesDepois.items.1.bad'),
      good: t('antesDepois.items.1.bad'), // wait, no! Should be good
    },
    {
      bad: t('antesDepois.items.2.bad'),
      good: t('antesDepois.items.2.good'),
    },
    {
      bad: t('antesDepois.items.3.bad'),
      good: t('antesDepois.items.3.good'),
    }
  ];

  // Fixing the items.1.good mapping right here.
  COMPARISON_DATA[1].good = t('antesDepois.items.1.good') as string;

  return (
    <section style={{ background: '#1F2328', paddingBottom: '120px' }}>
      <div className="wrap">
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px', maxWidth: '800px', margin: '0 auto 64px auto' }}>
          <p style={{
            fontSize: '13px',
            fontWeight: 700,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: '#9CA3AF',
            marginBottom: '16px'
          }}>
            {t('antesDepois.subtitle')}
          </p>
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 44px)',
            fontWeight: 800,
            color: '#ffffff',
            letterSpacing: '-0.02em',
            lineHeight: 1.2,
            marginBottom: '24px'
          }}>
            {t('antesDepois.title')}
          </h2>
          <p style={{
            fontSize: '18px',
            color: 'rgba(255,255,255,0.6)',
            lineHeight: 1.6,
          }}>
            {t('antesDepois.description1')}<span style={{ color: '#fff', fontWeight: 500 }}>{t('antesDepois.descriptionHighlight1')}</span>{t('antesDepois.description2')}<span style={{ color: '#fff', fontWeight: 500 }}>{t('antesDepois.descriptionHighlight2')}</span>{t('antesDepois.description3')}
          </p>
        </div>

        {/* Comparison List */}
        <div 
          style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '1000px', margin: '0 auto' }}
          className="md:gap-4"
        >
          {COMPARISON_DATA.map((item, index) => (
            <div 
              key={index} 
              className="flex flex-col md:flex-row items-center gap-2.5 md:gap-6"
            >
              
              {/* Bad Card (Left) */}
              <div style={{
                flex: 1,
                width: '100%',
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: '12px',
                padding: '24px',
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                transition: 'background 0.2s'
              }}>
                <div style={{ flexShrink: 0, color: '#6B7280', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </div>
                <p style={{ margin: 0, fontSize: '15px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.5, fontWeight: 400 }}>
                  {item.bad}
                </p>
              </div>

              {/* Arrow */}
              <div style={{ color: 'rgba(255,255,255,0.3)', flexShrink: 0 }} className="hidden md:block rotate-90 md:rotate-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>

              {/* Good Card (Right) */}
              <div style={{
                flex: 1,
                width: '100%',
                background: 'rgba(86,37,242,0.03)',
                border: '1px solid rgba(86,37,242,0.4)',
                borderRadius: '12px',
                padding: '24px',
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                boxShadow: '0 4px 20px rgba(86,37,242,0.05)',
                transition: 'border-color 0.2s, box-shadow 0.2s'
              }}>
                <div style={{ flexShrink: 0, color: '#7C5CF6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <p style={{ margin: 0, fontSize: '15px', color: '#ffffff', lineHeight: 1.5, fontWeight: 500 }}>
                  {item.good}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
