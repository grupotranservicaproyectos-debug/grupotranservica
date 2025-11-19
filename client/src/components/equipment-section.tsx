import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Truck } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import image15 from "@assets/15_1754168567957.webp";
import image16 from "@assets/16_1754168567957.webp"; 
import image17 from "@assets/17_1754168567957.webp";
import image20 from "@assets/20_1754168567958.webp";  
import image21 from "@assets/21_1754168567958.webp";
import image24 from "@assets/24_1754168567959.webp";
import craneImage from "@assets/WhatsApp Image 2025-10-03 at 5.33.44 PM_1759532186202.jpeg";

interface EquipmentItem {
  name: string;
  image: string;
  description: string;
  capacity: string;
  brand: string;
  features: string[];
}

export default function EquipmentSection() {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  
  const equipmentItems: EquipmentItem[] = [
    {
      name: t('equipment.item1.name'),
      image: image15,
      description: t('equipment.item1.description'),
      capacity: t('equipment.item1.capacity'),
      brand: "SCHEUERLE",
      features: [
        t('equipment.item1.feature1'),
        t('equipment.item1.feature2'),
        t('equipment.item1.feature3'),
        t('equipment.item1.feature4')
      ]
    },
    {
      name: t('equipment.item2.name'),
      image: image16,
      description: t('equipment.item2.description'),
      capacity: t('equipment.item2.capacity'),
      brand: "COMETTO",
      features: [
        t('equipment.item2.feature1'),
        t('equipment.item2.feature2'),
        t('equipment.item2.feature3'),
        t('equipment.item2.feature4')
      ]
    },
    {
      name: t('equipment.item3.name'),
      image: image20,
      description: t('equipment.item3.description'),
      capacity: t('equipment.item3.capacity'),
      brand: "GROVE", 
      features: [
        t('equipment.item3.feature1'),
        t('equipment.item3.feature2'),
        t('equipment.item3.feature3')
      ]
    },
    {
      name: t('equipment.item4.name'),
      image: craneImage,
      description: t('equipment.item4.description'),
      capacity: t('equipment.item4.capacity'),
      brand: "P&H",
      features: [
        t('equipment.item4.feature1'),
        t('equipment.item4.feature2'),
        t('equipment.item4.feature3'),
        t('equipment.item4.feature4')
      ]
    },
    {
      name: t('equipment.item5.name'),
      image: image21,
      description: t('equipment.item5.description'),
      capacity: t('equipment.item5.capacity'),
      brand: "MAN / MACK",
      features: [
        t('equipment.item5.feature1'),
        t('equipment.item5.feature2'),
        t('equipment.item5.feature3'),
        t('equipment.item5.feature4')
      ]
    },
    {
      name: t('equipment.item6.name'),
      image: image24,
      description: t('equipment.item6.description'),
      capacity: t('equipment.item6.capacity'),
      brand: "CATERPILLAR",
      features: [
        t('equipment.item6.feature1'),
        t('equipment.item6.feature2'),
        t('equipment.item6.feature3'),
        t('equipment.item6.feature4')
      ]
    }
  ];

  useEffect(() => {
    if (!isAutoplay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % equipmentItems.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoplay, equipmentItems.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % equipmentItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + equipmentItems.length) % equipmentItems.length);
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentEquipment = equipmentItems[currentSlide];

  return (
    <section id="equipos" className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4" style={{ color: '#155d29' }}>
            {t('equipment.title')}
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            {t('equipment.subtitle')}
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Carousel Container */}
          <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="md:flex">
              {/* Image Section */}
              <div className="md:w-1/2 relative">
                <div className="aspect-video md:aspect-square relative overflow-hidden">
                  <img
                    src={currentEquipment.image}
                    alt={currentEquipment.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  
                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                </div>
              </div>

              {/* Content Section */}
              <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <div className="mb-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-3">
                    {currentEquipment.name}
                  </h3>

                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {currentEquipment.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    <h4 className="font-bold text-slate-800 mb-3">Características Principales:</h4>
                    {currentEquipment.features.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <div className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ backgroundColor: '#155d29' }}></div>
                        <span className="text-slate-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Navigation Dots */}
                <div className="flex justify-center gap-2 mb-6">
                  {equipmentItems.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        currentSlide === index 
                          ? 'bg-[#155d29] w-8' 
                          : 'bg-gray-300 w-2 hover:bg-gray-400'
                      }`}
                      aria-label={`Go to equipment ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-center gap-4">
                  <button
                    onClick={prevSlide}
                    className="p-3 rounded-full bg-slate-100 hover:bg-[#155d29] hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
                    aria-label="Previous equipment"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="p-3 rounded-full bg-slate-100 hover:bg-[#155d29] hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
                    aria-label="Next equipment"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="rounded-2xl p-8 md:p-12 shadow-xl border" style={{ backgroundColor: '#155d29', borderColor: 'rgba(21, 93, 41, 0.1)' }}>
            <h3 className="text-2xl font-bold mb-4 text-white">{t('equipment.cta.title')}</h3>
            <p className="text-lg text-white mb-8 max-w-2xl mx-auto">{t('equipment.cta.subtitle')}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => window.open('https://wa.me/message/WAKKACM55ESHC1', '_blank')}
                className="font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg bg-white"
                style={{ color: '#155d29' }}
                onMouseEnter={(e) => { (e.target as HTMLElement).style.backgroundColor = '#f0f9f0'; (e.target as HTMLElement).style.color = '#0f4a21'; }}
                onMouseLeave={(e) => { (e.target as HTMLElement).style.backgroundColor = 'white'; (e.target as HTMLElement).style.color = '#155d29'; }}
              >
                {t('equipment.cta.button')}
              </button>
              <button 
                onClick={scrollToContact}
                className="border-2 font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 bg-transparent text-white"
                style={{ borderColor: 'white' }}
                onMouseEnter={(e) => { (e.target as HTMLElement).style.backgroundColor = 'white'; (e.target as HTMLElement).style.color = '#155d29'; }}
                onMouseLeave={(e) => { (e.target as HTMLElement).style.backgroundColor = 'transparent'; (e.target as HTMLElement).style.color = 'white'; }}
              >
                {t('equipment.cta.button')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
