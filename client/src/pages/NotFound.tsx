import { Link } from 'wouter';
import { Home, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <div className="mb-8">
          <div className="text-9xl font-bold text-accent mb-4">404</div>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            {t('頁面未找到', 'Page Not Found')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-md mx-auto">
            {t(
              '抱歉，您訪問的頁面不存在或已被移除',
              'Sorry, the page you are looking for does not exist or has been removed'
            )}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <a className="inline-flex items-center justify-center px-8 py-4 bg-accent text-background font-semibold rounded-lg hover:bg-accent/90 transition-all duration-300">
              <Home className="w-5 h-5 mr-2" />
              {t('返回首頁', 'Back to Home')}
            </a>
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center px-8 py-4 bg-muted text-foreground font-semibold rounded-lg hover:bg-border transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            {t('返回上頁', 'Go Back')}
          </button>
        </div>
      </div>
    </div>
  );
}
