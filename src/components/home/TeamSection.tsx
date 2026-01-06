import { useInView } from '@/hooks/useInView';
import { Users, Briefcase, UserCheck } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const TeamSection = () => {
  const { ref, inView } = useInView({ threshold: 0.2 });
  const { t } = useLanguage();

  const teamStructure = [
    {
      icon: UserCheck,
      title: t('team.board'),
      description: t('team.board.desc'),
    },
    {
      icon: Briefcase,
      title: t('team.admin'),
      description: t('team.admin.desc'),
    },
    {
      icon: Users,
      title: t('team.staff'),
      description: t('team.staff.desc'),
    },
  ];

  return (
    <section ref={ref} className="py-24 bg-muted relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 ${inView ? 'animate-fade-up' : 'opacity-0'}`}>
          <span className="text-primary font-semibold uppercase tracking-widest text-sm">
            {t('team.label')}
          </span>
          <h2 className="section-title mt-4">
            {t('team.title')}
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            {t('team.subtitle')}
          </p>
        </div>

        {/* Stats Bar */}
        <div className={`flex flex-wrap justify-center gap-6 mb-16 ${inView ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
          <div className="bg-background px-8 py-6 border-l-4 border-primary">
            <div className="font-heading text-4xl text-primary mb-1">16</div>
            <div className="text-sm text-foreground/80 uppercase tracking-wider">{t('team.companies')}</div>
          </div>
          <div className="bg-background px-8 py-6 border-l-4 border-primary">
            <div className="font-heading text-4xl text-primary mb-1">980+</div>
            <div className="text-sm text-foreground/80 uppercase tracking-wider">{t('team.employees')}</div>
          </div>
          <div className="bg-background px-8 py-6 border-l-4 border-primary">
            <div className="font-heading text-4xl text-primary mb-1">4</div>
            <div className="text-sm text-foreground/80 uppercase tracking-wider">{t('team.continents')}</div>
          </div>
        </div>

        {/* Team Structure Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {teamStructure.map((item, index) => (
            <div
              key={index}
              className={`group relative bg-background overflow-hidden border border-border ${
                inView ? 'animate-fade-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${(index + 3) * 100}ms` }}
            >
              {/* Content */}
              <div className="relative p-8">
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 border border-primary flex items-center justify-center">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>

                {/* Text */}
                <h3 className="font-heading text-xl tracking-wider mb-3 text-foreground">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>

                {/* Number Indicator */}
                <div className="absolute top-6 right-6 font-heading text-6xl text-border/50">
                  {index + 1}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
