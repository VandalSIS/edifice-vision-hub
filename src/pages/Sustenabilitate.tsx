import Layout from '@/components/layout/Layout';
import PageHero from '@/components/shared/PageHero';
import { useInView } from '@/hooks/useInView';
import { Leaf, Users, Building, Target, Globe, Recycle, Sun, TreePine } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const pillars = [
  {
    icon: Leaf,
    title: 'Environmental',
    titleRo: 'Mediu',
    description: 'Reducerea amprentei de carbon și tranziția către operațiuni cu zero emisii nete până în 2050.',
    color: 'text-green-500',
    bgColor: 'bg-green-500/10',
  },
  {
    icon: Users,
    title: 'Social',
    titleRo: 'Social',
    description: 'Sprijinirea comunităților locale, dezvoltarea angajaților și promovarea diversității.',
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10',
  },
  {
    icon: Building,
    title: 'Governance',
    titleRo: 'Guvernanță',
    description: 'Conduită etică în afaceri, transparență și conformitate cu cele mai înalte standarde.',
    color: 'text-purple-500',
    bgColor: 'bg-purple-500/10',
  },
];

const commitments = [
  {
    icon: Target,
    title: 'Net Zero până în 2050',
    description: 'Ne angajăm să atingem zero emisii nete în toate operațiunile noastre.',
  },
  {
    icon: Globe,
    title: 'Agenda ONU 2030',
    description: 'Contribuim activ la obiectivele de dezvoltare durabilă ale Națiunilor Unite.',
  },
  {
    icon: Recycle,
    title: 'Economie Circulară',
    description: 'Promovăm reutilizarea și reciclarea în toate proiectele noastre.',
  },
  {
    icon: Sun,
    title: 'Energie Regenerabilă',
    description: 'Investim în surse de energie curată și eficiență energetică.',
  },
  {
    icon: TreePine,
    title: 'Spații Verzi',
    description: 'Integrăm zone verzi și soluții bazate pe natură în dezvoltările noastre.',
  },
  {
    icon: Users,
    title: 'Comunități Sustenabile',
    description: 'Construim comunități reziliente și incluzive pentru generațiile viitoare.',
  },
];

const Sustenabilitate = () => {
  const { ref: visionRef, inView: visionInView } = useInView();
  const { ref: pillarsRef, inView: pillarsInView } = useInView();
  const { ref: commitmentsRef, inView: commitmentsInView } = useInView();

  return (
    <>
      <Helmet>
        <title>Sustenabilitate - Megaparc | ESG și Dezvoltare Durabilă</title>
        <meta name="description" content="Angajamentul Megaparc pentru sustenabilitate. Cadrul nostru ESG și obiectivele pentru un viitor cu emisii reduse de carbon până în 2050." />
      </Helmet>
      <Layout>
        <PageHero
          title="Sustenabilitate"
          subtitle="Investim responsabil pentru un viitor durabil"
          image="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1920&h=1080&fit=crop&q=80"
          breadcrumb={[
            { label: 'Acasă', href: '/' },
            { label: 'Sustenabilitate' },
          ]}
        />

        {/* Vision Section */}
        <section ref={visionRef} className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className={`max-w-4xl mx-auto ${visionInView ? 'animate-fade-up' : 'opacity-0'}`}>
              <span className="text-primary font-semibold uppercase tracking-widest text-sm">
                Viziunea Noastră
              </span>
              <h2 className="section-title mt-4 mb-8">
                Cadrul Strategic de Sustenabilitate
              </h2>
              
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  La Megaparc, avem o tradiție îndelungată de comportament responsabil față de angajați, 
                  mediu și societate. Sustenabilitatea pentru noi înseamnă concentrarea pe desfășurarea 
                  afacerii în mod responsabil, eficient și într-un mod inovator.
                </p>
                <p>
                  Ne angajăm să creăm valoare pe termen lung pentru companie și părțile interesate, 
                  respectând în același timp mediul, sprijinind comunitățile în care ne desfășurăm 
                  activitatea și străduindu-ne să sprijinim obiectivele de dezvoltare durabilă ale ONU.
                </p>
                <p className="font-semibold text-foreground">
                  Cadrul nostru de sustenabilitate este construit în jurul celor trei piloni: 
                  Environmental, Social și Governance (ESG).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ESG Pillars */}
        <section ref={pillarsRef} className="py-24 bg-muted">
          <div className="container mx-auto px-4">
            <div className={`text-center max-w-3xl mx-auto mb-16 ${pillarsInView ? 'animate-fade-up' : 'opacity-0'}`}>
              <span className="text-primary font-semibold uppercase tracking-widest text-sm">
                Pilonii ESG
              </span>
              <h2 className="section-title mt-4">
                Cei Trei Piloni ai Sustenabilității
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {pillars.map((pillar, index) => (
                <div
                  key={pillar.title}
                  className={`bg-background p-8 border border-border hover:border-primary transition-all duration-300 ${
                    pillarsInView ? 'animate-fade-up' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className={`w-16 h-16 ${pillar.bgColor} flex items-center justify-center mb-6`}>
                    <pillar.icon className={`w-8 h-8 ${pillar.color}`} />
                  </div>
                  <h3 className="font-heading text-2xl tracking-wider mb-2">
                    {pillar.titleRo}
                  </h3>
                  <p className="text-sm text-primary uppercase tracking-wider mb-4">
                    {pillar.title}
                  </p>
                  <p className="text-muted-foreground">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Net Zero Commitment */}
        <section className="py-24 bg-secondary text-secondary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <span className="text-primary font-semibold uppercase tracking-widest text-sm">
                Angajamentul Nostru
              </span>
              <h2 className="font-heading text-4xl md:text-5xl tracking-wider mt-4 mb-8">
                Net Zero până în 2050
              </h2>
              <p className="text-xl text-secondary-foreground/80 leading-relaxed mb-8">
                Ne angajăm pe o cale către un viitor cu emisii reduse de dioxid de carbon. 
                Prin noile ambiții și obiective stabilite, recunoaștem schimbările climatice 
                ca fiind una dintre cele mai importante provocări globale, dar și oportunități actuale.
              </p>
              <p className="text-lg text-secondary-foreground/70 leading-relaxed">
                Strategia noastră definește modul în care ne dorim să ne dezvoltăm ca o companie 
                diversificată în domeniul imobiliar, integrând activități cu emisii scăzute de carbon 
                și stabilind un parcurs clar pentru a ajunge la zero emisii nete în operațiunile 
                noastre până în 2050.
              </p>
            </div>
          </div>
        </section>

        {/* Commitments Grid */}
        <section ref={commitmentsRef} className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className={`text-center max-w-3xl mx-auto mb-16 ${commitmentsInView ? 'animate-fade-up' : 'opacity-0'}`}>
              <span className="text-primary font-semibold uppercase tracking-widest text-sm">
                Obiective 2030
              </span>
              <h2 className="section-title mt-4">
                Angajamentele Noastre
              </h2>
              <p className="section-subtitle mx-auto mt-4">
                Acțiuni concrete pentru Agenda 2030 pentru Dezvoltare Durabilă a ONU
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {commitments.map((item, index) => (
                <div
                  key={item.title}
                  className={`p-6 border border-border hover:border-primary hover:bg-muted transition-all duration-300 group ${
                    commitmentsInView ? 'animate-fade-up' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <item.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-heading text-xl tracking-wider mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Focus Areas */}
        <section className="py-24 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <span className="text-primary font-semibold uppercase tracking-widest text-sm">
                  Domenii de Interes
                </span>
                <h2 className="section-title mt-4">
                  Sustenabilitatea în Strategia Noastră
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: 'Tranziție Low-Carbon', desc: 'Tranziția către un sector imobiliar cu emisii reduse de carbon' },
                  { title: 'Operațiuni Responsabile', desc: 'Desfășurarea operațiunilor în mod etic și responsabil' },
                  { title: 'Inovație & Digitalizare', desc: 'Adoptarea tehnologiilor moderne pentru eficiență' },
                  { title: 'Comunități & Oameni', desc: 'Sprijinirea dezvoltării comunităților și angajaților' },
                ].map((area, index) => (
                  <div key={area.title} className="bg-background p-6 border-l-4 border-primary">
                    <h3 className="font-heading text-xl tracking-wider mb-2">{area.title}</h3>
                    <p className="text-muted-foreground">{area.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Sustenabilitate;

