import { useState, useEffect } from "react";
import {motion} from "framer-motion";
import "../styles/cursor.scss";
import { FaReact, FaSass } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";

type CirclePostion = {
    x: number;
    y: number
}

const Cursor = () : JSX.Element => {
    const [circle1, setCircle1] = useState<CirclePostion>({ x: 0, y: 0 })
    const [circle2, setCircle2] = useState<CirclePostion>({ x: 0, y: 0 })
    const [circle3, setCircle3] = useState<CirclePostion>({ x: 0, y: 0 })

    useEffect(() => {
        const mousemovement = (e: any) => {
            setCircle1({x: e.clientX, y: e.clientY})
            setCircle2({x: e.clientX, y: e.clientY})
            setCircle3({x: e.clientX, y: e.clientY})
        }
        window.addEventListener("mousemove", mousemovement)

        return () => {
            window.removeEventListener("mousemove", mousemovement)
        }
    }, [])

    return (
        <div className="cursor">
            <motion.div
                className="cursor-item first"
                initial={{opacity: 0}}
                transition={{delay: 2}}
                animate={{
                    opacity: 1,
                    x: circle1.x,
                    y: circle1.y,
                    transition: { type: "spring", mass: 3 }
                }}
            ><SiTypescript /></motion.div>
            <motion.div
                className="cursor-item second"
                initial={{opacity: 0}}
                transition={{delay: 2}}
                animate={{
                    opacity: 1,
                    x: circle2.x - 170,
                    y: circle2.y - 70,
                    transition: { type: "spring", mass: 2 }
                }}
            ><FaReact /></motion.div>
            <motion.div
                className="cursor-item third"
                initial={{opacity: 0}}
                transition={{delay: 2}}
                animate={{
                    opacity: 1,
                    x: circle3.x - 140,
                    y: circle3.y - 30,
                    transition: { type: "spring", mass: 1 }
                }}
            ><FaSass /></motion.div>
        </div>
    )
}

export default Cursor;