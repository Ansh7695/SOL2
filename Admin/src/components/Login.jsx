import React, { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

const Login = ({ setToken }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onSubmitHandler = async (e) => {
        try {
            e.preventDefault();
            const response = await axios.post('http://localhost:4000/api/user/admin', { email, password })
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
        <div className='min-h-screen flex items-center justify-center w-full bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden'>
            {/* Background Decoration */}
            <div className="absolute top-[-50px] left-[-50px] w-96 h-96 bg-lime-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute top-[-50px] right-[-50px] w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

            <div className='bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl rounded-2xl px-10 py-12 max-w-md w-full z-10 mx-4'>
                <div className='text-center mb-10'>
                    <h1 className='text-4xl font-extrabold text-white tracking-tight mb-2'>Welcome Back</h1>
                    <p className='text-gray-300 font-light'>Sign in to manage School of Nature</p>
                </div>

                <form onSubmit={onSubmitHandler} className='space-y-6'>
                    <div>
                        <label className='block text-sm font-medium text-gray-300 mb-2 ml-1'>Email Address</label>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            className='w-full px-5 py-3 rounded-xl bg-gray-800/50 border border-gray-600/50 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent transition-all duration-300'
                            type="email"
                            placeholder='admin@schoolofnature.com'
                            required
                        />
                    </div>
                    <div>
                        <label className='block text-sm font-medium text-gray-300 mb-2 ml-1'>Password</label>
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            className='w-full px-5 py-3 rounded-xl bg-gray-800/50 border border-gray-600/50 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent transition-all duration-300'
                            type="password"
                            placeholder='••••••••'
                            required
                        />
                    </div>

                    <button
                        className='w-full py-3.5 px-4 rounded-xl text-white font-bold bg-gradient-to-r from-lime-500 to-green-600 hover:from-lime-400 hover:to-green-500 transform hover:scale-[1.02] transition-all duration-200 shadow-lg hover:shadow-lime-500/25 mt-4'
                        type="submit"
                    >
                        Sign In
                    </button>
                </form>

                <div className='mt-8 text-center'>
                    <p className='text-xs text-gray-500'>
                        Protected by School of Nature Security
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Login
