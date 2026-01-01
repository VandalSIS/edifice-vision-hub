import { Link } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useInView } from '@/hooks/useInView';

const projects = [
  {
    id: 1,
    title: 'Complex Rezidențial Parcul Verde',
    location: 'Chișinău',
    category: 'Rezidențial',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop&q=80',
  },
  {
    id: 2,
    title: 'Centru Comercial Central Plaza',
    location: 'Chișinău',
    category: 'Comercial',
    image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?w=800&h=600&fit=crop&q=80',
  },
  {
    id: 3,
    title: 'Clădire Birouri TechHub',
    location: 'Chișinău',
    category: 'Comercial',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop&q=80',
  },
  {
    id: 4,
    title: 'Hală Industrială LogiPark',
    location: 'Bălți',
    category: 'Industrial',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop&q=80',
  },
  {
    id: 5,
    title: 'Ansamblu Rezidențial Sunset',
    location: 'Chișinău',
    category: 'Rezidențial',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop&q=80',
  },
  {
    id: 6,
    title: 'Complex Comercial Metro',
    location: 'Chișinău',
    category: 'Comercial',
    image: 'https://images.unsplash.com/photo-1554224311-beee460201e4?w=800&h=600&fit=crop&q=80',
  },
];

const ProjectsPreview = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section ref={ref} className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 ${inView ? 'animate-fade-up' : 'opacity-0'}`}>
          <div>
            <span className="text-primary font-semibold uppercase tracking-widest text-sm">
              Portofoliu
            </span>
            <h2 className="section-title mt-4">
              Proiecte Recente
            </h2>
          </div>
          <Button variant="outline" asChild>
            <Link to="/proiecte">
              Vezi Toate Proiectele
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
                  <span className="font-semibold uppercase text-sm tracking-wider">Vezi Detalii</span>
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
