import React, { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { backendUrl } from '../App'

const Login = ({ setToken }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onSubmitHandler = async (e) => {
        try {
            e.preventDefault();
            const response = await axios.post(backendUrl + '/api/user/admin', { email, password })
            if (response.data.success) {
                setToken(response.data.token)
            } else {
                toast.error(response.data.message)
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }
    }

    return (
        <div className='min-h-screen flex items-center justify-center w-full bg-[#f8fafc] relative overflow-hidden'>
            {/* Background Decoration */}
            <div className='absolute inset-0 z-0'>
                <div className='absolute -top-20 -left-20 w-96 h-96 bg-lime-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob'></div>
                <div className='absolute top-40 right-10 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000'></div>
                <div className='absolute -bottom-20 left-40 w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000'></div>
            </div>

            <div className='bg-white/80 backdrop-blur-xl border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-3xl px-10 py-12 max-w-md w-full z-10 mx-4 transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]'>
                <div className='text-center mb-10'>
                    <div className="mx-auto w-16 h-16 bg-gradient-to-tr from-lime-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-lime-500/30 transform rotate-3 hover:rotate-6 transition-transform">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                    </div>
                    <h1 className='text-3xl font-bold text-gray-900 tracking-tight mb-2'>Admin Portal</h1>
                    <p className='text-gray-500 font-medium'>Sign in to manage School of Nature</p>
                </div>

                <form onSubmit={onSubmitHandler} className='space-y-5'>
                    <div>
                        <label className='block text-sm font-semibold text-gray-700 mb-2'>Email Address</label>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            className='w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lime-500/20 focus:border-lime-500 transition-all duration-200'
                            type="email"
                            placeholder='admin@schoolofnature.com'
                            required
                        />
                    </div>
                    <div>
                        <label className='block text-sm font-semibold text-gray-700 mb-2'>Password</label>
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            className='w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lime-500/20 focus:border-lime-500 transition-all duration-200'
                            type="password"
                            placeholder='••••••••'
                            required
                        />
                    </div>

                    <button
                        className='w-full py-4 px-4 rounded-xl text-white font-bold bg-gradient-to-r from-lime-600 to-green-700 hover:from-lime-500 hover:to-green-600 transform hover:-translate-y-0.5 transition-all duration-200 shadow-lg shadow-lime-600/20 mt-2'
                        type="submit"
                    >
                        Sign In to Dashboard
                    </button>
                </form>

                <div className='mt-8 text-center'>
                    <p className='text-xs text-gray-400 font-medium'>
                        Secure Local Environment
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Login
