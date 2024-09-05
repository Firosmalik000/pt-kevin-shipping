const Navbar = () => {
  return (
    <div className="relative z-[100] bg-blue-800 h-[70px] w-full px-10  ">
      <div className="h-full flex items-center justify-between text-white ">
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
