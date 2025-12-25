import { useLanguage } from '../contexts/LanguageContext';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'wouter';

export default function BedroomHarmonyArticle() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      {/* 返回博客列表按鈕 */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link href="/blog">
          <a className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span>{t('返回博客列表', 'Back to Blog')}</span>
          </a>
        </Link>
      </div>

      {/* 文章頭部 */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 文章標題與元數據 */}
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            {t('夫妻臥室的量子風水秘密：如何用空氣淨化提升感情和諧度', 'Quantum Feng Shui Secrets for Couple\'s Bedroom: Enhance Relationship Harmony with Air Purification')}
          </h1>
          <div className="flex items-center justify-center gap-6 text-muted-foreground">
            <span>{t('發布日期：2026-02-10', 'Published: 2026-02-10')}</span>
            <span>•</span>
            <span>{t('閱讀時間：9 分鐘', 'Read time: 9 min')}</span>
            <span>•</span>
            <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-semibold">
              {t('關係和諧', 'Relationship Harmony')}
            </span>
          </div>
        </header>

        {/* 文章內容 */}
        <div className="prose prose-lg prose-invert max-w-none">
          {/* 引言 */}
          <section className="mb-12">
            <p className="text-xl leading-relaxed text-muted-foreground">
              {t(
                '臥室不僅是休息的場所，更是夫妻感情能量交融的核心空間。許多夫妻在臥室內頻繁爭吵、溝通不暢，甚至感情逐漸冷淡，卻不知道問題的根源可能在於臥室的「能量場失衡」。從量子風水的角度，空氣淨化機的正確擺位與量子調頻，能有效提升臥室的「感情頻率」，讓愛與和諧重新流動。',
                'The bedroom is not just a place for rest, but the core space where couple\'s emotional energy merges. Many couples frequently argue in the bedroom, have poor communication, or even grow emotionally distant, without realizing the root cause may be the "energy field imbalance" in the bedroom. From the quantum feng shui perspective, proper placement and quantum frequency tuning of air purifiers can effectively enhance the bedroom\'s "emotional frequency," allowing love and harmony to flow again.'
              )}
            </p>
          </section>

          {/* 封面圖片 - 置於引言之後 */}
          <div className="mb-12 rounded-2xl overflow-hidden shadow-cosmic">
            <img
              src="/images/blog/bedroom-harmony-cover.jpg"
              alt={t('夫妻臥室的量子風水秘密', 'Quantum Feng Shui Secrets for Couple\'s Bedroom')}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* 第一部分：臥室能量場與感情的關係 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-accent">
              {t('一、臥室能量場與感情的深層關係', '1. The Deep Connection Between Bedroom Energy Field and Relationships')}
            </h2>
            
            <h3 className="text-2xl font-semibold mb-4 text-primary">
              {t('1.1 為什麼夫妻總在臥室爭吵？', '1.1 Why Do Couples Always Argue in the Bedroom?')}
            </h3>
            <p>
              {t(
                '臥室是夫妻共處時間最長的私密空間，也是兩人能量場交匯最頻繁的地方。如果臥室的能量場混亂、氣流不暢，會導致雙方情緒容易波動、溝通不順暢。根據量子風水理論，混亂的能量場會放大負面情緒，讓小矛盾演變成大爭吵。',
                'The bedroom is the private space where couples spend the most time together, and where their energy fields intersect most frequently. If the bedroom\'s energy field is chaotic and airflow is stagnant, it can cause emotional fluctuations and poor communication between partners. According to quantum feng shui theory, a chaotic energy field amplifies negative emotions, turning small conflicts into major arguments.'
              )}
            </p>

            <h3 className="text-2xl font-semibold mb-4 mt-8 text-primary">
              {t('1.2 睡眠品質如何影響感情和諧度？', '1.2 How Does Sleep Quality Affect Relationship Harmony?')}
            </h3>
            <p>
              {t(
                '睡眠不足或睡眠品質差，會導致情緒失控、耐心降低，進而影響夫妻間的互動品質。量子風水強調，良好的臥室能量場能提升睡眠深度，讓雙方在休息中自然修復感情能量。當兩人都休息充足時，自然更有耐心和愛心對待彼此。',
                'Insufficient or poor-quality sleep can lead to emotional instability and reduced patience, affecting the quality of interaction between couples. Quantum feng shui emphasizes that a good bedroom energy field can enhance sleep depth, allowing both partners to naturally restore emotional energy during rest. When both are well-rested, they naturally have more patience and love for each other.'
              )}
            </p>

            <h3 className="text-2xl font-semibold mb-4 mt-8 text-primary">
              {t('1.3 看不見的「感情殺手」：電磁波與負能量', '1.3 Invisible "Relationship Killers": Electromagnetic Waves and Negative Energy')}
            </h3>
            <p>
              {t(
                '現代臥室充斥著電視、手機充電器、Wi-Fi 路由器等電子設備，這些設備持續發射電磁波，干擾人體的生物電場，也破壞了臥室的「感情頻率」。此外，如果床下堆積雜物、鏡子對著床、或臥室長期不通風，都會累積負能量，成為感情和諧的隱形障礙。',
                'Modern bedrooms are filled with electronic devices like TVs, phone chargers, and Wi-Fi routers that continuously emit electromagnetic waves, interfering with the body\'s bioelectric field and disrupting the bedroom\'s "emotional frequency." Additionally, if clutter accumulates under the bed, mirrors face the bed, or the bedroom lacks ventilation, negative energy accumulates, becoming an invisible obstacle to relationship harmony.'
              )}
            </p>
          </section>

          {/* 第二部分：夫妻臥室的 6 大風水禁忌 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-accent">
              {t('二、夫妻臥室的 6 大風水禁忌', '2. Six Major Feng Shui Taboos in Couple\'s Bedrooms')}
            </h2>

            <div className="space-y-6">
              <div className="p-6 bg-section-dark rounded-xl border border-border/50">
                <h3 className="text-xl font-semibold mb-3 text-primary">
                  {t('禁忌 1：床頭對廁所 → 感情易受「污穢之氣」影響', 'Taboo 1: Bed Headboard Facing Toilet → Relationship Affected by "Polluted Qi"')}
                </h3>
                <p className="text-muted-foreground">
                  {t(
                    '廁所屬於「污穢之地」，若床頭對著廁所門，污穢之氣會直衝臥室，影響夫妻感情的純淨度。建議調整床位，或在廁所門口掛上門簾阻擋。',
                    'The toilet is a place of "impure qi." If the bed headboard faces the toilet door, impure qi will rush into the bedroom, affecting the purity of the couple\'s relationship. It\'s recommended to adjust the bed position or hang a curtain at the toilet door to block it.'
                  )}
                </p>
              </div>

              <div className="p-6 bg-section-dark rounded-xl border border-border/50">
                <h3 className="text-xl font-semibold mb-3 text-primary">
                  {t('禁忌 2：鏡子對床 → 導致第三者介入', 'Taboo 2: Mirror Facing Bed → May Lead to Third-Party Interference')}
                </h3>
                <p className="text-muted-foreground">
                  {t(
                    '鏡子會反射能量，若正對床鋪，會造成能量混亂，甚至引發「桃花劫」（第三者問題）。應避免鏡子直接照到床，或在睡前用布遮蓋。',
                    'Mirrors reflect energy. If directly facing the bed, they can cause energy chaos and even trigger "peach blossom calamity" (third-party problems). Avoid having mirrors directly face the bed, or cover them with cloth before sleep.'
                  )}
                </p>
              </div>

              <div className="p-6 bg-section-dark rounded-xl border border-border/50">
                <h3 className="text-xl font-semibold mb-3 text-primary">
                  {t('禁忌 3：床下雜物堆積 → 阻礙「桃花氣」流動', 'Taboo 3: Clutter Under Bed → Blocks "Peach Blossom Qi" Flow')}
                </h3>
                <p className="text-muted-foreground">
                  {t(
                    '床下應保持空曠，讓氣流自然流通。若堆積舊物、雜物，會阻礙感情能量的流動，導致感情停滯不前。建議定期清理床下空間。',
                    'The space under the bed should be kept clear to allow natural airflow. If old items and clutter accumulate, they will block the flow of emotional energy, causing relationship stagnation. Regular cleaning under the bed is recommended.'
                  )}
                </p>
              </div>

              <div className="p-6 bg-section-dark rounded-xl border border-border/50">
                <h3 className="text-xl font-semibold mb-3 text-primary">
                  {t('禁忌 4：空氣淨化機擺放不當 → 反而加劇爭吵', 'Taboo 4: Improper Air Purifier Placement → May Worsen Arguments')}
                </h3>
                <p className="text-muted-foreground">
                  {t(
                    '空氣淨化機若放在夫妻床的正中間（兩人之間），會形成「氣場分割」，導致雙方心理距離拉遠。正確擺法應放在臥室的「桃花位」或「婚姻位」。',
                    'If the air purifier is placed directly between the couple in the middle of the bed, it creates an "energy field division," causing psychological distance. The correct placement should be at the bedroom\'s "peach blossom position" or "marriage position."'
                  )}
                </p>
              </div>

              <div className="p-6 bg-section-dark rounded-xl border border-border/50">
                <h3 className="text-xl font-semibold mb-3 text-primary">
                  {t('禁忌 5：臥室電器過多 → 電磁波干擾感情頻率', 'Taboo 5: Too Many Electronics in Bedroom → Electromagnetic Interference')}
                </h3>
                <p className="text-muted-foreground">
                  {t(
                    '電視、電腦、手機充電器等電器應盡量減少。這些設備的電磁波會干擾人體的生物電場，也會破壞臥室的「感情頻率」，導致情緒不穩定。',
                    'Electronics like TVs, computers, and phone chargers should be minimized. The electromagnetic waves from these devices interfere with the body\'s bioelectric field and disrupt the bedroom\'s "emotional frequency," causing emotional instability.'
                  )}
                </p>
              </div>

              <div className="p-6 bg-section-dark rounded-xl border border-border/50">
                <h3 className="text-xl font-semibold mb-3 text-primary">
                  {t('禁忌 6：窗戶長期緊閉 → 能量淤積，溝通不暢', 'Taboo 6: Windows Kept Closed → Energy Stagnation, Poor Communication')}
                </h3>
                <p className="text-muted-foreground">
                  {t(
                    '臥室需要定期通風換氣，否則「舊氣」會累積，導致夫妻溝通不暢、心情壓抑。建議每天開窗至少 15-30 分鐘，讓新鮮空氣帶來新的活力。',
                    'The bedroom needs regular ventilation, otherwise "stale qi" accumulates, causing poor communication and depressed mood between couples. It\'s recommended to open windows for at least 15-30 minutes daily to bring fresh air and new vitality.'
                  )}
                </p>
              </div>
            </div>
          </section>

          {/* 圖片 1：臥室空氣淨化機的風水擺位示意圖 */}
          <div className="my-12">
            <img
              src="/images/blog/bedroom-placement-diagram.jpg"
              alt={t('臥室空氣淨化機的風水擺位示意圖', 'Feng Shui Placement Diagram for Bedroom Air Purifier')}
              className="w-full h-auto rounded-2xl shadow-cosmic"
            />
            <p className="text-center text-sm text-muted-foreground mt-4">
              {t('▲ 臥室空氣淨化機的風水擺位示意圖：最佳位置在「桃花位」與「婚姻位」', '▲ Feng Shui Placement Diagram: Optimal positions at "Peach Blossom Position" and "Marriage Position"')}
            </p>
          </div>

          {/* 第三部分：空氣淨化機的「和諧擺位法」 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-accent">
              {t('三、空氣淨化機的「和諧擺位法」', '3. The "Harmony Placement Method" for Air Purifiers')}
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-primary">
                  {t('3.1 最佳位置：臥室「桃花位」或「婚姻位」', '3.1 Best Position: Bedroom "Peach Blossom Position" or "Marriage Position"')}
                </h3>
                <p>
                  {t(
                    '根據八宅風水理論，每個臥室都有特定的「桃花位」（增進感情、桃花運）和「婚姻位」（穩固婚姻、家庭和諧）。將空氣淨化機放置在這些位置，配合量子調頻技術，能最大化提升臥室的「感情頻率」。',
                    'According to Eight Mansions Feng Shui theory, each bedroom has specific "Peach Blossom Position" (enhances romance and relationships) and "Marriage Position" (stabilizes marriage and family harmony). Placing the air purifier at these positions, combined with quantum frequency tuning, can maximize the enhancement of the bedroom\'s "emotional frequency."'
                  )}
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4 ml-4 text-muted-foreground">
                  <li><strong>{t('桃花位', 'Peach Blossom Position')}：</strong>{t('通常位於床的右側（以躺在床上為準），適合想增進感情甜蜜度的夫妻', 'Usually located on the right side of the bed (from lying position), suitable for couples wanting to enhance relationship sweetness')}</li>
                  <li><strong>{t('婚姻位', 'Marriage Position')}：</strong>{t('通常位於臥室的西南方，適合想穩固婚姻、化解矛盾的夫妻', 'Usually located in the southwest of the bedroom, suitable for couples wanting to stabilize marriage and resolve conflicts')}</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-primary">
                  {t('3.2 避免位置：絕不能放在這些地方', '3.2 Positions to Avoid: Never Place Here')}
                </h3>
                <ul className="list-disc list-inside space-y-2 ml-4 text-muted-foreground">
                  <li><strong>{t('床頭正對面', 'Directly Facing Bed Headboard')}：</strong>{t('氣流直衝會影響睡眠品質，也會讓感情「衝散」', 'Direct airflow impacts sleep quality and may "scatter" the relationship')}</li>
                  <li><strong>{t('夫妻中間', 'Between Couple')}：</strong>{t('會形成「氣場分割」，導致心理距離拉遠', 'Creates "energy field division," causing psychological distance')}</li>
                  <li><strong>{t('鏡子旁邊', 'Next to Mirror')}：</strong>{t('能量會被鏡子反射，無法有效淨化', 'Energy will be reflected by mirror, ineffective purification')}</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-primary">
                  {t('3.3 高度建議：與床面同高或稍低', '3.3 Height Recommendation: Level with or Slightly Below Bed')}
                </h3>
                <p>
                  {t(
                    '空氣淨化機的高度應與床面持平，或稍微低於床面。這樣能讓淨化後的空氣自然上升，均勻覆蓋整個臥室空間，同時避免氣流過強導致的「沖煞」問題。',
                    'The air purifier\'s height should be level with or slightly below the bed. This allows purified air to naturally rise and evenly cover the entire bedroom space, while avoiding "rushing sha" problems caused by strong airflow.'
                  )}
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-primary">
                  {t('3.4 運行時機：睡前 1 小時開啟，睡眠時低速運行', '3.4 Operating Timing: Turn on 1 Hour Before Sleep, Low Speed During Sleep')}
                </h3>
                <p>
                  {t(
                    '建議在睡前 1 小時開啟空氣淨化機（高速模式），快速淨化臥室空氣。進入睡眠後，切換至低速或靜音模式，既保持空氣品質，又不影響睡眠。量子調頻功能則可在睡眠時持續運行，優化臥室能量場。',
                    'It\'s recommended to turn on the air purifier 1 hour before sleep (high-speed mode) to quickly purify bedroom air. After entering sleep, switch to low-speed or silent mode to maintain air quality without affecting sleep. Quantum frequency tuning can continue operating during sleep to optimize the bedroom energy field.'
                  )}
                </p>
              </div>
            </div>
          </section>

          {/* 第四部分：量子調頻的「感情頻率」優化 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-accent">
              {t('四、量子調頻的「感情頻率」優化', '4. Quantum Frequency Tuning for "Emotional Frequency" Optimization')}
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-primary">
                  {t('4.1 什麼是「感情頻率」？', '4.1 What is "Emotional Frequency"?')}
                </h3>
                <p>
                  {t(
                    '從量子物理學的角度，一切物質（包括情感）都是能量的振動。夫妻之間的感情也有特定的「振動頻率」，當兩人頻率和諧一致時，溝通順暢、感情甜蜜；當頻率不協調時，就會產生摩擦、爭吵。量子調頻技術能調整臥室的能量場，讓夫妻的「感情頻率」重新同步。',
                    'From a quantum physics perspective, everything (including emotions) is energy vibration. The relationship between couples also has a specific "vibration frequency." When both frequencies are harmonious, communication is smooth and the relationship is sweet; when frequencies are discordant, friction and arguments arise. Quantum frequency tuning technology can adjust the bedroom\'s energy field to resynchronize the couple\'s "emotional frequency."'
                  )}
                </p>
              </div>

              <div className="p-6 bg-gradient-to-br from-accent/10 to-primary/10 rounded-xl border border-accent/30">
                <h3 className="text-2xl font-semibold mb-4 text-accent">
                  {t('4.2 專用頻率：432 Hz（愛與和諧的頻率）', '4.2 Dedicated Frequency: 432 Hz (Frequency of Love and Harmony)')}
                </h3>
                <p>
                  {t(
                    '432 Hz 被稱為「宇宙的頻率」，能與人體的生物電場產生共振，促進愛與和諧。量子風水空氣淨化服務會在空氣淨化機內置量子芯片，持續發射 432 Hz 的能量波，調節臥室的「感情頻率」。',
                    '432 Hz is called the "frequency of the universe," capable of resonating with the body\'s bioelectric field to promote love and harmony. Quantum Feng Shui Air Purification Service installs quantum chips in air purifiers to continuously emit 432 Hz energy waves, regulating the bedroom\'s "emotional frequency."'
                  )}
                </p>
                <div className="mt-4 p-4 bg-background/50 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>{t('科學依據', 'Scientific Basis')}：</strong>
                    {t(
                      '研究顯示，432 Hz 的頻率能降低心率、減少壓力荷爾蒙（皮質醇）分泌，讓人感到放鬆與平靜，這對夫妻溝通和感情修復至關重要。',
                      'Research shows that 432 Hz frequency can lower heart rate, reduce stress hormone (cortisol) secretion, making people feel relaxed and calm, which is crucial for couple communication and relationship repair.'
                    )}
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-primary">
                  {t('4.3 調頻時間：每天 21:00-23:00（亥時）', '4.3 Tuning Time: Daily 21:00-23:00 (Hai Hour)')}
                </h3>
                <p>
                  {t(
                    '根據中醫經絡理論，亥時（晚上 9-11 點）是「三焦經」運行的時間，也是身心最適合修復與調頻的時段。建議在這個時段進行量子調頻，讓夫妻雙方在睡前達到頻率同步，進入深度放鬆狀態。',
                    'According to Traditional Chinese Medicine meridian theory, Hai hour (9-11 PM) is when the "San Jiao meridian" operates, also the optimal time for body-mind repair and frequency tuning. It\'s recommended to perform quantum frequency tuning during this period, allowing couples to achieve frequency synchronization before sleep and enter deep relaxation.'
                  )}
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-primary">
                  {t('4.4 調頻週期：每週 1-2 次', '4.4 Tuning Cycle: 1-2 Times Per Week')}
                </h3>
                <p>
                  {t(
                    '日常使用空氣淨化機時，量子芯片會持續發射低強度的 432 Hz 能量波，維持臥室的基礎能量場。但每週需要進行 1-2 次「深度調頻」（每次約 30-60 分鐘），以強化效果，徹底清除累積的負能量。',
                    'During daily air purifier use, the quantum chip continuously emits low-intensity 432 Hz energy waves to maintain the bedroom\'s basic energy field. However, 1-2 "deep tuning" sessions per week (30-60 minutes each) are needed to strengthen effects and thoroughly remove accumulated negative energy.'
                  )}
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-primary">
                  {t('4.5 進階技巧：結合粉晶、玫瑰精油增強效果', '4.5 Advanced Technique: Combine with Rose Quartz and Rose Essential Oil')}
                </h3>
                <p>
                  {t(
                    '在空氣淨化機旁邊放置一塊「粉晶」（象徵愛情與和諧的水晶），並在臥室內使用「玫瑰精油」擴香，能進一步增強量子調頻的效果。粉晶能吸收並放大 432 Hz 的能量波，而玫瑰精油的香氣能促進大腦釋放「愛情荷爾蒙」（催產素），雙管齊下提升感情和諧度。',
                    'Placing a piece of "rose quartz" (crystal symbolizing love and harmony) next to the air purifier and using "rose essential oil" diffusion in the bedroom can further enhance quantum tuning effects. Rose quartz can absorb and amplify 432 Hz energy waves, while rose essential oil fragrance promotes brain release of "love hormone" (oxytocin), working together to enhance relationship harmony.'
                  )}
                </p>
              </div>
            </div>
          </section>

          {/* 圖片 2：夫妻臥室能量場改善前後對比圖 */}
          <div className="my-12">
            <img
              src="/images/blog/bedroom-energy-before-after.jpg"
              alt={t('夫妻臥室能量場改善前後對比', 'Before and After Comparison of Bedroom Energy Field')}
              className="w-full h-auto rounded-2xl shadow-cosmic"
            />
            <p className="text-center text-sm text-muted-foreground mt-4">
              {t('▲ 夫妻臥室能量場改善前後對比：左側為混亂能量場，右側為和諧能量場', '▲ Before and After Comparison: Left shows chaotic energy field, right shows harmonious energy field')}
            </p>
          </div>

          {/* 第五部分：真實案例與見證 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-accent">
              {t('五、真實案例：5 對夫妻的感情蛻變', '5. Real Cases: Emotional Transformation of 5 Couples')}
            </h2>

            <div className="space-y-6">
              {/* 案例 1 */}
              <div className="p-6 bg-gradient-to-br from-section-dark to-muted rounded-xl border border-border/50">
                <h3 className="text-xl font-semibold mb-3 text-primary flex items-center gap-2">
                  <span className="flex items-center justify-center w-8 h-8 bg-accent text-white rounded-full text-sm font-bold">1</span>
                  {t('李先生夫婦：結婚 3 年頻繁爭吵 → 爭吵減少 80%', 'Mr. Li and Wife: 3 Years of Frequent Arguments → 80% Reduction in Arguments')}
                </h3>
                <div className="space-y-3 text-muted-foreground">
                  <p>
                    <strong>{t('問題', 'Problem')}：</strong>
                    {t('結婚 3 年，每週至少爭吵 3-4 次，主要因為溝通不暢、互相不理解', 'Married 3 years, arguing 3-4 times per week, mainly due to poor communication and mutual misunderstanding')}
                  </p>
                  <p>
                    <strong>{t('解決方案', 'Solution')}：</strong>
                    {t('將空氣淨化機移至臥室「婚姻位」（西南方），每天 21:00 開啟量子調頻 30 分鐘', 'Moved air purifier to bedroom "marriage position" (southwest), activated quantum tuning for 30 minutes daily at 21:00')}
                  </p>
                  <p>
                    <strong>{t('效果', 'Result')}：</strong>
                    {t('實施 2 週後，爭吵次數從每週 3-4 次降至每月 1-2 次（減少約 80%）。夫妻雙方都表示「感覺對方更願意聆聽自己的想法了」', 'After 2 weeks, arguments decreased from 3-4 times/week to 1-2 times/month (about 80% reduction). Both partners reported "feeling that the other is more willing to listen"')}
                  </p>
                </div>
              </div>

              {/* 案例 2 */}
              <div className="p-6 bg-gradient-to-br from-section-dark to-muted rounded-xl border border-border/50">
                <h3 className="text-xl font-semibold mb-3 text-primary flex items-center gap-2">
                  <span className="flex items-center justify-center w-8 h-8 bg-accent text-white rounded-full text-sm font-bold">2</span>
                  {t('陳太太：婚姻冷淡期 → 重燃激情，親密度提升 65%', 'Mrs. Chen: Marriage Cold Period → Rekindled Passion, 65% Increase in Intimacy')}
                </h3>
                <div className="space-y-3 text-muted-foreground">
                  <p>
                    <strong>{t('問題', 'Problem')}：</strong>
                    {t('結婚 8 年，感情逐漸平淡，夫妻間缺乏親密互動', 'Married 8 years, relationship gradually became bland, lacking intimate interaction')}
                  </p>
                  <p>
                    <strong>{t('解決方案', 'Solution')}：</strong>
                    {t('將空氣淨化機放置在「桃花位」（床的右側），並在臥室內放置粉晶、使用玫瑰精油', 'Placed air purifier at "peach blossom position" (right side of bed), and added rose quartz and rose essential oil in bedroom')}
                  </p>
                  <p>
                    <strong>{t('效果', 'Result')}：</strong>
                    {t('1 個月後，夫妻親密度明顯提升（從每月 1-2 次增至每週 2-3 次，提升約 65%）。陳太太表示「感覺又回到了戀愛的感覺」', 'After 1 month, couple intimacy significantly increased (from 1-2 times/month to 2-3 times/week, about 65% increase). Mrs. Chen said "it feels like falling in love again"')}
                  </p>
                </div>
              </div>

              {/* 案例 3 */}
              <div className="p-6 bg-gradient-to-br from-section-dark to-muted rounded-xl border border-border/50">
                <h3 className="text-xl font-semibold mb-3 text-primary flex items-center gap-2">
                  <span className="flex items-center justify-center w-8 h-8 bg-accent text-white rounded-full text-sm font-bold">3</span>
                  {t('王先生：妻子懷疑第三者 → 信任度提升，關係更穩固', 'Mr. Wang: Wife Suspected Third Party → Trust Increased, Relationship More Stable')}
                </h3>
                <div className="space-y-3 text-muted-foreground">
                  <p>
                    <strong>{t('問題', 'Problem')}：</strong>
                    {t('妻子因工作壓力大，對王先生產生不信任感，懷疑有第三者', 'Wife under work stress developed distrust of Mr. Wang, suspected third party')}
                  </p>
                  <p>
                    <strong>{t('解決方案', 'Solution')}：</strong>
                    {t('清理床下雜物、移除臥室鏡子，將空氣淨化機放在「婚姻位」，並每週進行 2 次深度量子調頻', 'Cleared clutter under bed, removed bedroom mirror, placed air purifier at "marriage position," and performed 2 deep quantum tunings per week')}
                  </p>
                  <p>
                    <strong>{t('效果', 'Result')}：</strong>
                    {t('3 週後，妻子的不安感明顯減少，夫妻溝通更順暢。王先生表示「現在妻子更願意相信我，關係比以前更穩固」', 'After 3 weeks, wife\'s anxiety significantly reduced, couple communication smoother. Mr. Wang said "now my wife trusts me more, relationship is more stable than before"')}
                  </p>
                </div>
              </div>

              {/* 案例 4 */}
              <div className="p-6 bg-gradient-to-br from-section-dark to-muted rounded-xl border border-border/50">
                <h3 className="text-xl font-semibold mb-3 text-primary flex items-center gap-2">
                  <span className="flex items-center justify-center w-8 h-8 bg-accent text-white rounded-full text-sm font-bold">4</span>
                  {t('張女士：長期失眠影響感情 → 睡眠改善，感情回暖', 'Ms. Zhang: Chronic Insomnia Affected Relationship → Improved Sleep, Warmer Relationship')}
                </h3>
                <div className="space-y-3 text-muted-foreground">
                  <p>
                    <strong>{t('問題', 'Problem')}：</strong>
                    {t('長期失眠導致情緒不穩定，經常對丈夫發脾氣', 'Chronic insomnia caused emotional instability, frequently lost temper with husband')}
                  </p>
                  <p>
                    <strong>{t('解決方案', 'Solution')}：</strong>
                    {t('調整臥室佈局（避免床頭對廁所），並在睡前 1 小時開啟空氣淨化機與量子調頻', 'Adjusted bedroom layout (avoided bed facing toilet), turned on air purifier and quantum tuning 1 hour before sleep')}
                  </p>
                  <p>
                    <strong>{t('效果', 'Result')}：</strong>
                    {t('1 週後，張女士的睡眠品質明顯改善（從平均每晚睡 4 小時增至 7 小時）。情緒穩定後，夫妻感情也明顯回暖', 'After 1 week, Ms. Zhang\'s sleep quality significantly improved (from average 4 hours/night to 7 hours). After emotional stabilization, couple relationship noticeably warmed')}
                  </p>
                </div>
              </div>

              {/* 案例 5 */}
              <div className="p-6 bg-gradient-to-br from-section-dark to-muted rounded-xl border border-border/50">
                <h3 className="text-xl font-semibold mb-3 text-primary flex items-center gap-2">
                  <span className="flex items-center justify-center w-8 h-8 bg-accent text-white rounded-full text-sm font-bold">5</span>
                  {t('劉先生夫婦：溝通障礙 → 溝通效率提升 70%', 'Mr. Liu and Wife: Communication Barrier → 70% Improvement in Communication Efficiency')}
                </h3>
                <div className="space-y-3 text-muted-foreground">
                  <p>
                    <strong>{t('問題', 'Problem')}：</strong>
                    {t('夫妻雙方都很忙碌，回家後經常「各玩各的手機」，溝通時間越來越少', 'Both partners busy, often "each playing with their phones" at home, communication time decreasing')}
                  </p>
                  <p>
                    <strong>{t('解決方案', 'Solution')}：</strong>
                    {t('減少臥室電器（移除電視、手機充電器），將空氣淨化機放在「桃花位」，並約定每天睡前 30 分鐘進行「無電子設備溝通時間」', 'Reduced bedroom electronics (removed TV, phone chargers), placed air purifier at "peach blossom position," agreed on 30 minutes of "electronics-free communication time" before sleep daily')}
                  </p>
                  <p>
                    <strong>{t('效果', 'Result')}：</strong>
                    {t('2 週後，夫妻溝通時間從每週不到 1 小時增至每週 5-6 小時（提升約 70%）。雙方都表示「現在更了解對方的想法，感情更親密了」', 'After 2 weeks, couple communication time increased from less than 1 hour/week to 5-6 hours/week (about 70% improvement). Both said "now we understand each other\'s thoughts better, relationship is more intimate"')}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 第六部分：每月感情能量維護清單 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-accent">
              {t('六、每月感情能量維護清單', '6. Monthly Emotional Energy Maintenance Checklist')}
            </h2>

            <div className="space-y-6">
              <div className="p-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl border border-primary/30">
                <h3 className="text-xl font-semibold mb-4 text-primary">
                  {t('第 1 週：清理與檢查', 'Week 1: Cleaning and Inspection')}
                </h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>{t('清理床下雜物，確保氣流暢通', 'Clear clutter under bed, ensure smooth airflow')}</li>
                  <li>{t('檢查空氣淨化機濾網，必要時更換', 'Check air purifier filter, replace if necessary')}</li>
                  <li>{t('清洗臥室窗簾、床單，更換新鮮寢具', 'Wash bedroom curtains and sheets, replace with fresh bedding')}</li>
                  <li>{t('檢查鏡子位置，確保不對著床', 'Check mirror position, ensure not facing bed')}</li>
                </ul>
              </div>

              <div className="p-6 bg-gradient-to-r from-accent/10 to-secondary/10 rounded-xl border border-accent/30">
                <h3 className="text-xl font-semibold mb-4 text-accent">
                  {t('第 2 週：量子調頻與能量提升', 'Week 2: Quantum Tuning and Energy Enhancement')}
                </h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>{t('進行 2 次深度量子調頻（每次 30-60 分鐘）', 'Perform 2 deep quantum tunings (30-60 minutes each)')}</li>
                  <li>{t('播放 432 Hz 音樂，配合粉晶、玫瑰精油', 'Play 432 Hz music with rose quartz and rose essential oil')}</li>
                  <li>{t('夫妻共同進行「能量冥想」，增進心靈連結', 'Couples perform "energy meditation" together to enhance spiritual connection')}</li>
                </ul>
              </div>

              <div className="p-6 bg-gradient-to-r from-secondary/10 to-primary/10 rounded-xl border border-secondary/30">
                <h3 className="text-xl font-semibold mb-4 text-secondary">
                  {t('第 3 週：環境優化與氛圍營造', 'Week 3: Environment Optimization and Atmosphere Creation')}
                </h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>{t('調整臥室燈光，使用暖色調燈泡（2700K-3000K）', 'Adjust bedroom lighting, use warm-toned bulbs (2700K-3000K)')}</li>
                  <li>{t('更換臥室配色，增加粉色、米色等溫馨色調', 'Change bedroom colors, add warm tones like pink and beige')}</li>
                  <li>{t('在床頭放置成對的裝飾品（象徵感情圓滿）', 'Place paired decorations at bedside (symbolizing complete relationship)')}</li>
                </ul>
              </div>

              <div className="p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl border border-primary/30">
                <h3 className="text-xl font-semibold mb-4 text-primary">
                  {t('第 4 週：全面能量診斷與規劃', 'Week 4: Comprehensive Energy Diagnosis and Planning')}
                </h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>{t('使用能量場測量儀，檢測臥室整體能量水平', 'Use energy field meter to detect overall bedroom energy level')}</li>
                  <li>{t('評估本月感情改善效果，記錄數據變化', 'Evaluate monthly relationship improvement effects, record data changes')}</li>
                  <li>{t('規劃下月優化方向（如需要調整擺位、增加輔助工具等）', 'Plan next month\'s optimization direction (e.g., adjust placement, add auxiliary tools)')}</li>
                  <li>{t('預約專業量子風水顧問（每季度 1 次）', 'Schedule professional quantum feng shui consultant (once per quarter)')}</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 結語 */}
          <section className="mb-12 p-8 bg-gradient-to-br from-accent/20 via-primary/20 to-secondary/20 rounded-2xl border-2 border-accent/50">
            <h2 className="text-3xl font-bold mb-6 text-accent text-center">
              {t('結語：讓愛在臥室中自然流動', 'Conclusion: Let Love Flow Naturally in the Bedroom')}
            </h2>
            <p className="text-lg leading-relaxed text-center">
              {t(
                '臥室是夫妻感情最核心的能量場。通過正確的空氣淨化機擺位、量子調頻技術，以及日常的能量維護，您可以讓臥室重新成為「愛的聖殿」。記住，感情和諧不是一蹴而就的，而是需要持續的關注與調整。願每一對夫妻都能在量子風水的幫助下，找到屬於自己的「感情頻率」，讓愛與和諧自然流動。',
                'The bedroom is the core energy field of a couple\'s relationship. Through proper air purifier placement, quantum frequency tuning technology, and daily energy maintenance, you can transform your bedroom back into a "temple of love." Remember, relationship harmony is not achieved overnight, but requires continuous attention and adjustment. May every couple find their own "emotional frequency" with the help of quantum feng shui, allowing love and harmony to flow naturally.'
              )}
            </p>
            <div className="mt-8 text-center">
              <p className="text-primary font-semibold text-lg">
                {t('💖 祝您和伴侶感情甜蜜、幸福美滿！', '💖 Wishing you and your partner sweet love and happiness!')}
              </p>
            </div>
          </section>

          {/* 行動呼籲 */}
          <div className="text-center py-12">
            <Link href="/contact">
              <a className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-accent via-primary to-secondary text-white font-bold text-lg rounded-full shadow-glow hover:shadow-glow-lg transition-all duration-300 transform hover:scale-105">
                {t('立即預約量子風水臥室診斷', 'Book Quantum Feng Shui Bedroom Diagnosis Now')}
                <ArrowRight className="w-6 h-6" />
              </a>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
