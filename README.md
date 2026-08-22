# 🌈 个人网站

一个用 Astro + Tailwind CSS 搭建的中英双语个人网站。

## 🚀 快速开始

```bash
# 安装依赖
npm install

# 启动本地预览（浏览器打开 http://localhost:4321）
npm run dev

# 构建生产版本
npm run build

# 预览构建结果
npm run preview
```

## 📁 项目结构

```
src/
├── components/          # 可复用组件
│   ├── BaseHead.astro     # SEO meta 标签
│   ├── Header.astro       # 导航栏 + 语言切换
│   ├── Footer.astro       # 页脚（社交链接）
│   ├── BlogCard.astro     # 博客卡片
│   └── ProjectCard.astro  # 项目卡片
├── layouts/
│   └── BaseLayout.astro   # 主布局
├── i18n/
│   ├── ui.ts              # 中英文字典（改文案在这）
│   └── utils.ts           # i18n 辅助函数
├── pages/
│   ├── index.astro        # 根入口（自动跳转到 /zh）
│   ├── zh/                # 中文页面
│   │   ├── index.astro      # 首页
│   │   ├── about.astro      # 关于我
│   │   ├── blog/            # 博客列表 + 文章页
│   │   └── projects.astro   # 项目展示
│   ├── en/                # 英文页面（结构同中文）
│   └── rss.xml.js         # RSS 订阅
├── content/
│   └── blog/
│       ├── zh/            # 中文博客文章（Markdown）
│       └── en/            # 英文博客文章（Markdown）
├── data/
│   ├── site.ts            # 站点配置（名字、简介、社交链接）
│   └── projects.ts        # 项目数据
└── styles/
    └── global.css         # 全局样式 + 主题色
```

## ✏️ 如何更新内容

### 1. 修改个人信息

编辑 `src/data/site.ts`：
- `name` — 你的名字（中英文）
- `tagline` — 首页一句话简介
- `about` — 关于我页面内容
- `skills` — 技能标签
- `social` — 社交链接（GitHub、邮箱等）

### 2. 写新博客文章

在 `src/content/blog/zh/`（中文）或 `src/content/blog/en/`（英文）下新建 `.md` 文件：

```markdown
---
title: '文章标题'
description: '一句话摘要'
pubDate: 2026-08-22
tags: ['标签1', '标签2']
lang: 'zh'
---

正文用 Markdown 写，支持所有标准语法。
```

### 3. 添加项目

编辑 `src/data/projects.ts`，复制一个项目对象修改内容即可。

### 4. 修改主题色

编辑 `src/styles/global.css` 顶部的 `@theme` 块：

```css
@theme {
  --color-primary: #f9a8c9;       /* 樱花粉 — 主色 */
  --color-accent: #8ecae6;        /* 天空蓝 — 辅色 */
  --color-bellflower: #a8c8ec;   /* 风铃花蓝 */
  --color-warmwhite: #fefcfd;     /* 奶油白 — 背景色 */
}
```

改完全站自动换色，无需逐个修改。

### 5. 修改导航文案

编辑 `src/i18n/ui.ts`，修改对应的字符串。

## 🛠️ 技术栈

| 组件 | 技术 |
|------|------|
| 框架 | [Astro](https://astro.build) v7 |
| 样式 | [Tailwind CSS](https://tailwindcss.com) v4 |
| 部署 | Vercel（见 DEPLOY.md） |
| 代码托管 | GitHub |

## ⚠️ Astro 7 编译器注意事项

Astro 7 使用新的 rolldown 编译器，有以下限制：
- **不要在 `.astro` 文件的 frontmatter（`---` 之间）中使用 `/** */` 块注释**，用 `//` 行注释代替
- `interface Props { ... }` 和 `type Props = { ... }` 可能导致编译错误，直接用 `const { ... } = Astro.props` 即可
- 这些限制是 Astro 7 的已知行为，不影响功能

## 📄 License

MIT
