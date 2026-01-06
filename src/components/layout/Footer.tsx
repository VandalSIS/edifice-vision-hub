import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  const quickLinks = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.about'), href: '/despre-noi' },
    { name: t('nav.activities'), href: '/activitati' },
    { name: t('nav.projects'), href: '/proiecte' },
    { name: t('nav.news'), href: '/stiri' },
    { name: t('nav.sustainability'), href: '/sustenabilitate' },
    { name: t('nav.careers'), href: '/cariere' },
    { name: t('nav.contact'), href: '/contact' },
  ];

  const services = [
    t('services.realEstate'),
    t('services.commercial'),
    t('services.investments'),
    t('activities.hospitality.title'),
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Column */}
          <div className="space-y-6">
            <img 
              src="/logo.png" 
              alt="Megaparc - We build the Future" 
              className="h-16 w-auto"
            />
            <p className="text-secondary-foreground/70 leading-relaxed">
              {t('footer.description')}
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary-foreground/10 flex items-center justify-center transition-all duration-300 hover:bg-primary"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary-foreground/10 flex items-center justify-center transition-all duration-300 hover:bg-primary"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary-foreground/10 flex items-center justify-center transition-all duration-300 hover:bg-primary"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="font-heading text-2xl tracking-wider">{t('footer.quickLinks')}</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-secondary-foreground/70 hover:text-primary transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-2 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="font-heading text-2xl tracking-wider">{t('footer.services')}</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    to="/activitati"
                    className="text-secondary-foreground/70 hover:text-primary transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-2 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="font-heading text-2xl tracking-wider">{t('footer.contact')}</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-secondary-foreground/70">
                  {t('footer.address')}<br />
                  {t('footer.country')}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <a
                    href="tel:+373022835235"
                    className="text-secondary-foreground/70 hover:text-primary transition-colors duration-300 block"
                  >
                    +373 (022) 835-235
                  </a>
                  <a
                    href="tel:+373075803010"
                    className="text-secondary-foreground/70 hover:text-primary transition-colors duration-300"
                  >
                    +373 (075) 803 010
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:office@imc.md"
                  className="text-secondary-foreground/70 hover:text-primary transition-colors duration-300"
                >
                  office@imc.md
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-secondary-foreground/70">
                  {t('footer.schedule')}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-secondary-foreground/50 text-sm">
              © {currentYear} Megaparc. {t('footer.rights')}
            </p>
            <div className="flex gap-6 text-sm">
              <Link
                to="/privacy"
                className="text-secondary-foreground/50 hover:text-primary transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                to="/termeni"
                className="text-secondary-foreground/50 hover:text-primary transition-colors duration-300"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
