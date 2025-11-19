import React from "react";

const CareersHero = () => {
  return (
    <section className="relative bg-gradient-to-r from-green-600 to-black text-white py-24 px-6 md:px-12 text-center rounded-lg shadow-lg">
      <div className="max-w-4xl mx-auto">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-snug">
          We are looking for <span className="text-green-300">"Change Makers"</span>. <br /> 
          Join Us!
        </h1>

        {/* Sub Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold text-green-400 tracking-wide">
          CURRENT OPENINGS
        </h2>

        {/* Optional Button */}
        <button className="mt-8 px-8 py-3 bg-green-500 hover:bg-green-400 text-black font-bold rounded-lg shadow-md transition">
          View Openings
        </button>
      </div>
    </section>
  );
};

export default CareersHero;
