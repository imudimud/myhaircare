import { useTranslation as useI18nTranslation } from 'react-i18next';
import { useCallback } from 'react';
import { SUPPORTED_LANGUAGES, type SupportedLanguage, type Namespace, loadNamespace } from '../i18n';

interface UseTranslationReturn {
  t: (key: string, options?: any) => string;
  i18n: {
    language: SupportedLanguage;
    changeLanguage: (lng: string) => Promise<string>;
    loadNamespaces: (ns: Namespace | Namespace[]) => Promise<void>;
  };
  toggleLanguage: () => Promise<void>;
  isNamespaceLoaded: (ns: Namespace) => boolean;
  loadNamespace: (ns: Namespace) => Promise<void>;
}

export function useTranslation(ns: Namespace = 'common'): UseTranslationReturn {
  const { t, i18n } = useI18nTranslation(ns);

  const toggleLanguage = useCallback(async () => {
    try {
      const currentLang = i18n.language as SupportedLanguage;
      if (!SUPPORTED_LANGUAGES.includes(currentLang)) {
        console.warn(`Current language ${currentLang} is not in supported languages. Defaulting to 'en'`);
        await i18n.changeLanguage('en');
        return;
      }

      const nextLang = currentLang === 'en' ? 'fr' : 'en';
      
      // Pre-load namespaces for the next language
      const activeNamespaces = i18n.reportNamespaces?.getUsedNamespaces() || [];
      await Promise.all(
        activeNamespaces.map(async (namespace) => {
          if (!i18n.hasLoadedNamespace(namespace, nextLang)) {
            await loadNamespace(namespace as Namespace, nextLang);
          }
        })
      );

      await i18n.changeLanguage(nextLang);
    } catch (error) {
      console.error('Error switching language:', error);
      // Fallback to English if there's an error
      if (i18n.language !== 'en') {
        await i18n.changeLanguage('en');
      }
    }
  }, [i18n]);

  const isNamespaceLoaded = useCallback((ns: Namespace): boolean => {
    try {
      return i18n.hasLoadedNamespace(ns);
    } catch (error) {
      console.error(`Error checking namespace ${ns}:`, error);
      return false;
    }
  }, [i18n]);

  const loadNamespaceWrapper = useCallback(async (ns: Namespace): Promise<void> => {
    try {
      if (!isNamespaceLoaded(ns)) {
        await loadNamespace(ns);
      }
    } catch (error) {
      console.error(`Error loading namespace ${ns}:`, error);
      throw error; // Re-throw to let the component handle the error
    }
  }, [isNamespaceLoaded]);

  return {
    t,
    i18n: {
      language: i18n.language as SupportedLanguage,
      changeLanguage: i18n.changeLanguage,
      loadNamespaces: i18n.loadNamespaces,
    },
    toggleLanguage,
    isNamespaceLoaded,
    loadNamespace: loadNamespaceWrapper,
  };
}
