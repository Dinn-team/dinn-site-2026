import React from 'react';
import { useTranslation } from '@/i18n/useTranslation';

export default function PrivacyPolicy() {
  const { t } = useTranslation();

  const title = t('privacy.title') as string;
  const summaryTitle = t('privacy.summaryTitle') as string;
  const summary = t('privacy.summary') as string[];
  const sections = t('privacy.sections') as any[];

  return (
    <div style={{ color: '#6B7280', fontSize: '16px', lineHeight: 1.8 }}>
      <h1 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 800, color: '#1F2328', marginBottom: '40px', letterSpacing: '-0.02em' }}>
        {title}
      </h1>

      <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#1F2328', marginTop: '48px', marginBottom: '16px' }}>
        {summaryTitle}
      </h2>
      <ul style={{ listStylePosition: 'inside', paddingLeft: 0, marginBottom: '48px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {summary && summary.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <hr style={{ border: 0, height: '1px', background: '#E5E7EB', margin: '48px 0' }} />

      {sections && sections.map((section, index) => (
        <div key={index}>
          <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#1F2328', marginTop: '48px', marginBottom: '16px' }}>
            {section.title}
          </h2>
          
          {section.content && section.content.map((p: string, pIndex: number) => (
            <p key={pIndex} style={{ marginBottom: '16px' }}>
              {p}
            </p>
          ))}

          {section.list && (
            <ul style={{ listStyleType: 'disc', paddingLeft: '24px', marginBottom: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {section.list.map((item: string, liIndex: number) => (
                <li key={liIndex}>{item}</li>
              ))}
            </ul>
          )}

          {section.customList && (
            <ul style={{ listStyleType: 'none', paddingLeft: 0, marginBottom: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {section.customList.map((item: string, customIndex: number) => (
                <li key={customIndex} dangerouslySetInnerHTML={{ __html: item }} />
              ))}
            </ul>
          )}

          {section.footer && (
            <p style={{ marginBottom: '16px' }} dangerouslySetInnerHTML={{ __html: section.footer }} />
          )}
        </div>
      ))}
    </div>
  );
}
