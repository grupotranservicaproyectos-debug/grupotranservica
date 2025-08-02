import transportImage from "@assets/5_1754173669383.jpg";

export default function AboutSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="nosotros" className="relative py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300ff00' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center p-2 bg-transervica-green/10 rounded-full mb-6">
            <div className="bg-transervica-green p-3 rounded-full">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-transervica-green to-transervica-light-green bg-clip-text text-transparent">
              Nosotros
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Con <span className="text-transervica-green font-bold">40 años de experiencia</span>, somos líderes en transporte de cargas excepcionales en Venezuela, 
            especializados en cargas hasta <span className="text-transervica-light-green font-bold">1,100 toneladas</span>
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {/* Company Image */}
          <div className="lg:col-span-1">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-transervica-green via-transervica-light-green to-transervica-green rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
              <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
                <img 
                  src={transportImage} 
                  alt="TRANSERVICA Transporte de Cargas Excepcionales" 
                  className="w-full h-64 object-cover rounded-xl mb-6"
                />
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">40 Años de Experiencia</h3>
                  <p className="text-gray-300">Líderes en transporte de cargas excepcionales</p>
                </div>
              </div>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="lg:col-span-2 space-y-8">
            {/* Misión */}
            <div className="group relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-transervica-green to-transparent rounded-2xl opacity-25 group-hover:opacity-50 transition duration-500"></div>
              <div className="relative bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-transervica-green/50 transition duration-500">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-br from-transervica-green to-transervica-light-green p-4 rounded-2xl mr-6 shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-white">Misión</h3>
                </div>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Prestación del servicio de movilización e izamiento de cargas sobredimensionadas mediante el cumplimiento 
                  de criterios de seguridad, garantía y confiabilidad, anticipando y respondiendo eficazmente las necesidades 
                  de nuestros clientes, procurando el bienestar de nuestros trabajadores y maximizando la productividad.
                </p>
              </div>
            </div>

            {/* Visión */}
            <div className="group relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-transervica-light-green to-transparent rounded-2xl opacity-25 group-hover:opacity-50 transition duration-500"></div>
              <div className="relative bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-transervica-light-green/50 transition duration-500">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-br from-transervica-light-green to-transervica-green p-4 rounded-2xl mr-6 shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-white">Visión</h3>
                </div>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Ser una empresa reconocida nacional e internacionalmente en la prestación de servicios de movilización 
                  e izamiento de cargas sobredimensionadas, con personal calificado, mejoramiento continuo, aprovechamiento 
                  de oportunidades y satisfacción permanente de clientes.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Premium CTA Section */}
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-transervica-green via-transervica-light-green to-transervica-green rounded-3xl blur opacity-30"></div>
          <div className="relative bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-3xl p-12 border border-gray-700 text-center">
            <div className="mb-8">
              <div className="inline-flex items-center justify-center p-3 bg-transervica-green/20 rounded-full mb-6">
                <svg className="w-12 h-12 text-transervica-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                ¿Necesitas transporte de 
                <span className="bg-gradient-to-r from-transervica-green to-transervica-light-green bg-clip-text text-transparent">
                  {" "}cargas excepcionales?
                </span>
              </h3>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Contáctanos y descubre por qué somos la opción preferida en Venezuela. 
                <span className="text-transervica-light-green font-semibold">¡40 años respaldándonos!</span>
              </p>
            </div>
            
            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col lg:flex-row gap-6 justify-center items-center max-w-4xl mx-auto">
              <button 
                onClick={scrollToContact}
                className="group relative px-12 py-6 bg-gradient-to-r from-transervica-green to-transervica-light-green text-white font-bold text-xl rounded-2xl hover:shadow-2xl hover:shadow-transervica-green/50 transition-all duration-500 transform hover:scale-105 w-full lg:w-auto"
              >
                <span className="relative z-10 flex items-center justify-center">
                  <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  SOLICITAR COTIZACIÓN GRATIS
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transervica-light-green to-transervica-green rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </button>
              
              <a 
                href="tel:+584142776340"
                className="group relative px-12 py-6 bg-gray-800/50 backdrop-blur-sm border-2 border-transervica-green text-transervica-green font-bold text-xl rounded-2xl hover:bg-transervica-green hover:text-white transition-all duration-500 transform hover:scale-105 w-full lg:w-auto"
              >
                <span className="flex items-center justify-center">
                  <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  LLAMAR: +58 414 277 6340
                </span>
              </a>
              
              <a 
                href="https://wa.me/584142776340?text=Hola%2C%20necesito%20información%20sobre%20transporte%20de%20cargas%20excepcionales"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-12 py-6 bg-green-600 text-white font-bold text-xl rounded-2xl hover:bg-green-700 hover:shadow-2xl hover:shadow-green-500/50 transition-all duration-500 transform hover:scale-105 w-full lg:w-auto"
              >
                <span className="flex items-center justify-center">
                  <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 2.079.549 4.090 1.588 5.876L.029 24l6.203-1.539a11.952 11.952 0 005.785 1.539c6.621 0 11.988-5.367 11.988-11.988C23.973 5.367 18.638.001 12.017.001zm5.995 16.987c-.264.714-1.291 1.336-1.953 1.428-.663.094-1.526.141-2.438-.154-1.421-.458-3.025-1.609-4.222-3.003-1.197-1.394-1.967-3.045-2.033-3.192-.066-.147-.541-1.447-.541-2.748 0-1.301.341-1.947.463-2.215.122-.268.268-.335.357-.335h.268c.087 0 .201-.003.291.222.09.225.307.751.334.805.027.054.045.116.009.19-.036.074-.054.121-.108.184-.054.063-.113.14-.162.189-.063.049-.128.101-.055.199.073.098.325.537.697.869.481.427 1.055.705 1.206.784.151.079.239.067.327-.041.088-.108.378-.441.479-.592.101-.151.201-.126.338-.076.137.051.87.41 1.018.485.149.074.249.112.285.174.036.062.036.359-.228 1.073z"/>
                  </svg>
                  WHATSAPP DIRECTO
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}