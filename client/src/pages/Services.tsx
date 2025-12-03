import { CheckCircle2, Wind, Sparkles, Compass, ArrowRight } from 'lucide-react';
import { Link } from 'wouter';
import { useLanguage } from '../contexts/LanguageContext';

export default function Services() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t('服務介紹', 'Our Services')}
          </h1>
          <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto">
            {t(
              '從物質、能量、風水三個層面全方位提升您的生活品質',
              'Enhance your quality of life from material, energy, and feng shui perspectives'
            )}
          </p>
        </div>

        {/* Service Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-muted border border-border rounded-xl p-8">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mb-6">
              <Wind className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              {t('空氣淨化', 'Air Purification')}
            </h3>
            <p className="text-muted-foreground mb-4">
              {t('物質層面的清淨', 'Material Level Purification')}
            </p>
            <ul className="space-y-2">
              {[
                t('過濾0.0024微米懸浮粒子', 'Filter 0.0024µm Particles'),
                t('去除99.95%甲醛', 'Remove 99.95% Formaldehyde'),
                t('釋放森林級負離子', 'Release Forest-Level Negative Ions'),
                t('淨化空氣質素', 'Purify Air Quality'),
              ].map((item, i) => (
                <li key={i} className="flex items-start text-sm">
                  <CheckCircle2 className="w-4 h-4 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-muted border border-border rounded-xl p-8">
            <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center mb-6">
              <Sparkles className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              {t('量子調頻', 'Quantum Tuning')}
            </h3>
            <p className="text-muted-foreground mb-4">
              {t('能量層面的提升', 'Energy Level Enhancement')}
            </p>
            <ul className="space-y-2">
              {[
                t('驅散負能量頻率', 'Clear Negative Energy'),
                t('植入正向頻率', 'Implant Positive Frequency'),
                t('提升空間意識', 'Raise Space Consciousness'),
                t('轉化能量場', 'Transform Energy Field'),
              ].map((item, i) => (
                <li key={i} className="flex items-start text-sm">
                  <CheckCircle2 className="w-4 h-4 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-muted border border-border rounded-xl p-8">
            <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center mb-6">
              <Compass className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              {t('風水擺位', 'Feng Shui Positioning')}
            </h3>
            <p className="text-muted-foreground mb-4">
              {t('空間層面的優化', 'Spatial Level Optimization')}
            </p>
            <ul className="space-y-2">
              {[
                t('分析財位文昌位', 'Analyze Prosperity Positions'),
                t('精準擺位設計', 'Precise Positioning Design'),
                t('優化氣場流動', 'Optimize Energy Flow'),
                t('提升豐盛運勢', 'Enhance Abundance Fortune'),
              ].map((item, i) => (
                <li key={i} className="flex items-start text-sm">
                  <CheckCircle2 className="w-4 h-4 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Service Package - Combined Explanation */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            {t('服務套餐', 'Service Packages')}
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 border-2 border-accent rounded-2xl p-12">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-foreground mb-4">
                  {t('量子風水空氣淨化服務', 'Quantum Feng Shui Air Purification Service')}
                </h3>
                <div className="text-5xl font-bold text-accent mb-6">
                  {t('HK$8,800 起', 'From HK$8,800')}
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t(
                    '我們提供三個層次的服務套餐，從基本套餐（HK$8,800）、標準套餐（HK$13,800）到尊貴套餐（HK$19,800），均包含三大核心服務：空氣淨化、量子調頻和風水擺位。根據您的需求和預算，我們的專業團隊會為您量身定制最適合的解決方案，全方位提升您的生活品質。',
                    'We offer three service tiers from Basic (HK$8,800), Standard (HK$13,800) to Premium (HK$19,800), all including our three core services: Air Purification, Quantum Tuning, and Feng Shui Positioning. Our professional team will customize the best solution for your needs and budget.'
                  )}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Wind className="w-8 h-8 text-background" />
                  </div>
                  <h4 className="font-bold text-foreground mb-2">{t('空氣淨化', 'Air Purification')}</h4>
                  <p className="text-sm text-muted-foreground">{t('物質層面清淨', 'Material Purification')}</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="w-8 h-8 text-background" />
                  </div>
                  <h4 className="font-bold text-foreground mb-2">{t('量子調頻', 'Quantum Tuning')}</h4>
                  <p className="text-sm text-muted-foreground">{t('能量層面提升', 'Energy Enhancement')}</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Compass className="w-8 h-8 text-background" />
                  </div>
                  <h4 className="font-bold text-foreground mb-2">{t('風水擺位', 'Feng Shui Positioning')}</h4>
                  <p className="text-sm text-muted-foreground">{t('空間層面優化', 'Spatial Optimization')}</p>
                </div>
              </div>
              <div className="text-center">
                <Link href="/contact">
                  <a className="inline-flex items-center justify-center px-12 py-4 bg-accent text-background font-bold text-lg rounded-xl hover:bg-accent/90 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
                    {t('立即預約免費諮詢', 'Book Free Consultation Now')}
                    <ArrowRight className="ml-2 w-6 h-6" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Service Process */}
        <div className="bg-muted rounded-xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            {t('服務流程', 'Service Process')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              { step: '1', title: t('初步諮詢', 'Consultation'), desc: t('了解需求', 'Understand Needs') },
              { step: '2', title: t('空間評估', 'Assessment'), desc: t('現場分析', 'On-site Analysis') },
              { step: '3', title: t('量子調頻', 'Quantum Tuning'), desc: t('能量植入', 'Energy Implant') },
              { step: '4', title: t('風水擺位', 'Positioning'), desc: t('精準擺放', 'Precise Placement') },
              { step: '5', title: t('效果跟進', 'Follow-up'), desc: t('持續支持', 'Continuous Support') },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-accent text-background rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            {t('立即預約免費諮詢，體驗量子風水空氣淨化的神奇效果', 'Book a Free Consultation and Experience the Amazing Effects')}
          </h3>
          <Link href="/contact">
            <a className="inline-flex items-center justify-center px-10 py-4 bg-accent text-background font-bold rounded-lg hover:bg-accent/90 transition-all duration-300 shadow-lg">
              {t('免費諮詢預約', 'Free Consultation')}
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
