#!/bin/bash

# 自動化部署腳本 - 量子風水空氣淨化網站
# 這個腳本確保：
# 1. 完全清理舊檔案
# 2. 重新構建最新版本
# 3. 正確部署到 gh-pages
# 4. 避免快取問題

set -e  # 遇到錯誤立即停止

echo "=========================================="
echo "🚀 開始部署流程"
echo "=========================================="
echo ""

# 1. 確保在正確的目錄
cd /home/user/webapp
echo "✅ 工作目錄: $(pwd)"
echo ""

# 2. 切換到 main 分支
echo "📦 步驟 1: 切換到 main 分支"
git checkout main
git pull origin main
echo "✅ main 分支已更新"
echo ""

# 3. 完全清理並重新安裝依賴
echo "🧹 步驟 2: 清理舊的構建檔案"
cd client
rm -rf dist node_modules/.vite
echo "✅ 清理完成"
echo ""

# 4. 重新構建
echo "🔨 步驟 3: 重新構建專案"
npm install
npm run build
echo "✅ 構建完成"
echo ""

# 5. 檢查構建結果
echo "🔍 步驟 4: 驗證構建結果"
cd ..
BUILD_JS=$(ls client/dist/assets/index-*.js | head -1 | xargs basename)
BUILD_CSS=$(ls client/dist/assets/index-*.css | head -1 | xargs basename)
echo "構建的 JS: $BUILD_JS"
echo "構建的 CSS: $BUILD_CSS"
echo ""

# 6. 切換到 gh-pages 分支
echo "📤 步驟 5: 部署到 gh-pages"
git checkout gh-pages
echo "✅ 已切換到 gh-pages 分支"
echo ""

# 7. 完全清理 gh-pages 的舊檔案
echo "🗑️  步驟 6: 清理 gh-pages 上的舊資產"
rm -rf assets/*
rm -rf images/*
echo "✅ 舊檔案已清理"
echo ""

# 8. 複製新的構建檔案
echo "📋 步驟 7: 複製新的構建檔案"
cp -r client/dist/assets/* assets/
cp -r client/dist/images/* images/
cp client/dist/index.html .
cp index.html 404.html
echo "✅ 檔案複製完成"
echo ""

# 9. 驗證部署
echo "✅ 步驟 8: 驗證部署"
DEPLOYED_JS=$(grep "assets/index-" index.html | grep ".js" | sed -n 's/.*assets\/\(index-[^"]*\.js\).*/\1/p')
DEPLOYED_CSS=$(grep "assets/index-" index.html | grep ".css" | sed -n 's/.*assets\/\(index-[^"]*\.css\).*/\1/p')
echo "部署的 JS: $DEPLOYED_JS"
echo "部署的 CSS: $DEPLOYED_CSS"

if [ "$BUILD_JS" = "$DEPLOYED_JS" ] && [ "$BUILD_CSS" = "$DEPLOYED_CSS" ]; then
    echo "✅ 檔案版本匹配！"
else
    echo "❌ 警告：檔案版本不匹配！"
    exit 1
fi
echo ""

# 10. 提交並推送
echo "💾 步驟 9: 提交並推送到 GitHub"
git add -A
TIMESTAMP=$(date -u '+%Y-%m-%d %H:%M UTC')
git commit -m "deploy: 自動部署 - $TIMESTAMP

構建檔案:
- $BUILD_JS
- $BUILD_CSS

部署時間: $TIMESTAMP"

git push origin gh-pages
echo "✅ 推送完成"
echo ""

# 11. 切換回 main 分支
echo "🔄 步驟 10: 切換回 main 分支"
git checkout main
echo "✅ 已切換回 main 分支"
echo ""

echo "=========================================="
echo "🎉 部署成功完成！"
echo "=========================================="
echo ""
echo "網站 URL: https://mrlaifengshui.github.io/quantum-fengshui-purifier/"
echo ""
echo "⚠️  重要提醒："
echo "1. GitHub Pages CDN 需要 5-15 分鐘更新"
echo "2. 請清除瀏覽器快取（Ctrl+Shift+R 或 Cmd+Shift+R）"
echo "3. 或使用無痕模式訪問網站"
echo ""
