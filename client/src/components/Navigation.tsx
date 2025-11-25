import { useState } from 'react';
import { Link } from 'wouter';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  language: 'zh' | 'en';
  onLanguageChange: (lang: 'zh' | 'en') => void;
}

export default function Navigation({ language, onLanguageChange }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = language === 'zh' 
    ? [
        { label: '首頁', href: '/' },
        { label: '服務介紹', href: '/services' },
        { label: '案例分享', href: '/cases' },
        { label: '聯繫我們', href: '/contact' },
      ]
    : [
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services' },
        { label: 'Case Studies', href: '/cases' },
        { label: 'Contact', href: '/contact' },
      ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
      <div className="container max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <a className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
              <span className="text-secondary-foreground font-bold text-sm">量子</span>
            </div>
            <span className="hidden sm:inline font-bold text-secondary">
              {language === 'zh' ? '黎Sir 量子風水' : 'Mr. Lai Quantum Feng Shui'}
            </span>
          </a>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <a className="text-foreground hover:text-secondary transition-colors">
                {item.label}
              </a>
            </Link>
          ))}
        </div>

        {/* Language Switcher & Mobile Menu */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => onLanguageChange(language === 'zh' ? 'en' : 'zh')}
            className="px-3 py-1 rounded-lg bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors text-sm font-medium"
          >
            {language === 'zh' ? 'EN' : '中文'}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-card">
          <div className="container max-w-7xl mx-auto px-4 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <a
                  className="text-foreground hover:text-secondary transition-colors py-2"
                  onClick={() => setIsOpen(false)}
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
