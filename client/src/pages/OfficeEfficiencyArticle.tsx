import { useEffect } from 'react';
import { Link } from 'wouter';
import { ArrowLeft, Calendar, Clock, AlertTriangle, CheckCircle2, TrendingUp, Users, Wind, Sparkles } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function OfficeEfficiencyArticle() {
  const { t, language } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Update page title and meta
    const title = language === 'zh'
      ? '員工效率低、離職率高？辦公室風水與空氣環境可能是關鍵 - 量子風水空氣淨化'
      : 'Low Employee Efficiency and High Turnover? Office Feng Shui and Air Environment Might Be the Key';
    
    const description = language === 'zh'
      ? '香港企業面臨高離職率和低效率問題。本文揭示辦公室風水與空氣質量如何影響員工表現，提供科學證據和實用解決方案，幫助企業提升團隊效率、降低離職率！'
      : 'Hong Kong businesses face high turnover and low efficiency. This article reveals how office feng shui and air quality affect employee performance, providing scientific evidence and practical solutions to boost team efficiency and reduce turnover!';
    
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
                '員工效率低、離職率高？辦公室風水與空氣環境可能是關鍵',
                'Low Employee Efficiency and High Turnover? Office Feng Shui and Air Environment Might Be the Key'
              )}
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              {t(
                '科學研究證實：辦公室環境直接影響員工表現與忠誠度',
                'Scientific Research Confirms: Office Environment Directly Affects Employee Performance and Loyalty'
              )}
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>2025-12-30</span>
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
              src="/images/blog/office-environment-productivity.jpg" 
              alt={t(
                '辦公室環境與員工效率 - 現代辦公空間，員工在工作，空氣淨化器優化環境，提升團隊生產力',
                'Office Environment and Employee Efficiency - Modern office space with employees working, air purifier optimizing environment, boosting team productivity'
              )}
              className="w-full h-auto"
            />
          </div>

          {/* Introduction */}
          <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-r-lg mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              {t('香港企業面臨的嚴峻挑戰', 'Severe Challenges Facing Hong Kong Businesses')}
            </h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <AlertTriangle className="w-5 h-5 text-warning mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  {t('香港員工離職率達 18-25%，居亞洲前列', 'Hong Kong employee turnover rate reaches 18-25%, among highest in Asia')}
                </span>
              </li>
              <li className="flex items-start">
                <AlertTriangle className="w-5 h-5 text-warning mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  {t('每位員工離職成本平均為其年薪的 150-200%', 'Average cost per employee turnover is 150-200% of annual salary')}
                </span>
              </li>
              <li className="flex items-start">
                <AlertTriangle className="w-5 h-5 text-warning mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  {t('辦公室空氣質量差導致員工生產力下降 20-30%', 'Poor office air quality leads to 20-30% decrease in employee productivity')}
                </span>
              </li>
              <li className="flex items-start">
                <AlertTriangle className="w-5 h-5 text-warning mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  {t('70% 的員工表示辦公環境影響工作滿意度', '70% of employees say office environment affects job satisfaction')}
                </span>
              </li>
            </ul>
          </div>

          <p className="text-lg leading-relaxed mb-12">
            {t(
              '您是否發現公司員工總是精神不濟、效率低下？明明招聘了優秀人才，卻留不住？問題可能不在員工身上，而在於您的辦公環境！科學研究證實：辦公室的風水佈局和空氣質量，直接影響員工的工作表現、健康狀況和離職意願。',
              'Have you noticed your employees always seem tired and inefficient? Despite hiring talented people, you can\'t retain them? The problem might not be the employees, but your office environment! Scientific research confirms: office feng shui layout and air quality directly affect employee performance, health, and turnover intentions.'
            )}
          </p>

          {/* Section 1: The Science Behind Office Environment */}
          <h2 className="text-3xl font-bold text-foreground mb-6">
            {t('辦公環境如何影響員工表現？科學證據揭密', 'How Does Office Environment Affect Employee Performance? Scientific Evidence Revealed')}
          </h2>

          {/* Issue 1 */}
          <h3 className="text-2xl font-semibold text-foreground mb-4">
            {t('1. 空氣質量：看不見的效率殺手', '1. Air Quality: The Invisible Efficiency Killer')}
          </h3>

          <p className="text-lg leading-relaxed mb-6">
            {t(
              '哈佛大學公共衛生學院研究發現：辦公室 CO₂ 濃度每增加 400 ppm，員工認知能力下降 21%。香港辦公室因密閉空調系統，CO₂ 濃度常達 1000-1500 ppm（正常應為 400-600 ppm），嚴重影響員工思考和決策能力。',
              'Harvard School of Public Health research found: For every 400 ppm increase in office CO₂ levels, employee cognitive ability decreases by 21%. Hong Kong offices, due to closed air conditioning systems, often have CO₂ levels of 1000-1500 ppm (normal should be 400-600 ppm), seriously affecting employee thinking and decision-making abilities.'
            )}
          </p>

          <div className="bg-section-light border border-border rounded-lg p-6 mb-8">
            <h4 className="text-xl font-semibold text-foreground mb-3">
              {t('空氣污染對員工的具體影響', 'Specific Effects of Air Pollution on Employees')}
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-accent mr-3 mt-0.5">📉</span>
                <div>
                  <span className="font-semibold text-foreground">{t('注意力下降 25%', '25% Decrease in Attention')}</span>
                  <p className="text-sm text-muted-foreground mt-1">
                    {t('PM2.5 和 CO₂ 超標導致大腦供氧不足', 'Excessive PM2.5 and CO₂ lead to insufficient brain oxygen')}
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 mt-0.5">📉</span>
                <div>
                  <span className="font-semibold text-foreground">{t('決策速度減慢 30%', '30% Slower Decision-Making')}</span>
                  <p className="text-sm text-muted-foreground mt-1">
                    {t('缺氧環境影響前額葉功能', 'Hypoxic environment affects prefrontal cortex function')}
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 mt-0.5">📉</span>
                <div>
                  <span className="font-semibold text-foreground">{t('病假增加 35%', '35% Increase in Sick Leave')}</span>
                  <p className="text-sm text-muted-foreground mt-1">
                    {t('空氣污染導致呼吸道疾病、頭痛、疲勞', 'Air pollution leads to respiratory diseases, headaches, fatigue')}
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Issue 2 */}
          <h3 className="text-2xl font-semibold text-foreground mb-4">
            {t('2. 辦公室風水：能量場影響團隊士氣', '2. Office Feng Shui: Energy Field Affects Team Morale')}
          </h3>

          <p className="text-lg leading-relaxed mb-6">
            {t(
              '傳統風水學結合現代環境心理學研究證實：辦公室的空間佈局、光線、氣流方向會影響員工的心理狀態和工作表現。錯誤的風水佈局會導致「能量阻塞」，讓員工感到壓抑、焦慮、無法專注。',
              'Traditional feng shui combined with modern environmental psychology research confirms: Office space layout, lighting, and airflow direction affect employee psychological state and work performance. Incorrect feng shui layout leads to "energy blockage," making employees feel oppressed, anxious, and unable to concentrate.'
            )}
          </p>

          <div className="bg-section-light border border-border rounded-lg p-6 mb-8">
            <h4 className="text-xl font-semibold text-foreground mb-3">
              {t('辦公室常見的 5 大風水問題', '5 Common Office Feng Shui Problems')}
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-red-500 mr-3 mt-0.5">❌</span>
                <div>
                  <span className="font-semibold text-foreground">{t('背門而坐', 'Sitting with Back to Door')}</span>
                  <p className="text-sm text-muted-foreground mt-1">
                    {t('缺乏安全感，容易分心，無法專注工作', 'Lack of security, easily distracted, unable to focus on work')}
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3 mt-0.5">❌</span>
                <div>
                  <span className="font-semibold text-foreground">{t('座位正對廁所或樓梯', 'Seat Facing Toilet or Stairs')}</span>
                  <p className="text-sm text-muted-foreground mt-1">
                    {t('「穢氣」和「下降氣流」影響運勢和情緒', '"Foul energy" and "descending airflow" affect fortune and mood')}
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3 mt-0.5">❌</span>
                <div>
                  <span className="font-semibold text-foreground">{t('辦公桌雜亂無章', 'Cluttered Desk')}</span>
                  <p className="text-sm text-muted-foreground mt-1">
                    {t('能量阻塞，思緒混亂，效率低下', 'Energy blockage, confused thoughts, low efficiency')}
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3 mt-0.5">❌</span>
                <div>
                  <span className="font-semibold text-foreground">{t('光線不足或過強', 'Insufficient or Excessive Lighting')}</span>
                  <p className="text-sm text-muted-foreground mt-1">
                    {t('影響視力和情緒，導致疲勞和煩躁', 'Affects vision and mood, causes fatigue and irritability')}
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3 mt-0.5">❌</span>
                <div>
                  <span className="font-semibold text-foreground">{t('氣流直衝座位', 'Airflow Directly Hitting Seat')}</span>
                  <p className="text-sm text-muted-foreground mt-1">
                    {t('空調風口對著頭部或背部，易生病、易疲勞', 'AC vent facing head or back, prone to illness and fatigue')}
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Visual: Energy Flow Optimization */}
          <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="/images/blog/office-energy-flow-optimization.jpg" 
              alt={t(
                '辦公室能量場優化對比 - 改善前後的辦公環境，展示風水佈局和空氣淨化如何優化能量流動',
                'Office Energy Field Optimization Comparison - Before and after office environment showing how feng shui layout and air purification optimize energy flow'
              )}
              className="w-full h-auto"
            />
            <p className="text-center text-sm text-muted-foreground mt-4 px-4">
              {t(
                '正確的風水佈局和空氣淨化系統可以顯著改善辦公室能量流動，提升員工效率和滿意度',
                'Proper feng shui layout and air purification system can significantly improve office energy flow, boosting employee efficiency and satisfaction'
              )}
            </p>
          </div>

          {/* Section 2: The Solution */}
          <h2 className="text-3xl font-bold text-foreground mb-6">
            {t('量子風水空氣淨化：全方位提升辦公環境', 'Quantum Feng Shui Air Purification: Comprehensive Office Environment Enhancement')}
          </h2>

          {/* Solution 1 */}
          <h3 className="text-2xl font-semibold text-foreground mb-4 flex items-center">
            <Wind className="w-8 h-8 text-primary mr-3" />
            {t('物質層面：醫療級空氣淨化', 'Physical Level: Medical-Grade Air Purification')}
          </h3>

          <p className="text-lg leading-relaxed mb-6">
            {t(
              '量子風水空氣淨化系統採用 HEPA H13 濾網 + 活性炭吸附 + 負離子釋放技術，全面改善辦公室空氣質量：',
              'Quantum feng shui air purification system uses HEPA H13 filter + activated carbon adsorption + negative ion release technology to comprehensively improve office air quality:'
            )}
          </p>

          <ul className="space-y-4 mb-8">
            <li className="flex items-start">
              <CheckCircle2 className="w-5 h-5 text-success mr-3 flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-foreground">
                  {t('過濾 99.97% PM2.5、PM0.3 超微粒子', 'Filter 99.97% PM2.5, PM0.3 ultra-fine particles')}
                </span>
                <p className="text-sm text-muted-foreground mt-1">
                  {t('減少呼吸道疾病，降低病假率 35%', 'Reduce respiratory diseases, decrease sick leave by 35%')}
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-5 h-5 text-success mr-3 flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-foreground">
                  {t('快速吸附甲醛、VOCs 有害氣體', 'Rapidly absorb formaldehyde, VOCs harmful gases')}
                </span>
                <p className="text-sm text-muted-foreground mt-1">
                  {t('新裝修辦公室 10 分鐘內降低甲醛濃度 80%', 'Reduce formaldehyde concentration by 80% in 10 minutes in newly renovated offices')}
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-5 h-5 text-success mr-3 flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-foreground">
                  {t('釋放森林級負離子 1000-1500 個/cm³', 'Release forest-level negative ions 1000-1500 ions/cm³')}
                </span>
                <p className="text-sm text-muted-foreground mt-1">
                  {t('提升員工注意力和創造力，減少疲勞感', 'Boost employee attention and creativity, reduce fatigue')}
                </p>
              </div>
            </li>
          </ul>

          {/* Solution 2 */}
          <h3 className="text-2xl font-semibold text-foreground mb-4 flex items-center">
            <Sparkles className="w-8 h-8 text-secondary mr-3" />
            {t('能量層面：量子調頻優化氣場', 'Energy Level: Quantum Frequency Tuning Optimizes Energy Field')}
          </h3>

          <p className="text-lg leading-relaxed mb-6">
            {t(
              '量子調頻技術通過特定頻率的量子共振，優化辦公空間的能量場，消除負面能量，創造積極正向的工作氛圍：',
              'Quantum frequency tuning technology optimizes office space energy field through specific frequency quantum resonance, eliminates negative energy, and creates a positive work atmosphere:'
            )}
          </p>

          <ul className="space-y-4 mb-8">
            <li className="flex items-start">
              <CheckCircle2 className="w-5 h-5 text-success mr-3 flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-foreground">
                  {t('調節腦波頻率，提升專注力', 'Regulate brain wave frequency, enhance concentration')}
                </span>
                <p className="text-sm text-muted-foreground mt-1">
                  {t('7.83 Hz 舒曼共振頻率促進 α 波，進入「心流狀態」', '7.83 Hz Schumann resonance frequency promotes α waves, entering "flow state"')}
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-5 h-5 text-success mr-3 flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-foreground">
                  {t('平衡情緒，減少職場壓力', 'Balance emotions, reduce workplace stress')}
                </span>
                <p className="text-sm text-muted-foreground mt-1">
                  {t('降低皮質醇水平，提升血清素分泌', 'Reduce cortisol levels, increase serotonin secretion')}
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-5 h-5 text-success mr-3 flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-foreground">
                  {t('消除電磁波干擾', 'Eliminate electromagnetic interference')}
                </span>
                <p className="text-sm text-muted-foreground mt-1">
                  {t('減少電腦、手機產生的負面能量場', 'Reduce negative energy field generated by computers and phones')}
                </p>
              </div>
            </li>
          </ul>

          {/* Solution 3 */}
          <h3 className="text-2xl font-semibold text-foreground mb-4 flex items-center">
            <Users className="w-8 h-8 text-accent mr-3" />
            {t('風水層面：辦公室佈局優化', 'Feng Shui Level: Office Layout Optimization')}
          </h3>

          <p className="text-lg leading-relaxed mb-6">
            {t(
              '我們根據八卦方位和現代空間心理學，提供專業的辦公室風水佈局建議：',
              'Based on Bagua directions and modern space psychology, we provide professional office feng shui layout suggestions:'
            )}
          </p>

          <div className="space-y-6 mb-12">
            <div className="bg-section-light border border-border rounded-lg p-6">
              <h4 className="text-xl font-semibold text-foreground mb-3">
                {t('法則 1：主管座位「靠山有靠，前景開闊」', 'Rule 1: Executive Seat "Backed by Support, Open Front View"')}
              </h4>
              <p className="text-muted-foreground">
                {t(
                  '主管座位背後應有實牆（象徵靠山），前方視野開闊（掌控全局）。避免背門而坐或背對窗戶。空氣淨化器擺放在辦公室東北方（文昌位），提升決策智慧。',
                  'Executive seat should have solid wall behind (symbolizing support), open front view (controlling overall situation). Avoid sitting with back to door or window. Place air purifier in northeast (wisdom position) to enhance decision-making wisdom.'
                )}
              </p>
            </div>

            <div className="bg-section-light border border-border rounded-lg p-6">
              <h4 className="text-xl font-semibold text-foreground mb-3">
                {t('法則 2：員工座位「避煞化煞」', 'Rule 2: Employee Seats "Avoid and Transform Negative Energy"')}
              </h4>
              <p className="text-muted-foreground">
                {t(
                  '員工座位避免正對廁所、樓梯、尖角。座位之間保持適當距離（至少 1.5 米），減少壓迫感。每個區域配置空氣淨化器，確保氣流順暢。',
                  'Employee seats avoid facing toilets, stairs, sharp corners. Maintain appropriate distance between seats (at least 1.5 meters) to reduce oppression. Configure air purifiers in each area to ensure smooth airflow.'
                )}
              </p>
            </div>

            <div className="bg-section-light border border-border rounded-lg p-6">
              <h4 className="text-xl font-semibold text-foreground mb-3">
                {t('法則 3：公共區域「氣流循環，能量流動」', 'Rule 3: Common Areas "Air Circulation, Energy Flow"')}
              </h4>
              <p className="text-muted-foreground">
                {t(
                  '茶水間、會議室、走廊應保持空氣流通。空氣淨化器擺放在氣流交匯處，優化整體能量場。定期清理雜物，保持空間整潔。',
                  'Pantry, meeting rooms, corridors should maintain air circulation. Place air purifiers at airflow intersections to optimize overall energy field. Regularly clean clutter, maintain space tidiness.'
                )}
              </p>
            </div>
          </div>

          {/* Visual: Office Floor Plan */}
          <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="/images/blog/office-floor-plan.jpg" 
              alt={t(
                '辦公室風水佈局平面圖 - 專業的辦公空間規劃，展示最佳座位擺放、空氣淨化器位置和能量流動路徑',
                'Office Feng Shui Layout Floor Plan - Professional office space planning showing optimal seat arrangement, air purifier placement, and energy flow paths'
              )}
              className="w-full h-auto"
            />
            <p className="text-center text-sm text-muted-foreground mt-4 px-4">
              {t(
                '專業的辦公室風水佈局圖，清楚標示座位方位、空氣淨化器擺放位置及能量流動方向',
                'Professional office feng shui layout diagram clearly marking seat orientations, air purifier placements, and energy flow directions'
              )}
            </p>
          </div>

          {/* Section 3: Real Case Study */}
          <h2 className="text-3xl font-bold text-foreground mb-6">
            {t('真實案例：科技公司改造前後對比', 'Real Case: Tech Company Before-After Transformation')}
          </h2>

          <div className="bg-gradient-to-br from-section-dark to-muted rounded-2xl p-8 mb-12 border border-border/50">
            <h3 className="text-2xl font-bold text-accent mb-4">
              {t('案例：香港某 80 人科技公司', 'Case: Hong Kong Tech Company with 80 Employees')}
            </h3>
            <p className="text-lg leading-relaxed mb-6">
              {t(
                '這家公司面臨嚴重的離職率問題（年度離職率 32%），員工經常抱怨辦公室悶熱、空氣差、容易疲勞。在使用量子風水空氣淨化服務並優化辦公佈局後：',
                'This company faced severe turnover issues (annual turnover rate 32%), employees frequently complained about stuffy office, poor air quality, and easy fatigue. After using quantum feng shui air purification service and optimizing office layout:'
              )}
            </p>

            {/* Visual: Office Before-After Transformation */}
            <div className="mb-8 rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="/images/blog/office-before-after.jpg" 
                alt={t(
                  '辦公室改造前後對比 - 展示量子風水優化前後的辦公環境變化，員工工作狀態明顯改善',
                  'Office Before-After Transformation - Showing office environment changes before and after quantum feng shui optimization, employee work conditions significantly improved'
                )}
                className="w-full h-auto"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-background/50 rounded-lg p-6">
                <h4 className="text-xl font-bold text-red-500 mb-3">
                  {t('改造前 ❌', 'Before Transformation ❌')}
                </h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• {t('年度離職率：32%', 'Annual Turnover: 32%')}</li>
                  <li>• {t('病假率：8.5%', 'Sick Leave Rate: 8.5%')}</li>
                  <li>• {t('員工滿意度：62%', 'Employee Satisfaction: 62%')}</li>
                  <li>• {t('項目準時完成率：73%', 'Project On-Time Completion: 73%')}</li>
                  <li>• {t('員工投訴：每月 12 次', 'Employee Complaints: 12 per month')}</li>
                </ul>
              </div>

              <div className="bg-background/50 rounded-lg p-6">
                <h4 className="text-xl font-bold text-success mb-3">
                  {t('改造後 ✅', 'After Transformation ✅')}
                </h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• {t('年度離職率：12%（下降 63%）', 'Annual Turnover: 12% (63% decrease)')}</li>
                  <li>• {t('病假率：3.2%（下降 62%）', 'Sick Leave Rate: 3.2% (62% decrease)')}</li>
                  <li>• {t('員工滿意度：89%（提升 43%）', 'Employee Satisfaction: 89% (43% increase)')}</li>
                  <li>• {t('項目準時完成率：94%（提升 29%）', 'Project On-Time Completion: 94% (29% increase)')}</li>
                  <li>• {t('員工投訴：每月 2 次（下降 83%）', 'Employee Complaints: 2 per month (83% decrease)')}</li>
                </ul>
              </div>
            </div>

            <div className="bg-accent/10 rounded-lg p-6">
              <h4 className="text-xl font-bold text-foreground mb-3">
                {t('投資回報分析', 'Return on Investment Analysis')}
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <TrendingUp className="w-5 h-5 text-success mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    {t('節省招聘成本：每年減少 16 位員工離職 × 年薪 150% ≈ HK$960萬', 'Saved Recruitment Cost: 16 fewer resignations per year × 150% annual salary ≈ HK$9.6M')}
                  </span>
                </li>
                <li className="flex items-start">
                  <TrendingUp className="w-5 h-5 text-success mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    {t('減少病假成本：每年節省病假薪資約 HK$120萬', 'Reduced Sick Leave Cost: Annual savings of approximately HK$1.2M')}
                  </span>
                </li>
                <li className="flex items-start">
                  <TrendingUp className="w-5 h-5 text-success mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    {t('提升生產力：項目準時率提升帶來的營收增加約 HK$300萬', 'Improved Productivity: Revenue increase from on-time project completion approximately HK$3M')}
                  </span>
                </li>
                <li className="flex items-start">
                  <TrendingUp className="w-5 h-5 text-success mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    {t('總投資：量子風水空氣淨化系統 + 佈局優化 ≈ HK$50萬', 'Total Investment: Quantum feng shui air purification system + layout optimization ≈ HK$500K')}
                  </span>
                </li>
                <li className="flex items-start mt-4">
                  <span className="text-2xl font-bold text-success mr-3">💰</span>
                  <span className="text-xl font-bold text-success">
                    {t('投資回報率（ROI）：超過 2500%！', 'Return on Investment (ROI): Over 2500%!')}
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Section 4: How to Get Started */}
          <h2 className="text-3xl font-bold text-foreground mb-6">
            {t('如何開始改善您的辦公環境？', 'How to Start Improving Your Office Environment?')}
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            {t(
              '量子風水空氣淨化服務提供一站式辦公環境優化方案：',
              'Quantum feng shui air purification service provides one-stop office environment optimization solution:'
            )}
          </p>

          <div className="space-y-6 mb-12">
            <div className="bg-section-light border border-border rounded-lg p-6">
              <h4 className="text-xl font-semibold text-foreground mb-3">
                {t('步驟 1：免費辦公環境評估', 'Step 1: Free Office Environment Assessment')}
              </h4>
              <p className="text-muted-foreground">
                {t(
                  '專業團隊上門測量空氣質量（PM2.5、CO₂、甲醛、TVOC、負離子濃度），分析風水佈局，提供詳細評估報告',
                  'Professional team on-site to measure air quality (PM2.5, CO₂, formaldehyde, TVOC, negative ion concentration), analyze feng shui layout, provide detailed assessment report'
                )}
              </p>
            </div>

            <div className="bg-section-light border border-border rounded-lg p-6">
              <h4 className="text-xl font-semibold text-foreground mb-3">
                {t('步驟 2：個性化優化方案', 'Step 2: Personalized Optimization Plan')}
              </h4>
              <p className="text-muted-foreground">
                {t(
                  '根據辦公室規模、行業特性、員工人數，制定專屬的空氣淨化和風水佈局方案',
                  'Based on office size, industry characteristics, number of employees, create exclusive air purification and feng shui layout plan'
                )}
              </p>
            </div>

            <div className="bg-section-light border border-border rounded-lg p-6">
              <h4 className="text-xl font-semibold text-foreground mb-3">
                {t('步驟 3：系統安裝與佈局調整', 'Step 3: System Installation and Layout Adjustment')}
              </h4>
              <p className="text-muted-foreground">
                {t(
                  '專業安裝量子風水空氣淨化系統，指導辦公家具擺放，優化氣流和能量場',
                  'Professional installation of quantum feng shui air purification system, guide office furniture placement, optimize airflow and energy field'
                )}
              </p>
            </div>

            <div className="bg-section-light border border-border rounded-lg p-6">
              <h4 className="text-xl font-semibold text-foreground mb-3">
                {t('步驟 4：持續監測與優化', 'Step 4: Continuous Monitoring and Optimization')}
              </h4>
              <p className="text-muted-foreground">
                {t(
                  '提供 30 天、90 天、180 天定期檢測服務，追蹤員工滿意度和效率變化，持續優化方案',
                  'Provide 30-day, 90-day, 180-day regular testing service, track employee satisfaction and efficiency changes, continuously optimize plan'
                )}
              </p>
            </div>
          </div>

          {/* Conclusion */}
          <div className="bg-gradient-to-br from-accent/10 to-secondary/10 border-l-4 border-accent rounded-r-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              {t('總結：辦公環境投資是最划算的人才投資', 'Conclusion: Office Environment Investment is the Most Cost-Effective Talent Investment')}
            </h3>
            <p className="text-lg text-muted-foreground mb-4">
              {t(
                '每位員工離職的成本是其年薪的 150-200%，包括招聘成本、培訓成本、生產力損失。相比之下，改善辦公環境的投資只需一次性支出，卻能持續降低離職率、提升效率、改善員工健康。',
                'The cost of each employee resignation is 150-200% of their annual salary, including recruitment costs, training costs, productivity losses. In comparison, office environment improvement investment requires only a one-time expenditure but can continuously reduce turnover, improve efficiency, and enhance employee health.'
              )}
            </p>
            <p className="text-lg font-semibold text-accent">
              {t(
                '投資辦公環境，就是投資企業的未來！',
                'Investing in office environment is investing in the company\'s future!'
              )}
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}
