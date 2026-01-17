import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Search, Menu, X, ShoppingBag, User } from "lucide-react"; // icons
import { Assets } from "../assets/Assets";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext);

  const logout = () => {
    navigate('/login')
    localStorage.removeItem('token')
    setToken('')
    setCartItems({})
  }

  return (
    <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">

        {/* Logo Section */}
        <div>
          <Link to="/">
            <img
              src={Assets.Son_Logo}
              alt="Logo"
              className="h-16 w-auto max-h-20 object-contain"
            />
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center gap-8 text-base font-medium tracking-wide text-gray-800">
          <Link to="/" className="hover:text-green-600 cursor-pointer">Home</Link>
          <Link to="/about-us" className="hover:text-green-600 cursor-pointer">About Us</Link>
          <Link to="/blogs" className="hover:text-green-600 cursor-pointer">Blogs</Link>
          <Link to="/publications" className="hover:text-green-600 cursor-pointer">Publications</Link>


          {/* Programs Dropdown */}
          <li className="relative group cursor-pointer h-full flex items-center hover:text-green-600">
            <span className="py-4">Programs</span>
            <div className="absolute top-full left-0 w-56 bg-white shadow-lg rounded-md hidden group-hover:block border z-50">
              <ul className="py-2 text-gray-700">
                <Link to="/programs/phulwari">
                  <li className="px-4 py-2 hover:bg-gray-100 hover:text-green-600">Phulwari Program</li>
                </Link>
                <Link to="/programs/kaushal-jyoti">
                  <li className="px-4 py-2 hover:bg-gray-100 hover:text-green-600">Kaushal Jyoti Program</li>
                </Link>
                <Link to="/conservation">
                  <li className="px-4 py-2 hover:bg-gray-100 hover:text-green-600">Conservation Actions</li>
                </Link>
              </ul>
            </div>
          </li>
          <Link to="/impact" className="hover:text-green-600 cursor-pointer">Impact At a Glance</Link>
          <Link to="/marketplace" className="hover:text-green-600 cursor-pointer">Our Marketplace</Link>
        </ul>

        {/* Right Section */}
        <div className="flex items-center gap-6">
          <Search className="text-green-500 w-5 h-5 cursor-pointer hidden md:block" />

          <div className="group relative">
            <User onClick={() => token ? null : navigate('/login')} className="w-5 h-5 cursor-pointer text-gray-700 hover:text-green-600" />
            {/* Dropdown Menu */}
            {token &&
              <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
                <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                  <p className="cursor-pointer hover:text-black">My Profile</p>
                  <p onClick={() => navigate('/orders')} className="cursor-pointer hover:text-black">Orders</p>
                  <p onClick={logout} className="cursor-pointer hover:text-black">Logout</p>
                </div>
              </div>}
          </div>

          <Link to='/cart' className="relative">
            <ShoppingBag className="w-5 h-5 min-w-5 text-gray-700 hover:text-green-600" />
            <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">{getCartCount()}</p>
          </Link>

          <Link to="/contact-us">
            <button className="hidden md:flex bg-lime-500 text-white font-semibold px-5 py-2 rounded hover:bg-lime-600 items-center gap-2">
              CONTACT US <span>→</span>
            </button>
          </Link>

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
          <ul className="flex flex-col items-start gap-4 p-6 text-gray-800 text-base font-medium tracking-wide">
            <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-green-600 cursor-pointer">Home</Link>
            <Link to="/about-us" onClick={() => setIsOpen(false)} className="hover:text-green-600 cursor-pointer">About Us</Link>
            <Link to="/blogs" onClick={() => setIsOpen(false)} className="hover:text-green-600 cursor-pointer">Blogs</Link>
            <Link to="/publications" onClick={() => setIsOpen(false)} className="hover:text-green-600 cursor-pointer">Publications</Link>
            <Link to="/marketplace" onClick={() => setIsOpen(false)} className="hover:text-green-600 cursor-pointer">Our Marketplace</Link>
            <li className="cursor-pointer">
              <span className="hover:text-green-600">Programs</span>
              <ul className="pl-4 mt-2 border-l-2 border-gray-200">
                <Link to="/programs/phulwari" onClick={() => setIsOpen(false)}>
                  <li className="hover:text-green-600 cursor-pointer py-1">Phulwari Program</li>
                </Link>
                <Link to="/programs/kaushal-jyoti" onClick={() => setIsOpen(false)}>
                  <li className="hover:text-green-600 cursor-pointer py-1">Kaushal Jyoti Program</li>
                </Link>
              </ul>
            </li>
            <Link to="/impact" onClick={() => setIsOpen(false)} className="hover:text-green-600 cursor-pointer">Impact at a glance</Link>
            <Link to="/conservation" onClick={() => setIsOpen(false)} className="hover:text-green-600 cursor-pointer">Conservation and Climate actions</Link>
            <li className="flex items-center gap-2">
              <Search className="text-green-500 w-5 h-5 cursor-pointer" />
              <Link to="/contact-us">
                <button className="bg-lime-500 text-white font-semibold px-5 py-2 rounded hover:bg-lime-600">
                  CONTACT US
                </button>
              </Link>
            </li>
            <li onClick={() => { setIsOpen(false); navigate('/login') }} className="cursor-pointer hover:text-green-600">Login / Profile</li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
