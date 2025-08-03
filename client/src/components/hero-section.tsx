import { useLanguage } from '../contexts/LanguageContext';
import Header from './header';
import logoTranservica from "@assets/logo transervica sin fondo_1754163034585.png";

export default function HeroSection() {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen bg-black overflow-hidden">
      {/* Video de fondo Netflix Style */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <iframe
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          src="https://www.youtube.com/embed/_LQbWkWlg6s?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=_LQbWkWlg6s&modestbranding=1&start=7&iv_load_policy=3&cc_load_policy=0&disablekb=1&fs=0&vq=hd1080&quality=hd1080&hd=1&fmt=22"
          title="Transervica Background Video - Transporte de Cargas Excepcionales"
          allow="autoplay; encrypted-media"
          loading="eager"
          style={{
            pointerEvents: 'none',
            border: 'none',
            width: 'max(100vw, 177.77vh)',
            height: 'max(100vh, 56.25vw)',
            minWidth: '100vw',
            minHeight: '100vh'
          }}
        />
        
        {/* Minimal overlay only where needed */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10"></div>
      </div>
      
      {/* Header Navigation */}
      <Header isHomePage={true} onSectionScroll={scrollToSection} />

      {/* Hero Content */}
      <div className="relative z-20 flex items-center justify-center min-h-screen">
        <div className="text-center text-white px-4 max-w-6xl mx-auto">
          {/* Logo prominente */}
          <div className="mb-8">
            <img 
              src={logoTranservica}
              alt="TRANSERVICA - Líderes en Transporte Especializado"
              className="h-20 lg:h-24 xl:h-28 w-auto mx-auto filter brightness-0 invert drop-shadow-2xl"
            />
          </div>

          {/* Título principal */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight tracking-tight">
            <span className="block mb-2">{t('hero.title.line1')}</span>
            <span className="block text-transervica-orange">{t('hero.title.line2')}</span>
          </h1>

          {/* Subtítulo */}
          <p className="text-xl md:text-2xl lg:text-3xl mb-8 max-w-4xl mx-auto leading-relaxed font-light">
            {t('hero.subtitle')}
          </p>

          {/* Decorative line */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-16 h-1 rounded-full bg-white/50"></div>
            <div className="w-3 h-3 rounded-full bg-transervica-orange"></div>
            <div className="w-16 h-1 rounded-full bg-white/50"></div>
          </div>

          {/* Mensaje de experiencia */}
          <p className="text-lg font-medium mb-12 text-white/90">
            {t('hero.experience')}
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('servicios')}
              className="bg-transervica-green hover:bg-transervica-light-green text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-2xl hover:shadow-transervica-green/50 hover-lift"
            >
              {t('hero.cta.services')}
            </button>
            <button 
              onClick={() => scrollToSection('contacto')}
              className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover-lift"
            >
              {t('hero.cta.quote')}
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}