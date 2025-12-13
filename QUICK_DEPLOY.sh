#!/bin/bash

# 🚀 一鍵部署腳本 | One-Click Deployment Script
# 適用於 Quantum Feng Shui 網站 SEO 優化

echo "=========================================="
echo "🚀 開始一鍵部署 SEO 優化"
echo "🚀 Starting One-Click SEO Deployment"
echo "=========================================="
echo ""

# Token (請勿分享此文件！)
GITHUB_TOKEN="YOUR_GITHUB_TOKEN_HERE"
REPO_URL="https://${GITHUB_TOKEN}@github.com/mrlaifengshui/quantum-fengshui-purifier.git"

# 配置 Git
echo "⚙️  配置 Git..."
git config user.email "mrlaifengshui@example.com"
git config user.name "Mr Lai Feng Shui"

# 添加所有更改
echo "📦 添加文件..."
git add .

# 顯示更改
echo ""
echo "📋 將提交的更改:"
git status --short

# 提交
echo ""
echo "💾 提交更改..."
git commit -m "feat: Add comprehensive bilingual SEO optimization

✨ New Features:
- Add robots.txt with search engine directives
- Add sitemap.xml with bilingual hreflang tags
- Add SEOHead component with dynamic meta tags
- Add StructuredData component with Schema.org markup
- Integrate SEO components into App.tsx and Home.tsx

📊 SEO Improvements:
- Support for zh-HK and en language versions
- hreflang tags for international SEO
- Open Graph and Twitter Cards for social sharing
- Canonical URLs to prevent duplicate content
- 6 types of Schema.org structured data

🛠️ Tools:
- check-seo.sh: Automated SEO validation tool
- deploy-seo.sh: Interactive deployment script

📚 Documentation:
- SEO_BILINGUAL_OPTIMIZATION_GUIDE.md: Complete SEO guide
- SEO_IMPLEMENTATION_README.md: Quick start guide
- SEO_FILES_SUMMARY.txt: File overview

🎯 Expected Results:
- Week 1-2: Google indexing starts
- Month 1-2: +20-30% organic traffic
- Month 3-6: +50-100% organic traffic
"

# 推送到 main 分支
echo ""
echo "🚀 推送到 GitHub main 分支..."
git push $REPO_URL main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ 推送成功！"
    echo ""
    
    # 構建和部署到 GitHub Pages
    echo "📦 構建生產版本..."
    cd client
    npm install --quiet
    npm run build
    
    if [ $? -eq 0 ]; then
        echo "✅ 構建成功！"
        echo ""
        echo "🚀 部署到 GitHub Pages..."
        npm run deploy
        
        if [ $? -eq 0 ]; then
            echo ""
            echo "=========================================="
            echo "🎉 部署完成！"
            echo "=========================================="
            echo ""
            echo "🌐 您的網站 URLs:"
            echo "   • https://fengshuipurifier.com/"
            echo "   • https://mrlaifengshui.github.io/quantum-fengshui-purifier/"
            echo ""
            echo "📋 SEO 文件:"
            echo "   • https://fengshuipurifier.com/robots.txt"
            echo "   • https://fengshuipurifier.com/sitemap.xml"
            echo ""
            echo "✅ 下一步操作:"
            echo "   1. 等待 2-5 分鐘讓 GitHub Pages 更新"
            echo "   2. 訪問網站確認部署成功"
            echo "   3. 到 Google Search Console 提交 sitemap"
            echo "   4. 使用 Rich Results Test 驗證結構化數據"
            echo ""
            echo "📚 詳細指南:"
            echo "   cat SEO_IMPLEMENTATION_README.md"
            echo ""
        else
            echo "❌ GitHub Pages 部署失敗"
            exit 1
        fi
    else
        echo "❌ 構建失敗"
        exit 1
    fi
else
    echo ""
    echo "❌ 推送失敗"
    echo ""
    echo "可能的原因:"
    echo "1. Token 已過期或無效"
    echo "2. 沒有推送權限"
    echo "3. 網絡連接問題"
    echo ""
    echo "手動推送命令:"
    echo "git push https://github.com/mrlaifengshui/quantum-fengshui-purifier.git main"
    exit 1
fi
