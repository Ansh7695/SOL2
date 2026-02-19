import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Briefcase, Sprout } from 'lucide-react';
import { Assets } from '../assets/Assets';

const ProgramApproach = () => {
    const programs = [
        {
            title: "Phulwari Program",
            description: "Builds foundational learning, environmental awareness, values, and future skills among children, enabling informed and responsible citizenship.",
            image: Assets.phulwariLogo,
            bgColor: "bg-orange-500",
            link: "/programs/phulwari"
        },
        {
            title: "Kaushal Jyoti Program",
            description: "Strengthens household resilience by enhancing women’s skills, income security, Entrepreneurship, and economic agency through low-carbon and culturally rooted livelihoods.",
            image: Assets.kaushallogo,
            bgColor: "bg-blue-500",
            link: "/programs/kaushal-jyoti"
        },
        {
            title: "Conservation & Apiculture",
            description: "Protects ecosystems, biodiversity, and natural resources while generating livelihood opportunities linked to conservation outcomes.",
            image: Assets.conservationlogo,
            bgColor: "bg-green-600",
            link: "/conservation"
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
                        <Link
                            to={program.link}
                            key={index}
                            className="relative group block mt-12"
                        >
                            {/* Paper Sheet (Back Layer) */}
                            <div className="absolute top-[-10px] left-4 right-4 h-full bg-white border border-gray-200 rounded-xl shadow-sm transform group-hover:-translate-y-6 transition-transform duration-300 ease-out z-0"></div>

                            {/* Main Folder (Front Layer) */}
                            <div className={`${program.bgColor} relative z-10 p-8 rounded-tr-2xl rounded-br-2xl rounded-bl-2xl shadow-xl transform group-hover:-translate-y-2 transition-transform duration-300 ease-out text-white flex flex-col items-center text-center`}>
                                {/* Folder Tab */}
                                <div className={`absolute -top-8 left-0 w-1/3 h-8 ${program.bgColor} rounded-t-2xl`}></div>

                                {/* Content */}
                                <div className="w-24 h-24 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center mb-6 shadow-md overflow-hidden p-2 group-hover:scale-105 transition-transform duration-300">
                                    <img src={program.image} alt={program.title} className="w-full h-full object-contain" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 tracking-tight">{program.title}</h3>
                                <p className="leading-relaxed opacity-95 font-medium">
                                    {program.description}
                                </p>
                            </div>
                        </Link>
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
