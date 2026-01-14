import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ShopLayout from '../../Components/Shop/ShopLayout';
import ProductCard from '../../Components/Shop/ProductCard';

const ProductListing = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const initialCategory = searchParams.get('category') || 'All';
    const [filter, setFilter] = useState(initialCategory);

    // Mock Data
    const allProducts = [
        { id: 1, name: "Handwoven Bamboo Basket", price: 450, image: "https://images.unsplash.com/photo-1615875605809-90176cd63426?auto=format&fit=crop&w=800&q=80", category: "Crafts", artisan: "Meena Devi" },
        { id: 2, name: "Organic Multifloral Honey", price: 600, image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=800&q=80", category: "Food", artisan: "Forest Collective" },
        { id: 3, name: "Hand-Stitched Kantha Quilt", price: 2500, image: "https://images.unsplash.com/photo-1522008629172-046646b5eac8?auto=format&fit=crop&w=800&q=80", category: "Textiles", artisan: "Radha Women's Group" },
        { id: 4, name: "Natural Clay Water Pot", price: 350, image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=800&q=80", category: "Pottery", artisan: "Ram Lal" },
        { id: 5, name: "Jute Tote Bag", price: 550, image: "https://images.unsplash.com/photo-1590874102752-166258dd83ba?auto=format&fit=crop&w=800&q=80", category: "Accessories", artisan: "Self Help Group 4" },
        { id: 6, name: "Herbal Soap Set", price: 250, image: "https://images.unsplash.com/photo-1600857062241-98e5dba7f214?auto=format&fit=crop&w=800&q=80", category: "Wellness", artisan: "Priti Herbal" },
    ];

    useEffect(() => {
        const categoryFromUrl = searchParams.get('category') || 'All';
        setFilter(categoryFromUrl);
    }, [searchParams]);

    const handleFilterChange = (newCategory) => {
        setFilter(newCategory);
        if (newCategory === 'All') {
            searchParams.delete('category');
        } else {
            searchParams.set('category', newCategory);
        }
        setSearchParams(searchParams);
    };

    const filteredProducts = filter === 'All'
        ? allProducts
        : allProducts.filter(p => p.category === filter);

    const categories = ['All', 'Crafts', 'Food', 'Textiles', 'Pottery', 'Accessories', 'Wellness'];

    return (
        <ShopLayout>
            <div className="bg-gray-50 min-h-screen py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900">All Products</h1>
                            <p className="text-gray-500 mt-1">Showing {filteredProducts.length} results</p>
                        </div>

                        {/* Filter Scrollable Mobile / Grid Desktop */}
                        <div className="mt-4 md:mt-0 overflow-x-auto pb-2 md:pb-0">
                            <div className="flex gap-2">
                                {categories.map(cat => (
                                    <button
                                        key={cat}
                                        onClick={() => handleFilterChange(cat)}
                                        className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${filter === cat
                                            ? 'bg-[#5F9EA0] text-white shadow-md'
                                            : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                                            }`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Product Grid */}
                    {filteredProducts.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {filteredProducts.map(product => (
                                <ProductCard key={product.id} {...product} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20 bg-white rounded-xl border border-gray-200 border-dashed">
                            <p className="text-gray-500 text-lg">No products found in this category.</p>
                            <button onClick={() => handleFilterChange('All')} className="mt-4 text-[#5F9EA0] font-medium hover:underline">
                                View all products
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </ShopLayout>
    );
};

export default ProductListing;
