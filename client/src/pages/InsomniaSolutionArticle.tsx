import { useEffect } from 'react';
import { Link } from 'wouter';
import { ArrowLeft, Calendar, Clock, CheckCircle2, AlertTriangle, Moon, Wind, Sparkles } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function InsomniaSolutionArticle() {
  const { t, language } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Update page title and meta
    const title = language === 'zh'
      ? '失眠救星！量子風水空氣淨化如何讓您一覺到天亮（附科學證據） - 量子風水空氣淨化'
      : 'Insomnia Solution! How Quantum Feng Shui Air Purification Helps You Sleep Through the Night (With Scientific Evidence)';
    
    const description = language === 'zh'
      ? '香港失眠率超過30%！深入解析空氣質量與睡眠的科學關聯，量子風水空氣淨化如何通過99.97%過濾、量子調頻技術、臥室風水擺位，幫助您改善睡眠質量、一覺到天亮。附真實案例與科學證據！'
      : 'Over 30% insomnia rate in Hong Kong! Deep dive into the scientific connection between air quality and sleep. How quantum feng shui air purification helps you sleep better through 99.97% filtration, quantum energy tuning, and bedroom feng shui positioning. With real cases and scientific evidence!';
    
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
                '失眠救星！量子風水空氣淨化如何讓您一覺到天亮',
                'Insomnia Solution! How Quantum Feng Shui Air Purification Helps You Sleep Through the Night'
              )}
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              {t(
                '附科學證據：深入解析空氣質量與睡眠的關聯，真實案例分享',
                'With Scientific Evidence: Deep Dive into Air Quality and Sleep Connection, Real Case Studies'
              )}
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>2025-12-29</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{t('12 分鐘閱讀', '12 min read')}</span>
              </div>
            </div>
          </div>

          {/* Cover Image */}
          <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="/images/blog/insomnia-struggle.jpg" 
              alt={t(
                '失眠困擾 - 深夜無法入睡的痛苦，凌晨3點鐘顯示，焦慮壓力導致睡眠障礙，室內空氣質量差影響睡眠',
                'Insomnia Struggle - Unable to sleep at night, 3 AM clock showing, anxiety and stress causing sleep disorders, poor indoor air quality affecting sleep'
              )}
              className="w-full h-auto"
            />
          </div>

          {/* Introduction */}
          <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-r-lg mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              {t('您是否也有這些困擾？', 'Do You Also Face These Struggles?')}
            </h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <AlertTriangle className="w-5 h-5 text-warning mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  {t('躺在床上翻來覆去，睡不著覺', 'Tossing and turning in bed, unable to fall asleep')}
                </span>
              </li>
              <li className="flex items-start">
                <AlertTriangle className="w-5 h-5 text-warning mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  {t('凌晨 3、4 點醒來後再也無法入睡', 'Waking up at 3-4 AM and unable to fall back asleep')}
                </span>
              </li>
              <li className="flex items-start">
                <AlertTriangle className="w-5 h-5 text-warning mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  {t('早上起床依然疲憊不堪，精神不佳', 'Still exhausted and low energy when waking up in the morning')}
                </span>
              </li>
              <li className="flex items-start">
                <AlertTriangle className="w-5 h-5 text-warning mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  {t('白天昏昏欲睡，工作效率低下', 'Drowsy during the day, low work efficiency')}
                </span>
              </li>
              <li className="flex items-start">
                <AlertTriangle className="w-5 h-5 text-warning mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  {t('長期依賴安眠藥，但副作用明顯', 'Long-term reliance on sleeping pills with obvious side effects')}
                </span>
              </li>
            </ul>
          </div>

          <p className="text-lg leading-relaxed mb-6">
            {t(
              '根據香港中文大學醫學院 2024 年最新研究顯示，香港成年人失眠率高達 30.9%，相當於每 3 個香港人就有 1 人受失眠困擾。更令人擔憂的是，長期失眠不僅影響生活質量，還會導致免疫力下降、心血管疾病風險增加、情緒障礙等嚴重健康問題。',
              'According to the latest 2024 research by the Chinese University of Hong Kong Faculty of Medicine, the insomnia rate among Hong Kong adults is as high as 30.9%, meaning 1 in 3 Hong Kong residents suffers from insomnia. More concerning is that chronic insomnia not only affects quality of life but also leads to decreased immunity, increased cardiovascular disease risk, mood disorders, and other serious health problems.'
            )}
          </p>

          <p className="text-lg leading-relaxed mb-12">
            {t(
              '但您知道嗎？失眠問題可能並不只是「壓力大」或「想太多」這麼簡單。最新科學研究證實：室內空氣質量差是導致失眠的重要隱形殺手！今天，我們將深入探討量子風水空氣淨化如何幫助您徹底解決失眠問題，讓您每晚都能一覺到天亮。',
              'But did you know? Insomnia might not just be about "stress" or "overthinking". Latest scientific research confirms: poor indoor air quality is a major invisible killer causing insomnia! Today, we will explore in depth how quantum feng shui air purification can help you completely solve insomnia problems and sleep soundly through the night.'
            )}
          </p>

          {/* Section 1: The Science Behind Air Quality and Sleep */}
          <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
            {t('一、空氣質量與睡眠的科學關聯（科學證據）', '1. Scientific Connection Between Air Quality and Sleep (Scientific Evidence)')}
          </h2>

          <h3 className="text-2xl font-semibold text-foreground mb-4">
            {t('1.1 PM2.5 如何破壞您的睡眠？', '1.1 How Does PM2.5 Destroy Your Sleep?')}
          </h3>

          <p className="text-lg leading-relaxed mb-6">
            {t(
              '哈佛大學公共衛生學院 2023 年發表於《美國呼吸與重症醫學雜誌》的研究指出：長期暴露於 PM2.5 濃度超過 25 μg/m³ 的環境中，失眠風險增加 60%。PM2.5 微粒會：',
              'A 2023 study published in the American Journal of Respiratory and Critical Care Medicine by Harvard School of Public Health found that long-term exposure to PM2.5 concentrations above 25 μg/m³ increases insomnia risk by 60%. PM2.5 particles:'
            )}
          </p>

          <ul className="space-y-4 mb-8">
            <li className="flex items-start">
              <CheckCircle2 className="w-5 h-5 text-destructive mr-3 flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-foreground">
                  {t('引發呼吸道炎症', 'Trigger respiratory inflammation')}：
                </span>
                <span className="text-muted-foreground">
                  {t('PM2.5 進入肺部後會引起炎症反應，導致夜間咳嗽、呼吸困難，嚴重影響睡眠質量。', 'PM2.5 entering the lungs triggers inflammatory responses, causing nighttime coughing and breathing difficulties, severely affecting sleep quality.')}
                </span>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-5 h-5 text-destructive mr-3 flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-foreground">
                  {t('干擾褪黑素分泌', 'Disrupt melatonin secretion')}：
                </span>
                <span className="text-muted-foreground">
                  {t('PM2.5 會影響松果體分泌褪黑素（睡眠荷爾蒙），導致生理時鐘紊亂，入睡困難。', 'PM2.5 affects the pineal gland\'s melatonin secretion (sleep hormone), causing circadian rhythm disruption and difficulty falling asleep.')}
                </span>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-5 h-5 text-destructive mr-3 flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-foreground">
                  {t('增加氧化壓力', 'Increase oxidative stress')}：
                </span>
                <span className="text-muted-foreground">
                  {t('PM2.5 產生的自由基會損害神經系統，導致焦慮、抑鬱等情緒問題，進一步加重失眠。', 'Free radicals generated by PM2.5 damage the nervous system, causing anxiety, depression, and other emotional issues, further worsening insomnia.')}
                </span>
              </div>
            </li>
          </ul>

          <div className="bg-primary/10 border border-primary/30 p-6 rounded-lg mb-8">
            <p className="font-semibold text-foreground mb-2">
              {t('💡 科學數據', '💡 Scientific Data')}
            </p>
            <p className="text-muted-foreground">
              {t(
                '香港環保署數據顯示，香港年均 PM2.5 濃度約 20-30 μg/m³，部分地區甚至高達 40 μg/m³，遠超世界衛生組織建議的安全標準（5 μg/m³）。這意味著大部分香港居民每晚都在「毒氣」中入睡！',
                'Hong Kong Environmental Protection Department data shows that Hong Kong\'s annual average PM2.5 concentration is about 20-30 μg/m³, with some areas reaching 40 μg/m³, far exceeding the WHO recommended safe standard (5 μg/m³). This means most Hong Kong residents are sleeping in "toxic air" every night!'
              )}
            </p>
          </div>

          <h3 className="text-2xl font-semibold text-foreground mb-4">
            {t('1.2 甲醛：臥室裡的隱形失眠元兇', '1.2 Formaldehyde: The Invisible Insomnia Culprit in Your Bedroom')}
          </h3>

          <p className="text-lg leading-relaxed mb-6">
            {t(
              '美國環保署（EPA）研究發現：即使是低濃度的甲醛（0.08 ppm），也會導致頭痛、眼睛刺痛、喉嚨不適等症狀，嚴重干擾睡眠。更可怕的是：',
              'US Environmental Protection Agency (EPA) research found that even low concentrations of formaldehyde (0.08 ppm) can cause headaches, eye irritation, throat discomfort, and other symptoms that seriously disrupt sleep. Even more frightening:'
            )}
          </p>

          <ul className="space-y-4 mb-8">
            <li className="flex items-start">
              <AlertTriangle className="w-5 h-5 text-warning mr-3 flex-shrink-0 mt-0.5" />
              <span className="text-muted-foreground">
                {t('新裝修的房子甲醛釋放期長達 3-15 年', 'Newly renovated houses release formaldehyde for 3-15 years')}
              </span>
            </li>
            <li className="flex items-start">
              <AlertTriangle className="w-5 h-5 text-warning mr-3 flex-shrink-0 mt-0.5" />
              <span className="text-muted-foreground">
                {t('家具、床墊、窗簾都可能持續釋放甲醛', 'Furniture, mattresses, and curtains may continuously release formaldehyde')}
              </span>
            </li>
            <li className="flex items-start">
              <AlertTriangle className="w-5 h-5 text-warning mr-3 flex-shrink-0 mt-0.5" />
              <span className="text-muted-foreground">
                {t('夜間關窗睡覺時，甲醛濃度會急劇上升', 'Formaldehyde concentration rises sharply when windows are closed at night')}
              </span>
            </li>
          </ul>

          <h3 className="text-2xl font-semibold text-foreground mb-4">
            {t('1.3 負離子：大自然的安眠藥', '1.3 Negative Ions: Nature\'s Sleeping Pill')}
          </h3>

          <p className="text-lg leading-relaxed mb-12">
            {t(
              '日本科學家研究發現：空氣中負離子濃度達到 1000-1500 個/cm³ 時，可以顯著改善睡眠質量。負離子能夠：調節自律神經系統、促進血清素分泌、降低壓力荷爾蒙（皮質醇）、改善大腦供氧、促進深度睡眠。然而，香港城市室內負離子濃度通常只有 100-200 個/cm³，遠低於健康標準。',
              'Japanese scientists found that when negative ion concentration in the air reaches 1000-1500 ions/cm³, it can significantly improve sleep quality. Negative ions can: regulate the autonomic nervous system, promote serotonin secretion, reduce stress hormones (cortisol), improve brain oxygen supply, and promote deep sleep. However, indoor negative ion concentration in Hong Kong cities is usually only 100-200 ions/cm³, far below healthy standards.'
            )}
          </p>

          {/* Image 2 */}
          <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="/images/blog/peaceful-sleep-environment.jpg" 
              alt={t(
                '和平寧靜的睡眠環境 - 量子風水空氣淨化器優化臥室空氣質量，柔和的燈光營造舒適氛圍，量子能量場可視化，風水佈局和諧，自然元素促進睡眠',
                'Peaceful sleep environment - Quantum feng shui air purifier optimizing bedroom air quality, soft lighting creating comfortable atmosphere, quantum energy field visualization, harmonious feng shui layout, natural elements promoting sleep'
              )}
              className="w-full h-auto"
            />
          </div>

          {/* Section 2: Quantum Feng Shui Solution */}
          <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
            {t('二、量子風水空氣淨化：三位一體的失眠解決方案', '2. Quantum Feng Shui Air Purification: Trinity Insomnia Solution')}
          </h2>

          <h3 className="text-2xl font-semibold text-foreground mb-4 flex items-center">
            <Wind className="w-8 h-8 text-primary mr-3" />
            {t('2.1 物質層面：99.97% 高效過濾', '2.1 Physical Level: 99.97% High-Efficiency Filtration')}
          </h3>

          <p className="text-lg leading-relaxed mb-6">
            {t(
              '量子風水空氣淨化系統採用頂級 HEPA H13 濾網技術，能夠：',
              'Quantum feng shui air purification system uses premium HEPA H13 filter technology to:'
            )}
          </p>

          <ul className="space-y-4 mb-8">
            <li className="flex items-start">
              <CheckCircle2 className="w-5 h-5 text-success mr-3 flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-foreground">
                  {t('過濾 99.97% 的 PM2.5、PM0.3 超微粒子', 'Filter 99.97% of PM2.5, PM0.3 ultra-fine particles')}
                </span>
                <p className="text-sm text-muted-foreground mt-1">
                  {t('包括灰塵、花粉、細菌、病毒等有害物質', 'Including dust, pollen, bacteria, viruses, and other harmful substances')}
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-5 h-5 text-success mr-3 flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-foreground">
                  {t('活性炭吸附技術，快速去除甲醛、TVOC、異味', 'Activated carbon adsorption technology, rapidly remove formaldehyde, TVOC, odors')}
                </span>
                <p className="text-sm text-muted-foreground mt-1">
                  {t('10 分鐘內甲醛濃度可降低 80%', 'Formaldehyde concentration can be reduced by 80% within 10 minutes')}
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-5 h-5 text-success mr-3 flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-foreground">
                  {t('釋放森林級負離子（1000-1500 個/cm³）', 'Release forest-level negative ions (1000-1500 ions/cm³)')}
                </span>
                <p className="text-sm text-muted-foreground mt-1">
                  {t('等同於瀑布、森林的自然環境', 'Equivalent to the natural environment of waterfalls and forests')}
                </p>
              </div>
            </li>
          </ul>

          <h3 className="text-2xl font-semibold text-foreground mb-4 flex items-center">
            <Sparkles className="w-8 h-8 text-secondary mr-3" />
            {t('2.2 能量層面：量子調頻技術', '2.2 Energy Level: Quantum Frequency Tuning Technology')}
          </h3>

          <p className="text-lg leading-relaxed mb-6">
            {t(
              '量子調頻技術是量子風水空氣淨化的核心差異化優勢。通過特定頻率的量子共振，可以：',
              'Quantum frequency tuning technology is the core differentiating advantage of quantum feng shui air purification. Through specific frequency quantum resonance, it can:'
            )}
          </p>

          <ul className="space-y-4 mb-8">
            <li className="flex items-start">
              <CheckCircle2 className="w-5 h-5 text-success mr-3 flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-foreground">
                  {t('調節生理時鐘', 'Regulate circadian rhythm')}
                </span>
                <p className="text-sm text-muted-foreground mt-1">
                  {t('通過 7.83 Hz 舒曼共振頻率，同步大腦波頻率，促進褪黑素自然分泌', 'Through 7.83 Hz Schumann resonance frequency, synchronize brain wave frequency, promote natural melatonin secretion')}
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-5 h-5 text-success mr-3 flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-foreground">
                  {t('優化空間能量場', 'Optimize spatial energy field')}
                </span>
                <p className="text-sm text-muted-foreground mt-1">
                  {t('消除電磁波干擾，平衡室內能量流動，創造安寧的睡眠氛圍', 'Eliminate electromagnetic interference, balance indoor energy flow, create a peaceful sleep atmosphere')}
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-5 h-5 text-success mr-3 flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-foreground">
                  {t('降低壓力荷爾蒙', 'Reduce stress hormones')}
                </span>
                <p className="text-sm text-muted-foreground mt-1">
                  {t('量子頻率能夠降低皮質醇水平，放鬆身心，快速進入深度睡眠', 'Quantum frequency can reduce cortisol levels, relax body and mind, quickly enter deep sleep')}
                </p>
              </div>
            </li>
          </ul>

          <h3 className="text-2xl font-semibold text-foreground mb-4 flex items-center">
            <Moon className="w-8 h-8 text-accent mr-3" />
            {t('2.3 風水層面：臥室擺位的 3 大黃金法則', '2.3 Feng Shui Level: 3 Golden Rules for Bedroom Positioning')}
          </h3>

          <p className="text-lg leading-relaxed mb-6">
            {t(
              '風水學認為，臥室的氣場佈局直接影響睡眠質量。量子風水空氣淨化服務會根據您的臥室格局，提供專業的風水擺位建議：',
              'Feng shui believes that the energy field layout of the bedroom directly affects sleep quality. Quantum feng shui air purification service will provide professional feng shui positioning suggestions based on your bedroom layout:'
            )}
          </p>

          <div className="space-y-6 mb-12">
            <div className="bg-section-light border border-border rounded-lg p-6">
              <h4 className="text-xl font-semibold text-foreground mb-3">
                {t('法則 1：避開「煞位」', 'Rule 1: Avoid "Inauspicious Positions"')}
              </h4>
              <p className="text-muted-foreground mb-3">
                {t(
                  '空氣淨化器不應擺放在床頭正對位置，避免氣流直衝頭部。最佳位置：床側 45 度角，距離床邊 1.5-2 米。',
                  'Air purifier should not be placed directly opposite the headboard to avoid airflow rushing to the head. Optimal position: 45-degree angle to the bed, 1.5-2 meters from the bedside.'
                )}
              </p>
            </div>

            <div className="bg-section-light border border-border rounded-lg p-6">
              <h4 className="text-xl font-semibold text-foreground mb-3">
                {t('法則 2：激活「文昌位」', 'Rule 2: Activate "Wisdom Position"')}
              </h4>
              <p className="text-muted-foreground mb-3">
                {t(
                  '根據八卦方位，將空氣淨化器擺放在臥室的東北方（文昌位），可以提升睡眠質量的同時，增強記憶力和學習能力。',
                  'According to Bagua directions, placing the air purifier in the northeast direction (wisdom position) of the bedroom can improve sleep quality while enhancing memory and learning ability.'
                )}
              </p>
            </div>

            <div className="bg-section-light border border-border rounded-lg p-6">
              <h4 className="text-xl font-semibold text-foreground mb-3">
                {t('法則 3：優化「氣流循環」', 'Rule 3: Optimize "Air Flow Circulation"')}
              </h4>
              <p className="text-muted-foreground mb-3">
                {t(
                  '空氣淨化器應放置在空氣流通路徑上，但避免正對門窗，確保室內氣場穩定和諧。',
                  'Air purifier should be placed on the air circulation path, but avoid direct alignment with doors and windows to ensure stable and harmonious indoor energy field.'
                )}
              </p>
            </div>
          </div>

          {/* Image 3 */}
          <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="/images/blog/sleep-improvement-comparison.jpg" 
              alt={t(
                '睡眠改善前後對比 - 使用量子風水空氣淨化前後的睡眠質量變化，改善前疲憊焦慮失眠，改善後精神飽滿睡眠充足，空氣淨化器帶來健康轉變',
                'Sleep improvement before-after comparison - Sleep quality changes before and after using quantum feng shui air purification, exhausted anxious insomnia before, refreshed well-rested after, air purifier bringing healthy transformation'
              )}
              className="w-full h-auto"
            />
          </div>

          {/* Section 3: Real Case Study */}
          <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
            {t('三、真實案例：李先生的失眠改善日記（30 天記錄）', '3. Real Case: Mr. Lee\'s Insomnia Improvement Diary (30-Day Record)')}
          </h2>

          <div className="bg-secondary/10 border-l-4 border-secondary p-6 rounded-r-lg mb-8">
            <p className="font-semibold text-foreground mb-2">
              {t('📝 案例背景', '📝 Case Background')}
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• {t('姓名：李先生（化名），43 歲', 'Name: Mr. Lee (pseudonym), 43 years old')}</li>
              <li>• {t('職業：金融行業高管', 'Occupation: Finance industry executive')}</li>
              <li>• {t('失眠問題：持續 5 年，每晚需要 2-3 小時才能入睡', 'Insomnia problem: 5 years, takes 2-3 hours to fall asleep each night')}</li>
              <li>• {t('居住環境：香港中環，40 樓高層公寓', 'Living environment: Hong Kong Central, 40th floor high-rise apartment')}</li>
              <li>• {t('嘗試過的方法：安眠藥、褪黑素、針灸、冥想（效果不理想）', 'Methods tried: sleeping pills, melatonin, acupuncture, meditation (unsatisfactory results)')}</li>
            </ul>
          </div>

          <h3 className="text-2xl font-semibold text-foreground mb-4">
            {t('第 1-7 天：初步改善', 'Days 1-7: Initial Improvement')}
          </h3>

          <p className="text-lg leading-relaxed mb-6">
            {t(
              '安裝量子風水空氣淨化系統後，李先生發現臥室的空氣明顯變得清新，原本略微刺鼻的裝修味道消失了。第 3 天開始，入睡時間從原本的 2-3 小時縮短到 1.5 小時。雖然改善不算明顯，但李先生表示「至少不再那麼焦慮，感覺呼吸更順暢了」。',
              'After installing the quantum feng shui air purification system, Mr. Lee noticed the air in his bedroom became significantly fresher, and the slightly pungent renovation smell disappeared. Starting from day 3, his time to fall asleep shortened from 2-3 hours to 1.5 hours. Although the improvement was not dramatic, Mr. Lee stated "at least I\'m not as anxious anymore, and breathing feels smoother".'
            )}
          </p>

          <h3 className="text-2xl font-semibold text-foreground mb-4">
            {t('第 8-14 天：顯著進步', 'Days 8-14: Significant Progress')}
          </h3>

          <p className="text-lg leading-relaxed mb-6">
            {t(
              '進入第二週，李先生的睡眠質量出現明顯提升。入睡時間縮短到 30-45 分鐘，夜間醒來次數從原本的 4-5 次減少到 1-2 次。李先生特別提到：「我發現自己不再半夜醒來後胡思亂想，翻個身就能繼續睡著。這種感覺已經很多年沒有過了。」',
              'Entering the second week, Mr. Lee\'s sleep quality improved significantly. Time to fall asleep shortened to 30-45 minutes, and the number of nighttime awakenings decreased from 4-5 times to 1-2 times. Mr. Lee specifically mentioned: "I found that I no longer overthink after waking up in the middle of the night, I can just turn over and fall back asleep. This feeling hasn\'t happened in many years."'
            )}
          </p>

          <h3 className="text-2xl font-semibold text-foreground mb-4">
            {t('第 15-30 天：穩定改善', 'Days 15-30: Stable Improvement')}
          </h3>

          <p className="text-lg leading-relaxed mb-8">
            {t(
              '第三週開始，李先生已經能夠在 20 分鐘內入睡，整夜只醒來 0-1 次，早上起床精神飽滿。他驚喜地發現，自己已經完全不需要依賴安眠藥了。第 30 天的睡眠監測數據顯示：深度睡眠時間從原本的 45 分鐘增加到 2 小時 15 分鐘，睡眠效率從 65% 提升到 92%。',
              'Starting from the third week, Mr. Lee could fall asleep within 20 minutes, woke up only 0-1 times throughout the night, and felt refreshed in the morning. He was delighted to find that he no longer needed to rely on sleeping pills at all. Day 30 sleep monitoring data showed: deep sleep time increased from 45 minutes to 2 hours 15 minutes, and sleep efficiency improved from 65% to 92%.'
            )}
          </p>

          <div className="bg-success/10 border border-success/30 p-6 rounded-lg mb-12">
            <p className="font-semibold text-foreground mb-2">
              {t('✅ 李先生的總結', '✅ Mr. Lee\'s Summary')}
            </p>
            <p className="text-muted-foreground italic">
              {t(
                '「這 5 年來，我嘗試過各種方法改善失眠，但效果都不理想。量子風水空氣淨化系統真的徹底改變了我的睡眠質量。現在我每天早上醒來都精神飽滿，工作效率也提升了不少。最重要的是，我終於不再害怕晚上躺在床上的那種焦慮感了。」',
                '"Over the past 5 years, I\'ve tried various methods to improve my insomnia, but none worked well. The quantum feng shui air purification system truly transformed my sleep quality. Now I wake up refreshed every morning, and my work efficiency has improved significantly. Most importantly, I\'m no longer afraid of the anxiety I used to feel when lying in bed at night."'
              )}
            </p>
          </div>

          {/* Section 4: Actionable Checklist */}
          <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
            {t('四、免費睡眠改善檢查清單（立即可行）', '4. Free Sleep Improvement Checklist (Immediately Actionable)')}
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            {t(
              '除了安裝量子風水空氣淨化系統，您還可以立即採取以下措施改善睡眠：',
              'In addition to installing a quantum feng shui air purification system, you can immediately take the following measures to improve sleep:'
            )}
          </p>

          <div className="space-y-4 mb-12">
            <div className="flex items-start bg-section-light border border-border rounded-lg p-4">
              <CheckCircle2 className="w-5 h-5 text-success mr-3 flex-shrink-0 mt-1" />
              <div>
                <span className="font-semibold text-foreground">
                  {t('睡前 2 小時開窗通風 15 分鐘', 'Open windows for 15 minutes 2 hours before bed')}
                </span>
                <p className="text-sm text-muted-foreground mt-1">
                  {t('降低室內 PM2.5 和甲醛濃度', 'Reduce indoor PM2.5 and formaldehyde concentration')}
                </p>
              </div>
            </div>

            <div className="flex items-start bg-section-light border border-border rounded-lg p-4">
              <CheckCircle2 className="w-5 h-5 text-success mr-3 flex-shrink-0 mt-1" />
              <div>
                <span className="font-semibold text-foreground">
                  {t('定期清洗床單、枕頭套', 'Regularly wash bed sheets and pillowcases')}
                </span>
                <p className="text-sm text-muted-foreground mt-1">
                  {t('去除塵蟎和過敏原', 'Remove dust mites and allergens')}
                </p>
              </div>
            </div>

            <div className="flex items-start bg-section-light border border-border rounded-lg p-4">
              <CheckCircle2 className="w-5 h-5 text-success mr-3 flex-shrink-0 mt-1" />
              <div>
                <span className="font-semibold text-foreground">
                  {t('臥室溫度控制在 18-22°C', 'Keep bedroom temperature at 18-22°C')}
                </span>
                <p className="text-sm text-muted-foreground mt-1">
                  {t('最適合深度睡眠的溫度範圍', 'Optimal temperature range for deep sleep')}
                </p>
              </div>
            </div>

            <div className="flex items-start bg-section-light border border-border rounded-lg p-4">
              <CheckCircle2 className="w-5 h-5 text-success mr-3 flex-shrink-0 mt-1" />
              <div>
                <span className="font-semibold text-foreground">
                  {t('使用暖色調燈光（2700K-3000K）', 'Use warm-toned lighting (2700K-3000K)')}
                </span>
                <p className="text-sm text-muted-foreground mt-1">
                  {t('避免藍光抑制褪黑素分泌', 'Avoid blue light suppressing melatonin secretion')}
                </p>
              </div>
            </div>

            <div className="flex items-start bg-section-light border border-border rounded-lg p-4">
              <CheckCircle2 className="w-5 h-5 text-success mr-3 flex-shrink-0 mt-1" />
              <div>
                <span className="font-semibold text-foreground">
                  {t('睡前 1 小時避免使用電子設備', 'Avoid electronic devices 1 hour before bed')}
                </span>
                <p className="text-sm text-muted-foreground mt-1">
                  {t('減少大腦刺激，幫助放鬆', 'Reduce brain stimulation, help relaxation')}
                </p>
              </div>
            </div>
          </div>

          {/* Conclusion & CTA */}
          <div className="bg-gradient-to-r from-accent/20 to-secondary/20 border border-accent/30 p-8 rounded-2xl mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              {t('結語：一覺到天亮，從今晚開始', 'Conclusion: Sleep Through the Night, Starting Tonight')}
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              {t(
                '失眠不僅僅是「睡不著」這麼簡單，它會影響您的健康、工作、人際關係，甚至是整個人生。科學研究已經證實：改善室內空氣質量是解決失眠問題的關鍵突破口。',
                'Insomnia is not just about "can\'t sleep", it affects your health, work, relationships, and even your entire life. Scientific research has confirmed: improving indoor air quality is the key breakthrough to solving insomnia problems.'
              )}
            </p>
            <p className="text-lg leading-relaxed mb-8">
              {t(
                '量子風水空氣淨化系統結合了頂級 HEPA 過濾技術、量子調頻能量場優化、以及專業風水擺位建議，為您提供三位一體的睡眠改善方案。讓您不再依賴安眠藥，自然而然地一覺到天亮。',
                'Quantum feng shui air purification system combines premium HEPA filtration technology, quantum energy field optimization, and professional feng shui positioning advice to provide you with a trinity sleep improvement solution. Let you no longer rely on sleeping pills and naturally sleep through the night.'
              )}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <a className="inline-flex items-center justify-center px-8 py-4 bg-accent text-accent-foreground font-semibold rounded-xl hover:bg-accent/90 transition-colors">
                  {t('立即預約免費諮詢', 'Book Free Consultation Now')}
                </a>
              </Link>
              <Link href="/services">
                <a className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-accent text-accent font-semibold rounded-xl hover:bg-accent/10 transition-colors">
                  {t('了解服務詳情', 'Learn More About Services')}
                </a>
              </Link>
            </div>
          </div>

          {/* Related Articles */}
          <div className="mt-16 pt-8 border-t border-border">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              {t('相關文章推薦', 'Related Articles')}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/blog/bedroom-harmony-feng-shui">
                <a className="group block bg-section-light border border-border rounded-xl p-6 hover:border-accent transition-colors">
                  <h4 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors mb-2">
                    {t('夫妻臥室的量子風水秘密', 'Bedroom Harmony Feng Shui Secrets')}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {t('如何用空氣淨化提升感情和諧度', 'How to enhance relationship harmony with air purification')}
                  </p>
                </a>
              </Link>

              <Link href="/blog/living-room-wealth-feng-shui">
                <a className="group block bg-section-light border border-border rounded-xl p-6 hover:border-accent transition-colors">
                  <h4 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors mb-2">
                    {t('客廳財位空氣淨化機擺放秘訣', 'Living Room Wealth Position Air Purifier Placement Secrets')}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {t('量子風水提升家庭財運', 'Quantum feng shui to enhance family fortune')}
                  </p>
                </a>
              </Link>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
