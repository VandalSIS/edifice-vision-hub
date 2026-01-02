import Layout from '@/components/layout/Layout';
import PageHero from '@/components/shared/PageHero';
import { useInView } from '@/hooks/useInView';
import { Helmet } from 'react-helmet-async';

const timelineEvents = [
  {
    year: '1995',
    title: 'Înființarea Megaparc',
    description: 'Fondarea companiei cu viziunea de a deveni lider în investiții imobiliare în Moldova.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop&q=80',
  },
  {
    year: '2000',
    title: 'Prima Investiție Majoră',
    description: 'Investiție de 5 milioane euro în primul complex rezidențial premium din centrul Chișinăului.',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop&q=80',
  },
  {
    year: '2005',
    title: 'Diversificare Portofoliu',
    description: 'Extinderea investițiilor în sectorul comercial și industrial, cu randamente de peste 15% anual.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop&q=80',
  },
  {
    year: '2010',
    title: 'Parteneriate Strategice',
    description: 'Atragerea investitorilor internaționali și formarea de parteneriate pentru proiecte de anvergură.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop&q=80',
  },
  {
    year: '2015',
    title: '100 Milioane Euro Investiți',
    description: 'Atingerea pragului de 100 milioane euro în investiții cumulate pe piața imobiliară.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&h=400&fit=crop&q=80',
  },
  {
    year: '2018',
    title: 'Fond de Investiții Propriu',
    description: 'Lansarea fondului de investiții Megaparc Capital pentru oportunități imobiliare exclusive.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop&q=80',
  },
  {
    year: '2020',
    title: 'Investiții Sustenabile',
    description: 'Focusare pe investiții în proiecte verzi și eficiente energetic cu potențial de creștere.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop&q=80',
  },
  {
    year: '2025',
    title: 'Lider în Investiții',
    description: 'Cel mai mare portofoliu de investiții imobiliare din Moldova cu 500+ proiecte și 250M€ active.',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=400&fit=crop&q=80',
  },
];

const TimelineItem = ({ event, index }: { event: typeof timelineEvents[0]; index: number }) => {
  const { ref, inView } = useInView({ threshold: 0.3 });
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`relative flex flex-col md:flex-row items-center gap-8 ${
        isEven ? 'md:flex-row' : 'md:flex-row-reverse'
      } ${inView ? 'animate-fade-up' : 'opacity-0'}`}
    >
      {/* Content */}
      <div className={`flex-1 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
        <div className={`bg-background p-8 shadow-card ${isEven ? 'md:mr-8' : 'md:ml-8'}`}>
          <span className="font-heading text-5xl text-primary">{event.year}</span>
          <h3 className="font-heading text-2xl tracking-wider mt-2 mb-3">{event.title}</h3>
          <p className="text-muted-foreground">{event.description}</p>
        </div>
      </div>

      {/* Center Dot */}
      <div className="hidden md:flex w-6 h-6 bg-primary rounded-full flex-shrink-0 z-10 relative">
        <div className="absolute inset-0 bg-primary animate-ping opacity-20 rounded-full" />
      </div>

      {/* Image */}
      <div className="flex-1">
        <img
          src={event.image}
          alt={event.title}
          className={`w-full aspect-video object-cover ${isEven ? 'md:ml-8' : 'md:mr-8'}`}
          loading="lazy"
        />
      </div>
    </div>
  );
};

const Istorie = () => {
  return (
    <>
      <Helmet>
        <title>Istoria Noastră - Megaparc | 30+ Ani în Imobiliare și Investiții</title>
        <meta name="description" content="Descoperiți povestea Megaparc - de la înființare în 1995 până la poziția de lider pe piața imobiliară din Moldova." />
      </Helmet>
      <Layout>
        <PageHero
          title="Istoria Noastră"
          subtitle="Trei decenii de excelență în imobiliare și investiții"
          image="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&h=1080&fit=crop&q=80"
          breadcrumb={[
            { label: 'Acasă', href: '/' },
            { label: 'Istorie' },
          ]}
        />

        {/* Timeline */}
        <section className="py-24 bg-muted">
          <div className="container mx-auto px-4">
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-20">
              <span className="text-primary font-semibold uppercase tracking-widest text-sm">
                Istoria Investițiilor Noastre
              </span>
              <h2 className="section-title mt-4">30 de Ani de Succes</h2>
              <p className="section-subtitle mx-auto mt-4">
                O călătorie de investiții inteligente și creștere continuă a portofoliului
              </p>
            </div>

            {/* Timeline */}
            <div className="relative">
              {/* Vertical Line */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

              {/* Timeline Items */}
              <div className="space-y-16">
                {timelineEvents.map((event, index) => (
                  <TimelineItem key={event.year} event={event} index={index} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Istorie;
