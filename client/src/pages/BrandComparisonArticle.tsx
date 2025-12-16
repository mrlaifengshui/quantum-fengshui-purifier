import { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import blogTranslations from '../locales/en/blogs.json';

const BrandComparisonArticle = () => {
  const { language } = useContext(LanguageContext);

  const content = language === 'en' 
    ? blogTranslations.brandComparison 
    : {
        title: "不同空氣淨化器品牌的風水特點 - Dyson vs Philips vs 小米 vs Amway Sky",
        introTitle: "引言：超越CADR數值的風水考量",
        introduction: "當我們挑選空氣淨化機時，大多數人只關注CADR（潔淨空氣輸送率）值、HEPA過濾等級或噪音水平。然而，對於追求家居氣場和諧的現代人而言，淨化機的選擇遠不止於此。一台淨化機不僅是電器，它更是家中一個將影響運勢的「氣流中心」，其外觀形狀、材質五行、以及氣流循環模式，都會對空間的風水產生微妙而深遠的影響。",
        dysonTitle: "Dyson：「金屬」屬性的高端選擇",
        philipsTitle: "Philips：「土」屬性的穩定之選",
        xiaomiTitle: "小米：「木」屬性的實用之選",
        amwayTitle: "Amway Sky：「水」屬性的全面之選"
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
        <p>{language === 'en' ? 'Dyson air purifiers use a metal shell design, which belongs to the "metal" attribute in the five elements. The metal attribute corresponds to the lung and large intestine meridians in the human body, and is suitable for placement in the west or northwest of the home to enhance the family\'s career luck.' : 'Dyson空氣淨化機採用金屬外殼設計，在五行中屬於「金」屬性。金屬性對應人體的肺、大腸經絡，適合擺放在家居的西方或西北方，增強家庭的事業運。'}</p>
      </section>

      <section className="blog-section">
        <h2>{content.philipsTitle}</h2>
        <p>{language === 'en' ? 'Philips purifiers focus on stable performance and earthy color matching, belonging to the "earth" attribute. The earth attribute is the foundation of all things, suitable for placement in the center of the home to stabilize the family\'s overall fortune.' : 'Philips淨化機注重穩定性能，配色偏土色系，屬於「土」屬性。土屬性為萬物之基，適合擺放在家居中央位置，穩定家庭整體運勢。'}</p>
      </section>

      <section className="blog-section">
        <h2>{content.xiaomiTitle}</h2>
        <p>{language === 'en' ? 'Xiaomi purifiers are cost-effective and use plastic materials with green elements, belonging to the "wood" attribute. The wood attribute corresponds to the liver and gallbladder meridians, suitable for placement in the east or southeast to enhance family health luck.' : '小米淨化機性價比高，採用塑膠材質且帶有綠色元素，屬於「木」屬性。木屬性對應人體肝、膽經絡，適合擺放在東方或東南方，增強家庭健康運。'}</p>
      </section>

      <section className="blog-section">
        <h2>{content.amwayTitle}</h2>
        <p>{language === 'en' ? 'Amway Sky purifiers focus on comprehensive purification and water-based circulation design, belonging to the "water" attribute. The water attribute corresponds to the kidney and bladder meridians, suitable for placement in the north to enhance family wealth luck.' : 'Amway Sky淨化機注重全面淨化，採用水性循環設計，屬於「水」屬性。水屬性對應人體腎、膀胱經絡，適合擺放在北方，增強家庭財富運。'}</p>
      </section>
    </div>
  );
};

export default BrandComparisonArticle;
