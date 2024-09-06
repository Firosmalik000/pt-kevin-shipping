import { FaPhone, FaFax, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { useLanguage } from '../hooks/UseLanguage';

const Contact = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'Contact Us',
      address: 'Address',
      phone: 'Phone:',
      fax: 'Fax:',
      email: 'Email:',
    },
    zh: {
      title: '联系我们',
      address: '地址',
      phone: '电话:',
      fax: '传真:',
      email: '电子邮件:',
    },
  };

  const contactClass = 'text-lg text-gray-700 mb-4';

  return (
    <section id="contact" className="w-full py-16 px-8 md:px-[100px] bg-gray-100 flex flex-col md:flex-row items-center justify-center gap-x-3">
      <div>
        <h1 className="text-center text-4xl font-bold mb-8 text-gray-800 font-playfair">{content[language].title}</h1>

        <div className="max-w-lg mx-auto text-center p-8 mb-8">
          <div className={contactClass}>
            <div className="flex items-center justify-center">
              <FaMapMarkerAlt className="text-red-500 mr-2 text-2xl" />
              <p className="font-semibold">{content[language].address}</p>
            </div>
            PT Kevin Shipping, Jl. Taman Sari 4 No.7a, RT 001, RW 003, Maphar, Kec. Taman Sari, Jakarta Barat,
          </div>
          <p className={contactClass}>
            <div className="flex items-center justify-center">
              <FaPhone className="text-green-500 mr-2" />
              <span className="font-semibold">{content[language].phone}</span>
            </div>
            (021) 6262571
          </p>
          <p className={contactClass}>
            <div className="flex items-center justify-center">
              <FaFax className="text-blue-500 mr-2" />
              <span className="font-semibold">{content[language].fax}</span>
            </div>
            (021) 6262573
          </p>
          <p className={contactClass}>
            <div className="flex items-center justify-center">
              <FaEnvelope className="text-yellow-500 mr-2" />
              <span className="font-semibold">{content[language].email}</span>
            </div>
            <a href="mailto:Kevinshipping89@gmail.com" className="text-blue-600 underline">
              Kevinshipping89@gmail.com
            </a>
          </p>
        </div>
      </div>

      {/* Map Section */}
      <div className="w-full md:w-[500px] md:h-[500px] h-[300px] rounded-xl overflow-hidden">
        <iframe
          title="Location Map"
          width="100%"
          height="100%"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Jl.Taman%20Sari%204%20No.7a%20Rt%20001%20Rw%20003%20Maphar%20Kec.Taman%20Sari%20Jakarta%20Barat+(Contact%20Us)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          style={{ border: 0 }}
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
