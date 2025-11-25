import { TrendingUp, Users, Zap } from 'lucide-react';

interface CasesProps {
  language: 'zh' | 'en';
}

export default function Cases({ language }: CasesProps) {
  const content = language === 'zh'
    ? {
        pageTitle: '案例分享',
        pageDesc: '真實客戶見證，展示量子風水空氣淨化服務如何改變了他們的生活',
        cases: [
          {
            id: 1,
            name: '張太太',
            role: '企業高管',
            age: '42 歲',
            background: '長期失眠和焦慮，工作壓力大',
            quote: '這不只是空氣變好，是整個人生磁場都轉變了！',
            timeline: [
              {
                period: '第 1 週',
                title: '睡眠質量改善',
                desc: '能夠在沒有安眠藥的情況下入睡，睡眠時間從 4-5 小時增加到 7-8 小時。',
              },
              {
                period: '第 1 個月',
                title: '精神狀態恢復',
                desc: '精神狀態完全恢復，工作效率明顯提升，同事們都注意到了變化。',
              },
              {
                period: '第 3 個月',
                title: '運勢轉變',
                desc: '簽下了過去一年多一直在努力爭取的重要合約。',
              },
            ],
            metrics: [
              { label: '睡眠時間', before: '4-5 小時', after: '7-8 小時', icon: Zap },
              { label: '工作效率', before: '低下', after: '提升 30%+', icon: TrendingUp },
              { label: '安眠藥使用', before: '每晚', after: '完全停用', icon: Users },
            ],
            satisfaction: '5/5 星',
          },
          {
            id: 2,
            name: '陳先生',
            role: '設計公司老闆',
            age: '38 歲',
            background: '業績停滯，員工士氣低落',
            quote: '投資報酬率遠超預期！',
            timeline: [
              {
                period: '第 1 個月',
                title: '氛圍改善',
                desc: '辦公室氛圍改善，空氣變得更清新，員工工作熱情明顯提升。',
              },
              {
                period: '第 2 個月',
                title: '客戶增長',
                desc: '開始接到新客戶的詢問，包括之前接觸過但沒有成功的潛在客戶。',
              },
              {
                period: '第 3 個月',
                title: '業績翻紅',
                desc: '連簽兩個大客戶，業績增加 40%，員工滿意度達到新高。',
              },
            ],
            metrics: [
              { label: '新客戶', before: '0', after: '2 個大客戶', icon: TrendingUp },
              { label: '公司收入', before: '停滯', after: '增加 40%', icon: Zap },
              { label: '員工效率', before: '低迷', after: '提升 25%+', icon: Users },
            ],
            satisfaction: '5/5 星',
          },
        ],
        statsTitle: '客戶滿意度數據',
        stats: [
          { label: '客戶滿意度', value: '95%+' },
          { label: '見效時間', value: '3 週至 3 個月' },
          { label: '重複購買率', value: '60%+' },
          { label: '推薦率', value: '85%+' },
        ],
      }
    : {
        pageTitle: 'Case Studies',
        pageDesc: 'Real Customer Testimonials - How Quantum Feng Shui Air Purification Changed Their Lives',
        cases: [
          {
            id: 1,
            name: 'Mrs. Zhang',
            role: 'Corporate Executive',
            age: '42 years old',
            background: 'Chronic insomnia and anxiety, high work stress',
            quote: 'It\'s not just the air getting better, my entire life\'s energy field has transformed!',
            timeline: [
              {
                period: 'Week 1',
                title: 'Sleep Quality Improved',
                desc: 'Can sleep without sleeping pills, sleep duration increased from 4-5 hours to 7-8 hours.',
              },
              {
                period: 'Month 1',
                title: 'Mental State Recovered',
                desc: 'Mental state completely recovered, work efficiency noticeably improved, colleagues noticed the change.',
              },
              {
                period: 'Month 3',
                title: 'Luck Transformed',
                desc: 'Closed an important contract she had been pursuing for over a year.',
              },
            ],
            metrics: [
              { label: 'Sleep Duration', before: '4-5 hours', after: '7-8 hours', icon: Zap },
              { label: 'Work Efficiency', before: 'Low', after: '30%+ Improvement', icon: TrendingUp },
              { label: 'Sleeping Pills', before: 'Every night', after: 'Completely Stopped', icon: Users },
            ],
            satisfaction: '5/5 stars',
          },
          {
            id: 2,
            name: 'Mr. Chen',
            role: 'Design Company Owner',
            age: '38 years old',
            background: 'Stagnant business performance, low employee morale',
            quote: 'The return on investment far exceeded expectations!',
            timeline: [
              {
                period: 'Month 1',
                title: 'Atmosphere Improved',
                desc: 'Office atmosphere improved, air became fresher, employee enthusiasm noticeably increased.',
              },
              {
                period: 'Month 2',
                title: 'Client Growth',
                desc: 'Started receiving inquiries from new clients, including previously unsuccessful prospects.',
              },
              {
                period: 'Month 3',
                title: 'Performance Doubled',
                desc: 'Closed two major clients, revenue increased 40%, employee satisfaction reached new high.',
              },
            ],
            metrics: [
              { label: 'New Clients', before: '0', after: '2 Major Clients', icon: TrendingUp },
              { label: 'Company Revenue', before: 'Stagnant', after: '40% Increase', icon: Zap },
              { label: 'Employee Efficiency', before: 'Low', after: '25%+ Improvement', icon: Users },
            ],
            satisfaction: '5/5 stars',
          },
        ],
        statsTitle: 'Customer Satisfaction Data',
        stats: [
          { label: 'Customer Satisfaction', value: '95%+' },
          { label: 'Time to Results', value: '3 weeks to 3 months' },
          { label: 'Repeat Purchase Rate', value: '60%+' },
          { label: 'Recommendation Rate', value: '85%+' },
        ],
      };

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-primary/20 via-background to-background">
        <div className="container max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            {content.pageTitle}
          </h1>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            {content.pageDesc}
          </p>
        </div>
      </section>

      {/* Cases */}
      <section className="py-16 md:py-24">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="space-y-16">
            {content.cases.map((caseItem, idx) => (
              <div key={caseItem.id} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                {/* Left: Info */}
                <div className={idx % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="mb-6">
                    <h2 className="text-3xl font-bold text-secondary mb-2">
                      {caseItem.name}
                    </h2>
                    <p className="text-lg text-accent font-semibold mb-1">{caseItem.role}</p>
                    <p className="text-sm text-muted-foreground">{caseItem.age}</p>
                  </div>

                  <div className="mb-6 p-4 rounded-lg bg-card border border-border">
                    <p className="text-sm text-muted-foreground mb-2">
                      {language === 'zh' ? '背景：' : 'Background:'}
                    </p>
                    <p className="text-foreground">{caseItem.background}</p>
                  </div>

                  <blockquote className="mb-6 p-4 rounded-lg bg-secondary/10 border-l-4 border-secondary">
                    <p className="text-lg text-foreground italic">
                      "{caseItem.quote}"
                    </p>
                  </blockquote>

                  <div className="mb-6">
                    <p className="text-sm font-bold text-muted-foreground mb-3">
                      {language === 'zh' ? '客戶滿意度：' : 'Satisfaction:'}
                    </p>
                    <p className="text-lg font-bold text-accent">{caseItem.satisfaction}</p>
                  </div>
                </div>

                {/* Right: Timeline & Metrics */}
                <div className={idx % 2 === 1 ? 'md:order-1' : ''}>
                  {/* Timeline */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-foreground mb-4">
                      {language === 'zh' ? '效果與轉變' : 'Results & Transformation'}
                    </h3>
                    <div className="space-y-4">
                      {caseItem.timeline.map((item, i) => (
                        <div key={i} className="flex gap-4">
                          <div className="flex-shrink-0">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/20 text-accent font-bold text-sm">
                              {i + 1}
                            </div>
                          </div>
                          <div>
                            <p className="text-sm font-bold text-accent mb-1">
                              {item.period}
                            </p>
                            <p className="font-semibold text-foreground mb-1">
                              {item.title}
                            </p>
                            <p className="text-sm text-foreground/80">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Metrics */}
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-4">
                      {language === 'zh' ? '數據對比' : 'Data Comparison'}
                    </h3>
                    <div className="space-y-3">
                      {caseItem.metrics.map((metric, i) => {
                        const Icon = metric.icon;
                        return (
                          <div
                            key={i}
                            className="p-4 rounded-lg bg-card border border-border"
                          >
                            <div className="flex items-center gap-2 mb-2">
                              <Icon className="w-5 h-5 text-accent" />
                              <p className="font-semibold text-foreground">
                                {metric.label}
                              </p>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-muted-foreground">
                                {language === 'zh' ? '之前：' : 'Before:'} {metric.before}
                              </span>
                              <span className="text-accent font-bold">
                                {language === 'zh' ? '之後：' : 'After:'} {metric.after}
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-12">
            {content.statsTitle}
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {content.stats.map((stat, idx) => (
              <div key={idx} className="text-center p-6 rounded-lg bg-background border border-border">
                <p className="text-3xl md:text-4xl font-bold text-secondary mb-2">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary/20 to-accent/20">
        <div className="container max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            {language === 'zh'
              ? '想要親身體驗這些改變？'
              : 'Want to Experience These Changes?'}
          </h2>
          <p className="text-lg text-foreground mb-8">
            {language === 'zh'
              ? '立即聯繫我們預約免費諮詢。'
              : 'Contact us now to book a free consultation.'}
          </p>
          <a href="/contact">
            <button className="px-8 py-3 rounded-lg bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold transition-colors">
              {language === 'zh' ? '立即諮詢' : 'Consult Now'}
            </button>
          </a>
        </div>
      </section>
    </div>
  );
}
