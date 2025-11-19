import React from "react";

const Banner2 = () => {
  return (
    <div className="w-full text-center py-12 px-6">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
        <span className="text-lime-600 font-semibold">15 years</span> of making change
      </h2>

      {/* Underline */}
      <div className="w-12 h-[2px] bg-lime-500 mx-auto my-4"></div>

      {/* Description */}
      <p className="text-gray-500 text-sm sm:text-base md:text-lg leading-relaxed">
        <span className="font-semibold text-gray-800">School of Nature</span> is a non-profit organisation 
        set up in 2010, with the belief in the conservation of Vasudha, which in Sanskrit means the Earth, 
        the giver of wealth, and with the objective of promoting sustainable consumption of its bounties.
      </p>
    </div>
  );
};

export default Banner2;
