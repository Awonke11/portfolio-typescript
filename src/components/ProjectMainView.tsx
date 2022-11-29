import { BiCodeCurly } from "react-icons/bi";

interface ProjectData {
    title: string,
    description: string,
    features: string[],
    tools: string[],
}

const ProjectMainView = ({title, description, features, tools}: ProjectData) => {
    return (
        <div className="project-main-view-main">
                <div className="project-main-view-main-info">
                    <h2 className="project-main-view-main-info-title">{title}</h2>
                    <p className="project-main-view-main-info-description">{description}</p>
                </div>
                <div className="project-main-view-main-features">
                    <h2 className="project-main-view-main-features-title">Features</h2>
                    <div className="project-main-view-main-features-items">
                        {
                            features.map((feature, i) => {
                                return (
                                    <h4 className="project-main-view-main-features-items-item" key={i}>{feature}</h4>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="project-main-view-main-tools">
                    <h2 className="project-main-view-main-tools-title">Tools</h2>
                    <div className="project-main-view-main-tools-items">
                        {
                            tools.map((tool, i) => {
                                return (
                                    <div className="project-main-view-main-tools-items-item" key={i}>
                                        <BiCodeCurly className="project-main-view-main-tools-items-item-icon" />
                                        <h4 className="project-main-view-main-tools-items-item-title">{tool}</h4>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
    )
}

export default ProjectMainView;