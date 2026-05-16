import { useTranslation } from "@/i18n/useTranslation";

export default function Feedback() {
  const { t } = useTranslation();

  return (
    <>
      <h1 style={{
        fontSize: 'clamp(32px, 5vw, 48px)',
        fontWeight: 800,
        color: '#1F2328',
        marginBottom: '40px',
        letterSpacing: '-0.02em',
        textAlign: 'center'
      }}>
        {t('feedback.title')}
      </h1>
      <div style={{ width: '100%', height: '500px' }} data-fillout-id="i5gC6qgurKus" data-fillout-embed-type="standard" data-fillout-inherit-parameters data-fillout-dynamic-resize></div>
    </>
  );
}
