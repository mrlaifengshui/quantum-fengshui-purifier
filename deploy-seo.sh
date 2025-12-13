#!/bin/bash

# 🚀 SEO 優化部署腳本 | SEO Optimization Deployment Script
# Quantum Feng Shui Air Purification Website

set -e  # Exit on error

echo "=========================================="
echo "🌐 開始 SEO 優化部署"
echo "🌐 Starting SEO Optimization Deployment"
echo "=========================================="
echo ""

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Step 1: 檢查必要文件
echo "📋 Step 1: 檢查 SEO 文件..."
echo "📋 Step 1: Checking SEO files..."

SEO_FILES=(
    "client/public/robots.txt"
    "client/public/sitemap.xml"
    "client/src/components/SEOHead.tsx"
    "client/src/components/StructuredData.tsx"
)

for file in "${SEO_FILES[@]}"; do
    if [ -f "$file" ]; then
        echo -e "${GREEN}✓${NC} 找到: $file"
    else
        echo -e "${RED}✗${NC} 缺失: $file"
        echo -e "${YELLOW}⚠ 警告: 請確保所有 SEO 文件都已創建${NC}"
    fi
done

echo ""

# Step 2: 進入 client 目錄
echo "📂 Step 2: 進入 client 目錄..."
cd client

# Step 3: 安裝依賴
echo "📦 Step 3: 檢查並安裝依賴..."
if [ ! -d "node_modules" ]; then
    echo "安裝 npm 套件..."
    npm install
else
    echo -e "${GREEN}✓${NC} 依賴已安裝"
fi

echo ""

# Step 4: 構建生產版本
echo "🏗️  Step 4: 構建生產版本..."
npm run build

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✓${NC} 構建成功！"
else
    echo -e "${RED}✗${NC} 構建失敗"
    exit 1
fi

echo ""

# Step 5: 驗證 SEO 文件是否在 dist 目錄
echo "🔍 Step 5: 驗證 SEO 文件..."

DIST_FILES=(
    "dist/robots.txt"
    "dist/sitemap.xml"
)

for file in "${DIST_FILES[@]}"; do
    if [ -f "$file" ]; then
        echo -e "${GREEN}✓${NC} 生成: $file"
    else
        echo -e "${RED}✗${NC} 缺失: $file"
    fi
done

echo ""

# Step 6: 顯示 sitemap 內容預覽
echo "📄 Sitemap 預覽 (前 20 行):"
echo "----------------------------"
head -n 20 dist/sitemap.xml 2>/dev/null || echo "Sitemap 不存在"
echo "----------------------------"
echo ""

# Step 7: 部署到 GitHub Pages
echo "🚀 Step 6: 準備部署到 GitHub Pages..."
echo ""
echo -e "${YELLOW}請選擇部署方式:${NC}"
echo "1) 自動部署 (使用 gh-pages)"
echo "2) 手動提交 (生成 commit 但不推送)"
echo "3) 僅構建 (不部署)"
echo ""

read -p "請輸入選項 [1-3]: " choice

case $choice in
    1)
        echo ""
        echo "🚀 正在部署到 GitHub Pages..."
        npm run deploy
        
        if [ $? -eq 0 ]; then
            echo ""
            echo -e "${GREEN}========================================${NC}"
            echo -e "${GREEN}✓ 部署成功！${NC}"
            echo -e "${GREEN}========================================${NC}"
            echo ""
            echo "🌐 您的網站將在 2-5 分鐘內更新"
            echo "📍 訪問: https://mrlaifengshui.github.io/quantum-fengshui-purifier/"
            echo "或: https://fengshuipurifier.com/"
            echo ""
            echo "📋 接下來的步驟:"
            echo "1. 訪問 Google Search Console"
            echo "2. 提交 sitemap.xml"
            echo "3. 檢查 hreflang 標記"
            echo ""
        else
            echo -e "${RED}✗ 部署失敗${NC}"
            exit 1
        fi
        ;;
    2)
        echo ""
        echo "📝 生成提交..."
        cd ..
        git add .
        git commit -m "feat: SEO optimization with bilingual support

- Add robots.txt and sitemap.xml
- Add SEOHead component with hreflang tags
- Add StructuredData component with Schema.org markup
- Integrate SEO components into pages
- Support zh-HK and en language versions"
        
        echo ""
        echo -e "${GREEN}✓ 提交已準備好${NC}"
        echo ""
        echo "執行以下命令完成部署:"
        echo ""
        echo "  git push origin main"
        echo "  cd client && npm run deploy"
        echo ""
        ;;
    3)
        echo ""
        echo -e "${GREEN}✓ 構建完成！${NC}"
        echo ""
        echo "dist 目錄已準備好，可以:"
        echo "1. 手動上傳到您的主機"
        echo "2. 使用其他部署方法"
        echo ""
        ;;
    *)
        echo ""
        echo -e "${RED}無效的選項${NC}"
        exit 1
        ;;
esac

echo ""
echo "=========================================="
echo "✨ SEO 優化部署完成"
echo "✨ SEO Optimization Deployment Complete"
echo "=========================================="
echo ""
echo "📚 查看完整 SEO 指南:"
echo "cat SEO_BILINGUAL_OPTIMIZATION_GUIDE.md"
echo ""
