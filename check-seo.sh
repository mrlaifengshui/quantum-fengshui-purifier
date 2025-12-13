#!/bin/bash

# 🔍 SEO 檢查工具 | SEO Checker Tool
# 驗證所有 SEO 優化是否正確設置

echo "=========================================="
echo "🔍 SEO 優化檢查工具"
echo "🔍 SEO Optimization Checker"
echo "=========================================="
echo ""

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

PASS=0
FAIL=0
WARN=0

# Function to check file existence
check_file() {
    if [ -f "$1" ]; then
        echo -e "${GREEN}✓${NC} $2"
        ((PASS++))
        return 0
    else
        echo -e "${RED}✗${NC} $2 (文件不存在: $1)"
        ((FAIL++))
        return 1
    fi
}

# Function to check content
check_content() {
    if grep -q "$2" "$1" 2>/dev/null; then
        echo -e "${GREEN}✓${NC} $3"
        ((PASS++))
        return 0
    else
        echo -e "${RED}✗${NC} $3 (未找到: $2)"
        ((FAIL++))
        return 1
    fi
}

echo "📋 1. 檢查必要的 SEO 文件"
echo "----------------------------"
check_file "client/public/robots.txt" "robots.txt 存在"
check_file "client/public/sitemap.xml" "sitemap.xml 存在"
check_file "client/src/components/SEOHead.tsx" "SEOHead 組件存在"
check_file "client/src/components/StructuredData.tsx" "StructuredData 組件存在"
echo ""

echo "📋 2. 檢查 robots.txt 內容"
echo "----------------------------"
if [ -f "client/public/robots.txt" ]; then
    check_content "client/public/robots.txt" "User-agent: \*" "User-agent 設定"
    check_content "client/public/robots.txt" "Sitemap:" "Sitemap 引用"
    check_content "client/public/robots.txt" "Allow: /" "允許爬取"
else
    echo -e "${RED}✗${NC} robots.txt 不存在"
    ((FAIL+=3))
fi
echo ""

echo "📋 3. 檢查 sitemap.xml 內容"
echo "----------------------------"
if [ -f "client/public/sitemap.xml" ]; then
    check_content "client/public/sitemap.xml" "xhtml:link" "hreflang 標記"
    check_content "client/public/sitemap.xml" "zh-HK" "中文版本"
    check_content "client/public/sitemap.xml" "hreflang=\"en\"" "英文版本"
    check_content "client/public/sitemap.xml" "x-default" "默認語言"
    check_content "client/public/sitemap.xml" "fengshuipurifier.com" "網站 URL"
else
    echo -e "${RED}✗${NC} sitemap.xml 不存在"
    ((FAIL+=5))
fi
echo ""

echo "📋 4. 檢查 SEOHead 組件"
echo "----------------------------"
if [ -f "client/src/components/SEOHead.tsx" ]; then
    check_content "client/src/components/SEOHead.tsx" "hreflang" "hreflang 支援"
    check_content "client/src/components/SEOHead.tsx" "og:title" "Open Graph"
    check_content "client/src/components/SEOHead.tsx" "twitter:card" "Twitter Card"
    check_content "client/src/components/SEOHead.tsx" "canonical" "Canonical URL"
else
    echo -e "${RED}✗${NC} SEOHead.tsx 不存在"
    ((FAIL+=4))
fi
echo ""

echo "📋 5. 檢查 StructuredData 組件"
echo "----------------------------"
if [ -f "client/src/components/StructuredData.tsx" ]; then
    check_content "client/src/components/StructuredData.tsx" "@type.*Organization" "組織 Schema"
    check_content "client/src/components/StructuredData.tsx" "LocalBusiness" "本地商家 Schema"
    check_content "client/src/components/StructuredData.tsx" "Service" "服務 Schema"
    check_content "client/src/components/StructuredData.tsx" "FAQPage" "FAQ Schema"
else
    echo -e "${RED}✗${NC} StructuredData.tsx 不存在"
    ((FAIL+=4))
fi
echo ""

echo "📋 6. 檢查組件整合"
echo "----------------------------"
if [ -f "client/src/App.tsx" ]; then
    check_content "client/src/App.tsx" "StructuredData" "App.tsx 整合 StructuredData"
else
    echo -e "${RED}✗${NC} App.tsx 檢查失敗"
    ((FAIL++))
fi

if [ -f "client/src/pages/Home.tsx" ]; then
    check_content "client/src/pages/Home.tsx" "SEOHead" "Home.tsx 整合 SEOHead"
else
    echo -e "${RED}✗${NC} Home.tsx 檢查失敗"
    ((FAIL++))
fi
echo ""

echo "📋 7. 檢查關鍵 SEO 設置"
echo "----------------------------"
if [ -f "client/index.html" ]; then
    check_content "client/index.html" "<title>" "HTML Title 標籤"
    check_content "client/index.html" "description" "Meta Description"
    check_content "client/index.html" "keywords" "Meta Keywords"
else
    echo -e "${RED}✗${NC} index.html 不存在"
    ((FAIL+=3))
fi
echo ""

# 檢查是否已構建
echo "📋 8. 檢查構建輸出"
echo "----------------------------"
if [ -d "client/dist" ]; then
    echo -e "${GREEN}✓${NC} dist 目錄存在"
    ((PASS++))
    
    if [ -f "client/dist/robots.txt" ]; then
        echo -e "${GREEN}✓${NC} robots.txt 已複製到 dist"
        ((PASS++))
    else
        echo -e "${YELLOW}⚠${NC} robots.txt 未在 dist 中（需要構建）"
        ((WARN++))
    fi
    
    if [ -f "client/dist/sitemap.xml" ]; then
        echo -e "${GREEN}✓${NC} sitemap.xml 已複製到 dist"
        ((PASS++))
    else
        echo -e "${YELLOW}⚠${NC} sitemap.xml 未在 dist 中（需要構建）"
        ((WARN++))
    fi
else
    echo -e "${YELLOW}⚠${NC} dist 目錄不存在（需要運行 npm run build）"
    ((WARN+=3))
fi
echo ""

# 顯示摘要
echo "=========================================="
echo "📊 檢查摘要 | Summary"
echo "=========================================="
echo ""
echo -e "${GREEN}✓ 通過:${NC} $PASS"
echo -e "${RED}✗ 失敗:${NC} $FAIL"
echo -e "${YELLOW}⚠ 警告:${NC} $WARN"
echo ""

# 計算總分
TOTAL=$((PASS + FAIL + WARN))
if [ $TOTAL -gt 0 ]; then
    SCORE=$((PASS * 100 / TOTAL))
    echo -e "總分: ${BLUE}$SCORE/100${NC}"
    echo ""
fi

# 給出建議
if [ $FAIL -eq 0 ] && [ $WARN -eq 0 ]; then
    echo -e "${GREEN}🎉 完美！所有 SEO 設置都已就緒！${NC}"
    echo ""
    echo "接下來的步驟:"
    echo "1. 運行 ./deploy-seo.sh 部署到 GitHub Pages"
    echo "2. 到 Google Search Console 提交 sitemap"
    echo "3. 使用 Rich Results Test 驗證結構化數據"
    echo ""
elif [ $FAIL -eq 0 ]; then
    echo -e "${YELLOW}⚠ 良好！但有一些警告需要注意${NC}"
    echo ""
    echo "建議:"
    if [ ! -d "client/dist" ]; then
        echo "• 運行 'cd client && npm run build' 構建項目"
    fi
    echo ""
elif [ $FAIL -le 5 ]; then
    echo -e "${YELLOW}⚠ 還需要一些改進${NC}"
    echo ""
    echo "請檢查上面標記為 ✗ 的項目"
    echo ""
else
    echo -e "${RED}❌ 發現多個問題，需要修復${NC}"
    echo ""
    echo "建議:"
    echo "1. 確保所有 SEO 文件都已創建"
    echo "2. 查看 SEO_BILINGUAL_OPTIMIZATION_GUIDE.md 獲取幫助"
    echo "3. 重新運行此腳本確認修復"
    echo ""
fi

echo "=========================================="
echo ""
echo "💡 提示: 查看完整指南"
echo "   cat SEO_BILINGUAL_OPTIMIZATION_GUIDE.md"
echo ""

exit $FAIL
