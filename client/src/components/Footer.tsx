import { Link } from 'wouter';
import { Facebook, Instagram, Phone, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { CONTACT_PHONE, CONTACT_EMAIL, CONTACT_ADDRESS, CONTACT_ADDRESS_EN, SOCIAL_LINKS } from '../const';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-muted border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
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
          <div>
            <h3 className="text-foreground font-semibold mb-4">
              {t('快速導航', 'Quick Links')}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <a className="text-muted-foreground hover:text-accent transition-colors text-sm">
                    {t('首頁', 'Home')}
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/brands">
                  <a className="text-muted-foreground hover:text-accent transition-colors text-sm">
                    {t('品牌', 'Brands')}
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <a className="text-muted-foreground hover:text-accent transition-colors text-sm">
                    {t('服務', 'Services')}
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/cases">
                  <a className="text-muted-foreground hover:text-accent transition-colors text-sm">
                    {t('案例', 'Cases')}
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="text-muted-foreground hover:text-accent transition-colors text-sm">
                    {t('聯繫', 'Contact')}
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">
              {t('聯繫方式', 'Contact Info')}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-sm">
                <Phone className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">{CONTACT_PHONE}</span>
              </li>
              <li className="flex items-start space-x-2 text-sm">
                <Mail className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">{CONTACT_EMAIL}</span>
              </li>
              <li className="flex items-start space-x-2 text-sm">
                <MapPin className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">
                  {t(CONTACT_ADDRESS, CONTACT_ADDRESS_EN)}
                </span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
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
