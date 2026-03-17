import React, { useContext, useState, useEffect } from 'react'
import Title from '../Components/Title'
import CartTotal from '../Components/CartTotal'
import { ShopContext } from '../context/ShopContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import ShopLayout from '../Components/Shop/ShopLayout'
import { Truck } from 'lucide-react'

const PlaceOrder = () => {

    const [method, setMethod] = useState('cod');
    const { navigate, backendUrl, token, cartItems, setCartItems, getCartAmount, delivery_fee, products } = useContext(ShopContext);
    
    // Load saved address from localStorage on initial render
    const [formData, setFormData] = useState(() => {
        const savedAddress = localStorage.getItem('userAddress');
        return savedAddress ? JSON.parse(savedAddress) : {
            firstName: '', lastName: '', email: '',
            street: '', city: '', state: '', zipcode: '', country: '', phone: ''
        };
    });

    // Save address to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('userAddress', JSON.stringify(formData));
    }, [formData]);

    const onChangeHandler = (event) => {
        const name = event.target.name
        const value = event.target.value
        setFormData(data => ({ ...data, [name]: value }))
    }

    const onSubmitHandler = async (event) => {
        event.preventDefault()
        try {
            let orderItems = []

            for (const items in cartItems) {
                for (const item in cartItems[items]) {
                    if (cartItems[items][item] > 0) {
                        const itemInfo = structuredClone(products.find(product => product._id === items))
                        if (itemInfo) {
                            itemInfo.size = item
                            itemInfo.quantity = cartItems[items][item]
                            orderItems.push(itemInfo)
                        }
                    }
                }
            }

            let orderData = {
                address: formData,
                items: orderItems,
                amount: getCartAmount() + delivery_fee
            }

            if (method === 'cod') {
                const response = await axios.post(backendUrl + '/api/order/place', orderData, { headers: { token } })
                if (response.data.success) {
                    setCartItems({})
                    navigate('/orders')
                    toast.success("Order Placed Successfully!");
                } else {
                    toast.error(response.data.message)
                }
            } else {
                toast.error("Only COD available for now")
            }

        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    if (getCartAmount() === 0) {
        return (
            <ShopLayout>
                <div className="flex flex-col items-center justify-center min-h-[60vh] py-20 bg-gray-50">
                    <Truck className="text-gray-300 w-16 h-16 mb-4" />
                    <h2 className="text-xl font-bold text-gray-700 mb-2">No items to checkout</h2>
                    <p className="text-gray-500 mb-6">Add some items to your cart before placing an order.</p>
                    <button onClick={() => navigate('/shop')} className="bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-emerald-700 transition-colors shadow-sm">
                        Go to Shop
                    </button>
                </div>
            </ShopLayout>
        )
    }

    return (
        <ShopLayout>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
                
                <div className='flex items-center justify-between mb-8 pb-4 border-b border-gray-100'>
                    <div className='flex items-center gap-3'>
                        <Truck className="text-emerald-700 w-8 h-8" />
                        <h1 className="text-3xl font-serif font-bold text-gray-900">Checkout</h1>
                    </div>
                </div>

                <form onSubmit={onSubmitHandler} className='flex flex-col lg:flex-row gap-10'>
                    {/* Left Side: Delivery Information */}
                    <div className='flex-1'>
                        <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 sm:p-8">
                            <div className='text-xl font-bold text-gray-900 mb-6'>
                                <Title text1={'DELIVERY'} text2={'INFORMATION'} />
                                <p className="text-sm text-emerald-600 font-normal mt-1">Your address is automatically saved for your next order.</p>
                            </div>
                            
                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
                                    <input required onChange={onChangeHandler} name='firstName' value={formData.firstName} className='w-full border border-gray-300 rounded-lg py-3 px-4 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all' type="text" placeholder='First name' />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
                                    <input required onChange={onChangeHandler} name='lastName' value={formData.lastName} className='w-full border border-gray-300 rounded-lg py-3 px-4 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all' type="text" placeholder='Last name' />
                                </div>
                                <div className="sm:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                                    <input required onChange={onChangeHandler} name='email' value={formData.email} className='w-full border border-gray-300 rounded-lg py-3 px-4 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all' type="email" placeholder='Email address' />
                                </div>
                                <div className="sm:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Street Address *</label>
                                    <input required onChange={onChangeHandler} name='street' value={formData.street} className='w-full border border-gray-300 rounded-lg py-3 px-4 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all' type="text" placeholder='Street address' />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">City *</label>
                                    <input required onChange={onChangeHandler} name='city' value={formData.city} className='w-full border border-gray-300 rounded-lg py-3 px-4 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all' type="text" placeholder='City' />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">State / Province *</label>
                                    <input required onChange={onChangeHandler} name='state' value={formData.state} className='w-full border border-gray-300 rounded-lg py-3 px-4 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all' type="text" placeholder='State' />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Zip / Postal Code *</label>
                                    <input required onChange={onChangeHandler} name='zipcode' value={formData.zipcode} className='w-full border border-gray-300 rounded-lg py-3 px-4 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all' type="text" placeholder='Zipcode' />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Country *</label>
                                    <input required onChange={onChangeHandler} name='country' value={formData.country} className='w-full border border-gray-300 rounded-lg py-3 px-4 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all' type="text" placeholder='Country' />
                                </div>
                                <div className="sm:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                                    <input required onChange={onChangeHandler} name='phone' value={formData.phone} className='w-full border border-gray-300 rounded-lg py-3 px-4 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all' type="tel" placeholder='Phone number' />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Order Summary */}
                    <div className='w-full lg:w-96'>
                        <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 sticky top-8">
                            <h2 className="text-xl font-bold text-gray-900 mb-6">Payment Method</h2>
                            
                            {/* Payment Options */}
                            <div className='flex flex-col gap-3 mb-8'>
                                <label className={`flex items-center p-4 border rounded-xl cursor-pointer transition-all ${method === 'cod' ? 'border-emerald-500 bg-emerald-50' : 'border-gray-200 hover:border-emerald-200'}`}>
                                    <input type="radio" name="paymentMethod" value="cod" checked={method === 'cod'} onChange={() => setMethod('cod')} className="w-4 h-4 text-emerald-600 focus:ring-emerald-500" />
                                    <div className="ml-3">
                                        <span className="block font-semibold text-gray-900">Cash on Delivery</span>
                                        <span className="block text-sm text-gray-500 mt-1">Pay with cash upon delivery</span>
                                    </div>
                                </label>
                                <label className={`flex items-center p-4 border rounded-xl cursor-not-allowed opacity-60 ${method === 'stripe' ? 'border-emerald-500 bg-emerald-50' : 'border-gray-200'}`}>
                                    <input disabled type="radio" name="paymentMethod" value="stripe" checked={method === 'stripe'} onChange={() => setMethod('stripe')} className="w-4 h-4" />
                                    <div className="ml-3">
                                        <span className="block font-semibold text-gray-900">Stripe (Card Payment)</span>
                                        <span className="block text-sm text-gray-500 mt-1">Temporarily Unavailable</span>
                                    </div>
                                </label>
                                <label className={`flex items-center p-4 border rounded-xl cursor-not-allowed opacity-60 ${method === 'razorpay' ? 'border-emerald-500 bg-emerald-50' : 'border-gray-200'}`}>
                                    <input disabled type="radio" name="paymentMethod" value="razorpay" checked={method === 'razorpay'} onChange={() => setMethod('razorpay')} className="w-4 h-4" />
                                    <div className="ml-3">
                                        <span className="block font-semibold text-gray-900">Razorpay</span>
                                        <span className="block text-sm text-gray-500 mt-1">Temporarily Unavailable</span>
                                    </div>
                                </label>
                            </div>

                            <CartTotal />
                            
                            <button type='submit' className='w-full bg-emerald-700 text-white font-bold tracking-wide mt-8 px-8 py-4 rounded-xl hover:bg-emerald-800 focus:ring-4 focus:ring-emerald-200 transition-all shadow-md active:scale-[0.98] flex items-center justify-center gap-2'>
                                <span>PLACE ORDER</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>
                            <p className="text-xs text-center text-gray-500 mt-4">
                                By placing your order, you agree to our Terms of Use and Privacy Policy.
                            </p>
                        </div>
                    </div>
                </form>
            </div>
        </ShopLayout>
    )
}

export default PlaceOrder
