import { Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import type { Brand } from '../lib/brands';

interface BrandCardProps {
  brand: Brand;
  onClick?: () => void;
}

export function BrandCard({ brand, onClick }: BrandCardProps) {
  const { language } = useLanguage();

  return (
    <div
      onClick={onClick}
      className="group bg-muted border border-border rounded-lg p-6 hover:border-accent transition-all cursor-pointer hover:shadow-lg hover:shadow-accent/20"
    >
      {/* Brand Logo */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div
            className="w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold"
            style={{ backgroundColor: brand.brandColor.primary }}
          >
            {brand.name.charAt(0)}
          </div>
          <div>
            <h3 className="text-lg font-bold text-foreground">{language === 'zh' ? brand.name : brand.nameEn}</h3>
            <p className="text-xs text-muted-foreground">{language === 'zh' ? brand.category : brand.categoryEn}</p>
          </div>
        </div>
        <div className="flex items-center space-x-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={14}
              className={i < brand.rating ? 'fill-accent text-accent' : 'text-muted-foreground'}
            />
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="mb-4">
        <span className="text-sm font-semibold text-accent">{brand.priceRange}</span>
      </div>

      {/* Description */}
      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
        {language === 'zh' ? brand.description : brand.descriptionEn}
      </p>

      {/* Key Features */}
      <div className="space-y-2 mb-4">
        <h4 className="text-xs font-semibold text-foreground uppercase">
          {language === 'zh' ? '主要特色' : 'Key Features'}
        </h4>
        <ul className="space-y-1">
          {(language === 'zh' ? brand.features : brand.featuresEn).slice(0, 3).map((feature, idx) => (
            <li key={idx} className="text-xs text-muted-foreground flex items-center">
              <span className="mr-2 text-accent">•</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* Specs Grid */}
      <div className="grid grid-cols-2 gap-2 text-xs">
        <div className="bg-background rounded p-2">
          <div className="text-muted-foreground mb-1">
            {language === 'zh' ? 'HEPA' : 'HEPA'}
          </div>
          <div className="font-semibold text-foreground">{brand.specs.hepaLevel}</div>
        </div>
        <div className="bg-background rounded p-2">
          <div className="text-muted-foreground mb-1">
            {language === 'zh' ? '甲醛' : 'Formaldehyde'}
          </div>
          <div className="font-semibold text-foreground">{brand.specs.formaldehydeRemoval}</div>
        </div>
      </div>

      {/* Hover Effect */}
      <div className="mt-4 text-center text-xs text-accent opacity-0 group-hover:opacity-100 transition-opacity">
        {language === 'zh' ? '點擊查看詳情' : 'Click for details'} →
      </div>
    </div>
  );
}
