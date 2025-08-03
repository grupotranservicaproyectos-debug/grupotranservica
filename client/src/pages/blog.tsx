import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { Calendar, Clock, User, ArrowRight, Tag, Phone, Mail, MapPin } from 'lucide-react';
import transervicaLogoPath from '@assets/logo transervica sin fondo_1754162248611.png';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  publishDate: string;
  readTime: number;
  featuredImage: string;
  keywords: string[];
  cta: {
    text: string;
    action: string;
  };
}

const blogPosts: BlogPost[] = [
  {
    id: 'transformador-333-mva',
    title: 'Transporte de Transformador 333 MVA: Un Hito en Venezuela',
    excerpt: 'Detalles técnicos del proyecto más desafiante ejecutado por TRANSERVICA, superando obstáculos logísticos únicos en el país.',
    content: `El transporte de un transformador de 333 MVA representa uno de los proyectos más complejos ejecutados por TRANSERVICA en sus 40 años de experiencia. Este proyecto requirió una planificación meticulosa y el uso de nuestra tecnología más avanzada.

    ## Especificaciones del Proyecto
    
    - **Peso total**: 380 toneladas
    - **Dimensiones**: 12m x 4.5m x 5.2m
    - **Ruta**: Desde Puerto de La Guaira hasta Complejo Petroquímico
    - **Distancia**: 420 kilómetros
    - **Tiempo de ejecución**: 72 horas continuas
    
    ## Desafíos Técnicos Superados
    
    El transporte requirió modificaciones de infraestructura en 15 puentes y la coordinación con 8 instituciones gubernamentales diferentes. Nuestros trailers modulares hidráulicos SCHEUERLE fueron fundamentales para distribuir el peso de manera segura.
    
    ## Equipos Utilizados
    
    - 24 ejes modulares hidráulicos SCHEUERLE
    - Grúas Grove de 500 toneladas para el posicionamiento
    - Vehículos de escolta especializados
    - Sistema de monitoreo GPS en tiempo real
    
    Este proyecto consolidó a TRANSERVICA como líder indiscutible en el transporte de cargas excepcionales en Venezuela, demostrando nuestra capacidad para ejecutar proyectos de cualquier complejidad.`,
    category: 'Proyectos Ejecutados',
    author: 'Ing. Carlos Rodríguez',
    publishDate: '2024-01-15',
    readTime: 8,
    featuredImage: '@assets/27_1754185586558.png',
    keywords: ['transporte transformador Venezuela', '333 MVA', 'cargas excepcionales'],
    cta: {
      text: 'Solicita cotización para tu proyecto',
      action: 'contact'
    }
  },
  {
    id: 'gruas-alemanas-grove-liebherr',
    title: 'Grúas Alemanas Grove y Liebherr: Tecnología de Vanguardia',
    excerpt: 'Conoce las especificaciones técnicas y ventajas competitivas de nuestras grúas alemanas de última generación.',
    content: `Las grúas alemanas Grove y Liebherr representan el estándar más alto en tecnología de izamiento, ofreciendo precisión, seguridad y capacidad incomparables para proyectos de gran envergadura.

    ## Especificaciones Técnicas Grove

    - **Capacidad máxima**: 500 toneladas
    - **Altura máxima**: 84 metros
    - **Radio de trabajo**: 52 metros
    - **Tecnología**: Sistema hidráulico computarizado
    - **Certificaciones**: CE, ANSI, ISO 9001

    ## Ventajas Liebherr

    - **Precisión micrométrica**: Control de posicionamiento ±2mm
    - **Eficiencia energética**: 30% menos consumo de combustible
    - **Mantenimiento predictivo**: Sensores IoT integrados
    - **Seguridad avanzada**: Sistema de detección de obstáculos

    ## Aplicaciones Principales

    Nuestras grúas alemanas son ideales para:
    - Instalación de equipos industriales pesados
    - Construcción de plantas petroquímicas
    - Montaje de turbinas generadoras
    - Proyectos de construcción naval
    - Izamiento de estructuras metálicas

    ## Certificaciones y Normativas

    Todos nuestros equipos cumplen con las normativas internacionales más exigentes y son operados por personal certificado con más de 15 años de experiencia en proyectos complejos.

    La inversión en tecnología alemana nos permite ofrecer servicios de izamiento con los más altos estándares de calidad y seguridad en Venezuela.`,
    category: 'Tecnología y Equipos',
    author: 'Ing. María González',
    publishDate: '2024-01-22',
    readTime: 6,
    featuredImage: '@assets/31-copia-copia_1754185586561.png',
    keywords: ['grúas alemanas Venezuela', 'Grove Liebherr', 'tecnología izamiento'],
    cta: {
      text: 'Conoce nuestros equipos',
      action: 'equipos'
    }
  },
  {
    id: '40-anos-transportando-futuro',
    title: '40 Años Transportando el Futuro de Venezuela',
    excerpt: 'Un recorrido por la evolución de TRANSERVICA desde sus inicios hasta convertirse en líder del sector logístico nacional.',
    content: `Desde 1984, TRANSERVICA ha sido protagonista del desarrollo industrial de Venezuela, transportando los equipos y maquinarias que han construido el país.

    ## Los Primeros Años (1984-1994)

    Fundada por visionarios del sector logístico, TRANSERVICA comenzó con una flota modesta pero con la ambición de revolucionar el transporte de cargas especiales en Venezuela. Los primeros proyectos incluyeron:

    - Transporte de equipos para refinería El Palito
    - Maquinaria pesada para Sidor
    - Turbinas para centrales hidroeléctricas

    ## Expansión y Modernización (1995-2010)

    La década de los 90 marcó el crecimiento exponencial de la empresa:
    - Adquisición de la primera flota SCHEUERLE
    - Certificación ISO 9001:2000
    - Expansión a proyectos internacionales
    - Creación del departamento de ingeniería logística

    ## Era Digital y Tecnológica (2011-2024)

    Los últimos años han estado marcados por la innovación:
    - Implementación de sistemas GPS de monitoreo
    - Flota 100% renovada con tecnología europea
    - Servicios de logística integral 4.0
    - Sostenibilidad ambiental certificada

    ## Hitos Más Importantes

    - **1987**: Primer transporte de 200+ toneladas
    - **1995**: Certificación internacional
    - **2003**: Proyecto Complejo Criogénico de Oriente
    - **2012**: Récord nacional: 380 toneladas
    - **2024**: 40 años de excelencia operativa

    ## El Futuro

    Con la mirada puesta en el futuro, TRANSERVICA continúa invirtiendo en tecnología, capacitación y sostenibilidad para seguir siendo el socio estratégico preferido de las principales industrias venezolanas.`,
    category: 'Historia Corporativa',
    author: 'Fundadores TRANSERVICA',
    publishDate: '2024-02-01',
    readTime: 10,
    featuredImage: '@assets/30 - copia_1754185586560.png',
    keywords: ['historia Transervica', '40 años experiencia', 'transporte Venezuela'],
    cta: {
      text: 'Conoce nuestra trayectoria',
      action: 'nosotros'
    }
  },
  {
    id: 'normativas-intt-cargas-excepcionales',
    title: 'Normativas INTT para Transporte de Cargas Excepcionales',
    excerpt: 'Guía completa actualizada sobre permisos, regulaciones y procedimientos del INTT para el transporte de cargas excepcionales.',
    content: `El Instituto Nacional de Transporte Terrestre (INTT) regula estrictamente el transporte de cargas excepcionales en Venezuela. Conoce todos los requisitos actualizados.

    ## Definición de Carga Excepcional

    Según el INTT, se considera carga excepcional aquella que excede:
    - **Peso**: 48 toneladas brutas
    - **Ancho**: 2.60 metros
    - **Alto**: 4.30 metros  
    - **Largo**: 20 metros

    ## Documentación Requerida

    ### Permisos Básicos
    - Solicitud formal dirigida al INTT
    - Planos detallados de la carga
    - Especificaciones del vehículo transportador
    - Ruta propuesta con alternativas
    - Póliza de seguro por daños a terceros

    ### Documentación Técnica
    - Análisis estructural de puentes en la ruta
    - Estudio de impacto vial
    - Plan de contingencia y seguridad
    - Certificado de operadores especializados
    - Evaluación ambiental (casos específicos)

    ## Proceso de Aprobación

    ### Tiempos Estimados
    - **Evaluación inicial**: 15 días hábiles
    - **Inspección técnica**: 10 días hábiles
    - **Aprobación final**: 20 días hábiles
    - **Total promedio**: 45 días hábiles

    ### Costos Asociados (2024)
    - Permiso básico: 50-150 Petros
    - Inspección técnica: 25-75 Petros
    - Escolta policial: Variable según ruta
    - Reparaciones viales (si aplica): Variable

    ## Rutas Especiales

    ### Restricciones por Estados
    - **Caracas**: Horarios nocturnos únicamente
    - **Zulia**: Evaluación especial por peso
    - **Bolívar**: Restricciones en época de lluvias
    - **Carabobo**: Coordinación con autoridades locales

    ## Servicios TRANSERVICA

    Como empresa certificada por el INTT, TRANSERVICA gestiona todos los permisos y documentación requerida, garantizando el cumplimiento total de las normativas vigentes.

    Nuestro equipo legal especializado mantiene actualizada toda la documentación necesaria y mantiene relaciones institucionales que agilizan los procesos de aprobación.`,
    category: 'Normativas INTT',
    author: 'Depto. Legal TRANSERVICA',
    publishDate: '2024-02-10',
    readTime: 12,
    featuredImage: '@assets/24_1754185586556.png',
    keywords: ['permisos INTT Venezuela', 'cargas excepcionales', 'normativas transporte'],
    cta: {
      text: 'Gestiona tus permisos con nosotros',
      action: 'contact'
    }
  },
  {
    id: 'trailers-modulares-hidraulicos',
    title: 'Trailers Modulares Hidráulicos: La Clave del Éxito',
    excerpt: 'Descubre las ventajas técnicas de la tecnología modular hidráulica SCHEUERLE y por qué es esencial para cargas excepcionales.',
    content: `Los trailers modulares hidráulicos representan la tecnología más avanzada para el transporte de cargas excepcionales, ofreciendo flexibilidad, precisión y seguridad incomparables.

    ## Tecnología SCHEUERLE

    ### Características Técnicas Principales
    - **Sistema hidráulico**: Distribución automática de peso
    - **Suspensión adaptativa**: Ajuste en tiempo real
    - **Dirección total**: Maniobrabilidad excepcional
    - **Capacidad modular**: 40-80 toneladas por eje
    - **Control remoto**: Operación a distancia

    ## Ventajas Competitivas

    ### Flexibilidad Operativa
    - Configuración variable según la carga
    - Combinación de múltiples módulos
    - Adaptación a diferentes alturas
    - Capacidad de rotación 360°

    ### Seguridad Avanzada
    - Distribución uniforme del peso
    - Estabilidad en curvas y pendientes
    - Sistema de frenado independiente
    - Monitoreo electrónico continuo

    ### Eficiencia Económica
    - Reducción de costos operativos
    - Menor desgaste de pavimento
    - Optimización de rutas
    - Mantenimiento predictivo

    ## Aplicaciones Específicas

    ### Industria Petroquímica
    - Reactores de refinería
    - Torres de destilación
    - Intercambiadores de calor
    - Compresores industriales

    ### Sector Energético
    - Transformadores de potencia
    - Turbinas generadoras
    - Rotores de centrales
    - Equipos de subestaciones

    ### Industria Naval
    - Bloques de casco
    - Motores marinos
    - Hélices de gran tamaño
    - Estructuras portuarias

    ## Certificaciones Internacionales

    Nuestros trailers SCHEUERLE cuentan con:
    - Certificación TÜV alemana
    - Homologación europea CE
    - Normativa ANSI americana
    - Estándares ISO 9001

    ## Mantenimiento Especializado

    TRANSERVICA cuenta con técnicos certificados por SCHEUERLE para:
    - Mantenimiento preventivo programado
    - Reparaciones especializadas
    - Actualización de software
    - Repuestos originales garantizados

    La inversión en tecnología alemana nos permite ofrecer servicios de transporte con los más altos estándares de calidad, seguridad y eficiencia en Venezuela y la región.`,
    category: 'Tecnología y Equipos',
    author: 'Ing. Pedro Martínez',
    publishDate: '2024-02-18',
    readTime: 9,
    featuredImage: '@assets/29_1754185586560.png',
    keywords: ['trailers modulares hidráulicos', 'SCHEUERLE Venezuela', 'tecnología transporte'],
    cta: {
      text: 'Solicita información técnica',
      action: 'contact'
    }
  }
];

const categories = [
  'Todos',
  'Proyectos Ejecutados',
  'Tecnología y Equipos',
  'Historia Corporativa',
  'Normativas INTT'
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  // SEO Meta Tags
  useEffect(() => {
    if (selectedPost) {
      document.title = `${selectedPost.title} | Blog TRANSERVICA`;
      
      // Update meta description
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        document.head.appendChild(metaDescription);
      }
      metaDescription.setAttribute('content', selectedPost.excerpt);

      // Update meta keywords
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute('content', selectedPost.keywords.join(', '));

      // Open Graph tags
      let ogTitle = document.querySelector('meta[property="og:title"]');
      if (!ogTitle) {
        ogTitle = document.createElement('meta');
        ogTitle.setAttribute('property', 'og:title');
        document.head.appendChild(ogTitle);
      }
      ogTitle.setAttribute('content', selectedPost.title);

      let ogDescription = document.querySelector('meta[property="og:description"]');
      if (!ogDescription) {
        ogDescription = document.createElement('meta');
        ogDescription.setAttribute('property', 'og:description');
        document.head.appendChild(ogDescription);
      }
      ogDescription.setAttribute('content', selectedPost.excerpt);
    } else {
      document.title = 'Blog TRANSERVICA | Noticias y Proyectos de Transporte de Cargas Excepcionales';
      
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        document.head.appendChild(metaDescription);
      }
      metaDescription.setAttribute('content', 'Descubre las últimas noticias, proyectos ejecutados y avances tecnológicos de TRANSERVICA, líder en transporte de cargas excepcionales en Venezuela.');

      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute('content', 'blog transervica, transporte cargas excepcionales venezuela, noticias logística, proyectos industriales, grúas alemanas, trailers modulares');
    }
  }, [selectedPost]);

  const filteredPosts = selectedCategory === 'Todos' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const handleCTAClick = (action: string) => {
    if (action === 'contact') {
      document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
    } else if (action === 'equipos') {
      document.getElementById('equipos')?.scrollIntoView({ behavior: 'smooth' });
    } else if (action === 'nosotros') {
      document.getElementById('nosotros')?.scrollIntoView({ behavior: 'smooth' });
    }
    // Close modal if open
    setSelectedPost(null);
  };

  const scrollToContact = () => {
    window.parent.postMessage({ type: 'scrollToContact' }, '*');
  };

  if (selectedPost) {
    return (
      <div className="min-h-screen bg-white">
        {/* Header */}
        <div className="bg-[#155d29] text-white py-16">
          <div className="container mx-auto px-4">
            <button 
              onClick={() => setSelectedPost(null)}
              className="mb-4 text-white hover:text-gray-200 transition flex items-center"
            >
              ← Volver al blog
            </button>
            <h1 className="text-4xl font-bold mb-4">{selectedPost.title}</h1>
            <div className="flex items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {selectedPost.author}
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {new Date(selectedPost.publishDate).toLocaleDateString('es-ES')}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {selectedPost.readTime} min lectura
              </div>
              <div className="flex items-center gap-2">
                <Tag className="w-4 h-4" />
                {selectedPost.category}
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <div className="whitespace-pre-line text-gray-700 leading-relaxed">
                {selectedPost.content}
              </div>
            </div>

            {/* CTA Section */}
            <div className="mt-12 p-8 bg-gradient-to-r from-[#155d29] to-green-600 rounded-2xl text-white text-center">
              <h3 className="text-2xl font-bold mb-4">¿Necesitas Nuestros Servicios?</h3>
              <p className="text-lg mb-6 opacity-90">
                Contacta con nuestros especialistas y obtén una solución personalizada para tu proyecto
              </p>
              <button
                onClick={() => handleCTAClick(selectedPost.cta.action)}
                className="bg-white text-[#155d29] px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
              >
                {selectedPost.cta.text}
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Share Section */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h4 className="text-lg font-semibold mb-4">Palabras clave:</h4>
              <div className="flex flex-wrap gap-2">
                {selectedPost.keywords.map((keyword, index) => (
                  <span 
                    key={index}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Logo and Navigation */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src={transervicaLogoPath} 
                alt="TRANSERVICA Logo" 
                className="h-12 w-auto"
              />
              <div className="text-2xl font-bold" style={{ color: '#155d29' }}>
                TRANSERVICA
              </div>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-white transition-all duration-300 font-bold px-4 py-2 rounded-lg hover:bg-transervica-green">
                Inicio
              </Link>
              <Link to="/#services" className="text-gray-700 hover:text-white transition-all duration-300 font-bold px-4 py-2 rounded-lg hover:bg-transervica-green">
                Servicios
              </Link>
              <Link to="/#about" className="text-gray-700 hover:text-white transition-all duration-300 font-bold px-4 py-2 rounded-lg hover:bg-transervica-green">
                Nosotros
              </Link>
              <Link to="/#contact" className="text-gray-700 hover:text-white transition-all duration-300 font-bold px-4 py-2 rounded-lg hover:bg-transervica-green">
                Contacto
              </Link>
              <div className="text-white font-bold px-4 py-2 rounded-lg" style={{ backgroundColor: '#155d29' }}>
                Blog
              </div>
            </nav>

            {/* Contact Info */}
            <div className="hidden lg:flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" style={{ color: '#155d29' }} />
                <span className="font-semibold">+58 212-555-0123</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" style={{ color: '#155d29' }} />
                <span className="font-semibold">direccioncomercialtvc@grupotranservica.com</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-[#155d29] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Blog Transervica</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Noticias, proyectos y novedades del sector transporte de cargas excepcionales
          </p>
        </div>
      </div>

      {/* Categories Filter */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-4 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-[#155d29] text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Blog Grid */}
      <div className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article 
              key={post.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
              onClick={() => setSelectedPost(post)}
            >
              <div className="h-48 bg-gradient-to-r from-[#155d29] to-green-600"></div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-[#155d29] text-white px-3 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                  <span className="text-gray-500 text-xs flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime} min
                  </span>
                </div>
                
                <h2 className="text-xl font-bold mb-3 text-gray-900 hover:text-[#155d29] transition">
                  {post.title}
                </h2>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500 flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {new Date(post.publishDate).toLocaleDateString('es-ES')}
                  </div>
                  
                  <button className="text-[#155d29] hover:text-green-700 font-medium flex items-center gap-1 transition">
                    Leer más
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#155d29] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">¿Tienes un Proyecto en Mente?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Nuestros especialistas están listos para evaluar tu proyecto y ofrecerte la mejor solución
          </p>
          <button
            onClick={scrollToContact}
            className="bg-white text-[#155d29] px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
          >
            Solicitar Cotización
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Complete Footer */}
      <footer className="bg-gray-900 text-gray-300">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <img 
                  src={transervicaLogoPath} 
                  alt="TRANSERVICA Logo" 
                  className="h-10 w-auto"
                />
                <div className="text-xl font-bold text-white">
                  TRANSERVICA
                </div>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Líderes en transporte de cargas excepcionales en Venezuela con más de 40 años de experiencia. 
                Especializados en el manejo de cargas hasta 380 toneladas.
              </p>
              <div className="flex items-center space-x-2 mb-2">
                <MapPin className="w-4 h-4" style={{ color: '#155d29' }} />
                <span className="text-sm">Caracas, Venezuela</span>
              </div>
              <div className="flex items-center space-x-2 mb-2">
                <Phone className="w-4 h-4" style={{ color: '#155d29' }} />
                <span className="text-sm">+58 212-555-0123</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" style={{ color: '#155d29' }} />
                <span className="text-sm">direccioncomercialtvc@grupotranservica.com</span>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl font-bold mb-6" style={{ color: '#155d29' }}>Nuestros Servicios</h3>
              <ul className="space-y-3">
                <li>
                  <a href="/#services" className="text-slate-600 hover:text-white transition-all duration-300 font-medium flex items-center group">
                    <div className="w-2 h-2 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300" style={{ backgroundColor: '#155d29' }}></div>
                    Transporte Especializado
                  </a>
                </li>
                <li>
                  <a href="/#services" className="text-slate-600 hover:text-white transition-all duration-300 font-medium flex items-center group">
                    <div className="w-2 h-2 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300" style={{ backgroundColor: '#155d29' }}></div>
                    Grúas de Gran Capacidad
                  </a>
                </li>
                <li>
                  <a href="/#services" className="text-slate-600 hover:text-white transition-all duration-300 font-medium flex items-center group">
                    <div className="w-2 h-2 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300" style={{ backgroundColor: '#155d29' }}></div>
                    Trailers Modulares
                  </a>
                </li>
                <li>
                  <a href="/#services" className="text-slate-600 hover:text-white transition-all duration-300 font-medium flex items-center group">
                    <div className="w-2 h-2 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300" style={{ backgroundColor: '#155d29' }}></div>
                    Logística Integral
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-xl font-bold mb-6" style={{ color: '#155d29' }}>Empresa</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/#about" className="text-slate-600 hover:text-white transition-all duration-300 font-medium flex items-center group">
                    <div className="w-2 h-2 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300" style={{ backgroundColor: '#155d29' }}></div>
                    Sobre Nosotros
                  </Link>
                </li>
                <li>
                  <a href="#" className="text-slate-600 hover:text-white transition-all duration-300 font-medium flex items-center group">
                    <div className="w-2 h-2 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300" style={{ backgroundColor: '#155d29' }}></div>
                    Nuestro Equipo
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-600 hover:text-white transition-all duration-300 font-medium flex items-center group">
                    <div className="w-2 h-2 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300" style={{ backgroundColor: '#155d29' }}></div>
                    Casos de Estudio
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-600 hover:text-white transition-all duration-300 font-medium flex items-center group">
                    <div className="w-2 h-2 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300" style={{ backgroundColor: '#155d29' }}></div>
                    Centro de Ayuda
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-xl font-bold mb-6" style={{ color: '#155d29' }}>Suscríbete a nuestro newsletter</h3>
              <div className="mb-4">
                <input 
                  type="email" 
                  placeholder="Work Email" 
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-transervica-green transition"
                />
              </div>
              <button 
                className="w-full text-white px-4 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-md"
                style={{ backgroundColor: '#155d29' }}
              >
                Suscribirse
              </button>
              <p className="text-xs text-gray-500 mt-3">
                Al suscribirte, aceptas recibir emails de marketing de TRANSERVICA
              </p>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-700 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-sm text-gray-400 mb-4 md:mb-0">
                © 2024 TRANSERVICA C.A. Todos los derechos reservados.
              </div>
              <div className="flex space-x-6 text-sm">
                <a href="#" className="hover:text-white transition">Política de Privacidad</a>
                <a href="#" className="hover:text-white transition">Términos de Servicio</a>
                <a href="#" className="hover:text-white transition">Acuerdo de Cliente</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}