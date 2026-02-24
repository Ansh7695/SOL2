import React from 'react';
import { Link } from 'react-router-dom';
import { Assets } from '../assets/Assets';

const ProgramsPage = () => {
    const programs = [
        {
            title: "Phulwari Program",
            description: "Builds foundational learning, environmental awareness, values, and future skills among children, enabling informed and responsible citizenship.",
            image: Assets.phulwariLogo,
            theme: "orange",
            colorClass: "bg-orange-500",
            iconColor: "text-orange-500",
            borderColor: "border-orange-500",
            link: "/programs/phulwari"
        },
        {
            title: "Kaushal Jyoti Program",
            description: "Strengthens household resilience by enhancing women’s skills, income security, and economic agency through low-carbon livelihoods.",
            image: Assets.kaushallogo,
            theme: "blue",
            colorClass: "bg-blue-500",
            iconColor: "text-blue-500",
            borderColor: "border-blue-500",
            link: "/programs/kaushal-jyoti"
        },
        {
            title: "Conservation & Apiculture",
            description: "Protects ecosystems, biodiversity, and natural resources while generating livelihood opportunities linked to conservation outcomes.",
            image: Assets.conservationlogo,
            theme: "green",
            colorClass: "bg-lime-600",
            iconColor: "text-lime-600",
            borderColor: "border-lime-600",
            link: "/conservation"
        }
    ];

    return (
        <div className="w-full bg-slate-50 min-h-screen pt-16 pb-20">
            {/* 1️⃣ HERO SECTION */}
            <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative">

                    {/* Left: Text Content (Heading Only) */}
                    <div className="space-y-8 order-1 z-20">
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-tight">
                            Our Integrated <br />
                            <span className="text-lime-600 relative inline-block">
                                Program Approach

                            </span>
                        </h1>
                    </div>

                    {/* Right: Feature Image & Overlapping Statement */}
                    <div className="relative order-2">
                        {/* Futuristic Folder Image Container */}
                        <div className="relative w-full h-[450px] lg:h-[500px] shadow-2xl drop-shadow-xl transition-transform duration-500 hover:scale-[1.01]"
                            style={{
                                clipPath: "polygon(0 0, 70% 0, 75% 10%, 100% 10%, 100% 90%, 90% 100%, 0 100%)",
                                filter: "drop-shadow(0 20px 13px rgb(0 0 0 / 0.03))"
                            }}>
                            <img
                                src={Assets.landscape1 || Assets.Headerbg}
                                alt="Integrated Approach"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-transparent"></div>

                            {/* High-tech border overlay */}
                            <div className="absolute inset-0 border border-white/20 pointer-events-none"
                                style={{ clipPath: "polygon(0 0, 70% 0, 75% 10%, 100% 10%, 100% 90%, 90% 100%, 0 100%)" }}></div>
                        </div>

                        {/* Statement Card - Overlapping (Half-on/Half-off) */}
                        <div className="absolute -bottom-5 -left-12 lg:-left-55 w-[95%] lg:w-[90%] bg-white/95 backdrop-blur-md p-8 rounded-tr-3xl rounded-bl-3xl shadow-2xl border-l-4 border-lime-500 z-30">
                            <p className="text-slate-700 text-lg lg:text-xl font-medium leading-relaxed">
                                “SON follows an integrated development model where <span className="text-lime-700 font-bold">education</span>, <span className="text-blue-700 font-bold">livelihoods</span>, and <span className="text-green-700 font-bold">climate action</span> reinforce one another, creating a self-sustaining cycle of resilience.”
                            </p>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -top-8 -right-8 w-32 h-32 bg-lime-400/20 rounded-full blur-3xl -z-10"></div>
                        <div className="absolute top-1/2 -right-12 w-24 h-24 bg-blue-400/20 rounded-full blur-3xl -z-10"></div>
                    </div>
                </div>
            </div>

            {/* 2️⃣ INTEGRATED PROGRAM FOLDER SECTION */}
            <div className="max-w-7xl mx-auto px-6 lg:px-8 min-h-screen flex flex-col justify-center">
                <div className="text-center mb-16 -mt-60">
                    <h3 className="text-5xl lg:text-6xl font-bold text-slate-900">Explore Our Programs</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {programs.map((program, index) => (
                        <div key={index} className="group relative [perspective:1000px] h-[320px] cursor-pointer -bottom-15">
                            <Link to={program.link} className="block w-full h-full relative [transform-style:preserve-3d] transition-transform duration-700 ease-in-out group-hover:[transform:rotateY(180deg)]">

                                {/* 📂 FRONT FACE */}
                                <div className={`absolute inset-0 w-full h-full [backface-visibility:hidden] shadow-xl rounded-br-2xl rounded-bl-2xl rounded-tl-2xl bg-white border-4 ${program.borderColor}`}>
                                    {/* Top Tab */}
                                    <div className={`absolute -top-8 right-[-4px] w-1/3 h-9 bg-white border-t-4 border-r-4 ${program.borderColor} rounded-tr-xl z-10`}>
                                        {/* Angled Left Edge */}
                                        <div className={`absolute top-[-4px] -left-4 w-6 h-9 bg-white border-l-4 border-t-4 ${program.borderColor} rounded-tl-lg -skew-x-[20deg] origin-bottom-right z-10`}></div>
                                        {/* Mask to hide bottom border seam */}
                                        <div className="absolute -bottom-1 -left-4 h-2 bg-white"></div>
                                    </div>

                                    {/* Main Body */}
                                    <div className="h-full w-full p-8 flex flex-col items-center justify-center relative overflow-hidden bg-white/50 rounded-br-2xl rounded-bl-2xl rounded-tr-2xl">
                                        <div className={`w-32 h-32 rounded-full flex items-center justify-center mb-6 bg-${program.theme}-50 p-4 border border-${program.theme}-100`}>
                                            <img src={program.image} alt={program.title} className="w-full h-full object-contain" />
                                        </div>
                                        <h3 className={`text-2xl font-bold text-slate-800 text-center group-hover:opacity-0 transition-opacity duration-300`}>
                                            {program.title}
                                        </h3>
                                    </div>
                                </div>

                                {/* 📄 BACK FACE (Content) */}
                                <div className={`absolute inset-0 w-full h-full [transform:rotateY(180deg)] [backface-visibility:hidden] shadow-2xl rounded-br-2xl rounded-bl-2xl rounded-tl-2xl ${program.colorClass} text-white p-8 flex flex-col items-center justify-center text-center`}>
                                    {/* Back Tab Visual */}
                                    <div className={`absolute -top-8 right-[-0.9px] w-[calc(33.33%+2px)] h-9 ${program.colorClass} rounded-tr-xl z-10`}>
                                        {/* Angled Left Edge */}
                                        <div className={`absolute top-0 -left-6 w-8 h-9 ${program.colorClass} rounded-tl-lg -skew-x-[20deg] origin-bottom-right z-10`}></div>
                                        {/* Mask to hide bottom seam */}
                                        <div className={`absolute -bottom-1 -left-7 right-0 h-2 ${program.colorClass}`}></div>
                                    </div>

                                    <h3 className="text-2xl font-bold mb-6">{program.title}</h3>
                                    <p className="text-lg leading-relaxed font-medium opacity-95">
                                        {program.description}
                                    </p>
                                    <div className="mt-8 px-6 py-2 bg-white/20 rounded-full font-semibold text-sm backdrop-blur-sm group-hover:scale-105 transition-transform">
                                        Learn More &rarr;
                                    </div>
                                </div>

                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProgramsPage;
