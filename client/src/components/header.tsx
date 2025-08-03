import { useState } from 'react';
import { Link } from 'wouter';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import logoTranservica from "@assets/logo transervica sin fondo_1754163034585.png";

interface HeaderProps {
  isHomePage?: boolean;
  onSectionScroll?: (sectionId: string) => void;
}

export default function Header({ isHomePage = false, onSectionScroll }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    if (isHomePage && onSectionScroll) {
      onSectionScroll(sectionId);
    } else {
      // Si estamos en otra página, navegar a la página principal con el hash
      window.location.href = `/#${sectionId}`;
    }
  };

  const handleNavigation = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`${isHomePage ? 'absolute top-0 left-0 right-0 z-50' : 'sticky top-0 z-50'} bg-white shadow-md`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top bar with contact info - Hidden on mobile for better UX */}
        <div className="hidden lg:flex items-center justify-between py-2 border-b border-gray-200">
          <div className="flex-1"></div>
          <div className="flex items-center space-x-6 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79a15.91 15.91 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.27 11.25 11.25 0 003.48.56 1 1 0 011 1V20a1 1 0 01-1 1A18 18 0 013 3a1 1 0 011-1h3.5a1 1 0 011 1 11.25 11.25 0 00.56 3.48 1 1 0 01-.27 1.11l-2.2 2.2z" />
              </svg>
              <span className="font-bold">(+58) 414-277-6340 / +58 412-441-8890</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 8l4 4 4-4m0 6l4-4 4 4m-8-8v14" />
              </svg>
              <span className="font-bold">direccioncomercialtvc@grupotranservica.com</span>
            </div>
          </div>
        </div>
        
        {/* Main navigation menu - Mobile responsive */}
        <div className="flex items-center justify-between py-3">
          {/* Mobile logo - always visible */}
          <div className="lg:hidden">
            {isHomePage ? (
              <img 
                src={logoTranservica} 
                alt="TRANSERVICA" 
                className="h-16 sm:h-20 w-auto cursor-pointer hover:scale-105 transition-all duration-300 filter brightness-110 contrast-125 drop-shadow-lg"
                onClick={() => scrollToSection('inicio')}
              />
            ) : (
              <Link href="/">
                <img 
                  src={logoTranservica} 
                  alt="TRANSERVICA" 
                  className="h-16 sm:h-20 w-auto cursor-pointer hover:scale-105 transition-all duration-300 filter brightness-110 contrast-125 drop-shadow-lg"
                />
              </Link>
            )}
          </div>
          
          <div className="hidden lg:flex items-center space-x-8">
            {/* Logo next to navigation */}
            {isHomePage ? (
              <img 
                src={logoTranservica} 
                alt="TRANSERVICA" 
                className="h-24 lg:h-28 xl:h-32 w-auto cursor-pointer hover:scale-105 transition-all duration-300 mr-8 filter brightness-110 contrast-125 drop-shadow-lg"
                style={{ 
                  filter: 'brightness(1.1) contrast(1.25) drop-shadow(0 2px 4px rgba(0,0,0,0.2))'
                }}
                onClick={() => scrollToSection('inicio')}
              />
            ) : (
              <Link href="/">
                <img 
                  src={logoTranservica} 
                  alt="TRANSERVICA" 
                  className="h-24 lg:h-28 xl:h-32 w-auto cursor-pointer hover:scale-105 transition-all duration-300 mr-8 filter brightness-110 contrast-125 drop-shadow-lg"
                  style={{ 
                    filter: 'brightness(1.1) contrast(1.25) drop-shadow(0 2px 4px rgba(0,0,0,0.2))'
                  }}
                />
              </Link>
            )}
            
            {isHomePage ? (
              <button 
                onClick={() => scrollToSection('inicio')}
                className="text-gray-700 hover:text-[#155d29] text-sm font-bold transition uppercase tracking-wide"
              >
                {t('nav.home')}
              </button>
            ) : (
              <Link 
                href="/"
                className="text-gray-700 hover:text-[#155d29] text-sm font-bold transition uppercase tracking-wide"
              >
                {t('nav.home')}
              </Link>
            )}
            
            <div className="relative group">
              <button 
                onClick={() => scrollToSection('servicios')}
                className="text-gray-700 hover:text-[#155d29] text-sm font-bold transition uppercase tracking-wide flex items-center"
              >
                {t('nav.services')}
                <svg className="w-3 h-3 ml-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            <button 
              onClick={() => scrollToSection('proyectos')}
              className="text-gray-700 hover:text-[#155d29] text-sm font-bold transition uppercase tracking-wide"
            >
              {t('nav.projects')}
            </button>
            <button 
              onClick={() => scrollToSection('nosotros')}
              className="text-gray-700 hover:text-[#155d29] text-sm font-bold transition uppercase tracking-wide"
            >
              {t('nav.company')}
            </button>
            <button 
              onClick={() => scrollToSection('equipos')}
              className="text-gray-700 hover:text-[#155d29] text-sm font-bold transition uppercase tracking-wide"
            >
              EQUIPOS
            </button>
            <Link 
              href="/blog"
              className="text-[#155d29] text-sm font-bold transition uppercase tracking-wide border-b-2 border-[#155d29] pb-1"
            >
              BLOG
            </Link>
            <button 
              onClick={() => scrollToSection('contacto')}
              className="text-gray-700 hover:text-[#155d29] text-sm font-bold transition uppercase tracking-wide"
            >
              {t('nav.contact')}
            </button>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex">
              <LanguageSwitcher />
            </div>
            <button 
              onClick={() => scrollToSection('contacto')}
              className="bg-transervica-green text-white px-6 py-2 rounded-md text-sm font-semibold hover:bg-transervica-light-green transition shadow-md"
            >
              {t('nav.quote')}
            </button>
            
            {/* Enhanced mobile menu button with better accessibility */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="flex items-center justify-center w-12 h-12 rounded-lg text-gray-700 hover:text-[#155d29] hover:bg-gray-100 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#155d29] focus:ring-offset-2"
                aria-expanded={isMobileMenuOpen}
                aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
              >
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced Mobile Menu Overlay with better UX */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-200 z-50 mobile-menu-transition animate-fade-in">
          <div className="px-4 py-6 space-y-4">
            {isHomePage ? (
              <button 
                onClick={() => handleNavigation('inicio')}
                className="block w-full text-left text-gray-700 hover:text-[#155d29] hover:bg-gray-50 text-base font-bold transition-all duration-200 uppercase tracking-wide py-4 px-4 rounded-lg"
              >
                {t('nav.home')}
              </button>
            ) : (
              <Link 
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-left text-gray-700 hover:text-[#155d29] hover:bg-gray-50 text-base font-bold transition-all duration-200 uppercase tracking-wide py-4 px-4 rounded-lg"
              >
                {t('nav.home')}
              </Link>
            )}
            
            <button 
              onClick={() => handleNavigation('servicios')}
              className="block w-full text-left text-gray-700 hover:text-[#155d29] hover:bg-gray-50 text-base font-bold transition-all duration-200 uppercase tracking-wide py-4 px-4 rounded-lg"
            >
              {t('nav.services')}
            </button>
            <button 
              onClick={() => handleNavigation('proyectos')}
              className="block w-full text-left text-gray-700 hover:text-[#155d29] hover:bg-gray-50 text-base font-bold transition-all duration-200 uppercase tracking-wide py-4 px-4 rounded-lg"
            >
              {t('nav.projects')}
            </button>
            <button 
              onClick={() => handleNavigation('nosotros')}
              className="block w-full text-left text-gray-700 hover:text-[#155d29] hover:bg-gray-50 text-base font-bold transition-all duration-200 uppercase tracking-wide py-4 px-4 rounded-lg"
            >
              {t('nav.company')}
            </button>
            <button 
              onClick={() => handleNavigation('equipos')}
              className="block w-full text-left text-gray-700 hover:text-[#155d29] hover:bg-gray-50 text-base font-bold transition-all duration-200 uppercase tracking-wide py-4 px-4 rounded-lg"
            >
              EQUIPOS
            </button>
            <Link 
              href="/blog"
              className="block w-full text-left text-[#155d29] hover:bg-gray-50 text-base font-bold transition-all duration-200 uppercase tracking-wide py-4 px-4 rounded-lg border-l-4 border-[#155d29]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              BLOG
            </Link>
            <button 
              onClick={() => handleNavigation('contacto')}
              className="block w-full text-left text-gray-700 hover:text-[#155d29] hover:bg-gray-50 text-base font-bold transition-all duration-200 uppercase tracking-wide py-4 px-4 rounded-lg"
            >
              {t('nav.contact')}
            </button>
            
            {/* Call-to-Action button in mobile menu */}
            <button 
              onClick={() => handleNavigation('contacto')}
              className="w-full bg-[#155d29] text-white py-4 px-6 rounded-lg text-base font-semibold hover-lift shadow-lg mt-4"
            >
              {t('nav.quote')}
            </button>
            <div className="pt-4 mt-4 border-t border-gray-200">
              <div className="space-y-2 text-sm text-gray-600 mb-3">
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79a15.91 15.91 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.27 11.25 11.25 0 003.48.56 1 1 0 011 1V20a1 1 0 01-1 1A18 18 0 013 3a1 1 0 011-1h3.5a1 1 0 011 1 11.25 11.25 0 00.56 3.48 1 1 0 01-.27 1.11l-2.2 2.2z" />
                  </svg>
                  <span className="font-bold">(+58) 414-277-6340 / +58 412-441-8890</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 8l4 4 4-4m0 6l4-4 4 4m-8-8v14" />
                  </svg>
                  <span className="font-bold">direccioncomercialtvc@grupotranservica.com</span>
                </div>
              </div>
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}