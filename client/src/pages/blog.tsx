import { useState } from 'react';
import { Calendar, User, Clock, ArrowRight, Search, Filter, ChevronLeft, ChevronRight, Tag, Eye, Menu, X, Home, Briefcase, Users, FileText, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Share2, MessageSquare, ThumbsUp, Bookmark, Send } from 'lucide-react';
import { Link } from 'wouter';
import Footer from '@/components/footer';
import Header from '@/components/header';
import { useLanguage } from '../contexts/LanguageContext';
import logoTranservica from "@assets/logo transervica sin fondo_1754163034585.png";

// Blog post data with complete content
const blogPosts = [
  {
    id: 1,
    title: "Transporte de Turbinas de 380 Toneladas: Proyecto Exitoso en el Estado Zulia",
    excerpt: "Completamos con éxito el transporte de turbinas industriales de 380 toneladas desde el Puerto de Maracaibo hasta la Planta Termoeléctrica de La Concepción, utilizando nuestros trailers modulares hidráulicos SCHEUERLE.",
    content: "Este proyecto representó uno de los mayores desafíos logísticos del año 2024. Durante tres meses de planificación detallada, nuestro equipo de ingenieros especializados desarrolló una estrategia integral que incluyó análisis de rutas, reforzamiento de puentes y coordinación con autoridades locales. El transporte se realizó durante horas nocturnas para minimizar el impacto en el tráfico vehicular, utilizando nuestros trailers modulares SCHEUERLE de última generación con capacidad para 500 toneladas. El proyecto requirió la movilización de 40 técnicos especializados, 8 vehículos de escolta y coordinación con CORPOELEC para garantizar el suministro eléctrico continuo durante la instalación. Esta operación consolida a TRANSERVICA como líder en transporte de cargas excepcionales en Venezuela, demostrando nuestra capacidad para ejecutar proyectos de infraestructura crítica con los más altos estándares de seguridad y eficiencia.",
    author: "Ing. Carlos Rodríguez",
    date: "2024-12-15",
    readTime: "8 min",
    views: 2847,
    comments: 24,
    category: "Proyectos Especiales",
    tags: ["Turbinas", "SCHEUERLE", "Zulia", "380 Toneladas"],
    image: "/attached_assets/1_1754173669382.jpeg",
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
    views: 1652,
    comments: 18,
    category: "Equipos y Tecnología",
    tags: ["Grove GMK6400", "Grúas", "Inversión", "Tecnología"],
    image: "/attached_assets/2_1754173669382.jpg",
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
    views: 3120,
    comments: 31,
    category: "Normativas y Seguridad",
    tags: ["INTT", "Normativas", "Seguridad", "Permisos"],
    image: "/attached_assets/3_1754173669382.jpg",
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
    views: 1893,
    comments: 15,
    category: "Logística Multimodal",
    tags: ["Multimodal", "Logística", "Puertos", "Optimización"],
    image: "/attached_assets/4_1754173669383.jpg",
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
    views: 4567,
    comments: 42,
    category: "Historia Corporativa",
    tags: ["Historia", "40 Años", "TRANSERVICA", "Evolución"],
    image: "/attached_assets/5_1754173669383.jpg",
    featured: true
  },
  {
    id: 6,
    title: "Mantenimiento Preventivo de Trailers Modulares: Claves del Éxito Operativo",
    excerpt: "Protocolo detallado de mantenimiento para trailers modulares hidráulicos, garantizando máxima disponibilidad y seguridad en operaciones críticas.",
    content: "El mantenimiento preventivo es esencial para garantizar la operatividad continua de nuestros trailers modulares SCHEUERLE. TRANSERVICA implementa un protocolo riguroso de mantenimiento basado en estándares internacionales que incluye inspecciones diarias, semanales, mensuales y anuales. Cada trailer cuenta con un historial digital completo que registra horas de operación, cargas transportadas, rutas utilizadas y todas las intervenciones de mantenimiento. Los sistemas hidráulicos reciben atención especial con cambios de fluido cada 1,000 horas, inspección de cilindros cada 500 horas y calibración de válvulas cada 250 horas. Los sistemas de dirección y suspensión se revisan cada 100 horas de operación, mientras que los neumáticos especializados se inspeccionan antes de cada proyecto. Nuestro taller cuenta con equipos de diagnóstico computarizados, banco de pruebas hidráulicas y personal certificado por SCHEUERLE. Este protocolo nos permite mantener una disponibilidad operativa del 98.5% y garantizar la seguridad en cada transporte, cumpliendo con las más exigentes normas internacionales de calidad.",
    author: "Ing. Luis Martínez",
    date: "2024-09-18",
    readTime: "7 min",
    category: "Mantenimiento",
    tags: ["Mantenimiento", "SCHEUERLE", "Protocolos", "Seguridad"],
    image: "/attached_assets/23_1754185586556.png",
    featured: false
  }
];

const categories = [
  "Todos los Artículos",
  "Proyectos Especiales",
  "Equipos y Tecnología", 
  "Normativas y Seguridad",
  "Logística Multimodal",
  "Historia Corporativa",
  "Mantenimiento"
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("Todos los Artículos");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPost, setSelectedPost] = useState<any>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();
  const postsPerPage = 6;

  const scrollToSection = (sectionId: string) => {
    window.location.href = `/#${sectionId}`;
  };

  // Filter posts
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "Todos los Artículos" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Pagination
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);

  if (selectedPost) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-green-50/30">
        {/* Header with Back Button */}
        <div className="bg-white shadow-lg border-b border-gray-100 sticky top-0 z-50">
          <Header />
          <div className="container mx-auto px-4 py-3 border-t border-gray-100">
            <button
              onClick={() => setSelectedPost(null)}
              className="flex items-center gap-2 px-4 py-2 bg-[#155d29] text-white rounded-lg hover:bg-[#0f4a21] transition-colors shadow-md"
            >
              <ChevronLeft className="w-4 h-4" />
              Volver al Blog
            </button>
          </div>
        </div>

        {/* Article Content with Sidebar Layout */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Article Content */}
            <article className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={selectedPost.image}
                    alt={selectedPost.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="p-8">
                  {/* Article Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <span className="px-3 py-1 bg-[#155d29] text-white text-sm font-medium rounded-full">
                      {selectedPost.category}
                    </span>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{selectedPost.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{selectedPost.readTime}</span>
                    </div>
                  </div>

                  <h1 className="text-3xl lg:text-4xl font-bold mb-6" style={{ color: '#155d29' }}>
                    {selectedPost.title}
                  </h1>

                  {/* Author Info */}
                  <div className="flex items-center gap-3 mb-8 p-4 bg-gray-50 rounded-xl">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#155d29] to-[#0f4a21] rounded-full flex items-center justify-center">
                      <User className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{selectedPost.author}</p>
                      <p className="text-sm text-gray-600">Ingeniero Especialista en Logística</p>
                    </div>
                  </div>

                  {/* Article Content */}
                  <div className="prose prose-lg max-w-none mb-8">
                    <p className="text-lg leading-relaxed text-gray-700 whitespace-pre-line">
                      {selectedPost.content}
                    </p>
                  </div>

                  {/* Social Share Buttons */}
                  <div className="border-t border-gray-200 pt-6 mb-8">
                    <h3 className="text-lg font-bold mb-4" style={{ color: '#155d29' }}>Compartir artículo:</h3>
                    <div className="flex gap-3">
                      <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                        <Facebook className="w-4 h-4" />
                        Facebook
                      </button>
                      <button className="flex items-center gap-2 px-4 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition-colors">
                        <Twitter className="w-4 h-4" />
                        Twitter
                      </button>
                      <button className="flex items-center gap-2 px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors">
                        <Linkedin className="w-4 h-4" />
                        LinkedIn
                      </button>
                      <button className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
                        <Share2 className="w-4 h-4" />
                        Copiar enlace
                      </button>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="border-t border-gray-200 pt-6">
                    <h3 className="text-lg font-bold mb-4" style={{ color: '#155d29' }}>Tags:</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedPost.tags?.map((tag: string) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full flex items-center gap-1 hover:bg-[#155d29] hover:text-white transition-colors cursor-pointer"
                        >
                          <Tag className="w-3 h-3" />
                          {tag}
                        </span>
                      )) || []}
                    </div>
                  </div>
                </div>
              </div>

              {/* Comments Section */}
              <div className="bg-white rounded-2xl shadow-xl p-8 mt-8">
                <h3 className="text-2xl font-bold mb-6" style={{ color: '#155d29' }}>
                  Comentarios (3)
                </h3>
                
                {/* Comment Form */}
                <div className="bg-gray-50 rounded-xl p-6 mb-8">
                  <h4 className="text-lg font-semibold mb-4">Deja tu comentario</h4>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="Tu nombre"
                        className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#155d29]"
                      />
                      <input
                        type="email"
                        placeholder="Tu email"
                        className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#155d29]"
                      />
                    </div>
                    <textarea
                      placeholder="Escribe tu comentario..."
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#155d29] resize-none"
                    ></textarea>
                    <button className="bg-[#155d29] text-white px-6 py-3 rounded-lg hover:bg-[#0f4a21] transition-colors flex items-center gap-2">
                      <Send className="w-4 h-4" />
                      Publicar comentario
                    </button>
                  </div>
                </div>

                {/* Sample Comments */}
                <div className="space-y-6">
                  <div className="border-b border-gray-200 pb-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-gray-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="font-semibold">María González</span>
                          <span className="text-sm text-gray-500">hace 2 días</span>
                        </div>
                        <p className="text-gray-700">Excelente artículo sobre transporte especializado. Muy útil para nuestras operaciones logísticas.</p>
                        <div className="flex items-center gap-4 mt-3">
                          <button className="flex items-center gap-1 text-gray-500 hover:text-[#155d29] transition-colors">
                            <ThumbsUp className="w-4 h-4" />
                            <span className="text-sm">12</span>
                          </button>
                          <button className="text-sm text-gray-500 hover:text-[#155d29] transition-colors">
                            Responder
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1 space-y-8">
              {/* Search Widget */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-lg font-bold mb-4" style={{ color: '#155d29' }}>Buscar en el Blog</h3>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Buscar artículos..."
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#155d29]"
                  />
                </div>
              </div>

              {/* Related Articles */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-lg font-bold mb-6" style={{ color: '#155d29' }}>Artículos Relacionados</h3>
                <div className="space-y-4">
                  {blogPosts.filter(post => post.id !== selectedPost.id && post.category === selectedPost.category).slice(0, 3).map((post) => (
                    <div
                      key={post.id}
                      className="flex gap-3 cursor-pointer group"
                      onClick={() => setSelectedPost(post)}
                    >
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h4 className="text-sm font-semibold group-hover:text-[#155d29] transition-colors line-clamp-2">
                          {post.title}
                        </h4>
                        <p className="text-xs text-gray-500 mt-1">{post.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-gradient-to-br from-[#155d29] to-[#0f4a21] rounded-2xl p-6 text-white">
                <h3 className="text-lg font-bold mb-4">¿Necesitas Transporte Especializado?</h3>
                <p className="text-sm mb-6 text-white/90">Contáctanos para una cotización personalizada de tu proyecto</p>
                <div className="space-y-3">
                  <input
                    type="text"
                    placeholder="Tu nombre"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                  <input
                    type="email"
                    placeholder="Tu email"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                  <textarea
                    placeholder="Describe tu proyecto..."
                    rows={3}
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 resize-none"
                  ></textarea>
                  <button className="w-full bg-white text-[#155d29] font-bold py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors">
                    Enviar Consulta
                  </button>
                </div>
              </div>

              {/* Categories */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-lg font-bold mb-4" style={{ color: '#155d29' }}>Categorías</h3>
                <div className="space-y-2">
                  {categories.filter(cat => cat !== "Todos los Artículos").map((category) => (
                    <button
                      key={category}
                      className="block w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors text-sm"
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-lg font-bold mb-4" style={{ color: '#155d29' }}>Newsletter TRANSERVICA</h3>
                <p className="text-sm text-gray-600 mb-4">Recibe las últimas noticias sobre transporte especializado</p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Tu email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#155d29]"
                  />
                  <button className="w-full bg-[#155d29] text-white font-bold py-3 px-4 rounded-lg hover:bg-[#0f4a21] transition-colors">
                    Suscribirse
                  </button>
                </div>
              </div>
            </aside>
          </div>
        </div>
        
        {/* Footer */}
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-green-50/30">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-[#155d29] to-[#0f4a21] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-32 h-32 border border-white/20 rounded-full"></div>
          <div className="absolute bottom-10 left-10 w-24 h-24 border border-white/20 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-white/10 rounded-full"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="mb-8">
            <img 
              src={logoTranservica}
              alt="TRANSERVICA Blog Corporativo"
              className="h-20 w-auto mx-auto mb-6 filter brightness-0 invert"
            />
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Blog Corporativo
          </h1>
          <p className="text-xl lg:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Noticias, proyectos y conocimiento especializado en transporte de cargas excepcionales
          </p>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-1 rounded-full bg-white/50"></div>
            <div className="w-3 h-3 rounded-full bg-[#ff6b35]"></div>
            <div className="w-16 h-1 rounded-full bg-white/50"></div>
          </div>
          <p className="text-lg text-white/80 font-medium">
            40 años de experiencia en Venezuela
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Search and Filters */}
        <div className="mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Search */}
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Buscar artículos, proyectos, equipos..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#155d29] focus:border-transparent"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div className="lg:w-80">
                <div className="relative">
                  <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#155d29] focus:border-transparent appearance-none bg-white"
                  >
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Posts */}
        {selectedCategory === "Todos los Artículos" && (
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8" style={{ color: '#155d29' }}>
              Artículos Destacados
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {blogPosts.filter(post => post.featured).slice(0, 2).map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer"
                  onClick={() => setSelectedPost(post)}
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-3 py-1 bg-[#155d29] text-white text-sm font-medium rounded-full">
                        {post.category}
                      </span>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{post.date}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-[#155d29] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-gray-600">
                        <User className="w-4 h-4" />
                        <span className="text-sm">{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1 text-[#155d29] font-medium">
                        <span className="text-sm">Leer más</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* All Posts Grid */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold" style={{ color: '#155d29' }}>
              {selectedCategory === "Todos los Artículos" ? "Todos los Artículos" : selectedCategory}
            </h2>
            <span className="text-gray-600">
              {filteredPosts.length} artículo{filteredPosts.length !== 1 ? 's' : ''}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer"
                onClick={() => setSelectedPost(post)}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-[#155d29] text-white text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1 text-gray-500">
                      <Calendar className="w-3 h-3" />
                      <span className="text-xs">{post.date}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold mb-3 group-hover:text-[#155d29] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3" title={post.excerpt}>
                    {post.excerpt.length > 150 ? post.excerpt.substring(0, 150) + '...' : post.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-3 mb-4 text-gray-500 text-xs">
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime} lectura</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      <span>{post.views}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                    <div className="flex items-center gap-1">
                      <MessageSquare className="w-4 h-4 text-gray-400" />
                      <span className="text-xs text-gray-500">{post.comments} comentarios</span>
                    </div>
                    <div className="flex gap-2">
                      <button className="p-1 rounded-full hover:bg-gray-100 transition-colors" title="Compartir">
                        <Share2 className="w-4 h-4 text-gray-400" />
                      </button>
                      <button className="p-1 rounded-full hover:bg-gray-100 transition-colors" title="Guardar">
                        <Bookmark className="w-4 h-4 text-gray-400" />
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-4 mt-12">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:border-[#155d29] hover:text-[#155d29] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-4 h-4" />
                Anterior
              </button>

              <div className="flex gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-10 h-10 rounded-lg font-medium transition-colors ${
                      currentPage === page
                        ? 'bg-[#155d29] text-white'
                        : 'border border-gray-300 hover:border-[#155d29] hover:text-[#155d29]'
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:border-[#155d29] hover:text-[#155d29] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Siguiente
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </section>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}