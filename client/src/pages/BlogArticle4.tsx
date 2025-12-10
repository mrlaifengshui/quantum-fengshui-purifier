import React, { useContext, useEffect, useState } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';

const BlogArticle4: React.FC = () => {
  const { language, t } = useContext(LanguageContext);
  const [markdownContent, setMarkdownContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Define the path to the Markdown file based on the current language
  const contentPath = `/blog/${language}/quantum-layout-science.md`;

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch(contentPath)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Failed to load content: ${response.statusText}`);
        }
        return response.text();
      })
      .then(text => {
        setMarkdownContent(text);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error loading markdown:', err);
        setError(t('文章載入失敗，請稍後再試。', 'Failed to load article. Please try again later.'));
        setLoading(false);
      });
  }, [language, contentPath, t]);

  if (loading) {
    return <div className="text-center py-20">{t('文章載入中...', 'Loading article...')}</div>;
  }

  if (error) {
    return <div className="text-center py-20 text-red-500">{error}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Back to Blog Link */}
        <Link to="/blog" className="text-blue-500 hover:text-blue-700 transition duration-300 mb-8 block">
          &larr; {t('返回部落格', 'Back to Blog')}
        </Link>

        {/* Article Content */}
        <article className="prose dark:prose-invert max-w-none">
          <ReactMarkdown>{markdownContent}</ReactMarkdown>
        </article>

        {/* Call to Action Section (Hardcoded for consistency with other pages) */}
        <div className="mt-16 pt-8 border-t border-gray-700 text-center">
          <h3 className="text-2xl font-bold mb-4">{t('立即行動：開啟您的氣場升級之旅', 'Act Now: Start Your Energy Field Upgrade Journey')}</h3>
          <p className="mb-6">
            {t('如果您渴望一個真正科學、高效的家居能量優化方案，請立即聯繫我們。黎Sir 及其專業團隊將利用最先進的量子測量儀器，為您繪製專屬的「家居能量地圖」，並提供最精準的量子風水佈局建議。', 'If you desire a truly scientific, highly effective home energy optimization solution, contact us immediately. Master Lai and his professional team will use the most advanced quantum measuring instruments to create your exclusive "Home Energy Map" and provide the most precise Quantum Feng Shui layout advice.')}
          </p>
          <a
            href="https://wa.me/852xxxxxxxx" // Replace with actual WhatsApp link
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 shadow-lg"
          >
            {t('點擊此處，預約您的專屬能量場診斷服務！', 'Click Here to Book Your Exclusive Energy Field Diagnostic Service!')}
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogArticle4;
