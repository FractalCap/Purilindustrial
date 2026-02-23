
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { MegaMenuDesktop, MegaMenuMobile } from './MegaMenuProductos';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 bg-white/90 backdrop-blur-md shadow-sm py-3`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center gap-2">
              <img 
                src="/logopuri.png" 
                alt="Purifil Internacional" 
                className="h-14 md:h-20 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary font-bold text-sm tracking-wide uppercase transition-colors">Inicio</Link>
            <MegaMenuDesktop />
            <a href="/#blog" className="text-gray-700 hover:text-primary font-bold text-sm tracking-wide uppercase transition-colors">Blog</a>
            <a href="https://wa.me/573112100552" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primary font-bold text-sm tracking-wide uppercase transition-colors">CONTÁCTANOS</a>
            
            <a 
              href="https://wa.me/573112100552" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-full font-bold text-xs tracking-widest uppercase transition-all flex items-center gap-2 border border-primary text-primary hover:bg-primary hover:text-white ml-4"
            >
              Mercado Institucional
              <ArrowRight size={14} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-900 p-2"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg py-4 px-4 md:hidden flex flex-col gap-4">
          <Link to="/" className="text-gray-700 hover:text-primary font-bold text-sm tracking-wide uppercase py-2 border-b border-gray-100" onClick={() => setMobileMenuOpen(false)}>Inicio</Link>
          <MegaMenuMobile closeMobileMenu={() => setMobileMenuOpen(false)} />
          <a href="/#blog" className="text-gray-700 hover:text-primary font-bold text-sm tracking-wide uppercase py-2 border-b border-gray-100" onClick={() => setMobileMenuOpen(false)}>Blog</a>
          <a href="https://wa.me/573112100552" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primary font-bold text-sm tracking-wide uppercase py-2 border-b border-gray-100" onClick={() => setMobileMenuOpen(false)}>Contáctanos</a>
          <a 
            href="https://wa.me/573112100552" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full text-center px-6 py-3 rounded-lg bg-primary text-white font-bold text-sm tracking-widest uppercase mt-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Mercado Institucional
          </a>
        </div>
      )}
    </nav>
  );
}
