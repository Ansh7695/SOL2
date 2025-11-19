import React, { useState } from "react";
import { Search, Menu, X } from "lucide-react"; // icons
import { Assets } from "../assets/Assets";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        
        {/* Logo Section */}
        <div>
          <img
            src={Assets.Son_Logo} // apna logo ka path dalna
            alt="Logo"
            className="h-20 w-auto max-h-24 object-contain"
          />
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-semibold text-gray-800">
          <li className="hover:text-green-600 cursor-pointer">HOME</li>
          <li className="hover:text-green-600 cursor-pointer">ABOUT US</li>
          <li className="hover:text-green-600 cursor-pointer">OUR PROJECTS</li>
          <li className="hover:text-green-600 cursor-pointer">PUBLICATIONS</li>
          <li className="hover:text-green-600 cursor-pointer">BLOG</li>
          <li className="hover:text-green-600 cursor-pointer">EVENTS</li>
          <li className="hover:text-green-600 cursor-pointer">CAREERS</li>
        </ul>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <Search className="text-green-500 w-5 h-5 cursor-pointer hidden md:block" />
          <button className="hidden md:flex bg-lime-500 text-white font-semibold px-5 py-2 rounded hover:bg-lime-600 items-center gap-2">
            CONTACT US <span>→</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t shadow-sm">
          <ul className="flex flex-col items-start gap-4 p-6 text-gray-800 font-semibold">
            <li className="hover:text-green-600 cursor-pointer">HOME</li>
            <li className="hover:text-green-600 cursor-pointer">ABOUT US</li>
            <li className="hover:text-green-600 cursor-pointer">OUR PROJECTS</li>
            <li className="hover:text-green-600 cursor-pointer">PUBLICATIONS</li>
            <li className="hover:text-green-600 cursor-pointer">BLOG</li>
            <li className="hover:text-green-600 cursor-pointer">EVENTS</li>
            <li className="hover:text-green-600 cursor-pointer">CAREERS</li>
            <li className="flex items-center gap-2">
              <Search className="text-green-500 w-5 h-5 cursor-pointer" />
              <button className="bg-lime-500 text-white font-semibold px-5 py-2 rounded hover:bg-lime-600">
                CONTACT US
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
