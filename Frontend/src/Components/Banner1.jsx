import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Assets } from "../assets/Assets";

const Banner1 = () => {
  const slides = [
    {
      image: Assets.Ib1,
      heading: "Welcome to Vasudha Foundation",
      subheading: "Green ways for a good earth!",
    },
    {
      image: Assets.Ib2,
      heading: "Our Projects",
      subheading: "Creating sustainable solutions for tomorrow",
    },
    {
      image: Assets.Ib3,
      heading: "Join Us",
      subheading: "Be part of the movement for a better planet",
    },
  ];

  return (
    <div className="w-full">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        loop
        className="w-full h-[250px] sm:h-[350px] md:h-[500px] lg:h-[600px]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full flex items-center justify-center text-center overflow-hidden">
              {/* Background Image */}
              <img
                src={slide.image}
                alt={slide.heading}
                className="absolute top-0 left-0 w-full h-full object-cover"
              />

              {/* Dark Overlay */}
              <div className="absolute top-0 left-0 w-full h-full bg-black/50" />

              {/* Text on top */}
              <div className="relative z-10 text-white px-3 sm:px-6">
                <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold drop-shadow-lg">
                  {slide.heading}
                </h2>
                <p className="mt-2 sm:mt-3 text-sm sm:text-lg md:text-xl lg:text-2xl drop-shadow-md">
                  {slide.subheading}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner1;
