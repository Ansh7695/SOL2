import React, { useState } from 'react'
import axios from 'axios'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'
import { Upload } from 'lucide-react'

const AddPublication = ({ token }) => {

    const [file, setFile] = useState(false)
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData()

            formData.append("title", title)
            formData.append("description", description)
            formData.append("file", file)

            const response = await axios.post(backendUrl + '/api/publication/add', formData, { headers: { token } })

            if (response.data.success) {
                toast.success(response.data.message)
                setTitle('')
                setDescription('')
                setFile(false)
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
                <p className='mb-2'>Upload PDF File</p>
                <label htmlFor="file">
                    <div className='w-full max-w-[500px] border-2 border-gray-300 border-dashed flex flex-col items-center justify-center cursor-pointer py-4'>
                        <Upload className="text-gray-400 w-8 h-8 mb-2" />
                        <span className="text-gray-500">{file ? file.name : "Click to upload PDF"}</span>
                    </div>
                    <input onChange={(e) => setFile(e.target.files[0])} type="file" id="file" accept=".pdf" hidden required />
                </label>
            </div>

            <div className='w-full'>
                <p className='mb-2'>Publication Title</p>
                <input onChange={(e) => setTitle(e.target.value)} value={title} className='w-full max-w-[500px] px-3 py-2' type="text" placeholder='Type here' required />
            </div>

            <div className='w-full'>
                <p className='mb-2'>Description</p>
                <textarea onChange={(e) => setDescription(e.target.value)} value={description} className='w-full max-w-[500px] px-3 py-2 h-24' type="text" placeholder='Short description' required />
            </div>

            <button type="submit" className='w-28 py-3 mt-4 bg-black text-white'>ADD PUB</button>

        </form>
    )
}

export default AddPublication
