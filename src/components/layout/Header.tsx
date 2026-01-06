import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import LanguageSwitcher from '@/components/shared/LanguageSwitcher';
import { useLanguage } from '@/contexts/LanguageContext';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  const navigation = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.about'), href: '/despre-noi' },
    { name: t('nav.activities'), href: '/activitati' },
    { name: t('nav.projects'), href: '/proiecte' },
    { name: t('nav.news'), href: '/stiri' },
    { name: t('nav.sustainability'), href: '/sustenabilitate' },
    { name: t('nav.careers'), href: '/cariere' },
    { name: t('nav.contact'), href: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-secondary backdrop-blur-md shadow-card py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img 
              src="/logo.png" 
              alt="Megaparc - We build the Future" 
              className="h-14 md:h-16 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`px-4 py-2 text-sm font-medium uppercase tracking-wider transition-all duration-300 relative group ${
                  location.pathname === item.href
                    ? 'text-primary'
                    : isScrolled
                    ? 'text-secondary-foreground hover:text-primary'
                    : 'text-background/90 hover:text-background'
                }`}
              >
                {item.name}
                <span
                  className={`absolute bottom-0 left-4 right-4 h-0.5 bg-primary transform transition-transform duration-300 ${
                    location.pathname === item.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* Contact, Language & Mobile Menu Toggle */}
          <div className="flex items-center gap-2">
            <a
              href="tel:+373022835235"
              className={`hidden md:flex items-center gap-2 text-sm font-medium transition-colors duration-300 ${
                isScrolled ? 'text-secondary-foreground' : 'text-background'
              }`}
            >
              <Phone className="w-4 h-4" />
              +373 (022) 835-235
            </a>

            {/* Language Switcher - visible on all screens */}
            <LanguageSwitcher variant={isScrolled ? 'dark' : 'light'} />

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 transition-colors duration-300 ${
                isScrolled ? 'text-secondary-foreground' : 'text-background'
              }`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            isMobileMenuOpen ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="bg-secondary p-6 space-y-2">
            {navigation.map((item, index) => (
              <Link
                key={item.href}
                to={item.href}
                className={`block py-3 px-4 text-secondary-foreground font-medium uppercase tracking-wider transition-all duration-300 hover:bg-primary hover:text-primary-foreground ${
                  location.pathname === item.href ? 'bg-primary text-primary-foreground' : ''
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-secondary-foreground/20">
              <a
                href="tel:+373022835235"
                className="flex items-center gap-2 py-3 px-4 text-secondary-foreground"
              >
                <Phone className="w-4 h-4" />
                +373 (022) 835-235
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
