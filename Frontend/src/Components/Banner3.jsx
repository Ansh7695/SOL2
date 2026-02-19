import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Assets } from "../assets/Assets";

gsap.registerPlugin(ScrollTrigger);

const Banner3 = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  const cards = [
    {
      id: 1,
      title: "Sustainable Living",
      subtitle: "Eco-friendly practices",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&auto=format&fit=crop&q=60"
    },
    {
      id: 2,
      title: "Community Growth",
      subtitle: "Building stronger bonds",
      image: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=600&auto=format&fit=crop&q=60"
    },
    {
      id: 3,
      title: "Nature Conservation",
      subtitle: "Protecting our planet",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&auto=format&fit=crop&q=60"
    },
    {
      id: 4,
      title: "Future Leaders",
      subtitle: "Educating the next generation",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&auto=format&fit=crop&q=60"
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const totalWidth = sectionRef.current.scrollWidth;
      const windowWidth = window.innerWidth;

      const distanceToMove = totalWidth - windowWidth + 100;

      if (distanceToMove > 0) {
        gsap.fromTo(sectionRef.current,
          { x: 0 },
          {
            x: -distanceToMove,
            ease: "none",
            scrollTrigger: {
              trigger: triggerRef.current,
              start: "top center", // Modified to start at middle of screen
              end: "bottom top",
              scrub: 1,
              pin: false
            }
          }
        );
      }

    }, triggerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      className=" bg-cover bg-center h-screen flex flex-col justify-center relative overflow-hidden"
      style={{ backgroundImage: `url(${Assets.Headerbg})` }}
    >
      {/* Overlay to ensure text readability if needed, though user didn't ask, usually good practice. 
          User asked for "green gradient hover will be changed to white", implying light cards. 
          Background might need a tint. For now, just adding image as requested. 
          Adding 'relative' to container just in case.
      */}
      <div className="absolute inset-0 backdrop-blur-md bg-white/10"></div> {/* Glassmorphism Overlay */}
      <div ref={triggerRef} className="w-full relative z-10">

        {/* Centered Header */}
        <div className="container mx-auto px-4 mb-10 lg:mb-14 flex flex-col items-center text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight mb-2 whitespace-nowrap">
            <span className="text-green-600">Our Impact In Action.</span>
          </h2>
          <p className="text-green-600 text-lg max-w-2xl">
            Scroll through our initiatives to see how we are making a difference in the world, one step at a time.
          </p>
        </div>

        <div
          ref={sectionRef}
          className="
                        flex items-start 
                        gap-6 lg:gap-10 
                        w-max
                    "
        >
          {/* Spacer to Center Start:
              Card Width Desktop: 350px -> Half = 175px
              Spacer = calc(50vw - 175px)
          */}
          <div className="flex-shrink-0 w-[7.5vw] lg:w-[calc(50vw-175px)]"></div>

          {/* Cards */}
          {cards.map((card, index) => (
            <div
              key={card.id}
              className={`
                                group 
                                relative 
                                w-[80vw] sm:w-[380px] lg:w-[350px] /* Increased Width */
                                h-[40vh] sm:h-[350px] lg:h-[380px] 
                                flex-shrink-0 
                                rounded-2xl 
                                overflow-hidden 
                                shadow-lg hover:shadow-2xl 
                                transition-all duration-500 hover:scale-[1.02]
                                ${index % 2 !== 0 ? 'translate-y-8' : ''} 
                            `}
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover"
              />

              <div className="
                                absolute inset-0 
                                bg-gradient-to-t from-white/95 via-white/40 to-transparent 
                                translate-y-full group-hover:translate-y-0 
                                transition-transform duration-500 ease-out 
                                flex flex-col justify-end 
                                p-6
                            ">
                <h3 className="text-green-900 text-xl lg:text-2xl font-bold mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  {card.title}
                </h3>
                <p className="text-green-800 text-base translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                  {card.subtitle}
                </p>
              </div>
            </div>
          ))}

          {/* End Buffer */}
          <div className="flex-shrink-0 w-[7.5vw] lg:w-[calc(50vw-175px)]"></div>
        </div>
      </div>
    </div>
  );
};

export default Banner3;
