import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { X, Upload } from 'lucide-react';

const EnrollmentModal = ({ isOpen, onClose }) => {
    // ... (state remains same)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        role: 'Enroll',
        cv: null
    });
    const [fileName, setFileName] = useState('');
    const [loading, setLoading] = useState(false);

    if (!isOpen) return null;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
            if (validTypes.includes(file.type)) {
                setFormData(prev => ({ ...prev, cv: file }));
                setFileName(file.name);
            } else {
                toast.error('Please upload a PDF or Doc file.');
            }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const data = new FormData();
        data.append('name', formData.name);
        data.append('email', formData.email);
        data.append('phone', formData.phone);
        data.append('role', formData.role);
        if (formData.cv) {
            data.append('cv', formData.cv);
        }

        try {
            const response = await axios.post('http://localhost:4000/api/mail/enroll', data, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });

            if (response.data.success) {
                toast.success(response.data.message);
                onClose();
                setFormData({ name: '', email: '', phone: '', role: 'Enroll', cv: null });
                setFileName('');
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.error(error);
            toast.error("Failed to submit application. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden relative animate-fadeIn scale-100 transform transition-all">

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 p-2 rounded-full hover:bg-gray-100 transition-colors"
                >
                    <X size={24} />
                </button>

                {/* Header */}
                <div className="bg-gradient-to-r from-lime-500 to-green-600 p-6 text-white text-center">
                    <h2 className="text-2xl font-bold">Join Our Initiative</h2>
                    <p className="text-lime-100 text-sm mt-1">Fill in your details to get started</p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-6 space-y-4">

                    {/* Name */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Full Name</label>
                        <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-500 focus:outline-none transition-all"
                            placeholder="John Doe"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Email Address</label>
                        <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-500 focus:outline-none transition-all"
                            placeholder="john@example.com"
                        />
                    </div>

                    {/* Phone */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Phone Number</label>
                        <input
                            type="tel"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-500 focus:outline-none transition-all"
                            placeholder="+91 98765 43210"
                        />
                    </div>

                    {/* Role Selection */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">I want to apply as</label>
                        <select
                            name="role"
                            value={formData.role}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-500 focus:outline-none bg-white"
                        >
                            <option value="Enroll">Participant (Enroll)</option>
                            <option value="Volunteer">Volunteer</option>
                            <option value="Job">Job Applicant</option>
                        </select>
                    </div>

                    {/* CV Upload */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Attach CV (PDF/Doc)</label>
                        <div className="relative border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:bg-gray-50 transition-colors cursor-pointer group">
                            <input
                                type="file"
                                accept=".pdf,.doc,.docx"
                                onChange={handleFileChange}
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            />
                            <div className="flex flex-col items-center justify-center text-gray-500 group-hover:text-lime-600">
                                <Upload size={24} className="mb-2" />
                                <span className="text-sm font-medium">
                                    {fileName ? fileName : "Click to upload your CV"}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full bg-lime-600 text-white font-bold py-3 rounded-lg hover:bg-lime-700 transition-transform transform active:scale-95 shadow-md mt-4 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                        {loading ? 'Submitting...' : 'Submit Application'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EnrollmentModal;
