import { useInView } from '@/hooks/useInView';
import { Building2, Calendar, Network } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const CompaniesSection = () => {
  const { ref, inView } = useInView({ threshold: 0.2 });
  const { t } = useLanguage();

  const companies = [
    {
      name: 'IMC GROUP',
      founded: '07.12.2006',
      branches: 4,
      description: t('companies.imc.desc'),
    },
    {
      name: 'MEGAPARC',
      founded: '22.06.2005',
      branches: 7,
      description: t('companies.megaparc.desc'),
      highlight: true,
    },
    {
      name: 'FLYING PIG RESTAURANT',
      founded: '07.12.2006',
      branches: 2,
      description: t('companies.flyingpig.desc'),
    },
    {
      name: 'ESTATE INDUSTRY GROUP',
      founded: '12.06.2014',
      branches: 2,
      description: t('companies.estate.desc'),
    },
  ];

  return (
    <section ref={ref} className="py-24 bg-background relative">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 ${inView ? 'animate-fade-up' : 'opacity-0'}`}>
          <span className="text-primary font-semibold uppercase tracking-widest text-sm">
            {t('companies.label')}
          </span>
          <h2 className="section-title mt-4">
            {t('companies.title')}
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            {t('companies.subtitle')}
          </p>
        </div>

        {/* Companies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {companies.map((company, index) => (
            <div
              key={company.name}
              className={`group relative overflow-hidden bg-secondary transition-all duration-500 ${
                company.highlight ? 'border-2 border-primary' : 'border border-secondary-foreground/10'
              } ${inView ? 'animate-fade-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Content */}
              <div className="p-6">
                {/* Company Icon */}
                <div className="mb-4">
                  <div className={`w-12 h-12 ${company.highlight ? 'bg-primary' : 'border border-primary'} flex items-center justify-center`}>
                    <Building2 className={`w-6 h-6 ${company.highlight ? 'text-white' : 'text-primary'}`} />
                  </div>
                </div>

                {/* Company Name */}
                <h3 className={`font-heading text-lg tracking-wider mb-2 ${
                  company.highlight ? 'text-primary' : 'text-white'
                }`}>
                  {company.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-white/80 mb-4 min-h-[40px]">
                  {company.description}
                </p>

                {/* Info Grid */}
                <div className="space-y-3 pt-4 border-t border-white/10">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span className="text-white/70">{t('companies.founded')}:</span>
                    <span className="font-semibold ml-auto text-white">{company.founded}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Network className="w-4 h-4 text-primary" />
                    <span className="text-white/70">{t('companies.branches')}:</span>
                    <span className="font-semibold ml-auto text-white">{company.branches}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Total Summary */}
        <div className={`mt-12 text-center ${inView ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: '400ms' }}>
          <div className="inline-flex items-center gap-6 bg-secondary px-8 py-4 border-t-4 border-primary">
            <div>
              <div className="font-heading text-3xl text-primary">16</div>
              <div className="text-xs text-white/80 uppercase tracking-wider">{t('companies.totalCompanies')}</div>
            </div>
            <div className="w-px h-12 bg-white/20" />
            <div>
              <div className="font-heading text-3xl text-primary">15</div>
              <div className="text-xs text-white/80 uppercase tracking-wider">{t('companies.totalBranches')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompaniesSection;
