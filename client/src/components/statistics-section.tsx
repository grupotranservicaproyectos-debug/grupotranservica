import { useEffect, useState } from "react";

export default function StatisticsSection() {
  const [years, setYears] = useState(0);
  const [capacity, setCapacity] = useState(0);
  const [reliability, setReliability] = useState(0);

  useEffect(() => {
    const animateCounter = (setter: (value: number) => void, target: number, duration: number) => {
      let start = 0;
      const increment = target / (duration / 50);
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          start = target;
          clearInterval(timer);
        }
        setter(Math.floor(start));
      }, 50);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter(setYears, 40, 2000);
            animateCounter(setCapacity, 1100, 2500);
            animateCounter(setReliability, 100, 1500);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    const section = document.getElementById('statistics');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="statistics" className="py-16" style={{ backgroundColor: '#155d29' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-5xl font-bold text-white mb-2">{years}</div>
            <div className="text-xl font-semibold text-white">Años de Experiencia</div>
            <div className="text-gray-200">Líder en transporte especializado</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-white mb-2">{capacity.toLocaleString()}</div>
            <div className="text-xl font-semibold text-white">Toneladas de Capacidad</div>
            <div className="text-gray-200">Equipos de última generación</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-white mb-2">{reliability}%</div>
            <div className="text-xl font-semibold text-white">Confiabilidad</div>
            <div className="text-gray-200">Proyectos exitosos</div>
          </div>
        </div>
      </div>
    </section>
  );
}
