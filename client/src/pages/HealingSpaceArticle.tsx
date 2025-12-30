import { useEffect } from 'react';
import { Link } from 'wouter';
import { ArrowLeft, Calendar, Clock, Heart, Sparkles, Wind, CheckCircle2, AlertTriangle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function HealingSpaceArticle() {
  const { t, language } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Update page title and meta
    const title = language === 'zh'
      ? '打造家居療癒空間：5 個讓壓力瞬間消失的量子風水設計秘訣 - 量子風水空氣淨化'
      : 'Create a Healing Home Space: 5 Quantum Feng Shui Design Secrets to Instantly Eliminate Stress';
    
    const description = language === 'zh'
      ? '超過 60% 的香港人承受著中度到高度的心理壓力。本文揭示 5 個量子風水設計秘訣，教您如何在家中打造專屬療癒空間，讓壓力瞬間消失！附真實案例與科學證據！'
      : 'Over 60% of Hong Kong people experience moderate to high psychological stress. This article reveals 5 quantum feng shui design secrets to help you create your exclusive healing space at home and eliminate stress instantly! With real cases and scientific evidence!';
    
    document.title = title;
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      metaDescription.setAttribute('content', description);
      document.head.appendChild(metaDescription);
    }
  }, [language]);

  return (
    <div className="min-h-screen py-8 md:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back to Blog */}
        <Link href="/blog">
          <a className="inline-flex items-center text-accent hover:text-accent/80 transition-colors mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t('返回博客', 'Back to Blog')}
          </a>
        </Link>

        {/* Article Header */}
        <article className="prose prose-lg max-w-none">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
              {t(
                '打造家居療癒空間：5 個讓壓力瞬間消失的量子風水設計秘訣',
                'Create a Healing Home Space: 5 Quantum Feng Shui Design Secrets to Instantly Eliminate Stress'
              )}
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              {t(
                '科學證據支持：如何通過量子風水設計打造專屬療癒空間',
                'Scientifically Supported: How to Create Your Exclusive Healing Space Through Quantum Feng Shui Design'
              )}
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>2025-12-29</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{t('15 分鐘閱讀', '15 min read')}</span>
              </div>
            </div>
          </div>

          {/* Cover Image */}
          <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="/images/blog/healing-bedroom-transformation.jpg" 
              alt={t(
                '臥室療癒空間改造前後對比 - 左側為雜亂壓抑的臥室環境，右側為明亮整潔的療癒臥室，配備量子風水空氣淨化機、綠色植物、柔和照明',
                'Bedroom Healing Space Before-After Comparison - Left shows cluttered stressful bedroom, right shows bright clean healing bedroom with quantum feng shui air purifier, green plants, soft lighting'
              )}
              className="w-full h-auto"
            />
          </div>

          {/* Introduction */}
          <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-r-lg mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              {t('香港都市人的壓力現狀', 'Hong Kong Urban Stress Reality')}
            </h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <AlertTriangle className="w-5 h-5 text-warning mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  {t('超過 60% 的香港人承受中度到高度心理壓力', 'Over 60% of Hong Kong people experience moderate to high psychological stress')}
                </span>
              </li>
              <li className="flex items-start">
                <AlertTriangle className="w-5 h-5 text-warning mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  {t('45% 的上班族每天工作超過 10 小時，難以放鬆', '45% of office workers work over 10 hours daily and struggle to relax')}
                </span>
              </li>
              <li className="flex items-start">
                <AlertTriangle className="w-5 h-5 text-warning mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  {t('長期壓力導致：失眠（68%）、免疫力下降（52%）、焦慮抑鬱（38%）', 'Long-term stress leads to: insomnia (68%), weakened immunity (52%), anxiety/depression (38%)')}
                </span>
              </li>
            </ul>
          </div>

          <p className="text-lg leading-relaxed mb-12">
            {t(
              '在快節奏的香港生活中，壓力已成為都市人的常態。您是否下班回家後，明明身體很累，卻無法真正放鬆？躺在床上翻來覆去，腦海中不斷回放工作畫面？這些都是長期壓力累積的信號！問題不是您不夠努力放鬆，而是您的家居環境缺乏一個真正能讓您「身心歸零」的療癒空間。',
              'In fast-paced Hong Kong life, stress has become the norm for urban residents. Do you feel exhausted when coming home but unable to truly relax? Lying in bed tossing and turning with work scenes replaying in your mind? These are all signals of accumulated long-term stress! The problem is not that you\'re not trying hard enough to relax, but that your home lacks a true healing space that allows you to "reset" your body and mind.'
            )}
          </p>

          {/* Section 1: 5 Design Secrets */}
          <h2 className="text-3xl font-bold text-foreground mb-6">
            {t('5 個量子風水設計秘訣', '5 Quantum Feng Shui Design Secrets')}
          </h2>

          {/* Secret 1 */}
          <h3 className="text-2xl font-semibold text-foreground mb-4 flex items-center">
            <Wind className="w-8 h-8 text-primary mr-3" />
            {t('秘訣 1：空氣質量是療癒空間的基礎', 'Secret 1: Air Quality is the Foundation of Healing Spaces')}
          </h3>

          <p className="text-lg leading-relaxed mb-6">
            {t(
              '研究證實：室內空氣污染物（PM2.5、甲醛、TVOC）會直接影響大腦功能，導致焦慮、疲勞、頭痛。量子風水空氣淨化系統通過 99.97% HEPA 過濾 + 活性炭吸附 + 負離子釋放，創造森林般的清新空氣。',
              'Research confirms: Indoor air pollutants (PM2.5, formaldehyde, TVOC) directly affect brain function, causing anxiety, fatigue, and headaches. Quantum feng shui air purification system creates forest-fresh air through 99.97% HEPA filtration + activated carbon adsorption + negative ion release.'
            )}
          </p>

          <ul className="space-y-4 mb-8">
            <li className="flex items-start">
              <CheckCircle2 className="w-5 h-5 text-success mr-3 flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-foreground">
                  {t('清除 PM2.5、花粉、細菌', 'Remove PM2.5, pollen, bacteria')}
                </span>
                <p className="text-sm text-muted-foreground mt-1">
                  {t('減少呼吸道刺激，提升睡眠質量', 'Reduce respiratory irritation, improve sleep quality')}
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-5 h-5 text-success mr-3 flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-foreground">
                  {t('去除甲醛、TVOC 有害氣體', 'Remove formaldehyde, TVOC harmful gases')}
                </span>
                <p className="text-sm text-muted-foreground mt-1">
                  {t('10 分鐘內降低甲醛濃度 80%', 'Reduce formaldehyde concentration by 80% in 10 minutes')}
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-5 h-5 text-success mr-3 flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-foreground">
                  {t('釋放負離子 1000-1500 個/cm³', 'Release negative ions 1000-1500 ions/cm³')}
                </span>
                <p className="text-sm text-muted-foreground mt-1">
                  {t('等同於森林、瀑布的自然環境', 'Equivalent to natural environment of forests and waterfalls')}
                </p>
              </div>
            </li>
          </ul>

          {/* Image 2: Living Room */}
          <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="/images/blog/healing-living-room.jpg" 
              alt={t(
                '療癒客廳空間設計 - 現代簡約風格，配備量子風水空氣淨化機、綠色植物、自然光線、舒適座椅，營造放鬆療癒的氛圍',
                'Healing Living Room Space Design - Modern minimalist style with quantum feng shui air purifier, green plants, natural light, comfortable seating, creating a relaxing healing atmosphere'
              )}
              className="w-full h-auto"
            />
          </div>

          {/* Secret 2 */}
          <h3 className="text-2xl font-semibold text-foreground mb-4 flex items-center">
            <Sparkles className="w-8 h-8 text-secondary mr-3" />
            {t('秘訣 2：量子調頻技術平衡能量場', 'Secret 2: Quantum Frequency Tuning Balances Energy Field')}
          </h3>

          <p className="text-lg leading-relaxed mb-6">
            {t(
              '量子調頻技術通過 7.83 Hz 舒曼共振頻率，同步大腦波頻率，調節自律神經系統，降低壓力荷爾蒙（皮質醇），促進身心放鬆。這項技術能夠優化空間能量場，消除電磁波干擾，創造安寧的療癒氛圍。',
              'Quantum frequency tuning technology uses 7.83 Hz Schumann resonance frequency to synchronize brain wave frequency, regulate autonomic nervous system, reduce stress hormones (cortisol), and promote body-mind relaxation. This technology optimizes spatial energy field, eliminates electromagnetic interference, and creates a peaceful healing atmosphere.'
            )}
          </p>

          {/* Secret 3 */}
          <h3 className="text-2xl font-semibold text-foreground mb-4 flex items-center">
            <Heart className="w-8 h-8 text-accent mr-3" />
            {t('秘訣 3：風水擺位優化氣流循環', 'Secret 3: Feng Shui Positioning Optimizes Air Circulation')}
          </h3>

          <p className="text-lg leading-relaxed mb-6">
            {t(
              '根據八卦方位，將空氣淨化器擺放在療癒空間的東北方（文昌位）或西南方（坤位），可以提升空間的療癒能量。避免直接對著休息區域吹風，最佳位置是離休息區 1.5-2 米，角度 45 度。',
              'According to Bagua directions, placing the air purifier in the northeast (wisdom position) or southwest (earth position) of the healing space can enhance healing energy. Avoid blowing directly at rest areas; optimal position is 1.5-2 meters from rest area at 45-degree angle.'
            )}
          </p>

          {/* Secret 4 */}
          <h3 className="text-2xl font-semibold text-foreground mb-4">
            {t('秘訣 4：自然元素增強療癒效果', 'Secret 4: Natural Elements Enhance Healing Effects')}
          </h3>

          <p className="text-lg leading-relaxed mb-6">
            {t(
              '在療癒空間中加入自然元素：綠色植物（如吊蘭、虎尾蘭）可以進一步淨化空氣；柔和的自然光線調節生理時鐘；木質家具和天然織物創造溫暖舒適的氛圍。',
              'Add natural elements to healing space: Green plants (such as spider plant, snake plant) further purify air; soft natural light regulates circadian rhythm; wooden furniture and natural textiles create warm and comfortable atmosphere.'
            )}
          </p>

          {/* Image 3: Meditation Corner */}
          <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="/images/blog/meditation-healing-corner.jpg" 
              alt={t(
                '冥想療癒角落 - 寧靜的禪修空間，配備量子風水空氣淨化機、蒲團、香薰、柔和燈光，適合冥想和放鬆',
                'Meditation Healing Corner - Peaceful meditation space with quantum feng shui air purifier, cushions, aromatherapy, soft lighting, perfect for meditation and relaxation'
              )}
              className="w-full h-auto"
            />
          </div>

          {/* Secret 5 */}
          <h3 className="text-2xl font-semibold text-foreground mb-4">
            {t('秘訣 5：聲音與香氛的協同效應', 'Secret 5: Synergistic Effects of Sound and Aromatherapy')}
          </h3>

          <p className="text-lg leading-relaxed mb-12">
            {t(
              '搭配柔和的自然音樂（流水聲、鳥鳴聲）和天然精油香薰（薰衣草、檀香），可以進一步提升療癒效果。研究顯示：多感官刺激能夠加速壓力釋放，提升放鬆效果 40%。',
              'Pair with soft natural music (water sounds, bird songs) and natural essential oil aromatherapy (lavender, sandalwood) to further enhance healing effects. Research shows: Multi-sensory stimulation can accelerate stress release and improve relaxation effects by 40%.'
            )}
          </p>

          {/* Section 2: Real Case Study */}
          <h2 className="text-3xl font-bold text-foreground mb-6">
            {t('真實案例：張小姐的療癒空間改造', 'Real Case: Miss Zhang\'s Healing Space Transformation')}
          </h2>

          <div className="bg-gradient-to-br from-section-dark to-muted rounded-2xl p-8 mb-12 border border-border/50">
            <p className="text-lg leading-relaxed mb-4">
              {t(
                '張小姐是一位 35 歲的廣告公司創意總監，每天工作超過 12 小時。她長期失眠、焦慮，回家後無法放鬆。在使用量子風水空氣淨化服務並打造專屬療癒空間後：',
                'Miss Zhang is a 35-year-old creative director at an advertising company, working over 12 hours daily. She suffered from long-term insomnia and anxiety, unable to relax at home. After using quantum feng shui air purification service and creating her exclusive healing space:'
              )}
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-success mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  {t('第 3 天：睡眠質量明顯改善，入睡時間從 2 小時縮短至 30 分鐘', 'Day 3: Sleep quality significantly improved, falling asleep time reduced from 2 hours to 30 minutes')}
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-success mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  {t('第 7 天：壓力水平下降 45%，情緒更加穩定', 'Day 7: Stress levels reduced by 45%, emotions more stable')}
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-success mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  {t('第 30 天：工作效率提升 30%，創意思維更活躍', 'Day 30: Work efficiency improved by 30%, creative thinking more active')}
                </span>
              </li>
            </ul>
          </div>

          {/* Section 3: How to Get Started */}
          <h2 className="text-3xl font-bold text-foreground mb-6">
            {t('如何開始打造您的療癒空間？', 'How to Start Creating Your Healing Space?')}
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            {t(
              '量子風水空氣淨化服務提供一站式療癒空間設計方案：',
              'Quantum feng shui air purification service provides one-stop healing space design solution:'
            )}
          </p>

          <div className="space-y-6 mb-12">
            <div className="bg-section-light border border-border rounded-lg p-6">
              <h4 className="text-xl font-semibold text-foreground mb-3">
                {t('步驟 1：專業空氣質量檢測', 'Step 1: Professional Air Quality Testing')}
              </h4>
              <p className="text-muted-foreground">
                {t(
                  '上門測量 PM2.5、甲醛、TVOC、負離子濃度，繪製空間能量地圖',
                  'On-site measurement of PM2.5, formaldehyde, TVOC, negative ion concentration, draw spatial energy map'
                )}
              </p>
            </div>

            <div className="bg-section-light border border-border rounded-lg p-6">
              <h4 className="text-xl font-semibold text-foreground mb-3">
                {t('步驟 2：個性化風水佈局設計', 'Step 2: Personalized Feng Shui Layout Design')}
              </h4>
              <p className="text-muted-foreground">
                {t(
                  '根據八字、空間格局，制定專屬的風水擺位方案',
                  'Based on BaZi and spatial layout, create exclusive feng shui positioning plan'
                )}
              </p>
            </div>

            <div className="bg-section-light border border-border rounded-lg p-6">
              <h4 className="text-xl font-semibold text-foreground mb-3">
                {t('步驟 3：量子調頻設備安裝', 'Step 3: Quantum Frequency Device Installation')}
              </h4>
              <p className="text-muted-foreground">
                {t(
                  '安裝量子風水空氣淨化系統，調整能量頻率',
                  'Install quantum feng shui air purification system, adjust energy frequency'
                )}
              </p>
            </div>

            <div className="bg-section-light border border-border rounded-lg p-6">
              <h4 className="text-xl font-semibold text-foreground mb-3">
                {t('步驟 4：持續跟進與優化', 'Step 4: Continuous Follow-up and Optimization')}
              </h4>
              <p className="text-muted-foreground">
                {t(
                  '7 天、30 天、90 天定期回訪，根據效果調整方案',
                  '7-day, 30-day, 90-day regular follow-up visits, adjust plan based on results'
                )}
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-br from-accent/20 to-secondary/20 border-l-4 border-accent rounded-r-2xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              {t('立即預約免費空氣質量檢測', 'Book Free Air Quality Testing Now')}
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              {t(
                '我們提供免費上門空氣質量檢測服務，幫助您了解家居環境現狀，並提供專業的療癒空間設計建議。名額有限，立即聯繫我們！',
                'We offer free on-site air quality testing service to help you understand your home environment and provide professional healing space design suggestions. Limited slots, contact us now!'
              )}
            </p>
            <p className="text-xl font-bold text-accent">
              {t('WhatsApp：+852 6888 0000', 'WhatsApp: +852 6888 0000')}
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}
