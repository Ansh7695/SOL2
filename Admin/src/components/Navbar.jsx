import React from 'react'
import { assets } from '../assets/assets'

const Navbar = ({ setToken }) => {
    return (
        <div className="w-full bg-white shadow-sm sticky top-0 z-50 px-[4%] py-3 flex items-center justify-between">
            <div className="flex items-center">
                <img
                    src={assets.Son_Logo}
                    alt="Logo"
                    className="h-14 w-auto object-contain"
                />
            </div>
            <button
                onClick={() => setToken('')}
                className="bg-lime-500 text-white px-5 py-2 sm:px-8 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold hover:bg-lime-600 transition-colors shadow-sm"
            >
                Logout
            </button>
        </div>
    )
}

export default Navbar
