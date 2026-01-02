import Layout from '@/components/layout/Layout';
import PageHero from '@/components/shared/PageHero';
import { useInView } from '@/hooks/useInView';
import { Building2, Landmark, Factory, Hammer, Key, TrendingUp, ClipboardList, Building } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const services = [
  {
    icon: Building2,
    title: 'Construcții Rezidențiale',
    description: 'Dezvoltăm complexe rezidențiale moderne, blocuri de apartamente și case individuale cu cele mai înalte standarde de calitate și confort.',
    features: ['Apartamente premium', 'Case individuale', 'Vile de lux', 'Complexe rezidențiale'],
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop&q=80',
  },
  {
    icon: Landmark,
    title: 'Construcții Comerciale',
    description: 'Proiectăm și construim centre comerciale, clădiri de birouri și spații retail care definesc peisajul urban modern.',
    features: ['Centre comerciale', 'Clădiri de birouri', 'Hoteluri', 'Restaurante'],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&q=80',
  },
  {
    icon: Factory,
    title: 'Construcții Industriale',
    description: 'Realizăm hale industriale, depozite și facilități de producție optimizate pentru eficiență maximă.',
    features: ['Hale industriale', 'Depozite logistice', 'Fabrici', 'Centre de distribuție'],
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop&q=80',
  },
  {
    icon: Hammer,
    title: 'Renovări și Modernizări',
    description: 'Transformăm spațiile existente prin renovări complete și modernizări care adaugă valoare și funcționalitate.',
    features: ['Renovări complete', 'Modernizări interioare', 'Reabilitări termice', 'Upgrade facilități'],
    image: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=800&h=600&fit=crop&q=80',
  },
  {
    icon: Key,
    title: 'Închirieri Spații Comerciale',
    description: 'Oferim soluții flexibile de închiriere pentru spații comerciale premium în locații strategice.',
    features: ['Spații retail', 'Birouri', 'Depozite', 'Spații multifuncționale'],
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop&q=80',
  },
  {
    icon: TrendingUp,
    title: 'Consultanță Investiții',
    description: 'Ghidăm investitorii prin procesul de dezvoltare imobiliară cu analize de piață și strategii personalizate.',
    features: ['Analize de piață', 'Due diligence', 'Strategii investiții', 'Management risc'],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop&q=80',
  },
  {
    icon: ClipboardList,
    title: 'Management de Proiect',
    description: 'Gestionăm complet proiectele de construcție de la planificare până la predare, asigurând calitate și deadline-uri.',
    features: ['Planificare proiect', 'Coordonare echipe', 'Control calitate', 'Raportare'],
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&fit=crop&q=80',
  },
  {
    icon: Building,
    title: 'Dezvoltare Imobiliară',
    description: 'Inițiem și dezvoltăm proiecte imobiliare proprii cu focus pe inovație și sustenabilitate.',
    features: ['Proiecte greenfield', 'Dezvoltări mixte', 'Regenerare urbană', 'Proiecte sustenabile'],
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop&q=80',
  },
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const { ref, inView } = useInView({ threshold: 0.2 });
  const isEven = index % 2 === 0;

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
          alt={service.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent lg:hidden" />
      </div>
      
      <div className={`bg-muted p-8 lg:p-12 flex flex-col justify-center ${isEven ? '' : 'lg:order-1'}`}>
        <service.icon className="w-12 h-12 text-primary mb-6" />
        <h3 className="font-heading text-3xl lg:text-4xl tracking-wider mb-4">{service.title}</h3>
        <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
        
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
          Solicită Ofertă
          <span className="w-8 h-px bg-primary transition-all duration-300 group-hover:w-12" />
        </Link>
      </div>
    </div>
  );
};

const Activitati = () => {
  return (
    <>
      <Helmet>
        <title>Activități și Servicii - Megaparc | Imobiliare și Investiții Moldova</title>
        <meta name="description" content="Servicii complete de imobiliare și investiții: rezidențiale, comerciale, industriale, renovări, închirieri și consultanță." />
      </Helmet>
      <Layout>
        <PageHero
          title="Activitățile Noastre"
          subtitle="Soluții complete pentru toate nevoile de construcție"
          image="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&h=1080&fit=crop&q=80"
          breadcrumb={[
            { label: 'Acasă', href: '/' },
            { label: 'Activități' },
          ]}
        />

        {/* Services */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-primary font-semibold uppercase tracking-widest text-sm">
                Servicii Complete
              </span>
              <h2 className="section-title mt-4">Ce Oferim</h2>
              <p className="section-subtitle mx-auto mt-4">
                De la concept la finalizare, acoperim întregul spectru al industriei imobiliare
              </p>
            </div>
          </div>

          <div className="space-y-0">
            {services.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Activitati;
