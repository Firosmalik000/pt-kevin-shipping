import { useLanguage } from '../hooks/LanguageProvider';

const Mision = () => {
  const { language } = useLanguage();

  const classMission = 'flex flex-col justify-center items-center text-center text-xl w-[250px] h-[250px] bg-white rounded-lg shadow-lg p-6';

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
    <div className="w-full bg-orange-500 py-16 px-8">
      <h1 className="text-center text-4xl font-bold text-white mb-12">{content[language].title}</h1>
      <div className="flex gap-x-16 items-center justify-center">
        <div className={`${classMission} bg-red-400`}>
          <p>{content[language].descriptions[0]}</p>
        </div>
        <div className={`${classMission} bg-blue-400`}>
          <p>{content[language].descriptions[1]}</p>
        </div>
      </div>
    </div>
  );
};

export default Mision;
