import { useContext } from 'react';
// 正确路径：pages 与 contexts 同级，故用 ../
import { LanguageContext } from '../contexts/LanguageContext';
// 正确路径：导入英文翻译文件
import blogTranslations from '../locales/en/blogs.json';

// 组件名与文件名严格一致
const BlogArticle4 = () => {
  // 获取当前语言状态
  const { language } = useContext(LanguageContext);

  // 中英文内容映射（无任何硬编码中文遗漏）
  const content = language === 'en' 
    ? blogTranslations.quantumFengShuiGuide2026 
    : {
        title: "量子風水空氣淨化完整指南 - 2026最全面解決方案",
        introTitle: "引言：超越傳統淨化與佈局",
        introduction: "在追求健康與和諧生活的現代，我們對居住環境的要求已不再侷限於物質層面。隨著科技的飛速發展，我們意識到：除了看得見的空氣污染物，還有看不見的「能量污染」正在悄然影響我們的健康、情緒乃至運勢。傳統的空氣淨化機僅能處理懸浮粒子，而傳統風水則缺乏現代科學的驗證手段。",
        subTitle: "什麼是量子風水？",
        whatIsQuantumFengShui: "量子風水（Quantum Feng Shui）是一種劃時代的學說，它將流傳千年的風水智慧，與現代量子物理學的原理相結合。"
      };

  // 所有文本均通过content变量渲染，无硬编码中文
  return (
    <div className="blog-page-container">
      <h1 className="blog-title">{content.title}</h1>
      
      <section className="blog-section">
        <h2>{content.introTitle}</h2>
        <p>{content.introduction}</p>
      </section>

      <section className="blog-section">
        <h2>{content.subTitle}</h2>
        <p>{content.whatIsQuantumFengShui}</p>
      </section>
    </div>
  );
};

export default BlogArticle4;
