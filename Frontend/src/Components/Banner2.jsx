import React from "react";

const Banner2 = () => {
  return (
    <div className="w-full text-center py-12 px-6 bg-white">
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
        About the <span className="text-lime-600">Foundation</span>
      </h2>

      {/* Underline */}
      <div className="w-16 h-1 bg-lime-500 mx-auto mb-8 rounded-full"></div>

      {/* Description */}
      <div className="max-w-4xl mx-auto space-y-6 text-gray-600 text-base sm:text-lg leading-relaxed text-justify sm:text-center">
        <p>
          <span className="font-semibold text-gray-800">School of Nature Foundation (SONF)</span> is a
          grassroots, non-profit organization working since 2020 to strengthen marginalized communities
          through an integrated approach to education, women-led livelihood enterprises, and ecological conservation.
          Rooted in community participation and guided by the Sustainable Development Goals (SDGs), and traditional
          ecological knowledge, SONF works to build climate-resilient, just, and eco-sensitive communities.
        </p>
        <p>
          India continues to face interconnected challenges, i.e., learning deficiency among children, low and
          informal female workforce participation, and growing climate vulnerability in rural landscapes due to
          development without preserving nature. These challenges disproportionately affect women and children from
          marginalized communities due to their inherent vulnerabilities. SONF responds by addressing social,
          economic, and ecological vulnerabilities together rather than in isolation.
        </p>
      </div>
    </div>
  );
};

export default Banner2;
