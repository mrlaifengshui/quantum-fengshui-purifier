import { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowLeft, Briefcase, TrendingUp, Users, Sparkles, AlertTriangle, CheckCircle } from 'lucide-react';
import { Link } from 'wouter';

export default function OfficeCareerArticle() {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
            {t('辦公室空氣淨化機擺錯位置？難怪你升不了職！量子風水教你3招扭轉事業運', 'Air Purifier in Wrong Office Position? No Wonder You Can\'t Get Promoted! 3 Quantum Feng Shui Tricks to Transform Your Career')}
          </h1>
          <div className="flex items-center justify-center gap-6 text-muted-foreground">
            <span>{t('發布日期：2026-02-15', 'Published: 2026-02-15')}</span>
            <span>•</span>
            <span>{t('閱讀時間：10 分鐘', 'Read time: 10 min')}</span>
            <span>•</span>
            <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-semibold flex items-center gap-1">
              <Briefcase className="w-4 h-4" />
              {t('事業發展', 'Career Development')}
            </span>
          </div>
        </header>

        {/* 文章內容 */}
        <div className="prose prose-lg prose-invert max-w-none">
          
          {/* 引言 */}
          <section className="mb-12">
            <p className="text-xl leading-relaxed text-muted-foreground">
              {t(
                '你是否發現，明明工作很努力，卻總是得不到上司的賞識？同事一個個升職加薪，唯獨你原地踏步？或許問題不在你的能力，而在於辦公室的「能量場失衡」。從量子風水的角度來看，空氣淨化機的擺放位置，直接影響著你的「貴人運」、「事業運」和「財運」。本文將揭示辦公室風水的3大核心秘密，教你如何用正確的空氣淨化機擺位，扭轉事業困境，開啟升職加薪之路！',
                'Have you noticed that despite working hard, you never seem to get your boss\'s recognition? Colleagues getting promoted one after another, while you stay stuck? Perhaps the problem isn\'t your ability, but your office\'s "energy field imbalance." From a quantum feng shui perspective, the placement of your air purifier directly affects your "benefactor luck," "career luck," and "wealth luck." This article reveals 3 core office feng shui secrets, teaching you how to use correct air purifier placement to transform career difficulties and open the path to promotion and raises!'
              )}
            </p>
          </section>

          {/* 封面圖片 - 置於引言之後 */}
          <div className="mb-12 rounded-2xl overflow-hidden shadow-cosmic">
            <img
              src="/images/blog/office-career-placement.jpg"
              alt={t('辦公室事業位擺放示意圖', 'Office Career Position Placement Guide')}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* 第一招：找到辦公室的「貴人位」與「事業位」 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-accent flex items-center gap-2">
              <TrendingUp className="w-8 h-8" />
              {t('第一招：找到辦公室的「貴人位」與「事業位」', 'First Trick: Find Your Office "Benefactor Position" and "Career Position"')}
            </h2>
            
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/30 rounded-xl p-8 mb-6">
              <h3 className="text-2xl font-semibold mb-4 text-primary">
                {t('什麼是「貴人位」？', 'What is the "Benefactor Position"?')}
              </h3>
              <p className="text-foreground/90 leading-relaxed mb-4">
                {t(
                  '「貴人位」是辦公室中能夠吸引幫助、支持與提拔的能量位置。當空氣淨化機放在貴人位時，能夠淨化這個區域的負能量，同時通過量子調頻技術，增強你與上司、同事、客戶之間的正面能量連結，讓你更容易獲得他人的幫助和認可。',
                  'The "Benefactor Position" is the energy location in your office that attracts help, support, and promotion. When an air purifier is placed in the benefactor position, it can purify negative energy in this area while using quantum frequency tuning to strengthen positive energy connections with your boss, colleagues, and clients, making it easier to gain help and recognition from others.'
                )}
              </p>
              
              <div className="bg-background/50 rounded-lg p-6 border border-accent/20 mb-4">
                <h4 className="font-semibold text-accent mb-3">{t('如何找到你的貴人位？', 'How to Find Your Benefactor Position?')}</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-primary">{t('方法一：八字命理測算', 'Method 1: BaZi Calculation')}</strong>
                      <p className="text-sm text-foreground/80 mt-1">
                        {t('根據你的生辰八字，專業風水師可以精確計算出你的貴人位方位。這是最精準的方法。', 'Based on your BaZi (birth date and time), a professional feng shui master can precisely calculate your benefactor position direction. This is the most accurate method.')}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-primary">{t('方法二：簡易九宮格法', 'Method 2: Simple Nine Palace Grid')}</strong>
                      <p className="text-sm text-foreground/80 mt-1">
                        {t('站在辦公室門口，面向內部，右前方45度角通常是「貴人位」，適合大部分人。', 'Stand at the office entrance facing inward. The 45-degree angle to the front right is usually the "benefactor position" for most people.')}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-primary">{t('方法三：通用法則（西北方）', 'Method 3: Universal Rule (Northwest)')}</strong>
                      <p className="text-sm text-foreground/80 mt-1">
                        {t('在風水學中，西北方代表「乾位」，象徵領導、權威與貴人。如果不確定，可以優先考慮辦公室的西北角。', 'In feng shui, the northwest represents "Qian position," symbolizing leadership, authority, and benefactors. If unsure, prioritize the northwest corner of your office.')}
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-section-dark border border-border/30 rounded-xl p-6 mb-6">
              <h3 className="text-2xl font-semibold mb-4 text-primary">
                {t('什麼是「事業位」？', 'What is the "Career Position"?')}
              </h3>
              <p className="text-foreground/90 leading-relaxed mb-4">
                {t(
                  '「事業位」是影響你工作表現、業績成果與升遷機會的能量位置。這個位置的能量場直接關係到你的專注力、決策力和執行力。空氣淨化機放在事業位，能夠清除工作中的「阻礙之氣」，提升整體工作效率。',
                  'The "Career Position" is the energy location that affects your work performance, achievement results, and promotion opportunities. The energy field in this position directly relates to your focus, decision-making ability, and execution power. An air purifier placed in the career position can remove "obstructive qi" from work and enhance overall work efficiency.'
                )}
              </p>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-background/50 rounded-lg p-4 border border-primary/20">
                  <h4 className="font-semibold text-accent mb-2">{t('事業位：北方', 'Career Position: North')}</h4>
                  <p className="text-sm text-foreground/80">
                    {t('北方屬水，代表事業發展的流動性。適合業務、銷售、創意工作者。', 'North belongs to water, representing career flow. Suitable for sales, business, and creative workers.')}
                  </p>
                </div>
                <div className="bg-background/50 rounded-lg p-4 border border-primary/20">
                  <h4 className="font-semibold text-accent mb-2">{t('事業位：東方', 'Career Position: East')}</h4>
                  <p className="text-sm text-foreground/80">
                    {t('東方屬木，代表事業的成長力。適合創業者、管理者、企業家。', 'East belongs to wood, representing career growth. Suitable for entrepreneurs, managers, and business owners.')}
                  </p>
                </div>
                <div className="bg-background/50 rounded-lg p-4 border border-primary/20">
                  <h4 className="font-semibold text-accent mb-2">{t('事業位：南方', 'Career Position: South')}</h4>
                  <p className="text-sm text-foreground/80">
                    {t('南方屬火，代表事業的爆發力。適合表演者、講師、公眾人物。', 'South belongs to fire, representing career explosive power. Suitable for performers, speakers, and public figures.')}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-accent/10 border border-accent/30 rounded-lg p-6">
              <h4 className="font-semibold text-accent mb-3 flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                {t('💡 實戰技巧：雙重佈局法', '💡 Practical Tip: Dual Layout Method')}
              </h4>
              <p className="text-foreground/90 text-sm">
                {t(
                  '如果辦公室空間允許，可以放置兩台空氣淨化機：一台放在「貴人位」（吸引幫助），一台放在「事業位」（提升表現）。這種「雙重佈局」能夠全方位提升你的職場運勢，效果更加顯著。',
                  'If office space allows, place two air purifiers: one in the "benefactor position" (attract help) and one in the "career position" (enhance performance). This "dual layout" can comprehensively enhance your career fortune with more significant effects.'
                )}
              </p>
            </div>
          </section>

          {/* 圖片：辦公室平面圖 */}
          <div className="my-12">
            <img
              src="/images/blog/office-floor-plan.jpg"
              alt={t('辦公室空氣淨化機擺位指南', 'Office Air Purifier Placement Guide')}
              className="w-full h-auto rounded-2xl shadow-cosmic"
            />
            <p className="text-center text-sm text-muted-foreground mt-4">
              {t('▲ 辦公室空氣淨化機擺位指南：綠色為最佳位置，黃色為次選位置，紅色為禁忌位置', '▲ Office Air Purifier Placement Guide: Green for best position, yellow for alternative, red for forbidden zones')}
            </p>
          </div>

          {/* 第二招：避開辦公室的5大風水禁忌 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-accent flex items-center gap-2">
              <AlertTriangle className="w-8 h-8" />
              {t('第二招：避開辦公室的5大風水禁忌', 'Second Trick: Avoid 5 Major Office Feng Shui Taboos')}
            </h2>
            
            <p className="text-foreground/90 mb-6">
              {t(
                '即使找到了貴人位和事業位，如果觸犯了辦公室風水禁忌，不僅無法提升運勢，反而可能招致「煞氣」，阻礙事業發展。以下是最常見的5大禁忌：',
                'Even if you find the benefactor and career positions, violating office feng shui taboos will not only fail to enhance fortune but may attract "sha qi," hindering career development. Here are the 5 most common taboos:'
              )}
            </p>

            <div className="space-y-6">
              {/* 禁忌1 */}
              <div className="bg-section-dark border-l-4 border-red-500 rounded-r-xl p-6">
                <h3 className="text-xl font-semibold mb-3 text-red-400 flex items-center gap-2">
                  <span className="bg-red-500/20 px-3 py-1 rounded-full text-sm">{t('禁忌 1', 'Taboo 1')}</span>
                  {t('空氣淨化機直接對著座位吹', 'Air Purifier Blowing Directly at Seat')}
                </h3>
                <p className="text-foreground/80 mb-3">
                  <strong className="text-accent">{t('能量影響：', 'Energy Impact:')}</strong>
                  {t('氣流直衝會形成「氣煞」，導致精神不集中、頭痛、疲勞，甚至引發與同事的矛盾。', 'Direct airflow creates "qi sha," causing poor concentration, headaches, fatigue, and even conflicts with colleagues.')}
                </p>
                <p className="text-foreground/80 mb-3">
                  <strong className="text-accent">{t('後果：', 'Consequence:')}</strong>
                  {t('工作效率下降、決策失誤頻繁、人際關係緊張、升職機會流失。', 'Decreased work efficiency, frequent decision errors, tense interpersonal relationships, lost promotion opportunities.')}
                </p>
                <p className="text-foreground/80">
                  <strong className="text-secondary">{t('解決方案：', 'Solution:')}</strong>
                  {t('調整空氣淨化機的角度，讓氣流朝向牆壁或天花板反射，形成溫和的循環氣流，而非直接衝擊人體。', 'Adjust the air purifier angle to direct airflow toward walls or ceiling for gentle circulation, not direct impact on the body.')}
                </p>
              </div>

              {/* 禁忌2 */}
              <div className="bg-section-dark border-l-4 border-red-500 rounded-r-xl p-6">
                <h3 className="text-xl font-semibold mb-3 text-red-400 flex items-center gap-2">
                  <span className="bg-red-500/20 px-3 py-1 rounded-full text-sm">{t('禁忌 2', 'Taboo 2')}</span>
                  {t('放在座位正後方（背後無靠）', 'Placed Directly Behind Seat (No Back Support)')}
                </h3>
                <p className="text-foreground/80 mb-3">
                  <strong className="text-accent">{t('能量影響：', 'Energy Impact:')}</strong>
                  {t('在風水學中，座位後方代表「靠山」，象徵貴人與支持。如果空氣淨化機放在正後方，會破壞「靠山」的能量，讓你感覺孤立無援。', 'In feng shui, the back of a seat represents "backing," symbolizing benefactors and support. An air purifier directly behind destroys this "backing" energy, making you feel isolated and unsupported.')}
                </p>
                <p className="text-foreground/80 mb-3">
                  <strong className="text-accent">{t('後果：', 'Consequence:')}</strong>
                  {t('缺乏貴人相助、容易被小人陷害、工作中常感到不安全感、背黑鍋的機會增加。', 'Lack of benefactor help, easy to be framed by villains, frequent insecurity at work, increased chance of taking blame.')}
                </p>
                <p className="text-foreground/80">
                  <strong className="text-secondary">{t('解決方案：', 'Solution:')}</strong>
                  {t('將空氣淨化機移到座位側面或斜後方45度角，保持背後有實牆或高櫃作為「靠山」。', 'Move the air purifier to the side or 45-degree angle behind the seat, keeping a solid wall or tall cabinet as "backing."')}
                </p>
              </div>

              {/* 禁忌3 */}
              <div className="bg-section-dark border-l-4 border-red-500 rounded-r-xl p-6">
                <h3 className="text-xl font-semibold mb-3 text-red-400 flex items-center gap-2">
                  <span className="bg-red-500/20 px-3 py-1 rounded-full text-sm">{t('禁忌 3', 'Taboo 3')}</span>
                  {t('放在門口正對位置（財氣外洩）', 'Placed Directly Facing Door (Wealth Qi Leaking)')}
                </h3>
                <p className="text-foreground/80 mb-3">
                  <strong className="text-accent">{t('能量影響：', 'Energy Impact:')}</strong>
                  {t('門口是氣流進出的通道，空氣淨化機對著門口會造成「氣散不聚」，導致財氣、事業運無法累積。', 'The doorway is the passage for qi flow. An air purifier facing the door causes "qi dispersion," preventing accumulation of wealth and career luck.')}
                </p>
                <p className="text-foreground/80 mb-3">
                  <strong className="text-accent">{t('後果：', 'Consequence:')}</strong>
                  {t('收入不穩定、獎金縮水、投資失利、機會來得快去得也快。', 'Unstable income, reduced bonuses, investment losses, opportunities come and go quickly.')}
                </p>
                <p className="text-foreground/80">
                  <strong className="text-secondary">{t('解決方案：', 'Solution:')}</strong>
                  {t('將空氣淨化機移到門口側邊或對角線位置，讓氣流在室內形成迴旋，聚集能量而非直接外洩。', 'Move the air purifier to the side or diagonal position from the door, creating circular airflow that gathers energy rather than directly leaking out.')}
                </p>
              </div>

              {/* 禁忌4 */}
              <div className="bg-section-dark border-l-4 border-red-500 rounded-r-xl p-6">
                <h3 className="text-xl font-semibold mb-3 text-red-400 flex items-center gap-2">
                  <span className="bg-red-500/20 px-3 py-1 rounded-full text-sm">{t('禁忌 4', 'Taboo 4')}</span>
                  {t('與影印機、微波爐並列（電磁波干擾）', 'Placed Near Copier or Microwave (EMF Interference)')}
                </h3>
                <p className="text-foreground/80 mb-3">
                  <strong className="text-accent">{t('能量影響：', 'Energy Impact:')}</strong>
                  {t('影印機、微波爐會產生強烈的電磁波，與空氣淨化機放在一起會形成「電磁煞」，干擾量子調頻效果。', 'Copiers and microwaves generate strong EMF. Placing them together with an air purifier creates "EMF sha," interfering with quantum frequency tuning effects.')}
                </p>
                <p className="text-foreground/80 mb-3">
                  <strong className="text-accent">{t('後果：', 'Consequence:')}</strong>
                  {t('思緒混亂、判斷力下降、健康問題（頭痛、失眠）、運勢波動劇烈。', 'Confused thinking, decreased judgment, health issues (headaches, insomnia), severe fortune fluctuations.')}
                </p>
                <p className="text-foreground/80">
                  <strong className="text-secondary">{t('解決方案：', 'Solution:')}</strong>
                  {t('保持空氣淨化機與高電磁設備的距離至少2米以上，或使用量子調頻技術來中和電磁波干擾。', 'Keep at least 2 meters distance between air purifier and high-EMF devices, or use quantum frequency tuning to neutralize EMF interference.')}
                </p>
              </div>

              {/* 禁忌5 */}
              <div className="bg-section-dark border-l-4 border-red-500 rounded-r-xl p-6">
                <h3 className="text-xl font-semibold mb-3 text-red-400 flex items-center gap-2">
                  <span className="bg-red-500/20 px-3 py-1 rounded-full text-sm">{t('禁忌 5', 'Taboo 5')}</span>
                  {t('長期不清潔濾網（負能量累積）', 'Never Cleaning Filter (Negative Energy Accumulation)')}
                </h3>
                <p className="text-foreground/80 mb-3">
                  <strong className="text-accent">{t('能量影響：', 'Energy Impact:')}</strong>
                  {t('髒污的濾網會累積大量負能量，不僅無法淨化空氣，反而會釋放「穢氣」，污染辦公室能量場。', 'Dirty filters accumulate massive negative energy. Instead of purifying air, they release "foul qi," polluting the office energy field.')}
                </p>
                <p className="text-foreground/80 mb-3">
                  <strong className="text-accent">{t('後果：', 'Consequence:')}</strong>
                  {t('事業發展受阻、小人增多、健康問題頻發、運勢越來越差。', 'Career development blocked, increased villains, frequent health issues, worsening fortune.')}
                </p>
                <p className="text-foreground/80">
                  <strong className="text-secondary">{t('解決方案：', 'Solution:')}</strong>
                  {t('每月至少清潔一次濾網，每3-6個月更換一次。定期清潔等同於「能量重置」，讓空氣淨化機恢復最佳狀態。', 'Clean filter at least monthly, replace every 3-6 months. Regular cleaning equals "energy reset," restoring air purifier to optimal state.')}
                </p>
              </div>
            </div>
          </section>

          {/* 圖片：改善前後對比 */}
          <div className="my-12">
            <img
              src="/images/blog/office-before-after.jpg"
              alt={t('辦公室能量場改善前後對比', 'Office Energy Field Before and After Comparison')}
              className="w-full h-auto rounded-2xl shadow-cosmic"
            />
            <p className="text-center text-sm text-muted-foreground mt-4">
              {t('▲ 辦公室能量場改善前後對比：左側為錯誤擺位導致的混亂能量場，右側為正確擺位後的和諧能量場', '▲ Office Energy Field Before and After: Left shows chaotic field from wrong placement, right shows harmonious field after correct placement')}
            </p>
          </div>

          {/* 第三招：量子調頻的「事業頻率」優化 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-accent flex items-center gap-2">
              <Sparkles className="w-8 h-8" />
              {t('第三招：量子調頻的「事業頻率」優化', 'Third Trick: Quantum Frequency Tuning for "Career Frequency" Optimization')}
            </h2>
            
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/30 rounded-xl p-6 mb-6">
              <h3 className="text-2xl font-semibold mb-4 text-primary">
                {t('什麼是「事業頻率」？', 'What is "Career Frequency"?')}
              </h3>
              <p className="text-foreground/90 leading-relaxed mb-4">
                {t(
                  '從量子物理學的角度，每個人的事業發展都有特定的「振動頻率」。當你的個人頻率與「成功頻率」同步時，工作會變得順暢、機會自動出現、貴人主動幫助。反之，當頻率不協調時，就會遇到各種阻礙。量子調頻技術能調整辦公室的能量場，讓你的「事業頻率」重新校準至最佳狀態。',
                  'From a quantum physics perspective, everyone\'s career development has a specific "vibration frequency." When your personal frequency syncs with the "success frequency," work becomes smooth, opportunities appear automatically, and benefactors help willingly. Conversely, when frequencies are discordant, various obstacles arise. Quantum frequency tuning can adjust your office energy field, recalibrating your "career frequency" to optimal state.'
                )}
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-background/50 rounded-lg p-4 border border-accent/20">
                  <h4 className="font-semibold text-accent mb-2">{t('成功頻率：528 Hz', 'Success Frequency: 528 Hz')}</h4>
                  <p className="text-sm text-foreground/80">
                    {t('被稱為「奇蹟頻率」，能夠修復DNA、提升創造力、增強自信心。適合創業者、管理者使用。', 'Called "miracle frequency," it can repair DNA, enhance creativity, boost confidence. Suitable for entrepreneurs and managers.')}
                  </p>
                </div>
                <div className="bg-background/50 rounded-lg p-4 border border-accent/20">
                  <h4 className="font-semibold text-accent mb-2">{t('貴人頻率：639 Hz', 'Benefactor Frequency: 639 Hz')}</h4>
                  <p className="text-sm text-foreground/80">
                    {t('能夠促進溝通、改善人際關係、吸引貴人相助。適合需要團隊合作、客戶關係的工作者。', 'Promotes communication, improves interpersonal relationships, attracts benefactor help. Suitable for teamwork and client-facing workers.')}
                  </p>
                </div>
                <div className="bg-background/50 rounded-lg p-4 border border-accent/20">
                  <h4 className="font-semibold text-accent mb-2">{t('財富頻率：741 Hz', 'Wealth Frequency: 741 Hz')}</h4>
                  <p className="text-sm text-foreground/80">
                    {t('能夠清除負面思維、增強直覺力、提升財富磁場。適合業務、銷售、投資相關工作者。', 'Clears negative thinking, enhances intuition, boosts wealth magnetism. Suitable for sales, business, and investment workers.')}
                  </p>
                </div>
                <div className="bg-background/50 rounded-lg p-4 border border-accent/20">
                  <h4 className="font-semibold text-accent mb-2">{t('專注頻率：432 Hz', 'Focus Frequency: 432 Hz')}</h4>
                  <p className="text-sm text-foreground/80">
                    {t('被稱為「宇宙頻率」，能夠提升專注力、減少壓力、增強決策力。適合需要高度專注的腦力工作者。', 'Called "universe frequency," enhances focus, reduces stress, strengthens decision-making. Suitable for knowledge workers requiring high concentration.')}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-section-dark border border-border/30 rounded-xl p-6 mb-6">
              <h3 className="text-xl font-semibold mb-4 text-primary">
                {t('量子調頻的最佳時段', 'Optimal Time for Quantum Frequency Tuning')}
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/20 rounded-full p-2 mt-1">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-accent mb-2">{t('上班前 30 分鐘', '30 Minutes Before Work')}</h4>
                    <p className="text-foreground/80 text-sm">
                      {t('提前到辦公室，開啟空氣淨化機的高速模式配合量子調頻，快速淨化前一天殘留的負能量，為新一天的工作打好基礎。', 'Arrive at office early, activate air purifier high-speed mode with quantum tuning to quickly purify residual negative energy from previous day, laying foundation for new workday.')}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-secondary/20 rounded-full p-2 mt-1">
                    <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-accent mb-2">{t('午休時段', 'Lunch Break')}</h4>
                    <p className="text-foreground/80 text-sm">
                      {t('午休時進行 15 分鐘的「能量重置」調頻，清除上午工作的疲勞能量，讓下午工作更有活力。', 'Perform 15-minute "energy reset" tuning during lunch to clear morning work fatigue energy, making afternoon work more energetic.')}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-accent/20 rounded-full p-2 mt-1">
                    <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-accent mb-2">{t('下班後 15 分鐘', '15 Minutes After Work')}</h4>
                    <p className="text-foreground/80 text-sm">
                      {t('離開前，開啟空氣淨化機進行「深度淨化」，清除一整天累積的負能量，避免影響第二天的運勢。', 'Before leaving, activate air purifier for "deep purification" to clear accumulated negative energy from entire day, preventing impact on next day\'s fortune.')}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-accent/10 to-secondary/10 border border-accent/30 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-primary">
                {t('進階技巧：配合水晶與植物增強效果', 'Advanced Technique: Combine with Crystals and Plants for Enhanced Effects')}
              </h3>
              <p className="text-foreground/90 mb-4">
                {t(
                  '在空氣淨化機旁邊放置特定的水晶和植物，能夠進一步增強量子調頻的效果，形成「能量共振場」：',
                  'Placing specific crystals and plants near the air purifier can further enhance quantum tuning effects, creating an "energy resonance field":'
                )}
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-accent">💎</span>
                  <div>
                    <strong className="text-accent">{t('黃水晶（招財）：', 'Citrine (Attract Wealth):')}</strong>
                    <span className="text-foreground/80 ml-2">
                      {t('放在事業位旁，能吸收並放大 741 Hz 的財富頻率，增強財運。', 'Place near career position to absorb and amplify 741 Hz wealth frequency, enhancing financial luck.')}
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent">🌿</span>
                  <div>
                    <strong className="text-accent">{t('發財樹（事業運）：', 'Money Tree (Career Luck):')}</strong>
                    <span className="text-foreground/80 ml-2">
                      {t('象徵事業蒸蒸日上，配合空氣淨化能提升整體事業運。', 'Symbolizes thriving career. Combined with air purifier, enhances overall career luck.')}
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent">💜</span>
                  <div>
                    <strong className="text-accent">{t('紫水晶（貴人運）：', 'Amethyst (Benefactor Luck):')}</strong>
                    <span className="text-foreground/80 ml-2">
                      {t('放在貴人位旁，能吸引領導關注和同事支持。', 'Place near benefactor position to attract leadership attention and colleague support.')}
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* 真實案例分享 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-accent flex items-center gap-2">
              <Users className="w-8 h-8" />
              {t('真實案例：3 位職場人的逆襲故事', 'Real Cases: 3 Career Professionals\' Comeback Stories')}
            </h2>
            
            <div className="space-y-6">
              {/* 案例1 */}
              <div className="bg-gradient-to-br from-section-dark to-muted rounded-xl shadow-cosmic p-6 border border-accent/30">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-accent/20 rounded-full p-3">
                    <span className="text-2xl">📈</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-accent mb-1">
                      {t('案例一：3年原地踏步，調整後6個月升職', 'Case 1: Stuck for 3 Years, Promoted in 6 Months After Adjustment')}
                    </h3>
                    <p className="text-sm text-muted-foreground">{t('陳先生，35歲，IT項目經理', 'Mr. Chen, 35, IT Project Manager')}</p>
                  </div>
                </div>
                <div className="space-y-3 text-foreground/90">
                  <p>
                    <strong className="text-primary">{t('問題：', 'Problem:')}</strong>
                    {t('工作努力但總被忽視，項目成功功勞被同事搶走，連續3年升職申請被拒絕。', 'Worked hard but always overlooked, project success credit stolen by colleagues, promotion applications rejected for 3 consecutive years.')}
                  </p>
                  <p>
                    <strong className="text-primary">{t('診斷：', 'Diagnosis:')}</strong>
                    {t('辦公室空氣淨化機放在座位正後方，破壞了「靠山」能量。同時，座位正對廁所門，負能量直衝。', 'Office air purifier placed directly behind seat, destroying "backing" energy. Seat also directly faced toilet door, with negative energy rushing in.')}
                  </p>
                  <p>
                    <strong className="text-secondary">{t('解決方案：', 'Solution:')}</strong>
                  </p>
                  <ul className="ml-6 space-y-1 text-sm">
                    <li>{t('• 將空氣淨化機移到西北方（貴人位）', '• Moved air purifier to northwest (benefactor position)')}</li>
                    <li>{t('• 在座位後方放置高櫃作為「靠山」', '• Placed tall cabinet behind seat as "backing"')}</li>
                    <li>{t('• 啟用 639 Hz 貴人頻率調頻', '• Activated 639 Hz benefactor frequency tuning')}</li>
                    <li>{t('• 在辦公桌放置紫水晶', '• Placed amethyst on desk')}</li>
                  </ul>
                  <p>
                    <strong className="text-accent">{t('結果：', 'Result:')}</strong>
                    {t('2個月後開始獲得上司認可，4個月後帶領團隊完成重大項目，6個月後成功升職為高級經理，薪資提升40%。陳先生：「沒想到一個小小的調整，能帶來這麼大的改變！」', '2 months later gained boss recognition, 4 months later led team to complete major project, 6 months later promoted to senior manager with 40% salary increase. Mr. Chen: "Never thought such a small adjustment could bring such huge change!"')}
                  </p>
                </div>
              </div>

              {/* 案例2 */}
              <div className="bg-gradient-to-br from-section-dark to-muted rounded-xl shadow-cosmic p-6 border border-accent/30">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-accent/20 rounded-full p-3">
                    <span className="text-2xl">💰</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-accent mb-1">
                      {t('案例二：業績墊底，調整後成為銷售冠軍', 'Case 2: Bottom Performer Becomes Top Sales After Adjustment')}
                    </h3>
                    <p className="text-sm text-muted-foreground">{t('李小姐，28歲，保險業務員', 'Ms. Li, 28, Insurance Sales Representative')}</p>
                  </div>
                </div>
                <div className="space-y-3 text-foreground/90">
                  <p>
                    <strong className="text-primary">{t('問題：', 'Problem:')}</strong>
                    {t('業績長期墊底，客戶資源流失嚴重，多次被公司警告，面臨被裁員的危機。', 'Sales performance consistently at bottom, severe client resource loss, multiple company warnings, facing layoff crisis.')}
                  </p>
                  <p>
                    <strong className="text-primary">{t('診斷：', 'Diagnosis:')}</strong>
                    {t('辦公桌對著門口，形成「財氣外洩」格局。空氣淨化機放在影印機旁邊，電磁波干擾嚴重。', 'Desk faced doorway, creating "wealth qi leaking" pattern. Air purifier placed next to copier with severe EMF interference.')}
                  </p>
                  <p>
                    <strong className="text-secondary">{t('解決方案：', 'Solution:')}</strong>
                  </p>
                  <ul className="ml-6 space-y-1 text-sm">
                    <li>{t('• 調整辦公桌角度，避免正對門口', '• Adjusted desk angle to avoid directly facing door')}</li>
                    <li>{t('• 將空氣淨化機移到東南方（財位）', '• Moved air purifier to southeast (wealth position)')}</li>
                    <li>{t('• 啟用 741 Hz 財富頻率調頻', '• Activated 741 Hz wealth frequency tuning')}</li>
                    <li>{t('• 在辦公桌放置黃水晶與發財樹', '• Placed citrine and money tree on desk')}</li>
                  </ul>
                  <p>
                    <strong className="text-accent">{t('結果：', 'Result:')}</strong>
                    {t('1個月後業績開始回升，3個月後成交大單，6個月後成為部門銷售冠軍，年收入翻倍。李小姐：「我終於找到了突破瓶頸的關鍵！」', '1 month later sales began recovering, 3 months later closed major deal, 6 months later became department sales champion with doubled annual income. Ms. Li: "I finally found the key to breakthrough!"')}
                  </p>
                </div>
              </div>

              {/* 案例3 */}
              <div className="bg-gradient-to-br from-section-dark to-muted rounded-xl shadow-cosmic p-6 border border-accent/30">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-accent/20 rounded-full p-3">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-accent mb-1">
                      {t('案例三：創業失敗，調整後東山再起', 'Case 3: Failed Startup, Made Comeback After Adjustment')}
                    </h3>
                    <p className="text-sm text-muted-foreground">{t('王先生，42歲，創業者', 'Mr. Wang, 42, Entrepreneur')}</p>
                  </div>
                </div>
                <div className="space-y-3 text-foreground/90">
                  <p>
                    <strong className="text-primary">{t('問題：', 'Problem:')}</strong>
                    {t('創業2年連續虧損，團隊士氣低落，投資人撤資，面臨破產邊緣。', 'Startup operated at loss for 2 years, team morale low, investors withdrew, facing bankruptcy edge.')}
                  </p>
                  <p>
                    <strong className="text-primary">{t('診斷：', 'Diagnosis:')}</strong>
                    {t('辦公室缺乏空氣淨化設備，團隊長期在負能量環境中工作。老闆辦公桌位於「五鬼位」，招致小人與困難。', 'Office lacked air purification equipment, team worked long-term in negative energy environment. Boss desk located in "five ghosts position," attracting villains and difficulties.')}
                  </p>
                  <p>
                    <strong className="text-secondary">{t('解決方案：', 'Solution:')}</strong>
                  </p>
                  <ul className="ml-6 space-y-1 text-sm">
                    <li>{t('• 在辦公室的貴人位與事業位各放置一台空氣淨化機', '• Placed one air purifier each at benefactor and career positions')}</li>
                    <li>{t('• 老闆辦公桌移到西北方（領導位）', '• Moved boss desk to northwest (leadership position)')}</li>
                    <li>{t('• 全辦公室進行量子調頻（528 Hz 成功頻率）', '• Performed quantum tuning for entire office (528 Hz success frequency)')}</li>
                    <li>{t('• 團隊座位重新佈局，形成能量循環', '• Reorganized team seating to create energy circulation')}</li>
                  </ul>
                  <p>
                    <strong className="text-accent">{t('結果：', 'Result:')}</strong>
                    {t('3個月後獲得新投資，6個月後推出爆款產品，1年後公司營收破千萬，成功上市。王先生：「量子風水救了我的公司，也救了我的夢想。」', '3 months later secured new investment, 6 months later launched hit product, 1 year later company revenue exceeded 10 million, successfully went public. Mr. Wang: "Quantum feng shui saved my company and my dream."')}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 結語 */}
          <section className="mb-8">
            <div className="bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 border border-primary/30 rounded-2xl p-8 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-accent flex items-center justify-center gap-2">
                <Briefcase className="w-8 h-8" />
                {t('結語：你的事業運掌握在自己手中', 'Conclusion: Your Career Fortune is in Your Own Hands')}
              </h2>
              <div className="max-w-3xl mx-auto space-y-4 text-foreground/90 leading-relaxed">
                <p>
                  {t(
                    '辦公室的能量場直接影響著你的事業發展、升職機會和財富累積。一個正確擺放的空氣淨化機，配合量子調頻技術，不僅能淨化空氣，更能調整能量場，吸引貴人、提升運勢、開啟財源。',
                    'Your office energy field directly affects career development, promotion opportunities, and wealth accumulation. A correctly placed air purifier, combined with quantum frequency tuning, not only purifies air but also adjusts the energy field, attracting benefactors, enhancing fortune, and opening wealth channels.'
                  )}
                </p>
                <p>
                  {t(
                    '記住這3招：找到貴人位與事業位、避開5大風水禁忌、啟用量子調頻優化。從今天開始，重新審視你的辦公室佈局，做出小小的調整，可能就是你事業逆襲的轉捩點！',
                    'Remember these 3 tricks: find benefactor and career positions, avoid 5 major feng shui taboos, activate quantum frequency optimization. Starting today, re-examine your office layout. A small adjustment might be the turning point of your career comeback!'
                  )}
                </p>
                <p className="text-lg font-semibold text-primary">
                  {t(
                    '成功從來不是偶然，而是能量場與努力的完美結合。',
                    'Success is never accidental, but the perfect combination of energy field and effort.'
                  )}
                </p>
              </div>
              <div className="mt-8">
                <Link href="/contact">
                  <a className="inline-block px-8 py-4 bg-gradient-to-r from-primary to-accent text-white font-bold rounded-lg shadow-lg hover:shadow-cosmic transition-all duration-300 transform hover:scale-105">
                    {t('立即預約辦公室能量診斷', 'Book Office Energy Assessment Now')}
                  </a>
                </Link>
                <p className="mt-4 text-sm text-muted-foreground">
                  {t('免費初步諮詢 • 專業團隊服務 • 效果保證', 'Free Initial Consultation • Professional Team Service • Results Guaranteed')}
                </p>
              </div>
            </div>
          </section>

        </div>
      </article>
    </div>
  );
}
