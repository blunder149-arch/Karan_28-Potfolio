// eslint-disable-next-line no-unused-vars
import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FiExternalLink, FiGithub, FiShoppingCart, FiClipboard, FiCpu, FiPenTool, FiFileText, FiBook } from 'react-icons/fi'
import { FaBuilding } from 'react-icons/fa'

const Projects = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    const projectsData = [
        {
            title: 'Hostel Management System',
            description:
                'A comprehensive hostel management app with QR-based attendance, complaint system, leave management, and admin dashboard.',
            tags: ['Flutter', 'Firebase', 'Dart'],
            icon: <FaBuilding />,
            github: 'https://github.com/kalilinux78610-maker/hostelv3.git',
            live: '',
        },
        {
            title: 'AI Resume Analyzer',
            description:
                'An AI-powered resume analysis platform that scores resumes against job descriptions, detects missing skills, checks ATS compatibility, and provides smart improvement suggestions — all powered by Google Gemini AI.',
            tags: ['Next.js', 'FastAPI', 'Google Gemini AI', 'Python', 'Vercel'],
            icon: <FiFileText />,
            github: 'https://github.com/blunder149-arch/AI-Resume-Analyzer.git',
            live: 'https://ai-resume-analyzer-virid-two.vercel.app/dashboard',
        },
        {
            title: 'Chaudhary Vegetables',
            description:
                'A live e-commerce platform for a real vegetable shop — featuring product listings, cart management, user authentication, order placement, and an admin panel for inventory and order management. Currently running in production.',
            tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Vercel'],
            icon: <FiShoppingCart />,
            github: 'https://github.com/karanchaudhary9170-ctrl/fresh-veggies-shop.git',
            live: 'https://fresh-veggies-shop.vercel.app/',
        },
        {
            title: 'BG Remover',
            description:
                'An AI-powered background removal tool using the U2NET deep learning model. Instantly removes backgrounds with pixel-perfect edge detection — 100% private, no sign-up, no watermarks. Built for personal use and used by friends daily.',
            tags: ['Python', 'Flask', 'U2NET', 'JavaScript', 'Hugging Face'],
            icon: <FiCpu />,
            github: 'https://github.com/blunder149-arch/BGEraser.git',
            live: 'https://karan-28-bgeraser.hf.space/',
        },
        {
            title: 'Smart Study Buddy',
            description:
                'An AI-powered personal study companion with chapter-wise context selection, AI chat for doubt solving, virtual classroom, and an intelligent search bar — designed to make self-study smarter and faster.',
            tags: ['React', 'Vite', 'Firebase', 'Gemini AI', 'Vercel'],
            icon: <FiBook />,
            github: 'https://github.com/blunder149-arch/smart-study-buddy.git',
            live: 'https://smart-study-buddy-kohl.vercel.app',
        },
        {
            title: 'Portfolio Generator',
            description:
                'A dynamic portfolio builder that lets users create stunning portfolios with customizable themes, sections, and animations.',
            tags: ['React', 'Node.js', 'CSS3'],
            icon: <FiPenTool />,
            github: '#',
            live: '#',
        },
    ]

    const CardTilt = ({ children }) => {
        const [transform, setTransform] = useState('')

        const handleMouseMove = (e) => {
            const card = e.currentTarget
            const rect = card.getBoundingClientRect()
            const x = e.clientX - rect.left
            const y = e.clientY - rect.top
            const centerX = rect.width / 2
            const centerY = rect.height / 2
            const rotateX = (y - centerY) / 15
            const rotateY = (centerX - x) / 15

            setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`)
        }

        const handleMouseLeave = () => {
            setTransform('')
        }

        return (
            <div
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{ transform, transition: 'transform 0.2s ease' }}
            >
                {children}
            </div>
        )
    }

    return (
        <section className="section" id="projects" ref={ref}>
            <motion.div
                className="section-header"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
            >
                <p className="section-number">04.</p>
                <h2 className="section-title">
                    Featured <span className="title-highlight">Projects</span>
                </h2>
                <div className="section-line" />
                <p className="section-subtitle">
                    Here are some of the projects I've built. Each one taught me something new.
                </p>
            </motion.div>

            <div className="projects-grid">
                {projectsData.map((project, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                    >
                        <CardTilt>
                            <div className="project-card">
                                <div className="project-image">
                                    <div className="project-image-gradient" />
                                    <span className="project-image-icon">{project.icon}</span>
                                    <div className="project-overlay">
                                        {project.github && project.github !== '#' && (
                                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                                                <button className="project-overlay-btn" aria-label="View GitHub">
                                                    <FiGithub />
                                                </button>
                                            </a>
                                        )}
                                        {project.live && project.live !== '#' && (
                                            <a href={project.live} target="_blank" rel="noopener noreferrer">
                                                <button className="project-overlay-btn" aria-label="View Live">
                                                    <FiExternalLink />
                                                </button>
                                            </a>
                                        )}
                                    </div>
                                </div>
                                <div className="project-info">
                                    <div className="project-tags">
                                        {project.tags.map((tag) => (
                                            <span className="project-tag" key={tag}>{tag}</span>
                                        ))}
                                    </div>
                                    <h3 className="project-title">{project.title}</h3>
                                    <p className="project-description">{project.description}</p>
                                    <div className="project-links-visible">
                                        {project.github && project.github !== '#' && (
                                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link-item">
                                                <FiGithub /> Code
                                            </a>
                                        )}
                                        {project.live && project.live !== '#' && (
                                            <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link-item">
                                                <FiExternalLink /> Live Demo
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </CardTilt>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

export default Projects
