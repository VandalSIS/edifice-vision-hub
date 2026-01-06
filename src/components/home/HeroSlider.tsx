import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const { t } = useLanguage();

  const slides = [
    {
      image: '/DJI_20251217161152_0086_D.jpg',
      title: t('hero.slide1.title'),
      subtitle: t('hero.slide1.subtitle'),
      description: t('hero.slide1.desc'),
    },
    {
      image: '/DJI_20251218172052_0196_D.jpg',
      title: t('hero.slide2.title'),
      subtitle: t('hero.slide2.subtitle'),
      description: t('hero.slide2.desc'),
    },
    {
      image: '/DJI_20251217194507_0171_D.jpg',
      title: t('hero.slide3.title'),
      subtitle: t('hero.slide3.subtitle'),
      description: t('hero.slide3.desc'),
    },
    {
      image: '/DJI_20251217190215_0134_D.jpg',
      title: t('hero.slide4.title'),
      subtitle: t('hero.slide4.subtitle'),
      description: t('hero.slide4.desc'),
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsAnimating(false), 800);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsAnimating(false), 800);
  };

  return (
    <section className="relative h-[75vh] min-h-[550px] max-h-[700px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-out ${
            index === currentSlide
              ? 'opacity-100 scale-100'
              : 'opacity-0 scale-105'
          }`}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/70 to-transparent" />
          </div>

          {/* Content */}
          <div className="relative h-full container mx-auto px-4 flex items-end pb-24">
            <div className="max-w-2xl">
              <div
                className={`space-y-5 ${
                  index === currentSlide ? 'animate-fade-up' : ''
                }`}
              >
                <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-background tracking-wider leading-none">
                  {slide.title}
                  <br />
                  <span className="text-primary">{slide.subtitle}</span>
                </h1>
                <p className="text-lg md:text-xl text-background/80 max-w-xl">
                  {slide.description}
                </p>
                <div className="flex flex-wrap gap-4 pt-3">
                  <Button variant="hero" size="lg" asChild>
                    <Link to="/proiecte">{t('hero.viewProjects')}</Link>
                  </Button>
                  <Button variant="outline" size="lg" className="border-background text-background hover:bg-background hover:text-secondary" asChild>
                    <Link to="/contact">{t('hero.learnMore')}</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-background/10 backdrop-blur-sm border border-background/20 flex items-center justify-center text-background transition-all duration-300 hover:bg-primary hover:border-primary"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-background/10 backdrop-blur-sm border border-background/20 flex items-center justify-center text-background transition-all duration-300 hover:bg-primary hover:border-primary"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1 transition-all duration-500 ${
              index === currentSlide ? 'w-12 bg-primary' : 'w-6 bg-background/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 hidden md:flex flex-col items-center gap-2 text-background/60">
        <span className="text-xs uppercase tracking-widest rotate-90 origin-center translate-y-8">
          Scroll
        </span>
        <div className="w-px h-16 bg-background/30 relative overflow-hidden">
          <div className="absolute top-0 w-full h-1/2 bg-primary animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
