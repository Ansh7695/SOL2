import React from 'react'
import { Eye, Target, MapPin, Users, Scale, FileCheck, CheckCircle2 } from 'lucide-react'
import { Assets } from '../assets/Assets'

const AboutUs = () => {
    return (
        <>
            <div className="bg-gray-50 min-h-screen">
                {/* Header Section */}
                <div className="bg-white shadow-sm py-12 px-6">
                    <div className="max-w-7xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            About <span className="text-lime-600">Us</span>
                        </h1>
                        <div className="w-20 h-1 bg-lime-500 mx-auto rounded-full"></div>
                    </div>
                </div>

                {/* Founder's Note Section */}
                <div className="max-w-7xl mx-auto py-16 px-6">
                    <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border-l-8 border-lime-500">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Founder's Note</h2>
                        <div className="prose text-gray-700 text-lg leading-relaxed italic">
                            "Welcome to School of Nature. Our journey began with a simple yet profound belief: that nature is our best teacher.
                            We envisioned a platform where communities could thrive in harmony with their environment.
                            Every step we take is guided by the principles of sustainability, empathy, and empowerment.
                            We invite you to join us in this mission to create a greener, more equitable future for all."
                        </div>
                        <p className="mt-6 text-xl font-semibold text-lime-700">- Founder Name</p>
                    </div>
                </div>

                {/* Our Team - Tree Structure */}
                <div className="max-w-7xl mx-auto py-16 px-6">
                    <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Our <span className="text-lime-600">Team</span></h2>

                    <div className="flex flex-col items-center">
                        {/* Level 1: Owner/Founder */}
                        <div className="flex flex-col items-center mb-8 relative">
                            <div className="w-32 h-32 rounded-full border-4 border-lime-500 overflow-hidden shadow-lg mb-4 bg-gray-200">
                                {/* <img src={Assets.founder_img} alt="Founder" className="w-full h-full object-cover" /> */}
                                <Users className="w-full h-full p-6 text-gray-400" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">Founder Name</h3>
                            <p className="text-lime-600 font-medium">Founder & CEO</p>

                            {/* Vertical Line */}
                            <div className="absolute top-full left-1/2 w-0.5 h-12 bg-gray-300 -translate-x-1/2"></div>
                        </div>

                        {/* Level 2: Core Team */}
                        <div className="w-full flex justify-center gap-8 md:gap-16 pt-12 relative before:content-[''] before:absolute before:top-0 before:left-1/4 before:right-1/4 before:h-0.5 before:bg-gray-300">
                            {/* Connector Lines */}
                            <div className="absolute top-0 left-1/2 w-0.5 h-12 bg-gray-300 -translate-x-1/2 -mt-12"></div>

                            {[1, 2, 3].map((item) => (
                                <div key={item} className="flex flex-col items-center relative">
                                    <div className="absolute top-0 left-1/2 w-0.5 h-12 bg-gray-300 -translate-x-1/2 -mt-12"></div>
                                    <div className="w-24 h-24 rounded-full border-3 border-lime-400 overflow-hidden shadow mb-3 bg-gray-100">
                                        <Users className="w-full h-full p-4 text-gray-400" />
                                    </div>
                                    <h4 className="text-lg font-bold text-gray-800">Team Member {item}</h4>
                                    <p className="text-sm text-lime-600">Designation</p>
                                </div>
                            ))}
                        </div>

                        {/* Level 3: Extended Team (Optional) */}
                        <div className="w-full flex justify-center gap-4 md:gap-8 pt-12">
                            {/* Add more branches if needed */}
                        </div>
                    </div>
                </div>

                {/* Geographic Focus */}
                <div className="bg-white py-16 px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-col md:flex-row gap-12 items-center">
                            <div className="md:w-1/2">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                    Geographic Focus & <br />
                                    <span className="text-lime-600">Communities Served</span>
                                </h2>
                                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                                    SONF works primarily in rural and peri-urban regions of western Uttar Pradesh, actively engaging with:
                                </p>
                                <ul className="space-y-4">
                                    {[
                                        "Marginalized rural households",
                                        "Women from low-income and informal work backgrounds",
                                        "Children with limited access to quality education",
                                        "Communities dependent on natural resources for livelihoods"
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <MapPin className="w-6 h-6 text-lime-600 shrink-0 mt-1" />
                                            <span className="text-gray-700 text-lg">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="md:w-1/2 bg-lime-50 p-8 rounded-2xl border border-lime-100">
                                <Users className="w-full h-64 text-lime-200" strokeWidth={0.5} />
                                {/* Placeholder for a real map or community image */}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Vision & Mission */}
                <div className="max-w-7xl mx-auto py-28 px-6">
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Vision */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-lime-500 hover:shadow-xl transition-shadow duration-300">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="bg-lime-100 p-3 rounded-full">
                                    <Eye className="w-8 h-8 text-lime-600" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-800">Our Vision</h2>
                            </div>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                To build a climate-resilient and eco-sensitive society where marginalized communities, especially women and children, live with dignity, equality, and harmony with nature.
                            </p>
                        </div>

                        {/* Mission */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-lime-500 hover:shadow-xl transition-shadow duration-300">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="bg-lime-100 p-3 rounded-full">
                                    <Target className="w-8 h-8 text-lime-600" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-800">Our Mission</h2>
                            </div>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                To strengthen communities at the grassroots by promoting ecological sustainability in education, livelihoods, and daily life, guided by the principle of Sustainable Development Goals and preserving and revitalizing India’s traditional knowledge systems.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Governance & Legal */}
                <div className="max-w-7xl mx-auto py-16 px-6">
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Governance */}
                        <div>
                            <div className="flex items-center gap-3 mb-8">
                                <Scale className="w-8 h-8 text-lime-600" />
                                <h2 className="text-3xl font-bold text-gray-900">Governance & Transparency</h2>
                            </div>
                            <p className="text-gray-600 mb-6 text-lg">
                                SONF is committed to accountability, transparency, and ethical governance:
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Strategic oversight by a governing body and advisory members",
                                    "Community participation in program design and implementation",
                                    "Regular financial audits and statutory compliance",
                                    "Transparent reporting to Govt., partners, and stakeholders"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-6 h-6 text-lime-600 shrink-0 mt-0.5" />
                                        <span className="text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Legal Status */}
                        <div className="bg-stone-900 text-white p-8 rounded-2xl shadow-xl">
                            <div className="flex items-center gap-4 mb-8">
                                <FileCheck className="w-8 h-8 text-lime-400" />
                                <h2 className="text-2xl font-bold">Legal Status & Compliance</h2>
                            </div>
                            <div className="space-y-6">
                                <div className="border-b border-gray-700 pb-4">
                                    <p className="text-gray-400 text-sm uppercase tracking-wider mb-1">Registered on</p>
                                    <p className="text-lg font-semibold text-lime-400">NGO Darpan</p>
                                    <p className="text-gray-300">Darpan ID: XXXXX</p>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <p className="text-gray-400 text-sm uppercase tracking-wider mb-1">Income Tax</p>
                                        <p className="text-white font-medium">12A & 80G (XXXXX)</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-sm uppercase tracking-wider mb-1">CSR-1</p>
                                        <p className="text-white font-medium">Registration: XXXXX</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-sm uppercase tracking-wider mb-1">ISO</p>
                                        <p className="text-white font-medium">Quality Management System: XXXXX</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-sm uppercase tracking-wider mb-1">MSME</p>
                                        <p className="text-white font-medium">Registration: XXXXX</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUs
