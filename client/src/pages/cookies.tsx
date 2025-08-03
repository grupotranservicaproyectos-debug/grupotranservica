import React from 'react';
import BlogHeader from '@/components/blog-header';
import Footer from '@/components/footer';
import { useLanguage } from '../contexts/LanguageContext';
import { Calendar, Cookie, Settings, Eye, BarChart, Users } from 'lucide-react';

export default function CookiePolicy() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-green-50/30">
      <BlogHeader />
      
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-[#155d29] rounded-2xl mb-6">
              <Cookie className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-6 text-[#155d29]">
              {t('legal.cookies.title')}
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              {t('legal.cookies.description')}
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
              
              {/* Section 1: What are Cookies */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-[#155d29] text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <h2 className="text-2xl font-bold text-[#155d29]">¿Qué son las Cookies?</h2>
                </div>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  <p className="mb-4">
                    Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita 
                    nuestro sitio web. Estas tecnologías nos permiten reconocer su navegador y dispositivo, 
                    recordar sus preferencias y mejorar su experiencia de navegación.
                  </p>
                  <p>
                    TRANSERVICA, C.A. utiliza cookies para proporcionar una experiencia web optimizada, 
                    analizar el uso del sitio y personalizar el contenido según las necesidades de nuestros visitantes.
                  </p>
                </div>
              </div>

              {/* Section 2: Types of Cookies */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-[#155d29] text-white rounded-full flex items-center justify-center font-bold">2</div>
                  <h2 className="text-2xl font-bold text-[#155d29]">Tipos de Cookies que Utilizamos</h2>
                </div>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  
                  <h4 className="text-lg font-semibold text-[#155d29] mt-6 mb-3 flex items-center gap-2">
                    <Settings className="w-5 h-5" />
                    Cookies Esenciales
                  </h4>
                  <p className="mb-4">
                    Estas cookies son necesarias para el funcionamiento básico del sitio web y no pueden 
                    ser desactivadas. Incluyen:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Cookies de sesión para mantener la funcionalidad durante su visita</li>
                    <li>Cookies de seguridad para proteger contra ataques maliciosos</li>
                    <li>Cookies de preferencias de idioma y configuración regional</li>
                    <li>Cookies de formularios para recordar información ingresada</li>
                  </ul>

                  <h4 className="text-lg font-semibold text-[#155d29] mt-6 mb-3 flex items-center gap-2">
                    <BarChart className="w-5 h-5" />
                    Cookies Analíticas
                  </h4>
                  <p className="mb-4">
                    Nos ayudan a entender cómo los visitantes interactúan con nuestro sitio web:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Google Analytics para análisis de tráfico y comportamiento</li>
                    <li>Seguimiento de páginas visitadas y tiempo de permanencia</li>
                    <li>Identificación de contenido más popular y relevante</li>
                    <li>Análisis de rutas de navegación y puntos de salida</li>
                  </ul>

                  <h4 className="text-lg font-semibold text-[#155d29] mt-6 mb-3 flex items-center gap-2">
                    <Eye className="w-5 h-5" />
                    Cookies de Funcionalidad
                  </h4>
                  <p className="mb-4">
                    Mejoran la funcionalidad y personalización del sitio:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Recordar preferencias de idioma y región</li>
                    <li>Mantener configuraciones de accesibilidad</li>
                    <li>Personalizar contenido basado en interacciones previas</li>
                    <li>Facilitar el uso de formularios de contacto</li>
                  </ul>
                </div>
              </div>

              {/* Section 3: Cookie Management */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-[#155d29] text-white rounded-full flex items-center justify-center font-bold">3</div>
                  <h2 className="text-2xl font-bold text-[#155d29]">Gestión de Cookies</h2>
                </div>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  <p className="mb-4">
                    Usted tiene control total sobre las cookies utilizadas en nuestro sitio web. 
                    Puede gestionar sus preferencias de las siguientes maneras:
                  </p>
                  
                  <h4 className="text-lg font-semibold text-[#155d29] mt-6 mb-3">Configuración del Navegador</h4>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li><strong>Chrome:</strong> Configuración → Privacidad y seguridad → Cookies y otros datos de sitios</li>
                    <li><strong>Firefox:</strong> Opciones → Privacidad y seguridad → Cookies y datos del sitio</li>
                    <li><strong>Safari:</strong> Preferencias → Privacidad → Gestionar datos del sitio web</li>
                    <li><strong>Edge:</strong> Configuración → Cookies y permisos del sitio</li>
                  </ul>

                  <h4 className="text-lg font-semibold text-[#155d29] mt-6 mb-3">Herramientas de Opt-out</h4>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Google Analytics: <a href="https://tools.google.com/dlpage/gaoptout" className="text-[#155d29] hover:underline">Complemento de exclusión</a></li>
                    <li>Configuración de cookies al ingresar al sitio</li>
                    <li>Herramientas de privacidad del navegador</li>
                  </ul>

                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-4">
                    <p className="text-amber-800 text-sm">
                      <strong>Nota:</strong> Deshabilitar ciertas cookies puede afectar la funcionalidad 
                      del sitio web y su experiencia de navegación.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 4: Third Party Services */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-[#155d29] text-white rounded-full flex items-center justify-center font-bold">4</div>
                  <h2 className="text-2xl font-bold text-[#155d29]">Servicios de Terceros</h2>
                </div>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  <p className="mb-4">
                    Nuestro sitio web puede incluir servicios proporcionados por terceros que establecen 
                    sus propias cookies:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li><strong>Google Analytics:</strong> Para análisis de tráfico web y comportamiento de usuarios</li>
                    <li><strong>YouTube:</strong> Para reproducir videos corporativos embebidos</li>
                    <li><strong>Google Maps:</strong> Para mostrar ubicaciones y facilitar navegación</li>
                    <li><strong>Redes Sociales:</strong> Botones de compartir y widgets de redes sociales</li>
                  </ul>
                  <p>
                    Cada servicio de terceros tiene sus propias políticas de cookies y privacidad. 
                    Le recomendamos revisar estas políticas para entender cómo manejan sus datos.
                  </p>
                </div>
              </div>

              {/* Section 5: Data Security */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-[#155d29] text-white rounded-full flex items-center justify-center font-bold">5</div>
                  <h2 className="text-2xl font-bold text-[#155d29]">Seguridad de Datos</h2>
                </div>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  <p className="mb-4">
                    La información recopilada a través de cookies está protegida mediante:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Cifrado de datos sensibles durante la transmisión</li>
                    <li>Almacenamiento seguro en servidores protegidos</li>
                    <li>Acceso restringido solo a personal autorizado</li>
                    <li>Monitoreo continuo de sistemas para detectar actividades sospechosas</li>
                    <li>Cumplimiento con estándares de seguridad internacionales</li>
                  </ul>
                </div>
              </div>

              {/* Section 6: Retention Period */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-[#155d29] text-white rounded-full flex items-center justify-center font-bold">6</div>
                  <h2 className="text-2xl font-bold text-[#155d29]">Período de Retención</h2>
                </div>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  <p className="mb-4">
                    Las cookies tienen diferentes períodos de vida útil:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li><strong>Cookies de sesión:</strong> Se eliminan al cerrar el navegador</li>
                    <li><strong>Cookies persistentes:</strong> Permanecen durante el tiempo especificado (generalmente 1-2 años)</li>
                    <li><strong>Cookies analíticas:</strong> Retención de datos por 26 meses máximo</li>
                    <li><strong>Cookies de preferencias:</strong> Hasta que el usuario las elimine manualmente</li>
                  </ul>
                </div>
              </div>

              {/* Section 7: Updates */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-[#155d29] text-white rounded-full flex items-center justify-center font-bold">7</div>
                  <h2 className="text-2xl font-bold text-[#155d29]">Actualizaciones de esta Política</h2>
                </div>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  <p>
                    Esta Política de Cookies puede ser actualizada periódicamente para reflejar cambios 
                    en nuestras prácticas o requisitos legales. Las modificaciones serán publicadas en 
                    esta página con la fecha de la última actualización. Le recomendamos revisar 
                    periódicamente esta política.
                  </p>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-gray-50 rounded-xl p-8 mt-12">
                <h3 className="text-xl font-bold text-[#155d29] mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Contacto sobre Cookies
                </h3>
                <div className="grid md:grid-cols-2 gap-6 text-gray-700">
                  <div>
                    <p className="font-semibold mb-2">Responsable de Datos Web</p>
                    <p className="text-sm mb-1">TRANSERVICA, C.A.</p>
                    <p className="text-sm">Carretera Nacional Maracay Mariara Km 9</p>
                    <p className="text-sm">Mariara, Edo. Carabobo, Venezuela</p>
                  </div>
                  <div>
                    <p className="text-sm mb-1">Email: web@grupotranservica.com</p>
                    <p className="text-sm mb-1">Teléfono: +58 414-277-6340</p>
                    <p className="text-sm">Para consultas sobre cookies y privacidad web</p>
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