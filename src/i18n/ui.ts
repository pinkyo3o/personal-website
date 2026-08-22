/**
 * i18n UI 字符串字典
 * 添加新语言或修改文案时，只需编辑这个文件。
 */
export const languages = {
  zh: '中文',
  en: 'English',
} as const;

export type Language = keyof typeof languages;

export const defaultLang: Language = 'zh';

export const ui = {
  zh: {
    // 导航
    'nav.home': '首页',
    'nav.about': '关于',
    'nav.blog': '博客',
    'nav.projects': '项目',
    'nav.langSwitch': 'EN',

    // 首页
    'home.greeting': '你好，我是',
    'home.tagline': '用代码和创意连接世界 ✨',
    'home.welcome': '欢迎来到我的数字花园',
    'home.latestPosts': '最新文章',
    'home.featuredProjects': '精选项目',
    'home.viewAll': '查看全部',
    'home.connectWithMe': '与我连接',

    // 博客
    'blog.title': '博客',
    'blog.subtitle': '想法、笔记与分享',
    'blog.readMore': '阅读全文',
    'blog.publishedOn': '发布于',
    'blog.backToList': '← 返回文章列表',
    'blog.noPosts': '暂无文章，敬请期待！',

    // 项目
    'projects.title': '项目',
    'projects.subtitle': '我做过的一些东西',
    'projects.viewProject': '查看项目',

    // 关于
    'about.title': '关于我',
    'about.skills': '技能',
    'about.experience': '经历',
    'about.contact': '联系方式',

    // 页脚
    'footer.madeWith': '用 ❤️ 和 Astro 制作',
    'footer.copyright': '保留所有权利',

    // 通用
    'common.loading': '加载中...',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.blog': 'Blog',
    'nav.projects': 'Projects',
    'nav.langSwitch': '中',

    // Home
    'home.greeting': "Hi, I'm",
    'home.tagline': 'Connecting the world with code & creativity ✨',
    'home.welcome': 'Welcome to my digital garden',
    'home.latestPosts': 'Latest Posts',
    'home.featuredProjects': 'Featured Projects',
    'home.viewAll': 'View All',
    'home.connectWithMe': 'Connect With Me',

    // Blog
    'blog.title': 'Blog',
    'blog.subtitle': 'Thoughts, notes & sharing',
    'blog.readMore': 'Read More',
    'blog.publishedOn': 'Published on',
    'blog.backToList': '← Back to blog',
    'blog.noPosts': 'No posts yet, stay tuned!',

    // Projects
    'projects.title': 'Projects',
    'projects.subtitle': 'Things I have built',
    'projects.viewProject': 'View Project',

    // About
    'about.title': 'About Me',
    'about.skills': 'Skills',
    'about.experience': 'Experience',
    'about.contact': 'Contact',

    // Footer
    'footer.madeWith': 'Made with ❤️ and Astro',
    'footer.copyright': 'All rights reserved',

    // Common
    'common.loading': 'Loading...',
  },
} as const;

export type UIKey = keyof typeof ui.zh;
