import i18next from 'i18next';
import { Namespace, SupportedLanguage } from '../i18n';

interface LoadTranslationOptions {
  namespace: Namespace;
  language?: SupportedLanguage;
  fallback?: boolean;
}

const loadedNamespaces = new Set<string>();

/**
 * Dynamically loads translation namespaces
 */
export const loadTranslation = async ({ 
  namespace, 
  language, 
  fallback = true 
}: LoadTranslationOptions): Promise<void> => {
  try {
    const key = `${language || i18next.language}:${namespace}`;
    
    // Skip if already loaded
    if (loadedNamespaces.has(key)) {
      return;
    }

    // Load the namespace
    await i18next.loadNamespaces(namespace);
    loadedNamespaces.add(key);

    // Load fallback language if needed
    if (fallback && language !== 'en') {
      await loadTranslation({
        namespace,
        language: 'en',
        fallback: false
      });
    }
  } catch (error) {
    console.error(`Failed to load translation namespace: ${namespace}`, error);
    // Attempt to load English as fallback
    if (language !== 'en' && fallback) {
      await loadTranslation({
        namespace,
        language: 'en',
        fallback: false
      });
    }
  }
};

/**
 * Preloads translations for a specific route
 */
export const preloadRouteTranslations = async (
  route: string,
  language?: SupportedLanguage
): Promise<void> => {
  // Map routes to their required namespaces
  const routeNamespaces: Record<string, Namespace[]> = {
    '/': ['home', 'common'],
    '/about': ['about', 'common'],
    '/procedures': ['procedures', 'common'],
    '/contact': ['contact', 'common'],
  };

  const namespaces = routeNamespaces[route] || ['common'];
  
  await Promise.all(
    namespaces.map(namespace =>
      loadTranslation({ namespace, language })
    )
  );
};

/**
 * Checks if a namespace is already loaded
 */
export const isNamespaceLoaded = (
  namespace: Namespace,
  language?: SupportedLanguage
): boolean => {
  const key = `${language || i18next.language}:${namespace}`;
  return loadedNamespaces.has(key);
};

/**
 * Clears the namespace cache
 */
export const clearNamespaceCache = (): void => {
  loadedNamespaces.clear();
};
