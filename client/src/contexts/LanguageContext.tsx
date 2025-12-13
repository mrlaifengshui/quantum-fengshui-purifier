import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'zh' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (zh: string, en: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

/**
 * Detect user's preferred language from multiple sources
 * Priority: URL params > localStorage > Browser language > Default (zh)
 */
function detectUserLanguage(): Language {
  // 1. Check URL parameter (?lang=en or ?lang=zh)
  const urlParams = new URLSearchParams(window.location.search);
  const langParam = urlParams.get('lang');
  if (langParam === 'en' || langParam === 'zh') {
    return langParam;
  }

  // 2. Check localStorage (user's previous choice)
  const savedLanguage = localStorage.getItem('preferred-language');
  if (savedLanguage === 'en' || savedLanguage === 'zh') {
    return savedLanguage;
  }

  // 3. Check browser language
  const browserLang = navigator.language || (navigator as any).userLanguage;
  
  // English variants: en, en-US, en-GB, etc.
  if (browserLang.toLowerCase().startsWith('en')) {
    return 'en';
  }
  
  // Chinese variants: zh, zh-CN, zh-TW, zh-HK, etc.
  if (browserLang.toLowerCase().startsWith('zh')) {
    return 'zh';
  }

  // 4. Default to Chinese (primary market is Hong Kong)
  return 'zh';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Initialize with detected language
  const [language, setLanguageState] = useState<Language>(() => detectUserLanguage());

  // Update localStorage and URL when language changes
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('preferred-language', lang);
    
    // Update URL parameter without page reload
    const url = new URL(window.location.href);
    url.searchParams.set('lang', lang);
    window.history.replaceState({}, '', url.toString());
  };

  const toggleLanguage = () => {
    setLanguage(language === 'zh' ? 'en' : 'zh');
  };

  const t = (zh: string, en: string) => {
    return language === 'zh' ? zh : en;
  };

  // Listen for URL changes (browser back/forward)
  useEffect(() => {
    const handlePopState = () => {
      const detectedLang = detectUserLanguage();
      if (detectedLang !== language) {
        setLanguageState(detectedLang);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [language]);

  // Update document.documentElement.lang for accessibility and SEO
  useEffect(() => {
    document.documentElement.lang = language === 'zh' ? 'zh-HK' : 'en';
  }, [language]);

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
