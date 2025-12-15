import { useEffect } from "react";
import { useLanguage } from "../contexts/LanguageContext";

interface SEOHeadProps {
  title: { zh: string; en: string };
  description: { zh: string; en: string };
  keywords?: { zh: string; en: string };
}

export default function SEOHead({ title, description, keywords }: SEOHeadProps) {
  const { language } = useLanguage();

  // 动态设置页面标题
  useEffect(() => {
    document.title = language === "zh" ? title.zh : title.en;
  }, [language, title]);

  return (
    <>
      {/* 基础元数据 */}
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* 语言相关元数据 */}
      <meta 
        name="description" 
        content={language === "zh" ? description.zh : description.en} 
      />
      
      {keywords && (
        <meta 
          name="keywords" 
          content={language === "zh" ? keywords.zh : keywords.en} 
        />
      )}
      
      {/* 交替语言标签（SEO友好） */}
      <link 
        rel="alternate" 
        hreflang={language === "zh" ? "en" : "zh-HK"} 
        href={`${window.location.origin}${window.location.pathname}?lang=${language === "zh" ? "en" : "zh"}`} 
      />
    </>
  );
}
