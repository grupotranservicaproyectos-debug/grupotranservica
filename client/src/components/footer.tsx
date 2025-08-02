import { Mail, Phone, MapPin } from "lucide-react";
import logoTranservica from "@assets/logo transervica sin fondo_1754163034585.png";

export default function Footer() {
  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Logo y Descripción */}
          <div className="lg:col-span-1">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="focus:outline-none mb-8"
            >
              <img 
                src={logoTranservica} 
                alt="TRANSERVICA Logo" 
                className="h-32 w-auto max-w-full hover:scale-105 transition-transform duration-300 filter brightness-125 contrast-110"
                style={{ imageRendering: 'crisp-edges' }}
              />
            </button>
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">TRANSERVICA, C.A.</h3>
              <p className="text-sm text-gray-400 mb-4">RIF: J-00207776-0</p>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Especializados en transporte de cargas excepcionales hasta 1,100 toneladas con trailers modulares hidráulicos. 
              40 años transportando el futuro de Venezuela con tecnología alemana de vanguardia.
            </p>
            
            {/* Información de Contacto */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-sm">
                <Phone className="w-4 h-4 mr-3 text-transervica-green flex-shrink-0" />
                <a href="tel:+584142776340" className="text-gray-300 hover:text-white transition">+58 414 277 6340</a>
              </div>
              <div className="flex items-start text-sm">
                <Mail className="w-4 h-4 mr-3 text-transervica-green flex-shrink-0 mt-0.5" />
                <a href="mailto:direccioncomercialtvc@grupotranservica.com" className="text-gray-300 hover:text-white transition break-all">direccioncomercialtvc@grupotranservica.com</a>
              </div>
              <div className="flex items-start text-sm">
                <MapPin className="w-4 h-4 mr-3 text-transervica-green flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Carretera Nacional Maracay Mariara Km 9, Mariara, Edo. Carabobo</span>
              </div>
            </div>

            {/* Botones de Acción */}
            <div className="flex flex-col gap-3 mb-6">
              <button 
                onClick={scrollToContact}
                className="bg-transervica-green hover:bg-transervica-light-green text-white px-6 py-3 rounded-lg font-bold transition-all duration-300 text-sm"
              >
                SOLICITAR COTIZACIÓN
              </button>
              <a 
                href="https://maps.google.com/?q=Carretera+Nacional+Maracay+Mariara+Km+9+Parcela+6+Sector+Las+Vueltas+Mariara+Carabobo+Venezuela"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-transervica-green text-transervica-green hover:bg-transervica-green hover:text-white px-6 py-3 rounded-lg font-bold transition-all duration-300 text-center text-sm"
              >
                VER EN GOOGLE MAPS
              </a>
            </div>

            {/* Redes Sociales */}
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/grupotranservica" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-transervica-green transition"
                title="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href="https://www.facebook.com/people/Grupotranservica/100093036004743" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-transervica-green transition"
                title="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a 
                href="https://www.youtube.com/@transervicac.a.3092" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-transervica-green transition"
                title="YouTube"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a 
                href="https://wa.me/584142776340?text=Hola%2C%20necesito%20información%20sobre%20transporte%20de%20cargas%20excepcionales" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-transervica-green transition"
                title="WhatsApp"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 2.079.549 4.090 1.588 5.876L.029 24l6.203-1.539a11.952 11.952 0 005.785 1.539c6.621 0 11.988-5.367 11.988-11.988C23.973 5.367 18.638.001 12.017.001zm5.995 16.987c-.264.714-1.291 1.336-1.953 1.428-.663.094-1.526.141-2.438-.154-1.421-.458-3.025-1.609-4.222-3.003-1.197-1.394-1.967-3.045-2.033-3.192-.066-.147-.541-1.447-.541-2.748 0-1.301.341-1.947.463-2.215.122-.268.268-.335.357-.335h.268c.087 0 .201-.003.291.222.09.225.307.751.334.805.027.054.045.116.009.19-.036.074-.054.121-.108.184-.054.063-.113.14-.162.189-.063.049-.128.101-.055.199.073.098.325.537.697.869.481.427 1.055.705 1.206.784.151.079.239.067.327-.041.088-.108.378-.441.479-.592.101-.151.201-.126.338-.076.137.051.87.41 1.018.485.149.074.249.112.285.174.036.062.036.359-.228 1.073z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Servicios */}
          <div>
            <h3 className="text-lg font-semibold text-transervica-green mb-6">Servicios</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#servicios" className="text-gray-300 hover:text-white transition">Transporte Cargas Excepcionales</a></li>
              <li><a href="#servicios" className="text-gray-300 hover:text-white transition">Izamiento con Grúas Alemanas</a></li>
              <li><a href="#servicios" className="text-gray-300 hover:text-white transition">Logística de Ingeniería</a></li>
              <li><a href="#equipos" className="text-gray-300 hover:text-white transition">Equipos SCHEUERLE</a></li>
              <li><a href="#equipos" className="text-gray-300 hover:text-white transition">Grúas Grove y Liebherr</a></li>
            </ul>
          </div>

          {/* Recursos */}
          <div>
            <h3 className="text-lg font-semibold text-transervica-green mb-6">Recursos</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#nosotros" className="text-gray-300 hover:text-white transition">Nosotros</a></li>
              <li><a href="#equipos" className="text-gray-300 hover:text-white transition">Nuestros Equipos</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Casos de Estudio</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Centro de Ayuda</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Documentación Técnica</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">FAQs</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Suscríbete a nuestro newsletter</h3>
            <div className="mb-4">
              <input 
                type="email" 
                placeholder="Work Email" 
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-transervica-green transition"
              />
            </div>
            <button className="w-full bg-transervica-green hover:bg-transervica-light-green text-white px-4 py-3 rounded-lg font-semibold transition-all duration-300">
              →
            </button>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
            <div className="mb-4 lg:mb-0">
              <div className="flex flex-wrap gap-6 text-sm text-gray-400 mb-4 lg:mb-0">
                <a href="#" className="hover:text-white transition">Términos de Servicio</a>
                <a href="#" className="hover:text-white transition">Política de Privacidad</a>
                <a href="#" className="hover:text-white transition">Acuerdo de Cliente</a>
                <a href="#" className="hover:text-white transition">Programa de Recompensas</a>
              </div>
              <p className="text-sm text-gray-400">&copy; 2024 TRANSERVICA, C.A. Todos los derechos reservados.</p>
              <p className="text-xs text-gray-500">RIF: J-00207776-0 | 40 años transportando el futuro de Venezuela</p>
            </div>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/company/transervica" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-transervica-green transition"
                title="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <button 
                onClick={scrollToContact}
                className="bg-transervica-green hover:bg-transervica-light-green text-white px-4 py-2 rounded-lg font-semibold transition text-sm"
              >
                SEGUIR EN REDES
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}