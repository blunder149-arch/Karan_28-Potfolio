// eslint-disable-next-line no-unused-vars
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import { FiX, FiChevronDown, FiChevronUp } from 'react-icons/fi'

const Designs = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })
    const [activeTab, setActiveTab] = useState('uiux')
    const [showAll, setShowAll] = useState(false)
    const [selectedDesign, setSelectedDesign] = useState(null)

    // ========== UI/UX Designs ==========
    const uiuxTopDesigns = [
        {
            title: 'Trading App UI',
            category: 'App UI',
            image: '/designs/Trading App UI.jpg',
        },
        {
            title: 'Karan Logo Design',
            category: 'Brand Identity',
            image: '/designs/karan-logo.jpg',
        },
        {
            title: 'Coffee Packaging',
            category: 'Packaging',
            image: '/designs/coffe-packing.jpg',
        },
        {
            title: 'Corporate Design 2024',
            category: 'Corporate',
            image: '/designs/Corporate Flyer.jpg',
        },
        {
            title: 'Modern Furniture',
            category: 'Poster',
            image: '/designs/furniture-orange.jpg',
        },
        {
            title: 'Business Flyer',
            category: 'Flyer',
            image: '/designs/Business Flyer.jpg',
        },
    ]

    const uiuxMoreDesigns = [
        {
            title: 'Digital Marketing',
            category: 'Social Media',
            image: '/designs/Social Media Poster.jpg',
        },
        {
            title: 'Traditional Tea House',
            category: 'Flyer',
            image: '/designs/Traditional Tea House.jpg',
        },
        {
            title: 'Dream House',
            category: 'Real Estate',
            image: '/designs/Real Estate - Dream House.jpg',
        },
        {
            title: 'Modern Home Sale',
            category: 'Real Estate',
            image: '/designs/Modern Home For Sale.jpg',
        },
        {
            title: 'CSS Business Card',
            category: 'Stationery',
            image: '/designs/CSS Business card.png',
        },
        {
            title: 'Product Poster',
            category: 'Poster',
            image: '/designs/Product Poster.jpg',
        },
        {
            title: 'Creative Poster',
            category: 'Creative',
            image: '/designs/Creative Poster.jpg',
        },
        {
            title: 'Product Packaging',
            category: 'Packaging',
            image: '/designs/Product Packaging.jpg',
        },
        {
            title: 'CSS Letterhead',
            category: 'Stationery',
            image: '/designs/Letterhead.jpg',
        },
        {
            title: 'Visiting Card',
            category: 'Stationery',
            image: '/designs/VISITING CARD-100.jpg',
        },
    ]

    // ========== Figma Designs ==========
    const figmaTopDesigns = [
        {
            title: 'Hostel Management System',
            category: 'Dashboard UI',
            image: '/designs/figma/Hostel Management system.png',
        },
        {
            title: 'Blood Donation App',
            category: 'Mobile App',
            image: '/designs/figma/Blood donation App.png',
        },
        {
            title: 'Food Delivery App',
            category: 'Mobile App',
            image: '/designs/figma/Food delivery.png',
        },
        {
            title: 'Health Tracking App',
            category: 'Mobile App',
            image: '/designs/figma/Health tracking.png',
        },
        {
            title: 'Shoes Poster',
            category: 'Design Tool',
            image: '/designs/figma/Shoes poster .png',
        },
        {
            title: 'Shopping App',
            category: 'Mobile App',
            image: '/designs/figma/Shoping App.png',
        },
    ]

    const figmaMoreDesigns = [
        {
            title: 'AI Study Buddy',
            category: 'Mobile App',
            image: '/designs/figma/AI study Buddy App.png',
        },
        {
            title: 'Fresh Articles',
            category: 'Web Design',
            image: '/designs/figma/Fresh articals.png',
        },
        {
            title: 'Furniture Ads',
            category: 'Web Design',
            image: '/designs/figma/Furniture ads.png',
        },
        {
            title: 'Portfolio Design',
            category: 'Web Design',
            image: '/designs/figma/Potfolio design.png',
        },
        {
            title: 'Lock Screen Wallpaper',
            category: 'iPhone Design',
            image: '/designs/figma/Lock screen wallpaper.png',
        },
    ]

    // Choose which designs to show based on active tab
    const topDesigns = activeTab === 'uiux' ? uiuxTopDesigns : figmaTopDesigns
    const moreDesigns = activeTab === 'uiux' ? uiuxMoreDesigns : figmaMoreDesigns
    const allDesigns = showAll ? [...topDesigns, ...moreDesigns] : topDesigns

    // Reset showAll when switching tabs
    const handleTabChange = (tab) => {
        setActiveTab(tab)
        setShowAll(false)
    }

    return (
        <section className="section" id="designs" ref={ref}>
            <motion.div
                className="section-header"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
            >
                <p className="section-number">05.</p>
                <h2 className="section-title">
                    Design <span className="title-highlight">Showcase</span>
                </h2>
                <div className="section-line" />
                <p className="section-subtitle">
                    UI/UX and graphic designs crafted during my OJT experience.
                </p>
            </motion.div>

            {/* iPhone-style Pill Toggle */}
            <motion.div
                className="design-tab-wrapper"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.5 }}
            >
                <div className="design-tab-pill">
                    <div
                        className="design-tab-slider"
                        style={{
                            transform: activeTab === 'uiux' ? 'translateX(0)' : 'translateX(100%)',
                        }}
                    />
                    <button
                        className={`design-tab-btn ${activeTab === 'uiux' ? 'active' : ''}`}
                        onClick={() => handleTabChange('uiux')}
                    >
                        UI/UX Design
                    </button>
                    <button
                        className={`design-tab-btn ${activeTab === 'figma' ? 'active' : ''}`}
                        onClick={() => handleTabChange('figma')}
                    >
                        Figma Design
                    </button>
                </div>
            </motion.div>

            {/* Design Grid */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                >
                    {allDesigns.length > 0 ? (
                        <>
                            <div className="designs-grid">
                                {allDesigns.map((design, i) => (
                                    <motion.div
                                        key={design.title}
                                        className="design-card"
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 + (i % 6) * 0.08, duration: 0.4 }}
                                        whileHover={{ y: -8 }}
                                        onClick={() => setSelectedDesign(design)}
                                    >
                                        <div className="design-image-wrapper">
                                            <img
                                                src={design.image}
                                                alt={design.title}
                                                className="design-image"
                                                loading="lazy"
                                            />
                                            <div className="design-overlay">
                                                <span className="design-view-text">View Design</span>
                                            </div>
                                        </div>
                                        <div className="design-info">
                                            <span className="design-category">{design.category}</span>
                                            <h3 className="design-title">{design.title}</h3>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {moreDesigns.length > 0 && (
                                <div className="designs-toggle">
                                    <button
                                        className="btn-see-more"
                                        onClick={() => setShowAll(!showAll)}
                                    >
                                        {showAll ? (
                                            <>Show Less <FiChevronUp /></>
                                        ) : (
                                            <>See More ({moreDesigns.length}) <FiChevronDown /></>
                                        )}
                                    </button>
                                </div>
                            )}
                        </>
                    ) : (
                        <div className="designs-empty">
                            <div className="designs-empty-icon">🎨</div>
                            <p>Figma designs coming soon!</p>
                            <span>Stay tuned for amazing UI/UX work.</span>
                        </div>
                    )}
                </motion.div>
            </AnimatePresence>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedDesign && (
                    <motion.div
                        className="design-lightbox"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedDesign(null)}
                    >
                        <motion.div
                            className="design-lightbox-content"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ type: 'spring', damping: 25 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                className="design-lightbox-close"
                                onClick={() => setSelectedDesign(null)}
                            >
                                <FiX />
                            </button>
                            <img
                                src={selectedDesign.image}
                                alt={selectedDesign.title}
                                className="design-lightbox-image"
                            />
                            <div className="design-lightbox-info">
                                <span className="design-category">{selectedDesign.category}</span>
                                <h3>{selectedDesign.title}</h3>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}

export default Designs
