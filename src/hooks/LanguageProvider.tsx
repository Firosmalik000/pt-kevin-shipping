import React, { createContext, useState, ReactNode, useEffect } from 'react';

interface LanguageContextType {
  language: 'en' | 'zh';
  setLanguage: (language: 'en' | 'zh') => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<'en' | 'zh'>(() => (localStorage.getItem('language') as 'en' | 'zh') || 'en');

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>;
};

export default LanguageContext;
