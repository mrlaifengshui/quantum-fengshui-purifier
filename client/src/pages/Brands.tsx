import { useState } from 'react';
import { Link } from 'wouter';
import { ArrowRight, Check } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { BrandCard } from '../components/BrandCard';
import { brands } from '../lib/brands';

export function Brands() {
  const { t, language } = useLanguage();
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);

  const selectedBrandData = selectedBrand ? brands.find(b => b.id === selectedBrand) : null;

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/20 to-secondary/20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t('支持的空氣淨化機品牌', 'Supported Air Purifier Brands')}
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t(
              '我們支持多個優質品牌，滿足不同預算和需求。無論您選擇哪個品牌，我們都提供完整的量子調頻和風水擺位服務。',
              'We support multiple premium brands to meet different budgets and needs. Whichever brand you choose, we provide complete quantum tuning and feng shui placement services.'
            )}
          </p>
        </div>
      </section>

      {/* Brand Comparison Table */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            {t('品牌對比表', 'Brand Comparison Table')}
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border border-border rounded-lg overflow-hidden">
              <thead className="bg-muted">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                    {t('品牌', 'Brand')}
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                    {t('市場定位', 'Market Position')}
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                    {t('價格', 'Price')}
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                    {t('HEPA濾網', 'HEPA Filter')}
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                    {t('甲醛去除', 'Formaldehyde')}
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                    {t('負離子', 'Negative Ions')}
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                    {t('評分', 'Rating')}
                  </th>
                </tr>
              </thead>
              <tbody>
                {brands.map((brand, idx) => (
                  <tr
                    key={brand.id}
                    className={`${idx % 2 === 0 ? 'bg-background' : 'bg-muted/50'} hover:bg-muted transition-colors cursor-pointer`}
                    onClick={() => setSelectedBrand(brand.id)}
                  >
                    <td className="px-6 py-4 text-sm font-medium text-foreground">
                      {language === 'zh' ? brand.name : brand.nameEn}
                    </td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">
                      {language === 'zh' ? brand.category : brand.categoryEn}
                    </td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">{brand.priceRange}</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">{brand.specs.hepaLevel}</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">{brand.specs.formaldehydeRemoval}</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">{brand.specs.negativeIons}</td>
                    <td className="px-6 py-4 text-sm text-accent">
                      {'⭐'.repeat(brand.rating)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Brand Cards Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            {t('品牌詳情', 'Brand Details')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {brands.map((brand) => (
              <BrandCard
                key={brand.id}
                brand={brand}
                onClick={() => setSelectedBrand(brand.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Selected Brand Details */}
      {selectedBrandData && (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-muted border border-accent rounded-lg p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold text-foreground">
                  {language === 'zh' ? selectedBrandData.name : selectedBrandData.nameEn}
                </h2>
                <button
                  onClick={() => setSelectedBrand(null)}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  ✕
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {t('品牌特色', 'Brand Features')}
                  </h3>
                  <ul className="space-y-2">
                    {(language === 'zh' ? selectedBrandData.features : selectedBrandData.featuresEn).map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check size={20} className="text-accent mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {t('技術規格', 'Technical Specifications')}
                  </h3>
                  <dl className="space-y-3">
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground">{t('HEPA 濾網', 'HEPA Filter')}:</dt>
                      <dd className="font-semibold text-foreground">{selectedBrandData.specs.hepaLevel}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground">{t('甲醛去除', 'Formaldehyde')}:</dt>
                      <dd className="font-semibold text-foreground">{selectedBrandData.specs.formaldehydeRemoval}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground">{t('負離子', 'Negative Ions')}:</dt>
                      <dd className="font-semibold text-foreground">{selectedBrandData.specs.negativeIons}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground">{t('噪音水平', 'Noise Level')}:</dt>
                      <dd className="font-semibold text-foreground">{selectedBrandData.specs.noiseLevel}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground">{t('能效', 'Energy Efficiency')}:</dt>
                      <dd className="font-semibold text-foreground">
                        {'⭐'.repeat(selectedBrandData.specs.energyEfficiency)}
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {t('適合客戶', 'Target Customers')}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {(language === 'zh' ? selectedBrandData.targetCustomers : selectedBrandData.targetCustomersEn).map((customer, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-background text-foreground rounded-full text-sm border border-border"
                    >
                      {customer}
                    </span>
                  ))}
                </div>
              </div>

              <div className="text-center">
                <Link href="/services">
                  <a className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-accent to-secondary text-background font-semibold rounded-lg hover:shadow-lg hover:shadow-accent/50 transition-all">
                    {t('選擇此品牌並查看服務方案', 'Select This Brand and View Service Packages')}
                    <ArrowRight className="ml-2" size={20} />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Brand Selection Guide */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            {t('如何選擇適合您的品牌？', 'How to Choose the Right Brand for You?')}
          </h2>
          <div className="space-y-6">
            <div className="bg-background border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold text-accent mb-3">
                {t('預算考量', 'Budget Consideration')}
              </h3>
              <p className="text-muted-foreground">
                {t(
                  '高端：Dyson、Amway Sky (HK$2,000-5,000) | 中端：Philips、LG (HK$1,000-3,000) | 大眾：Sharp、小米 (HK$500-2,000)',
                  'Premium: Dyson, Amway Sky (HK$2,000-5,000) | Mid-range: Philips, LG (HK$1,000-3,000) | Mass: Sharp, Xiaomi (HK$500-2,000)'
                )}
              </p>
            </div>
            <div className="bg-background border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold text-accent mb-3">
                {t('空間需求', 'Space Requirements')}
              </h3>
              <p className="text-muted-foreground">
                {t(
                  '大型空間（辦公室、豪宅）：選擇 Dyson 或 Amway Sky | 中型空間（公寓、小辦公室）：Philips 或 LG | 小型空間（臥室、書房）：Sharp 或小米',
                  'Large spaces (offices, mansions): Choose Dyson or Amway Sky | Medium spaces (apartments, small offices): Philips or LG | Small spaces (bedrooms, studies): Sharp or Xiaomi'
                )}
              </p>
            </div>
            <div className="bg-background border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold text-accent mb-3">
                {t('健康關注', 'Health Focus')}
              </h3>
              <p className="text-muted-foreground">
                {t(
                  '極致健康追求：Dyson、Amway Sky (H13 濾網 + 99.95% 甲醛去除) | 一般健康需求：Philips、LG、Sharp (H12-H13 濾網) | 基本需求：小米 (H11 濾網)',
                  'Ultimate health pursuit: Dyson, Amway Sky (H13 filter + 99.95% formaldehyde removal) | General health needs: Philips, LG, Sharp (H12-H13 filters) | Basic needs: Xiaomi (H11 filter)'
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            {t('需要專業建議？', 'Need Professional Advice?')}
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            {t(
              '我們的專家團隊將根據您的空間、預算和需求，為您推薦最適合的品牌和服務方案。',
              'Our expert team will recommend the most suitable brand and service package based on your space, budget, and needs.'
            )}
          </p>
          <Link href="/contact">
            <a className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-accent to-secondary text-background font-semibold rounded-lg hover:shadow-lg hover:shadow-accent/50 transition-all">
              {t('預約免費諮詢', 'Book Free Consultation')}
              <ArrowRight className="ml-2" size={20} />
            </a>
          </Link>
        </div>
      </section>
    </div>
  );
}
