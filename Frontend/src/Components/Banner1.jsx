import React, { useState, useEffect } from 'react';
import { Menu, X, Facebook, Linkedin, Instagram, Twitter, ArrowRight } from 'lucide-react';
import { Assets } from '../assets/Assets';
import { useNavigate } from 'react-router-dom';

const Banner1 = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight - 100,
      behavior: 'smooth'
    });
  };
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const [portraitIndex, setPortraitIndex] = useState(0);
  const [landscapeIndex, setLandscapeIndex] = useState(0);

  const typewriterTexts = [
    "Welcome to School of Nature",
    "Creating sustainable solution for tomorrow",
    "Be the part of the movement for the better planet"
  ];

  const portraitImages = [
    Assets.p9,
    Assets.k4,
    Assets.p29
  ];

  const landscapeImages = [
    Assets.landscape3,
    Assets.landscape1,
    Assets.landscape2
  ];

  // Typewriter Effect
  useEffect(() => {
    const currentText = typewriterTexts[textIndex];
    const typeSpeed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < currentText.length) {
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % typewriterTexts.length);
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, textIndex]);

  // Image Rotation
  useEffect(() => {
    const portraitInterval = setInterval(() => {
      setPortraitIndex((prev) => (prev + 1) % portraitImages.length);
    }, 4000);

    const landscapeInterval = setInterval(() => {
      setLandscapeIndex((prev) => (prev + 1) % landscapeImages.length);
    }, 5000);

    return () => {
      clearInterval(portraitInterval);
      clearInterval(landscapeInterval);
    };
  }, []);

  return (
    <div className="relative font-sans text-gray-800">

      {/* Hero Section */}
      <header className="relative pt-1 grid items-center h-[calc(102vh-100px)] overflow-hidden">
        {/* Animated Background Image */}
        <div className="absolute inset-0 bg-cover bg-center animate-zoom-out"
          style={{ backgroundImage: `url(${Assets.Headerbg})` }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-6 md:py-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-end">

            {/* Left Section - Glassmorphism Content */}
            <div className="glass-card p-6 sm:p-8 md:p-10 relative z-10 transform transition-all duration-500 hover:shadow-xl border border-white/10 animate-fade-in-up w-full lg:h-[480px] flex flex-col justify-center">
              <div className="space-y-5">
                <div className="h-32 sm:h-36 md:h-40 lg:h-32 py-4"> {/* Explicit height for typewriter */}
                  <h1 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
                    {typewriterTexts[textIndex].substring(0, charIndex)}
                    <span className="inline-block w-0 relative">
                      <span className="animate-pulse text-green-600 absolute bottom-0 left-0">|</span>
                    </span>
                  </h1>
                </div>

                <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-medium bg-green-900/20 p-2 sm:p-3 rounded-lg block">
                  To build a climate-resilient and eco-sensitive society where marginalized communities, especially women and children, live with dignity, equality, and harmony with nature.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button
                    onClick={scrollToNextSection}
                    className="bg-lime-500 hover:bg-lime-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-green-500/30 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 group w-full sm:w-auto">
                    Our Story
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button
                    onClick={() => navigate('/contact-us')}
                    className="px-8 py-3 rounded-xl font-semibold border-2 border-gray-800 text-gray-800 hover:bg-gray-900 hover:text-white transition-all w-full sm:w-auto">
                    Contact Me
                  </button>
                </div>

                <div className="pt-6 border-t border-gray-200/50 mt-6">
                  <div className="flex items-center gap-6 justify-center sm:justify-start">
                    {[
                      { Icon: Instagram, href: "#", label: "Instagram" },
                      { Icon: Facebook, href: "#", label: "Facebook" },
                      { Icon: Twitter, href: "#", label: "Twitter" },
                      { Icon: Linkedin, href: "#", label: "LinkedIn" }
                    ].map(({ Icon, href, label }) => (
                      <a
                        key={label}
                        href={href}
                        aria-label={label}
                        className="text-gray-600 hover:text-green-700 hover:scale-110 transition-all duration-300 drop-shadow-sm"
                      >
                        <Icon size={24} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section - SaaS Visual Showcase (Grid Layout) */}
            {/* Visible on LG screens and up, 12x12 grid */}
            <div className="relative z-10 hidden lg:grid w-full h-[520px] grid-cols-12 grid-rows-12 gap-4">
              {/* Portrait Image (Primary) - Right 50% */}
              <div className="col-span-6 col-start-7 row-start-2 row-end-9 rounded-2xl overflow-hidden shadow-2xl z-10 group relative animate-fade-in-left" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
                {portraitImages.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt="Portrait"
                    className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105 ${idx === portraitIndex ? 'opacity-100' : 'opacity-0'}`}
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/30 to-transparent"></div>
              </div>

              {/* Floating Statistic Badges (Overlapping Portrait) */}
              <div className="col-start-10 col-end-13 row-start-5 row-span-4 z-20 flex flex-col gap-4 translate-x-8">
                {[
                  { label: "Since", value: "2020" },
                  { label: "Learning Centers", value: "3-5" },
                  { label: "Baalmitras Engaged", value: "Upto 13" }
                ].map((stat, i) => (
                  <div key={i} className="bg-green-900/90 backdrop-blur-md text-white px-4 py-2 rounded-l-full shadow-lg transform transition-all hover:translate-x-[-5px] hover:bg-green-800 flex items-center gap-3 border-l-4 border-green-400 w-max self-end animate-fade-in-right" style={{ animationDelay: `${0.8 + (i * 0.1)}s`, animationFillMode: 'forwards' }}>
                    <div>
                      <div className="text-[10px] text-green-200 font-medium">{stat.label}</div>
                      <div className="text-base font-bold leading-none">{stat.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Metrics / Growth Card (Left 50%) */}
              <div className="col-span-6 col-start-1 row-start-2 row-end-6 bg-white/95 backdrop-blur-xl p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/50 z-30 transition-transform hover:-translate-y-1 h-full flex flex-col justify-center animate-fade-in-up" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
                <div className="flex items-end gap-2">
                  <div className="text-6xl font-bold text-gray-900">250+</div>
                </div>
                <div className="text-lg text-gray-500 font-medium mt-1">Women Engaged in Livelihoods</div>
              </div>

              {/* Secondary Metrics Card (Below First) */}
              <div className="col-span-6 col-start-1 row-start-6 row-end-9 bg-white/95 backdrop-blur-xl p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/50 z-30 transition-transform hover:-translate-y-1 h-full flex items-center justify-between animate-fade-in-up" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
                <div>
                  <div className="text-5xl font-bold text-gray-900">300+</div>
                  <div className="text-lg text-gray-500 font-medium mb-1">Children Supported</div>
                </div>
              </div>

              {/* Landscape Image Card (Bottom Full Width) */}
              <div className="col-span-12 row-start-9 row-end-13 rounded-2xl overflow-hidden shadow-xl z-20 border-4 border-white transform transition-transform hover:scale-[1.01] relative animate-fade-in-up" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
                {landscapeImages.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt="Landscape"
                    className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-1000 ease-in-out ${idx === landscapeIndex ? 'opacity-100' : 'opacity-0'}`}
                  />
                ))}
              </div>
            </div>

            {/* Mobile & Tablet - Better Stacked Layout (Shown on screen < lg) */}
            <div className="lg:hidden mt-8 space-y-6 animate-fade-in-up">
              <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/40 shadow-xl">
                <div className="relative h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden shadow-md mb-6">
                  {/* Rotating Images for Mobile */}
                  {portraitImages.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt="Visual"
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${idx === portraitIndex ? 'opacity-100' : 'opacity-0'}`}
                    />
                  ))}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-bold text-lg">Featured Projects</p>
                    <p className="text-sm opacity-90">Exploring the nature</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/80 p-4 rounded-xl shadow-sm text-center">
                    <div className="text-2xl font-bold text-green-600">98%</div>
                    <div className="text-xs text-gray-600 uppercase font-bold tracking-wide">Satisfaction</div>
                  </div>
                  <div className="bg-white/80 p-4 rounded-xl shadow-sm text-center">
                    <div className="text-2xl font-bold text-blue-600">14K+</div>
                    <div className="text-xs text-gray-600 uppercase font-bold tracking-wide">Projects</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </header>
    </div>
  );
};

export default Banner1;
