import { Route, Switch, Router } from 'wouter';
import { LanguageProvider } from './contexts/LanguageContext';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Home from './pages/Home';
import Technology from './pages/Technology';
import Services from './pages/Services';
import Cases from './pages/Cases';
import Blog from './pages/Blog';
import BlogArticle from './pages/BlogArticle';
import BrandComparisonArticle from './pages/BrandComparisonArticle';
import CustomerTestimonialArticle from './pages/CustomerTestimonialArticle';
import BedroomHarmonyArticle from './pages/BedroomHarmonyArticle';
import OfficeCareerArticle from './pages/OfficeCareerArticle';
import LivingRoomWealthArticle from './pages/LivingRoomWealthArticle';
import InsomniaSolutionArticle from './pages/InsomniaSolutionArticle';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

// Get base path from environment or use root
const base = import.meta.env.BASE_URL || '/';

export default function App() {
  return (
    <LanguageProvider>
      <Router base={base}>
        <div className="flex flex-col min-h-screen bg-background text-foreground">
          <Navigation />
          <main className="flex-grow">
            <Switch>
              <Route path="/" component={Home} />
              <Route path="/technology" component={Technology} />
              <Route path="/services" component={Services} />
              <Route path="/cases" component={Cases} />
              <Route path="/blog" component={Blog} />
              <Route path="/blog/quantum-feng-shui-guide-2026" component={BlogArticle} />
              <Route path="/blog/brand-comparison-dyson-philips-xiaomi" component={BrandComparisonArticle} />
              <Route path="/blog/customer-testimonial-mrs-zhang" component={CustomerTestimonialArticle} />
              <Route path="/blog/bedroom-harmony-feng-shui" component={BedroomHarmonyArticle} />
              <Route path="/blog/office-career-feng-shui" component={OfficeCareerArticle} />
              <Route path="/blog/living-room-wealth-feng-shui" component={LivingRoomWealthArticle} />
              <Route path="/blog/insomnia-solution-quantum-fengshui" component={InsomniaSolutionArticle} />
              <Route path="/contact" component={Contact} />
              <Route component={NotFound} />
            </Switch>
          </main>
          <Footer />
          <FloatingWhatsApp />
        </div>
      </Router>
    </LanguageProvider>
  );
}
