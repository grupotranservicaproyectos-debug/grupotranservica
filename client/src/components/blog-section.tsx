import { useState } from "react";
import { Calendar, User, ArrowRight, Eye, MessageCircle, ChevronLeft, ChevronRight, Truck, Settings, Shield, Award } from "lucide-react";
import { useLanguage } from '../contexts/LanguageContext';
import transportImage1 from "@assets/1_1754173669382.jpeg";
import transportImage2 from "@assets/2_1754173669382.jpg";
import transportImage3 from "@assets/3_1754173669382.jpg";
import transportImage4 from "@assets/4_1754173669383.jpg";
import transportImage5 from "@assets/5_1754173669383.jpg";
import equipmentImage1 from "@assets/7_1754162276863.png";
import equipmentImage2 from "@assets/8_1754162276863.png";
import equipmentImage3 from "@assets/9_1754162276864.png";

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
      title: "Transporte de Turbinas de 380 Toneladas: Proyecto Exitoso en el Estado Zulia",
      excerpt: "Completamos con éxito el transporte de turbinas industriales de 380 toneladas desde el Puerto de Maracaibo hasta la Planta Termoeléctrica de La Concepción, utilizando nuestros trailers modulares hidráulicos SCHEUERLE.",
      content: "Este proyecto representó uno de los mayores desafíos logísticos del año 2024. Durante tres meses de planificación detallada, nuestro equipo de ingenieros especializados desarrolló una estrategia integral que incluyó análisis de rutas, reforzamiento de puentes y coordinación con autoridades locales. El transporte se realizó durante horas nocturnas para minimizar el impacto en el tráfico vehicular, utilizando nuestros trailers modulares SCHEUERLE de última generación con capacidad para 500 toneladas. El proyecto requirió la movilización de 40 técnicos especializados, 8 vehículos de escolta y coordinación con CORPOELEC para garantizar el suministro eléctrico continuo durante la instalación. Esta operación consolida a TRANSERVICA como líder en transporte de cargas excepcionales en Venezuela, demostrando nuestra capacidad para ejecutar proyectos de infraestructura crítica con los más altos estándares de seguridad y eficiencia.",
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
      title: "Nuevas Grúas Grove GMK6400 se Incorporan a Nuestra Flota Especializada",
      excerpt: "Ampliamos nuestra capacidad operativa con la adquisición de dos nuevas grúas Grove GMK6400 de 400 toneladas, fortaleciendo nuestro liderazgo en el sector de cargas excepcionales en Venezuela.",
      content: "La inversión en equipos de última generación es fundamental para mantener nuestro liderazgo en el sector de transporte especializado. Las nuevas grúas Grove GMK6400 representan una inversión de 2.8 millones de dólares y cuentan con tecnología de vanguardia incluyendo sistema de control computerizado, pluma telescópica de 60 metros y capacidad de elevación de 400 toneladas a 3 metros de radio. Estos equipos están equipados con sistemas de seguridad avanzados como limitadores de momento, indicadores de ángulo y sistemas anti-vuelco, garantizando operaciones seguras en los proyectos más exigentes. La flota modernizada permite a TRANSERVICA atender simultáneamente múltiples proyectos de infraestructura, reduciendo tiempos de ejecución y optimizando costos para nuestros clientes. Con estas incorporaciones, nuestra empresa consolida su posición como la única en Venezuela capaz de manejar cargas de hasta 1,100 toneladas con estándares internacionales de calidad y seguridad.",
      author: "Ing. María Fernández",
      date: "2024-11-28",
      readTime: "6 min",
      views: 1834,
      comments: 15,
      category: "Equipos y Tecnología",
      image: equipmentImage1,
      featured: true
    },
    {
      id: 3,
      title: "Normativas de Seguridad para Transporte de Cargas Sobredimensionadas en Venezuela",
      excerpt: "Guía completa sobre las regulaciones vigentes del INTT para el transporte de cargas excepcionales, permisos especiales y mejores prácticas de seguridad vial.",
      content: "El cumplimiento de las normativas de seguridad es prioritario en todas nuestras operaciones. En Venezuela, el Instituto Nacional de Transporte Terrestre (INTT) regula el transporte de cargas excepcionales mediante la Resolución 349, que establece los requisitos para permisos especiales. Las cargas que excedan 2.5 metros de ancho, 3.5 metros de alto, 18 metros de largo o 48 toneladas de peso requieren autorización especial. TRANSERVICA cuenta con personal certificado en gestión de permisos especiales y mantiene alianzas estratégicas con el INTT para agilizar los procesos administrativos. Nuestros operadores están capacitados en las mejores prácticas internacionales incluyendo señalización preventiva, escolta especializada, análisis de rutas críticas y protocolos de emergencia. Cumplimos estrictamente con las normativas de tránsito nocturno, restricciones en días festivos y coordinación con autoridades locales para garantizar la seguridad de todos los usuarios de las vías públicas.",
      author: "Lic. Ana Pérez",
      date: "2024-11-10",
      readTime: "12 min",
      views: 3245,
      comments: 41,
      category: "Normativas y Seguridad",
      image: transportImage2,
      featured: false
    },
    {
      id: 4,
      title: "Transporte Multimodal: Integrando Vías Terrestres, Marítimas y Fluviales",
      excerpt: "Casos de estudio sobre proyectos que requieren coordinación entre diferentes modalidades de transporte para optimizar costos y tiempos de entrega.",
      content: "La logística multimodal representa el futuro del transporte especializado en Venezuela. TRANSERVICA ha desarrollado capacidades únicas para coordinar operaciones que combinan transporte terrestre, marítimo y fluvial, optimizando rutas y reduciendo costos operativos hasta en 35%. Un ejemplo destacado fue el proyecto de transporte de equipos petroquímicos desde Houston hasta la Refinería de Paraguaná, que incluyó transporte marítimo internacional, descarga en Puerto Cabello, traslado terrestre de 380 kilómetros y instalación final. La operación requirió coordinación con autoridades portuarias, aduanales, de tránsito terrestre y ambientales. Nuestro equipo de planificación logística utiliza software especializado para optimizar rutas multimodales, considerando factores como restricciones de peso en puentes, limitaciones de altura en túneles, disponibilidad de equipos de izaje en puertos y condiciones climáticas estacionales. Esta capacidad integral posiciona a TRANSERVICA como el único operador logístico en Venezuela capaz de ejecutar proyectos multimodales de gran complejidad.",
      author: "Ing. Roberto Silva",
      date: "2024-10-22",
      readTime: "10 min",
      views: 1967,
      comments: 28,
      category: "Logística Integral",
      image: equipmentImage2,
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
            <span className="text-sm font-medium text-[#155d29]">Blog Corporativo</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 text-wrap-balance" style={{ color: '#155d29' }}>
            NOTICIAS TRANSERVICA
          </h2>
          <p className="mobile-text lg:text-xl max-w-3xl mx-auto mb-6 sm:mb-8 text-gray-600 text-wrap-pretty">
            Noticias y proyectos de Transporte de Carga Especializado
          </p>
          <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-[#155d29] to-[#0f4a21]"></div>
        </div>

        {/* Manual Carousel */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl sm:text-2xl font-bold" style={{ color: '#155d29' }}>
              Noticias y Proyectos Destacados
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
                              <img 
                                src={post.image} 
                                alt={post.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                            
                            <div className="absolute top-4 left-4">
                              <div className="flex items-center gap-2 bg-gradient-to-r from-[#155d29] to-[#0f4a21] text-white px-3 py-2 rounded-full text-xs font-medium shadow-lg">
                                <CategoryIcon className="w-3 h-3" />
                                <span>{post.category}</span>
                              </div>
                            </div>
                            
                            
                          </div>
                          
                          <div className="p-6">
                            <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                              <div className="flex items-center gap-1">
                                <User className="w-4 h-4" />
                                <span className="font-medium">{post.author}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                <span>{new Date(post.date).toLocaleDateString('es-ES')}</span>
                              </div>
                            </div>
                            
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
                                <span className="bg-gray-100 px-2 py-1 rounded-full">{post.readTime}</span>
                              </div>
                              
                              <button 
                                onClick={() => {
                                  // Create a modal or detailed view for the full article
                                  alert(`Artículo Completo: ${post.title}\n\n${post.content}`);
                                }}
                                className="flex items-center gap-1 text-[#155d29] font-bold text-sm hover:gap-2 transition-all duration-300 group-hover:text-[#0f4a21] bg-green-50 hover:bg-[#155d29] hover:text-white px-3 py-2 rounded-lg"
                              >
                                Leer Artículo Completo
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

        {/* Categories and Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          
          {/* Categories */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-3" style={{ color: '#155d29' }}>
              <div className="w-8 h-8 bg-gradient-to-br from-[#155d29] to-[#0f4a21] rounded-full flex items-center justify-center">
                <Truck className="w-4 h-4 text-white" />
              </div>
              Categorías Especializadas
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {categories.slice(1).map((category) => (
                <button
                  key={category}
                  className="px-4 py-3 rounded-xl border border-gray-200 text-sm font-medium hover:border-[#155d29] hover:bg-[#155d29] hover:text-white transition-all duration-300 hover:shadow-md text-left"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div className="bg-gradient-to-br from-[#155d29] to-[#0f4a21] rounded-2xl p-6 text-white shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <Calendar className="w-4 h-4 text-white" />
              </div>
              <h3 className="text-xl font-bold">
                Newsletter TRANSERVICA
              </h3>
            </div>
            <p className="text-sm mb-6 text-green-100">
              Recibe noticias exclusivas sobre proyectos de transporte especializado, equipos de última generación y normativas del sector
            </p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Ingresa tu email corporativo"
                className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-green-200 focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm transition-all duration-300"
              />
              <button className="w-full bg-white text-[#155d29] font-bold py-3 px-4 rounded-xl hover:bg-green-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Suscribirse al Blog
              </button>
            </div>
          </div>
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
                  ¿Tienes un Proyecto Especializado?
                </h3>
              </div>
              <p className="mb-8 text-white/90 max-w-2xl mx-auto text-lg drop-shadow-md">
                40 años de experiencia nos respaldan. Nuestro equipo de ingenieros está listo para desarrollar la mejor solución logística para tu empresa
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-white text-[#155d29] font-bold py-4 px-8 rounded-xl hover:bg-green-50 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center justify-center gap-2 border-2 border-white"
                >
                  <ArrowRight className="w-5 h-5" />
                  Consultar Proyecto
                </button>
                <button 
                  onClick={() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-white/30 backdrop-blur-sm text-white font-bold py-4 px-8 rounded-xl hover:bg-white/40 transition-all duration-300 transform hover:scale-105 border-2 border-white/60 hover:border-white flex items-center justify-center gap-2 shadow-lg"
                >
                  <Eye className="w-5 h-5" />
                  Ver Servicios
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}