import { Link } from 'wouter';
import { ArrowRight, Sparkles, Wind, Compass, CheckCircle2, Quote } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import BrandCard from '../components/BrandCard';
import { brands } from '../lib/brands';

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Hero Section - 漸層背景 */}
      <section className="relative bg-gradient-to-br from-primary/20 via-background to-secondary/20 py-20 md:py-32">
        <div className="absolute inset-0 bg-[url('/images/hero-pattern.svg')] opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <div className="inline-block mb-6 px-6 py-2 bg-accent/10 border border-accent/30 rounded-full">
            <span className="text-accent font-medium text-sm tracking-wide">
              {t('科學 × 能量 × 風水', 'Science × Energy × Feng Shui')}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight tracking-tight">
            {t('量子風水空氣淨化服務', 'Quantum Feng Shui')}<br />
            <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-accent via-secondary to-primary">
              {t('物質清淨 × 能量調頻 × 豐盛顯化', 'Air Purification Service')}
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
            {t(
              '結合頂級空氣淨化科技與量子調頻技術，精準擺設風水吉位，為您打造物質清淨、能量和諧、豐盛顯化的現代家居環境。',
              'Combining premium air purification technology with quantum frequency tuning, precisely positioned for feng shui prosperity.'
            )}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact">
              <a className="inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-accent to-secondary text-accent-foreground font-semibold rounded-xl hover:shadow-xl hover:shadow-accent/30 transition-all duration-300 transform hover:-translate-y-1">
                {t('立即預約', 'Book Now')}
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Link>
            <Link href="/services">
              <a className="inline-flex items-center justify-center px-10 py-4 bg-transparent border-2 border-accent/50 text-accent font-semibold rounded-xl hover:bg-accent/10 hover:border-accent transition-all duration-300">
                {t('了解服務', 'Learn More')}
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* Three-in-One Service Section - 淺色背景 */}
      <section className="py-20 bg-section-light">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-1 bg-secondary/10 border border-secondary/30 rounded-full">
              <span className="text-secondary font-medium text-sm">
                {t('核心服務', 'Core Services')}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              {t('三合一服務模式', 'Three-in-One Service Model')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed text-center md:text-center">
              {t(
                '從物質、能量、風水三個層面全方位提升您的生活品質',
                'Enhance your quality of life from material, energy, and feng shui perspectives'
              )}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
            {/* Service 1 */}
            <div className="bg-section-light/50 border border-border rounded-2xl p-8 hover:border-primary hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 transform hover:-translate-y-1 text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Wind className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">
                {t('改善空間粒子', 'Improve Air Quality')}
              </h3>
              <p className="text-accent font-medium mb-4 text-sm tracking-wide uppercase">
                {t('空氣淨化', 'Air Purification')}
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {t(
                  '採用頂級HEPA濾網和活性炭技術，有效去除空氣中的PM2.5、甲醛、細菌病毒等有害物質，為您創造潔淨健康的呼吸環境。',
                  'Using premium HEPA filters and activated carbon technology to effectively remove harmful substances.'
                )}
              </p>
              <ul className="space-y-3 text-left w-full">
                <li className="flex items-start justify-center">
                  <CheckCircle2 className="w-5 h-5 text-success mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">{t('99.97% 過濾效率', '99.97% Filtration')}</span>
                </li>
                <li className="flex items-start justify-center">
                  <CheckCircle2 className="w-5 h-5 text-success mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">{t('去除甲醛、異味', 'Remove Formaldehyde')}</span>
                </li>
                <li className="flex items-start justify-center">
                  <CheckCircle2 className="w-5 h-5 text-success mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">{t('抗菌防霉技術', 'Antibacterial Tech')}</span>
                </li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="bg-section-light/50 border border-border rounded-2xl p-8 hover:border-secondary hover:shadow-xl hover:shadow-secondary/20 transition-all duration-300 transform hover:-translate-y-1 text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary/30 to-accent/30 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Sparkles className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">
                {t('提升能量頻率', 'Enhance Energy')}
              </h3>
              <p className="text-accent font-medium mb-4 text-sm tracking-wide uppercase">
                {t('量子調頻', 'Quantum Tuning')}
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {t(
                  '運用量子物理學原理，透過特定頻率共振技術，調整室內空間的能量場，提升居住者的身心靈和諧狀態，改善睡眠品質與情緒健康。',
                  'Using quantum physics principles to adjust indoor energy fields through specific frequency resonance.'
                )}
              </p>
              <ul className="space-y-3 text-left w-full">
                <li className="flex items-start justify-center">
                  <CheckCircle2 className="w-5 h-5 text-success mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">{t('負離子釋放', 'Negative Ions')}</span>
                </li>
                <li className="flex items-start justify-center">
                  <CheckCircle2 className="w-5 h-5 text-success mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">{t('能量場優化', 'Energy Field')}</span>
                </li>
                <li className="flex items-start justify-center">
                  <CheckCircle2 className="w-5 h-5 text-success mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">{t('改善睡眠品質', 'Better Sleep')}</span>
                </li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="bg-section-light/50 border border-border rounded-2xl p-8 hover:border-accent hover:shadow-xl hover:shadow-accent/20 transition-all duration-300 transform hover:-translate-y-1 text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-to-br from-accent/30 to-primary/30 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Compass className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">
                {t('激活豐盛磁場', 'Activate Abundance')}
              </h3>
              <p className="text-accent font-medium mb-4 text-sm tracking-wide uppercase">
                {t('風水擺位', 'Feng Shui Placement')}
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {t(
                  '結合傳統風水智慧與現代科學測量，精準計算吉位方位，合理擺放淨化設備，引導正能量流動，提升事業運、財運、健康運，創造豐盛顯化環境。',
                  'Combining traditional feng shui wisdom with modern scientific measurement for optimal placement.'
                )}
              </p>
              <ul className="space-y-3 text-left w-full">
                <li className="flex items-start justify-center">
                  <CheckCircle2 className="w-5 h-5 text-success mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">{t('專業風水分析', 'Professional Analysis')}</span>
                </li>
                <li className="flex items-start justify-center">
                  <CheckCircle2 className="w-5 h-5 text-success mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">{t('吉位精準定位', 'Precise Positioning')}</span>
                </li>
                <li className="flex items-start justify-center">
                  <CheckCircle2 className="w-5 h-5 text-success mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">{t('提升運勢磁場', 'Enhance Fortune')}</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link href="/services">
              <a className="inline-flex items-center px-10 py-4 bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold rounded-xl hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 transform hover:-translate-y-1">
                {t('查看完整服務方案', 'View Complete Service Packages')}
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* Video Section - Amway Sky - 深色背景 */}
      <section className="py-20 bg-section-dark">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <div className="inline-block mb-4 px-4 py-1 bg-accent/10 border border-accent/30 rounded-full">
              <span className="text-accent font-medium text-sm">
                {t('頂級技術展示', 'Premium Technology Showcase')}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              {t('Amway Sky 量子風水空氣淨化機', 'Amway Sky Quantum Feng Shui Air Purifier')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed text-center md:text-center">
              {t(
                '了解 Amway Sky 如何結合量子調頻技術與頂級空氣淨化系統，為您創造完美的能量空間',
                'Discover how Amway Sky combines quantum tuning technology with premium air purification for perfect energy spaces'
              )}
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-border hover:shadow-accent/20 transition-all duration-300">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/eaVCJCSrqC0?si=n1Bo_jNL2y5FBhQC"
                title="Amway Sky 量子風水空氣淨化機"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials - 淺色背景 */}
      <section className="py-20 bg-section-light">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-1 bg-accent/10 border border-accent/30 rounded-full">
              <span className="text-accent font-medium text-sm">
                {t('客戶見證', 'Testimonials')}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              {t('真實客戶體驗分享', 'Real Customer Experiences')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed text-center md:text-center">
              {t(
                '超過100位客戶見證了量子風水的神奇力量',
                'Over 100 customers have experienced the power of quantum feng shui'
              )}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
            {[
              {
                name: t('張女士', 'Ms. Zhang'),
                title: t('中環商業顧問', 'Central Business Consultant'),
                content: t(
                  '使用服務3個月後，睡眠品質明顯改善，早上起床不再感到疲倦。辦公室的空氣也變得清新，工作效率提升了30%！',
                  'After 3 months, my sleep quality improved significantly. Office air became fresher, work efficiency increased by 30%!'
                ),
                rating: 5,
              },
              {
                name: t('李先生', 'Mr. Li'),
                title: t('灣仔IT企業家', 'Wan Chai IT Entrepreneur'),
                content: t(
                  '一直對風水半信半疑，但使用量子調頻後，業務真的出現突破性進展。客戶源源不絕，團隊氣氛也更加和諧。感謝專業團隊！',
                  'Business breakthrough after quantum tuning. Clients keep coming, team atmosphere improved. Thanks to the professional team!'
                ),
                rating: 5,
              },
              {
                name: t('陳太太', 'Mrs. Chen'),
                title: t('西半山家庭主婦', 'Mid-Levels Homemaker'),
                content: t(
                  '小孩的過敏症狀減輕了很多，家中的負能量消失，全家人都感覺更健康快樂。量子風水真的不是迷信，是有科學依據的！',
                  "Children's allergies reduced, negative energy disappeared. The whole family feels healthier and happier!"
                ),
                rating: 5,
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-section-dark border border-border rounded-2xl p-8 hover:border-accent hover:shadow-xl hover:shadow-accent/10 transition-all duration-300 text-center flex flex-col items-center"
              >
                <Quote className="w-10 h-10 text-accent/30 mb-4" />
                <p className="text-muted-foreground leading-relaxed mb-6 italic">"{testimonial.content}"</p>
                <div className="flex flex-col items-center pt-4 border-t border-border w-full space-y-3">
                  <div className="text-center">
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                  <div className="flex gap-1 justify-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-accent fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/cases">
              <a className="inline-flex items-center text-accent hover:text-secondary font-semibold text-lg transition-colors duration-300">
                {t('查看更多成功案例', 'View More Success Stories')}
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* Supported Brands Section - 深色背景 */}
      <section className="py-20 bg-section-dark">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-1 bg-primary/10 border border-primary/30 rounded-full">
              <span className="text-primary font-medium text-sm">
                {t('多品牌支持', 'Multi-Brand Support')}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              {t('支持的優質品牌', 'Supported Premium Brands')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed text-center md:text-center">
              {t(
                '無論您選擇哪個品牌，我們都提供完整的量子調頻和風水擺位服務',
                'We provide complete quantum tuning and feng shui positioning for all brands'
              )}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {brands.map((brand) => (
              <BrandCard key={brand.id} brand={brand} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/brands">
              <a className="inline-flex items-center text-accent hover:text-secondary font-semibold text-lg transition-colors duration-300">
                {t('查看所有品牌詳情', 'View All Brand Details')}
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section - 深色背景與漸層 */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-section-dark to-secondary/10">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-center">
            {t('準備好開始您的量子風水之旅了嗎？', 'Ready to Start Your Quantum Feng Shui Journey?')}
          </h2>
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed text-center max-w-3xl mx-auto">
            {t(
              '立即預約免費諮詢，讓我們的專業團隊為您打造專屬的能量提升方案',
              'Book a free consultation now and let our professional team create a customized energy enhancement plan for you'
            )}
          </p>
          <Link href="/contact">
            <a className="inline-flex items-center justify-center px-12 py-5 bg-gradient-to-r from-accent via-secondary to-primary text-accent-foreground font-bold text-lg rounded-xl hover:shadow-2xl hover:shadow-accent/40 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
              {t('免費諮詢預約', 'Free Consultation')}
              <ArrowRight className="ml-2 w-6 h-6" />
            </a>
          </Link>
        </div>
      </section>
    </div>
  );
}
