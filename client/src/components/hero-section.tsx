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
        backgroundImage: `linear-gradient(rgba(34, 139, 34, 0.9), rgba(255, 140, 0, 0.8)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Botón WhatsApp tipo nube flotante */}
      <a 
        href="https://wa.me/584241234567" 
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
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative z-10">
            <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight text-white drop-shadow-lg">
                Nada es demasiado <span className="text-white bg-transervica-light-green px-2 py-1 rounded">pesado</span> para Nosotros
              </h1>
              <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-orange-300 drop-shadow-lg">
                CON 40 AÑOS TRANSPORTANDO EL FUTURO DE VENEZUELA
              </h2>
              <p className="text-lg mb-8 text-white drop-shadow-md leading-relaxed">
                Especializados en Movilización de Cargas Pesadas y Sobredimensionadas hasta 1,100 toneladas con trailers Modulares Hidráulicos de última generación
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={scrollToContact}
                  className="bg-white text-transervica-green px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition text-center shadow-lg"
                >
                  Solicitar Cotización
                </button>
                <button 
                  onClick={() => {
                    const element = document.getElementById('proyectos');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-transervica-green transition text-center"
                >
                  Ver Proyectos
                </button>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative bg-black rounded-lg overflow-hidden shadow-2xl">
              <iframe 
                src="https://www.youtube.com/embed/_LQbWkWlg6s" 
                className="w-full h-64 lg:h-80"
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                title="Video corporativo TRANSERVICA"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
