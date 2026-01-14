import React from 'react';
import { Leaf, GraduationCap, Users } from 'lucide-react';

const FocusAreas = () => {
    const areas = [
        {
            icon: <GraduationCap className="w-12 h-12 text-lime-600 mb-4" />,
            text: "Inclusive, value-based, scientific temperament and eco-sensitivity integrated education for marginalized children"
        },
        {
            icon: <Users className="w-12 h-12 text-lime-600 mb-4" />,
            text: "Sustainable livelihoods and entrepreneurship training and capacity building support for handicraft-based entrepreneurships of rural and marginalized women"
        },
        {
            icon: <Leaf className="w-12 h-12 text-lime-600 mb-4" />,
            text: "Climate action, biodiversity conservation, and community resilience through nature-based solutions, indigenous knowledge integration."
        }
    ];

    return (
        <div className="w-full py-16 px-6 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12">
                    Our <span className="text-lime-600">Focus Areas</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {areas.map((area, index) => (
                        <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center border-t-4 border-lime-500">
                            {area.icon}
                            <p className="text-gray-700 leading-relaxed font-medium">
                                {area.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FocusAreas;
