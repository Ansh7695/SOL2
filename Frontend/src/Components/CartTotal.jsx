import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'

const CartTotal = () => {

    const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);

    return (
        <div className='w-full text-gray-700'>
            <div className='flex flex-col gap-4 text-sm'>
                <div className='flex justify-between items-center'>
                    <p className="text-gray-500">Subtotal</p>
                    <p className="font-medium text-gray-900">{currency}{getCartAmount()}.00</p>
                </div>
                <div className='flex justify-between items-center'>
                    <p className="text-gray-500">Shipping Fee</p>
                    <p className="font-medium text-gray-900">{currency}{delivery_fee}.00</p>
                </div>
                
                <div className="border-t border-dashed border-gray-200 my-2"></div>
                
                <div className='flex justify-between items-center'>
                    <span className="text-base font-bold text-gray-900">Total</span>
                    <span className="text-xl font-bold text-emerald-700">
                        {currency}{getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}.00
                    </span>
                </div>
            </div>
        </div>
    )
}

export default CartTotal
