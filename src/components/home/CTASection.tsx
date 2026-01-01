import { Link } from 'react-router-dom';
import { Phone, Mail, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useInView } from '@/hooks/useInView';

const CTASection = () => {
  const { ref, inView } = useInView({ threshold: 0.3 });

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&h=1080&fit=crop&q=80)',
        }}
      >
        <div className="absolute inset-0 bg-primary/90" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4">
        <div className={`max-w-4xl mx-auto text-center ${inView ? 'animate-fade-up' : 'opacity-0'}`}>
          <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl text-primary-foreground tracking-wider mb-6">
            Pregătit Să Începem?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            Contactați-ne astăzi pentru o consultație gratuită și aflați cum vă putem transforma viziunea în realitate.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Solicită Ofertă Gratuită
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="xl" 
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              asChild
            >
              <a href="tel:+37322123456">
                <Phone className="w-5 h-5 mr-2" />
                Sună Acum
              </a>
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-primary-foreground/70">
            <a 
              href="tel:+37322123456" 
              className="flex items-center gap-2 hover:text-primary-foreground transition-colors"
            >
              <Phone className="w-5 h-5" />
              +373 22 123 456
            </a>
            <a 
              href="mailto:office@megaparc.md" 
              className="flex items-center gap-2 hover:text-primary-foreground transition-colors"
            >
              <Mail className="w-5 h-5" />
              office@megaparc.md
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
