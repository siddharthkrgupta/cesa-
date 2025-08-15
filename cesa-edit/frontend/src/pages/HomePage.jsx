import React, { useEffect } from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa"
import EventsSection from "../components/EventsSection";
import EventCard from '../components/EventCard';
import { useLocation } from 'react-router-dom';
import { FaMapMarkerAlt } from "react-icons/fa";
import home from "../assets/home.png";
import bgimg from "../assets/bgimg.png";

const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const el = document.getElementById(location.state.scrollTo);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <>
      {/* Hero Section with Enhanced Design */}
      <section 
        id="home" 
        className="relative pt-[70px] pb-[10px] min-h-screen w-full bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 flex items-center justify-center overflow-hidden"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-2xl animate-ping"></div>
        </div>
        
        {/* Main Content */}
        <div className="relative z-10 text-center px-4 animate-fade-in">
          <div className="mb-8 transform hover:scale-105 transition-transform duration-500">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-cyan-400 via-blue-300 to-indigo-300 bg-clip-text text-transparent mb-4 animate-slide-up">
              CESA MANIT
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full animate-expand"></div>
          </div>
          
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed animate-slide-up-delay">
            Civil Engineering Students' Association - Fostering Excellence in Engineering Education
          </p>
          
          {/* Floating Action Button */}
          <div className="mt-12 animate-bounce-slow">
            <a 
              href="http://localhost:5173/#/council" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full shadow-2xl hover:shadow-cyan-500/25 hover:scale-110 transition-all duration-300 group"
            >
              Discover More
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-blue-300/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-blue-300 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Enhanced About Us Section */}
      <section id="about-us" className="relative pt-[70px] pb-16 w-full bg-gradient-to-b from-slate-50 to-blue-50">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-200/30 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Modern Card Design */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-blue-100/50 p-8 md:p-12 hover:shadow-3xl transition-all duration-500 group">
            
            {/* Animated Heading */}
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-800 via-indigo-700 to-cyan-600 bg-clip-text text-transparent mb-4 group-hover:scale-105 transition-transform duration-500">
                About Us
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
            </div>

            {/* Content Layout */}
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
              
              {/* Image Section with Enhanced Styling */}
              <div className="w-full lg:w-1/2">
                <div className="relative group/image">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl blur-xl group-hover/image:blur-2xl transition-all duration-500"></div>
                  <img
                    src={home}
                    alt="CESA MANIT"
                    className="relative rounded-2xl w-full object-contain shadow-2xl group-hover/image:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-transparent rounded-2xl opacity-0 group-hover/image:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>

              {/* Text Section with Better Typography */}
              <div className="w-full lg:w-1/2">
                <div className="space-y-6">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">Our Mission</h3>
                  </div>
                  
                  <p className="text-lg leading-relaxed text-gray-700 hover:text-gray-900 transition-colors duration-300">
                    The Civil Engineering Students' Association (CESA) at Maulana Azad National Institute of Technology (MANIT), Bhopal, was established in 2025 with the vision to foster a strong academic and professional environment for civil engineering students.
                  </p>
                  
                  <p className="text-lg leading-relaxed text-gray-700 hover:text-gray-900 transition-colors duration-300">
                    As a student-run body, CESA aims to bridge the gap between classroom learning and real-world engineering practices through technical workshops, seminars, industrial visits, and hands-on training sessions.
                  </p>
                  
                  <p className="text-lg leading-relaxed text-gray-700 hover:text-gray-900 transition-colors duration-300">
                    We actively collaborate with industry professionals and alumni, creating valuable networking opportunities while promoting innovation, leadership, and professional ethics among our members.
                  </p>
                  
                  {/* Stats or Highlights */}
                  <div className="grid grid-cols-2 gap-6 mt-8">
                    <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border border-blue-100 hover:scale-105 transition-transform duration-300">
                      <div className="text-3xl font-bold text-blue-700">2025</div>
                      <div className="text-sm text-blue-600">Established</div>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border border-blue-100 hover:scale-105 transition-transform duration-300">
                      <div className="text-3xl font-bold text-blue-700">100+</div>
                      <div className="text-sm text-blue-600">Active Members</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <EventsSection />

      {/* Enhanced Contact Section */}
      <section
        id="contact-us"
        className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 min-h-[50vh] text-white w-full px-4 pt-20 pb-8"
      >
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Contact Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent mb-4">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
            <p className="text-xl text-blue-200 mt-6 max-w-2xl mx-auto">
              Connect with us and be part of the CESA community
            </p>
          </div>

          {/* Contact Info Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            
            {/* Address Card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500 group hover:scale-105">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mr-4 group-hover:rotate-12 transition-transform duration-500">
                  <FaMapMarkerAlt className="text-2xl text-white" />
                </div>
                <h3 className="text-2xl font-bold text-orange-400">Our Location</h3>
              </div>
              <a
                href="https://www.google.com/maps/place/Maulana+Azad+National+Institute+of+Technology:+Department+Of+Civil+Engineering/@23.2143308,77.4046763,17z/data=!3m1!4b1!4m6!3m5!1s0x397c42e428619835:0x63ffa480eee4985!8m2!3d23.2143308!4d77.4072512!16s%2Fg%2F1hhj40t96?entry=ttu&g_ep=EgoyMDI1MDYxNS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-blue-300 hover:text-cyan-300 transition-colors duration-300 hover:underline block leading-relaxed"
              >
                Civil Engineering Department<br />
                MANIT BHOPAL, Madhya Pradesh
              </a>
            </div>

            {/* Contact Card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500 group hover:scale-105">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mr-4 group-hover:rotate-12 transition-transform duration-500">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-orange-400">Email Us</h3>
              </div>
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=cesamanitbhopal@gmail.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-lg text-blue-300 hover:text-cyan-300 transition-colors duration-300 hover:underline"
              >
                cesamanitbhopal@gmail.com
              </a>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="text-center">
            <p className="text-2xl font-semibold text-orange-400 mb-8">
              Connect with us on social media
            </p>
            
            <div className="flex gap-6 justify-center mb-12">
              <a 
                href="https://instagram.com/cesa.manit" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center hover:scale-125 hover:rotate-12 transition-all duration-300 shadow-lg hover:shadow-pink-500/25"
              >
                <FaInstagram className="text-2xl text-white" />
              </a>
              <a 
                href="https://linkedin.com/company/cesa-manitbhopal" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center hover:scale-125 hover:rotate-12 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
              >
                <FaLinkedin className="text-2xl text-white" />
              </a>
              <a 
                href="https://www.facebook.com/profile.php?id=61573877992376" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center hover:scale-125 hover:rotate-12 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
              >
                <FaFacebook className="text-2xl text-white" />
              </a>
            </div>

            {/* Copyright */}
            <div className="border-t border-white/20 pt-8">
              <p className="flex items-center justify-center gap-2 text-gray-400 text-lg">
                <FaRegCopyright className="text-amber-500" />
                2025 Copyright: 
                <span className="text-amber-400 font-semibold">CESA MANIT BHOPAL</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes expand {
          from { width: 0; }
          to { width: 8rem; }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-slide-up {
          animation: slide-up 1s ease-out;
        }
        
        .animate-slide-up-delay {
          animation: slide-up 1s ease-out 0.3s both;
        }
        
        .animate-expand {
          animation: expand 1s ease-out 0.5s both;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
        
        .hover\\:shadow-3xl:hover {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </>
  );
};

export default HomePage;