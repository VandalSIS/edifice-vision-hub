import { Link } from 'react-router-dom';
import { Phone, Mail, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useInView } from '@/hooks/useInView';
import { useLanguage } from '@/contexts/LanguageContext';

const CTASection = () => {
  const { ref, inView } = useInView({ threshold: 0.3 });
  const { t } = useLanguage();

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(/DJI_20251218172052_0196_D.jpg)',
        }}
      >
        <div className="absolute inset-0 bg-primary/90" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4">
        <div className={`max-w-4xl mx-auto text-center ${inView ? 'animate-fade-up' : 'opacity-0'}`}>
          <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl text-primary-foreground tracking-wider mb-6">
            {t('cta.title')}
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            {t('cta.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                {t('cta.sendMessage')}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="xl" 
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              asChild
            >
              <a href="tel:+373022835235">
                <Phone className="w-5 h-5 mr-2" />
                {t('cta.callNow')}
              </a>
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-primary-foreground/70">
            <span>{t('cta.orCall')}:</span>
            <a 
              href="tel:+373022835235" 
              className="flex items-center gap-2 hover:text-primary-foreground transition-colors"
            >
              <Phone className="w-5 h-5" />
              +373 (022) 835-235
            </a>
            <a 
              href="mailto:office@imc.md" 
              className="flex items-center gap-2 hover:text-primary-foreground transition-colors"
            >
              <Mail className="w-5 h-5" />
              office@imc.md
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
