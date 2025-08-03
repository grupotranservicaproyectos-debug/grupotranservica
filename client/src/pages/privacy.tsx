import React from 'react';
import BlogHeader from '@/components/blog-header';
import Footer from '@/components/footer';
import { useLanguage } from '../contexts/LanguageContext';
import { Calendar, Shield, Eye, Lock, Database, Users } from 'lucide-react';

export default function PrivacyPolicy() {
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
              {t('legal.privacy.title')}
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              {t('legal.privacy.description')}
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Última actualización: Enero 2025</span>
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
              
              {/* Section 1: Introduction */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-[#155d29] text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <h2 className="text-2xl font-bold text-[#155d29]">Introducción</h2>
                </div>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  <p className="mb-4">
                    TRANSERVICA, C.A., empresa especializada en transporte de cargas excepcionales, reconoce la importancia 
                    de proteger la privacidad y los datos personales de nuestros clientes, proveedores, empleados y visitantes 
                    de nuestro sitio web.
                  </p>
                  <p>
                    Esta Política de Privacidad establece cómo recopilamos, utilizamos, almacenamos y protegemos la información 
                    personal que nos proporciona, en cumplimiento con las leyes venezolanas aplicables y las mejores prácticas 
                    internacionales.
                  </p>
                </div>
              </div>

              {/* Section 2: Data Collection */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-[#155d29] text-white rounded-full flex items-center justify-center font-bold">2</div>
                  <h2 className="text-2xl font-bold text-[#155d29]">Recopilación de Información</h2>
                </div>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  <p className="mb-4">Recopilamos información personal de las siguientes maneras:</p>
                  
                  <h4 className="text-lg font-semibold text-[#155d29] mt-6 mb-3 flex items-center gap-2">
                    <Database className="w-5 h-5" />
                    Información Directa
                  </h4>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Datos proporcionados en formularios de contacto y cotizaciones</li>
                    <li>Información comercial para la prestación de servicios</li>
                    <li>Datos de empleados y colaboradores</li>
                    <li>Registros de comunicaciones telefónicas y por email</li>
                  </ul>

                  <h4 className="text-lg font-semibold text-[#155d29] mt-6 mb-3 flex items-center gap-2">
                    <Eye className="w-5 h-5" />
                    Información Automática
                  </h4>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Dirección IP y datos de navegación en nuestro sitio web</li>
                    <li>Cookies y tecnologías similares</li>
                    <li>Información de dispositivos y preferencias de navegación</li>
                    <li>Registros de acceso y uso del sitio web</li>
                  </ul>
                </div>
              </div>

              {/* Section 3: Data Usage */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-[#155d29] text-white rounded-full flex items-center justify-center font-bold">3</div>
                  <h2 className="text-2xl font-bold text-[#155d29]">Uso de la Información</h2>
                </div>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  <p className="mb-4">Utilizamos la información recopilada para los siguientes propósitos:</p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Prestación de servicios de transporte especializado</li>
                    <li>Comunicación con clientes y seguimiento de proyectos</li>
                    <li>Procesamiento de cotizaciones y facturación</li>
                    <li>Mejora de nuestros servicios y experiencia del usuario</li>
                    <li>Cumplimiento de obligaciones legales y regulatorias</li>
                    <li>Marketing directo y comunicaciones comerciales (con consentimiento)</li>
                    <li>Análisis estadísticos y estudios de mercado internos</li>
                  </ul>
                  <p>
                    No utilizamos la información personal para fines distintos a los mencionados sin obtener 
                    el consentimiento expreso del titular de los datos.
                  </p>
                </div>
              </div>

              {/* Section 4: Data Protection */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-[#155d29] text-white rounded-full flex items-center justify-center font-bold">4</div>
                  <h2 className="text-2xl font-bold text-[#155d29]">Protección de Datos</h2>
                </div>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  <p className="mb-4">
                    TRANSERVICA implementa medidas técnicas y organizativas apropiadas para proteger 
                    los datos personales contra:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Acceso no autorizado, alteración, divulgación o destrucción</li>
                    <li>Pérdida accidental o tratamiento ilícito</li>
                    <li>Transferencias no autorizadas</li>
                  </ul>
                  
                  <h4 className="text-lg font-semibold text-[#155d29] mt-6 mb-3 flex items-center gap-2">
                    <Lock className="w-5 h-5" />
                    Medidas de Seguridad
                  </h4>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Cifrado de datos sensibles en tránsito y almacenamiento</li>
                    <li>Control de acceso basado en roles y necesidad de conocer</li>
                    <li>Monitoreo continuo de sistemas y detección de anomalías</li>
                    <li>Capacitación regular del personal en protección de datos</li>
                    <li>Respaldo seguro y planes de continuidad del negocio</li>
                  </ul>
                </div>
              </div>

              {/* Section 5: Data Sharing */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-[#155d29] text-white rounded-full flex items-center justify-center font-bold">5</div>
                  <h2 className="text-2xl font-bold text-[#155d29]">Compartir Información</h2>
                </div>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  <p className="mb-4">
                    TRANSERVICA no vende, alquila o comparte información personal con terceros, 
                    excepto en las siguientes circunstancias:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Con proveedores de servicios que requieren la información para completar proyectos</li>
                    <li>Cuando sea requerido por autoridades legales competentes</li>
                    <li>Para proteger los derechos, propiedad o seguridad de la empresa</li>
                    <li>Con el consentimiento explícito del titular de los datos</li>
                    <li>En caso de fusión, adquisición o transferencia de activos empresariales</li>
                  </ul>
                  <p>
                    Cualquier tercero que acceda a información personal debe comprometerse a mantener 
                    el mismo nivel de protección establecido en esta política.
                  </p>
                </div>
              </div>

              {/* Section 6: User Rights */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-[#155d29] text-white rounded-full flex items-center justify-center font-bold">6</div>
                  <h2 className="text-2xl font-bold text-[#155d29]">Derechos del Titular</h2>
                </div>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  <p className="mb-4">Usted tiene derecho a:</p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Acceder a sus datos personales que mantenemos</li>
                    <li>Rectificar información inexacta o incompleta</li>
                    <li>Solicitar la eliminación de sus datos personales</li>
                    <li>Oponerse al tratamiento de sus datos para marketing directo</li>
                    <li>Solicitar la portabilidad de sus datos</li>
                    <li>Presentar quejas ante autoridades de protección de datos</li>
                  </ul>
                  <p>
                    Para ejercer estos derechos, puede contactarnos a través de los medios proporcionados 
                    al final de esta política.
                  </p>
                </div>
              </div>

              {/* Section 7: Data Retention */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-[#155d29] text-white rounded-full flex items-center justify-center font-bold">7</div>
                  <h2 className="text-2xl font-bold text-[#155d29]">Retención de Datos</h2>
                </div>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  <p className="mb-4">
                    Conservamos los datos personales durante el tiempo necesario para cumplir con los 
                    propósitos establecidos en esta política, considerando:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Duración de la relación comercial o contractual</li>
                    <li>Obligaciones legales de conservación de registros</li>
                    <li>Necesidades de defensa legal y resolución de disputas</li>
                    <li>Propósitos estadísticos o de archivo de interés público</li>
                  </ul>
                </div>
              </div>

              {/* Section 8: Updates */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-[#155d29] text-white rounded-full flex items-center justify-center font-bold">8</div>
                  <h2 className="text-2xl font-bold text-[#155d29]">Actualizaciones</h2>
                </div>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  <p>
                    Esta Política de Privacidad puede ser actualizada periódicamente para reflejar cambios 
                    en nuestras prácticas, servicios o requisitos legales. Las modificaciones significativas 
                    serán notificadas a través de nuestro sitio web y otros medios apropiados.
                  </p>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-gray-50 rounded-xl p-8 mt-12">
                <h3 className="text-xl font-bold text-[#155d29] mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Contacto para Asuntos de Privacidad
                </h3>
                <div className="grid md:grid-cols-2 gap-6 text-gray-700">
                  <div>
                    <p className="font-semibold mb-2">Oficial de Protección de Datos</p>
                    <p className="text-sm mb-1">TRANSERVICA, C.A.</p>
                    <p className="text-sm">Carretera Nacional Maracay Mariara Km 9</p>
                    <p className="text-sm">Mariara, Edo. Carabobo, Venezuela</p>
                  </div>
                  <div>
                    <p className="text-sm mb-1">Email: privacidad@grupotranservica.com</p>
                    <p className="text-sm mb-1">Teléfono: +58 414-277-6340</p>
                    <p className="text-sm">Horario de atención: Lunes a Viernes, 8:00 AM - 5:00 PM</p>
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