import { useContext, useEffect, useState } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import ReactMarkdown from 'react-markdown';

// 对应public/blog/zh/en/brand-compare.md
const BLOG_FILE_NAME = 'brand-compare.md';

const BrandComparisonArticle = () => {
  const { language } = useContext(LanguageContext);
  const [markdownContent, setMarkdownContent] = useState('');

  useEffect(() => {
    const langDir = language === 'en' ? 'en' : 'zh';
    const mdFilePath = `/blog/${langDir}/${BLOG_FILE_NAME}`;

    fetch(mdFilePath)
      .then(response => response.text())
      .then(content => setMarkdownContent(content))
      .catch(err => console.error('加载失败：', err));
  }, [language]);

  return (
    <div className="blog-page-container">
      <ReactMarkdown className="blog-content">{markdownContent}</ReactMarkdown>
    </div>
  );
};

export default BrandComparisonArticle;
