import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ id, name, price, image, category, artisan }) => {
    return (
        <div className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col h-full">
            <div className="relative overflow-hidden aspect-[4/3]">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-700 uppercase tracking-wider shadow-sm">
                    {category}
                </div>
            </div>

            <div className="p-5 flex flex-col flex-grow">
                <div className="mb-2">
                    <span className="text-xs text-gray-500 flex items-center gap-1">
                        Made by <span className="text-[#5F9EA0] font-medium">{artisan}</span>
                    </span>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-[#5F9EA0] transition-colors">
                    {name}
                </h3>

                <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-50">
                    <span className="text-xl font-bold text-gray-900">₹{price}</span>
                    <Link
                        to={`/shop/product/${id}`}
                        className="bg-[#2c5282] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#1a365d] transition-colors shadow-md hover:shadow-lg transform active:scale-95"
                    >
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
