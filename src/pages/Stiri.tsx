import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import PageHero from '@/components/shared/PageHero';
import { useInView } from '@/hooks/useInView';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';

const news = [
  {
    id: 1,
    title: 'Creștere Record pe Piața Imobiliară din Moldova în 2025',
    category: 'Piața',
    categoryKey: 'news.filter.market',
    date: '28 Decembrie 2025',
    readTime: '5 min',
    excerpt: 'Piața imobiliară din Moldova înregistrează o creștere de 15% față de anul precedent, cu cerere crescută pentru locuințe noi în Chișinău și Bălți.',
    image: '/DJI_20251217161152_0086_D.jpg',
    featured: true,
  },
  {
    id: 2,
    title: 'Megaparc Anunță Noi Investiții de 50 Milioane Euro',
    category: 'Companie',
    categoryKey: 'news.filter.company',
    date: '22 Decembrie 2025',
    readTime: '4 min',
    excerpt: 'Compania Megaparc planifică investiții majore în dezvoltarea de noi complexuri rezidențiale și comerciale în următorii 3 ani.',
    image: '/DJI_20251218172052_0196_D.jpg',
    featured: true,
  },
  {
    id: 3,
    title: 'Ghid Complet: Cum să Investești în Imobiliare în 2026',
    category: 'Investiții',
    categoryKey: 'news.filter.investments',
    date: '18 Decembrie 2025',
    readTime: '8 min',
    excerpt: 'Descoperiți cele mai bune strategii pentru investiții imobiliare în Moldova, de la apartamente pentru închiriere până la proprietăți comerciale.',
    image: '/DJI_20251217194507_0171_D.jpg',
    featured: false,
  },
  {
    id: 4,
    title: 'Nou Complex Rezidențial în Centrul Chișinăului',
    category: 'Imobiliare',
    categoryKey: 'news.filter.realEstate',
    date: '15 Decembrie 2025',
    readTime: '3 min',
    excerpt: 'Megaparc lansează un nou proiect rezidențial premium cu 200 de apartamente și facilități moderne în inima capitalei.',
    image: '/DJI_20251217190215_0134_D.jpg',
    featured: false,
  },
  {
    id: 5,
    title: 'Tendințe în Designul Interior pentru 2026',
    category: 'Imobiliare',
    categoryKey: 'news.filter.realEstate',
    date: '10 Decembrie 2025',
    readTime: '6 min',
    excerpt: 'Explorați cele mai noi tendințe în amenajarea interioarelor pentru apartamente și case, de la minimalism la stilul industrial.',
    image: '/DSCF2771.JPG',
    featured: false,
  },
  {
    id: 6,
    title: 'Avantajele Investițiilor în Proprietăți Comerciale',
    category: 'Investiții',
    categoryKey: 'news.filter.investments',
    date: '5 Decembrie 2025',
    readTime: '5 min',
    excerpt: 'De ce proprietățile comerciale reprezintă o oportunitate excelentă pentru diversificarea portofoliului de investiții.',
    image: '/DJI_20251217192608_0160_D.jpg',
    featured: false,
  },
  {
    id: 7,
    title: 'Impactul Infrastructurii asupra Valorii Imobilelor',
    category: 'Piața',
    categoryKey: 'news.filter.market',
    date: '1 Decembrie 2025',
    readTime: '4 min',
    excerpt: 'Cum noile proiecte de infrastructură din Moldova influențează prețurile proprietăților în zonele adiacente.',
    image: '/DJI_20251217160951_0083_D.jpg',
    featured: false,
  },
  {
    id: 8,
    title: 'Megaparc Premiată pentru Excelență în Construcții',
    category: 'Companie',
    categoryKey: 'news.filter.company',
    date: '25 Noiembrie 2025',
    readTime: '3 min',
    excerpt: 'Compania noastră a primit premiul pentru calitate și inovație la Gala Construcțiilor din Moldova 2025.',
    image: '/DSCF2702.JPG',
    featured: false,
  },
  {
    id: 9,
    title: 'Finanțarea Achiziției unei Locuințe: Opțiuni și Sfaturi',
    category: 'Investiții',
    categoryKey: 'news.filter.investments',
    date: '20 Noiembrie 2025',
    readTime: '7 min',
    excerpt: 'Tot ce trebuie să știți despre creditele ipotecare, programele guvernamentale și alte opțiuni de finanțare pentru achiziția unei locuințe.',
    image: '/DJI_20251218172052_0196_D.jpg',
    featured: false,
  },
  {
    id: 10,
    title: 'Zonele cu Cel Mai Mare Potențial de Creștere în Chișinău',
    category: 'Piața',
    categoryKey: 'news.filter.market',
    date: '15 Noiembrie 2025',
    readTime: '5 min',
    excerpt: 'Analiză detaliată a cartierelor din Chișinău cu cel mai mare potențial de apreciere a valorii imobiliare în următorii ani.',
    image: '/DJI_20251217161152_0086_D.jpg',
    featured: false,
  },
  {
    id: 11,
    title: 'Sustenabilitate în Construcții: Viitorul este Verde',
    category: 'Imobiliare',
    categoryKey: 'news.filter.realEstate',
    date: '10 Noiembrie 2025',
    readTime: '6 min',
    excerpt: 'Cum Megaparc integrează tehnologii verzi și materiale sustenabile în proiectele de construcții pentru un viitor mai verde.',
    image: '/DJI_20251217194507_0171_D.jpg',
    featured: false,
  },
  {
    id: 12,
    title: 'Apartament sau Casă? Ghid pentru Alegerea Potrivită',
    category: 'Imobiliare',
    categoryKey: 'news.filter.realEstate',
    date: '5 Noiembrie 2025',
    readTime: '5 min',
    excerpt: 'Factori importanți de luat în considerare atunci când alegeți între un apartament și o casă în Moldova.',
    image: '/DJI_20251217190215_0134_D.jpg',
    featured: false,
  },
];

const Stiri = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const { ref, inView } = useInView();
  const { t } = useLanguage();

  const categories = [
    { key: 'all', label: t('news.filter.all') },
    { key: 'realEstate', label: t('news.filter.realEstate') },
    { key: 'investments', label: t('news.filter.investments') },
    { key: 'market', label: t('news.filter.market') },
    { key: 'company', label: t('news.filter.company') },
  ];

  const categoryMapping: Record<string, string> = {
    'Imobiliare': 'realEstate',
    'Investiții': 'investments',
    'Piața': 'market',
    'Companie': 'company',
  };

  const filteredNews = news.filter(
    (item) => activeCategory === 'all' || categoryMapping[item.category] === activeCategory
  );

  const featuredNews = filteredNews.filter((item) => item.featured);
  const regularNews = filteredNews.filter((item) => !item.featured);

  return (
    <>
      <Helmet>
        <title>{t('news.hero.title')} - Megaparc | IMC Group</title>
        <meta name="description" content={t('news.hero.subtitle')} />
      </Helmet>
      <Layout>
        <PageHero
          title={t('news.hero.title')}
          subtitle={t('news.hero.subtitle')}
          image="/DJI_20251217160951_0083_D.jpg"
          breadcrumb={[
            { label: t('common.home'), href: '/' },
            { label: t('nav.news') },
          ]}
        />

        {/* News Section */}
        <section ref={ref} className="py-24 bg-background">
          <div className="container mx-auto px-4">
            {/* Category Filter */}
            <div className={`flex flex-wrap justify-center gap-4 mb-16 ${inView ? 'animate-fade-up' : 'opacity-0'}`}>
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`px-6 py-3 font-semibold uppercase text-sm tracking-wider transition-all duration-300 ${
                    activeCategory === cat.key
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground hover:bg-secondary hover:text-secondary-foreground'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Featured News */}
            {featuredNews.length > 0 && (
              <div className="grid md:grid-cols-2 gap-8 mb-16">
                {featuredNews.map((item, index) => (
                  <article
                    key={item.id}
                    className={`group cursor-pointer ${inView ? 'animate-fade-up' : 'opacity-0'}`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="relative overflow-hidden aspect-[16/10]">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/40 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
                      
                      <span className="absolute top-4 left-4 bg-primary text-primary-foreground px-4 py-1 text-xs font-semibold uppercase tracking-wider">
                        {item.category}
                      </span>

                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <div className="flex items-center gap-4 text-background/70 text-sm mb-3">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {item.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {item.readTime}
                          </span>
                        </div>
                        <h2 className="font-heading text-2xl md:text-3xl text-background tracking-wider mb-2 group-hover:text-primary transition-colors">
                          {item.title}
                        </h2>
                        <p className="text-background/80 line-clamp-2">
                          {item.excerpt}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}

            {/* Regular News Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularNews.map((item, index) => (
                <article
                  key={item.id}
                  className={`group cursor-pointer bg-card border border-border hover:border-primary transition-all duration-300 ${inView ? 'animate-fade-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${(index + featuredNews.length) * 50}ms` }}
                >
                  <div className="relative overflow-hidden aspect-[16/10]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <span className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 text-xs font-semibold uppercase tracking-wider">
                      {item.category}
                    </span>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-muted-foreground text-sm mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {item.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {item.readTime}
                      </span>
                    </div>
                    <h3 className="font-heading text-xl tracking-wider mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                      {item.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wider group-hover:gap-3 transition-all">
                      {t('news.readMore')}
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </article>
              ))}
            </div>

            {/* Load More Button */}
            <div className="text-center mt-16">
              <button className="px-8 py-4 bg-secondary text-secondary-foreground font-semibold uppercase tracking-wider hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                {t('news.loadMore')}
              </button>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-heading text-4xl md:text-5xl text-secondary-foreground tracking-wider mb-4">
              {t('news.newsletter.title')}
            </h2>
            <p className="text-secondary-foreground/70 max-w-2xl mx-auto mb-8">
              {t('news.newsletter.subtitle')}
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder={t('news.newsletter.placeholder')}
                className="flex-1 px-6 py-4 bg-secondary-foreground/10 border border-secondary-foreground/20 text-secondary-foreground placeholder:text-secondary-foreground/50 focus:outline-none focus:border-primary"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-primary text-primary-foreground font-semibold uppercase tracking-wider hover:bg-primary/90 transition-colors"
              >
                {t('news.newsletter.subscribe')}
              </button>
            </form>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Stiri;
