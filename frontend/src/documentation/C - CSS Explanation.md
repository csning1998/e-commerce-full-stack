### 1. `theme.css` — 主題和配色變數

**檔案位置**：`src/styles/theme.css`

**用途**：這個檔案定義了整體的配色方案和主題變數，支援深色模式切換，讓所有元件的配色保持一致，方便後續調整。

**內容包括**：

- **基礎色彩變數**：定義白色、黑色、靛藍色等基本色調及其深淺變化。
- **分隔線和文字顏色變數**：提供淺色和深色兩組分隔線與文字顏色，以符合不同主題需求。
- **語意化色彩變數**：包括背景色、邊框色、標題色和文字顏色等，方便清楚地標示樣式用途。
- **深色模式支援**：透過 `@media (prefers-color-scheme: dark)` 來自動切換深色模式，確保在深色環境下有良好顯示效果。

---

### 2. `base.css` — 基本重置和全域樣式

**檔案位置**：`src/styles/base.css`

**用途**：包含全域的樣式重置和 `body` 元素的基礎樣式設定，給其他樣式提供一致的起始基礎。

**內容包括**：

- **重置樣式**：針對 `*`、`::before`、`::after` 使用 `box-sizing: border-box`，並統一控制 `margin` 和 `padding`。
- **全域 `body` 樣式**：設定 `body` 的背景色、文字顏色、字型、平滑效果等基礎樣式，並加上 `transition`，實現顏色和背景的平滑切換效果。
- **字型設定**：指定多個字型備選，進行跨平台最佳化。

---

### 3. `navbar.css` — 導覽列樣式

**檔案位置**：`src/styles/navbar.css`

**用途**：專門設計導覽列的樣式，包括排版、配色和互動效果，確保導覽列在整體上保持統一風格。

**內容包括**：

- **標頭樣式**：設定 `header` 的背景色、內距和對齊方式，適合放置導覽內容。
- **Logo 樣式**：設定 `header .logo` 的字體大小和顏色，讓 Logo 顯得突出。
- **導覽連結樣式**：設定連結的字體、間距、裝飾及互動效果（例如 `hover` 狀態變色），增強一致性與可用性。

---

### 4. `hero-section.css` — 主視覺區樣式

**檔案位置**：`src/styles/hero-section.css`

**用途**：負責首頁主視覺區（Hero Section）的佈局和樣式，讓它成為首頁的視覺焦點。

**內容包括**：

- **主視覺區容器樣式**：設定 `.hero-section` 的佈局、背景色和過渡效果，並使用 `flex` 讓內容置中。
- **主視覺內容樣式**：設定 `.hero-section .content` 的最大寬度，確保內容在不同螢幕尺寸下清晰顯示。
- **標題和文字樣式**：設定主視覺區的標題和描述文字的字體大小與顏色，讓主視覺區文字更突出。
- **按鈕樣式**：設定按鈕的背景色、字體顏色、內距和過渡效果，`hover` 時更改背景色增強互動性。

---

### 5. `categories.css` — 分類區樣式

**檔案位置**：`src/styles/categories.css`

**用途**：負責分類區的樣式，讓每個分類卡片外觀和佈局一致、整齊。

**內容包括**：

- **分類容器樣式**：設定 `.categories` 的排版，使用 `flex` 佈局和 `gap` 控制卡片間距。
- **分類卡片樣式**：設定 `.category-card` 的寬度、內距、邊框圓角、陰影效果及 `hover` 過渡，增強卡片立體感。
- **卡片內圖片和標題樣式**：控制卡片內圖片的尺寸和標題字體大小，確保每張卡片內容清晰一致。

---

### 6. `footer.css` — 頁尾樣式

**檔案位置**：`src/styles/footer.css`

**用途**：設計頁尾樣式，包括背景色、文字顏色及排版，讓頁尾風格與網站整體保持一致。

**內容包括**：

- **頁尾容器樣式**：設定 `.footer` 的背景色、文字顏色和內距，讓頁尾清晰可見。
- **頁尾導覽樣式**：使用 `flex` 排列頁尾內的導覽連結，調整連結間的間距。
- **頁尾連結樣式**：設定頁尾連結的字體大小、顏色和 `hover` 效果，確保連結在不同狀態下顏色變化明顯。