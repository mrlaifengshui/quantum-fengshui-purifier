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
      .then(res => res.text())
      .then(content => setMarkdownContent(content))
      .catch(err => {
        console.error('加载失败：', err);
        setMarkdownContent(`# 加载失败\n路径：${mdFilePath}`);
      });
  }, [language]);

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
      <ReactMarkdown style={{ lineHeight: '1.8', fontSize: '16px' }}>
        {markdownContent}
      </ReactMarkdown>
    </div>
  );
};

export default BrandComparisonArticle;
