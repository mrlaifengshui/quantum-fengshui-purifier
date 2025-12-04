#!/bin/bash
set -e

echo "🚀 開始部署..."
cd /home/user/webapp

# 1. 構建
git checkout main
cd client
npm install
npm run build
cd ..

# 2. 驗證構建
echo "🔍 驗證構建..."
if [ ! -f "client/dist/index.html" ] || [ ! -d "client/dist/assets" ]; then
    echo "❌ 構建失敗！"
    exit 1
fi

# 3. 打包完整構建
echo "📦 打包所有檔案（包括 assets）..."
tar -czf /tmp/deploy-$(date +%Y%m%d-%H%M%S).tar.gz -C client/dist .
DEPLOY_FILE=$(ls -t /tmp/deploy-*.tar.gz | head -1)

# 4. 部署到 gh-pages
echo "🚀 部署到 gh-pages..."
git checkout gh-pages
tar -xzf "$DEPLOY_FILE"

# 5. 🔴 關鍵驗證
echo "🔍 驗證 assets 資料夾..."
JS_FILE=$(grep -o 'assets/index-[^"]*\.js' index.html | head -1)
if [ ! -f "$JS_FILE" ]; then
    echo "❌ 錯誤：$JS_FILE 不存在！assets 資料夾未部署！"
    exit 1
fi
echo "✅ $JS_FILE 存在"

# 6. 提交
git add -A
git commit -m "deploy: 完整部署（包含 assets）- $(date +%Y%m%d-%H%M%S)"
git push origin gh-pages
git checkout main

echo "✅ 部署成功！所有檔案（包括 assets）已上傳"
