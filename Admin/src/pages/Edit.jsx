import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'
import { useParams, useNavigate } from 'react-router-dom'

const Edit = ({ token }) => {
    const { id } = useParams()
    const navigate = useNavigate()

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("Handicrafts");
    const [subCategory, setSubCategory] = useState("");
    const [bestseller, setBestseller] = useState(false);
    const [sizes, setSizes] = useState([]);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.post(backendUrl + '/api/product/single', { productId: id })
                if (response.data.success) {
                    const product = response.data.product
                    setName(product.name)
                    setDescription(product.description)
                    setPrice(product.price)
                    setCategory(product.category || "Handicrafts")
                    setSubCategory(product.subCategory)
                    setBestseller(product.bestseller)
                    setSizes(product.sizes || [])
                } else {
                    toast.error(response.data.message)
                    navigate('/list')
                }
            } catch (error) {
                console.log(error);
                toast.error(error.message)
            }
        }
        fetchProduct()
    }, [id, navigate])

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            const updateData = {
                id,
                name,
                description,
                price: Number(price),
                category,
                subCategory,
                bestseller,
                sizes: JSON.stringify(sizes)
            }

            const response = await axios.post(backendUrl + '/api/product/edit', updateData, { headers: { token } })

            if (response.data.success) {
                toast.success(response.data.message)
                navigate('/list')
            } else {
                toast.error(response.data.message)
            }

        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }
    }

    return (
        <form onSubmit={onSubmitHandler} className='flex flex-col w-full gap-5'>
            <div className='flex items-center justify-between w-full max-w-[500px]'>
                <h2 className="text-xl font-bold">Edit Product</h2>
                <button type="button" onClick={() => navigate('/list')} className="px-3 py-1 bg-gray-200 text-sm rounded">Cancel</button>
            </div>

            <div className='w-full'>
                <p className='mb-2'>Product name</p>
                <input onChange={(e) => setName(e.target.value)} value={name} className='w-full max-w-[500px] px-3 py-2 border' type="text" placeholder='Type here' required />
            </div>

            <div className='w-full'>
                <p className='mb-2'>Product description</p>
                <textarea onChange={(e) => setDescription(e.target.value)} value={description} className='w-full max-w-[500px] px-3 py-2 border h-32' type="text" placeholder='Write content here' required />
            </div>

            <div className='flex flex-col sm:flex-row gap-2 w-full sm:gap-8'>
                <div>
                    <p className='mb-2'>Product Category</p>
                    <select value={category} onChange={(e) => setCategory(e.target.value)} className='w-full px-3 py-2 border'>
                        <option value="Handicrafts">Handicrafts</option>
                        <option value="Natural Foods">Natural Foods</option>
                    </select>
                </div>

                <div>
                    <p className='mb-2'>Sub Category</p>
                    <input onChange={(e) => setSubCategory(e.target.value)} value={subCategory} className='w-full px-3 py-2 border' type="text" placeholder='Type here' />
                </div>

                <div>
                    <p className='mb-2'>Product Price</p>
                    <input onChange={(e) => setPrice(e.target.value)} value={price} className='w-full px-3 py-2 sm:w-[120px] border' type="number" placeholder='25' />
                </div>
            </div>

            <div>
                <p className='mb-2'>Product Sizes (Optional)</p>
                <div className='flex gap-3'>
                    {['S', 'M', 'L', 'XL', 'XXL', '1kg', '500g', '250g'].map((item, index) => (
                        <div key={index} onClick={() => setSizes(prev => prev.includes(item) ? prev.filter(a => a !== item) : [...prev, item])}>
                            <p className={`${sizes.includes(item) ? "bg-pink-100 border-pink-200" : "bg-slate-50 border-gray-200"} border px-3 py-1 cursor-pointer`}>{item}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className='flex gap-2 mt-2'>
                <input onChange={() => setBestseller(prev => !prev)} checked={bestseller} type="checkbox" id="bestseller" />
                <label className='cursor-pointer' htmlFor="bestseller">Add to One of BestSellers</label>
            </div>

            <button type="submit" className='w-28 py-3 mt-4 bg-black text-white hover:bg-gray-800 transition-colors'>SAVE</button>

        </form>
    )
}

export default Edit
