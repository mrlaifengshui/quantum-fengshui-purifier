import { Link } from 'wouter';
import { ArrowRight, Sparkles, Wind, Compass, CheckCircle2, Quote, Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import BrandCard from '../components/BrandCard';
import { brands } from '../lib/brands';

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-background to-secondary py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero-pattern.svg')] opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-accent/20 rounded-full">
            <span className="text-accent font-semibold text-sm">
              {t('科學 × 能量 × 風水', 'Science × Energy × Feng Shui')}
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            {t('量子風水空氣淨化方案', 'Quantum Feng Shui')}<br />
            <span className="text-accent">{t('物質清淨 × 能量調頻 × 豐盛顯化', 'Air Purification Service')}</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            {t(
              '結合頂級空氣淨化科技與量子調頻技術，精準擺設風水吉位，為您打造物質清淨、能量和諧、豐盛顯化的現代家居環境。',
              'Combining premium air purification technology with quantum frequency tuning, precisely positioned for feng shui prosperity.'
            )}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <a className="inline-flex items-center justify-center px-8 py-4 bg-accent text-background font-semibold rounded-lg hover:bg-accent/90 transition-all duration-300 shadow-lg hover:shadow-accent/50">
                {t('立即預約', 'Book Now')}
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Link>
            <Link href="/services">
              <a className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-accent text-accent font-semibold rounded-lg hover:bg-accent hover:text-background transition-all duration-300">
                {t('了解服務', 'Learn More')}
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* Supported Brands Section */}
      <section className="py-16 bg-gradient-to-r from-muted to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t('支持的優質品牌', 'Supported Premium Brands')}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t(
                '無論您選擇哪個品牌，我們都提供完整的量子調頻和風水擺位服務',
                'We provide complete quantum tuning and feng shui positioning for all brands'
              )}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {brands.map((brand) => (
              <BrandCard key={brand.id} brand={brand} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/brands">
              <a className="inline-flex items-center text-accent hover:text-accent/80 font-semibold">
                {t('查看所有品牌', 'View All Brands')}
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* Three-in-One Service Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t('三合一服務模式', 'Three-in-One Service Model')}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t(
                '從物質、能量、風水三個層面全方位提升您的生活品質',
                'Enhance your quality of life from material, energy, and feng shui perspectives'
              )}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-muted border border-border rounded-xl p-8 hover:border-accent transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mb-6">
                <Wind className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {t('改善空間粒子', 'Improve Air Quality')}
              </h3>
              <p className="text-muted-foreground mb-4">{t('空氣淨化', 'Air Purification')}</p>
              <ul className="space-y-2">
                {[
                  t('過濾懸浮粒子', 'Filter Particles'),
                  t('去除細菌病毒', 'Remove Bacteria'),
                  t('釋放負離子', 'Release Negative Ions'),
                  t('淨化空氣質素', 'Purify Air Quality'),
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-secondary mr-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Service 2 */}
            <div className="bg-muted border border-border rounded-xl p-8 hover:border-accent transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center mb-6">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {t('提升能量意識', 'Enhance Energy Awareness')}
              </h3>
              <p className="text-muted-foreground mb-4">{t('量子調頻', 'Quantum Tuning')}</p>
              <ul className="space-y-2">
                {[
                  t('驅走負能量', 'Remove Negative Energy'),
                  t('提升正能量', 'Enhance Positive Energy'),
                  t('提升意識頻率', 'Raise Consciousness'),
                  t('轉化能量場', 'Transform Energy Field'),
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-secondary mr-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Service 3 */}
            <div className="bg-muted border border-border rounded-xl p-8 hover:border-accent transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center mb-6">
                <Compass className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {t('優化空間氣場', 'Optimize Space Energy')}
              </h3>
              <p className="text-muted-foreground mb-4">{t('風水擺位', 'Feng Shui Positioning')}</p>
              <ul className="space-y-2">
                {[
                  t('分析空間方位', 'Analyze Space Direction'),
                  t('優化氣場運轉', 'Optimize Energy Flow'),
                  t('提升豐盛能量', 'Enhance Abundance'),
                  t('改善運勢', 'Improve Fortune'),
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-secondary mr-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t('客戶見證 - 實效證明', 'Client Testimonials - Proven Results')}
            </h2>
            <p className="text-muted-foreground">
              {t('95%+ 滿意度 | 3週至3個月見效 | 60%+ 重複購買率', '95%+ Satisfaction | 3 Weeks to 3 Months Results | 60%+ Repeat Rate')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-background border border-border rounded-xl p-8">
              <Quote className="w-10 h-10 text-accent mb-4" />
              <p className="text-foreground text-lg mb-6 leading-relaxed">
                {t(
                  '這不只是空氣變好，是整個人生磁場都轉變了！睡眠改善、精神恢復，整個家的氛圍都不一樣了。',
                  'It\'s not just better air, my entire life energy has transformed! Better sleep, renewed spirit, the whole home atmosphere has changed.'
                )}
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-foreground">{t('張太太', 'Ms. Zhang')}</p>
                  <p className="text-sm text-muted-foreground">
                    {t('42歲，企業高管 - Dyson用戶', '42, Executive - Dyson User')}
                  </p>
                </div>
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-background border border-border rounded-xl p-8">
              <Quote className="w-10 h-10 text-accent mb-4" />
              <p className="text-foreground text-lg mb-6 leading-relaxed">
                {t(
                  '投資報酬率遠超預期！3個月業績增加40%，新客戶增加2個。辦公室氛圍變得很正面。',
                  'ROI far exceeded expectations! 40% revenue increase in 3 months, 2 new clients. Office atmosphere became very positive.'
                )}
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-foreground">{t('陳先生', 'Mr. Chen')}</p>
                  <p className="text-sm text-muted-foreground">
                    {t('38歲，設計公司老闆 - Philips用戶', '38, Design Company Owner - Philips User')}
                  </p>
                </div>
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link href="/cases">
              <a className="inline-flex items-center text-accent hover:text-accent/80 font-semibold">
                {t('查看更多案例', 'View More Cases')}
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t('為什麼選擇我們？', 'Why Choose Us?')}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: Wind, title: t('科學驗證', 'Scientific Validation'), desc: t('空氣淨化通過認證', 'Certified Air Purification') },
              { icon: Sparkles, title: t('獨家技術', 'Exclusive Technology'), desc: t('量子調頻獨家研發', 'Proprietary Quantum Tuning') },
              { icon: Compass, title: t('傳統智慧', 'Traditional Wisdom'), desc: t('風水擺位傳承智慧', 'Feng Shui Heritage') },
              { icon: CheckCircle2, title: t('立竿見影', 'Immediate Results'), desc: t('3週見效', '3 Weeks Results') },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-background" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary via-secondary to-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-background mb-6">
            {t('準備改變您的生活氣場嗎？', 'Ready to Transform Your Living Energy?')}
          </h2>
          <p className="text-background/90 text-lg mb-8">
            {t(
              '立即預約免費諮詢，體驗量子風水空氣淨化的神奇效果。',
              'Book a free consultation now and experience the magic of quantum feng shui air purification.'
            )}
          </p>
          <Link href="/contact">
            <a className="inline-flex items-center justify-center px-10 py-4 bg-background text-accent font-bold rounded-lg hover:bg-background/90 transition-all duration-300 shadow-xl">
              {t('立即預約', 'Book Now')}
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </Link>
        </div>
      </section>
    </div>
  );
}
