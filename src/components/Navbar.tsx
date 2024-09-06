import { useState, useEffect } from 'react';
import LogoImage from '../img/logo.png';
import { useLanguage } from '../hooks/UseLanguage';
import { FaTimes } from 'react-icons/fa';

import { IoMenuSharp } from 'react-icons/io5';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for controlling menu visibility
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  // Function for smooth scrolling
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className={`fixed top-0 z-[100] h-[90px] w-full md:px-10 px-5 transition-colors duration-300 ${isScrolled ? 'bg-white shadow-xl text-black' : 'bg-blue-800 text-white'}`}>
      <div className="h-full flex items-center justify-between">
        <div className="flex gap-2">
          <img src={LogoImage} className="w-10" alt="Logo" />
          <p className="md:text-3xl text-2xl font-bold py-2">Kevin Shipping</p>
        </div>
        <div className="gap-x-4 hidden md:flex">
          <div onClick={() => handleScrollTo('about')} className="cursor-pointer">
            {texts[language].aboutUs}
          </div>
          <div onClick={() => handleScrollTo('vision')} className="cursor-pointer">
            {texts[language].vision}
          </div>
          <div onClick={() => handleScrollTo('mision')} className="cursor-pointer">
            {texts[language].mission}
          </div>
          <div onClick={() => handleScrollTo('service')} className="cursor-pointer">
            {texts[language].service}
          </div>
          <div onClick={() => handleScrollTo('contact')} className="cursor-pointer">
            {texts[language].contactUs}
          </div>
        </div>
        <div className="md:flex hidden justify-center">
          <button className={`px-4 py-2 mr-2 font-semibold rounded-lg ${language === 'en' ? 'bg-blue-800 text-white' : 'bg-gray-200 text-gray-800'}`} onClick={() => setLanguage('en')}>
            English
          </button>
          <button className={`px-4 py-2 font-semibold rounded-lg ${language === 'zh' ? 'bg-blue-800 text-white' : 'bg-gray-200 text-gray-800'}`} onClick={() => setLanguage('zh')}>
            中文
          </button>
        </div>
        {/* Button to toggle mobile menu */}
        <button className="md:hidden text-2xl" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <FaTimes /> : <IoMenuSharp size={30} />} {/* Icon FaTimes for close */}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col gap-y-2 text-2xl bg-blue-700 text-white fixed min-h-screen text-center w-[300px] top-0 right-0 pt-[100px]">
          {/* Close Icon */}
          <div className="absolute top-5 right-5 cursor-pointer" onClick={() => setIsMenuOpen(false)}>
            <FaTimes size={30} />
          </div>
          <div onClick={() => handleScrollTo('about')} className="cursor-pointer">
            {texts[language].aboutUs}
          </div>
          <div onClick={() => handleScrollTo('vision')} className="cursor-pointer">
            {texts[language].vision}
          </div>
          <div onClick={() => handleScrollTo('mision')} className="cursor-pointer">
            {texts[language].mission}
          </div>
          <div onClick={() => handleScrollTo('service')} className="cursor-pointer">
            {texts[language].service}
          </div>
          <div onClick={() => handleScrollTo('contact')} className="cursor-pointer">
            {texts[language].contactUs}
          </div>
          <div className="flex justify-center">
            <button className={`px-4 py-2 mr-2 font-semibold rounded-lg ${language === 'en' ? 'bg-blue-800 text-white' : 'bg-gray-200 text-gray-800'}`} onClick={() => setLanguage('en')}>
              English
            </button>
            <button className={`px-4 py-2 font-semibold rounded-lg ${language === 'zh' ? 'bg-blue-800 text-white' : 'bg-gray-200 text-gray-800'}`} onClick={() => setLanguage('zh')}>
              中文
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
