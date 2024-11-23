import React, { useState } from 'react';
import Header from '../Header';
import Navbar from '../Navbar';
import { Menu } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isNavOpen, setIsNavOpen] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <button
        onClick={() => setIsNavOpen(!isNavOpen)}
        className="fixed top-24 left-4 z-50 p-2 rounded-full bg-navy-900 text-white hover:bg-navy-800 lg:hidden"
      >
        <Menu size={20} />
      </button>
      <div className="flex pt-[72px]">
        <Navbar isOpen={isNavOpen} setIsOpen={setIsNavOpen} />
        <main className={`flex-1 transition-all duration-300 ${isNavOpen ? 'lg:pl-64' : ''} px-4 sm:px-6 lg:px-8`}>
          {children}
        </main>
      </div>
    </div>
  );
}
