import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CareersHero = () => {
  return (
    <section className="w-full bg-white text-gray-900 py-24 px-6 md:px-12 text-center overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-lime-400 to-green-600"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight text-gray-900">
          We are looking for <br />
          <span className="text-lime-600">"Change Makers"</span>
        </h1>

        <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Join a team dedicated to building climate-resilient, just, and eco-sensitive communities through education, livelihoods, and conservation.
        </p>

        {/* Sub Heading */}
        <h2 className="text-xl md:text-2xl font-medium text-gray-800 tracking-widest uppercase mb-8 border-b-2 border-lime-500 inline-block pb-2">
          Current Openings
        </h2>

        {/* Placeholder for no openings or specific openings list - keeping generic button for now */}
        <div className="mt-4">
          <Link to="/contact-us" className="group inline-flex items-center gap-2 px-8 py-4 bg-lime-600 hover:bg-lime-700 text-white font-bold text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-lime-500/20">
            View All Opportunities
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CareersHero;
