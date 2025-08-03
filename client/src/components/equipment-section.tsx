import image15 from "@assets/15_1754168567957.png";
import image16 from "@assets/16_1754168567957.png"; 
import image17 from "@assets/17_1754168567957.png";
import image20 from "@assets/20_1754168567958.png";  
import image21 from "@assets/21_1754168567958.png";
import image24 from "@assets/24_1754168567959.png";

interface EquipmentItem {
  name: string;
  image: string;
  description: string;
  capacity: string;
  brand: string;
  features: string[];
}

export default function EquipmentSection() {
  const equipmentItems: EquipmentItem[] = [
    {
      name: "Trailers Modulares Hidráulicos 1,100 toneladas",
      image: image15,
      description: "Equipos de última generación para el transporte de cargas excepcionales",
      capacity: "1,100 toneladas",
      brand: "SCHEUERLE",
      features: [
        "Sistemas hidráulicos avanzados",
        "Configuración modular", 
        "Control remoto",
        "Suspensión adaptativa"
      ]
    },
    {
      name: "Sistemas Especializados hasta 1100 toneladas",
      image: image16,
      description: "Plataformas autopropulsadas de alta precisión para cargas críticas",
      capacity: "hasta 1100 toneladas", 
      brand: "COMETTO",
      features: [
        "Autopropulsado",
        "Control de precisión",
        "Sistemas de navegación",
        "Operación remota"
      ]
    },
    {
      name: "Grúas Móviles Telescópicas hasta 500 toneladas",
      image: image20,
      description: "Grúas Móviles de Alta Capacidad para Operaciones de Izamiento Especializado",
      capacity: "hasta 500 toneladas",
      brand: "GROVE", 
      features: [
        "Alta movilidad",
        "Controles digitales",
        "Operadores certificados"
      ]
    },
    {
      name: "Grúas sobre Orugas hasta 800 toneladas",
      image: image17,
      description: "Equipos Especializados para Izamiento en Terrenos Difíciles",
      capacity: "hasta 800 toneladas",
      brand: "P&H",
      features: [
        "Base sobre orugas",
        "Estabilidad superior", 
        "Alcance extendido",
        "Configuración versátil"
      ]
    },
    {
      name: "Camiones Especializados Variable",  
      image: image21,
      description: "Alquiler de Flota de Camiones Especializados para Diferentes Tipos de Carga",
      capacity: "Variable",
      brand: "MAN / MACK",
      features: [
        "Alta potencia",
        "Transmisión especializada",
        "Sistemas de seguridad", 
        "Mantenimiento preventivo"
      ]
    },
    {
      name: "Equipos de Apoyo Diversas",
      image: image24,
      description: "Sistemas complementarios para operaciones complejas de transporte", 
      capacity: "Diversas",
      brand: "CATERPILLAR",
      features: [
        "Sistemas de apoyo",
        "Equipos auxiliares",
        "Herramientas especializadas",
        "Soporte técnico"
      ]
    }
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6" style={{ color: '#155d29' }}>Nuestros Equipos Especializados para Izamiento y Transportes de Carga Excepcionales y Sobredimensionadas</h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto mb-4">
            Contamos con la Flota más Moderna y Especializada de Venezuela para el Transporte de Cargas Excepcionales, con Equipos de las Marcas más Reconocidas Mundialmente
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {equipmentItems.map((equipment, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:scale-105 overflow-hidden"
            >
              {/* Capacity badge */}
              <div className="absolute top-4 left-4 z-20 text-white px-3 py-1 rounded-full text-sm font-semibold" style={{ backgroundColor: '#155d29' }}>
                {equipment.capacity}
              </div>

              {/* Brand badge */}  
              <div className="absolute top-4 right-4 z-20 text-white px-3 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: '#155d29' }}>
                {equipment.brand}
              </div>

              {/* Image container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={equipment.image}
                  alt={equipment.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Hover content */}
                <div className="absolute inset-0 flex items-end justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="text-center text-white">
                    <button 
                      onClick={scrollToContact}
                      className="text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                      style={{ backgroundColor: '#155d29' }}
                      onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = '#0f4a21'}
                      onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = '#155d29'}
                    >
                      Ver Especificaciones
                    </button>
                  </div>
                </div>
              </div>

              {/* Equipment info */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 transition-colors duration-300" style={{ color: '#155d29' }}>
                  {equipment.name}
                </h3>
                
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {equipment.description}
                </p>
                
                <ul className="space-y-2">
                  {equipment.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-slate-600">
                      <div className="w-2 h-2 rounded-full mr-3 transform group-hover:scale-125 transition-transform duration-300" style={{ backgroundColor: '#155d29' }}></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Animated border */}
              <div className="absolute inset-0 border-2 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ borderColor: '#155d29' }}></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-green-50 via-white to-green-50 rounded-2xl p-8 md:p-12 shadow-xl border" style={{ borderColor: 'rgba(21, 93, 41, 0.1)' }}>
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#155d29' }}>
              ¿Necesita equipos especializados para su proyecto?
            </h3>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Consulte nuestra disponibilidad de equipos y obtenga una cotización personalizada para su operación
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => window.open('https://wa.me/584142776340?text=Hola%2C%20necesito%20consultar%20disponibilidad%20de%20equipos%20especializados', '_blank')}
                className="text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                style={{ backgroundColor: '#155d29' }}
                onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = '#0f4a21'}
                onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = '#155d29'}
              >
                Consultar Disponibilidad
              </button>
              <button 
                onClick={scrollToContact}
                className="border-2 font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:text-white"
                style={{ borderColor: '#155d29', color: '#155d29' }}
                onMouseEnter={(e) => { (e.target as HTMLElement).style.backgroundColor = '#155d29'; (e.target as HTMLElement).style.color = 'white'; }}
                onMouseLeave={(e) => { (e.target as HTMLElement).style.backgroundColor = 'transparent'; (e.target as HTMLElement).style.color = '#155d29'; }}
              >
                Solicitar Especificaciones
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}