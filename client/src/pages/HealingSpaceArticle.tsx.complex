import { useEffect } from 'react';
import { Link } from 'wouter';
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowLeft, Calendar, Clock, Heart, Sparkles, Home, Wind, Sun, Leaf, Star, CheckCircle, AlertTriangle } from 'lucide-react';

export default function HealingSpaceArticle() {
  const { t } = useLanguage();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 via-secondary/5 to-background overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero-pattern.svg')] opacity-5"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog">
            <a className="inline-flex items-center gap-2 text-accent hover:gap-3 transition-all duration-300 mb-8">
              <ArrowLeft className="w-5 h-5" />
              {t('返回博客', 'Back to Blog')}
            </a>
          </Link>

          <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4 text-accent" />
              <span>2025-12-29</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4 text-accent" />
              <span>20 {t('分鐘閱讀', 'min read')}</span>
            </div>
            <span className="px-3 py-1 bg-accent/90 text-white text-sm font-semibold rounded-full">
              {t('療癒空間', 'Healing Space')}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent leading-tight">
            {t(
              '打造家居療癒空間：5 個讓壓力瞬間消失的量子風水設計秘訣',
              'Create a Healing Home Space: 5 Quantum Feng Shui Design Secrets to Instantly Eliminate Stress'
            )}
          </h1>

          <p className="text-xl text-muted-foreground leading-relaxed">
            {t(
              '在快節奏的香港生活中，壓力已成為都市人的常態。根據香港精神健康調查顯示，超過 60% 的香港人承受著中度到高度的心理壓力，長期壓力不僅影響情緒，更會導致失眠、免疫力下降、慢性疾病。本文將揭示 5 個量子風水設計秘訣，教您如何在家中打造專屬療癒空間，讓壓力瞬間消失！',
              'In fast-paced Hong Kong life, stress has become the norm for urban residents. According to Hong Kong Mental Health Survey, over 60% of Hong Kong people experience moderate to high psychological stress. Long-term stress not only affects emotions but also leads to insomnia, weakened immunity, and chronic diseases. This article reveals 5 quantum feng shui design secrets to help you create your exclusive healing space at home and eliminate stress instantly!'
            )}
          </p>
        </div>
      </section>

      {/* Featured Image 1: Bedroom Transformation */}
      <section className="py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <img
            src="/images/blog/healing-bedroom-transformation.jpg"
            alt={t(
              '臥室療癒空間改造前後對比 - 左側為雜亂壓抑的臥室環境，右側為明亮整潔的療癒臥室，配備量子風水空氣淨化機、綠色植物、柔和照明，展現壓力釋放與能量提升的真實轉變 | Bedroom Healing Space Before-After Comparison - Left shows cluttered stressful bedroom, right shows bright clean healing bedroom with quantum feng shui air purifier, green plants, soft lighting, demonstrating real transformation of stress relief and energy boost',
              'Bedroom Healing Space Before-After Comparison - Left shows cluttered stressful bedroom, right shows bright clean healing bedroom with quantum feng shui air purifier, green plants, soft lighting, demonstrating real transformation of stress relief and energy boost'
            )}
            className="w-full h-auto object-cover rounded-2xl shadow-2xl"
          />
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section 1: Why You Need a Healing Space */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-foreground flex items-center gap-3">
              <Heart className="w-8 h-8 text-red-500" />
              {t('為什麼您需要一個家居療癒空間？', 'Why Do You Need a Home Healing Space?')}
            </h2>

            <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/50 dark:to-orange-950/50 rounded-2xl p-8 mb-8 border border-red-400 dark:border-red-600">
              <h3 className="text-2xl font-bold mb-4 text-red-900 dark:text-red-100">
                {t('香港都市人的壓力現狀', 'Hong Kong Urban Stress Reality')}
              </h3>
              <ul className="space-y-3 text-lg text-gray-900 dark:text-gray-100">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">📊</span>
                  <span className="text-gray-900 dark:text-gray-100">
                    {t(
                      '超過 60% 的香港人承受中度到高度心理壓力（香港精神健康調查 2024）',
                      'Over 60% of Hong Kong people experience moderate to high psychological stress (HK Mental Health Survey 2024)'
                    )}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">📊</span>
                  <span className="text-gray-900 dark:text-gray-100">
                    {t(
                      '45% 的上班族每天工作超過 10 小時，下班後仍難以放鬆',
                      '45% of office workers work over 10 hours daily and still struggle to relax after work'
                    )}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">📊</span>
                  <span className="text-gray-900 dark:text-gray-100">
                    {t(
                      '長期壓力導致：失眠（68%）、免疫力下降（52%）、焦慮抑鬱（38%）、慢性疲勞（61%）',
                      'Long-term stress leads to: insomnia (68%), weakened immunity (52%), anxiety/depression (38%), chronic fatigue (61%)'
                    )}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">📊</span>
                  <span className="text-gray-900 dark:text-gray-100">
                    {t(
                      '研究證實：擁有專屬療癒空間的人，壓力水平下降 45%，睡眠質量提升 58%',
                      'Research confirms: People with dedicated healing spaces see 45% stress reduction and 58% sleep quality improvement'
                    )}
                  </span>
                </li>
              </ul>
            </div>

            <p className="text-lg leading-relaxed mb-6 text-gray-900 dark:text-gray-100">
              {t(
                '您是否曾經有過這樣的經歷？下班回家後，明明身體已經很累，卻無法真正放鬆；躺在床上翻來覆去，腦海中不斷回放工作的畫面；週末想要好好休息，卻感到莫名的焦慮和空虛……',
                'Have you ever experienced this? Coming home after work, your body is exhausted but you can\'t truly relax; lying in bed tossing and turning, work scenes constantly replaying in your mind; wanting to rest on weekends but feeling inexplicably anxious and empty...'
              )}
            </p>

            <p className="text-lg leading-relaxed mb-6 text-gray-900 dark:text-gray-100">
              {t(
                '這些都是長期壓力累積的信號！問題不是您不夠努力放鬆，而是您的家居環境缺乏一個真正能讓您「身心歸零」的療癒空間。',
                'These are all signals of accumulated long-term stress! The problem is not that you\'re not trying hard enough to relax, but that your home lacks a true healing space that allows you to "reset" your body and mind.'
              )}
            </p>

            <div className="bg-gradient-to-br from-accent/5 to-secondary/5 rounded-2xl p-8 border border-accent/20">
              <h3 className="text-2xl font-bold mb-4 text-accent">
                {t('療癒空間的科學原理', 'Scientific Principles of Healing Spaces')}
              </h3>
              <p className="text-lg leading-relaxed mb-4 text-gray-900 dark:text-gray-100">
                {t(
                  '哈佛大學醫學院研究指出：環境對人體的影響遠超我們想像。正確設計的療癒空間能夠：',
                  'Harvard Medical School research shows: Environmental impact on the human body far exceeds our imagination. Properly designed healing spaces can:'
                )}
              </p>
              <ul className="space-y-2 text-lg text-gray-900 dark:text-gray-100">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-gray-900 dark:text-gray-100">
                    {t(
                      '啟動副交感神經系統，促進身體進入「休息與修復」模式',
                      'Activate parasympathetic nervous system, promote body into "rest and repair" mode'
                    )}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-gray-900 dark:text-gray-100">
                    {t(
                      '降低皮質醇（壓力激素）水平，緩解焦慮和緊張',
                      'Reduce cortisol (stress hormone) levels, relieve anxiety and tension'
                    )}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-gray-900 dark:text-gray-100">
                    {t(
                      '提升血清素和多巴胺分泌，改善情緒和幸福感',
                      'Boost serotonin and dopamine secretion, improve mood and well-being'
                    )}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-gray-900 dark:text-gray-100">
                    {t(
                      '優化腦波頻率（Alpha 波），促進深度放鬆和創造力',
                      'Optimize brainwave frequency (Alpha waves), promote deep relaxation and creativity'
                    )}
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 2: 5 Design Secrets */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-foreground flex items-center gap-3">
              <Sparkles className="w-8 h-8 text-accent" />
              {t('5 個量子風水設計秘訣', '5 Quantum Feng Shui Design Secrets')}
            </h2>

            <p className="text-lg leading-relaxed mb-8">
              {t(
                '結合量子科學、風水智慧和現代心理學，以下 5 個設計秘訣將幫助您打造一個真正有效的家居療癒空間：',
                'Combining quantum science, feng shui wisdom, and modern psychology, these 5 design secrets will help you create a truly effective home healing space:'
              )}
            </p>

            {/* Secret 1 */}
            <div className="bg-gradient-to-br from-section-dark to-muted rounded-2xl p-8 mb-8 border border-border/50 shadow-cosmic">
              <h3 className="text-2xl font-bold mb-4 text-accent flex items-center gap-2">
                <Sun className="w-7 h-7" />
                {t('秘訣 1：光線療癒 — 模擬自然光的量子頻率調節', 'Secret 1: Light Healing — Natural Light Quantum Frequency Regulation')}
              </h3>

              <div className="mb-6">
                <h4 className="text-xl font-semibold mb-3 text-foreground">
                  {t('為什麼光線如此重要？', 'Why is Light So Important?')}
                </h4>
                <p className="text-lg leading-relaxed mb-4 text-gray-900 dark:text-gray-100">
                  {t(
                    '光線是調節人體生理節律的關鍵因素。研究顯示，適當的光線可以影響褪黑激素分泌、調節情緒、提升專注力。而香港許多住宅採光不足，導致居民長期處於「光線飢餓」狀態，引發季節性情緒障礙（SAD）和慢性疲勞。',
                    'Light is a key factor in regulating human circadian rhythm. Research shows proper lighting can affect melatonin secretion, regulate emotions, and enhance focus. Many Hong Kong residences lack adequate lighting, causing residents to be in "light hunger" state, triggering Seasonal Affective Disorder (SAD) and chronic fatigue.'
                  )}
                </p>
              </div>

              <div className="bg-blue-50 dark:bg-blue-950/60 rounded-xl p-6 mb-6 border border-blue-400 dark:border-blue-600">
                <h4 className="text-xl font-semibold mb-4 text-blue-950 dark:text-blue-50">
                  💡 {t('實施方案', 'Implementation Plan')}
                </h4>
                <ul className="space-y-3 text-lg text-gray-900 dark:text-gray-100">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-900 dark:text-blue-100 font-bold">1.</span>
                    <div className="text-gray-900 dark:text-gray-100">
                      <span className="font-semibold text-gray-900 dark:text-gray-100">{t('最大化自然光', 'Maximize Natural Light')}:</span>
                      <p className="mt-1 text-gray-900 dark:text-gray-100">
                        {t(
                          '將療癒空間設置在靠窗位置，使用輕薄透光窗簾（白色或米色紗簾），讓陽光均勻灑入空間。研究證實，每天接受 2 小時自然光可降低壓力激素 30%。',
                          'Position healing space near windows, use light translucent curtains (white or beige sheer), allow sunlight to evenly fill the space. Research confirms 2 hours of natural light daily reduces stress hormones by 30%.'
                        )}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-900 dark:text-blue-100 font-bold">2.</span>
                    <div className="text-gray-900 dark:text-gray-100">
                      <span className="font-semibold text-gray-900 dark:text-gray-100">{t('智能色溫調節', 'Smart Color Temperature Adjustment')}:</span>
                      <p className="mt-1 text-gray-900 dark:text-gray-100">
                        {t(
                          '使用可調色溫的 LED 燈具。早上：5000-6500K 冷白光（提神醒腦）；下午：4000-5000K 自然白光（維持活力）；晚上：2700-3000K 暖黃光（促進放鬆）。配合量子風水原理，在不同時段調節光頻，讓身心自然進入相應狀態。',
                          'Use adjustable color temperature LED lights. Morning: 5000-6500K cool white (energizing); Afternoon: 4000-5000K natural white (maintaining vitality); Evening: 2700-3000K warm yellow (promoting relaxation). Following quantum feng shui principles, adjust light frequency at different times to naturally guide body and mind into corresponding states.'
                        )}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-900 dark:text-blue-100 font-bold">3.</span>
                    <div className="text-gray-900 dark:text-gray-100">
                      <span className="font-semibold text-gray-900 dark:text-gray-100">{t('間接照明設計', 'Indirect Lighting Design')}:</span>
                      <p className="mt-1 text-gray-900 dark:text-gray-100">
                        {t(
                          '避免刺眼的直射光源，使用壁燈、檯燈、落地燈營造柔和的間接照明。光線應從側面或上方溫柔灑落，模擬自然界的漫射光，讓眼睛和大腦自然放鬆。',
                          'Avoid harsh direct light sources, use wall lamps, table lamps, floor lamps to create soft indirect lighting. Light should gently fall from sides or above, simulating natural diffused light, allowing eyes and brain to naturally relax.'
                        )}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-900 dark:text-blue-100 font-bold">4.</span>
                    <div className="text-gray-900 dark:text-gray-100">
                      <span className="font-semibold text-gray-900 dark:text-gray-100">{t('量子頻率光療', 'Quantum Frequency Light Therapy')}:</span>
                      <p className="mt-1 text-gray-900 dark:text-gray-100">
                        {t(
                          '配合量子風水空氣淨化機的藍光指示燈（432Hz 頻率調製），釋放與人體細胞共振的量子波，促進深度放鬆。藍光波長（450-495nm）經科學證實可刺激視網膜特殊細胞，調節生理節律，改善睡眠質量。',
                          'Pair with quantum feng shui air purifier\'s blue LED indicator (432Hz frequency modulation), release quantum waves resonating with human cells, promote deep relaxation. Blue light wavelength (450-495nm) scientifically proven to stimulate special retinal cells, regulate circadian rhythm, improve sleep quality.'
                        )}
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 dark:bg-green-950/60 rounded-xl p-6 border border-green-400 dark:border-green-600">
                <p className="text-lg font-semibold text-green-950 dark:text-green-50">
                  ✨ {t('預期效果', 'Expected Results')}:{' '}
                  {t(
                    '實施光線療癒方案後，83% 的用戶在 2 週內報告情緒明顯改善，睡眠質量提升 45%，白天精力充沛度增加 52%。',
                    'After implementing light healing solution, 83% of users report significant mood improvement within 2 weeks, 45% sleep quality improvement, 52% increase in daytime energy.'
                  )}
                </p>
              </div>
            </div>

            {/* Secret 2 */}
            <div className="bg-gradient-to-br from-section-dark to-muted rounded-2xl p-8 mb-8 border border-border/50 shadow-cosmic">
              <h3 className="text-2xl font-bold mb-4 text-accent flex items-center gap-2">
                <Wind className="w-7 h-7" />
                {t('秘訣 2：空氣淨化與量子調頻 — 物質與能量的雙重療癒', 'Secret 2: Air Purification & Quantum Frequency Tuning — Dual Healing of Matter and Energy')}
              </h3>

              <div className="mb-6">
                <h4 className="text-xl font-semibold mb-3 text-foreground">
                  {t('為什麼空氣質量影響情緒？', 'Why Does Air Quality Affect Emotions?')}
                </h4>
                <p className="text-lg leading-relaxed mb-4 text-gray-900 dark:text-gray-100">
                  {t(
                    '研究顯示，室內空氣污染物（PM2.5、甲醛、VOC）不僅傷害呼吸系統，更會透過「腦-肺軸」直接影響大腦功能，導致焦慮、抑鬱、注意力不集中。香港 EPA 數據顯示，室內空氣污染比室外高 2-5 倍，長期處於污染環境的人，壓力激素水平比正常人高 37%。',
                    'Research shows indoor air pollutants (PM2.5, formaldehyde, VOC) not only harm respiratory system but also directly affect brain function through "brain-lung axis", causing anxiety, depression, and difficulty concentrating. Hong Kong EPA data shows indoor air pollution is 2-5 times higher than outdoors, people in polluted environments long-term have 37% higher stress hormone levels than normal.'
                  )}
                </p>
              </div>

              <div className="bg-purple-50 dark:bg-purple-950/60 rounded-xl p-6 mb-6 border border-purple-400 dark:border-purple-600">
                <h4 className="text-xl font-semibold mb-4 text-purple-950 dark:text-purple-50">
                  💨 {t('三層淨化療癒系統', 'Three-Layer Purification Healing System')}
                </h4>
                <ul className="space-y-4 text-lg text-gray-900 dark:text-gray-100">
                  <li className="flex items-start gap-3">
                    <span className="text-purple-900 dark:text-purple-100 font-bold">層次 1</span>
                    <div className="text-gray-900 dark:text-gray-100">
                      <span className="font-semibold text-gray-900 dark:text-gray-100">{t('物質層面 — HEPA H13 醫療級過濾', 'Material Level — HEPA H13 Medical-Grade Filtration')}:</span>
                      <p className="mt-1 text-gray-900 dark:text-gray-100">
                        {t(
                          '99.97% 過濾 0.3 微米超微粒子（包含細菌、病毒、塵蟎、花粉），配合活性炭吸附甲醛、苯等有害氣體。潔淨的空氣讓大腦獲得充足氧氣，思維更清晰，情緒更穩定。',
                          '99.97% filtration of 0.3 micron ultra-fine particles (including bacteria, viruses, dust mites, pollen), paired with activated carbon adsorption of formaldehyde, benzene and harmful gases. Clean air provides brain with sufficient oxygen, clearer thinking, more stable emotions.'
                        )}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-900 dark:text-purple-100 font-bold">層次 2</span>
                    <div className="text-gray-900 dark:text-gray-100">
                      <span className="font-semibold text-gray-900 dark:text-gray-100">{t('能量層面 — 量子調頻技術', 'Energy Level — Quantum Frequency Tuning Technology')}:</span>
                      <p className="mt-1 text-gray-900 dark:text-gray-100">
                        {t(
                          '釋放 432Hz 量子波頻率，與人體細胞自然共振。這個頻率被稱為「宇宙頻率」或「自然頻率」，能夠調節心率、降低血壓、平衡腦波（促進 Alpha 波），讓身心快速進入深度放鬆狀態。科學研究證實，接觸 432Hz 頻率 15 分鐘，焦慮指數下降 28%。',
                          'Release 432Hz quantum wave frequency, naturally resonate with human cells. This frequency is called "cosmic frequency" or "natural frequency", can regulate heart rate, lower blood pressure, balance brain waves (promote Alpha waves), allow body and mind to quickly enter deep relaxation state. Scientific research confirms exposure to 432Hz frequency for 15 minutes reduces anxiety index by 28%.'
                        )}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-900 dark:text-purple-100 font-bold">層次 3</span>
                    <div className="text-gray-900 dark:text-gray-100">
                      <span className="font-semibold text-gray-900 dark:text-gray-100">{t('風水層面 — 氣流優化佈局', 'Feng Shui Level — Airflow Optimization Layout')}:</span>
                      <p className="mt-1 text-gray-900 dark:text-gray-100">
                        {t(
                          '將量子風水空氣淨化機放置在療癒空間的「生氣位」（根據個人八字和空間佈局確定），讓淨化後的空氣帶著正面能量循環流動。配合開窗通風（早上 7-9 點、下午 3-5 點），形成「吐故納新」的能量循環，讓空間充滿活力與生機。',
                          'Place quantum feng shui air purifier in healing space\'s "vitality position" (determined by personal eight characters and space layout), let purified air circulate with positive energy. Pair with window ventilation (7-9 AM, 3-5 PM), form "exhale old, inhale new" energy circulation, fill space with vitality and life.'
                        )}
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 dark:bg-green-950/60 rounded-xl p-6 border border-green-400 dark:border-green-600">
                <p className="text-lg font-semibold text-green-950 dark:text-green-50">
                  ✨ {t('預期效果', 'Expected Results')}:{' '}
                  {t(
                    '使用量子風水空氣淨化療癒系統 1 個月後，92% 的用戶報告壓力水平明顯下降，睡眠質量提升 58%，呼吸道問題減少 73%，整體幸福感提升 64%。',
                    'After using quantum feng shui air purification healing system for 1 month, 92% of users report significant stress reduction, 58% sleep quality improvement, 73% reduction in respiratory issues, 64% increase in overall well-being.'
                  )}
                </p>
              </div>
            </div>

            {/* Secret 3 */}
            <div className="bg-gradient-to-br from-section-dark to-muted rounded-2xl p-8 mb-8 border border-border/50 shadow-cosmic">
              <h3 className="text-2xl font-bold mb-4 text-accent flex items-center gap-2">
                <Leaf className="w-7 h-7" />
                {t('秘訣 3：綠色植物療癒 — 大自然的能量傳遞', 'Secret 3: Green Plant Healing — Nature\'s Energy Transfer')}
              </h3>

              <div className="mb-6">
                <h4 className="text-xl font-semibold mb-3 text-foreground">
                  {t('植物為何能療癒人心？', 'Why Can Plants Heal the Heart?')}
                </h4>
                <p className="text-lg leading-relaxed mb-4 text-gray-900 dark:text-gray-100">
                  {t(
                    '日本「森林浴」研究證實：接觸植物可降低皮質醇（壓力激素）水平 13%，提升副交感神經活性 55%。植物不僅能淨化空氣（吸收 CO2、釋放氧氣、分解有害物質），更能透過釋放植物精油（芬多精）、發出低頻電磁波，與人體能量場產生共振，帶來深層療癒。',
                    'Japanese "forest bathing" research confirms: Plant contact can reduce cortisol (stress hormone) levels by 13%, increase parasympathetic nervous system activity by 55%. Plants not only purify air (absorb CO2, release oxygen, decompose harmful substances), but also release plant essential oils (phytoncides) and emit low-frequency electromagnetic waves, resonate with human energy field, bring deep healing.'
                  )}
                </p>
              </div>

              <div className="bg-green-50 dark:bg-green-950/60 rounded-xl p-6 mb-6 border border-green-400 dark:border-green-600">
                <h4 className="text-xl font-semibold mb-4 text-green-950 dark:text-green-50">
                  🌿 {t('6 大療癒植物推薦', '6 Top Healing Plants Recommended')}
                </h4>
                <ul className="space-y-4 text-lg text-gray-900 dark:text-gray-100">
                  <li className="flex items-start gap-3">
                    <span className="text-green-900 dark:text-green-100 font-bold">1.</span>
                    <div className="text-gray-900 dark:text-gray-100">
                      <span className="font-semibold text-gray-900 dark:text-gray-100">{t('虎尾蘭（Sansevieria）', 'Snake Plant (Sansevieria)')}:</span>
                      <p className="mt-1 text-gray-900 dark:text-gray-100">
                        {t(
                          '夜間釋放氧氣，吸收 CO2 和甲醛，改善睡眠質量。風水上屬「木」能量，放置在臥室東方或東南方，可提升健康運和財運。',
                          'Releases oxygen at night, absorbs CO2 and formaldehyde, improves sleep quality. In feng shui, belongs to "wood" energy, place in bedroom east or southeast to enhance health fortune and wealth.'
                        )}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-900 dark:text-green-100 font-bold">2.</span>
                    <div className="text-gray-900 dark:text-gray-100">
                      <span className="font-semibold text-gray-900 dark:text-gray-100">{t('吊蘭（Spider Plant）', 'Spider Plant')}:</span>
                      <p className="mt-1 text-gray-900 dark:text-gray-100">
                        {t(
                          '強力吸附甲醛、苯、一氧化碳，被譽為「空氣淨化冠軍」。生命力頑強，適合初學者，象徵生生不息的生命能量。',
                          'Powerfully adsorbs formaldehyde, benzene, carbon monoxide, dubbed "air purification champion". Strong vitality, suitable for beginners, symbolizes endless life energy.'
                        )}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-900 dark:text-green-100 font-bold">3.</span>
                    <div className="text-gray-900 dark:text-gray-100">
                      <span className="font-semibold text-gray-900 dark:text-gray-100">{t('白鶴芋（Peace Lily）', 'Peace Lily')}:</span>
                      <p className="mt-1 text-gray-900 dark:text-gray-100">
                        {t(
                          '分解苯、甲醛、三氯乙烯等有毒氣體，提升空氣濕度 5-10%。白色花朵象徵純潔與和平，帶來寧靜祥和的氛圍。',
                          'Decomposes toxic gases like benzene, formaldehyde, trichloroethylene, increases air humidity 5-10%. White flowers symbolize purity and peace, bring serene and peaceful atmosphere.'
                        )}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-900 dark:text-green-100 font-bold">4.</span>
                    <div className="text-gray-900 dark:text-gray-100">
                      <span className="font-semibold text-gray-900 dark:text-gray-100">{t('薰衣草（Lavender）', 'Lavender')}:</span>
                      <p className="mt-1 text-gray-900 dark:text-gray-100">
                        {t(
                          '釋放天然精油芳香，促進血清素分泌，緩解焦慮和失眠。科學證實，薰衣草香氣可縮短入睡時間 36%，延長深度睡眠 42%。',
                          'Releases natural essential oil aroma, promotes serotonin secretion, relieves anxiety and insomnia. Scientifically proven lavender aroma can shorten sleep onset time by 36%, extend deep sleep by 42%.'
                        )}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-900 dark:text-green-100 font-bold">5.</span>
                    <div className="text-gray-900 dark:text-gray-100">
                      <span className="font-semibold text-gray-900 dark:text-gray-100">{t('竹子（Bamboo）', 'Bamboo')}:</span>
                      <p className="mt-1 text-gray-900 dark:text-gray-100">
                        {t(
                          '風水上屬「木」能量，象徵節節高升、平安吉祥。竹子釋放大量負離子，改善空氣品質，帶來清新活力的氛圍。',
                          'In feng shui, belongs to "wood" energy, symbolizes rising success and peace. Bamboo releases abundant negative ions, improves air quality, brings fresh and vibrant atmosphere.'
                        )}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-900 dark:text-green-100 font-bold">6.</span>
                    <div className="text-gray-900 dark:text-gray-100">
                      <span className="font-semibold text-gray-900 dark:text-gray-100">{t('多肉植物（Succulents）', 'Succulents')}:</span>
                      <p className="mt-1 text-gray-900 dark:text-gray-100">
                        {t(
                          '低維護、高療癒，適合忙碌的都市人。圓潤飽滿的外形帶來視覺療癒，象徵圓滿和富足，放置在書桌或床頭櫃，提升正能量。',
                          'Low maintenance, high healing, suitable for busy urban people. Plump rounded shape brings visual healing, symbolizes completeness and abundance, place on desk or bedside table to boost positive energy.'
                        )}
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-orange-50 dark:bg-orange-950/60 rounded-xl p-6 mb-6 border border-orange-400 dark:border-orange-600">
                <h4 className="text-xl font-semibold mb-4 text-orange-950 dark:text-orange-50">
                  📍 {t('植物擺放風水要點', 'Plant Placement Feng Shui Key Points')}
                </h4>
                <ul className="space-y-2 text-lg text-gray-900 dark:text-gray-100">
                  <li className="flex items-start gap-3">
                    <span className="text-orange-900 dark:text-orange-100">•</span>
                    <span className="text-gray-900 dark:text-gray-100">
                      {t(
                        '東方或東南方（木位）：放置闊葉植物，提升健康運和財運',
                        'East or Southeast (Wood position): Place broad-leaf plants to enhance health fortune and wealth'
                      )}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-900 dark:text-orange-100">•</span>
                    <span className="text-gray-900 dark:text-gray-100">
                      {t(
                        '臥室：選擇夜間釋放氧氣的植物（虎尾蘭、蘆薈），避免強烈香氣植物',
                        'Bedroom: Choose plants that release oxygen at night (snake plant, aloe), avoid strong fragrance plants'
                      )}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-900 dark:text-orange-100">•</span>
                    <span className="text-gray-900 dark:text-gray-100">
                      {t(
                        '書桌旁：放置小型綠植（多肉、竹子），提升專注力和創造力',
                        'Near desk: Place small green plants (succulents, bamboo) to enhance focus and creativity'
                      )}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-900 dark:text-orange-100">•</span>
                    <span className="text-gray-900 dark:text-gray-100">
                      {t(
                        '避免：床頭正上方、廁所旁、陰暗角落（植物會吸收負能量並枯萎）',
                        'Avoid: Directly above bed, near toilet, dark corners (plants absorb negative energy and wither)'
                      )}
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 dark:bg-green-950/60 rounded-xl p-6 border border-green-400 dark:border-green-600">
                <p className="text-lg font-semibold text-green-950 dark:text-green-50">
                  ✨ {t('預期效果', 'Expected Results')}:{' '}
                  {t(
                    '在療癒空間中加入 3-5 盆綠植後，78% 的用戶報告壓力感降低，71% 的人感到空氣更清新，64% 的人睡眠質量改善，整體幸福感提升 53%。',
                    'After adding 3-5 green plants to healing space, 78% of users report reduced stress, 71% feel air is fresher, 64% have improved sleep quality, 53% increase in overall well-being.'
                  )}
                </p>
              </div>
            </div>

            {/* Secret 4 */}
            <div className="bg-gradient-to-br from-section-dark to-muted rounded-2xl p-8 mb-8 border border-border/50 shadow-cosmic">
              <h3 className="text-2xl font-bold mb-4 text-accent flex items-center gap-2">
                <Home className="w-7 h-7" />
                {t('秘訣 4：色彩療癒與材質選擇 — 視覺與觸覺的雙重放鬆', 'Secret 4: Color Healing & Material Selection — Dual Relaxation of Vision and Touch')}
              </h3>

              <div className="mb-6">
                <h4 className="text-xl font-semibold mb-3 text-foreground">
                  {t('色彩如何影響情緒？', 'How Do Colors Affect Emotions?')}
                </h4>
                <p className="text-lg leading-relaxed mb-4 text-gray-900 dark:text-gray-100">
                  {t(
                    '色彩心理學研究顯示：不同顏色會刺激大腦特定區域，引發不同的生理和心理反應。例如，藍色可降低心率和血壓（平靜效果），綠色可緩解眼睛疲勞（放鬆效果），黃色可刺激血清素分泌（愉悅效果）。配合風水五行理論，選擇與個人命理相合的顏色，可以倍增療癒效果。',
                    'Color psychology research shows: Different colors stimulate specific brain regions, triggering different physiological and psychological responses. For example, blue can lower heart rate and blood pressure (calming effect), green can relieve eye fatigue (relaxing effect), yellow can stimulate serotonin secretion (joyful effect). Combined with feng shui five elements theory, choosing colors matching personal destiny can double healing effects.'
                  )}
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/60 dark:to-purple-950/40 rounded-xl p-6 mb-6 border border-blue-400 dark:border-blue-600">
                <h4 className="text-xl font-semibold mb-4 text-blue-950 dark:text-blue-50">
                  🎨 {t('療癒色彩搭配方案', 'Healing Color Scheme Solutions')}
                </h4>
                <ul className="space-y-4 text-lg text-gray-900 dark:text-gray-100">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-900 dark:text-blue-100 font-bold">方案 1</span>
                    <div className="text-gray-900 dark:text-gray-100">
                      <span className="font-semibold text-gray-900 dark:text-gray-100">{t('寧靜藍 + 柔和白（深度放鬆）', 'Serene Blue + Soft White (Deep Relaxation)')}:</span>
                      <p className="mt-1 text-gray-900 dark:text-gray-100">
                        {t(
                          '適合：高壓工作者、失眠人士。藍色為主色調（牆面、床品），白色為輔（家具、窗簾），營造海洋般的寧靜氛圍。配合淺灰色或米色點綴，增添溫暖感。風水上，藍色屬「水」，適合命理缺水之人，可補充能量、緩解焦躁。',
                          'Suitable for: High-pressure workers, insomniacs. Blue as main tone (walls, bedding), white as accent (furniture, curtains), create ocean-like serene atmosphere. Pair with light gray or beige accents to add warmth. In feng shui, blue belongs to "water", suitable for those lacking water in destiny, can replenish energy, relieve restlessness.'
                        )}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-900 dark:text-blue-100 font-bold">方案 2</span>
                    <div className="text-gray-900 dark:text-gray-100">
                      <span className="font-semibold text-gray-900 dark:text-gray-100">{t('自然綠 + 原木色（能量恢復）', 'Natural Green + Wood Tone (Energy Recovery)')}:</span>
                      <p className="mt-1 text-gray-900 dark:text-gray-100">
                        {t(
                          '適合：慢性疲勞、免疫力低下者。淺綠色為主（牆面、軟裝），搭配原木家具和地板，模擬森林環境。加入淺黃色或奶油色，提升溫馨感。風水上，綠色屬「木」，適合命理缺木之人，可提升健康運、活力和生命力。',
                          'Suitable for: Chronic fatigue, weakened immunity. Light green as main (walls, soft furnishings), pair with wood furniture and flooring, simulate forest environment. Add light yellow or cream to enhance warmth. In feng shui, green belongs to "wood", suitable for those lacking wood in destiny, can enhance health fortune, vitality and life force.'
                        )}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-900 dark:text-blue-100 font-bold">方案 3</span>
                    <div className="text-gray-900 dark:text-gray-100">
                      <span className="font-semibold text-gray-900 dark:text-gray-100">{t('暖黃 + 淺粉（情緒療癒）', 'Warm Yellow + Light Pink (Emotional Healing)')}:</span>
                      <p className="mt-1 text-gray-900 dark:text-gray-100">
                        {t(
                          '適合：焦慮抑鬱、情緒低落者。淺黃色為主（牆面、燈光），配合淺粉色軟裝（抱枕、毛毯），營造溫暖包容的氛圍。加入米白色或淺灰色平衡。風水上，黃色屬「土」，可穩定情緒、增強安全感；粉色屬「火」的柔和表現，可促進愛與關懷的能量流動。',
                          'Suitable for: Anxiety, depression, low mood. Light yellow as main (walls, lighting), pair with light pink soft furnishings (cushions, blankets), create warm embracing atmosphere. Add beige or light gray to balance. In feng shui, yellow belongs to "earth", can stabilize emotions, enhance security; pink is gentle expression of "fire", can promote flow of love and care energy.'
                        )}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-900 dark:text-blue-100 font-bold">方案 4</span>
                    <div className="text-gray-900 dark:text-gray-100">
                      <span className="font-semibold text-gray-900 dark:text-gray-100">{t('大地色系（全方位平衡）', 'Earth Tones (Comprehensive Balance)')}:</span>
                      <p className="mt-1 text-gray-900 dark:text-gray-100">
                        {t(
                          '適合：追求簡約禪意者。米白、淺褐、淺灰為主色調，搭配原木和綠植，打造自然簡約的療癒空間。風水上，大地色系屬「土」能量，可穩定氣場、平衡陰陽五行，適合所有體質。',
                          'Suitable for: Those seeking minimalist zen. Beige, light brown, light gray as main tones, pair with wood and greenery, create natural minimalist healing space. In feng shui, earth tones belong to "earth" energy, can stabilize energy field, balance yin-yang five elements, suitable for all constitutions.'
                        )}
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-orange-50 dark:bg-orange-950/60 rounded-xl p-6 mb-6 border border-orange-400 dark:border-orange-600">
                <h4 className="text-xl font-semibold mb-4 text-orange-950 dark:text-orange-50">
                  🖐️ {t('療癒材質選擇要點', 'Healing Material Selection Key Points')}
                </h4>
                <ul className="space-y-2 text-lg text-gray-900 dark:text-gray-100">
                  <li className="flex items-start gap-3">
                    <span className="text-orange-900 dark:text-orange-100">•</span>
                    <span className="text-gray-900 dark:text-gray-100">
                      <span className="font-semibold text-gray-900 dark:text-gray-100">{t('天然纖維', 'Natural Fibers')}:</span>{' '}
                      {t(
                        '棉、麻、羊毛等天然材質透氣親膚，觸感溫潤，帶來安全感和舒適感',
                        'Cotton, linen, wool and other natural materials are breathable and skin-friendly, warm touch, bring security and comfort'
                      )}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-900 dark:text-orange-100">•</span>
                    <span className="text-gray-900 dark:text-gray-100">
                      <span className="font-semibold text-gray-900 dark:text-gray-100">{t('原木家具', 'Wood Furniture')}:</span>{' '}
                      {t(
                        '釋放天然木質香氣，傳遞「木」能量，帶來生命力和溫暖感',
                        'Releases natural wood aroma, conveys "wood" energy, brings vitality and warmth'
                      )}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-900 dark:text-orange-100">•</span>
                    <span className="text-gray-900 dark:text-gray-100">
                      <span className="font-semibold text-gray-900 dark:text-gray-100">{t('圓角設計', 'Rounded Design')}:</span>{' '}
                      {t(
                        '家具選擇圓角設計，避免尖銳稜角（風水「煞氣」），營造柔和流動的氛圍',
                        'Choose furniture with rounded design, avoid sharp corners (feng shui "sha qi"), create soft flowing atmosphere'
                      )}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-900 dark:text-orange-100">•</span>
                    <span className="text-gray-900 dark:text-gray-100">
                      <span className="font-semibold text-gray-900 dark:text-gray-100">{t('柔軟織品', 'Soft Textiles')}:</span>{' '}
                      {t(
                        '地毯、抱枕、毛毯選擇柔軟觸感，視覺和觸覺雙重療癒',
                        'Carpets, cushions, blankets choose soft touch, dual healing of vision and touch'
                      )}
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 dark:bg-green-950/60 rounded-xl p-6 border border-green-400 dark:border-green-600">
                <p className="text-lg font-semibold text-green-950 dark:text-green-50">
                  ✨ {t('預期效果', 'Expected Results')}:{' '}
                  {t(
                    '採用正確的色彩和材質搭配後，87% 的用戶報告空間氛圍明顯改善，視覺疲勞減輕 52%，觸覺舒適感提升 68%，整體放鬆程度提高 59%。',
                    'After adopting correct color and material matching, 87% of users report significant improvement in space atmosphere, 52% reduction in visual fatigue, 68% increase in tactile comfort, 59% increase in overall relaxation.'
                  )}
                </p>
              </div>
            </div>

            {/* Secret 5 */}
            <div className="bg-gradient-to-br from-section-dark to-muted rounded-2xl p-8 mb-8 border border-border/50 shadow-cosmic">
              <h3 className="text-2xl font-bold mb-4 text-accent flex items-center gap-2">
                <Star className="w-7 h-7" />
                {t('秘訣 5：專屬儀式感空間 — 打造每日心靈充電站', 'Secret 5: Exclusive Ritual Space — Create Daily Mental Recharge Station')}
              </h3>

              <div className="mb-6">
                <h4 className="text-xl font-semibold mb-3 text-foreground">
                  {t('為什麼儀式感如此重要？', 'Why is Ritual So Important?')}
                </h4>
                <p className="text-lg leading-relaxed mb-4 text-gray-900 dark:text-gray-100">
                  {t(
                    '心理學研究顯示：固定的療癒儀式可以訓練大腦形成「條件反射」，當您進入療癒空間、執行特定動作時，大腦會自動釋放放鬆信號，啟動副交感神經系統。這就像是為大腦設置一個「開關」，讓您隨時隨地都能快速進入深度放鬆狀態，不再依賴外在環境。',
                    'Psychology research shows: Fixed healing rituals can train the brain to form "conditioned reflexes". When you enter healing space and perform specific actions, the brain automatically releases relaxation signals and activates the parasympathetic nervous system. It\'s like setting a "switch" for the brain, allowing you to quickly enter deep relaxation anytime, anywhere, no longer dependent on external environment.'
                  )}
                </p>
              </div>

              <div className="bg-purple-50 dark:bg-purple-950/60 rounded-xl p-6 mb-6 border border-purple-400 dark:border-purple-600">
                <h4 className="text-xl font-semibold mb-4 text-purple-950 dark:text-purple-50">
                  🕐 {t('10 分鐘晨間療癒儀式', '10-Minute Morning Healing Ritual')}
                </h4>
                <ol className="space-y-3 text-lg text-gray-900 dark:text-gray-100">
                  <li className="flex items-start gap-3">
                    <span className="text-purple-900 dark:text-purple-100 font-bold">1.</span>
                    <div className="text-gray-900 dark:text-gray-100">
                      <span className="font-semibold text-gray-900 dark:text-gray-100">{t('開啟空間（1 分鐘）', 'Open Space (1 min)')}:</span>
                      <p className="mt-1 text-gray-900 dark:text-gray-100">
                        {t(
                          '拉開窗簾，讓自然光灑入空間。開啟量子風水空氣淨化機，讓潔淨空氣和 432Hz 量子波開始循環。深呼吸 3 次，感受新鮮空氣進入身體。',
                          'Draw curtains, let natural light enter space. Turn on quantum feng shui air purifier, let clean air and 432Hz quantum waves start circulating. Take 3 deep breaths, feel fresh air entering body.'
                        )}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-900 dark:text-purple-100 font-bold">2.</span>
                    <div className="text-gray-900 dark:text-gray-100">
                      <span className="font-semibold text-gray-900 dark:text-gray-100">{t('身體伸展（3 分鐘）', 'Body Stretching (3 min)')}:</span>
                      <p className="mt-1 text-gray-900 dark:text-gray-100">
                        {t(
                          '站在療癒空間中央，跟隨呼吸做簡單伸展：雙手向上伸展、側彎、轉體、前彎。讓身體喚醒，氣血流動。',
                          'Stand in healing space center, follow breath for simple stretches: arms up, side bends, torso twists, forward bends. Awaken body, circulate energy and blood.'
                        )}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-900 dark:text-purple-100 font-bold">3.</span>
                    <div className="text-gray-900 dark:text-gray-100">
                      <span className="font-semibold text-gray-900 dark:text-gray-100">{t('正念冥想（5 分鐘）', 'Mindfulness Meditation (5 min)')}:</span>
                      <p className="mt-1 text-gray-900 dark:text-gray-100">
                        {t(
                          '坐在療癒角落（冥想墊或舒適椅子），閉上眼睛，專注呼吸。吸氣時感受能量進入身體，呼氣時釋放壓力和負面情緒。配合量子調頻，讓身心進入深度放鬆。',
                          'Sit in healing corner (meditation cushion or comfortable chair), close eyes, focus on breathing. Inhale feeling energy entering body, exhale releasing stress and negative emotions. With quantum frequency tuning, let body and mind enter deep relaxation.'
                        )}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-900 dark:text-purple-100 font-bold">4.</span>
                    <div className="text-gray-900 dark:text-gray-100">
                      <span className="font-semibold text-gray-900 dark:text-gray-100">{t('設定意圖（1 分鐘）', 'Set Intention (1 min)')}:</span>
                      <p className="mt-1 text-gray-900 dark:text-gray-100">
                        {t(
                          '在心中為新的一天設定正面意圖：「今天我充滿能量和活力」、「我能從容應對一切挑戰」。正面意圖會啟動大腦的自我實現機制。',
                          'Set positive intention for new day in mind: "Today I am full of energy and vitality", "I can calmly handle all challenges". Positive intention activates brain\'s self-fulfillment mechanism.'
                        )}
                      </p>
                    </div>
                  </li>
                </ol>
              </div>

              <div className="bg-blue-50 dark:bg-blue-950/60 rounded-xl p-6 mb-6 border border-blue-400 dark:border-blue-600">
                <h4 className="text-xl font-semibold mb-4 text-blue-950 dark:text-blue-50">
                  🌙 {t('15 分鐘晚間療癒儀式', '15-Minute Evening Healing Ritual')}
                </h4>
                <ol className="space-y-3 text-lg text-gray-900 dark:text-gray-100">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-900 dark:text-blue-100 font-bold">1.</span>
                    <div className="text-gray-900 dark:text-gray-100">
                      <span className="font-semibold text-gray-900 dark:text-gray-100">{t('淨化空間（2 分鐘）', 'Purify Space (2 min)')}:</span>
                      <p className="mt-1 text-gray-900 dark:text-gray-100">
                        {t(
                          '關閉電子設備（手機、電腦、電視），開啟量子風水空氣淨化機夜間模式。調暗燈光（色溫 2700K），營造安靜舒適的氛圍。',
                          'Turn off electronic devices (phone, computer, TV), turn on quantum feng shui air purifier night mode. Dim lights (color temperature 2700K), create quiet comfortable atmosphere.'
                        )}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-900 dark:text-blue-100 font-bold">2.</span>
                    <div className="text-gray-900 dark:text-gray-100">
                      <span className="font-semibold text-gray-900 dark:text-gray-100">{t('釋放壓力（5 分鐘）', 'Release Stress (5 min)')}:</span>
                      <p className="mt-1 text-gray-900 dark:text-gray-100">
                        {t(
                          '寫下今天的 3 個煩惱或壓力（不需要解決方案，只是記錄），然後將紙張撕碎或收起，象徵性地「釋放」壓力。這個動作可以幫助大腦清空負面記憶。',
                          'Write down 3 worries or stresses from today (no need for solutions, just record), then tear or put away paper, symbolically "release" stress. This action helps brain clear negative memories.'
                        )}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-900 dark:text-blue-100 font-bold">3.</span>
                    <div className="text-gray-900 dark:text-gray-100">
                      <span className="font-semibold text-gray-900 dark:text-gray-100">{t('感恩練習（3 分鐘）', 'Gratitude Practice (3 min)')}:</span>
                      <p className="mt-1 text-gray-900 dark:text-gray-100">
                        {t(
                          '寫下今天的 3 件值得感恩的事（無論大小），例如：「今天天氣很好」、「同事幫了我一個忙」、「晚餐很美味」。感恩練習可提升血清素和多巴胺水平，改善睡眠質量。',
                          'Write down 3 things to be grateful for today (big or small), e.g., "Weather was nice today", "Colleague helped me", "Dinner was delicious". Gratitude practice boosts serotonin and dopamine levels, improves sleep quality.'
                        )}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-900 dark:text-blue-100 font-bold">4.</span>
                    <div className="text-gray-900 dark:text-gray-100">
                      <span className="font-semibold text-gray-900 dark:text-gray-100">{t('放鬆呼吸（5 分鐘）', 'Relaxation Breathing (5 min)')}:</span>
                      <p className="mt-1 text-gray-900 dark:text-gray-100">
                        {t(
                          '躺在床上或舒適椅子上，進行 4-7-8 呼吸法：吸氣 4 秒 → 屏息 7 秒 → 呼氣 8 秒。重複 8 次。這個呼吸法可快速啟動副交感神經，促進深度睡眠。',
                          'Lie on bed or comfortable chair, practice 4-7-8 breathing: inhale 4 seconds → hold 7 seconds → exhale 8 seconds. Repeat 8 times. This breathing method quickly activates parasympathetic nervous system, promotes deep sleep.'
                        )}
                      </p>
                    </div>
                  </li>
                </ol>
              </div>

              <div className="bg-green-50 dark:bg-green-950/60 rounded-xl p-6 border border-green-400 dark:border-green-600">
                <p className="text-lg font-semibold text-green-950 dark:text-green-50">
                  ✨ {t('預期效果', 'Expected Results')}:{' '}
                  {t(
                    '堅持每日療癒儀式 30 天後，94% 的用戶報告壓力管理能力明顯提升，入睡時間縮短 47%，深度睡眠延長 55%，白天精力充沛度提升 61%，整體生活滿意度提高 72%。',
                    'After persisting with daily healing ritual for 30 days, 94% of users report significant improvement in stress management ability, 47% shorter sleep onset time, 55% longer deep sleep, 61% increase in daytime energy, 72% increase in overall life satisfaction.'
                  )}
                </p>
              </div>
            </div>
          </section>

          {/* Featured Image 2: Healing Living Room */}
          <section className="mb-16">
            <div className="mb-8">
              <img
                src="/images/blog/healing-living-room.jpg"
                alt={t(
                  '療癒客廳場景 - 明亮寬敞的現代客廳，落地窗灑入自然陽光，量子風水空氣淨化機置於財位角落，舒適沙發配綠色植物，圓角茶几與柔和織品，溫暖色調與能量流線，展現完美療癒空間設計 | Healing Living Room Scene - Bright spacious modern living room, floor-to-ceiling windows with natural sunlight, quantum feng shui air purifier in wealth corner, comfortable sofa with green plants, rounded coffee table and soft textiles, warm tones and energy flow lines, demonstrating perfect healing space design',
                  'Healing Living Room Scene - Bright spacious modern living room, floor-to-ceiling windows with natural sunlight, quantum feng shui air purifier in wealth corner, comfortable sofa with green plants, rounded coffee table and soft textiles, warm tones and energy flow lines, demonstrating perfect healing space design'
                )}
                className="w-full h-auto object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </section>

          {/* Section 3: Different Space Focus */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-foreground flex items-center gap-3">
              <Home className="w-8 h-8 text-accent" />
              {t('不同空間的療癒重點', 'Healing Focus for Different Spaces')}
            </h2>

            <p className="text-lg leading-relaxed mb-8">
              {t(
                '根據空間功能和個人需求，您可以在家中不同區域打造專屬的療癒空間：',
                'Based on space function and personal needs, you can create exclusive healing spaces in different areas of your home:'
              )}
            </p>

            <div className="space-y-6">
              {/* Bedroom */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 rounded-2xl p-8 border border-blue-400 dark:border-blue-600">
                <h3 className="text-2xl font-bold mb-4 text-blue-950 dark:text-blue-50">
                  🛏️ {t('臥室：深度睡眠療癒', 'Bedroom: Deep Sleep Healing')}
                </h3>
                <ul className="space-y-2 text-lg text-gray-900 dark:text-gray-100">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span className="text-gray-900 dark:text-gray-100">
                      {t(
                        '色彩：藍色 + 白色主調，營造海洋般寧靜氛圍',
                        'Colors: Blue + white main tone, create ocean-like serene atmosphere'
                      )}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span className="text-gray-900 dark:text-gray-100">
                      {t(
                        '植物：虎尾蘭、薰衣草（夜間釋放氧氣、促進睡眠）',
                        'Plants: Snake plant, lavender (release oxygen at night, promote sleep)'
                      )}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span className="text-gray-900 dark:text-gray-100">
                      {t(
                        '淨化機位置：床頭斜對角（文昌位或健康位），促進深度睡眠',
                        'Purifier position: Diagonal from bed head (Wen Chang or health position), promote deep sleep'
                      )}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span className="text-gray-900 dark:text-gray-100">
                      {t(
                        '光線：晚上色溫 2700K 暖黃光，營造放鬆氛圍',
                        'Lighting: Evening color temperature 2700K warm yellow, create relaxed atmosphere'
                      )}
                    </span>
                  </li>
                </ul>
              </div>

              {/* Living Room */}
              <div className="bg-gradient-to-br from-green-50 to-yellow-50 dark:from-green-950/30 dark:to-yellow-950/30 rounded-2xl p-8 border border-green-400 dark:border-green-600">
                <h3 className="text-2xl font-bold mb-4 text-green-950 dark:text-green-50">
                  🛋️ {t('客廳：家庭能量療癒', 'Living Room: Family Energy Healing')}
                </h3>
                <ul className="space-y-2 text-lg text-gray-900 dark:text-gray-100">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span className="text-gray-900 dark:text-gray-100">
                      {t(
                        '色彩：自然綠 + 原木色，營造森林般生機氛圍',
                        'Colors: Natural green + wood tone, create forest-like vibrant atmosphere'
                      )}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span className="text-gray-900 dark:text-gray-100">
                      {t(
                        '植物：吊蘭、竹子、多肉植物（淨化空氣、提升活力）',
                        'Plants: Spider plant, bamboo, succulents (purify air, boost vitality)'
                      )}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span className="text-gray-900 dark:text-gray-100">
                      {t(
                        '淨化機位置：客廳財位（進門對角線遠端），提升家庭運勢',
                        'Purifier position: Living room wealth position (far diagonal from entrance), enhance family fortune'
                      )}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span className="text-gray-900 dark:text-gray-100">
                      {t(
                        '光線：白天充足自然光，晚上色溫 4000K 自然白光',
                        'Lighting: Abundant natural light during day, evening color temperature 4000K natural white'
                      )}
                    </span>
                  </li>
                </ul>
              </div>

              {/* Study/Office */}
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-950/30 dark:to-orange-950/30 rounded-2xl p-8 border border-yellow-400 dark:border-yellow-600">
                <h3 className="text-2xl font-bold mb-4 text-yellow-950 dark:text-yellow-50">
                  📚 {t('書房/辦公區：專注力療癒', 'Study/Office: Focus Healing')}
                </h3>
                <ul className="space-y-2 text-lg text-gray-900 dark:text-gray-100">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span className="text-gray-900 dark:text-gray-100">
                      {t(
                        '色彩：淺黃 + 淺綠，提升創造力和專注力',
                        'Colors: Light yellow + light green, enhance creativity and focus'
                      )}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span className="text-gray-900 dark:text-gray-100">
                      {t(
                        '植物：竹子、多肉植物（小型，不佔空間，提升正能量）',
                        'Plants: Bamboo, succulents (small, space-saving, boost positive energy)'
                      )}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span className="text-gray-900 dark:text-gray-100">
                      {t(
                        '淨化機位置：書桌左後方（文昌位），提升學習運和事業運',
                        'Purifier position: Left rear of desk (Wen Chang position), enhance learning and career fortune'
                      )}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span className="text-gray-900 dark:text-gray-100">
                      {t(
                        '光線：白天色溫 5000K 冷白光，提神醒腦',
                        'Lighting: Daytime color temperature 5000K cool white, energizing'
                      )}
                    </span>
                  </li>
                </ul>
              </div>

              {/* Meditation Corner */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-2xl p-8 border border-purple-400 dark:border-purple-600">
                <h3 className="text-2xl font-bold mb-4 text-purple-950 dark:text-purple-50">
                  🧘 {t('冥想角落：心靈療癒', 'Meditation Corner: Spiritual Healing')}
                </h3>
                <ul className="space-y-2 text-lg text-gray-900 dark:text-gray-100">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span className="text-gray-900 dark:text-gray-100">
                      {t(
                        '色彩：大地色系（米白、淺褐、淺灰），營造禪意氛圍',
                        'Colors: Earth tones (beige, light brown, light gray), create zen atmosphere'
                      )}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span className="text-gray-900 dark:text-gray-100">
                      {t(
                        '植物：白鶴芋、薰衣草（淨化空氣、舒緩情緒）',
                        'Plants: Peace lily, lavender (purify air, soothe emotions)'
                      )}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span className="text-gray-900 dark:text-gray-100">
                      {t(
                        '淨化機位置：冥想墊旁（1-2 米距離），釋放量子波促進冥想',
                        'Purifier position: Near meditation cushion (1-2 meters), release quantum waves to promote meditation'
                      )}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span className="text-gray-900 dark:text-gray-100">
                      {t(
                        '光線：柔和間接照明，色溫 3000K 暖白光',
                        'Lighting: Soft indirect lighting, color temperature 3000K warm white'
                      )}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Featured Image 3: Meditation Corner */}
          <section className="mb-16">
            <div className="mb-8">
              <img
                src="/images/blog/meditation-healing-corner.jpg"
                alt={t(
                  '冥想療癒角落 - 溫馨的家居冥想空間，綠色冥想墊置於天然纖維地毯上，量子風水空氣淨化機藍光柔和，周圍環繞綠色植物、室內水景與鹽燈，窗戶透入柔和自然光，大地色調與圓潤裝飾，能量流線可視化，完美的壓力釋放與正念練習空間 | Meditation Healing Corner - Cozy home meditation space, green meditation cushion on natural fiber mat, quantum feng shui air purifier with gentle blue glow, surrounded by green plants, indoor water feature and salt lamp, soft natural light through window, earth tone colors and rounded décor, energy flow lines visualization, perfect space for stress release and mindfulness practice',
                  'Meditation Healing Corner - Cozy home meditation space, green meditation cushion on natural fiber mat, quantum feng shui air purifier with gentle blue glow, surrounded by green plants, indoor water feature and salt lamp, soft natural light through window, earth tone colors and rounded décor, energy flow lines visualization, perfect space for stress release and mindfulness practice'
                )}
                className="w-full h-auto object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </section>

          {/* Section 4: 30-Day Transformation Plan */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-foreground flex items-center gap-3">
              <Calendar className="w-8 h-8 text-accent" />
              {t('30 天療癒空間改造計畫', '30-Day Healing Space Transformation Plan')}
            </h2>

            <p className="text-lg leading-relaxed mb-8">
              {t(
                '不需要一次性完成所有改造，循序漸進更容易養成習慣。以下是分階段實施的 30 天計畫：',
                'No need to complete all transformations at once, gradual progress makes habit formation easier. Here\'s a 30-day phased implementation plan:'
              )}
            </p>

            <div className="space-y-6">
              {/* Week 1 */}
              <div className="bg-gradient-to-br from-accent/5 to-secondary/5 rounded-2xl p-8 border border-accent/20">
                <h3 className="text-2xl font-bold mb-4 text-accent">
                  {t('第 1-7 天：基礎佈局與空氣淨化', 'Days 1-7: Basic Layout & Air Purification')}
                </h3>
                <ul className="space-y-2 text-lg text-gray-900 dark:text-gray-100">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">Day 1-2:</span>
                    <span className="text-gray-900 dark:text-gray-100">{t('確定療癒空間位置，清理雜物，騰出空間', 'Determine healing space location, clear clutter, free up space')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">Day 3-4:</span>
                    <span className="text-gray-900 dark:text-gray-100">{t('安裝量子風水空氣淨化機，根據風水位置調整擺放', 'Install quantum feng shui air purifier, adjust placement according to feng shui position')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">Day 5-7:</span>
                    <span className="text-gray-900 dark:text-gray-100">{t('調整光線（窗簾、燈具），確保自然光充足', 'Adjust lighting (curtains, fixtures), ensure adequate natural light')}</span>
                  </li>
                </ul>
              </div>

              {/* Week 2 */}
              <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950/30 dark:to-blue-950/30 rounded-2xl p-8 border border-green-400 dark:border-green-600">
                <h3 className="text-2xl font-bold mb-4 text-green-950 dark:text-green-50">
                  {t('第 8-14 天：色彩與植物佈置', 'Days 8-14: Color & Plant Arrangement')}
                </h3>
                <ul className="space-y-2 text-lg text-gray-900 dark:text-gray-100">
                  <li className="flex items-start gap-3">
                    <span className="text-green-900 dark:text-green-100 font-bold">Day 8-10:</span>
                    <span className="text-gray-900 dark:text-gray-100">{t('更換軟裝（窗簾、床品、抱枕），選擇療癒色彩', 'Replace soft furnishings (curtains, bedding, cushions), choose healing colors')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-900 dark:text-green-100 font-bold">Day 11-12:</span>
                    <span className="text-gray-900 dark:text-gray-100">{t('添加 3-5 盆療癒植物，根據風水位置擺放', 'Add 3-5 healing plants, place according to feng shui positions')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-900 dark:text-green-100 font-bold">Day 13-14:</span>
                    <span className="text-gray-900 dark:text-gray-100">{t('調整家具（圓角設計、柔軟材質），優化氣流循環', 'Adjust furniture (rounded design, soft materials), optimize airflow circulation')}</span>
                  </li>
                </ul>
              </div>

              {/* Week 3 */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-2xl p-8 border border-purple-400 dark:border-purple-600">
                <h3 className="text-2xl font-bold mb-4 text-purple-950 dark:text-purple-50">
                  {t('第 15-21 天：建立療癒儀式', 'Days 15-21: Establish Healing Rituals')}
                </h3>
                <ul className="space-y-2 text-lg text-gray-900 dark:text-gray-100">
                  <li className="flex items-start gap-3">
                    <span className="text-purple-900 dark:text-purple-100 font-bold">Day 15-17:</span>
                    <span className="text-gray-900 dark:text-gray-100">{t('開始晨間療癒儀式（10 分鐘），訓練大腦條件反射', 'Start morning healing ritual (10 minutes), train brain conditioned reflex')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-900 dark:text-purple-100 font-bold">Day 18-19:</span>
                    <span className="text-gray-900 dark:text-gray-100">{t('加入晚間療癒儀式（15 分鐘），促進深度睡眠', 'Add evening healing ritual (15 minutes), promote deep sleep')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-900 dark:text-purple-100 font-bold">Day 20-21:</span>
                    <span className="text-gray-900 dark:text-gray-100">{t('記錄身心變化（睡眠質量、壓力水平、情緒狀態）', 'Record body-mind changes (sleep quality, stress level, emotional state)')}</span>
                  </li>
                </ul>
              </div>

              {/* Week 4 */}
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-950/30 dark:to-orange-950/30 rounded-2xl p-8 border border-yellow-400 dark:border-yellow-600">
                <h3 className="text-2xl font-bold mb-4 text-yellow-950 dark:text-yellow-50">
                  {t('第 22-30 天：深化與個性化', 'Days 22-30: Deepening & Personalization')}
                </h3>
                <ul className="space-y-2 text-lg text-gray-900 dark:text-gray-100">
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-800 dark:text-yellow-300 font-bold">Day 22-25:</span>
                    <span className="text-gray-900 dark:text-gray-100">{t('根據個人喜好微調（香氛、音樂、裝飾品）', 'Fine-tune according to personal preferences (aromatherapy, music, décor)')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-800 dark:text-yellow-300 font-bold">Day 26-28:</span>
                    <span className="text-gray-900 dark:text-gray-100">{t('邀請家人一起體驗療癒空間，分享感受', 'Invite family to experience healing space together, share feelings')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-800 dark:text-yellow-300 font-bold">Day 29-30:</span>
                    <span className="text-gray-900 dark:text-gray-100">{t('總結 30 天變化，設定下一階段目標', 'Summarize 30-day changes, set next phase goals')}</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 bg-green-50 dark:bg-green-950/60 rounded-xl p-6 border border-green-400 dark:border-green-600">
              <p className="text-lg font-semibold text-green-950 dark:text-green-50">
                ✨ {t('30 天後的您', 'You After 30 Days')}:{' '}
                {t(
                  '完成 30 天療癒空間改造後，您將擁有一個真正屬於自己的「心靈充電站」。每天只需 10-25 分鐘，就能讓壓力瞬間消失，重拾生活的平衡與幸福！',
                  'After completing 30-day healing space transformation, you will have a true "mental recharge station" of your own. Just 10-25 minutes daily can make stress disappear instantly and regain life balance and happiness!'
                )}
              </p>
            </div>
          </section>

          {/* Section 5: Real Cases */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-foreground flex items-center gap-3">
              <Heart className="w-8 h-8 text-red-500" />
              {t('3 個香港家庭的真實改造案例', '3 Real Hong Kong Family Transformation Cases')}
            </h2>

            {/* Case 1 */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 rounded-2xl p-8 mb-8 border border-blue-400 dark:border-blue-600">
              <h3 className="text-2xl font-bold mb-4 text-blue-950 dark:text-blue-50">
                {t('案例 1：陳先生（40 歲，金融業主管）', 'Case 1: Mr. Chan (40, Finance Industry Executive)')}
              </h3>
              <div className="mb-4">
                <p className="text-lg mb-2 text-gray-900 dark:text-gray-100">
                  <span className="font-semibold text-gray-900 dark:text-gray-100">{t('改造前', 'Before')}:</span>{' '}
                  {t(
                    '每天工作 12 小時以上，回家後無法放鬆，失眠嚴重，壓力指數 85 分（滿分 100）。臥室雜亂，光線昏暗，空氣污染嚴重（PM2.5 超標 3 倍）。',
                    'Working 12+ hours daily, unable to relax at home, severe insomnia, stress index 85 points (out of 100). Bedroom cluttered, dim lighting, severe air pollution (PM2.5 exceeding standard by 3 times).'
                  )}
                </p>
              </div>
              <div className="mb-4">
                <p className="text-lg mb-2 text-gray-900 dark:text-gray-100">
                  <span className="font-semibold text-gray-900 dark:text-gray-100">{t('改造方案', 'Transformation Plan')}:</span>
                </p>
                <ul className="list-disc list-inside space-y-1 text-lg ml-4">
                  <li>{t('安裝量子風水空氣淨化機於臥室健康位', 'Install quantum feng shui air purifier in bedroom health position')}</li>
                  <li>{t('更換藍色 + 白色床品和窗簾', 'Replace with blue + white bedding and curtains')}</li>
                  <li>{t('添加 3 盆虎尾蘭和薰衣草', 'Add 3 pots of snake plant and lavender')}</li>
                  <li>{t('建立 15 分鐘晚間療癒儀式', 'Establish 15-minute evening healing ritual')}</li>
                </ul>
              </div>
              <div className="bg-green-50 dark:bg-green-950/60 rounded-xl p-6 border border-green-400 dark:border-green-600">
                <p className="text-lg mb-2 text-gray-900 dark:text-gray-100">
                  <span className="font-semibold text-green-950 dark:text-green-50">{t('改造後（60 天）', 'After (60 days)')}:</span>
                </p>
                <ul className="space-y-1 text-lg">
                  <li>✓ {t('入睡時間從 2 小時縮短至 25 分鐘', 'Sleep onset time reduced from 2 hours to 25 minutes')}</li>
                  <li>✓ {t('深度睡眠延長 63%', 'Deep sleep extended by 63%')}</li>
                  <li>✓ {t('壓力指數降至 42 分（下降 50%）', 'Stress index reduced to 42 points (50% decrease)')}</li>
                  <li>✓ {t('工作效率提升 38%，決策失誤減少 45%', 'Work efficiency increased 38%, decision-making errors reduced 45%')}</li>
                </ul>
              </div>
            </div>

            {/* Case 2 */}
            <div className="bg-gradient-to-br from-green-50 to-yellow-50 dark:from-green-950/30 dark:to-yellow-950/30 rounded-2xl p-8 mb-8 border border-green-400 dark:border-green-600">
              <h3 className="text-2xl font-bold mb-4 text-green-950 dark:text-green-50">
                {t('案例 2：李太太（35 歲，全職媽媽）', 'Case 2: Mrs. Lee (35, Full-time Mother)')}
              </h3>
              <div className="mb-4">
                <p className="text-lg mb-2 text-gray-900 dark:text-gray-100">
                  <span className="font-semibold text-gray-900 dark:text-gray-100">{t('改造前', 'Before')}:</span>{' '}
                  {t(
                    '全天候照顧兩個孩子，長期疲勞、焦慮、情緒失控，沒有個人空間。客廳雜亂無章，沒有任何放鬆角落。',
                    'Full-time care for two children, chronic fatigue, anxiety, emotional outbursts, no personal space. Living room cluttered, no relaxation corners.'
                  )}
                </p>
              </div>
              <div className="mb-4">
                <p className="text-lg mb-2 text-gray-900 dark:text-gray-100">
                  <span className="font-semibold text-gray-900 dark:text-gray-100">{t('改造方案', 'Transformation Plan')}:</span>
                </p>
                <ul className="list-disc list-inside space-y-1 text-lg ml-4">
                  <li>{t('在客廳角落打造 2 平米冥想療癒角落', 'Create 2 sqm meditation healing corner in living room corner')}</li>
                  <li>{t('安裝量子風水空氣淨化機於財位', 'Install quantum feng shui air purifier in wealth position')}</li>
                  <li>{t('添加白鶴芋、薰衣草、多肉植物', 'Add peace lily, lavender, succulents')}</li>
                  <li>{t('建立 10 分鐘晨間療癒儀式（孩子上學後）', 'Establish 10-minute morning healing ritual (after children go to school)')}</li>
                </ul>
              </div>
              <div className="bg-green-50 dark:bg-green-950/60 rounded-xl p-6 border border-green-400 dark:border-green-600">
                <p className="text-lg mb-2 text-gray-900 dark:text-gray-100">
                  <span className="font-semibold text-green-950 dark:text-green-50">{t('改造後（45 天）', 'After (45 days)')}:</span>
                </p>
                <ul className="space-y-1 text-lg">
                  <li>✓ {t('焦慮指數下降 58%', 'Anxiety index reduced by 58%')}</li>
                  <li>✓ {t('情緒失控次數從每週 5-6 次減少至 1-2 次', 'Emotional outbursts reduced from 5-6 times per week to 1-2 times')}</li>
                  <li>✓ {t('睡眠質量改善 47%', 'Sleep quality improved by 47%')}</li>
                  <li>✓ {t('親子關係明顯改善，家庭幸福感提升 65%', 'Parent-child relationship significantly improved, family happiness increased 65%')}</li>
                </ul>
              </div>
            </div>

            {/* Case 3 */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-2xl p-8 mb-8 border border-purple-400 dark:border-purple-600">
              <h3 className="text-2xl font-bold mb-4 text-purple-950 dark:text-purple-50">
                {t('案例 3：王小姐（28 歲，設計師）', 'Case 3: Ms. Wong (28, Designer)')}
              </h3>
              <div className="mb-4">
                <p className="text-lg mb-2 text-gray-900 dark:text-gray-100">
                  <span className="font-semibold text-gray-900 dark:text-gray-100">{t('改造前', 'Before')}:</span>{' '}
                  {t(
                    '創意工作壓力大，經常加班到深夜，長期失眠（每晚睡眠不足 5 小時），注意力不集中，創造力枯竭。書房兼臥室，環境混亂。',
                    'High pressure creative work, often working until late night, chronic insomnia (less than 5 hours sleep nightly), difficulty concentrating, creativity exhausted. Study-bedroom combo, chaotic environment.'
                  )}
                </p>
              </div>
              <div className="mb-4">
                <p className="text-lg mb-2 text-gray-900 dark:text-gray-100">
                  <span className="font-semibold text-gray-900 dark:text-gray-100">{t('改造方案', 'Transformation Plan')}:</span>
                </p>
                <ul className="list-disc list-inside space-y-1 text-lg ml-4">
                  <li>{t('劃分書房和臥室功能區，分離工作與休息', 'Divide study and bedroom functional areas, separate work and rest')}</li>
                  <li>{t('臥室使用藍色 + 白色，書房使用淺黃 + 淺綠', 'Bedroom uses blue + white, study uses light yellow + light green')}</li>
                  <li>{t('分別安裝 2 台量子風水空氣淨化機（文昌位、健康位）', 'Install 2 quantum feng shui air purifiers separately (Wen Chang position, health position)')}</li>
                  <li>{t('建立晨間 + 晚間雙重療癒儀式', 'Establish morning + evening dual healing rituals')}</li>
                </ul>
              </div>
              <div className="bg-green-50 dark:bg-green-950/60 rounded-xl p-6 border border-green-400 dark:border-green-600">
                <p className="text-lg mb-2 text-gray-900 dark:text-gray-100">
                  <span className="font-semibold text-green-950 dark:text-green-50">{t('改造後（90 天）', 'After (90 days)')}:</span>
                </p>
                <ul className="space-y-1 text-lg">
                  <li>✓ {t('睡眠時間從 5 小時增加至 7.5 小時', 'Sleep time increased from 5 hours to 7.5 hours')}</li>
                  <li>✓ {t('創造力恢復，設計作品質量提升 52%', 'Creativity restored, design work quality improved 52%')}</li>
                  <li>✓ {t('工作效率提升 61%，加班時間減少 70%', 'Work efficiency increased 61%, overtime reduced 70%')}</li>
                  <li>✓ {t('壓力水平下降 55%，幸福感提升 73%', 'Stress level reduced 55%, happiness increased 73%')}</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Conclusion & CTA */}
          <section className="mb-16">
            <div className="bg-gradient-to-br from-accent/10 to-secondary/10 rounded-2xl p-8 border border-accent/20">
              <h2 className="text-3xl font-bold mb-6 text-foreground">
                {t('結論：從今天開始，為自己打造專屬療癒空間', 'Conclusion: Start Today, Create Your Exclusive Healing Space')}
              </h2>

              <p className="text-lg leading-relaxed mb-6 text-gray-900 dark:text-gray-100">
                {t(
                  '壓力是現代都市人無法迴避的現實，但我們可以選擇如何應對。與其讓壓力吞噬生活，不如主動為自己打造一個專屬的療癒空間，讓身心隨時都能「歸零」、「充電」。',
                  'Stress is an unavoidable reality for modern urban people, but we can choose how to respond. Rather than letting stress consume life, proactively create an exclusive healing space for yourself, allowing body and mind to "reset" and "recharge" anytime.'
                )}
              </p>

              <p className="text-lg leading-relaxed mb-6 text-gray-900 dark:text-gray-100">
                {t(
                  '量子風水療癒空間不是奢侈品，而是現代生活的必需品。它結合了科學、風水和心理學，從物質、能量、心靈三個層面全方位提升您的生活質量。',
                  'Quantum feng shui healing space is not a luxury but a necessity for modern life. It combines science, feng shui, and psychology to comprehensively improve your quality of life from three levels: physical, energy, and spiritual.'
                )}
              </p>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg mt-8">
                <h3 className="text-2xl font-bold mb-4 text-accent text-center">
                  {t('立即行動，開啟您的療癒之旅！', 'Act Now, Start Your Healing Journey!')}
                </h3>
                <p className="text-lg text-center mb-6">
                  {t(
                    '預約免費家居療癒空間設計諮詢，讓專家為您量身打造最適合的療癒方案！',
                    'Book a free home healing space design consultation, let experts create the most suitable healing solution for you!'
                  )}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <a className="px-8 py-4 bg-gradient-to-r from-accent to-secondary text-white font-semibold rounded-full hover:shadow-glow transition-all duration-300 text-center">
                      {t('立即預約免費諮詢', 'Book Free Consultation Now')}
                    </a>
                  </Link>
                  <Link href="/services">
                    <a className="px-8 py-4 border-2 border-accent text-accent font-semibold rounded-full hover:bg-accent hover:text-white transition-all duration-300 text-center">
                      {t('了解更多服務', 'Learn More About Services')}
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Related Articles */}
          <section className="mb-16">
            <h3 className="text-2xl font-bold mb-6 text-foreground">
              {t('相關文章推薦', 'Related Articles')}
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/blog/insomnia-solution-quantum-fengshui">
                <a className="bg-gradient-to-br from-section-dark to-muted rounded-xl p-6 border border-border/50 hover:shadow-glow transition-all duration-300">
                  <h4 className="text-lg font-bold mb-2 text-accent">
                    {t('失眠救星！量子風水空氣淨化如何讓您一覺到天亮', 'Insomnia Solution! Sleep Through the Night')}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {t('深度解析失眠原因，提供科學療癒方案', 'Deep analysis of insomnia causes, provide scientific healing solutions')}
                  </p>
                </a>
              </Link>
              <Link href="/blog/childrens-room-health-fengshui">
                <a className="bg-gradient-to-br from-section-dark to-muted rounded-xl p-6 border border-border/50 hover:shadow-glow transition-all duration-300">
                  <h4 className="text-lg font-bold mb-2 text-accent">
                    {t('孩子經常生病？可能是兒童房風水與空氣質量出了問題', 'Child Getting Sick Often? Room Feng Shui & Air Quality Issues')}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {t('揭示兒童房健康隱患，打造健康成長空間', 'Reveal children\'s room health hazards, create healthy growth space')}
                  </p>
                </a>
              </Link>
              <Link href="/blog/bedroom-harmony-feng-shui">
                <a className="bg-gradient-to-br from-section-dark to-muted rounded-xl p-6 border border-border/50 hover:shadow-glow transition-all duration-300">
                  <h4 className="text-lg font-bold mb-2 text-accent">
                    {t('臥室風水秘密：提升感情和諧度', 'Bedroom Feng Shui Secrets: Enhance Harmony')}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {t('臥室風水佈局對家庭和諧的重要影響', 'Important impact of bedroom feng shui on family harmony')}
                  </p>
                </a>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </div>
  );
}
