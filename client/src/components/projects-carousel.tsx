import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import image1 from "@assets/2_1754167186023.jpg";
import image2 from "@assets/3_1754167186023.jpg";
import image3 from "@assets/4_1754167186024.jpg";
import image4 from "@assets/5_1754167186024.jpg";
import image5 from "@assets/6_1754167186024.png";
import image6 from "@assets/7_1754167186025.png";
import image7 from "@assets/8_1754167186025.png";
import image8 from "@assets/9_1754167186025.png";
import image9 from "@assets/10_1754167186025.png";
import image10 from "@assets/11_1754167186026.png";
import image11 from "@assets/12_1754167186026.png";
import image12 from "@assets/13_1754167186026.png";

interface Project {
  id: number;
  title: string;
  weight: string;
  sector: string;
  location: string;
  image: string;
  description: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Transporte Ferroviario Metro Caracas",
    weight: "280 toneladas",
    sector: "Transporte Ferroviario",
    location: "Puerto La Guaira - Caracas",
    image: image1,
    description: "Transporte especializado de vagones del Metro de Caracas con trailers modulares hidráulicos"
  },
  {
    id: 2,
    title: "Equipos Ferroviarios Protegidos",
    weight: "250 toneladas",
    sector: "Transporte Ferroviario",
    location: "Puerto Cabello - Interior",
    image: image2,
    description: "Vagones de metro con protección especial durante transporte terrestre"
  },
  {
    id: 3,
    title: "Convoy Ferroviario Multicar",
    weight: "450 toneladas",
    sector: "Transporte Ferroviario",
    location: "Operación Nacional",
    image: image3,
    description: "Múltiples vagones transportados simultáneamente con coordinación logística integral"
  },
  {
    id: 4,
    title: "Transporte Carretero Especializado",
    weight: "380 toneladas",
    sector: "Logística Industrial",
    location: "Rutas Nacionales",
    image: image4,
    description: "Convoy de transporte de cargas excepcionales por carreteras venezolanas"
  },
  {
    id: 5,
    title: "Operaciones Marítimas Industriales",
    weight: "500+ toneladas",
    sector: "Petróleo y Gas",
    location: "Puerto Industrial",
    image: image5,
    description: "Equipos petroleros de gran envergadura en operaciones portuarias especializadas"
  },
  {
    id: 6,
    title: "Transporte Terrestre Cargas Pesadas",
    weight: "320 toneladas",
    sector: "Industrial",
    location: "Rutas Terrestres",
    image: image6,
    description: "Equipos industriales con camiones MAN y trailers especializados"
  },
  {
    id: 7,
    title: "Grúas Alemanas en Operación",
    weight: "Capacidad 400 ton",
    sector: "Izamiento Industrial",
    location: "Complejo Industrial",
    image: image7,
    description: "Grúas Grove y Liebherr alemanas en operaciones de izamiento de precisión"
  },
  {
    id: 8,
    title: "Turbinas Industriales de Gas",
    weight: "600+ toneladas",
    sector: "Energético",
    location: "Planta Industrial",
    image: image8,
    description: "Turbinas de gas industrial transportadas con equipos especializados SCHEUERLE"
  },
  {
    id: 9,
    title: "Proyecto Metro Caracas COMETTO",
    weight: "290 toneladas",
    sector: "Transporte Público",
    location: "Caracas",
    image: image9,
    description: "Vagones del Metro de Caracas con equipos COMETTO y marca TRANSERVICA"
  },
  {
    id: 10,
    title: "Equipos Navales Especializados",
    weight: "800+ toneladas",
    sector: "Naval",
    location: "Puerto Industrial",
    image: image10,
    description: "Equipos navales de gran envergadura con grúas especializadas"
  },
  {
    id: 11,
    title: "Turbinas Generadoras Industriales",
    weight: "750 toneladas",
    sector: "Generación Eléctrica",
    location: "Complejo Energético",
    image: image11,
    description: "Turbinas generadoras de electricidad con trailers modulares de alta capacidad"
  },
  {
    id: 12,
    title: "Operaciones Portuarias Marítimas",
    weight: "Múltiples cargas",
    sector: "Portuario",
    location: "Puerto Venezolano",
    image: image12,
    description: "Operaciones complejas portuarias con coordinación marítima y terrestre"
  }
];

const ctaButtons = [
  "COTIZAR PROYECTO SIMILAR",
  "VER MÁS PROYECTOS",
  "SOLICITAR INFORMACIÓN",
  "CONTACTAR ESPECIALISTA",
  "CONOCER CAPACIDADES",
  "EVALUAR MI CARGA",
  "PLANIFICAR TRANSPORTE",
  "CONSULTAR DISPONIBILIDAD",
  "OBTENER PRESUPUESTO",
  "ASESORÍA TÉCNICA GRATIS",
  "ESTUDIOS DE FACTIBILIDAD",
  "COORDINACIÓN LOGÍSTICA"
];

export default function ProjectsCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isAutoplay || isPaused) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % projects.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoplay, isPaused]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const toggleAutoplay = () => {
    setIsAutoplay(!isAutoplay);
  };

  const currentProject = projects[currentSlide];
  const currentCTA = ctaButtons[currentSlide % ctaButtons.length];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4" style={{ color: '#155d29' }}>
            Galería de Proyectos
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Más de 40 años transportando cargas excepcionales hasta 1,100 toneladas. 
            Conoce algunos de nuestros proyectos más destacados realizados con equipos 
            especializados y tecnología de vanguardia.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Carousel Container */}
          <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="md:flex">
              {/* Image Section */}
              <div className="md:w-1/2 relative">
                <div className="aspect-video md:aspect-square relative overflow-hidden">
                  <img
                    src={currentProject.image}
                    alt={currentProject.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  
                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  
                  {/* Project Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {currentProject.sector}
                    </span>
                  </div>

                  {/* Weight Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {currentProject.weight}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <div className="mb-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-3">
                    {currentProject.title}
                  </h3>
                  
                  <div className="flex items-center text-emerald-600 mb-4">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="font-medium">{currentProject.location}</span>
                  </div>

                  <p className="text-slate-600 text-lg leading-relaxed mb-6">
                    {currentProject.description}
                  </p>
                </div>

                {/* CTA Button */}
                <div className="mb-6">
                  <button className="w-full md:w-auto bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-bold py-4 px-8 rounded-xl transform transition-all duration-200 hover:scale-105 hover:shadow-lg">
                    {currentCTA}
                  </button>
                </div>

                {/* Project Stats */}
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-slate-50 rounded-lg p-3">
                    <div className="text-2xl font-bold text-emerald-600">{currentSlide + 1}</div>
                    <div className="text-sm text-slate-600">de {projects.length} proyectos</div>
                  </div>
                  <div className="bg-slate-50 rounded-lg p-3">
                    <div className="text-2xl font-bold text-orange-500">40+</div>
                    <div className="text-sm text-slate-600">años experiencia</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-6">
            <button
              onClick={prevSlide}
              className="flex items-center justify-center w-12 h-12 bg-white hover:bg-emerald-50 border border-gray-200 hover:border-emerald-300 rounded-full shadow-md transition-all duration-200 hover:shadow-lg"
            >
              <ChevronLeft className="w-6 h-6 text-slate-600 hover:text-emerald-600" />
            </button>

            {/* Autoplay Control */}
            <button
              onClick={toggleAutoplay}
              className="flex items-center justify-center w-12 h-12 bg-white hover:bg-emerald-50 border border-gray-200 hover:border-emerald-300 rounded-full shadow-md transition-all duration-200 hover:shadow-lg"
            >
              {isAutoplay ? (
                <Pause className="w-5 h-5 text-slate-600 hover:text-emerald-600" />
              ) : (
                <Play className="w-5 h-5 text-slate-600 hover:text-emerald-600" />
              )}
            </button>

            <button
              onClick={nextSlide}
              className="flex items-center justify-center w-12 h-12 bg-white hover:bg-emerald-50 border border-gray-200 hover:border-emerald-300 rounded-full shadow-md transition-all duration-200 hover:shadow-lg"
            >
              <ChevronRight className="w-6 h-6 text-slate-600 hover:text-emerald-600" />
            </button>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentSlide
                    ? "bg-emerald-600 scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Call to Action Section - Eye-catching */}
        <div className="mt-16 mx-auto max-w-4xl">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl" style={{ backgroundColor: '#155d29' }}>
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                backgroundSize: '60px 60px'
              }}></div>
            </div>
            
            {/* Content */}
            <div className="relative px-8 py-12 text-center">
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  ¿Tienes un Proyecto Similar?
                </h3>
                <p className="text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
                  Nuestros especialistas pueden evaluar tu carga y diseñar la solución de transporte más eficiente. 
                  <span className="font-semibold text-white"> ¡Contáctanos ahora!</span>
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button 
                  onClick={() => window.open('https://wa.me/584142776340?text=Hola%2C%20necesito%20cotizar%20un%20proyecto%20de%20transporte%20especializado', '_blank')}
                  className="group bg-white text-[#155d29] font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center"
                >
                  <svg className="w-5 h-5 mr-2 group-hover:animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 2.079.549 4.090 1.588 5.876L.029 24l6.203-1.539a11.952 11.952 0 005.785 1.539c6.621 0 11.988-5.367 11.988-11.988C23.973 5.367 18.638.001 12.017.001zm5.995 16.987c-.264.714-1.291 1.336-1.953 1.428-.663.094-1.526.141-2.438-.154-1.421-.458-3.025-1.609-4.222-3.003-1.197-1.394-1.967-3.045-2.033-3.192-.066-.147-.541-1.447-.541-2.748 0-1.301.341-1.947.463-2.215.122-.268.268-.335.357-.335h.268c.087 0 .201-.003.291.222.09.225.307.751.334.805.027.054.045.116.009.19-.036.074-.054.121-.108.184-.054.063-.113.14-.162.189-.063.049-.128.101-.055.199.073.098.325.537.697.869.481.427 1.055.705 1.206.784.151.079.239.067.327-.041.088-.108.378-.441.479-.592.101-.151.201-.126.338-.076.137.051.87.41 1.018.485.149.074.249.112.285.174.036.062.036.359-.228 1.073z"/>
                  </svg>
                  Cotizar Mi Proyecto
                  <span className="ml-2 text-xs bg-orange-500 text-white px-2 py-1 rounded-full animate-bounce">¡GRATIS!</span>
                </button>
                
                <button 
                  onClick={() => {
                    const element = document.getElementById('contacto');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="group border-2 border-white text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:bg-white hover:text-[#155d29] flex items-center"
                >
                  <svg className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Ver Más Proyectos
                </button>
              </div>
              
              {/* Trust Indicators */}
              <div className="mt-8 flex justify-center items-center space-x-8 text-white/80 text-sm">
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  40 años experiencia
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Hasta 1,100 toneladas
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  100% Confiabilidad
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}