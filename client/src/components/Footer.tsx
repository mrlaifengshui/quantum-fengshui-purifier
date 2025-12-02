import { Link } from 'wouter';
import { Facebook, Instagram, Phone, Mail, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { CONTACT_PHONE, CONTACT_EMAIL, CONTACT_WEBSITE, SOCIAL_LINKS } from '../const';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-muted border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 justify-items-center text-center md:text-left md:justify-items-start">
          {/* About */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-accent font-bold text-lg mb-4">
              {t('量子風水', 'Quantum Feng Shui')}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {t(
                '結合頂級空氣淨化科技與量子調頻技術，為您打造物質清淨、能量和諧的現代家居環境。',
                'Combining premium air purification with quantum frequency tuning for a harmonious modern living environment.'
              )}
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-foreground font-semibold mb-4">
              {t('快速導航', 'Quick Links')}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/">
                  <a className="flex items-center space-x-2 text-muted-foreground hover:text-accent transition-colors text-sm group">
                    <div className="w-1 h-1 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <span>{t('首頁', 'Home')}</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/brands">
                  <a className="flex items-center space-x-2 text-muted-foreground hover:text-accent transition-colors text-sm group">
                    <div className="w-1 h-1 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <span>{t('品牌介紹', 'Brands')}</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <a className="flex items-center space-x-2 text-muted-foreground hover:text-accent transition-colors text-sm group">
                    <div className="w-1 h-1 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <span>{t('服務方案', 'Services')}  </span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/cases">
                  <a className="flex items-center space-x-2 text-muted-foreground hover:text-accent transition-colors text-sm group">
                    <div className="w-1 h-1 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <span>{t('成功案例', 'Cases')}</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="flex items-center space-x-2 text-muted-foreground hover:text-accent transition-colors text-sm group">
                    <div className="w-1 h-1 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <span>{t('聯繫我們', 'Contact')}</span>
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-foreground font-semibold mb-4">
              {t('聯繫方式', 'Contact Info')}
            </h3>
            <ul className="space-y-3 flex flex-col items-center md:items-start">
              <li className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <a href={`tel:${CONTACT_PHONE}`} className="text-muted-foreground hover:text-accent transition-colors text-sm">
                  {CONTACT_PHONE}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-secondary" />
                </div>
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-muted-foreground hover:text-accent transition-colors text-sm">
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Globe className="w-4 h-4 text-accent" />
                </div>
                <a href={`https://${CONTACT_WEBSITE}`} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors text-sm">
                  {CONTACT_WEBSITE}
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-foreground font-semibold mb-4">
              {t('關注我們', 'Follow Us')}
            </h3>
            <div className="flex space-x-4">
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-border rounded-full flex items-center justify-center text-muted-foreground hover:bg-accent hover:text-background transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-border rounded-full flex items-center justify-center text-muted-foreground hover:bg-accent hover:text-background transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-border rounded-full flex items-center justify-center text-muted-foreground hover:bg-accent hover:text-background transition-colors"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 {t('量子風水空氣淨化服務', 'Quantum Feng Shui Air Purification Service')}.{' '}
            {t('版權所有', 'All rights reserved')}.
          </p>
        </div>
      </div>
    </footer>
  );
}
