import { FaFigma, FaEye, FaGithub } from "react-icons/fa";
import ProjectMainView from "./ProjectMainView";

interface ProjectData {
    projectImage: string,
    figmaLink: string,
    liveLink: string,
    githubLink: string,
    title: string,
    description: string,
    features: string[],
    tools: string[],
}

const ProjectView = ({projectImage, figmaLink, liveLink, githubLink, title, description, features, tools } : ProjectData) => {
    return (
        <div className="project-view">
            <div className="project-view-content">
                <img className="project-view-content-image" src={projectImage} alt="demo" width="200px" />
                <div className="project-view-content-links">
                    <a className="project-view-content-links-link" href={`${figmaLink}`} target="_blank" rel="noopener noreferrer">
                        <FaFigma className="project-view-content-links-link-icon" />
                        <h4 className="project-view-content-links-link-title">Figma</h4>
                    </a>
                    <a className="project-view-content-links-link" href={`${liveLink}`} target="_blank" rel="noopener noreferrer">
                        <FaEye className="project-view-content-links-link-icon" />
                        <h4>Live</h4>
                    </a>
                    <a className="project-view-content-links-link" href={`${githubLink}`} target="_blank" rel="noopener noreferrer">
                        <FaGithub className="project-view-content-links-link-icon" />
                        <h4 className="project-view-content-links-link-title">Code</h4>
                    </a>
                </div>
            </div>
            <ProjectMainView title={title} description={description} features={features} tools={tools} />
        </div>
    )
}

export default ProjectView;