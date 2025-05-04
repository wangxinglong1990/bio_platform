import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import axios from 'axios';

// 导入翻译资源
import { zhTranslation, enTranslation } from './translations';

// 定义翻译资源类型
export const resources = {
  en: {
    translation: enTranslation
  },
  zh: {
    translation: zhTranslation
  }
};

// 获取当前环境的公共路径
const publicPath = process.env.PUBLIC_URL || '';

// 获取保存的语言设置或默认使用浏览器语言
const savedLanguage = localStorage.getItem('i18nextLng');
const fallbackLng = savedLanguage || 'en';

// 初始化 i18next
i18n
  .use(LanguageDetector) // 检测用户语言
  .use(initReactI18next) // 传递i18n到react-i18next
  .init({
    fallbackLng, // 使用保存的语言或默认英文
    lng: savedLanguage || navigator.language || 'en', // 显式设置当前语言
    debug: process.env.NODE_ENV === 'development', // 开发环境下开启调试模式
    resources, // 直接使用导入的资源
    interpolation: {
      escapeValue: false, // 不转义HTML内容
    },
    returnNull: false, // 当翻译找不到时返回键名而不是null
    returnEmptyString: false, // 当翻译是空字符串时返回键名
    detection: {
      order: ['localStorage', 'navigator', 'cookie', 'htmlTag'], // 优先使用localStorage中的语言设置
      caches: ['localStorage', 'cookie'], // 缓存语言设置
    },
    react: {
      useSuspense: true,
    },
  });

// 根据IP地址检测用户所在国家/地区，并自动切换语言
export const detectLanguageByIP = async () => {
  try {
    // 如果本地存储中已有语言设置，则优先使用
    if (localStorage.getItem('i18nextLng')) {
      return;
    }
    
    const response = await axios.get('https://ipapi.co/json/');
    const { country_code } = response.data;
    
    // 根据国家代码选择语言
    // 这里我们简单地将非中国用户设置为英文，中国用户设置为中文
    if (country_code && country_code !== 'CN') {
      await i18n.changeLanguage('en');
    } else {
      await i18n.changeLanguage('zh');
    }
  } catch (error) {
    console.error('IP语言检测失败:', error);
    // 使用默认语言检测机制
  }
};

// 添加语言变更事件监听器，确保正确应用新的语言设置
i18n.on('languageChanged', (lng) => {
  document.documentElement.setAttribute('lang', lng);
  document.documentElement.setAttribute('dir', lng === 'ar' ? 'rtl' : 'ltr');
  localStorage.setItem('i18nextLng', lng);
  console.log(`语言已切换到: ${lng}`);
});

// 手动设置语言，确保初始化完成后立即应用
if (savedLanguage) {
  i18n.changeLanguage(savedLanguage);
} else if (!i18n.language || i18n.language === 'dev') {
  i18n.changeLanguage('en'); // 英文作为默认后备
}

// 调试信息
console.log('当前语言:', i18n.language);
console.log('资源加载状态:', i18n.isInitialized);
console.log('资源内容示例:', i18n.t('app.title'));

// 导出i18n实例
export default i18n; 