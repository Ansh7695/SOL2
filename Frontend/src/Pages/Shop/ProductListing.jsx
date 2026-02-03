import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ShopLayout from '../../Components/Shop/ShopLayout';
import ProductCard from '../../Components/Shop/ProductCard';
import { useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';

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

    const { products, backendUrl } = useContext(ShopContext);

    // Use API products instead of mock data
    const allProducts = products;

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
                            {filteredProducts.map(product => {
                                // Construct Image URL -> if product.image is array use first, prepend backendUrl
                                const imageUrl = product.image && product.image.length > 0
                                    ? `${backendUrl}/images/${product.image[0]}`
                                    : "https://via.placeholder.com/300"; // Fallback

                                return <ProductCard key={product._id} {...product} image={imageUrl} id={product._id} />;
                            })}
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
