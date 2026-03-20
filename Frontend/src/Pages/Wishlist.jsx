import React, { useContext, useMemo } from 'react';
import { Heart, ShoppingBag } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import ShopLayout from '../Components/Shop/ShopLayout';
import { ShopContext } from '../context/ShopContext';

const Wishlist = () => {
    const {
        wishlistItems,
        products,
        backendUrl,
        removeFromWishlist,
        addToCartWithDefault,
        buyNow
    } = useContext(ShopContext);

    const navigate = useNavigate();

    const wishlistProducts = useMemo(() => {
        return wishlistItems
            .map((id) => products.find((product) => product._id === id))
            .filter(Boolean);
    }, [wishlistItems, products]);

    return (
        <ShopLayout>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex items-center gap-3 mb-8 pb-4 border-b border-gray-100">
                    <Heart className="text-rose-500 w-8 h-8" />
                    <h1 className="text-3xl font-serif font-bold text-gray-900">Your Wishlist</h1>
                </div>

                {wishlistProducts.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-20 bg-gray-50 rounded-2xl border border-dashed border-gray-200 text-center">
                        <Heart className="text-gray-300 w-16 h-16 mb-4" />
                        <h2 className="text-xl font-bold text-gray-700 mb-2">Your wishlist is empty</h2>
                        <p className="text-gray-500 mb-6">Save products you love and buy them later.</p>
                        <Link to="/shop/products" className="bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-emerald-700 transition-colors shadow-sm">
                            Explore Products
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {wishlistProducts.map((product) => {
                            let imageUrl = 'https://via.placeholder.com/300';
                            if (product.image && Array.isArray(product.image) && product.image.length > 0) {
                                imageUrl = product.image[0].startsWith('http')
                                    ? product.image[0]
                                    : `${backendUrl}/images/${product.image[0]}`;
                            }

                            return (
                                <div key={product._id} className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all overflow-hidden">
                                    <div
                                        className="aspect-[4/3] bg-gray-100 overflow-hidden cursor-pointer"
                                        onClick={() => navigate(`/shop/product/${product._id}`)}
                                        role="button"
                                        tabIndex={0}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter' || e.key === ' ') {
                                                e.preventDefault();
                                                navigate(`/shop/product/${product._id}`);
                                            }
                                        }}
                                    >
                                        <img src={imageUrl} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    </div>

                                    <div className="p-5 space-y-4">
                                        <div className="flex items-start justify-between gap-3">
                                            <h3 className="text-lg font-bold text-gray-900 line-clamp-2">{product.name}</h3>
                                            <button
                                                onClick={() => removeFromWishlist(product._id)}
                                                className="text-sm text-rose-500 hover:text-rose-600 font-semibold"
                                            >
                                                Remove
                                            </button>
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <p className="text-xl font-bold text-gray-900">₹{product.price}</p>
                                            <span className="text-xs uppercase tracking-wide px-2 py-1 rounded-full bg-emerald-50 text-emerald-700">
                                                {product.category}
                                            </span>
                                        </div>

                                        <div className="grid grid-cols-2 gap-2">
                                            <button
                                                onClick={() => addToCartWithDefault(product._id)}
                                                className="w-full border border-[#2c5282] text-[#2c5282] py-2 rounded-lg text-sm font-semibold hover:bg-[#2c5282] hover:text-white transition-colors"
                                            >
                                                Add to Cart
                                            </button>
                                            <button
                                                onClick={() => buyNow(product._id)}
                                                className="w-full bg-[#2c5282] text-white py-2 rounded-lg text-sm font-semibold hover:bg-[#1a365d] transition-colors"
                                            >
                                                Buy Now
                                            </button>
                                        </div>

                                        <button
                                            onClick={() => navigate(`/shop/product/${product._id}`)}
                                            className="w-full text-center py-2 rounded-lg bg-gray-50 hover:bg-gray-100 text-sm font-semibold text-gray-700 transition-colors"
                                        >
                                            Open Product
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}

                {wishlistProducts.length > 0 && (
                    <div className="mt-10 flex justify-center">
                        <Link to="/shop/products" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-emerald-700 text-white font-semibold hover:bg-emerald-800 transition-colors">
                            <ShoppingBag size={18} /> Continue Shopping
                        </Link>
                    </div>
                )}
            </div>
        </ShopLayout>
    );
};

export default Wishlist;
