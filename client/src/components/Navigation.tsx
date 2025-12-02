import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { SITE_NAME, SITE_NAME_EN } from '../const';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { path: '/', label: t('首頁', 'Home') },
    { path: '/brands', label: t('品牌', 'Brands') },
    { path: '/services', label: t('服務', 'Services') },
    { path: '/cases', label: t('案例', 'Cases') },
    { path: '/contact', label: t('聯繫', 'Contact') },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'zh' ? 'en' : 'zh');
  };

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/">
            <a className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-accent to-secondary rounded-lg"></div>
              <span className="text-xl font-bold bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
                {language === 'zh' ? SITE_NAME : SITE_NAME_EN}
              </span>
            </a>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <a
                  className={`text-sm font-medium transition-colors hover:text-accent ${
                    location === item.path ? 'text-accent' : 'text-foreground'
                  }`}
                >
                  {item.label}
                </a>
              </Link>
            ))}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 text-sm font-medium text-foreground hover:text-accent transition-colors"
            >
              <Globe size={16} />
              <span>{language === 'zh' ? '中' : 'EN'}</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground hover:text-accent transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <a
                  onClick={() => setIsOpen(false)}
                  className={`block py-2 text-sm font-medium transition-colors ${
                    location === item.path ? 'text-accent' : 'text-foreground hover:text-accent'
                  }`}
                >
                  {item.label}
                </a>
              </Link>
            ))}
            <button
              onClick={() => {
                toggleLanguage();
                setIsOpen(false);
              }}
              className="flex items-center space-x-2 py-2 text-sm font-medium text-foreground hover:text-accent transition-colors"
            >
              <Globe size={16} />
              <span>{language === 'zh' ? '切換至英文' : 'Switch to Chinese'}</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
