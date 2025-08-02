export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="pt-20 bg-gradient-to-br from-transervica-green to-transervica-light-green text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Nada es demasiado <span className="text-transervica-orange">pesado</span> para Nosotros
            </h1>
            <p className="text-xl mb-8 text-green-100">
              Especialistas en transporte de cargas excepcionales en Venezuela con 40 años de experiencia y capacidad hasta 1,100 toneladas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToContact}
                className="bg-transervica-orange text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition text-center"
              >
                Solicitar Cotización
              </button>
              <a 
                href="https://wa.me/584241234567" 
                target="_blank" 
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-transervica-green transition text-center"
              >
                WhatsApp
              </a>
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
