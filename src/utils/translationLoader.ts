import i18next from 'i18next';

interface TranslationNamespaces {
  common: any;
  home: any;
  procedures: any;
  contact: any;
}

type LanguageCode = 'en' | 'tr';

const loadNamespace = async (lang: LanguageCode, namespace: keyof TranslationNamespaces) => {
  try {
    const module = await import(`../locales/${lang}/${namespace}.json`);
    return { [namespace]: module.default };
  } catch (error) {
    console.error(`Failed to load ${namespace} translations for ${lang}:`, error);
    return { [namespace]: {} };
  }
};

export const loadTranslations = async (lang: LanguageCode): Promise<Partial<TranslationNamespaces>> => {
  const namespaces: (keyof TranslationNamespaces)[] = [
    'common',
    'home',
    'procedures',
    'contact'
  ];

  const translations = await Promise.all(
    namespaces.map(namespace => loadNamespace(lang, namespace))
  );

  return translations.reduce((acc, curr) => ({ ...acc, ...curr }), {});
};

export const preloadTranslations = async (lang: LanguageCode): Promise<void> => {
  try {
    const translations = await loadTranslations(lang);
    Object.entries(translations).forEach(([namespace, content]) => {
      i18next.addResourceBundle(lang, namespace, content, true, true);
    });
  } catch (error) {
    console.error('Failed to preload translations:', error);
  }
};
