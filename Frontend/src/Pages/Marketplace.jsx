import React from 'react'
import { Link } from 'react-router-dom'

const Marketplace = () => {
    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Header Section */}
            <div className="bg-white shadow-sm py-12 px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Our <span className="text-lime-600">Marketplace</span>
                    </h1>
                    <div className="w-20 h-1 bg-lime-500 mx-auto rounded-full mb-4"></div>
                    <p className="text-lg text-gray-600 font-medium tracking-wide uppercase">
                        A Sustainable Enterprises Page
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto py-10 px-6">
                {/* Hero Section */}
                <div className="relative bg-[#1a365d] text-white rounded-3xl overflow-hidden mb-16 shadow-2xl">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560754848-151249b6b907?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] opacity-40 bg-cover bg-center mix-blend-overlay"></div>
                    <div className="relative py-20 px-6 flex flex-col items-center text-center">
                        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 text-white drop-shadow-md">
                            Crafts with a Conscience
                        </h2>
                        <p className="text-lg md:text-xl text-blue-50 max-w-2xl mb-8 drop-shadow-sm">
                            Discover authentic products handmade by artisans. Every purchase builds sustainable livelihoods for women and conservation for nature.
                        </p>
                        <Link to="/shop/products" className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg">
                            View Our Products
                        </Link>
                    </div>
                </div>

                {/* Shop by Category Section */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">Shop by Category</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {['Crafts', 'Textiles', 'Food', 'Pottery'].map((cat, idx) => (
                            <Link to={`/shop/products?category=${cat}`} key={idx} className="group relative rounded-xl overflow-hidden aspect-square shadow-md hover:shadow-xl transition-all">
                                <div className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10`} />
                                <div className={`absolute inset-0 ${idx === 0 ? 'bg-orange-100' : idx === 1 ? 'bg-indigo-100' : idx === 2 ? 'bg-green-100' : 'bg-red-100'}`} />
                                <img
                                    src={`https://source.unsplash.com/random/400x400?${cat.toLowerCase()}`}
                                    alt={cat}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    onError={(e) => e.target.style.display = 'none'}
                                />
                                <div className="absolute bottom-4 left-4 z-20">
                                    <h3 className="text-xl font-bold text-white">{cat}</h3>
                                    <div className="text-sm text-white/80 group-hover:text-white transition-colors">Explore &rarr;</div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Products with Purpose Section */}
                <div className="mb-10 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                    <h2 className="text-2xl font-bold text-[#5F9EA0] mb-4">Products with Purpose</h2>
                    <p className="text-gray-700 leading-relaxed text-lg">
                        SONF engages in limited, ethical production of crafts, farm produce, and honey to support women’s livelihoods and sustain its social and ecological programs.
                    </p>
                    <p className="text-gray-700 leading-relaxed text-lg mt-4 italic font-medium">
                        These enterprises are not profit-driven commercial ventures, but instruments of impact.
                    </p>
                </div>

                {/* Grid for Philosophy and Partners */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    {/* Enterprise Philosophy */}
                    <div className="bg-[#f0fdf4] p-8 rounded-2xl shadow-sm border border-green-100">
                        <h2 className="text-2xl font-bold text-green-800 mb-6 flex items-center">
                            <span className="mr-2">🌱</span> Enterprise Philosophy
                        </h2>
                        <ul className="space-y-4">
                            {[
                                "Enterprises are owned and governed by the non-profit organization.",
                                "Revenues are reinvested into education, livelihoods, and conservation programs.",
                                "Production processes are low-carbon and environmentally responsible.",
                                "Fair pricing ensures dignity and income security for women producers.",
                                "Consumers directly contribute to measurable social and ecological impact."
                            ].map((item, index) => (
                                <li key={index} className="flex items-start text-gray-700">
                                    <span className="text-green-500 mr-2 mt-1">➤</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Who Should Partner or Buy from Us */}
                    <div className="bg-[#fffbeb] p-8 rounded-2xl shadow-sm border border-yellow-100">
                        <h2 className="text-2xl font-bold text-amber-800 mb-6 flex items-center">
                            <span className="mr-2">🤝</span> Who Should Partner or Buy from Us
                        </h2>
                        <ul className="space-y-4">
                            {[
                                "CSR programs and institutions seeking ethical gifting solutions.",
                                "Conscious consumers supporting women-led and eco-positive products.",
                                "Organizations committed to sustainable and inclusive value chains.",
                                "Organizations Supporting Craft revival and Indigenous knowledge."
                            ].map((item, index) => (
                                <li key={index} className="flex items-start text-gray-700">
                                    <span className="text-amber-500 mr-2 mt-1">➤</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Call to Action - Shop Section */}
                <div className="bg-gradient-to-r from-[#2c5282] to-[#2b6cb0] rounded-3xl p-12 text-center text-white shadow-xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] opacity-10 bg-cover bg-center"></div>
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold mb-4">Support Sustainable Livelihoods</h2>
                        <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
                            Explore our curated collection of handcrafted products. Every purchase directly empowers local artisans and supports our conservation efforts.
                        </p>
                        <a href="/shop" className="inline-block bg-white text-blue-900 font-bold py-4 px-10 rounded-full hover:bg-blue-50 transition-colors duration-300 transform hover:scale-105 shadow-lg">
                            View Our Products
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Marketplace
