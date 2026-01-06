import { Link } from 'react-router-dom';
import { Building2, Landmark, TrendingUp, ArrowRight } from 'lucide-react';
import { useInView } from '@/hooks/useInView';
import { useLanguage } from '@/contexts/LanguageContext';

const ServicesSection = () => {
  const { ref, inView } = useInView({ threshold: 0.2 });
  const { t } = useLanguage();

  const services = [
    {
      icon: Building2,
      title: t('services.realEstate'),
      description: t('services.realEstate.desc'),
      image: '/DJI_20251218172052_0196_D.jpg',
      link: '/activitati',
    },
    {
      icon: Landmark,
      title: t('services.commercial'),
      description: t('services.commercial.desc'),
      image: '/DJI_20251217161152_0086_D.jpg',
      link: '/activitati',
    },
    {
      icon: TrendingUp,
      title: t('services.investments'),
      description: t('services.investments.desc'),
      image: '/DJI_20251217194507_0171_D.jpg',
      link: '/activitati',
    },
  ];

  return (
    <section ref={ref} className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 ${inView ? 'animate-fade-up' : 'opacity-0'}`}>
          <span className="text-primary font-semibold uppercase tracking-widest text-sm">
            {t('services.label')}
          </span>
          <h2 className="section-title mt-4">
            {t('services.title')}
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-0">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.link}
              className={`group relative overflow-hidden aspect-[4/5] ${
                inView ? 'animate-fade-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${service.image})` }}
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/60 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-95" />

              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-8">
                <service.icon className="w-12 h-12 text-primary mb-4 transition-transform duration-300 group-hover:scale-110" />
                <h3 className="font-heading text-3xl text-background tracking-wider mb-3">
                  {service.title}
                </h3>
                <p className="text-background/70 mb-6 transform translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  {service.description}
                </p>
                <div className="flex items-center gap-2 text-primary font-semibold uppercase text-sm tracking-wider">
                  <span>{t('services.details')}</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
