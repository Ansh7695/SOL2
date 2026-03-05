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
            <style>{`
                .program-gallery .swiper-button-next,
                .program-gallery .swiper-button-prev {
                    background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
                    width: 45px;
                    height: 45px;
                    border-radius: 50%;
                    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1), inset 0 -2px 5px rgba(0, 0, 0, 0.05);
                    transition: all 0.3s ease;
                }
                .program-gallery .swiper-button-next:after,
                .program-gallery .swiper-button-prev:after {
                    font-size: 18px;
                    font-weight: bold;
                    color: #6b7280;
                }
                .program-gallery .swiper-button-next:hover,
                .program-gallery .swiper-button-prev:hover {
                    background: linear-gradient(135deg, #e5e7eb 0%, #d1d5db 100%);
                    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15), inset 0 -3px 8px rgba(0, 0, 0, 0.08);
                    transform: scale(1.05);
                }
                .program-gallery .swiper-pagination-bullet {
                    background: #d1d5db;
                    opacity: 0.6;
                }
                .program-gallery .swiper-pagination-bullet-active {
                    background: #84cc16;
                    opacity: 1;
                }
            `}</style>
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
                className="w-full h-[300px] md:h-[350px] pb-10 program-gallery"
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
