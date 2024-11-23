import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  Info, 
  Scissors, 
  Image, 
  BookOpen, 
  MessageSquare,
  Stethoscope,
  UserPlus,
  ChevronRight,
  Menu,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navigation = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'About', href: '/about', icon: Info },
  { 
    name: 'Medical Services', 
    href: '/procedures',
    icon: Scissors,
    subItems: [
      { name: 'Our Procedures', href: '/procedures' },
      { name: 'Medical Information', href: '/medical' },
      { name: 'Patient Resources', href: '/patient' },
    ]
  },
  { name: 'Before & After', href: '/gallery', icon: Image },
  { name: 'Education Center', href: '/education', icon: BookOpen },
  { name: 'Consultation', href: '/consultation', icon: MessageSquare },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const location = useLocation();

  const toggleSidebar = () => setIsOpen(!isOpen);

  const scrollToContact = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  };

  const isActivePath = (path: string) => {
    return location.pathname === path;
  };

  return (
    <>
      {/* Mobile menu button */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-md text-gray-700 hover:bg-gray-100"
        onClick={toggleSidebar}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
            onClick={toggleSidebar}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        className={`fixed top-0 left-0 z-40 h-screen bg-white shadow-lg transform
          ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
          lg:translate-x-0 transition-transform duration-300 ease-in-out
          w-64 lg:sticky lg:top-20`}
        initial={false}
      >
        <div className="h-full px-3 py-4 overflow-y-auto">
          <div className="space-y-2">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.name === 'Consultation' ? (
                  <button
                    onClick={() => {
                      scrollToContact();
                      setIsOpen(false);
                    }}
                    className={`flex items-center w-full p-2 rounded-lg hover:bg-gray-100 group text-gray-700`}
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="ml-3 flex-1">{item.name}</span>
                  </button>
                ) : (
                  <Link
                    to={item.href}
                    className={`flex items-center p-2 rounded-lg hover:bg-gray-100 group
                      ${isActivePath(item.href) ? 'bg-blue-50 text-blue-600' : 'text-gray-700'}`}
                    onClick={() => {
                      if (item.subItems) {
                        setExpandedItem(expandedItem === item.name ? null : item.name);
                      } else {
                        setIsOpen(false);
                      }
                    }}
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="ml-3 flex-1">{item.name}</span>
                    {item.subItems && (
                      <ChevronRight
                        className={`w-4 h-4 transition-transform duration-200
                          ${expandedItem === item.name ? 'rotate-90' : ''}`}
                      />
                    )}
                  </Link>
                )}
                
                {/* Submenu */}
                {item.subItems && expandedItem === item.name && (
                  <div className="ml-6 mt-2 space-y-2">
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.href}
                        className={`flex items-center p-2 rounded-lg hover:bg-gray-100
                          ${isActivePath(subItem.href) ? 'text-blue-600' : 'text-gray-600'}`}
                        onClick={() => setIsOpen(false)}
                      >
                        <span className="ml-3">{subItem.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </motion.aside>
    </>
  );
}
