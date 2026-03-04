import { useState, useEffect, useRef } from 'react'

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('')
    const [navHidden, setNavHidden] = useState(false)
    const lastScrollY = useRef(0)

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY

            setScrolled(currentScrollY > 50)

            // Smart show/hide: hide on scroll down, show on scroll up
            if (currentScrollY <= 80) {
                // At the top of the page — always show
                setNavHidden(false)
            } else if (currentScrollY > lastScrollY.current) {
                // Scrolling DOWN — hide navbar
                setNavHidden(true)
            } else {
                // Scrolling UP — show navbar
                setNavHidden(false)
            }

            lastScrollY.current = currentScrollY

            // Detect active section
            const sections = ['about', 'skills', 'timeline', 'projects', 'designs', 'contact']
            for (const id of sections.reverse()) {
                const el = document.getElementById(id)
                if (el && currentScrollY >= el.offsetTop - 200) {
                    setActiveSection(id)
                    break
                }
            }
            if (currentScrollY < 200) setActiveSection('')
        }
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navItems = [
        { label: 'About', href: '#about', id: 'about' },
        { label: 'Skills', href: '#skills', id: 'skills' },
        { label: 'Journey', href: '#timeline', id: 'timeline' },
        { label: 'Projects', href: '#projects', id: 'projects' },
        { label: 'Designs', href: '#designs', id: 'designs' },
        { label: 'Contact', href: '#contact', id: 'contact' },
    ]

    const handleNavClick = (e, href) => {
        e.preventDefault()
        setMenuOpen(false)
        const el = document.querySelector(href)
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <div className={`navbar-wrapper ${navHidden ? 'nav-hidden' : ''}`} id="navbar">
            <nav className={`navbar-pill ${scrolled ? 'scrolled' : ''}`}>
                {/* Logo */}
                <div className="nav-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <span className="logo-bracket">&lt;</span>
                    <span className="logo-name">Karan</span>
                    <span className="logo-dot">/&gt;</span>
                </div>

                {/* Center nav links */}
                <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
                    {/* Mobile back arrow */}
                    <button className="nav-mobile-back" onClick={() => setMenuOpen(false)} aria-label="Close menu">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M19 12H5" />
                            <path d="M12 19l-7-7 7-7" />
                        </svg>
                        <span>Back</span>
                    </button>

                    {navItems.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            className={activeSection === item.id ? 'active' : ''}
                            onClick={(e) => handleNavClick(e, item.href)}
                        >
                            {item.label}
                        </a>
                    ))}
                </div>

                {/* Right side CTA */}
                <div className="nav-right">
                    <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="nav-cta-link">
                        <button className="nav-cta">Let's Talk</button>
                    </a>

                    <button
                        className="nav-mobile-toggle"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span style={menuOpen ? { transform: 'rotate(45deg) translate(5px, 5px)' } : {}} />
                        <span style={menuOpen ? { opacity: 0 } : {}} />
                        <span style={menuOpen ? { transform: 'rotate(-45deg) translate(5px, -5px)' } : {}} />
                    </button>
                </div>
            </nav>

            {/* Mobile overlay */}
            {menuOpen && <div className="nav-mobile-overlay" onClick={() => setMenuOpen(false)} />}
        </div>
    )
}

export default Navbar
