import { Link } from 'wouter';
import { Check, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Services() {
  const { t } = useLanguage();

  const packages = [
    {
      id: 'basic',
      name: t('基礎套餐', 'Basic Package'),
      nameEn: 'Basic Package',
      price: 'HK$2,000',
      description: t('適合小型空間的入門方案', 'Entry-level solution for small spaces'),
      features: [
        t('空氣淨化機安裝指導', 'Air purifier installation guidance'),
        t('基礎量子調頻（1次）', 'Basic quantum tuning (1 session)'),
        t('簡易風水擺位建議', 'Simple feng shui placement advice'),
        t('1個月跟進服務', '1-month follow-up service'),
      ],
    },
    {
      id: 'premium',
      name: t('進階套餐', 'Premium Package'),
      nameEn: 'Premium Package',
      price: 'HK$5,000',
      description: t('適合中型空間的全面方案', 'Comprehensive solution for medium spaces'),
      features: [
        t('空氣淨化機專業安裝', 'Professional air purifier installation'),
        t('完整量子調頻（3次）', 'Complete quantum tuning (3 sessions)'),
        t('專業風水擺位設計', 'Professional feng shui placement design'),
        t('空間能量場分析報告', 'Space energy field analysis report'),
        t('3個月跟進服務', '3-month follow-up service'),
        t('免費調整1次', '1 free adjustment'),
      ],
      recommended: true,
    },
    {
      id: 'ultimate',
      name: t('尊享套餐', 'Ultimate Package'),
      nameEn: 'Ultimate Package',
      price: 'HK$10,000',
      description: t('適合大型空間的頂級方案', 'Premium solution for large spaces'),
      features: [
        t('多台空氣淨化機部署方案', 'Multi-unit air purifier deployment plan'),
        t('持續量子調頻（6次）', 'Continuous quantum tuning (6 sessions)'),
        t('大師級風水擺位設計', 'Master-level feng shui placement design'),
        t('全方位能量場優化', 'Comprehensive energy field optimization'),
        t('定製能量頻率方案', 'Customized energy frequency plan'),
        t('6個月跟進服務', '6-month follow-up service'),
        t('免費調整3次', '3 free adjustments'),
        t('24/7 專屬客服', '24/7 dedicated customer service'),
      ],
    },
  ];

  const serviceProcess = [
    {
      step: '01',
      title: t('初步諮詢', 'Initial Consultation'),
      description: t('了解您的需求、空間特點和預算，推薦適合的品牌和方案。', 'Understand your needs, space characteristics, and budget, recommend suitable brands and plans.'),
    },
    {
      step: '02',
      title: t('空間評估', 'Space Assessment'),
      description: t('上門評估空間氣場、風水格局，制定詳細的優化方案。', 'On-site assessment of space energy field and feng shui layout, develop detailed optimization plan.'),
    },
    {
      step: '03',
      title: t('設備安裝', 'Equipment Installation'),
      description: t('專業安裝空氣淨化機，確保在最佳位置發揮最大效能。', 'Professional installation of air purifier, ensuring maximum efficiency at optimal position.'),
    },
    {
      step: '04',
      title: t('量子調頻', 'Quantum Tuning'),
      description: t('運用獨家技術，為空間和設備植入正向能量頻率。', 'Apply exclusive technology to implant positive energy frequencies into space and equipment.'),
    },
    {
      step: '05',
      title: t('風水擺位', 'Feng Shui Placement'),
      description: t('根據風水原理，精準擺設淨化機和其他物品，優化氣場運轉。', 'According to feng shui principles, precisely arrange purifier and other items to optimize energy flow.'),
    },
    {
      step: '06',
      title: t('效果跟進', 'Results Follow-up'),
      description: t('定期跟進效果，根據反饋進行調整，確保持續改善。', 'Regular follow-up on results, adjustments based on feedback, ensuring continuous improvement.'),
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/20 to-secondary/20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t('服務方案', 'Service Packages')}
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t(
              '三種套餐選擇，滿足不同空間和預算需求。無論選擇哪個品牌的空氣淨化機，都可享受完整的量子調頻和風水擺位服務。',
              'Three package options to meet different space and budget needs. Whichever brand of air purifier you choose, you can enjoy complete quantum tuning and feng shui placement services.'
            )}
          </p>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className={`relative bg-muted border-2 rounded-lg p-8 ${
                  pkg.recommended
                    ? 'border-accent shadow-lg shadow-accent/20 scale-105'
                    : 'border-border hover:border-accent'
                } transition-all`}
              >
                {pkg.recommended && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-accent to-secondary text-background px-4 py-1 rounded-full text-sm font-semibold">
                      {t('推薦', 'Recommended')}
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{pkg.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{pkg.description}</p>
                  <div className="text-4xl font-bold text-accent mb-2">{pkg.price}</div>
                  <p className="text-sm text-muted-foreground">{t('起', 'starting from')}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check size={20} className="text-accent mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact">
                  <a
                    className={`block w-full py-3 text-center font-semibold rounded-lg transition-all ${
                      pkg.recommended
                        ? 'bg-gradient-to-r from-accent to-secondary text-background hover:shadow-lg'
                        : 'bg-background border-2 border-accent text-accent hover:bg-accent hover:text-background'
                    }`}
                  >
                    {t('選擇方案', 'Select Package')}
                  </a>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              {t('服務流程', 'Service Process')}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t('六步完整服務，確保最佳效果', 'Six-step complete service ensuring optimal results')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceProcess.map((process, idx) => (
              <div key={idx} className="relative bg-background border border-border rounded-lg p-6 hover:border-accent transition-all">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-accent to-secondary rounded-full flex items-center justify-center text-background font-bold text-lg">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 mt-4">{process.title}</h3>
                <p className="text-sm text-muted-foreground">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Service */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            {t('為什麼選擇我們的服務？', 'Why Choose Our Service?')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-muted border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold text-accent mb-3">
                {t('品牌中立', 'Brand Neutral')}
              </h3>
              <p className="text-muted-foreground">
                {t(
                  '我們不綁定任何品牌，客觀推薦最適合您的空氣淨化機。',
                  'We are not tied to any brand and objectively recommend the most suitable air purifier for you.'
                )}
              </p>
            </div>
            <div className="bg-muted border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold text-accent mb-3">
                {t('獨家技術', 'Exclusive Technology')}
              </h3>
              <p className="text-muted-foreground">
                {t(
                  '量子調頻技術為獨家研發，市場上唯一結合物質與非物質的服務。',
                  'Quantum tuning technology is exclusively developed, the only service in the market combining material and non-material aspects.'
                )}
              </p>
            </div>
            <div className="bg-muted border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold text-accent mb-3">
                {t('專業團隊', 'Professional Team')}
              </h3>
              <p className="text-muted-foreground">
                {t(
                  '由黎Sir帶領的專業團隊，擁有多年風水和能量學經驗。',
                  'Professional team led by Mr. Lai, with years of experience in feng shui and energy studies.'
                )}
              </p>
            </div>
            <div className="bg-muted border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold text-accent mb-3">
                {t('效果保證', 'Results Guaranteed')}
              </h3>
              <p className="text-muted-foreground">
                {t(
                  '95%+ 客戶滿意度，3週至3個月見效，不滿意可免費調整。',
                  '95%+ customer satisfaction, results in 3 weeks to 3 months, free adjustment if not satisfied.'
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            {t('常見問題', 'Frequently Asked Questions')}
          </h2>
          <div className="space-y-6">
            <details className="bg-background border border-border rounded-lg p-6 cursor-pointer">
              <summary className="font-semibold text-foreground text-lg">
                {t('什麼是量子調頻？', 'What is Quantum Frequency Tuning?')}
              </summary>
              <p className="mt-4 text-muted-foreground">
                {t(
                  '量子調頻是基於量子物理學和能量醫學的技術，通過特定頻率調整空間和設備的能量場，驅散負能量，提升正向頻率，改善整體環境的非物質層面。',
                  'Quantum frequency tuning is a technology based on quantum physics and energy medicine. It adjusts the energy field of space and equipment through specific frequencies, dispels negative energy, enhances positive frequency, and improves the non-material aspect of the overall environment.'
                )}
              </p>
            </details>
            <details className="bg-background border border-border rounded-lg p-6 cursor-pointer">
              <summary className="font-semibold text-foreground text-lg">
                {t('我已有空氣淨化機，還需要你們的服務嗎？', 'I already have an air purifier, do I still need your service?')}
              </summary>
              <p className="mt-4 text-muted-foreground">
                {t(
                  '絕對需要！我們的服務重點不是銷售產品，而是量子調頻和風水擺位。即使您已有空氣淨化機，我們仍可為您的設備進行能量優化和精準擺位，發揮其最大效能。',
                  'Absolutely! The focus of our service is not product sales, but quantum tuning and feng shui placement. Even if you already have an air purifier, we can still optimize the energy of your device and position it precisely to maximize its effectiveness.'
                )}
              </p>
            </details>
            <details className="bg-background border border-border rounded-lg p-6 cursor-pointer">
              <summary className="font-semibold text-foreground text-lg">
                {t('服務多久可以見效？', 'How long does it take to see results?')}
              </summary>
              <p className="mt-4 text-muted-foreground">
                {t(
                  '物質層面（空氣質量）：立即見效。非物質層面（能量、運勢）：因人而異，一般 3 週至 3 個月可感受明顯改善。我們會提供定期跟進，確保持續優化。',
                  'Material aspect (air quality): Immediate results. Non-material aspect (energy, fortune): Varies by individual, generally noticeable improvement in 3 weeks to 3 months. We provide regular follow-ups to ensure continuous optimization.'
                )}
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            {t('準備開始您的能量轉化之旅？', 'Ready to Start Your Energy Transformation Journey?')}
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            {t(
              '立即預約免費諮詢，我們的專家將為您量身定制最適合的服務方案。',
              'Book a free consultation now, and our experts will customize the most suitable service package for you.'
            )}
          </p>
          <Link href="/contact">
            <a className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-accent to-secondary text-background font-semibold rounded-lg hover:shadow-lg hover:shadow-accent/50 transition-all">
              {t('立即預約', 'Book Now')}
              <ArrowRight className="ml-2" size={20} />
            </a>
          </Link>
        </div>
      </section>
    </div>
  );
}
