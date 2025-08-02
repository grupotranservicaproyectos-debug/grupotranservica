import { Check, Eye } from "lucide-react";
import aboutImage from "@assets/15_1754162321564.png";

export default function AboutSection() {
  return (
    <section id="nosotros" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-transervica-green mb-6">
              40 Años Moviendo lo Imposible
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Desde 1984, TRANSERVICA se ha consolidado como la empresa líder en transporte de cargas 
              excepcionales en Venezuela, con una trayectoria impecable y la confianza de las principales 
              industrias del país.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Nuestro equipo de profesionales altamente calificados y nuestra flota de equipos especializados 
              nos permite enfrentar los desafíos más complejos del transporte industrial.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-transervica-green rounded-full flex items-center justify-center mt-1">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-semibold text-gray-800">Misión</h3>
                  <p className="text-gray-600">
                    Proporcionar soluciones integrales de transporte especializado con los más altos 
                    estándares de seguridad y calidad.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-transervica-light-green rounded-full flex items-center justify-center mt-1">
                  <Eye className="w-4 h-4 text-white" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-semibold text-gray-800">Visión</h3>
                  <p className="text-gray-600">
                    Ser la empresa de transporte especializado más confiable y reconocida de Venezuela 
                    y Latinoamérica.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            <img 
              src={aboutImage} 
              alt="Vehículo especializado Transervica en operación portuaria" 
              className="rounded-lg shadow-lg w-full h-64 object-cover"
            />
            
            <div className="bg-transervica-green text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Información Corporativa</h3>
              <div className="space-y-3">
                <p><strong>RIF:</strong> J-00207776-0</p>
                <p><strong>Ubicación:</strong> Mariara, Estado Carabobo, Venezuela</p>
                <p><strong>Teléfono:</strong> +58 (424) 123-4567</p>
                <p><strong>Email:</strong> info@transervica.net</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
