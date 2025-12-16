import { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import blogTranslations from '../locales/en/blogs.json';

const CustomerTestimonialArticle = () => {
  const { language } = useContext(LanguageContext);

  const content = language === 'en' 
    ? blogTranslations.customerTestimonialMrsZhang 
    : {
        title: "風水客戶見證：從失眠到滿滿能量 - 張太太的真實故事",
        clientBgTitle: "客戶背景：追求完美的現代女性",
        clientBackground: "張太太，45歲，居住在香港九龍區一處樓齡約20年的私人高苑居單位。她是一位成功的自由職業者，從事高端設計顧問工作，對生活品質有著嚴格的要求。她的家居裝潢優雅，配備了多款頂級智能家居設備，包括一台最新的高效能空氣淨化機。張太太的生活看似完美，但長期以來，她一直被一個循環的問題困擾：無論物質條件多麼優越，她始終無法獲得深層、安穩的睡眠。",
        problemTitle: "問題描述：七年「隱形污染」的困擾",
        problemContent: "張太太表示，她每晚入睡困難，即使睡著也容易半夜驚醒，白天則渾身乏力、注意力不集中。她曾就醫檢查，身體指標均正常；更更換過多款高級床墊、枕頭，甚至聘請專業清潔公司定期除蟎，但問題始終未解決。直到接觸量子風水後才發現，問題根源不在「物質層面」，而在「能量層面」——她家的空氣淨化機擺放位置錯誤，導致空氣流動破壞了家居的「氣場平衡」，進而影響睡眠質量。",
        solutionTitle: "解決方案：量子風水淨化機擺位調整",
        solutionContent: "我們的量子風水師根據張太太家居的坐向、五行屬性，將原本擺放在卧室南方的淨化機，調整至西北方的「財帛位」，並結合量子調頻技術優化淨化機的運行頻率。調整後僅3天，張太太反饋能順利入睡；1周後，半夜驚醒的次數減少80%；1個月後，已能獲得深層睡眠，白天精力充沛。",
        testimonialTitle: "客戶感言",
        testimonialContent: "「我從未想過，一台淨化機的擺放位置能改變我的睡眠！量子風水不僅解決了我七年的失眠問題，更讓我理解了「環境能量」與「健康」的關聯。現在我的家居不僅空氣乾淨，氣場也變得和諧，做事也越來越順利。」—— 張太太"
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
        <p>{content.problemContent}</p>
      </section>

      <section className="blog-section">
        <h2>{content.solutionTitle}</h2>
        <p>{content.solutionContent}</p>
      </section>

      <section className="blog-section">
        <h2>{content.testimonialTitle}</h2>
        <p>{content.testimonialContent}</p>
      </section>
    </div>
  );
};

export default CustomerTestimonialArticle;
