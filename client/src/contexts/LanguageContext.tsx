import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation object
const translations = {
  es: {
    // Navigation
    'nav.home': 'HOME',
    'nav.services': 'SERVICIOS',
    'nav.projects': 'PROYECTOS',
    'nav.company': 'COMPAÑÍA',
    'nav.contact': 'CONTACTO',
    'nav.quote': 'COTIZAR',
    'nav.blog': 'BLOG',
    
    // Hero Section
    'hero.title': 'Transporte Cargas Excepcionales Venezuela - Especializados en Movilización de Cargas Pesada y Sobredimensionada',
    'hero.subtitle': 'CON 40 AÑOS TRANSPORTANDO EL FUTURO DE VENEZUELA',
    'hero.description': 'Especializados en Movilización de Cargas Pesadas y Sobredimensionadas hasta 1,100 toneladas con trailers Modulares Hidráulicos de última generación.',
    'hero.cta': 'SOLICITAR COTIZACIÓN',
    'hero.video': 'VER VIDEO CORPORATIVO',
    
    // Services Section
    'services.title': 'NUESTROS SERVICIOS',
    'services.subtitle': 'Soluciones especializadas en transporte de cargas excepcionales',
    'services.transport.title': 'Transporte de Cargas Excepcionales',
    'services.transport.desc': 'Trailers modulares hidráulicos SCHEUERLE para cargas hasta 1,100 toneladas',
    'services.cranes.title': 'Grúas Grove y Liebherr',
    'services.cranes.desc': 'Equipos de izado especializados con capacidades desde 25 hasta 500 toneladas',
    'services.logistics.title': 'Logística de Ingeniería',
    'services.logistics.desc': 'Planificación integral de proyectos de transporte especializado',
    'services.cta': 'SOLICITAR INFORMACIÓN',
    
    // About Section
    'about.title': 'SOBRE TRANSERVICA',
    'about.subtitle': '40 años transportando el futuro de Venezuela',
    'about.description': 'Somos una empresa venezolana especializada en transporte de cargas excepcionales con más de 4 décadas de experiencia. Contamos con tecnología alemana SCHEUERLE y un equipo altamente calificado.',
    'about.experience': '40+ Años de Experiencia',
    'about.projects': '1000+ Proyectos Exitosos',
    'about.capacity': '1,100 Toneladas Capacidad',
    'about.equipment': 'Tecnología Alemana',
    
    // Contact Section
    'contact.title': 'CONTACTO',
    'contact.subtitle': 'Estamos aquí para ayudarte con tu proyecto',
    'contact.form.name': 'Nombre',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Teléfono',
    'contact.form.company': 'Empresa',
    'contact.form.message': 'Mensaje',
    'contact.form.submit': 'ENVIAR MENSAJE',
    'contact.info.title': 'Información de Contacto',
    'contact.info.phones': 'Teléfonos Principales',
    'contact.info.email': 'Email Corporativo',
    'contact.info.address': 'Dirección',
    'contact.address.full': 'Carretera Nacional Maracay Mariara Km 9, Mariara, Edo. Carabobo',
    
    // Footer
    'footer.services.title': 'Servicios',
    'footer.services.transport': 'Transporte Especializado',
    'footer.services.engineering': 'Logística de Ingeniería',
    'footer.services.hydraulic': 'Modulares Hidráulicos',
    'footer.services.cranes': 'Grúas Grove y Liebherr',
    'footer.resources.title': 'Recursos',
    'footer.resources.about': 'Nosotros',
    'footer.resources.equipment': 'Nuestros Equipos',
    'footer.resources.blog': 'Blog Corporativo',
    'footer.resources.help': 'Centro de Ayuda',
    'footer.resources.docs': 'Documentación Técnica',
    'footer.resources.faq': 'FAQs',
    'footer.newsletter.title': 'Suscríbete a nuestro newsletter',
    'footer.newsletter.placeholder': 'Email de trabajo',
    'footer.copyright': '© 2024 TRANSERVICA, C.A. Todos los derechos reservados.',
    'footer.rif': 'RIF: J-00207776-0 | 40 años transportando el futuro de Venezuela',
    'footer.follow': 'SEGUIR EN REDES',
    
    // Language Switcher
    'language.spanish': 'ESPAÑOL',
    'language.english': 'ENGLISH',
    
    // Blog
    'blog.title': 'TRANSERVICA BLOG',
    'blog.subtitle': 'Noticias y proyectos de transporte especializado',
    'blog.readMore': 'LEER MÁS',
    'blog.backToHome': 'VOLVER AL INICIO'
  },
  en: {
    // Navigation
    'nav.home': 'HOME',
    'nav.services': 'SERVICES',
    'nav.projects': 'PROJECTS',
    'nav.company': 'COMPANY',
    'nav.contact': 'CONTACT',
    'nav.quote': 'QUOTE',
    'nav.blog': 'BLOG',
    
    // Hero Section
    'hero.title': 'Exceptional Heavy Cargo Transportation Venezuela - Specialized in Heavy and Oversized Load Movement',
    'hero.subtitle': '40 YEARS TRANSPORTING VENEZUELA\'S FUTURE',
    'hero.description': 'Specialized in Heavy and Oversized Load Movement up to 1,100 tons with latest generation Hydraulic Modular trailers.',
    'hero.cta': 'REQUEST QUOTE',
    'hero.video': 'WATCH CORPORATE VIDEO',
    
    // Services Section
    'services.title': 'OUR SERVICES',
    'services.subtitle': 'Specialized solutions for exceptional cargo transportation',
    'services.transport.title': 'Exceptional Cargo Transportation',
    'services.transport.desc': 'SCHEUERLE hydraulic modular trailers for loads up to 1,100 tons',
    'services.cranes.title': 'Grove and Liebherr Cranes',
    'services.cranes.desc': 'Specialized lifting equipment with capacities from 25 to 500 tons',
    'services.logistics.title': 'Engineering Logistics',
    'services.logistics.desc': 'Comprehensive planning for specialized transportation projects',
    'services.cta': 'REQUEST INFORMATION',
    
    // About Section
    'about.title': 'ABOUT TRANSERVICA',
    'about.subtitle': '40 years transporting Venezuela\'s future',
    'about.description': 'We are a Venezuelan company specialized in exceptional cargo transportation with over 4 decades of experience. We feature German SCHEUERLE technology and a highly qualified team.',
    'about.experience': '40+ Years of Experience',
    'about.projects': '1000+ Successful Projects',
    'about.capacity': '1,100 Tons Capacity',
    'about.equipment': 'German Technology',
    
    // Contact Section
    'contact.title': 'CONTACT',
    'contact.subtitle': 'We are here to help you with your project',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Phone',
    'contact.form.company': 'Company',
    'contact.form.message': 'Message',
    'contact.form.submit': 'SEND MESSAGE',
    'contact.info.title': 'Contact Information',
    'contact.info.phones': 'Main Phones',
    'contact.info.email': 'Corporate Email',
    'contact.info.address': 'Address',
    'contact.address.full': 'National Highway Maracay Mariara Km 9, Mariara, Carabobo State',
    
    // Footer
    'footer.services.title': 'Services',
    'footer.services.transport': 'Specialized Transportation',
    'footer.services.engineering': 'Engineering Logistics',
    'footer.services.hydraulic': 'Hydraulic Modular',
    'footer.services.cranes': 'Grove and Liebherr Cranes',
    'footer.resources.title': 'Resources',
    'footer.resources.about': 'About Us',
    'footer.resources.equipment': 'Our Equipment',
    'footer.resources.blog': 'Corporate Blog',
    'footer.resources.help': 'Help Center',
    'footer.resources.docs': 'Technical Documentation',
    'footer.resources.faq': 'FAQs',
    'footer.newsletter.title': 'Subscribe to our newsletter',
    'footer.newsletter.placeholder': 'Work Email',
    'footer.copyright': '© 2024 TRANSERVICA, C.A. All rights reserved.',
    'footer.rif': 'RIF: J-00207776-0 | 40 years transporting Venezuela\'s future',
    'footer.follow': 'FOLLOW ON SOCIAL',
    
    // Language Switcher
    'language.spanish': 'ESPAÑOL',
    'language.english': 'ENGLISH',
    
    // Blog
    'blog.title': 'TRANSERVICA BLOG',
    'blog.subtitle': 'News and specialized transportation projects',
    'blog.readMore': 'READ MORE',
    'blog.backToHome': 'BACK TO HOME'
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('es');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['es']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}