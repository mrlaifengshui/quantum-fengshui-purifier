import { CheckCircle2, Wind, Sparkles, Compass, ArrowRight } from 'lucide-react';
import { Link } from 'wouter';
import { useLanguage } from '../contexts/LanguageContext';

export default function Services() {
  const { t } = useLanguage();

  const packages = [
    {
      name: t('基礎套餐', 'Basic Package'),
      price: 'HK$2,888',
      features: [
        t('空氣淨化機選購建議', 'Air Purifier Consultation'),
        t('基礎量子調頻', 'Basic Quantum Tuning'),
        t('簡單風水擺位', 'Basic Feng Shui Positioning'),
        t('1次現場服務', '1 On-site Service'),
      ],
    },
    {
      name: t('標準套餐', 'Standard Package'),
      price: 'HK$4,888',
      features: [
        t('全面空間評估', 'Complete Space Assessment'),
        t('進階量子調頻', 'Advanced Quantum Tuning'),
        t('專業風水擺位', 'Professional Feng Shui Positioning'),
        t('2次現場服務', '2 On-site Services'),
        t('1個月跟進服務', '1 Month Follow-up'),
      ],
      recommended: true,
    },
    {
      name: t('尊貴套餐', 'Premium Package'),
      price: 'HK$8,888',
      features: [
        t('深度空間能量分析', 'Deep Energy Analysis'),
        t('頂級量子調頻', 'Premium Quantum Tuning'),
        t('大師級風水設計', 'Master Feng Shui Design'),
        t('3次現場服務', '3 On-site Services'),
        t('3個月跟進服務', '3 Months Follow-up'),
        t('終身諮詢支持', 'Lifetime Consultation'),
      ],
    },
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t('服務介紹', 'Our Services')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
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

        {/* Pricing Packages */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            {t('服務套餐', 'Service Packages')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, i) => (
              <div
                key={i}
                className={`relative bg-muted border-2 rounded-xl p-8 ${
                  pkg.recommended ? 'border-accent shadow-lg shadow-accent/20' : 'border-border'
                }`}
              >
                {pkg.recommended && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-accent text-background px-4 py-1 rounded-full text-sm font-semibold">
                      {t('推薦', 'Recommended')}
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold text-foreground mb-2">{pkg.name}</h3>
                <div className="text-4xl font-bold text-accent mb-6">{pkg.price}</div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, j) => (
                    <li key={j} className="flex items-start text-sm">
                      <CheckCircle2 className="w-5 h-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact">
                  <a
                    className={`block w-full text-center py-3 rounded-lg font-semibold transition-all duration-300 ${
                      pkg.recommended
                        ? 'bg-accent text-background hover:bg-accent/90'
                        : 'bg-border text-foreground hover:bg-accent hover:text-background'
                    }`}
                  >
                    {t('立即預約', 'Book Now')}
                  </a>
                </Link>
              </div>
            ))}
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
          <Link href="/contact">
            <a className="inline-flex items-center justify-center px-10 py-4 bg-accent text-background font-bold rounded-lg hover:bg-accent/90 transition-all duration-300 shadow-lg">
              {t('立即預約免費諮詢', 'Book Free Consultation')}
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
