/**
 * 项目数据 — 在这里添加/修改你的项目
 *
 * 如何添加新项目：
 * 1. 复制一个对象，修改内容
 * 2. 图片放在 public/images/ 目录下，image 字段填 /images/文件名
 * 3. 没有图片可以用空字符串 ""，会显示渐变占位
 */
export interface Project {
  title: { zh: string; en: string };
  description: { zh: string; en: string };
  tags: string[];
  image: string;
  link: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    title: {
      zh: '印尼 TikTok 电商数据平台',
      en: 'Indonesia TikTok E-commerce Platform',
    },
    description: {
      zh: '多平台竞品分析工具，覆盖 TikTok Shop、Shopee、Lazada，自动采集价格、销量、评价数据并生成加权评分报告。',
      en: 'Multi-platform competitive analysis tool covering TikTok Shop, Shopee, and Lazada. Auto-collects pricing, sales, and review data to generate weighted scoring reports.',
    },
    tags: ['Python', 'Data Analysis', 'TikTok API', 'Automation'],
    image: '',
    link: '#',
    featured: true,
  },
  {
    title: {
      zh: '达人筛选系统',
      en: 'Creator Screening System',
    },
    description: {
      zh: '基于粉丝活跃度、电商等级、受众画像等多维度的 TikTok 达人筛选与匹配系统。',
      en: 'A TikTok creator screening and matching system based on follower activity, e-commerce tier, audience demographics, and more.',
    },
    tags: ['TypeScript', 'Astro', 'Data Viz'],
    image: '',
    link: '#',
    featured: true,
  },
  {
    title: {
      zh: '直播话术知识库',
      en: 'Livestream Scripting Knowledge Base',
    },
    description: {
      zh: '结构化的 TikTok 直播话术模板库，支持多品类、多场景快速生成与调用。',
      en: 'A structured TikTok livestream scripting template library supporting multi-category, multi-scenario quick generation and retrieval.',
    },
    tags: ['Markdown', 'Knowledge Base', 'Content'],
    image: '',
    link: '#',
    featured: true,
  },
];

/** 获取精选项目 */
export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
