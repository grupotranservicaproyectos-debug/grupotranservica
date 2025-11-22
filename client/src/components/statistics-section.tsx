import { useLanguage } from '../contexts/LanguageContext';

export default function StatisticsSection() {
  const { t } = useLanguage();

  return (
    <section id="statistics" className="py-16" style={{ backgroundColor: '#155d29' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-5xl font-bold text-white mb-2">40</div>
            <div className="text-xl font-semibold text-white">{t('hero.stats.years.title')}</div>
            <div className="text-white">{t('hero.stats.years.subtitle')}</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-white mb-2">1,100</div>
            <div className="text-xl font-semibold text-white">{t('hero.stats.capacity.title')}</div>
            <div className="text-white">{t('hero.stats.capacity.subtitle')}</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-white mb-2">100%</div>
            <div className="text-xl font-semibold text-white">{t('hero.stats.reliability.title')}</div>
            <div className="text-white">{t('hero.stats.reliability.subtitle')}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
