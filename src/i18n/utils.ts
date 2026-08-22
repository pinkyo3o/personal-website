/**
 * i18n 辅助函数
 * 在任意 Astro 组件中通过 getLangFromUrl / useTranslations 获取当前语言的翻译。
 */
import { ui, type Language, type UIKey, defaultLang } from './ui';

/** 从 URL 路径中提取语言代码，如 /zh/blog → zh，/en/about → en */
export function getLangFromUrl(url: URL): Language {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Language;
  return defaultLang;
}

/** 返回一个翻译函数 t(key)，自动根据当前语言翻译 */
export function useTranslations(lang: Language) {
  return function t(key: UIKey): string {
    const dict = ui[lang] as Record<UIKey, string>;
    return dict[key] ?? ui[defaultLang][key] ?? key;
  };
}

/** 获取指定语言对应的路径前缀，如 zh → /zh，en → /en */
export function langPrefix(lang: Language): string {
  return `/${lang}`;
}

/** 将路径切换到另一种语言，如 /zh/blog → /en/blog */
export function switchLangPath(pathname: string, targetLang: Language): string {
  const parts = pathname.split('/').filter(Boolean);
  if (parts.length > 0 && parts[0] in ui) {
    parts[0] = targetLang;
  } else {
    parts.unshift(targetLang);
  }
  return '/' + parts.join('/');
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
