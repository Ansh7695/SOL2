import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { backendUrl } from '../App'
import { Trash2, Edit, Star } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const List = ({ token }) => {

    const [list, setList] = useState([])
    const navigate = useNavigate()

    const fetchList = async () => {
        try {
            const response = await axios.get(backendUrl + '/api/product/list')
            if (response.data.success) {
                setList(response.data.products);
            } else {
                toast.error(response.data.message)
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }
    }

    const removeProduct = async (id) => {
        try {
            const response = await axios.post(backendUrl + '/api/product/remove', { id }, { headers: { token } })
            if (response.data.success) {
                toast.success(response.data.message)
                await fetchList();
            } else {
                toast.error(response.data.message)
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }
    }

    const toggleBestseller = async (id, currentStatus) => {
        try {
            const response = await axios.post(backendUrl + '/api/product/bestseller', { id, bestseller: !currentStatus }, { headers: { token } })
            if (response.data.success) {
                toast.success(response.data.message)
                await fetchList();
            } else {
                toast.error(response.data.message)
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }
    }

    useEffect(() => {
        fetchList()
    }, [])

    return (
        <>
            <p className='mb-2'>All Products List</p>
            <div className='flex flex-col gap-2'>
                {/* List Table Title */}
                <div className='hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-gray-100 text-sm'>
                    <b>Image</b>
                    <b>Name</b>
                    <b>Category</b>
                    <b>Price</b>
                    <b className='text-center'>Actions</b>
                </div>

                {/* Product List */}
                {list.map((item, index) => (
                    <div className='grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 py-1 px-2 border text-sm' key={index}>
                        <img className='w-12 h-12 object-cover' src={backendUrl + '/images/' + item.image[0]} alt="" />
                        <p className='truncate'>{item.name}</p>
                        <p>{item.category}</p>
                        <p>${item.price}</p>
                        <div className='flex justify-end md:justify-center items-center gap-3'>
                            <p onClick={() => toggleBestseller(item._id, item.bestseller)} className={`cursor-pointer ${item.bestseller ? 'text-yellow-500' : 'text-gray-300'} hover:text-yellow-600 transition-colors`} title="Toggle Bestseller">
                                <Star size={20} fill={item.bestseller ? "currentColor" : "none"} />
                            </p>
                            <p onClick={() => navigate(`/edit/${item._id}`)} className='cursor-pointer text-lg text-blue-500 hover:text-blue-700' title="Edit Product">
                                <Edit size={20} />
                            </p>
                            <p onClick={() => removeProduct(item._id)} className='cursor-pointer text-lg text-red-500 hover:text-red-700' title="Delete Product">
                                <Trash2 size={20} />
                            </p>
                        </div>
                    </div>
                ))}

            </div>
        </>
    )
}

export default List
