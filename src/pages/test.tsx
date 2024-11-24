import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { SUPPORTED_LANGUAGES } from '../i18n';

export default function TestPage() {
  const { t, currentLanguage, changeLanguage, loadNamespace } = useTranslation();

  const handleLanguageChange = async (lang: typeof SUPPORTED_LANGUAGES[number]) => {
    const success = await changeLanguage(lang);
    if (!success) {
      console.error('Failed to change language');
    }
  };

  const handleLoadNamespace = async () => {
    const success = await loadNamespace('about');
    if (!success) {
      console.error('Failed to load namespace');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold mb-6">{t('test.title')}</h1>
        
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Current Language: {currentLanguage}</h2>
          <div className="flex gap-4">
            {SUPPORTED_LANGUAGES.map((lang) => (
              <button
                key={lang}
                onClick={() => handleLanguageChange(lang)}
                className={`px-4 py-2 rounded-md ${
                  currentLanguage === lang
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 hover:bg-gray-300'
                }`}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Test Translations</h2>
          <div className="space-y-2">
            <p>
              <span className="font-medium">Common:</span> {t('common.welcome')}
            </p>
            <p>
              <span className="font-medium">Navigation:</span> {t('nav.home')}
            </p>
            <button
              onClick={handleLoadNamespace}
              className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
            >
              Load 'about' namespace
            </button>
          </div>
        </div>

        <div className="prose">
          <h2>Instructions</h2>
          <ul>
            <li>Click the language buttons above to switch between languages</li>
            <li>The translations should update immediately</li>
            <li>Try loading additional namespaces using the button above</li>
            <li>Check the console for any errors during language changes</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
