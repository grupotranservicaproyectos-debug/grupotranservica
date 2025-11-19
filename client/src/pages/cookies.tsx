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
            <div className="inline-flex items-center justify-center w-20 h-20 bg-[#DC2626] rounded-2xl mb-6">
              <Cookie className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-6 text-[#DC2626]">
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
                  <div className="w-8 h-8 bg-[#DC2626] text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <h2 className="text-2xl font-bold text-[#DC2626]">{t('cookies.what.title')}</h2>
                </div>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  <p className="mb-4">
                    {t('cookies.what.content1')}
                  </p>
                  <p>
                    {t('cookies.what.content2')}
                  </p>
                </div>
              </div>

              {/* Section 2: Types of Cookies */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-[#DC2626] text-white rounded-full flex items-center justify-center font-bold">2</div>
                  <h2 className="text-2xl font-bold text-[#DC2626]">{t('cookies.types.title')}</h2>
                </div>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  
                  <h4 className="text-lg font-semibold text-[#DC2626] mt-6 mb-3 flex items-center gap-2">
                    <Settings className="w-5 h-5" />
                    {t('cookies.types.essential.title')}
                  </h4>
                  <p className="mb-4">
                    {t('cookies.types.essential.content')}
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>{t('cookies.types.essential.item1')}</li>
                    <li>{t('cookies.types.essential.item2')}</li>
                    <li>{t('cookies.types.essential.item3')}</li>
                    <li>{t('cookies.types.essential.item4')}</li>
                  </ul>

                  <h4 className="text-lg font-semibold text-[#DC2626] mt-6 mb-3 flex items-center gap-2">
                    <BarChart className="w-5 h-5" />
                    {t('cookies.types.analytics.title')}
                  </h4>
                  <p className="mb-4">
                    {t('cookies.types.analytics.content')}
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>{t('cookies.types.analytics.item1')}</li>
                    <li>{t('cookies.types.analytics.item2')}</li>
                    <li>{t('cookies.types.analytics.item3')}</li>
                    <li>{t('cookies.types.analytics.item4')}</li>
                  </ul>

                  <h4 className="text-lg font-semibold text-[#DC2626] mt-6 mb-3 flex items-center gap-2">
                    <Eye className="w-5 h-5" />
                    {t('cookies.types.functional.title')}
                  </h4>
                  <p className="mb-4">
                    {t('cookies.types.functional.content')}
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>{t('cookies.types.functional.item1')}</li>
                    <li>{t('cookies.types.functional.item2')}</li>
                    <li>{t('cookies.types.functional.item3')}</li>
                    <li>{t('cookies.types.functional.item4')}</li>
                  </ul>
                </div>
              </div>

              {/* Section 3: Cookie Management */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-[#DC2626] text-white rounded-full flex items-center justify-center font-bold">3</div>
                  <h2 className="text-2xl font-bold text-[#DC2626]">{t('cookies.management.title')}</h2>
                </div>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  <p className="mb-4">
                    {t('cookies.management.content')}
                  </p>
                  
                  <h4 className="text-lg font-semibold text-[#DC2626] mt-6 mb-3">{t('cookies.management.browser.title')}</h4>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li><strong>Chrome:</strong> {t('cookies.management.browser.chrome')}</li>
                    <li><strong>Firefox:</strong> {t('cookies.management.browser.firefox')}</li>
                    <li><strong>Safari:</strong> {t('cookies.management.browser.safari')}</li>
                    <li><strong>Edge:</strong> {t('cookies.management.browser.edge')}</li>
                  </ul>

                  <h4 className="text-lg font-semibold text-[#DC2626] mt-6 mb-3">{t('cookies.management.optout.title')}</h4>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Google Analytics: <a href="https://tools.google.com/dlpage/gaoptout" className="text-[#DC2626] hover:underline">{t('cookies.management.optout.item1')}</a></li>
                    <li>{t('cookies.management.optout.item2')}</li>
                    <li>{t('cookies.management.optout.item3')}</li>
                  </ul>

                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-4">
                    <p className="text-amber-800 text-sm">
                      <strong>Nota:</strong> {t('cookies.management.note')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 4: Third Party Services */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-[#DC2626] text-white rounded-full flex items-center justify-center font-bold">4</div>
                  <h2 className="text-2xl font-bold text-[#DC2626]">{t('cookies.thirdparty.title')}</h2>
                </div>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  <p className="mb-4">
                    {t('cookies.thirdparty.content1')}
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li><strong>Google Analytics:</strong> {t('cookies.thirdparty.google')}</li>
                    <li><strong>YouTube:</strong> {t('cookies.thirdparty.youtube')}</li>
                    <li><strong>Google Maps:</strong> {t('cookies.thirdparty.maps')}</li>
                    <li><strong>Redes Sociales:</strong> {t('cookies.thirdparty.social')}</li>
                  </ul>
                  <p>
                    {t('cookies.thirdparty.content2')}
                  </p>
                </div>
              </div>

              {/* Section 5: Data Security */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-[#DC2626] text-white rounded-full flex items-center justify-center font-bold">5</div>
                  <h2 className="text-2xl font-bold text-[#DC2626]">Seguridad de Datos</h2>
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
                  <div className="w-8 h-8 bg-[#DC2626] text-white rounded-full flex items-center justify-center font-bold">6</div>
                  <h2 className="text-2xl font-bold text-[#DC2626]">Período de Retención</h2>
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
                  <div className="w-8 h-8 bg-[#DC2626] text-white rounded-full flex items-center justify-center font-bold">7</div>
                  <h2 className="text-2xl font-bold text-[#DC2626]">Actualizaciones de esta Política</h2>
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
                <h3 className="text-xl font-bold text-[#DC2626] mb-4 flex items-center gap-2">
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
                    <p className="text-sm mb-1">Teléfono: +58 422-6361047 / +58 414-277-6340</p>
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