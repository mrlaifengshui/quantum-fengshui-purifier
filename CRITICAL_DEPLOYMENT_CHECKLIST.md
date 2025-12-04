# 🔴 關鍵部署檢查清單 - 必須遵守！

## ⚠️ 重要教訓：2025-12-04 事件

**問題：** 忘記上傳 `assets` 資料夾導致網站完全無法載入
**影響：** 所有裝置（PC、手機、不同瀏覽器）都無法訪問網站
**根因：** 只上傳了 `index.html`，但 JavaScript 和 CSS 檔案缺失

---

## ✅ 正確的部署流程（每次必須執行）

### 第 1 步：構建專案
```bash
cd /home/user/webapp/client
npm install  # 確保依賴是最新的
npm run build
```

### 第 2 步：驗證構建輸出
```bash
# 必須檢查這些檔案都存在！
ls -lh client/dist/index.html
ls -lh client/dist/assets/*.js
ls -lh client/dist/assets/*.css
ls -lh client/dist/images/

# 確認檔案數量
find client/dist -type f | wc -l  # 應該有多個檔案
```

### 第 3 步：打包完整構建
```bash
cd /home/user/webapp
tar -czf /tmp/complete-build.tar.gz -C client/dist .

# 驗證打包內容
tar -tzf /tmp/complete-build.tar.gz | head -20
```

### 第 4 步：部署到 gh-pages
```bash
# 切換到 gh-pages
git checkout gh-pages

# 解壓縮完整構建
tar -xzf /tmp/complete-build.tar.gz

# 🔴 關鍵驗證步驟 - 絕對不能跳過！
echo "=== 驗證部署檔案 ==="
ls -lh index.html
ls -lh assets/*.js | tail -5
ls -lh assets/*.css
ls -lh images/*.jpg

# 檢查 index.html 引用的檔案是否存在
JS_FILE=$(grep -o 'assets/index-[^"]*\.js' index.html)
CSS_FILE=$(grep -o 'assets/index-[^"]*\.css' index.html)
echo "index.html 引用: $JS_FILE"
echo "index.html 引用: $CSS_FILE"
ls -lh "$JS_FILE" || echo "❌ 錯誤：JS 檔案不存在！"
ls -lh "$CSS_FILE" || echo "❌ 錯誤：CSS 檔案不存在！"
```

### 第 5 步：提交並推送
```bash
git add -A
git status  # 檢查要提交的檔案

# 提交訊息應包含新增的資源檔案
git commit -m "deploy: 完整部署包含所有 assets

包含檔案：
- index.html
- assets/*.js (JavaScript 檔案)
- assets/*.css (CSS 檔案)
- images/* (所有圖片)

構建時間: $(date)"

# 推送到 GitHub
git push origin gh-pages
```

### 第 6 步：驗證線上部署
```bash
# 等待 GitHub Pages 部署（通常 30-60 秒）
sleep 60

# 驗證關鍵檔案可訪問
echo "=== 驗證線上檔案 ==="
curl -I "https://mrlaifengshui.github.io/quantum-fengshui-purifier/" | grep HTTP
curl -I "https://mrlaifengshui.github.io/quantum-fengshui-purifier/assets/index-*.js" | grep HTTP
curl -I "https://mrlaifengshui.github.io/quantum-fengshui-purifier/assets/index-*.css" | grep HTTP
```

---

## 🔴 絕對不能做的事

### ❌ 錯誤做法 1：只複製 index.html
```bash
# ❌ 這會導致網站無法載入！
git checkout gh-pages
cp client/dist/index.html .
git add index.html
git commit -m "update"
git push
```

### ❌ 錯誤做法 2：忘記驗證檔案
```bash
# ❌ 沒有檢查 assets 資料夾
git add index.html
git commit -m "deploy"
git push
# 結果：網站壞掉！
```

### ❌ 錯誤做法 3：使用 cp 而不是 tar
```bash
# ❌ 可能遺漏隱藏檔案或子目錄
cp -r client/dist/* .
# 更安全：使用 tar
tar -xzf /tmp/build.tar.gz
```

---

## ✅ 快速部署腳本（推薦使用）

創建 `/home/user/webapp/deploy.sh`：

```bash
#!/bin/bash
set -e  # 遇到錯誤立即停止

echo "🚀 開始部署..."

# 1. 確認在正確的目錄
cd /home/user/webapp

# 2. 切換到 main 並更新
git checkout main
git pull origin main

# 3. 構建
echo "📦 構建專案..."
cd client
npm install
npm run build
cd ..

# 4. 驗證構建
echo "🔍 驗證構建輸出..."
if [ ! -f "client/dist/index.html" ]; then
    echo "❌ 錯誤：index.html 不存在！"
    exit 1
fi

if [ ! -d "client/dist/assets" ]; then
    echo "❌ 錯誤：assets 資料夾不存在！"
    exit 1
fi

JS_COUNT=$(find client/dist/assets -name "*.js" | wc -l)
CSS_COUNT=$(find client/dist/assets -name "*.css" | wc -l)

echo "✅ 找到 $JS_COUNT 個 JS 檔案"
echo "✅ 找到 $CSS_COUNT 個 CSS 檔案"

if [ "$JS_COUNT" -eq 0 ] || [ "$CSS_COUNT" -eq 0 ]; then
    echo "❌ 錯誤：assets 資料夾為空！"
    exit 1
fi

# 5. 打包
echo "📦 打包完整構建..."
tar -czf /tmp/deploy-$(date +%Y%m%d-%H%M%S).tar.gz -C client/dist .
DEPLOY_FILE=$(ls -t /tmp/deploy-*.tar.gz | head -1)

# 6. 部署到 gh-pages
echo "🚀 部署到 gh-pages..."
git checkout gh-pages
tar -xzf "$DEPLOY_FILE"

# 7. 驗證部署
echo "🔍 驗證部署檔案..."
if [ ! -f "index.html" ]; then
    echo "❌ 錯誤：index.html 未部署！"
    exit 1
fi

JS_FILE=$(grep -o 'assets/index-[^"]*\.js' index.html | head -1)
CSS_FILE=$(grep -o 'assets/index-[^"]*\.css' index.html | head -1)

if [ ! -f "$JS_FILE" ]; then
    echo "❌ 錯誤：$JS_FILE 不存在！"
    exit 1
fi

if [ ! -f "$CSS_FILE" ]; then
    echo "❌ 錯誤：$CSS_FILE 不存在！"
    exit 1
fi

echo "✅ 所有檔案驗證通過！"
echo "   - index.html ✅"
echo "   - $JS_FILE ✅"
echo "   - $CSS_FILE ✅"

# 8. 提交並推送
git add -A
git commit -m "deploy: 完整部署 - $(date +%Y%m%d-%H%M%S)

包含所有 assets 和資源檔案
JS: $JS_FILE
CSS: $CSS_FILE"

git push origin gh-pages

# 9. 返回 main
git checkout main

echo ""
echo "✅ 部署成功！"
echo "🌐 網站：https://mrlaifengshui.github.io/quantum-fengshui-purifier/"
echo "⏳ 請等待 1-2 分鐘讓 GitHub Pages 更新"
echo ""
```

**使用方式：**
```bash
chmod +x /home/user/webapp/deploy.sh
/home/user/webapp/deploy.sh
```

---

## 📋 部署前檢查清單

每次部署前必須確認：

- [ ] ✅ 已執行 `npm run build`
- [ ] ✅ `client/dist/index.html` 存在
- [ ] ✅ `client/dist/assets/*.js` 存在（至少 1 個）
- [ ] ✅ `client/dist/assets/*.css` 存在（至少 1 個）
- [ ] ✅ 使用 tar 打包完整構建
- [ ] ✅ 在 gh-pages 解壓縮完整構建
- [ ] ✅ 驗證 index.html 引用的檔案都存在
- [ ] ✅ 使用 `git add -A` 添加所有檔案
- [ ] ✅ 檢查 `git status` 確認要提交的檔案
- [ ] ✅ 推送後等待 1-2 分鐘
- [ ] ✅ 驗證線上檔案可訪問（curl 測試）

---

## 🎯 記住這個教訓！

### 2025-12-04 的錯誤：
```
❌ 只上傳了 index.html
❌ 忘記上傳 assets 資料夾
❌ 結果：網站在所有裝置都無法載入
```

### 正確的做法：
```
✅ 使用 tar 打包完整 dist 資料夾
✅ 驗證所有檔案都存在
✅ 確認 JS 和 CSS 檔案可訪問
✅ 結果：網站正常運作
```

---

## 🔄 如果網站又壞了怎麼辦？

### 快速診斷步驟：

1. **檢查 JS 檔案是否存在：**
```bash
curl -I "https://mrlaifengshui.github.io/quantum-fengshui-purifier/assets/index-*.js"
# 應該返回 HTTP/2 200，不是 404
```

2. **檢查 gh-pages 分支：**
```bash
cd /home/user/webapp
git checkout gh-pages
ls -lh assets/*.js
```

3. **如果檔案缺失，重新部署：**
```bash
/home/user/webapp/deploy.sh
```

---

## 📝 總結

**永遠記住：**
- 🔴 **不只是上傳 index.html**
- 🔴 **必須上傳整個 dist 資料夾（包括 assets）**
- 🔴 **使用 tar 確保不遺漏檔案**
- 🔴 **部署後驗證所有檔案都可訪問**

**這個檢查清單可以拯救你的網站！** 📋✅
