import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

interface ContactProps {
  language: 'zh' | 'en';
}

export default function Contact({ language }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const content = language === 'zh'
    ? {
        pageTitle: '聯繫我們',
        pageDesc: '有任何疑問？請隨時與我們聯繫。我們很樂意幫助您。',
        formTitle: '預約免費諮詢',
        formDesc: '填寫下面的表單，我們將在 24 小時內與您聯繫。',
        formLabels: {
          name: '姓名',
          email: '郵箱',
          phone: '電話',
          message: '訊息',
          submit: '提交',
        },
        contactInfo: [
          {
            icon: Phone,
            title: '電話',
            value: '[黎Sir 聯繫電話]',
            desc: '週一至週五 09:00-18:00',
          },
          {
            icon: Mail,
            title: 'Email',
            value: '[Email 地址]',
            desc: '24 小時內回覆',
          },
          {
            icon: MapPin,
            title: '網站',
            value: 'mrlaifengshui.com',
            desc: '線上諮詢',
          },
          {
            icon: Clock,
            title: 'WhatsApp',
            value: '[WhatsApp 號碼]',
            desc: '即時回覆',
          },
        ],
        successMessage: '感謝您的諮詢！我們將在 24 小時內與您聯繫。',
        successTitle: '提交成功！',
      }
    : {
        pageTitle: 'Contact Us',
        pageDesc: 'Have any questions? Feel free to reach out to us. We\'d love to help.',
        formTitle: 'Book a Free Consultation',
        formDesc: 'Fill out the form below and we\'ll get back to you within 24 hours.',
        formLabels: {
          name: 'Name',
          email: 'Email',
          phone: 'Phone',
          message: 'Message',
          submit: 'Submit',
        },
        contactInfo: [
          {
            icon: Phone,
            title: 'Phone',
            value: '[Mr. Lai Contact Phone]',
            desc: 'Monday to Friday 09:00-18:00',
          },
          {
            icon: Mail,
            title: 'Email',
            value: '[Email Address]',
            desc: 'Reply within 24 hours',
          },
          {
            icon: MapPin,
            title: 'Website',
            value: 'mrlaifengshui.com',
            desc: 'Online Consultation',
          },
          {
            icon: Clock,
            title: 'WhatsApp',
            value: '[WhatsApp Number]',
            desc: 'Instant Reply',
          },
        ],
        successMessage: 'Thank you for your inquiry! We will contact you within 24 hours.',
        successTitle: 'Submission Successful!',
      };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', message: '' });
      setSubmitted(false);
    }, 3000);
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

      {/* Contact Section */}
      <section className="py-16 md:py-24">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-2">
                {content.formTitle}
              </h2>
              <p className="text-foreground/80 mb-8">{content.formDesc}</p>

              {submitted ? (
                <div className="p-8 rounded-lg bg-accent/10 border border-accent text-center">
                  <p className="text-lg font-bold text-accent mb-2">
                    {content.successTitle}
                  </p>
                  <p className="text-foreground">{content.successMessage}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {content.formLabels.name}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-2 rounded-lg bg-card border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-secondary"
                      placeholder={language === 'zh' ? '請輸入您的姓名' : 'Enter your name'}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {content.formLabels.email}
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-2 rounded-lg bg-card border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-secondary"
                      placeholder={language === 'zh' ? '請輸入您的郵箱' : 'Enter your email'}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {content.formLabels.phone}
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-4 py-2 rounded-lg bg-card border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-secondary"
                      placeholder={language === 'zh' ? '請輸入您的電話' : 'Enter your phone'}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {content.formLabels.message}
                    </label>
                    <textarea
                      required
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      rows={5}
                      className="w-full px-4 py-2 rounded-lg bg-card border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-secondary resize-none"
                      placeholder={
                        language === 'zh'
                          ? '請描述您的需求或疑問'
                          : 'Describe your needs or questions'
                      }
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                  >
                    {content.formLabels.submit}
                  </Button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-8">
                {language === 'zh' ? '聯繫方式' : 'Contact Information'}
              </h2>

              <div className="space-y-6">
                {content.contactInfo.map((info, idx) => {
                  const Icon = info.icon;
                  return (
                    <div
                      key={idx}
                      className="p-6 rounded-lg bg-card border border-border hover:border-secondary transition-colors"
                    >
                      <div className="flex items-start gap-4">
                        <Icon className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-bold text-foreground mb-1">
                            {info.title}
                          </h3>
                          <p className="text-secondary font-semibold mb-1">
                            {info.value}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {info.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Additional Info */}
              <div className="mt-8 p-6 rounded-lg bg-accent/10 border border-accent">
                <p className="text-foreground">
                  {language === 'zh'
                    ? '💡 提示：我們提供免費的初步諮詢。請隨時與我們聯繫，了解更多關於我們的服務。'
                    : '💡 Tip: We offer a free initial consultation. Feel free to contact us to learn more about our services.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ CTA */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            {language === 'zh' ? '常見問題' : 'Frequently Asked Questions'}
          </h2>
          <p className="text-lg text-foreground mb-8">
            {language === 'zh'
              ? '在聯繫我們之前，您可能想查看我們的常見問題頁面。'
              : 'Before contacting us, you might want to check our FAQ page.'}
          </p>
          <a href="/services">
            <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
              {language === 'zh' ? '查看服務詳情' : 'View Service Details'}
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
