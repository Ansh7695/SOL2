import React from 'react'
import { Eye, Target, CheckCircle2, Users, MapPin, Scale, FileCheck } from 'lucide-react'
import { Assets } from '../assets/Assets'

const AboutUs = () => {
    return (
        <div className="bg-gray-50 min-h-screen">
            {/* 1. MEET OUR FOUNDER - HERO SECTION */}
            <section className="bg-white h-screen flex items-center justify-center py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-10 items-center">
                        {/* Left Content */}
                        <div>
                            {/* Small Label */}
                            <div className="flex items-center gap-2 mb-6">
                                <div className="w-3 h-3 bg-lime-600 rounded-sm"></div>
                                <span className="text-lg font-medium text-gray-600 uppercase tracking-wide">Meet Our Founder</span>
                            </div>

                            {/* Large Heading */}
                            <h1 className="text-6xl md:text-7xl font-bold text-emerald-900 mb-8 leading-tight">
                                MANISHA<br />AHLAWAT
                            </h1>

                            {/* Description Card */}
                            <div className="bg-lime-50 border-2 border-lime-200 rounded-2xl p-6">
                                <p className="text-gray-700 leading-relaxed">
                                    With over two decades of experience in social development and environmental conservation, Manisha has been a driving force behind the School of Nature. Her vision is to bridge the gap between traditional wisdom and modern sustainability practices, empowering communities to lead self-sufficient lives.
                                </p>
                            </div>
                        </div>

                        {/* Right Content - Square with Overlapping PNG Image */}
                        <div className="relative flex justify-end pt-10 pr-10">
                            <div className="w-[280px] h-[280px] md:w-[450px] md:h-[450px] border-8 border-lime-600 rounded-3xl shadow-xl relative bg-transparent">
                                {/* Image overlaps the border, creating a pop-out effect */}
                                <img
                                    src={Assets.Manisha}
                                    alt="Manisha Ahlawat"
                                    className="absolute w-[120%] h-auto max-w-none object-contain z-10 -bottom-2 -left-16 drop-shadow-2xl"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. FOUNDER WELCOME STATEMENT - GREEN BAND */}
            <section className="bg-gradient-to-br from-emerald-900 via-lime-800 to-lime-600 text-white py-16 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-lg md:text-xl leading-relaxed mb-8 italic">
                        "Welcome to School of Nature. Our journey began with a simple yet profound belief: that nature is our best teacher. We envisioned a platform where communities could thrive in harmony with their environment. Every step we take is guided by the principles of sustainability, empathy, and empowerment. We invite you to join us in this mission to create a greener, more equitable future for all."
                    </p>
                    <p className="text-3xl italic text-lime-200" style={{ fontFamily: "'Great Vibes', cursive" }}>
                        — Manisha Ahlawat
                    </p>
                </div>
            </section>

            {/* 3. OUR VISION & OUR MISSION */}
            <section className="bg-white py-20 px-8 ">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Vision Card */}
                        <div className="bg-lime-50 border border-lime-200 rounded-2xl p-10 shadow-md min-h-[300px] flex flex-col">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="bg-white p-3 rounded-full shadow-sm">
                                    <Eye className="w-7 h-7 text-lime-600" />
                                </div>
                                <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-lg">
                                To build a climate-resilient and eco-sensitive society where marginalized communities, especially women and children, live with dignity, equality, and harmony with nature.
                            </p>
                        </div>

                        {/* Mission Card */}
                        <div className="bg-lime-50 border border-lime-200 rounded-2xl p-10 shadow-md min-h-[300px] flex flex-col">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="bg-white p-3 rounded-full shadow-sm">
                                    <Target className="w-7 h-7 text-lime-600" />
                                </div>
                                <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-lg">
                                To strengthen communities at the grassroots by promoting ecological sustainability in education, livelihoods, and daily life, guided by the principle of Sustainable Development Goals.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. OUR TEAM SECTION */}
            <section className="bg-gray-50 py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 inline-block relative">
                            Our <span className="text-lime-600">Team</span>
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-lime-600 rounded-full"></div>
                        </h2>
                    </div>

                    {/* Team Cards */}
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { name: "Team Member 1", role: "Operations Head", bio: "Expert in supply chain management and community logistics with focus on sustainable practices." },
                            { name: "Team Member 2", role: "Program Director", bio: "Specializes in educational curriculum development and child welfare programs." },
                            { name: "Team Member 3", role: "Community Outreach", bio: "Bridge between the organization and the rural communities we serve." }
                        ].map((member, idx) => (
                            <div key={idx} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow">
                                {/* Circular Icon */}
                                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-lime-100 flex items-center justify-center">
                                    <Users className="w-10 h-10 text-lime-600" />
                                </div>

                                {/* Name */}
                                <h3 className="text-xl font-bold text-gray-900 text-center mb-2">{member.name}</h3>

                                {/* Role */}
                                <p className="text-lime-600 font-semibold text-center mb-4">{member.role}</p>

                                {/* Description */}
                                <p className="text-gray-600 text-sm text-center leading-relaxed">{member.bio}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. GEOGRAPHIC FOCUS & COMMUNITIES SERVED */}
            <section className="bg-white py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                Geographic Focus & <span className="text-lime-600">Communities Served</span>
                            </h2>
                            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                                SONF works primarily in rural and peri-urban regions of western Uttar Pradesh, actively engaging with:
                            </p>

                            {/* Bullet List */}
                            <ul className="space-y-4">
                                {[
                                    "Marginalized rural households",
                                    "Women from low-income backgrounds",
                                    "Children with limited education access",
                                    "Resource-dependent communities"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-6 h-6 text-lime-600 shrink-0 mt-1" />
                                        <span className="text-gray-700 text-lg">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Right Content - Illustration Placeholder */}
                        <div className="bg-lime-50 rounded-2xl p-12 border border-lime-200">
                            <MapPin className="w-full h-64 text-lime-300" strokeWidth={0.5} />
                        </div>
                    </div>
                </div>
            </section>

            {/* 6 & 7. GOVERNANCE & TRANSPARENCY + LEGAL STATUS */}
            <section className="bg-gray-50 py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Governance Section */}
                        <div className="bg-white rounded-2xl p-8 shadow-md">
                            <div className="flex items-center gap-3 mb-6">
                                <Scale className="w-8 h-8 text-lime-600" />
                                <h2 className="text-3xl font-bold text-gray-900">Governance & Transparency</h2>
                            </div>
                            <p className="text-gray-600 mb-6 leading-relaxed">
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

                        {/* Legal Status & Compliance Card */}
                        <div className="bg-gray-900 text-white rounded-2xl p-8 shadow-xl">
                            <div className="flex items-center gap-3 mb-8">
                                <FileCheck className="w-8 h-8 text-lime-400" />
                                <h2 className="text-2xl font-bold">Legal Status & Compliance</h2>
                            </div>

                            <div className="space-y-6">
                                {/* Registration */}
                                <div className="border-b border-gray-700 pb-4">
                                    <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Registered No.</p>
                                    <p className="text-white font-medium mb-2">ABECS3657FF20225</p>
                                    <p className="text-lime-400 font-semibold text-lg mb-1">NGO Darpan</p>
                                    <p className="text-gray-300">Darpan ID: UP/2023/0335581</p>
                                </div>

                                {/* Grid of Certifications */}
                                <div className="grid grid-cols-2 gap-6">
                                    <div>
                                        <p className="text-lime-400 text-sm font-semibold mb-1">Income Tax</p>
                                        <p className="text-white text-sm">12A & 80G</p>
                                        <p className="text-gray-400 text-xs">(BECS3657FE20219)</p>
                                    </div>
                                    <div>
                                        <p className="text-lime-400 text-sm font-semibold mb-1">CSR-1</p>
                                        <p className="text-white text-sm">MCA:369298</p>
                                    </div>
                                    <div>
                                        <p className="text-lime-400 text-sm font-semibold mb-1">MSME</p>
                                        <p className="text-white text-sm">(Applied)</p>
                                    </div>
                                    <div>
                                        <p className="text-lime-400 text-sm font-semibold mb-1">ISO</p>
                                        <p className="text-white text-sm">QMS (Applied)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutUs
