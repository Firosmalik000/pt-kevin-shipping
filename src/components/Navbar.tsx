import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`fixed top-0 z-[100] h-[70px] w-full px-10 transition-colors duration-300 ${isScrolled ? 'bg-white shadow-xl text-black' : 'bg-blue-800 text-white'}`}>
      <div className="h-full flex items-center justify-between ">
        <div className="text-3xl">Kevin Shipping</div>
        <div className="flex gap-x-4">
          <div>About Us</div>
          <div>Vision</div>
          <div>Mission</div>
          <div>Service</div>
          <div>Contact Us</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
