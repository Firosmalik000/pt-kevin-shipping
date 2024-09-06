import { FaAnchor, FaTachometerAlt, FaDollarSign, FaUsers, FaCog } from 'react-icons/fa';
import { useLanguage } from '../hooks/UseLanguage';

const Service = () => {
  const { language } = useLanguage();

  const companyHighlights = {
    en: [
      {
        title: 'Extensive Industry Experience',
        description: 'With over a decade of expertise in marine transport services, we have built a solid foundation in the industry.',
        icon: <FaAnchor className="text-4xl text-blue-500 mb-4" />,
      },
      {
        title: 'Expanding Capabilities',
        description: 'We continuously evolve to meet the diverse and growing needs of our valued customers.',
        icon: <FaTachometerAlt className="text-4xl text-green-500 mb-4" />,
      },
      {
        title: 'Strong Financial Standing',
        description: 'Our robust financial position allows us to cultivate strong and lasting relationships with our clients.',
        icon: <FaDollarSign className="text-4xl text-yellow-500 mb-4" />,
      },
      {
        title: 'Dedicated and Skilled Workforce',
        description: 'Our committed team of professionals plays a vital role in driving significant growth and ensuring excellence in service delivery.',
        icon: <FaUsers className="text-4xl text-red-500 mb-4" />,
      },
      {
        title: 'Comprehensive Support Services',
        description: 'We are dedicated to providing exceptional support, maintenance, project management, and more to ensure the success of your maritime operations.',
        icon: <FaCog className="text-4xl text-purple-500 mb-4" />,
      },
    ],
    zh: [
      {
        title: '丰富的行业经验',
        description: '拥有十多年的海上运输服务经验，我们在行业中建立了坚实的基础。',
        icon: <FaAnchor className="text-4xl text-blue-500 mb-4" />,
      },
      {
        title: '不断扩展的能力',
        description: '我们不断发展，以满足我们宝贵客户的多样化和日益增长的需求。',
        icon: <FaTachometerAlt className="text-4xl text-green-500 mb-4" />,
      },
      {
        title: '强大的财务状况',
        description: '我们稳健的财务状况使我们能够与客户建立稳固而持久的关系。',
        icon: <FaDollarSign className="text-4xl text-yellow-500 mb-4" />,
      },
      {
        title: '敬业且技艺精湛的团队',
        description: '我们敬业的专业团队在推动显著增长和确保服务交付卓越方面发挥了重要作用。',
        icon: <FaUsers className="text-4xl text-red-500 mb-4" />,
      },
      {
        title: '全面的支持服务',
        description: '我们致力于提供卓越的支持、维护、项目管理等，以确保您的海上运营取得成功。',
        icon: <FaCog className="text-4xl text-purple-500 mb-4" />,
      },
    ],
  };

  return (
    <section id="service" className="w-full py-16 md:px-[100px] px-[60px] bg-orange-400">
      {/* Language Selector */}

      <h1 className="text-center text-4xl text-white font-bold mb-8  font-playfair">{language === 'en' ? 'Our Services' : '我们的服务'}</h1>
      <p className="text-center text-xl text-white mb-12">{language === 'en' ? 'We offer a range of services, including:' : '我们提供一系列服务，包括：'}</p>

      {/* Service Highlights */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {companyHighlights[language].map((highlight, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6 text-center hover:scale-110 transition duration-300">
            <div className="flex justify-center mb-4">{highlight.icon}</div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2 font-playfair">{highlight.title}</h2>
            <p className="text-gray-600">{highlight.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
