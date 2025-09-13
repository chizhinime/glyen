'use client';

import Link from 'next/link';
import { useState, useEffect, use } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`bg-white sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-lg py-2' : 'shadow-md py-4'}`}>
      <div className="container mx-auto flex justify-between items-center px-6">
        <Link 
          href="/" 
          className="text-2xl font-bold text-blue-600 hover:text-orange-500 transition-colors duration-300 flex items-center"
        >
          <span className="relative">
            Glyen
            <span className="absolute -top-1 -right-3 w-2 h-2 bg-orange-500 rounded-full"></span>
          </span>
        </Link>

        <nav className="hidden md:flex space-x-6">
          <Link 
            href="/" 
            className="relative group text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium"
          >
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link 
            href="/services" 
            className="relative group text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium"
          >
            Services
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link 
            href="/shop" 
            className="relative group text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium"
          >
            Shop
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link 
            href="/about" 
            className="relative group text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium"
          >
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link 
            href="/contact" 
            className="relative group text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium"
          >
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-blue-50 transition-colors duration-300"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className={`w-6 h-6 transition-transform duration-300 ${menuOpen ? 'rotate-90' : ''} text-blue-600`}>
            {menuOpen ? '✕' : '☰'}
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-white shadow-lg overflow-hidden transition-all duration-500 ease-in-out ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 py-4 flex flex-col space-y-4">
          <Link 
            href="/" 
            onClick={() => setMenuOpen(false)}
            className="text-gray-700 hover:text-blue-600 transition-colors duration-300 py-2 font-medium border-l-2 border-transparent hover:border-orange-500 hover:pl-2"
          >
            Home
          </Link>
          <Link 
            href="/services" 
            onClick={() => setMenuOpen(false)}
            className="text-gray-700 hover:text-blue-600 transition-colors duration-300 py-2 font-medium border-l-2 border-transparent hover:border-orange-500 hover:pl-2"
          >
            Services
          </Link>
          <Link 
            href="/shop" 
            onClick={() => setMenuOpen(false)}
            className="text-gray-700 hover:text-blue-600 transition-colors duration-300 py-2 font-medium border-l-2 border-transparent hover:border-orange-500 hover:pl-2"
          >
            Shop
          </Link>
          <Link 
            href="/about" 
            onClick={() => setMenuOpen(false)}
            className="text-gray-700 hover:text-blue-600 transition-colors duration-300 py-2 font-medium border-l-2 border-transparent hover:border-orange-500 hover:pl-2"
          >
            About
          </Link>
          <Link 
            href="/contact" 
            onClick={() => setMenuOpen(false)}
            className="text-gray-700 hover:text-blue-600 transition-colors duration-300 py-2 font-medium border-l-2 border-transparent hover:border-orange-500 hover:pl-2"
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}