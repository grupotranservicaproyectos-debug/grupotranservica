import { Truck, RotateCcw, Settings } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: Truck,
      title: "Transporte de Cargas Excepcionales",
      description: "Capacidad hasta 1,100 toneladas con trailers modulares hidráulicos especializados",
      equipment: "Trailers SCHEUERLE, Equipos COMETTO, Sistemas CAPPERI",
      cta: "COTIZAR TRANSPORTE AHORA",
      color: "bg-transervica-green"
    },
    {
      icon: RotateCcw,
      title: "Izamiento con Grúas Alemanas",
      description: "Grúas móviles y sobre oruga alemanas Grove y Liebherr para proyectos de gran envergadura",
      equipment: "Grúas móviles Grove, Grúas sobre oruga Grove, Grúas móviles Liebherr, Grúas sobre oruga Liebherr",
      cta: "VER CAPACIDADES DE GRÚAS",
      color: "bg-transervica-light-green"
    },
    {
      icon: Settings,
      title: "Logística de Ingeniería",
      description: "Planificación integral y gestión completa de proyectos",
      equipment: "Estudios de factibilidad, Gestión de permisos INTT, Coordinación multimodal",
      cta: "PLANIFICAR MI PROYECTO",
      color: "bg-transervica-green"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-transervica-gray mb-4">Nuestros Servicios Especializados</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            40 años transportando el futuro de Venezuela con tecnología alemana de vanguardia
          </p>
        </div>
        
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className={`w-20 h-20 ${service.color} rounded-xl flex items-center justify-center mb-6 mx-auto`}>
                <service.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-transervica-gray mb-4 text-center">{service.title}</h3>
              <p className="text-gray-600 mb-4 text-center leading-relaxed">{service.description}</p>
              <div className="text-sm text-transervica-green mb-6 text-center">
                <strong>Equipos:</strong> {service.equipment}
              </div>
              <div className="text-center">
                <button 
                  onClick={scrollToContact}
                  className="bg-transervica-green text-white px-6 py-3 rounded-lg font-bold hover:bg-transervica-light-green transition-colors shadow-lg"
                >
                  {service.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Servicios Adicionales */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-transervica-gray mb-6 text-center">Servicios Adicionales</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 text-center">
            <div className="p-4">
              <div className="text-lg font-semibold text-transervica-green mb-2">Gestión de Permisos INTT</div>
              <p className="text-sm text-gray-600">Trámites completos ante el INTT</p>
            </div>
            <div className="p-4">
              <div className="text-lg font-semibold text-transervica-green mb-2">Estudios de Factibilidad</div>
              <p className="text-sm text-gray-600">Análisis técnico previo</p>
            </div>
            <div className="p-4">
              <div className="text-lg font-semibold text-transervica-green mb-2">Coordinación Multimodal</div>
              <p className="text-sm text-gray-600">Transporte terrestre y marítimo</p>
            </div>
            <div className="p-4">
              <div className="text-lg font-semibold text-transervica-green mb-2">Asesoría Técnica Especializada</div>
              <p className="text-sm text-gray-600">Consultoría en ingeniería</p>
            </div>
            <div className="p-4">
              <div className="text-lg font-semibold text-transervica-green mb-2">Seguimiento 24/7</div>
              <p className="text-sm text-gray-600">Monitoreo continuo</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
