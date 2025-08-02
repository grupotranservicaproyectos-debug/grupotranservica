import { useState } from "react";
import { Menu, X } from "lucide-react";
import logoTranservica from "@assets/logo transervica sin fondo_1754163034585.png";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <div className="flex items-center">
              <img 
                src={logoTranservica} 
                alt="TRANSERVICA Logo" 
                className="h-16 w-auto mr-4"
              />
              <div>
                <div className="text-3xl font-bold text-transervica-green">TRANSERVICA</div>
                <div className="text-sm text-transervica-gray">40 Años de Experiencia</div>
              </div>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="text-transervica-green hover:text-transervica-light-green px-3 py-2 text-sm font-medium transition"
              >
                Inicio
              </button>
              <button 
                onClick={() => scrollToSection('servicios')}
                className="text-transervica-gray hover:text-transervica-green px-3 py-2 text-sm font-medium transition"
              >
                Servicios
              </button>
              <button 
                onClick={() => scrollToSection('proyectos')}
                className="text-transervica-gray hover:text-transervica-green px-3 py-2 text-sm font-medium transition"
              >
                Proyectos
              </button>
              <button 
                onClick={() => scrollToSection('nosotros')}
                className="text-transervica-gray hover:text-transervica-green px-3 py-2 text-sm font-medium transition"
              >
                Nosotros
              </button>
              <button 
                onClick={() => scrollToSection('contacto')}
                className="bg-transervica-green text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-transervica-light-green transition"
              >
                Cotizar
              </button>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-transervica-green"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="text-transervica-green hover:text-transervica-light-green block px-3 py-2 text-base font-medium w-full text-left"
              >
                Inicio
              </button>
              <button 
                onClick={() => scrollToSection('servicios')}
                className="text-transervica-gray hover:text-transervica-green block px-3 py-2 text-base font-medium w-full text-left"
              >
                Servicios
              </button>
              <button 
                onClick={() => scrollToSection('proyectos')}
                className="text-transervica-gray hover:text-transervica-green block px-3 py-2 text-base font-medium w-full text-left"
              >
                Proyectos
              </button>
              <button 
                onClick={() => scrollToSection('nosotros')}
                className="text-transervica-gray hover:text-transervica-green block px-3 py-2 text-base font-medium w-full text-left"
              >
                Nosotros
              </button>
              <button 
                onClick={() => scrollToSection('contacto')}
                className="bg-transervica-green text-white block px-3 py-2 rounded-lg text-base font-medium hover:bg-transervica-light-green transition w-full text-left"
              >
                Cotizar
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
