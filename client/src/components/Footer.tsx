import { Link } from 'wouter';
import { MessageCircle, Mail, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { CONTACT_EMAIL, CONTACT_WEBSITE, SOCIAL_LINKS } from '../const';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-gradient-to-b from-section-dark to-background border-t border-primary/30 relative overflow-hidden">
      {/* 🌠 裝飾性背景層 */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center text-center md:text-left md:justify-items-start">
          {/* About */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center space-x-3 mb-4 justify-center md:justify-start">
              <div className="w-10 h-10 bg-gradient-to-br from-primary via-accent to-secondary rounded-lg flex items-center justify-center shadow-glow">
                <span className="text-white font-black text-lg">量</span>
              </div>
              <h3 className="text-accent font-bold text-xl">
                {t('量子風水空氣淨化', 'Quantum Feng Shui')}
              </h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {t(
                '結合頂級空氣淨化科技與量子調頻技術，精準擺設風水吉位，為您打造物質清淨、非物質能量和諧、豐盛顯化的現代家居環境。',
                'Combining premium air purification technology with quantum frequency tuning, precisely positioned for feng shui prosperity, creating a modern home environment of material purity, non-material energy harmony, and abundance manifestation.'
              )}
            </p>
          </div>

          {/* Quick Links - Hidden on mobile */}
          <div className="hidden md:flex flex-col items-center md:items-start">
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
                <Link href="/technology">
                  <a className="flex items-center space-x-2 text-muted-foreground hover:text-accent transition-colors text-sm group">
                    <div className="w-1 h-1 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <span>{t('技術原理', 'Technology')}</span>
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
                <MessageCircle className="w-8 h-8 text-[#25D366] animate-pulse" />
                <a 
                  href={SOCIAL_LINKS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-[#25D366] hover:bg-[#128C7E] rounded-lg text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  {t('WhatsApp 聯絡我們', 'WhatsApp')}
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
        </div>

        {/* Copyright & Brand */}
        <div className="mt-12 pt-8 border-t border-primary/20">
          <div className="flex flex-col items-center space-y-4">
            {/* 🌟 品牌標語 */}
            <div className="flex items-center space-x-2 text-accent">
              <div className="w-1 h-1 rounded-full bg-accent animate-pulse"></div>
              <p className="text-sm font-medium">
                {t('物質清淨 × 非物質能量和諫 × 豐盛顯化', 'Matter Purity × Energy Harmony × Abundance Manifestation')}
              </p>
              <div className="w-1 h-1 rounded-full bg-accent animate-pulse"></div>
            </div>
            
            {/* Copyright */}
            <p className="text-muted-foreground text-sm text-center">
              © 2025 <span className="text-foreground font-semibold">{t('量子風水空氣淨化方案', 'Quantum Feng Shui Air Purification')}</span> | 
              {t(' 版權所有', ' All Rights Reserved')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
