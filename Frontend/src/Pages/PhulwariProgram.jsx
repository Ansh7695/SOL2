import React from 'react'
import EnrollmentCallToAction from '../Components/EnrollmentCallToAction'

const PhulwariProgram = () => {
    return (
        <div className="bg-white">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="mb-10 text-center">
                    <h1 className="text-4xl font-extrabold text-[#5F9EA0] mb-4">PHULWARI PROGRAM</h1>
                    <h2 className="text-2xl font-semibold text-gray-800">About: Education, Inclusion & Environmental Learning</h2>
                </div>

                <div className="prose prose-lg text-gray-700 mx-auto max-w-4xl">
                    <p className="mb-4 leading-relaxed">
                        The Phulwari Program is designed to reach children who are most likely to be excluded from formal education systems,
                        including children of migrant laborers, homeless and rag-picker families, pathway-side and informal slum settlements,
                        along with other urban and rural marginalized communities.
                    </p>
                    <p className="mb-4 leading-relaxed">
                        These children often face disrupted schooling, frequent migration, lack of documentation, unstable living conditions,
                        and limited academic support. Phulwari responds by creating flexible, community-based learning spaces that ensure
                        continuity of education, emotional support, and long-term pathways to higher learning.
                    </p>
                    <p className="mb-10 leading-relaxed">
                        The program provides free, inclusive, and value-based education, integrating environmental awareness, climate literacy,
                        and scientific temperament via experiential learning from an early age at our STEM lab. Phulwari complements the formal
                        education system and aligns closely with the National Education Policy (2020), particularly its emphasis on foundational
                        learning, equity, experiential education, and retention of first-generation learners.
                    </p>

                    {/* Program Key Components */}
                    <div className="bg-blue-50 p-8 rounded-xl border border-blue-100 mb-10">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">Program Key Components</h3>
                        <ul className="space-y-3 list-none pl-0">
                            {[
                                "Academic remedial support for Classes 1–10, focusing on foundational literacy and numeracy",
                                "Integrated environmental studies and sustainability practices",
                                "Personalized mentoring and guidance by trained Baalmitras",
                                "Navodaya Vidyalaya entrance exam preparation support",
                                "STEM-based extracurricular activities and exposure visits",
                                "Higher education and transition support under the Dhool Ke Phool initiative"
                            ].map((item, index) => (
                                <li key={index} className="flex items-start">
                                    <span className="text-blue-500 mr-2 font-bold">➤</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Program Growth & Reach */}
                    <div className="mb-10">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">Program Growth & Reach</h3>
                        <p className="mb-4">
                            The Phulwari Program has evolved steadily in response to community needs, demonstrating both scalability and adaptability.
                        </p>
                        <div className="space-y-4 mb-6 ml-4 border-l-2 border-gray-200 pl-4">
                            <p><strong className="text-gray-900">2020:</strong> Launched as an online support initiative with 4 Baalmitras, focusing on academic and higher-education guidance during the pandemic period.</p>
                            <p><strong className="text-gray-900">2021:</strong> Transitioned to a physical community-based model in Jai Bheem Nagar, Meerut, supporting 100 children across Classes 1–10.</p>
                            <p><strong className="text-gray-900">2022–2023:</strong> Expanded to five community locations (Jai Bheem Nagar, Diggi, Sadhu Nagar, Golabad, Shobhapur), engaging 244 children annually with support from 13 trained Baalmitras.</p>
                            <p><strong className="text-gray-900">2024:</strong> Consolidated operations across Jai Bheem Nagar, Sadhu Nagar, and Daurala, supporting 256 children through 8 Baalmitras.</p>
                            <p><strong className="text-gray-900">2025–2026:</strong> Continued growth and stabilization, reaching 289 children in 2025 and 290 children in 2026, with sustained academic and mentoring support across three active learning centers.</p>
                        </div>
                        <p className="italic text-gray-600">
                            This progression reflects SONF’s emphasis on quality, continuity, and community trust, rather than rapid expansion alone.
                        </p>
                    </div>

                    {/* Educational Impact */}
                    <div className="bg-green-50 p-8 rounded-xl border border-green-100">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">Educational Impact</h3>
                        <ul className="space-y-3 list-disc pl-5">
                            <li>Expanded access to free and supportive learning spaces for nearly 300 children annually</li>
                            <li>Improved attendance, learning continuity, and academic confidence</li>
                            <li>Sustained mentoring support through trained Baalmitras embedded in the community</li>
                            <li>Strengthened pathways to secondary schooling, Navodaya Vidyalaya preparation, and higher education aspirations under Dhool ke Phool Program.</li>
                            <li>Reduction in learning gaps and educational exclusion of disadvantageous groups of society at the community level.</li>
                        </ul>
                    </div>

                    <EnrollmentCallToAction />
                </div>
            </div>
        </div>
    )
}

export default PhulwariProgram
