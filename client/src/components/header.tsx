import { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, Globe, ChevronDown } from 'lucide-react';
import { Link } from 'wouter';
import { useLanguage } from '../contexts/LanguageContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    closeMenu();
  };

  return (
    <header className="bg-white shadow-lg border-b-2 border-[#155d29]/10 sticky top-0 z-50">
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-[#155d29] to-[#0f4a21] text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-2 sm:mb-0">
              <div className="flex items-center gap-2">
                <Phone className="w-3 h-3" />
                <span>+58 (243) 233-8166</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3 h-3" />
                <span>direccioncomercialtvc@grupotranservica.com</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-3 h-3" />
              <span className="text-xs">Carretera Nacional Maracay Mariara Km 9, Edo. Carabobo</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-4 group">
            <div className="relative">
              <div className="w-14 h-14 bg-gradient-to-br from-[#155d29] to-[#0f4a21] rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-[#155d29] font-bold text-xl">T</span>
                </div>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-orange-500 rounded-full animate-pulse"></div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-2xl lg:text-3xl font-bold" style={{ color: '#155d29' }}>
                TRANSERVICA
              </h1>
              <p className="text-xs text-gray-600 font-medium">
                Transporte Especializado • 40 años de experiencia
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('inicio')}
              className="text-gray-700 hover:text-[#155d29] font-medium transition-colors duration-200 relative group"
            >
              {t('nav.home')}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#155d29] transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection('nosotros')}
              className="text-gray-700 hover:text-[#155d29] font-medium transition-colors duration-200 relative group"
            >
              {t('nav.about')}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#155d29] transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection('servicios')}
              className="text-gray-700 hover:text-[#155d29] font-medium transition-colors duration-200 relative group"
            >
              {t('nav.services')}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#155d29] transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection('proyectos')}
              className="text-gray-700 hover:text-[#155d29] font-medium transition-colors duration-200 relative group"
            >
              {t('nav.projects')}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#155d29] transition-all duration-300 group-hover:w-full"></span>
            </button>
            <Link
              href="/blog"
              className="text-gray-700 hover:text-[#155d29] font-medium transition-colors duration-200 relative group"
            >
              Blog
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#155d29] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <button
              onClick={() => scrollToSection('contacto')}
              className="bg-[#155d29] text-white px-6 py-2.5 rounded-lg hover:bg-[#0f4a21] transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              {t('nav.contact')}
            </button>
          </nav>

          {/* Language Selector & Mobile Menu Button */}
          <div className="flex items-center gap-4">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-200 hover:border-[#155d29] transition-colors duration-200"
              >
                <Globe className="w-4 h-4 text-[#155d29]" />
                <span className="text-sm font-medium">
                  {language === 'es' ? '🇪🇸' : '🇺🇸'}
                </span>
                <ChevronDown className="w-3 h-3" />
              </button>
              
              {isLanguageOpen && (
                <div className="absolute right-0 top-full mt-2 w-32 bg-white border border-gray-200 rounded-lg shadow-xl z-50">
                  <button
                    onClick={() => {
                      setLanguage('es');
                      setIsLanguageOpen(false);
                    }}
                    className={`w-full px-4 py-2 text-left hover:bg-gray-50 rounded-t-lg transition-colors duration-200 flex items-center gap-2 ${language === 'es' ? 'bg-green-50 text-[#155d29]' : ''}`}
                  >
                    🇪🇸 Español
                  </button>
                  <button
                    onClick={() => {
                      setLanguage('en');
                      setIsLanguageOpen(false);
                    }}
                    className={`w-full px-4 py-2 text-left hover:bg-gray-50 rounded-b-lg transition-colors duration-200 flex items-center gap-2 ${language === 'en' ? 'bg-green-50 text-[#155d29]' : ''}`}
                  >
                    🇺🇸 English
                  </button>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-lg border border-gray-200 hover:border-[#155d29] transition-colors duration-200"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-[#155d29]" />
              ) : (
                <Menu className="w-6 h-6 text-[#155d29]" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('inicio')}
                className="text-left py-2 text-gray-700 hover:text-[#155d29] font-medium transition-colors duration-200"
              >
                {t('nav.home')}
              </button>
              <button
                onClick={() => scrollToSection('nosotros')}
                className="text-left py-2 text-gray-700 hover:text-[#155d29] font-medium transition-colors duration-200"
              >
                {t('nav.about')}
              </button>
              <button
                onClick={() => scrollToSection('servicios')}
                className="text-left py-2 text-gray-700 hover:text-[#155d29] font-medium transition-colors duration-200"
              >
                {t('nav.services')}
              </button>
              <button
                onClick={() => scrollToSection('proyectos')}
                className="text-left py-2 text-gray-700 hover:text-[#155d29] font-medium transition-colors duration-200"
              >
                {t('nav.projects')}
              </button>
              <Link
                href="/blog"
                className="text-left py-2 text-gray-700 hover:text-[#155d29] font-medium transition-colors duration-200"
                onClick={closeMenu}
              >
                Blog
              </Link>
              <button
                onClick={() => scrollToSection('contacto')}
                className="text-left bg-[#155d29] text-white px-6 py-3 rounded-lg hover:bg-[#0f4a21] transition-all duration-300 font-medium mt-4"
              >
                {t('nav.contact')}
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}