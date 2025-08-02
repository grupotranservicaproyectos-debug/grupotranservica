interface Equipment {
  id: number;
  name: string;
  description: string;
  hoverText: string;
  image: string;
}

const equipment: Equipment[] = [
  {
    id: 1,
    name: "TRAILER SCHEUERLE",
    description: "Trailer modular hidráulico SCHEUERLE",
    hoverText: "SCHEUERLE - Tecnología alemana hasta 1,100 toneladas",
    image: "/api/placeholder/400/300"
  },
  {
    id: 2,
    name: "GRÚAS MÓVILES GROVE",
    description: "Grúa móvil telescópica GROVE",
    hoverText: "GROVE - Grúas móviles alemanas de alta capacidad",
    image: "/api/placeholder/400/300"
  },
  {
    id: 3,
    name: "GRÚAS SOBRE ORUGA GROVE",
    description: "Grúa sobre oruga GROVE",
    hoverText: "GROVE - Grúas sobre oruga alemanas especializadas",
    image: "/api/placeholder/400/300"
  },
  {
    id: 4,
    name: "GRÚAS MÓVILES LIEBHERR",
    description: "Grúa móvil LIEBHERR",
    hoverText: "LIEBHERR - Tecnología alemana de precisión",
    image: "/api/placeholder/400/300"
  },
  {
    id: 5,
    name: "GRÚAS SOBRE ORUGA LIEBHERR",
    description: "Grúa sobre oruga LIEBHERR",
    hoverText: "LIEBHERR - Grúas sobre oruga alemanas de alta ingeniería",
    image: "/api/placeholder/400/300"
  },
  {
    id: 6,
    name: "EQUIPO COMETTO",
    description: "Sistema modular COMETTO",
    hoverText: "COMETTO - Soluciones italianas de alta ingeniería",
    image: "/api/placeholder/400/300"
  },
  {
    id: 7,
    name: "TRAILER CAPPERI",
    description: "Sistema CAPPERI",
    hoverText: "CAPPERI - Tecnología especializada modular",
    image: "/api/placeholder/400/300"
  },
  {
    id: 8,
    name: "CAMIÓN MACK",
    description: "Camión tractor MACK",
    hoverText: "MACK - Potencia y confiabilidad americana",
    image: "/api/placeholder/400/300"
  }
];

export default function EquipmentSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="equipos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-transervica-gray mb-4">
            Equipos de Última Generación
          </h2>
          <p className="text-xl text-gray-600">
            Tecnología alemana e italiana de vanguardia para proyectos excepcionales
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {equipment.map((item) => (
            <div
              key={item.id}
              className="group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-400 transform hover:scale-105"
            >
              {/* Imagen del equipo */}
              <div className="relative aspect-[4/3] bg-gradient-to-br from-transervica-green to-transervica-gray overflow-hidden">
                <div className="absolute inset-0 bg-transervica-gray/20 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-2xl font-bold mb-2">{item.name}</div>
                  </div>
                </div>
                
                {/* Overlay con efecto hover */}
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center">
                  <div className="text-center text-white p-4">
                    <h3 className="text-lg font-bold mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {item.hoverText}
                    </h3>
                    <button 
                      onClick={scrollToContact}
                      className="bg-transervica-green text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-transervica-light-green transition"
                    >
                      Ver Especificaciones
                    </button>
                  </div>
                </div>
              </div>

              {/* Información del equipo */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-transervica-gray mb-2">
                  {item.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  {item.description}
                </p>
                <div className="mt-4 flex space-x-2">
                  <button 
                    onClick={scrollToContact}
                    className="bg-transervica-green text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-transervica-light-green transition"
                  >
                    Solicitar Demostración
                  </button>
                  <button 
                    onClick={scrollToContact}
                    className="border border-transervica-green text-transervica-green px-4 py-2 rounded-lg text-sm font-semibold hover:bg-transervica-green hover:text-white transition"
                  >
                    Contactar Especialista
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}