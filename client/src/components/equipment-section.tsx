import { useState } from 'react';
import { Truck, Crane, Settings, Award, ChevronDown, ChevronUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import image15 from "@assets/15_1754168567957.png";
import image16 from "@assets/16_1754168567957.png"; 
import image17 from "@assets/17_1754168567957.png";
import image20 from "@assets/20_1754168567958.png";  
import image21 from "@assets/21_1754168567958.png";
import image24 from "@assets/24_1754168567959.png";

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
      image: image17,
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

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="equipos" className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6" style={{ color: '#155d29' }}>{t('equipment.title')}</h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto mb-4">
            {t('equipment.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {equipmentItems.map((equipment, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:scale-105 overflow-hidden"
            >
              {/* Capacity badge */}
              <div className="absolute top-4 left-4 z-20 text-white px-3 py-1 rounded-full text-sm font-semibold" style={{ backgroundColor: '#155d29' }}>
                {equipment.capacity}
              </div>

              

              {/* Image container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={equipment.image}
                  alt={equipment.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Hover content */}
                <div className="absolute inset-0 flex items-end justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="text-center text-white">
                    <button 
                      onClick={scrollToContact}
                      className="text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                      style={{ backgroundColor: '#155d29' }}
                      onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = '#0f4a21'}
                      onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = '#155d29'}
                    >
    {t('equipment.specs.button')}
                    </button>
                  </div>
                </div>
              </div>

              {/* Equipment info */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 transition-colors duration-300" style={{ color: '#155d29' }}>
                  {equipment.name}
                </h3>
                
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {equipment.description}
                </p>
                
                <ul className="space-y-2">
                  {equipment.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-slate-600">
                      <div className="w-2 h-2 rounded-full mr-3 transform group-hover:scale-125 transition-transform duration-300" style={{ backgroundColor: '#155d29' }}></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Animated border */}
              <div className="absolute inset-0 border-2 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ borderColor: '#155d29' }}></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="rounded-2xl p-8 md:p-12 shadow-xl border" style={{ backgroundColor: '#155d29', borderColor: 'rgba(21, 93, 41, 0.1)' }}>
            <h3 className="text-2xl font-bold mb-4 text-white">{t('equipment.cta.title')}</h3>
            <p className="text-lg text-white mb-8 max-w-2xl mx-auto">{t('equipment.cta.subtitle')}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => window.open('https://wa.me/584142776340?text=Hola%2C%20necesito%20consultar%20disponibilidad%20de%20equipos%20especializados', '_blank')}
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