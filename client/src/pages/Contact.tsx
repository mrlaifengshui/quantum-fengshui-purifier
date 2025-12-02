import { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Send } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { CONTACT_PHONE, CONTACT_EMAIL, CONTACT_ADDRESS, CONTACT_ADDRESS_EN, SOCIAL_LINKS } from '../const';

export function Contact() {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    brand: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert(t('感謝您的預約！我們會盡快聯繫您。', 'Thank you for your booking! We will contact you soon.'));
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/20 to-secondary/20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t('聯繫我們', 'Contact Us')}
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t(
              '立即預約免費諮詢，我們的專家團隊將為您提供專業建議和定制方案。',
              'Book a free consultation now, and our expert team will provide professional advice and customized solutions.'
            )}
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-muted border border-border rounded-lg p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                {t('預約表單', 'Booking Form')}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t('姓名', 'Name')} *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:border-accent"
                    placeholder={t('請輸入您的姓名', 'Please enter your name')}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t('電話', 'Phone')} *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:border-accent"
                    placeholder={t('請輸入您的電話號碼', 'Please enter your phone number')}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t('電郵', 'Email')}
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:border-accent"
                    placeholder={t('請輸入您的電郵地址', 'Please enter your email address')}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t('偏好品牌', 'Preferred Brand')}
                  </label>
                  <select
                    value={formData.brand}
                    onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:border-accent"
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
                    {t('服務套餐', 'Service Package')}
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:border-accent"
                  >
                    <option value="">{t('請選擇', 'Please select')}</option>
                    <option value="basic">{t('基礎套餐', 'Basic Package')}</option>
                    <option value="premium">{t('進階套餐', 'Premium Package')}</option>
                    <option value="ultimate">{t('尊享套餐', 'Ultimate Package')}</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t('留言', 'Message')}
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:border-accent resize-none"
                    placeholder={t('請告訴我們您的需求...', 'Please tell us your needs...')}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center px-6 py-4 bg-gradient-to-r from-accent to-secondary text-background font-semibold rounded-lg hover:shadow-lg hover:shadow-accent/50 transition-all"
                >
                  <Send className="mr-2" size={20} />
                  {t('提交預約', 'Submit Booking')}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-muted border border-border rounded-lg p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  {t('聯繫方式', 'Contact Information')}
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="text-accent" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{t('電話', 'Phone')}</h3>
                      <p className="text-muted-foreground">{CONTACT_PHONE}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="text-accent" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{t('電郵', 'Email')}</h3>
                      <p className="text-muted-foreground">{CONTACT_EMAIL}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-accent" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{t('地址', 'Address')}</h3>
                      <p className="text-muted-foreground">
                        {language === 'zh' ? CONTACT_ADDRESS : CONTACT_ADDRESS_EN}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="text-accent" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">WhatsApp</h3>
                      <a
                        href={SOCIAL_LINKS.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:text-secondary transition-colors"
                      >
                        {t('立即聯繫', 'Contact Now')}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-muted border border-border rounded-lg p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  {t('營業時間', 'Business Hours')}
                </h2>
                <div className="space-y-2 text-muted-foreground">
                  <p>{t('星期一至五', 'Monday - Friday')}: 9:00 - 18:00</p>
                  <p>{t('星期六', 'Saturday')}: 10:00 - 17:00</p>
                  <p>{t('星期日及公眾假期', 'Sunday & Public Holidays')}: {t('休息', 'Closed')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
