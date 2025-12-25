// 修正后的 App.tsx（仅保留关键路由部分）
import { Router, Routes, Route } from "wouter"; // 导入 wouter 的路由组件
import { LanguageProvider } from "./contexts/LanguageContext";
import Navigation from "./components/Navigation";
import SEOHead from "./components/SEOHead";
// 导入你的页面组件（确保路径正确）
import HomePage from "./pages/HomePage";
import BlogArticle from "./pages/BlogArticle";
import BrandComparisonArticle from "./pages/BrandComparisonArticle";
import CustomerTestimonialArticle from "./pages/CustomerTestimonialArticle";
import BedroomHarmonyArticle from "./pages/BedroomHarmonyArticle";
// 其他页面...

function App() {
  const globalSEO = { /* ... 保持不变 ... */ };

  return (
    <LanguageProvider>
      <Router> {/* 使用 wouter 的 Router 而非 React Router */}
        <SEOHead {...globalSEO} />
        <Navigation />
        <main className="min-h-screen">
          <Routes>
            {/* 首页 */}
            <Route path="/" component={HomePage} />
            {/* 博客详情页 */}
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
            <Route 
              path="/blog/bedroom-harmony-feng-shui" 
              component={BedroomHarmonyArticle} 
            />
            {/* 其他页面路由... */}
          </Routes>
        </main>
      </Router>
    </LanguageProvider>
  );
}

export default App;
