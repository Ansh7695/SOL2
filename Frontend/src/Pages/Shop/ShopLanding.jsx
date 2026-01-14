import React from 'react';
import { Link } from 'react-router-dom';
import ShopLayout from '../../Components/Shop/ShopLayout';
import ProductCard from '../../Components/Shop/ProductCard';

const ShopLanding = () => {
    const featuredProducts = [
        { id: 1, name: "Handwoven Bamboo Basket", price: 450, image: "https://images.unsplash.com/photo-1615875605809-90176cd63426?auto=format&fit=crop&w=800&q=80", category: "Crafts", artisan: "Meena Devi" },
        { id: 2, name: "Organic Multifloral Honey", price: 600, image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=800&q=80", category: "Food", artisan: "Forest Collective" },
        { id: 3, name: "Hand-Stitched Kantha Quilt", price: 2500, image: "https://images.unsplash.com/photo-1522008629172-046646b5eac8?auto=format&fit=crop&w=800&q=80", category: "Textiles", artisan: "Radha Women's Group" },
        { id: 4, name: "Natural Clay Water Pot", price: 350, image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=800&q=80", category: "Pottery", artisan: "Ram Lal" },
    ];

    return (
        <ShopLayout>
            {/* Hero Section */}
            <div className="relative bg-[#1a365d] text-white">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560754848-151249b6b907?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] opacity-30 bg-cover bg-center mix-blend-overlay"></div>
                <div className="relative max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
                        Crafts with a Conscience
                    </h1>
                    <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mb-10">
                        Discover authentic products handmade by artisans. Every purchase builds sustainable livelihoods for women and conservation for nature.
                    </p>
                    <div className="flex gap-4">
                        <Link to="/shop/products" className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg">
                            Shop All Products
                        </Link>
                        <a href="#featured" className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all">
                            Featured
                        </a>
                    </div>
                </div>
            </div>

            {/* Featured Categories */}
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">Shop by Category</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {['Crafts', 'Textiles', 'Food', 'Pottery'].map((cat, idx) => (
                        <Link to={`/shop/products?category=${cat}`} key={idx} className="group relative rounded-xl overflow-hidden aspect-square shadow-md hover:shadow-xl transition-all">
                            <div className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10`} />
                            {/* Placeholder gradients for categories */}
                            <div className={`absolute inset-0 ${idx === 0 ? 'bg-orange-100' : idx === 1 ? 'bg-indigo-100' : idx === 2 ? 'bg-green-100' : 'bg-red-100'
                                }`} />
                            <img
                                src={`https://source.unsplash.com/random/400x400?${cat.toLowerCase()}`}
                                alt={cat}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                onError={(e) => e.target.style.display = 'none'} // Fallback if unsplash source fails
                            />
                            <div className="absolute bottom-4 left-4 z-20">
                                <h3 className="text-xl font-bold text-white">{cat}</h3>
                                <div className="text-sm text-white/80 group-hover:text-white transition-colors">Explore &rarr;</div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Featured Products */}
            <div id="featured" className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-end mb-10">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-800">New Arrivals</h2>
                            <p className="text-gray-500 mt-2">Fresh from our artisans' workshops</p>
                        </div>
                        <Link to="/shop/products" className="text-[#5F9EA0] font-semibold hover:text-[#4a8a8c] flex items-center">
                            View All <span className="ml-2">&rarr;</span>
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {featuredProducts.map(product => (
                            <ProductCard key={product.id} {...product} />
                        ))}
                    </div>
                </div>
            </div>

            {/* Impact Note */}
            <div className="bg-[#f0fdf4] border-y border-green-100 py-16">
                <div className="max-w-screen-xl mx-auto px-6 text-center">
                    <span className="text-4xl mb-4 block">🌿</span>
                    <h2 className="text-3xl font-bold text-green-800 mb-4">Your Purchase Has Power</h2>
                    <p className="text-lg text-green-700 max-w-2xl mx-auto mb-8">
                        100% of profits from this store are reinvested into our community programs, supporting education, women's empowerment, and nature conservation.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div className="p-6 bg-white rounded-xl shadow-sm">
                            <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
                            <div className="text-gray-600">Artisans Supported</div>
                        </div>
                        <div className="p-6 bg-white rounded-xl shadow-sm">
                            <div className="text-3xl font-bold text-green-600 mb-2">₹2L+</div>
                            <div className="text-gray-600">Community Revenue</div>
                        </div>
                        <div className="p-6 bg-white rounded-xl shadow-sm">
                            <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
                            <div className="text-gray-600">Eco-Friendly</div>
                        </div>
                    </div>
                </div>
            </div>
        </ShopLayout>
    );
};

export default ShopLanding;
