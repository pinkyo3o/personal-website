/**
 * 站点配置 — 修改这里来个性化你的网站
 * 这是你最常需要改的文件：名字、简介、社交链接等
 */
export const siteConfig = {
  // 你的名字（中英文）
  name: {
    zh: '你的名字',
    en: 'Your Name',
  },

  // 一句话简介（显示在首页 Hero 区）
  tagline: {
    zh: '用代码和创意连接世界 ✨',
    en: 'Connecting the world with code & creativity ✨',
  },

  // 关于我的详细介绍（支持多段文字，用 \n\n 分段）
  about: {
    zh: `你好！欢迎来到我的个人网站。

我是一个对技术和创意充满热情的人，喜欢用代码解决问题、用设计传递价值。

> 💡 提示：这段文字在 \`src/data/site.ts\` 中修改，替换成你自己的介绍即可。`,
    en: `Hi! Welcome to my personal website.

I am someone passionate about technology and creativity, using code to solve problems and design to deliver value.

> 💡 Tip: Edit this text in \`src/data/site.ts\` to replace it with your own introduction.`,
  },

  // 技能标签
  skills: [
    'Python',
    'TypeScript',
    'Astro',
    'Data Analysis',
    'TikTok E-commerce',
    'Content Strategy',
    'Market Research',
  ],

  // 社交链接（不需要的留空字符串 "" 即可）
  social: {
    github: 'https://github.com/yourusername',
    email: 'mailto:your@email.com',
    twitter: '',
    linkedin: '',
    instagram: '',
  },

  // 版权年份（自动取当前年份）
  get year() {
    return new Date().getFullYear();
  },
};
