import { Calendar, User, ArrowRight, Eye, MessageCircle } from "lucide-react";
import { useLanguage } from '../contexts/LanguageContext';

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

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Transporte de Turbinas de 380 Toneladas: Proyecto Exitoso en el Estado Zulia",
      excerpt: "Completamos con éxito el transporte de turbinas industriales de 380 toneladas desde el Puerto de Maracaibo hasta la Planta Termoeléctrica de La Concepción, utilizando nuestros trailers modulares hidráulicos SCHEUERLE.",
      content: "Este proyecto representó uno de los mayores desafíos logísticos del año 2024...",
      author: "Ing. Carlos Rodríguez",
      date: "2024-12-15",
      readTime: "8 min",
      views: 2456,
      comments: 23,
      category: "Proyectos Destacados",
      image: "/api/placeholder/600/400",
      featured: true
    },
    {
      id: 2,
      title: "Nuevas Grúas Grove GMK6400 se Incorporan a Nuestra Flota Especializada",
      excerpt: "Ampliamos nuestra capacidad operativa con la adquisición de dos nuevas grúas Grove GMK6400 de 400 toneladas, fortaleciendo nuestro liderazgo en el sector de cargas excepcionales en Venezuela.",
      content: "La inversión en equipos de última generación es fundamental para mantener...",
      author: "Ing. María Fernández",
      date: "2024-11-28",
      readTime: "6 min",
      views: 1834,
      comments: 15,
      category: "Equipos y Tecnología",
      image: "/api/placeholder/600/400",
      featured: true
    },
    {
      id: 3,
      title: "Normativas de Seguridad para Transporte de Cargas Sobredimensionadas en Venezuela",
      excerpt: "Guía completa sobre las regulaciones vigentes del INTT para el transporte de cargas excepcionales, permisos especiales y mejores prácticas de seguridad vial.",
      content: "El cumplimiento de las normativas de seguridad es prioritario...",
      author: "Lic. Ana Pérez",
      date: "2024-11-10",
      readTime: "12 min",
      views: 3245,
      comments: 41,
      category: "Normativas y Seguridad",
      image: "/api/placeholder/600/400",
      featured: false
    },
    {
      id: 4,
      title: "Transporte Multimodal: Integrando Vías Terrestres, Marítimas y Fluviales",
      excerpt: "Casos de estudio sobre proyectos que requieren coordinación entre diferentes modalidades de transporte para optimizar costos y tiempos de entrega.",
      content: "La logística multimodal representa el futuro del transporte...",
      author: "Ing. Roberto Silva",
      date: "2024-10-22",
      readTime: "10 min",
      views: 1967,
      comments: 28,
      category: "Logística Integral",
      image: "/api/placeholder/600/400",
      featured: false
    },
    {
      id: 5,
      title: "40 Años Transportando el Futuro: Historia de TRANSERVICA",
      excerpt: "Un recorrido por cuatro décadas de liderazgo en transporte especializado, desde nuestros inicios hasta convertirnos en la empresa líder del sector en Venezuela.",
      content: "TRANSERVICA fue fundada en 1984 con la visión de...",
      author: "Dirección General",
      date: "2024-10-05",
      readTime: "15 min",
      views: 4521,
      comments: 67,
      category: "Historia Corporativa",
      image: "/api/placeholder/600/400",
      featured: true
    },
    {
      id: 6,
      title: "Mantenimiento Preventivo de Trailers Modulares: Claves del Éxito Operativo",
      excerpt: "Protocolo detallado de mantenimiento para trailers modulares hidráulicos, garantizando máxima disponibilidad y seguridad en operaciones críticas.",
      content: "El mantenimiento preventivo es esencial para garantizar...",
      author: "Ing. Luis Martínez",
      date: "2024-09-18",
      readTime: "9 min",
      views: 2103,
      comments: 19,
      category: "Mantenimiento",
      image: "/api/placeholder/600/400",
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
  const recentPosts = blogPosts.slice(0, 4);

  return (
    <section id="blog" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto mobile-padding">
        
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 text-wrap-balance" style={{ color: '#155d29' }}>
            {t('blog.title')}
          </h2>
          <p className="mobile-text lg:text-xl max-w-3xl mx-auto mb-6 sm:mb-8 text-gray-600 text-wrap-pretty">
            {t('blog.subtitle')}
          </p>
          <div className="w-24 h-1 mx-auto rounded-full" style={{ backgroundColor: '#155d29' }}></div>
        </div>

        {/* Featured Posts Section */}
        <div className="mb-16">
          <h3 className="text-xl sm:text-2xl font-bold mb-8" style={{ color: '#155d29' }}>
            Artículos Destacados
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
            {featuredPosts.map((post) => (
              <article key={post.id} className="group bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 border border-gray-100">
                <div className="relative">
                  <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#155d29' }}>
                          <Calendar className="w-8 h-8 text-white" />
                        </div>
                        <p className="text-sm text-gray-600">Imagen del Proyecto</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-emerald-500 to-green-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1">
                    <span className="text-xs font-medium text-gray-700">Destacado</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString('es-ES')}</span>
                    </div>
                  </div>
                  
                  <h4 className="text-lg font-bold mb-3 text-gray-900 group-hover:text-[#155d29] transition-colors duration-300 text-wrap-balance line-clamp-2">
                    {post.title}
                  </h4>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed text-wrap-pretty line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        <span>{post.views.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle className="w-3 h-3" />
                        <span>{post.comments}</span>
                      </div>
                      <span>{post.readTime}</span>
                    </div>
                    
                    <button className="flex items-center gap-1 text-[#155d29] font-medium text-sm hover:gap-2 transition-all duration-300 group-hover:text-[#0f4a21]">
                      Leer más
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Recent Posts Section */}
        <div className="mb-16">
          <h3 className="text-xl sm:text-2xl font-bold mb-8" style={{ color: '#155d29' }}>
            Publicaciones Recientes
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {recentPosts.map((post) => (
              <article key={post.id} className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200">
                <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Calendar className="w-8 h-8 text-gray-500" />
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="mb-3">
                    <span className="text-xs font-medium px-2 py-1 rounded-full bg-gray-100 text-gray-600">
                      {post.category}
                    </span>
                  </div>
                  
                  <h4 className="text-sm font-bold mb-2 text-gray-900 group-hover:text-[#155d29] transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h4>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{new Date(post.date).toLocaleDateString('es-ES')}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Categories and Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12">
          
          {/* Categories */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold mb-6" style={{ color: '#155d29' }}>
              Categorías
            </h3>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 rounded-full border border-gray-300 text-sm font-medium hover:border-[#155d29] hover:text-[#155d29] transition-all duration-300 hover:shadow-md"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div className="bg-gradient-to-br from-[#155d29] to-[#0f4a21] rounded-2xl p-6 text-white">
            <h3 className="text-xl font-bold mb-4">
              Suscríbete a Nuestro Blog
            </h3>
            <p className="text-sm mb-6 text-green-100">
              Recibe las últimas noticias del sector de transporte especializado
            </p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Tu email"
                className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-green-200 focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm"
              />
              <button className="w-full bg-white text-[#155d29] font-bold py-3 px-4 rounded-lg hover:bg-green-50 transition-all duration-300 transform hover:scale-105">
                Suscribirse
              </button>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-[#155d29] to-[#0f4a21] rounded-2xl text-white">
          <h3 className="text-2xl font-bold mb-4">
            ¿Tienes un Proyecto de Transporte Especializado?
          </h3>
          <p className="mb-6 text-green-100 max-w-2xl mx-auto">
            Nuestro equipo de expertos está listo para asesorarte y desarrollar la mejor solución logística para tu empresa
          </p>
          <button 
            onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-[#155d29] font-bold py-4 px-8 rounded-xl hover:bg-green-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Consultar Proyecto
          </button>
        </div>
      </div>
    </section>
  );
}