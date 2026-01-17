import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { backendUrl } from '../App'
import { Trash2 } from 'lucide-react'

const ListBlogs = ({ token }) => {

    const [list, setList] = useState([])

    const fetchList = async () => {
        try {
            const response = await axios.get(backendUrl + '/api/blog/list')
            if (response.data.success) {
                setList(response.data.blogs);
            } else {
                toast.error(response.data.message)
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }
    }

    const removeBlog = async (id) => {
        try {
            const response = await axios.post(backendUrl + '/api/blog/remove', { id }, { headers: { token } })
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
            <p className='mb-2'>All Blogs List</p>
            <div className='flex flex-col gap-2'>
                {/* List Table Title */}
                <div className='hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-gray-100 text-sm'>
                    <b>Image</b>
                    <b>Title</b>
                    <b>Author</b>
                    <b>Date</b>
                    <b className='text-center'>Action</b>
                </div>

                {/* Blog List */}
                {list.map((item, index) => (
                    <div className='grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 py-1 px-2 border text-sm' key={index}>
                        <img className='w-12 h-12 object-cover' src={backendUrl + '/images/' + item.image} alt="" />
                        <p className='truncate'>{item.title}</p>
                        <p>{item.author}</p>
                        <p>{new Date(item.date).toLocaleDateString()}</p>
                        <p onClick={() => removeBlog(item._id)} className='text-right md:text-center cursor-pointer text-lg text-red-500 hover:text-red-700'>
                            <Trash2 size={20} className="mx-auto" />
                        </p>
                    </div>
                ))}

            </div>
        </>
    )
}

export default ListBlogs
