import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { Calendar, Clock, User, ArrowRight, Tag, Phone, Mail, MapPin, Home } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  publishDate: string;
  readTime: number;
  keywords: string[];
  videoId?: string;
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
    keywords: ['transporte transformador Venezuela', '333 MVA', 'cargas excepcionales'],
    videoId: '_LQbWkWlg6s',
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

La inversión en tecnología alemana nos permite ofrecer servicios de izamiento con los más altos estándares de calidad y seguridad en Venezuela.`,
    category: 'Tecnología y Equipos',
    author: 'Ing. María González',
    publishDate: '2024-01-22',
    readTime: 6,
    keywords: ['grúas alemanas Venezuela', 'Grove Liebherr', 'tecnología izamiento'],
    videoId: 'PF8SuO_3ZLU',
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

Con la mirada puesta en el futuro, TRANSERVICA continúa invirtiendo en tecnología, capacitación y sostenibilidad para seguir siendo el socio estratégico preferido de las principales industrias venezolanas.`,
    category: 'Historia Corporativa',
    author: 'Fundadores TRANSERVICA',
    publishDate: '2024-02-01',
    readTime: 10,
    keywords: ['historia Transervica', '40 años experiencia', 'transporte Venezuela'],
    videoId: '0-vWA7PJp3s',
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

## Servicios TRANSERVICA

Como empresa certificada por el INTT, TRANSERVICA gestiona todos los permisos y documentación requerida, garantizando el cumplimiento total de las normativas vigentes.`,
    category: 'Normativas INTT',
    author: 'Depto. Legal TRANSERVICA',
    publishDate: '2024-02-10',
    readTime: 12,
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

La inversión en tecnología alemana nos permite ofrecer servicios de transporte con los más altos estándares de calidad, seguridad y eficiencia en Venezuela y la región.`,
    category: 'Tecnología y Equipos',
    author: 'Ing. Pedro Martínez',
    publishDate: '2024-02-18',
    readTime: 9,
    keywords: ['trailers modulares hidráulicos', 'SCHEUERLE Venezuela', 'tecnología transporte'],
    videoId: 'PF8SuO_3ZLU',
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
      
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        document.head.appendChild(metaDescription);
      }
      metaDescription.setAttribute('content', selectedPost.excerpt);

      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute('content', selectedPost.keywords.join(', '));
    } else {
      document.title = 'Blog TRANSERVICA | Noticias y Proyectos de Transporte de Cargas Excepcionales';
      
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        document.head.appendChild(metaDescription);
      }
      metaDescription.setAttribute('content', 'Descubre las últimas noticias, proyectos ejecutados y avances tecnológicos de TRANSERVICA, líder en transporte de cargas excepcionales en Venezuela.');
    }
  }, [selectedPost]);

  const filteredPosts = selectedCategory === 'Todos' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const handleCTAClick = (action: string) => {
    if (action === 'contact' || action === 'equipos' || action === 'nosotros') {
      window.parent.postMessage({ type: 'navigateToSection', section: action }, '*');
      window.close();
    }
  };

  if (selectedPost) {
    return (
      <div className="min-h-screen bg-white">
        {/* Header with Navigation */}
        <header className="bg-white shadow-lg sticky top-0 z-50">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-20">
              <div className="flex items-center space-x-4">
                <button 
                  onClick={() => setSelectedPost(null)}
                  className="flex items-center space-x-2 text-gray-600 hover:text-[#155d29] transition"
                >
                  <ArrowRight className="w-5 h-5 rotate-180" />
                  <span>Volver al Blog</span>
                </button>
              </div>
              <div className="text-2xl font-bold" style={{ color: '#155d29' }}>
                TRANSERVICA BLOG
              </div>
            </div>
          </div>
        </header>

        {/* Article Header */}
        <div className="bg-gradient-to-r from-[#155d29] to-green-600 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-4">
                <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium">
                  {selectedPost.category}
                </span>
              </div>
              <h1 className="text-5xl font-bold mb-6">{selectedPost.title}</h1>
              <div className="flex items-center justify-center gap-8 text-lg opacity-90">
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  {selectedPost.author}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  {new Date(selectedPost.publishDate).toLocaleDateString('es-ES')}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  {selectedPost.readTime} min lectura
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Video Section */}
        {selectedPost.videoId && (
          <div className="bg-black py-12">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
                  <iframe
                    src={`https://www.youtube.com/embed/${selectedPost.videoId}?controls=1&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&vq=hd1080&hd=1&quality=hd1080`}
                    title={selectedPost.title}
                    className="absolute inset-0 w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Article Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <div className="whitespace-pre-line text-gray-700 leading-relaxed text-lg">
                {selectedPost.content}
              </div>
            </div>

            {/* CTA Section */}
            <div className="mt-16 p-10 bg-gradient-to-r from-[#155d29] to-green-600 rounded-3xl text-white text-center">
              <h3 className="text-3xl font-bold mb-6">¿Necesitas Nuestros Servicios?</h3>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Contacta con nuestros especialistas y obtén una solución personalizada para tu proyecto
              </p>
              <button
                onClick={() => handleCTAClick(selectedPost.cta.action)}
                className="bg-white text-[#155d29] px-10 py-4 rounded-xl font-bold text-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-3 shadow-lg"
              >
                {selectedPost.cta.text}
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>

            {/* Keywords */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h4 className="text-xl font-semibold mb-6" style={{ color: '#155d29' }}>Palabras clave:</h4>
              <div className="flex flex-wrap gap-3">
                {selectedPost.keywords.map((keyword, index) => (
                  <span 
                    key={index}
                    className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition"
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
      {/* Header with Navigation */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => window.close()}
                className="flex items-center space-x-2 text-gray-600 hover:text-[#155d29] transition"
              >
                <Home className="w-5 h-5" />
                <span>Volver a Inicio</span>
              </button>
            </div>
            <div className="text-2xl font-bold" style={{ color: '#155d29' }}>
              TRANSERVICA BLOG
            </div>
            <div className="hidden lg:flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-2" style={{ color: '#155d29' }}>
                <Phone className="w-4 h-4" />
                <span>+58 414 277 6340 / +58 412 441 8890</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#155d29] to-green-600 text-white py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-6xl font-bold mb-8">Blog Transervica</h1>
          <p className="text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Noticias, proyectos y novedades del sector transporte de cargas excepcionales. 
            Descubre nuestros casos de éxito y avances tecnológicos.
          </p>
        </div>
      </div>

      {/* Categories Filter */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-wrap gap-4 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === category
                  ? 'bg-[#155d29] text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Blog Grid */}
      <div className="container mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {filteredPosts.map((post) => (
            <article 
              key={post.id}
              className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 cursor-pointer group"
              onClick={() => setSelectedPost(post)}
            >
              {/* Video Thumbnail */}
              <div className="relative h-80 bg-gradient-to-r from-[#155d29] to-green-600 overflow-hidden">
                {post.videoId ? (
                  <div className="relative h-full">
                    <iframe
                      src={`https://www.youtube.com/embed/${post.videoId}?controls=0&showinfo=0&rel=0&autoplay=0&mute=1&modestbranding=1&vq=hd720`}
                      title={post.title}
                      className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      frameBorder="0"
                      allow="encrypted-media"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500"></div>
                  </div>
                ) : (
                  <div className="h-full flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-6xl font-bold mb-4">TV</div>
                      <div className="text-xl opacity-80">TRANSERVICA</div>
                    </div>
                  </div>
                )}
                
                {/* Category Badge */}
                <div className="absolute top-6 left-6">
                  <span className="bg-white/95 backdrop-blur-sm text-[#155d29] px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    {post.category}
                  </span>
                </div>
                
                {/* Read Time */}
                <div className="absolute top-6 right-6">
                  <span className="bg-black/70 backdrop-blur-sm text-white px-3 py-2 rounded-full text-sm font-medium flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime} min
                  </span>
                </div>
              </div>
              
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-[#155d29] transition-colors duration-300 leading-tight">
                  {post.title}
                </h2>
                
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500 flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.publishDate).toLocaleDateString('es-ES')}
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      {post.author}
                    </div>
                  </div>
                  
                  <button className="text-[#155d29] hover:text-green-700 font-bold flex items-center gap-2 transition-all duration-300 transform group-hover:translate-x-2">
                    Leer artículo
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-[#155d29] to-green-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">¿Tienes un Proyecto en Mente?</h2>
          <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
            Nuestros especialistas están listos para evaluar tu proyecto y ofrecerte la mejor solución 
            en transporte de cargas excepcionales
          </p>
          <button
            onClick={() => {
              window.parent.postMessage({ type: 'navigateToSection', section: 'contact' }, '*');
              window.close();
            }}
            className="bg-white text-[#155d29] px-10 py-5 rounded-xl font-bold text-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-3 shadow-lg"
          >
            Solicitar Cotización Gratuita
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-2xl font-bold text-white mb-4" style={{ color: '#155d29' }}>
                TRANSERVICA
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Líderes en transporte de cargas excepcionales en Venezuela con más de 40 años de experiencia.
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4" style={{ color: '#155d29' }} />
                  <div className="space-y-1">
                    <div>+58 414 277 6340</div>
                    <div>+58 412 441 8890</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4" style={{ color: '#155d29' }} />
                  <span>direccioncomercialtvc@grupotranservica.com</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-6" style={{ color: '#155d29' }}>Categorías</h3>
              <ul className="space-y-3">
                {categories.slice(1).map((category) => (
                  <li key={category}>
                    <button 
                      onClick={() => setSelectedCategory(category)}
                      className="text-gray-400 hover:text-white transition flex items-center gap-2"
                    >
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#155d29' }}></div>
                      {category}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-6" style={{ color: '#155d29' }}>Contacto</h3>
              <button
                onClick={() => {
                  window.parent.postMessage({ type: 'navigateToSection', section: 'contact' }, '*');
                  window.close();
                }}
                className="bg-[#155d29] hover:bg-green-700 text-white px-6 py-3 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
              >
                Ir a Contacto
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              &copy; 2024 TRANSERVICA, C.A. Todos los derechos reservados. | 40 años transportando el futuro de Venezuela
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}