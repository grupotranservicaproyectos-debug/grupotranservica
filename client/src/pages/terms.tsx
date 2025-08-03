import React from 'react';
import BlogHeader from '@/components/blog-header';
import Footer from '@/components/footer';
import { useLanguage } from '../contexts/LanguageContext';
import { Calendar, FileText, Shield, Users } from 'lucide-react';

export default function TermsOfService() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-green-50/30">
      <BlogHeader />
      
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-[#155d29] rounded-2xl mb-6">
              <FileText className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-6 text-[#155d29]">
              {t('legal.terms.title')}
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              {t('legal.terms.description')}
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
              
              {/* Section 1: Acceptance */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-[#155d29] text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <h2 className="text-2xl font-bold text-[#155d29]">Aceptación de los Términos</h2>
                </div>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  <p className="mb-4">
                    Al contratar los servicios de TRANSERVICA, C.A. (en adelante "la Empresa"), el cliente acepta expresamente 
                    estos términos y condiciones. Estos términos constituyen un acuerdo legalmente vinculante entre el cliente 
                    y TRANSERVICA, C.A., empresa especializada en transporte de cargas excepcionales con 40 años de experiencia.
                  </p>
                  <p>
                    La utilización de nuestros servicios implica la aceptación total e incondicional de las presentes condiciones, 
                    las cuales prevalecerán sobre cualquier otra condición establecida por el cliente.
                  </p>
                </div>
              </div>

              {/* Section 2: Services */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-[#155d29] text-white rounded-full flex items-center justify-center font-bold">2</div>
                  <h2 className="text-2xl font-bold text-[#155d29]">Descripción de Servicios</h2>
                </div>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  <p className="mb-4">
                    TRANSERVICA, C.A. ofrece servicios especializados de transporte de cargas excepcionales hasta 1,100 toneladas, 
                    utilizando trailers modulares hidráulicos SCHEUERLE y COMETTO de última generación. Nuestros servicios incluyen:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Transporte de cargas excepcionales y sobredimensionadas</li>
                    <li>Servicios de grúas móviles y sobre orugas hasta 800 toneladas</li>
                    <li>Logística integral y coordinación de proyectos especiales</li>
                    <li>Estudios de factibilidad y planificación de rutas</li>
                    <li>Servicios de izamiento y montaje especializado</li>
                  </ul>
                  <p>
                    Todos los servicios se ejecutan bajo estrictos protocolos de seguridad y cumpliendo con la normativa 
                    venezolana e internacional aplicable.
                  </p>
                </div>
              </div>

              {/* Section 3: Responsibilities */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-[#155d29] text-white rounded-full flex items-center justify-center font-bold">3</div>
                  <h2 className="text-2xl font-bold text-[#155d29]">Responsabilidades del Cliente</h2>
                </div>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  <p className="mb-4">El cliente se compromete a:</p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Proporcionar información precisa y completa sobre las características de la carga</li>
                    <li>Obtener todos los permisos y autorizaciones necesarias cuando sea requerido</li>
                    <li>Facilitar el acceso a los puntos de carga y descarga en las condiciones acordadas</li>
                    <li>Pagar los servicios según las condiciones comerciales establecidas</li>
                    <li>Cumplir con las normas de seguridad y protocolos establecidos por TRANSERVICA</li>
                  </ul>
                  <p>
                    El incumplimiento de estas obligaciones puede resultar en la suspensión del servicio y la 
                    facturación de costos adicionales.
                  </p>
                </div>
              </div>

              {/* Section 4: Limitations */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-[#155d29] text-white rounded-full flex items-center justify-center font-bold">4</div>
                  <h2 className="text-2xl font-bold text-[#155d29]">Limitaciones de Responsabilidad</h2>
                </div>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  <p className="mb-4">
                    TRANSERVICA, C.A. mantiene pólizas de seguro que cubren los servicios prestados según los términos 
                    y límites establecidos en las mismas. La responsabilidad de la empresa se limita a:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Daños causados por negligencia comprobada en la prestación del servicio</li>
                    <li>Límites establecidos en las pólizas de seguro vigentes</li>
                    <li>Exclusión de lucro cesante, daños indirectos o consecuenciales</li>
                  </ul>
                  <p>
                    No se acepta responsabilidad por demoras causadas por factores externos como condiciones climáticas, 
                    restricciones gubernamentales, o circunstancias de fuerza mayor.
                  </p>
                </div>
              </div>

              {/* Section 5: Payment Terms */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-[#155d29] text-white rounded-full flex items-center justify-center font-bold">5</div>
                  <h2 className="text-2xl font-bold text-[#155d29]">Condiciones de Pago</h2>
                </div>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  <p className="mb-4">
                    Los servicios se facturan según las tarifas vigentes al momento de la prestación del servicio. 
                    Las condiciones de pago incluyen:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Anticipo del 50% al momento de la confirmación del servicio</li>
                    <li>Saldo restante contra entrega o según términos acordados</li>
                    <li>Facturación de servicios adicionales no contemplados en la cotización original</li>
                    <li>Penalidades por pagos tardíos según condiciones comerciales</li>
                  </ul>
                </div>
              </div>

              {/* Section 6: Force Majeure */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-[#155d29] text-white rounded-full flex items-center justify-center font-bold">6</div>
                  <h2 className="text-2xl font-bold text-[#155d29]">Fuerza Mayor</h2>
                </div>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  <p>
                    TRANSERVICA, C.A. no será responsable por el incumplimiento de sus obligaciones cuando este se deba 
                    a causas de fuerza mayor, incluyendo pero no limitándose a: desastres naturales, conflictos laborales, 
                    restricciones gubernamentales, pandemias, o cualquier otra circunstancia fuera del control razonable 
                    de la empresa.
                  </p>
                </div>
              </div>

              {/* Section 7: Modifications */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-[#155d29] text-white rounded-full flex items-center justify-center font-bold">7</div>
                  <h2 className="text-2xl font-bold text-[#155d29]">Modificaciones</h2>
                </div>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  <p>
                    TRANSERVICA, C.A. se reserva el derecho de modificar estos términos y condiciones en cualquier momento. 
                    Las modificaciones entrarán en vigor inmediatamente después de su publicación en el sitio web oficial 
                    de la empresa. Se recomienda revisar periódicamente estos términos.
                  </p>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-gray-50 rounded-xl p-8 mt-12">
                <h3 className="text-xl font-bold text-[#155d29] mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Información de Contacto
                </h3>
                <div className="grid md:grid-cols-2 gap-6 text-gray-700">
                  <div>
                    <p className="font-semibold mb-2">TRANSERVICA, C.A.</p>
                    <p className="text-sm mb-1">RIF: J-00207776-0</p>
                    <p className="text-sm">Carretera Nacional Maracay Mariara Km 9</p>
                    <p className="text-sm">Mariara, Edo. Carabobo, Venezuela</p>
                  </div>
                  <div>
                    <p className="text-sm mb-1">Teléfonos: +58 414-277-6340 / +58 412-441-8890</p>
                    <p className="text-sm mb-1">Email: direccioncomercialtvc@grupotranservica.com</p>
                    <p className="text-sm">Web: www.transervica.com</p>
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