import React, { useEffect } from 'react';
import { Dropdown } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { detectLanguageByIP } from '../i18n';

const LanguageSwitcher: React.FC = () => {
  const { i18n, t } = useTranslation();

  // 在组件挂载时检测IP并设置语言
  useEffect(() => {
    const initLanguage = async () => {
      // 如果本地存储中没有语言设置，则根据IP检测
      if (!localStorage.getItem('i18nextLng')) {
        await detectLanguageByIP();
      }
    };
    
    initLanguage();
  }, []);

  // 切换语言的处理函数
  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  // 获取当前语言
  const currentLanguage = i18n.language;

  return (
    <div className="d-flex align-items-center">
      <Dropdown>
        <Dropdown.Toggle variant="outline-light" size="sm" id="language-dropdown">
          {currentLanguage === 'zh' ? '🇨🇳 中文' : '🇺🇸 English'}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item 
            onClick={() => changeLanguage('zh')} 
            active={currentLanguage === 'zh'}
          >
            🇨🇳 {t('language.zh')}
          </Dropdown.Item>
          <Dropdown.Item 
            onClick={() => changeLanguage('en')} 
            active={currentLanguage === 'en'}
          >
            🇺🇸 {t('language.en')}
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default LanguageSwitcher; 