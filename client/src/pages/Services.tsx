import { Check, Clock, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ServicesProps {
  language: 'zh' | 'en';
}

export default function Services({ language }: ServicesProps) {
  const content = language === 'zh'
    ? {
        pageTitle: '我們的服務',
        pageDesc: '三合一量子風水空氣淨化服務，為您打造完整的空間能量解決方案',
        packagesTitle: '服務套餐',
        packages: [
          {
            name: '基礎套餐',
            price: 'HK$5,000 - HK$8,000',
            subtitle: '個人住宅',
            features: [
              '一台 Amway Sky 空氣淨化機',
              '一次量子調頻（1-2 小時）',
              '基礎風水評估和擺位建議',
              '1 個月的跟進服務',
            ],
            ideal: '首次嘗試客戶 | 小家庭 | 預算有限',
            results: ['空氣質量改善', '睡眠質量提升', '情緒狀態改善', '基礎運勢提升'],
          },
          {
            name: '高級套餐',
            price: 'HK$15,000 - HK$25,000',
            subtitle: '企業辦公室',
            features: [
              '2-3 台 Amway Sky 空氣淨化機',
              '深度量子調頻（3-4 小時）',
              '詳細風水分析和優化設計',
              '3 個月的跟進服務',
              '員工健康和工作效率報告',
            ],
            ideal: '企業辦公室 | 中型住宅 | 全面改善',
            results: ['辦公室氛圍改善', '工作效率提升 20-30%', '業績增長', '人際關係改善'],
            featured: true,
          },
          {
            name: 'VIP 套餐',
            price: 'HK$50,000+',
            subtitle: '高端定制',
            features: [
              '全面空氣淨化系統設計',
              '完整量子調頻方案（全天候）',
              '專業風水設計和裝修指導',
              '6 個月的跟進服務',
              '定期能量檢測和調整',
              '專屬顧問支持',
            ],
            ideal: '高端住宅 | 大型企業 | 最佳效果',
            results: ['全方位能量優化', '長期穩定效果', '顯著運勢改善', '全面提升'],
          },
        ],
        processTitle: '我們的服務流程',
        process: [
          {
            step: 1,
            title: '初步諮詢',
            time: '30 分鐘',
            desc: '了解您的需求和期望，評估您的空間和能量狀況，推薦適合的服務套餐。',
          },
          {
            step: 2,
            title: '空間評估',
            time: '1-2 小時',
            desc: '進行詳細的空間評估，測量空氣質量和能量頻率，分析風水格局。',
          },
          {
            step: 3,
            title: '量子調頻',
            time: '2-4 小時',
            desc: '安裝 Amway Sky 空氣淨化機，進行量子調頻能量調整，激活正能量。',
          },
          {
            step: 4,
            title: '風水擺位',
            time: '1-2 小時',
            desc: '根據風水原理進行空間佈置，優化財位、事業位等，提升能量流動。',
          },
          {
            step: 5,
            title: '跟進服務',
            time: '1-6 個月',
            desc: '定期檢測和調整，解答疑問，確保效果的持續性。',
          },
        ],
        faqTitle: '常見問題',
        faqs: [
          {
            q: '量子調頻是什麼？',
            a: '量子調頻是基於量子物理原理的能量調整技術。我們使用特殊的設備和技術，將空間的能量頻率提升到最佳狀態，從而改善居住者的身心狀態。',
          },
          {
            q: '見效需要多長時間？',
            a: '大多數客戶在 1-3 週內會感受到明顯的改變。完整的效果通常在 3 個月內顯現。',
          },
          {
            q: '效果能保持多久？',
            a: '通過定期的跟進和調整，效果可以保持 6-12 個月或更長。我們建議每 6-12 個月進行一次能量檢測。',
          },
          {
            q: '我可以只購買空氣淨化機嗎？',
            a: '當然可以。但我們建議進行完整的三合一服務，以獲得最佳效果。',
          },
        ],
        ctaButton: '預約諮詢',
      }
    : {
        pageTitle: 'Our Services',
        pageDesc: 'Three-in-One Quantum Feng Shui Air Purification Service - Complete Spatial Energy Solutions',
        packagesTitle: 'Service Packages',
        packages: [
          {
            name: 'Basic Package',
            price: 'HK$5,000 - HK$8,000',
            subtitle: 'Personal Residence',
            features: [
              'One Amway Sky air purifier',
              'One quantum frequency tuning session (1-2 hours)',
              'Basic feng shui assessment and placement recommendations',
              '1 month follow-up service',
            ],
            ideal: 'First-time customers | Small families | Budget-conscious',
            results: ['Air quality improvement', 'Better sleep quality', 'Improved emotional state', 'Basic luck enhancement'],
          },
          {
            name: 'Premium Package',
            price: 'HK$15,000 - HK$25,000',
            subtitle: 'Corporate Office',
            features: [
              '2-3 Amway Sky air purifiers',
              'Deep quantum frequency tuning (3-4 hours)',
              'Detailed feng shui analysis and optimization design',
              '3 months follow-up service',
              'Employee health and work efficiency report',
            ],
            ideal: 'Corporate offices | Medium residences | Comprehensive improvements',
            results: ['Office atmosphere improvement', '20-30% work efficiency increase', 'Business growth', 'Better relationships'],
            featured: true,
          },
          {
            name: 'VIP Package',
            price: 'HK$50,000+',
            subtitle: 'Premium Customization',
            features: [
              'Complete air purification system design',
              'Comprehensive quantum frequency tuning (24/7)',
              'Professional feng shui design and renovation guidance',
              '6 months follow-up service',
              'Regular energy detection and adjustment',
              'Dedicated consultant support',
            ],
            ideal: 'Luxury homes | Large enterprises | Optimal results',
            results: ['Comprehensive energy optimization', 'Long-term stable results', 'Significant luck improvement', 'Complete enhancement'],
          },
        ],
        processTitle: 'Our Service Process',
        process: [
          {
            step: 1,
            title: 'Initial Consultation',
            time: '30 minutes',
            desc: 'Understand your needs, assess your space and energy condition, recommend suitable packages.',
          },
          {
            step: 2,
            title: 'Space Assessment',
            time: '1-2 hours',
            desc: 'Conduct detailed evaluation, measure air quality and energy frequency, analyze feng shui layout.',
          },
          {
            step: 3,
            title: 'Quantum Tuning',
            time: '2-4 hours',
            desc: 'Install Amway Sky purifier, perform quantum frequency adjustment, activate positive energy.',
          },
          {
            step: 4,
            title: 'Feng Shui Placement',
            time: '1-2 hours',
            desc: 'Arrange space according to feng shui principles, optimize wealth and career areas.',
          },
          {
            step: 5,
            title: 'Follow-up Service',
            time: '1-6 months',
            desc: 'Regular detection and adjustment, answer questions, ensure continuous effectiveness.',
          },
        ],
        faqTitle: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'What is quantum frequency tuning?',
            a: 'Quantum frequency tuning is an energy adjustment technique based on quantum physics principles. We use special equipment to elevate your space\'s energy frequency to optimal levels.',
          },
          {
            q: 'How long does it take to see results?',
            a: 'Most customers notice significant changes within 1-3 weeks. Complete results typically manifest within 3 months.',
          },
          {
            q: 'How long do the results last?',
            a: 'Through regular follow-ups and adjustments, effects can last 6-12 months or longer. We recommend energy detection every 6-12 months.',
          },
          {
            q: 'Can I just buy the air purifier?',
            a: 'Of course. However, we recommend the complete three-in-one service for optimal results.',
          },
        ],
        ctaButton: 'Book Consultation',
      };

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-primary/20 via-background to-background">
        <div className="container max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            {content.pageTitle}
          </h1>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            {content.pageDesc}
          </p>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 md:py-24">
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-12">
            {content.packagesTitle}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.packages.map((pkg, idx) => (
              <div
                key={idx}
                className={`rounded-lg border transition-all ${
                  pkg.featured
                    ? 'border-secondary bg-card ring-2 ring-secondary/50 scale-105 md:scale-100'
                    : 'border-border bg-card'
                }`}
              >
                <div className="p-8">
                  {pkg.featured && (
                    <div className="mb-4 inline-block px-3 py-1 rounded-full bg-secondary/20 text-secondary text-sm font-bold">
                      {language === 'zh' ? '推薦' : 'Recommended'}
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">{pkg.subtitle}</p>
                  <p className="text-3xl font-bold text-secondary mb-6">{pkg.price}</p>

                  <div className="mb-6">
                    <p className="text-sm font-bold text-muted-foreground mb-3">
                      {language === 'zh' ? '包含內容：' : 'Includes:'}
                    </p>
                    <ul className="space-y-2">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                          <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6 pb-6 border-t border-border">
                    <p className="text-sm font-bold text-muted-foreground mb-2">
                      {language === 'zh' ? '適合人群：' : 'Ideal For:'}
                    </p>
                    <p className="text-sm text-foreground">{pkg.ideal}</p>
                  </div>

                  <div className="mb-6">
                    <p className="text-sm font-bold text-muted-foreground mb-3">
                      {language === 'zh' ? '預期效果：' : 'Expected Results:'}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {pkg.results.map((result, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-medium"
                        >
                          {result}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a href="/contact">
                    <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                      {content.ctaButton}
                    </Button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-12">
            {content.processTitle}
          </h2>

          <div className="space-y-6">
            {content.process.map((p, idx) => (
              <div key={idx} className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-secondary text-secondary-foreground font-bold">
                    {p.step}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-2">{p.title}</h3>
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-4 h-4 text-accent" />
                    <span className="text-sm text-muted-foreground">{p.time}</span>
                  </div>
                  <p className="text-foreground/80">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Videos Section */}
      <section className="py-16 md:py-24">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              {language === 'zh' ? '教育視頻 - 深入了解量子風水' : 'Educational Videos - Learn More'}
            </h2>
            <p className="text-lg text-foreground max-w-2xl mx-auto">
              {language === 'zh'
                ? '購看黎Sir的量子風水講座，深入了解空氣淨化與量子能量的完整原理'
                : 'Watch Master Lai\'s lectures to understand the complete principles of air purification and quantum energy'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Video 3 */}
            <div className="rounded-lg overflow-hidden border border-border hover:border-secondary transition-colors">
              <div className="aspect-video bg-black">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/qU5N5gjRS1k"
                  title="淨化空間氣場能量與過濾空氣懸浮粒子"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
              <div className="p-4 bg-background">
                <h3 className="text-lg font-semibold text-secondary mb-2">
                  {language === 'zh'
                    ? '淨化空間氣場能量與過濾空氣懸浮粒子'
                    : 'Purifying Space Energy and Filtering Air Particles'}
                </h3>
              </div>
            </div>

            {/* Video 4 */}
            <div className="rounded-lg overflow-hidden border border-border hover:border-secondary transition-colors">
              <div className="aspect-video bg-black">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/B5BMYjmIN-Q"
                  title="空氣淨化器與量子能量調頻儀（上）"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
              <div className="p-4 bg-background">
                <h3 className="text-lg font-semibold text-secondary mb-2">
                  {language === 'zh'
                    ? '空氣淨化器與量子能量調頻儀（上）'
                    : 'Air Purifiers & Quantum Energy Tuning (Part 1)'}
                </h3>
                <p className="text-xs text-foreground/70 mt-2">
                  {language === 'zh' ? '實際應用提升室內空間風水氣場' : 'Practical applications for improving indoor feng shui'}
                </p>
              </div>
            </div>

            {/* Video 5 */}
            <div className="rounded-lg overflow-hidden border border-border hover:border-secondary transition-colors">
              <div className="aspect-video bg-black">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/C7oqpToh1GY"
                  title="空氣淨化器與量子能量調頻儀（下）"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
              <div className="p-4 bg-background">
                <h3 className="text-lg font-semibold text-secondary mb-2">
                  {language === 'zh'
                    ? '空氣淨化器與量子能量調頻儀（下）'
                    : 'Air Purifiers & Quantum Energy Tuning (Part 2)'}
                </h3>
                <p className="text-xs text-foreground/70 mt-2">
                  {language === 'zh' ? '顧覆身心靈及風水的思維模式' : 'Transforming mind-body-spirit and feng shui perspectives'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-12">
            {content.faqTitle}
          </h2>

          <div className="space-y-6">
            {content.faqs.map((faq, idx) => (
              <div key={idx} className="p-6 rounded-lg bg-card border border-border">
                <h3 className="text-lg font-bold text-foreground mb-3">{faq.q}</h3>
                <p className="text-foreground/80">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary/20 to-accent/20">
        <div className="container max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            {language === 'zh' ? '準備開始改變嗎？' : 'Ready to Begin?'}
          </h2>
          <p className="text-lg text-foreground mb-8">
            {language === 'zh'
              ? '立即聯繫我們預約免費諮詢。'
              : 'Contact us now to book a free consultation.'}
          </p>
          <a href="/contact">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
              {content.ctaButton}
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
