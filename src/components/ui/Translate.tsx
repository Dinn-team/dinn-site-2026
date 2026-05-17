import { useTranslation } from '@/i18n/useTranslation';

export function Translate({ i18nKey, fallback }: { i18nKey: string; fallback?: string }) {
  const { t } = useTranslation();
  return <>{t(i18nKey) || fallback}</>;
}

export function TranslatedDate({ dateString }: { dateString: string }) {
  const { lang } = useTranslation();
  
  const localeMap: Record<string, string> = {
    pt: 'pt-BR',
    en: 'en-US',
    es: 'es-ES'
  };

  const formattedDate = new Date(dateString).toLocaleDateString(localeMap[lang] || 'pt-BR', { 
    day: 'numeric', 
    month: 'long', 
    year: 'numeric' 
  });

  return <>{formattedDate}</>;
}
