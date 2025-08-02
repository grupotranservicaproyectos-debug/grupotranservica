import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

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
    title: "Transformador 333 MVA",
    weight: "180 toneladas",
    sector: "Energético",
    location: "Puerto Cabello - Subestación Sur",
    image: "/api/placeholder/600/400",
    description: "Transformador de 180 toneladas siendo transportado"
  },
  {
    id: 2,
    title: "Reactor Catalítico Industrial",
    weight: "370 toneladas",
    sector: "Petroquímico",
    location: "Complejo Industrial José",
    image: "/api/placeholder/600/400",
    description: "Reactor de 370 toneladas en transporte"
  },
  {
    id: 3,
    title: "Planta Termoeléctrica Don Luis Zambrano",
    weight: "Múltiples cargas",
    sector: "Energético",
    location: "Estado Zulia",
    image: "/api/placeholder/600/400",
    description: "Equipos de generación eléctrica"
  },
  {
    id: 4,
    title: "Proyecto Termo-Zulia",
    weight: "Gran capacidad",
    sector: "Industrial",
    location: "Zulia",
    image: "/api/placeholder/600/400",
    description: "Turbina especializada"
  },
  {
    id: 5,
    title: "Puente Onia - Ingeniería Civil",
    weight: "Estructuras metálicas",
    sector: "Infraestructura",
    location: "El Vigía",
    image: "/api/placeholder/600/400",
    description: "Construcción de infraestructura"
  }
];

const ctaButtons = [
  "Ver Detalles del Proyecto",
  "Conocer Más Proyectos",
  "Ver Portafolio Completo",
  "Solicitar Cotización",
  "Contactar Especialistas"
];

export default function ProjectsCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isAutoplay || isPaused) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % projects.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoplay, isPaused]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const toggleAutoplay = () => {
    setIsPaused(!isPaused);
  };

  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="proyectos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-transervica-gray mb-4">
            Galería de Proyectos Destacados
          </h2>
          <p className="text-xl text-gray-600">
            Conoce algunos de nuestros proyectos más emblemáticos
          </p>
        </div>

        <div className="relative">
          {/* Carrusel */}
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            onMouseEnter={() => setIsAutoplay(false)}
            onMouseLeave={() => setIsAutoplay(true)}
          >
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="w-full flex-shrink-0 px-4"
              >
                <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-transervica-green to-transervica-gray">
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <div className="text-center text-white">
                        <div className="text-6xl font-bold mb-2">{project.weight}</div>
                        <div className="text-xl">{project.sector}</div>
                      </div>
                    </div>
                    
                    {/* Overlay con información */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-8">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {project.title}
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-white mb-4">
                        <div>
                          <span className="font-semibold text-transervica-green">Peso:</span> {project.weight}
                        </div>
                        <div>
                          <span className="font-semibold text-transervica-green">Sector:</span> {project.sector}
                        </div>
                        <div>
                          <span className="font-semibold text-transervica-green">Ubicación:</span> {project.location}
                        </div>
                      </div>
                      <button 
                        onClick={scrollToContact}
                        className="bg-transervica-green text-white px-6 py-3 rounded-lg font-semibold hover:bg-transervica-light-green transition"
                      >
                        {ctaButtons[index]}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Controles de navegación */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-transervica-green p-3 rounded-full shadow-lg transition z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-transervica-green p-3 rounded-full shadow-lg transition z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Botón de pausa/play */}
          <button
            onClick={toggleAutoplay}
            className="absolute top-4 right-4 bg-white/90 hover:bg-white text-transervica-green p-2 rounded-full shadow-lg transition z-10"
          >
            {isPaused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
          </button>
        </div>

        {/* Indicadores */}
        <div className="flex justify-center mt-8 space-x-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition ${
                index === currentSlide 
                  ? 'bg-transervica-green' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Indicadores numerados */}
        <div className="flex justify-center mt-4 space-x-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-8 h-8 rounded-full text-sm font-semibold transition ${
                index === currentSlide 
                  ? 'bg-transervica-green text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}