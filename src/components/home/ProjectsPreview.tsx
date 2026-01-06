import { Link } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useInView } from '@/hooks/useInView';
import { useLanguage } from '@/contexts/LanguageContext';

const projects = [
  {
    id: 1,
    title: 'Bulevardul Dacia 31',
    location: 'Chișinău',
    category: 'Comercial',
    image: '/DJI_20251217160951_0083_D.jpg',
  },
  {
    id: 2,
    title: 'Complex Rezidențial Vatra',
    location: 'Vatra',
    category: 'Rezidențial',
    image: '/DJI_20251218172052_0196_D.jpg',
  },
  {
    id: 3,
    title: 'Bulevardul Moscova 9',
    location: 'Chișinău',
    category: 'Comercial',
    image: '/DJI_20251217194507_0171_D.jpg',
  },
  {
    id: 4,
    title: 'Bulevardul Moscova 20',
    location: 'Chișinău',
    category: 'Investiții',
    image: '/DJI_20251217190215_0134_D.jpg',
  },
  {
    id: 5,
    title: 'Florilor',
    location: 'Chișinău',
    category: 'Comercial',
    image: '/DJI_20251217192608_0160_D.jpg',
  },
  {
    id: 6,
    title: 'Spații Comerciale Interior',
    location: 'Chișinău',
    category: 'Comercial',
    image: '/DSCF2702.JPG',
  },
];

const ProjectsPreview = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const { t } = useLanguage();

  return (
    <section ref={ref} className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 ${inView ? 'animate-fade-up' : 'opacity-0'}`}>
          <div>
            <span className="text-primary font-semibold uppercase tracking-widest text-sm">
              {t('projects.label')}
            </span>
            <h2 className="section-title mt-4">
              {t('projects.title')}
            </h2>
          </div>
          <Button variant="outline" asChild>
            <Link to="/proiecte">
              {t('projects.viewAll')}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Link
              key={project.id}
              to="/proiecte"
              className={`group relative overflow-hidden aspect-[4/3] ${
                inView ? 'animate-fade-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/30 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-90" />

              {/* Category Badge */}
              <span className="absolute top-4 left-4 bg-primary text-primary-foreground px-4 py-1 text-xs font-semibold uppercase tracking-wider">
                {project.category}
              </span>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-heading text-2xl text-background tracking-wider mb-2">
                  {project.title}
                </h3>
                <div className="flex items-center gap-2 text-background/70 text-sm">
                  <MapPin className="w-4 h-4" />
                  {project.location}
                </div>

                {/* Hover Arrow */}
                <div className="mt-4 flex items-center gap-2 text-primary opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  <span className="font-semibold uppercase text-sm tracking-wider">{t('projects.viewDetails')}</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPreview;
