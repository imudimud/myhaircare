import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

// Define supported languages
export const SUPPORTED_LANGUAGES = ['en', 'fr'] as const;
export type SupportedLanguage = typeof SUPPORTED_LANGUAGES[number];

// Define namespaces
export const NAMESPACES = [
  'common',
  'translation',
  'components',
  'pages'
] as const;
export type Namespace = typeof NAMESPACES[number];

// i18n configuration
i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    ns: NAMESPACES,
    defaultNS: 'common',
    fallbackNS: 'translation',
    
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },

    interpolation: {
      escapeValue: false,
    },

    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },

    react: {
      useSuspense: false
    }
  });

// Type-safe namespace loading
export async function loadNamespace(ns: Namespace): Promise<boolean> {
  try {
    await i18n.loadNamespaces(ns);
    return true;
  } catch (error) {
    console.error(`Failed to load namespace ${ns}:`, error);
    return false;
  }
}

// Type-safe language switching
export async function changeLanguage(lng: SupportedLanguage): Promise<boolean> {
  try {
    await i18n.changeLanguage(lng);
    return true;
  } catch (error) {
    console.error(`Failed to change language to ${lng}:`, error);
    return false;
  }
}

export default i18n;
