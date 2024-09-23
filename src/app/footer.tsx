import React from "react";
import { FiFacebook, FiTwitter, FiInstagram, FiMail, FiPhone } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="border-t border-slate-700 mt-8 py-4 text-center text-slate-500"></div>
        <div className="flex flex-wrap justify-between items-center mb-8">
          {/* Logo or Title */}
          <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
            <h2 className="text-3xl font-bold font-mono">Brand</h2>
            <p className="text-slate-400 mt-2">
              High-quality products and services delivered with care.
            </p>
          </div>

          {/* Contact Info */}
          <div className="w-full lg:w-1/3 text-slate-400 pl-28">
            <div className="flex items-center space-x-2">
              <FiMail className="text-cyan-500" />
              <a href="mailto:support@yourbrand.com" className="hover:text-cyan-500">
                support@yourbrand.com
              </a>
            </div>
            <div className="flex items-center space-x-2 mt-2">
              <FiPhone className="text-cyan-500" />
              <span>+123 456 7890</span>
            </div>
          </div>

          {/* Navigation Links as List */}
          <div className="w-full lg:w-1/3 flex justify-around lg:justify-center">
            <ul className="space-y-2 text-center lg:text-left">
              <li>
                <a href="#main-section" className="hover:text-cyan-500">
                  Home
                </a>
              </li>
              <li>
                <a href="#shop-section" className="hover:text-cyan-500">
                  Shop
                </a>
              </li>
              <li>
                <a href="#services-section" className="hover:text-cyan-500">
                  Services
                </a>
              </li>
              <li>
                <a href="#about-us-section" className="hover:text-cyan-500">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact-section" className="hover:text-cyan-500">
                  Contact
                </a>
              </li>
            </ul>

          </div>


        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 text-slate-400">
          <a href="#" className="hover:text-cyan-500">
            <FiFacebook className="w-6 h-6" />
          </a>
          <a href="#" className="hover:text-cyan-500">
            <FiTwitter className="w-6 h-6" />
          </a>
          <a href="#" className="hover:text-cyan-500">
            <FiInstagram className="w-6 h-6" />
          </a>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-slate-700 mt-8 pt-4 text-center text-slate-500">
          <p>&copy; {new Date().getFullYear()} Your Brand. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
