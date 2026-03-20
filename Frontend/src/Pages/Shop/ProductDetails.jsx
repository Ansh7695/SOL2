import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ShopLayout from '../../Components/Shop/ShopLayout';
import { ShopContext } from '../../context/ShopContext';

const ProductDetails = () => {
    const { id } = useParams();
    const { products, backendUrl, addToCart, buyNow, toggleWishlist, isInWishlist } = useContext(ShopContext);
    const [selectedImg, setSelectedImg] = useState('');
    const [selectedSize, setSelectedSize] = useState('');

    const realProduct = products?.find(p => p._id === id);

    useEffect(() => {
        setSelectedImg('');
        if (realProduct?.sizes?.length) {
            setSelectedSize(realProduct.sizes[0]);
        } else {
            setSelectedSize('Standard');
        }
    }, [id, realProduct]);

    let product;

    if (realProduct) {
        let imageUrl = "https://via.placeholder.com/300";
        if (realProduct.image && Array.isArray(realProduct.image) && realProduct.image.length > 0) {
            imageUrl = realProduct.image[0].startsWith('http') ? realProduct.image[0] : `${backendUrl}/images/${realProduct.image[0]}`;
        }
        
        let allImages = [imageUrl];
        if (realProduct.image && Array.isArray(realProduct.image)) {
            allImages = realProduct.image.map(img => img.startsWith('http') ? img : `${backendUrl}/images/${img}`);
        }

        product = {
            id: realProduct._id,
            name: realProduct.name,
            price: realProduct.price,
            image: imageUrl,
            images: allImages,
            category: realProduct.category,
            artisan: realProduct.subCategory || "Nature Artisans",
            description: realProduct.description,
            features: realProduct.sizes && realProduct.sizes.length > 0 ? realProduct.sizes : ["100% Authentic", "High Quality", "Sustainable"]
        };
    } else {
        // Fallback for demo products or loading state
        product = {
            id: id,
            name: "Loading Product...",
            price: 0,
            image: "https://via.placeholder.com/300",
            images: [],
            category: "Category",
            artisan: "Artisan",
            description: "Loading description...",
            features: []
        };
    }

    return (
        <ShopLayout>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex flex-col md:flex-row gap-12">
                    {/* Image Gallery Side */}
                    <div className="w-full md:w-[40%]">
                        <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100 aspect-square bg-gray-50 flex items-center justify-center p-4">
                            <img
                                src={selectedImg || product.image}
                                alt={product.name}
                                className="max-w-full max-h-full object-contain"
                            />
                        </div>
                        <div className="flex gap-3 mt-4 overflow-x-auto pb-2">
                            {product.images.map((img, i) => (
                                <div key={i} onClick={() => setSelectedImg(img)} className={`min-w-[80px] w-20 h-20 rounded-lg overflow-hidden cursor-pointer transition-all bg-gray-50 p-1 border ${selectedImg === img || (!selectedImg && i === 0) ? 'border-emerald-500 opacity-100' : 'border-gray-200 opacity-70 hover:opacity-100 hover:border-emerald-300'}`}>
                                    <img src={img} alt={`${product.name} thumbnail ${i + 1}`} className="w-full h-full object-contain" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Product Info Side */}
                    <div className="w-full md:w-[60%] md:pl-8">
                        <div className="mb-6">
                            <span className="bg-[#5F9EA0]/10 text-[#5F9EA0] px-3 py-1 rounded-full text-sm font-semibold uppercase tracking-wide">
                                {product.category}
                            </span>
                            <h1 className="text-4xl font-bold text-gray-900 mt-4 mb-2">{product.name}</h1>
                            <div className="flex items-center gap-2 mb-6">
                                <span className="text-gray-600">Handcrafted by</span>
                                <span className="font-semibold text-gray-800 border-b-2 border-[#5F9EA0]">{product.artisan}</span>
                            </div>
                            <div className="text-3xl font-bold text-gray-900 mb-6">₹{product.price}</div>
                        </div>

                        <div className="prose prose-lg text-gray-600 mb-8">
                            <p>{product.description}</p>
                        </div>

                        <div className="mb-8">
                            <h3 className="font-bold text-gray-900 mb-3 uppercase text-sm tracking-wider">Available Sizes / Options</h3>
                            <div className="flex flex-wrap gap-2">
                                {product.features.map((size, idx) => (
                                    <button 
                                        key={idx} 
                                        onClick={() => setSelectedSize(size)}
                                        className={`px-4 py-2 border rounded-md text-sm font-medium transition-colors cursor-pointer ${
                                            selectedSize === size 
                                                ? 'border-emerald-500 bg-emerald-50 text-emerald-700' 
                                                : 'border-gray-200 text-gray-700 hover:border-emerald-500 bg-white'
                                        }`}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <button 
                                onClick={() => addToCart(product.id, selectedSize || product.features?.[0] || 'Standard')}
                                className="sm:col-span-1 bg-[#2c5282] text-white py-4 rounded-xl font-bold text-lg hover:bg-[#1a365d] shadow-lg transform active:scale-95 transition-all"
                            >
                                Add to Cart
                            </button>
                            <button
                                onClick={() => buyNow(product.id, selectedSize || product.features?.[0] || 'Standard')}
                                className="sm:col-span-1 bg-emerald-700 text-white py-4 rounded-xl font-bold text-lg hover:bg-emerald-800 shadow-lg transform active:scale-95 transition-all"
                            >
                                Buy Now
                            </button>
                            <button
                                onClick={() => toggleWishlist(product.id)}
                                className={`sm:col-span-1 px-6 py-4 rounded-xl border-2 transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500 font-semibold ${isInWishlist(product.id) ? 'border-red-300 bg-red-50 text-red-600 hover:bg-red-100' : 'border-gray-200 hover:border-gray-400 hover:bg-gray-50 text-gray-700'}`}
                            >
                                {isInWishlist(product.id) ? '❤ Wishlisted' : '♡ Add to Wishlist'}
                            </button>
                        </div>

                        <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-100">
                            <div className="flex items-start gap-3">
                                <span className="text-2xl">🌱</span>
                                <div>
                                    <h4 className="font-bold text-blue-900">Sustainable Impact</h4>
                                    <p className="text-sm text-blue-800 mt-1">
                                        Your purchase of this item contributes ₹{Math.round(product.price * 0.4)} directly to the artisan's household income.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ShopLayout>
    );
};

export default ProductDetails;
