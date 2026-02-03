import React, { useEffect, useState, useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Search } from 'lucide-react';
import axios from 'axios';

const Blogs = () => {
    const { backendUrl } = useContext(ShopContext);
    const [blogs, setBlogs] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedBlog, setSelectedBlog] = useState(null);

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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
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

            {/* Bento Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(200px,auto)] grid-flow-dense">
                {filteredBlogs.map((blog) => (
                    <div
                        key={blog._id}
                        className={`bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group flex flex-col ${blog.image ? 'md:col-span-2 md:row-span-2' : ''}`}
                    >
                        {blog.image && (
                            <div className="h-64 sm:h-80 overflow-hidden relative shrink-0">
                                <img
                                    src={`${backendUrl}/images/${blog.image}`}
                                    alt={blog.title}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-green-700 shadow-sm uppercase tracking-wide">
                                    {blog.category}
                                </div>
                            </div>
                        )}

                        <div className="p-8 flex flex-col flex-grow relative">
                            {!blog.image && (
                                <div className="mb-6">
                                    <span className="bg-green-50 px-3 py-1 rounded-full text-xs font-semibold text-green-600 border border-green-100 uppercase tracking-wide">
                                        {blog.category}
                                    </span>
                                </div>
                            )}

                            <div className="flex items-center gap-2 text-xs text-gray-400 mb-3 font-medium">

                                <span>By {blog.author}</span>
                            </div>

                            <h2 className={`font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors leading-tight ${blog.image ? 'text-3xl' : 'text-xl'}`}>
                                {blog.title}
                            </h2>

                            <p className="text-gray-600 leading-relaxed line-clamp-3 mb-6 flex-grow">
                                {blog.content}
                            </p>

                            <button
                                onClick={() => setSelectedBlog(blog)}
                                className="inline-flex items-center gap-2 text-green-600 font-semibold hover:gap-3 transition-all group-hover:text-green-700 mt-auto"
                            >
                                Read Article <Search className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {filteredBlogs.length === 0 && (
                <p className="text-center text-gray-500 mt-8">No blogs found matching your search.</p>
            )}

            {/* Blog Modal */}
            {selectedBlog && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn" onClick={() => setSelectedBlog(null)}>
                    <div className="bg-white rounded-3xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden flex flex-col relative" onClick={e => e.stopPropagation()}>

                        {/* Modal Header Image (if exists) */}
                        {selectedBlog.image && (
                            <div className="h-48 sm:h-72 relative shrink-0">
                                <img
                                    src={`${backendUrl}/images/${selectedBlog.image}`}
                                    alt={selectedBlog.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                <button
                                    className="absolute top-4 right-4 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white rounded-full p-2 transition-colors border border-white/10"
                                    onClick={() => setSelectedBlog(null)}
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                                </button>
                                <div className="absolute bottom-6 left-6 text-white">
                                    <span className="bg-green-600/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold shadow-sm uppercase tracking-wide mb-2 inline-block">
                                        {selectedBlog.category}
                                    </span>
                                </div>
                            </div>
                        )}

                        {!selectedBlog.image && (
                            <button
                                className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 bg-gray-100 rounded-full p-2 transition-colors z-10"
                                onClick={() => setSelectedBlog(null)}
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                            </button>
                        )}

                        {/* Modal Content */}
                        <div className="p-8 sm:p-10 overflow-y-auto custom-scrollbar flex-grow">
                            {!selectedBlog.image && (
                                <div className="mb-6">
                                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                                        {selectedBlog.category}
                                    </span>
                                </div>
                            )}

                            <div className="flex flex-wrap items-center gap-3 text-sm font-medium mb-6 text-gray-500">

                                <span>By {selectedBlog.author}</span>
                            </div>

                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 leading-tight">{selectedBlog.title}</h2>

                            <div className="prose prose-lg prose-green max-w-none text-gray-600 leading-relaxed whitespace-pre-line">
                                {selectedBlog.content}
                            </div>
                        </div>

                        <div className="p-6 border-t border-gray-100 bg-gray-50 flex justify-end shrink-0">
                            <button
                                className="px-6 py-2 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-xl transition-colors shadow-lg shadow-gray-900/10"
                                onClick={() => setSelectedBlog(null)}
                            >
                                Close Article
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Blogs;
