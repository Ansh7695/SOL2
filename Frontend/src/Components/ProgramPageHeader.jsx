import React from 'react'

const ProgramPageHeader = ({ image, title, text }) => {
    return (
        <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
            <img
                src={image}
                alt={title}
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white px-4">
                <h1 className="text-3xl md:text-5xl font-extrabold mb-2 md:mb-4 drop-shadow-xl">{title}</h1>
                {text && <p className="text-lg md:text-2xl font-light opacity-90">{text}</p>}
            </div>
        </div>
    )
}

export default ProgramPageHeader
