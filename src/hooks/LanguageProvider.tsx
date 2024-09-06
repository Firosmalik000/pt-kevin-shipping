import React, { createContext, useState, ReactNode, useEffect, useContext } from 'react';

// Definisikan tipe untuk context
interface LanguageContextType {
  language: 'en' | 'zh';
  setLanguage: (language: 'en' | 'zh') => void;
}

// Inisialisasi context dengan tipe default
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Muat state dari localStorage jika tersedia
  const [language, setLanguage] = useState<'en' | 'zh'>(() => (localStorage.getItem('language') as 'en' | 'zh') || 'en');

  // Simpan state ke localStorage setiap kali berubah
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>;
};

// Custom hook untuk menggunakan context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
