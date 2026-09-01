import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export function useSEO() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const title = t('seo.title');
    const description = t('seo.description');
    const keywords = t('seo.keywords');

    // Update title
    document.title = title;

    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    }

    // Update meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords);
    }

    // Update html lang
    document.documentElement.lang = i18n.language;
  }, [t, i18n.language]);
}