import {useState, useEffect} from "react";
import { FiTool } from "react-icons/fi";
import {motion} from "framer-motion"

const ProgrammingTools = ({list}: {list: string[]}) => {
    const [tools, setTools] = useState<string[]>([])

    useEffect(() => {
        setTools(list)
    }, [])

    return (
        <div className="tools">
            {
                tools.map((tool, i) => {
                    return (
                        <motion.div 
                            key={i} 
                            initial={{opacity: 0, scale: 0.1}}
                            animate={{opacity: 1, scale: 1}}
                            transition={{delay: i / 2, duration: 0.5}}
                            className="tools-tool">
                            <FiTool className="tools-tool-icon" />
                            <h2 className="tools-tool-title">{tool}</h2>
                        </motion.div>
                    )
                })
            }
        </div>
    )
}

export default ProgrammingTools;