import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'zh' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (zh: string, en: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Language is now locked to Chinese only
  const [language] = useState<Language>('zh');

  const setLanguage = (_lang: Language) => {
    // Language change disabled - always Chinese
    return;
  };

  const toggleLanguage = () => {
    // Language toggle disabled - always Chinese
    return;
  };

  const t = (zh: string, _en: string) => {
    // Always return Chinese text
    return zh;
  };

  // Update document.documentElement.lang for accessibility and SEO
  useEffect(() => {
    document.documentElement.lang = 'zh-HK';
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
