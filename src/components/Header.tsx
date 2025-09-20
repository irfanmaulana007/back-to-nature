'use client';

import { useState, useEffect } from 'react';
import { Mountain } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex justify-between items-center transition-all duration-300 ${
            isScrolled ? 'h-12' : 'h-16'
          }`}
        >
          <div className="flex items-center space-x-2">
            <Mountain
              className={`text-green-600 transition-all duration-300 ${
                isScrolled ? 'h-6 w-6' : 'h-8 w-8'
              }`}
            />
            <h1
              className={`font-bold transition-all duration-300 ${
                isScrolled ? 'text-gray-900 text-xl' : 'text-white text-2xl'
              }`}
            >
              HikingNusantara
            </h1>
          </div>
          <nav
            className={`hidden md:flex transition-all duration-300 ${
              isScrolled ? 'space-x-6' : 'space-x-8'
            }`}
          >
            <a
              href="#"
              className={`transition-colors duration-300 ${
                isScrolled
                  ? 'text-gray-700 hover:text-green-600'
                  : 'text-white/90 hover:text-white'
              }`}
            >
              Home
            </a>
            <a
              href="#"
              className={`transition-colors duration-300 ${
                isScrolled
                  ? 'text-gray-700 hover:text-green-600'
                  : 'text-white/90 hover:text-white'
              }`}
            >
              Mountains
            </a>
            <a
              href="#"
              className={`transition-colors duration-300 ${
                isScrolled
                  ? 'text-gray-700 hover:text-green-600'
                  : 'text-white/90 hover:text-white'
              }`}
            >
              About
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
