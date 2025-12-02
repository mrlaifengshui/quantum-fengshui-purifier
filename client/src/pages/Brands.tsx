import { useState } from 'react';
import { Filter } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import BrandCard from '../components/BrandCard';
import { brands } from '../lib/brands';

export default function Brands() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<string>('all');

  const categories = [
    { id: 'all', label: t('全部', 'All') },
    { id: '高端市場領導者', label: t('高端市場', 'Premium') },
    { id: '中端市場', label: t('中端市場', 'Mid-Range') },
    { id: '大眾市場', label: t('大眾市場', 'Mass Market') },
    { id: '直銷渠道', label: t('直銷渠道', 'Direct Sales') },
  ];

  const filteredBrands = filter === 'all' 
    ? brands 
    : brands.filter(brand => brand.category === filter || brand.categoryEn === filter);

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t('支持的空氣淨化機品牌', 'Supported Air Purifier Brands')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t(
              '我們支持多個優質品牌，滿足不同預算和需求。無論您選擇哪個品牌，我們都提供完整的量子調頻和風水服務。',
              'We support multiple premium brands to meet different budgets and needs. We provide complete quantum tuning and feng shui services for all brands.'
            )}
          </p>
        </div>

        {/* Filter */}
        <div className="flex items-center justify-center mb-8 flex-wrap gap-4">
          <div className="flex items-center text-muted-foreground mr-4">
            <Filter className="w-5 h-5 mr-2" />
            <span className="font-medium">{t('篩選', 'Filter')}:</span>
          </div>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                filter === cat.id
                  ? 'bg-accent text-background'
                  : 'bg-muted text-muted-foreground hover:bg-border'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Brand Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBrands.map((brand) => (
            <BrandCard key={brand.id} brand={brand} />
          ))}
        </div>

        {/* Comparison Table */}
        <div className="mt-16 overflow-x-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            {t('品牌對比表', 'Brand Comparison Table')}
          </h2>
          <table className="w-full bg-muted border border-border rounded-lg overflow-hidden">
            <thead className="bg-primary text-primary-foreground">
              <tr>
                <th className="px-6 py-4 text-left">{t('品牌', 'Brand')}</th>
                <th className="px-6 py-4 text-left">{t('市場定位', 'Position')}</th>
                <th className="px-6 py-4 text-left">{t('價格範圍', 'Price')}</th>
                <th className="px-6 py-4 text-left">HEPA</th>
                <th className="px-6 py-4 text-left">{t('甲醛去除', 'Formaldehyde')}</th>
                <th className="px-6 py-4 text-left">{t('負離子', 'Ions')}</th>
                <th className="px-6 py-4 text-left">{t('噪音', 'Noise')}</th>
              </tr>
            </thead>
            <tbody>
              {brands.map((brand, i) => (
                <tr key={brand.id} className={i % 2 === 0 ? 'bg-background' : 'bg-muted'}>
                  <td className="px-6 py-4 font-semibold text-foreground">{brand.name}</td>
                  <td className="px-6 py-4 text-muted-foreground">{brand.category}</td>
                  <td className="px-6 py-4 text-accent font-medium">{brand.priceRange}</td>
                  <td className="px-6 py-4">{brand.specs.hepaLevel}</td>
                  <td className="px-6 py-4">{brand.specs.formaldehydeRemoval}</td>
                  <td className="px-6 py-4">{brand.specs.negativeIons}</td>
                  <td className="px-6 py-4">{brand.specs.noiseLevel}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
