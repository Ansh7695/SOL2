import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import axios from 'axios';
import { toast } from 'react-toastify';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axios.post('http://93.127.198.138:4000/api/mail/contact', {
                ...formData,
                phone: "Not provided in form" // Optional update if phone field is added later
            });

            if (response.data.success) {
                toast.success(response.data.message);
                setFormData({ name: '', email: '', message: '' });
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.error(error);
            toast.error("Failed to send message.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="max-w-7xl mx-auto py-16 px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                    {/* Contact Details */}
                    <div>
                        <h2 className="text-3xl font-bold text-gray-800 mb-6 font-medium tracking-wide">Get in Touch</h2>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            We'd love to hear from you. Whether you have a question about our programs,
                            pricing, or anything else, our team is ready to answer all your questions.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="bg-lime-100 p-3 rounded-full text-green-600">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-800">Our Office</h4>
                                    <p className="text-gray-600">123 Green Earth Way, Sustainable City, India</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-lime-100 p-3 rounded-full text-green-600">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-800">Phone</h4>
                                    <p className="text-gray-600">+91 98765 43210</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-lime-100 p-3 rounded-full text-green-600">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-800">Email</h4>
                                    <p className="text-gray-600">contact@example.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6 font-medium tracking-wide">Send us a Message</h3>
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="John Doe"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="john@example.com"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                <textarea
                                    rows="4"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    placeholder="How can we help you?"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                disabled={loading}
                                className={`w-full bg-lime-500 text-white font-bold py-3 rounded-lg hover:bg-lime-600 transition shadow-md hover:shadow-lg ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                            >
                                {loading ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </>
    );
};

export default ContactUs;
