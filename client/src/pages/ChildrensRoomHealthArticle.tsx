import { useEffect } from 'react';
import { Link } from 'wouter';
import { ArrowLeft, Calendar, Clock, AlertTriangle, CheckCircle2, Wind, Heart, Sparkles } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function ChildrensRoomHealthArticle() {
  const { t, language } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Update page title and meta
    const title = language === 'zh'
      ? '孩子經常生病？可能是兒童房風水與空氣質量出了問題 - 量子風水空氣淨化'
      : 'Is Your Child Getting Sick Often? It Might Be Children\'s Room Feng Shui and Air Quality Issues';
    
    const description = language === 'zh'
      ? '香港有超過 30% 的兒童患有過敏性鼻炎，15% 的兒童患有哮喘。本文揭示兒童房空氣質量與風水佈局的健康隱患，教您如何打造健康的兒童房環境！'
      : 'Over 30% of children in Hong Kong suffer from allergic rhinitis, and 15% have asthma. This article reveals health hazards of children\'s room air quality and feng shui layout, teaching you how to create a healthy children\'s room environment!';
    
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
                '孩子經常生病？可能是兒童房風水與空氣質量出了問題',
                'Is Your Child Getting Sick Often? It Might Be Children\'s Room Feng Shui and Air Quality Issues'
              )}
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              {t(
                '科學證據：如何通過改善空氣質量與風水佈局，提升孩子健康',
                'Scientific Evidence: How to Improve Children\'s Health Through Air Quality and Feng Shui Layout'
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
              src="/images/blog/unhealthy-childrens-room.jpg" 
              alt={t(
                '不健康的兒童房環境 - 雜亂空間、光線不足、空氣質量差、塵蟎和黴菌隱患，影響孩子健康的常見問題',
                'Unhealthy Children\'s Room Environment - Cluttered space, poor lighting, bad air quality, dust mites and mold hazards, common issues affecting children\'s health'
              )}
              className="w-full h-auto"
            />
          </div>

          {/* Introduction */}
          <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-r-lg mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              {t('香港兒童健康危機', 'Hong Kong Children\'s Health Crisis')}
            </h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <AlertTriangle className="w-5 h-5 text-warning mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  {t('超過 30% 的香港兒童患有過敏性鼻炎', 'Over 30% of children in Hong Kong suffer from allergic rhinitis')}
                </span>
              </li>
              <li className="flex items-start">
                <AlertTriangle className="w-5 h-5 text-warning mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  {t('約 15% 的香港兒童患有哮喘，70% 與室內空氣污染相關', 'About 15% of children have asthma, 70% related to indoor air pollution')}
                </span>
              </li>
              <li className="flex items-start">
                <AlertTriangle className="w-5 h-5 text-warning mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  {t('室內空氣污染物濃度可比室外高 2-5 倍', 'Indoor air pollutants can be 2-5 times higher than outdoors')}
                </span>
              </li>
              <li className="flex items-start">
                <AlertTriangle className="w-5 h-5 text-warning mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  {t('兒童呼吸頻率比成人快 50%，吸入污染物更多', 'Children breathe 50% faster than adults, inhaling more pollutants')}
                </span>
              </li>
            </ul>
          </div>

          <p className="text-lg leading-relaxed mb-12">
            {t(
              '如果您的孩子經常感冒、咳嗽、流鼻涕，或者睡眠質量差、注意力不集中，問題可能不僅僅是體質弱，而是兒童房的風水與空氣質量出了問題。頻繁生病不僅影響孩子的身體發育，更會影響學習表現、情緒穩定和社交能力。',
              'If your child frequently catches colds, coughs, has a runny nose, or experiences poor sleep quality and difficulty concentrating, the problem might not just be a weak constitution, but issues with the children\'s room feng shui and air quality. Frequent illness not only affects physical development but also impacts academic performance, emotional stability, and social skills.'
            )}
          </p>

          {/* Section 1: 5 Major Health Hazards */}
          <h2 className="text-3xl font-bold text-foreground mb-6">
            {t('兒童房 5 大健康隱患', '5 Major Health Hazards in Children\'s Rooms')}
          </h2>

          {/* Hazard 1 */}
          <h3 className="text-2xl font-semibold text-foreground mb-4">
            {t('隱患 1：塵蟎與過敏原', 'Hazard 1: Dust Mites and Allergens')}
          </h3>

          <p className="text-lg leading-relaxed mb-6">
            {t(
              '研究顯示：每克床墊灰塵中含有 100-10000 隻塵蟎。塵蟎的排泄物是兒童過敏性鼻炎、哮喘的主要誘因。香港潮濕的氣候為塵蟎提供了理想的生存環境。',
              'Research shows: Each gram of mattress dust contains 100-10000 dust mites. Dust mite excrement is the main trigger for children\'s allergic rhinitis and asthma. Hong Kong\'s humid climate provides ideal living conditions for dust mites.'
            )}
          </p>

          <ul className="space-y-4 mb-8">
            <li className="flex items-start">
              <CheckCircle2 className="w-5 h-5 text-success mr-3 flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-foreground">
                  {t('解決方案', 'Solution')}
                </span>
                <p className="text-sm text-muted-foreground mt-1">
                  {t('使用 HEPA H13 空氣淨化器過濾塵蟎及其排泄物，定期清洗床上用品（每週一次，60°C 熱水）', 'Use HEPA H13 air purifier to filter dust mites and their excrement, regularly wash bedding (once a week, 60°C hot water)')}
                </p>
              </div>
            </li>
          </ul>

          {/* Hazard 2 */}
          <h3 className="text-2xl font-semibold text-foreground mb-4">
            {t('隱患 2：甲醛與 TVOC 有害氣體', 'Hazard 2: Formaldehyde and TVOC Harmful Gases')}
          </h3>

          <p className="text-lg leading-relaxed mb-6">
            {t(
              '兒童房的新家具、油漆、地板、玩具都可能釋放甲醛和 TVOC。兒童的免疫系統尚未成熟，對這些有害氣體更敏感，長期暴露會導致呼吸道疾病、皮膚過敏、甚至影響大腦發育。',
              'New furniture, paint, flooring, and toys in children\'s rooms may release formaldehyde and TVOC. Children\'s immune systems are not yet mature and are more sensitive to these harmful gases. Long-term exposure can lead to respiratory diseases, skin allergies, and even affect brain development.'
            )}
          </p>

          <ul className="space-y-4 mb-8">
            <li className="flex items-start">
              <CheckCircle2 className="w-5 h-5 text-success mr-3 flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-foreground">
                  {t('解決方案', 'Solution')}
                </span>
                <p className="text-sm text-muted-foreground mt-1">
                  {t('量子風水空氣淨化系統的活性炭吸附技術，10 分鐘內降低甲醛濃度 80%', 'Quantum feng shui air purification system\'s activated carbon adsorption technology reduces formaldehyde concentration by 80% in 10 minutes')}
                </p>
              </div>
            </li>
          </ul>

          {/* Hazard 3 */}
          <h3 className="text-2xl font-semibold text-foreground mb-4">
            {t('隱患 3：黴菌與細菌滋生', 'Hazard 3: Mold and Bacteria Growth')}
          </h3>

          <p className="text-lg leading-relaxed mb-6">
            {t(
              '香港濕度高達 80-90%，兒童房的牆角、窗戶、空調容易滋生黴菌。黴菌孢子會飄散在空氣中，引發呼吸道感染、皮膚疾病。',
              'Hong Kong humidity reaches 80-90%, children\'s room corners, windows, and air conditioners easily breed mold. Mold spores float in the air, causing respiratory infections and skin diseases.'
            )}
          </p>

          <ul className="space-y-4 mb-8">
            <li className="flex items-start">
              <CheckCircle2 className="w-5 h-5 text-success mr-3 flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-foreground">
                  {t('解決方案', 'Solution')}
                </span>
                <p className="text-sm text-muted-foreground mt-1">
                  {t('空氣淨化器的 UV-C 紫外線殺菌功能，配合除濕機，保持室內濕度 50-60%', 'Air purifier\'s UV-C sterilization function, combined with dehumidifier, maintains indoor humidity at 50-60%')}
                </p>
              </div>
            </li>
          </ul>

          {/* Hazard 4 */}
          <h3 className="text-2xl font-semibold text-foreground mb-4">
            {t('隱患 4：負離子不足', 'Hazard 4: Insufficient Negative Ions')}
          </h3>

          <p className="text-lg leading-relaxed mb-6">
            {t(
              '城市室內負離子濃度通常只有 100-200 個/cm³，遠低於森林環境（2000-5000 個/cm³）。負離子不足會導致孩子注意力不集中、情緒不穩定、免疫力下降。',
              'Urban indoor negative ion concentration is usually only 100-200 ions/cm³, far below forest environment (2000-5000 ions/cm³). Insufficient negative ions lead to children\'s difficulty concentrating, emotional instability, and weakened immunity.'
            )}
          </p>

          <ul className="space-y-4 mb-8">
            <li className="flex items-start">
              <CheckCircle2 className="w-5 h-5 text-success mr-3 flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-foreground">
                  {t('解決方案', 'Solution')}
                </span>
                <p className="text-sm text-muted-foreground mt-1">
                  {t('量子風水空氣淨化器釋放 1000-1500 個/cm³ 負離子，創造森林般的清新環境', 'Quantum feng shui air purifier releases 1000-1500 ions/cm³ negative ions, creating forest-fresh environment')}
                </p>
              </div>
            </li>
          </ul>

          {/* Hazard 5 */}
          <h3 className="text-2xl font-semibold text-foreground mb-4">
            {t('隱患 5：風水佈局不當', 'Hazard 5: Improper Feng Shui Layout')}
          </h3>

          <p className="text-lg leading-relaxed mb-12">
            {t(
              '兒童房的床位、書桌擺放不當，會影響孩子的睡眠質量和學習效率。例如：床頭對著門窗（氣流直衝）、書桌背對門（缺乏安全感）、房間過於雜亂（能量阻塞）。',
              'Improper placement of bed and desk in children\'s room affects sleep quality and learning efficiency. For example: headboard facing doors/windows (direct airflow), desk back to door (lack of security), overly cluttered room (energy blockage).'
            )}
          </p>

          {/* Image 2: Healthy Room */}
          <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="/images/blog/healthy-childrens-room.jpg" 
              alt={t(
                '健康的兒童房環境 - 明亮整潔空間、良好通風、量子風水空氣淨化機、適當的綠植、舒適的學習和睡眠區域',
                'Healthy Children\'s Room Environment - Bright clean space, good ventilation, quantum feng shui air purifier, appropriate plants, comfortable study and sleep areas'
              )}
              className="w-full h-auto"
            />
          </div>

          {/* Section 2: Quantum Feng Shui Solution */}
          <h2 className="text-3xl font-bold text-foreground mb-6">
            {t('量子風水空氣淨化：全方位保護孩子健康', 'Quantum Feng Shui Air Purification: Comprehensive Protection for Children\'s Health')}
          </h2>

          {/* Solution 1 */}
          <h3 className="text-2xl font-semibold text-foreground mb-4 flex items-center">
            <Wind className="w-8 h-8 text-primary mr-3" />
            {t('物質層面：99.97% 高效過濾', 'Physical Level: 99.97% High-Efficiency Filtration')}
          </h3>

          <p className="text-lg leading-relaxed mb-6">
            {t(
              '採用醫療級 HEPA H13 濾網，過濾塵蟎、花粉、PM2.5、細菌、病毒；活性炭快速吸附甲醛、TVOC；UV-C 紫外線殺菌，消滅 99.9% 的細菌和黴菌。',
              'Medical-grade HEPA H13 filter removes dust mites, pollen, PM2.5, bacteria, viruses; activated carbon rapidly adsorbs formaldehyde, TVOC; UV-C sterilization eliminates 99.9% of bacteria and mold.'
            )}
          </p>

          {/* Solution 2 */}
          <h3 className="text-2xl font-semibold text-foreground mb-4 flex items-center">
            <Sparkles className="w-8 h-8 text-secondary mr-3" />
            {t('能量層面：量子調頻技術', 'Energy Level: Quantum Frequency Tuning Technology')}
          </h3>

          <p className="text-lg leading-relaxed mb-6">
            {t(
              '通過 7.83 Hz 舒曼共振頻率，調節孩子的生理時鐘，促進深度睡眠；優化空間能量場，提升注意力和學習效率；釋放森林級負離子，增強免疫力。',
              'Through 7.83 Hz Schumann resonance frequency, regulate children\'s circadian rhythm, promote deep sleep; optimize spatial energy field, improve attention and learning efficiency; release forest-level negative ions, enhance immunity.'
            )}
          </p>

          {/* Solution 3 */}
          <h3 className="text-2xl font-semibold text-foreground mb-4 flex items-center">
            <Heart className="w-8 h-8 text-accent mr-3" />
            {t('風水層面：兒童房 3 大擺位法則', 'Feng Shui Level: 3 Positioning Rules for Children\'s Room')}
          </h3>

          <div className="space-y-6 mb-12">
            <div className="bg-section-light border border-border rounded-lg p-6">
              <h4 className="text-xl font-semibold text-foreground mb-3">
                {t('法則 1：床位擺放', 'Rule 1: Bed Placement')}
              </h4>
              <p className="text-muted-foreground">
                {t(
                  '床頭靠牆（有安全感），避開門窗直線（避免氣流直衝），床側 45 度角擺放空氣淨化器',
                  'Headboard against wall (security), avoid door/window alignment (avoid direct airflow), place air purifier at 45-degree angle to bed'
                )}
              </p>
            </div>

            <div className="bg-section-light border border-border rounded-lg p-6">
              <h4 className="text-xl font-semibold text-foreground mb-3">
                {t('法則 2：書桌擺放', 'Rule 2: Desk Placement')}
              </h4>
              <p className="text-muted-foreground">
                {t(
                  '書桌面向門（掌握全局），背後有靠（穩定感），東北方（文昌位）最佳',
                  'Desk facing door (control overall), back supported (stability), northeast direction (wisdom position) best'
                )}
              </p>
            </div>

            <div className="bg-section-light border border-border rounded-lg p-6">
              <h4 className="text-xl font-semibold text-foreground mb-3">
                {t('法則 3：空間整理', 'Rule 3: Space Organization')}
              </h4>
              <p className="text-muted-foreground">
                {t(
                  '保持房間整潔（能量流動順暢），定期清理玩具書籍（避免能量阻塞），適當擺放綠植（淨化空氣）',
                  'Keep room tidy (smooth energy flow), regularly organize toys/books (avoid energy blockage), appropriately place plants (purify air)'
                )}
              </p>
            </div>
          </div>

          {/* Section 3: Real Case Study */}
          <h2 className="text-3xl font-bold text-foreground mb-6">
            {t('真實案例：李太太的兒童房改造', 'Real Case: Mrs. Lee\'s Children\'s Room Transformation')}
          </h2>

          <div className="bg-gradient-to-br from-section-dark to-muted rounded-2xl p-8 mb-12 border border-border/50">
            <p className="text-lg leading-relaxed mb-4">
              {t(
                '李太太的 8 歲兒子小明，每月感冒 2-3 次，經常流鼻涕、咳嗽，晚上睡不好，白天上課注意力不集中。在使用量子風水空氣淨化服務並重新佈局兒童房後：',
                'Mrs. Lee\'s 8-year-old son Xiao Ming caught colds 2-3 times per month, frequently had runny nose and coughs, poor sleep at night, difficulty concentrating in class during the day. After using quantum feng shui air purification service and reorganizing children\'s room:'
              )}
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-success mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  {t('第 7 天：感冒症狀消失，鼻涕和咳嗽明顯減少', 'Day 7: Cold symptoms disappeared, runny nose and coughing significantly reduced')}
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-success mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  {t('第 14 天：睡眠質量改善，每晚睡眠時間從 7 小時增加到 9 小時', 'Day 14: Sleep quality improved, nightly sleep increased from 7 hours to 9 hours')}
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-success mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  {t('第 30 天：上課注意力提升，成績從班級 20 名進步到前 10 名', 'Day 30: Class attention improved, grades improved from 20th to top 10 in class')}
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-success mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  {t('3 個月後：完全沒有再感冒，體質明顯增強，參加學校運動會獲得第一名', '3 months later: No more colds, constitution significantly strengthened, won first place in school sports meet')}
                </span>
              </li>
            </ul>
          </div>

          {/* Section 4: How to Get Started */}
          <h2 className="text-3xl font-bold text-foreground mb-6">
            {t('如何為孩子打造健康的兒童房？', 'How to Create a Healthy Children\'s Room for Your Child?')}
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            {t(
              '量子風水空氣淨化服務提供專業的兒童房健康改造方案：',
              'Quantum feng shui air purification service provides professional children\'s room health transformation solution:'
            )}
          </p>

          <div className="space-y-6 mb-12">
            <div className="bg-section-light border border-border rounded-lg p-6">
              <h4 className="text-xl font-semibold text-foreground mb-3">
                {t('步驟 1：免費兒童房健康檢測', 'Step 1: Free Children\'s Room Health Testing')}
              </h4>
              <p className="text-muted-foreground">
                {t(
                  '上門檢測 PM2.5、甲醛、TVOC、塵蟎、黴菌、負離子濃度',
                  'On-site testing of PM2.5, formaldehyde, TVOC, dust mites, mold, negative ion concentration'
                )}
              </p>
            </div>

            <div className="bg-section-light border border-border rounded-lg p-6">
              <h4 className="text-xl font-semibold text-foreground mb-3">
                {t('步驟 2：兒童專屬風水佈局設計', 'Step 2: Exclusive Children\'s Feng Shui Layout Design')}
              </h4>
              <p className="text-muted-foreground">
                {t(
                  '根據孩子的生辰八字、房間格局，制定最佳的床位、書桌、空氣淨化器擺放方案',
                  'Based on child\'s BaZi and room layout, create optimal bed, desk, and air purifier placement plan'
                )}
              </p>
            </div>

            <div className="bg-section-light border border-border rounded-lg p-6">
              <h4 className="text-xl font-semibold text-foreground mb-3">
                {t('步驟 3：量子風水空氣淨化系統安裝', 'Step 3: Quantum Feng Shui Air Purification System Installation')}
              </h4>
              <p className="text-muted-foreground">
                {t(
                  '專業安裝、調試，確保最佳淨化效果和能量場優化',
                  'Professional installation and adjustment to ensure optimal purification effect and energy field optimization'
                )}
              </p>
            </div>

            <div className="bg-section-light border border-border rounded-lg p-6">
              <h4 className="text-xl font-semibold text-foreground mb-3">
                {t('步驟 4：定期跟進與健康報告', 'Step 4: Regular Follow-up and Health Reports')}
              </h4>
              <p className="text-muted-foreground">
                {t(
                  '7 天、30 天、90 天定期上門檢測，提供詳細的健康改善報告',
                  '7-day, 30-day, 90-day regular on-site testing, provide detailed health improvement reports'
                )}
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-br from-accent/20 to-secondary/20 border-l-4 border-accent rounded-r-2xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              {t('立即預約免費兒童房健康檢測', 'Book Free Children\'s Room Health Testing Now')}
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              {t(
                '我們提供免費上門兒童房健康檢測服務，幫助您了解孩子的居住環境現狀，並提供專業的改善建議。為了孩子的健康，不要再等待！立即聯繫我們！',
                'We offer free on-site children\'s room health testing service to help you understand your child\'s living environment and provide professional improvement suggestions. For your child\'s health, don\'t wait! Contact us now!'
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
