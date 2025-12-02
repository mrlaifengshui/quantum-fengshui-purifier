# GitHub 上傳說明 - 量子風水空氣淨化服務網站

## 📋 上傳步驟

### 步驟 1：下載所有文件

所有項目文件已準備好。請確保您擁有以下目錄結構：

```
quantum-fengshui-purifier/
├── client/                          # 前端代碼
│   ├── public/                      # 靜態資源
│   ├── src/
│   │   ├── components/              # React 組件
│   │   ├── pages/                   # 頁面組件
│   │   ├── contexts/                # React Context
│   │   ├── hooks/                   # 自定義 Hooks
│   │   ├── lib/                     # 工具函數
│   │   ├── App.tsx                  # 主應用
│   │   ├── main.tsx                 # 入口文件
│   │   ├── index.css                # 全局樣式
│   │   └── const.ts                 # 常量定義
│   └── index.html                   # HTML 模板
├── server/                          # 服務器代碼（佔位符）
├── shared/                          # 共享代碼（佔位符）
├── package.json                     # 項目依賴
├── pnpm-lock.yaml                   # 依賴鎖定文件
├── tsconfig.json                    # TypeScript 配置
├── vite.config.ts                   # Vite 配置
├── tailwind.config.ts               # Tailwind 配置
├── postcss.config.js                # PostCSS 配置
├── .gitignore                       # Git 忽略文件
├── .prettierrc                      # Prettier 配置
├── .prettierignore                  # Prettier 忽略文件
├── README.md                        # 項目說明
├── GITHUB_UPLOAD_INSTRUCTIONS.md    # 本文件
├── MARKET_SEO_REPORT.md             # 市場 SEO 報告
├── SITEMAP.md                       # 網站地圖
├── WEBSITE_DESIGN_COMPLETE.md       # 完整設計文檔
├── WEBSITE_OUTLOOK.md               # 網站外觀設計
├── WEBSITE_STRUCTURE.md             # 網站結構
└── WEBSITE_STRUCTURE_REVISED.md     # 修訂版網站結構
```

### 步驟 2：在 GitHub 上創建倉庫

1. 訪問 https://github.com/mrlaifengshui/quantum-fengshui-purifier
2. 確認倉庫已創建

### 步驟 3：使用 GitHub Web 界面上傳

#### 方法 A：直接上傳文件（簡單）

1. 進入倉庫主頁
2. 點擊 "Add file" → "Upload files"
3. 拖拽或選擇所有文件
4. 填寫提交信息：`Initial commit: Quantum Feng Shui Air Purification Service Website`
5. 點擊 "Commit changes"

#### 方法 B：使用 Git 命令行（推薦）

```bash
# 1. 克隆倉庫到本地
git clone https://github.com/mrlaifengshui/quantum-fengshui-purifier.git
cd quantum-fengshui-purifier

# 2. 複製所有項目文件到倉庫目錄
# （將 /home/ubuntu/quantum_fengshui_website 中的所有文件複製到此目錄）

# 3. 添加所有文件
git add .

# 4. 提交
git commit -m "Initial commit: Quantum Feng Shui Air Purification Service Website with YouTube videos and multi-brand support"

# 5. 推送到 GitHub
git push -u origin main
```

### 步驟 4：配置 GitHub Pages

1. 進入倉庫設置 → Settings
2. 左側菜單選擇 "Pages"
3. 在 "Build and deployment" 部分：
   - Source: 選擇 "Deploy from a branch"
   - Branch: 選擇 "main"，文件夾選擇 "/ (root)"
4. 點擊 "Save"

網站將在以下地址上線：
```
https://mrlaifengshui.github.io/quantum-fengshui-purifier
```

### 步驟 5：驗證部署

1. 等待 2-5 分鐘
2. 訪問 https://mrlaifengshui.github.io/quantum-fengshui-purifier
3. 確認網站已正確顯示

## 📦 文件清單

### 核心文件

| 文件 | 說明 |
|------|------|
| `package.json` | 項目依賴和腳本 |
| `tsconfig.json` | TypeScript 配置 |
| `vite.config.ts` | Vite 構建配置 |
| `tailwind.config.ts` | Tailwind CSS 配置 |
| `postcss.config.js` | PostCSS 配置 |

### 源代碼

| 目錄 | 說明 |
|------|------|
| `client/src/pages/` | 頁面組件（Home、Services、Cases、Contact 等） |
| `client/src/components/` | 可重用組件（Navigation、Footer 等） |
| `client/src/contexts/` | React Context（主題、語言等） |
| `client/src/hooks/` | 自定義 Hooks |
| `client/src/lib/` | 工具函數 |

### 文檔

| 文件 | 說明 |
|------|------|
| `README.md` | 項目說明 |
| `MARKET_SEO_REPORT.md` | 市場研究和 SEO 優化報告 |
| `SITEMAP.md` | 完整的網站地圖 |
| `WEBSITE_DESIGN_COMPLETE.md` | 設計文檔 |
| `WEBSITE_STRUCTURE_REVISED.md` | 修訂版網站結構 |

## 🚀 部署後的步驟

### 1. 優化 GitHub Pages 設置

```bash
# 在倉庫根目錄創建 _config.yml
echo "theme: jekyll-theme-minimal" > _config.yml
git add _config.yml
git commit -m "Add Jekyll configuration"
git push
```

### 2. 添加自定義域名（可選）

1. 在倉庫設置 → Pages 中
2. 在 "Custom domain" 輸入您的域名（例如：quantum-fengshui.com）
3. 在您的域名提供商設置 DNS 記錄

### 3. 啟用 HTTPS

GitHub Pages 自動提供 HTTPS。確保在設置中勾選 "Enforce HTTPS"。

## 📝 常見問題

### Q1：如何更新網站內容？

```bash
git add .
git commit -m "Update content"
git push
```

### Q2：GitHub Pages 需要多長時間才能部署？

通常 2-5 分鐘，有時可能需要 10 分鐘。

### Q3：如何查看部署狀態？

1. 進入倉庫
2. 點擊 "Actions" 標籤
3. 查看最新的部署工作流

### Q4：如何回滾到之前的版本？

```bash
git revert <commit-hash>
git push
```

### Q5：如何刪除不需要的文件？

```bash
git rm <file-path>
git commit -m "Remove unnecessary files"
git push
```

## 🔒 安全建議

1. **不要提交敏感信息**
   - API 密鑰
   - 數據庫密碼
   - 個人信息

2. **使用 .gitignore**
   - 排除 `node_modules/`
   - 排除 `.env` 文件
   - 排除 IDE 配置

3. **定期備份**
   - 在本地保留一份副本
   - 定期提交重要更改

## 📊 項目統計

- **頁面數量**：6 個（首頁、品牌、服務、案例、聯繫、404）
- **組件數量**：15+ 個
- **YouTube 視頻**：5 個
- **語言支持**：中文、英文
- **響應式設計**：是
- **TypeScript**：是
- **Tailwind CSS**：是

## 🎯 下一步

1. ✅ 上傳所有文件到 GitHub
2. ✅ 配置 GitHub Pages
3. ✅ 驗證網站部署
4. 📊 設置 Google Analytics
5. 🔍 優化 SEO
6. 📱 測試移動設備
7. 🚀 推廣網站

## 📞 支持

如有任何問題，請參考：
- GitHub 文檔：https://docs.github.com
- GitHub Pages 指南：https://pages.github.com
- Vite 文檔：https://vitejs.dev

---

**祝賀！您的量子風水空氣淨化服務網站即將上線！** 🎉
