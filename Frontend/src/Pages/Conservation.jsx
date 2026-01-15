import React from 'react'
import EnrollmentCallToAction from '../Components/EnrollmentCallToAction'
import ProgramPageHeader from '../Components/ProgramPageHeader'
import ProgramGallery from '../Components/ProgramHeroGallery'
import { Assets } from '../assets/Assets'

const Conservation = () => {

    return (
        <div className="bg-white">
            <ProgramPageHeader
                image={Assets.c1}
                title="CONSERVATION & CLIMATE ACTION"
                text="Restoring Ecology, Nurturing Tomorrow"
            />
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">

                <div className="prose prose-lg text-gray-700 mx-auto">
                    <p className="mb-8 leading-relaxed">
                        SONF’s Conservation and Climate Action work focuses on community-led ecological restoration,
                        biodiversity conservation, and nature-based solutions to climate change. These initiatives
                        align with India’s National Action Plan on Climate Change, afforestation goals, and biodiversity priorities.
                    </p>

                    {/* Project RENT */}
                    <div className="mb-10 p-6 bg-green-50 rounded-xl border border-green-100">
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">Project RENT</h2>
                        <h3 className="text-lg font-medium text-[#5F9EA0] mb-4">Restoring Ecology, Nurturing Tomorrow</h3>

                        <p className="mb-4">
                            Project RENT is a community-driven tree plantation and environmental awareness initiative aimed at:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mb-4">
                            <li>Increasing green cover and improving local microclimates</li>
                            <li>Enhancing soil health, water retention, and biodiversity</li>
                            <li>Building environmental stewardship among schools and communities</li>
                        </ul>
                        <p className="italic">
                            The project emphasizes survival, care, and community ownership rather than plantation numbers alone.
                        </p>
                    </div>


                    {/* Apiculture */}
                    <div className="p-6 bg-yellow-50 rounded-xl border border-yellow-100">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Apiculture for Pollinator Conservation & Livelihoods</h2>
                        <p className="mb-4">
                            SONF’s apiculture initiative addresses pollinator decline while creating sustainable livelihood opportunities for women.
                            The Foundation operates an apiculture training and demonstration center in Mirapur, Muzaffarnagar,
                            providing hands-on training in:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mb-4">
                            <li>Beekeeping and hive management</li>
                            <li>Pollinator-friendly farming practices</li>
                            <li>Enterprise development and market access</li>
                        </ul>
                        <p>
                            Women trainees are supported in accessing relevant government schemes and institutional support to establish
                            independent apiculture enterprises.
                        </p>
                    </div>
                    <EnrollmentCallToAction />
                </div>
            </div>
        </div>
    )
}

export default Conservation
