import { Typewriter } from "react-simple-typewriter";
import Navigation from "../components/Navigation";
import Socials from "../components/Socials";
import "../styles/project.scss";
import {motion} from "framer-motion"
import Cursor from "../components/Cursor";
import me from "../asserts/AvatarMaker.png"
import ProjectsNav from "../components/ProjectsNav";

const Project = () => {
    return (
        <main className="project">
            <motion.section 
                className="project-content"
                initial={{y: "100%"}}
                animate={{y: "0%"}}
                exit={{opacity: 1}}
                transition={{duration: 1, ease: "easeOut"}}
            >
                <h1 className="project-content-title">Portfolio.</h1>
                <motion.div 
                    className="project-content-info"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{delay: 1, duration: 0.5}}
                >
                    
                </motion.div>
                <ProjectsNav />
            </motion.section>
            <motion.section 
                className="project-container"
                initial={{x: "100%"}}
                animate={{x: "0%"}}
                exit={{opacity: 1}}
                transition={{duration: 1, ease: "easeOut"}}
            >
                <Navigation />
                <div className="project-container-socials">
                    <Socials visible={true} />
                </div>
            </motion.section>
            <Cursor />
        </main>
    )
}

export default Project;