import React from "react";

const Publications = () => {
  const publications = [
    {
      img: "https://via.placeholder.com/400x250",
      title: "Climate Action Report 2025",
      type: "Research Report",
      date: "Jan 10, 2025",
    },
    {
      img: "https://via.placeholder.com/400x250",
      title: "Renewable Energy Insights",
      type: "Whitepaper",
      date: "Feb 18, 2025",
    },
    {
      img: "https://via.placeholder.com/400x250",
      title: "GHG Emission Trends",
      type: "Case Study",
      date: "Mar 22, 2025",
    },
    {
      img: "https://via.placeholder.com/400x250",
      title: "Sustainable Cities Report",
      type: "Report",
      date: "Apr 15, 2025",
    },
  ];

  return (
    <section className="py-12 px-6 md:px-12 bg-black text-center text-white">
      {/* Heading */}
      <h2 className="text-3xl font-bold mb-12">
        <span className="text-green-500">Our</span> Publications
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {publications.map((pub, index) => (
          <div
            key={index}
            className="flex flex-col bg-gray-900 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
          >
            {/* Image */}
            <img
              src={pub.img}
              alt={pub.title}
              className="w-full h-48 object-cover"
            />

            {/* Content */}
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-lg font-semibold mb-2 text-green-400">{pub.title}</h3>
              <p className="text-sm text-gray-400 mb-1">{pub.type}</p>
              <p className="text-sm text-gray-500 mt-auto">{pub.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Publications;
