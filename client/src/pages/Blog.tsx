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
    {
      id: 'customer-testimonial-mrs-zhang',
      title: t('風水客戶見證：從失眠到精力充沛 - 張太太的真實故事', 'Feng Shui Customer Testimonial: From Insomnia to Full Energy - Mrs. Zhang\'s Real Story'),
      excerpt: t(
        '張太太被失眠困擾了七年，凌晨三點準時醒來成為她的噩夢。她嘗試過所有傳統方法都無效。直到她遇見量子風水空氣淨化服務，僅用三天就徹底改變了她的睡眠品質，工作效率提升 40%。',
        'Mrs. Zhang was troubled by insomnia for seven years, waking up at 3 AM became her nightmare. She tried all traditional methods without success. Until she discovered Quantum Feng Shui Air Purification Service, which completely changed her sleep quality in just three days and improved her work efficiency by 40%.'
      ),
      date: '2026-01-25',
      readTime: '6',
      image: '/images/blog/energetic-workspace.jpg',
      category: t('客戶見證', 'Customer Testimonial'),
    },
    {
      id: 'bedroom-harmony-feng-shui',
      title: t('夫妻臥室的量子風水秘密：如何用空氣淨化提升感情和諧度', 'Quantum Feng Shui Secrets for Couple\'s Bedroom: Enhance Relationship Harmony with Air Purification'),
      excerpt: t(
        '您是否注意到，很多夫妻之間的爭吵都發生在臥室？臥室的能量場直接影響著感情和諧度、親密關係，甚至健康狀況。本文深入探討臥室風水的 6 大禁忌、空氣淨化機的和諧擺位法，以及 5 個真實的夫妻感情改善案例。',
        'Have you noticed that many arguments between couples happen in the bedroom? The bedroom\'s energy field directly affects relationship harmony, intimacy, and even health. This article explores 6 major feng shui taboos, harmonious air purifier placement methods, and 5 real cases of couples improving their relationships.'
      ),
      date: '2026-02-10',
      readTime: '9',
      image: '/images/blog/quantum-energy-waves.jpg',
      category: t('關係和諧', 'Relationship Harmony'),
    },
    {
      id: 'office-career-feng-shui',
      title: t('辦公室空氣淨化機擺錯位置？難怪你升不了職！量子風水教你3招扭轉事業運', 'Air Purifier in Wrong Office Position? No Wonder You Can\'t Get Promoted! 3 Quantum Feng Shui Tricks to Transform Your Career'),
      excerpt: t(
        '你是否發現，明明工作很努力，卻總是得不到上司的賞識？同事一個個升職加薪，唯獨你原地踏步？或許問題不在你的能力，而在於辦公室的「能量場失衡」。本文將揭示辦公室風水的3大核心秘密，教你如何用正確的空氣淨化機擺位，扭轉事業困境，開啟升職加薪之路！',
        'Have you noticed that despite working hard, you never seem to get your boss\'s recognition? Colleagues getting promoted one after another, while you stay stuck? Perhaps the problem isn\'t your ability, but your office\'s "energy field imbalance." This article reveals 3 core office feng shui secrets, teaching you how to use correct air purifier placement to transform career difficulties!'
      ),
      date: '2026-02-15',
      readTime: '10',
      image: '/images/blog/office-career-placement.jpg',
      category: t('事業發展', 'Career Development'),
    },
    {
      id: 'living-room-wealth-feng-shui',
      title: t('客廳財位空氣淨化機擺放秘訣 - 量子風水提升家庭財運', 'Living Room Wealth Position Air Purifier Placement Secrets - Quantum Feng Shui to Enhance Family Fortune'),
      excerpt: t(
        '你知道嗎？客廳的「財位」不僅影響家庭財運，更是整個家居能量場的核心！如果在財位正確擺放空氣淨化機，配合量子調頻技術，不僅能淨化空氣，更能激活財運能量，為全家帶來源源不絕的豐盛與繁榮。本文將揭秘客廳財位的奧秘，教你如何打造招財進寶的黃金家居！',
        'Did you know? The "wealth position" in your living room not only affects family fortune but is also the core of your home\'s energy field! If you correctly place an air purifier in the wealth position and combine it with quantum frequency tuning technology, you can not only purify the air but also activate fortune energy. This article reveals the secrets of the living room wealth position!'
      ),
      date: '2025-12-27',
      readTime: '12',
      image: '/images/blog/living-room-wealth-position.jpg',
      category: t('家庭財運', 'Family Fortune'),
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
