import React, { useEffect, useState, useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Search } from 'lucide-react';
import axios from 'axios';

const Blogs = () => {
    const { backendUrl } = useContext(ShopContext);
    const [blogs, setBlogs] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetchBlogs();
    }, []);

    const fetchBlogs = async () => {
        try {
            const response = await axios.get(backendUrl + '/api/blog/list');
            if (response.data.success) {
                setBlogs(response.data.blogs);
            }
        } catch (error) {
            console.error("Error fetching blogs:", error);
        }
    };

    const filteredBlogs = blogs.filter(blog =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.content.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Blogs</h1>
                <p className="text-lg text-gray-600">Stories, updates, and insights from our team.</p>

                {/* Search Bar */}
                <div className="mt-8 max-w-md mx-auto relative">
                    <input
                        type="text"
                        placeholder="Search blogs..."
                        className="w-full pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredBlogs.map((blog) => (
                    <div key={blog._id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                        <img
                            src={`${backendUrl}/images/${blog.image}`}
                            alt={blog.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                            <div className="text-sm text-green-600 mb-2">{blog.category} • {new Date(blog.date).toLocaleDateString()}</div>
                            <h2 className="text-xl font-semibold text-gray-900 mb-3">{blog.title}</h2>
                            <p className="text-gray-600 line-clamp-3 mb-4">{blog.content}</p>
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-500">By {blog.author}</span>
                                <button className="text-green-600 font-medium hover:underline">Read More</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {filteredBlogs.length === 0 && (
                <p className="text-center text-gray-500 mt-8">No blogs found matching your search.</p>
            )}
        </div>
    );
};

export default Blogs;
