import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { loadTranslations, preloadTranslations } from '../utils/translationLoader';

// Initialize i18next
i18next
  .use(initReactI18next)
  .init({
    lng: 'en', // Default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources: {},
  });

interface TranslationContextType {
  t: (key: string, options?: any) => string;
  changeLanguage: (lang: string) => Promise<void>;
  currentLanguage: string;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export function TranslationProvider({ children }: { children: React.ReactNode }) {
  const [currentLanguage, setCurrentLanguage] = useState(i18next.language);
  const [isLoading, setIsLoading] = useState(true);

  // Load initial translations
  useEffect(() => {
    const loadInitialTranslations = async () => {
      await preloadTranslations('en');
      setIsLoading(false);
    };
    loadInitialTranslations();
  }, []);

  const changeLanguage = useCallback(async (lang: 'en' | 'tr') => {
    try {
      setIsLoading(true);
      await preloadTranslations(lang);
      await i18next.changeLanguage(lang);
      setCurrentLanguage(lang);
    } catch (error) {
      console.error('Failed to change language:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const t = useCallback((key: string, options?: any) => {
    return i18next.t(key, options);
  }, []);

  const value = {
    t,
    changeLanguage,
    currentLanguage,
  };

  if (isLoading) {
    return <div>Loading translations...</div>;
  }

  return (
    <TranslationContext.Provider value={value}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
}
