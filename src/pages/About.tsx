import AboutImage from '../img/about.jpg';
import { useLanguage } from '../hooks/LanguageProvider';

const About = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'About Us',
      description: `PT Kevin Shipping (KS) is a leading provider of barge and tug boat rental services in Indonesia. We offer a wide range of marine transportation services to meet the diverse needs of our clients. Our commitment to safety, reliability, and customer satisfaction has made us a trusted partner for businesses across various industries. We are dedicated to providing efficient and cost-effective solutions for all your maritime transportation requirements.`,
    },
    zh: {
      title: '关于我们',
      description: `凯文航运公司（KS）是印度尼西亚领先的驳船和拖船租赁服务提供商。我们提供广泛的海洋运输服务，以满足客户的多样化需求。我们致力于安全、可靠和客户满意，使我们成为各行业企业的可信赖伙伴。我们致力于为您的海洋运输需求提供高效且具有成本效益的解决方案。`,
    },
  };

  return (
    <div className="w-full bg-blue-600 p-8 px-[100px]">
      <div className="flex flex-col md:flex-row items-center gap-x-3">
        <div className="w-full border-white p-8">
          <h1 className="text-white text-3xl font-bold mb-6 text-center">{content[language].title}</h1>
          <p className="text-white mb-4 indent-8">{content[language].description}</p>
        </div>
        <img src={AboutImage} alt="About PT Kevin Shipping" className="md:w-1/2 w-full object-cover rounded-lg shadow-lg" />
      </div>
    </div>
  );
};

export default About;
