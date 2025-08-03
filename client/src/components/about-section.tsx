import transportImage from "@assets/5_1754173669383.jpg";

export default function AboutSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="nosotros" className="relative py-20 overflow-hidden" style={{ backgroundColor: '#155d29' }}>
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
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            <span className="text-yellow-300">TRANSERVICA, C.A.</span> SON MÁS DE
            <br />
            <span className="text-4xl lg:text-5xl font-bold text-yellow-300">
              40 AÑOS TRANSPORTANDO EL FUTURO DE VENEZUELA
            </span>
          </h2>
          <p className="text-2xl lg:text-3xl font-bold mb-6 italic text-yellow-300">
            "Nada es Demasiado Pesado para Nosotros"
          </p>
          <p className="text-lg max-w-3xl mx-auto text-white">
            Especializados en transporte de cargas excepcionales hasta 1,100 toneladas con tecnología alemana de vanguardia
          </p>
        </div>

        {/* Main Content with Image and Benefits */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20 items-center">
          {/* Left Side - Image */}
          <div className="relative">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-transervica-green via-transervica-light-green to-transervica-green rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-transervica-green/40 bg-white">
                <img 
                  src={transportImage} 
                  alt="TRANSERVICA Transporte de Cargas Excepcionales - 40 años de experiencia" 
                  className="w-full h-[500px] object-contain p-4"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-transervica-green/20 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 border border-transervica-green/60 shadow-lg">
                    <p className="font-bold text-lg" style={{ color: '#155d29' }}>40 Años de Experiencia</p>
                    <p className="text-sm" style={{ color: 'hsl(0, 0%, 15%)' }}>Líderes en Venezuela</p>
                  </div>
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
                <h3 className="text-xl font-bold mb-2 text-yellow-300">Capacidad excepcional hasta 1,100 toneladas</h3>
                <p className="text-white">Equipos modulares hidráulicos alemanes de última generación.</p>
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
                <h3 className="text-xl font-bold mb-2 text-yellow-300">Cobertura nacional con experiencia comprobada</h3>
                <p className="text-white">40 años transportando el futuro de Venezuela con éxito.</p>
              </div>
            </div>

            {/* Benefit 3 */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-yellow-300">
                  <svg className="w-6 h-6 text-green-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-yellow-300">Plataforma integral con soporte 24/7</h3>
                <p className="text-white">Seguimiento completo y especialistas disponibles siempre.</p>
              </div>
            </div>

            {/* Benefit 4 */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-yellow-300">
                  <svg className="w-6 h-6 text-green-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-yellow-300">Soporte personalizado con humanos reales</h3>
                <p className="text-white">Especialistas en logística dedicados disponibles en cualquier momento.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {/* Misión */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-transervica-green/20 hover:border-transervica-green/40 transition duration-500 shadow-lg">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-transervica-green to-transervica-light-green rounded-2xl flex items-center justify-center mr-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-transervica-green">Misión</h3>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">
              Prestación del servicio de movilización e izamiento de cargas sobredimensionadas mediante el cumplimiento 
              de criterios de seguridad, garantía y confiabilidad, anticipando y respondiendo eficazmente las necesidades 
              de nuestros clientes, procurando el bienestar de nuestros trabajadores y maximizando la productividad.
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
              <h3 className="text-3xl font-bold text-transervica-green">Visión</h3>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">
              Ser una empresa reconocida nacional e internacionalmente en la prestación de servicios de movilización 
              e izamiento de cargas sobredimensionadas, con personal calificado, mejoramiento continuo, aprovechamiento 
              de oportunidades y satisfacción permanente de clientes.
            </p>
          </div>
        </div>

        {/* CTA Section - TRANSERVICA Style */}
        <div className="text-center">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-12 border border-transervica-green/30 shadow-xl">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
              Múltiples <span className="text-transervica-green">Cargas Excepcionales</span>. Una Plataforma. Cero Complicaciones.
            </h3>
            <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
              Compare cotizaciones de transporte pesado y sobredimensionado, reserve al instante y rastree en tiempo real — todo con 
              <span className="text-transervica-green font-bold"> TRANSERVICA</span>.
            </p>
            
            <div className="flex flex-col lg:flex-row gap-6 justify-center items-center max-w-2xl mx-auto">
              <button 
                onClick={scrollToContact}
                className="group relative px-10 py-4 bg-gradient-to-r from-transervica-green to-transervica-light-green text-white font-bold text-lg rounded-xl hover:shadow-2xl hover:shadow-transervica-green/40 transition-all duration-300 transform hover:scale-105 w-full lg:w-auto"
              >
                OBTENER COTIZACIÓN INSTANTÁNEA
              </button>
              
              <a 
                href="tel:+584142776340"
                className="px-10 py-4 bg-transparent border-2 border-transervica-green text-transervica-green font-bold text-lg rounded-xl hover:bg-transervica-green hover:text-white transition-all duration-300 transform hover:scale-105 w-full lg:w-auto"
              >
                HABLAR CON UN ESPECIALISTA
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}