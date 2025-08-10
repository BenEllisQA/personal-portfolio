import {motion} from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";

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
                        <span> 👋 Hey there, welcome to my portfolio!</span>
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
                        <motion.a href="#contacts" 
                        className="cta-secondary" 
                        whileHover={{ scale: 1.05 }} 
                        whileTap={{ scale: 0.95 }}
                        >
                            Contact Me
                        </motion.a>
                    </motion.div>
                    <motion.div className="social-links" variants={staggerContainer}>
                        <motion.a href="https://www.github.com" target="_blank">
                            <i className="fab fa-github"> </i>
                        </motion.a>
                        <motion.a href="https://www.linkedin.com" target="_blank">
                            <i className="fab fa-linkedin"> </i>
                        </motion.a>
                    </motion.div>
                </motion.div>

                <motion.div 
                className="hero-image-container" 
                initial={{ opacity: 0, x: 50 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.8, delay:0.4 }}
                >
                    <div className="code-display" >
                        <SyntaxHighlighter 
                        language="javascript" 
                        customStyle={{ 
                            margin: 0, 
                            padding: "2rem", 
                            height: "100%", 
                            borderRadius: "20px", 
                            background: "rgba(30, 41, 59, 0.8)", 
                            backdropFilter: "blur(10px)",
                            marginBottom: 50, 
                        }}
                        style={vscDarkPlus}>
                            {`const aboutMe: DeveloperProfile = {
    codename: "BenEllisQA",
    origin: "England, UK",
    role: "Quality Assurance Analyst",
    stack: {
        languages: ["JavaScript", "TypeScript"],
        frameworks: ["React", "Next.js"],
    },
    traits: [
        "pixel-perfectionist",
        "dark mode advocate",
        "IDE aesthetic enthusiast",
    ],
    missionStatement:
        "Building beautiful projects with modern technologies"
    };`}
                        </SyntaxHighlighter>
                    </div>
                    <motion.div className="floating-card" animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
                        <div className="card-content">
                            <span className="card-icon">💻</span>
                            <span className="card-text"> Currently working on something fun!</span>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </motion.section>
    );
};