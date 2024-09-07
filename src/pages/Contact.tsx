import { FaPhone, FaFax, FaEnvelope } from 'react-icons/fa';
import { useLanguage } from '../hooks/UseLanguage';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
const Contact = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'Contact Us',
      address: 'Address',
      phone: 'Phone:',
      fax: 'Fax:',
      email: 'Email:',
      subtitle: 'Caring and Safety Shipping Partner',
      follow: 'Follow Us',
    },
    zh: {
      title: '联系我们',
      address: '地址',
      phone: '电话:',
      fax: '传真:',
      email: '电子邮件:',
      subtitle: '关怀与安全的航运合作伙伴',
      follow: '跟着我们',
    },
  };

  return (
    <section id="contact" className="w-full py-16 px-8 md:px-[100px]  flex flex-col md:flex-row  justify-between gap-x-5">
      <div className="w-full md:w-1/2">
        {/* penutup */}
        <div className="py-8 border-b-2 my-5">
          <p className="text-xl text-center md:text-left font-semibold font-playfair mb-3">PT Kevin Shipping</p>
          <p className="text-center md:text-left">{content[language].subtitle}</p>
        </div>

        {/* contact */}
        <div className="flex flex-col md:flex-row gap-y-6 md:gap-x-[100px]">
          <div className="text-center md:text-left">
            <h1 className="text-xl font-bold text-gray-800 font-playfair mb-6">{content[language].title}</h1>
            <div className="max-w-lg flex flex-col gap-y-2 mb-8">
              <div className="flex justify-center md:justify-left">
                <FaEnvelope className="mr-2 mt-1 text-yellow-400" /> <p className="">Kevinshipping89@gmail.com</p>
              </div>

              <div className="flex justify-center md:justify-left">
                <FaPhone className="mr-2 text-green-600" /> +6281-2935-98873
              </div>

              <div className="flex justify-center md:justify-left">
                <FaFax className="mr-2 text-blue-600" /> (021) 6262571 (fax)
              </div>
            </div>
          </div>

          <div>
            <div className="max-w-lg flex flex-col gap-y-2 text-gray-800 font-playfair mb-6 text-center md:text-left">
              <p className="text-xl font-bold text-gray-800 font-playfair mb-6">{content[language].follow}</p>
              <div className="flex gap-x-3 justify-center md:justify-left">
                <a href="https://www.instagram.com/kevinshipping?igsh=MWJnMXRmMnp3YjBtNw%3D%3D&utm_source=qr" className="hover:scale-110 transition duration-300">
                  <FaInstagram className="text-xl text-pink-600" />
                </a>
                <a href="https://www.facebook.com/share/kVMNHwmuRw4iNRLB/?mibextid=LQQJ4d" className="hover:scale-110 transition duration-300">
                  <FaFacebook className="text-xl text-blue-500" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div>
        <div className="">
          <div className="py-8  my-5">
            <p className="text-xl font-semibold font-playfair mb-3 text-center md:text-left ">{content[language].address}</p>
            <p className="text-m text-center md:text-left">PT Kevin Shipping, Jl. Taman Sari 4 No.7a, RT 001, RW 003, Maphar, Kec. Taman Sari, Jakarta Barat,</p>
          </div>
        </div>
        <div className="w-full md:w-[500px] md:h-[300px] h-[300px] rounded-xl overflow-hidden">
          <iframe
            title="Location Map"
            width="100%"
            height="100%"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Jl.Taman%20Sari%204%20No.7a%20Rt%20001%20Rw%20003%20Maphar%20Kec.Taman%20Sari%20Jakarta%20Barat+(Contact%20Us)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            style={{ border: 0 }}
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
