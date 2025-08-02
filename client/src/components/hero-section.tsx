import backgroundImage from "@assets/22_1754164388997.png";

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="inicio" 
      className="pt-20 text-white relative min-h-screen"
      style={{
        backgroundImage: `linear-gradient(rgba(94, 157, 40, 0.9), rgba(64, 64, 64, 0.8)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Botón WhatsApp tipo nube flotante */}
      <a 
        href="https://wa.me/584142776340?text=Hola%2C%20necesito%20información%20sobre%20transporte%20de%20cargas%20excepcionales" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-40 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110"
        style={{
          boxShadow: '0 8px 32px rgba(34, 197, 94, 0.3)',
        }}
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 2.079.549 4.090 1.588 5.876L.029 24l6.203-1.539a11.952 11.952 0 005.785 1.539c6.621 0 11.988-5.367 11.988-11.988C23.973 5.367 18.638.001 12.017.001zm5.995 16.987c-.264.714-1.291 1.336-1.953 1.428-.663.094-1.526.141-2.438-.154-1.421-.458-3.025-1.609-4.222-3.003-1.197-1.394-1.967-3.045-2.033-3.192-.066-.147-.541-1.447-.541-2.748 0-1.301.341-1.947.463-2.215.122-.268.268-.335.357-.335h.268c.087 0 .201-.003.291.222.09.225.307.751.334.805.027.054.045.116.009.19-.036.074-.054.121-.108.184-.054.063-.113.14-.162.189-.063.049-.128.101-.055.199.073.098.325.537.697.869.481.427 1.055.705 1.206.784.151.079.239.067.327-.041.088-.108.378-.441.479-.592.101-.151.201-.126.338-.076.137.051.87.41 1.018.485.149.074.249.112.285.174.036.062.036.359-.228 1.073z"/>
        </svg>
      </a>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-2 relative z-10">
            <div className="bg-transervica-dark-gray/50 backdrop-blur-md rounded-2xl p-6 lg:p-8 border border-transervica-green/40 shadow-2xl">
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 leading-tight text-white drop-shadow-lg text-left">
                Transporte Cargas Excepcionales Venezuela - Especializados en Movilización de Cargas <span className="text-black bg-transervica-green px-2 py-1 rounded font-bold">Pesada y Sobredimensionada</span>
              </h1>
              <h2 className="text-xl lg:text-2xl xl:text-3xl font-bold mb-6 text-transervica-light-green drop-shadow-lg text-left">
                CON 40 AÑOS TRANSPORTANDO EL FUTURO DE VENEZUELA
              </h2>
              <p className="text-base lg:text-lg mb-8 text-white drop-shadow-md leading-relaxed text-justify">
                Especializados en Movilización de Cargas Pesadas y Sobredimensionadas hasta 1,100 toneladas con trailers Modulares Hidráulicos de última generación. Contamos con tecnología alemana de vanguardia y un equipo técnico altamente especializado para garantizar el éxito de cada proyecto.
              </p>
              
              {/* Estadísticas Visuales */}
              <div className="grid grid-cols-3 gap-3 lg:gap-4 mb-8">
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 lg:p-4 text-center border border-transervica-green/40 hover:bg-white/30 transition-all duration-300 transform hover:scale-105">
                  <div className="text-2xl lg:text-3xl xl:text-4xl font-bold text-transervica-green">40</div>
                  <div className="text-xs lg:text-sm text-white font-medium">Años de Experiencia</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 lg:p-4 text-center border border-transervica-green/40 hover:bg-white/30 transition-all duration-300 transform hover:scale-105">
                  <div className="text-2xl lg:text-3xl xl:text-4xl font-bold text-transervica-green">1,100</div>
                  <div className="text-xs lg:text-sm text-white font-medium">Toneladas Máximas</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 lg:p-4 text-center border border-transervica-green/40 hover:bg-white/30 transition-all duration-300 transform hover:scale-105">
                  <div className="text-2xl lg:text-3xl xl:text-4xl font-bold text-transervica-green">100%</div>
                  <div className="text-xs lg:text-sm text-white font-medium">Confiable</div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
                <button 
                  onClick={scrollToContact}
                  className="bg-gradient-to-r from-white to-gray-100 text-transervica-green px-6 lg:px-8 py-3 lg:py-4 rounded-xl text-base lg:text-lg font-bold hover:from-gray-100 hover:to-white transition-all duration-300 text-center shadow-xl hover:shadow-2xl transform hover:scale-105 border-2 border-transparent hover:border-transervica-green/20"
                >
                  Solicitar Cotización
                </button>
                <button 
                  onClick={() => {
                    const element = document.getElementById('equipos');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="border-2 border-white/80 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-xl text-base lg:text-lg font-bold hover:bg-white hover:text-transervica-green transition-all duration-300 text-center backdrop-blur-sm hover:shadow-xl transform hover:scale-105"
                >
                  Ver Equipos
                </button>
              </div>
            </div>
          </div>

          
          {/* Video Corporativo */}
          <div className="lg:col-span-3 relative">
            <div className="aspect-video bg-black/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-transervica-green/40 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-[1.02]">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/_LQbWkWlg6s?rel=0&showinfo=0&modestbranding=1&fs=1&controls=1"
                title="TRANSERVICA - 40 años transportando el futuro de Venezuela"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              />
            </div>
            <div className="text-center mt-4 lg:mt-6">
              <h3 className="text-base lg:text-lg xl:text-xl font-semibold text-white drop-shadow-lg">
                TRANSERVICA - 40 años transportando el futuro de Venezuela
              </h3>
              <p className="text-sm lg:text-base text-white/80 mt-2">
                Conoce nuestra trayectoria y capacidades técnicas
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
