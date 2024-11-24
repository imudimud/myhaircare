import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from '../hooks/useTranslation';
import { useLocation } from 'react-router-dom';
import { SUPPORTED_LANGUAGES } from '../i18n';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  article?: boolean;
  noindex?: boolean;
  canonicalUrl?: string;
  schema?: object;
}

export default function SEO({
  title,
  description,
  keywords,
  image,
  article = false,
  noindex = false,
  canonicalUrl,
  schema,
}: SEOProps) {
  const { t, currentLanguage } = useTranslation();
  const location = useLocation();
  const siteUrl = process.env.REACT_APP_SITE_URL || 'https://myhaircare.com';

  const seo = {
    title: title || t('meta.defaultTitle'),
    description: description || t('meta.defaultDescription'),
    keywords: keywords || t('meta.defaultKeywords'),
    image: image || `${siteUrl}/images/default-og-image.jpg`,
    url: `${siteUrl}${location.pathname}`,
  };

  // Generate alternate language URLs
  const alternateUrls = SUPPORTED_LANGUAGES.map(lang => ({
    lang,
    url: `${siteUrl}/${lang}${location.pathname}`,
  }));

  // Generate structured data
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': article ? 'Article' : 'WebPage',
    url: seo.url,
    headline: seo.title,
    image: seo.image,
    description: seo.description,
    ...schema,
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <html lang={currentLanguage} />
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      {keywords && <meta name="keywords" content={seo.keywords} />}
      {noindex && <meta name="robots" content="noindex,nofollow" />}
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl || seo.url} />

      {/* Open Graph */}
      <meta property="og:type" content={article ? 'article' : 'website'} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:site_name" content={t('meta.siteName')} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />

      {/* Alternate Language URLs */}
      {alternateUrls.map(({ lang, url }) => (
        <link
          key={lang}
          rel="alternate"
          hrefLang={lang}
          href={url}
        />
      ))}

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
}
