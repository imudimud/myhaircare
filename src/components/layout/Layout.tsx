import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Hero from '../Hero';

interface LayoutProps {
  children?: React.ReactNode;
  heroBackground?: string;
  fullWidth?: boolean;
}

const Layout = ({ children, heroBackground, fullWidth = false }: LayoutProps) => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isTest = location.pathname === '/test';

  return (
    <div className="min-h-screen flex flex-col">
      {!isTest && (
        <header className="fixed w-full z-50 bg-white shadow-md">
          <Navbar />
        </header>
      )}
      
      <main className={`flex-grow ${!isTest ? 'pt-16' : ''}`}>
        {isHome && !isTest && <Hero />}
        {children || <Outlet />}
      </main>

      {!isTest && <Footer />}
    </div>
  );
};

export default Layout;
