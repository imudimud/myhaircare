import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Globe } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

interface HeaderProps {
  onMenuClick: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  const { t, toggleLanguage } = useTranslation();

  return (
    <header className="sticky top-0 z-30 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left side - Menu button (mobile) and Logo */}
          <div className="flex items-center">
            <button
              type="button"
              className="lg:hidden -ml-2 p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              onClick={onMenuClick}
              aria-label={t('nav.menu')}
            >
              <Menu size={24} />
            </button>
            
            <Link 
              to="/" 
              className="ml-2 lg:ml-0 flex items-center"
              aria-label={t('nav.home')}
            >
              <span className="text-xl font-bold text-blue-600">
                ESTENOVE
                <span className="text-black" aria-hidden="true">®</span>
              </span>
            </Link>
          </div>

          {/* Right side - Language Toggle */}
          <div className="flex items-center">
            <button
              onClick={toggleLanguage}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              aria-label={t('buttons.language')}
            >
              <Globe size={20} />
              <span className="ml-2 text-sm font-medium">
                {t('buttons.language')}
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}