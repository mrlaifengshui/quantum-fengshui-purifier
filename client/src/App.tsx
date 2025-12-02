import { Route, Switch } from 'wouter';
import { LanguageProvider } from './contexts/LanguageContext';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Brands from './pages/Brands';
import Services from './pages/Services';
import Cases from './pages/Cases';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <LanguageProvider>
      <div className="flex flex-col min-h-screen bg-background text-foreground">
        <Navigation />
        <main className="flex-grow">
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/brands" component={Brands} />
            <Route path="/services" component={Services} />
            <Route path="/cases" component={Cases} />
            <Route path="/contact" component={Contact} />
            <Route component={NotFound} />
          </Switch>
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
