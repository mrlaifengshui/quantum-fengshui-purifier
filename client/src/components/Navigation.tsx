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
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-background/95 via-section-dark/98 to-background/95 backdrop-blur-xl border-b border-border/50 shadow-cosmic animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo - Simple Quantum Taichi */}
          <Link href="/">
            <div className="flex items-center cursor-pointer group">
              <div className="w-14 h-14 rounded-full flex items-center justify-center shadow-glow transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-cosmic group-hover:rotate-180 relative overflow-hidden bg-white">
                {/* Taichi symbol - Simple SVG */}
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  {/* Background circle */}
                  <circle cx="50" cy="50" r="48" fill="white" stroke="#667eea" strokeWidth="2"/>
                  
                  {/* Left half - Dark */}
                  <path d="M 50 2 A 48 48 0 0 1 50 98 A 24 24 0 0 0 50 50 A 24 24 0 0 1 50 2" fill="#667eea"/>
                  
                  {/* Right half - Light (already white background) */}
                  
                  {/* Small circle in dark side */}
                  <circle cx="50" cy="26" r="8" fill="white"/>
                  
                  {/* Small circle in light side */}
                  <circle cx="50" cy="74" r="8" fill="#667eea"/>
                  
                  {/* Energy dots */}
                  <circle cx="50" cy="26" r="2" fill="#ffd700" opacity="0.8"/>
                  <circle cx="50" cy="74" r="2" fill="#ffd700" opacity="0.8"/>
                </svg>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <div key={item.path} className="flex items-center">
                <Link href={item.path}>
                  <a
                    className={cn(
                      'px-5 py-2 text-base font-semibold transition-all duration-300 hover:text-accent hover:bg-accent/20 hover:shadow-glow rounded-lg relative group transform hover:scale-105',
                      location === item.path ? 'text-accent bg-accent/15 shadow-glow' : 'text-foreground'
                    )}
                  >
                    | {item.label}
                    <span className={cn(
                      'absolute bottom-0 left-0 w-0 h-[3px] bg-gradient-to-r from-accent to-secondary rounded-full transition-all duration-300 group-hover:w-full',
                      location === item.path && 'w-full'
                    )}></span>
                  </a>
                </Link>
                {index < navItems.length - 1 && (
                  <div className="w-px h-5 bg-border/60 mx-3"></div>
                )}
              </div>
            ))}
            <div className="w-px h-5 bg-border/60 mx-3"></div>
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-accent hover:bg-accent/10 transition-all duration-300 border border-border/30"
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
