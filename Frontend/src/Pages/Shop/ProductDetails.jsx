import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ShopLayout from '../../Components/Shop/ShopLayout';

const ProductDetails = () => {
    const { id } = useParams();

    // In a real app, fetch data based on ID. For now, we mock.
    const product = {
        id: id,
        name: "Handwoven Bamboo Basket",
        price: 450,
        image: "https://images.unsplash.com/photo-1615875605809-90176cd63426?auto=format&fit=crop&w=1200&q=80",
        category: "Crafts",
        artisan: "Meena Devi",
        description: "This beautiful bamboo basket is handcrafted by Meena Devi, a skilled artisan from our rural collective. It takes approximately 3 days to weave this intricate pattern. Perfect for storage or as a decorative planter.",
        features: [
            "100% Natural Bamboo",
            "Handworn with traditional techniques",
            "Eco-friendly and biodegradable",
            "Supports rural women's livelihood"
        ]
    };

    return (
        <ShopLayout>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex flex-col md:flex-row gap-12">
                    {/* Image Gallery Side */}
                    <div className="w-full md:w-1/2">
                        <div className="rounded-2xl overflow-hidden shadow-lg aspect-square bg-gray-100">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="grid grid-cols-4 gap-4 mt-4">
                            {/* Mock thumbnails */}
                            {[1, 2, 3, 4].map(i => (
                                <div key={i} className="rounded-lg overflow-hidden aspect-square cursor-pointer opacity-70 hover:opacity-100 border border-transparent hover:border-blue-500 transition-all">
                                    <img src={product.image} className="w-full h-full object-cover" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Product Info Side */}
                    <div className="w-full md:w-1/2">
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
                            <h3 className="font-bold text-gray-900 mb-3">Key Features:</h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-600">
                                {product.features.map((feature, idx) => (
                                    <li key={idx}>{feature}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="flex gap-4">
                            <button className="flex-1 bg-[#2c5282] text-white py-4 rounded-xl font-bold text-lg hover:bg-[#1a365d] shadow-lg transform active:scale-95 transition-all">
                                Add to Cart
                            </button>
                            <button className="px-6 py-4 rounded-xl border-2 border-gray-200 hover:border-gray-400 hover:bg-gray-50 transition-all">
                                ❤️
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
