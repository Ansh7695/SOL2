import React, { useState } from 'react'
import { assets } from '../assets/assets'
import axios from 'axios'
import { toast } from 'react-toastify'
import { Upload } from 'lucide-react'

const Add = ({ token }) => {

    const [image1, setImage1] = useState(false)
    const [image2, setImage2] = useState(false)
    const [image3, setImage3] = useState(false)
    const [image4, setImage4] = useState(false)

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("Crafts");
    const [subCategory, setSubCategory] = useState("");
    const [bestseller, setBestseller] = useState(false);
    const [sizes, setSizes] = useState([]);

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData()

            formData.append("name", name)
            formData.append("description", description)
            formData.append("price", price)
            formData.append("category", category)
            formData.append("subCategory", subCategory)
            formData.append("bestseller", bestseller)
            formData.append("sizes", JSON.stringify(sizes))

            image1 && formData.append("image1", image1)
            image2 && formData.append("image2", image2)
            image3 && formData.append("image3", image3)
            image4 && formData.append("image4", image4)

            const response = await axios.post('http://localhost:4000/api/product/add', formData, { headers: { token } })

            if (response.data.success) {
                toast.success(response.data.message)
                setName('')
                setDescription('')
                setImage1(false)
                setImage2(false)
                setImage3(false)
                setImage4(false)
                setPrice('')
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
                <p className='mb-2'>Upload Image</p>
                <div className='flex gap-2'>
                    <label htmlFor="image1">
                        <div className='w-20 h-20 border-2 border-gray-300 border-dashed flex items-center justify-center cursor-pointer'>
                            {!image1 ? <Upload className="text-gray-400" /> : <img className='w-full h-full object-cover' src={URL.createObjectURL(image1)} alt="" />}
                        </div>
                        <input onChange={(e) => setImage1(e.target.files[0])} type="file" id="image1" hidden />
                    </label>
                    <label htmlFor="image2">
                        <div className='w-20 h-20 border-2 border-gray-300 border-dashed flex items-center justify-center cursor-pointer'>
                            {!image2 ? <Upload className="text-gray-400" /> : <img className='w-full h-full object-cover' src={URL.createObjectURL(image2)} alt="" />}
                        </div>
                        <input onChange={(e) => setImage2(e.target.files[0])} type="file" id="image2" hidden />
                    </label>
                    <label htmlFor="image3">
                        <div className='w-20 h-20 border-2 border-gray-300 border-dashed flex items-center justify-center cursor-pointer'>
                            {!image3 ? <Upload className="text-gray-400" /> : <img className='w-full h-full object-cover' src={URL.createObjectURL(image3)} alt="" />}
                        </div>
                        <input onChange={(e) => setImage3(e.target.files[0])} type="file" id="image3" hidden />
                    </label>
                    <label htmlFor="image4">
                        <div className='w-20 h-20 border-2 border-gray-300 border-dashed flex items-center justify-center cursor-pointer'>
                            {!image4 ? <Upload className="text-gray-400" /> : <img className='w-full h-full object-cover' src={URL.createObjectURL(image4)} alt="" />}
                        </div>
                        <input onChange={(e) => setImage4(e.target.files[0])} type="file" id="image4" hidden />
                    </label>
                </div>
            </div>

            <div className='w-full'>
                <p className='mb-2'>Product name</p>
                <input onChange={(e) => setName(e.target.value)} value={name} className='w-full max-w-[500px] px-3 py-2' type="text" placeholder='Type here' required />
            </div>

            <div className='w-full'>
                <p className='mb-2'>Product description</p>
                <textarea onChange={(e) => setDescription(e.target.value)} value={description} className='w-full max-w-[500px] px-3 py-2' type="text" placeholder='Write content here' required />
            </div>

            <div className='flex flex-col sm:flex-row gap-2 w-full sm:gap-8'>
                <div>
                    <p className='mb-2'>Product Category</p>
                    <select onChange={(e) => setCategory(e.target.value)} className='w-full px-3 py-2'>
                        <option value="Crafts">Crafts</option>
                        <option value="Food">Food</option>
                        <option value="Textiles">Textiles</option>
                        <option value="Pottery">Pottery</option>
                        <option value="Accessories">Accessories</option>
                        <option value="Wellness">Wellness</option>
                    </select>
                </div>

                <div>
                    <p className='mb-2'>Sub Category</p>
                    <input onChange={(e) => setSubCategory(e.target.value)} value={subCategory} className='w-full px-3 py-2' type="text" placeholder='Type here' />
                </div>

                <div>
                    <p className='mb-2'>Product Price</p>
                    <input onChange={(e) => setPrice(e.target.value)} value={price} className='w-full px-3 py-2 sm:w-[120px]' type="number" placeholder='25' />
                </div>
            </div>

            <div>
                <p className='mb-2'>Product Sizes (Optional)</p>
                <div className='flex gap-3'>
                    {['S', 'M', 'L', 'XL', 'XXL', '1kg', '500g', '250g'].map((item, index) => (
                        <div key={index} onClick={() => setSizes(prev => prev.includes(item) ? prev.filter(a => a !== item) : [...prev, item])}>
                            <p className={`${sizes.includes(item) ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>{item}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className='flex gap-2 mt-2'>
                <input onChange={() => setBestseller(prev => !prev)} checked={bestseller} type="checkbox" id="bestseller" />
                <label className='cursor-pointer' htmlFor="bestseller">Add to One of BestSellers</label>
            </div>

            <button type="submit" className='w-28 py-3 mt-4 bg-black text-white'>ADD</button>

        </form>
    )
}

export default Add
