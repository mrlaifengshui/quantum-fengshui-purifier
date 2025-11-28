# 量子風水空氣淨化服務網站 - 完整結構文檔

## 📋 目錄

1. [網站概述](#網站概述)
2. [技術棧](#技術棧)
3. [目錄結構](#目錄結構)
4. [頁面結構](#頁面結構)
5. [組件架構](#組件架構)
6. [路由配置](#路由配置)
7. [多語言支持](#多語言支持)
8. [設計系統](#設計系統)

---

## 網站概述

**項目名稱：** 量子風水空氣淨化服務網站

**目標受眾：** 重視家居空氣質素、健康、睡眠、情緒、工作及風水能量的客戶

**核心價值主張：** 物質清淨 × 能量調頻 × 豐盛顯化

**主要功能：**
- 服務介紹和推廣
- 案例分享和客戶見證
- 線上諮詢預約
- 多語言支持（中文/英文）

**網站類型：** 靜態網站（React 19 + Tailwind CSS 4 + Wouter 路由）

---

## 技術棧

| 層級 | 技術 | 版本 | 用途 |
|------|------|------|------|
| 前端框架 | React | 19 | UI 組件和狀態管理 |
| 樣式框架 | Tailwind CSS | 4 | 響應式設計和主題 |
| 路由管理 | Wouter | 最新 | 客戶端路由 |
| UI 組件庫 | shadcn/ui | 最新 | 預構建的 UI 組件 |
| 圖標庫 | lucide-react | 最新 | 現代化圖標 |
| 字體 | Google Fonts | - | Poppins、Inter、Noto Sans TC |
| 構建工具 | Vite | 最新 | 快速開發和構建 |
| 部署平台 | Vercel | - | 靜態網站託管 |

---

## 目錄結構

```
quantum_fengshui_website/
├── client/
│   ├── public/                    # 靜態資源
│   │   └── [images, icons, etc.]
│   ├── src/
│   │   ├── components/            # 可重用組件
│   │   │   ├── Navigation.tsx      # 全局導航組件
│   │   │   ├── Footer.tsx          # 全局頁腳組件
│   │   │   ├── ErrorBoundary.tsx   # 錯誤邊界
│   │   │   └── ui/                 # shadcn/ui 組件
│   │   │       ├── button.tsx
│   │   │       ├── card.tsx
│   │   │       └── [其他 UI 組件]
│   │   ├── pages/                 # 頁面級組件
│   │   │   ├── Home.tsx           # 首頁
│   │   │   ├── Services.tsx        # 服務介紹頁面
│   │   │   ├── Cases.tsx           # 案例分享頁面
│   │   │   ├── Contact.tsx         # 聯繫我們頁面
│   │   │   └── NotFound.tsx        # 404 頁面
│   │   ├── contexts/              # React Context
│   │   │   └── ThemeContext.tsx    # 主題上下文
│   │   ├── hooks/                 # 自定義 Hooks
│   │   ├── lib/                   # 工具函數
│   │   ├── const.ts               # 常量定義
│   │   ├── App.tsx                # 主應用組件
│   │   ├── main.tsx               # React 入口
│   │   └── index.css              # 全局樣式
│   ├── index.html                 # HTML 模板
│   └── package.json
├── server/                        # 服務器佔位符
├── shared/                        # 共享代碼佔位符
├── todo.md                        # 項目待辦事項
├── WEBSITE_STRUCTURE.md           # 本文檔
└── package.json

```

---

## 頁面結構

### 1. 首頁 (/)

**路由：** `/`

**文件：** `client/src/pages/Home.tsx`

**主要區域：**

| 區域 | 組件 | 內容 |
|------|------|------|
| 導航欄 | Navigation | 品牌標誌、導航菜單、語言切換 |
| 英雄區域 | Hero Section | 大標題、副標題、行動呼籲按鈕 |
| 三合一服務 | Services Grid | 三個服務模塊（空氣淨化、能量調頻、風水擺位） |
| 客戶見證 | Testimonials | 兩個客戶見證卡片 |
| 核心優勢 | Benefits Grid | 四個優勢（科學驗證、獨家技術、傳統智慧、立竿見影） |
| 行動呼籲 | CTA Section | 最終轉化區域 |
| 頁腳 | Footer | 快速導航、聯繫方式、品牌信息 |

**多語言支持：** ✅ 中文/英文

**響應式設計：** ✅ 移動優先

---

### 2. 服務介紹頁面 (/services)

**路由：** `/services`

**文件：** `client/src/pages/Services.tsx`

**主要區域：**

| 區域 | 組件 | 內容 |
|------|------|------|
| 頁面頭部 | Header | 頁面標題和描述 |
| 服務套餐 | Packages Grid | 三個套餐卡片（基礎、高級、VIP） |
| 服務流程 | Process Timeline | 五步服務流程 |
| 常見問題 | FAQ Section | 四個常見問題及答案 |
| 行動呼籲 | CTA Section | 預約諮詢按鈕 |

**套餐詳情：**

- **基礎套餐** (HK$5,000-8,000)
  - 一台 Amway Sky 空氣淨化機
  - 一次量子調頻（1-2 小時）
  - 基礎風水評估
  - 1 個月跟進服務

- **高級套餐** (HK$15,000-25,000) ⭐ 推薦
  - 2-3 台 Amway Sky 空氣淨化機
  - 深度量子調頻（3-4 小時）
  - 詳細風水分析
  - 3 個月跟進服務
  - 員工健康報告

- **VIP 套餐** (HK$50,000+)
  - 全面空氣淨化系統設計
  - 完整量子調頻方案（全天候）
  - 專業風水設計和裝修指導
  - 6 個月跟進服務
  - 定期能量檢測和調整
  - 專屬顧問支持

**多語言支持：** ✅ 中文/英文

---

### 3. 案例分享頁面 (/cases)

**路由：** `/cases`

**文件：** `client/src/pages/Cases.tsx`

**主要區域：**

| 區域 | 組件 | 內容 |
|------|------|------|
| 頁面頭部 | Header | 頁面標題和描述 |
| 案例列表 | Cases Grid | 兩個詳細案例 |
| 滿意度數據 | Stats Section | 客戶滿意度統計 |
| 行動呼籲 | CTA Section | 預約諮詢按鈕 |

**案例詳情：**

**案例 1：張太太 - 健康與睡眠改善**
- 背景：企業高管，42 歲，長期失眠和焦慮
- 見證：「這不只是空氣變好，是整個人生磁場都轉變了！」
- 時間軸：
  - 第 1 週：睡眠質量改善
  - 第 1 個月：精神狀態恢復
  - 第 3 個月：運勢轉變
- 數據對比：
  - 睡眠時間：4-5 小時 → 7-8 小時
  - 工作效率：低下 → 提升 30%+
  - 安眠藥使用：每晚 → 完全停用
- 滿意度：5/5 星

**案例 2：陳先生 - 事業與財富顯化**
- 背景：設計公司老闆，38 歲，業績停滯
- 見證：「投資報酬率遠超預期！」
- 時間軸：
  - 第 1 個月：氛圍改善
  - 第 2 個月：客戶增長
  - 第 3 個月：業績翻紅
- 數據對比：
  - 新客戶：0 → 2 個大客戶
  - 公司收入：停滯 → 增加 40%
  - 員工效率：低迷 → 提升 25%+
- 滿意度：5/5 星

**滿意度統計：**
- 客戶滿意度：95%+
- 見效時間：3 週至 3 個月
- 重複購買率：60%+
- 推薦率：85%+

**多語言支持：** ✅ 中文/英文

---

### 4. 聯繫我們頁面 (/contact)

**路由：** `/contact`

**文件：** `client/src/pages/Contact.tsx`

**主要區域：**

| 區域 | 組件 | 內容 |
|------|------|------|
| 頁面頭部 | Header | 頁面標題和描述 |
| 聯繫表單 | Contact Form | 姓名、郵箱、電話、訊息輸入 |
| 聯繫方式 | Contact Info | 電話、郵箱、網站、WhatsApp |
| 提示信息 | Info Box | 免費諮詢提示 |
| FAQ 連結 | CTA Section | 服務詳情連結 |

**聯繫表單字段：**
- 姓名（必填）
- 郵箱（必填）
- 電話（可選）
- 訊息（必填）

**聯繫方式：**
- 📞 電話：[黎Sir 聯繫電話]
- 📧 Email：[Email 地址]
- 🌐 網站：mrlaifengshui.com
- 💬 WhatsApp：[WhatsApp 號碼]

**多語言支持：** ✅ 中文/英文

---

### 5. 404 頁面 (/404)

**路由：** `/404`

**文件：** `client/src/pages/NotFound.tsx`

**功能：** 顯示 404 錯誤和返回首頁連結

---

## 組件架構

### 全局組件

#### Navigation.tsx
**功能：** 全局導航欄

**Props：**
```typescript
interface NavigationProps {
  language: 'zh' | 'en';
  onLanguageChange: (lang: 'zh' | 'en') => void;
}
```

**特性：**
- 固定在頂部（z-50）
- 響應式設計（移動端漢堡菜單）
- 語言切換按鈕
- 品牌標誌

**導航項目：**
- 首頁 (/)
- 服務介紹 (/services)
- 案例分享 (/cases)
- 聯繫我們 (/contact)

---

#### Footer.tsx
**功能：** 全局頁腳

**Props：**
```typescript
interface FooterProps {
  language: 'zh' | 'en';
}
```

**特性：**
- 三列佈局（快速導航、聯繫方式、品牌信息）
- 響應式設計
- 圖標集成（lucide-react）

**內容：**
- 快速導航連結
- 聯繫信息（電話、郵箱、網站）
- 品牌描述
- 版權信息

---

### 頁面組件

#### Home.tsx
**功能：** 首頁

**Props：**
```typescript
interface HomeProps {
  language: 'zh' | 'en';
}
```

**特性：**
- 六個主要區域
- 響應式卡片佈局
- 漸變背景效果

---

#### Services.tsx
**功能：** 服務介紹頁面

**Props：**
```typescript
interface ServicesProps {
  language: 'zh' | 'en';
}
```

**特性：**
- 三列套餐卡片（高級套餐突出顯示）
- 時間軸流程展示
- 常見問題手風琴

---

#### Cases.tsx
**功能：** 案例分享頁面

**Props：**
```typescript
interface CasesProps {
  language: 'zh' | 'en';
}
```

**特性：**
- 交替佈局（案例信息和數據對比）
- 時間軸組件
- 數據可視化卡片

---

#### Contact.tsx
**功能：** 聯繫我們頁面

**Props：**
```typescript
interface ContactProps {
  language: 'zh' | 'en';
}
```

**特性：**
- 聯繫表單驗證
- 提交成功提示
- 多渠道聯繫方式展示

---

## 路由配置

**路由引擎：** Wouter

**路由表：**

| 路徑 | 組件 | 描述 |
|------|------|------|
| `/` | Home | 首頁 |
| `/services` | Services | 服務介紹 |
| `/cases` | Cases | 案例分享 |
| `/contact` | Contact | 聯繫我們 |
| `/404` | NotFound | 404 頁面 |
| `*` | NotFound | 未匹配路由 |

**路由配置文件：** `client/src/App.tsx`

```typescript
function Router({ language }: { language: 'zh' | 'en' }) {
  return (
    <Switch>
      <Route path={"/"} component={() => <Home language={language} />} />
      <Route path={"/services"} component={() => <Services language={language} />} />
      <Route path={"/cases"} component={() => <Cases language={language} />} />
      <Route path={"/contact"} component={() => <Contact language={language} />} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}
```

---

## 多語言支持

**支持語言：**
- 🇭🇰 繁體中文 (zh)
- 🇬🇧 英文 (en)

**實現方式：**
- React State 管理語言狀態
- 每個頁面組件接收 `language` prop
- 內容對象根據語言切換
- 語言切換按鈕在導航欄

**語言切換邏輯：**

```typescript
// App.tsx
const [language, setLanguage] = useState<'zh' | 'en'>('zh');

// 傳遞給所有頁面和組件
<Navigation language={language} onLanguageChange={setLanguage} />
<Route path={"/"} component={() => <Home language={language} />} />
```

**內容結構示例：**

```typescript
const content = language === 'zh'
  ? {
      title: '量子風水空氣淨化服務',
      description: '物質清淨 × 能量調頻 × 豐盛顯化',
      // ... 其他中文內容
    }
  : {
      title: 'Quantum Feng Shui Air Purification Service',
      description: 'Physical Cleansing × Energy Tuning × Abundance Manifestation',
      // ... 其他英文內容
    };
```

---

## 設計系統

### 色彩方案

**主題色：** 深藍色 + 金色 + 綠色（科技感）

| 色彩 | OKLCH 值 | 用途 |
|------|---------|------|
| 背景色 | oklch(0.08 0.01 262) | 頁面背景 |
| 前景色 | oklch(0.92 0.01 65) | 文本顏色 |
| 主色 | oklch(0.54 0.28 262) | 按鈕、標題 |
| 次色 | oklch(0.78 0.32 65) | 強調、高亮 |
| 輔助色 | oklch(0.62 0.22 142) | 次要強調 |
| 邊框色 | oklch(0.2 0.02 262) | 邊框、分割線 |

### 字體

| 用途 | 字體 | 權重 |
|------|------|------|
| 標題 | Poppins | 700 |
| 正文 | Inter | 400, 500, 600 |
| 中文 | Noto Sans TC | 400, 500, 600, 700 |

### 間距系統

基於 Tailwind CSS 的間距系統：
- `px-4` / `py-4` - 基礎間距
- `gap-6` / `gap-8` - 組件間距
- `mb-4` / `mt-4` - 邊距

### 響應式斷點

| 斷點 | 寬度 | 用途 |
|------|------|------|
| 移動 | < 640px | 手機 |
| 平板 | 640px - 1024px | 平板 |
| 桌面 | > 1024px | 桌面 |

**Tailwind 斷點前綴：**
- `sm:` (640px)
- `md:` (768px)
- `lg:` (1024px)

### 組件樣式

**按鈕：**
- 主按鈕：`bg-secondary hover:bg-secondary/90`
- 次按鈕：`bg-muted hover:bg-accent`

**卡片：**
- 背景：`bg-card`
- 邊框：`border border-border`
- 懸停效果：`hover:border-secondary transition-colors`

**文本層級：**
- 大標題：`text-4xl md:text-5xl font-bold text-secondary`
- 小標題：`text-xl font-bold text-foreground`
- 正文：`text-foreground`
- 輔助文本：`text-muted-foreground`

---

## 文件清單

### 核心文件

| 文件 | 描述 |
|------|------|
| `App.tsx` | 主應用組件，路由配置 |
| `main.tsx` | React 入口點 |
| `index.css` | 全局樣式和主題變數 |
| `const.ts` | 常量定義 |

### 組件文件

| 文件 | 描述 |
|------|------|
| `components/Navigation.tsx` | 全局導航 |
| `components/Footer.tsx` | 全局頁腳 |
| `components/ErrorBoundary.tsx` | 錯誤邊界 |
| `components/ui/*` | shadcn/ui 組件 |

### 頁面文件

| 文件 | 描述 |
|------|------|
| `pages/Home.tsx` | 首頁 |
| `pages/Services.tsx` | 服務介紹 |
| `pages/Cases.tsx` | 案例分享 |
| `pages/Contact.tsx` | 聯繫我們 |
| `pages/NotFound.tsx` | 404 頁面 |

### 配置文件

| 文件 | 描述 |
|------|------|
| `index.html` | HTML 模板 |
| `package.json` | 項目依賴 |
| `vite.config.ts` | Vite 配置 |
| `tsconfig.json` | TypeScript 配置 |
| `tailwind.config.ts` | Tailwind 配置 |

---

## 部署信息

**部署平台：** Vercel

**部署命令：**
```bash
pnpm build
```

**環境變數：** 無（靜態網站）

**構建輸出：** `dist/` 目錄

**預期加載時間：** < 2 秒

---

## 性能指標

| 指標 | 目標 | 狀態 |
|------|------|------|
| 首屏加載時間 | < 2s | ✅ |
| 頁面大小 | < 500KB | ✅ |
| Lighthouse 分數 | > 90 | ⏳ |
| 移動友好 | 是 | ✅ |

---

## 未來擴展計劃

### 短期（1-3 個月）

- [ ] 添加高質量圖片資產
- [ ] SEO 優化（Meta 標籤、結構化數據）
- [ ] Google Analytics 集成
- [ ] 表單後端集成（EmailJS/Formspree）

### 中期（3-6 個月）

- [ ] 部落格功能（文章發佈）
- [ ] 線上預約系統
- [ ] 客戶評論系統
- [ ] 支付集成（Stripe）

### 長期（6-12 個月）

- [ ] 用戶登錄和會員系統
- [ ] 線上課程功能
- [ ] 社區論壇
- [ ] 移動應用

---

## 維護檢查清單

**定期維護任務：**

- [ ] 每月檢查網站性能
- [ ] 每季度更新內容
- [ ] 每半年進行 SEO 審計
- [ ] 監控用戶反饋和轉化率
- [ ] 定期更新依賴包

---

## 聯繫和支持

**項目管理：** GitHub / Vercel Dashboard

**技術支持：** 開發團隊

**內容更新：** 黎Sir 或指定人員

---

**文檔版本：** 1.0

**最後更新：** 2025-11-25

**下一次審查：** 2025-12-25
