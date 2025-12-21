import { useState } from 'react';
import { Link } from 'wouter';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import logoTranservica from "@assets/logo-transervica-optimized.webp";
import heroThumbnail from "@assets/youtube-hero-thumbnail.webp";

export default function HeroSection() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const { t } = useLanguage();

  const youtubeVideoId = '_LQbWkWlg6s';

  const handlePlayVideo = () => {
    setVideoPlaying(true);
  };
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
      {/* Video de fondo Netflix Style - YouTube Facade Pattern for Performance */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-black">
        {!videoPlaying ? (
          <button
            onClick={handlePlayVideo}
            className="absolute inset-0 w-full h-full cursor-pointer group focus:outline-none focus-visible:ring-4 focus-visible:ring-[#155d29] focus-visible:ring-offset-2"
            aria-label="Reproducir video de fondo corporativo de TRANSERVICA - video ambiental silenciado"
            data-testid="button-play-video-facade"
          >
            <img
              src={heroThumbnail}
              alt="Video corporativo TRANSERVICA - Transporte de cargas excepcionales en Venezuela"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-cover"
              loading="eager"
              decoding="async"
              style={{
                width: 'max(100vw, 177.77vh)',
                height: 'max(100vh, 56.25vw)',
                minWidth: '100vw',
                minHeight: '100vh'
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-red-600 rounded-full flex items-center justify-center shadow-2xl group-hover:bg-red-700 group-hover:scale-110 transition-all duration-300">
                <svg className="w-10 h-10 sm:w-12 sm:h-12 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>
          </button>
        ) : (
          <iframe
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=${youtubeVideoId}&modestbranding=1&start=20&iv_load_policy=3&cc_load_policy=0&disablekb=1&fs=0&vq=hd1080&quality=hd1080&hd=1&fmt=22&enablejsapi=1`}
            title="Transervica Background Video - Transporte de Cargas Excepcionales"
            allow="autoplay; encrypted-media"
            style={{
              pointerEvents: 'none',
              border: 'none',
              width: 'max(100vw, 177.77vh)',
              height: 'max(100vh, 56.25vw)',
              minWidth: '100vw',
              minHeight: '100vh'
            }}
          />
        )}
        
        {/* Minimal overlay only where needed */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10"></div>
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
                <span className="font-bold">+58 422-6361047 / +58 412-367-5636 / +58 414-277-6340</span>
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
              <img 
                src={logoTranservica} 
                alt="Logo TRANSERVICA - Transporte Cargas Excepcionales Venezuela" 
                className="h-16 sm:h-20 w-auto cursor-pointer hover:scale-105 transition-all duration-300 filter brightness-110 contrast-125 drop-shadow-lg"
                width={80}
                height={64}
                decoding="sync"
                fetchPriority="high"
                onClick={() => scrollToSection('inicio')}
              />
            </div>
            
            <div className="hidden lg:flex items-center space-x-8">
              {/* Logo next to navigation */}
              <img 
                src={logoTranservica} 
                alt="Logo TRANSERVICA - Transporte Cargas Excepcionales Venezuela Hasta 1100 Toneladas" 
                className="h-24 lg:h-28 xl:h-32 w-auto cursor-pointer hover:scale-105 transition-all duration-300 mr-8 filter brightness-110 contrast-125 drop-shadow-lg"
                width={128}
                height={96}
                decoding="sync"
                fetchPriority="high"
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
                {t('nav.equipment')}
              </button>
              <Link 
                href="/blog"
                className="text-gray-700 hover:text-[#155d29] text-sm font-bold transition uppercase tracking-wide"
              >
                BLOG
              </Link>
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
                {t('nav.equipment')}
              </button>
              <Link 
                href="/blog"
                className="block w-full text-left text-gray-700 hover:text-[#155d29] hover:bg-gray-50 text-base font-bold transition-all duration-200 uppercase tracking-wide py-4 px-4 rounded-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                BLOG
              </Link>
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
                    <span className="font-bold">+58 422-6361047 / +58 412-367-5636 / +58 414-277-6340</span>
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
        href="https://wa.me/message/WAKKACM55ESHC1" 
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition z-50 min-w-[56px] min-h-[56px] flex items-center justify-center"
        title="Contactar por WhatsApp"
        aria-label="Contactar por WhatsApp - Atención 24/7"
        data-testid="button-whatsapp-floating"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 32 32">
          <path d="M16 0c-8.837 0-16 7.163-16 16 0 2.825 0.737 5.607 2.137 8.048l-2.137 7.952 7.933-2.127c2.42 1.396 5.202 2.127 8.067 2.127 8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 29.467c-2.482 0-4.908-0.646-7.07-1.87l-0.507-0.292-4.713 1.262 1.262-4.669-0.292-0.508c-1.207-2.100-1.847-4.507-1.847-6.924 0-7.435 6.050-13.485 13.485-13.485s13.485 6.050 13.485 13.485c0 7.435-6.050 13.485-13.485 13.485zM21.655 18.762c-0.362-0.181-2.138-1.055-2.470-1.175s-0.573-0.181-0.815 0.181c-0.241 0.362-0.935 1.175-1.147 1.417s-0.422 0.271-0.784 0.090c-0.362-0.181-1.529-0.563-2.913-1.797-1.077-0.960-1.804-2.144-2.016-2.506s-0.022-0.558 0.159-0.738c0.163-0.163 0.362-0.422 0.543-0.634s0.241-0.362 0.362-0.603c0.121-0.241 0.060-0.452-0.030-0.634s-0.815-1.963-1.117-2.688c-0.294-0.706-0.593-0.611-0.815-0.622-0.211-0.011-0.452-0.013-0.693-0.013s-0.634 0.090-0.965 0.452c-0.332 0.362-1.268 1.239-1.268 3.019s1.298 3.502 1.479 3.744c0.181 0.241 2.549 3.892 6.177 5.459 0.863 0.373 1.537 0.596 2.063 0.763 0.867 0.276 1.656 0.237 2.281 0.144 0.696-0.104 2.138-0.874 2.440-1.718s0.302-1.567 0.211-1.718c-0.090-0.151-0.332-0.241-0.695-0.422z"/>
        </svg>
      </a>
      {/* Content Container - Positioned closer to bottom green bar */}
      <div className="absolute inset-0 z-20 flex items-end justify-start">
        <div className="w-full mobile-padding">
          <div className="pb-16 sm:pb-20 lg:pb-24">
            <div className="bg-black/60 backdrop-blur-sm rounded-xl border border-white/20 shadow-xl p-5 sm:p-7 lg:p-9 w-fit max-w-full sm:max-w-2xl lg:max-w-3xl animate-slide-up">
              {/* Main Title - Enhanced contrast */}
              <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-3 sm:mb-4 lg:mb-5 leading-tight text-[#7dd87a] text-wrap-balance" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0 0 8px rgba(0,0,0,0.5)' }}>
                {t('hero.title')}
              </h1>
              
              {/* Subtitle - Enhanced visibility */}
              <h2 className="text-sm sm:text-base lg:text-lg xl:text-xl font-bold mb-3 sm:mb-4 lg:mb-5 text-[#a8e6a8] text-wrap-balance" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8), 0 0 6px rgba(0,0,0,0.5)' }}>
                {t('hero.subtitle')}
              </h2>
              
              {/* Description - Enhanced readability */}
              <p className="text-sm sm:text-base lg:text-base mb-4 sm:mb-5 lg:mb-6 text-white leading-relaxed max-w-md sm:max-w-lg lg:max-w-2xl text-wrap-pretty" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8), 0 0 4px rgba(0,0,0,0.6)' }}>
                {t('hero.description')}
              </p>
              
              {/* Call to Action Buttons - Optimized size and positioning */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button 
                  onClick={scrollToContact}
                  className="flex items-center justify-center bg-[#155d29] text-white px-5 sm:px-6 py-3 sm:py-3.5 rounded-lg text-sm sm:text-base font-bold hover:bg-[#0f4a21] transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                  {t('hero.cta')}
                </button>
                <button 
                  onClick={() => scrollToSection('servicios')}
                  className="flex items-center justify-center bg-gray-900/70 text-white px-5 sm:px-6 py-3 sm:py-3.5 rounded-lg text-sm sm:text-base font-bold hover:bg-gray-800/80 transition-all duration-300 backdrop-blur-sm shadow-xl border border-white/30 hover:border-white/50 transform hover:scale-105"
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