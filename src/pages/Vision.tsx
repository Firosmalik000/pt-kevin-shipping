import VisionImg from '../img/vision.jpg';

const Vision = () => {
  return (
    <div className="w-full h-[500px]  bg-cover bg-center bg-no-repeat  " style={{ backgroundImage: `url(${VisionImg})` }}>
      <div className="w-full h-[500px] py-16 px-8 md:bg-gradient-to-r bg-gradient-to-b from-black  to-none flex items-center justify-center">
        <div className="">
          <h1 className="text-center text-4xl font-bold text-white mb-8">Our Vision</h1>
          <p className="text-center text-xl text-white max-w-3xl mx-auto">To be a leading national shipping company that delivers exceptional services to our clients, fulfilling their sea transportation needs with competitive pricing.</p>
        </div>
      </div>
    </div>
  );
};

export default Vision;
