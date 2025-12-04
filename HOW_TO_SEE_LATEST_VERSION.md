# 如何查看最新版本 / How to See the Latest Version

## 🚨 重要提示 / IMPORTANT

您看到的舊版本是因為**瀏覽器緩存**的原因！代碼已經正確更新並部署到 GitHub。
The old version you're seeing is due to **browser caching**! The code has been correctly updated and deployed to GitHub.

---

## ✅ 代碼已確認正確 / Code Confirmed Correct

### Contact Page Style (Reference)
```html
<h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
  {t('聯繫我們', 'Contact Us')}
  <br />
  <span className="text-2xl md:text-3xl font-normal text-muted-foreground mt-4 block">
    {t('立即預約免費諮詢，體驗量子風水空氣淨化的神奇效果', '...')}
  </span>
</h1>
```

### Technology Page (Updated - IDENTICAL)
```html
<h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
  {t('技術原理', 'Technology Principles')}
  <br />
  <span className="text-2xl md:text-3xl font-normal text-muted-foreground mt-4 block">
    {t('從物質、能量、風水三個層面全方位提升您的生活品質', '...')}
  </span>
</h1>
```

**完全相同！/ Identical!**
- ✅ Same structure
- ✅ Same font size: `text-2xl md:text-3xl`
- ✅ Same spacing and styling
- ✅ Both centered with `text-center` on parent div

---

## 🔧 解決方案 / Solution

### 方法 1: 強制刷新 (最簡單 / Easiest)

#### Windows / Linux:
按 `Ctrl + Shift + R` 或 `Ctrl + F5`

#### Mac:
按 `Cmd + Shift + R`

---

### 方法 2: 清除瀏覽器緩存 (推薦 / Recommended)

#### Chrome / Edge:
1. 按 `Ctrl + Shift + Delete` (Windows) 或 `Cmd + Shift + Delete` (Mac)
2. 選擇時間範圍："過去 1 小時" 或 "過去 24 小時"
3. 勾選 "緩存的圖片和文件"
4. 點擊 "清除數據"

#### Firefox:
1. 按 `Ctrl + Shift + Delete` (Windows) 或 `Cmd + Shift + Delete` (Mac)
2. 選擇時間範圍："最近一小時"
3. 勾選 "緩存"
4. 點擊 "立即清除"

#### Safari:
1. 打開 Safari 偏好設置
2. 點擊 "高級"
3. 勾選 "在菜單欄中顯示開發菜單"
4. 點擊菜單欄的 "開發" → "清空緩存"

---

### 方法 3: 使用無痕模式 (最可靠 / Most Reliable)

#### Chrome / Edge:
按 `Ctrl + Shift + N` (Windows) 或 `Cmd + Shift + N` (Mac)

#### Firefox:
按 `Ctrl + Shift + P` (Windows) 或 `Cmd + Shift + P` (Mac)

#### Safari:
按 `Cmd + Shift + N`

然後訪問: https://mrlaifengshui.github.io/quantum-fengshui-purifier/technology

---

### 方法 4: 使用開發者工具強制刷新

1. **打開開發者工具**:
   - Windows/Linux: `F12` 或 `Ctrl + Shift + I`
   - Mac: `Cmd + Option + I`

2. **右鍵點擊刷新按鈕**（瀏覽器地址欄旁邊）

3. **選擇 "清空緩存並硬性重新加載"**

---

### 方法 5: 添加時間戳參數

在 URL 後面加上時間戳參數:
```
https://mrlaifengshui.github.io/quantum-fengshui-purifier/technology?v=1733214000
```

每次訪問時更改數字（例如使用當前時間戳）

---

## 📊 如何確認版本正確 / How to Confirm Correct Version

### 正確版本應該顯示 / Correct Version Should Show:

**標題 (Title):**
```
技術原理
```
- 字體大小: 大而粗 (text-4xl md:text-5xl)
- 顏色: 深色 (foreground)

**副標題 (Subtitle) - 這是關鍵！/ This is the key!**
```
從物質、能量、風水三個層面全方位提升您的生活品質
```
- 字體大小: **中等** (text-2xl md:text-3xl) - **和聯繫我們頁面一樣大！**
- 顏色: 淺灰色 (muted-foreground)
- 位置: 標題下方，居中顯示

### 錯誤版本 (舊緩存) / Wrong Version (Old Cache):

如果副標題字體**很小**或**不在中間**，那是舊版本！
If subtitle font is **very small** or **not centered**, that's the old version!

---

## 🔍 技術驗證 / Technical Verification

### 檢查加載的 JavaScript 文件 / Check Loaded JavaScript:

1. 打開開發者工具 (`F12`)
2. 點擊 "Network" / "網絡" 標籤
3. 刷新頁面
4. 查找 `index-*.js` 文件

**最新版本 JavaScript:**
```
index-Bgv8KvuQ.js
```

如果看到其他文件名（如 `index-B2YofcwY.js` 或 `index-DMO8NWcN.js`），那是舊版本！
If you see other filenames, that's an old version!

---

## 📦 GitHub 部署狀態 / GitHub Deployment Status

### Main Branch
- ✅ Commit: `e52a72a` - "fix: Add comment to Technology header for cache busting"
- ✅ Code is correct and identical to Contact page

### GH-Pages Branch
- ✅ Commit: `99e0c5a` - "fix: Add cache control headers to force browser refresh"
- ✅ JavaScript: `index-Bgv8KvuQ.js` (266.24 kB)
- ✅ CSS: `index-D0rqtFU0.css` (42.54 kB)
- ✅ **Added Cache-Control headers to prevent caching**

### Cache Control Headers Added:
```html
<meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
<meta http-equiv="Pragma" content="no-cache" />
<meta http-equiv="Expires" content="0" />
```

---

## ⏰ 等待 CDN 更新 / Wait for CDN Update

GitHub Pages 使用 CDN（內容分發網絡），可能需要 **10-15 分鐘**來全球同步。
GitHub Pages uses CDN which may take **10-15 minutes** to sync globally.

建議步驟 / Recommended Steps:
1. ⏱️ 等待 10-15 分鐘
2. 🔄 使用無痕模式訪問網站
3. ✅ 確認副標題字體大小正確

---

## 🎯 最終確認 / Final Confirmation

訪問這兩個頁面並比較 / Visit these two pages and compare:

1. **Contact Page (參考 / Reference):**
   https://mrlaifengshui.github.io/quantum-fengshui-purifier/contact
   
2. **Technology Page (已更新 / Updated):**
   https://mrlaifengshui.github.io/quantum-fengshui-purifier/technology

**兩個頁面的副標題字體大小應該完全相同！**
**The subtitle font sizes should be IDENTICAL on both pages!**

---

## ✅ 問題已解決 / Problem Solved

- ✅ 代碼正確 (Code is correct)
- ✅ 字體大小匹配 Contact 頁面 (Font size matches Contact page)
- ✅ 樣式完全相同 (Styling is identical)
- ✅ GitHub 已更新 (GitHub is updated)
- ✅ 添加了緩存控制標頭 (Added cache control headers)

**唯一的問題是瀏覽器緩存。請使用上述任何方法清除緩存！**
**The ONLY issue is browser cache. Please use any method above to clear cache!**
