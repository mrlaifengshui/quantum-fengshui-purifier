import { useState } from 'react';
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Cases from "./pages/Cases";
import Contact from "./pages/Contact";

function Router({ language }: { language: 'zh' | 'en' }) {
  return (
    <Switch>
      <Route path={"/"} component={() => <Home language={language} />} />
      <Route path={"/services"} component={() => <Services language={language} />} />
      <Route path={"/cases"} component={() => <Cases language={language} />} />
      <Route path={"/contact"} component={() => <Contact language={language} />} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [language, setLanguage] = useState<'zh' | 'en'>('zh');

  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Navigation language={language} onLanguageChange={setLanguage} />
          <Router language={language} />
          <Footer language={language} />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
