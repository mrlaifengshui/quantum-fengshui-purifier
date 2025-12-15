import React, { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import { brandComparison as zhContent } from "../locales/zh";
import { brandComparison as enContent } from "../locales/en";

const BrandComparisonArticle = () => {
  const { language } = useContext(LanguageContext);
  const content = language === "en" ? enContent : zhContent;

  return (
    <div className="blog-page p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-amber-400">{content.title}</h1>
      <div className="blog-content text-gray-100 space-y-4">
        <p>{content.intro}</p>
        <h3 className="text-xl font-semibold mt-6 text-green-400">{content.dyson}</h3>
        <p>{content.dysonText}</p>
        <h3 className="text-xl font-semibold mt-6 text-green-400">{content.philips}</h3>
        <p>{content.philipsText}</p>
        <h3 className="text-xl font-semibold mt-6 text-green-400">{content.xiaomi}</h3>
        <p>{content.xiaomiText}</p>
      </div>
    </div>
  );
};

export default BrandComparisonArticle;
