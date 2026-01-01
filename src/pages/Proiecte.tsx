import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import PageHero from '@/components/shared/PageHero';
import { useInView } from '@/hooks/useInView';
import { MapPin, Calendar, Ruler, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Helmet } from 'react-helmet-async';

const categories = ['Toate', 'Rezidențial', 'Comercial', 'Industrial', 'Infrastructură'];

const projects = [
  {
    id: 1,
    title: 'Complex Rezidențial Parcul Verde',
    category: 'Rezidențial',
    location: 'Chișinău',
    year: '2024',
    area: '25,000 mp',
    description: 'Complex modern cu 120 apartamente premium, spații verzi și facilități complete pentru locatari.',
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&h=800&fit=crop&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&h=800&fit=crop&q=80',
    ],
  },
  {
    id: 2,
    title: 'Centru Comercial Central Plaza',
    category: 'Comercial',
    location: 'Chișinău',
    year: '2023',
    area: '15,000 mp',
    description: 'Centru comercial modern cu peste 50 de magazine, cinema și food court.',
    images: [
      'https://images.unsplash.com/photo-1577495508048-b635879837f1?w=1200&h=800&fit=crop&q=80',
      'https://images.unsplash.com/photo-1554224311-beee460201e4?w=1200&h=800&fit=crop&q=80',
    ],
  },
  {
    id: 3,
    title: 'Clădire Birouri TechHub',
    category: 'Comercial',
    location: 'Chișinău',
    year: '2023',
    area: '12,000 mp',
    description: 'Clădire de birouri clasa A cu 8 etaje, certificare BREEAM și tehnologii smart building.',
    images: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop&q=80',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop&q=80',
    ],
  },
  {
    id: 4,
    title: 'Hală Industrială LogiPark',
    category: 'Industrial',
    location: 'Bălți',
    year: '2022',
    area: '8,000 mp',
    description: 'Hală logistică modernă cu docuri de încărcare și sisteme de management automatizat.',
    images: [
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&h=800&fit=crop&q=80',
      'https://images.unsplash.com/photo-1590846083693-f23fdede3a7e?w=1200&h=800&fit=crop&q=80',
    ],
  },
  {
    id: 5,
    title: 'Ansamblu Rezidențial Sunset',
    category: 'Rezidențial',
    location: 'Chișinău',
    year: '2022',
    area: '18,000 mp',
    description: 'Ansamblu de vile premium cu design contemporan și grădini private.',
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&h=800&fit=crop&q=80',
      'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1200&h=800&fit=crop&q=80',
    ],
  },
  {
    id: 6,
    title: 'Complex Comercial Metro',
    category: 'Comercial',
    location: 'Chișinău',
    year: '2021',
    area: '20,000 mp',
    description: 'Complex multifuncțional cu retail, birouri și spații de entertainment.',
    images: [
      'https://images.unsplash.com/photo-1554224311-beee460201e4?w=1200&h=800&fit=crop&q=80',
      'https://images.unsplash.com/photo-1577495508048-b635879837f1?w=1200&h=800&fit=crop&q=80',
    ],
  },
  {
    id: 7,
    title: 'Depozit Frigorific Arctic',
    category: 'Industrial',
    location: 'Orhei',
    year: '2021',
    area: '5,000 mp',
    description: 'Depozit frigorific industrial cu capacitate de 10,000 tone și sisteme de răcire eficiente.',
    images: [
      'https://images.unsplash.com/photo-1590846083693-f23fdede3a7e?w=1200&h=800&fit=crop&q=80',
      'https://images.unsplash.com/photo-1565008576549-57569a49371d?w=1200&h=800&fit=crop&q=80',
    ],
  },
  {
    id: 8,
    title: 'Pod Rutier Prut',
    category: 'Infrastructură',
    location: 'Ungheni',
    year: '2020',
    area: '450 m lungime',
    description: 'Pod rutier modern peste râul Prut cu 4 benzi de circulație.',
    images: [
      'https://images.unsplash.com/photo-1599586120429-48281b6f0ece?w=1200&h=800&fit=crop&q=80',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=800&fit=crop&q=80',
    ],
  },
  {
    id: 9,
    title: 'Bloc Rezidențial Aurora',
    category: 'Rezidențial',
    location: 'Chișinău',
    year: '2020',
    area: '14,000 mp',
    description: 'Bloc rezidențial cu 80 apartamente, parcare subterană și spații comerciale la parter.',
    images: [
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&h=800&fit=crop&q=80',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&h=800&fit=crop&q=80',
    ],
  },
  {
    id: 10,
    title: 'Fabrica Agroalimentar Plus',
    category: 'Industrial',
    location: 'Cahul',
    year: '2019',
    area: '6,500 mp',
    description: 'Fabrică de procesare agroalimentară cu linii de producție automatizate.',
    images: [
      'https://images.unsplash.com/photo-1565008576549-57569a49371d?w=1200&h=800&fit=crop&q=80',
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&h=800&fit=crop&q=80',
    ],
  },
  {
    id: 11,
    title: 'Hotel Boutique Central',
    category: 'Comercial',
    location: 'Chișinău',
    year: '2019',
    area: '4,500 mp',
    description: 'Hotel boutique de 4 stele cu 45 camere și restaurant panoramic.',
    images: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop&q=80',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop&q=80',
    ],
  },
  {
    id: 12,
    title: 'Reabilitare Drum Național M2',
    category: 'Infrastructură',
    location: 'Bălți - Chișinău',
    year: '2018',
    area: '35 km',
    description: 'Modernizarea și extinderea drumului național cu benzi suplimentare.',
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=800&fit=crop&q=80',
      'https://images.unsplash.com/photo-1599586120429-48281b6f0ece?w=1200&h=800&fit=crop&q=80',
    ],
  },
];

const Proiecte = () => {
  const [activeCategory, setActiveCategory] = useState('Toate');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { ref, inView } = useInView();

  const filteredProjects = projects.filter(
    (p) => activeCategory === 'Toate' || p.category === activeCategory
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
        <title>Proiecte - Megaparc | Portofoliu Construcții Moldova</title>
        <meta name="description" content="Explorați portofoliul Megaparc - peste 500 de proiecte finalizate în construcții rezidențiale, comerciale și industriale în Moldova." />
      </Helmet>
      <Layout>
        <PageHero
          title="Proiectele Noastre"
          subtitle="Peste 500 de proiecte care definesc peisajul urban al Moldovei"
          image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop&q=80"
          breadcrumb={[
            { label: 'Acasă', href: '/' },
            { label: 'Proiecte' },
          ]}
        />

        {/* Filter & Projects */}
        <section ref={ref} className="py-24 bg-background">
          <div className="container mx-auto px-4">
            {/* Category Filter */}
            <div className={`flex flex-wrap justify-center gap-4 mb-16 ${inView ? 'animate-fade-up' : 'opacity-0'}`}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-3 font-semibold uppercase text-sm tracking-wider transition-all duration-300 ${
                    activeCategory === cat
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground hover:bg-secondary hover:text-secondary-foreground'
                  }`}
                >
                  {cat}
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
                    <span className="text-sm text-muted-foreground">Locație</span>
                    <p className="font-semibold">{selectedProject.location}</p>
                  </div>
                  <div className="border border-border p-4">
                    <Calendar className="w-5 h-5 text-primary mb-2" />
                    <span className="text-sm text-muted-foreground">An</span>
                    <p className="font-semibold">{selectedProject.year}</p>
                  </div>
                  <div className="border border-border p-4">
                    <Ruler className="w-5 h-5 text-primary mb-2" />
                    <span className="text-sm text-muted-foreground">Suprafață</span>
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
