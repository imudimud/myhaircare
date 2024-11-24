import { useTranslation as useI18nTranslation } from 'react-i18next';
import { useCallback } from 'react';
import { type SupportedLanguage, type Namespace, SUPPORTED_LANGUAGES } from '../i18n';

interface UseTranslationReturn {
  t: (key: string, options?: any) => string;
  currentLanguage: SupportedLanguage;
  changeLanguage: (lng: SupportedLanguage) => Promise<boolean>;
  loadNamespace: (ns: Namespace) => Promise<boolean>;
}

export function useTranslation(ns: string = 'common'): UseTranslationReturn {
  const { t, i18n } = useI18nTranslation(ns);

  const changeLanguage = useCallback(async (lng: SupportedLanguage) => {
    try {
      await i18n.changeLanguage(lng);
      return true;
    } catch (error) {
      console.error('Failed to change language:', error);
      return false;
    }
  }, [i18n]);

  const loadNamespaceCallback = useCallback(async (namespace: Namespace) => {
    try {
      await i18n.loadNamespaces(namespace);
      return true;
    } catch (error) {
      console.error('Failed to load namespace:', error);
      return false;
    }
  }, [i18n]);

  const currentLanguage = SUPPORTED_LANGUAGES.includes(i18n.language as SupportedLanguage)
    ? (i18n.language as SupportedLanguage)
    : 'en';

  return {
    t,
    currentLanguage,
    changeLanguage,
    loadNamespace: loadNamespaceCallback,
  };
}
