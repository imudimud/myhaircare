import { SUPPORTED_LANGUAGES } from '../i18n';

interface Route {
  path: string;
  priority: number;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
}

const routes: Route[] = [
  { path: '/', priority: 1.0, changefreq: 'weekly' },
  { path: '/about', priority: 0.8, changefreq: 'monthly' },
  { path: '/procedures', priority: 0.9, changefreq: 'weekly' },
  { path: '/contact', priority: 0.7, changefreq: 'monthly' },
];

/**
 * Generates XML sitemap content
 */
export const generateSitemap = (baseUrl: string): string => {
  const today = new Date().toISOString();
  
  const urlSet = routes.flatMap(route => 
    SUPPORTED_LANGUAGES.map(lang => {
      const langPath = lang === 'en' ? '' : `/${lang}`;
      const fullPath = `${baseUrl}${langPath}${route.path}`;
      
      const alternates = SUPPORTED_LANGUAGES
        .map(altLang => {
          const altPath = altLang === 'en' ? '' : `/${altLang}`;
          return `
            <xhtml:link 
              rel="alternate" 
              hreflang="${altLang}"
              href="${baseUrl}${altPath}${route.path}"
            />`;
        })
        .join('');

      return `
        <url>
          <loc>${fullPath}</loc>
          <lastmod>${today}</lastmod>
          <changefreq>${route.changefreq}</changefreq>
          <priority>${route.priority}</priority>
          ${alternates}
        </url>`;
    })
  ).join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset 
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xhtml="http://www.w3.org/1999/xhtml"
    >
      ${urlSet}
    </urlset>`;
};

/**
 * Generates robots.txt content
 */
export const generateRobotsTxt = (baseUrl: string): string => {
  return `User-agent: *
Allow: /

# Sitemaps
Sitemap: ${baseUrl}/sitemap.xml

# Language specific sitemaps
${SUPPORTED_LANGUAGES.map(lang => 
  `Sitemap: ${baseUrl}/sitemap_${lang}.xml`
).join('\n')}

# Optimize crawling
Crawl-delay: 10

# Block certain paths
Disallow: /api/
Disallow: /admin/
Disallow: /private/
`;
};

/**
 * Generates language-specific sitemap content
 */
export const generateLanguageSitemap = (baseUrl: string, language: string): string => {
  const today = new Date().toISOString();
  
  const urlSet = routes
    .map(route => {
      const langPath = language === 'en' ? '' : `/${language}`;
      const fullPath = `${baseUrl}${langPath}${route.path}`;
      
      return `
        <url>
          <loc>${fullPath}</loc>
          <lastmod>${today}</lastmod>
          <changefreq>${route.changefreq}</changefreq>
          <priority>${route.priority}</priority>
        </url>`;
    })
    .join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urlSet}
    </urlset>`;
};
