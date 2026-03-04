// eslint-disable-next-line no-unused-vars
import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FiMail, FiSend, FiMessageCircle, FiCheck, FiAlertCircle } from 'react-icons/fi'
import { SiGithub, SiWhatsapp } from 'react-icons/si'

const Contact = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })
    const [formData, setFormData] = useState({ name: '', email: '', message: '' })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState(null) // 'success' | 'error' | null

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitStatus(null)

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    access_key: 'eaada051-f11d-454d-ae28-ea15ebc9615f',
                    subject: `Portfolio Contact from ${formData.name}`,
                    from_name: formData.name,
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                }),
            })

            const data = await response.json()
            if (data.success) {
                setSubmitStatus('success')
                setFormData({ name: '', email: '', message: '' })
            } else {
                setSubmitStatus('error')
            }
        } catch {
            setSubmitStatus('error')
        } finally {
            setIsSubmitting(false)
            setTimeout(() => setSubmitStatus(null), 5000)
        }
    }

    const contactLinks = [
        {
            icon: <FiMail />,
            label: 'Email',
            value: 'karanchaudhary9170@gmail.com',
            href: 'mailto:karanchaudhary9170@gmail.com',
        },
        {
            icon: <SiWhatsapp />,
            label: 'WhatsApp',
            value: '+91 77779 72673',
            href: 'https://wa.me/7777972673',
        },
        {
            icon: <SiGithub />,
            label: 'GitHub',
            value: 'karanchaudhary9170-ctrl',
            href: 'https://github.com/karanchaudhary9170-ctrl',
        },
    ]

    return (
        <section className="section" id="contact" ref={ref}>
            <motion.div
                className="section-header"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
            >
                <p className="section-number">06.</p>
                <h2 className="section-title">
                    Get In <span className="title-highlight">Touch</span>
                </h2>
                <div className="section-line" />
            </motion.div>

            <div className="contact-content">
                <motion.div
                    className="contact-info"
                    initial={{ opacity: 0, x: -40 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    <h3>
                        Let's build something <span style={{ color: 'var(--accent-cyan)' }}>amazing</span> together.
                    </h3>
                    <p>
                        I'm always open to discussing new projects, creative ideas, or
                        opportunities to be part of something great. Feel free to reach out!
                    </p>

                    <div className="contact-links">
                        {contactLinks.map((link, i) => (
                            <motion.a
                                key={link.label}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact-link"
                                initial={{ opacity: 0, x: -20 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ delay: 0.4 + i * 0.1 }}
                                whileHover={{ x: 8 }}
                            >
                                <div className="contact-link-icon">{link.icon}</div>
                                <div className="contact-link-text">
                                    <span className="contact-link-label">{link.label}</span>
                                    <span className="contact-link-value">{link.value}</span>
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </motion.div>

                <motion.form
                    className="contact-form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, x: 40 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4, duration: 0.6 }}
                >
                    <div className="form-group">
                        <input
                            type="text"
                            name="name"
                            className="form-input"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="email"
                            name="email"
                            className="form-input"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <textarea
                            name="message"
                            className="form-textarea"
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <motion.button
                        type="submit"
                        className={`form-submit ${submitStatus === 'success' ? 'form-submit-success' : ''} ${submitStatus === 'error' ? 'form-submit-error' : ''}`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? (
                            <>Sending...</>
                        ) : submitStatus === 'success' ? (
                            <>Message Sent! <FiCheck /></>
                        ) : submitStatus === 'error' ? (
                            <>Failed, Try Again <FiAlertCircle /></>
                        ) : (
                            <>Send Message <FiSend /></>
                        )}
                    </motion.button>
                </motion.form>
            </div>
        </section>
    )
}

export default Contact
