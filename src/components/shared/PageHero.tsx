import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  image: string;
  breadcrumb: { label: string; href?: string }[];
}

const PageHero = ({ title, subtitle, image, breadcrumb }: PageHeroProps) => {
  return (
    <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/70 to-secondary/30" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 pb-16">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm mb-6 animate-fade-up">
          {breadcrumb.map((item, index) => (
            <span key={index} className="flex items-center gap-2">
              {item.href ? (
                <Link 
                  to={item.href} 
                  className="text-background/70 hover:text-background transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-primary font-medium">{item.label}</span>
              )}
              {index < breadcrumb.length - 1 && (
                <ChevronRight className="w-4 h-4 text-background/50" />
              )}
            </span>
          ))}
        </nav>

        {/* Title */}
        <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-background tracking-wider animate-fade-up">
          {title}
        </h1>
        
        {subtitle && (
          <p className="text-xl text-background/80 mt-4 max-w-2xl animate-fade-up delay-100">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};

export default PageHero;
