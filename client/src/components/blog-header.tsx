import React, { useState } from 'react';
import { Link } from 'wouter';
import { Menu, X, Home, Briefcase, Users, FileText, Phone, Calendar, ChevronLeft } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import logoTranservica from "@assets/logo transervica sin fondo_1754163034585.png";

interface BlogHeaderProps {
  showBackButton?: boolean;
  onBackClick?: () => void;
}

export default function BlogHeader({ showBackButton = false, onBackClick }: BlogHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    // For sections on the main page, we need to navigate to home first
    window.location.href = `/#${sectionId}`;
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top bar with contact info - Hidden on mobile for better UX */}
        <div className="hidden lg:flex items-center justify-between py-2 border-b border-gray-200">
          <div className="flex-1"></div>
          <div className="flex items-center space-x-6 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79a15.91 15.91 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.27 11.25 11.25 0 003.48.56 1 1 0 011 1V20a1 1 0 01-1 1A18 18 0 013 3a1 1 0 011-1h3.5a1 1 0 011 1 11.25 11.25 0 00.56 3.48 1 1 0 01-.27 1.11l-2.2 2.2z" />
              </svg>
              <span className="font-bold">+58 412-367-5636 / +58 414-277-6340</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 8l4 4 4-4m0 6l4-4 4 4m-8-8v14" />
              </svg>
              <span className="font-bold">direccioncomercialtvc@grupotranservica.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 8l4 4 4-4m0 6l4-4 4 4m-8-8v14" />
              </svg>
              <span className="font-bold">direccionejecutivatvc@grupotranservica.com</span>
            </div>
          </div>
        </div>
        
        {/* Main navigation menu - Mobile responsive */}
        <div className="flex items-center justify-between py-3">
          {/* Mobile logo - always visible */}
          <div className="lg:hidden">
            <Link href="/">
              <img 
                src={logoTranservica} 
                alt="TRANSERVICA" 
                className="h-16 sm:h-20 w-auto cursor-pointer hover:scale-105 transition-all duration-300 filter brightness-110 contrast-125 drop-shadow-lg"
              />
            </Link>
          </div>
          
          <div className="hidden lg:flex items-center">
            {/* Logo next to navigation */}
            <Link href="/">
              <img 
                src={logoTranservica} 
                alt="TRANSERVICA" 
                className="h-24 w-auto cursor-pointer hover:scale-105 transition-all duration-300 filter brightness-110 contrast-125 drop-shadow-lg"
                style={{ 
                  filter: 'brightness(1.1) contrast(1.25) drop-shadow(0 2px 4px rgba(0,0,0,0.2))'
                }}
              />
            </Link>
            <div className="ml-10 flex items-baseline space-x-8">
              <Link 
                href="/"
                className="text-gray-700 hover:text-[#155d29] px-3 py-2 text-sm font-bold transition uppercase tracking-wide"
              >
                {t('nav.home')}
              </Link>
              <div className="relative group">
                <button 
                  onClick={() => scrollToSection('servicios')}
                  className="text-gray-700 hover:text-[#155d29] px-3 py-2 text-sm font-bold transition uppercase tracking-wide flex items-center"
                >
                  {t('nav.services')}
                  <svg className="w-3 h-3 ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
              <button 
                onClick={() => scrollToSection('proyectos')}
                className="text-gray-700 hover:text-[#155d29] px-3 py-2 text-sm font-bold transition uppercase tracking-wide"
              >
                {t('nav.projects')}
              </button>
              <button 
                onClick={() => scrollToSection('nosotros')}
                className="text-gray-700 hover:text-[#155d29] px-3 py-2 text-sm font-bold transition uppercase tracking-wide"
              >
                {t('nav.company')}
              </button>
              <button 
                onClick={() => scrollToSection('equipos')}
                className="text-gray-700 hover:text-[#155d29] px-3 py-2 text-sm font-bold transition uppercase tracking-wide"
              >
                EQUIPOS
              </button>
              <Link 
                href="/blog"
                className="text-[#155d29] px-3 py-2 text-sm font-bold transition uppercase tracking-wide border-b-2 border-[#155d29]"
              >
                BLOG
              </Link>
              <button 
                onClick={() => scrollToSection('contacto')}
                className="text-gray-700 hover:text-[#155d29] px-3 py-2 text-sm font-bold transition uppercase tracking-wide"
              >
                {t('nav.contact')}
              </button>
              
              {/* Back button for article view */}
              {showBackButton && onBackClick && (
                <button
                  onClick={onBackClick}
                  className="ml-4 flex items-center gap-2 px-4 py-2 bg-[#155d29] text-white rounded-lg hover:bg-[#0f4a21] transition-colors shadow-md"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Volver al Blog
                </button>
              )}
            </div>
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
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="flex items-center justify-center w-12 h-12 rounded-lg text-gray-700 hover:text-[#155d29] hover:bg-gray-100 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#155d29] focus:ring-offset-2"
                aria-expanded={mobileMenuOpen}
                aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
              >
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu - Enhanced with better UX */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white shadow-lg">
            <div className="px-4 py-6 space-y-4">
              {/* Language switcher for mobile */}
              <div className="flex justify-center mb-4">
                <LanguageSwitcher />
              </div>
              
              <Link 
                href="/"
                className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 hover:text-[#155d29] hover:bg-gray-50 transition-all duration-200 font-semibold"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Home className="w-5 h-5" />
                <span>{t('nav.home')}</span>
              </Link>
              
              <button 
                onClick={() => { scrollToSection('servicios'); setMobileMenuOpen(false); }}
                className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 hover:text-[#155d29] hover:bg-gray-50 transition-all duration-200 font-semibold w-full text-left"
              >
                <Briefcase className="w-5 h-5" />
                <span>{t('nav.services')}</span>
              </button>
              
              <button 
                onClick={() => { scrollToSection('proyectos'); setMobileMenuOpen(false); }}
                className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 hover:text-[#155d29] hover:bg-gray-50 transition-all duration-200 font-semibold w-full text-left"
              >
                <FileText className="w-5 h-5" />
                <span>{t('nav.projects')}</span>
              </button>
              
              <button 
                onClick={() => { scrollToSection('nosotros'); setMobileMenuOpen(false); }}
                className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 hover:text-[#155d29] hover:bg-gray-50 transition-all duration-200 font-semibold w-full text-left"
              >
                <Users className="w-5 h-5" />
                <span>{t('nav.company')}</span>
              </button>
              
              <button 
                onClick={() => { scrollToSection('equipos'); setMobileMenuOpen(false); }}
                className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 hover:text-[#155d29] hover:bg-gray-50 transition-all duration-200 font-semibold w-full text-left"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 7h-3V6a4 4 0 0 0-8 0v1H5a1 1 0 0 0-1 1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a1 1 0 0 0-1-1zM10 6a2 2 0 0 1 4 0v1h-4V6zm8 13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h2v1a1 1 0 0 0 2 0V9h4v1a1 1 0 0 0 2 0V9h2v10z"/>
                </svg>
                <span>EQUIPOS</span>
              </button>
              
              <Link 
                href="/blog"
                className="flex items-center space-x-3 px-4 py-3 rounded-lg text-[#155d29] bg-green-50 border border-[#155d29] transition-all duration-200 font-bold"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Calendar className="w-5 h-5" />
                <span>BLOG</span>
              </Link>
              
              <button 
                onClick={() => { scrollToSection('contacto'); setMobileMenuOpen(false); }}
                className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 hover:text-[#155d29] hover:bg-gray-50 transition-all duration-200 font-semibold w-full text-left"
              >
                <Phone className="w-5 h-5" />
                <span>{t('nav.contact')}</span>
              </button>
              
              {/* Mobile back button for article view */}
              {showBackButton && onBackClick && (
                <button
                  onClick={() => { onBackClick(); setMobileMenuOpen(false); }}
                  className="flex items-center space-x-3 px-4 py-3 rounded-lg bg-[#155d29] text-white hover:bg-[#0f4a21] transition-all duration-200 font-semibold w-full"
                >
                  <ChevronLeft className="w-5 h-5" />
                  <span>Volver al Blog</span>
                </button>
              )}
              
              {/* Mobile quote button */}
              <button 
                onClick={() => { scrollToSection('contacto'); setMobileMenuOpen(false); }}
                className="w-full bg-[#155d29] text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-[#0f4a21] transition-all duration-200 shadow-md mt-4"
              >
                {t('nav.quote')}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}