import { useLanguage } from '../contexts/LanguageContext';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import { Link } from 'wouter';

export default function CustomerTestimonialArticle() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      {/* Back to Blog Button */}
      <div className="bg-section-dark border-b border-border/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/blog">
            <a className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors">
              <ArrowLeft className="w-4 h-4" />
              {t('返回博客列表', 'Back to Blog')}
            </a>
          </Link>
        </div>
      </div>

      {/* Article Header */}
      <div className="bg-gradient-to-br from-primary/10 via-secondary/5 to-background py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4 text-accent" />
              <span>2026-01-25</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4 text-accent" />
              <span>6 {t('分鐘閱讀', 'min read')}</span>
            </div>
            <div className="px-3 py-1 bg-accent/20 text-accent text-xs font-semibold rounded-full">
              {t('客戶見證', 'Customer Testimonial')}
            </div>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {t(
              '風水客戶見證：從失眠到精力充沛 - 張太太的真實故事',
              'Feng Shui Customer Testimonial: From Insomnia to Full Energy - Mrs. Zhang\'s Real Story'
            )}
          </h1>
        </div>
      </div>

      {/* Article Content */}
      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg prose-invert max-w-none">
            {/* 客戶背景 */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">
                {t('客戶背景：一位追求完美的現代女性', 'Client Background: A Modern Woman Pursuing Perfection')}
              </h2>
              <p className="text-foreground/90 leading-relaxed mb-4">
                張太太，45 歲，居住在香港九龍區一處樓齡約 20 年的私人屋苑高層單位。她是一位成功的自由職業者，從事高端設計顧問工作，對生活品質有著極高的要求。她的家居裝潢簡潔優雅，配備了多款頂級智能家居設備，包括一台最新的高效能空氣淨化機。張太太的生活看似完美，但長期以來，她一直被一個隱形的問題困擾：無論物質條件多麼優越，她始終無法獲得深層、安穩的睡眠。
              </p>
              <p className="text-foreground/90 leading-relaxed">
                張太太的職業性質要求她保持高度的創造力和專注力，因此，一個和諧、充滿正能量的家居環境對她來說至關重要。她深信環境對人的影響，也曾嘗試過傳統的風水佈局，但效果始終不彰。她意識到，現代城市環境中的某些「無形干擾」，是傳統風水學難以完全解決的。她尋求的，是一個能夠將現代科技與傳統智慧完美結合的解決方案。
              </p>
            </section>

            {/* 問題描述 */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">
                {t('問題描述：被「無形污染」困擾的七年', 'Problem Description: Seven Years Troubled by "Invisible Pollution"')}
              </h2>
              <p className="text-foreground/90 leading-relaxed mb-4">
                張太太的失眠問題已經持續了近七年。起初只是偶爾的入睡困難，但隨著時間推移，演變成了<strong>「淺眠多夢、凌晨三點準時醒來、醒後難以再入睡」</strong>的惡性循環。
              </p>

              <div className="my-8">
                <img
                  src="/images/blog/insomnia-3am.jpg"
                  alt={t('凌晨三點失眠醒來的張太太', 'Mrs. Zhang waking up with insomnia at 3 AM')}
                  className="w-full rounded-xl shadow-lg"
                />
                <p className="text-sm text-muted-foreground mt-2 text-center italic">
                  {t('圖1：張太太長期被凌晨三點準時醒來的失眠問題困擾', 'Figure 1: Mrs. Zhang troubled by chronic insomnia, waking at 3 AM regularly')}
                </p>
              </div>

              <div className="bg-section-dark border border-border/30 rounded-xl p-6 mb-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">{t('她嘗試了所有傳統方法：', 'She tried all traditional methods:')}</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <div>
                      <strong className="text-accent">{t('醫療與保健：', 'Medical & Healthcare:')}</strong>
                      <span className="text-foreground/80 ml-2">尋求過中西醫幫助，服用過褪黑激素、安眠藥，但藥物依賴讓她感到焦慮。</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <div>
                      <strong className="text-accent">{t('環境優化：', 'Environment Optimization:')}</strong>
                      <span className="text-foreground/80 ml-2">購買了頂級的空氣淨化機、遮光窗簾、香薰機，甚至更換了數萬元的高級床墊。</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <div>
                      <strong className="text-accent">{t('傳統風水：', 'Traditional Feng Shui:')}</strong>
                      <span className="text-foreground/80 ml-2">諮詢過傳統風水師，調整了床位、擺放了水晶和風水擺件，但效果微乎其微。</span>
                    </div>
                  </li>
                </ul>
              </div>

              <p className="text-foreground/90 leading-relaxed">
                張太太描述，她總感覺臥室的氣場是<strong>「混亂且沉重」的。即使空氣淨化機顯示 PM2.5 為零，她仍然感到一種難以言喻的「壓迫感」。這種「壓迫感」導致她白天精神不濟、情緒波動大，設計靈感枯竭，工作效率嚴重下降。她懷疑，問題的根源可能不是肉眼可見的污染物，而是現代家居中無處不在的電磁波、無線信號，以及累積的負面情緒能量</strong>。
              </p>
            </section>

            {/* 解決方案 */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">
                {t('解決方案：量子風水的三維淨化', 'Solution: Three-Dimensional Purification of Quantum Feng Shui')}
              </h2>
              <p className="text-foreground/90 leading-relaxed mb-4">
                在朋友的推薦下，張太太找到了黎Sir 的「量子風水空氣淨化服務」。她最初抱著半信半疑的態度，但黎Sir 團隊的科學化、數據化的分析方法讓她決定嘗試。
              </p>

              <div className="my-8">
                <img
                  src="/images/blog/electromagnetic-vs-quantum.jpg"
                  alt={t('電磁污染與量子調頻技術對比', 'Comparison between electromagnetic pollution and quantum frequency technology')}
                  className="w-full rounded-xl shadow-lg"
                />
                <p className="text-sm text-muted-foreground mt-2 text-center italic">
                  {t('圖2：量子調頻技術中和電磁波干擾，優化空間能量場', 'Figure 2: Quantum frequency technology neutralizing electromagnetic interference and optimizing space energy field')}
                </p>
              </div>

              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/30 rounded-xl p-6 mb-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">{t('黎Sir 團隊採用的解決方案是「三維淨化」：', 'Team adopted a "Three-Dimensional Purification" solution:')}</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-accent pl-4">
                    <h4 className="font-semibold text-accent mb-2">{t('1. 精準測量與診斷', '1. Precise Measurement and Diagnosis')}</h4>
                    <p className="text-foreground/80 text-sm">
                      團隊首先使用高精度儀器，對張太太的臥室進行了<strong>「能量頻率掃描」。結果顯示，臥室內存在多個高頻電磁波干擾點，且空間的「生命能量指數」（LEI）</strong>遠低於健康標準。
                    </p>
                  </div>
                  <div className="border-l-4 border-secondary pl-4">
                    <h4 className="font-semibold text-secondary mb-2">{t('2. 量子調頻技術導入', '2. Quantum Frequency Tuning Technology Introduction')}</h4>
                    <p className="text-foreground/80 text-sm">
                      團隊並非要求張太太更換現有的空氣淨化機，而是利用量子調頻技術，對其淨化機進行了能量優化。這項技術的核心是發射一種與人體和諧共振的高頻能量波，以中和空間中混亂的低頻電磁波和負面情緒能量。
                    </p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold text-primary mb-2">{t('3. 風水擺位微調', '3. Feng Shui Positioning Fine-tuning')}</h4>
                    <p className="text-foreground/80 text-sm">
                      根據能量掃描結果，團隊微調了淨化機的擺放位置，使其避開了電磁波干擾點，並將其出風口指向了臥室的<strong>「生氣位」，確保淨化機輸出的不僅是潔淨的空氣，更是穩定、高頻的「旺氣」</strong>。
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-foreground/90 leading-relaxed">
                整個過程不涉及任何大規模的裝修或擺件更換，而是專注於<strong>「無形氣場」</strong>的優化。
              </p>
            </section>

            {/* 結果和改變 */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">
                {t('結果和改變：從淺眠到精力充沛的蛻變', 'Results and Changes: Transformation from Shallow Sleep to Full Energy')}
              </h2>
              <p className="text-foreground/90 leading-relaxed mb-6">
                在實施量子風水淨化方案後的第三天，張太太就感受到了明顯的變化。
              </p>

              <div className="my-8">
                <img
                  src="/images/blog/energetic-workspace.jpg"
                  alt={t('精力充沛工作中的張太太', 'Mrs. Zhang working energetically after the service')}
                  className="w-full rounded-xl shadow-lg"
                />
                <p className="text-sm text-muted-foreground mt-2 text-center italic">
                  {t('圖3：服務後的張太太精力充沛，工作效率顯著提升', 'Figure 3: Mrs. Zhang full of energy after service, work efficiency significantly improved')}
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/30 rounded-xl p-6">
                  <h4 className="font-semibold text-accent mb-3">{t('睡眠質量', 'Sleep Quality')}</h4>
                  <p className="text-foreground/80 text-sm leading-relaxed">
                    她不再需要依賴藥物，入睡時間從原來的 1 小時縮短到 15 分鐘內。最重要的是，她能夠一覺睡到天亮，<strong>「凌晨三點醒來」的魔咒徹底被打破</strong>。她形容：「那種感覺就像是臥室的空氣突然變得『輕盈』了，身體完全放鬆，進入了久違的深層睡眠。」
                  </p>
                </div>
                <div className="bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 rounded-xl p-6">
                  <h4 className="font-semibold text-primary mb-3">{t('日間精力', 'Daily Energy')}</h4>
                  <p className="text-foreground/80 text-sm leading-relaxed">
                    由於睡眠質量的大幅提升，張太太白天的精力變得異常充沛。她不再需要咖啡因來維持專注，設計靈感如泉湧般湧現，<strong>工作效率提高了至少 40%</strong>。
                  </p>
                </div>
                <div className="bg-gradient-to-br from-secondary/20 to-secondary/5 border border-secondary/30 rounded-xl p-6">
                  <h4 className="font-semibold text-secondary mb-3">{t('情緒與人際', 'Emotions & Relationships')}</h4>
                  <p className="text-foreground/80 text-sm leading-relaxed">
                    她的情緒變得更加穩定和積極。她發現與客戶的溝通更加順暢，甚至在一個月內成功簽下了一個她追蹤了近半年的大型設計合約。她深信，這不僅是運氣，更是氣場優化帶來的連鎖反應。
                  </p>
                </div>
              </div>

              <p className="text-foreground/90 leading-relaxed text-center text-lg font-semibold text-accent">
                張太太的真實故事證明，量子風水空氣淨化服務不僅能解決物質層面的空氣污染，更能從能量層面徹底改善家居氣場，為現代人帶來身心靈的全面和諧。
              </p>
            </section>

            {/* 數據統計 */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">
                {t('數據統計：可量化的改善', 'Data Statistics: Quantifiable Improvements')}
              </h2>
              <p className="text-foreground/90 leading-relaxed mb-6">
                為了確保服務的科學性，黎Sir 團隊在張太太同意下，對其臥室的環境數據進行了前後對比：
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-primary/20">
                      <th className="border border-border/30 p-3 text-left">{t('測量指標', 'Metric')}</th>
                      <th className="border border-border/30 p-3 text-center">{t('服務前', 'Before')}</th>
                      <th className="border border-border/30 p-3 text-center">{t('服務後', 'After')}</th>
                      <th className="border border-border/30 p-3 text-center">{t('改善幅度', 'Improvement')}</th>
                    </tr>
                  </thead>
                  <tbody className="text-foreground/80">
                    <tr>
                      <td className="border border-border/30 p-3 font-semibold">{t('平均入睡時間', 'Average Sleep Onset Time')}</td>
                      <td className="border border-border/30 p-3 text-center">{t('60 分鐘', '60 minutes')}</td>
                      <td className="border border-border/30 p-3 text-center">{t('15 分鐘', '15 minutes')}</td>
                      <td className="border border-border/30 p-3 text-center text-accent font-semibold">↓ 75%</td>
                    </tr>
                    <tr className="bg-muted/30">
                      <td className="border border-border/30 p-3 font-semibold">{t('夜間醒來次數', 'Night Wakings')}</td>
                      <td className="border border-border/30 p-3 text-center">{t('3-5 次', '3-5 times')}</td>
                      <td className="border border-border/30 p-3 text-center">{t('0-1 次', '0-1 times')}</td>
                      <td className="border border-border/30 p-3 text-center text-accent font-semibold">↓ 80%</td>
                    </tr>
                    <tr>
                      <td className="border border-border/30 p-3 font-semibold">{t('深層睡眠時間', 'Deep Sleep Duration')}</td>
                      <td className="border border-border/30 p-3 text-center">{t('1.2 小時', '1.2 hours')}</td>
                      <td className="border border-border/30 p-3 text-center">{t('3.5 小時', '3.5 hours')}</td>
                      <td className="border border-border/30 p-3 text-center text-accent font-semibold">↑ 191%</td>
                    </tr>
                    <tr className="bg-muted/30">
                      <td className="border border-border/30 p-3 font-semibold">{t('生命能量指數 (LEI)', 'Life Energy Index (LEI)')}</td>
                      <td className="border border-border/30 p-3 text-center">42/100</td>
                      <td className="border border-border/30 p-3 text-center">88/100</td>
                      <td className="border border-border/30 p-3 text-center text-accent font-semibold">↑ 109%</td>
                    </tr>
                    <tr>
                      <td className="border border-border/30 p-3 font-semibold">{t('白天疲勞感評分', 'Daytime Fatigue Score')}</td>
                      <td className="border border-border/30 p-3 text-center">{t('8.5/10 (高)', '8.5/10 (High)')}</td>
                      <td className="border border-border/30 p-3 text-center">{t('2.5/10 (低)', '2.5/10 (Low)')}</td>
                      <td className="border border-border/30 p-3 text-center text-accent font-semibold">↓ 70%</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-foreground/90 leading-relaxed mt-6">
                這些數據清晰地展示了量子調頻技術在優化家居氣場方面的卓越效果。
              </p>
            </section>

            {/* 其他客戶見證 */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">
                {t('其他客戶見證：多維度的積極改變', 'Other Customer Testimonials: Multi-dimensional Positive Changes')}
              </h2>
              <p className="text-foreground/90 leading-relaxed mb-6">
                張太太的故事並非個例。我們的客戶群體涵蓋了各行各業，他們都從量子風水淨化服務中獲得了多維度的積極改變：
              </p>

              <div className="space-y-4">
                <div className="bg-section-dark border border-border/30 rounded-xl p-6">
                  <h4 className="font-semibold text-primary mb-2">{t('陳先生（金融業高管）', 'Mr. Chen (Financial Executive)')}</h4>
                  <p className="text-foreground/80 leading-relaxed">
                    「自從黎Sir 調整了我的書房氣場後，我的決策效率明顯提高，不再感到焦慮。兩個月內，我成功完成了一筆數千萬的併購案。我認為這是一種<strong>『能量上的優勢』</strong>。」
                  </p>
                </div>

                <div className="bg-section-dark border border-border/30 rounded-xl p-6">
                  <h4 className="font-semibold text-primary mb-2">{t('李小姐（全職媽媽）', 'Ms. Li (Full-time Mother)')}</h4>
                  <p className="text-foreground/80 leading-relaxed">
                    「我的孩子以前經常半夜哭鬧，醫生也找不出原因。實施量子淨化後，孩子睡得安穩了，家裡的爭吵也少了。這讓我覺得，家裡的『氣』真的變好了。」
                  </p>
                </div>

                <div className="bg-section-dark border border-border/30 rounded-xl p-6">
                  <h4 className="font-semibold text-primary mb-2">{t('王先生（創業家）', 'Mr. Wang (Entrepreneur)')}</h4>
                  <p className="text-foreground/80 leading-relaxed">
                    「我的辦公室位於商業大廈的『路沖位』，生意一直不順。黎Sir 建議我用量子調頻技術來<strong>『化煞為權』</strong>。現在，我的團隊氛圍更積極，訂單量也開始穩定增長。」
                  </p>
                </div>
              </div>

              <p className="text-foreground/90 leading-relaxed mt-6 text-center">
                這些見證共同指向一個事實：當家居氣場從<strong>「混亂低頻」轉變為「和諧高頻」</strong>時，居住者的健康、情緒和運勢都會隨之提升。
              </p>
            </section>

            {/* 立即行動 */}
            <section className="mb-8">
              <div className="bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 border border-primary/30 rounded-2xl p-8 text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-accent">
                  {t('立即行動：開啟您的氣場升級之旅', 'Take Action Now: Start Your Energy Field Upgrade Journey')}
                </h2>
                <p className="text-foreground/90 leading-relaxed mb-6 max-w-3xl mx-auto">
                  您是否也像過去的張太太一樣，被無形的壓力、失眠或運勢不順所困擾？
                </p>
                <p className="text-foreground/90 leading-relaxed mb-6 max-w-3xl mx-auto">
                  如果您厭倦了無效的傳統方法，渴望一個科學、高效、從根本上改善家居氣場的解決方案，那麼是時候了解量子風水空氣淨化服務了。
                </p>
                <p className="text-foreground/90 leading-relaxed mb-6 max-w-3xl mx-auto">
                  我們將為您提供一份專屬的「家居能量頻率診斷」，讓您親眼看到您的家居氣場數據。
                </p>
                <Link href="/contact">
                  <a className="inline-block px-8 py-4 bg-gradient-to-r from-primary to-accent text-white font-bold rounded-lg shadow-lg hover:shadow-cosmic transition-all duration-300 transform hover:scale-105">
                    {t('立即預約免費諮詢', 'Book Free Consultation Now')}
                  </a>
                </Link>
                <p className="text-foreground/80 text-sm mt-4">
                  立即行動，讓您的生活從「淺眠」轉變為「精力充沛」！
                </p>
              </div>
            </section>
          </div>
        </div>
      </article>
    </div>
  );
}
