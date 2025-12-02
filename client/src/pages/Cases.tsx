import { Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Cases() {
  const { t } = useLanguage();

  const cases = [
    {
      id: 1,
      name: t('張太太', 'Mrs. Zhang'),
      age: 42,
      occupation: t('企業高管', 'Corporate Executive'),
      brand: 'Dyson',
      issue: t('失眠與焦慮', 'Insomnia and Anxiety'),
      result: t('睡眠改善 + 精神恢復', 'Sleep improvement + Mental recovery'),
      testimonial: t(
        '這不只是空氣變好，是整個人生磁場都轉變了！以前每晚輾轉難眠，現在一覺到天亮。工作效率也大幅提升，家庭關係更和諧。',
        'This is not just better air, my entire life magnetic field has transformed! I used to toss and turn every night, now I sleep through till morning. Work efficiency has greatly improved, and family relationships are more harmonious.'
      ),
      rating: 5,
    },
    {
      id: 2,
      name: t('陳先生', 'Mr. Chen'),
      age: 38,
      occupation: t('設計公司老闆', 'Design Company Owner'),
      brand: 'Philips',
      issue: t('事業瓶頸、財運不順', 'Career bottleneck, Poor financial luck'),
      result: t('3個月業績增加40% + 新客戶', '40% revenue increase in 3 months + New customers'),
      testimonial: t(
        '投資報酬率遠超預期！辦公室氣場改善後，團隊士氣明顯提升，創意源源不絕。最驚喜的是接連簽下兩個大客戶，業績翻倍成長。',
        'ROI far exceeded expectations! After office energy field improvement, team morale significantly boosted, creativity flows endlessly. Most surprising is signing two major clients in succession, revenue doubled.'
      ),
      rating: 5,
    },
    {
      id: 3,
      name: t('李小姐', 'Ms. Li'),
      age: 35,
      occupation: t('IT專業人士', 'IT Professional'),
      brand: 'Amway Sky',
      issue: t('新屋入伙、健康隱憂', 'New home move-in, Health concerns'),
      result: t('過敏症狀消失 + 家人健康改善', 'Allergy symptoms disappeared + Family health improved'),
      testimonial: t(
        '新屋裝修後一直擔心甲醛問題，孩子也常過敏。使用服務後，空氣質量明顯改善，孩子的過敏症狀完全消失，全家人都睡得更好了。',
        'After new home renovation, always worried about formaldehyde. Children had frequent allergies. After using the service, air quality significantly improved, child\'s allergy symptoms completely disappeared, whole family sleeps better.'
      ),
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/20 to-secondary/20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t('客戶案例見證', 'Customer Case Testimonials')}
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t(
              '真實客戶的轉變故事，見證量子風水空氣淨化服務的神奇效果。',
              'Real customer transformation stories, witnessing the magical effects of quantum feng shui air purification service.'
            )}
          </p>
        </div>
      </section>

      {/* Cases Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cases.map((case_) => (
              <div key={case_.id} className="bg-muted border border-border rounded-lg p-8 hover:border-accent transition-all">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className="fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-lg text-foreground mb-4 italic">
                  「{case_.testimonial}」
                </p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{case_.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {case_.age} {t('歲', 'years old')} • {case_.occupation}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {t('使用品牌', 'Brand')}: {case_.brand}
                  </p>
                  <div className="mt-3">
                    <p className="text-xs text-muted-foreground mb-1">
                      {t('問題', 'Issue')}: {case_.issue}
                    </p>
                    <p className="text-sm text-accent font-semibold">
                      {t('效果', 'Result')}: {case_.result}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-accent mb-2">95%+</div>
              <p className="text-lg text-muted-foreground">{t('客戶滿意度', 'Customer Satisfaction')}</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-accent mb-2">3-12 {t('週', 'weeks')}</div>
              <p className="text-lg text-muted-foreground">{t('平均見效時間', 'Average Time to Results')}</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-accent mb-2">60%+</div>
              <p className="text-lg text-muted-foreground">{t('重複購買率', 'Repeat Purchase Rate')}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
