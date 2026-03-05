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
                    background: linear-gradient(145deg, #ffffff 0%, #f9fafb 100%);
                    width: 36px;
                    height: 36px;
                    border-radius: 50%;
                    box-shadow: 
                        0 2px 8px rgba(132, 204, 22, 0.2),
                        inset 0 -3px 6px rgba(0, 0, 0, 0.05),
                        inset 0 2px 4px rgba(255, 255, 255, 1);
                    border: 2px solid rgba(132, 204, 22, 0.4);
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .program-gallery .swiper-button-next:after,
                .program-gallery .swiper-button-prev:after {
                    font-size: 10px;
                    font-weight: 900;
                    color: #65a30d;
                    text-shadow: none;
                    letter-spacing: 0;
                    line-height: 1;
                    position: static;
                }
                .program-gallery .swiper-button-next:hover,
                .program-gallery .swiper-button-prev:hover {
                    background: linear-gradient(145deg, #f9fafb 0%, #ecfccb 100%);
                    box-shadow: 
                        0 4px 12px rgba(132, 204, 22, 0.35),
                        inset 0 -4px 8px rgba(0, 0, 0, 0.08),
                        inset 0 2px 6px rgba(255, 255, 255, 1);
                    transform: scale(1.08);
                    border-color: rgba(132, 204, 22, 0.6);
                }
                .program-gallery .swiper-button-next:hover:after,
                .program-gallery .swiper-button-prev:hover:after {
                    color: #84cc16;
                }
                .program-gallery .swiper-button-next:active,
                .program-gallery .swiper-button-prev:active {
                    transform: scale(1.02);
                    box-shadow: 
                        0 1px 4px rgba(132, 204, 22, 0.25),
                        inset 0 2px 4px rgba(0, 0, 0, 0.1);
                }
                .program-gallery .swiper-pagination-bullet {
                    background: #d9f99d;
                    opacity: 0.5;
                    width: 8px;
                    height: 8px;
                    transition: all 0.3s ease;
                }
                .program-gallery .swiper-pagination-bullet-active {
                    background: linear-gradient(135deg, #84cc16 0%, #65a30d 100%);
                    opacity: 1;
                    width: 24px;
                    border-radius: 4px;
                    box-shadow: 0 2px 6px rgba(132, 204, 22, 0.4);
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
