import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from '../hooks/useTranslation';
import { useLocation } from 'react-router-dom';
import { SUPPORTED_LANGUAGES } from '../i18n';
import { generateHealthFacilitySchema, generateBreadcrumbSchema } from '../utils/schemaMarkup';

interface SEOHelmetProps {
  titleKey?: string;
  descriptionKey?: string;
  keywordsKey?: string;
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  schema?: Record<string, any>;
  noindex?: boolean;
  breadcrumbs?: { name: string; url: string }[];
  structuredData?: Record<string, any>[];
}

export function SEOHelmet({
  titleKey,
  descriptionKey,
  keywordsKey,
  title: directTitle,
  description: directDescription,
  keywords: directKeywords,
  image,
  schema,
  noindex = false,
  breadcrumbs,
  structuredData = [],
}: SEOHelmetProps) {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://myhaircare.com';

  const title = titleKey ? t(titleKey) : directTitle;
  const description = descriptionKey ? t(descriptionKey) : directDescription;
  const keywords = keywordsKey ? t(keywordsKey) : directKeywords;

  if (!title || !description) {
    console.warn('SEOHelmet: title and description are required. Provide either direct values or translation keys.');
    return null;
  }

  const pageUrl = `${siteUrl}${location.pathname}`;
  const imageUrl = image ? `${siteUrl}${image}` : `${siteUrl}/images/default-og-image.jpg`;

  // Generate language alternates
  const alternates = SUPPORTED_LANGUAGES.map(lang => ({
    lang,
    url: `${siteUrl}/${lang}${location.pathname}`,
  }));

  // Base schema
  const baseSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description,
    url: pageUrl,
    image: imageUrl,
  };

  // Combine all structured data
  const allStructuredData = [
    baseSchema,
    ...(schema ? [schema] : []),
    ...(breadcrumbs ? [generateBreadcrumbSchema(breadcrumbs)] : []),
    ...structuredData,
  ];

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {noindex && <meta name="robots" content="noindex" />}

      {/* Open Graph Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:locale" content={i18n.language} />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {/* Language Alternates */}
      {alternates.map(({ lang, url }) => (
        <link key={lang} rel="alternate" hrefLang={lang} href={url} />
      ))}
      <link rel="canonical" href={pageUrl} />

      {/* Structured Data */}
      {allStructuredData.map((data, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(data)}
        </script>
      ))}
    </Helmet>
  );
}
