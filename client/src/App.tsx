import { useContext, useEffect } from 'react';
// 导入语言上下文（路径必须正确，若contexts在src下，此路径正确）
import { LanguageContext } from './contexts/LanguageContext';
import { BrowserRouter } from 'react-router-dom';
// 👇 替换为你项目中实际的路由组件名（比如Router、MainRoutes等）
import YourRouterComponent from './router'; 

function App() {
  // 获取语言上下文的当前语言状态
  const { language } = useContext(LanguageContext);

  // 监听语言变化，动态修改HTML标签、meta、title
  useEffect(() => {
    // 1. 获取HTML根元素和所有需要动态修改的标签
    const htmlEl = document.documentElement;
    const descEl = document.getElementById('meta-description');
    const keywordsEl = document.getElementById('meta-keywords');
    const titleEl = document.getElementById('page-title');

    // 2. 设置HTML的lang属性（英文=en，繁体中文=zh-HK）
    if (language === 'en') {
      htmlEl.lang = 'en';
    } else {
      htmlEl.lang = 'zh-HK';
    }

    // 3. 动态设置meta描述（description）
    const descContent = {
      en: "Quantum Feng Shui Air Purification Solution - Combining top-tier air purification technology with quantum frequency modulation technology, accurately placing feng shui auspicious positions to create a modern home environment with clean materials, harmonious energy, and abundant manifestation.",
      'zh-HK': "量子風水空氣淨化方案 - 結合頂級空氣淨化科技與量子調頻技術，精準擺設風水吉位，為您打造物質清淨、能量和諧、豐盛顯化的現代家居環境。"
    };
    if (descEl) { // 防止标签不存在报错
      descEl.content = descContent[language] || descContent['zh-HK'];
    }

    // 4. 动态设置meta关键词（keywords）
    const keywordsContent = {
      en: "Quantum Feng Shui, Air Purification, Feng Shui, Quantum Frequency Modulation, Dyson, Philips, Sharp, LG, Xiaomi, Amway Sky",
      'zh-HK': "量子風水, 空氣淨化, 風水, 量子調頻, Dyson, Philips, Sharp, LG, 小米, Amway Sky"
    };
    if (keywordsEl) {
      keywordsEl.content = keywordsContent[language] || keywordsContent['zh-HK'];
    }

    // 5. 动态设置页面标题（title）
    const titleContent = {
      en: "Quantum Feng Shui Air Purification Solution",
      'zh-HK': "量子風水空氣淨化方案 | Quantum Feng Shui Air Purification"
    };
    if (titleEl) {
      titleEl.textContent = titleContent[language] || titleContent['zh-HK'];
    }

  }, [language]); // 仅当language变化时执行，避免重复渲染

  // 保留原有路由结构，仅添加多语言逻辑
  return (
    <BrowserRouter>
      <YourRouterComponent />
    </BrowserRouter>
  );
}

export default App;
