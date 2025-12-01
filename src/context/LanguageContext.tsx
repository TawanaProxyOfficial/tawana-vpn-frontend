import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import type { ReactNode } from 'react';
import type { Language } from '../types';
import { translations } from '../data/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('language') as Language;
      if (saved) return saved;
    }
    return 'fa';
  });

  useEffect(() => {
    const html = document.documentElement;
    html.lang = language;
    html.dir = language === 'fa' ? 'rtl' : 'ltr';
    localStorage.setItem('language', language);
  }, [language]);

  const toggleLanguage = useCallback(() => {
    setLanguage((prev) => (prev === 'fa' ? 'en' : 'fa'));
  }, []);

  const t = useCallback(
    (key: string): string => {
      const keys = key.split('.');
      let value: unknown = translations[language];
      for (const k of keys) {
        if (value && typeof value === 'object' && k in value) {
          value = (value as Record<string, unknown>)[k];
        } else {
          return key;
        }
      }
      return typeof value === 'string' ? value : key;
    },
    [language]
  );

  return (
    <LanguageContext.Provider 
      value={{ language, setLanguage, toggleLanguage, t, isRTL: language === 'fa' }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguageContext() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguageContext must be used within a LanguageProvider');
  }
  return context;
}
