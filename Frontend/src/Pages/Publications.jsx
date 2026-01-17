import React, { useEffect, useState, useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { FileText, Download, ExternalLink } from 'lucide-react';
import axios from 'axios';

const Publications = () => {
    const { backendUrl } = useContext(ShopContext);
    const [publications, setPublications] = useState([]);

    useEffect(() => {
        fetchPublications();
    }, []);

    const fetchPublications = async () => {
        try {
            const response = await axios.get(backendUrl + '/api/publication/list');
            if (response.data.success) {
                setPublications(response.data.publications);
            }
        } catch (error) {
            console.error("Error fetching publications:", error);
        }
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">Publications</h1>
                <p className="text-lg text-gray-600">Research papers, reports, and documents available for download.</p>
            </div>

            <div className="space-y-6">
                {publications.map((pub) => (
                    <div key={pub._id} className="bg-white rounded-lg shadow p-6 flex flex-col md:flex-row items-start md:items-center gap-6 hover:shadow-md transition-shadow">
                        <div className="p-4 bg-green-50 rounded-lg">
                            <FileText className="w-8 h-8 text-green-600" />
                        </div>
                        <div className="flex-grow">
                            <h2 className="text-xl font-semibold text-gray-900 mb-2">{pub.title}</h2>
                            <p className="text-gray-600 mb-2">{pub.description}</p>
                            <span className="text-sm text-gray-400">Published: {new Date(pub.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex gap-4 mt-4 md:mt-0">
                            <a
                                href={`${backendUrl}/images/${pub.file}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2 border border-green-600 text-green-600 rounded hover:bg-green-50 transition-colors"
                            >
                                <ExternalLink size={18} />
                                View
                            </a>
                            <a
                                href={`${backendUrl}/images/${pub.file}`}
                                download
                                className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
                            >
                                <Download size={18} />
                                Download
                            </a>
                        </div>
                    </div>
                ))}
            </div>
            {publications.length === 0 && (
                <p className="text-center text-gray-500 mt-8">No publications available at the moment.</p>
            )}
        </div>
    );
};

export default Publications;
