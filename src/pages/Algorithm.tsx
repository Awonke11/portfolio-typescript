import Navigation from "../components/Navigation";
import Socials from "../components/Socials";
import "../styles/algorithm.scss";
import {motion} from "framer-motion"
import Cursor from "../components/Cursor";
import SecondSteps from "../components/SecondSteps";
import FirstSteps from "../components/FirstSteps";

const Algorithm = () => {
    return (
        <main className="algorithm">
            <motion.section 
                className="algorithm-content"
                initial={{y: "100%"}}
                animate={{y: "0%"}}
                exit={{opacity: 1}}
                transition={{duration: 1, ease: "easeOut"}}
            >
                <h1 className="algorithm-content-title">Portfolio.</h1>
                <motion.div 
                    className="algorithm-content-info"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{delay: 1, duration: 0.5}}
                >
                    <FirstSteps />
                    <SecondSteps />
                </motion.div>
                <h1 className="algorithm-content-footer">Bringing value opens doors...</h1>
            </motion.section>
            <motion.section 
                className="algorithm-container"
                initial={{x: "100%"}}
                animate={{x: "0%"}}
                exit={{opacity: 1}}
                transition={{duration: 1, ease: "easeOut"}}
            >
                <Navigation />
                <SecondSteps />
                <div className="algorithm-container-socials">
                    <Socials visible={true} />
                </div>
            </motion.section>
            <Cursor />
        </main>
    )
}

export default Algorithm;