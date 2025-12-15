import React, { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import { customerTestimonial as zhContent } from "../locales/zh";
import { customerTestimonial as enContent } from "../locales/en";

const CustomerTestimonialArticle = () => {
  const { language } = useContext(LanguageContext);
  const content = language === "en" ? enContent : zhContent;

  return (
    <div className="blog-page p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-amber-400">{content.title}</h1>
      <div className="blog-content text-gray-100 space-y-4">
        <p>{content.intro}</p>
        
        <h3 className="text-xl font-semibold mt-6 text-blue-400">{content.background}</h3>
        <p>{content.bgText}</p>
        
        <h3 className="text-xl font-semibold mt-6 text-blue-400">{content.effect}</h3>
        <p>{content.effectText}</p>
        
        {/* 新增张女士描述的翻译字段绑定 */}
        <p>{content.mrsZhangDesc}</p>
        
        <h3 className="text-xl font-semibold mt-6 text-blue-400">{content.comment}</h3>
        <p className="italic border-l-4 border-blue-400 pl-4">{content.commentText}</p>
      </div>
    </div>
  );
};

export default CustomerTestimonialArticle;
