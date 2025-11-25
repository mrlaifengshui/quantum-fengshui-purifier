import { Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  language: 'zh' | 'en';
}

export default function Footer({ language }: FooterProps) {
  const content = language === 'zh'
    ? {
        quickLinks: '快速導航',
        contact: '聯繫方式',
        followUs: '關注我們',
        copyright: '© 2025 黎Sir 量子風水空氣淨化服務。版權所有。',
        links: [
          { label: '首頁', href: '/' },
          { label: '服務介紹', href: '/services' },
          { label: '案例分享', href: '/cases' },
          { label: '聯繫我們', href: '/contact' },
        ],
        contactInfo: [
          { icon: Phone, label: '電話', value: '[黎Sir 聯繫電話]' },
          { icon: Mail, label: 'Email', value: '[Email 地址]' },
          { icon: MapPin, label: '網站', value: 'mrlaifengshui.com' },
        ],
      }
    : {
        quickLinks: 'Quick Links',
        contact: 'Contact Information',
        followUs: 'Follow Us',
        copyright: '© 2025 Mr. Lai Quantum Feng Shui Air Purification Service. All rights reserved.',
        links: [
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Case Studies', href: '/cases' },
          { label: 'Contact', href: '/contact' },
        ],
        contactInfo: [
          { icon: Phone, label: 'Phone', value: '[Mr. Lai Contact Phone]' },
          { icon: Mail, label: 'Email', value: '[Email Address]' },
          { icon: MapPin, label: 'Website', value: 'mrlaifengshui.com' },
        ],
      };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container max-w-7xl mx-auto px-4 py-12">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-secondary mb-4">{content.quickLinks}</h3>
            <ul className="space-y-2">
              {content.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-foreground hover:text-secondary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-bold text-secondary mb-4">{content.contact}</h3>
            <ul className="space-y-3">
              {content.contactInfo.map((info, idx) => {
                const Icon = info.icon;
                return (
                  <li key={idx} className="flex items-start gap-3">
                    <Icon className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      <p className="text-foreground">{info.value}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Brand Info */}
          <div>
            <h3 className="text-lg font-bold text-secondary mb-4">
              {language === 'zh' ? '關於我們' : 'About Us'}
            </h3>
            <p className="text-foreground text-sm leading-relaxed">
              {language === 'zh'
                ? '黎Sir 量子風水空氣淨化服務，結合現代科技與傳統智慧，為您打造完整的空間能量解決方案。'
                : 'Mr. Lai Quantum Feng Shui Air Purification Service combines modern technology with traditional wisdom to create complete spatial energy solutions for you.'}
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8" />

        {/* Copyright */}
        <div className="text-center text-sm text-muted-foreground">
          {content.copyright}
        </div>
      </div>
    </footer>
  );
}
