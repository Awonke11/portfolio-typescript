import { NavLink } from "react-router-dom";
import { HiViewGrid } from "react-icons/hi";
import { FiDownload } from "react-icons/fi";
import {parent, child} from "../framer/Stagger";
import {motion} from "framer-motion";
import { useState } from "react";
import MobileNavigation from "./MobileNavigation";
import { AiFillCloseSquare } from "react-icons/ai";
import resume from "../asserts/awonke_resume.pdf"

const Navigation : React.FC = () : JSX.Element => {
    const [displayMobileNav, setDisplayMobileNav] = useState<boolean>(false)
    return (
        <nav className="navigation">
            <motion.main 
                className="navigation-main desktop" 
                variants={parent} initial="hidden" 
                animate="show" 
            > 
                <motion.div variants={child} className="navigation-main-link">
                    <NavLink  to="/">Home</NavLink>
                </motion.div>
                <motion.div variants={child} className="navigation-main-link">
                    <NavLink to="/about">About</NavLink>
                </motion.div>
                <motion.div variants={child}  className="navigation-main-link">
                    <NavLink to="/projects/milton">Projects</NavLink>
                </motion.div>
                <motion.a variants={child} href={resume} download className="navigation-main-download">
                    <FiDownload className="navigation-main-download-icon" />
                    <span className="navigation-main-download-text">Resume</span>
                </motion.a>
            </motion.main>
            {
                displayMobileNav ? <AiFillCloseSquare className="navigation-toggle" onClick={() => {setDisplayMobileNav(!displayMobileNav)}} /> : 
                <HiViewGrid className="navigation-toggle" onClick={() => {setDisplayMobileNav(!displayMobileNav)}} />
            }
            <MobileNavigation show={displayMobileNav} />
        </nav>
    )
}

export default Navigation;