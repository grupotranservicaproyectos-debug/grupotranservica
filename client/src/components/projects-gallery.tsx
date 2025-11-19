import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import project1 from "@assets/9_1754162276864.webp";
import project2 from "@assets/10_1754162276864.webp";  
import project3 from "@assets/11_1754162276864.webp";
import project4 from "@assets/12_1754162276864.webp";
import project5 from "@assets/13_1754162321563.webp";
import project6 from "@assets/14_1754162321564.webp";

export default function ProjectsGallery() {
  const projects = [
    {
      image: project1,
      title: "Transporte de Turbina Industrial",
      description: "Movilización de turbina de gas de 850 toneladas con equipos hidráulicos modulares especializados.",
      weight: "850 Toneladas",
      status: "Completado"
    },
    {
      image: project2,
      title: "Transporte de Tren Metropolitano",
      description: "Movilización de vagones del sistema metro con precisión milimétrica y total seguridad.",
      weight: "45 Toneladas",
      status: "Completado"
    },
    {
      image: project3,
      title: "Operaciones Portuarias",
      description: "Manejo de cargas excepcionales en puertos con grúas de gran capacidad y equipos especializados.",
      weight: "1,100 Toneladas",
      status: "Completado"
    },
    {
      image: project4,
      title: "Turbina de Gran Capacidad",
      description: "Transporte de turbina de última generación para planta de energía con convoy especializado.",
      weight: "920 Toneladas",
      status: "Completado"
    },
    {
      image: project5,
      title: "Transporte Marítimo",
      description: "Operaciones combinadas mar-tierra para equipos navales e industriales de gran tamaño.",
      weight: "750 Toneladas",
      status: "Completado"
    },
    {
      image: project6,
      title: "Estructuras Cilíndricas",
      description: "Movilización de tanques y recipientes de gran diámetro para industria petroquímica.",
      weight: "680 Toneladas",
      status: "Completado"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.ceil(projects.length / 3));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.ceil(projects.length / 3)) % Math.ceil(projects.length / 3));
  };

  return (
    <section id="proyectos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-transervica-red mb-4">Proyectos Destacados</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Más de 40 años transportando lo imposible con éxito garantizado
          </p>
        </div>
        
        {/* Desktop Gallery Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-transervica-red font-semibold">{project.weight}</span>
                  <span className="bg-red-100 text-transervica-red px-3 py-1 rounded-full text-sm">
                    {project.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {projects.map((project, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                      <p className="text-gray-600 mb-4">{project.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-transervica-red font-semibold">{project.weight}</span>
                        <span className="bg-red-100 text-transervica-red px-3 py-1 rounded-full text-sm">
                          {project.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Carousel Controls */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50"
          >
            <ChevronLeft className="w-6 h-6 text-transervica-red" />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50"
          >
            <ChevronRight className="w-6 h-6 text-transervica-red" />
          </button>

          {/* Carousel Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition ${
                  index === currentIndex ? 'bg-transervica-red' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
