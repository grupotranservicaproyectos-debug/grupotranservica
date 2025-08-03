import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import logoTranservica from "@assets/logo transervica sin fondo_1754163034585.png";

export default function HeroSection() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();
  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen bg-black overflow-hidden">
      {/* Video de fondo Netflix Style */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <iframe
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          src="https://www.youtube.com/embed/_LQbWkWlg6s?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=_LQbWkWlg6s&modestbranding=1&start=7&iv_load_policy=3&cc_load_policy=0&disablekb=1&fs=0&vq=hd1080&hd=1&quality=hd1080"
          title="Transervica Background Video - Transporte de Cargas Excepcionales"
          allow="autoplay; encrypted-media"
          loading="eager"
          style={{
            pointerEvents: 'none',
            border: 'none',
            width: 'max(100vw, 177.77vh)',
            height: 'max(100vh, 56.25vw)',
            minWidth: '100vw',
            minHeight: '100vh'
          }}
        />
        
        {/* Minimal overlay only where needed */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-10"></div>
      </div>
      {/* Transportes Montejo Style Navigation - Optimized for Mobile */}
      <nav className="absolute top-0 left-0 right-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto mobile-padding">
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
              <img 
                src={logoTranservica} 
                alt="TRANSERVICA" 
                className="h-16 sm:h-20 w-auto cursor-pointer hover:scale-105 transition-all duration-300 filter brightness-110 contrast-125 drop-shadow-lg"
                onClick={() => scrollToSection('inicio')}
              />
            </div>
            
            <div className="hidden lg:flex items-center space-x-8">
              {/* Logo next to navigation */}
              <img 
                src={logoTranservica} 
                alt="TRANSERVICA" 
                className="h-24 lg:h-28 xl:h-32 w-auto cursor-pointer hover:scale-105 transition-all duration-300 mr-8 filter brightness-110 contrast-125 drop-shadow-lg"
                style={{ 
                  filter: 'brightness(1.1) contrast(1.25) drop-shadow(0 2px 4px rgba(0,0,0,0.2))'
                }}
                onClick={() => scrollToSection('inicio')}
              />
              <button 
                onClick={() => scrollToSection('inicio')}
                className="text-gray-700 hover:text-[#155d29] text-sm font-bold transition uppercase tracking-wide"
              >
                {t('nav.home')}
              </button>
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
              <button 
                onClick={scrollToContact}
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
                onClick={scrollToContact}
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
            <div className="mobile-padding py-6 space-y-4">
              <button 
                onClick={() => { scrollToSection('inicio'); setIsMobileMenuOpen(false); }}
                className="block w-full text-left text-gray-700 hover:text-[#155d29] hover:bg-gray-50 text-base font-bold transition-all duration-200 uppercase tracking-wide py-4 px-4 rounded-lg"
              >
                {t('nav.home')}
              </button>
              <button 
                onClick={() => { scrollToSection('servicios'); setIsMobileMenuOpen(false); }}
                className="block w-full text-left text-gray-700 hover:text-[#155d29] hover:bg-gray-50 text-base font-bold transition-all duration-200 uppercase tracking-wide py-4 px-4 rounded-lg"
              >
                {t('nav.services')}
              </button>
              <button 
                onClick={() => { scrollToSection('proyectos'); setIsMobileMenuOpen(false); }}
                className="block w-full text-left text-gray-700 hover:text-[#155d29] hover:bg-gray-50 text-base font-bold transition-all duration-200 uppercase tracking-wide py-4 px-4 rounded-lg"
              >
                {t('nav.projects')}
              </button>
              <button 
                onClick={() => { scrollToSection('nosotros'); setIsMobileMenuOpen(false); }}
                className="block w-full text-left text-gray-700 hover:text-[#155d29] hover:bg-gray-50 text-base font-bold transition-all duration-200 uppercase tracking-wide py-4 px-4 rounded-lg"
              >
                {t('nav.company')}
              </button>
              <button 
                onClick={() => { scrollToSection('equipos'); setIsMobileMenuOpen(false); }}
                className="block w-full text-left text-gray-700 hover:text-[#155d29] hover:bg-gray-50 text-base font-bold transition-all duration-200 uppercase tracking-wide py-4 px-4 rounded-lg"
              >
                EQUIPOS
              </button>
              <button 
                onClick={() => { scrollToContact(); setIsMobileMenuOpen(false); }}
                className="block w-full text-left text-gray-700 hover:text-[#155d29] hover:bg-gray-50 text-base font-bold transition-all duration-200 uppercase tracking-wide py-4 px-4 rounded-lg"
              >
                {t('nav.contact')}
              </button>
              
              {/* Call-to-Action button in mobile menu */}
              <button 
                onClick={() => { scrollToContact(); setIsMobileMenuOpen(false); }}
                className="w-full bg-[#155d29] text-white mobile-button rounded-lg text-base font-semibold hover-lift shadow-lg mt-4"
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
                    <span className="text-xs font-bold">direccioncomercialtvc@grupotranservica.com</span>
                  </div>
                </div>
                
                {/* Mobile Language Switcher */}
                <div className="pt-3 border-t border-gray-200">
                  <LanguageSwitcher />
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/584142776340?text=Hola%2C%20necesito%20información%20sobre%20transporte%20de%20cargas%20excepcionales" 
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition z-50"
        title="Contactar por WhatsApp"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 2.079.549 4.090 1.588 5.876L.029 24l6.203-1.539a11.952 11.952 0 005.785 1.539c6.621 0 11.988-5.367 11.988-11.988C23.973 5.367 18.638.001 12.017.001zm5.995 16.987c-.264.714-1.291 1.336-1.953 1.428-.663.094-1.526.141-2.438-.154-1.421-.458-3.025-1.609-4.222-3.003-1.197-1.394-1.967-3.045-2.033-3.192-.066-.147-.541-1.447-.541-2.748 0-1.301.341-1.947.463-2.215.122-.268.268-.335.357-.335h.268c.087 0 .201-.003.291.222.09.225.307.751.334.805.027.054.045.116.009.19-.036.074-.054.121-.108.184-.054.063-.113.14-.162.189-.063.049-.128.101-.055.199.073.098.325.537.697.869.481.427 1.055.705 1.206.784.151.079.239.067.327-.041.088-.108.378-.441.479-.592.101-.151.201-.126.338-.076.137.051.87.41 1.018.485.149.074.249.112.285.174.036.062.036.359-.228 1.073z"/>
        </svg>
      </a>
      {/* Content Container - Positioned closer to bottom green bar */}
      <div className="absolute inset-0 z-20 flex items-end justify-start">
        <div className="w-full mobile-padding">
          <div className="pb-16 sm:pb-20 lg:pb-24">
            <div className="bg-black/80 backdrop-blur-md rounded-xl border border-white/30 shadow-2xl p-5 sm:p-7 lg:p-9 w-fit max-w-full sm:max-w-2xl lg:max-w-3xl animate-slide-up">
              {/* Main Title - Better contrast and positioning */}
              <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-3 sm:mb-4 lg:mb-5 leading-tight text-[#7dd87a] text-wrap-balance drop-shadow-lg">
                {t('hero.title')}
              </h1>
              
              {/* Subtitle - Better visibility */}
              <h2 className="text-sm sm:text-base lg:text-lg xl:text-xl font-bold mb-3 sm:mb-4 lg:mb-5 text-[#a8e6a8] text-wrap-balance drop-shadow-md">
                {t('hero.subtitle')}
              </h2>
              
              {/* Description - Better readability */}
              <p className="text-sm sm:text-base lg:text-base mb-4 sm:mb-5 lg:mb-6 text-white leading-relaxed max-w-md sm:max-w-lg lg:max-w-2xl text-wrap-pretty drop-shadow-sm">
                {t('hero.description')}
              </p>
              
              {/* Call to Action Buttons - Optimized size and positioning */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button 
                  onClick={scrollToContact}
                  className="flex items-center justify-center bg-white text-black px-5 sm:px-6 py-3 sm:py-3.5 rounded-lg text-sm sm:text-base font-bold hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                  {t('hero.cta')}
                </button>
                <button 
                  onClick={() => scrollToSection('servicios')}
                  className="flex items-center justify-center bg-gray-800/80 text-white px-5 sm:px-6 py-3 sm:py-3.5 rounded-lg text-sm sm:text-base font-bold hover:bg-gray-700/90 transition-all duration-300 backdrop-blur-sm shadow-xl border border-white/20 hover:border-white/40 transform hover:scale-105"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {t('hero.video')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}