import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { useLanguage } from '../contexts/LanguageContext';

const CustomerTestimonialArticle: React.FC = () => {
  const { language, t } = useLanguage();
  const [markdownContent, setMarkdownContent] = useState('');

  useEffect(() => {
    const langPath = language === 'zh' ? 'zh' : 'en';
    const filePath = `/blog/${langPath}/customer-testimonial.md`;

    fetch(filePath)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text();
      })
      .then((text) => setMarkdownContent(text))
      .catch((error) => console.error('Error fetching markdown:', error));
  }, [language]);

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-primary">
        {t('客戶見證：從失眠到精力充沛 - 張太太的真實故事',\n              'Customer Testimonial: From Insomnia to Energy - Mrs. Zhang\'s True Story')}
      </h1>

      <div className="max-w-4xl mx-auto bg-card p-6 md:p-10 rounded-xl shadow-2xl">
        <div className="prose max-w-none prose-lg prose-primary">
          <ReactMarkdown>{markdownContent}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default CustomerTestimonialArticle;
