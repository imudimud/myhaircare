import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { z } from 'zod';

// Define supported languages
export const SUPPORTED_LANGUAGES = ['en', 'fr'] as const;
export type SupportedLanguage = typeof SUPPORTED_LANGUAGES[number];

// Zod schema for language validation
export const LanguageSchema = z.enum(SUPPORTED_LANGUAGES);

// Namespace schema
export const NamespaceSchema = z.enum([
  // Layout Components
  'components/layout/navbar',
  'components/layout/footer',
  'components/layout/header',
  
  // UI Components
  'components/ui/common',
  'components/ui/buttons',
  'components/ui/forms',
  'components/ui/modals',
  
  // Feature Components
  'components/testimonials',
  'components/gallery',
  'components/pricing',
  'components/faq',
  'components/contact',
  'components/results',
  
  // Main Pages
  'pages/home',
  'pages/about',
  'pages/education',
  'pages/medical',
  
  // Procedure Pages
  'pages/procedures/index',
  'pages/procedures/sapphire-fue',
  'pages/procedures/dhi',
  'pages/procedures/stem-cell',
  
  // Patient Pages
  'pages/patient/index',
  'pages/patient/before-after',
  'pages/patient/testimonials',
  
  // Consultation Pages
  'pages/consultation/index',
  'pages/consultation/booking',
  
  // Common
  'common',
  'seo',
  'meta'
]);

export type Namespace = z.infer<typeof NamespaceSchema>;

// i18next configuration schema
export const I18nConfigSchema = z.object({
  lng: LanguageSchema,
  fallbackLng: LanguageSchema,
  defaultNS: z.literal('common'),
  ns: z.array(NamespaceSchema),
});

// Default configuration
const defaultConfig = {
  lng: 'en' as const,
  fallbackLng: 'en' as const,
  defaultNS: 'common' as const,
  ns: ['common'] as const,
  backend: {
    loadPath: '/locales/{{lng}}/{{ns}}.json',
  },
  detection: {
    order: ['querystring', 'cookie', 'localStorage', 'navigator'],
    lookupQuerystring: 'lng',
    lookupCookie: 'i18next',
    lookupLocalStorage: 'i18nextLng',
    caches: ['localStorage', 'cookie'],
  },
  interpolation: {
    escapeValue: false,
  },
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init(defaultConfig);

// Type-safe namespace loading
export async function loadNamespace(ns: Namespace, lng?: SupportedLanguage): Promise<void> {
  try {
    await i18n.loadNamespaces(ns);
  } catch (error) {
    console.error(`Error loading namespace ${ns}:`, error);
    throw error;
  }
}

// Type-safe language switching
export async function changeLanguage(lng: SupportedLanguage): Promise<void> {
  try {
    await i18n.changeLanguage(lng);
  } catch (error) {
    console.error(`Error changing language to ${lng}:`, error);
    throw error;
  }
}

export default i18n;
