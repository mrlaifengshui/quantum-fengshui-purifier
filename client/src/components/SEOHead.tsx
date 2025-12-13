import { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface SEOHeadProps {
  title?: {
    zh: string;
    en: string;
  };
  description?: {
    zh: string;
    en: string;
  };
  keywords?: {
    zh: string;
    en: string;
  };
  ogImage?: string;
  canonical?: string;
}

export default function SEOHead({
  title,
  description,
  keywords,
  ogImage = '/images/og-image.jpg',
  canonical
}: SEOHeadProps) {
  const { language } = useLanguage();
  
  const defaultTitle = {
    zh: '量子風水空氣淨化方案 | 香港專業風水師服務',
    en: 'Quantum Feng Shui Air Purification | Hong Kong Professional Feng Shui Master Service'
  };
  
  const defaultDescription = {
    zh: '結合頂級空氣淨化科技與量子調頻技術，精準擺設風水吉位。提供Dyson、Philips、Sharp等品牌空氣淨化器風水佈局服務。香港風水師專業團隊，超過100個成功案例。',
    en: 'Professional quantum feng shui air purification service in Hong Kong. Combining premium Dyson, Philips, Sharp air purifiers with feng shui layout and quantum frequency tuning. Expert feng shui master team with 100+ successful cases. Call +852-9882-1298 for consultation.'
  };
  
  const defaultKeywords = {
    zh: '量子風水, 香港風水師, 空氣淨化器風水擺位, Dyson風水, Philips空氣淨化, 家居風水, 辦公室風水, 量子調頻, 風水佈局, 風水師推薦',
    en: 'Quantum Feng Shui, Hong Kong Feng Shui Master, Air Purifier Feng Shui Placement, Dyson Feng Shui, Philips Air Purification, Home Feng Shui, Office Feng Shui, Quantum Frequency Tuning, Feng Shui Consultation Hong Kong, Professional Feng Shui Service'
  };

  const pageTitle = title ? title[language] : defaultTitle[language];
  const pageDescription = description ? description[language] : defaultDescription[language];
  const pageKeywords = keywords ? keywords[language] : defaultKeywords[language];
  
  const currentUrl = canonical || window.location.href;
  const baseUrl = 'https://fengshuipurifier.com';

  useEffect(() => {
    // Update document title
    document.title = pageTitle;
    
    // Update HTML lang attribute
    document.documentElement.lang = language === 'zh' ? 'zh-HK' : 'en';
    
    // Update meta description
    updateOrCreateMeta('name', 'description', pageDescription);
    updateOrCreateMeta('name', 'keywords', pageKeywords);
    
    // Update Open Graph tags
    updateOrCreateMeta('property', 'og:title', pageTitle);
    updateOrCreateMeta('property', 'og:description', pageDescription);
    updateOrCreateMeta('property', 'og:image', baseUrl + ogImage);
    updateOrCreateMeta('property', 'og:url', currentUrl);
    updateOrCreateMeta('property', 'og:type', 'website');
    updateOrCreateMeta('property', 'og:locale', language === 'zh' ? 'zh_HK' : 'en_US');
    
    // Add alternate locale
    updateOrCreateMeta('property', 'og:locale:alternate', language === 'zh' ? 'en_US' : 'zh_HK');
    
    // Update Twitter Card tags
    updateOrCreateMeta('name', 'twitter:card', 'summary_large_image');
    updateOrCreateMeta('name', 'twitter:title', pageTitle);
    updateOrCreateMeta('name', 'twitter:description', pageDescription);
    updateOrCreateMeta('name', 'twitter:image', baseUrl + ogImage);
    
    // Update canonical URL
    updateOrCreateLink('canonical', currentUrl);
    
    // Add hreflang tags
    updateOrCreateLink('alternate', `${baseUrl}${window.location.pathname}?lang=zh`, 'zh-HK');
    updateOrCreateLink('alternate', `${baseUrl}${window.location.pathname}?lang=en`, 'en');
    updateOrCreateLink('alternate', `${baseUrl}${window.location.pathname}`, 'x-default');
    
  }, [language, pageTitle, pageDescription, pageKeywords, currentUrl, ogImage, baseUrl]);

  return null;
}

// Helper function to update or create meta tags
function updateOrCreateMeta(attr: string, value: string, content: string) {
  let element = document.querySelector(`meta[${attr}="${value}"]`);
  
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attr, value);
    document.head.appendChild(element);
  }
  
  element.setAttribute('content', content);
}

// Helper function to update or create link tags
function updateOrCreateLink(rel: string, href: string, hreflang?: string) {
  const selector = hreflang 
    ? `link[rel="${rel}"][hreflang="${hreflang}"]`
    : `link[rel="${rel}"]`;
    
  let element = document.querySelector(selector) as HTMLLinkElement;
  
  if (!element) {
    element = document.createElement('link');
    element.rel = rel;
    if (hreflang) element.hreflang = hreflang;
    document.head.appendChild(element);
  }
  
  element.href = href;
}
