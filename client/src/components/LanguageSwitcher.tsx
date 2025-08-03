import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const VenezuelaFlag = () => (
    <svg className="w-6 h-4" viewBox="0 0 21 14" xmlns="http://www.w3.org/2000/svg">
      <rect width="21" height="14" fill="#FFCC00"/>
      <rect width="21" height="4.67" fill="#CF142B"/>
      <rect y="9.33" width="21" height="4.67" fill="#00247D"/>
      <g transform="translate(6.5,7)">
        <circle r="1.5" fill="#FFFFFF"/>
        <g transform="scale(0.7)">
          <polygon points="0,-2 0.6,-0.6 2,0 0.6,0.6 0,2 -0.6,0.6 -2,0 -0.6,-0.6" fill="#FFCC00"/>
          <polygon points="1.5,-1 1.8,-0.3 2.5,0 1.8,0.3 1.5,1 1.2,0.3 0.5,0 1.2,-0.3" fill="#FFCC00"/>
          <polygon points="-1.5,-1 -1.2,-0.3 -0.5,0 -1.2,0.3 -1.5,1 -1.8,0.3 -2.5,0 -1.8,-0.3" fill="#FFCC00"/>
          <polygon points="1.5,1 1.8,1.7 2.5,2 1.8,2.3 1.5,3 1.2,2.3 0.5,2 1.2,1.7" fill="#FFCC00"/>
          <polygon points="-1.5,1 -1.2,1.7 -0.5,2 -1.2,2.3 -1.5,3 -1.8,2.3 -2.5,2 -1.8,1.7" fill="#FFCC00"/>
          <polygon points="0,1.5 0.3,2.2 1,2.5 0.3,2.8 0,3.5 -0.3,2.8 -1,2.5 -0.3,2.2" fill="#FFCC00"/>
          <polygon points="0,-1.5 0.3,-0.8 1,-0.5 0.3,-0.2 0,0.5 -0.3,-0.2 -1,-0.5 -0.3,-0.8" fill="#FFCC00"/>
          <polygon points="2.5,-0.5 2.8,0.2 3.5,0.5 2.8,0.8 2.5,1.5 2.2,0.8 1.5,0.5 2.2,0.2" fill="#FFCC00"/>
        </g>
      </g>
    </svg>
  );

  const UKFlag = () => (
    <svg className="w-6 h-4" viewBox="0 0 21 14" xmlns="http://www.w3.org/2000/svg">
      <rect width="21" height="14" fill="#012169"/>
      <g stroke="#FFFFFF" strokeWidth="1.17">
        <path d="M0,0 L21,14 M21,0 L0,14"/>
      </g>
      <g stroke="#C8102E" strokeWidth="0.78">
        <path d="M0,0 L21,14 M21,0 L0,14"/>
      </g>
      <path stroke="#FFFFFF" strokeWidth="2.33" d="M10.5,0 L10.5,14 M0,7 L21,7"/>
      <path stroke="#C8102E" strokeWidth="1.56" d="M10.5,0 L10.5,14 M0,7 L21,7"/>
    </svg>
  );

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 text-gray-700 hover:text-[#155d29] text-sm font-bold transition uppercase tracking-wide"
      >
        {language === 'es' ? <VenezuelaFlag /> : <UKFlag />}
        <span>{t('language.' + (language === 'es' ? 'spanish' : 'english'))}</span>
        <ChevronDown 
          className={`w-3 h-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>

      {isOpen && (
        <div className="absolute top-full mt-2 right-0 bg-white border border-gray-200 rounded-lg shadow-lg py-2 min-w-[160px] z-50">
          <button
            onClick={() => {
              setLanguage('es');
              setIsOpen(false);
            }}
            className={`w-full flex items-center space-x-3 px-4 py-2 text-sm font-bold transition ${
              language === 'es' 
                ? 'bg-[#155d29] text-white' 
                : 'text-gray-700 hover:bg-gray-50 hover:text-[#155d29]'
            }`}
          >
            <VenezuelaFlag />
            <span>ESPAÑOL</span>
          </button>
          
          <button
            onClick={() => {
              setLanguage('en');
              setIsOpen(false);
            }}
            className={`w-full flex items-center space-x-3 px-4 py-2 text-sm font-bold transition ${
              language === 'en' 
                ? 'bg-[#155d29] text-white' 
                : 'text-gray-700 hover:bg-gray-50 hover:text-[#155d29]'
            }`}
          >
            <UKFlag />
            <span>ENGLISH</span>
          </button>
        </div>
      )}
    </div>
  );
}