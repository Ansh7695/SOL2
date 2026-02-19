import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const ShopLayout = ({ children }) => {
    const location = useLocation();
    const isHome = location.pathname === '/shop';

    return (
        <div className="min-h-screen flex flex-col bg-gray-50">

            {/* Shop Specific Header */}
            <div className="bg-white border-b border-gray-200 sticky top-[96px] z-40 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-6">
                        <Link to="/shop" className={`text-sm font-medium hover:text-[#5F9EA0] transition-colors ${isHome ? 'text-[#5F9EA0]' : 'text-gray-600'}`}>
                            Shop Home
                        </Link>
                        <Link to="/shop/products" className={`text-sm font-medium hover:text-[#5F9EA0] transition-colors ${location.pathname === '/shop/products' ? 'text-[#5F9EA0]' : 'text-gray-600'}`}>
                            All Products
                        </Link>
                    </div>
                    <div className="text-sm text-gray-500 italic hidden sm:block">
                        Empowering Artisans, Transforming Lives
                    </div>
                </div>
            </div>

            <main className="flex-grow">
                {children}
            </main>
        </div>
    );
};

export default ShopLayout;
