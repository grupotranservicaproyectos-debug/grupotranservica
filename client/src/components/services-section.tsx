import { FileText, Shield, Settings, MapPin, Globe, Truck } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: Truck,
      title: "Transporte de Cargas Excepcionales",
      description: "Movilización de cargas hasta 1,100 toneladas con trailers modulares hidráulicos SCHEUERLE y COMETTO de última generación.",
      features: [
        "Hasta 1,100 toneladas",
        "Trailers modulares", 
        "Rutas especializadas",
        "Escolta especializada"
      ]
    },
    {
      icon: Settings,
      title: "Izamiento con Grúas Especializadas",
      description: "Servicios de izamiento con Grúas MovilesTelescópicas y Sobre Orugas para proyectos industriales complejos.",
      features: [
        "Grúas telescópicas",
        "Grúas sobre orugas",
        "Izamiento preciso",
        "Operadores certificados"
      ]
    },
    {
      icon: Globe,
      title: "Logística de Ingeniería Completa",
      description: "Planificación integral de proyectos de transporte con estudios de factibilidad y coordinación multimodal.",
      features: [
        "Estudios de factibilidad",
        "Planificación de rutas",
        "Coordinación multimodal",
        "Gestión de proyecto"
      ]
    },
    {
      icon: FileText,
      title: "Gestión de Permisos INTT",
      description: "Tramitación completa de permisos ante el Instituto Nacional de Transporte Terrestre y autoridades competentes.",
      features: [
        "Permisos INTT",
        "Documentación completa",
        "Gestión rápida",
        "Cumplimiento normativo"
      ]
    },
    {
      icon: Shield,
      title: "Estudios de Factibilidad Técnica", 
      description: "Análisis detallado de viabilidad técnica para garantizar el éxito de proyectos de transporte especializado.",
      features: [
        "Análisis de rutas",
        "Evaluación estructural",
        "Estudios de carga",
        "Recomendaciones técnicas"
      ]
    },
    {
      icon: MapPin,
      title: "Coordinación Multimodal",
      description: "Servicios integrados de transporte terrestre, marítimo y ferroviario para proyectos internacionales.",
      features: [
        "Transporte terrestre",
        "Coordinación marítima",
        "Transporte ferroviario", 
        "Logística internacional"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6" style={{ color: '#155d29' }}>
            Nuestros Servicios
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: 'hsl(0, 0%, 15%)' }}>
            Ofrecemos soluciones integrales para el transporte de cargas excepcionales, 
            respaldados por 40 años de experiencia y tecnología de vanguardia
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-white border-l-4 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:scale-105 overflow-hidden"
                style={{ borderLeftColor: '#155d29' }}
              >
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-orange-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="p-4 rounded-2xl transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-3" style={{ backgroundColor: 'rgba(21, 93, 41, 0.1)' }}>
                      <IconComponent className="w-8 h-8 group-hover:text-white transition-colors duration-500" style={{ color: '#155d29' }} />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 transition-colors duration-300" style={{ color: '#155d29' }}>
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-slate-600 group-hover:text-slate-700">
                        <div className="w-2 h-2 rounded-full mr-3 transform group-hover:scale-125 transition-transform duration-300" style={{ backgroundColor: '#155d29' }}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Hover overlay border */}
                <div className="absolute inset-0 border-2 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ borderColor: '#155d29' }}></div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-emerald-50 via-white to-emerald-50 rounded-2xl p-8 md:p-12 shadow-xl border border-emerald-100">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              ¿Necesita transportar cargas excepcionales?
            </h3>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Permítanos evaluar su proyecto y ofrecerle la mejor solución de transporte especializado
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                Solicitar Cotización Ahora
              </button>
              <button 
                onClick={() => window.open('https://wa.me/584142776340?text=Hola%2C%20necesito%20hablar%20con%20un%20especialista%20sobre%20transporte%20de%20cargas%20excepcionales', '_blank')}
                className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                Hablar con un Especialista
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}