import { useEffect } from 'react';
import { Link } from 'wouter';
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowLeft, Calendar, Clock, AlertTriangle, CheckCircle, Heart, Wind, Home, Star } from 'lucide-react';

export default function ChildrensRoomHealthArticle() {
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
              <span>18 {t('分鐘閱讀', 'min read')}</span>
            </div>
            <span className="px-3 py-1 bg-accent/90 text-white text-sm font-semibold rounded-full">
              {t('兒童健康', 'Children\'s Health')}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent leading-tight">
            {t(
              '孩子經常生病？可能是兒童房風水與空氣質量出了問題',
              'Is Your Child Getting Sick Often? It Might Be Children\'s Room Feng Shui and Air Quality Issues'
            )}
          </h1>

          <p className="text-xl text-muted-foreground leading-relaxed">
            {t(
              '香港有超過 30% 的兒童患有過敏性鼻炎，15% 的兒童患有哮喘。如果您的孩子經常感冒、咳嗽、流鼻涕，或者睡眠質量差、注意力不集中，問題可能不僅僅是體質弱，而是兒童房的風水與空氣質量出了問題。',
              'Over 30% of children in Hong Kong suffer from allergic rhinitis, and 15% have asthma. If your child frequently catches colds, coughs, has a runny nose, or experiences poor sleep quality and difficulty concentrating, the problem might not just be a weak constitution, but issues with the children\'s room feng shui and air quality.'
            )}
          </p>
        </div>
      </section>

      {/* Featured Image 1: Unhealthy Room */}
      <section className="py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <img
            src="/images/blog/unhealthy-childrens-room.jpg"
            alt={t(
              '不健康的兒童房環境 - 雜亂空間、光線不足、空氣質量差、塵蟎和黴菌隱患，影響孩子健康的常見問題 | Unhealthy Children\'s Room Environment - Cluttered space, poor lighting, bad air quality, dust mites and mold hazards, common issues affecting children\'s health',
              'Unhealthy Children\'s Room Environment - Cluttered space, poor lighting, bad air quality, dust mites and mold hazards, common issues affecting children\'s health'
            )}
            className="w-full h-auto object-cover rounded-2xl shadow-2xl"
          />
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section 1: Hong Kong Children Health Crisis */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-foreground flex items-center gap-3">
              <AlertTriangle className="w-8 h-8 text-red-500" />
              {t('香港兒童健康危機：驚人的統計數據', 'Hong Kong Children\'s Health Crisis: Shocking Statistics')}
            </h2>

            <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20 rounded-2xl p-8 mb-8 border border-red-200 dark:border-red-800">
              <h3 className="text-2xl font-bold mb-4 text-red-600 dark:text-red-400">
                {t('讓人震驚的數據', 'Shocking Data')}
              </h3>
              <ul className="space-y-3 text-lg text-gray-900 dark:text-gray-100">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">⚠️</span>
                  <span>
                    {t(
                      '香港兒童過敏性鼻炎發病率超過 30%，位居全球前列',
                      'Hong Kong children\'s allergic rhinitis prevalence exceeds 30%, ranking among the highest globally'
                    )}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">⚠️</span>
                  <span>
                    {t(
                      '約 15% 的香港兒童患有哮喘，其中 70% 與室內空氣污染直接相關',
                      'Approximately 15% of Hong Kong children have asthma, with 70% directly related to indoor air pollution'
                    )}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">⚠️</span>
                  <span>
                    {t(
                      '研究顯示：室內空氣污染物濃度可比室外高 2-5 倍，兒童呼吸頻率比成人快 50%，吸入污染物更多',
                      'Research shows: Indoor air pollutant concentrations can be 2-5 times higher than outdoors, and children breathe 50% faster than adults, inhaling more pollutants'
                    )}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">⚠️</span>
                  <span>
                    {t(
                      '每年因空氣污染導致的兒童呼吸道疾病就診次數超過 50 萬次',
                      'Over 500,000 annual children\'s respiratory disease visits due to air pollution'
                    )}
                  </span>
                </li>
              </ul>
            </div>

            <p className="text-lg leading-relaxed mb-6 text-gray-900 dark:text-gray-100">
              {t(
                '作為父母，我們總是希望給孩子最好的一切。但您知道嗎？即使您每天辛苦工作、購買最好的食物和衣服，如果忽略了兒童房的空氣質量和風水佈局，孩子的健康依然可能受到嚴重威脅。',
                'As parents, we always want to give our children the best of everything. But did you know? Even if you work hard every day and buy the best food and clothes, if you ignore the air quality and feng shui layout of the children\'s room, your child\'s health may still be seriously threatened.'
              )}
            </p>

            <p className="text-lg leading-relaxed mb-6 text-gray-900 dark:text-gray-100">
              {t(
                '頻繁生病不僅影響孩子的身體發育，更會影響學習表現、情緒穩定和社交能力。長期下來，還可能導致免疫力低下，形成惡性循環。',
                'Frequent illness not only affects children\'s physical development but also impacts academic performance, emotional stability, and social skills. Over time, it may lead to weakened immunity, creating a vicious cycle.'
              )}
            </p>
          </section>

          {/* Section 2: 5 Major Health Hazards */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-foreground flex items-center gap-3">
              <AlertTriangle className="w-8 h-8 text-orange-500" />
              {t('兒童房 5 大健康隱患', '5 Major Health Hazards in Children\'s Rooms')}
            </h2>

            <p className="text-lg leading-relaxed mb-8">
              {t(
                '根據香港環境保護署和多家醫療機構的研究，以下 5 個隱患是導致兒童頻繁生病的主要原因：',
                'According to research by the Hong Kong Environmental Protection Department and multiple medical institutions, the following 5 hazards are the main causes of frequent illness in children:'
              )}
            </p>

            {/* Hazard 1 */}
            <div className="bg-gradient-to-br from-section-dark to-muted rounded-2xl p-8 mb-6 border border-border/50 shadow-cosmic">
              <h3 className="text-2xl font-bold mb-4 text-red-500 flex items-center gap-2">
                <span className="text-3xl">🚨</span>
                {t('隱患 1：裝修材料甲醛釋放（影響發育）', 'Hazard 1: Formaldehyde Release from Renovation Materials (Affects Development)')}
              </h3>
              <ul className="space-y-2 text-lg mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>
                    {t(
                      '新裝修或更換家具後，甲醛釋放期可長達 3-15 年',
                      'After new renovation or furniture replacement, formaldehyde release period can last 3-15 years'
                    )}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>
                    {t(
                      '兒童對甲醛的敏感度是成人的 3-4 倍',
                      'Children are 3-4 times more sensitive to formaldehyde than adults'
                    )}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>
                    {t(
                      '長期接觸低劑量甲醛可能導致：慢性呼吸道疾病、免疫力下降、發育遲緩、注意力不集中',
                      'Long-term exposure to low doses of formaldehyde may cause: chronic respiratory diseases, weakened immunity, developmental delays, difficulty concentrating'
                    )}
                  </span>
                </li>
              </ul>
              <div className="bg-red-100 dark:bg-red-950/40 rounded-xl p-4 border border-red-400 dark:border-red-700">
                <p className="text-red-950 dark:text-red-100 font-semibold">
                  ⚠️ {t('警告', 'Warning')}:{' '}
                  {t(
                    '即使聞不到刺鼻氣味，甲醛依然可能超標！兒童房必須使用專業 HEPA 過濾系統。',
                    'Even if you can\'t smell a pungent odor, formaldehyde may still exceed standards! Children\'s rooms must use professional HEPA filtration systems.'
                  )}
                </p>
              </div>
            </div>

            {/* Hazard 2 */}
            <div className="bg-gradient-to-br from-section-dark to-muted rounded-2xl p-8 mb-6 border border-border/50 shadow-cosmic">
              <h3 className="text-2xl font-bold mb-4 text-orange-500 flex items-center gap-2">
                <span className="text-3xl">🚨</span>
                {t('隱患 2：毛絨玩具塵蟎藏身處（過敏源）', 'Hazard 2: Stuffed Toys - Dust Mite Hideouts (Allergen Source)')}
              </h3>
              <ul className="space-y-2 text-lg mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>
                    {t(
                      '毛絨玩具、床上用品是塵蟎的最佳繁殖場所',
                      'Stuffed toys and bedding are ideal breeding grounds for dust mites'
                    )}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>
                    {t(
                      '塵蟎排泄物是最常見的兒童過敏原，可導致：過敏性鼻炎、哮喘、皮膚過敏（濕疹）、眼睛發癢',
                      'Dust mite feces are the most common children\'s allergen, causing: allergic rhinitis, asthma, skin allergies (eczema), itchy eyes'
                    )}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>
                    {t(
                      '香港的高溫高濕環境更加速塵蟎繁殖',
                      'Hong Kong\'s hot and humid environment accelerates dust mite reproduction'
                    )}
                  </span>
                </li>
              </ul>
              <div className="bg-orange-100 dark:bg-orange-950/40 rounded-xl p-4 border border-orange-400 dark:border-orange-700">
                <p className="text-orange-950 dark:text-orange-100 font-semibold">
                  💡 {t('解決方案', 'Solution')}:{' '}
                  {t(
                    '定期高溫清洗（60°C 以上）+ 使用帶 HEPA 過濾的空氣淨化機，每 2 週曬太陽一次',
                    'Regular high-temperature washing (above 60°C) + use air purifier with HEPA filter, sun exposure every 2 weeks'
                  )}
                </p>
              </div>
            </div>

            {/* Hazard 3 */}
            <div className="bg-gradient-to-br from-section-dark to-muted rounded-2xl p-8 mb-6 border border-border/50 shadow-cosmic">
              <h3 className="text-2xl font-bold mb-4 text-yellow-600 flex items-center gap-2">
                <span className="text-3xl">🚨</span>
                {t('隱患 3：窗簾地毯積塵（呼吸道刺激）', 'Hazard 3: Curtains and Carpets Accumulating Dust (Respiratory Irritation)')}
              </h3>
              <ul className="space-y-2 text-lg mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>
                    {t(
                      '布質窗簾、地毯容易積累大量灰塵和細菌',
                      'Fabric curtains and carpets easily accumulate large amounts of dust and bacteria'
                    )}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>
                    {t(
                      '孩子在地毯上玩耍時，會吸入大量懸浮微粒',
                      'Children inhale large amounts of suspended particles when playing on carpets'
                    )}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>
                    {t(
                      '長期接觸可導致：慢性咳嗽、支氣管炎、呼吸道感染',
                      'Long-term exposure can cause: chronic cough, bronchitis, respiratory infections'
                    )}
                  </span>
                </li>
              </ul>
            </div>

            {/* Hazard 4 */}
            <div className="bg-gradient-to-br from-section-dark to-muted rounded-2xl p-8 mb-6 border border-border/50 shadow-cosmic">
              <h3 className="text-2xl font-bold mb-4 text-green-600 flex items-center gap-2">
                <span className="text-3xl">🚨</span>
                {t('隱患 4：書櫃書本黴菌（免疫力下降）', 'Hazard 4: Bookcase and Book Mold (Weakened Immunity)')}
              </h3>
              <ul className="space-y-2 text-lg mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>
                    {t(
                      '香港濕度高，書本、書櫃容易發霉',
                      'High humidity in Hong Kong makes books and bookcases prone to mold'
                    )}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>
                    {t(
                      '黴菌孢子透過空氣傳播，可導致：過敏反應、免疫系統受損、慢性疲勞',
                      'Mold spores spread through air, causing: allergic reactions, compromised immune system, chronic fatigue'
                    )}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>
                    {t(
                      '兒童免疫系統尚未完全發育，更容易受黴菌影響',
                      'Children\'s immune systems are not fully developed, making them more susceptible to mold'
                    )}
                  </span>
                </li>
              </ul>
            </div>

            {/* Hazard 5 */}
            <div className="bg-gradient-to-br from-section-dark to-muted rounded-2xl p-8 mb-6 border border-border/50 shadow-cosmic">
              <h3 className="text-2xl font-bold mb-4 text-blue-600 flex items-center gap-2">
                <span className="text-3xl">🚨</span>
                {t('隱患 5：電子設備電磁場（睡眠質量）', 'Hazard 5: Electronic Device Electromagnetic Fields (Sleep Quality)')}
              </h3>
              <ul className="space-y-2 text-lg mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>
                    {t(
                      '電視、電腦、手機充電器產生的電磁場會干擾睡眠',
                      'Electromagnetic fields from TVs, computers, and phone chargers interfere with sleep'
                    )}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>
                    {t(
                      '睡眠質量差導致：免疫力下降、注意力不集中、情緒不穩定',
                      'Poor sleep quality leads to: weakened immunity, difficulty concentrating, emotional instability'
                    )}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>
                    {t(
                      '長期睡眠不足的孩子更容易生病',
                      'Children with long-term sleep deprivation are more prone to illness'
                    )}
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 3: 6 Feng Shui Taboos */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-foreground flex items-center gap-3">
              <Star className="w-8 h-8 text-accent" />
              {t('兒童房風水 6 大禁忌', '6 Major Feng Shui Taboos for Children\'s Rooms')}
            </h2>

            <p className="text-lg leading-relaxed mb-8">
              {t(
                '除了空氣質量，兒童房的風水佈局也會直接影響孩子的健康、學習和情緒。以下 6 個禁忌是最常見的問題：',
                'Besides air quality, the feng shui layout of children\'s rooms directly affects children\'s health, learning, and emotions. The following 6 taboos are the most common issues:'
              )}
            </p>

            {/* Taboo 1 */}
            <div className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-950/30 dark:to-red-900/30 rounded-2xl p-8 mb-6 border border-red-300 dark:border-red-700">
              <h3 className="text-2xl font-bold mb-4 text-red-700 dark:text-red-300 flex items-center gap-2">
                ❌ {t('禁忌 1：床頭對門（驚嚇頻繁）', 'Taboo 1: Bed Head Facing Door (Frequent Startling)')}
              </h3>
              <p className="text-lg leading-relaxed mb-4 text-gray-900 dark:text-gray-100">
                {t(
                  '門是氣流進出的通道，如果床頭對著門，孩子睡眠時會受到氣流沖擊，導致睡眠不安、頻繁驚醒、容易做噩夢。長期下來，孩子會變得膽小、易受驚嚇，免疫力也會下降。',
                  'The door is a passage for airflow. If the bed head faces the door, children will be impacted by airflow during sleep, leading to restless sleep, frequent awakenings, and nightmares. Over time, children become timid, easily startled, and have weakened immunity.'
                )}
              </p>
              <p className="text-accent font-semibold">
                ✅ {t('解決方案', 'Solution')}:{' '}
                {t(
                  '將床頭調整到看得見門但不正對門的位置，最佳位置是在門的側面。',
                  'Adjust the bed head to a position where the door is visible but not directly facing it, ideally on the side of the door.'
                )}
              </p>
            </div>

            {/* Taboo 2 */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950/30 dark:to-orange-900/30 rounded-2xl p-8 mb-6 border border-orange-300 dark:border-orange-700">
              <h3 className="text-2xl font-bold mb-4 text-orange-700 dark:text-orange-300 flex items-center gap-2">
                ❌ {t('禁忌 2：樑壓床（壓迫感重）', 'Taboo 2: Beam Over Bed (Heavy Pressure)')}
              </h3>
              <p className="text-lg leading-relaxed mb-4 text-gray-900 dark:text-gray-100">
                {t(
                  '天花板的橫樑正對床鋪會產生強烈的壓迫感，影響孩子的身心發展。孩子會感到莫名的壓力、睡眠質量差、容易頭痛、注意力不集中。',
                  'A beam on the ceiling directly over the bed creates a strong sense of pressure, affecting children\'s physical and mental development. Children feel inexplicable pressure, poor sleep quality, frequent headaches, and difficulty concentrating.'
                )}
              </p>
              <p className="text-accent font-semibold">
                ✅ {t('解決方案', 'Solution')}:{' '}
                {t(
                  '移動床位避開橫樑，或在橫樑下方裝設天花板、懸掛布簾化解。',
                  'Move the bed to avoid the beam, or install a false ceiling or hang curtains below the beam to resolve it.'
                )}
              </p>
            </div>

            {/* Taboo 3 */}
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-950/30 dark:to-yellow-900/30 rounded-2xl p-8 mb-6 border border-yellow-300 dark:border-yellow-700">
              <h3 className="text-2xl font-bold mb-4 text-yellow-800 dark:text-yellow-200 flex items-center gap-2">
                ❌ {t('禁忌 3：鏡子對床（睡眠不安）', 'Taboo 3: Mirror Facing Bed (Restless Sleep)')}
              </h3>
              <p className="text-lg leading-relaxed mb-4 text-gray-900 dark:text-gray-100">
                {t(
                  '鏡子在風水中屬陰，會反射能量。如果鏡子正對床鋪，孩子半夜醒來看到鏡中的影子會受到驚嚇，導致睡眠質量差、多夢、精神緊張。',
                  'Mirrors are considered yin in feng shui and reflect energy. If a mirror faces the bed, children who wake up at night and see their reflection will be startled, leading to poor sleep quality, many dreams, and mental tension.'
                )}
              </p>
              <p className="text-accent font-semibold">
                ✅ {t('解決方案', 'Solution')}:{' '}
                {t(
                  '移除鏡子或調整角度，不要正對床鋪。可用布簾遮蓋鏡子。',
                  'Remove the mirror or adjust its angle to not face the bed directly. You can cover the mirror with a curtain.'
                )}
              </p>
            </div>

            {/* Taboo 4 */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/30 dark:to-green-900/30 rounded-2xl p-8 mb-6 border border-green-300 dark:border-green-700">
              <h3 className="text-2xl font-bold mb-4 text-green-800 dark:text-green-200 flex items-center gap-2">
                ❌ {t('禁忌 4：尖角沖射（易受驚）', 'Taboo 4: Sharp Corner Pointing (Easily Startled)')}
              </h3>
              <p className="text-lg leading-relaxed mb-4 text-gray-900 dark:text-gray-100">
                {t(
                  '牆角、家具的尖角對著床鋪或書桌，會形成「煞氣」，讓孩子感到不安、易受驚嚇、情緒不穩定，甚至可能導致意外受傷。',
                  'Sharp corners of walls or furniture pointing at the bed or desk create "sha qi," making children feel uneasy, easily startled, emotionally unstable, and may even lead to accidental injuries.'
                )}
              </p>
              <p className="text-accent font-semibold">
                ✅ {t('解決方案', 'Solution')}:{' '}
                {t(
                  '選擇圓角家具，或用防撞條包裹尖角。調整床位和書桌避開尖角。',
                  'Choose furniture with rounded corners, or wrap sharp corners with corner guards. Adjust bed and desk positions to avoid sharp corners.'
                )}
              </p>
            </div>

            {/* Taboo 5 */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-900/30 rounded-2xl p-8 mb-6 border border-blue-300 dark:border-blue-700">
              <h3 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-200 flex items-center gap-2">
                ❌ {t('禁忌 5：顏色過深（情緒壓抑）', 'Taboo 5: Colors Too Dark (Emotional Suppression)')}
              </h3>
              <p className="text-lg leading-relaxed mb-4 text-gray-900 dark:text-gray-100">
                {t(
                  '兒童房使用深色（黑色、深灰、深紫等）會讓空間顯得壓抑、沉重，影響孩子的心理健康，導致情緒低落、缺乏活力、學習興趣減退。',
                  'Using dark colors (black, dark gray, dark purple, etc.) in children\'s rooms makes the space feel oppressive and heavy, affecting children\'s mental health, leading to low mood, lack of vitality, and reduced learning interest.'
                )}
              </p>
              <p className="text-accent font-semibold">
                ✅ {t('解決方案', 'Solution')}:{' '}
                {t(
                  '選擇明亮、溫暖的顏色（淡黃、淺藍、淡綠、米白等），營造輕鬆愉快的氛圍。',
                  'Choose bright, warm colors (light yellow, light blue, light green, beige, etc.) to create a relaxed and pleasant atmosphere.'
                )}
              </p>
            </div>

            {/* Taboo 6 */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/30 dark:to-purple-900/30 rounded-2xl p-8 mb-6 border border-purple-300 dark:border-purple-700">
              <h3 className="text-2xl font-bold mb-4 text-purple-800 dark:text-purple-200 flex items-center gap-2">
                ❌ {t('禁忌 6：雜物堆積（能量阻塞）', 'Taboo 6: Clutter Accumulation (Energy Blockage)')}
              </h3>
              <p className="text-lg leading-relaxed mb-4 text-gray-900 dark:text-gray-100">
                {t(
                  '兒童房雜物過多會阻塞氣流，讓空間能量無法流動，導致孩子思維混亂、注意力不集中、學習效率低下，還會影響呼吸系統健康。',
                  'Too much clutter in children\'s rooms blocks airflow, preventing energy from flowing, leading to confused thinking, difficulty concentrating, low learning efficiency, and affecting respiratory health.'
                )}
              </p>
              <p className="text-accent font-semibold">
                ✅ {t('解決方案', 'Solution')}:{' '}
                {t(
                  '定期整理，保持空間整潔。使用收納箱、書櫃分類存放物品。',
                  'Organize regularly and keep the space tidy. Use storage boxes and bookcases to categorize and store items.'
                )}
              </p>
            </div>
          </section>

          {/* Featured Image 2: Healthy Room */}
          <section className="mb-16">
            <div className="mb-8">
              <img
                src="/images/blog/healthy-childrens-room.jpg"
                alt={t(
                  '理想的健康兒童房環境 - 整潔明亮空間、自然採光、量子風水空氣淨化機、正確床位擺放、圓角家具、新鮮空氣可視化、風水佈局優化 | Ideal Healthy Children\'s Room Environment - Clean bright space, natural lighting, quantum feng shui air purifier, proper bed positioning, rounded furniture, fresh air visualization, optimized feng shui layout',
                  'Ideal Healthy Children\'s Room Environment - Clean bright space, natural lighting, quantum feng shui air purifier, proper bed positioning, rounded furniture, fresh air visualization, optimized feng shui layout'
                )}
                className="w-full h-auto object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </section>

          {/* Section 4: Quantum Feng Shui Air Purification Solution */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-foreground flex items-center gap-3">
              <Wind className="w-8 h-8 text-accent" />
              {t('量子風水空氣淨化兒童房專屬方案', 'Quantum Feng Shui Air Purification Children\'s Room Exclusive Solution')}
            </h2>

            <p className="text-lg leading-relaxed mb-8">
              {t(
                '針對兒童房的特殊需求，我們開發了專屬的量子風水空氣淨化方案，從物質清淨、能量調頻、風水擺位三個層面全方位保護孩子健康：',
                'For the special needs of children\'s rooms, we have developed an exclusive quantum feng shui air purification solution that comprehensively protects children\'s health from three levels: physical cleanliness, energy frequency tuning, and feng shui positioning:'
              )}
            </p>

            {/* Solution 1 */}
            <div className="bg-gradient-to-br from-section-dark to-muted rounded-2xl p-8 mb-6 border border-border/50 shadow-cosmic">
              <h3 className="text-2xl font-bold mb-4 text-accent flex items-center gap-2">
                <CheckCircle className="w-6 h-6" />
                {t('1. 兒童房專用過濾系統', '1. Children\'s Room Specialized Filtration System')}
              </h3>
              <ul className="space-y-3 text-lg text-gray-900 dark:text-gray-100">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span>
                    {t(
                      'HEPA H13 醫療級過濾網：99.97% 過濾 PM0.3 超微粒子（比 PM2.5 更小），有效去除過敏原',
                      'HEPA H13 medical-grade filter: 99.97% filtration of PM0.3 ultra-fine particles (smaller than PM2.5), effectively removing allergens'
                    )}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span>
                    {t(
                      '活性炭高效吸附：針對甲醛、苯、TVOC 等化學污染物，特別適合新裝修兒童房',
                      'Activated carbon high-efficiency adsorption: Targets formaldehyde, benzene, TVOC and other chemical pollutants, especially suitable for newly renovated children\'s rooms'
                    )}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span>
                    {t(
                      '光觸媒殺菌技術：分解細菌、病毒、黴菌，保護兒童免疫系統',
                      'Photocatalyst sterilization technology: Decomposes bacteria, viruses, and mold, protecting children\'s immune system'
                    )}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span>
                    {t(
                      '負離子釋放：促進血液循環、改善睡眠質量、增強免疫力',
                      'Negative ion release: Promotes blood circulation, improves sleep quality, enhances immunity'
                    )}
                  </span>
                </li>
              </ul>
            </div>

            {/* Solution 2 */}
            <div className="bg-gradient-to-br from-section-dark to-muted rounded-2xl p-8 mb-6 border border-border/50 shadow-cosmic">
              <h3 className="text-2xl font-bold mb-4 text-accent flex items-center gap-2">
                <CheckCircle className="w-6 h-6" />
                {t('2. 量子調頻促進深度睡眠', '2. Quantum Frequency Tuning for Deep Sleep')}
              </h3>
              <ul className="space-y-3 text-lg text-gray-900 dark:text-gray-100">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span>
                    {t(
                      '釋放 432Hz 量子波頻率：與人體細胞共振，促進深度睡眠，讓孩子睡得更香',
                      'Release 432Hz quantum wave frequency: Resonates with human cells, promotes deep sleep, helps children sleep better'
                    )}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span>
                    {t(
                      '優化室內能量場：平衡陰陽五行，創造和諧的睡眠環境',
                      'Optimize indoor energy field: Balance yin-yang and five elements, create harmonious sleep environment'
                    )}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span>
                    {t(
                      '調節生理節律：幫助孩子快速進入深度睡眠，提升睡眠質量',
                      'Regulate circadian rhythm: Help children quickly enter deep sleep, improve sleep quality'
                    )}
                  </span>
                </li>
              </ul>
            </div>

            {/* Solution 3 */}
            <div className="bg-gradient-to-br from-section-dark to-muted rounded-2xl p-8 mb-6 border border-border/50 shadow-cosmic">
              <h3 className="text-2xl font-bold mb-4 text-accent flex items-center gap-2">
                <CheckCircle className="w-6 h-6" />
                {t('3. 風水擺位增強學習運', '3. Feng Shui Positioning to Enhance Learning Fortune')}
              </h3>
              <ul className="space-y-3 text-lg text-gray-900 dark:text-gray-100">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span>
                    {t(
                      '根據孩子八字五行，選擇最佳擺放位置（文昌位），提升學習運和專注力',
                      'Based on child\'s eight characters and five elements, choose the best placement position (Wen Chang position), enhance learning fortune and concentration'
                    )}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span>
                    {t(
                      '配合房間佈局，優化氣流循環，讓孩子思維更清晰、學習更高效',
                      'Coordinate with room layout, optimize airflow circulation, help children think more clearly and learn more efficiently'
                    )}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span>
                    {t(
                      '避開不利位置（桃花位、病符位），保護孩子健康和情緒穩定',
                      'Avoid unfavorable positions (Peach Blossom position, illness position), protect children\'s health and emotional stability'
                    )}
                  </span>
                </li>
              </ul>
            </div>

            {/* Solution 4 */}
            <div className="bg-gradient-to-br from-section-dark to-muted rounded-2xl p-8 mb-6 border border-border/50 shadow-cosmic">
              <h3 className="text-2xl font-bold mb-4 text-accent flex items-center gap-2">
                <CheckCircle className="w-6 h-6" />
                {t('4. 靜音模式保護睡眠', '4. Silent Mode to Protect Sleep')}
              </h3>
              <ul className="space-y-3 text-lg text-gray-900 dark:text-gray-100">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span>
                    {t(
                      '超靜音運行：睡眠模式低至 18 分貝（比圖書館更安靜），不干擾孩子睡眠',
                      'Ultra-quiet operation: Sleep mode as low as 18 decibels (quieter than a library), does not disturb children\'s sleep'
                    )}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span>
                    {t(
                      '智能感應：自動調節運行模式，白天強力淨化，夜間靜音守護',
                      'Smart sensing: Automatically adjust operation mode, powerful purification during day, silent protection at night'
                    )}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span>
                    {t(
                      '柔和夜燈：可調節亮度，為孩子提供安全感，又不影響睡眠',
                      'Soft night light: Adjustable brightness, provides security for children without affecting sleep'
                    )}
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 5: Real Case Study */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-foreground flex items-center gap-3">
              <Heart className="w-8 h-8 text-red-500" />
              {t('真實案例：6 歲男孩健康改善之旅', 'Real Case: 6-Year-Old Boy\'s Health Improvement Journey')}
            </h2>

            <div className="bg-gradient-to-br from-accent/5 to-secondary/5 rounded-2xl p-8 mb-8 border border-accent/20">
              <h3 className="text-2xl font-bold mb-4 text-accent">
                {t('案例背景', 'Case Background')}
              </h3>
              <p className="text-lg leading-relaxed mb-6 text-gray-900 dark:text-gray-100">
                {t(
                  '張太太的兒子小明（6 歲）從 4 歲開始就頻繁生病，每個月至少感冒一次，還有嚴重的過敏性鼻炎。每天早上起床就打噴嚏、流鼻涕，晚上經常咳嗽無法入睡。張太太帶他看了很多醫生，試過各種藥物，但效果都不理想。孩子的身體越來越弱，注意力也越來越難集中，學習成績下降，性格變得內向。',
                  'Mrs. Zhang\'s son Xiao Ming (6 years old) has been frequently ill since age 4, catching colds at least once a month, with severe allergic rhinitis. He sneezes and has a runny nose every morning, and often coughs at night unable to sleep. Mrs. Zhang took him to many doctors and tried various medications, but the results were unsatisfactory. The child became weaker, had more difficulty concentrating, academic performance declined, and personality became introverted.'
                )}
              </p>

              <h3 className="text-2xl font-bold mb-4 text-accent">
                {t('問題診斷', 'Problem Diagnosis')}
              </h3>
              <p className="text-lg leading-relaxed mb-6 text-gray-900 dark:text-gray-100">
                {t(
                  '我們的量子風水專家到張太太家中進行全面檢測，發現了以下問題：',
                  'Our quantum feng shui expert conducted a comprehensive inspection at Mrs. Zhang\'s home and found the following issues:'
                )}
              </p>
              <ul className="space-y-2 text-lg mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-red-500">❌</span>
                  <span>
                    {t(
                      '房間剛裝修 2 年，甲醛檢測超標 2.3 倍（標準值 0.08mg/m³，實測 0.18mg/m³）',
                      'Room recently renovated 2 years ago, formaldehyde detection exceeded standard by 2.3 times (standard value 0.08mg/m³, measured 0.18mg/m³)'
                    )}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">❌</span>
                  <span>
                    {t(
                      '床上有大量毛絨玩具，從未高溫清洗，塵蟎數量驚人',
                      'Large number of stuffed toys on bed, never high-temperature washed, alarming dust mite count'
                    )}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">❌</span>
                  <span>
                    {t(
                      '床頭正對門，風水犯「沖煞」，孩子睡眠質量極差',
                      'Bed head directly facing door, feng shui violation of "chong sha," child\'s sleep quality extremely poor'
                    )}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">❌</span>
                  <span>
                    {t(
                      '書櫃有黴斑，空氣中黴菌孢子濃度偏高',
                      'Bookcase has mold spots, high mold spore concentration in air'
                    )}
                  </span>
                </li>
              </ul>

              <h3 className="text-2xl font-bold mb-4 text-accent">
                {t('實施方案', 'Implementation Plan')}
              </h3>
              <ul className="space-y-3 text-lg mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span>
                    {t(
                      '安裝量子風水空氣淨化機，放置在最佳風水位置（文昌位）',
                      'Install quantum feng shui air purifier, placed in optimal feng shui position (Wen Chang position)'
                    )}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span>
                    {t(
                      '調整床位，避開門沖，確保孩子睡眠安穩',
                      'Adjust bed position, avoid door impact, ensure child sleeps soundly'
                    )}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span>
                    {t(
                      '高溫清洗所有毛絨玩具和床上用品（60°C 以上）',
                      'High-temperature wash all stuffed toys and bedding (above 60°C)'
                    )}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span>
                    {t(
                      '清理書櫃黴斑，更換受污染書籍',
                      'Clean bookcase mold spots, replace contaminated books'
                    )}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span>
                    {t(
                      '使用量子調頻功能，每天睡前運行 30 分鐘',
                      'Use quantum frequency tuning function, run for 30 minutes before sleep daily'
                    )}
                  </span>
                </li>
              </ul>

              <h3 className="text-2xl font-bold mb-4 text-accent">
                {t('改善結果（3 個月追蹤）', 'Improvement Results (3-Month Follow-up)')}
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                  <h4 className="text-xl font-bold mb-4 text-red-600 dark:text-red-400">
                    {t('改善前', 'Before Improvement')}
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500">📉</span>
                      <span className="text-gray-900 dark:text-gray-100">{t('每月感冒 3-4 次', 'Catching cold 3-4 times per month')}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500">📉</span>
                      <span className="text-gray-900 dark:text-gray-100">{t('每天早上打噴嚏 20+ 次', 'Sneezing 20+ times every morning')}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500">📉</span>
                      <span className="text-gray-900 dark:text-gray-100">{t('夜間咳嗽，睡眠質量差', 'Coughing at night, poor sleep quality')}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500">📉</span>
                      <span className="text-gray-900 dark:text-gray-100">{t('注意力不集中，學習成績下降', 'Difficulty concentrating, declining grades')}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500">📉</span>
                      <span className="text-gray-900 dark:text-gray-100">{t('性格內向，不愛說話', 'Introverted personality, reluctant to talk')}</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                  <h4 className="text-xl font-bold mb-4 text-green-600 dark:text-green-400">
                    {t('改善後', 'After Improvement')}
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500">📈</span>
                      <span className="text-gray-900 dark:text-gray-100">{t('3 個月內只感冒 1 次', 'Only 1 cold in 3 months')}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500">📈</span>
                      <span className="text-gray-900 dark:text-gray-100">{t('早上打噴嚏減少 90%', 'Morning sneezing reduced by 90%')}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500">📈</span>
                      <span className="text-gray-900 dark:text-gray-100">{t('夜間不再咳嗽，睡眠深沉', 'No more coughing at night, deep sleep')}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500">📈</span>
                      <span className="text-gray-900 dark:text-gray-100">{t('注意力明顯提升，成績進步', 'Significantly improved concentration, better grades')}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500">📈</span>
                      <span className="text-gray-900 dark:text-gray-100">{t('變得開朗活潑，喜歡交朋友', 'Became cheerful and lively, enjoys making friends')}</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 bg-green-50 dark:bg-green-950/40 rounded-xl p-6 border border-green-300 dark:border-green-800">
                <p className="text-lg font-semibold text-green-800 dark:text-green-200">
                  💚 {t('張太太的感言', 'Mrs. Zhang\'s Testimonial')}:
                </p>
                <p className="text-lg leading-relaxed mt-4 italic">
                  {t(
                    '「我沒想到效果會這麼好！僅僅 3 個月，小明就像變了一個人。現在他每天精神奕奕，上課專心，成績也進步了很多。最重要的是，他不再是那個體弱多病的孩子了，整個人都變得自信開朗。真的非常感謝量子風水空氣淨化服務！」',
                    '"I didn\'t expect the results to be this good! In just 3 months, Xiao Ming became like a different person. Now he is energetic every day, focused in class, and his grades have improved a lot. Most importantly, he is no longer that sickly child, and has become confident and cheerful. I am truly grateful for the quantum feng shui air purification service!"'
                  )}
                </p>
              </div>
            </div>
          </section>

          {/* Featured Image 3: Health Improvement */}
          <section className="mb-16">
            <div className="mb-8">
              <img
                src="/images/blog/child-health-improvement.jpg"
                alt={t(
                  '兒童健康改善對比 - 使用前孩子疲憊生病蒼白無力與使用後健康活力笑容燦爛的明顯對比，展現量子風水空氣淨化帶來的真實改變 | Children\'s Health Improvement Comparison - Clear contrast between tired, sick, pale child before use and healthy, energetic, bright-smiled child after, showing real changes brought by quantum feng shui air purification',
                  'Children\'s Health Improvement Comparison - Clear contrast between tired, sick, pale child before use and healthy, energetic, bright-smiled child after, showing real changes brought by quantum feng shui air purification'
                )}
                className="w-full h-auto object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </section>

          {/* Section 6: Checklist */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-foreground flex items-center gap-3">
              <Home className="w-8 h-8 text-accent" />
              {t('兒童房空氣質量與風水檢查清單', 'Children\'s Room Air Quality and Feng Shui Checklist')}
            </h2>

            <p className="text-lg leading-relaxed mb-8">
              {t(
                '以下是 15 個檢查項目，請仔細檢查您家的兒童房，每項打勾表示做到了。如果有超過 5 項未達標，建議您立即採取改善措施：',
                'Here are 15 inspection items. Please carefully check your children\'s room. Check each item if it meets the standard. If more than 5 items do not meet the standard, immediate improvement measures are recommended:'
              )}
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Air Quality Checklist */}
              <div className="bg-gradient-to-br from-section-dark to-muted rounded-2xl p-8 border border-border/50">
                <h3 className="text-2xl font-bold mb-6 text-accent">
                  {t('空氣質量檢查', 'Air Quality Inspection')}
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <input type="checkbox" className="mt-1 w-5 h-5 text-accent" />
                    <span className="text-gray-900 dark:text-gray-100">{t('房間無明顯異味（甲醛、黴味等）', 'No obvious odors in room (formaldehyde, mold, etc.)')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <input type="checkbox" className="mt-1 w-5 h-5 text-accent" />
                    <span className="text-gray-900 dark:text-gray-100">{t('裝修超過 3 年或使用環保材料', 'Renovated over 3 years ago or used eco-friendly materials')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <input type="checkbox" className="mt-1 w-5 h-5 text-accent" />
                    <span className="text-gray-900 dark:text-gray-100">{t('每天開窗通風至少 2 小時', 'Open windows for ventilation at least 2 hours daily')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <input type="checkbox" className="mt-1 w-5 h-5 text-accent" />
                    <span className="text-gray-900 dark:text-gray-100">{t('使用 HEPA 過濾空氣淨化機', 'Use air purifier with HEPA filter')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <input type="checkbox" className="mt-1 w-5 h-5 text-accent" />
                    <span className="text-gray-900 dark:text-gray-100">{t('毛絨玩具定期高溫清洗（60°C+）', 'Regularly high-temperature wash stuffed toys (60°C+)')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <input type="checkbox" className="mt-1 w-5 h-5 text-accent" />
                    <span className="text-gray-900 dark:text-gray-100">{t('書櫃、窗簾無黴斑', 'No mold spots on bookcases or curtains')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <input type="checkbox" className="mt-1 w-5 h-5 text-accent" />
                    <span className="text-gray-900 dark:text-gray-100">{t('空調定期清洗（每季度一次）', 'Air conditioner regularly cleaned (once per quarter)')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <input type="checkbox" className="mt-1 w-5 h-5 text-accent" />
                    <span className="text-gray-900 dark:text-gray-100">{t('室內濕度控制在 40-60%', 'Indoor humidity controlled at 40-60%')}</span>
                  </li>
                </ul>
              </div>

              {/* Feng Shui Checklist */}
              <div className="bg-gradient-to-br from-section-dark to-muted rounded-2xl p-8 border border-border/50">
                <h3 className="text-2xl font-bold mb-6 text-accent">
                  {t('風水佈局檢查', 'Feng Shui Layout Inspection')}
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <input type="checkbox" className="mt-1 w-5 h-5 text-accent" />
                    <span className="text-gray-900 dark:text-gray-100">{t('床頭不對門', 'Bed head not facing door')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <input type="checkbox" className="mt-1 w-5 h-5 text-accent" />
                    <span className="text-gray-900 dark:text-gray-100">{t('床上方無橫樑壓頂', 'No beam above bed')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <input type="checkbox" className="mt-1 w-5 h-5 text-accent" />
                    <span className="text-gray-900 dark:text-gray-100">{t('鏡子不對床', 'Mirror not facing bed')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <input type="checkbox" className="mt-1 w-5 h-5 text-accent" />
                    <span className="text-gray-900 dark:text-gray-100">{t('床位和書桌避開尖角沖射', 'Bed and desk avoid sharp corner pointing')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <input type="checkbox" className="mt-1 w-5 h-5 text-accent" />
                    <span className="text-gray-900 dark:text-gray-100">{t('房間顏色明亮溫暖', 'Room colors bright and warm')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <input type="checkbox" className="mt-1 w-5 h-5 text-accent" />
                    <span className="text-gray-900 dark:text-gray-100">{t('房間整潔無雜物堆積', 'Room tidy without clutter accumulation')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <input type="checkbox" className="mt-1 w-5 h-5 text-accent" />
                    <span className="text-gray-900 dark:text-gray-100">{t('電子設備遠離床鋪（1.5米以上）', 'Electronic devices away from bed (1.5m+)')}</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 bg-yellow-100 dark:bg-yellow-950/40 rounded-xl p-6 border border-yellow-400 dark:border-yellow-700">
              <p className="text-lg font-semibold text-yellow-950 dark:text-yellow-100 mb-4">
                ⚠️ {t('重要提示', 'Important Reminder')}:
              </p>
              <ul className="space-y-2 text-lg text-gray-900 dark:text-gray-100">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-900 dark:text-yellow-200">•</span>
                  <span>
                    {t(
                      '如果有超過 5 項未達標，孩子的健康可能正在受到威脅',
                      'If more than 5 items do not meet standards, your child\'s health may be at risk'
                    )}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-900 dark:text-yellow-200">•</span>
                  <span>
                    {t(
                      '建議立即預約免費兒童房風水與空氣質量專業檢測',
                      'Immediate professional children\'s room feng shui and air quality inspection recommended'
                    )}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-900 dark:text-yellow-200">•</span>
                  <span>
                    {t(
                      '我們的專家將為您提供詳細報告和改善方案',
                      'Our experts will provide you with a detailed report and improvement plan'
                    )}
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* Conclusion & CTA */}
          <section className="mb-16">
            <div className="bg-gradient-to-br from-accent/10 to-secondary/10 rounded-2xl p-8 border border-accent/20">
              <h2 className="text-3xl font-bold mb-6 text-foreground">
                {t('結論：給孩子一個健康的成長環境', 'Conclusion: Give Your Child a Healthy Growth Environment')}
              </h2>

              <p className="text-lg leading-relaxed mb-6 text-gray-900 dark:text-gray-100">
                {t(
                  '孩子的健康是父母最大的心願。如果您的孩子經常生病、睡眠不好、注意力不集中，請不要再歸咎於「體質弱」，而是要從根本上解決問題——改善兒童房的空氣質量和風水佈局。',
                  'Children\'s health is parents\' greatest wish. If your child is frequently ill, has poor sleep, or difficulty concentrating, don\'t blame it on "weak constitution," but solve the problem fundamentally—improve children\'s room air quality and feng shui layout.'
                )}
              </p>

              <p className="text-lg leading-relaxed mb-6 text-gray-900 dark:text-gray-100">
                {t(
                  '量子風水空氣淨化服務結合了現代科技與傳統智慧，從物質、能量、風水三個層面全方位保護孩子健康。我們已經幫助超過 500 個香港家庭改善了兒童房環境，孩子們的健康狀況都得到了顯著提升。',
                  'Quantum Feng Shui Air Purification Service combines modern technology with traditional wisdom, comprehensively protecting children\'s health from three levels: physical, energy, and feng shui. We have helped over 500 Hong Kong families improve their children\'s room environment, and children\'s health has significantly improved.'
                )}
              </p>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg mt-8">
                <h3 className="text-2xl font-bold mb-4 text-accent text-center">
                  {t('立即行動，守護孩子健康！', 'Act Now, Protect Your Child\'s Health!')}
                </h3>
                <p className="text-lg text-center mb-6">
                  {t(
                    '預約免費兒童房風水與空氣質量專業檢測，讓專家為您的孩子打造最健康的成長環境！',
                    'Book a free professional children\'s room feng shui and air quality inspection, let experts create the healthiest growth environment for your child!'
                  )}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <a className="px-8 py-4 bg-gradient-to-r from-accent to-secondary text-white font-semibold rounded-full hover:shadow-glow transition-all duration-300 text-center">
                      {t('立即預約免費檢測', 'Book Free Inspection Now')}
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
                    {t('了解如何改善睡眠質量，提升免疫力', 'Learn how to improve sleep quality and boost immunity')}
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
              <Link href="/blog/brand-comparison-dyson-philips-xiaomi">
                <a className="bg-gradient-to-br from-section-dark to-muted rounded-xl p-6 border border-border/50 hover:shadow-glow transition-all duration-300">
                  <h4 className="text-lg font-bold mb-2 text-accent">
                    {t('空氣淨化機品牌對比：找到最適合您的', 'Air Purifier Brand Comparison: Find the Best for You')}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {t('Dyson、Philips、小米等品牌風水特性分析', 'Feng shui characteristics analysis of Dyson, Philips, Xiaomi')}
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
