import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { cn } from '../lib/utils';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();
  const { language, toggleLanguage, t } = useLanguage();

  const navItems = [
    { path: '/', label: t('首頁', 'Home') },
    { path: '/technology', label: t('技術原理', 'Technology') },
    { path: '/services', label: t('服務方案', 'Services') },
    { path: '/cases', label: t('成功案例', 'Cases') },
    { path: '/contact', label: t('聯繫我們', 'Contact') },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-lg border-b border-border/40 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center space-x-3 cursor-pointer group">
              <div className="w-12 h-12 bg-gradient-to-br from-primary via-accent to-secondary rounded-xl flex items-center justify-center shadow-lg transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl">
                <span className="text-white font-black text-2xl">量</span>
              </div>
              <div className="hidden md:block">
                <div className="text-foreground font-bold text-xl tracking-tight transition-colors duration-300 group-hover:text-accent">
                  {t('量子空氣淨化風水', 'Quantum Air Purification Feng Shui')}
                </div>
                <div className="text-xs text-muted-foreground font-medium">
                  {t('物質清淨 × 能量調頻 × 豐盛顯化', 'Matter × Energy × Manifestation')}
                </div>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <a
                  className={cn(
                    'text-base font-semibold transition-all duration-300 hover:text-accent relative group py-1',
                    location === item.path ? 'text-accent' : 'text-foreground'
                  )}
                >
                  {item.label}
                  <span className={cn(
                    'absolute bottom-[-6px] left-0 w-0 h-[3px] bg-gradient-to-r from-accent to-secondary rounded-full transition-all duration-300 group-hover:w-full',
                    location === item.path && 'w-full'
                  )}></span>
                </a>
              </Link>
            ))}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-accent hover:bg-accent/10 transition-all duration-300"
            >
              <Globe className="w-4 h-4" />
              <span>{language === 'zh' ? 'EN' : '中文'}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              <Globe className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-accent transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-muted border-t border-border">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <a
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    'block px-4 py-2 rounded-lg text-sm font-medium transition-colors',
                    location === item.path
                      ? 'bg-primary text-primary-foreground'
                      : 'text-foreground hover:bg-border'
                  )}
                >
                  {item.label}
                </a>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
