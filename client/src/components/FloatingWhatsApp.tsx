import { MessageCircle } from 'lucide-react';
import { SOCIAL_LINKS } from '../const';
import { useLanguage } from '../contexts/LanguageContext';

export default function FloatingWhatsApp() {
  const { t } = useLanguage();

  return (
    <a
      href={SOCIAL_LINKS.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] hover:bg-[#128C7E] rounded-full flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 animate-bounce group"
      aria-label={t('WhatsApp 聯絡我們', 'Contact us on WhatsApp')}
    >
      <MessageCircle className="w-8 h-8 text-white" />
      {/* Pulse effect */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 animate-ping"></span>
    </a>
  );
}
