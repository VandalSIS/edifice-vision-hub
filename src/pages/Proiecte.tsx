import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import PageHero from '@/components/shared/PageHero';
import { useInView } from '@/hooks/useInView';
import { MapPin, Calendar, Ruler, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';

const projects = [
  {
    id: 1,
    title: 'Bulevardul Dacia 31',
    category: 'Comercial',
    categoryKey: 'commercial',
    location: 'Chișinău',
    year: '2024',
    area: '5,500 mp',
    description: 'Centru comercial modern cu arhitectură contemporană turcoaz. Sediul central IMC Group.',
    images: [
      '/DJI_20251217160951_0083_D.jpg',
      '/DJI_20251217161152_0086_D.jpg',
    ],
  },
  {
    id: 2,
    title: 'Complex Rezidențial Vatra',
    category: 'Rezidențial',
    categoryKey: 'residential',
    location: 'Vatra',
    year: '2024',
    area: '12,000 mp',
    description: 'Complex de vile premium lângă lac cu vedere panoramică și finisaje de lux.',
    images: [
      '/DJI_20251218172052_0196_D.jpg',
    ],
  },
  {
    id: 3,
    title: 'Bulevardul Moscova 9',
    category: 'Comercial',
    categoryKey: 'commercial',
    location: 'Chișinău',
    year: '2023',
    area: '3,200 mp',
    description: 'Centru comercial de cartier cu magazine, restaurant și servicii diverse.',
    images: [
      '/DJI_20251217194507_0171_D.jpg',
    ],
  },
  {
    id: 4,
    title: 'Bulevardul Moscova 20',
    category: 'Investiții',
    categoryKey: 'investments',
    location: 'Chișinău',
    year: '2023',
    area: '2,800 mp',
    description: 'Proiect de dezvoltare și renovare pentru spații comerciale și birouri.',
    images: [
      '/DJI_20251217190215_0134_D.jpg',
    ],
  },
  {
    id: 5,
    title: 'Florilor',
    category: 'Comercial',
    categoryKey: 'commercial',
    location: 'Chișinău',
    year: '2022',
    area: '4,000 mp',
    description: 'Clădire comercială modernă cu spații pentru birouri și retail.',
    images: [
      '/DJI_20251217192608_0160_D.jpg',
    ],
  },
  {
    id: 6,
    title: 'Spații Comerciale Interior',
    category: 'Comercial',
    categoryKey: 'commercial',
    location: 'Chișinău',
    year: '2024',
    area: '1,500 mp',
    description: 'Spații comerciale premium cu finisaje moderne și iluminare naturală.',
    images: [
      '/DSCF2702.JPG',
    ],
  },
];

const Proiecte = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { ref, inView } = useInView();
  const { t } = useLanguage();

  const categories = [
    { key: 'all', label: t('projects.filter.all') },
    { key: 'residential', label: t('projects.filter.residential') },
    { key: 'commercial', label: t('projects.filter.commercial') },
    { key: 'investments', label: t('projects.filter.investments') },
  ];

  const filteredProjects = projects.filter(
    (p) => activeCategory === 'all' || p.categoryKey === activeCategory
  );

  const openModal = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length);
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
    }
  };

  return (
    <>
      <Helmet>
        <title>{t('projects.hero.title')} - Megaparc | IMC Group</title>
        <meta name="description" content={t('projects.hero.subtitle')} />
      </Helmet>
      <Layout>
        <PageHero
          title={t('projects.hero.title')}
          subtitle={t('projects.hero.subtitle')}
          image="/DJI_20251217161152_0086_D.jpg"
          breadcrumb={[
            { label: t('common.home'), href: '/' },
            { label: t('nav.projects') },
          ]}
        />

        {/* Filter & Projects */}
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

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <div
                  key={project.id}
                  onClick={() => openModal(project)}
                  className={`group cursor-pointer ${inView ? 'animate-fade-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/30 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
                    
                    <span className="absolute top-4 left-4 bg-primary text-primary-foreground px-4 py-1 text-xs font-semibold uppercase tracking-wider">
                      {project.category}
                    </span>

                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="font-heading text-2xl text-background tracking-wider mb-2">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-4 text-background/70 text-sm">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {project.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {project.year}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 bg-secondary/95 flex items-center justify-center p-4" onClick={closeModal}>
            <div 
              className="bg-background max-w-5xl w-full max-h-[90vh] overflow-auto animate-scale-in"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="relative">
                <img
                  src={selectedProject.images[currentImageIndex]}
                  alt={selectedProject.title}
                  className="w-full aspect-video object-cover"
                />
                
                {/* Navigation Arrows */}
                {selectedProject.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/80 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/80 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </>
                )}

                {/* Close Button */}
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 w-10 h-10 bg-background/80 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>

                {/* Image Indicators */}
                {selectedProject.images.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {selectedProject.images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`w-3 h-3 transition-colors ${
                          idx === currentImageIndex ? 'bg-primary' : 'bg-background/50'
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Modal Content */}
              <div className="p-8">
                <span className="text-primary font-semibold uppercase tracking-widest text-sm">
                  {selectedProject.category}
                </span>
                <h2 className="font-heading text-4xl tracking-wider mt-2 mb-4">
                  {selectedProject.title}
                </h2>
                <p className="text-muted-foreground mb-6">{selectedProject.description}</p>

                <div className="grid grid-cols-3 gap-4">
                  <div className="border border-border p-4">
                    <MapPin className="w-5 h-5 text-primary mb-2" />
                    <span className="text-sm text-muted-foreground">{t('projects.location')}</span>
                    <p className="font-semibold">{selectedProject.location}</p>
                  </div>
                  <div className="border border-border p-4">
                    <Calendar className="w-5 h-5 text-primary mb-2" />
                    <span className="text-sm text-muted-foreground">{t('projects.year')}</span>
                    <p className="font-semibold">{selectedProject.year}</p>
                  </div>
                  <div className="border border-border p-4">
                    <Ruler className="w-5 h-5 text-primary mb-2" />
                    <span className="text-sm text-muted-foreground">{t('projects.area')}</span>
                    <p className="font-semibold">{selectedProject.area}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Layout>
    </>
  );
};

export default Proiecte;
