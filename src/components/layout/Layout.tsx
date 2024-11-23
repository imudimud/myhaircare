import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../Header';
import Navbar from '../Navbar';
import Footer from '../Footer';

interface LayoutProps {
  children: React.ReactNode;
  heroBackground?: string;
  fullWidth?: boolean;
}

const Layout = ({ children, heroBackground, fullWidth = false }: LayoutProps) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header & Navigation */}
      <header className="fixed w-full top-0 z-50 bg-white shadow-sm">
        <Header onMenuClick={() => null} />
        <Navbar />
      </header>

      {/* Main Content */}
      <main className={`flex-grow pt-[120px] ${isHomePage ? 'pt-0' : ''}`}>
        {/* Hero Background (for non-home pages) */}
        {!isHomePage && heroBackground && (
          <div 
            className="absolute top-0 left-0 right-0 h-[50vh] min-h-[400px] -z-10 bg-cover bg-center bg-no-repeat"
            style={{ 
              backgroundImage: `linear-gradient(to bottom right, rgba(30, 58, 138, 0.9), rgba(30, 58, 138, 0.95)), url(${heroBackground})` 
            }}
          />
        )}

        {/* Content Container */}
        <div className={fullWidth ? 'w-full' : 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'}>
          {children}
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
