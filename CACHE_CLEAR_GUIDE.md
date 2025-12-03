# 網站緩存清除指南 / Website Cache Clearing Guide

## ✅ 確認：最新版本已部署！

經過驗證，所有新內容已成功部署到線上：
- ✅ "量子風水分享" 已在 JS 文件中
- ✅ "HK$8,800" 價格區域已刪除
- ✅ "準備好開始您的量子風水之旅" CTA 已刪除
- ✅ index.html 正確引用最新資源 (index-B1kJYCbi.js)

## 🔧 如何查看最新版本

您看到舊版本是因為**瀏覽器緩存或 Service Worker**。請按以下步驟操作：

### 方法 1: 硬刷新（最簡單）
**Windows/Linux:**
- Chrome/Edge: `Ctrl + Shift + R` 或 `Ctrl + F5`
- Firefox: `Ctrl + Shift + R`

**Mac:**
- Chrome/Safari: `Cmd + Shift + R`
- Firefox: `Cmd + Shift + R`

### 方法 2: 清除瀏覽器緩存（推薦）

**Chrome/Edge:**
1. 按 `Ctrl + Shift + Delete` (Windows) 或 `Cmd + Shift + Delete` (Mac)
2. 選擇 "緩存的圖片和文件"
3. 時間範圍選擇 "過去 1 小時" 或 "全部"
4. 點擊 "清除數據"
5. 刷新頁面

**Firefox:**
1. 按 `Ctrl + Shift + Delete`
2. 選擇 "緩存"
3. 時間範圍選擇 "全部"
4. 點擊 "立即清除"
5. 刷新頁面

**Safari:**
1. 按 `Cmd + Option + E` 清空緩存
2. 或者：Safari > 清除歷史記錄 > 全部歷史記錄
3. 刷新頁面

### 方法 3: 無痕/隱私模式（最快驗證）
1. **Chrome**: `Ctrl + Shift + N` (Windows) 或 `Cmd + Shift + N` (Mac)
2. **Firefox**: `Ctrl + Shift + P` (Windows) 或 `Cmd + Shift + P` (Mac)
3. **Safari**: `Cmd + Shift + N`
4. 在無痕模式訪問: https://mrlaifengshui.github.io/quantum-fengshui-purifier/

### 方法 4: 清除 Service Worker（開發者選項）
1. 按 `F12` 打開開發者工具
2. 前往 "Application" 標籤（應用程序）
3. 左側菜單選擇 "Service Workers"
4. 點擊 "Unregister" 註銷所有 Service Worker
5. 關閉開發者工具
6. 硬刷新頁面 (`Ctrl + Shift + R`)

## 📋 驗證新內容清單

刷新後，您應該看到：

✅ **Services 頁面**: HK$8,800 價格區域已完全消失
✅ **Services & Cases 頁面**: 顯示專業雙語 banner 圖片
✅ **Technology 頁面**: 副標題有換行且字體更大
✅ **Home 頁面**: 
   - "專業技術解說" 改為 "量子風水分享"
   - 副標題改為 "了解量子風水"
   - 頁面底部的 CTA "準備好開始您的量子風水之旅" 已刪除

## ⏰ 如果還是看到舊版本

**GitHub Pages CDN 緩存時間**: 通常 5-15 分鐘

如果您在清除瀏覽器緩存後仍然看到舊版本，請：
1. 等待 10-15 分鐘
2. 再次清除瀏覽器緩存
3. 使用無痕模式訪問

## 🔍 技術驗證

部署時間: 2025-12-03 06:53 GMT
最新 JS 文件: index-B1kJYCbi.js (265.61 kB)
最新 CSS 文件: index-s4KkcQmW.css (42.64 kB)

您可以通過瀏覽器開發者工具 (F12 > Network) 查看加載的資源文件名來確認是否為最新版本。
