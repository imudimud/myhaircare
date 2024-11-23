import i18n from '../i18n';

export const loadNamespace = async (namespace: string) => {
  if (!i18n.hasLoadedNamespace(namespace)) {
    await i18n.loadNamespaces(namespace);
  }
};

export const preloadTranslations = async (namespaces: string[]) => {
  await Promise.all(namespaces.map(ns => loadNamespace(ns)));
};

// Helper function to get the current language
export const getCurrentLanguage = () => i18n.language;

// Helper function to get translation with fallback
export const getTranslation = (key: string, defaultValue: string = '') => {
  return i18n.exists(key) ? i18n.t(key) : defaultValue;
};

// Helper function to check if a namespace is loaded
export const isNamespaceLoaded = (namespace: string) => {
  return i18n.hasLoadedNamespace(namespace);
};
