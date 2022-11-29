import Navigation from "../components/Navigation";
import Socials from "../components/Socials";
import "../styles/project.scss";
import {motion} from "framer-motion"
import Cursor from "../components/Cursor";
import ProjectsNav from "../components/ProjectsNav";
import ProjectMainView from "../components/ProjectMainView";
import ProjectView from "../components/ProjectView";
import {useParams} from "react-router-dom"
import { useFilter } from "../hooks/FilterData";
import {db} from "../firebase/firebase";
import {useState, useEffect} from "react";
import {collection, getDocs} from "firebase/firestore";
import demo from "../asserts/demo.jpg";
import personal from "../asserts/personal.png";
import salesmall from "../asserts/salesmall.png";
import milton from "../asserts/milton.png";

interface Data {
    title: string,
    description: string,
    figmaLink: string,
    liveLink: string,
    githubLink: string,
    features: string[],
    tools: string[],
    img: string
}

const Project = () => {
    const {id} = useParams()
    const {filteredData} = useFilter(`${id}`)
    
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
                        projectImage={`${filteredData?.img}`}
                        figmaLink={`${filteredData?.figmaLink}}`}
                        liveLink={`${filteredData?.liveLink}`}
                        githubLink={`${filteredData?.githubLink}`}
                        title={`${filteredData?.title}`} 
                        description={`${filteredData?.description}`}
                        features={(filteredData != undefined) ? filteredData?.features : ["Responsive"]}
                        tools={(filteredData != undefined) ? filteredData?.tools : ["React Ts"]}
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
                    title={`${filteredData?.title}`} 
                    description={`${filteredData?.description}`}
                    features={(filteredData != undefined) ? filteredData?.features : ["Responsive"]}
                    tools={(filteredData != undefined) ? filteredData?.tools : ["React Ts"]}
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