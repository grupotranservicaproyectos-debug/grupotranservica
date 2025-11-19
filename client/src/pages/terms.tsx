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
            <div className="inline-flex items-center justify-center w-20 h-20 bg-[#DC2626] rounded-2xl mb-6">
              <FileText className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-6 text-[#DC2626]">
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
                  <div className="w-8 h-8 bg-[#DC2626] text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <h2 className="text-2xl font-bold text-[#DC2626]">{t('terms.acceptance.title')}</h2>
                </div>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  <p className="mb-4">
                    {t('terms.acceptance.content1')}
                  </p>
                  <p>
                    {t('terms.acceptance.content2')}
                  </p>
                </div>
              </div>

              {/* Section 2: Services */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-[#DC2626] text-white rounded-full flex items-center justify-center font-bold">2</div>
                  <h2 className="text-2xl font-bold text-[#DC2626]">{t('terms.services.title')}</h2>
                </div>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  <p className="mb-4">
                    {t('terms.services.content1')}
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>{t('terms.services.item1')}</li>
                    <li>{t('terms.services.item2')}</li>
                    <li>{t('terms.services.item3')}</li>
                    <li>{t('terms.services.item4')}</li>
                    <li>{t('terms.services.item5')}</li>
                  </ul>
                  <p>
                    {t('terms.services.content2')}
                  </p>
                </div>
              </div>

              {/* Section 3: Responsibilities */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-[#DC2626] text-white rounded-full flex items-center justify-center font-bold">3</div>
                  <h2 className="text-2xl font-bold text-[#DC2626]">{t('terms.responsibilities.title')}</h2>
                </div>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  <p className="mb-4">{t('terms.responsibilities.content1')}</p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>{t('terms.responsibilities.item1')}</li>
                    <li>{t('terms.responsibilities.item2')}</li>
                    <li>{t('terms.responsibilities.item3')}</li>
                    <li>{t('terms.responsibilities.item4')}</li>
                    <li>{t('terms.responsibilities.item5')}</li>
                  </ul>
                  <p>
                    {t('terms.responsibilities.content2')}
                  </p>
                </div>
              </div>

              {/* Section 4: Limitations */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-[#DC2626] text-white rounded-full flex items-center justify-center font-bold">4</div>
                  <h2 className="text-2xl font-bold text-[#DC2626]">{t('terms.limitations.title')}</h2>
                </div>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  <p className="mb-4">
                    {t('terms.limitations.content1')}
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>{t('terms.limitations.item1')}</li>
                    <li>{t('terms.limitations.item2')}</li>
                    <li>{t('terms.limitations.item3')}</li>
                  </ul>
                  <p>
                    {t('terms.limitations.content2')}
                  </p>
                </div>
              </div>

              {/* Section 5: Payment Terms */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-[#DC2626] text-white rounded-full flex items-center justify-center font-bold">5</div>
                  <h2 className="text-2xl font-bold text-[#DC2626]">{t('terms.payment.title')}</h2>
                </div>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  <p className="mb-4">
                    {t('terms.payment.content1')}
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>{t('terms.payment.item1')}</li>
                    <li>{t('terms.payment.item2')}</li>
                    <li>{t('terms.payment.item3')}</li>
                    <li>{t('terms.payment.item4')}</li>
                  </ul>
                </div>
              </div>

              {/* Section 6: Force Majeure */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-[#DC2626] text-white rounded-full flex items-center justify-center font-bold">6</div>
                  <h2 className="text-2xl font-bold text-[#DC2626]">{t('terms.forceMajeure.title')}</h2>
                </div>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  <p>
                    {t('terms.forceMajeure.content')}
                  </p>
                </div>
              </div>

              {/* Section 7: Modifications */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-[#DC2626] text-white rounded-full flex items-center justify-center font-bold">7</div>
                  <h2 className="text-2xl font-bold text-[#DC2626]">{t('terms.modifications.title')}</h2>
                </div>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  <p>
                    {t('terms.modifications.content')}
                  </p>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-gray-50 rounded-xl p-8 mt-12">
                <h3 className="text-xl font-bold text-[#DC2626] mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  {t('terms.contact.title')}
                </h3>
                <div className="grid md:grid-cols-2 gap-6 text-gray-700">
                  <div>
                    <p className="font-semibold mb-2">TRANSERVICA, C.A.</p>
                    <p className="text-sm mb-1">RIF: J-00207776-0</p>
                    <p className="text-sm">Carretera Nacional Maracay Mariara Km 9</p>
                    <p className="text-sm">Mariara, Edo. Carabobo, Venezuela</p>
                  </div>
                  <div>
                    <p className="text-sm mb-1">Teléfonos: +58 422-6361047 / +58 412-367-5636 / +58 414-277-6340</p>
                    <p className="text-sm mb-1">Email: direccioncomercialtvc@grupotranservica.com</p>
                    <p className="text-sm mb-1">Email Ejecutivo: direccionejecutivatvc@grupotranservica.com</p>
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