import { BrowserRouter as Router } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import Navigation from "./components/Navigation";
import SEOHead from "./components/SEOHead";
// 导入博客页面组件
import BlogArticle from "./pages/BlogArticle";
import BrandComparisonArticle from "./pages/BrandComparisonArticle";
import CustomerTestimonialArticle from "./pages/CustomerTestimonialArticle";
// 可根据需要导入其他页面（首页、服务页等）
import HomePage from "./pages/HomePage";
import TechnologyPage from "./pages/TechnologyPage";
import ServicesPage from "./pages/ServicesPage";
import CasesPage from "./pages/CasesPage";
import ContactPage from "./pages/ContactPage";
import { Routes, Route } from "wouter"; // 如果你使用 wouter 路由库

function App() {
  // 全局SEO配置（可根据页面动态传入不同内容）
  const globalSEO = {
    title: {
      zh: "量子風水空氣淨化 | 香港專業服務",
      en: "Quantum Feng Shui Air Purification | Hong Kong Professional Service"
    },
    description: {
      zh: "結合頂級空氣淨化科技與量子調頻技術，精準擺設風水吉位，打造和諧家居環境。",
      en: "Combining premium air purification with quantum tuning and feng shui positioning for harmonious living."
    },
    keywords: {
      zh: "量子風水, 空氣淨化, 風水布局, 戴森, 飛利浦, 小米",
      en: "Quantum Feng Shui, Air Purifier, Dyson, Philips, Xiaomi, Feng Shui Layout"
    }
  };

  return (
    <LanguageProvider>
      <Router>
        <SEOHead {...globalSEO} />
        <Navigation />
        <main className="min-h-screen">
          <Routes>
            {/* 首页及其他页面路由 */}
            <Route path="/" component={HomePage} />
            <Route path="/technology" component={TechnologyPage} />
            <Route path="/services" component={ServicesPage} />
            <Route path="/cases" component={CasesPage} />
            <Route path="/blog" component={BlogListPage} /> {/* 假设的博客列表页 */}
            <Route path="/contact" component={ContactPage} />
            
            {/* 博客详情页路由 */}
            <Route 
              path="/blog/quantum-feng-shui-guide-2026" 
              component={BlogArticle} 
            />
            <Route 
              path="/blog/brand-comparison-dyson-philips-xiaomi" 
              component={BrandComparisonArticle} 
            />
            <Route 
              path="/blog/customer-testimonial-mrs-zhang" 
              component={CustomerTestimonialArticle} 
            />
          </Routes>
        </main>
      </Router>
    </LanguageProvider>
  );
}

export default App;
