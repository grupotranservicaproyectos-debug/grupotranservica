import logoTranservica from "@assets/logo transervica sin fondo_1754163034585.png";

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen bg-black overflow-hidden">
      {/* Video de fondo Netflix Style */}
      <div className="absolute inset-0 z-0">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/_LQbWkWlg6s?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=_LQbWkWlg6s&modestbranding=1&start=0&iv_load_policy=3&cc_load_policy=0&disablekb=1&fs=0"
          title="Transervica Background Video"
          allow="autoplay; encrypted-media"
          style={{
            pointerEvents: 'none',
            border: 'none',
            minWidth: '100%',
            minHeight: '100%',
            width: '100vw',
            height: '100vh',
            objectFit: 'cover',
            transform: 'scale(1.1)'
          }}
        />
        
        {/* Gradient overlay Netflix style - More pronounced */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/50 z-10"></div>
      </div>

      

      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/584142776340?text=Hola%2C%20necesito%20información%20sobre%20transporte%20de%20cargas%20excepcionales" 
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition z-50"
        title="Contactar por WhatsApp"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 2.079.549 4.090 1.588 5.876L.029 24l6.203-1.539a11.952 11.952 0 005.785 1.539c6.621 0 11.988-5.367 11.988-11.988C23.973 5.367 18.638.001 12.017.001zm5.995 16.987c-.264.714-1.291 1.336-1.953 1.428-.663.094-1.526.141-2.438-.154-1.421-.458-3.025-1.609-4.222-3.003-1.197-1.394-1.967-3.045-2.033-3.192-.066-.147-.541-1.447-.541-2.748 0-1.301.341-1.947.463-2.215.122-.268.268-.335.357-.335h.268c.087 0 .201-.003.291.222.09.225.307.751.334.805.027.054.045.116.009.19-.036.074-.054.121-.108.184-.054.063-.113.14-.162.189-.063.049-.128.101-.055.199.073.098.325.537.697.869.481.427 1.055.705 1.206.784.151.079.239.067.327-.041.088-.108.378-.441.479-.592.101-.151.201-.126.338-.076.137.051.87.41 1.018.485.149.074.249.112.285.174.036.062.036.359-.228 1.073z"/>
        </svg>
      </a>
      
      {/* Netflix Style Content Container */}
      <div className="absolute inset-0 z-20 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-lg pt-16 pb-12">
            {/* Logo/Badge Style */}
            <div className="mb-3">
              <span className="inline-block bg-transervica-green text-black px-2 py-1 rounded text-xs font-bold">
                TV-E  2024  Transporte Especializado  40 años
              </span>
            </div>
            
            {/* Main Title Netflix Style - Much Smaller */}
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 lg:mb-4 leading-tight text-white">
              Transporte Cargas Excepcionales Venezuela - Especializados en Movilización de Cargas <span className="text-transervica-green">Pesada y Sobredimensionada</span>
            </h1>
            
            {/* Subtitle - Smaller */}
            <h2 className="text-sm sm:text-base lg:text-lg font-bold mb-3 lg:mb-4 text-transervica-light-green">
              CON 40 AÑOS TRANSPORTANDO EL FUTURO DE VENEZUELA
            </h2>
            
            {/* Description - Smaller */}
            <p className="text-xs sm:text-sm lg:text-base mb-4 lg:mb-6 text-white/90 leading-relaxed max-w-md">
              Especializados en Movilización de Cargas Pesadas y Sobredimensionadas hasta 1,100 toneladas con trailers Modulares Hidráulicos de última generación. Contamos con tecnología alemana de vanguardia y un equipo técnico altamente especializado.
            </p>

            {/* Stats Row - Smaller */}
            <div className="flex space-x-4 mb-4 lg:mb-6">
              <div className="text-left">
                <div className="text-lg sm:text-xl lg:text-2xl font-bold text-transervica-green">40</div>
                <div className="text-xs text-white/80">Años</div>
              </div>
              <div className="text-left">
                <div className="text-lg sm:text-xl lg:text-2xl font-bold text-transervica-green">1,100</div>
                <div className="text-xs text-white/80">Toneladas</div>
              </div>
              <div className="text-left">
                <div className="text-lg sm:text-xl lg:text-2xl font-bold text-transervica-green">100%</div>
                <div className="text-xs text-white/80">Confiable</div>
              </div>
            </div>
            
            {/* Netflix Style Buttons - Smaller */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              <button 
                onClick={scrollToContact}
                className="flex items-center justify-center bg-white text-black px-4 sm:px-6 py-2 rounded text-sm sm:text-base font-semibold hover:bg-gray-200 transition"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
                Solicitar Cotización
              </button>
              <button 
                onClick={() => scrollToSection('servicios')}
                className="flex items-center justify-center bg-gray-600/70 text-white px-4 sm:px-6 py-2 rounded text-sm sm:text-base font-semibold hover:bg-gray-600/90 transition backdrop-blur-sm"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Más Información
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}