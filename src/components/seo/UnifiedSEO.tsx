import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

interface UnifiedSEOProps {
  // Basic SEO props
  title?: string;
  description?: string;
  keywords?: string[];
  path?: string;
  
  // Enhanced SEO props
  canonicalUrl?: string;
  ogImage?: string;
  structuredData?: object;
}

export default function UnifiedSEO({ 
  title, 
  description, 
  keywords = [],
  path = '',
  canonicalUrl,
  ogImage = '/images/og-default.jpg',
  structuredData
}: UnifiedSEOProps) {
  const { i18n, t } = useTranslation();
  const currentLanguage = i18n.language;
  const isDefault = currentLanguage === 'en';

  // Base configuration
  const baseUrl = 'https://www.estenove.com';
  const currentUrl = canonicalUrl ? `${baseUrl}${canonicalUrl}` : `${baseUrl}${path}`;
  const alternateUrl = `${baseUrl}${currentLanguage === 'en' ? '/fr' : ''}${path}`;

  // Default values from translations
  const defaultTitle = t('seo.defaultTitle');
  const defaultDescription = t('seo.defaultDescription');
  const defaultKeywords = t('seo.defaultKeywords', { returnObjects: true }) as string[];

  // Final values
  const pageTitle = title ? `${title} | ${defaultTitle}` : defaultTitle;
  const pageDescription = description || defaultDescription;
  const pageKeywords = [...(keywords || []), ...defaultKeywords];

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={pageKeywords.join(', ')} />
      <link rel="canonical" href={currentUrl} />

      {/* Language Alternates */}
      <link 
        rel="alternate" 
        href={alternateUrl}
        hrefLang={isDefault ? 'fr' : 'en'}
      />
      <link 
        rel="alternate" 
        href={currentUrl}
        hrefLang={currentLanguage}
      />
      <link 
        rel="alternate" 
        href={currentUrl}
        hrefLang="x-default"
      />

      {/* Open Graph Tags */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:url" content={currentUrl} />
      {ogImage && <meta property="og:image" content={`${baseUrl}${ogImage}`} />}
      <meta property="og:type" content="website" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      {ogImage && <meta name="twitter:image" content={`${baseUrl}${ogImage}`} />}

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
}
