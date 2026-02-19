import React, { useState, useRef, useEffect, useContext } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { ShopContext } from '../../context/ShopContext';
import { useNavigate, Link } from 'react-router-dom';
import ShopLayout from '../../Components/Shop/ShopLayout';
import ProductCard from '../../Components/Shop/ProductCard';
import { ArrowRight, Leaf, ShoppingBag } from 'lucide-react';

// Card Component for 3D Carousel (Unchanged logic, just styling tweaks if needed)
const Card = ({ product, position, dragX, handleDragStart, handleDragEnd, handleCardClick, isInWishlist, toggleWishlist }) => {
    const isCenter = position === 0;
    const baseScale = isCenter ? 1 : Math.max(0.6, 1 - Math.abs(position) * 0.15);
    const baseOffset = 200;
    const baseX = position * baseOffset;
    const baseRotateY = position * -10;
    const zIndex = 50 - Math.abs(position);
    const baseOpacity = Math.max(1, 1 - Math.abs(position) * 0.2);

    const rotateY = useTransform(
        dragX,
        [-baseOffset, 0, baseOffset],
        [(position - 1) * -10, baseRotateY, (position + 1) * -10]
    );
    const scale = useTransform(
        dragX,
        [-baseOffset, 0, baseOffset],
        [position === 1 ? 1 : (position === 0 ? 0.95 : baseScale), baseScale, position === -1 ? 1 : (position === 0 ? 0.95 : baseScale)]
    );
    const opacity = useTransform(
        dragX,
        [-baseOffset, 0, baseOffset],
        [position === 1 ? 1 : (position === 0 ? 1 : baseOpacity), baseOpacity, position === -1 ? 1 : (position === 0 ? 1 : baseOpacity)]
    );

    return (
        <motion.div
            className="absolute cursor-grab active:cursor-grabbing"
            drag="x" dragConstraints={{ left: 0, right: 0 }} dragElastic={0.2} dragMomentum={false}
            onDragStart={handleDragStart} onDrag={(e, info) => dragX.set(info.offset.x)} onDragEnd={handleDragEnd}
            onClick={() => handleCardClick(position, product._id)}
            style={{ scale, rotateY, zIndex, opacity, transformStyle: 'preserve-3d', filter: isCenter ? 'brightness(1.1)' : 'brightness(0.9)' }}
            animate={{ x: baseX, scale: baseScale, rotateY: baseRotateY, opacity: baseOpacity }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
            <div className={`p-2 rounded-3xl ${isCenter ? 'bg-lime-500' : 'bg-emerald-600/80'} transition-colors duration-300`}
                style={{ width: '300px', height: '450px', boxShadow: isCenter ? '0 25px 50px -12px rgba(16, 185, 129, 0.4)' : '0 10px 30px -10px rgba(0, 0, 0, 0.2)' }}>
                <div className="w-full h-full bg-white rounded-2xl overflow-hidden flex flex-col">
                    <div className="h-4/5 bg-gray-50 relative overflow-hidden">
                        <img src={product.image} alt={product.name} className="w-full h-full object-cover" draggable="false" />
                        <button className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all z-20 shadow-sm"
                            onClick={(e) => { e.stopPropagation(); toggleWishlist(); }}>
                            <svg className={`w-5 h-5 ${isInWishlist ? "text-red-500 fill-red-500" : "text-gray-400"}`} viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill={isInWishlist ? "currentColor" : "none"}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                        </button>
                    </div>
                    <div className="h-1/5 p-4 flex items-center justify-center bg-emerald-950">
                        <h3 className={`font-semibold text-white text-center ${isCenter ? 'text-base' : 'text-sm'}`}>{product.name}</h3>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const ShopLanding = () => {
    const { products, wishlistItems, addToWishlist, backendUrl } = useContext(ShopContext);
    const [topSellingProducts, setTopSellingProducts] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const dragX = useMotionValue(0);
    const containerRef = useRef(null);
    const navigate = useNavigate();

    // Derived state
    const totalProducts = topSellingProducts.length;

    // --- DATA LOGIC: Latest 7 & Random 8 ---

    // --- DEMO DATA (Fallback) ---
    const demoProducts = [
        { _id: 'demo1', name: "Artisan Clay Pot", image: ["https://images.unsplash.com/photo-1610701596007-11502861dcfa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"], price: 1200, category: "Handicrafts", date: 1700000000000 },
        { _id: 'demo2', name: "Organic Forest Honey", image: ["https://images.unsplash.com/photo-1587049352846-4a222e784d38?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"], price: 850, category: "Natural Foods", date: 1700000000001 },
        { _id: 'demo3', name: "Woven Bamboo Basket", image: ["https://images.unsplash.com/photo-1596765796720-7798357f8842?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"], price: 1500, category: "Handicrafts", date: 1700000000002 },
        { _id: 'demo4', name: "Herbal Green Tea", image: ["https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"], price: 450, category: "Natural Foods", date: 1700000000003 },
        { _id: 'demo5', name: "Handmade Soap Bar", image: ["https://images.unsplash.com/photo-1600857062241-98e5dba7f214?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"], price: 250, category: "Wellness", date: 1700000000004 },
        { _id: 'demo6', name: "Recycled Paper Notebook", image: ["https://images.unsplash.com/photo-1544816155-12df9643f363?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"], price: 300, category: "Stationery", date: 1700000000005 },
        { _id: 'demo7', name: "Terracotta Vase", image: ["https://images.unsplash.com/photo-1578749556935-ef888147418f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"], price: 900, category: "Handicrafts", date: 1700000000006 },
        { _id: 'demo8', name: "Wild Berry Jam", image: ["https://images.unsplash.com/photo-1606828577543-9824f2b58ef0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"], price: 550, category: "Natural Foods", date: 1700000000007 },
    ];

    // 1. Latest Arrivals (Carousel) - Strictly 7 items sorted by date
    useEffect(() => {
        if (products && products.length > 0) {
            // Sort by Date Descending
            const sortedByDate = [...products].sort((a, b) => b.date - a.date);
            // Take exactly 7 (or fewer if not enough)
            const latest7 = sortedByDate.slice(0, 7);

            const prepared = latest7.map(item => ({
                ...item,
                image: item.image && item.image[0] ? `${backendUrl}/images/${item.image[0]}` : "https://via.placeholder.com/300"
            }));
            setTopSellingProducts(prepared);
        } else {
            // Fallback to Demo
            setTopSellingProducts(demoProducts.slice(0, 7));
        }
    }, [products, backendUrl]);

    // 2. Random 8 Grid - Reshuffle on Mount (Reload)
    const randomProducts = React.useMemo(() => {
        let sourceList = products && products.length > 0 ? products : demoProducts;

        let processedList = sourceList.map(p => {
            if (p.image && Array.isArray(p.image) && p.image.length > 0) {
                const firstImg = p.image[0];
                if (!firstImg.startsWith('http')) {
                    return { ...p, image: [`${backendUrl}/images/${firstImg}`] };
                }
            }
            return p;
        });

        // Fisher-Yates shuffle or simple sort shuffle
        const shuffled = [...processedList].sort(() => 0.5 - Math.random());
        // Take exactly 8
        return shuffled.slice(0, 8);
    }, [products, backendUrl]); // Logic runs when products load

    // --- Carousel Handlers ---
    const handleDragStart = () => setIsDragging(true);
    const handleDragEnd = (event, info) => {
        setIsDragging(false);
        const offset = info.offset.x;
        const velocity = info.velocity.x;
        let cardsToMove = Math.round(offset / 200);
        if (Math.abs(velocity) > 500) {
            const velocityBonus = Math.floor(Math.abs(velocity) / 1000);
            cardsToMove = offset > 0 ? Math.max(cardsToMove, 1) + velocityBonus : Math.min(cardsToMove, -1) - velocityBonus;
        }
        if (Math.abs(offset) > 50 || Math.abs(velocity) > 300) {
            setCurrentIndex((prev) => (prev - cardsToMove + totalProducts * 10) % totalProducts);
        }
        dragX.set(0);
    };

    const getVisibleCards = () => {
        console.log("Total Products:", totalProducts, "Top Selling:", topSellingProducts);
        if (totalProducts === 0) return [];
        const visible = [];
        for (let i = -3; i <= 3; i++) {
            const index = (currentIndex + i + totalProducts) % totalProducts;
            if (topSellingProducts[index]) {
                visible.push({ ...topSellingProducts[index], position: i, actualIndex: index });
            }
        }
        return visible;
    };

    const handleCardClick = (position, productId) => {
        if (position === 0 && !isDragging) navigate(`/product/${productId}`);
        else if (!isDragging) setCurrentIndex((prev) => (prev + position + totalProducts) % totalProducts);
    };

    return (
        <ShopLayout>
            <div className="bg-[#fdfbf7] min-h-screen font-sans">

                {/* 1. Header Section - Full Screen Width/Height Hero */}
                <div className=" min-h-[calc(95vh-120px)] flex flex-col justify-center items-center text-center px-6 relative overflow-hidden">
                    {/* Background Image with Overlay */}
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center"></div>
                    <div className="absolute inset-0 bg-emerald-950/80"></div>

                    <div className="relative z-10 max-w-4xl mx-auto space-y-8 animate-fade-in-up">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-lime-300 transform hover:scale-105 transition-transform cursor-default">
                            <Leaf size={16} />
                            <span className="text-xs font-bold tracking-[0.2em] uppercase">Ethical • Sustainable • Handcrafted</span>
                        </div>

                        <h1 className="text-5xl md:text-8xl font-serif text-white tracking-tight leading-none drop-shadow-2xl">
                            Nature's <span className="text-lime-400 italic">Bounty</span><br />
                            <span className="text-4xl md:text-6xl font-light font-sans opacity-90 block mt-4">For Conscious Living</span>
                        </h1>

                        <p className="text-emerald-50/80 text-lg md:text-2xl max-w-2xl mx-auto leading-relaxed font-light">
                            Explore a curated marketplace where every artifact tells a story of tradition, purpose, and impact.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-8">
                            <button onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })} className="px-10 py-4 bg-lime-600 hover:bg-lime-500 text-white rounded-full font-bold text-lg transition-all shadow-[0_10px_30px_rgba(101,163,13,0.3)] flex items-center gap-3">
                                <ShoppingBag size={20} /> Latest Arrivals
                            </button>
                            <Link to="/about-us" className="px-10 py-4 bg-white/5 hover:bg-white/10 border border-white/20 text-white rounded-full font-bold text-lg transition-all flex items-center gap-3 backdrop-blur-md">
                                Our Philosophy
                            </Link>
                        </div>
                    </div>
                </div>

                {/* 2. Top Selling 3D Carousel (Green Theme) */}
                <div className="relative w-full overflow-hidden flex flex-col justify-center items-center py-10 bg-emerald-50/50 min-h-[calc(95vh-120px)]">
                    <div className="relative z-10 w-full flex flex-col items-center">
                        <div className="mb-12 text-center">
                            <h2 className="text-4xl md:text-5xl text-emerald-900 font-serif font-bold mb-4">Latest Arrivals</h2>
                            <div className="w-24 h-1 bg-lime-500 mx-auto rounded-full"></div>
                        </div>

                        <div
                            ref={containerRef}
                            className="relative w-full h-[430px] flex items-center justify-center perspective-[2000px] cursor-grab active:cursor-grabbing"
                            style={{ perspective: '2000px' }}
                        >
                            {getVisibleCards().map((product) => (
                                <Card
                                    key={`${product.actualIndex}-${product._id}`}
                                    product={product}
                                    position={product.position}
                                    dragX={dragX}
                                    handleDragStart={handleDragStart}
                                    handleDragEnd={handleDragEnd}
                                    handleCardClick={handleCardClick}
                                    isInWishlist={false} // Demo mode
                                    toggleWishlist={() => { }}
                                />
                            ))}
                        </div>

                        {/* Carousel Controls */}
                        <div className="flex justify-center items-center gap-6 mt-10 relative z-20">
                            <button onClick={() => setCurrentIndex((prev) => (prev - 1 + totalProducts) % totalProducts)}
                                className="w-9 h-9 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-lime-50 text-emerald-800 border border-emerald-100 transition-all transform hover:scale-110">
                                <ArrowRight className="rotate-180" size={20} />
                            </button>
                            <div className="flex gap-2">
                                {topSellingProducts.map((_, index) => (
                                    <button key={index} onClick={() => setCurrentIndex(index)}
                                        className={`transition-all duration-300 ${currentIndex === index ? 'w-3 h-3 bg-lime-600 scale-150' : 'w-2 h-2 bg-emerald-200 hover:bg-emerald-300'} rounded-full`} />
                                ))}
                            </div>
                            <button onClick={() => setCurrentIndex((prev) => (prev + 1) % totalProducts)}
                                className="w-9 h-9 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-lime-50 text-emerald-800 border border-emerald-100 transition-all transform hover:scale-110">
                                <ArrowRight size={20} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* 3. Random 8 Product Grid (Demo Data) */}
                <div className="max-w-7xl mx-auto px-4 py-24">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 font-serif">Curated Selection</h2>
                            <p className="text-emerald-700/60 mt-2 text-lg">Handpicked treasures just for you</p>
                        </div>
                        <Link to="/shop/products" className="hidden md:flex text-lime-700 font-bold hover:text-lime-800 items-center gap-2 group">
                            View All Collection <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
                        {randomProducts.map(product => {
                            const imageUrl = product.image && product.image.length > 0
                                ? `${backendUrl}/images/${product.image[0]}`
                                : "https://via.placeholder.com/300";
                            return (
                                <ProductCard key={product._id} {...product} image={imageUrl} id={product._id} />
                            )
                        })}
                    </div>

                    <div className="mt-20 text-center">
                        <Link to="/shop/products" className="inline-flex items-center gap-3 px-12 py-5 bg-emerald-950 text-white rounded-full font-bold text-lg hover:bg-emerald-900 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
                            Browse Full Catalog <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>

            </div>
        </ShopLayout>
    );
};

export default ShopLanding;
