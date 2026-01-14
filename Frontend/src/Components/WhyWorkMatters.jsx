import React from 'react';
import { Users, MapPin, Globe, Heart } from 'lucide-react';

const WhyWorkMatters = () => {
    const points = [
        {
            title: "Community-led",
            description: "rather than externally imposed",
            icon: <Users className="w-10 h-10 text-lime-600 mb-3" />
        },
        {
            title: "Locally rooted",
            description: "drawing on indigenous and local knowledge and practices",
            icon: <MapPin className="w-10 h-10 text-lime-600 mb-3" />
        },
        {
            title: "Environmentally responsible",
            description: "ensuring that development does not compromise ecological balance",
            icon: <Globe className="w-10 h-10 text-lime-600 mb-3" />
        },
        {
            title: "Gender-just",
            description: "recognizing women as key agents of paradigm shifting",
            icon: <Heart className="w-10 h-10 text-lime-600 mb-3" />
        }
    ];

    return (
        <div className="w-full py-16 px-6 bg-white">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-8 uppercase tracking-wide">
                    Why Our Work <span className="text-lime-600">Matters</span>
                </h2>

                <div className="max-w-4xl mx-auto text-center mb-12">
                    <p className="text-gray-600 text-lg leading-relaxed text-justify sm:text-center">
                        Anthropogenic induce climate change, ecological degradation, and social inequality are not isolated crises.
                        They intersect most sharply at the grassroots level, where fragile livelihoods, limited access to quality
                        education, and erosion of traditional knowledge undermine long-term resilience. Women and children are often
                        the first to experience these impacts and the last to access solutions. SONF believes that sustainable change must be:
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {points.map((point, index) => (
                        <div key={index} className="bg-lime-50 p-6 rounded-lg border border-lime-100 hover:bg-lime-100 transition-colors duration-300 flex flex-col items-center text-center">
                            {point.icon}
                            <h3 className="text-xl font-bold text-gray-800 mb-2">{point.title}</h3>
                            <p className="text-gray-600">{point.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WhyWorkMatters;
