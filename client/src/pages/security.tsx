import React from 'react';
import BlogHeader from '@/components/blog-header';
import Footer from '@/components/footer';
import { useLanguage } from '../contexts/LanguageContext';
import { Calendar, Shield, Truck, AlertTriangle, CheckCircle, Users, Award } from 'lucide-react';

export default function SecurityPolicy() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-green-50/30">
      <BlogHeader />
      
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-[#155d29] rounded-2xl mb-6">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-6 text-[#155d29]">
              {t('legal.security.title')}
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              {t('legal.security.description')}
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Última actualización: Enero 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4" />
                <span>Certificación ISO 45001</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              
              {/* Section 1: Our Commitment */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-[#155d29] text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <h2 className="text-2xl font-bold text-[#155d29]">Compromiso con la Seguridad</h2>
                </div>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  <p className="mb-4">
                    En TRANSERVICA, C.A., la seguridad no es solo una prioridad, es el fundamento de todas nuestras 
                    operaciones. Con 40 años de experiencia en transporte de cargas excepcionales, hemos desarrollado 
                    un sistema integral de gestión de seguridad que protege a nuestros empleados, clientes, 
                    comunidades y el medio ambiente.
                  </p>
                  <p className="mb-4">
                    Nuestro compromiso se basa en el principio de "Cero Accidentes" y el cumplimiento estricto 
                    de normativas nacionales e internacionales, manteniendo un récord de seguridad del 99.8% 
                    en más de 15,000 proyectos ejecutados.
                  </p>
                  
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6 mt-6">
                    <div className="flex items-center gap-3 mb-3">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                      <h4 className="text-lg font-semibold text-green-800">Nuestro Record de Seguridad</h4>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-green-700">99.8%</div>
                        <div className="text-sm text-green-600">Índice de Seguridad</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-green-700">15,000+</div>
                        <div className="text-sm text-green-600">Proyectos Seguros</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-green-700">40</div>
                        <div className="text-sm text-green-600">Años de Experiencia</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-green-700">1,100</div>
                        <div className="text-sm text-green-600">Tons. Capacidad Max.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 2: Safety Management System */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-[#155d29] text-white rounded-full flex items-center justify-center font-bold">2</div>
                  <h2 className="text-2xl font-bold text-[#155d29]">Sistema de Gestión de Seguridad</h2>
                </div>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  <p className="mb-4">
                    Nuestro Sistema Integrado de Gestión (SIG) está certificado bajo las normas:
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 mb-6">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <h4 className="font-semibold text-blue-800 mb-2">ISO 45001:2018</h4>
                      <p className="text-sm text-blue-700">Sistemas de Gestión de Seguridad y Salud Ocupacional</p>
                    </div>
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <h4 className="font-semibold text-green-800 mb-2">ISO 14001:2015</h4>
                      <p className="text-sm text-green-700">Sistemas de Gestión Ambiental</p>
                    </div>
                    <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                      <h4 className="font-semibold text-purple-800 mb-2">ISO 9001:2015</h4>
                      <p className="text-sm text-purple-700">Sistemas de Gestión de Calidad</p>
                    </div>
                  </div>

                  <h4 className="text-lg font-semibold text-[#155d29] mt-6 mb-3 flex items-center gap-2">
                    <Truck className="w-5 h-5" />
                    Componentes del Sistema
                  </h4>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Identificación y evaluación continua de riesgos operacionales</li>
                    <li>Procedimientos de trabajo seguro para cada tipo de operación</li>
                    <li>Programas de capacitación y certificación del personal</li>
                    <li>Inspecciones regulares de equipos y herramientas</li>
                    <li>Auditorías internas y externas del sistema de gestión</li>
                    <li>Investigación y análisis de incidentes y casi-accidentes</li>
                    <li>Planes de respuesta ante emergencias y contingencias</li>
                  </ul>
                </div>
              </div>

              {/* Section 3: Equipment Safety */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-[#155d29] text-white rounded-full flex items-center justify-center font-bold">3</div>
                  <h2 className="text-2xl font-bold text-[#155d29]">Seguridad de Equipos</h2>
                </div>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  <p className="mb-4">
                    Nuestra flota de equipos especializados cumple con los más altos estándares de seguridad:
                  </p>
                  
                  <h4 className="text-lg font-semibold text-[#155d29] mt-6 mb-3">Trailers Modulares Hidráulicos</h4>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Sistemas de control hidráulico con redundancia de seguridad</li>
                    <li>Monitoreo en tiempo real de presiones y temperaturas</li>
                    <li>Sistemas de frenado de emergencia automático</li>
                    <li>Configuraciones modulares adaptables a cada carga</li>
                    <li>Certificaciones CE y homologaciones internacionales</li>
                  </ul>

                  <h4 className="text-lg font-semibold text-[#155d29] mt-6 mb-3">Grúas y Equipos de Izamiento</h4>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Sistemas de control de cargas con limitadores automáticos</li>
                    <li>Dispositivos de seguridad anti-vuelco y estabilización</li>
                    <li>Mantenimiento preventivo según especificaciones del fabricante</li>
                    <li>Certificaciones anuales de capacidad y seguridad</li>
                    <li>Operadores certificados y especializados</li>
                  </ul>

                  <h4 className="text-lg font-semibold text-[#155d29] mt-6 mb-3">Programa de Mantenimiento</h4>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Inspecciones diarias antes de cada operación</li>
                    <li>Mantenimiento preventivo cada 250, 500 y 1,000 horas</li>
                    <li>Calibración periódica de sistemas de control</li>
                    <li>Renovación de componentes críticos según especificaciones</li>
                    <li>Registro digital completo de historial de mantenimiento</li>
                  </ul>
                </div>
              </div>

              {/* Section 4: Personnel Training */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-[#155d29] text-white rounded-full flex items-center justify-center font-bold">4</div>
                  <h2 className="text-2xl font-bold text-[#155d29]">Capacitación del Personal</h2>
                </div>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  <p className="mb-4">
                    Todo el personal de TRANSERVICA recibe capacitación continua en seguridad y operaciones especializadas:
                  </p>
                  
                  <h4 className="text-lg font-semibold text-[#155d29] mt-6 mb-3 flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    Programas de Capacitación
                  </h4>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Inducción en seguridad para todo el personal nuevo</li>
                    <li>Certificación en operación de equipos especializados</li>
                    <li>Entrenamientos en primeros auxilios y respuesta a emergencias</li>
                    <li>Cursos de actualización en normativas de transporte</li>
                    <li>Simulacros y ejercicios prácticos de seguridad</li>
                    <li>Programas de liderazgo en seguridad para supervisores</li>
                  </ul>

                  <h4 className="text-lg font-semibold text-[#155d29] mt-6 mb-3">Certificaciones Requeridas</h4>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Licencias de conducir especializadas para transporte de cargas excepcionales</li>
                    <li>Certificaciones de operadores de grúas móviles y sobre orugas</li>
                    <li>Cursos de seguridad vial y manejo defensivo</li>
                    <li>Capacitación en manejo de materiales peligrosos cuando aplique</li>
                    <li>Certificaciones médicas y aptitud física para operaciones críticas</li>
                  </ul>
                </div>
              </div>

              {/* Section 5: Route Planning */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-[#155d29] text-white rounded-full flex items-center justify-center font-bold">5</div>
                  <h2 className="text-2xl font-bold text-[#155d29]">Planificación y Estudios de Ruta</h2>
                </div>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  <p className="mb-4">
                    Cada transporte de carga excepcional requiere un estudio detallado de factibilidad y planificación:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Análisis estructural de puentes, viaductos y infraestructura vial</li>
                    <li>Evaluación de restricciones de altura, ancho y peso en la ruta</li>
                    <li>Coordinación con autoridades de tránsito y organismos competentes</li>
                    <li>Identificación de rutas alternativas y puntos de contingencia</li>
                    <li>Estudios de impacto vial y medidas de mitigación</li>
                    <li>Planificación de escoltas especializadas cuando sea necesario</li>
                    <li>Evaluación de condiciones climáticas y factores ambientales</li>
                  </ul>
                </div>
              </div>

              {/* Section 6: Risk Management */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-[#155d29] text-white rounded-full flex items-center justify-center font-bold">6</div>
                  <h2 className="text-2xl font-bold text-[#155d29]">Gestión de Riesgos</h2>
                </div>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  <p className="mb-4">
                    Implementamos un proceso sistemático de identificación, evaluación y control de riesgos:
                  </p>
                  
                  <h4 className="text-lg font-semibold text-[#155d29] mt-6 mb-3 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5" />
                    Matriz de Riesgos
                  </h4>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Riesgos operacionales durante carga, transporte y descarga</li>
                    <li>Riesgos viales y de tráfico en rutas especializadas</li>
                    <li>Riesgos climáticos y condiciones meteorológicas adversas</li>
                    <li>Riesgos técnicos relacionados con equipos y maquinaria</li>
                    <li>Riesgos ambientales y de impacto en comunidades</li>
                  </ul>

                  <h4 className="text-lg font-semibold text-[#155d29] mt-6 mb-3">Medidas de Control</h4>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Protocolos específicos para cada tipo de riesgo identificado</li>
                    <li>Sistemas de monitoreo continuo durante las operaciones</li>
                    <li>Planes de contingencia para diferentes escenarios de emergencia</li>
                    <li>Comunicación constante entre equipos operativos y control central</li>
                    <li>Revisión y actualización continua de procedimientos</li>
                  </ul>
                </div>
              </div>

              {/* Section 7: Emergency Response */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-[#155d29] text-white rounded-full flex items-center justify-center font-bold">7</div>
                  <h2 className="text-2xl font-bold text-[#155d29]">Respuesta ante Emergencias</h2>
                </div>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  <p className="mb-4">
                    Mantenemos protocolos de respuesta inmediata para cualquier situación de emergencia:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Centro de control operativo 24/7 con personal especializado</li>
                    <li>Equipos de respuesta rápida en diferentes regiones del país</li>
                    <li>Coordinación directa con cuerpos de bomberos y organismos de rescate</li>
                    <li>Planes de evacuación y atención médica de emergencia</li>
                    <li>Protocolos de comunicación con clientes y autoridades</li>
                    <li>Procedimientos de investigación y análisis post-incidente</li>
                  </ul>
                </div>
              </div>

              {/* Section 8: Continuous Improvement */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-[#155d29] text-white rounded-full flex items-center justify-center font-bold">8</div>
                  <h2 className="text-2xl font-bold text-[#155d29]">Mejora Continua</h2>
                </div>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  <p className="mb-4">
                    Nuestro compromiso con la seguridad incluye la mejora continua de nuestros procesos:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Revisiones periódicas de políticas y procedimientos de seguridad</li>
                    <li>Incorporación de nuevas tecnologías y mejores prácticas</li>
                    <li>Auditorías internas y externas regulares</li>
                    <li>Retroalimentación continua del personal operativo</li>
                    <li>Benchmarking con estándares internacionales de seguridad</li>
                    <li>Inversión continua en capacitación y actualización tecnológica</li>
                  </ul>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-gray-50 rounded-xl p-8 mt-12">
                <h3 className="text-xl font-bold text-[#155d29] mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Departamento de Seguridad
                </h3>
                <div className="grid md:grid-cols-2 gap-6 text-gray-700">
                  <div>
                    <p className="font-semibold mb-2">Coordinación de Seguridad Industrial</p>
                    <p className="text-sm mb-1">TRANSERVICA, C.A.</p>
                    <p className="text-sm">Carretera Nacional Maracay Mariara Km 9</p>
                    <p className="text-sm">Mariara, Edo. Carabobo, Venezuela</p>
                  </div>
                  <div>
                    <p className="text-sm mb-1">Email: seguridad@grupotranservica.com</p>
                    <p className="text-sm mb-1">Emergencias 24/7: +58 414-277-6340</p>
                    <p className="text-sm mb-1">Control Operativo: +58 412-441-8890</p>
                    <p className="text-sm">Línea directa para reportes de seguridad</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}