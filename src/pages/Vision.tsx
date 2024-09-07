import { useLanguage } from '../hooks/UseLanguage';
import VisionImg from '../img/visi.jpeg';

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
    <section id="vision" className="w-full h-[550px] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${VisionImg})` }}>
      <div className="w-full h-full py-16 px-8 bg-gradient-to-b md:bg-gradient-to-r from-black/100 via-black/50 to-transparent  flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-8 font-playfair">{content[language].title}</h1>
          <p className="text-xl text-white max-w-3xl mx-auto">{content[language].description}</p>
        </div>
      </div>
    </section>
  );
};

export default Vision;
