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
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Proyectos Realizados
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

        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="text-slate-600 mb-6">
            ¿Tienes un proyecto similar? Nuestros especialistas pueden evaluar tu carga 
            y diseñar la solución de transporte más eficiente.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 px-6 rounded-lg transition-colors">
              Cotizar Mi Proyecto
            </button>
            <button className="border border-emerald-600 text-emerald-600 hover:bg-emerald-50 font-medium py-3 px-6 rounded-lg transition-colors">
              Ver Más Proyectos
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}