import { useState } from "react";
import {NavLink} from "react-router-dom";
import demo from "../asserts/demo.jpg"

const ProjectsNav = () => {
    const [imageLink, setImageLink] = useState<any[]>([{
        title: "place",
        image: demo
    }, {title: "else", image: demo}])

    return (
        <div className="project-nav">
            <h3>Nav</h3>
            {
                imageLink.map((link, i) => {
                    return (
                        <NavLink className="project-nav-link" to={`/projects/${link.title}`} key={i}>
                            <img width="50px" className="project-nav-link-image" src={link.image} />
                        </NavLink>
                    )
                })
            }
        </div>
    )
}

export default ProjectsNav;