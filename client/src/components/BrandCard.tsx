import { Star } from 'lucide-react';
import { Brand } from '../lib/brands';
import { useLanguage } from '../contexts/LanguageContext';

interface BrandCardProps {
  brand: Brand;
  onClick?: () => void;
}

export default function BrandCard({ brand, onClick }: BrandCardProps) {
  const { language } = useLanguage();

  const name = language === 'zh' ? brand.name : brand.nameEn;
  const category = language === 'zh' ? brand.category : brand.categoryEn;

  return (
    <div
      onClick={onClick}
      className="group bg-muted border border-border rounded-xl p-6 hover:border-accent transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-accent/20"
    >
      {/* Brand Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
            {name}
          </h3>
          <p className="text-sm text-muted-foreground mt-1">{category}</p>
        </div>
        <div className="flex items-center space-x-1">
          {Array.from({ length: brand.rating }).map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-accent text-accent" />
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="mb-4">
        <span className="text-2xl font-bold text-accent">{brand.priceRange}</span>
      </div>

      {/* Specs Grid */}
      <div className="grid grid-cols-2 gap-3 text-sm">
        <div>
          <span className="text-muted-foreground">HEPA:</span>
          <span className="ml-2 text-foreground font-medium">{brand.specs.hepaLevel}</span>
        </div>
        <div>
          <span className="text-muted-foreground">{language === 'zh' ? '甲醛' : 'Formaldehyde'}:</span>
          <span className="ml-2 text-foreground font-medium">{brand.specs.formaldehydeRemoval}</span>
        </div>
        <div>
          <span className="text-muted-foreground">{language === 'zh' ? '負離子' : 'Ions'}:</span>
          <span className="ml-2 text-foreground font-medium">{brand.specs.negativeIons}</span>
        </div>
        <div>
          <span className="text-muted-foreground">{language === 'zh' ? '噪音' : 'Noise'}:</span>
          <span className="ml-2 text-foreground font-medium">{brand.specs.noiseLevel}</span>
        </div>
      </div>
    </div>
  );
}
