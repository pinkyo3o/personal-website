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
];

/** 获取精选项目 */
export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
