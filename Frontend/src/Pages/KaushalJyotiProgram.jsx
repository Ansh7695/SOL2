import React from 'react'
import EnrollmentCallToAction from '../Components/EnrollmentCallToAction'

const KaushalJyotiProgram = () => {
    return (
        <div className="bg-white">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="mb-10 text-center">
                    <h1 className="text-4xl font-extrabold text-[#5F9EA0] mb-4">KAUSHAL JYOTI PROGRAM</h1>
                    <h2 className="text-2xl font-semibold text-gray-800">About: Women’s Livelihoods & Economic Empowerment</h2>
                </div>

                <div className="prose prose-lg text-gray-700 mx-auto max-w-4xl">
                    <p className="mb-6 leading-relaxed">
                        Kaushal Jyoti empowers rural and marginalized women by strengthening skills, confidence, and income opportunities
                        through sustainable, low-carbon, and culturally rooted livelihoods. The program recognizes women not only as
                        income earners but as leaders, producers, and custodians of traditional knowledge.
                    </p>
                    <p className="mb-8">
                        The initiative aligns with the National Rural Livelihoods Mission (NRLM) and gender-responsive livelihood frameworks.
                    </p>

                    {/* Livelihood Initiatives */}
                    <div className="bg-pink-50 p-8 rounded-xl border border-pink-100 mb-10">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">Livelihood Initiatives</h3>
                        <ul className="grid md:grid-cols-2 gap-4 list-none pl-0">
                            {[
                                "Handicrafts and traditional craft revival",
                                "Upcycled textile and sustainable fabric products",
                                "Papier-mâché and pottery craft conservation",
                                "Tailoring and eco-friendly tote bag production",
                                "Candle, pickle, and value-added food products",
                                "Organic and natural farming practices"
                            ].map((item, index) => (
                                <li key={index} className="flex items-start">
                                    <span className="text-pink-500 mr-2">➤</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Scale & Impact */}
                    <div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">Scale & Impact</h3>
                        <p className="mb-4">
                            Kaushal Jyoti began in 2022 with 40 women receiving basic skill training. Since then, the program has expanded both in scale and diversity of livelihood options:
                        </p>
                        <ul className="space-y-4 mb-6">
                            <li>
                                <strong className="text-gray-900">2023:</strong> Reached 160 women, introducing structured training in handicrafts and micro-entrepreneurship.
                            </li>
                            <li>
                                <strong className="text-gray-900">2024:</strong> Expanded to 186 women, strengthening collective production and confidence-building.
                            </li>
                            <li>
                                <strong className="text-gray-900">2025–2026:</strong> Stabilized engagement with 250 women annually, offering diversified livelihood options including pickle making, candle making, beekeeping, tote bag production, tailoring, papier-mâché, pottery, and organic farming.
                            </li>
                        </ul>
                        <p className="italic bg-gray-50 p-4 rounded-lg border-l-4 border-[#5F9EA0]">
                            "Participants have reported improved income opportunities, enhanced self-reliance, in surveys conducted time to time."
                        </p>
                    </div>

                    <EnrollmentCallToAction />
                </div>
            </div>
        </div>
    )
}

export default KaushalJyotiProgram
