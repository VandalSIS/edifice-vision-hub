import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'ro' | 'ru' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  ro: {
    // Navigation
    'nav.home': 'Acasă',
    'nav.about': 'Despre Noi',
    'nav.activities': 'Activități',
    'nav.projects': 'Proiecte',
    'nav.sustainability': 'Sustenabilitate',
    'nav.careers': 'Cariere',
    'nav.contact': 'Contact',
    
    // Home
    'home.hero.title1': 'Investim în',
    'home.hero.subtitle1': 'Viitorul Tău',
    'home.hero.desc1': 'Peste 30 de ani de experiență în imobiliare, investiții și dezvoltare.',
    'home.services.title': 'Domeniile Noastre',
    'home.services.subtitle': 'De la concept la finalizare, oferim soluții complete pentru toate tipurile de investiții.',
    'home.stats.companies': 'Companii în Grup',
    'home.stats.employees': 'Angajați',
    'home.stats.continents': 'Continente',
    'home.stats.years': 'Ani Experiență',
    'home.geography.title': 'Activăm pe 4 Continente',
    'home.geography.subtitle': 'IMC Group își desfășoară activitatea în peste 15 țări din întreaga lume',
    
    // Common
    'common.learnMore': 'Află Mai Multe',
    'common.viewProjects': 'Vezi Proiecte',
    'common.requestOffer': 'Solicită Ofertă',
    'common.sendMessage': 'Trimite Mesaj',
    'common.subscribe': 'Abonează-te',
    
    // Footer
    'footer.description': 'Investim în viitorul tău. Cu peste 30 de ani de experiență în imobiliare și investiții, suntem partenerul de încredere pentru proiectele dumneavoastră.',
    'footer.quickLinks': 'Link-uri Rapide',
    'footer.services': 'Servicii',
    'footer.contact': 'Contact',
    'footer.rights': 'Toate drepturile rezervate.',
  },
  ru: {
    // Navigation
    'nav.home': 'Главная',
    'nav.about': 'О Нас',
    'nav.activities': 'Деятельность',
    'nav.projects': 'Проекты',
    'nav.sustainability': 'Устойчивость',
    'nav.careers': 'Карьера',
    'nav.contact': 'Контакты',
    
    // Home
    'home.hero.title1': 'Инвестируем в',
    'home.hero.subtitle1': 'Ваше Будущее',
    'home.hero.desc1': 'Более 30 лет опыта в недвижимости, инвестициях и развитии.',
    'home.services.title': 'Наши Направления',
    'home.services.subtitle': 'От концепции до завершения, мы предлагаем комплексные решения для всех типов инвестиций.',
    'home.stats.companies': 'Компаний в Группе',
    'home.stats.employees': 'Сотрудников',
    'home.stats.continents': 'Континента',
    'home.stats.years': 'Лет Опыта',
    'home.geography.title': 'Работаем на 4 Континентах',
    'home.geography.subtitle': 'IMC Group ведет деятельность более чем в 15 странах мира',
    
    // Common
    'common.learnMore': 'Узнать Больше',
    'common.viewProjects': 'Смотреть Проекты',
    'common.requestOffer': 'Запросить Предложение',
    'common.sendMessage': 'Отправить Сообщение',
    'common.subscribe': 'Подписаться',
    
    // Footer
    'footer.description': 'Инвестируем в ваше будущее. С более чем 30-летним опытом в недвижимости и инвестициях, мы являемся надежным партнером для ваших проектов.',
    'footer.quickLinks': 'Быстрые Ссылки',
    'footer.services': 'Услуги',
    'footer.contact': 'Контакты',
    'footer.rights': 'Все права защищены.',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.activities': 'Activities',
    'nav.projects': 'Projects',
    'nav.sustainability': 'Sustainability',
    'nav.careers': 'Careers',
    'nav.contact': 'Contact',
    
    // Home
    'home.hero.title1': 'Investing in',
    'home.hero.subtitle1': 'Your Future',
    'home.hero.desc1': 'Over 30 years of experience in real estate, investments and development.',
    'home.services.title': 'Our Domains',
    'home.services.subtitle': 'From concept to completion, we offer complete solutions for all types of investments.',
    'home.stats.companies': 'Group Companies',
    'home.stats.employees': 'Employees',
    'home.stats.continents': 'Continents',
    'home.stats.years': 'Years Experience',
    'home.geography.title': 'Active on 4 Continents',
    'home.geography.subtitle': 'IMC Group operates in over 15 countries worldwide',
    
    // Common
    'common.learnMore': 'Learn More',
    'common.viewProjects': 'View Projects',
    'common.requestOffer': 'Request Offer',
    'common.sendMessage': 'Send Message',
    'common.subscribe': 'Subscribe',
    
    // Footer
    'footer.description': 'Investing in your future. With over 30 years of experience in real estate and investments, we are the trusted partner for your projects.',
    'footer.quickLinks': 'Quick Links',
    'footer.services': 'Services',
    'footer.contact': 'Contact',
    'footer.rights': 'All rights reserved.',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('ro');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

