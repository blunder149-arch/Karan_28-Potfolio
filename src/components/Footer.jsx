import { FiGithub, FiMail, FiHeart } from 'react-icons/fi'
import { SiWhatsapp } from 'react-icons/si'

const Footer = () => {
    return (
        <footer className="footer">
            <p className="footer-text">
                Designed & Built by Karan Chaudhary with <span className="heart"><FiHeart style={{ display: 'inline', verticalAlign: 'middle' }} /></span>
            </p>

            <div className="footer-socials">
                <a
                    href="https://github.com/karanchaudhary9170-ctrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-social"
                    aria-label="GitHub"
                >
                    <FiGithub />
                </a>
                <a
                    href="mailto:karanchaudhary9170@gmail.com"
                    className="footer-social"
                    aria-label="Email"
                >
                    <FiMail />
                </a>
                <a
                    href="https://wa.me/7777972673"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-social"
                    aria-label="WhatsApp"
                >
                    <SiWhatsapp />
                </a>
            </div>
        </footer>
    )
}

export default Footer
