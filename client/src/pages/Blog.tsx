import { Link } from 'wouter';
import { useLanguage } from '../contexts/LanguageContext';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

export default function Blog() {
  const { t } = useLanguage();

  // Blog article data
  const articles = [
    {
      id: 'quantum-feng-shui-guide-2026',
      title: t('量子風水空氣淨化完全指南 - 2026 年最全面的解決方案', 'Complete Guide to Quantum Feng Shui Air Purification - The Most Comprehensive Solution for 2026'),
      excerpt: t(
        '在追求健康與和諧生活的現代，我們對居住環境的要求已不再僅限於物質層面。量子風水空氣淨化服務將物質清淨、能量調頻與風水擺位三者合一，為您的家居氣場提供最徹底的優化。',
        'In modern pursuit of health and harmony, our requirements for living environments are no longer limited to the physical level. Quantum Feng Shui Air Purification Service integrates physical cleanliness, energy frequency tuning, and feng shui positioning to provide the most thorough optimization for your home environment.'
      ),
      date: '2026-01-15',
      readTime: '8',
      image: '/images/blog/quantum-energy-waves.jpg',
      category: t('完全指南', 'Complete Guide'),
    },
    {
      id: 'brand-comparison-dyson-philips-xiaomi',
      title: t('不同品牌空氣淨化機的風水特性 - Dyson vs Philips vs 小米 vs Amway Sky', 'Feng Shui Characteristics of Different Air Purifier Brands - Dyson vs Philips vs Xiaomi vs Amway Sky'),
      excerpt: t(
        '選擇空氣淨化機不應只看 CADR 值和 HEPA 等級。從量子風水角度，Dyson、Philips、小米等品牌在五行屬性、氣流模式和能量場上各有特色。本指南助您找到最適合家居氣場的淨化設備。',
        'Choosing an air purifier should not only consider CADR value and HEPA grade. From the quantum feng shui perspective, brands like Dyson, Philips, and Xiaomi each have unique characteristics in five-element attributes, airflow patterns, and energy fields. This guide helps you find the purification device most suitable for your home energy field.'
      ),
      date: '2026-01-20',
      readTime: '10',
      image: '/images/blog/brand-comparison-table.jpg',
      category: t('品牌對比', 'Brand Comparison'),
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 via-secondary/5 to-background overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero-pattern.svg')] opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent animate-fade-in">
            {t('量子風水博客', 'Quantum Feng Shui Blog')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t(
              '探索量子科學、風水智慧與空氣淨化的完美結合',
              'Explore the perfect combination of quantum science, feng shui wisdom, and air purification'
            )}
          </p>
        </div>
      </section>

      {/* Blog Articles Grid */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8">
            {articles.map((article) => (
              <article
                key={article.id}
                className="bg-gradient-to-br from-section-dark to-muted rounded-2xl shadow-cosmic overflow-hidden border border-border/50 hover:shadow-glow transition-all duration-300 group"
              >
                <div className="md:flex">
                  {/* Article Image */}
                  <div className="md:w-2/5 relative overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-64 md:h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-accent/90 text-white text-sm font-semibold rounded-full">
                        {article.category}
                      </span>
                    </div>
                  </div>

                  {/* Article Content */}
                  <div className="md:w-3/5 p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4 text-accent" />
                          <span>{article.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4 text-accent" />
                          <span>{article.readTime} {t('分鐘閱讀', 'min read')}</span>
                        </div>
                      </div>

                      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground group-hover:text-accent transition-colors">
                        {article.title}
                      </h2>

                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {article.excerpt}
                      </p>
                    </div>

                    <Link href={`/blog/${article.id}`}>
                      <a className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-4 transition-all duration-300 group/link">
                        {t('閱讀全文', 'Read Full Article')}
                        <ArrowRight className="w-5 h-5 transform group-hover/link:translate-x-1 transition-transform" />
                      </a>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
