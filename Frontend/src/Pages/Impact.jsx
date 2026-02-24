import React, { useState, useEffect, useRef } from 'react'
import { Calendar, Users, Home, GraduationCap, Briefcase, Sprout, TreePine, Heart, Globe, ArrowRight, Leaf, Award, Target } from 'lucide-react'
import { Assets } from '../assets/Assets'
import { useNavigate } from 'react-router-dom'

/* ── Animated Counter Hook ────────────────────────────────── */
const useCountUp = (end, duration = 2000, trigger = false) => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        if (!trigger) return
        let start = 0
        const isNumber = !isNaN(parseInt(end))
        if (!isNumber) { setCount(end); return }
        const target = parseInt(end)
        const increment = target / (duration / 16)
        const timer = setInterval(() => {
            start += increment
            if (start >= target) { setCount(target); clearInterval(timer) }
            else setCount(Math.floor(start))
        }, 16)
        return () => clearInterval(timer)
    }, [trigger, end, duration])
    return count
}

/* ── Scroll-trigger Hook ──────────────────────────────────── */
const useInView = (threshold = 0.2) => {
    const ref = useRef(null)
    const [inView, setInView] = useState(false)
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setInView(true) },
            { threshold }
        )
        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [threshold])
    return [ref, inView]
}

/* ── Counter Card ─────────────────────────────────────────── */
const CounterCard = ({ icon, value, suffix = '', label, delay = 0, inView }) => {
    const count = useCountUp(value, 2000, inView)
    return (
        <div
            className="flex flex-col items-center gap-3 transition-all duration-700"
            style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(40px)',
                transitionDelay: `${delay}ms`
            }}
        >
            <div className="p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                {icon}
            </div>
            <div className="text-5xl md:text-6xl font-extrabold text-white tracking-tight">
                {typeof count === 'number' ? count : count}{suffix}
            </div>
            <div className="text-lime-200 text-lg font-medium text-center max-w-[200px]">{label}</div>
        </div>
    )
}

/* ── Timeline Item ────────────────────────────────────────── */
const TimelineItem = ({ year, title, description, icon, isLeft, inView, delay }) => (
    <div className={`flex items-center gap-6 md:gap-12 w-full ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row`}>
        {/* Card */}
        <div
            className="flex-1 transition-all duration-700"
            style={{
                opacity: inView ? 1 : 0,
                transform: inView
                    ? 'translateX(0)'
                    : isLeft ? 'translateX(-60px)' : 'translateX(60px)',
                transitionDelay: `${delay}ms`
            }}
        >
            <div className="bg-white/80 backdrop-blur-xl p-6 rounded-2xl shadow-lg border border-lime-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-lime-100 rounded-xl text-lime-700 group-hover:bg-lime-600 group-hover:text-white transition-colors duration-300">
                        {icon}
                    </div>
                    <span className="text-sm font-bold text-lime-600 tracking-wider uppercase">{year}</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{title}</h4>
                <p className="text-gray-600 leading-relaxed">{description}</p>
            </div>
        </div>

        {/* Center Dot */}
        <div className="hidden md:flex flex-col items-center flex-shrink-0">
            <div
                className="w-5 h-5 rounded-full bg-lime-500 shadow-[0_0_20px_rgba(132,204,22,0.6)] transition-all duration-500 relative"
                style={{ opacity: inView ? 1 : 0, transitionDelay: `${delay}ms` }}
            >
                <div className="absolute inset-0 rounded-full bg-lime-400 animate-ping opacity-30"></div>
            </div>
        </div>

        {/* Spacer */}
        <div className="flex-1 hidden md:block"></div>
    </div>
)

/* ── Main Impact Page ─────────────────────────────────────── */
const Impact = () => {
    const navigate = useNavigate()
    const [heroRef, heroInView] = useInView(0.3)
    const [timelineRef, timelineInView] = useInView(0.1)
    const [tabsRef, tabsInView] = useInView(0.2)
    const [gridRef, gridInView] = useInView(0.1)
    const [activeTab, setActiveTab] = useState(0)

    const timelineMilestones = [
        { year: '2020', title: 'Foundation Established', description: 'School of Nature was founded with a vision to integrate grassroots education, sustainable livelihoods, and ecological conservation.', icon: <Sprout size={20} /> },
        { year: '2021', title: 'First Phulwari Center', description: 'Launched the first community-based early learning center, bringing education to children from marginalized families.', icon: <GraduationCap size={20} /> },
        { year: '2022', title: 'Kaushal Jyoti Launch', description: 'Initiated the women\'s livelihoods program, empowering 250+ women with skills training and income-generating activities.', icon: <Briefcase size={20} /> },
        { year: '2023', title: 'Peak Expansion', description: 'Expanded to 3–5 learning centers with up to 13 trained Baalmitras, reaching ~300 children annually.', icon: <Users size={20} /> },
        { year: '2024', title: 'Conservation Wing', description: 'Launched the Conservation & Apiculture program, blending livelihood generation with biodiversity protection.', icon: <TreePine size={20} /> },
        { year: 'Present', title: 'Growing Impact', description: 'Continuing to scale our integrated development model across western Uttar Pradesh.', icon: <Globe size={20} /> },
    ]

    const tabData = [
        {
            label: '🌱 Education',
            color: 'orange',
            image: Assets.p9,
            stats: [
                { value: '~300', label: 'Children supported annually' },
                { value: '3–5', label: 'Learning centers operated' },
                { value: '13', label: 'Baalmitras engaged at peak' },
            ],
            description: 'Through our Phulwari program, we build foundational learning, environmental awareness, values, and future-ready skills among children from marginalized communities.'
        },
        {
            label: '💼 Livelihoods',
            color: 'blue',
            image: Assets.k4,
            stats: [
                { value: '250+', label: 'Women empowered' },
                { value: '100%', label: 'Low-carbon livelihoods' },
                { value: '5+', label: 'Skill verticals' },
            ],
            description: 'Kaushal Jyoti strengthens household resilience by enhancing women\'s skills, income security, and economic agency through sustainable, low-carbon livelihoods.'
        },
        {
            label: '🌍 Environment',
            color: 'green',
            image: Assets.c1,
            stats: [
                { value: 'Active', label: 'Conservation efforts' },
                { value: 'Growing', label: 'Apiculture network' },
                { value: 'Multi', label: 'Ecosystem protection' },
            ],
            description: 'Our Conservation & Apiculture program protects ecosystems, biodiversity, and natural resources while generating livelihood opportunities linked to conservation outcomes.'
        },
    ]

    const detailedStats = [
        { icon: <Calendar className="w-8 h-8" />, value: "Since 2020", label: "Years of grassroots work", span: 'col-span-1' },
        { icon: <Users className="w-8 h-8" />, value: "~300", label: "Children supported annually through Phulwari", span: 'col-span-1 md:col-span-2', featured: true },
        { icon: <Home className="w-8 h-8" />, value: "3–5", label: "Community learning centers operated", span: 'col-span-1' },
        { icon: <GraduationCap className="w-8 h-8" />, value: "Up to 13", label: "Trained Baalmitras engaged", span: 'col-span-1' },
        { icon: <Briefcase className="w-8 h-8" />, value: "250+", label: "Women engaged in livelihoods", span: 'col-span-1 md:col-span-2', featured: true },
        { icon: <Heart className="w-8 h-8" />, value: "10+", label: "Villages directly impacted", span: 'col-span-1' },
        { icon: <Leaf className="w-8 h-8" />, value: "Active", label: "Conservation & apiculture initiatives", span: 'col-span-1' },
        { icon: <Award className="w-8 h-8" />, value: "3", label: "Core integrated programs", span: 'col-span-1' },
        { icon: <Target className="w-8 h-8" />, value: "SDGs", label: "Aligned with UN Sustainable Development Goals", span: 'col-span-1' },
    ]

    return (
        <div className="bg-gray-50 min-h-screen overflow-hidden">

            {/* ═══════════════ SECTION 1: HERO WITH ANIMATED COUNTERS ═══════════════ */}
            <section
                ref={heroRef}
                className="relative min-h-screen flex items-center justify-center overflow-hidden"
            >
                {/* Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-950 via-emerald-900 to-lime-800"></div>

                {/* Floating Blobs */}
                <div className="absolute top-20 left-10 w-72 h-72 bg-lime-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-lime-600/5 rounded-full blur-3xl"></div>

                {/* Grid Pattern Overlay */}
                <div className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
                        backgroundSize: '60px 60px'
                    }}
                ></div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
                    {/* Badge */}
                    <div
                        className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-8 transition-all duration-700"
                        style={{ opacity: heroInView ? 1 : 0, transform: heroInView ? 'translateY(0)' : 'translateY(20px)' }}
                    >
                        <Sprout size={16} className="text-lime-400" />
                        <span className="text-lime-200 text-sm font-medium tracking-wide">OUR JOURNEY OF IMPACT</span>
                    </div>

                    {/* Heading */}
                    <h1
                        className="text-5xl sm:text-6xl lg:text-8xl font-extrabold text-white mb-6 leading-tight tracking-tight transition-all duration-700"
                        style={{ opacity: heroInView ? 1 : 0, transform: heroInView ? 'translateY(0)' : 'translateY(30px)', transitionDelay: '200ms' }}
                    >
                        Impact at a <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-300 to-emerald-300">Glance</span>
                    </h1>

                    <p
                        className="text-xl text-emerald-200/80 max-w-2xl mx-auto mb-16 leading-relaxed transition-all duration-700"
                        style={{ opacity: heroInView ? 1 : 0, transform: heroInView ? 'translateY(0)' : 'translateY(30px)', transitionDelay: '400ms' }}
                    >
                        Measuring our journey of change through numbers that represent lives touched and communities empowered.
                    </p>

                    {/* Counters */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
                        <CounterCard icon={<Users size={28} className="text-lime-300" />} value={300} suffix="+" label="Children Supported Annually" delay={600} inView={heroInView} />
                        <CounterCard icon={<Briefcase size={28} className="text-lime-300" />} value={250} suffix="+" label="Women Empowered" delay={800} inView={heroInView} />
                        <CounterCard icon={<Calendar size={28} className="text-lime-300" />} value="Since 2020" label="Years of Grassroots Work" delay={1000} inView={heroInView} />
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
                    <span className="text-white/40 text-xs tracking-widest uppercase">Scroll</span>
                    <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
                        <div className="w-1.5 h-3 bg-white/50 rounded-full animate-pulse"></div>
                    </div>
                </div>
            </section>

            {/* ═══════════════ SECTION 2: IMPACT TIMELINE ═══════════════ */}
            <section ref={timelineRef} className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white relative">
                {/* Decorative */}
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-lime-400 to-transparent"></div>

                <div className="max-w-5xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-20">
                        <span className="text-lime-600 font-semibold tracking-wider uppercase text-sm">Our Journey</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">
                            Milestones of <span className="text-lime-600">Change</span>
                        </h2>
                    </div>

                    {/* Timeline Line (center) */}
                    <div className="relative">
                        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-lime-400 via-lime-300 to-lime-100 -translate-x-1/2"></div>

                        <div className="space-y-12 md:space-y-16">
                            {timelineMilestones.map((item, idx) => (
                                <TimelineItem
                                    key={idx}
                                    {...item}
                                    isLeft={idx % 2 === 0}
                                    inView={timelineInView}
                                    delay={idx * 200}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════ SECTION 3: INTERACTIVE TABS ═══════════════ */}
            <section ref={tabsRef} className="py-24 px-6 bg-white relative overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-lime-100 rounded-full blur-3xl opacity-50"></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <span className="text-lime-600 font-semibold tracking-wider uppercase text-sm">Impact Areas</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">
                            Where We Make a <span className="text-lime-600">Difference</span>
                        </h2>
                    </div>

                    {/* Tab Buttons */}
                    <div className="flex flex-wrap justify-center gap-3 mb-12">
                        {tabData.map((tab, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveTab(idx)}
                                className={`px-8 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 ${activeTab === idx
                                    ? 'bg-emerald-900 text-white shadow-xl shadow-emerald-900/20 scale-105'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:scale-[1.02]'
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* Tab Content */}
                    {tabData.map((tab, idx) => (
                        <div
                            key={idx}
                            className={`transition-all duration-500 ${activeTab === idx ? 'opacity-100 translate-y-0' : 'opacity-0 absolute -translate-y-4 pointer-events-none'}`}
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                                {/* Image */}
                                <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[400px] group">
                                    <img
                                        src={tab.image}
                                        alt={tab.label}
                                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                                </div>

                                {/* Content */}
                                <div className="space-y-6">
                                    <p className="text-gray-700 text-lg leading-relaxed">{tab.description}</p>

                                    {/* Stat Cards */}
                                    <div className="grid grid-cols-3 gap-4">
                                        {tab.stats.map((stat, sIdx) => (
                                            <div key={sIdx} className="bg-lime-50 border border-lime-200 rounded-2xl p-5 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                                                <div className="text-3xl font-extrabold text-emerald-900">{stat.value}</div>
                                                <div className="text-sm text-gray-600 mt-1 font-medium">{stat.label}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ═══════════════ SECTION 4: BENTO STATS GRID ═══════════════ */}
            <section ref={gridRef} className="py-24 px-6 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <span className="text-lime-600 font-semibold tracking-wider uppercase text-sm">By The Numbers</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">
                            Our Complete <span className="text-lime-600">Impact</span>
                        </h2>
                    </div>

                    {/* Bento Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        {detailedStats.map((stat, idx) => (
                            <div
                                key={idx}
                                className={`${stat.span} ${stat.featured
                                    ? 'bg-gradient-to-br from-emerald-900 to-lime-800 text-white'
                                    : 'bg-white border border-gray-100'
                                    } rounded-3xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group`}
                                style={{
                                    opacity: gridInView ? 1 : 0,
                                    transform: gridInView ? 'translateY(0)' : 'translateY(30px)',
                                    transitionDelay: `${idx * 100}ms`,
                                    transitionDuration: '600ms'
                                }}
                            >
                                <div className={`p-3 rounded-2xl w-fit mb-5 ${stat.featured
                                    ? 'bg-white/15 text-lime-300'
                                    : 'bg-lime-50 text-lime-600'
                                    } group-hover:scale-110 transition-transform duration-300`}>
                                    {stat.icon}
                                </div>
                                <div className={`text-4xl font-extrabold mb-2 ${stat.featured ? 'text-white' : 'text-gray-900'}`}>
                                    {stat.value}
                                </div>
                                <div className={`text-base font-medium ${stat.featured ? 'text-lime-200' : 'text-gray-500'}`}>
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════ SECTION 5: CTA BAND ═══════════════ */}
            <section className="relative py-20 px-6 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-950 to-lime-900"></div>
                <div className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)',
                        backgroundSize: '30px 30px'
                    }}
                ></div>

                <div className="relative z-10 max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Be Part of the <span className="text-lime-300">Change</span>
                    </h2>
                    <p className="text-xl text-emerald-200/80 mb-10 leading-relaxed max-w-2xl mx-auto">
                        Every contribution creates ripples of change. Join us in building a climate-resilient and equitable future for communities that need it most.
                    </p>
                    <button
                        onClick={() => navigate('/contact-us')}
                        className="inline-flex items-center gap-3 bg-lime-500 hover:bg-lime-400 text-emerald-950 px-10 py-4 rounded-2xl text-lg font-bold shadow-xl hover:shadow-lime-500/30 transition-all duration-300 hover:-translate-y-1 group"
                    >
                        Get Involved
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </section>
        </div>
    )
}

export default Impact
