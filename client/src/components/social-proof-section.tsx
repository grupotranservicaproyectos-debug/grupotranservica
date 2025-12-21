import { Factory, Zap, Building2, Truck, HardHat, Wrench } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const sectors = [
  {
    icon: Zap,
    nameEs: 'Energía',
    nameEn: 'Energy',
    descEs: 'Transformadores y equipos eléctricos',
    descEn: 'Transformers and electrical equipment',
    color: '#FFD700'
  },
  {
    icon: Factory,
    nameEs: 'Industria Petrolera',
    nameEn: 'Oil & Gas',
    descEs: 'Equipos y maquinaria pesada',
    descEn: 'Heavy equipment and machinery',
    color: '#1E90FF'
  },
  {
    icon: Building2,
    nameEs: 'Construcción',
    nameEn: 'Construction',
    descEs: 'Estructuras y prefabricados',
    descEn: 'Structures and prefabricated elements',
    color: '#FF6347'
  },
  {
    icon: HardHat,
    nameEs: 'Minería',
    nameEn: 'Mining',
    descEs: 'Maquinaria minera especializada',
    descEn: 'Specialized mining machinery',
    color: '#8B4513'
  },
  {
    icon: Wrench,
    nameEs: 'Manufactura',
    nameEn: 'Manufacturing',
    descEs: 'Líneas de producción industrial',
    descEn: 'Industrial production lines',
    color: '#32CD32'
  },
  {
    icon: Truck,
    nameEs: 'Logística',
    nameEn: 'Logistics',
    descEs: 'Proyectos multimodales',
    descEn: 'Multimodal projects',
    color: '#9370DB'
  }
];

const stats = [
  { value: '500+', labelEs: 'Proyectos Completados', labelEn: 'Projects Completed' },
  { value: '40+', labelEs: 'Años de Experiencia', labelEn: 'Years of Experience' },
  { value: '1,100', labelEs: 'Toneladas Máximas', labelEn: 'Max Tons Capacity' },
  { value: '100%', labelEs: 'Tasa de Éxito', labelEn: 'Success Rate' }
];

export default function SocialProofSection() {
  const { language, t } = useLanguage();

  return (
    <section 
      id="confian-en-nosotros" 
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white"
      aria-label={language === 'es' ? 'Sectores que confían en nosotros' : 'Industries that trust us'}
    >
      <div className="max-w-7xl mx-auto mobile-padding">
        <div className="text-center mb-10 lg:mb-14">
          <span 
            className="inline-block px-4 py-2 rounded-full text-sm font-bold mb-4 uppercase tracking-wider"
            style={{ backgroundColor: 'rgba(21, 93, 41, 0.1)', color: '#155d29' }}
          >
            {language === 'es' ? 'Confianza Demostrada' : 'Proven Trust'}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {language === 'es' ? 'Sectores que Confían en Nosotros' : 'Industries That Trust Us'}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            {language === 'es' 
              ? 'Líderes de la industria en Venezuela confían en TRANSERVICA para sus operaciones más críticas de transporte especializado.'
              : 'Industry leaders in Venezuela trust TRANSERVICA for their most critical specialized transportation operations.'}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 mb-12 lg:mb-16">
          {sectors.map((sector, index) => (
            <div 
              key={index}
              className="group bg-white rounded-xl p-4 sm:p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#155d29]/30 text-center"
              data-testid={`sector-card-${index}`}
            >
              <div 
                className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-3 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: `${sector.color}20` }}
              >
                <sector.icon 
                  className="w-7 h-7 sm:w-8 sm:h-8 transition-colors duration-300"
                  style={{ color: sector.color }}
                />
              </div>
              <h3 className="font-bold text-gray-900 text-sm sm:text-base mb-1">
                {language === 'es' ? sector.nameEs : sector.nameEn}
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 hidden sm:block">
                {language === 'es' ? sector.descEs : sector.descEn}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-[#155d29] to-[#1a7033] rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center"
                data-testid={`stat-item-${index}`}
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sm sm:text-base text-white/80 font-medium">
                  {language === 'es' ? stat.labelEs : stat.labelEn}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 lg:mt-14 text-center">
          <p className="text-gray-600 mb-6 text-lg">
            {language === 'es' 
              ? '¿Listo para unirse a las empresas que confían en nosotros?'
              : 'Ready to join the companies that trust us?'}
          </p>
          <a 
            href="#contacto"
            className="inline-flex items-center px-8 py-4 text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            style={{ backgroundColor: '#155d29' }}
            onMouseEnter={(e) => { (e.target as HTMLElement).style.backgroundColor = '#0f4a21'; }}
            onMouseLeave={(e) => { (e.target as HTMLElement).style.backgroundColor = '#155d29'; }}
            data-testid="cta-social-proof-contact"
          >
            {language === 'es' ? 'Solicitar Cotización' : 'Request a Quote'}
          </a>
        </div>
      </div>
    </section>
  );
}
