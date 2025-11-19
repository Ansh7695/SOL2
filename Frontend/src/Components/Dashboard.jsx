import React from "react";
import { Assets } from "../assets/Assets";

const Dashboard = () => {
  const dashboards = [
    {
      title: "Gujarat Climate Action Tracker",
      img: Assets.Ib5, // apna image link daalna
      desc: "Developed by School of Nature in collaboration with the Department of Climate Change, Government of Gujarat, and the Gujarat Energy Development Agency (GEDA), this initiative is designed to strengthen bottom-up climate and energy transition planning across the state.",
    },
    {
      title: "Kerala GHG Portal",
      img: Assets.Ib6,
      desc: "A joint initiative between the Directorate of Environment and Climate Change, Government of Kerala and School of Nature. It tracks GHG emissions/removals and supports carbon-neutral pathways in alignment with NDCs.",
    },
    {
      title: "UP Solar Cities Portal",
      img: Assets.Ib7,
      desc: "Supported by UPNEDA and School of Nature, this portal helps residents assess the feasibility of installing grid-connected solar systems on rooftops and provides valuable features for informed decision-making.",
    },
    {
      title: "Rajasthan Renewable Hub",
      img: Assets.Ib8,
      desc: "Rajasthan Renewable Hub is a knowledge-sharing platform for advancing renewable energy projects, focusing on solar and wind integration, and building local community participation.",
    },
    {
      title: "Maharashtra Climate Data Center",
      img: Assets.Ib9,
      desc: "This data center provides climate vulnerability data, future projections, and energy transition insights to support evidence-based policy-making in Maharashtra.",
    },
    {
      title: "India Emissions Dashboard",
      img: Assets.Ib10,
      desc: "A national-level dashboard showcasing India’s GHG emission trends, climate action progress, and sectoral transition pathways to achieve net-zero targets.",
    },
  ];

  return (
    <section className="py-12 px-6 md:px-12 bg-white text-center">
      {/* Heading */}
      <h2 className="text-3xl font-bold mb-12">
        <span className="text-green-600">Our</span> Dashboards
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {dashboards.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-between p-6 border rounded-lg shadow-sm hover:shadow-md transition bg-white"
          >
            <div>
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-40 object-contain rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
            <button className="mt-6 px-4 py-2 border border-green-500 text-green-600 rounded-md hover:bg-green-500 hover:text-white transition w-fit mx-auto">
              View
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Dashboard;
