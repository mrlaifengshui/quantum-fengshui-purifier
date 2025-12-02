import { Link } from 'wouter';
import { Facebook, Instagram, MessageCircle, Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { SITE_NAME, SITE_NAME_EN, CONTACT_PHONE, CONTACT_EMAIL, CONTACT_ADDRESS, CONTACT_ADDRESS_EN, SOCIAL_LINKS } from '../const';

export function Footer() {
  const { language, t } = useLanguage();

  const quickLinks = [
    { path: '/', label: t('首頁', 'Home') },
    { path: '/brands', label: t('品牌', 'Brands') },
    { path: '/services', label: t('服務', 'Services') },
    { path: '/cases', label: t('案例', 'Cases') },
    { path: '/contact', label: t('聯繫', 'Contact') },
  ];

  return (
    <footer className="bg-muted border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-accent">
              {language === 'zh' ? SITE_NAME : SITE_NAME_EN}
            </h3>
            <p className="text-sm text-muted-foreground">
              {t(
                '結合頂級空氣淨化科技與量子調頻技術，為您打造健康、和諧、豐盛的生活空間。',
                'Combining premium air purification with quantum frequency tuning for a healthy, harmonious, and abundant living space.'
              )}
            </p>
            <div className="flex space-x-4">
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-foreground">
              {t('快速導航', 'Quick Links')}
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link href={link.path}>
                    <a className="text-sm text-muted-foreground hover:text-accent transition-colors">
                      {link.label}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-foreground">
              {t('我們的服務', 'Our Services')}
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>{t('空氣淨化方案', 'Air Purification Solutions')}</li>
              <li>{t('量子調頻服務', 'Quantum Frequency Tuning')}</li>
              <li>{t('風水擺位設計', 'Feng Shui Placement Design')}</li>
              <li>{t('能量場優化', 'Energy Field Optimization')}</li>
              <li>{t('健康諮詢服務', 'Health Consultation')}</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-foreground">
              {t('聯繫我們', 'Contact Us')}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-sm text-muted-foreground">
                <Phone size={16} className="mt-0.5 flex-shrink-0" />
                <span>{CONTACT_PHONE}</span>
              </li>
              <li className="flex items-start space-x-2 text-sm text-muted-foreground">
                <Mail size={16} className="mt-0.5 flex-shrink-0" />
                <span>{CONTACT_EMAIL}</span>
              </li>
              <li className="flex items-start space-x-2 text-sm text-muted-foreground">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span>{language === 'zh' ? CONTACT_ADDRESS : CONTACT_ADDRESS_EN}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} {language === 'zh' ? SITE_NAME : SITE_NAME_EN}.{' '}
              {t('版權所有', 'All rights reserved')}.
            </p>
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-accent transition-colors">
                {t('隱私政策', 'Privacy Policy')}
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                {t('服務條款', 'Terms of Service')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
