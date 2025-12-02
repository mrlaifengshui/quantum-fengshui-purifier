import { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { CONTACT_PHONE, CONTACT_EMAIL, CONTACT_ADDRESS, CONTACT_ADDRESS_EN } from '../const';

export default function Contact() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    brand: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t('聯繫我們', 'Contact Us')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t(
              '立即預約免費諮詢，體驗量子風水空氣淨化的神奇效果',
              'Book a free consultation and experience the magic of quantum feng shui air purification'
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-muted border border-border rounded-xl p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              {t('預約表單', 'Booking Form')}
            </h2>

            {submitted ? (
              <div className="bg-secondary/20 border border-secondary rounded-lg p-6 text-center">
                <CheckCircle2 className="w-16 h-16 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {t('提交成功！', 'Success!')}
                </h3>
                <p className="text-muted-foreground">
                  {t('我們會盡快與您聯繫', 'We will contact you soon')}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t('姓名', 'Name')} *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-accent text-foreground"
                    placeholder={t('請輸入您的姓名', 'Enter your name')}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t('電話', 'Phone')} *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-accent text-foreground"
                    placeholder={t('請輸入您的電話', 'Enter your phone')}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t('電郵', 'Email')}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-accent text-foreground"
                    placeholder={t('請輸入您的電郵', 'Enter your email')}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t('品牌偏好', 'Brand Preference')}
                  </label>
                  <select
                    name="brand"
                    value={formData.brand}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-accent text-foreground"
                  >
                    <option value="">{t('請選擇', 'Please select')}</option>
                    <option value="dyson">Dyson</option>
                    <option value="philips">Philips</option>
                    <option value="sharp">Sharp</option>
                    <option value="lg">LG</option>
                    <option value="xiaomi">{t('小米', 'Xiaomi')}</option>
                    <option value="amway">Amway Sky</option>
                    <option value="other">{t('其他', 'Other')}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t('留言', 'Message')}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-accent text-foreground resize-none"
                    placeholder={t('請告訴我們您的需求', 'Tell us your needs')}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-accent text-background font-semibold py-4 rounded-lg hover:bg-accent/90 transition-all duration-300 flex items-center justify-center shadow-lg"
                >
                  <Send className="w-5 h-5 mr-2" />
                  {t('提交預約', 'Submit Booking')}
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-muted border border-border rounded-xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                {t('聯繫方式', 'Contact Information')}
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-background" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{t('電話', 'Phone')}</h3>
                    <p className="text-muted-foreground">{CONTACT_PHONE}</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {t('週一至週六 9:00-18:00', 'Mon-Sat 9:00-18:00')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-background" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{t('電郵', 'Email')}</h3>
                    <p className="text-muted-foreground">{CONTACT_EMAIL}</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {t('24小時內回覆', '24-hour response time')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-background" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{t('地址', 'Address')}</h3>
                    <p className="text-muted-foreground">
                      {t(CONTACT_ADDRESS, CONTACT_ADDRESS_EN)}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-gradient-to-br from-primary to-secondary rounded-xl p-8 text-background">
              <h2 className="text-2xl font-bold mb-4">{t('營業時間', 'Business Hours')}</h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>{t('週一至週五', 'Monday - Friday')}</span>
                  <span className="font-semibold">9:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>{t('週六', 'Saturday')}</span>
                  <span className="font-semibold">10:00 - 17:00</span>
                </div>
                <div className="flex justify-between">
                  <span>{t('週日及公眾假期', 'Sunday & Public Holidays')}</span>
                  <span className="font-semibold">{t('休息', 'Closed')}</span>
                </div>
              </div>
            </div>

            {/* Why Contact Us */}
            <div className="bg-muted border border-border rounded-xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                {t('為什麼選擇我們？', 'Why Choose Us?')}
              </h2>
              <ul className="space-y-3">
                {[
                  t('免費上門諮詢', 'Free On-site Consultation'),
                  t('專業團隊服務', 'Professional Team Service'),
                  t('多品牌支持', 'Multi-Brand Support'),
                  t('效果保證', 'Results Guaranteed'),
                  t('售後跟進', 'After-Sales Follow-up'),
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-sm">
                    <CheckCircle2 className="w-5 h-5 text-secondary mr-3 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
