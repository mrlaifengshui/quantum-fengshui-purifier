import { useLanguage } from '../contexts/LanguageContext';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import { Link } from 'wouter';
import ReactMarkdown from 'react-markdown';
import { useState, useEffect } from 'react';

export default function BlogArticle() {
  const { t, language } = useLanguage();
  const [markdownContent, setMarkdownContent] = useState('');

  useEffect(() => {
    const fetchContent = async () => {
      const path = `/blog/${language === 'zh' ? 'zh' : 'en'}/quantum-guide.md`;
      try {
        const response = await fetch(path);
        if (!response.ok) {
          throw new Error(`Failed to fetch ${path}`);
        }
        const text = await response.text();
        setMarkdownContent(text);
      } catch (error) {
        console.error('Error fetching blog content:', error);
        setMarkdownContent(t('文章載入失敗', 'Failed to load article.'));
      }
    };
    fetchContent();
  }, [language, t]);

  return (
    <div className="min-h-screen bg-background">
      {/* Back to Blog Button */}
      <div className="bg-section-dark border-b border-border/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/blog">
            <a className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors">
              <ArrowLeft className="w-4 h-4" />
              {t('返回博客列表', 'Back to Blog')}
            </a>
          </Link>
        </div>
      </div>

      {/* Article Header */}
      <div className="bg-gradient-to-br from-primary/10 via-secondary/5 to-background py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4 text-accent" />
              <span>2026-01-15</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4 text-accent" />
              <span>8 {t('分鐘閱讀', 'min read')}</span>
            </div>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {t(
              '量子風水空氣淨化完全指南 - 2026 年最全面的解決方案',
              'Complete Guide to Quantum Feng Shui Air Purification - The Most Comprehensive Solution for 2026'
            )}
          </h1>
        </div>
      </div>

      {/* Article Content */}
      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg prose-invert max-w-none">
            <ReactMarkdown>{markdownContent}</ReactMarkdown>
          </div>
        </div>
      </article>
    </div>
  );
}
