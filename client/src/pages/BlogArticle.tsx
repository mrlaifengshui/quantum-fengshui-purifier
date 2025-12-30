import { useLanguage } from "../contexts/LanguageContext";
// 重點：用 ../ 指向 src/locales（而非 ./）
import { quantumGuide as zhContent } from "../locales/zh";
import { quantumGuide as enContent } from "../locales/en";

const BlogArticle = () => {
  const { language } = useLanguage();
  const content = language === "en" ? enContent : zhContent;

  return (
    <div className="blog-page p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-amber-400">{content.title}</h1>
      <div className="blog-content text-gray-100 space-y-4">
        <p>{content.intro}</p>
        <h2 className="text-2xl font-semibold mt-8 text-white">{content.coreConcept}</h2>
        <p>{content.coreText}</p>
        <h2 className="text-2xl font-semibold mt-8 text-white">{content.tip2026}</h2>
        <p>{content.tipText}</p>
      </div>
    </div>
  );
};

export default BlogArticle;
