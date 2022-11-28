import { Typewriter } from "react-simple-typewriter";
import Navigation from "../components/Navigation";
import Socials from "../components/Socials";
import "../styles/about.scss";
import {motion} from "framer-motion"
import Cursor from "../components/Cursor";
import AboutMeContent from "../components/AboutMeContent";
import me from "../asserts/AvatarMaker.png"

const About = () => {
    return (
        <main className="about">
            <motion.section 
                className="about-content"
                initial={{y: "100%"}}
                animate={{y: "0%"}}
                exit={{opacity: 1}}
                transition={{duration: 1, ease: "easeOut"}}
            >
                <h1 className="about-content-title">Portfolio.</h1>
                <motion.div 
                    className="about-content-info"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{delay: 1, duration: 0.5}}
                >
                    <AboutMeContent />
                </motion.div>
                <h2 className="about-content-footer">God is Able...</h2>
            </motion.section>
            <motion.section 
                className="about-container"
                initial={{x: "100%"}}
                animate={{x: "0%"}}
                exit={{opacity: 1}}
                transition={{duration: 1, ease: "easeOut"}}
            >
                <Navigation />
                <div className="avator">
                    <img src={me} alt="me" />
                </div>
                <div className="about-container-socials">
                    <Socials visible={true} />
                </div>
            </motion.section>
            <Cursor />
        </main>
    )
}

export default About;