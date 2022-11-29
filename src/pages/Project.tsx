import { Typewriter } from "react-simple-typewriter";
import Navigation from "../components/Navigation";
import Socials from "../components/Socials";
import "../styles/project.scss";
import {motion} from "framer-motion"
import Cursor from "../components/Cursor";
import demo from "../asserts/demo.jpg";
import ProjectsNav from "../components/ProjectsNav";
import ProjectMainView from "../components/ProjectMainView";
import ProjectView from "../components/ProjectView";

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
                    <ProjectView 
                        projectImage={demo}
                        figmaLink="https://google.com/"
                        liveLink="https://google.com/"
                        githubLink="https://google.com/"
                        title="Project Title" 
                        description="This will be the project description that will detail what the project is about." 
                        features={["Responsive", "Authentication", "Google Database"]}
                        tools={["React TS", "SASS"]}
                    />
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
                <ProjectMainView 
                    title="Project Title" 
                    description="This will be the project description that will detail what the project is about." 
                    features={["Responsive", "Authentication", "Google Database"]}
                    tools={["React TS", "SASS"]}
                />
                <div className="project-container-socials">
                    <Socials visible={true} />
                </div>
            </motion.section>
            <Cursor />
        </main>
    )
}

export default Project;