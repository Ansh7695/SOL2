import React, { useState } from 'react'
import EnrollmentModal from './EnrollmentModal'

const EnrollmentCallToAction = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className='w-full py-16 bg-gradient-to-r from-[#5F9EA0] to-[#4682B4] text-center rounded-xl bg-opacity-90 my-12 shadow-lg'>
            <h2 className='text-3xl font-bold text-white mb-4'>Want to be a part of this initiative?</h2>
            <p className='text-white text-lg mb-8 max-w-2xl mx-auto'>
                Join us in making a difference. Enroll in our program today and contribute to a sustainable future.
            </p>
            <button
                onClick={() => setIsModalOpen(true)}
                className='bg-white text-[#5F9EA0] px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors shadow-md'
            >
                Enroll Now
            </button>

            <EnrollmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    )
}

export default EnrollmentCallToAction
