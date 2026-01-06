import Layout from '@/components/layout/Layout';
import PageHero from '@/components/shared/PageHero';
import { useInView } from '@/hooks/useInView';
import { Target, Eye, Heart, Shield, Award, Users } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';

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
  const { t } = useLanguage();

  const values = [
    {
      icon: Shield,
      title: t('about.values.integrity'),
      description: t('about.values.integrity.desc'),
    },
    {
      icon: Heart,
      title: t('about.values.excellence'),
      description: t('about.values.excellence.desc'),
    },
    {
      icon: Award,
      title: t('about.values.innovation'),
      description: t('about.values.innovation.desc'),
    },
    {
      icon: Users,
      title: t('about.values.responsibility'),
      description: t('about.values.responsibility.desc'),
    },
  ];

  return (
    <>
      <Helmet>
        <title>{t('about.hero.title')} - Megaparc | IMC Group</title>
        <meta name="description" content={t('about.hero.subtitle')} />
      </Helmet>
      <Layout>
        <PageHero
          title={t('about.hero.title')}
          subtitle={t('about.hero.subtitle')}
          image="/DJI_20251217161152_0086_D.jpg"
          breadcrumb={[
            { label: t('common.home'), href: '/' },
            { label: t('about.hero.title') },
          ]}
        />

        {/* Mission & Vision */}
        <section ref={missionRef} className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className={missionInView ? 'animate-slide-right' : 'opacity-0'}>
                <img
                  src="/DSCF2702.JPG"
                  alt="Spații comerciale Megaparc"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
              <div className={`space-y-8 ${missionInView ? 'animate-slide-left' : 'opacity-0'}`}>
                <div>
                  <span className="text-primary font-semibold uppercase tracking-widest text-sm">
                    {t('about.story.label')}
                  </span>
                  <h2 className="section-title mt-4">{t('about.story.title')}</h2>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {t('about.story.p1')}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {t('about.story.p2')}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {t('about.story.p3')}
                </p>
                
                <div className="grid grid-cols-2 gap-8 pt-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary flex items-center justify-center flex-shrink-0">
                      <Target className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl tracking-wider mb-2">{t('about.mission.title')}</h3>
                      <p className="text-muted-foreground text-sm">
                        {t('about.mission.desc')}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary flex items-center justify-center flex-shrink-0">
                      <Eye className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl tracking-wider mb-2">{t('about.vision.title')}</h3>
                      <p className="text-muted-foreground text-sm">
                        {t('about.vision.desc')}
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
                {t('about.values.title')}
              </span>
              <h2 className="section-title mt-4">{t('about.values.title')}</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
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
                {t('team.label')}
              </span>
              <h2 className="section-title mt-4">{t('team.title')}</h2>
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
                ISO
              </span>
              <h2 className="font-heading text-5xl md:text-6xl tracking-wider mt-4">
                Certifications
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
