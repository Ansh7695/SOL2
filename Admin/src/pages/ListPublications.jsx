import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { backendUrl } from '../App'
import { Trash2, FileText, ExternalLink } from 'lucide-react'

const ListPublications = ({ token }) => {

    const [list, setList] = useState([])

    const fetchList = async () => {
        try {
            const response = await axios.get(backendUrl + '/api/publication/list')
            if (response.data.success) {
                setList(response.data.publications);
            } else {
                toast.error(response.data.message)
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }
    }

    const removePublication = async (id) => {
        try {
            const response = await axios.post(backendUrl + '/api/publication/remove', { id }, { headers: { token } })
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
            <p className='mb-2'>All Publications List</p>
            <div className='flex flex-col gap-2'>
                {/* List Table Title */}
                <div className='hidden md:grid grid-cols-[3fr_3fr_1fr_1fr] items-center py-1 px-2 border bg-gray-100 text-sm'>
                    <b>Title</b>
                    <b>Description</b>
                    <b>View</b>
                    <b className='text-center'>Action</b>
                </div>

                {/* Publication List */}
                {list.map((item, index) => (
                    <div className='grid grid-cols-[3fr_3fr_1fr_1fr] items-center gap-2 py-1 px-2 border text-sm' key={index}>
                        <p className='font-semibold'>{item.title}</p>
                        <p className='truncate'>{item.description}</p>
                        <a href={backendUrl + '/images/' + item.file} target="_blank" rel="noreferrer" className="text-blue-500 hover:underline flex items-center gap-1">
                            <FileText size={16} /> View
                        </a>
                        <p onClick={() => removePublication(item._id)} className='text-right md:text-center cursor-pointer text-lg text-red-500 hover:text-red-700'>
                            <Trash2 size={20} className="mx-auto" />
                        </p>
                    </div>
                ))}

            </div>
        </>
    )
}

export default ListPublications
