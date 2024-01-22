import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState('');

  const scrollToTop = () => {
    // Add your scroll to top logic here
  };

  // Set active link when component mounts or location changes
  React.useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  return (
    <div className="w-[100%] h-[120px] mx-auto flex justify-between items-center bg-gray-200 shadow-lg fixed top-0 z-[1]">
      <div className="contain w-[1600px] h-[70px] bg-gray-200 flex justify-between items-center gap-10">
        
          <Link to="/Home" onClick={scrollToTop}>
          <div className="flex flex-col text-center items-center ml-[65px]">
            <img
              className="w-[150px] h-[50px] rounded-md"
              src="src/resources/logo.png"
              alt="Your Image"
            />
        
          <div className="w-[200px] h-[20px] ">
            <p className="text-black font-poppins text-2xl font-bold uppercase leading-tight">Derutron</p>
          </div>
          </div>
        </Link>

      

        <div className="w-[100%] h-[32px] flex justify-center gap-5">
          <Link to="/Home" onClick={scrollToTop}>
            <div className="w-[90px] h-[30px]">
             <p className={`text-black font-roboto font-bold text-xl ml-5 transition-colors duration-300 hover:text-red-600 ${activeLink === '/Home' ? 'text-blue-800' : ''}`}>HOME</p>
            </div>
          </Link>

          <Link to="/Services" onClick={scrollToTop}>
            <div className="w-[100px] h-[30px]">
             <p className={`text-black font-roboto font-bold text-xl ml-5 transition-colors duration-300 hover:text-red-600 ${activeLink === '/Services' ? 'text-blue-800' : ''}`}>SERVICE</p>
            </div>
          </Link>

          <Link to="/About" onClick={scrollToTop}>
            <div className="w-[120px] h-[30px]">
             <p className={`text-black font-roboto font-bold text-xl ml-5 transition-colors duration-300 hover:text-red-600 ${activeLink === '/About' ? 'text-blue-800' : ''}`}>ABOUT US</p>
            </div>
          </Link>
  
        <Link to="/Testimonials" onClick={scrollToTop}>
            <div className="w-[120px] h-[30px]">
             <p className={`text-black font-roboto font-bold text-xl ml-5 uppercase transition-colors duration-300 hover:text-red-600 ${activeLink === '/Testimonials' ? 'text-blue-800' : ''}`}>Testimonials</p>
            </div>
          </Link>
        </div>

        <Link to="/Contact" onClick={scrollToTop}>
          <div className="w-[170px] h-[70px] border-2 border-[black] flex px-[20px] mr-[100px] py-[18px] justify-center items-center gap-[10px] rounded-[5px] hover:border-red-600">
            <div className="w-[130px] h-[32px] flex justify-center items-center">
            <p className={`text-[black] font-roboto font-bold text-xl uppercase transition-colors duration-300 hover:text-red-600 ${activeLink === '/Contact' ? 'text-blue-800' : ''}`}>Contact Us</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
