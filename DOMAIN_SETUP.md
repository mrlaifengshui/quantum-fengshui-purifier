# 域名設定指南 - fengshuipurifier.com

## ✅ 當前狀態

### 域名資訊
- **主要域名**: `fengshuipurifier.com`
- **GitHub Pages 網址**: `https://mrlaifengshui.github.io/quantum-fengshui-purifier/`
- **CNAME 設定**: ✅ 已完成

### GitHub Pages 設定
- **Repository**: `mrlaifengshui/quantum-fengshui-purifier`
- **Branch**: `gh-pages`
- **CNAME 檔案**: ✅ 已建立並推送
- **HTTPS**: 將由 GitHub 自動配置（Let's Encrypt）

---

## 🌐 DNS 設定（應在 Porkbun 完成）

### 必要的 DNS 記錄：

#### 1. A 記錄（主域名）
將 `fengshuipurifier.com` 指向以下 4 個 GitHub Pages IP：

```
類型: A
主機: @
值: 185.199.108.153
TTL: 600（或自動）

類型: A
主機: @
值: 185.199.109.153
TTL: 600

類型: A
主機: @
值: 185.199.110.153
TTL: 600

類型: A
主機: @
值: 185.199.111.153
TTL: 600
```

#### 2. CNAME 記錄（www 子域名）
將 `www.fengshuipurifier.com` 指向 GitHub Pages：

```
類型: CNAME
主機: www
值: mrlaifengshui.github.io
TTL: 600
```

---

## 🔧 GitHub Repository 設定

### CNAME 檔案
位置：`/CNAME`（在 gh-pages 分支的根目錄）

內容：
```
fengshuipurifier.com
```

**重要提示：**
- ✅ CNAME 檔案**必須**在 `gh-pages` 分支上
- ✅ 檔案名稱必須是大寫 `CNAME`（無副檔名）
- ✅ 內容只包含域名，無 `https://` 或尾部斜線

### GitHub Pages Settings
在 Repository > Settings > Pages 中：
1. **Source**: `gh-pages` branch, `/` (root)
2. **Custom domain**: `fengshuipurifier.com`
3. **Enforce HTTPS**: ✅ 啟用（DNS 生效後 24 小時內自動啟用）

---

## ⏱️ DNS 傳播時間

### 預期時間表：

| 階段 | 時間 | 說明 |
|------|------|------|
| DNS 記錄更新 | 5-15 分鐘 | Porkbun 處理 DNS 更新 |
| 全球 DNS 傳播 | 1-24 小時 | 不同地區的 DNS 伺服器更新快取 |
| HTTPS 憑證簽發 | 1-24 小時 | GitHub 透過 Let's Encrypt 自動簽發 SSL 憑證 |

### 檢查工具：
- **DNS 傳播檢查**: https://dnschecker.org/
  - 輸入 `fengshuipurifier.com`
  - 檢查全球不同地區的 DNS 解析結果
  - 應該看到 `185.199.108.153` 等 4 個 IP

- **SSL 憑證檢查**: https://www.sslshopper.com/ssl-checker.html
  - 輸入 `fengshuipurifier.com`
  - 檢查 SSL 憑證是否正確安裝

---

## 🔍 故障排除

### 問題 1: 網站顯示 404 錯誤

**可能原因：**
- CNAME 檔案不存在或內容錯誤
- DNS 尚未傳播完成
- GitHub Pages 尚未完成設定

**解決方法：**
```bash
# 1. 檢查 CNAME 檔案
cd /home/user/webapp
git checkout gh-pages
cat CNAME

# 2. 如果不存在或錯誤，重新建立
echo "fengshuipurifier.com" > CNAME
git add CNAME
git commit -m "fix: 修正 CNAME 檔案"
git push origin gh-pages

# 3. 等待 5-15 分鐘後重試
```

### 問題 2: 網站無法載入或顯示空白

**可能原因：**
- 瀏覽器快取舊版本
- DNS 尚未傳播
- 資產檔案路徑錯誤

**解決方法：**
1. **清除瀏覽器快取**：
   - Windows: `Ctrl + Shift + R`
   - Mac: `Cmd + Shift + R`
   - 或使用無痕模式

2. **檢查 DNS**：
   ```bash
   # Linux/Mac
   nslookup fengshuipurifier.com
   
   # 應該顯示：
   # Non-authoritative answer:
   # Name: fengshuipurifier.com
   # Address: 185.199.108.153
   # Address: 185.199.109.153
   # Address: 185.199.110.153
   # Address: 185.199.111.153
   ```

3. **檢查資產檔案**：
   ```bash
   cd /home/user/webapp
   git checkout gh-pages
   
   # 檢查 index.html 引用的檔案
   grep "assets/" index.html
   
   # 檢查檔案是否存在
   ls -lh assets/
   ```

### 問題 3: HTTPS 不可用或顯示不安全

**可能原因：**
- SSL 憑證尚未簽發
- DNS 尚未完全傳播
- 強制 HTTPS 未啟用

**解決方法：**
1. 等待 24 小時讓 GitHub 自動簽發憑證
2. 在 Repository > Settings > Pages 中：
   - 確認 "Enforce HTTPS" 已勾選
   - 如果無法勾選，表示 DNS 尚未驗證，需要等待
3. 使用 `http://fengshuipurifier.com` 暫時訪問（不安全）

### 問題 4: www 子域名無法訪問

**可能原因：**
- CNAME 記錄未設定或錯誤
- DNS 傳播未完成

**解決方法：**
1. 在 Porkbun 檢查 CNAME 記錄：
   ```
   主機: www
   值: mrlaifengshui.github.io
   ```
2. 使用 `nslookup www.fengshuipurifier.com` 檢查
3. 等待 DNS 傳播完成

### 問題 5: 技術原理頁面手機版排版錯誤

**可能原因：**
- 瀏覽器快取舊版本的 JavaScript
- 資產檔案未正確更新

**解決方法：**
1. **強制清除快取**（最重要）：
   - 使用無痕模式訪問
   - 或清除瀏覽器所有快取資料
2. **重新部署**（如果清除快取無效）：
   ```bash
   cd /home/user/webapp
   ./deploy.sh
   ```
3. **等待 CDN 更新**：
   - GitHub Pages 使用 CDN，需要 5-15 分鐘更新
   - 不同地區的 CDN 節點更新時間可能不同

---

## 📊 驗證部署成功

### 檢查清單：

#### ✅ DNS 設定驗證
```bash
# 檢查 A 記錄
nslookup fengshuipurifier.com

# 檢查 CNAME 記錄
nslookup www.fengshuipurifier.com

# 使用線上工具
# https://dnschecker.org/
```

#### ✅ GitHub Pages 設定驗證
1. 前往：https://github.com/mrlaifengshui/quantum-fengshui-purifier/settings/pages
2. 確認：
   - ✅ "Your site is live at https://fengshuipurifier.com"
   - ✅ "Enforce HTTPS" 已啟用
   - ✅ Custom domain: `fengshuipurifier.com`

#### ✅ 網站內容驗證
訪問以下網址並檢查：
- ✅ https://fengshuipurifier.com/
- ✅ https://fengshuipurifier.com/technology
- ✅ https://fengshuipurifier.com/services
- ✅ https://fengshuipurifier.com/cases
- ✅ https://fengshuipurifier.com/contact

確認：
- 所有頁面都能正常載入（不是 404）
- 技術原理頁面手機版排版正確（圖像-文字-圖像）
- Logo 正確顯示（量子能量 logo，無太極）
- 手機選單是橫向單行（首頁 | 技術原理 | 服務方案 | 成功案例 | 聯繫我們）

#### ✅ SSL 憑證驗證
1. 訪問 https://fengshuipurifier.com
2. 點擊瀏覽器地址欄的鎖頭圖示
3. 確認：
   - ✅ 憑證由 "Let's Encrypt" 簽發
   - ✅ 憑證有效期限正常
   - ✅ 憑證覆蓋 `fengshuipurifier.com` 和 `www.fengshuipurifier.com`

---

## 🔄 維護和更新

### 部署新版本

當有代碼更新時：

```bash
cd /home/user/webapp
./deploy.sh
```

部署腳本會：
1. 自動切換到 main 分支並更新
2. 完全清理舊的構建檔案
3. 重新構建
4. 部署到 gh-pages
5. **保留 CNAME 檔案**
6. 推送到 GitHub

### 更改域名

如果需要更改域名：

1. **更新 CNAME 檔案**：
   ```bash
   cd /home/user/webapp
   git checkout gh-pages
   echo "新域名.com" > CNAME
   git add CNAME
   git commit -m "feat: 更改域名為 新域名.com"
   git push origin gh-pages
   ```

2. **在 GitHub 更新設定**：
   - Repository > Settings > Pages
   - Custom domain 欄位輸入新域名
   - 儲存

3. **設定新域名的 DNS**：
   - 按照上面的 DNS 設定步驟配置新域名

---

## 📝 快速參考

### 當前網站資訊
- **主域名**: https://fengshuipurifier.com
- **www 域名**: https://www.fengshuipurifier.com
- **GitHub Pages**: https://mrlaifengshui.github.io/quantum-fengshui-purifier/

### 重要檔案位置
- **CNAME**: `/CNAME` (gh-pages 分支)
- **部署腳本**: `/deploy.sh` (main 分支)
- **部署指南**: `/DEPLOYMENT_GUIDE.md` (main 分支)
- **域名設定指南**: `/DOMAIN_SETUP.md` (main 分支)

### 緊急聯絡
- **GitHub Support**: https://support.github.com/
- **Porkbun Support**: https://porkbun.com/support

---

## ✨ 總結

### 已完成的設定：
✅ CNAME 檔案已建立並推送到 gh-pages  
✅ DNS 記錄應已在 Porkbun 設定  
✅ GitHub Pages 自訂網域已配置  
✅ 網站已部署最新版本  
✅ 技術原理頁面手機版排版已修正  
✅ 快取破壞策略已實施  

### 下一步：
1. ⏱️ 等待 DNS 傳播完成（1-24 小時）
2. ⏱️ 等待 HTTPS 憑證自動簽發（1-24 小時）
3. 🧹 訪問網站時清除瀏覽器快取
4. ✅ 驗證所有頁面正常運作

### 如果遇到問題：
1. 📖 參考本文檔的「故障排除」章節
2. 📖 參考 `DEPLOYMENT_GUIDE.md` 了解部署流程
3. 🔍 使用 DNS 檢查工具驗證設定
4. ⏱️ 給予充足的時間讓 DNS 和 SSL 生效

---

**最後更新**: 2025-12-05  
**維護者**: mrlaifengshui  
**域名**: fengshuipurifier.com  
**專案**: Quantum Feng Shui Air Purification
