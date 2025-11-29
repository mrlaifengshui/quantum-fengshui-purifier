import { ArrowRight, Zap, Wind, Compass, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HomeProps {
  language: 'zh' | 'en';
}

export default function Home({ language }: HomeProps) {
  const content = language === 'zh'
    ? {
        heroTitle: '量子風水空氣淨化服務',
        heroSubtitle: '物質清淨 × 能量調頻 × 豐盛顯化',
        heroTagline: '不只是淨化空氣，更是調頻人生氣場',
        ctaButton: '立即諮詢',
        servicesTitle: '三合一服務模式',
        servicesDesc: '我們結合了現代空氣淨化科技、量子調頻能量和傳統風水智慧，為您打造一個完整的空間能量解決方案。',
        services: [
          {
            icon: Wind,
            title: '改善空間粒子',
            desc: '使用 Amway Sky 等頂級空氣淨化機，釋放森林級數的負離子，過濾懸浮粒子、細菌和病毒。',
          },
          {
            icon: Zap,
            title: '提升能量意識',
            desc: '獨家量子調頻技術，驅走負能量，提升正能量，改善情緒、睡眠和工作狀態。',
          },
          {
            icon: Compass,
            title: '優化空間氣場',
            desc: '專業風水分析和擺位設計，根據八卦五行原理優化空間，提升財運、事業運和人際運。',
          },
        ],
        testimonialsTitle: '客戶見證 - 實效證明',
        testimonials: [
          {
            name: '張太太',
            role: '企業高管',
            quote: '這不只是空氣變好，是整個人生磁場都轉變了！',
            result: '睡眠改善 | 精神恢復 | 運勢轉變',
          },
          {
            name: '陳先生',
            role: '設計公司老闆',
            quote: '投資報酬率遠超預期！',
            result: '業績翻紅 | 員工積極 | 貴人運提升',
          },
        ],
        benefitsTitle: '為什麼選擇我們？',
        benefits: [
          {
            icon: Star,
            title: '科學驗證',
            desc: '採用國際頂級品牌，通過多項認證，99.97% 過濾效率',
          },
          {
            icon: Zap,
            title: '獨家技術',
            desc: '基於量子物理原理，改善空間能量頻率',
          },
          {
            icon: Compass,
            title: '傳統智慧',
            desc: '融合 5000 年風水智慧，根據個人八字定制',
          },
          {
            icon: ArrowRight,
            title: '立竿見影',
            desc: '3 週內明顯改善，3 個月內徹底轉變',
          },
        ],
        ctaSection: '準備改變您的生活氣場嗎？',
        ctaDesc: '立即預約免費諮詢，了解如何透過量子風水空氣淨化服務改善您的健康、工作和運勢。',
      }
    : {
        heroTitle: 'Quantum Feng Shui Air Purification Service',
        heroSubtitle: 'Physical Cleansing × Energy Tuning × Abundance Manifestation',
        heroTagline: 'More than just purifying air, it\'s tuning your life\'s energy field',
        ctaButton: 'Consult Now',
        servicesTitle: 'Three-in-One Service Model',
        servicesDesc: 'We combine modern air purification technology, quantum frequency tuning, and traditional feng shui wisdom to create a complete spatial energy solution for you.',
        services: [
          {
            icon: Wind,
            title: 'Improve Spatial Particles',
            desc: 'Premium air purifiers like Amway Sky, release forest-level negative ions, filter suspended particles, bacteria, and viruses.',
          },
          {
            icon: Zap,
            title: 'Elevate Energy Consciousness',
            desc: 'Exclusive quantum frequency tuning technology, drive away negative energy, elevate positive energy, improve mood, sleep, and work performance.',
          },
          {
            icon: Compass,
            title: 'Optimize Spatial Energy Field',
            desc: 'Professional feng shui analysis and placement design, optimize space based on Ba Gua and Five Elements principles.',
          },
        ],
        testimonialsTitle: 'Customer Testimonials - Proven Results',
        testimonials: [
          {
            name: 'Mrs. Zhang',
            role: 'Corporate Executive',
            quote: 'It\'s not just the air getting better, my entire life\'s energy field has transformed!',
            result: 'Sleep Improved | Mental Recovery | Luck Transformed',
          },
          {
            name: 'Mr. Chen',
            role: 'Design Company Owner',
            quote: 'The return on investment far exceeded expectations!',
            result: 'Performance Doubled | Employee Motivation | Luck Enhanced',
          },
        ],
        benefitsTitle: 'Why Choose Us?',
        benefits: [
          {
            icon: Star,
            title: 'Scientifically Verified',
            desc: 'Premium international brands, multiple certifications, 99.97% filtration efficiency',
          },
          {
            icon: Zap,
            title: 'Exclusive Technology',
            desc: 'Based on quantum physics principles, improves spatial energy frequency',
          },
          {
            icon: Compass,
            title: 'Traditional Wisdom',
            desc: 'Integrates 5000 years of feng shui wisdom, customized based on personal Ba Zi',
          },
          {
            icon: ArrowRight,
            title: 'Immediate Results',
            desc: 'Noticeable improvement in 3 weeks, complete transformation in 3 months',
          },
        ],
        ctaSection: 'Ready to Transform Your Life\'s Energy Field?',
        ctaDesc: 'Book a free consultation now to learn how quantum feng shui air purification can improve your health, career, and luck.',
      };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/20 via-background to-background py-20 md:py-32">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-secondary mb-4">
              {content.heroTitle}
            </h1>
            <p className="text-xl md:text-2xl text-foreground mb-6">
              {content.heroSubtitle}
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              {content.heroTagline}
            </p>
            <a href="/contact">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                {content.ctaButton}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              {content.servicesTitle}
            </h2>
            <p className="text-lg text-foreground max-w-2xl mx-auto">
              {content.servicesDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-lg bg-card border border-border hover:border-secondary transition-colors"
                >
                  <Icon className="w-12 h-12 text-secondary mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-foreground/80">
                    {service.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              {content.testimonialsTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {content.testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="p-8 rounded-lg bg-background border border-border"
              >
                <p className="text-lg text-foreground mb-4 italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-secondary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-sm text-accent mt-4 font-medium">
                  {testimonial.result}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              {content.benefitsTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <div key={idx} className="text-center">
                  <Icon className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-foreground/80">
                    {benefit.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Videos Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              {language === 'zh' ? '黎Sir 量子風水講座' : 'Master Lai\'s Quantum Feng Shui Lectures'}
            </h2>
            <p className="text-lg text-foreground max-w-2xl mx-auto">
              {language === 'zh'
                ? '深入了解空氣淨化與量子風水的完整原理'
                : 'Learn the complete principles of air purification and quantum feng shui'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Video 1 */}
            <div className="rounded-lg overflow-hidden border border-border hover:border-secondary transition-colors">
              <div className="aspect-video bg-black">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/eaVCJCSrqC0"
                  title="怎樣的空氣淨化機才有風水功能？"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
              <div className="p-4 bg-background">
                <h3 className="text-lg font-semibold text-secondary mb-2">
                  {language === 'zh'
                    ? '怎樣的空氣淨化機才有風水功能？'
                    : 'What Air Purifiers Have Feng Shui Functions?'}
                </h3>
                <p className="text-sm text-foreground/80">
                  {language === 'zh'
                    ? '轉化負能量、增強氣場、助人健康精神有活力、提升頻率運氣、生意增長財源廣進'
                    : 'Transform negative energy, enhance aura, promote health and vitality'}
                </p>
              </div>
            </div>

            {/* Video 2 */}
            <div className="rounded-lg overflow-hidden border border-border hover:border-secondary transition-colors">
              <div className="aspect-video bg-black">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/kqsD2lVRyek"
                  title="量子風水師黎Sir大談電器與健康關係"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
              <div className="p-4 bg-background">
                <h3 className="text-lg font-semibold text-secondary mb-2">
                  {language === 'zh'
                    ? '量子風水師黎Sir大談電器與健康關係'
                    : 'Master Lai Discusses Electronics and Health Relationship'}
                </h3>
                <p className="text-sm text-foreground/80">
                  {language === 'zh'
                    ? '深入探討電器產品與人體健康、運勢的關係'
                    : 'In-depth discussion on electronics and human health and fortune'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary/20 to-accent/20">
        <div className="container max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            {content.ctaSection}
          </h2>
          <p className="text-lg text-foreground mb-8">
            {content.ctaDesc}
          </p>
          <a href="/contact">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
              {content.ctaButton}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
