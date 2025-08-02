import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "¿Cuál es la capacidad máxima de carga que pueden transportar?",
      answer: "Nuestra flota especializada puede transportar hasta 1,100 toneladas utilizando remolques modulares hidráulicos de última generación."
    },
    {
      question: "¿Qué tipo de permisos necesito para mi carga?",
      answer: "Nosotros nos encargamos de toda la gestión de permisos especiales, documentación y coordinación con autoridades competentes."
    },
    {
      question: "¿Cubren todo el territorio venezolano?",
      answer: "Sí, ofrecemos servicios de transporte especializado en todo el territorio nacional con rutas optimizadas y logística integral."
    },
    {
      question: "¿Qué incluye el servicio de transporte?",
      answer: "Incluye planificación de ruta, permisos, seguros, carga/descarga, escolta especializada y monitoreo en tiempo real."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-transervica-green mb-4">Preguntas Frecuentes</h2>
          <p className="text-xl text-gray-600">Resolvemos tus dudas sobre transporte de cargas excepcionales</p>
        </div>
        
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full text-left"
              >
                <h3 className="text-lg font-semibold text-gray-800 pr-4">{faq.question}</h3>
                {openFAQ === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                )}
              </button>
              {openFAQ === index && (
                <div className="mt-4 text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
