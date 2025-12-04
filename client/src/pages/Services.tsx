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
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t('服務介紹', 'Our Services')}
            <br />
            <span className="text-xl md:text-2xl font-normal text-muted-foreground mt-4 block">
              {t(
                '從物質、能量、風水三個層面全方位提升您的生活品質',
                'Enhance your quality of life from material, energy, and feng shui perspectives'
              )}
            </span>
          </h1>
          
          {/* Banner with invisible table (PC only) */}
          <div className="max-w-7xl mx-auto">
            {/* Desktop: 3 columns grid */}
            <div className="hidden md:grid md:grid-cols-3 gap-4">
              <div></div>
              <div>
                <img 
                  src="/quantum-fengshui-purifier/images/services-banner-quantum.jpg" 
                  alt={t('服務介紹圖片', 'Services Banner')}
                  className="w-full rounded-2xl shadow-xl"
                />
              </div>
              <div></div>
            </div>
            {/* Mobile: centered directly */}
            <div className="md:hidden max-w-4xl mx-auto">
              <img 
                src="/quantum-fengshui-purifier/images/services-banner-quantum.jpg" 
                alt={t('服務介紹圖片', 'Services Banner')}
                className="w-full rounded-2xl shadow-xl"
              />
            </div>
          </div>
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

        {/* Empty row between sections */}
        <div className="py-8"></div>

        {/* Service Process */}
        <div className="bg-muted rounded-xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            {t('服務流程', 'Service Process')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              { step: '1', title: t('初步諮詢', 'Consultation'), desc: t('透過詳細溝通，了解您的家居或辦公環境的具體需求，分析空間問題與期望目標。', 'Through detailed communication, understand your specific needs for home or office environment, analyze space issues and expected goals.') },
              { step: '2', title: t('空間評估', 'Assessment'), desc: t('專業團隊現場測量空氣質素、電磁場水平、風水方位，提供全面科學評估報告。', 'Professional team measures on-site air quality, electromagnetic field levels, feng shui directions, providing comprehensive scientific assessment report.') },
              { step: '3', title: t('量子調頻', 'Quantum Tuning'), desc: t('運用量子技術調整空間能量場，清除負面頻率，植入正向能量，提升空間振動頻率。', 'Use quantum technology to adjust spatial energy field, clear negative frequencies, implant positive energy, enhance space vibration frequency.') },
              { step: '4', title: t('風水擺位', 'Positioning'), desc: t('根據八卦方位與現代科學，精準計算最佳擺位，安裝空氣淨化設備於財位、文昌位等吉位。', 'Based on Bagua directions and modern science, precisely calculate optimal positioning, install air purification equipment at wealth, wisdom and other auspicious positions.') },
              { step: '5', title: t('效果跟進', 'Follow-up'), desc: t('定期回訪追蹤效果，提供持續的技術支持與調整建議，確保長期效果維持。', 'Regular follow-up visits to track effects, provide continuous technical support and adjustment recommendations, ensure long-term effectiveness maintenance.') },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-accent text-background rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Empty row between sections */}
        <div className="py-8"></div>

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
