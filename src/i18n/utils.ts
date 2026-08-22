/**
 * i18n 辅助函数
 * 在任意 Astro 组件中通过 getLangFromUrl / useTranslations 获取当前语言的翻译。
 */
import { ui, type Language, type UIKey, defaultLang } from './ui';

/** 从 URL 路径中提取语言代码，如 /zh/blog → zh，/en/about → en */
export function getLangFromUrl(url: URL): Language {
  const segments = url.pathname.split('/').filter(Boolean);
  // 跳过 base 路径段（如 personal-website），找语言段
  for (const seg of segments) {
    if (seg in ui) return seg as Language;
  }
  return defaultLang;
}

/** 返回一个翻译函数 t(key)，自动根据当前语言翻译 */
export function useTranslations(lang: Language) {
  return function t(key: UIKey): string {
    const dict = ui[lang] as Record<UIKey, string>;
    return dict[key] ?? ui[defaultLang][key] ?? key;
  };
}

/** 获取指定语言对应的路径前缀，考虑 base 路径 */
export function langPrefix(lang: Language): string {
  const base = import.meta.env.BASE_URL;
  return `${base}${lang}`;
}

/** 将路径切换到另一种语言，如 /zh/blog → /en/blog */
export function switchLangPath(pathname: string, targetLang: Language): string {
  const base = import.meta.env.BASE_URL;
  const segments = pathname.split('/').filter(Boolean);

  // 去掉 base 路径段
  const baseSeg = base.split('/').filter(Boolean)[0];
  const filtered = baseSeg ? segments.filter((s, i) => !(i === 0 && s === baseSeg)) : segments;

  if (filtered.length > 0 && filtered[0] in ui) {
    filtered[0] = targetLang;
  } else {
    filtered.unshift(targetLang);
  }
  return '/' + (baseSeg ? baseSeg + '/' : '') + filtered.join('/');
}

/** 根据语言获取日期格式化器 */
export function formatDate(date: Date, lang: Language): string {
  const locale = lang === 'zh' ? 'zh-CN' : 'en-US';
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}

/** 构建内部链接，自动加上 base 路径 */
export function path(p: string): string {
  const base = import.meta.env.BASE_URL;
  const cleanBase = base.endsWith('/') ? base : base + '/';
  const cleanPath = p.startsWith('/') ? p.slice(1) : p;
  return cleanBase + cleanPath;
}
