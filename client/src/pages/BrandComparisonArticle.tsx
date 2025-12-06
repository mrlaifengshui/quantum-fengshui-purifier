import { useLanguage } from '../contexts/LanguageContext';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import { Link } from 'wouter';

export default function BrandComparisonArticle() {
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
              <span>2026-01-20</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4 text-accent" />
              <span>10 {t('分鐘閱讀', 'min read')}</span>
            </div>
            <div className="px-3 py-1 bg-accent/20 text-accent text-xs font-semibold rounded-full">
              {t('品牌對比', 'Brand Comparison')}
            </div>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {t(
              '不同品牌空氣淨化機的風水特性 - Dyson vs Philips vs 小米 vs Amway Sky',
              'Feng Shui Characteristics of Different Air Purifier Brands - Dyson vs Philips vs Xiaomi vs Amway Sky'
            )}
          </h1>
        </div>
      </div>

      {/* Article Content */}
      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg prose-invert max-w-none">
            {/* 簡介 */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">
                {t('簡介：超越 CADR（潔淨空氣輸送率）值的風水考量', 'Introduction: Feng Shui Considerations Beyond CADR Values')}
              </h2>
              <p className="text-foreground/90 leading-relaxed mb-4">
                當我們談論空氣淨化機時，大多數人只關注 CADR（潔淨空氣輸送率）值、HEPA 過濾等級或噪音水平。然而，對於追求家居氣場和諧的現代人而言，淨化機的選擇遠不止於此。一台淨化機不僅是電器，它更是家中一個持續運轉的「氣流中心」，其外觀形狀、材質五行、以及氣流循環模式，都會對空間的風水產生微妙而深遠的影響。
              </p>
              <p className="text-foreground/90 leading-relaxed mb-4">
                本指南將從量子風水的角度，深入分析市面上主流空氣淨化機品牌——Dyson、Philips、小米、Sharp、LG、以及 Amway Sky——的設計特點，並將其與風水學中的「氣」流動、五行平衡、以及形煞概念相結合。我們的目標是幫助您選擇一台不僅能淨化空氣，更能優化家居氣場，為您帶來健康與好運的淨化設備。
              </p>
            </section>

            {/* Dyson */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">
                {t('Dyson：高端選擇的「金屬」與「動態氣流」', 'Dyson: Premium Choice of "Metal" and "Dynamic Airflow"')}
              </h2>
              <p className="text-foreground/90 leading-relaxed mb-4">
                Dyson 的空氣淨化機以其獨特的無葉片設計和圓柱形外觀著稱。從風水角度來看，Dyson 具備以下特性：
              </p>

              <div className="my-8">
                <img
                  src="/images/blog/dyson-metal-dynamic.jpg"
                  alt="Dyson 空氣淨化機的金屬質感與動態氣流設計"
                  className="w-full rounded-xl shadow-lg"
                />
                <p className="text-sm text-muted-foreground mt-2 text-center italic">
                  圖1：Dyson 無葉片設計展現金屬質感與動態氣流特性
                </p>
              </div>

              <h3 className="text-xl font-semibold text-primary mb-4 mt-8">1. 五行屬性：金</h3>
              <p className="text-foreground/90 leading-relaxed mb-4">
                Dyson 淨化機多採用金屬質感的材質，且外觀線條簡潔、圓潤，在五行中屬金。
              </p>
              <div className="bg-primary/10 border border-primary/20 rounded-xl p-6 mb-4">
                <p className="text-foreground/90 mb-3">
                  <strong className="text-accent">優勢：</strong> 金主權威、效率、收斂。將其擺放在家中的財位（通常在客廳的對角線位置）或文昌位，有助於提升事業的果斷力、專注力，並強化財運的穩定性。
                </p>
                <p className="text-foreground/90">
                  <strong className="text-accent">注意事項：</strong> 若家中五行缺金，Dyson 是極佳的補益。但若家中金氣過旺（例如大量金屬裝飾），則需避免將其擺放在東方（屬木），以免金剋木，影響家人的健康和人際關係。
                </p>
              </div>

              <h3 className="text-xl font-semibold text-primary mb-4 mt-8">2. 氣流模式：動態循環</h3>
              <p className="text-foreground/90 leading-relaxed mb-4">
                Dyson 的核心技術在於其強大的噴射氣流和360 度循環淨化能力。
              </p>
              <div className="bg-secondary/10 border border-secondary/20 rounded-xl p-6 mb-4">
                <p className="text-foreground/90 mb-3">
                  <strong className="text-secondary">風水解讀：</strong> 傳統風水強調「藏風聚氣」。Dyson 的強勁氣流雖然能快速淨化空氣，但在風水上可能造成「氣散」的現象。因此，在使用 Dyson 時，應避免將其直接對著臥室的床頭或書房的辦公桌直吹，以免氣流過於急促，造成「形煞」，影響睡眠和情緒穩定。
                </p>
                <p className="text-foreground/90">
                  <strong className="text-secondary">優化建議：</strong> 建議搭配「量子調頻」服務，利用高頻能量波穩定其強勁氣流所帶來的能量場，使「動態氣流」轉化為「活潑旺氣」。
                </p>
              </div>
            </section>

            {/* Philips */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">
                {t('Philips：中端選擇的「土」與「穩健淨化」', 'Philips: Mid-range Choice of "Earth" and "Stable Purification"')}
              </h2>
              <p className="text-foreground/90 leading-relaxed mb-4">
                Philips 的空氣淨化機系列（如 AC 系列）通常採用方正、穩重的設計，機身多為白色或淺色塑料，並強調高效的 NanoProtect HEPA 過濾技術。
              </p>

              <div className="my-8">
                <img
                  src="/images/blog/philips-earth-stable.jpg"
                  alt="Philips 空氣淨化機的方正穩重設計與穩定氣流"
                  className="w-full rounded-xl shadow-lg"
                />
                <p className="text-sm text-muted-foreground mt-2 text-center italic">
                  圖2：Philips 方正設計展現土性穩定與溫和氣流特質
                </p>
              </div>

              <h3 className="text-xl font-semibold text-primary mb-4 mt-8">1. 五行屬性：土</h3>
              <p className="text-foreground/90 leading-relaxed mb-4">
                Philips 淨化機的方正外形和穩重體積，在五行中屬土。
              </p>
              <div className="bg-primary/10 border border-primary/20 rounded-xl p-6 mb-4">
                <p className="text-foreground/90 mb-3">
                  <strong className="text-accent">優勢：</strong> 土主穩定、承載、滋養。將其擺放在家中的中央（太極位）或西南方（坤位，主家庭和諧），有助於穩定家居氣場，促進家庭成員之間的和睦，並強化健康運。
                </p>
                <p className="text-foreground/90">
                  <strong className="text-accent">注意事項：</strong> 土的特性是穩固，因此 Philips 淨化機的擺放位置一旦確定，應避免頻繁移動，以維持氣場的穩定性。
                </p>
              </div>

              <h3 className="text-xl font-semibold text-primary mb-4 mt-8">2. 氣流模式：垂直/四面進風</h3>
              <p className="text-foreground/90 leading-relaxed mb-4">
                Philips 淨化機多採用垂直出風或四面進風的設計，氣流模式相對溫和、穩健。
              </p>
              <div className="bg-secondary/10 border border-secondary/20 rounded-xl p-6 mb-4">
                <p className="text-foreground/90 mb-3">
                  <strong className="text-secondary">風水解讀：</strong> 這種穩健的氣流模式符合風水學中「緩慢聚氣」的原則，不易產生形煞。它能溫和地將淨化後的空氣和能量均勻分佈到空間中，適合臥室或書房等需要靜態、穩定氣場的區域。
                </p>
                <p className="text-foreground/90">
                  <strong className="text-secondary">優化建議：</strong> 由於其五行屬土，若能搭配一些屬金或屬水的裝飾（如金屬花瓶或水生植物），可形成「土生金」或「土剋水」的平衡，進一步優化氣場。
                </p>
              </div>
            </section>

            {/* 小米、Sharp、LG */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">
                {t('Sharp、LG、小米：大眾選擇的「木」與「功能性」', 'Sharp, LG, Xiaomi: Popular Choices of "Wood" and "Functionality"')}
              </h2>
              <p className="text-foreground/90 leading-relaxed mb-4">
                這類大眾品牌涵蓋了多種設計，但許多型號（尤其是小米的立方形設計）在風水上呈現出木或土的特性，並強調功能性。
              </p>

              <h3 className="text-xl font-semibold text-primary mb-4 mt-8">1. 小米：極簡的「木」與「土」</h3>
              <p className="text-foreground/90 leading-relaxed mb-4">
                小米淨化機的立方形或長方形設計，線條簡潔，在五行中偏向木（長形）或土（方形）。
              </p>
              <div className="bg-primary/10 border border-primary/20 rounded-xl p-6 mb-4">
                <p className="text-foreground/90 mb-3">
                  <strong className="text-accent">優勢：</strong> 木主生長、發展、創意。適合擺放在東方或東南方，有助於提升學業和事業的發展。其極簡的設計不易產生形煞。
                </p>
                <p className="text-foreground/90">
                  <strong className="text-accent">挑戰：</strong> 小米淨化機的塑料感較強，能量場相對較弱。若要強化其風水效應，必須結合量子調頻技術，才能有效提升其能量場。
                </p>
              </div>

              <h3 className="text-xl font-semibold text-primary mb-4 mt-8">2. Sharp 與 LG：功能性的「水」與「金」</h3>
              <p className="text-foreground/90 leading-relaxed mb-4">
                Sharp 的 Plasmacluster 技術和 LG 的 PuriCare 系列，通常在設計上更注重功能性，例如 Sharp 的水箱加濕功能和 LG 的圓形升降出風口。
              </p>
              <div className="bg-secondary/10 border border-secondary/20 rounded-xl p-6">
                <p className="text-foreground/90 mb-3">
                  <strong className="text-secondary">風水解讀：</strong> 帶有水箱的淨化機（如 Sharp）在五行中屬水，水主智慧、人際關係、流動。適合擺放在北方，有助於提升事業運和人際關係。但需注意水箱的清潔，避免水質污濁，反而招來「陰氣」。
                </p>
                <p className="text-foreground/90">
                  LG 的圓形設計則偏向金，與 Dyson 類似，但其升降出風口設計，氣流模式更為可控，減少了「氣散」的風險。
                </p>
              </div>
            </section>

            {/* Amway Sky */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">
                {t('Amway Sky：直銷選擇的「土」與「傳統」', 'Amway Sky: Direct Selling Choice of "Earth" and "Traditional"')}
              </h2>
              <p className="text-foreground/90 leading-relaxed mb-4">
                Amway Sky（逸新）空氣淨化機通常採用厚重、方正的設計，強調其多層次的過濾系統和強大的淨化能力。
              </p>

              <h3 className="text-xl font-semibold text-primary mb-4 mt-8">1. 五行屬性：土</h3>
              <p className="text-foreground/90 leading-relaxed mb-4">
                Amway Sky 的設計風格穩重，體積較大，五行屬性明確為土。
              </p>
              <div className="bg-primary/10 border border-primary/20 rounded-xl p-6 mb-4">
                <p className="text-foreground/90 mb-3">
                  <strong className="text-accent">優勢：</strong> 由於其強大的淨化能力，在風水上可視為一個強大的「能量穩定器」。適合擺放在家中氣場較為混亂的區域（如玄關或雜物間附近），以其強大的土性來鎮壓煞氣，穩定空間能量。
                </p>
                <p className="text-foreground/90">
                  <strong className="text-accent">挑戰：</strong> 由於其體積較大，若擺放不當，容易形成「壓迫煞」。應避免將其擺放在狹小的空間或對著人體長時間停留的位置。
                </p>
              </div>
            </section>

            {/* 如何選擇 */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">
                {t('如何選擇適合您的品牌：三合一決策模型', 'How to Choose Your Brand: Three-in-One Decision Model')}
              </h2>
              <p className="text-foreground/90 leading-relaxed mb-6">
                選擇空氣淨化機，不應只看品牌，而應結合您的個人需求、家居環境和量子風水優化的目標。
              </p>

              <div className="space-y-6">
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-primary mb-4">1. 物質需求（淨化性能）</h3>
                  <ul className="space-y-2 text-foreground/80">
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span><strong>甲醛/異味：</strong> 選擇具有活性碳濾網和甲醛分解技術的型號（如 Dyson、Philips 的高端系列）。</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span><strong>過敏原/PM2.5：</strong> 所有主流品牌的高效 HEPA 濾網都能滿足需求。</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-accent mb-4">2. 能量需求（五行平衡）</h3>
                  <ul className="space-y-2 text-foreground/80">
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span><strong>缺金/需要果斷力：</strong> 選擇 Dyson 或 LG（圓形、金屬感）。</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span><strong>缺土/需要穩定性：</strong> 選擇 Philips 或 Amway Sky（方正、穩重）。</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span><strong>缺木/需要發展：</strong> 選擇小米（長方形、立方形）。</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/20 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-secondary mb-4">3. 空間需求（氣流與擺位）</h3>
                  <ul className="space-y-2 text-foreground/80">
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1">•</span>
                      <span><strong>大空間/需要快速循環：</strong> Dyson 的強勁氣流是優勢，但必須配合風水擺位，避免直吹。</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1">•</span>
                      <span><strong>臥室/書房/需要穩定氣場：</strong> Philips 的溫和氣流更為適合。</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 品牌對比表 */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">
                {t('品牌對比表：量子風水視角', 'Brand Comparison Table: Quantum Feng Shui Perspective')}
              </h2>
              
              <div className="my-8">
                <img
                  src="/images/blog/brand-comparison-table.jpg"
                  alt="不同品牌空氣淨化機的五行屬性與氣流特性對比表"
                  className="w-full rounded-xl shadow-lg"
                />
                <p className="text-sm text-muted-foreground mt-2 text-center italic">
                  圖3：主流品牌空氣淨化機的風水特性與五行屬性對比
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-primary/20">
                      <th className="border border-border/30 p-3 text-left">品牌</th>
                      <th className="border border-border/30 p-3 text-left">典型外觀</th>
                      <th className="border border-border/30 p-3 text-left">五行屬性</th>
                      <th className="border border-border/30 p-3 text-left">氣流模式</th>
                      <th className="border border-border/30 p-3 text-left">風水優勢</th>
                      <th className="border border-border/30 p-3 text-left">適用空間</th>
                    </tr>
                  </thead>
                  <tbody className="text-foreground/80">
                    <tr>
                      <td className="border border-border/30 p-3 font-semibold">Dyson</td>
                      <td className="border border-border/30 p-3">圓柱形/無葉片</td>
                      <td className="border border-border/30 p-3">金</td>
                      <td className="border border-border/30 p-3">強勁動態循環</td>
                      <td className="border border-border/30 p-3">提升事業果斷力、強化財運穩定性</td>
                      <td className="border border-border/30 p-3">客廳、開放式空間</td>
                    </tr>
                    <tr className="bg-muted/30">
                      <td className="border border-border/30 p-3 font-semibold">Philips</td>
                      <td className="border border-border/30 p-3">方正/穩重</td>
                      <td className="border border-border/30 p-3">土</td>
                      <td className="border border-border/30 p-3">溫和垂直/四面進風</td>
                      <td className="border border-border/30 p-3">穩定家居氣場、促進家庭和睦</td>
                      <td className="border border-border/30 p-3">臥室、書房、太極位</td>
                    </tr>
                    <tr>
                      <td className="border border-border/30 p-3 font-semibold">小米</td>
                      <td className="border border-border/30 p-3">立方形/極簡</td>
                      <td className="border border-border/30 p-3">木/土</td>
                      <td className="border border-border/30 p-3">功能性循環</td>
                      <td className="border border-border/30 p-3">提升學業和創意發展</td>
                      <td className="border border-border/30 p-3">兒童房、書房</td>
                    </tr>
                    <tr className="bg-muted/30">
                      <td className="border border-border/30 p-3 font-semibold">Sharp/LG</td>
                      <td className="border border-border/30 p-3">功能性/圓形</td>
                      <td className="border border-border/30 p-3">水/金</td>
                      <td className="border border-border/30 p-3">可控氣流/加濕</td>
                      <td className="border border-border/30 p-3">提升人際關係、事業流動性</td>
                      <td className="border border-border/30 p-3">北方、需要加濕的空間</td>
                    </tr>
                    <tr>
                      <td className="border border-border/30 p-3 font-semibold">Amway Sky</td>
                      <td className="border border-border/30 p-3">厚重/方正</td>
                      <td className="border border-border/30 p-3">土</td>
                      <td className="border border-border/30 p-3">強勁過濾</td>
                      <td className="border border-border/30 p-3">鎮壓煞氣、穩定混亂氣場</td>
                      <td className="border border-border/30 p-3">玄關、氣場較差的區域</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 立即行動 */}
            <section className="mb-8">
              <div className="bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 border border-primary/30 rounded-2xl p-8 text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-accent">
                  {t('立即行動：讓您的淨化機成為風水利器', 'Take Action Now: Transform Your Purifier into a Feng Shui Tool')}
                </h2>
                <p className="text-foreground/90 leading-relaxed mb-6 max-w-3xl mx-auto">
                  選擇一台空氣淨化機，就是選擇一種生活方式。一台結合了高效淨化、五行平衡和精準擺位的淨化機，才能真正成為您家居氣場的守護者。
                </p>
                <p className="text-foreground/90 leading-relaxed mb-6 max-w-3xl mx-auto">
                  如果您希望將您的淨化機（無論是 Dyson、Philips 還是小米）轉化為一個真正的量子風水利器，我們誠摯邀請您：
                </p>
                <Link href="/contact">
                  <a className="inline-block px-8 py-4 bg-gradient-to-r from-primary to-accent text-white font-bold rounded-lg shadow-lg hover:shadow-cosmic transition-all duration-300 transform hover:scale-105">
                    {t('立即預約黎Sir的量子風水空氣淨化服務', 'Book Mr. Lai\'s Quantum Feng Shui Air Purification Service Now')}
                  </a>
                </Link>
                <p className="text-sm text-muted-foreground mt-4">
                  我們將根據您的淨化機品牌、個人命理和家居佈局，提供最精準的量子調頻和風水擺位建議
                </p>
              </div>
            </section>
          </div>
        </div>
      </article>
    </div>
  );
}
