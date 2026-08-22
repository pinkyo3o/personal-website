---
title: '这个网站是怎么搭建的'
description: '用 Astro + Tailwind CSS + GitHub + Vercel 搭建一个完全独立的个人网站，不绑定任何平台。'
pubDate: 2026-08-20
tags: ['技术', 'Astro', '教程']
lang: 'zh'
---

# 这个网站的技术架构 🛠️

这篇文章介绍这个网站是怎么搭建的，以及为什么选择这套技术栈。

## 技术栈

| 组件 | 选择 | 为什么 |
|------|------|--------|
| 框架 | Astro | 专为内容型网站设计，速度极快 |
| 样式 | Tailwind CSS | 实用类方案，简洁高效 |
| 部署 | Vercel | 免费托管，git push 自动部署 |
| 代码托管 | GitHub | 代码完全归你所有 |

## 为什么选择 Astro？

1. **静态输出** — 生成纯 HTML/CSS/JS，速度极快，部署简单
2. **内容优先** — 原生支持 Markdown 内容集合
3. **零 JavaScript 默认** — 页面不携带不必要的 JS 框架
4. **可扩展** — 需要交互时可以局部引入 React/Vue/Svelte

## 双语是怎么实现的

Astro 5 原生支持 i18n 路由：

```
src/pages/
├── zh/          # 中文页面
│   ├── index.astro
│   ├── about.astro
│   └── blog/
└── en/          # 英文页面
    ├── index.astro
    ├── about.astro
    └── blog/
```

UI 文案统一管理在 `src/i18n/ui.ts` 中，添加新的翻译只需编辑一个文件。

## 如何更新内容

写博客文章只需要：

```bash
# 1. 在 src/content/blog/zh/ 下新建 .md 文件
# 2. 填入 frontmatter（标题、日期、标签等）
# 3. 写正文
# 4. git push
# → 网站自动更新！
```

就这么简单。不依赖任何特定的编辑工具。
