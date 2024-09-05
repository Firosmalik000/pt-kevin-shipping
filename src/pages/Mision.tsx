import React from 'react';

const Mision = () => {
  const classMission = 'flex flex-col justify-center items-center text-center text-xl w-[250px] h-[250px] bg-white rounded-lg shadow-lg p-6';

  return (
    <div className="w-full bg-orange-500 py-16 px-8">
      <h1 className="text-center text-4xl font-bold text-white mb-12">Our Mission</h1>
      <div className="flex gap-x-16 items-center justify-center">
        <div className={`${classMission} bg-red-400`}>
          <p>Meet the needs of our clients and proactively coordinate for the smooth running of their operations.</p>
        </div>
        <div className={`${classMission} bg-blue-400`}>
          <p>Establish and maintain mutually beneficial business relationships built on trust, respect, and ethical business practices.</p>
        </div>
      </div>
    </div>
  );
};

export default Mision;
