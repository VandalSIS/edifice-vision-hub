import Layout from '@/components/layout/Layout';
import PageHero from '@/components/shared/PageHero';
import { useInView } from '@/hooks/useInView';
import { Building2, Landmark, Factory, Hammer, Key, TrendingUp, ClipboardList, Building } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';

const services = [
  {
    icon: Building2,
    titleKey: 'activities.realEstate.title',
    descKey: 'activities.realEstate.desc',
    features: ['Apartamente premium', 'Case individuale', 'Vile de lux', 'Complexe rezidențiale'],
    image: '/DJI_20251218172052_0196_D.jpg',
  },
  {
    icon: Landmark,
    titleKey: 'activities.commercial.title',
    descKey: 'activities.commercial.desc',
    features: ['Centre comerciale', 'Clădiri de birouri', 'Hoteluri', 'Restaurante'],
    image: '/DJI_20251217161152_0086_D.jpg',
  },
  {
    icon: Factory,
    titleKey: 'activities.investments.title',
    descKey: 'activities.investments.desc',
    features: ['Hale industriale', 'Depozite logistice', 'Fabrici', 'Centre de distribuție'],
    image: '/DJI_20251217194507_0171_D.jpg',
  },
  {
    icon: Hammer,
    title: 'Renovări și Modernizări',
    description: 'Transformăm spațiile existente prin renovări complete și modernizări care adaugă valoare și funcționalitate.',
    features: ['Renovări complete', 'Modernizări interioare', 'Reabilitări termice', 'Upgrade facilități'],
    image: '/DSCF2771.JPG',
  },
  {
    icon: Key,
    title: 'Închirieri Spații Comerciale',
    description: 'Oferim soluții flexibile de închiriere pentru spații comerciale premium în locații strategice.',
    features: ['Spații retail', 'Birouri', 'Depozite', 'Spații multifuncționale'],
    image: '/DJI_20251217190215_0134_D.jpg',
  },
  {
    icon: TrendingUp,
    title: 'Consultanță Investiții',
    description: 'Ghidăm investitorii prin procesul de dezvoltare imobiliară cu analize de piață și strategii personalizate.',
    features: ['Analize de piață', 'Due diligence', 'Strategii investiții', 'Management risc'],
    image: '/DJI_20251217192608_0160_D.jpg',
  },
  {
    icon: ClipboardList,
    title: 'Management de Proiect',
    description: 'Gestionăm complet proiectele de construcție de la planificare până la predare, asigurând calitate și deadline-uri.',
    features: ['Planificare proiect', 'Coordonare echipe', 'Control calitate', 'Raportare'],
    image: '/DJI_20251217160951_0083_D.jpg',
  },
  {
    icon: Building,
    titleKey: 'activities.hospitality.title',
    descKey: 'activities.hospitality.desc',
    features: ['Restaurante', 'Catering', 'Evenimente', 'Servicii premium'],
    image: '/DSCF2702.JPG',
  },
];

const ServiceCard = ({ service, index, t }: { service: typeof services[0]; index: number; t: (key: string) => string }) => {
  const { ref, inView } = useInView({ threshold: 0.2 });
  const isEven = index % 2 === 0;

  const title = service.titleKey ? t(service.titleKey) : service.title;
  const description = service.descKey ? t(service.descKey) : service.description;

  return (
    <div
      ref={ref}
      className={`grid lg:grid-cols-2 gap-0 ${isEven ? '' : 'lg:flex-row-reverse'} ${
        inView ? 'animate-fade-up' : 'opacity-0'
      }`}
    >
      <div className={`relative overflow-hidden aspect-[4/3] lg:aspect-auto ${isEven ? '' : 'lg:order-2'}`}>
        <img
          src={service.image}
          alt={title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent lg:hidden" />
      </div>
      
      <div className={`bg-muted p-8 lg:p-12 flex flex-col justify-center ${isEven ? '' : 'lg:order-1'}`}>
        <service.icon className="w-12 h-12 text-primary mb-6" />
        <h3 className="font-heading text-3xl lg:text-4xl tracking-wider mb-4">{title}</h3>
        <p className="text-muted-foreground mb-6 leading-relaxed">{description}</p>
        
        <ul className="grid grid-cols-2 gap-3 mb-8">
          {service.features.map((feature) => (
            <li key={feature} className="flex items-center gap-2 text-sm">
              <span className="w-2 h-2 bg-primary" />
              {feature}
            </li>
          ))}
        </ul>

        <Link
          to="/contact"
          className="inline-flex items-center gap-2 text-primary font-semibold uppercase tracking-wider text-sm group"
        >
          {t('common.learnMore')}
          <span className="w-8 h-px bg-primary transition-all duration-300 group-hover:w-12" />
        </Link>
      </div>
    </div>
  );
};

const Activitati = () => {
  const { t } = useLanguage();

  return (
    <>
      <Helmet>
        <title>{t('activities.hero.title')} - Megaparc | IMC Group</title>
        <meta name="description" content={t('activities.hero.subtitle')} />
      </Helmet>
      <Layout>
        <PageHero
          title={t('activities.hero.title')}
          subtitle={t('activities.hero.subtitle')}
          image="/DJI_20251217160951_0083_D.jpg"
          breadcrumb={[
            { label: t('common.home'), href: '/' },
            { label: t('nav.activities') },
          ]}
        />

        {/* Services */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-primary font-semibold uppercase tracking-widest text-sm">
                {t('services.label')}
              </span>
              <h2 className="section-title mt-4">{t('services.title')}</h2>
              <p className="section-subtitle mx-auto mt-4">
                {t('services.subtitle')}
              </p>
            </div>
          </div>

          <div className="space-y-0">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} t={t} />
            ))}
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Activitati;
