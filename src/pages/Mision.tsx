import { useLanguage } from '../hooks/UseLanguage';
import ClientImage from '../img/client.jpg';

const Mision = () => {
  const { language } = useLanguage();

  const classMission = 'relative flex flex-col justify-center items-center text-center text-lg md:text-xl w-full max-w-[350px] md:max-w-[500px] p-6 z-10 bg-white rounded-lg shadow-md md:mx-0 mx-auto';

  const content = {
    en: {
      title: 'Our Mission',
      descriptions: [
        'Meet the needs of our clients and proactively coordinate for the smooth running of their operations.',
        'Establish and maintain mutually beneficial business relationships built on trust, respect, and ethical business practices.',
      ],
    },
    zh: {
      title: '我们的使命',
      descriptions: ['满足客户的需求，并积极协调以确保其运营的顺利进行。', '建立并维持基于信任、尊重和道德商业实践的互惠互利的业务关系。'],
    },
  };

  return (
    <section id="mision" className="w-full py-16 px-8 bg-gray-100">
      <div className="flex flex-col md:flex-row gap-16 items-center justify-center">
        <div className="flex flex-col gap-4 w-full md:w-[600px]">
          <img src={ClientImage} alt="Client" className="w-full h-[650px] object-cover rounded-lg shadow-lg" />
        </div>
        <div className="flex flex-col gap-8 w-full md:w-1/2">
          <h1 className="text-center text-3xl md:text-4xl font-bold font-playfair mb-8 text-gray-800">{content[language].title}</h1>
          <div className={classMission}>
            <p className="text-4xl md:text-5xl font-bold absolute top-0 left-0 text-gray-700">01</p>
            <p className="relative z-10 ml-2 mt-5">{content[language].descriptions[0]}</p>
            <div className="w-1/2 md:w-3/4 h-24 md:h-32 bg-orange-300 absolute right-0 top-5 rounded-lg shadow-lg z-[-1]" />
          </div>
          <div className={classMission}>
            <p className="text-4xl md:text-5xl font-bold absolute top-0 left-0 text-gray-700">02</p>
            <p className="relative z-10 ml-2  mt-5">{content[language].descriptions[1]}</p>
            <div className="w-1/2 md:w-3/4 h-24 md:h-32 bg-blue-300 absolute right-0 top-5 rounded-lg shadow-lg z-[-1]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mision;
