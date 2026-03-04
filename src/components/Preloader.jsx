// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'

const Preloader = () => {
    return (
        <motion.div
            className="preloader"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <motion.div
                className="preloader-name"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                KC
            </motion.div>
            <div className="preloader-bar">
                <div className="preloader-bar-fill" />
            </div>
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8rem',
                    color: 'var(--text-muted)',
                    letterSpacing: '2px'
                }}
            >
                LOADING EXPERIENCE...
            </motion.p>
        </motion.div>
    )
}

export default Preloader
