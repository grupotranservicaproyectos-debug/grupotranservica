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
    'services.transport.desc': 'Especializados en movilización de cargas pesadas hasta 1,100 toneladas con tecnología alemana de vanguardia.',
    'services.logistics.title': 'Logística de Ingeniería',
    'services.logistics.desc': 'Planificación integral y consultoría especializada para proyectos de transporte complejo.',
    'services.cranes.title': 'Grúas Grove y Liebherr',
    'services.cranes.desc': 'Equipos de izado de alta capacidad para maniobras especializadas y montajes industriales.',
    'services.hydraulic.title': 'Modulares Hidráulicos',
    'services.hydraulic.desc': 'Trailers SCHEUERLE con sistemas hidráulicos para cargas sobredimensionadas.',
    'services.cta': 'SOLICITAR INFORMACIÓN',
    'services.watch': 'VER SERVICIOS',
    
    // About Section
    'about.title': 'SOBRE TRANSERVICA',
    'about.subtitle': '40 años transportando el futuro de Venezuela',
    'about.description': 'Somos una empresa venezolana especializada en transporte de cargas excepcionales con más de 4 décadas de experiencia. Contamos con tecnología alemana SCHEUERLE y un equipo altamente calificado para manejar los proyectos más desafiantes.',
    'about.experience': '40+ Años de Experiencia',
    'about.projects': '1000+ Proyectos Exitosos',
    'about.capacity': '1,100 Toneladas Capacidad',
    'about.equipment': 'Tecnología Alemana',
    'about.cta': 'CONOCER MÁS',
    'about.video': 'VER VIDEO CORPORATIVO',
    'about.benefit1.title': 'Capacidad excepcional hasta 1,100 toneladas',
    'about.benefit1.desc': 'Equipos modulares hidráulicos alemanes de última generación.',
    'about.benefit2.title': 'Cobertura nacional con experiencia comprobada',
    'about.benefit2.desc': '40 años transportando el futuro de Venezuela con éxito.',
    'about.benefit3.title': 'Plataforma integral con soporte 24/7',
    'about.benefit3.desc': 'Seguimiento completo y especialistas disponibles siempre.',
    'about.benefit4.title': 'Soporte personalizado con humanos reales',
    'about.benefit4.desc': 'Especialistas en logística dedicados disponibles en cualquier momento.',
    'about.mission.title': 'Misión',
    'about.mission.text': 'Prestación del servicio de movilización e izamiento de cargas sobredimensionadas mediante el cumplimiento de criterios de seguridad, garantía y confiabilidad, anticipando y respondiendo eficazmente las necesidades de nuestros clientes, procurando el bienestar de nuestros trabajadores y maximizando la productividad.',
    'about.vision.title': 'Visión',
    'about.vision.text': 'Ser una empresa reconocida nacional e internacionalmente en la prestación de servicios de movilización e izamiento de cargas sobredimensionadas, con personal calificado, mejoramiento continuo, aprovechamiento de oportunidades y satisfacción permanente de clientes.',
    'about.cta.title': 'Múltiples Cargas Excepcionales. Una Plataforma. Cero Complicaciones.',
    'about.cta.subtitle': 'Compare cotizaciones de transporte pesado y sobredimensionado, reserve al instante y rastree en tiempo real — todo con TRANSERVICA.',
    'about.cta.quote': 'OBTENER COTIZACIÓN INSTANTÁNEA',
    'about.cta.call': 'HABLAR CON UN ESPECIALISTA',
    
    // Contact Section
    'contact.title': 'Solicita tu Cotización',
    'contact.subtitle': 'Cuéntanos sobre tu proyecto y te proporcionaremos una solución personalizada con la mejor propuesta del mercado.',
    'contact.form.name': 'Nombre',
    'contact.form.name.placeholder': 'Tu nombre completo',
    'contact.form.email': 'Email',
    'contact.form.email.placeholder': 'tu@email.com',
    'contact.form.phone': 'Teléfono',
    'contact.form.phone.placeholder': '+58 424 123 4567',
    'contact.form.company': 'Empresa',
    'contact.form.company.placeholder': 'Nombre de la empresa',
    'contact.form.cargo': 'Tipo de Carga',
    'contact.form.cargo.placeholder': 'Seleccionar tipo',
    'contact.form.cargo.industrial': 'Equipos Industriales',
    'contact.form.cargo.machinery': 'Maquinaria Pesada',
    'contact.form.cargo.turbines': 'Turbinas',
    'contact.form.cargo.oil': 'Equipos Petroleros',
    'contact.form.cargo.naval': 'Construcción Naval',
    'contact.form.cargo.others': 'Otros',
    'contact.form.weight': 'Peso Estimado (Toneladas)',
    'contact.form.weight.placeholder': '100',
    'contact.form.origin': 'Origen',
    'contact.form.origin.placeholder': 'Ciudad de origen',
    'contact.form.destination': 'Destino',
    'contact.form.destination.placeholder': 'Ciudad de destino',
    'contact.form.description': 'Descripción del Proyecto',
    'contact.form.description.placeholder': 'Describe tu proyecto, dimensiones, características especiales, fecha requerida, etc.',
    'contact.form.message': 'Mensaje',
    'contact.form.submit': 'Solicitar Cotización Gratuita',
    'contact.form.sending': 'Enviando...',
    'contact.info.title': 'Información de Contacto',
    'contact.info.phones': 'Teléfonos Principales',
    'contact.info.email': 'Dirección Comercial',
    'contact.info.executive': 'Dirección Ejecutiva',
    'contact.info.address': 'Ubicación',
    'contact.whatsapp': 'Contactar por WhatsApp',
    'contact.address.full': 'Carretera Nacional Maracay Mariara Km 9, Mariara, Edo. Carabobo',
    
    // Footer
    'footer.description': 'Especializados en transporte de cargas excepcionales hasta 1,100 toneladas con trailers modulares hidráulicos. 40 años transportando el futuro de Venezuela con tecnología alemana de vanguardia.',
    'footer.quote.button': 'SOLICITAR COTIZACIÓN',
    'footer.maps.button': 'VER EN GOOGLE MAPS',
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
    'services.transport.desc': 'Specialized in heavy load mobilization up to 1,100 tons with cutting-edge German technology.',
    'services.logistics.title': 'Engineering Logistics',
    'services.logistics.desc': 'Comprehensive planning and specialized consulting for complex transportation projects.',
    'services.cranes.title': 'Grove and Liebherr Cranes',
    'services.cranes.desc': 'High-capacity lifting equipment for specialized maneuvers and industrial assemblies.',
    'services.hydraulic.title': 'Hydraulic Modular',
    'services.hydraulic.desc': 'SCHEUERLE trailers with hydraulic systems for oversized loads.',
    'services.cta': 'REQUEST INFORMATION',
    'services.watch': 'WATCH SERVICES',
    
    // About Section
    'about.title': 'ABOUT TRANSERVICA',
    'about.subtitle': '40 years transporting Venezuela\'s future',
    'about.description': 'We are a Venezuelan company specialized in exceptional cargo transportation with over 4 decades of experience. We feature German SCHEUERLE technology and a highly qualified team to handle the most challenging projects.',
    'about.experience': '40+ Years of Experience',
    'about.projects': '1000+ Successful Projects',
    'about.capacity': '1,100 Tons Capacity',
    'about.equipment': 'German Technology',
    'about.cta': 'LEARN MORE',
    'about.video': 'WATCH CORPORATE VIDEO',
    'about.benefit1.title': 'Exceptional capacity up to 1,100 tons',
    'about.benefit1.desc': 'Latest generation German hydraulic modular equipment.',
    'about.benefit2.title': 'National coverage with proven experience',
    'about.benefit2.desc': '40 years successfully transporting Venezuela\'s future.',
    'about.benefit3.title': 'Comprehensive platform with 24/7 support',
    'about.benefit3.desc': 'Complete tracking and specialists always available.',
    'about.benefit4.title': 'Personalized support with real humans',
    'about.benefit4.desc': 'Dedicated logistics specialists available at any time.',
    'about.mission.title': 'Mission',
    'about.mission.text': 'Providing mobilization and lifting services for oversized cargo through compliance with safety, guarantee and reliability criteria, anticipating and effectively responding to our clients\' needs, ensuring the welfare of our workers and maximizing productivity.',
    'about.vision.title': 'Vision',
    'about.vision.text': 'To be a nationally and internationally recognized company in the provision of mobilization and lifting services for oversized cargo, with qualified personnel, continuous improvement, opportunity utilization and permanent customer satisfaction.',
    'about.cta.title': 'Multiple Exceptional Loads. One Platform. Zero Complications.',
    'about.cta.subtitle': 'Compare heavy and oversized transportation quotes, book instantly and track in real time — all with TRANSERVICA.',
    'about.cta.quote': 'GET INSTANT QUOTE',
    'about.cta.call': 'SPEAK WITH A SPECIALIST',
    
    // Contact Section
    'contact.title': 'Request Your Quote',
    'contact.subtitle': 'Tell us about your project and we will provide you with a personalized solution with the best market proposal.',
    'contact.form.name': 'Name',
    'contact.form.name.placeholder': 'Your full name',
    'contact.form.email': 'Email',
    'contact.form.email.placeholder': 'your@email.com',
    'contact.form.phone': 'Phone',
    'contact.form.phone.placeholder': '+58 424 123 4567',
    'contact.form.company': 'Company',
    'contact.form.company.placeholder': 'Company name',
    'contact.form.cargo': 'Cargo Type',
    'contact.form.cargo.placeholder': 'Select type',
    'contact.form.cargo.industrial': 'Industrial Equipment',
    'contact.form.cargo.machinery': 'Heavy Machinery',
    'contact.form.cargo.turbines': 'Turbines',
    'contact.form.cargo.oil': 'Oil Equipment',
    'contact.form.cargo.naval': 'Naval Construction',
    'contact.form.cargo.others': 'Others',
    'contact.form.weight': 'Estimated Weight (Tons)',
    'contact.form.weight.placeholder': '100',
    'contact.form.origin': 'Origin',
    'contact.form.origin.placeholder': 'Origin city',
    'contact.form.destination': 'Destination',
    'contact.form.destination.placeholder': 'Destination city',
    'contact.form.description': 'Project Description',
    'contact.form.description.placeholder': 'Describe your project, dimensions, special features, required date, etc.',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Request Free Quote',
    'contact.form.sending': 'Sending...',
    'contact.info.title': 'Contact Information',
    'contact.info.phones': 'Main Phones',
    'contact.info.email': 'Corporate Email',
    'contact.info.address': 'Address',
    'contact.address.full': 'National Highway Maracay Mariara Km 9, Mariara, Carabobo State',
    
    // Footer
    'footer.description': 'Specialized in exceptional cargo transportation up to 1,100 tons with hydraulic modular trailers. 40 years transporting Venezuela\'s future with cutting-edge German technology.',
    'footer.quote.button': 'REQUEST QUOTE',
    'footer.maps.button': 'VIEW ON GOOGLE MAPS',
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