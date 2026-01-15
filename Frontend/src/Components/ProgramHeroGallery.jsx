import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const ProgramGallery = ({ images }) => {
    return (
        <div className="w-full my-10 px-4">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Gallery</h3>
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                navigation
                loop
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }}
                className="w-full h-[300px] md:h-[350px] pb-10"
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index} className="pb-8">
                        <div className="relative w-full h-full overflow-hidden rounded-xl shadow-lg border border-gray-100 group">
                            <img
                                src={image}
                                alt={`Gallery Image ${index + 1}`}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ProgramGallery;
