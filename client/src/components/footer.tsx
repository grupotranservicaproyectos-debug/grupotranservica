import React, { useState } from 'react';
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin, Truck, Award, Clock, Globe, ArrowRight } from 'lucide-react';
import logoTranservica from "@assets/logo transervica sin fondo_1754163034585.png";
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'wouter';

export default function Footer() {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-[#155d29]/20 text-white py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 bg-[#155d29] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-orange-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto mobile-padding relative z-10">
        {/* Company Stats Section */}
        <div className="bg-gradient-to-r from-[#155d29] to-[#0f4a21] rounded-2xl p-8 mb-12 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-3">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">40+</h3>
              <p className="text-green-100 text-sm">Años de Experiencia</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-3">
                <Truck className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">1,100</h3>
              <p className="text-green-100 text-sm">Toneladas Máximas</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-3">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">15,000+</h3>
              <p className="text-green-100 text-sm">Proyectos Exitosos</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-3">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">99.8%</h3>
              <p className="text-green-100 text-sm">Éxito en Seguridad</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
          
          {/* Company Info with High Resolution Logo */}
          <div className="lg:col-span-1">
            <div className="mb-8">
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="focus:outline-none mb-4"
              >
                <img 
                  src={logoTranservica} 
                  alt="TRANSERVICA Logo" 
                  className="h-24 md:h-28 lg:h-32 w-auto max-w-full hover:scale-105 transition-transform duration-300 filter brightness-150 contrast-125 drop-shadow-lg"
                  style={{ 
                    imageRendering: 'crisp-edges',
                    filter: 'brightness(1.5) contrast(1.25) drop-shadow(0 4px 8px rgba(0,0,0,0.3))'
                  }}
                />
              </button>
            </div>
            
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              {t('footer.description')}
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-3" style={{ color: '#155d29' }} />
                <span className="text-sm">+58 414-277-6340</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-3" style={{ color: '#155d29' }} />
                <span className="text-sm">+58 412-441-8890</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-3" style={{ color: '#155d29' }} />
                <span className="text-sm">direccioncomercialtvc@grupotranservica.com</span>
              </div>
              <div className="flex items-start">
                <MapPin className="w-4 h-4 mr-3 mt-1" style={{ color: '#155d29' }} />
                <span className="text-sm">Carretera Nacional Maracay Mariara Km 9, Mariara, Edo. Carabobo</span>
              </div>
            </div>
          </div>

          {/* Pages/Navigation */}
          <div>
            <h4 className="text-lg font-bold mb-6" style={{ color: '#155d29' }}>
              {t('footer.pages.title')}
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#inicio" className="text-gray-300 hover:text-[#155d29] text-sm transition-colors duration-200 flex items-center gap-2 group">
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  {t('footer.pages.home')}
                </a>
              </li>
              <li>
                <a href="#nosotros" className="text-gray-300 hover:text-[#155d29] text-sm transition-colors duration-200 flex items-center gap-2 group">
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  {t('footer.pages.about')}
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-gray-300 hover:text-[#155d29] text-sm transition-colors duration-200 flex items-center gap-2 group">
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  {t('footer.pages.services')}
                </a>
              </li>
              <li>
                <a href="#proyectos" className="text-gray-300 hover:text-[#155d29] text-sm transition-colors duration-200 flex items-center gap-2 group">
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  {t('footer.pages.projects')}
                </a>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-[#155d29] text-sm transition-colors duration-200 flex items-center gap-2 group">
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  Blog Corporativo
                </Link>
              </li>
              <li>
                <a href="#contacto" className="text-gray-300 hover:text-[#155d29] text-sm transition-colors duration-200 flex items-center gap-2 group">
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  {t('footer.pages.contact')}
                </a>
              </li>
            </ul>
          </div>

          {/* Resources/Services */}
          <div>
            <h4 className="text-lg font-bold mb-6" style={{ color: '#155d29' }}>
              {t('footer.resources.title')}
            </h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/blog" 
                  className="text-gray-300 hover:text-[#155d29] text-sm transition-colors duration-200 flex items-center gap-2 group"
                >
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  {t('footer.resources.blog')}
                </Link>
              </li>
              <li>
                <a href="#servicios" className="text-gray-300 hover:text-[#155d29] text-sm transition-colors duration-200 flex items-center gap-2 group">
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  {t('footer.resources.equipment')}
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-gray-300 hover:text-[#155d29] text-sm transition-colors duration-200 flex items-center gap-2 group">
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  Centro de Ayuda
                </a>
              </li>
              <li>
                <a href="#nosotros" className="text-gray-300 hover:text-[#155d29] text-sm transition-colors duration-200 flex items-center gap-2 group">
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  Certificaciones ISO
                </a>
              </li>
              
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h4 className="text-lg font-bold mb-6" style={{ color: '#155d29' }}>
              {t('footer.newsletter.title')}
            </h4>
            
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t('footer.newsletter.placeholder')}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#155d29] focus:ring-1 focus:ring-[#155d29] transition-colors duration-200"
                required
              />
              <button
                type="submit"
                className="w-full text-white font-bold py-3 px-4 rounded-lg transition-all duration-200 hover:opacity-90 transform hover:scale-[1.02]"
                style={{ backgroundColor: '#155d29' }}
              >
                {t('footer.newsletter.subscribe')}
              </button>
            </form>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="mt-16 pt-12 border-t border-gray-700">
          <div className="text-center mb-12">
            <h4 className="text-2xl font-bold mb-4" style={{ color: '#155d29' }}>
              {t('footer.social.title')}
            </h4>
            <div className="w-24 h-1 mx-auto mb-8 rounded-full" style={{ backgroundColor: '#155d29' }}></div>
            
            {/* Clean Social Media Icons */}
            <div className="flex justify-center space-x-8 mb-12">
              <a 
                href="https://www.facebook.com/people/Grupotranservica/100093036004743" 
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-8 h-8 text-[#1877F2] transition-all duration-300 hover:scale-110" />
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-xs text-gray-400 font-medium">Facebook</span>
                </div>
              </a>
              
              <a 
                href="https://www.instagram.com/grupotranservica" 
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-8 h-8 text-[#E4405F] transition-all duration-300 hover:scale-110" />
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-xs text-gray-400 font-medium">Instagram</span>
                </div>
              </a>
              
              <a 
                href="https://www.youtube.com/@transervicac.a.3092" 
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="YouTube"
              >
                <Youtube className="w-8 h-8 text-[#FF0000] transition-all duration-300 hover:scale-110" />
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-xs text-gray-400 font-medium">YouTube</span>
                </div>
              </a>
            </div>
            
            
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2025 TRANSERVICA C.A. - Todos los Derechos Reservados.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#terms" className="text-gray-400 hover:text-white transition-colors duration-200">
                {t('footer.legal.terms')}
              </a>
              <a href="#privacy" className="text-gray-400 hover:text-white transition-colors duration-200">
                {t('footer.legal.privacy')}
              </a>
              <a href="#cookies" className="text-gray-400 hover:text-white transition-colors duration-200">
                {t('footer.legal.cookies')}
              </a>
              <a href="#security" className="text-gray-400 hover:text-white transition-colors duration-200">
                {t('footer.legal.security')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}