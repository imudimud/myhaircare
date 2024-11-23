import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Header() {
  const { t, i18n } = useTranslation();

  const scrollToContact = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  };

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'fr' : 'en';
    i18n.changeLanguage(newLang);
    // Save language preference
    localStorage.setItem('i18nextLng', newLang);
  };

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm" role="banner">
      <div className="mx-auto max-w-7xl px-4 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center gap-2"
            aria-label="Este Nove Home"
          >
            <span className="text-2xl font-bold text-blue-600">
              ESTENOVE
              <span className="text-black" aria-hidden="true">®</span>
            </span>
          </Link>

          <nav className="flex items-center gap-4" role="navigation" aria-label="Header navigation">
            <a
              href="https://wa.me/902125555555"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 text-green-600 hover:text-green-700"
              aria-label="Contact us on WhatsApp"
            >
              <MessageCircle size={20} aria-hidden="true" />
              <span>WhatsApp</span>
            </a>
            <button
              onClick={scrollToContact}
              className="rounded-full bg-gradient-to-r from-blue-900 to-blue-800 px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-white shadow-sm hover:from-blue-800 hover:to-blue-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2"
              aria-label="Book a free consultation"
            >
              {t('buttons.bookConsultation')}
            </button>
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-2 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors"
              aria-label={t('buttons.language')}
            >
              <Globe className="w-5 h-5" />
              <span className="text-sm font-medium">{t('buttons.language')}</span>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}