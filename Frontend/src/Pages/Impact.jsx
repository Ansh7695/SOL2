import React from 'react'
import { Calendar, Users, Home, GraduationCap, Briefcase } from 'lucide-react'

const Impact = () => {

    const impactStats = [
        {
            id: 1,
            icon: <Calendar className="w-10 h-10 text-[#5F9EA0]" />,
            value: "Since 2020",
            label: "Years of grassroots work"
        },
        {
            id: 2,
            icon: <Users className="w-10 h-10 text-[#5F9EA0]" />,
            value: "~300",
            label: "Children supported annually through Phulwari"
        },
        {
            id: 3,
            icon: <Home className="w-10 h-10 text-[#5F9EA0]" />,
            value: "3–5",
            label: "Community learning centers operated across years"
        },
        {
            id: 4,
            icon: <GraduationCap className="w-10 h-10 text-[#5F9EA0]" />,
            value: "Up to 13",
            label: "Trained Baalmitras engaged at peak expansion"
        },
        {
            id: 5,
            icon: <Briefcase className="w-10 h-10 text-[#5F9EA0]" />,
            value: "250",
            label: "Women engaged in Kaushal Jyoti livelihoods"
        },
        {
            id: 6,
            icon: <Briefcase className="w-10 h-10 text-[#5F9EA0]" />,
            value: "XYZ",
            label: "XYZ"
        },
        {
            id: 7,
            icon: <Briefcase className="w-10 h-10 text-[#5F9EA0]" />,
            value: "XYZ",
            label: "XYZ"
        },
        {
            id: 8,
            icon: <Briefcase className="w-10 h-10 text-[#5F9EA0]" />,
            value: "XYZ",
            label: "XYZ"
        },
        {
            id: 9,
            icon: <Briefcase className="w-10 h-10 text-[#5F9EA0]" />,
            value: "XYZ",
            label: "XYZ"
        }
    ]

    return (
        <div className="bg-white">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-extrabold text-[#5F9EA0] mb-4">IMPACT AT A GLANCE</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Measuring our journey of change through numbers that represent lives touched and communities empowered.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {impactStats.map((stat) => (
                        <div key={stat.id} className="bg-gray-50 rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-center flex flex-col items-center">
                            <div className="p-4 bg-white rounded-full shadow-sm mb-6">
                                {stat.icon}
                            </div>
                            <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                            <p className="text-gray-600 font-medium">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Impact
