import { Link } from 'wouter';
import { ArrowRight, Sparkles, Wind, Compass, CheckCircle2, Quote } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

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
            {t('量子風水空氣淨化方案 | 香港專業風水淨化器服務', 'Quantum Feng Shui Air Purification | Professional Hong Kong Service')}<br />
            <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-accent via-secondary to-primary mt-2">
              {t('物質清淨 × 能量調頻 × 豐盛顯化', 'Material Purity × Energy Tuning × Abundance Manifestation')}
            </span>
            <br />
            <span className="block text-xl md:text-2xl text-muted-foreground font-normal mt-4">
              {t(
                '結合頂級空氣淨化科技與量子調頻技術，精準擺設風水吉位，為您打造物質清淨、非物質能量和諧、豐盛顯化的現代家居環境。',
                'Combining premium air purification technology with quantum frequency tuning, precisely positioned for feng shui prosperity.'
              )}
            </span>
          </h1>
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
              {t('三合一量子風水空氣淨化服務', 'Three-in-One Quantum Feng Shui Air Purification Service')}
              <br />
              <span className="text-xl md:text-2xl font-normal text-muted-foreground mt-4 block">
                {t(
                  '從物質、能量、風水三個層面全方位提升您的生活品質',
                  'Enhance your quality of life from material, energy, and feng shui perspectives'
                )}
              </span>
            </h2>
          </div>

          {/* 專業雙語圖片展示 */}
          <div className="mb-16 flex justify-center">
            <div className="w-full max-w-5xl">
              <img 
                src="/images/hero-quantum-fengshui.jpg" 
                alt="量子風水空氣淨化服務 - 結合科學、能量與風水的專業香港服務，99.97%高效過濾技術 | Quantum Feng Shui Air Purification - Professional Hong Kong Service combining Science, Energy and Feng Shui with 99.97% Filtration Technology"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
            {/* Service 1 */}
            <div className="bg-section-light/50 border border-border rounded-2xl p-8 hover:border-primary hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 transform hover:-translate-y-1 text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Wind className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">
                {t('物質清淨 - 99.97% 高效過濾', 'Material Purity - 99.97% Filtration')}
              </h3>
              <p className="text-accent font-medium mb-4 text-sm tracking-wide uppercase">
                {t('頂級空氣淨化技術', 'Premium Air Purification')}
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {t(
                  '採用頂級HEPA濾網和活性炭技術，有效去除空氣中的PM2.5、甲醛、細菌病毒等有害物質，為您創造潔淨健康的呼吸環境。',
                  'Using premium HEPA filters and activated carbon technology to effectively remove harmful substances.'
                )}
              </p>
              <ul className="space-y-3 text-left w-full">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-success mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">{t('99.97% 過濾效率', '99.97% Filtration')}</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-success mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">{t('去除甲醛、異味', 'Remove Formaldehyde')}</span>
                </li>
                <li className="flex items-start">
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
                {t('能量調頻 - 量子頻率優化', 'Energy Tuning - Quantum Frequency Optimization')}
              </h3>
              <p className="text-accent font-medium mb-4 text-sm tracking-wide uppercase">
                {t('改善睡眠品質與能量場', 'Improve Sleep Quality & Energy Field')}
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {t(
                  '運用量子物理學原理，透過特定頻率共振技術，調整室內空間的能量場，提升居住者的身心靈和諧狀態，改善睡眠品質與情緒健康。',
                  'Using quantum physics principles to adjust indoor energy fields through specific frequency resonance.'
                )}
              </p>
              <ul className="space-y-3 text-left w-full">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-success mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">{t('釋放量子頻率', 'Quantum Frequency')}</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-success mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">{t('能量場優化', 'Energy Field')}</span>
                </li>
                <li className="flex items-start">
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
                {t('豐盛顯化 - 專業風水擺位', 'Abundance Manifestation - Professional Feng Shui Placement')}
              </h3>
              <p className="text-accent font-medium mb-4 text-sm tracking-wide uppercase">
                {t('提升事業運財運健康運', 'Enhance Career, Wealth & Health Fortune')}
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {t(
                  '結合傳統風水智慧與現代科學測量，精準計算吉位方位，合理擺放淨化設備，引導正能量流動，提升事業運、財運、健康運，創造豐盛顯化環境。',
                  'Combining traditional feng shui wisdom with modern scientific measurement for optimal placement.'
                )}
              </p>
              <ul className="space-y-3 text-left w-full">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-success mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">{t('專業風水分析', 'Professional Analysis')}</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-success mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">{t('吉位精準定位', 'Precise Positioning')}</span>
                </li>
                <li className="flex items-start">
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

      {/* Video Section - 深色背景 */}
      <section className="py-20 bg-section-dark">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-xl md:text-2xl font-normal text-muted-foreground">
              {t(
                '了解如何結合量子調頻技術與頂級空氣淨化系統，為您創造完美的能量空間',
                'Discover how quantum tuning technology combines with premium air purification for perfect energy spaces'
              )}
            </h2>
          </div>
          
          {/* Desktop: 3 columns grid */}
          <div className="hidden md:grid md:grid-cols-3 gap-4">
            <div></div>
            <div>
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-border hover:shadow-accent/20 transition-all duration-300">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/eaVCJCSrqC0?si=n1Bo_jNL2y5FBhQC"
                  title="量子風水空氣淨化技術示範"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div></div>
          </div>
          {/* Mobile: centered directly */}
          <div className="md:hidden max-w-4xl mx-auto">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-border hover:shadow-accent/20 transition-all duration-300">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/eaVCJCSrqC0?si=n1Bo_jNL2y5FBhQC"
                title="量子風水空氣淨化技術示範"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          
          {/* Empty row after video */}
          <div className="mb-12"></div>
        </div>
      </section>

      {/* Empty row between sections */}
      <div className="py-8"></div>

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
              {t('香港客戶真實見證 - 量子風水改善案例', 'Hong Kong Customer Testimonials - Quantum Feng Shui Success Stories')}
              <br />
              <span className="text-xl md:text-2xl font-normal text-muted-foreground mt-4 block">
                {t(
                  '超過100位客戶見證了量子風水的神奇力量',
                  'Over 100 customers have experienced the power of quantum feng shui'
                )}
              </span>
            </h2>
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

      {/* Empty row between sections */}
      <div className="py-8"></div>

      {/* YouTube Video Section 2 - 深色背景 */}
      <section className="py-20 bg-section-dark">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-xl md:text-2xl font-normal text-muted-foreground">
              {t(
                '了解量子風水在電磁波影響健康的應用',
                'Understanding Quantum Feng Shui Applications in EMF Health Impact'
              )}
            </h2>
          </div>
          
          {/* Desktop: 3 columns grid */}
          <div className="hidden md:grid md:grid-cols-3 gap-4">
            <div></div>
            <div>
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-border hover:shadow-accent/20 transition-all duration-300">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/kqsD2lVRyek?start=9"
                  title="量子風水空氣淨化"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div></div>
          </div>
          {/* Mobile: centered directly */}
          <div className="md:hidden max-w-4xl mx-auto">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-border hover:shadow-accent/20 transition-all duration-300">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/kqsD2lVRyek?start=9"
                title="量子風水空氣淨化"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          
          {/* Empty row after video */}
          <div className="mb-12"></div>
        </div>
      </section>

      {/* Blog Articles Section - 淺色背景 */}
      <section className="py-20 bg-section-light">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-1 bg-primary/10 border border-primary/30 rounded-full">
              <span className="text-primary font-medium text-sm">
                {t('量子風水知識', 'Quantum Feng Shui Knowledge')}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              {t('精選博客文章 - 風水淨化專業指南', 'Featured Blog Articles - Professional Feng Shui Purification Guide')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t(
                '探索辦公室風水、臥室和諧、量子能量場優化的專業知識，幫助您提升生活品質',
                'Explore professional knowledge on office feng shui, bedroom harmony, and quantum energy field optimization'
              )}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Office Career Article */}
            <Link href="/blog/office-career-feng-shui">
              <a className="block bg-section-dark border border-border rounded-2xl overflow-hidden hover:border-accent hover:shadow-xl hover:shadow-accent/10 transition-all duration-300 transform hover:-translate-y-1">
                <div className="p-8">
                  <div className="inline-block mb-4 px-3 py-1 bg-accent/10 border border-accent/30 rounded-full">
                    <span className="text-accent font-medium text-xs">
                      {t('事業發展', 'Career Development')}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {t('辦公室空氣淨化機擺錯位置？量子風水教你3招扭轉事業運', 'Office Air Purifier Wrong Position? 3 Quantum Feng Shui Tricks to Transform Your Career')}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {t(
                      '你是否發現，明明工作很努力，卻總是得不到上司的賞識？了解如何用正確的空氣淨化機擺位，扭轉事業困境，開啟升職加薪之路！',
                      'Working hard but no recognition? Learn correct air purifier placement to transform your career!'
                    )}
                  </p>
                  <div className="flex items-center text-accent font-medium">
                    {t('閱讀全文', 'Read More')}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </div>
              </a>
            </Link>

            {/* Bedroom Harmony Article */}
            <Link href="/blog/bedroom-harmony-feng-shui">
              <a className="block bg-section-dark border border-border rounded-2xl overflow-hidden hover:border-secondary hover:shadow-xl hover:shadow-secondary/10 transition-all duration-300 transform hover:-translate-y-1">
                <div className="p-8">
                  <div className="inline-block mb-4 px-3 py-1 bg-secondary/10 border border-secondary/30 rounded-full">
                    <span className="text-secondary font-medium text-xs">
                      {t('關係和諧', 'Relationship Harmony')}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {t('夫妻臥室的量子風水秘密：如何用空氣淨化提升感情和諧度', 'Couple Bedroom Quantum Feng Shui Secrets: Enhance Relationship Harmony with Air Purification')}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {t(
                      '臥室不僅是休息的場所，更是夫妻感情能量交融的核心空間。空氣淨化機的正確擺位與量子調頻，能有效提升臥室的「感情頻率」，讓愛與和諧重新流動。',
                      'Bedroom is not just for rest, but core space for emotional energy. Correct placement can enhance emotional frequency.'
                    )}
                  </p>
                  <div className="flex items-center text-secondary font-medium">
                    {t('閱讀全文', 'Read More')}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </div>
              </a>
            </Link>
          </div>

          <div className="text-center mt-12">
            <Link href="/blog">
              <a className="inline-flex items-center px-10 py-4 bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold rounded-xl hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 transform hover:-translate-y-1">
                {t('探索更多風水淨化知識', 'Explore More Feng Shui Purification Knowledge')}
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
