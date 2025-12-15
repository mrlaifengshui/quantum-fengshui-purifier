import React, { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext"; // 確認路徑正確（contexts 在 pages 同層）
import { quantumGuide as zhContent } from "../locales/zh"; // 確認 locales 在 pages 同層
import { quantumGuide as enContent } from "../locales/en";

const BlogArticle = () => {
  const { language } = useContext(LanguageContext);
  const content = language === "en" ? enContent : zhContent;

  // 加入這行，確認語言狀態能讀取（方便排查）
  console.log("當前語言：", language);

  return (
    <div className="blog-page p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-amber-400">{content.title}</h1>
      <div className="blog-content text-gray-100 space-y-4">
        <p>{content.intro}</p>
        <h2 className="text-2xl font-semibold mt-8 text-white">{content.coreConcept}</h2>
        <p>{content.coreText}</p>
        <h2 className="text-2xl font-semibold mt-8 text-white">{content.2026Tip}</h2>
        <p>{content.tipText}</p>
      </div>
    </div>
  );
};

export default BlogArticle;
