import React, { useState } from "react";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";
import logo from "../assets/logo.png";
import CouncilPage from "../pages/CouncilPage";
const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToSection = (sectionId) => {
    navigate("/", { state: { scrollTo: sectionId } });
    setIsOpen(false); 
  };

  return (
    <div className="fixed  top-0 left-0 w-full bg-blue-200 z-50 shadow">
      <div className="max-w-[1440px] mx-auto flex flex-nowrap  items-center justify-between px-4 py-2">
        {/* Logo */}
        <img src={logo} alt="Logo" className="w-[3rem] rounded-xl" />

        {/* Social Media Icons */}
        <div className="hidden sm:flex gap-4">
          <a href="https://instagram.com/cesa.manit" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-3xl text-gray-400 hover:text-pink-500 transition" />
          </a>





          <a href="https://linkedin.com/company/cesa-manitbhopal" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-3xl text-gray-400 hover:text-blue-500 transition" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=61573877992376" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-3xl text-gray-400 hover:text-blue-400 transition" />
          </a>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex  space-x-6 text-gray-600 font-semibold">
          <a onClick={() => scrollToSection("home")} className="cursor-pointer hover:text-amber-600">HOME</a>
          <a onClick={() => scrollToSection("about-us")} className="cursor-pointer hover:text-amber-600">ABOUT US</a>
          <a onClick={() => scrollToSection("events")} className="cursor-pointer hover:text-amber-600">EVENTS</a>
          <RouterLink to="/council" className="hover:text-amber-600">COUNCIL</RouterLink>
          <a onClick={() => scrollToSection("contact-us")} className="cursor-pointer hover:text-amber-600">CONTACT US</a>

          
        </div>

        {/* Hamburger Icon (Mobile) */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-3xl text-gray-600 focus:outline-none">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden  bg-blue-100 px-4 py-3 flex flex-col gap-3 text-gray-700 font-semibold">
          <a onClick={() => scrollToSection("home")} className="cursor-pointer hover:text-amber-600">HOME</a>
          <a onClick={() => scrollToSection("about-us")} className="cursor-pointer hover:text-amber-600">ABOUT US</a>
          <a onClick={() => scrollToSection("events")} className="cursor-pointer hover:text-amber-600">EVENTS</a>
          <RouterLink to="/council" className="hover:text-amber-600">COUNCIL</RouterLink>
          <a onClick={() => scrollToSection("contact-us")} className="cursor-pointer hover:text-amber-600">CONTACT US</a>
          
        </div>
      )}
    </div>
  );
};

export default Navbar;
