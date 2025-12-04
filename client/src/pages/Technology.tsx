import { CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Technology() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t('技術原理', 'Technology Principles')}
            <br />
            <span className="text-2xl md:text-3xl font-normal text-muted-foreground mt-4 block">
              {t(
                '從物質、能量、風水三個層面全方位提升您的生活品質',
                'Enhance your quality of life from material, energy, and feng shui perspectives'
              )}
            </span>
          </h1>
        </div>

        {/* Empty row after header */}
        <div className="mb-12"></div>

        {/* Core Technology Sections */}
        <div className="space-y-20">
          {/* Section 1: Air Purification */}
          <section className="bg-section-light rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  {t('空氣淨化技術', 'Air Purification Technology')}
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  {t(
                    '採用頂級 HEPA H13 濾網技術，配合活性炭和光觸媒系統，有效過濾空氣中99.97%的PM2.5、PM0.3等超微粒子，同時釋放森林級負離子，淨化空氣分子結構。配合智能監測系統，實時顯示室內空氣品質，為您創造潔淨健康的呼吸環境，有效改善過敏症狀，提升整體健康水平。',
                    'Using premium HEPA H13 filter technology with activated carbon and photocatalyst systems to effectively filter 99.97% of PM2.5, PM0.3 and ultra-fine particles. Releases forest-level negative ions to purify air molecular structure. With smart monitoring system displaying real-time air quality, creates a clean and healthy breathing environment, effectively improving allergy symptoms and enhancing overall health.'
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
                <div className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="/quantum-fengshui-purifier/images/technology/air-purification.jpg" 
                    alt={t('空氣淨化技術', 'Air Purification Technology')}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Quantum Tuning */}
          <section className="bg-section-dark rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1 flex justify-center">
                <div className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="/quantum-fengshui-purifier/images/technology/quantum-tuning.jpg" 
                    alt={t('量子調頻技術', 'Quantum Frequency Tuning Technology')}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  {t('量子調頻技術', 'Quantum Frequency Tuning Technology')}
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  {t(
                    '運用量子物理學原理，透過特定頻率的共振技術，調整室內空間的能量場，釋放量子波動能量，平衡生理時鐘，促進深度睡眠。調整空間頻率，優化能量場，提升正向能量流動，改善居住者的身心靈和諧狀態，顯著提升整體生活品質和幸福感。',
                    'Using quantum physics principles and specific frequency resonance technology to adjust indoor energy fields, releasing quantum wave energy. Balances circadian rhythm and promotes deep sleep. Adjusts spatial frequencies to optimize energy fields, enhance positive energy flow, improve mind-body-spirit harmony, and significantly enhance overall quality of life and well-being.'
                  )}
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start text-left">
                    <CheckCircle2 className="w-5 h-5 text-success mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-foreground">
                        {t('釋放量子頻率', 'Quantum Frequency Release')}
                      </span>
                      <p className="text-sm text-muted-foreground mt-1">
                        {t('釋放量子波動頻率，調節空間能量振動', 'Release quantum wave frequencies to modulate spatial energy vibrations')}
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
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  {t('風水擺位技術', 'Feng Shui Positioning Technology')}
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  {t(
                    '結合傳統風水智慧與現代科學測量，運用羅盤與電磁場測量儀器，透過精密分析空間氣場與八卦方位，計算最佳擺位方位。精準定位財位、文昌位等吉位，優化能量點配置，有效引導正能量流動，提升事業運、學業運與財運，全面改善居住環境的磁場能量，為您帶來運勢提升和生活品質的顯著改善。',
                    'Combining traditional feng shui wisdom with modern scientific measurement, using compass and electromagnetic field instruments to precisely analyze spatial energy fields and Bagua directions. Accurately locates auspicious positions such as wealth and wisdom positions, optimizes energy point configuration, effectively guides positive energy flow, enhances career, academic and financial fortune, comprehensively improves environmental magnetic field energy, bringing significant improvements in fortune and quality of life.'
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
                <div className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="/quantum-fengshui-purifier/images/technology/feng-shui-positioning.jpg" 
                    alt={t('風水擺位技術', 'Feng Shui Positioning Technology')}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Empty row between sections */}
        <div className="py-8"></div>

        {/* Video Sections with Title - Table Layout */}
        <section className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t('量子風水空氣淨化技術示範', 'Quantum Feng Shui Air Purification Technology Demonstration')}
            </h2>
          </div>

          {/* Videos in Table: 1 row, 3 columns */}
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Video 1 */}
              <div className="flex flex-col">
                <h3 className="text-lg md:text-xl font-semibold text-foreground text-center mb-4 min-h-[3rem] flex items-center justify-center">
                  {t('淨化空間氣場能量與過濾空氣懸浮粒子', 'Purifying Space Energy Field and Filtering Air Particles')}
                </h3>
                <div className="relative aspect-video rounded-xl overflow-hidden shadow-xl border border-border hover:shadow-accent/20 transition-all duration-300">
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
              <div className="flex flex-col">
                <h3 className="text-lg md:text-xl font-semibold text-foreground text-center mb-4 min-h-[3rem] flex items-center justify-center">
                  {t('空氣淨化器可以提升室內風水氣場', 'Air Purifiers Can Enhance Indoor Feng Shui Energy Field')}
                </h3>
                <div className="relative aspect-video rounded-xl overflow-hidden shadow-xl border border-border hover:shadow-accent/20 transition-all duration-300">
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
              <div className="flex flex-col">
                <h3 className="text-lg md:text-xl font-semibold text-foreground text-center mb-4 min-h-[3rem] flex items-center justify-center">
                  {t('空氣淨化器顛覆身心靈的思維模式', 'Air Purifiers Transform Mind, Body, and Spirit Thinking Patterns')}
                </h3>
                <div className="relative aspect-video rounded-xl overflow-hidden shadow-xl border border-border hover:shadow-accent/20 transition-all duration-300">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/C7oqpToh1GY?start=6"
                    title={t('量子風水技術 3', 'Quantum Feng Shui Technology 3')}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

          {/* Empty row after videos */}
          <div className="mb-12"></div>
        </section>
      </div>
    </div>
  );
}
