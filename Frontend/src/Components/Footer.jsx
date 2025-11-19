import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { Assets } from "../assets/Assets";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-6 md:px-12">
      {/* Top Links */}
      <div className="flex flex-col items-center mb-8">
        <nav className="flex flex-wrap justify-center gap-6 md:gap-8 text-center">
          {["HOME", "ABOUT US", "OUR PROJECTS", "PUBLICATIONS", "BLOG", "EVENTS", "CAREERS"].map((link, index) => (
            <a
              key={index}
              href={`#${link.toLowerCase().replace(/\s/g, "")}`}
              className="text-gray-300 hover:text-green-400 transition font-medium"
            >
              {link}
            </a>
          ))}
        </nav>
      </div>

      {/* Bottom: Logo + Social Links */}
      <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-800 pt-6">
        {/* Logo */}
        <div className="mb-4 md:mb-0">
          <img
            src={Assets.Son_Logo} // Apna logo link
            alt="Logo"
            className="h-20 w-auto object-contain" // height bada kiya
          />
        </div>

        {/* Social / External Links */}
        <div className="flex gap-6 text-gray-300 mt-4 md:mt-0">
          <a href="#" className="hover:text-green-400 transition">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-green-400 transition">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-green-400 transition">
            <FaLinkedinIn />
          </a>
          <a href="#" className="hover:text-green-400 transition">
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Optional: Copyright */}
      <p className="text-gray-500 text-sm text-center mt-6">
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
