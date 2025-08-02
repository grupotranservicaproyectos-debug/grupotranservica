import { Package, Zap, Ship, Settings, Shield, MapPin } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: Package,
      title: "Transporte Industrial",
      description: "Equipos pesados, maquinaria industrial y componentes de gran tamaño con total seguridad.",
      color: "bg-transervica-green"
    },
    {
      icon: Zap,
      title: "Equipos Petroleros",
      description: "Transporte especializado de equipos para la industria petrolera y energética.",
      color: "bg-transervica-orange"
    },
    {
      icon: Ship,
      title: "Construcción Naval",
      description: "Transporte marítimo y terrestre de componentes navales e industriales.",
      color: "bg-transervica-green"
    },
    {
      icon: Settings,
      title: "Turbinas y Generadores",
      description: "Manejo especializado de turbinas, generadores y equipos de alta precisión.",
      color: "bg-transervica-orange"
    },
    {
      icon: Shield,
      title: "Seguros y Permisos",
      description: "Gestión completa de documentación, seguros y permisos especiales.",
      color: "bg-transervica-green"
    },
    {
      icon: MapPin,
      title: "Logística Nacional",
      description: "Cobertura completa en todo el territorio venezolano con rutas optimizadas.",
      color: "bg-transervica-orange"
    }
  ];

  return (
    <section id="servicios" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-transervica-green mb-4">Nuestros Servicios</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos soluciones integrales para el transporte de cargas excepcionales y equipos industriales pesados
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition">
              <div className={`w-16 h-16 ${service.color} rounded-lg flex items-center justify-center mb-6`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
