import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import logoTranservica from "@assets/logo transervica sin fondo_1754163034585.webp";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="flex items-center">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="focus:outline-none focus:ring-2 focus:ring-transervica-green focus:ring-offset-2 rounded-lg"
              aria-label="Ir al inicio - TRANSERVICA"
              data-testid="button-logo-home"
            >
              <img 
                src={logoTranservica} 
                alt="TRANSERVICA Logo - Transporte Cargas Excepcionales Venezuela" 
                width={160}
                height={96}
                className="h-24 w-auto hover:scale-105 transition-transform duration-300"
              />
            </button>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="text-transervica-green hover:text-transervica-light-green px-3 py-2 text-sm font-medium transition"
              >
                {t('nav.home')}
              </button>
              <button 
                onClick={() => scrollToSection('servicios')}
                className="text-transervica-gray hover:text-transervica-green px-3 py-2 text-sm font-medium transition"
              >
                {t('nav.services')}
              </button>
              <button 
                onClick={() => scrollToSection('proyectos')}
                className="text-transervica-gray hover:text-transervica-green px-3 py-2 text-sm font-medium transition"
              >
                {t('nav.projects')}
              </button>
              <button 
                onClick={() => scrollToSection('nosotros')}
                className="text-transervica-gray hover:text-transervica-green px-3 py-2 text-sm font-medium transition"
              >
                {t('nav.company')}
              </button>
              <button 
                onClick={() => scrollToSection('equipos')}
                className="text-transervica-gray hover:text-transervica-green px-3 py-2 text-sm font-medium transition"
              >
                {t('nav.equipment')}
              </button>
              <Link 
                href="/blog"
                className="text-transervica-gray hover:text-transervica-green px-3 py-2 text-sm font-medium transition"
              >
                {t('nav.blog')}
              </Link>
              <button 
                onClick={() => scrollToSection('contacto')}
                className="bg-transervica-green text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-transervica-light-green transition"
              >
                {t('nav.quote')}
              </button>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-transervica-green min-w-[48px] min-h-[48px] flex items-center justify-center p-2"
              aria-label={isMenuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              data-testid="button-mobile-menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden" id="mobile-navigation" role="navigation" aria-label="Menú de navegación móvil">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="text-transervica-green hover:text-transervica-light-green block px-3 py-2 text-base font-medium w-full text-left"
              >
                {t('nav.home')}
              </button>
              <button 
                onClick={() => scrollToSection('servicios')}
                className="text-transervica-gray hover:text-transervica-green block px-3 py-2 text-base font-medium w-full text-left"
              >
                {t('nav.services')}
              </button>
              <button 
                onClick={() => scrollToSection('proyectos')}
                className="text-transervica-gray hover:text-transervica-green block px-3 py-2 text-base font-medium w-full text-left"
              >
                {t('nav.projects')}
              </button>
              <button 
                onClick={() => scrollToSection('nosotros')}
                className="text-transervica-gray hover:text-transervica-green block px-3 py-2 text-base font-medium w-full text-left"
              >
                {t('nav.company')}
              </button>
              <button 
                onClick={() => scrollToSection('equipos')}
                className="text-transervica-gray hover:text-transervica-green block px-3 py-2 text-base font-medium w-full text-left"
              >
                {t('nav.equipment')}
              </button>
              <Link 
                href="/blog"
                className="text-transervica-gray hover:text-transervica-green block px-3 py-2 text-base font-medium w-full text-left"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.blog')}
              </Link>
              <button 
                onClick={() => scrollToSection('contacto')}
                className="bg-transervica-green text-white block px-3 py-2 rounded-lg text-base font-medium hover:bg-transervica-light-green transition w-full text-left"
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
