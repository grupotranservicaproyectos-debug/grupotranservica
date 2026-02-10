import { FileText, Shield, Settings, MapPin, Globe, Truck } from "lucide-react";
import { useLanguage } from '../contexts/LanguageContext';
import YouTubeLazy from './youtube-lazy';

export default function ServicesSection() {
  const { t } = useLanguage();

  const services = [
    {
      icon: Truck,
      title: t('services.transport.title'),
      description: t('services.transport.description'),
      features: [
        t('services.transport.feature1'),
        t('services.transport.feature2'),
        t('services.transport.feature3'),
        t('services.transport.feature4')
      ]
    },
    {
      icon: Settings,
      title: t('services.cranes.title'),
      description: t('services.cranes.description'),
      features: [
        t('services.cranes.feature1'),
        t('services.cranes.feature2'),
        t('services.cranes.feature3'),
        t('services.cranes.feature4')
      ]
    },
    {
      icon: Globe,
      title: t('services.logistics.title'),
      description: t('services.logistics.description'),
      features: [
        t('services.logistics.feature1'),
        t('services.logistics.feature2'),
        t('services.logistics.feature3'),
        t('services.logistics.feature4')
      ]
    },
    {
      icon: FileText,
      title: t('services.permits.title'),
      description: t('services.permits.description'),
      features: [
        t('services.permits.feature1'),
        t('services.permits.feature2'),
        t('services.permits.feature3'),
        t('services.permits.feature4')
      ]
    },
    {
      icon: Shield,
      title: t('services.feasibility.title'), 
      description: t('services.feasibility.description'),
      features: [
        t('services.feasibility.feature1'),
        t('services.feasibility.feature2'),
        t('services.feasibility.feature3'),
        t('services.feasibility.feature4')
      ]
    },
    {
      icon: MapPin,
      title: t('services.multimodal.title'),
      description: t('services.multimodal.description'),
      features: [
        t('services.multimodal.feature1'),
        t('services.multimodal.feature2'),
        t('services.multimodal.feature3'), 
        t('services.multimodal.feature4')
      ]
    }
  ];

  return (
    <section id="servicios" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="container mx-auto mobile-padding">
        <div className="text-center mb-12 sm:mb-14 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 text-wrap-balance" style={{ color: '#155d29' }}>
            {t('services.title')}
          </h2>
          <p className="mobile-text lg:text-xl max-w-3xl mx-auto mb-6 sm:mb-8 text-wrap-pretty" style={{ color: 'hsl(0, 0%, 15%)' }}>
            {t('services.subtitle')}
          </p>
          
          {/* Corporate Video - Grúas Móviles Telescópicas y Sobre Oruga */}
          <div className="max-w-4xl mx-auto mb-8 sm:mb-10 lg:mb-12">
            <div className="relative aspect-video rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl bg-black">
              <YouTubeLazy
                videoId="17qCAJDlZuM"
                title="TRANSERVICA - Grúas Móviles Telescópicas y Sobre Oruga hasta 800 Toneladas"
                className="w-full h-full"
                params="start=78&autoplay=1&mute=1&loop=1&playlist=17qCAJDlZuM&controls=1&modestbranding=1&rel=0"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-white border-l-4 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 sm:hover:-translate-y-3 hover:scale-105 overflow-hidden flex flex-col h-full animate-fade-in hover-lift"
                style={{ borderLeftColor: '#155d29', animationDelay: `${index * 100}ms` }}
              >
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-orange-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center mb-4 sm:mb-6">
                    <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-3" style={{ backgroundColor: 'rgba(21, 93, 41, 0.1)' }}>
                      <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 group-hover:text-white transition-colors duration-500" style={{ color: '#155d29' }} />
                    </div>
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 transition-colors duration-300 text-wrap-balance" style={{ color: '#155d29' }}>
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-600 mb-4 sm:mb-6 leading-relaxed mobile-text text-wrap-pretty">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-xs sm:text-sm text-slate-600 group-hover:text-slate-700">
                        <div className="w-2 h-2 rounded-full mr-3 mt-1 flex-shrink-0 transform group-hover:scale-125 transition-transform duration-300" style={{ backgroundColor: '#155d29' }}></div>
                        <span className="text-wrap-pretty">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Call to Action Buttons - Mobile optimized */}
                  <div className="flex flex-col sm:flex-row gap-2 mt-auto pt-3 sm:pt-4">
                    <button 
                      onClick={() => window.open('https://wa.me/message/WAKKACM55ESHC1', '_blank')}
                      className="w-full mobile-button text-white font-semibold rounded-lg text-sm transition-all duration-300 hover-lift shadow-md"
                      style={{ backgroundColor: '#155d29' }}
                      onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = '#0f4a21'}
                      onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = '#155d29'}
                    >
                      {t('services.consult')}
                    </button>
                    <button 
                      onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                      className="flex-1 border border-gray-300 text-gray-700 hover:text-white font-semibold py-2 px-4 rounded-lg text-sm transition-all duration-300 transform hover:scale-105"
                      onMouseEnter={(e) => { (e.target as HTMLElement).style.backgroundColor = '#155d29'; (e.target as HTMLElement).style.borderColor = '#155d29'; (e.target as HTMLElement).style.color = 'white'; }}
                      onMouseLeave={(e) => { (e.target as HTMLElement).style.backgroundColor = 'transparent'; (e.target as HTMLElement).style.borderColor = '#d1d5db'; (e.target as HTMLElement).style.color = '#374151'; }}
                    >
                      {t('services.quote')}
                    </button>
                  </div>
                </div>

                {/* Hover overlay border */}
                <div className="absolute inset-0 border-2 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ borderColor: '#155d29' }}></div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <div className="rounded-2xl p-8 md:p-12 shadow-xl border border-gray-100" style={{ backgroundColor: '#155d29' }}>
            <h3 className="text-2xl font-bold mb-4 text-white">{t('services.cta.title')}</h3>
            <p className="text-lg text-white mb-8 max-w-2xl mx-auto">{t('services.cta.subtitle')}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                className="font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg bg-white"
                style={{ color: '#155d29' }}
                onMouseEnter={(e) => { (e.target as HTMLElement).style.backgroundColor = '#f0f9f0'; (e.target as HTMLElement).style.color = '#0f4a21'; }}
                onMouseLeave={(e) => { (e.target as HTMLElement).style.backgroundColor = 'white'; (e.target as HTMLElement).style.color = '#155d29'; }}
              >
                {t('services.cta.quote')}
              </button>
              <button 
                onClick={() => window.open('https://wa.me/message/WAKKACM55ESHC1', '_blank')}
                className="border-2 font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 bg-transparent text-white"
                style={{ borderColor: 'white' }}
                onMouseEnter={(e) => { (e.target as HTMLElement).style.backgroundColor = '#a8e6a8'; (e.target as HTMLElement).style.color = '#155d29'; (e.target as HTMLElement).style.borderColor = '#a8e6a8'; }}
                onMouseLeave={(e) => { (e.target as HTMLElement).style.backgroundColor = 'transparent'; (e.target as HTMLElement).style.color = 'white'; (e.target as HTMLElement).style.borderColor = 'white'; }}
              >
                {t('services.cta.call')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}