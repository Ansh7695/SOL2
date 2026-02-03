import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { Assets } from "../assets/Assets";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 pt-16 pb-8 px-6 md:px-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-col lg:flex-row justify-between items-center lg:items-start gap-10 mb-12">

          {/* Logo Section */}
          <div className="flex flex-col items-center lg:items-start">
            <div className="p-2 mb-4 inline-block">
              <img
                src={Assets.Son_Logo}
                alt="Logo"
                className="h-16 w-auto object-contain"
              />
            </div>
            <p className="text-gray-600 text-sm max-w-xs text-center lg:text-left leading-relaxed font-medium">
              Empowering communities and preserving nature for a sustainable future.
              Join us in making a difference today.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col sm:flex-row gap-10 lg:gap-20 text-center sm:text-left">

            {/* Column 1: Quick Links */}
            <div className="flex flex-col gap-4">
              <h3 className="font-bold text-gray-900 uppercase tracking-wider text-sm mb-2">Quick Links</h3>
              <Link to="/" className="text-gray-600 hover:text-green-600 transition-colors font-medium text-sm">Home</Link>
              <Link to="/about-us" className="text-gray-600 hover:text-green-600 transition-colors font-medium text-sm">About Us</Link>
              <Link to="/marketplace" className="text-gray-600 hover:text-green-600 transition-colors font-medium text-sm">Our Marketplace</Link>
              <Link to="/contact-us" className="text-gray-600 hover:text-green-600 transition-colors font-medium text-sm">Contact Us</Link>
            </div>

            {/* Column 2: Programs */}
            <div className="flex flex-col gap-4">
              <h3 className="font-bold text-gray-900 uppercase tracking-wider text-sm mb-2">Our Programs</h3>
              <Link to="/programs/phulwari" className="text-gray-600 hover:text-green-600 transition-colors font-medium text-sm">Phulwari Program</Link>
              <Link to="/programs/kaushal-jyoti" className="text-gray-600 hover:text-green-600 transition-colors font-medium text-sm">Kaushal Jyoti Program</Link>
              <Link to="/conservation" className="text-gray-600 hover:text-green-600 transition-colors font-medium text-sm">Conservation Actions</Link>
              <Link to="/impact" className="text-gray-600 hover:text-green-600 transition-colors font-medium text-sm">Impact At a Glance</Link>
            </div>

            {/* Column 3: Contact Details */}
            <div className="flex flex-col gap-4">
              <h3 className="font-bold text-gray-900 uppercase tracking-wider text-sm mb-2">Contact Us</h3>
              <div className="flex items-start gap-3 text-gray-600 text-sm font-medium">
                <span className="mt-1 text-green-600">📍</span>
                <p>31, Shivji Marg, Rangpur,<br />New Delhi, India - 110037</p>
              </div>
              <div className="flex items-center gap-3 text-gray-600 text-sm font-medium">
                <span className="text-green-600">📞</span>
                <p> +91 99584 18444</p>
              </div>
              <div className="flex items-center gap-3 text-gray-600 text-sm font-medium">
                <span className="text-green-600">✉️</span>
                <p>contact@schoolofnature.org</p>
              </div>
            </div>

          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Social Links */}
          <div className="flex gap-5">
            {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map((Icon, idx) => (
              <a
                key={idx}
                href="#"
                className="bg-gray-100 p-2.5 rounded-full hover:bg-lime-500 hover:text-white transition-all duration-300 text-gray-600"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-gray-500 text-sm font-medium text-center md:text-left">
            &copy; {new Date().getFullYear()} School of Nature Foundation. All rights reserved. <span className="hidden sm:inline">|</span> <span className="block sm:inline mt-1 sm:mt-0">Developed by <a href="http://www.owlmediahouse.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-600 transition-colors">Owl Media House</a></span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
