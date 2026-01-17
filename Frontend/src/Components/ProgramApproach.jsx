import React from 'react';
import { BookOpen, Briefcase, Sprout } from 'lucide-react';
import { Assets } from '../assets/Assets';

const ProgramApproach = () => {
    const programs = [
        {
            title: "Phulwari Program",
            description: "Builds foundational learning, environmental awareness, values, and future skills among children, enabling informed and responsible citizenship.",
            image: Assets.phulwariLogo,
            bgColor: "bg-orange-500"
        },
        {
            title: "Kaushal Jyoti Program",
            description: "Strengthens household resilience by enhancing women’s skills, income security, Entrepreneurship, and economic agency through low-carbon and culturally rooted livelihoods.",
            image: Assets.kaushallogo,
            bgColor: "bg-blue-500"
        },
        {
            title: "Conservation & Apiculture",
            description: "Protects ecosystems, biodiversity, and natural resources while generating livelihood opportunities linked to conservation outcomes.",
            image: Assets.conservationlogo,
            bgColor: "bg-green-600"
        }
    ];

    return (
        <div className="w-full py-16 px-6 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-8 uppercase tracking-wide">
                    Our Integrated <span className="text-lime-600">Program Approach</span>
                </h2>

                <div className="max-w-4xl mx-auto text-center mb-12">
                    <p className="text-gray-600 text-lg leading-relaxed">
                        SONF follows an integrated development model where education, livelihoods, and climate action reinforce one another, creating a self-sustaining cycle of resilience.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {programs.map((program, index) => (
                        <div key={index} className={`${program.bgColor} p-8 rounded-xl shadow-lg transform hover:-translate-y-2 transition-transform duration-300 text-white flex flex-col items-center text-center`}>
                            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-6 shadow-md overflow-hidden p-2">
                                <img src={program.image} alt={program.title} className="w-full h-full object-contain" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{program.title}</h3>
                            <p className="leading-relaxed opacity-90">
                                {program.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <p className="text-gray-700 font-semibold text-lg">
                        Together, these programs create measurable social, economic, and ecological impact at the community level.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProgramApproach;
