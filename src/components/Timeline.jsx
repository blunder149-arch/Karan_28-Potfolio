// eslint-disable-next-line no-unused-vars
import { motion, useInView, useScroll, useTransform, useMotionValueEvent } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { FiBookOpen, FiCode, FiAward } from 'react-icons/fi'

const Timeline = () => {
    const ref = useRef(null)
    const containerRef = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })
    const [isFinished, setIsFinished] = useState(false)

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start 70%', 'end 50%'],
    })

    // Transform scroll to percentage for CSS
    const lineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1])

    // Detect finish (goes both ways)
    useMotionValueEvent(scrollYProgress, 'change', (latest) => {
        setIsFinished(latest >= 0.95)
    })

    const timelineData = [
        {
            date: '2021',
            title: 'The Spark',
            subtitle: 'Discovering Programming Languages',
            description:
                'Took admission in Computer Science stream and discovered that programming languages can create amazing things. That one realization changed everything — the journey of a developer had begun.',
            icon: <FiAward />,
        },
        {
            date: '2021 — 2023',
            title: '11th & 12th — Computer Science',
            subtitle: 'First Steps into Programming',
            description:
                'Discovered the world of programming during Computer Science studies. Started with BASIC Editor and FoxPro, then moved to C and C++ programming. This is where the passion for coding truly began.',
            icon: <FiCode />,
        },
        {
            date: '2023 — 2026',
            title: 'BVoc in Software Development',
            subtitle: 'RNG Patel Institute of Technology, GTU',
            description:
                'Joined RNG Patel Institute of Technology for Bachelor of Vocation (BVoc) in Software Development. Recommended by my teachers for excellent 12th results. Here I mastered Full Stack Development, Flutter, Figma, Web Designing, Advanced Web Design, and DBMS — gaining real-world, hands-on experience with modern technologies.',
            icon: <FiBookOpen />,
        },
    ]

    return (
        <section className="section" id="timeline" ref={ref}>
            <motion.div
                className="section-header"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
            >
                <p className="section-number">03.</p>
                <h2 className="section-title">
                    My <span className="title-highlight">Journey</span>
                </h2>
                <div className="section-line" />
                <p className="section-subtitle">
                    A timeline of my growth as a developer.
                </p>
            </motion.div>

            <div className="timeline-container" ref={containerRef}>
                {/* Dim background track */}
                <div className="timeline-line-track" />

                {/* Laser line - scales with scroll */}
                <motion.div
                    className="timeline-line-laser"
                    style={{
                        scaleY: lineScaleY,
                        transformOrigin: 'top',
                    }}
                />

                {timelineData.map((item, i) => (
                    <motion.div
                        className="timeline-item"
                        key={i}
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.5 + i * 0.2, duration: 0.5 }}
                    >
                        <motion.div
                            className="timeline-dot"
                            initial={{ scale: 0 }}
                            animate={isInView ? { scale: 1 } : {}}
                            transition={{ delay: 0.6 + i * 0.2, type: 'spring' }}
                        />
                        <motion.div
                            className="timeline-card"
                            whileHover={{ x: 8 }}
                        >
                            <p className="timeline-date">{item.date}</p>
                            <h3 className="timeline-title">{item.title}</h3>
                            <p className="timeline-subtitle">{item.subtitle}</p>
                            <p className="timeline-description">{item.description}</p>
                        </motion.div>
                    </motion.div>
                ))}

                {/* Finish effect */}
                <div className={`timeline-finish ${isFinished ? 'timeline-finish-active' : ''}`}>
                    <div className="timeline-finish-dot">
                        <div className="timeline-finish-ring timeline-finish-ring-1" />
                        <div className="timeline-finish-ring timeline-finish-ring-2" />
                        <div className="timeline-finish-ring timeline-finish-ring-3" />
                        <div className="timeline-finish-core" />
                    </div>
                    <p className="timeline-finish-text">
                        🚀 The Journey Continues...
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Timeline
