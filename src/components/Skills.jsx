// eslint-disable-next-line no-unused-vars
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiLayout, FiServer, FiSmartphone, FiTool } from 'react-icons/fi'
import {
    SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss,
    SiNodedotjs, SiExpress, SiMongodb, SiFirebase, SiPython, SiSupabase,
    SiFlutter, SiDart, SiAndroid,
    SiGit, SiGithub, SiFigma, SiCanva
} from 'react-icons/si'
import { VscCode } from 'react-icons/vsc'

const Skills = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    const categories = [
        {
            title: 'Frontend',
            className: 'frontend',
            icon: <FiLayout />,
            skills: [
                { name: 'HTML5', icon: <SiHtml5 /> },
                { name: 'CSS3', icon: <SiCss3 /> },
                { name: 'JavaScript', icon: <SiJavascript /> },
                { name: 'React.js', icon: <SiReact /> },
                { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
            ]
        },
        {
            title: 'Backend',
            className: 'backend',
            icon: <FiServer />,
            skills: [
                { name: 'Node.js', icon: <SiNodedotjs /> },
                { name: 'Express.js', icon: <SiExpress /> },
                { name: 'MongoDB', icon: <SiMongodb /> },
                { name: 'Firebase', icon: <SiFirebase /> },
                { name: 'Python', icon: <SiPython /> },
                { name: 'Supabase', icon: <SiSupabase /> },
            ]
        },
        {
            title: 'Mobile',
            className: 'mobile',
            icon: <FiSmartphone />,
            skills: [
                { name: 'Flutter', icon: <SiFlutter /> },
                { name: 'Dart', icon: <SiDart /> },
                { name: 'Android', icon: <SiAndroid /> },
            ]
        },
        {
            title: 'Tools & Design',
            className: 'tools',
            icon: <FiTool />,
            skills: [
                { name: 'Git', icon: <SiGit /> },
                { name: 'GitHub', icon: <SiGithub /> },
                { name: 'VS Code', icon: <VscCode /> },
                { name: 'Figma', icon: <SiFigma /> },
                { name: 'Canva', icon: <SiCanva /> },
            ]
        }
    ]

    return (
        <section className="section" id="skills" ref={ref}>
            <motion.div
                className="section-header"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
            >
                <p className="section-number">02.</p>
                <h2 className="section-title">
                    My <span className="title-highlight">Toolkit</span>
                </h2>
                <div className="section-line" />
                <p className="section-subtitle">
                    Technologies and tools I use to bring ideas to life.
                </p>
            </motion.div>

            <div className="skills-grid">
                {categories.map((cat, i) => (
                    <motion.div
                        key={cat.title}
                        className={`skill-category ${cat.className}`}
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.2 + i * 0.15, duration: 0.5 }}
                        whileHover={{ scale: 1.02 }}
                    >
                        <div className="skill-category-header">
                            <div className="skill-category-icon">{cat.icon}</div>
                            <h3 className="skill-category-title">{cat.title}</h3>
                        </div>
                        <div className="skill-tags">
                            {cat.skills.map((skill, j) => (
                                <motion.div
                                    key={skill.name}
                                    className="skill-tag"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                    transition={{ delay: 0.4 + i * 0.1 + j * 0.05 }}
                                    whileHover={{ scale: 1.08, y: -2 }}
                                >
                                    {skill.icon} {skill.name}
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

export default Skills
