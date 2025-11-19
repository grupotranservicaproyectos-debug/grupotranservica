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
            <div className="inline-flex items-center justify-center w-20 h-20 bg-[#DC2626] rounded-2xl mb-6">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-6 text-[#DC2626]">
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
                  <div className="w-8 h-8 bg-[#DC2626] text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <h2 className="text-2xl font-bold text-[#DC2626]">{t('privacy.introduction.title')}</h2>
                </div>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  <p className="mb-4">
                    {t('privacy.introduction.content1')}
                  </p>
                  <p>
                    {t('privacy.introduction.content2')}
                  </p>
                </div>
              </div>

              {/* Section 2: Data Collection */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-[#DC2626] text-white rounded-full flex items-center justify-center font-bold">2</div>
                  <h2 className="text-2xl font-bold text-[#DC2626]">{t('privacy.collection.title')}</h2>
                </div>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  <p className="mb-4">{t('privacy.collection.content1')}</p>
                  
                  <h4 className="text-lg font-semibold text-[#DC2626] mt-6 mb-3 flex items-center gap-2">
                    <Database className="w-5 h-5" />
                    {t('privacy.collection.direct.title')}
                  </h4>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>{t('privacy.collection.direct.item1')}</li>
                    <li>{t('privacy.collection.direct.item2')}</li>
                    <li>{t('privacy.collection.direct.item3')}</li>
                    <li>{t('privacy.collection.direct.item4')}</li>
                  </ul>

                  <h4 className="text-lg font-semibold text-[#DC2626] mt-6 mb-3 flex items-center gap-2">
                    <Eye className="w-5 h-5" />
                    {t('privacy.collection.automatic.title')}
                  </h4>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>{t('privacy.collection.automatic.item1')}</li>
                    <li>{t('privacy.collection.automatic.item2')}</li>
                    <li>{t('privacy.collection.automatic.item3')}</li>
                    <li>{t('privacy.collection.automatic.item4')}</li>
                  </ul>
                </div>
              </div>

              {/* Section 3: Data Usage */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-[#DC2626] text-white rounded-full flex items-center justify-center font-bold">3</div>
                  <h2 className="text-2xl font-bold text-[#DC2626]">{t('privacy.usage.title')}</h2>
                </div>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  <p className="mb-4">{t('privacy.usage.content1')}</p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>{t('privacy.usage.item1')}</li>
                    <li>{t('privacy.usage.item2')}</li>
                    <li>{t('privacy.usage.item3')}</li>
                    <li>{t('privacy.usage.item4')}</li>
                    <li>{t('privacy.usage.item5')}</li>
                    <li>{t('privacy.usage.item6')}</li>
                    <li>{t('privacy.usage.item7')}</li>
                  </ul>
                  <p>
                    {t('privacy.usage.content2')}
                  </p>
                </div>
              </div>

              {/* Section 4: Data Protection */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-[#DC2626] text-white rounded-full flex items-center justify-center font-bold">4</div>
                  <h2 className="text-2xl font-bold text-[#DC2626]">{t('privacy.protection.title')}</h2>
                </div>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  <p className="mb-4">
                    {t('privacy.protection.content1')}
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>{t('privacy.protection.item1')}</li>
                    <li>{t('privacy.protection.item2')}</li>
                    <li>{t('privacy.protection.item3')}</li>
                  </ul>
                  
                  <h4 className="text-lg font-semibold text-[#DC2626] mt-6 mb-3 flex items-center gap-2">
                    <Lock className="w-5 h-5" />
                    {t('privacy.protection.security.title')}
                  </h4>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>{t('privacy.protection.security.item1')}</li>
                    <li>{t('privacy.protection.security.item2')}</li>
                    <li>{t('privacy.protection.security.item3')}</li>
                    <li>{t('privacy.protection.security.item4')}</li>
                    <li>{t('privacy.protection.security.item5')}</li>
                  </ul>
                </div>
              </div>

              {/* Section 5: Data Sharing */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-[#DC2626] text-white rounded-full flex items-center justify-center font-bold">5</div>
                  <h2 className="text-2xl font-bold text-[#DC2626]">{t('privacy.sharing.title')}</h2>
                </div>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  <p className="mb-4">
                    {t('privacy.sharing.content1')}
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>{t('privacy.sharing.item1')}</li>
                    <li>{t('privacy.sharing.item2')}</li>
                    <li>{t('privacy.sharing.item3')}</li>
                    <li>{t('privacy.sharing.item4')}</li>
                    <li>{t('privacy.sharing.item5')}</li>
                  </ul>
                  <p>
                    {t('privacy.sharing.content2')}
                  </p>
                </div>
              </div>

              {/* Section 6: User Rights */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-[#DC2626] text-white rounded-full flex items-center justify-center font-bold">6</div>
                  <h2 className="text-2xl font-bold text-[#DC2626]">{t('privacy.rights.title')}</h2>
                </div>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  <p className="mb-4">{t('privacy.rights.content1')}</p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>{t('privacy.rights.item1')}</li>
                    <li>{t('privacy.rights.item2')}</li>
                    <li>{t('privacy.rights.item3')}</li>
                    <li>{t('privacy.rights.item4')}</li>
                    <li>{t('privacy.rights.item5')}</li>
                    <li>{t('privacy.rights.item6')}</li>
                  </ul>
                  <p>
                    {t('privacy.rights.content2')}
                  </p>
                </div>
              </div>

              {/* Section 7: Data Retention */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-[#DC2626] text-white rounded-full flex items-center justify-center font-bold">7</div>
                  <h2 className="text-2xl font-bold text-[#DC2626]">{t('privacy.retention.title')}</h2>
                </div>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  <p className="mb-4">
                    {t('privacy.retention.content1')}
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>{t('privacy.retention.item1')}</li>
                    <li>{t('privacy.retention.item2')}</li>
                    <li>{t('privacy.retention.item3')}</li>
                    <li>{t('privacy.retention.item4')}</li>
                  </ul>
                </div>
              </div>

              {/* Section 8: Updates */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-[#DC2626] text-white rounded-full flex items-center justify-center font-bold">8</div>
                  <h2 className="text-2xl font-bold text-[#DC2626]">{t('privacy.updates.title')}</h2>
                </div>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  <p>
                    {t('privacy.updates.content')}
                  </p>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-gray-50 rounded-xl p-8 mt-12">
                <h3 className="text-xl font-bold text-[#DC2626] mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  {t('privacy.contact.title')}
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
                    <p className="text-sm mb-1">Teléfono: +58 422-6361047 / +58 414-277-6340</p>
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