import { Link } from 'wouter';
import { Home } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function NotFound() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-accent mb-4">404</h1>
        <h2 className="text-3xl font-bold text-foreground mb-4">
          {t('頁面未找到', 'Page Not Found')}
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          {t(
            '抱歉，您訪問的頁面不存在或已被移除。',
            'Sorry, the page you are looking for does not exist or has been removed.'
          )}
        </p>
        <Link href="/">
          <a className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-accent to-secondary text-background font-semibold rounded-lg hover:shadow-lg hover:shadow-accent/50 transition-all">
            <Home className="mr-2" size={20} />
            {t('返回首頁', 'Back to Home')}
          </a>
        </Link>
      </div>
    </div>
  );
}
