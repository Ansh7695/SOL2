import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Deep Electrification Forum",
      desc: "The Deep Electrification Forum has been conceptualised by School of Nature with support from SED Fund to engage in consensus building and policy discourse around deep electrification as a sustainable energy transition pathway to achieve India’s net-zero targets. The Forum delves into the impact and feasibility aspects of sectoral deep electrification programs.",
    },
    {
      title: "Localising Climate Action",
      desc: "Under the visionary leadership of Hon’ble Chief Minister Shri Yogi Adityanath, Uttar Pradesh is advancing rapidly in climate action through initiatives at various governance levels. A key initiative includes developing action plans for 43 Climate Smart Gram Panchayats, identified through a multi-criteria assessment in highly vulnerable districts.",
    },
    {
      title: "Equitable and Inclusive Energy Transition",
      desc: "School of Nature, with support from the India Climate Collaborative, is working to mainstream the discourse on equitable and inclusive energy transitions in India, aiming to build a collective understanding of the Just Transition Landscape in India. As part of this initiative, School of Nature is developing a series of knowledge products to explore various themes around energy transition.",
    },
    {
      title: "India’s Power Outlook Series",
      desc: "The Power Outlook Series developed by School of Nature provides an overview of the current status of India’s power sector with a focus on significant and emerging developments. The outlook series aims to develop a more informed understanding of the power sector and act as a tracking tool for stakeholders.",
    },
  ];

  return (
    <section className="py-12 px-6 md:px-12 bg-white text-center">
      {/* Heading */}
      <h2 className="text-3xl font-bold mb-12">
        <span className="text-green-600">Our</span> Projects
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col justify-between p-6 border rounded-lg shadow-sm hover:shadow-md transition bg-white"
          >
            <div>
              <h3 className="text-lg font-semibold mb-4">{project.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {project.desc}
              </p>
            </div>
            <button className="mt-6 px-4 py-2 border border-green-500 text-green-600 rounded-md hover:bg-green-500 hover:text-white transition w-fit mx-auto">
              View
            </button>
          </div>
        ))}
      </div>

      {/* More button */}
      <div className="mt-10">
        <button className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition">
          MORE →
        </button>
      </div>
    </section>
  );
};

export default Projects;
