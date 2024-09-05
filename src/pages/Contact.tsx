import React from 'react';
import { FaPhone, FaFax, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="w-full py-16 px-[100px] bg-gray-50 flex items-center justify-center gap-x-3">
      <div>
        <h1 className="text-center text-4xl font-bold mb-8 text-gray-800">Contact Us</h1>

        <div className="max-w-lg mx-auto text-center  p-8 mb-8">
          <p className="text-lg text-gray-700 flex items-center justify-center mb-4">
            <FaMapMarkerAlt className="text-red-500 mr-2" />
            PT Kevin Shipping, Jl. Taman Sari 4 No.7a, RT 001, RW 003, Maphar, Kec. Taman Sari, Jakarta Barat
          </p>
          <p className="text-lg text-gray-700 flex items-center justify-center mb-4">
            <FaPhone className="text-green-500 mr-2" />
            <span className="font-semibold">Telepon:</span> (021) 6262571
          </p>
          <p className="text-lg text-gray-700 flex items-center justify-center mb-4">
            <FaFax className="text-blue-500 mr-2" />
            <span className="font-semibold">Fax:</span> (021) 6262573
          </p>
          <p className="text-lg text-gray-700 flex items-center justify-center">
            <FaEnvelope className="text-yellow-500 mr-2" />
            <span className="font-semibold">Email:</span>{' '}
            <a href="mailto:Kevinshipping89@gmail.com" className="text-blue-600 underline">
              Kevinshipping89@gmail.com
            </a>
          </p>
        </div>
      </div>

      {/* Map Section */}
      <div className="w-[500px] h-[500px] rounded-xl">
        <iframe
          title="Location Map"
          width="100%"
          height="100%"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Jl.Taman%20Sari%204%20No.7a%20Rt%20001%20Rw%20003%20Maphar%20Kec.Taman%20Sari%20Jakarta%20Barat+(Contact%20Us)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
