import { Quote, Star, TrendingUp, Heart, Home } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Cases() {
  const { t } = useLanguage();

  const cases = [
    {
      icon: Heart,
      category: t('健康與睡眠', 'Health & Sleep'),
      name: t('張太太', 'Ms. Zhang'),
      age: 42,
      occupation: t('企業高管', 'Executive'),
      brand: 'Dyson',
      problem: t(
        '長期失眠和無名焦慮，影響工作效率和家庭關係',
        'Chronic insomnia and anxiety affecting work and family'
      ),
      solution: t(
        '使用Dyson空氣淨化機 + 臥室量子調頻 + 風水擺位',
        'Dyson purifier + bedroom quantum tuning + feng shui positioning'
      ),
      result: t(
        '睡眠質量顯著改善，3週內精神恢復，整個人生磁場轉變',
        'Sleep quality significantly improved, energy restored in 3 weeks'
      ),
      rating: 5,
      quote: t(
        '這不只是空氣變好，是整個人生磁場都轉變了！',
        'It\'s not just better air, my entire life energy has transformed!'
      ),
    },
    {
      icon: TrendingUp,
      category: t('事業與財富', 'Career & Wealth'),
      name: t('陳先生', 'Mr. Chen'),
      age: 38,
      occupation: t('設計公司老闆', 'Design Company Owner'),
      brand: 'Philips',
      problem: t(
        '業績停滯不前，員工士氣低落，小人是非不斷',
        'Stagnant business, low morale, constant conflicts'
      ),
      solution: t(
        '使用Philips空氣淨化機 + 辦公室量子調頻 + 財位風水擺設',
        'Philips purifier + office quantum tuning + wealth position setup'
      ),
      result: t(
        '3個月業績增加40%，新客戶增加2個，團隊氛圍轉正',
        '40% revenue increase in 3 months, 2 new clients, positive team atmosphere'
      ),
      rating: 5,
      quote: t(
        '投資報酬率遠超預期！辦公室氛圍變得很正面。',
        'ROI far exceeded expectations! Office atmosphere became very positive.'
      ),
    },
    {
      icon: Home,
      category: t('新屋入伙', 'New Home'),
      name: t('李先生夫婦', 'Mr. & Mrs. Li'),
      age: 35,
      occupation: t('IT專業人士', 'IT Professionals'),
      brand: 'Amway Sky',
      problem: t(
        '新屋裝修後空氣質素差，擔心甲醛影響健康',
        'Poor air quality after renovation, concerned about formaldehyde'
      ),
      solution: t(
        '使用Amway Sky + 全屋量子調頻 + 新居風水布局',
        'Amway Sky + whole house quantum tuning + new home feng shui layout'
      ),
      result: t(
        '空氣質素達標，家庭和諧幸福，小孩睡眠改善',
        'Air quality meets standards, family harmony, improved sleep for children'
      ),
      rating: 5,
      quote: t(
        '新家不僅空氣好，整個氛圍都充滿正能量！',
        'Our new home has not only great air, but is filled with positive energy!'
      ),
    },
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t('客戶見證案例', 'Client Testimonials')}
            <br />
            <span className="text-xl md:text-2xl font-normal text-muted-foreground mt-4 block">
              {t(
                '真實案例分享，見證物質清淨、能量調頻、豐盛顯化的神奇效果',
                'Real case sharing, witnessing the amazing effects of material purification, energy tuning, and abundance manifestation'
              )}
            </span>
          </h1>
          
          {/* Banner with invisible table (PC only) */}
          <div className="max-w-7xl mx-auto mb-6">
            {/* Desktop: 3 columns grid */}
            <div className="hidden md:grid md:grid-cols-3 gap-4">
              <div></div>
              <div>
                <img 
                  src="/quantum-fengshui-purifier/images/cases-banner-new.jpg" 
                  alt={t('客戶見證案例圖片', 'Cases Banner')}
                  className="w-full rounded-2xl shadow-xl"
                />
              </div>
              <div></div>
            </div>
            {/* Mobile: centered directly */}
            <div className="md:hidden max-w-4xl mx-auto">
              <img 
                src="/quantum-fengshui-purifier/images/cases-banner-new.jpg" 
                alt={t('客戶見證案例圖片', 'Cases Banner')}
                className="w-full rounded-2xl shadow-xl"
              />
            </div>
          </div>
          
          {/* Stats row */}
          <div className="mt-6 flex justify-center items-center space-x-8 text-accent font-semibold">
            <div>{t('95%+ 滿意度', '95%+ Satisfaction')}</div>
            <div className="w-px h-6 bg-border"></div>
            <div>{t('3週至3個月見效', '3 Weeks to 3 Months')}</div>
            <div className="w-px h-6 bg-border"></div>
            <div>{t('60%+ 重複購買率', '60%+ Repeat Rate')}</div>
          </div>
        </div>

        {/* Empty row after header */}
        <div className="mb-12"></div>

        {/* Cases */}
        <div className="space-y-12">
          {cases.map((caseItem, i) => {
            const Icon = caseItem.icon;
            return (
              <div
                key={i}
                className="bg-muted border border-border rounded-xl p-8 md:p-12 hover:border-accent transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Left: Category & Client Info */}
                  <div>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                        <Icon className="w-6 h-6 text-background" />
                      </div>
                      <div>
                        <div className="text-accent font-semibold">{caseItem.category}</div>
                        <div className="text-xs text-muted-foreground">{t('案例分類', 'Case Category')}</div>
                      </div>
                    </div>
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-foreground mb-1">{caseItem.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {caseItem.age} {t('歲', 'years old')} | {caseItem.occupation}
                      </p>
                      <p className="text-sm text-accent mt-1">
                        {t('使用品牌', 'Brand')}: {caseItem.brand}
                      </p>
                    </div>
                    <div className="flex">
                      {Array.from({ length: caseItem.rating }).map((_, j) => (
                        <Star key={j} className="w-5 h-5 fill-accent text-accent" />
                      ))}
                    </div>
                  </div>

                  {/* Middle: Problem & Solution */}
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">{t('痛點', 'Problem')}:</h4>
                      <p className="text-sm text-muted-foreground">{caseItem.problem}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">{t('解決方案', 'Solution')}:</h4>
                      <p className="text-sm text-muted-foreground">{caseItem.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">{t('效果', 'Result')}:</h4>
                      <p className="text-sm text-secondary font-medium">{caseItem.result}</p>
                    </div>
                  </div>

                  {/* Right: Quote */}
                  <div className="bg-background border border-border rounded-lg p-6 flex flex-col justify-center">
                    <Quote className="w-10 h-10 text-accent mb-4" />
                    <p className="text-foreground italic leading-relaxed">{caseItem.quote}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-gradient-to-r from-primary via-secondary to-accent rounded-xl p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-background mb-2">95%+</div>
              <div className="text-background/90">{t('客戶滿意度', 'Customer Satisfaction')}</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-background mb-2">100+</div>
              <div className="text-background/90">{t('成功案例', 'Successful Cases')}</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-background mb-2">60%+</div>
              <div className="text-background/90">{t('重複購買率', 'Repeat Purchase Rate')}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
