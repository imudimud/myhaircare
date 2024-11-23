import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  path?: string;
  structuredData?: Record<string, any>;
  ogImage?: string;
}

export default function SEO({ 
  title, 
  description, 
  keywords = [],
  path = '',
  structuredData,
  ogImage
}: SEOProps) {
  const { i18n, t } = useTranslation();
  const currentLanguage = i18n.language;
  const isDefault = currentLanguage === 'en';

  // Base URL should be your production domain
  const baseUrl = 'https://www.estenove.com';
  const currentUrl = `${baseUrl}${path}`;
  const alternateUrl = `${baseUrl}${currentLanguage === 'en' ? '/fr' : ''}${path}`;

  const defaultTitle = t('seo.defaultTitle');
  const defaultDescription = t('seo.defaultDescription');
  const defaultKeywords = t('seo.defaultKeywords', { returnObjects: true }) as string[];

  const pageTitle = title ? `${title} | ${defaultTitle}` : defaultTitle;
  const pageDescription = description || defaultDescription;
  const pageKeywords = [...defaultKeywords, ...keywords].join(', ');

  return (
    <Helmet>
      {/* Basic meta tags */}
      <html lang={currentLanguage} />
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={pageKeywords} />

      {/* Open Graph tags */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={currentLanguage === 'en' ? 'en_US' : 'fr_FR'} />
      {ogImage && <meta property="og:image" content={`${baseUrl}${ogImage}`} />}

      {/* Alternate language URLs */}
      <link rel="canonical" href={currentUrl} />
      <link 
        rel="alternate" 
        hrefLang={currentLanguage === 'en' ? 'fr' : 'en'} 
        href={alternateUrl}
      />
      <link 
        rel="alternate" 
        href={currentUrl} 
        hrefLang={currentLanguage} 
      />
      <link 
        rel="alternate" 
        href={baseUrl} 
        hrefLang="x-default" 
      />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
}
