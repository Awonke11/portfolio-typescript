import { useState, useEffect } from "react";
import {NavLink} from "react-router-dom";
import demo from "../asserts/demo.jpg";
import personal from "../asserts/personal.png";
import salesmall from "../asserts/salesmall.png";
import milton from "../asserts/milton.png";
import { useFetch } from "../hooks/FetchData";

const ProjectsNav = () => {
    const {data} = useFetch()

    return (
        <div className="project-nav">
            <h3>Nav</h3>
            {
                data?.map((link, i) => {
                    let image = "";
                    if (link.id === "milton") {
                        image = milton
                    } else if (link.id === "personal") {
                        image = personal
                    } else if (link.id === "salesmall") {
                        image = salesmall
                    } else {
                        image = demo
                    }
                    return (
                        <NavLink className="project-nav-link" to={`/projects/${link.id}`} key={i}>
                            <img width="50px" className="project-nav-link-image" src={image} />
                        </NavLink>
                    )
                })
            }
        </div>
    )
}

export default ProjectsNav;