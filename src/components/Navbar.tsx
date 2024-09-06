import React, { useState, useEffect } from 'react';
import LogoImage from '../img/logo.png';
import { useLanguage } from '../hooks/LanguageProvider';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Teks dalam berbagai bahasa
  const texts = {
    en: {
      aboutUs: 'About Us',
      vision: 'Vision',
      mission: 'Mission',
      service: 'Service',
      contactUs: 'Contact Us',
    },
    zh: {
      aboutUs: '关于我们',
      vision: '愿景',
      mission: '使命',
      service: '服务',
      contactUs: '联系我们',
    },
  };

  return (
    <div className={`fixed top-0 z-[100] h-[70px] w-full px-10 transition-colors duration-300 ${isScrolled ? 'bg-white shadow-xl text-black' : 'bg-blue-800 text-white'}`}>
      <div className="h-full flex items-center justify-between">
        <div className="flex gap-2">
          <img src={LogoImage} className="w-10" alt="Logo" />
          <p className="text-3xl">Kevin Shipping</p>
        </div>
        <div className="flex gap-x-4">
          <div>{texts[language].aboutUs}</div>
          <div>{texts[language].vision}</div>
          <div>{texts[language].mission}</div>
          <div>{texts[language].service}</div>
          <div>{texts[language].contactUs}</div>
        </div>
        <div className="flex justify-center">
          {/* Language Selector */}
          <button className={`px-4 py-2 mr-2 font-semibold rounded-lg ${language === 'en' ? 'bg-blue-800 text-white' : 'bg-gray-200 text-gray-800'}`} onClick={() => setLanguage('en')}>
            English
          </button>
          <button className={`px-4 py-2 font-semibold rounded-lg ${language === 'zh' ? 'bg-blue-800 text-white' : 'bg-gray-200 text-gray-800'}`} onClick={() => setLanguage('zh')}>
            中文
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
