import { useLanguage } from '../contexts/LanguageContext';
import { Calendar, Tag, User } from 'lucide-react';

export default function Blog() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 via-secondary/5 to-background overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero-pattern.svg')] opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent animate-fade-in">
            {t('量子風水博客', 'Quantum Feng Shui Blog')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t(
              '探索量子科學、風水智慧與空氣淨化的完美結合',
              'Explore the perfect combination of quantum science, feng shui wisdom, and air purification'
            )}
          </p>
        </div>
      </section>

      {/* Main Article */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Article Header */}
          <article className="bg-gradient-to-br from-section-dark to-muted rounded-2xl shadow-cosmic p-8 md:p-12 border border-border/50">
            <div className="flex flex-wrap gap-4 mb-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-accent" />
                <span>2026年1月</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-accent" />
                <span>{t('量子風水專家', 'Quantum Feng Shui Expert')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Tag className="w-4 h-4 text-accent" />
                <span>{t('完全指南', 'Complete Guide')}</span>
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {t(
                '量子風水空氣淨化完全指南 - 2026 年最全面的解決方案',
                'Complete Guide to Quantum Feng Shui Air Purification - The Most Comprehensive Solution for 2026'
              )}
            </h2>

            {/* Featured Image */}
            <div className="mb-10">
              <img
                src="/images/blog/quantum-fengshui-overview.jpg"
                alt={t('量子風水空氣淨化系統概覽', 'Quantum Feng Shui Air Purification System Overview')}
                className="w-full h-auto rounded-xl shadow-lg"
              />
              <p className="text-sm text-muted-foreground mt-2 text-center italic">
                {t('圖1：量子風水空氣淨化系統全方位概覽', 'Figure 1: Comprehensive Overview of Quantum Feng Shui Air Purification System')}
              </p>
            </div>

            {/* Introduction */}
            <div className="prose prose-lg prose-invert max-w-none mb-10">
              <h3 className="text-2xl font-semibold mb-4 text-accent">
                {t('引言：為什麼需要量子風水空氣淨化？', 'Introduction: Why Quantum Feng Shui Air Purification?')}
              </h3>
              <p className="text-foreground/90 leading-relaxed mb-4">
                {t(
                  '在2026年的現代社會，我們面臨著前所未有的室內空氣質量挑戰。PM2.5、甲醛、病毒細菌等污染物威脅著我們的健康，而傳統的空氣淨化方案往往只能解決物質層面的問題。量子風水空氣淨化方案革命性地整合了三大核心技術：頂級空氣淨化科技、量子調頻技術和風水定位智慧，為您打造一個「物質清淨、能量和諧、豐盛顯化」的理想居住環境。',
                  'In modern society of 2026, we face unprecedented indoor air quality challenges. PM2.5, formaldehyde, viruses and bacteria threaten our health, while traditional air purification solutions often only address physical problems. Quantum Feng Shui Air Purification Solution revolutionarily integrates three core technologies: top-tier air purification technology, quantum frequency tuning, and feng shui positioning wisdom, creating an ideal living environment of "physical cleanliness, energy harmony, and abundance manifestation".'
                )}
              </p>
            </div>

            {/* Section 1: Air Purification Technology */}
            <div className="mb-10">
              <h3 className="text-2xl font-semibold mb-6 text-accent flex items-center gap-3">
                <span className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center text-white font-bold">1</span>
                {t('頂級空氣淨化科技', 'Top-Tier Air Purification Technology')}
              </h3>
              
              <div className="mb-6">
                <img
                  src="/images/blog/air-purification-tech.jpg"
                  alt={t('先進的空氣淨化技術示意圖', 'Advanced Air Purification Technology Diagram')}
                  className="w-full h-auto rounded-xl shadow-lg"
                />
                <p className="text-sm text-muted-foreground mt-2 text-center italic">
                  {t('圖2：多層過濾系統與智能監測技術', 'Figure 2: Multi-layer Filtration System and Smart Monitoring Technology')}
                </p>
              </div>

              <div className="space-y-4 text-foreground/90">
                <h4 className="text-xl font-semibold text-primary mb-3">
                  {t('核心過濾技術', 'Core Filtration Technologies')}
                </h4>
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">✦</span>
                    <div>
                      <strong className="text-accent">{t('HEPA 13 高效濾網', 'HEPA 13 High-Efficiency Filter')}:</strong>
                      <span className="ml-2">{t('能夠捕捉 99.97% 的 0.3 微米顆粒，包括 PM2.5、花粉、塵蟎等過敏原。', 'Captures 99.97% of 0.3-micron particles, including PM2.5, pollen, dust mites and other allergens.')}</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">✦</span>
                    <div>
                      <strong className="text-accent">{t('活性碳濾網', 'Activated Carbon Filter')}:</strong>
                      <span className="ml-2">{t('有效吸附甲醛、苯、TVOC 等有害氣體，以及異味分子。', 'Effectively absorbs formaldehyde, benzene, TVOCs and other harmful gases, as well as odor molecules.')}</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">✦</span>
                    <div>
                      <strong className="text-accent">{t('UV-C 紫外線殺菌', 'UV-C Ultraviolet Sterilization')}:</strong>
                      <span className="ml-2">{t('破壞細菌、病毒的 DNA 結構，殺滅率高達 99.9%。', 'Destroys the DNA structure of bacteria and viruses with a kill rate of up to 99.9%.')}</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">✦</span>
                    <div>
                      <strong className="text-accent">{t('負離子生成技術', 'Negative Ion Generation')}:</strong>
                      <span className="ml-2">{t('釋放高濃度負離子，促進空氣中懸浮顆粒沉降，同時提升室內空氣質量。', 'Releases high-concentration negative ions, promoting the settling of airborne particles while improving indoor air quality.')}</span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="mt-6 p-6 bg-primary/5 border border-primary/20 rounded-xl">
                <h4 className="text-lg font-semibold text-primary mb-3">
                  {t('智能監測系統', 'Smart Monitoring System')}
                </h4>
                <p className="text-foreground/90 leading-relaxed">
                  {t(
                    '我們採用的高精度感應器能實時監測 PM2.5、PM10、甲醛、TVOC、溫度、濕度等多項指標，並通過 APP 讓您隨時掌握室內空氣質量狀況。系統會根據監測數據自動調節淨化模式，確保最佳淨化效果。',
                    'Our high-precision sensors monitor PM2.5, PM10, formaldehyde, TVOCs, temperature, humidity and other indicators in real-time. Through the APP, you can track indoor air quality anytime. The system automatically adjusts purification modes based on monitoring data to ensure optimal results.'
                  )}
                </p>
              </div>
            </div>

            {/* Section 2: Quantum Frequency Technology */}
            <div className="mb-10">
              <h3 className="text-2xl font-semibold mb-6 text-accent flex items-center gap-3">
                <span className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center text-white font-bold">2</span>
                {t('量子調頻技術', 'Quantum Frequency Tuning Technology')}
              </h3>

              <div className="mb-6">
                <img
                  src="/images/blog/quantum-frequency.jpg"
                  alt={t('量子調頻技術原理圖', 'Quantum Frequency Technology Principle Diagram')}
                  className="w-full h-auto rounded-xl shadow-lg"
                />
                <p className="text-sm text-muted-foreground mt-2 text-center italic">
                  {t('圖3：量子調頻能量場與頻率共振示意', 'Figure 3: Quantum Frequency Energy Field and Frequency Resonance Illustration')}
                </p>
              </div>

              <div className="space-y-4 text-foreground/90">
                <p className="leading-relaxed">
                  {t(
                    '量子調頻技術是量子風水空氣淨化方案的核心創新。這項技術基於量子物理學原理，通過特定的頻率調節，將空氣淨化器轉化為一個「能量調頻裝置」。',
                    'Quantum Frequency Tuning Technology is the core innovation of Quantum Feng Shui Air Purification Solution. Based on quantum physics principles, through specific frequency regulation, the air purifier transforms into an "energy tuning device".'
                  )}
                </p>

                <h4 className="text-xl font-semibold text-primary mt-6 mb-3">
                  {t('技術原理', 'Technical Principles')}
                </h4>
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">◆</span>
                    <div>
                      <strong className="text-accent">{t('量子共振', 'Quantum Resonance')}:</strong>
                      <span className="ml-2">{t('通過精密的頻率調節裝置，使空氣分子產生特定的量子振動，創造和諧的能量場。', 'Through precise frequency tuning devices, air molecules generate specific quantum vibrations, creating a harmonious energy field.')}</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">◆</span>
                    <div>
                      <strong className="text-accent">{t('能量波動優化', 'Energy Wave Optimization')}:</strong>
                      <span className="ml-2">{t('調整室內空間的能量波動頻率，使其與人體的生物電磁場達到最佳共振狀態。', 'Adjusts the energy wave frequency of indoor spaces to achieve optimal resonance with the human bioelectromagnetic field.')}</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">◆</span>
                    <div>
                      <strong className="text-accent">{t('負熵增強', 'Negative Entropy Enhancement')}:</strong>
                      <span className="ml-2">{t('通過量子調頻，降低室內空間的熵值，創造更有序、更有活力的生活環境。', 'Through quantum frequency tuning, reduces the entropy of indoor spaces, creating a more orderly and vibrant living environment.')}</span>
                    </div>
                  </li>
                </ul>

                <h4 className="text-xl font-semibold text-primary mt-6 mb-3">
                  {t('實際效益', 'Practical Benefits')}
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-secondary/10 border border-secondary/20 rounded-lg">
                    <h5 className="font-semibold text-secondary mb-2">{t('提升睡眠質量', 'Improve Sleep Quality')}</h5>
                    <p className="text-sm text-foreground/80">{t('調頻後的空間能量場有助於放鬆神經系統，改善失眠問題', 'The tuned energy field helps relax the nervous system and improves insomnia')}</p>
                  </div>
                  <div className="p-4 bg-secondary/10 border border-secondary/20 rounded-lg">
                    <h5 className="font-semibold text-secondary mb-2">{t('增強免疫力', 'Enhance Immunity')}</h5>
                    <p className="text-sm text-foreground/80">{t('和諧的能量環境能提升人體自癒能力和抵抗力', 'Harmonious energy environment enhances body self-healing and resistance')}</p>
                  </div>
                  <div className="p-4 bg-secondary/10 border border-secondary/20 rounded-lg">
                    <h5 className="font-semibold text-secondary mb-2">{t('提升專注力', 'Improve Focus')}</h5>
                    <p className="text-sm text-foreground/80">{t('優化的能量場能幫助大腦保持清晰、專注的狀態', 'Optimized energy field helps brain maintain clarity and focus')}</p>
                  </div>
                  <div className="p-4 bg-secondary/10 border border-secondary/20 rounded-lg">
                    <h5 className="font-semibold text-secondary mb-2">{t('促進顯化', 'Promote Manifestation')}</h5>
                    <p className="text-sm text-foreground/80">{t('高頻能量場有助於心想事成、吸引豐盛', 'High-frequency energy field helps manifest desires and attract abundance')}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3: Feng Shui Positioning */}
            <div className="mb-10">
              <h3 className="text-2xl font-semibold mb-6 text-accent flex items-center gap-3">
                <span className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center text-white font-bold">3</span>
                {t('風水定位智慧', 'Feng Shui Positioning Wisdom')}
              </h3>

              <div className="space-y-4 text-foreground/90">
                <p className="leading-relaxed">
                  {t(
                    '即使擁有最先進的空氣淨化技術和量子調頻裝置，如果擺放位置不當，其效果也會大打折扣。我們的風水定位服務融合了傳統風水智慧與現代空間科學，為您的空氣淨化器找到最佳的「風水吉位」。',
                    'Even with the most advanced air purification technology and quantum tuning devices, improper placement can significantly reduce effectiveness. Our feng shui positioning service integrates traditional wisdom with modern spatial science to find the optimal "auspicious position" for your air purifier.'
                  )}
                </p>

                <h4 className="text-xl font-semibold text-primary mt-6 mb-3">
                  {t('定位原則', 'Positioning Principles')}
                </h4>
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">★</span>
                    <div>
                      <strong className="text-accent">{t('財位布局', 'Wealth Position Layout')}:</strong>
                      <span className="ml-2">{t('將淨化器置於家居財位，不僅能淨化空氣，更能強化財運磁場，吸引豐盛能量。', 'Placing the purifier in the wealth position not only purifies air but also strengthens the wealth magnetic field, attracting abundance energy.')}</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">★</span>
                    <div>
                      <strong className="text-accent">{t('文昌位提升', 'Academic Position Enhancement')}:</strong>
                      <span className="ml-2">{t('書房或工作區的文昌位擺放，能提升學業運、事業運和創造力。', 'Placing in the academic position of study or work area enhances academic luck, career success and creativity.')}</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">★</span>
                    <div>
                      <strong className="text-accent">{t('健康位守護', 'Health Position Protection')}:</strong>
                      <span className="ml-2">{t('臥室健康位的精準擺放，能強化身體健康、提升睡眠質量。', 'Precise placement in bedroom health position strengthens physical health and improves sleep quality.')}</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">★</span>
                    <div>
                      <strong className="text-accent">{t('避開煞氣', 'Avoid Negative Energy')}:</strong>
                      <span className="ml-2">{t('專業分析梁柱、尖角等煞氣位置，避免淨化器受負能量影響。', 'Professional analysis of beam, sharp corner and other negative positions, avoiding purifier exposure to negative energy.')}</span>
                    </div>
                  </li>
                </ul>

                <div className="mt-6 p-6 bg-accent/5 border border-accent/20 rounded-xl">
                  <h4 className="text-lg font-semibold text-accent mb-3">
                    {t('個性化勘測服務', 'Personalized Assessment Service')}
                  </h4>
                  <p className="text-foreground/90 leading-relaxed mb-4">
                    {t(
                      '我們提供專業的風水勘測服務，結合您的出生八字、家居格局、生活習慣等因素，為您量身定制最佳的淨化器擺放方案。我們的風水顧問團隊擁有豐富的實戰經驗，能精確計算出每個空間的能量流動路徑，確保淨化效果與風水能量的完美融合。',
                      'We provide professional feng shui assessment services, combining your birth chart, home layout, lifestyle habits and other factors to customize the optimal purifier placement plan. Our feng shui consultant team has extensive practical experience, accurately calculating energy flow paths in each space to ensure perfect fusion of purification effects and feng shui energy.'
                    )}
                  </p>
                </div>
              </div>
            </div>

            {/* Conclusion */}
            <div className="mt-12 p-8 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 border border-primary/30 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-4 text-primary">
                {t('總結：全方位健康生活的新標準', 'Conclusion: The New Standard for Holistic Healthy Living')}
              </h3>
              <p className="text-foreground/90 leading-relaxed mb-4">
                {t(
                  '量子風水空氣淨化方案代表了 2026 年室內空氣質量管理的最高標準。它不僅能有效解決 PM2.5、甲醛、病毒等物質層面的污染問題，更通過量子調頻技術和風水定位智慧，創造一個「物質清淨、能量和諧、豐盛顯化」的理想居住環境。',
                  'Quantum Feng Shui Air Purification Solution represents the highest standard for indoor air quality management in 2026. It not only effectively addresses physical pollution like PM2.5, formaldehyde, and viruses, but also creates an ideal living environment of "physical cleanliness, energy harmony, and abundance manifestation" through quantum frequency tuning and feng shui positioning wisdom.'
                )}
              </p>
              <p className="text-foreground/90 leading-relaxed">
                {t(
                  '選擇量子風水空氣淨化方案，就是選擇一種全新的生活方式——在呼吸純淨空氣的同時，享受能量和諧、財運亨通、健康幸福的美好人生。',
                  'Choosing Quantum Feng Shui Air Purification Solution means choosing a new lifestyle—breathing pure air while enjoying energy harmony, prosperous fortune, and a healthy, happy life.'
                )}
              </p>
            </div>

            {/* Call to Action */}
            <div className="mt-10 text-center">
              <a
                href="/contact"
                className="inline-block px-8 py-4 bg-gradient-to-r from-primary to-accent text-white font-bold rounded-lg shadow-lg hover:shadow-cosmic transition-all duration-300 transform hover:scale-105"
              >
                {t('立即預約專業諮詢', 'Book Professional Consultation Now')}
              </a>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
