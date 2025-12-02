# 量子風水空氣淨化服務網站 | Quantum Feng Shui Air Purification Website

一個現代化的量子風水空氣淨化服務網站，結合頂級空氣淨化科技與量子調頻技術，支持多個優質品牌。

A modern quantum feng shui air purification service website combining premium air purification technology with quantum frequency tuning, supporting multiple premium brands.

## 🌟 核心特點 | Core Features

- ✅ **多品牌支持** - Dyson、Philips、Sharp、LG、小米、Amway Sky 等多個優質品牌
- ✅ **6個完整頁面** - 首頁、品牌、服務、案例、聯繫、404
- ✅ **三合一服務** - 空氣淨化 × 量子調頻 × 風水擺位
- ✅ **多語言支持** - 繁體中文 / English
- ✅ **響應式設計** - 完全適配桌面、平板、手機
- ✅ **現代科技感** - 深藍色 + 金色 + 綠色設計系統
- ✅ **高性能** - React 19 + Vite + TypeScript + Tailwind CSS

## 🚀 快速開始 | Quick Start

### 訪問網站 | Visit Website

**🌐 線上演示 | Live Demo:** 

### https://mrlaifengshui.github.io/quantum-fengshui-purifier/

**GitHub Repository | GitHub 倉庫:**
https://github.com/mrlaifengshui/quantum-fengshui-purifier

**本地運行 | Local Development:**
http://localhost:3000

### 本地開發 | Local Development

```bash
# 進入客戶端目錄
cd client

# 安裝依賴
npm install

# 啟動開發服務器
npm run dev

# 訪問 http://localhost:3001
```

### 生產構建 | Production Build

```bash
# 構建生產版本
cd client
npm run build

# 預覽構建結果
npm run preview
```

## 📁 項目結構 | Project Structure

```
webapp/
├── client/                      # 前端應用
│   ├── public/                  # 靜態資源
│   │   └── images/              # 圖片資源
│   │       ├── brands/          # 品牌標誌
│   │       ├── products/        # 產品圖片
│   │       ├── cases/           # 案例圖片
│   │       └── icons/           # 圖標
│   ├── src/
│   │   ├── components/          # 可重用組件
│   │   │   ├── Navigation.tsx   # 導航欄
│   │   │   ├── Footer.tsx       # 頁腳
│   │   │   └── BrandCard.tsx    # 品牌卡片
│   │   ├── pages/               # 頁面組件
│   │   │   ├── Home.tsx         # 首頁
│   │   │   ├── Brands.tsx       # 品牌介紹
│   │   │   ├── Services.tsx     # 服務介紹
│   │   │   ├── Cases.tsx        # 案例見證
│   │   │   ├── Contact.tsx      # 聯繫我們
│   │   │   └── NotFound.tsx     # 404頁面
│   │   ├── contexts/            # React Context
│   │   │   └── LanguageContext.tsx  # 語言上下文
│   │   ├── lib/                 # 工具函數
│   │   │   ├── brands.ts        # 品牌數據
│   │   │   └── utils.ts         # 工具函數
│   │   ├── const.ts             # 常量定義
│   │   ├── App.tsx              # 主應用
│   │   ├── main.tsx             # 入口文件
│   │   └── index.css            # 全局樣式
│   ├── index.html               # HTML模板
│   ├── package.json             # 依賴配置
│   ├── tsconfig.json            # TypeScript配置
│   ├── vite.config.ts           # Vite配置
│   ├── tailwind.config.js       # Tailwind配置
│   └── postcss.config.js        # PostCSS配置
└── README.md                    # 本文檔
```

## 🎨 設計系統 | Design System

### 色彩方案 | Color Scheme

- **主色調 (Primary)**: 深藍色 `oklch(0.54 0.28 262)` - 信任、專業
- **次要色 (Secondary)**: 綠色 `oklch(0.62 0.22 142)` - 生命、活力
- **強調色 (Accent)**: 金色 `oklch(0.78 0.32 65)` - 豐盛、高端
- **背景色 (Background)**: 深色 `oklch(0.08 0.01 262)`
- **前景色 (Foreground)**: 淺色 `oklch(0.92 0.01 65)`

### 品牌色彩 | Brand Colors

- **Dyson**: 深灰 + 藍色
- **Philips**: 紅色 + 白色
- **Sharp**: 白色 + 黑色
- **LG**: 深紅 + 白色
- **小米**: 橙色 + 白色
- **Amway Sky**: 藍色 + 金色

## 📄 頁面說明 | Pages Description

### 1. 首頁 (Home)
- 英雄區域 - 核心價值主張
- 品牌展示 - 6個支持的品牌
- 三合一服務 - 空氣淨化、量子調頻、風水擺位
- 客戶見證 - 真實案例分享
- 核心優勢 - 為什麼選擇我們
- 行動呼籲 - 立即預約

### 2. 品牌介紹 (Brands)
- 品牌篩選 - 按市場定位篩選
- 品牌卡片 - 詳細品牌信息
- 品牌對比表 - 多維度對比

### 3. 服務介紹 (Services)
- 服務詳情 - 三大核心服務
- 服務套餐 - 基礎、標準、尊貴
- 服務流程 - 5步完整流程

### 4. 案例見證 (Cases)
- 健康與睡眠案例
- 事業與財富案例
- 新屋入伙案例
- 數據統計展示

### 5. 聯繫我們 (Contact)
- 預約表單 - 在線提交
- 聯繫方式 - 電話、郵箱、地址
- 營業時間 - 詳細時間表

### 6. 404頁面 (NotFound)
- 友好的錯誤提示
- 返回首頁 / 上一頁

## 🌍 多語言支持 | Multi-Language Support

網站支持繁體中文和英文雙語切換：
- 點擊導航欄右上角的地球圖標切換語言
- 所有內容自動翻譯
- 語言設置保存在瀏覽器中

## 🛠️ 技術棧 | Tech Stack

- **前端框架**: React 19
- **構建工具**: Vite 6
- **類型檢查**: TypeScript 5.7
- **樣式方案**: Tailwind CSS 4
- **路由管理**: Wouter 3
- **圖標庫**: Lucide React
- **開發語言**: TypeScript + TSX

## 📱 響應式設計 | Responsive Design

- **桌面端 (Desktop)**: ≥1024px
- **平板端 (Tablet)**: 768px - 1023px
- **手機端 (Mobile)**: < 768px

所有組件和頁面均採用移動優先 (Mobile-First) 設計。

## 🎯 目標受眾 | Target Audience

- 30-55歲都市精英
- 重視健康、品質和運勢
- 追求科學與傳統結合
- 注重家居空氣質量
- 關注能量與風水

## 📊 核心數據 | Key Metrics

- **客戶滿意度**: 95%+
- **見效時間**: 3週至3個月
- **重複購買率**: 60%+
- **成功案例**: 100+

## 🔒 安全性 | Security

- 表單數據驗證
- HTTPS 加密傳輸
- 無敏感信息存儲
- 符合數據保護法規

## 📞 聯繫方式 | Contact Information

- **電話 (Phone)**: +852 1234 5678
- **郵箱 (Email)**: info@quantumfengshui.com
- **地址 (Address)**: 香港九龍尖沙咀 | Tsim Sha Tsui, Kowloon, Hong Kong
- **營業時間 (Hours)**: 週一至週六 9:00-18:00 | Mon-Sat 9:00-18:00

## 📝 版權信息 | Copyright

© 2024 量子風水空氣淨化服務. 版權所有 | All rights reserved.

---

## 🚀 部署說明 | Deployment Instructions

### Vercel 部署

```bash
# 安裝 Vercel CLI
npm i -g vercel

# 登錄
vercel login

# 部署
cd client
vercel --prod
```

### Netlify 部署

```bash
# 安裝 Netlify CLI
npm i -g netlify-cli

# 登錄
netlify login

# 構建並部署
cd client
npm run build
netlify deploy --prod --dir=dist
```

### Cloudflare Pages 部署

```bash
# 構建
cd client
npm run build

# 上傳 dist 目錄到 Cloudflare Pages
```

---

**網站已完成並正在運行！** 🎉

**Website is complete and running!** 🚀

**GitHub Pages URL**: https://mrlaifengshui.github.io/quantum-fengshui-purifier/

**GitHub Repository**: https://github.com/mrlaifengshui/quantum-fengshui-purifier

**本地開發 | Local Development**: http://localhost:3000
