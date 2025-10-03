import React, { useState } from 'react';
import { Calendar, User, Clock, ArrowRight, Search, Filter, ChevronLeft, ChevronRight, Tag, Eye, Mail, MapPin, Facebook, Twitter, Linkedin, Share2, MessageSquare, ThumbsUp, Bookmark, Send } from 'lucide-react';
import { Link } from 'wouter';
import Footer from '@/components/footer';
import BlogHeader from '@/components/blog-header';
import { useLanguage } from '../contexts/LanguageContext';
import logoTranservica from "@assets/logo transervica sin fondo_1754163034585.png";

// Real project documentation - TRANSERVICA verified projects
const blogPosts = [
  {
    id: 1,
    title: "Transporte de Auto Transformador 170 Toneladas: Puerto Cabello a Villa de Cura",
    excerpt: "Proyecto ejecutado: Transporte terrestre de auto transformador desde Puerto Cabello, estado Carabobo, hasta Villa de Cura, estado Aragua. Peso: 170 toneladas, Dimensiones: 6.76m x 5.30m, Equipo: Viga portante 16 ejes hidráulicos.",
    content: "Proyecto Ejecutado: Transporte terrestre de auto transformador desde Puerto Cabello, estado Carabobo, hasta Villa de Cura, estado Aragua.\n\n**Especificaciones Técnicas Reales:**\n\n• Carga: Auto transformador eléctrico industrial\n• Peso aproximado: 170 toneladas\n• Dimensiones: 6.76 metros de largo x 5.30 metros de alto\n• Equipo especializado: Viga portante con sistema hidráulico de 16 ejes\n• Punto estratégico: Posicionamiento en inmediaciones del antiguo peaje de Santa Clara, estado Carabobo\n\n**Desafíos del Proyecto:**\n\nEste proyecto requirió una planificación meticulosa debido a las dimensiones excepcionales del transformador y las restricciones de infraestructura vial entre Carabobo y Aragua. Nuestros equipos SCHEUERLE de 16 ejes proporcionaron la distribución de peso necesaria para garantizar un transporte seguro.\n\n**Logros Destacados:**\n\n✅ Transporte exitoso de 170 toneladas sin incidentes\n✅ Coordinación inter-estadal Carabobo-Aragua\n✅ Uso de tecnología alemana SCHEUERLE\n✅ Cumplimiento total de normativas INTT\n\nEsta operación consolida a TRANSERVICA como líder en transporte de cargas excepcionales en Venezuela, demostrando nuestra capacidad técnica y operativa para ejecutar proyectos de infraestructura eléctrica crítica con los más altos estándares de seguridad.",
    author: "Ing. Miguel Pérez",
    date: "2024-12-15",
    readTime: "8 min",
    views: 2847,
    comments: 24,
    category: "Proyectos Especiales",
    tags: ["Auto Transformador", "170 Toneladas", "Puerto Cabello", "Villa de Cura", "SCHEUERLE 16 Ejes"],
    image: "/attached_assets/1_1754173669382.jpeg",
    featured: true
  },
  {
    id: 2,
    title: "Transporte Power House: 4 Módulos de 35 Toneladas en Estado Carabobo",
    excerpt: "Proyecto completado: Transporte terrestre de un Power House dividido en cuatro (04) módulos de caseta en el Estado Carabobo. Peso: 35 toneladas c/u (140 ton total), Dimensiones: 16.00 x 4.00 x 3.70 mts.",
    content: "Proyecto Completado: Transporte terrestre de un Power House dividido en cuatro (04) módulos de caseta en el Estado Carabobo.\n\n**Detalles del Proyecto Power House:**\n\n• Cantidad de módulos: 4 unidades de caseta Power House\n• Peso por módulo: 35 toneladas cada uno\n• Peso total del proyecto: 140 toneladas\n• Dimensiones unitarias: 16.00 x 4.00 x 3.70 metros\n• Equipo utilizado: Modular hidráulico de 8 ejes en línea\n\n**Configuración Especializada:**\n\nLa configuración de 8 ejes en línea de nuestros equipos modulares hidráulicos permitió el transporte simultáneo y eficiente de los módulos Power House, manteniendo la estabilidad y seguridad durante todo el proceso de movilización en territorio carabobeño.\n\n**Resultados del Proyecto:**\n\n✅ 4 módulos transportados exitosamente\n✅ 140 toneladas movilizadas sin incidentes\n✅ Equipos SCHEUERLE 8 ejes funcionando óptimamente\n✅ Coordinación perfecta en Estado Carabobo\n\nLa ejecución exitosa de este proyecto demuestra nuestra experiencia en el manejo de cargas modulares y nuestra capacidad para coordinar múltiples transportes especializados en proyectos de infraestructura industrial.",
    author: "Ing. José Ramírez",
    date: "2024-11-28",
    readTime: "6 min",
    views: 1652,
    comments: 18,
    category: "Proyectos Especiales",
    tags: ["Power House", "35 Toneladas", "Carabobo", "Modular 8 Ejes", "SCHEUERLE"],
    image: "/attached_assets/2_1754173669382.jpg",
    featured: true
  },
  {
    id: 3,
    title: "Transporte Reactor Monofásico 70 Toneladas: Puerto Cabello a Anzoátegui",
    excerpt: "Proyecto inter-estadal: Transporte terrestre de reactor monofásico de potencia desde Puerto Cabello, estado Carabobo, hasta la Subestación eléctrica San Gerónimo, estado Anzoátegui. Peso: 70 toneladas.",
    content: "Proyecto Inter-Estadal: Transporte terrestre de reactor monofásico de potencia desde Puerto Cabello, estado Carabobo, hasta la Subestación eléctrica San Gerónimo, estado Anzoátegui.\n\n**Especificaciones del Reactor Monofásico:**\n\n• Tipo de carga: Reactor monofásico de potencia industrial\n• Peso total: 70 toneladas\n• Dimensiones exactas: 3.93 x 4.40 x 4.35 metros\n• Configuración de transporte: Equipo modular hidráulico 3+3 con plataforma intermedia\n• Destino final: Subestación eléctrica San Gerónimo, Anzoátegui\n\n**Tecnología de Transporte Avanzada:**\n\nLa configuración 3+3 con plataforma intermedia de nuestros equipos SCHEUERLE proporcionó la flexibilidad necesaria para este transporte de larga distancia inter-estadal, garantizando la distribución óptima del peso y la estabilidad del reactor durante el trayecto.\n\n**Logro Inter-Estadal:**\n\n✅ Transporte exitoso Carabobo → Anzoátegui\n✅ 70 toneladas movilizadas con configuración 3+3\n✅ Entrega precisa en Subestación San Gerónimo\n✅ Coordinación multi-estadal efectiva\n\nEste proyecto demuestra nuestra capacidad para ejecutar transportes de larga distancia con equipos especializados, manteniendo los más altos estándares de seguridad en rutas inter-estadales complejas.",
    author: "Ing. Fernando Silva",
    date: "2024-11-10",
    readTime: "7 min",
    views: 3120,
    comments: 31,
    category: "Proyectos Especiales",
    tags: ["Reactor Monofásico", "70 Toneladas", "Anzoátegui", "SCHEUERLE 3+3", "Inter-Estadal"],
    image: "/attached_assets/3_1754173669382.jpg",
    featured: false
  },
  {
    id: 4,
    title: "Transporte Transformador 333MVA 180 Toneladas: Puerto Cabello a Miranda",
    excerpt: "Proyecto de alta potencia: Transporte terrestre de transformador de 333MVA desde Puerto Cabello, estado Carabobo, hasta la Subestación eléctrica SUR, estado Miranda. Peso: 180 toneladas.",
    content: "Proyecto de Alta Potencia: Transporte terrestre de transformador de 333MVA desde Puerto Cabello, estado Carabobo, hasta la Subestación eléctrica SUR, estado Miranda.\n\n**Especificaciones del Transformador 333MVA:**\n\n• Potencia nominal: 333MVA (mega voltios amperios)\n• Peso total: 180 toneladas\n• Dimensiones: 6.42 x 4.67 x 4.40 metros\n• Equipo de transporte: Viga portante de 16 ejes\n• Destino: Subestación eléctrica SUR, estado Miranda\n\n**Viga Portante de Máxima Capacidad:**\n\nEste proyecto de gran envergadura requirió nuestra viga portante más robusta de 16 ejes, capaz de soportar y distribuir uniformemente las 180 toneladas del transformador 333MVA durante el trayecto desde Carabobo hasta Miranda.\n\n**Proyecto de Alta Tensión Completado:**\n\n✅ Transformador 333MVA transportado exitosamente\n✅ 180 toneladas con viga portante 16 ejes\n✅ Entrega segura en Subestación SUR, Miranda\n✅ Proyecto eléctrico de máxima complejidad\n\nLa ejecución exitosa de este proyecto de alta potencia consolida nuestra posición como líderes en transporte de equipos eléctricos de gran capacidad, demostrando nuestra expertise en proyectos críticos de infraestructura energética nacional.",
    author: "Ing. Alberto González",
    date: "2024-10-22",
    readTime: "8 min",
    views: 1893,
    comments: 15,
    category: "Proyectos Especiales",
    tags: ["Transformador 333MVA", "180 Toneladas", "Miranda", "Viga Portante 16 Ejes", "Alta Potencia"],
    image: "/attached_assets/4_1754173669383.jpg",
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
    category: "Proyectos Especiales",
    tags: ["Vagones Ferroviarios", "IFE Charallave", "Cometto 4+4", "Cappon", "Puerto Cabello"],
    image: "/attached_assets/5_1754173669383.jpg",
    featured: true
  },
  {
    id: 8,
    title: "Transporte Transformador 420 MVA: Represa Simón Bolívar-Guri",
    excerpt: "Proyecto de máxima capacidad en el Estado Bolívar: Transporte de transformador de 420 MVA desde Represa Macagua hasta Represa Simón Bolívar-Guri. Peso: 245 toneladas, Equipo: Cometto modular (8+8) ejes.",
    content: "TRANSERVICA ejecutó exitosamente uno de los proyectos de transporte eléctrico de mayor envergadura en el Estado Bolívar: el traslado de un transformador de 420 MVA desde la Represa Macagua hasta la Represa Simón Bolívar-Guri.\n\n**Especificaciones Técnicas del Transformador 420 MVA:**\n\n✅ Potencia nominal: 420 MVA (mega voltios amperios)\n✅ Peso total: 245 toneladas\n✅ Dimensiones: 8.45 metros de largo × 4.9 metros de alto × 4.55 metros de ancho\n✅ Destino: Represa Simón Bolívar-Guri, Estado Bolívar\n✅ Duración del proyecto: 5 días de traslado\n\n**Equipos Especializados de Alta Capacidad:**\n\nPara este proyecto de infraestructura crítica nacional, TRANSERVICA desplegó equipamiento de última generación:\n\n🔧 Marca: Cometto\n🔧 Configuración: Trailer modular hidráulico (8+8) ejes + Transpor Frame\n🔧 Capacidad por eje: 25,000 kg\n🔧 Capacidad total del sistema: 400,000 kg (400 toneladas)\n\n**Desafío Hidroeléctrico Nacional:**\n\nEste transporte representa uno de los proyectos más importantes para la infraestructura energética de Venezuela. El transformador de 420 MVA es esencial para la operación del Complejo Hidroeléctrico Simón Bolívar (Represa de Guri), la principal fuente de generación eléctrica del país.\n\nLa configuración especial de 16 ejes (8+8) con Transpor Frame permitió distribuir uniformemente las 245 toneladas del transformador, garantizando estabilidad y seguridad durante los cinco días de operación en territorio bolivarense.\n\n**Logros del Proyecto:**\n\n✅ Transformador 420 MVA transportado exitosamente\n✅ 245 toneladas movilizadas con sistema Cometto (8+8) ejes\n✅ Traslado Represa Macagua → Represa Guri completado\n✅ Proyecto hidroeléctrico de importancia nacional\n✅ Operación de 5 días ejecutada sin incidentes\n\nEste proyecto consolida a TRANSERVICA como el socio estratégico para proyectos de infraestructura energética de máxima complejidad en Venezuela, demostrando nuestra capacidad para movilizar equipos de potencia ultra-alta con los más altos estándares de seguridad y eficiencia operativa.",
    date: "2025-01-15",
    readTime: "9 min",
    views: 2156,
    comments: 27,
    category: "Proyectos Especiales",
    tags: ["Transformador 420MVA", "Represa Guri", "Cometto 8+8", "Estado Bolívar", "245 Toneladas"],
    image: "/attached_assets/1_1754173669382.jpeg",
    featured: true
  }
];

const categories = [
  "Todos los Artículos",
  "Proyectos Especiales"
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("Todos los Artículos");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPost, setSelectedPost] = useState<any>(null);
  const { t } = useLanguage();
  const postsPerPage = 9;

  // Handle scroll to blog main section on page load
  React.useEffect(() => {
    const hash = window.location.hash;
    if (hash === '#blog-main') {
      // Multiple attempts to ensure scroll works
      const scrollToMain = () => {
        const element = document.getElementById('blog-main');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      };
      
      // Immediate attempt
      scrollToMain();
      
      // Fallback attempts for slower loading
      setTimeout(scrollToMain, 100);
      setTimeout(scrollToMain, 300);
      setTimeout(scrollToMain, 600);
    }
  }, []);

  // Listen for hash changes during navigation
  React.useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#blog-main') {
        setTimeout(() => {
          const element = document.getElementById('blog-main');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const scrollToSection = (sectionId: string) => {
    // Navigate to home page and scroll to specific section
    window.location.href = `/#${sectionId}`;
    // Add a small delay to ensure the page loads before scrolling
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
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
        {/* Reusable Header Component */}
        <BlogHeader 
          showBackButton={true} 
          onBackClick={() => setSelectedPost(null)} 
        />

        {/* Article Content with Sidebar Layout */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Article Content */}
            <article className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  {selectedPost.id === 1 ? (
                    <iframe
                      src="https://www.youtube.com/embed/JnWnFe_QdnE?autoplay=1&mute=1&loop=1&playlist=JnWnFe_QdnE&vq=hd2160"
                      title={selectedPost.title}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : selectedPost.id === 2 ? (
                    <iframe
                      src="https://www.youtube.com/embed/4ZfZ5YFelkQ?autoplay=1&mute=1&loop=1&playlist=4ZfZ5YFelkQ&vq=hd2160"
                      title={selectedPost.title}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : selectedPost.id === 3 ? (
                    <iframe
                      src="https://www.youtube.com/embed/44lpgBO22qU?autoplay=1&mute=1&loop=1&playlist=44lpgBO22qU&vq=hd2160"
                      title={selectedPost.title}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : selectedPost.id === 4 ? (
                    <iframe
                      src="https://www.youtube.com/embed/54hazc90eNk?autoplay=1&mute=1&loop=1&playlist=54hazc90eNk&vq=hd2160"
                      title={selectedPost.title}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : selectedPost.id === 7 ? (
                    <iframe
                      src="https://www.youtube.com/embed/NW9Huszovqw?start=30&end=171&autoplay=1&mute=1&loop=1&playlist=NW9Huszovqw&vq=hd2160"
                      title={selectedPost.title}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : selectedPost.id === 8 ? (
                    <iframe
                      src="https://www.youtube.com/embed/JJjJ6lF_4oI?start=22&end=86&autoplay=1&mute=1&loop=1&playlist=JJjJ6lF_4oI&vq=hd2160"
                      title={selectedPost.title}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <img
                      src={selectedPost.image}
                      alt={selectedPost.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                
                <div className="p-8">
                  <h1 className="text-3xl lg:text-4xl font-bold mb-6" style={{ color: '#155d29' }}>
                    {selectedPost.title}
                  </h1>

                  {/* Article Metadata */}
                  <div className="flex flex-wrap items-center gap-4 mb-6 pb-6 border-b border-gray-200">
                    <div className="flex items-center gap-2 text-gray-600">
                      <User className="w-4 h-4" />
                      <span className="text-sm">{selectedPost.author}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{selectedPost.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Eye className="w-4 h-4" />
                      <span className="text-sm">{selectedPost.views} vistas</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <MessageSquare className="w-4 h-4" />
                      <span className="text-sm">{selectedPost.comments} comentarios</span>
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
                    <div className="flex flex-wrap gap-3">
                      <a
                        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        <Facebook className="w-4 h-4" />
                        Facebook
                      </a>
                      <a
                        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(selectedPost.title)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition-colors"
                      >
                        <Twitter className="w-4 h-4" />
                        Twitter
                      </a>
                      <a
                        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors"
                      >
                        <Linkedin className="w-4 h-4" />
                        LinkedIn
                      </a>
                      <button 
                        onClick={() => {
                          navigator.clipboard.writeText(window.location.href);
                          alert('¡Enlace copiado al portapapeles!');
                        }}
                        className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                      >
                        <Share2 className="w-4 h-4" />
                        Copiar enlace
                      </button>
                    </div>
                    
                    {/* Redes Sociales de Transervica */}
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <h4 className="text-sm font-bold mb-3 text-gray-700">Síguenos en nuestras redes sociales:</h4>
                      <div className="flex gap-3">
                        <a
                          href="https://www.facebook.com/people/Grupotranservica/100093036004743"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all hover:scale-105"
                          title="Facebook TRANSERVICA"
                        >
                          <Facebook className="w-4 h-4" />
                          <span className="text-sm">Facebook</span>
                        </a>
                        <a
                          href="https://www.instagram.com/grupotranservica"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white rounded-lg hover:from-purple-600 hover:via-pink-600 hover:to-orange-600 transition-all hover:scale-105"
                          title="Instagram TRANSERVICA"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                          </svg>
                          <span className="text-sm">Instagram</span>
                        </a>
                        <a
                          href="https://www.youtube.com/@transervicac.a.3092"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all hover:scale-105"
                          title="YouTube TRANSERVICA"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                          </svg>
                          <span className="text-sm">YouTube</span>
                        </a>
                      </div>
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
      {/* Reusable Header Component */}
      <BlogHeader />

      {/* Mobile-Optimized Professional Blog Banner */}
      <section className="relative py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
        {/* Optimized Background Pattern for Mobile */}
        <div className="absolute inset-0 opacity-5 lg:opacity-8">
          <div className="absolute top-10 left-10 lg:top-20 lg:left-20 w-48 lg:w-96 h-48 lg:h-96 border border-gray-200/30 lg:border-2 lg:border-gray-200/50 rounded-full"></div>
          <div className="absolute bottom-10 right-10 lg:bottom-20 lg:right-20 w-32 lg:w-64 h-32 lg:h-64 border border-gray-300/20 lg:border-gray-300/30 rounded-full"></div>
          <div className="hidden lg:block absolute top-1/2 right-1/3 w-48 h-48 bg-[#155d29]/5 rounded-full blur-3xl"></div>
          <div className="hidden lg:block absolute bottom-1/3 left-1/3 w-56 h-56 bg-gray-200/40 rounded-full blur-2xl"></div>
        </div>

        {/* Simplified Geometric Elements for Mobile */}
        <div className="absolute inset-0 opacity-10 lg:opacity-15">
          <div className="absolute top-12 right-12 lg:top-24 lg:right-40 w-4 lg:w-6 h-4 lg:h-6 bg-[#155d29] transform rotate-45"></div>
          <div className="absolute bottom-20 left-12 lg:bottom-40 lg:left-40 w-6 lg:w-8 h-6 lg:h-8 border lg:border-2 border-[#155d29] transform rotate-12"></div>
          <div className="hidden lg:block absolute top-1/3 left-24 w-3 h-3 bg-[#155d29] rounded-full"></div>
          <div className="hidden lg:block absolute bottom-1/4 right-24 w-4 h-4 border border-[#155d29] transform rotate-45"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          {/* Mobile-Optimized Header */}
          <div className="mb-8 lg:mb-12">
            <div className="inline-flex items-center justify-center w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 bg-white rounded-2xl lg:rounded-3xl shadow-xl lg:shadow-2xl mb-6 lg:mb-8 border border-gray-200">
              <img 
                src={logoTranservica}
                alt="TRANSERVICA - Blog Corporativo"
                className="h-16 sm:h-20 lg:h-24 w-auto filter contrast-125 brightness-105"
                loading="eager"
              />
            </div>
            <div className="inline-flex items-center gap-2 lg:gap-3 bg-[#155d29]/10 backdrop-blur-sm rounded-full px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 border border-[#155d29]/20">
              <div className="w-2 lg:w-3 h-2 lg:h-3 bg-[#155d29] rounded-full"></div>
              <span className="text-[#155d29] font-bold text-xs sm:text-sm uppercase tracking-wide lg:tracking-widest">Blog Corporativo</span>
            </div>
          </div>

          {/* Responsive Main Title */}
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl font-black mb-6 lg:mb-10 leading-tight lg:leading-none text-[#155d29]">
              <span className="block drop-shadow-md lg:drop-shadow-lg">CENTRO DE</span>
              <span className="block text-gray-800 drop-shadow-sm lg:drop-shadow-md">
                CONOCIMIENTO
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-gray-700 mb-8 lg:mb-14 max-w-4xl lg:max-w-5xl mx-auto leading-relaxed font-light px-4 lg:px-0">
              Noticias exclusivas, proyectos emblemáticos y expertise técnico de
              <span className="font-bold text-[#155d29]"> 40 años</span> en 
              <span className="font-bold text-[#155d29]"> transporte de cargas excepcionales</span>
            </p>

            {/* Mobile-Optimized Stats Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-10 lg:mb-16 px-2 sm:px-0">
              <div className="bg-white rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-8 border border-gray-200 shadow-lg lg:shadow-xl group hover:shadow-xl lg:hover:shadow-2xl transition-all duration-300 hover:border-[#155d29]/30">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#155d29] mb-2 lg:mb-4 group-hover:scale-105 transition-transform">40+</div>
                <div className="text-xs sm:text-sm text-gray-600 font-bold uppercase tracking-wide">Años de Experiencia</div>
              </div>
              <div className="bg-white rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-8 border border-gray-200 shadow-lg lg:shadow-xl group hover:shadow-xl lg:hover:shadow-2xl transition-all duration-300 hover:border-[#155d29]/30">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-800 mb-2 lg:mb-4 group-hover:scale-105 transition-transform">1,100</div>
                <div className="text-xs sm:text-sm text-gray-600 font-bold uppercase tracking-wide">Toneladas Máximas</div>
              </div>
              <div className="bg-white rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-8 border border-gray-200 shadow-lg lg:shadow-xl group hover:shadow-xl lg:hover:shadow-2xl transition-all duration-300 hover:border-[#155d29]/30">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#155d29] mb-2 lg:mb-4 group-hover:scale-105 transition-transform">15K+</div>
                <div className="text-xs sm:text-sm text-gray-600 font-bold uppercase tracking-wide">Proyectos Exitosos</div>
              </div>
              <div className="bg-white rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-8 border border-gray-200 shadow-lg lg:shadow-xl group hover:shadow-xl lg:hover:shadow-2xl transition-all duration-300 hover:border-[#155d29]/30">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-800 mb-2 lg:mb-4 group-hover:scale-105 transition-transform">99.8%</div>
                <div className="text-xs sm:text-sm text-gray-600 font-bold uppercase tracking-wide">Récord de Seguridad</div>
              </div>
            </div>

            {/* Responsive Divider */}
            <div className="flex items-center justify-center gap-4 lg:gap-8 mb-8 lg:mb-12">
              <div className="w-16 lg:w-32 h-0.5 lg:h-1 bg-gradient-to-r from-transparent via-[#155d29] to-transparent rounded-full"></div>
              <div className="w-3 lg:w-5 h-3 lg:h-5 bg-[#155d29] rounded-full shadow-lg"></div>
              <div className="w-16 lg:w-32 h-0.5 lg:h-1 bg-gradient-to-r from-transparent via-gray-400 to-transparent rounded-full"></div>
            </div>

            {/* Mobile-Optimized Corporate Information */}
            <div className="bg-white/90 lg:bg-white/80 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-6 lg:p-10 border border-gray-200 shadow-xl lg:shadow-2xl mx-2 sm:mx-0">
              <p className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#155d29] mb-3 lg:mb-4">
                TRANSERVICA, C.A.
              </p>
              <p className="text-base sm:text-lg lg:text-xl text-gray-700 font-medium leading-relaxed">
                Líder absoluto en Venezuela en transporte especializado y logística de cargas excepcionales
              </p>
            </div>
          </div>
        </div>
      </section>

      <div id="blog-main" className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Mobile-Optimized Search and Filters */}
        <div className="mb-8 lg:mb-12">
          <div className="bg-white rounded-xl lg:rounded-2xl shadow-md lg:shadow-lg p-4 lg:p-6 border border-gray-100">
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
              {/* Mobile-Optimized Search */}
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 lg:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 lg:w-5 h-4 lg:h-5" />
                  <input
                    type="text"
                    placeholder="Buscar artículos, proyectos, equipos..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 lg:pl-12 pr-4 py-3 border border-gray-200 rounded-lg lg:rounded-xl focus:outline-none focus:ring-2 focus:ring-[#155d29] focus:border-transparent text-sm lg:text-base"
                  />
                </div>
              </div>

              {/* Mobile-Optimized Category Filter */}
              <div className="lg:w-80">
                <div className="relative">
                  <Filter className="absolute left-3 lg:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 lg:w-5 h-4 lg:h-5" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full pl-10 lg:pl-12 pr-4 py-3 border border-gray-200 rounded-lg lg:rounded-xl focus:outline-none focus:ring-2 focus:ring-[#155d29] focus:border-transparent appearance-none bg-white text-sm lg:text-base"
                  >
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile-Optimized Featured Posts */}
        {selectedCategory === "Todos los Artículos" && (
          <section className="mb-8 lg:mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold mb-6 lg:mb-8 text-[#155d29] px-2 lg:px-0">
              Artículos Destacados
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              {blogPosts.filter(post => post.featured).slice(0, 2).map((post, index) => {
                // Find the global position of this featured post in the complete list
                const globalIndex = filteredPosts.findIndex(p => p.id === post.id) + 1;
                
                return (
                  <article
                    key={post.id}
                    className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:scale-105 overflow-hidden cursor-pointer mx-2 lg:mx-0"
                    onClick={() => setSelectedPost(post)}
                  >
                    {/* Video/Image container */}
                    <div className="relative h-80 overflow-hidden">
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
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                          loading="lazy"
                        />
                      )}
                      
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Hover button */}
                      <div className="absolute inset-0 flex items-end justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <button 
                          className="text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                          style={{ backgroundColor: '#155d29' }}
                          onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = '#0f4a21'}
                          onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = '#155d29'}
                        >
                          Leer Artículo
                        </button>
                      </div>
                    </div>

                    {/* Article info */}
                    <div className="p-6">
                      <span className="px-3 py-1 bg-[#155d29] text-white text-xs font-medium rounded-full inline-block mb-3">
                        {post.category}
                      </span>
                      
                      <h3 className="text-xl font-bold mb-3 transition-colors duration-300" style={{ color: '#155d29' }}>
                        {post.title}
                      </h3>
                      
                      <p className="text-slate-600 mb-4 leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{post.date}</span>
                        </div>
                      </div>
                    </div>

                    {/* Animated border */}
                    <div className="absolute inset-0 border-2 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ borderColor: '#155d29' }}></div>
                  </article>
                );
              })}
            </div>
          </section>
        )}

        {/* Mobile-Optimized All Posts Grid */}
        <section>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 lg:mb-8 px-2 lg:px-0 gap-2">
            <h2 className="text-2xl lg:text-3xl font-bold text-[#155d29]">
              {selectedCategory === "Todos los Artículos" ? "Todos los Artículos" : selectedCategory}
            </h2>
            <span className="text-sm lg:text-base text-gray-600">
              {filteredPosts.length} artículo{filteredPosts.length !== 1 ? 's' : ''}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {currentPosts.map((post, index) => {
              // Calculate global article number based on pagination and filtered posts
              const globalIndex = filteredPosts.findIndex(p => p.id === post.id) + 1;
              
              return (
                <article
                  key={post.id}
                  className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:scale-105 overflow-hidden cursor-pointer mx-2 sm:mx-0"
                  onClick={() => setSelectedPost(post)}
                >
                  {/* Video/Image container */}
                  <div className="relative h-64 overflow-hidden">
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
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                    )}
                    
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Hover button */}
                    <div className="absolute inset-0 flex items-end justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <button 
                        className="text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                        style={{ backgroundColor: '#155d29' }}
                        onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = '#0f4a21'}
                        onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = '#155d29'}
                      >
                        Leer Artículo
                      </button>
                    </div>
                  </div>

                  {/* Article info */}
                  <div className="p-6">
                    <span className="px-3 py-1 bg-[#155d29] text-white text-xs font-medium rounded-full inline-block mb-3">
                      {post.category}
                    </span>
                    
                    <h3 className="text-xl font-bold mb-3 transition-colors duration-300" style={{ color: '#155d29' }}>
                      {post.title}
                    </h3>
                    
                    <p className="text-slate-600 mb-4 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageSquare className="w-4 h-4" />
                        <span>{post.comments}</span>
                      </div>
                    </div>
                  </div>

                  {/* Animated border */}
                  <div className="absolute inset-0 border-2 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ borderColor: '#155d29' }}></div>
                </article>
              );
            })}
          </div>

          {/* Mobile-Optimized Pagination */}
          {totalPages > 1 && (
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 lg:gap-4 mt-8 lg:mt-12 px-2 lg:px-0">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="flex items-center gap-2 px-3 lg:px-4 py-2 border border-gray-300 rounded-lg hover:border-[#155d29] hover:text-[#155d29] transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm lg:text-base w-full sm:w-auto justify-center"
              >
                <ChevronLeft className="w-4 h-4" />
                Anterior
              </button>

              <div className="flex gap-1 lg:gap-2 overflow-x-auto max-w-full">
                {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                  let page;
                  if (totalPages <= 5) {
                    page = i + 1;
                  } else if (currentPage <= 3) {
                    page = i + 1;
                  } else if (currentPage >= totalPages - 2) {
                    page = totalPages - 4 + i;
                  } else {
                    page = currentPage - 2 + i;
                  }
                  
                  return (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`w-8 lg:w-10 h-8 lg:h-10 rounded-lg font-medium transition-colors text-sm lg:text-base ${
                        currentPage === page
                          ? 'bg-[#155d29] text-white'
                          : 'border border-gray-300 hover:border-[#155d29] hover:text-[#155d29]'
                      }`}
                    >
                      {page}
                    </button>
                  );
                })}
                {totalPages > 5 && currentPage < totalPages - 2 && (
                  <>
                    <span className="flex items-center px-2 text-gray-400">...</span>
                    <button
                      onClick={() => setCurrentPage(totalPages)}
                      className="w-8 lg:w-10 h-8 lg:h-10 rounded-lg font-medium transition-colors text-sm lg:text-base border border-gray-300 hover:border-[#155d29] hover:text-[#155d29]"
                    >
                      {totalPages}
                    </button>
                  </>
                )}
              </div>

              <button
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="flex items-center gap-2 px-3 lg:px-4 py-2 border border-gray-300 rounded-lg hover:border-[#155d29] hover:text-[#155d29] transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm lg:text-base w-full sm:w-auto justify-center"
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