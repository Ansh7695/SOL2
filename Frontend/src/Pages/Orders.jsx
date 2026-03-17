import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../Components/Title';
import axios from 'axios';
import ShopLayout from '../Components/Shop/ShopLayout';
import { PackageOpen, Package, RefreshCw } from 'lucide-react';

const Orders = () => {

    const { backendUrl, token, currency, navigate } = useContext(ShopContext);
    const [orderData, setOrderData] = useState([])
    const [loading, setLoading] = useState(true)

    const loadOrderData = async () => {
        setLoading(true);
        try {
            if (!token) {
                setLoading(false);
                return null
            }
            const response = await axios.post(backendUrl + '/api/order/userorders', {}, { headers: { token } })
            if (response.data.success) {
                let allOrdersItem = []
                response.data.orders.map((order) => {
                    order.items.map((item) => {
                        item['status'] = order.status
                        item['payment'] = order.payment
                        item['paymentMethod'] = order.paymentMethod
                        item['date'] = order.date
                        allOrdersItem.push(item)
                    })
                })
                setOrderData(allOrdersItem.reverse())
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        loadOrderData()
    }, [token])

    if (loading) {
        return (
            <ShopLayout>
                <div className="flex items-center justify-center min-h-[60vh]">
                    <div className="w-16 h-16 border-4 border-emerald-600 border-t-transparent rounded-full animate-spin"></div>
                </div>
            </ShopLayout>
        );
    }

    return (
        <ShopLayout>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-[60vh]'>

                <div className='flex items-center gap-3 mb-8 pb-4 border-b border-gray-100'>
                    <Package className="text-emerald-700 w-8 h-8" />
                    <h1 className="text-3xl font-serif font-bold text-gray-900">My Orders</h1>
                </div>

                {orderData.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-20 bg-white border border-gray-100 rounded-3xl shadow-sm">
                        <PackageOpen className="text-gray-300 w-24 h-24 mb-6" />
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">No orders yet</h2>
                        <p className="text-gray-500 mb-8 max-w-sm text-center">Looks like you haven't made any purchases yet. Explore our marketplace for amazing natural products!</p>
                        <button 
                            onClick={() => navigate('/marketplace')} 
                            className="bg-emerald-600 text-white px-8 py-3.5 rounded-xl font-medium hover:bg-emerald-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 active:scale-95"
                        >
                            Order Now
                        </button>
                    </div>
                ) : (
                    <div className="space-y-6">
                        {orderData.map((item, index) => (
                            <div key={index} className='bg-white border border-gray-100 rounded-2xl shadow-sm p-5 sm:p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6 transition-all hover:shadow-md'>
                                
                                <div className='flex items-start gap-4 sm:gap-6 flex-1'>
                                    <div className="w-20 sm:w-28 h-20 sm:h-28 flex-shrink-0 rounded-xl overflow-hidden bg-gray-50 border border-gray-100">
                                        <img className='w-full h-full object-cover mix-blend-multiply' src={item.image[0]} alt={item.name} />
                                    </div>
                                    <div className="flex flex-col justify-center h-full space-y-1">
                                        <p className='text-lg font-bold text-gray-900 leading-tight'>{item.name}</p>
                                        
                                        <div className='flex items-center gap-4 text-sm text-gray-600 bg-gray-50 px-3 py-1.5 rounded-lg w-max mt-2'>
                                            <p className="font-semibold text-emerald-700">{currency}{item.price}</p>
                                            <div className="w-1 h-1 rounded-full bg-gray-300"></div>
                                            <p>Qty: {item.quantity}</p>
                                            <div className="w-1 h-1 rounded-full bg-gray-300"></div>
                                            <p>Size: {item.size}</p>
                                        </div>
                                        
                                        <div className="pt-2 text-sm text-gray-500">
                                            <p>Ordered on: <span className='text-gray-800 font-medium'>{new Date(item.date).toDateString()}</span></p>
                                            <p>Payment: <span className='text-gray-800 font-medium capitalize'>{item.paymentMethod}</span></p>
                                        </div>
                                    </div>
                                </div>

                                <div className='md:w-1/3 flex flex-col sm:flex-row md:flex-col lg:flex-row items-start sm:items-center md:items-start lg:items-center justify-between gap-4 md:border-l md:border-gray-100 md:pl-6 pt-4 md:pt-0 border-t border-gray-100 sm:border-t-0'>
                                    <div className='flex items-center gap-2 bg-emerald-50 px-3 py-1.5 rounded-full'>
                                        <div className='w-2 h-2 rounded-full bg-emerald-500 animate-pulse'></div>
                                        <p className='text-sm font-medium text-emerald-700'>{item.status}</p>
                                    </div>
                                    <button 
                                        onClick={loadOrderData} 
                                        className='flex items-center gap-2 border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-50 hover:text-emerald-600 transition-colors w-full sm:w-auto justify-center'
                                    >
                                        <RefreshCw className="w-4 h-4" />
                                        Track Order
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </ShopLayout>
    )
}

export default Orders
