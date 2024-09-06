import VisionImg from '../img/vision.jpg';
import { useLanguage } from '../hooks/LanguageProvider';

const Vision = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'Our Vision',
      description: 'To be a leading national shipping company that delivers exceptional services to our clients, fulfilling their sea transportation needs with competitive pricing.',
    },
    zh: {
      title: '我们的愿景',
      description: '成为领先的国内航运公司，为客户提供卓越的服务，满足他们的海上运输需求，并提供具有竞争力的价格。',
    },
  };

  return (
    <div className="w-full h-[500px] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${VisionImg})` }}>
      <div className="w-full h-[500px] py-16 px-8 md:bg-gradient-to-r bg-gradient-to-b from-black to-none flex items-center justify-center">
        <div className="">
          <h1 className="text-center text-4xl font-bold text-white mb-8">{content[language].title}</h1>
          <p className="text-center text-xl text-white max-w-3xl mx-auto">{content[language].description}</p>
        </div>
      </div>
    </div>
  );
};

export default Vision;
