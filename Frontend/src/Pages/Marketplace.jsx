import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Leaf, Heart, Globe, ShoppingBag, Award, Users } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Marketplace = () => {
    const headerRef = useRef(null);
    const heroRef = useRef(null);
    const categoriesRef = useRef(null);
    const purposeRef = useRef(null);
    const featuresRef = useRef(null);
    const ctaRef = useRef(null);

    useEffect(() => {
        // Header Animation
        gsap.fromTo(headerRef.current.children,
            { y: -50, opacity: 0 },
            { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power3.out" }
        );

        // Hero Parallax & Text
        const heroTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: heroRef.current,
                start: "top center",
            }
        });
        heroTimeline.fromTo(heroRef.current.querySelector('.hero-content'),
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: "power2.out" }
        );

        // Categories Stagger
        gsap.fromTo(categoriesRef.current.children,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                stagger: 0.2,
                duration: 0.8,
                ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: categoriesRef.current,
                    start: "top 80%",
                }
            }
        );

        // Purpose Section
        gsap.fromTo(purposeRef.current,
            { scale: 0.95, opacity: 0 },
            {
                scale: 1,
                opacity: 1,
                duration: 1,
                scrollTrigger: {
                    trigger: purposeRef.current,
                    start: "top 75%",
                }
            }
        );

        // Features/Philosophy Stagger
        gsap.fromTo(featuresRef.current.children,
            { x: -50, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                stagger: 0.2,
                duration: 1,
                scrollTrigger: {
                    trigger: featuresRef.current,
                    start: "top 75%",
                }
            }
        );

        // CTA
        gsap.fromTo(ctaRef.current,
            { y: 100, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                scrollTrigger: {
                    trigger: ctaRef.current,
                    start: "top 90%",
                }
            }
        );

    }, []);

    const categories = [
        {
            name: 'Handicrafts',
            image: "https://images.unsplash.com/photo-1615875605809-90176cd63426?auto=format&fit=crop&w=800&q=80",
            desc: "Traditional artisan crafts",
            color: "from-orange-500/80 to-red-600/80"
        },
        {
            name: 'Natural Foods',
            image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80",
            desc: "Organic & wholesome",
            color: "from-green-500/80 to-emerald-700/80"
        }
    ];

    return (
        <div className="bg-[#fdfbf7] min-h-screen overflow-x-hidden font-sans text-gray-800">

            {/* Header Section */}
            <div ref={headerRef} className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100 py-4 px-6 shadow-sm">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
                            Son<span className="text-lime-600">Marketplace</span>
                        </h1>
                        <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Sustainable Enterprises</p>
                    </div>
                    <Link to="/shop/products" className="hidden md:flex items-center gap-2 text-sm font-semibold text-lime-600 border border-lime-600 px-5 py-2 rounded-full hover:bg-lime-600 hover:text-white transition-all duration-300">
                        Browse All Products <ArrowRight size={16} />
                    </Link>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-24">

                {/* Hero Section */}
                <div ref={heroRef} className="relative rounded-[2.5rem] overflow-hidden shadow-2xl h-[calc(100vh-15rem)] min-h-[400px] flex items-center justify-center group">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1596765796720-7798357f8842?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center transition-transform duration-[10s] ease-in-out group-hover:scale-110"></div>
                    {/* Updated Overlay to Green/Earth tones */}
                    <div className="absolute inset-0 bg-gradient-to-r from-green-950/90 via-emerald-900/60 to-emerald-100/40 mix-blend-multiply"></div>

                    <div className="relative z-10 text-center max-w-4xl px-6 hero-content">
                        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-4 leading-tight drop-shadow-xl font-serif">
                            Crafts with <br /><span className="text-lime-400 italic font-sans text-4xl md:text-8xl">Conscience</span>
                        </h2>
                        <p className="text-base md:text-lg text-green-50 max-w-xl mx-auto mb-6 leading-relaxed font-light drop-shadow-md">
                            Discover authentic products handmade by artisans. Every purchase builds sustainable livelihoods for women and conservation for nature.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link to="/shop" className="px-8 py-3 bg-lime-600 hover:bg-lime-500 text-white rounded-full font-bold text-base transition-all transform hover:scale-105 shadow-[0_6px_20px_rgba(101,163,13,0.4)] flex items-center gap-2 ring-4 ring-lime-600/20">
                                <ShoppingBag size={18} /> Shop Now
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Categories Section */}
                <div>
                    <div className="flex items-center justify-between mb-12">
                        <h2 className="text-3xl font-bold text-gray-800">Curated Collections</h2>
                        <div className="h-px bg-gray-200 flex-1 ml-8 hidden md:block"></div>
                    </div>
                    <div ref={categoriesRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {categories.map((cat, idx) => (
                            <Link to={`/shop/products?category=${cat.name}`} key={idx} className="group relative rounded-3xl overflow-hidden aspect-[16/10] shadow-lg cursor-pointer block">
                                <div className="absolute inset-0 bg-gray-900">
                                    <img
                                        src={cat.image}
                                        alt={cat.name}
                                        className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-100"
                                    />
                                </div>
                                <div className={`absolute inset-0 bg-gradient-to-t ${cat.color} opacity-60 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-40`}></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                                <div className="absolute bottom-0 left-0 p-8 w-full transform transition-transform duration-500 group-hover:translate-y-[-10px]">
                                    <div className="flex items-end justify-between">
                                        <div>
                                            <p className="text-white/80 text-sm font-medium uppercase tracking-wider mb-2">{cat.desc}</p>
                                            <h3 className="text-3xl md:text-5xl font-bold text-white mb-2">{cat.name}</h3>
                                        </div>
                                        <div className="bg-white/20 backdrop-blur-md p-3 rounded-full text-white transform translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                                            <ArrowRight size={24} />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Purpose & Impact Split Section */}
                <div ref={purposeRef} className="bg-white rounded-[2rem] shadow-xl overflow-hidden border border-gray-100">
                    <div className="grid md:grid-cols-2">
                        <div className="p-10 md:p-16 flex flex-col justify-center bg-[#f0fdf4]">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="bg-green-100 p-2 rounded-lg text-green-700">
                                    <Leaf size={24} />
                                </div>
                                <h3 className="text-green-800 font-bold uppercase tracking-widest text-sm">Our Mission</h3>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                                Products with a <span className="text-green-600 border-b-4 border-green-200">Purpose</span>
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                School of Nature engages in limited, ethical production of crafts, farm produce, and honey.
                                We are not a profit-driven commercial venture. Instead, we are instruments of impact.
                            </p>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="bg-white p-4 rounded-xl shadow-sm border border-green-50">
                                    <div className="text-3xl font-bold text-green-600 mb-1">100%</div>
                                    <div className="text-sm text-gray-500 font-medium">Reinvested Revenue</div>
                                </div>
                                <div className="bg-white p-4 rounded-xl shadow-sm border border-green-50">
                                    <div className="text-3xl font-bold text-green-600 mb-1">Low</div>
                                    <div className="text-sm text-gray-500 font-medium">Carbon Footprint</div>
                                </div>
                            </div>
                        </div>
                        <div className="relative min-h-[400px]">
                            <img
                                src="https://images.unsplash.com/photo-1606041008023-472dfb5e530f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                                alt="Artisan working"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-green-900/20 to-transparent mix-blend-multiply"></div>
                        </div>
                    </div>
                </div>

                {/* Philosophy & Partners Grid */}
                <div ref={featuresRef} className="grid md:grid-cols-2 gap-8">
                    {/* Enterprise Philosophy */}
                    <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-lg border border-gray-100 hover:shadow-xl transition-shadow relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Award size={100} className="text-green-500" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                            <span className="bg-green-100 p-2 rounded-full text-green-600"><Globe size={20} /></span>
                            Enterprise Philosophy
                        </h2>
                        <ul className="space-y-4">
                            {[
                                "Owned & governed by non-profit",
                                "Revenues reinvested into social programs",
                                "Eco-friendly production processes",
                                "Fair pricing & dignity for producers",
                                "Consumer contribution to impact"
                            ].map((item, index) => (
                                <li key={index} className="flex items-center text-gray-700 bg-gray-50 p-3 rounded-xl hover:bg-green-50 transition-colors">
                                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3 shrink-0"></span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Who Should Partner */}
                    <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-lg border border-gray-100 hover:shadow-xl transition-shadow relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Users size={100} className="text-amber-500" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                            <span className="bg-amber-100 p-2 rounded-full text-amber-600"><Heart size={20} /></span>
                            Who Should Partner
                        </h2>
                        <ul className="space-y-4">
                            {[
                                "CSR programs seeking ethical gifting",
                                "Conscious consumers & eco-lovers",
                                "Organizations for sustainable value chains",
                                "Supporters of craft revival",
                                "Those valuing indigenous knowledge"
                            ].map((item, index) => (
                                <li key={index} className="flex items-center text-gray-700 bg-gray-50 p-3 rounded-xl hover:bg-amber-50 transition-colors">
                                    <span className="w-2 h-2 bg-amber-500 rounded-full mr-3 shrink-0"></span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Final CTA */}
                <div ref={ctaRef} className="relative rounded-[2.5rem] overflow-hidden py-24 px-6 text-center shadow-2xl">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-green-950/90 via-emerald-900/60 to-emerald-100/40"></div>

                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h2 className="text-4xl font-bold text-white mb-6">Support Sustainable Livelihoods</h2>
                        <p className="text-xl text-blue-100 mb-10 leading-relaxed">
                            Explore our curated collection of handcrafted products. Every purchase directly empowers local artisans.
                        </p>
                        <Link to="/shop/products" className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-blue-900 transition-all duration-200 bg-white rounded-full hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-900 focus:ring-white transform hover:-translate-y-1 shadow-lg">
                            Start Shopping Now
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Marketplace;
