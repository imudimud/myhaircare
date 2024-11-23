import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { 
  Home, 
  Info, 
  Scissors, 
  BookOpen, 
  Shield, 
  Stethoscope,
  FileText,
  Users,
  Newspaper,
  MessageSquare,
  Star,
  ChevronRight,
  X,
  GraduationCap,
  HeartPulse,
  UserCircle,
  Droplet,
  Menu,
  Globe
} from 'lucide-react';

const getNavLinks = (t: any) => [
  { name: t('nav.home'), path: '/', icon: Home },
  { 
    name: t('nav.about'),
    path: '/about',
    icon: Info,
    children: [
      { name: t('nav.whyEstenove'), path: '/why-estenove', icon: Users },
      { name: t('nav.ourTeam'), path: '/about/team', icon: UserCircle },
      { name: t('nav.trustAndSafety'), path: '/trust', icon: Shield },
    ]
  },
  { 
    name: t('nav.procedures'),
    path: '/procedures',
    icon: Scissors,
    children: [
      { name: t('nav.allProcedures'), path: '/procedures', icon: Scissors },
      { name: t('nav.stemCellTherapy'), path: '/procedures/stem-cell', icon: Droplet },
      { name: t('nav.dhiTechnique'), path: '/procedures/dhi', icon: Scissors },
      { name: t('nav.sapphireFue'), path: '/procedures/sapphire-fue', icon: Scissors },
    ]
  },
  { name: t('nav.results'), path: '/results', icon: Star },
  { 
    name: t('nav.patientResources'),
    path: '/patient',
    icon: FileText,
    children: [
      { name: t('nav.educationCenter'), path: '/education', icon: GraduationCap },
      { name: t('nav.medicalGuidelines'), path: '/medical', icon: HeartPulse },
      { name: t('nav.patientJourney'), path: '/patient', icon: UserCircle },
      { name: t('nav.careProtocols'), path: '/care', icon: Stethoscope },
    ]
  },
];

interface NavbarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function Navbar({ isOpen, setIsOpen }: NavbarProps) {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const navLinks = getNavLinks(t);

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  };

  const isActivePath = (path: string) => {
    return location.pathname === path;
  };

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'fr' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Mobile backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 lg:hidden"
          />
          
          {/* Sidebar */}
          <motion.nav
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed left-0 top-[72px] h-[calc(100vh-72px)] w-64 bg-navy-900 text-white overflow-y-auto z-40 shadow-xl lg:shadow-none"
            role="navigation"
            aria-label="Main navigation"
          >
            <div className="flex flex-col h-full">
              {/* Close button - mobile only */}
              <button
                onClick={() => setIsOpen(false)}
                className="lg:hidden absolute top-2 right-2 p-2 text-white hover:text-white-400"
              >
                <X size={20} />
              </button>

              <ul className="flex-1 py-6">
                {navLinks.map((link) => (
                  <motion.li key={link.path}>
                    {link.children ? (
                      <div>
                        <button
                          onClick={() => setExpandedItem(expandedItem === link.name ? null : link.name)}
                          className={`w-full flex items-center px-6 py-3 hover:bg-navy-800 transition-colors ${
                            location.pathname.startsWith(link.path) ? 'bg-navy-800 text-gold-400' : ''
                          }`}
                        >
                          {React.createElement(link.icon, { 
                            size: 20,
                            className: 'mr-3',
                          })}
                          {link.name}
                          <ChevronRight className={`ml-auto h-4 w-4 transition-transform ${
                            expandedItem === link.name ? 'rotate-90' : ''
                          }`} />
                        </button>
                        <AnimatePresence>
                          {expandedItem === link.name && (
                            <motion.div
                              initial={{ height: 0 }}
                              animate={{ height: 'auto' }}
                              exit={{ height: 0 }}
                              className="overflow-hidden bg-navy-800"
                            >
                              {link.children.map((child) => (
                                <Link
                                  key={child.path}
                                  to={child.path}
                                  onClick={() => {
                                    if (window.innerWidth < 1024) {
                                      setIsOpen(false);
                                      setExpandedItem(null);
                                    }
                                  }}
                                  className={`flex items-center px-8 py-2 hover:bg-navy-700 transition-colors ${
                                    location.pathname === child.path ? 'text-gold-400' : ''
                                  }`}
                                >
                                  {React.createElement(child.icon, { 
                                    size: 16,
                                    className: 'mr-3',
                                  })}
                                  {child.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        to={link.path}
                        onClick={() => window.innerWidth < 1024 && setIsOpen(false)}
                        className={`flex items-center px-6 py-3 hover:bg-navy-800 transition-colors ${
                          location.pathname === link.path ? 'bg-navy-800 text-gold-400' : ''
                        }`}
                      >
                        {React.createElement(link.icon, { 
                          size: 20,
                          className: 'mr-3',
                        })}
                        {link.name}
                        <ChevronRight className="ml-auto h-4 w-4 opacity-50" />
                      </Link>
                    )}
                  </motion.li>
                ))}
              </ul>
              <div className="p-6 border-t border-navy-800">
                <Link
                  to="/consultation"
                  className="block w-full text-center rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-navy-900 shadow-sm hover:bg-gray-100 transition-colors"
                >
                  {t('buttons.bookConsultation')}
                </Link>
              </div>
            </div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
}