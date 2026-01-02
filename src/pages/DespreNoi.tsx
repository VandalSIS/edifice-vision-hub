import Layout from '@/components/layout/Layout';
import PageHero from '@/components/shared/PageHero';
import { useInView } from '@/hooks/useInView';
import { Target, Eye, Heart, Shield, Award, Users } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const values = [
  {
    icon: Shield,
    title: 'Calitate',
    description: 'Standarde înalte în fiecare detaliu al construcției.',
  },
  {
    icon: Heart,
    title: 'Integritate',
    description: 'Transparență și onestitate în toate relațiile de afaceri.',
  },
  {
    icon: Award,
    title: 'Excelență',
    description: 'Depășim așteptările în fiecare proiect livrat.',
  },
  {
    icon: Users,
    title: 'Colaborare',
    description: 'Lucrăm împreună cu clienții pentru rezultate optime.',
  },
];

const team = [
  {
    name: 'Alexandru Popescu',
    role: 'Director General',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&q=80',
  },
  {
    name: 'Maria Ionescu',
    role: 'Director Financiar',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&q=80',
  },
  {
    name: 'Andrei Rusu',
    role: 'Director Tehnic',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&q=80',
  },
  {
    name: 'Elena Munteanu',
    role: 'Director Proiecte',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&q=80',
  },
];

const certifications = [
  'ISO 9001:2015',
  'ISO 14001:2015',
  'ISO 45001:2018',
  'Certificat ISCIR',
];

const DespreNoi = () => {
  const { ref: missionRef, inView: missionInView } = useInView();
  const { ref: valuesRef, inView: valuesInView } = useInView();
  const { ref: teamRef, inView: teamInView } = useInView();
  const { ref: certRef, inView: certInView } = useInView();

  return (
    <>
      <Helmet>
        <title>Despre Noi - Megaparc | Companie Imobiliare și Investiții Moldova</title>
        <meta name="description" content="Megaparc - Peste 30 de ani de experiență în imobiliare și investiții. Echipă de profesioniști dedicați excelenței în fiecare proiect." />
      </Helmet>
      <Layout>
        <PageHero
          title="Despre Noi"
          subtitle="Investim în viitor cu pasiune și profesionalism de peste trei decenii"
          image="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&h=1080&fit=crop&q=80"
          breadcrumb={[
            { label: 'Acasă', href: '/' },
            { label: 'Despre Noi' },
          ]}
        />

        {/* Mission & Vision */}
        <section ref={missionRef} className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className={missionInView ? 'animate-slide-right' : 'opacity-0'}>
                <img
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop&q=80"
                  alt="Echipa Megaparc pe șantier"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
              <div className={`space-y-8 ${missionInView ? 'animate-slide-left' : 'opacity-0'}`}>
                <div>
                  <span className="text-primary font-semibold uppercase tracking-widest text-sm">
                    Cine Suntem
                  </span>
                  <h2 className="section-title mt-4">Povestea Noastră</h2>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Megaparc este o companie lider pe piața imobiliară din Moldova, cu o experiență 
                  de peste 30 de ani. De la înființare, ne-am dedicat excelentei în fiecare proiect, 
                  de la investiții rezidențiale moderne până la complexe comerciale și industriale 
                  de anvergură.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Echipa noastră de profesioniști combină expertiza tehnică cu viziunea creativă 
                  pentru a transforma orice proiect în realitate. Folosim tehnologii de ultimă 
                  generație și materiale de cea mai înaltă calitate pentru a garanta durabilitate 
                  și satisfacția clienților.
                </p>
                
                <div className="grid grid-cols-2 gap-8 pt-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary flex items-center justify-center flex-shrink-0">
                      <Target className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl tracking-wider mb-2">Misiune</h3>
                      <p className="text-muted-foreground text-sm">
                        Să investim în spații care îmbunătățesc calitatea vieții.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary flex items-center justify-center flex-shrink-0">
                      <Eye className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl tracking-wider mb-2">Viziune</h3>
                      <p className="text-muted-foreground text-sm">
                        Lider în inovație și sustenabilitate în investiții imobiliare.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section ref={valuesRef} className="py-24 bg-muted">
          <div className="container mx-auto px-4">
            <div className={`text-center max-w-3xl mx-auto mb-16 ${valuesInView ? 'animate-fade-up' : 'opacity-0'}`}>
              <span className="text-primary font-semibold uppercase tracking-widest text-sm">
                Valorile Noastre
              </span>
              <h2 className="section-title mt-4">Ce Ne Definește</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className={`bg-background p-8 text-center card-hover ${
                    valuesInView ? 'animate-fade-up' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-16 h-16 bg-primary mx-auto mb-6 flex items-center justify-center">
                    <value.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-heading text-2xl tracking-wider mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section ref={teamRef} className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className={`text-center max-w-3xl mx-auto mb-16 ${teamInView ? 'animate-fade-up' : 'opacity-0'}`}>
              <span className="text-primary font-semibold uppercase tracking-widest text-sm">
                Echipa de Conducere
              </span>
              <h2 className="section-title mt-4">Liderii Noștri</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div
                  key={member.name}
                  className={`group ${teamInView ? 'animate-fade-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative overflow-hidden mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300" />
                  </div>
                  <h3 className="font-heading text-2xl tracking-wider">{member.name}</h3>
                  <p className="text-primary font-medium uppercase text-sm tracking-wider">
                    {member.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section ref={certRef} className="py-24 bg-secondary text-secondary-foreground">
          <div className="container mx-auto px-4">
            <div className={`text-center max-w-3xl mx-auto mb-16 ${certInView ? 'animate-fade-up' : 'opacity-0'}`}>
              <span className="text-primary font-semibold uppercase tracking-widest text-sm">
                Acreditări
              </span>
              <h2 className="font-heading text-5xl md:text-6xl tracking-wider mt-4">
                Certificări și Standarde
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {certifications.map((cert, index) => (
                <div
                  key={cert}
                  className={`border border-secondary-foreground/20 p-8 text-center ${
                    certInView ? 'animate-fade-up' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                  <span className="font-heading text-xl tracking-wider">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default DespreNoi;
