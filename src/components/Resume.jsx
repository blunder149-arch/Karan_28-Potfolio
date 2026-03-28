// eslint-disable-next-line no-unused-vars
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiDownload, FiEye, FiFileText, FiUser, FiBriefcase, FiCode, FiAward } from 'react-icons/fi'

const Resume = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    const highlights = [
        { icon: <FiUser />, label: 'Profile', value: 'Full Stack Developer' },
        { icon: <FiBriefcase />, label: 'Experience', value: '3+ Years Learning' },
        { icon: <FiCode />, label: 'Projects', value: '5+ Live Projects' },
        { icon: <FiAward />, label: 'Education', value: 'BVoc Software Dev' },
    ]

    return (
        <section className="section" id="resume" ref={ref}>
            <motion.div
                className="section-header"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
            >
                <p className="section-number">06.</p>
                <h2 className="section-title">
                    My <span className="title-highlight">Resume</span>
                </h2>
                <div className="section-line" />
                <p className="section-subtitle">
                    A snapshot of my skills, experience, and education.
                </p>
            </motion.div>

            <div className="resume-wrapper">
                {/* Left — Highlights */}
                <motion.div
                    className="resume-highlights"
                    initial={{ opacity: 0, x: -40 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    <h3 className="resume-highlights-title">Quick Snapshot</h3>
                    <div className="resume-highlight-cards">
                        {highlights.map((item, i) => (
                            <motion.div
                                className="resume-highlight-card"
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                                whileHover={{ x: 6 }}
                            >
                                <span className="resume-highlight-icon">{item.icon}</span>
                                <div>
                                    <p className="resume-highlight-label">{item.label}</p>
                                    <p className="resume-highlight-value">{item.value}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        className="resume-cta-box"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.7, duration: 0.5 }}
                    >
                        <p className="resume-cta-text">
                            Want to know more about my work and skills?
                        </p>
                        <div className="resume-btn-group">
                            <a
                                href="/resume/karan-resume.pdf"
                                download="Karan_Chaudhary_Resume.pdf"
                                className="resume-btn-download"
                            >
                                <FiDownload /> Download CV
                            </a>
                            <a
                                href="/resume/karan-resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="resume-btn-view"
                            >
                                <FiEye /> View
                            </a>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Right — Resume Preview Card */}
                <motion.div
                    className="resume-preview-card"
                    initial={{ opacity: 0, x: 40 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3, duration: 0.6 }}
                >
                    <div className="resume-preview-header">
                        <div className="resume-preview-dots">
                            <span /><span /><span />
                        </div>
                        <span className="resume-preview-filename">karan-resume.pdf</span>
                    </div>

                    <div className="resume-preview-body">
                        <div className="resume-placeholder-icon">
                            <FiFileText />
                        </div>
                        <p className="resume-placeholder-title">Resume Preview</p>
                        <p className="resume-placeholder-sub">
                            📎 Resume will be available here soon!
                        </p>

                        {/* Fake resume lines */}
                        <div className="resume-fake-lines">
                            <div className="rfline rfline-wide" />
                            <div className="rfline rfline-mid" />
                            <div className="rfline rfline-short" />
                            <div className="rfline rfline-spacer" />
                            <div className="rfline rfline-wide" />
                            <div className="rfline rfline-mid" />
                            <div className="rfline rfline-short" />
                            <div className="rfline rfline-spacer" />
                            <div className="rfline rfline-wide" />
                            <div className="rfline rfline-short" />
                        </div>
                    </div>

                    <div className="resume-preview-glow" />
                </motion.div>
            </div>
        </section>
    )
}

export default Resume
