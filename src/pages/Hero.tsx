import { useLanguage } from '../hooks/UseLanguage';
import HeroImage from '../img/hero.jpeg';

const Hero = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'PT Kevin Shipping',
      subtitle: 'Caring and Safety Shipping Partner',
      buttonText: 'Explore Our Services',
    },
    zh: {
      title: 'PT Kevin Shipping',
      subtitle: '关怀与安全的航运合作伙伴',
      buttonText: '探索我们的服务',
    },
  };

  return (
    <div className="relative w-full h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${HeroImage})` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
        <h1 className="text-5xl font-bold mb-4">{content[language].title}</h1>
        <p className="text-2xl mb-8">{content[language].subtitle}</p>
        <a href="#services" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-full text-lg font-semibold transition duration-300 ease-in-out">
          {content[language].buttonText}
        </a>
      </div>
    </div>
  );
};

export default Hero;
