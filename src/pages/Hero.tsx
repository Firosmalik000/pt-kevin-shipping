import React from 'react';

const Hero = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.freightsight.com/dev/8_mar_23_4_cd828dcaab.jpg')`, // ganti dengan URL gambar pilihan
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
        <h1 className="text-5xl font-bold mb-4">PT Kevin Shipping</h1>
        <p className="text-2xl mb-8">Caring and Safety Shipping Partner</p>
        <a href="#services" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-full text-lg font-semibold transition duration-300 ease-in-out">
          Explore Our Services
        </a>
      </div>
    </div>
  );
};

export default Hero;
