import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Trash2, ShoppingBag } from 'lucide-react';
import Title from '../Components/Title';
import CartTotal from '../Components/CartTotal';
import ShopLayout from '../Components/Shop/ShopLayout';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { products, currency, cartItems, updateQuantity, navigate, backendUrl } = useContext(ShopContext);
    const [cartData, setCartData] = useState([]);

    useEffect(() => {
        if (products.length > 0) {
            const tempData = [];
            for (const items in cartItems) {
                for (const item in cartItems[items]) {
                    if (cartItems[items][item] > 0) {
                        tempData.push({
                            _id: items,
                            size: item,
                            quantity: cartItems[items][item]
                        })
                    }
                }
            }
            setCartData(tempData);
        }
    }, [cartItems, products])

    return (
        <ShopLayout>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
                <div className='flex items-center gap-3 mb-8 pb-4 border-b border-gray-100'>
                    <ShoppingBag className="text-emerald-700 w-8 h-8" />
                    <h1 className="text-3xl font-serif font-bold text-gray-900">Your Cart</h1>
                </div>

                {cartData.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-20 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
                        <ShoppingBag className="text-gray-300 w-16 h-16 mb-4" />
                        <h2 className="text-xl font-bold text-gray-700 mb-2">Your cart is empty</h2>
                        <p className="text-gray-500 mb-6">Looks like you haven't added anything to your cart yet.</p>
                        <Link to="/shop" className="bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-emerald-700 transition-colors shadow-sm">
                            Make a Purchase
                        </Link>
                    </div>
                ) : (
                    <div className="flex flex-col lg:flex-row gap-10">
                        {/* Cart Items */}
                        <div className="flex-1">
                            <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
                                {cartData.map((item, index) => {
                                    const productData = products.find((product) => product._id === item._id);
                                    if (!productData) return null;

                                    let imageUrl = "https://via.placeholder.com/150";
                                    if (productData.image && productData.image.length > 0) {
                                        imageUrl = productData.image[0].startsWith('http') ? productData.image[0] : `${backendUrl}/images/${productData.image[0]}`;
                                    }

                                    return (
                                        <div key={index} className='p-6 border-b border-gray-50 last:border-b-0 hover:bg-gray-50/50 transition-colors group'>
                                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                                                {/* Image */}
                                                <div className="w-24 h-24 sm:w-28 sm:h-28 flex-shrink-0 bg-gray-100 rounded-xl overflow-hidden border border-gray-200">
                                                    <img className='w-full h-full object-cover' src={imageUrl} alt={productData.name} />
                                                </div>

                                                {/* Details */}
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex justify-between items-start">
                                                        <div>
                                                            <h3 className='text-lg font-bold text-gray-900 truncate pr-4'>{productData.name}</h3>
                                                            <p className="text-sm text-gray-500 mt-1">{productData.category}</p>
                                                        </div>
                                                        <p className='text-lg font-bold text-emerald-700'>{currency}{productData.price}</p>
                                                    </div>

                                                    <div className='flex flex-wrap items-center justify-between gap-4 mt-4'>
                                                        <div className="flex items-center gap-3">
                                                            <span className='px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-full uppercase tracking-wider border border-emerald-100'>
                                                                Size: {item.size}
                                                            </span>
                                                        </div>
                                                        
                                                        <div className="flex items-center gap-4">
                                                            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden bg-white">
                                                                <button onClick={() => updateQuantity(item._id, item.size, item.quantity - 1)} className="px-3 py-1 hover:bg-gray-100 text-gray-600 transition-colors">−</button>
                                                                <input 
                                                                    onChange={(e) => {
                                                                        const val = Number(e.target.value);
                                                                        if (val > 0) updateQuantity(item._id, item.size, val);
                                                                    }} 
                                                                    className='w-10 text-center py-1 text-sm focus:outline-none' 
                                                                    type="number" 
                                                                    min={1} 
                                                                    value={item.quantity} 
                                                                />
                                                                <button onClick={() => updateQuantity(item._id, item.size, item.quantity + 1)} className="px-3 py-1 hover:bg-gray-100 text-gray-600 transition-colors">+</button>
                                                            </div>
                                                            <button 
                                                                onClick={() => updateQuantity(item._id, item.size, 0)} 
                                                                className='text-red-400 hover:text-red-600 p-2 rounded-full hover:bg-red-50 transition-colors'
                                                                title="Remove item"
                                                            >
                                                                <Trash2 size={20} />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>

                        {/* Order Summary */}
                        <div className='w-full lg:w-96'>
                            <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 sticky top-8">
                                <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>
                                <CartTotal />
                                <button 
                                    onClick={() => navigate('/place-order')} 
                                    className='w-full bg-black text-white font-bold tracking-wide mt-8 px-8 py-4 rounded-xl hover:bg-gray-800 focus:ring-4 focus:ring-gray-200 transition-all shadow-md active:scale-[0.98]'
                                >
                                    PROCEED TO CHECKOUT
                                </button>
                                <p className="text-xs text-center text-gray-500 mt-4 flex items-center justify-center gap-1">
                                    Secure Checkout 🔒
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </ShopLayout>
    )
}

export default Cart
