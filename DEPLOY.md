# 🚀 部署指南

本指南将帮助你把网站部署到 Vercel，获得一个公开可访问的网址。

整个过程分为两大步：**① 推送代码到 GitHub** → **② 在 Vercel 部署**

---

## 第一步：推送代码到 GitHub

### 1.1 在 GitHub 上创建新仓库

1. 打开 [github.com](https://github.com)，登录你的账号
2. 点击右上角 **`+`** → **New repository**
3. 填写：
   - **Repository name**: `personal-website`（或你喜欢的名字）
   - **Description**: 可选
   - **Visibility**: 选 **Public**（Vercel 免费版需要公开仓库）或 **Private**
   - **不要**勾选 "Add a README" / ".gitignore" / "license"（项目里已经有了）
4. 点击 **Create repository**

### 1.2 在本地初始化 git 并推送

在终端中，进入项目目录，依次执行：

```bash
cd ~/Desktop/zcode_workspace/personal-website

# 初始化 git 仓库
git init

# 添加所有文件
git add .

# 提交
git commit -m "✨ 初始化个人网站"

# 添加远程仓库（把 yourusername 换成你的 GitHub 用户名）
git remote add origin https://github.com/yourusername/personal-website.git

# 推送
git branch -M main
git push -u origin main
```

> 如果提示要求输入 GitHub 用户名和密码，GitHub 已不再支持密码认证。
> 请使用 Personal Access Token (PAT)：
> 1. GitHub → Settings → Developer settings → Personal access tokens → Generate new token
> 2. 勾选 `repo` 权限
> 3. 生成后复制 token，在终端密码处粘贴

### 1.3 验证

打开你的 GitHub 仓库页面，应该能看到所有文件。

---

## 第二步：在 Vercel 部署

### 2.1 注册 / 登录 Vercel

1. 打开 [vercel.com](https://vercel.com)
2. 点击 **Sign Up** / **Log In**
3. 选择 **Continue with GitHub**（用 GitHub 账号登录，最方便）

### 2.2 导入项目

1. 登录后，点击 **Add New...** → **Project**
2. 在 "Import Git Repository" 列表中找到你的 `personal-website` 仓库
3. 点击 **Import**

### 2.3 配置部署（通常自动识别，无需修改）

Vercel 会自动检测 Astro 项目，确认以下配置：

| 设置项 | 值 |
|--------|-----|
| Framework Preset | Astro |
| Build Command | `npm run build` |
| Output Directory | `dist` |
| Install Command | `npm install` |

> 如果 Vercel 没有自动识别为 Astro，手动选择 Framework Preset → Astro。

4. 点击 **Deploy**

### 2.4 等待部署完成

- 通常 1-2 分钟
- 看到烟花 🎉 表示部署成功
- 你会获得一个网址，类似：`https://personal-website-xxx.vercel.app`

### 2.5 验证网站

点击 Vercel 给的链接，你的网站应该已经可以访问了！

---

## 第三步：后续更新网站

以后每次你想更新网站内容（写新文章、改信息等），只需要：

```bash
# 1. 在本地修改文件（写 .md 文章、改 site.ts 等）
# 2. 提交并推送
git add .
git commit -m "📝 新文章：XXX"
git push

# → Vercel 自动检测到代码更新，自动重新部署！
# 约 1 分钟后网站更新。
```

就这么简单。**git push = 网站更新**。

---

## 可选：绑定自定义域名

以后买了自己的域名（如 `yourname.com`），在 Vercel 中：

1. 进入项目 → Settings → Domains
2. 输入你的域名 → Add
3. 按提示在域名注册商处添加 DNS 记录
4. 等 DNS 生效后，网站可通过自定义域名访问

---

## 常见问题

### Q: 推送代码时提示 "Permission denied"？
A: 确保你用的是正确的 GitHub 账号和有效的 Personal Access Token。

### Q: Vercel 部署失败？
A: 检查 Build Output 是否为 `dist`。本地先运行 `npm run build` 确认没有错误。

### Q: 网站显示但样式不对？
A: 确认 `astro.config.mjs` 中的 `site` 字段改成了你的实际 Vercel 域名。

### Q: 以后不用 zcode 了怎么更新网站？
A: 用任何编辑器（VS Code、Cursor、甚至 GitHub 网页端编辑）改文件，然后 `git push` 即可。网站和 zcode 完全无关。
