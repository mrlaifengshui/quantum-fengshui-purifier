import { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import blogTranslations from '../../locales/en/blogs.json';

const CustomerTestimonialArticle = () => {
  const { language } = useContext(LanguageContext);

  const content = language === 'en' 
    ? blogTranslations.customerTestimonialMrsZhang 
    : {
        title: "風水客戶見證：從失眠到滿滿能量 - 張太太的真實故事",
        clientBgTitle: "客戶背景：追求完美的現代女性",
        clientBackground: "張太太，45歲，居住在香港九龍區一處樓齡約20年的私人高苑居單位。她是一位成功的自由職業者，從事高端設計顧問工作，對生活品質有著嚴格的要求。她的家居裝潢優雅，配備了多款頂級智能家居設備，包括一台最新的高效能空氣淨化機。張太太的生活看似完美，但長期以來，她一直被一個循環的問題困擾：無論物質條件多麼優越，她始終無法獲得深層、安穩的睡眠。",
        problemTitle: "問題描述：七年「隱形污染」的困擾"
      };

  return (
    <div className="blog-page-container">
      <h1 className="blog-title">{content.title}</h1>
      
      <section className="blog-section">
        <h2>{content.clientBgTitle}</h2>
        <p>{content.clientBackground}</p>
      </section>

      <section className="blog-section">
        <h2>{content.problemTitle}</h2>
        {/* 其他見證內容同理替換 */}
      </section>
    </div>
  );
};

export default CustomerTestimonialArticle;
