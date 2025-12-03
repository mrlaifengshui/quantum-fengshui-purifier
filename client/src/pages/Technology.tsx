import { Wind, Compass, Sparkles, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Technology() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-1 bg-accent/10 border border-accent/30 rounded-full">
            <span className="text-accent font-medium text-sm">
              {t('科技創新', 'Technology Innovation')}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t('技術原理', 'Technology Principles')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-center">
            {t(
              '從物質、能量、風水三個層面全方位提升您的生活品質',
              'Enhance your quality of life from material, energy, and feng shui perspectives'
            )}
          </p>
        </div>

        {/* Core Technology Sections */}
        <div className="space-y-20">
          {/* Section 1: Air Purification */}
          <section className="bg-section-light rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="w-16 h-16 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <Wind className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  {t('空氣淨化技術', 'Air Purification Technology')}
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  {t(
                    '採用頂級 HEPA H13 濾網技術，配合活性炭和光觸媒系統，有效過濾空氣中的有害物質，為您創造潔淨健康的呼吸環境。',
                    'Using premium HEPA H13 filter technology with activated carbon and photocatalyst systems to effectively filter harmful substances in the air.'
                  )}
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start text-left">
                    <CheckCircle2 className="w-5 h-5 text-success mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-foreground">
                        {t('99.97% 過濾效率', '99.97% Filtration Efficiency')}
                      </span>
                      <p className="text-sm text-muted-foreground mt-1">
                        {t('有效過濾 PM2.5、PM0.3 等超微粒子', 'Effectively filters PM2.5, PM0.3 and ultra-fine particles')}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start text-left">
                    <CheckCircle2 className="w-5 h-5 text-success mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-foreground">
                        {t('去除甲醛、異味', 'Remove Formaldehyde & Odors')}
                      </span>
                      <p className="text-sm text-muted-foreground mt-1">
                        {t('活性炭吸附技術，快速分解有害氣體', 'Activated carbon adsorption technology for rapid decomposition of harmful gases')}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start text-left">
                    <CheckCircle2 className="w-5 h-5 text-success mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-foreground">
                        {t('抗菌防霉技術', 'Antibacterial & Anti-mold Technology')}
                      </span>
                      <p className="text-sm text-muted-foreground mt-1">
                        {t('光觸媒技術，持續抑制細菌病毒繁殖', 'Photocatalyst technology for continuous bacterial and viral inhibition')}
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="flex justify-center">
                <div className="relative w-full max-w-md aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center">
                  <Wind className="w-32 h-32 text-primary/30" />
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Quantum Tuning */}
          <section className="bg-section-dark rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1 flex justify-center">
                <div className="relative w-full max-w-md aspect-square bg-gradient-to-br from-secondary/10 to-accent/10 rounded-2xl flex items-center justify-center">
                  <Sparkles className="w-32 h-32 text-secondary/30" />
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary/30 to-accent/30 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <Sparkles className="w-8 h-8 text-secondary" />
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  {t('量子調頻技術', 'Quantum Frequency Tuning Technology')}
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  {t(
                    '運用量子物理學原理，透過特定頻率的共振技術，調整室內空間的能量場，提升居住者的身心靈和諧狀態，改善整體生活品質。',
                    'Using quantum physics principles and specific frequency resonance technology to adjust indoor energy fields and enhance overall quality of life.'
                  )}
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start text-left">
                    <CheckCircle2 className="w-5 h-5 text-success mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-foreground">
                        {t('負離子釋放', 'Negative Ion Release')}
                      </span>
                      <p className="text-sm text-muted-foreground mt-1">
                        {t('釋放森林級負離子，淨化空氣分子結構', 'Release forest-level negative ions to purify air molecular structure')}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start text-left">
                    <CheckCircle2 className="w-5 h-5 text-success mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-foreground">
                        {t('能量場優化', 'Energy Field Optimization')}
                      </span>
                      <p className="text-sm text-muted-foreground mt-1">
                        {t('調整空間頻率，提升正向能量流動', 'Adjust spatial frequencies to enhance positive energy flow')}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start text-left">
                    <CheckCircle2 className="w-5 h-5 text-success mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-foreground">
                        {t('改善睡眠品質', 'Improve Sleep Quality')}
                      </span>
                      <p className="text-sm text-muted-foreground mt-1">
                        {t('平衡生理時鐘，促進深度睡眠', 'Balance circadian rhythm and promote deep sleep')}
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 3: Feng Shui Placement */}
          <section className="bg-section-light rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="w-16 h-16 bg-gradient-to-br from-accent/30 to-primary/30 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <Compass className="w-8 h-8 text-accent" />
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  {t('風水擺位技術', 'Feng Shui Positioning Technology')}
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  {t(
                    '結合傳統風水智慧與現代科學測量，透過精密儀器分析空間氣場，計算最佳擺位方位，引導正能量流動，提升運勢和生活品質。',
                    'Combining traditional feng shui wisdom with modern scientific measurement to analyze spatial energy fields and calculate optimal positioning.'
                  )}
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start text-left">
                    <CheckCircle2 className="w-5 h-5 text-success mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-foreground">
                        {t('專業風水分析', 'Professional Feng Shui Analysis')}
                      </span>
                      <p className="text-sm text-muted-foreground mt-1">
                        {t('結合八卦方位與現代電磁場測量', 'Combining Bagua directions with modern electromagnetic field measurement')}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start text-left">
                    <CheckCircle2 className="w-5 h-5 text-success mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-foreground">
                        {t('吉位精準定位', 'Precise Auspicious Positioning')}
                      </span>
                      <p className="text-sm text-muted-foreground mt-1">
                        {t('運用羅盤與科學儀器，找出最佳能量點', 'Using compass and scientific instruments to find optimal energy points')}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start text-left">
                    <CheckCircle2 className="w-5 h-5 text-success mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-foreground">
                        {t('提升運勢磁場', 'Enhance Fortune Energy Field')}
                      </span>
                      <p className="text-sm text-muted-foreground mt-1">
                        {t('優化財位、文昌位，提升事業與學業運', 'Optimize wealth and wisdom positions to enhance career and academic fortune')}
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="flex justify-center">
                <div className="relative w-full max-w-md aspect-square bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl flex items-center justify-center">
                  <Compass className="w-32 h-32 text-accent/30" />
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Video Sections with Title */}
        <section className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t('量子風水空氣淊化技術示範', 'Quantum Feng Shui Air Purification Technology Demonstration')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t(
                '深入了解量子調頻技術與頂級空氣淊化系統的完美結合',
                'Deep dive into the perfect combination of quantum tuning technology and premium air purification systems'
              )}
            </p>
          </div>

          {/* Video 1 */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-border hover:shadow-accent/20 transition-all duration-300">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/qU5N5gjRS1k"
                title={t('量子風水技術 1', 'Quantum Feng Shui Technology 1')}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Video 2 */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-border hover:shadow-accent/20 transition-all duration-300">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/B5BMYjmIN-Q?start=10"
                title={t('量子風水技術 2', 'Quantum Feng Shui Technology 2')}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Video 3 */}
          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-border hover:shadow-accent/20 transition-all duration-300">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/C7oqpToh1GY?start=6"
                title={t('量子風水技術 3', 'Quantum Feng Shui Technology 3')}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
