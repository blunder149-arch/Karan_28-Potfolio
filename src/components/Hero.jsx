// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FiDownload, FiArrowRight } from 'react-icons/fi'
import { SiReact } from 'react-icons/si'
import { FiZap, FiSmartphone } from 'react-icons/fi'
import { useState, useEffect } from 'react'

const ShimmerName = () => {
    const [shimmerActive, setShimmerActive] = useState(false)

    useEffect(() => {
        const interval = setInterval(() => {
            setShimmerActive(true)
            // Remove class after animation completes (1.2s)
            setTimeout(() => setShimmerActive(false), 1200)
        }, 10000)

        // Initial shimmer after 2 seconds
        const initialTimeout = setTimeout(() => {
            setShimmerActive(true)
            setTimeout(() => setShimmerActive(false), 1200)
        }, 2000)

        return () => {
            clearInterval(interval)
            clearTimeout(initialTimeout)
        }
    }, [])

    return (
        <>
            <span className={`name-shimmer ${shimmerActive ? 'shimmer-active' : ''}`}>
                Karan
            </span>{' '}
            <span className={`name-highlight name-shimmer ${shimmerActive ? 'shimmer-active' : ''}`}>
                Chaudhary
            </span>
        </>
    )
}

const Hero = () => {
    return (
        <section className="hero" id="hero">
            <div className="hero-bg-grid" />
            <div className="hero-glow-orb orb-1" />
            <div className="hero-glow-orb orb-2" />
            <div className="hero-glow-orb orb-3" />

            <div className="hero-content">
                <motion.div
                    className="hero-text"
                    initial={{ opacity: 0, x: -60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    <motion.div
                        className="hero-badge"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <span className="badge-dot" />
                        Available for opportunities
                    </motion.div>

                    <motion.p
                        className="hero-greeting"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ verticalAlign: 'middle', marginRight: '6px' }}>
                            <path d="M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2" />
                            <path d="M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2" />
                            <path d="M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8" />
                            <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 13" />
                        </svg>
                        Hey there, I'm
                    </motion.p>

                    <motion.h1
                        className="hero-name"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                    >
                        <ShimmerName />
                    </motion.h1>

                    <motion.div
                        className="hero-tagline"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                    >
                        <TypeAnimation
                            sequence={[
                                'I Build Web Applications',
                                2000,
                                'I Design Clean Interfaces',
                                2000,
                                'I Create Digital Experiences',
                                2000,
                                'I Solve Complex Problems',
                                2000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            cursor={true}
                        />
                    </motion.div>

                    <motion.p
                        className="hero-description"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.9 }}
                    >
                        A passionate Full Stack Developer who turns ideas into impactful
                        digital experiences. Building the web, one pixel at a time.
                    </motion.p>

                    <motion.div
                        className="hero-buttons"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.1 }}
                    >
                        <a href="#projects">
                            <button className="btn-primary">
                                View My Work <FiArrowRight />
                            </button>
                        </a>
                        <a href="#contact">
                            <button className="btn-secondary">
                                <FiDownload /> Get In Touch
                            </button>
                        </a>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="hero-visual"
                    initial={{ opacity: 0, x: 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <div className="hero-avatar-wrapper">
                        <div className="hero-avatar-ring" />
                        <div className="hero-avatar">
                            <img
                                src="/coder-profile.png"
                                alt="Karan Chaudhary - Coder"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    borderRadius: '50%',
                                }}
                            />
                        </div>

                        <div className="hero-floating-cards">
                            <motion.div
                                className="floating-card"
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                            >
                                <span className="card-icon"><SiReact /></span> React.js
                            </motion.div>
                            <motion.div
                                className="floating-card"
                                animate={{ y: [0, -12, 0] }}
                                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                            >
                                <span className="card-icon"><FiZap /></span> Full Stack
                            </motion.div>
                            <motion.div
                                className="floating-card"
                                animate={{ y: [0, -8, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                            >
                                <span className="card-icon"><FiSmartphone /></span> Mobile Dev
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>

            <motion.div
                className="hero-scroll-indicator"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
            >
                <div className="scroll-mouse" />
                <span>Scroll Down</span>
            </motion.div>
        </section>
    )
}

export default Hero
