export default function AboutSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="nosotros" className="py-20 bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nosotros
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Con 40 años de experiencia, somos líderes en transporte de cargas excepcionales en Venezuela
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Misión */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-transervica-green">
            <div className="flex items-center mb-6">
              <div className="bg-transervica-green/10 p-3 rounded-full mr-4">
                <svg className="w-8 h-8 text-transervica-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Misión</h3>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">
              Prestación del servicio de movilización e izamiento de cargas sobredimensionadas mediante el cumplimiento 
              de criterios de seguridad, garantía y confiabilidad, anticipando y respondiendo eficazmente las necesidades 
              de nuestros clientes, procurando el bienestar de nuestros trabajadores y maximizando la productividad.
            </p>
          </div>

          {/* Visión */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-transervica-light-green">
            <div className="flex items-center mb-6">
              <div className="bg-transervica-light-green/10 p-3 rounded-full mr-4">
                <svg className="w-8 h-8 text-transervica-light-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Visión</h3>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">
              Ser una empresa reconocida nacional e internacionalmente en la prestación de servicios de movilización 
              e izamiento de cargas sobredimensionadas, con personal calificado, mejoramiento continuo, aprovechamiento 
              de oportunidades y satisfacción permanente de clientes.
            </p>
          </div>
        </div>

        {/* Valores y CTA */}
        <div className="bg-gradient-to-r from-transervica-green to-transervica-light-green rounded-2xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">¿Necesitas transporte de cargas excepcionales?</h3>
          <p className="text-xl mb-8 opacity-90">
            Contáctanos y descubre por qué somos la opción preferida en Venezuela
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={scrollToContact}
              className="bg-white text-transervica-green px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              SOLICITAR COTIZACIÓN
            </button>
            <a 
              href="tel:+584142776340"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-transervica-green transition-all duration-300 transform hover:scale-105"
            >
              LLAMAR: +58 414 277 6340
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}