// eslint-disable-next-line no-unused-vars
import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FiExternalLink, FiGithub, FiShoppingCart, FiClipboard, FiCpu, FiPenTool } from 'react-icons/fi'
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
            title: 'E-Commerce Platform',
            description:
                'A full-featured online shopping platform with user authentication, product management, cart system, and secure payment integration.',
            tags: ['React', 'Node.js', 'MongoDB', 'Express'],
            icon: <FiShoppingCart />,
            github: '#',
            live: '#',
        },
        {
            title: 'Task Management App',
            description:
                'A collaborative task management tool with real-time updates, drag-and-drop functionality, and team workspace features.',
            tags: ['React', 'Firebase', 'Tailwind CSS'],
            icon: <FiClipboard />,
            github: '#',
            live: '#',
        },
        {
            title: 'AI Chat Assistant',
            description:
                'An intelligent chatbot application powered by AI APIs with natural language processing and contextual conversation abilities.',
            tags: ['Python', 'React', 'OpenAI API'],
            icon: <FiCpu />,
            github: '#',
            live: '#',
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
