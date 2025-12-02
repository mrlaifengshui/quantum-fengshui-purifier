import { Link } from 'wouter';
import { ArrowRight, Sparkles, Wind, Home as HomeIcon, Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { BrandCard } from '../components/BrandCard';
import { brands } from '../lib/brands';

export function Home() {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-background to-secondary opacity-20"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-accent via-secondary to-accent bg-clip-text text-transparent animate-pulse">
              {t('量子風水空氣淨化服務', 'Quantum Feng Shui Air Purification')}
            </h1>
            <p className="text-2xl md:text-3xl text-foreground/90 font-light">
              {t('物質清淨 × 能量調頻 × 豐盛顯化', 'Material Purity × Energy Tuning × Abundance Manifestation')}
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {t(
                '結合頂級空氣淨化科技與獨家量子調頻技術，精準擺設風水吉位，為您打造一個物質清淨、能量和諧、豐盛顯化的現代家居環境。',
                'Combining premium air purification technology with exclusive quantum frequency tuning, precisely positioned for feng shui prosperity, creating a modern home environment with material purity, energy harmony, and abundance manifestation.'
              )}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <a className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-accent to-secondary text-background font-semibold rounded-lg hover:shadow-lg hover:shadow-accent/50 transition-all">
                  {t('立即預約', 'Book Now')}
                  <ArrowRight className="ml-2" size={20} />
                </a>
              </Link>
              <Link href="/services">
                <a className="inline-flex items-center px-8 py-4 bg-muted border-2 border-accent text-foreground font-semibold rounded-lg hover:bg-accent hover:text-background transition-all">
                  {t('了解服務', 'Learn More')}
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/20 to-secondary/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4">
              {t('支持的優質品牌', 'Supported Premium Brands')}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t(
                '無論您選擇哪個品牌，我們都提供完整的量子調頻和風水擺位服務',
                'Whichever brand you choose, we provide complete quantum tuning and feng shui placement services'
              )}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {brands.map((brand) => (
              <BrandCard key={brand.id} brand={brand} onClick={() => {}} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/brands">
              <a className="inline-flex items-center text-accent hover:text-secondary transition-colors">
                {t('查看所有品牌對比', 'View All Brand Comparisons')}
                <ArrowRight className="ml-2" size={16} />
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* Three-in-One Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t('三合一服務模式', 'Three-in-One Service Model')}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t('物質與非物質同步處理，全方位提升生活品質', 'Material and non-material synchronous processing, comprehensive life quality enhancement')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-muted border border-border rounded-lg p-8 hover:border-accent transition-all group">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Wind className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {t('改善空間粒子', 'Improve Space Particles')}
              </h3>
              <p className="text-muted-foreground mb-6">
                {t('空氣淨化', 'Air Purification')}
              </p>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  {t('過濾懸浮粒子', 'Filter suspended particles')}
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  {t('去除細菌病毒', 'Remove bacteria and viruses')}
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  {t('釋放負離子', 'Release negative ions')}
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  {t('淨化空氣質素', 'Purify air quality')}
                </li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="bg-muted border border-border rounded-lg p-8 hover:border-accent transition-all group">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Sparkles className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {t('提升能量意識', 'Elevate Energy Consciousness')}
              </h3>
              <p className="text-muted-foreground mb-6">
                {t('量子調頻', 'Quantum Frequency Tuning')}
              </p>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  {t('驅走負能量', 'Dispel negative energy')}
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  {t('提升正能量', 'Enhance positive energy')}
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  {t('提升意識頻率', 'Elevate consciousness frequency')}
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  {t('轉化能量場', 'Transform energy field')}
                </li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="bg-muted border border-border rounded-lg p-8 hover:border-accent transition-all group">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <HomeIcon className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {t('優化空間氣場', 'Optimize Space Energy Field')}
              </h3>
              <p className="text-muted-foreground mb-6">
                {t('風水擺位', 'Feng Shui Placement')}
              </p>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  {t('分析空間方位', 'Analyze space orientation')}
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  {t('優化氣場運轉', 'Optimize energy flow')}
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  {t('提升豐盛能量', 'Enhance abundance energy')}
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  {t('改善運勢', 'Improve fortune')}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t('客戶見證 - 實效證明', 'Customer Testimonials - Proven Results')}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t('超過 95% 的客戶滿意度，3 週至 3 個月見效', 'Over 95% customer satisfaction, results in 3 weeks to 3 months')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-background border border-border rounded-lg p-8">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="fill-accent text-accent" />
                ))}
              </div>
              <p className="text-lg text-foreground mb-4 italic">
                「{t('這不只是空氣變好，是整個人生磁場都轉變了！', 'This is not just better air, it\'s a transformation of my entire life\'s magnetic field!')}」
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground">{t('張太太', 'Mrs. Zhang')}</p>
                <p className="text-sm text-muted-foreground">42 {t('歲企業高管', 'year-old corporate executive')} • Dyson</p>
                <p className="text-sm text-accent mt-2">{t('睡眠改善 + 精神恢復', 'Sleep improvement + mental recovery')}</p>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-background border border-border rounded-lg p-8">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="fill-accent text-accent" />
                ))}
              </div>
              <p className="text-lg text-foreground mb-4 italic">
                「{t('投資報酬率遠超預期！3 個月業績增加 40%', 'ROI far exceeded expectations! 40% revenue increase in 3 months')}」
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground">{t('陳先生', 'Mr. Chen')}</p>
                <p className="text-sm text-muted-foreground">38 {t('歲設計公司老闆', 'year-old design company owner')} • Philips</p>
                <p className="text-sm text-accent mt-2">{t('業績增長 + 新客戶', 'Revenue growth + new customers')}</p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link href="/cases">
              <a className="inline-flex items-center text-accent hover:text-secondary transition-colors font-semibold">
                {t('查看更多案例', 'View More Cases')}
                <ArrowRight className="ml-2" size={16} />
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t('為什麼選擇我們？', 'Why Choose Us?')}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">🔬</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {t('科學驗證', 'Scientific Validation')}
              </h3>
              <p className="text-muted-foreground">
                {t('空氣淨化通過國際認證', 'Air purification certified internationally')}
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {t('獨家技術', 'Exclusive Technology')}
              </h3>
              <p className="text-muted-foreground">
                {t('量子調頻獨家研發', 'Quantum tuning exclusively developed')}
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">🎋</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {t('傳統智慧', 'Traditional Wisdom')}
              </h3>
              <p className="text-muted-foreground">
                {t('風水擺位傳承智慧', 'Feng shui placement with inherited wisdom')}
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-accent to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">✨</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {t('立竿見影', 'Immediate Results')}
              </h3>
              <p className="text-muted-foreground">
                {t('3 週見效效果顯著', '3 weeks for visible results')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {t('準備改變您的生活氣場嗎？', 'Ready to Transform Your Life Energy Field?')}
          </h2>
          <p className="text-lg text-white/90 mb-8">
            {t(
              '立即預約免費諮詢，體驗量子風水空氣淨化的神奇效果。',
              'Book a free consultation now and experience the magical effects of quantum feng shui air purification.'
            )}
          </p>
          <Link href="/contact">
            <a className="inline-flex items-center px-10 py-5 bg-accent text-background font-bold text-lg rounded-lg hover:bg-accent/90 hover:shadow-2xl transition-all">
              {t('立即預約', 'Book Now')}
              <ArrowRight className="ml-2" size={24} />
            </a>
          </Link>
        </div>
      </section>
    </div>
  );
}
