import Layout from '@/components/layout/Layout';
import PageHero from '@/components/shared/PageHero';
import { useInView } from '@/hooks/useInView';
import { Briefcase, Heart, GraduationCap, DollarSign, Shield, Users, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';

const jobs = [
  { title: 'Inginer Constructor Senior', department: 'Tehnic', type: 'Full-time', description: 'Coordonarea proiectelor de construcții și supravegherea echipelor tehnice.' },
  { title: 'Arhitect Proiecte', department: 'Design', type: 'Full-time', description: 'Proiectarea și dezvoltarea conceptelor arhitecturale pentru proiecte noi.' },
  { title: 'Manager de Șantier', department: 'Operațiuni', type: 'Full-time', description: 'Gestionarea activităților zilnice pe șantier și coordonarea resurselor.' },
  { title: 'Tehnician Topograf', department: 'Tehnic', type: 'Full-time', description: 'Efectuarea măsurătorilor topografice și întocmirea documentației tehnice.' },
  { title: 'Specialist Achiziții', department: 'Administrativ', type: 'Full-time', description: 'Gestionarea procesului de achiziții și negocierea cu furnizorii.' },
  { title: 'Contabil', department: 'Financiar', type: 'Full-time', description: 'Gestionarea operațiunilor contabile și raportarea financiară.' },
];

const Cariere = () => {
  const { ref, inView } = useInView();
  const [openJob, setOpenJob] = useState<number | null>(null);
  const { t } = useLanguage();

  const benefits = [
    { icon: DollarSign, title: t('careers.why.benefits'), description: t('careers.why.benefits.desc') },
    { icon: Heart, title: t('careers.why.culture'), description: t('careers.why.culture.desc') },
    { icon: GraduationCap, title: t('careers.why.growth'), description: t('careers.why.growth.desc') },
    { icon: Shield, title: t('about.values.integrity'), description: t('about.values.integrity.desc') },
    { icon: Briefcase, title: t('about.values.excellence'), description: t('about.values.excellence.desc') },
    { icon: Users, title: t('about.values.responsibility'), description: t('about.values.responsibility.desc') },
  ];

  return (
    <>
      <Helmet>
        <title>{t('careers.hero.title')} - Megaparc | IMC Group</title>
        <meta name="description" content={t('careers.hero.subtitle')} />
      </Helmet>
      <Layout>
        <PageHero
          title={t('careers.hero.title')}
          subtitle={t('careers.hero.subtitle')}
          image="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&h=1080&fit=crop&q=80"
          breadcrumb={[{ label: t('common.home'), href: '/' }, { label: t('nav.careers') }]}
        />

        {/* Benefits */}
        <section ref={ref} className="py-24 bg-muted">
          <div className="container mx-auto px-4">
            <div className={`text-center mb-16 ${inView ? 'animate-fade-up' : 'opacity-0'}`}>
              <span className="text-primary font-semibold uppercase tracking-widest text-sm">{t('careers.why.title')}</span>
              <h2 className="section-title mt-4">{t('careers.why.benefits')}</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((b, i) => (
                <div key={i} className={`bg-background p-8 ${inView ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: `${i * 100}ms` }}>
                  <b.icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="font-heading text-xl tracking-wider mb-2">{b.title}</h3>
                  <p className="text-muted-foreground text-sm">{b.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-primary font-semibold uppercase tracking-widest text-sm">{t('careers.openings')}</span>
              <h2 className="section-title mt-4">{t('careers.openings')}</h2>
            </div>
            <div className="max-w-3xl mx-auto space-y-4">
              {jobs.map((job, i) => (
                <div key={i} className="border border-border">
                  <button onClick={() => setOpenJob(openJob === i ? null : i)} className="w-full p-6 flex items-center justify-between text-left hover:bg-muted transition-colors">
                    <div>
                      <h3 className="font-heading text-xl tracking-wider">{job.title}</h3>
                      <p className="text-muted-foreground text-sm">{job.department} • {job.type}</p>
                    </div>
                    <ChevronDown className={`w-5 h-5 transition-transform ${openJob === i ? 'rotate-180' : ''}`} />
                  </button>
                  {openJob === i && (
                    <div className="px-6 pb-6">
                      <p className="text-muted-foreground mb-4">{job.description}</p>
                      <Button asChild><a href="mailto:hr@megaparc.md">{t('careers.apply')}</a></Button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Cariere;
