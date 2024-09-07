import one from '../img/1.jpeg';
import three from '../img/3.jpeg';
import four from '../img/4.jpeg';
import five from '../img/5.jpeg';
import six from '../img/6.jpeg';
import seven from '../img/7.jpeg';
import eight from '../img/8.jpeg';
import nine from '../img/9.jpeg';
import eleven from '../img/11.jpeg';
import R1 from '../img/r1.jpg';
import R2 from '../img/r2.jpg';
import R3 from '../img/r3.jpg';

import { useLanguage } from '../hooks/UseLanguage';

const Fleet = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      fleetTitle: 'Our Gallery',
    },
    zh: {
      fleetTitle: '我们的画廊',
    },
  };

  const classImg = 'w-full h-[300px] object-cover rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300';

  return (
    <section id="fleet" className="w-full py-16 bg-gray-50 px-6 md:px-[100px]">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 font-playfair">{content[language].fleetTitle}</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <img src={one} alt="Fleet 1" className={classImg} />
        <img src={eleven} alt="Fleet 2" className={classImg} />
        <img src={three} alt="Fleet 3" className={classImg} />
        <img src={four} alt="Fleet 4" className={classImg} />
        <img src={six} alt="Fleet 5" className={classImg} />
        <img src={five} alt="Fleet 6" className={classImg} />
        <img src={seven} alt="Fleet 7" className={classImg} />
        <img src={eight} alt="Fleet 8" className={classImg} />
        <img src={nine} alt="Fleet 9" className={classImg} />
        <img src={R1} alt="Fleet 9" className={classImg} />
        <img src={R2} alt="Fleet 9" className={classImg} />
        <img src={R3} alt="Fleet 9" className={classImg} />
      </div>
    </section>
  );
};

export default Fleet;
