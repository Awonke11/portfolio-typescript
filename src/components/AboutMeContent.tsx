import {Link} from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import ProgrammingTools from "./ProgrammingTools";

const AboutMeContent = () : JSX.Element => {
    return (
        <div className="about-me">
            <div className="about-me-content">
                <div className="about-me-content-header">
                    <h1 className="about-me-content-header-title">About Me</h1>
                    <p className="about-me-content-header-description">My name is Awonke Mnotoza. I am a full time student in the University of Cape Town. I love watching Anime and listening to music. I love learning new frameworks.</p>
                </div>
                <div className="about-me-content-tools">
                    <h2 className="about-me-content-tools-title">Programming Tools</h2>
                    <ProgrammingTools list={["React JS", "Typescript", "Javascript", "Python", "Java", "SASS", "Firebase"]} />
                </div>
                <Link to="/algorithm" className="about-me-content-algorithm">
                    <span>My Algorithm for creating a website</span>
                    <AiOutlineArrowRight />
                </Link>
            </div>
        </div>
    )
}

export default AboutMeContent;