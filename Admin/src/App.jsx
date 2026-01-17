import React, { useEffect, useState, Suspense } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Lazy Load Pages
const Add = React.lazy(() => import('./pages/Add'))
const List = React.lazy(() => import('./pages/List'))
const Orders = React.lazy(() => import('./pages/Orders'))
const AddBlog = React.lazy(() => import('./pages/AddBlog'))
const ListBlogs = React.lazy(() => import('./pages/ListBlogs'))
const AddPublication = React.lazy(() => import('./pages/AddPublication'))
const ListPublications = React.lazy(() => import('./pages/ListPublications'))
const Login = React.lazy(() => import('./components/Login'))

export const backendUrl = import.meta.env.VITE_BACKEND_URL || ""
export const currency = '$'

const LoadingFallback = () => (
    <div className='flex items-center justify-center h-full w-full p-10'>
        <div className='w-12 h-12 border-4 border-gray-300 border-t-gray-800 rounded-full animate-spin'></div>
    </div>
)

const App = () => {

    const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : '');

    useEffect(() => {
        localStorage.setItem('token', token)
    }, [token])

    return (
        <div className='bg-gray-50 min-h-screen'>
            <ToastContainer />
            {token === ""
                ? <Suspense fallback={<LoadingFallback />}><Login setToken={setToken} /></Suspense>
                : <>
                    <Navbar setToken={setToken} />
                    <hr />
                    <div className='flex w-full'>
                        <Sidebar />
                        <div className='w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base'>
                            <Suspense fallback={<LoadingFallback />}>
                                <Routes>
                                    <Route path='/add' element={<Add token={token} />} />
                                    <Route path='/list' element={<List token={token} />} />
                                    <Route path='/orders' element={<Orders token={token} />} />

                                    {/* Blog Routes */}
                                    <Route path='/add-blog' element={<AddBlog token={token} />} />
                                    <Route path='/list-blogs' element={<ListBlogs token={token} />} />

                                    {/* Publication Routes */}
                                    <Route path='/add-publication' element={<AddPublication token={token} />} />
                                    <Route path='/list-publications' element={<ListPublications token={token} />} />
                                </Routes>
                            </Suspense>
                        </div>
                    </div>
                </>
            }
        </div>
    )
}

export default App
