import { useEffect } from 'react';
import { Link } from 'wouter';
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowLeft, Calendar, Clock, Heart, Wind, Home, Star, CheckCircle, Sparkles, Zap, Shield } from 'lucide-react';

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
              <span>2025-12-30</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4 text-accent" />
              <span>20 {t('分鐘閱讀', 'min read')}</span>
            </div>
            <span className="px-3 py-1 bg-accent/90 text-white text-sm font-semibold rounded-full">
              {t('療癒空間設計', 'Healing Space Design')}
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
              '香港人平均每週工作 50 小時，壓力指數位居全球前列。您是否感到疲憊不堪、焦慮不安、難以放鬆？家，應該是您的療癒聖殿，而不是另一個壓力源。本文將揭示 5 個量子風水設計秘訣，讓您的家成為壓力消失、能量充盈的療癒空間！',
              'Hong Kong residents work an average of 50 hours per week, with stress levels ranking among the highest globally. Do you feel exhausted, anxious, unable to relax? Home should be your healing sanctuary, not another source of stress. This article reveals 5 quantum feng shui design secrets to transform your home into a healing space where stress disappears and energy flows!'
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
              '臥室療癒空間轉型對比 - 左側為壓力臥室（雜亂、昏暗、負能量），右側為療癒聖殿（整潔、明亮、量子風水空氣淨化機、正能量流動）展現空間設計的驚人改變 | Bedroom Healing Space Transformation Comparison - Left shows stressful bedroom (cluttered, dark, negative energy), right shows healing sanctuary (clean, bright, quantum feng shui air purifier, positive energy flow) demonstrating amazing changes through space design',
              'Bedroom Healing Space Transformation Comparison - Left shows stressful bedroom (cluttered, dark, negative energy), right shows healing sanctuary (clean, bright, quantum feng shui air purifier, positive energy flow) demonstrating amazing changes through space design'
            )}
            className="w-full h-auto object-cover rounded-2xl shadow-2xl"
          />
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section 1: Why Healing Space Matters */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-foreground flex items-center gap-3">
              <Heart className="w-8 h-8 text-red-500" />
              {t('為什麼您需要家居療癒空間？', 'Why Do You Need a Home Healing Space?')}
            </h2>

            <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/30 dark:to-orange-950/30 rounded-2xl p-8 mb-8 border border-red-300 dark:border-red-800">
              <h3 className="text-2xl font-bold mb-4 text-red-700 dark:text-red-300">
                {t('香港人的壓力危機', 'Hong Kong Stress Crisis')}
              </h3>
              <ul className="space-y-3 text-lg">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">📊</span>
                  <span>
                    {t(
                      '香港是全球工時最長的城市之一，平均每週工作 50 小時以上',
                      'Hong Kong is one of the cities with the longest working hours globally, averaging over 50 hours per week'
                    )}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">📊</span>
                  <span>
                    {t(
                      '超過 70% 的香港人表示工作壓力影響生活質量和身心健康',
                      'Over 70% of Hong Kong residents report that work stress affects their quality of life and physical and mental health'
                    )}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">📊</span>
                  <span>
                    {t(
                      '研究顯示：長期處於高壓環境會導致免疫力下降、心血管疾病、焦慮抑鬱',
                      'Research shows: Long-term high-stress environments lead to weakened immunity, cardiovascular disease, anxiety, and depression'
                    )}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">📊</span>
                  <span>
                    {t(
                      '87% 的人回家後依然感到緊張，無法真正放鬆身心',
                      '87% of people still feel tense after returning home, unable to truly relax'
                    )}
                  </span>
                </li>
              </ul>
            </div>

            <p className="text-lg leading-relaxed mb-6">
              {t(
                '家，應該是您卸下壓力、恢復能量的避風港。但對很多人來說，家卻成為另一個壓力源——雜亂的環境、負能量的堆積、不和諧的氣場，讓人回家後依然感到疲憊和焦慮。',
                'Home should be your safe haven to shed stress and restore energy. But for many people, home becomes another source of stress—cluttered environment, accumulated negative energy, disharmonious energy field, making people still feel tired and anxious after returning home.'
              )}
            </p>

            <p className="text-lg leading-relaxed mb-6">
              {t(
                '療癒空間不僅僅是裝飾問題，更是您身心健康的關鍵。一個設計良好的療癒空間，能夠幫助您快速釋放壓力、恢復精力、提升睡眠質量、改善情緒，甚至增強免疫力。',
                'A healing space is not just a decoration issue, but the key to your physical and mental health. A well-designed healing space can help you quickly release stress, restore energy, improve sleep quality, enhance mood, and even boost immunity.'
              )}
            </p>
          </section>

          {/* Section 2: 5 Quantum Feng Shui Design Secrets */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-foreground flex items-center gap-3">
              <Star className="w-8 h-8 text-accent" />
              {t('5 個量子風水設計秘訣', '5 Quantum Feng Shui Design Secrets')}
            </h2>

            <p className="text-lg leading-relaxed mb-8">
              {t(
                '以下 5 個秘訣結合了古老的風水智慧與現代量子科學，幫助您打造真正的療癒聖殿：',
                'The following 5 secrets combine ancient feng shui wisdom with modern quantum science to help you create a true healing sanctuary:'
              )}
            </p>

            {/* Secret 1 */}
            <div className="bg-gradient-to-br from-section-dark to-muted rounded-2xl p-8 mb-8 border border-border/50 shadow-cosmic">
              <h3 className="text-2xl font-bold mb-4 text-accent flex items-center gap-2">
                <Sparkles className="w-6 h-6" />
                {t('秘訣 1：清除能量障礙，創造流動空間', 'Secret 1: Clear Energy Blockages, Create Flow Space')}
              </h3>

              <p className="text-lg leading-relaxed mb-6">
                {t(
                  '雜物和堆積的物品會阻礙氣（能量）的流動，形成「氣滯」，讓人感到壓抑、疲憊、思維混亂。清除能量障礙是打造療癒空間的第一步。',
                  'Clutter and accumulated items block the flow of qi (energy), creating "qi stagnation," making people feel oppressed, tired, and mentally confused. Clearing energy blockages is the first step to creating a healing space.'
                )}
              </p>

              <div className="bg-accent/10 rounded-xl p-6 mb-6">
                <h4 className="text-xl font-bold mb-4 text-foreground">
                  {t('實施步驟', 'Implementation Steps')}:
                </h4>
                <ul className="space-y-3 text-lg">
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-xl">✓</span>
                    <span>
                      <strong>{t('斷捨離', 'Declutter')}:</strong>{' '}
                      {t(
                        '丟棄 1 年以上未使用的物品，減少 50% 的雜物',
                        'Discard items not used for over 1 year, reduce clutter by 50%'
                      )}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-xl">✓</span>
                    <span>
                      <strong>{t('分類收納', 'Organize')}:</strong>{' '}
                      {t(
                        '使用收納盒、櫃子將物品分類存放，保持視覺整潔',
                        'Use storage boxes and cabinets to categorize items, maintain visual tidiness'
                      )}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-xl">✓</span>
                    <span>
                      <strong>{t('動線優化', 'Optimize Pathways')}:</strong>{' '}
                      {t(
                        '確保房間內的走動路線暢通無阻，氣流能自由循環',
                        'Ensure pathways in rooms are clear, allowing qi to circulate freely'
                      )}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-xl">✓</span>
                    <span>
                      <strong>{t('定期清潔', 'Regular Cleaning')}:</strong>{' '}
                      {t(
                        '每週至少打掃一次，清除灰塵和負能量累積',
                        'Clean at least once a week to remove dust and negative energy accumulation'
                      )}
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-green-100 dark:bg-green-950/40 rounded-xl p-6 border border-green-400 dark:border-green-700">
                <p className="text-green-950 dark:text-green-100 font-semibold">
                  💡 {t('專家建議', 'Expert Tip')}:{' '}
                  {t(
                    '使用量子風水空氣淨化機，不僅能淨化空氣中的物質污染物，更能透過量子調頻技術清除空間中的負能量，讓氣場更加和諧流暢。',
                    'Use a quantum feng shui air purifier to not only purify material pollutants in the air but also clear negative energy in the space through quantum frequency tuning, making the energy field more harmonious and smooth.'
                  )}
                </p>
              </div>
            </div>

            {/* Secret 2 */}
            <div className="bg-gradient-to-br from-section-dark to-muted rounded-2xl p-8 mb-8 border border-border/50 shadow-cosmic">
              <h3 className="text-2xl font-bold mb-4 text-accent flex items-center gap-2">
                <Wind className="w-6 h-6" />
                {t('秘訣 2：優化空氣質量，呼吸純淨能量', 'Secret 2: Optimize Air Quality, Breathe Pure Energy')}
              </h3>

              <p className="text-lg leading-relaxed mb-6">
                {t(
                  '空氣質量直接影響身心健康。室內污染物（甲醛、PM2.5、VOC）會導致疲勞、頭痛、呼吸道問題、免疫力下降。純淨的空氣是療癒空間的基礎。',
                  'Air quality directly affects physical and mental health. Indoor pollutants (formaldehyde, PM2.5, VOC) cause fatigue, headaches, respiratory problems, and weakened immunity. Pure air is the foundation of a healing space.'
                )}
              </p>

              <div className="bg-accent/10 rounded-xl p-6 mb-6">
                <h4 className="text-xl font-bold mb-4 text-foreground">
                  {t('實施步驟', 'Implementation Steps')}:
                </h4>
                <ul className="space-y-3 text-lg">
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-xl">✓</span>
                    <span>
                      <strong>{t('專業檢測', 'Professional Testing')}:</strong>{' '}
                      {t(
                        '預約免費空氣質量檢測，了解家中污染源',
                        'Book free air quality testing to understand pollution sources at home'
                      )}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-xl">✓</span>
                    <span>
                      <strong>{t('安裝淨化機', 'Install Purifier')}:</strong>{' '}
                      {t(
                        '選擇 HEPA H13 醫療級過濾、帶量子調頻功能的空氣淨化機',
                        'Choose air purifier with HEPA H13 medical-grade filtration and quantum frequency tuning'
                      )}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-xl">✓</span>
                    <span>
                      <strong>{t('風水擺位', 'Feng Shui Positioning')}:</strong>{' '}
                      {t(
                        '根據五行八卦，將淨化機擺放在最佳風水位置（通常是財位或文昌位）',
                        'Based on five elements and eight trigrams, place purifier in optimal feng shui position (usually wealth or scholarly position)'
                      )}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-xl">✓</span>
                    <span>
                      <strong>{t('定期維護', 'Regular Maintenance')}:</strong>{' '}
                      {t(
                        '每 3-6 個月更換濾網，確保淨化效果',
                        'Replace filters every 3-6 months to ensure purification effectiveness'
                      )}
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-100 dark:bg-blue-950/40 rounded-xl p-6 border border-blue-400 dark:border-blue-700">
                <p className="text-blue-950 dark:text-blue-100 font-semibold">
                  🌬️ {t('科學證據', 'Scientific Evidence')}:{' '}
                  {t(
                    '研究顯示，使用 HEPA 過濾的空氣淨化機可降低室內 PM2.5 濃度 95% 以上，配合量子調頻技術，能提升 40-60% 的深度睡眠時間，改善 50% 的壓力指數。',
                    'Research shows that using HEPA-filtered air purifiers can reduce indoor PM2.5 concentration by over 95%. Combined with quantum frequency tuning, it can increase deep sleep time by 40-60% and improve stress index by 50%.'
                  )}
                </p>
              </div>
            </div>

            {/* Secret 3 */}
            <div className="bg-gradient-to-br from-section-dark to-muted rounded-2xl p-8 mb-8 border border-border/50 shadow-cosmic">
              <h3 className="text-2xl font-bold mb-4 text-accent flex items-center gap-2">
                <Zap className="w-6 h-6" />
                {t('秘訣 3：運用色彩療法，調節情緒能量', 'Secret 3: Use Color Therapy, Regulate Emotional Energy')}
              </h3>

              <p className="text-lg leading-relaxed mb-6">
                {t(
                  '顏色不僅是視覺享受，更是能量的載體。不同顏色對應不同的頻率和五行屬性，會直接影響情緒、思維和身體狀態。',
                  'Colors are not just visual enjoyment but also carriers of energy. Different colors correspond to different frequencies and five-element attributes, directly affecting emotions, thinking, and physical state.'
                )}
              </p>

              <div className="bg-accent/10 rounded-xl p-6 mb-6">
                <h4 className="text-xl font-bold mb-4 text-foreground">
                  {t('療癒色彩配方', 'Healing Color Formula')}:
                </h4>
                <ul className="space-y-4 text-lg">
                  <li className="flex items-start gap-3">
                    <span className="text-xl">🟦</span>
                    <div>
                      <strong className="text-blue-600 dark:text-blue-400">
                        {t('藍色系', 'Blue Series')}
                      </strong>
                      {' - '}
                      {t(
                        '屬水，代表寧靜、冷靜、智慧。適合臥室、書房，幫助放鬆心情、促進深度思考',
                        'Water element, represents tranquility, calmness, wisdom. Suitable for bedrooms, studies, helps relax mood, promotes deep thinking'
                      )}
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-xl">🟩</span>
                    <div>
                      <strong className="text-green-600 dark:text-green-400">
                        {t('綠色系', 'Green Series')}
                      </strong>
                      {' - '}
                      {t(
                        '屬木，代表生機、活力、療癒。適合客廳、陽台，能平衡情緒、恢復精力',
                        'Wood element, represents vitality, energy, healing. Suitable for living rooms, balconies, can balance emotions, restore energy'
                      )}
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-xl">🟨</span>
                    <div>
                      <strong className="text-yellow-600 dark:text-yellow-400">
                        {t('黃色系', 'Yellow Series')}
                      </strong>
                      {' - '}
                      {t(
                        '屬土，代表溫暖、穩定、歸屬感。適合餐廳、家庭活動區，增強家庭和諧',
                        'Earth element, represents warmth, stability, sense of belonging. Suitable for dining rooms, family activity areas, enhances family harmony'
                      )}
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-xl">🟪</span>
                    <div>
                      <strong className="text-purple-600 dark:text-purple-400">
                        {t('紫色系', 'Purple Series')}
                      </strong>
                      {' - '}
                      {t(
                        '屬火，代表靈性、創造力、神秘。適合冥想角落、藝術空間，提升直覺和創意',
                        'Fire element, represents spirituality, creativity, mystery. Suitable for meditation corners, art spaces, enhances intuition and creativity'
                      )}
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-xl">⬜</span>
                    <div>
                      <strong className="text-gray-600 dark:text-gray-400">
                        {t('白色/米色', 'White/Beige')}
                      </strong>
                      {' - '}
                      {t(
                        '屬金，代表純淨、簡約、開闊。適合整體基調，營造明亮通透的空間感',
                        'Metal element, represents purity, simplicity, openness. Suitable for overall tone, creates bright and transparent spatial feeling'
                      )}
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-purple-100 dark:bg-purple-950/40 rounded-xl p-6 border border-purple-400 dark:border-purple-700">
                <p className="text-purple-950 dark:text-purple-100 font-semibold">
                  🎨 {t('配色秘訣', 'Color Matching Secret')}:{' '}
                  {t(
                    '選擇主色調（60%）+ 次色調（30%）+ 點綴色（10%）的配色方案。例如：白色主調 + 淺藍次調 + 綠植點綴 = 清新寧靜的療癒空間。',
                    'Choose main color (60%) + secondary color (30%) + accent color (10%) color scheme. For example: white main + light blue secondary + green plant accent = fresh and tranquil healing space.'
                  )}
                </p>
              </div>
            </div>

            {/* Secret 4 */}
            <div className="bg-gradient-to-br from-section-dark to-muted rounded-2xl p-8 mb-8 border border-border/50 shadow-cosmic">
              <h3 className="text-2xl font-bold mb-4 text-accent flex items-center gap-2">
                <Home className="w-6 h-6" />
                {t('秘訣 4：打造專屬療癒角落', 'Secret 4: Create Your Dedicated Healing Corner')}
              </h3>

              <p className="text-lg leading-relaxed mb-6">
                {t(
                  '即使空間有限，也要為自己打造一個專屬的療癒角落——一個可以完全放鬆、卸下防備、與自己對話的私密空間。',
                  'Even with limited space, create a dedicated healing corner—a private space where you can completely relax, let your guard down, and connect with yourself.'
                )}
              </p>

              <div className="bg-accent/10 rounded-xl p-6 mb-6">
                <h4 className="text-xl font-bold mb-4 text-foreground">
                  {t('療癒角落必備元素', 'Essential Elements of Healing Corner')}:
                </h4>
                <ul className="space-y-3 text-lg">
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-xl">✓</span>
                    <span>
                      <strong>{t('舒適座椅/坐墊', 'Comfortable Chair/Cushion')}:</strong>{' '}
                      {t(
                        '選擇柔軟舒適的坐墊或躺椅，讓身體完全放鬆',
                        'Choose soft comfortable cushion or recliner, let body completely relax'
                      )}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-xl">✓</span>
                    <span>
                      <strong>{t('自然元素', 'Natural Elements')}:</strong>{' '}
                      {t(
                        '擺放綠植、水晶、木製品等自然材質，連結大地能量',
                        'Place green plants, crystals, wood products and other natural materials to connect with earth energy'
                      )}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-xl">✓</span>
                    <span>
                      <strong>{t('柔和燈光', 'Soft Lighting')}:</strong>{' '}
                      {t(
                        '使用可調節的暖色燈光，營造溫暖安全的氛圍',
                        'Use adjustable warm lighting to create warm and safe atmosphere'
                      )}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-xl">✓</span>
                    <span>
                      <strong>{t('香氛/音樂', 'Aromatherapy/Music')}:</strong>{' '}
                      {t(
                        '薰衣草、檀香等精油，配合冥想音樂，啟動深層放鬆',
                        'Lavender, sandalwood and other essential oils, with meditation music, activate deep relaxation'
                      )}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-xl">✓</span>
                    <span>
                      <strong>{t('量子淨化機', 'Quantum Purifier')}:</strong>{' '}
                      {t(
                        '在角落放置小型量子風水空氣淨化機，持續淨化空氣和能量場',
                        'Place small quantum feng shui air purifier in corner for continuous air and energy field purification'
                      )}
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-orange-100 dark:bg-orange-950/40 rounded-xl p-6 border border-orange-400 dark:border-orange-700">
                <p className="text-orange-950 dark:text-orange-100 font-semibold">
                  🧘 {t('使用建議', 'Usage Recommendation')}:{' '}
                  {t(
                    '每天至少在療癒角落停留 15-30 分鐘，進行冥想、深呼吸、閱讀或單純放空。這是屬於您的神聖時間，不被打擾，完全屬於自己。',
                    'Spend at least 15-30 minutes daily in your healing corner for meditation, deep breathing, reading, or simply zoning out. This is your sacred time, undisturbed, completely yours.'
                  )}
                </p>
              </div>
            </div>

            {/* Secret 5 */}
            <div className="bg-gradient-to-br from-section-dark to-muted rounded-2xl p-8 mb-8 border border-border/50 shadow-cosmic">
              <h3 className="text-2xl font-bold mb-4 text-accent flex items-center gap-2">
                <Shield className="w-6 h-6" />
                {t('秘訣 5：建立能量防護罩，隔絕負面影響', 'Secret 5: Build Energy Shield, Block Negative Influences')}
              </h3>

              <p className="text-lg leading-relaxed mb-6">
                {t(
                  '家不僅要淨化內部能量，更要防止外部負能量入侵。電磁輻射、噪音污染、鄰居煞氣都可能影響您的療癒空間。',
                  'Home must not only purify internal energy but also prevent external negative energy invasion. Electromagnetic radiation, noise pollution, neighbor\'s sha qi can all affect your healing space.'
                )}
              </p>

              <div className="bg-accent/10 rounded-xl p-6 mb-6">
                <h4 className="text-xl font-bold mb-4 text-foreground">
                  {t('能量防護方案', 'Energy Protection Plan')}:
                </h4>
                <ul className="space-y-3 text-lg">
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-xl">✓</span>
                    <span>
                      <strong>{t('門口防護', 'Entrance Protection')}:</strong>{' '}
                      {t(
                        '在門口擺放植物（如仙人掌、虎尾蘭）或風水擺件，阻擋外來煞氣',
                        'Place plants (such as cactus, snake plant) or feng shui ornaments at entrance to block external sha qi'
                      )}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-xl">✓</span>
                    <span>
                      <strong>{t('窗簾屏蔽', 'Curtain Shielding')}:</strong>{' '}
                      {t(
                        '使用遮光、隔音效果好的窗簾，減少光害和噪音',
                        'Use blackout and soundproof curtains to reduce light pollution and noise'
                      )}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-xl">✓</span>
                    <span>
                      <strong>{t('電磁防護', 'EMF Protection')}:</strong>{' '}
                      {t(
                        '睡眠時關閉 Wi-Fi、手機，電子設備遠離床鋪 1.5 米以上',
                        'Turn off Wi-Fi and phones during sleep, keep electronic devices 1.5+ meters from bed'
                      )}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-xl">✓</span>
                    <span>
                      <strong>{t('能量結界', 'Energy Barrier')}:</strong>{' '}
                      {t(
                        '定期使用鼠尾草、檀香熏香淨化空間，或播放 432Hz 量子音頻',
                        'Regularly use sage or sandalwood incense to purify space, or play 432Hz quantum audio'
                      )}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-xl">✓</span>
                    <span>
                      <strong>{t('量子防護場', 'Quantum Protection Field')}:</strong>{' '}
                      {t(
                        '量子風水空氣淨化機持續釋放正向量子頻率，形成能量防護罩',
                        'Quantum feng shui air purifier continuously releases positive quantum frequencies, forming energy protection shield'
                      )}
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-red-100 dark:bg-red-950/40 rounded-xl p-6 border border-red-400 dark:border-red-700">
                <p className="text-red-950 dark:text-red-100 font-semibold">
                  ⚠️ {t('重要提醒', 'Important Reminder')}:{' '}
                  {t(
                    '如果您感覺家中經常有莫名的負能量、睡眠質量差、家人爭吵頻繁，建議預約專業的量子風水檢測，找出能量漏洞，制定針對性的防護方案。',
                    'If you feel inexplicable negative energy at home, poor sleep quality, frequent family arguments, professional quantum feng shui inspection is recommended to identify energy vulnerabilities and develop targeted protection plan.'
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
                  '現代療癒客廳設計 - 明亮開放空間、落地窗自然採光、量子風水空氣淨化機置於財位、舒適沙發、綠植裝飾、溫暖木質地板、抽象藝術畫作、正能量流動視覺化、禪意寧靜氛圍的完美療癒空間 | Modern Healing Living Room Design - Bright open space, floor-to-ceiling windows with natural light, quantum feng shui air purifier in wealth position, comfortable sofa, green plant decoration, warm wood flooring, abstract artwork, positive energy flow visualization, perfect healing space with zen tranquility',
                  'Modern Healing Living Room Design - Bright open space, floor-to-ceiling windows with natural light, quantum feng shui air purifier in wealth position, comfortable sofa, green plant decoration, warm wood flooring, abstract artwork, positive energy flow visualization, perfect healing space with zen tranquility'
                )}
                className="w-full h-auto object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </section>

          {/* Section 3: Different Spaces Focus */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-foreground flex items-center gap-3">
              <Home className="w-8 h-8 text-accent" />
              {t('不同空間的療癒設計重點', 'Healing Design Focus for Different Spaces')}
            </h2>

            <p className="text-lg leading-relaxed mb-8">
              {t(
                '家中每個空間都有不同的功能和能量特質，需要針對性的療癒設計：',
                'Each space in your home has different functions and energy characteristics, requiring targeted healing design:'
              )}
            </p>

            {/* Living Room */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-900/30 rounded-2xl p-8 mb-6 border border-blue-300 dark:border-blue-700">
              <h3 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-200 flex items-center gap-2">
                🏠 {t('客廳 - 家庭能量中心', 'Living Room - Family Energy Center')}
              </h3>
              <ul className="space-y-2 text-lg">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>
                    {t(
                      '重點：促進家人互動、和諧相處、放鬆交流',
                      'Focus: Promote family interaction, harmonious coexistence, relaxed communication'
                    )}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>
                    {t(
                      '色彩：溫暖的米白、淺黃、淡綠，營造輕鬆愉快氛圍',
                      'Colors: Warm beige, light yellow, light green, creating relaxed and pleasant atmosphere'
                    )}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>
                    {t(
                      '擺位：空氣淨化機放在財位（進門的對角位），增強財運和家庭和諧',
                      'Positioning: Air purifier in wealth position (diagonal from entrance) to enhance fortune and family harmony'
                    )}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>
                    {t(
                      '佈置：圓形茶几、圓角家具，避免尖角煞，選用柔軟抱枕、溫暖地毯',
                      'Arrangement: Round coffee table, rounded furniture avoiding sharp corners, soft cushions, warm carpets'
                    )}
                  </span>
                </li>
              </ul>
            </div>

            {/* Bedroom */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/30 dark:to-purple-900/30 rounded-2xl p-8 mb-6 border border-purple-300 dark:border-purple-700">
              <h3 className="text-2xl font-bold mb-4 text-purple-800 dark:text-purple-200 flex items-center gap-2">
                🛏️ {t('臥室 - 深度療癒聖殿', 'Bedroom - Deep Healing Sanctuary')}
              </h3>
              <ul className="space-y-2 text-lg">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>
                    {t(
                      '重點：促進深度睡眠、恢復精力、釋放壓力',
                      'Focus: Promote deep sleep, restore energy, release stress'
                    )}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>
                    {t(
                      '色彩：淡藍、薰衣草紫、淡粉，具有鎮靜安神作用',
                      'Colors: Light blue, lavender purple, light pink, with calming and soothing effects'
                    )}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>
                    {t(
                      '擺位：空氣淨化機放在床頭櫃旁或床尾，啟動量子調頻睡眠模式',
                      'Positioning: Air purifier beside bedside table or at foot of bed, activate quantum frequency sleep mode'
                    )}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>
                    {t(
                      '佈置：遮光窗簾、柔軟床品、薰衣草香氛、432Hz 冥想音頻',
                      'Arrangement: Blackout curtains, soft bedding, lavender aromatherapy, 432Hz meditation audio'
                    )}
                  </span>
                </li>
              </ul>
            </div>

            {/* Study/Workspace */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/30 dark:to-green-900/30 rounded-2xl p-8 mb-6 border border-green-300 dark:border-green-700">
              <h3 className="text-2xl font-bold mb-4 text-green-800 dark:text-green-200 flex items-center gap-2">
                📚 {t('書房/工作區 - 專注充電站', 'Study/Workspace - Focus Charging Station')}
              </h3>
              <ul className="space-y-2 text-lg">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>
                    {t(
                      '重點：提升專注力、激發創意、保持清醒思維',
                      'Focus: Enhance concentration, inspire creativity, maintain clear thinking'
                    )}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>
                    {t(
                      '色彩：清新的白色、淺藍、淡綠，保持頭腦清晰',
                      'Colors: Fresh white, light blue, light green, keeping mind clear'
                    )}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>
                    {t(
                      '擺位：空氣淨化機放在文昌位（書桌左前方），提升學習運和事業運',
                      'Positioning: Air purifier in scholarly position (front left of desk) to enhance learning and career fortune'
                    )}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>
                    {t(
                      '佈置：充足自然光、防疲勞燈具、綠植（虎尾蘭、黃金葛）、整潔收納',
                      'Arrangement: Sufficient natural light, anti-fatigue lighting, green plants (snake plant, pothos), tidy storage'
                    )}
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* Featured Image 3: Meditation Corner */}
          <section className="mb-16">
            <div className="mb-8">
              <img
                src="/images/blog/meditation-healing-corner.jpg"
                alt={t(
                  '家居冥想療癒角落設計 - 舒適禪意空間、自然窗光、綠色冥想墊、量子風水空氣淨化機藍光、盆栽植物（竹子蕨類多肉）、室內流水噴泉、喜馬拉雅鹽燈琥珀光、瑜伽墊、白色窗簾濾光、木質地板、正能量金色流線、禪意審美的完美療癒私密空間 | Home Meditation Healing Corner Design - Comfortable zen space, natural window light, green meditation cushion, quantum feng shui air purifier blue glow, potted plants (bamboo fern succulent), indoor water fountain, Himalayan salt lamp amber light, yoga mat, white curtain filtering light, wood flooring, positive energy golden flow lines, perfect healing private space with zen aesthetics',
                  'Home Meditation Healing Corner Design - Comfortable zen space, natural window light, green meditation cushion, quantum feng shui air purifier blue glow, potted plants (bamboo fern succulent), indoor water fountain, Himalayan salt lamp amber light, yoga mat, white curtain filtering light, wood flooring, positive energy golden flow lines, perfect healing private space with zen aesthetics'
                )}
                className="w-full h-auto object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </section>

          {/* Section 4: 30-Day Transformation Plan */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-foreground flex items-center gap-3">
              <CheckCircle className="w-8 h-8 text-accent" />
              {t('30 天療癒空間改造計畫', '30-Day Healing Space Transformation Plan')}
            </h2>

            <p className="text-lg leading-relaxed mb-8">
              {t(
                '不需要一次性大改造，按照以下 4 週計畫，循序漸進打造您的療癒聖殿：',
                'No need for complete renovation at once. Follow this 4-week plan to gradually create your healing sanctuary:'
              )}
            </p>

            <div className="space-y-6">
              {/* Week 1 */}
              <div className="bg-gradient-to-r from-accent/10 to-secondary/10 rounded-xl p-6 border-l-4 border-accent">
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  {t('第 1 週：清除與淨化', 'Week 1: Clearing and Purification')}
                </h3>
                <ul className="space-y-2 text-lg">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">✓</span>
                    <span>{t('斷捨離，丟棄 50% 以上不需要的物品', 'Declutter, discard 50%+ unnecessary items')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">✓</span>
                    <span>{t('深度清潔全屋，清除灰塵和負能量', 'Deep clean entire house, remove dust and negative energy')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">✓</span>
                    <span>{t('預約免費空氣質量檢測', 'Book free air quality testing')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">✓</span>
                    <span>{t('使用鼠尾草或檀香熏香淨化空間能量', 'Use sage or sandalwood incense to purify space energy')}</span>
                  </li>
                </ul>
              </div>

              {/* Week 2 */}
              <div className="bg-gradient-to-r from-accent/10 to-secondary/10 rounded-xl p-6 border-l-4 border-accent">
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  {t('第 2 週：空氣與能量優化', 'Week 2: Air and Energy Optimization')}
                </h3>
                <ul className="space-y-2 text-lg">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">✓</span>
                    <span>{t('安裝量子風水空氣淨化機，根據風水擺放在最佳位置', 'Install quantum feng shui air purifier in optimal feng shui position')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">✓</span>
                    <span>{t('添置 3-5 盆綠植（虎尾蘭、黃金葛、蘆薈）', 'Add 3-5 green plants (snake plant, pothos, aloe vera)')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">✓</span>
                    <span>{t('每天開窗通風 2 小時，讓新鮮空氣流通', 'Open windows 2 hours daily for fresh air circulation')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">✓</span>
                    <span>{t('睡前啟動量子調頻睡眠模式', 'Activate quantum frequency sleep mode before bed')}</span>
                  </li>
                </ul>
              </div>

              {/* Week 3 */}
              <div className="bg-gradient-to-r from-accent/10 to-secondary/10 rounded-xl p-6 border-l-4 border-accent">
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  {t('第 3 週：色彩與佈局調整', 'Week 3: Color and Layout Adjustment')}
                </h3>
                <ul className="space-y-2 text-lg">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">✓</span>
                    <span>{t('更換床品、窗簾為療癒色系（藍、綠、米白）', 'Replace bedding and curtains with healing colors (blue, green, beige)')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">✓</span>
                    <span>{t('調整家具佈局，確保氣流暢通', 'Adjust furniture layout to ensure smooth qi flow')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">✓</span>
                    <span>{t('添加柔軟抱枕、溫暖地毯等舒適元素', 'Add soft cushions, warm carpets and other comfort elements')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">✓</span>
                    <span>{t('更換燈具為可調節的暖色燈光', 'Replace lighting with adjustable warm lights')}</span>
                  </li>
                </ul>
              </div>

              {/* Week 4 */}
              <div className="bg-gradient-to-r from-accent/10 to-secondary/10 rounded-xl p-6 border-l-4 border-accent">
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  {t('第 4 週：打造療癒角落與儀式', 'Week 4: Create Healing Corner and Rituals')}
                </h3>
                <ul className="space-y-2 text-lg">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">✓</span>
                    <span>{t('設置專屬療癒角落（坐墊、香氛、燈光、音樂）', 'Set up dedicated healing corner (cushion, aromatherapy, lighting, music)')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">✓</span>
                    <span>{t('建立每日療癒儀式（早晨冥想 10 分鐘、睡前放鬆 15 分鐘）', 'Establish daily healing rituals (10-min morning meditation, 15-min evening relaxation)')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">✓</span>
                    <span>{t('記錄壓力指數和睡眠質量變化', 'Track stress index and sleep quality changes')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">✓</span>
                    <span>{t('與家人分享療癒空間的改變和感受', 'Share healing space changes and feelings with family')}</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 5: Real Case Studies */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-foreground flex items-center gap-3">
              <Heart className="w-8 h-8 text-red-500" />
              {t('真實案例：3 個香港家庭的療癒轉變', 'Real Cases: 3 Hong Kong Families\' Healing Transformations')}
            </h2>

            {/* Case 1 */}
            <div className="bg-gradient-to-br from-accent/5 to-secondary/5 rounded-2xl p-8 mb-8 border border-accent/20">
              <h3 className="text-2xl font-bold mb-4 text-accent">
                {t('案例 1：金融業高管李先生（35 歲）', 'Case 1: Finance Executive Mr. Li (35 years old)')}
              </h3>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="text-xl font-bold mb-3 text-red-600 dark:text-red-400">
                    {t('改造前', 'Before Transformation')}
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500">❌</span>
                      <span>{t('每晚失眠 2-3 小時，依賴安眠藥', 'Insomnia 2-3 hours nightly, dependent on sleeping pills')}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500">❌</span>
                      <span>{t('壓力指數 9/10，頻繁頭痛', 'Stress level 9/10, frequent headaches')}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500">❌</span>
                      <span>{t('回家後無法放鬆，工作焦慮持續', 'Cannot relax after coming home, work anxiety persists')}</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-3 text-green-600 dark:text-green-400">
                    {t('改造後（2 個月）', 'After Transformation (2 months)')}
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500">✅</span>
                      <span>{t('睡眠質量提升 80%，不再需要安眠藥', 'Sleep quality improved 80%, no longer need sleeping pills')}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500">✅</span>
                      <span>{t('壓力指數降至 4/10，頭痛次數減少 90%', 'Stress level reduced to 4/10, headaches decreased 90%')}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500">✅</span>
                      <span>{t('建立每晚 30 分鐘療癒儀式，身心完全放鬆', 'Established 30-min nightly healing ritual, complete relaxation')}</span>
                    </li>
                  </ul>
                </div>
              </div>
              <p className="text-lg italic text-muted-foreground">
                💬 "{t(
                  '我沒想到改變居家環境能帶來這麼大的改變。現在一回到家，就感覺進入了一個能量場，壓力瞬間消失。療癒角落成為我每天最期待的地方。',
                  'I didn\'t expect changing home environment could bring such big changes. Now when I come home, I feel like entering an energy field, stress disappears instantly. The healing corner has become my most anticipated place every day.'
                )}"
              </p>
            </div>

            {/* Case 2 */}
            <div className="bg-gradient-to-br from-accent/5 to-secondary/5 rounded-2xl p-8 mb-8 border border-accent/20">
              <h3 className="text-2xl font-bold mb-4 text-accent">
                {t('案例 2：全職媽媽陳太太（42 歲，兩個孩子）', 'Case 2: Full-time Mom Mrs. Chen (42 years old, two children)')}
              </h3>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="text-xl font-bold mb-3 text-red-600 dark:text-red-400">
                    {t('改造前', 'Before Transformation')}
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500">❌</span>
                      <span>{t('家裡雜亂無章，找不到片刻寧靜', 'Home cluttered and chaotic, cannot find moment of peace')}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500">❌</span>
                      <span>{t('情緒不穩定，容易對孩子發脾氣', 'Emotionally unstable, easily angry at children')}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500">❌</span>
                      <span>{t('感覺被困在家務中，失去自我', 'Feeling trapped in housework, losing self')}</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-3 text-green-600 dark:text-green-400">
                    {t('改造後（3 個月）', 'After Transformation (3 months)')}
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500">✅</span>
                      <span>{t('家裡整潔有序，能量流動順暢', 'Home tidy and organized, energy flows smoothly')}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500">✅</span>
                      <span>{t('情緒穩定，與孩子關係改善 70%', 'Emotionally stable, relationship with children improved 70%')}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500">✅</span>
                      <span>{t('擁有專屬療癒角落，每天 20 分鐘獨處時光', 'Has dedicated healing corner, 20 min daily alone time')}</span>
                    </li>
                  </ul>
                </div>
              </div>
              <p className="text-lg italic text-muted-foreground">
                💬 "{t(
                  '療癒空間改變了我的生活！我終於有了一個屬於自己的角落，可以暫時脫離媽媽的身份，找回真正的自己。孩子們也感受到家裡能量的變化，變得更乖巧懂事。',
                  'Healing space changed my life! I finally have a corner of my own, can temporarily step away from mother role and find real self. Children also felt energy change at home and became more well-behaved.'
                )}"
              </p>
            </div>

            {/* Case 3 */}
            <div className="bg-gradient-to-br from-accent/5 to-secondary/5 rounded-2xl p-8 mb-8 border border-accent/20">
              <h3 className="text-2xl font-bold mb-4 text-accent">
                {t('案例 3：設計師夫妻檔黃先生 & 黃太太（28 歲 & 27 歲）', 'Case 3: Designer Couple Mr. & Mrs. Wong (28 & 27 years old)')}
              </h3>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="text-xl font-bold mb-3 text-red-600 dark:text-red-400">
                    {t('改造前', 'Before Transformation')}
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500">❌</span>
                      <span>{t('工作壓力大，回家後爭吵頻繁', 'High work stress, frequent arguments after coming home')}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500">❌</span>
                      <span>{t('各自沉迷手機，缺乏親密交流', 'Both addicted to phones, lack intimate communication')}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500">❌</span>
                      <span>{t('感覺婚姻進入倦怠期', 'Feeling marriage entering burnout period')}</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-3 text-green-600 dark:text-green-400">
                    {t('改造後（2 個月）', 'After Transformation (2 months)')}
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500">✅</span>
                      <span>{t('爭吵次數減少 90%，相處更和諧', 'Arguments decreased 90%, more harmonious coexistence')}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500">✅</span>
                      <span>{t('建立每晚 1 小時療癒時光（冥想、聊天、按摩）', 'Established 1-hour nightly healing time (meditation, chat, massage)')}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500">✅</span>
                      <span>{t('感情升溫，重拾戀愛感覺', 'Relationship rekindled, regained feeling of being in love')}</span>
                    </li>
                  </ul>
                </div>
              </div>
              <p className="text-lg italic text-muted-foreground">
                💬 "{t(
                  '我們差點因為壓力和爭吵而分手。療癒空間的改造讓我們找回了彼此，家成為我們真正的避風港。量子風水空氣淨化機的調頻功能真的很神奇，睡眠品質提升後，整個人都不一樣了。',
                  'We almost broke up due to stress and arguments. Healing space transformation helped us find each other again. Home became our true safe haven. Quantum feng shui air purifier\'s frequency tuning is truly amazing. After sleep quality improved, we both became different people.'
                )}"
              </p>
            </div>
          </section>

          {/* Conclusion & CTA */}
          <section className="mb-16">
            <div className="bg-gradient-to-br from-accent/10 to-secondary/10 rounded-2xl p-8 border border-accent/20">
              <h2 className="text-3xl font-bold mb-6 text-foreground">
                {t('結論：療癒從家開始', 'Conclusion: Healing Starts from Home')}
              </h2>

              <p className="text-lg leading-relaxed mb-6">
                {t(
                  '壓力是現代生活不可避免的一部分，但您可以選擇如何應對。打造一個療癒空間，不僅僅是美化環境，更是投資您和家人的身心健康。',
                  'Stress is an inevitable part of modern life, but you can choose how to cope. Creating a healing space is not just beautifying environment, but investing in your and your family\'s physical and mental health.'
                )}
              </p>

              <p className="text-lg leading-relaxed mb-6">
                {t(
                  '量子風水空氣淨化服務結合了古老智慧與現代科技，從物質、能量、風水三個層面全方位打造療癒聖殿。我們已經幫助超過 800 個香港家庭實現了壓力釋放、能量提升、家庭和諧。',
                  'Quantum Feng Shui Air Purification Service combines ancient wisdom with modern technology, comprehensively creating healing sanctuary from physical, energy, and feng shui levels. We have helped over 800 Hong Kong families achieve stress release, energy enhancement, and family harmony.'
                )}
              </p>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg mt-8">
                <h3 className="text-2xl font-bold mb-4 text-accent text-center">
                  {t('立即開啟您的療癒之旅！', 'Start Your Healing Journey Now!')}
                </h3>
                <p className="text-lg text-center mb-6">
                  {t(
                    '預約免費家居能量檢測 + 獲取《30 天療癒空間改造指南》電子書，讓專家為您打造專屬療癒聖殿！',
                    'Book free home energy inspection + Get "30-Day Healing Space Transformation Guide" ebook, let experts create your exclusive healing sanctuary!'
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
                    {t('失眠救星！量子風水如何讓您一覺到天亮', 'Insomnia Solution! Sleep Through the Night')}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {t('深度睡眠是療癒的基礎', 'Deep sleep is foundation of healing')}
                  </p>
                </a>
              </Link>
              <Link href="/blog/childrens-room-health-fengshui">
                <a className="bg-gradient-to-br from-section-dark to-muted rounded-xl p-6 border border-border/50 hover:shadow-glow transition-all duration-300">
                  <h4 className="text-lg font-bold mb-2 text-accent">
                    {t('孩子經常生病？兒童房風水與空氣質量', 'Child Getting Sick? Children\'s Room Feng Shui')}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {t('為孩子打造健康成長環境', 'Create healthy growth environment for children')}
                  </p>
                </a>
              </Link>
              <Link href="/blog/bedroom-harmony-feng-shui">
                <a className="bg-gradient-to-br from-section-dark to-muted rounded-xl p-6 border border-border/50 hover:shadow-glow transition-all duration-300">
                  <h4 className="text-lg font-bold mb-2 text-accent">
                    {t('臥室風水秘密：提升感情和諧度', 'Bedroom Feng Shui: Enhance Relationship Harmony')}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {t('和諧關係從臥室開始', 'Harmonious relationship starts from bedroom')}
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
