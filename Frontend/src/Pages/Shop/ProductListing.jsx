import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ShopLayout from '../../Components/Shop/ShopLayout';
import ProductCard from '../../Components/Shop/ProductCard';

const ProductListing = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    // Get initial values from URL or defaults
    const initialCategory = searchParams.get('category') || 'All';
    const initialSubCategory = searchParams.get('subCategory') || 'All';

    const [mainCategory, setMainCategory] = useState(initialCategory);
    const [subCategory, setSubCategory] = useState(initialSubCategory);

    // Categories Configuration
    const categories = ['All', 'Handicrafts', 'Natural Foods'];

    const subCategoriesMap = {
        'Handicrafts': ['All', 'Pots', 'Accessories', 'Bags'],
        'Natural Foods': ['All', 'Fruits', 'Vegetables']
    };

    // Subcategories to show based on selected main category
    // If 'All' is selected, we don't show subcategories (or could show all unique across all, but usually hidden is cleaner)
    const currentSubCategories = subCategoriesMap[mainCategory] || [];

    // Mock Data
    const allProducts = [
        // Handicrafts
        { id: 1, name: "Handwoven Bamboo Basket", price: 450, image: "https://images.unsplash.com/photo-1615875605809-90176cd63426?auto=format&fit=crop&w=800&q=80", category: "Handicrafts", subCategory: "Accessories", artisan: "Meena Devi" },
        { id: 3, name: "Hand-Stitched Kantha Quilt", price: 2500, image: "https://images.unsplash.com/photo-1522008629172-046646b5eac8?auto=format&fit=crop&w=800&q=80", category: "Handicrafts", subCategory: "Accessories", artisan: "Radha Women's Group" },
        { id: 4, name: "Natural Clay Water Pot", price: 350, image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=800&q=80", category: "Handicrafts", subCategory: "Pots", artisan: "Ram Lal" },
        { id: 5, name: "Jute Tote Bag", price: 550, image: "https://images.unsplash.com/photo-1590874102752-166258dd83ba?auto=format&fit=crop&w=800&q=80", category: "Handicrafts", subCategory: "Bags", artisan: "Self Help Group 4" },

        // Natural Foods
        { id: 2, name: "Organic Multifloral Honey", price: 600, image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=800&q=80", category: "Natural Foods", subCategory: "Fruits", artisan: "Forest Collective" }, // Honey is arguably food/wellness, putting in Fruits for demo or create new sub
        { id: 6, name: "Herbal Soap Set", price: 250, image: "https://images.unsplash.com/photo-1600857062241-98e5dba7f214?auto=format&fit=crop&w=800&q=80", category: "Natural Foods", subCategory: "Vegetables", artisan: "Priti Herbal" }, // Example re-cat
        { id: 7, name: "Fresh Organic Apples", price: 120, image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=800&q=80", category: "Natural Foods", subCategory: "Fruits", artisan: "Hill Farmers" },
        { id: 8, name: "Organic Carrots", price: 60, image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=800&q=80", category: "Natural Foods", subCategory: "Vegetables", artisan: "Green Earth Farm" },
    ];

    // Sync state with URL params on load/change
    useEffect(() => {
        const categoryFromUrl = searchParams.get('category') || 'All';
        const subCategoryFromUrl = searchParams.get('subCategory') || 'All';

        setMainCategory(categoryFromUrl);
        setSubCategory(subCategoryFromUrl);
    }, [searchParams]);

    const handleMainCategoryChange = (newCategory) => {
        setMainCategory(newCategory);
        setSubCategory('All'); // Reset subcategory when main changes

        if (newCategory === 'All') {
            searchParams.delete('category');
            searchParams.delete('subCategory');
        } else {
            searchParams.set('category', newCategory);
            searchParams.delete('subCategory');
        }
        setSearchParams(searchParams);
    };

    const handleSubCategoryChange = (newSubCategory) => {
        setSubCategory(newSubCategory);

        if (newSubCategory === 'All') {
            searchParams.delete('subCategory');
        } else {
            searchParams.set('subCategory', newSubCategory);
        }
        setSearchParams(searchParams);
    };

    const filteredProducts = allProducts.filter(product => {
        // Filter by Main Category
        if (mainCategory !== 'All' && product.category !== mainCategory) {
            return false;
        }
        // Filter by Sub Category
        if (subCategory !== 'All' && product.subCategory !== subCategory) {
            return false;
        }
        return true;
    });

    return (
        <ShopLayout>
            <div className="bg-gray-50 min-h-screen py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="flex flex-col mb-8">
                        <div className="flex items-baseline justify-between mb-4">
                            <div>
                                <h1 className="text-3xl font-bold text-gray-900">
                                    {mainCategory === 'All' ? 'All Products' : mainCategory}
                                </h1>
                                <p className="text-gray-500 mt-1">Showing {filteredProducts.length} results</p>
                            </div>
                        </div>

                        {/* Main Categories */}
                        <div className="overflow-x-auto pb-2">
                            <div className="flex gap-2">
                                {categories.map(cat => (
                                    <button
                                        key={cat}
                                        onClick={() => handleMainCategoryChange(cat)}
                                        className={`px-5 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-200 ${mainCategory === cat
                                            ? 'bg-[#5F9EA0] text-white shadow-md transform scale-105'
                                            : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                                            }`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Sub Categories (Only visible if Main Category is selected and has subcategories) */}
                        {mainCategory !== 'All' && currentSubCategories.length > 0 && (
                            <div className="overflow-x-auto mt-4 pb-2 border-t pt-4 border-gray-200">
                                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 block">
                                    Filter by {mainCategory}
                                </span>
                                <div className="flex gap-2">
                                    {currentSubCategories.map(sub => (
                                        <button
                                            key={sub}
                                            onClick={() => handleSubCategoryChange(sub)}
                                            className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${subCategory === sub
                                                ? 'bg-gray-800 text-white'
                                                : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                                                }`}
                                        >
                                            {sub}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
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
                            <button onClick={() => handleMainCategoryChange('All')} className="mt-4 text-[#5F9EA0] font-medium hover:underline">
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
