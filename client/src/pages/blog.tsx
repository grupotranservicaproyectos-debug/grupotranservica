import { useState } from 'react';
import { Calendar, User, Clock, ArrowRight, Search, Filter, ChevronLeft, ChevronRight, Tag, Eye } from 'lucide-react';
import { Link } from 'wouter';
import Header from '../components/header';
import Footer from '../components/footer';

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
    category: "Proyectos Especiales",
    tags: ["Turbinas", "SCHEUERLE", "Zulia", "380 Toneladas"],
    image: "/attached_assets/7_1754167186025.png",
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
    category: "Equipos y Tecnología",
    tags: ["Grove GMK6400", "Grúas", "Inversión", "Tecnología"],
    image: "/attached_assets/8_1754167186025.png",
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
    category: "Normativas y Seguridad",
    tags: ["INTT", "Normativas", "Seguridad", "Permisos"],
    image: "/attached_assets/9_1754167186025.png",
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
    category: "Logística Multimodal",
    tags: ["Multimodal", "Logística", "Puertos", "Optimización"],
    image: "/attached_assets/10_1754167186025.png",
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
    category: "Historia Corporativa",
    tags: ["Historia", "40 Años", "TRANSERVICA", "Evolución"],
    image: "/attached_assets/11_1754167186026.png",
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
    image: "/attached_assets/12_1754167186026.png",
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
  const postsPerPage = 6;

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
        <Header />
        
        {/* Article Navigation */}
        <div className="bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 py-4">
            <button
              onClick={() => setSelectedPost(null)}
              className="flex items-center gap-2 px-4 py-2 bg-[#155d29] text-white rounded-lg hover:bg-[#0f4a21] transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              Volver al Blog
            </button>
          </div>
        </div>

        {/* Article Content */}
        <article className="container mx-auto px-4 py-12 max-w-4xl">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="aspect-video overflow-hidden">
              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-8 lg:p-12">
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

              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-gradient-to-br from-[#155d29] to-[#0f4a21] rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">{selectedPost.author}</p>
                  <p className="text-sm text-gray-600">Autor del artículo</p>
                </div>
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed text-gray-700 whitespace-pre-line">
                  {selectedPost.content}
                </p>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-bold mb-4" style={{ color: '#155d29' }}>Tags:</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedPost.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full flex items-center gap-1"
                    >
                      <Tag className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </article>
        
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-green-50/30">
      <Header />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-[#155d29] to-[#0f4a21] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-32 h-32 border border-white/20 rounded-full"></div>
          <div className="absolute bottom-10 left-10 w-24 h-24 border border-white/20 rounded-full"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Blog Corporativo TRANSERVICA
          </h1>
          <p className="text-xl lg:text-2xl mb-8 max-w-3xl mx-auto">
            Noticias, proyectos y conocimiento especializado en transporte de cargas excepcionales
          </p>
          <div className="w-32 h-1 mx-auto rounded-full bg-white/50"></div>
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
                  <div className="flex items-center gap-4 mb-3">
                    <span className="px-2 py-1 bg-[#155d29] text-white text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1 text-gray-500">
                      <Clock className="w-3 h-3" />
                      <span className="text-xs">{post.readTime}</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-3 group-hover:text-[#155d29] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-gray-500">
                      <User className="w-3 h-3" />
                      <span className="text-xs">{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1 text-[#155d29] font-medium">
                      <Eye className="w-4 h-4" />
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
      
      <Footer />
    </div>
  );
}