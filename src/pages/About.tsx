import AboutImage from '../img/about.jpg';

const About = () => {
  return (
    <div className="w-full bg-blue-600 p-8 px-[100px]">
      <div className="flex flex-col md:flex-row items-center gap-x-3">
        <div className="w-full  border-white p-8">
          <h1 className="text-white text-3xl font-bold mb-6 text-center">About Us</h1>
          <p className="text-white  mb-4  indent-8">
            PT Kevin Shipping (KS) is a leading provider of barge and tug boat rental services in Indonesia. We offer a wide range of marine transportation services to meet the diverse needs of our clients. Our commitment to safety,
            reliability, and customer satisfaction has made us a trusted partner for businesses across various industries. We are dedicated to providing efficient and cost-effective solutions for all your maritime transportation
            requirements.
          </p>
        </div>

        <img src={AboutImage} alt="About PT Kevin Shipping" className="md:w-1/2 w-full object-cover rounded-lg shadow-lg" />
      </div>
    </div>
  );
};

export default About;
