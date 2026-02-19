import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import EnrollmentModal from "./EnrollmentModal";

const CareersHero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="w-full bg-gray-50 text-gray-900 min-h-screen flex items-center justify-center px-6 md:px-12 overflow-hidden relative">

      <div className="relative w-full max-w-7xl mx-auto group">
        {/* Animated Gradient Border Layer */}
        <div className="absolute -inset-[3px] bg-gradient-to-r from-lime-400 via-green-500 to-emerald-400 rounded-3xl bg-[length:400%_400%] animate-gradient-border opacity-75 blur-[2px] transition-all duration-500 group-hover:opacity-100 group-hover:blur-md"></div>

        {/* Inner Content Container */}
        <div className="relative bg-white rounded-3xl p-10 md:p-20 shadow-xl z-10 flex flex-col md:flex-row items-center justify-between gap-12 text-left min-h-[60vh] w-full">

          <div className="flex-1 space-y-6">
            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-900">
              We are looking for <br />
              <span className="text-lime-600">"Change Makers"</span>
            </h1>

            <p className="text-gray-600 text-lg md:text-xl max-w-3xl leading-relaxed">
              Join a team dedicated to building climate-resilient, just, and eco-sensitive communities through education, livelihoods, and conservation.
            </p>
          </div>

          <div className="flex flex-col items-start md:items-end min-w-[300px] space-y-8">
            {/* Sub Heading */}
            <h2 className="text-xl md:text-2xl font-medium text-gray-800 tracking-widest uppercase border-b-2 border-lime-500 inline-block pb-2">
              Current Openings
            </h2>

            {/* Placeholder for no openings or specific openings list - keeping generic button for now */}
            <div>
              <button
                onClick={() => setIsModalOpen(true)}
                className="group/btn inline-flex items-center gap-3 px-10 py-4 bg-lime-600 hover:bg-lime-700 text-white font-bold text-xl rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-lime-500/30"
              >
                Enroll Now
                <ArrowRight className="w-6 h-6 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <EnrollmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default CareersHero;
