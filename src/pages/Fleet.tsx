import { useState } from 'react';
import TugboatImg from '../img/tugboat.jpg';
import BargesImg from '../img/barges.jpeg';
import { useLanguage } from '../hooks/UseLanguage';

const Fleet = () => {
  const [activeTab, setActiveTab] = useState<'tugboats' | 'barges'>('tugboats');
  const { language } = useLanguage();

  const content = {
    en: {
      fleetTitle: 'Our Fleet',
      description:
        'PT Kevin Shipping boasts a modern and well-maintained fleet of barges and tugboats. Our vessels are equipped with the latest technology and safety features to ensure efficient and reliable operations. Here is a glimpse of our fleet:',
      tugboatsTitle: 'Tugboats',
      bargesTitle: 'Barges',
      tugboats: ['TB.PRIMA RAJAWALI 777', 'TB.PRIMA RAJAWALI 888', 'TB.ADHI 1', 'TB.ADHI 2', 'TB.ADHI 3'],
      barges: ['BG.MANDIRI ANGGREK', 'BG.MANDIRI AZALEA', 'BG.INTERNUSA 1', 'BG.INTERNUSA 2', 'BG.INTERNUSA 3'],
      contactText: 'For detailed specifications of each vessel, please contact us.',
    },
    zh: {
      fleetTitle: '我们的船队',
      description: 'PT Kevin Shipping 拥有一支现代化且维护良好的驳船和拖船船队。我们的船只配备了最新的技术和安全功能，以确保高效和可靠的运营。以下是我们船队的一瞥：',
      tugboatsTitle: '拖船',
      bargesTitle: '驳船',
      tugboats: ['TB.PRIMA RAJAWALI 777', 'TB.PRIMA RAJAWALI 888', 'TB.ADHI 1', 'TB.ADHI 2', 'TB.ADHI 3'],
      barges: ['BG.MANDIRI ANGGREK', 'BG.MANDIRI AZALEA', 'BG.INTERNUSA 1', 'BG.INTERNUSA 2', 'BG.INTERNUSA 3'],
      contactText: '有关每艘船的详细规格，请联系我们。',
    },
  };

  return (
    <section id="fleet" className="w-full py-16 bg-gray-50 px-[50px] md:px-[100px]">
      <h1 className="text-center text-4xl font-bold mb-3 text-gray-800 font-playfair">{content[language].fleetTitle}</h1>
      <p className="text-center mb-8 max-w-3xl mx-auto">{content[language].description}</p>

      <div className="flex justify-center mb-8">
        <button
          className={`px-6 py-2 mr-4 font-semibold rounded-lg transition-all duration-300 ${activeTab === 'tugboats' ? 'text-white bg-blue-600 shadow-md' : 'text-gray-800 bg-gray-200 hover:bg-gray-300'}`}
          onClick={() => setActiveTab('tugboats')}
        >
          {content[language].tugboatsTitle}
        </button>
        <button
          className={`px-6 py-2 font-semibold rounded-lg transition-all duration-300 ${activeTab === 'barges' ? 'text-white bg-blue-600 shadow-md' : 'text-gray-800 bg-gray-200 hover:bg-gray-300'}`}
          onClick={() => setActiveTab('barges')}
        >
          {content[language].bargesTitle}
        </button>
      </div>

      {/* Content based on active tab */}
      <div className="flex w-[60%] flex-col md:flex-row gap-x-6 items-center justify-center mx-auto">
        {activeTab === 'tugboats' && (
          <>
            <div className="mb-8 md:mb-0">
              <h2 className="text-2xl font-semibold md:text-left text-center text-gray-800 mb-4">{content[language].tugboatsTitle}</h2>
              <ul className="list-disc list-inside md:text-left text-center text-gray-700 space-y-2">
                {content[language].tugboats.map((tugboat, index) => (
                  <li key={index}>{tugboat}</li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/2">
              <img className="w-full h-auto rounded-xl shadow-lg" src={TugboatImg} alt="Tugboat" />
            </div>
          </>
        )}

        {activeTab === 'barges' && (
          <>
            <div className="md:w-1/2 mb-2">
              <img className="w-full h-auto rounded-xl shadow-lg" src={BargesImg} alt="Barges" />
            </div>
            <div className="mb-8 md:mb-0">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4  md:text-left text-center">{content[language].bargesTitle}</h2>
              <ul className="list-disc list-inside  md:text-left text-center text-gray-700 space-y-2">
                {content[language].barges.map((barge, index) => (
                  <li key={index}>{barge}</li>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>

      <p className="text-lg text-gray-700 text-center mt-8">
        {content[language].contactText}{' '}
        <a href="https://wa.me/+6281293598873" className="text-blue-600 underline">
          contact us
        </a>
        .
      </p>
    </section>
  );
};

export default Fleet;
