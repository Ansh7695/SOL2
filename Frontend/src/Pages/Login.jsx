import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Mail, Lock, User, LogIn, UserPlus, Eye, EyeOff } from 'lucide-react';

const Login = () => {

    const [currentState, setCurrentState] = useState('Login');
    const context = useContext(ShopContext);
    
    // Add safety check for context
    if (!context) {
        return <div className="min-h-screen flex items-center justify-center">Loading...</div>
    }
    
    const { token, setToken, navigate, backendUrl } = context;

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        try {
            if (currentState === 'Sign Up') {
                const response = await axios.post(backendUrl + '/api/user/register', { name, email, password })
                if (response.data.success) {
                    setToken(response.data.token)
                    localStorage.setItem('token', response.data.token)
                } else {
                    toast.error(response.data.message)
                }
            } else {
                const response = await axios.post(backendUrl + '/api/user/login', { email, password })
                if (response.data.success) {
                    setToken(response.data.token)
                    localStorage.setItem('token', response.data.token)
                } else {
                    toast.error(response.data.message)
                }
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }
    }

    useEffect(() => {
        // Only redirect if token exists and we're actually logged in
        // Commented out to allow viewing the login page
        // if (token) {
        //     navigate('/')
        // }
    }, [token, navigate])

    return (
        <div className='min-h-screen bg-gradient-to-br from-lime-50 via-white to-green-50 flex items-center justify-center py-8 sm:py-12 px-4'>
            <div className='w-full max-w-md'>
                {/* Card Container */}
                <div className='bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden'>
                    {/* Header Section */}
                    <div className='bg-gradient-to-r from-lime-600 to-green-600 p-6 sm:p-8 text-white text-center'>
                        <div className='inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-white/20 rounded-full mb-4 backdrop-blur-sm'>
                            {currentState === 'Login' ? 
                                <LogIn className='w-8 h-8 sm:w-10 sm:h-10' /> : 
                                <UserPlus className='w-8 h-8 sm:w-10 sm:h-10' />
                            }
                        </div>
                        <h2 className='text-2xl sm:text-3xl font-bold mb-2'>{currentState}</h2>
                        <p className='text-lime-100 text-sm sm:text-base'>
                            {currentState === 'Login' ? 'Welcome back! Please login to continue' : 'Create an account to get started'}
                        </p>
                    </div>

                    {/* Form Section */}
                    <form onSubmit={onSubmitHandler} className='p-6 sm:p-8 space-y-5'>
                        {/* Name Input - Only for Sign Up */}
                        {currentState === 'Sign Up' && (
                            <div className='space-y-2'>
                                <label className='block text-sm font-semibold text-gray-700'>Full Name</label>
                                <div className='relative'>
                                    <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                                        <User className='h-5 w-5 text-gray-400' />
                                    </div>
                                    <input 
                                        onChange={(e) => setName(e.target.value)} 
                                        value={name} 
                                        type="text" 
                                        className='w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-lime-500 focus:ring-2 focus:ring-lime-200 outline-none transition-all text-sm sm:text-base' 
                                        placeholder='Enter your name' 
                                        required 
                                    />
                                </div>
                            </div>
                        )}

                        {/* Email Input */}
                        <div className='space-y-2'>
                            <label className='block text-sm font-semibold text-gray-700'>Email Address</label>
                            <div className='relative'>
                                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                                    <Mail className='h-5 w-5 text-gray-400' />
                                </div>
                                <input 
                                    onChange={(e) => setEmail(e.target.value)} 
                                    value={email} 
                                    type="email" 
                                    className='w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-lime-500 focus:ring-2 focus:ring-lime-200 outline-none transition-all text-sm sm:text-base' 
                                    placeholder='Enter your email' 
                                    required 
                                />
                            </div>
                        </div>

                        {/* Password Input */}
                        <div className='space-y-2'>
                            <label className='block text-sm font-semibold text-gray-700'>Password</label>
                            <div className='relative'>
                                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                                    <Lock className='h-5 w-5 text-gray-400' />
                                </div>
                                <input 
                                    onChange={(e) => setPassword(e.target.value)} 
                                    value={password} 
                                    type={showPassword ? "text" : "password"}
                                    className='w-full pl-10 pr-12 py-3 border-2 border-gray-200 rounded-xl focus:border-lime-500 focus:ring-2 focus:ring-lime-200 outline-none transition-all text-sm sm:text-base' 
                                    placeholder='Enter your password' 
                                    required 
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className='absolute inset-y-0 right-0 pr-3 flex items-center'
                                >
                                    {showPassword ? 
                                        <EyeOff className='h-5 w-5 text-gray-400 hover:text-gray-600' /> : 
                                        <Eye className='h-5 w-5 text-gray-400 hover:text-gray-600' />
                                    }
                                </button>
                            </div>
                        </div>

                        {/* Forgot Password & Toggle */}
                        <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-sm'>
                            {currentState === 'Login' && (
                                <p className='text-lime-600 hover:text-lime-700 cursor-pointer font-medium'>
                                    Forgot password?
                                </p>
                            )}
                            <div className={currentState === 'Login' ? '' : 'w-full'}>
                                {currentState === 'Login' ? (
                                    <p className='text-gray-600'>
                                        Don't have an account?{' '}
                                        <span onClick={() => setCurrentState('Sign Up')} className='text-lime-600 hover:text-lime-700 cursor-pointer font-semibold'>
                                            Sign Up
                                        </span>
                                    </p>
                                ) : (
                                    <p className='text-gray-600 text-center'>
                                        Already have an account?{' '}
                                        <span onClick={() => setCurrentState('Login')} className='text-lime-600 hover:text-lime-700 cursor-pointer font-semibold'>
                                            Login
                                        </span>
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button 
                            type="submit"
                            className='w-full bg-gradient-to-r from-lime-600 to-green-600 hover:from-lime-700 hover:to-green-700 text-white font-semibold py-3 sm:py-3.5 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 text-sm sm:text-base'
                        >
                            {currentState === 'Login' ? (
                                <>
                                    <LogIn className='w-5 h-5' />
                                    Sign In
                                </>
                            ) : (
                                <>
                                    <UserPlus className='w-5 h-5' />
                                    Create Account
                                </>
                            )}
                        </button>
                    </form>

                    {/* Footer Section */}
                    <div className='bg-gray-50 px-6 sm:px-8 py-4 text-center border-t border-gray-100'>
                        <p className='text-xs sm:text-sm text-gray-600'>
                            By continuing, you agree to our{' '}
                            <span className='text-lime-600 hover:underline cursor-pointer'>Terms of Service</span>
                            {' '}and{' '}
                            <span className='text-lime-600 hover:underline cursor-pointer'>Privacy Policy</span>
                        </p>
                    </div>
                </div>

                {/* Back to Home */}
                <div className='text-center mt-6'>
                    <button 
                        onClick={() => navigate('/')}
                        className='text-gray-600 hover:text-lime-600 text-sm font-medium transition-colors'
                    >
                        ← Back to Home
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Login
