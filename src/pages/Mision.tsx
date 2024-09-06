import { useLanguage } from '../hooks/UseLanguage';
import ClientImage from '../img/client.jpg';
import CustomerImg from '../img/customer.jpg';

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
    <section id="mision" className="w-full py-16 px-8 bg-gray-100">
      <h1 className="text-center text-4xl font-bold mb-12">{content[language].title}</h1>
      <div className="flex flex-col md:flex-row gap-16 items-center justify-center">
        <div className="flex flex-col gap-4 w-full md:w-[600px]">
          <img src={ClientImage} alt="Client" className="w-full h-auto object-cover rounded-lg shadow-lg" />
          <img src={CustomerImg} alt="Customer" className="w-full h-auto object-cover rounded-lg shadow-lg" />
        </div>
        <div className="flex flex-col gap-4">
          <div className={`${classMission} bg-red-400`}>
            <p>{content[language].descriptions[0]}</p>
          </div>
          <div className={`${classMission} bg-blue-400`}>
            <p>{content[language].descriptions[1]}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mision;
