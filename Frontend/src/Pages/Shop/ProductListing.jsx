import React, { useState, useEffect, useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import ShopLayout from '../../Components/Shop/ShopLayout';
import ProductCard from '../../Components/Shop/ProductCard';
import { ShopContext } from '../../context/ShopContext';
import { Filter, Star, X } from 'lucide-react';

const ProductListing = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const { products, backendUrl } = useContext(ShopContext);

    // Initial Filter States
    const initialCategory = searchParams.get('category') || 'All';
    const [category, setCategory] = useState(initialCategory);
    const [priceRange, setPriceRange] = useState(10000); // 0 to 10000
    const [selectedRating, setSelectedRating] = useState(0); // 0 means all stars
    const [showFilters, setShowFilters] = useState(false); // Mobile toggle

    // Derived: Categories
    const categories = ['All', 'Handicrafts', 'Natural Foods'];

    // Sync URL
    useEffect(() => {
        setCategory(searchParams.get('category') || 'All');
    }, [searchParams]);

    const handleCategoryChange = (cat) => {
        setCategory(cat);
        if (cat === 'All') searchParams.delete('category');
        else searchParams.set('category', cat);
        setSearchParams(searchParams);
    };

    // --- DEMO DATA (Fallback) ---
    const demoProducts = [
        { _id: 'demo1', name: "Artisan Clay Pot", image: ["https://images.unsplash.com/photo-1610701596007-11502861dcfa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"], price: 1200, category: "Handicrafts" },
        { _id: 'demo2', name: "Organic Forest Honey", image: ["https://images.unsplash.com/photo-1587049352846-4a222e784d38?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"], price: 850, category: "Natural Foods" },
        { _id: 'demo3', name: "Woven Bamboo Basket", image: ["https://images.unsplash.com/photo-1596765796720-7798357f8842?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"], price: 1500, category: "Handicrafts" },
        { _id: 'demo4', name: "Herbal Green Tea", image: ["https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"], price: 450, category: "Natural Foods" },
        { _id: 'demo5', name: "Handmade Soap Bar", image: ["https://images.unsplash.com/photo-1600857062241-98e5dba7f214?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"], price: 250, category: "Wellness" },
        { _id: 'demo6', name: "Recycled Paper Notebook", image: ["https://images.unsplash.com/photo-1544816155-12df9643f363?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"], price: 300, category: "Stationery" },
        { _id: 'demo7', name: "Terracotta Vase", image: ["https://images.unsplash.com/photo-1578749556935-ef888147418f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"], price: 900, category: "Handicrafts" },
        { _id: 'demo8', name: "Wild Berry Jam", image: ["https://images.unsplash.com/photo-1606828577543-9824f2b58ef0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"], price: 550, category: "Natural Foods" },
    ];

    // Use products from context OR demo data
    const displayProducts = products.length > 0 ? products : demoProducts;

    // Filter Logic
    const filteredProducts = displayProducts.filter(product => {
        // 1. Category
        if (category !== 'All' && product.category !== category) return false;

        // 2. Price
        if (product.price > priceRange) return false;

        // 3. Rating (Mocked since Model lacks it)
        // Deterministic mock based on ID char code to remain consistent on re-renders, or just random if not crucial.
        // For better UX during "demo", let's assume a random rating attached to the product object or generated unpredictably 
        // implies re-shuffle. To keep it stable, we can use a hash of the ID.
        // Simple hash for demo:
        const mockRating = (product._id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % 5) + 1;
        if (selectedRating > 0 && mockRating < selectedRating) return false;

        return true;
    });

    return (
        <ShopLayout>
            <div className="bg-[#fdfbf7] min-h-screen text-gray-800 font-sans">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

                    {/* Header: Title & Mobile Filter Toggle */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                        <div>
                            <h1 className="text-3xl font-serif font-bold text-emerald-950">
                                {category === 'All' ? 'All Products' : category}
                            </h1>
                            <p className="text-emerald-700/60 mt-1 text-sm">
                                Showing {filteredProducts.length} items
                            </p>
                        </div>
                        <button
                            onClick={() => setShowFilters(true)}
                            className="md:hidden flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm text-sm font-medium"
                        >
                            <Filter size={16} /> Filters
                        </button>
                    </div>

                    <div className="flex flex-col md:flex-row gap-8">

                        {/* LEFT SIDEBAR: Filters */}
                        <aside className={`
                            fixed md:relative inset-y-0 left-0 w-64 bg-white md:bg-transparent z-50 transform 
                            ${showFilters ? 'translate-x-0' : '-translate-x-full'} 
                            md:translate-x-0 transition-transform duration-300 ease-in-out
                            md:block p-6 md:p-0 shadow-2xl md:shadow-none overflow-y-auto
                        `}>
                            {/* Mobile Close Button */}
                            <div className="flex justify-between items-center md:hidden mb-6">
                                <h2 className="text-xl font-bold">Filters</h2>
                                <button onClick={() => setShowFilters(false)}><X size={24} /></button>
                            </div>

                            <div className="space-y-8 sticky top-32">

                                {/* 1. Categories */}
                                <div>
                                    <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900 mb-4">Category</h3>
                                    <div className="space-y-2">
                                        {categories.map(cat => (
                                            <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                                                <div className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${category === cat ? 'border-lime-500' : 'border-gray-300 group-hover:border-lime-400'}`}>
                                                    {category === cat && <div className="w-2 h-2 rounded-full bg-lime-500" />}
                                                </div>
                                                <input
                                                    type="radio"
                                                    name="category"
                                                    value={cat}
                                                    checked={category === cat}
                                                    onChange={() => handleCategoryChange(cat)}
                                                    className="hidden"
                                                />
                                                <span className={`text-sm ${category === cat ? 'text-emerald-900 font-medium' : 'text-gray-600'}`}>{cat}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* 2. Price Range */}
                                <div>
                                    <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900 mb-4">Price</h3>
                                    <input
                                        type="range"
                                        min="0"
                                        max="10000"
                                        step="100"
                                        value={priceRange}
                                        onChange={(e) => setPriceRange(Number(e.target.value))}
                                        className="w-full accent-lime-600 h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                                    />
                                    <div className="flex justify-between text-xs font-mono text-gray-500 mt-2">
                                        <span>₹0</span>
                                        <span className="font-bold text-emerald-700">Max: ₹{priceRange}</span>
                                    </div>
                                </div>

                                {/* 3. Rating */}
                                <div>
                                    <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900 mb-4">Rating</h3>
                                    <div className="space-y-2">
                                        {[5, 4, 3, 2, 1].map(star => (
                                            <div key={star} onClick={() => setSelectedRating(selectedRating === star ? 0 : star)}
                                                className={`flex items-center gap-2 cursor-pointer p-2 rounded-lg transition-colors ${selectedRating === star ? 'bg-lime-50/50' : 'hover:bg-gray-50'}`}>
                                                <div className={`w-4 h-4 border rounded flex items-center justify-center ${selectedRating === star ? 'border-lime-500 bg-lime-500 text-white' : 'border-gray-300'}`}>
                                                    {selectedRating === star && <span className="text-[10px]">✓</span>}
                                                </div>
                                                <div className="flex text-yellow-400">
                                                    {[...Array(5)].map((_, i) => (
                                                        <Star key={i} size={14} fill={i < star ? "currentColor" : "none"} className={i < star ? "" : "text-gray-300"} />
                                                    ))}
                                                </div>
                                                <span className="text-xs text-gray-500">& Up</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Clear Filters */}
                                <button onClick={() => { setCategory('All'); setPriceRange(10000); setSelectedRating(0); }}
                                    className="w-full py-2 text-xs font-bold uppercase tracking-widest text-gray-500 border border-gray-200 hover:bg-gray-50 hover:text-red-500 transition-colors rounded">
                                    Reset Filters
                                </button>
                            </div>

                            {/* Backdrop for Mobile */}
                            {showFilters && <div className="md:hidden fixed inset-0 bg-black/50 z-[-1]" onClick={() => setShowFilters(false)}></div>}
                        </aside>

                        {/* RIGHT GRID: Products */}
                        <main className="flex-1">
                            {filteredProducts.length > 0 ? (
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {filteredProducts.map(product => {
                                        // Handle Image: Check if array, check if absolute URL
                                        let imageUrl = "https://via.placeholder.com/300";
                                        if (product.image && Array.isArray(product.image) && product.image.length > 0) {
                                            if (product.image[0].startsWith('http')) {
                                                imageUrl = product.image[0];
                                            } else {
                                                imageUrl = `${backendUrl}/images/${product.image[0]}`;
                                            }
                                        }

                                        // Mock rating for display match
                                        const mockRating = (product._id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % 5) + 1;

                                        return (
                                            <div key={product._id} className="group relative bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                                                {/* Image */}
                                                <div className="aspect-[4/5] bg-gray-100 relative overflow-hidden">
                                                    <img src={imageUrl} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                                    {product.bestseller && (
                                                        <span className="absolute top-2 left-2 bg-yellow-400 text-black text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wide">
                                                            Best Seller
                                                        </span>
                                                    )}
                                                </div>

                                                {/* Details */}
                                                <div className="p-4">
                                                    <div className="flex justify-between items-start mb-2">
                                                        <h3 className="font-bold text-gray-900 group-hover:text-emerald-700 transition-colors line-clamp-1">{product.name}</h3>
                                                        <span className="font-mono text-lime-700 font-bold">₹{product.price}</span>
                                                    </div>
                                                    <div className="flex items-center gap-1 mb-3">
                                                        {[...Array(5)].map((_, i) => (
                                                            <Star key={i} size={12} fill={i < mockRating ? "#facc15" : "none"} className={i < mockRating ? "text-yellow-400" : "text-gray-300"} />
                                                        ))}
                                                        <span className="text-xs text-gray-400 ml-1">({Math.floor(Math.random() * 50) + 10})</span>
                                                    </div>

                                                    <button className="w-full py-2 rounded-lg border border-emerald-100 text-emerald-800 text-sm font-bold hover:bg-emerald-600 hover:text-white transition-colors">
                                                        View Details
                                                    </button>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            ) : (
                                <div className="h-96 flex flex-col items-center justify-center text-center p-8 bg-white border border-dashed border-gray-200 rounded-2xl">
                                    <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4">
                                        <Filter className="text-gray-300" size={24} />
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">No products found</h3>
                                    <p className="text-gray-500 max-w-xs mx-auto">Try adjusting your filters or checking back later for new inventory.</p>
                                    <button onClick={() => { setCategory('All'); setPriceRange(10000); setSelectedRating(0); }} className="mt-6 text-lime-600 font-bold hover:underline">
                                        Clear all filters
                                    </button>
                                </div>
                            )}
                        </main>

                    </div>
                </div>
            </div>
        </ShopLayout>
    );
};

export default ProductListing;
