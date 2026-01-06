import { useEffect, useState } from 'react';
import { useInView } from '@/hooks/useInView';
import { useLanguage } from '@/contexts/LanguageContext';

const Counter = ({ end, suffix }: { end: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (!inView) return;

    let startTime: number;
    const duration = 2000;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [inView, end]);

  return (
    <span ref={ref} className="font-heading text-6xl md:text-7xl lg:text-8xl text-primary">
      {count}{suffix}
    </span>
  );
};

const StatsSection = () => {
  const { ref, inView } = useInView({ threshold: 0.2 });
  const { t } = useLanguage();

  const stats = [
    { value: 16, suffix: '', label: t('stats.companies') },
    { value: 980, suffix: '+', label: t('stats.employees') },
    { value: 4, suffix: '', label: t('stats.continents') },
    { value: 19, suffix: '+', label: t('stats.years') },
  ];

  return (
    <section 
      ref={ref}
      className="relative py-24 overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url(/DJI_20251217160951_0083_D.jpg)',
        }}
      >
        <div className="absolute inset-0 bg-secondary/95" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4">
        <div className={`text-center mb-16 ${inView ? 'animate-fade-up' : 'opacity-0'}`}>
          <span className="text-primary font-semibold uppercase tracking-widest text-sm">
            {t('stats.label')}
          </span>
          <h2 className="font-heading text-5xl md:text-6xl text-white mt-4 tracking-wider">
            {t('stats.title')}
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center p-8 border border-white/10 ${
                inView ? 'animate-fade-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Counter end={stat.value} suffix={stat.suffix} />
              <p className="text-white/80 mt-4 uppercase tracking-wider text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
