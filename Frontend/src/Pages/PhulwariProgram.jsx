import React from 'react'
import EnrollmentCallToAction from '../Components/EnrollmentCallToAction'
import ProgramPageHeader from '../Components/ProgramPageHeader'
import ProgramGallery from '../Components/ProgramHeroGallery' // Reusing the file we refactored
import { Assets } from '../assets/Assets'

const PhulwariProgram = () => {

    const programImages = [
        Assets.p1, Assets.p2, Assets.p3, // Replace with actual Phulwari program images
        Assets.p4, Assets.p5, Assets.p6,
        Assets.p7, Assets.p8, Assets.p9,
        Assets.p10, Assets.p11, Assets.p12,
        Assets.p13, Assets.p14, Assets.p15,
        Assets.p16, Assets.p17, Assets.p18,
        Assets.p19, Assets.p20, Assets.p21,
        Assets.p22, Assets.p23, Assets.p24,
        Assets.p25, Assets.p26, Assets.p27,
        Assets.p28, Assets.p29, Assets.p30,
        Assets.p31, Assets.p32, Assets.p33,
        Assets.p34, Assets.p35, Assets.p36,
        Assets.p37, Assets.p38, Assets.p39,
        Assets.p40, Assets.p41, Assets.p42,
        Assets.p43,
    ];

    return (
        <div className="bg-white">
            <ProgramPageHeader
                image={Assets.pheader}
                title="PHULWARI PROGRAM"
                text="About: Education, Inclusion & Environmental Learning"
            />
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">

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

                    <ProgramGallery images={programImages} />

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
