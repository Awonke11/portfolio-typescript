import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const Socials = ({visible} : {visible: boolean}) => {
    const delayTime: number = 1.5;
    return (
        <main className="socials" style={{display: `${(visible == false) && "none"}`}}>
            <motion.a 
                initial={{scale: 2, opacity: 0}}
                animate={{scale: 1, opacity: 1}}
                transition={{duration: .5, delay: delayTime - .9}}
                href="http://" 
                className="socials-link" 
                target="_blank"
            >
                <FaGithub className="socials-link-icon" />
            </motion.a>
            <motion.a 
                initial={{scale: 2, opacity: 0}}
                animate={{scale: 1, opacity: 1}}
                transition={{duration: .5, delay: delayTime - .7}}
                href="http://" 
                className="socials-link" 
                target="_blank"
            >
                <FaInstagram className="socials-link-icon" />
            </motion.a>
            <motion.a 
                initial={{scale: 2, opacity: 0}}
                animate={{scale: 1, opacity: 1}}
                transition={{duration: .5, delay: delayTime - .5}}
                href="http://" 
                className="socials-link" 
                target="_blank"
            >
                <FaLinkedin className="socials-link-icon" />
            </motion.a>
        </main>
    )
}

export default Socials;