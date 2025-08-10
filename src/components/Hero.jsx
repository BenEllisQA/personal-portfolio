import {motion} from "framer-motion";

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
};

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

export const Hero = () => {
    return (
        <motion.section 
            id="home" 
            className="hero" 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
        >
            <div className="hero-container">
                <motion.div 
                    className="hero-content" 
                    variants={staggerContainer} 
                    intial="initial" 
                    animate="animate"
                >
                    <motion.div className="hero-badge">
                        <span> 👋 Hello there, I am </span>
                    </motion.div>
                    <motion.h1 
                    className="glitch" 
                    variants={fadeInUp} 
                    whileHover={{ scale: 1.02 }}
                    >
                        Ben Ellis
                    </motion.h1>
                    <motion.h2 className="hero-subtitle" variants={fadeInUp}>
                        QA Analyst & Creative Designer
                    </motion.h2>
                    <motion.p className="hero-description" variants={fadeInUp}>
                        Ensuring flawless user experiences today, building beautiful ones tomorrow. QA with a front-end future.
                    </motion.p>
                    
                    <motion.div className="cta-buttons" variants={staggerContainer}>
                        <motion.a href="#projects" 
                        className="cta-primary" 
                        whileHover={{ scale: 1.05 }} 
                        whileTap={{ scale: 0.95 }}
                        > 
                            View my work
                        </motion.a>
                        <motion.a href="#contact" 
                        className="cta-secondary" 
                        whileHover={{ scale: 1.05 }} 
                        whileTap={{ scale: 0.95 }}
                        > 
                            Contact Me
                        </motion.a>
                    </motion.div>
                </motion.div>
            </div>
        </motion.section>
    );
};