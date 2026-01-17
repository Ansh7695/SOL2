import React, { useState } from 'react'
import axios from 'axios'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'
import { Upload } from 'lucide-react'

const AddBlog = ({ token }) => {

    const [image, setImage] = useState(false)
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [author, setAuthor] = useState("");
    const [category, setCategory] = useState("General");

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData()

            formData.append("title", title)
            formData.append("content", content)
            formData.append("author", author)
            formData.append("category", category)
            formData.append("image", image)

            const response = await axios.post(backendUrl + '/api/blog/add', formData, { headers: { token } })

            if (response.data.success) {
                toast.success(response.data.message)
                setTitle('')
                setContent('')
                setAuthor('')
                setImage(false)
                setCategory('General')
            } else {
                toast.error(response.data.message)
            }

        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }
    }

    return (
        <form onSubmit={onSubmitHandler} className='flex flex-col w-full gap-3'>
            <div>
                <p className='mb-2'>Upload Blog Image</p>
                <label htmlFor="image">
                    <div className='w-full max-w-[500px] h-48 border-2 border-gray-300 border-dashed flex items-center justify-center cursor-pointer'>
                        {!image ? <Upload className="text-gray-400 w-10 h-10" /> : <img className='w-full h-full object-cover' src={URL.createObjectURL(image)} alt="" />}
                    </div>
                    <input onChange={(e) => setImage(e.target.files[0])} type="file" id="image" hidden required />
                </label>
            </div>

            <div className='w-full'>
                <p className='mb-2'>Blog Title</p>
                <input onChange={(e) => setTitle(e.target.value)} value={title} className='w-full max-w-[500px] px-3 py-2' type="text" placeholder='Type here' required />
            </div>

            <div className='w-full'>
                <p className='mb-2'>Author</p>
                <input onChange={(e) => setAuthor(e.target.value)} value={author} className='w-full max-w-[500px] px-3 py-2' type="text" placeholder='Author Name' required />
            </div>

            <div className='w-full'>
                <p className='mb-2'>Category</p>
                <select onChange={(e) => setCategory(e.target.value)} value={category} className='w-full max-w-[500px] px-3 py-2'>
                    <option value="General">General</option>
                    <option value="Events">Events</option>
                    <option value="News">News</option>
                    <option value="Stories">Stories</option>
                </select>
            </div>

            <div className='w-full'>
                <p className='mb-2'>Content</p>
                <textarea onChange={(e) => setContent(e.target.value)} value={content} className='w-full max-w-[500px] px-3 py-2 h-40' type="text" placeholder='Write blog content here' required />
            </div>

            <button type="submit" className='w-28 py-3 mt-4 bg-black text-white'>ADD BLOG</button>

        </form>
    )
}

export default AddBlog
