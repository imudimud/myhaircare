import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from '../../hooks/useTranslation';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  ChevronDown, 
  ChevronRight,
  Home,
  Scissors,
  Users,
  Heart,
  Book,
  Phone,
  MessageCircle,
  Info
} from 'lucide-react';

interface NavItem {
  key: string;
  path: string;
  icon: React.ElementType;
  children?: NavItem[];
}

const navItems: NavItem[] = [
  { 
    key: 'home',
    path: '/',
    icon: Home
  },
  {
    key: 'procedures',
    path: '/procedures',
    icon: Scissors,
    children: [
      { key: 'sapphire', path: '/procedures/sapphire-fue', icon: Scissors },
      { key: 'stemCell', path: '/procedures/stem-cell', icon: Scissors },
      { key: 'dhi', path: '/procedures/dhi', icon: Scissors }
    ]
  },
  {
    key: 'patient',
    path: '/patient',
    icon: Users,
    children: [
      { key: 'beforeAfter', path: '/patient/before-after', icon: Users },
      { key: 'testimonials', path: '/patient/testimonials', icon: Users }
    ]
  },
  {
    key: 'about',
    path: '/about',
    icon: Info,
    children: [
      { key: 'main', path: '/about', icon: Info },
      { key: 'why', path: '/about/why', icon: Info },
      { key: 'trust', path: '/about/trust', icon: Info }
    ]
  },
  {
    key: 'medical',
    path: '/medical',
    icon: Heart,
    children: [
      { key: 'guidelines', path: '/medical/guidelines', icon: Heart },
      { key: 'safety', path: '/medical/safety', icon: Heart },
      { key: 'research', path: '/medical/research', icon: Heart }
    ]
  },
  { key: 'education', path: '/education', icon: Book },
  { key: 'contact', path: '/contact', icon: Phone }
];

export default function Navbar() {
  const { t } = useTranslation();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === path;
    return location.pathname.startsWith(path);
  };

  const renderNavItem = (item: NavItem, isMobile: boolean = false) => {
    const hasChildren = item.children && item.children.length > 0;
    const isItemActive = isActive(item.path);
    const isSubmenuOpen = openSubmenu === item.key;
    const Icon = item.icon;

    return (
      <div key={item.key} className={`relative ${isMobile ? '' : 'group'}`}>
        <div className="flex items-center">
          <Link
            to={hasChildren ? '#' : item.path}
            className={`
              flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200
              ${isItemActive 
                ? 'text-blue-600 bg-blue-50' 
                : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
              }
            `}
            onClick={() => {
              if (hasChildren) {
                setOpenSubmenu(isSubmenuOpen ? null : item.key);
              } else {
                setIsMobileMenuOpen(false);
              }
            }}
          >
            <Icon className="w-5 h-5 mr-2" aria-hidden="true" />
            <span>{t(`nav.${item.key}.title`) || t(`nav.${item.key}`)}</span>
            {hasChildren && (
              isMobile ? (
                <ChevronRight
                  className={`ml-auto w-5 h-5 transition-transform duration-200 ${
                    isSubmenuOpen ? 'rotate-90' : ''
                  }`}
                />
              ) : (
                <ChevronDown
                  className={`ml-1 w-4 h-4 transition-transform duration-200 ${
                    isSubmenuOpen ? 'rotate-180' : ''
                  }`}
                />
              )
            )}
          </Link>
        </div>

        {/* Submenu */}
        {hasChildren && (
          <AnimatePresence>
            {(isSubmenuOpen || (!isMobile && openSubmenu === item.key)) && (
              <motion.div
                initial={{ opacity: 0, y: isMobile ? 0 : -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: isMobile ? 0 : -10 }}
                className={`
                  ${isMobile 
                    ? 'mt-2 ml-4 space-y-1' 
                    : 'absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50'
                  }
                `}
              >
                {item.children.map((child) => (
                  <Link
                    key={child.key}
                    to={child.path}
                    className={`
                      block px-4 py-2 text-sm rounded-md transition-colors
                      ${location.pathname === child.path
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                      }
                    `}
                    onClick={() => {
                      setOpenSubmenu(null);
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    <div className="flex items-center">
                      <child.icon className="w-4 h-4 mr-2" aria-hidden="true" />
                      <span>{t(`nav.${item.key}.${child.key}`)}</span>
                    </div>
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </div>
    );
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0" onClick={() => setIsMobileMenuOpen(false)}>
              <img src="/logo.png" alt="MyHairCare" className="h-8 w-auto" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {navItems.map((item) => renderNavItem(item))}
            
            {/* WhatsApp Button */}
            <a
              href={t('contact.whatsapp.url')}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => renderNavItem(item, true))}
              
              {/* Mobile WhatsApp Button */}
              <a
                href={t('contact.whatsapp.url')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 text-sm font-medium text-white bg-green-600 hover:bg-green-700 rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
