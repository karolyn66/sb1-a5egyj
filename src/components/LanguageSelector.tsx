import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="relative group">
      <button className="flex items-center">
        <span className="uppercase">{i18n.language}</span>
      </button>
      <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg hidden group-hover:block">
        <div className="py-1">
          <button onClick={() => changeLanguage('de')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">DE Deutsch</button>
          <button onClick={() => changeLanguage('en')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">EN English</button>
          <button onClick={() => changeLanguage('zh')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">ZH 中文</button>
          <button onClick={() => changeLanguage('es')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">ES Español</button>
          <button onClick={() => changeLanguage('it')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">IT Italiano</button>
          <button onClick={() => changeLanguage('fr')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">FR Français</button>
        </div>
      </div>
    </div>
  );
};

export default LanguageSelector;