import React, { useContext, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
// 导入语言上下文提供者
import { LanguageContextProvider } from './contexts/LanguageContext';
// 导入你的App组件（若有）
import App from './App';

// 封装一个根组件，用于动态修改HTML多语言
const RootComponent = () => {
  const { language } = useContext(LanguageContext);

  // 复制App.tsx中useEffect的所有逻辑（动态修改lang/meta/title）
  useEffect(() => {
    const htmlEl = document.documentElement;
    const descEl = document.getElementById('meta-description');
    const keywordsEl = document.getElementById('meta-keywords');
    const titleEl = document.getElementById('page-title');

    // 设置lang属性
    if (language === 'en') {
      htmlEl.lang = 'en';
    } else {
      htmlEl.lang = 'zh-HK';
    }

    // 设置meta description
    const descContent = {
      en: "Quantum Feng Shui Air Purification Solution - Combining top-tier air purification technology with quantum frequency modulation technology, accurately placing feng shui auspicious positions to create a modern home environment with clean materials, harmonious energy, and abundant manifestation.",
      'zh-HK': "量子風水空氣淨化方案 - 結合頂級空氣淨化科技與量子調頻技術，精準擺設風水吉位，為您打造物質清淨、能量和諧、豐盛顯化的現代家居環境。"
    };
    if (descEl) descEl.content = descContent[language] || descContent['zh-HK'];

    // 设置meta keywords
    const keywordsContent = {
      en: "Quantum Feng Shui, Air Purification, Feng Shui, Quantum Frequency Modulation, Dyson, Philips, Sharp, LG, Xiaomi, Amway Sky",
      'zh-HK': "量子風水, 空氣淨化, 風水, 量子調頻, Dyson, Philips, Sharp, LG, 小米, Amway Sky"
    };
    if (keywordsEl) keywordsEl.content = keywordsContent[language] || keywordsContent['zh-HK'];

    // 设置title
    const titleContent = {
      en: "Quantum Feng Shui Air Purification Solution",
      'zh-HK': "量子風水空氣淨化方案 | Quantum Feng Shui Air Purification"
    };
    if (titleEl) titleEl.textContent = titleContent[language] || titleContent['zh-HK'];

  }, [language]);

  // 渲染原有App组件
  return <App />;
};

// 渲染根组件到页面
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* 确保LanguageContextProvider包裹所有组件 */}
    <LanguageContextProvider>
      <RootComponent />
    </LanguageContextProvider>
  </React.StrictMode>,
);
