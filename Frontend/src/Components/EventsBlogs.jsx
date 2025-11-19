import React from "react";

const EventsBlogs = () => {
  const events = [
    {
      img: "https://via.placeholder.com/400x200",
      title: "Climate Awareness Workshop",
      date: "Sep 20, 2025",
    },
    {
      img: "https://via.placeholder.com/400x200",
      title: "Renewable Energy Expo",
      date: "Oct 05, 2025",
    },
    {
      img: "https://via.placeholder.com/400x200",
      title: "GHG Emissions Webinar",
      date: "Nov 10, 2025",
    },
  ];

  const blogs = [
    {
      img: "https://via.placeholder.com/400x200",
      title: "Top 10 Renewable Energy Trends",
      date: "Aug 12, 2025",
    },
    {
      img: "https://via.placeholder.com/400x200",
      title: "Sustainable Cities Insights",
      date: "Sep 02, 2025",
    },
    {
      img: "https://via.placeholder.com/400x200",
      title: "India’s Climate Action Progress",
      date: "Sep 18, 2025",
    },
  ];

  return (
    <section className="py-12 px-6 md:px-12 bg-black text-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Latest Events Left */}
        <div>
          <h2 className="text-3xl font-bold mb-6 text-green-500">Latest Events</h2>
          <ul className="space-y-6">
            {events.map((event, index) => (
              <li
                key={index}
                className="bg-gray-900 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition"
              >
                <img
                  src={event.img}
                  alt={event.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-green-400 mb-1">{event.title}</h3>
                  <p className="text-sm text-gray-400">{event.date}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Latest Blogs Right */}
        <div>
          <h2 className="text-3xl font-bold mb-6 text-green-500">Latest Blogs</h2>
          <ul className="space-y-6">
            {blogs.map((blog, index) => (
              <li
                key={index}
                className="bg-gray-900 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition"
              >
                <img
                  src={blog.img}
                  alt={blog.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-green-400 mb-1">{blog.title}</h3>
                  <p className="text-sm text-gray-400">{blog.date}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default EventsBlogs;
