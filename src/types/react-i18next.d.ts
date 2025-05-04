import 'react-i18next';
import { resources } from '../i18n';

// 扩展react-i18next模块的类型定义
declare module 'react-i18next' {
  interface CustomTypeOptions {
    // 指定资源类型
    resources: {
      en: typeof resources.en.translation;
      zh: typeof resources.zh.translation;
    };
  }
} 