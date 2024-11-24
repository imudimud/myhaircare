import React from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import { SUPPORTED_LANGUAGES } from '../../i18n';
import { SEOHelmet } from '../../components/SEOHelmet';

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
    <>
      <SEOHelmet
        title="Translation Test Page"
        description="Development page for testing translations"
        noindex={true}
      />
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
                <span className="font-medium">Home:</span> {t('home.title')}
              </p>
              <p>
                <span className="font-medium">About:</span> {t('about.title')}
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Load Namespace Test</h2>
            <button
              onClick={handleLoadNamespace}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Load About Namespace
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
