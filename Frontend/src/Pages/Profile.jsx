import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import ShopLayout from '../Components/Shop/ShopLayout';
import Title from '../Components/Title';
import axios from 'axios';
import { toast } from 'react-toastify';
import { User, Mail, Package } from 'lucide-react';

const Profile = () => {
    const { token, backendUrl, navigate } = useContext(ShopContext);
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchUserProfileData = async () => {
        try {
            const response = await axios.get(backendUrl + '/api/user/profile', { headers: { token } });
            if (response.data.success) {
                setUserData(response.data.user);
            } else {
                toast.error(response.data.message);
                navigate('/login');
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (!token) {
            navigate('/login');
        } else {
            fetchUserProfileData();
        }
    }, [token, navigate]);

    if (loading) {
        return (
            <ShopLayout>
                <div className="flex items-center justify-center min-h-[60vh]">
                    <div className="w-16 h-16 border-4 border-emerald-600 border-t-transparent rounded-full animate-spin"></div>
                </div>
            </ShopLayout>
        );
    }

    return (
        <ShopLayout>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-2xl mb-8">
                    <Title text1="MY" text2="PROFILE" />
                </div>
                
                <div className="bg-white border text-left border-gray-100 rounded-2xl shadow-sm p-6 sm:p-10 flex flex-col md:flex-row gap-8 items-start">
                    <div className="w-24 h-24 sm:w-32 sm:h-32 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 text-emerald-600">
                        <User className="w-12 h-12 sm:w-16 sm:h-16" />
                    </div>
                    
                    <div className="flex-1 space-y-4 w-full">
                        <div>
                            <p className="text-sm text-gray-500 font-medium tracking-wide uppercase mb-1">Full Name</p>
                            <p className="text-2xl font-bold text-gray-900">{userData?.name}</p>
                        </div>
                        
                        <div className="mt-6">
                            <p className="text-sm text-gray-500 font-medium tracking-wide uppercase mb-1">Email Address</p>
                            <div className="flex items-center gap-2 text-gray-700">
                                <Mail className="w-5 h-5 text-emerald-600" />
                                <span className="text-lg">{userData?.email}</span>
                            </div>
                        </div>

                        <div className="pt-8 flex flex-wrap gap-4">
                            <button onClick={() => navigate('/orders')} className="flex items-center justify-center gap-2 px-6 py-3 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition-colors shadow-sm">
                                <Package className="w-5 h-5" />
                                View My Orders
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </ShopLayout>
    );
};

export default Profile;
