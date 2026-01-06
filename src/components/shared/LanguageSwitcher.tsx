import { useLanguage } from '@/contexts/LanguageContext';
import { Globe } from 'lucide-react';
import { useState } from 'react';

const languages = [
  { code: 'ro', name: 'Română', flag: '🇲🇩' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
] as const;

interface LanguageSwitcherProps {
  variant?: 'light' | 'dark';
}

const LanguageSwitcher = ({ variant = 'light' }: LanguageSwitcherProps) => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const currentLang = languages.find((l) => l.code === language);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 px-3 py-2 text-sm font-medium transition-colors ${
          variant === 'light'
            ? 'text-background hover:text-primary'
            : 'text-foreground hover:text-primary'
        }`}
      >
        <Globe className="w-4 h-4" />
        <span>{currentLang?.flag}</span>
        <span className="hidden sm:inline">{currentLang?.code.toUpperCase()}</span>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 top-full mt-2 bg-background border border-border shadow-lg z-50 min-w-[150px]">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 text-sm transition-colors hover:bg-muted ${
                  language === lang.code ? 'bg-primary/10 text-primary' : 'text-foreground'
                }`}
              >
                <span className="text-lg">{lang.flag}</span>
                <span>{lang.name}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default LanguageSwitcher;

