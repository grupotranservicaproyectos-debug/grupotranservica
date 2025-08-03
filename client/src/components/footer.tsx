import React, { useState } from 'react';
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { SiTiktok } from 'react-icons/si';
import logoTranservica from "@assets/logo transervica sin fondo_1754163034585.png";
import { useLanguage } from '../contexts/LanguageContext';

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
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Company Info with High Resolution Logo */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="focus:outline-none mb-4"
              >
                <img 
                  src={logoTranservica} 
                  alt="TRANSERVICA Logo" 
                  className="h-16 w-auto max-w-full hover:scale-105 transition-transform duration-300 filter brightness-125 contrast-110"
                  style={{ imageRendering: 'crisp-edges' }}
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
                <a href="#inicio" className="text-gray-300 hover:text-white text-sm transition-colors duration-200">
                  {t('footer.pages.home')}
                </a>
              </li>
              <li>
                <a href="#nosotros" className="text-gray-300 hover:text-white text-sm transition-colors duration-200">
                  {t('footer.pages.about')}
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-gray-300 hover:text-white text-sm transition-colors duration-200">
                  {t('footer.pages.services')}
                </a>
              </li>
              <li>
                <a href="#proyectos" className="text-gray-300 hover:text-white text-sm transition-colors duration-200">
                  {t('footer.pages.projects')}
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-gray-300 hover:text-white text-sm transition-colors duration-200">
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
                <a href="#blog" className="text-gray-300 hover:text-white text-sm transition-colors duration-200">
                  {t('footer.resources.blog')}
                </a>
              </li>
              <li>
                <a href="#equipment" className="text-gray-300 hover:text-white text-sm transition-colors duration-200">
                  {t('footer.resources.equipment')}
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-300 hover:text-white text-sm transition-colors duration-200">
                  {t('footer.resources.help')}
                </a>
              </li>
              <li>
                <a href="#specifications" className="text-gray-300 hover:text-white text-sm transition-colors duration-200">
                  {t('footer.resources.specifications')}
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-300 hover:text-white text-sm transition-colors duration-200">
                  {t('footer.resources.testimonials')}
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h4 className="text-lg font-bold mb-6" style={{ color: '#155d29' }}>
              {t('footer.newsletter.title')}
            </h4>
            <p className="text-gray-300 text-sm mb-4">
              {t('footer.newsletter.description')}
            </p>
            
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
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="mb-8">
            <h4 className="text-xl font-bold mb-6" style={{ color: '#155d29' }}>
              {t('footer.social.title')}
            </h4>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-12 h-12 bg-white rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110 hover:shadow-lg"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6 text-[#1877F2]" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 bg-white rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110 hover:shadow-lg"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6 text-[#E4405F]" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 bg-white rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110 hover:shadow-lg"
                aria-label="YouTube"
              >
                <Youtube className="w-6 h-6 text-[#FF0000]" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 bg-white rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110 hover:shadow-lg"
                aria-label="TikTok"
              >
                <SiTiktok className="w-6 h-6 text-black" />
              </a>
            </div>
            
            {/* Policy Links with Red Icons */}
            <div className="mt-8 space-y-3">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">i</span>
                </div>
                <a href="#privacy" className="text-white hover:text-gray-300 transition-colors duration-200">
                  {t('footer.policies.privacy')}
                </a>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">i</span>
                </div>
                <a href="#security" className="text-white hover:text-gray-300 transition-colors duration-200">
                  {t('footer.policies.security')}
                </a>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">i</span>
                </div>
                <a href="#management" className="text-white hover:text-gray-300 transition-colors duration-200">
                  {t('footer.policies.management')}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 TRANSERVICA C.A. {t('footer.rights')}
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