import { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import blogTranslations from '../../locales/en/blogs.json';

const BrandComparisonArticle = () => {
  const { language } = useContext(LanguageContext);

  const content = language === 'en' 
    ? blogTranslations.brandComparison 
    : {
        title: "不同空氣淨化器品牌的風水特點 - Dyson vs Philips vs 小米 vs Amway Sky",
        introTitle: "引言：超越CADR數值的風水考量",
        introduction: "當我們挑選空氣淨化機時，大多數人只關注CADR（潔淨空氣輸送率）值、HEPA過濾等級或噪音水平。然而，對於追求家居氣場和諧的現代人而言，淨化機的選擇遠不止於此。一台淨化機不僅是電器，它更是家中一個將影響運勢的「氣流中心」，其外觀形狀、材質五行、以及氣流循環模式，都會對空間的風水產生微妙而深遠的影響。",
        dysonTitle: "Dyson：「金屬」屬性的高端選擇"
      };

  return (
    <div className="blog-page-container">
      <h1 className="blog-title">{content.title}</h1>
      
      <section className="blog-section">
        <h2>{content.introTitle}</h2>
        <p>{content.introduction}</p>
      </section>

      <section className="blog-section">
        <h2>{content.dysonTitle}</h2>
        {/* 其他品牌內容同理替換 */}
      </section>
    </div>
  );
};

export default BrandComparisonArticle;
