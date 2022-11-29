import {motion} from "framer-motion";
import { NavLink } from "react-router-dom";
import { FiDownload } from "react-icons/fi";
import {parent, child} from "../framer/Stagger";

const MobileNavigation = ({show} : {show: boolean}) => {
    return (
        <motion.main 
                className="mobile-nav-main" 
                variants={parent} initial="hidden" 
                animate="show" 
                style={{display: `${(show == true) ? "flex" : "none"}`}}
            > 
                <motion.div variants={child} className="mobile-nav-main-link">
                    <NavLink  to="/">Home</NavLink>
                </motion.div>
                <motion.div variants={child} className="mobile-nav-main-link">
                    <NavLink to="/about">About</NavLink>
                </motion.div>
                <motion.div variants={child}  className="mobile-nav-main-link">
                    <NavLink to="/projects/milton">Projects</NavLink>
                </motion.div>
                <motion.a variants={child} href="http://" download className="mobile-nav-main-download">
                    <FiDownload className="mobile-nav-main-download-icon" />
                    <span className="mobile-nav-main-download-text">Resume</span>
                </motion.a>
            </motion.main>
    )
}

export default MobileNavigation;