# 內容管理說明

這個資料夾用於管理部落格的所有內容，使用 YAML 格式儲存。

## 資料夾結構

- `works/` - 作品文章，每個 YAML 檔案對應一篇作品
- `diaries/` - 日記文章，每個 YAML 檔案對應一篇日記
- `drawings/` - 圖畫資料，只有一個 `drawings.yaml` 檔案

## 作品格式

在 `works/` 資料夾中建立 YAML 檔案，例如 `數位藝術創作.yaml`：

```yaml
id: "1"
title: "作品標題"
description: "作品簡介"
imageUrl: "/attached_assets/generated_images/image.png"  # 可選
tags: ["數位藝術", "設計"]
link: "#"  # 可選
content: |
  # 作品標題
  
  作品內容可以使用 **Markdown** 語法撰寫。
```

**重要**：
- **檔案名稱就是 URL slug**：檔案名稱（不含 `.yaml` 或 `.yml` 副檔名）會自動用作作品 URL
- `imageUrl` 必須以 `/attached_assets/` 開頭
- `content` 欄位支援完整的 Markdown 語法

## 日記格式

在 `diaries/` 資料夾中建立 YAML 檔案，例如 `第一天的開始.yaml`：

```yaml
id: "1"
title: "日記標題"
date: "2024-11-07"
content: |
  # 日記標題
  
  日記內容可以使用 **Markdown** 語法撰寫。
```

**重要**：
- **檔案名稱就是 URL slug**：檔案名稱會自動用作日記 URL
- `content` 欄位支援完整的 Markdown 語法

## 圖畫格式

在 `drawings/` 資料夾中只有一個 `drawings.yaml` 檔案：

```yaml
drawings:
  - id: "1"
    url: "/attached_assets/generated_images/image1.png"
    title: "圖畫標題"
```

**重要**：
- 所有圖畫的 `url` 必須以 `/attached_assets/` 開頭

## 生成內容

每次修改 YAML 檔案後，執行以下命令重新生成內容：

```bash
npm run content:generate
```

或者在開發時，內容會自動生成：

```bash
npm run dev
```

或者在建置時，內容會自動生成：

```bash
npm run build
```

## Markdown 支援

所有 `content` 欄位都支援完整的 Markdown 語法：

- 標題（# ## ###）
- **粗體** 和 *斜體*
- 列表（有序和無序）
- 程式碼區塊和行內程式碼
- 引用
- 連結和圖片
- 表格（透過 GFM 擴展）

## 注意事項

1. **檔案名稱就是 URL**：檔案名稱（不含 `.yaml` 或 `.yml` 副檔名）會自動成為內容的 URL slug
2. 檔案名稱必須是唯一的，建議使用有意義的中文名稱
3. 圖片 URL 必須以 `/attached_assets/` 開頭
4. 每次修改內容後記得執行 `npm run content:generate` 或重新啟動開發伺服器
5. **所有新增功能已移除**：內容只能透過編輯 YAML 檔案來管理

