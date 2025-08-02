import { Check } from "lucide-react";
import equipment1 from "@assets/16_1754162321564.png";
import equipment2 from "@assets/17_1754162321564.png";

export default function EquipmentSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-transervica-green mb-4">Nuestros Equipos</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Flota especializada de última generación para cualquier desafío de transporte
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src={equipment1} 
              alt="Instalaciones industriales con equipos especializados" 
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Remolques Modulares Hidráulicos</h3>
              <p className="text-gray-600 mb-4">
                Equipos de alta tecnología con capacidad de carga de hasta 1,100 toneladas, ideales para 
                el transporte de maquinaria industrial pesada.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-transervica-green mr-2" />
                  Control hidráulico independiente
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-transervica-green mr-2" />
                  Configuración modular flexible
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-transervica-green mr-2" />
                  Sistemas de seguridad avanzados
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src={equipment2} 
              alt="Transporte e instalación de equipos industriales" 
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grúas Especializadas</h3>
              <p className="text-gray-600 mb-4">
                Grúas de gran capacidad para operaciones de carga, descarga e instalación de equipos 
                industriales pesados.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-transervica-green mr-2" />
                  Capacidad hasta 500 toneladas
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-transervica-green mr-2" />
                  Alcance extendido
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-transervica-green mr-2" />
                  Operadores certificados
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
