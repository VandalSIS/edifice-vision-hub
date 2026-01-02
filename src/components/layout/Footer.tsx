import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Clock } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

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
              Construim viitorul împreună. Cu peste 30 de ani de experiență în construcții 
              rezidențiale, comerciale și industriale, suntem partenerul de încredere pentru 
              proiectele dumneavoastră.
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
            <h3 className="font-heading text-2xl tracking-wider">Link-uri Rapide</h3>
            <ul className="space-y-3">
              {[
                { name: 'Acasă', href: '/' },
                { name: 'Despre Noi', href: '/despre-noi' },
                { name: 'Activități', href: '/activitati' },
                { name: 'Proiecte', href: '/proiecte' },
                { name: 'Știri', href: '/stiri' },
                { name: 'Cariere', href: '/cariere' },
                { name: 'Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.name}>
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
            <h3 className="font-heading text-2xl tracking-wider">Servicii</h3>
            <ul className="space-y-3">
              {[
                'Construcții Rezidențiale',
                'Construcții Comerciale',
                'Construcții Industriale',
                'Renovări și Modernizări',
                'Închirieri Spații',
                'Consultanță Investiții',
              ].map((service) => (
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
            <h3 className="font-heading text-2xl tracking-wider">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-secondary-foreground/70">
                  Str. Constructorilor 45,<br />
                  Chișinău, Moldova
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="tel:+37322123456"
                  className="text-secondary-foreground/70 hover:text-primary transition-colors duration-300"
                >
                  +373 22 123 456
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:office@megaparc.md"
                  className="text-secondary-foreground/70 hover:text-primary transition-colors duration-300"
                >
                  office@megaparc.md
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-secondary-foreground/70">
                  Luni - Vineri: 9:00 - 18:00
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
              © {currentYear} Megaparc. Toate drepturile rezervate.
            </p>
            <div className="flex gap-6 text-sm">
              <Link
                to="/privacy"
                className="text-secondary-foreground/50 hover:text-primary transition-colors duration-300"
              >
                Politica de Confidențialitate
              </Link>
              <Link
                to="/termeni"
                className="text-secondary-foreground/50 hover:text-primary transition-colors duration-300"
              >
                Termeni și Condiții
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
