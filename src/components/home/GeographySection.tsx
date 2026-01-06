import { useInView } from '@/hooks/useInView';
import { Globe, MapPin, Landmark, TrendingUp } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const GeographySection = () => {
  const { ref, inView } = useInView({ threshold: 0.2 });
  const { t } = useLanguage();

  const regions = [
    {
      name: t('geo.moldova'),
      description: t('geo.moldova.desc'),
      countries: 1,
      icon: Landmark,
      highlight: true,
      delay: 0,
    },
    {
      name: t('geo.europe'),
      description: t('geo.europe.desc'),
      countries: 7,
      icon: Globe,
      highlight: false,
      delay: 100,
    },
    {
      name: t('geo.asia'),
      description: t('geo.asia.desc'),
      countries: 3,
      icon: TrendingUp,
      highlight: false,
      delay: 200,
    },
    {
      name: t('geo.africa'),
      description: t('geo.africa.desc'),
      countries: 4,
      icon: MapPin,
      highlight: false,
      delay: 300,
    },
  ];

  return (
    <section ref={ref} className="py-24 bg-secondary relative overflow-hidden">
      {/* Animated World Map Background */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 1000 500" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="currentColor" stopOpacity="0.2" />
              <stop offset="100%" stopColor="currentColor" stopOpacity="0.8" />
            </linearGradient>
          </defs>
          {/* Simplified continents paths */}
          <path d="M200,150 L250,140 L280,160 L260,180 L220,170 Z" fill="url(#mapGradient)" className="animate-pulse" style={{ animationDuration: '3s' }} />
          <path d="M400,200 L480,180 L520,220 L480,260 L420,250 Z" fill="url(#mapGradient)" className="animate-pulse" style={{ animationDuration: '4s', animationDelay: '1s' }} />
          <path d="M600,250 L680,240 L720,280 L680,320 L620,310 Z" fill="url(#mapGradient)" className="animate-pulse" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }} />
          <path d="M380,320 L440,310 L460,350 L420,370 L390,360 Z" fill="url(#mapGradient)" className="animate-pulse" style={{ animationDuration: '4.5s', animationDelay: '1.5s' }} />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 ${inView ? 'animate-fade-up' : 'opacity-0'}`}>
          <span className="text-primary font-semibold uppercase tracking-widest text-sm">
            {t('geo.label')}
          </span>
          <h2 className="font-heading text-4xl md:text-5xl text-secondary-foreground mt-4 tracking-wider">
            {t('geo.title')}
          </h2>
          <p className="text-secondary-foreground/90 text-lg md:text-xl mx-auto mt-4 max-w-2xl">
            {t('geo.subtitle')}
          </p>
        </div>

        {/* Geography Grid with Modern Design */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {regions.map((region, index) => (
            <div
              key={index}
              className={`group relative bg-background overflow-hidden ${
                region.highlight ? 'border-2 border-primary' : 'border border-border'
              } ${inView ? 'animate-fade-up' : 'opacity-0'}`}
              style={{ animationDelay: `${region.delay}ms` }}
            >
              {/* Content */}
              <div className="relative p-8">
                {/* HQ Badge */}
                {region.highlight && (
                  <div className="absolute top-4 right-4 bg-primary text-white text-xs px-3 py-1 uppercase tracking-wider font-semibold">
                    HQ
                  </div>
                )}

                {/* Icon */}
                <div className="mb-6">
                  <div className={`w-16 h-16 ${
                    region.highlight ? 'bg-primary' : 'border border-primary'
                  } flex items-center justify-center`}>
                    <region.icon className={`w-8 h-8 ${
                      region.highlight ? 'text-white' : 'text-primary'
                    }`} />
                  </div>
                </div>

                {/* Region Name */}
                <h3 className="font-heading text-2xl tracking-wider mb-3 text-foreground">
                  {region.name}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {region.description}
                </p>

                {/* Countries Count */}
                <div className="flex items-center gap-2">
                  <div className={`w-8 h-8 ${
                    region.highlight ? 'bg-primary' : 'border border-primary'
                  } flex items-center justify-center`}>
                    <MapPin className={`w-4 h-4 ${
                      region.highlight ? 'text-white' : 'text-primary'
                    }`} />
                  </div>
                  <span className="font-semibold text-lg text-foreground">{region.countries}</span>
                  <span className="text-muted-foreground text-sm">
                    {region.countries === 1 ? t('geo.country') : t('geo.countriesPlural')}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Global Stats */}
        <div className={`mt-16 text-center ${inView ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: '400ms' }}>
          <div className="inline-flex items-center gap-6 bg-background px-12 py-6 border-2 border-primary">
            <Globe className="w-8 h-8 text-primary" />
            <div>
              <div className="font-heading text-3xl tracking-wider text-foreground">
                <span className="text-primary">15+</span> {t('geo.countries')}
              </div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">{t('geo.inGroup')}</div>
            </div>
            <div className="w-px h-12 bg-border" />
            <div>
              <div className="font-heading text-3xl tracking-wider text-foreground">
                <span className="text-primary">16</span> {t('team.companies')}
              </div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">{t('geo.inGroup')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeographySection;
