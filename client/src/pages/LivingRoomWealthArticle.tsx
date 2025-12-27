import { Link } from 'wouter';
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function LivingRoomWealthArticle() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background py-12">
      <article className="max-w-4xl mx-auto px-6 sm:px-8">
        {/* Back to Blog */}
        <Link href="/blog">
          <a className="inline-flex items-center text-accent hover:text-secondary transition-colors mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t('返回博客', 'Back to Blog')}
          </a>
        </Link>

        {/* Article Header */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            {t(
              '客廳財位空氣淨化機擺放秘訣 - 量子風水提升家庭財運',
              'Living Room Wealth Position Air Purifier Placement Secrets - Quantum Feng Shui to Enhance Family Fortune'
            )}
          </h1>
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
            <span>{t('發布日期', 'Published')}: 2025-12-27</span>
            <span>•</span>
            <span>{t('閱讀時間', 'Reading Time')}: 12 {t('分鐘', 'min')}</span>
            <span>•</span>
            <span className="px-3 py-1 bg-accent/10 text-accent rounded-full">
              {t('家庭財運', 'Family Fortune')}
            </span>
          </div>
        </header>

        {/* Introduction */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-xl text-muted-foreground leading-relaxed">
            {t(
              '你知道嗎？客廳的「財位」不僅影響家庭財運，更是整個家居能量場的核心！如果在財位正確擺放空氣淨化機，配合量子調頻技術，不僅能淨化空氣，更能激活財運能量，為全家帶來源源不絕的豐盛與繁榮。今天，我們將揭秘客廳財位的奧秘，教你如何用空氣淨化機打造招財進寶的黃金家居！',
              'Did you know? The "wealth position" in your living room not only affects family fortune but is also the core of your home\'s energy field! If you correctly place an air purifier in the wealth position and combine it with quantum frequency tuning technology, you can not only purify the air but also activate fortune energy, bringing endless prosperity to your entire family. Today, we will reveal the secrets of the living room wealth position and teach you how to use an air purifier to create a golden home that attracts wealth!'
            )}
          </p>
        </div>

        {/* Image 1: Wealth Position Diagram */}
        <div className="my-12 rounded-2xl overflow-hidden shadow-cosmic">
          <img
            src="/images/blog/living-room-wealth-position.jpg"
            alt={t('客廳財位示意圖 - 空氣淨化機擺放位置指南', 'Living Room Wealth Position Diagram - Air Purifier Placement Guide')}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Section 1: What is Wealth Position */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            {t('一、什麼是客廳「財位」？為什麼它如此重要？', '1. What is the Living Room "Wealth Position"? Why is it So Important?')}
          </h2>

          <h3 className="text-2xl font-semibold text-foreground mb-4">
            {t('1.1 財位的風水原理', '1.1 Feng Shui Principles of the Wealth Position')}
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-6">
            {t(
              '在傳統風水學中，「財位」是指客廳中能量最聚集、氣場最強的位置。這個位置通常位於進門後的對角線方向，是家居風水的「聚寶盆」。根據《易經》與八卦理論，財位屬於「生氣位」，是財運、健康、事業運的核心能量場。',
              'In traditional feng shui, the "wealth position" refers to the area in the living room where energy is most concentrated and the aura is strongest. This position is usually located diagonally from the entrance and is the "treasure bowl" of home feng shui. According to the I Ching and Bagua theory, the wealth position belongs to the "vitality position," which is the core energy field for fortune, health, and career luck.'
            )}
          </p>

          <h3 className="text-2xl font-semibold text-foreground mb-4">
            {t('1.2 如何找到你家的財位？', '1.2 How to Find Your Home\'s Wealth Position?')}
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            {t(
              '尋找財位的方法非常簡單，遵循以下步驟：',
              'Finding the wealth position is very simple. Follow these steps:'
            )}
          </p>
          <ul className="list-disc list-inside space-y-3 text-muted-foreground mb-6">
            <li>
              {t(
                '站在客廳門口，面向室內',
                'Stand at the living room entrance, facing inward'
              )}
            </li>
            <li>
              {t(
                '財位通常在進門後的對角線角落（左側或右側）',
                'The wealth position is usually in the diagonal corner after entering (left or right side)'
              )}
            </li>
            <li>
              {t(
                '如果門在中間，則左右兩個對角都是財位',
                'If the door is in the middle, both diagonal corners are wealth positions'
              )}
            </li>
            <li>
              {t(
                '財位應該是實牆，而非窗戶或走道',
                'The wealth position should be a solid wall, not a window or walkway'
              )}
            </li>
            <li>
              {t(
                '財位應保持明亮、乾淨、通風良好',
                'The wealth position should be bright, clean, and well-ventilated'
              )}
            </li>
          </ul>

          <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-r-lg mb-6">
            <p className="text-foreground font-semibold mb-2">
              {t('💡 專業提示：', '💡 Professional Tip:')}
            </p>
            <p className="text-muted-foreground">
              {t(
                '如果你家的財位剛好是窗戶或門，可以用窗簾、屏風或高大植物來「化解」，創造一個虛擬的實牆效果。',
                'If your home\'s wealth position happens to be a window or door, you can use curtains, screens, or tall plants to "resolve" it and create a virtual solid wall effect.'
              )}
            </p>
          </div>

          <h3 className="text-2xl font-semibold text-foreground mb-4">
            {t('1.3 財位影響家庭的 5 大方面', '1.3 Five Major Aspects Where the Wealth Position Affects Your Family')}
          </h3>
          <ul className="space-y-4 mb-6">
            <li className="flex items-start">
              <span className="text-2xl mr-4">💰</span>
              <div>
                <strong className="text-foreground">
                  {t('財運與收入：', 'Fortune & Income:')}
                </strong>
                <span className="text-muted-foreground">
                  {t(
                    ' 財位能量強，家庭收入穩定增長，投資理財順利',
                    ' Strong wealth position energy leads to stable income growth and smooth investments'
                  )}
                </span>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-2xl mr-4">🏢</span>
              <div>
                <strong className="text-foreground">
                  {t('事業發展：', 'Career Development:')}
                </strong>
                <span className="text-muted-foreground">
                  {t(
                    ' 激活財位有助於事業晉升、業務拓展、人脈貴人',
                    ' Activating the wealth position helps career advancement, business expansion, and beneficial connections'
                  )}
                </span>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-2xl mr-4">🏠</span>
              <div>
                <strong className="text-foreground">
                  {t('家庭和諧：', 'Family Harmony:')}
                </strong>
                <span className="text-muted-foreground">
                  {t(
                    ' 財位能量平衡，家人關係和睦，減少爭執',
                    ' Balanced wealth position energy creates harmonious family relationships and reduces conflicts'
                  )}
                </span>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-2xl mr-4">💪</span>
              <div>
                <strong className="text-foreground">
                  {t('健康運勢：', 'Health Fortune:')}
                </strong>
                <span className="text-muted-foreground">
                  {t(
                    ' 良好的財位能量能提升全家人的身體健康與活力',
                    ' Good wealth position energy enhances the physical health and vitality of the entire family'
                  )}
                </span>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-2xl mr-4">🎓</span>
              <div>
                <strong className="text-foreground">
                  {t('子女學業：', 'Children\'s Education:')}
                </strong>
                <span className="text-muted-foreground">
                  {t(
                    ' 財位激活能提升孩子的學習專注力與考試運',
                    ' Activating the wealth position enhances children\'s learning focus and exam luck'
                  )}
                </span>
              </div>
            </li>
          </ul>
        </section>

        {/* Section 2: Why Air Purifier in Wealth Position */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            {t(
              '二、為什麼要在財位擺放空氣淨化機？',
              '2. Why Place an Air Purifier in the Wealth Position?'
            )}
          </h2>

          <h3 className="text-2xl font-semibold text-foreground mb-4">
            {t('2.1 空氣品質與財運的科學關聯', '2.1 Scientific Connection Between Air Quality and Fortune')}
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-6">
            {t(
              '你可能會好奇：空氣淨化機和財運有什麼關係？答案是：關係非常大！根據量子物理學與環境心理學研究，空氣品質直接影響人的情緒、思維清晰度和決策能力。當財位的空氣清新、能量流動順暢時，居住者的心智更加敏銳，更容易抓住財富機會。',
              'You might wonder: What\'s the connection between air purifiers and fortune? The answer is: A huge connection! According to quantum physics and environmental psychology research, air quality directly affects human emotions, mental clarity, and decision-making abilities. When the air in the wealth position is fresh and energy flows smoothly, residents have sharper minds and are more likely to seize wealth opportunities.'
            )}
          </p>

          <h3 className="text-2xl font-semibold text-foreground mb-4">
            {t('2.2 量子調頻技術激活財位能量', '2.2 Quantum Frequency Tuning Technology Activates Wealth Position Energy')}
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-6">
            {t(
              '現代量子風水的核心理論是：萬物皆有頻率，而頻率決定能量狀態。我們的空氣淨化服務結合了量子調頻技術，能夠在淨化空氣的同時，調整空間的頻率共振，讓財位的能量場與繁榮富足的頻率對齊，從而吸引更多財富能量流入家中。',
              'The core theory of modern quantum feng shui is: Everything has a frequency, and frequency determines energy state. Our air purification service combines quantum frequency tuning technology, which can adjust the frequency resonance of the space while purifying the air, aligning the energy field of the wealth position with the frequency of prosperity and abundance, thereby attracting more wealth energy into the home.'
            )}
          </p>

          <div className="bg-secondary/10 border-l-4 border-secondary p-6 rounded-r-lg mb-6">
            <p className="text-foreground font-semibold mb-2">
              {t('🔬 科學原理：', '🔬 Scientific Principle:')}
            </p>
            <p className="text-muted-foreground mb-3">
              {t(
                '量子調頻技術基於「頻率共振」原理。當空氣淨化機運行時，它不僅過濾有害物質，還會釋放特定頻率的量子能量波，這些能量波與財位的風水能量產生共鳴，形成一個「豐盛能量場」。',
                'Quantum frequency tuning technology is based on the principle of "frequency resonance". When an air purifier operates, it not only filters harmful substances but also releases quantum energy waves at specific frequencies. These energy waves resonate with the feng shui energy of the wealth position, forming an "abundance energy field".'
              )}
            </p>
            <p className="text-muted-foreground">
              {t(
                '這類似於音叉共振：當一個音叉振動時，附近相同頻率的音叉也會開始振動。同樣，量子調頻的空氣淨化機能激活財位的「財富頻率」，讓整個家居環境與富足豐盛的能量對齊。',
                'This is similar to tuning fork resonance: When one tuning fork vibrates, nearby tuning forks of the same frequency also begin to vibrate. Similarly, a quantum-tuned air purifier can activate the "wealth frequency" of the wealth position, aligning the entire home environment with the energy of abundance and prosperity.'
              )}
            </p>
          </div>

          <h3 className="text-2xl font-semibold text-foreground mb-4">
            {t('2.3 財位擺放空氣淨化機的 5 大好處', '2.3 Five Major Benefits of Placing an Air Purifier in the Wealth Position')}
          </h3>
          <ul className="space-y-4 mb-6">
            <li className="bg-muted/50 p-4 rounded-lg">
              <strong className="text-foreground text-lg block mb-2">
                ✨ {t('淨化財運能量場', 'Purify Fortune Energy Field')}
              </strong>
              <p className="text-muted-foreground">
                {t(
                  '去除財位的負能量與污濁之氣，讓正能量流動順暢。空氣中的灰塵、PM2.5、甲醛等有害物質會阻礙能量流動，淨化後能量場更加通透。',
                  'Remove negative energy and turbid qi from the wealth position, allowing positive energy to flow smoothly. Dust, PM2.5, formaldehyde, and other harmful substances in the air hinder energy flow; after purification, the energy field becomes more transparent.'
                )}
              </p>
            </li>
            <li className="bg-muted/50 p-4 rounded-lg">
              <strong className="text-foreground text-lg block mb-2">
                💸 {t('激活招財磁場', 'Activate Wealth-Attracting Magnetic Field')}
              </strong>
              <p className="text-muted-foreground">
                {t(
                  '量子調頻技術能調整空間頻率，與金錢豐盛的頻率產生共振，形成「招財磁場」。這個磁場能吸引財富機會、貴人相助、投資獲利。',
                  'Quantum frequency tuning technology can adjust space frequency to resonate with the frequency of monetary abundance, forming a "wealth-attracting magnetic field". This magnetic field can attract wealth opportunities, helpful people, and investment profits.'
                )}
              </p>
            </li>
            <li className="bg-muted/50 p-4 rounded-lg">
              <strong className="text-foreground text-lg block mb-2">
                🧠 {t('提升財富意識', 'Enhance Wealth Consciousness')}
              </strong>
              <p className="text-muted-foreground">
                {t(
                  '清新的空氣能提升大腦含氧量，讓思維更清晰，更容易產生創新想法與賺錢靈感。許多客戶反饋，使用後靈感不斷，業務拓展順利。',
                  'Fresh air enhances brain oxygen levels, making thinking clearer and easier to generate innovative ideas and money-making inspiration. Many clients report continuous inspiration and smooth business expansion after use.'
                )}
              </p>
            </li>
            <li className="bg-muted/50 p-4 rounded-lg">
              <strong className="text-foreground text-lg block mb-2">
                🏡 {t('改善家庭和諧', 'Improve Family Harmony')}
              </strong>
              <p className="text-muted-foreground">
                {t(
                  '空氣品質差容易讓人煩躁、焦慮，影響家人關係。財位能量平衡後，家庭氣氛更加和諧，減少爭執，財運自然水漲船高。',
                  'Poor air quality easily causes irritability and anxiety, affecting family relationships. After the wealth position energy is balanced, the family atmosphere becomes more harmonious, conflicts decrease, and fortune naturally rises.'
                )}
              </p>
            </li>
            <li className="bg-muted/50 p-4 rounded-lg">
              <strong className="text-foreground text-lg block mb-2">
                🌿 {t('持續能量補給', 'Continuous Energy Replenishment')}
              </strong>
              <p className="text-muted-foreground">
                {t(
                  '空氣淨化機 24 小時運轉，持續淨化與調頻，確保財位能量場始終處於最佳狀態。這就像給財位安裝了一個「能量充電站」。',
                  'The air purifier operates 24 hours a day, continuously purifying and tuning, ensuring the wealth position energy field is always in optimal condition. It\'s like installing an "energy charging station" for the wealth position.'
                )}
              </p>
            </li>
          </ul>
        </section>

        {/* Image 2: Correct Placement */}
        <div className="my-12 rounded-2xl overflow-hidden shadow-cosmic">
          <img
            src="/images/blog/living-room-correct-placement.jpg"
            alt={t('客廳財位空氣淨化機正確擺放示意圖', 'Correct Air Purifier Placement in Living Room Wealth Position')}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Section 3: How to Place Air Purifier Correctly */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            {t(
              '三、客廳財位空氣淨化機的正確擺放方法',
              '3. Correct Placement Method for Air Purifier in Living Room Wealth Position'
            )}
          </h2>

          <h3 className="text-2xl font-semibold text-foreground mb-4">
            {t('3.1 財位擺放的 8 大黃金法則', '3.1 Eight Golden Rules for Wealth Position Placement')}
          </h3>
          <ul className="space-y-4 mb-6">
            <li className="flex items-start">
              <span className="text-accent font-bold text-xl mr-3">1.</span>
              <div>
                <strong className="text-foreground">
                  {t('背靠實牆：', 'Back Against Solid Wall:')}
                </strong>
                <span className="text-muted-foreground">
                  {t(
                    ' 空氣淨化機應靠牆擺放，象徵「有靠山」，財運穩固',
                    ' The air purifier should be placed against a wall, symbolizing "having support", for stable fortune'
                  )}
                </span>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-accent font-bold text-xl mr-3">2.</span>
              <div>
                <strong className="text-foreground">
                  {t('避開窗戶：', 'Avoid Windows:')}
                </strong>
                <span className="text-muted-foreground">
                  {t(
                    ' 不要將淨化機擺在窗邊，以免財氣外洩',
                    ' Don\'t place the purifier by the window to prevent wealth energy from leaking out'
                  )}
                </span>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-accent font-bold text-xl mr-3">3.</span>
              <div>
                <strong className="text-foreground">
                  {t('保持整潔：', 'Keep Clean:')}
                </strong>
                <span className="text-muted-foreground">
                  {t(
                    ' 財位周圍不可堆放雜物、垃圾，保持乾淨明亮',
                    ' The area around the wealth position should not be cluttered with debris or garbage; keep it clean and bright'
                  )}
                </span>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-accent font-bold text-xl mr-3">4.</span>
              <div>
                <strong className="text-foreground">
                  {t('適當高度：', 'Appropriate Height:')}
                </strong>
                <span className="text-muted-foreground">
                  {t(
                    ' 淨化機高度應在 50-80 公分，不可過高或過低',
                    ' The purifier height should be 50-80 cm, not too high or too low'
                  )}
                </span>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-accent font-bold text-xl mr-3">5.</span>
              <div>
                <strong className="text-foreground">
                  {t('搭配綠植：', 'Pair with Plants:')}
                </strong>
                <span className="text-muted-foreground">
                  {t(
                    ' 可在旁邊擺放招財植物（如發財樹、富貴竹），增強財運',
                    ' You can place wealth-attracting plants (such as money trees, lucky bamboo) nearby to enhance fortune'
                  )}
                </span>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-accent font-bold text-xl mr-3">6.</span>
              <div>
                <strong className="text-foreground">
                  {t('燈光輔助：', 'Lighting Assistance:')}
                </strong>
                <span className="text-muted-foreground">
                  {t(
                    ' 財位要明亮，可加裝暖色系燈光（黃光），催旺財運',
                    ' The wealth position should be bright; warm-toned lighting (yellow light) can be added to boost fortune'
                  )}
                </span>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-accent font-bold text-xl mr-3">7.</span>
              <div>
                <strong className="text-foreground">
                  {t('避開廁所：', 'Avoid Toilet:')}
                </strong>
                <span className="text-muted-foreground">
                  {t(
                    ' 如果財位靠近廁所，需用屏風或櫃子隔開',
                    ' If the wealth position is near the toilet, use a screen or cabinet to separate it'
                  )}
                </span>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-accent font-bold text-xl mr-3">8.</span>
              <div>
                <strong className="text-foreground">
                  {t('24 小時運轉：', '24-Hour Operation:')}
                </strong>
                <span className="text-muted-foreground">
                  {t(
                    ' 淨化機應保持 24 小時運轉，持續淨化與調頻',
                    ' The purifier should operate 24 hours to continuously purify and tune'
                  )}
                </span>
              </div>
            </li>
          </ul>

          <h3 className="text-2xl font-semibold text-foreground mb-4">
            {t('3.2 不同戶型的財位擺放技巧', '3.2 Wealth Position Placement Tips for Different Home Layouts')}
          </h3>

          <div className="space-y-6 mb-6">
            <div className="bg-muted/50 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-foreground mb-3">
                🏠 {t('標準方正客廳', 'Standard Square Living Room')}
              </h4>
              <p className="text-muted-foreground mb-2">
                {t(
                  '如果你家客廳是方正格局，財位非常明顯。站在門口，面向室內，財位在左前方或右前方的對角線位置。',
                  'If your living room is square, the wealth position is very obvious. Standing at the door facing inward, the wealth position is in the diagonal position at the front left or front right.'
                )}
              </p>
              <p className="text-muted-foreground">
                {t(
                  '✅ 擺放建議：將空氣淨化機放在財位角落，背靠牆壁，旁邊擺放一盆發財樹或黃金葛，增強招財效果。',
                  '✅ Placement suggestion: Place the air purifier in the wealth position corner, back against the wall, with a money tree or pothos plant nearby to enhance wealth-attracting effects.'
                )}
              </p>
            </div>

            <div className="bg-muted/50 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-foreground mb-3">
                🏢 {t('狹長型客廳', 'Narrow Long Living Room')}
              </h4>
              <p className="text-muted-foreground mb-2">
                {t(
                  '香港很多公屋或舊樓是狹長型格局，進門後直通陽台或窗戶。這種情況下，財位可能在側牆的角落。',
                  'Many Hong Kong public housing or old buildings have narrow long layouts, with a straight path from the door to the balcony or window. In this case, the wealth position may be in the corner of the side wall.'
                )}
              </p>
              <p className="text-muted-foreground">
                {t(
                  '✅ 擺放建議：找到側牆的靜角（遠離門窗的角落），擺放空氣淨化機，並用櫃子或屏風營造「聚氣」效果。',
                  '✅ Placement suggestion: Find the quiet corner of the side wall (corner away from doors and windows), place the air purifier, and use cabinets or screens to create a "qi gathering" effect.'
                )}
              </p>
            </div>

            <div className="bg-muted/50 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-foreground mb-3">
                🏘️ {t('開放式客廳（客廳+飯廳）', 'Open Living Room (Living + Dining)')}
              </h4>
              <p className="text-muted-foreground mb-2">
                {t(
                  '開放式格局沒有明顯隔間，財位通常在客廳區域的對角線，而非飯廳。',
                  'Open layouts have no obvious partitions. The wealth position is usually in the diagonal of the living room area, not the dining room.'
                )}
              </p>
              <p className="text-muted-foreground">
                {t(
                  '✅ 擺放建議：用沙發或櫃子劃分客廳與飯廳，確保財位在客廳區，然後擺放空氣淨化機。',
                  '✅ Placement suggestion: Use a sofa or cabinet to divide the living room and dining room, ensure the wealth position is in the living room area, then place the air purifier.'
                )}
              </p>
            </div>

            <div className="bg-muted/50 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-foreground mb-3">
                🏡 {t('小戶型（300-500 呎）', 'Small Apartment (300-500 sq ft)')}
              </h4>
              <p className="text-muted-foreground mb-2">
                {t(
                  '小戶型空間有限，財位可能與其他功能區重疊（如電視櫃、書櫃）。',
                  'Small apartments have limited space, and the wealth position may overlap with other functional areas (such as TV cabinets, bookshelves).'
                )}
              </p>
              <p className="text-muted-foreground">
                {t(
                  '✅ 擺放建議：將空氣淨化機整合進電視櫃或書櫃旁，保持財位通風，避免擁擠。可選擇小型但高效的淨化機型號。',
                  '✅ Placement suggestion: Integrate the air purifier next to the TV cabinet or bookshelf, keep the wealth position ventilated, avoid crowding. You can choose a small but efficient purifier model.'
                )}
              </p>
            </div>
          </div>

          <h3 className="text-2xl font-semibold text-foreground mb-4">
            {t('3.3 常見的財位擺放錯誤（必須避免！）', '3.3 Common Wealth Position Placement Mistakes (Must Avoid!)')}
          </h3>
          <ul className="space-y-4 mb-6">
            <li className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border-l-4 border-red-500">
              <strong className="text-red-600 dark:text-red-400 block mb-2">
                ❌ {t('錯誤 1：擺在門口或走道', 'Mistake 1: Placing at Entrance or Walkway')}
              </strong>
              <p className="text-muted-foreground">
                {t(
                  '門口和走道是氣流快速流動的地方，擺放空氣淨化機會讓財氣快速流失，無法聚財。',
                  'Entrances and walkways are places where airflow moves quickly. Placing an air purifier there causes wealth energy to quickly dissipate, unable to accumulate wealth.'
                )}
              </p>
            </li>
            <li className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border-l-4 border-red-500">
              <strong className="text-red-600 dark:text-red-400 block mb-2">
                ❌ {t('錯誤 2：擺在窗邊', 'Mistake 2: Placing by the Window')}
              </strong>
              <p className="text-muted-foreground">
                {t(
                  '窗戶是能量進出的通道，擺在窗邊會讓剛淨化的能量立刻散失，財運無法留存。',
                  'Windows are channels for energy entry and exit. Placing by the window causes newly purified energy to immediately dissipate, unable to retain fortune.'
                )}
              </p>
            </li>
            <li className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border-l-4 border-red-500">
              <strong className="text-red-600 dark:text-red-400 block mb-2">
                ❌ {t('錯誤 3：財位堆滿雜物', 'Mistake 3: Wealth Position Cluttered with Items')}
              </strong>
              <p className="text-muted-foreground">
                {t(
                  '財位堆放鞋子、舊報紙、垃圾等雜物，會嚴重阻礙能量流動，導致財運不佳。',
                  'Piling shoes, old newspapers, garbage, and other items in the wealth position seriously hinders energy flow, leading to poor fortune.'
                )}
              </p>
            </li>
            <li className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border-l-4 border-red-500">
              <strong className="text-red-600 dark:text-red-400 block mb-2">
                ❌ {t('錯誤 4：淨化機對著廁所門', 'Mistake 4: Purifier Facing Toilet Door')}
              </strong>
              <p className="text-muted-foreground">
                {t(
                  '廁所是穢氣最重的地方，如果淨化機對著廁所門，會吸入大量負能量，反而破壞財運。',
                  'The toilet is the place with the heaviest foul energy. If the purifier faces the toilet door, it will absorb a lot of negative energy, instead damaging fortune.'
                )}
              </p>
            </li>
            <li className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border-l-4 border-red-500">
              <strong className="text-red-600 dark:text-red-400 block mb-2">
                ❌ {t('錯誤 5：長期關閉不使用', 'Mistake 5: Keeping It Off for Long Periods')}
              </strong>
              <p className="text-muted-foreground">
                {t(
                  '只有定期使用空氣淨化機，才能持續淨化與調頻。長期關閉會讓財位能量場衰退，失去招財效果。',
                  'Only by regularly using the air purifier can continuous purification and tuning be maintained. Keeping it off for long periods causes the wealth position energy field to decline, losing wealth-attracting effects.'
                )}
              </p>
            </li>
          </ul>
        </section>

        {/* Image 3: Before and After */}
        <div className="my-12 rounded-2xl overflow-hidden shadow-cosmic">
          <img
            src="/images/blog/living-room-before-after.jpg"
            alt={t('客廳財位改善前後對比 - 量子風水空氣淨化效果', 'Living Room Wealth Position Before and After Comparison - Quantum Feng Shui Air Purification Effect')}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Section 4: Real Case Study */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            {t(
              '四、真實案例：張太太如何用空氣淨化機改善家庭財運',
              '4. Real Case Study: How Mrs. Zhang Improved Family Fortune with an Air Purifier'
            )}
          </h2>

          <div className="bg-accent/10 border border-accent/30 p-8 rounded-2xl mb-6">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              {t('客戶背景', 'Client Background')}
            </h3>
            <ul className="space-y-2 text-muted-foreground mb-6">
              <li>
                <strong>{t('姓名：', 'Name:')}</strong> {t('張太太（化名）', 'Mrs. Zhang (pseudonym)')}
              </li>
              <li>
                <strong>{t('職業：', 'Occupation:')}</strong> {t('全職家庭主婦', 'Full-time Homemaker')}
              </li>
              <li>
                <strong>{t('居住地：', 'Location:')}</strong> {t('香港九龍區', 'Kowloon, Hong Kong')}
              </li>
              <li>
                <strong>{t('家庭狀況：', 'Family Status:')}</strong>{' '}
                {t('丈夫從事金融業，兩個小孩就讀小學', 'Husband works in finance, two children in primary school')}
              </li>
              <li>
                <strong>{t('問題：', 'Problem:')}</strong>{' '}
                {t(
                  '丈夫工作壓力大，投資常虧損；孩子學業成績下滑；家庭經常為錢爭吵',
                  'Husband has high work pressure, frequent investment losses; children\'s academic performance declined; family often argues about money'
                )}
              </li>
            </ul>

            <h3 className="text-2xl font-semibold text-foreground mb-4">
              {t('問題診斷', 'Problem Diagnosis')}
            </h3>
            <p className="text-muted-foreground mb-4">
              {t(
                '我們的風水顧問到張太太家中實地勘察後，發現以下問題：',
                'After our feng shui consultant visited Mrs. Zhang\'s home for on-site inspection, the following problems were found:'
              )}
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
              <li>
                {t(
                  '客廳財位（左前方角落）堆滿了舊報紙、孩子的玩具和鞋子',
                  'The living room wealth position (left front corner) was piled with old newspapers, children\'s toys, and shoes'
                )}
              </li>
              <li>
                {t(
                  '財位正好靠近廁所，穢氣外洩',
                  'The wealth position was right next to the toilet, with foul qi leaking out'
                )}
              </li>
              <li>
                {t(
                  '客廳空氣混濁，窗簾長期不開，光線昏暗',
                  'The living room air was turbid, curtains were kept closed, lighting was dim'
                )}
              </li>
              <li>
                {t(
                  '家中從未使用過空氣淨化設備',
                  'The home had never used any air purification equipment'
                )}
              </li>
            </ul>

            <h3 className="text-2xl font-semibold text-foreground mb-4">
              {t('解決方案', 'Solution')}
            </h3>
            <p className="text-muted-foreground mb-4">
              {t(
                '我們為張太太家量身定制了以下改善方案：',
                'We customized the following improvement plan for Mrs. Zhang\'s home:'
              )}
            </p>
            <ul className="list-decimal list-inside space-y-3 text-muted-foreground mb-6">
              <li>
                <strong className="text-foreground">
                  {t('清理財位雜物：', 'Clear Wealth Position Clutter:')}
                </strong>{' '}
                {t(
                  '將所有雜物移走，保持財位乾淨整潔',
                  'Remove all clutter, keep the wealth position clean and tidy'
                )}
              </li>
              <li>
                <strong className="text-foreground">
                  {t('在財位擺放空氣淨化機：', 'Place Air Purifier in Wealth Position:')}
                </strong>{' '}
                {t(
                  '選用帶量子調頻技術的空氣淨化機，背靠實牆擺放',
                  'Choose an air purifier with quantum frequency tuning technology, place it back against a solid wall'
                )}
              </li>
              <li>
                <strong className="text-foreground">
                  {t('增加財位燈光：', 'Add Wealth Position Lighting:')}
                </strong>{' '}
                {t(
                  '安裝暖黃色燈光，增強財位能量',
                  'Install warm yellow lighting to enhance wealth position energy'
                )}
              </li>
              <li>
                <strong className="text-foreground">
                  {t('擺放招財植物：', 'Place Wealth-Attracting Plants:')}
                </strong>{' '}
                {t(
                  '在淨化機旁放置發財樹，增強招財效果',
                  'Place a money tree next to the purifier to enhance wealth-attracting effects'
                )}
              </li>
              <li>
                <strong className="text-foreground">
                  {t('用屏風隔開廁所：', 'Separate Toilet with Screen:')}
                </strong>{' '}
                {t(
                  '用裝飾屏風阻擋廁所穢氣',
                  'Use a decorative screen to block toilet foul qi'
                )}
              </li>
            </ul>

            <h3 className="text-2xl font-semibold text-foreground mb-4">
              {t('改善效果（使用 3 個月後）', 'Improvement Results (After 3 Months of Use)')}
            </h3>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start">
                <span className="text-2xl mr-4">💰</span>
                <div>
                  <strong className="text-foreground">
                    {t('財運提升：', 'Fortune Improved:')}
                  </strong>
                  <p className="text-muted-foreground">
                    {t(
                      '張太太的丈夫投資開始獲利，連續 3 個月都有收益。他說思路變得清晰，決策更果斷。',
                      'Mrs. Zhang\'s husband\'s investments started making profits, with gains for 3 consecutive months. He said his thinking became clearer and decisions more decisive.'
                    )}
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-2xl mr-4">📈</span>
                <div>
                  <strong className="text-foreground">
                    {t('事業發展：', 'Career Development:')}
                  </strong>
                  <p className="text-muted-foreground">
                    {t(
                      '丈夫獲得晉升機會，月收入增加了 30%。',
                      'Husband received a promotion opportunity, monthly income increased by 30%.'
                    )}
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-2xl mr-4">🏫</span>
                <div>
                  <strong className="text-foreground">
                    {t('孩子學業：', 'Children\'s Education:')}
                  </strong>
                  <p className="text-muted-foreground">
                    {t(
                      '兩個小孩的成績明顯進步，老師反映他們上課更專注。',
                      'Both children\'s grades improved significantly, teachers reported they were more focused in class.'
                    )}
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-2xl mr-4">😊</span>
                <div>
                  <strong className="text-foreground">
                    {t('家庭和諧：', 'Family Harmony:')}
                  </strong>
                  <p className="text-muted-foreground">
                    {t(
                      '全家人的關係變得更加融洽，爭吵次數大幅減少。張太太說：「現在回到家，每個人都笑容滿面，整個家充滿正能量！」',
                      'The entire family\'s relationships became more harmonious, arguments decreased significantly. Mrs. Zhang said: "Now when we come home, everyone is smiling, the whole house is full of positive energy!"'
                    )}
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-2xl mr-4">🌟</span>
                <div>
                  <strong className="text-foreground">
                    {t('健康改善：', 'Health Improvement:')}
                  </strong>
                  <p className="text-muted-foreground">
                    {t(
                      '孩子的過敏症狀減輕，全家人的睡眠品質都變好了。',
                      'Children\'s allergy symptoms reduced, the entire family\'s sleep quality improved.'
                    )}
                  </p>
                </div>
              </li>
            </ul>

            <div className="bg-accent/20 p-6 rounded-lg">
              <p className="text-foreground font-semibold mb-2">
                {t('💬 張太太的評價：', '💬 Mrs. Zhang\'s Review:')}
              </p>
              <p className="text-muted-foreground italic">
                {t(
                  '「一開始我對風水半信半疑，但使用空氣淨化機 3 個月後，家裡真的變了！不僅空氣清新，家人的心情和運勢都變好了。老公的投資不再虧損，孩子成績進步，連我自己也覺得精神煥發。真心推薦給所有想改善家庭財運的朋友！」',
                  '"At first I was skeptical about feng shui, but after using the air purifier for 3 months, our home really changed! Not only is the air fresh, but the family\'s mood and fortune have improved. My husband\'s investments are no longer losing money, the children\'s grades have improved, and even I feel refreshed. I sincerely recommend it to all friends who want to improve their family fortune!"'
                )}
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: FAQ */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            {t('五、常見問題解答（FAQ）', '5. Frequently Asked Questions (FAQ)')}
          </h2>

          <div className="space-y-6">
            <div className="bg-muted/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                ❓ {t('Q1：如果我家沒有明顯的財位怎麼辦？', 'Q1: What if my home doesn\'t have an obvious wealth position?')}
              </h3>
              <p className="text-muted-foreground">
                {t(
                  'A1：幾乎所有客廳都有財位，只是有些格局不太明顯。如果你實在找不到，可以預約我們的專業風水顧問到府勘察，免費為你找出最佳財位。我們有超過 10 年的風水經驗，能準確找出任何戶型的財位。',
                  'A1: Almost all living rooms have a wealth position, it\'s just that some layouts are not very obvious. If you really can\'t find it, you can book our professional feng shui consultant for a home inspection to find the best wealth position for free. We have over 10 years of feng shui experience and can accurately find the wealth position of any home layout.'
                )}
              </p>
            </div>

            <div className="bg-muted/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                ❓ {t('Q2：空氣淨化機需要 24 小時運轉嗎？', 'Q2: Does the air purifier need to operate 24 hours?')}
              </h3>
              <p className="text-muted-foreground">
                {t(
                  'A2：建議至少每天運轉 12 小時以上，最好是 24 小時持續運轉。這樣能確保財位能量場始終保持最佳狀態。現代空氣淨化機非常省電，24 小時運轉的電費每月約 50-100 港幣，遠低於你因財運提升而獲得的收益。',
                  'A2: It is recommended to operate at least 12 hours per day, preferably 24 hours continuously. This ensures the wealth position energy field is always in optimal condition. Modern air purifiers are very energy-efficient, and the electricity cost for 24-hour operation is about HK$50-100 per month, far less than the benefits you gain from improved fortune.'
                )}
              </p>
            </div>

            <div className="bg-muted/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                ❓ {t('Q3：我需要買很貴的空氣淨化機嗎？', 'Q3: Do I need to buy a very expensive air purifier?')}
              </h3>
              <p className="text-muted-foreground">
                {t(
                  'A3：不一定。關鍵在於淨化機的過濾效率與量子調頻技術。我們推薦的淨化機價格從 2,000-8,000 港幣不等，都能達到很好的風水效果。最重要的是正確擺放位置，而非價格高低。我們的顧問會根據你的預算推薦最合適的機型。',
                  'A3: Not necessarily. The key is the purifier\'s filtration efficiency and quantum frequency tuning technology. The purifiers we recommend range from HK$2,000-8,000, all achieving good feng shui effects. The most important thing is correct placement, not price. Our consultants will recommend the most suitable model based on your budget.'
                )}
              </p>
            </div>

            <div className="bg-muted/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                ❓ {t('Q4：多久能看到財運改善的效果？', 'Q4: How long until I see fortune improvement effects?')}
              </h3>
              <p className="text-muted-foreground">
                {t(
                  'A4：根據我們的客戶回饋，大部分人在使用 1-2 週後就能感受到明顯變化（如心情變好、思路清晰）。財運方面的改善通常在 1-3 個月內顯現（如投資獲利、事業機會增加）。當然，每個家庭情況不同，效果出現的時間也會有差異。',
                  'A4: According to our customer feedback, most people feel noticeable changes (such as better mood, clearer thinking) after 1-2 weeks of use. Fortune improvements usually appear within 1-3 months (such as investment profits, increased career opportunities). Of course, each family situation is different, and the time for effects to appear will vary.'
                )}
              </p>
            </div>

            <div className="bg-muted/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                ❓ {t('Q5：如果財位已經有家具怎麼辦？', 'Q5: What if there is furniture in the wealth position?')}
              </h3>
              <p className="text-muted-foreground">
                {t(
                  'A5：如果財位已經有沙發、電視櫃等家具，不需要全部移走。你可以將空氣淨化機放在家具旁邊，或者整合到家具的一部分（如電視櫃側面）。重要的是保持財位區域的清潔與通風，不要讓雜物堆積。',
                  'A5: If there is furniture like sofas or TV cabinets in the wealth position, you don\'t need to remove everything. You can place the air purifier next to the furniture, or integrate it into part of the furniture (such as the side of the TV cabinet). The important thing is to keep the wealth position area clean and ventilated, and not let clutter accumulate.'
                )}
              </p>
            </div>

            <div className="bg-muted/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                ❓ {t('Q6：量子調頻技術是什麼？真的有效嗎？', 'Q6: What is quantum frequency tuning technology? Does it really work?')}
              </h3>
              <p className="text-muted-foreground">
                {t(
                  'A6：量子調頻技術是基於量子物理學的「頻率共振」原理。簡單來說，它能調整空間的能量頻率，與富足豐盛的頻率對齊。這項技術已經過多年研發，並通過大量客戶案例驗證。如果你想進一步了解技術細節，歡迎預約我們的免費諮詢。',
                  'A6: Quantum frequency tuning technology is based on the "frequency resonance" principle of quantum physics. Simply put, it can adjust the energy frequency of space to align with the frequency of abundance and prosperity. This technology has been developed for many years and verified through numerous customer cases. If you want to learn more about the technical details, feel free to book our free consultation.'
                )}
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: Call to Action */}
        <section className="mb-12 bg-gradient-to-br from-accent/20 via-secondary/20 to-primary/20 p-8 rounded-2xl border border-accent/30">
          <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
            {t('準備好改善你的家庭財運了嗎？', 'Ready to Improve Your Family Fortune?')}
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-8 leading-relaxed">
            {t(
              '立即聯繫我們，獲得專業風水顧問的免費諮詢！我們將為你量身定制客廳財位的空氣淨化方案，幫助你打造招財進寶的黃金家居。',
              'Contact us now for a free consultation with a professional feng shui consultant! We will customize a living room wealth position air purification plan for you, helping you create a golden home that attracts wealth and prosperity.'
            )}
          </p>
          <div className="flex justify-center items-center">
            <Link href="/contact">
              <a className="inline-flex items-center px-10 py-4 bg-gradient-to-r from-accent to-secondary text-accent-foreground font-semibold rounded-xl hover:shadow-xl hover:shadow-accent/30 transition-all duration-300 transform hover:-translate-y-1">
                {t('立即預約免費諮詢', 'Book Free Consultation Now')}
              </a>
            </Link>
          </div>
        </section>

        {/* Related Articles */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            {t('相關文章推薦', 'Related Articles')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/blog/office-career-feng-shui">
              <a className="block bg-muted/50 border border-border rounded-xl p-6 hover:border-accent hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {t(
                    '辦公室空氣淨化機擺錯位置？量子風水教你3招扭轉事業運',
                    'Office Air Purifier Wrong Position? 3 Quantum Feng Shui Tricks to Transform Your Career'
                  )}
                </h3>
                <p className="text-muted-foreground">
                  {t(
                    '了解如何用正確的空氣淨化機擺位，扭轉事業困境...',
                    'Learn how to use correct air purifier placement to transform career challenges...'
                  )}
                </p>
              </a>
            </Link>
            <Link href="/blog/bedroom-harmony-feng-shui">
              <a className="block bg-muted/50 border border-border rounded-xl p-6 hover:border-accent hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {t(
                    '夫妻臥室的量子風水秘密：如何用空氣淨化提升感情和諧度',
                    'Couple Bedroom Quantum Feng Shui Secrets: Enhance Relationship Harmony with Air Purification'
                  )}
                </h3>
                <p className="text-muted-foreground">
                  {t(
                    '空氣淨化機的正確擺位與量子調頻，能有效提升臥室的「感情頻率」...',
                    'Correct air purifier placement and quantum tuning can effectively enhance bedroom emotional frequency...'
                  )}
                </p>
              </a>
            </Link>
          </div>
        </section>
      </article>
    </div>
  );
}
