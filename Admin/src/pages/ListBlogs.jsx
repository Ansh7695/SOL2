import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { backendUrl } from '../App'
import { Trash2, Edit, X, Upload } from 'lucide-react'

const ListBlogs = ({ token }) => {

    const [list, setList] = useState([])
    const [editingBlog, setEditingBlog] = useState(null)
    const [image, setImage] = useState(false)

    // Edit Form State
    const [editTitle, setEditTitle] = useState("")
    const [editAuthor, setEditAuthor] = useState("")
    const [editContent, setEditContent] = useState("")
    const [editCategory, setEditCategory] = useState("General")

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

    const openEditModal = (blog) => {
        setEditingBlog(blog)
        setEditTitle(blog.title)
        setEditAuthor(blog.author)
        setEditContent(blog.content)
        setEditCategory(blog.category)
        setImage(false) // Reset image state
    }

    const closeEditModal = () => {
        setEditingBlog(null)
        setImage(false)
    }

    const onUpdateHandler = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData()
            formData.append("id", editingBlog._id)
            formData.append("title", editTitle)
            formData.append("content", editContent)
            formData.append("author", editAuthor)
            formData.append("category", editCategory)
            if (image) formData.append("image", image)

            const response = await axios.post(backendUrl + '/api/blog/update', formData, { headers: { token } })

            if (response.data.success) {
                toast.success(response.data.message)
                closeEditModal()
                await fetchList()
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
                <div className='hidden md:grid grid-cols-[3fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-gray-100 text-sm'>
                    <b>Title</b>
                    <b>Author</b>
                    <b>Date</b>
                    <b className='text-center'>Action</b>
                </div>

                {/* Blog List */}
                {list.map((item, index) => (
                    <div className='grid grid-cols-[3fr_1fr_1fr] md:grid-cols-[3fr_1fr_1fr_1fr] items-center gap-2 py-1 px-2 border text-sm' key={index}>
                        <p className='truncate'>{item.title}</p>
                        <p>{item.author}</p>
                        <p>{new Date(item.date).toLocaleDateString()}</p>
                        <div className='flex justify-center gap-4 text-lg'>
                            <p onClick={() => openEditModal(item)} className='cursor-pointer text-blue-500 hover:text-blue-700'>
                                <Edit size={20} />
                            </p>
                            <p onClick={() => removeBlog(item._id)} className='cursor-pointer text-red-500 hover:text-red-700'>
                                <Trash2 size={20} />
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Edit Modal */}
            {editingBlog && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-lg p-8 w-full max-w-2xl max-h-[90vh] overflow-y-auto relative">
                        <button onClick={closeEditModal} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
                            <X size={24} />
                        </button>

                        <h2 className="text-2xl font-bold mb-6">Edit Blog</h2>

                        <form onSubmit={onUpdateHandler} className='flex flex-col gap-4'>
                            <div>
                                <p className='mb-2'>Upload New Image (Optional)</p>
                                <label htmlFor="edit-image">
                                    <div className='w-full h-32 border-2 border-gray-300 border-dashed flex items-center justify-center cursor-pointer'>
                                        {!image ?
                                            (editingBlog.image ?
                                                <img className='h-full object-contain' src={`${backendUrl}/images/${editingBlog.image}`} alt="Current" />
                                                : <span className="text-gray-400">No Image (Click to upload)</span>
                                            )
                                            : <img className='w-full h-full object-cover' src={URL.createObjectURL(image)} alt="" />
                                        }
                                    </div>
                                    <input onChange={(e) => setImage(e.target.files[0])} type="file" id="edit-image" hidden />
                                </label>
                            </div>

                            <div>
                                <p className='mb-2'>Blog Title</p>
                                <input onChange={(e) => setEditTitle(e.target.value)} value={editTitle} className='w-full px-3 py-2 border rounded' type="text" required />
                            </div>

                            <div>
                                <p className='mb-2'>Author</p>
                                <input onChange={(e) => setEditAuthor(e.target.value)} value={editAuthor} className='w-full px-3 py-2 border rounded' type="text" required />
                            </div>

                            <div>
                                <p className='mb-2'>Category</p>
                                <select onChange={(e) => setEditCategory(e.target.value)} value={editCategory} className='w-full px-3 py-2 border rounded'>
                                    <option value="General">General</option>
                                    <option value="Events">Events</option>
                                    <option value="News">News</option>
                                    <option value="Stories">Stories</option>
                                </select>
                            </div>

                            <div>
                                <p className='mb-2'>Content</p>
                                <textarea onChange={(e) => setEditContent(e.target.value)} value={editContent} className='w-full px-3 py-2 border rounded h-32' required />
                            </div>

                            <button type="submit" className='w-full py-3 bg-black text-white hover:bg-gray-800 transition-colors'>UPDATE BLOG</button>
                        </form>
                    </div>
                </div>
            )}
        </>
    )
}

export default ListBlogs
