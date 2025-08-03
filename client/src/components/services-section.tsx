import { FileText, Shield, Settings, MapPin, Globe, Truck } from "lucide-react";
import { useLanguage } from '../contexts/LanguageContext';

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
    <section id="servicios" className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6" style={{ color: '#155d29' }}>
            {t('services.title')}
          </h2>
          <p className="text-xl max-w-3xl mx-auto mb-8" style={{ color: 'hsl(0, 0%, 15%)' }}>
            {t('services.subtitle')}
          </p>
          
          {/* Corporate Video */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black">
              <iframe
                src="https://www.youtube.com/embed/PF8SuO_3ZLU?autoplay=1&mute=1&start=23&end=147&controls=1&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&vq=hd1080&hd=1&quality=hd1080"
                title="TRANSERVICA - Servicios Logísticos"
                className="absolute inset-0 w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-white border-l-4 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:scale-105 overflow-hidden flex flex-col h-full"
                style={{ borderLeftColor: '#155d29' }}
              >
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-orange-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center mb-6">
                    <div className="p-4 rounded-2xl transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-3" style={{ backgroundColor: 'rgba(21, 93, 41, 0.1)' }}>
                      <IconComponent className="w-8 h-8 group-hover:text-white transition-colors duration-500" style={{ color: '#155d29' }} />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 transition-colors duration-300" style={{ color: '#155d29' }}>
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-slate-600 group-hover:text-slate-700">
                        <div className="w-2 h-2 rounded-full mr-3 transform group-hover:scale-125 transition-transform duration-300" style={{ backgroundColor: '#155d29' }}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  {/* Call to Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-2 mt-auto pt-4">
                    <button 
                      onClick={() => window.open('https://wa.me/584142776340?text=Hola%2C%20necesito%20información%20sobre%20' + encodeURIComponent(service.title), '_blank')}
                      className="flex-1 text-white font-semibold py-2 px-4 rounded-lg text-sm transition-all duration-300 transform hover:scale-105 hover:shadow-md"
                      style={{ backgroundColor: '#155d29' }}
                      onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = '#0f4a21'}
                      onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = '#155d29'}
                    >
                      {t('services.consult')}
                    </button>
                    <button 
                      onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
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
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg bg-white"
                style={{ color: '#155d29' }}
                onMouseEnter={(e) => { (e.target as HTMLElement).style.backgroundColor = '#f0f9f0'; (e.target as HTMLElement).style.color = '#0f4a21'; }}
                onMouseLeave={(e) => { (e.target as HTMLElement).style.backgroundColor = 'white'; (e.target as HTMLElement).style.color = '#155d29'; }}
              >
                {t('services.cta.quote')}
              </button>
              <button 
                onClick={() => window.open('https://wa.me/584142776340?text=Hola%2C%20necesito%20hablar%20con%20un%20especialista%20sobre%20transporte%20de%20cargas%20excepcionales', '_blank')}
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