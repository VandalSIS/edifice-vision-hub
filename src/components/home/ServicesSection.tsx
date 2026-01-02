import { Link } from 'react-router-dom';
import { Building2, Landmark, Factory, ArrowRight } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

const services = [
  {
    icon: Building2,
    title: 'Construcții Rezidențiale',
    description: 'Complexe rezidențiale moderne, case individuale și apartamente de lux cu standarde înalte de calitate.',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop&q=80',
    link: '/activitati',
  },
  {
    icon: Landmark,
    title: 'Construcții Comerciale',
    description: 'Centre comerciale, clădiri de birouri și spații retail care definesc peisajul urban.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&q=80',
    link: '/activitati',
  },
  {
    icon: Factory,
    title: 'Construcții Industriale',
    description: 'Hale industriale, depozite și facilități de producție construite pentru performanță.',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop&q=80',
    link: '/activitati',
  },
];

const ServicesSection = () => {
  const { ref, inView } = useInView({ threshold: 0.2 });

  return (
    <section ref={ref} className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 ${inView ? 'animate-fade-up' : 'opacity-0'}`}>
          <span className="text-primary font-semibold uppercase tracking-widest text-sm">
            Ce Oferim
          </span>
          <h2 className="section-title mt-4">
            Domeniile Noastre
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            De la concept la finalizare, oferim soluții complete pentru toate tipurile de investiții.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-0">
          {services.map((service, index) => (
            <Link
              key={service.title}
              to={service.link}
              className={`group relative overflow-hidden aspect-[4/5] ${
                inView ? 'animate-fade-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${service.image})` }}
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/60 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-95" />

              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-8">
                <service.icon className="w-12 h-12 text-primary mb-4 transition-transform duration-300 group-hover:scale-110" />
                <h3 className="font-heading text-3xl text-background tracking-wider mb-3">
                  {service.title}
                </h3>
                <p className="text-background/70 mb-6 transform translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  {service.description}
                </p>
                <div className="flex items-center gap-2 text-primary font-semibold uppercase text-sm tracking-wider">
                  <span>Află Mai Multe</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
