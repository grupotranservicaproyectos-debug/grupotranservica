import transportImage from "@assets/5_1754173669383.webp";
import { useLanguage } from '../contexts/LanguageContext';
import YouTubeLazy from './youtube-lazy';

export default function AboutSection() {
  const { t } = useLanguage();
  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="nosotros" className="relative py-20 bg-gradient-to-br from-white via-gray-50 to-gray-100 overflow-hidden">
      {/* Background Decorative Elements - TRANSERVICA Corporate Colors */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-transervica-green/15 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-transervica-green/20 to-transervica-light-green/10 rounded-full blur-3xl"></div>
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-transervica-light-green/25 to-transervica-green/15 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-transervica-green/15 to-transervica-light-green/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transervica-green/5 via-transparent to-transervica-light-green/5"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section - TRANSERVICA Style */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            <span style={{ color: '#155d29' }}>{t('about.title')}</span>
          </h2>
          <p className="text-2xl lg:text-3xl font-bold mb-6" style={{ color: '#155d29' }}>
            {t('about.subtitle')}
          </p>
          <p className="text-lg max-w-3xl mx-auto" style={{ color: 'hsl(0, 0%, 15%)' }}>
            {t('about.description')}
          </p>
        </div>

        {/* Main Content with Image and Benefits */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20 items-center">
          {/* Left Side - Image */}
          <div className="relative">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-transervica-green via-transervica-light-green to-transervica-green rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-black">
                <div className="relative aspect-video">
                  <YouTubeLazy
                    videoId="0-vWA7PJp3s"
                    title="TRANSERVICA - 40 Años de Experiencia en Transporte de Cargas Excepcionales"
                    className="absolute inset-0 w-full h-full"
                    params="autoplay=1&mute=1&start=32&controls=1&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3"
                    thumbnailQuality="hqdefault"
                    autoLoad={true}
                  />
                </div>
                
              </div>
            </div>
          </div>

          {/* Right Side - Benefits */}
          <div className="space-y-8">
            {/* Benefit 1 */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: '#155d29' }}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2" style={{ color: '#155d29' }}>{t('about.benefit1.title')}</h3>
                <p className="text-gray-600">{t('about.benefit1.desc')}</p>
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: '#155d29' }}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2" style={{ color: '#155d29' }}>{t('about.benefit2.title')}</h3>
                <p className="text-gray-600">{t('about.benefit2.desc')}</p>
              </div>
            </div>

            {/* Benefit 3 */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: '#155d29' }}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2" style={{ color: '#155d29' }}>{t('about.benefit3.title')}</h3>
                <p className="text-gray-600">{t('about.benefit3.desc')}</p>
              </div>
            </div>

            {/* Benefit 4 */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: '#155d29' }}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2" style={{ color: '#155d29' }}>{t('about.benefit4.title')}</h3>
                <p className="text-gray-600">{t('about.benefit4.desc')}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {/* Misión */}
          <div className="rounded-3xl p-8 border border-transervica-green/20 hover:border-transervica-green/40 transition duration-500 shadow-lg" style={{ backgroundColor: '#155d29' }}>
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mr-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#155d29' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-white">{t('about.mission.title')}</h3>
            </div>
            <p className="text-white leading-relaxed text-lg">
              {t('about.mission.text')}
            </p>
          </div>

          {/* Visión */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-transervica-light-green/20 hover:border-transervica-light-green/40 transition duration-500 shadow-lg">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-transervica-light-green to-transervica-green rounded-2xl flex items-center justify-center mr-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-transervica-green">{t('about.vision.title')}</h3>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">
              {t('about.vision.text')}
            </p>
          </div>
        </div>

        {/* CTA Section - TRANSERVICA Style */}
        <div className="text-center">
          <div className="rounded-3xl p-12 border border-transervica-green/30 shadow-xl" style={{ backgroundColor: '#155d29' }}>
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              {t('about.cta.title')}
            </h3>
            <p className="text-lg text-white mb-8 max-w-3xl mx-auto">
              {t('about.cta.subtitle')}
            </p>
            
            <div className="flex flex-col lg:flex-row gap-6 justify-center items-center max-w-2xl mx-auto">
              <button 
                onClick={scrollToContact}
                className="group relative px-10 py-4 bg-white text-black font-bold text-lg rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 w-full lg:w-auto"
                style={{ color: '#155d29' }}
                onMouseEnter={(e) => { (e.target as HTMLElement).style.backgroundColor = '#f0f9f0'; (e.target as HTMLElement).style.color = '#0f4a21'; }}
                onMouseLeave={(e) => { (e.target as HTMLElement).style.backgroundColor = 'white'; (e.target as HTMLElement).style.color = '#155d29'; }}
              >
                {t('about.cta.quote')}
              </button>
              
              <a 
                href="tel:+584226361047"
                className="px-10 py-4 bg-transparent border-2 border-white text-white font-bold text-lg rounded-xl transition-all duration-300 transform hover:scale-105 w-full lg:w-auto"
                onMouseEnter={(e) => { (e.target as HTMLElement).style.backgroundColor = 'white'; (e.target as HTMLElement).style.color = '#155d29'; }}
                onMouseLeave={(e) => { (e.target as HTMLElement).style.backgroundColor = 'transparent'; (e.target as HTMLElement).style.color = 'white'; }}
              >
                {t('about.cta.call')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}