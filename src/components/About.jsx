// eslint-disable-next-line no-unused-vars
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiCode, FiCoffee, FiFolder, FiAward } from 'react-icons/fi'

const About = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    const stats = [
        { icon: <FiCode />, number: '10+', label: 'Projects Built' },
        { icon: <FiCoffee />, number: '500+', label: 'Cups of Coffee' },
        { icon: <FiFolder />, number: '5+', label: 'Technologies' },
        { icon: <FiAward />, number: '1+', label: 'Years Experience' },
    ]

    return (
        <section className="section" id="about" ref={ref}>
            <motion.div
                className="section-header"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
            >
                <p className="section-number">01.</p>
                <h2 className="section-title">
                    About <span className="title-highlight">Me</span>
                </h2>
                <div className="section-line" />
            </motion.div>

            <div className="about-content">
                <motion.div
                    className="about-text"
                    initial={{ opacity: 0, x: -40 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <p>
                        Hey, I'm a Full Stack Developer who feels at home on the internet.
                        I spend my time building web applications, designing clean interfaces,
                        and bringing ideas to life through code.
                    </p>
                    <p>
                        What started as curiosity about how websites work has grown into a
                        strong passion for development. I enjoy solving problems, building
                        scalable systems, and crafting user experiences that are simple yet powerful.
                    </p>
                    <p>
                        For me, coding isn't just work — it's something I genuinely enjoy.
                        I love the process of creating, improving, and shipping products
                        that look great and perform even better.
                    </p>
                    <div className="about-quote">
                        <p>
                            "I build with passion, learn every day, and turn ideas into
                            impactful digital experiences."
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    className="about-stats"
                    initial={{ opacity: 0, x: 40 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    {stats.map((stat, i) => (
                        <motion.div
                            className="stat-card"
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.5 + i * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="stat-number">{stat.number}</div>
                            <div className="stat-label">{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default About
