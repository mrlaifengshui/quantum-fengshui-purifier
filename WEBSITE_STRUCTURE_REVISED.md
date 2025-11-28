# 量子風水空氣淨化服務網站 - 重新整理的結構文檔

## 執行摘要

本文檔是原始網站結構文檔的重新整理版本，**核心改變**：將 Amway Sky 從主要焦點重新定位為眾多優質空氣淨化機品牌中的一個選項。網站現在支持多個品牌，包括高端（Dyson）、中端（Philips）和大眾市場（Sharp、LG、小米）的產品，提供更靈活和包容的服務模式。

---

## 📋 目錄

1. [核心改變](#核心改變)
2. [網站概述](#網站概述)
3. [技術棧](#技術棧)
4. [目錄結構](#目錄結構)
5. [頁面結構](#頁面結構)
6. [多品牌支持](#多品牌支持)
7. [組件架構](#組件架構)
8. [路由配置](#路由配置)
9. [多語言支持](#多語言支持)
10. [設計系統](#設計系統)

---

## 核心改變

### 從單品牌到多品牌模式

**原始模式：**
- 主要推廣 Amway Sky
- Amway 直銷商為主要目標客戶
- 服務與 Amway 產品綁定

**新模式：**
- 支持多個優質品牌
- 客戶可選擇自己偏好的品牌
- 服務獨立於具體產品品牌
- 量子調頻和風水擺位是核心價值

### 品牌支持矩陣

| 品牌 | 市場定位 | 價格範圍 | 目標客戶 | 支持級別 |
|------|---------|---------|---------|---------|
| **Dyson** | 高端市場領導者 | HK$3,000-5,000 | 高端消費者、企業 | ⭐⭐⭐⭐⭐ |
| **Philips** | 中端市場 | HK$1,500-3,000 | 中產家庭、小企業 | ⭐⭐⭐⭐⭐ |
| **Sharp** | 大眾市場 | HK$800-2,000 | 一般家庭 | ⭐⭐⭐⭐ |
| **LG** | 大眾市場 | HK$1,000-2,500 | 一般家庭、小企業 | ⭐⭐⭐⭐ |
| **小米** | 大眾市場 | HK$500-1,500 | 年輕消費者、學生 | ⭐⭐⭐⭐ |
| **Amway Sky** | 直銷渠道 | HK$2,000-3,500 | Amway 直銷商、會員 | ⭐⭐⭐⭐ |
| **其他品牌** | 各種 | 各種 | 客戶現有設備 | ⭐⭐⭐ |

### 服務模式調整

**原始服務模式：**
```
客戶 → 購買 Amway Sky → 量子調頻 → 風水擺位
```

**新服務模式：**
```
客戶 → 選擇品牌（或使用現有設備）→ 量子調頻 → 風水擺位
         ↓
    (Dyson / Philips / Sharp / LG / 小米 / Amway / 其他)
```

---

## 網站概述

**項目名稱：** 量子風水空氣淨化服務網站

**核心使命：** 通過量子調頻和風水擺位，結合優質空氣淨化機，提升生活質量和運勢

**目標受眾：** 重視家居空氣質素、健康、睡眠、情緒、工作及風水能量的客戶（不限於特定品牌）

**核心價值主張：** 物質清淨 × 能量調頻 × 豐盛顯化（品牌無關）

**主要功能：**
- 多品牌空氣淨化機服務
- 量子調頻能量優化
- 風水擺位設計
- 客戶見證和案例分享
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
│   │   ├── images/
│   │   │   ├── brands/            # 品牌圖標和標誌
│   │   │   │   ├── dyson-logo.svg
│   │   │   │   ├── philips-logo.svg
│   │   │   │   ├── sharp-logo.svg
│   │   │   │   ├── lg-logo.svg
│   │   │   │   ├── xiaomi-logo.svg
│   │   │   │   └── amway-logo.svg
│   │   │   ├── products/          # 產品圖片
│   │   │   ├── cases/             # 案例圖片
│   │   │   └── icons/             # 其他圖標
│   │   └── [其他靜態資源]
│   ├── src/
│   │   ├── components/            # 可重用組件
│   │   │   ├── Navigation.tsx      # 全局導航組件
│   │   │   ├── Footer.tsx          # 全局頁腳組件
│   │   │   ├── BrandSelector.tsx   # 品牌選擇組件（新）
│   │   │   ├── BrandCard.tsx       # 品牌卡片組件（新）
│   │   │   ├── ErrorBoundary.tsx   # 錯誤邊界
│   │   │   └── ui/                 # shadcn/ui 組件
│   │   ├── pages/                 # 頁面級組件
│   │   │   ├── Home.tsx           # 首頁
│   │   │   ├── Services.tsx        # 服務介紹
│   │   │   ├── Brands.tsx          # 品牌介紹頁面（新）
│   │   │   ├── Cases.tsx           # 案例分享
│   │   │   ├── Contact.tsx         # 聯繫我們
│   │   │   └── NotFound.tsx        # 404 頁面
│   │   ├── contexts/              # React Context
│   │   │   ├── ThemeContext.tsx    # 主題上下文
│   │   │   └── BrandContext.tsx    # 品牌上下文（新）
│   │   ├── hooks/                 # 自定義 Hooks
│   │   │   └── useBrand.ts         # 品牌選擇 Hook（新）
│   │   ├── lib/                   # 工具函數
│   │   │   ├── brands.ts           # 品牌數據和配置（新）
│   │   │   └── utils.ts            # 其他工具
│   │   ├── const.ts               # 常量定義
│   │   ├── App.tsx                # 主應用組件
│   │   ├── main.tsx               # React 入口
│   │   └── index.css              # 全局樣式
│   ├── index.html                 # HTML 模板
│   └── package.json
├── server/                        # 服務器佔位符
├── shared/                        # 共享代碼佔位符
├── todo.md                        # 項目待辦事項
├── WEBSITE_STRUCTURE_REVISED.md   # 本文檔
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
| 品牌展示 | Brand Showcase | 支持的品牌標誌和簡介（新） |
| 三合一服務 | Services Grid | 三個服務模塊（空氣淨化、能量調頻、風水擺位） |
| 客戶見證 | Testimonials | 兩個客戶見證卡片 |
| 核心優勢 | Benefits Grid | 四個優勢（科學驗證、獨家技術、傳統智慧、立竿見影） |
| 行動呼籲 | CTA Section | 最終轉化區域 |
| 頁腳 | Footer | 快速導航、聯繫方式、品牌信息 |

**新增品牌展示區域內容：**

```html
<section className="py-16 bg-gradient-to-r from-blue-900 to-green-900">
  <h2 className="text-3xl font-bold text-center text-gold mb-12">
    支持的優質品牌
  </h2>
  
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
    <!-- Dyson -->
    <BrandCard 
      name="Dyson" 
      logo="/images/brands/dyson-logo.svg"
      category="高端市場領導者"
      price="HK$3,000-5,000"
    />
    
    <!-- Philips -->
    <BrandCard 
      name="Philips" 
      logo="/images/brands/philips-logo.svg"
      category="中端市場"
      price="HK$1,500-3,000"
    />
    
    <!-- Sharp -->
    <BrandCard 
      name="Sharp" 
      logo="/images/brands/sharp-logo.svg"
      category="大眾市場"
      price="HK$800-2,000"
    />
    
    <!-- LG -->
    <BrandCard 
      name="LG" 
      logo="/images/brands/lg-logo.svg"
      category="大眾市場"
      price="HK$1,000-2,500"
    />
    
    <!-- 小米 -->
    <BrandCard 
      name="小米" 
      logo="/images/brands/xiaomi-logo.svg"
      category="大眾市場"
      price="HK$500-1,500"
    />
    
    <!-- Amway -->
    <BrandCard 
      name="Amway Sky" 
      logo="/images/brands/amway-logo.svg"
      category="直銷渠道"
      price="HK$2,000-3,500"
    />
  </div>
  
  <p className="text-center text-muted-foreground mt-8">
    及其他優質品牌。無論您選擇哪個品牌，我們都提供完整的量子調頻和風水擺位服務。
  </p>
</section>
```

**多語言支持：** ✅ 中文/英文

**響應式設計：** ✅ 移動優先

---

### 2. 品牌介紹頁面 (/brands) - 新增

**路由：** `/brands`

**文件：** `client/src/pages/Brands.tsx`

**主要區域：**

| 區域 | 組件 | 內容 |
|------|------|------|
| 頁面頭部 | Header | 頁面標題和描述 |
| 品牌對比 | Brand Comparison | 六個品牌的詳細對比表 |
| 品牌詳情 | Brand Details | 每個品牌的詳細介紹 |
| 品牌選擇 | Brand Selector | 幫助客戶選擇適合的品牌 |
| 行動呼籲 | CTA Section | 預約諮詢按鈕 |

**品牌對比表：**

```
| 品牌 | 市場定位 | 價格 | HEPA 濾網 | 甲醛去除 | 負離子 | 噪音 | 能源效率 |
|------|---------|------|----------|---------|--------|------|---------|
| Dyson | 高端 | ⭐⭐⭐⭐⭐ | ✅ H13 | ✅ 優秀 | ✅ | 低 | ⭐⭐⭐⭐ |
| Philips | 中端 | ⭐⭐⭐⭐ | ✅ H13 | ✅ 良好 | ✅ | 中 | ⭐⭐⭐⭐ |
| Sharp | 大眾 | ⭐⭐⭐ | ✅ H12 | ✅ 良好 | ✅ | 中 | ⭐⭐⭐ |
| LG | 大眾 | ⭐⭐⭐ | ✅ H12 | ✅ 良好 | ✅ | 中 | ⭐⭐⭐ |
| 小米 | 大眾 | ⭐⭐ | ✅ H11 | ✅ 一般 | ✅ | 中 | ⭐⭐⭐⭐⭐ |
| Amway | 中端 | ⭐⭐⭐⭐ | ✅ H13 | ✅ 優秀 | ✅ | 低 | ⭐⭐⭐⭐ |
```

**品牌詳情頁面內容結構：**

```markdown
## Dyson - 高端市場領導者

### 品牌特色
- 創新設計和先進技術
- 強大的空氣淨化能力
- 高端消費者的首選

### 技術規格
- HEPA 濾網：H13 級
- 甲醛去除率：99.95%
- 負離子釋放：5000 萬個/cm³
- 噪音水平：62dB

### 適合客戶
- 高端消費者
- 企業和辦公室
- 對品質要求高的家庭

### 服務套餐
- 基礎套餐：HK$8,000-12,000
- 高級套餐：HK$20,000-30,000
- VIP 套餐：HK$60,000+

### 客戶見證
[相關案例]

---

## Philips - 中端市場

### 品牌特色
- 可靠的性能
- 合理的價格
- 廣泛的市場認可

### 技術規格
- HEPA 濾網：H13 級
- 甲醛去除率：95%
- 負離子釋放：3000 萬個/cm³
- 噪音水平：65dB

### 適合客戶
- 中產家庭
- 小型企業
- 預算有限但質量要求高的客戶

### 服務套餐
- 基礎套餐：HK$5,000-8,000
- 高級套餐：HK$15,000-25,000
- VIP 套餐：HK$50,000+

### 客戶見證
[相關案例]

---

[其他品牌類似結構...]
```

**多語言支持：** ✅ 中文/英文

---

### 3. 服務介紹頁面 (/services)

**路由：** `/services`

**文件：** `client/src/pages/Services.tsx`

**主要區域：**

| 區域 | 組件 | 內容 |
|------|------|------|
| 頁面頭部 | Header | 頁面標題和描述 |
| 品牌選擇 | Brand Selector | 選擇服務品牌（新） |
| 服務套餐 | Packages Grid | 三個套餐卡片（基礎、高級、VIP） |
| 服務流程 | Process Timeline | 五步服務流程 |
| 常見問題 | FAQ Section | 常見問題及答案 |
| 行動呼籲 | CTA Section | 預約諮詢按鈕 |

**服務套餐（品牌無關）：**

- **基礎套餐** (HK$5,000-12,000)
  - 一台優質空氣淨化機（客戶選擇品牌）
  - 一次量子調頻（1-2 小時）
  - 基礎風水評估
  - 1 個月跟進服務

- **高級套餐** (HK$15,000-30,000) ⭐ 推薦
  - 2-3 台空氣淨化機（客戶選擇品牌）
  - 深度量子調頻（3-4 小時）
  - 詳細風水分析
  - 3 個月跟進服務
  - 員工健康報告

- **VIP 套餐** (HK$50,000+)
  - 全面空氣淨化系統設計（多品牌組合）
  - 完整量子調頻方案（全天候）
  - 專業風水設計和裝修指導
  - 6 個月跟進服務
  - 定期能量檢測和調整
  - 專屬顧問支持

**多語言支持：** ✅ 中文/英文

---

### 4. 案例分享頁面 (/cases)

**路由：** `/cases`

**文件：** `client/src/pages/Cases.tsx`

**主要區域：**

| 區域 | 組件 | 內容 |
|------|------|------|
| 頁面頭部 | Header | 頁面標題和描述 |
| 案例列表 | Cases Grid | 多個詳細案例 |
| 品牌分佈 | Brand Distribution | 案例中使用的品牌分佈 |
| 滿意度數據 | Stats Section | 客戶滿意度統計 |
| 行動呼籲 | CTA Section | 預約諮詢按鈕 |

**案例詳情（品牌無關）：**

**案例 1：張太太 - 健康與睡眠改善**
- 背景：企業高管，42 歲，長期失眠和焦慮
- 選擇品牌：Dyson（高端選擇）
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
- 選擇品牌：Philips（中端選擇）
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

**案例 3：李家庭 - 家庭和諧與健康（新案例）**
- 背景：三口之家，孩子過敏性鼻炎
- 選擇品牌：小米（經濟選擇）
- 見證：「孩子的過敏症狀完全消失了！」
- 時間軸：
  - 第 2 週：過敏症狀減輕
  - 第 1 個月：完全消失
  - 第 3 個月：整個家庭氛圍改善
- 數據對比：
  - 過敏發作：每週 3-4 次 → 0 次
  - 家庭和諧度：改善 50%+
  - 孩子睡眠質量：改善 60%+
- 滿意度：5/5 星

**滿意度統計：**
- 客戶滿意度：95%+
- 見效時間：3 週至 3 個月
- 重複購買率：60%+
- 推薦率：85%+

**多語言支持：** ✅ 中文/英文

---

### 5. 聯繫我們頁面 (/contact)

**路由：** `/contact`

**文件：** `client/src/pages/Contact.tsx`

**主要區域：**

| 區域 | 組件 | 內容 |
|------|------|------|
| 頁面頭部 | Header | 頁面標題和描述 |
| 品牌選擇 | Brand Selector | 選擇感興趣的品牌（可選） |
| 聯繫表單 | Contact Form | 姓名、郵箱、電話、訊息輸入 |
| 聯繫方式 | Contact Info | 電話、郵箱、網站、WhatsApp |
| 提示信息 | Info Box | 免費諮詢提示 |
| FAQ 連結 | CTA Section | 服務詳情連結 |

**聯繫表單字段：**
- 姓名（必填）
- 郵箱（必填）
- 電話（可選）
- 感興趣的品牌（可選，下拉菜單）
- 訊息（必填）

**聯繫方式：**
- 📞 電話：[黎Sir 聯繫電話]
- 📧 Email：[Email 地址]
- 🌐 網站：mrlaifengshui.com
- 💬 WhatsApp：[WhatsApp 號碼]

**多語言支持：** ✅ 中文/英文

---

### 6. 404 頁面 (/404)

**路由：** `/404`

**文件：** `client/src/pages/NotFound.tsx`

**功能：** 顯示 404 錯誤和返回首頁連結

---

## 多品牌支持

### 品牌數據結構

**文件：** `client/src/lib/brands.ts`

```typescript
export interface Brand {
  id: string;
  name: string;
  logo: string;
  category: 'premium' | 'mid-range' | 'budget' | 'direct-sales';
  priceRange: {
    min: number;
    max: number;
  };
  description: string;
  features: string[];
  hepaFilter: string;
  formaldehydeRemoval: string;
  negativeIons: string;
  noiseLevel: string;
  energyEfficiency: string;
  targetCustomers: string[];
  supportLevel: number; // 1-5 stars
}

export const brands: Record<string, Brand> = {
  dyson: {
    id: 'dyson',
    name: 'Dyson',
    logo: '/images/brands/dyson-logo.svg',
    category: 'premium',
    priceRange: { min: 3000, max: 5000 },
    description: '高端市場領導者，創新設計和先進技術',
    features: ['智能感應', '自動淨化', '遠程控制', '靜音運行'],
    hepaFilter: 'H13 級',
    formaldehydeRemoval: '99.95%',
    negativeIons: '5000 萬個/cm³',
    noiseLevel: '62dB',
    energyEfficiency: '⭐⭐⭐⭐',
    targetCustomers: ['高端消費者', '企業', '高要求家庭'],
    supportLevel: 5,
  },
  
  philips: {
    id: 'philips',
    name: 'Philips',
    logo: '/images/brands/philips-logo.svg',
    category: 'mid-range',
    priceRange: { min: 1500, max: 3000 },
    description: '中端市場，可靠性能和合理價格',
    features: ['多層濾網', '智能感應', '靜音設計', '易於維護'],
    hepaFilter: 'H13 級',
    formaldehydeRemoval: '95%',
    negativeIons: '3000 萬個/cm³',
    noiseLevel: '65dB',
    energyEfficiency: '⭐⭐⭐⭐',
    targetCustomers: ['中產家庭', '小企業', '預算有限客戶'],
    supportLevel: 5,
  },
  
  // ... 其他品牌
};
```

### 品牌選擇組件

**文件：** `client/src/components/BrandSelector.tsx`

```typescript
interface BrandSelectorProps {
  selectedBrand?: string;
  onBrandChange?: (brandId: string) => void;
  showAll?: boolean;
}

export function BrandSelector({ 
  selectedBrand, 
  onBrandChange, 
  showAll = false 
}: BrandSelectorProps) {
  const [open, setOpen] = useState(false);
  
  const displayBrands = showAll ? Object.values(brands) : 
    Object.values(brands).slice(0, 6);
  
  return (
    <div className="brand-selector">
      <label className="text-sm font-medium">選擇品牌</label>
      <select 
        value={selectedBrand || ''}
        onChange={(e) => onBrandChange?.(e.target.value)}
        className="w-full p-2 border rounded"
      >
        <option value="">選擇一個品牌...</option>
        {displayBrands.map(brand => (
          <option key={brand.id} value={brand.id}>
            {brand.name} ({brand.category})
          </option>
        ))}
      </select>
    </div>
  );
}
```

### 品牌卡片組件

**文件：** `client/src/components/BrandCard.tsx`

```typescript
interface BrandCardProps {
  brand: Brand;
  onClick?: () => void;
}

export function BrandCard({ brand, onClick }: BrandCardProps) {
  return (
    <div 
      className="brand-card cursor-pointer hover:shadow-lg transition-shadow"
      onClick={onClick}
    >
      <img src={brand.logo} alt={brand.name} className="h-16 mb-4" />
      <h3 className="font-bold text-lg">{brand.name}</h3>
      <p className="text-sm text-muted-foreground">{brand.category}</p>
      <p className="text-sm font-semibold mt-2">
        HK${brand.priceRange.min}-{brand.priceRange.max}
      </p>
      <div className="mt-3 flex gap-1">
        {Array(brand.supportLevel).fill(0).map((_, i) => (
          <span key={i} className="text-gold">⭐</span>
        ))}
      </div>
    </div>
  );
}
```

---

## 組件架構

### 全局組件

#### Navigation.tsx
**功能：** 全局導航欄

**導航項目：**
- 首頁 (/)
- 品牌介紹 (/brands) - 新增
- 服務介紹 (/services)
- 案例分享 (/cases)
- 聯繫我們 (/contact)

#### Footer.tsx
**功能：** 全局頁腳

**內容：**
- 快速導航連結
- 聯繫信息
- 品牌信息
- 版權信息

#### BrandSelector.tsx
**功能：** 品牌選擇組件（新）

**特性：**
- 下拉菜單選擇
- 品牌篩選
- 多語言支持

#### BrandCard.tsx
**功能：** 品牌卡片組件（新）

**特性：**
- 品牌標誌展示
- 價格範圍
- 支持級別
- 點擊事件

---

## 路由配置

**路由引擎：** Wouter

**路由表：**

| 路徑 | 組件 | 描述 |
|------|------|------|
| `/` | Home | 首頁 |
| `/brands` | Brands | 品牌介紹（新） |
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
      <Route path={"/brands"} component={() => <Brands language={language} />} />
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

**品牌名稱翻譯：**

| 品牌 | 中文 | 英文 |
|------|------|------|
| Dyson | 戴森 | Dyson |
| Philips | 飛利浦 | Philips |
| Sharp | 聲寶 | Sharp |
| LG | 樂金 | LG |
| 小米 | 小米 | Xiaomi |
| Amway | 安麗 | Amway |

**品牌分類翻譯：**

| 分類 | 中文 | 英文 |
|------|------|------|
| premium | 高端市場領導者 | Premium Market Leader |
| mid-range | 中端市場 | Mid-Range Market |
| budget | 大眾市場 | Budget Market |
| direct-sales | 直銷渠道 | Direct Sales Channel |

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

### 品牌色彩

為每個品牌添加特定的色彩標識：

| 品牌 | 主色 | 副色 |
|------|------|------|
| Dyson | #1F2937 (深灰) | #3B82F6 (藍色) |
| Philips | #FF0000 (紅色) | #FFFFFF (白色) |
| Sharp | #FFFFFF (白色) | #000000 (黑色) |
| LG | #CC0000 (深紅) | #FFFFFF (白色) |
| 小米 | #FF6900 (橙色) | #FFFFFF (白色) |
| Amway | #003DA5 (藍色) | #FFB81C (金色) |

### 字體

| 用途 | 字體 | 權重 |
|------|------|------|
| 標題 | Poppins | 700 |
| 正文 | Inter | 400, 500, 600 |
| 中文 | Noto Sans TC | 400, 500, 600, 700 |

### 響應式斷點

| 斷點 | 寬度 | 用途 |
|------|------|------|
| 移動 | < 640px | 手機 |
| 平板 | 640px - 1024px | 平板 |
| 桌面 | > 1024px | 桌面 |

---

## 內容策略調整

### SEO 關鍵詞調整

**核心關鍵詞（更新）：**

| 關鍵詞 | 搜索量 | 難度 | 優先級 | 轉化潛力 |
|--------|--------|------|--------|---------|
| 量子風水空氣淨化 | 中 | 低 | ⭐⭐⭐⭐⭐ | 極高 |
| Dyson 風水服務 | 低 | 低 | ⭐⭐⭐⭐ | 高 |
| Philips 能量調頻 | 低 | 低 | ⭐⭐⭐⭐ | 高 |
| 空氣淨化機 + 風水 | 低 | 低 | ⭐⭐⭐⭐ | 高 |
| 香港量子風水服務 | 低 | 低 | ⭐⭐⭐⭐ | 高 |

**長尾關鍵詞（更新）：**

| 關鍵詞 | 搜索意圖 | 優先級 |
|--------|---------|--------|
| Dyson 空氣淨化機 + 風水 | 特定品牌 | ⭐⭐⭐⭐ |
| Philips 空氣淨化 + 能量調頻 | 特定品牌 | ⭐⭐⭐⭐ |
| 小米空氣淨化機 + 風水服務 | 經濟選擇 | ⭐⭐⭐ |
| 香港最好的空氣淨化風水服務 | 本地搜索 | ⭐⭐⭐⭐ |
| 空氣淨化機品牌對比 | 購買決策 | ⭐⭐⭐⭐ |

### 內容計劃調整

**新增內容主題：**

1. **品牌對比文章**
   - 「Dyson vs Philips：哪個更適合風水能量調頻？」
   - 「高端 vs 經濟：空氣淨化機品牌選擇指南」
   - 「2025 年香港最佳空氣淨化機品牌排名」

2. **品牌特定內容**
   - 「為什麼 Dyson 適合高端風水服務」
   - 「Philips 空氣淨化機的能量調頻優勢」
   - 「小米空氣淨化機的經濟風水方案」

3. **客戶決策指南**
   - 「如何選擇適合您的空氣淨化機品牌」
   - 「不同預算的風水空氣淨化方案」
   - 「品牌、性能、價格的平衡指南」

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

- [ ] 添加高質量圖片資產（包括品牌圖片）
- [ ] SEO 優化（Meta 標籤、結構化數據）
- [ ] Google Analytics 集成
- [ ] 表單後端集成

### 中期（3-6 個月）

- [ ] 部落格功能（品牌對比文章）
- [ ] 線上預約系統
- [ ] 客戶評論系統
- [ ] 品牌合作夥伴連結

### 長期（6-12 個月）

- [ ] 用戶登錄和會員系統
- [ ] 線上課程功能
- [ ] 社區論壇
- [ ] 移動應用

---

## 關鍵改變總結

### 網站架構改變

| 方面 | 原始 | 新版本 |
|------|------|--------|
| 主要品牌 | Amway Sky | 多品牌支持 |
| 品牌焦點 | 單一 | 六個主要品牌 + 其他 |
| 目標客戶 | Amway 直銷商 | 所有消費者 |
| 服務模式 | 綁定 Amway | 品牌無關 |
| 頁面數量 | 5 頁 | 6 頁（新增品牌頁面） |
| 組件數量 | 基礎 | 新增品牌選擇和卡片組件 |
| 市場定位 | 直銷渠道 | 綜合服務提供商 |

### 內容策略改變

| 方面 | 原始 | 新版本 |
|------|------|--------|
| 推廣焦點 | Amway Sky | 多品牌對比 |
| 客戶見證 | Amway 用戶 | 多品牌用戶 |
| 服務套餐 | 綁定 Amway | 品牌選擇 |
| 內容主題 | Amway 相關 | 品牌對比、選擇指南 |
| SEO 關鍵詞 | Amway 相關 | 多品牌相關 |

### 商業模式改變

| 方面 | 原始 | 新版本 |
|------|------|--------|
| 收入來源 | Amway 佣金 | 直接服務費用 |
| 合作夥伴 | Amway 直銷商 | 多品牌代理商 |
| 市場範圍 | 直銷網絡 | 所有消費者 |
| 客戶基礎 | Amway 會員 | 所有消費者 |
| 競爭優勢 | Amway 獨家 | 品牌無關的專業服務 |

---

## 文檔信息

**文檔版本：** 2.0（重新整理版本）

**最後更新：** 2025-11-27

**主要改變：** 將 Amway Sky 從主要焦點改為多品牌支持模式

**下一次審查：** 2025-12-27（1 個月後）

---

**結論：** 新的多品牌模式使網站更具靈活性和包容性，能夠吸引更廣泛的客戶群體，同時保持量子調頻和風水擺位作為核心服務的獨特價值主張。
