import React, { useState } from 'react';
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import logoTranservica from "@assets/logo transervica sin fondo_1754163034585.webp";
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

  // Enhanced navigation function for better performance
  const navigateToSection = (sectionId: string) => {
    if (window.location.pathname === '/blog') {
      // If we're on the blog page, navigate to home with section
      window.location.href = `/#${sectionId}`;
    } else {
      // If we're on the home page, scroll directly
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto mobile-padding">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
          
          {/* Company Info with High Resolution Logo */}
          <div className="lg:col-span-1">
            <div className="mb-8">
              <button 
                onClick={() => navigateToSection('inicio')}
                className="focus:outline-none mb-4"
              >
                <img 
                  src={logoTranservica} 
                  alt="TRANSERVICA Logo - Transporte Cargas Excepcionales Venezuela"
                  loading="lazy"
                  width={128}
                  height={96}
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
                <span className="text-sm">+58 422-6361047</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-3" style={{ color: '#155d29' }} />
                <span className="text-sm">+58 412-367-5636</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-3" style={{ color: '#155d29' }} />
                <span className="text-sm">+58 414-277-6340</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-3" style={{ color: '#155d29' }} />
                <span className="text-sm">direccioncomercialtvc@grupotranservica.com</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-3" style={{ color: '#155d29' }} />
                <span className="text-sm">direccionejecutivatvc@grupotranservica.com</span>
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
                <button 
                  onClick={() => navigateToSection('inicio')}
                  className="text-gray-300 hover:text-white text-sm transition-colors duration-200 text-left"
                >
                  {t('footer.pages.home')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateToSection('nosotros')}
                  className="text-gray-300 hover:text-white text-sm transition-colors duration-200 text-left"
                >
                  {t('footer.pages.about')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateToSection('servicios')}
                  className="text-gray-300 hover:text-white text-sm transition-colors duration-200 text-left"
                >
                  {t('footer.pages.services')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateToSection('proyectos')}
                  className="text-gray-300 hover:text-white text-sm transition-colors duration-200 text-left"
                >
                  {t('footer.pages.projects')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateToSection('contacto')}
                  className="text-gray-300 hover:text-white text-sm transition-colors duration-200 text-left"
                >
                  {t('footer.pages.contact')}
                </button>
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
                <a 
                  href="/blog" 
                  className="text-gray-300 hover:text-white text-sm transition-colors duration-200"
                >
                  {t('footer.resources.blog')}
                </a>
              </li>
              <li>
                <button 
                  onClick={() => navigateToSection('equipos')}
                  className="text-gray-300 hover:text-white text-sm transition-colors duration-200 text-left"
                >
                  {t('footer.resources.equipment')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateToSection('contacto')}
                  className="text-gray-300 hover:text-white text-sm transition-colors duration-200 text-left"
                >
                  {t('footer.resources.help')}
                </button>
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
              {t('footer.copyright')}
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors duration-200">
                {t('footer.legal.terms')}
              </Link>
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors duration-200">
                {t('footer.legal.privacy')}
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-white transition-colors duration-200">
                {t('footer.legal.cookies')}
              </Link>
              <Link href="/security" className="text-gray-400 hover:text-white transition-colors duration-200">
                {t('footer.legal.security')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}