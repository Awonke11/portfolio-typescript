import { Typewriter } from "react-simple-typewriter";
import Navigation from "../components/Navigation";
import Socials from "../components/Socials";
import "../styles/home.scss";
import {motion} from "framer-motion"
import Cursor from "../components/Cursor";

const Home = () => {
    return (
        <main className="home">
            <motion.h1 
                className="home-background"
                initial={{scale: 0.1, opacity: 0}}
                animate={{scale: 1, opacity: 1}}
                transition={{durattion: 0.5, delay: 1, ease: "easeOut"}}
            >A</motion.h1>
            <motion.section 
                className="home-content"
                initial={{y: "100%"}}
                animate={{y: "0%"}}
                exit={{opacity: 1}}
                transition={{duration: 1, ease: "easeOut"}}
            >
                <h1 className="home-content-title">Portfolio.</h1>
                <motion.div 
                    className="home-content-info"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{delay: 1, duration: 0.5}}
                >
                    <h1 className="home-content-info-title">
                        <b>I'm,</b>
                        <Typewriter 
                            words={["Awonke", "Mnotoza"]} 
                            loop={0}
                        />
                    </h1>
                    <p className="home-content-info-description">Self-taught Junior Frontend Engineer passionate about interactive design.  Creating for a purpose that will impact and inspire others.</p>
                    <a className="home-content-info-button" href="mailto:mnotozawonke@gmail.com">
                        <button>Hire me</button>
                    </a>
                </motion.div>
            </motion.section>
            <motion.section 
                className="home-container"
                initial={{x: "100%"}}
                animate={{x: "0%"}}
                exit={{opacity: 1}}
                transition={{duration: 1, ease: "easeOut"}}
            >
                <Navigation />
                <div className="home-container-socials">
                    <Socials visible={true} />
                </div>
            </motion.section>
            <Cursor />
        </main>
    )
}

export default Home;