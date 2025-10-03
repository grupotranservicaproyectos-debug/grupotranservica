import { useState } from "react";
import { Calendar, User, ArrowRight, Eye, MessageCircle, ChevronLeft, ChevronRight, Truck, Settings, Shield, Award } from "lucide-react";
import { Link } from 'wouter';
import { useLanguage } from '../contexts/LanguageContext';
import transportImage1 from "@assets/1_1754173669382.webp";
import transportImage2 from "@assets/2_1754173669382.webp";
import transportImage3 from "@assets/3_1754173669382.webp";
import transportImage4 from "@assets/4_1754173669383.webp";
import transportImage5 from "@assets/5_1754173669383.webp";
import equipmentImage1 from "@assets/7_1754162276863.webp";
import equipmentImage2 from "@assets/8_1754162276863.webp";
import equipmentImage3 from "@assets/9_1754162276864.webp";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  views: number;
  comments: number;
  category: string;
  image: string;
  featured: boolean;
}

export default function BlogSection() {
  const { t } = useLanguage();

  const [currentSlide, setCurrentSlide] = useState(0);

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Transporte de Autotransformador de 170 Toneladas desde Puerto Cabello hasta Villa de Cura",
      excerpt: "Traslado exitoso de autotransformador de grandes dimensiones (6.76m x 5.30m x 170 ton) mediante viga portante y equipo hidráulico de 16 ejes, posicionándose en las inmediaciones del antiguo peaje de Santa Clara, Carabobo.",
      content: "Este proyecto representó un desafío técnico significativo en el transporte de equipamiento eléctrico de alta capacidad. El autotransformador, con dimensiones de 6.76 metros de largo por 5.30 metros de alto y un peso aproximado de 170 toneladas, fue transportado desde Puerto Cabello, estado Carabobo, hasta Villa de Cura, estado Aragua. TRANSERVICA utilizó viga portante especializada con equipo modular hidráulico de 16 ejes para garantizar la estabilidad y seguridad de la carga durante todo el recorrido. La operación incluyó un posicionamiento estratégico en las inmediaciones del antiguo peaje de Santa Clara para realizar ajustes técnicos y verificaciones de seguridad. El proyecto requirió planificación detallada de la ruta, coordinación con autoridades de tránsito y análisis estructural de puentes y viaductos. El transporte se ejecutó con éxito cumpliendo todos los protocolos de seguridad y tiempos establecidos, consolidando nuestra experiencia en el manejo de equipos eléctricos de alta tensión.",
      author: "Ing. Carlos Rodríguez",
      date: "2024-12-15",
      readTime: "8 min",
      views: 2456,
      comments: 23,
      category: "Proyectos Destacados",
      image: transportImage1,
      featured: true
    },
    {
      id: 2,
      title: "Transporte de Power House Modular en Estado Carabobo: 4 Módulos de 35 Toneladas",
      excerpt: "Movilización exitosa de Power House dividido en 4 módulos de caseta utilizando equipo modular hidráulico de 8 ejes en línea. Dimensiones por módulo: 16.00 x 4.00 x 3.70 metros, peso 35 toneladas cada uno.",
      content: "TRANSERVICA completó con éxito el transporte terrestre de un Power House completo dividido en cuatro módulos de caseta en el estado Carabobo. Cada módulo presentaba dimensiones considerables de 16.00 metros de largo por 4.00 metros de ancho y 3.70 metros de alto, con un peso individual de 35 toneladas. Para esta operación especializada, se utilizó equipo modular hidráulico de 8 ejes dispuestos en línea, lo que permitió una distribución óptima del peso y máxima maniobrabilidad en las rutas seleccionadas. El proyecto demandó coordinación sincronizada para el transporte de los cuatro módulos, asegurando que cada unidad llegara en perfectas condiciones al sitio de instalación. La operación incluyó estudios de factibilidad de ruta, análisis de restricciones de altura en puntos críticos, y coordinación con servicios públicos para el manejo temporal de cableado eléctrico y señalización. Este proyecto demuestra la capacidad de TRANSERVICA para manejar proyectos modulares complejos que requieren múltiples movilizaciones coordinadas con precisión milimétrica.",
      author: "Ing. María Fernández",
      date: "2024-11-28",
      readTime: "7 min",
      views: 1834,
      comments: 15,
      category: "Proyectos Destacados",
      image: transportImage2,
      featured: true
    },
    {
      id: 3,
      title: "Reactor Monofásico de 70 Toneladas: Puerto Cabello a Subestación San Gerónimo, Anzoátegui",
      excerpt: "Transporte terrestre especializado de reactor monofásico de potencia con equipo modular hidráulico 3+3 y plataforma intermedia. Dimensiones: 3.93 x 4.40 x 4.35 metros, peso 70 toneladas.",
      content: "TRANSERVICA ejecutó exitosamente el transporte de un reactor monofásico de potencia de 70 toneladas desde Puerto Cabello, estado Carabobo, hasta la Subestación Eléctrica San Gerónimo, estado Anzoátegui. Este proyecto requirió equipamiento especializado, utilizando configuración modular hidráulica 3+3 con plataforma intermedia, especialmente diseñada para distribuir el peso del reactor de manera óptima. Las dimensiones del reactor (3.93m x 4.40m x 4.35m) presentaron desafíos específicos en términos de altura y centro de gravedad, requiriendo cálculos precisos de estabilidad. El recorrido de varios cientos de kilómetros atravesó múltiples estados, demandando permisos especiales del INTT, coordinación con autoridades estadales y municipales, y planificación detallada de puntos de control y descanso. La operación incluyó escolta especializada, monitoreo GPS en tiempo real y comunicación constante con el equipo técnico de la subestación receptora. El reactor fue entregado en perfectas condiciones, cumpliendo con los estrictos estándares de la industria eléctrica y demostrando la capacidad de TRANSERVICA para proyectos de largo recorrido con cargas sensibles.",
      author: "Ing. Roberto Silva",
      date: "2024-11-10",
      readTime: "9 min",
      views: 3245,
      comments: 41,
      category: "Proyectos Destacados",
      image: transportImage3,
      featured: false
    },
    {
      id: 4,
      title: "Transformador 333MVA de 180 Toneladas: Puerto Cabello a Subestación SUR, Miranda",
      excerpt: "Transporte especializado de transformador de alta capacidad utilizando viga portante de 16 ejes. Dimensiones: 6.42 x 4.67 x 4.40 metros, peso 180 toneladas.",
      content: "En uno de los proyectos más exigentes del año, TRANSERVICA transportó un transformador de 333MVA con peso de 180 toneladas desde Puerto Cabello, estado Carabobo, hasta la Subestación Eléctrica SUR en el estado Miranda. El transformador presentaba dimensiones críticas de 6.42 metros de largo, 4.67 metros de ancho y 4.40 metros de alto, requiriendo el uso de viga portante de 16 ejes para garantizar la distribución adecuada del peso y máxima estabilidad durante el transporte. La operación atravesó zonas urbanas densamente pobladas, incluyendo el área metropolitana de Caracas, lo que demandó coordinación exhaustiva con múltiples autoridades municipales y estatales. El proyecto incluyó estudios estructurales de puentes y viaductos en la ruta, análisis de restricciones de altura en pasos a desnivel, y planificación de horarios de tránsito nocturno para minimizar el impacto en el flujo vehicular. El equipo de TRANSERVICA trabajó en estrecha colaboración con ingenieros de la empresa eléctrica nacional para asegurar que el transformador llegara en condiciones óptimas para su instalación inmediata. Este proyecto consolida la posición de TRANSERVICA como líder en transporte de equipamiento eléctrico de alta capacidad en Venezuela.",
      author: "Ing. Luis Martínez",
      date: "2024-10-22",
      readTime: "10 min",
      views: 1967,
      comments: 28,
      category: "Proyectos Destacados",
      image: transportImage4,
      featured: false
    },
    {
      id: 5,
      title: "40 Años Transportando el Futuro: Historia de TRANSERVICA",
      excerpt: "Un recorrido por cuatro décadas de liderazgo en transporte especializado, desde nuestros inicios hasta convertirnos en la empresa líder del sector en Venezuela.",
      content: "TRANSERVICA fue fundada en 1984 con la visión de revolucionar el transporte de cargas excepcionales en Venezuela. Iniciamos operaciones con una flota de 3 trailers convencionales y un equipo de 12 profesionales, enfocados en atender las necesidades del sector petrolero nacional. Durante los años 90, invertimos en tecnología europea adquiriendo nuestros primeros trailers modulares SCHEUERLE, convirtiéndonos en pioneros del transporte especializado. En la década del 2000, expandimos servicios hacia los sectores petroquímico, siderúrgico y de infraestructura, participando en proyectos emblemáticos como el transporte de equipos para el Metro de Caracas y la ampliación de refinerías. Los años 2010 marcaron nuestra consolidación internacional con certificaciones ISO 9001, ISO 14001 y OHSAS 18001. Hoy, con 40 años de experiencia, operamos la flota más moderna de Sudamérica con capacidad para transportar hasta 1,100 toneladas, manteniendo un record de seguridad del 99.8% y habiendo ejecutado más de 15,000 proyectos exitosos.",
      author: "Dirección General",
      date: "2024-10-05",
      readTime: "15 min",
      views: 4521,
      comments: 67,
      category: "Historia Corporativa",
      image: transportImage3,
      featured: true
    },
    {
      id: 6,
      title: "Mantenimiento Preventivo de Trailers Modulares: Claves del Éxito Operativo",
      excerpt: "Protocolo detallado de mantenimiento para trailers modulares hidráulicos, garantizando máxima disponibilidad y seguridad en operaciones críticas.",
      content: "El mantenimiento preventivo es esencial para garantizar la operatividad continua de nuestros trailers modulares SCHEUERLE. TRANSERVICA implementa un protocolo riguroso de mantenimiento basado en estándares internacionales que incluye inspecciones diarias, semanales, mensuales y anuales. Cada trailer cuenta con un historial digital completo que registra horas de operación, cargas transportadas, rutas utilizadas y todas las intervenciones de mantenimiento. Los sistemas hidráulicos reciben atención especial con cambios de fluido cada 1,000 horas, inspección de cilindros cada 500 horas y calibración de válvulas cada 250 horas. Los sistemas de dirección y suspensión se revisan cada 100 horas de operación, mientras que los neumáticos especializados se inspeccionan antes de cada proyecto. Nuestro taller cuenta con equipos de diagnóstico computarizados, banco de pruebas hidráulicas y personal certificado por SCHEUERLE. Este protocolo nos permite mantener una disponibilidad operativa del 98.5% y garantizar la seguridad en cada transporte, cumpliendo con las más exigentes normas internacionales de calidad.",
      author: "Ing. Luis Martínez",
      date: "2024-09-18",
      readTime: "9 min",
      views: 2103,
      comments: 19,
      category: "Mantenimiento",
      image: equipmentImage3,
      featured: false
    },
    {
      id: 7,
      title: "Maniobra de Traslado de Vagones: Puerto Cabello - Charallave",
      excerpt: "Transporte especializado de vagones del Instituto de Ferrocarriles del Estado (IFE Charallave) utilizando equipo modular Cometto 4+4 y Cappon 4+4 con plataforma intermedia. Capacidad por eje: 25,000 kg.",
      content: "TRANSERVICA ejecutó exitosamente la maniobra de traslado de vagones ferroviarios del Instituto de Ferrocarriles del Estado (IFE Charallave) desde Puerto Cabello hasta Charallave. Este proyecto de logística especializada involucró el transporte de dos tipos de vagones con dimensiones excepcionales:\n\n✅ Vagón Tipo 1: 26.013m de largo × 3.326m de alto × 2.974m de ancho, con peso de 32 toneladas\n✅ Vagón Tipo 2: 25.866m de largo × 3.63m de alto × 2.974m de ancho, con peso de 32 toneladas\n\nLa operación se desarrolló durante cinco (5) días, ejecutando el traslado desde la Represa Macagua hasta la Represa Simón Bolívar-Guri en el estado Bolívar. Para garantizar la seguridad y estabilidad de las cargas, TRANSERVICA implementó equipos especializados de última generación:\n\n🔧 Operación a Costado de Buque para la carga inicial\n🔧 Cometto 4+4 con Plataforma Intermedia\n🔧 Cappon 4+4 con Plataforma Intermedia\n🔧 Capacidad por eje: 25,000 kg\n🔧 Traslado de Vagones con Cometto 2+2\n\nEste proyecto demostró la capacidad de TRANSERVICA para manejar cargas de gran longitud que requieren equipamiento modular hidráulico con configuraciones especiales. La coordinación logística incluyó permisos de tránsito especiales, escolta de seguridad, y planificación de rutas que consideraron las dimensiones excepcionales de los vagones. El traslado se completó exitosamente, cumpliendo con todos los estándares de seguridad del sector ferroviario y los tiempos establecidos con el cliente.",
      author: "Ing. Carlos Rodríguez",
      date: "2024-12-20",
      readTime: "8 min",
      views: 1523,
      comments: 18,
      category: "Proyectos Destacados",
      image: transportImage5,
      featured: true
    },
    {
      id: 8,
      title: "Transporte Transformador 420 MVA: Represa Simón Bolívar-Guri",
      excerpt: "Proyecto de máxima capacidad en el Estado Bolívar: Transporte de transformador de 420 MVA desde Represa Macagua hasta Represa Simón Bolívar-Guri. Peso: 245 toneladas, Equipo: Cometto modular (8+8) ejes.",
      content: "TRANSERVICA ejecutó exitosamente uno de los proyectos de transporte eléctrico de mayor envergadura en el Estado Bolívar: el traslado de un transformador de 420 MVA desde la Represa Macagua hasta la Represa Simón Bolívar-Guri.\n\n**Especificaciones Técnicas del Transformador 420 MVA:**\n\n✅ Potencia nominal: 420 MVA (mega voltios amperios)\n✅ Peso total: 245 toneladas\n✅ Dimensiones: 8.45 metros de largo × 4.9 metros de alto × 4.55 metros de ancho\n✅ Destino: Represa Simón Bolívar-Guri, Estado Bolívar\n✅ Duración del proyecto: 5 días de traslado\n\n**Equipos Especializados de Alta Capacidad:**\n\nPara este proyecto de infraestructura crítica nacional, TRANSERVICA desplegó equipamiento de última generación:\n\n🔧 Marca: Cometto\n🔧 Configuración: Trailer modular hidráulico (8+8) ejes + Transpor Frame\n🔧 Capacidad por eje: 25,000 kg\n🔧 Capacidad total del sistema: 400,000 kg (400 toneladas)\n\n**Desafío Hidroeléctrico Nacional:**\n\nEste transporte representa uno de los proyectos más importantes para la infraestructura energética de Venezuela. El transformador de 420 MVA es esencial para la operación del Complejo Hidroeléctrico Simón Bolívar (Represa de Guri), la principal fuente de generación eléctrica del país.\n\nLa configuración especial de 16 ejes (8+8) con Transpor Frame permitió distribuir uniformemente las 245 toneladas del transformador, garantizando estabilidad y seguridad durante los cinco días de operación en territorio bolivarense.\n\n**Logros del Proyecto:**\n\n✅ Transformador 420 MVA transportado exitosamente\n✅ 245 toneladas movilizadas con sistema Cometto (8+8) ejes\n✅ Traslado Represa Macagua → Represa Guri completado\n✅ Proyecto hidroeléctrico de importancia nacional\n✅ Operación de 5 días ejecutada sin incidentes\n\nEste proyecto consolida a TRANSERVICA como el socio estratégico para proyectos de infraestructura energética de máxima complejidad en Venezuela, demostrando nuestra capacidad para movilizar equipos de potencia ultra-alta con los más altos estándares de seguridad y eficiencia operativa.",
      author: "Ing. Roberto Mendoza",
      date: "2025-01-15",
      readTime: "9 min",
      views: 2156,
      comments: 27,
      category: "Proyectos Destacados",
      image: transportImage1,
      featured: true
    }
  ];

  const categories = [
    "Todos",
    "Proyectos Destacados", 
    "Equipos y Tecnología",
    "Normativas y Seguridad",
    "Logística Integral",
    "Historia Corporativa",
    "Mantenimiento"
  ];

  const featuredPosts = blogPosts.filter(post => post.featured);
  const itemsPerSlide = 3;
  const totalSlides = Math.ceil(blogPosts.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const getCurrentSlideItems = () => {
    const startIndex = currentSlide * itemsPerSlide;
    return blogPosts.slice(startIndex, startIndex + itemsPerSlide);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Proyectos Destacados":
        return Award;
      case "Equipos y Tecnología":
        return Settings;
      case "Normativas y Seguridad":
        return Shield;
      default:
        return Truck;
    }
  };

  return (
    <section id="blog" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-white via-gray-50 to-green-50/30">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-[#155d29] rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-32 w-48 h-48 bg-[#155d29] rounded-full blur-3xl"></div>
      </div>

      <div className="relative container mx-auto mobile-padding">
        
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-[#155d29]/20 shadow-lg">
            <div className="w-8 h-8 bg-gradient-to-br from-[#155d29] to-[#0f4a21] rounded-full flex items-center justify-center">
              <Calendar className="w-4 h-4 text-white" />
            </div>
            <span className="text-sm font-medium text-[#155d29]">{t('blog.section.badge')}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 text-wrap-balance" style={{ color: '#155d29' }}>
            {t('blog.section.title')}
          </h2>
          <p className="mobile-text lg:text-xl max-w-3xl mx-auto mb-6 sm:mb-8 text-gray-600 text-wrap-pretty">
            {t('blog.section.description')}
          </p>
          <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-[#155d29] to-[#0f4a21]"></div>
        </div>

        {/* Manual Carousel */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl sm:text-2xl font-bold" style={{ color: '#155d29' }}>
              {t('blog.section.featured')}
            </h3>
            
            {/* Carousel Controls */}
            <div className="flex items-center gap-4">
              <div className="flex gap-2">
                {Array.from({ length: totalSlides }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentSlide === index 
                        ? 'bg-[#155d29] scale-125' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
              
              <div className="flex gap-2">
                <button
                  onClick={prevSlide}
                  className="p-2 rounded-full bg-white border border-gray-200 hover:border-[#155d29] hover:bg-[#155d29] hover:text-white transition-all duration-300 shadow-md hover:shadow-lg group"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="p-2 rounded-full bg-white border border-gray-200 hover:border-[#155d29] hover:bg-[#155d29] hover:text-white transition-all duration-300 shadow-md hover:shadow-lg group"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
          
          {/* Carousel Items */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {blogPosts.slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide).map((post) => {
                      const CategoryIcon = getCategoryIcon(post.category);
                      return (
                        <article key={post.id} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 border border-gray-100 hover:border-[#155d29]/30">
                          <div className="relative">
                            <div className="aspect-video overflow-hidden">
                              {post.id === 1 ? (
                                <iframe
                                  src="https://www.youtube.com/embed/JnWnFe_QdnE?autoplay=1&mute=1&loop=1&playlist=JnWnFe_QdnE&vq=hd2160"
                                  title={post.title}
                                  className="w-full h-full"
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                  allowFullScreen
                                />
                              ) : post.id === 2 ? (
                                <iframe
                                  src="https://www.youtube.com/embed/4ZfZ5YFelkQ?autoplay=1&mute=1&loop=1&playlist=4ZfZ5YFelkQ&vq=hd2160"
                                  title={post.title}
                                  className="w-full h-full"
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                  allowFullScreen
                                />
                              ) : post.id === 3 ? (
                                <iframe
                                  src="https://www.youtube.com/embed/44lpgBO22qU?autoplay=1&mute=1&loop=1&playlist=44lpgBO22qU&vq=hd2160"
                                  title={post.title}
                                  className="w-full h-full"
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                  allowFullScreen
                                />
                              ) : post.id === 4 ? (
                                <iframe
                                  src="https://www.youtube.com/embed/54hazc90eNk?autoplay=1&mute=1&loop=1&playlist=54hazc90eNk&vq=hd2160"
                                  title={post.title}
                                  className="w-full h-full"
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                  allowFullScreen
                                />
                              ) : post.id === 7 ? (
                                <iframe
                                  src="https://www.youtube.com/embed/NW9Huszovqw?start=30&end=171&autoplay=1&mute=1&loop=1&playlist=NW9Huszovqw&vq=hd2160"
                                  title={post.title}
                                  className="w-full h-full"
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                  allowFullScreen
                                />
                              ) : post.id === 8 ? (
                                <iframe
                                  src="https://www.youtube.com/embed/JJjJ6lF_4oI?start=22&end=86&autoplay=1&mute=1&loop=1&playlist=JJjJ6lF_4oI&vq=hd2160"
                                  title={post.title}
                                  className="w-full h-full"
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                  allowFullScreen
                                />
                              ) : (
                                <img 
                                  src={post.image} 
                                  alt={post.title}
                                  loading="lazy"
                                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                              )}
                            </div>
                          </div>
                          
                          <div className="p-6">
                            <h4 className="text-lg font-bold mb-3 text-gray-900 group-hover:text-[#155d29] transition-colors duration-300 text-wrap-balance line-clamp-2 leading-tight">
                              {post.title}
                            </h4>
                            
                            <p className="text-gray-600 mb-4 text-sm leading-relaxed text-wrap-pretty line-clamp-3">
                              {post.excerpt}
                            </p>
                            
                            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                              <div className="flex items-center gap-4 text-xs text-gray-500">
                                <div className="flex items-center gap-1">
                                  <Eye className="w-3 h-3" />
                                  <span>{post.views.toLocaleString()}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <MessageCircle className="w-3 h-3" />
                                  <span>{post.comments}</span>
                                </div>
                              </div>
                              
                              <button
                                onClick={() => {
                                  window.location.href = '/blog#blog-main';
                                  setTimeout(() => {
                                    const element = document.getElementById('blog-main');
                                    if (element) {
                                      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                    }
                                  }, 200);
                                }}
                                className="flex items-center gap-1 text-[#155d29] font-bold text-sm hover:gap-2 transition-all duration-300 group-hover:text-[#0f4a21] bg-green-50 hover:bg-[#155d29] hover:text-white px-3 py-2 rounded-lg"
                              >
                                {t('blog.section.readFullArticle')}
                                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                              </button>
                            </div>
                          </div>
                        </article>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="max-w-lg mx-auto mb-16">
          <div className="bg-gradient-to-br from-[#155d29] to-[#0f4a21] rounded-2xl p-6 text-white shadow-xl relative overflow-hidden">
            {/* Background pattern for contrast */}
            <div className="absolute inset-0 opacity-15">
              <div className="absolute top-2 right-2 w-16 h-16 border border-white/30 rounded-full"></div>
              <div className="absolute bottom-2 left-2 w-12 h-12 border border-white/30 rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 w-8 h-8 bg-white/10 rounded-full blur-lg"></div>
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/40">
                  <Calendar className="w-4 h-4 text-white drop-shadow-lg" />
                </div>
                <h3 className="text-xl font-bold text-white drop-shadow-lg">
                  {t('blog.section.newsletter.title')}
                </h3>
              </div>
              <p className="text-sm mb-6 text-white/90 drop-shadow-sm">
                {t('blog.section.newsletter.description')}
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder={t('blog.section.newsletter.placeholder')}
                  className="w-full px-4 py-3 rounded-xl bg-white/25 border-2 border-white/40 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/60 focus:border-white/70 backdrop-blur-sm transition-all duration-300 drop-shadow-sm"
                />
                <button className="w-full bg-white text-[#155d29] font-bold py-3 px-4 rounded-xl hover:bg-green-50 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl border-2 border-white">
                  {t('blog.section.newsletter.subscribe')}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Ver Todos los Artículos */}
        <div className="text-center mt-12">
          <button
            onClick={() => {
              window.location.href = '/blog#blog-main';
              setTimeout(() => {
                const element = document.getElementById('blog-main');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }, 200);
            }}
            className="inline-flex items-center gap-3 bg-white border-2 border-[#155d29] text-[#155d29] font-bold py-4 px-8 rounded-xl hover:bg-[#155d29] hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <Calendar className="w-5 h-5" />
            {t('blog.section.viewAll')}
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 relative">
          <div className="bg-gradient-to-r from-[#155d29] to-[#0f4a21] rounded-3xl p-8 sm:p-12 text-white shadow-2xl overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-4 right-4 w-32 h-32 border-2 border-white/40 rounded-full"></div>
              <div className="absolute bottom-4 left-4 w-24 h-24 border-2 border-white/40 rounded-full"></div>
              <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full blur-xl"></div>
              <div className="absolute bottom-1/3 right-1/3 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-12 h-12 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/50">
                  <Truck className="w-6 h-6 text-white drop-shadow-lg" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white drop-shadow-lg">
                  {t('blog.section.cta.title')}
                </h3>
              </div>
              <p className="mb-8 text-white/90 max-w-2xl mx-auto text-lg drop-shadow-md">
                {t('blog.section.cta.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-white text-[#155d29] font-bold py-4 px-8 rounded-xl hover:bg-green-50 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center justify-center gap-2 border-2 border-white"
                >
                  <ArrowRight className="w-5 h-5" />
                  {t('blog.section.cta.consult')}
                </button>
                <button 
                  onClick={() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-white/30 backdrop-blur-sm text-white font-bold py-4 px-8 rounded-xl hover:bg-white/40 transition-all duration-300 transform hover:scale-105 border-2 border-white/60 hover:border-white flex items-center justify-center gap-2 shadow-lg"
                >
                  <Eye className="w-5 h-5" />
                  {t('blog.section.cta.services')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}